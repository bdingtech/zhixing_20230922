!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [60036],
      {
        71973: function (e, o, n) {
          var t,
            a = n(32180),
            c = n(57042),
            i = n(24460),
            s = n(21867),
            u = n(86066),
            r = n(298),
            l = n(52500),
            p = n(71515),
            d = (n(92954), n(81957)),
            h = n(48792),
            C = n.n(h),
            v = n(49120),
            m = n(2326),
            g = n(79792),
            f = n(86977),
            Z = n(55916),
            w = n(58676),
            y = n(20592),
            N = n(48813),
            T = g.default.isTieyou,
            b = 0,
            k = 1,
            D = {
              pageId: "10650060693",
              data: {
                isTieyou: T,
                totalPrice: 0,
                couponList: [],
                selectedCoupon: {},
                couponType: 200,
                unReceiveCouponParmas: null,
                mbrSelected: !1,
                hasPackage: !1,
                hasInsurance: !1,
                unReceiveCouponData: {},
                selectedPassengers: [],
                unSupportCouponInfo: null,
              },
              onLoad: function (e) {
                var o = e.couponType,
                  n = e.couponCode,
                  t = e.data,
                  a = void 0 === t ? {} : t,
                  c = a.correctVersion,
                  i = a.totalPrice,
                  s = a.couponParams,
                  u = a.mbrSelected,
                  r = a.hasPackage,
                  l = a.unSupportCouponInfo,
                  p = a.hasInsurance,
                  d = a.selectedPassengers;
                this.setData({
                  totalPrice: i,
                  couponType: o ? parseInt(o) : 200,
                  selectedCouponCode: n || "",
                  correctVersion: c ? "" + c : "0",
                  unReceiveCouponParmas: s,
                  mbrSelected: u,
                  hasPackage: r,
                  hasInsurance: p,
                  unSupportCouponInfo: l,
                  selectedPassengers: d,
                }),
                  this.getCouponList(),
                  s && this.getUnReceiveCoupon();
              },
              getUnReceiveCoupon: function () {
                var e = this,
                  o = this.data.unReceiveCouponParmas,
                  n = (0, r.Z)({ version: 3, source: "productdetail" }, o);
                (0, Z.VE)({ data: n }).then(function (o) {
                  var n = o.resultCode,
                    t = o.data || {},
                    a = t.couponDesc,
                    c = t.couponToken,
                    i = t.couponAmount,
                    s = t.couponName;
                  1 == n && c
                    ? e.setData({
                        unReceiveCouponData: {
                          couponDesc: a,
                          couponToken: c,
                          couponAmount: i,
                          couponName: s,
                        },
                      })
                    : e.setData({ unReceiveCouponData: {} });
                });
              },
              getCouponList: function () {
                var e = this;
                if ((0, f.TA)()) {
                  var o = this.data,
                    n = o.couponType,
                    t = o.correctVersion,
                    a = o.totalPrice,
                    c = o.mbrSelected,
                    i = o.unSupportCouponInfo,
                    s = o.hasPackage,
                    u = o.hasInsurance,
                    l = o.selectedPassengers;
                  (0, v.showLoading)();
                  var p = {
                      type: 200 == n ? 1 : 2,
                      eventBody: 200 == n ? void 0 : y.wq.eventBody,
                    },
                    d = { extension: [{ name: "correctVersion", value: t }] };
                  (0, Z.fl)(p, d)
                    .then(function (o) {
                      var n = o.resultCode,
                        t = o.couponList || [];
                      if (1 === n && t.length > 0) {
                        var p = c ? "不可与会员首单立减共享~" : "";
                        (t = (t = m.Z.filterCoupon(t)).map(function (e) {
                          var o = m.Z.isDeductionStrategyCoupon(e);
                          return m.Z.checkCouponRuleLimit({
                            coupon: e,
                            totalPrice: a,
                            hasPackage: s,
                            hasInsurance: u,
                            isMemberShip: c,
                            selectedPassengers: l,
                            unSupportCouponInfo: i,
                          })
                            ? (0, r.Z)((0, r.Z)({}, e), {}, { type: k })
                            : (0, r.Z)(
                                (0, r.Z)({}, e),
                                {},
                                {
                                  type: b,
                                  reason:
                                    (null == i ? void 0 : i.warningMsg) ||
                                    p ||
                                    (o
                                      ? "该券不满足满减使用规则~"
                                      : null == e
                                      ? void 0
                                      : e.showDescribe),
                                }
                              );
                        })),
                          e.setData({
                            couponList: t.map(function (e) {
                              return 3 !== e.deductionStrategyTypeID
                                ? e
                                : (0, r.Z)(
                                    (0, r.Z)({}, e),
                                    {},
                                    {
                                      deductionStrategy:
                                        e.deductionStrategy.sort(function (
                                          e,
                                          o
                                        ) {
                                          return e.startAmount < o.startAmount;
                                        }),
                                    }
                                  );
                            }),
                          });
                      }
                    })
                    .catch(function () {
                      e.showCommonDialog("查询失败，请稍后重试");
                    })
                    .finally(function () {
                      (0, v.hideLoading)();
                    });
                }
              },
              chooseCoupon: function (e) {
                var o = e.currentTarget.dataset.index,
                  n = this.data.couponList[o];
                return n.type === b
                  ? (0, v.showToast)(n.reason)
                  : 1 == n.authState
                  ? (0, v.showToast)("该功能小程序暂不支持")
                  : (this.invokeCallback({ selectedCoupon: n }),
                    void this.navigateBack());
              },
              chooseNoCoupon: function () {
                this.invokeCallback(), this.navigateBack();
              },
              toCouponDetail: function (e) {
                var o = e.currentTarget.dataset.index,
                  n = this.data.couponList[o].couponDetail;
                this.navigateTo({
                  url: "/pages/flightSecondary/productdetail/productdetail?type=richText",
                  data: {
                    title: "优惠券详情",
                    richTextContent: n
                      .replace(/\\n/g, "<br />")
                      .replace(/\n/g, "<br />"),
                  },
                });
              },
              handleReceive: function () {
                var e = this,
                  o = this.data.unReceiveCouponData;
                (0, Z.jU)({ data: { couponToken: o.couponToken } })
                  .then(function (o) {
                    var n = o || {},
                      t = n.resultCode,
                      a = n.resultMessage;
                    1 == t
                      ? (e.getCouponList(),
                        e.getUnReceiveCoupon(),
                        e.invokeCallback({ updateCoupon: !0 }))
                      : (0, v.showToast)(a || "网络出了小差，请稍后再试~");
                  })
                  .catch(function () {
                    (0, v.showToast)("网络出了小差，请稍后再试~");
                  });
              },
            },
            V =
              (0, d.h)()(
                (t =
                  C()(D)(
                    (t = (function (e) {
                      (0, s.Z)(n, e);
                      var o = (0, u.Z)(n);
                      function n() {
                        return (0, c.Z)(this, n), o.apply(this, arguments);
                      }
                      return (
                        (0, i.Z)(n, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                o = this.data,
                                n = o.selectedCouponCode,
                                t = o.isTieyou,
                                a = o.couponList,
                                c = o.unReceiveCouponData;
                              return (0, N.BX)(p.View, {
                                className: "flight-coupon-container",
                                children: [
                                  (0, N.tZ)(p.View, {
                                    className: "coupon-btn",
                                    children: (0, N.tZ)(p.Button, {
                                      className: "btn-unused",
                                      hoverClass: "btn-unused_hover",
                                      id: "AZAG",
                                      onClick: this.chooseNoCoupon,
                                      children: "不使用优惠券",
                                    }),
                                  }),
                                  a.map(function (o, a) {
                                    var c;
                                    return (
                                      (c =
                                        n === o.couponCode
                                          ? "已使用"
                                          : 3 === o.couponState || o.type === b
                                          ? "不可使用"
                                          : 1 == o.authState
                                          ? "去认证"
                                          : "立即使用"),
                                      (0, N.tZ)(
                                        p.View,
                                        {
                                          className:
                                            "coupon-box " +
                                            (3 === o.couponState || o.type === b
                                              ? "disabled"
                                              : "") +
                                            " " +
                                            (n === o.couponCode
                                              ? "active"
                                              : "") +
                                            " " +
                                            (t ? "ty" : "zx"),
                                          children: (0, N.BX)(p.View, {
                                            className: "item ".concat(
                                              t ? "ty" : "zx"
                                            ),
                                            children: [
                                              (0, N.BX)(p.View, {
                                                className: "coupon-price",
                                                children: [
                                                  (0, N.tZ)(p.Text, {
                                                    className: "strong",
                                                    children:
                                                      2 ===
                                                      o.deductionStrategyTypeID
                                                        ? o.couponDiscount
                                                        : o.couponPrice,
                                                  }),
                                                  (0, N.tZ)(p.Text, {
                                                    className: "yuan",
                                                    children:
                                                      2 ===
                                                      o.deductionStrategyTypeID
                                                        ? "折"
                                                        : "元",
                                                  }),
                                                  (0, N.tZ)(p.View, {
                                                    className: "price-tag",
                                                    children: o.couponTag,
                                                  }),
                                                ],
                                              }),
                                              (0, N.BX)(p.View, {
                                                className: "coupon-bd",
                                                children: [
                                                  (0, N.BX)(p.View, {
                                                    className: "tit",
                                                    children: [
                                                      o.couponDisplayName,
                                                      (0, N.tZ)(p.Text, {
                                                        className:
                                                          "iconfont ifont-detail",
                                                        "data-index": a,
                                                        id: "AZAH",
                                                        onClick:
                                                          e.toCouponDetail,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, N.tZ)(p.View, {
                                                    className: "txt",
                                                    children:
                                                      "有效期至" +
                                                      o.couponEndDate,
                                                  }),
                                                  o.type === b && o.reason
                                                    ? (0, N.tZ)(p.View, {
                                                        className: "reason txt",
                                                        children: o.reason,
                                                      })
                                                    : o.showDescribe &&
                                                      (0, N.tZ)(p.View, {
                                                        className: "txt",
                                                        children:
                                                          o.showDescribe,
                                                      }),
                                                ],
                                              }),
                                              (0, N.tZ)(p.View, {
                                                className: "coupon-hd",
                                                children: (0, N.tZ)(p.Button, {
                                                  className: "btn-use",
                                                  hoverClass: "btn-use_hover",
                                                  id: "AZAI",
                                                  onClick: e.chooseCoupon,
                                                  "data-index": a,
                                                  disabled:
                                                    n === o.couponCode ||
                                                    3 === o.couponState,
                                                  children: c,
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        o.couponCode
                                      )
                                    );
                                  }),
                                  c &&
                                    c.couponToken &&
                                    (0, N.BX)(p.View, {
                                      className: "block",
                                      children: [
                                        (0, N.tZ)(p.View, {
                                          className: "block-title",
                                          children: "待领取优惠券",
                                        }),
                                        (0, N.tZ)(p.View, {
                                          className: "unreceive-coupon-list",
                                          children: (0, N.BX)(p.View, {
                                            className: "item",
                                            children: [
                                              (0, N.tZ)(p.View, {
                                                className: "price color-red",
                                                children: c.couponAmount,
                                              }),
                                              (0, N.BX)(p.View, {
                                                className: "des",
                                                children: [
                                                  (0, N.tZ)(p.View, {
                                                    className: "main-text",
                                                    children: c.couponName,
                                                  }),
                                                  (0, N.tZ)(p.View, {
                                                    className:
                                                      "sub-text color-red",
                                                    children: c.couponDesc,
                                                  }),
                                                ],
                                              }),
                                              (0, N.tZ)(p.View, {
                                                className: "btn",
                                                id: "AZAJ",
                                                onClick: this.handleReceive,
                                                children: "领取",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  (0, N.tZ)(w.Z, {
                                    ref: function (o) {
                                      e.onDialogAttach(o);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        n
                      );
                    })(l.default.Component))
                  ) || t)
              ) || t;
          Page(
            (0, a.createPageConfig)(
              V,
              "pages/flightSecondary/coupon/coupon",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "优惠券",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (o) {
            return e((e.s = o));
          })(71973);
        }),
          e.O();
      },
    ]);
})();
