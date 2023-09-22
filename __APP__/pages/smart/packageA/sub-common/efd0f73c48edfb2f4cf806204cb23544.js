!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [3322],
    {
      93761: function (r, e, n) {
        n.d(e, {
          VQ: function () {
            return S;
          },
          Yr: function () {
            return P;
          },
          a0: function () {
            return I;
          },
          jc: function () {
            return N;
          },
        });
        var t = n(79301),
          o = n(95308),
          a = n(298),
          u = n(90129),
          s = n(92954),
          c = n.n(s),
          i = n(79792),
          d = n(3197),
          p = n(10741),
          f = n(46931),
          l = n(3106),
          y = n(43796),
          m = n(838),
          h = n(39173),
          g = n(79404),
          v = n(55916),
          w = n(38911),
          b = n(18783),
          Z = "网络错误，请稍候再试";
        function x(r, e, n) {
          var t = { orderNumber: r, goodsId: e, payType: n };
          return (0, d.c5)(t);
        }
        function k(r, e, n) {
          var t = {
            orderNumber: r,
            goodsId: e,
            payType: n,
            openid: b.ZP.openid || "",
          };
          return (0, d.jh)(t);
        }
        function I(r) {
          return new Promise(function (e, n) {
            var t, o, a;
            try {
              a = JSON.parse(r);
            } catch (r) {
              console.log(r), n({ errorMsg: "解析prePayToken失败: " + r });
            }
            a || n({ errorMsg: "无效的prePayToken" });
            var i,
              d = null,
              p =
                null === (t = (0, s.getCurrentInstance)()) ||
                void 0 === t ||
                null === (o = t.router) ||
                void 0 === o
                  ? void 0
                  : o.onShow,
              f = null,
              l = new Promise(function (r, e) {
                (i = r), (f = e);
              }),
              y = a,
              m = y.timeStamp,
              h = y.nonceStr,
              g = y.package,
              v = y.paySign,
              w = a.signType || "MD5";
            Promise.all([
              new Promise(function (r) {
                (d = r),
                  p
                    ? s.eventCenter.once(p, function () {
                        r(!0);
                      })
                    : r(!0);
              }),
              l,
            ])
              .then(function (r) {
                var n = (0, u.Z)(r, 2)[1];
                e(n);
              })
              .catch(function (r) {
                n(r);
              }),
              c().requestPayment({
                timeStamp: m,
                nonceStr: h,
                package: g,
                signType: w,
                paySign: v,
                success: function (r) {
                  i(r);
                },
                fail: function (r) {
                  f(r);
                },
                complete: function () {
                  setTimeout(function () {
                    var r;
                    console.error("payment complete trigger onshow..."),
                      null === (r = d) || void 0 === r || r();
                  }, 1500);
                },
              });
          });
        }
        function P(r, e) {
          return new Promise(function (n, t) {
            var o = r || "";
            o || t({ errorMsg: "无效的prePayToken" });
            var u = {};
            "v2" == e ? (u.orderStr = o) : (u.tradeNO = o),
              my.tradePay(
                (0, a.Z)(
                  (0, a.Z)({}, u),
                  {},
                  {
                    success: function (r) {
                      var e = r.resultCode;
                      "9000" === e || "8000" === e
                        ? n(r)
                        : t(
                            "4000" === e
                              ? (0, a.Z)(
                                  (0, a.Z)({}, r),
                                  {},
                                  { errorMsg: "订单支付失败" }
                                )
                              : "6001" === e
                              ? (0, a.Z)(
                                  (0, a.Z)({}, r),
                                  {},
                                  { errorMsg: "用户中途取消" }
                                )
                              : "6002" === e
                              ? (0, a.Z)(
                                  (0, a.Z)({}, r),
                                  {},
                                  { errorMsg: "网络连接出错" }
                                )
                              : "6004" === e
                              ? (0, a.Z)(
                                  (0, a.Z)({}, r),
                                  {},
                                  {
                                    errorMsg:
                                      "支付结果未知（有可能已经支付成功），请查询商户订单列表中订单的支付状态",
                                  }
                                )
                              : "99" === e
                              ? (0, a.Z)(
                                  (0, a.Z)({}, r),
                                  {},
                                  {
                                    errorMsg:
                                      "用户点击忘记密码导致快捷界面退出(only iOS)",
                                  }
                                )
                              : (0, a.Z)(
                                  (0, a.Z)({}, r),
                                  {},
                                  { errorMsg: "其它支付失败" }
                                )
                          );
                    },
                    fail: function () {
                      t({ errorMsg: "接口调用失败" });
                    },
                  }
                )
              );
          });
        }
        function N() {
          var r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return new Promise(function (e, n) {
            r || n({ errorMsg: "无效的prePayToken" });
            try {
              var t = JSON.parse(r),
                o = t.order_id,
                u = t.order_token;
              tt.pay({
                orderInfo: { order_id: o, order_token: u },
                service: 5,
                success: function (r) {
                  var t = r.code;
                  switch (t) {
                    case 0:
                      e(r);
                      break;
                    default:
                      n(
                        (0, a.Z)(
                          (0, a.Z)({}, r),
                          {},
                          {
                            errorMsg: {
                              1: "支付超时",
                              2: "支付失败",
                              3: "支付关闭",
                              4: "支付取消",
                              9: "订单状态开发者自行获取",
                            }[t],
                          }
                        )
                      );
                  }
                },
                fail: function (r) {
                  var e = r.errMsg;
                  n(
                    (0, a.Z)(
                      (0, a.Z)({}, r),
                      {},
                      {
                        errorMsg: {
                          1e4: "支付失败",
                          10001: "调起微信失败",
                          10002: "微信未安装",
                        }[e],
                      }
                    )
                  );
                },
              });
            } catch (r) {
              n({ errorMsg: r || Z });
            }
          });
        }
        var T = "weapp",
          M = { weapp: "weixinapp", alipay: "alipayapp", tt: "byteDanceApp" };
        function S(r) {
          return C.apply(this, arguments);
        }
        function C() {
          return (C = (0, o.Z)(
            (0, t.Z)().mark(function r(e) {
              var n,
                o,
                a,
                u,
                d,
                p,
                f,
                l,
                y,
                m,
                h,
                g,
                v,
                w,
                b,
                S,
                C,
                E,
                U,
                O,
                q,
                W,
                V,
                L,
                z,
                B,
                Q,
                F,
                G,
                H,
                K,
                X,
                $,
                rr,
                er,
                nr;
              return (0, t.Z)().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (
                        ((n = e.business),
                        (o = e.title),
                        (a = void 0 === o ? "" : o),
                        (u = e.successConfirmText),
                        (d = void 0 === u ? "" : u),
                        (p = e.successDelta),
                        (f = void 0 === p ? 1 : p),
                        (l = e.successUrl),
                        (y = void 0 === l ? "" : l),
                        (m = e.errorDelta),
                        (h = void 0 === m ? 1 : m),
                        (g = e.errorUrl),
                        (v = void 0 === g ? "" : g),
                        (w = e.waitMilliSeconds),
                        (b = void 0 === w ? 10 : w),
                        (S = e.isBusDTStationWithOutLoginSource),
                        (C = void 0 !== S && S),
                        (E = e.goodsId),
                        (U = e.orderNumber),
                        (O = i.default.isWechat),
                        (q = i.default.isAlipay),
                        (W = i.default.isTT),
                        console.log("doPayment start", e),
                        !E)
                      ) {
                        r.next = 7;
                        break;
                      }
                      r.next = 13;
                      break;
                    case 7:
                      return (
                        (V = {
                          train: D,
                          bus: A,
                          flight: Y,
                          hotel: J,
                          smart: j,
                          ship: _,
                          ticket: R,
                        }),
                        (r.next = 10),
                        V[n](U).catch(function (r) {
                          throw new Error(
                            "".concat(n, " get goodsId fail, ").concat(r)
                          );
                        })
                      );
                    case 10:
                      (L = r.sent),
                        (E = L.goodsId),
                        ("bus" != n && "ship" !== n) ||
                          (U = L.orderNumber || U);
                    case 13:
                      if (!(O || q || W)) {
                        r.next = 34;
                        break;
                      }
                      if (((z = { wechat: I, alipay: P, tt: N }), !C)) {
                        r.next = 25;
                        break;
                      }
                      return (r.next = 18), k(U, E || "", M[T]);
                    case 18:
                      if (
                        ((B = r.sent),
                        (Q = B.code),
                        (F = B.message),
                        (G = B.data),
                        1 === Q && G && G.prePayToken)
                      ) {
                        r.next = 22;
                        break;
                      }
                      throw new Error(F || Z);
                    case 22:
                      return r.abrupt(
                        "return",
                        z[i.default.miniType](G.prePayToken, "v1")
                      );
                    case 25:
                      return (r.next = 27), x(U + "", E || "", M[T]);
                    case 27:
                      if (
                        ((H = r.sent),
                        (K = H.resultCode),
                        (X = H.payResultMessage),
                        ($ = H.prePayToken),
                        (rr = H.payResultCode),
                        (er = H.payControlVersion),
                        (nr = void 0 === er ? "" : er),
                        1 === K && "1" == rr)
                      ) {
                        r.next = 31;
                        break;
                      }
                      throw new Error(X || Z);
                    case 31:
                      return r.abrupt("return", z[i.default.miniType]($, nr));
                    case 32:
                      r.next = 36;
                      break;
                    case 34:
                      return (
                        c().navigateTo({
                          url: "/pages/zxpay/index/index?orderNumber="
                            .concat(U, "&goodsId=")
                            .concat(E, "&title=")
                            .concat(a, "&successConfirmText=")
                            .concat(d, "&successDelta=")
                            .concat(f, "&successUrl=")
                            .concat(encodeURIComponent(y), "&errorDelta=")
                            .concat(h, "&errorUrl=")
                            .concat(encodeURIComponent(v), "&waitMilliSeconds=")
                            .concat(b, "&quickPay=")
                            .concat(e.quickPay ? "1" : "0"),
                        }),
                        r.abrupt(
                          "return",
                          new Promise(function (r, e) {
                            s.eventCenter.once(
                              "PAY_RESULT_".concat(E),
                              function (n) {
                                n ? r(!0) : e(!1);
                              }
                            );
                          })
                        )
                      );
                    case 36:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )).apply(this, arguments);
        }
        function E() {
          return (E = (0, o.Z)(
            (0, t.Z)().mark(function r(e) {
              var n, o, a;
              return (0, t.Z)().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (r.next = 2), (0, p.Ahv)({ orderNumber: e });
                    case 2:
                      if (
                        ((n = r.sent),
                        (o = n.resultCode),
                        (a = n.paymentID),
                        1 !== o || !a)
                      ) {
                        r.next = 8;
                        break;
                      }
                      return r.abrupt("return", a);
                    case 8:
                      throw new Error("get TrainPaymentId fail, ".concat(e));
                    case 9:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )).apply(this, arguments);
        }
        function D(r) {
          return U.apply(this, arguments);
        }
        function U() {
          return (U = (0, o.Z)(
            (0, t.Z)().mark(function r(e) {
              var n, o, a;
              return (0, t.Z)().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (r.next = 2), (0, p.Ahv)({ orderNumber: e });
                    case 2:
                      if (
                        ((n = r.sent),
                        (o = n.resultCode),
                        (a = n.paymentID),
                        1 !== o || !a)
                      ) {
                        r.next = 8;
                        break;
                      }
                      return r.abrupt("return", { goodsId: a });
                    case 8:
                      throw new Error("get TrainPaymentId fail, ".concat(e));
                    case 9:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )).apply(this, arguments);
        }
        function A(r) {
          return O.apply(this, arguments);
        }
        function O() {
          return (O = (0, o.Z)(
            (0, t.Z)().mark(function r(e) {
              var n, o, a;
              return (0, t.Z)().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (r.next = 2),
                        (0, f.WS)({
                          orderNumber: e,
                          payMentChannel: l.T2,
                          utmSource: (0, y.Ug)(null),
                        })
                      );
                    case 2:
                      if (
                        ((n = r.sent),
                        (o = null == n ? void 0 : n.data),
                        null == (a = o.evokeCashier) ||
                          !a.orderNumber ||
                          !a.goodsId)
                      ) {
                        r.next = 8;
                        break;
                      }
                      return r.abrupt("return", {
                        goodsId: a.goodsId,
                        orderNumber: a.orderNumber,
                      });
                    case 8:
                      throw new Error("获取支付信息失败，".concat(e));
                    case 9:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )).apply(this, arguments);
        }
        function _(r) {
          return q.apply(this, arguments);
        }
        function q() {
          return (q = (0, o.Z)(
            (0, t.Z)().mark(function r(e) {
              var n, o, a;
              return (0, t.Z)().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (r.next = 2),
                        (0, f.WS)({
                          orderNumber: e,
                          payMentChannel: i.default.isTieyou
                            ? "wxTyShip"
                            : "wxZxShip",
                        })
                      );
                    case 2:
                      if (
                        ((n = r.sent),
                        (o = null == n ? void 0 : n.data),
                        null == (a = o.evokeCashier) ||
                          !a.orderNumber ||
                          !a.goodsId)
                      ) {
                        r.next = 8;
                        break;
                      }
                      return r.abrupt("return", {
                        goodsId: a.goodsId,
                        orderNumber: a.orderNumber,
                      });
                    case 8:
                      throw new Error("获取支付信息失败，".concat(e));
                    case 9:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )).apply(this, arguments);
        }
        function R(r) {
          return W.apply(this, arguments);
        }
        function W() {
          return (W = (0, o.Z)(
            (0, t.Z)().mark(function r(e) {
              var n;
              return (0, t.Z)().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (r.next = 2),
                        (0, m.ti)({ fromPage: "wechat", orderNumber: e })
                      );
                    case 2:
                      if (!(n = r.sent).goodsId) {
                        r.next = 5;
                        break;
                      }
                      return r.abrupt("return", {
                        goodsId: n.goodsId,
                        orderNumber: e,
                      });
                    case 5:
                      throw new Error("获取支付信息失败，".concat(e));
                    case 6:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )).apply(this, arguments);
        }
        function J(r) {
          return V.apply(this, arguments);
        }
        function V() {
          return (V = (0, o.Z)(
            (0, t.Z)().mark(function r(e) {
              var n, o, a, u, s, c, i, d;
              return (0, t.Z)().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (r.next = 2),
                        (0, h.rM)({
                          data: {
                            orderNumber: e,
                            clientVersion: g.Z.clientVersion,
                          },
                        })
                      );
                    case 2:
                      if (
                        ((n = r.sent),
                        (a = (o = n || {}).resultCode),
                        (u = o.resultMessage),
                        (s = o.data),
                        (c = void 0 === s ? {} : s),
                        1 != a)
                      ) {
                        r.next = 9;
                        break;
                      }
                      return (
                        (i = c.goodsId),
                        (d = c.orderNumber),
                        r.abrupt("return", { goodsId: i, orderNumber: d })
                      );
                    case 9:
                      throw new Error(u || "获取支付信息失败");
                    case 10:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )).apply(this, arguments);
        }
        function j(r) {
          return L.apply(this, arguments);
        }
        function L() {
          return (L = (0, o.Z)(
            (0, t.Z)().mark(function r(e) {
              var n, o;
              return (0, t.Z)().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (r.next = 2),
                        (0, w.Op)({ orderNumber: e, fromPage: "wechat" })
                      );
                    case 2:
                      if (1 !== (n = r.sent).resultCode) {
                        r.next = 8;
                        break;
                      }
                      return (
                        (o = n.goodsId), r.abrupt("return", { goodsId: o })
                      );
                    case 8:
                      throw new Error("获取支付信息失败");
                    case 9:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )).apply(this, arguments);
        }
        function Y(r) {
          return z.apply(this, arguments);
        }
        function z() {
          return (z = (0, o.Z)(
            (0, t.Z)().mark(function r(e) {
              var n, o, a, u, s, c, i, d;
              return (0, t.Z)().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (r.next = 2), (0, v.ad)({ data: { orderNumber: e } })
                      );
                    case 2:
                      if (
                        ((n = r.sent),
                        (a = (o = n || {}).resultCode),
                        (u = o.resultMessage),
                        (s = o.data),
                        (c = void 0 === s ? {} : s),
                        1 != a)
                      ) {
                        r.next = 9;
                        break;
                      }
                      return (
                        (i = c.goodsId),
                        (d = c.orderNumber),
                        r.abrupt("return", { goodsId: i, orderNumber: d })
                      );
                    case 9:
                      throw new Error(u || "获取支付信息失败");
                    case 10:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )).apply(this, arguments);
        }
        var B = {
          getPayInfo: x,
          doPayment: S,
          getTrainPaymentId: function (r) {
            return E.apply(this, arguments);
          },
          requestWechatNativePay: I,
          requestAlipayNativePay: P,
        };
        e.ZP = B;
      },
    },
  ]);
})();
