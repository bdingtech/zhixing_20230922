!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/1775d7c9f65b9a6f532fd61b25d0faaf.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [23615],
      {
        76304: function (e, t, i) {
          var a,
            n = i(32180),
            o = i(57042),
            r = i(24460),
            l = i(21867),
            s = i(86066),
            c = i(90983),
            d = i(298),
            h = i(52500),
            u = i(71515),
            f = i(92954),
            m = i.n(f),
            g = i(81957),
            p = i(48792),
            N = i.n(p),
            v = i(93761),
            w = i(79910),
            Z = i(2326),
            b = i(2809),
            T = i(79792),
            y = i(58676),
            k = i(20592),
            D = i(8271),
            V = i.n(D),
            P = i(4102),
            I = i(49120),
            _ = i(32132),
            C = i(13975),
            B = i(61695),
            x = i(34229),
            A = i(48813),
            R = function (e) {
              var t = e.orderStateInfoList,
                i = e.orderNumber;
              if (!t || 0 === (null == t ? void 0 : t.length))
                return (0, A.tZ)(A.HY, {});
              var a = function (e) {
                "rebook" != (null == e ? void 0 : e.type)
                  ? null == e || e.type
                  : (0, I.getCurrentPage)().navigateTo({
                      url: "/pages/taroCRN/flight/pages/rebookDetail/index",
                      data: {
                        orderNumber: i || "",
                        rebookOrderId:
                          (null == e ? void 0 : e.orderStatusId) || "",
                        isIntl: !0,
                      },
                    });
              };
              return (0, A.tZ)(u.View, {
                className: " _Ki",
                children: (0, A.tZ)(u.Swiper, {
                  className: " _Li _a _Oa _yc",
                  vertical: !0,
                  autoplay: !0,
                  circular: !0,
                  children:
                    null == t
                      ? void 0
                      : t.map(function (e, t) {
                          return (0, A.BX)(
                            u.SwiperItem,
                            {
                              className: " _i _Mb _Ei",
                              children: [
                                (0, A.BX)(u.View, {
                                  className: " _j",
                                  children: [
                                    (0, A.tZ)(u.View, {
                                      className: " _dd _Pa _U _Mi",
                                      children: e.orderStatus || "",
                                    }),
                                    (0, A.tZ)(u.View, {
                                      className: " _Kc _Na _Q",
                                      children: (0, A.tZ)(x.ZtRichText, {
                                        nodes: e.tripDesc || "",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, A.tZ)(u.View, {
                                  className: " _i _l",
                                  children: e.actionText
                                    ? (0, A.tZ)(u.Button, {
                                        className:
                                          " _Hi _pb _b _ig _S _Ii _Mb _Ji _o",
                                        onClick: function () {
                                          return a(e);
                                        },
                                        children: e.actionText,
                                      })
                                    : (0, A.tZ)(u.Text, {
                                        className:
                                          "iconfont2 ifont2-arr ".concat(
                                            " _E _Bd _Ni _Oi"
                                          ),
                                        onClick: function () {
                                          return a(e);
                                        },
                                      }),
                                }),
                              ],
                            },
                            t
                          );
                        }),
                }),
              });
            },
            L = function (e) {
              var t = e.totalPrice,
                i = e.orderNumber,
                a = e.onPay;
              return 0 == t
                ? (0, A.tZ)(A.HY, {})
                : (0, A.BX)(u.View, {
                    className: " _a _Oa _Mb _Ei _Fi _i _l",
                    children: [
                      (0, A.BX)(u.View, {
                        className: " _j",
                        children: [
                          (0, A.BX)(u.View, {
                            className: " _dd _Pa _U _Gi",
                            children: [
                              "支付金额",
                              (0, A.tZ)(u.Text, {
                                className: " _bf -M",
                                children: t,
                              }),
                            ],
                          }),
                          (0, A.tZ)(u.View, {
                            className: " _Kc _Na _Q",
                            children: "价格变动频繁，请尽快支付",
                          }),
                        ],
                      }),
                      (0, A.tZ)(u.View, {
                        className: " _i _l",
                        onClick: function () {
                          null == a || a(i);
                        },
                        children: (0, A.tZ)(u.Button, {
                          className: " _Hi _pb _b _ig _S _Ii _Mb _Ji _o",
                          children: "立即支付",
                        }),
                      }),
                    ],
                  });
            },
            X = i(90129),
            S = i(59086),
            F = function (e) {
              var t = e.detailDialog,
                i = (0, h.useState)(t),
                a = (0, X.Z)(i, 2),
                n = a[0],
                o = a[1],
                r = "intl-order-detail-popup";
              (0, h.useEffect)(
                function () {
                  if (t) {
                    var e = !0,
                      i = t.interval,
                      a = S.dF.getAttr(r);
                    a && i && (e = V()().diff(V()(a), "h") > i),
                      e &&
                        (o(t),
                        S.dF.setAttr(r, V()().format("YYYY-MM-DD HH:mm")));
                  }
                },
                [t]
              );
              return t
                ? (0, A.tZ)(x.ZtActivityPop, {
                    show: !!n,
                    className: "orderDetailPopUp",
                    isShowClose: !0,
                    onClose: function () {
                      return o(null);
                    },
                    onWrapClose: function () {
                      o(null);
                    },
                    children: (0, A.BX)(u.View, {
                      className: " _Pi _a _Qi _i _k _l",
                      children: [
                        (0, A.tZ)(u.Image, {
                          className: " _Pi _Ri _yc",
                          mode: "widthFix",
                          src: null == n ? void 0 : n.picture,
                        }),
                        !(null == n || !n.title) &&
                          (0, A.tZ)(u.View, {
                            className: " _Z _dd _Od _W _Si _o",
                            children: null == n ? void 0 : n.title,
                          }),
                        !(null == n || !n.desc) &&
                          (0, A.tZ)(u.View, {
                            className: " _Nd _Ti _S _ub _o",
                            children: null == n ? void 0 : n.desc,
                          }),
                        !(null == n || !n.buttonText) &&
                          (0, A.tZ)(u.View, {
                            className: " _Ui _Gc _w _i _l _n _dc _b _Yb _V _Vi",
                            onClick: function () {
                              !(function () {
                                var e = (n || {}).action;
                                console.debug(e), o(null);
                              })();
                            },
                            children: n.buttonText,
                          }),
                      ],
                    }),
                  })
                : (0, A.tZ)(A.HY, {});
            },
            M = (function () {
              function e(t, i) {
                (0, o.Z)(this, e),
                  (this.refundData = t),
                  (this.orderData = i),
                  (this.firstPage =
                    "/pages/taroCRN/flight/pagesRefund/choosePassenger/index"),
                  (this.selectReason = null),
                  (this.isFreePrice = !1),
                  (this.selectTickets = []);
              }
              return (
                (0, r.Z)(e, [
                  {
                    key: "initData",
                    value: function () {
                      this.handleGoWitchPage();
                    },
                  },
                  {
                    key: "handleGoWitchPage",
                    value: function () {
                      var e, t, i, a, n, o, r, l, s, c, d, h, u, f, m;
                      if (this.isOnlyOneSegOneValidPassenger(this.refundData)) {
                        var g, p, N, v, w, Z;
                        if (
                          ((this.selectTickets = (null ===
                            (e = this.refundData) ||
                          void 0 === e ||
                          null === (t = e.segmentList) ||
                          void 0 === t ||
                          null === (i = t[0]) ||
                          void 0 === i
                            ? void 0
                            : i.tickets[0]) && [
                            null === (a = this.refundData) ||
                            void 0 === a ||
                            null === (n = a.segmentList) ||
                            void 0 === n ||
                            null === (o = n[0]) ||
                            void 0 === o
                              ? void 0
                              : o.tickets[0],
                          ]),
                          (this.refundData.segmentList[0].selectTickets =
                            (null === (r = this.refundData) ||
                            void 0 === r ||
                            null === (l = r.segmentList) ||
                            void 0 === l ||
                            null === (s = l[0]) ||
                            void 0 === s
                              ? void 0
                              : s.tickets[0]) &&
                            (null === (c = this.refundData) ||
                            void 0 === c ||
                            null === (d = c.segmentList) ||
                            void 0 === d ||
                            null === (h = d[0]) ||
                            void 0 === h
                              ? void 0
                              : h.tickets)),
                          this.isDefaultCheckReason(
                            null === (u = this.refundData) ||
                              void 0 === u ||
                              null === (f = u.segmentList) ||
                              void 0 === f ||
                              null === (m = f[0]) ||
                              void 0 === m
                              ? void 0
                              : m.tickets
                          ))
                        )
                          return (
                            (this.firstPage =
                              "/pages/taroCRN/flight/pagesRefund/refundApply/index"),
                            (this.selectReason =
                              null === (g = this.refundData) ||
                              void 0 === g ||
                              null === (p = g.segmentList) ||
                              void 0 === p ||
                              null === (N = p[0]) ||
                              void 0 === N ||
                              null === (v = N.tickets) ||
                              void 0 === v ||
                              null === (w = v[0]) ||
                              void 0 === w ||
                              null === (Z = w.refundReasonList) ||
                              void 0 === Z
                                ? void 0
                                : Z[0]),
                            void (this.isFreePrice = !0)
                          );
                        this.firstPage =
                          "/pages/taroCRN/flight/pagesRefund/chooseReason/index";
                      } else
                        this.firstPage =
                          "/pages/taroCRN/flight/pagesRefund/choosePassenger/index";
                    },
                  },
                  {
                    key: "getFirstGoWitchPage",
                    value: function () {
                      return this.firstPage;
                    },
                  },
                  {
                    key: "isOnlyOneSegOneValidPassenger",
                    value: function (e) {
                      var t = e.segmentList,
                        i = t.length > 0 ? t[0].tickets : [];
                      return (
                        t &&
                        1 == t.length &&
                        i &&
                        1 == i.length &&
                        !0 === i[0].refundable
                      );
                    },
                  },
                  {
                    key: "isDefaultCheckReason",
                    value: function (e) {
                      var t, i, a, n, o;
                      return (
                        1 ==
                          (null == e ||
                          null === (t = e[0]) ||
                          void 0 === t ||
                          null === (i = t.refundReasonList) ||
                          void 0 === i
                            ? void 0
                            : i.length) &&
                        (null == e ||
                        null === (a = e[0]) ||
                        void 0 === a ||
                        null === (n = a.refundReasonList) ||
                        void 0 === n ||
                        null === (o = n[0]) ||
                        void 0 === o
                          ? void 0
                          : o.defaultCheck)
                      );
                    },
                  },
                ]),
                e
              );
            })(),
            O = T.default.isTieyou,
            Y = "YYYY-MM-DD",
            H = {
              pageId: O ? "10650024371" : "10650024370",
              data: {
                isTieyou: O,
                isIPhoneX: b.ZP.isIPhoneX,
                canIUseRichText: m().canIUse("rich-text"),
                order: {},
                flightInfo: [],
                detailMask: !1,
                showPriceDetail: !1,
                showTicketInfo: !1,
                maskType: "",
                transition: !1,
                showCashbackRule: !1,
                showReasonPanel: !1,
                cancelFeedback: "",
                refundIndex: 0,
                avatarUrl: "",
                orderDetailPopup: null,
                nickName: "",
                paymentInfo: null,
                showFlightNote: !1,
              },
              onLoad: function (e) {
                console.log(e);
                var t = e.orderNumber;
                (this.oid = t), m().hideShareMenu && m().hideShareMenu();
              },
              onShow: function () {
                this.getIntlOrderDetail();
              },
              onPullDownRefresh: function () {
                this.getIntlOrderDetail();
              },
              getIntlOrderDetail: function () {
                var e = this,
                  t = { data: { orderNumber: this.oid } };
                (0, I.showLoading)("获取订单详情"),
                  (0, _.cr)(t)
                    .then(function (t) {
                      var i = t.resultCode,
                        a = t.data;
                      if (1 === i) {
                        var n = a.penaltyList,
                          o = a.flightSegmentInfo,
                          r = a.orderCancelReasons,
                          l = a.refundAndChangeDetails,
                          s = a.detailDialog;
                        e.setData({
                          order: (0, d.Z)({}, a),
                          flightInfo: e.handleFlightInfo(o),
                          cancelReasons: e.handleCancelReasons(r),
                          paymentInfo: e.handlePaymentInfo(a),
                          baggageAndPolicies: n,
                          refundAndChangeDetails: l,
                          orderDetailPopup: s,
                        }),
                          e.handleLastPayTimeCountDown(a);
                      }
                    })
                    .catch()
                    .finally(function () {
                      (0, I.hideLoading)(), m().stopPullDownRefresh();
                    });
              },
              handlePaymentInfo: function (e) {
                if (e) {
                  var t = e.lastPayTime,
                    i = e.orderNumber,
                    a = e.orderPrice,
                    n = e.payFlag,
                    o = e.priceInfos,
                    r = e.orderPaymentInfo;
                  return n
                    ? {
                        type: "book",
                        orderNumber: i,
                        totalPrice: a,
                        lastPayTime: t,
                        priceInfos: o,
                      }
                    : r
                    ? (0, d.Z)(
                        (0, d.Z)({}, r),
                        {},
                        {
                          priceInfos:
                            [(0, d.Z)({}, r.OrderDetailPriceInfo)] || 0,
                        }
                      )
                    : void 0;
                }
              },
              handleFlightInfo: function (e) {
                var t,
                  i = [],
                  a = (0, c.Z)(e);
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var n = t.value,
                      o = n.flightList,
                      r = n.travelTime,
                      l = n.changeCityList,
                      s = void 0 === l ? [] : l,
                      d = V()(o[0].dateInfo.departDate),
                      h = o.length,
                      u = {};
                    (u.departDateCityInfo = ""
                      .concat(d.format("M月D日"), " ")
                      .concat(P.Z.getWeekDayDesc(d), " ")
                      .concat(o[0].departAirportInfo.cityName, "-")
                      .concat(o[h - 1].arriveAirportInfo.cityName)),
                      (u.costTime = B.Z.changeTravelTime(r.duration)),
                      (u.flightList = []);
                    var f,
                      m = (0, c.Z)(o);
                    try {
                      for (m.s(); !(f = m.n()).done; ) {
                        var g = f.value,
                          p = g.departAirportInfo,
                          N = g.arriveAirportInfo,
                          v = g.dateInfo,
                          w = g.basicInfo,
                          b = g.cabinName,
                          T = g.intlStopCityItemList,
                          y = V()(v.departDate),
                          k = V()(v.arriveDate),
                          D = {};
                        (D.departDate = y.format("MM-DD")),
                          (D.departTime = y.format("HH:mm")),
                          (D.arriveTime = k.format("HH:mm")),
                          (D.departAirportTerminal = ""
                            .concat(p.airportShortName)
                            .concat(p.buildingShortName)),
                          (D.arriveAirportTerminal = ""
                            .concat(N.airportShortName)
                            .concat(N.buildingShortName)),
                          (D.airlineShortName = w.airlineShortName),
                          (D.flightNo = w.flightNo),
                          (D.carrierInfo = w.isShared
                            ? ""
                                .concat(w.carrierAirlineShortName)
                                .concat(w.carrierFlightNo)
                            : ""),
                          (D.stopCities = Array.isArray(T)
                            ? T.map(function (e) {
                                return {
                                  cityName: e.cityName,
                                  stopTimeStr: B.Z.changeTravelTime(e.stopTime),
                                };
                              })
                            : []),
                          s &&
                            s.length > 0 &&
                            g.flightIndex > 1 &&
                            ((D.transferCity = s[g.flightIndex - 2].cityName),
                            (D.transferTime = B.Z.changeTravelTime(
                              v.transferTime
                            ))),
                          (D.cabinName = b),
                          (D.departDayDiff = Z.Z.getDayDiff(
                            d.format(Y),
                            y.format(Y)
                          )),
                          (D.arriveDayDiff = Z.Z.getDayDiff(
                            d.format(Y),
                            k.format(Y)
                          )),
                          u.flightList.push(D);
                      }
                    } catch (e) {
                      m.e(e);
                    } finally {
                      m.f();
                    }
                    i.push(u);
                  }
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
                return i;
              },
              handleCancelReasons: function (e) {
                var t = this.data.cancelReasons,
                  i = (void 0 === t ? [] : t).filter(function (e) {
                    return e.selected;
                  });
                return e.map(function (e) {
                  return { title: e, selected: e === (i[0] ? i[0].title : "") };
                });
              },
              handleLastPayTimeCountDown: function () {
                var e = this.data.paymentInfo;
                if (e) {
                  var t = e.lastPayTime,
                    i = Z.Z.countDown(t),
                    a = i.min,
                    n = i.sec;
                  if (i.end)
                    return (
                      clearTimeout(this.payTimer),
                      void this.getIntlOrderDetail()
                    );
                  this.setData({
                    lastPayTime: "".concat(a, "分").concat(n, "秒"),
                  }),
                    (this.payTimer = setTimeout(
                      this.handleLastPayTimeCountDown,
                      1e3
                    ));
                }
              },
              handleBaggageAndPoliciesClick: function () {
                var e = this.data,
                  t = e.baggageAndPolicies,
                  i = e.refundAndChangeDetails,
                  a =
                    null == t
                      ? void 0
                      : t.map(function (e) {
                          return (0,
                          d.Z)((0, d.Z)({}, e), {}, { refundAndChangeDetails: i });
                        });
                this.navigateTo({
                  url: "/pages/flightSecondary/bap/bap",
                  data: { baggageAllowanceAndPolicies: a },
                });
              },
              handleRefundAction: function () {
                var e = this;
                if (
                  !w.Z.isFastDoubleClick() &&
                  !this.data.order.forbidRefundFlag
                ) {
                  (0, I.showLoading)("查询退票条件中");
                  var t = { orderNumber: this.oid };
                  (0, C.dV)(t)
                    .then(function (t) {
                      var i = t || {},
                        a = i.resultCode,
                        n = i.resultMessage;
                      switch (a) {
                        case "QRY-200":
                          var o = {
                              orderNumber: e.oid,
                              intlRefundRule: e.data.baggageAndPolicies,
                              intlRefundAndChangeDetails:
                                e.data.refundAndChangeDetails,
                              isIntl: !0,
                            },
                            r = new M(t, o);
                          r.initData();
                          var l = r.getFirstGoWitchPage();
                          e.navigateTo({
                            url: l,
                            data: { applyData: t, orderData: o },
                          });
                          break;
                        default:
                          (0, I.showModal)(n || "网络异常，请稍后重试~");
                      }
                    })
                    .catch(function (e) {
                      (0, I.showModal)(e.message || "网络异常，请稍后重试~");
                    })
                    .finally(function () {
                      (0, I.hideLoading)();
                    });
                }
              },
              handleRebookAction: function () {
                var e = this;
                if (
                  !w.Z.isFastDoubleClick() &&
                  !this.data.order.forbidRebookFlag
                ) {
                  (0, I.showLoading)("查询改签条件中");
                  var t = { data: { orderNumber: this.oid } };
                  B.Z.pollingFetch(C.yD, t)
                    .then(function (t) {
                      console.log("rebook data", t);
                      var i = t.conditionList,
                        a = t.explanation,
                        n = t.tripType,
                        o = e.data,
                        r = o.baggageAndPolicies,
                        l = o.refundAndChangeDetails,
                        s = function () {
                          e.navigateTo({
                            url: "/pages/taroCRN/flight/pages/rebookOperate/index",
                            data: {
                              orderNumber: e.oid,
                              conditionList: i,
                              tripType: n,
                              explanation: a,
                              rescheduleRefundRemark: r,
                              refundAndChangeDetails: l,
                              isSplitOrder: !0,
                              isIntl: !0,
                            },
                          });
                        },
                        c = function () {
                          e.navigateTo({
                            url: "/pages/taroCRN/flight/pages/rebookOperate/index",
                            data: {
                              orderNumber: e.oid,
                              conditionList: i,
                              tripType: n,
                              explanation: a,
                              isIntl: !0,
                              rescheduleRefundRemark: r,
                              refundAndChangeDetails: l,
                            },
                          });
                        },
                        d = function () {
                          var t,
                            n,
                            o =
                              null == i ||
                              null === (t = i[0]) ||
                              void 0 === t ||
                              null === (n = t.segmentList) ||
                              void 0 === n
                                ? void 0
                                : n[0];
                          e.navigateTo({
                            url: "/pages/taroCRN/flight/pages/rebookApply/index",
                            data: {
                              orderNumber: e.oid,
                              segment: o,
                              explanation: a,
                              rescheduleRefundRemark: r,
                              refundAndChangeDetails: l,
                              isIntl: !0,
                            },
                          });
                        };
                      if (1 == n) return i.length > 1 ? s() : d();
                      if (2 == n || 5 == n) return c();
                      if (4 == n) {
                        if (1 == i.length) return d();
                        if (
                          (function (e) {
                            var t, i;
                            if ((null == e ? void 0 : e.length) <= 1) return !1;
                            var a = (
                              null == e ||
                              null === (t = e[0]) ||
                              void 0 === t ||
                              null === (i = t.segmentList) ||
                              void 0 === i
                                ? void 0
                                : i[0]
                            ).segmentIndex;
                            return null == e
                              ? void 0
                              : e.some(function (e) {
                                  var t,
                                    i = (
                                      null === (t = e.segmentList) ||
                                      void 0 === t
                                        ? void 0
                                        : t[0]
                                    ).segmentIndex;
                                  return (
                                    i.segmentType !== a.segmentType ||
                                    i.sequenceNum !== a.sequenceNum
                                  );
                                });
                          })(i)
                        )
                          return c();
                        s();
                      }
                    })
                    .catch(function (e) {
                      (0, I.showModal)(e.message || "网络异常，请稍后重试~");
                    })
                    .finally(function () {
                      (0, I.hideLoading)();
                    });
                }
              },
              onAppendProduct: function (e) {
                var t = e.currentTarget.dataset.index,
                  i = this.data.order.appendProducts;
                w.Z.commonNavigator(
                  i[t].productRemarkUrl.replace(/http:\/\//, "https://")
                );
              },
              togglePriceDetail: function () {
                var e = this,
                  t = this.data,
                  i = t.detailMask,
                  a = t.showPriceDetail;
                this.setData({ detailMask: !i }),
                  setTimeout(function () {
                    e.setData({ showPriceDetail: !a });
                  }, 10);
              },
              toggleTicketInfo: function () {
                var e = this,
                  t = this.data.showTicketInfo;
                this.setData({ showTicketInfo: !t, maskType: "ticket" }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              closeMask: function (e) {
                var t = e.currentTarget.dataset.type;
                "ticket" === t
                  ? this.toggleTicketInfo()
                  : "reason" === t
                  ? this.toggleReasonPanel()
                  : "refund" === t
                  ? this.toggleBaggageAndPolicies()
                  : "note" === t && this.toggleFlightNoteDetail();
              },
              cancelOrder: function (e) {
                var t = this,
                  i = e || "点击取消按钮",
                  a = { data: { orderNumber: this.oid, reason: i } };
                w.Z.isFastDoubleClick() ||
                  ((0, I.showLoading)("正在取消订单"),
                  (0, _.IY)(a)
                    .then(
                      function (e) {
                        console.log(e);
                      },
                      function (e) {
                        console.log(e);
                      }
                    )
                    .finally(function () {
                      (0, I.hideLoading)(),
                        t.getIntlOrderDetail(),
                        (k.IK.doNotRefreshIndexUnpaidOrder = !1);
                    }));
              },
              handlePayAction: function () {
                var e = this,
                  t = this.data.paymentInfo;
                if (!w.Z.isFastDoubleClick() && t) {
                  (0, I.showLoading)();
                  var i = t.orderNumber;
                  v.ZP.doPayment({ orderNumber: i, business: "flight" })
                    .then(function () {
                      (0, I.hideLoading)(),
                        (0, I.showToast)("支付成功"),
                        e.getIntlOrderDetail();
                    })
                    .catch(function (e) {
                      var t;
                      (0, I.hideLoading)(),
                        null != e &&
                        null !== (t = e.errMsg) &&
                        void 0 !== t &&
                        t.endsWith("cancel")
                          ? (0, I.showToast)("支付已取消")
                          : (0, I.showToast)("支付失败，请稍后重试~");
                    });
                }
              },
              toFlightIndex: function () {
                w.Z.relaunchHome("flight");
              },
              toggleReasonPanel: function () {
                this.cancelOrder();
              },
              selectReason: function (e) {
                var t = e.currentTarget.dataset.index,
                  i = this.data.cancelReasons.map(function (e) {
                    return (0, d.Z)((0, d.Z)({}, e), {}, { selected: !1 });
                  });
                (i[t].selected = !0),
                  this.setData({ cancelReasons: i, enableReasonSubmit: !0 });
              },
              feedbackInput: function (e) {
                var t = e.detail.value;
                console.log(t), this.setData({ cancelFeedback: t.trim() });
              },
              handleReasonSubmit: function () {
                var e = this,
                  t = this.data,
                  i = t.cancelReasons,
                  a = t.cancelFeedback,
                  n = {
                    data: {
                      orderNumber: t.order.orderNumber,
                      reason: i.some(function (e) {
                        return e.selected;
                      })
                        ? i.filter(function (e) {
                            return e.selected;
                          })[0].title
                        : "",
                      description: a,
                    },
                  };
                console.log(n),
                  (0, _.NZ)(n).then(
                    function (t) {
                      var i = t || {},
                        a = i.resultCode,
                        n = i.resultMessage;
                      1 === a
                        ? (e.toggleReasonPanel(), e.cancelOrder())
                        : (0, I.showModal)(n || "网络错误，请稍后再试！");
                    },
                    function (e) {
                      (0, I.showModal)(e || "网络错误，请稍后再试！");
                    }
                  );
              },
              toggleFlightNoteDetail: function () {
                var e = this,
                  t = this.data,
                  i = t.showFlightNote;
                1 !== t.order.flightNoteList.length &&
                  (this.setData({
                    mask: !i,
                    showFlightNote: !i,
                    maskType: "note",
                  }),
                  setTimeout(function () {
                    e.setData({ transition: !i });
                  }, 10));
              },
              handleUnpaidOrder: function (e) {
                var t = this;
                w.Z.isFastDoubleClick() ||
                  (e &&
                    ((0, I.showLoading)(),
                    v.ZP.doPayment({ orderNumber: e, business: "flight" })
                      .then(function () {
                        (0, I.hideLoading)(),
                          (0, I.showToast)("支付成功"),
                          t.getIntlOrderDetail();
                      })
                      .catch(function (e) {
                        var t;
                        (0, I.hideLoading)(),
                          null != e &&
                          null !== (t = e.errMsg) &&
                          void 0 !== t &&
                          t.endsWith("cancel")
                            ? (0, I.showToast)("支付已取消")
                            : (0, I.showToast)("支付失败，请稍后重试~");
                      })));
              },
              toInvoiceSend: function () {
                var e = this.data.order,
                  t = e.orderNumber;
                if (e.beforeOrderSuccessText)
                  return this.showCommonDialog(
                    "亲，出票完成后，系统将为您自动发送行程确认单至您的邮箱~"
                  );
                this.navigateTo({
                  url: "/pages/flightSecondary/sendinvoice/sendinvoice?orderNumber=".concat(
                    t
                  ),
                });
              },
              noop: function () {},
            },
            U =
              (0, g.h)()(
                (a =
                  N()(H)(
                    (a = (function (e) {
                      (0, l.Z)(i, e);
                      var t = (0, s.Z)(i);
                      function i() {
                        return (0, o.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, r.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e,
                                t = this,
                                i = this.data,
                                a = i.isTieyou,
                                n = i.order,
                                o = i.flightInfo,
                                r = i.isIPhoneX,
                                l = i.showPriceDetail,
                                s = i.lastPayTime,
                                c = i.detailMask,
                                d = i.transition,
                                h = i.maskType,
                                f = i.showTicketInfo,
                                m = i.showReasonPanel,
                                g = i.cancelReasons,
                                p = i.cancelFeedback,
                                N = i.enableReasonSubmit,
                                v = i.orderDetailPopup,
                                w = i.showFlightNote,
                                Z = i.paymentInfo,
                                b = Z ? Z.priceInfos : n.priceInfos,
                                T = null == n ? void 0 : n.orderPaymentInfo,
                                k =
                                  "rebook" ==
                                  (null == n ||
                                  null === (e = n.orderPaymentInfo) ||
                                  void 0 === e
                                    ? void 0
                                    : e.type),
                                D = n.rebookFlag && !k,
                                V = n.refundFlag && !k;
                              return (0, A.BX)(A.HY, {
                                children: [
                                  (0, A.BX)(u.View, {
                                    className: "page",
                                    children: [
                                      (0, A.BX)(u.View, {
                                        className: "order-box",
                                        children: [
                                          (0, A.BX)(u.View, {
                                            className:
                                              "order-status " +
                                              (a ? "ty" : "zx"),
                                            children: [
                                              (0, A.tZ)(u.View, {
                                                className: "cont",
                                                children: (0, A.tZ)(u.View, {
                                                  className: "tit",
                                                  children: n.orderStateDesc,
                                                }),
                                              }),
                                              (0, A.BX)(u.View, {
                                                children: [
                                                  n.orderSatate > 9 &&
                                                    (0, A.BX)(u.View, {
                                                      className: "price",
                                                      children: [
                                                        "895",
                                                        (0, A.tZ)(u.Text, {
                                                          className:
                                                            "ifont-arr iconfont",
                                                        }),
                                                      ],
                                                    }),
                                                  (0, A.BX)(u.View, {
                                                    className: "info",
                                                    id: "AaBA",
                                                    onClick:
                                                      this
                                                        .handleBaggageAndPoliciesClick,
                                                    children: [
                                                      "退改说明",
                                                      (0, A.tZ)(u.Text, {
                                                        className:
                                                          "ifont-arr iconfont",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, A.BX)(u.View, {
                                            className: "order-bd",
                                            children: [
                                              (0, A.tZ)(L, {
                                                totalPrice:
                                                  (null == T
                                                    ? void 0
                                                    : T.totalPrice) || 0,
                                                orderNumber:
                                                  (null == T
                                                    ? void 0
                                                    : T.orderNumber) || "",
                                                onPay: this.handleUnpaidOrder,
                                              }),
                                              (0, A.tZ)(R, {
                                                orderStateInfoList:
                                                  n.orderStateInfoList,
                                                orderNumber: this.oid,
                                              }),
                                              (0, A.BX)(u.View, {
                                                className: "order-wbox",
                                                children: [
                                                  (0, A.tZ)(A.HY, {
                                                    children: (0, A.BX)(
                                                      u.View,
                                                      {
                                                        className:
                                                          "order-modify",
                                                        children: [
                                                          n.flightNoteList &&
                                                            n.flightNoteList
                                                              .length > 0 &&
                                                            (0, A.tZ)(A.HY, {
                                                              children: (0,
                                                              A.BX)(u.View, {
                                                                className:
                                                                  "flight-note",
                                                                id: "AaBB",
                                                                onClick:
                                                                  this
                                                                    .toggleFlightNoteDetail,
                                                                children: [
                                                                  1 ===
                                                                    n
                                                                      .flightNoteList
                                                                      .length &&
                                                                    (0, A.BX)(
                                                                      u.View,
                                                                      {
                                                                        className:
                                                                          "title",
                                                                        children:
                                                                          [
                                                                            n
                                                                              .flightNoteList[0]
                                                                              .noteTitle +
                                                                              ":",
                                                                            (0,
                                                                            A.tZ)(
                                                                              u.Text,
                                                                              {
                                                                                className:
                                                                                  "txt",
                                                                                children:
                                                                                  n
                                                                                    .flightNoteList[0]
                                                                                    .noteContent,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                  n
                                                                    .flightNoteList
                                                                    .length >
                                                                    1 &&
                                                                    (0, A.tZ)(
                                                                      u.View,
                                                                      {
                                                                        className:
                                                                          "title",
                                                                        children:
                                                                          n.flightNoteList.map(
                                                                            function (
                                                                              e,
                                                                              t
                                                                            ) {
                                                                              return (0,
                                                                              A.tZ)(
                                                                                A.HY,
                                                                                {
                                                                                  children:
                                                                                    (0 !==
                                                                                    t
                                                                                      ? "、"
                                                                                      : "") +
                                                                                    e.noteTitle,
                                                                                }
                                                                              );
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                  n
                                                                    .flightNoteList
                                                                    .length >
                                                                    1 &&
                                                                    (0, A.tZ)(
                                                                      u.Text,
                                                                      {
                                                                        className:
                                                                          "iconfont ifont-arr",
                                                                      }
                                                                    ),
                                                                ],
                                                              }),
                                                            }),
                                                          o.map(function (
                                                            e,
                                                            t
                                                          ) {
                                                            return (0, A.BX)(
                                                              A.HY,
                                                              {
                                                                children: [
                                                                  (0, A.BX)(
                                                                    u.View,
                                                                    {
                                                                      className:
                                                                        "order-modify-hd " +
                                                                        ((2 ===
                                                                          n.orderType ||
                                                                          5 ===
                                                                            n.orderType) &&
                                                                        t > 0
                                                                          ? "mt48"
                                                                          : ""),
                                                                      children:
                                                                        [
                                                                          (2 ===
                                                                            n.orderType ||
                                                                            5 ===
                                                                              n.orderType) &&
                                                                            (0,
                                                                            A.tZ)(
                                                                              u.Text,
                                                                              {
                                                                                className:
                                                                                  "round-mark bgcolor-primary",
                                                                                children:
                                                                                  0 ===
                                                                                  t
                                                                                    ? "去"
                                                                                    : "返",
                                                                              }
                                                                            ),
                                                                          e.departDateCityInfo +
                                                                            " " +
                                                                            e.costTime,
                                                                        ],
                                                                    }
                                                                  ),
                                                                  (0, A.tZ)(
                                                                    u.View,
                                                                    {
                                                                      className:
                                                                        "order-modify-bd",
                                                                      children:
                                                                        e.flightList.map(
                                                                          function (
                                                                            e
                                                                          ) {
                                                                            return (0,
                                                                            A.BX)(
                                                                              A.HY,
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    e.transferCity &&
                                                                                      (0,
                                                                                      A.tZ)(
                                                                                        u.View,
                                                                                        {
                                                                                          className:
                                                                                            "zhongzhuan",
                                                                                          children:
                                                                                            e.transferCity +
                                                                                            "中转 停留" +
                                                                                            e.transferTime,
                                                                                        }
                                                                                      ),
                                                                                    (0,
                                                                                    A.BX)(
                                                                                      u.View,
                                                                                      {
                                                                                        className:
                                                                                          "fromto",
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            A.BX)(
                                                                                              u.View,
                                                                                              {
                                                                                                className:
                                                                                                  "from",
                                                                                                children:
                                                                                                  [
                                                                                                    (0,
                                                                                                    A.tZ)(
                                                                                                      u.Text,
                                                                                                      {
                                                                                                        className:
                                                                                                          "time",
                                                                                                        children:
                                                                                                          e.departTime,
                                                                                                      }
                                                                                                    ),
                                                                                                    e.departDayDiff >
                                                                                                      0 &&
                                                                                                      (0,
                                                                                                      A.tZ)(
                                                                                                        u.Text,
                                                                                                        {
                                                                                                          className:
                                                                                                            "em",
                                                                                                          children:
                                                                                                            "+" +
                                                                                                            e.departDayDiff +
                                                                                                            "天",
                                                                                                        }
                                                                                                      ),
                                                                                                    (0,
                                                                                                    A.tZ)(
                                                                                                      u.Text,
                                                                                                      {
                                                                                                        className:
                                                                                                          "station " +
                                                                                                          (e
                                                                                                            .departAirportTerminal
                                                                                                            .length >
                                                                                                          9
                                                                                                            ? "small"
                                                                                                            : e
                                                                                                                .departAirportTerminal
                                                                                                                .length >
                                                                                                              7
                                                                                                            ? "middle"
                                                                                                            : ""),
                                                                                                        children:
                                                                                                          e.departAirportTerminal,
                                                                                                      }
                                                                                                    ),
                                                                                                  ],
                                                                                              }
                                                                                            ),
                                                                                            e.stopCities.map(
                                                                                              function (
                                                                                                e
                                                                                              ) {
                                                                                                return (0,
                                                                                                A.tZ)(
                                                                                                  A.HY,
                                                                                                  {
                                                                                                    children:
                                                                                                      (0,
                                                                                                      A.tZ)(
                                                                                                        u.View,
                                                                                                        {
                                                                                                          className:
                                                                                                            "mid",
                                                                                                          children:
                                                                                                            (0,
                                                                                                            A.tZ)(
                                                                                                              u.Text,
                                                                                                              {
                                                                                                                className:
                                                                                                                  "jinting",
                                                                                                                children:
                                                                                                                  "经停" +
                                                                                                                  e.cityName +
                                                                                                                  " 停留" +
                                                                                                                  e.stopTimeStr,
                                                                                                              }
                                                                                                            ),
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                );
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            A.BX)(
                                                                                              u.View,
                                                                                              {
                                                                                                className:
                                                                                                  "to",
                                                                                                children:
                                                                                                  [
                                                                                                    (0,
                                                                                                    A.tZ)(
                                                                                                      u.Text,
                                                                                                      {
                                                                                                        className:
                                                                                                          "time",
                                                                                                        children:
                                                                                                          e.arriveTime,
                                                                                                      }
                                                                                                    ),
                                                                                                    e.arriveDayDiff >
                                                                                                      0 &&
                                                                                                      (0,
                                                                                                      A.tZ)(
                                                                                                        u.Text,
                                                                                                        {
                                                                                                          className:
                                                                                                            "em",
                                                                                                          children:
                                                                                                            "+" +
                                                                                                            e.arriveDayDiff +
                                                                                                            "天",
                                                                                                        }
                                                                                                      ),
                                                                                                    (0,
                                                                                                    A.tZ)(
                                                                                                      u.Text,
                                                                                                      {
                                                                                                        className:
                                                                                                          "station " +
                                                                                                          (e
                                                                                                            .arriveAirportTerminal
                                                                                                            .length >
                                                                                                          9
                                                                                                            ? "small"
                                                                                                            : e
                                                                                                                .arriveAirportTerminal
                                                                                                                .length >
                                                                                                              7
                                                                                                            ? "middle"
                                                                                                            : ""),
                                                                                                        children:
                                                                                                          e.arriveAirportTerminal,
                                                                                                      }
                                                                                                    ),
                                                                                                  ],
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            A.BX)(
                                                                                              u.View,
                                                                                              {
                                                                                                className:
                                                                                                  "flight-num",
                                                                                                children:
                                                                                                  [
                                                                                                    (0,
                                                                                                    A.tZ)(
                                                                                                      u.View,
                                                                                                      {
                                                                                                        children:
                                                                                                          e.airlineShortName,
                                                                                                      }
                                                                                                    ),
                                                                                                    (0,
                                                                                                    A.tZ)(
                                                                                                      u.View,
                                                                                                      {
                                                                                                        children:
                                                                                                          e.flightNo,
                                                                                                      }
                                                                                                    ),
                                                                                                    (0,
                                                                                                    A.tZ)(
                                                                                                      u.View,
                                                                                                      {
                                                                                                        children:
                                                                                                          e.cabinName,
                                                                                                      }
                                                                                                    ),
                                                                                                  ],
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  ],
                                                                              }
                                                                            );
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            );
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  (0, A.BX)(u.View, {
                                                    className: "order-pasg",
                                                    children: [
                                                      (0, A.tZ)(u.View, {
                                                        className: "label",
                                                        children: "乘机人",
                                                      }),
                                                      (0, A.tZ)(u.View, {
                                                        className: "cont",
                                                        children:
                                                          n.passengers &&
                                                          n.passengers.map(
                                                            function (e) {
                                                              return (0, A.tZ)(
                                                                A.HY,
                                                                {
                                                                  children: (0,
                                                                  A.BX)(
                                                                    u.View,
                                                                    {
                                                                      className:
                                                                        "pasg-detail",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          A.BX)(
                                                                            u.View,
                                                                            {
                                                                              className:
                                                                                "name",
                                                                              children:
                                                                                [
                                                                                  (0,
                                                                                  A.tZ)(
                                                                                    u.Text,
                                                                                    {
                                                                                      className:
                                                                                        "txt",
                                                                                      children:
                                                                                        e.passengerName,
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  A.tZ)(
                                                                                    u.Text,
                                                                                    {
                                                                                      className:
                                                                                        "type",
                                                                                      children:
                                                                                        e.passengerType,
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          A.tZ)(
                                                                            u.View,
                                                                            {
                                                                              className:
                                                                                "card",
                                                                              children:
                                                                                e.passportType +
                                                                                " " +
                                                                                e.passportCode,
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                }
                                                              );
                                                            }
                                                          ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, A.BX)(u.View, {
                                                    className: "order-phone",
                                                    children: [
                                                      (0, A.tZ)(u.View, {
                                                        className: "label",
                                                        children: "联系手机",
                                                      }),
                                                      (0, A.tZ)(u.View, {
                                                        className: "cont",
                                                        children:
                                                          n.contactInfo &&
                                                          n.contactInfo
                                                            .contactPhone,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, A.BX)(u.View, {
                                                    className: "order-email",
                                                    children: [
                                                      (0, A.tZ)(u.View, {
                                                        className: "label",
                                                        children: "联系邮箱",
                                                      }),
                                                      (0, A.tZ)(u.View, {
                                                        className: "cont",
                                                        children:
                                                          n.contactInfo &&
                                                          n.contactInfo
                                                            .contactEmail,
                                                      }),
                                                    ],
                                                  }),
                                                  n.showInvoiceFlag &&
                                                    (0, A.tZ)(u.View, {
                                                      className:
                                                        "order-send " +
                                                        (a ? "ty" : "zx"),
                                                      children: (0, A.BX)(
                                                        u.View,
                                                        {
                                                          className: "cont",
                                                          id: "AaBC",
                                                          onClick:
                                                            this.toInvoiceSend,
                                                          children: [
                                                            (0, A.tZ)(u.Text, {
                                                              className:
                                                                "iconfont ifont-send-arrow",
                                                            }),
                                                            "发送行程确认单",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                              n.appendProducts &&
                                                n.appendProducts.length > 0 &&
                                                (0, A.BX)(u.View, {
                                                  className:
                                                    "order-wbox order-insr",
                                                  children: [
                                                    (0, A.tZ)(u.View, {
                                                      className: "strong",
                                                      children: "保险",
                                                    }),
                                                    n.appendProducts.map(
                                                      function (e, i) {
                                                        return (0, A.tZ)(A.HY, {
                                                          children: (0, A.BX)(
                                                            u.View,
                                                            {
                                                              className: "item",
                                                              "data-index": i,
                                                              id: "AaBD",
                                                              onClick:
                                                                t.onAppendProduct,
                                                              children: [
                                                                (0, A.tZ)(
                                                                  u.View,
                                                                  {
                                                                    className:
                                                                      "cont",
                                                                    children:
                                                                      e.productTitle +
                                                                      " x " +
                                                                      e.productNum +
                                                                      "份",
                                                                  }
                                                                ),
                                                                (0, A.tZ)(
                                                                  u.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-arr iconfont",
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        });
                                                      }
                                                    ),
                                                  ],
                                                }),
                                              (0, A.BX)(u.View, {
                                                className:
                                                  "order-wbox order-info",
                                                id: "AaBE",
                                                onClick: this.toggleTicketInfo,
                                                children: [
                                                  (0, A.tZ)(u.View, {
                                                    className: "strong",
                                                    children: "订单/电子票号",
                                                  }),
                                                  (0, A.tZ)(u.View, {
                                                    className: "cont",
                                                  }),
                                                  (0, A.tZ)(u.Text, {
                                                    className:
                                                      "ifont-arr iconfont",
                                                  }),
                                                ],
                                              }),
                                              (0, A.BX)(u.View, {
                                                className: "flex",
                                                children: [
                                                  n.cancelFlag &&
                                                    (0, A.tZ)(u.View, {
                                                      className:
                                                        "order-wbox order-cancel flex-1",
                                                      id: "AaBF",
                                                      onClick:
                                                        this.toggleReasonPanel,
                                                      children: (0, A.tZ)(
                                                        u.Button,
                                                        {
                                                          className: "cancel",
                                                          children: "取消订单",
                                                        }
                                                      ),
                                                    }),
                                                  V &&
                                                    (0, A.tZ)(u.View, {
                                                      className:
                                                        "order-wbox order-cancel flex-1",
                                                      id: "AaBG",
                                                      onClick:
                                                        this.handleRefundAction,
                                                      children: (0, A.tZ)(
                                                        u.Button,
                                                        {
                                                          className: "cancel",
                                                          children: "申请退票",
                                                        }
                                                      ),
                                                    }),
                                                  D &&
                                                    (0, A.tZ)(u.View, {
                                                      className:
                                                        "order-wbox order-cancel flex-1",
                                                      id: "AaBG",
                                                      onClick:
                                                        this.handleRebookAction,
                                                      children: (0, A.tZ)(
                                                        u.Button,
                                                        {
                                                          className: "cancel",
                                                          children: "申请改签",
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      Z &&
                                        (0, A.BX)(u.View, {
                                          className:
                                            "pay-box " + (r ? "iphone-x" : ""),
                                          id: "AaBH",
                                          onClick: function (e) {
                                            e.stopPropagation();
                                          },
                                          catchMove: !0,
                                          children: [
                                            (0, A.tZ)(u.View, {
                                              className: "lbox",
                                              children: (0, A.tZ)(u.View, {
                                                className:
                                                  "pay-price color-red",
                                                children: Z.totalPrice,
                                              }),
                                            }),
                                            (0, A.BX)(u.View, {
                                              className:
                                                "pay-detail " +
                                                (l ? "open" : ""),
                                              id: "AaBI",
                                              onClick: this.togglePriceDetail,
                                              children: [
                                                "明细",
                                                (0, A.tZ)(u.Text, {
                                                  className:
                                                    "ifont-arr iconfont",
                                                }),
                                              ],
                                            }),
                                            (0, A.BX)(u.Button, {
                                              className: "btn-pay btn-red",
                                              hoverClass: "btn-btn_pay_hover",
                                              formType: "submit",
                                              id: "AaBJ",
                                              onClick: this.handlePayAction,
                                              children: [
                                                "去付款",
                                                (0, A.tZ)(u.Text, {
                                                  children: s,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      !Z &&
                                        (0, A.tZ)(u.View, {
                                          className:
                                            "btn-box " + (r ? "iphone-x" : ""),
                                          children: (0, A.tZ)(u.Button, {
                                            className: "btn-primary",
                                            id: "AaBK",
                                            onClick: this.toFlightIndex,
                                            children: "再订一张",
                                          }),
                                        }),
                                    ],
                                  }),
                                  c &&
                                    (0, A.tZ)(u.View, {
                                      className:
                                        "pay-derail " + (r ? "iphone-x" : ""),
                                      id: "AaBL",
                                      onClick: function (e) {
                                        e.stopPropagation(),
                                          t.togglePriceDetail();
                                      },
                                      catchMove: !0,
                                      children: (0, A.tZ)(u.View, {
                                        className:
                                          "pay-derail-bd " +
                                          (l ? "active" : ""),
                                        id: "AaBM",
                                        onClick: this.noop,
                                        children:
                                          b &&
                                          b.map(function (e) {
                                            var t;
                                            return (0, A.tZ)(A.HY, {
                                              children: (0, A.tZ)(u.View, {
                                                className: "item",
                                                children:
                                                  null ===
                                                    (t = e.priceDetails) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.map(function (e) {
                                                        return (0,
                                                        A.tZ)(A.HY, { children: (0, A.BX)(u.View, { className: "lst", children: [e.title, (0, A.BX)(u.Text, { className: "fr", children: ["￥" + e.price, (0, A.tZ)(u.Text, { className: "tgrey", children: "X " + e.count + e.unit })] })] }) });
                                                      }),
                                              }),
                                            });
                                          }),
                                      }),
                                    }),
                                  (0, A.tZ)(u.View, {
                                    className:
                                      "pop-mask " + (d ? "active" : ""),
                                    "data-type": h,
                                    id: "AaBN",
                                    onClick: function (e) {
                                      e.stopPropagation(), t.closeMask(e);
                                    },
                                    catchMove: !0,
                                  }),
                                  (0, A.tZ)(u.View, {
                                    className:
                                      "pop-botm pop-order " +
                                      (f ? "active" : ""),
                                    id: "AaBO",
                                    onClick: function (e) {
                                      e.stopPropagation();
                                    },
                                    catchMove: !0,
                                    children: (0, A.BX)(u.View, {
                                      className: "pop-botm-bd",
                                      children: [
                                        (0, A.tZ)(u.View, {
                                          className: "txt",
                                          children: "订单号",
                                        }),
                                        (0, A.tZ)(u.View, {
                                          className: "order-num",
                                          children: n.orderNumber,
                                        }),
                                        (0, A.tZ)(u.View, {
                                          className: "txt",
                                          children: "电子票号",
                                        }),
                                        n.flightSegments &&
                                          n.flightSegments[0]
                                            .passengerTicketInfos[0]
                                            .ticketNumber &&
                                          (0, A.tZ)(A.HY, {
                                            children: n.flightSegments.map(
                                              function (e) {
                                                return (0, A.tZ)(A.HY, {
                                                  children:
                                                    e.passengerTicketInfos.map(
                                                      function (e) {
                                                        return (0, A.tZ)(A.HY, {
                                                          children: (0, A.tZ)(
                                                            u.View,
                                                            {
                                                              className:
                                                                "order-num",
                                                              children:
                                                                e.passengerName +
                                                                " " +
                                                                e.ticketNumber,
                                                            }
                                                          ),
                                                        });
                                                      }
                                                    ),
                                                });
                                              }
                                            ),
                                          }),
                                        n.flightSegments &&
                                          !n.flightSegments[0]
                                            .passengerTicketInfos[0]
                                            .ticketNumber &&
                                          (0, A.tZ)(u.View, {
                                            className: "order-num",
                                            children: "暂无信息",
                                          }),
                                      ],
                                    }),
                                  }),
                                  n.cancelFlag &&
                                    (0, A.tZ)(u.View, {
                                      className:
                                        "pop-botm " + (m ? "active" : ""),
                                      id: "AaBP",
                                      onClick: function (e) {
                                        e.stopPropagation();
                                      },
                                      catchMove: !0,
                                      children: (0, A.BX)(u.View, {
                                        className: "pop-canres",
                                        children: [
                                          (0, A.BX)(u.View, {
                                            className: "tit",
                                            children: [
                                              "请填写取消原因，帮助我们提供更好的服务",
                                              (0, A.tZ)(u.Text, {
                                                className:
                                                  "ifont-closed iconfont",
                                                id: "AaBQ",
                                                onClick: this.toggleReasonPanel,
                                              }),
                                            ],
                                          }),
                                          (0, A.BX)(u.View, {
                                            className: "pop-canres-bd",
                                            children: [
                                              g.map(function (e, i) {
                                                return (0,
                                                A.tZ)(A.HY, { children: (0, A.BX)(u.View, { className: "item", "data-index": i, id: "AaBR", onClick: t.selectReason, children: [(0, A.tZ)(u.Text, { className: "iconfont " + (e.selected ? "ifont-radioed color-primary" : "ifont-radio") }), e.title] }) });
                                              }),
                                              m &&
                                                (0, A.tZ)(u.Textarea, {
                                                  className: "canres-tar",
                                                  placeholder:
                                                    "我们会仔细阅读您的反馈并尽可能优化问题，感谢您的支持~",
                                                  placeholderClass:
                                                    "canres-tar-pld",
                                                  value: p,
                                                  onInput: this.feedbackInput,
                                                }),
                                            ],
                                          }),
                                          (0, A.tZ)(u.View, {
                                            className: "btn-box",
                                            children:
                                              N || p
                                                ? (0, A.tZ)(u.Button, {
                                                    className: "btn-primary",
                                                    id: "AaBS",
                                                    onClick:
                                                      this.handleReasonSubmit,
                                                    children: "提交",
                                                  })
                                                : (0, A.tZ)(u.Button, {
                                                    className: "btn-primary",
                                                    disabled: !0,
                                                    children: "提交",
                                                  }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  (0, A.BX)(u.View, {
                                    className:
                                      "pop-botm pop-note " +
                                      (w ? "active" : ""),
                                    children: [
                                      (0, A.BX)(u.View, {
                                        className: "pop-botm-hd",
                                        id: "AaBT",
                                        onClick: function (e) {
                                          e.stopPropagation();
                                        },
                                        catchMove: !0,
                                        children: [
                                          (0, A.tZ)(u.View, {
                                            className: "btn-cancel",
                                            id: "AaBU",
                                            onClick:
                                              this.toggleFlightNoteDetail,
                                            children: "取消",
                                          }),
                                          (0, A.tZ)(u.View, {
                                            className: "tit",
                                            children: "行程须知",
                                          }),
                                          (0, A.tZ)(u.View, {
                                            className:
                                              "btn-submit color-primary",
                                          }),
                                        ],
                                      }),
                                      (0, A.tZ)(u.View, {
                                        className: "pop-botm-bd",
                                        children:
                                          n.flightNoteList &&
                                          n.flightNoteList.map(function (e, t) {
                                            return (0,
                                            A.BX)(u.View, { className: "item", children: [(0, A.tZ)(u.View, { className: "tit", children: e.noteTitle }), (0, A.tZ)(u.View, { className: "content", children: e.noteContent })] }, t);
                                          }),
                                      }),
                                    ],
                                  }),
                                  (0, A.tZ)(F, { detailDialog: v }),
                                  (0, A.tZ)(y.Z, {
                                    ref: function (e) {
                                      t.onDialogAttach(e);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(h.default.Component))
                  ) || a)
              ) || a;
          Page(
            (0, n.createPageConfig)(
              U,
              "pages/flightIntl/detail/detail",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [25859, 3322, 36332, 95854, 49608, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(76304);
          }
        ),
          e.O();
      },
    ]);
})();
