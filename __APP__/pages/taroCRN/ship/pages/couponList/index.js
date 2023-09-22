!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [41389],
      {
        67582: function (e, t, n) {
          var o,
            c = n(32180),
            l = n(57042),
            i = n(24460),
            a = n(81876),
            s = n(21867),
            r = n(86066),
            u = n(45023),
            p = n(52500),
            d = n(92954),
            f = n.n(d),
            m = n(23577),
            h = n(71515),
            g = n(87298),
            C = n(96302),
            Z = n(90129),
            w = n(49528),
            x = n(981),
            v = n(99090),
            S = n(47482),
            y = n(48813),
            N = (0, w.lW)({
              scale05: { transform: [{ scaleY: 0.5 }] },
              mt4: { marginTop: 4 },
              mt2: { marginTop: 2 },
              pl16: { paddingLeft: 16 },
              iconWrap: {
                width: 12,
                height: 12,
                position: "absolute",
                top: 2,
                right: 0,
              },
            }),
            b = function (e) {
              var t,
                n = e.coupon,
                o = e.selectedCoupon,
                c = e.onSelect,
                l = e.totalPrice,
                i = (0, p.useState)(!1),
                a = (0, Z.Z)(i, 2),
                s = a[0],
                r = a[1],
                u = n.couponCode == (null == o ? void 0 : o.couponCode),
                d = n.displayName,
                f = n.deductionAmount,
                m = n.displayCouponStartDate,
                g = n.displayCouponEndDate,
                C = n.remark,
                b = n.deductionStrategyTypeID,
                k = void 0 === b ? 0 : b,
                B = n.deductionStrategy,
                V = void 0 === B ? [] : B,
                P = 3 === k && (null == V ? void 0 : V.length) > 0;
              P && (t = V[0].startAmount);
              return (0, y.BX)(h.View, {
                className: "ship-coupon-item",
                children: [
                  (0, y.BX)(h.View, {
                    className: "flex-align-items-center flex-row",
                    children: [
                      (0, y.BX)(h.View, {
                        className: "flex-1",
                        children: [
                          (0, y.tZ)(h.View, {
                            className: "sp-coupon-title",
                            children: null == d ? void 0 : d.trim(),
                          }),
                          (0, y.tZ)(h.View, {
                            className: "sp-coupon-subtitle",
                            style: N.mt4,
                            children: "".concat(m, " 至 ").concat(g),
                          }),
                        ],
                      }),
                      (0, y.BX)(h.View, {
                        children: [
                          (0, y.BX)(h.View, {
                            className: "flex-row",
                            children: [
                              (0, y.tZ)(h.Text, {
                                className: "sp-yuan",
                                style: w.FS.zxRegular,
                                children: "¥",
                              }),
                              (0, y.tZ)(h.Text, {
                                className: "sp-price",
                                style: w.FS.zxRegular,
                                children: f,
                              }),
                            ],
                          }),
                          P &&
                            (0, y.tZ)(h.View, {
                              className: "sp-coupon-subtitle",
                              style: N.mt2,
                              children: "满".concat(t, "可用"),
                            }),
                        ],
                      }),
                      (0, y.tZ)(h.View, {
                        className: "flex-align-items-center flex-row",
                        style: N.pl16,
                        onClick: function () {
                          return P && l < t
                            ? (0, x.C)("该券暂不可用")
                            : l < f
                            ? (0, x.C)("订单金额小于优惠券金额，暂不可用")
                            : void (null == c || c(n));
                        },
                        children: u
                          ? (0, y.tZ)(v.r5, { size: 20, color: "#198cff" })
                          : (0, y.tZ)(v.xG, { size: 20, color: "#ccc" }),
                      }),
                    ],
                  }),
                  (0, y.tZ)(h.View, { className: "sp-line", style: N.scale05 }),
                  (0, y.BX)(h.View, {
                    className: "sp-remark",
                    onClick: function () {
                      return r(!s);
                    },
                    children: [
                      (0, y.tZ)(h.View, {
                        style: N.iconWrap,
                        className: "flex-center flex-row",
                        children: s
                          ? (0, y.tZ)(v.Cz, { size: 12, color: "#ccc" })
                          : (0, y.tZ)(v.BD, { size: 12, color: "#ccc" }),
                      }),
                      (0, y.tZ)(S.Z, {
                        expand: s,
                        style: {
                          marginRight: 26,
                          lineHeight: 16,
                          color: "#999",
                          fontSize: 11,
                          fontFamily: "PingFangSC-Regular",
                          fontWeight: "normal",
                          letterSpacing: 0,
                        },
                        children: C,
                      }),
                    ],
                  }),
                ],
              });
            },
            k =
              (0, g.h)(!1)(
                (o = (function (e) {
                  (0, s.Z)(n, e);
                  var t = (0, r.Z)(n);
                  function n(e) {
                    var o;
                    return (
                      (0, l.Z)(this, n),
                      (o = t.call(this, e)),
                      (0, u.Z)((0, a.Z)(o), "onSelect", function (e) {
                        o.setState({ selectedCoupon: e }, function () {
                          o.navigateBack({ coupon: e });
                        });
                      }),
                      (0, u.Z)((0, a.Z)(o), "unSelect", function () {
                        o.setState({ selectedCoupon: null }, function () {
                          o.navigateBack({ unSelectCoupon: !0 });
                        });
                      }),
                      (o.pageId = m.Z.isCRN ? "10650104534" : "10650104536"),
                      (o.state = {
                        couponList: [],
                        selectedCoupon: null,
                        totalPrice: 0,
                      }),
                      o
                    );
                  }
                  return (
                    (0, i.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = f().getCurrentInstance().router.params,
                            t = e.couponList,
                            n = e.selectedCoupon,
                            o = e.totalPrice;
                          this.setState({
                            couponList: t,
                            selectedCoupon: n,
                            totalPrice: o,
                          });
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.couponList,
                            o = t.selectedCoupon,
                            c = t.totalPrice;
                          return (0, y.BX)(h.View, {
                            className: "ship-coupon-list flex flex-column",
                            children: [
                              (0, y.tZ)(C.Z, {
                                title: "优惠券",
                                backgroundColor: "#f5f5f5",
                              }),
                              (0, y.BX)(h.ScrollView, {
                                className: "ship-coupon-list-content flex-1",
                                scrollY: !0,
                                children: [
                                  (0, y.tZ)(h.View, {
                                    className:
                                      "unselect-coupon flex-center flex-row",
                                    onClick: this.unSelect,
                                    children: (0, y.tZ)(h.Text, {
                                      className: "unselect-txt",
                                      children: "不使用优惠券",
                                    }),
                                  }),
                                  null == n
                                    ? void 0
                                    : n.map(function (t, n) {
                                        return (0,
                                        y.tZ)(b, { coupon: t, selectedCoupon: o, onSelect: e.onSelect, totalPrice: c }, n);
                                      }),
                                ],
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(p.default.Component))
              ) || o;
          Page(
            (0, c.createPageConfig)(
              k,
              "pages/taroCRN/ship/pages/couponList/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "优惠券",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#F5F5F5",
                backgroundColorBottom: "#F5F5F5",
                enablePullDownRefresh: !1,
                disableScroll: !0,
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [98946, 7160, 83004, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(67582);
        }),
          e.O();
      },
    ]);
})();
