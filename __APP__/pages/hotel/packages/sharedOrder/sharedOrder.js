!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [95435],
      {
        69919: function (e, a, t) {
          var i,
            o = t(32180),
            c = t(57042),
            n = t(24460),
            r = t(21867),
            s = t(86066),
            l = t(298),
            d = t(52500),
            h = t(71515),
            u = t(34229),
            m = t(92954),
            f = t.n(m),
            p = t(48792),
            N = t.n(p),
            g = t(79792),
            k = t(27113),
            w = t(18783),
            I = t(79910),
            y = t(79404),
            D = t(8271),
            v = t.n(D),
            V = t(49120),
            Z = t(92667),
            b = t(90668),
            T = t(81957),
            B = t(48813),
            P = "YYYY-MM-DD",
            L = {
              pageId: "10650086492",
              data: {
                orderId: "",
                fromPage: "",
                isTieyou: g.default.isTieyou,
                orderDetailData: {},
                geoList: [],
                invoiceInfo: {},
                roomPriceList: [],
                payTypes: [],
                orderStateChangeInfo: {},
                activityInfo: {},
                cashBackInfo: {},
                limitRightsCashBackInfo: {},
                levelUpgradeInfo: {},
                vipDayActivityInfo: {},
                couponInfo: {},
                refundStatusInfo: {},
                memberRightInfo: {},
                cardInfo: {},
                hotelMapping: {},
                couponPackage: {},
                ladderDeductionList: [],
                orderRemark: "",
                invoiceStr: "",
                displayPriceDetail: !1,
                totalDiscountPrice: 0,
                promotionList: [],
                discountList: [],
                scenicSpotInfo: null,
                isNewCustomer: !1,
                useFlag: !1,
                couponItem: null,
                hotelCouponToken: "",
                isLogin: !1,
              },
              onLoad: function (e) {
                var a = e.orderId,
                  t = e.fromPage || "";
                return (
                  this.setData({ orderId: a, fromPage: t }),
                  f().hideShareMenu(),
                  this.checkHotelCouponList(),
                  w.ZP.isLogin && this.setData({ isLogin: !0 }),
                  this
                );
              },
              onReady: function () {},
              onShow: function () {
                this.getHotelOrderDetail();
              },
              onHide: function () {},
              onUnload: function () {
                "booking" == this.data.fromPage &&
                  f().reLaunch({
                    url: "/pages/myctrip/list/list?orderType=hotel",
                  });
              },
              onPullDownRefresh: function () {
                this.getHotelOrderDetail();
              },
              onReachBottom: function () {},
              onShareAppMessage: function () {},
              getHotelOrderDetail: function () {
                var e = this;
                (0, V.showLoading)();
                var a = {
                  data: {
                    orderNumber: this.data.orderId,
                    version: y.Z.clientVersion,
                  },
                };
                (0, Z.Nk)(a)
                  .then(function (a) {
                    if (
                      ((0, V.hideLoading)(),
                      f().stopPullDownRefresh(),
                      a.resultCode && a.data)
                    ) {
                      var t = "";
                      if (1 == a.data.payFlag) {
                        var i = a.data.lastPayTime.replace(/\-/g, "/");
                        t = "请在" + v()(i).format("HH:mm") + "前完成支付";
                      } else t = a.data.orderStateRemark;
                      var o = "";
                      if (a.data.needInvoiceFlag && a.data.invoiceInfo) {
                        var c = a.data.invoiceInfo;
                        1 == c.invoiceType
                          ? ((o = "电子发票"),
                            (0, b.Q6)(c.billStatus) ||
                              (o = o + "(" + c.billStatus + ")"),
                            (0, b.Q6)(c.title) || (o = o + "\n" + c.title),
                            (0, b.Q6)(c.email) || (o = o + "\n" + c.email))
                          : (o =
                              c.state +
                              "\n" +
                              c.title +
                              " " +
                              c.contactName +
                              "\n" +
                              c.address);
                      } else
                        o =
                          2 == a.data.invoiceTargetType
                            ? "如需发票，可向酒店索取"
                            : "";
                      var n = 0,
                        r = [];
                      if (!(0, b.Qr)(a.data.cardInfo)) {
                        n += a.data.cardInfo.discountPrice;
                        var s = {};
                        (s.name = a.data.cardInfo.cardName || "会员价"),
                          (s.price = Math.abs(a.data.cardInfo.discountPrice)),
                          r.push(s);
                      }
                      if (!(0, b.Qr)(a.data.couponInfo)) {
                        n += a.data.couponInfo.couponPrice;
                        var l = {};
                        (l.name = a.data.couponInfo.couponName || "优惠券"),
                          (l.price = Math.abs(a.data.couponInfo.couponPrice)),
                          r.push(l);
                      }
                      if (!(0, b.Qr)(a.data.activityInfo)) {
                        n += a.data.activityInfo.activityPrice;
                        var d = {};
                        (d.name =
                          a.data.activityInfo.activityName || "促销活动"),
                          (d.price = Math.abs(
                            a.data.activityInfo.activityPrice
                          )),
                          r.push(d);
                      }
                      var h = a.data.roomPriceList[1],
                        u = [];
                      (0, b.Q6)(h) ||
                        ((n += Math.abs(h.totalPrice)),
                        h.priceDetailList.forEach(function (e) {
                          var a = e;
                          (a.price = Math.abs(e.price)), u.push(a);
                        })),
                        a.data.cancelRemark &&
                          (a.data.cancelRemark = a.data.cancelRemark.replace(
                            /<[\s\S]*?>/g,
                            ""
                          )),
                        e.setData({
                          orderDetailData: a.data,
                          geoList: a.data.geoList ? a.data.geoList : [],
                          invoiceInfo: a.data.invoiceInfo
                            ? a.data.invoiceInfo
                            : {},
                          roomPriceList: a.data.roomPriceList
                            ? a.data.roomPriceList
                            : [],
                          payTypes: a.data.payTypes ? a.data.payTypes : [],
                          orderStateChangeInfo: a.data.orderStateChangeInfo
                            ? a.data.orderStateChangeInfo
                            : {},
                          activityInfo: a.data.activityInfo
                            ? a.data.activityInfo
                            : {},
                          cashBackInfo: a.data.cashBackInfo
                            ? a.data.cashBackInfo
                            : {},
                          limitRightsCashBackInfo: a.data
                            .limitRightsCashBackInfo
                            ? a.data.limitRightsCashBackInfo
                            : {},
                          levelUpgradeInfo: a.data.levelUpgradeInfo
                            ? a.data.levelUpgradeInfo
                            : {},
                          vipDayActivityInfo: a.data.vipDayActivityInfo
                            ? a.data.vipDayActivityInfo
                            : {},
                          couponInfo: a.data.couponInfo
                            ? a.data.couponInfo
                            : {},
                          refundStatusInfo: a.data.refundStatusInfo
                            ? a.data.refundStatusInfo
                            : {},
                          memberRightInfo: a.data.memberRightInfo
                            ? a.data.memberRightInfo
                            : {},
                          cardInfo: a.data.cardInfo ? a.data.cardInfo : {},
                          hotelMapping: a.data.hotelMapping
                            ? a.data.hotelMapping
                            : {},
                          couponPackage: a.data.couponPackage
                            ? a.data.couponPackage
                            : {},
                          ladderDeductionList: a.data.ladderDeductionList
                            ? a.data.ladderDeductionList
                            : [],
                          orderRemark: t,
                          invoiceStr: o,
                          totalDiscountPrice: n,
                          promotionList: r,
                          discountList: u || [],
                        });
                    }
                  })
                  .catch(function () {
                    (0, V.hideLoading)(),
                      (0, V.showToast)("网络请求错误，请重试"),
                      f().stopPullDownRefresh();
                  });
              },
              mapNavigation: function () {
                var e,
                  a = this,
                  t = a.data.geoList,
                  i = a.data.orderDetailData.hotelName,
                  o = a.data.orderDetailData.address;
                t.length > 0 &&
                  t.forEach(function (a) {
                    3 == a.type && (e = a);
                  }),
                  f().openLocation({
                    latitude: parseFloat(e.lat),
                    longitude: parseFloat(e.lon),
                    name: i,
                    address: o,
                  });
              },
              contactHotel: function () {
                var e = this.data.orderDetailData.phoneNumber;
                e && f().makePhoneCall({ phoneNumber: e });
              },
              gotoHotelDetail: function () {
                var e =
                    v()().valueOf() -
                      v()(this.data.orderDetailData.checkInDate).valueOf() >
                    0,
                  a = {
                    cityId: this.data.orderDetailData.cityId,
                    queryBitMap: this.data.orderDetailData.queryBitMap,
                    checkInDate: e
                      ? v()().format(P)
                      : this.data.orderDetailData.checkInDate,
                    checkOutDate: e
                      ? v()().add(1, "day").format(P)
                      : this.data.orderDetailData.checkOutDate,
                  },
                  t = {
                    hotelId: this.data.orderDetailData.hotelId,
                    name: this.data.orderDetailData.hotelName,
                    hotelType: 1,
                    zone: "",
                  },
                  i = {
                    query: (0, l.Z)(
                      (0, l.Z)({}, a),
                      {},
                      { source: "orderdetail_clickhotel|" + this.data.pageId }
                    ),
                    hotel: t,
                    geoList: this.data.geoList,
                  };
                this.navigateTo({ url: "/pages/hotel/detail/detail", data: i });
              },
              goTicketHome: function () {
                this.navigateTo({
                  url: "/pages/taroCRN/ticket/pages/index/index?source=hotel_detail&cityID="
                    .concat(this.scenicSpotCityId, "&cityName=")
                    .concat(this.scenicSpotCityName),
                });
              },
              onShowRefundMessage: function () {
                f().showToast({
                  title: "请在".concat(
                    g.default.isTieyou ? "铁友" : "智行",
                    "火车票内查看"
                  ),
                  icon: "none",
                  duration: 2e3,
                });
              },
              showPriceDetail: function () {
                this.setData({ displayPriceDetail: !0 });
              },
              closePriceDetail: function () {
                this.setData({ displayPriceDetail: !1 });
              },
              makeCall: function () {
                var e = g.default.isTieyou ? "02160668555" : "02160668666";
                f().makePhoneCall({ phoneNumber: e });
              },
              checkHotelCouponList: function () {
                var e = this;
                (0, Z.wy)({
                  data: {
                    source: "wechatTrainOrderDetail",
                    clientVersion: y.Z.clientVersion,
                  },
                }).then(function (a) {
                  var t = {};
                  if (1 === a.resultCode) {
                    if (a.data.couponList && a.data.couponList.length > 0)
                      if (
                        -1 !==
                        a.data.couponList.findIndex(function (e) {
                          return 0 === e.promotionType;
                        })
                      )
                        t = a.data.couponList.find(function (e) {
                          return 0 === e.promotionType;
                        });
                      else {
                        (t = a.data.couponList
                          .filter(function (e) {
                            return 0 !== e.promotionType;
                          })
                          .reduce(function (e, a) {
                            return e.couponPrice < a.couponPrice ? a : e;
                          })),
                          console.log("res-----\x3e", t);
                      }
                    a.data.token &&
                      (t = { couponName: "酒店新客券", couponPrice: 50 });
                    var i = 0 !== Object.keys(t).length;
                    e.setData({
                      isNewCustomer: !!a.data.token,
                      useFlag: i,
                      couponItem: t,
                      hotelCouponToken: a.data.token,
                    });
                  }
                });
              },
              receiveHotelCoupon: function () {
                var e = this,
                  a = {
                    data: {
                      token: this.data.hotelCouponToken,
                      clientVersion: y.Z.clientVersion,
                    },
                  };
                (0, Z.io)(a)
                  .then(function (a) {
                    a &&
                    a.data &&
                    a.data.couponList &&
                    a.data.couponList.length > 0
                      ? (f().showToast({
                          title: "领取成功",
                          icon: "success",
                          duration: 1500,
                        }),
                        setTimeout(function () {
                          e.checkHotelCouponList();
                        }, 1e3))
                      : f().showToast({ title: "领取失败", duration: 1500 });
                  })
                  .catch(function (e) {
                    f().showToast({
                      title: (!!e && e.message) || "领取失败，请检查网络",
                      duration: 1500,
                    });
                  });
              },
              clickCoupon: function () {
                var e = this;
                w.ZP.isLogin
                  ? this.data.isNewCustomer
                    ? this.receiveHotelCoupon()
                    : this.bookHotel()
                  : w.ZP.doLogin()
                      .then(function () {
                        e.setData({ isLogin: !0 }), e.checkHotelCouponList();
                      })
                      .catch(function () {
                        console.log("login error");
                      });
              },
              bookHotel: function () {
                var e = this.data.orderDetailData,
                  a = e.cityId,
                  t = e.cityName,
                  i = this.data.orderDetailData,
                  o = i.checkInDate,
                  c = void 0 === o ? "" : o,
                  n = i.checkOutDate,
                  r = void 0 === n ? "" : n;
                v()(c).valueOf() < v()().valueOf() &&
                  ((c = v()().format(P)), (r = v()().add(1, "day").format(P)));
                var s = {
                  queryModel: {
                    cityName: t,
                    cityId: a,
                    checkInDate: c,
                    checkOutDate: r,
                  },
                };
                this.navigateTo({
                  url: ""
                    .concat("/pages/hotel/list/list", "?data=")
                    .concat(encodeURIComponent(JSON.stringify(s))),
                });
              },
              clickMoreHotel: function () {
                var e = this;
                f().getSetting({
                  success: function (a) {
                    console.log("getSetting---\x3e", a),
                      1 == a.authSetting["scope.userLocation"] ||
                      a.authSetting.location
                        ? e.beginLocate(function (e) {
                            f().reLaunch({
                              url: "/pages/home/index?tab=hotel&d=".concat(
                                JSON.stringify(e)
                              ),
                            });
                          })
                        : I.Z.relaunchHome("hotel");
                  },
                });
              },
              beginLocate: function (e) {
                (0, k.PA)(
                  function (a) {
                    (a.isGeo = !0), e && e(a);
                  },
                  function (a) {
                    e && e(a);
                  }
                ),
                  this.setData({ hasLocation: !0 });
              },
            },
            C =
              (0, T.h)()(
                (i =
                  N()(L)(
                    (i = (function (e) {
                      (0, r.Z)(t, e);
                      var a = (0, s.Z)(t);
                      function t() {
                        return (0, c.Z)(this, t), a.apply(this, arguments);
                      }
                      return (
                        (0, n.Z)(t, [
                          {
                            key: "render",
                            value: function () {
                              var e = this.data,
                                a = e.isTieyou,
                                t = e.orderDetailData,
                                i = e.orderRemark,
                                o = e.cashBackInfo,
                                c = e.limitRightsCashBackInfo,
                                n = e.deductionStr,
                                r = e.useFlag,
                                s = e.isLogin,
                                l = e.couponItem,
                                d = e.isNewCustomer,
                                m = e.invoiceStr;
                              return (0, B.BX)(h.Block, {
                                children: [
                                  (0, B.BX)(h.View, {
                                    className: "hotel-box",
                                    children: [
                                      (0, B.tZ)(h.View, {
                                        className:
                                          "hotel-arcbox  " + (a ? "ty" : "zx"),
                                        children: (0, B.BX)(h.View, {
                                          className: "hotel-order-status",
                                          children: [
                                            (0, B.tZ)(h.View, {
                                              className: "lbox",
                                              children: (0, B.tZ)(h.Text, {
                                                className: "ifont-suc iconfont",
                                              }),
                                            }),
                                            (0, B.BX)(h.View, {
                                              className: "cont",
                                              children: [
                                                (0, B.tZ)(h.View, {
                                                  className: "tit",
                                                  children: t.orderStateDesc,
                                                }),
                                                (0, B.tZ)(h.View, {
                                                  className: "txt",
                                                  children: i,
                                                }),
                                              ],
                                            }),
                                            t.refundStatusInfo &&
                                              (0, B.tZ)(h.View, {
                                                className: "right",
                                                id: "AXHH",
                                                onClick:
                                                  this.onShowRefundMessage,
                                                children: (0, B.BX)(h.View, {
                                                  className: "rightTit",
                                                  children: [
                                                    "退款进度",
                                                    (0, B.tZ)(h.Text, {
                                                      className:
                                                        "ifont-arr iconfont",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                          ],
                                        }),
                                      }),
                                      (0, B.BX)(h.View, {
                                        className:
                                          "hotel-white-box hotel-order-top",
                                        children: [
                                          0 == t.payFlag &&
                                            (0, B.BX)(h.View, {
                                              className: "order-pay",
                                              children: [
                                                (0, B.BX)(h.View, {
                                                  className: "p",
                                                  children: [
                                                    t.payTypeDesc,
                                                    t.orderPrice &&
                                                      (0, B.tZ)(h.Text, {
                                                        className:
                                                          "price color-red",
                                                        children: t.orderPrice,
                                                      }),
                                                    (0, B.tZ)(h.Text, {
                                                      className: "color-red",
                                                      children: t.priceRemark,
                                                    }),
                                                  ],
                                                }),
                                                t.payHotelPrice &&
                                                  (0, B.tZ)(h.View, {
                                                    className: "p",
                                                    children: t.payHotelPrice
                                                      ? "到店支付 ¥" +
                                                        t.payHotelPrice
                                                      : "",
                                                  }),
                                                o.cashBackPrice &&
                                                  (0, B.BX)(h.View, {
                                                    className: "p",
                                                    children: [
                                                      "离店返现",
                                                      (0, B.tZ)(h.Text, {
                                                        className:
                                                          "price color-red",
                                                        children:
                                                          o.cashBackPrice,
                                                      }),
                                                      (0, B.tZ)(h.Text, {
                                                        className: "tgrey",
                                                        children:
                                                          "离店后可到我的钱包中查看",
                                                      }),
                                                    ],
                                                  }),
                                                c.cashBackPrice &&
                                                  (0, B.BX)(h.View, {
                                                    className: "p",
                                                    children: [
                                                      c.cashBackName,
                                                      (0, B.tZ)(h.Text, {
                                                        className:
                                                          "price color-red",
                                                        children:
                                                          c.cashBackPrice,
                                                      }),
                                                      (0, B.tZ)(h.Text, {
                                                        className: "tgrey",
                                                        children:
                                                          "离店后可到我的钱包中查看",
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          (0, B.BX)(h.View, {
                                            className: "order-ads",
                                            children: [
                                              (0, B.BX)(h.View, {
                                                className: "tit name",
                                                id: "AXHI",
                                                onClick: this.gotoHotelDetail,
                                                children: [
                                                  t.hotelName,
                                                  (0, B.tZ)(h.Text, {
                                                    className:
                                                      "ifont-arr iconfont",
                                                  }),
                                                ],
                                              }),
                                              (0, B.tZ)(h.View, {
                                                className: "txt",
                                                children: t.address,
                                              }),
                                              (0, B.BX)(h.View, {
                                                className: "oper",
                                                children: [
                                                  (0, B.BX)(h.Button, {
                                                    id: "AXHJ",
                                                    onClick: this.mapNavigation,
                                                    className: "btn-primary",
                                                    "data-ubt-key":
                                                      "wechat_DD_navigation",
                                                    children: [
                                                      (0, B.tZ)(h.Text, {
                                                        className:
                                                          "ifont-lacation iconfont",
                                                      }),
                                                      "地图导航",
                                                    ],
                                                  }),
                                                  (0, B.BX)(h.Button, {
                                                    id: "AXHK",
                                                    onClick: this.contactHotel,
                                                    className: "btn-primary",
                                                    "data-ubt-key":
                                                      "wechat_DD_call",
                                                    children: [
                                                      (0, B.tZ)(h.Text, {
                                                        className:
                                                          "ifont-tel iconfont",
                                                      }),
                                                      "联系酒店",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, B.BX)(h.View, {
                                            className: "order-house",
                                            children: [
                                              (0, B.tZ)(h.View, {
                                                className: "tit",
                                                children: t.roomName,
                                              }),
                                              t.checkNum &&
                                                (0, B.tZ)(h.View, {
                                                  className: "txt",
                                                  children:
                                                    t.checkInDate +
                                                    " -- " +
                                                    t.checkOutDate +
                                                    " " +
                                                    t.checkDayNum +
                                                    "晚" +
                                                    t.checkNum +
                                                    "间",
                                                }),
                                              (0, B.tZ)(h.View, {
                                                className: "txt",
                                                children:
                                                  t.bedType +
                                                  " " +
                                                  t.breakfastType +
                                                  " " +
                                                  t.broadnetType,
                                              }),
                                            ],
                                          }),
                                          t.cancelRemark &&
                                            (0, B.tZ)(h.View, {
                                              className: "order-tips",
                                              children: t.cancelRemark,
                                            }),
                                          "已取消" !== t.orderStateDesc &&
                                            n &&
                                            (0, B.tZ)(h.View, {
                                              className: "order-str",
                                              children: (0, B.tZ)(
                                                u.ZtRichText,
                                                {
                                                  className: "order-txt",
                                                  nodes: n,
                                                }
                                              ),
                                            }),
                                        ],
                                      }),
                                      !r &&
                                        s &&
                                        (0, B.BX)(h.View, {
                                          className: "hotel-order-discount",
                                          children: [
                                            (0, B.BX)(h.View, {
                                              className: "txt",
                                              children: [
                                                (0, B.BX)(h.View, {
                                                  className: "tit",
                                                  children: [
                                                    "火车票订单用户专享",
                                                    (0, B.tZ)(h.Text, {
                                                      style: "color: #FC6054;",
                                                      children: "酒店75折",
                                                    }),
                                                  ],
                                                }),
                                                (0, B.BX)(h.View, {
                                                  className: "tag",
                                                  children: [
                                                    (0, B.tZ)(h.Text, {
                                                      className: "item",
                                                      children: "全网比价",
                                                    }),
                                                    (0, B.tZ)(h.Text, {
                                                      className: "item",
                                                      children: "全球覆盖",
                                                    }),
                                                    (0, B.tZ)(h.Text, {
                                                      className: "item",
                                                      children: "全天候服务",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, B.tZ)(h.View, {
                                              className: "btn",
                                              id: "AXHL",
                                              onClick: this.bookHotel,
                                              children: "去使用",
                                            }),
                                          ],
                                        }),
                                      r &&
                                        s &&
                                        (0, B.BX)(h.View, {
                                          className: "hotel-order-coupon",
                                          children: [
                                            (0, B.tZ)(h.View, {
                                              className: "price",
                                              children: (0, B.tZ)(h.Text, {
                                                className: "num",
                                                children: l.couponPrice,
                                              }),
                                            }),
                                            (0, B.BX)(h.View, {
                                              className: "txt",
                                              children: [
                                                (0, B.tZ)(h.View, {
                                                  className: "tit",
                                                  children: l.couponName,
                                                }),
                                                (0, B.tZ)(h.View, {
                                                  className: "sub-tit",
                                                  children: "下单即可使用",
                                                }),
                                              ],
                                            }),
                                            (0, B.tZ)(h.View, {
                                              className: "btn",
                                              id: "AXHM",
                                              onClick: this.clickCoupon,
                                              children: d ? "去领取" : "去使用",
                                            }),
                                          ],
                                        }),
                                      !s &&
                                        (0, B.BX)(h.View, {
                                          className: "hotel-order-coupon",
                                          children: [
                                            (0, B.tZ)(h.View, {
                                              className: "price",
                                              children: (0, B.tZ)(h.Text, {
                                                className: "num",
                                                children: "50",
                                              }),
                                            }),
                                            (0, B.BX)(h.View, {
                                              className: "txt",
                                              children: [
                                                (0, B.tZ)(h.View, {
                                                  className: "tit",
                                                  children: "酒店新客券",
                                                }),
                                                (0, B.tZ)(h.View, {
                                                  className: "sub-tit",
                                                  children: "下单即可使用",
                                                }),
                                              ],
                                            }),
                                            (0, B.tZ)(h.View, {
                                              className: "btn",
                                              id: "AXHN",
                                              onClick: this.clickCoupon,
                                              children: "去领取",
                                            }),
                                          ],
                                        }),
                                      (0, B.BX)(h.View, {
                                        className:
                                          "hotel-white-box hotel-order-info",
                                        children: [
                                          (0, B.tZ)(h.View, {
                                            className: "tit",
                                            children: "预订信息",
                                          }),
                                          (0, B.BX)(h.View, {
                                            className: "item",
                                            children: [
                                              (0, B.tZ)(h.View, {
                                                className: "label",
                                                children: t.contactUser
                                                  ? "入住人"
                                                  : "",
                                              }),
                                              (0, B.tZ)(h.View, {
                                                className: "cont",
                                                children: t.contactUser
                                                  ? "".concat(
                                                      t.contactUser.substr(
                                                        0,
                                                        1
                                                      ),
                                                      "**"
                                                    )
                                                  : "",
                                              }),
                                            ],
                                          }),
                                          (0, B.BX)(h.View, {
                                            className: "item",
                                            children: [
                                              (0, B.tZ)(h.View, {
                                                className: "label",
                                                children: t.contactMobile
                                                  ? "联系电话"
                                                  : "",
                                              }),
                                              (0, B.tZ)(h.View, {
                                                className: "cont",
                                                children: t.contactMobile,
                                              }),
                                            ],
                                          }),
                                          (0, B.BX)(h.View, {
                                            className: "item",
                                            children: [
                                              (0, B.tZ)(h.View, {
                                                className: "label",
                                                children: t.specialRequestRemark
                                                  ? "特别要求"
                                                  : "",
                                              }),
                                              (0, B.tZ)(h.View, {
                                                className: "cont",
                                                children:
                                                  t.specialRequestRemark,
                                              }),
                                            ],
                                          }),
                                          (0, B.BX)(h.View, {
                                            className: "item",
                                            children: [
                                              (0, B.tZ)(h.View, {
                                                className: "label",
                                                children: m ? "发票信息" : "",
                                              }),
                                              (0, B.tZ)(h.View, {
                                                className: "cont",
                                                children: m,
                                              }),
                                            ],
                                          }),
                                          (0, B.BX)(h.View, {
                                            className: "item",
                                            children: [
                                              (0, B.tZ)(h.View, {
                                                className: "label",
                                                children: t.vendorOrderNumber
                                                  ? "订单编号"
                                                  : "",
                                              }),
                                              (0, B.tZ)(h.View, {
                                                className: "cont",
                                                children: t.vendorOrderNumber,
                                              }),
                                            ],
                                          }),
                                          (0, B.BX)(h.View, {
                                            className: "item",
                                            children: [
                                              (0, B.tZ)(h.View, {
                                                className: "label",
                                                children: t.createTime
                                                  ? "预订时间"
                                                  : "",
                                              }),
                                              (0, B.tZ)(h.View, {
                                                className: "cont",
                                                children: t.createTime,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, B.tZ)(h.View, {
                                    className: "botm-box",
                                    id: "AXHO",
                                    onClick: this.clickMoreHotel,
                                    children: (0, B.tZ)(h.Button, {
                                      className: "btn-red",
                                      children: "更多酒店",
                                    }),
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        t
                      );
                    })(d.default.Component))
                  ) || i)
              ) || i;
          (C.enableShareAppMessage = !0),
            Page(
              (0, o.createPageConfig)(
                C,
                "pages/hotel/packages/sharedOrder/sharedOrder",
                { root: { cn: [] } },
                {
                  enablePullDownRefresh: !0,
                  disableScroll: !0,
                  navigationBarTitleText: "",
                  navigationBarFrontColor: "#ffffff",
                  navigationBarBackgroundColor: "#0066E6",
                  backgroundColorTop: "#0066E6",
                  backgroundColorBottom: "#f5f5f5",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (a) {
            return e((e.s = a));
          })(69919);
        }),
          e.O();
      },
    ]);
})();
