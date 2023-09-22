!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/6deb9d1305c2b84d9103247c2ddc9f3d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [73876],
      {
        92387: function (e, t, n) {
          var i = n(32180),
            r = n(57042),
            a = n(24460),
            l = n(81876),
            o = n(21867),
            c = n(86066),
            s = n(45023),
            d = n(52500),
            u = n(71515),
            _ = n(92954),
            h = n.n(_),
            f = n(65573),
            m = n(30595),
            p = n(35707),
            v = n(23577),
            g = n(69410),
            Z = n(298),
            N = {
              state: {
                orderDetail: null,
                isLoading: !0,
                isShowPricePop: !1,
                isShowRulePop: !1,
                chatLink: "",
              },
              reducers: {
                setOrderDetail: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { orderDetail: t });
                },
                setIsLoading: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { isLoading: t });
                },
                setIsShowPricePop: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { isShowPricePop: t });
                },
                setShowRulePop: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { isShowRulePop: t });
                },
                setChatLink: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { chatLink: t });
                },
              },
            },
            w = {
              state: { isShowRefundPop: !1 },
              reducers: {
                setShowRefundPop: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { isShowRefundPop: t });
                },
              },
            },
            b = (function (e) {
              (0, o.Z)(n, e);
              var t = (0, c.Z)(n);
              function n() {
                return (0, r.Z)(this, n), t.apply(this, arguments);
              }
              return (0, a.Z)(n);
            })(g.Z);
          (0, s.Z)(b, "store", {
            models: { orderDetailModel: N, orderOptModel: w },
          });
          var D = n(87298),
            k = n(94262),
            y = n(8271),
            T = n.n(y),
            V = n(49528),
            C = function () {
              var e = b.getState().orderDetailModel.orderDetail,
                t = (null == e ? void 0 : e.orderOperateElement) || [];
              return !(
                null == t ||
                !t.find(function (e) {
                  return "pay" === (null == e ? void 0 : e.operate);
                })
              );
            },
            x = function () {
              var e = b.getState().orderDetailModel.orderDetail.processState;
              return !((S() && "3" == e) || C());
            },
            S = function () {
              var e = b.getState().orderDetailModel.orderDetail;
              return (
                "1" == (null == e ? void 0 : e.isGrabTicket) ||
                "2" == (null == e ? void 0 : e.isGrabTicket)
              );
            },
            B = n(19972),
            X = n(62631),
            I = (0, X.Z)({
              serviceCode: "23698",
              channel: v.Z.train_channel,
              path: "getOrderDetail",
              bu: "ship",
            }),
            R = (0, X.Z)({
              serviceCode: "23698",
              channel: v.Z.train_channel,
              path: "orderCancel",
              bu: "ship",
            }),
            F = (0, X.Z)({
              serviceCode: "23698",
              channel: v.Z.train_channel,
              path: "applyRefundTicket",
              bu: "ship",
            }),
            P = (0, X.Z)({
              serviceCode: "23698",
              channel: "",
              path: "getOrderQrCode",
              bu: "ship",
            }),
            M = (0, X.Z)({
              serviceCode: "19833",
              channel: "",
              path: "chatInfoQuestionList",
              bu: "ship",
            }),
            j = n(82977),
            L = n(48813),
            G = (0, f.$j)(
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
                n = e.orderDetail;
              return (0, L.BX)(u.View, {
                className: " _jj _Oa _Cc _Hr",
                children: [
                  (0, L.BX)(u.View, {
                    className: " _i _Ga _l _yb _m _Ir",
                    children: [
                      (0, L.tZ)(u.Text, {
                        className: " _Xb _tb",
                        children: "订单总价",
                      }),
                      (0, L.BX)(u.Text, {
                        className: " _Xb _Jr",
                        style: V.FS.zxRegular,
                        children: ["¥", null == n ? void 0 : n.totalFee],
                      }),
                    ],
                  }),
                  null == n || null === (t = n.priceDetail) || void 0 === t
                    ? void 0
                    : t.map(function (e, t) {
                        var i;
                        return (0,
                        L.BX)(u.View, { className: " _i _Ga _l _dn _m _Ir " + (t === (null == n || null === (i = n.priceDetail) || void 0 === i ? void 0 : i.length) - 1 ? " _Kr" : ""), children: [(0, L.tZ)(u.Text, { className: " _Xb _G", children: null == e ? void 0 : e.statement }), (0, L.BX)(u.Text, { className: " _Xb _Lr", style: V.FS.zxRegular, children: [null == e ? void 0 : e.price, "x", null == e ? void 0 : e.count] })] }, t);
                      }),
                ],
              });
            }),
            O = n(90113);
          function E() {
            U(),
              (function () {
                var e,
                  t = b.getPage(),
                  n = {
                    appVersion:
                      null === (e = v.Z.application) || void 0 === e
                        ? void 0
                        : e.version,
                    orderNumber: t.orderId,
                    pageId: t.getPageId(),
                    platformType: 0,
                    isAndroid: !v.Z.os,
                    productLineName: "ship",
                  };
                M(n)
                  .then(function (e) {
                    var t;
                    b.getDispatch().orderDetailModel.setChatLink(
                      null == e || null === (t = e.data) || void 0 === t
                        ? void 0
                        : t.liveChatLink
                    );
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              })();
          }
          function U() {
            var e = b.getPage();
            (0, B.Q)("加载中..."),
              I({ orderId: e.orderId })
                .then(function (e) {
                  1 === (null == e ? void 0 : e.code) && null != e && e.data
                    ? b
                        .getDispatch()
                        .orderDetailModel.setOrderDetail(
                          null == e ? void 0 : e.data
                        )
                    : (b.getDispatch().orderDetailModel.setOrderDetail(null),
                      h().showToast({
                        title:
                          (null == e ? void 0 : e.message) ||
                          "网络异常，请稍后再试",
                        icon: "none",
                      }));
                })
                .catch(function (e) {
                  console.log(e),
                    h().showToast({
                      title: "网络异常，请稍后再试",
                      icon: "none",
                    });
                })
                .finally(function () {
                  var t;
                  (0, B.Z)(),
                    e.setState({ isRefreshing: !1 }),
                    v.Z.isCRN &&
                      (null === (t = e._refreshControl) ||
                        void 0 === t ||
                        t.finishRefresh()),
                    b.getDispatch().orderDetailModel.setIsLoading(!1);
                });
          }
          var q = n(90129),
            z = function (e, t) {
              var n = T()(e).valueOf() - T()().valueOf();
              return "ms" === t
                ? {
                    value: n,
                    minutes: Math.floor(n / 6e4),
                    seconds: Math.floor((n % 6e4) / 1e3),
                  }
                : {
                    value: n,
                    hours: Math.floor(n / 36e5),
                    minutes: Math.floor((n % 36e5) / 6e4),
                    seconds: Math.floor((n % 6e4) / 1e3),
                  };
            },
            Y = function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "hms",
                n = (0, d.useState)(function () {
                  return e ? z(e, t) : void 0;
                }),
                i = (0, q.Z)(n, 2),
                r = i[0],
                a = i[1];
              return (
                (0, d.useEffect)(
                  function () {
                    var n = setInterval(function () {
                      var i = z(e, t);
                      i.value < 0
                        ? (n && clearInterval(n),
                          a({
                            value: i.value,
                            hours: 0,
                            minutes: 0,
                            seconds: 0,
                          }))
                        : a(i);
                    }, 1e3);
                    return function () {
                      n && clearInterval(n);
                    };
                  },
                  [e]
                ),
                r
              );
            },
            Q = function (e) {
              var t = e.orderDetail,
                n = T()(t.createDttm)
                  .add(1, "hour")
                  .format("YYYY-MM-DD HH:mm:ss"),
                i = Y(n, "ms");
              return (
                null != i &&
                  i.value &&
                  i.value < 0 &&
                  setTimeout(function () {
                    E();
                  }, 0),
                (0, L.tZ)(u.Text, {
                  className: " _rl _Vp",
                  children: i
                    ? "".concat(i.minutes, "分").concat(i.seconds, "秒")
                    : "",
                })
              );
            },
            H = (0, f.$j)(
              function (e) {
                return { orderDetail: e.orderDetailModel.orderDetail };
              },
              function (e) {
                return (0, k.Z)(e), {};
              }
            )(function (e) {
              var t = e.orderDetail;
              if (!t) return (0, L.tZ)(u.View, {});
              var n = C();
              return (0, L.BX)(u.View, {
                className: " _jt _i _Ga _l",
                children: [
                  (0, L.tZ)(u.Image, {
                    src: null == t ? void 0 : t.statusIcon,
                    className: " _Ef _db _Qf",
                  }),
                  (0, L.BX)(u.View, {
                    style: "flex: 1",
                    children: [
                      (0, L.tZ)(u.View, {
                        className: " _dd _kt _nb",
                        children: null == t ? void 0 : t.status,
                      }),
                      n &&
                        t.createDttm &&
                        (0, L.BX)(u.View, {
                          className: " _lt _E _Ac _i _Ga",
                          children: [
                            "余票变动频繁, 请在",
                            (0, L.tZ)(Q, { orderDetail: t }),
                            "内完成支付",
                          ],
                        }),
                      !n &&
                        !(null == t || !t.orderSubDesc) &&
                        (0, L.tZ)(u.View, {
                          className: " _lt _E _Ac _i _Ga",
                          children: null == t ? void 0 : t.orderSubDesc,
                        }),
                    ],
                  }),
                  (0, L.BX)(u.View, {
                    className: " _i _Ga _l",
                    onClick: function () {
                      b.getPage().showCommonDrawer({
                        title: "价格明细",
                        content: function () {
                          return (0, L.tZ)(G, {});
                        },
                        className: "ship-order-price-detail",
                        innerContainerStyle: {
                          backgroundColor: "#f5f5f5",
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                        iphoneXFooterColor: "#f5f5f5",
                        useScrollView: !0,
                      });
                    },
                    children: [
                      (0, L.tZ)(u.View, {
                        className: " _hq _ub",
                        style: (0, Z.Z)(
                          (0, Z.Z)({}, V.FS.zxRegular),
                          {},
                          { color: v.Z.isTieyou ? "#fc6e51" : "#0080FF" }
                        ),
                        children: "¥",
                      }),
                      (0, L.tZ)(u.View, {
                        className: " _nt _Og",
                        style: (0, Z.Z)(
                          (0, Z.Z)({}, V.FS.zxRegular),
                          {},
                          { color: v.Z.isTieyou ? "#fc6e51" : "#0080FF" }
                        ),
                        children: null == t ? void 0 : t.totalFee,
                      }),
                      (0, L.tZ)(u.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_gdd@3x.png",
                        className: " _ot _dg _pt",
                      }),
                    ],
                  }),
                ],
              });
            }),
            A = n(79301),
            $ = n(95308),
            W = n(21961),
            J = n(93761),
            K = n(79910);
          function ee() {}
          var te = (function (e) {
              (0, o.Z)(n, e);
              var t = (0, c.Z)(n);
              function n(e) {
                var i;
                return (
                  (0, r.Z)(this, n),
                  ((i = t.call(this, e)).state = {
                    noticeData: null,
                    showBanner: !0,
                  }),
                  i
                );
              }
              return (
                (0, a.Z)(n, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.refreshPageData();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      JSON.stringify(this.props.orderDetail) !==
                        JSON.stringify(e.orderDetail) && this.refreshPageData();
                    },
                  },
                  {
                    key: "refreshPageData",
                    value: (function () {
                      var e = (0, $.Z)(
                        (0, A.Z)().mark(function e() {
                          var t,
                            n,
                            i,
                            r,
                            a,
                            l = this;
                          return (0, A.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if ((i = this.props.orderDetail)) {
                                      e.next = 3;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 3:
                                    return (
                                      (r =
                                        (null == i ||
                                        null === (t = i.ticketElement) ||
                                        void 0 === t ||
                                        null === (n = t.ticketDetail) ||
                                        void 0 === n
                                          ? void 0
                                          : n[0]) || {}),
                                      (e.prev = 4),
                                      (e.next = 7),
                                      (0, W.WF)({
                                        basicParams: { bigChannel: "ship" },
                                        page: 4,
                                        fromTime:
                                          (null == r ? void 0 : r.fromDate) +
                                          " " +
                                          (null == r ? void 0 : r.fromTime),
                                        fromCity:
                                          null == r ? void 0 : r.fromCityName,
                                        toCity:
                                          null == r ? void 0 : r.toCityName,
                                        fromStation:
                                          null == r
                                            ? void 0
                                            : r.fromStationName,
                                        toStation:
                                          null == r ? void 0 : r.toStationName,
                                        plateNumber:
                                          null == i ? void 0 : i.shipName,
                                        website:
                                          null == i ? void 0 : i.bookingWebsite,
                                      })
                                    );
                                  case 7:
                                    (a = e.sent),
                                      this.setState(
                                        {
                                          noticeData:
                                            1 === a.code
                                              ? null == a
                                                ? void 0
                                                : a.data
                                              : null,
                                          showBanner: !0,
                                        },
                                        function () {
                                          l.props.onChange &&
                                            l.props.onChange(
                                              !(
                                                1 !== a.code ||
                                                !(null == a ? void 0 : a.data)
                                              )
                                            );
                                        }
                                      ),
                                      (e.next = 14);
                                    break;
                                  case 11:
                                    (e.prev = 11),
                                      (e.t0 = e.catch(4)),
                                      console.log(
                                        "refresh notice data err",
                                        e.t0
                                      );
                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[4, 11]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "StripHT",
                    value: function (e) {
                      var t = new RegExp(/<[^<>]+>/, "g"),
                        n = e.replace(t, "");
                      return (n = (n = (n = n.replace("<", "")).replace(
                        ">",
                        ""
                      )).replace("&nbsp;", ""));
                    },
                  },
                  {
                    key: "handleOpenNoticeModal",
                    value: function () {
                      var e = this.state.noticeData;
                      null != e && e.link
                        ? (function (e) {
                            K.Z.commonNavigator(e);
                          })(null == e ? void 0 : e.link)
                        : (function (e) {
                            var t,
                              n = b.getPage();
                            null == n ||
                              null === (t = n.showCommonDialog) ||
                              void 0 === t ||
                              t.call(n, {
                                content:
                                  (null == e ? void 0 : e.richTextContent) ||
                                  (null == e ? void 0 : e.content),
                                title: (null == e ? void 0 : e.title) || "公告",
                                buttonName: "我知道了",
                                onButtonClick: function () {},
                              });
                          })(e);
                    },
                  },
                  {
                    key: "onHideClick",
                    value: function () {
                      this.setState({ showBanner: !1 });
                    },
                  },
                  {
                    key: "getBoardBanner",
                    value: function () {
                      var e,
                        t = this.state,
                        n = t.noticeData,
                        i = t.showBanner;
                      if (n && i) {
                        var r = n.title,
                          a = " ".concat(
                            (null == n ||
                            null === (e = n.content) ||
                            void 0 === e
                              ? void 0
                              : e.replace(/[\r\n]/g, "")) || ""
                          );
                        return (0, L.BX)(u.View, {
                          className: " _p _i _Ga _n _l _ir _jr _Vb _dc",
                          onClick: this.handleOpenNoticeModal.bind(this),
                          children: [
                            (0, L.BX)(u.View, {
                              className: " _oo _i _n _l _yc",
                              children: [
                                (0, L.tZ)(u.Image, {
                                  src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/lbggtx@3x.png",
                                  mode: "aspectFit",
                                  className: " _Rj _Tj _On",
                                }),
                                (0, L.BX)(u.View, {
                                  className: " _oo _E _yc _Ym _Xm _i _kr",
                                  children: [
                                    (0, L.tZ)(u.Text, {
                                      className: " _lr _E",
                                      numberOfLines: 1,
                                      children: r,
                                    }),
                                    (0, L.tZ)(u.Text, {
                                      className: " _Ma _mr _yc _Xm _Ym _cf _j",
                                      numberOfLines: 1,
                                      children: a,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, L.tZ)(u.Image, {
                              src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/tbgd@3x.png",
                              mode: "aspectFit",
                              className: " _og _Ye _uh",
                            }),
                          ],
                        });
                      }
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      return (0, L.tZ)(u.View, {
                        children: this.getBoardBanner(),
                      });
                    },
                  },
                ]),
                n
              );
            })(d.default.PureComponent),
            ne = (0, f.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(te),
            ie = n(43884),
            re = n(26282),
            ae = null === v.Z || void 0 === v.Z ? void 0 : v.Z.isTieyou,
            le = (0, f.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              var t,
                n,
                i,
                r,
                a,
                l,
                o = e.orderDetail;
              if (!o) return (0, L.tZ)(u.View, {});
              var c =
                  (null == o ||
                  null === (t = o.ticketElement) ||
                  void 0 === t ||
                  null === (n = t.ticketDetail) ||
                  void 0 === n
                    ? void 0
                    : n[0]) || {},
                s = T()(null == o ? void 0 : o.fromDttm).format("M月D日"),
                d = T()(null == o ? void 0 : o.fromDttm).format("HH:mm"),
                _ = null == c ? void 0 : c.toTime,
                h = re.Z.getWeekDayDesc(null == o ? void 0 : o.fromDttm),
                f = T()(null == c ? void 0 : c.toDate).format("M月D日"),
                m = re.Z.getWeekDayDesc(null == c ? void 0 : c.toDate),
                p =
                  (null == o || o.fromTimes, !["3", "7"].includes(o.orderType));
              return (0, L.BX)(ie.Z, {
                className: " _vt _dc _wt",
                colors: ["rgb(242, 248, 255)", "rgb(255, 255, 255)"],
                locations: [0, 1],
                children: [
                  (0, L.BX)(u.View, {
                    className: " _i _Ga _l",
                    children: [
                      (0, L.tZ)(u.View, {
                        className: " _Tk _De _vi _o _Q _b _B",
                        style: { backgroundColor: ae ? "#fc6e51" : "#0080FF" },
                        children: "出发",
                      }),
                      (0, L.BX)(u.Text, {
                        className: " _sb _E _Q _Zg _j",
                        children: [
                          null == c ? void 0 : c.fromCityName,
                          "-",
                          null == c ? void 0 : c.toCityName,
                          " ",
                          s,
                          " ",
                          h,
                        ],
                      }),
                      (0, L.BX)(u.View, {
                        className: " _i _Ga _l",
                        onClick: function () {
                          return (function () {
                            var e = b.getState("orderDetailModel").orderDetail;
                            (0, O.F)(null == e ? void 0 : e.instructionsDesc);
                          })();
                        },
                        children: [
                          (0, L.tZ)(u.View, {
                            className: " _xh _E _Q",
                            children: "退改签说明",
                          }),
                          (0, L.tZ)(u.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_gd2@3x.png",
                            className: " _Oo _dg _uh",
                          }),
                        ],
                      }),
                    ],
                  }),
                  "3" == o.orderType &&
                    !(null == o || !o.fromTimes) &&
                    (0, L.BX)(u.View, {
                      className: " _Xk _dd _E _i _Ga _l",
                      children: [
                        "出发时间段: ",
                        (0, L.tZ)(u.Text, {
                          style: "font-weight: 500",
                          children: null == o ? void 0 : o.fromTimes,
                        }),
                      ],
                    }),
                  "7" == o.orderType &&
                    !(null == o || !o.fromTimes) &&
                    (0, L.BX)(u.View, {
                      className: " _Xk _dd _E _i _Ga _l",
                      children: [
                        (0, L.tZ)(u.Text, { children: "流水班" }),
                        (0, L.tZ)(u.View, {
                          className: " _Mm _Ye _og _hb _b _Ct _ff _o _Dt",
                          children: "首",
                        }),
                        (0, L.tZ)(u.Text, {
                          style: { fontSize: 14, fontFamily: (0, V.QQ)() },
                          children:
                            null == o ||
                            null === (i = o.fromTimes) ||
                            void 0 === i ||
                            null === (r = i.split("-")) ||
                            void 0 === r
                              ? void 0
                              : r[0],
                        }),
                        (0, L.tZ)(u.View, {
                          className: " _Mm _Ye _og _hb _b _Ct _ff _o _Dt  _Hi",
                          children: "末",
                        }),
                        (0, L.tZ)(u.Text, {
                          style: { fontSize: 14, fontFamily: (0, V.QQ)() },
                          children:
                            null == o ||
                            null === (a = o.fromTimes) ||
                            void 0 === a ||
                            null === (l = a.split("-")) ||
                            void 0 === l
                              ? void 0
                              : l[1],
                        }),
                      ],
                    }),
                  (0, L.BX)(u.View, {
                    className: " _xt _i _Ga",
                    children: [
                      (0, L.BX)(u.View, {
                        className: " _Db _i",
                        children: [
                          p &&
                            (0, L.BX)(u.Text, {
                              className: " _oc _E",
                              children: [s, " ", h],
                            }),
                          p &&
                            (0, L.tZ)(u.View, {
                              className: " _dd _yt",
                              children: d,
                            }),
                          (0, L.tZ)(u.Text, {
                            className: " _ub _dd _vl",
                            children: null == o ? void 0 : o.fromStationName,
                          }),
                        ],
                      }),
                      (0, L.BX)(u.View, {
                        className: " _i _nj _Sj _l",
                        children: [
                          (0, L.BX)(u.View, {
                            className: " _i _Ga _l",
                            children: [
                              (0, L.tZ)(ie.Z, {
                                className: " _Yq _Ye",
                                locations: [0, 1],
                                start: { x: 0, y: 0.5 },
                                end: { x: 1, y: 0.5 },
                                colors: [
                                  "rgba(135, 159, 194,0)",
                                  "rgba(135, 159, 194,1)",
                                ],
                              }),
                              (0, L.tZ)(u.View, {
                                className: " _Ua _zt _Mb _At _i _Ga _l _Bt",
                                children: (0, L.tZ)(u.Text, {
                                  numberOfLines: 1,
                                  className: " _Cl _Vp _yc _Ym _Xm",
                                  children: null == o ? void 0 : o.shipName,
                                }),
                              }),
                              (0, L.tZ)(ie.Z, {
                                className: " _Yq _Ye",
                                locations: [0, 1],
                                start: { x: 0, y: 0.5 },
                                end: { x: 1, y: 0.5 },
                                colors: [
                                  "rgba(135, 159, 194,1)",
                                  "rgba(135, 159, 194,0)",
                                ],
                              }),
                            ],
                          }),
                          !(null == o || !o.useTimeFmt) &&
                            (0, L.tZ)(u.View, {
                              className: " _cg _dd _D _R",
                              children: null == o ? void 0 : o.useTimeFmt,
                            }),
                        ],
                      }),
                      (0, L.BX)(u.View, {
                        className: " _Db _i _pf",
                        children: [
                          p &&
                            (0, L.BX)(u.Text, {
                              className: " _oc _E",
                              children: [f, " ", m],
                            }),
                          p &&
                            (0, L.tZ)(u.View, {
                              className: " _dd _yt",
                              children: _,
                            }),
                          (0, L.tZ)(u.Text, {
                            className: " _ub _dd _vl",
                            children: null == o ? void 0 : o.toStationName,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            oe = n(47482),
            ce = function (e) {
              var t,
                n,
                i = e.passenger,
                r = e.id,
                a = (0, d.useState)(!1),
                l = (0, q.Z)(a, 2),
                o = l[0],
                c = l[1],
                s =
                  (null == i || null === (t = i.ticketUserList) || void 0 === t
                    ? void 0
                    : t[0]) || {},
                _ = s.identityName,
                h = s.birthDate,
                f = s.identityCode,
                m = s.identityType,
                p = [];
              return (
                h && p.push({ title: "出生日期", val: h }),
                m && f && p.push({ title: m, val: f }),
                (0, L.BX)(u.View, {
                  className: " _Br " + (0 === r ? " _ub" : ""),
                  children: [
                    (0, L.BX)(u.View, {
                      className: " _i _Ga _l",
                      children: [
                        (0, L.tZ)(u.Text, {
                          className: " _sb _vl _T _Va",
                          children: _,
                        }),
                        (0, L.tZ)(u.View, {
                          className: " _i _Ga _l",
                          style: "flex:1",
                          children:
                            null == i ||
                            null === (n = i.tagList) ||
                            void 0 === n
                              ? void 0
                              : n.map(function (e, t) {
                                  return (0,
                                  L.tZ)(u.View, { className: " _lj _gb _Cr _Al _Nd _Dr " + (1 === e.type ? " _Er _Ze" : ""), children: (0, L.tZ)(oe.Z, { style: { color: 1 === e.type ? "#ff5959" : "#999", fontSize: 9, lineHeight: 15 }, numberOfLines: 1, expand: !1, children: e.name }) }, t);
                                }),
                        }),
                        (0, L.tZ)(u.View, { style: "flex-1" }),
                        (0, L.BX)(u.View, {
                          className: " _i _Ga _l _n",
                          onClick: function () {
                            return c(!o);
                          },
                          children: [
                            (0, L.tZ)(u.Text, {
                              className: " _Ma _E _Q",
                              children: "证件信息",
                            }),
                            (0, L.tZ)(u.Image, {
                              className: " _Bb _ii _Zg",
                              src: o
                                ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_zkd@3x.png"
                                : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icongd@3x.png",
                            }),
                          ],
                        }),
                      ],
                    }),
                    o &&
                      (0, L.tZ)(u.View, {
                        children:
                          null == p
                            ? void 0
                            : p.map(function (e, t) {
                                return (0,
                                L.BX)(u.View, { className: " _i _Ga _l _qd " + (0 === t ? " _Lc" : ""), children: [(0, L.tZ)(u.View, { className: " _Ma _F _If", children: e.title }), (0, L.tZ)(u.View, { className: " _sb _F", children: e.val })] }, t);
                              }),
                      }),
                  ],
                })
              );
            },
            se = (0, f.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              var t,
                n = e.orderDetail,
                i =
                  null == n || null === (t = n.ticketElement) || void 0 === t
                    ? void 0
                    : t.ticketDetail;
              if (null == i || !i.length) return (0, L.tZ)(u.View, {});
              var r = n.seatName,
                a = [];
              return (
                i.forEach(function (e) {
                  var t,
                    n = [],
                    i =
                      (null == e ||
                      null === (t = e.ticketUserList) ||
                      void 0 === t
                        ? void 0
                        : t[0]) || {},
                    l = i.isFetcher,
                    o = i.passengerType;
                  l && n.push({ name: "取票人", type: 1 }),
                    n.push({ name: o, type: 2 }),
                    n.push({ name: r, type: 2 }),
                    (e.tagList = n),
                    a.push(e);
                }),
                (0, L.tZ)(u.View, {
                  className: " _Ar _er _dc",
                  children:
                    null == i
                      ? void 0
                      : i.map(function (e, t) {
                          return (0, L.tZ)(ce, { passenger: e, index: t }, t);
                        }),
                })
              );
            }),
            de = (0, f.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              return e.orderDetail
                ? (0, L.BX)(u.View, {
                    className: " _a _er _Oa _Ls _yc",
                    children: [(0, L.tZ)(le, {}), (0, L.tZ)(se, {})],
                  })
                : (0, L.tZ)(u.View, {});
            });
          function ue(e) {
            return e.map(function (e, t) {
              console.error(e);
              var n = e.fetcherQrcode,
                i = e.ticketPerson,
                r = e.seatNum,
                a = "data:image/png;base64,",
                l = (n.indexOf(a) > -1 ? n : "".concat(a).concat(n)).replace(
                  /[\r\n]/g,
                  ""
                );
              return (0,
              L.tZ)(u.SwiperItem, { children: (0, L.BX)(u.View, { className: " _Z _Y _i _k _l _o", children: [(0, L.tZ)(u.View, { className: " _Xb _bp", children: i }), (0, L.tZ)(u.Image, { className: " _Vs _Ws _Xs", src: "".concat(l) }), !!r && (0, L.BX)(u.Text, { className: " _oc _bp", children: ["座位号", r] })] }, t) }, t);
            });
          }
          var _e = d.default.memo(function (e) {
            var t = e.infos;
            return t
              ? (0, L.tZ)(u.View, {
                  className: " _Qh",
                  children: (0, L.tZ)(u.Swiper, {
                    vertical: !1,
                    previousMargin: "80",
                    nextMargin: "80",
                    className: " _Us -qa",
                    indicatorDots: 1,
                    indicatorActiveColor: "#0080FF",
                    indicatorColor: "#ccc",
                    children: ue(t),
                  }),
                })
              : (0, L.tZ)(u.View, {});
          });
          function he(e) {
            switch (e) {
              case "pay":
                !(function (e, t) {
                  J.ZP.doPayment({
                    orderNumber: String(e),
                    business: "ship",
                    title: "船票订单",
                  })
                    .then(function () {
                      null == t || t();
                    })
                    .catch(function () {
                      null == t || t();
                    });
                })(b.getPage().orderId, function () {
                  return U();
                });
                break;
              case "oneMore":
                !(function () {
                  var e,
                    t,
                    n = b.getPage(),
                    i = b.getState().orderDetailModel.orderDetail,
                    r =
                      (null == i ||
                      null === (e = i.ticketElement) ||
                      void 0 === e ||
                      null === (t = e.ticketDetail) ||
                      void 0 === t
                        ? void 0
                        : t[0]) || {},
                    a = r.fromDate,
                    l = r.fromCityName,
                    o = r.toCityName,
                    c = "/pages/ship/list/list?mDate="
                      .concat(a, "&mFrom=")
                      .concat(l, "&mTo=")
                      .concat(o);
                  n.navigateTo({ url: c });
                })();
                break;
              case "buyReturn":
                !(function () {
                  var e,
                    t,
                    n = b.getPage(),
                    i = b.getState().orderDetailModel.orderDetail,
                    r =
                      (null == i ||
                      null === (e = i.ticketElement) ||
                      void 0 === e ||
                      null === (t = e.ticketDetail) ||
                      void 0 === t
                        ? void 0
                        : t[0]) || {},
                    a = r.fromDate,
                    l = r.fromCityName,
                    o = r.toCityName,
                    c = T()(a).add(1, "day").format("YYYY-MM-DD"),
                    s = "/pages/ship/list/list?mDate="
                      .concat(c, "&mFrom=")
                      .concat(o, "&mTo=")
                      .concat(l);
                  n.navigateTo({ url: s });
                })();
                break;
              case "cancel":
                !(function () {
                  var e = b.getPage(),
                    t = b.getState().orderDetailModel.orderDetail;
                  e.showMultiButtonDialog({
                    title: "",
                    content: "确定取消订单吗？",
                    leftButtonName: "取消",
                    rightButtonName: "确定",
                    onRightButtonClick: function () {
                      (0, B.Q)("正在取消..."),
                        R({ orderNumber: null == t ? void 0 : t.orderNumber })
                          .then(function (e) {
                            (0, B.Z)(),
                              1 === (null == e ? void 0 : e.code)
                                ? (h().showToast({
                                    title: "取消成功",
                                    icon: "none",
                                  }),
                                  U())
                                : h().showToast({
                                    title:
                                      (null == e ? void 0 : e.message) ||
                                      "取消失败",
                                    icon: "none",
                                  });
                          })
                          .catch(function () {
                            h().showToast({
                              title: "网络异常，请稍后再试",
                              icon: "none",
                            });
                          });
                    },
                  });
                })();
                break;
              case "invoice":
                pe();
                break;
              case "change":
                ve();
                break;
              case "refund":
                me();
            }
          }
          var fe,
            me = function () {
              var e;
              null === (e = b.getPage().$refundLayer) ||
                void 0 === e ||
                e.handleRefund();
            },
            pe = function () {
              h().showToast({ title: "暂不支持该操作", icon: "none" });
            },
            ve = function () {
              h().showToast({ title: "暂不支持该操作", icon: "none" });
            },
            ge = n(53550),
            Ze =
              (v.Z.isTieyou,
              function (e) {
                var t = e.orderDetail;
                if (!t) return (0, L.tZ)(u.View, {});
                var n = (0, d.useState)(!1),
                  i = (0, q.Z)(n, 2),
                  r = i[0],
                  a = i[1],
                  l = (0, d.useState)([]),
                  o = (0, q.Z)(l, 2),
                  c = o[0],
                  s = o[1];
                return (
                  (0, d.useEffect)(
                    function () {
                      var e,
                        n,
                        i,
                        r,
                        a = (null == t ? void 0 : t.fetcherInfo) || {},
                        l = a.fetcherTicketNumber,
                        o = a.fetcherTicketCode,
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
                          null !== (n = e.ticketPort) &&
                          void 0 !== n &&
                          n.address &&
                          u.push({
                            name: "取票地点",
                            desc:
                              null == t ||
                              null === (i = t.location) ||
                              void 0 === i ||
                              null === (r = i.ticketPort) ||
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
                        l && u.push({ name: "取票号", desc: l }),
                        o && u.push({ name: "取票密码", desc: o }),
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
                  (0, L.BX)(u.View, {
                    className: " _Cc _jj _Oa _er",
                    children: [
                      (0, L.BX)(u.View, {
                        className: " _i _Ga _l _Wn",
                        children: [
                          (0, L.tZ)(u.View, {
                            className: " _sb _Ec _U _j",
                            children: "取票信息",
                          }),
                          (0, L.BX)(u.View, {
                            className: " _i _Ga _l _n",
                            onClick: function () {
                              return a(!r);
                            },
                            children: [
                              (0, L.tZ)(u.View, {
                                className: " _Ma _F _T",
                                children: "详情",
                              }),
                              (0, L.tZ)(u.Image, {
                                className: " _Bb _ii _Zg",
                                src: r
                                  ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_zkd@3x.png"
                                  : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icongd@3x.png",
                              }),
                            ],
                          }),
                        ],
                      }),
                      r &&
                        (0, L.BX)(u.View, {
                          className: " _i _Ga _l _Fr",
                          children: [
                            (0, L.tZ)(u.View, {
                              style: "flex: 1",
                              children:
                                null == c
                                  ? void 0
                                  : c.map(function (e, t) {
                                      return (0, L.BX)(
                                        u.View,
                                        {
                                          className:
                                            " _i _Ga _Z " +
                                            (0 !== t ? " _qd" : ""),
                                          onClick: function () {
                                            ("qrcode" != e.type &&
                                              "backqrcode" != e.type) ||
                                              (function () {
                                                var e,
                                                  t =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0] &&
                                                    arguments[0],
                                                  n = b.getPage(),
                                                  i =
                                                    b.getState()
                                                      .orderDetailModel
                                                      .orderDetail,
                                                  r = n.orderId,
                                                  a = {
                                                    orderNumber: r,
                                                    qrShowType:
                                                      (null == i ||
                                                      null ===
                                                        (e = i.fetcherInfo) ||
                                                      void 0 === e
                                                        ? void 0
                                                        : e.qrShowType) || 2,
                                                    isBack: t,
                                                  };
                                                P(a, {
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
                                                      n.showCommonDrawer({
                                                        title:
                                                          (null == i ||
                                                          null ===
                                                            (t =
                                                              i.fetcherInfo) ||
                                                          void 0 === t
                                                            ? void 0
                                                            : t.qrCodeDes) ||
                                                          "请凭二维码检票上船",
                                                        content: function () {
                                                          return (0, L.tZ)(
                                                            u.View,
                                                            {
                                                              children: (0,
                                                              L.tZ)(_e, {
                                                                infos: e.data,
                                                              }),
                                                            }
                                                          );
                                                        },
                                                        className:
                                                          "ship-qrCode-pop",
                                                        innerContainerStyle: {
                                                          backgroundColor:
                                                            "#ffffff",
                                                          borderTopLeftRadius: 20,
                                                          borderTopRightRadius: 20,
                                                        },
                                                        useScrollView: !0,
                                                      });
                                                  })
                                                  .catch(function () {});
                                              })("qrcode" == e.type);
                                          },
                                          children: [
                                            (0, L.tZ)(u.Text, {
                                              className: " _Ma _F _If _uj _S",
                                              children:
                                                null == e ? void 0 : e.name,
                                            }),
                                            (0, L.tZ)(u.Text, {
                                              className:
                                                " _sb _F _S _j " +
                                                ("qrcode" ===
                                                  (null == e
                                                    ? void 0
                                                    : e.type) ||
                                                "backqrcode" == e.type
                                                  ? "fontColor"
                                                  : ""),
                                              children:
                                                null == e ? void 0 : e.desc,
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                    }),
                            }),
                            (0, L.tZ)(u.View, {
                              className: " _fc _De _cj _Gr",
                            }),
                            v.Z.isCRN &&
                              !!t.location &&
                              (0, L.BX)(u.View, {
                                className: " _i _k _l",
                                onClick: function () {
                                  t.location;
                                },
                                children: [
                                  (0, L.tZ)(ge.Z, {
                                    style: {
                                      color: v.Z.isTieyou
                                        ? "#fc6e51"
                                        : "#0080FF",
                                    },
                                    children: "",
                                  }),
                                  (0, L.tZ)(u.View, {
                                    className: " _oc _B _N",
                                    children: "港口地图",
                                  }),
                                ],
                              }),
                          ],
                        }),
                    ],
                  })
                );
              }),
            Ne = (0, f.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(Ze),
            we = (0, f.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              var t = e.orderDetail;
              return (function () {
                var e = b.getState().orderDetailModel.orderDetail;
                return !!(
                  (null == e ? void 0 : e.orderOperateElement) || []
                ).find(function (e) {
                  return "cancelOrder" == e.operate;
                });
              })() && t
                ? (0, L.tZ)(u.View, {
                    className: " _Gc _a _Oa _er _Kc _G _Xc _o",
                    onClick: function () {
                      return he("cancel");
                    },
                    children: "取消订单",
                  })
                : (0, L.tZ)(u.View, {});
            }),
            be = n(92049),
            De = (0, f.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              return e.orderDetail
                ? (0, L.BX)(L.HY, {
                    children: [
                      (0, L.BX)(u.View, {
                        className: " _jj _Wb _fr _gr _i _Ga",
                        children: [
                          C() &&
                            (0, L.tZ)(u.View, {
                              className: " _lc _qc _o _Oa _Ec _j _Sf  _qb _Hi",
                              onClick: function () {
                                return he("pay");
                              },
                              children: "立即支付",
                            }),
                          x() &&
                            (0, L.tZ)(u.View, {
                              className: " _lc _qc _o _Oa _Ec _j _Sf  _hr",
                              style: {
                                color: v.Z.isTieyou ? "#fc6e51" : "#0080FF",
                              },
                              onClick: function () {
                                return he("oneMore");
                              },
                              children: "再来一单",
                            }),
                          x() &&
                            (0, L.tZ)(u.View, {
                              className: " _lc _qc _o _Oa _Ec _j _Sf  _b",
                              style: {
                                backgroundColor: v.Z.isTieyou
                                  ? "#fc6e51"
                                  : "#0080FF",
                              },
                              onClick: function () {
                                return he("buyReturn");
                              },
                              children: "购买返程",
                            }),
                        ],
                      }),
                      (0, L.tZ)(be.Z, { backgroundColor: "#fff" }),
                    ],
                  })
                : (0, L.tZ)(u.View, {});
            }),
            ke = (0, f.$j)(function (e) {
              return { orderDetail: e.orderDetailModel.orderDetail };
            })(function (e) {
              var t = e.orderDetail,
                n = (function () {
                  var e = b.getState().orderDetailModel.orderDetail,
                    t = [];
                  if (!e) return t;
                  var n = e.processState,
                    i = e.userCancel,
                    r = e.isReplenishInvoice;
                  return (
                    ((!S() || "3" == n || "4" == n) && S()) ||
                      C() ||
                      "1" == i ||
                      (r && t.push({ name: "补寄发票", type: "invoice" }),
                      t.push({ name: "改签", type: "change" }),
                      t.push({ name: "退票", type: "refund" })),
                    t
                  );
                })();
              return null != n && n.length && t
                ? (0, L.tZ)(u.View, {
                    className: " _i _Ga _er",
                    children: n.map(function (e, t) {
                      return (0, L.tZ)(
                        u.View,
                        {
                          className: " _j _i _l _n _Gc _Vb _Oa _le _Oj -oa",
                          style: {
                            color: v.Z.isTieyou ? "#fc6e51" : "#0080FF",
                            marginRight:
                              t === (null == n ? void 0 : n.length) - 1
                                ? 0
                                : 10,
                          },
                          onClick: function () {
                            he(null == e ? void 0 : e.type);
                          },
                          children: e.name,
                        },
                        t
                      );
                    }),
                  })
                : (0, L.tZ)(u.View, {});
            }),
            ye = n(74921),
            Te = n(22276),
            Ve = n(90098),
            Ce = ["selectTicketIds"],
            xe = (function (e) {
              (0, o.Z)(n, e);
              var t = (0, c.Z)(n);
              function n(e) {
                var i;
                return (
                  (0, r.Z)(this, n),
                  ((i = t.call(this, e)).state = {
                    orderDetailData: null,
                    showLayer: !1,
                    canRefund: !1,
                    selectTicketIds: [],
                    processState: null,
                    status: null,
                  }),
                  i
                );
              }
              return (
                (0, a.Z)(n, [
                  {
                    key: "handleRefund",
                    value: (function () {
                      var e = (0, $.Z)(
                        (0, A.Z)().mark(function e() {
                          return (0, A.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      (console.log(
                                        "handleRefundhandleRefund",
                                        this.props.orderId
                                      ),
                                      this.props.orderId)
                                    ) {
                                      e.next = 3;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 3:
                                    return (
                                      (e.next = 5), this.getOrderDetailPromise()
                                    );
                                  case 5:
                                    this.setState({ showLayer: !0 });
                                  case 6:
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
                      var e = (0, $.Z)(
                        (0, A.Z)().mark(function e() {
                          var t, n, i, r, a, l;
                          return (0, A.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((e.prev = 0),
                                      (0, B.Q)("退票中..."),
                                      (t = this.state),
                                      (n = t.orderDetailData),
                                      (i = t.carElement),
                                      (r = this.state.selectTicketIds).length ||
                                        !n.isRefundByTicket)
                                    ) {
                                      e.next = 7;
                                      break;
                                    }
                                    return (
                                      h().showToast({
                                        title: "请选择需要退票的乘客~",
                                        icon: "none",
                                      }),
                                      e.abrupt("return")
                                    );
                                  case 7:
                                    return (
                                      (null == i ? void 0 : i.length) > 0 &&
                                        (r = [].concat(
                                          (0, Te.Z)(r),
                                          (0, Te.Z)(
                                            i.map(function (e) {
                                              return Number(e.id);
                                            })
                                          )
                                        )),
                                      (a = {
                                        orderNumber: this.props.orderId,
                                        ticketIds: r,
                                      }),
                                      (e.next = 11),
                                      F(a)
                                    );
                                  case 11:
                                    if (
                                      ((l = e.sent),
                                      (0, B.Z)(),
                                      1 == (null == l ? void 0 : l.code))
                                    ) {
                                      e.next = 15;
                                      break;
                                    }
                                    throw new Error("退票失败");
                                  case 15:
                                    return (
                                      h().showToast({
                                        title: "退票成功！",
                                        icon: "none",
                                      }),
                                      e.abrupt("return", !0)
                                    );
                                  case 19:
                                    (e.prev = 19),
                                      (e.t0 = e.catch(0)),
                                      (0, B.Z)(),
                                      h().showToast({
                                        title: "退票失败！",
                                        icon: "none",
                                      });
                                  case 23:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[0, 19]]
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
                      var e = (0, $.Z)(
                        (0, A.Z)().mark(function e() {
                          var t, n, i, r, a;
                          return (0, A.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      I({ orderId: this.props.orderId })
                                    );
                                  case 3:
                                    (n = e.sent),
                                      (i = this.getRefundNoticeData(
                                        1 == n.code && n.data
                                      )),
                                      (r = i.selectTicketIds),
                                      (a = (0, ye.Z)(i, Ce)),
                                      this.setState({
                                        orderDetailData: a,
                                        canRefund: this.isCanRefund(n.data),
                                        processState: n.processState,
                                        status: n.status,
                                        selectTicketIds: r,
                                        carElement:
                                          null == n ||
                                          null === (t = n.data) ||
                                          void 0 === t
                                            ? void 0
                                            : t.carElement,
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
                        n = e || {},
                        i = n.refundDeadline,
                        r = n.ticketReturnType,
                        a = n.totalReturnHaddingFee,
                        l = n.totalReturnFee,
                        o = n.ruleDesc,
                        c = n.ticketElement,
                        s = n.seatName,
                        d = (o || {}).rule,
                        u = void 0 === d ? [] : d,
                        _ = (c || {}).ticketDetail,
                        h = void 0 === _ ? [] : _,
                        f = "1" == r,
                        m = 0,
                        p = [];
                      return (
                        f
                          ? h.forEach(function (e) {
                              if (
                                e.ticketUserList &&
                                e.ticketUserList.length > 0
                              ) {
                                var t = [];
                                e.ticketUserList.forEach(function (n) {
                                  n.identityName != e.identityName &&
                                    t.push(n.identityName);
                                }),
                                  p.push({
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
                          : ((m = a), (t = l)),
                        {
                          refundDeadLine: i,
                          refundHaddingFee: m,
                          refundTotalFee: t,
                          refundRuleDesc: u.find(function (e) {
                            return e.title.indexOf("退票须知") > -1;
                          }),
                          ticketList: p,
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
                      if (e.canRefund) {
                        var t = this.state.selectTicketIds.findIndex(function (
                          t
                        ) {
                          return e.id === t;
                        });
                        this.setState({
                          selectTicketIds:
                            t > -1
                              ? [].concat(
                                  (0, Te.Z)(
                                    this.state.selectTicketIds.slice(0, t)
                                  ),
                                  (0, Te.Z)(
                                    this.state.selectTicketIds.slice(t + 1)
                                  )
                                )
                              : [].concat(
                                  (0, Te.Z)(this.state.selectTicketIds),
                                  [e.id]
                                ),
                        });
                      }
                    },
                  },
                  {
                    key: "onRefundClick",
                    value: (function () {
                      var e = (0, $.Z)(
                        (0, A.Z)().mark(function e() {
                          var t = this;
                          return (0, A.Z)().wrap(
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
                        var n = 0,
                          i = 0;
                        return (
                          e.forEach(function (e) {
                            t.indexOf(e.id) > -1 &&
                              ((i += e.refundFeeInfo.refundHaddingFee),
                              (n += e.refundFeeInfo.refundFee));
                          }),
                          { totalFee: n, haddingFee: i }
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
                        n,
                        i,
                        r,
                        a,
                        l = this,
                        o = this.state,
                        c = o.orderDetailData,
                        s = o.showLayer,
                        d = o.selectTicketIds,
                        _ = o.canRefund,
                        h = o.processState,
                        f = o.status;
                      if (_ && (null == c ? void 0 : c.ticketList.length) > 0) {
                        var m = this.getRefundFeeByTicket();
                        (r = m.haddingFee), (a = m.totalFee);
                      } else
                        (r = null == c ? void 0 : c.refundHaddingFee),
                          (a = null == c ? void 0 : c.refundTotalFee);
                      var p = function (e) {
                        return e.isSelected
                          ? (0, L.tZ)(u.Image, {
                              className: " _bc _cc _ju",
                              src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/xzln@3x.png",
                            })
                          : (0, L.tZ)(u.View, { className: " _ku _Ua _Ta" });
                      };
                      return s
                        ? (0, L.tZ)(j.Z, {
                            isShowClose: !1,
                            visible: s,
                            onCancel: this.onCloseLayer.bind(this),
                            isShowIphoneXAdapter: !0,
                            enableTapBackground: !0,
                            hideHeader: !1,
                            onWrapClose: this.onCloseLayer.bind(this),
                            useScrollView: !0,
                            children: (0, L.tZ)(u.View, {
                              children: (0, L.BX)(u.View, {
                                className: " _p _i _Yt _Zr _Ya _a _kd _Zt",
                                catchMove: !0,
                                children: [
                                  (0, L.BX)(u.View, {
                                    className: " _sb _au _Qj _Uc _o _bu",
                                    children: [
                                      "退票提醒",
                                      (0, L.tZ)(u.Image, {
                                        className: " _u _cu _hh _bc _cc",
                                        src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/gbn@3x.png",
                                        onClick: this.onCloseLayer.bind(this),
                                      }),
                                    ],
                                  }),
                                  (0, L.BX)(u.ScrollView, {
                                    scrollY: !0,
                                    className: " _j _Zr _du",
                                    children: [
                                      _ &&
                                        (null == c ||
                                        null === (e = c.ticketList) ||
                                        void 0 === e
                                          ? void 0
                                          : e.length) > 0 &&
                                        (0, L.BX)(u.View, {
                                          className: " _eu",
                                          children: [
                                            (0, L.tZ)(u.Text, {
                                              className: " _Xb _fu _bc _Uc",
                                              children: "选择需要退票的乘客",
                                            }),
                                            null == c ||
                                            null === (t = c.ticketList) ||
                                            void 0 === t
                                              ? void 0
                                              : t.map(function (e, t) {
                                                  return (0,
                                                  L.BX)(u.View, { className: " _i _Ga _m _gu _bt", onClick: l.onPassengerSelect.bind(l, e), children: [(0, L.BX)(u.View, { className: " _Xb _hu _Ld _Uc _W", children: [" ", e.name] }), (0, L.BX)(u.View, { className: " _i _Ga _n _l", children: [e.canRefund && (0, L.tZ)(u.Text, { className: " _Xb _iu _Ua _Uc _Qf", children: e.seatName || "一层前A区" }), e.canRefund ? (0, L.tZ)(p, { isSelected: d.indexOf(e.id) > -1 }) : (0, L.tZ)(u.Text, { className: " _lu _G _vp", children: e.returnState })] })] }, t);
                                                }),
                                          ],
                                        }),
                                      _
                                        ? (0, L.BX)(u.View, {
                                            className: " _Fr _bt",
                                            children: [
                                              (0, L.tZ)(u.Text, {
                                                className: " _Xb _fu _bc _Uc",
                                                children: "费用说明",
                                              }),
                                              (0, L.BX)(u.View, {
                                                className: " _i _Ga _m _l _Pc",
                                                children: [
                                                  (0, L.tZ)(u.View, {
                                                    className:
                                                      " _Xb _mu _U _Uc",
                                                    children: "退款截止时间",
                                                  }),
                                                  (0, L.tZ)(u.View, {
                                                    className:
                                                      " _Xb _mu _U _Uc",
                                                    children:
                                                      null == c
                                                        ? void 0
                                                        : c.refundDeadLine,
                                                  }),
                                                ],
                                              }),
                                              (0, L.BX)(u.View, {
                                                className: " _i _Ga _m _l _Pc",
                                                children: [
                                                  (0, L.tZ)(u.View, {
                                                    className:
                                                      " _Xb _mu _U _Uc",
                                                    children: "预计手续费",
                                                  }),
                                                  (0, L.tZ)(u.View, {
                                                    className:
                                                      " _Xb _mu _U _Uc",
                                                    children: (0, L.BX)(
                                                      u.Text,
                                                      {
                                                        className: " _bf",
                                                        children: ["￥", r],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, L.BX)(u.View, {
                                                className: " _i _Ga _m _l _Pc",
                                                children: [
                                                  (0, L.tZ)(u.View, {
                                                    className:
                                                      " _Xb _mu _U _Uc",
                                                    children: "预计退款金额",
                                                  }),
                                                  (0, L.tZ)(u.View, {
                                                    className:
                                                      " _Xb _mu _U _Uc",
                                                    children: (0, L.tZ)(
                                                      u.Text,
                                                      {
                                                        className: " _bf",
                                                        children: a,
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          })
                                        : (0, L.tZ)(u.View, {
                                            className: " _G _o",
                                            children:
                                              "7" == h || "11" == h
                                                ? (0, L.BX)(u.Text, {
                                                    children: ["该订单", f],
                                                  })
                                                : (0, L.tZ)(u.Text, {
                                                    children:
                                                      "该订单暂不支持退票",
                                                  }),
                                          }),
                                      (null == c ||
                                      null === (n = c.refundRuleDesc) ||
                                      void 0 === n ||
                                      null === (i = n.rules) ||
                                      void 0 === i
                                        ? void 0
                                        : i.length) > 0 &&
                                        (0, L.BX)(u.View, {
                                          className: " _nu",
                                          children: [
                                            (0, L.tZ)(u.Text, {
                                              className: " _Xb _ou _Ua _U _Uc",
                                              children: "退票须知",
                                            }),
                                            (0, L.tZ)(u.View, {
                                              className: " _Bj",
                                              scrollY: !0,
                                              children:
                                                c.refundRuleDesc.rules.map(
                                                  function (e, t) {
                                                    return (0, L.tZ)(
                                                      u.View,
                                                      {
                                                        className:
                                                          " _oc _pu _Uc _Xl -ta",
                                                        children: (0, L.tZ)(
                                                          u.Text,
                                                          { children: e }
                                                        ),
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
                                  (0, L.tZ)(u.View, {
                                    className: " _i _Ga _m _l",
                                    style: v.Z.isCRN
                                      ? {
                                          paddingBottom: Ve.Z.isIPhoneX
                                            ? 34
                                            : 10,
                                        }
                                      : {},
                                    children: _
                                      ? (0, L.BX)(u.Block, {
                                          children: [
                                            (0, L.tZ)(u.View, {
                                              className:
                                                " _qu _Gc _ru _Xc _x _fu _o _le",
                                              onClick:
                                                this.onCloseLayer.bind(this),
                                              children: "取消",
                                            }),
                                            (0, L.tZ)(u.View, {
                                              className:
                                                " _j _w _dr _Gc _Xc _qb _fu _o",
                                              onClick:
                                                this.onRefundClick.bind(this),
                                              children: "确认退票",
                                            }),
                                          ],
                                        })
                                      : (0, L.tZ)(u.View, {
                                          className:
                                            " _j _w _dr _Gc _Xc _qb _fu _o",
                                          onClick: this.onCloseLayer.bind(this),
                                          children: "知道了",
                                        }),
                                  }),
                                ],
                              }),
                            }),
                          })
                        : (0, L.tZ)(u.View, {});
                    },
                  },
                ]),
                n
              );
            })(d.default.PureComponent),
            Se = n(851),
            Be = n(29799),
            Xe = n(81023),
            Ie =
              (0, D.h)(!1)(
                (fe = (function (e) {
                  (0, o.Z)(n, e);
                  var t = (0, c.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, r.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, s.Z)(
                        (0, l.Z)(i),
                        "pageId",
                        v.Z.isCRN ? "10650104532" : ""
                      ),
                      (i.store = b.create((0, l.Z)(i)).store),
                      (i.state = { isRefreshing: !1 }),
                      i
                    );
                  }
                  return (
                    (0, a.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          p.Z.isLogin ||
                            p.Z.doLogin()
                              .then(function () {})
                              .catch(function () {}),
                            this.setPageData();
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          E();
                        },
                      },
                      {
                        key: "setPageData",
                        value: function () {
                          var e,
                            t,
                            n =
                              (null === (e = (0, _.getCurrentInstance)()) ||
                              void 0 === e ||
                              null === (t = e.router) ||
                              void 0 === t
                                ? void 0
                                : t.params) || {},
                            i = n.orderId,
                            r = n.orderNumber;
                          this.orderId = i || r;
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            n = this,
                            i = this.state.isRefreshing,
                            r =
                              (null === (e = (0, _.getCurrentInstance)()) ||
                              void 0 === e ||
                              null === (t = e.router) ||
                              void 0 === t
                                ? void 0
                                : t.params) || {},
                            a = r.orderId,
                            l = r.orderNumber;
                          return (0, L.tZ)(f.zt, {
                            store: this.store,
                            children: (0, L.BX)(u.View, {
                              className: " _yd _i _k _Y _Z _Nb",
                              children: [
                                (0, L.tZ)(m.Z, {
                                  title: "订单详情",
                                  colors: ["red", "yellow"],
                                  pop: function () {
                                    return n.navigateBack();
                                  },
                                  renderRightView: function () {
                                    return (0, L.BX)(u.View, {
                                      className: " _i _k _n _l _dd _C",
                                      onClick: ee,
                                      children: [
                                        (0, L.tZ)(u.Image, {
                                          className: " _Ij _eg",
                                          src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_08/icon_1@3x.png",
                                        }),
                                        (0, L.tZ)(u.Text, { children: "咨询" }),
                                      ],
                                    });
                                  },
                                }),
                                (0, L.BX)(u.ScrollView, {
                                  className: " _Z _j _Aj",
                                  scrollY: !0,
                                  refresherEnabled: !0,
                                  refresherTriggered: i,
                                  onRefresherPulling: function () {
                                    return n.setState({ isRefreshing: !0 });
                                  },
                                  onRefresherRefresh: E,
                                  refreshControl: (0, L.tZ)(Xe.Z, {
                                    ref: function (e) {
                                      return (n._refreshControl = e);
                                    },
                                    refreshing: i,
                                    onRefresh: E,
                                    colors: [
                                      "#ff0000",
                                      "#00ff00",
                                      "#0000ff",
                                      "#3ad564",
                                    ],
                                    progressBackgroundColor: "#ffffff",
                                    loadingStyleName: "default",
                                    spinnerStyle: "fixBehind",
                                  }),
                                  children: [
                                    (0, L.tZ)(H, {}),
                                    (0, L.tZ)(ne, {}),
                                    (0, L.tZ)(de, {}),
                                    (0, L.tZ)(ke, {}),
                                    (0, L.tZ)(Ne, {}),
                                    (0, L.tZ)(we, {}),
                                    (0, L.tZ)(u.View, {
                                      className: " _i _Ga _l _n",
                                      children: (0, L.tZ)(u.Image, {
                                        className: " _Fj _Gj _Hj _o",
                                        src: v.Z.isTieyou
                                          ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_ty@3x.png"
                                          : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_zx@3x.png",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, L.tZ)(De, {}),
                                (0, L.tZ)(xe, {
                                  orderId: a || l,
                                  ref: function (e) {
                                    n.$refundLayer = e;
                                  },
                                  onApplyReturnTicketCompleted: function () {
                                    return E();
                                  },
                                }),
                                (0, L.tZ)(Se.Z, {
                                  ref: function (e) {
                                    n.onDrawerAttach(e);
                                  },
                                }),
                                (0, L.tZ)(Be.Z, {
                                  ref: function (e) {
                                    n.onDialogAttach(e);
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
                })(d.default.Component))
              ) || fe;
          Page(
            (0, i.createPageConfig)(
              Ie,
              "pages/taroCRN/ship/pages/orderdetail/orderdetail",
              { root: { cn: [] } },
              {
                backgroundColor: "#099fde",
                navigationBarTitleText: "订单详情",
                navigationStyle: "custom",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [98946, 3322, 36332, 95854, 7160, 83004, 55076, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(92387);
          }
        ),
          e.O();
      },
    ]);
})();
