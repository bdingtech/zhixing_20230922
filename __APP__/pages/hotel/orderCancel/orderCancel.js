!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [20585],
      {
        1303: function (e, n, a) {
          var t,
            r = a(32180),
            l = a(57042),
            i = a(24460),
            c = a(81876),
            o = a(21867),
            s = a(86066),
            d = a(52500),
            u = a(71515),
            h = a(92954),
            p = a.n(h),
            f = a(81957),
            m = a(44778),
            w = a(65573),
            g = a(73130),
            v = a(298),
            Z = a(49120),
            N = a(90668),
            C = a(79404),
            D = a(92667),
            y = {
              name: "page",
              state: {
                bdMapHeadExtensions: [],
                orderDetail: {},
                orderData: {},
                cancelReason: "",
                showCancelPolicy: !1,
              },
              reducers: {
                set: function (e, n) {
                  var a,
                    t,
                    r = n.$instance,
                    l =
                      null == r || null === (a = r.router) || void 0 === a
                        ? void 0
                        : a.params,
                    i = (0, v.Z)({}, e),
                    c = (0, N.X5)(null == l ? void 0 : l.data);
                  return (
                    null != c &&
                      c.orderDetailData &&
                      (i.orderDetail = c.orderDetailData),
                    null != c &&
                      null !== (t = c.bdMapHeadExtensions) &&
                      void 0 !== t &&
                      t.length &&
                      (i.bdMapHeadExtensions = c.bdMapHeadExtensions),
                    (0, v.Z)((0, v.Z)({}, i), n)
                  );
                },
                setState: function (e, n) {
                  return (0, v.Z)((0, v.Z)({}, e), n);
                },
              },
              effects: function (e) {
                return {
                  getOrderData: function (n, a) {
                    var t = a.page.orderDetail,
                      r = t.orderState,
                      l = t.orderPrice,
                      i = t.ladderDeductionList,
                      c = t.payType,
                      o = t.anticipationType,
                      s = t.noWorryCancelFlag,
                      d = r >= 6 && r <= 9,
                      u = Date.now(),
                      h = "",
                      p = "",
                      f = 0,
                      m = 0;
                    if (
                      (2 === c &&
                        ((h = "免费取消"), (p = "入住前可随时免费取消!")),
                      !d && null != i && i.length)
                    )
                      for (var w = 0; w < i.length; w++) {
                        var g = i[w] || {},
                          v = g.cancelLastTime,
                          Z = g.cancelTimeDisplay,
                          C = g.deductionPrice,
                          D = g.cancelPriceRemark;
                        if ((0, N.Q6)(v))
                          (h = "不可取消"), (p = D), (f = l), (m = 3);
                        else {
                          if (
                            new Date(v.replace(/-/g, "/")).getTime() - u >
                            0
                          ) {
                            0 === C
                              ? ((h = "免费取消"),
                                (p = Z + D),
                                (f = C),
                                (m = 1))
                              : C >= l
                              ? ((h = "不可取消"), (p = D), (f = C), (m = 3))
                              : ((h = "有条件取消"),
                                (p = Z + " 取消订单仅需支付¥" + C),
                                (f = C),
                                (m = 2));
                            break;
                          }
                          w === i.length - 1 &&
                            ((h = "不可取消"), (p = D), (f = l), (m = 3));
                        }
                      }
                    1 === r &&
                      ((h = "免费取消"),
                      (p = "当前订单尚未支付，可以免费取消")),
                      s &&
                        ((h = "免费取消"),
                        (p = "此单为安心取消订单，平台为您免费取消"),
                        (f = 0),
                        (m = 2)),
                      e.page.setState({
                        orderData: {
                          payType: c,
                          orderType: m,
                          orderState: r,
                          isCheckinFirst: 1 === o,
                          orderPrice: l,
                          deductionPrice: f,
                          refundPrice: l - f,
                          title: h,
                          desc: p,
                        },
                      });
                  },
                  openCancelPolicyPop: function () {
                    e.page.setState({ showCancelPolicy: !0 });
                  },
                  onCloseCancelPolicy: function () {
                    e.page.setState({ showCancelPolicy: !1 });
                  },
                  setCancelReason: function (n, a) {
                    var t = a.page.cancelReason === n ? "" : n;
                    e.page.setState({ cancelReason: t });
                  },
                  cancelOrderRequest: function (e, n) {
                    var a = n.page,
                      t = a.cancelReason,
                      r = a.orderDetail,
                      l = r.orderNumber,
                      i = void 0 === l ? "" : l,
                      c = r.consultCancelInfo;
                    if (!t) return (0, Z.showToast)("请选择(填写)取消原因");
                    if (t.length > 200)
                      return (0, Z.showToast)("最多可填写200个字");
                    var o = {
                      data: {
                        orderNumber: i,
                        reason: t,
                        clientVersion: C.Z.clientVersion,
                        consultCancelFlag: null != c && c.flag ? 1 : 0,
                      },
                    };
                    (0, Z.showToast)(
                      null != c && c.flag ? "提交申请中" : "取消订单中.."
                    ),
                      (0, D.o$)(o)
                        .then(function (e) {
                          if (e.resultCode < 1)
                            return (0, Z.showToast)(
                              e.resultMessage || "取消失败，请重试"
                            );
                          setTimeout(function () {
                            (0, Z.showToast)(
                              null != c && c.flag
                                ? "协商取消申请已提交成功"
                                : "取消成功"
                            ),
                              p().navigateBack();
                          }, 1e3);
                        })
                        .catch(function () {
                          (0, Z.showToast)("取消失败，请重试"),
                            p().navigateBack();
                        });
                  },
                };
              },
            },
            V = a(48813),
            T = (0, w.$j)(
              function (e) {
                return {
                  orderData: e.page.orderData,
                  orderDetail: e.page.orderDetail,
                };
              },
              function (e) {
                return { openCancelPolicyPop: e.page.openCancelPolicyPop };
              }
            )(function (e) {
              var n,
                a,
                t,
                r = e.orderDetail,
                l = r.noWorryCancelFlag,
                i = r.pointCancelPolicyList,
                c = r.consultCancelInfo,
                o = e.orderData,
                s = o.title,
                d = o.payType,
                h = o.orderState,
                p = e.openCancelPolicyPop,
                f = s,
                m = s,
                w = "",
                g = "";
              if ((null == i ? void 0 : i.length) > 1)
                for (var v = 0; v < i.length; v++)
                  2 === i[v].type &&
                    (f = i[v].title.replace("·", "") + "·" + i[v].desc);
              return (
                null != c &&
                  null !== (n = c.headInfo) &&
                  void 0 !== n &&
                  n.title &&
                  ((m = c.headInfo.title),
                  (f = c.headInfo.subTitle),
                  (w = c.headInfo.iconUrl)),
                null != c &&
                  null !== (a = c.headInfo) &&
                  void 0 !== a &&
                  a.context &&
                  (g =
                    null == c || null === (t = c.headInfo) || void 0 === t
                      ? void 0
                      : t.context),
                (0, V.BX)(V.HY, {
                  children: [
                    (0, V.BX)(u.View, {
                      className: "oc-header",
                      children: [
                        w &&
                          (0, V.BX)(u.View, {
                            className: "icon-wrap",
                            children: [
                              (0, V.tZ)(u.Image, {
                                className: "avatar",
                                src: w,
                              }),
                              (0, V.tZ)(u.View, {
                                className: "name",
                                children: "酒店管家",
                              }),
                            ],
                          }),
                        (0, V.BX)(u.View, {
                          className: "tit-wrap",
                          children: [
                            (0, V.tZ)(u.View, {
                              className: "tit",
                              children: m,
                            }),
                            (0, V.BX)(u.View, {
                              className: "wrap",
                              children: [
                                (0, V.tZ)(u.View, {
                                  className: "desc",
                                  children: f,
                                }),
                                2 !== d &&
                                  1 !== h &&
                                  !l &&
                                  (0, V.tZ)(u.View, {
                                    className: "clp",
                                    id: "AXGk",
                                    onClick: p,
                                    children: "查看取消政策",
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    g &&
                      (0, V.tZ)(u.View, {
                        className: "oc-notice",
                        children: g,
                      }),
                  ],
                })
              );
            }),
            P = a(90129),
            X = (0, w.$j)(
              function (e) {
                return {
                  cancelReason: e.page.cancelReason,
                  orderDetail: e.page.orderDetail,
                };
              },
              function (e) {
                return { setCancelReason: e.page.setCancelReason };
              }
            )(function (e) {
              var n = e.cancelReason,
                a = e.orderDetail.cancelReasonList,
                t = e.setCancelReason,
                r = (0, d.useState)(!1),
                l = (0, P.Z)(r, 2),
                i = l[0],
                c = l[1],
                o = (0, d.useRef)({}),
                s = (0, d.useCallback)(
                  function (e) {
                    t(e.detail.value);
                  },
                  [t]
                ),
                h = (0, d.useCallback)(
                  function (e) {
                    if ("其他" !== e) return c(!1), void t(e);
                    t(""), c(!0);
                  },
                  [t]
                );
              return (0, V.BX)(u.View, {
                className: "oc-wrap reason",
                children: [
                  (0, V.BX)(u.View, {
                    className: "tit-wrap",
                    children: [
                      (0, V.tZ)(u.View, {
                        className: "tit",
                        children: "您为何要取消订单？",
                      }),
                      (0, V.tZ)(u.View, {
                        className: "desc",
                        children: "准确说明取消原因能增加协商申请的通过几率哦~",
                      }),
                    ],
                  }),
                  (0, V.tZ)(u.View, {
                    className: "reasons",
                    children:
                      null == a
                        ? void 0
                        : a.map(function (e, a) {
                            var t = (i && "其他" === e) || n === e,
                              r = "item".concat((0, N.gP)(t, " selected"));
                            return (0, V.tZ)(
                              u.View,
                              {
                                className: r,
                                id: "AXGj",
                                onClick: function () {
                                  return h(e);
                                },
                                children: e,
                              },
                              a
                            );
                          }),
                  }),
                  i &&
                    (0, V.tZ)(u.View, {
                      className: "other",
                      children: (0, V.tZ)(u.Textarea, {
                        placeholder: "取消原有描述，最多200个字",
                        placeholderClass: "other-holder",
                        cursorSpacing: 50,
                        onChange: s,
                        ref: function (e) {
                          return (o.current = e);
                        },
                      }),
                    }),
                ],
              });
            }),
            B = (0, w.$j)(
              function (e) {
                return {
                  cancelReason: e.page.cancelReason,
                  orderDetail: e.page.orderDetail,
                };
              },
              function (e) {
                return { cancelOrderRequest: e.page.cancelOrderRequest };
              }
            )(function (e) {
              var n = e.cancelOrderRequest,
                a = e.cancelReason,
                t = e.orderDetail.consultCancelInfo,
                r = (0, d.useState)(!0),
                l = (0, P.Z)(r, 2),
                i = l[0],
                c = l[1],
                o = "btn btn-primary".concat((0, N.gP)(!a, " disabled")),
                s = null != t && t.flag ? "提交申请" : "取消订单";
              return (0, V.BX)(u.View, {
                className: "oc-wrap botm",
                children: [
                  (null == t ? void 0 : t.remind) &&
                    i &&
                    (0, V.BX)(u.View, {
                      className: "notice",
                      children: [
                        (0, V.tZ)(u.Text, {
                          className: "ifont-detail iconfont",
                        }),
                        (0, V.tZ)(u.Text, {
                          children: null == t ? void 0 : t.remind,
                        }),
                        (0, V.tZ)(u.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/2023-3/xiaochengxu/gaunbi@3x.png",
                          className: "close",
                          id: "AXGh",
                          onClick: function () {
                            return c(!1);
                          },
                        }),
                      ],
                    }),
                  (0, V.tZ)(u.View, {
                    className: "btn-wrap",
                    children: (0, V.tZ)(u.View, {
                      className: o,
                      id: "AXGi",
                      onClick: n,
                      children: s,
                    }),
                  }),
                ],
              });
            }),
            x = { 1: "在线付", 2: "到店付", 3: "担保付" },
            b = function (e) {
              var n = e.orderData,
                a = n.payType,
                t = n.isCheckinFirst,
                r = n.orderState,
                l = t ? "先住后付" : x[a];
              return 2 === a || t || 1 === r
                ? (0, V.BX)(u.View, {
                    className: "item no-pay",
                    children: [
                      (0, V.BX)(u.View, {
                        className: "top",
                        children: [
                          (0, V.tZ)(u.View, {
                            className: "tit",
                            children: "订单未支付",
                          }),
                          (0, V.tZ)(u.View, {
                            className: "desc",
                            children: "无需退款",
                          }),
                        ],
                      }),
                      (0, V.BX)(u.View, {
                        className: "desc",
                        children: [
                          "预订时支付方式为",
                          l,
                          "，本单暂未支付。优惠券将原路退回至智行账户。",
                        ],
                      }),
                    ],
                  })
                : (0, V.tZ)(u.View, {});
            },
            k = function (e) {
              var n = e.orderData,
                a = n.orderType,
                t = n.payType,
                r = n.orderPrice,
                l = n.isCheckinFirst;
              if (2 !== a) return null;
              if (2 === t) return null;
              if (l) return null;
              var i = (0, N.gP)(3 === t, "(在线担保)");
              return (0, V.tZ)(u.View, {
                className: "item pay-number",
                children: (0, V.BX)(u.View, {
                  className: "top",
                  children: [
                    (0, V.BX)(u.View, {
                      className: "tit",
                      children: ["支付金额", i],
                    }),
                    (0, V.BX)(u.View, { className: "txt", children: ["¥", r] }),
                  ],
                }),
              });
            },
            R = function (e) {
              var n = e.orderData,
                a = n.orderState,
                t = n.orderType,
                r = n.deductionPrice;
              if (1 === t || 1 === a) return null;
              var l =
                r > 0
                  ? "按订单取消政策，每间收取¥".concat(
                      r,
                      "取消费用。扣款金额将从您授权账户中扣除。"
                    )
                  : "由于您的积分兑换免费取消权益该酒店已成功确认，该订单将不收取任何取消费用";
              return (0, V.BX)(u.View, {
                className: "item deduction",
                children: [
                  (0, V.BX)(u.View, {
                    className: "top",
                    children: [
                      (0, V.tZ)(u.Text, {
                        className: "tit",
                        children: "扣款金额",
                      }),
                      (0, V.BX)(u.Text, {
                        className: "txt",
                        children: ["-¥", r],
                      }),
                    ],
                  }),
                  (0, V.tZ)(u.View, { className: "desc", children: l }),
                ],
              });
            },
            I = function (e) {
              var n = e.orderData,
                a = n.refundPrice,
                t = n.orderType,
                r = n.payType,
                l = n.isCheckinFirst;
              return 1 === n.orderState || 2 === r
                ? null
                : (1 === t && 1 === r && !l) || (2 === t && !l) || 3 === r
                ? (0, V.BX)(u.View, {
                    className: "item refund",
                    children: [
                      (0, V.BX)(u.View, {
                        className: "top",
                        children: [
                          (0, V.tZ)(u.Text, {
                            className: "tit",
                            children: "退款金额",
                          }),
                          (0, V.BX)(u.Text, {
                            className: "price",
                            children: ["¥", a],
                          }),
                        ],
                      }),
                      (0, V.tZ)(u.View, {
                        className: "desc",
                        children:
                          "订单取消后，实际支付款项及优惠券将于1-5个工作日内原路退还，请注意查收。",
                      }),
                    ],
                  })
                : null;
            },
            S = (0, w.$j)(
              function (e) {
                return {
                  orderDetail: e.page.orderDetail,
                  orderData: e.page.orderData,
                };
              },
              function () {
                return {};
              }
            )(function (e) {
              var n,
                a = e.orderDetail,
                t = a.noWorryCancelFlag,
                r = a.consultCancelInfo,
                l = e.orderData,
                i = null == r ? void 0 : r.flag;
              return (0,
              V.BX)(u.View, { className: "oc-wrap center", children: [i && (0, V.BX)(u.View, { className: "item refund", children: [(0, V.BX)(u.View, { className: "top", children: [(0, V.tZ)(u.Text, { className: "tit", children: r.detailInfo.title }), r.detailInfo.subTitle && (0, V.tZ)(u.Text, { className: "orange", children: r.detailInfo.subTitle })] }), (null == r || null === (n = r.detailInfo) || void 0 === n ? void 0 : n.context) && (0, V.tZ)(u.View, { className: "desc", children: r.detailInfo.context })] }), !i && (0, V.BX)(V.HY, { children: [(0, V.tZ)(b, { orderData: l }), !t && (0, V.BX)(V.HY, { children: [(0, V.tZ)(k, { orderData: l }), (0, V.tZ)(R, { orderData: l })] }), (0, V.tZ)(I, { orderData: l })] })] });
            }),
            F = a(22276),
            O = a(62753),
            j = a(3414),
            H = a(47135),
            M = (0, w.$j)(
              function (e) {
                return {
                  orderDetail: e.page.orderDetail,
                  showCancelPolicy: e.page.showCancelPolicy,
                };
              },
              function (e) {
                return { onCloseCancelPolicy: e.page.onCloseCancelPolicy };
              }
            )(function (e) {
              var n = e.showCancelPolicy,
                a = e.orderDetail,
                t = a.cancelRemark,
                r = a.currentMemerInfo,
                l = a.ladderDeductionList,
                i = a.pointCancelPolicyList,
                c = e.onCloseCancelPolicy,
                o = (function (e) {
                  return null != e && e.length
                    ? e.map(function (e) {
                        return {
                          cancelPriceRemark: e.cancelPriceRemark,
                          cancelTimeDisplay: e.cancelTimeDisplay,
                        };
                      })
                    : [];
                })(l);
              return (0,
              V.BX)(O.Z, { show: n, onClose: c, children: [(0, V.tZ)(u.View, { className: "title", children: "取消政策" }), (0, V.BX)(u.View, { className: "drawer-content", children: [(0, V.tZ)(H.Z, { userVipInfo: r, list: i, style: (0, N.Zt)({ b: 10 }) }), (0, V.tZ)(j.Z, { data: (0, F.Z)(o) }), (0, V.tZ)(u.View, { className: "botm-desc", children: t })] })] });
            }),
            $ =
              (0, f.h)(!1, { usePageWrapper: !0 })(
                (t = (function (e) {
                  (0, o.Z)(a, e);
                  var n = (0, s.Z)(a);
                  function a(e) {
                    var t, r, i, o;
                    return (
                      (0, l.Z)(this, a),
                      ((o = n.call(this, e)).store = (0, m.S1)({
                        models: { page: y },
                      })),
                      null === (t = o.store) ||
                        void 0 === t ||
                        null === (r = t.dispatch) ||
                        void 0 === r ||
                        null === (i = r.page) ||
                        void 0 === i ||
                        i.set((0, c.Z)(o)),
                      o
                    );
                  }
                  return (
                    (0, i.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e, n, a;
                          null === (e = this.store) ||
                            void 0 === e ||
                            null === (n = e.dispatch) ||
                            void 0 === n ||
                            null === (a = n.page) ||
                            void 0 === a ||
                            a.set(this);
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e, n, a;
                          null === (e = this.store) ||
                            void 0 === e ||
                            null === (n = e.dispatch) ||
                            void 0 === n ||
                            null === (a = n.page) ||
                            void 0 === a ||
                            a.getOrderData();
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          return (0, V.tZ)(u.View, { children: "取消订单" });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, V.tZ)(w.zt, {
                            store: this.store,
                            children: (0, V.BX)(u.View, {
                              className: "ht-order-cancel",
                              children: [
                                (0, V.tZ)(T, {}),
                                (0, V.tZ)(S, {}),
                                (0, V.tZ)(X, {}),
                                (0, V.tZ)(B, {}),
                                (0, V.tZ)(M, {}),
                                (0, V.tZ)(g.Z, {}),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(d.Component))
              ) || t;
          Page(
            (0, r.createPageConfig)(
              $,
              "pages/hotel/orderCancel/orderCancel",
              { root: { cn: [] } },
              {
                navigationStyle: "custom",
                navigationBarTitleText: "取消订单",
                navigationBarFrontColor: "#ffffff",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (n) {
            return e((e.s = n));
          })(1303);
        }),
          e.O();
      },
    ]);
})();
