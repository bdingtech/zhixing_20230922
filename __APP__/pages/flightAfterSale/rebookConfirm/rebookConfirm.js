!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/875c9573fb7fcc8b910e806c934114d8.js"),
    require("../sub-common/46833458e1cabcee1efa7341adea7ce5.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [9407],
      {
        77990: function (e, t, n) {
          var o = n(32180),
            i = n(57042),
            a = n(24460),
            r = n(81876),
            c = n(21867),
            l = n(86066),
            s = n(52500),
            u = n(65573),
            f = n(71515),
            d = n(81957),
            h = n(79792),
            g = n(21999),
            m = n(45023),
            p = n(44778),
            b = n(76988),
            w = n(298),
            Z = {
              state: {
                productId: "",
                orderNumber: "",
                rebookType: 1,
                segmentIndex: null,
                flight: null,
                childBabyRebookTips: null,
                explanation: [],
                changePassengerList: [],
                showDetail: !1,
              },
              reducers: {
                setState: function (e, t) {
                  return (0, w.Z)((0, w.Z)({}, e), t);
                },
              },
            },
            v = (function (e) {
              (0, c.Z)(n, e);
              var t = (0, l.Z)(n);
              function n() {
                return (0, i.Z)(this, n), t.apply(this, arguments);
              }
              return (
                (0, a.Z)(n, [
                  {
                    key: "initStore",
                    value: function () {
                      this.store = (0, p.S1)({ models: { pageModel: Z } });
                    },
                  },
                ]),
                n
              );
            })(b.Z);
          (0, m.Z)(v, "defaultModel", "pageModel");
          var x,
            N = n(12508),
            k = n(48813),
            T = s.default.memo(
              (0, u.$j)(function (e) {
                var t = e.pageModel;
                return {
                  flight: t.flight,
                  changePassengerList: t.changePassengerList,
                };
              })(function (e) {
                var t,
                  n,
                  o,
                  i = e.flight,
                  a = e.changePassengerList;
                if (!i) return (0, k.tZ)(f.View, {});
                var r = i.changeFlightTripInfo.luggageInfos,
                  c = i.changeFlightBasicInfo,
                  l = i.changeFlightTripInfo,
                  s =
                    null == c ||
                    null === (t = c.flightRemark) ||
                    void 0 === t ||
                    null === (n = t.split("|")) ||
                    void 0 === n
                      ? void 0
                      : n[0],
                  u = (0, w.Z)({}, l);
                u.basicInfo = (0, w.Z)(
                  (0, w.Z)({}, c),
                  {},
                  { mealDesc: s, tag: 0 == l.stopType ? "直飞" : "经停" }
                );
                var d =
                    null == i ||
                    null === (o = i.changeFlightTripInfo) ||
                    void 0 === o
                      ? void 0
                      : o.cabinName,
                  h = { passengerList: a, otherInfos: [] };
                return (
                  d && h.otherInfos.push({ title: "改签舱位", content: d }),
                  (0, k.tZ)(N.Z, {
                    flightDetail: u,
                    rebookInfo: h,
                    luggageInfos: r,
                  })
                );
              })
            ),
            D = [
              {
                title: "产品已使用、已生效、已失效或已过期",
                desc: "产品已使用、已生效则不可改期；部分产品存在有效期限制，超出日期范围，则失效作废，无法继续使用。",
              },
              {
                title: "产品不可改期，需用户自行退订",
                desc: "部分产品预订时已关联到乘客、行程，当机票行程时间发生变动后，这类不可改期的产品，需要用户自行操作退订，再根据改签后新行程情况考虑是否再次补订。",
              },
            ],
            I = function () {
              return (0, k.tZ)(f.View, {
                className: "reason-pop-content",
                children: D.map(function (e, t) {
                  return (0,
                  k.BX)(f.View, { className: "cont-item", children: [(0, k.tZ)(f.View, { className: "cont-tit flex-align-items-center", children: e.title }), (0, k.tZ)(f.View, { className: "cont-txt", children: e.desc })] }, t);
                }),
              });
            },
            B = function () {
              v.showCommonDrawer({
                title: "产品为何不可退",
                content: function () {
                  return (0, k.tZ)(I, {});
                },
              });
            },
            V = s.default.memo(
              (0, u.$j)(function (e) {
                return { changePassengerList: e.pageModel.changePassengerList };
              })(function (e) {
                var t,
                  n =
                    (null === (t = e.changePassengerList[0]) || void 0 === t
                      ? void 0
                      : t.xProductDetails) || [];
                return 0 == n.length
                  ? (0, k.tZ)(f.View, {})
                  : (0, k.BX)(f.View, {
                      className: "rebook-product",
                      children: [
                        (0, k.BX)(f.View, {
                          className:
                            "rt-tip font-12 color-9 flex-align-items-center",
                          id: "AbAH",
                          onClick: B,
                          children: [
                            "了解原因",
                            (0, k.tZ)(f.Text, {
                              className: "iconfont2 ifont2-arr",
                            }),
                          ],
                        }),
                        (0, k.tZ)(f.View, {
                          className: "title font-16 color-2",
                          children: "以下产品不可改签",
                        }),
                        (0, k.tZ)(f.View, {
                          className: "cont",
                          children: n.map(function (e, t) {
                            return (0,
                            k.tZ)(f.View, { className: "color-2", children: e.title }, t);
                          }),
                        }),
                      ],
                    });
              })
            ),
            y = n(92954),
            C = n.n(y),
            P = n(34229),
            L = n(93761),
            F = n(26862),
            S = n(49120),
            X = n(28044),
            j = n(21828),
            M = n(65484),
            A = function (e) {
              var t = e.priceDetail,
                n = e.explanation,
                o = t.rebookTotalFee,
                i = t.changeFeeDetails;
              return (0, k.BX)(f.View, {
                className: "price-detail-box",
                children: [
                  (0, k.BX)(f.View, {
                    className: "price-total flex-align-items-center",
                    children: [
                      (0, k.tZ)(f.View, {
                        className: "item-name flex-1 font-16 color-2",
                        children: "改签总费用",
                      }),
                      (0, k.BX)(f.View, {
                        className: "item-fee",
                        children: [(0, k.tZ)(F.Z, {}), o],
                      }),
                    ],
                  }),
                  i.map(function (e, t) {
                    return (0,
                    k.BX)(f.View, { className: "price-item flex-align-items-center", children: [(0, k.tZ)(f.View, { className: "item-name flex-1 color-2 font-14", children: (0, k.tZ)(P.ZtRichText, { nodes: e.title, space: "nbsp" }) }), (0, k.BX)(f.View, { className: "item-fee", children: [(0, k.tZ)(F.Z, {}), e.price, "x", e.count] })] }, t);
                  }),
                  (0, k.tZ)(f.View, {
                    className: "rebook-explanation",
                    children: n.map(function (e, t) {
                      return (0,
                      k.BX)(f.View, { className: "font-12 color-9", children: ["·", e] }, t);
                    }),
                  }),
                ],
              });
            },
            R = function () {
              var e = v.getState(),
                t = e.showDetail,
                n = e.flight,
                o = e.explanation,
                i = n.changeFlightPriceInfoDetail;
              t
                ? v.closeCommonDrawer()
                : (v.dispatch().setState({ showDetail: !0 }),
                  v.showCommonDrawer({
                    title: "改签费用明细",
                    content: function (e) {
                      var t = e.onClose;
                      return (0, k.tZ)(A, {
                        onClose: t,
                        explanation: o,
                        priceDetail: i,
                      });
                    },
                    className: "rebook-price-detail-pop",
                    beforeClose: function () {
                      v.dispatch().setState({ showDetail: !1 });
                    },
                  }));
            },
            q = function () {
              (0, S.showLoading)("查询可订舱位中"),
                (function () {
                  var e = v.getState(),
                    t = e.productId,
                    n = e.orderNumber,
                    o = e.rebookType,
                    i = e.segmentIndex,
                    a = e.flight,
                    r = e.changePassengerList,
                    c = {
                      data: {
                        productId: t,
                        orderNumber: n,
                        rebookType: o,
                        segmentIndex: i,
                        changeFlightExtensionData: a.changeFlightExtensionData,
                        rebookPassengers: r,
                      },
                    };
                  return (0, M.vy)(c).then(function (e) {
                    var t = e.resultCode,
                      n = e.data;
                    if (1 != t || !n) throw new Error("请求失败，请稍后重试");
                    return n.pnr;
                  });
                })()
                  .then(function (e) {
                    (0, S.hideLoading)(),
                      setTimeout(function () {
                        (0, S.showLoading)("提交改签申请中"),
                          (function (e) {
                            var t = v.getState(),
                              n = t.productId,
                              o = t.orderNumber,
                              i = t.rebookType,
                              a = t.segmentIndex,
                              r = t.flight,
                              c = t.changePassengerList,
                              l = r.changeFlightExtensionData,
                              s = r.changeFlightBasicInfo,
                              u = r.changeFlightTripInfo,
                              f = {
                                data: {
                                  pnr: e,
                                  productId: n,
                                  orderNumber: o,
                                  rebookType: i,
                                  segmentIndex: a,
                                  submitData: {
                                    departDate: u.departDateTime,
                                    flightNumber: s.flightNumber,
                                  },
                                  changeFlightExtensionData: l,
                                  rebookPassengers: c,
                                },
                              };
                            return (0, M.my)(M.M_, f)
                              .then(function (e) {
                                var t = e.rebookOrderNumber,
                                  n = e.orderPaymentInfo;
                                !n || n.totalPrice <= 0
                                  ? C().reLaunch({
                                      url: "/pages/flight/detail/detail?orderNumber=".concat(
                                        o
                                      ),
                                    })
                                  : L.ZP.doPayment({
                                      business: "flight",
                                      orderNumber: t,
                                    }).finally(function () {
                                      C().reLaunch({
                                        url: "/pages/flight/detail/detail?orderNumber=".concat(
                                          o
                                        ),
                                      });
                                    });
                              })
                              .catch(function (e) {
                                (0, S.showModal)(e.message);
                              });
                          })(e).finally(function () {
                            return (0, S.hideLoading)();
                          });
                      });
                  })
                  .catch(function () {
                    (0, S.hideLoading)(),
                      setTimeout(function () {
                        (0, S.showToast)("提交失败，请重试");
                      });
                  });
            },
            E = function () {
              var e = v.getState(),
                t = e.childBabyRebookTips;
              e.showDetail && v.closeCommonDrawer();
              var n = t.limitRebookTips;
              v.showCommonDrawer({
                hideClose: !0,
                hideTitle: !0,
                content: function (e) {
                  var t = e.onClose;
                  return (0, k.tZ)(X.Z, {
                    title: "确认提交改签吗？",
                    content: n || "申请提交后不可撤销，将尽快为您改签。",
                    onCancel: t,
                    onConfirm: function () {
                      t(), q();
                    },
                    cancelText: "取消",
                    confirmText: "确定",
                  });
                },
              });
            },
            O = s.default.memo(
              (0, u.$j)(function (e) {
                var t = e.pageModel;
                return { showDetail: t.showDetail, flight: t.flight };
              })(function (e) {
                var t,
                  n = e.showDetail,
                  o = e.flight,
                  i =
                    (null == o ||
                    null === (t = o.changeFlightPriceInfoDetail) ||
                    void 0 === t
                      ? void 0
                      : t.rebookTotalFee) || 0;
                return (0,
                k.BX)(j.Z, { className: "rebook-botm", children: [(0, k.BX)(f.View, { className: "lbox flex-1", children: [(0, k.tZ)(f.View, { className: "rebook-price", children: i }), (0, k.tZ)(f.View, { className: "font-12 color-9", children: "改签费" })] }), (0, k.BX)(f.View, { className: "rbox flex-align-items-center", children: [(0, k.BX)(f.View, { className: "font-12 color-9 flex-align-items-center", id: "AbAF", onClick: R, children: ["明细", (0, k.tZ)(f.Text, { className: "ifont-arr iconfont ".concat(n ? "open" : "") })] }), (0, k.tZ)(f.Button, { className: "submit-btn", id: "AbAG", onClick: E, children: "提交申请" })] })] });
              })
            ),
            $ =
              (0, d.h)()(
                (x = (function (e) {
                  (0, c.Z)(n, e);
                  var t = (0, l.Z)(n);
                  function n(e) {
                    var o;
                    return (
                      (0, i.Z)(this, n),
                      ((o = t.call(this, e)).pageId = "10650082467"),
                      (o.pageService = v.create((0, r.Z)(o))),
                      o
                    );
                  }
                  return (
                    (0, a.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = v.getRouterParams(),
                            t = e.productId,
                            n = e.orderNumber,
                            o = e.rebookType,
                            i = e.segmentIndex,
                            a = e.flight,
                            r = e.childBabyRebookTips,
                            c = e.explanation,
                            l = e.changePassengerList;
                          v.dispatch().setState({
                            productId: t,
                            orderNumber: n,
                            rebookType: o,
                            segmentIndex: i,
                            flight: a,
                            childBabyRebookTips: r,
                            explanation: c,
                            changePassengerList: l,
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return (0, k.tZ)(u.zt, {
                            store: this.pageService.store,
                            children: (0, k.BX)(f.View, {
                              className: "flight-rebook-confirm ".concat(
                                h.default.zxTyStr
                              ),
                              children: [
                                (0, k.tZ)(T, {}),
                                (0, k.tZ)(V, {}),
                                (0, k.tZ)(O, {}),
                                (0, k.tZ)(g.Z, {
                                  ref: function (t) {
                                    e.onDrawerAttach(t);
                                  },
                                }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(s.default.Component))
              ) || x;
          Page(
            (0, o.createPageConfig)(
              $,
              "pages/flightAfterSale/rebookConfirm/rebookConfirm",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "改签确认",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#ffffff",
                backgroundColorTop: "#f5f5f5",
                backgroundColorBottom: "#f5f5f5",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            11256, 3322, 36332, 95854, 8014, 81198, 54726, 14030, 41834, 19559,
            11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(77990);
          }
        ),
          e.O();
      },
    ]);
})();
