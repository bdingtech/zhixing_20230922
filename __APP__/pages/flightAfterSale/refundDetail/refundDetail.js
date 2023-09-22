!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/023c833735f89bfd8e4bfa6050ae7715.js"),
    require("../sub-common/6c29063ea7407d5aad2c6709ea72811d.js"),
    require("../sub-common/c464917dce609cc1e640bf0180e17346.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [14446],
      {
        793: function (e, t, i) {
          var n,
            r = i(32180),
            c = i(298),
            a = i(22276),
            s = i(90983),
            o = i(57042),
            l = i(24460),
            u = i(81876),
            d = i(21867),
            f = i(86066),
            h = i(45023),
            p = i(92954),
            m = i.n(p),
            v = i(52500),
            g = i(71515),
            P = i(79792),
            k = i(81957),
            R = i(49120),
            w = i(79910),
            S = i(21999),
            y = i(34229),
            x = i(55916),
            T = i(32270),
            N = i(48813),
            b = v.default.memo(function (e) {
              var t = e.tickets,
                i = e.segmentIndex,
                n = e.toggleRefundReduceSelect,
                r = void 0 === n ? function () {} : n,
                c = e.tokenSelectionsMap,
                a = t.find(function (e) {
                  var t;
                  return (
                    (null == e ||
                    null === (t = e.refundReduceDetails) ||
                    void 0 === t
                      ? void 0
                      : t.length) > 0
                  );
                });
              if (!a) return (0, N.tZ)(g.View, {});
              var s = t
                  .filter(function (e) {
                    var t;
                    return (
                      (null == e ||
                      null === (t = e.refundReduceDetails) ||
                      void 0 === t
                        ? void 0
                        : t.length) > 0
                    );
                  })
                  .map(function (e) {
                    return e.passengerName;
                  })
                  .join("、"),
                o = a.refundReduceDetails;
              return (0, N.BX)(N.HY, {
                children: [
                  (0, N.tZ)(g.View, {
                    className: "tit",
                    children: "可用退票优惠服务",
                  }),
                  (0, N.tZ)(g.View, {
                    className: "prod-list",
                    children: o.map(function (e, t) {
                      var n = e.token,
                        a = c[n],
                        o = !e.isSelected && a;
                      return (0, N.BX)(
                        g.View,
                        {
                          className: "item",
                          id: "AbAP",
                          onClick: function () {
                            return r({
                              segmentIndex: i,
                              reduceIndex: t,
                              disabled: o,
                            });
                          },
                          children: [
                            (0, N.BX)(g.View, {
                              className: "cont",
                              children: [e.title, "(", s, ")"],
                            }),
                            !o &&
                              (0, N.tZ)(g.Text, {
                                className: "iconfont ".concat(
                                  e.isSelected ? "ifont-radioed" : "ifont-radio"
                                ),
                              }),
                            o &&
                              (0, N.tZ)(g.View, {
                                className: "disabled-radio bd-1rpx",
                              }),
                          ],
                        },
                        "index"
                      );
                    }),
                  }),
                ],
              });
            }),
            Z = function (e, t, i) {
              var n = [],
                r = [];
              return (
                t &&
                  t.forEach(function (t, a) {
                    if (((t.allInsuranceIndex = a), t.canRefund)) {
                      var s = "";
                      e.forEach(function (e) {
                        var n = t.canRefundList.filter(function (t) {
                          return t.passengerName == e.passengerName;
                        });
                        n.length > 0 &&
                          i == e.segmentIdx &&
                          (s = ""
                            .concat(s)
                            .concat(s ? "、" : "")
                            .concat(n[0].passengerName));
                      }),
                        (s = s ? "(".concat(s, ")") : ""),
                        n.push(
                          (0, c.Z)(
                            (0, c.Z)({}, t),
                            {},
                            { title2: "".concat(t.title).concat(s) }
                          )
                        );
                    } else r.push(t);
                  }),
                { canRefundList: n, canNotRefundList: r }
              );
            },
            I = v.default.memo(function (e) {
              var t = e.selectTicket,
                i = e.segment,
                n = e.index,
                r = e.selectInsurance,
                c = e.tokenSelectionsMap,
                a = Z(t, i.insuranceDetails, n),
                s = a.canRefundList,
                o = a.canNotRefundList;
              return 0 == s.length && 0 == o.length
                ? null
                : (console.log("canRefundList", s),
                  s.length
                    ? (0, N.BX)(N.HY, {
                        children: [
                          (0, N.tZ)(g.View, {
                            className: "tit",
                            children: "退订附加产品",
                          }),
                          (0, N.tZ)(g.View, {
                            className: "prod-list",
                            children: s.map(function (e) {
                              var t = e.token,
                                i = !e.isSelected && c[t];
                              return (0, N.BX)(
                                g.View,
                                {
                                  id: "AbAO",
                                  onClick: function () {
                                    return r(e, n, i);
                                  },
                                  className: "item",
                                  children: [
                                    (0, N.tZ)(g.View, {
                                      className: "cont",
                                      children: e.title2 || e.title,
                                    }),
                                    !i &&
                                      (0, N.tZ)(g.Text, {
                                        className: "iconfont ".concat(
                                          e.isSelected
                                            ? "ifont-radioed"
                                            : "ifont-radio"
                                        ),
                                      }),
                                    i &&
                                      (0, N.tZ)(g.View, {
                                        className: "disabled-radio bd-1rpx",
                                      }),
                                  ],
                                },
                                "index"
                              );
                            }),
                          }),
                        ],
                      })
                    : null);
            }),
            M = P.default.isTieyou,
            D =
              (0, k.h)()(
                (n = (function (e) {
                  (0, d.Z)(i, e);
                  var t = (0, f.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, o.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, h.Z)((0, u.Z)(n), "pageId", "10650060701"),
                      (0, h.Z)(
                        (0, u.Z)(n),
                        "toggleBaggageAllowancePolicies",
                        function () {
                          var e = n.state.showBaggageAndPolicies;
                          n.setState({ showBaggageAndPolicies: !e });
                        }
                      ),
                      (0, h.Z)(
                        (0, u.Z)(n),
                        "selectInsurance",
                        function (e, t, i) {
                          if (!i) {
                            var r = JSON.parse(
                                JSON.stringify(n.state.refundModel)
                              ),
                              c = JSON.parse(
                                JSON.stringify(n.state.tokenSelectionsMap)
                              );
                            (n.insuranceSelected = !1),
                              r.segmentList.map(function (i, n) {
                                t == n &&
                                  i.insuranceDetails &&
                                  i.insuranceDetails.forEach(function (t) {
                                    var i;
                                    t.title == e.title &&
                                      ((t.isSelected = !t.isSelected),
                                      null === (i = t.canRefundList) ||
                                        void 0 === i ||
                                        i.forEach(function (i) {
                                          var n,
                                            r,
                                            a =
                                              null ===
                                                (n = i.insuranceDetails) ||
                                              void 0 === n ||
                                              null ===
                                                (r = n.find(function (t) {
                                                  return t.title == e.title;
                                                })) ||
                                              void 0 === r
                                                ? void 0
                                                : r.token;
                                          a && (c[a] = t.isSelected);
                                        }));
                                  });
                              }),
                              n.setState(
                                { refundModel: r, tokenSelectionsMap: c },
                                n.update
                              );
                          }
                        }
                      ),
                      (0, h.Z)(
                        (0, u.Z)(n),
                        "toggleRefundReduceSelect",
                        function (e) {
                          var t = e.segmentIndex,
                            i = e.reduceIndex;
                          if (!e.disabled) {
                            var r = JSON.parse(
                                JSON.stringify(n.state.refundModel)
                              ),
                              c = JSON.parse(
                                JSON.stringify(n.state.tokenSelectionsMap)
                              ),
                              a = n.state.selectTicket,
                              s = r.segmentList[t];
                            (n.refundReduceSelected = !1),
                              s.tickets.forEach(function (e, n) {
                                var r,
                                  s =
                                    null === (r = e.refundReduceDetails) ||
                                    void 0 === r
                                      ? void 0
                                      : r[i];
                                s &&
                                  ((s.isSelected = !s.isSelected),
                                  (a.find(function (e) {
                                    return (
                                      e.segmentIdx == t && e.ticketIdx == n
                                    );
                                  }).refundReduceDetails[i].isSelected =
                                    s.isSelected),
                                  (a.find(function (e) {
                                    return (
                                      e.segmentIdx == t && e.ticketIdx == n
                                    );
                                  }).isSelected = s.isSelected),
                                  (c[s.token] = s.isSelected));
                              }),
                              n.setState(
                                { refundModel: r, tokenSelectionsMap: c },
                                n.update
                              );
                          }
                        }
                      ),
                      (0, h.Z)((0, u.Z)(n), "handleSubmit", function () {
                        var e = n.state,
                          t = e.selectTicket,
                          i = e.refundModel,
                          r = e.tokenSelectionsMap,
                          c = (i || {}).segmentList;
                        if (0 == t.length && n.isNoBodyCanRefund())
                          return (0, R.showToast)(
                            "暂无可退乘机人，如有疑问请联系客服处理"
                          );
                        var o = !1,
                          l = [];
                        t.forEach(function (e) {
                          var t,
                            i,
                            n = [],
                            a = [],
                            s = [],
                            u = c[e.segmentIdx].insuranceDetails,
                            d = void 0 === u ? [] : u;
                          d &&
                            d.forEach(function (e) {
                              o = !0;
                              var t = r[e.token];
                              !e.canRefund ||
                                e.isSelected ||
                                t ||
                                (n.push(e.title), l.push(e.title)),
                                e.canRefund &&
                                  e.isSelected &&
                                  "xProduct" == e.type &&
                                  s.push(e.title),
                                e.canRefund &&
                                  e.isSelected &&
                                  "insurance" == e.type &&
                                  a.push(e.title);
                            }),
                            (e.ignoredInsuranceList = n),
                            (e.submitInsuranceList = a),
                            (e.submitXProductList = s),
                            (e.refundReduceList =
                              (null === (t = e.refundReduceDetails) ||
                              void 0 === t ||
                              null ===
                                (i = t.filter(function (e) {
                                  return e.isSelected;
                                })) ||
                              void 0 === i
                                ? void 0
                                : i.map(function (e) {
                                    return e.token;
                                  })) || []);
                        });
                        var u = new Set(l);
                        if (o && u.size > 0) {
                          var d,
                            f = "",
                            h = 0,
                            p = (0, s.Z)(u);
                          try {
                            for (p.s(); !(d = p.n()).done; ) {
                              var m = d.value;
                              (h += 1),
                                (f = ""
                                  .concat(f)
                                  .concat(m)
                                  .concat(h !== u.size ? "、" : ""));
                            }
                          } catch (e) {
                            p.e(e);
                          } finally {
                            p.f();
                          }
                          (0, R.showModal)({
                            title: "温馨提示",
                            content: "您还有".concat(f, "未退订，是否重新选择"),
                            confirmText: "重新选",
                            cancelText: "继续退",
                            showCancel: !0,
                          }).then(function (e) {
                            e.confirm ||
                              n.setState(
                                { selectTicket: (0, a.Z)(t) },
                                function () {
                                  n.refundSubmitReq();
                                }
                              );
                          });
                        } else n.refundSubmitReq();
                      }),
                      (0, h.Z)((0, u.Z)(n), "closeRefundDrawer", function () {
                        n.setState({ showRefundDrawer: !1 });
                      }),
                      (n.state = {
                        refundModel: {},
                        selectTicket: [],
                        rescheduleRefundRemark: "",
                        initialView: 0,
                        showBaggageAndPolicies: !1,
                        paidPrice: 0,
                        paidPriceMap: {},
                        refundPriceMap: {},
                        totalRefundTicketCount: 0,
                        refundPrice: 0,
                        sumOfPrice: -1,
                        isValidPrice: !1,
                        showRefundDrawer: !1,
                        noRefundPrice: !1,
                        isCanBeTapped: !1,
                        refundPriceList: [],
                        tokenSelectionsMap: {},
                      }),
                      (n.paid_price = 0),
                      (n.refund_price = 0),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t = (0, p.getCurrentInstance)().router.params.data,
                            i = t.refundModel,
                            n = t.rescheduleRefundRemark,
                            r = t.orderNumber,
                            c = t.needShowFree,
                            a = t.remarks,
                            s = t.delta,
                            o = void 0 === s ? 0 : s,
                            l = t.goReasonPage,
                            u = (i || {}).segmentList,
                            d = w.Z.deepCopy(i);
                          u &&
                            u.length &&
                            this.setState(
                              { rescheduleRefundRemark: n },
                              function () {
                                e.isFree = e.isShowFreeMoney();
                              }
                            ),
                            (this.delta = o + 1),
                            (this.orderNumber = r),
                            (this.needShowFree = c),
                            (this.remarks = a),
                            this.initData(d);
                          var f = (this.remarks || {}).applyTips;
                          (this.applyTips = f || ""),
                            (this.goReasonPage = l),
                            console.log("---propsparams---", t);
                        },
                      },
                      {
                        key: "initData",
                        value: function (e) {
                          var t = this,
                            i = this.getCountOfAllTicketCanRefund(e),
                            n = [];
                          e.segmentList &&
                            e.segmentList.forEach(function (e, i) {
                              (e.isExitChildren = !1),
                                (e.isExitBaby = !1),
                                (e.isExitAdult = !1),
                                e.tickets.forEach(function (r, c) {
                                  var a;
                                  "成人票" == r.passengerType &&
                                    (e.isExitAdult = !0),
                                    "儿童票" == r.passengerType &&
                                      (e.isExitChildren = !0),
                                    "婴儿票" == r.passengerType &&
                                      (e.isExitBaby = !0),
                                    (r.segmentIdx = i),
                                    (r.ticketIdx = c),
                                    n.push(r),
                                    (null === (a = e.insuranceDetails) ||
                                    void 0 === a
                                      ? void 0
                                      : a.length) > 0 &&
                                      e.insuranceDetails.forEach(function (e) {
                                        var i, n;
                                        e.isSelected =
                                          t.remarks && "xProduct" === e.type
                                            ? null !==
                                                (i =
                                                  e.isSupportFlightChangeDefaultCheck) &&
                                              void 0 !== i &&
                                              i
                                            : null !== (n = e.defaultCheck) &&
                                              void 0 !== n &&
                                              n;
                                      });
                                });
                            }),
                            this.setState(
                              {
                                selectTicket: n,
                                totalRefundTicketCount: i,
                                refundModel: (0, c.Z)({}, e),
                              },
                              this.update
                            );
                        },
                      },
                      {
                        key: "update",
                        value: function () {
                          var e = this,
                            t = this.state.selectTicket;
                          this.setState(
                            {
                              isCanBeTapped: t.some(function (e) {
                                return !(
                                  !e.submitType ||
                                  (e.refundPriceDetails &&
                                    0 != e.refundPriceDetails.length)
                                );
                              }),
                            },
                            function () {
                              e.updatePriceState(), e.isShowRefundPrice();
                            }
                          );
                        },
                      },
                      {
                        key: "isShowRefundPrice",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.selectTicket,
                            n = t.refundModel.xProducts,
                            r = !1,
                            c = i.some(function (e) {
                              return (
                                !!e.submitType &&
                                (!e.refundPriceDetails ||
                                  (e.refundPriceDetails &&
                                    0 === e.refundPriceDetails.length))
                              );
                            });
                          if (n) {
                            var a = n.filter(function (e) {
                              return (
                                0 !== e.handlingFee &&
                                !e.handlingFee &&
                                e.isSelected
                              );
                            });
                            r = !!Array.isArray(a) && a.length > 0;
                          }
                          this.setState({ noRefundPrice: c || r }),
                            (this.paid_price = 0),
                            (this.refund_price = 0),
                            c &&
                              this.setState(
                                { paidPrice: 0, paidPriceMap: {} },
                                function () {
                                  i.forEach(function (t) {
                                    e.calculatePriceThatPaidToUs(t);
                                  }),
                                    n &&
                                      n.forEach(function (t) {
                                        e.calculateXProductHadPaid(t);
                                      });
                                }
                              );
                        },
                      },
                      {
                        key: "formatPassengerText",
                        value: function (e) {
                          var t = [];
                          return (
                            Array.isArray(e) &&
                              e.map(function (e) {
                                t.push(e.passengerName);
                              }),
                            { passengers: t }
                          );
                        },
                      },
                      {
                        key: "getSumOfPriceForDisplay",
                        value: function () {
                          var e = this.state,
                            t = e.sumOfPrice;
                          return e.isValidPrice ? (t <= 0 ? "0" : t) : "待确认";
                        },
                      },
                      {
                        key: "updatePriceState",
                        value: function () {
                          var e = this.state,
                            t = e.selectTicket,
                            i = e.refundModel,
                            n = e.isCanBeTapped,
                            r = i.xProducts;
                          if (n)
                            this.setState(
                              { isValidPrice: !1 },
                              this.updateTotalPrice
                            );
                          else {
                            var c = t.some(function (e) {
                                return !(
                                  Array.isArray(e.priceDetails) &&
                                  Array.isArray(e.refundPriceDetails) &&
                                  0 === e.priceDetails.length &&
                                  0 === e.refundPriceDetails.length
                                );
                              }),
                              a = !0;
                            r &&
                              (a =
                                0 ==
                                r.filter(function (e) {
                                  return (
                                    0 !== e.handlingFee &&
                                    !e.handlingFee &&
                                    e.isSelected
                                  );
                                }).length),
                              this.setState(
                                { isValidPrice: c && a },
                                this.updateTotalPrice
                              );
                          }
                        },
                      },
                      {
                        key: "isAllChild",
                        value: function (e) {
                          var t = !0;
                          return (
                            e.forEach(function (e) {
                              "成人票" == e.passengerType && (t = !1);
                            }),
                            t
                          );
                        },
                      },
                      {
                        key: "isShowFreeMoney",
                        value: function () {
                          var e = this.state.refundModel;
                          return !!this.needShowFree && !this.isExitRebook(e);
                        },
                      },
                      {
                        key: "isExitRebook",
                        value: function (e) {
                          if (this.needShowFree) {
                            var t = !1;
                            return (
                              e.segmentList &&
                                e.segmentList.forEach(function (e) {
                                  e.tickets &&
                                    e.tickets.forEach(function (e) {
                                      e.isRescheduled && (t = !0);
                                    });
                                }),
                              t
                            );
                          }
                          return !1;
                        },
                      },
                      {
                        key: "updateTotalPrice",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.refundModel,
                            n = t.selectTicket;
                          t.isValidPrice
                            ? ((this.paid_price = 0),
                              (this.refund_price = 0),
                              this.setState(
                                { paidPriceMap: {}, refundPriceMap: {} },
                                function () {
                                  n.forEach(function (t) {
                                    e.calculatePriceThatPaidToUs(t),
                                      e.calculatePriceThatWeNeedTake(t);
                                  }),
                                    e.calculateRefundPrice(),
                                    i.xProducts &&
                                      i.xProducts.forEach(function (t) {
                                        e.calculateXProductHadPaid(t),
                                          e.calculateXProductRefundPrice(t);
                                      }),
                                    e.setState({
                                      sumOfPrice: e.paid_price.zt_add(
                                        e.refund_price
                                      ),
                                    });
                                }
                              ))
                            : this.setState({ sumOfPrice: -1 });
                        },
                      },
                      {
                        key: "calculateXProductRefundPrice",
                        value: function (e) {
                          var t = this.state.refundPriceMap;
                          e.canRefund &&
                            e.isSelected &&
                            e.handlingFee &&
                            ((t[e.token] = {
                              type: "O",
                              title: e.handlingFeeRemark,
                              price: -e.handlingFee,
                              count: 1,
                            }),
                            (this.refund_price += -e.handlingFee),
                            this.setState(
                              {
                                refundPriceMap: (0, c.Z)({}, t),
                                refundPrice: this.refund_price,
                              },
                              this.getRefundPriceArr
                            ));
                        },
                      },
                      {
                        key: "calculateXProductHadPaid",
                        value: function (e) {
                          e &&
                            e.canRefund &&
                            e.isSelected &&
                            ((this.paidPriceMap[e.token] = {
                              type: "O",
                              title: e.title,
                              price: e.price,
                              count: 1,
                            }),
                            this.setState({ paidPrice: e.price }));
                        },
                      },
                      {
                        key: "getReasonId",
                        value: function (e) {
                          if (e.length > 1) {
                            var t = e.filter(function (e) {
                                return 11 == e.refundTips.type;
                              }),
                              i = e.filter(function (e) {
                                return 2 == e.refundTips.type;
                              });
                            return t.length > 0 ? 11 : i.length > 0 ? 2 : 1;
                          }
                          if (1 == e.length) return e[0].refundTips.type;
                        },
                      },
                      {
                        key: "getSelectSegment",
                        value: function () {
                          var e = this.state,
                            t = e.selectTicket,
                            i = (e.refundModel || {}).segmentList,
                            n = t
                              .map(function (e) {
                                return e.segmentIdx;
                              })
                              .map(function (e) {
                                return i[e];
                              });
                          return w.Z.unique(n);
                        },
                      },
                      {
                        key: "getPassArr",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.selectTicket,
                            n = (t.refundModel || {}).segmentList;
                          return i.map(function (t) {
                            var i = n[t.segmentIdx].segmentInfo;
                            return {
                              flightNumber: i.flightNumber,
                              segmentIndex: i.segmentIndex || {},
                              passengerName: t.passengerName,
                              submitType: t.submitType,
                              token: t.token,
                              submitInsuranceList: t.submitInsuranceList,
                              submitXProductList: t.submitXProductList,
                              refundReduceList: t.refundReduceList,
                              proof: e.needShowFree ? t.photos : [],
                            };
                          });
                        },
                      },
                      {
                        key: "getUserAction",
                        value: function (e) {
                          return (
                            (this.remarks || {}).userAction ||
                            (this.needShowFree
                              ? e.length > 0 &&
                                e[0].proof &&
                                e[0].proof.length > 0
                                ? "PROOF"
                                : "NO_PROOF"
                              : "")
                          );
                        },
                      },
                      {
                        key: "getSelectTokens",
                        value: function () {
                          var e = this.state.refundModel.xProducts,
                            t = [];
                          return (
                            e &&
                              e.forEach(function (e) {
                                e.isSelected && t.push(e.token);
                              }),
                            t
                          );
                        },
                      },
                      {
                        key: "isNoBodyCanRefund",
                        value: function () {
                          var e = (this.state.refundModel || {}).segmentList,
                            t = !0;
                          return (
                            e &&
                              e.forEach(function (e) {
                                e.tickets &&
                                  e.tickets.forEach(function (e) {
                                    e.canRefund && (t = !1);
                                  });
                              }),
                            t
                          );
                        },
                      },
                      {
                        key: "gotoDetail",
                        value: function () {
                          m().navigateBack({ delta: this.delta });
                        },
                      },
                      {
                        key: "refundSubmitReq",
                        value: function () {
                          var e = this,
                            t = (this.state.refundModel.hintText || {})
                              .submitPopText,
                            i = (this.remarks || {}).submitTips,
                            n = this.isFree ? i : t;
                          (0, R.showModal)({
                            title: "确定提交退票吗？",
                            content:
                              n ||
                              "申请提交后不可撤销，将尽快为您取消机位、处理退款",
                            cancelText: "取消",
                            confirmText: "确认",
                            showCancel: !0,
                          }).then(function (t) {
                            if (t.confirm) {
                              var i = e.getSelectSegment(),
                                n = e.getPassArr(),
                                r = {
                                  orderNumber: e.orderNumber,
                                  refundFeeInvoiceInfo: {},
                                  refundReasonId: e.getReasonId(i),
                                  returnTicketList: n,
                                  userAction: e.getUserAction(n),
                                  hasProofUploaded: !1,
                                  xTokens: e.getSelectTokens(),
                                };
                              console.log(r),
                                (0, R.showLoading)("正在退票..."),
                                (0, x.MQ)(r)
                                  .then(function (t) {
                                    var i = t.resultCode,
                                      n = t.resultMessage;
                                    1 === i
                                      ? (0, R.showModal)({
                                          title: "温馨提示",
                                          content: n || "退票成功",
                                        }).then(function (t) {
                                          t.confirm && e.gotoDetail();
                                        })
                                      : -99 == i
                                      ? (0, R.showToast)(
                                          "退票失败，请联系在线客服"
                                        )
                                      : -4 == i
                                      ? (0, R.showModal)({
                                          title: "温馨提示",
                                          content:
                                            "退票手续费发送变动，将为您重新查询退款金额",
                                        }).then(function (t) {
                                          t.confirm && e.gotoDetail();
                                        })
                                      : -3 == i || 5003 == i
                                      ? (0, R.showModal)({
                                          title: "温馨提示",
                                          content: n,
                                          confirmText: "我知道了",
                                        }).then(function (t) {
                                          t.confirm && e.gotoDetail();
                                        })
                                      : (0, R.showToast)(
                                          n || "退票失败，请重试"
                                        );
                                  })
                                  .catch(function () {
                                    (0,
                                    R.showToast)("网络出了小差，请稍后再试~");
                                  })
                                  .finally(function () {
                                    (0, R.hideLoading)();
                                  });
                            }
                          });
                        },
                      },
                      {
                        key: "renderRefundText",
                        value: function (e) {
                          return (0, N.tZ)(g.View, {
                            className: "txt",
                            children: (0, N.tZ)(g.Text, {
                              class: "color-red price",
                              children: e,
                            }),
                          });
                        },
                      },
                      {
                        key: "getPriceListTitle",
                        value: function (e, t, i) {
                          var n = (this.state.refundModel || {}).explanation;
                          return (0, N.BX)(g.View, {
                            className: "item strong",
                            children: [
                              (0, N.tZ)(g.View, {
                                className: "tit",
                                children: e,
                              }),
                              "product" === i &&
                                n &&
                                (0, N.tZ)(g.Text, {
                                  id: "AbAQ",
                                  onClick: this.openRefundDrawer,
                                  className: "ifont-detail iconfont",
                                }),
                              (0, N.tZ)(g.View, {
                                className: "rbox",
                                children: (0, N.tZ)(g.View, {
                                  className: "price",
                                  children:
                                    "待确认" == t ? "待确认" : "¥".concat(t),
                                }),
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "getCountOfAllTicketCanRefund",
                        value: function (e) {
                          var t = 0,
                            i = e.originSegmentList || e.segmentList;
                          return (
                            null == i ||
                              i.forEach(function (e) {
                                e.tickets.forEach(function (e) {
                                  e.canRefund && t++;
                                });
                              }),
                            t
                          );
                        },
                      },
                      {
                        key: "updateHadCoupon",
                        value: function () {
                          var e = this.state.selectTicket,
                            t = { price: 0, exit: !1 };
                          e &&
                            e.forEach(function (e) {
                              e.priceDetails &&
                                e.priceDetails.forEach(function (e) {
                                  e.title &&
                                    -1 !== e.title.indexOf("优惠券") &&
                                    ((t.exit = !0),
                                    (t.price = Math.abs(e.price)));
                                });
                            }),
                            (this.exitCoupon = t);
                        },
                      },
                      {
                        key: "calculatePriceThatPaidToUs",
                        value: function (e) {
                          var t = this,
                            i = this.state,
                            n = i.paidPriceMap,
                            r = i.totalRefundTicketCount,
                            a = i.selectTicket,
                            s = (i.refundModel || {}).segmentList;
                          e.priceDetails.forEach(function (i) {
                            if ("P" == i.type) {
                              var o = !1,
                                l = s[e.segmentIdx];
                              if (
                                (l &&
                                  l.insuranceDetails &&
                                  l.insuranceDetails.forEach(function (e) {
                                    i.title != e.title ||
                                      e.isSelected ||
                                      (o = !0);
                                  }),
                                e.insuranceDetails &&
                                  e.insuranceDetails.forEach(function (e) {
                                    i.title != e.title ||
                                      e.canRefund ||
                                      (o = !0);
                                  }),
                                o)
                              )
                                return;
                              t.paid_price = t.paid_price.zt_add(i.price);
                              var u = i.title + "|" + i.price;
                              n[u]
                                ? (n[u].count += 1)
                                : (n[u] = {
                                    type: "P",
                                    title: i.title,
                                    price: i.price,
                                    count: 1,
                                  });
                            }
                            if (
                              r === a.length &&
                              "O" == i.type &&
                              -1 == i.title.indexOf("配送费")
                            ) {
                              "优惠券" == i.title &&
                                (i.title = "优惠券(自愿退时不可退)");
                              var d = i.title + "|" + i.price;
                              n[d] ||
                                ((n[d] = {
                                  type: "O",
                                  title: i.title,
                                  price: i.price,
                                  count: 1,
                                }),
                                (t.paid_price = t.paid_price.zt_add(i.price)));
                            }
                            if (
                              t.isShowUpPeisong() &&
                              "O" == i.type &&
                              -1 != i.title.indexOf("配送费")
                            ) {
                              var f = i.title + "|" + i.price;
                              n[f] ||
                                ((n[f] = {
                                  type: "O",
                                  title: i.title,
                                  price: i.price,
                                  count: 1,
                                }),
                                (t.paid_price = t.paid_price.zt_add(i.price)));
                            }
                            console.log("---paidPriceMap---", n),
                              t.setState({
                                paidPrice: t.paid_price,
                                paidPriceMap: (0, c.Z)({}, n),
                              });
                          });
                        },
                      },
                      {
                        key: "isShowUpPeisong",
                        value: function () {
                          var e,
                            t,
                            i,
                            n = this.state,
                            r = n.refundModel,
                            c = n.totalRefundTicketCount,
                            a = n.selectTicket,
                            s = n.isValidPrice;
                          if (
                            null === (e = r.refundFeeInvoiceInfo) ||
                            void 0 === e ||
                            !e.deliveryHasPaid
                          )
                            return !1;
                          if (c === a.length) return !r.hasRefundPriceInvoice;
                          if (
                            null === (t = r.refundFeeInvoiceInfo) ||
                            void 0 === t ||
                            !t.isShowRefundInvoice
                          )
                            return !1;
                          var o = 0;
                          return (
                            a.forEach(function (e) {
                              var t =
                                e.refundPriceDetails.length &&
                                e.refundPriceDetails.reduce(
                                  function (e, t) {
                                    return e.price + t.price;
                                  },
                                  { price: 0 }
                                );
                              o += t;
                            }),
                            !(0 == o || !s) &&
                              (null === (i = r.refundFeeInvoiceInfo) ||
                              void 0 === i
                                ? void 0
                                : i.deliveryHasPaid)
                          );
                        },
                      },
                      {
                        key: "openRefundDrawer",
                        value: function () {
                          this.setState({ showRefundDrawer: !0 });
                        },
                      },
                      {
                        key: "calculateRefundPrice",
                        value: function () {
                          var e,
                            t,
                            i,
                            n,
                            r,
                            a = this.state,
                            s = a.selectTicket,
                            o = a.refundModel,
                            l = a.isValidPrice,
                            u = a.refundPriceMap;
                          if (
                            null !== (e = o.refundFeeInvoiceInfo) &&
                            void 0 !== e &&
                            e.isShowRefundInvoice
                          ) {
                            var d = 0;
                            if (
                              (s.forEach(function (e) {
                                var t =
                                  e.refundPriceDetails.length &&
                                  e.refundPriceDetails.reduce(
                                    function (e, t) {
                                      return e.price + t.price;
                                    },
                                    { price: 0 }
                                  );
                                d += t;
                              }),
                              0 != d &&
                                l &&
                                null !== (t = o.refundFeeInvoiceInfo) &&
                                void 0 !== t &&
                                t.deliveryHasPaid)
                            ) {
                              var f = !(
                                  (null !== (i = o.refundFeeInvoiceInfo) &&
                                    void 0 !== i &&
                                    i.deliveryHasPaid) ||
                                  o.isElectronicInvoice
                                ),
                                h =
                                  o.invoiceRelateInfo &&
                                  o.invoiceRelateInfo.electronicInvoiceInfo &&
                                  o.invoiceRelateInfo.electronicInvoiceInfo
                                    .electronicInvoice;
                              if (
                                (!f ||
                                  !h ||
                                  2 !=
                                    (null === (n = o.refundFeeInvoiceInfo) ||
                                    void 0 === n
                                      ? void 0
                                      : n.deliveryType)) &&
                                (f || !o.isElectronicInvoice)
                              ) {
                                var p = (
                                  null === (r = o.refundFeeInvoiceInfo) ||
                                  void 0 === r
                                    ? void 0
                                    : r.invoiceRelateInfo
                                ).deliveryPrice;
                                (this.refund_price -= p),
                                  (u["配送费|" + p] = {
                                    type: "O",
                                    title: "配送费",
                                    price: -p,
                                    count: 1,
                                  }),
                                  this.setState({
                                    refundPriceMap: (0, c.Z)({}, u),
                                  });
                              }
                            }
                          }
                        },
                      },
                      {
                        key: "calculatePriceThatWeNeedTake",
                        value: function (e) {
                          var t,
                            i,
                            n = this,
                            r = this.state.refundPriceMap,
                            a = function (e) {
                              n.refund_price = n.refund_price.zt_add(e.price);
                              var t = e.title + "|" + e.price;
                              r[t]
                                ? (r[t].count += 1)
                                : (r[t] = {
                                    type: "P",
                                    title: e.title,
                                    price: e.price,
                                    count: 1,
                                  });
                            };
                          null === (t = e.refundPriceDetails) ||
                            void 0 === t ||
                            t.forEach(function (e) {
                              a(e);
                            }),
                            null === (i = e.refundReduceDetails) ||
                              void 0 === i ||
                              i.forEach(function (e) {
                                e.isSelected && a(e);
                              }),
                            this.setState(
                              {
                                refundPrice: this.refund_price,
                                refundPriceMap: (0, c.Z)({}, r),
                              },
                              this.getRefundPriceArr
                            );
                        },
                      },
                      {
                        key: "getFormatePrice",
                        value: function (e) {
                          return null == e
                            ? e
                            : "string" == typeof e
                            ? parseInt(e)
                            : e < 0
                            ? "-¥".concat(Math.abs(e))
                            : "¥".concat(Math.abs(e));
                        },
                      },
                      {
                        key: "getRefundPriceArr",
                        value: function () {
                          var e = this.state.refundPriceMap,
                            t = [];
                          Object.keys(e).forEach(function (i) {
                            var n = e[i];
                            t.push(n);
                          }),
                            this.setState({ refundPriceList: t });
                        },
                      },
                      {
                        key: "renderRefundPriceList",
                        value: function (e) {
                          var t = this;
                          return e.map(function (e) {
                            var i = e.title,
                              n = e.price,
                              r = e.count,
                              c = e.unit,
                              a = e.isCoupon;
                            return (0,
                            N.BX)(g.View, { className: "item", children: [(0, N.tZ)(g.View, { className: "txt", children: i }), (0, N.BX)(g.View, { className: "rbox", children: [(0, N.tZ)(g.View, { className: "price", children: "".concat(a ? "-".concat(n) : t.getFormatePrice(e.price)) }), "×", "".concat(r).concat("P" === c || "人" === c ? "人" : "份")] })] }, i);
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            i,
                            n,
                            r = this,
                            c = this.state,
                            a = c.initialView,
                            s = c.rescheduleRefundRemark,
                            o = c.showBaggageAndPolicies,
                            l = c.paidPriceMap,
                            u = c.paidPrice,
                            d = c.refundPrice,
                            f = c.showRefundDrawer,
                            h = c.refundModel,
                            p = c.noRefundPrice,
                            m = c.refundPriceList,
                            v = c.selectTicket,
                            P = c.tokenSelectionsMap,
                            k = h.explanation,
                            R = void 0 === k ? [] : k,
                            w = h.segmentList;
                          return (0, N.BX)(g.View, {
                            className: M ? "ty" : "zx",
                            children: [
                              (0, N.BX)(g.View, {
                                className: "wrap",
                                children: [
                                  w &&
                                    w.map(function (e, t) {
                                      var i = e.type,
                                        n = e.segmentInfo,
                                        c = e.tickets,
                                        a = e.refundRule,
                                        s = e.isExitAdult,
                                        o = e.isExitChildren,
                                        l = e.isExitBaby,
                                        u = e.refundTips,
                                        d = a.currentAdultRefundRule,
                                        f = a.currentChildRefundRule,
                                        h = a.currentBabyRefundRule,
                                        p = n || {},
                                        m = p.departCityName,
                                        k = void 0 === m ? "" : m,
                                        R = p.arriveCityName,
                                        w = void 0 === R ? "" : R,
                                        S = r
                                          .formatPassengerText(c)
                                          .passengers.join("、");
                                      return (0,
                                      N.BX)(g.View, { className: "white-box route-box", children: [(0, N.BX)(g.View, { className: "route-hd", children: [i && (0, N.tZ)(g.View, { className: "tag", children: i }), (0, N.BX)(g.View, { className: "tit", children: [k, "-", w] })] }), r.needShowFree && r.applyTips ? (0, N.tZ)(g.View, { className: "route-tips", children: (0, N.tZ)(y.ZtRichText, { nodes: r.applyTips, space: "nbsp" }) }) : null, !r.needShowFree && null != u && u.content ? (0, N.tZ)(g.View, { className: "route-tips", children: (0, N.tZ)(y.ZtRichText, { nodes: u.content, space: "nbsp" }) }) : null, (0, N.BX)(g.View, { className: "route-bd", children: [(0, N.BX)(g.View, { className: "name-info", children: [(0, N.tZ)(g.View, { className: "label", children: "退票人:" }), (0, N.tZ)(g.View, { className: "cont", children: S })] }), (0, N.tZ)(b, { tickets: c, segmentIndex: t, toggleRefundReduceSelect: r.toggleRefundReduceSelect, tokenSelectionsMap: P }), (0, N.tZ)(I, { selectTicket: v, segment: e, index: t, selectInsurance: r.selectInsurance, tokenSelectionsMap: P })] }), (0, N.BX)(g.View, { className: "route-botm", children: [(0, N.tZ)(g.View, { className: "label", children: "退票费:" }), r.isFree ? (0, N.tZ)(g.View, { className: "cont", children: "¥0/人" }) : (0, N.tZ)(N.HY, { children: !!a && (0, N.BX)(g.View, { className: "cont", children: [s && d && r.renderRefundText(d), o && f && r.renderRefundText(f), l && h && r.renderRefundText(h)] }) }), (0, N.BX)(g.View, { className: "rbox", id: "AbAR", onClick: r.toggleBaggageAllowancePolicies, children: ["退改规则", (0, N.tZ)(g.Text, { className: "ifont-arr iconfont" })] })] })] }, "index");
                                    }),
                                  h.xProducts && h.xProducts.length
                                    ? (0, N.tZ)(g.View, {
                                        className: "modify-tips",
                                        children:
                                          "【温馨提示】：除保险产品外，其他附加产品请前往原预订渠道退订",
                                      })
                                    : null,
                                  (0, N.BX)(g.View, {
                                    className: "white-box detail-box",
                                    children: [
                                      (0, N.tZ)(g.View, {
                                        className: "detail-hd",
                                        children: "退票明细",
                                      }),
                                      (0, N.BX)(g.View, {
                                        className: "detail-bd",
                                        children: [
                                          this.getPriceListTitle(
                                            "退订产品",
                                            u,
                                            "product"
                                          ),
                                          this.renderRefundPriceList(
                                            Object.values(l)
                                          ),
                                        ],
                                      }),
                                      !this.isFree &&
                                        (0, N.BX)(g.View, {
                                          className: "detail-bd",
                                          children: [
                                            this.getPriceListTitle(
                                              "需扣款项",
                                              p ? "待确认" : d,
                                              "deduct"
                                            ),
                                            this.renderRefundPriceList(m),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, N.BX)(g.View, {
                                className: "fixed-bottm",
                                children: [
                                  (0, N.BX)(g.View, {
                                    className: "cont",
                                    children: [
                                      (0, N.tZ)(g.View, {
                                        className: "price color-red",
                                        children: this.isFree
                                          ? u
                                          : this.getSumOfPriceForDisplay(),
                                      }),
                                      (0, N.tZ)(g.View, {
                                        className: "txt",
                                        children: "实退总额",
                                      }),
                                    ],
                                  }),
                                  (0, N.tZ)(g.Button, {
                                    className: "btn-next btn-primary",
                                    id: "AbAS",
                                    onClick: this.handleSubmit,
                                    children: "确定",
                                  }),
                                ],
                              }),
                              (0, N.tZ)(T.ZP, {
                                initialView: a,
                                rescheduleRefundRemark: s,
                                isShow: o,
                                handleClose:
                                  this.toggleBaggageAllowancePolicies,
                                dptName:
                                  null == w ||
                                  null === (e = w[0]) ||
                                  void 0 === e ||
                                  null === (t = e.segmentInfo) ||
                                  void 0 === t
                                    ? void 0
                                    : t.departCityName,
                                arrName:
                                  null == w ||
                                  null === (i = w[0]) ||
                                  void 0 === i ||
                                  null === (n = i.segmentInfo) ||
                                  void 0 === n
                                    ? void 0
                                    : n.arriveCityName,
                                height: "90vh",
                              }),
                              (0, N.tZ)(y.ZtDrawer, {
                                show: f,
                                title: "退订产品说明",
                                onWrapClose: this.closeRefundDrawer,
                                onClose: this.closeRefundDrawer,
                                className: "refund-drawer",
                                children:
                                  R &&
                                  R.map(function (e, t) {
                                    return (0,
                                    N.tZ)(g.View, { children: "".concat(t + 1, "、").concat(e) }, "index");
                                  }),
                              }),
                              (0, N.tZ)(S.Z, {
                                ref: function (e) {
                                  r.onDrawerAttach(e);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(v.Component))
              ) || n;
          Page(
            (0, r.createPageConfig)(
              D,
              "pages/flightAfterSale/refundDetail/refundDetail",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "退票申请",
                backgroundColor: "#5495e6",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            8014, 81198, 30120, 8905, 22175, 87479, 90719, 27849, 19559, 11216,
            68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(793);
          }
        ),
          e.O();
      },
    ]);
})();
