!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [97166],
      {
        12181: function (e, t, a) {
          var o,
            n,
            i = a(32180),
            r = a(298),
            c = a(57042),
            l = a(24460),
            s = a(21867),
            u = a(86066),
            d = a(52500),
            h = a(92954),
            g = a.n(h),
            p = a(71515),
            f = a(79792),
            m = a(49120),
            v = a(81957),
            k = a(48813),
            C =
              (0, v.h)(!0)(
                (o = (function (e) {
                  (0, s.Z)(a, e);
                  var t = (0, u.Z)(a);
                  function a(e) {
                    var o;
                    return (
                      (0, c.Z)(this, a),
                      ((o = t.call(this, e)).state = {
                        toggleParams: { toggleShow: !1, toggleFlag: 1 },
                      }),
                      o
                    );
                  }
                  return (
                    (0, l.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this.props,
                            t = e.info,
                            a = e.order,
                            o = e.radioValue,
                            n = e.enableSelected;
                          this.setState({
                            ite: t,
                            order: a,
                            radioValue: o,
                            enableSelected: n,
                          }),
                            this.initToggle();
                        },
                      },
                      {
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function (e) {
                          var t = e.info,
                            a = e.order,
                            o = e.radioValue,
                            n = e.enableSelected;
                          this.setState({
                            ite: t,
                            order: a,
                            radioValue: o,
                            enableSelected: n,
                          });
                        },
                      },
                      {
                        key: "getElementWidth",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t = g()
                              .createSelectorQuery()
                              .in((0, m.getCurrentPage)());
                          return new Promise(function (a) {
                            t.select(e)
                              .fields({ size: !0 }, function (e) {
                                a(e && e.width), (t = null);
                              })
                              .exec();
                          });
                        },
                      },
                      {
                        key: "toggleHandler",
                        value: function () {
                          var e = this.state.toggleParams.toggleFlag;
                          this.setData({
                            toggleParams: {
                              toggleFlag: 0 === e ? 1 : 0,
                              toggleShow: !0,
                            },
                          });
                        },
                      },
                      {
                        key: "checkRemarkToggle",
                        value: function () {
                          var e = this;
                          Promise.all([
                            this.getElementWidth(
                              "#remark-wrapper-".concat(this.state.order)
                            ),
                            this.getElementWidth("#desc"),
                          ]).then(function (t) {
                            t[0] - t[1] < 10 &&
                              e.setState({
                                toggleParams: { toggleFlag: 1, toggleShow: !0 },
                              });
                          });
                        },
                      },
                      {
                        key: "initToggle",
                        value: function () {
                          var e = this.props.info;
                          e.couponDetail &&
                            e.couponDetail.split("；").length > 1 &&
                            this.setState({
                              toggleParams: { toggleFlag: 1, toggleShow: !0 },
                            });
                        },
                      },
                      {
                        key: "handleRadioChange",
                        value: function (e) {
                          this.props.onClickRadio(e);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.ite,
                            o = t.order,
                            n = t.radioValue,
                            i = t.toggleParams,
                            r = t.enableSelected;
                          return (0, k.tZ)(p.View, {
                            className: "bus-coupon-item ".concat(
                              r ? "" : "disable"
                            ),
                            children: (0, k.tZ)(p.View, {
                              className: "list-item",
                              children:
                                a &&
                                (0, k.BX)(p.Block, {
                                  children: [
                                    (0, k.BX)(p.View, {
                                      className: "detail",
                                      children: [
                                        (0, k.BX)(p.View, {
                                          className: "price",
                                          children: [
                                            (0, k.tZ)(p.Text, {
                                              className: "pre",
                                              children: "¥",
                                            }),
                                            a.couponPrice,
                                          ],
                                        }),
                                        (0, k.BX)(p.View, {
                                          className: "info",
                                          children: [
                                            (0, k.tZ)(p.View, {
                                              className: "affix",
                                              children: a.couponName,
                                            }),
                                            (0, k.BX)(p.View, {
                                              className: "expires",
                                              children: [
                                                "有效期",
                                                a.couponStartDate,
                                                "至",
                                                a.couponEndDate,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, k.tZ)(p.View, {
                                          className: "choose",
                                          "data-value": o,
                                          id: "AdAA",
                                          onClick: function () {
                                            e.handleRadioChange(o);
                                          },
                                          children: (0, k.tZ)(p.Text, {
                                            className: "ifont-radio".concat(
                                              n === o ? "ed" : "",
                                              " iconfont"
                                            ),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, k.BX)(p.View, {
                                      id: "remark-wrapper-".concat(o),
                                      className: "remark",
                                      onClick: this.toggleHandler.bind(this),
                                      children: [
                                        i.toggleShow &&
                                          (0, k.tZ)(p.Text, {
                                            className:
                                              "ifont-arr iconfont ".concat(
                                                1 === i.toggleFlag
                                                  ? "hide"
                                                  : "show"
                                              ),
                                          }),
                                        (0, k.tZ)(p.View, {
                                          id: "desc",
                                          className: "desc ".concat(
                                            1 === i.toggleFlag ? "ellipsis" : ""
                                          ),
                                          children: a.couponDetail
                                            .split("；")
                                            .map(function (e, t) {
                                              return (0,
                                              k.tZ)(p.View, { className: "line", children: e }, t);
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            }),
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(d.default.Component))
              ) || o,
            S = a(5830),
            w =
              (0, v.h)()(
                (n = (function (e) {
                  (0, s.Z)(a, e);
                  var t = (0, u.Z)(a);
                  function a(e) {
                    var o;
                    return (
                      (0, c.Z)(this, a),
                      ((o = t.call(this, e)).pageId = "10650059817"),
                      (o.state = {
                        availCouponList: [],
                        utmSource: S.c.getUtmSource(),
                      }),
                      o
                    );
                  }
                  return (
                    (0, l.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = -1;
                          g().setNavigationBarTitle({ title: "选择优惠券" }),
                            (0, m.setNavigationBarColor)({
                              frontColor: "#000000",
                              backgroundColor: "#ffffff",
                            });
                          var t = (0, h.getCurrentInstance)().router.params.data
                              .couponInfo,
                            a = (0, h.getCurrentInstance)().router.params.data
                              .isOnePassengerAdded,
                            o = (0, h.getCurrentInstance)().router.params.data
                              .couponCodeSelect,
                            n = (0, h.getCurrentInstance)().router.params.data
                              .feeTotal,
                            i = (0, h.getCurrentInstance)().router.params.data
                              .ticketTotal,
                            r = (0, h.getCurrentInstance)().router.params.data
                              .utmSource,
                            c = t.filter(function (e) {
                              return 0 === e.couponState;
                            });
                          o &&
                            t.forEach(function (t, a) {
                              t.couponCode !== o || (e = a);
                            }),
                            this.setState({
                              availCouponList: c,
                              isOnePassengerAdded: a,
                              radioValue: e,
                              feeTotal: n,
                              ticketTotal: i,
                              utmSource: r,
                            });
                        },
                      },
                      {
                        key: "handleRadioChange",
                        value: function (e) {
                          var t,
                            a = this.state.isOnePassengerAdded,
                            o = e.currentTarget.dataset.value;
                          if (!a)
                            return g().showModal({
                              content: "请选择乘客",
                              confirmText: "确定",
                              showCancel: !1,
                            });
                          this.doBusTraceInfo("noCoupon", "不使用优惠券"),
                            (t = {
                              couponName: "不使用优惠券",
                              couponRealPrice: 0,
                              isNotUseCoupon: !0,
                            }),
                            this.setState({ radioValue: o }),
                            this.invokeCallback(t),
                            this.navigateBack();
                        },
                      },
                      {
                        key: "doBusTraceInfo",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "";
                          this.ubtTrace("BUS_Bus_C_click", {
                            pageId: this.pageId,
                            type: f.default.jetpack || "zx",
                            typeSnd: e,
                            utmSource: this.state.utmSource,
                            comment: t,
                          });
                        },
                      },
                      {
                        key: "selectMaxCoupon",
                        value: function (e, t, a) {
                          var o =
                              !(
                                arguments.length > 3 && void 0 !== arguments[3]
                              ) || arguments[3],
                            n = {};
                          if (
                            (t.deductionStrategy.sort(function (e, t) {
                              return e.deductionAmount < t.deductionAmount
                                ? 1
                                : e.deductionAmount > t.deductionAmount
                                ? -1
                                : e.deductionAmount == t.deductionAmount
                                ? 0
                                : void 0;
                            }),
                            3 == t.deductionStrategyTypeID)
                          )
                            for (
                              var i = 0;
                              i < t.deductionStrategy.length;
                              i++
                            ) {
                              var c = t.deductionStrategy[i],
                                l =
                                  1 == c.deductionType
                                    ? (c.deductionAmount * e) / 100
                                    : c.deductionAmount;
                              if (
                                i === t.deductionStrategy.length - 1 &&
                                e < c.startAmount
                              ) {
                                o &&
                                  g().showModal({
                                    title: "提示",
                                    content: "该优惠券不满足使用条件",
                                    showCancel: !1,
                                  });
                                break;
                              }
                              if (e >= c.startAmount) {
                                n = (0, r.Z)(
                                  (0, r.Z)({}, t),
                                  {},
                                  { couponRealPrice: l }
                                );
                                break;
                              }
                            }
                          else if (1 == t.deductionStrategyTypeID) {
                            if (t.couponPrice > a)
                              return (
                                o &&
                                  g().showModal({
                                    title: "提示",
                                    content: "该优惠券不满足使用条件",
                                    showCancel: !1,
                                  }),
                                n
                              );
                            n = (0, r.Z)(
                              (0, r.Z)({}, t),
                              {},
                              { couponRealPrice: t.couponPrice }
                            );
                          } else
                            2 == t.deductionStrategyTypeID &&
                              (n = (0, r.Z)(
                                (0, r.Z)({}, t),
                                {},
                                { couponRealPrice: t.couponPrice * e }
                              ));
                          return n;
                        },
                      },
                      {
                        key: "handleClickRadio",
                        value: function (e) {
                          var t = this.state,
                            a = t.availCouponList,
                            o = t.isOnePassengerAdded,
                            n = t.feeTotal,
                            i = t.ticketTotal,
                            r = a[e];
                          if (!o)
                            return g().showModal({
                              content: "请选择乘客",
                              confirmText: "确定",
                              showCancel: !1,
                            });
                          var c = this.selectMaxCoupon(n, r, i);
                          Object.keys(c).length <= 0 ||
                            (this.doBusTraceInfo("couponList", "券选择列表"),
                            this.setState({ radioValue: e }),
                            this.invokeCallback(c),
                            this.navigateBack());
                        },
                      },
                      {
                        key: "enableSelected",
                        value: function (e) {
                          var t = this.state,
                            a = t.availCouponList,
                            o = t.isOnePassengerAdded,
                            n = t.feeTotal,
                            i = t.ticketTotal,
                            r = a[e];
                          return (
                            o &&
                            Object.keys(this.selectMaxCoupon(n, r, i, !1))
                              .length > 0
                          );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.availCouponList,
                            o = t.radioValue;
                          return (0, k.BX)(p.View, {
                            className: "book-coupon",
                            children: [
                              (0, k.BX)(p.View, {
                                className: "condition",
                                id: "AdAB",
                                onClick: this.handleRadioChange.bind(this),
                                "data-value": -1,
                                children: [
                                  (0, k.tZ)(p.Text, {
                                    children: "不使用优惠券",
                                  }),
                                  (0, k.tZ)(p.Text, {
                                    className: "select ifont-radio".concat(
                                      -1 === o ? "ed" : "",
                                      " iconfont"
                                    ),
                                  }),
                                ],
                              }),
                              (0, k.tZ)(p.View, {
                                className: "list",
                                children: a.map(function (t, a) {
                                  return (0,
                                  k.tZ)(C, { info: t, enableSelected: e.enableSelected(a), order: a, radioValue: o, onClickRadio: e.handleClickRadio.bind(e) }, t.couponId);
                                }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(d.default.Component))
              ) || n;
          Page(
            (0, i.createPageConfig)(
              w,
              "pages/bus/bookcoupon/bookcoupon",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [86230, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(12181);
        }),
          e.O();
      },
    ]);
})();
