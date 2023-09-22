!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [95575],
    {
      19852: function (e, a, t) {
        var n,
          i = t(32180),
          o = t(57042),
          r = t(24460),
          s = t(21867),
          c = t(86066),
          d = t(52500),
          l = t(71515),
          p = t(92954),
          h = t.n(p),
          u = t(79910),
          f = t(48792),
          y = t.n(f),
          m = t(79792),
          g = t(18783),
          w = t(49120),
          N = t(17377),
          k = t(81957),
          v = t(48813),
          T = (0, N.ZP)({
            serviceCode: "16992",
            channel: m.default.train_channel,
            path: "getPaymentShowInfo",
          }),
          Z = {
            pageId: "10650060333",
            data: {
              title: m.default.isTieyou ? "铁友" : "智行",
              orderFee: "价格读取中...",
              receiveName: m.default.isTieyou ? "铁友" : "智行",
              isSuccess: !1,
              isError: !1,
            },
            onLoad: function (e) {
              var a = this,
                t = e.goodsId,
                n = void 0 === t ? "" : t,
                i = e.orderNumber,
                o = void 0 === i ? "" : i;
              (this.goodsId = n),
                (this.orderNumber = o),
                g.ZP.openid
                  ? this.pay()
                  : (0, g.M9)().then(
                      function () {
                        return a.pay();
                      },
                      function () {
                        return console.error("获取openId失败");
                      }
                    );
            },
            pay: function () {
              var e = this;
              (0, w.showLoading)(),
                this.getPaymentShowInfo()
                  .then(function () {
                    if (((0, w.hideLoading)(), !e.payToken))
                      throw new Error("异常");
                    e.wxPay();
                  })
                  .catch(function () {
                    (0, w.hideLoading)(),
                      e.setData({ isError: !0 }),
                      (0, w.showToast)("网络异常，请重试");
                  });
            },
            onErrorHandle: function () {
              h().navigateToMiniProgram({
                appId: m.default.isTieyou
                  ? "wx45dff5234240ad90"
                  : "wx76dcd806f382ec8e",
                path: u.Z.getHomePath(),
              });
            },
            getPaymentShowInfo: function () {
              var e = this;
              return (
                console.log(
                  "易宝支付 getPaymentShowInfo(16992) ===> orderNumber = ",
                  this.orderNumber,
                  " & goodsId = ",
                  this.goodsId
                ),
                T({
                  orderNumber: this.orderNumber,
                  goodsId: this.goodsId,
                }).then(function (a) {
                  if (
                    (console.log(
                      "易宝支付 getPaymentShowInfo(16992) res ===> ",
                      a
                    ),
                    1 !== a.resultCode)
                  )
                    throw new Error("网络异常，请重试");
                  var t = a.title,
                    n = void 0 === t ? "" : t,
                    i = a.orderFee,
                    o = void 0 === i ? 0 : i,
                    r = a.receiveName,
                    s = void 0 === r ? "" : r,
                    c = a.payToken,
                    d = void 0 === c ? "" : c;
                  e.setData({ title: n, orderFee: o, receiveName: s }),
                    (e.payToken = JSON.parse(d));
                })
              );
            },
            wxPay: function () {
              var e = this;
              console.log(
                "易宝支付 调起微信支付弹窗 this.payToken ===> ",
                this.payToken
              ),
                h().requestPayment({
                  appId: this.payToken.appId,
                  timeStamp: this.payToken.timeStamp,
                  nonceStr: this.payToken.nonceStr,
                  package: this.payToken.package,
                  signType: this.payToken.signType,
                  paySign: this.payToken.paySign,
                  success: function () {
                    e.setData({
                      isSuccess: !0,
                      extraData: JSON.stringify({ payResultCode: 1 }),
                    }),
                      h().setNavigationBarTitle({ title: "" }),
                      h().setNavigationBarColor({
                        frontColor: "#ffffff",
                        backgroundColor: "#ffffff",
                      });
                  },
                  fail: function () {
                    e.setData({
                      isSuccess: !1,
                      extraData: JSON.stringify({ payResultCode: 0 }),
                    });
                  },
                });
            },
          },
          b =
            (0, k.h)()(
              (n =
                y()(Z)(
                  (n = (function (e) {
                    (0, s.Z)(t, e);
                    var a = (0, c.Z)(t);
                    function t() {
                      return (0, o.Z)(this, t), a.apply(this, arguments);
                    }
                    return (
                      (0, r.Z)(t, [
                        {
                          key: "render",
                          value: function () {
                            var e = this.data,
                              a = e.title,
                              t = e.orderFee,
                              n = e.receiveName,
                              i = e.extraData,
                              o = e.isSuccess;
                            return e.isError
                              ? (0, v.BX)(l.View, {
                                  className: "page pay-after",
                                  children: [
                                    (0, v.tZ)(l.Icon, {
                                      className: "icon-wechat",
                                    }),
                                    (0, v.tZ)(l.View, {
                                      className: "tit",
                                      children: "未收到支付信息",
                                    }),
                                    (0, v.tZ)(l.View, {
                                      className: "info",
                                      children: (0, v.tZ)(l.View, {
                                        className: "txt",
                                        children: m.default.isTieyou
                                          ? "去铁友买票"
                                          : "去智行买票",
                                      }),
                                    }),
                                    (0, v.tZ)(l.Button, {
                                      className: "btn-back",
                                      id: "ASAA",
                                      onClick: this.onErrorHandle,
                                      children: "立即买票",
                                    }),
                                  ],
                                })
                              : o
                              ? (0, v.BX)(l.View, {
                                  className: "page pay-after",
                                  children: [
                                    (0, v.tZ)(l.Icon, {
                                      className: "icon-wechat",
                                    }),
                                    (0, v.tZ)(l.View, {
                                      className: "tit",
                                      children: "支付成功",
                                    }),
                                    (0, v.tZ)(l.View, {
                                      className: "price",
                                      children: t,
                                    }),
                                    (0, v.BX)(l.View, {
                                      className: "info",
                                      children: [
                                        (0, v.tZ)(l.View, {
                                          className: "txt",
                                          children: "收款方",
                                        }),
                                        (0, v.tZ)(l.View, {
                                          className: "strong",
                                          children: n,
                                        }),
                                      ],
                                    }),
                                    (0, v.tZ)(l.Button, {
                                      className: "btn-back",
                                      openType: "launchApp",
                                      appParameter: i,
                                      children: "返回商家",
                                    }),
                                  ],
                                })
                              : (0, v.BX)(l.View, {
                                  className: "page pay-before",
                                  children: [
                                    (0, v.tZ)(l.View, {
                                      className: "tit",
                                      children: a,
                                    }),
                                    t >= 0
                                      ? (0, v.tZ)(l.View, {
                                          className: "price",
                                          children: t,
                                        })
                                      : (0, v.tZ)(l.View, {
                                          className: "price-loading",
                                          children: t,
                                        }),
                                    (0, v.BX)(l.View, {
                                      className: "pay-info",
                                      children: [
                                        (0, v.tZ)(l.View, {
                                          className: "lbox",
                                          children: "收款方",
                                        }),
                                        (0, v.tZ)(l.View, {
                                          className: "rbox",
                                          children: n,
                                        }),
                                      ],
                                    }),
                                    (0, v.tZ)(l.Button, {
                                      className: "btn-pay",
                                      id: "ASAB",
                                      onClick: this.pay,
                                      "data-ubt-key": "wx_newpay_pay",
                                      children: "立即支付",
                                    }),
                                    (0, v.tZ)(l.Button, {
                                      className: "btn-back",
                                      openType: "launchApp",
                                      appParameter: i,
                                      children: "返回商家",
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
          (0, i.createPageConfig)(
            b,
            "pages/newpay/newpay",
            { root: { cn: [] } },
            {
              navigationBarBackgroundColor: "#EDEEEF",
              backgroundColorTop: "#EFEFEF",
              navigationBarTitleText: "支付",
              navigationBarTextStyle: "black",
            } || {}
          )
        );
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (a) {
          return e((e.s = a));
        })(19852);
      }),
        e.O();
    },
  ]);
})();
