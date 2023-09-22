!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [47435],
      {
        56945: function (e, t, n) {
          var i,
            c = n(32180),
            a = n(79301),
            s = n(95308),
            r = n(57042),
            o = n(24460),
            l = n(81876),
            d = n(21867),
            u = n(86066),
            f = n(45023),
            p = n(52500),
            h = n(92954),
            m = n(71515),
            w = n(81957),
            I = n(79792),
            g = n(34229),
            N = n(10741),
            V = n(48813),
            Z =
              (0, w.h)()(
                (i = (function (e) {
                  (0, d.Z)(n, e);
                  var t = (0, u.Z)(n);
                  function n() {
                    var e;
                    return (
                      (0, r.Z)(this, n),
                      (e = t.call(this)),
                      (0, f.Z)((0, l.Z)(e), "pageId", "10650060599"),
                      (e.state = {
                        isTieyou: I.default.isTieyou,
                        pageInfo: {},
                      }),
                      e
                    );
                  }
                  return (
                    (0, o.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, h.getCurrentInstance)().router.params;
                          console.log("params:", e),
                            (this.oid =
                              (e.oid && decodeURIComponent(e.oid)) || ""),
                            (this.ticketId =
                              (e.ticketId && decodeURIComponent(e.ticketId)) ||
                              ""),
                            console.log("oid tid:", this.oid, this.ticketId),
                            this.fetchPageInfo();
                        },
                      },
                      {
                        key: "fetchPageInfo",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, n;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (t = {
                                            orderNumber: this.oid,
                                            ticketId: this.ticketId,
                                          }),
                                          (e.next = 4),
                                          (0, N.Zw5)(t)
                                        );
                                      case 4:
                                        1 === (n = e.sent).resultCode &&
                                          this.setState({ pageInfo: n }),
                                          (e.next = 11);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(0)),
                                          console.log("e:", e.t0);
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 8]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.pageInfo,
                            n = e.isTieyou;
                          return (0, V.BX)(m.Block, {
                            children: [
                              (0, V.BX)(m.View, {
                                className: "top-box " + (n ? "ty" : "zx"),
                                children: [
                                  (0, V.BX)(m.View, {
                                    className: "tit",
                                    children: [
                                      (0, V.tZ)(m.Image, {
                                        src: t.statusIcon,
                                        className: "status-icon",
                                      }),
                                      t.title,
                                    ],
                                  }),
                                  (0, V.tZ)(m.View, {
                                    className: "txt",
                                    children: t.desc,
                                  }),
                                ],
                              }),
                              (0, V.BX)(m.View, {
                                className: "wrap",
                                children: [
                                  (0, V.BX)(m.View, {
                                    className: "white-box refund-info",
                                    children: [
                                      t.passengerInfo &&
                                        (0, V.tZ)(m.View, {
                                          className: "tit",
                                          children: "乘客信息",
                                        }),
                                      (0, V.tZ)(m.View, {
                                        className: "past-list",
                                        children:
                                          t.passengerInfo &&
                                          (0, V.BX)(m.View, {
                                            className: "item",
                                            children: [
                                              (0, V.tZ)(m.View, {
                                                className: "name",
                                                children:
                                                  t.passengerInfo.passengerName,
                                              }),
                                              (0, V.BX)(m.View, {
                                                className: "cont",
                                                children: [
                                                  t.passengerInfo.identityType,
                                                  " ",
                                                  t.passengerInfo
                                                    .identityNumber,
                                                ],
                                              }),
                                            ],
                                          }),
                                      }),
                                      t.refundTicketInfo &&
                                        t.refundTicketInfo.priceInfo &&
                                        (0, V.tZ)(m.View, {
                                          className: "tit",
                                          children: "退票明细",
                                        }),
                                      t.refundTicketInfo &&
                                        (0, V.BX)(m.View, {
                                          className: "detail-info",
                                          children: [
                                            t.refundTicketInfo.priceInfo &&
                                              t.refundTicketInfo.priceInfo
                                                .length > 0 &&
                                              t.refundTicketInfo.priceInfo.map(
                                                function (e, t) {
                                                  return (0, V.BX)(
                                                    m.View,
                                                    {
                                                      className: "item",
                                                      children: [
                                                        (0, V.BX)(m.View, {
                                                          className: "cont",
                                                          children: [
                                                            (0, V.BX)(m.View, {
                                                              className: "txt",
                                                              children: [
                                                                e.key,
                                                                e.tag &&
                                                                  (0, V.tZ)(
                                                                    m.Text,
                                                                    {
                                                                      className:
                                                                        "tag " +
                                                                        (n
                                                                          ? "ty"
                                                                          : "zx"),
                                                                      children:
                                                                        e.tag,
                                                                    }
                                                                  ),
                                                              ],
                                                            }),
                                                            e.desc &&
                                                              (0, V.tZ)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "tgrey",
                                                                  children:
                                                                    e.desc,
                                                                }
                                                              ),
                                                          ],
                                                        }),
                                                        (0, V.tZ)(m.View, {
                                                          className: "price",
                                                          children: e.value,
                                                        }),
                                                      ],
                                                    },
                                                    "refund-info-item-".concat(
                                                      t
                                                    )
                                                  );
                                                }
                                              ),
                                            (0, V.BX)(m.View, {
                                              className: "total",
                                              children: [
                                                (0, V.tZ)(m.View, {
                                                  className: "cont",
                                                  children: (0, V.BX)(m.View, {
                                                    className: "txt",
                                                    children: [
                                                      t.refundTicketInfo
                                                        .leftRefundKeyDesc,
                                                      "：",
                                                    ],
                                                  }),
                                                }),
                                                (0, V.tZ)(m.View, {
                                                  className:
                                                    "price color-primary",
                                                  children: (0, V.tZ)(
                                                    g.ZtRichText,
                                                    {
                                                      nodes:
                                                        t.refundTicketInfo
                                                          .leftRefundAmount,
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  4 === t.refundStatus &&
                                    t.tipDesc &&
                                    t.tipDesc.length > 0 &&
                                    (0, V.BX)(m.View, {
                                      className: "white-box refund-tips",
                                      children: [
                                        (0, V.tZ)(m.View, {
                                          className: "tit",
                                          children: t.tipTitle,
                                        }),
                                        t.tipDesc.map(function (e, t) {
                                          return (0,
                                          V.tZ)(m.View, { className: "txt color-primary", children: e }, "tip-".concat(t));
                                        }),
                                      ],
                                    }),
                                  2 === t.refundStatus &&
                                    t.tipDesc &&
                                    t.tipDesc.length > 0 &&
                                    (0, V.BX)(m.View, {
                                      className: "info-txt",
                                      children: [
                                        (0, V.tZ)(m.View, {
                                          className: "tit",
                                          children: t.tipTitle,
                                        }),
                                        t.tipDesc.map(function (e, t) {
                                          return (0,
                                          V.tZ)(m.View, { className: "txt", children: e }, "tip-".concat(t));
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
                })(p.default.Component))
              ) || i;
          Page(
            (0, c.createPageConfig)(
              Z,
              "pages/train/refund/refundResult/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
                navigationBarTitleText: "退票结果",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(56945);
        }),
          e.O();
      },
    ]);
})();
