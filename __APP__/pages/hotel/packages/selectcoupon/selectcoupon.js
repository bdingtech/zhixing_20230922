!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [1504],
      {
        52796: function (e, t, o) {
          var n,
            a = o(32180),
            i = o(57042),
            c = o(24460),
            s = o(21867),
            r = o(86066),
            u = o(298),
            l = o(52500),
            d = o(71515),
            p = o(92954),
            h = o.n(p),
            m = o(58676),
            f = o(48792),
            g = o.n(f),
            N = o(79792),
            w = o(79910),
            Z = o(30071),
            C = o(81957),
            B = o(48813),
            k = {
              pageId: "10650060681",
              data: {
                isTieyou: N.default.isTieyou,
                isBaiduMap: w.A.isBaiduMap,
                couponList: [],
              },
              onLoad: function (e) {
                console.log("options===>", JSON.parse(e.couponList));
                var t = JSON.parse(e.couponList).map(function (e) {
                  return (0,
                  u.Z)((0, u.Z)({}, e), {}, { couponStartDate: e.couponStartDate.slice(0, 10), couponEndDate: e.couponEndDate.slice(0, 10) });
                });
                this.setData({ couponList: t });
              },
              chooseCoupon: function (e) {
                var t = e.currentTarget.dataset.item;
                Z.gg.setAttr("selectCouponCode", t.couponCode),
                  h().navigateBack({ delta: 1 });
              },
              chooseNull: function () {
                Z.gg.setAttr("selectCouponCode", -1),
                  h().navigateBack({ delta: 1 });
              },
              showCouponDetail: function (e) {
                var t = e.currentTarget.dataset.index,
                  o = this.data.couponList[t].couponDetail;
                this.showCommonDialog(o);
              },
            },
            V =
              (0, C.h)()(
                (n =
                  g()(k)(
                    (n = (function (e) {
                      (0, s.Z)(o, e);
                      var t = (0, r.Z)(o);
                      function o() {
                        return (0, i.Z)(this, o), t.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(o, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                o = t.couponList,
                                n = t.isTieyou,
                                a = t.isBaiduMap;
                              return (0, B.BX)(l.default.Fragment, {
                                children: [
                                  (0, B.BX)(d.View, {
                                    className: "wrap",
                                    children: [
                                      (0, B.BX)(d.View, {
                                        className: "kq-tit",
                                        children: [
                                          (0, B.tZ)(d.Text, {
                                            className:
                                              "ifont-quan iconfont color-primary",
                                          }),
                                          "优惠券",
                                        ],
                                      }),
                                      (0, B.BX)(d.View, {
                                        className: "kq-coupon",
                                        children: [
                                          o &&
                                            o[0] &&
                                            (0, B.tZ)(l.default.Fragment, {
                                              children: o.map(function (t, o) {
                                                return (0,
                                                B.BX)(d.View, { className: "item", children: [(0, B.tZ)(d.View, { className: "price color-red", children: t.couponPrice }), (0, B.BX)(d.View, { className: "cont", children: [(0, B.BX)(d.View, { className: "tit", children: [t.couponName, !a && (0, B.tZ)(d.Text, { className: "iconfont ifont-detail", "data-index": o, id: "AXHE", onClick: e.showCouponDetail })] }), (0, B.tZ)(d.View, { className: "txt", children: t.couponDisplayName }), 0 === t.couponState && (0, B.tZ)(d.View, { className: "txt", children: t.couponStartDate + "至" + t.couponEndDate }), 0 !== t.couponState && (0, B.tZ)(d.View, { className: "txt", children: t.remark })] }), (0, B.tZ)(d.Button, { className: "btn-used btn-red", "data-type": t.type, id: "AXHF", onClick: e.chooseCoupon, "data-item": t, disabled: 0 !== t.couponState, children: 0 === t.couponState ? "立即使用" : "暂不可用" })] }, o);
                                              }),
                                            }),
                                          o.length < 1 &&
                                            (0, B.tZ)(d.View, {
                                              className: "item",
                                              children: (0, B.tZ)(d.View, {
                                                className: "no-coupon",
                                                children:
                                                  "您当前没有可用的优惠券",
                                              }),
                                            }),
                                        ],
                                      }),
                                      (0, B.tZ)(d.View, {
                                        className: "container",
                                        children: (0, B.tZ)(d.View, {
                                          className:
                                            "nouse " + (n ? "ty" : "zx"),
                                          id: "AXHG",
                                          onClick: this.chooseNull,
                                          children: "不使用优惠券",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, B.tZ)(m.Z, {
                                    ref: function (t) {
                                      e.onDialogAttach(t);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        o
                      );
                    })(l.default.Component))
                  ) || n)
              ) || n;
          Page(
            (0, a.createPageConfig)(
              V,
              "pages/hotel/packages/selectcoupon/selectcoupon",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "选择优惠券",
                navigationBarBackgroundColor: "#0075F4",
                backgroundColorTop: "#0075F4",
                backgroundColorBottom: "#ffffff",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(52796);
        }),
          e.O();
      },
    ]);
})();
