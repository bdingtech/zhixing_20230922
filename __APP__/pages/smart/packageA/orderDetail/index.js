!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../sub-common/7a64e02088e78e12a60f5110f7cf05f1.js"),
    require("../sub-common/2eae4dfc35be5d14dfc1dc2d3e80f01e.js"),
    require("../sub-common/5de1d16dbb0559dc875a17959f3a651a.js"),
    require("../sub-common/a5b2627074afffb5e1fe584b3af24843.js"),
    require("../sub-common/ebaf792912af305d93ba8f963b48e810.js"),
    require("../sub-common/556f080ea118d062032d822e87821523.js"),
    require("../sub-common/2183a65ee8b33cb31f807fe6c300e374.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [34585],
      {
        65433: function (e, t, i) {
          var a = i(32180),
            n = i(90129),
            r = i(298),
            o = i(79301),
            l = i(95308),
            s = i(57042),
            c = i(24460),
            d = i(81876),
            u = i(21867),
            m = i(86066),
            f = i(45023),
            h = i(52500),
            p = i(8271),
            v = i.n(p),
            g = i(92954),
            T = i.n(g),
            b = i(71515),
            w = i(81957),
            N = i(79910),
            y = i(38911),
            Z = i(10741),
            S = i(93761),
            C = i(79792),
            x = i(18783),
            D = i(49120),
            k = i(25391),
            I = i(3205),
            B = i(96158),
            P = i(97939),
            V = i(15125),
            _ = i(58676),
            M = i(94190),
            X = i(76290),
            A = i(38797),
            O = i(74290),
            E = i(20592),
            R = i(37451),
            F = i(38561),
            L = (0, i(17377).ZP)({
              serviceCode: "24032",
              channel: C.default.train_channel,
              path: "smartCross",
            }),
            z = i(80254),
            G = i(48813);
          function j(e) {
            if (e) {
              var t = new Date(e.replace(/-/g, "/")).getTime();
              return Math.floor((t - Date.now()) / 1e3);
            }
          }
          function q(e) {
            if (!Number.isInteger(e) || e < 0) return "";
            var t = Math.floor(e / 60);
            return (t > 0 ? t + "分" : "") + Math.floor(e % 60) + "秒";
          }
          var U = h.default.memo(function (e) {
              var t = e.endTime,
                i = e.handleTimeEnd,
                a = e.textStyle,
                o = j(t),
                l = (0, h.useState)(Number.isInteger(o) && o <= 0),
                s = (0, n.Z)(l, 2),
                c = s[0],
                d = s[1],
                u = (0, h.useState)(q(o)),
                m = (0, n.Z)(u, 2),
                f = m[0],
                p = m[1];
              return (
                (0, h.useEffect)(
                  function () {
                    c && i && i();
                  },
                  [c]
                ),
                (0, z.Z)(
                  function () {
                    var e = j(t);
                    e <= 0 ? d(!0) : p(q(e));
                  },
                  c ? null : 1e3
                ),
                (0, G.tZ)(b.Text, { style: (0, r.Z)({}, a), children: f })
              );
            }),
            W = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, m.Z)(i);
              function i(e) {
                var a;
                return (
                  (0, s.Z)(this, i),
                  ((a = t.call(this, e)).state = {
                    setMarquee: !1,
                    textWidth: null,
                    duration: 8,
                    animationName: "marquee",
                    isOverTime: !1,
                  }),
                  (a.timeoutId_1 = null),
                  (a.timeoutId_2 = null),
                  a
                );
              }
              return (
                (0, c.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e = this;
                      setTimeout(function () {
                        e.setMarquee();
                      }, 200);
                    },
                  },
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      var t = this;
                      e.orderStatusMessage !== this.props.orderStatusMessage &&
                        (this.timeoutId_1 &&
                          (clearTimeout(this.timeoutId_1),
                          (this.timeoutId_1 = null)),
                        (this.timeoutId_1 = setTimeout(function () {
                          console.log("setMarquee"), t.setMarquee();
                        }, 200)));
                    },
                  },
                  {
                    key: "setMarquee",
                    value: function () {
                      var e = this,
                        t = T()
                          .createSelectorQuery()
                          .in((0, D.getCurrentPage)());
                      t.select(".txt").fields({ size: !0 }),
                        t.select(".content").fields({ size: !0 }),
                        t.exec(function (t) {
                          if ((console.log("selector query", t), t)) {
                            var i = t[0] && t[0].width,
                              a = t[1] && t[1].width;
                            if (i > a) {
                              var n = (8 * i) / a;
                              e.setState({
                                setMarquee: !0,
                                textWidth: i,
                                animationName: "marquee",
                                duration: n,
                              }),
                                e.timeoutId_2 &&
                                  (clearTimeout(e.timeoutId_2),
                                  (e.timeoutId_2 = null)),
                                (e.timeoutId_2 = setTimeout(function () {
                                  console.log(
                                    "reset animation name & duration"
                                  ),
                                    e.setState({
                                      animationName: e.props.btnName
                                        ? "marquee2"
                                        : "marquee3",
                                      duration: n + 8,
                                    });
                                }, 1e3 * n - 200));
                            } else e.setState({ setMarquee: !1 });
                          }
                        });
                    },
                  },
                  {
                    key: "handleTimeEnd",
                    value: function () {
                      var e = this.props,
                        t = e.status,
                        i = e.refresh;
                      10 === t && (this.setState({ isOverTime: !0 }), i && i());
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.state,
                        t = e.setMarquee,
                        i = e.textWidth,
                        a = e.duration,
                        n = e.animationName,
                        r = e.isOverTime,
                        o = this.props,
                        l = o.orderStatusMessage,
                        s = o.orderMessageBtnClick,
                        c = o.btnName,
                        d = o.status,
                        u = o.paymentExpiredTime;
                      return (0, G.tZ)(b.View, {
                        className: "smart-order-message-module",
                        children: (0, G.BX)(b.View, {
                          className: "order-message",
                          children: [
                            (0, G.tZ)(b.View, {
                              className: "content",
                              children: (0, G.tZ)(b.View, {
                                className: "marquee-wrap",
                                style: "".concat(
                                  t ? "width: ".concat(i, "px") : ""
                                ),
                                children: (0, G.tZ)(b.View, {
                                  className: "twrap",
                                  style: "".concat(
                                    t
                                      ? "animation: "
                                          .concat(a, "s 0s ")
                                          .concat(n, " linear infinite")
                                      : ""
                                  ),
                                  children:
                                    10 !== d
                                      ? (0, G.tZ)(b.Text, {
                                          className: "txt",
                                          children: l,
                                        })
                                      : r
                                      ? (0, G.tZ)(b.Text, {
                                          className: "txt",
                                          children:
                                            "座位已成功锁定，请及时支付",
                                        })
                                      : (0, G.BX)(b.View, {
                                          className: "txt",
                                          children: [
                                            l &&
                                              (0, G.BX)(b.Text, {
                                                style: { opacity: 0.8 },
                                                children: [
                                                  l.split("{0}")[0],
                                                  " ",
                                                ],
                                              }),
                                            (0, G.tZ)(U, {
                                              endTime: u,
                                              textStyle: {
                                                "font-family":
                                                  "PingFangSC-Medium",
                                              },
                                              handleTimeEnd:
                                                this.handleTimeEnd.bind(this),
                                            }),
                                            l &&
                                              (0, G.BX)(b.Text, {
                                                style: { opacity: 0.8 },
                                                children: [
                                                  " ",
                                                  l.split("{0}")[1],
                                                ],
                                              }),
                                          ],
                                        }),
                                }),
                              }),
                            }),
                            c &&
                              (0, G.tZ)(b.View, {
                                className:
                                  "order-message-btn color-primary ".concat(
                                    R.Z.tyClass
                                  ),
                                id: "ANBj",
                                onClick: s,
                                children: c,
                              }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(h.default.Component);
          var Y = h.default.memo(function (e) {
              var t = e.status,
                i = e.statusDesc,
                a = e.orderStatusMessage,
                n = e.orderMessageBtnClick,
                r = e.orderMsg,
                o = void 0 === r ? {} : r,
                l = e.paymentExpiredTime,
                s = e.fromStation,
                c = e.toStation,
                d = e.totalPrice,
                u = e.popupPriceDetailDialog,
                m = e.refresh,
                f = (function (e) {
                  switch (e) {
                    case 0:
                    case 10:
                      return "icon_wait";
                    case 30:
                    case 50:
                      return "icon_fail";
                    default:
                      return "icon_suc";
                  }
                })(t),
                h = (function (e) {
                  switch (e) {
                    case 415:
                      return "立即核验";
                    case 502:
                    case 503:
                      return "立即认证";
                    case 504:
                      return "立即登录";
                    default:
                      return "";
                  }
                })(o.orderMsgCode),
                p = t > 10,
                v = 30 === t && 415 === o.orderMsgCode ? o.orderMsg : a;
              return (0,
              G.tZ)(b.View, { className: "smart-header", children: (0, G.BX)(b.View, { className: "header", children: [(0, G.BX)(b.View, { className: "status color-white", children: [20 === t ? (0, G.BX)(b.View, { className: "loading_icon", children: [(0, G.tZ)(b.Icon, { className: "loading_circle" }), (0, G.tZ)(b.Icon, { className: "inner_icon seat" })] }) : (0, G.tZ)(b.Text, { className: f + " static_icon" }), (0, G.tZ)(b.View, { className: "status-desc font-medium", children: i })] }), v && (0, G.tZ)(W, { orderStatusMessage: v, orderMessageBtnClick: n, btnName: h, status: t, paymentExpiredTime: l, refresh: m }), p && (0, G.BX)(b.View, { className: "general-info", children: [(0, G.tZ)(b.View, { className: "station color-dark font-semibold", children: "".concat(s, "-").concat(c) }), (0, G.BX)(b.View, { className: "price font-regular", children: [(0, G.BX)(b.Text, { className: "total-price color-dark", children: ["总价：￥", d] }), (0, G.BX)(b.View, { className: "detail color-darkgrey", id: "ANBh", onClick: u, children: ["明细", (0, G.tZ)(b.Text, { className: "ifont-arr iconfont" })] })] })] })] }) });
            }),
            H = {
              T: "",
              F: "/pages/flight/detail/detail?orderNumber=",
              S: "/pages/ship/orderdetail/orderdetail?orderId=",
              B: "/pages/bus/neworderdetail/orderdetail?oid=",
              SC: "/pages/bus/neworderdetail/orderdetail?oid=",
            };
          var Q = h.default.memo(function (e) {
            var t,
              i,
              a,
              n,
              r = e.data,
              o = void 0 === r ? {} : r,
              l = e.index,
              s = e.isShowCombineTrain,
              c = e.trainCrossStationData;
            if ((0, F.Qr)(o)) return null;
            var d = o.tripType,
              u = o.fromDate,
              m = o.fromTime,
              f = o.toTime,
              h = o.fromStation,
              p = o.toStation,
              g = o.dayDiff,
              w = o.useMinutes,
              N = o.number,
              y = o.status,
              Z = o.statusDesc,
              S = o.bizOrderBumber,
              C = o.trainGrabOrderFlag,
              x = o.onlyShowFlag,
              D = o.isRescheduleFlag,
              I = o.passengers,
              B = v()(u).format("MM月DD日"),
              P = (0, F.zE)(w),
              V = (0, F.ur)(d, N),
              _ = null;
            null == I ||
              I.forEach(function (e) {
                var t = ((null == e ? void 0 : e.funcButtonList) || []).find(
                  function (e) {
                    return 2004 === e.type;
                  }
                );
                t && (_ = t);
              });
            var M = 70 == y || 60 == y || 40 == y || D || _,
              X = 1 === C,
              A =
                (null == o ||
                null === (t = o.tripInfoExtraDataType) ||
                void 0 === t ||
                null === (i = t.tripInfoTrainCrossStationData) ||
                void 0 === i
                  ? void 0
                  : i.fromStationDiff) || 0,
              O =
                (null == o ||
                null === (a = o.tripInfoExtraDataType) ||
                void 0 === a ||
                null === (n = a.tripInfoTrainCrossStationData) ||
                void 0 === n
                  ? void 0
                  : n.toStationDiff) || 0,
              E =
                s &&
                0 === l &&
                (null == c ? void 0 : c.originFromStation) &&
                (null == c ? void 0 : c.originFromStationCode) &&
                (null == c ? void 0 : c.originStartTime) &&
                (null == o ? void 0 : o.fromStation) !==
                  (null == c ? void 0 : c.originFromStation) &&
                (null == o ? void 0 : o.fromStationCode) !==
                  (null == c ? void 0 : c.originFromStationCode) &&
                A > 0
                  ? "".concat(
                      null == c ? void 0 : c.originFromStation,
                      "站上车"
                    )
                  : "",
              R = "";
            return (
              s &&
                1 === l &&
                (null == c ? void 0 : c.originToStation) &&
                (null == c ? void 0 : c.originToStationCode) &&
                (null == c ? void 0 : c.originArriveTime) &&
                (null == o ? void 0 : o.toStation) !==
                  (null == c ? void 0 : c.originToStation) &&
                (null == o ? void 0 : o.toStationCode) !==
                  (null == c ? void 0 : c.originToStationCode) &&
                O > 0 &&
                (R = "".concat(
                  null == c ? void 0 : c.originToStation,
                  "站下车"
                )),
              s &&
                1 === l &&
                (null == c ? void 0 : c.originToStation) &&
                (null == c ? void 0 : c.originToStationCode) &&
                (null == c ? void 0 : c.originArriveTime) &&
                (null == o ? void 0 : o.toStation) !==
                  (null == c ? void 0 : c.originToStation) &&
                (null == o ? void 0 : o.toStationCode) !==
                  (null == c ? void 0 : c.originToStationCode) &&
                O < 0 &&
                (R = "补票到".concat(
                  null == c ? void 0 : c.originToStation,
                  "站"
                )),
              (0, G.tZ)(b.View, {
                className: "smart-trip-detail",
                children: (0, G.BX)(b.View, {
                  className: "trip-detail",
                  children: [
                    (0, G.BX)(b.View, {
                      className: "tit font-medium",
                      children: [
                        (0, G.tZ)(b.Text, {
                          className: "order color-white",
                          children: l + 1,
                        }),
                        (0, G.tZ)(b.Text, {
                          className: "traffic-type color-blue",
                          children: V,
                        }),
                        (0, G.tZ)(b.Text, { className: "separator" }),
                        (0, G.tZ)(b.Text, {
                          className: "depart-date color-dark",
                          children: B + " 出发",
                        }),
                        X &&
                          (0, G.tZ)(b.Text, {
                            className: "rob-tag",
                            children: "抢票",
                          }),
                        (0, G.tZ)(b.View, {
                          className: "status",
                          children: M
                            ? (0, G.BX)(b.Text, {
                                className: "check-detail color-blue",
                                id: "ANBz",
                                onClick: function () {
                                  var e = H[d] + S;
                                  "T" === d && X
                                    ? (e = k.ZP.getTrainGrabOrderDetailUrl(S))
                                    : "T" === d &&
                                      (e = k.ZP.getTrainDetailUrl(S)),
                                    T().navigateTo({ url: e });
                                },
                                children: [
                                  _ ? _.typeDesc : "查看详情",
                                  (0, G.tZ)(b.Text, {
                                    className: "ifont-arr iconfont",
                                  }),
                                ],
                              })
                            : x
                            ? (0, G.BX)(b.View, {
                                className:
                                  "flex-align-items-center purchased-flag",
                                children: [
                                  (0, G.tZ)(b.Text, {
                                    className:
                                      "iconfont ifont-line-tips purchased-iconfont",
                                  }),
                                  (0, G.tZ)(b.Text, {
                                    className: "purchased-text",
                                    children: "未购买此程",
                                  }),
                                ],
                              })
                            : (0, G.tZ)(b.Text, {
                                className:
                                  "status-desc font-regular " +
                                  (5 == y || 50 == y || 70 == y
                                    ? "color-red"
                                    : "color-dark"),
                                children: Z,
                              }),
                        }),
                      ],
                    }),
                    (0, G.BX)(b.View, {
                      className: "cont color-dark font-regular",
                      children: [
                        (0, G.BX)(b.View, {
                          className: "from",
                          children: [
                            (0, G.tZ)(b.View, {
                              className: "time font-semibold",
                              children: m,
                            }),
                            (0, G.tZ)(b.View, {
                              className: "station",
                              children: h,
                            }),
                            !!E &&
                              (0, G.tZ)(b.View, {
                                className: "station color-primary",
                                children: E,
                              }),
                          ],
                        }),
                        (0, G.BX)(b.View, {
                          className: "mid",
                          children: [
                            (0, G.tZ)(b.View, {
                              className: "cost-time",
                              children: P,
                            }),
                            "T" === d
                              ? (0, G.tZ)(b.View, {
                                  className: "timetable",
                                  id: "ANCA",
                                  onClick: function () {
                                    return k.ZP.goTimeTable(h, p, N, u);
                                  },
                                  children: "时刻表",
                                })
                              : (0, G.tZ)(b.View, { className: "separator" }),
                            (0, G.tZ)(b.View, {
                              className:
                                "number" + ("F" === d ? " flight" : ""),
                              children: N,
                            }),
                          ],
                        }),
                        (0, G.BX)(b.View, {
                          className: "to " + (g ? "has-diff" : ""),
                          children: [
                            (0, G.BX)(b.View, {
                              className: "time font-semibold",
                              children: [
                                f,
                                !!g &&
                                  (0, G.tZ)(b.Text, {
                                    className: "diff",
                                    children: "+" + g,
                                  }),
                              ],
                            }),
                            (0, G.tZ)(b.View, {
                              className: "station",
                              children: p,
                            }),
                            !!R &&
                              (0, G.tZ)(b.View, {
                                className: "station color-primary",
                                children: R,
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              })
            );
          });
          var J = h.default.memo(function (e) {
              var t,
                i,
                a = e.tripInfo,
                n = void 0 === a ? {} : a,
                r = e.waitCheckPasTel,
                o = e.ticketInterrupted,
                l = n.status,
                s =
                  !n.onlyShowFlag &&
                  1 === n.trainGrabOrderFlag &&
                  (30 === l || 40 === l) &&
                  !r &&
                  !o;
              return 1500 ===
                (null == n || null === (t = n.subOrderMsg) || void 0 === t
                  ? void 0
                  : t.orderMsgCode)
                ? (0, G.BX)(b.View, {
                    className: "smart-card-tip-view",
                    children: [
                      (0, G.tZ)(b.View, {
                        className: "card-tip toRob",
                        children: (0, G.tZ)(b.Text, {
                          className: "tip",
                          children:
                            null == n ||
                            null === (i = n.subOrderMsg) ||
                            void 0 === i
                              ? void 0
                              : i.orderMsg,
                        }),
                      }),
                      (0, G.tZ)(b.View, { className: "bottom" }),
                    ],
                  })
                : s &&
                    (0, G.BX)(b.View, {
                      className: "smart-card-tip-view",
                      children: [
                        30 === l
                          ? (0, G.BX)(b.View, {
                              className: "card-tip toRob",
                              children: [
                                (0, G.tZ)(b.Text, {
                                  className: "tip",
                                  children: "温馨提示：",
                                }),
                                "支付成功后，将自动为您开始抢票。购买抢票行程，若出票失败，平台不承担退票手续费。",
                              ],
                            })
                          : (0, G.BX)(b.View, {
                              className: "card-tip robbing",
                              children: [
                                "正在为您抢票中，截止抢票时间：",
                                v()(new Date(n.ticketOffsetTimeMillis)).format(
                                  "YYYY年MM月DD日 HH:mm"
                                ),
                              ],
                            }),
                        (0, G.tZ)(b.View, { className: "bottom" }),
                      ],
                    });
            }),
            K = h.default.memo(function (e) {
              var t = e.passengerInfo,
                i = void 0 === t ? null : t;
              return i
                ? (0, G.BX)(b.View, {
                    className: "smart-orderdetail-fp flex-align-items-center",
                    children: [
                      (0, G.tZ)(b.View, {
                        className: "p-name",
                        children: i.name,
                      }),
                      (0, G.tZ)(b.View, {
                        className: "p-type",
                        children: i.passengerTypeName,
                      }),
                      (0, G.tZ)(b.View, {
                        className: "p-tag",
                        children: i.freeTag,
                      }),
                      (0, G.tZ)(b.View, {
                        className: "p-desc flex-1",
                        children: i.declareDesc4Detail,
                      }),
                    ],
                  })
                : null;
            }),
            $ = h.default.memo(function (e) {
              var t = e.data,
                i = void 0 === t ? null : t;
              if (!i) return (0, G.tZ)(G.HY, {});
              var a = i.newTitle,
                n = i.subTitle,
                r = i.jumpUrl,
                o = i.icon,
                l = 1 === i.type;
              return (0, G.tZ)(b.View, {
                className: " _Vo _Wo _Xo _p _kc _Yo",
                children: (0, G.BX)(b.View, {
                  className: ""
                    .concat(" _Zo _i _l", " ")
                    .concat(l ? " _ap" : ""),
                  children: [
                    (0, G.tZ)(b.Image, {
                      className: l ? " _he _yf _Va" : " _xf _Sd _lj",
                      src: o,
                    }),
                    !l &&
                      (0, G.BX)(b.View, {
                        className: " _i _nj _n",
                        children: [
                          (0, G.tZ)(b.View, {
                            className: " _S _dd _pc _Uc",
                            children: a,
                          }),
                          n &&
                            (0, G.tZ)(b.View, {
                              className: " _O _Kc _Vc _gj",
                              children: n,
                            }),
                        ],
                      }),
                    l &&
                      (0, G.tZ)(b.View, {
                        className: " _dd _Pa _Uc _U _j",
                        children: a,
                      }),
                    (0, G.BX)(b.View, {
                      className: " _i _l -la",
                      id: "smartDetailTUEntry",
                      onClick: function () {
                        r && N.Z.commonNavigator(r);
                      },
                      children: [
                        (0, G.tZ)(b.View, {
                          className: ""
                            .concat(" _U _x _bp", " ")
                            .concat(l ? "-na  _Kc" : ""),
                          children: "查看详情",
                        }),
                        (0, G.tZ)(b.View, {
                          className: "iconfont2 ifont2-arr "
                            .concat("-ma", " ")
                            .concat(l ? "-na  _Kc" : ""),
                        }),
                      ],
                    }),
                  ],
                }),
              });
            });
          var ee = h.default.memo(function (e) {
            var t,
              i,
              a = e.data,
              r = void 0 === a ? {} : a,
              o = e.waitCheckPasTel,
              l = e.ticketInterrupted,
              s = e.onBizOrderCancel,
              c = e.index,
              d = e.onGoRobSetPage,
              u = e.isShowCombineTrain,
              m = e.trainCrossStationData,
              f = (e.onBottomWrapper, e.exchangeSeatEntryList),
              p = e.isShowExchangeSeatEntry,
              g = r.passengers,
              T = r.status,
              w = r.bizOrderBumber,
              y = r.tripType,
              Z = r.trainGrabOrderFlag,
              S = r.grapSpareDataInfo,
              x = void 0 === S ? {} : S,
              D = r.isShowGrabSpareDataFlag,
              k = r.ticketOffsetTimeMillis,
              I = r.onlyShowFlag,
              B = 40 == T && "F" !== y,
              P = 1 === Z && (30 === T || 40 === T),
              V = (0, h.useState)((null == g ? void 0 : g.length) > 2),
              _ = (0, n.Z)(V, 2),
              M = _[0],
              X = _[1],
              A = (0, h.useState)(null == g ? void 0 : g.slice(0, 2)),
              O = (0, n.Z)(A, 2),
              E = O[0],
              R = O[1],
              F = x.seats,
              L = void 0 === F ? "" : F,
              z = x.trainNos,
              j = void 0 === z ? "" : z;
            (0, h.useEffect)(
              function () {
                R(M ? (null == g ? void 0 : g.slice(0, 2)) : g);
              },
              [g, M]
            );
            var q =
                null == x || null === (t = x.optimizeBt) || void 0 === t
                  ? void 0
                  : t.name,
              U =
                null == r || null === (i = r.bizDataInfo) || void 0 === i
                  ? void 0
                  : i.trainGrabSpeed,
              W =
                null == f
                  ? void 0
                  : f.find(function (e) {
                      return (
                        (null == e ? void 0 : e.bizOrderNumber) === "".concat(w)
                      );
                    });
            return (0, G.BX)(b.View, {
              className: "trip-card-wrapper",
              children: [
                (0, G.BX)(b.View, {
                  className: "trip-card ".concat(I ? "card-padding" : ""),
                  children: [
                    (0, G.tZ)(Q, {
                      data: r,
                      index: c,
                      isShowCombineTrain: u,
                      trainCrossStationData: m,
                    }),
                    (0, G.tZ)(b.View, {
                      className: "passenger-list",
                      children:
                        null == E
                          ? void 0
                          : E.map(function (e, t) {
                              var i = t !== (null == g ? void 0 : g.length) - 1,
                                a = 50 !== T && e.statusDesc;
                              return (0,
                              G.BX)(b.Block, { children: [(0, G.BX)(b.View, { className: "passenger-item font-regular color-dark", children: [(0, G.BX)(b.View, { className: "left", children: [(0, G.tZ)(b.Text, { className: "name font-medium", children: e.name }), e.passengerTypeName && (0, G.tZ)(b.Text, { className: "type-name color-grey", children: e.passengerTypeName })] }), (0, G.BX)(b.View, { className: "right", children: [(0, G.tZ)(b.Text, { className: "seat-name", children: e.seatName }), (0, G.BX)(b.Text, { className: "ticket-price", children: [" ￥", e.ticketPrice] }), e.seatNo && (0, G.tZ)(b.Text, { className: "seat-no", children: e.seatNo }), !!U && (0, G.tZ)(b.Text, { className: "status-desc color-red", children: null == U ? void 0 : U.replace(".", "") }), a && !U && (0, G.tZ)(b.Text, { className: "status-desc color-red", children: e.statusDesc })] })] }), (null == e ? void 0 : e.freePassenger) && (0, G.tZ)(K, { passengerInfo: e.freePassenger }), i && (0, G.tZ)(b.View, { className: "separator" })] }, String(t));
                            }),
                    }),
                    M &&
                      (0, G.BX)(b.View, {
                        className: "more",
                        id: "ANBw",
                        onClick: function () {
                          X(!1);
                        },
                        children: [
                          "查看全部乘客",
                          (0, G.tZ)(b.Text, {
                            className:
                              "iconfont ifont-arr ifont-arrdown2 icon-down",
                          }),
                        ],
                      }),
                    D && !N.Z.isEmptyObject(x)
                      ? (0, G.BX)(b.View, {
                          className: "alter-native",
                          children: [
                            (0, G.BX)(b.View, {
                              className: "desc flex flex-column ",
                              children: [
                                (0, G.tZ)(b.Text, {
                                  className: "iconfont ifont-light icon",
                                }),
                                (0, G.BX)(b.Text, {
                                  children: [
                                    "正在为您抢票中，截止抢票时间：",
                                    v()(new Date(k)).format(
                                      "YYYY年MM月DD日 HH:mm"
                                    ),
                                  ],
                                }),
                              ],
                            }),
                            !!j &&
                              (0, G.BX)(b.View, {
                                className: "desc",
                                children: ["已选备选车次：", j],
                              }),
                            !!L &&
                              (0, G.BX)(b.View, {
                                className: "desc",
                                children: ["已选备选坐席：", L],
                              }),
                          ],
                        })
                      : (0, G.tZ)(J, {
                          tripInfo: r,
                          waitCheckPasTel: o,
                          ticketInterrupted: l,
                        }),
                    (B || !!q) &&
                      (0, G.BX)(b.View, {
                        className: "flex order-opt",
                        children: [
                          B &&
                            (0, G.tZ)(b.View, {
                              className:
                                "opt-item biz-order-cancel font-medium",
                              "data-oid": w,
                              "data-robflag": P,
                              id: "ANBx",
                              onClick: s,
                              children: P ? "取消抢票" : "取消订单",
                            }),
                          !!q &&
                            (0, G.BX)(b.View, {
                              className: "opt-item",
                              children: [
                                (0, G.tZ)(b.Image, {
                                  src: C.default.isTieyou
                                    ? "https://images3.c-ctrip.com/ztrip/train.xin/2022_07/mimi_rob_ty@3x.webp"
                                    : "https://images3.c-ctrip.com/ztrip/train.xin/2022_07/mimi_rob_zx@3x.webp",
                                  className: "rob-icon",
                                }),
                                (0, G.tZ)(b.View, {
                                  className: "rob-set color-primary",
                                  id: "ANBy",
                                  onClick: function () {
                                    return d(r, c);
                                  },
                                  children: "抢票优化",
                                }),
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
                p && (0, G.tZ)($, { data: W }),
              ],
            });
          });
          var te = function (e) {
              var t,
                i = e.transferInfo,
                a = void 0 === i ? {} : i,
                n = e.index,
                r = e.trips,
                o = void 0 === r ? [] : r,
                l = e.isCombine,
                s = e.checkCombineSeat,
                c = a.distance,
                d = a.optimalMinutes,
                u = (function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = arguments.length > 1 ? arguments[1] : void 0;
                  return (
                    !!e[t + 1] &&
                    e[t].toStationCode === e[t + 1].fromStationCode &&
                    e[t].tripType === e[t + 1].tripType
                  );
                })(o, n),
                m = (function (e, t) {
                  if (e[t + 1]) {
                    var i = e[t],
                      a = e[t + 1];
                    return (
                      !(
                        !(
                          "T" === (null == i ? void 0 : i.tripType) &&
                          "T" === (null == a ? void 0 : a.tripType)
                        ) ||
                        (null == i ? void 0 : i.number) !==
                          (null == a ? void 0 : a.number)
                      ) ||
                      (0 !== (null == i ? void 0 : i.combinationSeatsNum) &&
                        (null == i ? void 0 : i.combinationSeatsNum) ===
                          (null == a ? void 0 : a.combinationSeatsNum) &&
                        (null == i ? void 0 : i.tripType) ===
                          (null == a ? void 0 : a.tripType))
                    );
                  }
                  return !1;
                })(o, n),
                f = l || m,
                h =
                  null == o || null === (t = o[n]) || void 0 === t
                    ? void 0
                    : t.isRescheduleFlag,
                p = (function (e) {
                  var t = e.isCombineTrip,
                    i = e.isCombine,
                    a = e.sameStation;
                  return e.isRescheduleFlag
                    ? "行程变更"
                    : t || i
                    ? "同车换座"
                    : a
                    ? "同站换乘"
                    : "市内换乘";
                })({
                  isCombineTrip: m,
                  isCombine: f,
                  sameStation: u,
                  isRescheduleFlag: h,
                }),
                v = (function (e) {
                  var t = e.isCombineTrip,
                    i = e.isCombine,
                    a = e.distance,
                    n = e.sameStation,
                    r = e.useHourMinutes;
                  return e.isRescheduleFlag
                    ? "存在改签票，暂不支持中转路线查询"
                    : t || i
                    ? "无需下车, 只要换个座位"
                    : ""
                        .concat(a ? "间隔".concat(a, "km, ") : "")
                        .concat(n ? "停留" : "耗时约")
                        .concat(r);
                })({
                  isCombineTrip: m,
                  isCombine: f,
                  sameStation: u,
                  distance: c,
                  useHourMinutes: u
                    ? (function (e, t) {
                        var i = e[t],
                          a = e[t + 1];
                        if (i && a) {
                          var n = (i.toDate + " " + i.toTime).replace(
                              /-/g,
                              "/"
                            ),
                            r = (a.fromDate + " " + a.fromTime).replace(
                              /-/g,
                              "/"
                            ),
                            o =
                              (new Date(r).getTime() - new Date(n).getTime()) /
                              6e4;
                          return o <= 0 ? "" : (0, F.zE)(o);
                        }
                        return "";
                      })(o, n)
                    : (0, F.zE)(d),
                  isRescheduleFlag: h,
                }),
                g = C.default.isTieyou
                  ? "https://images3.c-ctrip.com/ztrip/train.xin/2021_02/order/changeseat_ty.png"
                  : "https://images3.c-ctrip.com/ztrip/train.xin/2021_02/order/changeseat_zx.png";
              return (0, G.BX)(b.View, {
                className: "transfer-panel font-regular",
                children: [
                  !f &&
                    (0, G.tZ)(b.Text, {
                      className: "".concat(
                        u
                          ? "ifont-transfer-same color-blue"
                          : "ifont-transfer-different color-red",
                        " iconfont"
                      ),
                    }),
                  f &&
                    (0, G.tZ)(b.Image, {
                      className: "combine-seat-icon",
                      src: g,
                    }),
                  (0, G.tZ)(b.Text, {
                    className: "transfer-desc color-dark",
                    children: p,
                  }),
                  (0, G.tZ)(b.View, {
                    className: "transfer-info color-darkgrey",
                    children: v,
                  }),
                  f &&
                    (0, G.BX)(b.View, {
                      className: "combine-seat-intro",
                      id: "ANBo",
                      onClick: s,
                      children: [
                        (0, G.tZ)(b.View, { children: "组合座" }),
                        (0, G.tZ)(b.View, { className: "ifont-qus iconfont" }),
                      ],
                    }),
                ],
              });
            },
            ie = i(98221);
          var ae = function (e) {
              var t = e.totalPrice,
                i = void 0 === t ? 0 : t,
                a = e.hasFlight,
                n = void 0 !== a && a,
                r = e.isTieyou,
                o = void 0 !== r && r,
                l = e.showShareBtn,
                s = void 0 !== l && l,
                c = e.togglePriceDetailDialog,
                d = e.onPay;
              return (0, G.BX)(b.View, {
                className: "smart-bottom-row ".concat(
                  s ? "smart-bottom-row-share" : ""
                ),
                children: [
                  !s &&
                    (0, G.BX)(h.default.Fragment, {
                      children: [
                        (0, G.BX)(b.View, {
                          className: "price",
                          children: [
                            (0, G.BX)(b.View, {
                              className: "total-price",
                              children: [
                                (0, G.tZ)(b.Text, {
                                  className: "price-unit",
                                  children: ie.bR,
                                }),
                                i,
                              ],
                            }),
                            n &&
                              (0, G.tZ)(b.View, {
                                className: "price-tip",
                                children: "含机建燃油",
                              }),
                          ],
                        }),
                        (0, G.BX)(b.View, {
                          className: "footer-detail",
                          id: "ANBc",
                          onClick: c,
                          children: [
                            "明细 ",
                            (0, G.tZ)(b.View, {
                              className: "ifont-arrup iconfont icon-arr",
                            }),
                          ],
                        }),
                        (0, G.tZ)(b.View, {
                          className: "footer-btn",
                          id: "ANBd",
                          onClick: d,
                          children: "立即支付",
                        }),
                      ],
                    }),
                  s &&
                    (0, G.tZ)(b.View, {
                      className: "share-btn ".concat(o ? "ty" : "zx"),
                      children: (0, G.tZ)(b.Button, {
                        openType: "share",
                        "data-operation": "share-trip",
                        className: "share-button",
                        children: "分享行程",
                      }),
                    }),
                ],
              });
            },
            ne = i(15506),
            re = i(8400),
            oe = i(80836);
          var le = h.default.memo(function (e) {
            var t = e.data,
              i = void 0 === t ? {} : t,
              a = e.type,
              n = e.fromStation,
              r = e.toLocation,
              o = e.onNearPanelClick,
              l = i.distance,
              s = "start" === a ? n : r;
            return (
              console.log(i, a),
              (0, G.BX)(b.View, {
                className: "near-panel ".concat(a),
                id: "ANBi",
                onClick: o,
                children: [
                  (0, G.tZ)(b.Text, {
                    className: "logo font-medium color-white",
                    children: "start" === a ? "始" : "终",
                  }),
                  (0, G.BX)(b.Text, {
                    className: "location color-dark font-medium",
                    children: ["前往", s],
                  }),
                  !!l &&
                    (0, G.BX)(b.Text, {
                      className: "distance color-darkgrey font-regular",
                      children: ["间隔", l, "km"],
                    }),
                  (0, G.tZ)(b.Text, { class: "ifont-arr iconfont color-grey" }),
                ],
              })
            );
          });
          var se = h.default.memo(function (e) {
            var t = e.tripList,
              i = void 0 === t ? [] : t,
              a = e.status,
              n = 0;
            return (
              i.forEach(function (e) {
                e.ticketOffsetTimeMillis && (n = e.ticketOffsetTimeMillis);
              }),
              !!(10 === a && n) &&
                (0, G.BX)(b.View, {
                  className: "smart-rob-deadline",
                  children: [
                    (0, G.tZ)(b.View, {
                      className: "left",
                      children: "抢票截止时间",
                    }),
                    (0, G.tZ)(b.View, {
                      className: "right",
                      children: v()(n).format("MM月DD日 HH:mm前"),
                    }),
                  ],
                })
            );
          });
          var ce,
            de = function (e) {
              var t = e.notice,
                i = void 0 === t ? null : t,
                a = e.train12306Config;
              if (!i) return (0, G.tZ)(G.HY, {});
              var n = i.tipMessage;
              return (
                !a.isIn12306WorkTime && a.smartTips && (n += a.smartTips),
                n
                  ? (0, G.BX)(b.View, {
                      className: "smart-order-detail-tip-row",
                      children: [
                        (0, G.tZ)(b.View, {
                          className: "ifont-notices iconfont icon",
                        }),
                        (0, G.tZ)(b.View, {
                          className: "tip-message",
                          children: n,
                        }),
                      ],
                    })
                  : (0, G.tZ)(G.HY, {})
              );
            },
            ue = i(34229),
            me = h.default.memo(function (e) {
              var t,
                i = e.isShow,
                a = e.data,
                n = e.cancel,
                r = e.confirm,
                o = e.handleInsuranceTrace;
              return (0, G.tZ)(ue.ZtActivityPop, {
                show: i,
                onWrapClose: n,
                isShowClose: !0,
                onClose: n,
                className: "smart-order-retainXProduct-dialog",
                children: (0, G.BX)(b.View, {
                  className: "content",
                  children: [
                    (0, G.tZ)(b.Image, {
                      className: "bg",
                      src: null == a ? void 0 : a.backImage,
                    }),
                    (0, G.BX)(b.View, {
                      className: "card",
                      children: [
                        (0, G.tZ)(b.Image, {
                          src: null == a ? void 0 : a.titleImage,
                          className: "product-img",
                        }),
                        (0, G.tZ)(b.View, {
                          className: "main-title",
                          children: null == a ? void 0 : a.mainTitle,
                        }),
                        (0, G.BX)(b.View, {
                          className: "title flex-align-items-center",
                          id: "ANBl",
                          onClick: function () {
                            o("小程序订单详情页挽留弹窗-保险产品icon点击"),
                              (null == a ? void 0 : a.h5Url) &&
                                I.Z.twebview({
                                  data: { url: null == a ? void 0 : a.h5Url },
                                });
                          },
                          children: [
                            (0, G.tZ)(b.Text, {
                              className: "product-name",
                              children:
                                (null == a ? void 0 : a.title) ||
                                (null == a ? void 0 : a.productName),
                            }),
                            !(null == a || !a.h5Url) &&
                              (0, G.tZ)(b.Text, {
                                className: "iconfont ifont-detail icon-info",
                              }),
                            !(null == a || !a.showPrice) &&
                              (0, G.tZ)(b.Text, {
                                className: "price",
                                children: null == a ? void 0 : a.showPrice,
                              }),
                          ],
                        }),
                        !(null == a || !a.tag) &&
                          (0, G.tZ)(b.View, {
                            className: "tag",
                            children: a.tag,
                          }),
                        (0, G.tZ)(b.View, {
                          children:
                            null == a || null === (t = a.desc) || void 0 === t
                              ? void 0
                              : t.map(function (e, t) {
                                  return (0,
                                  G.BX)(b.View, { className: "right flex-align-items-center", children: [(0, G.tZ)(b.Image, { src: null == e ? void 0 : e.icon, className: "right-icon" }), (0, G.tZ)(b.View, { className: "flex-1", children: (0, G.tZ)(ue.ZtRichText, { className: "right-desc", nodes: null == e ? void 0 : e.text }) })] }, "right_".concat(t));
                                }),
                        }),
                      ],
                    }),
                    !(null == a || !a.statement) &&
                      (0, G.tZ)(b.View, {
                        className: "notice",
                        children: a.statement,
                      }),
                    (0, G.BX)(b.View, {
                      className: "flex btn-list",
                      children: [
                        (0, G.tZ)(b.View, {
                          className: "btn flex-1",
                          id: "ANBm",
                          onClick: n,
                          children:
                            (null == a ? void 0 : a.noProductButtonName) ||
                            "否",
                        }),
                        (0, G.tZ)(b.View, {
                          className: "btn confirm flex-1",
                          id: "ANBn",
                          onClick: r,
                          children:
                            (null == a ? void 0 : a.withProductButtonName) ||
                            "是",
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            fe = C.default.isTieyou,
            he = function (e) {
              var t,
                i,
                a,
                r = e.productList,
                o = e.productRefund,
                l = e.rightBtnClick,
                s = e.onClose,
                c = (0, h.useState)(null == r ? void 0 : r[0]),
                d = (0, n.Z)(c, 2),
                u = d[0],
                m = d[1];
              return (
                (0, h.useEffect)(
                  function () {
                    m(null == r ? void 0 : r[0]);
                  },
                  [r]
                ),
                (0, G.BX)(b.View, {
                  className: "container",
                  children: [
                    (0, G.tZ)(b.View, {
                      className: "head-bg ".concat(fe ? "ty" : "zx"),
                    }),
                    (0, G.tZ)(b.Text, {
                      className: "flexItem iconfont ifont-fail closeIcon",
                      id: "ANBq",
                      onClick: s,
                    }),
                    (0, G.BX)(b.View, {
                      className: "head",
                      children: [
                        (0, G.tZ)(b.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train.xin/2021_11/insurance_tittle@3x.png",
                          className: "title",
                        }),
                        (0, G.BX)(b.View, {
                          className: "sub-title",
                          children: [
                            (null == r ? void 0 : r.length) > 1 &&
                              (0, G.tZ)(b.Text, {
                                className: "sub-title-txt",
                                children: "为您的每一次出行保驾护航",
                              }),
                            1 === (null == r ? void 0 : r.length) &&
                              (0, G.BX)(b.View, {
                                className: "flex-align-items-center",
                                children: [
                                  (0, G.tZ)(b.Image, {
                                    className: "title-icon",
                                    src:
                                      null == r ||
                                      null === (t = r[0]) ||
                                      void 0 === t
                                        ? void 0
                                        : t.icon,
                                  }),
                                  (0, G.tZ)(b.Text, {
                                    className: "name",
                                    children:
                                      null == r ||
                                      null === (i = r[0]) ||
                                      void 0 === i
                                        ? void 0
                                        : i.productName,
                                  }),
                                  (0, G.tZ)(b.Text, {
                                    className: "sub-title-txt",
                                    children: "为您的每一次出行保驾护航",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (null == r ? void 0 : r.length) > 1 &&
                      (0, G.tZ)(b.ScrollView, {
                        className: "product-list-scroll",
                        scrollX: !0,
                        children: r.map(function (e) {
                          console.log("selectedProduct==", u);
                          var t = (null == u ? void 0 : u.code) === e.code;
                          return (0, G.tZ)(
                            b.View,
                            {
                              style: "display:inline-block",
                              id: "ANBr",
                              onClick: function () {
                                return m(e);
                              },
                              children: (0, G.BX)(b.View, {
                                className: "item flex-center ".concat(
                                  t ? "select" : ""
                                ),
                                children: [
                                  (0, G.tZ)(b.Image, {
                                    className: "product-icon",
                                    src: null == e ? void 0 : e.icon,
                                  }),
                                  (0, G.tZ)(b.Text, {
                                    className: "product-name ".concat(
                                      t ? "select" : ""
                                    ),
                                    children:
                                      null == e ? void 0 : e.productName,
                                  }),
                                ],
                              }),
                            },
                            null == e ? void 0 : e.code
                          );
                        }),
                      }),
                    (0, G.BX)(b.ScrollView, {
                      scrollY: !0,
                      className: "rights-scroll",
                      children: [
                        null == u || null === (a = u.products) || void 0 === a
                          ? void 0
                          : a.map(function (e) {
                              return (0,
                              G.tZ)(pe, { item: e, productRefund: o, rightBtnClick: l }, "".concat(null == e ? void 0 : e.code, "_").concat(null == e ? void 0 : e.passengerId));
                            }),
                        !(null == u || !u.h5Url) &&
                          (0, G.BX)(b.View, {
                            className: "flex-center rights-details",
                            id: "ANBs",
                            onClick: function () {
                              I.Z.twebview({
                                data: { url: null == u ? void 0 : u.h5Url },
                              });
                            },
                            children: [
                              (0, G.tZ)(b.Text, { children: "查看权益说明" }),
                              (0, G.tZ)(b.Text, {
                                className: "iconfont ifont-more details-arrow",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                })
              );
            },
            pe = function (e) {
              var t,
                i = e.item,
                a = e.productRefund,
                n = e.rightBtnClick;
              return (0, G.BX)(b.View, {
                className: "rights-item",
                children: [
                  ((null == i ? void 0 : i.passengerName) ||
                    !(null == i || !i.refundable)) &&
                    (0, G.BX)(b.View, {
                      className: "passenger flex-align-items-center",
                      children: [
                        (null == i ? void 0 : i.passengerName) &&
                          (0, G.BX)(b.View, {
                            className: "flex-1 flex-align-items-center",
                            children: [
                              (0, G.tZ)(b.View, {
                                className: "passenger-tag",
                                children: "乘客",
                              }),
                              (0, G.tZ)(b.Text, {
                                className: "passenger-name",
                                children: i.passengerName,
                              }),
                            ],
                          }),
                        !(null == i || !i.refundable) &&
                          (0, G.BX)(b.View, {
                            className: "flex-align-items-center",
                            id: "ANBt",
                            onClick: function () {
                              return a({
                                xproductId: null == i ? void 0 : i.xproductId,
                                passengerId: null == i ? void 0 : i.passengerId,
                              });
                            },
                            children: [
                              (0, G.tZ)(b.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train.xin/2022_04/refund.webp",
                                className: "refund-icon",
                              }),
                              (0, G.tZ)(b.Text, {
                                className: "refund",
                                children:
                                  (null == i ? void 0 : i.refundDesc) ||
                                  "申请退款",
                              }),
                            ],
                          }),
                      ],
                    }),
                  (null == i || null === (t = i.rights) || void 0 === t
                    ? void 0
                    : t.length) > 0 &&
                    (0, G.tZ)(b.View, {
                      className: "rights-list",
                      children:
                        null == i
                          ? void 0
                          : i.rights.map(function (e) {
                              var t,
                                a,
                                r =
                                  (null == e ||
                                  null === (t = e.buttons) ||
                                  void 0 === t
                                    ? void 0
                                    : t.length) > 0,
                                o =
                                  null == e ||
                                  null === (a = e.buttons) ||
                                  void 0 === a
                                    ? void 0
                                    : a[0];
                              return (0, G.BX)(
                                b.View,
                                {
                                  className:
                                    "right-item flex-align-items-center",
                                  children: [
                                    (0, G.BX)(b.View, {
                                      className: "flex-1 right-left",
                                      children: [
                                        (0, G.BX)(b.View, {
                                          id: "ANBu",
                                          onClick: function () {
                                            (null == e ? void 0 : e.h5Url) &&
                                              I.Z.twebview({
                                                data: {
                                                  url:
                                                    null == e
                                                      ? void 0
                                                      : e.h5Url,
                                                },
                                              });
                                          },
                                          children: [
                                            (0, G.tZ)(b.Text, {
                                              className: "right-name",
                                              children:
                                                null == e
                                                  ? void 0
                                                  : e.rightName,
                                            }),
                                            !(null == e || !e.h5Url) &&
                                              (0, G.tZ)(b.Text, {
                                                className:
                                                  "iconfont ifont-detail info-icon",
                                              }),
                                          ],
                                        }),
                                        (0, G.tZ)(b.View, {
                                          className: "right-desc-top",
                                          children: (0, G.tZ)(ue.ZtRichText, {
                                            nodes:
                                              null == e ? void 0 : e.rightDesc,
                                            className: "right-desc",
                                          }),
                                        }),
                                      ],
                                    }),
                                    r &&
                                      (0, G.tZ)(b.View, {
                                        className: "status-btn flex-center",
                                        id: "ANBv",
                                        onClick: function () {
                                          (1 !==
                                            (null == o ? void 0 : o.type) &&
                                            2 !==
                                              (null == o ? void 0 : o.type)) ||
                                            n({
                                              btnType:
                                                null == o ? void 0 : o.type,
                                              xproductId:
                                                null == i
                                                  ? void 0
                                                  : i.xproductId,
                                              passengerId:
                                                null == i
                                                  ? void 0
                                                  : i.passengerId,
                                              xproductRightId:
                                                null == e
                                                  ? void 0
                                                  : e.xproductRightId,
                                            });
                                        },
                                        children: null == o ? void 0 : o.name,
                                      }),
                                    !r &&
                                      (null == e ? void 0 : e.showStatusFlag) &&
                                      (0, G.BX)(b.View, {
                                        className: "flex-align-items-center",
                                        children: [
                                          0 ==
                                            (null == e ? void 0 : e.status) &&
                                            (0, G.tZ)(b.Image, {
                                              src: fe
                                                ? "https://images3.c-ctrip.com/ztrip/train.xin/2022_09/mini/icon_right_ty@3x.webp"
                                                : "https://images3.c-ctrip.com/ztrip/train.xin/2022_09/mini/icon_right_zx@3x.webp",
                                              className: "status-icon",
                                            }),
                                          !(null == e || !e.statusDesc) &&
                                            (0, G.tZ)(b.View, {
                                              className: "right-status ".concat(
                                                0 !==
                                                  (null == e
                                                    ? void 0
                                                    : e.status)
                                                  ? "disable"
                                                  : ""
                                              ),
                                              children:
                                                null == e
                                                  ? void 0
                                                  : e.statusDesc,
                                            }),
                                        ],
                                      }),
                                  ],
                                },
                                null == e ? void 0 : e.xproductRightId
                              );
                            }),
                    }),
                ],
              });
            },
            ve = h.default.memo(function (e) {
              var t = e.isShow,
                i = e.onClose,
                a = e.products,
                n = e.productRefund,
                r = e.rightBtnClick,
                o = [];
              return (
                null == a ||
                  a.forEach(function (e) {
                    var t,
                      i =
                        null == o
                          ? void 0
                          : o.find(function (t) {
                              return e.code === t.code;
                            });
                    i
                      ? null == i ||
                        null === (t = i.products) ||
                        void 0 === t ||
                        t.push(e)
                      : o.push({
                          productName: e.productName,
                          code: e.code,
                          icon: null == e ? void 0 : e.icon,
                          h5Url: e.h5Url,
                          products: [e],
                        });
                  }),
                (0, G.tZ)(ue.ZtDrawer, {
                  show: t,
                  onWrapClose: i,
                  isDefineHead: !0,
                  drawerStyle: {
                    backgroundColor: "#f5f5f5",
                    borderRadius: "32px 32px 0 0",
                  },
                  className: "smart-order-travelGurantee-dialog",
                  children: (0, G.tZ)(he, {
                    productList: o,
                    productRefund: n,
                    rightBtnClick: r,
                    onClose: i,
                  }),
                })
              );
            }),
            ge = h.default.memo(function (e) {
              var t = e.btnClick,
                i = e.ubtTrace,
                a = e.orderNumber,
                n = e.products,
                r = function (e) {
                  var t =
                    null == n
                      ? void 0
                      : n.map(function (e) {
                          return { code: null == e ? void 0 : e.code };
                        });
                  i(e, { orderid: String(a), productList: t });
                };
              return (
                (0, h.useEffect)(function () {
                  r("221072");
                }),
                (0, G.BX)(b.View, {
                  className:
                    "smart-order-travelgurantee-buttton flex-align-items-center",
                  id: "ANBp",
                  onClick: function () {
                    r("221074"), t();
                  },
                  children: [
                    (0, G.tZ)(b.Image, {
                      src: C.default.isTieyou
                        ? "https://images3.c-ctrip.com/ztrip/train.xin/2022_09/mini/icon_rightsafe_ty@3x.webp"
                        : "https://images3.c-ctrip.com/ztrip/train.xin/2022_09/mini/icon_rightsafe_zx@3x.webp",
                      className: "icon",
                    }),
                    (0, G.tZ)(b.Text, {
                      className: "flex-1 title",
                      children: "已添加出行保障",
                    }),
                    (0, G.tZ)(b.Text, {
                      className: "detail",
                      children: "查看详情",
                    }),
                    (0, G.tZ)(b.Text, {
                      className: "ifont-arrdown2 iconfont arrow",
                    }),
                  ],
                })
              );
            }),
            Te = function (e) {
              var t = e.data,
                i = e.btnClick,
                a = e.close,
                n = e.navigateTo,
                r = e.ubtTrace;
              return (
                (0, h.useEffect)(
                  function () {
                    t && r("222671");
                  },
                  [!!t]
                ),
                t
                  ? (0, G.BX)(b.View, {
                      className: "smart-order-siYu flex-align-items-center",
                      children: [
                        (0, G.tZ)(b.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train.xin/2022_10/icon_redenvelopes@3x.webp",
                          className: "icon",
                        }),
                        (0, G.tZ)(b.View, {
                          className: "flex-1 title",
                          children: null == t ? void 0 : t.context,
                        }),
                        (0, G.tZ)(b.View, {
                          className: "btn flex-center",
                          id: "ANBf",
                          onClick: function () {
                            null != t &&
                              t.url &&
                              (r("222672"), n({ url: t.url }), i());
                          },
                          children: null == t ? void 0 : t.buttonValue,
                        }),
                        (0, G.tZ)(b.View, {
                          className: "close flex-center",
                          id: "ANBg",
                          onClick: function () {
                            r("222673"), a();
                          },
                          children: (0, G.tZ)(b.Text, {
                            className: "iconfont ifont-closed close-icon",
                          }),
                        }),
                      ],
                    })
                  : (0, G.tZ)(b.View, {})
              );
            },
            be = h.default.memo(function (e) {
              var t,
                i = e.visible,
                a = void 0 !== i && i,
                r = e.drawerInfo,
                o = void 0 === r ? null : r,
                l = e.onConfirm,
                s = void 0 === l ? function () {} : l,
                c = e.onClose,
                d = void 0 === c ? function () {} : c,
                u = (0, h.useState)(""),
                m = (0, n.Z)(u, 2),
                f = m[0],
                p = m[1];
              if (!o) return null;
              return (0, G.tZ)(ue.ZtDrawer, {
                show: a,
                isDefineHead: !0,
                onWrapClose: d,
                className: "smart-orderdetail-applytrip",
                children: (0, G.BX)(b.View, {
                  className: "content",
                  children: [
                    (0, G.tZ)(b.View, {
                      className: "iconfont2 ifont2-close",
                      id: "ANBZ",
                      onClick: d,
                    }),
                    (0, G.tZ)(b.View, { className: "tit", children: o.title }),
                    (0, G.tZ)(b.View, {
                      className: "sub-tit",
                      children: o.subTitle,
                    }),
                    null === (t = o.declareTrips) || void 0 === t
                      ? void 0
                      : t.map(function (e, t) {
                          return (0, G.BX)(
                            b.View,
                            {
                              className: "trip-item flex-align-items-center",
                              children: [
                                (0, G.tZ)(b.View, {
                                  className: "trip-order",
                                  children: e.tripIndex,
                                }),
                                (0, G.BX)(b.View, {
                                  className: "station-info flex-1",
                                  children: [e.fromStation, " - ", e.toStation],
                                }),
                                (0, G.tZ)(b.View, {
                                  className: "iconfont2 ".concat(
                                    f === (null == e ? void 0 : e.tripIndex)
                                      ? "ifont2-checkboxed"
                                      : "ifont2-checkbox"
                                  ),
                                  id: "ANBa",
                                  onClick: function () {
                                    return (function (e) {
                                      var t = "";
                                      f !== e && (t = e), p(t);
                                    })(null == e ? void 0 : e.tripIndex);
                                  },
                                }),
                              ],
                            },
                            t
                          );
                        }),
                    (0, G.tZ)(b.View, {
                      className: "at-btn-box flex",
                      children: (0, G.tZ)(b.Button, {
                        className: "confirm-btn flex-1 ".concat(
                          f ? "" : "disabled"
                        ),
                        id: "ANBb",
                        onClick: function () {
                          f && s(f);
                        },
                        children: f ? "确认选择" : "选择行程",
                      }),
                    }),
                  ],
                }),
              });
            }),
            we = h.default.memo(function (e) {
              var t = e.bannerInfo,
                i = void 0 === t ? null : t,
                a = e.onBannerClick,
                n = void 0 === a ? function () {} : a;
              return i
                ? (0, G.BX)(b.View, {
                    className: "smart-orderdetail-atb flex-align-items-center",
                    id: "ANBY",
                    onClick: n,
                    children: [
                      (0, G.tZ)(b.Image, {
                        className: "icon",
                        src: i.icon,
                        webp: !0,
                      }),
                      (0, G.BX)(b.View, {
                        className: "m-box flex-1",
                        children: [
                          (0, G.BX)(b.View, {
                            className: "tit-box flex-align-items-center",
                            children: [
                              (0, G.tZ)(b.View, {
                                className: "tit",
                                children: i.title,
                              }),
                              (0, G.tZ)(b.View, {
                                className: "tag",
                                children: i.freeTag,
                              }),
                            ],
                          }),
                          (0, G.tZ)(b.View, {
                            className: "sub-tit",
                            children: i.subTitle,
                          }),
                        ],
                      }),
                      (0, G.BX)(b.View, {
                        className: "r-box flex-align-items-center",
                        children: [
                          (0, G.tZ)(b.View, {
                            className: "btn-txt",
                            children: i.clickValue,
                          }),
                          (0, G.tZ)(b.View, {
                            className: "iconfont2 ifont2-arr",
                          }),
                        ],
                      }),
                    ],
                  })
                : null;
            }),
            Ne = i(3855),
            ye = h.default.memo(function (e) {
              var t,
                i,
                a,
                n = e.visible,
                o = void 0 !== n && n,
                l = e.drawerInfo,
                s = void 0 === l ? null : l,
                c = e.isAutoShow,
                d = void 0 !== c && c,
                u = e.orderId,
                m = void 0 === u ? "" : u,
                f = e.onClose,
                p = void 0 === f ? function () {} : f,
                v = e.onRefreshData,
                g = void 0 === v ? function () {} : v,
                T = function (e, t) {
                  try {
                    var i = (0, D.getCurrentPage)();
                    null == i ||
                      i.ubtTrace(
                        e,
                        (0, r.Z)(
                          (0, r.Z)({}, t),
                          {},
                          {
                            PageId: null == i ? void 0 : i.pageId,
                            orderid: "".concat(m),
                            PositionType: d ? "1" : "2",
                          }
                        )
                      );
                  } catch (e) {
                    console.log(e);
                  }
                },
                b =
                  null == s ||
                  null === (t = s.smartTripRescheduleInfoItems) ||
                  void 0 === t ||
                  null === (i = t[0]) ||
                  void 0 === i
                    ? void 0
                    : i.series;
              if (
                ((0, h.useEffect)(
                  function () {
                    o && T("232749", { ExpoType: b });
                  },
                  [o]
                ),
                N.Z.isEmptyObject(s))
              )
                return (0, G.tZ)(G.HY, {});
              var w = function (e, t) {
                  var i;
                  e || !t
                    ? g()
                    : null === (i = (0, D.getCurrentPage)()) ||
                      void 0 === i ||
                      i.navigateTo({ url: k.ZP.getTrainGrabOrderDetailUrl(t) });
                },
                y = s.rescheduleType,
                C = s.realServicePrice,
                x = "";
              switch (y) {
                case 7:
                case 71:
                  x = "改靠窗".concat(C, "元");
                  break;
                case 9:
                case 91:
                  x = "改连座".concat(C, "元");
              }
              var I =
                  null === (a = s.smartTripRescheduleInfoItems) || void 0 === a
                    ? void 0
                    : a.map(function (e) {
                        return {
                          title: e.tripIndexDesc || "",
                          desc: e.duration || "",
                          priceDesc: x,
                          realServicePrice: C,
                          trainNumber: e.trainNumber,
                          departInfo: e.departInfo,
                          arrivalInfo: e.arrivalInfo,
                          appointDetails: e.appointDetails,
                        };
                      }),
                B = {
                  appointTitle: s.appointTitle || "",
                  appointTags: s.appointTags || [],
                  rescheduleType: y,
                  tripInfoList: I,
                  rescheduleNotes: s.rescheduleNotes,
                  realServicePrice: C,
                };
              return (0, G.tZ)(Ne.Z, {
                visible: o,
                serviceInfo: B,
                fromSource: "smartOrderDetail",
                onClose: function (e) {
                  if ((p(), e >= 0)) {
                    var t,
                      i,
                      a,
                      n,
                      r =
                        null === (t = s.smartTripRescheduleInfoItems) ||
                        void 0 === t ||
                        null === (i = t[0]) ||
                        void 0 === i ||
                        null === (a = i.appointDetails) ||
                        void 0 === a ||
                        null ===
                          (n = a.find(function (t) {
                            return t.appointType === e;
                          })) ||
                        void 0 === n
                          ? void 0
                          : n.text;
                    T("232754", { clickType: "0", Content: r, ExpoType: b });
                  } else T("232756", {});
                },
                onReceiveService: function (e, t) {
                  var i,
                    a,
                    n,
                    r,
                    o,
                    l,
                    c =
                      null === (i = s.smartTripRescheduleInfoItems) ||
                      void 0 === i ||
                      null === (a = i[0]) ||
                      void 0 === a ||
                      null === (n = a.appointDetails) ||
                      void 0 === n ||
                      null ===
                        (r = n.find(function (e) {
                          return e.appointType === t;
                        })) ||
                      void 0 === r
                        ? void 0
                        : r.text;
                  T("232754", { clickType: "1", Content: c, ExpoType: b });
                  var d =
                    null === (o = s.smartTripRescheduleInfoItems) ||
                    void 0 === o ||
                    null === (l = o[0]) ||
                    void 0 === l
                      ? void 0
                      : l.bizOrderNumber;
                  (0, Z.qHU)({
                    type: e,
                    orderNumber: "".concat(d),
                    appointType: t,
                    departStation: s.rescheduleDepartStation,
                    arrivalStation: s.rescheduleArriveStation,
                    seatList: [s.rescheduleSeatName],
                    trainNumList: [s.rescheduleTrainNumber],
                    speedNum: s.realServicePrice,
                    virtualSpeedNum: s.servicePrice,
                  })
                    .then(function (e) {
                      if (1 === e.resultCode) {
                        if ((p(), e.isNeedPay))
                          return void S.ZP.doPayment({
                            orderNumber: e.payOrderNumber,
                            business: "train",
                            title: "火车票订单",
                          })
                            .then(function () {
                              w(e.isOfflineTicket, e.orderNumber);
                            })
                            .catch(function () {
                              (0, D.getCurrentPage)().showCommonDialog(
                                "支付失败"
                              );
                            });
                        w(e.isOfflineTicket, e.orderNumber);
                      } else (0, D.showToast)(e.resultMessage || "确认改签下单失败，请稍后重试");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                },
                onAppointSeatChange: function (e) {
                  T("232758", {
                    ExpoType: b,
                    Content: null == e ? void 0 : e.text,
                  });
                },
              });
            }),
            Ze = h.default.memo(function (e) {
              var t = e.appointInfo,
                i = void 0 === t ? null : t,
                a = e.oid,
                n = void 0 === a ? "" : a,
                r = e.onShowDrawer,
                o = void 0 === r ? function () {} : r;
              if (
                ((0, h.useEffect)(
                  function () {
                    if (null != i && i.bannerDesc)
                      try {
                        var e,
                          t,
                          a =
                            null === (e = i.smartTripRescheduleInfoItems) ||
                            void 0 === e ||
                            null === (t = e[0]) ||
                            void 0 === t
                              ? void 0
                              : t.series,
                          r = (0, D.getCurrentPage)();
                        null == r ||
                          r.ubtTrace("232759", {
                            PageId: null == r ? void 0 : r.pageId,
                            orderid: "".concat(n),
                            ExpoType: a,
                          });
                      } catch (e) {
                        console.log(e);
                      }
                  },
                  [i]
                ),
                !i || !i.bannerDesc)
              )
                return (0, G.tZ)(G.HY, {});
              var l = i.bannerDesc;
              return (0,
              G.BX)(b.View, { className: "smart-order-reschedule-tips flex", children: [(0, G.tZ)(ue.ZtRichText, { className: "content", nodes: l }), (0, G.BX)(b.View, { className: "clickable-area flex-align-items-center", id: "ANBk", onClick: o, children: [(0, G.tZ)(b.Text, { children: "查看" }), (0, G.tZ)(b.Text, { className: "iconfont2 ifont2-shouqi_linea_12" })] })] });
            }),
            Se = h.default.memo(function (e) {
              var t = e.data,
                i = void 0 === t ? null : t;
              if (!i) return (0, G.tZ)(G.HY, {});
              return (0, G.BX)(b.View, {
                className: "ft-coupon-receive-entry flex-align-items-center",
                id: "ANBe",
                onClick: function () {
                  i.jumpUrl && N.Z.commonNavigator(i.jumpUrl);
                },
                children: [
                  (0, G.BX)(b.View, {
                    className: "l-box flex-1",
                    children: [
                      (0, G.tZ)(ue.ZtRichText, {
                        className: "tit",
                        nodes: i.title,
                      }),
                      (0, G.tZ)(b.View, {
                        className: "sub-tit",
                        children: i.subTitle,
                      }),
                    ],
                  }),
                  (0, G.tZ)(b.View, {
                    className: "r-btn",
                    children: i.buttonName,
                  }),
                ],
              });
            }),
            Ce = {
              0: "成功",
              3: "正在处理中",
              4: "12306异常",
              5: "夜间系统维护中",
              6: "用户名或密码错误",
              7: "需要短信解封",
              8: "需要刷脸解封",
            },
            xe = "YYYY-MM-DD HH:mm:ss.SSS",
            De =
              (0, w.h)()(
                (ce = (function (e) {
                  (0, u.Z)(i, e);
                  var t = (0, m.Z)(i);
                  function i() {
                    var e;
                    return (
                      (0, s.Z)(this, i),
                      (e = t.call(this)),
                      (0, f.Z)(
                        (0, d.Z)(e),
                        "pageId",
                        C.default.isTieyou ? "10650060085" : "10650060083"
                      ),
                      (0, f.Z)(
                        (0, d.Z)(e),
                        "getOrderActivityRecommend",
                        function () {
                          (0, y.xl)({ orderNumber: e.orderNumber })
                            .then(function (t) {
                              e.setState({
                                wechatFlowGuideData:
                                  null == t ? void 0 : t.wechatFlowGuideData,
                              });
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                        }
                      ),
                      (0, f.Z)((0, d.Z)(e), "openCandidate", function () {
                        var t = {
                          orderNumber: e.orderNumber + "",
                          action: null,
                        };
                        (0, y.ar)(t)
                          .then(function (t) {
                            1 === (null == t ? void 0 : t.resultCode)
                              ? e.loadData()
                              : (0, D.showToast)("网络超时");
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      }),
                      (0, f.Z)((0, d.Z)(e), "goPay", function () {
                        e.ubtDevTrace("o_smart_orderDetail_pay", {
                          date: v()().format(xe),
                          desc: "调用支付开始",
                        }),
                          S.ZP.doPayment({
                            orderNumber: String(e.orderNumber),
                            business: "smart",
                            title: "智慧出行订单",
                          })
                            .then(function () {
                              e.ubtDevTrace("o_smart_orderDetail_pay", {
                                date: v()().format(xe),
                                desc: "调用支付成功",
                              }),
                                e.loadData();
                            })
                            .catch(function () {
                              e.ubtDevTrace("o_smart_orderDetail_pay", {
                                date: v()().format(xe),
                                desc: "调用支付失败",
                              }),
                                e.loadData();
                            });
                      }),
                      (0, f.Z)(
                        (0, d.Z)(e),
                        "requestOrderShelfProduct",
                        function () {
                          var t = e.state.login12306Name,
                            i = k.ZP.encode12306Account({ login12306Name: t }),
                            a = {
                              orderNumber: e.orderNumber,
                              extraInfos: {
                                account12306:
                                  null == i ? void 0 : i.login12306Name,
                              },
                              versionNumber: 1,
                            };
                          e.ubtDevTrace("o_smart_orderDetail_pay", {
                            date: v()().format(xe),
                            desc: "调用getOrderShelfProduct开始",
                          }),
                            (0, y.Zk)(a)
                              .then(function (t) {
                                var i, a, n;
                                1 === (null == t ? void 0 : t.resultCode) &&
                                2 === (null == t ? void 0 : t.popupStyleType) &&
                                null != t &&
                                t.retainPayPopupJson
                                  ? (e.ubtDevTrace("o_smart_orderDetail_pay", {
                                      date: v()().format(xe),
                                      desc: "调用getOrderShelfProduct成功",
                                    }),
                                    e.setState(
                                      {
                                        retainXPopData: JSON.parse(
                                          (null == t
                                            ? void 0
                                            : t.retainPayPopupJson) || {}
                                        ),
                                        isShowRetainXDialog: !0,
                                        retainXInfo:
                                          null == t ? void 0 : t.productInfo,
                                      },
                                      function () {
                                        var t,
                                          i = e.state.retainXInfo;
                                        2 ===
                                          (null == i ||
                                          null === (t = i.insuranceExtraData) ||
                                          void 0 === t
                                            ? void 0
                                            : t.saleCompanyType) &&
                                          e.handleInsuranceTrace(
                                            "小程序订单详情页-挽留弹窗出现-保险展示"
                                          );
                                      }
                                    ),
                                    e.ubtTrace("221067", {
                                      orderid: String(e.orderNumber),
                                      code:
                                        (null == t ||
                                        null === (i = t.productInfo) ||
                                        void 0 === i
                                          ? void 0
                                          : i.productCode) || "",
                                      Type:
                                        (null == t ||
                                        null === (a = t.productInfo) ||
                                        void 0 === a ||
                                        null === (n = a.insuranceExtraData) ||
                                        void 0 === n
                                          ? void 0
                                          : n.saleCompanyType) + "",
                                    }))
                                  : (e.setState({
                                      retainXPopData: null,
                                      isShowRetainXDialog: !1,
                                      retainXInfo: null,
                                    }),
                                    e.goPay());
                              })
                              .catch(function (t) {
                                console.log(t), e.goPay();
                              })
                              .finally(function () {
                                e.ubtDevTrace("o_smart_orderDetail_pay", {
                                  date: v()().format(xe),
                                  desc: "调用getOrderShelfProduct结束",
                                });
                              });
                        }
                      ),
                      (0, f.Z)((0, d.Z)(e), "selectXPay", function () {
                        var t;
                        e.setState({ isShowRetainXDialog: !1 });
                        var i = e.state,
                          a = i.retainXInfo,
                          n = i.login12306Name;
                        e.ubtTrace("221068", {
                          orderid: String(e.orderNumber),
                          code: (null == a ? void 0 : a.productCode) || "",
                          Type:
                            (null == a ||
                            null === (t = a.insuranceExtraData) ||
                            void 0 === t
                              ? void 0
                              : t.saleCompanyType) + "",
                        });
                        var r = k.ZP.encode12306Account({ login12306Name: n }),
                          o = [];
                        if (null != a && a.productCode) {
                          var l;
                          e.handleInsuranceTrace(
                            "小程序订单详情页挽留弹窗出现-点击保险搭售"
                          );
                          var s,
                            c,
                            d,
                            u = {};
                          N.Z.isEmptyObject(
                            null == a ? void 0 : a.vipCardInfo
                          ) ||
                            (u = {
                              vipCardCode:
                                null == a ||
                                null === (s = a.vipCardInfo) ||
                                void 0 === s
                                  ? void 0
                                  : s.vipCardCode,
                              unionVipCode:
                                null == a ||
                                null === (c = a.vipCardInfo) ||
                                void 0 === c
                                  ? void 0
                                  : c.unionVipCode,
                              discountPrice:
                                null == a ||
                                null === (d = a.vipCardInfo) ||
                                void 0 === d
                                  ? void 0
                                  : d.discountPrice,
                            });
                          var m,
                            f,
                            h = { lineExtraData: a.lineExtraData };
                          2 ==
                            (null == a ||
                            null === (l = a.insuranceExtraData) ||
                            void 0 === l
                              ? void 0
                              : l.saleCompanyType) &&
                            ((h.lineInsuranceInfo = {
                              insuranceRecallId:
                                null === (m = e.InsuranceRecord) || void 0 === m
                                  ? void 0
                                  : m.getTrackId(),
                            }),
                            null === (f = e.InsuranceRecord) ||
                              void 0 === f ||
                              f.send()),
                            o.push({
                              actionType: 1,
                              stProduct: {
                                code: a.productCode,
                                count: 1,
                                price: a.productPrice,
                                productExtraData: u,
                                pageFrom: 4e3,
                              },
                              productionLineExtraData: h,
                            });
                          var p = {
                            orderNumber: e.orderNumber,
                            products: o,
                            extraInfos: {
                              account12306:
                                null == r ? void 0 : r.login12306Name,
                            },
                          };
                          e.ubtDevTrace("o_smart_orderDetail_pay", {
                            date: v()().format(xe),
                            desc: "购买保险",
                          }),
                            (0, y.pj)(p)
                              .then(function () {
                                e.goPay();
                              })
                              .catch(function (t) {
                                e.goPay(), console.log(t);
                              });
                        } else e.goPay();
                      }),
                      (0, f.Z)(
                        (0, d.Z)(e),
                        "checkCanAddRobTrain",
                        function (t) {
                          var i = t.orderNumber,
                            a = t.tripList;
                          null == a ||
                            a.forEach(function (t, a) {
                              null != t &&
                                t.isShowGrabSpareDataFlag &&
                                (0, y.hg)({
                                  orderNumber: i,
                                  subOrderId: null == t ? void 0 : t.subOrderId,
                                })
                                  .then(function (t) {
                                    if (
                                      1 == (null == t ? void 0 : t.resultCode)
                                    ) {
                                      var i = (0, F.I8)(
                                          e.state.tripRobLimitList
                                        ),
                                        n =
                                          null == t
                                            ? void 0
                                            : t.grabSpareLimits[0];
                                      (i[a] = n),
                                        e.setState({ tripRobLimitList: i });
                                    }
                                  })
                                  .catch(function (e) {
                                    console.log("getGrabSpareLimit e===", e);
                                  });
                            });
                        }
                      ),
                      (0, f.Z)((0, d.Z)(e), "onGoRobSetPage", function (t, i) {
                        e.needFreshOrder = !0;
                        var a = e.state.tripRobLimitList;
                        e.navigateTo({
                          url: "/pages/smart/packageA/robTaskSetting/index",
                          data: {
                            tripInfo: t,
                            tripLimit: null == a ? void 0 : a[i],
                          },
                        });
                      }),
                      (0, f.Z)(
                        (0, d.Z)(e),
                        "getIsShowCombineTrain",
                        function () {
                          var t,
                            i,
                            a = e.state,
                            n = a.orderTripInfos,
                            r = a.status,
                            o = !1,
                            l =
                              null == n
                                ? void 0
                                : n.every(function (e) {
                                    return (
                                      "T" === (null == e ? void 0 : e.tripType)
                                    );
                                  });
                          return (
                            2 === (null == n ? void 0 : n.length) &&
                              l &&
                              (null == n || null === (t = n[0]) || void 0 === t
                                ? void 0
                                : t.number) ===
                                (null == n ||
                                null === (i = n[1]) ||
                                void 0 === i
                                  ? void 0
                                  : i.number) &&
                              (o = !0),
                            r > 10 && o
                          );
                        }
                      ),
                      (0, f.Z)(
                        (0, d.Z)(e),
                        "showTravelGuaranteeDialog",
                        function () {
                          e.setState({ isShowTravelGuaranteeDialog: !0 });
                        }
                      ),
                      (0, f.Z)((0, d.Z)(e), "productRefund", function (t) {
                        var i = t.xproductId,
                          a = t.passengerId;
                        e.showMultiButtonDialog({
                          title: "温馨提示",
                          content:
                            "将为您发起退款,退款可能具有延时性,请注意查看退款明细",
                          rightButtonName: "确定退款",
                          onRightButtonClick: function () {
                            (0, D.showLoading)("申请退款中...");
                            var t = {
                              orderNumber: e.orderNumber,
                              xproductId: i,
                              passengerId: a,
                            };
                            (0, y.w4)(t)
                              .then(function (t) {
                                (0, D.hideLoading)(),
                                  1 === (null == t ? void 0 : t.resultCode)
                                    ? ((0, D.showToast)(
                                        (null == t
                                          ? void 0
                                          : t.resultMessage) || "申请成功"
                                      ),
                                      e.setState({
                                        isShowTravelGuaranteeDialog: !1,
                                      }),
                                      e.loadData())
                                    : (0, D.showToast)(
                                        (null == t
                                          ? void 0
                                          : t.resultMessage) || "申请失败～"
                                      );
                              })
                              .catch(function () {
                                (0, D.hideLoading)(),
                                  (0, D.showToast)("申请失败，请稍后再试");
                              });
                          },
                          leftButtonName: "暂时不了",
                          onLeftButtonClick: function () {},
                        });
                      }),
                      (0, f.Z)((0, d.Z)(e), "goToCompanyWechat", function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "";
                        if (C.default.isTieyou) {
                          var t = "请至铁友应用【我的钱包】查收理赔";
                          (0, D.showToast)(t);
                        } else e && (0, D.showToast)(e), I.Z.twebview({ data: { url: "https://m.suanya.com/webapp/train/activity/20211125-ztrip-official-account-to-qw?source=zhcx_lipei" } });
                      }),
                      (0, f.Z)((0, d.Z)(e), "rightBtnAction", function (t) {
                        2 === (null == t ? void 0 : t.btnType)
                          ? e.goToCompanyWechat()
                          : 1 === (null == t ? void 0 : t.btnType) &&
                            e.applyCompensation(t);
                      }),
                      (0, f.Z)((0, d.Z)(e), "applyCompensation", function (t) {
                        e.showMultiButtonDialog({
                          title: "赔付申请",
                          content: "您可点击【确认申请】进行赔付申请",
                          rightButtonName: "确认申请",
                          leftButtonName: "暂时不了",
                          onLeftButtonClick: function () {},
                          onRightButtonClick: function () {
                            (0, D.showLoading)("申请理赔中...");
                            var i = {
                              orderNumber: e.orderNumber,
                              xproductId: null == t ? void 0 : t.xproductId,
                              passengerId: null == t ? void 0 : t.passengerId,
                              xproductRightId:
                                null == t ? void 0 : t.xproductRightId,
                            };
                            (0, y.A4)(i)
                              .then(function (t) {
                                (0, D.hideLoading)(),
                                  1 === (null == t ? void 0 : t.resultCode)
                                    ? (e.goToCompanyWechat(
                                        (null == t
                                          ? void 0
                                          : t.resultMessage) || "理赔申请成功"
                                      ),
                                      e.setState({
                                        isShowTravelGuaranteeDialog: !1,
                                      }),
                                      e.loadData())
                                    : (0, D.showToast)(
                                        (null == t
                                          ? void 0
                                          : t.resultMessage) ||
                                          "申请失败，请稍后再试"
                                      );
                              })
                              .catch(function () {
                                (0, D.hideLoading)(),
                                  (0, D.showToast)("申请失败，请稍后再试");
                              });
                          },
                        });
                      }),
                      (e.state = {
                        orderMsg: "",
                        status: null,
                        statusDesc: "",
                        orderStatusMessage: "",
                        totalPrice: null,
                        orderTripInfos: [],
                        tripLineExtraDataType: {},
                        tripPriceDetails: [],
                        otherPriceDetail: [],
                        priceDetailDialogVisible: !1,
                        fromTripPlanFlag: !1,
                        toTripPlanFlag: !1,
                        fromLocation: "",
                        toLocation: "",
                        bothEndsTraffic: {},
                        paymentExpiredTime: "",
                        moreInfoMsg: "",
                        cashBackInfo: {},
                        train12306Config: {},
                        trafficGuidePopVisible: !1,
                        trafficGuideType: "",
                        orderSource: "",
                        showType: "",
                        showShareBtn: !1,
                        tripRobLimitList: [],
                        isShowRetainXDialog: !1,
                        wechatFlowGuideData: null,
                        isShowApplyTripDrawer: !1,
                        applyChildTripInfo: null,
                        pageNotice: "",
                        appointSeatSaleInfo: null,
                        isAutoShowAppointSeatSaleDrawer: !1,
                        smartTicketRecommendSystemToast: null,
                        ftActivityCashBackInfo: null,
                        exchangeSeatEntryList: [],
                      }),
                      (e.orderNumber = ""),
                      (e.bizOrderNumber = ""),
                      (e.needFreshOrder = !1),
                      (e.hasToastNight = !1),
                      (e.InsuranceRecord = new A.Z()),
                      (e.hasToastSpecialBethFailed = !1),
                      e
                    );
                  }
                  return (
                    (0, c.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e;
                          console.log("onLoad"),
                            T().hideShareMenu && T().hideShareMenu(),
                            (0, D.setPageConfig)({
                              backgroundColor: C.default.isTieyou
                                ? "#3C4365"
                                : "#0066E6",
                              backgroundColorBottom: "#efefef",
                            }),
                            null === (e = this.InsuranceRecord) ||
                              void 0 === e ||
                              e.start("smartTrip"),
                            B.CZ.call(this),
                            this.handleRouteParams(),
                            this.loadData();
                        },
                      },
                      {
                        key: "loadData",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, o.Z)().mark(function e() {
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          this.getOrderDetailInfo()
                                        );
                                      case 2:
                                        this.getSmartCross();
                                      case 3:
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
                        key: "onPullDownRefresh",
                        value: function () {
                          console.log("onPullDown"), this.loadData();
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          (C.default.isBaidu || this.needFreshOrder) &&
                            (this.getOrderDetailInfo(),
                            (this.needFreshOrder = !1)),
                            this.needFreshWechatFlow &&
                              (this.getOrderActivityRecommend(),
                              (this.needFreshWechatFlow = !1));
                        },
                      },
                      {
                        key: "handleRouteParams",
                        value: function () {
                          var e = (0, g.getCurrentInstance)().router.params,
                            t = e.orderNumber,
                            i = e.isBizOrder,
                            a = e.data,
                            n = void 0 === a ? {} : a;
                          (this.isBizOrder = i || n.isBizOrder),
                            this.isBizOrder
                              ? (this.bizOrderNumber = t || n.orderNumber)
                              : (this.orderNumber = t || n.orderNumber),
                            (this.tripDetailFromBook = E.a8.tripDetails),
                            this.orderNumber ||
                              this.bizOrderNumber ||
                              (T().showToast({
                                title: "参数异常",
                                icon: "none",
                              }),
                              T().navigateBack());
                        },
                      },
                      {
                        key: "getOrderDetailInfo",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, o.Z)().mark(function e() {
                              var t,
                                i,
                                a,
                                n,
                                l,
                                s,
                                c,
                                d,
                                u,
                                m,
                                f,
                                h,
                                p,
                                v,
                                g,
                                b,
                                w,
                                N,
                                Z,
                                S,
                                k,
                                I,
                                B,
                                P,
                                V,
                                _,
                                M,
                                X,
                                A,
                                O,
                                E,
                                R,
                                L,
                                z,
                                G,
                                j,
                                q,
                                U = this;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = {
                                            loginMobile: x.ZP.userName || "",
                                          }),
                                          "1" == this.isBizOrder
                                            ? (t.bizOrderNumber =
                                                this.bizOrderNumber)
                                            : (t.orderNumber =
                                                this.orderNumber),
                                          (e.prev = 2),
                                          (0, D.showLoading)("努力加载中..."),
                                          (i =
                                            "1" == this.isBizOrder
                                              ? y.MJ
                                              : y.dz),
                                          (e.next = 7),
                                          i(t)
                                        );
                                      case 7:
                                        1 === (a = e.sent).resultCode
                                          ? ((l = a.orderData),
                                            (s = l.status),
                                            (c = l.statusDesc),
                                            (d = l.orderStatusMessage),
                                            (u = l.totalPrice),
                                            (m = l.orderTripInfos),
                                            (f = void 0 === m ? [] : m),
                                            (h = l.tripLineExtraDataType),
                                            (p = void 0 === h ? {} : h),
                                            (v = l.priceDetail),
                                            (g = void 0 === v ? {} : v),
                                            (b = l.fromGeoPoint),
                                            (w = l.toGeoPoint),
                                            (N = l.fromTripPlanFlag),
                                            (Z = l.toTripPlanFlag),
                                            (S = l.fromLocation),
                                            (k = l.toLocation),
                                            (I = l.paymentExpiredTime),
                                            (B = l.orderNumber),
                                            (P = l.orderSource),
                                            (V = l.funcButtonList),
                                            (_ = l.schemeInfoV1),
                                            (M = l.fromAreaId),
                                            (X = l.toAreaId),
                                            (A = l.departDate),
                                            (O = l.productInfo),
                                            (E = l.trainRescheduleTickets),
                                            (R = []),
                                            (null == E ? void 0 : E.length) >
                                              0 &&
                                              f.forEach(function (e) {
                                                var t = E.find(function (t) {
                                                  return (
                                                    t.tripIndex === e.tripIndex
                                                  );
                                                });
                                                t
                                                  ? R.push(
                                                      (0, r.Z)(
                                                        (0, r.Z)({}, t),
                                                        {},
                                                        {
                                                          tripType: "T",
                                                          isRescheduleFlag: !0,
                                                          combinationSeatsNum: 0,
                                                        }
                                                      )
                                                    )
                                                  : R.push(e);
                                              }),
                                            R.length <= 0 && (R = f),
                                            (this.schemeInfoV1 = _),
                                            (this.fromAreaId = M),
                                            (this.toAreaId = X),
                                            (this.departDate = A),
                                            (this.orderNumber = B),
                                            (L = g.tripPriceDetails),
                                            (z = void 0 === L ? [] : L),
                                            (G = g.productDetail),
                                            this.setMoreInfoMsg(R),
                                            (0, F.ti)(R) &&
                                              (0, F.Qr)(
                                                this.state.train12306Config
                                              ) &&
                                              this.getTrain12306Config(),
                                            V &&
                                              V.length > 0 &&
                                              ((j = V.some(function (e) {
                                                return 4 == e.type;
                                              })),
                                              this.setState({
                                                showShareBtn: j,
                                              }),
                                              j &&
                                                (0, F.Sn)(
                                                  this,
                                                  "E_ZX_smart_orderDetail_intelli",
                                                  {
                                                    ExpoKey:
                                                      "share_trip_button",
                                                    ExpoValue: { orderid: B },
                                                    PageCode: this.pageId,
                                                  }
                                                )),
                                            this.traceLogForBizOrders({
                                              orderNumber: B,
                                              bizOrders: R.map(function (e) {
                                                return e.bizOrderBumber;
                                              }),
                                            }),
                                            this.setState(
                                              {
                                                orderMsg: a.orderMsg,
                                                status: s,
                                                statusDesc: c,
                                                orderStatusMessage: d,
                                                totalPrice: u,
                                                orderTripInfos: R,
                                                tripLineExtraDataType: p,
                                                tripPriceDetails: z,
                                                otherPriceDetail: G,
                                                fromTripPlanFlag: N,
                                                toTripPlanFlag: Z,
                                                fromLocation: S,
                                                toLocation: k,
                                                paymentExpiredTime: I,
                                                orderSource: P,
                                                products:
                                                  (null == O
                                                    ? void 0
                                                    : O.saleProducts) || [],
                                              },
                                              function () {
                                                U.handleOrderDetail();
                                              }
                                            ),
                                            (q = {
                                              fromGeoPoint: b,
                                              toGeoPoint: w,
                                              fromTripPlanFlag: N,
                                              toTripPlanFlag: Z,
                                              orderTripInfos: R,
                                            }),
                                            this.queryBothEndsTraffic(q),
                                            this.checkCanAddRobTrain({
                                              orderNumber: B,
                                              tripList: R,
                                            }),
                                            !this.hasToastNight &&
                                              [500, 506].some(function (e) {
                                                var t;
                                                return (
                                                  e ===
                                                  (null == a ||
                                                  null === (t = a.orderMsg) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.orderMsgCode)
                                                );
                                              }) &&
                                              (this.ubtTrace("222639", {
                                                orderid: B,
                                                PageId: this.pageId,
                                              }),
                                              this.showCommonDialog({
                                                content:
                                                  '已将您本单所含火车票转为人工出票，如需<span style="color: '.concat(
                                                    C.default.isTieyou
                                                      ? "#fc6e51"
                                                      : "#0080FF",
                                                    '"}>退票改签请前往火车站窗口办理</span>，敬请知晓'
                                                  ),
                                                title: "温馨提示",
                                                buttonName: "我知道了",
                                                onButtonClick: function () {
                                                  U.ubtTrace("222640", {
                                                    orderid: B,
                                                    PageId: U.pageId,
                                                  });
                                                },
                                              }),
                                              (this.hasToastNight = !0)),
                                            this.hasToastSpecialBethFailed ||
                                              516 !==
                                                (null === (n = a.orderMsg) ||
                                                void 0 === n
                                                  ? void 0
                                                  : n.orderMsgCode) ||
                                              ((this.hasToastSpecialBethFailed =
                                                !0),
                                              (0, D.showToast)(
                                                a.orderMsg.orderMsg ||
                                                  "指定铺位服务添加失败，下单后为您系统出票"
                                              )))
                                          : T().showToast({
                                              title: a.resultMessage,
                                              icon: "none",
                                            }),
                                          (e.next = 15);
                                        break;
                                      case 11:
                                        (e.prev = 11),
                                          (e.t0 = e.catch(2)),
                                          console.log(e.t0),
                                          T().showModal({
                                            title: "温馨提示",
                                            content: "出错了，请重试",
                                          });
                                      case 15:
                                        return (
                                          (e.prev = 15),
                                          T().stopPullDownRefresh(),
                                          setTimeout(function () {
                                            (0, D.hideLoading)();
                                          }, 200),
                                          e.finish(15)
                                        );
                                      case 19:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 11, 15, 19]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "traceLogForBizOrders",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            i = t.orderNumber,
                            a = t.bizOrders,
                            n = void 0 === a ? [] : a,
                            r = this.tripDetailFromBook;
                          r &&
                            n.forEach(function (t, a) {
                              var n = r[a];
                              if ("T" == n.tripType)
                                try {
                                  var o = (0, F.MW)(n);
                                  e.traceLogOrder({
                                    orderNumber: i,
                                    bizOrderNumber: t,
                                    train: o,
                                  });
                                } catch (e) {
                                  console.log(e);
                                }
                            });
                        },
                      },
                      {
                        key: "traceLogOrder",
                        value: function (e) {
                          var t = e.bizOrderNumber,
                            i = e.train,
                            a = {
                              userId: x.ZP.uid || "",
                              orderId: String(t),
                              orderTime: v()().format("YYYY-MM-DD HH:mm:ss"),
                              partner: C.default.isTieyou
                                ? "tieyou"
                                : "zhixing",
                              trainInfo: JSON.stringify({
                                arriveStation: i.toStation,
                                arriveDateTime: ""
                                  .concat(i.arriveDate, " ")
                                  .concat(i.arriveTime, ":00"),
                                trainNumber: i.trainNo,
                                departStation: i.fromStation,
                                departDateTime: ""
                                  .concat(i.startDate, " ")
                                  .concat(i.startTime, ":00"),
                              }),
                              seatList: JSON.stringify(
                                i.seats.map(function (e) {
                                  return {
                                    name: e.seatName,
                                    amount: e.ticketLeft,
                                  };
                                })
                              ),
                            };
                          this.ubtTrace("booking_Product_Params_Order", a);
                        },
                      },
                      {
                        key: "getTrain12306Config",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, o.Z)().mark(function e() {
                              var t;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          k.ZP.getTrain12306Config()
                                        );
                                      case 2:
                                        (t = e.sent),
                                          this.setState({
                                            train12306Config: t,
                                          });
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
                        key: "setMoreInfoMsg",
                        value: function (e) {
                          e.some(function (e) {
                            return (
                              70 == e.status ||
                              60 == e.status ||
                              40 == e.status ||
                              e.isRescheduleFlag
                            );
                          }) &&
                            this.setState({
                              moreInfoMsg:
                                "点击【查看详情】，查看更多信息和功能",
                            });
                        },
                      },
                      {
                        key: "handleOrderDetail",
                        value: function () {
                          var e = this.state.orderMsg;
                          if (502 === e.orderMsgCode) {
                            var t = N.Z.parseQuery(e.jumpUrl || "").orderNumber;
                            T().navigateTo({
                              url: "/pages/12306/dark/index?interceptScene="
                                .concat("booking", "&oid=")
                                .concat(t || ""),
                            });
                          }
                        },
                      },
                      {
                        key: "showVerifiedModal",
                        value: function (e) {
                          var t = this,
                            i = this.state.statusDesc,
                            a =
                              (null == e ? void 0 : e.tipText) ||
                              "铁路局规定：购票出行本人需完成实名认证后方可出票",
                            n = (null == e ? void 0 : e.btnName) || "立即认证";
                          T().showModal({
                            title: i,
                            content: ""
                              .concat(a, " (")
                              .concat("预计约1分钟完成", ")"),
                            showCancel: !1,
                            confirmText: n,
                            success: function (e) {
                              e.confirm && t.orderMessageBtnClick();
                            },
                          });
                        },
                      },
                      {
                        key: "orderMessageBtnClick",
                        value: function () {
                          var e = this,
                            t = this.state.orderMsg,
                            i = t.orderMsgCode,
                            a = t.jumpUrl,
                            n = N.Z.parseQuery(a || "").orderNumber;
                          switch (i) {
                            case 415:
                              (0, B.Zs)();
                              break;
                            case 502:
                              this.navigateTo({
                                url: "/pages/12306/dark/index?interceptScene="
                                  .concat("booking", "&oid=")
                                  .concat(n || ""),
                                callback: function () {
                                  e.loadData();
                                },
                              });
                              break;
                            case 503:
                              this.navigateTo({
                                url: k.ZP.getTrainGrabOrderDetailUrl(n),
                                callback: function () {
                                  e.loadData();
                                },
                              });
                              break;
                            case 504:
                              this.goLogin12306H5().then(function (t) {
                                var i = (0, F.GQ)(a, "orderNumber");
                                e.notifyGrabAfterLogin12306(t, i);
                              });
                          }
                        },
                      },
                      {
                        key: "goLogin12306H5",
                        value: function () {
                          var e = this;
                          return new Promise(function (t, i) {
                            var a = (function () {
                                var a = (0, l.Z)(
                                  (0, o.Z)().mark(function a(r) {
                                    var l, s, c, d, u, m, f, h;
                                    return (0, o.Z)().wrap(
                                      function (a) {
                                        for (;;)
                                          switch ((a.prev = a.next)) {
                                            case 0:
                                              return (
                                                console.log(
                                                  "smart orderDetail webviewCB e = ",
                                                  r
                                                ),
                                                Array.isArray(r.detail.data) ||
                                                  i(),
                                                (l = r.detail.data),
                                                B.Tq.call(e, l),
                                                B.CZ.call(e),
                                                (a.prev = 5),
                                                (s = (0, n.Z)(
                                                  r.detail.data,
                                                  1
                                                )),
                                                (c = s[0]),
                                                (d = c.userName),
                                                (u = void 0 === d ? "" : d),
                                                (m = c.loginPW),
                                                (f = void 0 === m ? "" : m),
                                                (0, D.showLoading)("校验中..."),
                                                (a.next = 10),
                                                (0, P.L5)({
                                                  UserName: u,
                                                  Password: f,
                                                  Channel: "WX",
                                                })
                                              );
                                            case 10:
                                              t({
                                                operateResult: 1,
                                                operateResultMsg: "登陆成功",
                                              }),
                                                (a.next = 18);
                                              break;
                                            case 13:
                                              (a.prev = 13),
                                                (a.t0 = a.catch(5)),
                                                (h = a.t0 ? a.t0.Code : -1),
                                                t({
                                                  operateResult: 2,
                                                  operateResultMsg: Ce[h],
                                                });
                                            case 18:
                                              return (
                                                (a.prev = 18),
                                                (0, D.hideLoading)(),
                                                a.finish(18)
                                              );
                                            case 21:
                                            case "end":
                                              return a.stop();
                                          }
                                      },
                                      a,
                                      null,
                                      [[5, 13, 18, 21]]
                                    );
                                  })
                                );
                                return function (e) {
                                  return a.apply(this, arguments);
                                };
                              })(),
                              r = e.state,
                              s = r.login12306Name,
                              c = void 0 === s ? "" : s,
                              d = r.login12306Pas,
                              u = void 0 === d ? "" : d,
                              m = c && u,
                              f = "https://"
                                .concat(
                                  C.default.h5domain,
                                  "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                                )
                                .concat(C.default.partner, "#/login?userName=")
                                .concat(c, "&loginPW=")
                                .concat(u, "&mobile=")
                                .concat(
                                  x.ZP.userName || "",
                                  "&isMiniAppLogin12306="
                                )
                                .concat(m, "&fromPage=smartorderdetail");
                            I.Z.twebview({ data: { url: f, bridgeIns: a } });
                          });
                        },
                      },
                      {
                        key: "notifyGrabAfterLogin12306",
                        value: function (e) {
                          var t = this,
                            i =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [],
                            a = this.state,
                            n = a.login12306Name,
                            r = a.login12306Pas,
                            o = k.ZP.encode12306Account({
                              login12306Name: n,
                              login12306Pas: r,
                            }),
                            l = [];
                          i.forEach(function (t) {
                            var i = {
                              orderNumber: t,
                              operateType: "login",
                              operateResult: e.operateResult,
                              operateResultMsg: e.operateResultMsg,
                              userT6LoginName: n,
                              userT6LoginPsw: o.login12306Pas,
                            };
                            l.push((0, y.S1)(i));
                          }),
                            Promise.all(l)
                              .then(function () {
                                t.openCandidate();
                              })
                              .catch(function (e) {
                                console.log(e);
                              });
                        },
                      },
                      {
                        key: "clickCancel",
                        value: function (e) {
                          var t = this,
                            i = e.currentTarget.dataset,
                            a = i.oid,
                            n = i.robflag,
                            r = void 0 !== n && n;
                          T().showModal({
                            title: "温馨提示",
                            content: "是否确定取消".concat(
                              r ? "抢票" : "订单",
                              "?"
                            ),
                            showCancel: !0,
                            cancelText: "点错了",
                            cancelColor: "#455783",
                            confirmText: "取消".concat(r ? "抢票" : "订单"),
                            confirmColor: "#999999",
                            success: function (e) {
                              e.confirm &&
                                (20 !== t.state.status || r
                                  ? a
                                    ? t.subOrderCancel(a)
                                    : t.cancelOrder()
                                  : t.handleDetainCancel(a));
                            },
                          });
                        },
                      },
                      {
                        key: "handleDetainCancel",
                        value: function (e) {
                          var t = this;
                          T().showModal({
                            title: "温馨提示",
                            content: "正在为您努力出票，是否确定取消订单?",
                            showCancel: !0,
                            cancelText: "点错了",
                            cancelColor: "#455783",
                            confirmText: "取消订单",
                            confirmColor: "#999999",
                            success: function (i) {
                              i.confirm &&
                                (e ? t.subOrderCancel(e) : t.cancelOrder());
                            },
                          });
                        },
                      },
                      {
                        key: "cancelOrder",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, o.Z)().mark(function e() {
                              var t, i;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = {
                                            orderNumber: this.orderNumber,
                                          }),
                                          (e.prev = 1),
                                          (0, D.showLoading)("努力加载中..."),
                                          (e.next = 5),
                                          (0, y.ok)(t)
                                        );
                                      case 5:
                                        (i = e.sent),
                                          (0, D.hideLoading)(),
                                          1 === i.resultCode
                                            ? this.loadData()
                                            : T().showToast({
                                                title: i.resultMessage,
                                                icon: "none",
                                              }),
                                          (e.next = 13);
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(1)),
                                          T().showModal({
                                            title: "温馨提示",
                                            content: "出错了，请重试",
                                          });
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 10]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "subOrderCancel",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var i, a, n, r, l, s;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((i = { bizOrderNumber: t }),
                                          (e.prev = 1),
                                          (0, D.showLoading)(),
                                          (n = this.state.orderTripInfos),
                                          (r = n.find(function (e) {
                                            return e.bizOrderBumber === t;
                                          })),
                                          (l =
                                            null == r ||
                                            null === (a = r.bizDataInfo) ||
                                            void 0 === a
                                              ? void 0
                                              : a.candidateOrderInfo),
                                          !(
                                            1 === (null == l ? void 0 : l.code)
                                          ))
                                        ) {
                                          e.next = 10;
                                          break;
                                        }
                                        return (
                                          this.candidatePreCancel(t, l),
                                          e.abrupt("return")
                                        );
                                      case 10:
                                        return (e.next = 12), (0, y.vV)(i);
                                      case 12:
                                        if (1 === (s = e.sent).resultCode) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          T().showToast({
                                            title: s.resultMessage,
                                            icon: "none",
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 16:
                                        this.loadData(), (e.next = 22);
                                        break;
                                      case 19:
                                        (e.prev = 19),
                                          (e.t0 = e.catch(1)),
                                          T().showModal({
                                            title: "温馨提示",
                                            content: "出错了，请重试",
                                          });
                                      case 22:
                                        return (
                                          (e.prev = 22),
                                          (0, D.hideLoading)(),
                                          e.finish(22)
                                        );
                                      case 25:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 19, 22, 25]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "togglePriceDetailDialog",
                        value: function (e) {
                          this.setState(function (t) {
                            var i = !t.priceDetailDialogVisible;
                            return (
                              "boolean" == typeof e && (i = e),
                              { priceDetailDialogVisible: i }
                            );
                          });
                        },
                      },
                      {
                        key: "popupPriceDetailDialog",
                        value: function () {
                          this.togglePriceDetailDialog(!0);
                        },
                      },
                      {
                        key: "handlePayment",
                        value: function () {
                          this.ubtDevTrace("o_smart_orderDetail_pay", {
                            date: v()().format(xe),
                            desc: "点击立即预定按钮",
                          }),
                            this.togglePriceDetailDialog(!1),
                            this.requestOrderShelfProduct();
                        },
                      },
                      {
                        key: "queryBothEndsTraffic",
                        value: function (e) {
                          var t = this,
                            i = e.fromTripPlanFlag,
                            a = e.toTripPlanFlag,
                            r = e.fromGeoPoint,
                            o = e.toGeoPoint,
                            l = e.orderTripInfos;
                          if (!(0, F.Qr)(r) || !(0, F.Qr)(o)) {
                            var s,
                              c = l[0].fromStationGeoPoint,
                              d = l[l.length - 1].toStationGeoPoint,
                              u = [];
                            if (i) {
                              s = { fromGeoPoint: r, toGeoPoint: c };
                              var m = this.queryStartEnd(s);
                              u.push(m);
                            }
                            if (a) {
                              s = { fromGeoPoint: d, toGeoPoint: o };
                              var f = this.queryStartEnd(s);
                              u.push(f);
                            }
                            u.length > 0 &&
                              ((0, D.showLoading)("努力加载中..."),
                              Promise.all(u)
                                .then(function (e) {
                                  var r = (0, n.Z)(e, 2),
                                    o = r[0],
                                    l = r[1];
                                  console.log(
                                    "QueryBothEndsTraffic ------ >",
                                    o,
                                    l
                                  );
                                  var s = {};
                                  i && a && ((s.start = o), (s.end = l)),
                                    i && !a && (s.start = o),
                                    !i && a && (s.end = o),
                                    t.setState({ bothEndsTraffic: s });
                                })
                                .finally(function () {
                                  (0, D.hideLoading)();
                                }));
                          }
                        },
                      },
                      {
                        key: "queryStartEnd",
                        value: function (e) {
                          return new Promise(function (t, i) {
                            (0, y.TQ)(e)
                              .then(function (e) {
                                1 !== e.resultCode || (0, F.Qr)(e.areaTraffic)
                                  ? t({})
                                  : t(e.areaTraffic);
                              })
                              .catch(function () {
                                i();
                              });
                          });
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function (e) {
                          if ("button" == e.from) {
                            if ("share-trip" == e.target.dataset.operation) {
                              (0, F.Sn)(
                                this,
                                "C_ZX_smart_orderDetail_intelli",
                                {
                                  ClickKey: "share_trip_button",
                                  ClickValue: { orderid: this.orderNumber },
                                  PageCode: this.pageId,
                                }
                              );
                              var t = this.state,
                                i = t.fromLocation,
                                a = t.toLocation,
                                n = v()(this.departDate).format("M月D日"),
                                r = "我发现一条"
                                  .concat(n, "『")
                                  .concat(i, "-")
                                  .concat(a, "』的超棒路线，点击查看详情"),
                                o =
                                  "https://images3.c-ctrip.com/ztrip/train.xin/2021_01/smart/share_mini_large_".concat(
                                    C.default.isTieyou ? "ty" : "zx",
                                    ".jpg"
                                  ),
                                l =
                                  "/pages/smart/packageA/shareLanding/index?fromLocation="
                                    .concat(i, "&toLocation=")
                                    .concat(a, "&departDate=")
                                    .concat(this.departDate, "&orderId=")
                                    .concat(this.orderNumber);
                              return (
                                this.schemeInfoV1 &&
                                  (l = ""
                                    .concat(l, "&schemeInfoV1=")
                                    .concat(
                                      encodeURIComponent(this.schemeInfoV1)
                                    )),
                                this.fromAreaId &&
                                  (l = ""
                                    .concat(l, "&fromAreaId=")
                                    .concat(this.fromAreaId)),
                                this.toAreaId &&
                                  (l = ""
                                    .concat(l, "&toAreaId=")
                                    .concat(this.toAreaId)),
                                { bu: "train", title: r, imageUrl: o, path: l }
                              );
                            }
                            var s = C.default.isTieyou ? "tieyou" : "suanya",
                              c = "https://m.".concat(
                                s,
                                ".com/webapp/train/activity/20210416-ztrip-smart-new-user-gifts?titleColor=ffffff&titleBgColor=FF2749&loginSource=smartNewGift"
                              );
                            return {
                              title:
                                "听说你要出行，智慧出行送你价值80元出行福利",
                              path: "/functionalPages/twebview/index?url=".concat(
                                encodeURIComponent(c)
                              ),
                              imageUrl:
                                "https://images3.c-ctrip.com/ztrip/train.xin/2021_04/share.png",
                            };
                          }
                        },
                      },
                      {
                        key: "onNearPanelClick",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.type,
                            i = void 0 === t ? "start" : t,
                            a = this.state.bothEndsTraffic,
                            n = a[i] || {},
                            r = n.taxiPrice,
                            o = n.distance,
                            l = n.optimalTrafficDTO,
                            s = n.airExpressTransfer;
                          if (!(r || o || l || s))
                            return (0, D.showToast)("暂无线路数据");
                          this.setState({
                            trafficGuidePopVisible: !0,
                            trafficGuideType: i,
                          });
                        },
                      },
                      {
                        key: "hideTrafficGuidePop",
                        value: function () {
                          this.setState({
                            trafficGuidePopVisible: !1,
                            trafficGuideType: "",
                          });
                        },
                      },
                      {
                        key: "checkCombineSeat",
                        value: function () {
                          this.setState({
                            showType: "combine_seat_intro_dialog",
                          });
                        },
                      },
                      {
                        key: "hideShowType",
                        value: function () {
                          this.setState({ showType: "" });
                        },
                      },
                      {
                        key: "toggleApplyTripDrawer",
                        value: function () {
                          this.setState({ isShowApplyTripDrawer: !0 });
                        },
                      },
                      {
                        key: "hideApplyTripDrawer",
                        value: function () {
                          this.setState({ isShowApplyTripDrawer: !1 });
                        },
                      },
                      {
                        key: "handleApplyTripDrawerConfirm",
                        value: function (e) {
                          var t,
                            i =
                              null ===
                                (t =
                                  this.state.applyChildTripInfo.popData.declareTrips.find(
                                    function (t) {
                                      return t.tripIndex === e;
                                    }
                                  )) || void 0 === t
                                ? void 0
                                : t.jumpUrl;
                          if (i) {
                            var a = "",
                              n = i.split("&");
                            if (
                              (null == n ||
                                n.forEach(function (e) {
                                  var t = null == e ? void 0 : e.split("=");
                                  "oid" === t[0] && (a = t[1]);
                                }),
                              a)
                            ) {
                              var r = k.ZP.getTrainDetailUrl(a);
                              (r = "".concat(r, "&operateType=applyFreeChild")),
                                this.hideApplyTripDrawer(),
                                N.Z.commonNavigator(r);
                            }
                          }
                        },
                      },
                      {
                        key: "candidatePreCancel",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, o.Z)().mark(function e(t, i) {
                              var a,
                                n,
                                r,
                                l = arguments;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((a =
                                            l.length > 2 && void 0 !== l[2]
                                              ? l[2]
                                              : ""),
                                          (e.prev = 1),
                                          !(
                                            this.tempInterval >
                                            this.tempTotalPollingTime
                                          ))
                                        ) {
                                          e.next = 5;
                                          break;
                                        }
                                        return (
                                          T().showToast({
                                            title: "超时",
                                            icon: "none",
                                            duration: 2e3,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 5:
                                        return (
                                          (e.next = 7),
                                          k.ZP.getTrain12306Config()
                                        );
                                      case 7:
                                        if (
                                          ((n = e.sent), n.isIn12306WorkTime)
                                        ) {
                                          e.next = 12;
                                          break;
                                        }
                                        return (
                                          T().showModal({
                                            title: "温馨提示",
                                            content: "".concat(
                                              n.trainTips.detention
                                            ),
                                            showCancel: !1,
                                            confirmText: "好的",
                                            confirmColor: C.default.isTieyou
                                              ? "#fc6e51"
                                              : "#0080FF",
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 12:
                                        return (
                                          (e.next = 14),
                                          (0, Z.gIZ)({
                                            orderNumber: t + "",
                                            candidateNo:
                                              i.candidateOrderNum || "",
                                            action: a,
                                          })
                                        );
                                      case 14:
                                        (r = e.sent),
                                          this.handleCandidateCancelResult(
                                            t,
                                            i,
                                            r
                                          ),
                                          (e.next = 21);
                                        break;
                                      case 18:
                                        (e.prev = 18),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0);
                                      case 21:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 18]]
                              );
                            })
                          );
                          return function (t, i) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "handleCandidateCancelResult",
                        value: function (e, t, i) {
                          if (i)
                            switch (i.resultCode) {
                              case -1:
                                (0, D.showToast)({
                                  title:
                                    i.resultMessage ||
                                    "网络开小差，请稍后再试~",
                                });
                                break;
                              case 1:
                                this.handleOrderCancel(e, i);
                                break;
                              case 2:
                                this.handleCandidateCancelFailed(i, e);
                                break;
                              case 3:
                                this.handlePolling(e, t, i);
                                break;
                              case 4:
                                this.gotoFaceVerify(e);
                            }
                        },
                      },
                      {
                        key: "handleOrderCancel",
                        value: function (e, t) {
                          var i = this,
                            a = t.cancelFailCode,
                            n = { bizOrderNumber: e };
                          (0, y.vV)(n).then(function (e) {
                            if (1 === (null == e ? void 0 : e.resultCode))
                              if (6 === a) {
                                var n,
                                  r,
                                  o =
                                    (null === (n = t.failToast) || void 0 === n
                                      ? void 0
                                      : n.title) || "系统异常，取消失败",
                                  l =
                                    null !== (r = t.failToast) &&
                                    void 0 !== r &&
                                    r.contents &&
                                    Array.isArray(t.failToast.contents)
                                      ? t.failToast.contents.reduce(function (
                                          e,
                                          t
                                        ) {
                                          return e + t + "\n";
                                        },
                                        "")
                                      : "当前铁路系统异常，请重试";
                                i.showCommonDialog({
                                  title: o,
                                  content: l,
                                  buttonName: "我知道了",
                                  onButtonClick: function () {
                                    i.loadData();
                                  },
                                });
                              } else
                                i.showCommonDialog({
                                  content: "抢票已取消",
                                  buttonName: "我知道了",
                                  onButtonClick: function () {
                                    i.loadData();
                                  },
                                });
                            else (0, D.showToast)("取消失败,请重试～");
                          });
                        },
                      },
                      {
                        key: "handleCandidateCancelFailed",
                        value: function (e, t) {
                          var i,
                            a,
                            n = this,
                            r =
                              (null === (i = e.failToast) || void 0 === i
                                ? void 0
                                : i.title) || "系统异常，取消失败",
                            s =
                              null !== (a = e.failToast) &&
                              void 0 !== a &&
                              a.contents &&
                              Array.isArray(e.failToast.contents)
                                ? e.failToast.contents.reduce(function (e, t) {
                                    return e + t + "\n";
                                  }, "")
                                : "当前铁路系统异常，请重试",
                            c = e.cancelFailCode;
                          T().showModal({
                            title: r,
                            content: s,
                            showCancel: !1,
                            confirmText: "我知道了",
                            confirmColor: C.default.isTieyou
                              ? "#fc6e51"
                              : "#0080FF",
                            success: (function () {
                              var e = (0, l.Z)(
                                (0, o.Z)().mark(function e(i) {
                                  return (0, o.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (!i.confirm) {
                                            e.next = 16;
                                            break;
                                          }
                                          (e.t0 = c),
                                            (e.next =
                                              1 === e.t0
                                                ? 4
                                                : 2 === e.t0
                                                ? 8
                                                : 3 === e.t0
                                                ? 10
                                                : 4 === e.t0
                                                ? 12
                                                : 5 === e.t0
                                                ? 13
                                                : 15);
                                          break;
                                        case 4:
                                          return (
                                            (e.next = 6),
                                            n.navigateToAsync({
                                              url: "/pages/12306/login/login",
                                              ignoreError: !0,
                                            })
                                          );
                                        case 6:
                                          return (
                                            B.CZ.call(n), e.abrupt("break", 16)
                                          );
                                        case 8:
                                          return (
                                            n.showCommonDialog({
                                              title: "取消失败",
                                              content: "系统异常，请稍后再试",
                                              buttonName: "我知道了",
                                            }),
                                            e.abrupt("break", 16)
                                          );
                                        case 10:
                                          return (
                                            n.showCommonDialog({
                                              title: "已兑现成功",
                                              content: "该候补订单已兑现成功",
                                              buttonName: "我知道了",
                                              onButtonClick: function () {
                                                var e =
                                                  k.ZP.getTrainGrabOrderDetailUrl(
                                                    t
                                                  );
                                                T().redirectTo({ url: e });
                                              },
                                            }),
                                            e.abrupt("break", 16)
                                          );
                                        case 12:
                                          n.gotoFaceVerify(t);
                                        case 13:
                                          return (
                                            n.gotoMessageVerify(t),
                                            e.abrupt("break", 16)
                                          );
                                        case 15:
                                          return e.abrupt("break", 16);
                                        case 16:
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
                          });
                        },
                      },
                      {
                        key: "handlePolling",
                        value: function (e, t, i) {
                          var a = this,
                            n = i.pollingInterval,
                            r = i.totalPollingTime;
                          (!n || n <= 0) && (n = 1),
                            (!r || r <= 0) && (r = 20),
                            (this.tempTotalPollingTime = r),
                            (this.tempInterval += n);
                          var o = setTimeout(function () {
                            clearTimeout(o),
                              a.candidatePreCancel(e, t, "query");
                          }, 1e3 * n);
                        },
                      },
                      {
                        key: "gotoFaceVerify",
                        value: function (e) {
                          var t = this,
                            i = (M.WG.get() || {}).bind12306,
                            a = i ? i.name : "",
                            n = "/pages/12306/face/face?userName=".concat(
                              a,
                              "&fromType=1&businessType=1"
                            );
                          this.navigateTo({
                            url: n,
                            callback: function (i) {
                              var a = i.certificationResultCode,
                                n = i.retMessage;
                              1 === a
                                ? t.faceSwipingSuccess(e)
                                : 2 === a &&
                                  setTimeout(function () {
                                    T().showModal({
                                      title: "温馨提示",
                                      content: n || "核验失败",
                                      confirmText: "知道了",
                                      showCancel: !1,
                                      confirmColor: C.default.isTieyou
                                        ? "#fc6e51"
                                        : "#0080FF",
                                      success: function () {},
                                    });
                                  }, 500);
                            },
                          });
                        },
                      },
                      {
                        key: "gotoMessageVerify",
                        value: function (e) {
                          var t = this,
                            i = (M.WG.get() || {}).bind12306,
                            a = i ? i.name : "",
                            n = (null == i ? void 0 : i.mobilePhone12306) || "",
                            r = "https://"
                              .concat(
                                C.default.h5domain,
                                "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                              )
                              .concat(C.default.partner, "#/verify?partner=")
                              .concat(
                                C.default.partner,
                                "&fromPage=orderdetail&userName="
                              )
                              .concat(a, "&mobile=")
                              .concat(n, "&password=")
                              .concat("");
                          (this.disableOnShowHook = !1),
                            I.Z.twebview({
                              data: {
                                url: r,
                                bridgeIns: function (i) {
                                  console.log("orderdetail webviewCB e = ", i),
                                    Array.isArray(i.detail.data) &&
                                      t.faceSwipingSuccess(e);
                                },
                              },
                            });
                        },
                      },
                      {
                        key: "faceSwipingSuccess",
                        value: function (e) {
                          var t = (M.WG.get() || {}).bind12306,
                            i = {
                              orderNumber: e,
                              accountNumber: t ? t.name : "",
                            };
                          (0, Z.Q6O)(i).then(
                            function (e) {
                              var t = e || {},
                                i = t.resultCode,
                                a = t.resultMessage;
                              1 === i
                                ? T().showToast({
                                    title: "核验成功",
                                    icon: "none",
                                    duration: 1e3,
                                  })
                                : T().showModal({
                                    title: "温馨提示",
                                    content: a || "网络错误，请稍后再试",
                                    confirmText: "知道了",
                                    showCancel: !1,
                                    confirmColor: C.default.isTieyou
                                      ? "#fc6e51"
                                      : "#0080FF",
                                    success: function () {},
                                  });
                            },
                            function (e) {
                              console.log(e);
                            }
                          );
                        },
                      },
                      {
                        key: "getSmartCross",
                        value: function () {
                          var e,
                            t = this,
                            i = new X.ZP({ fromPage: X.y3.smartOrderDetail }),
                            a = this.getExtParams(),
                            n = this.orderNumber,
                            r =
                              null === (e = M.WG.get()) || void 0 === e
                                ? void 0
                                : e.bind12306;
                          L({
                            orderNumber: "".concat(n),
                            fromSource: 1,
                            clientUserInfo: {
                              userAuth12306Status:
                                "0" ===
                                (null == r ? void 0 : r.memberStatus12306)
                                  ? 1
                                  : -1,
                              loginMobile: x.ZP.userName || "",
                            },
                            clientExtInfoList: a,
                          })
                            .then(function (e) {
                              if (1 === e.resultCode) {
                                var a,
                                  n,
                                  r,
                                  o,
                                  l,
                                  s,
                                  c,
                                  d,
                                  u,
                                  m = e.notices,
                                  f = e.areas,
                                  h = e.toasts;
                                i.initData({ notices: m, areas: f, toasts: h });
                                var p =
                                  null ===
                                    (a = i.getNoticeCrossScene(
                                      "goodsShelfPageNotice"
                                    )) || void 0 === a
                                    ? void 0
                                    : a._jsonInfo;
                                N.Z.isNotEmptyObj(p) &&
                                  t.setState({ pageNotice: p });
                                var v =
                                  null ===
                                    (n = i.getAreaCrossScene(
                                      "wechatFlowGuideArea"
                                    )) || void 0 === n
                                    ? void 0
                                    : n._jsonInfo;
                                N.Z.isNotEmptyObj(v) &&
                                  t.setState({
                                    showType: "joinWelfareOfficerBanner",
                                    wechatFlowGuideData: v,
                                  });
                                var g =
                                  null ===
                                    (r = i.getAreaCrossScene(
                                      "newCustomerGiftArea"
                                    )) || void 0 === r
                                    ? void 0
                                    : r._jsonInfo;
                                N.Z.isNotEmptyObj(g) &&
                                  t.setState({ cashBackInfo: g });
                                var T =
                                  null ===
                                    (o =
                                      i.getAreaCrossScene(
                                        "childDeclareArea"
                                      )) || void 0 === o
                                    ? void 0
                                    : o._jsonInfo;
                                N.Z.isNotEmptyObj(T) &&
                                  t.setState({ applyChildTripInfo: T });
                                var b =
                                  null ===
                                    (l = i.getAreaCrossScene(
                                      "smartFTCashBackArea"
                                    )) || void 0 === l
                                    ? void 0
                                    : l._jsonInfo;
                                N.Z.isNotEmptyObj(b) &&
                                  t.setState({ ftActivityCashBackInfo: b });
                                var w = i.getAreaCrossScene(
                                    "SmartTicketUpgradeOrderDetailArea"
                                  ),
                                  y =
                                    (null ===
                                      (s = X.ZP.parseOctopusAreaV2(w)) ||
                                    void 0 === s
                                      ? void 0
                                      : s._jsonInfo) || [];
                                t.setState({ exchangeSeatEntryList: y });
                                var Z = "",
                                  S =
                                    null ===
                                      (c =
                                        i.getToastCrossScene(
                                          "certificationToast"
                                        )) || void 0 === c
                                      ? void 0
                                      : c._jsonInfo;
                                N.Z.isNotEmptyObj(S) &&
                                  ((Z = "certificationDialog"),
                                  t.showVerifiedModal(S));
                                var C =
                                  null ===
                                    (d = i.getToastCrossScene(
                                      "SmartTripRescheduleToast"
                                    )) || void 0 === d
                                    ? void 0
                                    : d._jsonInfo;
                                Z ||
                                  (N.Z.isNotEmptyObj(C)
                                    ? ((Z = "appointSeatSaleDrawer"),
                                      t.setState({
                                        appointSeatSaleInfo: C,
                                        isAutoShowAppointSeatSaleDrawer: !0,
                                      }))
                                    : t.setState({
                                        appointSeatSaleInfo: null,
                                      }));
                                var x =
                                  null ===
                                    (u = i.getToastCrossScene(
                                      "smartTicketRecommendSystemToast"
                                    )) || void 0 === u
                                    ? void 0
                                    : u._jsonInfo;
                                N.Z.isNotEmptyObj(x) &&
                                  ((Z = "smartTicketRecommendSystemToast"),
                                  t.setState({
                                    smartTicketRecommendSystemToast: x,
                                  })),
                                  Z && t.setState({ showType: Z });
                              }
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                        },
                      },
                      {
                        key: "getExtParams",
                        value: function () {
                          var e = [];
                          return (
                            e.push({
                              key: "enableAccountCheck",
                              value: "true",
                            }),
                            e.push({ key: "fromPage", value: "0" }),
                            e
                          );
                        },
                      },
                      {
                        key: "onShowAppointSeatSaleDrawer",
                        value: function () {
                          this.setState({
                            showType: "appointSeatSaleDrawer",
                            isAutoShowAppointSeatSaleDrawer: !1,
                          });
                        },
                      },
                      {
                        key: "handleInsuranceTrace",
                        value: function (e) {
                          var t,
                            i = this.state,
                            a = i.retainXPopData,
                            n = i.retainXInfo;
                          if (
                            2 ===
                            (null == n ||
                            null === (t = n.insuranceExtraData) ||
                            void 0 === t
                              ? void 0
                              : t.saleCompanyType)
                          ) {
                            var r,
                              o = (null == a ? void 0 : a.productName) || "";
                            null === (r = this.InsuranceRecord) ||
                              void 0 === r ||
                              r.track({
                                desc: e,
                                type: o,
                                title: ""
                                  .concat(
                                    (null == a ? void 0 : a.showPrice) ||
                                      (null == n ? void 0 : n.productPrice),
                                    "-"
                                  )
                                  .concat(o),
                              });
                          }
                        },
                      },
                      {
                        key: "onCloseRetainXDialog",
                        value: function () {
                          var e = this.state.retainXInfo;
                          try {
                            var t;
                            this.ubtTrace("221069", {
                              orderid: String(this.orderNumber),
                              code: (null == e ? void 0 : e.productCode) || "",
                              Type:
                                (null == e ||
                                null === (t = e.insuranceExtraData) ||
                                void 0 === t
                                  ? void 0
                                  : t.saleCompanyType) + "",
                            }),
                              this.ubtDevTrace("o_smart_orderDetail_pay", {
                                date: v()().format(xe),
                                desc: "关闭挽留弹窗",
                              });
                          } catch (e) {
                            console.log(e);
                          }
                          this.setState({ isShowRetainXDialog: !1 }),
                            this.goPay();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            i,
                            a,
                            n = this,
                            o = this.state,
                            l = o.orderMsg,
                            s = o.status,
                            c = o.statusDesc,
                            d = o.orderStatusMessage,
                            u = o.totalPrice,
                            m = o.orderTripInfos,
                            f = void 0 === m ? [] : m,
                            h = o.tripLineExtraDataType,
                            p = void 0 === h ? {} : h,
                            v = o.tripPriceDetails,
                            g = void 0 === v ? [] : v,
                            T = o.otherPriceDetail,
                            w = void 0 === T ? [] : T,
                            N = o.priceDetailDialogVisible,
                            y = o.fromTripPlanFlag,
                            Z = o.toTripPlanFlag,
                            S = o.bothEndsTraffic,
                            x = o.fromLocation,
                            D = o.toLocation,
                            k = o.paymentExpiredTime,
                            I = o.moreInfoMsg,
                            B = o.cashBackInfo,
                            P = o.train12306Config,
                            M = o.trafficGuidePopVisible,
                            X = o.trafficGuideType,
                            A = o.orderSource,
                            E = o.showType,
                            L = o.showShareBtn,
                            z = o.isShowRetainXDialog,
                            j = o.retainXPopData,
                            q = o.isShowTravelGuaranteeDialog,
                            U = o.products,
                            W = o.wechatFlowGuideData,
                            H = o.applyChildTripInfo,
                            Q = o.isShowApplyTripDrawer,
                            J = o.pageNotice,
                            K = o.appointSeatSaleInfo,
                            $ = o.isAutoShowAppointSeatSaleDrawer,
                            ie = o.smartTicketRecommendSystemToast,
                            ce = o.ftActivityCashBackInfo,
                            ue = o.exchangeSeatEntryList,
                            fe = p.transferInfo,
                            he = void 0 === fe ? [] : fe,
                            pe = p.trainCrossStationData,
                            Ne = void 0 === pe ? {} : pe,
                            Ce =
                              null === (e = f[0]) || void 0 === e
                                ? void 0
                                : e.fromStation,
                            xe =
                              null === (t = f[0]) || void 0 === t
                                ? void 0
                                : t.tripType,
                            De =
                              null === (i = f[f.length - 1]) || void 0 === i
                                ? void 0
                                : i.toStation,
                            ke =
                              null === (a = f[f.length - 1]) || void 0 === a
                                ? void 0
                                : a.tripType,
                            Ie = 10 === s,
                            Be = 10 === s,
                            Pe = 10 === s,
                            Ve = (0, F.VL)(g),
                            _e =
                              501 === l.orderMsgCode &&
                              f.some(function (e) {
                                return 1501 === e.subOrderMsg.orderMsgCode;
                              }),
                            Me =
                              20 === s &&
                              (503 === l.orderMsgCode ||
                                504 === l.orderMsgCode),
                            Xe = this.getIsShowCombineTrain();
                          return (0, G.BX)(b.View, {
                            className: "body",
                            children: [
                              (0, G.tZ)(b.View, {
                                className: ""
                                  .concat(R.S, " arc-header ")
                                  .concat(d ? "" : "short"),
                              }),
                              (0, G.tZ)(b.View, {
                                className: ""
                                  .concat(R.S, " arc ")
                                  .concat(d ? "" : "short"),
                              }),
                              (0, G.BX)(b.View, {
                                className: "order-detail-content",
                                children: [
                                  (0, G.tZ)(Y, {
                                    status: s,
                                    statusDesc: c,
                                    orderStatusMessage: d,
                                    paymentExpiredTime: k,
                                    fromStation: Ce,
                                    toStation: De,
                                    totalPrice: u,
                                    popupPriceDetailDialog:
                                      this.popupPriceDetailDialog.bind(this),
                                    orderMessageBtnClick:
                                      this.orderMessageBtnClick.bind(this),
                                    orderMsg: l,
                                    refresh: this.getOrderDetailInfo.bind(this),
                                  }),
                                  (0, G.tZ)(Se, { data: ce }),
                                  (0, G.BX)(b.View, {
                                    className: "order-detail-trip-container",
                                    children: [
                                      (0, G.tZ)(b.View, {
                                        className: "connector",
                                      }),
                                      !!y &&
                                        !Be &&
                                        (0, G.tZ)(le, {
                                          data: S.start,
                                          type: "start",
                                          fromStation: ""
                                            .concat(Ce)
                                            .concat("T" == xe ? "站" : ""),
                                          onNearPanelClick: function () {
                                            return n.onNearPanelClick({
                                              type: "start",
                                            });
                                          },
                                        }),
                                      f.map(function (e, t) {
                                        var i = t !== f.length - 1 && s > 10;
                                        return (0, G.BX)(
                                          b.Block,
                                          {
                                            children: [
                                              (0, G.tZ)(
                                                ee,
                                                {
                                                  data: e,
                                                  waitCheckPasTel: _e,
                                                  ticketInterrupted: Me,
                                                  onBizOrderCancel:
                                                    n.clickCancel.bind(n),
                                                  index: t,
                                                  onGoRobSetPage:
                                                    n.onGoRobSetPage,
                                                  isShowCombineTrain: Xe,
                                                  trainCrossStationData: Ne,
                                                  exchangeSeatEntryList: ue,
                                                  isShowExchangeSeatEntry: (0,
                                                  F.Qr)(K),
                                                },
                                                String(t)
                                              ),
                                              i &&
                                                (0, G.tZ)(te, {
                                                  transferInfo: he[t],
                                                  index: t,
                                                  trips: f,
                                                  isCombine: "smarttcs" === A,
                                                  checkCombineSeat:
                                                    function () {
                                                      return n.checkCombineSeat();
                                                    },
                                                }),
                                            ],
                                          },
                                          String(t)
                                        );
                                      }),
                                      !!Z &&
                                        !Be &&
                                        (0, G.tZ)(le, {
                                          data: S.end,
                                          type: "end",
                                          toLocation: D,
                                          onNearPanelClick: function () {
                                            return n.onNearPanelClick({
                                              type: "end",
                                            });
                                          },
                                        }),
                                    ],
                                  }),
                                  (0, G.tZ)(we, {
                                    bannerInfo: H,
                                    onBannerClick: this.toggleApplyTripDrawer,
                                  }),
                                  Ie &&
                                    (0, G.tZ)(b.View, {
                                      className:
                                        "cancel-button font-medium color-grey",
                                      id: "ANCB",
                                      onClick: this.clickCancel,
                                      children: "取消订单",
                                    }),
                                  (0, G.tZ)(se, { tripList: f, status: s }),
                                  (null == U ? void 0 : U.length) > 0 &&
                                    (0, G.tZ)(ge, {
                                      btnClick: this.showTravelGuaranteeDialog,
                                      ubtTrace: this.ubtTrace,
                                      orderNumber: this.orderNumber,
                                      products: U,
                                    }),
                                  (0, G.tZ)(re.Z, {
                                    title: B && B.additionTitle,
                                    subTitle: B && B.mainTitle,
                                    canShare: !0,
                                  }),
                                  (0, G.tZ)(b.View, {
                                    className: "more-info",
                                    children: I,
                                  }),
                                ],
                              }),
                              Pe &&
                                (0, G.tZ)(b.View, {
                                  className: "tip-row",
                                  children: (0, G.tZ)(de, {
                                    notice: J,
                                    train12306Config: P,
                                  }),
                                }),
                              (null == K ? void 0 : K.bannerDesc) &&
                                (0, G.tZ)(Ze, {
                                  appointInfo: K,
                                  oid: this.orderNumber,
                                  onShowDrawer:
                                    this.onShowAppointSeatSaleDrawer,
                                }),
                              (Be || L) &&
                                (0, G.tZ)(b.View, {
                                  className: "order-detail-bottom",
                                  children: (0, G.tZ)(ae, {
                                    totalPrice: u,
                                    hasFlight: Ve,
                                    isTieyou: C.default.isTieyou,
                                    showShareBtn: L,
                                    togglePriceDetailDialog:
                                      this.togglePriceDetailDialog.bind(this),
                                    onPay: this.handlePayment.bind(this),
                                  }),
                                }),
                              (0, G.tZ)(ne.Z, {
                                isShow: N,
                                onClose:
                                  this.togglePriceDetailDialog.bind(this),
                                priceDetail: g,
                                otherPriceDetail: w,
                                fixAtBottom: !Be,
                              }),
                              (0, G.tZ)(oe.Z, {
                                visible: M,
                                trafficGuideInfo: S[X],
                                onClose: function () {
                                  return n.hideTrafficGuidePop();
                                },
                                fromLocation:
                                  "start" == X
                                    ? x
                                    : ""
                                        .concat(De)
                                        .concat("T" == ke ? "站" : ""),
                                toLocation:
                                  "end" == X
                                    ? D
                                    : ""
                                        .concat(Ce)
                                        .concat("T" == xe ? "站" : ""),
                                fixAtBottom: !Be,
                              }),
                              (0, G.tZ)(V.Z, {
                                visible: "combine_seat_intro_dialog" === E,
                                onClose: function () {
                                  return n.hideShowType();
                                },
                                type: A,
                              }),
                              (0, G.tZ)(_.Z, {
                                ref: function (e) {
                                  n.onDialogAttach(e);
                                },
                              }),
                              (0, G.tZ)(me, {
                                isShow: z,
                                data: j,
                                cancel: this.onCloseRetainXDialog,
                                confirm: this.selectXPay,
                                handleInsuranceTrace: this.handleInsuranceTrace,
                              }),
                              (0, G.tZ)(ve, {
                                isShow: q,
                                products: U,
                                onClose: function () {
                                  return n.setState({
                                    isShowTravelGuaranteeDialog: !1,
                                  });
                                },
                                productRefund: this.productRefund,
                                rightBtnClick: this.rightBtnAction,
                              }),
                              "joinWelfareOfficerBanner" === E &&
                                (0, G.tZ)(Te, {
                                  data: W,
                                  navigateTo: this.navigateTo,
                                  btnClick: function () {
                                    n.needFreshWechatFlow = !0;
                                  },
                                  ubtTrace: function (e) {
                                    var t =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                    return n.ubtTrace(
                                      e,
                                      (0, r.Z)(
                                        (0, r.Z)({}, t),
                                        {},
                                        {
                                          PageId: n.pageId,
                                          orderid: String(n.orderNumber),
                                        }
                                      )
                                    );
                                  },
                                  close: this.hideShowType,
                                }),
                              (0, G.tZ)(be, {
                                visible: Q,
                                drawerInfo: null == H ? void 0 : H.popData,
                                onConfirm: this.handleApplyTripDrawerConfirm,
                                onClose: this.hideApplyTripDrawer,
                              }),
                              (0, G.tZ)(ye, {
                                visible: "appointSeatSaleDrawer" === E,
                                drawerInfo: K,
                                orderId: this.orderNumber,
                                isAutoShow: $,
                                onClose: this.hideShowType,
                                onRefreshData: this.loadData,
                              }),
                              (0, G.tZ)(O.Z, {
                                visible:
                                  "smartTicketRecommendSystemToast" === E,
                                data: ie,
                                onClose: this.hideShowType,
                                oid: this.orderNumber,
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(h.default.Component))
              ) || ce;
          (De.enableShareAppMessage = !0),
            Page(
              (0, a.createPageConfig)(
                De,
                "pages/smart/packageA/orderDetail/index",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "订单详情",
                  enablePullDownRefresh: !0,
                  backgroundColor: "#0066E6",
                  backgroundColorBottom: "#efefef",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            5572, 3322, 36332, 95854, 71229, 32690, 80683, 67289, 72508, 30747,
            3429, 89576, 5421, 59777, 95601, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(65433);
          }
        ),
          e.O();
      },
    ]);
})();
