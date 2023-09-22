!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [29637],
      {
        53773: function (e, a, i) {
          var c,
            l = i(32180),
            t = i(90129),
            s = i(57042),
            n = i(24460),
            o = i(21867),
            r = i(86066),
            d = i(52500),
            u = i(92954),
            m = i.n(u),
            h = i(81957),
            p = i(93761),
            f = i(79792),
            w = i(71515),
            y = i(90668),
            N = i(48813),
            v = {
              ititle: {
                1: "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/kaifapiaoyouhua/dzptfp@3x.png",
                0: "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/kaifapiaoyouhua/zzptfp@3x.png",
              },
              status: {
                1: {
                  icon: "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/kaifapiaoyouhua/dkp&kpz@3x.webp",
                  title: "待寄出",
                  desc: "您的发票将在离店后寄送，请耐心等待",
                },
                5: {
                  icon: "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/kaifapiaoyouhua/psz@3x.webp",
                  title: "配送中",
                  desc: "您的发票正在赶来的路上，请注意查收",
                },
                6: {
                  icon: "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/kaifapiaoyouhua/ysd@3x.webp",
                  title: "已送达",
                  desc: "您的发票已成功签收",
                },
              },
            },
            V =
              (0, h.h)()(
                (c = (function (e) {
                  (0, o.Z)(i, e);
                  var a = (0, r.Z)(i);
                  function i(e) {
                    var c;
                    (0, s.Z)(this, i),
                      ((c = a.call(this, e)).pageId = "10650086939");
                    var l = ((0, u.getCurrentInstance)().router.params || {})
                        .data,
                      t = (0, y.X5)(l),
                      n = t.orderNumber,
                      o = t.invoiceInfo,
                      r = t.invoicePrice,
                      d = t.invoiceDetailPayInfo,
                      m = [];
                    return (
                      [
                        { key: "invoicing", label: "开票方", value: "" },
                        { key: "title", label: "发票抬头", value: "" },
                        { key: "invoicebody", label: "发票明细", value: "" },
                        { key: "taxpayerNumber", label: "税号", value: "" },
                        { key: "companyAddress", label: "公司地址", value: "" },
                        { key: "companyPhone", label: "公司电话", value: "" },
                        { key: "accountBank", label: "开户行", value: "" },
                        { key: "companyAccount", label: "账号", value: "" },
                      ].forEach(function (e) {
                        o[e.key] && ((e.value = o[e.key]), m.push(e));
                      }),
                      (c.state = {
                        invoiceDetailPayInfo: d,
                        invoiceInfo: o,
                        invoicePrice: r,
                        infoList: m,
                        orderNumber: n,
                      }),
                      c
                    );
                  }
                  return (
                    (0, n.Z)(i, [
                      {
                        key: "onPayPostage",
                        value: function () {
                          var e = this,
                            a = this.state,
                            i = a.invoiceDetailPayInfo,
                            c = a.orderNumber;
                          null != i &&
                            i.payOrderNumber &&
                            p.ZP.doPayment({
                              business: "hotel",
                              orderNumber: i.payOrderNumber,
                              goodsId: i.goodsId,
                              title: "发票配送费",
                              quickPay: !0,
                            })
                              .then(function () {
                                e.payStatusModal("支付成功", function () {
                                  m().reLaunch({
                                    url: "/pages/hotel/order/order?orderId=".concat(
                                      c
                                    ),
                                  });
                                });
                              })
                              .catch(function () {
                                e.payStatusModal("支付失败");
                              });
                        },
                      },
                      {
                        key: "payStatusModal",
                        value: function (e, a) {
                          f.default.isBaidu
                            ? a && a()
                            : m().showModal({
                                content: e,
                                showCancel: !1,
                                success: function (e) {
                                  e.confirm && a && a();
                                },
                              });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            a = e.infoList,
                            i = e.invoiceInfo,
                            c = e.invoicePrice,
                            l = i || {},
                            s = l.address,
                            n = l.billStatus,
                            o = l.invoiceType,
                            r = l.contactName,
                            d = l.deliveryInfo,
                            u = l.state,
                            m = l.stateCode,
                            h = l.price,
                            p = void 0 === h ? 0 : h,
                            f = l.email,
                            V = l.mobile,
                            b = l.mobilephone,
                            Z = l.receiver,
                            k = 0 === o,
                            g = [5, 6].includes(m) ? m : 1,
                            B = v.status[g],
                            X = (null == d ? void 0 : d.logisticsInfos) || [],
                            P = (0, t.Z)(X, 1)[0];
                          return (0, N.BX)(w.View, {
                            className: "ht-invoiceinfo",
                            children: [
                              (0, N.BX)(w.View, {
                                className: "status-wrap",
                                children: [
                                  (0, N.BX)(w.View, {
                                    className: "tit-wrap",
                                    children: [
                                      (0, N.tZ)(w.View, {
                                        className: "tit primary",
                                        children: u,
                                      }),
                                      P && 5 === m
                                        ? (0, N.BX)(N.HY, {
                                            children: [
                                              (0, N.tZ)(w.View, {
                                                className: "desc",
                                                children: P.desc,
                                              }),
                                              (0, N.BX)(w.View, {
                                                className: "desc",
                                                children: [
                                                  "物流更新时间：",
                                                  P.date,
                                                ],
                                              }),
                                            ],
                                          })
                                        : (0, N.tZ)(w.View, {
                                            className: "desc",
                                            children: n,
                                          }),
                                    ],
                                  }),
                                  (0, N.tZ)(w.View, {
                                    className: "icon-wrap",
                                    children: (0, N.tZ)(w.Image, {
                                      className: "icon",
                                      src: B.icon,
                                      mode: "widthFix",
                                    }),
                                  }),
                                ],
                              }),
                              d &&
                                (0, N.BX)(w.View, {
                                  className: "delivery-info",
                                  children: [
                                    (0, N.BX)(w.View, {
                                      className: "dwrap",
                                      children: [
                                        (0, N.tZ)(w.View, {
                                          className: "dname",
                                          children: d.deliveryCompany,
                                        }),
                                        (0, N.tZ)(w.View, {
                                          className: "dcode",
                                          children: d.postNo,
                                        }),
                                      ],
                                    }),
                                    (0, N.tZ)(w.View, {
                                      className: "copy primary",
                                      id: "AXDt",
                                      onClick: function () {
                                        return (0, y.pV)(d.postNo);
                                      },
                                      children: "复制",
                                    }),
                                  ],
                                }),
                              (0, N.BX)(w.View, {
                                className: "info-wrap",
                                children: [
                                  (0, N.BX)(w.View, {
                                    className: "info-tit-wrap",
                                    children: [
                                      (0, N.tZ)(w.Image, {
                                        className: "titimg",
                                        src: v.ititle[o],
                                      }),
                                      (0, N.tZ)(w.View, {
                                        className: "price",
                                        children: c + p,
                                      }),
                                      k &&
                                        (0, N.tZ)(w.View, {
                                          className: "desc",
                                          children: "包含快递费用",
                                        }),
                                    ],
                                  }),
                                  (0, N.BX)(w.View, {
                                    className: "break-line",
                                    children: [
                                      (0, N.tZ)(w.View, {
                                        className: "left-circle",
                                      }),
                                      (0, N.tZ)(w.View, {
                                        className: "dashed-line",
                                      }),
                                      (0, N.tZ)(w.View, {
                                        className: "right-circle",
                                      }),
                                    ],
                                  }),
                                  (0, N.BX)(w.View, {
                                    className: "info-list",
                                    children: [
                                      null == a
                                        ? void 0
                                        : a.map(function (e, a) {
                                            return (0,
                                            N.BX)(w.View, { className: "list", children: [(0, N.tZ)(w.View, { className: "label", children: e.label }), (0, N.tZ)(w.View, { className: "value", children: i[e.key] })] }, a);
                                          }),
                                      !k &&
                                        (0, N.BX)(w.View, {
                                          className: "list",
                                          children: [
                                            (0, N.tZ)(w.View, {
                                              className: "label",
                                              children: "邮箱地址",
                                            }),
                                            (0, N.tZ)(w.View, {
                                              className: "value",
                                              children: f,
                                            }),
                                          ],
                                        }),
                                      k &&
                                        (0, N.BX)(N.HY, {
                                          children: [
                                            (0, N.tZ)(w.View, {
                                              className: "dashed-line",
                                            }),
                                            (0, N.BX)(w.View, {
                                              className: "list",
                                              children: [
                                                (0, N.tZ)(w.View, {
                                                  className: "label",
                                                  children: "收件人姓名",
                                                }),
                                                (0, N.tZ)(w.View, {
                                                  className: "value",
                                                  children: r || Z,
                                                }),
                                              ],
                                            }),
                                            (0, N.BX)(w.View, {
                                              className: "list",
                                              children: [
                                                (0, N.tZ)(w.View, {
                                                  className: "label",
                                                  children: "收件人手机",
                                                }),
                                                (0, N.tZ)(w.View, {
                                                  className: "value",
                                                  children: V || b || Z,
                                                }),
                                              ],
                                            }),
                                            (0, N.BX)(w.View, {
                                              className: "list",
                                              children: [
                                                (0, N.tZ)(w.View, {
                                                  className: "label",
                                                  children: "收件人地址",
                                                }),
                                                (0, N.tZ)(w.View, {
                                                  className: "value",
                                                  children: s,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              1 === m &&
                                (0, N.BX)(w.View, {
                                  className: "pay-wrap",
                                  children: [
                                    (0, N.BX)(w.View, {
                                      class: "price-wrap",
                                      children: [
                                        (0, N.tZ)(w.View, {
                                          class: "price",
                                          children: p,
                                        }),
                                        (0, N.tZ)(w.View, {
                                          class: "desc",
                                          children: "离店3-7日内寄送",
                                        }),
                                      ],
                                    }),
                                    (0, N.tZ)(w.View, {
                                      class: "pay-btn",
                                      id: "AXDu",
                                      onClick: this.onPayPostage,
                                      children: "支付邮费",
                                    }),
                                  ],
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(d.default.Component))
              ) || c;
          Page(
            (0, l.createPageConfig)(
              V,
              "pages/hotel/invoiceinfo/invoiceinfo",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "发票信息",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#ffffff",
                backgroundColor: "#ffffff",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [3322, 36332, 95854, 19559, 11216, 68592], function () {
          return (function (a) {
            return e((e.s = a));
          })(53773);
        }),
          e.O();
      },
    ]);
})();
