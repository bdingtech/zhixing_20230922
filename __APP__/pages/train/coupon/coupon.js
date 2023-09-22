!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/9cf383cff2ba8ce0456965e69ba11b63.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [15068],
      {
        3577: function (o, e, n) {
          var t,
            i = n(32180),
            c = n(22276),
            a = n(57042),
            s = n(24460),
            u = n(21867),
            r = n(86066),
            l = n(52500),
            d = n(92954),
            p = n.n(d),
            h = n(71515),
            m = n(81957),
            C = n(79792),
            w = n(58676),
            b = n(26498),
            f = n(48813),
            v = void 0,
            g = function (o) {
              var e = o.checked,
                n = void 0 !== e && e,
                t = o.isDisabled,
                i = void 0 !== t && t,
                c = o.onChooseCoupon,
                a = void 0 === c ? function () {} : c,
                s = o.onShowCouponDesc,
                u = void 0 === s ? function () {} : s,
                r = o.coupon;
              return (0, f.BX)(h.View, {
                className: "train-coupon-item ".concat(i ? "unsuseable" : ""),
                children: [
                  (0, f.BX)(h.View, {
                    className: "c-l",
                    children: [
                      (0, f.tZ)(h.View, { className: "top", children: "立减" }),
                      (0, f.BX)(h.View, {
                        className: "bottom",
                        children: [
                          (0, f.tZ)(h.Text, {
                            className: "price",
                            children: r.couponPrice,
                          }),
                          "元",
                        ],
                      }),
                    ],
                  }),
                  (0, f.BX)(h.View, {
                    className: "c-r",
                    children: [
                      (0, f.BX)(h.View, {
                        className: "c-r-info",
                        children: [
                          (0, f.BX)(h.View, {
                            className: "coupon-detail",
                            children: [
                              (0, f.BX)(h.View, {
                                className: "tit",
                                children: [
                                  r.couponName,
                                  r.desc &&
                                    (0, f.tZ)(h.Text, {
                                      className: "iconfont ifont-detail",
                                      id: "AKCQ",
                                      onClick: u.bind(v, r),
                                    }),
                                ],
                              }),
                              (0, f.tZ)(h.View, {
                                className: "desc",
                                children: r.expireDate,
                              }),
                            ],
                          }),
                          (0, f.tZ)(h.View, {
                            className: "coupon-extra",
                            children: r.couponDesc,
                          }),
                        ],
                      }),
                      (0, f.tZ)(h.View, {
                        className: "c-r-handle",
                        children: (0, f.tZ)(b.Z, {
                          checked: n,
                          disabled: i,
                          id: "AKCR",
                          onClick: a.bind(v, r),
                        }),
                      }),
                    ],
                  }),
                ],
              });
            },
            Z =
              (0, m.h)()(
                (t = (function (o) {
                  (0, u.Z)(n, o);
                  var e = (0, r.Z)(n);
                  function n(o) {
                    var t;
                    return (
                      (0, a.Z)(this, n),
                      ((t = e.call(this, o)).state = {
                        useAbleCouponList: [],
                        disabledCouponList: [],
                        targetCoupon: null,
                      }),
                      t
                    );
                  }
                  return (
                    (0, s.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var o = p().getCurrentInstance().router.params.data,
                            e = o.useAbleCouponList,
                            n = void 0 === e ? [] : e,
                            t = o.disabledCouponList,
                            i = void 0 === t ? [] : t,
                            c = o.selectedCoupon;
                          this.setState({
                            useAbleCouponList: n,
                            disabledCouponList: i,
                            targetCoupon: c,
                          });
                        },
                      },
                      {
                        key: "onChooseCoupon",
                        value: function (o) {
                          var e = this.state.targetCoupon || {},
                            n = e.promotionId,
                            t = e.couponCode;
                          this.setState({
                            targetCoupon:
                              o.promotionId === n && o.couponCode === t
                                ? null
                                : o,
                          });
                        },
                      },
                      {
                        key: "onShowCouponDesc",
                        value: function (o) {
                          this.showCommonDialog({
                            title: "使用说明",
                            content: o.desc,
                          });
                        },
                      },
                      {
                        key: "onSure",
                        value: function () {
                          this.navigateBack(this.state.targetCoupon);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var o = this,
                            e = this.state,
                            n = e.targetCoupon,
                            t = e.useAbleCouponList,
                            i = void 0 === t ? [] : t,
                            a = e.disabledCouponList,
                            s = void 0 === a ? [] : a,
                            u = [].concat((0, c.Z)(i), (0, c.Z)(s)).length > 0;
                          return (0, f.BX)(h.View, {
                            className: "train-coupon-page ".concat(
                              C.default.zxTyStr
                            ),
                            children: [
                              (0, f.BX)(h.View, {
                                className: "page-content",
                                children: [
                                  u &&
                                    (0, f.BX)(h.View, {
                                      className: "coupon-view",
                                      children: [
                                        i
                                          .sort(function (o, e) {
                                            return (
                                              e.couponPrice - o.couponPrice
                                            );
                                          })
                                          .map(function (e, t) {
                                            return (0,
                                            f.tZ)(g, { checked: (null == n ? void 0 : n.promotionId) === e.promotionId && e.couponCode === (null == n ? void 0 : n.couponCode), onChooseCoupon: o.onChooseCoupon.bind(o), onShowCouponDesc: o.onShowCouponDesc.bind(o), coupon: e }, t);
                                          }),
                                        s.length > 0 &&
                                          (0, f.BX)(h.Block, {
                                            children: [
                                              (0, f.tZ)(h.View, {
                                                className: "title",
                                                children: "不可使用的优惠券",
                                              }),
                                              (0, f.tZ)(h.View, {
                                                className:
                                                  "unuseable-coupon-list-view",
                                                children: s
                                                  .sort(function (o, e) {
                                                    return (
                                                      e.couponPrice -
                                                      o.couponPrice
                                                    );
                                                  })
                                                  .map(function (e, n) {
                                                    return (0,
                                                    f.tZ)(g, { isDisabled: !0, coupon: e, onShowCouponDesc: o.onShowCouponDesc.bind(o) }, n);
                                                  }),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  !u &&
                                    (0, f.BX)(h.View, {
                                      className: "empty-con",
                                      children: [
                                        (0, f.tZ)(h.Image, {
                                          src: "https://images3.c-ctrip.com/ztrip/train_xie/2022-04/img_kzt_zh.png",
                                          mode: "aspectFit",
                                          className: "icon",
                                        }),
                                        (0, f.tZ)(h.Text, {
                                          children: "当前暂无优惠券",
                                        }),
                                      ],
                                    }),
                                  (0, f.tZ)(h.View, {
                                    className: "btom-layer",
                                    children: (0, f.tZ)(h.View, {
                                      className: "btn-sure",
                                      id: "AKCS",
                                      onClick: this.onSure.bind(this),
                                      children: "确认",
                                    }),
                                  }),
                                ],
                              }),
                              (0, f.tZ)(w.Z, {
                                ref: function (e) {
                                  o.onDialogAttach(e);
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
              ) || t;
          Page(
            (0, i.createPageConfig)(
              Z,
              "pages/train/coupon/coupon",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "使用优惠券",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (o) {
        o.O(0, [61094, 26450, 19559, 11216, 68592], function () {
          return (function (e) {
            return o((o.s = e));
          })(3577);
        }),
          o.O();
      },
    ]);
})();
