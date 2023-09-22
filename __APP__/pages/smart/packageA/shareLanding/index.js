!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../sub-common/849af97262623a3a03a4c9ba6f8707d6.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [42533],
      {
        28505: function (t, e, a) {
          var i = a(32180),
            n = a(57042),
            o = a(24460),
            r = a(21867),
            s = a(86066),
            c = a(52500),
            l = a(92954),
            d = a.n(l),
            m = a(81957),
            u = a(71515),
            f = a(79792),
            h = a(49120),
            p = a(38911),
            v = a(18783),
            g = a(8271),
            N = a.n(g),
            T = a(70273),
            y = (a(79910), a(38561)),
            w = a(48813),
            I = c.default.memo(function (t) {
              var e = t.details,
                a = void 0 === e ? [] : e,
                i = t.totalMinutes,
                n = void 0 === i ? null : i,
                o = t.totalPrice,
                r = void 0 === o ? null : o;
              if (!a) return (0, w.tZ)(u.View, {});
              var s,
                c,
                l,
                d = (0, y.MW)(a[0]),
                m = (0, y.MW)(a[a.length - 1]),
                f = null == d ? void 0 : d.fromStation,
                h = null == m ? void 0 : m.toStation,
                p = null == d ? void 0 : d.startDate,
                v = null == m ? void 0 : m.arriveDate,
                g = "";
              if (1 == a.length)
                g = (0, y.ur)(
                  null === (s = a[0]) || void 0 === s ? void 0 : s.tripType,
                  null === (c = a[0]) ||
                    void 0 === c ||
                    null === (l = c.train) ||
                    void 0 === l
                    ? void 0
                    : l.trainNo
                );
              else if (2 == a.length) {
                var N, T, I, Z, V, b;
                g =
                  (0, y.ur)(
                    null === (N = a[0]) || void 0 === N ? void 0 : N.tripType,
                    null === (T = a[0]) ||
                      void 0 === T ||
                      null === (I = T.train) ||
                      void 0 === I
                      ? void 0
                      : I.trainNo
                  ) +
                  "转" +
                  (0, y.ur)(
                    null === (Z = a[1]) || void 0 === Z ? void 0 : Z.tripType,
                    null === (V = a[1]) ||
                      void 0 === V ||
                      null === (b = V.train) ||
                      void 0 === b
                      ? void 0
                      : b.trainNo
                  );
              } else g = (0, y.DC)(a.length - 1);
              return (0, w.BX)(u.View, {
                className: "smart-trip-summary-component",
                children: [
                  (0, w.tZ)(u.View, { className: "tips", children: g }),
                  (0, w.BX)(u.View, {
                    className: "station-cont",
                    children: [
                      p &&
                        (0, w.BX)(u.Text, {
                          className: "process-date",
                          children: [(0, y.e6)(p), " 出发"],
                        }),
                      (0, w.tZ)(u.Text, {
                        className: "station-name",
                        children: f,
                      }),
                    ],
                  }),
                  (0, w.BX)(u.View, {
                    className: "transfer-mode-and-time",
                    children: [
                      (0, w.BX)(u.View, {
                        className: "transfer-mode",
                        children: [
                          (0, w.tZ)(u.View, { className: "point low-gray" }),
                          (0, w.tZ)(u.View, { className: "point gray" }),
                          a.map(function (t, e) {
                            return (0,
                            w.BX)(u.Block, { children: ["T" == t.tripType && (0, w.tZ)(u.Text, { className: "ifont-train2 iconfont icon" }), "F" == t.tripType && (0, w.tZ)(u.Text, { className: "ifont-flight2 iconfont icon" }), "S" == t.tripType && (0, w.tZ)(u.Text, { className: "ifont-ship iconfont icon" }), ("B" == t.tripType || "SC" == t.tripType) && (0, w.tZ)(u.Text, { className: "ifont-bus iconfont icon" }), e != a.length - 1 && (0, w.tZ)(u.Text, { className: "ifont-transfer-different iconfont icon" })] }, e);
                          }),
                          (0, w.tZ)(u.View, { className: "point gray" }),
                          (0, w.tZ)(u.View, { className: "point low-gray" }),
                        ],
                      }),
                      (0, w.BX)(u.View, {
                        className: "time",
                        children: ["全程", (0, y.zE)(n), " · ￥", r || ""],
                      }),
                    ],
                  }),
                  (0, w.BX)(u.View, {
                    className: "station-cont to-station",
                    children: [
                      v &&
                        (0, w.BX)(u.Text, {
                          className: "process-date",
                          children: [(0, y.e6)(v), " 到达"],
                        }),
                      (0, w.tZ)(u.Text, {
                        className: "station-name",
                        children: h,
                      }),
                    ],
                  }),
                ],
              });
            }),
            Z = c.default.memo(function (t) {
              var e = t.detail,
                a = t.index,
                i = t.isTieyou,
                n = void 0 !== i && i;
              if (!e) return null;
              var o = (function (t) {
                  var e = t.tripType,
                    a = (0, y.MW)(t),
                    i = {
                      tripType: e,
                      startMonthDay: (0, y.e6)(a.startDate),
                      typeName: (0, y.ur)(e, a.trainNo),
                      startTime: a.startTime,
                      arriveTime: a.arriveTime,
                      fromStation: a.fromStation,
                      toStation: a.toStation,
                      useHourMinutes: (0, y.zE)(a.useMinutes),
                      trafficDesc: (0, y.Kn)(t),
                      dayDiff: a.dayDiff,
                      minPrice: a.minPrice,
                    };
                  switch (e) {
                    case "T":
                      i.seatName = a.seatName;
                      break;
                    case "F":
                      (i.fromStation =
                        a.departAirportShortName + a.departTerminal),
                        (i.toStation =
                          a.arriveAirportShortName + a.arriveTerminal),
                        (i.seatName = a.cabinName);
                  }
                  return i;
                })(e),
                r = o.startMonthDay,
                s = o.typeName,
                c = o.startTime,
                l = o.arriveTime,
                d = o.dayDiff,
                m = o.fromStation,
                f = o.toStation,
                h = o.trafficDesc,
                p = o.minPrice,
                v = o.seatName;
              return (0,
              w.BX)(u.View, { className: "smart-trip-detail-item ".concat(n ? "ty" : "zx"), children: [(0, w.BX)(u.View, { className: "transfer-type-and-time", children: [(0, w.BX)(u.View, { className: "sequence-type", children: [(0, w.tZ)(u.View, { className: "sequence", children: a + 1 }), (0, w.tZ)(u.View, { className: "type", children: s })] }), (0, w.tZ)(u.View, { className: "time", children: c }), (0, w.BX)(u.View, { className: "arrive-time", children: [(0, w.tZ)(u.View, { className: "time", children: l }), 0 !== d && (0, w.BX)(u.View, { className: "day-diff", children: ["+", d] })] })] }), (0, w.tZ)(u.View, { className: "gap", children: (0, w.tZ)(u.View, { className: "cont" }) }), (0, w.BX)(u.View, { className: "transfer-info", children: [(0, w.BX)(u.View, { className: "date-no-seat-price", children: [(0, w.BX)(u.View, { className: "date-and-no", children: [(0, w.tZ)(u.Text, { className: "tit", children: r }), (0, w.tZ)(u.Text, { className: "split-line" }), (0, w.tZ)(u.Text, { className: "tit", children: h })] }), (0, w.BX)(u.View, { className: "seat-info", children: [(0, w.tZ)(u.Text, { className: "seat", children: v || "" }), p && (0, w.BX)(u.Text, { className: "price", children: ["￥", p] })] })] }), (0, w.tZ)(u.View, { className: "station-name", children: m }), (0, w.tZ)(u.View, { className: "station-name", children: f })] })] });
            });
          var V,
            b = function (t) {
              var e = t.transferInfo,
                a = void 0 === e ? {} : e,
                i = t.index,
                n = t.details,
                o = t.isCombine,
                r = a.distance,
                s = a.optimalMinutes,
                c = (0, y.gd)(n, i),
                l = o ? "同车换座" : c ? "同站换乘" : "市内换乘",
                d = c
                  ? (function (t, e) {
                      var a = t[e],
                        i = t[e + 1];
                      if (a && i) {
                        var n = (0, y.MW)(a),
                          o = (0, y.MW)(i),
                          r = (n.arriveDate + " " + n.arriveTime).replace(
                            /-/g,
                            "/"
                          ),
                          s = (o.startDate + " " + o.startTime).replace(
                            /-/g,
                            "/"
                          ),
                          c =
                            (new Date(s).getTime() - new Date(r).getTime()) /
                            6e4;
                        return c <= 0 ? "" : (0, y.zE)(c);
                      }
                      return "";
                    })(n, i)
                  : (0, y.zE)(s),
                m = "";
              if (o) m = "无需下车, 只要换个座位";
              else {
                var h = "".concat(r ? "间隔".concat(r, "km, ") : ""),
                  p = d ? "".concat(c ? "停留" : "耗时约").concat(d) : "";
                m = "".concat(h).concat(p);
              }
              var v =
                  "https://images3.c-ctrip.com/ztrip/train.xin/2021_02/order/changeseat_".concat(
                    f.default.isTieyou ? "ty" : "zx",
                    ".png"
                  ),
                g =
                  "https://images3.c-ctrip.com/ztrip/train.xin/2021_02/order/different_".concat(
                    f.default.isTieyou ? "ty" : "zx",
                    ".png"
                  );
              return (0, w.tZ)(u.View, {
                className: "smart-trip-transfer-panel",
                children: (0, w.BX)(u.View, {
                  className: "transit",
                  children: [
                    !o &&
                      c &&
                      (0, w.tZ)(u.Text, {
                        className: "ifont-transfer-same iconfont ".concat(
                          f.default.isTieyou ? "ty" : "zx"
                        ),
                      }),
                    o &&
                      (0, w.tZ)(u.Image, {
                        className: "combine-seat-icon",
                        src: v,
                      }),
                    !o &&
                      !c &&
                      (0, w.tZ)(u.Image, {
                        className: "transfer-in-city-icon",
                        src: g,
                      }),
                    (0, w.tZ)(u.Text, {
                      className: "transit-type ".concat(
                        c ? "color-blue" : "color-red"
                      ),
                      children: l,
                    }),
                    (0, w.tZ)(u.View, {
                      className: "transit-info",
                      children: m,
                    }),
                  ],
                }),
              });
            },
            x = c.default.memo(function (t) {
              var e = t.details,
                a = void 0 === e ? [] : e,
                i = t.transferInfo,
                n = void 0 === i ? [] : i,
                o = t.isCombine;
              return (0, w.tZ)(u.View, {
                className: "smart-trip-detail-card-component",
                children:
                  a &&
                  a.map(function (t, e) {
                    return (0,
                    w.BX)(u.View, { className: "trip-and-transfer", children: [(0, w.tZ)(Z, { detail: t, index: e }), e !== a.length - 1 && (0, w.tZ)(b, { transferInfo: n[e], index: e, details: a, isCombine: o })] }, String(e));
                  }),
              });
            }),
            B = c.default.memo(function (t) {
              var e = t.isTieyou,
                a = void 0 !== e && e,
                i = t.orderId,
                n = void 0 === i ? "" : i,
                o = t.pageId,
                r = void 0 === o ? "" : o,
                s = t.clickBuy,
                l = void 0 === s ? function () {} : s,
                d = t.ubtTrace,
                m = void 0 === d ? function () {} : d;
              return (
                (0, c.useEffect)(function () {
                  m("E_ZX_smart_shareTrip_intelli", {
                    ExpoKey: "buy_same",
                    ExpoValue: { orderid: n || 0 },
                    PageCode: r,
                  });
                }, []),
                (0, w.BX)(u.View, {
                  className: "smart-share-landing-btn-group ".concat(
                    a ? "ty" : "zx"
                  ),
                  children: [
                    (0, w.tZ)(u.Button, {
                      className: "share-process",
                      openType: "share",
                      children: "分享行程",
                    }),
                    (0, w.tZ)(u.Button, {
                      className: "buy-same-process",
                      id: "ANCN",
                      onClick: l,
                      children: "我也要买这班车",
                    }),
                  ],
                })
              );
            }),
            S =
              "https://images3.c-ctrip.com/ztrip/train.xin/2012_12/top_pic".concat(
                f.default.isTieyou ? "_ty" : "",
                ".png"
              ),
            D =
              (0, m.h)()(
                (V = (function (t) {
                  (0, r.Z)(a, t);
                  var e = (0, s.Z)(a);
                  function a(t) {
                    var i;
                    return (
                      (0, n.Z)(this, a),
                      ((i = e.call(this, t)).state = {
                        totalMinutes: null,
                        totalPrice: null,
                        details: [],
                        transferInfo: [],
                        isCombine: !1,
                        isShow: !1,
                      }),
                      (i.pageId = "10650075272"),
                      i
                    );
                  }
                  return (
                    (0, o.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t = this,
                            e = (0, l.getCurrentInstance)().router.params;
                          (this.schemeInfoV1 = decodeURIComponent(
                            null == e ? void 0 : e.schemeInfoV1
                          )),
                            (this.fromLocation =
                              null == e ? void 0 : e.fromLocation),
                            (this.toLocation =
                              null == e ? void 0 : e.toLocation),
                            (this.departDate =
                              null == e ? void 0 : e.departDate),
                            (this.orderId = null == e ? void 0 : e.orderId),
                            (this.fromAreaId =
                              null == e ? void 0 : e.fromAreaId),
                            (this.toAreaId = null == e ? void 0 : e.toAreaId),
                            e.schemeInfoV1
                              ? this.getTripDetailBySchemeInfo()
                              : (0, h.showModal)({
                                  title: "温馨提示",
                                  content: "行程方案已过期了～",
                                  success: function () {
                                    t.gotoSmartHomePage();
                                  },
                                });
                        },
                      },
                      {
                        key: "getTripDetailBySchemeInfo",
                        value: function () {
                          var t = this;
                          return (
                            (0, h.showLoading)(),
                            (0, p.sC)({ schemeInfoV1: this.schemeInfoV1 })
                              .then(function (e) {
                                var a,
                                  i,
                                  n,
                                  o,
                                  r,
                                  s,
                                  c,
                                  l,
                                  d,
                                  m,
                                  u,
                                  f,
                                  p,
                                  v,
                                  g,
                                  N,
                                  T;
                                if (
                                  1 === (null == e ? void 0 : e.resultCode) &&
                                  ((null !== (a = e.trip) &&
                                    void 0 !== a &&
                                    a.subTrain) ||
                                    (null !== (i = e.trip) &&
                                      void 0 !== i &&
                                      i.transfer))
                                ) {
                                  var y = null,
                                    w = null,
                                    I = [],
                                    Z = [],
                                    V = !1;
                                  switch (
                                    null === (n = e.trip) || void 0 === n
                                      ? void 0
                                      : n.tripType
                                  ) {
                                    case "SubTrain":
                                      var b = e.trip.subTrain.subTrains.map(
                                        function (t) {
                                          return { tripType: "T", train: t };
                                        }
                                      );
                                      (y =
                                        null === (o = e.trip) ||
                                        void 0 === o ||
                                        null === (r = o.subTrain) ||
                                        void 0 === r
                                          ? void 0
                                          : r.totalMinutes),
                                        (w =
                                          null === (s = e.trip) ||
                                          void 0 === s ||
                                          null === (c = s.subTrain) ||
                                          void 0 === c
                                            ? void 0
                                            : c.totalPrice),
                                        (I = b),
                                        (Z =
                                          null === (l = e.trip) ||
                                          void 0 === l ||
                                          null === (d = l.subTrain) ||
                                          void 0 === d
                                            ? void 0
                                            : d.transferInfo),
                                        (V = !0);
                                      break;
                                    case "Transfer":
                                      (y =
                                        null === (m = e.trip) ||
                                        void 0 === m ||
                                        null === (u = m.transfer) ||
                                        void 0 === u
                                          ? void 0
                                          : u.totalMinutes),
                                        (w =
                                          null === (f = e.trip) ||
                                          void 0 === f ||
                                          null === (p = f.transfer) ||
                                          void 0 === p
                                            ? void 0
                                            : p.totalPrice),
                                        (I =
                                          null === (v = e.trip) ||
                                          void 0 === v ||
                                          null === (g = v.transfer) ||
                                          void 0 === g
                                            ? void 0
                                            : g.details),
                                        (Z =
                                          null === (N = e.trip) ||
                                          void 0 === N ||
                                          null === (T = N.transfer) ||
                                          void 0 === T
                                            ? void 0
                                            : T.transferInfo);
                                  }
                                  t.setState({
                                    totalMinutes: y,
                                    totalPrice: w,
                                    details: I,
                                    transferInfo: Z,
                                    isCombine: V,
                                    isShow: !0,
                                  });
                                } else
                                  (0, h.showModal)({
                                    title: "温馨提示",
                                    content: "行程方案已过期了～",
                                    success: function () {
                                      t.gotoSmartHomePage();
                                    },
                                  });
                              })
                              .catch(function (e) {
                                console.log(e),
                                  (0, h.showModal)({
                                    title: "温馨提示",
                                    content: "网络异常，请刷新重试~",
                                    success: function () {
                                      t.gotoSmartHomePage();
                                    },
                                  });
                              })
                              .finally(function () {
                                (0, h.hideLoading)();
                              })
                          );
                        },
                      },
                      {
                        key: "gotoSmartHomePage",
                        value: function () {
                          var t =
                            "/pages/smart/index/index?fromSource=shareLanding";
                          this.fromLocation &&
                            (t = ""
                              .concat(t, "&fromStation=")
                              .concat(this.fromLocation)),
                            this.toLocation &&
                              (t = ""
                                .concat(t, "&toStation=")
                                .concat(this.toLocation)),
                            this.departDate &&
                              (t = ""
                                .concat(t, "&departDate=")
                                .concat(this.departDate)),
                            this.fromAreaId &&
                              (t = ""
                                .concat(t, "&fromAreaId=")
                                .concat(this.fromAreaId)),
                            this.toAreaId &&
                              (t = ""
                                .concat(t, "&toAreaId=")
                                .concat(this.toAreaId)),
                            d().reLaunch({ url: t });
                        },
                      },
                      {
                        key: "gotoTripDetail",
                        value: function () {
                          this.newUbtTrace("C_ZX_smart_shareTrip_intelli", {
                            ClickKey: "buy_same",
                            ClickValue: {
                              orderid: this.orderId ? this.orderId : 0,
                            },
                            PageCode: this.pageId,
                          });
                          var t = (0, T.j)();
                          d().navigateTo({
                            url: ""
                              .concat(t, "?schemeInfoV1=")
                              .concat(
                                encodeURIComponent(this.schemeInfoV1),
                                "&orderSource=buySame"
                              ),
                          });
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          var t = N()(this.departDate).format("M月D日"),
                            e = "我发现一条"
                              .concat(t, "『")
                              .concat(this.fromLocation, "-")
                              .concat(
                                this.toLocation,
                                "』的超棒路线，点击查看详情"
                              ),
                            a =
                              "https://images3.c-ctrip.com/ztrip/train.xin/2021_01/smart/share_mini_large_".concat(
                                f.default.isTieyou ? "ty" : "zx",
                                ".jpg"
                              ),
                            i =
                              "/pages/smart/packageA/shareLanding/index?schemeInfoV1=".concat(
                                encodeURIComponent(this.schemeInfoV1)
                              );
                          return (
                            this.fromLocation &&
                              (i = ""
                                .concat(i, "&fromLocation=")
                                .concat(this.fromLocation)),
                            this.toLocation &&
                              (i = ""
                                .concat(i, "&toLocation=")
                                .concat(this.toLocation)),
                            this.departDate &&
                              (i = ""
                                .concat(i, "&departDate=")
                                .concat(this.departDate)),
                            this.fromAreaId &&
                              (i = ""
                                .concat(i, "&fromAreaId=")
                                .concat(this.fromAreaId)),
                            this.toAreaId &&
                              (i = ""
                                .concat(i, "&toAreaId=")
                                .concat(this.toAreaId)),
                            this.orderId &&
                              (i = ""
                                .concat(i, "&orderId=")
                                .concat(this.orderId)),
                            { bu: "train", title: e, imageUrl: a, path: i }
                          );
                        },
                      },
                      {
                        key: "newUbtTrace",
                        value: function (t, e) {
                          try {
                            this.ubtTrace(
                              t,
                              e || {
                                openId: v.ZP.openid || "",
                                userName: v.ZP.userName || "",
                                cid: v.ZP.cid || "",
                              }
                            );
                          } catch (t) {
                            console.log(t);
                          }
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this.state,
                            e = t.totalMinutes,
                            a = t.totalPrice,
                            i = t.details,
                            n = t.transferInfo,
                            o = t.isCombine,
                            r = t.isShow;
                          return (0, w.tZ)(u.View, {
                            className: "smart-trip-share-landing-index ".concat(
                              f.default.isTieyou ? "ty" : "zx"
                            ),
                            children: (0, w.BX)(u.View, {
                              className: "bd",
                              children: [
                                r &&
                                  (0, w.BX)(u.View, {
                                    className: "container",
                                    children: [
                                      (0, w.tZ)(u.View, {
                                        className: "theme-img",
                                        children: (0, w.tZ)(u.Image, {
                                          className: "tit-img",
                                          src: S,
                                        }),
                                      }),
                                      (0, w.tZ)(u.View, {
                                        className: "hidden-area",
                                      }),
                                      (0, w.tZ)(I, {
                                        details: i,
                                        totalMinutes: e,
                                        totalPrice: a,
                                      }),
                                      (0, w.tZ)(x, {
                                        details: i,
                                        transferInfo: n,
                                        isCombine: o,
                                      }),
                                      (0, w.tZ)(u.View, {
                                        className: "business-summary",
                                        children: (0, w.tZ)(u.Image, {
                                          className: "summary-img",
                                          src: "https://images3.c-ctrip.com/ztrip/train.xin/2012_12/slogn.png",
                                        }),
                                      }),
                                    ],
                                  }),
                                r &&
                                  (0, w.tZ)(B, {
                                    isTieyou: f.default.isTieyou,
                                    orderId: this.orderId,
                                    pageId: this.pageId,
                                    clickBuy: this.gotoTripDetail.bind(this),
                                    ubtTrace: this.newUbtTrace.bind(this),
                                  }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(c.default.Component))
              ) || V;
          (D.enableShareAppMessage = !0),
            Page(
              (0, i.createPageConfig)(
                D,
                "pages/smart/packageA/shareLanding/index",
                { root: { cn: [] } },
                {
                  navigationBarBackgroundColor: "#0075F4",
                  backgroundColorTop: "#0075F4",
                  backgroundColorBottom: "#ffffff",
                } || {}
              )
            );
        },
      },
      function (t) {
        t.O(0, [5572, 71229, 31162, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(28505);
        }),
          t.O();
      },
    ]);
})();
