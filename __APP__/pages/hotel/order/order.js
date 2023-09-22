!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [65577],
      {
        79393: function (e, t, i) {
          var a = i(32180),
            n = i(79301),
            l = i(95308),
            c = i(57042),
            r = i(24460),
            o = i(81876),
            s = i(21867),
            d = i(86066),
            u = i(52500),
            m = i(71515),
            h = i(92954),
            p = i.n(h),
            g = i(81957),
            f = i(79792),
            w = i(44778),
            v = i(65573),
            N = i(18783),
            Z = i(58676),
            b = i(73130),
            V = i(22276),
            y = i(298),
            x = i(90129),
            I = i(79910),
            C = i(79404),
            B = i(49120),
            k = i(20592),
            T = i(80626),
            P = i(90668),
            X = i(8271),
            D = i.n(X),
            L = i(17917),
            S = i(13025),
            A = i(30071),
            M = f.default.isTieyou ? "tieyou" : "suanya",
            F = {
              zx: {
                notice:
                  "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/qipao_icon/icon_tongzhi@3x.png",
              },
              ty: {
                notice:
                  "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/qipao_icon/icon_kefu_ty@3x.png",
              },
              baiduRedPack:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/kaoshenjia/kaoyanrili/zhixingxinkehongbao@3x.png",
              bottomPost: {
                swan: "https://images3.c-ctrip.com/ztrip/hotel/icons/xiaochengxu/jiudianxuanchuan@3x.png",
                zxty: "https://images3.c-ctrip.com/ztrip/hotel/202109/slogan@3x.png",
              },
              cashbackRedPack:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/icon_hongbao@3x.png",
              casjFloatIcon:
                "https://images3.c-ctrip.com/ztrip/hotel/icons/jikahuodong/fubiao-zhankai@3x.png",
              invoiceUrl: "https://m.".concat(
                M,
                ".com/webapp/train/activity/hotel-invoice-make-out"
              ),
              zxSwanIcon:
                "https://images3.c-ctrip.com/ztrip/train.xin/2023_05/icon_travel@3x.png",
            },
            _ = "不可取消",
            z = "CANCEL_POLICY",
            R = "PRICE_DETAIL",
            O = "PRICE_COMPENSATE",
            j = "BOOK_REMIND",
            E = "BARGAIN_FAIL",
            U = "REFUND_PROCESS",
            H = "PACKAGE_INFO",
            q = "FREE_GIFT",
            G = "LIVED_PACKAGE",
            $ = "CASH_BACK",
            K = "CONSULT_FAIL",
            W = "CONSULT_SUCCESS",
            Y = "BOOK_REMIND_NEW",
            Q = {
              level_0: {
                bgImg:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/bg-pthy@3x.webp",
                bgColor: "#F2FAFF",
                textColor: "#198CFF",
                userPointsIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/pt_jfdh@3x.webp",
                cashbackIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/pt_fx@3x.webp",
                priceDetailIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/pt_coupon@3x.webp",
                threeRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/pt_mgp@3x.webp",
                trainRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/lvyoucitytuitrainyouhuiquan/putonghctequan@3x.webp",
              },
              level_2: {
                bgImg:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/bg-by@3x.webp",
                bgColor: "#EFF9FC",
                textColor: "#5D7596",
                userPointsIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/by_jfdh@3x.webp",
                cashbackIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/by_fx@3x.webp",
                priceDetailIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/by_coupon@3x.webp",
                threeRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/by_mgp@3x.webp",
                trainRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/lvyoucitytuitrainyouhuiquan/baiyinhctequan@3x.webp",
              },
              level_3: {
                bgImg:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/bg_hj@3x.webp",
                bgColor: "#FFF6F3",
                textColor: "#D47D42",
                userPointsIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/hj_jfdh@3x.webp",
                cashbackIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/hj_fx@3x.webp",
                priceDetailIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/hj_coupon@3x.webp",
                threeRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/hj_mgp@3x.webp",
                trainRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/lvyoucitytuitrainyouhuiquan/huangjinhctequan@3x.webp",
              },
              level_4: {
                bgImg:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/bg_bj@3x.webp",
                bgColor: "#F3F4FF",
                textColor: "#623FCF",
                userPointsIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/bj_jfdh@3x.webp",
                cashbackIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/bj_fx@3x.webp",
                priceDetailIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/bj_coupon@3x.webp",
                threeRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/bj_mgp@3x.webp",
                trainRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/lvyoucitytuitrainyouhuiquan/bojinhctequan@3x.webp",
              },
              level_5: {
                bgImg:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/bg_hz@3x.webp",
                bgColor: "#FFF7F7",
                textColor: "#352A4C",
                userPointsIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/hz_jfdh@3x.webp",
                cashbackIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/hz_fx@3x.webp",
                priceDetailIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/hz_coupon@3x.webp",
                threeRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/hz_mgp@3x.webp",
                trainRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/lvyoucitytuitrainyouhuiquan/heizuanhctequan@3x.webp",
              },
              business_travel: {
                bgImg:
                  "https://images3.c-ctrip.com/ztrip/hotel/t.ding/shanglv/ddxq_bdkx_shanglv@3x.webp",
                bgColor: "#EBF3FE",
                textColor: "#352A4C",
                userPointsIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/by_jfdh@3x.webp",
                cashbackIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/by_fx@3x.webp",
                priceDetailIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/by_coupon@3x.webp",
                threeRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/by_mgp@3x.webp",
                trainRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/lvyoucitytuitrainyouhuiquan/baiyinhctequan@3x.webp",
              },
              default: {
                bgImg:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/bg-dd@3x.webp",
                bgColor: "#F2FAFF",
                textColor: "#198CFF",
                userPointsIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/pt_jfdh@3x.webp",
                cashbackIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/pt_fx@3x.webp",
                priceDetailIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/pt_coupon@3x.webp",
                threeRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/2022/7/pt_mgp@3x.webp",
                trainRightIcon:
                  "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/lvyoucitytuitrainyouhuiquan/putonghctequan@3x.webp",
              },
            },
            J = "https://images3.c-ctrip.com/ztrip/hotel/2022/7/vip@3x.webp",
            ee =
              "https://images3.c-ctrip.com/ztrip/hotel/2022/7/fuli_ticket2@3x.webp",
            te =
              "https://images3.c-ctrip.com/ztrip/hotel/2022/7/fuli_wx@3x.webp",
            ie = f.default.isTieyou
              ? [
                  {
                    title: "订单状态通知",
                    tempId: "g8kpi13ElW3IzbjINwUb1YXRXBs7pApqETWKBvp20UE",
                  },
                  {
                    title: "酒店活动通知",
                    tempId: "muocyLZx1NR1G9CoPkuqF8hV1jkEZ-oyDgSgRQFAsog",
                  },
                ]
              : [
                  {
                    title: "订单状态通知",
                    tempId: "jnMSVfYgX_arKsh3W3updlqV-Bu73xXRy6Erpx33Se8",
                  },
                  {
                    title: "酒店活动通知",
                    tempId: "MPIowhAEUInI3IcvbflrhsmE3rbYG5scyxzLu0poWaE",
                  },
                  {
                    title: "酒店优惠券到期通知",
                    tempId: "FIciOECXCI7SBoKgIWJARTg_pPYhbEMb2RKx-AGulUE",
                  },
                ],
            ae = "FOLLOW_UP",
            ne = "COLLECT_CARD",
            le = "SUBSCRIBE",
            ce = "STUDENT",
            re = i(92667),
            oe = (function () {
              var e = (0, l.Z)(
                (0, n.Z)().mark(function e() {
                  var t, i, a, l, c, r;
                  return (0, n.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (t = ie.map(function (e) {
                                return e.tempId;
                              })),
                              (e.next = 4),
                              I.Z.getSubscribe(t)
                            );
                          case 4:
                            if (
                              ((i = e.sent),
                              (a = i.mainSwitch),
                              (l = i.unKnownList),
                              a && null != l && l.length)
                            ) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 9:
                            return (
                              (c = ie.filter(function (e) {
                                return l.includes(e.tempId);
                              })),
                              (r = {
                                modalInfo: {
                                  title: "消息提醒",
                                  desc: "酒店订单状态实时提醒，超值特惠活动不再错过",
                                  sourceCode: "hotel_orderdetail_wxpush",
                                  subList: c,
                                },
                                type: le,
                                thresholdKey: le,
                                thresholdValue: 864e5,
                              }),
                              e.abrupt("return", r)
                            );
                          case 15:
                            return (
                              (e.prev = 15),
                              (e.t0 = e.catch(0)),
                              e.abrupt("return", null)
                            );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 15]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            se = function (e, t, i) {
              var a = e.popWindowInfo,
                n = e.orderState,
                l = e.orderNumber,
                c = e.inviteFriendBanners,
                r = {},
                o = t.find(function (e) {
                  return e.type === ae;
                }),
                s = t.find(function (e) {
                  return e.type === ce;
                }),
                d = 6 === (null == a ? void 0 : a.popId);
              if (a)
                if ([11, 12].includes(a.popId))
                  !o && t.push({ modalInfo: a, type: ae, thresholdKey: ae });
                else if (4 === n) {
                  var u,
                    m,
                    h = A.ce.getAttr("pageInModalArr") || [],
                    p = "".concat(l).concat(a.popId);
                  h.includes(p) ||
                    (d && !s
                      ? t.push({ modalInfo: a, type: ce, thresholdKey: ce })
                      : d ||
                        ((r.serviceModalInfo = a),
                        (r.serviceModalVisible = !0)),
                    h.push(p),
                    A.ce.setAttr("pageInModalArr", h.slice(-100)),
                    "4" == a.popId && (k.Tr.scanHotelVipTaskStatus = 4),
                    "5" == a.windowCode &&
                      (null === (u = i.page.$instance) ||
                        void 0 === u ||
                        null === (m = u.page) ||
                        void 0 === m ||
                        m.ubtTrace(184160, 5)));
                } else {
                  var g, w;
                  d && !s
                    ? t.push({ modalInfo: a, type: ce, thresholdKey: ce })
                    : d ||
                      ((r.serviceModalInfo = a), (r.serviceModalVisible = !0)),
                    "5" == a.windowCode &&
                      (null === (g = i.page.$instance) ||
                        void 0 === g ||
                        null === (w = g.page) ||
                        void 0 === w ||
                        w.ubtTrace(184160, 6));
                }
              var v = c || [],
                N = (0, x.Z)(v, 1)[0],
                Z = A.ce.getAttr("cashBackOrderList");
              return (
                t.find(function (e) {
                  return e.type === ne;
                }) ||
                  f.default.isBaidu ||
                  !N ||
                  (Z
                    ? Z.includes(l) ||
                      (Z.push(l),
                      A.ce.setAttr("cashBackOrderList", Z),
                      t.push({ modalInfo: N, type: ne, thresholdKey: ne }))
                    : (A.ce.setAttr("cashBackOrderList", [l]),
                      t.push({ modalInfo: N, type: ne, thresholdKey: ne }))),
                (r.modals = t),
                r
              );
            },
            de = function (e) {
              var t = e.consumePackages,
                i = (0, P.Bf)(t || []),
                a = i.giftBox,
                n = i.highValuePackage,
                l = {};
              if (null != t && t.length) {
                var c = t.filter(function (e) {
                    return 3 === e.type;
                  }),
                  r = c.length
                    ? c
                        .filter(function (e) {
                          var t;
                          return null === (t = e.consumePackageDetails) ||
                            void 0 === t
                            ? void 0
                            : t.length;
                        })
                        .map(function (e) {
                          return e.consumePackageDetails
                            .map(function (e) {
                              return e.priefName;
                            })
                            .join("+");
                        })
                        .join("+")
                    : "";
                r && ((l.detailNameStr = r), (l.details = c));
              }
              return {
                giftBox: a,
                highValuePackage: n,
                livedConsumePackages: l,
              };
            },
            ue = function (e) {
              var t = e.orderState,
                i = e.orderPrice,
                a = e.ladderDeductionList,
                n = e.pointCancelPolicyList,
                l = e.cancelRemark,
                c = t >= 6 && t <= 9,
                r = new Date().getTime(),
                o = "取消政策及说明",
                s =
                  null == n
                    ? void 0
                    : n.find(function (e) {
                        return 2 === e.type;
                      });
              if (s) o = "".concat(s.title, " · ").concat(s.desc);
              else if (!c && null != a && a.length)
                for (var d = 0; d < a.length; d++) {
                  var u = a[d] || {},
                    m = u.cancelLastTime,
                    h = u.cancelTimeDisplay,
                    p = u.deductionPrice;
                  if (Boolean(m)) {
                    if (new Date(m.replace(/-/g, "/")).getTime() - r > 0) {
                      0 === p
                        ? ((o = "".concat(h, " 可以免费取消")),
                          1 === t && (o = "".concat(o, "，别再犹豫了！")))
                        : (o =
                            p >= i
                              ? _
                              : "".concat(h, " 取消订单仅需支付¥").concat(p));
                      break;
                    }
                    d === a.length - 1 && (o = _);
                  }
                }
              return (null != a && a.length) || l ? o : null;
            },
            me = function (e) {
              var t = e.currentMemerInfo,
                i = e.bussinessTravelFlag,
                a = (t || {}).memberLevel,
                n = "level_".concat(a);
              return i > 0 && (n = "business_travel"), Q[n] || Q.default;
            },
            he = "other";
          f.default.isWechat && (he = "weapp"),
            f.default.isBaidu && (he = "swan"),
            f.default.isAlipay && (he = "alipay");
          var pe,
            ge,
            fe = {
              name: "page",
              state: {
                bdMapHeadExtensions: [],
                cancelPolicyText: null,
                fromPage: "hotel_order|".concat(he),
                isUserLogin: N.ZP.isLogin,
                giftBox: {},
                highValuePackage: {},
                livedConsumePackages: {},
                loading: !0,
                memberAuraInfo: {},
                modals: [],
                orderDetailData: {},
                orderFromPagesMapping: {},
                orderPageConfigs: {},
                orderId: null,
                pageId: f.default.isTieyou ? "10650018764" : "10650018591",
                pageTitleVisible: !1,
                scenicSpotCityId: "2",
                scenicSpotCityName: "上海",
                serviceCall: f.default.isTieyou ? "02160668555" : "02160668666",
                serviceModalInfo: {},
                serviceModalVisible: !1,
              },
              reducers: {
                set: function (e, t) {
                  var i,
                    a,
                    n = t.$instance,
                    l =
                      null == n || null === (i = n.router) || void 0 === i
                        ? void 0
                        : i.params,
                    c = (0, y.Z)({}, e);
                  return (
                    null != l && l.orderId && (c.orderId = l.orderId),
                    null != l && l.fromPage && (c.fromPage = l.fromPage),
                    null != l &&
                      null !== (a = l.baiduHeadExtensions) &&
                      void 0 !== a &&
                      a.length &&
                      (c.baiduHeadExtensions = (0, P.X5)(
                        l.baiduHeadExtensions
                      )),
                    p().hideShareMenu && p().hideShareMenu(),
                    (0, y.Z)((0, y.Z)({}, c), t)
                  );
                },
                setState: function (e, t) {
                  return (0, y.Z)((0, y.Z)({}, e), t);
                },
                get: function (e) {
                  return e;
                },
                clear: function () {
                  return {};
                },
                onShowIMModal: function (e) {
                  return (0, y.Z)((0, y.Z)({}, e), {}, { showIMModal: !0 });
                },
              },
              effects: function (e) {
                return {
                  getHotelConfigData: function () {
                    (0, S.SZ)({ keys: ["mini-fe-hotel-config"] }).then(
                      function (t) {
                        var i, a, n;
                        if (
                          null != t &&
                          null !== (i = t.configDataList) &&
                          void 0 !== i &&
                          i.length
                        ) {
                          var l = (0, x.Z)(t.configDataList, 1)[0],
                            c = {};
                          null !== (a = l.data) &&
                            void 0 !== a &&
                            a.orderFromPagesMapping &&
                            (c.orderFromPagesMapping =
                              l.data.orderFromPagesMapping),
                            null !== (n = l.data) &&
                              void 0 !== n &&
                              n.orderPageConfigs &&
                              (c.orderPageConfigs = l.data.orderPageConfigs),
                            e.page.setState(c);
                        }
                      }
                    );
                  },
                  getOrderDetails: function (t, i) {
                    return (0, l.Z)(
                      (0, n.Z)().mark(function a() {
                        var l, c, r, o, s, d, u, m, h, g, w, v;
                        return (0, n.Z)().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  if (
                                    (console.log(t, i),
                                    (a.prev = 1),
                                    (l = i.page),
                                    (c = l.orderId),
                                    (r = l.modals),
                                    (o = l.bdMapHeadExtensions),
                                    (s = (0, V.Z)(r)),
                                    r.find(function (e) {
                                      return e.type === le;
                                    }))
                                  ) {
                                    a.next = 10;
                                    break;
                                  }
                                  return (a.next = 8), oe();
                                case 8:
                                  (d = a.sent) && s.push(d);
                                case 10:
                                  if (
                                    ((u = {
                                      head: {
                                        extension: f.default.isBaidu ? o : [],
                                      },
                                      data: {
                                        orderNumber: c,
                                        version: C.Z.clientVersion,
                                      },
                                    }),
                                    c)
                                  ) {
                                    a.next = 13;
                                    break;
                                  }
                                  return a.abrupt(
                                    "return",
                                    (0, B.showToast)("网络问题，重新进入页面")
                                  );
                                case 13:
                                  return (a.next = 15), (0, re.IL)(u);
                                case 15:
                                  if (
                                    null != (m = a.sent) &&
                                    m.data &&
                                    1 === m.resultCode
                                  ) {
                                    a.next = 19;
                                    break;
                                  }
                                  return (
                                    e.page.setState({ modals: s, loading: !1 }),
                                    a.abrupt(
                                      "return",
                                      (0, B.showToast)(
                                        (null == m
                                          ? void 0
                                          : m.resultMessage) ||
                                          "网络错误，请稍候再试"
                                      )
                                    )
                                  );
                                case 19:
                                  (h = se(m.data, s, i)),
                                    (g = de(m.data)),
                                    (w = ue(m.data)),
                                    (v = me(m.data)),
                                    e.facility.getRoomFacility(m.data),
                                    e.page.getSpotRecommend(m.data),
                                    e.drawer.setOrderSpecialDrawer(m.data),
                                    e.page.setState(
                                      (0, y.Z)(
                                        (0, y.Z)(
                                          {
                                            isUserLogin: N.ZP.isLogin,
                                            loading: !1,
                                            orderDetailData: m.data,
                                            cancelPolicyText: w,
                                            memberAuraInfo: v,
                                          },
                                          h
                                        ),
                                        g
                                      )
                                    ),
                                    (a.next = 32);
                                  break;
                                case 29:
                                  (a.prev = 29),
                                    (a.t0 = a.catch(1)),
                                    console.error("getOrderDetails", a.t0);
                                case 32:
                                  return (
                                    (a.prev = 32),
                                    p().stopPullDownRefresh(),
                                    a.finish(32)
                                  );
                                case 35:
                                case "end":
                                  return a.stop();
                              }
                          },
                          a,
                          null,
                          [[1, 29, 32, 35]]
                        );
                      })
                    )();
                  },
                  gotoHotelDetail: function (e, t) {
                    var i,
                      a,
                      n,
                      l,
                      c = t.page,
                      r = c.orderDetailData,
                      o = c.pageId,
                      s = r.cityId,
                      d = r.queryBitMap,
                      u = r.hotelId,
                      m = r.hotelName,
                      h = r.geoList,
                      p = { hotelId: u, name: m, hotelType: 1, zone: "" },
                      g = {
                        query: {
                          queryBitMap: d,
                          cityId: s,
                          checkInDate: (0, T.tf)(),
                          checkOutDate: (0, T.cL)(),
                          source: "orderdetail_clickhotel|".concat(o),
                        },
                        hotel: p,
                        geoList: h,
                      };
                    null === (i = t.page.$instance) ||
                      void 0 === i ||
                      null === (a = i.page) ||
                      void 0 === a ||
                      a.ubtTrace("hotel_ordsuccess_click", {
                        bizKey: "hotel_ordsuccess_hotelcard_click",
                        hotelId: p.hotelId,
                      }),
                      null === (n = t.page.$instance) ||
                        void 0 === n ||
                        null === (l = n.page) ||
                        void 0 === l ||
                        l.navigateTo({
                          url: "/pages/hotel/detail/detail",
                          data: g,
                        });
                  },
                  gotoHotelList: function (e, t) {
                    var i,
                      a,
                      n,
                      l,
                      c = t.page,
                      r = c.orderDetailData,
                      o = r.cityId,
                      s = r.cityName,
                      d = r.checkInDate,
                      u = r.checkOutDate,
                      m = c.pageId;
                    null === (i = t.page.$instance) ||
                      void 0 === i ||
                      null === (a = i.page) ||
                      void 0 === a ||
                      a.ubtTrace(222818, { PageId: m }),
                      null === (n = t.page.$instance) ||
                        void 0 === n ||
                        null === (l = n.page) ||
                        void 0 === l ||
                        l.navigateTo({
                          url: "/pages/hotel/list/list",
                          data: {
                            queryModel: {
                              cityName: s,
                              cityId: o,
                              checkInDate: d,
                              checkOutDate: u,
                            },
                            fromPage: "hotelOrder",
                          },
                        });
                  },
                  onClickActivityBanner: function (t, i) {
                    var a, n;
                    null === (a = i.page.$instance) ||
                      void 0 === a ||
                      null === (n = a.page) ||
                      void 0 === n ||
                      n.ubtTrace(210161, {
                        bizKey: "hotel_ordsuccess_banner_click",
                        clickType: t.title,
                      }),
                      2 === (null == t ? void 0 : t.activityType)
                        ? e.page.getCoupon(t)
                        : 0 === t.status && t.needStart
                        ? e.page.joinActivity(t)
                        : t.jumpUrl && (0, T.YI)(t.jumpUrl);
                  },
                  joinActivity: function (e, t) {
                    var i = t.page.orderDetailData.orderNumber,
                      a = {
                        data: {
                          clientVersion: C.Z.clientVersion,
                          activityId: e.activityId,
                          taskId: 1,
                          orderNumber: i,
                        },
                      };
                    (0, re.Jn)(a)
                      .then(function (t) {
                        (1 !== (null == t ? void 0 : t.resultCode) &&
                          2 !== (null == t ? void 0 : t.resultCode)) ||
                          (0, T.YI)(e.jumpUrl);
                      })
                      .catch(function (e) {
                        console.error("开启活动失败", e);
                      });
                  },
                  gotoQA: function (t, i) {
                    var a,
                      n,
                      l = i.page,
                      c = l.orderDetailData,
                      r = l.pageId,
                      o = l.orderId;
                    null === (a = i.page.$instance) ||
                      void 0 === a ||
                      null === (n = a.page) ||
                      void 0 === n ||
                      n.ubtTrace(210161, {
                        bizKey: "hotel_ordsuccess_consultonlien_click",
                        pageId: r,
                      });
                    var s = c.checkInDate,
                      d = c.checkOutDate,
                      u = c.checkNum,
                      m = c.checkDayNum,
                      h = c.roomName,
                      p = c.breakfastType,
                      g = c.hotelName,
                      w = c.orderPrice,
                      v = c.hotelId,
                      N = c.goodsId,
                      Z = f.default.isTieyou ? 1474 : 1477,
                      b = f.default.isTieyou ? 10650075348 : 10650075346,
                      V = f.default.isTieyou ? "TieYouHotel" : "ZhiXingHotel",
                      y = {
                        ctype: "ORD",
                        cid: o,
                        title: g,
                        price: w,
                        currency: "RMB",
                        supplierId: v,
                        supplierPid: N,
                        supplierName: g,
                        desc: ""
                          .concat(D()(s).format("M月D日"), "--")
                          .concat(D()(d).format("M月D日"), " ")
                          .concat(m, "晚")
                          .concat(u, "间 ")
                          .concat(h, " ")
                          .concat(p),
                      },
                      x = "https://m.ctrip.com/webapp/servicechatv2/?channel="
                        .concat(V, "&bizType=")
                        .concat(Z, "&pageCode=")
                        .concat(b, "&isPreSale=0&isHideNavBar=YES&orderInfo=")
                        .concat(
                          encodeURIComponent(JSON.stringify(y)),
                          "&source=ty_web"
                        );
                    (0, L.e)(x), e.page.setState({ showIMModal: !1 });
                  },
                  getSpotRecommend: function (t) {
                    if (f.default.isWechat) {
                      var i = {
                        sourcePage: 2,
                        hotelId: t.hotelId,
                        destinationName: t.cityName,
                        destinationId: t.cityId,
                        businessType: 1,
                        orderNumber: t.orderNumber,
                      };
                      (0, S.h3)(i).then(function (t) {
                        if (1 === (null == t ? void 0 : t.resultCode)) {
                          var i = t.cityId,
                            a = void 0 === i ? "2" : i,
                            n = t.cityName,
                            l = void 0 === n ? "上海" : n;
                          e.page.setState({
                            scenicSpotCityId: a,
                            scenicSpotCityName: l,
                          });
                        }
                      });
                    }
                  },
                  onCheckLogin: function () {
                    N.ZP.doLogin()
                      .then(function () {
                        e.page.setState({ isUserLogin: !0 }),
                          e.page.getOrderDetails();
                      })
                      .catch(function () {
                        console.log("login error");
                      });
                  },
                  onClickServiceModalClose: function () {
                    e.page.setState({ serviceModalVisible: !1 });
                  },
                  getCoupon: function (t) {
                    var i = t || {},
                      a = i.couponInfo,
                      n = i.status,
                      l = i.jumpUrl,
                      c = {
                        data: {
                          promotionKeyList:
                            null == a ? void 0 : a.promotionKeyList,
                          scene: null == a ? void 0 : a.scene,
                          clientVersion: C.Z.clientVersion,
                        },
                      };
                    2 === n
                      ? (0, T.YI)(l)
                      : 3 === n
                      ? p().showToast({
                          title: "领取失败，请重试~",
                          icon: "none",
                          duration: 1500,
                        })
                      : (0, S.pI)(c).then(function (t) {
                          t && 1 == t.resultCode
                            ? (p().showToast({
                                title: t.resultMessage || "领取成功！",
                                icon: "success",
                                duration: 1500,
                              }),
                              e.page.getOrderDetails())
                            : p().showToast({
                                title: "领取失败，请重试~",
                                icon: "none",
                                duration: 1500,
                              });
                        });
                  },
                };
              },
            },
            we = null,
            ve = {
              name: "drawer",
              state: {
                type: null,
                cashDrawerInfo: {},
                consultCancelType: { 2: W, 3: K },
              },
              reducers: {
                setState: function (e, t) {
                  return (0, y.Z)((0, y.Z)({}, e), t);
                },
                open: function (e, t) {
                  return (0, y.Z)((0, y.Z)({}, e), {}, { type: t });
                },
                close: function (e) {
                  return (0, y.Z)((0, y.Z)({}, e), {}, { type: null });
                },
              },
              effects: function (e) {
                return {
                  setOrderSpecialDrawer: function (t, i) {
                    var a,
                      n,
                      l,
                      c = null;
                    if (
                      null !== (a = t.bargainInfo) &&
                      void 0 !== a &&
                      a.refreshInterval
                    ) {
                      var r = t.bargainInfo,
                        o = r.refreshInterval,
                        s = r.bargainPrice;
                      we && (clearInterval(we), (we = null)),
                        (we = setInterval(function () {
                          s >= 0 &&
                            (clearInterval(we),
                            (we = null),
                            0 === s && (c = E)),
                            e.page.getOrderDetails();
                        }, 1e3 * o));
                    } else
                      0 ===
                        (null === (n = t.bargainInfo) || void 0 === n
                          ? void 0
                          : n.bargainPrice) && (c = E);
                    var d = i.drawer.consultCancelType;
                    if (
                      d[
                        null === (l = t.consultCancelInfo) || void 0 === l
                          ? void 0
                          : l.state
                      ]
                    ) {
                      var u = "consult_drawer_".concat(
                          t.consultCancelInfo.state
                        ),
                        m = A.ce.getAttr(u) || [];
                      m.includes(t.orderNumber) ||
                        ((c = d[t.consultCancelInfo.state]),
                        m.push(t.orderNumber),
                        A.ce.setAttr(u, m));
                    }
                    c && e.drawer.setState({ type: c });
                  },
                  onClickShowCashModal: function (t, i) {
                    var a,
                      n,
                      l = i.page,
                      c = l.orderId,
                      r = l.orderDetailData,
                      o = r.orderState,
                      s = r.cashBackInfo,
                      d = r.canCashBackList;
                    null === (a = i.page.$instance) ||
                      void 0 === a ||
                      null === (n = a.page) ||
                      void 0 === n ||
                      n.ubtTrace(184160, JSON.stringify({ orderId: c })),
                      e.drawer.setState({
                        type: $,
                        cashDrawerInfo: {
                          orderState: o,
                          list: d.map(function (e) {
                            return (0, y.Z)({}, e);
                          }),
                          bottom:
                            (null == s ? void 0 : s.cashBackComments) || {},
                        },
                      });
                  },
                  onCloseDrawerWithRefresh: function (t) {
                    e.drawer.setState({ type: null }),
                      t && e.page.getOrderDetails();
                  },
                  onChangeCashItemState: function (t, i) {
                    var a = i.drawer.cashDrawerInfo,
                      n = a.list.map(function (e) {
                        return (0,
                        y.Z)((0, y.Z)({}, e), {}, { state: e.promotionName === t.promotionName ? 2 : e.state });
                      });
                    e.drawer.setState({
                      cashDrawerInfo: Object.assign({}, a, { list: n }),
                    });
                  },
                };
              },
            },
            Ne = {
              name: "facility",
              state: { roomBasicInfos: [] },
              reducers: {
                setState: function (e, t) {
                  return (0, y.Z)((0, y.Z)({}, e), t);
                },
              },
              effects: function (e) {
                return {
                  getRoomFacility: function (t) {
                    return (0, l.Z)(
                      (0, n.Z)().mark(function i() {
                        var a, l, c, r, o;
                        return (0, n.Z)().wrap(function (i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                return (
                                  (c = {
                                    data: {
                                      hotelId: null == t ? void 0 : t.hotelId,
                                      baseRoomId: null == t ? void 0 : t.roomId,
                                      ratePlanCode:
                                        null == t ? void 0 : t.ratePlanId,
                                      checkIn:
                                        null == t ? void 0 : t.checkInDate,
                                      checkOut:
                                        null == t ? void 0 : t.checkOutDate,
                                      clientVersion: C.Z.clientVersion,
                                    },
                                  }),
                                  (i.next = 3),
                                  (0, re.Vl)(c)
                                );
                              case 3:
                                if (
                                  null != (r = i.sent) &&
                                  null !== (a = r.data) &&
                                  void 0 !== a &&
                                  null !== (l = a.roomBasicList) &&
                                  void 0 !== l &&
                                  l.length
                                ) {
                                  i.next = 6;
                                  break;
                                }
                                return i.abrupt("return");
                              case 6:
                                (o = []),
                                  [51, 4, 18, 17].forEach(function (e) {
                                    var t = r.data.roomBasicList.find(function (
                                      t
                                    ) {
                                      return t.type === e;
                                    });
                                    if (null != t && t.itemValue) {
                                      var i = t.itemValue;
                                      4 === e && (i += "m²"), o.push(i);
                                    }
                                  }),
                                  e.facility.setState({ roomBasicInfos: o });
                              case 10:
                              case "end":
                                return i.stop();
                            }
                        }, i);
                      })
                    )();
                  },
                };
              },
            },
            Ze = i(3205),
            be = i(93761),
            Ve = {
              name: "order",
              state: { type: null },
              reducers: {
                setState: function (e, t) {
                  return (0, y.Z)((0, y.Z)({}, e), t);
                },
                open: function (e, t) {
                  return (0, y.Z)((0, y.Z)({}, e), {}, { type: t });
                },
                close: function (e) {
                  return (0, y.Z)((0, y.Z)({}, e), {}, { type: null });
                },
              },
              effects: function (e) {
                return {
                  onApplyForInvoice: function (t, i) {
                    var a, n;
                    if (f.default.isBaidu) return e.order.onApplyForBDInvoice();
                    var l = i.page,
                      c = l.orderId,
                      r = l.orderDetailData,
                      o = r.invoicePrice,
                      s = r.invoiceInfo,
                      d = r.invoiceTargetType,
                      u = r.invoiceDetailPayInfo;
                    if (!(1 === d))
                      return p().showModal({
                        content:
                          "该订单发票由酒店开具，如需发票，可向酒店索取。",
                        showCancel: !1,
                        confirmText: "知道了",
                      });
                    if (
                      (null === (a = i.page.$instance) ||
                        void 0 === a ||
                        null === (n = a.page) ||
                        void 0 === n ||
                        n.ubtTrace(210161, {
                          bizKey: "hotel_ordsuccess_receipt_click",
                        }),
                      null != s && s.title)
                    ) {
                      var m,
                        h,
                        g = {
                          invoiceInfo: s,
                          invoicePrice: o,
                          invoiceDetailPayInfo: u,
                        };
                      null === (m = i.page.$instance) ||
                        void 0 === m ||
                        null === (h = m.page) ||
                        void 0 === h ||
                        h.navigateTo({
                          url: "/pages/hotel/invoiceinfo/invoiceinfo?data=".concat(
                            encodeURIComponent(JSON.stringify(g))
                          ),
                        });
                    } else
                      Ze.Z.twebview({
                        data: {
                          url: ""
                            .concat(F.invoiceUrl, "?invoicePrice=")
                            .concat(o, "&orderNumber=")
                            .concat(c, "&env=canary&erudadebug=1"),
                        },
                      });
                  },
                  onApplyForBDInvoice: function (t, i) {
                    var a,
                      n,
                      l = i.page,
                      c = l.orderId,
                      r = l.orderDetailData,
                      o = r.isInvoicePushSms,
                      s = r.orderStateDesc,
                      d = r.invoiceTargetType,
                      u = o
                        ? "开票方式已由短信下发至您的手机"
                        : 1 != d
                        ? "如需发票，可向酒店索取"
                        : "";
                    if (
                      !(1 === d && !o && ["预订成功", "已成交"].includes(s)) &&
                      u
                    )
                      return p().showModal({
                        content: u,
                        showCancel: !1,
                        confirmText: "知道了",
                      });
                    var m = {
                      data: { orderNumber: c, version: C.Z.clientVersion },
                    };
                    null === (a = i.page.$instance) ||
                      void 0 === a ||
                      null === (n = a.page) ||
                      void 0 === n ||
                      n.ubtTrace(210161, {
                        bizKey: "hotel_ordsuccess_receipt_click",
                      }),
                      (0, re.hP)(m)
                        .then(function (t) {
                          1 === (null == t ? void 0 : t.resultCode) &&
                            ((0, B.showToast)("短信发送成功"),
                            e.page.getOrderDetails());
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                  },
                  onCancelOrder: function (t, i) {
                    var a = i.page.orderDetailData.ladderDeductionList;
                    if ((new Date().getTime(), null == a || !a.length))
                      return e.order.checkServiceModal();
                    for (var n = !1, l = 0; l < a.length; l++) {
                      var c,
                        r = a[l].cancelLastTime;
                      a[l].deductionCancelDisplay,
                        null ===
                          (c = new Date(
                            null == r ? void 0 : r.replace(/-/g, "/")
                          )) ||
                          void 0 === c ||
                          c.getTime(),
                        n || (e.order.checkServiceModal(), (n = !0));
                    }
                  },
                  checkServiceModal: function (t, i) {
                    var a,
                      n,
                      l,
                      c,
                      r = i.page.orderDetailData.cancelPopWindowInfo;
                    r
                      ? (r.windowCode &&
                          (null === (a = i.page.$instance) ||
                            void 0 === a ||
                            null === (n = a.page) ||
                            void 0 === n ||
                            n.ubtTrace(184160, parseInt(r.windowCode))),
                        e.page.setState({
                          serviceModalInfo: r,
                          serviceModalVisible: !0,
                        }))
                      : null === (l = i.page.$instance) ||
                        void 0 === l ||
                        null === (c = l.page) ||
                        void 0 === c ||
                        c.showMultiButtonDialog({
                          title: "提示",
                          content: "您正在取消此订单，是否确认取消？",
                          rightButtonName: "确认取消",
                          onRightButtonClick: function () {
                            e.order.onCancelConfirm();
                          },
                          leftButtonName: "点错了",
                        });
                  },
                  onCancelConfirm: function (t, i) {
                    var a,
                      n,
                      l,
                      c,
                      r,
                      o = i.page,
                      s = o.bdMapHeadExtensions,
                      d = o.orderDetailData;
                    return (
                      o.orderId,
                      e.page.setState({ serviceModalVisible: !1 }),
                      d.cancelFlag ||
                      (null !== (a = d.consultCancelInfo) &&
                        void 0 !== a &&
                        a.flag &&
                        0 ===
                          (null === (n = d.consultCancelInfo) || void 0 === n
                            ? void 0
                            : n.state))
                        ? ((null !== (l = d.consultCancelInfo) &&
                            void 0 !== l &&
                            l.flag) ||
                            (d.consultCancelInfo = null),
                          null === (c = i.page.$instance) ||
                          void 0 === c ||
                          null === (r = c.page) ||
                          void 0 === r
                            ? void 0
                            : r.navigateTo({
                                url: "/pages/hotel/orderCancel/orderCancel",
                                data: {
                                  bdMapHeadExtensions: s,
                                  orderDetailData: d,
                                },
                              }))
                        : void e.page.setState({
                            showIMModal: !0,
                            iMModalTitle:
                              (null == d ? void 0 : d.uncancelReason) ||
                              "取消失败",
                          })
                    );
                  },
                  onRemindOrder: function (e, t) {
                    var i,
                      a,
                      n = t.page,
                      l = n.pageId,
                      c = n.orderId,
                      r = n.orderDetailData.bargainInfo;
                    null != r &&
                      r.state &&
                      (null === (i = t.page.$instance) ||
                        void 0 === i ||
                        null === (a = i.page) ||
                        void 0 === a ||
                        a.ubtTrace(222835, { PageId: l }));
                    var o = {
                      data: {
                        orderNumber: c,
                        clientVersion: C.Z.clientVersion,
                      },
                    };
                    (0, re.Dq)(o)
                      .then(function (e) {
                        e.resultCode &&
                          (e.data.customeServicePhone
                            ? p().showModal({
                                title: "",
                                content: e.data.remindOrderContent,
                                confirmText: "拨打",
                                confirmColor: "#fc6e51",
                                showCancel: !0,
                                cancelText: "取消",
                                cancelColor: "#666666",
                                success: function (t) {
                                  t.confirm &&
                                    p().makePhoneCall({
                                      phoneNumber: e.data.customeServicePhone,
                                    });
                                },
                              })
                            : p().showModal({
                                title: "",
                                content: e.data.remindOrderContent,
                                confirmText: "知道了",
                                confirmColor: "#fc6e51",
                                showCancel: !1,
                                success: function () {},
                              }));
                      })
                      .catch(function () {
                        (0, B.showToast)("网络请求错误，请重试");
                      });
                  },
                  onOrderPay: function (t, i) {
                    var a = i.page.orderId;
                    be.ZP.doPayment({
                      business: "hotel",
                      orderNumber: a,
                      title: "预订酒店",
                      quickPay: !0,
                    })
                      .then(function () {
                        (0, B.showToast)("支付成功"), e.page.getOrderDetails();
                      })
                      .catch(function () {
                        e.page.getOrderDetails();
                      });
                  },
                };
              },
            },
            ye = i(62607),
            xe = {
              drawer: ve,
              facility: Ne,
              page: fe,
              order: Ve,
              modal: {
                name: "modal",
                state: { customModalVisible: !0 },
                reducers: {
                  setState: function (e, t) {
                    return (0, y.Z)((0, y.Z)({}, e), t);
                  },
                },
                effects: function (e) {
                  return {
                    onFollowUpModalConfirm: function (t, i) {
                      var a,
                        n,
                        l = i.page.pageId,
                        c = null;
                      11 == (null == t ? void 0 : t.popId)
                        ? (c = 221468)
                        : 12 == (null == t ? void 0 : t.popId) && (c = 221470),
                        c &&
                          (null === (a = i.page.$instance) ||
                            void 0 === a ||
                            null === (n = a.page) ||
                            void 0 === n ||
                            n.ubtTrace(222835, { PageId: l })),
                        e.modal.onCloseCustomModal(t);
                    },
                    onCloseCustomModal: function (t) {
                      null != t &&
                        t.thresholdKey &&
                        ye.jg.setAttr(t.thresholdKey, new Date().getTime()),
                        e.modal.setState({ customModalVisible: !1 });
                    },
                  };
                },
              },
            },
            Ie = i(48813),
            Ce = (0, v.$j)(
              function (e) {
                return {
                  orderDetailData: e.page.orderDetailData,
                  pageTitleVisible: e.page.pageTitleVisible,
                };
              },
              function () {
                return {};
              }
            )(function (e) {
              var t = e.orderDetailData.vendorOrderNumber,
                i = e.pageTitleVisible && t && !f.default.isBaidu;
              return (0,
              Ie.BX)(m.View, { className: "ht-order-title", children: [(0, Ie.tZ)(m.View, { className: "logo-wrap", style: (0, P.LP)(f.default.isBaidu, "flex"), children: (0, Ie.tZ)(m.Image, { className: "logo", src: "https://images3.c-ctrip.com/ztrip/train.xin/2023_05/tittle_slogn@3x.png?v2", mode: "heightFix" }) }), (0, Ie.BX)(m.View, { className: "title", style: (0, P.LP)(i), children: ["订单号 ", t] })] });
            }),
            Be = i(28333),
            ke = i(34203),
            Te = i(34229),
            Pe = (0, v.$j)(
              function (e) {
                return {
                  orderDetailData: e.page.orderDetailData,
                  loading: e.page.loading,
                };
              },
              function (e) {
                return { openOrderDrawer: e.drawer.open };
              }
            )(function (e) {
              var t,
                i,
                a,
                n,
                l,
                c,
                r,
                o,
                s,
                d,
                u = e.orderDetailData,
                h = u.bargainInfo,
                p = u.hotelBasicInfoList,
                g = u.orderStateDesc,
                f = u.refundStatusInfo,
                w = u.orderStateRemark,
                v = u.orderState,
                N = e.loading,
                Z = e.openOrderDrawer,
                b = null == p ? void 0 : p.slice(0, 2),
                V = Boolean(w) && 3 === v,
                I = {
                  style: (0, P.LP)(null == b ? void 0 : b.length, "flex"),
                  onClick: function () {
                    return Z(j);
                  },
                },
                C = {};
              null != h &&
                null !== (t = h.stateDetailList) &&
                void 0 !== t &&
                t.length &&
                ((d = h.stateDetailList.find(function (e) {
                  return e.state === (null == h ? void 0 : h.state);
                })),
                (C = {
                  autoplay: "true",
                  vertical: "true",
                  interval: "2000",
                  circular: "true",
                  duration: 400,
                }));
              var B = "退款进度",
                k = 0;
              return (
                null == f ||
                  null === (i = f.refundStatusList) ||
                  void 0 === i ||
                  i.forEach(function (e) {
                    var t, i;
                    null != e &&
                      null !== (t = e.refundTitle) &&
                      void 0 !== t &&
                      t.includes("成功") &&
                      ((k =
                        (null == f ||
                        null === (i = f.refundsStatus) ||
                        void 0 === i
                          ? void 0
                          : i.refundPrice) || 0),
                      (B = "退款成功 金额 ¥".concat(k)));
                  }),
                (0, Ie.BX)(Ie.HY, {
                  children: [
                    (0, Ie.BX)(m.View, {
                      className: "hotel-order-status",
                      style: (0, P.LP)(N),
                      children: [
                        (0, Ie.tZ)(ke.Z, {
                          width: "80px",
                          height: "33px",
                          background: "rgba(111,147,187,0.1)",
                        }),
                        (0, Ie.tZ)(ke.Z, {
                          height: "50px",
                          background: "rgba(111,147,187,0.1)",
                          otherStyle: { marginTop: "10px" },
                        }),
                      ],
                    }),
                    (0, Ie.BX)(m.View, {
                      className: "hotel-order-status",
                      style: (0, P.LP)(!N),
                      children: [
                        !(
                          null != h &&
                          null !== (a = h.stateDetailList) &&
                          void 0 !== a &&
                          a.length
                        ) &&
                          (0, Ie.BX)(m.View, {
                            className: "title-wrap",
                            children: [
                              (0, Ie.tZ)(m.View, {
                                className: "title",
                                children: g,
                              }),
                              V &&
                                (0, Ie.tZ)(m.View, {
                                  className: "desc",
                                  children: w,
                                }),
                            ],
                          }),
                        (null == h ||
                        null === (n = h.stateDetailList) ||
                        void 0 === n
                          ? void 0
                          : n.length) > 0 &&
                          (0, Ie.BX)(m.View, {
                            className: "bargain-wrap",
                            children: [
                              (0, Ie.BX)(m.View, {
                                className: "avatar-wrap",
                                children: [
                                  (0, Ie.tZ)(m.Image, {
                                    className: "avatar",
                                    src:
                                      null === (l = h.customerServiceInfo) ||
                                      void 0 === l
                                        ? void 0
                                        : l.headImageUrl,
                                  }),
                                  (0, Ie.tZ)(m.View, {
                                    className: "name",
                                    children:
                                      null === (c = h.customerServiceInfo) ||
                                      void 0 === c
                                        ? void 0
                                        : c.name,
                                  }),
                                ],
                              }),
                              (0, Ie.BX)(m.View, {
                                className: "title-wrap",
                                children: [
                                  (0, Ie.tZ)(Te.ZtRichText, {
                                    className: "title",
                                    nodes: null == h ? void 0 : h.stateDesc,
                                  }),
                                  (null === (r = d) ||
                                  void 0 === r ||
                                  null === (o = r.stateTips) ||
                                  void 0 === o
                                    ? void 0
                                    : o.length) > 0 &&
                                    (0, Ie.tZ)(
                                      m.Swiper,
                                      (0, y.Z)(
                                        (0, y.Z)({}, C),
                                        {},
                                        {
                                          className: "tip-swiper",
                                          children: d.stateTips.map(function (
                                            e,
                                            t
                                          ) {
                                            return (0, Ie.tZ)(
                                              m.SwiperItem,
                                              {
                                                children: (0, Ie.tZ)(
                                                  Te.ZtRichText,
                                                  {
                                                    className: "desc",
                                                    nodes: e.excitationText,
                                                  }
                                                ),
                                              },
                                              t
                                            );
                                          }),
                                        }
                                      )
                                    ),
                                ],
                              }),
                              (null == h ? void 0 : h.state) < 3 &&
                                (0, Ie.tZ)(m.View, {
                                  className: "bargain-progress",
                                  children:
                                    null == h ||
                                    null === (s = h.stateDetailList) ||
                                    void 0 === s
                                      ? void 0
                                      : s.map(function (e) {
                                          var t = e.state,
                                            i = e.stateName,
                                            a = e.stateIcon,
                                            n = (0, P.gP)(
                                              (null == h ? void 0 : h.state) >
                                                t,
                                              " previous"
                                            ),
                                            l = (0, P.gP)(
                                              (null == h ? void 0 : h.state) ===
                                                t,
                                              " current"
                                            ),
                                            c = "step".concat(n).concat(l);
                                          return (0,
                                          Ie.BX)(m.View, { className: c, children: [(0, Ie.BX)(m.View, { className: "wrap", children: [(0, Ie.tZ)(m.View, { className: "hline left" }), (0, Ie.tZ)(m.Image, { className: "dot-icon", src: a }), (0, Ie.tZ)(m.View, { className: "dot" }), (0, Ie.tZ)(m.View, { className: "hline right" })] }), (0, Ie.tZ)(m.View, { className: "desc", children: i })] }, t);
                                        }),
                                }),
                            ],
                          }),
                        f &&
                          (0, Ie.BX)(m.View, {
                            className: "refund-wrap",
                            id: "AXGW",
                            onClick: function () {
                              return Z(U);
                            },
                            children: [
                              (0, Ie.tZ)(m.Text, {
                                className: "txt",
                                children: B,
                              }),
                              (0, Ie.tZ)(Be.Z, { name: "arr" }),
                            ],
                          }),
                        (0, Ie.BX)(
                          m.View,
                          (0, y.Z)(
                            (0, y.Z)({ className: "book-remind" }, I),
                            {},
                            {
                              children: [
                                (0, Ie.tZ)(m.View, {
                                  className: "wrap",
                                  children:
                                    null == b
                                      ? void 0
                                      : b.map(function (e, t) {
                                          var i = e || {},
                                            a = i.title,
                                            n = i.subSectionList || [{}],
                                            l = (0, x.Z)(n, 1)[0].content;
                                          return l || a
                                            ? (0, Ie.BX)(
                                                m.View,
                                                {
                                                  className: "item",
                                                  children: [
                                                    a &&
                                                      (0, Ie.BX)(m.Text, {
                                                        children: [a, ": "],
                                                      }),
                                                    (0, Ie.tZ)(m.Text, {
                                                      children: l,
                                                    }),
                                                  ],
                                                },
                                                t
                                              )
                                            : null;
                                        }),
                                }),
                                (0, Ie.tZ)(Be.Z, { name: "arr" }),
                              ],
                            }
                          )
                        ),
                      ],
                    }),
                  ],
                })
              );
            }),
            Xe = i(45023),
            De = i(62753),
            Le = i(3414),
            Se = u.default.memo(function (e) {
              var t,
                i,
                a = e.list;
              return null != a &&
                null !== (t = a.details) &&
                void 0 !== t &&
                t.length
                ? (0, Ie.tZ)(m.View, {
                    className: "ht-lived-packages",
                    children:
                      null == a || null === (i = a.details) || void 0 === i
                        ? void 0
                        : i.map(function (e, t) {
                            return (0, Ie.tZ)(
                              u.default.Fragment,
                              {
                                children: e.consumePackageDetails.map(function (
                                  e,
                                  i
                                ) {
                                  var a = "".concat(t, "_").concat(i),
                                    n = e.backPic,
                                    l = e.name,
                                    c = e.priefName,
                                    r = e.receptionTimes,
                                    o = e.unsuitableTime,
                                    s = e.accessRule,
                                    d = e.appointType,
                                    u = e.bookingPhones,
                                    h = e.xDescription;
                                  return (0, Ie.BX)(
                                    m.View,
                                    {
                                      className: "item",
                                      children: [
                                        (0, Ie.tZ)(m.View, {
                                          className: "tit",
                                          children: c || l,
                                        }),
                                        (null == r ? void 0 : r.length) > 0 &&
                                          (0, Ie.BX)(m.View, {
                                            className: "desc",
                                            children: [
                                              "接待时间: ",
                                              r.join(","),
                                            ],
                                          }),
                                        o &&
                                          (0, Ie.BX)(m.View, {
                                            className: "desc",
                                            children: ["不可用日期: ", o],
                                          }),
                                        s &&
                                          (0, Ie.BX)(m.View, {
                                            className: "desc",
                                            children: [
                                              (0, Ie.tZ)(m.Text, {
                                                className: "label",
                                                children: "获取方式: ",
                                              }),
                                              (0, Ie.tZ)(m.Text, {
                                                className: "detail",
                                                children: s,
                                              }),
                                            ],
                                          }),
                                        d &&
                                          (0, Ie.BX)(m.View, {
                                            className: "desc",
                                            children: ["预约规则: ", d],
                                          }),
                                        u &&
                                          (0, Ie.BX)(m.View, {
                                            className: "desc",
                                            children: [
                                              "联系电话:",
                                              (0, Ie.tZ)(m.Text, {
                                                className: "color-primary",
                                                id: "AXBr",
                                                onClick: function () {
                                                  return (function (e) {
                                                    p().makePhoneCall({
                                                      phoneNumber: e,
                                                    });
                                                  })(u);
                                                },
                                                children: u,
                                              }),
                                            ],
                                          }),
                                        h &&
                                          (0, Ie.BX)(m.View, {
                                            className: "desc",
                                            children: [
                                              (0, Ie.tZ)(m.Text, {
                                                className: "label",
                                                children: "特别说明: ",
                                              }),
                                              (0, Ie.tZ)(m.Text, {
                                                className: "detail",
                                                children: h,
                                              }),
                                            ],
                                          }),
                                        n &&
                                          (0, Ie.tZ)(m.View, {
                                            className: "desc",
                                            children: (0, Ie.tZ)(m.Image, {
                                              className: "backpic",
                                              src: n,
                                              mode: "widthFix",
                                            }),
                                          }),
                                      ],
                                    },
                                    a
                                  );
                                }),
                              },
                              t
                            );
                          }),
                  })
                : (0, Ie.tZ)(m.View, {});
            }),
            Ae = i(47135),
            Me = u.default.memo(function (e) {
              var t = e.pack,
                i = void 0 === t ? {} : t;
              return (0,
              Ie.BX)(m.View, { className: "pack-item", children: [i.name && (0, Ie.tZ)(m.View, { className: "suite-brief", children: i.name }), i.receptionTimes && i.receptionTimes.length > 0 && (0, Ie.BX)(m.View, { className: "col", children: [(0, Ie.tZ)(m.View, { className: "label", children: "接待时间" }), (0, Ie.tZ)(m.View, { className: "desc", children: i.receptionTimes.join("，") })] }), (0, Ie.BX)(m.View, { className: "col", children: [i.usePeopleNum && (0, Ie.BX)(m.View, { className: "half", children: [(0, Ie.tZ)(m.View, { className: "label", children: "使用人数" }), (0, Ie.tZ)(m.View, { className: "desc", children: i.usePeopleNum })] }), i.useLimit && (0, Ie.BX)(m.View, { className: "half", children: [(0, Ie.tZ)(m.View, { className: "label", children: "使用限制" }), (0, Ie.tZ)(m.View, { className: "desc", children: i.useLimit })] })] }), (0, Ie.BX)(m.View, { className: "col", children: [i.appointType && (0, Ie.BX)(m.View, { className: "half", children: [(0, Ie.tZ)(m.View, { className: "label", children: "预约规则" }), (0, Ie.tZ)(m.View, { className: "desc", children: i.appointType })] }), i.bookingPhones && (0, Ie.BX)(m.View, { className: "half", children: [(0, Ie.tZ)(m.View, { className: "label", children: "预订电话" }), (0, Ie.tZ)(m.View, { className: "desc", children: i.bookingPhones })] })] }), i.xDescription && (0, Ie.BX)(m.View, { className: "col", children: [(0, Ie.tZ)(m.View, { className: "label", children: "特别说明" }), (0, Ie.tZ)(m.View, { className: "desc", children: i.xDescription })] })] }, i.type);
            }),
            Fe = function (e) {
              var t = e.info,
                i = void 0 === t ? {} : t,
                a = e.title,
                n = void 0 === a ? "" : a,
                l = e.giftTagHidden,
                c = void 0 !== l && l;
              i.details &&
                i.details.forEach(function (e) {
                  e.showAll = e.list && e.list.length <= 1;
                });
              var r = (0, u.useState)(i),
                o = (0, x.Z)(r, 2),
                s = o[0],
                d = o[1],
                h = (0, u.useCallback)(
                  function (e) {
                    var t = s.details[e].showAll;
                    (s.details[e].showAll = !t), d(I.Z.deepCopy(s));
                  },
                  [s]
                );
              return (
                (0, u.useEffect)(
                  function () {
                    d(I.Z.deepCopy(i));
                  },
                  [i]
                ),
                (0, Ie.BX)(m.View, {
                  className: "suite-view",
                  children: [
                    n &&
                      (0, Ie.tZ)(m.View, {
                        className: "suite-title",
                        children: n,
                      }),
                    s.details &&
                      s.details.map(function (e, t) {
                        return (0, Ie.BX)(
                          m.View,
                          {
                            className: "suite-content",
                            children: [
                              1 === s.type &&
                                !c &&
                                (0, Ie.tZ)(m.View, {
                                  className: "summary",
                                  children: (0, Ie.tZ)(m.View, {
                                    className: "tag",
                                    children: "到店礼",
                                  }),
                                }),
                              2 === s.type &&
                                (0, Ie.BX)(m.View, {
                                  className: "summary",
                                  children: [
                                    (0, Ie.tZ)(m.View, {
                                      className: "icon",
                                      children:
                                        1 === e.type
                                          ? "住"
                                          : 2 === e.type
                                          ? "食"
                                          : "享",
                                    }),
                                    (0, Ie.tZ)(m.View, {
                                      className: "desc",
                                      children: e.jointName,
                                    }),
                                  ],
                                }),
                              (0, Ie.BX)(m.View, {
                                className: "introduction ".concat(
                                  2 === s.type ? "high-value" : ""
                                ),
                                children: [
                                  e.list.map(function (t, i) {
                                    return 1 === e.type || (!e.showAll && i > 0)
                                      ? null
                                      : (0, Ie.tZ)(Me, { pack: t });
                                  }),
                                  1 !== e.type &&
                                    e.list.length > 1 &&
                                    !e.showAll &&
                                    (0, Ie.BX)(m.View, {
                                      className: "more",
                                      id: "AXCA",
                                      onClick: function () {
                                        return h(t);
                                      },
                                      children: [
                                        e.showAll ? "收起" : "更多",
                                        2 === e.type ? "餐食" : "可享",
                                        "说明",
                                        (0, Ie.tZ)(m.Text, {
                                          className: "iconfont ifont-arrdown",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          },
                          e.type
                        );
                      }),
                    s.shows &&
                      (0, Ie.BX)(m.Block, {
                        children: [
                          (0, Ie.tZ)(m.View, {
                            className: "suite-title",
                            children: "图文介绍",
                          }),
                          (0, Ie.tZ)(m.View, {
                            className: "suite-img-box",
                            children: s.shows.map(function (e, t) {
                              return (0,
                              Ie.tZ)(m.Image, { src: e.imgUrl, className: "suite-img", mode: "widthFix" }, t);
                            }),
                          }),
                        ],
                      }),
                  ],
                })
              );
            },
            _e = (0, v.$j)(
              function (e) {
                return { orderDetailData: e.page.orderDetailData };
              },
              function () {
                return {};
              }
            )(function (e) {
              var t,
                i,
                a,
                n = e.orderDetailData,
                l = n.additionalPurchaseList,
                c = n.activityInfo,
                r = n.cardInfo,
                o = n.cashBackInfo,
                s = n.checkDayNum,
                d = n.checkNum,
                u = n.couponInfo,
                h = n.maskTag,
                p = n.orderPrice,
                g = n.payHotelPrice,
                f = n.payType,
                w = n.roomPriceList,
                v = 3 === f,
                N = v ? g : p,
                Z = (0, P.gP)(
                  (null == w ? void 0 : w.length) > 0,
                  null == w || null === (t = w[0]) || void 0 === t
                    ? void 0
                    : t.extraPaySurcharge
                ),
                b = 0,
                V = [];
              if (!(0, P.Qr)(r)) {
                b += r.discountPrice;
                var y = {};
                (y.name = r.cardName || "会员价"),
                  (y.price = Math.abs(r.discountPrice)),
                  V.push(y);
              }
              if (!(0, P.Qr)(u)) {
                b += u.couponPrice;
                var x = {};
                (x.name = u.couponName || "优惠券"),
                  (x.price = Math.abs(u.couponPrice)),
                  V.push(x);
              }
              if (!(0, P.Qr)(c)) {
                b += c.activityPrice;
                var I = {};
                (I.name = c.activityName || "促销活动"),
                  (I.price = Math.abs(c.activityPrice)),
                  V.push(I);
              }
              var C = [];
              if (null != w && w[1]) {
                var B = w[1];
                (0, P.Q6)(B) ||
                  ((b += Math.abs(B.totalPrice)),
                  B.priceDetailList.forEach(function (e) {
                    var t = e;
                    (t.price = Math.abs(e.price)), C.push(t);
                  }));
              }
              var k = 0;
              return (
                null != l &&
                  l.length &&
                  l.forEach(function (e) {
                    e.preferentialAmount &&
                      e.preferentialAmount > 0 &&
                      (b += Math.abs(e.preferentialAmount)),
                      (k += parseFloat(e.buyAmount));
                  }),
                (0, Ie.BX)(m.View, {
                  className: "order-price-detail",
                  children: [
                    (0, Ie.BX)(m.View, {
                      className: "item total",
                      style: (0, P.LP)(v),
                      children: [
                        (0, Ie.tZ)(m.Text, {
                          className: "danbao-tit",
                          children: "在线担保",
                        }),
                        (0, Ie.tZ)(m.Text, {
                          className: "back-desc",
                          children: "离店后担保金额原路退回",
                        }),
                        (0, Ie.tZ)(m.Text, {
                          className: "fr color-red",
                          children: "￥" + p,
                        }),
                        Z &&
                          (0, Ie.tZ)(m.View, {
                            className: "info",
                            children: Z,
                          }),
                      ],
                    }),
                    (0, Ie.BX)(m.View, {
                      className: "item",
                      children: [
                        (0, Ie.BX)(m.View, {
                          className: "big-title",
                          children: [
                            [1, 4].includes(f) &&
                              (0, Ie.tZ)(m.Text, { children: "在线支付" }),
                            [2, 3].includes(f) &&
                              (0, Ie.tZ)(m.Text, { children: "到店支付" }),
                            (0, Ie.BX)(m.Text, {
                              className: "fr color-red",
                              children: ["¥", N],
                            }),
                          ],
                        }),
                        (null == w ? void 0 : w.length) > 0 &&
                          (0, Ie.BX)(m.View, {
                            className: "strong room-price",
                            children: [
                              (0, Ie.BX)(m.View, {
                                className: "wrapper",
                                children: [
                                  (0, Ie.tZ)(m.Text, { children: w[0].title }),
                                  h &&
                                    (0, Ie.tZ)(m.Image, {
                                      src: h,
                                      className: "mask-tag",
                                    }),
                                ],
                              }),
                              (0, Ie.BX)(m.Text, {
                                className: "fr",
                                children: [
                                  s,
                                  "晚·",
                                  d,
                                  "间共 ",
                                  "￥" + w[0].totalPrice,
                                ],
                              }),
                            ],
                          }),
                        (null == w ? void 0 : w.length) > 0 &&
                          (0, Ie.BX)(Ie.HY, {
                            children: [
                              w[0].priceDetailList.map(function (e) {
                                var t = (0, P.gP)(
                                    e.num > 1,
                                    " x ".concat(e.num)
                                  ),
                                  i = (0, P.gP)(
                                    e.userPayPrice,
                                    "(惠后实付 ¥"
                                      .concat(e.userPayPrice)
                                      .concat(t, ")")
                                  ),
                                  a = "¥".concat(e.price).concat(t);
                                return (0,
                                Ie.BX)(m.View, { className: "txt", children: [(0, Ie.tZ)(m.Text, { className: "date", children: e.title }), (0, Ie.tZ)(m.Text, { children: e.content }), (0, Ie.BX)(m.Text, { className: "fr", children: [i, " ", a] })] }, "idx");
                              }),
                              w[0].extraPaySurcharge &&
                                (0, Ie.tZ)(
                                  m.View,
                                  {
                                    className: "txt",
                                    children: w[0].extraPaySurcharge,
                                  },
                                  "tax-desc"
                                ),
                            ],
                          }),
                        (null == l ? void 0 : l.length) > 0 &&
                          (0, Ie.BX)(Ie.HY, {
                            children: [
                              (0, Ie.BX)(m.View, {
                                className: "strong",
                                children: [
                                  (0, Ie.tZ)(m.Text, { children: "超值加购" }),
                                  (0, Ie.tZ)(m.Text, {
                                    className: "fr",
                                    children: "￥" + k,
                                  }),
                                ],
                              }),
                              l.map(function (e) {
                                return (0,
                                Ie.BX)(m.View, { className: "txt", children: [(0, Ie.tZ)(m.Text, { children: e.title }), (0, Ie.tZ)(m.Text, { className: "fr", children: "¥" + e.buyAmount })] }, "idx");
                              }),
                            ],
                          }),
                        b > 0 &&
                          (0, Ie.BX)(Ie.HY, {
                            children: [
                              (0, Ie.BX)(m.View, {
                                className: "strong",
                                children: [
                                  (0, Ie.tZ)(m.Text, { children: "优惠" }),
                                  (0, Ie.tZ)(m.Text, {
                                    className: "fr",
                                    children: "-￥" + b,
                                  }),
                                ],
                              }),
                              null == C
                                ? void 0
                                : C.map(function (e, t) {
                                    return (0,
                                    Ie.BX)(m.View, { className: "txt", children: [(0, Ie.tZ)(m.Text, { children: e.title }), (0, Ie.tZ)(m.Text, { className: "fr", children: "-¥" + e.price })] }, t);
                                  }),
                              null == l
                                ? void 0
                                : l
                                    .filter(function (e) {
                                      return e.preferentialAmount > 0;
                                    })
                                    .map(function (e, t) {
                                      return (0,
                                      Ie.BX)(m.View, { className: "txt", children: [(0, Ie.tZ)(m.Text, { children: e.displayText }), (0, Ie.tZ)(m.Text, { className: "fr", children: "-¥" + e.preferentialAmount })] }, t);
                                    }),
                              null == V
                                ? void 0
                                : V.map(function (e, t) {
                                    return (0,
                                    Ie.BX)(m.View, { className: "txt", children: [(0, Ie.tZ)(m.Text, { children: e.name }), (0, Ie.tZ)(m.Text, { className: "fr", children: "-¥" + e.price })] }, t);
                                  }),
                            ],
                          }),
                      ],
                    }),
                    (null == o ? void 0 : o.cashBackPrice) > 0 &&
                      (0, Ie.BX)(m.View, {
                        className: "item",
                        children: [
                          (0, Ie.BX)(m.View, {
                            className: "big-strong",
                            children: [
                              (0, Ie.tZ)(m.Text, {
                                className: "danbao-tit",
                                children: "离店后返现金",
                              }),
                              (null == o ? void 0 : o.cashBackTitle) &&
                                (0, Ie.tZ)(m.Text, {
                                  className: "back-desc",
                                  children: o.cashBackTitle,
                                }),
                            ],
                          }),
                          null == o ||
                          null === (i = o.cashBackInfoDetailList) ||
                          void 0 === i
                            ? void 0
                            : i.map(function (e, t) {
                                return (0,
                                Ie.BX)(m.View, { className: "txt", children: [(0, Ie.tZ)(m.Text, { children: e.cashBackDetailName }), (0, Ie.tZ)(m.Text, { className: "fr", children: e.cashBackDetailPrice })] }, t);
                              }),
                          (null === (a = o.randomCouponInfo) || void 0 === a
                            ? void 0
                            : a.price) > 0 &&
                            (0, Ie.BX)(m.View, {
                              className: "txt",
                              children: [
                                (0, Ie.tZ)(m.Text, {
                                  children: o.randomCouponInfo.title,
                                }),
                                (0, Ie.tZ)(m.Text, {
                                  className: "fr",
                                  children: o.randomCouponInfo.price,
                                }),
                              ],
                            }),
                        ],
                      }),
                  ],
                })
              );
            }),
            ze = (function (e) {
              (0, s.Z)(i, e);
              var t = (0, d.Z)(i);
              function i(e) {
                var a;
                return (
                  (0, c.Z)(this, i),
                  ((a = t.call(this, e)).state = {
                    isTieyou: f.default.isTieyou,
                    needRefresh: !1,
                  }),
                  a
                );
              }
              return (
                (0, r.Z)(i, [
                  {
                    key: "onClickItem",
                    value: function (e) {
                      var t = this;
                      if (
                        5 === this.props.modalInfo.orderState &&
                        1 === e.state
                      )
                        if (6 !== e.promotionType) {
                          var i = {
                            data: {
                              clientVersion: C.Z.clientVersion,
                              orderNumber: this.props.orderNumber,
                              promotionType: e.promotionType,
                            },
                          };
                          (0, B.showLoading)(),
                            (0, re._b)(i)
                              .then(function (i) {
                                if (1 != i.resultCode)
                                  throw new Error(
                                    null == i ? void 0 : i.resultMessage
                                  );
                                (0, B.hideLoading)(),
                                  p().showToast({
                                    title: "返现领取成功~",
                                    icon: "none",
                                  }),
                                  t.setState({ needRefresh: !0 }, function () {
                                    t.props.onChangeItemState(e);
                                  });
                              })
                              .catch(function (e) {
                                (0, B.hideLoading)(),
                                  p().showToast({
                                    title: e || "网络错误，请稍后重试",
                                    icon: "none",
                                  });
                              });
                        } else
                          p().showToast({
                            title: e.toast || "订一程后才可以领取返现哦~",
                            icon: "none",
                            duration: 1500,
                          });
                    },
                  },
                  {
                    key: "onClickClose",
                    value: function () {
                      var e = this.state.needRefresh;
                      this.props.onClose(e);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e,
                        t = this,
                        i = this.state.isTieyou,
                        a = this.props,
                        n = a.visible,
                        l = a.modalInfo,
                        c = l.orderState,
                        r = l.list,
                        o = l.bottom,
                        s = i ? "铁友火车票" : "智行火车票",
                        d = "cashback-modal ".concat(f.default.zxTyStr),
                        u = "modal-mask ".concat(n ? "visible" : "hidden"),
                        h = "modal-view ".concat(n ? "visible" : "hidden");
                      return (0, Ie.tZ)(m.View, {
                        className: "hotel-order-cashback-modal",
                        children:
                          n &&
                          (0, Ie.BX)(m.View, {
                            className: d,
                            children: [
                              (0, Ie.tZ)(m.View, {
                                className: u,
                                id: "AXFr",
                                onClick: this.onClickClose.bind(this),
                              }),
                              (0, Ie.BX)(m.View, {
                                className: h,
                                children: [
                                  (0, Ie.BX)(m.View, {
                                    className: "modal-bar",
                                    children: [
                                      (0, Ie.tZ)(m.View, {
                                        className: "left-btn",
                                      }),
                                      (0, Ie.tZ)(m.View, {
                                        className: "title",
                                        children: "领取返现",
                                      }),
                                      (0, Ie.tZ)(m.View, {
                                        className: "right-btn",
                                        children: (0, Ie.tZ)(m.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AXFs",
                                          onClick: this.onClickClose.bind(this),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, Ie.BX)(m.View, {
                                    className: "modal-content",
                                    children: [
                                      (0, Ie.BX)(m.View, {
                                        className: "desc",
                                        children: [
                                          "领取返现后，7个工作日内到账(节假日存在部分延迟)，可至",
                                          s,
                                          "-我的-钱包提现",
                                        ],
                                      }),
                                      (0, Ie.tZ)(m.View, {
                                        className: "list",
                                        children: r.map(function (e, i) {
                                          return (0,
                                          Ie.BX)(m.View, { className: "item", id: "AXFt", onClick: t.onClickItem.bind(t, e), children: [(0, Ie.tZ)(m.View, { className: "price", children: e.cashBackPrice }), (0, Ie.BX)(m.View, { className: "name", children: [(0, Ie.tZ)(m.View, { children: e.promotionName }), (0, Ie.tZ)(m.View, { className: "desc", children: e.promotionTag })] }), (0, Ie.tZ)(m.View, { className: "btn ".concat((0, P.gP)(5 === c && 1 === e.state, " cur")), children: e.buttonText })] }, i);
                                        }),
                                      }),
                                      (null == o ? void 0 : o.title) &&
                                        (0, Ie.BX)(m.View, {
                                          className: "rule",
                                          children: [
                                            (0, Ie.tZ)(m.View, {
                                              className: "rule-name",
                                              children: o.title,
                                            }),
                                            null === (e = o.content) ||
                                            void 0 === e
                                              ? void 0
                                              : e.map(function (e, t) {
                                                  return (0,
                                                  Ie.tZ)(m.View, { className: "rule-desc", children: e.title }, t);
                                                }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      });
                    },
                  },
                ]),
                i
              );
            })(u.default.Component),
            Re = {
              titleMapping:
                ((pe = {}),
                (0, Xe.Z)(pe, z, "取消政策"),
                (0, Xe.Z)(pe, R, "价格明细"),
                (0, Xe.Z)(pe, O, "买贵赔"),
                (0, Xe.Z)(pe, j, "订房必读"),
                (0, Xe.Z)(pe, U, "退款详情"),
                (0, Xe.Z)(pe, H, "套餐详情"),
                (0, Xe.Z)(pe, G, "入住即送"),
                (0, Xe.Z)(pe, q, "免费赠送"),
                (0, Xe.Z)(pe, Y, "订房必读"),
                (0, Xe.Z)(
                  pe,
                  E,
                  (0, Ie.BX)(m.View, {
                    className: "bargain-drawer-title",
                    children: [
                      (0, Ie.tZ)(m.Image, {
                        className: "img",
                        mode: "widthFix",
                        src: "https://images3.c-ctrip.com/ztrip/hotel/2022/3/title-bhj@3x.png",
                      }),
                      (0, Ie.BX)(m.View, {
                        className: "txt",
                        children: [
                          "失败 送你",
                          (0, Ie.tZ)(m.Text, {
                            className: "color-red",
                            children: "¥5",
                          }),
                          "优惠券",
                        ],
                      }),
                    ],
                  })
                ),
                pe),
              whiteTypes: [W, K],
              noClosedTypes: [W, K],
              specialTypes: [W, K],
              barginTitle:
                "https://images3.c-ctrip.com/ztrip/hotel/2022/3/title-bhj@3x.png",
              barginContent:
                "https://images3.c-ctrip.com/ztrip/hotel/2022/6/couponnew@3x.webp",
              consultContent:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/2023-3/app/xieshangquxiao_shibai@3x.webp",
              consultSuccessTitle:
                "https://images3.c-ctrip.com/ztrip/hotel/2022/8/popup_dsbg@3x.webp",
            },
            Oe = (0, v.$j)(
              function (e) {
                return {
                  type: e.drawer.type,
                  cashDrawerInfo: e.drawer.cashDrawerInfo,
                  orderDetailData: e.page.orderDetailData,
                  pageId: e.page.pageId,
                  highValuePackage: e.page.highValuePackage,
                  giftBox: e.page.giftBox,
                  livedConsumePackages: e.page.livedConsumePackages,
                };
              },
              function (e) {
                return {
                  onClose: e.drawer.close,
                  onCloseDrawerWithRefresh: e.drawer.onCloseDrawerWithRefresh,
                  onChangeCashItemState: e.drawer.onChangeCashItemState,
                  gotoHotelDetail: e.page.gotoHotelDetail,
                  gotoHotelList: e.page.gotoHotelList,
                };
              }
            )(function (e) {
              var t,
                i,
                a,
                n,
                l,
                c,
                r = e.cashDrawerInfo,
                o = e.giftBox,
                s = e.highValuePackage,
                d = e.livedConsumePackages,
                h = e.orderDetailData,
                p = h.cancelRemark,
                g = h.consultCancelInfo,
                f = h.currentMemerInfo,
                w = h.hotelBasicInfoList,
                v = h.ladderDeductionList,
                N = h.orderNumber,
                Z = h.pointCancelPolicyList,
                b = h.priceCompensateInfo,
                x = h.refundStatusInfo,
                I = h.requiredReadingInfo,
                C = e.pageId,
                k = e.type,
                T = e.onClose,
                X = e.onCloseDrawerWithRefresh,
                D = e.onChangeCashItemState,
                L = e.gotoHotelDetail,
                S = e.gotoHotelList,
                A = (function (e) {
                  return null != e && e.length
                    ? e.map(function (e) {
                        return {
                          cancelPriceRemark: e.cancelPriceRemark,
                          cancelTimeDisplay: e.cancelTimeDisplay,
                        };
                      })
                    : [];
                })(v),
                M = (0, u.useCallback)(
                  function () {
                    var e;
                    null === (e = (0, B.getCurrentPage)()) ||
                      void 0 === e ||
                      e.ubtTrace(222817, { PageId: C }),
                      L();
                  },
                  [L, C]
                );
              if (
                ((0, u.useEffect)(
                  function () {
                    var e;
                    k === E &&
                      (null === (e = (0, B.getCurrentPage)()) ||
                        void 0 === e ||
                        e.ubtTrace(222816, { PageId: C }));
                  },
                  [k, C]
                ),
                k === $)
              )
                return (0, Ie.tZ)(ze, {
                  visible: k === $,
                  modalInfo: r,
                  orderNumber: N,
                  onChangeItemState: D,
                  onClose: X,
                });
              var F = Re.whiteTypes.includes(k),
                _ = Re.noClosedTypes.includes(k),
                Q = Re.specialTypes.includes(k),
                J = Re.titleMapping[k],
                ee = {
                  isWhite: F,
                  onClose: T,
                  show: Boolean(k),
                  closeStyle: (0, y.Z)({}, (0, P.LP)(!_)),
                },
                te =
                  null == w ||
                  null ===
                    (t = w.filter(function (e) {
                      return 4 === e.type;
                    })) ||
                  void 0 === t
                    ? void 0
                    : t.reduce(function (e, t) {
                        return e.concat(
                          t.subSectionList || [
                            {
                              title: null == t ? void 0 : t.title,
                              content: "",
                            },
                          ]
                        );
                      }, []),
                ie = (
                  (null == I ||
                  null === (i = I.requiredReadingList) ||
                  void 0 === i
                    ? void 0
                    : i.filter(function (e) {
                        return 4 === e.type;
                      })[0]) ||
                  {} ||
                  {}
                ).subSectionListV2;
              return (0, Ie.BX)(
                De.Z,
                (0, y.Z)(
                  (0, y.Z)({}, ee),
                  {},
                  {
                    children: [
                      (0, Ie.tZ)(m.View, {
                        className: "title",
                        style: (0, P.LP)(J),
                        children: J,
                      }),
                      Q &&
                        (0, Ie.BX)(Ie.HY, {
                          children: [
                            (0, Ie.BX)(m.View, {
                              className: "consult-sucess",
                              style: (0, P.LP)(k === W),
                              children: [
                                (0, Ie.tZ)(m.Image, {
                                  className: "titbg",
                                  mode: "widthFix",
                                  src: Re.consultSuccessTitle,
                                  webp: !0,
                                }),
                                (0, Ie.BX)(m.View, {
                                  className: "content",
                                  children: [
                                    (0, Ie.BX)(m.View, {
                                      className: "avatar-wrap",
                                      children: [
                                        (0, Ie.tZ)(m.Image, {
                                          className: "avatar",
                                          src:
                                            null == g ||
                                            null === (a = g.headInfo) ||
                                            void 0 === a
                                              ? void 0
                                              : a.iconUrl,
                                        }),
                                        (0, Ie.tZ)(m.View, {
                                          className: "name",
                                          children: "酒店管家",
                                        }),
                                      ],
                                    }),
                                    (0, Ie.BX)(m.View, {
                                      className: "tit-wrap",
                                      children: [
                                        (0, Ie.tZ)(m.View, {
                                          className: "tit",
                                          children: "协商取消成功～",
                                        }),
                                        (0, Ie.tZ)(m.View, {
                                          className: "desc",
                                          children:
                                            "智行管家贴心服务，期待您的再次预订！",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Ie.tZ)(m.View, {
                                  className: "bottom",
                                  children: (0, Ie.tZ)(m.View, {
                                    className: "btn btn-primary",
                                    id: "AXGN",
                                    onClick: T,
                                    children: "谢谢啦~",
                                  }),
                                }),
                              ],
                            }),
                            (0, Ie.BX)(m.View, {
                              className: "consult-fail",
                              style: (0, P.LP)(k === K),
                              children: [
                                (0, Ie.tZ)(m.Image, {
                                  className: "titbg",
                                  mode: "widthFix",
                                  src: Re.consultContent,
                                }),
                                (0, Ie.BX)(m.View, {
                                  className: "content",
                                  children: [
                                    (0, Ie.tZ)(m.View, {
                                      className: "tit",
                                      children: "订单协商取消失败",
                                    }),
                                    (0, Ie.tZ)(m.View, {
                                      className: "desc",
                                      children:
                                        "管家已为您协商争取，但酒店已为您精心预留了房间，取消未成功",
                                    }),
                                  ],
                                }),
                                (0, Ie.tZ)(m.View, {
                                  className: "bottom",
                                  children: (0, Ie.tZ)(m.View, {
                                    className: "btn btn-primary",
                                    id: "AXGO",
                                    onClick: T,
                                    children: "我知道了",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, Ie.BX)(m.View, {
                        className: "drawer-content",
                        style: (0, P.LP)(!Q),
                        children: [
                          (0, Ie.BX)(m.View, {
                            style: (0, P.LP)(k === z),
                            children: [
                              (0, Ie.tZ)(Ae.Z, {
                                userVipInfo: f,
                                list: Z,
                                style: (0, P.Zt)({ b: 10 }),
                              }),
                              (0, Ie.tZ)(Le.Z, { data: (0, V.Z)(A) }),
                              (0, Ie.tZ)(m.View, {
                                className: "botm-desc",
                                children: p,
                              }),
                            ],
                          }),
                          (0, Ie.tZ)(m.View, {
                            style: (0, P.LP)(k === R),
                            children: (0, Ie.tZ)(_e, {}),
                          }),
                          (0, Ie.tZ)(m.View, {
                            style: (0, P.LP)(k === O),
                            children:
                              null == b ||
                              null === (n = b.detail) ||
                              void 0 === n ||
                              null === (l = n.detail) ||
                              void 0 === l
                                ? void 0
                                : l.map(function (e, t) {
                                    return (0,
                                    Ie.tZ)(m.View, { className: "list-item", children: (0, Ie.tZ)(m.View, { className: "txt", children: e.content }) }, t);
                                  }),
                          }),
                          (0, Ie.tZ)(m.View, {
                            style: (0, P.LP)(k === j),
                            children:
                              null == te
                                ? void 0
                                : te.map(function (e, t) {
                                    var i, a;
                                    return (0, Ie.BX)(
                                      u.default.Fragment,
                                      {
                                        children: [
                                          !(
                                            null !== (i = e.subSectionList) &&
                                            void 0 !== i &&
                                            i.length
                                          ) &&
                                            e.title &&
                                            (0, Ie.tZ)(m.View, {
                                              className: "list-item",
                                              children: (0, Ie.tZ)(m.View, {
                                                className: "tit",
                                                children: e.title,
                                              }),
                                            }),
                                          null === (a = e.subSectionList) ||
                                          void 0 === a
                                            ? void 0
                                            : a.map(function (e, t) {
                                                return (0,
                                                Ie.BX)(m.View, { className: "list-item", children: [(0, Ie.tZ)(m.View, { className: "tit", children: e.title }), (0, Ie.tZ)(m.View, { className: "txt", children: e.content })] }, t);
                                              }),
                                          (0, Ie.tZ)(m.View, {
                                            className: "list-item",
                                            children: (0, Ie.tZ)(m.View, {
                                              className: "txt",
                                              children: e.content,
                                            }),
                                          }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                          }),
                          (0, Ie.BX)(m.View, {
                            className: "bargain-wrap",
                            style: (0, P.LP)(k === E),
                            children: [
                              (0, Ie.tZ)(m.Image, {
                                className: "cont-img",
                                mode: "widthFix",
                                src: Re.barginContent,
                              }),
                              (0, Ie.BX)(m.View, {
                                className: "bottom",
                                children: [
                                  (0, Ie.tZ)(m.View, {
                                    className: "btn btn-primary",
                                    id: "AXGP",
                                    onClick: M,
                                    children: "再次预订",
                                  }),
                                  (0, Ie.tZ)(m.View, {
                                    className: "desc",
                                    id: "AXGQ",
                                    onClick: S,
                                    children: "看看别的酒店",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, Ie.BX)(m.View, {
                            className: "refund-wrap",
                            style: (0, P.LP)(k === U),
                            children: [
                              (null == x ? void 0 : x.refundsStatus) &&
                                (0, Ie.BX)(m.View, {
                                  className: "tit-wrap",
                                  children: [
                                    (0, Ie.tZ)(m.Text, {
                                      className: "tit",
                                      children: x.refundsStatus.refundTitle,
                                    }),
                                    (0, Ie.BX)(m.Text, {
                                      className: "price color-red",
                                      children: [
                                        "¥",
                                        x.refundsStatus.refundPrice,
                                      ],
                                    }),
                                  ],
                                }),
                              (null == x ||
                              null === (c = x.refundStatusList) ||
                              void 0 === c
                                ? void 0
                                : c.length) > 0 &&
                                (0, Ie.tZ)(m.View, {
                                  className: "status-list",
                                  children: x.refundStatusList.map(function (
                                    e,
                                    t
                                  ) {
                                    return (0, Ie.BX)(
                                      m.View,
                                      {
                                        className: "status".concat(
                                          (0, P.gP)(0 === t, " active")
                                        ),
                                        children: [
                                          (0, Ie.BX)(m.View, {
                                            className: "left",
                                            children: [
                                              (0, Ie.tZ)(m.View, {
                                                className: "circle",
                                                children: (0, Ie.tZ)(m.View, {
                                                  className: "small-circle",
                                                }),
                                              }),
                                              (0, Ie.tZ)(m.View, {
                                                className: "line",
                                              }),
                                            ],
                                          }),
                                          (0, Ie.BX)(m.View, {
                                            className: "right",
                                            children: [
                                              (0, Ie.tZ)(m.View, {
                                                className: "tit",
                                                children: e.refundTitle,
                                              }),
                                              (0, Ie.tZ)(m.View, {
                                                className: "remark",
                                                children: e.refundRemark,
                                              }),
                                              (0, Ie.tZ)(m.View, {
                                                className: "time",
                                                children: e.refundTime,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                                }),
                            ],
                          }),
                          (0, Ie.tZ)(m.View, {
                            style: (0, P.LP)(k === H),
                            children:
                              s &&
                              (0, Ie.tZ)(Fe, { info: s, title: "套餐包含" }),
                          }),
                          (0, Ie.tZ)(m.View, {
                            style: (0, P.LP)(k === q),
                            children:
                              o &&
                              (0, Ie.tZ)(Fe, { info: o, giftTagHidden: !0 }),
                          }),
                          (0, Ie.tZ)(m.View, {
                            style: (0, P.LP)(k === G),
                            children: (0, Ie.tZ)(Se, { list: d }),
                          }),
                          (0, Ie.tZ)(m.View, {
                            style: (0, P.LP)(k === Y),
                            children:
                              null == ie
                                ? void 0
                                : ie.map(function (e, t) {
                                    var i;
                                    return (0, Ie.tZ)(
                                      u.default.Fragment,
                                      {
                                        children: (0, Ie.BX)(m.View, {
                                          className: "list-item",
                                          children: [
                                            e.title &&
                                              (0, Ie.tZ)(m.View, {
                                                className: "tit",
                                                children: e.title,
                                              }),
                                            null === (i = e.contentList) ||
                                            void 0 === i
                                              ? void 0
                                              : i.map(function (e, t) {
                                                  return (0,
                                                  Ie.tZ)(m.View, { className: "txt", children: e }, t);
                                                }),
                                          ],
                                        }),
                                      },
                                      t
                                    );
                                  }),
                          }),
                        ],
                      }),
                    ],
                  }
                )
              );
            }),
            je = (0, v.$j)(
              function (e) {
                return { orderDetailData: e.page.orderDetailData };
              },
              function () {
                return {};
              }
            )(function (e) {
              var t = e.orderDetailData.noticeInfo,
                i = (0, P.LP)(null == t ? void 0 : t.content, "flex");
              return (0, Ie.BX)(m.View, {
                className: "ht-order-card notice",
                style: i,
                id: "AXGM",
                onClick: function () {
                  return (0, T.YI)(null == t ? void 0 : t.jumpUrl);
                },
                children: [
                  (0, Ie.tZ)(m.Image, {
                    className: "icon",
                    src: F[f.default.zxTyStr].notice,
                  }),
                  (0, Ie.tZ)(m.Text, {
                    className: "txt ellipsis",
                    children: null == t ? void 0 : t.content,
                  }),
                  (0, Ie.tZ)(Be.Z, { name: "arr" }),
                ],
              });
            }),
            Ee =
              "https://images3.c-ctrip.com/ztrip/hotel/2022/7/blue_ok@3x.webp",
            Ue =
              "https://images3.c-ctrip.com/ztrip/hotel/2022/7/nocancel@3x.webp",
            He = (0, v.$j)(
              function (e) {
                return {
                  cancelPolicyText: e.page.cancelPolicyText,
                  loading: e.page.loading,
                  orderDetailData: e.page.orderDetailData,
                };
              },
              function (e) {
                return {
                  openOrderDrawer: e.drawer.open,
                  refreshPage: e.page.getOrderDetails,
                  onOrderPay: e.order.onOrderPay,
                };
              }
            )(function (e) {
              var t = e.cancelPolicyText,
                i = e.loading,
                a = e.orderDetailData,
                n = a.guestTag,
                l = a.cancelRemark,
                c = a.ladderDeductionList,
                r = a.lastPayTime,
                o = a.orderPrice,
                s = a.orderState,
                d = a.orderStateRemark,
                u = a.payFlag,
                h = a.payHotelPrice,
                p = a.payType,
                g = a.payTypeDesc,
                f = e.refreshPage,
                w = e.openOrderDrawer,
                v = e.onOrderPay,
                N = 2 !== p && ((null == c ? void 0 : c.length) > 0 || l),
                Z = null != t && t.includes("不可取消") ? Ue : Ee,
                b = u && 1 === s,
                V = u ? o : 3 === p ? h : o,
                x = {
                  style: (0, P.LP)(!u, "inline-flex"),
                  onClick: function () {
                    return w(R);
                  },
                },
                I = { style: (0, P.LP)(b, "flex"), onClick: v },
                C = {
                  style: (0, P.LP)(N, "flex"),
                  onClick: function () {
                    return w(z);
                  },
                };
              return (0,
              Ie.BX)(Ie.HY, { children: [(0, Ie.BX)(m.View, { className: "ht-order-card pay-info", style: (0, P.LP)(i), children: [(0, Ie.BX)(m.View, { className: "skeleton-wrap", children: [(0, Ie.tZ)(ke.Z, { width: "216px", height: "24px" }), (0, Ie.tZ)(ke.Z, { width: "63px", height: "24px" })] }), (0, Ie.BX)(m.View, { className: "skeleton-wrap", children: [(0, Ie.tZ)(ke.Z, { width: "216px", height: "24px" }), (0, Ie.tZ)(ke.Z, { width: "63px", height: "24px" })] })] }), (0, Ie.BX)(m.View, { className: "ht-order-card pay-info", style: (0, P.LP)(!i), children: [(0, Ie.BX)(m.View, { className: "price-wrap", children: [(0, Ie.BX)(m.View, { className: "left", style: (0, P.LP)(Boolean(o)), children: [(0, Ie.BX)(m.View, { className: "info", children: [(0, Ie.tZ)(m.Text, { className: "type-desc", children: g }), (0, Ie.BX)(m.Text, { className: "price color-red", children: ["¥", V] }), (0, Ie.tZ)(m.Image, { mode: "widthFix", className: "atmosphere-tag", src: n, style: (0, P.LP)(n) }), (0, Ie.BX)(m.View, (0, y.Z)((0, y.Z)({ className: "detail" }, x), {}, { children: [(0, Ie.tZ)(m.Text, { className: "text-light primary", children: "费用明细" }), (0, Ie.tZ)(m.Text, { className: "ifont-arr iconfont" })] }))] }), (0, Ie.tZ)(m.View, { className: "desc", children: d })] }), (0, Ie.BX)(m.View, (0, y.Z)((0, y.Z)({ className: "right btn-red" }, I), {}, { children: [(0, Ie.tZ)(m.View, { className: "pay-txt", children: "立即支付" }), b && (0, Ie.tZ)(Te.ZtCountdown, { className: "count-time", endTime: r, onTimeup: f })] }))] }), (0, Ie.BX)(m.View, { className: "cancel-policy", style: (0, P.LP)(t, "flex"), children: [(0, Ie.BX)(m.View, { className: "left", children: [(0, Ie.tZ)(m.Image, { className: "icon", src: Z }), (0, Ie.tZ)(m.View, { className: "txt", children: t })] }), (0, Ie.BX)(m.View, (0, y.Z)((0, y.Z)({ className: "right" }, C), {}, { children: [(0, Ie.tZ)(m.Text, { className: "text-light primary", children: "取消政策" }), (0, Ie.tZ)(m.Text, { className: "ifont-arr iconfont" })] }))] })] })] });
            }),
            qe = (0, v.$j)(
              function (e) {
                return { orderDetailData: e.page.orderDetailData };
              },
              function (e) {
                return { onClickActivityBanner: e.page.onClickActivityBanner };
              }
            )(function (e) {
              var t = e.orderDetailData.periodActivityList,
                i = e.onClickActivityBanner,
                a = (0, P.LP)(
                  f.default.isWechat && (null == t ? void 0 : t.length) > 0
                );
              return (0, Ie.tZ)(m.View, {
                className: "ht-order-card banners",
                style: a,
                children: (0, Ie.tZ)(
                  m.Swiper,
                  (0, y.Z)(
                    (0, y.Z)(
                      { className: "banner-swiper" },
                      {
                        autoplay: !0,
                        interval: 4e3,
                        circular: !0,
                        indicatorColor: "rgba(255,255,255,.4)",
                        indicatorActiveColor: "#FFFFFF",
                      }
                    ),
                    {},
                    {
                      children:
                        null == t
                          ? void 0
                          : t.map(function (e, t) {
                              return (0, Ie.tZ)(
                                m.SwiperItem,
                                {
                                  children: (0, Ie.tZ)(m.View, {
                                    className: "banner-item",
                                    children: (0, Ie.tZ)(m.Image, {
                                      className: "banner-img",
                                      src: e.imgUrl,
                                      id: "AXFk",
                                      onClick: function () {
                                        return i(e);
                                      },
                                    }),
                                  }),
                                },
                                t
                              );
                            }),
                    }
                  )
                ),
              });
            }),
            Ge = (0, v.$j)(
              function (e) {
                return {
                  orderDetailData: e.page.orderDetailData,
                  loading: e.page.loading,
                  pageId: e.page.pageId,
                  serviceCall: e.page.serviceCall,
                  showIMModal: e.page.showIMModal,
                  iMModalTitle: e.page.iMModalTitle,
                };
              },
              function (e) {
                return {
                  gotoHotelDetail: e.page.gotoHotelDetail,
                  gotoQA: e.page.gotoQA,
                  setPageState: function (t) {
                    return e.page.setState(t);
                  },
                };
              }
            )(function (e) {
              var t = e.loading,
                i = e.orderDetailData,
                a = i.address,
                n = i.geoList,
                l = i.hotelLogoPic,
                c = i.hotelName,
                r = i.phoneNumber,
                o = e.pageId,
                s = e.serviceCall,
                d = e.showIMModal,
                h = e.iMModalTitle,
                g = e.gotoQA,
                f = e.gotoHotelDetail,
                w = e.setPageState,
                v = (0, u.useCallback)(
                  function () {
                    r && p().makePhoneCall({ phoneNumber: r });
                  },
                  [r]
                ),
                N = (0, u.useCallback)(
                  function () {
                    var e, t;
                    null != n &&
                      n.length &&
                      n.forEach(function (e) {
                        3 == e.type && (t = e);
                      }),
                      null === (e = (0, B.getCurrentPage)()) ||
                        void 0 === e ||
                        e.ubtTrace(210161, {
                          bizKey: "hotel_ordsuccess_map_click",
                        }),
                      t &&
                        p().openLocation({
                          latitude: parseFloat(t.lat),
                          longitude: parseFloat(t.lon),
                          name: c,
                          address: a,
                        });
                  },
                  [a, n, c]
                ),
                Z = (0, u.useCallback)(
                  function () {
                    var e;
                    null === (e = (0, B.getCurrentPage)()) ||
                      void 0 === e ||
                      e.ubtTrace(210161, {
                        bizKey: "hotel_ordsuccess_consultonlien_click",
                        pageId: o,
                      }),
                      w({ showIMModal: !1 }),
                      p().makePhoneCall({ phoneNumber: s });
                  },
                  [o, s, w]
                );
              return (0, Ie.BX)(Ie.HY, {
                children: [
                  (0, Ie.BX)(m.View, {
                    className: "ht-order-card hotel-card",
                    style: (0, P.LP)(t),
                    children: [
                      (0, Ie.BX)(m.View, {
                        className: "top",
                        children: [
                          (0, Ie.tZ)(ke.Z, {
                            extraClass: "left",
                            width: "60px",
                            height: "60px",
                          }),
                          (0, Ie.BX)(m.View, {
                            className: "right",
                            children: [
                              (0, Ie.tZ)(ke.Z, {
                                extraClass: "name",
                                width: "200px",
                                height: "24px",
                              }),
                              (0, Ie.tZ)(ke.Z, {
                                extraClass: "address",
                                width: "200px",
                                height: "24px",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Ie.tZ)(m.View, {
                        className: "bottom",
                        children: (0, Ie.tZ)(ke.Z, { height: "24px" }),
                      }),
                    ],
                  }),
                  (0, Ie.BX)(m.View, {
                    className: "ht-order-card hotel-card",
                    style: (0, P.LP)(!t),
                    children: [
                      (0, Ie.BX)(m.View, {
                        className: "top",
                        children: [
                          (0, Ie.tZ)(m.View, {
                            className: "left",
                            style: { backgroundImage: "url(".concat(l, ")") },
                          }),
                          (0, Ie.BX)(m.View, {
                            className: "right",
                            children: [
                              (0, Ie.BX)(m.View, {
                                className: "name",
                                id: "AXGC",
                                onClick: f,
                                children: [
                                  (0, Ie.tZ)(m.Text, { children: c }),
                                  (0, Ie.tZ)(Be.Z, { name: "arr" }),
                                ],
                              }),
                              (0, Ie.BX)(m.View, {
                                className: "address",
                                id: "AXGD",
                                onClick: function () {
                                  return (0, P.pV)(a);
                                },
                                children: [
                                  (0, Ie.tZ)(m.Text, { children: a }),
                                  (0, Ie.tZ)(m.Text, {
                                    className: "text-light copy",
                                    children: "复制",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Ie.BX)(m.View, {
                        className: "bottom",
                        children: [
                          (0, Ie.BX)(m.View, {
                            className: "option",
                            id: "AXGE",
                            onClick: N,
                            children: [
                              (0, Ie.tZ)(m.Text, {
                                className: "ifont-location iconfont",
                              }),
                              "地图导航",
                            ],
                          }),
                          (0, Ie.BX)(m.View, {
                            className: "option",
                            id: "AXGF",
                            onClick: v,
                            children: [
                              (0, Ie.tZ)(m.Text, {
                                className: "ifont-tel iconfont",
                              }),
                              "联系酒店",
                            ],
                          }),
                          (0, Ie.BX)(m.View, {
                            className: "option",
                            id: "AXGG",
                            onClick: function () {
                              return w({ showIMModal: !0, iMModalTitle: "" });
                            },
                            children: [
                              (0, Ie.tZ)(m.Text, {
                                className: "ifont-kefu iconfont",
                              }),
                              "联系客服",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Ie.BX)(Te.ZtDrawer, {
                    className: "im-drawer",
                    show: d,
                    onClose: function () {
                      return w({ showIMModal: !1 });
                    },
                    onWrapClose: function () {
                      return w({ showIMModal: !1 });
                    },
                    isShowClose: !1,
                    children: [
                      h &&
                        (0, Ie.tZ)(m.View, { className: "item", children: h }),
                      (0, Ie.tZ)(m.View, {
                        className: "item color-primary",
                        id: "AXGH",
                        onClick: g,
                        children: "在线咨询客服",
                      }),
                      (0, Ie.BX)(m.View, {
                        className: "item",
                        id: "AXGI",
                        onClick: Z,
                        children: [
                          "拨打客服电话 ",
                          (0, Ie.tZ)(m.Text, {
                            className: "color-primary call",
                            children: s,
                          }),
                        ],
                      }),
                      (0, Ie.tZ)(m.View, {
                        className: "item",
                        id: "AXGJ",
                        onClick: function () {
                          return w({ showIMModal: !1 });
                        },
                        children: "取消",
                      }),
                    ],
                  }),
                ],
              });
            }),
            $e = "https://images3.c-ctrip.com/ztrip/hotel/2022/3/ic-jsj@3x.png",
            Ke = function (e, t, i) {
              return ""
                .concat(e)
                .concat((0, P.gP)(0 !== i, "+"))
                .concat(t.jointName);
            },
            We = function () {
              return (0, Ie.BX)(m.View, {
                className: "break-line",
                children: [
                  (0, Ie.tZ)(m.View, { className: "left-circle" }),
                  (0, Ie.tZ)(m.View, { className: "dashed-line" }),
                  (0, Ie.tZ)(m.View, { className: "right-circle" }),
                ],
              });
            },
            Ye = (0, v.$j)(
              function (e) {
                return {
                  orderDetailData: e.page.orderDetailData,
                  pageId: e.page.pageId,
                  giftBox: e.page.giftBox,
                  highValuePackage: e.page.highValuePackage,
                  livedConsumePackages: e.page.livedConsumePackages,
                  loading: e.page.loading,
                  roomBasicInfos: e.facility.roomBasicInfos,
                };
              },
              function (e) {
                return { openOrderDrawer: e.drawer.open };
              }
            )(function (e) {
              var t,
                i,
                a,
                n,
                l = e.pageId,
                c = e.giftBox,
                r = e.highValuePackage,
                o = e.livedConsumePackages,
                s = e.loading,
                d = e.orderDetailData,
                h = d.cityId,
                p = d.checkInDate,
                g = d.checkInTime,
                f = d.checkOutDate,
                w = d.checkOutTime,
                v = d.checkDayNum,
                N = void 0 === v ? 1 : v,
                Z = d.checkNum,
                b = void 0 === Z ? 1 : Z,
                V = d.contactMobile,
                x = d.contactUser,
                I = d.couponInfo,
                C = d.createTime,
                k = d.invoiceInfo,
                T = d.invoiceTargetType,
                X = d.needInvoiceFlag,
                L = d.roomName,
                S = d.roomPriceList,
                A = d.specialRequestRemark,
                M = d.tagMessage,
                F = d.vendorOrderNumber,
                _ = d.hourRoomInfo,
                z = d.requiredReadingInfo,
                R = e.roomBasicInfos,
                O = e.openOrderDrawer,
                j = (0, P.gP)(
                  null == _ ? void 0 : _.checkInTimeInterval,
                  "  连住".concat(null == _ ? void 0 : _.checkInTimeInterval)
                ),
                E = ""
                  .concat(D()(p).format("M月D日"), "(")
                  .concat((0, P.YV)(p), ")")
                  .concat(j),
                U = ""
                  .concat(D()(f).format("M月D日"), "(")
                  .concat((0, P.YV)(f), ")"),
                $ = "".concat(N, "晚").concat(b, "间"),
                K =
                  null != _ && _.continuousStayTime
                    ? "可住时段: ".concat(
                        null == _ ? void 0 : _.continuousStayTime
                      )
                    : g,
                W =
                  null == r || null === (t = r.details) || void 0 === t
                    ? void 0
                    : t
                        .filter(function (e) {
                          return 1 !== e.type;
                        })
                        .reduce(Ke, ""),
                Q =
                  null == c || null === (i = c.details) || void 0 === i
                    ? void 0
                    : i.reduce(Ke, ""),
                J = {
                  width: "200px",
                  height: "16px",
                  otherStyle: { marginTop: "5px" },
                },
                ee =
                  null == R
                    ? void 0
                    : R.filter(function (e) {
                        return Boolean(e);
                      }).join(" · "),
                te = X && (null == k ? void 0 : k.title),
                ie = 1 === (null == k ? void 0 : k.invoiceType),
                ae = ie ? "电子发票" : "纸质发票",
                ne = ie
                  ? ae
                  : "".concat(null == k ? void 0 : k.state, " ").concat(ae),
                le = (0, P.gP)(te, ne),
                ce = te || 2 === T,
                re =
                  null == S
                    ? void 0
                    : S.find(function (e) {
                        return "房费" === e.title;
                      }),
                oe =
                  null == re ||
                  null === (a = re.priceDetailList) ||
                  void 0 === a ||
                  null === (n = a.filter) ||
                  void 0 === n
                    ? void 0
                    : n.call(a, function (e) {
                        return Boolean(e.remark);
                      }),
                se = (0, u.useCallback)(
                  function () {
                    var e;
                    null === (e = (0, B.getCurrentPage)()) ||
                      void 0 === e ||
                      e.ubtTrace("HotelDetailW_Coupon_click", {
                        ScanId: h,
                        PageId: l,
                      }),
                      O(G);
                  },
                  [h, l, O]
                );
              return (0, Ie.BX)(Ie.HY, {
                children: [
                  (0, Ie.tZ)(m.View, {
                    className: "ht-order-card check-in",
                    style: (0, P.LP)(s),
                    children: (0, Ie.BX)(m.View, {
                      className: "card-wrap",
                      children: [
                        (0, Ie.BX)(m.View, {
                          className: "top",
                          children: [
                            (0, Ie.tZ)(ke.Z, { extraClass: "check-wrap" }),
                            (0, Ie.tZ)(
                              ke.Z,
                              (0, y.Z)({ extraClass: "txt" }, J)
                            ),
                          ],
                        }),
                        (0, Ie.BX)(m.View, {
                          className: "mid",
                          children: [
                            (0, Ie.tZ)(ke.Z, { extraClass: "txt" }),
                            (0, Ie.tZ)(
                              ke.Z,
                              (0, y.Z)({ extraClass: "txt" }, J)
                            ),
                          ],
                        }),
                        (0, Ie.tZ)(ke.Z, {
                          height: "75px",
                          otherStyle: { marginTop: "10px" },
                        }),
                        (0, Ie.tZ)(We, {}),
                        (0, Ie.BX)(m.View, {
                          className: "bottom",
                          children: [
                            (0, Ie.tZ)(
                              ke.Z,
                              (0, y.Z)({ extraClass: "txt" }, J)
                            ),
                            (0, Ie.tZ)(
                              ke.Z,
                              (0, y.Z)({ extraClass: "txt" }, J)
                            ),
                            (0, Ie.tZ)(ke.Z, {
                              height: "25px",
                              otherStyle: { marginTop: "10px" },
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, Ie.BX)(m.View, {
                    className: "ht-order-card check-in",
                    style: (0, P.LP)(!s),
                    children: [
                      (0, Ie.BX)(m.View, {
                        className: "flight-hotel-tag",
                        style: (0, P.LP)(M, "flex"),
                        children: [
                          (0, Ie.tZ)(m.Image, {
                            className: "icon",
                            mode: "widthFix",
                            src: $e,
                          }),
                          (0, Ie.tZ)(Te.ZtRichText, {
                            className: "msg",
                            space: "nbsp",
                            nodes: M,
                          }),
                        ],
                      }),
                      (0, Ie.BX)(m.View, {
                        className: "card-wrap",
                        children: [
                          (0, Ie.BX)(m.View, {
                            className: "top",
                            children: [
                              (0, Ie.BX)(m.View, {
                                className: "check-wrap",
                                children: [
                                  (0, Ie.BX)(m.View, {
                                    className: "checkin",
                                    children: [
                                      (0, Ie.tZ)(m.View, {
                                        className: "txt",
                                        children: E,
                                      }),
                                      (0, Ie.tZ)(m.View, {
                                        className: "desc",
                                        children: K,
                                      }),
                                    ],
                                  }),
                                  !j &&
                                    (0, Ie.BX)(Ie.HY, {
                                      children: [
                                        (0, Ie.tZ)(m.View, {
                                          className: "line",
                                        }),
                                        (0, Ie.BX)(m.View, {
                                          className: "checkout",
                                          children: [
                                            (0, Ie.tZ)(m.View, {
                                              className: "txt",
                                              children: U,
                                            }),
                                            (0, Ie.tZ)(m.View, {
                                              className: "desc",
                                              children: w,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, Ie.tZ)(m.View, {
                                className: "txt",
                                children: $,
                              }),
                            ],
                          }),
                          (0, Ie.BX)(m.View, {
                            className: "mid",
                            children: [
                              (0, Ie.tZ)(m.View, {
                                className: "txt",
                                children: L,
                              }),
                              (0, Ie.tZ)(m.View, {
                                className: "desc",
                                children: ee,
                              }),
                            ],
                          }),
                          (0, Ie.BX)(m.View, {
                            className: "extra",
                            children: [
                              (0, Ie.BX)(m.View, {
                                className: "item",
                                children: [
                                  null == oe
                                    ? void 0
                                    : oe.map(function (e, t) {
                                        return (0,
                                        Ie.BX)(m.View, { className: "line", children: [(0, Ie.tZ)(m.View, { className: "tit", children: 0 === t && (0, Ie.BX)(Ie.HY, { children: [(0, Ie.tZ)(Be.Z, { name: "food", type: "v2" }), "餐食"] }) }), (0, Ie.tZ)(m.View, { className: "txt remark", children: e.remark }, t)] }, t);
                                      }),
                                  !(null != oe && oe.length) &&
                                    (0, Ie.BX)(m.View, {
                                      className: "line",
                                      children: [
                                        (0, Ie.BX)(m.View, {
                                          className: "tit",
                                          children: [
                                            (0, Ie.tZ)(Be.Z, {
                                              name: "food",
                                              type: "v2",
                                            }),
                                            "餐食",
                                          ],
                                        }),
                                        (0, Ie.tZ)(m.View, {
                                          className: "txt remark",
                                          children: "无餐食",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              W &&
                                (0, Ie.BX)(m.View, {
                                  className: "item",
                                  id: "AXFu",
                                  onClick: function () {
                                    return O(H);
                                  },
                                  children: [
                                    (0, Ie.BX)(m.View, {
                                      className: "tit",
                                      children: [
                                        (0, Ie.tZ)(Be.Z, {
                                          name: "taocan",
                                          type: "v2",
                                        }),
                                        "享",
                                      ],
                                    }),
                                    (0, Ie.tZ)(m.View, {
                                      className: "txt",
                                      children: W,
                                    }),
                                    (0, Ie.tZ)(Be.Z, { name: "arr" }),
                                  ],
                                }),
                              (null == o ? void 0 : o.detailNameStr) &&
                                (0, Ie.BX)(m.View, {
                                  className: "item",
                                  id: "AXFv",
                                  onClick: se,
                                  children: [
                                    (0, Ie.BX)(m.View, {
                                      className: "tit",
                                      children: [
                                        (0, Ie.tZ)(Be.Z, {
                                          name: "gift",
                                          type: "v2",
                                        }),
                                        "入住即送",
                                      ],
                                    }),
                                    (0, Ie.tZ)(m.View, {
                                      className: "txt",
                                      children:
                                        null == o ? void 0 : o.detailNameStr,
                                    }),
                                    (0, Ie.tZ)(Be.Z, { name: "arr" }),
                                  ],
                                }),
                              Q &&
                                (0, Ie.BX)(m.View, {
                                  className: "item",
                                  id: "AXFw",
                                  onClick: function () {
                                    return O(q);
                                  },
                                  children: [
                                    (0, Ie.BX)(m.View, {
                                      className: "tit",
                                      children: [
                                        (0, Ie.tZ)(Be.Z, {
                                          name: "gift",
                                          type: "v2",
                                        }),
                                        "礼",
                                      ],
                                    }),
                                    (0, Ie.tZ)(m.View, {
                                      className: "txt",
                                      children: Q,
                                    }),
                                    (0, Ie.tZ)(Be.Z, { name: "arr" }),
                                  ],
                                }),
                            ],
                          }),
                          (0, Ie.tZ)(We, {}),
                          (0, Ie.BX)(m.View, {
                            className: "bottom",
                            children: [
                              (0, Ie.BX)(m.View, {
                                className: "item",
                                style: (0, P.LP)(z, "flex"),
                                children: [
                                  (0, Ie.tZ)(m.View, {
                                    className: "label",
                                    children: "订房必读",
                                  }),
                                  (0, Ie.BX)(m.View, {
                                    className: "value icon-value",
                                    onClick: function () {
                                      O(Y);
                                    },
                                    children: [
                                      (0, Ie.tZ)(m.Text, {
                                        children: null == z ? void 0 : z.title,
                                      }),
                                      (0, Ie.tZ)(m.Text, {
                                        className:
                                          "iconfont2 ifont2-jinggao_linea_28",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Ie.BX)(m.View, {
                                className: "item",
                                style: (0, P.LP)(x, "flex"),
                                children: [
                                  (0, Ie.tZ)(m.View, {
                                    className: "label",
                                    children: "入住人",
                                  }),
                                  (0, Ie.tZ)(m.View, {
                                    className: "value",
                                    children: x,
                                  }),
                                ],
                              }),
                              (0, Ie.BX)(m.View, {
                                className: "item",
                                style: (0, P.LP)(V, "flex"),
                                children: [
                                  (0, Ie.tZ)(m.View, {
                                    className: "label",
                                    children: "联系电话",
                                  }),
                                  (0, Ie.tZ)(m.View, {
                                    className: "value",
                                    children: V,
                                  }),
                                ],
                              }),
                              (0, Ie.BX)(m.View, {
                                className: "item",
                                style: (0, P.LP)(A, "flex"),
                                children: [
                                  (0, Ie.tZ)(m.View, {
                                    className: "label",
                                    children: "特别要求",
                                  }),
                                  (0, Ie.tZ)(m.View, {
                                    className: "value",
                                    children: A,
                                  }),
                                ],
                              }),
                              (0, Ie.BX)(m.View, {
                                className: "item",
                                style: (0, P.LP)(ce, "flex"),
                                children: [
                                  (0, Ie.tZ)(m.View, {
                                    className: "label",
                                    children: "发票信息",
                                  }),
                                  (0, Ie.BX)(m.View, {
                                    className: "value",
                                    style: (0, P.LP)(te),
                                    children: [
                                      (0, Ie.tZ)(m.View, {
                                        class: "",
                                        children: le,
                                      }),
                                      (0, Ie.BX)(m.View, {
                                        class: "",
                                        children: [
                                          (0, P.Mv)(
                                            null == k ? void 0 : k.title
                                          ),
                                          " ",
                                          (0, P.Mv)(
                                            (null == k ? void 0 : k.receiver) ||
                                              (null == k ? void 0 : k.mobile)
                                          ),
                                        ],
                                      }),
                                      !ie &&
                                        (0, Ie.tZ)(m.View, {
                                          class: "",
                                          children: (0, P.Mv)(
                                            null == k ? void 0 : k.address
                                          ),
                                        }),
                                    ],
                                  }),
                                  (0, Ie.tZ)(m.View, {
                                    className: "value",
                                    style: (0, P.LP)(!te && 2 == T, "flex"),
                                    children: "如需发票，可向酒店索取",
                                  }),
                                ],
                              }),
                              (0, Ie.BX)(m.View, {
                                className: "item",
                                style: (0, P.LP)(
                                  null == I ? void 0 : I.couponName,
                                  "flex"
                                ),
                                children: [
                                  (0, Ie.tZ)(m.View, {
                                    className: "label",
                                    children: "优惠信息",
                                  }),
                                  (0, Ie.tZ)(m.View, {
                                    className: "value",
                                    children: null == I ? void 0 : I.couponName,
                                  }),
                                ],
                              }),
                              (0, Ie.BX)(m.View, {
                                className: "item",
                                style: (0, P.LP)(F, "flex"),
                                children: [
                                  (0, Ie.tZ)(m.View, {
                                    className: "label",
                                    children: "订单号",
                                  }),
                                  (0, Ie.BX)(m.View, {
                                    className: "value",
                                    children: [
                                      F,
                                      " ",
                                      (0, Ie.tZ)(m.Text, {
                                        className: "copy",
                                        id: "AXFx",
                                        onClick: function () {
                                          return (0, P.pV)(F);
                                        },
                                        children: "复制",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Ie.BX)(m.View, {
                                className: "item",
                                style: (0, P.LP)(C, "flex"),
                                children: [
                                  (0, Ie.tZ)(m.View, {
                                    className: "label",
                                    children: "预订时间",
                                  }),
                                  (0, Ie.tZ)(m.View, {
                                    className: "value",
                                    children: C,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            Qe = (0, v.$j)(
              function (e) {
                return {
                  orderDetailData: e.page.orderDetailData,
                  loading: e.page.loading,
                  memberAuraInfo: e.page.memberAuraInfo,
                };
              },
              function (e) {
                return {
                  gotoQA: e.page.gotoQA,
                  openOrderDrawer: e.drawer.open,
                  onClickShowCashModal: e.drawer.onClickShowCashModal,
                };
              }
            )(function (e) {
              var t,
                i,
                a,
                n,
                l,
                c = e.memberAuraInfo,
                r = e.orderDetailData,
                o = e.gotoQA,
                s = e.openOrderDrawer,
                d = e.onClickShowCashModal,
                u = r.orderState,
                h = r.cashBackInfo,
                p = r.exchangePointList,
                g = r.preferencePrice,
                f = r.priceCompensateInfo,
                w = c.bgImg,
                v = c.bgColor,
                N = c.cashbackIcon,
                Z = c.userPointsIcon,
                b = c.priceDetailIcon,
                V = c.threeRightIcon;
              return (null != p && p.length) ||
                (null != h && h.cashBackPrice) ||
                g ||
                (null != f &&
                  null !== (t = f.detail) &&
                  void 0 !== t &&
                  null !== (i = t.detail) &&
                  void 0 !== i &&
                  i.length)
                ? (0, Ie.BX)(m.View, {
                    className: "ht-order-card order-sales",
                    children: [
                      (0, Ie.tZ)(m.Image, {
                        className: "atmosphere",
                        mode: "widthFix",
                        src: w,
                      }),
                      (0, Ie.BX)(m.View, {
                        className: "card-wrap",
                        children: [
                          (null == p ? void 0 : p.length) > 0 &&
                            (0, Ie.BX)(m.View, {
                              className: "item points",
                              children: [
                                (0, Ie.BX)(m.View, {
                                  className: "top",
                                  children: [
                                    (0, Ie.tZ)(m.Image, {
                                      className: "item-icon",
                                      src: Z,
                                    }),
                                    (0, Ie.BX)(m.Text, {
                                      className: "tit",
                                      children: [
                                        "积分兑换权益·",
                                        null == p ? void 0 : p.length,
                                        "项",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Ie.tZ)(m.View, {
                                  className: "botm",
                                  children:
                                    null == p
                                      ? void 0
                                      : p.map(function () {
                                          var e =
                                              arguments.length > 0 &&
                                              void 0 !== arguments[0]
                                                ? arguments[0]
                                                : {},
                                            t =
                                              arguments.length > 1
                                                ? arguments[1]
                                                : void 0,
                                            i = e.title,
                                            a = e.state,
                                            n = e.subTitle,
                                            l = e.rightDesc,
                                            c = Boolean(a),
                                            r = "background-color:".concat(
                                              v,
                                              ";"
                                            ),
                                            o = c && a.includes("可使用"),
                                            s = "tag".concat(
                                              (0, P.gP)(o, " active")
                                            );
                                          return (0,
                                          Ie.BX)(m.View, { className: "point-item", style: r, children: [(0, Ie.tZ)(m.View, { className: "tit", children: i }), (0, Ie.tZ)(m.View, { className: "desc", children: l }), (0, Ie.tZ)(m.View, { className: "subtit", children: n }), c && (0, Ie.tZ)(m.View, { className: s, children: a })] }, t);
                                        }),
                                }),
                              ],
                            }),
                          (null == h ? void 0 : h.cashBackPrice) > 0 &&
                            u < 6 &&
                            (0, Ie.BX)(m.View, {
                              className: "item",
                              children: [
                                (0, Ie.BX)(m.View, {
                                  className: "left",
                                  children: [
                                    (0, Ie.tZ)(m.Image, {
                                      className: "item-icon",
                                      src: N,
                                    }),
                                    (0, Ie.BX)(m.View, {
                                      className: "tit",
                                      children: [
                                        (null == h ? void 0 : h.cashBackName) ||
                                          "离店后可返",
                                        (0, Ie.BX)(m.Text, {
                                          className: "color-red",
                                          children: [
                                            "¥",
                                            null == h
                                              ? void 0
                                              : h.cashBackPrice,
                                          ],
                                        }),
                                        (0, Ie.tZ)(m.View, {
                                          className: "desc",
                                          children: "离店后返至“我的钱包”",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Ie.BX)(m.View, {
                                  className: "right",
                                  id: "AXGR",
                                  onClick: d,
                                  children: [
                                    (0, Ie.tZ)(m.Text, {
                                      className: "txt",
                                      children: "立即领取",
                                    }),
                                    (0, Ie.tZ)(Be.Z, { name: "arr" }),
                                  ],
                                }),
                              ],
                            }),
                          g > 0 &&
                            (0, Ie.BX)(m.View, {
                              className: "item",
                              children: [
                                (0, Ie.BX)(m.View, {
                                  className: "left",
                                  children: [
                                    (0, Ie.tZ)(m.Image, {
                                      className: "item-icon",
                                      src: b,
                                    }),
                                    (0, Ie.BX)(m.View, {
                                      className: "tit",
                                      children: [
                                        "订房优惠",
                                        (0, Ie.BX)(m.Text, {
                                          className: "color-red",
                                          children: ["¥", g],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Ie.BX)(m.View, {
                                  className: "right",
                                  id: "AXGS",
                                  onClick: function () {
                                    return s(R);
                                  },
                                  children: [
                                    (0, Ie.tZ)(m.Text, {
                                      className: "txt",
                                      children: "费用明细",
                                    }),
                                    (0, Ie.tZ)(Be.Z, { name: "arr" }),
                                  ],
                                }),
                              ],
                            }),
                          (null == f ||
                          null === (a = f.detail) ||
                          void 0 === a ||
                          null === (n = a.detail) ||
                          void 0 === n
                            ? void 0
                            : n.length) > 0 &&
                            (0, Ie.BX)(m.View, {
                              className: "item",
                              children: [
                                (0, Ie.BX)(m.View, {
                                  className: "left",
                                  id: "AXGT",
                                  onClick: function () {
                                    return s(O);
                                  },
                                  children: [
                                    (0, Ie.tZ)(m.Image, {
                                      className: "item-icon",
                                      src: V,
                                    }),
                                    (0, Ie.BX)(m.View, {
                                      className: "tit",
                                      children: [
                                        null == f ||
                                        null === (l = f.detail) ||
                                        void 0 === l
                                          ? void 0
                                          : l.title,
                                        (0, Ie.tZ)(m.Text, {
                                          className: "extra-txt",
                                          children: "(入住当天16:00前可申请)",
                                        }),
                                        (0, Ie.tZ)(Be.Z, { name: "detail" }),
                                      ],
                                    }),
                                  ],
                                }),
                                D()().hour() < 16 &&
                                  (0, Ie.BX)(m.View, {
                                    className: "right",
                                    id: "AXGU",
                                    onClick: o,
                                    children: [
                                      (0, Ie.tZ)(m.Text, {
                                        className: "txt",
                                        children: "发起申诉",
                                      }),
                                      (0, Ie.tZ)(Be.Z, { name: "arr" }),
                                    ],
                                  }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  })
                : (0, Ie.tZ)(m.View, {});
            }),
            Je = (0, v.$j)(
              function (e) {
                return {
                  scenicSpotCityId: e.page.scenicSpotCityId,
                  scenicSpotCityName: e.page.scenicSpotCityName,
                  orderDetailData: e.page.orderDetailData,
                };
              },
              function () {
                return {};
              }
            )(function (e) {
              var t = e.scenicSpotCityId,
                i = e.scenicSpotCityName,
                a = e.orderDetailData,
                n = a.disclaimerRemark,
                l = a.recommendBanners,
                c = (0, P.LP)(
                  f.default.isWechat &&
                    !f.default.isTieyou &&
                    (null == l ? void 0 : l.length)
                ),
                r = f.default.isBaidu ? F.bottomPost.swan : F.bottomPost.zxty,
                o = (0, u.useCallback)(
                  function () {
                    p().navigateTo({
                      url: "/pages/taroCRN/ticket/pages/index/index?source=hotel_detail&cityID="
                        .concat(t, "&cityName=")
                        .concat(i),
                    });
                  },
                  [t, i]
                ),
                s = (0, u.useCallback)(function () {
                  p().navigateTo({ url: "/pages/usercenter/member/member" });
                }, []),
                d = (0, u.useCallback)(function () {
                  p().navigateTo({
                    url: "/pages/activity/train/groupScanCode/index?source=market",
                  });
                }, []);
              return (0,
              Ie.BX)(Ie.HY, { children: [(0, Ie.BX)(m.View, { className: "ht-order-card welfare", style: c, children: [(0, Ie.tZ)(m.View, { className: "title", children: "酒店福利专区" }), (0, Ie.BX)(m.View, { className: "items-wrap", children: [(0, Ie.BX)(m.View, { className: "left", children: [(0, Ie.tZ)(m.Image, { className: "banner member", src: J, mode: "widthFix", id: "AXGe", onClick: s }), (0, Ie.tZ)(m.Image, { className: "banner fuli", src: te, mode: "widthFix", id: "AXGf", onClick: d })] }), (0, Ie.tZ)(m.View, { className: "right", children: (0, Ie.tZ)(m.Image, { className: "banner ticket", src: ee, mode: "widthFix", id: "AXGg", onClick: o }) })] })] }), n && (0, Ie.tZ)(m.View, { className: "pay-remark", children: n }), (0, Ie.tZ)(m.View, { className: "bottom-post-wrapper", children: (0, Ie.tZ)(m.Image, { className: "post", mode: "widthFix", src: r }) })] });
            }),
            et = i(45307),
            tt = i(25958),
            it = u.default.memo(function (e) {
              var t = e.show,
                i = void 0 !== t && t,
                a = e.modalInfo,
                n = e.onSuccess,
                l = e.onFail,
                c = a || {},
                r = c.title,
                o = c.subTitle,
                s = c.imgUrl,
                d = c.backImgUrl,
                u = c.contentList,
                h = c.buttonList,
                p = function () {
                  l && l();
                },
                g =
                  null == h
                    ? void 0
                    : h.find(function (e) {
                        return "jump" === e.action;
                      }),
                f = g
                  ? {
                      backgroundColor: g.buttonBackgroundColor,
                      color: g.buttonTextColor,
                    }
                  : {};
              return (0, Ie.tZ)(tt.Z, {
                show: i,
                hiddenCloseIcon: !0,
                onClose: p,
                ubtTrace: function () {},
                children: (0, Ie.BX)(m.View, {
                  className: "follow-up-modal",
                  children: [
                    (0, Ie.tZ)(m.Image, { className: "top-icon", src: s }),
                    (0, Ie.tZ)(m.Image, { className: "top-image", src: d }),
                    (0, Ie.BX)(m.View, {
                      className: "main",
                      children: [
                        (0, Ie.tZ)(m.View, { className: "title", children: r }),
                        (0, Ie.tZ)(m.View, {
                          className: "subtitle",
                          children: o,
                        }),
                        (0, Ie.tZ)(m.View, {
                          className: "content",
                          children:
                            u &&
                            u.map(function (e, t) {
                              return (0,
                              Ie.BX)(m.View, { className: "item", children: [(0, Ie.tZ)(m.Image, { className: "item-icon", src: e.itemUrl }), (0, Ie.tZ)(m.View, { className: "txt", children: e.itemContent })] }, t);
                            }),
                        }),
                        (0, Ie.BX)(m.View, {
                          className: "btn-wrapper",
                          children: [
                            (0, Ie.tZ)(m.Button, {
                              id: "AXGA",
                              onClick: p,
                              className: "btn",
                              children: "取消",
                            }),
                            g &&
                              (0, Ie.tZ)(m.Button, {
                                id: "AXGB",
                                onClick: function () {
                                  !(function (e) {
                                    "jump" === e.action &&
                                      e.jumpUrl &&
                                      Ze.Z.twebview({
                                        data: { url: e.jumpUrl },
                                      }),
                                      n && n();
                                  })(g);
                                },
                                className: "btn btn-primary",
                                style: f,
                                children: "确认",
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            at = (function (e) {
              (0, s.Z)(i, e);
              var t = (0, d.Z)(i);
              function i(e) {
                var a;
                return (
                  (0, c.Z)(this, i),
                  ((a = t.call(this, e)).state = {
                    isTieyou: f.default.isTieyou,
                    show: !1,
                    info: {},
                    isBaiduMap: I.A.isBaiduMap,
                  }),
                  a
                );
              }
              return (
                (0, r.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.initPage(this.props);
                    },
                  },
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      this.initPage(e);
                    },
                  },
                  {
                    key: "initPage",
                    value: function (e) {
                      this.setState({ show: e.visible, info: e.modalInfo });
                    },
                  },
                  {
                    key: "onClickBtn",
                    value: function (e) {
                      "jump" === e.action && e.jumpUrl
                        ? 0 === e.jumpUrl.indexOf("http")
                          ? Ze.Z.twebview({ data: { url: e.jumpUrl } })
                          : p().navigateTo({ url: e.jumpUrl })
                        : "cancelOrder" === e.action
                        ? this.props.onCancel()
                        : "login" === e.action
                        ? this.props.onConfirm()
                        : this.props.onClose();
                    },
                  },
                  {
                    key: "onClickClose",
                    value: function () {
                      this.props.onClose();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.state,
                        t = e.isTieyou,
                        i = e.show,
                        a = e.info,
                        n = e.isBaiduMap;
                      return (0, Ie.tZ)(m.View, {
                        className: "hotel-order-service-modal",
                        children:
                          i &&
                          (0, Ie.BX)(m.View, {
                            className: (t ? "ty" : "zx") + " service-modal",
                            children: [
                              (0, Ie.tZ)(m.View, {
                                className:
                                  "modal-mask " + (i ? "visible" : "hidden"),
                              }),
                              (0, Ie.BX)(m.View, {
                                className:
                                  "modal-view " + (i ? "visible" : "hidden"),
                                children: [
                                  (0, Ie.BX)(m.View, {
                                    className: "modal-content",
                                    children: [
                                      a.imgUrl &&
                                        (n
                                          ? (0, Ie.tZ)(m.CustomWrapper, {
                                              children: (0, Ie.tZ)(m.Image, {
                                                className: "image",
                                                src: a.imgUrl,
                                                mode: "widthFix",
                                              }),
                                            })
                                          : (0, Ie.tZ)(m.Image, {
                                              className: "image",
                                              src: a.imgUrl,
                                              mode: "widthFix",
                                            })),
                                      a.title &&
                                        (0, Ie.tZ)(m.View, {
                                          className:
                                            "title " +
                                            (a.imgUrl ? "title-bg" : ""),
                                          children: (0, Ie.tZ)(Te.ZtRichText, {
                                            nodes: (0, P.xC)(a.title),
                                          }),
                                        }),
                                      a.content &&
                                        (0, Ie.tZ)(m.View, {
                                          className:
                                            "desc " +
                                            ((a &&
                                              a.buttonList &&
                                              Array.isArray(a.buttonList) &&
                                              a.buttonList.length > 0 &&
                                              a.buttonList[0]) ||
                                            (a &&
                                              a.childPackageList &&
                                              Array.isArray(
                                                a.childPackageList
                                              ) &&
                                              a.childPackageList.length > 0 &&
                                              a.childPackageList[0])
                                              ? ""
                                              : "desc-bm"),
                                          children: (0, Ie.tZ)(Te.ZtRichText, {
                                            space: "nbsp",
                                            nodes: (0, P.xC)(a.content),
                                          }),
                                        }),
                                      a &&
                                        a.childPackageList &&
                                        Array.isArray(a.childPackageList) &&
                                        a.childPackageList.length > 0 &&
                                        a.childPackageList[0] &&
                                        (0, Ie.tZ)(m.View, {
                                          className: "coupon-view",
                                          children: a.childPackageList.map(
                                            function (e) {
                                              return (0, Ie.BX)(
                                                m.View,
                                                {
                                                  className: "item",
                                                  children: [
                                                    (0, Ie.tZ)(m.Image, {
                                                      className: "img",
                                                      src: e.imageUrl,
                                                    }),
                                                    (0, Ie.BX)(m.View, {
                                                      className: "coupon",
                                                      children: [
                                                        (0, Ie.BX)(m.View, {
                                                          className: "price",
                                                          children: [
                                                            (0, Ie.tZ)(m.Text, {
                                                              className: "txt",
                                                              children: "￥",
                                                            }),
                                                            (0, Ie.tZ)(m.Text, {
                                                              className:
                                                                "strong",
                                                              children:
                                                                e.couponPrice ||
                                                                0,
                                                            }),
                                                          ],
                                                        }),
                                                        (0, Ie.tZ)(m.View, {
                                                          className: "line",
                                                        }),
                                                        (0, Ie.BX)(m.View, {
                                                          className: "right",
                                                          children: [
                                                            (0, Ie.tZ)(m.View, {
                                                              className: "top",
                                                              children:
                                                                e.topTitle,
                                                            }),
                                                            (0, Ie.tZ)(m.View, {
                                                              className:
                                                                "bottom",
                                                              children: (0,
                                                              Ie.tZ)(m.Text, {
                                                                className:
                                                                  "txt",
                                                                children:
                                                                  e.bottomTitle,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                "index"
                                              );
                                            }
                                          ),
                                        }),
                                      a &&
                                        a.buttonList &&
                                        Array.isArray(a.buttonList) &&
                                        a.buttonList.length > 0 &&
                                        a.buttonList[0] &&
                                        (0, Ie.BX)(m.View, {
                                          className: "btn-content",
                                          children: [
                                            a.buttonList[0] &&
                                              a.buttonList[1] &&
                                              (0, Ie.BX)(u.default.Fragment, {
                                                children: [
                                                  (0, Ie.tZ)(m.View, {
                                                    className: "btn",
                                                    style: "background-color:"
                                                      .concat(
                                                        a.buttonList[0]
                                                          .buttonBackgroundColor,
                                                        ";color:"
                                                      )
                                                      .concat(
                                                        a.buttonList[0]
                                                          .buttonTextColor,
                                                        ";"
                                                      ),
                                                    id: "AXGZ",
                                                    onClick:
                                                      this.onClickBtn.bind(
                                                        this,
                                                        a.buttonList[0]
                                                      ),
                                                    children:
                                                      a.buttonList[0]
                                                        .buttonText,
                                                  }),
                                                  (0, Ie.tZ)(m.View, {
                                                    className: "btn",
                                                    style: "background-color:"
                                                      .concat(
                                                        a.buttonList[1]
                                                          .buttonBackgroundColor,
                                                        ";color:"
                                                      )
                                                      .concat(
                                                        a.buttonList[1]
                                                          .buttonTextColor,
                                                        ";"
                                                      ),
                                                    id: "AXGa",
                                                    onClick:
                                                      this.onClickBtn.bind(
                                                        this,
                                                        a.buttonList[1]
                                                      ),
                                                    children:
                                                      a.buttonList[1]
                                                        .buttonText,
                                                  }),
                                                ],
                                              }),
                                            a.buttonList[0] &&
                                              !a.buttonList[1] &&
                                              (0, Ie.tZ)(u.default.Fragment, {
                                                children: (0, Ie.tZ)(m.View, {
                                                  className: "big-btn",
                                                  style: "background-color:"
                                                    .concat(
                                                      a.buttonList[0]
                                                        .buttonBackgroundColor,
                                                      ";color:"
                                                    )
                                                    .concat(
                                                      a.buttonList[0]
                                                        .buttonTextColor,
                                                      ";"
                                                    ),
                                                  id: "AXGb",
                                                  onClick: this.onClickBtn.bind(
                                                    this,
                                                    a.buttonList[0]
                                                  ),
                                                  children:
                                                    a.buttonList[0].buttonText,
                                                }),
                                              }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, Ie.tZ)(m.View, {
                                    className: "close",
                                    children: (0, Ie.tZ)(m.Text, {
                                      className: "ifont-closed iconfont",
                                      id: "AXGc",
                                      onClick: this.onClickClose.bind(this),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      });
                    },
                  },
                ]),
                i
              );
            })(u.default.Component),
            nt = [ne, ae, le, ce],
            lt = (0, v.$j)(
              function (e) {
                return {
                  pageId: e.page.pageId,
                  modals: e.page.modals,
                  customModalVisible: e.modal.customModalVisible,
                  orderFromPagesMapping: e.page.orderFromPagesMapping,
                  serviceModalInfo: e.page.serviceModalInfo,
                  serviceModalVisible: e.page.serviceModalVisible,
                  fromPage: e.page.fromPage,
                };
              },
              function (e) {
                return {
                  onFollowUpModalConfirm: e.modal.onFollowUpModalConfirm,
                  onClickActivityBanner: e.page.onClickActivityBanner,
                  onCloseCustomModal: e.modal.onCloseCustomModal,
                  onCancelConfirm: e.order.onCancelConfirm,
                  onClickServiceModalClose: e.page.onClickServiceModalClose,
                };
              }
            )(function (e) {
              var t = e.pageId,
                i = e.modals,
                a = e.fromPage,
                n = e.customModalVisible,
                l = e.orderFromPagesMapping,
                c = e.serviceModalInfo,
                r = e.serviceModalVisible,
                o = e.onFollowUpModalConfirm,
                s = e.onCancelConfirm,
                d = e.onClickServiceModalClose,
                h = e.onClickActivityBanner,
                p = e.onCloseCustomModal,
                g = l[a] && r ? [] : i,
                w = (0, P.Jk)(g, nt),
                v = w.type,
                N = w.modalInfo,
                Z = void 0 === N ? {} : N,
                b = "btn-primary ".concat(
                  f.default.isBaidu ? "bd" : f.default.zxTyStr
                ),
                V = (0, u.useCallback)(
                  function (e) {
                    return e === v && n;
                  },
                  [v, n]
                ),
                y = (0, u.useCallback)(
                  function () {
                    p(w);
                  },
                  [w, p]
                ),
                I = (0, u.useCallback)(
                  function (e) {
                    var t = e.buttonList || [],
                      i = (0, x.Z)(t, 1)[0];
                    (null == i ? void 0 : i.jumpUrl) && (0, T.YI)(i.jumpUrl),
                      p(w);
                  },
                  [w, p]
                ),
                C = (0, u.useCallback)(
                  function () {
                    var e;
                    null === (e = (0, B.getCurrentPage)()) ||
                      void 0 === e ||
                      e.ubtTrace(241484, { PageId: t }),
                      h(Z);
                  },
                  [h, Z, t]
                );
              return (
                (0, u.useEffect)(
                  function () {
                    var e, i, a, n, l, c;
                    11 == Z.popId &&
                      (null === (e = (0, B.getCurrentPage)()) ||
                        void 0 === e ||
                        null === (i = e.ubtTrace) ||
                        void 0 === i ||
                        i.call(e, 221467, { PageId: t })),
                      12 === Z.popId &&
                        (null === (a = (0, B.getCurrentPage)()) ||
                          void 0 === a ||
                          null === (n = a.ubtTrace) ||
                          void 0 === n ||
                          n.call(a, 221469, { PageId: t })),
                      V(ne) &&
                        (null === (l = (0, B.getCurrentPage)()) ||
                          void 0 === l ||
                          null === (c = l.ubtTrace) ||
                          void 0 === c ||
                          c.call(l, 241485, { PageId: t }));
                  },
                  [Z, t, V]
                ),
                (0, Ie.BX)(m.View, {
                  children: [
                    (0, Ie.tZ)(at, {
                      visible: r,
                      modalInfo: c,
                      onCancel: s,
                      onClose: d,
                      onConfirm: d,
                    }),
                    (0, Ie.tZ)(et.Z, {
                      show: V(le),
                      info: Z,
                      onSuccess: y,
                      onFail: y,
                      onCancel: y,
                      onProcess: y,
                    }),
                    (0, Ie.tZ)(it, {
                      show: V(ae),
                      modalInfo: Z,
                      onSuccess: o,
                      onFail: y,
                    }),
                    (0, Ie.tZ)(Te.ZtActivityPop, {
                      className: "zt-order-modal transparent",
                      show: V(ce),
                      onClose: y,
                      onWrapClose: y,
                      children: (0, Ie.tZ)(m.Image, {
                        src: Z.imgUrl,
                        className: "full-img",
                        id: "AXGK",
                        onClick: I,
                      }),
                    }),
                    (0, Ie.BX)(Te.ZtActivityPop, {
                      className: "zt-order-modal cashback",
                      show: V(ne),
                      onClose: y,
                      onWrapClose: y,
                      children: [
                        (0, Ie.tZ)(m.Image, {
                          src: Z.backgroundImgUrl,
                          className: "title-img",
                        }),
                        (0, Ie.BX)(m.View, {
                          className: "info-wrapper",
                          children: [
                            (0, Ie.tZ)(m.View, {
                              className: "title",
                              children: "超值返现",
                            }),
                            (0, Ie.tZ)(m.View, {
                              className: "desc",
                              children:
                                Z.couponInfo &&
                                (0, Ie.BX)(m.View, {
                                  children: [
                                    Z.couponInfo.couponDesc,
                                    "，可领",
                                    Z.couponInfo.couponPrice,
                                    "元现金",
                                  ],
                                }),
                            }),
                            Z.couponInfo &&
                              (0, Ie.tZ)(m.View, {
                                className: "coupon-wrapper",
                                children: (0, Ie.BX)(m.View, {
                                  className: "coupon-bg",
                                  children: [
                                    (0, Ie.tZ)(m.View, {
                                      className: "left",
                                      children: Z.couponInfo.couponPrice,
                                    }),
                                    (0, Ie.BX)(m.View, {
                                      className: "right",
                                      children: [
                                        (0, Ie.tZ)(m.View, {
                                          className: "title",
                                          children: Z.couponInfo.couponTitle,
                                        }),
                                        (0, Ie.tZ)(m.View, {
                                          className: "desc",
                                          children: Z.couponInfo.couponDesc,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            (0, Ie.tZ)(m.View, {
                              className: "btn-wrapper one",
                              children: (0, Ie.tZ)(m.Button, {
                                id: "AXGL",
                                onClick: C,
                                className: "".concat(b),
                                children: "领取现金",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              );
            }),
            ct =
              "https://images3.c-ctrip.com/ztrip/train.xin/2023_06/add@3x.webp",
            rt =
              "https://images3.c-ctrip.com/ztrip/train.xin/2023_06/red@3x.webp",
            ot = (0, v.$j)(
              function (e) {
                return { orderDetailData: e.page.orderDetailData };
              },
              function (e) {
                return { onClickActivityBanner: e.page.onClickActivityBanner };
              }
            )(function (e) {
              var t,
                i = e.orderDetailData.inviteFriendBanners,
                a = e.onClickActivityBanner,
                n = i || [],
                l = (0, x.Z)(n, 1)[0];
              if (!l || !f.default.isWechat) return (0, Ie.tZ)(m.View, {});
              var c = [0, 1, 2, 3, 4].map(function (e) {
                var t, i;
                return (
                  (null == l ||
                  null === (t = l.userInfos) ||
                  void 0 === t ||
                  null === (i = t[e]) ||
                  void 0 === i
                    ? void 0
                    : i.icon) || ct
                );
              });
              return (0, Ie.BX)(m.View, {
                className: "ht-order-card cashback",
                children: [
                  (0, Ie.BX)(m.View, {
                    className: "cont",
                    children: [
                      (0, Ie.BX)(m.View, {
                        className: "tit-wrap",
                        children: [
                          (0, Ie.tZ)(m.Image, {
                            className: "icon",
                            src: rt,
                            mode: "widthFix",
                          }),
                          "您有",
                          (0, Ie.BX)(m.Text, {
                            className: "color-red",
                            children: [
                              null === (t = l.couponInfo) || void 0 === t
                                ? void 0
                                : t.couponPrice,
                              "元",
                            ],
                          }),
                          "返现待领取",
                        ],
                      }),
                      (0, Ie.BX)(m.View, {
                        className: "desc-wrap",
                        children: [
                          !l.needStart &&
                            (0, Ie.tZ)(m.View, {
                              className: "user-info",
                              children: c.map(function (e, t) {
                                return (0,
                                Ie.tZ)(m.Image, { className: "icon", src: e }, t);
                              }),
                            }),
                          l.actDesc &&
                            (0, Ie.tZ)(Te.ZtRichLinkText, {
                              className: "desc",
                              nodes: l.actDesc,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, Ie.tZ)(m.View, {
                    className: "btn",
                    id: "AXGX",
                    onClick: function () {
                      return a(l);
                    },
                    children: l.buttonText,
                  }),
                ],
              });
            }),
            st = function (e, t, i) {
              return i.showNewSwanCashbackStyle
                ? t
                  ? (0, Ie.BX)(m.View, {
                      className: "icon-wrap",
                      children: [
                        "请至",
                        (0, Ie.tZ)(m.Image, {
                          className: "zx-swan-icon",
                          src: F.zxSwanIcon,
                        }),
                        (0, Ie.tZ)(m.Text, {
                          className: "primary",
                          children: "智行旅行App",
                        }),
                        "酒店订单进行提现",
                      ],
                    })
                  : (0, Ie.BX)(m.View, {
                      children: [
                        "登录智行账号，领取本单$",
                        null == e ? void 0 : e.cashBackPrice,
                        "元返现",
                      ],
                    })
                : t
                ? "请至智行火车票APP-酒店订单进行提现"
                : "登录智行账号，领取本单".concat(
                    null == e ? void 0 : e.cashBackPrice,
                    "元返现"
                  );
            },
            dt = (0, v.$j)(
              function (e) {
                return {
                  orderPageConfigs: e.page.orderPageConfigs,
                  orderDetailData: e.page.orderDetailData,
                  isUserLogin: e.page.isUserLogin,
                };
              },
              function (e) {
                return { onCheckLogin: e.page.onCheckLogin };
              }
            )(function (e) {
              var t = e.isUserLogin,
                i = e.orderPageConfigs,
                a = e.orderDetailData,
                n = a.orderNumber,
                l = a.cashBackInfo,
                c = e.onCheckLogin,
                r = "cashback-wrapper".concat((0, P.gP)(t, " whole")),
                o = t ? "领取" : "登录账号",
                s = (null == i ? void 0 : i.showNewSwanCashbackStyle) || !t,
                d = (0, u.useCallback)(
                  function () {
                    if (!t) return c();
                    (0, re._2)({
                      data: { orderId: n, templateId: "M-8325" },
                    }).then(function () {
                      (0,
                      B.showToast)("下载链接已发送至您预定的手机号，请注意查收");
                    });
                  },
                  [t, n, c]
                );
              return null != l && l.cashBackPrice && f.default.isBaidu
                ? (0, Ie.BX)(m.View, {
                    className: "ht-order-card order-cashback",
                    children: [
                      (0, Ie.BX)(m.View, {
                        className: r,
                        children: [
                          (0, Ie.tZ)(m.View, {
                            className: "title",
                            children: (0, Ie.BX)(m.View, {
                              className: "text",
                              children: [
                                "您有一笔",
                                (0, Ie.BX)(m.Text, {
                                  className: "price",
                                  children: [
                                    null == l ? void 0 : l.cashBackPrice,
                                    "元",
                                  ],
                                }),
                                "返现待领取",
                              ],
                            }),
                          }),
                          (0, Ie.tZ)(m.View, {
                            className: "desc",
                            children: st(l, t, i),
                          }),
                        ],
                      }),
                      (0, Ie.tZ)(m.View, {
                        className: "btn-wrapper",
                        id: "AXGd",
                        onClick: d,
                        style: (0, P.LP)(s, "flex"),
                        children: o,
                      }),
                    ],
                  })
                : (0, Ie.tZ)(m.View, {});
            }),
            ut = (0, v.$j)(
              function (e) {
                return {
                  loading: e.page.loading,
                  orderDetailData: e.page.orderDetailData,
                };
              },
              function (e) {
                return {
                  onApplyForInvoice: e.order.onApplyForInvoice,
                  gotoHotelDetail: e.page.gotoHotelDetail,
                  onCancelOrder: e.order.onCancelOrder,
                  onRemindOrder: e.order.onRemindOrder,
                  onOrderPay: e.order.onOrderPay,
                };
              }
            )(function (e) {
              var t = e.loading,
                i = e.orderDetailData,
                a = i.consultCancelInfo,
                n = i.bookAgainFlag,
                l = i.isInvoicePushSms,
                c = i.invoiceTargetType,
                r = i.orderPrice,
                o = i.orderState,
                s = i.orderStateDesc,
                d = i.invoiceInfo,
                u = i.payFlag,
                h = i.payType,
                p = i.relationOrderInfo,
                g = i.remindOrderFlag,
                f = e.onApplyForInvoice,
                w = e.gotoHotelDetail,
                v = e.onCancelOrder,
                N = e.onRemindOrder,
                Z = e.onOrderPay,
                b = 1 === (null == p ? void 0 : p.relationType),
                V = o < 5 && !b,
                y = 3 == h ? "支付担保金" : "立即支付",
                x = u && 1 === o,
                I = null != d && d.title ? "发票" : "开发票",
                C = 1 === c && !l && ["预订成功", "已成交"].includes(s),
                B = (1 !== c || l || C) && !g && o < 6;
              return 1 === (null == a ? void 0 : a.state)
                ? (0, Ie.tZ)(m.View, {})
                : t
                ? (0, Ie.tZ)(m.View, {
                    className: "order-bottom-btns",
                    children: (0, Ie.tZ)(m.View, {
                      className: "btn btn-primary",
                    }),
                  })
                : x
                ? (0, Ie.BX)(m.View, {
                    className: "order-bottom-btns",
                    children: [
                      (0, Ie.tZ)(m.View, {
                        className: "btn grey",
                        id: "AXFl",
                        onClick: v,
                        children: "取消订单",
                      }),
                      (0, Ie.BX)(m.View, {
                        className: "btn btn-red",
                        id: "AXFm",
                        onClick: Z,
                        children: [y, " ¥", r],
                      }),
                    ],
                  })
                : (0, Ie.BX)(m.View, {
                    className: "order-bottom-btns",
                    children: [
                      V &&
                        (0, Ie.tZ)(m.View, {
                          className: "btn btn-primary",
                          id: "AXFn",
                          onClick: v,
                          children: "取消订单",
                        }),
                      g &&
                        (0, Ie.tZ)(m.View, {
                          className: "btn btn-primary",
                          id: "AXFo",
                          onClick: N,
                          children: "催确认",
                        }),
                      n &&
                        (0, Ie.tZ)(m.View, {
                          className: "btn btn-primary",
                          id: "AXFp",
                          onClick: w,
                          children: "再次预订",
                        }),
                      B &&
                        (0, Ie.tZ)(m.View, {
                          className: "btn btn-primary",
                          id: "AXFq",
                          onClick: f,
                          children: I,
                        }),
                    ],
                  });
            }),
            mt = (0, v.$j)(
              function (e) {
                return { orderDetailData: e.page.orderDetailData };
              },
              function (e) {
                return { onClickActivityBanner: e.page.onClickActivityBanner };
              }
            )(function (e) {
              var t,
                i = e.orderDetailData,
                a = i.orderState,
                n = i.inviteFriendBanners,
                l = e.onClickActivityBanner,
                c = n || [],
                r = (0, x.Z)(c, 1)[0];
              return (0, Ie.tZ)(Ie.HY, {
                children:
                  a < 6 &&
                  (null == r || null === (t = r.couponInfo) || void 0 === t
                    ? void 0
                    : t.couponPrice) &&
                  f.default.isWechat &&
                  (0, Ie.BX)(m.View, {
                    className: "cashback-float",
                    id: "AXFz",
                    onClick: function () {
                      return l(r);
                    },
                    children: [
                      (0, Ie.tZ)(m.Text, {
                        className: "price",
                        children: r.couponInfo.couponPrice,
                      }),
                      (0, Ie.tZ)(m.Image, {
                        className: "float-icon",
                        src: F.casjFloatIcon,
                      }),
                    ],
                  }),
              });
            }),
            ht = {
              checkIcon:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/2023-3/xiaochengxu/ic_duihao@3x.png",
              questions: [
                { label: "A", name: "海量房源" },
                { label: "B", name: "安心入住" },
                { label: "C", name: "买贵就赔" },
                { label: "D", name: "价格监控" },
                { label: "E", name: "小孩才做选择，大人全都要！" },
              ],
            },
            pt = (0, v.$j)(
              function (e) {
                return { orderDetailData: e.page.orderDetailData };
              },
              function () {
                return {};
              }
            )(function (e) {
              var t = e.orderDetailData,
                i = (0, u.useState)([ht.questions[4]]),
                a = (0, x.Z)(i, 2),
                n = a[0],
                l = a[1],
                c = t.smzFlag,
                r = void 0 !== c && c,
                o = (0, u.useCallback)(
                  function (e) {
                    var t = n.find(function (t) {
                        return t.label === e.label;
                      }),
                      i = (0, V.Z)(n);
                    t
                      ? (i = i.filter(function (t) {
                          return t.label !== e.label;
                        }))
                      : i.push(e),
                      l(i);
                  },
                  [n]
                );
              return r
                ? (0, Ie.BX)(m.View, {
                    className: "ht-order-card questions",
                    children: [
                      (0, Ie.tZ)(m.View, {
                        className: "title",
                        children: "灵魂拷问：用智行订酒店有什么好处？",
                      }),
                      ht.questions.map(function (e, t) {
                        var i = Boolean(
                            n.find(function (t) {
                              return t.label === e.label;
                            })
                          ),
                          a = "item".concat((0, P.gP)(i, " selected"));
                        return (0, Ie.BX)(
                          m.View,
                          {
                            className: a,
                            id: "AXGY",
                            onClick: function () {
                              return o(e);
                            },
                            children: [
                              (0, Ie.tZ)(m.View, {
                                className: "label",
                                children: i
                                  ? (0, Ie.tZ)(m.Image, {
                                      className: "check-icon",
                                      src: ht.checkIcon,
                                      mode: "widthFix",
                                    })
                                  : (0, Ie.tZ)(m.Text, { children: e.label }),
                              }),
                              (0, Ie.tZ)(m.View, {
                                className: "name",
                                children: e.name,
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    ],
                  })
                : (0, Ie.tZ)(m.View, {});
            }),
            gt = i(25949),
            ft = i.n(gt),
            wt = {
              title: {
                1: "酒店住的怎么样？打个分吧",
                2: "酒店点评成功",
                3: "酒店住的怎么样？打个分吧",
              },
              btnText: { 1: "立即评价", 2: "我的评价", 3: "立即评价" },
            },
            vt = (0, v.$j)(
              function (e) {
                return {
                  pageId: e.page.pageId,
                  orderId: e.page.orderId,
                  orderDetailData: e.page.orderDetailData,
                };
              },
              function () {
                return {};
              }
            )(function (e) {
              var t = e.orderId,
                i = e.pageId,
                a = e.orderDetailData,
                n = a.commentText,
                l = a.commentState,
                c = a.hotelId,
                r = a.hotelName,
                o = a.cityId,
                s = a.queryBitMap,
                d = a.geoList,
                h = wt.title[l],
                g = wt.btnText[l];
              (0, u.useEffect)(
                function () {
                  var e;
                  l &&
                    n &&
                    (null === (e = (0, B.getCurrentPage)()) ||
                      void 0 === e ||
                      e.ubtTrace(246476, {
                        PageId: i,
                        OrderNumber: t,
                        Type: g,
                      }));
                },
                [l, n]
              );
              var f = (0, u.useCallback)(
                function () {
                  var e;
                  if (
                    (null === (e = (0, B.getCurrentPage)()) ||
                      void 0 === e ||
                      e.ubtTrace(246475, {
                        PageId: i,
                        OrderNumber: t,
                        Type: g,
                      }),
                    3 === l)
                  )
                    return (0, B.showToast)(n);
                  var a = {
                      orderId: t,
                      hotelId: c,
                      hotelName: r,
                      cityId: o,
                      queryBitMap: s,
                      geoList: d,
                    },
                    u = 2 === l ? "myComments" : "comment";
                  p().navigateTo({
                    url: "/pages/hotel/comment/"
                      .concat(u, "?data=")
                      .concat(encodeURIComponent(JSON.stringify(a))),
                  });
                },
                [t, c, r, o, s, d, l]
              );
              return l && n
                ? (0, Ie.BX)(m.View, {
                    className: "ht-order-card comment",
                    children: [
                      (0, Ie.BX)(m.View, {
                        className: "tit-wrap",
                        children: [
                          (0, Ie.tZ)(m.View, { className: "tit", children: h }),
                          (0, Ie.tZ)(m.View, {
                            className: "desc",
                            children:
                              3 === l && n
                                ? n
                                : "您的评价对其他用户是非常重要的参考",
                          }),
                        ],
                      }),
                      (0, Ie.tZ)(m.View, {
                        className: ft()(3 === l ? "b-btn" : "btn"),
                        id: "AXFy",
                        onClick: f,
                        children: g,
                      }),
                    ],
                  })
                : (0, Ie.tZ)(m.View, {});
            }),
            Nt =
              (0, g.h)(!1, { usePageWrapper: !0 })(
                (ge = (function (e) {
                  (0, s.Z)(i, e);
                  var t = (0, d.Z)(i);
                  function i(e) {
                    var a, n, l, r;
                    return (
                      (0, c.Z)(this, i),
                      ((r = t.call(this, e)).store = (0, w.S1)({ models: xe })),
                      null === (a = r.store) ||
                        void 0 === a ||
                        null === (n = a.dispatch) ||
                        void 0 === n ||
                        null === (l = n.page) ||
                        void 0 === l ||
                        l.set((0, o.Z)(r)),
                      r
                    );
                  }
                  return (
                    (0, r.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e, t, i;
                          null === (e = this.store) ||
                            void 0 === e ||
                            null === (t = e.dispatch) ||
                            void 0 === t ||
                            null === (i = t.page) ||
                            void 0 === i ||
                            i.set(this);
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, n.Z)().mark(function e() {
                              return (0, n.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          this.ubtDevTrace(234562, {
                                            name: "order2",
                                          }),
                                          N.ZP.isLogin)
                                        ) {
                                          e.next = 5;
                                          break;
                                        }
                                        return (e.next = 5), N.ZP.doLogin();
                                      case 5:
                                        this.store.dispatch.page.getHotelConfigData(),
                                          this.store.dispatch.page.getOrderDetails(),
                                          (e.next = 12);
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(0)),
                                          console.error(
                                            "order v2 didShow",
                                            e.t0
                                          );
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 9]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onPageScroll",
                        value: function (e) {
                          var t = this.store.getState().page.pageTitleVisible;
                          e.scrollTop > 50 && !t
                            ? this.store.dispatch.page.setState({
                                pageTitleVisible: !0,
                              })
                            : e.scrollTop <= 50 &&
                              t &&
                              this.store.dispatch.page.setState({
                                pageTitleVisible: !1,
                              });
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          var e = (0, h.getCurrentPages)();
                          if (
                            (null == e ? void 0 : e.length) > 1 &&
                            "pages/hotel/booking/booking" ===
                              e[e.length - 2].route
                          )
                            return p().reLaunch({
                              url: "/pages/myctrip/list/list?orderType=hotel",
                            });
                          p().navigateBack();
                        },
                      },
                      {
                        key: "onPullDownRefresh",
                        value: function () {
                          this.store.dispatch.page.getOrderDetails();
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          return (0, Ie.tZ)(v.zt, {
                            store: this.store,
                            children: (0, Ie.tZ)(Ce, {}),
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = "hotel-order-page"
                              .concat(
                                (0, P.gP)(f.default.isBaidu, " swan"),
                                " "
                              )
                              .concat(f.default.zxTyStr);
                          return (0, Ie.tZ)(v.zt, {
                            store: this.store,
                            children: (0, Ie.BX)(m.View, {
                              className: t,
                              children: [
                                (0, Ie.tZ)(Pe, {}),
                                (0, Ie.tZ)(je, {}),
                                (0, Ie.tZ)(vt, {}),
                                (0, Ie.tZ)(pt, {}),
                                (0, Ie.tZ)(He, {}),
                                (0, Ie.tZ)(ot, {}),
                                (0, Ie.tZ)(dt, {}),
                                (0, Ie.tZ)(qe, {}),
                                (0, Ie.tZ)(Ge, {}),
                                (0, Ie.tZ)(Ye, {}),
                                (0, Ie.tZ)(Qe, {}),
                                (0, Ie.tZ)(Je, {}),
                                (0, Ie.tZ)(ut, {}),
                                (0, Ie.tZ)(Oe, {}),
                                (0, Ie.tZ)(lt, {}),
                                (0, Ie.tZ)(mt, {}),
                                (0, Ie.tZ)(b.Z, {}),
                                (0, Ie.tZ)(Z.Z, {
                                  ref: function (t) {
                                    e.onDialogAttach(t);
                                  },
                                }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(u.Component))
              ) || ge;
          Page(
            (0, a.createPageConfig)(
              Nt,
              "pages/hotel/order/order",
              { root: { cn: [] } },
              {
                navigationStyle: "custom",
                enablePullDownRefresh: !0,
                navigationBarTitleText: "",
                navigationBarFrontColor: "#ffffff",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 3322, 36332, 95854, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(79393);
        }),
          e.O();
      },
    ]);
})();
