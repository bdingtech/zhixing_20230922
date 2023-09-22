!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/87dd7ca508f26cc44a96a97518946752.js"),
    require("../sub-common/1775d7c9f65b9a6f532fd61b25d0faaf.js"),
    require("../sub-common/023c833735f89bfd8e4bfa6050ae7715.js"),
    require("../sub-common/99e1f8a4cc1290fc72ce9bc5d2852868.js"),
    require("../sub-common/6c29063ea7407d5aad2c6709ea72811d.js"),
    require("../sub-common/77d3751beb3e2bc1242396ba7c218030.js"),
    require("../sub-common/c464917dce609cc1e640bf0180e17346.js"),
    require("../sub-common/1bc3053f48eb4d260bc28c0ff4efae15.js"),
    require("../sub-common/b83cfd8d07f3dd9c10aca815df21c2a8.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [66698],
      {
        42155: function (e, t, n) {
          var a = n(32180),
            i = n(57042),
            r = n(24460),
            o = n(81876),
            s = n(21867),
            c = n(86066),
            l = n(45023),
            d = n(74921),
            h = n(22276),
            u = n(79301),
            m = n(298),
            f = n(95308),
            g = n(52500),
            p = n(71515),
            N = n(92954),
            w = n.n(N),
            v = n(48792),
            Z = n.n(v),
            b = n(93761),
            I = n(3205),
            y = n(79404),
            C = n(79910),
            T = n(2326),
            x = n(55916),
            k = n(34229),
            D = n(24383),
            V = n(49120),
            B = n(58676),
            S = n(21999),
            R = n(20592),
            A = n(17917),
            P = n(39173),
            X = n(79792),
            O = n(18783),
            M = n(8271),
            F = n.n(M),
            L = n(4102),
            E = n(90129),
            H = n(48813),
            _ = F()().format("YYYY-MM-DD"),
            z = [
              { title: "50", unit: "元", desc: "酒店新客券" },
              { title: "75", unit: "折", desc: "火车用户专享", tag: "可叠加" },
              { title: "85", unit: "折", desc: "黑钻体验特权", tag: "可叠加" },
            ],
            Y = g.default.memo(function (e) {
              var t,
                n = e.cityName,
                a = e.cityId,
                i = e.pageId,
                r = void 0 === i ? "" : i,
                o = e.checkIn,
                s = void 0 === o ? _ : o,
                c = e.pageInstance,
                l = e.fromPage,
                d = e.onToHotel,
                h = void 0 === d ? function () {} : d;
              console.log("酒店交叉模块", n, a, r, s);
              var u = (0, g.useState)(s),
                m = (0, E.Z)(u, 2),
                f = m[0],
                N = m[1],
                w = (0, g.useState)(F()(f).add(1, "day").format("YYYY-MM-DD")),
                v = (0, E.Z)(w, 2),
                Z = v[0],
                b = v[1],
                y = F()(f).format("M月D号"),
                T = F()(Z).format("M月D号"),
                x = C.Z.getDayDiff(f, Z);
              return n && a
                ? (0, H.BX)(p.View, {
                    className: "cross-book",
                    children: [
                      (0, H.BX)(p.View, {
                        className: "cross-book-wrap",
                        children: [
                          (0, H.BX)(p.View, {
                            className: "left",
                            children: [
                              (0, H.BX)(p.View, {
                                className: "title",
                                children: [
                                  (0, H.BX)(p.Text, {
                                    className: "city-str",
                                    children: ["订", n, "酒店"],
                                  }),
                                  (0, H.tZ)(p.Image, {
                                    className: "tag",
                                    mode: "heightFix",
                                    src:
                                      null != l &&
                                      null !== (t = l.includes) &&
                                      void 0 !== t &&
                                      t.call(l, "flight")
                                        ? "https://images3.c-ctrip.com/ztrip/hotel/dahua/zong/img_plane_75z@3x.png"
                                        : "https://images3.c-ctrip.com/ztrip/train_xie/2022-03/zt_75.png",
                                  }),
                                ],
                              }),
                              (0, H.BX)(p.View, {
                                className: "hotel-sel",
                                id: "AABZ",
                                onClick: function () {
                                  var e = F()(_)
                                    .add(180, "day")
                                    .format("YYYY-MM-DD");
                                  I.Z.calendar(
                                    {
                                      checkInDate: f,
                                      checkOutDate: Z,
                                      beginDate: _,
                                      endDate: e,
                                      type: "checkInOut",
                                      confirmBtn: !0,
                                      bu: "hotel",
                                      showHotelNotice: !1,
                                    },
                                    function (e) {
                                      var t = e.checkInDate,
                                        n = e.checkOutDate;
                                      N(t), b(n);
                                    }
                                  );
                                },
                                children: [
                                  (0, H.BX)(p.View, {
                                    className: "from",
                                    children: [
                                      (0, H.tZ)(p.Text, {
                                        className: "check-date",
                                        children: y,
                                      }),
                                      (0, H.tZ)(p.Text, {
                                        className: "suffix",
                                        children: "入住",
                                      }),
                                    ],
                                  }),
                                  (0, H.tZ)(p.View, {
                                    className: "total",
                                    children: "".concat(x, "晚"),
                                  }),
                                  (0, H.BX)(p.View, {
                                    className: "to",
                                    children: [
                                      (0, H.tZ)(p.Text, {
                                        className: "check-date",
                                        children: T,
                                      }),
                                      (0, H.tZ)(p.Text, {
                                        className: "suffix",
                                        children: "离店",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, H.tZ)(p.View, {
                            className: "right",
                            children: (0, H.tZ)(p.Button, {
                              className: "book-btn",
                              id: "AABa",
                              onClick: function () {
                                h(),
                                  c.navigateTo({
                                    url: "/pages/hotel/list/list",
                                    data: {
                                      queryModel: {
                                        cityId: a,
                                        cityName: n,
                                        checkInDate: f,
                                        checkOutDate: Z,
                                      },
                                      fromPage: l,
                                    },
                                  });
                              },
                              children: "领优惠·订",
                            }),
                          }),
                        ],
                      }),
                      (0, H.tZ)(p.View, {
                        className: "coupon-wrap",
                        children: z.map(function (e, t) {
                          return (0,
                          H.BX)(p.View, { className: "coup", children: [(0, H.tZ)(p.View, { className: "tag-wrap", children: !!e.tag && (0, H.tZ)(p.Text, { className: "tag", children: e.tag }) }), (0, H.BX)(p.View, { className: "title", children: [(0, H.tZ)(p.Text, { children: e.title }), (0, H.tZ)(p.Text, { className: "unit", children: e.unit })] }), (0, H.tZ)(p.View, { className: "desc", children: e.desc })] }, t);
                        }),
                      }),
                    ],
                  })
                : null;
            }),
            U = n(32270),
            j = n(86977),
            G = n(70120),
            W = n(51881),
            q = X.default.isWechat,
            K = (function (e) {
              (0, s.Z)(n, e);
              var t = (0, c.Z)(n);
              function n() {
                var e;
                (0, i.Z)(this, n);
                for (
                  var a = arguments.length, r = new Array(a), s = 0;
                  s < a;
                  s++
                )
                  r[s] = arguments[s];
                return (
                  (e = t.call.apply(t, [this].concat(r))),
                  (0, l.Z)((0, o.Z)(e), "state", { couponPrice: "" }),
                  (0, l.Z)((0, o.Z)(e), "handleClose", function () {
                    C.Z.executeCB(e.props.hotelCouponClose);
                  }),
                  (0, l.Z)((0, o.Z)(e), "goHotel", function () {
                    var t = e.props,
                      n = {
                        cityId: t.arriveCityId,
                        cityName: t.params.arriveCityName,
                      };
                    w().reLaunch({
                      url: "/pages/home/index?tab=hotel&d=".concat(
                        JSON.stringify(n)
                      ),
                    });
                  }),
                  e
                );
              }
              return (
                (0, r.Z)(n, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.getCouponInfo();
                    },
                  },
                  {
                    key: "getCouponInfo",
                    value: function () {
                      var e = this,
                        t = this.props,
                        n = t.params,
                        a = t.orderNumber;
                      n &&
                        (0, P.eW)({
                          data: {
                            orderNumber: a,
                            channel: "flight",
                            arrivalDate: n.arriveDate,
                            stationName: n.arriveCityName,
                          },
                        })
                          .then(function (t) {
                            var n = t.data.couponItem;
                            n &&
                              n.couponPrice &&
                              e.setState({
                                couponPrice: String(n.couponPrice),
                              });
                          })
                          .catch(function () {
                            (0, V.showToast)("网络出了小差，稍后再试～");
                          });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.state.couponPrice;
                      return (0, H.tZ)(W.Z, {
                        inlineStyle: { transform: "translate(-50%, -60%)" },
                        isShow: q && !!e,
                        handleClose: this.handleClose,
                        children: (0, H.tZ)(p.View, {
                          className: "flight-hotel-coupon",
                          children: (0, H.BX)(p.View, {
                            className: "activity-bac",
                            children: [
                              (0, H.BX)(p.View, {
                                className: "header",
                                children: [
                                  (0, H.tZ)(p.Text, {
                                    className: "top",
                                    children: "— 恭喜您获得 —",
                                  }),
                                  (0, H.BX)(p.View, {
                                    className: "center",
                                    children: [
                                      (0, H.tZ)(p.Text, {
                                        className: "unit",
                                        children: "¥",
                                      }),
                                      (0, H.tZ)(p.Text, {
                                        className: "price",
                                        children: e,
                                      }),
                                    ],
                                  }),
                                  (0, H.tZ)(p.Text, {
                                    className: "bottom",
                                    children: "酒店优惠券",
                                  }),
                                ],
                              }),
                              (0, H.tZ)(p.Text, {
                                className: "notice",
                                children: "「 已发放至您的账户 」",
                              }),
                              (0, H.tZ)(p.Button, {
                                className: "sure",
                                id: "AcCw",
                                onClick: this.goHotel.bind(this),
                                children: "去订酒店",
                              }),
                            ],
                          }),
                        }),
                      });
                    },
                  },
                ]),
                n
              );
            })(g.default.PureComponent),
            J = ["预定成功", "预订失败", "已取消", ""],
            Q = g.default.memo(function (e) {
              var t = e.hotelInfo,
                n = t.title,
                a = t.dateDesc,
                i = t.remark,
                r = t.url,
                o = t.state,
                s = J[o];
              return (0, H.BX)(p.View, {
                className: "flight-hotel-info-banner",
                children: [
                  (0, H.BX)(p.View, {
                    className: "banner-hd",
                    children: [
                      (0, H.tZ)(p.View, {
                        className: "prdline-tag",
                        children: "酒店",
                      }),
                      (0, H.tZ)(p.View, {
                        className: "hotel-title",
                        children: n,
                      }),
                      s &&
                        (0, H.tZ)(p.View, {
                          className: "order-message",
                          children: s,
                        }),
                    ],
                  }),
                  (0, H.BX)(p.View, {
                    className: "banner-bd",
                    children: [
                      (0, H.tZ)(p.View, { children: a }),
                      (0, H.BX)(p.View, {
                        className: "bottom-row",
                        children: [
                          (0, H.tZ)(p.View, {
                            className: "hotel-remark",
                            children: i,
                          }),
                          r &&
                            (0, H.BX)(p.View, {
                              className: "detail-btn",
                              id: "AcCx",
                              onClick: function () {
                                return (function (e) {
                                  var t = e.url,
                                    n = C.Z.parseQuery(t).orderId;
                                  w().navigateTo({
                                    url: "/pages/hotel/order/order?orderId=".concat(
                                      n
                                    ),
                                  });
                                })({ url: r });
                              },
                              children: [
                                "详情/退订",
                                (0, H.tZ)(p.View, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            $ = g.default.memo(function (e) {
              var t = e.bannerList,
                n = (0, g.useState)(!0),
                a = (0, E.Z)(n, 2),
                i = a[0],
                r = a[1];
              return (
                (0, g.useEffect)(
                  function () {
                    1 === (null == t ? void 0 : t.length) && r(!1);
                  },
                  [t]
                ),
                (0, H.tZ)(p.Swiper, {
                  autoplay: i,
                  circular: i,
                  vertical: !0,
                  interval: 1500,
                  className: "coupon-swiper",
                  children: t.map(function (t) {
                    return t.isSpringActivity
                      ? (0, H.tZ)(
                          p.SwiperItem,
                          {
                            className: "coupon-swiper-item spring-activity",
                            id: "AcCm",
                            onClick: function () {
                              return e.onBannerItemClick(t);
                            },
                            children: (0, H.BX)(p.View, {
                              className: "banner-coupon",
                              children: [
                                (0, H.tZ)(p.Image, {
                                  className: "icon",
                                  src: t.icon,
                                }),
                                (0, H.BX)(p.View, {
                                  className: "notice-box",
                                  children: [
                                    (0, H.tZ)(k.ZtRichText, {
                                      className: "title",
                                      nodes: t.title,
                                    }),
                                    (0, H.tZ)(p.View, {
                                      className: "content",
                                      children: t.content,
                                    }),
                                  ],
                                }),
                                (0, H.tZ)(p.Text, {
                                  className: "iconfont ifont-arr",
                                }),
                              ],
                            }),
                          },
                          t.code
                        )
                      : (0, H.tZ)(
                          p.SwiperItem,
                          {
                            className: "coupon-swiper-item",
                            children: (0, H.BX)(p.View, {
                              className: "banner-coupon",
                              id: "AcCn",
                              onClick: function () {
                                return e.onBannerItemClick(t);
                              },
                              children: [
                                (0, H.tZ)(p.View, {
                                  className: "icon ".concat(t.icon),
                                }),
                                t.isRichText
                                  ? (0, H.tZ)(p.View, {
                                      className: "coupon-text",
                                      children: (0, H.tZ)(k.ZtRichText, {
                                        nodes: C.Z.convertAppTextToHtmlStr(
                                          t.text
                                        ),
                                        id: "AcCo",
                                        onClick: function () {
                                          return e.onBannerItemClick(t);
                                        },
                                      }),
                                    })
                                  : (0, H.BX)(p.View, {
                                      className: "notice-box",
                                      children: [
                                        (0, H.tZ)(p.View, {
                                          className: "title",
                                          children: t.title,
                                        }),
                                        (0, H.tZ)(p.View, {
                                          className: "content",
                                          children: t.content,
                                        }),
                                      ],
                                    }),
                                (0, H.tZ)(p.Text, {
                                  className: "iconfont ifont-arr",
                                }),
                              ],
                            }),
                          },
                          t.code
                        );
                  }),
                })
              );
            }),
            ee = n(12525),
            te = function (e) {
              var t = e.flightChangeInfo,
                n = e.handleRebook,
                a = e.handleRefund,
                i = t.isChangeOrderRefund,
                r = t.isChangeOrderRebook,
                o = t.changeRefundBtnRemark,
                s = t.changeRescheduleBtnRemark;
              return (0, H.BX)(p.View, {
                className: "flex-align-items-center",
                children: [
                  i &&
                    (0, H.tZ)(p.View, {
                      className: "operate-btn flex-1",
                      id: "AcCs",
                      onClick: a,
                      children: o || "我要退票",
                    }),
                  r &&
                    (0, H.tZ)(p.View, {
                      className: "operate-btn flex-1",
                      id: "AcCt",
                      onClick: n,
                      children: s || "我要改签",
                    }),
                ],
              });
            },
            ne = function (e) {
              var t = e.airCompanyIcon,
                n = e.airCompanyName,
                a = e.flightNumber,
                i = e.departDateTime,
                r = e.statusDesc;
              return (0, H.BX)(p.View, {
                className: "flight-header flex-align-items-center",
                children: [
                  (0, H.BX)(p.View, {
                    className: "flex-1 flex-align-items-center",
                    children: [
                      (0, H.tZ)(p.Image, { src: t, className: "flt-icon" }),
                      (0, H.BX)(p.View, {
                        className: "flt-name",
                        children: [n, a],
                      }),
                      (0, H.tZ)(p.View, { className: "divider" }),
                      (0, H.tZ)(p.View, {
                        className: "dpt-date",
                        children: F()(i).format("MM月DD日"),
                      }),
                    ],
                  }),
                  (0, H.tZ)(p.View, {
                    className: "status-desc",
                    children: (0, H.tZ)(k.ZtRichText, {
                      nodes: r,
                      space: "nbsp",
                    }),
                  }),
                ],
              });
            },
            ae = function (e) {
              var t = e.departAirportName,
                n = e.departTerminal,
                a = e.arriveAirportName,
                i = e.arriveTerminal,
                r = e.departDateTime,
                o = e.arriveDateTime;
              return (0, H.BX)(p.View, {
                className: "flight-body flex",
                children: [
                  (0, H.BX)(p.View, {
                    className: "terminal",
                    children: [
                      (0, H.tZ)(p.View, {
                        className: "time",
                        children: F()(r).format("HH:mm"),
                      }),
                      (0, H.BX)(p.View, {
                        className: "station",
                        children: [t, n],
                      }),
                    ],
                  }),
                  (0, H.tZ)(p.View, {
                    className: "flex-center flex-1",
                    children: (0, H.tZ)(p.Image, {
                      className: "flt-logo",
                      src: "https://pic.c-ctrip.com/train/zt/flight/bookx/icon-fromto.png",
                    }),
                  }),
                  (0, H.BX)(p.View, {
                    className: "terminal",
                    style: { textAlign: "right" },
                    children: [
                      (0, H.tZ)(p.View, {
                        className: "time",
                        children: F()(o).format("HH:mm"),
                      }),
                      (0, H.BX)(p.View, {
                        className: "station",
                        children: [a, i],
                      }),
                    ],
                  }),
                ],
              });
            },
            ie = function (e) {
              var t = e.segmentInfo,
                n = e.flightChangeInfo,
                a = e.handleRebook,
                i = e.handleRefund,
                r = (0, m.Z)(
                  (0, m.Z)({}, t),
                  {},
                  { statusDesc: '<font color="#FF5959">已取消</font>' }
                );
              return (0, H.BX)(p.View, {
                className: "cancel-flt-segment white-box",
                children: [
                  (0, H.tZ)(ne, (0, m.Z)({}, r)),
                  (0, H.tZ)(ae, (0, m.Z)({}, t)),
                  (0, H.tZ)(te, {
                    flightChangeInfo: n,
                    handleRebook: a,
                    handleRefund: i,
                  }),
                ],
              });
            },
            re = function (e) {
              var t = e.originalSegmentInfo,
                n = e.afterSegmentInfo,
                a = e.flightChangeInfo,
                i = e.handleRebook,
                r = e.handleRefund,
                o = e.handleAgree,
                s = (0, m.Z)(
                  (0, m.Z)({}, n),
                  {},
                  { statusDesc: '<font color="#03B86F">调整后</font>' }
                ),
                c = (0, m.Z)(
                  (0, m.Z)({}, t),
                  {},
                  { statusDesc: '<font color="#666">调整前</font>' }
                ),
                l = a.agreeProtectFlightBtnRemark,
                d = a.agreeProtectFlightRemark,
                h = a.agreeProtectPopRemark,
                u = a.isAgreeProtectFlightV2,
                f = a.flightChangeOrderId;
              return (0, H.BX)(H.HY, {
                children: [
                  (0, H.BX)(p.View, {
                    className: "change-flt-segment white-box",
                    children: [
                      (0, H.BX)(p.View, {
                        className: "after",
                        children: [
                          (0, H.tZ)(ne, (0, m.Z)({}, s)),
                          (0, H.tZ)(ae, (0, m.Z)({}, n)),
                        ],
                      }),
                      (0, H.tZ)(p.View, { className: "h-divider" }),
                      (0, H.BX)(p.View, {
                        className: "original",
                        children: [
                          (0, H.tZ)(ne, (0, m.Z)({}, c)),
                          (0, H.tZ)(ae, (0, m.Z)({}, t)),
                        ],
                      }),
                      l &&
                        u &&
                        (0, H.BX)(H.HY, {
                          children: [
                            (0, H.tZ)(p.View, {
                              className: "flex-align-items-center",
                              children: (0, H.tZ)(p.View, {
                                className: "operate-btn flex-1",
                                id: "AcCu",
                                onClick: function () {
                                  var e, t;
                                  if (!h) return o({ flightChangeOrderId: f });
                                  null === (e = (0, N.getCurrentInstance)()) ||
                                    void 0 === e ||
                                    null === (t = e.page) ||
                                    void 0 === t ||
                                    t.showMultiButtonDialog({
                                      title: "温馨提示",
                                      content: h,
                                      leftButtonName: "取消",
                                      rightButtonName: "确定",
                                      onRightButtonClick: function () {
                                        o({ flightChangeOrderId: f });
                                      },
                                    });
                                },
                                children: l,
                              }),
                            }),
                            d &&
                              (0, H.tZ)(p.View, {
                                className: "botm-tip",
                                style: { marginLeft: "4rpx", marginRight: 0 },
                                children: d,
                              }),
                          ],
                        }),
                      (0, H.tZ)(te, {
                        flightChangeInfo: a,
                        handleRebook: i,
                        handleRefund: r,
                      }),
                    ],
                  }),
                  l &&
                    !u &&
                    (0, H.tZ)(H.HY, {
                      children: (0, H.tZ)(p.View, {
                        className: "flex-align-items-center",
                        children: (0, H.tZ)(p.View, {
                          className: "operate-btn flex-1 disabled",
                          style: { margin: "0 16rpx" },
                          children: l,
                        }),
                      }),
                    }),
                ],
              });
            },
            oe = function (e) {
              var t,
                n = e.onClose,
                a = e.flightSegmentInfos,
                i = e.orderType,
                r = e.handleRefund,
                o = e.handleRebook,
                s = e.handleAgree,
                c = (0, g.useState)(0),
                l = (0, E.Z)(c, 2),
                d = l[0],
                h = l[1],
                u = a.filter(function (e) {
                  var t = e.flightChangeInfo,
                    n = e.rebookInfos,
                    a = t && [0, 1].includes(t.changeType),
                    i =
                      null == n
                        ? void 0
                        : n.some(function (e) {
                            return (
                              e.isValid &&
                              e.flightChangeInfo &&
                              [0, 1].includes(e.flightChangeInfo.changeType)
                            );
                          });
                  return a || i;
                }),
                m = [];
              u.length > 1 &&
                (2 == i && (m = ["去程", "返程"]),
                3 == i && (m = ["第一程", "第二程"]),
                5 == i &&
                  u.forEach(function (e) {
                    var t = e.segmentIndex,
                      n = t.segmentType,
                      a = t.sequenceNum,
                      i = ""
                        .concat(1 == n ? "去程" : "返程")
                        .concat(1 == a ? "一" : "二");
                    m.push(i);
                  }));
              var f = u[d],
                N = [];
              f.flightChangeInfo &&
                N.push({
                  type: "origin",
                  flightChangeInfo: f.flightChangeInfo,
                });
              var w = !1;
              null === (t = f.rebookInfos) ||
                void 0 === t ||
                t.forEach(function (e) {
                  var t = e.isValid,
                    n = e.flightChangeInfo;
                  t && (w = !0),
                    t &&
                      n &&
                      [0, 1].includes(n.changeType) &&
                      N.push({
                        type: "rebook",
                        flightChangeInfo: e.flightChangeInfo,
                      });
                });
              var v = N[0].flightChangeInfo,
                Z = v.changeInfoMessage,
                b = v.changeRescheduleRemark;
              return (0, H.BX)(p.View, {
                className: "flt-change-pop-content flex-1 flex flex-column",
                children: [
                  (0, H.BX)(p.View, {
                    className: "flt-pop-hd flex-center",
                    children: [
                      (0, H.BX)(p.View, {
                        className: "flt-title flex-center",
                        children: [
                          (0, H.tZ)(p.Text, {
                            className: "ifont-line-tips iconfont",
                          }),
                          Z,
                        ],
                      }),
                      (0, H.tZ)(p.Image, {
                        src: "https://images3.c-ctrip.com/train/tieyou-mini-img/popup_close.png",
                        className: "close-icon",
                        id: "AcCv",
                        onClick: n,
                      }),
                    ],
                  }),
                  m.length > 0 &&
                    (0, H.tZ)(ee.Z, {
                      tabList: m,
                      onChange: function (e) {
                        return h(e);
                      },
                      className: "flt-change-pop-tab",
                    }),
                  (0, H.BX)(p.View, {
                    className: "flt-pop-bd flex-1",
                    children: [
                      N.map(function (e, t) {
                        var n = e.type,
                          a = e.flightChangeInfo,
                          i = a.changeType,
                          c = a.originalSegmentInfo,
                          l = a.afterSegmentInfo,
                          d = a.lastTime;
                        return (0,
                        H.BX)(H.HY, { children: [w && (0, H.BX)(p.View, { className: "change-info-hd flex-align-items-center", style: t > 0 ? { marginTop: "52rpx" } : {}, children: [(0, H.BX)(p.View, { className: "change-info-title flex-align-items-center flex-1", children: ["origin" == n ? "原航班" : "改签后", "航变"] }), (0, H.tZ)(p.View, { className: "last-time", children: F()(d).format("YYYY-MM-DD HH:mm:ss") })] }), 0 == i && (0, H.tZ)(re, { originalSegmentInfo: c, afterSegmentInfo: l, flightChangeInfo: a, handleRebook: o, handleRefund: r, handleAgree: s }), 1 == i && (0, H.tZ)(ie, { segmentInfo: c, flightChangeInfo: a, handleRebook: o, handleRefund: r })] });
                      }),
                      b &&
                        (0, H.tZ)(p.View, {
                          className: "botm-tip",
                          children: b,
                        }),
                    ],
                  }),
                ],
              });
            },
            se = n(84211),
            ce = n(25949),
            le = n.n(ce),
            de = n(13975),
            he = n(45245),
            ue = function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : function () {},
                a = { data: { version: 1, orderNumber: e.orderNumber } };
              return he.Z.doFetch(de.Km, a, t, n);
            },
            me = function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : function () {},
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : function () {},
                a = e.orderNumber,
                i = e.cancelDirectlyFlag,
                r = e.tokens,
                o = { data: { orderNumber: a } };
              return i || (o.data.tokens = r), he.Z.doFetch(de.eS, o, t, n);
            },
            fe = { borderRadius: "32rpx 32rpx 0 0" },
            ge = g.default.memo(function (e) {
              var t = e.visible,
                n = e.onClose,
                a = e.reload,
                i = void 0 === a ? function () {} : a,
                r = e.refresh,
                o = (0, g.useState)(!1),
                s = (0, E.Z)(o, 2),
                c = s[0],
                l = s[1],
                d = (0, g.useState)([]),
                h = (0, E.Z)(d, 2),
                u = h[0],
                f = h[1],
                N = (0, g.useState)([]),
                w = (0, E.Z)(N, 2),
                v = w[0],
                Z = w[1];
              if (
                ((0, g.useEffect)(
                  function () {
                    t
                      ? v.length > 0
                        ? l(!0)
                        : (function (e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : function () {},
                              n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : function () {},
                              a = { data: { orderNumber: e.orderNumber } };
                            he.Z.doFetch(de.Yb, a, t, n);
                          })(
                            e,
                            function (e) {
                              f(e.products),
                                Z(
                                  e.passengers.map(function (e, t) {
                                    return (0,
                                    m.Z)((0, m.Z)({}, e), {}, { selected: 0 == t });
                                  })
                                ),
                                l(!0);
                            },
                            function () {
                              return n();
                            }
                          )
                      : l(!1);
                  },
                  [t]
                ),
                (0, g.useEffect)(
                  function () {
                    r && (f([]), Z([]));
                  },
                  [r]
                ),
                0 == v.length)
              )
                return (0, H.tZ)(p.View, {});
              var b = v
                  .filter(function (e) {
                    return e.selected;
                  })
                  .map(function (e, t) {
                    return t;
                  }),
                I = u.filter(function (e, t) {
                  return b.includes(t);
                }),
                y = [];
              I.forEach(function (e) {
                var t = y.find(function (t) {
                  return e.productName == t.productName;
                });
                t
                  ? t.count++
                  : y.push((0, m.Z)((0, m.Z)({}, e), {}, { count: 1 }));
              });
              var C = y.reduce(function (e, t) {
                var n;
                return (
                  e +
                  (null === (n = t.refundAmount) || void 0 === n
                    ? void 0
                    : n.zt_multiply(t.count))
                );
              }, 0);
              return (0, H.BX)(k.ZtDrawer, {
                show: c,
                isShowClose: !1,
                onWrapClose: n,
                drawerStyle: fe,
                maxHeight: "80vh",
                className: "package-product-order-pop cancel",
                children: [
                  (0, H.BX)(p.View, {
                    className: "pop-hd flex-align-items-center flex-column",
                    children: [
                      (0, H.tZ)(p.View, {
                        className: "title",
                        children: "申请退订",
                      }),
                      (0, H.tZ)(p.Image, {
                        className: "close-icon",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/xchengxu/icon_close.png",
                        id: "AcCy",
                        onClick: n,
                      }),
                    ],
                  }),
                  (0, H.tZ)(p.View, {
                    className: "pop-bd flex-1",
                    children: (0, H.BX)(p.View, {
                      className: "cancel-package-box white-box",
                      children: [
                        (0, H.tZ)(p.View, {
                          className: "title",
                          children: "请选择退订乘客",
                        }),
                        (0, H.tZ)(p.View, {
                          className: "pas-list flex cancel",
                          children: v.map(function (e, t) {
                            return (0, H.tZ)(
                              p.View,
                              {
                                className: le()("pas-item flex-center", {
                                  cur: e.selected,
                                }),
                                id: "AcCz",
                                onClick: function () {
                                  return (function (e) {
                                    var t = v.slice();
                                    (t[e].selected = !t[e].selected), Z(t);
                                  })(t);
                                },
                                children: e.passengerName,
                              },
                              t
                            );
                          }),
                        }),
                        (0, H.tZ)(p.View, {
                          className: "title",
                          children: "退订产品",
                        }),
                        (0, H.tZ)(p.View, {
                          className: "cancel-product-list",
                          children: y.map(function (e, t) {
                            return (0,
                            H.BX)(p.View, { className: "cancel-product-item flex-align-items-center", children: [(0, H.tZ)(p.View, { className: "name flex-1", children: e.productName }), (0, H.BX)(p.View, { className: "price", children: ["￥", e.refundAmount, "×", e.count] })] }, t);
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, H.BX)(p.View, {
                    className: "pop-btm flex-align-items-center",
                    children: [
                      (0, H.BX)(p.View, {
                        className: "left flex-1",
                        children: [
                          (0, H.tZ)(p.View, {
                            className: "title flex-align-items-center",
                            children: (0, H.tZ)(p.View, {
                              className: "total-price",
                              children: C,
                            }),
                          }),
                          (0, H.tZ)(p.View, {
                            className: "sub-title",
                            children: "可退金额",
                          }),
                          (0, H.tZ)(p.View, { className: !0 }),
                        ],
                      }),
                      (0, H.tZ)(p.View, {
                        className: "right",
                        children: (0, H.tZ)(p.Button, {
                          className: "book-btn",
                          id: "AcDA",
                          onClick: function () {
                            var t = e.orderNumber,
                              a = v
                                .filter(function (e) {
                                  return e.selected;
                                })
                                .map(function (e) {
                                  return e.token;
                                });
                            0 != a.length
                              ? me(
                                  { orderNumber: t, tokens: a },
                                  function () {
                                    i(), f([]), Z([]), n();
                                  },
                                  function () {
                                    n();
                                  }
                                )
                              : (0, V.showToast)("请选择退订乘客");
                          },
                          children: "确认退订",
                        }),
                      }),
                    ],
                  }),
                ],
              });
            }),
            pe = g.default.memo(function (e) {
              var t = e.visible,
                n = e.orderNumber,
                a = e.onClose,
                i = e.showCancelPop,
                r = e.refresh,
                o = e.handleRefundAction,
                s = void 0 === o ? function () {} : o,
                c = (0, g.useState)(!1),
                l = (0, E.Z)(c, 2),
                d = l[0],
                h = l[1],
                u = (0, g.useState)({}),
                f = (0, E.Z)(u, 2),
                N = f[0],
                v = f[1],
                Z = (0, g.useState)(0),
                b = (0, E.Z)(Z, 2),
                I = b[0],
                y = b[1];
              (0, g.useEffect)(
                function () {
                  t
                    ? N[n]
                      ? h(!0)
                      : ue(
                          e,
                          function (e) {
                            var t = (0, m.Z)({}, N);
                            (t[n] = e), v(t), h(!0);
                          },
                          function () {
                            return a();
                          }
                        )
                    : h(!1);
                },
                [t]
              ),
                (0, g.useEffect)(
                  function () {
                    r && v({});
                  },
                  [r]
                );
              var C = N[n];
              if (!C) return (0, H.tZ)(p.View, {});
              var T = C.cancelable,
                x = C.cancelDirectlyFlag,
                D = C.productName,
                B = C.productNotes,
                S = C.rightInfo,
                R = S.passengerRightNotes.map(function (e) {
                  return e.passengerName;
                }),
                A = function (t) {
                  var i = t.type,
                    r = t.state,
                    o = t.url;
                  if (0 == r)
                    if ("CHANGE_REDUCE" != i) {
                      if ("REFUND_REDUCE" == i) return a(), void s();
                      if (o) w().navigateTo({ url: o });
                      else if ("DELAY_RETURN" == i) {
                        var c = function (t) {
                            !(function (e) {
                              var t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : function () {},
                                n =
                                  arguments.length > 2 &&
                                  void 0 !== arguments[2]
                                    ? arguments[2]
                                    : function () {},
                                a = e.orderNumber,
                                i = e.passengerIds,
                                r = {
                                  data: { orderNumber: a, passengerIds: i },
                                };
                              he.Z.doFetch(de.Ut, r, t, n);
                            })(
                              { orderNumber: n, passengerIds: t },
                              function () {
                                ue(
                                  e,
                                  function (e) {
                                    var t = (0, m.Z)({}, N);
                                    (t[n] = e),
                                      v(t),
                                      (0, V.showToast)("领取成功");
                                  },
                                  function () {
                                    return a();
                                  }
                                );
                              },
                              function () {
                                (0, V.showToast)("领取失败");
                              }
                            );
                          },
                          l = S.passengerRightNotes[I].passengerId;
                        if (1 == R.length) return c([l]);
                        var d = 0,
                          h = 0,
                          u = [];
                        return (
                          S.passengerRightNotes.forEach(function (e) {
                            var t = e.items.find(function (e) {
                              return 0 == e.state && "DELAY_RETURN" == e.type;
                            });
                            t && (d++, (h += t.price), u.push(e.passengerId));
                          }),
                          void (0, V.getCurrentPage)().showMultiButtonDialog({
                            title: "温馨提示",
                            content: "当前共有"
                              .concat(
                                d,
                                "个乘机人满足返现领取要求，是否一并领取，总计￥"
                              )
                              .concat(h, "？"),
                            leftButtonName: "仅领取当前",
                            onLeftButtonClick: function () {
                              c([l]);
                            },
                            rightButtonName: "确认",
                            onRightButtonClick: function () {
                              c(u);
                            },
                          })
                        );
                      }
                    } else (0, V.showToast)("请前往原预订渠道使用~");
                };
              return (0, H.BX)(k.ZtDrawer, {
                show: d,
                isShowClose: !1,
                onWrapClose: a,
                drawerStyle: fe,
                height: "80vh",
                maxHeight: "80vh",
                className: "package-product-order-pop",
                children: [
                  (0, H.BX)(p.View, {
                    className: "pop-hd flex-align-items-center flex-column",
                    children: [
                      (0, H.tZ)(p.View, { className: "title", children: D }),
                      (0, H.tZ)(p.Image, {
                        className: "close-icon",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/xchengxu/icon_close.png",
                        id: "AcDB",
                        onClick: a,
                      }),
                    ],
                  }),
                  (0, H.BX)(p.View, {
                    className: "pop-bd flex-1",
                    children: [
                      S &&
                        (0, H.tZ)(p.View, {
                          className: "sub-title",
                          children: S.title || "乘机人权益",
                        }),
                      R.length > 1 &&
                        (0, H.tZ)(p.View, {
                          className: "pas-list flex",
                          children: R.map(function (e, t) {
                            return (0, H.tZ)(
                              p.View,
                              {
                                className: le()("pas-item detail flex-center", {
                                  cur: t == I,
                                  "bd-1rpx": t == I,
                                }),
                                id: "AcDC",
                                onClick: function () {
                                  return (function (e) {
                                    e != I && y(e);
                                  })(t);
                                },
                                children: e,
                              },
                              t
                            );
                          }),
                        }),
                      S &&
                        (0, H.tZ)(p.View, {
                          className: "right-info white-box",
                          children: S.passengerRightNotes[I].items.map(
                            function (e, t) {
                              return (0, H.BX)(
                                p.View,
                                {
                                  className:
                                    "right-item flex-align-items-center",
                                  children: [
                                    (0, H.tZ)(p.View, {
                                      className: le()("left flex-center", {
                                        refund: [
                                          "REFUND_REDUCE",
                                          "CHANGE_REDUCE",
                                        ].includes(e.type),
                                        coupon: ![
                                          "REFUND_REDUCE",
                                          "CHANGE_REDUCE",
                                        ].includes(e.type),
                                      }),
                                      children: e.price,
                                    }),
                                    (0, H.BX)(p.View, {
                                      className: "mid flex-1",
                                      children: [
                                        (0, H.BX)(p.View, {
                                          className:
                                            "right-name flex-align-items-center",
                                          children: [
                                            e.name,
                                            e.rightDesc &&
                                              (0, H.tZ)(p.Text, {
                                                className:
                                                  "ifont-detail iconfont",
                                                id: "AcDD",
                                                onClick: function () {
                                                  return (function (e) {
                                                    var t = e.title,
                                                      n = e.content;
                                                    (0,
                                                    V.getCurrentPage)().showCommonDialog(
                                                      {
                                                        title: t,
                                                        content: n,
                                                        className:
                                                          "package-product",
                                                      }
                                                    );
                                                  })({
                                                    title: e.name,
                                                    content: e.rightDesc,
                                                  });
                                                },
                                              }),
                                          ],
                                        }),
                                        (0, H.tZ)(p.View, {
                                          className: "right-content",
                                          children: (0, H.tZ)(k.ZtRichText, {
                                            nodes: e.content,
                                            space: "nbsp",
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.stateDesc &&
                                      (0, H.tZ)(p.Button, {
                                        className: le()("right-btn", {
                                          disabled: 0 != e.state,
                                        }),
                                        id: "AcDE",
                                        onClick: function () {
                                          return A(e);
                                        },
                                        children: e.stateDesc,
                                      }),
                                  ],
                                },
                                t
                              );
                            }
                          ),
                        }),
                      B &&
                        (0, H.tZ)(p.View, {
                          className: "sub-title",
                          children: B.title,
                        }),
                      B &&
                        (0, H.tZ)(p.View, {
                          className: "product-notes white-box",
                          children: B.items.map(function (e, t) {
                            return (0,
                            H.BX)(p.View, { className: "note-item", children: [(0, H.tZ)(p.View, { className: "note-name", children: e.name }), (0, H.tZ)(p.View, { className: "note-content", children: (0, H.tZ)(k.ZtRichText, { nodes: e.content, space: "nbsp" }) })] }, t);
                          }),
                        }),
                      T &&
                        (0, H.tZ)(p.Button, {
                          className: "cancel-btn",
                          id: "AcDF",
                          onClick: function () {
                            a(),
                              x
                                ? (0, V.getCurrentPage)().showMultiButtonDialog(
                                    {
                                      title: "确定退订出行宝吗",
                                      content:
                                        "申请提交后不可撤销，将尽快为您处理退票",
                                      leftButtonName: "取消",
                                      onLeftButtonClick: function () {},
                                      rightButtonName: "确认",
                                      onRightButtonClick: function () {
                                        me(e, function () {
                                          (0, V.showToast)("退订成功");
                                        });
                                      },
                                    }
                                  )
                                : i();
                          },
                          children: "申请退订",
                        }),
                    ],
                  }),
                ],
              });
            }),
            Ne = function (e) {
              var t = e.flightSegmentInfo,
                n = e.segmentIndex,
                a = e.basicInfo,
                i = e.basicOrderInfo,
                r = e.externalOrderInfo,
                o = e.index,
                s = e.rebookIndex,
                c = e.isTicketChanging,
                l = e.isOrigin,
                d = e.flightChangeType,
                h = n.segmentType,
                u = n.sequenceNum,
                m = t.departCityName,
                f = t.arriveCityName,
                g = t.costTime,
                N = t.departDateTime,
                w = t.departWeekDay,
                v = i.orderType,
                Z = "",
                b = "",
                I = "",
                y = "";
              if (1 == v) {
                var C = !!r.hotelInfo;
                (Z = C ? "机票" : "直飞"),
                  (b = C ? "prdline-tag" : "tag bgcolor-primary"),
                  (y = ""
                    .concat(m, "-")
                    .concat(null == a ? void 0 : a.flightArriveCity, " ")
                    .concat(null == a ? void 0 : a.flightCostTime));
              } else
                2 == v || 3 == v
                  ? ((I = 2 == h ? "mt48" : ""),
                    (Z =
                      2 == v
                        ? 0 == o
                          ? "去程"
                          : "返程"
                        : 0 == o
                        ? "第1程"
                        : "第2程"),
                    (b = "tag bgcolor-primary"),
                    (y = "".concat(m, "-").concat(f, " ").concat(g)))
                  : 4 == v
                  ? ((Z = 0 == o ? "中转1程" : "中转2程"),
                    (b = "tag bgcolor-primary"),
                    (y = "".concat(m, "-").concat(f, " ").concat(g)))
                  : 5 == v &&
                    ((I = 2 == h && 1 == u ? "mt48" : ""),
                    (Z = 2 == h ? "返程" : "去程"),
                    (Z += 1 == u ? "1程" : "2程"),
                    (b = "tag bgcolor-primary"),
                    (y = "".concat(m, "-").concat(f, " ").concat(g)));
              Z &&
                c &&
                (l
                  ? ((I = "mt40"), (Z = "旧航班 " + Z))
                  : ((b = "tag bg-green"),
                    (Z = "新航班 " + Z),
                    s > 0 && (I += " mt40"))),
                1 == d
                  ? ((Z += " 已取消"), (b = "tag bgcolor-red"))
                  : 5 == d && ((Z += " 已恢复"), (b = "tag bgcolor-red"));
              var T = F()(N).format("MM月DD日");
              return (
                Z || (T = "".concat(T, " ").concat(w)),
                (y = "".concat(T, " ").concat(y))
                  ? (0, H.BX)(p.View, {
                      className: "order-modify-hd ".concat(I),
                      children: [
                        Z && (0, H.tZ)(p.View, { className: b, children: Z }),
                        y,
                      ],
                    })
                  : null
              );
            },
            we = function (e) {
              var t,
                n,
                a,
                i = e.basicInfo,
                r = e.segment,
                o = e.segmentIndex,
                s = e.isTicketChanging,
                c = e.index,
                l = e.rebookIndex,
                d = e.basicOrderInfo,
                h = e.tripInfo,
                u = e.externalOrderInfo,
                m = e.isOrigin,
                f = e.flightChangeType,
                g = d.orderType,
                N = r.flightSegmentInfo,
                w = r.passengerInfos,
                v = o.sequenceNum,
                Z = N.departCityName,
                b = N.departTime,
                I = N.departDayDiff,
                y = N.departAirportName,
                C = N.departTerminal,
                T = N.subSegments,
                x = N.cabinName,
                k = N.arriveTime,
                D = N.arriveDayDiff,
                V = N.arriveAirportName,
                B = N.arriveTerminal,
                S = N.airCompanyName,
                R = N.flightNumber,
                A = N.isShare,
                P = N.carrierName,
                X =
                  w.length > 0
                    ? "乘机人：".concat(
                        null ===
                          (t = w.map(function (e) {
                            return e.passengerName;
                          })) || void 0 === t
                          ? void 0
                          : t.join("、")
                      )
                    : "";
              return (0, H.BX)(H.HY, {
                children: [
                  4 === g &&
                    0 !== c &&
                    (0, H.tZ)(p.View, {
                      className: "zhongzhuan",
                      children:
                        (null == h ||
                        null === (n = h.transferInfo) ||
                        void 0 === n
                          ? void 0
                          : n.remark) || Z + "中转",
                    }),
                  5 === g &&
                    0 !== c &&
                    1 !== v &&
                    (0, H.tZ)(p.View, {
                      className: "zhongzhuan",
                      children:
                        (null == h ||
                        null === (a = h.transferInfo) ||
                        void 0 === a
                          ? void 0
                          : a.remark) || Z + "中转",
                    }),
                  (0, H.tZ)(Ne, {
                    flightSegmentInfo: N,
                    segmentIndex: o,
                    basicOrderInfo: d,
                    basicInfo: i,
                    externalOrderInfo: u,
                    index: c,
                    rebookIndex: l,
                    isTicketChanging: s,
                    isOrigin: m,
                    flightChangeType: f,
                  }),
                  (0, H.BX)(p.View, {
                    className: "order-modify-bd",
                    children: [
                      (0, H.BX)(p.View, {
                        className: "fromto",
                        children: [
                          (0, H.BX)(p.View, {
                            className: "from",
                            children: [
                              (0, H.tZ)(p.Text, {
                                className: "time",
                                children: b,
                              }),
                              I &&
                                (0, H.tZ)(p.Text, {
                                  className: "em color-primary",
                                  children: I,
                                }),
                              (0, H.BX)(p.Text, {
                                className: "station",
                                children: [y, C],
                              }),
                            ],
                          }),
                          (null == T ? void 0 : T.length) > 0 &&
                            (0, H.tZ)(p.View, {
                              className: "mid",
                              children: T.map(function (e, t) {
                                return (0,
                                H.BX)(p.Text, { className: "jinting", children: ["经停", e.arriveCityName, e.stopTime] }, t);
                              }),
                            }),
                          (0, H.BX)(p.View, {
                            className: "to",
                            children: [
                              (0, H.tZ)(p.Text, {
                                className: "time",
                                children: k,
                              }),
                              D &&
                                (0, H.tZ)(p.Text, {
                                  className: "em color-primary",
                                  children: D,
                                }),
                              (0, H.BX)(p.Text, {
                                className: "station",
                                children: [V, B],
                              }),
                            ],
                          }),
                          (0, H.BX)(p.View, {
                            className: "flight-num",
                            children: [
                              (0, H.BX)(p.View, { children: [S, R] }),
                              A &&
                                (0, H.BX)(p.View, {
                                  children: ["实际承运:", P],
                                }),
                              (0, H.tZ)(p.View, { children: x }),
                            ],
                          }),
                        ],
                      }),
                      s &&
                        X &&
                        (0, H.tZ)(p.View, {
                          className: "passengers",
                          children: X,
                        }),
                    ],
                  }),
                ],
              });
            },
            ve = g.default.memo(function (e) {
              var t = (0, g.useRef)({}),
                n = e.flightSegmentInfos,
                a = e.basicOrderInfo,
                i = e.tripInfo,
                r = e.externalOrderInfo,
                o = a.orderType,
                s = t.current.basicInfo;
              return (
                (1 != o && 4 != o) ||
                  s ||
                  ((s = (function (e) {
                    var t = e.length,
                      n = e[t - 1].flightSegmentInfo.arriveCityName,
                      a = F()(
                        he.Z.formatDateWithSlash(
                          e[0].flightSegmentInfo.departDateTime
                        )
                      ),
                      i =
                        F()(
                          he.Z.formatDateWithSlash(
                            e[t - 1].flightSegmentInfo.arriveDateTime
                          )
                        ).valueOf() - a.valueOf(),
                      r = 864e5,
                      o = 36e5,
                      s = Math.floor(i / r),
                      c = Math.floor((i - s * r) / o),
                      l = Math.floor((i - s * r - c * o) / 6e4);
                    return {
                      flightCostTime: ""
                        .concat(0 === s ? "" : s + "天")
                        .concat(0 === c ? "" : c + "小时")
                        .concat(0 === l ? "" : l + "分"),
                      flightArriveCity: n,
                    };
                  })(n)),
                  (t.current.basicInfo = s)),
                (0, H.tZ)(p.View, {
                  className: "flt-segment-infos",
                  children:
                    null == n
                      ? void 0
                      : n.map(function (e, t) {
                          var o = e.rebookInfos,
                            c = e.passengerInfos,
                            l = e.segmentIndex,
                            d = e.flightChangeInfo,
                            h = null == d ? void 0 : d.changeType,
                            u = o.length > 0,
                            m = c.length > 0;
                          return u
                            ? (0, H.BX)(H.HY, {
                                children: [
                                  o.map(function (e, o) {
                                    var c = e.flightChangeInfo,
                                      d = null == c ? void 0 : c.changeType;
                                    return (0,
                                    H.tZ)(we, { segment: e, segmentIndex: l, isTicketChanging: u, flightSegmentInfos: n, index: t, rebookIndex: o, basicOrderInfo: a, tripInfo: i, externalOrderInfo: r, basicInfo: s, flightChangeType: d }, o);
                                  }),
                                  m &&
                                    (0, H.tZ)(we, {
                                      isOrigin: !0,
                                      segment: e,
                                      segmentIndex: l,
                                      isTicketChanging: u,
                                      index: t,
                                      basicOrderInfo: a,
                                      tripInfo: i,
                                      externalOrderInfo: r,
                                      basicInfo: s,
                                      flightChangeType: h,
                                    }),
                                ],
                              })
                            : (0, H.tZ)(we, {
                                segment: e,
                                segmentIndex: l,
                                index: t,
                                basicOrderInfo: a,
                                tripInfo: i,
                                externalOrderInfo: r,
                                basicInfo: s,
                                flightChangeType: h,
                              });
                        }),
                })
              );
            }),
            Ze = n(21828),
            be = g.default.memo(function (e) {
              var t = e.payFlag,
                n = e.price,
                a = e.lastPayTime,
                i = e.isShowPriceDetail,
                r = e.onBookAgain,
                o = e.onPay,
                s = e.onShowPriceDetail;
              return (0,
              H.tZ)(Ze.Z, { className: "flt-book-btm-operate", children: t ? (0, H.BX)(p.View, { className: "pay-box flex-align-items-center flex-1 ".concat(X.default.isBaidu ? "swan" : ""), children: [(0, H.tZ)(p.View, { className: "lbox flex-1", children: (0, H.tZ)(p.View, { className: "pay-price color-red", children: n }) }), (0, H.BX)(p.View, { className: "pay-detail ".concat(i ? "open" : ""), id: "AcCp", onClick: s, children: ["明细", (0, H.tZ)(p.Text, { className: "ifont-arr iconfont" })] }), (0, H.BX)(p.Button, { className: "btn-pay btn-red", hoverClass: "btn-btn_pay_hover", formType: "submit", id: "AcCq", onClick: o, children: ["去付款", (0, H.tZ)(p.Text, { className: "text", children: a })] })] }) : (0, H.tZ)(p.Button, { className: "btn-primary flex-1", id: "AcCr", onClick: r, children: "再订一张" }) });
            }),
            Ie = n(81957),
            ye = X.default.isTieyou,
            Ce = X.default.isWechat,
            Te = (function (e) {
              (0, s.Z)(n, e);
              var t = (0, c.Z)(n);
              function n() {
                var e;
                (0, i.Z)(this, n);
                for (
                  var a = arguments.length, r = new Array(a), s = 0;
                  s < a;
                  s++
                )
                  r[s] = arguments[s];
                return (
                  (e = t.call.apply(t, [this].concat(r))),
                  (0, l.Z)((0, o.Z)(e), "handleGetMoney", function () {
                    var t = e.props,
                      n = t.orderNumber,
                      a = t.handleUpdate;
                    (0, x.xw)({ orderNumber: n })
                      .then(function (e) {
                        1 == e.resultCode
                          ? C.Z.executeCB(a)
                          : (0, V.showToast)(
                              e.resultMessage || "网络出了小差，请稍后再试～"
                            );
                      })
                      .catch(function (e) {
                        (0,
                        V.showToast)(e.resultMessage || "网络出了小差，请稍后再试～");
                      });
                  }),
                  (0, l.Z)((0, o.Z)(e), "handleBargainClose", function () {
                    var t = e.props,
                      n = t.handleBargainClose,
                      a = t.popInfo,
                      i = (void 0 === a ? {} : a).showFlag;
                    C.Z.executeCB(n), 0 == i && e.handleGetMoney();
                  }),
                  (0, l.Z)((0, o.Z)(e), "goSharePage", function () {
                    var t = e.props.popInfo.shareKey,
                      n = void 0 === t ? "" : t;
                    w().navigateTo({
                      url: "/pages/activity/flight/kanjia/index?shareKey=".concat(
                        encodeURIComponent(n)
                      ),
                    });
                  }),
                  e
                );
              }
              return (
                (0, r.Z)(n, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.isShow,
                        n = e.popInfo,
                        a = void 0 === n ? {} : n,
                        i = e.isShareByImage,
                        r = e.onShareByImage,
                        o = a.showFlag,
                        s = a.assistMoney,
                        c = a.popupBtnText,
                        l = "bargain-pop ".concat(ye ? "ty" : "zx"),
                        d = (50 - s).toFixed(2);
                      return (0, H.tZ)(W.Z, {
                        isShow: Ce && t,
                        handleClose: this.handleBargainClose,
                        children: (0, H.BX)(p.View, {
                          className: "common-myctrip-bargain-pop",
                          children: [
                            0 == o &&
                              (0, H.BX)(p.View, {
                                className: l,
                                children: [
                                  (0, H.tZ)(p.View, { className: "slogan" }),
                                  (0, H.tZ)(p.View, {
                                    className: "txt",
                                    children: "可提现到微信/支付宝",
                                  }),
                                  (0, H.tZ)(p.Button, {
                                    className: "btn-submit",
                                    id: "ATAQ",
                                    onClick: this.handleGetMoney.bind(this),
                                    children: "立即领现金",
                                  }),
                                  (0, H.tZ)(p.View, {
                                    className: "info",
                                    children: "关闭后可在订单详情页找到入口",
                                  }),
                                ],
                              }),
                            1 == o &&
                              (0, H.BX)(p.View, {
                                className: "bargaining-pop",
                                children: [
                                  (0, H.BX)(p.View, {
                                    className: "pop-kanjia-bd",
                                    children: [
                                      (0, H.BX)(p.View, {
                                        className: "price",
                                        children: [
                                          s,
                                          (0, H.tZ)(p.Text, {
                                            className: "tag",
                                            children: "还差￥".concat(d),
                                          }),
                                        ],
                                      }),
                                      (0, H.tZ)(p.View, {
                                        className: "txt",
                                        children: "满50元可提现到微信/支付宝",
                                      }),
                                    ],
                                  }),
                                  i
                                    ? (0, H.tZ)(p.Button, {
                                        className: "btn-invite",
                                        "data-type": "bargain",
                                        onClick: r,
                                        children: c,
                                      })
                                    : (0, H.tZ)(p.Button, {
                                        className: "btn-invite",
                                        "data-type": "bargain",
                                        "open-type": "share",
                                        children: c,
                                      }),
                                ],
                              }),
                            5 == o &&
                              (0, H.BX)(p.View, {
                                className: "bargaining-pop",
                                children: [
                                  (0, H.BX)(p.View, {
                                    className: "pop-kanjia-bd",
                                    children: [
                                      (0, H.tZ)(p.View, { className: "tit" }),
                                      (0, H.tZ)(p.View, {
                                        className: "price",
                                        children: "50.00",
                                      }),
                                    ],
                                  }),
                                  (0, H.tZ)(p.Button, {
                                    className: "btn-invite",
                                    id: "ATAR",
                                    onClick: this.goSharePage.bind(this),
                                    children: c || "限起飞后24小时内提现",
                                  }),
                                  (0, H.BX)(p.View, {
                                    className: "info",
                                    children: [
                                      "提现后到",
                                      (0, H.BX)(p.Text, {
                                        className: "strong",
                                        children: [
                                          "「",
                                          ye ? "铁友" : "智行",
                                          " - 个人钱包」",
                                        ],
                                      }),
                                      " 查看",
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                n
              );
            })(g.default.PureComponent),
            xe = n(6954),
            ke = function (e) {
              var t = e.showClose,
                n = void 0 !== t && t,
                a = e.data,
                i = e.onBtnClick,
                r = e.onClose;
              return (0, H.BX)(p.View, {
                className: "air-train-common-banner flex",
                children: [
                  (0, H.BX)(p.View, {
                    className: "lbox flex-1",
                    children: [
                      (0, H.tZ)(p.View, {
                        className: "title",
                        children: (0, H.tZ)(k.ZtRichText, { nodes: a.title }),
                      }),
                      (0, H.tZ)(p.View, {
                        className: "sub-title",
                        children: (0, H.tZ)(k.ZtRichText, { nodes: a.desc }),
                      }),
                    ],
                  }),
                  (0, H.tZ)(p.View, {
                    className: "rbox",
                    children: (0, H.tZ)(p.Button, {
                      className: "op-btn ".concat(
                        a.buttonClick ? "" : "disabled"
                      ),
                      id: "AcCk",
                      onClick: i,
                      children: a.buttonText,
                    }),
                  }),
                  n
                    ? (0, H.tZ)(p.Image, {
                        className: "close-btn",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/kongtietongding/guanbi.png",
                        id: "AcCl",
                        onClick: function () {
                          null == r || r();
                        },
                      })
                    : (0, H.tZ)(H.HY, {}),
                ],
              });
            },
            De = function (e) {
              var t = e.data;
              if (t) {
                return (0, H.tZ)(ke, {
                  data: t,
                  onBtnClick: function () {
                    t.buttonClick &&
                      t.url &&
                      I.Z.twebview({ data: { url: t.url } });
                  },
                });
              }
            },
            Ve = function (e) {
              var t = e.pageId,
                n = e.orderNumber,
                a = e.ubtTrace,
                i = (0, g.useState)(!1),
                r = (0, E.Z)(i, 2),
                o = r[0],
                s = r[1],
                c = (0, g.useState)(),
                l = (0, E.Z)(c, 2),
                d = l[0],
                h = l[1];
              (0, g.useEffect)(
                function () {
                  n &&
                    (0, x.m8)({ data: { orderNumber: n } }).then(function (e) {
                      if (1 == e.resultCode && e.data) {
                        var n = e.data,
                          i = {
                            title: n.title,
                            desc: n.subTitle,
                            buttonText: n.buttonText,
                            buttonClick: !0,
                            jumpUrl: n.jumpUrl,
                          };
                        h(i),
                          null == a ||
                            a(235642, { PageId: t, Content: n.subTitle });
                      }
                    });
                },
                [n]
              );
              return o || !d
                ? (0, H.tZ)(H.HY, {})
                : (0, H.tZ)(ke, {
                    showClose: !0,
                    data: d,
                    onBtnClick: function () {
                      var e = (d || {}).jumpUrl;
                      a(235641, { PageId: t, Content: d.desc }),
                        e && w().navigateTo({ url: e });
                    },
                    onClose: function () {
                      s(!0), h();
                    },
                  });
            },
            Be = n(13025);
          function Se(e) {
            var t = e.shareUrl,
              n = e.onClose,
              a = (0, g.useState)(),
              i = (0, E.Z)(a, 2),
              r = i[0],
              o = i[1];
            (0, g.useEffect)(
              function () {
                if (!r) {
                  var e = {
                    type: "template",
                    templateKey: "flight/flight_share_picture",
                    imageType: "url",
                    extraParams: {
                      bgImg:
                        "https://images3.c-ctrip.com/ztrip/zhixingios/fenxiantu/2023/fxzl_pic_".concat(
                          X.default.zxTyStr,
                          "@2x.png"
                        ),
                    },
                    miniPicInfo: {
                      path: t,
                      appId: X.default.appId,
                      width: 100,
                    },
                    deviceScaleFactor: 2,
                  };
                  (0, V.showLoading)(),
                    (0, Be.iR)(e)
                      .then(function (e) {
                        1 == e.resultCode
                          ? o(e.img)
                          : (0, V.showToast)("网络错误");
                      })
                      .catch(function () {
                        return (0, V.showToast)("网络错误");
                      })
                      .finally(V.hideLoading);
                }
              },
              [r]
            );
            var s = function () {
              return new Promise(function (e, t) {
                w().downloadFile({ url: r, success: e, fail: t });
              });
            };
            return r
              ? (0, H.tZ)(p.View, {
                  className: "share-by-img",
                  children: (0, H.BX)(k.ZtActivityPop, {
                    show: !0,
                    isShowClose: !1,
                    onWrapClose: function () {
                      return null == n ? void 0 : n();
                    },
                    children: [
                      (0, H.tZ)(p.Image, {
                        className: "share-image",
                        style: "width: 300px;",
                        mode: "widthFix",
                        src: r,
                      }),
                      (0, H.BX)(p.View, {
                        className: "btn-wrap flex-align-items-center",
                        children: [
                          (0, H.BX)(p.Button, {
                            className: "flex-center btn save",
                            onClick: function () {
                              (0, V.showLoading)(),
                                s()
                                  .then(function (e) {
                                    if (200 === e.statusCode) {
                                      var t = e.tempFilePath;
                                      w().saveImageToPhotosAlbum({
                                        filePath: t,
                                        success: function () {
                                          (0, V.showToast)("已保存到相册"),
                                            null == n || n();
                                        },
                                        fail: function () {
                                          (0, V.showToast)("保存失败，请重试");
                                        },
                                      });
                                    }
                                  })
                                  .catch(function () {
                                    return (0, V.showToast)("保存失败，请重试");
                                  })
                                  .finally(V.hideLoading);
                            },
                            children: [
                              (0, H.tZ)(p.Image, {
                                className: "btn-icon",
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/huodong/xiazai_icon.png",
                              }),
                              "保存图片",
                            ],
                          }),
                          X.default.isWechat
                            ? (0, H.BX)(p.Button, {
                                className: "flex-center btn share",
                                onClick: function () {
                                  (0, V.showLoading)(),
                                    s()
                                      .then(function (e) {
                                        200 === e.statusCode &&
                                          w()
                                            .showShareImageMenu({
                                              path: e.tempFilePath,
                                            })
                                            .finally(function () {
                                              return null == n ? void 0 : n();
                                            });
                                      })
                                      .catch(function () {
                                        return (0,
                                        V.showToast)("分享失败，请重试");
                                      })
                                      .finally(V.hideLoading);
                                },
                                children: [
                                  (0, H.tZ)(p.Image, {
                                    className: "btn-icon",
                                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/huodong/wechat_icon.png",
                                  }),
                                  "分享好友",
                                ],
                              })
                            : (0, H.tZ)(H.HY, {}),
                        ],
                      }),
                    ],
                  }),
                })
              : (0, H.tZ)(H.HY, {});
          }
          var Re = function (e) {
            var t = e.data,
              n = e.orderNumber,
              a = (0, g.useState)(0),
              i = (0, E.Z)(a, 2),
              r = i[0],
              o = i[1],
              s = (0, g.useState)(t),
              c = (0, E.Z)(s, 2),
              l = c[0],
              d = c[1];
            if (
              ((0, g.useEffect)(
                function () {
                  t && t !== l && d(t);
                },
                [t]
              ),
              !l)
            )
              return (0, H.tZ)(H.HY, {});
            var h = l || {},
              m = h.productName,
              N = h.delayReturnInfos,
              w = h.productNotes,
              v = null == w ? void 0 : w.items,
              Z = N[r],
              b = (function () {
                var e = (0, f.Z)(
                  (0, u.Z)().mark(function e() {
                    var t, a, i;
                    return (0, u.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((t = Z.state), (a = Z.passengerId), 0 === t)) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            (0, V.showLoading)(),
                              (i = {
                                data: { orderNumber: n, passengerIds: [a] },
                              }),
                              (0, de.Ut)(i)
                                .then(
                                  (function () {
                                    var e = (0, f.Z)(
                                      (0, u.Z)().mark(function e(t) {
                                        var a;
                                        return (0, u.Z)().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                if (1 != t.resultCode) {
                                                  e.next = 8;
                                                  break;
                                                }
                                                return (
                                                  (e.next = 3),
                                                  (0, de.Km)({
                                                    data: {
                                                      orderNumber: n,
                                                      version: 1,
                                                    },
                                                  })
                                                );
                                              case 3:
                                                1 == (a = e.sent).resultCode &&
                                                  d(a.data),
                                                  (0, V.showToast)(
                                                    t.resultMessage
                                                  ),
                                                  (e.next = 9);
                                                break;
                                              case 8:
                                                (0, V.showToast)("网络错误");
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
                                  })()
                                )
                                .catch(function () {
                                  (0, V.showToast)("网络错误");
                                })
                                .finally(V.hideLoading);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return (0, H.BX)(p.View, {
              className: "air-train-delay-cont",
              children: [
                (0, H.tZ)(p.View, { className: "hd-tit", children: m }),
                (0, H.tZ)(p.View, {
                  className: "pas-list flex-align-items-center",
                  children:
                    null == N
                      ? void 0
                      : N.map(function (e, t) {
                          return (0, H.tZ)(
                            p.View,
                            {
                              className: "pas-item ".concat(
                                r == t ? "selected" : ""
                              ),
                              onClick: function () {
                                return o(t);
                              },
                              children: e.passengerName,
                            },
                            e.passengerId
                          );
                        }),
                }),
                (0, H.tZ)(p.View, {
                  className: "rights-list",
                  children: (0, H.BX)(p.View, {
                    className: "right-item flex-align-items-center",
                    children: [
                      (0, H.tZ)(p.View, {
                        className: "right-amount",
                        children: Z.returnAmount,
                      }),
                      (0, H.BX)(p.View, {
                        className: "right-info flex-1",
                        children: [
                          (0, H.tZ)(p.View, {
                            className: "cont",
                            children: Z.delayTitle,
                          }),
                          (0, H.tZ)(p.View, {
                            className: "desc",
                            children: (0, H.tZ)(k.ZtRichText, {
                              nodes: Z.delayContent,
                            }),
                          }),
                        ],
                      }),
                      [0, 1, 2, 3].includes(Z.state) &&
                        (0, H.tZ)(p.Button, {
                          className: "rbox-btn ".concat(
                            0 === Z.state ? "" : "disabled"
                          ),
                          onClick: b,
                          children: Z.stateDesc,
                        }),
                    ],
                  }),
                }),
                (0, H.tZ)(p.View, {
                  className: "rules",
                  children: v.map(function (e) {
                    return (0,
                    H.BX)(p.View, { className: "rule-wrap", children: [(0, H.tZ)(p.View, { className: "rule-tit", children: e.name }), (0, H.tZ)(p.View, { className: "rule-cont", children: (0, H.tZ)(k.ZtRichText, { nodes: e.content }) })] }, e.name);
                  }),
                }),
              ],
            });
          };
          function Ae() {
            return (Ae = (0, f.Z)(
              (0, u.Z)().mark(function e(t) {
                var n, a, i;
                return (0, u.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = t.orderNumber),
                          (a = { data: { version: 1, orderNumber: n } }),
                          (i = function (e) {
                            if (e) {
                              var t = (0, V.getCurrentPage)();
                              null == t ||
                                t.showCommonDrawer({
                                  hideTitle: !0,
                                  hideClose: !1,
                                  content: function () {
                                    return (0, H.tZ)(Re, {
                                      orderNumber: n,
                                      data: e,
                                    });
                                  },
                                  className: "air-train-delay-rights",
                                });
                            }
                          }),
                          he.Z.doFetch(de.Km, a, i);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          var Pe,
            Xe = (function () {
              function e(t, n) {
                (0, i.Z)(this, e),
                  (this.refundData = t),
                  (this.orderData = n),
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
                      var e, t, n, a, i, r, o, s, c, l, d, h, u, m, f;
                      if (this.isOnlyOneSegOneValidPassenger(this.refundData)) {
                        var g, p, N, w, v, Z;
                        if (
                          ((this.selectTickets = (null ===
                            (e = this.refundData) ||
                          void 0 === e ||
                          null === (t = e.segmentList) ||
                          void 0 === t ||
                          null === (n = t[0]) ||
                          void 0 === n
                            ? void 0
                            : n.tickets[0]) && [
                            null === (a = this.refundData) ||
                            void 0 === a ||
                            null === (i = a.segmentList) ||
                            void 0 === i ||
                            null === (r = i[0]) ||
                            void 0 === r
                              ? void 0
                              : r.tickets[0],
                          ]),
                          (this.refundData.segmentList[0].selectTickets =
                            (null === (o = this.refundData) ||
                            void 0 === o ||
                            null === (s = o.segmentList) ||
                            void 0 === s ||
                            null === (c = s[0]) ||
                            void 0 === c
                              ? void 0
                              : c.tickets[0]) &&
                            (null === (l = this.refundData) ||
                            void 0 === l ||
                            null === (d = l.segmentList) ||
                            void 0 === d ||
                            null === (h = d[0]) ||
                            void 0 === h
                              ? void 0
                              : h.tickets)),
                          this.isDefaultCheckReason(
                            null === (u = this.refundData) ||
                              void 0 === u ||
                              null === (m = u.segmentList) ||
                              void 0 === m ||
                              null === (f = m[0]) ||
                              void 0 === f
                              ? void 0
                              : f.tickets
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
                              null === (w = N.tickets) ||
                              void 0 === w ||
                              null === (v = w[0]) ||
                              void 0 === v ||
                              null === (Z = v.refundReasonList) ||
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
                        n = t.length > 0 ? t[0].tickets : [];
                      return (
                        t &&
                        1 == t.length &&
                        n &&
                        1 == n.length &&
                        !0 === n[0].refundable
                      );
                    },
                  },
                  {
                    key: "isDefaultCheckReason",
                    value: function (e) {
                      var t, n, a, i, r;
                      return (
                        1 ==
                          (null == e ||
                          null === (t = e[0]) ||
                          void 0 === t ||
                          null === (n = t.refundReasonList) ||
                          void 0 === n
                            ? void 0
                            : n.length) &&
                        (null == e ||
                        null === (a = e[0]) ||
                        void 0 === a ||
                        null === (i = a.refundReasonList) ||
                        void 0 === i ||
                        null === (r = i[0]) ||
                        void 0 === r
                          ? void 0
                          : r.defaultCheck)
                      );
                    },
                  },
                ]),
                e
              );
            })(),
            Oe = ["resultCode", "resultMessage", "ResponseStatus"],
            Me = "网络错误，请稍后再试",
            Fe = X.default.isTieyou,
            Le = "YYYY-MM-DD",
            Ee = {
              pageId: Fe ? "10650016359" : "10650001978",
              data: {
                isTieyou: Fe,
                isIPhoneX: he.Z.isIPhoneX(),
                canIUseRichText: !!X.default.isH5 || w().canIUse("rich-text"),
                showPriceDetail: !1,
                showTicketInfo: !1,
                maskType: "",
                transition: !1,
                showReasonPanel: !1,
                cancelFeedback: "",
                operateModule: {},
                externalOrderInfo: {},
                canShowPushHotel: !1,
                hotelInfo: {},
                cityId: "",
                rescheduleRefundRemark: null,
                hotelCouponShow: !1,
                bargainShow: !1,
                kanjiaInfos: {},
                bannerList: [],
                activityBanner: null,
                orderType: "",
                showAnnouncement: !1,
                entrancePopup: {},
                entranceDrawerTips: [],
                tipFloat: {},
                goodsId: "",
                showType: "",
                productOrderNumber: "",
                refreshPackageProduct: !1,
                departCityName: "",
                arriveCityName: "",
                showShareByImage: !1,
                chatScenes: [],
                priceDetail: {},
                activeRebookInfo: {},
                kanjiaShareUrl: "",
                airTrainCashBackBannerInfo: null,
              },
              onLoad: function (e) {
                console.log("detail options------", e);
                var t = e.orderNumber;
                (this.oid = t),
                  (this._shareWorkable = (0, j.JO)()),
                  X.default.isH5 || (w().hideShareMenu && w().hideShareMenu());
              },
              onUnload: function () {
                clearTimeout(this.payTimer);
              },
              onShow: function () {
                this.reload();
              },
              onPullDownRefresh: function () {
                this.reload();
              },
              reload: function () {
                this.setData({ refreshPackageProduct: !0 }),
                  this.closeCommonDrawer(),
                  this.getFlightDetail();
              },
              getFlightDetail: function () {
                var e = this,
                  t = this.data.canShowPushHotel,
                  n = { data: { orderNumber: this.oid, version: 4 } };
                (0, V.showLoading)("获取订单详情"),
                  (0, de.Nd)(n)
                    .then(
                      (function () {
                        var n = (0, f.Z)(
                          (0, u.Z)().mark(function n(a) {
                            var i, r, o, s, c, l, d, h, f, g, p, N, w, v, Z, b;
                            return (0, u.Z)().wrap(function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    if (
                                      ((i = a.resultCode),
                                      (r = a.resultMessage),
                                      (o = a.data),
                                      (c = (s = o || {}).basicOrderInfo),
                                      (l = s.flightSegmentInfos),
                                      (d = s.operateModule),
                                      (h = s.externalModule),
                                      (f = s.externalOrderInfo),
                                      (g = (h || {}).announcement),
                                      (p = (c || {}).orderType),
                                      1 === i)
                                    ) {
                                      n.next = 6;
                                      break;
                                    }
                                    return n.abrupt(
                                      "return",
                                      e.showCommonDialog(r || Me)
                                    );
                                  case 6:
                                    (e.flightSegmentInfosRaw = l),
                                      e.setData(
                                        (0, m.Z)(
                                          (0, m.Z)({}, o),
                                          {},
                                          {
                                            flightSegmentInfos:
                                              e.handleSegmentInfos(l, c),
                                            orderType: p,
                                            operateModule:
                                              e.handleOperateModule(d),
                                            entrancePopup:
                                              (null == g
                                                ? void 0
                                                : g.entrancePopup) || {},
                                            entranceDrawerTips:
                                              null == g ? void 0 : g.tips,
                                            tipFloat:
                                              (null == g
                                                ? void 0
                                                : g.tipAndFloat) || {},
                                            priceDetail: e.getPriceDetail(o),
                                          }
                                        )
                                      ),
                                      (N = (f && f.growthPlanCoupon) || {}),
                                      1 == l.length &&
                                        ((v =
                                          (null === (w = l[0]) || void 0 === w
                                            ? void 0
                                            : w.flightSegmentInfo) || {}),
                                        (Z = v.departCityName),
                                        (b = v.arriveCityName),
                                        e.setData({
                                          departCityName: Z,
                                          arriveCityName: b,
                                        })),
                                      e.getChatScene(),
                                      e.getCashbackShare(e.oid),
                                      e.getGuessTrendShareInfo(),
                                      e.handleReturnFlightInfos(),
                                      e.handleLastPayTimeCountDown(d),
                                      e.handleBaggageAndPoliciesDetail(),
                                      e.fillBannerList(l, h),
                                      e.handleExternalModule(h || {}, N),
                                      t || e.setPushHotelModel();
                                  case 19:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                          })
                        );
                        return function (e) {
                          return n.apply(this, arguments);
                        };
                      })()
                    )
                    .catch(function (e) {
                      console.log(e);
                    })
                    .finally(function () {
                      (0, V.hideLoading)(), w().stopPullDownRefresh();
                    });
              },
              getPriceDetail: function (e) {
                var t,
                  n = e.flightSegmentInfos,
                  a = e.transactionInfo;
                if (
                  (n.forEach(function (e) {
                    var n = e.rebookInfos;
                    null == n ||
                      n.forEach(function (e) {
                        e.isActive && (t = e);
                      });
                  }),
                  this.setData({ activeRebookInfo: t }),
                  t)
                ) {
                  var i = t.rebookDetails[0];
                  return (0, G.v)(i);
                }
                return a.transactions[0];
              },
              getAdditionalSegmentInfoProps: function (e) {
                var t = e.flightSegmentInfos,
                  n = e.flightSegmentInfo,
                  a = e.segmentIndex,
                  i = e.orderType,
                  r = e.firstSegDepartDate,
                  o = e.isOrigin,
                  s = n.departDateTime,
                  c = n.arriveDateTime,
                  l = F()(he.Z.formatDateWithSlash(s)),
                  d = F()(he.Z.formatDateWithSlash(c)),
                  h = {
                    departWeekDay: L.Z.getWeekDayDesc(l),
                    departDate: l.format(Le),
                    arriveDate: d.format(Le),
                    departTime: l.format("HH:mm"),
                    arriveTime: d.format("HH:mm"),
                  };
                if (!o) {
                  var u = "",
                    m = "",
                    f = "MM-DD";
                  if (2 === i)
                    m = d.format(Le) !== l.format(Le) ? d.format(f) : "";
                  else if (5 === i) {
                    var g = t.filter(function (e) {
                        return (
                          1 === e.segmentIndex.segmentType &&
                          1 === e.segmentIndex.sequenceNum
                        );
                      })[0],
                      p = t.filter(function (e) {
                        return (
                          2 === e.segmentIndex.segmentType &&
                          1 === e.segmentIndex.sequenceNum
                        );
                      })[0],
                      N = F()(
                        he.Z.formatDateWithSlash(
                          g.flightSegmentInfo.departDateTime
                        )
                      ),
                      w = F()(
                        he.Z.formatDateWithSlash(
                          p.flightSegmentInfo.departDateTime
                        )
                      );
                    1 === a.segmentType
                      ? ((u = l.format(Le) !== N.format(Le) ? l.format(f) : ""),
                        (m = d.format(Le) !== N.format(Le) ? d.format(f) : ""))
                      : 2 === a.segmentType &&
                        ((u = l.format(Le) !== w.format(Le) ? l.format(f) : ""),
                        (m = d.format(Le) !== w.format(Le) ? d.format(f) : ""));
                  } else
                    (u = l.format(Le) !== r.format(Le) ? l.format(f) : ""),
                      (m = d.format(Le) !== r.format(Le) ? d.format(f) : "");
                  (h.departDayDiff = u), (h.arriveDayDiff = m);
                }
                return h;
              },
              handleSegmentInfos: function (e, t) {
                var n = this,
                  a = t.orderType,
                  i = F()(
                    he.Z.formatDateWithSlash(
                      e[0].flightSegmentInfo.departDateTime
                    )
                  );
                return e.map(function (t, r) {
                  var o = t.flightSegmentInfo,
                    s = t.rebookInfos,
                    c = t.segmentIndex,
                    l = n.getAdditionalSegmentInfoProps({
                      flightSegmentInfos: e,
                      flightSegmentInfo: o,
                      segmentIndex: c,
                      orderType: a,
                      firstSegDepartDate: i,
                    });
                  t.flightSegmentInfo = (0, m.Z)((0, m.Z)({}, o), l);
                  var d =
                    (null == s
                      ? void 0
                      : s.filter(function (e) {
                          return e.isValid;
                        })) || [];
                  return (
                    d.forEach(function (t) {
                      var o = n.getAdditionalSegmentInfoProps({
                        flightSegmentInfos: e,
                        flightSegmentInfo: t.flightSegmentInfo,
                        segmentIndex: c,
                        orderType: a,
                        firstSegDepartDate:
                          0 == r
                            ? F()(
                                he.Z.formatDateWithSlash(
                                  t.flightSegmentInfo.departDateTime
                                )
                              )
                            : i,
                      });
                      t.flightSegmentInfo = (0, m.Z)(
                        (0, m.Z)({}, t.flightSegmentInfo),
                        o
                      );
                    }),
                    (0, m.Z)((0, m.Z)({}, t), {}, { rebookInfos: d })
                  );
                });
              },
              handleOperateModule: function (e) {
                var t = e.operateButtons,
                  n = void 0 === t ? [] : t,
                  a = e.cancelOperateInfo || {},
                  i = n.filter(function (e) {
                    return (
                      ("refund" === e.type ||
                        "invoice" === e.type ||
                        "rebook" === e.type) &&
                      e.enable &&
                      e.display
                    );
                  });
                return (0, m.Z)(
                  (0, m.Z)({}, e),
                  {},
                  {
                    cancelReasons: (function (e) {
                      return e.map(function (e) {
                        return { title: e, selected: !1 };
                      });
                    })(a.orderCancelReasons || []),
                    operateButtons: i,
                  }
                );
              },
              handleBaggageAndPoliciesDetail: function () {
                var e = this.data.flightSegmentInfos,
                  t = ((null == e ? void 0 : e[0]) || {}).flightSegmentInfo
                    .retAndResRules,
                  n = C.Z.isObject(t) ? he.Z.handleContentFormat(t) : t;
                this.setData({
                  initialView: 0,
                  rescheduleRefundRemarkType: C.Z.isObject(t) ? "object" : "",
                  rescheduleRefundRemark: n
                    ? JSON.parse(JSON.stringify(n))
                    : "",
                });
              },
              handleBargainClose: function () {
                this.setData({ bargainShow: !1 }), se.c0.set(!0);
              },
              handleBargainUpdate: function () {
                this.getCashbackShare(this.oid);
              },
              toggleBaggageAllowancePolicies: function (e) {
                null == e || e.stopPropagation();
                var t = this.data.showBaggageAndPolicies;
                this.setData({ showBaggageAndPolicies: !t });
              },
              fillBannerList: function (e, t, n) {
                var a,
                  i,
                  r,
                  o = e.find(function (e) {
                    return (
                      e.flightChangeInfo &&
                      [0, 1].includes(e.flightChangeInfo.changeType)
                    );
                  }),
                  s = [];
                if (o) {
                  var c = o.flightChangeInfo.flightChangeDesc;
                  s.push({
                    icon: "flight-change-icon",
                    isRichText: !0,
                    code: "flight-change",
                    text: c,
                  });
                }
                e.forEach(function (e) {
                  var t = e.rebookInfos;
                  null == t ||
                    t.forEach(function (e) {
                      var t = e.flightSegmentInfo,
                        n = e.rebookStatus,
                        a = e.passengerInfos,
                        i = e.flightChangeInfo;
                      e.isValid &&
                        i &&
                        [0, 1].includes(i.changeType) &&
                        s.push({
                          icon: "flight-change-icon",
                          isRichText: !0,
                          code: "flight-change",
                          text: i.flightChangeDesc,
                        });
                      var r = t.arriveCityName,
                        o = t.departCityName,
                        c = a
                          .map(function (e) {
                            return e.passengerName;
                          })
                          .join("、");
                      s.push({
                        icon: "flight-rebook-icon",
                        code: "rebook",
                        title: n,
                        content: "".concat(o, " ").concat(r, " ").concat(c),
                        rebookInfo: e,
                      });
                    });
                }),
                  null == t ||
                    null === (a = t.orderStateInfoList) ||
                    void 0 === a ||
                    null ===
                      (i = a.filter(function (e) {
                        return "refund" === e.type;
                      })) ||
                    void 0 === i ||
                    i.forEach(function (e) {
                      s.push({
                        icon: "flight-refund-icon",
                        code: "refund",
                        title: e.orderStatus,
                        content: e.tripDesc,
                        refundInfo: { refundId: e.orderStatusId },
                      });
                    });
                var l =
                  null == t ||
                  null === (r = t.orderCardInfoList) ||
                  void 0 === r
                    ? void 0
                    : r.find(function (e) {
                        return "SPECIAL_NOTICE" == e.code;
                      });
                l &&
                  s.push(
                    (0, m.Z)(
                      (0, m.Z)({}, l),
                      {},
                      { icon: "epidemic-icon", isRichText: !1 }
                    )
                  ),
                  C.Z.isEmptyObject(n) ||
                    s.push(
                      (0, m.Z)(
                        (0, m.Z)({}, n),
                        {},
                        {
                          code: "GROWTH_PLAN_COUPON",
                          isRichText: !0,
                          icon: "growth-plan-icon",
                        }
                      )
                    ),
                  s.length > 0 && this.setData({ bannerList: s });
              },
              handleExternalModule: function (e) {
                var t,
                  n = e.displayModules || [],
                  a = e.orderCardInfoList || [],
                  i = e.orderCashbackInfoList || [],
                  r = this.data.bannerList,
                  o = (0, h.Z)(r),
                  s =
                    null === (t = e.orderCardInfoList) || void 0 === t
                      ? void 0
                      : t.find(function (e) {
                          return "SPRING_FESTIVAL_2023_ACTIVITY" == e.code;
                        });
                s &&
                  (o.push(
                    (0, m.Z)(
                      (0, m.Z)({}, s),
                      {},
                      {
                        icon: "https://images3.c-ctrip.com/ztrip/zhixingios/list/10.0/list_icon_quan_cy.png",
                        isSpringActivity: !0,
                      }
                    )
                  ),
                  this.setData({ bannerList: o }));
                var c = n.findIndex(function (e) {
                    return "showHybridModule" === e.type;
                  }),
                  l = a.findIndex(function (e) {
                    return "SPECIAL_NOTICE" === e.code;
                  });
                if (
                  (c > -1 && this.getRecommendTrain(n[c].title),
                  l > -1 && this.setData({ noticeCard: a[l] }),
                  (null == a ? void 0 : a.length) > 0)
                ) {
                  var d = i.find(function (e) {
                    return "commonFlightTrainCashback" == e.activityType;
                  });
                  this.setData({ airTrainCashBackBannerInfo: d });
                }
              },
              getGuessTrendShareInfo: function () {
                var e = this,
                  t = {
                    orderNumber: this.oid,
                    version: 2,
                    head: {
                      extension: [{ name: "correctVersion", value: 30 }],
                    },
                  };
                (0, de.f1)(t).then(function (t) {
                  console.log(t);
                  var n = t || {},
                    a = n.resultCode,
                    i = (n.resultMessage, n.ResponseStatus, (0, d.Z)(n, Oe));
                  1 === a &&
                    e.setData({ guessTrend: e.handleGuessTrendData(i) });
                });
              },
              handleGuessTrendData: function (e) {
                for (
                  var t = e.currentAmount,
                    n = void 0 === t ? 0 : t,
                    a = e.odds,
                    i = void 0 === a ? 1 : a,
                    r = Math.ceil(n * i),
                    o = n.toString().split(""),
                    s = r.toString().split("");
                  o.length < 5;

                )
                  o.unshift(-1);
                for (; s.length < 5; ) s.unshift(-1);
                var c = F()(he.Z.formatDateWithSlash(e.revealTime));
                return (0, m.Z)(
                  (0, m.Z)({}, e),
                  {},
                  {
                    currentAmountStrArray: o,
                    successAmount: r,
                    successAmountStrArray: s,
                    dateTime: ""
                      .concat(c.format("M月D日"))
                      .concat(c.format("HH:mm")),
                  }
                );
              },
              toggleGuessPopup: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { currentTarget: { dataset: { type: "0" } } },
                  n = t.currentTarget.dataset.type,
                  a = this.data.showGuessPopup;
                this.setData({
                  showGuessPopup: !a,
                  mask: !a,
                  maskType: "guess",
                  guessType: parseInt(n),
                }),
                  setTimeout(function () {
                    e.setData({ transition: !a });
                  }, 10);
              },
              handleGuessBtnClick: function (e) {
                var t = this,
                  n = e.currentTarget.dataset.type,
                  a = this.data.guessTrend,
                  i = {
                    orderNumber: this.oid,
                    guessTrend: n,
                    odds: n ? a.upOdds : a.downOdds,
                    version: 2,
                    head: {
                      extension: [{ name: "correctVersion", value: 30 }],
                    },
                  };
                (0, de.Q8)(i)
                  .then(function (e) {
                    var n = e || {},
                      a = n.resultCode,
                      i = n.resultMessage;
                    1 !== a && t.showCommonDialog(i || Me);
                  })
                  .catch(function () {
                    t.showCommonDialog(Me);
                  })
                  .finally(function () {
                    t.getGuessTrendShareInfo(), t.toggleGuessPopup();
                  });
              },
              collectGuessCash: function () {
                var e = this,
                  t = { orderNumber: this.oid, source: 1 };
                (0, de.en)(t)
                  .then(function (t) {
                    var n = t || {},
                      a = n.resultCode,
                      i = n.resultMessage;
                    1 === a
                      ? ((0, V.showToast)("领取成功，出行成功后返至钱包"),
                        e.getGuessTrendShareInfo())
                      : e.showCommonDialog(i || Me);
                  })
                  .catch(function () {
                    e.showCommonDialog(Me);
                  });
              },
              toggleGuessRule: function () {
                var e = this,
                  t = this.data.showGuessRule;
                this.setData({
                  showGuessRule: !t,
                  mask: !t,
                  maskType: "guessRule",
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              toIntegralIntro: function () {
                var e = this.data.isTieyou;
                C.Z.commonNavigator(
                  "https://market.suanya.com/activity/flight/2019-flight-jifen/?partner=".concat(
                    e ? "tieyou" : "zhixing"
                  )
                );
              },
              toIntegralDetailPage: function () {
                this.navigateTo({ url: "/pages/usercenter/integral/integral" });
              },
              getRecommendTrain: function (e) {
                var t = this;
                if (e) {
                  var n = { data: { hybridToken: e } };
                  (0, de.YU)(n)
                    .then(function (e) {
                      if (1 === e.resultCode) {
                        var n = e.data || {};
                        t.setData({ recommendTrain: n });
                      }
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                }
              },
              handleRecommendTrainClose: function () {
                this.setData({ recommendTrain: null });
              },
              toOrderTrainBooingPage: function () {
                var e = this.data.recommendTrain.token;
                this.navigateTo({ url: e });
              },
              handleOperateBtn: function (e) {
                if ("rebook" !== e)
                  if ("refund" !== e)
                    if ("invoice" !== e);
                    else {
                      var t = "https://"
                        .concat(
                          X.default.h5domain,
                          "/webapp/cw/zt/flightInlandAfterSale/invoicePostPage.html?orderNumber="
                        )
                        .concat(this.oid, "&partner=")
                        .concat(X.default.partner);
                      I.Z.twebview({
                        data: {
                          url: "https://"
                            .concat(
                              X.default.h5domain,
                              "/webapp/train/activity/static/ztrip/middle.html?jumpurl="
                            )
                            .concat(encodeURIComponent(t)),
                        },
                      });
                    }
                  else this.handleRefundAction();
                else this.handleRebookAction();
              },
              isSingleTrip: function (e) {
                var t = e.segmentList,
                  n = t.length > 0 ? t[0].tickets : [];
                return (
                  t &&
                  1 == t.length &&
                  n &&
                  1 == n.length &&
                  1 == n[0].canRefund
                );
              },
              handleRefundAction: function () {
                var e = this,
                  t = this.data,
                  n = t.rescheduleRefundRemark,
                  a = t.orderType,
                  i = t.externalOrderInfo;
                if (!C.Z.isFastDoubleClick())
                  if (
                    "v2" !== (null == i ? void 0 : i.ticketReturnAPIVersion)
                  ) {
                    var r = { data: { orderNumber: this.oid } };
                    (0, V.showLoading)("查询退票条件中"),
                      (0, de.Y9)(r)
                        .then(function (t) {
                          var i = t.resultCode,
                            r = t.resultMessage,
                            o = t.data;
                          if (1 !== i) return e.showCommonDialog(r || Me);
                          var s = o.orderData,
                            c = o.segmentList,
                            l = {
                              refundModel: o,
                              orderType: s.orderType || a,
                              rescheduleRefundRemark: n,
                              orderNumber: e.oid,
                              delta: 0,
                            };
                          if (e.isSingleTrip(o)) {
                            var d;
                            o.segmentList = e.isSelectPerson(o.segmentList);
                            var h = !1,
                              u = c[0],
                              f = u.refundTips,
                              g = u.canRefundReasonList;
                            11 !== (null == f ? void 0 : f.type) ||
                              null == g ||
                              !g.length ||
                              (null != g &&
                                null !== (d = g[0]) &&
                                void 0 !== d &&
                                d.defaultCheck) ||
                              (h = !0);
                            var p = h
                              ? "/pages/flightAfterSale/refundReason/refundReason"
                              : "/pages/flightAfterSale/refundDetail/refundDetail";
                            if (!h) {
                              var N = null == g ? void 0 : g[0],
                                w = N.reasonId,
                                v = N.userAction,
                                Z = N.submitTips,
                                b = N.applyTips;
                              11 === (null == f ? void 0 : f.type) &&
                                "VOLUNTARY" !== v &&
                                ((l.remarks = {
                                  reasonId: w,
                                  userAction: v,
                                  submitTips: Z,
                                  applyTips: b,
                                }),
                                (l.needShowFree = "VOLUNTARY" !== v));
                            }
                            e.navigateTo({
                              url: p,
                              data: (0, m.Z)(
                                (0, m.Z)({}, l),
                                {},
                                { refundModel: o, goReasonPage: h }
                              ),
                            });
                          } else e.navigateTo({ url: "/pages/flightAfterSale/refundOperate/refundOperate", data: l });
                        })
                        .catch(function (e) {
                          console.log(e),
                            (0, V.showToast)("网络出了小差，请稍后重试~");
                        })
                        .finally(function () {
                          (0, V.hideLoading)();
                        });
                  } else this.handleRefundActionV2();
              },
              handleRefundActionV2: function () {
                var e = this;
                (0, V.showLoading)("查询退票条件中");
                var t = { orderNumber: this.oid };
                (0, de.dV)(t)
                  .then(function (t) {
                    var n,
                      a,
                      i,
                      r,
                      o = t || {},
                      s = o.resultCode,
                      c = o.resultMessage;
                    switch (s) {
                      case "QRY-200":
                        var l = {
                            orderNumber: e.oid,
                            inlandRefundRule:
                              null === (n = e.data) ||
                              void 0 === n ||
                              null === (a = n.flightSegmentInfos) ||
                              void 0 === a ||
                              null === (i = a[0]) ||
                              void 0 === i ||
                              null === (r = i.flightSegmentInfo) ||
                              void 0 === r
                                ? void 0
                                : r.retAndResRules,
                            isIntl: !1,
                          },
                          d = new Xe(t, l);
                        d.initData();
                        var h = d.getFirstGoWitchPage();
                        e.navigateTo({
                          url: h,
                          data: { applyData: t, orderData: l },
                        });
                        break;
                      default:
                        (0, V.showModal)(c || "网络异常，请稍后重试~");
                    }
                  })
                  .catch(function (e) {
                    (0, V.showModal)(e.message || "网络异常，请稍后重试~");
                  })
                  .finally(function () {
                    (0, V.hideLoading)();
                  });
              },
              handleRebookAction: function () {
                var e = this;
                if (!C.Z.isFastDoubleClick()) {
                  var t = this.data.externalOrderInfo,
                    n = (null == t ? void 0 : t.rebookDetailVersion) || "v1",
                    a = {
                      v1: {
                        rebookOperate:
                          "/pages/flightAfterSale/rebookOperate/rebookOperate",
                        rebookApply:
                          "/pages/flightAfterSale/rebookApply/rebookApply",
                      },
                      v2: {
                        rebookOperate:
                          "/pages/taroCRN/flight/pages/rebookOperate/index",
                        rebookApply:
                          "/pages/taroCRN/flight/pages/rebookApply/index",
                      },
                    }[n];
                  (0, V.showLoading)("查询改签条件中");
                  var i = { data: { orderNumber: this.oid } };
                  he.Z.pollingFetch(de.yD, i)
                    .then(function (t) {
                      console.log("rebook data", t);
                      var i = t.conditionList,
                        r = t.explanation,
                        o = t.tripType,
                        s = e.data.rescheduleRefundRemark;
                      if (1 == o) {
                        var c, l;
                        if (i.length > 1)
                          return void e.navigateTo({
                            url: a.rebookOperate,
                            data: {
                              orderNumber: e.oid,
                              conditionList: i,
                              tripType: o,
                              explanation: r,
                              rescheduleRefundRemark: s,
                              isSplitOrder: !0,
                              isIntl: !1,
                            },
                          });
                        var d =
                            null == i ||
                            null === (c = i[0]) ||
                            void 0 === c ||
                            null === (l = c.segmentList) ||
                            void 0 === l
                              ? void 0
                              : l[0],
                          h = (d || {}).rebookReasons,
                          u = void 0 === h ? [] : h;
                        return (null == u ? void 0 : u.length) > 1 && "v2" == n
                          ? void e.navigateTo({
                              url: "/pages/taroCRN/flight/pages/rebookReason/index",
                              data: {
                                orderNumber: e.oid,
                                segment: d,
                                explanation: r,
                                rescheduleRefundRemark: s,
                                isIntl: !1,
                              },
                            })
                          : void e.navigateTo({
                              url: a.rebookApply,
                              data: {
                                orderNumber: e.oid,
                                segment: d,
                                explanation: r,
                                rescheduleRefundRemark: s,
                                isIntl: !1,
                              },
                            });
                      }
                      e.navigateTo({
                        url: a.rebookOperate,
                        data: {
                          orderNumber: e.oid,
                          conditionList: i,
                          tripType: o,
                          explanation: r,
                          rescheduleRefundRemark: s,
                          isIntl: !1,
                        },
                      });
                    })
                    .catch(function (e) {
                      (0, V.showModal)(e.message || "网络异常，请稍后重试~");
                    })
                    .finally(function () {
                      (0, V.hideLoading)();
                    });
                }
              },
              isSelectPerson: function (e) {
                if (!e || 0 == e.length) return [];
                var t = e[0],
                  n = [];
                return (
                  e.forEach(function (e) {
                    e.tickets &&
                      e.tickets.forEach(function (e) {
                        n.push(e);
                      });
                  }),
                  (t.tickets = n),
                  n.length > 0 &&
                    (t.insuranceDetails = T.Z.handleInsurance(t.tickets)),
                  e
                );
              },
              onAppendProduct: function (e) {
                var t,
                  n = e.currentTarget.dataset,
                  a = n.type,
                  i = n.index,
                  r = this.data,
                  o = r.cityId,
                  s = r.flightSegmentInfos,
                  c = r.appendProducts;
                if ("HOTELCOUPON" !== a)
                  if (
                    "INSURANCE" !== a ||
                    "http" !==
                      (null === (t = c[i].productRemarkUrl) || void 0 === t
                        ? void 0
                        : t.slice(0, 4))
                  ) {
                    if ("MEMBERSHIP" == a)
                      return this.navigateTo({
                        url: "/pages/usercenter/member/member",
                      });
                    if (["PACKAGE", "REFUND_REDUCE"].includes(a))
                      return this.setData({
                        showType: "package-product-order-detail-pop",
                        productOrderNumber: c[i].productOrderNumber,
                      });
                    if ("BUSINESS_TRAVEL_CASHBACK" !== a)
                      "TRAIN_COUPON" === a && c[i].trainCoupon
                        ? (0, xe.Z)({
                            data: c[i].trainCoupon,
                            fromPage: "detail",
                          })
                        : "FLIGHT_TRAIN_DELAY_RETURN" !== a
                        ? (0, V.showToast)("请前往原预订渠道查看～")
                        : (function (e) {
                            Ae.apply(this, arguments);
                          })({ orderNumber: c[i].productOrderNumber });
                    else {
                      var l = X.default.isTieyou
                          ? "m.tieyou.com"
                          : "m.suanya.com",
                        d = X.default.isTieyou ? "tieyou" : "zhixing",
                        h = this.oid,
                        u = "https://"
                          .concat(
                            l,
                            "/webapp/train/activity/20220609-flight-business-cashback?partner="
                          )
                          .concat(d, "&orderNumber=")
                          .concat(h, "&isHideNavBar=YES");
                      I.Z.twebview({ data: { url: u } });
                    }
                  } else
                    I.Z.twebview({
                      data: {
                        url: c[i].productRemarkUrl.replace(
                          /http:\/\//,
                          "https://"
                        ),
                        title: c[i].productTitle,
                      },
                    });
                else {
                  var m = {
                    cityId: o,
                    cityName: s[0].flightSegmentInfo.arriveCityName,
                  };
                  w().reLaunch({
                    url: "/pages/home/index?tab=hotel&d=".concat(
                      JSON.stringify(m)
                    ),
                  });
                }
              },
              clearShowType: function () {
                this.setData({ showType: "" });
              },
              showPackageProductCancelPop: function () {
                this.setData({ showType: "package-product-order-cancel-pop" });
              },
              togglePriceDetail: function () {
                var e = this,
                  t = this.data,
                  n = t.showPriceDetail,
                  a = t.priceDetail;
                this.setData({ showPriceDetail: !n }),
                  n
                    ? this.closeCommonDrawer()
                    : (0, G.F)({
                        priceDetail: a,
                        beforeClose: function () {
                          e.setData({ showPriceDetail: !1 });
                        },
                        className: "flt-price-detail",
                      });
              },
              toggleTicketInfo: function () {
                var e = this,
                  t = this.data.showTicketInfo;
                this.setData({ showTicketInfo: !t, maskType: "ticket" }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              agreeProtect: function (e) {
                var t = this,
                  n = e.flightChangeOrderId,
                  a = {
                    data: { orderNumber: this.oid, flightChangeOrderId: n },
                  };
                (0, V.showLoading)(),
                  (0, de.IP)(a)
                    .then(function (e) {
                      1 == e.resultCode &&
                        ((0, V.showToast)("已接收调整"), t.reload());
                    })
                    .catch(function (e) {
                      console.log(e);
                    })
                    .finally(function () {
                      (0, V.hideLoading)();
                    });
              },
              onBannerItemClick: function (e) {
                var t = (this.data.externalOrderInfo || {}).rebookDetailVersion,
                  n = e.code;
                if ("GROWTH_PLAN_COUPON" !== n)
                  if ("flight-change" != n)
                    if ("rebook" != n)
                      "refund" == n &&
                        this.navigateTo({
                          url: "/pages/taroCRN/flight/pages/refundDetail/index",
                          data: {
                            orderNumber: this.oid,
                            flightSegmentInfos: this.flightSegmentInfosRaw,
                            refundId: e.refundInfo.refundId,
                          },
                        }),
                        "SPRING_FESTIVAL_2023_ACTIVITY" == n &&
                          I.Z.twebview({ data: { url: e.url } });
                    else {
                      var a = this.flightSegmentInfosRaw.reduce(function (
                          e,
                          t
                        ) {
                          return e.concat(t.rebookInfos);
                        },
                        []),
                        i = a.findIndex(function (t) {
                          return (
                            t.rebookOrderNumber ==
                            e.rebookInfo.rebookOrderNumber
                          );
                        }),
                        r =
                          "v2" == t
                            ? "/pages/taroCRN/flight/pages/rebookDetail/index"
                            : "/pages/flightAfterSale/rebookDetail/rebookDetail";
                      this.navigateTo({
                        url: r,
                        data: {
                          orderNumber: this.oid,
                          currentIndex: i,
                          rebookInfos: a,
                          isIntl: !1,
                        },
                      });
                    }
                  else this.showFlightChangePop();
                else this.linkToPage("/pages/usercenter/kaquan/kaquan");
              },
              toggleNoticeInfo: function () {
                var e = this,
                  t = this.data.showNoticeInfo;
                this.setData({ showNoticeInfo: !t, maskType: "notice" }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              showFlightChangePop: function () {
                var e = this,
                  t = this.data,
                  n = t.flightSegmentInfos,
                  a = t.basicOrderInfo.orderType;
                this.showCommonDrawer({
                  hideTitle: !0,
                  hideClose: !0,
                  content: function (t) {
                    var i = t.onClose;
                    return (0, H.tZ)(oe, {
                      onClose: i,
                      orderType: a,
                      flightSegmentInfos: n,
                      handleRefund: function () {
                        i(), e.handleRefundAction();
                      },
                      handleRebook: function () {
                        i(), e.handleRebookAction();
                      },
                      handleAgree: function (t) {
                        i(), e.agreeProtect(t);
                      },
                    });
                  },
                  className: "flt-change-pop",
                  height: "80vh",
                });
              },
              closeMask: function (e) {
                var t = e.currentTarget.dataset.type;
                "ticket" === t
                  ? this.toggleTicketInfo()
                  : "reason" === t
                  ? this.toggleReasonPanel()
                  : "guessRule" === t
                  ? this.toggleGuessRule()
                  : "guess" === t
                  ? this.toggleGuessPopup()
                  : "notice" === t && this.toggleNoticeInfo();
              },
              cancelRebook: function () {
                var e = this,
                  t = this.data.activeRebookInfo,
                  n = t.tips;
                t.cancelRebook
                  ? this.showMultiButtonDialog({
                      title: "取消改签",
                      content: n || "是否确定取消?",
                      leftButtonName: "取消",
                      rightButtonName: "确定",
                      onRightButtonClick: function () {
                        e.doCancelRebook();
                      },
                    })
                  : this.showMultiButtonDialog({
                      title: "取消改签",
                      content:
                        "暂不支持自动取消改签，请联系在线客服为您进行改签操",
                      leftButtonName: "联系客服",
                      rightButtonName: "返回",
                      onLeftButtonClick: function () {
                        e.goIMPage();
                      },
                    });
              },
              doCancelRebook: function () {
                var e = this,
                  t = this.data.activeRebookInfo.rebookOrderNumber,
                  n = { data: { orderNumber: this.oid, rebookOrderNumber: t } };
                (0, de.Of)(n)
                  .then(function (t) {
                    1 == t.resultCode
                      ? ((0, V.showToast)(t.resultMessage || "提交成功"),
                        e.reload())
                      : (0, V.showModal)(
                          t.resultMessage || "请求失败，请稍后重试"
                        );
                  })
                  .catch(function () {
                    (0, V.showModal)("请求失败，请稍后重试");
                  });
              },
              cancelOrder: function (e) {
                var t = this,
                  n = this.data.basicOrderInfo.grabStatus,
                  a = (void 0 === n ? 0 : n) > 0,
                  i = a ? "" : e || "点击取消按钮",
                  r = { data: { orderNumber: this.oid, reason: i } };
                C.Z.isFastDoubleClick() ||
                  (a
                    ? w().showModal({
                        title: "温馨提示",
                        content: "正在为您努力抢票中，确定取消抢票订单吗？",
                        confirmText: "取消订单",
                        cancelText: "点错了",
                        success: function (e) {
                          if (!e.confirm) return !1;
                          (0, V.showLoading)("正在取消订单"),
                            (0, de.rn)(r)
                              .then(
                                function () {},
                                function () {}
                              )
                              .finally(function () {
                                (0, V.hideLoading)(),
                                  t.getFlightDetail(),
                                  (R.IK.doNotRefreshIndexUnpaidOrder = !1);
                              });
                        },
                      })
                    : ((0, V.showLoading)("正在取消订单"),
                      (0, de.rn)(r)
                        .then(
                          function () {},
                          function () {}
                        )
                        .finally(function () {
                          (0, V.hideLoading)(),
                            t.getFlightDetail(),
                            (R.IK.doNotRefreshIndexUnpaidOrder = !1);
                        })));
              },
              handlePayAction: function () {
                if (
                  (this.data.showPriceDetail && this.togglePriceDetail(),
                  !C.Z.isFastDoubleClick())
                ) {
                  (0, V.showLoading)("获取支付信息");
                  var e =
                    this.data.operateModule.payOperateInfo.orderPaymentInfo
                      .orderNumber;
                  b.ZP.doPayment({ orderNumber: e, business: "flight" })
                    .then(function () {
                      he.Z.doSubscribeAfterPay();
                    })
                    .catch(function () {})
                    .finally(function () {
                      (0, V.hideLoading)(),
                        (R.IK.doNotRefreshIndexUnpaidOrder = !1);
                    });
                }
              },
              toFlightOrderList: function () {
                w().switchTab({
                  url: "/pages/myctrip/list/list?orderType=flight",
                });
              },
              handleWithDraw: function () {
                this.setData({ bargainShow: !0 });
              },
              getCashbackShare: function (e) {
                var t = this,
                  n = { orderNumber: e || this.oid },
                  a = se.c0.get();
                (0, x.b7)(n)
                  .then(function (e) {
                    if (1 === e.resultCode) {
                      var n;
                      if (e.shareKey) {
                        var i = e.showFlag,
                          r = e.maxMoney,
                          o = e.assistMoney,
                          s = e.endTime,
                          c = e.withDrawExpireTime,
                          l = e.bulletList,
                          d = e.shareKey,
                          h = e.statusRemark,
                          u = void 0 === h ? "" : h,
                          m = e.popupBtnText,
                          f = 0 == i || (!a && (0 == i || 1 == i));
                        t.setData({
                          kanjiaInfos: {
                            showFlag: i,
                            maxMoney: r,
                            assistMoney: o,
                            endTime: s,
                            bulletList: l,
                            shareKey: d,
                            statusRemark: u,
                            popupBtnText: m,
                            withDrawExpireTime: c,
                          },
                          bargainShow: f,
                        }),
                          s &&
                            new Date(s.replace(/-/g, "/")).getTime() >=
                              Date.now() &&
                            t.countDown();
                      }
                      if (
                        null !== (n = e.inviteRewardDetailList) &&
                        void 0 !== n &&
                        n.length
                      ) {
                        var g = e.inviteRewardDetailList;
                        t.setData({ activityBanner: g });
                      }
                    } else t.setData({ hotelCouponShow: !a });
                  })
                  .catch(function () {
                    t.setData({ hotelCouponShow: !a });
                  });
              },
              countDown: function () {
                var e = this.data.kanjiaInfos.endTime || "";
                if (e) {
                  var t = new Date().getTime();
                  if (new Date(e.replace(/\-/g, "/")).getTime() - t < 0)
                    return (
                      clearTimeout(this.timer),
                      void this.getCashbackShare(this.oid)
                    );
                  this.timer = setTimeout(this.countDown, 1e3);
                }
              },
              doIssueCashBackAction: function () {
                var e = { orderNumber: this.data.kanjiaInfos.shareKey };
                (0, de.Ux)(e).catch(function () {});
              },
              onShareAppMessage: function (e) {
                var t = e.target.dataset.type,
                  n = this.data.isTieyou;
                if ("guess" === t) {
                  var a = this.data.guessTrend.shareUrl;
                  return {
                    title: "".concat(
                      this.data.isTieyou ? "铁友" : "智行",
                      "机票猜涨跌 好友助力赚积分"
                    ),
                    path: a,
                    imageUrl:
                      "https://images3.ctrip.com/ztrip/flight/flight_czd_".concat(
                        n ? "ty" : "zx",
                        ".png"
                      ),
                  };
                }
                var i = this.data,
                  r = i.kanjiaInfos,
                  o = void 0 === r ? {} : r,
                  s = i.flightSegmentInfos,
                  c = o.shareKey,
                  l = o.showFlag,
                  d = s[0].flightSegmentInfo.arriveCityName;
                if (c)
                  return (
                    0 === l && this.doIssueCashBackAction(),
                    {
                      title: "去【".concat(
                        d,
                        "】的机票全网比价超省钱，助我点一下你也拿20！"
                      ),
                      path: "/pages/activity/flight/kanjia/index?shareKey=".concat(
                        encodeURIComponent(c)
                      ),
                      imageUrl:
                        "https://images3.c-ctrip.com/zt/wechat/flight/flight_kanjia_3_".concat(
                          n ? "ty" : "zx",
                          ".png"
                        ),
                    }
                  );
              },
              handleReturnFlightInfos: function () {
                var e = this.data,
                  t = e.basicOrderInfo,
                  n = t.orderState,
                  a = t.orderType,
                  i = e.flightSegmentInfos;
                if (!(n < 9)) {
                  var r = "",
                    o = "",
                    s = "",
                    c = "",
                    l = "";
                  if (2 !== a) {
                    if (4 === a)
                      console.log("中转订单"),
                        (r = i[1].flightSegmentInfo.arriveCityName),
                        (o = i[1].flightSegmentInfo.arriveCityCode),
                        (s = i[0].flightSegmentInfo.departCityName),
                        (c = i[0].flightSegmentInfo.departCityCode),
                        (l =
                          i[1].flightSegmentInfo.arriveDateTime.split(" ")[0]);
                    else {
                      if (1 !== a) return;
                      console.log("直飞订单"),
                        (r = i[0].flightSegmentInfo.arriveCityName),
                        (o = i[0].flightSegmentInfo.arriveCityCode),
                        (s = i[0].flightSegmentInfo.departCityName),
                        (c = i[0].flightSegmentInfo.departCityCode),
                        (l =
                          i[0].flightSegmentInfo.arriveDateTime.split(" ")[0]);
                    }
                    if (
                      ((l = F()(l).add(1, "day").format(Le)),
                      !T.Z.compareTodayToDate(l))
                    ) {
                      var d = {
                        departCity: r,
                        departCityCode: o,
                        arriveCity: s,
                        arriveCityCode: c,
                        departDate: l,
                      };
                      this.setData({ returnFlightInfo: d }),
                        this.getCalendarLowestPrice(d);
                    }
                  } else console.log("往返订单");
                }
              },
              getCalendarLowestPrice: function (e) {
                var t = this,
                  n = e.departCityCode,
                  a = e.arriveCityCode,
                  i = e.departDate,
                  r = this.data.returnFlights;
                if (!(r && r.length > 0)) {
                  var o = {
                    data: {
                      departCityCode: n,
                      arriveCityCode: a,
                      departDate: i,
                    },
                  };
                  (0, x.MX)(o).then(function (e) {
                    1 === e.resultCode &&
                      e.data &&
                      e.data.length > 0 &&
                      t.handleReturnFlights(e.data);
                  });
                }
              },
              handleReturnFlights: function (e) {
                var t = this.data.returnFlightInfo,
                  n = t.departCity,
                  a = t.arriveCity,
                  i = t.departDate,
                  r = C._.sortBy(e, "flightDate"),
                  o = r.findIndex(function (e) {
                    return e.flightDate.split(" ")[0] === i;
                  });
                if (-1 !== o) {
                  var s = r.slice(o, o + 7);
                  s = s.map(function (e) {
                    return {
                      flightDate: e.flightDate.split(" ")[0],
                      price: e.price,
                    };
                  });
                  var c = (s = C._.sortBy(s, "price")).filter(function (e) {
                    return e.price === s[0].price;
                  }).length;
                  for (var l in ((c = c >= 3 ? 2 : c), s))
                    s[l].tag = l <= c - 1;
                  this.setData({
                    returnFlights: s.map(function (e) {
                      return {
                        cityDesc: "".concat(n, "-").concat(a),
                        flightDate: e.flightDate,
                        date: ""
                          .concat(F()(e.flightDate).format("M月D日"), " ")
                          .concat(L.Z.getWeekDay(e.flightDate)),
                        price: e.price,
                        priceTag: e.tag,
                      };
                    }),
                  });
                }
              },
              hotelCouponClose: function () {
                this.setData({ hotelCouponShow: !1 }), se.c0.set(!0);
              },
              chooseDate: function () {
                var e = this.data.returnFlightInfo,
                  t = e.departCityCode,
                  n = e.arriveCityCode,
                  a = e.departDate,
                  i = F()(a).format(Le),
                  r = F()().add(179, "day").format(Le),
                  o = { data: { departCityCode: t, arriveCityCode: n } },
                  s = this;
                I.Z.calendar(
                  {
                    chooseDate: i,
                    beginDate: i,
                    endDate: r,
                    title: "选择出发日期",
                    bu: "flight",
                    queryParams: o,
                  },
                  function (e) {
                    console.log(e),
                      setTimeout(function () {
                        s.toFlightList(e);
                      }, 600);
                  }
                );
              },
              handleReturnClick: function (e) {
                var t = e.currentTarget.dataset.index,
                  n = this.data.returnFlights[t].flightDate;
                this.toFlightList(n);
              },
              toFlightList: function (e) {
                var t = this.data.returnFlightInfo,
                  n = t.departCity,
                  a = t.departCityCode,
                  i = t.arriveCity,
                  r = t.arriveCityCode;
                this.navigateTo({
                  url: "/pages/flight/list/list?departCity="
                    .concat(n, "&departCityCode=")
                    .concat(a, "&arriveCity=")
                    .concat(i, "&arriveCityCode=")
                    .concat(r, "&departDate=")
                    .concat(e, "&nearby=1"),
                });
              },
              toFlightIndex: function () {
                C.Z.relaunchHome("flight");
              },
              handleLastPayTimeCountDown: function () {
                var e = this.data,
                  t = e.operateModule,
                  n = void 0 === t ? {} : t,
                  a = e.showPriceDetail,
                  i = n.payFlag,
                  r = n.payOperateInfo;
                if (i) {
                  var o = r.orderPaymentInfo.lastPayTime,
                    s = T.Z.countDown(o),
                    c = s.min,
                    l = s.sec;
                  if (s.end)
                    return (
                      clearTimeout(this.payTimer),
                      a && this.togglePriceDetail(),
                      void this.getFlightDetail()
                    );
                  this.setData({
                    lastPayTime: "".concat(c, "分").concat(l, "秒"),
                  }),
                    (this.payTimer = setTimeout(
                      this.handleLastPayTimeCountDown,
                      1e3
                    ));
                } else this.payTimer && clearTimeout(this.payTimer);
              },
              toggleReasonPanel: function () {
                var e = this,
                  t = this.data.showReasonPanel;
                this.setData({ showReasonPanel: !t, maskType: "reason" }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              selectReason: function (e) {
                var t = e.currentTarget.dataset.index,
                  n = this.data.operateModule,
                  a = n.cancelReasons.map(function (e) {
                    return (0, m.Z)((0, m.Z)({}, e), {}, { selected: !1 });
                  });
                (a[t].selected = !0),
                  this.setData({
                    operateModule: (0, m.Z)(
                      (0, m.Z)({}, n),
                      {},
                      { cancelReasons: a }
                    ),
                    enableReasonSubmit: !0,
                  });
              },
              feedbackInput: function (e) {
                var t = e.detail.value;
                console.log(t), this.setData({ cancelFeedback: t.trim() });
              },
              handleReasonSubmit: function () {
                var e = this,
                  t = this.data,
                  n = t.operateModule.cancelReasons,
                  a = t.cancelFeedback,
                  i = {
                    data: {
                      orderNumber: t.basicOrderInfo.orderNumber,
                      reason: n.some(function (e) {
                        return e.selected;
                      })
                        ? n.filter(function (e) {
                            return e.selected;
                          })[0].title
                        : "",
                      description: a,
                    },
                  };
                console.log(i),
                  (0, de.Al)(i).finally(function () {
                    e.toggleReasonPanel(), e.cancelOrder();
                  });
              },
              setPushHotelModel: function () {
                var e = this;
                return (0, f.Z)(
                  (0, u.Z)().mark(function t() {
                    var n, a, i, r, o, s, c;
                    return (0, u.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((n = e.data),
                                (a = n.flightSegmentInfos),
                                (i = n.basicOrderInfo) && !(i.orderState < 9))
                              ) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt("return");
                            case 3:
                              if (a) {
                                t.next = 5;
                                break;
                              }
                              return t.abrupt("return");
                            case 5:
                              return (
                                (r = F()().format(Le)),
                                a[0].flightSegmentInfo.arriveDateTime &&
                                  (r =
                                    a[0].flightSegmentInfo.arriveDateTime.slice(
                                      0,
                                      10
                                    )),
                                (o = F()(r)).valueOf() < F()().valueOf() &&
                                  (o = F()()),
                                (o = o.format(Le)),
                                (s = a[0].flightSegmentInfo.arriveCityName),
                                (t.prev = 11),
                                (t.next = 14),
                                e.getHotelCityInfo(
                                  o,
                                  F()(o).add(1, "day").format(Le),
                                  s
                                )
                              );
                            case 14:
                              (c = t.sent),
                                e.setData({
                                  canShowPushHotel: !!c,
                                  hotelInfo: {
                                    checkInDate: o,
                                    cityName: s,
                                    cityId: c,
                                  },
                                }),
                                console.log(e.data.hotelInfo),
                                (t.next = 22);
                              break;
                            case 19:
                              (t.prev = 19),
                                (t.t0 = t.catch(11)),
                                console.log(t.t0);
                            case 22:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[11, 19]]
                    );
                  })
                )();
              },
              getHotelCityInfo: function (e, t, n) {
                var a = {
                  data: {
                    checkIn: e,
                    checkOut: t,
                    arriveStation: n,
                    clientVersion: y.Z.clientVersion,
                  },
                };
                return (0, P.oT)(a).then(function (e) {
                  var t = e || {},
                    n = t.resultCode,
                    a = t.data;
                  if (1 === n) {
                    var i = (a || {}).cityId;
                    return void 0 === i ? "" : i;
                  }
                });
              },
              linkToPage: function (e) {
                this.navigateTo({ url: e });
              },
              onClickChangePrivilegeInfoVisible: function (e) {
                var t = e.currentTarget.dataset.index,
                  n = this.data.externalOrderInfo,
                  a = n.orderPrivilegeInfos.map(function (e, n) {
                    var a = n === t ? !e.isShow : e.isShow;
                    return (0, m.Z)((0, m.Z)({}, e), {}, { isShow: a });
                  });
                (n.orderPrivilegeInfos = a),
                  this.setData({ externalOrderInfo: n });
              },
              handleReturnMoneyDetailClick: function () {
                var e = this.data.externalOrderInfo,
                  t = e.returnMoneyDetail;
                (t.isShow = !t.isShow), this.setData({ externalOrderInfo: e });
              },
              noop: function () {},
              onHide: function () {
                (0, V.hideLoading)();
              },
              handleActivityClick: function (e) {
                I.Z.twebview({ data: { url: e } });
              },
              openAnnouncement: function () {
                this.setData({ showAnnouncement: !0 });
              },
              onAnnouncementPopupClose: function () {
                this.setData({ showAnnouncement: !1 });
              },
              goIMPage: function () {
                var e = this.data,
                  t = e.basicOrderInfo,
                  n = e.goodsId,
                  a = t || {},
                  i = a.orderNumber,
                  r = a.orderPrice,
                  o = Fe ? 1473 : 1476,
                  s = Fe ? "TieYouFlight" : "ZhiXingFlight",
                  c = Fe ? 10650075344 : 10650075342,
                  l = {
                    ctype: "ORD",
                    cid: i,
                    title: "".concat(
                      Fe ? "铁友" : "智行",
                      "小程序机票订单详情页咨询入口"
                    ),
                    price: r,
                    currency: "RMB",
                    supplierPid: n,
                  },
                  d = "https://m.ctrip.com/webapp/servicechatv2/?channel="
                    .concat(s, "&bizType=")
                    .concat(o, "&pageCode=")
                    .concat(c, "&isPreSale=0&isHideNavBar=YES&orderInfo=")
                    .concat(
                      encodeURIComponent(JSON.stringify(l)),
                      "&source=ty_web"
                    );
                (0, A.e)(d);
              },
              handleShareByImage: function () {
                var e = this.data.kanjiaInfos,
                  t = void 0 === e ? {} : e,
                  n = t.shareKey,
                  a = t.showFlag;
                n &&
                  (0 === a && this.doIssueCashBackAction(),
                  this.setData({
                    showShareByImage: !0,
                    kanjiaShareUrl:
                      "/pages/activity/flight/kanjia/index?shareKey=".concat(
                        encodeURIComponent(n)
                      ),
                  }));
              },
              handleShareByImageClose: function () {
                se.c0.set(!0),
                  this.setData({ showShareByImage: !1, bargainShow: !1 });
              },
              goCommonQA: function (e) {
                var t = e.url,
                  n = e.content;
                this.ubtTrace(221411, { PageCode: this.pageId, Content: n }),
                  (0, A.e)(t);
              },
              setDataSync: function (e) {
                var t = this;
                return new Promise(function (n) {
                  return t.setData(e, n);
                });
              },
              getChatScene: function () {
                var e = this,
                  t = { data: { orderNumber: Number(this.oid) } };
                return (0, de.Sd)(t).then(function (t) {
                  var n = t.resultCode,
                    a = t.data;
                  if (1 === n) {
                    var i = (a || {}).scenes;
                    e.setData({ chatScenes: i || [] });
                  } else e.setData({ chatScenes: [] });
                });
              },
            },
            He =
              (0, Ie.h)()(
                (Pe =
                  Z()(Ee)(
                    (Pe = (function (e) {
                      (0, s.Z)(n, e);
                      var t = (0, c.Z)(n);
                      function n() {
                        var e;
                        (0, i.Z)(this, n);
                        for (
                          var a = arguments.length, r = new Array(a), s = 0;
                          s < a;
                          s++
                        )
                          r[s] = arguments[s];
                        return (
                          (e = t.call.apply(t, [this].concat(r))),
                          (0, l.Z)((0, o.Z)(e), "_shareWorkable", !0),
                          e
                        );
                      }
                      return (
                        (0, r.Z)(n, [
                          {
                            key: "render",
                            value: function () {
                              var e,
                                t,
                                n,
                                a,
                                i = this,
                                r = this.data,
                                o = r.isTieyou,
                                s = r.basicOrderInfo,
                                c = r.flightSegmentInfos,
                                l = r.tripInfo,
                                d = r.passengerTicketInfos,
                                h = r.contactInfo,
                                u = r.recommendTrain,
                                m = r.appendProducts,
                                f = r.externalOrderInfo,
                                g = r.kanjiaInfos,
                                N = r.guessTrend,
                                w = r.hotelInfo,
                                v = r.canShowPushHotel,
                                Z = r.operateModule,
                                b = r.returnFlights,
                                I = r.showPriceDetail,
                                y = r.lastPayTime,
                                T = r.transition,
                                x = r.maskType,
                                V = r.showTicketInfo,
                                R = r.showReasonPanel,
                                A = r.cancelFeedback,
                                P = r.enableReasonSubmit,
                                M = r.showBaggageAndPolicies,
                                L = r.initialView,
                                E = r.rescheduleRefundRemark,
                                _ = r.rescheduleRefundRemarkType,
                                z = r.guessType,
                                j = r.showGuessPopup,
                                G = r.showGuessRule,
                                W = r.bargainShow,
                                q = r.hotelCouponShow,
                                J = r.showNoticeInfo,
                                ee = r.noticeCard,
                                te = r.bannerList,
                                ne = r.activityBanner,
                                ae = r.showAnnouncement,
                                ie = r.entrancePopup,
                                re = r.entranceDrawerTips,
                                oe = r.tipFloat,
                                se = r.showType,
                                ce = r.productOrderNumber,
                                le = r.refreshPackageProduct,
                                de = r.showShareByImage,
                                he = r.departCityName,
                                ue = r.kanjiaShareUrl,
                                me = r.arriveCityName,
                                fe = r.airTrainCashBackBannerInfo,
                                Ne = r.chatScenes,
                                we = r.priceDetail,
                                Ze =
                                  !this._shareWorkable &&
                                  "zx" === X.default.zxTyStr &&
                                  X.default.isWechat;
                              return (0, H.BX)(H.HY, {
                                children: [
                                  (0, H.BX)(p.View, {
                                    className: "page",
                                    children: [
                                      (0, H.BX)(p.View, {
                                        className: "order-box",
                                        children: [
                                          (0, H.BX)(p.View, {
                                            className:
                                              "order-status " +
                                              (o ? "ty" : "zx"),
                                            children: [
                                              (0, H.BX)(p.View, {
                                                className: "flex",
                                                children: [
                                                  s &&
                                                    (0, H.tZ)(p.Image, {
                                                      className: "status-icon",
                                                      src: s.orderStateIcon,
                                                      style:
                                                        "visibility: ".concat(
                                                          s.orderStateIcon
                                                            ? "visible"
                                                            : "hidden"
                                                        ),
                                                    }),
                                                  s &&
                                                    (0, H.BX)(p.View, {
                                                      className: "cont",
                                                      children: [
                                                        (0, H.tZ)(p.View, {
                                                          className: "tit",
                                                          children:
                                                            s.orderStateDesc,
                                                        }),
                                                        (0, H.tZ)(p.View, {
                                                          className: "txt",
                                                          children:
                                                            s.orderStateSubtitle,
                                                        }),
                                                      ],
                                                    }),
                                                  (0, H.BX)(p.View, {
                                                    className: "info",
                                                    id: "AcDG",
                                                    onClick:
                                                      this
                                                        .toggleBaggageAllowancePolicies,
                                                    children: [
                                                      "退改说明",
                                                      (0, H.tZ)(p.Text, {
                                                        className:
                                                          "ifont-arr iconfont",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              te &&
                                                !!te.length &&
                                                (0, H.tZ)($, {
                                                  bannerList: te,
                                                  onBannerItemClick:
                                                    this.onBannerItemClick.bind(
                                                      this
                                                    ),
                                                }),
                                              (0, H.tZ)(H.HY, {
                                                children:
                                                  (null == oe
                                                    ? void 0
                                                    : oe.topText) &&
                                                  (0, H.BX)(p.View, {
                                                    className:
                                                      "announcement-tips",
                                                    id: "AcDH",
                                                    onClick:
                                                      this.openAnnouncement,
                                                    children: [
                                                      (0, H.tZ)(p.Image, {
                                                        className: "tips-icon",
                                                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/xchengxu/icon_tips@3x.png",
                                                      }),
                                                      (0, H.tZ)(p.View, {
                                                        className: "txt",
                                                        children: (0, H.tZ)(
                                                          k.ZtRichText,
                                                          {
                                                            className:
                                                              "tips-content",
                                                            nodes:
                                                              C.Z.getEllipsisRichText(
                                                                oe.topText
                                                              ),
                                                          }
                                                        ),
                                                      }),
                                                      (0, H.tZ)(p.Text, {
                                                        className:
                                                          "ifont-arr iconfont",
                                                      }),
                                                    ],
                                                  }),
                                              }),
                                              (0, H.tZ)(p.View, {
                                                className:
                                                  "node-isolate-airtrain-cashback-banner",
                                                children: (0, H.tZ)(De, {
                                                  data: fe,
                                                }),
                                              }),
                                              (0, H.tZ)(p.View, {
                                                className:
                                                  "node-isolate-airtrain-push-banner",
                                                children: (0, H.tZ)(Ve, {
                                                  pageId: this.pageId,
                                                  orderNumber: this.oid,
                                                  ubtTrace:
                                                    this.ubtTrace.bind(this),
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, H.BX)(p.View, {
                                            className: "order-bd",
                                            children: [
                                              (0, H.BX)(p.View, {
                                                className: "order-wbox",
                                                children: [
                                                  (0, H.BX)(p.View, {
                                                    className: "order-modify",
                                                    children: [
                                                      (null == c
                                                        ? void 0
                                                        : c.length) > 0 &&
                                                        (0, H.tZ)(ve, {
                                                          flightSegmentInfos: c,
                                                          basicOrderInfo: s,
                                                          tripInfo: l,
                                                          externalOrderInfo: f,
                                                        }),
                                                      f.hotelInfo &&
                                                        (0, H.tZ)(Q, {
                                                          hotelInfo:
                                                            f.hotelInfo,
                                                        }),
                                                    ],
                                                  }),
                                                  (0, H.BX)(p.View, {
                                                    className: "order-pasg",
                                                    children: [
                                                      (0, H.tZ)(p.View, {
                                                        className: "label",
                                                        children: "乘机人",
                                                      }),
                                                      (0, H.tZ)(p.View, {
                                                        className: "cont",
                                                        children:
                                                          d &&
                                                          d.map(function (e) {
                                                            return (0,
                                                            H.tZ)(H.HY, { children: (0, H.BX)(p.View, { className: "pasg-detail", children: [(0, H.tZ)(p.View, { className: "name", children: (0, H.tZ)(p.Text, { children: e.passengerName }) }), (0, H.tZ)(p.View, { className: "card", children: e.passportType + " " + e.passportCode })] }) });
                                                          }),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, H.BX)(p.View, {
                                                    className: "order-phone",
                                                    children: [
                                                      (0, H.tZ)(p.View, {
                                                        className: "label",
                                                        children: "联系手机",
                                                      }),
                                                      (0, H.tZ)(p.View, {
                                                        className: "cont",
                                                        children:
                                                          h && h.contactPhone,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              u &&
                                                (0, H.BX)(p.View, {
                                                  className:
                                                    "order-wbox flt-train-box",
                                                  children: [
                                                    (0, H.tZ)(p.Text, {
                                                      className:
                                                        "ifont-closed iconfont",
                                                      id: "AcDI",
                                                      onClick:
                                                        this
                                                          .handleRecommendTrainClose,
                                                    }),
                                                    (0, H.tZ)(p.Icon, {
                                                      className:
                                                        "icon-kongtie " +
                                                        (o ? "ty" : "zx"),
                                                    }),
                                                    (0, H.BX)(p.View, {
                                                      className: "cont",
                                                      children: [
                                                        (0, H.tZ)(p.View, {
                                                          className: "tit",
                                                          children:
                                                            u.departStationName +
                                                            "-" +
                                                            u.arriveStationName,
                                                        }),
                                                        (0, H.BX)(p.View, {
                                                          className: "txt",
                                                          children: [
                                                            u.subtitle,
                                                            (0, H.tZ)(p.Text, {
                                                              className:
                                                                "price color-red",
                                                              children: u.price,
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, H.tZ)(p.Button, {
                                                      className:
                                                        "btn-go btn-line",
                                                      id: "AcDJ",
                                                      onClick:
                                                        this
                                                          .toOrderTrainBooingPage,
                                                      children: "订火车",
                                                    }),
                                                  ],
                                                }),
                                              ((m && m.length > 0) ||
                                                (f &&
                                                  (f.returnMoneyDetail ||
                                                    (f.orderPrivilegeInfos &&
                                                      f.orderPrivilegeInfos
                                                        .length > 0)))) &&
                                                (0, H.BX)(p.View, {
                                                  className:
                                                    "order-wbox order-serve",
                                                  children: [
                                                    (0, H.tZ)(p.View, {
                                                      className: "tit",
                                                      children: "已购/赠送服务",
                                                    }),
                                                    m &&
                                                      m.length > 0 &&
                                                      (0, H.tZ)(p.View, {
                                                        className:
                                                          "order-serve-hd",
                                                        children: m.map(
                                                          function (e, t) {
                                                            var n =
                                                              "BUSINESS_TRAVEL_CASHBACK" ===
                                                              e.productType
                                                                ? e.productTitle
                                                                : ""
                                                                    .concat(
                                                                      e.productTitle,
                                                                      " x "
                                                                    )
                                                                    .concat(
                                                                      e.productNum
                                                                    )
                                                                    .concat(
                                                                      e.productUnit
                                                                    );
                                                            return (0, H.tZ)(
                                                              H.HY,
                                                              {
                                                                children: (0,
                                                                H.BX)(p.View, {
                                                                  className:
                                                                    "item",
                                                                  "data-index":
                                                                    t,
                                                                  "data-type":
                                                                    e.productType,
                                                                  id: "AcDK",
                                                                  onClick:
                                                                    i.onAppendProduct,
                                                                  children: [
                                                                    (0, H.tZ)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        children:
                                                                          n,
                                                                      }
                                                                    ),
                                                                    (0, H.tZ)(
                                                                      p.Text,
                                                                      {
                                                                        className:
                                                                          "ifont-arr iconfont",
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                              }
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                    f &&
                                                    (f.returnMoneyDetail ||
                                                      (null !==
                                                        (e =
                                                          f.orderPrivilegeInfos) &&
                                                        void 0 !== e &&
                                                        e.length))
                                                      ? (0, H.BX)(p.View, {
                                                          className:
                                                            "order-serve-bd",
                                                          children: [
                                                            f &&
                                                              f.orderPrivilegeInfos &&
                                                              (0, H.tZ)(H.HY, {
                                                                children:
                                                                  f.orderPrivilegeInfos.map(
                                                                    function (
                                                                      e,
                                                                      t
                                                                    ) {
                                                                      return (0,
                                                                      H.BX)(
                                                                        H.HY,
                                                                        {
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              H.BX)(
                                                                                p.View,
                                                                                {
                                                                                  className:
                                                                                    "dt",
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      H.tZ)(
                                                                                        p.Image,
                                                                                        {
                                                                                          src: e.url,
                                                                                          className:
                                                                                            "img",
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      H.tZ)(
                                                                                        p.View,
                                                                                        {
                                                                                          className:
                                                                                            "cont",
                                                                                          children:
                                                                                            e.title +
                                                                                            e.totalAmount +
                                                                                            "元",
                                                                                        }
                                                                                      ),
                                                                                      Array.isArray(
                                                                                        e.items
                                                                                      ) &&
                                                                                      e
                                                                                        .items
                                                                                        .length
                                                                                        ? (0,
                                                                                          H.tZ)(
                                                                                            p.Text,
                                                                                            {
                                                                                              className:
                                                                                                "ifont-arr iconfont " +
                                                                                                (e.isShow
                                                                                                  ? "open"
                                                                                                  : ""),
                                                                                              "data-index":
                                                                                                t,
                                                                                              id: "AcDL",
                                                                                              onClick:
                                                                                                i.onClickChangePrivilegeInfoVisible,
                                                                                            }
                                                                                          )
                                                                                        : null,
                                                                                    ],
                                                                                }
                                                                              ),
                                                                              e.items &&
                                                                                e.isShow &&
                                                                                (0,
                                                                                H.tZ)(
                                                                                  p.View,
                                                                                  {
                                                                                    className:
                                                                                      "dd",
                                                                                    children:
                                                                                      e.items.map(
                                                                                        function (
                                                                                          e
                                                                                        ) {
                                                                                          return (0,
                                                                                          H.BX)(
                                                                                            p.View,
                                                                                            {
                                                                                              className:
                                                                                                "item",
                                                                                              children:
                                                                                                [
                                                                                                  (0,
                                                                                                  H.tZ)(
                                                                                                    p.View,
                                                                                                    {
                                                                                                      className:
                                                                                                        "label",
                                                                                                      children:
                                                                                                        (0,
                                                                                                        H.tZ)(
                                                                                                          k.ZtRichText,
                                                                                                          {
                                                                                                            nodes:
                                                                                                              e.name,
                                                                                                          }
                                                                                                        ),
                                                                                                    }
                                                                                                  ),
                                                                                                  (0,
                                                                                                  H.tZ)(
                                                                                                    p.View,
                                                                                                    {
                                                                                                      className:
                                                                                                        "line",
                                                                                                    }
                                                                                                  ),
                                                                                                  (0,
                                                                                                  H.tZ)(
                                                                                                    p.View,
                                                                                                    {
                                                                                                      className:
                                                                                                        "price",
                                                                                                      children:
                                                                                                        e.amount,
                                                                                                    }
                                                                                                  ),
                                                                                                ],
                                                                                            },
                                                                                            "index"
                                                                                          );
                                                                                        }
                                                                                      ),
                                                                                  }
                                                                                ),
                                                                            ],
                                                                        }
                                                                      );
                                                                    }
                                                                  ),
                                                              }),
                                                            f &&
                                                              f.returnMoneyDetail &&
                                                              (0, H.BX)(H.HY, {
                                                                children: [
                                                                  (0, H.BX)(
                                                                    p.View,
                                                                    {
                                                                      className:
                                                                        "dt",
                                                                      id: "AcDM",
                                                                      onClick:
                                                                        this
                                                                          .handleReturnMoneyDetailClick,
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          H.tZ)(
                                                                            p.Image,
                                                                            {
                                                                              src: f
                                                                                .returnMoneyDetail
                                                                                .icon,
                                                                              className:
                                                                                "img",
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          H.tZ)(
                                                                            p.View,
                                                                            {
                                                                              className:
                                                                                "cont",
                                                                              children:
                                                                                (0,
                                                                                H.tZ)(
                                                                                  k.ZtRichText,
                                                                                  {
                                                                                    nodes:
                                                                                      f
                                                                                        .returnMoneyDetail
                                                                                        .title,
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          H.tZ)(
                                                                            p.Text,
                                                                            {
                                                                              className:
                                                                                "price",
                                                                              children:
                                                                                f
                                                                                  .returnMoneyDetail
                                                                                  .totalPrice +
                                                                                "元",
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          H.tZ)(
                                                                            p.Text,
                                                                            {
                                                                              className:
                                                                                "ifont-arr iconfont " +
                                                                                (f
                                                                                  .returnMoneyDetail
                                                                                  .isShow
                                                                                  ? "open"
                                                                                  : ""),
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                  f &&
                                                                    f.returnMoneyDetail &&
                                                                    f
                                                                      .returnMoneyDetail
                                                                      .list &&
                                                                    f
                                                                      .returnMoneyDetail
                                                                      .list[0] &&
                                                                    f
                                                                      .returnMoneyDetail
                                                                      .isShow &&
                                                                    (0, H.tZ)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "dd",
                                                                        children:
                                                                          f.returnMoneyDetail.list.map(
                                                                            function (
                                                                              e
                                                                            ) {
                                                                              return (0,
                                                                              H.BX)(
                                                                                p.View,
                                                                                {
                                                                                  className:
                                                                                    "item",
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      H.tZ)(
                                                                                        p.View,
                                                                                        {
                                                                                          className:
                                                                                            "label",
                                                                                          children:
                                                                                            (0,
                                                                                            H.tZ)(
                                                                                              k.ZtRichText,
                                                                                              {
                                                                                                nodes:
                                                                                                  e.name,
                                                                                              }
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      H.tZ)(
                                                                                        p.View,
                                                                                        {
                                                                                          className:
                                                                                            "line",
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      H.tZ)(
                                                                                        p.View,
                                                                                        {
                                                                                          className:
                                                                                            "price",
                                                                                          children:
                                                                                            e.price,
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                                "index"
                                                                              );
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                ],
                                                              }),
                                                          ],
                                                        })
                                                      : null,
                                                  ],
                                                }),
                                              null != ne && ne.length
                                                ? (0, H.tZ)(p.Swiper, {
                                                    className: "advs-banner-bd",
                                                    autoplay: !0,
                                                    interval: 3e3,
                                                    circular: !0,
                                                    children: ne.map(function (
                                                      e,
                                                      t
                                                    ) {
                                                      return (0, H.tZ)(
                                                        p.SwiperItem,
                                                        {
                                                          children: (0, H.tZ)(
                                                            p.View,
                                                            {
                                                              className: "item",
                                                              children: (0,
                                                              H.tZ)(p.Image, {
                                                                className:
                                                                  "img",
                                                                src: e.imgUrl,
                                                                id: "AcDN",
                                                                onClick:
                                                                  function () {
                                                                    return i.handleActivityClick(
                                                                      e.jumpUrl
                                                                    );
                                                                  },
                                                              }),
                                                            }
                                                          ),
                                                        },
                                                        t
                                                      );
                                                    }),
                                                  })
                                                : null,
                                              (null != ne && ne.length) ||
                                              !g ||
                                              !g.shareKey
                                                ? null
                                                : (0, H.tZ)(p.View, {
                                                    className:
                                                      "order-wbox activity",
                                                    children: (0, H.BX)(
                                                      p.View,
                                                      {
                                                        className: "kanjia",
                                                        children: [
                                                          (0, H.BX)(p.View, {
                                                            className: "top",
                                                            children: [
                                                              (0, H.tZ)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "top-logo",
                                                                }
                                                              ),
                                                              (0 ==
                                                                g.showFlag ||
                                                                1 ==
                                                                  g.showFlag) &&
                                                                g.endTime &&
                                                                F()(
                                                                  g.endTime
                                                                ).valueOf() >
                                                                  Date.now() &&
                                                                (0, H.BX)(
                                                                  H.HY,
                                                                  {
                                                                    children: [
                                                                      (0, H.tZ)(
                                                                        k.ZtCountdown,
                                                                        {
                                                                          className:
                                                                            "cut-count-down",
                                                                          onTimeup:
                                                                            this
                                                                              .getCashbackShare,
                                                                          endTime:
                                                                            g.endTime,
                                                                        }
                                                                      ),
                                                                      (0, H.tZ)(
                                                                        p.Text,
                                                                        {
                                                                          className:
                                                                            "cut-count-down-text",
                                                                          children:
                                                                            "后失效",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              g.withDrawExpireTime &&
                                                                (0, H.BX)(
                                                                  H.HY,
                                                                  {
                                                                    children: [
                                                                      (0, H.tZ)(
                                                                        k.ZtCountdown,
                                                                        {
                                                                          className:
                                                                            "cut-count-down",
                                                                          onTimeup:
                                                                            this
                                                                              .getCashbackShare,
                                                                          endTime:
                                                                            g.withDrawExpireTime,
                                                                        }
                                                                      ),
                                                                      (0, H.tZ)(
                                                                        p.Text,
                                                                        {
                                                                          className:
                                                                            "cut-count-down-text",
                                                                          children:
                                                                            "后提现失效",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              0 != g.showFlag &&
                                                              1 != g.showFlag &&
                                                              !g.withDrawExpireTime &&
                                                              g.bulletList
                                                                ? (0, H.tZ)(
                                                                    p.View,
                                                                    {
                                                                      className:
                                                                        "swiper-box",
                                                                      children:
                                                                        (0,
                                                                        H.tZ)(
                                                                          p.Swiper,
                                                                          {
                                                                            autoplay:
                                                                              "true",
                                                                            className:
                                                                              "swiper",
                                                                            vertical:
                                                                              "true",
                                                                            interval:
                                                                              "3000",
                                                                            circular:
                                                                              "true",
                                                                            children:
                                                                              g.bulletList.map(
                                                                                function (
                                                                                  e
                                                                                ) {
                                                                                  return (0,
                                                                                  H.tZ)(
                                                                                    H.HY,
                                                                                    {
                                                                                      children:
                                                                                        (0,
                                                                                        H.tZ)(
                                                                                          p.SwiperItem,
                                                                                          {
                                                                                            id: "AcDO",
                                                                                            onClick:
                                                                                              function (
                                                                                                e
                                                                                              ) {
                                                                                                e.stopPropagation();
                                                                                              },
                                                                                            catchMove:
                                                                                              !0,
                                                                                            children:
                                                                                              (0,
                                                                                              H.tZ)(
                                                                                                p.Text,
                                                                                                {
                                                                                                  className:
                                                                                                    "swiper-text",
                                                                                                  children:
                                                                                                    e,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                    }
                                                                                  );
                                                                                }
                                                                              ),
                                                                          }
                                                                        ),
                                                                    }
                                                                  )
                                                                : null,
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "detail",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, H.BX)(p.View, {
                                                            className: "bottom",
                                                            children: [
                                                              (0, H.BX)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "step-box",
                                                                  children: [
                                                                    (0, H.BX)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "des",
                                                                        children:
                                                                          [
                                                                            5 ==
                                                                              g.showFlag &&
                                                                              (0,
                                                                              H.BX)(
                                                                                p.Text,
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      "已满",
                                                                                      (0,
                                                                                      H.tZ)(
                                                                                        p.Text,
                                                                                        {
                                                                                          className:
                                                                                            "color-red",
                                                                                          children:
                                                                                            "50元",
                                                                                        }
                                                                                      ),
                                                                                      "，可提现",
                                                                                    ],
                                                                                }
                                                                              ),
                                                                            2 ==
                                                                              g.showFlag &&
                                                                              (0,
                                                                              H.BX)(
                                                                                p.Text,
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      H.tZ)(
                                                                                        p.Text,
                                                                                        {
                                                                                          className:
                                                                                            "color-red",
                                                                                          children:
                                                                                            "50元",
                                                                                        }
                                                                                      ),
                                                                                      "已提现，可在智行App钱包中查看",
                                                                                    ],
                                                                                }
                                                                              ),
                                                                            5 !=
                                                                              g.showFlag &&
                                                                              2 !=
                                                                                g.showFlag &&
                                                                              (0,
                                                                              H.BX)(
                                                                                p.Text,
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      "还差",
                                                                                      (0,
                                                                                      H.BX)(
                                                                                        p.Text,
                                                                                        {
                                                                                          className:
                                                                                            "color-red",
                                                                                          children:
                                                                                            [
                                                                                              (
                                                                                                50 -
                                                                                                g.assistMoney
                                                                                              ).toFixed(
                                                                                                2
                                                                                              ),
                                                                                              "元",
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      "，可返现50元",
                                                                                    ],
                                                                                }
                                                                              ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, H.BX)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "bar-box",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            H.BX)(
                                                                              p.View,
                                                                              {
                                                                                className:
                                                                                  "bar",
                                                                                children:
                                                                                  [
                                                                                    (0,
                                                                                    H.tZ)(
                                                                                      p.View,
                                                                                      {
                                                                                        className:
                                                                                          "bargained-num",
                                                                                        style:
                                                                                          {
                                                                                            left: "".concat(
                                                                                              (g.assistMoney /
                                                                                                50) *
                                                                                                100 -
                                                                                                72 <
                                                                                                0
                                                                                                ? "72%"
                                                                                                : (
                                                                                                    (g.assistMoney /
                                                                                                      50) *
                                                                                                    100
                                                                                                  ).toFixed(
                                                                                                    2
                                                                                                  ),
                                                                                              "%"
                                                                                            ),
                                                                                          },
                                                                                        children:
                                                                                          5 ==
                                                                                            g.showFlag ||
                                                                                          2 ==
                                                                                            g.showFlag
                                                                                            ? "助力成功"
                                                                                            : "已得¥".concat(
                                                                                                g.assistMoney.toFixed(
                                                                                                  2
                                                                                                )
                                                                                              ),
                                                                                      }
                                                                                    ),
                                                                                    (0,
                                                                                    H.BX)(
                                                                                      p.View,
                                                                                      {
                                                                                        className:
                                                                                          "used",
                                                                                        style:
                                                                                          {
                                                                                            width:
                                                                                              "".concat(
                                                                                                (
                                                                                                  (g.assistMoney /
                                                                                                    50) *
                                                                                                  100
                                                                                                ).toFixed(
                                                                                                  2
                                                                                                ),
                                                                                                "%"
                                                                                              ),
                                                                                          },
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            H.tZ)(
                                                                                              p.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "smaller cell",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            H.tZ)(
                                                                                              p.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "medium cell",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            H.tZ)(
                                                                                              p.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "larger cell",
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            H.tZ)(
                                                                              p.Text,
                                                                              {
                                                                                className:
                                                                                  "total-money ".concat(
                                                                                    5 ==
                                                                                      g.showFlag ||
                                                                                      2 ==
                                                                                        g.showFlag
                                                                                      ? "color-red"
                                                                                      : ""
                                                                                  ),
                                                                                children:
                                                                                  "¥50",
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0 ==
                                                                g.showFlag ||
                                                                1 ==
                                                                  g.showFlag) &&
                                                                (Ze
                                                                  ? (0, H.tZ)(
                                                                      p.Button,
                                                                      {
                                                                        className:
                                                                          "btn",
                                                                        onClick:
                                                                          this.handleShareByImage.bind(
                                                                            this
                                                                          ),
                                                                        "data-ubt-key":
                                                                          "details_page_kanjia_dianji",
                                                                        children:
                                                                          "邀好友助力",
                                                                      }
                                                                    )
                                                                  : (0, H.tZ)(
                                                                      p.Button,
                                                                      {
                                                                        className:
                                                                          "btn",
                                                                        openType:
                                                                          "share",
                                                                        "data-ubt-key":
                                                                          "details_page_kanjia_dianji",
                                                                        children:
                                                                          "邀好友助力",
                                                                      }
                                                                    )),
                                                              5 == g.showFlag &&
                                                                g.withDrawExpireTime &&
                                                                (0, H.tZ)(
                                                                  p.Button,
                                                                  {
                                                                    className:
                                                                      "btn",
                                                                    id: "AcDP",
                                                                    onClick:
                                                                      this
                                                                        .handleWithDraw,
                                                                    children:
                                                                      "立即提现",
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                              N &&
                                                (0, H.BX)(p.View, {
                                                  className:
                                                    "order-wbox order-czd",
                                                  children: [
                                                    (0, H.BX)(p.View, {
                                                      className: "order-czd-hd",
                                                      children: [
                                                        (0, H.tZ)(p.View, {
                                                          className: "tit",
                                                          children: "猜涨跌",
                                                        }),
                                                        (0, H.tZ)(p.View, {
                                                          className: "tag",
                                                          children:
                                                            "赚多倍积分",
                                                        }),
                                                        (0, H.BX)(p.View, {
                                                          className: "rbox",
                                                          id: "AcDQ",
                                                          onClick:
                                                            this
                                                              .toggleGuessRule,
                                                          children: [
                                                            "查看规则",
                                                            (0, H.tZ)(p.Text, {
                                                              className:
                                                                "ifont-arr iconfont",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    0 === N.status &&
                                                      (0, H.BX)(p.View, {
                                                        className:
                                                          "order-czd-bd",
                                                        children: [
                                                          (0, H.tZ)(p.View, {
                                                            className: "tit",
                                                            children:
                                                              "猜: 次日12点该航班价格涨/跌？",
                                                          }),
                                                          (0, H.BX)(p.View, {
                                                            className: "txt",
                                                            children: [
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "ifont-pasg iconfont",
                                                                }
                                                              ),
                                                              N.joinNum +
                                                                "人参与",
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "tred",
                                                                  id: "AcDR",
                                                                  onClick:
                                                                    this
                                                                      .toIntegralIntro,
                                                                  children:
                                                                    "1000积分=10元",
                                                                }
                                                              ),
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "ifont-detail iconfont",
                                                                  id: "AcDS",
                                                                  onClick:
                                                                    this
                                                                      .toIntegralIntro,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, H.BX)(p.View, {
                                                            className:
                                                              "order-czd-line",
                                                            children: [
                                                              (0, H.tZ)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "tred",
                                                                  children:
                                                                    N.upRatio +
                                                                    "%",
                                                                }
                                                              ),
                                                              (0, H.BX)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "line-box",
                                                                  children: [
                                                                    (0, H.tZ)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "line-red",
                                                                        style:
                                                                          "width:" +
                                                                          N.upRatio +
                                                                          "%",
                                                                      }
                                                                    ),
                                                                    (0, H.tZ)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "line-green",
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, H.tZ)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "tgreen",
                                                                  children:
                                                                    100 -
                                                                    N.upRatio +
                                                                    "%",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, H.BX)(p.View, {
                                                            className:
                                                              "order-czd-btn",
                                                            children: [
                                                              (0, H.tZ)(
                                                                p.Button,
                                                                {
                                                                  className:
                                                                    "btn-zhang",
                                                                  "data-type":
                                                                    "1",
                                                                  id: "AcDT",
                                                                  onClick:
                                                                    this
                                                                      .toggleGuessPopup,
                                                                  children:
                                                                    "猜涨",
                                                                }
                                                              ),
                                                              (0, H.tZ)(
                                                                p.Button,
                                                                {
                                                                  className:
                                                                    "btn-die",
                                                                  "data-type":
                                                                    "-1",
                                                                  id: "AcDU",
                                                                  onClick:
                                                                    this
                                                                      .toggleGuessPopup,
                                                                  children:
                                                                    "猜跌",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    (1 === N.status ||
                                                      2 === N.status) &&
                                                      (0, H.BX)(p.View, {
                                                        className:
                                                          "order-czd-bd",
                                                        children: [
                                                          (0, H.BX)(p.View, {
                                                            className: "tit",
                                                            children: [
                                                              "下注「" +
                                                                (1 ===
                                                                N.guessTrend
                                                                  ? "涨"
                                                                  : "跌") +
                                                                "」" +
                                                                N.currentAmount +
                                                                "积分, 分享好友可",
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "tred",
                                                                  children:
                                                                    "加注",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, H.BX)(p.View, {
                                                            className:
                                                              "order-czd-fanbei",
                                                            children: [
                                                              N.currentAmountStrArray.map(
                                                                function (e) {
                                                                  return (0,
                                                                  H.tZ)(H.HY, {
                                                                    children:
                                                                      e > -1 &&
                                                                      (0, H.tZ)(
                                                                        p.View,
                                                                        {
                                                                          className:
                                                                            "num",
                                                                          children:
                                                                            e,
                                                                        }
                                                                      ),
                                                                  });
                                                                }
                                                              ),
                                                              (0, H.tZ)(
                                                                p.Icon,
                                                                {
                                                                  className:
                                                                    "icon-caizhong",
                                                                }
                                                              ),
                                                              N.successAmountStrArray.map(
                                                                function (e) {
                                                                  return (0,
                                                                  H.tZ)(H.HY, {
                                                                    children:
                                                                      e > -1 &&
                                                                      (0, H.tZ)(
                                                                        p.View,
                                                                        {
                                                                          className:
                                                                            "num",
                                                                          children:
                                                                            e,
                                                                        }
                                                                      ),
                                                                  });
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, H.BX)(p.View, {
                                                            className: "txt",
                                                            children: [
                                                              N.dateTime +
                                                                "结果揭晓",
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "tred",
                                                                  id: "AcDV",
                                                                  onClick:
                                                                    this
                                                                      .toIntegralIntro,
                                                                  children:
                                                                    "1000积分=10元",
                                                                }
                                                              ),
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "ifont-detail iconfont",
                                                                  id: "AcDW",
                                                                  onClick:
                                                                    this
                                                                      .toIntegralIntro,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, H.BX)(p.View, {
                                                            className:
                                                              "order-czd-invite",
                                                            children: [
                                                              (0, H.tZ)(
                                                                p.Button,
                                                                {
                                                                  className:
                                                                    "btn-invite",
                                                                  "data-type":
                                                                    "guess",
                                                                  openType:
                                                                    1 ===
                                                                    N.status
                                                                      ? "share"
                                                                      : "",
                                                                  children:
                                                                    2 ===
                                                                    N.status
                                                                      ? "等待开奖"
                                                                      : "邀好友加注",
                                                                }
                                                              ),
                                                              N.cashAssistNum -
                                                                N.assistNum >
                                                              0
                                                                ? (0, H.BX)(
                                                                    p.View,
                                                                    {
                                                                      className:
                                                                        "tips",
                                                                      children:
                                                                        [
                                                                          "分享可加注,差",
                                                                          (0,
                                                                          H.tZ)(
                                                                            p.Text,
                                                                            {
                                                                              className:
                                                                                "tred",
                                                                              children:
                                                                                N.cashAssistNum -
                                                                                N.assistNum,
                                                                            }
                                                                          ),
                                                                          "人再领",
                                                                          (0,
                                                                          H.tZ)(
                                                                            p.Text,
                                                                            {
                                                                              className:
                                                                                "tred",
                                                                              children:
                                                                                "10元现金",
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          H.tZ)(
                                                                            p.Text,
                                                                            {
                                                                              className:
                                                                                "tgrey",
                                                                              children:
                                                                                "(最高)",
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  )
                                                                : (0, H.BX)(
                                                                    p.View,
                                                                    {
                                                                      className:
                                                                        "tips",
                                                                      children:
                                                                        [
                                                                          "分享可加注，已满",
                                                                          (0,
                                                                          H.tZ)(
                                                                            p.Text,
                                                                            {
                                                                              className:
                                                                                "tred",
                                                                              children:
                                                                                N.cashAssistNum,
                                                                            }
                                                                          ),
                                                                          "人开奖后可领现金",
                                                                        ],
                                                                    }
                                                                  ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    3 === N.status &&
                                                      (0, H.BX)(p.View, {
                                                        className:
                                                          "order-czd-bd",
                                                        children: [
                                                          1 === N.guessResult
                                                            ? (0, H.BX)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "tit",
                                                                  children: [
                                                                    "预言「" +
                                                                      (1 ===
                                                                      N.guessTrend
                                                                        ? "涨"
                                                                        : "跌") +
                                                                      "」成功！获得",
                                                                    (0, H.tZ)(
                                                                      p.Text,
                                                                      {
                                                                        className:
                                                                          "tred",
                                                                        id: "AcDX",
                                                                        onClick:
                                                                          this
                                                                            .toIntegralDetailPage,
                                                                        children:
                                                                          N.rewardAmount +
                                                                          "积分",
                                                                      }
                                                                    ),
                                                                    (0, H.tZ)(
                                                                      p.Text,
                                                                      {
                                                                        className:
                                                                          "ifont-arr iconfont",
                                                                        id: "AcDY",
                                                                        onClick:
                                                                          this
                                                                            .toIntegralDetailPage,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              )
                                                            : -1 ===
                                                              N.guessResult
                                                            ? (0, H.tZ)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "tit",
                                                                  children:
                                                                    "预言「" +
                                                                    (1 ===
                                                                    N.guessTrend
                                                                      ? "涨"
                                                                      : "跌") +
                                                                    "」失败！再接再厉！",
                                                                }
                                                              )
                                                            : (0, H.BX)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "tit",
                                                                  children: [
                                                                    "价格未波动！积分已返还",
                                                                    (0, H.tZ)(
                                                                      p.Text,
                                                                      {
                                                                        className:
                                                                          "ifont-arr iconfont",
                                                                        id: "AcDZ",
                                                                        onClick:
                                                                          this
                                                                            .toIntegralDetailPage,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                          (0, H.BX)(p.View, {
                                                            className: "txt",
                                                            children: [
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "ifont-pasg iconfont",
                                                                }
                                                              ),
                                                              N.successRatio +
                                                                "%人预言成功",
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "tred",
                                                                  id: "AcDa",
                                                                  onClick:
                                                                    this
                                                                      .toIntegralIntro,
                                                                  children:
                                                                    "1000积分=10元",
                                                                }
                                                              ),
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "ifont-detail iconfont",
                                                                  id: "AcDb",
                                                                  onClick:
                                                                    this
                                                                      .toIntegralIntro,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          1 === N.cashStatus &&
                                                            (0, H.BX)(p.View, {
                                                              className:
                                                                "order-czd-invite",
                                                              children: [
                                                                (0, H.tZ)(
                                                                  p.Button,
                                                                  {
                                                                    className:
                                                                      "btn-invite",
                                                                    id: "AcDc",
                                                                    onClick:
                                                                      this
                                                                        .collectGuessCash,
                                                                    children:
                                                                      "领取现金",
                                                                  }
                                                                ),
                                                                (0, H.tZ)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "tips",
                                                                    children:
                                                                      "24小时内可领",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          (2 === N.cashStatus ||
                                                            3 ===
                                                              N.cashStatus) &&
                                                            (0, H.BX)(p.View, {
                                                              className:
                                                                "order-czd-status",
                                                              children: [
                                                                (0, H.tZ)(
                                                                  p.Icon,
                                                                  {
                                                                    className:
                                                                      "icon-qian",
                                                                  }
                                                                ),
                                                                (0, H.tZ)(
                                                                  p.Text,
                                                                  {
                                                                    className:
                                                                      "tred",
                                                                    children:
                                                                      "已领" +
                                                                      N.cashAmount +
                                                                      "元",
                                                                  }
                                                                ),
                                                                (0, H.tZ)(
                                                                  p.Text,
                                                                  {
                                                                    className:
                                                                      "tgrey",
                                                                    children:
                                                                      "(出行成功后返至钱包)",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                        ],
                                                      }),
                                                    -1 === N.status &&
                                                      (0, H.BX)(p.View, {
                                                        className:
                                                          "order-czd-bd",
                                                        children: [
                                                          (0, H.tZ)(p.View, {
                                                            className: "tit",
                                                            children:
                                                              "猜: 次日12点该航班价格涨/跌？",
                                                          }),
                                                          (0, H.BX)(p.View, {
                                                            className: "txt",
                                                            children: [
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "ifont-pasg iconfont",
                                                                }
                                                              ),
                                                              N.joinNum +
                                                                "人参与",
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "tred",
                                                                  id: "AcDd",
                                                                  onClick:
                                                                    this
                                                                      .toIntegralIntro,
                                                                  children:
                                                                    "1000积分=10元",
                                                                }
                                                              ),
                                                              (0, H.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "ifont-detail iconfont",
                                                                  id: "AcDe",
                                                                  onClick:
                                                                    this
                                                                      .toIntegralIntro,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, H.tZ)(p.View, {
                                                            className:
                                                              "order-czd-status",
                                                            children: (0, H.tZ)(
                                                              p.Text,
                                                              {
                                                                className:
                                                                  "finish",
                                                                children:
                                                                  "已过下注时间",
                                                              }
                                                            ),
                                                          }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              v &&
                                                O.ZP.recommendFlag &&
                                                (0, H.tZ)(Y, {
                                                  cityName: w.cityName,
                                                  cityId: w.cityId,
                                                  pageId: this.pageId,
                                                  checkIn: w.checkInDate,
                                                  pageInstance: this,
                                                  fromPage:
                                                    "applets_flightDetailHotelCard",
                                                }),
                                              (0, H.BX)(p.View, {
                                                className:
                                                  "order-wbox order-info",
                                                id: "AcDf",
                                                onClick: this.toggleTicketInfo,
                                                children: [
                                                  (0, H.tZ)(p.View, {
                                                    className: "strong",
                                                    children: "订单/电子票号",
                                                  }),
                                                  (0, H.tZ)(p.View, {
                                                    className: "cont",
                                                  }),
                                                  (0, H.tZ)(p.Text, {
                                                    className:
                                                      "ifont-arr iconfont",
                                                  }),
                                                ],
                                              }),
                                              Z &&
                                                Z.cancelFlag &&
                                                s &&
                                                s.grabStatus > 0 &&
                                                (0, H.tZ)(p.View, {
                                                  className:
                                                    "order-wbox order-cancel",
                                                  id: "AcDg",
                                                  onClick: this.cancelOrder,
                                                  children: (0, H.tZ)(
                                                    p.Button,
                                                    {
                                                      className: "cancel",
                                                      children: "取消订单",
                                                    }
                                                  ),
                                                }),
                                              Z &&
                                                Z.cancelFlag &&
                                                s &&
                                                s.grabStatus <= 0 &&
                                                (0, H.tZ)(p.View, {
                                                  className:
                                                    "order-wbox order-cancel",
                                                  id: "AcDh",
                                                  onClick:
                                                    this.toggleReasonPanel,
                                                  children: (0, H.tZ)(
                                                    p.Button,
                                                    {
                                                      className: "cancel",
                                                      children: "取消订单",
                                                    }
                                                  ),
                                                }),
                                              "rebook" ==
                                                (null == Z ||
                                                null ===
                                                  (t = Z.payOperateInfo) ||
                                                void 0 === t ||
                                                null ===
                                                  (n = t.orderPaymentInfo) ||
                                                void 0 === n
                                                  ? void 0
                                                  : n.type) &&
                                                (0, H.tZ)(p.View, {
                                                  className:
                                                    "order-wbox order-cancel",
                                                  id: "AcDi",
                                                  onClick: this.cancelRebook,
                                                  children: (0, H.tZ)(
                                                    p.Button,
                                                    {
                                                      className: "cancel",
                                                      children: "取消改签",
                                                    }
                                                  ),
                                                }),
                                              b &&
                                                b[0] &&
                                                (0, H.BX)(p.View, {
                                                  className:
                                                    "order-wbox order-tickback",
                                                  children: [
                                                    (0, H.BX)(p.View, {
                                                      className: "tit",
                                                      children: [
                                                        "预订返程",
                                                        (0, H.BX)(p.Text, {
                                                          className:
                                                            "more color-primary",
                                                          id: "AcDj",
                                                          onClick:
                                                            this.chooseDate,
                                                          children: [
                                                            "选择返程日期",
                                                            (0, H.tZ)(p.Text, {
                                                              className:
                                                                "ifont-arr iconfont",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, H.BX)(p.View, {
                                                      className: "order-tips",
                                                      children: [
                                                        (0, H.tZ)(p.Icon, {
                                                          className:
                                                            "icon-notice",
                                                        }),
                                                        "返程航线价格可能会上涨，建议尽快预订",
                                                      ],
                                                    }),
                                                    (0, H.tZ)(p.ScrollView, {
                                                      className:
                                                        "order-tickback-scroll",
                                                      scrollX: "true",
                                                      children: b.map(function (
                                                        e,
                                                        t
                                                      ) {
                                                        return (0, H.tZ)(H.HY, {
                                                          children: (0, H.BX)(
                                                            p.View,
                                                            {
                                                              className: "item",
                                                              "data-index": t,
                                                              id: "AcDk",
                                                              onClick:
                                                                i.handleReturnClick,
                                                              children: [
                                                                e.priceTag &&
                                                                  (0, H.tZ)(
                                                                    p.View,
                                                                    {
                                                                      className:
                                                                        "tag bgcolor-red",
                                                                      children:
                                                                        "7天最低",
                                                                    }
                                                                  ),
                                                                (0, H.tZ)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "city",
                                                                    children:
                                                                      e.cityDesc,
                                                                  }
                                                                ),
                                                                (0, H.tZ)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "date",
                                                                    children:
                                                                      e.date,
                                                                  }
                                                                ),
                                                                (0, H.tZ)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "price color-red",
                                                                    children:
                                                                      e.price,
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        });
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              !(null == Ne || !Ne.length) &&
                                                (0, H.BX)(p.View, {
                                                  className:
                                                    "order-wbox order-question",
                                                  children: [
                                                    (0, H.tZ)(p.View, {
                                                      className: "tit",
                                                      children: "常见问题",
                                                    }),
                                                    (0, H.tZ)(p.View, {
                                                      className:
                                                        "cont flex-align-items-center flex-wrap",
                                                      children: Ne.map(
                                                        function (e, t) {
                                                          return (0, H.tZ)(
                                                            p.View,
                                                            {
                                                              className:
                                                                "q-item flex-align-items-center",
                                                              id: "AcDl",
                                                              onClick:
                                                                function () {
                                                                  i.goCommonQA(
                                                                    e
                                                                  );
                                                                },
                                                              children:
                                                                e.content,
                                                            },
                                                            t
                                                          );
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              !Z.payFlag &&
                                                (null == Z ||
                                                null ===
                                                  (a = Z.operateButtons) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.length) > 0 &&
                                                (0, H.tZ)(p.View, {
                                                  className:
                                                    "bottom-operate-box",
                                                  children:
                                                    Z.operateButtons.map(
                                                      function (e) {
                                                        var t = e.type,
                                                          n = e.text;
                                                        return (0, H.tZ)(
                                                          p.View,
                                                          {
                                                            className:
                                                              "operate-btn",
                                                            id: "AcDm",
                                                            onClick:
                                                              function () {
                                                                return i.handleOperateBtn(
                                                                  t
                                                                );
                                                              },
                                                            children: n,
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
                                      Z &&
                                        (0, H.tZ)(be, {
                                          isShowPriceDetail: I,
                                          payFlag: Z.payFlag,
                                          price: we.price,
                                          lastPayTime: y,
                                          onPay:
                                            this.handlePayAction.bind(this),
                                          onBookAgain:
                                            this.toFlightIndex.bind(this),
                                          onShowPriceDetail:
                                            this.togglePriceDetail.bind(this),
                                        }),
                                      q &&
                                        Array.isArray(c) &&
                                        !!c.length &&
                                        c[0].flightSegmentInfo &&
                                        (0, H.tZ)(K, {
                                          params: c[0].flightSegmentInfo,
                                          orderNumber: this.oid,
                                          arriveCityId: this.data.cityId,
                                          hotelCouponClose:
                                            this.hotelCouponClose,
                                        }),
                                      Array.isArray(c) &&
                                        !!c.length &&
                                        (0, H.tZ)(Te, {
                                          isShow: W,
                                          handleBargainClose:
                                            this.handleBargainClose,
                                          popInfo: g,
                                          orderNumber: this.oid,
                                          handleUpdate:
                                            this.handleBargainUpdate,
                                          isShareByImage: Ze,
                                          onShareByImage:
                                            this.handleShareByImage,
                                        }),
                                    ],
                                  }),
                                  (0, H.tZ)(p.View, {
                                    className:
                                      "pop-mask " + (T ? "active" : ""),
                                    "data-type": x,
                                    id: "AcDn",
                                    onClick: function (e) {
                                      e.stopPropagation(), i.closeMask(e);
                                    },
                                    catchMove: !0,
                                  }),
                                  (0, H.BX)(p.View, {
                                    className:
                                      "pop-botm pop-order " +
                                      (V ? "active" : ""),
                                    children: [
                                      (0, H.BX)(p.View, {
                                        className: "pop-botm-hd",
                                        id: "AcDo",
                                        onClick: function (e) {
                                          e.stopPropagation();
                                        },
                                        catchMove: !0,
                                        children: [
                                          (0, H.tZ)(p.View, {
                                            className: "btn-cancel",
                                            id: "AcDp",
                                            onClick: this.toggleTicketInfo,
                                            children: "取消",
                                          }),
                                          (0, H.tZ)(p.View, {
                                            className: "tit",
                                            children: "订单/电子票号",
                                          }),
                                          (0, H.tZ)(p.View, {
                                            className:
                                              "btn-submit color-primary",
                                          }),
                                        ],
                                      }),
                                      (0, H.BX)(p.View, {
                                        className: "pop-botm-bd",
                                        children: [
                                          (0, H.tZ)(p.View, {
                                            className: "txt",
                                            children: "订单号",
                                          }),
                                          (0, H.tZ)(p.View, {
                                            className: "order-num",
                                            children: s && s.orderNumber,
                                          }),
                                          (0, H.tZ)(p.View, {
                                            className: "txt",
                                            children:
                                              "电子票号(出票成功才展示)",
                                          }),
                                          d &&
                                            d.map(function (e) {
                                              return (0, H.tZ)(H.HY, {
                                                children: e.ticketInfos.map(
                                                  function (t) {
                                                    return (0, H.tZ)(H.HY, {
                                                      children:
                                                        t.ticketNumber &&
                                                        (0, H.tZ)(p.View, {
                                                          className:
                                                            "order-num",
                                                          children:
                                                            e.passengerName +
                                                            " " +
                                                            t.ticketNumber,
                                                        }),
                                                    });
                                                  }
                                                ),
                                              });
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, H.tZ)(p.View, {
                                    className:
                                      "pop-botm " + (R ? "active" : ""),
                                    id: "AcDq",
                                    onClick: function (e) {
                                      e.stopPropagation();
                                    },
                                    catchMove: !0,
                                    children: (0, H.BX)(p.View, {
                                      className: "pop-canres",
                                      children: [
                                        (0, H.BX)(p.View, {
                                          className: "tit",
                                          children: [
                                            "请填写取消原因，帮助我们提供更好的服务",
                                            (0, H.tZ)(p.Text, {
                                              className:
                                                "ifont-closed iconfont",
                                              id: "AcDr",
                                              onClick: this.toggleReasonPanel,
                                            }),
                                          ],
                                        }),
                                        (0, H.BX)(p.View, {
                                          className: "pop-canres-bd",
                                          children: [
                                            (0, H.tZ)(p.View, {
                                              className: "cancel-reason-list",
                                              children:
                                                Z &&
                                                Z.cancelReasons &&
                                                Z.cancelReasons.map(function (
                                                  e,
                                                  t
                                                ) {
                                                  return (0, H.BX)(
                                                    p.View,
                                                    {
                                                      className: "item",
                                                      "data-index": t,
                                                      id: "AcDs",
                                                      onClick: i.selectReason,
                                                      children: [
                                                        (0, H.tZ)(p.Text, {
                                                          className:
                                                            "iconfont " +
                                                            (e.selected
                                                              ? "ifont-radioed color-primary"
                                                              : "ifont-radio"),
                                                        }),
                                                        e.title,
                                                      ],
                                                    },
                                                    t
                                                  );
                                                }),
                                            }),
                                            R &&
                                              (0, H.tZ)(p.Textarea, {
                                                className: "canres-tar",
                                                placeholder:
                                                  "我们会仔细阅读您的反馈并尽可能优化问题，感谢您的支持~",
                                                placeholderClass:
                                                  "canres-tar-pld",
                                                value: A,
                                                onInput: this.feedbackInput,
                                              }),
                                          ],
                                        }),
                                        (0, H.tZ)(p.View, {
                                          className: "btn-box",
                                          children:
                                            P || A
                                              ? (0, H.tZ)(p.Button, {
                                                  className: "btn-primary",
                                                  id: "AcDt",
                                                  onClick:
                                                    this.handleReasonSubmit,
                                                  children: "提交",
                                                })
                                              : (0, H.tZ)(p.Button, {
                                                  className: "btn-primary",
                                                  disabled: !0,
                                                  children: "提交",
                                                }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, H.tZ)(U.ZP, {
                                    isShow: M,
                                    initialView: L,
                                    rescheduleRefundRemarkType: _,
                                    rescheduleRefundRemark: E,
                                    handleClose:
                                      this.toggleBaggageAllowancePolicies.bind(
                                        this
                                      ),
                                    dptName: he,
                                    arrName: me,
                                    height: "90vh",
                                  }),
                                  ee &&
                                    (0, H.BX)(p.View, {
                                      className: "pop-botm pop-notice ".concat(
                                        J ? "active" : ""
                                      ),
                                      children: [
                                        (0, H.BX)(p.View, {
                                          className: "pop-botm-hd",
                                          id: "AcDu",
                                          onClick: function (e) {
                                            e.stopPropagation();
                                          },
                                          catchMove: !0,
                                          children: [
                                            (0, H.tZ)(p.View, {
                                              className: "btn-cancel",
                                              id: "AcDv",
                                              onClick: this.toggleNoticeInfo,
                                              children: "取消",
                                            }),
                                            (0, H.tZ)(p.View, {
                                              className: "tit",
                                              children: ee.title,
                                            }),
                                            (0, H.tZ)(p.View, {
                                              className:
                                                "btn-submit color-primary",
                                            }),
                                          ],
                                        }),
                                        (0, H.tZ)(p.View, {
                                          className: "pop-botm-bd",
                                          children: (0, H.tZ)(p.View, {
                                            className: "notice-content",
                                            children: ee.content,
                                          }),
                                        }),
                                      ],
                                    }),
                                  j &&
                                    N &&
                                    (0, H.BX)(p.View, {
                                      className:
                                        "pop-mid pop-czd " +
                                        (1 === z ? "zhang" : "die") +
                                        " " +
                                        (o ? "ty" : "zx"),
                                      children: [
                                        (0, H.tZ)(p.Icon, {
                                          className: "icon-pop",
                                        }),
                                        (0, H.tZ)(p.View, {
                                          className: "tit",
                                          children:
                                            "预言价格" +
                                            (1 === z ? "上涨" : "下跌"),
                                        }),
                                        (0, H.BX)(p.View, {
                                          className: "txt",
                                          children: [
                                            "你有" +
                                              N.points +
                                              (o ? "铁友" : "智行") +
                                              "积分，" +
                                              (N.points < 50
                                                ? "首次积分不足，送你50积分"
                                                : "下注需50积分") +
                                              "，猜中",
                                            (0, H.tZ)(p.Text, {
                                              className: "color-red",
                                              children:
                                                "返还" +
                                                (1 === z
                                                  ? N.upOdds
                                                  : N.downOdds) +
                                                "倍",
                                            }),
                                            "，确认下注？",
                                          ],
                                        }),
                                        (0, H.BX)(p.View, {
                                          className: "pop-btn",
                                          children: [
                                            (0, H.tZ)(p.Button, {
                                              className: "btn-cancel",
                                              id: "AcDw",
                                              onClick: this.toggleGuessPopup,
                                              children: "取消",
                                            }),
                                            (0, H.tZ)(p.Button, {
                                              className: "btn-primary",
                                              "data-type": z,
                                              id: "AcDx",
                                              onClick: this.handleGuessBtnClick,
                                              children: "确定",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, H.BX)(p.View, {
                                    className:
                                      "pop-botm pop-rule " +
                                      (G ? "active" : ""),
                                    id: "AcDy",
                                    onClick: function (e) {
                                      e.stopPropagation();
                                    },
                                    catchMove: !0,
                                    children: [
                                      (0, H.tZ)(p.Text, {
                                        className: "ifont-closed iconfont",
                                        id: "AcDz",
                                        onClick: this.toggleGuessRule,
                                      }),
                                      (0, H.tZ)(p.View, {
                                        className: "pop-rule-hd",
                                        children: "活动规则",
                                      }),
                                      (0, H.BX)(p.View, {
                                        className: "pop-rule-bd",
                                        children: [
                                          (0, H.tZ)(p.View, {
                                            className: "tit",
                                            children: "参与方式",
                                          }),
                                          (0, H.tZ)(p.View, {
                                            className: "txt",
                                            children:
                                              "国内机票订单在支付完成后24小时内，消费50" +
                                              (o ? "铁友" : "智行") +
                                              "积分，可预言订单航班价格次日12点涨跌情况，根据下注时间以天为单位算一场活动，开奖时间为下注日期的次日12：05。",
                                          }),
                                          (0, H.tZ)(p.View, {
                                            className: "txt",
                                            children:
                                              "分享至微信/朋友圈，邀请好友助力，可随机获得加注积分，单个好友单次最高加注20积分。",
                                          }),
                                          (0, H.tZ)(p.View, {
                                            className: "txt",
                                            children:
                                              "开奖猜中后奖励对应选项赔率的积分，没猜中则不返还积分，不涨不跌视为跌，若当前航班售罄则返还50积分。",
                                          }),
                                          (0, H.tZ)(p.View, {
                                            className: "tit",
                                            children: "特别说明",
                                          }),
                                          (0, H.tZ)(p.View, {
                                            className: "txt",
                                            children:
                                              "每场活动最高可返还1000积分，取消订单或产生全部退票行为活动依然有效。",
                                          }),
                                          (0, H.tZ)(p.View, {
                                            className: "tit",
                                            children: "其他",
                                          }),
                                          (0, H.tZ)(p.View, {
                                            className: "txt",
                                            children:
                                              "活动中，参与用户如出现不正当行为，包括作弊、网络攻击等，有权取消用户的活动资格，并收回相应积分和优惠券(包括已使用的和未使用的)，" +
                                              (o ? "铁友" : "智行") +
                                              "平台保留活动最终解释权。",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, H.tZ)(D.Z, {
                                    isShow: ae,
                                    entrancePopup: ie,
                                    entranceDrawerTips: re,
                                    onClose: this.onAnnouncementPopupClose,
                                    onWrapClose: this.onAnnouncementPopupClose,
                                  }),
                                  (0, H.tZ)(pe, {
                                    visible:
                                      "package-product-order-detail-pop" == se,
                                    orderNumber: ce,
                                    onClose: function () {
                                      return i.clearShowType();
                                    },
                                    showCancelPop: function () {
                                      return i.showPackageProductCancelPop();
                                    },
                                    refresh: le,
                                    handleRefundAction:
                                      this.handleRefundAction.bind(this),
                                  }),
                                  (0, H.tZ)(ge, {
                                    visible:
                                      "package-product-order-cancel-pop" == se,
                                    orderNumber: ce,
                                    onClose: function () {
                                      return i.clearShowType();
                                    },
                                    reload: function () {
                                      return i.reload();
                                    },
                                    refresh: le,
                                  }),
                                  de &&
                                    (0, H.tZ)(Se, {
                                      shareUrl: ue,
                                      onClose: this.handleShareByImageClose,
                                    }),
                                  (0, H.tZ)(B.Z, {
                                    ref: function (e) {
                                      i.onDialogAttach(e);
                                    },
                                  }),
                                  (0, H.tZ)(S.Z, {
                                    ref: function (e) {
                                      i.onDrawerAttach(e);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        n
                      );
                    })(g.default.Component))
                  ) || Pe)
              ) || Pe;
          (He.enableShareAppMessage = !0),
            Page(
              (0, a.createPageConfig)(
                He,
                "pages/flight/detail/detail",
                { root: { cn: [] } },
                {
                  navigationBarBackgroundColor: "#0066E6",
                  backgroundColorTop: "#0066E6",
                  backgroundColorBottom: "#EFEFEF",
                  enablePullDownRefresh: !0,
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            56620, 3322, 36332, 95854, 8014, 81198, 14906, 49608, 30120, 8905,
            16048, 22175, 72032, 99010, 87479, 16386, 90719, 27849, 65982,
            94885, 74278, 75239, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(42155);
          }
        ),
          e.O();
      },
    ]);
})();
