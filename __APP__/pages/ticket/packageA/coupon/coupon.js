!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [33812],
      {
        22149: function (e, o, t) {
          var n,
            a = t(32180),
            c = t(57042),
            i = t(24460),
            s = t(21867),
            u = t(86066),
            d = t(52500),
            l = t(71515),
            r = (t(92954), t(48792)),
            p = t.n(r),
            h = t(79792),
            C = t(58676),
            m = t(81957),
            f = t(48813),
            v = {
              data: {
                isTieyou: h.default.isTieyou,
                couponList: [],
                selectedCouponItem: {},
                selectedCouponItemCode: "",
              },
              onLoad: function (e) {
                var o = e.couponCode,
                  t = e.data,
                  n = void 0 === t ? {} : t,
                  a = n.couponList,
                  c = n.selectedCouponItem;
                this.setData({
                  selectedCouponItem: c,
                  selectedCouponItemCode: o || "",
                  couponList: a,
                });
              },
              chooseCoupon: function (e) {
                var o = e.currentTarget.dataset.index,
                  t = this.data.couponList[o];
                this.invokeCallback({ selectedCouponItem: t }),
                  this.navigateBack();
              },
              chooseNoCoupon: function () {
                this.invokeCallback(), this.navigateBack();
              },
              showCouponDetail: function (e) {
                var o = e.currentTarget.dataset.index,
                  t = this.data.couponList[o].couponDetail;
                this.showCommonDialog(t);
              },
            },
            g =
              (0, m.h)()(
                (n =
                  p()(v)(
                    (n = (function (e) {
                      (0, s.Z)(t, e);
                      var o = (0, u.Z)(t);
                      function t() {
                        return (0, c.Z)(this, t), o.apply(this, arguments);
                      }
                      return (
                        (0, i.Z)(t, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                o = this.data,
                                t = o.selectedCouponItemCode,
                                n = o.isTieyou,
                                a = o.couponList;
                              return (0, f.BX)(l.Block, {
                                children: [
                                  (0, f.tZ)(l.View, {
                                    className: "coupon-btn",
                                    children: (0, f.tZ)(l.Button, {
                                      className: "btn-unused",
                                      hoverClass: "btn-unused_hover",
                                      id: "ALBg",
                                      onClick: this.chooseNoCoupon,
                                      children: "不使用优惠券",
                                    }),
                                  }),
                                  a.map(function (o, a) {
                                    return (0,
                                    f.tZ)(l.View, { className: "coupon-box " + (3 === o.couponState ? "disabled" : "") + " " + (t === o.couponCode ? "active" : "") + " " + (n ? "ty" : "zx"), children: (0, f.BX)(l.View, { className: "item", children: [(0, f.BX)(l.View, { className: "coupon-price", children: [(0, f.tZ)(l.Text, { className: "strong", children: 2 === o.deductionStrategyTypeID ? o.couponDiscount : o.couponPrice }), (0, f.tZ)(l.Text, { className: "yuan", children: "元" }), (0, f.tZ)(l.View, { className: "price-tag", children: o.couponTag })] }), (0, f.BX)(l.View, { className: "coupon-bd", children: [(0, f.BX)(l.View, { className: "tit", children: [o.couponDisplayName, (0, f.tZ)(l.Text, { className: "iconfont ifont-detail", "data-index": a, id: "ALBh", onClick: e.showCouponDetail })] }), (0, f.tZ)(l.View, { className: "txt", children: "有效期至" + o.couponEndDate }), 3 === o.couponState && (0, f.tZ)(l.View, { className: "txt", children: o.remark })] }), (0, f.tZ)(l.View, { className: "coupon-hd", children: (0, f.tZ)(l.Button, { className: "btn-use", hoverClass: "btn-use_hover", id: "ALBi", onClick: e.chooseCoupon, "data-index": a, disabled: t === o.couponCode || 3 === o.couponState, children: (t === o.couponCode ? "已" : 3 === o.couponState ? "不可" : "立即") + "使用" }) })] }) }, o.couponCode);
                                  }),
                                  (0, f.tZ)(C.Z, {
                                    ref: function (o) {
                                      e.onDialogAttach(o);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        t
                      );
                    })(d.default.Component))
                  ) || n)
              ) || n;
          Page(
            (0, a.createPageConfig)(
              g,
              "pages/ticket/packageA/coupon/coupon",
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
          })(22149);
        }),
          e.O();
      },
    ]);
})();
