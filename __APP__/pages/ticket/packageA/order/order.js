!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    require("../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [23909],
      {
        41880: function (e, t, n) {
          var a,
            s = n(32180),
            i = n(57042),
            o = n(24460),
            c = n(21867),
            r = n(86066),
            l = n(52500),
            d = n(71515),
            h = n(92954),
            u = n.n(h),
            m = n(48792),
            f = n.n(m),
            N = n(79792),
            w = (n(49120), n(93761)),
            p = n(45066),
            g = n(81957),
            V = n(55099),
            Z = n(20689),
            b = n(73851),
            B = n(48813),
            C = {
              pageId: N.default.isTieyou ? "10650059444" : "10650059428",
              data: {
                isShowRefundModal: !1,
                partner: N.default.isTieyou ? "tieyou" : "zhixing",
                needFresh: !1,
                orderNumber: "",
                orderStatus: 2,
                contactInfo: {},
                orderBaseInfo: {},
                passengers: [],
                refundInfos: [
                  { amount: "", paymentType: "", proccessList: [] },
                ],
                counselTel: "",
                resourceInfos: [{ quantity: "", useDate: "", useDesc: "" }],
                scenicspotInfo: {
                  openTimeDesc: "",
                  returnRules: [],
                  returnTag: "",
                },
                voucherInfo: {
                  useDesc: "",
                  voucherCode: "",
                  voucherImageUrl: "",
                },
              },
              onLoad: function (e) {
                var t = e.orderNumber;
                (this.options = e),
                  this.setData({ orderNumber: t }),
                  this.getOrderDetail(t);
              },
              onShow: function () {
                var e = this.data,
                  t = e.needFresh,
                  n = e.orderNumber;
                t && n && this.getOrderDetail(n);
              },
              showRefundModal: function () {
                this.setData({ isShowRefundModal: !0 });
              },
              hideRefundModal: function (e) {
                console.log(e), this.setData({ isShowRefundModal: !1 });
              },
              isNeedShowTip: function (e, t) {
                if (t && 0 != t.length) {
                  var n = !1,
                    a = t.find(function (t) {
                      return t.orderNumber == e;
                    });
                  return (
                    a
                      ? Date.now() - a.recordTime > 864e5 &&
                        ((n = !0), (a.recordTime = Date.now()), Z.JE.set(t))
                      : ((n = !0),
                        t.push({ orderNumber: e, recordTime: Date.now() }),
                        Z.JE.set(t)),
                    n
                  );
                }
                return (
                  (t = []).push({ orderNumber: e, recordTime: Date.now() }),
                  Z.JE.set(t),
                  !0
                );
              },
              getOrderDetail: function (e) {
                var t = this;
                b.Z.showLoading();
                var n = Z.JE.get(),
                  a = this.options.hasExchange,
                  s = void 0 === a ? "false" : a,
                  i = this.data.partner;
                (0, V.Nd)({ orderNumber: e })
                  .then(function (a) {
                    if (
                      (console.log("订单详情---------\x3e", a),
                      b.Z.hideLoading(),
                      u().stopPullDownRefresh(),
                      1 === a.resultCode)
                    ) {
                      if (
                        a.orderBaseInfo &&
                        (25 == a.orderBaseInfo.orderStatus ||
                          40 == a.orderBaseInfo.orderStatus) &&
                        "true" == s &&
                        t.isNeedShowTip(e, n)
                      ) {
                        var o = t,
                          c = "tieyou" == i ? "#FE4839" : "#5495E6";
                        u().showModal({
                          content:
                            "抱歉！出票失败。您本次兑换的优惠券90天内购票仍可使用。",
                          confirmText: "重新购票",
                          cancelText: "知道了",
                          cancelColor: "#666",
                          confirmColor: c,
                          success: function (e) {
                            e.confirm && o.goBookAgain();
                          },
                        });
                      }
                      t.setData({
                        counselTel: a.counselTel,
                        contactInfo: a.contactInfo,
                        passengers: a.passengers,
                        orderBaseInfo: a.orderBaseInfo,
                        refundInfos: a.refundInfos,
                        resourceInfos: a.resourceInfos,
                        scenicspotInfo: a.scenicspotInfo,
                        voucherInfo: a.voucherInfo,
                      });
                    }
                  })
                  .catch(function () {
                    u().stopPullDownRefresh(), b.Z.hideLoading();
                  });
              },
              applyInvoice: function () {
                var e = this.data,
                  t = e.orderBaseInfo,
                  n = e.counselTel,
                  a = "tieyou" == e.partner ? "#FE4839" : "#5495E6",
                  s = "目前暂无法申请在线开发票，请凭订单号".concat(
                    t.showOrderNumber,
                    "，联系客服为您开发票哦~"
                  );
                u().showModal({
                  title: "温馨提示",
                  content: s,
                  confirmText: "联系客服",
                  cancelText: "取消",
                  cancelColor: "#666",
                  confirmColor: a,
                  success: function (e) {
                    var t = this;
                    e.confirm &&
                      (n
                        ? u().makePhoneCall({ phoneNumber: n })
                        : setTimeout(function () {
                            t.showMsg("当前客服系统繁忙，请稍后重试");
                          }, 500));
                  },
                });
              },
              callCustomerService: function () {
                var e = this,
                  t = this.data.counselTel;
                t
                  ? u().makePhoneCall({ phoneNumber: t })
                  : setTimeout(function () {
                      e.showMsg("当前客服系统繁忙，请稍后重试");
                    }, 500);
              },
              goBookAgain: function () {
                var e = this.data.scenicspotInfo,
                  t = this.options.source,
                  n = void 0 === t ? "wechat" : t,
                  a = {
                    scenicSpotId: e.scenicspotId,
                    scenicInfo: encodeURIComponent(
                      JSON.stringify({
                        address: e.address || "",
                        name: e.scenicspotName || "景点详情",
                      })
                    ),
                    source: n,
                  };
                p.F0.navigateTo("detail", a);
              },
              cancelOrder: function (e) {
                var t = this,
                  n = this.data.orderBaseInfo,
                  a = this.options.fromPage,
                  s = void 0 === a ? "" : a,
                  i = n.deductPrice && Number(n.deductPrice) > 0;
                (0, V.rn)({ orderNumber: e })
                  .then(function (n) {
                    1 === n.resultCode
                      ? (b.Z.showToast("订单取消成功"),
                        i && "ticketBook_repeat" == s && t.invokeCallback(!0),
                        t.getOrderDetail(e))
                      : b.Z.showToast(n.resultMessage);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              cancelOrderBtnClik: function () {
                var e = this.data,
                  t = e.orderBaseInfo,
                  n = e.orderNumber,
                  a = e.partner,
                  s = this.options.hasExchange;
                if (1 == t.payFlag) {
                  var i = "目前该订单尚未付款，是否确认取消该订单？";
                  "true" == s && (i += "\n本次兑换的优惠券将返回至原账号。");
                  var o = this,
                    c = "tieyou" == a ? "#FE4839" : "#5495E6";
                  u().showModal({
                    title: "温馨提示",
                    content: i,
                    confirmText: "点错了",
                    cancelText: "取消订单",
                    cancelColor: "#666",
                    confirmColor: c,
                    success: function (e) {
                      e.confirm || o.cancelOrder(n);
                    },
                  });
                } else this.checkCanCancel(n);
              },
              checkCanCancel: function (e) {
                var t = this;
                b.Z.showLoading(),
                  (0, V.aY)({ orderNumber: e })
                    .then(function (n) {
                      console.log("能否退订", n), b.Z.hideLoading();
                      var a = t,
                        s = t.options.source,
                        i = void 0 === s ? "wechat" : s;
                      1 == n.resultCode
                        ? 1 == n.returnFlag
                          ? t.navigateTo({
                              url: "/pages/ticket/packageA/refund/refund?source=".concat(
                                i
                              ),
                              data: { orderNumber: e, refundInfo: n },
                              callback: function (e) {
                                e &&
                                  a.setData({ needFresh: !0 }, function () {
                                    e &&
                                      setTimeout(function () {
                                        u().showModal({
                                          content: e,
                                          showCancel: !1,
                                          confirmText: "知道了",
                                        });
                                      }, 500);
                                  });
                              },
                            })
                          : t.showMsg(n.returnMsg)
                        : b.Z.showToast(n.resultMessage || "网络异常");
                    })
                    .catch(function (e) {
                      b.Z.hideLoading(), console.log(e);
                    });
              },
              callPayOperation: function () {
                var e = this,
                  t = this.data.orderBaseInfo;
                try {
                  (0, w.VQ)({ business: "ticket", orderNumber: t.orderNumber })
                    .then(function (n) {
                      b.Z.showToast("支付成功"),
                        e.getOrderDetail(t.orderNumber);
                    })
                    .catch(function (e) {
                      b.Z.showToast(e.errorMsg || "网络异常");
                    });
                } catch (e) {
                  b.Z.showToast(e.message || "网络异常");
                }
              },
              gotoMappage: function () {
                var e = this.data.scenicspotInfo;
                u().openLocation({
                  latitude: parseFloat(e.latitude),
                  longitude: parseFloat(e.longitude),
                  name: e.scenicspotName,
                  address: e.address,
                });
              },
              onPullDownRefresh: function () {
                var e = this.data.orderNumber;
                this.getOrderDetail(e);
              },
            },
            T =
              (0, g.h)()(
                (a =
                  f()(C)(
                    (a = (function (e) {
                      (0, c.Z)(n, e);
                      var t = (0, r.Z)(n);
                      function n() {
                        return (0, i.Z)(this, n), t.apply(this, arguments);
                      }
                      return (
                        (0, o.Z)(n, [
                          {
                            key: "render",
                            value: function () {
                              var e = this.data,
                                t = e.partner,
                                n = e.orderBaseInfo,
                                a = e.refundInfos,
                                s = e.resourceInfos,
                                i = e.voucherInfo,
                                o = e.scenicspotInfo,
                                c = e.contactInfo,
                                r = e.passengers,
                                l = e.isShowRefundModal;
                              return (0, B.BX)(d.View, {
                                className: "page",
                                children: [
                                  (0, B.BX)(d.View, {
                                    className:
                                      "order-view " +
                                      ("tieyou" == t ? "ty" : "zx"),
                                    children: [
                                      (0, B.BX)(d.View, {
                                        className: "order-status",
                                        children: [
                                          (0, B.BX)(d.View, {
                                            className: "order-status-hd",
                                            children: [
                                              (0, B.tZ)(d.Image, {
                                                className: "statusIcon",
                                                src: n.statusIcon,
                                              }),
                                              (0, B.BX)(d.View, {
                                                className: "cont",
                                                children: [
                                                  (0, B.BX)(d.View, {
                                                    className: "tit",
                                                    children: [
                                                      (0, B.tZ)(d.View, {
                                                        className: "cont",
                                                        children: n.statusName,
                                                      }),
                                                      (0, B.tZ)(d.View, {
                                                        className: "rbox",
                                                        children: n.amount,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, B.tZ)(d.View, {
                                                    className: "txt",
                                                    children: n.statusDesc,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          a.length > 0 &&
                                            a[0].proccessList &&
                                            a[0].proccessList.length > 0 &&
                                            (0, B.BX)(d.View, {
                                              className:
                                                "order-refund-box " +
                                                ("tieyou" == t ? "ty" : "zx"),
                                              id: "ALCF",
                                              onClick: this.showRefundModal,
                                              children: [
                                                (0, B.tZ)(d.View, {
                                                  className: "cont",
                                                  children: "查看退款进度",
                                                }),
                                                (0, B.tZ)(d.Text, {
                                                  className:
                                                    "ifont-arr iconfont",
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, B.BX)(d.View, {
                                        className: "order-detail",
                                        children: [
                                          (0, B.tZ)(d.View, {
                                            className: "order-detail-hd",
                                            children: s[0].resourceName,
                                          }),
                                          (0, B.BX)(d.View, {
                                            className: "order-detail-list",
                                            children: [
                                              (0, B.BX)(d.View, {
                                                className: "item",
                                                children: [
                                                  (0, B.tZ)(d.View, {
                                                    className: "label",
                                                    children: "使用日期",
                                                  }),
                                                  (0, B.tZ)(d.View, {
                                                    className: "cont",
                                                    children: s[0].useDate,
                                                  }),
                                                ],
                                              }),
                                              (0, B.BX)(d.View, {
                                                className: "item",
                                                children: [
                                                  (0, B.tZ)(d.View, {
                                                    className: "label",
                                                    children: "购买数量",
                                                  }),
                                                  (0, B.tZ)(d.View, {
                                                    className: "cont",
                                                    children:
                                                      s[0].quantity + "张",
                                                  }),
                                                ],
                                              }),
                                              (0, B.BX)(d.View, {
                                                className: "item",
                                                children: [
                                                  (0, B.tZ)(d.View, {
                                                    className: "label",
                                                    children: "使用方法",
                                                  }),
                                                  (0, B.tZ)(d.View, {
                                                    className: "cont",
                                                    children: s[0].useDesc,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, B.tZ)(d.View, {
                                            className: "order-qrcode",
                                            style:
                                              "padding-bottom:" +
                                              (i && i.voucherImageUrl
                                                ? "50rpx"
                                                : "0rpx"),
                                            children:
                                              i &&
                                              i.voucherImageUrl &&
                                              (0, B.tZ)(d.Image, {
                                                src: i.voucherImageUrl,
                                              }),
                                          }),
                                          (0, B.BX)(d.View, {
                                            className: "tit",
                                            id: "ALCG",
                                            onClick: this.goBookAgain,
                                            children: [
                                              (0, B.tZ)(d.View, {
                                                className: "cont",
                                                children: o.scenicspotName,
                                              }),
                                              (0, B.tZ)(d.Text, {
                                                className: "ifont-arr iconfont",
                                              }),
                                            ],
                                          }),
                                          (0, B.BX)(d.View, {
                                            className: "order-detail-list line",
                                            style:
                                              "border-bottom: 1rpx solid #eee;",
                                            children: [
                                              (0, B.BX)(d.View, {
                                                className: "item",
                                                children: [
                                                  (0, B.tZ)(d.View, {
                                                    className: "label",
                                                    children: "入园时间",
                                                  }),
                                                  (0, B.tZ)(d.View, {
                                                    className: "cont",
                                                    children: o.openTimeDesc,
                                                  }),
                                                ],
                                              }),
                                              (0, B.BX)(d.View, {
                                                className: "item",
                                                children: [
                                                  (0, B.tZ)(d.View, {
                                                    className: "label",
                                                    children: "入园地址",
                                                  }),
                                                  (0, B.tZ)(d.View, {
                                                    className: "cont",
                                                    children: o.address,
                                                  }),
                                                  (0, B.BX)(d.Button, {
                                                    className: "btn-gps",
                                                    id: "ALCH",
                                                    onClick: this.gotoMappage,
                                                    children: [
                                                      (0, B.tZ)(d.Text, {
                                                        className:
                                                          "ifont-gps iconfont",
                                                      }),
                                                      "导航",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, B.BX)(d.View, {
                                                className: "item",
                                                children: [
                                                  (0, B.tZ)(d.View, {
                                                    className: "label",
                                                    children: "退改规则",
                                                  }),
                                                  (0, B.BX)(d.View, {
                                                    className: "cont",
                                                    children: [
                                                      (0, B.tZ)(d.View, {
                                                        className:
                                                          "tag " +
                                                          ("随时可退" ==
                                                          o.returnTag
                                                            ? "tieyou" == t
                                                              ? "ty"
                                                              : "zx"
                                                            : "yellow"),
                                                        children: o.returnTag,
                                                      }),
                                                      o &&
                                                        o.returnRules.length >
                                                          0 &&
                                                        (0, B.tZ)(d.Block, {
                                                          children:
                                                            o.returnRules.map(
                                                              function (e, t) {
                                                                return (0,
                                                                B.tZ)(
                                                                  d.View,
                                                                  {
                                                                    className:
                                                                      "tgrey",
                                                                    children:
                                                                      "• " + e,
                                                                  },
                                                                  t
                                                                );
                                                              }
                                                            ),
                                                        }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, B.tZ)(d.View, {
                                            className: "tit",
                                            children: (0, B.tZ)(d.View, {
                                              className: "cont",
                                              children: "订单信息",
                                            }),
                                          }),
                                          (0, B.BX)(d.View, {
                                            className: "order-detail-list info",
                                            children: [
                                              c &&
                                                c.contactName &&
                                                (0, B.BX)(d.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, B.tZ)(d.View, {
                                                      className: "label",
                                                      children: "联系信息",
                                                    }),
                                                    (0, B.tZ)(d.View, {
                                                      className: "cont",
                                                      children: c.contactName,
                                                    }),
                                                  ],
                                                }),
                                              c &&
                                                c.contactName &&
                                                (0, B.BX)(d.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, B.tZ)(d.View, {
                                                      className: "label",
                                                      children: "联系电话",
                                                    }),
                                                    (0, B.tZ)(d.View, {
                                                      className: "cont",
                                                      children: c.mobile,
                                                    }),
                                                  ],
                                                }),
                                              n &&
                                                n.showOrderNumber &&
                                                (0, B.BX)(d.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, B.tZ)(d.View, {
                                                      className: "label",
                                                      children: "订单编号",
                                                    }),
                                                    (0, B.tZ)(d.View, {
                                                      className: "cont",
                                                      children:
                                                        n.showOrderNumber,
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          r &&
                                            r.length > 1 &&
                                            (0, B.BX)(d.Block, {
                                              children: [
                                                (0, B.tZ)(d.View, {
                                                  className: "tit",
                                                  children: (0, B.tZ)(d.View, {
                                                    className: "cont",
                                                    children: "出行人信息",
                                                  }),
                                                }),
                                                r.map(function (e, t) {
                                                  return (0,
                                                  B.BX)(d.View, { className: "order-detail-list pasg", children: [(0, B.BX)(d.View, { className: "item", children: [(0, B.tZ)(d.View, { className: "strong", children: "游客" + (t + 1) }), (0, B.tZ)(d.View, { className: "cont", children: e.cName + " " + e.eName })] }), e.idCardNo && e.idCardNo.length > 0 && (0, B.BX)(d.View, { className: "item", children: [(0, B.tZ)(d.View, { className: "label", children: e.idCardName }), (0, B.tZ)(d.View, { className: "cont", children: e.idCardNo })] }), e.mobile && e.mobile.length > 0 && (0, B.BX)(d.View, { className: "item", children: [(0, B.tZ)(d.View, { className: "label", children: "大陆手机" }), (0, B.tZ)(d.View, { className: "cont", children: e.mobile })] })] }, "index");
                                                }),
                                              ],
                                            }),
                                          (0, B.BX)(d.View, {
                                            className: "order-detail-info",
                                            children: [
                                              n &&
                                                1 == n.invoiceFlag &&
                                                (0, B.BX)(d.View, {
                                                  id: "ALCI",
                                                  onClick: this.applyInvoice,
                                                  className: "item",
                                                  children: [
                                                    (0, B.tZ)(d.View, {
                                                      className: "cont",
                                                      children: "发票申请",
                                                    }),
                                                    (0, B.tZ)(d.Text, {
                                                      className:
                                                        "ifont-arr iconfont",
                                                    }),
                                                  ],
                                                }),
                                              (0, B.BX)(d.View, {
                                                className: "item",
                                                id: "ALCJ",
                                                onClick:
                                                  this.callCustomerService,
                                                children: [
                                                  (0, B.tZ)(d.View, {
                                                    className: "cont",
                                                    children: "联系客服",
                                                  }),
                                                  (0, B.tZ)(d.Text, {
                                                    className:
                                                      "ifont-tel2 iconfont",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  a.length > 0 &&
                                    a[0].proccessList.length > 0 &&
                                    (0, B.tZ)(d.View, {
                                      className: l
                                        ? "pop-mask active"
                                        : "pop-mask",
                                      id: "ALCK",
                                      onClick: this.hideRefundModal,
                                      onTouchMove: this.noop,
                                      children: (0, B.BX)(d.View, {
                                        className: "pop-botm pop-refund",
                                        id: "ALCL",
                                        onClick: this.empty,
                                        onTouchMove: this.noop,
                                        children: [
                                          (0, B.tZ)(d.View, {
                                            className: "pop-refund-hd",
                                            children: (0, B.BX)(d.View, {
                                              className: "tit",
                                              children: [
                                                "退款至" + a[0].paymentType,
                                                (0, B.tZ)(d.View, {
                                                  className: "priceNoIcon fr",
                                                  children: a[0].amount,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, B.tZ)(d.View, {
                                            className:
                                              "pop-refund-bd " +
                                              ("tieyou" == t ? "ty" : "zx"),
                                            children: a[0].proccessList.map(
                                              function (e, t) {
                                                return (0, B.BX)(
                                                  d.View,
                                                  {
                                                    className:
                                                      "item " +
                                                      (2 == e.status &&
                                                      t ==
                                                        a[0].proccessList
                                                          .length -
                                                          1
                                                        ? "cur"
                                                        : 2 == e.status
                                                        ? "done"
                                                        : 1 == e.status
                                                        ? "cur"
                                                        : ""),
                                                    children: [
                                                      1 == e.status ||
                                                      (2 == e.status &&
                                                        t ==
                                                          a[0].proccessList
                                                            .length -
                                                            1)
                                                        ? (0, B.tZ)(d.Text, {
                                                            className:
                                                              "ifont-selected iconfont",
                                                          })
                                                        : (0, B.tZ)(d.Icon, {
                                                            className:
                                                              "icon-dot",
                                                          }),
                                                      (0, B.tZ)(d.View, {
                                                        className: "tit",
                                                        children: e.title,
                                                      }),
                                                      (0, B.tZ)(d.View, {
                                                        className: "txt",
                                                        children:
                                                          e.proccessTime,
                                                      }),
                                                      (0, B.tZ)(d.View, {
                                                        className: "txt",
                                                        children: e.desc,
                                                      }),
                                                    ],
                                                  },
                                                  "index"
                                                );
                                              }
                                            ),
                                          }),
                                        ],
                                      }),
                                    }),
                                  (0, B.BX)(d.View, {
                                    className: "fixed-botm",
                                    style: "padding:0rpx",
                                    children: [
                                      1 == n.payFlag &&
                                        n.deductPrice &&
                                        (0, B.tZ)(d.View, {
                                          className: "couponTipWrap",
                                          children: (0, B.tZ)(d.Text, {
                                            className: "couponTipText",
                                            children:
                                              "该订单已使用" +
                                              n.deductPrice +
                                              "元优惠券，若取消订单，优惠券自动返还",
                                          }),
                                        }),
                                      (0, B.BX)(d.View, {
                                        style:
                                          "padding: 0 30rpx;width:100%;display:flex;align-items:center",
                                        children: [
                                          1 == n.cancelFlag &&
                                            (0, B.tZ)(d.Button, {
                                              className:
                                                "btn-cancel btn-line-grey",
                                              id: "ALCM",
                                              onClick: this.cancelOrderBtnClik,
                                              children: "取消订单",
                                            }),
                                          1 == n.returnFlag &&
                                            (0, B.tZ)(d.Button, {
                                              className:
                                                "btn-cancel btn-line-grey",
                                              id: "ALCN",
                                              onClick: this.cancelOrderBtnClik,
                                              children: "申请退票",
                                            }),
                                          1 == n.payFlag &&
                                            (0, B.tZ)(d.Button, {
                                              className:
                                                "btn-submit btn-primary",
                                              id: "ALCO",
                                              onClick: this.callPayOperation,
                                              children: "去支付",
                                            }),
                                          1 == n.rebookingFlag &&
                                            (0, B.tZ)(d.Button, {
                                              className:
                                                "btn-submit btn-primary",
                                              id: "ALCP",
                                              onClick: this.goBookAgain,
                                              children: "再次预订",
                                            }),
                                        ],
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
                    })(l.default.Component))
                  ) || a)
              ) || a;
          Page(
            (0, s.createPageConfig)(
              T,
              "pages/ticket/packageA/order/order",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "订单详情",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [14856, 3322, 36332, 95854, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(41880);
        }),
          e.O();
      },
    ]);
})();
