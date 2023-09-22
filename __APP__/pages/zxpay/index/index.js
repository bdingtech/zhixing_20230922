!(function () {
  "use strict";
  require("./sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("./sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("./sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [30886],
      {
        64109: function (e, t, a) {
          var o,
            n = a(32180),
            i = a(57042),
            r = a(24460),
            s = a(21867),
            c = a(86066),
            u = a(52500),
            d = a(71515),
            l = a(92954),
            f = a.n(l),
            h = a(48792),
            y = a.n(h),
            g = a(79792),
            p = a(42151),
            P = a(18783),
            m = a(49120),
            w = a(3197),
            v = a(93761),
            T = a(2809),
            M = a(90129),
            A = {
              transNumToFixedArray: function (e, t) {
                if (!(e += "")) return "";
                if (!/^\d*\.*\d+$/.test(e)) return e;
                t = t || 2;
                var a = e.split("."),
                  o = "",
                  n = 0;
                a.length > 1 && ((n = a[1].length), (o = a[1]));
                for (var i = 0; i < t - n; i++) o += "0";
                return (a[1] = o), a;
              },
              appendQuery: function (e, t) {
                return (e + "&" + t || "").replace(/[&?]{1,2}/, "?");
              },
              getQuery: function (e, t) {
                var a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                  o = t.match(a);
                return null != o ? unescape(o[2]) : null;
              },
              pageQueryStr: function (e) {
                return Object.keys(e)
                  .map(function (t) {
                    var a = encodeURIComponent(e[t]);
                    return (
                      "undefined" === a && (a = ""),
                      encodeURIComponent(t) + "=" + a
                    );
                  })
                  .join("&");
              },
              Base64Decode: function (e) {
                var t = {
                  key: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                  atob: function (e, a) {
                    for (
                      var o = (a = a || {}).key || t.key, n = {}, i = 0;
                      i < o.length;
                      i++
                    )
                      n[o[i]] = i;
                    var r = [];
                    for (i = 0; i < e.length; ) {
                      var s = n[e[i++]],
                        c = n[e[i++]],
                        u = n[e[i++]],
                        d = n[e[i++]];
                      r.push((s << 2) | (c >> 4)),
                        64 != u && r.push(((15 & c) << 4) | (u >> 2)),
                        64 != d && r.push(((3 & u) << 6) | d);
                    }
                    return a.charCodeArray
                      ? r
                      : (function (e) {
                          for (var t = "", a = 0; a < e.length; a++)
                            t += String.fromCharCode(e[a]);
                          return t;
                        })(r);
                  },
                };
                return decodeURIComponent(escape(t.atob(e)));
              },
              checkResponseStatus: function (e) {
                var t = e.ResponseStatus,
                  a = t.Ack,
                  o = t.Errors;
                if ("Success" === a) return { type: "success", message: "" };
                if ("Warning" === a) return { type: "warning", message: "" };
                if ("Failure" === a) {
                  var n = (0, M.Z)(o, 1)[0];
                  return n
                    ? [
                        "AccountsMobileRequestFilterException",
                        "MobileRequestFilterException",
                      ].some(function (e) {
                        return e === n.ErrorCode;
                      })
                      ? { type: "failure", message: "no login" }
                      : { type: "failure", message: "others" }
                    : { type: "failure", message: "unknown" };
                }
              },
            },
            k = a(81957),
            I = a(48813),
            B = a(32180).window,
            b = g.default.isBaidu,
            C = g.default.isH5
              ? "h5CashDesk"
              : b || g.default.isTT
              ? "baiduMiniPro"
              : g.default.isAlipay
              ? "alipayMiniPro"
              : "weChatMiniPro",
            N = "网络错误，请稍候再试",
            q = {
              pageId: g.default.isTieyou ? "10650043456" : "10650043454",
              data: {
                isTieyou: g.default.isTieyou,
                orderNumber: "",
                goodsId: "",
                subTitle: "",
                orderFee: 0,
                paymentTypes: [],
              },
              onLoad: function (e) {
                var t = e.orderNumber,
                  a = void 0 === t ? "" : t,
                  o = e.goodsId,
                  n = e.title,
                  i = void 0 === n ? "" : n,
                  r = e.waitSeconds,
                  s = void 0 === r ? "10" : r,
                  c = e.errorDelta,
                  u = void 0 === c ? "1" : c,
                  d = e.errorUrl,
                  l = void 0 === d ? "" : d,
                  h = e.successDelta,
                  y = void 0 === h ? "1" : h,
                  m = e.successUrl,
                  w = void 0 === m ? "" : m,
                  v = e.successConfirmText,
                  T = void 0 === v ? "支付成功" : v,
                  M = e.quickPay,
                  A = void 0 !== M && M;
                console.log("successUrl\n", decodeURIComponent(w)),
                  this.setData({
                    orderNumber: a,
                    goodsId: parseInt(o),
                    title: i || "订单信息",
                    successUrl: w ? decodeURIComponent(w) : "",
                    successDelta: w ? parseInt(y) : 0,
                    errorUrl: l ? decodeURIComponent(l) : "",
                    errorDelta: w ? parseInt(u) : 0,
                    waitSeconds: parseInt(s) < 10 ? 10 : parseInt(s),
                    successConfirmText: T || "支付成功",
                    quickPay: "1" == A,
                  });
                try {
                  P.ZP.openid ||
                    "fat" !== p.fv.env ||
                    (P.ZP.openid = "oSa4I0aI7YKG6b3vZiZtgN-NtiyA");
                } catch (e) {
                  console.log(e);
                }
                (this.isNotified = !1),
                  this.getPayTypes(),
                  !g.default.isH5 && f().hideShareMenu && f().hideShareMenu();
              },
              onShow: function () {
                b &&
                  this.isPaid &&
                  ((this.isPaid = !1),
                  this.data.quickPay
                    ? l.eventCenter.trigger(
                        "PAY_RESULT_".concat(this.data.goodsId),
                        !1
                      )
                    : this.getWechatOrAlipayPayResult());
              },
              onUnload: function () {
                this.isNotified ||
                  ((this.isNotified = !0),
                  l.eventCenter.trigger(
                    "PAY_RESULT_".concat(this.data.goodsId),
                    !1
                  ));
              },
              getPayTypes: function () {
                var e = this,
                  t = this.data,
                  a = t.orderNumber,
                  o = t.goodsId,
                  n = { type: C, orderNumber: a, goodsId: parseInt(o) };
                (0, m.showLoading)("获取支付方式"),
                  (P.ZP.isLogin ? w.qU : w.MY)(n)
                    .then(
                      function (t) {
                        if ("no login" === A.checkResponseStatus(t).message)
                          return e.doLogin(function () {
                            e.getPayTypes();
                          });
                        var a = t.resultCode,
                          o = t.resultMessage,
                          n = t.title,
                          i = t.orderFee,
                          r = t.paymentTypes || [];
                        if (1 !== a)
                          return e.showPayModal(o || N, function () {
                            e.onBackAction();
                          });
                        e.setData({
                          orderTitle: n,
                          orderFee: i,
                          paymentTypes: r,
                        });
                      },
                      function (e) {
                        console.log(e);
                      }
                    )
                    .finally(function () {
                      (0, m.hideLoading)();
                    });
              },
              getOrderPayInfo: function (e) {
                if (e) {
                  var t = this.data,
                    a = t.orderNumber,
                    o = t.goodsId,
                    n = T.ZP.isBaiduMap
                      ? {}
                      : {
                          alipay: "baiduAppAlipay",
                          weixinwap: "baiduAppWechatWap",
                        },
                    i = (b && n[e]) || e;
                  return (P.ZP.isLogin ? w.c5 : w.Qy)({
                    orderNumber: a,
                    goodsId: o,
                    payType: i,
                  });
                }
              },
              handlePayClickAction: function (e) {
                var t = this,
                  a = e.currentTarget.dataset.type;
                console.log(a),
                  (0, m.showLoading)("支付连接中"),
                  this.getOrderPayInfo(a).then(
                    function (e) {
                      (0, m.hideLoading)();
                      var o = e.resultCode,
                        n = e.resultMessage,
                        i = e.prePayToken,
                        r = e.payResultMessage;
                      if ((console.log(e), 1 !== o))
                        return t.showPayModal(n || N, function () {
                          t.onBackAction();
                        });
                      1 === o && e.prePayToken
                        ? b
                          ? "alipay" === a
                            ? T.ZP.isBaiduMap
                              ? t.requestAliPayForBDMap(i)
                              : t.requestAliDirectPayForBaidu(i)
                            : "weixinwap" === a &&
                              (T.ZP.isBaiduMap
                                ? t.requestWechatPayForBaiduMap(i)
                                : t.requestWechatDirectPayForBaidu(i))
                          : g.default.isH5
                          ? (B.location.href = i)
                          : g.default.isTT
                          ? (0, v.jc)(i)
                              .then(function () {
                                var e = t.data.successConfirmText;
                                t.showPayModal(e, function () {
                                  t.onRedirectAction();
                                });
                              })
                              .catch(function (e) {
                                t.showPayModal(
                                  (null == e ? void 0 : e.errorMsg) ||
                                    "支付失败，请重试"
                                );
                              })
                          : g.default.isAlipay
                          ? (0, v.Yr)(i)
                              .then(function () {
                                var e = t.data.successConfirmText;
                                t.showPayModal(e, function () {
                                  t.onRedirectAction();
                                });
                              })
                              .catch(function (e) {
                                t.showPayModal(
                                  (null == e ? void 0 : e.errorMsg) ||
                                    "支付失败，请重试"
                                );
                              })
                          : (0, v.a0)(i)
                              .then(function () {
                                var e = t.data.successConfirmText;
                                t.showPayModal(e, function () {
                                  t.onRedirectAction();
                                });
                              })
                              .catch(function (e) {
                                t.showPayModal(
                                  (null == e ? void 0 : e.errorMsg) ||
                                    "支付失败，请重试"
                                );
                              })
                        : t.showPayModal(r);
                    },
                    function () {
                      (0, m.hideLoading)();
                    }
                  );
              },
              requestAliPayForBDMap: function (e) {
                console.log("==> requestAliPay swan alipay login", e),
                  (this.isPaid = !0),
                  swan.requestAliPayment({ orderInfo: e });
              },
              requestAliDirectPayForBaidu: function (e) {
                console.log("==> Baidu swan alipay login", e),
                  (this.isPaid = !0),
                  swan.requestThirdPayment({ orderInfo: JSON.parse(e) });
              },
              requestWechatPayForBaiduMap: function (e) {
                var t = this;
                console.log(
                  "==> requestWechatPayForBaiduMap swan wechat login",
                  e
                );
                try {
                  var a = e.split("?"),
                    o = a[0],
                    n = a[1] || "",
                    i = A.getQuery("goodsId", n);
                  (this.isPaid = !0),
                    swan.requestWeChatPayment({
                      url: o,
                      extraData: { goodsId: i },
                      success: function (e) {
                        console.log("wechat pay success: ", e),
                          t.data.quickPay ||
                            setTimeout(function () {
                              t.showPayModal("请在微信中完成支付", function () {
                                t.getWechatOrAlipayPayResult();
                              });
                            }, 2e3);
                      },
                      fail: function (e) {
                        console.log("wechat pay fail: ", e),
                          t.data.quickPay ||
                            t.showPayToast("微信H5支付失败，请重试！");
                      },
                    });
                } catch (e) {}
              },
              requestWechatDirectPayForBaidu: function (e) {
                var t = this;
                console.log(
                  "==> requestWechatDirectPayForBaidu swan wechat login",
                  e
                ),
                  (this.isPaid = !0),
                  swan.requestThirdPayment({
                    orderInfo: JSON.parse(e),
                    success: function (e) {
                      console.log("wechat pay success: ", e),
                        t.data.quickPay ||
                          setTimeout(function () {
                            t.showPayModal("请在微信中完成支付", function () {
                              t.getWechatOrAlipayPayResult();
                            });
                          }, 2e3);
                    },
                    fail: function (e) {
                      console.error("wechat pay fail: ", e),
                        t.data.quickPay ||
                          t.showPayToast("微信H5支付失败，请重试！");
                    },
                  });
              },
              getWechatOrAlipayPayResult: function () {
                var e = this,
                  t = this.data,
                  a = t.orderNumber,
                  o = t.goodsId;
                if (!t.quickPay) {
                  var n = { orderNumber: a, goodsId: o };
                  (P.ZP.isLogin ? w.b4 : w.Qu)(n).then(
                    function (t) {
                      var a = t || {},
                        o = a.resultCode,
                        n = a.paymentState;
                      1 === o && 1 === n
                        ? e.showPayModal("支付成功", function () {
                            e.onRedirectAction();
                          })
                        : e.showPayModal("支付失败", function () {
                            e.onBackAction();
                          });
                    },
                    function () {
                      e.showPayModal("网络不给力，稍后再试");
                    }
                  );
                }
              },
              showPayModal: function (e, t) {
                var a =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                f().showModal({
                  title: "提示",
                  content: e || "",
                  showCancel: a,
                  success: function (e) {
                    if (e && e.confirm) return t && t();
                  },
                });
              },
              showPayToast: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "normal",
                  a = arguments.length > 2 ? arguments[2] : void 0,
                  o = arguments.length > 3 ? arguments[3] : void 0;
                f().showToast({
                  title: e || "网络不给力",
                  icon: t || "normal",
                  duration: a || 2e3,
                  complete: o || function () {},
                });
              },
              onBackAction: function () {
                var e = this.data,
                  t = e.errorUrl,
                  a = e.errorDelta;
                return 0 === a
                  ? ((this.isNotified = !0),
                    this.navigateBack(),
                    void l.eventCenter.trigger(
                      "PAY_RESULT_".concat(this.data.goodsId),
                      !1
                    ))
                  : t
                  ? (console.log(t), void f().reLaunch({ url: t }))
                  : f().navigateBack({ delta: a });
              },
              onRedirectAction: function () {
                var e = this.data,
                  t = e.successUrl,
                  a = e.successDelta,
                  o = e.waitSeconds;
                if (!t && 0 == a)
                  return (
                    (this.isNotified = !0),
                    this.navigateBack(),
                    void l.eventCenter.trigger(
                      "PAY_RESULT_".concat(this.data.goodsId),
                      !0
                    )
                  );
                (0, m.showLoading)("获取订单状态中"),
                  setTimeout(function () {
                    if (((0, m.hideLoading)(), !t))
                      return f().navigateBack({ delta: a });
                    console.log(t), f().reLaunch({ url: t });
                  }, o);
              },
              doLogin: function (e) {
                P.ZP.doLogin().then(
                  function () {
                    e && e();
                  },
                  function () {
                    f().showToast({
                      title: "取消登录",
                      icon: "none",
                      duration: 1500,
                    });
                  }
                );
              },
            },
            R =
              (0, k.h)()(
                (o =
                  y()(q)(
                    (o = (function (e) {
                      (0, s.Z)(a, e);
                      var t = (0, c.Z)(a);
                      function a() {
                        return (0, i.Z)(this, a), t.apply(this, arguments);
                      }
                      return (
                        (0, r.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                a = t.orderFee,
                                o = t.orderTitle,
                                n = t.orderSubtitle,
                                i = t.paymentTypes;
                              return (0, I.BX)(d.View, {
                                className: "page",
                                children: [
                                  (0, I.tZ)(d.View, { className: "tip" }),
                                  (0, I.BX)(d.View, {
                                    className: "detail",
                                    children: [
                                      (0, I.tZ)(d.View, {
                                        className: "price torage",
                                        children: a,
                                      }),
                                      (0, I.BX)(d.View, {
                                        className: "order",
                                        children: [
                                          (0, I.tZ)(d.View, {
                                            className: "title",
                                            children: o,
                                          }),
                                          n &&
                                            (0, I.tZ)(d.View, {
                                              className: "subtitle",
                                              children: n,
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, I.tZ)(d.View, {
                                    className: "pay",
                                    children: i.map(function (t, a) {
                                      return (0,
                                      I.BX)(d.View, { className: "raw", "data-type": t.code, id: "ABAB", onClick: e.handlePayClickAction, children: [(0, I.tZ)(d.Image, { className: "img", src: t.icon }), (0, I.tZ)(d.View, { className: "txt", children: (0, I.tZ)(d.View, { className: "name", children: t.title }) }), (0, I.BX)(d.View, { className: "pay-btn", children: ["去付款", (0, I.tZ)(d.Text, { className: "iconfont ifont-arr" })] })] }, a);
                                    }),
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        a
                      );
                    })(u.default.Component))
                  ) || o)
              ) || o;
          Page(
            (0, n.createPageConfig)(
              R,
              "pages/zxpay/index/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "订单支付",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                backgroundColor: "#fff",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [3322, 36332, 95854, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(64109);
        }),
          e.O();
      },
    ]);
})();
