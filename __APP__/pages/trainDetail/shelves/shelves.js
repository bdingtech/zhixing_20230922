!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/9cf383cff2ba8ce0456965e69ba11b63.js"),
    require("../sub-common/b3c2309a95e8a51ddd777bd490fa43e7.js"),
    require("../sub-common/7a64e02088e78e12a60f5110f7cf05f1.js"),
    require("../sub-common/9f1c8e3fd6be93673b313b3b7859ca13.js"),
    require("../sub-common/3f909430656e46492e236548c9d68ac2.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [3845],
      {
        9794: function (e, t, n) {
          var o = n(32180),
            i = n(79301),
            r = n(95308),
            a = n(57042),
            l = n(24460),
            c = n(81876),
            s = n(21867),
            u = n(86066),
            d = n(45023),
            p = n(52500),
            f = n(65573),
            v = n(92954),
            m = n.n(v),
            h = n(79792),
            g = n(70142),
            P = n(81957),
            Z = n(34229),
            C = n(71515),
            I = n(15798),
            w = n(298),
            T = n(74921),
            y = n(90129),
            S = n(49120),
            b = n(79910),
            N = n(10741),
            x = n(25391),
            _ = n(22276),
            k = n(40852),
            V = n(41991),
            B = {
              state: {
                totalPrice: 0,
                useCouponDiscountPrice: 0,
                totalDiscountPrice: 0,
                payBtnText: "立即支付",
                isShowPriceDetail: !1,
                priceDetails: [],
                isShowPriceDeskView: !1,
                allDiscountPrice: 0,
              },
              reducers: {
                setPriceDeskViewIsShow: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { isShowPriceDeskView: t }
                  );
                },
                updateTotalPrice: function (e, t) {
                  return (0, w.Z)((0, w.Z)({}, e), {}, { totalPrice: t });
                },
                setPayBtnText: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "立即支付";
                  return (0, w.Z)((0, w.Z)({}, e), {}, { payBtnText: t });
                },
                togglePriceDetail: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    {
                      isShowPriceDetail:
                        "boolean" == typeof t ? t : !e.isShowPriceDetail,
                    }
                  );
                },
                updatePriceDetail: function (e, t) {
                  return (0, w.Z)((0, w.Z)({}, e), {}, { priceDetails: t });
                },
                updateUseCouponDiscountPrice: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { useCouponDiscountPrice: t }
                  );
                },
                updateTotalDiscountPrice: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { totalDiscountPrice: t }
                  );
                },
                updateAllDiscountPrice: function (e, t) {
                  return (0, w.Z)((0, w.Z)({}, e), {}, { allDiscountPrice: t });
                },
              },
            },
            D = {
              state: {
                enableSaled: !1,
                areaBSaleInfo: {
                  commonSaleInfos: [],
                  lowPriceSaleInfoList: [],
                  extProduct: null,
                },
                areaCProductInfos: [],
                isOpenMemberProduct: !1,
                useAbleCouponList: [],
                saledProductsAllCounts: 0,
                trainHotelCrossActivity: null,
              },
              reducers: {
                setSaledMode: function (e, t) {
                  return (0, w.Z)((0, w.Z)({}, e), {}, { enableSaled: t });
                },
                updateAreaBSaleInfo: function (e, t) {
                  var n = t || {},
                    o = n.commonSaleInfos,
                    i = void 0 === o ? [] : o,
                    r = n.lowPriceSaleInfoList,
                    a = void 0 === r ? [] : r,
                    l = n.extProduct,
                    c = void 0 === l ? null : l;
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    {
                      areaBSaleInfo: JSON.parse(
                        JSON.stringify({
                          commonSaleInfos: i,
                          lowPriceSaleInfoList: a,
                          extProduct: c,
                        })
                      ),
                    }
                  );
                },
                updateAreaCProductInfos: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { areaCProductInfos: JSON.parse(JSON.stringify(t || [])) }
                  );
                },
                updateIsOpenMemberProduct: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { isOpenMemberProduct: !!t }
                  );
                },
                updateUseAbleCouponList: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { useAbleCouponList: t }
                  );
                },
                updateSaledProductsAllCounts: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { saledProductsAllCounts: t }
                  );
                },
                updateTrainHotelCrossActivity: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { trainHotelCrossActivity: t }
                  );
                },
              },
            },
            M = n(4102),
            A = n(8271),
            X = n.n(A),
            L = function (e) {
              if (b.Z.isEmptyObject(e)) return { _orderTickets: null };
              var t = e.ticketItineraryInfoForWaitPays;
              return {
                _orderTickets:
                  null == t
                    ? void 0
                    : t.map(function (e) {
                        return (0,
                        w.Z)((0, w.Z)({}, e), {}, { _datestr: "".concat(X()(e.fromDate).format("M月D日"), " ").concat(M.Z.getWeekDay(e.fromDate), "出发 ").concat(e.trainNo) });
                      }),
              };
            },
            O = {
              state: {
                orderInfo: null,
                areaAOrderInfo: {},
                isShowOrderTimeOutView: !1,
                isShowOrderTimeOutViewWithHour: !1,
                showCancelOrderView: !1,
                shouldSubscribeMsgAfterPay: !1,
              },
              reducers: {
                setOrderInfo: function (e, t) {
                  var n = X()(),
                    o = X()(t.orderTimeoutDate).isAfter(n);
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    {
                      orderInfo: t,
                      areaAOrderInfo: L(t),
                      isShowOrderTimeOutView:
                        1 === (null == t ? void 0 : t.payFlag) && o,
                      isShowOrderTimeOutViewWithHour:
                        X()(null == t ? void 0 : t.orderTimeoutDate).diff(
                          n,
                          "hours"
                        ) >= 1,
                      showCancelOrderView:
                        1 === (null == t ? void 0 : t.cancelFlag),
                    }
                  );
                },
                setCancelViewVisible: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { showCancelOrderView: t }
                  );
                },
                setShouldSubscribeMsgAfterPay: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { shouldSubscribeMsgAfterPay: t }
                  );
                },
              },
            },
            F = {
              state: {
                allUserCouponList: [],
                useableCouponList: [],
                targetUseCoupon: null,
                uselessCouponList: [],
              },
              reducers: {
                setAllUseCouponList: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { allUserCouponList: t || [] }
                  );
                },
                setUseableCouponList: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { useableCouponList: t || [] }
                  );
                },
                setTargetCoupon: function (e, t) {
                  return (0, w.Z)((0, w.Z)({}, e), {}, { targetUseCoupon: t });
                },
                setUselessCouponList: function (e, t) {
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { uselessCouponList: t || [] }
                  );
                },
              },
            },
            z = {
              state: { toasts: [], notices: [] },
              reducers: {
                setOctopus: function (e, t) {
                  var n = t.notices,
                    o = t.toasts;
                  return (0, w.Z)(
                    (0, w.Z)({}, e),
                    {},
                    { notices: n, toasts: o }
                  );
                },
              },
            },
            R = (function (e) {
              (0, s.Z)(n, e);
              var t = (0, u.Z)(n);
              function n() {
                return (0, a.Z)(this, n), t.apply(this, arguments);
              }
              return (0, l.Z)(n);
            })(V.Z);
          (0, d.Z)(R, "store", {
            models: {
              orderModel: O,
              paymentModel: B,
              saleModel: D,
              useCouponModel: F,
              octopusModel: z,
              my12306Model: k.Z,
            },
          });
          var U = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              (0, N.Eo8)({ orderNumber: R.getPage().oid })
                            );
                          case 3:
                            if (1 === (t = e.sent).resultCode) {
                              e.next = 6;
                              break;
                            }
                            throw new Error("请求失败~");
                          case 6:
                            return e.abrupt("return", t);
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log("getSaleMallInfo err =", e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            H = function (e) {
              var t, n;
              R.getDispatch().saleModel.setSaledMode(
                !(null == e || !e.saleMallInfo)
              ),
                W(
                  null == e || null === (t = e.saleMallInfo) || void 0 === t
                    ? void 0
                    : t.areaBInfoSaleInfo
                ),
                j(
                  null == e || null === (n = e.saleMallInfo) || void 0 === n
                    ? void 0
                    : n.areaCSaleInfo
                ),
                J(),
                E(),
                E(),
                ne((null == e ? void 0 : e.activitys) || []);
            },
            E = function () {
              var e = R.getState().saleModel,
                t = e.areaBSaleInfo,
                n = e.areaCProductInfos,
                o = t.commonSaleInfos,
                i = t.lowPriceSaleInfoList,
                r = t.extProduct;
              R.getDispatch().saleModel.updateSaledProductsAllCounts(
                o.length
                  .zt_add(i.length)
                  .zt_add(r ? 1 : 0)
                  .zt_add(n.length)
              );
            },
            W = function (e) {
              var t,
                n,
                o = R.getInstance(),
                i = o.dispatch,
                r = o.getState,
                a = !R.getPage().isInitedB;
              if (b.Z.isEmptyObject(e))
                return i.saleModel.updateAreaBSaleInfo();
              R.getPage().isInitedB = !0;
              var l =
                  null === (t = e.commonSaleInfos) || void 0 === t
                    ? void 0
                    : t.filter(function (e) {
                        return 6 !== e.productType;
                      }),
                c = e.lowPriceSaleInfoList,
                s = e.extProductJson,
                u =
                  (null === (n = Q().lowPriceSaleInfoList) || void 0 === n
                    ? void 0
                    : n
                        .map(function (e) {
                          return e.productId;
                        })
                        .join(",")) || "",
                d = !(
                  null == c ||
                  !c.some(function (e) {
                    var t;
                    return null === (t = e.productDetailList) || void 0 === t
                      ? void 0
                      : t.some(function (e) {
                          return u.includes(e.productId);
                        });
                  })
                );
              i.saleModel.updateAreaBSaleInfo({
                commonSaleInfos:
                  null == l
                    ? void 0
                    : l.map(function (e) {
                        var t, n;
                        return (0, w.Z)(
                          (0, w.Z)({}, e),
                          {},
                          {
                            _isChecked:
                              (a && 1 === e.saleFlag) ||
                              !(
                                null === (t = r().saleModel.areaBSaleInfo) ||
                                void 0 === t ||
                                null === (n = t.commonSaleInfos) ||
                                void 0 === n ||
                                !n.find(function (t) {
                                  return (
                                    t.productCode === e.productCode &&
                                    t._isChecked
                                  );
                                })
                              ),
                            _caculateCount:
                              "P" === e.productBookingType ? e.productCount : 1,
                          }
                        );
                      }),
                lowPriceSaleInfoList:
                  null == c
                    ? void 0
                    : c.map(function (e) {
                        var t;
                        return (0, w.Z)(
                          (0, w.Z)({}, e),
                          {},
                          {
                            productDetailList:
                              null === (t = e.productDetailList) || void 0 === t
                                ? void 0
                                : t.map(function (e, t) {
                                    return (0,
                                    w.Z)((0, w.Z)({}, e), {}, { _isChecked: d ? u.includes(e.productId) : 0 === t });
                                  }),
                          }
                        );
                      }),
                extProduct:
                  1 === (null == s ? void 0 : s.extProductCode) &&
                  (function () {
                    try {
                      var e,
                        t,
                        n,
                        o,
                        i = JSON.parse(
                          null == s ? void 0 : s.extProductContentJson
                        ),
                        r = JSON.parse(null == i ? void 0 : i.vipSaleInfoJson);
                      return {
                        extProductCode: null == s ? void 0 : s.extProductCode,
                        extProductContent: (0, w.Z)(
                          (0, w.Z)({}, i),
                          {},
                          {
                            vipSaleInfo: r,
                            _realPrice:
                              null ===
                                (e = parseFloat(
                                  ""
                                    .concat(
                                      null == r ||
                                        null === (n = r.priceTitleEntity) ||
                                        void 0 === n
                                        ? void 0
                                        : n.price
                                    )
                                    .substring(1)
                                )) ||
                              void 0 === e ||
                              null === (t = e.zt_sub) ||
                              void 0 === t
                                ? void 0
                                : t.call(
                                    e,
                                    null == r
                                      ? void 0
                                      : r.firstOrderDiscountPrice
                                  ),
                            _title:
                              null == r ||
                              null === (o = r.priceTitleEntity) ||
                              void 0 === o
                                ? void 0
                                : o.title,
                          }
                        ),
                        _isChecked: 1 === (null == i ? void 0 : i.saleFlag),
                        productFrom: null == s ? void 0 : s.productFrom,
                        _saleFlag: 1 === (null == i ? void 0 : i.saleFlag),
                        treasureGoodsInfo:
                          null == s ? void 0 : s.treasureGoodsInfo,
                      };
                    } catch (e) {
                      return null;
                    }
                  })(),
              });
            },
            j = function (e) {
              var t,
                n,
                o = R.getInstance(),
                i = o.dispatch,
                r = o.getState,
                a = !R.getPage().isInitedC;
              if (b.Z.isEmptyObject(e))
                return i.saleModel.updateAreaCProductInfos();
              R.getPage().isInitedC = !0;
              var l = Y(),
                c = Q().extProduct,
                s =
                  (null == c ? void 0 : c._isChecked) &&
                  1 === (null == c ? void 0 : c.extProductCode),
                u = r().saleModel.areaBSaleInfo.extProduct,
                d =
                  2 ===
                  (null == u ||
                  null === (t = u.extProductContent) ||
                  void 0 === t
                    ? void 0
                    : t.packageType);
              i.saleModel.updateAreaCProductInfos(
                null == e || null === (n = e.areaCProductInfos) || void 0 === n
                  ? void 0
                  : n
                      .filter(function (e) {
                        var t = e.saleType,
                          n = e.insuranceType;
                        return 2 === t && [1, 2, 3, 6].includes(n);
                      })
                      .map(function (e) {
                        var t, n;
                        return (0,
                        w.Z)((0, w.Z)({}, e), {}, { _isChecked: (1 !== e.canChoose && (d ? 1 === e.vipFree && s : 1 === e.vipFree)) || (a && 1 === e.saleFlag) || -1 !== l.indexOf(String(e.productCode)), _realPrice: 1 === e.vipFree ? 0 : e.productPrice, _showProductName: 1 === e.vipFree && null !== (t = e.vipSaleUseInfo) && void 0 !== t && t.vipProductName ? (null === (n = e.vipSaleUseInfo) || void 0 === n ? void 0 : n.vipProductName) : e.productTitle, _isVipChecked: 1 !== e.canChoose && (d ? 1 === e.vipFree && s : 1 === e.vipFree) });
                      })
              );
            },
            J = function () {
              var e,
                t = R.getInstance(),
                n = t.dispatch,
                o = t.getState,
                i = o().saleModel.areaCProductInfos,
                r = Q().extProduct,
                a =
                  (null == r ? void 0 : r._isChecked) &&
                  1 === (null == r ? void 0 : r.extProductCode);
              n.saleModel.updateIsOpenMemberProduct(a);
              var l = o().saleModel.areaBSaleInfo.extProduct,
                c =
                  2 ===
                  (null == l ||
                  null === (e = l.extProductContent) ||
                  void 0 === e
                    ? void 0
                    : e.packageType);
              i.forEach(function (e) {
                if (1 === e.insuranceType && 0 === e.canChoose) {
                  var t,
                    n,
                    o = c ? 1 === e.vipFree && a : 1 === e.vipFree;
                  (e._isOpenMemberProduct = o),
                    e._isVipChecked || (e._isChecked && !o)
                      ? (e._isChecked = o)
                      : (e._isChecked = e._isChecked || o),
                    (e._realPrice = o ? 0 : e.productPrice),
                    (e._showProductName =
                      o &&
                      null !== (t = e.vipSaleUseInfo) &&
                      void 0 !== t &&
                      t.vipProductName
                        ? null === (n = e.vipSaleUseInfo) || void 0 === n
                          ? void 0
                          : n.vipProductName
                        : e.productTitle);
                }
              }),
                n.saleModel.updateAreaCProductInfos(i);
            },
            q = function (e) {
              var t = R.getInstance(),
                n = t.dispatch,
                o = t.getState,
                i = o().saleModel.areaBSaleInfo.commonSaleInfos,
                r = i.find(function (t) {
                  return t.productCode === e.productCode;
                });
              !b.Z.isEmptyObject(r) && (r._isChecked = !r._isChecked),
                n.saleModel.updateAreaBSaleInfo(
                  (0, w.Z)(
                    (0, w.Z)({}, o().saleModel.areaBSaleInfo),
                    {},
                    { commonSaleInfos: i }
                  )
                ),
                He();
            },
            $ = function (e) {
              var t = R.getInstance(),
                n = t.dispatch,
                o = t.getState,
                i = o().saleModel.areaBSaleInfo.lowPriceSaleInfoList;
              null == i ||
                i.forEach(function (t) {
                  t.productDetailList.forEach(function (t) {
                    var n =
                      (!e.productId && !t.productId) ||
                      e.productId === t.productId;
                    t._isChecked = n && !t._isChecked;
                  });
                }),
                n.saleModel.updateAreaBSaleInfo(
                  (0, w.Z)(
                    (0, w.Z)({}, o().saleModel.areaBSaleInfo),
                    {},
                    { lowPriceSaleInfoList: i }
                  )
                ),
                He();
            },
            G = function () {
              var e = R.getInstance(),
                t = e.dispatch,
                n = e.getState,
                o = n().saleModel.areaBSaleInfo.extProduct;
              b.Z.isEmptyObject(o) ||
                ((o._isChecked = !o._isChecked),
                t.saleModel.updateAreaBSaleInfo(
                  (0, w.Z)(
                    (0, w.Z)({}, n().saleModel.areaBSaleInfo),
                    {},
                    { extProduct: o }
                  )
                ),
                1 === (null == o ? void 0 : o.extProductCode) && J(),
                He());
            },
            K = function () {
              var e;
              return (
                (null ===
                  (e = (0, R.getInstance().getState)().saleModel
                    .areaCProductInfos) || void 0 === e
                  ? void 0
                  : e.filter(function (e) {
                      return e._isChecked;
                    })) || []
              );
            },
            Q = function () {
              var e,
                t = (0, R.getInstance().getState)().saleModel.areaBSaleInfo,
                n = t.commonSaleInfos,
                o = t.lowPriceSaleInfoList,
                i = t.extProduct;
              return {
                commonSaleInfos:
                  (null == n
                    ? void 0
                    : n.filter(function (e) {
                        return e._isChecked;
                      })) || [],
                lowPriceSaleInfoList:
                  (null == o
                    ? void 0
                    : o
                        .map(function (e) {
                          return e.productDetailList.filter(function (e) {
                            return e._isChecked && e.productId;
                          });
                        })
                        .flat()) || [],
                extProduct:
                  (null == i ? void 0 : i._isChecked) &&
                  !(
                    null == i ||
                    null === (e = i.extProductContent) ||
                    void 0 === e ||
                    !e.packageCode
                  ) &&
                  i,
              };
            },
            Y = function () {
              var e = K().map(function (e) {
                  return e.productCode;
                }),
                t = Q(),
                n = t.commonSaleInfos,
                o = t.lowPriceSaleInfoList;
              return []
                .concat(
                  (0, _.Z)(e),
                  (0, _.Z)(
                    (null == n
                      ? void 0
                      : n.map(function (e) {
                          return e.productCode;
                        })) || []
                  ),
                  (0, _.Z)(
                    (null == o
                      ? void 0
                      : o.map(function (e) {
                          return e.productId;
                        })) || []
                  )
                )
                .join(",");
            },
            ee = function () {
              var e = K().map(function (e) {
                  var t = e.productCode;
                  return e.treasureGoodsInfo ? "" : t;
                }),
                t = Q(),
                n = t.commonSaleInfos,
                o = t.lowPriceSaleInfoList;
              return []
                .concat(
                  (0, _.Z)(e),
                  (0, _.Z)(
                    (null == n
                      ? void 0
                      : n.map(function (e) {
                          var t = e.productCode;
                          return e.treasureGoodsInfo ? "" : t;
                        })) || []
                  ),
                  (0, _.Z)(
                    (null == o
                      ? void 0
                      : o.map(function (e) {
                          var t = e.productId;
                          return e.treasureGoodsInfo ? "" : t;
                        })) || []
                  )
                )
                .filter(function (e) {
                  return !!e;
                })
                .join(",");
            },
            te = function () {
              var e,
                t = (0, R.getInstance().getState)().saleModel.areaBSaleInfo
                  .extProduct,
                n =
                  2 ===
                  (null == t ||
                  null === (e = t.extProductContent) ||
                  void 0 === e
                    ? void 0
                    : e.packageType),
                o = Q().extProduct,
                i =
                  (null == o ? void 0 : o._isChecked) &&
                  1 === (null == o ? void 0 : o.extProductCode);
              return K().find(function (e) {
                return (
                  e._isChecked &&
                  (i || (1 === e.vipFree && !n)) &&
                  1 === e.insuranceType
                );
              })
                ? 1
                : 0;
            },
            ne = function (e) {
              var t =
                null == e
                  ? void 0
                  : e.find(function (e) {
                      return 15 === e.activityCode;
                    });
              if (t) {
                var n = JSON.parse(t.activityContentJson);
                R.getDispatch().saleModel.updateTrainHotelCrossActivity(n);
              }
              R.ubtTrace("TZWBuyShelf_ReserveModule_exposure", {
                PageId: h.default.isTieyou ? "10650078937" : "10650078933",
                orderId: R.getPage().oid,
                reserveChunnel: t ? 2 : 1,
              });
            },
            oe = function () {
              var e = K().map(function (e) {
                  return e.treasureGoodsInfo;
                }),
                t = Q(),
                n = t.commonSaleInfos,
                o = void 0 === n ? [] : n,
                i = t.lowPriceSaleInfoList,
                r = void 0 === i ? [] : i,
                a = t.extProduct;
              return []
                .concat(
                  (0, _.Z)(e),
                  (0, _.Z)(
                    null == o
                      ? void 0
                      : o.map(function (e) {
                          return e.treasureGoodsInfo;
                        })
                  ),
                  (0, _.Z)(
                    null == r
                      ? void 0
                      : r.map(function (e) {
                          return e.treasureGoodsInfo;
                        })
                  ),
                  [null == a ? void 0 : a.treasureGoodsInfo]
                )
                .filter(function (e) {
                  return !!e;
                });
            },
            ie = n(76290),
            re = n(74867),
            ae = n(69781),
            le = n(75878),
            ce = function () {
              var e,
                t = R.getState().useCouponModel,
                n = t.allUserCouponList,
                o = t.targetUseCoupon,
                i = [],
                r = [],
                a = (function () {
                  var e,
                    t = 0,
                    n =
                      null === (e = R.getState().orderModel.orderInfo) ||
                      void 0 === e
                        ? void 0
                        : e.priceDetail;
                  return (
                    ((null == n ? void 0 : n.detail) || []).forEach(function (
                      e
                    ) {
                      (null == e ? void 0 : e.saleProductType) > 0 &&
                        (t += e.saleProductType || 0);
                    }),
                    Q().commonSaleInfos.forEach(function (e) {
                      e.saleProductType > 0 && (t += e.saleProductType || 0);
                    }),
                    K().forEach(function (e) {
                      e.saleProductType > 0 && (t += e.saleProductType || 0);
                    }),
                    t
                  );
                })();
              n.forEach(function (e) {
                (((null == e ? void 0 : e.useScope) || 0) & a) > 0 &&
                1 === (null == e ? void 0 : e.useAble)
                  ? i.push(e)
                  : r.push(e);
              }),
                R.getDispatch().useCouponModel.setUseableCouponList(i),
                R.getDispatch().useCouponModel.setUselessCouponList(r);
              var l = R.getState().saleModel.areaBSaleInfo.extProduct;
              (null == l ? void 0 : l._isChecked) &&
              1 ===
                (null == l || null === (e = l.extProductContent) || void 0 === e
                  ? void 0
                  : e.couponExclusive)
                ? R.getDispatch().useCouponModel.setTargetCoupon()
                : (!!o &&
                    i.some(function (e) {
                      return (
                        e.useCouponCode === o.useCouponCode &&
                        e.promotionId === o.promotionId
                      );
                    }) &&
                    R.getPage().isCoustomSelectCoupon) ||
                  R.getDispatch().useCouponModel.setTargetCoupon(
                    i.find(function (e) {
                      return e.ifSelected;
                    })
                  );
            },
            se = function () {
              var e,
                t,
                n = R.getState().useCouponModel,
                o = n.useableCouponList,
                i = n.targetUseCoupon,
                r = n.uselessCouponList,
                a = R.getState().saleModel.areaBSaleInfo.extProduct;
              (null == a ? void 0 : a._isChecked) &&
              1 ===
                (null == a || null === (e = a.extProductContent) || void 0 === e
                  ? void 0
                  : e.couponExclusive)
                ? null === (t = R.getPage().$CommonDialog) ||
                  void 0 === t ||
                  t.showCommonDialog("同一订单仅可使用一张优惠券")
                : R.getPage().navigateTo({
                    url: "/pages/train/coupon/coupon",
                    data: {
                      useAbleCouponList: o,
                      disabledCouponList: r,
                      selectedCoupon: i,
                    },
                    callback: function (e) {
                      (R.getPage().isCoustomSelectCoupon = !0),
                        R.getDispatch().useCouponModel.setTargetCoupon(e),
                        Ee();
                    },
                  });
            },
            ue = function () {
              var e = R.getState().useCouponModel.targetUseCoupon;
              return (
                e && { useCouponCode: e.couponCode, promotionId: e.promotionId }
              );
            },
            de = function () {
              var e,
                t = R.getState().orderModel.orderInfo;
              R.getDispatch().useCouponModel.setAllUseCouponList(
                1 === t.payFlag
                  ? null == t || null === (e = t.useCouponInfo) || void 0 === e
                    ? void 0
                    : e.couponDetailInfo
                  : null
              );
            },
            pe = n(94190),
            fe = n(18783),
            ve = ["toastCode"],
            me = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, n, o, r, a, l, c, s;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (r = pe.WG.get()),
                              (a = x.ZP.encode12306Account({
                                login12306Name:
                                  (null === (t = r.bind12306) || void 0 === t
                                    ? void 0
                                    : t.name) || "",
                                login12306Pas:
                                  (null === (n = r.bind12306) || void 0 === n
                                    ? void 0
                                    : n.pwd) || "",
                              })),
                              (l = ge()),
                              (c = []),
                              Object.keys(l).forEach(function (e) {
                                l[e].id && (c[e] = l[e].id);
                              }),
                              (e.next = 8),
                              (0, N.SON)({
                                orderNumber: R.getPage().oid,
                                fromSource: 4,
                                ruleShowInfoList:
                                  ie.ZP.getTrainCrossToastCountInStore4Service(
                                    c,
                                    ie.y3.shelves
                                  ),
                                clientUserInfo: {
                                  userAuth12306Status:
                                    "0" ===
                                    (null === (o = r.bind12306) || void 0 === o
                                      ? void 0
                                      : o.memberStatus12306)
                                      ? 1
                                      : -1,
                                  user12306Name: a.login12306Name,
                                },
                              })
                            );
                          case 8:
                            if (1 === (s = e.sent).resultCode) {
                              e.next = 11;
                              break;
                            }
                            throw new Error("请求失败~");
                          case 11:
                            return e.abrupt("return", s);
                          case 14:
                            return (
                              (e.prev = 14),
                              (e.t0 = e.catch(0)),
                              e.abrupt("return", null)
                            );
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 14]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            he = function (e) {
              var t = e || {},
                n = t.notices,
                o = void 0 === n ? [] : n,
                i = t.toasts,
                r = void 0 === i ? [] : i;
              r.map(function (e) {
                if (e.toastCode === le.Iv.eleDeliveryRemind) {
                  e.toastType = 2;
                  var t = {
                    noticeCode: "@eleDeliveryRemindToast",
                    noticeName: "人工客票货架页弹窗黄飘",
                  };
                  (t.noticeJson = e.toastJson), o.push(t);
                }
              });
              var a = [];
              o.map(function (e) {
                if (
                  [
                    le.RA.riskControl,
                    le.RA.pointsOrder,
                    le.RA.waitPayNotice,
                    le.RA.eleDeliveryRemind,
                    le.RA.ConvertChildrenTicketNotice,
                    le.RA.SelectedSeatNotice,
                    le.RA.StudentHoldSeatFailTransferAuditNotice,
                  ].includes(e.noticeCode)
                ) {
                  var t,
                    n =
                      null === (t = ie.ZP.parseOctopusNotice(e)) || void 0 === t
                        ? void 0
                        : t._jsonInfo;
                  (n.toastCode = le.Iv.noticeToast), a.push(n);
                }
              }),
                R.getDispatch().octopusModel.setOctopus({
                  toasts: r,
                  notices: a,
                });
            },
            ge = function () {
              var e,
                t = R.getPage().oid;
              return (
                (e = {}),
                (0, d.Z)(e, le.Iv.riskControl, { id: t, maxTime: 1 }),
                (0, d.Z)(e, le.Iv.routeConflict, { id: t, maxTime: 1 }),
                (0, d.Z)(e, le.Iv.returnToast, { id: t, maxTime: 1 }),
                e
              );
            },
            Pe = function () {
              var e,
                t = R.getState().octopusModel.toasts,
                n = ie.ZP.parseOctopusToast(
                  t.find(function (e) {
                    return 1 === e.toastType;
                  })
                ),
                o = (function (e) {
                  var t, n;
                  if (null == e || !e.toastCode) return !1;
                  var o = ge(),
                    i =
                      (null === (t = o[e.toastCode]) || void 0 === t
                        ? void 0
                        : t.maxTime) || 1e3,
                    r = [];
                  Object.keys(o).forEach(function (e) {
                    o[e].id && (r[e] = o[e].id);
                  });
                  var a =
                    (null ===
                      (n = ie.ZP.getTrainCrossToastCountInStore4Service(
                        r,
                        ie.y3.shelves
                      ).find(function (t) {
                        return t.ruleCode === e.toastCode;
                      })) || void 0 === n
                      ? void 0
                      : n.showCount) || 0;
                  return (
                    console.log(
                      "toast：",
                      e.toastCode,
                      "历史已弹出：",
                      a,
                      "最多可弹出：",
                      i
                    ),
                    a < i
                  );
                })(n);
              null != n &&
                n.toastCode &&
                o &&
                (Je({ toast: n }),
                ie.ZP.countTrainCrossToastInStore({
                  codeName: n.toastCode,
                  fromPage: ie.y3.shelves,
                  uniqueCountId:
                    null === (e = ge()[n.toastCode]) || void 0 === e
                      ? void 0
                      : e.id,
                }));
            },
            Ze = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var n, o, r, a, l;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.toastCode),
                            (o = (0, T.Z)(t, ve)),
                            (r = R.getState().octopusModel.toasts || []),
                            (a =
                              null == r
                                ? void 0
                                : r.find(function (e) {
                                    return e.toastCode === n;
                                  })),
                            (l = ie.ZP.parseOctopusToast(a)),
                            e.abrupt(
                              "return",
                              Je(
                                (0, w.Z)(
                                  { toast: (0, w.Z)({ toastCode: n }, l) },
                                  o
                                )
                              )
                            )
                          );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Ce = function (e, t) {
              var n = !0,
                o = "Train_Shelves_".concat(t);
              try {
                var i = m().getStorageSync(o);
                Array.isArray(i) &&
                  i.find(function (t) {
                    return t === e;
                  }) &&
                  (n = !1);
              } catch (e) {
                console.log(e);
              }
              return n;
            },
            Ie = function (e, t) {
              var n = "Train_Shelves_".concat(t);
              try {
                var o = m().getStorageSync(n) || [];
                50 === o.length && o.shift(),
                  o.push(e),
                  m().setStorageSync(n, o);
              } catch (e) {
                console.log(e);
              }
            },
            we = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, n;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (t = pe.WG.get()),
                              (e.next = 4),
                              (0, N.qw2)({
                                orderNumber: R.getPage().oid,
                                phoneNumLogin: fe.ZP.userName,
                                phoneNum12306: null == t ? void 0 : t.mobile,
                              })
                            );
                          case 4:
                            if (1 === (n = e.sent).resultCode) {
                              e.next = 7;
                              break;
                            }
                            throw new Error("请求失败~");
                          case 7:
                            return e.abrupt("return", n);
                          case 10:
                            (e.prev = 10), (e.t0 = e.catch(0));
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Te = function (e) {
              R.getDispatch().orderModel.setOrderInfo(e);
            },
            ye = function () {
              var e,
                t = "TRN_shelves_IdentityUnverifiedCancelToast",
                n = m().getStorageSync(t);
              if (n.includes(R.getPage().oid)) return !1;
              var o = R.getState().octopusModel.toasts || [],
                i =
                  null == o
                    ? void 0
                    : o.find(function (e) {
                        return (
                          e.toastCode === le.Iv.identityUnverifiedCancelToast
                        );
                      }),
                r =
                  null === (e = ie.ZP.parseOctopusToast(i)) || void 0 === e
                    ? void 0
                    : e._jsonInfo;
              return r
                ? (m().setStorageSync(
                    t,
                    [].concat((0, _.Z)(n), [R.getPage().oid])
                  ),
                  R.commonDrawerConfirmAsync({
                    title: r.title,
                    content: r.content,
                    cancelText: r.cancelButton,
                    confirmText: r.confirmButton,
                    ignoreBreak: !0,
                  }))
                : void 0;
            },
            Se = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, n, o, r;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n =
                                (null ===
                                  (t = R.getState().orderModel.orderInfo) ||
                                void 0 === t
                                  ? void 0
                                  : t.reschedulePayOrderNo) || R.getPage().oid),
                              R.ubtTrace("TZWBuyShelf_CancelOrder_click", {
                                PageId: R.getPage().pageId,
                                orderid: n,
                              }),
                              !(o =
                                R.getState().octopusModel.toasts || []).find(
                                function (e) {
                                  return (
                                    e.toastCode ===
                                    le.Iv.identityUnverifiedCancelToast
                                  );
                                }
                              ))
                            ) {
                              e.next = 12;
                              break;
                            }
                            return (e.next = 6), ye();
                          case 6:
                            if (!e.sent) {
                              e.next = 10;
                              break;
                            }
                            return _e(), e.abrupt("return");
                          case 10:
                            e.next = 29;
                            break;
                          case 12:
                            if (
                              !o.find(function (e) {
                                return e.toastCode === le.Iv.orderCancel;
                              })
                            ) {
                              e.next = 24;
                              break;
                            }
                            return (
                              (e.next = 15),
                              Ze({ toastCode: le.Iv.orderCancel })
                            );
                          case 15:
                            if (
                              ((r = e.sent),
                              R.ubtTrace(
                                "TZWBuyShelf_CancelOrdRetainPop_exposure",
                                { PageId: R.getPage().pageId, orderid: n }
                              ),
                              0 === r &&
                                R.ubtTrace(
                                  "TZWBuyShelf_CancelOrdRetainPop_Cancel_click",
                                  { PageId: R.getPage().pageId, orderid: n }
                                ),
                              1 !== r)
                            ) {
                              e.next = 22;
                              break;
                            }
                            return (
                              Ve(),
                              R.ubtTrace(
                                "TZWBuyShelf_CancelOrdRetainPop_PayNow_click",
                                { PageId: R.getPage().pageId, orderid: n }
                              ),
                              e.abrupt("return")
                            );
                          case 22:
                            e.next = 29;
                            break;
                          case 24:
                            return (
                              (e.next = 26),
                              new Promise(function (e) {
                                var t;
                                null === (t = R.getPage().$CommonDialog) ||
                                  void 0 === t ||
                                  t.showMultiButtonDialog({
                                    title: "温馨提示",
                                    content:
                                      "当前订单正在排队出票，购票高峰重新下单可能需要重新排队，确定取消订单吗？(当天订单取消超过三次将不能购票)",
                                    leftButtonName: "继续等待",
                                    rightButtonName: "确认取消",
                                    onLeftButtonClick: function () {
                                      e("left");
                                    },
                                    onRightButtonClick: function () {
                                      e("right");
                                    },
                                  });
                              })
                            );
                          case 26:
                            if ("left" !== e.sent) {
                              e.next = 29;
                              break;
                            }
                            return e.abrupt("return");
                          case 29:
                            return (
                              (0, S.showLoading)("订单取消中"),
                              (e.prev = 30),
                              (e.next = 33),
                              (0, N.FHX)({
                                orderNumber: n,
                                partnerName: h.default.partner,
                              })
                            );
                          case 33:
                            e.next = 37;
                            break;
                          case 35:
                            (e.prev = 35), (e.t0 = e.catch(30));
                          case 37:
                            setTimeout(function () {
                              Fe();
                            }, 1e3);
                          case 38:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[30, 35]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          function be() {
            var e,
              t,
              n,
              o = Q().extProduct,
              i = [];
            return (
              null != o &&
                o._isChecked &&
                i.push({
                  packageCode:
                    (null == o ||
                    null === (e = o.extProductContent) ||
                    void 0 === e
                      ? void 0
                      : e.packageCode) || "",
                  packageType:
                    (null == o ||
                    null === (t = o.extProductContent) ||
                    void 0 === t
                      ? void 0
                      : t.packageType) || "",
                  count: 1,
                  unionVipCode:
                    null == o ||
                    null === (n = o.extProductContent) ||
                    void 0 === n
                      ? void 0
                      : n.unionVipCode,
                }),
              i
            );
          }
          function Ne() {
            var e = [],
              t = Q(),
              n = t.commonSaleInfos,
              o = t.extProduct;
            return (
              null == n ||
                n.forEach(function (t) {
                  null != t && t.productFrom && e.push(t.productFrom);
                }),
              null == o ||
                !o._isChecked ||
                null == o ||
                !o.productFrom ||
                (null != o && o._saleFlag) ||
                e.push(null == o ? void 0 : o.productFrom),
              K().forEach(function (t) {
                null != t && t.productFrom && e.push(t.productFrom);
              }),
              e
            );
          }
          var xe = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, n, o, r, a, l;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = "TRN_shelves_IdentityUnverifiedPayToast"),
                              (e.prev = 1),
                              (o = R.getState().octopusModel.toasts || []),
                              (r =
                                null == o
                                  ? void 0
                                  : o.find(function (e) {
                                      return (
                                        e.toastCode ===
                                        le.Iv.identityUnverifiedPayToast
                                      );
                                    })),
                              (a =
                                null === (n = ie.ZP.parseOctopusToast(r)) ||
                                void 0 === n
                                  ? void 0
                                  : n._jsonInfo),
                              !(l = m().getStorageSync(t) || []).includes(
                                R.getPage().oid
                              ))
                            ) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt("return", [!0, !0]);
                          case 8:
                            if (!a) {
                              e.next = 11;
                              break;
                            }
                            return (
                              m().setStorageSync(
                                t,
                                [].concat((0, _.Z)(l), [R.getPage().oid])
                              ),
                              e.abrupt(
                                "return",
                                Promise.all([
                                  R.commonDrawerAlertAsync({
                                    title: a.title,
                                    content: a.content,
                                    buttonName: a.confirmButton,
                                  }),
                                  !1,
                                ])
                              )
                            );
                          case 11:
                            return e.abrupt("return", [!0, !0]);
                          case 14:
                            return (
                              (e.prev = 14),
                              (e.t0 = e.catch(1)),
                              e.abrupt("return", [!0, !0])
                            );
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 14]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            _e = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t,
                    n,
                    o,
                    r,
                    a,
                    l,
                    c,
                    s,
                    u,
                    d,
                    p = arguments;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n =
                                p.length > 0 && void 0 !== p[0] ? p[0] : {}),
                              (o = n.isAutoPay),
                              (r = void 0 !== o && o),
                              (a = R.getPage()),
                              1 ===
                                (null == (l = R.getState().orderModel) ||
                                null === (t = l.orderInfo) ||
                                void 0 === t
                                  ? void 0
                                  : t.payFlag))
                            ) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              R.showCommonDialog("订单状态暂时无法支付")
                            );
                          case 5:
                            return (
                              (e.prev = 5),
                              null == a || a.freezePullDown(),
                              (c = R.getState().orderModel.orderInfo),
                              (s = c.availablePoints),
                              (u = c.consumptionPoints),
                              R.ubtTrace("TZWBuyShelf_PayPop_exposure", {
                                PageId: a.pageId,
                                orderid: a.oid,
                                ExpoType: r ? 2 : 1,
                              }),
                              (e.next = 11),
                              (0, ae.ZP)({
                                page: a,
                                orderNumber: a.oid,
                                productIds: ee(),
                                useCouponDetailInfo: ue(),
                                refundInsVipFreeProduct: te(),
                                pointPaymentInfo: {
                                  availablePoints: s,
                                  consumptionPoints: u,
                                },
                                packageInfos: be(),
                                productFromList: Ne(),
                                goodsList: oe(),
                              })
                            );
                          case 11:
                            if (
                              (d = e.sent).reason.reasonCode ===
                              ae.ZB.USER_CANCEL
                            ) {
                              e.next = 21;
                              break;
                            }
                            if (d.reason.reasonCode === ae.ZB.SUCCESS) {
                              e.next = 15;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              R.showCommonDialog(d.reason.msg)
                            );
                          case 15:
                            return (e.next = 17), je();
                          case 17:
                            (0, S.showLoading)("请稍候..."),
                              Fe(),
                              (e.next = 23);
                            break;
                          case 21:
                            (0, S.showToast)(d.reason.msg),
                              R.ubtTrace("TZWBuyShelf_PayPop_Close_click", {
                                PageId: a.pageId,
                                orderid: a.oid,
                                ExpoType: r ? 2 : 1,
                              });
                          case 23:
                            e.next = 28;
                            break;
                          case 25:
                            (e.prev = 25),
                              (e.t0 = e.catch(5)),
                              console.error("handlepay err", e.t0);
                          case 28:
                            null == a || a.unfreezePullDown();
                          case 29:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 25]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ke = function () {
              var e,
                t = R.getState().orderModel;
              if (
                1 ===
                  (null == t || null === (e = t.orderInfo) || void 0 === e
                    ? void 0
                    : e.payFlag) &&
                R.getPage().payAutoFlag
              )
                return _e({ isAutoPay: !0 });
            },
            Ve = b.Z.throttle(
              (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, n, o, r, a, l, c;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = R.getPage()),
                            R.ubtTrace("TZWBuyShelf_Pay_click", {
                              PageId: t.pageId,
                              orderid: t.oid,
                            }),
                            (e.next = 4),
                            xe()
                          );
                        case 4:
                          if (
                            ((n = e.sent),
                            (o = (0, y.Z)(n, 2)),
                            (r = o[0]),
                            (a = void 0 === r || r),
                            (l = o[1]),
                            (c = void 0 === l || l),
                            re.Z.commonDebugTrace(
                              "showIdentityUnverifiedPayToastResult-"
                                .concat(a, "-")
                                .concat(c)
                            ),
                            a)
                          ) {
                            e.next = 13;
                            break;
                          }
                          return e.abrupt("return");
                        case 13:
                          return e.abrupt("return", _e());
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              1e3
            );
          function Be(e, t) {
            if (0 === e) return 0;
            for (var n = e > t.length ? t.length : e, o = 0, i = 0; i < n; i++)
              o += t[i];
            return o;
          }
          var De = function () {
              var e,
                t = R.getState().orderModel;
              R.getDispatch().paymentModel.setPriceDeskViewIsShow(
                1 ===
                  (null == t || null === (e = t.orderInfo) || void 0 === e
                    ? void 0
                    : e.payFlag)
              ),
                (function () {
                  var e = R.getInstance(),
                    t = e.getState,
                    n = e.dispatch,
                    o = t().orderModel.orderInfo;
                  if (1 === (null == o ? void 0 : o.specialOrderTypeFlag))
                    return n.paymentModel.setPayBtnText("立即兑换");
                  n.paymentModel.setPayBtnText("立即支付");
                })();
            },
            Me = n(59076),
            Ae = n(96158),
            Xe = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var n;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, Me.WG)({
                              orderNumber: t,
                              accountNumber:
                                R.getState().my12306Model.userName12306,
                            })
                          );
                        case 2:
                          (n = e.sent),
                            1 !== n.resultCode &&
                              (0, S.showToast)("网络错误，请稍候重试~"),
                            Fe();
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Le = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var n, o, r, a, l, c, s, u, d, p, f, v, g, P;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (p = R.getPage().oid),
                            (f = (null == t ? void 0 : t.interceptInfo) || {}),
                            (v =
                              null ===
                                (n = R.getState().orderModel.areaAOrderInfo) ||
                              void 0 === n ||
                              null === (o = n._orderTickets) ||
                              void 0 === o ||
                              null === (r = o[0]) ||
                              void 0 === r ||
                              null === (a = r.ticketInfoForWaitPays) ||
                              void 0 === a ||
                              null ===
                                (l = a.filter(function (e) {
                                  return "学生票" == e.passengerType;
                                })) ||
                              void 0 === l ||
                              null === (c = l[0]) ||
                              void 0 === c
                                ? void 0
                                : c.passengerName),
                            (g =
                              v ==
                              (null ===
                                (s = R.getState().my12306Model.selfPassenger) ||
                              void 0 === s
                                ? void 0
                                : s.passengerName)),
                            (P = !!f.share),
                            (R.getPage().shareToStudentVerificationOptions = P
                              ? {
                                  title: "核验学生资质，帮你买票",
                                  path: "".concat(
                                    (null === (u = f.share) || void 0 === u
                                      ? void 0
                                      : u.jumpUrl) ||
                                      "/pages/train/studentVerification/studentVerification?oid=".concat(
                                        p
                                      )
                                  ),
                                  imageUrl: h.default.isTieyou
                                    ? "https://images3.c-ctrip.com/ztrip/train_xie/2023/07/img_mxsphyzz_kp_ty.webp"
                                    : "https://images3.c-ctrip.com/ztrip/train_xie/2023/07/img_mxsphyzz_kp.webp",
                                }
                              : null),
                            R.ubtTrace(
                              "TZWBuyShelf_StuCouponVerifyPop_exposure",
                              {
                                PageId: R.getPage().pageId,
                                Type: g ? "own" : "other",
                              }
                            ),
                            R.commonDrawerConfirm({
                              iconStyle: {
                                width: m().pxTransform(320),
                                height: m().pxTransform(202),
                                marginTop: m().pxTransform(62),
                              },
                              icon:
                                (null == f ? void 0 : f.icon) ||
                                "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/img_xszzrz@3x.webp",
                              title:
                                (null == f ? void 0 : f.title) ||
                                "需完成学生资质认证",
                              content: ""
                                .concat(
                                  (null == f ? void 0 : f.subTitle) ||
                                    '<font color="#FD9227">铁路局规定：</font>购票学生票前需完成学生优惠资质核验'
                                )
                                .concat(
                                  !g && P
                                    ? "，分享成功后刷新页面获取核验结果"
                                    : ""
                                ),
                              cancelText:
                                (null == f ? void 0 : f.leftButton) ||
                                "买成人票",
                              confirmText: g
                                ? (null == f ? void 0 : f.rightButton) ||
                                  "立即认证"
                                : (null === (d = f.share) || void 0 === d
                                    ? void 0
                                    : d.button) || "再想想",
                              confirmShareId: g
                                ? ""
                                : P
                                ? le.M4.SHARE_TO_STUDNET_VERIFICATION
                                : "",
                              ignoreBreak: !0,
                              isDisabledCloseEventAutomatic: !0,
                              onCancel: function (e) {
                                e(),
                                  Xe(p),
                                  R.ubtTrace(
                                    "TZWBuyShelf_StuCouponVerifyPop_Adult_click",
                                    {
                                      PageId: R.getPage().pageId,
                                      Type: g ? "own" : "other",
                                    }
                                  );
                              },
                              onConfirm: function (e) {
                                if (g)
                                  return (
                                    e(),
                                    R.addOneTimeOnShowEvent(Fe),
                                    R.ubtTrace(
                                      "TZWBuyShelf_StuCouponVerifyPop_Verify_click",
                                      {
                                        PageId: R.getPage().pageId,
                                        Type: g ? "own" : "other",
                                      }
                                    ),
                                    (0, Ae.Zs)({ oid: p })
                                  );
                                R.ubtTrace(
                                  "TZWBuyShelf_StuCouponVerifyPop_Share_click",
                                  {
                                    PageId: R.getPage().pageId,
                                    Type: g ? "own" : "other",
                                  }
                                );
                              },
                            });
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Oe = ["onConfirm", "onCancel"],
            Fe = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, n, o, r, a, l;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            R.getDispatch().my12306Model.refresh(),
                            null == (t = R.getPage()) || t.freezePullDown(),
                            (0, S.showLoading)(),
                            Ue(),
                            (e.next = 7),
                            Promise.all([we(), U(), me()])
                          );
                        case 7:
                          if (
                            ((n = e.sent),
                            (o = (0, y.Z)(n, 3)),
                            (r = o[0]),
                            (a = o[1]),
                            (l = o[2]),
                            r)
                          ) {
                            e.next = 16;
                            break;
                          }
                          return (
                            (0, S.showToast)("网络错误，请刷新重试~"),
                            null == t || t.unfreezePullDown(),
                            e.abrupt("return")
                          );
                        case 16:
                          return (e.next = 18), ze(r);
                        case 18:
                          if (e.sent) {
                            e.next = 23;
                            break;
                          }
                          return (
                            (0, S.hideLoading)(),
                            null == t || t.unfreezePullDown(),
                            e.abrupt("return")
                          );
                        case 23:
                          Te(r),
                            H(a),
                            de(),
                            De(),
                            he(l),
                            1 === (null == r ? void 0 : r.isPreHoldSeat) &&
                              0 === (null == r ? void 0 : r.preHoldStatus) &&
                              Re(),
                            He(),
                            Pe(),
                            We(),
                            (0, S.hideLoading)(),
                            null == t || t.unfreezePullDown();
                        case 34:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ze = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            3 !== t.orderStatusFlag &&
                            2 !== t.orderStatusFlag
                          ) {
                            e.next = 3;
                            break;
                          }
                          return (
                            R.getPage().redirectTo({
                              url: x.ZP.getTrainDetailUrl(R.getPage().oid),
                            }),
                            e.abrupt("return", !1)
                          );
                        case 3:
                          return e.abrupt("return", !0);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Re = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = {
                              orderNumber: R.getPage().oid,
                              clientId: "",
                              reqTime: "",
                              clientInfo: "",
                              appVersion: h.default.appVersion,
                              deviceId: "",
                              partnerName: h.default.partner,
                            }),
                            e.abrupt(
                              "return",
                              (0, N.BFI)(t)
                                .then(function (e) {
                                  var n,
                                    o,
                                    i,
                                    r = e.resultCode;
                                  if (
                                    1 !=
                                    (null == e ||
                                    null === (n = e.holdSeatShowFlagInfo) ||
                                    void 0 === n
                                      ? void 0
                                      : n.holdSeatAutoJumpInterruptFlag)
                                  )
                                    if (
                                      "stuQlf" !==
                                      (null == e ||
                                      null === (o = e.authFailToastInfo) ||
                                      void 0 === o
                                        ? void 0
                                        : o.interceptType)
                                    ) {
                                      if (6 == e.holdSeatFailCode)
                                        return qe(t.orderNumber);
                                      3 === r
                                        ? (R.getPage().loopPreHoldSeatTimer =
                                            setTimeout(Re, 2500))
                                        : (Ue(), Fe()),
                                        null !== (i = e.holdSeatShowFlagInfo) &&
                                          void 0 !== i &&
                                          i.holdSeatCancelFlag &&
                                          R.getDispatch().orderModel.setCancelViewVisible(
                                            !0
                                          );
                                    } else Le(e.authFailToastInfo);
                                  else {
                                    R.getPage().redirectTo({
                                      url: "/pages/12306/dark/index?interceptScene="
                                        .concat("holdSeat", "&oid=")
                                        .concat(R.getPage().oid),
                                    });
                                  }
                                })
                                .catch(Ue)
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ue = function () {
              var e = R.getPage();
              e.loopPreHoldSeatTimer &&
                (clearTimeout(e.loopPreHoldSeatTimer),
                (e.loopPreHoldSeatTimer = null));
            },
            He = function () {
              try {
                ce(), Ee();
              } catch (e) {
                console.error(e),
                  R.ubtDevTrace("o_train_debug", {
                    errorMsg: e.message || e.toString(),
                  });
              }
            },
            Ee = function () {
              try {
                (function () {
                  var e,
                    t,
                    n,
                    o,
                    i,
                    r,
                    a =
                      null === (e = R.getState().orderModel.orderInfo) ||
                      void 0 === e ||
                      null === (t = e.ticketItineraryInfoForWaitPays) ||
                      void 0 === t
                        ? void 0
                        : t.length,
                    l = R.getState().orderModel.orderInfo.priceDetail,
                    c = (null == l ? void 0 : l.totalPrice) || 0,
                    s = R.getState().useCouponModel.targetUseCoupon,
                    u = [],
                    d = R.getDispatch().paymentModel,
                    p = 0;
                  null == l ||
                    null === (n = l.detail) ||
                    void 0 === n ||
                    n.forEach(function (e) {
                      ((null == s ? void 0 : s.useScope) & e.saleProductType) >
                        0 && (p += e.totalPrice);
                    }),
                    u.push(p);
                  var f,
                    v,
                    m = Q(),
                    h = m.commonSaleInfos,
                    g = m.lowPriceSaleInfoList,
                    P = m.extProduct;
                  null == h ||
                    h.forEach(function (e) {
                      var t, n, o;
                      (c =
                        null === (t = c) || void 0 === t
                          ? void 0
                          : t.zt_add(
                              null === (n = e.price) || void 0 === n
                                ? void 0
                                : n.zt_multiply(e._caculateCount)
                            )),
                        ((null == s ? void 0 : s.useScope) &
                          ((null == e ? void 0 : e.saleProductType) || 0)) >
                          0 &&
                          u.push(
                            null === (o = e.price) || void 0 === o
                              ? void 0
                              : o.zt_multiply(e._caculateCount)
                          );
                    }),
                    null == g ||
                      g.forEach(function (e) {
                        var t, n, o;
                        (c =
                          null === (t = c) || void 0 === t
                            ? void 0
                            : t.zt_add(
                                null === (n = e.price) || void 0 === n
                                  ? void 0
                                  : n.zt_multiply(a)
                              )),
                          ((null == s ? void 0 : s.useScope) &
                            ((null == e ? void 0 : e.saleProductType) || 0)) >
                            0 &&
                            u.push(
                              null === (o = e.price) || void 0 === o
                                ? void 0
                                : o.zt_multiply(e._caculateCount)
                            );
                      }),
                    P &&
                      (c =
                        null === (f = c) || void 0 === f
                          ? void 0
                          : f.zt_add(
                              (null == P ||
                              null === (v = P.extProductContent) ||
                              void 0 === v
                                ? void 0
                                : v._realPrice) || 0
                            )),
                    K().forEach(function (e) {
                      var t, n;
                      (c =
                        null === (t = c) || void 0 === t
                          ? void 0
                          : t.zt_add(e._realPrice * e.productCount)),
                        ((null == s ? void 0 : s.useScope) &
                          ((null == e ? void 0 : e.saleProductType) || 0)) >
                          0 &&
                          u.push(
                            null === (n = e._realPrice) || void 0 === n
                              ? void 0
                              : n.zt_multiply(e.productCount)
                          );
                    }),
                    (r = i =
                      Be(1, u) > (null == s ? void 0 : s.couponPrice) ||
                      Be(2, u) > (null == s ? void 0 : s.couponPrice) ||
                      Be(3, u) > (null == s ? void 0 : s.couponPrice)
                        ? s.couponPrice
                        : Be(3, u)),
                    d.updateTotalPrice(
                      null === (o = c) || void 0 === o ? void 0 : o.zt_sub(r)
                    ),
                    d.updateUseCouponDiscountPrice(i),
                    d.updateTotalDiscountPrice(r);
                })(),
                  (function () {
                    var e,
                      t,
                      n,
                      o,
                      i,
                      r,
                      a =
                        null === (e = R.getState().orderModel.orderInfo) ||
                        void 0 === e ||
                        null === (t = e.ticketItineraryInfoForWaitPays) ||
                        void 0 === t
                          ? void 0
                          : t.length,
                      l =
                        (null ===
                          (n = R.getState().orderModel.orderInfo.priceDetail) ||
                        void 0 === n
                          ? void 0
                          : n.detail) || [],
                      c = K(),
                      s = [],
                      u = l
                        .filter(function (e) {
                          return 1 === e.priceType;
                        })
                        .map(function (e) {
                          return { name: e.key, desc: e.value };
                        });
                    s.push({ typeName: "票价", priceType: 1, priceItem: u });
                    var d = Q(),
                      p = d.commonSaleInfos,
                      f = void 0 === p ? [] : p,
                      v = d.lowPriceSaleInfoList,
                      m = void 0 === v ? [] : v,
                      h = d.extProduct,
                      g =
                        (null == h ||
                        null === (o = h.extProductContent) ||
                        void 0 === o ||
                        null === (i = o.vipSaleInfo) ||
                        void 0 === i
                          ? void 0
                          : i.firstOrderDiscountPrice) || 0,
                      P =
                        (null == h ||
                        null === (r = h.extProductContent) ||
                        void 0 === r
                          ? void 0
                          : r._realPrice) || 0,
                      Z = l
                        .filter(function (e) {
                          return 2 === e.priceType;
                        })
                        .map(function (e) {
                          return { name: e.key, desc: e.value };
                        })
                        .concat(
                          c.map(function (e) {
                            return {
                              name: e._showProductName || e.productName,
                              desc: "¥"
                                .concat(e._realPrice, "x")
                                .concat(e.productCount),
                            };
                          })
                        )
                        .concat(
                          f.map(function (e) {
                            return {
                              name: e.productName,
                              desc: "¥"
                                .concat(e.price || 0, "x")
                                .concat(e._caculateCount),
                            };
                          })
                        )
                        .concat(
                          m.map(function (e) {
                            return {
                              name: e.title,
                              desc: "¥".concat(e.price || 0, "x").concat(a),
                            };
                          })
                        )
                        .concat(
                          null != h && h.extProductContent
                            ? [
                                {
                                  name: h.extProductContent._title,
                                  desc: "¥".concat(P + g),
                                },
                              ]
                            : []
                        );
                    h &&
                      g > 0 &&
                      (Z = Z.concat([
                        { name: "平台补贴", desc: "-¥".concat(g) },
                      ])),
                      Z.length > 0 &&
                        s.push({
                          typeName: "附加产品",
                          priceType: 2,
                          priceItem: Z,
                        });
                    var C,
                      I = [],
                      w = R.getState().paymentModel.useCouponDiscountPrice;
                    w > 0 &&
                      I.push({
                        name:
                          (null ===
                            (C = R.getState().useCouponModel.targetUseCoupon) ||
                          void 0 === C
                            ? void 0
                            : C.couponName) || "优惠券",
                        desc: "-¥".concat(w),
                      }),
                      I.length > 0 &&
                        s.push({
                          typeName: "优惠",
                          priceType: 3,
                          priceItem: I,
                        });
                    var T = h && g > 0 ? g : 0 + w;
                    R.getDispatch().paymentModel.updateAllDiscountPrice(T),
                      R.getDispatch().paymentModel.updatePriceDetail(s);
                  })();
              } catch (e) {
                console.error(e);
              }
            },
            We = function () {
              if (h.default.isWechat) {
                var e = h.default.isTieyou ? "ty" : "zx",
                  t = le.hB[e];
                b.Z.getSubscribe(t).then(function (e) {
                  e &&
                    e.mainSwitch &&
                    R.getDispatch().orderModel.setShouldSubscribeMsgAfterPay(
                      !0
                    );
                });
              }
            },
            je = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, n;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            R.getState().orderModel.shouldSubscribeMsgAfterPay
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (
                            R.ubtTrace(
                              "TZWBuyOrderDetail_SubscribePop_exposure",
                              {
                                PageId: h.default.isTieyou
                                  ? "10650078937"
                                  : "10650078933",
                                Type: "paySucc",
                              }
                            ),
                            (t = h.default.isTieyou ? "ty" : "zx"),
                            (n = le.hB[t]),
                            (e.next = 8),
                            b.Z.setSubscribe(n, !1)
                              .then(function (e) {
                                e &&
                                  R.ubtTrace(
                                    "TZWBuyOrderDetail_SubscribePop_Choose_click",
                                    {
                                      PageId: h.default.isTieyou
                                        ? "10650078937"
                                        : "10650078933",
                                      Type: "paySucc",
                                    }
                                  );
                              })
                              .catch(function () {})
                          );
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Je = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var n, o, r, a;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.onConfirm),
                            (o = t.onCancel),
                            (r = (0, T.Z)(t, Oe)),
                            (a = r.toast).toastCode !== le.Iv.noticeToast &&
                              R.ubtTrace("s_trn_z_trace_10650078933", {
                                bizKey: "z_mini_shelfPage_pop_show",
                                orderId: R.getPage().oid,
                                name: a.toastName,
                              }),
                            e.abrupt(
                              "return",
                              new Promise(function (e) {
                                var t;
                                null === (t = R.getPage().$CommonToast) ||
                                  void 0 === t ||
                                  t.showToast(
                                    (0, w.Z)(
                                      (0, w.Z)({}, r),
                                      {},
                                      {
                                        onConfirm: function () {
                                          a.toastCode !== le.Iv.noticeToast &&
                                            R.ubtTrace("c_trn_z_10650078933", {
                                              bizKey:
                                                "z_mini_shelfPage_pop_click",
                                              orderId: R.getPage().oid,
                                              name: a.toastName,
                                              click_type: 1,
                                            }),
                                            null == n || n(),
                                            e(1);
                                        },
                                        onCancel: function () {
                                          a.toastCode !== le.Iv.noticeToast &&
                                            R.ubtTrace("c_trn_z_10650078933", {
                                              bizKey:
                                                "z_mini_shelfPage_pop_click",
                                              orderId: R.getPage().oid,
                                              name: a.toastName,
                                              click_type: 2,
                                            }),
                                            null == o || o(),
                                            e(0);
                                        },
                                      }
                                    )
                                  );
                              })
                            )
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            qe = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var n, o, r, a;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, Me.Ar)({ orderNumber: t, type: 2 })
                          );
                        case 2:
                          if (
                            ((n = e.sent),
                            (o = n.orderNumber),
                            (r = n.resultCode),
                            (a = n.resultMessage),
                            1 == r)
                          ) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            R.showCommonDialog(a || "网络错误，请稍候重试~")
                          );
                        case 8:
                          R.redirectTo({
                            url: "/pages/trainDetail/shelves/shelves?oid=".concat(
                              o
                            ),
                          });
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            $e = n(46408),
            Ge = n(48813),
            Ke = function (e) {
              var t = e.notices,
                n = void 0 === t ? [] : t;
              if (!n || n.length <= 0) return null;
              var o = function (e) {
                  R.ubtTrace("c_trn_z_10650078933", {
                    bizKey: "z_mini_shelfPage_yellowBanner_click",
                    orderId: R.getPage().oid,
                  }),
                    e.jumpUrl
                      ? b.Z.commonNavigator(e.jumpUrl)
                      : (function (e) {
                          Je({ toast: e });
                        })(e);
                },
                i = {
                  data: {
                    bizKey: "z_mini_shelfPage_yellowBanner_show",
                    orderId: R.getPage().oid,
                  },
                  ubtKeyName: "s_trn_z_trace_10650078933",
                };
              return (0, Ge.tZ)(C.View, {
                className: "train-shelves-octopus-common-notice autoExpose",
                ref: function () {
                  $e.Z.refreshObserve(m().getCurrentInstance().page);
                },
                "data-expose": i,
                children: (0, Ge.tZ)(C.Swiper, {
                  interval: "2000",
                  autoplay: !0,
                  className: "notice-swiper",
                  vertical: !0,
                  circular: !0,
                  children: n.map(function (e, t) {
                    return (0, Ge.tZ)(
                      C.SwiperItem,
                      {
                        children: (0, Ge.BX)(C.View, {
                          className: "notice-swiper-item",
                          id: "AJHJ",
                          onClick: function () {
                            return o(e);
                          },
                          children: [
                            (0, Ge.tZ)(C.View, {
                              className: "notice-text",
                              children: (0, Ge.tZ)(Z.ZtRichText, {
                                space: "nbsp",
                                nodes: '<div class="notice-text">'.concat(
                                  b.Z.convertAppTextToHtmlStr(e.title),
                                  "</div>"
                                ),
                              }),
                            }),
                            (0, Ge.tZ)(C.View, {
                              className: "ifont-arr iconfont",
                            }),
                          ],
                        }),
                      },
                      "notice_".concat(t)
                    );
                  }),
                }),
              });
            },
            Qe = (0, f.$j)(function (e) {
              var t,
                n,
                o,
                i,
                r,
                a,
                l,
                c = e.orderModel,
                s = e.octopusModel;
              return {
                _orderTickets:
                  null === (t = c.areaAOrderInfo) || void 0 === t
                    ? void 0
                    : t._orderTickets,
                orderStatus:
                  null === (n = c.orderInfo) || void 0 === n
                    ? void 0
                    : n.orderStatus,
                orderTimeoutDate:
                  null === (o = c.orderInfo) || void 0 === o
                    ? void 0
                    : o.orderTimeoutDate,
                isShowOrderTimeOutView: c.isShowOrderTimeOutView,
                isShowOrderTimeOutViewWithHour:
                  c.isShowOrderTimeOutViewWithHour,
                notices: s.notices,
                exclusiveCrowdDesc:
                  null == c ||
                  null === (i = c.orderInfo) ||
                  void 0 === i ||
                  null === (r = i.exclusiveCrowd) ||
                  void 0 === r
                    ? void 0
                    : r.cardStateDesc,
                exclusiveCrowdIcon:
                  null == c ||
                  null === (a = c.orderInfo) ||
                  void 0 === a ||
                  null === (l = a.exclusiveCrowd) ||
                  void 0 === l
                    ? void 0
                    : l.icon,
              };
            })(function (e) {
              var t = e._orderTickets,
                n = void 0 === t ? [] : t,
                o = e.orderStatus,
                i = e.orderTimeoutDate,
                r = e.isShowOrderTimeOutView,
                a = e.isShowOrderTimeOutViewWithHour,
                l = e.notices,
                c = e.exclusiveCrowdDesc,
                s = void 0 === c ? "" : c,
                u = e.exclusiveCrowdIcon,
                d = void 0 === u ? "" : u,
                p = function (e) {
                  return (0, Ge.BX)(C.View, {
                    className: "train-info",
                    children: [
                      (0, Ge.tZ)(C.Text, {
                        children: ""
                          .concat(e.fromTime)
                          .concat(e.fromStation, "-")
                          .concat(e.toTime)
                          .concat(
                            e.toDate !== e.fromDate
                              ? "(".concat(e.toDate, ")")
                              : ""
                          )
                          .concat(e.toStation),
                      }),
                      (0, Ge.tZ)(C.View, { className: "line" }),
                      (0, Ge.tZ)(C.Text, { children: e.seatName }),
                    ],
                  });
                };
              return (0, Ge.BX)(C.View, {
                className: "train-shelves-order-view",
                children: [
                  (0, Ge.BX)(C.View, {
                    className: "status-bar flex-align-items-center",
                    children: [
                      (0, Ge.BX)(C.View, {
                        className: "flex-align-items-center left",
                        children: [
                          (0, Ge.tZ)(C.Image, {
                            className: "icon",
                            src: null == o ? void 0 : o.iconV1,
                            mode: "aspectFit",
                            webp: !0,
                          }),
                          null == o ? void 0 : o.name,
                        ],
                      }),
                      204 === (null == o ? void 0 : o.code) &&
                        (0, Ge.tZ)(I.Z, {}),
                      r &&
                        (0, Ge.BX)(C.View, {
                          className: "flex-align-items-center right",
                          children: [
                            (0, Ge.tZ)(C.Text, { children: "剩余" }),
                            (0, Ge.tZ)(Z.ZtCountdown, {
                              endTime: i,
                              format: {
                                hour: "时",
                                minute: "分",
                                second: "秒",
                              },
                              isShowHour: a,
                              onTimeup: Fe,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, Ge.tZ)(Ke, { notices: l }),
                  n.map(function (e, t) {
                    return (0, Ge.BX)(
                      C.View,
                      {
                        className: "ticket-view with-margin-view",
                        children: [
                          (0, Ge.BX)(C.View, {
                            className: "v-t",
                            children: [
                              (0, Ge.tZ)(C.View, {
                                className: "order-date",
                                children: e._datestr,
                              }),
                              (0, Ge.tZ)(C.View, {
                                className: "train-info",
                                children: p(e),
                              }),
                            ],
                          }),
                          (0, Ge.BX)(C.View, {
                            className: "v-b",
                            children: [
                              s &&
                                (0, Ge.BX)(C.View, {
                                  className: "flex flex-center free-tag",
                                  children: [
                                    d &&
                                      (0, Ge.tZ)(C.Image, {
                                        className: "free-icon",
                                        src: d,
                                        mode: "heightFix",
                                      }),
                                    s,
                                  ],
                                }),
                              e.ticketInfoForWaitPays.map(function (e) {
                                return (function (e) {
                                  return (0,
                                  Ge.BX)(C.View, { className: "pas-item", children: [(0, Ge.tZ)(C.Text, { className: "name", children: e.passengerName }), (0, Ge.tZ)(C.Text, { className: "seat", children: e.seatNo }), e.seatTag && (0, Ge.tZ)(C.Text, { className: "tag bd-1rpx", children: e.seatTag })] });
                                })(e);
                              }),
                              e.freeTicket &&
                                e.freeTicket.map(function (e) {
                                  return (function (e) {
                                    return (0,
                                    Ge.BX)(C.View, { className: "pas-item", children: [(0, Ge.tZ)(C.Text, { className: "name", children: e.passengerName }), e.passportTag && (0, Ge.tZ)(C.Text, { className: "tag bd-1rpx", children: e.passportTag })] });
                                  })(e);
                                }),
                            ],
                          }),
                        ],
                      },
                      t
                    );
                  }),
                ],
              });
            }),
            Ye = n(26498),
            et = function (e) {
              var t = e.insuranceProductInfos,
                n = void 0 === t ? [] : t,
                o = e.handleCheck,
                i = void 0 === o ? function () {} : o,
                r = e.handleDisabledClick,
                a = void 0 === r ? function () {} : r,
                l = e.handleToDesc,
                c = void 0 === l ? function () {} : l,
                s = e.ubtTrace,
                u = void 0 === s ? function () {} : s,
                d = e.total_num,
                p = void 0 === d ? 0 : d,
                f = e.oid;
              if (n.length <= 0) return null;
              var v = function (e, t) {
                  var n,
                    o,
                    i = e.descUrl,
                    r = e.productName,
                    a = e.vipSaleUseInfo;
                  c();
                  var l = (null == a ? void 0 : a.vipProductUrl) || i;
                  (l =
                    null === (n = l) ||
                    void 0 === n ||
                    !n.includes("http") ||
                    (null !== (o = l) && void 0 !== o && o.includes("https"))
                      ? l
                      : l.replace("http", "https")),
                    m().navigateTo({
                      url: "/functionalPages/twebview/index?url=".concat(
                        encodeURIComponent(l)
                      ),
                    }),
                    u("TZWBuyShelf_XProduct_click", {
                      PageId: (0, S.getCurrentPage)().pageId,
                      orderid: f,
                      PositionType: "C",
                      Seq: t + 1,
                      ProductName: r,
                      clickType: 3,
                      Num: p,
                    });
                },
                h = function (e, t) {
                  var n = e.productName,
                    o = e._isChecked;
                  if (1 === e.canChoose) return a(e, t);
                  i(t),
                    u("TZWBuyShelf_XProduct_click", {
                      PageId: (0, S.getCurrentPage)().pageId,
                      orderid: f,
                      PositionType: "C",
                      Seq: t + 1,
                      ProductName: n,
                      clickType: o ? 2 : 1,
                      Num: p,
                    });
                };
              return (0, Ge.tZ)(C.View, {
                className: "train-insuracev2-view",
                children: n.map(function (e, t) {
                  var n,
                    o = e._isChecked;
                  return (0, Ge.BX)(
                    C.View,
                    {
                      className: "insurance-item autoExpose",
                      ref: function () {
                        $e.Z.refreshObserve(m().getCurrentInstance().page);
                      },
                      "data-expose": {
                        data: {
                          PageId: (0, S.getCurrentPage)().pageId,
                          orderid: f,
                          PositionType: "c",
                          Seq: t + 1,
                          ProductName: e.productName,
                          Num: p,
                        },
                        ubtKeyName: "TZWBuyShelf_XProduct_exposure",
                      },
                      children: [
                        (0, Ge.BX)(C.View, {
                          className: "ct",
                          children: [
                            (0, Ge.BX)(C.View, {
                              className: "ct-l",
                              children: [
                                (0, Ge.tZ)(C.Image, {
                                  className: "icon",
                                  src:
                                    (o ? e.productIcon : e.originSaleIcon) ||
                                    "https://images3.c-ctrip.com/ztrip/train_xie/2021-11/icon_yqx1_xz.png",
                                  mode: "aspectFit",
                                }),
                                (0, Ge.BX)(C.View, {
                                  className: "info",
                                  children: [
                                    (0, Ge.BX)(C.View, {
                                      className: "title",
                                      children: [
                                        (0, Ge.tZ)(C.Text, {
                                          children: e._showProductName,
                                        }),
                                        e.productTag &&
                                          (0, Ge.tZ)(C.Text, {
                                            className: "tag",
                                            children: e.productTag,
                                          }),
                                        e.descUrl &&
                                          (0, Ge.tZ)(C.View, {
                                            className: "ifont-detail iconfont",
                                            id: "AJAY",
                                            onClick: v.bind(void 0, e, t),
                                          }),
                                      ],
                                    }),
                                    (0, Ge.BX)(C.View, {
                                      className: "desc flex-center ".concat(
                                        o ? "active" : ""
                                      ),
                                      children: [
                                        (0, Ge.tZ)(C.Image, {
                                          src: o
                                            ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/icon_dg_2.png"
                                            : "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/icon_dg_1.png",
                                          className: "desc-icon",
                                          mode: "aspectFit",
                                        }),
                                        (0, Ge.tZ)(C.Text, {
                                          style: { flex: 1 },
                                          children: e.productDesc,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, Ge.BX)(C.View, {
                              className: "ct-r",
                              id: "AJAZ",
                              onClick: h.bind(void 0, e, t),
                              children: [
                                (0, Ge.tZ)(C.View, {
                                  className: "price ".concat(
                                    1 === e.canChoose ? "disabled" : ""
                                  ),
                                  children:
                                    1 === e.canChoose
                                      ? "本单不可用"
                                      : 1 === e.vipFree &&
                                        e._isOpenMemberProduct
                                      ? (0, Ge.BX)(C.View, {
                                          className: "free-price-content",
                                          children: [
                                            (0, Ge.tZ)(C.Text, {
                                              className: "free-price-text",
                                              children: "会员免费",
                                            }),
                                            (0, Ge.tZ)(C.Text, {
                                              className: "free-price",
                                              children: e.priceContent,
                                            }),
                                          ],
                                        })
                                      : e.priceContent,
                                }),
                                (0, Ge.tZ)(Ye.Z, {
                                  checked: o,
                                  disabled: 1 === e.canChoose,
                                  useCustomView: !0,
                                  onCheckedView: function () {
                                    return (0, Ge.tZ)(C.View, {
                                      className: "insur-radio cus-radioed",
                                    });
                                  },
                                  onCancelView: function () {
                                    return (0, Ge.tZ)(C.View, {
                                      className: "insur-radio cus-radio",
                                    });
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                        (null === (n = e.productDetailList) || void 0 === n
                          ? void 0
                          : n.length) > 0 &&
                          (0, Ge.tZ)(C.View, {
                            className: "cb",
                            children: e.productDetailList.map(function (e, t) {
                              return b.Z.convertText(e).map(function (e, n) {
                                return (0, Ge.BX)(
                                  C.View,
                                  {
                                    children: [
                                      "text" === e.type &&
                                        (0, Ge.tZ)(C.Text, {
                                          dangerouslySetInnerHTML: {
                                            __html: e.content,
                                          },
                                        }),
                                      "navigator" === e.type &&
                                        e.content.map(function (e) {
                                          return (0,
                                          Ge.BX)(C.Block, { children: ["txt" === e.type && (0, Ge.tZ)(C.Text, { dangerouslySetInnerHTML: { __html: e.val } }), "url" === e.type && (0, Ge.tZ)(C.Navigator, { className: "navigator-class", url: e.url, children: (0, Ge.tZ)(C.Text, { dangerouslySetInnerHTML: { __html: e.val }, id: "AJAb", onClick: c }) })] }, e.val);
                                        }),
                                    ],
                                  },
                                  ""
                                    .concat(e.type, "-")
                                    .concat(t, "-")
                                    .concat(n)
                                );
                              });
                            }),
                          }),
                      ],
                    },
                    t
                  );
                }),
              });
            },
            tt = function (e) {
              var t = e.targetCouponInfo,
                n = e.onSelectCoupon,
                o = void 0 === n ? function () {} : n,
                i = e.allUserCouponList,
                r = void 0 === i ? [] : i,
                a = e.useAbleCouponList,
                l = void 0 === a ? [] : a,
                c = !(null == r || !r.length),
                s = l.length > 0;
              return c
                ? (0, Ge.BX)(C.View, {
                    className: "train-od-coupon-selector order-white",
                    id: "AJAM",
                    onClick: o,
                    children: [
                      (0, Ge.tZ)(C.View, {
                        className: "tit",
                        children: "优惠券",
                      }),
                      (0, Ge.BX)(C.View, {
                        className: "coupon-info",
                        children: [
                          t
                            ? (0, Ge.BX)(C.View, {
                                className: "price",
                                children: ["-￥", t.couponPrice],
                              })
                            : s
                            ? (0, Ge.tZ)(C.View, { children: "请选择优惠券" })
                            : (0, Ge.tZ)(C.View, {
                                children: "暂无可用优惠券",
                              }),
                          (0, Ge.tZ)(C.Text, {
                            className: "ifont-arr iconfont arr",
                          }),
                        ],
                      }),
                    ],
                  })
                : null;
            },
            nt = n(26862),
            ot = function (e) {
              var t = e.price,
                n = e.onShowPriceDetail,
                o = e.trainHotelCrossActivity;
              return t && o
                ? (0, Ge.BX)(C.View, {
                    className: "shelve-price-detail-banner order-white",
                    id: "AJHR",
                    onClick: n,
                    children: [
                      (0, Ge.BX)(C.View, {
                        className: "tit",
                        children: [
                          (0, Ge.tZ)(C.View, { children: "价格明细" }),
                          (0, Ge.BX)(C.View, {
                            className: "price",
                            children: [
                              (0, Ge.tZ)(C.Text, {
                                className: "rmb-sign",
                                children: (0, Ge.tZ)(nt.Z, {}),
                              }),
                              t,
                            ],
                          }),
                        ],
                      }),
                      (0, Ge.tZ)(C.View, {
                        className: "ifont-arr iconfont arr",
                      }),
                    ],
                  })
                : null;
            },
            it = function (e) {
              1 === e.canChoose &&
                1 === e.insuranceType &&
                R.getPage().showCommonDialog({
                  content:
                    '<div style="text-align:left"><p>以下车票不支持使用安心退改权益：</p><p>1) 人工客票，包含选下铺车票、选座席车票、夜间出票等</p><p>2) 多程中转车票</p><p>3) 火车出发35min内购买的车票</p><p>4) 单张票面价格低于30元的车票</p></div>',
                });
            },
            rt = function (e) {
              !(function (e) {
                var t = R.getState().saleModel.areaCProductInfos,
                  n = void 0 === t ? [] : t,
                  o = n.find(function (t) {
                    return t.productCode === e.productCode;
                  });
                !b.Z.isEmptyObject(o) && (o._isChecked = !o._isChecked),
                  R.getDispatch().saleModel.updateAreaCProductInfos(n),
                  He();
              })(R.getState().saleModel.areaCProductInfos[e]);
            },
            at = p.default.memo(
              (0, f.$j)(
                function (e) {
                  var t = e.saleModel,
                    n = e.useCouponModel,
                    o = e.paymentModel;
                  return {
                    areaCProductInfos: t.areaCProductInfos,
                    enableSaled: !(null == t || !t.enableSaled),
                    allUserCouponList: n.allUserCouponList,
                    useableCouponList: n.useableCouponList,
                    targetUseCoupon: n.targetUseCoupon,
                    saledProductsAllCounts: t.saledProductsAllCounts,
                    totalPrice: o.totalPrice,
                    trainHotelCrossActivity:
                      null == t ? void 0 : t.trainHotelCrossActivity,
                  };
                },
                function (e) {
                  return {
                    togglePriceDetail: e.paymentModel.togglePriceDetail,
                  };
                }
              )(function (e) {
                var t = e.areaCProductInfos,
                  n = e.enableSaled,
                  o = e.allUserCouponList,
                  i = e.useableCouponList,
                  r = e.targetUseCoupon,
                  a = e.saledProductsAllCounts,
                  l = e.totalPrice,
                  c = e.togglePriceDetail,
                  s = e.trainHotelCrossActivity,
                  u = R.getPage();
                return n
                  ? (0, Ge.BX)(C.Block, {
                      children: [
                        (0, Ge.tZ)(et, {
                          total_num: a,
                          insuranceProductInfos: t,
                          handleCheck: rt,
                          handleDisabledClick: it,
                          ubtTrace: u.ubtTrace,
                          oid: u.oid,
                        }),
                        (0, Ge.tZ)(C.View, {
                          className: "shelve-bar",
                          children: (0, Ge.tZ)(tt, {
                            targetCouponInfo: r,
                            allUserCouponList: o,
                            useAbleCouponList: i,
                            onSelectCoupon: se,
                          }),
                        }),
                        (0, Ge.tZ)(ot, {
                          price: l,
                          onShowPriceDetail: c,
                          trainHotelCrossActivity: s,
                        }),
                      ],
                    })
                  : null;
              })
            ),
            lt = n(86977),
            ct = (0, f.$j)(
              function (e) {
                var t = e.paymentModel;
                return {
                  isShowPriceDetail: t.isShowPriceDetail,
                  priceDetails: t.priceDetails || [],
                };
              },
              function (e) {
                return { togglePriceDetail: e.paymentModel.togglePriceDetail };
              }
            )(function (e) {
              var t = e.isShowPriceDetail,
                n = e.priceDetails,
                o = e.togglePriceDetail;
              return (0, Ge.tZ)(Z.ZtDrawer, {
                className: "train-shelves-price-detail",
                show: t,
                onClose: o,
                onWrapClose: o,
                title: "价格明细",
                drawerStyle: { borderRadius: "40rpx 40rpx 0 0" },
                children: (0, Ge.tZ)(C.View, {
                  className: "content",
                  children:
                    null == n
                      ? void 0
                      : n.map(function (e, t) {
                          return (0, Ge.BX)(
                            C.View,
                            {
                              className: "price-detail",
                              children: [
                                (0, Ge.tZ)(C.View, {
                                  className: "tit",
                                  children: e.typeName,
                                }),
                                e.priceItem.map(function (e, t) {
                                  return (0,
                                  Ge.BX)(C.View, { className: "price-item flex-center", children: [(0, Ge.tZ)(C.View, { style: { flex: 1 }, children: e.name }), (0, Ge.tZ)(C.View, { className: "".concat("平台补贴" === e.name ? "red-font" : ""), children: (0, Ge.tZ)(Z.ZtRichText, { nodes: e.desc }) })] }, t);
                                }),
                              ],
                            },
                            t
                          );
                        }),
                }),
              });
            }),
            st = (0, f.$j)(
              function (e) {
                var t,
                  n,
                  o,
                  i,
                  r,
                  a,
                  l = e.paymentModel,
                  c = e.saleModel,
                  s = e.orderModel;
                return {
                  showPriceDesk: null == l ? void 0 : l.isShowPriceDeskView,
                  totalPrice: l.totalPrice,
                  payBtnText: l.payBtnText,
                  isShowPriceDetail: l.isShowPriceDetail,
                  allDiscountPrice: l.allDiscountPrice,
                  extProduct:
                    null == c || null === (t = c.areaBSaleInfo) || void 0 === t
                      ? void 0
                      : t.extProduct,
                  trainHotelCrossActivity:
                    null == c ? void 0 : c.trainHotelCrossActivity,
                  ticketPrice:
                    null == s ||
                    null === (n = s.orderInfo) ||
                    void 0 === n ||
                    null === (o = n.ticketItineraryInfoForWaitPays[0]) ||
                    void 0 === o ||
                    null === (i = o.ticketInfoForWaitPays[0]) ||
                    void 0 === i
                      ? void 0
                      : i.ticketPrice,
                  availablePoints:
                    null == s || null === (r = s.orderInfo) || void 0 === r
                      ? void 0
                      : r.availablePoints,
                  consumptionPoints:
                    null == s || null === (a = s.orderInfo) || void 0 === a
                      ? void 0
                      : a.consumptionPoints,
                };
              },
              function (e) {
                return { togglePriceDetail: e.paymentModel.togglePriceDetail };
              }
            )(function (e) {
              var t,
                n,
                o = e.showPriceDesk,
                i = e.totalPrice,
                r = e.payBtnText,
                a = e.togglePriceDetail,
                l = e.isShowPriceDetail,
                c = e.allDiscountPrice,
                s = e.extProduct,
                u = e.trainHotelCrossActivity,
                d = e.ticketPrice,
                p = e.availablePoints,
                f = e.consumptionPoints;
              if (!o) return null;
              R.ubtTrace("TZWBuyShelf_Pay_exposure", {
                PageId: R.getPage().pageId,
                orderid: R.getPage().oid,
              });
              var v = null == s ? void 0 : s._isChecked,
                m = "",
                g = (0, lt.Uy)("isShowPointTipInShelves") || !1;
              return (
                d &&
                  (m = "本单成功出行后12306会员<font color='#00C777'>+"
                    .concat(Math.floor(5 * d), "积分·价值")
                    .concat(Math.floor(5 * d) / 100, "元</font>")),
                u
                  ? (0, Ge.BX)(C.View, {
                      className: "shelves-PayDesk-view",
                      children: [
                        (0, Ge.BX)(C.View, {
                          className:
                            "desk flex-center train-hotel-cross-activity",
                          children: [
                            (0, Ge.BX)(C.View, {
                              className: "hotel-back-btn left",
                              id: "AJHa",
                              onClick: function () {
                                R.ubtTrace("TZWBuyShelf_ReserveModule_click", {
                                  PageId: h.default.isTieyou
                                    ? "10650078937"
                                    : "10650078933",
                                  orderId: R.getPage().oid,
                                  reserveChunnel: u ? 2 : 1,
                                  clickType: 2,
                                }),
                                  Ve();
                              },
                              children: [
                                (0, Ge.BX)(C.View, {
                                  className: "price",
                                  children: [
                                    (0, Ge.tZ)(C.View, {
                                      className: "rmb-sign",
                                      children: (0, Ge.tZ)(nt.Z, {}),
                                    }),
                                    i -
                                      (null == u ||
                                      null === (t = u.crossPrice) ||
                                      void 0 === t
                                        ? void 0
                                        : t.cashPrice),
                                  ],
                                }),
                                (0, Ge.tZ)(C.View, {
                                  className: "desc",
                                  children:
                                    null == u ||
                                    null === (n = u.crossPrice) ||
                                    void 0 === n
                                      ? void 0
                                      : n.cashPriceTxt,
                                }),
                              ],
                            }),
                            (0, Ge.BX)(C.View, {
                              className: "origin-btn",
                              id: "AJHb",
                              onClick: function () {
                                R.ubtTrace("TZWBuyShelf_ReserveModule_click", {
                                  PageId: h.default.isTieyou
                                    ? "10650078937"
                                    : "10650078933",
                                  orderId: R.getPage().oid,
                                  reserveChunnel: u ? 2 : 1,
                                  clickType: 1,
                                }),
                                  Ve();
                              },
                              children: [
                                (0, Ge.BX)(C.View, {
                                  className: "price",
                                  children: [
                                    (0, Ge.tZ)(C.View, {
                                      className: "rmb-sign",
                                      children: (0, Ge.tZ)(nt.Z, {}),
                                    }),
                                    i,
                                  ],
                                }),
                                (0, Ge.tZ)(C.View, {
                                  className: "desc",
                                  children: "原价预订",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Ge.tZ)(C.View, {
                          style: { position: "relative", zIndex: "-1" },
                          children: (0, Ge.tZ)(ct, {}),
                        }),
                      ],
                    })
                  : (0, Ge.BX)(C.View, {
                      className: "shelves-PayDesk-view",
                      children: [
                        g &&
                          m &&
                          !p &&
                          !f &&
                          (0, Ge.tZ)(C.View, {
                            className: "tip-content",
                            children: (0, Ge.tZ)(Z.ZtRichText, { nodes: m }),
                          }),
                        (0, Ge.BX)(C.View, {
                          className: "desk flex-center",
                          children: [
                            (0, Ge.BX)(C.View, {
                              className: "price-content",
                              children: [
                                (0, Ge.BX)(C.View, {
                                  className: "price",
                                  children: [
                                    (0, Ge.tZ)(C.View, {
                                      className: "rmb-sign",
                                      children: (0, Ge.tZ)(nt.Z, {}),
                                    }),
                                    i,
                                  ],
                                }),
                                c > 0 &&
                                  (0, Ge.BX)(C.View, {
                                    className: "discount-price",
                                    children: [
                                      "本单已减",
                                      (0, Ge.tZ)(nt.Z, {}),
                                      "".concat(c, "元"),
                                    ],
                                  }),
                              ],
                            }),
                            (0, Ge.BX)(C.View, {
                              className: "right-view flex-center",
                              children: [
                                (0, Ge.tZ)(C.Text, {
                                  className: "detail",
                                  id: "AJHX",
                                  onClick: a,
                                  children: "明细",
                                }),
                                (0, Ge.tZ)(C.Text, {
                                  className: "ifont-arr iconfont ".concat(
                                    l ? "open" : ""
                                  ),
                                  id: "AJHY",
                                  onClick: a,
                                }),
                                (0, Ge.tZ)(C.View, {
                                  className: "pay-btn ".concat(
                                    v ? "member-color" : ""
                                  ),
                                  id: "AJHZ",
                                  onClick: function () {
                                    R.ubtTrace(
                                      "TZWBuyShelf_ReserveModule_click",
                                      {
                                        PageId: h.default.isTieyou
                                          ? "10650078937"
                                          : "10650078933",
                                        orderId: R.getPage().oid,
                                        reserveChunnel: u ? 2 : 1,
                                        clickType: 1,
                                      }
                                    ),
                                      Ve();
                                  },
                                  children: r,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Ge.tZ)(C.View, {
                          style: { position: "relative", zIndex: "-1" },
                          children: (0, Ge.tZ)(ct, {}),
                        }),
                      ],
                    })
              );
            }),
            ut = (0, f.$j)(function (e) {
              return { isShowCancel: e.orderModel.showCancelOrderView };
            })(function (e) {
              return e.isShowCancel
                ? (0, Ge.tZ)(C.View, {
                    className: "train-shelves-cancel-btn flex-center",
                    id: "AJHS",
                    onClick: Se,
                    children: "取消订单",
                  })
                : null;
            });
          function dt(e) {
            var t = e.detainInsurance,
              n = e.onCancel,
              o = void 0 === n ? function () {} : n,
              i = e.onSure,
              r = void 0 === i ? function () {} : i;
            if (!t) return null;
            var a,
              l,
              c,
              s,
              u,
              d,
              p,
              f,
              v = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                0 === e ? o() : r();
              },
              m = h.default.isTieyou,
              g = "";
            try {
              g = t ? JSON.parse(t.placeOrderRetainJson) : "";
            } catch (e) {
              g = "";
            }
            return g
              ? (0, Ge.tZ)(Z.ZtDrawer, {
                  show: !0,
                  onClose: v.bind(this, 0),
                  className: "train-insurance-detain-drawer",
                  children: (0, Ge.BX)(C.View, {
                    className: "insurance-drawer autoExpose",
                    children: [
                      (0, Ge.tZ)(C.View, {
                        className: "background background-left",
                        style: {
                          backgroundImage: "url(".concat(
                            g.backgroundImgLeft,
                            ")"
                          ),
                        },
                      }),
                      (0, Ge.tZ)(C.View, {
                        className: "background background-right",
                        style: {
                          backgroundImage: "url(".concat(
                            g.backgroundImgRight,
                            ")"
                          ),
                        },
                      }),
                      (0, Ge.BX)(C.View, {
                        className: "drawer-content",
                        children: [
                          (0, Ge.tZ)(C.View, {
                            className: "d-title",
                            children: (0, Ge.tZ)(Z.ZtRichText, {
                              nodes: g.priceTip,
                              space: "nbsp",
                            }),
                          }),
                          (0, Ge.tZ)(C.View, {
                            className: "d-body",
                            children: g.options.map(function (e, t) {
                              return (0,
                              Ge.BX)(C.View, { className: "con-li", children: [(0, Ge.tZ)(C.Image, { className: "icon", src: e.icon, mode: "aspectFit" }), (0, Ge.BX)(C.View, { className: "detail", children: [(0, Ge.tZ)(C.View, { className: "title", children: (0, Ge.tZ)(Z.ZtRichText, { nodes: e.title, space: "nbsp" }) }), (0, Ge.tZ)(C.View, { className: "desc", children: (0, Ge.tZ)(Z.ZtRichText, { nodes: e.desc, space: "nbsp" }) })] })] }, t);
                            }),
                          }),
                        ],
                      }),
                      (0, Ge.BX)(C.View, {
                        className: "btn-group",
                        children: [
                          (0, Ge.tZ)(C.View, {
                            className: "btn no",
                            id: "AJHV",
                            onClick: v.bind(this, 0),
                            children: g.cancelButtonText || "否",
                          }),
                          (0, Ge.tZ)(C.View, {
                            className: "btn yes",
                            id: "AJHW",
                            onClick: v.bind(this, 1),
                            children: g.confirmButtonText || "是",
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : (0, Ge.tZ)(Z.ZtActivityPop, {
                  show: !0,
                  onClose: v.bind(this, 0),
                  className: "train-insurance-detain-drawer",
                  children: (0, Ge.BX)(C.View, {
                    className:
                      "pop-white modal-box pop-insur-normal autoExpose" +
                      (h.default.isTieyou ? "ty" : "zx"),
                    children: [
                      (0, Ge.tZ)(C.View, { className: "icon-bao" }),
                      (0, Ge.BX)(C.View, {
                        className: "pop-content",
                        children: [
                          (0, Ge.tZ)(C.View, {
                            className: "tit",
                            children:
                              (null === (a = t.insuranceStrategyInfo) ||
                              void 0 === a ||
                              null === (l = a.insurancePopContentInfo) ||
                              void 0 === l
                                ? void 0
                                : l.title) || t.productName,
                          }),
                          (0, Ge.tZ)(C.View, {
                            className: "pop-content-list",
                            children: (0, Ge.tZ)(C.View, {
                              className: "item",
                              style: "text-align:center",
                              children:
                                null === (c = t.insuranceStrategyInfo) ||
                                void 0 === c ||
                                null === (s = c.insurancePopContentInfo) ||
                                void 0 === s
                                  ? void 0
                                  : s.subTitle,
                            }),
                          }),
                        ],
                      }),
                      (0, Ge.BX)(C.View, {
                        className: "pop-btn",
                        children: [
                          (0, Ge.tZ)(C.Button, {
                            className: "btn-line-grey-1px bd-1rpx",
                            hoverClass: "btn_hover",
                            id: "AJHT",
                            onClick: v.bind(this, 0),
                            children:
                              (null === (u = t.insuranceStrategyInfo) ||
                              void 0 === u ||
                              null === (d = u.insurancePopContentInfo) ||
                              void 0 === d
                                ? void 0
                                : d.noBuyBtn) || "否",
                          }),
                          (0, Ge.tZ)(C.Button, {
                            className: m ? "btn-green" : "btn-blue",
                            hoverClass: "btn_hover",
                            id: "AJHU",
                            onClick: v.bind(this, 1),
                            children:
                              (null === (p = t.insuranceStrategyInfo) ||
                              void 0 === p ||
                              null === (f = p.insurancePopContentInfo) ||
                              void 0 === f
                                ? void 0
                                : f.buyBtn) || "是",
                          }),
                        ],
                      }),
                    ],
                  }),
                });
          }
          var pt,
            ft = n(57885),
            vt = function () {},
            mt = function () {},
            ht = function (e) {
              var t = e.onRef,
                n = (0, p.useState)(null),
                o = (0, y.Z)(n, 2),
                i = o[0],
                r = o[1],
                a = (0, p.useState)(!1),
                l = (0, y.Z)(a, 2),
                c = l[0],
                s = l[1];
              (0, p.useImperativeHandle)(t, function () {
                return {
                  doDetain: function (e) {
                    r(null == e ? void 0 : e.product),
                      s(!0),
                      (vt =
                        (null == e ? void 0 : e.onConfirm) || function () {}),
                      (mt =
                        (null == e ? void 0 : e.onCancel) || function () {});
                  },
                };
              });
              var u = function () {
                  var e;
                  null === (e = mt) || void 0 === e || e.call(void 0),
                    s(!1),
                    (vt = mt = function () {});
                },
                d = function () {
                  var e;
                  null === (e = vt) || void 0 === e || e.call(void 0),
                    s(!1),
                    (vt = mt = function () {});
                };
              return c && i
                ? null != i && i.placeOrderRetainJsonV1
                  ? (0, Ge.tZ)(ft.Z, {
                      onClose: u,
                      onCancel: u,
                      onConfirm: d,
                      placeOrderRetainJsonV1:
                        null == i ? void 0 : i.placeOrderRetainJsonV1,
                    })
                  : (0, Ge.tZ)(dt, {
                      detainInsurance: i,
                      onCancel: u,
                      onSure: d,
                    })
                : null;
            },
            gt = n(96196),
            Pt = function (e) {
              var t,
                n,
                o = e.toast,
                a = e.onCancel,
                l = e.visible;
              if (!o) return null;
              var c = null == o ? void 0 : o._jsonInfo,
                s =
                  null === (t = R.getState().orderModel) ||
                  void 0 === t ||
                  null === (n = t.orderInfo) ||
                  void 0 === n
                    ? void 0
                    : n.payFlag,
                u = (function () {
                  var e = (0, r.Z)(
                    (0, i.Z)().mark(function e(t) {
                      var n, o, r, l;
                      return (0, i.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t.productId),
                                  (o = t.xOrderType),
                                  (e.prev = 1),
                                  (r = R.getPage().oid),
                                  (e.next = 5),
                                  (0, N.Auc)({
                                    orderNumber: r,
                                    convertType: o,
                                    productId: Number(n),
                                  })
                                );
                              case 5:
                                if (!(l = e.sent) || 1 !== l.resultCode) {
                                  e.next = 13;
                                  break;
                                }
                                return (e.next = 9), Fe();
                              case 9:
                                a(), Ve(), (e.next = 15);
                                break;
                              case 13:
                                m().showToast({
                                  title:
                                    l.resultMessage ||
                                    "网络开小差，请稍后再试～",
                                  icon: "none",
                                  duration: 2e3,
                                }),
                                  a();
                              case 15:
                                e.next = 22;
                                break;
                              case 17:
                                (e.prev = 17),
                                  (e.t0 = e.catch(1)),
                                  m().showToast({
                                    title: "网络开小差，请稍后再试～",
                                    icon: "none",
                                    duration: 2e3,
                                  }),
                                  a(),
                                  console.log(e.t0);
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 17]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })();
              return (0, Ge.tZ)(gt.Z, {
                visible: l,
                data: c,
                orderNumber: R.getPage().oid,
                isWaitPay: !!s,
                onCancel: a,
                onConfirm: function () {
                  var e = c.productList,
                    t =
                      null == e
                        ? void 0
                        : e.find(function (e) {
                            return e.productId;
                          }),
                    n = t.productId,
                    o = t.xOrderType;
                  u({ productId: n, xOrderType: o }, a);
                },
                ubtTrace: R.ubtTrace(),
              });
            },
            Zt = n(22373),
            Ct = function (e) {
              var t = e.toast,
                n = e.handleCancel,
                o = e.handleConfirm,
                i = e.handleClose,
                r = e.visible;
              if (!t) return null;
              var a = function () {
                var e,
                  r,
                  a,
                  l,
                  c,
                  s,
                  u,
                  d,
                  p,
                  f =
                    (null == t || null === (e = t._jsonInfo) || void 0 === e
                      ? void 0
                      : e.title) || void 0,
                  v =
                    (null == t || null === (r = t._jsonInfo) || void 0 === r
                      ? void 0
                      : r.img) || "",
                  m =
                    (null == t || null === (a = t._jsonInfo) || void 0 === a
                      ? void 0
                      : a.subTitle) || "",
                  h = [],
                  g = function () {},
                  P = [
                    {
                      name:
                        null === (l = t._jsonInfo) || void 0 === l
                          ? void 0
                          : l.leftButtonText,
                      type: 1,
                    },
                    {
                      name:
                        null === (c = t._jsonInfo) || void 0 === c
                          ? void 0
                          : c.rightButtonText,
                      type: 2,
                    },
                  ];
                return (
                  t.toastCode === le.Iv.orderCancel &&
                    ((h = P),
                    (g = function (e) {
                      1 === (null == e ? void 0 : e.type) ? n() : o();
                    }),
                    (m = function () {
                      var e, n, o;
                      return (0, Ge.BX)(C.View, {
                        className: "trn-shelves-cancel-detain",
                        children: [
                          (0, Ge.tZ)(Z.ZtRichText, {
                            space: "nbsp",
                            nodes: b.Z.convertAppTextToHtmlStr(
                              null == t ||
                                null === (e = t._jsonInfo) ||
                                void 0 === e
                                ? void 0
                                : e.subTitle
                            ),
                          }),
                          !(
                            null == t ||
                            null === (n = t._jsonInfo) ||
                            void 0 === n ||
                            !n.describe
                          ) &&
                            (0, Ge.tZ)(C.View, {
                              className: "descibe",
                              children:
                                null == t ||
                                null === (o = t._jsonInfo) ||
                                void 0 === o
                                  ? void 0
                                  : o.describe,
                            }),
                        ],
                      });
                    })),
                  t.toastCode === le.Iv.returnToast &&
                    ((h = P),
                    (g = function (e) {
                      1 === (null == e ? void 0 : e.type) ? n() : o();
                    })),
                  (t.toastCode === le.Iv.routeConflict ||
                    t.toastCode ===
                      le.Iv.studentHoldSeatFailTransferAuditToast) &&
                    ((m =
                      null == t || null === (s = t._jsonInfo) || void 0 === s
                        ? void 0
                        : s.content.join("\n")),
                    (h = [
                      {
                        name:
                          null === (u = t._jsonInfo) || void 0 === u
                            ? void 0
                            : u.buttonName,
                      },
                    ]),
                    (g = function () {
                      i();
                    })),
                  t.toastCode === le.Iv.eleDeliveryRemind &&
                    ((m =
                      null == t || null === (d = t._jsonInfo) || void 0 === d
                        ? void 0
                        : d.content.join("\n")),
                    (h = [
                      {
                        name:
                          null === (p = t._jsonInfo) || void 0 === p
                            ? void 0
                            : p.buttonName,
                      },
                    ]),
                    (g = function () {
                      i();
                    })),
                  t.toastCode === le.Iv.noticeToast &&
                    ((m =
                      null != t && t.content
                        ? null == t
                          ? void 0
                          : t.content[0]
                        : null == t
                        ? void 0
                        : t.title),
                    (h = [{ name: "我知道了" }]),
                    (g = function () {
                      i();
                    })),
                  {
                    title: f,
                    icon: v,
                    content: m,
                    buttons: h,
                    onCancel: function () {},
                    clickOption: g,
                  }
                );
              };
              return (0, Ge.tZ)(Zt.Z, {
                visible: r,
                title: a().title,
                icon: a().icon,
                content: a().content,
                buttons: a().buttons,
                clickOption: a().clickOption,
                onCancel: i,
              });
            },
            It = function () {},
            wt = function () {},
            Tt = function (e) {
              var t = e.onRef,
                n = (0, p.useState)(null),
                o = (0, y.Z)(n, 2),
                i = o[0],
                r = o[1],
                a = (0, p.useState)(!1),
                l = (0, y.Z)(a, 2),
                c = l[0],
                s = l[1],
                u = (0, p.useState)(!1),
                d = (0, y.Z)(u, 2),
                f = d[0],
                v = d[1];
              (0, p.useImperativeHandle)(t, function () {
                return {
                  showToast: function (e) {
                    r(null == e ? void 0 : e.toast),
                      v(!0),
                      (It =
                        (null == e ? void 0 : e.onConfirm) || function () {}),
                      (wt =
                        (null == e ? void 0 : e.onCancel) || function () {});
                  },
                  closeToast: function () {
                    s(!1), v(!1);
                  },
                };
              }),
                (0, p.useLayoutEffect)(
                  function () {
                    i &&
                      f &&
                      m().nextTick(function () {
                        console.log("shelves set show"), s(!0), v(!1);
                      });
                  },
                  [f, i]
                );
              var h = function () {
                i.toastCode !== le.Iv.noticeToast &&
                  R.ubtTrace("c_trn_z_10650078933", {
                    bizKey: "z_mini_shelfPage_pop_click",
                    orderId: R.getPage().oid,
                    name: i.toastName,
                    click_type: 3,
                  }),
                  s(!1);
              };
              switch (null == i ? void 0 : i.toastCode) {
                case le.Iv.orderCancel:
                case le.Iv.routeConflict:
                case le.Iv.returnToast:
                case le.Iv.eleDeliveryRemind:
                case le.Iv.noticeToast:
                case le.Iv.studentHoldSeatFailTransferAuditToast:
                  return (0, Ge.tZ)(Ct, {
                    visible: c,
                    toast: i,
                    handleCancel: function () {
                      var e;
                      null === (e = wt) || void 0 === e || e.call(void 0),
                        s(!1),
                        (It = wt = function () {});
                    },
                    handleConfirm: function () {
                      var e;
                      null === (e = It) || void 0 === e || e.call(void 0),
                        s(!1),
                        (It = wt = function () {});
                    },
                    handleClose: h,
                  });
                case le.Iv.riskControl:
                  return (0, Ge.tZ)(Pt, { visible: c, toast: i, onCancel: h });
                default:
                  return null;
              }
            },
            yt = {
              circleImg: h.default.isTieyou
                ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-07/img_yd_ty.png"
                : "https://images3.c-ctrip.com/ztrip/train_xie/2022-07/img_yd.png",
              hookImg:
                "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/icon_dg_3.png",
            },
            St = function (e) {
              var t = e.commonSaleInfo,
                n = e.onSelectSale,
                o = e.totalNum,
                i = e._page;
              if (b.Z.isEmptyObject(t)) return null;
              var r = t,
                a = r.titleIcon,
                l = void 0 === a ? "" : a,
                c = r.title,
                s = void 0 === c ? "" : c,
                u = r.productUrl,
                d = void 0 === u ? "" : u,
                p = r.contents,
                f = void 0 === p ? [] : p,
                v = r.productDesc,
                m = void 0 === v ? [] : v,
                g = r.originSaleIcon,
                P = void 0 === g ? "" : g,
                Z = r.topInfo,
                I = r.priceContent,
                w = r.buttonDesc,
                T = void 0 === w ? "" : w,
                y = r._isChecked,
                S = "/functionalPages/twebview/index?url=".concat(
                  encodeURIComponent(d)
                ),
                N = function () {
                  null == i ||
                    i.ubtTrace("TZWBuyShelf_XProduct_click", {
                      PageId: null == i ? void 0 : i.pageId,
                      orderid: null == i ? void 0 : i.oid,
                      PositionType: "B",
                      Seq: 1,
                      ProductName: t.title,
                      clickType: 3,
                      Num: o,
                    });
                },
                x = {
                  data: {
                    PageId: null == i ? void 0 : i.pageId,
                    orderid: null == i ? void 0 : i.oid,
                    PositionType: "B",
                    Seq: 1,
                    ProductName: null == t ? void 0 : t.title,
                    Num: o,
                  },
                  ubtKeyName: "TZWBuyShelf_XProduct_exposure",
                };
              return (0, Ge.BX)(C.View, {
                className: "train-order-shop-list-common-sale-info autoExpose",
                ref: null == i ? void 0 : i.refreshObserve,
                "data-expose": x,
                children: [
                  (0, Ge.tZ)(C.Image, { className: "back-image", src: Z.icon }),
                  (0, Ge.tZ)(C.View, {
                    className: "head ".concat(h.default.isTieyou ? "ty" : "zx"),
                    children: (0, Ge.tZ)(C.Text, {
                      className: "sub-title",
                      children: Z.titleStr,
                    }),
                  }),
                  (0, Ge.tZ)(C.View, {
                    className: "container ".concat(
                      h.default.isTieyou ? "ty" : "zx"
                    ),
                    children: (0, Ge.BX)(C.View, {
                      className: "content",
                      children: [
                        (0, Ge.BX)(C.View, {
                          className: "product",
                          children: [
                            (0, Ge.BX)(C.View, {
                              className: "left",
                              children: [
                                (0, Ge.BX)(C.View, {
                                  className: "title",
                                  children: [
                                    (0, Ge.tZ)(C.Image, {
                                      className: "title-icon",
                                      src: y ? l : P,
                                    }),
                                    (0, Ge.tZ)(C.Text, { children: s }),
                                    d &&
                                      (0, Ge.tZ)(C.Navigator, {
                                        className: "navigator-class",
                                        url: S,
                                        children: (0, Ge.tZ)(C.Text, {
                                          className: "ifont-detail iconfont",
                                          id: "AJHK",
                                          onClick: N,
                                        }),
                                      }),
                                  ],
                                }),
                                f.map(function (e, t) {
                                  return (0,
                                  Ge.BX)(C.View, { className: "contents-item ".concat(y ? "selected-green" : ""), children: [(0, Ge.tZ)(C.View, { className: "contents-item-img-container", children: (0, Ge.tZ)(C.Image, { className: "contents-item-img", src: y ? yt.hookImg : yt.circleImg }) }), (0, Ge.tZ)(C.Text, { children: e })] }, "".concat(t, "_contents"));
                                }),
                                (0, Ge.tZ)(C.View, {}),
                              ],
                            }),
                            (0, Ge.BX)(C.View, {
                              className: "right",
                              children: [
                                (0, Ge.tZ)(C.View, {
                                  className: "price-content",
                                  children: I,
                                }),
                                (0, Ge.tZ)(C.View, {
                                  className: "select-button "
                                    .concat(y ? "selected" : "select", " ")
                                    .concat(h.default.isTieyou ? "ty" : "zx"),
                                  id: "AJHL",
                                  onClick: function () {
                                    null == i ||
                                      i.ubtTrace("TZWBuyShelf_XProduct_click", {
                                        PageId: i.pageId,
                                        orderid: i.oid,
                                        PositionType: "B",
                                        Seq: 1,
                                        ProductName: t.title,
                                        clickType: t._isChecked ? 2 : 1,
                                        Num: o,
                                      }),
                                      n(t);
                                  },
                                }),
                              ],
                            }),
                            !y &&
                              T &&
                              (0, Ge.tZ)(C.View, {
                                className: "button-desc trigon top-right-85",
                                children: T,
                              }),
                          ],
                        }),
                        (null == m ? void 0 : m.length) > 0 &&
                          (0, Ge.tZ)(C.View, { className: "split-line" }),
                        (null == m ? void 0 : m.length) > 0 &&
                          m.map(function (e, t) {
                            return b.Z.convertText(e).map(function (e, n) {
                              return (0, Ge.BX)(
                                C.View,
                                {
                                  className: "product-desc",
                                  children: [
                                    "text" === e.type &&
                                      (0, Ge.tZ)(C.Text, {
                                        dangerouslySetInnerHTML: {
                                          __html: e.content,
                                        },
                                      }),
                                    "navigator" === e.type &&
                                      e.content.map(function (e) {
                                        return (0,
                                        Ge.BX)(C.Block, { children: ["txt" === e.type && (0, Ge.tZ)(C.Text, { dangerouslySetInnerHTML: { __html: e.val } }), "url" === e.type && (0, Ge.tZ)(C.Navigator, { className: "navigator-class", url: e.url, children: (0, Ge.tZ)(C.Text, { dangerouslySetInnerHTML: { __html: e.val }, id: "AJHM", onClick: N }) })] }, e.val);
                                      }),
                                  ],
                                },
                                "".concat(e.type, "-").concat(t, "-").concat(n)
                              );
                            });
                          }),
                      ],
                    }),
                  }),
                ],
              });
            },
            bt = function (e) {
              var t = e.lowPriceSaleInfo,
                n = e.onSelectSale,
                o = e.totalNum,
                i = e._page;
              if (!t) return null;
              var r = t.productRecommendInfo,
                a = t.productDetailList,
                l = void 0 === a ? [] : a,
                c = t.bottomInfo,
                s = r.title,
                u = r.subTitle,
                d = r.backImageList,
                p = (null == c ? void 0 : c.productDetailList) || [];
              if ((null == l ? void 0 : l.length) > 0) {
                var f = ["X", "X", "X"];
                null == l ||
                  l.forEach(function (e) {
                    var t = e.detailList ? 3 - e.detailList.length : 3;
                    if (t > 0) {
                      var n,
                        o = f.slice(0, t);
                      (e.detailList = e.detailList || []),
                        (e.detailList =
                          null === (n = e.detailList) || void 0 === n
                            ? void 0
                            : n.concat(o));
                    }
                  });
              }
              var v = function (e) {
                  null == i ||
                    i.ubtTrace("TZWBuyShelf_XProduct_click", {
                      PageId: null == i ? void 0 : i.pageId,
                      orderid: null == i ? void 0 : i.oid,
                      PositionType: "B",
                      Seq: 1,
                      ProductName: s,
                      clickType: e._isChecked ? 2 : 1,
                      Num: o,
                    }),
                    n(e);
                },
                m = function () {
                  null == i ||
                    i.ubtTrace("TZWBuyShelf_XProduct_click", {
                      PageId: null == i ? void 0 : i.pageId,
                      orderid: i.oid,
                      PositionType: "B",
                      Seq: 1,
                      ProductName: s,
                      clickType: 3,
                      Num: o,
                    });
                },
                g = {
                  data: {
                    orderid: null == i ? void 0 : i.oid,
                    PositionType: "B",
                    Seq: 1,
                    ProductName: s,
                    Num: o,
                    PageId: null == i ? void 0 : i.pageId,
                  },
                  ubtKeyName: "TZWBuyShelf_XProduct_exposure",
                };
              return (0, Ge.BX)(C.View, {
                className:
                  "train-order-shop-list-low-price-sale-info autoExpose",
                ref: null == i ? void 0 : i.refreshObserve,
                "data-expose": g,
                children: [
                  (0, Ge.tZ)(C.Image, { className: "back-image", src: d[0] }),
                  (0, Ge.tZ)(C.View, {
                    className: "head ".concat(h.default.isTieyou ? "ty" : "zx"),
                    children: (0, Ge.tZ)(C.Text, {
                      className: "sub-title",
                      children: u,
                    }),
                  }),
                  (0, Ge.tZ)(C.View, {
                    className: "container ".concat(
                      h.default.isTieyou ? "ty" : "zx"
                    ),
                    children: (0, Ge.BX)(C.View, {
                      className: "content",
                      children: [
                        (0, Ge.BX)(C.View, {
                          className: "title",
                          children: [
                            (0, Ge.tZ)(Z.ZtRichText, {
                              space: "nbsp",
                              nodes: b.Z.convertAppTextToHtmlStr(s),
                            }),
                            (0, Ge.tZ)(C.Text, {}),
                          ],
                        }),
                        (0, Ge.tZ)(C.View, {
                          className: "product-detail-list",
                          children:
                            (null == l ? void 0 : l.length) > 0 &&
                            (null == l
                              ? void 0
                              : l.map(function (e, t) {
                                  var n,
                                    o = e._isChecked;
                                  return (0, Ge.BX)(
                                    C.View,
                                    {
                                      className: "product-item "
                                        .concat(
                                          0 !== t ? "margin-left" : "",
                                          " "
                                        )
                                        .concat(o ? "selected-border" : "", " ")
                                        .concat(
                                          h.default.isTieyou ? "ty" : "zx"
                                        ),
                                      children: [
                                        (0, Ge.BX)(C.View, {
                                          className: "top",
                                          children: [
                                            (0, Ge.tZ)(C.Image, {
                                              className: "icon",
                                              src: e.iconList[0],
                                            }),
                                            (0, Ge.tZ)(C.Text, {
                                              className: "product-item-title",
                                              children: e.title,
                                            }),
                                            (0, Ge.BX)(C.View, {
                                              className: "price-content",
                                              children: [
                                                (0, Ge.tZ)(C.Text, {
                                                  children: e.button,
                                                }),
                                                e.infoUrl &&
                                                  (0, Ge.tZ)(C.Navigator, {
                                                    url: "/functionalPages/twebview/index?url=".concat(
                                                      encodeURIComponent(
                                                        e.infoUrl
                                                      )
                                                    ),
                                                    children: (0, Ge.tZ)(
                                                      C.Text,
                                                      {
                                                        className:
                                                          "ifont-detail iconfont",
                                                        id: "AJHN",
                                                        onClick: function () {
                                                          m();
                                                        },
                                                      }
                                                    ),
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, Ge.tZ)(C.View, {
                                          className: "split-dash-line",
                                        }),
                                        (0, Ge.BX)(C.View, {
                                          className: "bottom",
                                          id: "AJHO",
                                          onClick: function () {
                                            return v(e);
                                          },
                                          children: [
                                            (0, Ge.tZ)(C.View, {
                                              className:
                                                "bottom-detail-list flex-center flex-column",
                                              children:
                                                null === (n = e.detailList) ||
                                                void 0 === n
                                                  ? void 0
                                                  : n.map(function (e, t) {
                                                      return (0,
                                                      Ge.tZ)(C.View, { className: "detail-item", children: "X" === e ? (0, Ge.tZ)(C.Image, { className: "icon-xx", src: "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/icon_xx.png" }) : (0, Ge.tZ)(Z.ZtRichText, { space: "nbsp", nodes: b.Z.convertAppTextToHtmlStr(e) }) }, "".concat(t, "_detail"));
                                                    }),
                                            }),
                                            (0, Ge.tZ)(C.View, {
                                              className: "button-content",
                                              children: (0, Ge.tZ)(C.View, {
                                                className: "button "
                                                  .concat(
                                                    o ? "selected" : "select",
                                                    " "
                                                  )
                                                  .concat(
                                                    h.default.isTieyou
                                                      ? "ty"
                                                      : "zx"
                                                  ),
                                              }),
                                            }),
                                          ],
                                        }),
                                        1 === t &&
                                          (0, Ge.tZ)(C.View, {
                                            className: "tag ".concat(
                                              o ? "selected-tag" : "select-tag",
                                              " trigon top"
                                            ),
                                            children: e.tag,
                                          }),
                                      ],
                                    },
                                    "".concat(t, "_product")
                                  );
                                })),
                        }),
                        (0, Ge.tZ)(C.View, { className: "split-line" }),
                        (null == p ? void 0 : p.length) > 0 &&
                          (null == p
                            ? void 0
                            : p.map(function (e, t) {
                                return b.Z.convertText(e).map(function (e, n) {
                                  return (0, Ge.BX)(
                                    C.View,
                                    {
                                      className: "product-desc",
                                      children: [
                                        "text" === e.type &&
                                          (0, Ge.tZ)(C.Text, {
                                            dangerouslySetInnerHTML: {
                                              __html: e.content,
                                            },
                                          }),
                                        "navigator" === e.type &&
                                          e.content.map(function (e) {
                                            return (0,
                                            Ge.BX)(C.Block, { children: ["txt" === e.type && (0, Ge.tZ)(C.Text, { dangerouslySetInnerHTML: { __html: e.val } }), "url" === e.type && (0, Ge.tZ)(C.Navigator, { className: "navigator-class", url: e.url, children: (0, Ge.tZ)(C.Text, { dangerouslySetInnerHTML: { __html: e.val }, id: "AJHP", onClick: m }) })] }, e.val);
                                          }),
                                      ],
                                    },
                                    ""
                                      .concat(e.type, "-")
                                      .concat(t, "-")
                                      .concat(n, "-low")
                                  );
                                });
                              })),
                      ],
                    }),
                  }),
                ],
              });
            },
            Nt = function (e) {
              var t = e.extProduct,
                n = e.onConfirm,
                o = e.totalNum,
                i = e._page,
                r = (0, p.useState)(0),
                a = (0, y.Z)(r, 2),
                l = a[0],
                c = a[1],
                s = 0,
                u = null == t ? void 0 : t.extProductContent,
                d = null == t ? void 0 : t._isChecked;
              if (!u) return null;
              var f = u.vipSaleInfo,
                v = f.priceTitleEntity,
                h = f.sendVipEntity,
                g = f.vipRightEntity,
                P = void 0 === g ? [] : g;
              if (P.vipRightList && P.vipRightList.length > 0) {
                var Z = m().createSelectorQuery();
                Z.select("#vip-right-lists").boundingClientRect(),
                  Z.exec(function (e) {
                    var t;
                    e &&
                      (s =
                        null === (t = e[0]) || void 0 === t ? void 0 : t.width);
                  });
              }
              var I = b.Z.debounce(function (e) {
                  try {
                    var t = e.detail,
                      n = t.scrollLeft,
                      o = t.scrollWidth;
                    c(100 * Number((n / (o - s)).toFixed(2)));
                  } catch (e) {
                    console.log(e);
                  }
                }, 30),
                w = {
                  data: {
                    orderid: null == i ? void 0 : i.oid,
                    PositionType: "B",
                    Seq: 1,
                    ProductName: null == v ? void 0 : v.title,
                    Num: o,
                    PageId: null == i ? void 0 : i.pageId,
                  },
                  ubtKeyName: "TZWBuyShelf_XProduct_exposure",
                };
              return (0, Ge.BX)(C.View, {
                className: "train-order-shop-list-member-sale-info autoExpose",
                ref: null == i ? void 0 : i.refreshObserve,
                "data-expose": w,
                children: [
                  (0, Ge.BX)(C.View, {
                    className: "head",
                    children: [
                      (0, Ge.BX)(C.View, {
                        className: "left",
                        children: [
                          (0, Ge.tZ)(C.Image, {
                            className: "icon",
                            src: v.imageUrl,
                          }),
                          (0, Ge.tZ)(C.Text, { children: v.title }),
                        ],
                      }),
                      (0, Ge.BX)(C.View, {
                        className: "right",
                        children: [
                          (0, Ge.tZ)(C.Text, {
                            className: "title",
                            children: v.price,
                          }),
                          (0, Ge.BX)(C.View, {
                            className: "button ".concat(
                              d ? "selected" : "select"
                            ),
                            id: "AJHQ",
                            onClick: function () {
                              n(),
                                null == i ||
                                  i.ubtTrace("TZWBuyShelf_XProduct_click", {
                                    orderid: null == i ? void 0 : i.oid,
                                    PositionType: "B",
                                    Seq: 1,
                                    ProductName: null == v ? void 0 : v.title,
                                    clickType: d ? 2 : 1,
                                    Num: o,
                                    PageId: null == i ? void 0 : i.pageId,
                                  });
                            },
                            children: [
                              d ? "已选" : "选择",
                              !d &&
                                (0, Ge.tZ)(C.View, {
                                  className: "button-tag trigon top",
                                  children: v.tag,
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Ge.BX)(C.View, {
                    className: "content",
                    children: [
                      h &&
                        (0, Ge.BX)(C.View, {
                          className: "send-vip",
                          children: [
                            (0, Ge.BX)(C.View, {
                              className: "title",
                              children: [
                                (0, Ge.tZ)(C.View, { className: "icon" }),
                                (0, Ge.tZ)(C.Text, { children: h.title }),
                              ],
                            }),
                            h.vipRightList &&
                              (0, Ge.tZ)(C.View, {
                                className: "send-vip-list",
                                children: h.vipRightList.map(function (e, t) {
                                  return (0,
                                  Ge.BX)(C.View, { className: "send-vip-right-list-item ".concat(t !== h.vipRightList.length - 1 ? "item-padding-right" : ""), children: [(0, Ge.tZ)(C.Image, { className: "img-icon", src: e.imageUrl }), (0, Ge.tZ)(C.Text, { className: "title", children: e.title }), (0, Ge.tZ)(C.Text, { className: "title-desc", children: e.titleDesc })] }, "".concat(t, "_send_vip_right"));
                                }),
                              }),
                          ],
                        }),
                      h && (0, Ge.tZ)(C.View, { className: "split-dash-line" }),
                      (0, Ge.BX)(C.View, {
                        className: "vip-right",
                        children: [
                          (0, Ge.BX)(C.View, {
                            className: "top",
                            children: [
                              (0, Ge.BX)(C.View, {
                                className: "title",
                                children: [
                                  (0, Ge.tZ)(C.View, { className: "icon" }),
                                  (0, Ge.tZ)(C.Text, { children: P.title }),
                                ],
                              }),
                              (0, Ge.tZ)(C.View, {
                                className: "sub-title",
                                children: P.subTitle,
                              }),
                            ],
                          }),
                          h
                            ? (0, Ge.tZ)(C.ScrollView, {
                                scrollX: !0,
                                className: "vip-right-list",
                                id: "vip-right-lists",
                                onScroll: I,
                                bounces: !1,
                                enhanced: !0,
                                children: P.vipRightList.map(function (e, t) {
                                  return (0,
                                  Ge.tZ)(C.View, { className: "vip-right-list-item one-item", children: (0, Ge.BX)(C.View, { className: "item-content", children: [(0, Ge.tZ)(C.Image, { className: "img-icon", src: e.imageUrl }), (0, Ge.BX)(C.View, { className: "right", children: [(0, Ge.tZ)(C.Text, { className: "title", children: e.title }), (0, Ge.tZ)(C.Text, { className: "title-desc", children: e.titleDesc })] })] }) }, "".concat(t, "_vip"));
                                }),
                              })
                            : (0, Ge.tZ)(C.ScrollView, {
                                scrollX: !0,
                                className: "vip-right-list",
                                id: "vip-right-lists",
                                onScroll: I,
                                bounces: !1,
                                enhanced: !0,
                                children: P.vipRightList.map(function (e, t) {
                                  var n, o, i;
                                  if (t % 2 == 0)
                                    return (0, Ge.BX)(
                                      C.View,
                                      {
                                        className: "vip-right-list-two-content",
                                        children: [
                                          (0, Ge.tZ)(C.View, {
                                            className: "vip-right-list-item",
                                            children: (0, Ge.BX)(C.View, {
                                              className: "item-content",
                                              children: [
                                                (0, Ge.tZ)(C.Image, {
                                                  className: "img-icon",
                                                  src: e.imageUrl,
                                                }),
                                                (0, Ge.BX)(C.View, {
                                                  className: "right",
                                                  children: [
                                                    (0, Ge.tZ)(C.Text, {
                                                      className: "title",
                                                      children: e.title,
                                                    }),
                                                    (0, Ge.tZ)(C.Text, {
                                                      className: "title-desc",
                                                      children: e.titleDesc,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, Ge.tZ)(C.View, {
                                            className: "vip-right-list-item",
                                            children: (0, Ge.BX)(C.View, {
                                              className: "item-content",
                                              children: [
                                                (0, Ge.tZ)(C.Image, {
                                                  className: "img-icon",
                                                  src:
                                                    null ===
                                                      (n =
                                                        P.vipRightList[
                                                          t + 1
                                                        ]) || void 0 === n
                                                      ? void 0
                                                      : n.imageUrl,
                                                }),
                                                (0, Ge.BX)(C.View, {
                                                  className: "right",
                                                  children: [
                                                    (0, Ge.tZ)(C.Text, {
                                                      className: "title",
                                                      children:
                                                        null ===
                                                          (o =
                                                            P.vipRightList[
                                                              t + 1
                                                            ]) || void 0 === o
                                                          ? void 0
                                                          : o.title,
                                                    }),
                                                    (0, Ge.tZ)(C.Text, {
                                                      className: "title-desc",
                                                      children:
                                                        null ===
                                                          (i =
                                                            P.vipRightList[
                                                              t + 1
                                                            ]) || void 0 === i
                                                          ? void 0
                                                          : i.titleDesc,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      },
                                      "".concat(t, "_vip")
                                    );
                                }),
                              }),
                          (0, Ge.tZ)(C.View, {
                            className: "list-scroll-bar",
                            children: (0, Ge.tZ)(C.View, {
                              className: "cur",
                              style: {
                                transform: "translate3d(".concat(
                                  l * (7 / 9),
                                  "%, 0, 0)"
                                ),
                              },
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            },
            xt = (0, f.$j)(function (e) {
              var t,
                n,
                o,
                i = e.saleModel;
              return {
                commonSaleInfos:
                  (null === (t = i.areaBSaleInfo) || void 0 === t
                    ? void 0
                    : t.commonSaleInfos) || [],
                lowPriceSaleInfoList:
                  (null === (n = i.areaBSaleInfo) || void 0 === n
                    ? void 0
                    : n.lowPriceSaleInfoList) || [],
                extProduct:
                  null === (o = i.areaBSaleInfo) || void 0 === o
                    ? void 0
                    : o.extProduct,
                enableSaled: !(null == i || !i.enableSaled),
                saledProductsAllCounts:
                  null == i ? void 0 : i.saledProductsAllCounts,
              };
            })(function (e) {
              var t = e.commonSaleInfos,
                n = e.lowPriceSaleInfoList,
                o = e.extProduct,
                i = e.enableSaled,
                r = e.saledProductsAllCounts,
                a = R.getPage();
              return i
                ? (0, Ge.BX)(C.Block, {
                    children: [
                      t.map(function (e, t) {
                        return (0,
                        Ge.tZ)(St, { _page: a, totalNum: r, commonSaleInfo: e, onSelectSale: q }, t);
                      }),
                      n.map(function (e, t) {
                        return (0,
                        Ge.tZ)(bt, { _page: a, totalNum: r, lowPriceSaleInfo: e, onSelectSale: $ }, t);
                      }),
                      (0, Ge.tZ)(Nt, {
                        _page: a,
                        extProduct: o,
                        onConfirm: G,
                        totalNum: r,
                      }),
                    ],
                  })
                : null;
            }),
            _t =
              (0, P.h)(!1, { usePageWrapper: !0 })(
                (pt = (function (e) {
                  (0, s.Z)(n, e);
                  var t = (0, u.Z)(n);
                  function n(e) {
                    var o;
                    return (
                      (0, a.Z)(this, n),
                      (o = t.call(this, e)),
                      (0, d.Z)((0, c.Z)(o), "pageTitle", le.Ti),
                      (0, d.Z)(
                        (0, c.Z)(o),
                        "pageRootClassName",
                        "train-shelves-page"
                      ),
                      (o.pageId = h.default.isTieyou
                        ? "10650078937"
                        : "10650078933"),
                      (o.autoExpose = !0),
                      (o.store = R.create((0, c.Z)(o)).store),
                      o
                    );
                  }
                  return (
                    (0, l.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, i.Z)().mark(function e() {
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          this.setPageData(), (e.next = 3), Fe()
                                        );
                                      case 3:
                                        ke();
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          Ue();
                        },
                      },
                      {
                        key: "setPageData",
                        value: function () {
                          var e = this.$instance.router.params || {},
                            t = e.oid,
                            n = e.payAutoFlag;
                          (this.oid = t), (this.payAutoFlag = 1 == n);
                        },
                      },
                      {
                        key: "onPullDownRefresh",
                        value: function () {
                          setTimeout(function () {
                            m().stopPullDownRefresh();
                          }, 800),
                            !this.isFreezePullDown && Fe();
                        },
                      },
                      {
                        key: "freezePullDown",
                        value: function () {
                          this.isFreezePullDown = !0;
                        },
                      },
                      {
                        key: "unfreezePullDown",
                        value: function () {
                          this.isFreezePullDown = !1;
                        },
                      },
                      {
                        key: "onInterceptBackAsync",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, i.Z)().mark(function e() {
                              var t, n, o, r, a;
                              return (0, i.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((t = le.Iv.returnToast),
                                        (n =
                                          R.getState().octopusModel.toasts ||
                                          []),
                                        (o =
                                          null == n
                                            ? void 0
                                            : n.find(function (e) {
                                                return e.toastCode === t;
                                              })),
                                        (r = R.getPage().oid),
                                        !o || !Ce(r, t))
                                      ) {
                                        e.next = 11;
                                        break;
                                      }
                                      return (
                                        Ie(r, t),
                                        (e.next = 8),
                                        Ze({ toastCode: le.Iv.returnToast })
                                      );
                                    case 8:
                                      return (
                                        1 === (a = e.sent) && Ve(),
                                        e.abrupt("return", 0 === a)
                                      );
                                    case 11:
                                      return e.abrupt("return", !0);
                                    case 12:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onBack",
                        value: function () {
                          (0, v.getCurrentPages)().length >= 2
                            ? this.navigateBack()
                            : m().reLaunch({
                                url: "/pages/myctrip/list/list?orderType=train",
                              });
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function (e) {
                          if (
                            (e.target.id =
                              le.M4.SHARE_TO_STUDNET_VERIFICATION &&
                              !!this.shareToStudentVerificationOptions)
                          )
                            return this.shareToStudentVerificationOptions;
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return (0, Ge.BX)(f.zt, {
                            store: this.store,
                            children: [
                              (0, Ge.tZ)(Qe, {}),
                              (0, Ge.tZ)(xt, {}),
                              (0, Ge.tZ)(at, {}),
                              (0, Ge.tZ)(ut, {}),
                              (0, Ge.tZ)(st, {}),
                              (0, Ge.tZ)(ht, {
                                onRef: function (t) {
                                  e.$DetainPopView = t;
                                },
                              }),
                              (0, Ge.tZ)(Tt, {
                                onRef: function (t) {
                                  e.$CommonToast = t;
                                },
                              }),
                              (0, Ge.tZ)(g.Z, {
                                ref: function (t) {
                                  return (e.$PointPayLayer = t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(p.default.Component))
              ) || pt;
          (_t.enableShareAppMessage = !0),
            Page(
              (0, o.createPageConfig)(
                _t,
                "pages/trainDetail/shelves/shelves",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "优享服务",
                  navigationBarBackgroundColor: "#0066E6",
                  backgroundColorTop: "#F5F5F5",
                  backgroundColorBottom: "#F5F5F5",
                  enablePullDownRefresh: !0,
                  navigationStyle: "custom",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            93611, 3322, 36332, 95854, 61094, 26450, 34335, 32690, 64540, 67377,
            45542, 55317, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(9794);
          }
        ),
          e.O();
      },
    ]);
})();
