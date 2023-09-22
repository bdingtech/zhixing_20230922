!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [86875],
      {
        1130: function (e, t, n) {
          var i,
            c = n(32180),
            o = n(57042),
            l = n(24460),
            r = n(81876),
            a = n(21867),
            s = n(86066),
            u = n(45023),
            d = n(52500),
            h = (n(92954), n(79792)),
            m = n(65573),
            f = n(44778),
            g = n(18783),
            v = n(81957),
            w = {
              name: "page",
              state: {},
              reducers: {
                setState: function (e, t) {
                  return t;
                },
              },
              effects: function () {
                return {};
              },
            },
            x = n(22276),
            p = n(298),
            Z = n(49120),
            N = n(59163),
            C = {
              name: "exchange",
              state: {
                selectTab: 0,
                creditNumber: 0,
                recommendRewardList: [],
                allRewardList: [],
                recommendCreditDeductList: [],
                creditDeductList: [],
                receiveCreditList: [],
                receiveCreditButtonText: "全部领取",
                showCouponRule: !1,
                couponRules: [],
                hotActivities: [],
              },
              reducers: {
                setState: function (e, t) {
                  return (0, p.Z)((0, p.Z)({}, e), t);
                },
                setShowCouponRule: function (e, t) {
                  return (0, p.Z)((0, p.Z)({}, e), {}, { showCouponRule: t });
                },
                setSelectTab: function (e, t) {
                  return (0, p.Z)((0, p.Z)({}, e), {}, { selectTab: t });
                },
              },
              effects: function (e) {
                return {
                  init: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    null != t && t.needLoading && (0, Z.showLoading)("加载中"),
                      e.exchange.requestUserVipCreditInfo(),
                      e.exchange.requestCreditDeductionProducts(),
                      e.exchange.requestManualReceiveOrderCreditInfo(),
                      e.exchange.requestGuideToLineInfo();
                  },
                  requestUserVipCreditInfo: function () {
                    (0, N.cA)({ sourceType: 1 })
                      .then(function (t) {
                        if (1 === (null == t ? void 0 : t.resultCode)) {
                          var n,
                            i = [];
                          null == t ||
                            null === (n = t.creditExchangeList) ||
                            void 0 === n ||
                            n.forEach(function (e) {
                              var t;
                              null == e ||
                                null === (t = e.rewardInfoList) ||
                                void 0 === t ||
                                t.forEach(function (e) {
                                  i.push(e);
                                });
                            });
                          var c =
                              (null == i
                                ? void 0
                                : i.filter(function (e) {
                                    return (
                                      1 === (null == e ? void 0 : e.status)
                                    );
                                  })) || [],
                            o =
                              (null == i
                                ? void 0
                                : i.filter(function (e) {
                                    return (
                                      1 !== (null == e ? void 0 : e.status)
                                    );
                                  })) || [],
                            l = [].concat((0, x.Z)(c), (0, x.Z)(o));
                          e.exchange.setState({
                            creditNumber:
                              (null == t ? void 0 : t.creditNumber) || 0,
                            recommendRewardList:
                              null == l ? void 0 : l.slice(0, 4),
                            allRewardList: i,
                          });
                        }
                      })
                      .catch(function (e) {
                        return console.log(e);
                      });
                  },
                  requestCreditDeductionProducts: function () {
                    (0, N.i8)()
                      .then(function (t) {
                        var n;
                        (0, Z.hideLoading)(),
                          1 === (null == t ? void 0 : t.resultCode) &&
                            e.exchange.setState({
                              recommendCreditDeductList:
                                null == t ||
                                null === (n = t.products) ||
                                void 0 === n
                                  ? void 0
                                  : n.slice(0, 4),
                              creditDeductList:
                                (null == t ? void 0 : t.products) || [],
                            });
                      })
                      .catch(function (e) {
                        (0, Z.hideLoading)(), console.log(e);
                      });
                  },
                  requestManualReceiveOrderCreditInfo: function () {
                    var e = this;
                    (0, N.Oj)()
                      .then(function (t) {
                        e.setState({
                          receiveCreditList:
                            (null == t ? void 0 : t.orderCreditEntities) || [],
                          receiveCreditButtonText:
                            (null == t ? void 0 : t.buttonText) || "全部领取",
                        });
                      })
                      .catch(function (e) {
                        return console.log(e);
                      });
                  },
                  requestGuideToLineInfo: function () {
                    (0, N._O)()
                      .then(function (t) {
                        var n;
                        1 === (null == t ? void 0 : t.resultCode) &&
                        (null == t ||
                        null === (n = t.activities) ||
                        void 0 === n
                          ? void 0
                          : n.length) > 0
                          ? e.exchange.setState({
                              hotActivities: null == t ? void 0 : t.activities,
                            })
                          : e.exchange.setState({ hotActivities: [] });
                      })
                      .catch(function (e) {
                        return console.log(e);
                      });
                  },
                  onShowCouponRule: function (t) {
                    e.exchange.setState({ showCouponRule: !0, couponRules: t });
                  },
                };
              },
            },
            b = n(93761),
            T = n(13025),
            V = {
              page: w,
              exchange: C,
              creditAction: {
                name: "creditAction",
                state: {
                  creditNumber: 0,
                  recommendRewardList: [],
                  allRewardList: [],
                  recommendCreditDeductList: [],
                  creditDeductList: [],
                  receiveCreditList: [],
                  receiveCreditButtonText: "全部领取",
                  exchangeItem: null,
                  deductExchangeItem: null,
                  showExchangeToast: !1,
                  showDeductExchangeToast: !1,
                  isSuccessCreditExchange: !1,
                },
                reducers: {
                  setState: function (e, t) {
                    return (0, p.Z)((0, p.Z)({}, e), t);
                  },
                  setExchangeItem: function (e, t) {
                    return (0, p.Z)((0, p.Z)({}, e), {}, { exchangeItem: t });
                  },
                  setDeductExchangeItem: function (e, t) {
                    return (0, p.Z)(
                      (0, p.Z)({}, e),
                      {},
                      { deductExchangeItem: t }
                    );
                  },
                  setShowExchangeToast: function (e, t) {
                    return (0, p.Z)(
                      (0, p.Z)({}, e),
                      {},
                      { showExchangeToast: t }
                    );
                  },
                  setShowDeductExchangeToast: function (e, t) {
                    return (0, p.Z)(
                      (0, p.Z)({}, e),
                      {},
                      { showDeductExchangeToast: t }
                    );
                  },
                  setIsSuccessCreditExchange: function (e, t) {
                    return (0, p.Z)(
                      (0, p.Z)({}, e),
                      {},
                      { isSuccessCreditExchange: t }
                    );
                  },
                },
                effects: function (e) {
                  return {
                    receiveCredit: function (t) {
                      var n,
                        i =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        c =
                          null == i || null === (n = i.exchange) || void 0 === n
                            ? void 0
                            : n.receiveCreditList,
                        o = {
                          receiveKeys:
                            null == c
                              ? void 0
                              : c.map(function (e) {
                                  return e.receiveKey;
                                }),
                        };
                      (0, N.An)(o)
                        .then(function (t) {
                          1 === (null == t ? void 0 : t.resultCode)
                            ? ((0, Z.showToast)("领取成功"), e.exchange.init())
                            : (0, Z.showToast)(
                                (null == t ? void 0 : t.resultMessage) ||
                                  "网络异常，请稍后再试"
                              );
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                    },
                    creditExchange: function (t) {
                      var n = t,
                        i = {
                          code: null == n ? void 0 : n.code,
                          businessType: "PointWechatShop",
                        };
                      (0, T.U6)(i)
                        .then(function (t) {
                          1 === (null == t ? void 0 : t.resultCode)
                            ? ((0, Z.showToast)(
                                (null == t ? void 0 : t.resultMessage) ||
                                  "兑换成功"
                              ),
                              e.exchange.init(),
                              e.creditAction.setState({
                                isSuccessCreditExchange: !0,
                              }))
                            : ((0, Z.showToast)(
                                (null == t ? void 0 : t.resultMessage) ||
                                  "网络异常，请稍后再试～"
                              ),
                              e.creditAction.setState({
                                isSuccessCreditExchange: !1,
                              }),
                              e.creditAction.setShowExchangeToast(!1));
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                    },
                    creditDeductExchange: function (t) {
                      var n = t,
                        i = [];
                      i.push({
                        name: "ubtAppId",
                        value: h.default.memberSellUbtValue || "10000",
                      });
                      var c = {
                        payProductType: 2,
                        fromType: 1,
                        exchangeShopInfoEntity: {
                          productCode: null == n ? void 0 : n.productCode,
                          credit: null == n ? void 0 : n.costCredit,
                          payPrice: null == n ? void 0 : n.costMoney,
                        },
                      };
                      (0, N.xQ)(c, { extension: i })
                        .then(function (t) {
                          var n;
                          1 === (null == t ? void 0 : t.resultCode)
                            ? (e.creditAction.setShowDeductExchangeToast(!1),
                              b.ZP.doPayment({
                                orderNumber: null == t ? void 0 : t.orderNumber,
                                goodsId:
                                  null == t ||
                                  null === (n = t.cashierInfoEntity) ||
                                  void 0 === n
                                    ? void 0
                                    : n.goodsId,
                                business: "",
                                title: "积分购买",
                              })
                                .then(function () {
                                  e.exchange.init();
                                })
                                .catch(function () {
                                  e.exchange.init();
                                }))
                            : (0, Z.showToast)(
                                (null == t ? void 0 : t.resultMessage) ||
                                  "网络异常，请稍后再试～"
                              );
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                    },
                  };
                },
              },
            },
            S = n(71515),
            B = n(48813),
            E = (0, m.$j)(
              function (e) {
                return { selectTab: e.exchange.selectTab };
              },
              function (e) {
                return {
                  onSelectTab: function (t) {
                    return e.exchange.setSelectTab(t);
                  },
                };
              }
            )(function (e) {
              var t = e.onSelectTab,
                n = e.selectTab;
              return (0, B.BX)(S.View, {
                className: "store-page-header flex",
                children: [
                  (0, B.BX)(S.View, {
                    className: "item flex-center ".concat(
                      0 === n ? "active" : ""
                    ),
                    id: "ACBi",
                    onClick: function () {
                      return t(0);
                    },
                    children: [
                      "推荐",
                      0 === n &&
                        (0, B.tZ)(S.View, { className: "active-line" }),
                    ],
                  }),
                  (0, B.BX)(S.View, {
                    className: "item flex-center ".concat(
                      1 === n ? "active" : ""
                    ),
                    id: "ACBj",
                    onClick: function () {
                      return t(1);
                    },
                    children: [
                      "积分兑",
                      1 === n &&
                        (0, B.tZ)(S.View, { className: "active-line" }),
                    ],
                  }),
                ],
              });
            }),
            L = (0, m.$j)(
              function (e) {
                return {
                  creditNumber: e.exchange.creditNumber,
                  receiveList: e.exchange.receiveCreditList,
                  navigateTo: e.page.navigateTo,
                };
              },
              function () {
                return {};
              }
            )(function (e) {
              var t = e.creditNumber,
                n = e.receiveList,
                i = e.navigateTo;
              return (0, B.BX)(S.View, {
                className: "store-page-total flex",
                id: "ACBe",
                onClick: function () {
                  i({ url: "/pages/usercenter/integral/integral" });
                },
                children: [
                  (0, B.tZ)(S.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/jfscjb@3x.png",
                    className: "icon",
                  }),
                  (0, B.BX)(S.View, {
                    className: "number-wrap",
                    children: [
                      (0, B.tZ)(S.Text, { className: "num", children: t }),
                      (null == n ? void 0 : n.length) > 0 &&
                        (0, B.tZ)(S.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/xsj@3x.png",
                          className: "arrow",
                        }),
                    ],
                  }),
                  (0, B.tZ)(S.Text, {
                    className: "iconfont ifont-arr detail-arrow",
                  }),
                ],
              });
            }),
            A = function (e) {
              var t = e.data;
              return (0, B.BX)(S.View, {
                className: "item",
                children: [
                  (0, B.tZ)(S.View, {
                    className: "icon flex-center",
                    children: null == t ? void 0 : t.title,
                  }),
                  (0, B.tZ)(S.View, {
                    className: "name",
                    children: null == t ? void 0 : t.subTitle,
                  }),
                ],
              });
            },
            I = (0, m.$j)(
              function (e) {
                return { list: e.exchange.receiveCreditList };
              },
              function (e) {
                return {
                  onReceive: function (t) {
                    return e.creditAction.receiveCredit(t);
                  },
                };
              }
            )(function (e) {
              var t = e.list,
                n = e.onReceive;
              if (null == t || !t.length) return (0, B.tZ)(S.View, {});
              return (0, B.BX)(S.View, {
                className: "store-page-receive flex",
                children: [
                  (0, B.BX)(S.View, {
                    className: "list flex",
                    children: [
                      null == t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0,
                            B.tZ)(A, { data: e }, "receive-item-".concat(t));
                          }),
                      (null == t ? void 0 : t.length) < 4 &&
                        (function () {
                          for (
                            var e = [], n = 0;
                            n < 4 - (null == t ? void 0 : t.length);
                            n++
                          )
                            e.push(
                              (0, B.tZ)(S.View, {
                                className: "item flex-center disable",
                                children: (0, B.tZ)(S.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/zwqp@3x.png",
                                  className: "disable-icon ",
                                }),
                              })
                            );
                          return e;
                        })(),
                    ],
                  }),
                  (0, B.tZ)(S.View, {
                    className: "btn flex-center",
                    id: "ACBl",
                    onClick: n,
                    children: "全部领取",
                  }),
                ],
              });
            }),
            D = (0, m.$j)(
              function (e) {
                return { creditNumber: e.exchange.creditNumber };
              },
              function (e) {
                return {
                  setExchangeItem: function (t) {
                    return e.creditAction.setExchangeItem(t);
                  },
                  setDeductExchangeItem: function (t) {
                    return e.creditAction.setDeductExchangeItem(t);
                  },
                  setShowExchangeToast: function (t) {
                    return e.creditAction.setShowExchangeToast(t);
                  },
                  setShowDeductExchangeToast: function (t) {
                    return e.creditAction.setShowDeductExchangeToast(t);
                  },
                  onShowCouponRule: function (t) {
                    return e.exchange.onShowCouponRule(t);
                  },
                };
              }
            )(function (e) {
              var t,
                n,
                i,
                c,
                o,
                l,
                r,
                a,
                s = e.data,
                u = e.isReward,
                d = void 0 === u || u,
                h = e.creditNumber,
                m = e.setExchangeItem,
                f = e.setDeductExchangeItem,
                g = e.setShowExchangeToast,
                v = e.setShowDeductExchangeToast,
                w = e.onShowCouponRule,
                x = function () {
                  if (d) m(s), g(!0);
                  else {
                    if (h < (null == s ? void 0 : s.costCredit))
                      return void (0, Z.showToast)("积分余额不足");
                    f(s), v(!0);
                  }
                },
                p = (function () {
                  var e, t;
                  return null != s &&
                    null !== (e = s.title) &&
                    void 0 !== e &&
                    e.includes("黑钻会员")
                    ? "hzMember"
                    : null != s &&
                      null !== (t = s.title) &&
                      void 0 !== t &&
                      t.includes("铂金会员")
                    ? "bjMember"
                    : "normal";
                })(),
                N = "normal" !== p ? "price-wrap-member" : "price-wrap-coupon";
              return (0, B.BX)(S.View, {
                className: "store-page-exchange-item",
                children: [
                  (0, B.BX)(S.View, {
                    className: "icon ".concat(d ? "reward-icon" : ""),
                    style: "background-image: url(".concat(
                      null == s ? void 0 : s.icon,
                      ");"
                    ),
                    children: [
                      (0, B.BX)(S.View, {
                        className: ""
                          .concat(d ? "price-wrap" : N, " ")
                          .concat(p, " flex"),
                        children: [
                          (0, B.tZ)(S.Text, {
                            className: "price-unit",
                            children: "¥",
                          }),
                          (0, B.tZ)(S.Text, {
                            className: "price",
                            children: null == s ? void 0 : s.value,
                          }),
                        ],
                      }),
                      (0, B.BX)(S.View, {
                        className: "name-wrap flex-align-items-center ".concat(
                          p
                        ),
                        id: "ACBf",
                        onClick: function () {
                          (null == s ? void 0 : s.ruleList) && w(s.ruleList);
                        },
                        children: [
                          (0, B.tZ)(S.View, {
                            children: null == s ? void 0 : s.title,
                          }),
                          !(null == s || !s.ruleList) &&
                            (0, B.tZ)(S.Text, {
                              className: "iconfont ifont-detail info",
                            }),
                        ],
                      }),
                      (!(
                        null == s ||
                        null === (t = s.tagList) ||
                        void 0 === t ||
                        null === (n = t[0]) ||
                        void 0 === n ||
                        !n.newDiscount
                      ) ||
                        !(
                          null == s ||
                          null === (i = s.tagList) ||
                          void 0 === i ||
                          null === (c = i[0]) ||
                          void 0 === c ||
                          !c.ptvipCoupon
                        )) &&
                        (0, B.tZ)(S.View, {
                          className: "tag",
                          children:
                            (null == s ||
                            null === (o = s.tagList) ||
                            void 0 === o ||
                            null === (l = o[0]) ||
                            void 0 === l
                              ? void 0
                              : l.newDiscount) ||
                            (null == s ||
                            null === (r = s.tagList) ||
                            void 0 === r ||
                            null === (a = r[0]) ||
                            void 0 === a
                              ? void 0
                              : a.ptvipCoupon),
                        }),
                    ],
                  }),
                  null != s && s.subTitle
                    ? (0, B.tZ)(S.View, {
                        className: "desc",
                        children: s.subTitle,
                      })
                    : (0, B.tZ)(S.View, { className: "desc empty" }),
                  d &&
                    (0, B.BX)(S.View, {
                      className: "btn flex-center ".concat(
                        1 !== (null == s ? void 0 : s.status) ||
                          h < (null == s ? void 0 : s.rewardValue)
                          ? "disable"
                          : ""
                      ),
                      id: "ACBg",
                      onClick: x,
                      children: [
                        (0, B.tZ)(S.Text, {
                          className: "num",
                          children: null == s ? void 0 : s.rewardValue,
                        }),
                        "积分",
                        (0, B.tZ)(S.Text, {
                          className: "exchange",
                          children: "兑换",
                        }),
                      ],
                    }),
                  !d &&
                    (0, B.BX)(S.View, {
                      className: "btn flex-center ".concat(
                        h < (null == s ? void 0 : s.costCredit) ? "disable" : ""
                      ),
                      id: "ACBh",
                      onClick: x,
                      children: [
                        (0, B.BX)(S.Text, {
                          className: "num",
                          children: [
                            "¥",
                            (null == s ? void 0 : s.costMoney) || "--",
                            "+",
                            (null == s ? void 0 : s.costCredit) || "--",
                          ],
                        }),
                        "积分",
                        (0, B.tZ)(S.Text, {
                          className: "exchange",
                          children: "购买",
                        }),
                      ],
                    }),
                ],
              });
            }),
            y = function (e) {
              var t = e.list,
                n = e.isReward,
                i = void 0 === n || n;
              return null != t && t.length
                ? (0, B.tZ)(S.View, {
                    className: "store-page-exchange",
                    children:
                      null == t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0,
                            B.tZ)(D, { data: e, isReward: i }, "part-exchange-item".concat(t));
                          }),
                  })
                : (0, B.tZ)(S.View, {});
            },
            R = function (e) {
              var t = e.title;
              return (0, B.tZ)(S.View, {
                className: "title-wrap flex",
                children: (0, B.tZ)(S.View, { children: t }),
              });
            },
            X = (0, m.$j)(
              function (e) {
                return {
                  rewardList: e.exchange.allRewardList,
                  creditDeductList: e.exchange.creditDeductList,
                  selectTab: e.exchange.selectTab,
                };
              },
              function () {
                return {};
              }
            )(function (e) {
              var t = e.rewardList,
                n = e.creditDeductList;
              return 1 !== e.selectTab
                ? (0, B.tZ)(S.View, {})
                : (0, B.tZ)(S.View, {
                    className: "store-page-exchange-tab",
                    children: (0, B.BX)(S.View, {
                      className: "main",
                      children: [
                        (0, B.tZ)(S.View, { className: "linear" }),
                        (0, B.tZ)(R, { title: "积分超值抵" }),
                        (0, B.tZ)(y, { list: n, isReward: !1 }),
                        (0, B.tZ)(R, { title: "积分全额兑" }),
                        (0, B.tZ)(y, { list: t, isReward: !0 }),
                      ],
                    }),
                  });
            }),
            k = n(79910),
            j = (0, m.$j)(
              function (e) {
                return { list: e.exchange.hotActivities };
              },
              function () {
                return {};
              }
            )(function (e) {
              var t = e.list;
              return null != t && t.length
                ? (0, B.BX)(S.View, {
                    className: "store-hot-activity",
                    children: [
                      (0, B.tZ)(S.View, {
                        className: "title",
                        children: "热门活动",
                      }),
                      (0, B.tZ)(S.View, {
                        className: "box",
                        children: t.map(function (e, t) {
                          return (0, B.BX)(
                            S.View,
                            {
                              className: "item",
                              id: "ACBk",
                              onClick: function () {
                                e.jumpUrl && k.Z.commonNavigator(e.jumpUrl);
                              },
                              children: [
                                (0, B.tZ)(S.Image, {
                                  src: e.icon,
                                  className: "icon",
                                }),
                                (0, B.tZ)(S.Text, {
                                  className: "name",
                                  children: e.title,
                                }),
                                (0, B.tZ)(S.Text, {
                                  className: "desc",
                                  children: e.subTitle,
                                }),
                              ],
                            },
                            "store_activity_".concat(t)
                          );
                        }),
                      }),
                    ],
                  })
                : (0, B.tZ)(S.View, {});
            }),
            P = function (e) {
              var t = e.title,
                n = e.moreAction;
              return (0, B.BX)(S.View, {
                className: "title-wrap flex",
                children: [
                  (0, B.tZ)(S.View, { children: t }),
                  n &&
                    (0, B.BX)(S.View, {
                      className: "more-txt flex",
                      id: "ACBm",
                      onClick: n,
                      children: [
                        (0, B.tZ)(S.Text, { children: "查看更多" }),
                        (0, B.tZ)(S.Text, {
                          className: "iconfont ifont-arr arrow",
                        }),
                      ],
                    }),
                ],
              });
            },
            q = (0, m.$j)(
              function (e) {
                return {
                  rewardList: e.exchange.recommendRewardList,
                  creditDeductList: e.exchange.recommendCreditDeductList,
                  selectTab: e.exchange.selectTab,
                };
              },
              function (e) {
                return {
                  setSelectTab: function (t) {
                    return e.exchange.setSelectTab(t);
                  },
                };
              }
            )(function (e) {
              var t = e.rewardList,
                n = e.creditDeductList,
                i = e.setSelectTab;
              if (0 !== e.selectTab) return (0, B.tZ)(S.View, {});
              var c = function () {
                i(1);
              };
              return (0,
              B.tZ)(S.View, { className: "store-page-recommend-tab", children: (0, B.BX)(S.View, { className: "main", children: [(0, B.tZ)(S.View, { className: "linear" }), (0, B.tZ)(j, {}), (0, B.tZ)(P, { title: "积分超值抵", moreAction: c }), (0, B.tZ)(y, { list: n, isReward: !1 }), (0, B.tZ)(P, { title: "积分全额兑", moreAction: c }), (0, B.tZ)(y, { list: t, isReward: !0 })] }) });
            }),
            z = n(34229),
            _ = function (e) {
              var t,
                n = e.data,
                i = e.onShowCouponRule,
                c =
                  (null == n || null === (t = n.ruleList) || void 0 === t
                    ? void 0
                    : t.length) > 0;
              return (0, B.BX)(S.View, {
                className: "single-coupon",
                style: "background-image: url(".concat(
                  null == n ? void 0 : n.icon,
                  ");"
                ),
                children: [
                  (0, B.BX)(S.Text, {
                    className: "coupon-price",
                    children: [
                      (0, B.tZ)(S.Text, { className: "unit", children: "¥" }),
                      null == n ? void 0 : n.title,
                    ],
                  }),
                  (0, B.BX)(S.Text, {
                    className: "coupon-name",
                    id: "ACBa",
                    onClick: function () {
                      return c && i();
                    },
                    children: [
                      null == n ? void 0 : n.subTitle,
                      c &&
                        (0, B.tZ)(S.Text, {
                          className: "iconfont ifont-detail info",
                        }),
                    ],
                  }),
                ],
              });
            },
            M = function (e) {
              var t,
                n = e.data,
                i = e.onShowCouponRule,
                c =
                  (null == n || null === (t = n.ruleList) || void 0 === t
                    ? void 0
                    : t.length) > 0;
              return (0, B.BX)(S.View, {
                className: "multi-coupon",
                style: "background-image: url(".concat(
                  null == n ? void 0 : n.icon,
                  ");"
                ),
                children: [
                  (0, B.BX)(S.Text, {
                    className: "coupon-price",
                    style: "color: #ff5959;",
                    children: [
                      (0, B.tZ)(S.Text, { className: "unit", children: "¥" }),
                      null == n ? void 0 : n.title,
                    ],
                  }),
                  (0, B.BX)(S.Text, {
                    className: "coupon-name",
                    style: "color: #ff5959;",
                    id: "ACBb",
                    onClick: function () {
                      return c && i();
                    },
                    children: [
                      null == n ? void 0 : n.subTitle,
                      c &&
                        (0, B.tZ)(S.Text, {
                          className: "iconfont ifont-detail info",
                        }),
                    ],
                  }),
                ],
              });
            },
            $ = (0, m.$j)(
              function (e) {
                return {
                  isShow: e.creditAction.showDeductExchangeToast,
                  data: e.creditAction.deductExchangeItem,
                  creditNumber: e.exchange.creditNumber,
                };
              },
              function (e) {
                return {
                  creditExchange: function (t) {
                    return e.creditAction.creditExchange(t);
                  },
                  onClose: function (t) {
                    return e.creditAction.setShowDeductExchangeToast(t);
                  },
                  onShowCouponRule: function (t) {
                    return e.exchange.onShowCouponRule(t);
                  },
                  onBuy: function (t) {
                    return e.creditAction.creditDeductExchange(t);
                  },
                };
              }
            )(function (e) {
              var t,
                n,
                i,
                c,
                o,
                l = e.isShow,
                r = e.data,
                a = e.onClose,
                s = e.creditNumber,
                u = e.onShowCouponRule,
                d = e.onBuy,
                h = function (e) {
                  u(e);
                },
                m =
                  null == r || null === (t = r.toastEntity) || void 0 === t
                    ? void 0
                    : t.type,
                f = null == r ? void 0 : r.toastEntity,
                g = (null == f ? void 0 : f.vipItems) || [],
                v = (null == f ? void 0 : f.couponItems) || [];
              return (0, B.BX)(z.ZtDrawer, {
                show: l,
                className: "store-page-exchange-pop",
                title: "确认购买",
                onClose: function () {
                  return a(!1);
                },
                onWrapClose: function () {
                  return a(!1);
                },
                closeIconParams: { color: "#999", size: 24 },
                children: [
                  (0, B.tZ)(S.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/bjs@3x.png",
                    className: "bg",
                  }),
                  1 === m &&
                    (0, B.tZ)(S.View, {
                      className: "member-icon",
                      style: " background-image: url(".concat(
                        null == g || null === (n = g[0]) || void 0 === n
                          ? void 0
                          : n.bgIcon,
                        ");"
                      ),
                      children: (0, B.tZ)(S.View, {
                        className: "member-sub-title",
                        style: "color: ".concat(
                          (null == g || null === (i = g[0]) || void 0 === i
                            ? void 0
                            : i.title.indexOf("黑钻")) > -1
                            ? "#A18D67"
                            : "#4136ff"
                        ),
                        children:
                          null == g || null === (c = g[0]) || void 0 === c
                            ? void 0
                            : c.subTitle,
                      }),
                    }),
                  0 === m &&
                    (0, B.tZ)(S.View, {
                      className: "single-coupon-scroll flex",
                      children:
                        null == v
                          ? void 0
                          : v.map(function (e, t) {
                              return (0, B.tZ)(
                                _,
                                {
                                  data: e,
                                  onShowCouponRule: function () {
                                    return h(null == e ? void 0 : e.ruleList);
                                  },
                                },
                                "coupon_".concat(t)
                              );
                            }),
                    }),
                  2 === m &&
                    (0, B.tZ)(S.View, {
                      className: "multi-coupon-scroll",
                      children:
                        null == v
                          ? void 0
                          : v.map(function (e, t) {
                              return (0, B.tZ)(
                                M,
                                {
                                  data: e,
                                  onShowCouponRule: function () {
                                    return h(null == e ? void 0 : e.ruleList);
                                  },
                                },
                                "coupon_".concat(t)
                              );
                            }),
                    }),
                  (0, B.tZ)(S.View, {
                    className: "notes",
                    children:
                      null == f || null === (o = f.descriptions) || void 0 === o
                        ? void 0
                        : o.map(function (e, t) {
                            return (0,
                            B.tZ)(S.View, { className: "note", children: e }, "note_".concat(t));
                          }),
                  }),
                  (0, B.BX)(S.View, {
                    className: "buy-wrap",
                    children: [
                      (0, B.BX)(S.View, {
                        className: "flex-1",
                        children: [
                          (0, B.BX)(S.View, {
                            className: "price-wrap flex",
                            children: [
                              (0, B.tZ)(S.View, {
                                className: "unit",
                                children: "¥",
                              }),
                              (0, B.tZ)(S.View, {
                                className: "price",
                                children: null == f ? void 0 : f.costDetailDesc,
                              }),
                              (0, B.tZ)(S.View, {
                                className: "exchange",
                                children: "积分",
                              }),
                            ],
                          }),
                          (0, B.BX)(S.View, {
                            className: "total",
                            children: ["当前可用积分:", s],
                          }),
                        ],
                      }),
                      (0, B.tZ)(S.View, {
                        className: "btn flex-center",
                        id: "ACBZ",
                        onClick: function () {
                          return d(r);
                        },
                        children: "确认购买",
                      }),
                    ],
                  }),
                ],
              });
            }),
            U = h.default.isTieyou,
            O = (0, m.$j)(
              function (e) {
                return {
                  isShow: e.creditAction.showExchangeToast,
                  data: e.creditAction.exchangeItem,
                  isSuccess: e.creditAction.isSuccessCreditExchange,
                  navigateTo: e.page.navigateTo,
                };
              },
              function (e) {
                return {
                  onClose: function (t) {
                    return e.creditAction.setShowExchangeToast(t);
                  },
                  onExchange: function (t) {
                    return e.creditAction.creditExchange(t);
                  },
                  setIsSuccess: function (t) {
                    return e.creditAction.setIsSuccessCreditExchange(t);
                  },
                };
              }
            )(function (e) {
              var t = e.isShow,
                n = e.data,
                i = e.onClose,
                c = (e.navigateTo, e.onExchange),
                o = e.isSuccess,
                l = e.setIsSuccess,
                r = null == n ? void 0 : n.toastEntity,
                a = function () {
                  l(!1), i(!1);
                };
              return (0, B.BX)(z.ZtDrawer, {
                show: t,
                className: "store-page-credit-exchange-pop",
                title: (null == r ? void 0 : r.title) || "兑换优惠券",
                onClose: a,
                onWrapClose: a,
                closeIconParams: { color: "#999", size: 24 },
                children: [
                  (0, B.tZ)(S.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/bjs@3x.png",
                    className: "bg",
                  }),
                  (0, B.BX)(S.View, {
                    className: "coupon-bg flex-align-items-center",
                    style: "background-image: url(".concat(
                      null == r ? void 0 : r.bgIconUrl,
                      ")"
                    ),
                    children: [
                      (0, B.BX)(S.View, {
                        className: "price-wrap flex-center",
                        children: [
                          (0, B.tZ)(S.Text, {
                            className: "unit",
                            children: "¥",
                          }),
                          (0, B.tZ)(S.Text, {
                            className: "price",
                            children: null == r ? void 0 : r.value,
                          }),
                        ],
                      }),
                      (0, B.BX)(S.View, {
                        className: "flex-1 coupon",
                        children: [
                          (0, B.tZ)(S.View, {
                            className: "name",
                            children: null == r ? void 0 : r.productTitle,
                          }),
                          (0, B.tZ)(S.View, {
                            className: "desc",
                            children: null == r ? void 0 : r.productDesc,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, B.BX)(S.View, {
                    className: "btn-wrap flex",
                    children: [
                      (0, B.tZ)(S.View, {
                        className: "btn flex-1 cancel flex-center",
                        id: "ACBc",
                        onClick: a,
                        children: null == r ? void 0 : r.cancelDesc,
                      }),
                      (0, B.tZ)(S.View, {
                        className: "btn flex-1 confirm flex-center "
                          .concat(o ? "use" : "", "  ")
                          .concat(U ? "ty" : "zx"),
                        id: "ACBd",
                        onClick: function () {
                          o
                            ? (i(!1),
                              (null == r ? void 0 : r.jumpUrl) &&
                                k.Z.commonNavigator(r.jumpUrl),
                              l(!1))
                            : c(n);
                        },
                        children: o
                          ? null == r
                            ? void 0
                            : r.afterExchangeChooseDesc
                          : null == r
                          ? void 0
                          : r.beforeExchangeChooseDesc,
                      }),
                    ],
                  }),
                ],
              });
            }),
            W = (0, m.$j)(
              function (e) {
                return {
                  isShow: e.exchange.showCouponRule,
                  rules: e.exchange.couponRules,
                };
              },
              function (e) {
                return {
                  onClose: function (t) {
                    return e.exchange.setShowCouponRule(t);
                  },
                };
              }
            )(function (e) {
              var t = e.isShow,
                n = e.onClose,
                i = e.rules;
              return (0, B.tZ)(z.ZtActivityPop, {
                show: t,
                onClose: function () {
                  return n(!1);
                },
                onWrapClose: function () {
                  return n(!1);
                },
                className: "store-page-rules",
                children: (0, B.BX)(S.View, {
                  className: "content",
                  children: [
                    (0, B.tZ)(S.View, {
                      className: "title",
                      children: "优惠券说明",
                    }),
                    null == i
                      ? void 0
                      : i.map(function (e, t) {
                          return (0,
                          B.tZ)(S.View, { className: "rule", children: e }, "rule-".concat(t));
                        }),
                  ],
                }),
              });
            }),
            G = h.default.isTieyou,
            J =
              (0, v.h)(!1, { usePageWrapper: !0 })(
                (i = (function (e) {
                  (0, a.Z)(n, e);
                  var t = (0, s.Z)(n);
                  function n(e) {
                    var i, c, l, a;
                    return (
                      (0, o.Z)(this, n),
                      (a = t.call(this, e)),
                      (0, u.Z)((0, r.Z)(a), "pageTitle", "积分商城"),
                      (a.pageId = G ? "10650088152" : "10650088150"),
                      (a.store = (0, f.S1)({ models: V })),
                      null === (i = a.store) ||
                        void 0 === i ||
                        null === (c = i.dispatch) ||
                        void 0 === c ||
                        null === (l = c.page) ||
                        void 0 === l ||
                        l.setState((0, r.Z)(a)),
                      a
                    );
                  }
                  return (
                    (0, l.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this;
                          this.setPageBackgroundImage(
                            "https://images3.c-ctrip.com/ztrip/train_bin/ll/jfscbj@3x.png"
                          ),
                            g.ZP.isLogin ||
                              g.ZP.doLogin()
                                .then(function () {})
                                .catch(function (t) {
                                  console.log(t), e.navigateBack();
                                });
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e, t, n, i;
                          g.ZP.isLogin &&
                            (null === (e = this.store) ||
                              void 0 === e ||
                              null === (t = e.dispatch) ||
                              void 0 === t ||
                              null === (n = t.exchange) ||
                              void 0 === n ||
                              null === (i = n.init) ||
                              void 0 === i ||
                              i.call(n, { needLoading: !0 }));
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          return (0, B.tZ)(m.zt, {
                            store: this.store,
                            children: (0, B.tZ)(E, {}),
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, B.BX)(m.zt, {
                            store: this.store,
                            children: [
                              (0, B.tZ)(L, {}),
                              (0, B.tZ)(I, {}),
                              (0, B.tZ)(q, {}),
                              (0, B.tZ)(X, {}),
                              (0, B.tZ)(O, {}),
                              (0, B.tZ)($, {}),
                              (0, B.tZ)(W, {}),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(d.Component))
              ) || i;
          Page(
            (0, c.createPageConfig)(
              J,
              "pages/usercenter/store/store",
              { root: { cn: [] } },
              {
                navigationBarTextStyle: "white",
                navigationBarBackgroundColor: "#222",
                backgroundColorTop: "#222222",
                backgroundColorBottom: "#fff",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [59871, 3322, 36332, 95854, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(1130);
        }),
          e.O();
      },
    ]);
})();
