!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [48972],
      {
        9592: function (t, e, n) {
          var o,
            i = n(32180),
            a = n(90129),
            c = n(57042),
            r = n(24460),
            u = n(21867),
            l = n(86066),
            s = n(52500),
            d = n(8271),
            p = n.n(d),
            h = n(79404),
            g = n(79792),
            f = n(92954),
            m = n.n(f),
            y = n(71515),
            v = n(49120),
            w = n(79910),
            C = n(34229),
            D = n(13025),
            N = n(81957),
            Z = n(30071),
            k = n(48813),
            V =
              (0, N.h)()(
                (o = (function (t) {
                  (0, u.Z)(n, t);
                  var e = (0, l.Z)(n);
                  function n(t) {
                    var o, i;
                    (0, c.Z)(this, n),
                      ((i = e.call(this, t)).pageId = "10650086941");
                    var a =
                        null ===
                          (o = (0, f.getCurrentInstance)().router.params) ||
                        void 0 === o
                          ? void 0
                          : o.couponList,
                      r = a ? i.convertCouponList(JSON.parse(a), !0) : null;
                    return (
                      null != r &&
                        r.length &&
                        m().setNavigationBarTitle({ title: "选择优惠券" }),
                      (i.state = {
                        couponList: r,
                        chosenMode: (null == r ? void 0 : r.length) > 0,
                        isTieyou: g.default.isTieyou,
                        today: p()().format("YYYY-MM-DD"),
                      }),
                      i
                    );
                  }
                  return (
                    (0, r.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t;
                          (null !== (t = this.state.couponList) &&
                            void 0 !== t &&
                            t.length) ||
                            this.getCouponList();
                        },
                      },
                      {
                        key: "convertCouponList",
                        value: function (t, e) {
                          var n = e
                              ? p()().format("YYYY-MM-DD")
                              : this.state.today,
                            o =
                              Z.gg.getAttr("selectCouponCode") ||
                              ((null == t ? void 0 : t.length) > 0
                                ? t[0].couponCode
                                : null);
                          return t.map(function (t) {
                            var i =
                                t.couponStrategyDescList || t.deductionStrategy,
                              c = (0, a.Z)(i, 1)[0],
                              r = t.deductionStrategy
                                .sort(function (t, e) {
                                  return t.startAmount < e.startAmount;
                                })
                                .map(function (t) {
                                  return "满"
                                    .concat(t.startAmount, "-")
                                    .concat(t.deductionAmount);
                                })
                                .join("、"),
                              u = t.couponStartDate.split(" "),
                              l = (0, a.Z)(u, 1)[0],
                              s = t.couponEndDate.split(" "),
                              d = (0, a.Z)(s, 1)[0],
                              p = {
                                couponStartDate: l,
                                couponEndDate: d,
                                tag:
                                  n === d
                                    ? "今日到期"
                                    : n < l
                                    ? "未到使用日期"
                                    : "",
                                deductionStrategyStr: r,
                                type: 3,
                                title: "酒店优惠券",
                                couponDetail: t.couponDetail
                                  .replace(/\\n/g, "<br />")
                                  .replace(/\n/g, "<br />"),
                                selected: !!e && o === t.couponCode,
                                disabled: n < l || 0 !== t.couponState,
                              };
                            return (
                              2 === t.deductionStrategyTypeID &&
                                (p.discountStr =
                                  "string" == typeof c
                                    ? c
                                    : "最高可抵扣".concat(
                                        c.deductionAmountLimit,
                                        "元"
                                      )),
                              Object.assign({}, t, p)
                            );
                          });
                        },
                      },
                      {
                        key: "onClickCoupon",
                        value: function (t, e) {
                          if ((t.stopPropagation(), !e.disabled)) {
                            if (this.state.chosenMode)
                              return (
                                Z.gg.setAttr("selectCouponCode", e.couponCode),
                                void m().navigateBack({ delta: 1 })
                              );
                            6 == e.type
                              ? this.navigateTo({
                                  url: "/pages/taroCRN/ticket/pages/index/index?",
                                })
                              : this.gotoIndexPage(e.type);
                          }
                        },
                      },
                      {
                        key: "chooseNull",
                        value: function () {
                          Z.gg.setAttr("selectCouponCode", -1),
                            m().navigateBack({ delta: 1 });
                        },
                      },
                      {
                        key: "gotoIndexPage",
                        value: function () {
                          w.Z.relaunchHome("hotel");
                        },
                      },
                      {
                        key: "getCouponList",
                        value: function () {
                          var t = this;
                          (0, v.showLoading)(),
                            (0, D.Ky)({
                              couponType: 300,
                              pageIndex: 1,
                              clientVersion: h.Z.clientVersion,
                            })
                              .then(function (e) {
                                var n;
                                if (
                                  -1 != e.resultCode &&
                                  null !== (n = e.couponList) &&
                                  void 0 !== n &&
                                  n.length
                                ) {
                                  var o = t.convertCouponList(e.couponList),
                                    i = [];
                                  o.forEach(function (t) {
                                    3 === t.type && 1 === t.hotelType
                                      ? (t.flag = 2)
                                      : (3 === t.type && 1 !== t.hotelType) ||
                                        (4 === t.type &&
                                          (0 === t.hotelType ||
                                            2 === t.hotelType))
                                      ? (t.flag = 1)
                                      : (t.flag = 0),
                                      i.push(t);
                                  }),
                                    t.setData({
                                      couponList: i.sort(t.compare("flag")),
                                    });
                                } else t.setData({ couponList: [] });
                              })
                              .catch(function () {
                                t.setData({ couponList: [] });
                              })
                              .finally(function () {
                                return (0, v.hideLoading)();
                              });
                        },
                      },
                      {
                        key: "compare",
                        value: function (t) {
                          return function (e, n) {
                            var o = e[t];
                            return n[t] - o;
                          };
                        },
                      },
                      {
                        key: "triggerCouponDetail",
                        value: function (t, e) {
                          var n = t.currentTarget.dataset.index,
                            o = this.state.couponList;
                          (o[n].showDetail = !e),
                            this.setState({ couponList: o });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this,
                            e = this.state,
                            n = e.couponList,
                            o = e.chosenMode,
                            i = e.isTieyou;
                          return (0, k.BX)(y.View, {
                            className: "coupon-wrapper",
                            children: [
                              (null == n ? void 0 : n.length) > 0 &&
                                n.map(function (e, n) {
                                  var o = 2 === e.deductionStrategyTypeID,
                                    i = "price color-red".concat(
                                      o ? " discount" : ""
                                    ),
                                    a = o ? e.couponDiscount : e.couponPrice,
                                    c = o
                                      ? e.discountStr
                                      : e.deductionStrategyStr,
                                    r = "item"
                                      .concat(e.selected ? " selected" : "")
                                      .concat(e.disabled ? " filter" : "");
                                  return (0, k.BX)(
                                    s.default.Fragment,
                                    {
                                      children: [
                                        (0, k.BX)(y.View, {
                                          className: r,
                                          children: [
                                            e.selected &&
                                              (0, k.tZ)(y.Image, {
                                                className: "selected-icon",
                                                src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/jiudian-youhuiquan/youhuiquan-xuanzhong@3x.png",
                                              }),
                                            e.tag &&
                                              (0, k.tZ)(y.View, {
                                                className: "tag",
                                                children: e.tag,
                                              }),
                                            (0, k.BX)(y.View, {
                                              className: i,
                                              children: [
                                                (0, k.tZ)(y.View, {
                                                  className: "price-text",
                                                  children: a,
                                                }),
                                                e.currentCouponStrategyDesc &&
                                                  (0, k.tZ)(y.View, {
                                                    className: "current-desc",
                                                    children:
                                                      e.currentCouponStrategyDesc,
                                                  }),
                                              ],
                                            }),
                                            (0, k.BX)(y.View, {
                                              className: "cont",
                                              children: [
                                                (0, k.tZ)(y.View, {
                                                  className: "tit",
                                                  children:
                                                    e.couponName ||
                                                    e.couponDisplayName,
                                                }),
                                                (0, k.tZ)(y.View, {
                                                  className: "txt",
                                                  children:
                                                    e.couponStartDate +
                                                    "至" +
                                                    e.couponEndDate,
                                                }),
                                              ],
                                            }),
                                            (0, k.tZ)(y.Button, {
                                              className: "btn-used btn-red",
                                              id: "AXCG",
                                              onClick: function (n) {
                                                return t.onClickCoupon(n, e);
                                              },
                                              children: e.disabled
                                                ? "不可使用"
                                                : "立即使用",
                                            }),
                                          ],
                                        }),
                                        (0, k.tZ)(y.View, {
                                          className: "line-wrapper",
                                          children: (0, k.tZ)(y.Image, {
                                            src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/jiudian-youhuiquan/icon_youhuiquan_xian@3x-2.png",
                                            className: "line",
                                          }),
                                        }),
                                        (0, k.BX)(y.View, {
                                          className: "detail-wrapper",
                                          children: [
                                            (0, k.BX)(y.View, {
                                              className: "deduction",
                                              "data-index": n,
                                              id: "AXCH",
                                              onClick: function (n) {
                                                return t.triggerCouponDetail(
                                                  n,
                                                  e.showDetail
                                                );
                                              },
                                              children: [
                                                (0, k.BX)(s.default.Fragment, {
                                                  children: [
                                                    e.showDetail
                                                      ? (0, k.tZ)(y.Text, {
                                                          children: "详细信息",
                                                        })
                                                      : (0, k.tZ)(y.View, {
                                                          class:
                                                            "deduction-ellipsis",
                                                          children: c,
                                                        }),
                                                    (0, k.tZ)(y.Text, {
                                                      className:
                                                        "iconfont " +
                                                        (e.showDetail
                                                          ? "ifont-arrup"
                                                          : "ifont-arrdown"),
                                                    }),
                                                  ],
                                                }),
                                                e.showDetail &&
                                                  (0, k.tZ)(y.View, {
                                                    class: "deduction-all",
                                                    children: c,
                                                  }),
                                              ],
                                            }),
                                            e.showDetail &&
                                              (0, k.tZ)(y.View, {
                                                className: "detail",
                                                children: (0, k.tZ)(
                                                  C.ZtRichText,
                                                  { nodes: e.couponDetail }
                                                ),
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.couponId
                                  );
                                }),
                              (null == n ? void 0 : n.length) < 1 &&
                                (0, k.BX)(y.View, {
                                  className: "item none",
                                  children: [
                                    (0, k.tZ)(y.View, {
                                      className: "icon-wrap",
                                      children: (0, k.tZ)(y.Image, {
                                        className: "icon",
                                        src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/jiudian-youhuiquan/tupian_zanwuneirong@3x.png",
                                      }),
                                    }),
                                    (0, k.tZ)(y.View, {
                                      className: "title",
                                      children: "暂无可用的优惠券",
                                    }),
                                    (0, k.tZ)(y.View, {
                                      className: "desc",
                                      children: "关注智行公众号领酒店优惠券",
                                    }),
                                  ],
                                }),
                              o &&
                                (null == n ? void 0 : n.length) > 0 &&
                                (0, k.tZ)(y.View, {
                                  className: "container",
                                  children: (0, k.tZ)(y.View, {
                                    className: "chosen-null ".concat(
                                      i ? "ty" : "zx"
                                    ),
                                    id: "AXCI",
                                    onClick: this.chooseNull,
                                    children: "不使用优惠券",
                                  }),
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(s.default.Component))
              ) || o;
          Page(
            (0, i.createPageConfig)(
              V,
              "pages/hotel/coupon/coupon",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "酒店卡券包",
                navigationBarBackgroundColor: "#ffffff",
                backgroundColorTop: "#ffffff",
                backgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                backgroundColorBottom: "#ffffff",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(9592);
        }),
          t.O();
      },
    ]);
})();
