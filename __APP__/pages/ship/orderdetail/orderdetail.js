!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/a6b9ed7171073b2dbf848c56c2af4e8b.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [47162],
      {
        46150: function (e, t, i) {
          var n = i(32180),
            r = i(79301),
            a = i(95308),
            o = i(57042),
            l = i(24460),
            c = i(81876),
            s = i(21867),
            d = i(86066),
            u = i(45023),
            m = i(52500),
            h = i(71515),
            f = i(92954),
            p = i.n(f),
            v = i(79792),
            w = i(65573),
            Z = i(18783),
            N = i(41991),
            g = i(298),
            D = {
              state: {
                orderDetail: null,
                isLoading: !0,
                isShowPricePop: !1,
                isShowRulePop: !1,
              },
              reducers: {
                setOrderDetail: function (e, t) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { orderDetail: t });
                },
                setIsLoading: function (e, t) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { isLoading: t });
                },
                setIsShowPricePop: function (e, t) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { isShowPricePop: t });
                },
                setShowRulePop: function (e, t) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { isShowRulePop: t });
                },
              },
            },
            k = {
              state: { isShowRefundPop: !1 },
              reducers: {
                setShowRefundPop: function (e, t) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { isShowRefundPop: t });
                },
              },
            },
            y = (function (e) {
              (0, s.Z)(i, e);
              var t = (0, d.Z)(i);
              function i() {
                return (0, o.Z)(this, i), t.apply(this, arguments);
              }
              return (0, l.Z)(i);
            })(N.Z);
          (0, u.Z)(y, "store", {
            models: { orderDetailModel: D, orderOptModel: k },
          });
          var V = i(81957),
            b = i(34229),
            S = i(8271),
            T = i.n(S),
            x = function () {
              var e = y.getState().orderDetailModel.orderDetail,
                t = (null == e ? void 0 : e.orderOperateElement) || [];
              return !(
                null == t ||
                !t.find(function (e) {
                  return "pay" === (null == e ? void 0 : e.operate);
                })
              );
            },
            P = function () {
              var e = y.getState().orderDetailModel.orderDetail.processState;
              return !((B() && "3" == e) || x());
            },
            B = function () {
              var e = y.getState().orderDetailModel.orderDetail;
              return (
                "1" == (null == e ? void 0 : e.isGrabTicket) ||
                "2" == (null == e ? void 0 : e.isGrabTicket)
              );
            },
            C = i(48813),
            I = (0, w.$j)(
              function (e) {
                return { orderDetail: e.orderDetailModel.orderDetail };
              },
              function (e) {
                var t = e.orderDetailModel;
                return {
                  onShowPricePop: function (e) {
                    return t.setIsShowPricePop(e);
                  },
                };
              }
            )(function (e) {
              var t = e.orderDetail,
                i = e.onShowPricePop;
              if (!t) return (0, C.tZ)(h.View, {});
              var n = x(),
                r = T()(t.createDttm)
                  .add(1, "hour")
                  .format("YYYY-MM-DD HH:mm:ss");
              return (0, C.BX)(h.View, {
                className: "ship-order-status-bar",
                children: [
                  (0, C.tZ)(h.Image, {
                    src: null == t ? void 0 : t.statusIcon,
                    className: "icon",
                  }),
                  (0, C.BX)(h.View, {
                    className: "flex-1",
                    children: [
                      (0, C.tZ)(h.View, {
                        className: "status",
                        children: null == t ? void 0 : t.status,
                      }),
                      n &&
                        (0, C.BX)(h.View, {
                          className: "pay-desc",
                          children: [
                            "余票变动频繁, 请在",
                            (0, C.tZ)(b.ZtCountdown, {
                              endTime: r,
                              isShowDay: !1,
                              isShowHour: !1,
                              format: { minute: "分", second: "秒" },
                              className: "pay-down",
                            }),
                            "内完成支付",
                          ],
                        }),
                      !n &&
                        !(null == t || !t.orderSubDesc) &&
                        (0, C.tZ)(h.View, {
                          className: "pay-desc",
                          children: null == t ? void 0 : t.orderSubDesc,
                        }),
                    ],
                  }),
                  (0, C.BX)(h.View, {
                    className: "price-wrap",
                    id: "AOAq",
                    onClick: function () {
                      return i(!0);
                    },
                    children: [
                      (0, C.tZ)(h.View, { className: "unit", children: "¥" }),
                      (0, C.tZ)(h.View, {
                        className: "price",
                        children: null == t ? void 0 : t.totalFee,
                      }),
                      (0, C.tZ)(h.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_gdd@3x.png",
                        className: "arr",
                      }),
                    ],
                  }),
                ],
              });
            }),
            R = i(50185),
            X = (0, w.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              var t,
                i,
                n = e.orderDetail;
              if (!n) return (0, C.tZ)(h.View, {});
              var r =
                (null == n ||
                null === (t = n.ticketElement) ||
                void 0 === t ||
                null === (i = t.ticketDetail) ||
                void 0 === i
                  ? void 0
                  : i[0]) || {};
              return (0,
              C.tZ)(R.Z, { className: "ship-common-notice-board", isFromOrderDetail: !0, refreshNoticeParams: { fromTime: (null == r ? void 0 : r.fromDate) + " " + (null == r ? void 0 : r.fromTime), fromCity: null == r ? void 0 : r.fromCityName, toCity: null == r ? void 0 : r.toCityName, fromStation: null == r ? void 0 : r.fromStationName, toStation: null == r ? void 0 : r.toStationName, productType: "ship", website: null == n ? void 0 : n.bookingWebsite, plateNumber: null == n ? void 0 : n.shipName } });
            }),
            M = i(4102),
            L = i(49120),
            A = i(39886);
          function F() {
            O();
          }
          function O() {
            var e = y.getPage();
            e.freezePullDown(),
              (0, L.showLoading)("加载中..."),
              (0, A.kR)({ orderId: e.orderId })
                .then(function (e) {
                  1 === (null == e ? void 0 : e.code) && null != e && e.data
                    ? y
                        .getDispatch()
                        .orderDetailModel.setOrderDetail(
                          null == e ? void 0 : e.data
                        )
                    : (y.getDispatch().orderDetailModel.setOrderDetail(null),
                      (0, L.showToast)(
                        (null == e ? void 0 : e.message) ||
                          "网络异常，请稍后再试"
                      ));
                })
                .catch(function (e) {
                  console.log(e), (0, L.showToast)("网络异常，请稍后再试");
                })
                .finally(function () {
                  (0, L.hideLoading)(),
                    e.unfreezePullDown(),
                    y.getDispatch().orderDetailModel.setIsLoading(!1);
                });
          }
          var q = function (e) {
              y.getDispatch().orderDetailModel.setShowRulePop(e);
            },
            z =
              null === v.default || void 0 === v.default
                ? void 0
                : v.default.isTieyou,
            j = (0, w.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              var t,
                i,
                n = e.orderDetail;
              if (!n) return (0, C.tZ)(h.View, {});
              var r =
                  (null == n ||
                  null === (t = n.ticketElement) ||
                  void 0 === t ||
                  null === (i = t.ticketDetail) ||
                  void 0 === i
                    ? void 0
                    : i[0]) || {},
                a = T()(null == n ? void 0 : n.fromDttm).format("M月D日"),
                o = T()(null == n ? void 0 : n.fromDttm).format("HH:mm"),
                l = null == r ? void 0 : r.toTime,
                c = M.Z.getWeekDayDesc(null == n ? void 0 : n.fromDttm),
                s = T()(null == r ? void 0 : r.toDate).format("M月D日"),
                d = M.Z.getWeekDayDesc(null == r ? void 0 : r.toDate);
              return (0, C.BX)(h.View, {
                className: "ship-order-trip-detail ".concat(z ? " ty" : "zx"),
                children: [
                  (0, C.BX)(h.View, {
                    className: "time-wrap",
                    children: [
                      (0, C.tZ)(h.View, {
                        className: "from-tag",
                        children: "出发",
                      }),
                      (0, C.BX)(h.View, {
                        className: "flex-1 time",
                        children: [
                          null == r ? void 0 : r.fromCityName,
                          "-",
                          null == r ? void 0 : r.toCityName,
                          " ",
                          a,
                          " ",
                          c,
                        ],
                      }),
                      (0, C.BX)(h.View, {
                        className: "flex-align-items-center",
                        id: "AOAr",
                        onClick: function () {
                          return q(!0);
                        },
                        children: [
                          (0, C.tZ)(h.View, {
                            className: "tip",
                            children: "退改签说明",
                          }),
                          (0, C.tZ)(h.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_gd2@3x.png",
                            className: "arr",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.BX)(h.View, {
                    className: "detail-wrap",
                    children: [
                      (0, C.BX)(h.View, {
                        className: "detail-from",
                        children: [
                          (0, C.BX)(h.View, {
                            className: "date",
                            children: [a, " ", c],
                          }),
                          (0, C.tZ)(h.View, {
                            className: "detail-time",
                            children: o,
                          }),
                          (0, C.tZ)(h.View, {
                            className: "station",
                            children: null == n ? void 0 : n.fromStationName,
                          }),
                        ],
                      }),
                      (0, C.BX)(h.View, {
                        className: "flex-1 ship-wrap",
                        children: [
                          (0, C.BX)(h.View, {
                            className: "number-wrap",
                            children: [
                              (0, C.tZ)(h.View, { className: "line left" }),
                              (0, C.tZ)(h.View, {
                                className: "number flex-center",
                                children: null == n ? void 0 : n.shipName,
                              }),
                              (0, C.tZ)(h.View, { className: "line right" }),
                            ],
                          }),
                          !(null == n || !n.useTimeFmt) &&
                            (0, C.tZ)(h.View, {
                              className: "cost-time",
                              children: null == n ? void 0 : n.useTimeFmt,
                            }),
                        ],
                      }),
                      (0, C.BX)(h.View, {
                        className: "detail-to",
                        children: [
                          (0, C.BX)(h.View, {
                            className: "date",
                            children: [s, " ", d],
                          }),
                          (0, C.tZ)(h.View, {
                            className: "detail-time",
                            children: l,
                          }),
                          (0, C.tZ)(h.View, {
                            className: "station",
                            children: null == n ? void 0 : n.toStationName,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            E = i(90129),
            $ = function (e) {
              var t,
                i,
                n = e.passenger,
                r = (0, m.useState)(!1),
                a = (0, E.Z)(r, 2),
                o = a[0],
                l = a[1],
                c =
                  (null == n || null === (t = n.ticketUserList) || void 0 === t
                    ? void 0
                    : t[0]) || {},
                s = c.identityName,
                d = c.birthDate,
                u = c.identityCode,
                f = c.identityType,
                p = [];
              return (
                d && p.push({ title: "出生日期", val: d }),
                f && u && p.push({ title: f, val: u }),
                (0, C.BX)(h.View, {
                  className: "passenger",
                  children: [
                    (0, C.BX)(h.View, {
                      className: "info-wrap",
                      children: [
                        (0, C.tZ)(h.Text, { className: "name", children: s }),
                        null == n || null === (i = n.tagList) || void 0 === i
                          ? void 0
                          : i.map(function (e, t) {
                              return (0,
                              C.tZ)(h.View, { className: "tag ".concat(1 === e.type ? "fetcher" : ""), children: e.name }, t);
                            }),
                        (0, C.tZ)(h.View, { className: "flex-1" }),
                        (0, C.BX)(h.View, {
                          className: "flex-center",
                          id: "AOAi",
                          onClick: function () {
                            return l(!o);
                          },
                          children: [
                            (0, C.tZ)(h.Text, {
                              className: "more-txt",
                              children: "证件信息",
                            }),
                            (0, C.tZ)(h.Image, {
                              className: "arrow",
                              src: o
                                ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_zkd@3x.png"
                                : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icongd@3x.png",
                            }),
                          ],
                        }),
                      ],
                    }),
                    o &&
                      (0, C.tZ)(h.View, {
                        children:
                          null == p
                            ? void 0
                            : p.map(function (e, t) {
                                return (0,
                                C.BX)(h.View, { className: "card-wrap", children: [(0, C.tZ)(h.View, { className: "card-title", children: e.title }), (0, C.tZ)(h.View, { className: "card-value", children: e.val })] }, t);
                              }),
                      }),
                  ],
                })
              );
            },
            _ = (0, w.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              var t,
                i = e.orderDetail,
                n =
                  null == i || null === (t = i.ticketElement) || void 0 === t
                    ? void 0
                    : t.ticketDetail;
              if (null == n || !n.length) return (0, C.tZ)(h.View, {});
              var r = i.seatName,
                a = [];
              return (
                n.forEach(function (e) {
                  var t,
                    i = [],
                    n =
                      (null == e ||
                      null === (t = e.ticketUserList) ||
                      void 0 === t
                        ? void 0
                        : t[0]) || {},
                    o = n.isFetcher,
                    l = n.passengerType;
                  o && i.push({ name: "取票人", type: 1 }),
                    i.push({ name: l, type: 2 }),
                    i.push({ name: r, type: 2 }),
                    (e.tagList = i),
                    a.push(e);
                }),
                (0, C.tZ)(h.View, {
                  className: "ship-order-passengers",
                  children:
                    null == n
                      ? void 0
                      : n.map(function (e, t) {
                          return (0, C.tZ)($, { passenger: e }, t);
                        }),
                })
              );
            }),
            Y = (0, w.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              return e.orderDetail
                ? (0, C.BX)(h.View, {
                    className: "ship-order-trip-card",
                    children: [(0, C.tZ)(j, {}), (0, C.tZ)(_, {})],
                  })
                : (0, C.tZ)(h.View, {});
            }),
            H = i(93761),
            U = i(25297);
          function W(e) {
            return e.map(function (e, t) {
              console.error(e);
              var i = e.fetcherQrcode,
                n = e.ticketPerson,
                r = e.seatNum,
                a = "data:image/png;base64,",
                o = (i.indexOf(a) > -1 ? i : "".concat(a).concat(i)).replace(
                  /[\r\n]/g,
                  ""
                );
              return (0,
              C.tZ)(h.SwiperItem, { children: (0, C.BX)(h.View, { className: "qritem", children: [(0, C.tZ)(h.View, { className: "name", children: n }), (0, C.tZ)(h.Image, { className: "qrimg", src: "".concat(o) }), !!r && (0, C.BX)(h.View, { className: "num", children: ["座位号", r] })] }, t) });
            });
          }
          var Q = m.default.memo(function (e) {
            var t = e.infos,
              i = (0, m.useState)(0),
              n = (0, E.Z)(i, 2),
              r = n[0];
            if ((n[1], !t)) return (0, C.tZ)(h.View, {});
            var a = t[r];
            return (
              a.ticketNum,
              a.verifyCode,
              a.fromStation,
              a.toStation,
              a.seatNum,
              a.seatName,
              t.length,
              (0, C.tZ)(h.View, {
                className: "ship-ticket-qrcode-component",
                children: (0, C.tZ)(h.Swiper, {
                  vertical: !1,
                  previousMargin: "80px",
                  nextMargin: "80px",
                  className: "qrcodes-wrap",
                  children: W(t),
                }),
              })
            );
          });
          function G(e) {
            switch (e) {
              case "pay":
                !(function () {
                  var e = y.getPage().orderId;
                  H.ZP.doPayment({
                    orderNumber: String(e),
                    business: "ship",
                    title: "船票订单",
                  })
                    .then(function () {
                      O();
                    })
                    .catch(function () {
                      O();
                    });
                })();
                break;
              case "oneMore":
                !(function () {
                  var e,
                    t,
                    i = y.getPage(),
                    n = y.getState().orderDetailModel.orderDetail,
                    r =
                      (null == n ||
                      null === (e = n.ticketElement) ||
                      void 0 === e ||
                      null === (t = e.ticketDetail) ||
                      void 0 === t
                        ? void 0
                        : t[0]) || {},
                    a = r.fromDate,
                    o = r.fromCityName,
                    l = r.toCityName,
                    c = "/pages/ship/list/list?mDate="
                      .concat(a, "&mFrom=")
                      .concat(o, "&mTo=")
                      .concat(l);
                  i.navigateTo({ url: c });
                })();
                break;
              case "buyReturn":
                !(function () {
                  var e,
                    t,
                    i = y.getPage(),
                    n = y.getState().orderDetailModel.orderDetail,
                    r =
                      (null == n ||
                      null === (e = n.ticketElement) ||
                      void 0 === e ||
                      null === (t = e.ticketDetail) ||
                      void 0 === t
                        ? void 0
                        : t[0]) || {},
                    a = r.fromDate,
                    o = r.fromCityName,
                    l = r.toCityName,
                    c = T()(a).add(1, "day").format("YYYY-MM-DD"),
                    s = "/pages/ship/list/list?mDate="
                      .concat(c, "&mFrom=")
                      .concat(l, "&mTo=")
                      .concat(o);
                  i.navigateTo({ url: s });
                })();
                break;
              case "cancel":
                !(function () {
                  var e = y.getPage(),
                    t = y.getState().orderDetailModel.orderDetail;
                  e.showMultiButtonDialog({
                    title: "",
                    content: "确定取消订单吗？",
                    leftButtonName: "取消",
                    rightButtonName: "确定",
                    onRightButtonClick: function () {
                      (0, L.showLoading)("正在取消..."),
                        (0, A.ok)({
                          orderNumber: null == t ? void 0 : t.orderNumber,
                        })
                          .then(function (e) {
                            (0, L.hideLoading)(),
                              1 === (null == e ? void 0 : e.code)
                                ? ((0, L.showToast)("取消成功"), O())
                                : (0, L.showToast)(
                                    (null == e ? void 0 : e.message) ||
                                      "取消失败"
                                  );
                          })
                          .catch(function () {
                            (0, L.showToast)("网络异常，请稍后再试");
                          });
                    },
                  });
                })();
                break;
              case "invoice":
                ee();
                break;
              case "change":
                te();
                break;
              case "refund":
                K();
            }
          }
          var J,
            K = function () {
              var e;
              null === (e = y.getPage().$refundLayer) ||
                void 0 === e ||
                e.handleRefund();
            },
            ee = function () {
              (0, L.showToast)("小程序暂不支持该操作");
            },
            te = function () {
              (0, L.showToast)("小程序暂不支持该操作");
            },
            ie = (0, w.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              var t = e.orderDetail;
              if (!t) return (0, C.tZ)(h.View, {});
              var i = (0, m.useState)(!1),
                n = (0, E.Z)(i, 2),
                r = n[0],
                a = n[1],
                o = (0, m.useState)([]),
                l = (0, E.Z)(o, 2),
                c = l[0],
                s = l[1];
              return (
                (0, m.useEffect)(
                  function () {
                    var e,
                      i,
                      n,
                      r,
                      a = (null == t ? void 0 : t.fetcherInfo) || {},
                      o = a.fetcherTicketNumber,
                      l = a.fetcherTicketCode,
                      c = a.fetcherType,
                      d = a.isQrCode,
                      u = [];
                    null != t &&
                      t.fetcherPhoneNum &&
                      u.push({
                        name: "手机号",
                        desc: null == t ? void 0 : t.fetcherPhoneNum,
                      }),
                      null != t &&
                        null !== (e = t.location) &&
                        void 0 !== e &&
                        null !== (i = e.ticketPort) &&
                        void 0 !== i &&
                        i.address &&
                        u.push({
                          name: "取票地点",
                          desc:
                            null == t ||
                            null === (n = t.location) ||
                            void 0 === n ||
                            null === (r = n.ticketPort) ||
                            void 0 === r
                              ? void 0
                              : r.address,
                        }),
                      null != t &&
                        t.carNumber &&
                        u.push({
                          name: "上船车辆",
                          desc:
                            (null == t ? void 0 : t.carType) +
                            " " +
                            (null == t ? void 0 : t.carNumber),
                        }),
                      o && u.push({ name: "取票号", desc: o }),
                      l && u.push({ name: "取票密码", desc: l }),
                      c && u.push({ name: "取票方式", desc: c }),
                      (1 != d && 2 != d) ||
                        (1 == (null == t ? void 0 : t.isBack)
                          ? (u.push({
                              name: "去程二维码",
                              desc: "点击查看",
                              type: "qrcode",
                            }),
                            u.push({
                              name: "返程二维码",
                              desc: "点击查看",
                              type: "backqrcode",
                            }))
                          : u.push({
                              name: "二维码",
                              desc: "点击查看",
                              type: "qrcode",
                            })),
                      u.push({
                        name: "订单号",
                        desc: null == t ? void 0 : t.orderNumber,
                      }),
                      s(u);
                  },
                  [t]
                ),
                (0, C.BX)(h.View, {
                  className: "ship-order-pick-ticket",
                  children: [
                    (0, C.BX)(h.View, {
                      className: "title-wrap",
                      children: [
                        (0, C.tZ)(h.View, {
                          className: "flex-1 title",
                          children: "取票信息",
                        }),
                        (0, C.BX)(h.View, {
                          className: "flex-center",
                          id: "AOAj",
                          onClick: function () {
                            return a(!r);
                          },
                          children: [
                            (0, C.tZ)(h.View, {
                              className: "info-txt",
                              children: "详情",
                            }),
                            (0, C.tZ)(h.Image, {
                              className: "arrow",
                              src: r
                                ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_zkd@3x.png"
                                : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icongd@3x.png",
                            }),
                          ],
                        }),
                      ],
                    }),
                    r &&
                      (0, C.tZ)(h.View, {
                        className: "flex-align-items-center info-ls",
                        children: (0, C.tZ)(h.View, {
                          className: "flex-1",
                          children:
                            null == c
                              ? void 0
                              : c.map(function (e, t) {
                                  return (0, C.BX)(
                                    h.View,
                                    {
                                      className: "item",
                                      id: "AOAk",
                                      onClick: function () {
                                        ("qrcode" != e.type &&
                                          "backqrcode" != e.type) ||
                                          (function () {
                                            var e,
                                              t =
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0] &&
                                                arguments[0],
                                              i = y.getPage(),
                                              n =
                                                y.getState().orderDetailModel
                                                  .orderDetail,
                                              r = i.orderId,
                                              a = {
                                                orderNumber: r,
                                                qrShowType:
                                                  (null == n ||
                                                  null ===
                                                    (e = n.fetcherInfo) ||
                                                  void 0 === e
                                                    ? void 0
                                                    : e.qrShowType) || 2,
                                                isBack: t,
                                              };
                                            (0, U.vQ)(a, {
                                              cacheControl: {
                                                useCache: !0,
                                                maxAge: 6e4,
                                                dedup: !0,
                                                dedupingInterval: 500,
                                              },
                                            })
                                              .then(function (e) {
                                                var t;
                                                1 == e.code &&
                                                  i.showCommonDrawer({
                                                    title:
                                                      (null == n ||
                                                      null ===
                                                        (t = n.fetcherInfo) ||
                                                      void 0 === t
                                                        ? void 0
                                                        : t.qrCodeDes) ||
                                                      "请凭二维码检票上船",
                                                    content: function () {
                                                      return (0, C.tZ)(h.View, {
                                                        children: (0, C.tZ)(Q, {
                                                          infos: e.data,
                                                        }),
                                                      });
                                                    },
                                                    className:
                                                      "ship-qrCode-pop",
                                                  });
                                              })
                                              .catch(function () {});
                                          })("qrcode" == e.type);
                                      },
                                      children: [
                                        (0, C.tZ)(h.View, {
                                          className: "name",
                                          children: null == e ? void 0 : e.name,
                                        }),
                                        (0, C.tZ)(h.View, {
                                          className: "value ".concat(
                                            "qrcode" ===
                                              (null == e ? void 0 : e.type) ||
                                              "backqrcode" == e.type
                                              ? "color-primary"
                                              : ""
                                          ),
                                          children: null == e ? void 0 : e.desc,
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                        }),
                      }),
                  ],
                })
              );
            }),
            ne = (0, w.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              var t = e.orderDetail;
              return (function () {
                var e = y.getState().orderDetailModel.orderDetail;
                return !!(
                  (null == e ? void 0 : e.orderOperateElement) || []
                ).find(function (e) {
                  return "cancelOrder" == e.operate;
                });
              })() && t
                ? (0, C.tZ)(h.View, {
                    className: "ship-order-cancel-btn",
                    id: "AOAg",
                    onClick: function () {
                      return G("cancel");
                    },
                    children: "取消订单",
                  })
                : (0, C.tZ)(h.View, {});
            }),
            re = (0, w.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              return e.orderDetail
                ? (0, C.BX)(h.View, {
                    className: "ship-order-actions flex",
                    children: [
                      x() &&
                        (0, C.tZ)(h.View, {
                          className: "btn flex-1 pay",
                          id: "AOAd",
                          onClick: function () {
                            return G("pay");
                          },
                          children: "立即支付",
                        }),
                      P() &&
                        (0, C.tZ)(h.View, {
                          className: "btn flex-1 left ".concat(
                            v.default.isTieyou ? "ty" : "zx"
                          ),
                          id: "AOAe",
                          onClick: function () {
                            return G("oneMore");
                          },
                          children: "再来一单",
                        }),
                      P() &&
                        (0, C.tZ)(h.View, {
                          className: "btn flex-1 right",
                          id: "AOAf",
                          onClick: function () {
                            return G("buyReturn");
                          },
                          children: "购买返程",
                        }),
                    ],
                  })
                : (0, C.tZ)(h.View, {});
            }),
            ae = (0, w.$j)(
              function (e) {
                var t = e.orderDetailModel;
                return { orderDetail: t.orderDetail, isShow: t.isShowPricePop };
              },
              function (e) {
                var t = e.orderDetailModel;
                return {
                  onShowPricePop: function (e) {
                    return t.setIsShowPricePop(e);
                  },
                };
              }
            )(function (e) {
              var t,
                i = e.isShow,
                n = e.onShowPricePop,
                r = e.orderDetail;
              return (0, C.tZ)(b.ZtDrawer, {
                title: "价格明细",
                show: i,
                closeIconParams: { color: "#ccc" },
                className: "ship-order-price-detail-pop",
                onClose: function () {
                  return n(!1);
                },
                onWrapClose: function () {
                  return n(!1);
                },
                children: (0, C.BX)(h.View, {
                  className: "content",
                  children: [
                    (0, C.BX)(h.View, {
                      className: "total-wrap",
                      children: [
                        (0, C.tZ)(h.View, {
                          className: "name",
                          children: "订单总价",
                        }),
                        (0, C.BX)(h.View, {
                          className: "val",
                          children: ["¥", null == r ? void 0 : r.totalFee],
                        }),
                      ],
                    }),
                    null == r || null === (t = r.priceDetail) || void 0 === t
                      ? void 0
                      : t.map(function (e, t) {
                          return (0,
                          C.BX)(h.View, { className: "item", children: [(0, C.tZ)(h.View, { className: "name", children: null == e ? void 0 : e.statement }), (0, C.BX)(h.View, { className: "val", children: [null == e ? void 0 : e.price, "x", null == e ? void 0 : e.count] })] }, t);
                        }),
                  ],
                }),
              });
            }),
            oe = (0, w.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              var t = e.orderDetail,
                i = (function () {
                  var e = y.getState().orderDetailModel.orderDetail,
                    t = [];
                  if (!e) return t;
                  var i = e.processState,
                    n = e.userCancel,
                    r = e.isReplenishInvoice;
                  return (
                    ((!B() || "3" == i || "4" == i) && B()) ||
                      x() ||
                      "1" == n ||
                      (r && t.push({ name: "补寄发票", type: "invoice" }),
                      t.push({ name: "改签", type: "change" }),
                      t.push({ name: "退票", type: "refund" })),
                    t
                  );
                })();
              return null != i && i.length && t
                ? (0, C.tZ)(h.View, {
                    className: "ship-order-actions-view",
                    children: i.map(function (e, t) {
                      return (0, C.tZ)(
                        h.View,
                        {
                          className: "item flex-center",
                          id: "AOAh",
                          onClick: function () {
                            return G(null == e ? void 0 : e.type);
                          },
                          children: e.name,
                        },
                        t
                      );
                    }),
                  })
                : (0, C.tZ)(h.View, {});
            }),
            le = i(22276),
            ce = i(74921),
            se = ["selectTicketIds"],
            de = (function (e) {
              (0, s.Z)(i, e);
              var t = (0, d.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, o.Z)(this, i),
                  ((n = t.call(this, e)).state = {
                    orderDetailData: null,
                    showLayer: !1,
                    canRefund: !1,
                    selectTicketIds: [],
                    processState: null,
                    status: null,
                  }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "handleRefund",
                    value: (function () {
                      var e = (0, a.Z)(
                        (0, r.Z)().mark(function e() {
                          return (0, r.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (this.props.orderId) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 2:
                                    return (
                                      (e.next = 4), this.getOrderDetailPromise()
                                    );
                                  case 4:
                                    this.setState({ showLayer: !0 });
                                  case 5:
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
                    key: "applyReturnTicketPromise",
                    value: (function () {
                      var e = (0, a.Z)(
                        (0, r.Z)().mark(function e() {
                          var t, i, n, a, o;
                          return (0, r.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((e.prev = 0),
                                      (0, f.showLoading)("退票中..."),
                                      (t = this.state),
                                      (i = t.selectTicketIds),
                                      (n = t.orderDetailData),
                                      i.length || !n.isRefundByTicket)
                                    ) {
                                      e.next = 6;
                                      break;
                                    }
                                    return (
                                      (0, L.showToast)("请选择需要退票的乘客~"),
                                      e.abrupt("return")
                                    );
                                  case 6:
                                    return (
                                      (a = {
                                        orderNumber: this.props.orderId,
                                        ticketIds: i,
                                      }),
                                      (e.next = 9),
                                      (0, A.fN)(a)
                                    );
                                  case 9:
                                    if (
                                      ((o = e.sent),
                                      (0, L.hideLoading)(),
                                      1 == (null == o ? void 0 : o.code))
                                    ) {
                                      e.next = 13;
                                      break;
                                    }
                                    throw new Error("退票失败");
                                  case 13:
                                    return (
                                      (0, L.showToast)("退票成功！"),
                                      e.abrupt("return", !0)
                                    );
                                  case 17:
                                    (e.prev = 17),
                                      (e.t0 = e.catch(0)),
                                      (0, L.hideLoading)(),
                                      (0, L.showToast)("退票失败！");
                                  case 21:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[0, 17]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "getOrderDetailPromise",
                    value: (function () {
                      var e = (0, a.Z)(
                        (0, r.Z)().mark(function e() {
                          var t, i, n, a;
                          return (0, r.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      (0, A.kR)({ orderId: this.props.orderId })
                                    );
                                  case 3:
                                    (t = e.sent),
                                      (i = this.getRefundNoticeData(
                                        1 == t.code && t.data
                                      )),
                                      (n = i.selectTicketIds),
                                      (a = (0, ce.Z)(i, se)),
                                      this.setState({
                                        orderDetailData: a,
                                        canRefund: this.isCanRefund(t.data),
                                        processState: t.processState,
                                        status: t.status,
                                        selectTicketIds: n,
                                      }),
                                      (e.next = 11);
                                    break;
                                  case 8:
                                    (e.prev = 8),
                                      (e.t0 = e.catch(0)),
                                      this.setState({ orderDetailData: null });
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
                    key: "isCanRefund",
                    value: function (e) {
                      return (
                        (e.orderOperateElement || []).some(function (e) {
                          return "refundOrder" == e.operate;
                        }) && 1 != e.bookingFlag
                      );
                    },
                  },
                  {
                    key: "getRefundNoticeData",
                    value: function (e) {
                      var t,
                        i = e || {},
                        n = i.refundDeadline,
                        r = i.ticketReturnType,
                        a = i.totalReturnHaddingFee,
                        o = i.totalReturnFee,
                        l = i.ruleDesc,
                        c = i.ticketElement,
                        s = i.seatName,
                        d = (l || {}).rule,
                        u = void 0 === d ? [] : d,
                        m = (c || {}).ticketDetail,
                        h = void 0 === m ? [] : m,
                        f = "1" == r,
                        p = 0,
                        v = [];
                      return (
                        f
                          ? h.forEach(function (e) {
                              if (
                                e.ticketUserList &&
                                e.ticketUserList.length > 0
                              ) {
                                var t = [];
                                e.ticketUserList.forEach(function (i) {
                                  i.identityName != e.identityName &&
                                    t.push(i.identityName);
                                }),
                                  v.push({
                                    id: e.id,
                                    name:
                                      e.identityName +
                                      (t.length ? "(" + t.join(" ") + ")" : ""),
                                    seatName: s,
                                    canRefund: 1 == e.isRefundByTicket,
                                    returnState: e.userClient.returnStateDesc,
                                    refundFeeInfo: e.refundFeeInfo,
                                  });
                              }
                            })
                          : ((p = a), (t = o)),
                        {
                          refundDeadLine: n,
                          refundHaddingFee: p,
                          refundTotalFee: t,
                          refundRuleDesc: u.find(function (e) {
                            return e.title.indexOf("退票须知") > -1;
                          }),
                          ticketList: v,
                          isRefundByTicket: f,
                          selectTicketIds: f
                            ? 1 === (null == h ? void 0 : h.length)
                              ? null == h
                                ? void 0
                                : h.map(function (e) {
                                    return Number(e.id);
                                  })
                              : []
                            : null == h
                            ? void 0
                            : h.map(function (e) {
                                return Number(e.id);
                              }),
                        }
                      );
                    },
                  },
                  {
                    key: "onPassengerSelect",
                    value: function (e) {
                      var t = this.state.selectTicketIds.findIndex(function (
                        t
                      ) {
                        return e.id === t;
                      });
                      this.setState({
                        selectTicketIds:
                          t > -1
                            ? [].concat(
                                (0, le.Z)(
                                  this.state.selectTicketIds.slice(0, t)
                                ),
                                (0, le.Z)(
                                  this.state.selectTicketIds.slice(t + 1)
                                )
                              )
                            : [].concat((0, le.Z)(this.state.selectTicketIds), [
                                e.id,
                              ]),
                      });
                    },
                  },
                  {
                    key: "onRefundClick",
                    value: (function () {
                      var e = (0, a.Z)(
                        (0, r.Z)().mark(function e() {
                          var t = this;
                          return (0, r.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      this.applyReturnTicketPromise()
                                    );
                                  case 2:
                                    if (e.sent) {
                                      e.next = 5;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 5:
                                    this.setState({ showLayer: !1 }),
                                      setTimeout(function () {
                                        t.props.onApplyReturnTicketCompleted &&
                                          t.props.onApplyReturnTicketCompleted();
                                      }, 500);
                                  case 7:
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
                    key: "getRefundFeeByTicket",
                    value: function () {
                      var e = this.state.orderDetailData.ticketList,
                        t = this.state.selectTicketIds;
                      if (t.length) {
                        var i = 0,
                          n = 0;
                        return (
                          e.forEach(function (e) {
                            t.indexOf(e.id) > -1 &&
                              ((n += e.refundFeeInfo.refundHaddingFee),
                              (i += e.refundFeeInfo.refundFee));
                          }),
                          { totalFee: i, haddingFee: n }
                        );
                      }
                      return { totalFee: "0", haddingFee: "0" };
                    },
                  },
                  {
                    key: "onCloseLayer",
                    value: function () {
                      this.setState({ showLayer: !1 });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e,
                        t,
                        i,
                        n,
                        r,
                        a,
                        o = this,
                        l = this.state,
                        c = l.orderDetailData,
                        s = l.showLayer,
                        d = l.selectTicketIds,
                        u = l.canRefund,
                        m = l.processState,
                        f = l.status;
                      if (u && (null == c ? void 0 : c.ticketList.length) > 0) {
                        var p = this.getRefundFeeByTicket();
                        (r = p.haddingFee), (a = p.totalFee);
                      } else
                        (r = null == c ? void 0 : c.refundHaddingFee),
                          (a = null == c ? void 0 : c.refundTotalFee);
                      var v = function (e) {
                        return e.isSelected
                          ? (0, C.tZ)(h.View, { className: "pass-selected" })
                          : (0, C.tZ)(h.View, { className: "pass-select" });
                      };
                      return (0, C.tZ)(b.ZtActivityPop, {
                        className: "ship-refund-layer-component",
                        isShowClose: !1,
                        show: s,
                        animation: "comeup",
                        children: (0, C.BX)(h.View, {
                          className: "ship-refund-layer-content",
                          catchMove: !0,
                          children: [
                            (0, C.BX)(h.View, {
                              className: "head-content",
                              children: [
                                "退票提醒",
                                (0, C.tZ)(h.View, {
                                  className: "close-cycle-btn",
                                  id: "AOAl",
                                  onClick: this.onCloseLayer.bind(this),
                                }),
                              ],
                            }),
                            (0, C.BX)(h.ScrollView, {
                              scrollY: !0,
                              className: "body-scroll-content",
                              children: [
                                u &&
                                  (null == c ||
                                  null === (e = c.ticketList) ||
                                  void 0 === e
                                    ? void 0
                                    : e.length) > 0 &&
                                  (0, C.BX)(h.View, {
                                    className: "passenger-selector",
                                    children: [
                                      (0, C.tZ)(h.Text, {
                                        className: "title",
                                        children: "选择需要退票的乘客",
                                      }),
                                      null == c ||
                                      null === (t = c.ticketList) ||
                                      void 0 === t
                                        ? void 0
                                        : t.map(function (e, t) {
                                            return (0,
                                            C.BX)(h.View, { className: "passenger-item", id: "AOAm", onClick: o.onPassengerSelect.bind(o, e), children: [(0, C.BX)(h.View, { className: "passenger-name", children: [" ", e.name] }), (0, C.BX)(h.View, { className: "right", children: [e.canRefund && (0, C.tZ)(h.Text, { className: "seat-name", children: e.seatName || "一层前A区" }), e.canRefund ? (0, C.tZ)(v, { isSelected: d.indexOf(e.id) > -1 }) : (0, C.tZ)(h.Text, { className: "select-disable-text", children: e.returnState })] })] }, t);
                                          }),
                                    ],
                                  }),
                                u
                                  ? (0, C.BX)(h.View, {
                                      className: "fee-detail",
                                      children: [
                                        (0, C.tZ)(h.Text, {
                                          className: "title",
                                          children: "费用说明",
                                        }),
                                        (0, C.BX)(h.View, {
                                          className: "fee-detail-item",
                                          children: [
                                            (0, C.tZ)(h.View, {
                                              className: "detail-name",
                                              children: "退款截止时间",
                                            }),
                                            (0, C.tZ)(h.View, {
                                              className: "detail-desc",
                                              children:
                                                null == c
                                                  ? void 0
                                                  : c.refundDeadLine,
                                            }),
                                          ],
                                        }),
                                        (0, C.BX)(h.View, {
                                          className: "fee-detail-item",
                                          children: [
                                            (0, C.tZ)(h.View, {
                                              className: "detail-name",
                                              children: "预计手续费",
                                            }),
                                            (0, C.tZ)(h.View, {
                                              className: "detail-desc",
                                              children: (0, C.tZ)(h.Text, {
                                                className: "detail-desc-price",
                                                children: r,
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, C.BX)(h.View, {
                                          className: "fee-detail-item",
                                          children: [
                                            (0, C.tZ)(h.View, {
                                              className: "detail-name",
                                              children: "预计退款金额",
                                            }),
                                            (0, C.tZ)(h.View, {
                                              className: "detail-desc",
                                              children: (0, C.tZ)(h.Text, {
                                                className: "detail-desc-price",
                                                children: a,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : (0, C.tZ)(h.View, {
                                      className: "fee-no-refund-text",
                                      children:
                                        "7" == m || "11" == m
                                          ? (0, C.BX)(h.Text, {
                                              children: ["该订单", f],
                                            })
                                          : (0, C.tZ)(h.Text, {
                                              children: "该订单暂不支持退票",
                                            }),
                                    }),
                                (null == c ||
                                null === (i = c.refundRuleDesc) ||
                                void 0 === i ||
                                null === (n = i.rules) ||
                                void 0 === n
                                  ? void 0
                                  : n.length) > 0 &&
                                  (0, C.BX)(h.View, {
                                    className: "refund-desc-area",
                                    children: [
                                      (0, C.tZ)(h.Text, {
                                        className: "title",
                                        children: "退票须知",
                                      }),
                                      (0, C.tZ)(h.View, {
                                        className: "refund-desc-content",
                                        scrollY: !0,
                                        children: c.refundRuleDesc.rules.map(
                                          function (e, t) {
                                            return (0, C.tZ)(
                                              h.View,
                                              {
                                                className: "rule-li",
                                                children: (0, C.tZ)(h.Text, {
                                                  children: e,
                                                }),
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
                            (0, C.tZ)(h.View, {
                              className: "ship-refund-layer-bottom-content",
                              children: u
                                ? (0, C.BX)(h.Block, {
                                    children: [
                                      (0, C.tZ)(h.View, {
                                        className: "cancel-btn",
                                        id: "AOAn",
                                        onClick: this.onCloseLayer.bind(this),
                                        children: "取消",
                                      }),
                                      (0, C.tZ)(h.View, {
                                        className: "sure-btn",
                                        id: "AOAo",
                                        onClick: this.onRefundClick.bind(this),
                                        children: "确认退票",
                                      }),
                                    ],
                                  })
                                : (0, C.tZ)(h.View, {
                                    className: "sure-btn",
                                    id: "AOAp",
                                    onClick: this.onCloseLayer.bind(this),
                                    children: "知道了",
                                  }),
                            }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(m.default.PureComponent),
            ue = i(31251),
            me = (0, w.$j)(function (e) {
              var t = e.orderDetailModel;
              return { orderDetail: t.orderDetail, isShow: t.isShowRulePop };
            })(function (e) {
              var t = e.orderDetail,
                i = e.isShow;
              return t
                ? (0, C.tZ)(ue.Z, {
                    visible: i,
                    instructionList:
                      (null == t ? void 0 : t.instructionsDesc) || [],
                    onClose: function () {
                      return q(!1);
                    },
                  })
                : (0, C.tZ)(h.View, {});
            }),
            he =
              (0, V.h)(!1, { usePageWrapper: !0 })(
                (J = (function (e) {
                  (0, s.Z)(i, e);
                  var t = (0, d.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, o.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, u.Z)((0, c.Z)(n), "pageTitle", "订单详情"),
                      (0, u.Z)(
                        (0, c.Z)(n),
                        "pageRootClassName",
                        "ship-order-detail"
                      ),
                      (0, u.Z)((0, c.Z)(n), "pageContentIsFullScreen", !0),
                      (n.store = y.create((0, c.Z)(n)).store),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          Z.ZP.isLogin ||
                            Z.ZP.doLogin()
                              .then(function () {})
                              .catch(function () {}),
                            this.setPageData();
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          F();
                        },
                      },
                      {
                        key: "onPullDownRefresh",
                        value: (function () {
                          var e = (0, a.Z)(
                            (0, r.Z)().mark(function e() {
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.t0 = !this.isFreezePullDown),
                                          !e.t0)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (e.next = 4), F();
                                      case 4:
                                        p().stopPullDownRefresh();
                                      case 5:
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
                        key: "setPageData",
                        value: function () {
                          var e = (this.$instance.router.params || {}).orderId;
                          this.orderId = e;
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            i,
                            n = this;
                          return (0, C.BX)(w.zt, {
                            store: this.store,
                            children: [
                              (0, C.BX)(h.View, {
                                className: "content",
                                children: [
                                  (0, C.tZ)(I, {}),
                                  (0, C.tZ)(X, {}),
                                  (0, C.tZ)(Y, {}),
                                  (0, C.tZ)(oe, {}),
                                  (0, C.tZ)(ie, {}),
                                  (0, C.tZ)(ne, {}),
                                  (0, C.tZ)(h.View, {
                                    className: "flex-center",
                                    children: (0, C.tZ)(h.Image, {
                                      className: "ship-order-logo",
                                      src: v.default.isTieyou
                                        ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_ty@3x.png"
                                        : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_zx@3x.png",
                                    }),
                                  }),
                                ],
                              }),
                              (0, C.tZ)(re, {}),
                              (0, C.tZ)(ae, {}),
                              (0, C.tZ)(de, {
                                orderId:
                                  null === (e = this.$instance) ||
                                  void 0 === e ||
                                  null === (t = e.router) ||
                                  void 0 === t ||
                                  null === (i = t.params) ||
                                  void 0 === i
                                    ? void 0
                                    : i.orderId,
                                ref: function (e) {
                                  n.$refundLayer = e;
                                },
                                onApplyReturnTicketCompleted: function () {
                                  return F();
                                },
                              }),
                              (0, C.tZ)(me, {}),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(m.default.Component))
              ) || J;
          Page(
            (0, n.createPageConfig)(
              he,
              "pages/ship/orderdetail/orderdetail",
              { root: { cn: [] } },
              {
                backgroundColor: "#099fde",
                navigationBarTitleText: "订单详情",
                navigationStyle: "custom",
                enablePullDownRefresh: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [606, 3322, 36332, 95854, 8014, 81198, 2632, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(46150);
          }
        ),
          e.O();
      },
    ]);
})();
