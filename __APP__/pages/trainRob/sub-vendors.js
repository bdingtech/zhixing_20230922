!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [31593],
    {
      26871: function (e, t, n) {
        n.d(t, {
          ZP: function () {
            return y;
          },
          Cv: function () {
            return d;
          },
          YE: function () {
            return h;
          },
          gh: function () {
            return p;
          },
          GP: function () {
            return s;
          },
        });
        var r,
          i = n(298),
          o = n(22276),
          a = n(90129),
          c = n(52500),
          u = n(71515),
          l = n(92001);
        function s(e) {
          try {
            var t = e || {},
              n = t.couponList,
              a = void 0 === n ? [] : n,
              c = (t.chooseProductList, t.ticketPrice),
              u = void 0 === c ? 0 : c,
              l = [];
            if (a && a.length > 0) {
              (a || []).forEach(function (e) {
                var t = (0, i.Z)({}, e);
                (t.realUseAble = !1),
                  (t.selected = !1),
                  t.useAble &&
                    r[t.useScope] &&
                    t.useScope === r.TICKET &&
                    u >= t.thresholdPrice &&
                    ((t.realUseAble = !0), (t.selected = !!e.selected)),
                  l.push(t);
              });
              var s = (l || []).filter(function (e) {
                  return !0 === e.realUseAble;
                }),
                d = (l || []).filter(function (e) {
                  return !1 === e.realUseAble;
                });
              return (
                (s = f(s)), (d = f(d)), [].concat((0, o.Z)(s), (0, o.Z)(d))
              );
            }
          } catch (e) {
            return [];
          }
        }
        function f(e) {
          return (
            e &&
              e.length > 0 &&
              e.sort(function (e, t) {
                if (
                  (null == e ? void 0 : e.couponPrice) !==
                  (null == t ? void 0 : t.couponPrice)
                )
                  return (
                    (null == t ? void 0 : t.couponPrice) -
                    (null == e ? void 0 : e.couponPrice)
                  );
                var n = new Date(null == e ? void 0 : e.expireDate),
                  r = new Date(null == t ? void 0 : t.expireDate);
                return (null == n ? void 0 : n.getTime()) !==
                  (null == r ? void 0 : r.getTime())
                  ? n.getTime() - r.getTime()
                  : Math.random() - 0.5;
              }),
            e || []
          );
        }
        function d() {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
          return (
            t &&
              t.length > 0 &&
              (t.forEach(function (e) {
                e.selected = !1;
              }),
              null !== (e = t[0]) &&
                void 0 !== e &&
                e.realUseAble &&
                (t[0].selected = !0)),
            t
          );
        }
        function g(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          try {
            if (null == e || !e.realUseAble) return t;
            var n = (0, i.Z)({}, e),
              o = [];
            if (e && t && t.length > 0) {
              var a = (t || []).filter(function (e) {
                  return !0 === e.selected;
                }),
                c = null,
                u = null,
                l = (a || []).filter(function (e) {
                  return e.useScope === r.TICKET;
                });
              return (
                l && l.length > 0 && (c = l[0]),
                n.selected
                  ? (n.selected = !1)
                  : n.useScope === r.TICKET &&
                    ((n.selected = !0), c && (c.selected = !1)),
                t.forEach(function (e) {
                  var t,
                    r = (0, i.Z)({}, e);
                  n.couponCode === (null == e ? void 0 : e.couponCode)
                    ? (r.selected = n.selected)
                    : c &&
                      (null == e ? void 0 : e.couponCode) ===
                        (null === (t = c) || void 0 === t
                          ? void 0
                          : t.couponCode)
                    ? (r.selected = c.selected)
                    : u &&
                      (null == e ? void 0 : e.couponCode) ===
                        (null == u ? void 0 : u.couponCode) &&
                      (r.selected = u.selected),
                    o.push(r);
                }),
                o
              );
            }
            return t;
          } catch (e) {
            return t;
          }
        }
        !(function (e) {
          e[(e.TICKET = 0)] = "TICKET";
        })(r || (r = {}));
        var h = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = 0,
            n = 0,
            r = [],
            i = [];
          Array.isArray(e) &&
            (e.forEach(function (e) {
              null != e &&
                e.selected &&
                (t++,
                (n = +((null == e ? void 0 : e.couponPrice) || 0) + n),
                i.push(e));
            }),
            (r = e.filter(function (e) {
              return null == e ? void 0 : e.realUseAble;
            })));
          var o = r.length || 0,
            a = o > 0 ? "".concat(o, "张可用") : "暂无可用",
            c = t > 0 ? "已减¥".concat(n) : "未选择";
          return {
            couponSelectedNum: t,
            couponCanUseNum: r.length,
            couponChooseTotalPrice: n,
            couponList: e,
            chooseCouponList: i,
            couponCanUseDes: a,
            couponCanUsePriceDes: c,
          };
        };
        function p(e) {
          return h(d(s(e)));
        }
        var m = n(48813),
          v = c.default.memo(function (e) {
            var t = e.isShow,
              n = e.couponList,
              r = e.onConfirmCouponList,
              s = void 0 === r ? function () {} : r,
              f = e.onClose,
              d = void 0 === f ? function () {} : f,
              p = e.pageId,
              v = void 0 === p ? "" : p,
              y = (0, l.cP)(d),
              T = y.modalRef,
              b = y.modalClose,
              C = (0, c.useState)(n),
              P = (0, a.Z)(C, 2),
              R = P[0],
              x = P[1];
            if (
              ((0, c.useEffect)(
                function () {
                  Array.isArray(n) && t && x(n);
                },
                [n, t]
              ),
              !t)
            )
              return null;
            l.RK.isCRN() &&
              l.BR.logTrace("TZAGrabSuccessRate_CouponPopup_exposure", {
                PageId: v || "10650006241",
              });
            var I = function (e, t) {
                return e && t
                  ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/btn_yx@3x.webp"
                  : "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/btn_wx@3x.webp";
              },
              w = function (e) {
                l.RK.isCRN() &&
                  l.BR.logTrace("TZAGrabSuccessRate_Coupon_click", {
                    PageId: v || "10650006241",
                  });
                var t = g(e, R) || [];
                x((0, o.Z)(t));
              };
            console.log("innerCouponList", R);
            var A = function (e, t, n) {
                l.RK.isCRN() &&
                  l.BR.logTrace("TZAGrabSuccessRate_Coupon_exposure", {
                    PageId: v || "10650006241",
                    Type: n ? "1" : "0",
                  });
                var r = e.couponName,
                  o = void 0 === r ? "" : r,
                  a = e.couponPrice,
                  c = void 0 === a ? "" : a,
                  s = e.desc,
                  f = void 0 === s ? "" : s,
                  d = e.expireDateDesc,
                  g = void 0 === d ? "" : d,
                  h = e.couponTag,
                  p = void 0 === h ? "" : h,
                  y = e.realUseAble,
                  T = void 0 !== y && y,
                  b = e.selected,
                  C = void 0 !== b && b,
                  P = function (e) {
                    return n
                      ? e
                      : (0, i.Z)((0, i.Z)({}, e), {}, { color: "#999999" });
                  },
                  R =
                    0 !== t
                      ? (0, i.Z)(
                          (0, i.Z)({}, S.item),
                          {},
                          { marginTop: l.RK.handlePx(10) }
                        )
                      : S.item;
                return (0, m.BX)(
                  u.View,
                  {
                    style: R,
                    onClick: function () {
                      w(e);
                    },
                    children: [
                      (0, m.BX)(u.View, {
                        style: S.top,
                        children: [
                          (0, m.BX)(u.View, {
                            style: S.left,
                            children: [
                              (0, m.tZ)(u.View, {
                                style: P(S.priceChar),
                                children: "¥",
                              }),
                              (0, m.tZ)(u.View, {
                                style: P(S.price),
                                children: c,
                              }),
                            ],
                          }),
                          (0, m.BX)(u.View, {
                            style: S.content,
                            children: [
                              (0, m.BX)(u.View, {
                                style: S.titBox,
                                children: [
                                  (0, m.tZ)(u.View, {
                                    style: P(S.name),
                                    children: o,
                                  }),
                                  n &&
                                    p &&
                                    (0, m.tZ)(u.View, {
                                      style: S.tag,
                                      children: p,
                                    }),
                                ],
                              }),
                              (0, m.tZ)(u.View, {
                                style: S.expireDateDesc,
                                children: g,
                              }),
                            ],
                          }),
                          (0, m.tZ)(u.Image, {
                            style: S.radioIcon,
                            src: I(T, C),
                          }),
                        ],
                      }),
                      (0, m.tZ)(u.View, { style: S.line }),
                      (0, m.tZ)(u.View, { style: S.bottom, children: f }),
                    ],
                  },
                  null == e ? void 0 : e.couponId
                );
              },
              D = R.filter(function (e) {
                return e.realUseAble;
              }),
              Z = R.filter(function (e) {
                return !e.realUseAble;
              }),
              N = l.RK.isCRN() ? 0.8 * l.RK.getWindowHeight() : "80vh",
              _ = l.RK.isCRN() ? { flex: 1, maxHeight: N - 108 } : S.box,
              O = S.crnSelectedPriceChar,
              k = S.crnSelectedPrice;
            return (
              l.RK.isAPP_IOS() ||
                ((O = (0, i.Z)((0, i.Z)({}, O), {}, { marginTop: 7 })),
                (k = (0, i.Z)((0, i.Z)({}, k), {}, { marginTop: 2 }))),
              (0, m.tZ)(l.$K, {
                ref: T,
                enableTapBackground: !0,
                maxHeight: N,
                isShowIphoneXAdapter: !0,
                onCancel: function () {
                  b();
                },
                innerContainerStyle: {
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  zIndex: 1001,
                  backgroundColor: "#f8f8f8",
                },
                children: (0, m.BX)(u.View, {
                  style: S.container,
                  children: [
                    (0, m.BX)(u.View, {
                      style: S.header,
                      children: [
                        (0, m.tZ)(u.View, {
                          style: S.title,
                          children: "优惠券",
                        }),
                        (0, m.tZ)(u.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                          style: S.iconClose,
                          onClick: b,
                          webp: !0,
                        }),
                      ],
                    }),
                    (0, m.BX)(u.ScrollView, {
                      scrollY: !0,
                      style: _,
                      children: [
                        (0, m.tZ)(u.View, {
                          style: S.realUseAbleList,
                          children: D.map(function (e, t) {
                            return A(e, t, !0);
                          }),
                        }),
                        Z.length > 0 &&
                          (0, m.tZ)(u.View, {
                            style: S.unUseAbleTit,
                            children: "本单不可用优惠券",
                          }),
                        (0, m.tZ)(u.View, {
                          style: S.unUseAbleList,
                          children: Z.map(function (e, t) {
                            return A(e, t, !1);
                          }),
                        }),
                        (0, m.tZ)(u.View, { style: S.blank }),
                        (0, m.tZ)(l.kd, {}),
                      ],
                    }),
                    (0, m.BX)(u.View, {
                      style: S.bottomBox,
                      children: [
                        (0, m.BX)(u.View, {
                          style: S.buttonBox,
                          children: [
                            (0, m.BX)(u.View, {
                              style: l.RK.isCRN() ? S.crnDetail : S.detail,
                              children: [
                                (0, m.BX)(u.Text, {
                                  style: l.RK.isCRN()
                                    ? S.crnSelectedTxt
                                    : S.selectedTxt,
                                  children: [
                                    "已选",
                                    h(R).couponSelectedNum,
                                    "张，可减 ",
                                  ],
                                }),
                                (0, m.tZ)(u.Text, {
                                  style: l.RK.isCRN() ? O : S.selectedPriceChar,
                                  children: "¥",
                                }),
                                (0, m.tZ)(u.Text, {
                                  style: l.RK.isCRN() ? k : S.selectedPrice,
                                  children: h(R).couponChooseTotalPrice,
                                }),
                              ],
                            }),
                            (0, m.tZ)(u.View, {
                              style: S.button,
                              onClick: function () {
                                l.RK.isCRN() &&
                                  l.BR.logTrace(
                                    "TZAGrabSuccessRate_CouponPopup_Confirm_click",
                                    { PageId: v || "10650006241" }
                                  ),
                                  s(R);
                              },
                              children: "确定",
                            }),
                          ],
                        }),
                        (0, m.tZ)(l.kd, {}),
                      ],
                    }),
                  ],
                }),
              })
            );
          }),
          S = l.RK.CreateStyleSheet({
            container: {
              height: "100%",
              display: "flex",
              flexDirection: "column",
            },
            header: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              height: 54,
            },
            title: {
              textAlign: "center",
              color: "#333333",
              fontSize: 18,
              fontFamily: "PingFangSC-Medium",
              fontWeight: "500",
            },
            iconClose: {
              position: "absolute",
              top: 16,
              right: 16,
              width: 24,
              height: 24,
            },
            box: { flex: 1, maxHeight: "calc(80vh - 108rpx)" },
            realUseAbleList: { marginLeft: 15, marginRight: 15 },
            unUseAbleTit: {
              marginLeft: 20,
              marginTop: 16,
              marginBottom: 8,
              color: "#999999",
              fontSize: 12,
              fontFamily: "PingFangSC-Regular",
              lineHeight: 17,
            },
            unUseAbleList: { marginLeft: 15, marginRight: 15 },
            item: {
              background: "#ffffff",
              backgroundColor: "#fff",
              borderRadius: 10,
              paddingTop: 13,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 9,
            },
            top: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            },
            left: { display: "flex", flexDirection: "row", marginRight: 15 },
            priceChar: {
              marginTop: 18,
              lineHeight: 17,
              color: "#ff5959",
              fontSize: 12,
              fontFamily: "PingFangSC-Semibold",
              fontWeight: "600",
            },
            price: {
              lineHeight: 42,
              color: "#ff5959",
              fontSize: 30,
              fontFamily: "PingFangSC-Semibold",
              fontWeight: "600",
              marginLeft: 1,
            },
            content: {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            },
            titBox: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            },
            name: {
              lineHeight: 22,
              color: "#333333",
              fontSize: 16,
              fontFamily: "PingFangSC-Medium",
              fontWeight: "500",
            },
            tag: {
              paddingLeft: 4,
              paddingRight: 4,
              paddingTop: 1,
              paddingBottom: 1,
              marginLeft: 2,
              borderRadius: 5,
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: "#ffcdcd",
              color: "#ff5959",
              fontSize: 11,
              fontFamily: "PingFangSC-Regular",
            },
            expireDateDesc: {
              marginTop: 3,
              color: "#999999",
              fontSize: 12,
              fontFamily: "PingFangSC-Regular",
              fontWeight: "normal",
              lineHeight: 16,
            },
            line: {
              height: 0.5,
              marginTop: 14,
              marginBottom: 8,
              backgroundColor: "#f2f2f2",
            },
            radioIcon: { width: 20, height: 20 },
            bottom: {
              color: "#999999",
              fontSize: 11,
              fontFamily: "PingFangSC-Regular",
              lineHeight: 15,
            },
            blank: { height: 70 },
            bottomBox: {
              background: "#ffffff",
              backgroundColor: "#fff",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
            },
            buttonBox: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 8,
              paddingBottom: 8,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            detail: { flex: 1, textAlign: "right", flexDirection: "row" },
            crnDetail: {
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            },
            selectedTxt: {
              color: "#333333",
              fontSize: 13,
              fontFamily: "PingFangSC-Regular",
            },
            crnSelectedTxt: {
              color: "#333333",
              fontSize: 13,
              fontFamily: "PingFangSC-Regular",
              marginTop: 5,
            },
            selectedPriceChar: {
              height: 19,
              color: "#ff5959",
              fontSize: 16,
              fontFamily: l.RK.getZXRegularFontFamily(),
            },
            selectedPrice: {
              height: 20,
              color: "#ff5959",
              fontSize: 24,
              fontFamily: l.RK.getZXRegularFontFamily(),
            },
            crnSelectedPriceChar: {
              color: "#ff5959",
              fontSize: 16,
              marginTop: 5,
              fontFamily: l.RK.getZXRegularFontFamily(),
            },
            crnSelectedPrice: {
              color: "#ff5959",
              fontSize: 24,
              fontFamily: l.RK.getZXRegularFontFamily(),
            },
            button: {
              marginLeft: 15,
              marginRight: 8,
              width: 165,
              height: 44,
              background: "#198cff",
              backgroundColor: "#198cff",
              borderRadius: 12,
              textAlign: "center",
              lineHeight: 44,
              color: "#ffffff",
              fontSize: 17,
              fontFamily: "PingFangSC-Medium",
              fontWeight: "500",
            },
          }),
          y = v;
      },
      16575: function (e, t, n) {
        n.d(t, {
          $3: function () {
            return m;
          },
          Ep: function () {
            return d;
          },
          J2: function () {
            return u;
          },
          Qx: function () {
            return h;
          },
          Ti: function () {
            return g;
          },
          Tq: function () {
            return f;
          },
          UQ: function () {
            return l;
          },
          VV: function () {
            return a;
          },
          Z8: function () {
            return s;
          },
          bP: function () {
            return p;
          },
          hQ: function () {
            return c;
          },
          rv: function () {
            return v;
          },
          xU: function () {
            return o;
          },
        });
        var r = n(79792),
          i = n(17377),
          o = (0, i.ZP)({
            serviceCode: "16312",
            path: "getGrabPreInitInfo",
            channel: r.default.train_channel,
            correctVersion: "986",
          }),
          a = (0, i.ZP)({
            serviceCode: "16367",
            path: "getGrabXPageProductInfo",
            channel: r.default.train_channel,
            correctVersion: "710010",
          }),
          c = (0, i.ZP)({
            serviceCode: "16312",
            channel: r.default.train_channel,
            path: "GetGrabDualChannelInfo",
            correctVersion: "32",
          }),
          u = (0, i.ZP)({
            serviceCode: "14666",
            channel: r.default.train_channel,
            path: "CalculateGrabSuccessRateForTz",
          }),
          l = (0, i.ZP)({
            serviceCode: "19480",
            path: "getGrabOrderPayType",
            channel: r.default.train_channel,
            correctVersion: "957",
          }),
          s = (0, i.ZP)({
            serviceCode: "18497",
            channel: r.default.train_channel,
            path: "getWechatMinVipProducts",
            correctVersion: "709991",
          }),
          f = (0, i.ZP)({
            serviceCode: "16367",
            channel: r.default.train_channel,
            path: "getGrabOrderPackageInfo",
            correctVersion: "710010",
          }),
          d = (0, i.ZP)({
            serviceCode: "19480",
            path: "CreateGrabOrder",
            channel: r.default.train_channel,
            correctVersion: "710010",
          }),
          g = (0, i.ZP)({
            serviceCode: "16992",
            path: "signCreditPay",
            channel: r.default.train_channel,
            correctVersion: "32",
          }),
          h = (0, i.ZP)({
            serviceCode: "13892",
            channel: r.default.train_channel,
            path: "grabTicketHeat",
          }),
          p = (0, i.ZP)({ serviceCode: "15791", path: "getSchoolSpeed" }),
          m = (0, i.ZP)({
            serviceCode: "16312",
            channel: r.default.train_channel,
            path: "getRecommendTrainInfo",
          }),
          v = (0, i.ZP)({
            serviceCode: "19480",
            channel: r.default.train_channel,
            path: "queryGrabCouponInfo",
          });
      },
      66101: function (e, t, n) {
        n.d(t, {
          WG: function () {
            return u;
          },
          ZK: function () {
            return l;
          },
        });
        var r = n(57042),
          i = n(24460),
          o = n(92954),
          a = n.n(o),
          c = (function () {
            function e(t) {
              (0, r.Z)(this, e), (this.key = t);
            }
            return (
              (0, i.Z)(
                e,
                [
                  {
                    key: "set",
                    value: function (e) {
                      if (null == e) return a().setStorageSync(this.key, "");
                      a().setStorageSync(this.key, e);
                    },
                  },
                  {
                    key: "get",
                    value: function () {
                      return a().getStorageSync(this.key);
                    },
                  },
                  {
                    key: "setAttr",
                    value: function (e, t) {
                      var n = this.get() || {};
                      (n[e] = t), this.set(n);
                    },
                  },
                  {
                    key: "getAttr",
                    value: function (e) {
                      return this.get()[e];
                    },
                  },
                  {
                    key: "removeAttr",
                    value: function (e) {
                      a().removeStorageSync(e);
                    },
                  },
                ],
                [
                  {
                    key: "getInstance",
                    value: function (t) {
                      return new e(t);
                    },
                  },
                ]
              ),
              e
            );
          })(),
          u =
            (c.getInstance("TRAIN_STATION_STORE_2"),
            c.getInstance("TRAIN_QUERY_STORE"),
            c.getInstance("TRAIN_BOOK_STORE")),
          l =
            (c.getInstance("TRAIN_PASS_STORE"),
            c.getInstance("TRAIN_USER_STORE"),
            c.getInstance("LAST_UPDATE_TIME_V5"),
            c.getInstance("TRAIN_ACTIVITY_STORE"));
        c.getInstance("TRAIN_ORDER_DETAIL_STORE"),
          c.getInstance("TRAIN_BOOK_HOU_BU_STORE"),
          c.getInstance("TRAIN_INDEX_PAGE_STORE"),
          c.getInstance("TRAIN_STUDENT_ACTIVITY_STORE"),
          c.getInstance("BUS_TOUR_STATION_STORE"),
          c.getInstance("BUS_AIRPORT_STATION_STORE");
      },
      83315: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return Z;
          },
        });
        var r = n(22276),
          i = n(92954),
          o = n.n(i),
          a = n(3205),
          c = n(18783),
          u = n(79910),
          l = n(79792),
          s = n(25391),
          f = n(49120),
          d = n(58801),
          g = n(8271),
          h = n.n(g),
          p = "只看有票",
          m = "站内换乘",
          v = "不坐飞机",
          S = "不坐汽车",
          y = "00:00-06:00",
          T = "06:00-12:00",
          b = "12:00-18:00",
          C = "18:00-24:00",
          P = "1小时内",
          R = "1-2小时",
          x = "2-4小时",
          I = "4小时及以上",
          w = {
            isValidPassport: function (e) {
              return /^[a-zA-Z0-9]{5,17}$/.test(e);
            },
            isValidHKMacao: function (e) {
              return /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/.test(e);
            },
            isValidTaiwan: function (e) {
              return /^[0-9]{8}$/.test(e) || /^[0-9]{10}$/.test(e);
            },
            getRandomNumber: function (e) {
              for (var t = Math.random(), n = 0, r = 0; r < e.length; r++) {
                var i =
                    0 === r
                      ? 0
                      : e
                          .slice(0, r)
                          .map(function (e) {
                            return e[1];
                          })
                          .reduce(function (e, t) {
                            return e + t;
                          }),
                  o = e
                    .slice(0, r + 1)
                    .map(function (e) {
                      return e[1];
                    })
                    .reduce(function (e, t) {
                      return e + t;
                    });
                if (t >= i && t < o) {
                  n = e[r][0];
                  break;
                }
              }
              return n;
            },
            handleTrains: function (e, t) {
              var n,
                r = this,
                i = +new Date(),
                o = function (e) {
                  return +new Date(t.replace(/\-/g, "/") + " " + e + ":00");
                },
                a = [o("00:00"), o("06:00"), o("12:00"), o("18:00")],
                c = [];
              return (
                e.forEach(function (e) {
                  if (
                    !(0 == e.SeatList.length || o(e.DepartTime) <= +new Date())
                  ) {
                    (n = e.SeatList[0]),
                      (e.SeatCount = r.handleSeats(e.SeatList)),
                      (e.Price = n.SeatPrice),
                      (e.SeatName = n.SeatName),
                      (e.isJianLou = !n.SeatInventory),
                      (e.TimesCost = (function (e) {
                        var t = Math.floor(parseInt(e) / 60),
                          n = parseInt(e) % 60;
                        return t > 0
                          ? "".concat(t, "时").concat(n, "分")
                          : "".concat(n, "分");
                      })(e.RunTime)),
                      (e.DepartTimeStamp = o(e.DepartTime)),
                      (e.IsLocked = e.DepartTimeStamp - i <= 48e4),
                      (e.timePeriod = (function (e) {
                        return e >= a[0] && e <= a[1]
                          ? 2
                          : e >= a[1] && e <= a[2]
                          ? 4
                          : e >= a[2] && e <= a[3]
                          ? 8
                          : 16;
                      })(e.DepartTimeStamp)),
                      (e.trainType = s.ZP.getTrainType(e.TrainNumber[0])),
                      (e.SaleNote = (e.SaleNote || "").replace(
                        /(<br\/>)/g,
                        ""
                      )),
                      (e.down = !1);
                    var t = [];
                    e.SeatList.forEach(function (e) {
                      if (
                        0 == e.SeatName.indexOf("硬卧上") ||
                        0 == e.SeatName.indexOf("硬卧中") ||
                        0 == e.SeatName.indexOf("软卧上") ||
                        0 == e.SeatName.indexOf("高级软卧上") ||
                        0 == e.SeatName.indexOf("高级动卧上") ||
                        0 == e.SeatName.indexOf("动卧上")
                      )
                        return !1;
                      0 == e.SeatName.indexOf("硬卧下")
                        ? (e.SeatName = "硬卧")
                        : 0 == e.SeatName.indexOf("软卧下")
                        ? (e.SeatName = "软卧")
                        : 0 == e.SeatName.indexOf("高级软卧下")
                        ? (e.SeatName = "高级软卧")
                        : 0 == e.SeatName.indexOf("高级动卧下")
                        ? (e.SeatName = "高级动卧")
                        : 0 == e.SeatName.indexOf("动卧下") &&
                          (e.SeatName = "动卧"),
                        t.push(e);
                    }),
                      (e.seats = t),
                      (e.IsCanHB = !0),
                      !e.IsLocked && c.push(e);
                  }
                }),
                c
              );
            },
            handleSeats: function (e) {
              var t = 0;
              return (
                e.forEach(function (e) {
                  t += e.SeatInventory;
                }),
                t
              );
            },
            setTitle: function (e) {
              o().setNavigationBarTitle({ title: e });
            },
            loadingTimeoutId: "",
            showLoading: function (e) {
              o().showToast({
                title: e || "加载中...",
                icon: "loading",
                duration: 1e4,
                mask: !0,
              }),
                (w.isLoading = !0),
                clearTimeout(w.loadingTimeoutId),
                (w.loadingTimeoutId = setTimeout(function () {
                  w.isLoading = !1;
                }, 1e4));
            },
            hideLoading: function () {
              (w.isLoading = !1), o().hideToast();
            },
            isLoading: !1,
            hideToast: function () {
              o().hideToast();
            },
            isTest: function () {
              var e = l.default.platform && l.default.platform.toLowerCase();
              if (
                !c.ZP.userName ||
                !w.payPostfix.length ||
                "tieyou" !== l.default.partner ||
                ("ios" !== e && "devtools" !== e)
              )
                return !1;
              var t = c.ZP.userName;
              return u._.some(w.payPostfix, function (e) {
                return !!e && w.endsWith(t, e);
              });
            },
            payPostfix: [],
            setConfigPayPostfix: function (e) {
              w.payPostfix = e;
            },
            parsePasExt: function (e) {
              var t = {};
              if (e)
                try {
                  t = JSON.parse(e) || {};
                } catch (e) {
                  console.log(e);
                }
              return t;
            },
            endsWith: function (e, t, n) {
              var r = e.length,
                i = void 0 === n ? r : +n;
              i < 0 || i != i ? (i = 0) : i > r && (i = r);
              var o = i;
              return (i -= t.length) >= 0 && e.slice(i, o) == t;
            },
            forceBuyPackage: !1,
            isForceBuy: function () {
              return w.forceBuyPackage;
            },
            setConfigForceBuy: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              w.forceBuyPackage = e;
            },
            getPureDate: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : new Date(),
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              return new Date(
                e.getFullYear(),
                e.getMonth(),
                e.getDate(),
                t,
                0,
                0,
                0
              );
            },
            getDiffDays: function (e, t) {
              var n = w.getPureDate(e),
                r = w.getPureDate(t);
              return Math.floor((r - n) / 864e5);
            },
            getDiffDHS: function (e, t) {
              var n = 36e5,
                r = 864e5,
                i = t - e,
                o = (i % n) / 6e4,
                a = (i % r) / n,
                c = i / r;
              return {
                days: Math.floor(c),
                hours: Math.floor(a),
                seconds: Math.floor(o),
              };
            },
            isHasChild: function (e) {
              var t = this;
              return e.some(function (e) {
                return (
                  (t.getAge(e.Birthday) < 18 && "身份证" === e.IdentityType) ||
                  2 == e.PassengerType
                );
              });
            },
            isHasOld: function (e) {
              var t = this;
              return e.some(function (e) {
                return t.getAge(e.Birthday) > 70 && "身份证" === e.IdentityType;
              });
            },
            getAge: function (e) {
              if (!e) return -1;
              var t = e.split("-");
              return new Date().getFullYear() - t[0];
            },
            getDeferred: function () {
              var e = {};
              return (
                (e.promise = new Promise(function (t, n) {
                  (e.resolve = t), (e.reject = n);
                })),
                e
              );
            },
            useMixin: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [];
              t.forEach(function (t) {
                t.data && Object.assign(e.data, t.data),
                  t.methods &&
                    Object.keys(t.methods).forEach(function (n) {
                      e[n] = t.methods[n];
                    });
              });
            },
            canIUse: function () {
              return o().canIUse && o().canIUse.apply(o(), arguments);
            },
            isPuKuai: function (e) {
              return /^Z|K|T/.test(e);
            },
            isHardSeat: function (e) {
              return "硬座" === e;
            },
            isSoftSeat: function (e) {
              return "软座" === e;
            },
            isHardLieSeat: function (e) {
              return "硬卧" === e;
            },
            isSoftLieSeat: function (e) {
              return "软卧" === e;
            },
            unique: function (e) {
              for (var t = [], n = 0; n < e.length; n++)
                -1 == t.indexOf(e[n]) && t.push(e[n]);
              return t;
            },
            findUseTimeMedian: function (e) {
              return 0 == e.length
                ? 0
                : (e.sort(function (e, t) {
                    return e - t;
                  }),
                  e[Math.floor(e.length / 2)]);
            },
            getTrainTypes: function (e) {
              var t = ["G", "D", "C"],
                n = e
                  .map(function (e) {
                    return e[0];
                  })
                  .map(function (e) {
                    return t.indexOf(e) > -1 ? e : "O";
                  });
              return w.unique(n);
            },
            calJLEndTime: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "YYYY-MM-DD HH:mm:ss",
                n = Math.max.apply(Math, (0, r.Z)(e)),
                i = n - 36e5,
                o = new Date(i);
              return (
                new Date().getTime() >= o.getTime() &&
                  ((i = n - 21e5), (o = new Date(i))),
                h()(o).format(t)
              );
            },
            configs: {},
            setConfig: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              return (w.configs[e] = t), t;
            },
            getConfig: function (e, t) {
              return w.configs[e] || t;
            },
            setConfigSwitch: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              return w.setConfig(e, !!parseInt(t));
            },
            convertStr: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  /<font(\s+color=['"]([a-zA-Z#0-9]*)?['"])([^>]*)>([^<]*)<\/font>/gi,
                n = w.canIUse("rich-text");
              return n
                ? e.replace(t, '<span style="color:$2">$4</span>')
                : e.replace(t, "$4");
            },
            convertPureStr: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t = /<[^>]+>/g;
              return e.replace(t, "");
            },
            convertArrayToObj: function (e) {
              var t = {};
              return w.isArray(e)
                ? (e.forEach(function (e) {
                    t[e.name] = e.value;
                  }),
                  t)
                : {};
            },
            convertObjToArray: function (e) {
              var t = [];
              if (!w.isObject(e)) return [];
              for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                var i = r[n];
                t.push({ name: i, value: e[i] });
              }
              return t;
            },
            isSameDay: function (e, t) {
              return (
                new Date(e).setHours(0, 0, 0, 0) ===
                new Date(t).setHours(0, 0, 0, 0)
              );
            },
            getSubscribe: function (e) {
              var t = w.getDeferred();
              return (
                d.Z.getSubscribeMsgInfo(e).then(
                  function (e) {
                    console.log(
                      "getSubscribe successCallBack unKnownList=====>",
                      e.unKnownList
                    );
                    var n = e.mainSwitch,
                      r = e.unKnownList;
                    t.resolve({ mainSwitch: n, unKnownList: r });
                  },
                  function () {
                    t.resolve({});
                  }
                ),
                t.promise
              );
            },
            setSubscribe: function (e) {
              var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                n = w.getDeferred();
              if (!e || 0 === e.length) return n.resolve(!1), n.promise;
              var r = function () {
                  t && (0, f.showToast)("订阅成功～"), n.resolve(!0);
                },
                i = function (e) {
                  console.log(e), n.resolve(!1);
                };
              return d.Z.executeSubscribeMsg(e).then(r, i), n.promise;
            },
            chunk: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1,
                n = Math.max(t, 0),
                r = null == e ? 0 : e.length;
              if (!r || n < 1) return [];
              for (var i = 0, o = 0, a = new Array(Math.ceil(r / n)); i < r; )
                a[o++] = e.slice(i, (i += n));
              return a;
            },
            isIos: function () {
              var e = o().getSystemInfoSync().system || "";
              return (e = e.toLowerCase()).indexOf("ios") > -1;
            },
            checkDeletable: function (e, t) {
              var n = !1,
                r = !1;
              return (
                !e ||
                1 == e.isChild ||
                (t.forEach(function (t) {
                  t.isChild
                    ? (n = !0)
                    : t.PassengerID != e.PassengerID && (r = !0);
                }),
                !n || r)
              );
            },
            wait: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t = w.getDeferred(),
                n = setTimeout(t.resolve, e);
              return { promise: t.promise, timeoutId: n };
            },
            getUrlParam: A,
            getUrlParams: function (e, t) {
              if ("string" != typeof e) return !1;
              var n = e.split(" "),
                r = {},
                i = 0,
                o = n.length;
              if (0 === n.length) return !1;
              for (; i < o; i++) r[n[i]] = A(n[i], t);
              return r;
            },
            isAuthValid: function (e) {
              if (
                !(
                  e &&
                  e.ResponseStatus &&
                  e.ResponseStatus.Ack &&
                  "Failure" == e.ResponseStatus.Ack
                )
              )
                return !0;
              var t = e.ResponseStatus.Errors;
              if (t && t.length > 0) {
                var n = t[0].ErrorCode;
                if (n && "MobileRequestFilterException" == n) return !1;
              }
            },
            getPhoneModel: function () {
              try {
                var e;
                return o().getSystemInfoSync().model || "";
              } catch (e) {
                return console.log(e), "";
              }
            },
            isIphoneX: function () {
              var e = w.getPhoneModel(),
                t = e.slice(e.indexOf("<") + 1, e.indexOf(">"));
              return (
                [
                  "iPhone10,3",
                  "iPhone10,6",
                  "iPhone11,2",
                  "iPhone11,4",
                  "iPhone11,6",
                  "iPhone11,8",
                  "iPhone12,1",
                  "iPhone12,3",
                  "iPhone12,5",
                  "iPhone13,1",
                  "iPhone13,2",
                  "iPhone13,3",
                  "iPhone13,4",
                ].findIndex(function (e) {
                  return e === t;
                }) > -1
              );
            },
            getHours: function () {
              return new Array(25).fill().map(function (e, t) {
                return t > 9 ? "".concat(t, ":00") : "0".concat(t, ":00");
              });
            },
            getOutParams: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = decodeURIComponent(e.dstation || e.dStation || "上海"),
                n = decodeURIComponent(e.astation || e.aStation || "北京"),
                r = decodeURIComponent(
                  e.ddate || e.dDate || e.ddata || e.dData || ""
                ),
                i = decodeURIComponent(
                  e.trainname || e.trainName || ""
                ).toUpperCase(),
                o = decodeURIComponent(e.seat || ""),
                a = e.isgd,
                c = e.stu;
              return {
                dStation: t,
                aStation: n,
                dDate: r,
                isgd: !(!a || "0" == a || "false" == a) && a,
                seat: o,
                trainName: i,
                stu: !!c,
              };
            },
            getHourMinuteSecondByTimeStamp: function (e) {
              var t = 36e5,
                n = function (e) {
                  return e < 10 ? "0".concat(e) : e;
                },
                r = Math.floor(e / t);
              r = n(r);
              var i = e - r * t,
                o = Math.floor(i / 6e4);
              o = n(o);
              var a = Math.floor((i - 6e4 * o) / 1e3);
              return (a = n(a)), { hour: r, minute: o, second: a };
            },
            isArray: function (e) {
              if (Array.isArray) return Array.isArray(e);
              Array.isArray = function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              };
            },
            isObject: function (e) {
              return "[object Object]" === Object.prototype.toString.call(e);
            },
            isNumber: function (e) {
              return "[object Number]" === Object.prototype.toString.call(e);
            },
            isString: function (e) {
              return "[object String]" === Object.prototype.toString.call(e);
            },
            isNotEmptyObj: function (e) {
              var t = !1;
              return w.isObject(e) && (t = Object.keys(e).length > 0), t;
            },
            throttle: function (e, t) {
              var n = Number.parseInt(t);
              Number.isNaN(n) && (n = 2500);
              var r = null;
              return function () {
                var t = Date.now();
                (t - r > n || !r) && (e.apply(this, arguments), (r = t));
              };
            },
            getBirthFromCode: function (e) {
              var t,
                n,
                r = e.toUpperCase();
              if (15 == r.length) {
                n = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
                var i = r.match(n);
                i &&
                  i.length > 5 &&
                  (t = "19" + i[2] + "-" + i[3] + "-" + i[4]);
              }
              18 == r.length &&
                ((n = new RegExp(
                  /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
                )),
                (i = r.match(n)) &&
                  i.length > 5 &&
                  (t = i[2] + "-" + i[3] + "-" + i[4]));
              return t;
            },
            getHourMinuteByMinute: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t = 60,
                n = Math.floor(e / t),
                r = e - n * t;
              return n > 0
                ? "".concat(n, "时").concat(r, "分")
                : "".concat(r, "分");
            },
            getHourMinuteStringByTime: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              if (!e) return "";
              var t = e.split(" ");
              return t[1] ? t[1].slice(0, 5) : "";
            },
            getDiffDayByMinute: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              return e ? Math.floor(e / 1440) : "";
            },
            getHourMinuteSecondBySecond: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t = D(e);
              return ""
                .concat(t.hour, ":")
                .concat(t.minute, ":")
                .concat(t.second);
            },
            getHourMinuteSecondObjBySecond: D,
            toChineseNum: function (e) {
              var t = [
                  "零",
                  "一",
                  "二",
                  "三",
                  "四",
                  "五",
                  "六",
                  "七",
                  "八",
                  "九",
                ],
                n = ["", "十", "百", "千", "万"],
                r = parseInt(e),
                i = function (e) {
                  for (
                    var r = e.toString().split("").reverse(), i = "", o = 0;
                    o < r.length;
                    o++
                  )
                    i =
                      ((0 == o && 0 == r[o]) ||
                      (o > 0 && 0 == r[o] && 0 == r[o - 1])
                        ? ""
                        : t[r[o]] + (0 == r[o] ? n[0] : n[o])) + i;
                  return i;
                },
                o = Math.floor(r / 1e4),
                a = r % 1e4;
              return (
                a.toString().length < 4 && (a = "0" + a),
                o ? i(o) + "万" + i(a) : i(r)
              );
            },
            gotoH5Page: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              e && a.Z.twebview({ data: { url: e } });
            },
            convertAppTextToHtmlStr: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  /<font(\s+color=['"]?([a-zA-Z#0-9]*)?['"]?)([^>]*?)>([^<]*?)<\/font>/gi;
              return e.replace(t, '<span style="color:$2">$4</span>');
            },
            formatTimeStamp: function (e) {
              if ("number" != typeof e) return "";
              var t = new Date(e),
                n = t.getFullYear(t),
                r =
                  t.getMonth() + 1 < 10
                    ? "0" + (t.getMonth() + 1)
                    : t.getMonth(),
                i = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
                o = t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
                a = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(),
                c = t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds();
              return ""
                .concat(n, "-")
                .concat(r, "-")
                .concat(i, " ")
                .concat(o, ":")
                .concat(a, ":")
                .concat(c);
            },
            getSmartFilterResParams: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = !1,
                n = !1,
                r = !1,
                i = !1,
                o = [],
                a = [],
                c = [];
              if (!e || !e.length)
                return {
                  flightDisabled: r,
                  busDisabled: n,
                  transferAreaNames: c,
                  departureTimes: o,
                  hasTicketFlag: t,
                  transferElapsedTimeList: a,
                  sameTransferLocation: i,
                };
              for (var u = 0; u < e.length; u++) {
                var l = e[u];
                switch (l) {
                  case p:
                    t = !0;
                    break;
                  case S:
                    n = !0;
                    break;
                  case v:
                    r = !0;
                    break;
                  case m:
                    i = !0;
                    break;
                  case y:
                    o.push({ startTime: "00:00", endTime: "06:00" });
                    break;
                  case T:
                    o.push({ startTime: "06:00", endTime: "12:00" });
                    break;
                  case b:
                    o.push({ startTime: "12:00", endTime: "18:00" });
                    break;
                  case C:
                    o.push({ startTime: "18:00", endTime: "24:00" });
                    break;
                  case P:
                    a.push({ minMinute: 0, maxMinute: 59 });
                    break;
                  case R:
                    a.push({ minMinute: 60, maxMinute: 119 });
                    break;
                  case x:
                    a.push({ minMinute: 120, maxMinute: 239 });
                    break;
                  case I:
                    a.push({ minMinute: 240, maxMinute: 1440 });
                    break;
                  default:
                    c.push(l);
                }
              }
              return {
                flightDisabled: r,
                busDisabled: n,
                transferAreaNames: c,
                departureTimes: o,
                hasTicketFlag: t,
                transferElapsedTimeList: a,
                sameTransferLocation: i,
              };
            },
          };
        function A(e, t) {
          if ("string" != typeof e) return !1;
          var n = e.replace(/[\[\]]/g, "\\$&"),
            r = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)").exec(t);
          return r
            ? r[2]
              ? decodeURIComponent(r[2].replace(/\+/g, " "))
              : ""
            : null;
        }
        function D() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          if (e <= 0) return 0;
          var t = 3600,
            n = 60,
            r = Math.floor(e / t),
            i = e - r * t,
            o = Math.floor(i / n),
            a = i - o * n,
            c = function (e) {
              return e < 10 ? "0".concat(e) : e;
            };
          return {
            hour: "".concat(c(r)),
            minute: "".concat(c(o)),
            second: "".concat(c(a)),
          };
        }
        var Z = w;
      },
    },
  ]);
})();
