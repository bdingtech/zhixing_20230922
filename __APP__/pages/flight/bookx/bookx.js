!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/87dd7ca508f26cc44a96a97518946752.js"),
    require("../sub-common/1775d7c9f65b9a6f532fd61b25d0faaf.js"),
    require("../sub-common/023c833735f89bfd8e4bfa6050ae7715.js"),
    require("../sub-common/99e1f8a4cc1290fc72ce9bc5d2852868.js"),
    require("../sub-common/6c29063ea7407d5aad2c6709ea72811d.js"),
    require("../sub-common/77d3751beb3e2bc1242396ba7c218030.js"),
    require("../sub-common/c464917dce609cc1e640bf0180e17346.js"),
    require("../sub-common/875c9573fb7fcc8b910e806c934114d8.js"),
    require("../sub-common/1bc3053f48eb4d260bc28c0ff4efae15.js"),
    require("../sub-common/d33d0bff6905d6dc3872ed0c9fa55a20.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [748],
      {
        6242: function (e, t, n) {
          var i = n(32180),
            a = n(57042),
            r = n(24460),
            c = n(81876),
            o = n(21867),
            l = n(86066),
            s = n(52500),
            d = n(65573),
            u = n(92954),
            m = n.n(u),
            p = n(71515),
            f = n(79792),
            h = n(20592),
            g = n(81957),
            x = n(21999),
            N = n(92603),
            Z = n(79301),
            w = n(95308),
            v = n(22276),
            b = n(298),
            T = n(18783),
            V = n(2326),
            y = n(49120),
            B = n(79910),
            k = n(8271),
            C = n.n(k),
            X = n(9062),
            P = n(32270),
            S = n(82083),
            I = n(90129),
            D = n(4845),
            A = n(34229),
            M = n(18433),
            R = n(48813),
            _ = { 1: "预定必读", 2: "出行提醒" },
            F = function (e) {
              var t = e.index,
                n = e.data,
                i = e.scrollIntoView,
                a = e.observeCallback,
                r = n[0].type,
                c = (0, M.Z)({
                  selector: ".".concat(
                    f.default.zxTyStr,
                    " >>> #notice-scroll"
                  ),
                  targetSelector: "."
                    .concat(f.default.zxTyStr, " >>> #notice-wrap-")
                    .concat(r),
                  observeCallback: function (e) {
                    a(e, t);
                  },
                  callbackDeps: [i],
                });
              return (0, R.tZ)(p.View, {
                id: "notice-wrap-".concat(r),
                className: "notice-wrap",
                ref: c,
                children: n.map(function (e, t) {
                  return (0,
                  R.BX)(p.View, { className: "notice-item", children: [(0, R.tZ)(p.View, { className: "notice-hd", children: (0, R.tZ)(A.ZtRichText, { className: "notice-tit", nodes: e.title }) }), (0, R.tZ)(A.ZtRichText, { className: "notice-cont", nodes: e.content })] }, t);
                }),
              });
            },
            E = s.default.memo(function (e) {
              var t = e.data,
                n = e.onClose,
                i = (0, s.useState)(0),
                a = (0, I.Z)(i, 2),
                r = a[0],
                c = a[1],
                o = (0, s.useState)(""),
                l = (0, I.Z)(o, 2),
                d = l[0],
                u = l[1],
                m = [
                  t.filter(function (e) {
                    return 1 === e.type;
                  }),
                  t.filter(function (e) {
                    return 2 === e.type;
                  }),
                ].filter(function (e) {
                  return e.length > 0;
                }),
                f = m.map(function (e) {
                  return { type: e[0].type, txt: _[e[0].type] };
                }),
                h = f.length > 1,
                g = { transform: "translateX(".concat(100 * r, "%)") },
                x = function (e, t) {
                  d ? u("") : e.intersectionRatio > 0 && c(t);
                };
              return (0, R.BX)(p.View, {
                className: "notice-drawer flex flex-column",
                children: [
                  (0, R.BX)(p.View, {
                    className: "notice-drawer-hd flex ".concat(
                      h ? "multi" : "single"
                    ),
                    children: [
                      f.map(function (e, t) {
                        return (0, R.tZ)(
                          p.View,
                          {
                            className: "notice-cate flex-1 flex-center ".concat(
                              r === t ? "cur" : ""
                            ),
                            id: "AcBh",
                            onClick: function () {
                              !(function (e, t) {
                                c(e), u("notice-wrap-".concat(t.type));
                              })(t, e);
                            },
                            children: e.txt,
                          },
                          t
                        );
                      }),
                      h &&
                        (0, R.tZ)(p.View, {
                          id: "notice-scroll",
                          className: "notice-hd-scroll flex-center",
                          style: g,
                          children: (0, R.tZ)(p.View, {
                            className: "notice-scrollbar",
                          }),
                        }),
                    ],
                  }),
                  (0, R.tZ)(p.ScrollView, {
                    className: "notice-drawer-bd",
                    scrollIntoView: d,
                    scrollY: !0,
                    scrollWithAnimation: !0,
                    children: m.map(function (e, t) {
                      return (0,
                      R.tZ)(F, { index: t, data: e, observeCallback: x, scrollIntoView: d }, t);
                    }),
                  }),
                  (0, R.tZ)(D.Z, { onConfirm: n }),
                ],
              });
            }),
            Y = function (e) {
              var t;
              e &&
                (null === (t = (0, y.getCurrentPage)()) ||
                  void 0 === t ||
                  t.showCommonDrawer({
                    hideClose: !0,
                    hideTitle: !0,
                    content: function (t) {
                      var n = t.onClose;
                      return (0, R.tZ)(E, { data: e, onClose: n });
                    },
                  }));
            },
            L = n(21828),
            q = s.default.memo(function (e) {
              var t = e.flightPrice,
                n = e.salePrice,
                i = e.productName,
                a = e.cabin,
                r = e.onConfirm,
                c = void 0 === r ? function () {} : r;
              return (0,
              R.BX)(L.Z, { className: "flt-booking-botm", children: [(0, R.BX)(p.View, { className: "left flex-1", children: [(0, R.BX)(p.View, { className: "price-area flex-align-items-center", children: [(0, R.tZ)(p.View, { className: "flight-price", children: t }), n > 0 && (0, R.BX)(p.View, { className: "sale-price", children: ["+¥", n, i] })] }), (0, R.tZ)(p.View, { className: "btm-sub-title", children: a })] }), (0, R.tZ)(p.View, { className: "right", children: (0, R.tZ)(p.Button, { className: "book-btn", id: "AADF", onClick: c, children: "去预订" }) })] });
            }),
            H = n(45023),
            z = n(44778),
            O = n(76988),
            j = {
              state: {
                xType: "flight",
                xCabinCacheUsage: 0,
                segments: [],
                products: [],
                isStu: !1,
                rescheduleRefundRemark: "",
                isShowNewCoupon: !1,
                surpriseParams: {},
                tipAndFloat: {},
                monitoring: !1,
                sequences: null,
                vipDetail: null,
                showVip: !1,
                packageProductInfo: {},
                changePackagePopVisible: !1,
                packageProductDetailVisible: !1,
                dptTime: "",
                dptName: "",
                arrName: "",
                refundXProductInfo: {},
                flightNotes: [],
                announcementShow: !1,
                announcementPop: null,
                announcementContent: null,
                xPageNotice: null,
                bookxBanner: null,
                springFestival: null,
              },
              reducers: {
                setState: function (e, t) {
                  return (0, b.Z)((0, b.Z)({}, e), t);
                },
              },
            },
            U = {
              state: { product: {}, index: 0, selectedXProducts: [] },
              reducers: {
                setState: function (e, t) {
                  return (0, b.Z)((0, b.Z)({}, e), t);
                },
              },
            },
            K = (function (e) {
              (0, o.Z)(n, e);
              var t = (0, l.Z)(n);
              function n() {
                return (0, a.Z)(this, n), t.apply(this, arguments);
              }
              return (
                (0, r.Z)(n, [
                  {
                    key: "initStore",
                    value: function () {
                      this.store = (0, z.S1)({
                        models: { pageModel: j, refundXProductsModel: U },
                      });
                    },
                  },
                ]),
                n
              );
            })(O.Z);
          (0, H.Z)(K, "defaultModel", "pageModel");
          var W = function (e) {
              var t = e.data,
                n = (0, s.useState)(!1),
                i = (0, I.Z)(n, 2),
                a = i[0],
                r = i[1];
              (0, s.useEffect)(
                function () {
                  t &&
                    B.Z.sendUbtTrace("P0309_SP0001_M0006_ID0001_exposure", {
                      Price: t.price,
                      ProductType: t.type,
                      Name: t.name,
                    });
                },
                [t]
              ),
                (0, s.useEffect)(
                  function () {
                    r(t.selected);
                  },
                  [t.selected]
                );
              var c = t.price,
                o = t.unit,
                l = t.name,
                d = t.features,
                u = t.detailInfo,
                m = t.type,
                f = function () {
                  r(!a),
                    (t.selected = !a),
                    (function () {
                      var e = K.getState().products;
                      K.setState({ products: (0, v.Z)(e) });
                      var t = (
                        K.getState("refundXProductsModel").product.rcrxp || []
                      ).filter(function (e) {
                        return e.selected;
                      });
                      K.dispatch("refundXProductsModel").setState({
                        selectedXProducts: t,
                      });
                    })(),
                    B.Z.sendUbtTrace("P0309_SP0001_M0006_ID0001_click", {
                      Price: t.price,
                      ProductType: t.type,
                      Name: t.name,
                      is_open: t.selected ? 1 : 0,
                    });
                },
                h = "REFUND_REDUCE" == m,
                g = h
                  ? "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/fuceng/10/bg_tuipiao@3x.png"
                  : "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/fuceng/10/bg_gaiqi@3x.png";
              return (0, R.BX)(p.View, {
                className: "refund-x-product-banner ".concat(h ? "refund" : ""),
                children: [
                  (0, R.tZ)(p.Image, { src: g, className: "corner-icon" }),
                  (0, R.BX)(p.View, {
                    className: "x-product-hd flex",
                    id: "AcCE",
                    onClick: function () {
                      return (0, P.pC)(u, "80vh");
                    },
                    children: [
                      (0, R.BX)(p.View, {
                        className: "flt-title",
                        children: [a ? "已享·" : "", l],
                      }),
                      (0, R.tZ)(p.Text, {
                        className: "ifont-detail iconfont flex-center",
                      }),
                      (0, R.BX)(p.View, {
                        className: "price flex-center",
                        children: [c, "/", o],
                      }),
                    ],
                  }),
                  (0, R.tZ)(p.View, {
                    className: "features",
                    children: d.map(function (e, t) {
                      return (0,
                      R.BX)(p.View, { className: "feature-item flex-align-items-center", children: [(0, R.tZ)(p.Image, { className: "icon", src: e.icon }), (0, R.tZ)(p.View, { className: "cont", children: (0, R.tZ)(A.ZtRichText, { nodes: e.title, nbsp: "space" }) })] }, t);
                    }),
                  }),
                  (0, R.tZ)(p.View, {
                    className: "x-bnr-btn ".concat(a ? "bd-1rpx selected" : ""),
                    id: "AcCF",
                    onClick: function () {
                      return f();
                    },
                    children: a ? "已升级" : "升级保障",
                  }),
                ],
              });
            },
            $ = s.default.memo(function (e) {
              var t = e.product,
                n = (null == t ? void 0 : t.rcrxp) || [];
              return (0, R.tZ)(R.HY, {
                children:
                  null == n
                    ? void 0
                    : n.map(function (e, t) {
                        return (0, R.tZ)(W, { data: e }, t);
                      }),
              });
            }),
            G = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.refundXProductsModel;
                return {
                  product: t.product,
                  selectedXProducts: t.selectedXProducts,
                  index: t.index,
                };
              })(function (e) {
                var t = e.product,
                  n = e.selectedXProducts,
                  i = e.index,
                  a = t.apr,
                  r = t.cabin,
                  c = n.reduce(function (e, t) {
                    return e + t.price;
                  }, 0),
                  o =
                    n.length > 1
                      ? "升级".concat(n.length, "项保障")
                      : "升级保障";
                return (0, R.tZ)(q, {
                  flightPrice: a,
                  salePrice: c,
                  productName: o,
                  cabin: r,
                  onConfirm: function () {
                    return (function (e) {
                      var t = e.product,
                        n = e.index;
                      K.closeCommonDrawer(!0);
                      var i = (t.rcrxp || [])
                        .filter(function (e) {
                          return e.selected;
                        })
                        .map(function (e) {
                          return e.xtoken;
                        });
                      B.Z.sendUbtTrace("P0309_SP0001_M0006_ID0002_click", {
                        Price: t.apr,
                        Storey: t.storey,
                        Xproductlist: i,
                        seq: n + 1,
                        choose: !1,
                      }),
                        Ie({ product: t, index: n });
                    })({ product: t, index: i });
                  },
                });
              })
            ),
            J = n(45245),
            Q = function (e) {
              var t,
                n = e.product,
                i = K.getState(),
                a = i.products;
              return (
                (t = "airTrain" === i.xType ? a.flight.info : n.info),
                {
                  rescheduleRefundRemark: J.Z.handleContentFormat(
                    JSON.parse(JSON.stringify(t || ""))
                  ),
                }
              );
            },
            ee = function (e) {
              if (!Array.isArray(e.textList)) return "";
              var t = e.textList,
                n = e.colorList,
                i = t.reduce(function (e, t) {
                  return e + t.length;
                }, 0),
                a = t.reduce(function (e, t, i) {
                  return (
                    e +
                    '<span style="color: '
                      .concat(n && n[i], '">')
                      .concat(t, "</span>")
                  );
                }, ""),
                r = "",
                c = 2;
              try {
                c = m().getSystemInfoSync().pixelRatio;
              } catch (e) {}
              var o = i > (c > 2 ? 50 : 52);
              if (o) {
                var l = t.length - 1;
                (t[l] = t[l].substring(0, c > 2 ? 40 : 42)),
                  t.push("... ", " 展开"),
                  n.push("", f.default.isTieyou ? "#FC6E51" : "#1A8CFF"),
                  (r = t.reduce(function (e, t, i) {
                    return (
                      e +
                      '<span style="color: '
                        .concat(n && n[i], '">')
                        .concat(t, "</span>")
                    );
                  }, ""));
              }
              return {
                originTxt: a,
                combinedTxt: r,
                textOverflow: o,
                showAll: !1,
              };
            },
            te = function (e, t, n) {
              var i = C()(n),
                a = C()(e.dptTime),
                r = C()(e.arrTime);
              return (0, b.Z)(
                (0, b.Z)({}, e),
                {},
                {
                  dptTimeStr: a.format("HH:mm"),
                  arrTimeStr: r.format("HH:mm"),
                  dptDayDiff:
                    i.format("YYYY-MM-DD") !== a.format("YYYY-MM-DD")
                      ? a.format("MM-DD")
                      : "",
                  arrDayDiff:
                    i.format("YYYY-MM-DD") !== r.format("YYYY-MM-DD")
                      ? r.format("MM-DD")
                      : "",
                  type: t,
                  dtlsStr: Array.isArray(e.dtls) ? e.dtls.join(" ") : e.dtls,
                }
              );
            },
            ne = function () {
              var e = K.getState(),
                t = e.segments,
                n = void 0 === t ? [] : t,
                i = e.xType,
                a = K.getRouterParams().tripType;
              if (a == X.zM.round || a == X.zM.multi)
                return K.setPageTitle("选择舱位");
              if ("airTrain" !== i) {
                var r = (n[0] || {}).flights,
                  c = (void 0 === r ? [] : r)[0] || {},
                  o = c.dptTime,
                  l = c.dptWeekDay,
                  s = ""
                    .concat(C()(o).format("MM月DD日"), " ")
                    .concat(l, "出发");
                K.setPageTitle(s);
              } else {
                var d = K.getState().sequences,
                  u = void 0 === d ? {} : d;
                if (!u.combination) return;
                var m = u.combination,
                  p = m[0] ? m[0].dptName : "",
                  f = m[1] ? m[1].arrName : "";
                K.setPageTitle("".concat(p, " - ").concat(f));
              }
            },
            ie = n(13975),
            ae = n(84211),
            re = n(92298),
            ce = n(3205),
            oe = new u.Events(),
            le = "spring_travel",
            se = "may_day";
          function de(e) {
            var t = e.type,
              n = e.data,
              i = e.product,
              a = e.onBook,
              r = n || {},
              c = r.coupons,
              o = r.rule,
              l = r.banner,
              d = (0, s.useState)(!1),
              u = (0, I.Z)(d, 2),
              m = u[0],
              f = u[1];
            oe.on(t, function () {
              return f(!1);
            });
            return (0, R.BX)(p.View, {
              className: "new-guest-gift",
              children: [
                (0, R.tZ)(p.View, {
                  className: "activity-tit",
                  children: (0, R.tZ)(A.ZtRichText, {
                    nodes: n.title,
                    className: "tit",
                  }),
                }),
                (0, R.BX)(p.ScrollView, {
                  scrollY: !0,
                  className: "activity-cont",
                  children: [
                    (0, R.BX)(p.View, {
                      className: "coupon-info-card",
                      children: [
                        t === le &&
                          (0, R.tZ)(
                            function (e) {
                              var t = e.springCoupons,
                                n =
                                  null == t
                                    ? void 0
                                    : t.filter(function (e) {
                                        return "MASTER" === e.type;
                                      }),
                                i =
                                  null == t
                                    ? void 0
                                    : t.filter(function (e) {
                                        return "SLAVE" === e.type;
                                      });
                              return (0, R.BX)(p.View, {
                                className: "spring-travel",
                                children: [
                                  null == n
                                    ? void 0
                                    : n.map(function (e, t) {
                                        return (0,
                                        R.BX)(p.View, { className: "main-coupon flex", children: [(0, R.BX)(p.View, { className: "coupon-price", children: [(0, R.tZ)(p.Text, { className: "amount", children: e.amount }), (0, R.tZ)(p.Text, { className: "unit", children: "元" })] }), (0, R.BX)(p.View, { className: "coupon-desc", children: [(0, R.tZ)(p.View, { className: "tit", children: e.subsidyTitle }), (0, R.tZ)(p.View, { className: "sub-tit", children: e.subsidySubTitle })] })] }, t);
                                      }),
                                  (0, R.tZ)(p.View, {
                                    className: "coupon-list flex",
                                    children:
                                      null == i
                                        ? void 0
                                        : i.map(function (e, t) {
                                            return (0,
                                            R.BX)(p.View, { className: "coupon-item flex-center flex-column", children: [(0, R.BX)(p.View, { className: "coupon-price", children: [(0, R.tZ)(p.Text, { className: "amout", children: e.amount }), (0, R.tZ)(p.Text, { className: "unit", children: "元" })] }), (0, R.tZ)(p.View, { className: "coupon-desc", children: e.subsidyTitle })] }, t);
                                          }),
                                  }),
                                ],
                              });
                            },
                            { springCoupons: c }
                          ),
                        t === se &&
                          (0, R.tZ)(
                            function (e) {
                              var t = e.mayDayCoupons,
                                n =
                                  null == t
                                    ? void 0
                                    : t.find(function (e) {
                                        return "MASTER" === e.type;
                                      }),
                                i =
                                  null == t
                                    ? void 0
                                    : t.filter(function (e) {
                                        return "SLAVE" === e.type;
                                      });
                              return (0, R.BX)(p.View, {
                                className: "may-day",
                                children: [
                                  (0, R.BX)(p.View, {
                                    className: "main-coupon flex",
                                    children: [
                                      (0, R.tZ)(p.View, {
                                        className: "coupon-price",
                                        children: n.amount,
                                      }),
                                      (0, R.tZ)(p.View, {
                                        className:
                                          "coupon-desc flex-align-items-center",
                                        children: n.subsidyTitle,
                                      }),
                                    ],
                                  }),
                                  (null == i ? void 0 : i.length) > 0
                                    ? (0, R.tZ)(p.View, {
                                        className: "sub-coupons flex ".concat(
                                          1 == (null == i ? void 0 : i.length)
                                            ? "single"
                                            : ""
                                        ),
                                        children:
                                          null == i
                                            ? void 0
                                            : i.map(function (e, t) {
                                                return (0,
                                                R.BX)(p.View, { className: "sub-coupon flex-1 flex-align-items-center", children: [(0, R.tZ)(p.View, { className: "coupon-price", children: e.amount }), (0, R.BX)(p.View, { className: "coupon-desc flex-1", children: [(0, R.tZ)(p.View, { className: "desc-cont", children: e.subsidyTitle }), (0, R.tZ)(p.View, { className: "sub-desc", children: e.subsidySubTitle })] })] }, t);
                                              }),
                                      })
                                    : (0, R.tZ)(R.HY, {}),
                                ],
                              });
                            },
                            { mayDayCoupons: c }
                          ),
                      ],
                    }),
                    !!l &&
                      (0, R.tZ)(p.View, {
                        className: "activity-banner-wrap",
                        children: (0, R.BX)(p.View, {
                          className: "activity-banner flex-center",
                          children: [
                            (0, R.BX)(p.View, {
                              className: "lbox flex-1 flex-align-items-center",
                              children: [
                                (0, R.tZ)(p.Image, {
                                  className: "banner-icon",
                                  src: l.icon,
                                }),
                                (0, R.tZ)(p.Text, {
                                  className: "banner-txt",
                                  children: l.text,
                                }),
                              ],
                            }),
                            (0, R.tZ)(p.View, {
                              className: "banner-btn",
                              id: "AcBd",
                              onClick: function () {
                                !(function (e) {
                                  e && ce.Z.twebview({ data: { url: e } });
                                })(l.jumpUrl);
                              },
                              children: "查看",
                            }),
                          ],
                        }),
                      }),
                    !m &&
                      (0, R.BX)(p.View, {
                        className: "show-more",
                        id: "AcBe",
                        onClick: function () {
                          f(!0);
                        },
                        children: [
                          "查看规则详情",
                          (0, R.tZ)(p.Text, {
                            className:
                              "more-icon ifont2-zhankai_linea_12 iconfont2",
                          }),
                        ],
                      }),
                    m &&
                      !!o &&
                      (0, R.tZ)(p.View, {
                        className: "rule-detail",
                        id: "AcBf",
                        onClick: function () {
                          f(!1);
                        },
                        children: (0, R.tZ)(A.ZtRichText, {
                          className: "rule-detail",
                          nodes: o,
                        }),
                      }),
                  ],
                }),
                (0, R.tZ)(L.Z, {
                  children: (0, R.BX)(p.View, {
                    className: "book-btn flex-center flex-1",
                    id: "AcBg",
                    onClick: function () {
                      null == a || a();
                    },
                    children: [
                      (0, R.BX)(p.View, {
                        className: "price-info",
                        children: [
                          (0, R.tZ)(p.Text, {
                            className: "rmb-sign",
                            children: "¥",
                          }),
                          (0, R.tZ)(p.Text, {
                            className: "price",
                            children: i.apr,
                          }),
                        ],
                      }),
                      (0, R.tZ)(p.View, {
                        className: "price-desc",
                        children: n.tips,
                      }),
                    ],
                  }),
                }),
              ],
            });
          }
          function ue(e, t) {
            return new Promise(function (n) {
              var i,
                a = (function () {
                  if (t === le || t === se) {
                    var e = K.getState().springFestival;
                    return {
                      title: e.title,
                      coupons: e.subNodes,
                      banner: e.activityInfo,
                      rule: e.rule,
                      tips: e.tips,
                    };
                  }
                  return null;
                })();
              a
                ? null === (i = (0, y.getCurrentPage)()) ||
                  void 0 === i ||
                  i.showCommonDrawer({
                    hideTitle: !0,
                    hideClose: !1,
                    content: function (i) {
                      var r = i.onClose;
                      return (0, R.tZ)(de, {
                        type: t,
                        activityType: t,
                        data: a,
                        onBook: function () {
                          n(!0), r();
                        },
                        product: e,
                      });
                    },
                    beforeClose: function () {
                      oe.trigger(t), n(!1);
                    },
                    className: "new-guest-gift-drawer",
                  })
                : n(!0);
            });
          }
          var me,
            pe = n(43653),
            fe = n(6954),
            he = [
              "BusinessTravelCashBackBanner",
              "FuelOilXBanner",
              "SpringFestival2023XBanner",
              "newUserBanner",
              "commonFlightTrain",
              "GrowthSharedCashBackBanner",
              "mayDayBanner",
              "FlightTrainDelayReturn",
              "shareOfficialBanner",
            ],
            ge = function () {
              var e = K.getState().products,
                t = Q({
                  product: null == e ? void 0 : e[0],
                }).rescheduleRefundRemark;
              (0, P.QU)({ height: "80vh", rescheduleRefundRemark: t });
            },
            xe = function () {
              var e = K.getState(),
                t = e.token,
                n = e.query,
                i = void 0 === n ? {} : n,
                a = i.hasChild,
                r = void 0 !== a && a,
                c = i.hasBaby,
                o = {
                  data: {
                    version: 1,
                    token: t,
                    hasChild: r,
                    hasBaby: void 0 !== c && c,
                    business: !1,
                  },
                };
              (0, ie.U6)(o)
                .then(function (e) {
                  var t, n;
                  if (K.isActive()) {
                    console.log(e);
                    var i = e || {},
                      a = i.resultCode,
                      r = i.resultMessage,
                      c = e.data || {};
                    if (1 !== a)
                      return K.showCommonDialog(r || "网络异常，请稍后重试");
                    var o = c.products,
                      l = c.sequences,
                      s = c.tips,
                      d = [],
                      u = [],
                      m =
                        1 === l.flight.idx ? l.flight.dptTime : l.train.dptTime;
                    (l.flight = te(l.flight, "FLT", m)),
                      (l.train = te(l.train, "TRN", m)),
                      1 === l.flight.idx
                        ? (d.push(l.flight, l.train),
                          u.push(
                            (0, b.Z)(
                              (0, b.Z)({}, o.flight),
                              {},
                              { type: "FLT" }
                            ),
                            (0, b.Z)((0, b.Z)({}, o.train), {}, { type: "TRN" })
                          ))
                        : 1 === l.train.idx &&
                          (d.push(l.train, l.flight),
                          u.push(
                            (0, b.Z)(
                              (0, b.Z)({}, o.train),
                              {},
                              { type: "TRN" }
                            ),
                            (0, b.Z)(
                              (0, b.Z)({}, o.flight),
                              {},
                              { type: "FLT" }
                            )
                          )),
                      K.setState({
                        dptName:
                          null === (t = o.flight) || void 0 === t
                            ? void 0
                            : t.dptName,
                        arrName:
                          null === (n = o.flight) || void 0 === n
                            ? void 0
                            : n.arrName,
                        sequences: (0, b.Z)(
                          (0, b.Z)({}, l),
                          {},
                          { combination: d }
                        ),
                        products: (0, b.Z)(
                          (0, b.Z)({}, o),
                          {},
                          { combination: u }
                        ),
                        tripTips: ee(s || {}),
                      }),
                      ne(),
                      ge();
                  }
                })
                .catch(function () {
                  (0, y.showModal)("网络异常，请稍后重试");
                });
            },
            Ne = function () {
              m().getCurrentPages().length <= 1
                ? B.Z.relaunchHome("flight")
                : ((h.IK.forceListRefresh = !0),
                  K.navigateBack({ isFresh: !0 }));
            },
            Ze = function (e) {
              var t = K.getState(),
                n = t.segments,
                i = t.lowestPrice,
                a = n[0].flights[0],
                r = a.dptTime,
                c = {
                  data: {
                    version: 2,
                    departureCityCode: a.dptCode,
                    arrivalCityCode: a.arrCode,
                    flightNumber: a.flightNo,
                    lowestPrice: i,
                    departureDate: C()(r).format("YYYY-MM-DD"),
                  },
                };
              (0, ie.xV)(c).then(function (t) {
                if (K.isActive()) {
                  var n = t.resultCode,
                    i = t.data,
                    a = void 0 === i ? {} : i;
                  1 === n && a.orderNumber
                    ? K.setState({
                        monitoring: !0,
                        monitorOrderNumber: a.orderNumber,
                      })
                    : K.setState({ monitoring: !1 }),
                    e && e();
                }
              });
            },
            we = { 1: 0, 2: 2, 3: 3, 4: 1 },
            ve = {
              1: "flightdetail",
              2: "flightretdetail",
              3: "flightmuldetail",
            },
            be = function () {
              var e = K.getState(),
                t = e.token,
                n = e.query,
                i = void 0 === n ? {} : n,
                a = e.sourcePage,
                r = e.isStu,
                c = e.xCabinCacheUsage,
                o = i.segments,
                l = void 0 === o ? [] : o,
                s = i.hasChild,
                d = void 0 !== s && s,
                u = i.hasBaby,
                m = void 0 !== u && u,
                p = i.queryHigherClass,
                f = void 0 !== p && p,
                g = i.extension,
                x = void 0 === g ? [] : g;
              (function (e) {
                var t = K.getState().tripType;
                return 3 == t
                  ? (0, ie.a5)(e)
                  : 2 == t
                  ? (0, ie.b$)(e)
                  : (0, ie.jv)(e);
              })({
                data: {
                  token: t,
                  cacheUsage: c,
                  version: 15,
                  source: "trainList" === a ? 4 : 0,
                  hasChild: d,
                  hasBaby: m,
                  queryHigherClass: f,
                  segments: l,
                  extension: [].concat((0, v.Z)(x), [
                    { key: "XPageVersion202102", value: "Y" },
                  ]),
                  student: r,
                },
              }).then(function (e) {
                var t, n, i;
                if (K.isActive()) {
                  var a = e || {},
                    r = a.resultCode,
                    c = a.resultMessage,
                    o = a.data,
                    l = void 0 === o ? {} : o;
                  if (1 === r || 2 === r) {
                    var s = l.segments,
                      d = l.products,
                      u = l.flightNotes,
                      m = l.priceChange,
                      p = l.type,
                      f = l.xPageNotice,
                      g = l.springFestival,
                      x = (l.announcement || {}).entrancePopup,
                      N = B.Z.findMaxMin(
                        d.map(function (e) {
                          return parseInt(e.apr);
                        }),
                        "min"
                      ),
                      Z = d.some(function (e) {
                        return e.hidden;
                      }),
                      w = we[p] || 0;
                    try {
                      K.ubtTrace("O_TRN_ZxFlight_Middle_Basic", {
                        TriggerType: "Load",
                        FlightWay: X.DH[w],
                        Price_List:
                          null == d
                            ? void 0
                            : d.map(function (e) {
                                var t, n;
                                return {
                                  Price: e.apr,
                                  Storey: e.storey,
                                  RecommendProductList:
                                    null === (t = e.recommendInfo) ||
                                    void 0 === t ||
                                    null === (n = t.recommendProductList) ||
                                    void 0 === n
                                      ? void 0
                                      : n.map(function (e) {
                                          var t;
                                          return {
                                            Price: e.apr,
                                            Name:
                                              null ===
                                                (t = e.productTipsInfo) ||
                                              void 0 === t
                                                ? void 0
                                                : t.subTipContent,
                                          };
                                        }),
                                };
                              }),
                        Sequence: s,
                      });
                    } catch (e) {
                      console.log(e);
                    }
                    var v = (s[0] || {}).flights,
                      T = void 0 === v ? [] : v;
                    0 == w &&
                      K.setState({
                        dptName: T[0].dptName,
                        arrName: T[0].arrName,
                      }),
                      K.setState({
                        segments: J.Z.handleFlightDataInBook(s),
                        products: d.map(function (e) {
                          return (0,
                          b.Z)((0, b.Z)({}, e), {}, { notes: e.notes || "" });
                        }),
                        flightNotes: u,
                        cabinsHidden: Z,
                        tripType: w,
                        lowestPrice: N,
                        dptTime:
                          null === (t = T[0]) || void 0 === t
                            ? void 0
                            : t.dptTime,
                        springFestival: g,
                      }),
                      K.setState({ xPageNotice: f });
                    var V = (f || {}).floatLists;
                    (null == V ? void 0 : V.length) > 0 &&
                      1 == (null == x ? void 0 : x.sw) &&
                      Y(V),
                      ne(),
                      0 == w && Ze();
                    var k = ae.mD.getAttr("toastTime");
                    if (
                      ((!k || Date.now() - k > 12e4) &&
                        (ae.mD.setAttr("toastTime", Date.now()),
                        (function () {
                          var e = K.getState(),
                            t = e.segments,
                            n = e.lowestPrice,
                            i = e.sourcePage,
                            a = t[0].flights[0],
                            r = a.dptCode,
                            c = a.arrCode,
                            o = a.dptTime,
                            l = a.flightNo,
                            s = {
                              data: {
                                source: "trainList" === i ? 4 : 0,
                                departureCityCode: r,
                                arrivalCityCode: c,
                                departDateTime: C()(o).format("YYYY-MM-DD"),
                                returnDateTime: "",
                                flightNumber: l,
                                price: n,
                                pageTypes: 2,
                              },
                            };
                          (0, ie.xw)(s).then(function (e) {
                            1 === e.resultCode &&
                              e.data.infos &&
                              e.data.infos.length > 0 &&
                              (0, y.showToast)(e.data.infos[0]);
                          });
                        })()),
                      null != s &&
                        null !== (n = s[0]) &&
                        void 0 !== n &&
                        null !== (i = n.flights) &&
                        void 0 !== i &&
                        i[0])
                    ) {
                      var P,
                        S,
                        I =
                          null == s ||
                          null === (P = s[0]) ||
                          void 0 === P ||
                          null === (S = P.flights) ||
                          void 0 === S
                            ? void 0
                            : S[0];
                      K.setState({
                        surpriseParams: {
                          version: 3,
                          source: ve[p],
                          minPrice: N,
                          depDate: C()(I.dptTime).format("YYYY-MM-DD"),
                          depCityCode: I.dptCode,
                          arrCityCode: I.arrCode,
                        },
                      });
                    }
                    (h.IK.forceListRefresh = !0),
                      [X.JH.NONE, X.JH.COVER].includes(
                        null == m ? void 0 : m.type
                      ) ||
                        (0, pe.P)({
                          priceChange: m,
                          onCancel: function () {
                            Ne();
                          },
                          onConfirm: function () {},
                        }),
                      ge();
                  } else
                    (0, y.showModal)(c || "网络异常，请稍后重试").then(
                      function (e) {
                        e.confirm && Ne();
                      }
                    );
                }
              });
            },
            Te = function (e) {
              var t = { segmentInfos: e };
              (0, ie._S)(t).then(function (e) {
                if (K.isActive()) {
                  var t = e.resultCode,
                    n = e.data;
                  if (1 == t) {
                    var i = (void 0 === n ? [] : n).filter(function (e) {
                      return he.includes(e.bannerType);
                    });
                    K.setState({ bookxBanner: i });
                  }
                }
              });
            },
            Ve = (function () {
              var e = (0, w.Z)(
                (0, Z.Z)().mark(function e() {
                  var t,
                    n,
                    i,
                    a,
                    r,
                    c,
                    o,
                    l,
                    s,
                    d,
                    u,
                    p,
                    f,
                    h,
                    g,
                    x,
                    N,
                    w,
                    v,
                    b,
                    y,
                    B;
                  return (0, Z.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = K.getRouterParams()),
                            (n = t.token),
                            (i = void 0 === n ? "" : n),
                            (a = t.tripType),
                            (r = void 0 === a ? "0" : a),
                            (c = t.sourcePage),
                            (o = void 0 === c ? "flight_list" : c),
                            (l = t.fromPage),
                            (s = void 0 === l ? "" : l),
                            (d = t.xType),
                            (u = void 0 === d ? "flight" : d),
                            (p = t.navTitle),
                            (f = void 0 === p ? "" : p),
                            (h = t.data || {}),
                            K.setPageTitle(decodeURIComponent(f)),
                            "string" == typeof h)
                          )
                            try {
                              h = JSON.parse(decodeURIComponent(h));
                            } catch (e) {
                              console.log(e);
                            }
                          return (
                            console.log(h),
                            (x = (g = h).query),
                            (N = void 0 === x ? {} : x),
                            (w = g.isStu),
                            (v = void 0 !== w && w),
                            (b = N.segments),
                            (y = void 0 === b ? [] : b),
                            K.setState({
                              xType: u,
                              token: decodeURIComponent(i),
                              sourcePage: o,
                              tripType: parseInt(r),
                              query: N,
                              isStu: v,
                            }),
                            (B = y.map(function (e) {
                              return {
                                departureCityCode: e.dptCode,
                                arriveCityCode: e.arrCode,
                                departureDate: e.dptDate,
                                departTime: e.departTime,
                                arriveTime: e.arriveTime,
                              };
                            })),
                            Te(B),
                            "airTrain" === u
                              ? (xe(), m().hideShareMenu())
                              : be(),
                            (e.next = 14),
                            (0, T.M9)({ force: !0 })
                          );
                        case 14:
                          V.Z.recordFromPage(s);
                        case 15:
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
            ye = function () {
              var e = K.getState().tripTips;
              e.textOverflow &&
                K.setState({
                  tripTips: (0, b.Z)(
                    (0, b.Z)({}, e),
                    {},
                    { showAll: !e.showAll }
                  ),
                });
            },
            Be = function (e) {
              var t = e.xToken,
                n = e.product,
                i = e.index,
                a = e.oToken;
              return (
                (0, y.showLoading)(),
                (0, ie.Pk)({ cardCode: t, scene: 202 })
                  .then(function (e) {
                    if (K.isActive()) {
                      var r = e.resultCode,
                        c = e.vipDetailInfoList;
                      if (1 == r && (null == c ? void 0 : c.length) > 0) {
                        var o = c.find(function (e) {
                          return e.cardCode == t;
                        });
                        o &&
                          ((o.additionalOptions = {
                            product: n,
                            productIndex: i,
                            xtoken: a,
                          }),
                          K.setState({ vipDetail: o }));
                      }
                    }
                  })
                  .catch(function (e) {
                    return console.log(e);
                  })
                  .finally(function () {
                    return (0, y.hideLoading)();
                  })
              );
            },
            ke = (function () {
              var e = (0, w.Z)(
                (0, Z.Z)().mark(function e(t) {
                  var n, i, a, r, c;
                  return (0, Z.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((i = K.getState()),
                            (a = i.vipDetail),
                            (r = t.xToken),
                            (c = t.oToken),
                            (null == a ? void 0 : a.cardCode) === r &&
                              (null == a ||
                              null === (n = a.additionalOptions) ||
                              void 0 === n
                                ? void 0
                                : n.xtoken) === c)
                          ) {
                            e.next = 5;
                            break;
                          }
                          return (e.next = 5), Be(t);
                        case 5:
                          K.setState({ showVip: !0 });
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
            Ce = function (e) {
              var t = e.productType,
                n = e.product;
              if (
                ("MEMBERSHIP" == t && ke(e),
                "PACKAGE" == t &&
                  (function (e) {
                    var t = e.action,
                      n = e.product,
                      i = e.index,
                      a = e.xToken,
                      r = e.productIds;
                    "detail" == t &&
                      K.setState({
                        packageProductDetailVisible: !0,
                        packageProductInfo: {
                          xToken: a,
                          product: n,
                          productIndex: i,
                        },
                      }),
                      "change" == t &&
                        K.setState({
                          changePackagePopVisible: !0,
                          packageProductInfo: (0, b.Z)(
                            (0, b.Z)({}, K.getState().packageProductInfo),
                            {},
                            {
                              product: n,
                              productIndex: i,
                              productIds: r,
                              xToken: a,
                            }
                          ),
                        });
                  })(e),
                "TRAIN_COUPON" === t)
              ) {
                var i = ((n || {}).eProduct || {}).ftc;
                (0, fe.Z)({ data: i, fromPage: "bookx" });
              }
            },
            Xe = function (e) {
              var t = e.cabinDetail,
                n = e.fillInPageSegments,
                i = e.requestParams,
                a = K.getState(),
                r = a.tripType,
                c = a.segments,
                o = a.query,
                l = a.products.length;
              K.navigateTo({
                url: "/pages/flight/book/book?tripType="
                  .concat(r, "&cabinQuantity=")
                  .concat(l),
                data: {
                  cabinDetail: t,
                  segments: n || c,
                  query: o,
                  requestParams: i,
                },
              });
            },
            Pe = function (e) {
              var t = e.token,
                n = e.extension,
                i = e.options,
                a = {
                  data: {
                    policyVersion: 14,
                    source: "trainList" === K.getState().sourcePage ? 4 : 0,
                    token: t,
                    options: i,
                    extension: n,
                  },
                  head: { extension: [{ name: "correctVersion", value: 30 }] },
                };
              (0, y.showLoading)("获取航班详情..."),
                (0, ie.rl)(a)
                  .then(function (e) {
                    if (K.isActive()) {
                      console.log(e);
                      var t = e || {},
                        n = t.resultCode,
                        i = t.resultMessage,
                        r = t.data,
                        c = void 0 === r ? {} : r;
                      if (1 !== n)
                        return (
                          (0, y.hideLoading)(),
                          void (0, y.showModal)(
                            i || "网络异常，请稍后重试"
                          ).then(function (e) {
                            e.confirm && Ne();
                          })
                        );
                      var o,
                        l = c,
                        s = c.priceChange,
                        d = c.segments;
                      try {
                        o = J.Z.handleFlightDataInBook(d);
                      } catch (e) {
                        console.log(e);
                      }
                      s && [2, 3].includes(s.changeType)
                        ? ((h.IK.forceListRefresh = !0),
                          (0, pe.P)({
                            priceChange: s,
                            onCancel: function () {
                              K.setState({ xCabinCacheUsage: 1 }), be();
                            },
                            onConfirm: function () {
                              Xe({
                                cabinDetail: l,
                                fillInPageSegments: o,
                                requestParams: a,
                              });
                            },
                          }))
                        : Xe({
                            cabinDetail: l,
                            fillInPageSegments: o,
                            requestParams: a,
                          });
                    }
                  })
                  .catch(function (e) {
                    (0, y.showModal)(e || "网络异常，请稍后重试");
                  })
                  .finally(function () {
                    (0, y.hideLoading)();
                  });
            },
            Se = function (e) {
              var t,
                n,
                i,
                a = e.product,
                r = e.index,
                c = e.xtoken,
                o = e.productId,
                l = K.getState().query.extension,
                s = void 0 === l ? [] : l,
                d = a.token,
                u = [];
              c
                ? (u = Array.isArray(c)
                    ? c.map(function (e) {
                        return { xtoken: e };
                      })
                    : [{ xtoken: c }])
                : (u = (a.rcrxp || [])
                    .filter(function (e) {
                      return e.selected;
                    })
                    .map(function (e) {
                      return { xtoken: e.xtoken };
                    }));
              Pe({
                token: d,
                extension: [].concat((0, v.Z)(s), [
                  { key: "XPageVersion202102", value: "Y" },
                ]),
                options: u,
              }),
                J.Z.setFlightUbtTrace("flt_middle_submit_button", {
                  Price: a.apr,
                  Storey: a.storey,
                  Xproductlist: o
                    ? [o]
                    : u.map(function (e) {
                        return e.xtoken;
                      }),
                  seq: r + 1,
                  choose:
                    (null === (t = a.options) || void 0 === t
                      ? void 0
                      : t.length) > 1,
                  Options:
                    null === (n = a.options) ||
                    void 0 === n ||
                    null ===
                      (i = n.filter(function (e) {
                        return e.xtoken == c;
                      })) ||
                    void 0 === i
                      ? void 0
                      : i.map(function (e) {
                          return e.name;
                        }),
                });
            },
            Ie = (function () {
              var e = (0, w.Z)(
                (0, Z.Z)().mark(function e(t) {
                  var n, i, a, r, c, o;
                  return (0, Z.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((n = !0),
                            (i = t.product),
                            (a = K.getState() || {}),
                            !(r = a.springFestival))
                          ) {
                            e.next = 9;
                            break;
                          }
                          return (
                            (c = r.type),
                            (o = 4 == c ? se : le),
                            (e.next = 8),
                            ue(i, o)
                          );
                        case 8:
                          n = e.sent;
                        case 9:
                          if (!i.newUserNormalPop) {
                            e.next = 13;
                            break;
                          }
                          return (
                            (e.next = 12),
                            (0, S.v)({
                              source: X.cK.XPAGE_BOOK,
                              ext: { price: i.apr },
                            })
                          );
                        case 12:
                          n = !e.sent;
                        case 13:
                          if (n) {
                            e.next = 15;
                            break;
                          }
                          return e.abrupt("return");
                        case 15:
                          Se(t);
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
            De = function (e) {
              var t,
                n = e.product,
                i = e.index,
                a = Q({ product: n }).rescheduleRefundRemark,
                r = K.getState(),
                c = r.dptName,
                o = r.arrName,
                l = r.xType,
                s = r.products,
                d = !1;
              if ("flight" == l) {
                var u,
                  m,
                  p,
                  f,
                  h,
                  g =
                    (null == n || null === (u = n.options) || void 0 === u
                      ? void 0
                      : u.length) > 0,
                  x = !(
                    null == n ||
                    null === (m = n.eProduct) ||
                    void 0 === m ||
                    !m.productType
                  ),
                  N =
                    (null === (p = s[i].recommendInfo) ||
                    void 0 === p ||
                    null === (f = p.recommendProductList) ||
                    void 0 === f
                      ? void 0
                      : f.length) > 0;
                (d = !(g || x || N)) &&
                  K.dispatch("refundXProductsModel").setState({
                    index: i,
                    product: n,
                    selectedXProducts:
                      (null === (h = n.rcrxp) || void 0 === h
                        ? void 0
                        : h.filter(function (e) {
                            return e.selected;
                          })) || [],
                  });
              }
              var Z =
                (null == n || null === (t = n.rcrxp) || void 0 === t
                  ? void 0
                  : t.length) > 0;
              (0, P.yV)({
                initialView: 0,
                rescheduleRefundRemark: a,
                dptName: c,
                arrName: o,
                height: "80vh",
                hasBottom: d,
                hasRefundXProducts: Z,
                renderBottom: d
                  ? function () {
                      return (0, R.tZ)(G, {});
                    }
                  : null,
                renderRefundXProducts: Z
                  ? function () {
                      return (0, R.tZ)($, { product: n, index: i });
                    }
                  : null,
                beforeClose: function () {
                  K.dispatch("refundXProductsModel").setState({
                    index: 0,
                    product: {},
                    selectedXProducts: [],
                  });
                },
              });
            },
            Ae = n(55916),
            Me = function () {
              m().reLaunch({
                url: "/pages/trnshare/grablist/grablist?orderType=flightOrder&fromPage=xcx_jk_x",
              });
            },
            Re = s.default.memo(function (e) {
              var t = e.onClose;
              return (0,
              R.BX)(p.View, { className: "pop-saving-tips", children: [(0, R.tZ)(p.Text, { className: "ifont-selected iconfont " + f.default.zxTyStr }), (0, R.tZ)(p.View, { className: "tit", children: "航班监控成功，降价提醒" }), (0, R.tZ)(p.Image, { src: "https://pic.c-ctrip.com/train/zt/flight/pop-guide-jiankong-" + f.default.zxTyStr + ".png", className: "img" }), (0, R.BX)(p.View, { className: "pop-btn3 flex", children: [(0, R.tZ)(p.Button, { className: "flex-1 btn-cancel " + f.default.zxTyStr, id: "AcCG", onClick: Me, children: "去看看" }), (0, R.tZ)(p.Button, { className: "flex-1 btn-primary", id: "AcCH", onClick: t, children: "我知道了" })] })] });
            }),
            _e = function (e) {
              T.ZP.isLogin ||
                T.ZP.doLogin().then(function () {
                  Ze();
                }),
                e
                  ? (function () {
                      var e = {
                        data: { orderNumber: K.getState().monitorOrderNumber },
                      };
                      (0, Ae.Xe)(e)
                        .then(function (e) {
                          var t = e.resultCode,
                            n = e.resultMessage;
                          1 === t
                            ? ((0, y.showToast)("航班监控已取消"),
                              K.setState({
                                monitoring: !1,
                                monitorOrderNumber: "",
                              }))
                            : (0, y.showModal)(n || "网络异常，请稍后重试");
                        })
                        .catch(function () {
                          (0, y.showModal)("网络异常，请稍后重试");
                        });
                    })()
                  : (function () {
                      var e = K.getState(),
                        t = e.segments,
                        n = e.lowestPrice;
                      if (e.monitorOrderNumber)
                        return (0, y.showToast)("您已关注过该航班~");
                      var i = t[0].flights[0],
                        a = i.dptTime,
                        r = i.arrTime,
                        c = i.dptCode,
                        o = i.arrCode,
                        l = i.dptACode,
                        s = i.arrACode,
                        d = i.dptTrm,
                        u = i.arrTrm,
                        m = i.flightNo,
                        p = C()(a).format("YYYY-MM-DD"),
                        f = {
                          data: {
                            departureCityCode: c,
                            arrivalCityCode: o,
                            departureAirportCodes: l,
                            arrivalAirportCodes: s,
                            departureTerminals: d,
                            arrivalTerminals: u,
                            contactPhone: T.ZP.username || "",
                            departureDateRange: p,
                            historyPriceDate: p,
                            specifiedFlightNumbers: m,
                            takeOffTimeFrom: C()(a).format("HH:mm"),
                            takeOffTimeTo: C()(r).format("HH:mm"),
                            fromPage: "xcx_bookx",
                            nonstop: !1,
                            orderType: 2,
                            historyPrice: n,
                            acceptablePrice: n - 1,
                          },
                        };
                      (0, ie.km)(f, { checkLogin: !1, checkFrameworkLogin: !1 })
                        .then(function (e) {
                          var t = e.resultCode,
                            n = e.resultMessage,
                            i = e.data;
                          console.log(e),
                            1 === t && i.orderNumber
                              ? (K.showCommonDialog({
                                  maskClose: !1,
                                  hideTitle: !0,
                                  hideButton: !0,
                                  content: function (e) {
                                    var t = e.onClose;
                                    return (0, R.tZ)(Re, { onClose: t });
                                  },
                                  className: "flt-monitor-dialog",
                                }),
                                K.setState({
                                  monitoring: !0,
                                  monitorOrderNumber: i.orderNumber,
                                }))
                              : (0, y.showModal)(n || "网络异常，请稍后重试");
                        })
                        .catch(function () {
                          (0, y.showModal)("网络异常，请稍后重试");
                        });
                    })();
            },
            Fe = s.default.memo(function (e) {
              var t = e.xPageNotice,
                n = t.tipLists;
              return (0, R.BX)(p.View, {
                className:
                  "bookx-announcement top-banner flex-1 flex-align-items-center",
                id: "AcCI",
                onClick: function () {
                  return (function (e) {
                    var t = (e || {}).floatLists;
                    Y(t);
                  })(t);
                },
                children: [
                  (0, R.tZ)(p.View, {
                    className: "tip-list flex-1",
                    children: n.map(function (e, t) {
                      return (0,
                      R.tZ)(p.View, { className: "tip", children: (0, R.tZ)(A.ZtRichText, { nodes: B.Z.getEllipsisRichText("".concat(e.title, '<span style="font-family: PingFangSC-Regular">').concat(e.content, "</span>")), space: "nbsp" }) }, t);
                    }),
                  }),
                  (0, R.tZ)(p.Text, { className: "ifont-arr iconfont" }),
                ],
              });
            }),
            Ee = s.default.memo(function (e) {
              var t = e.isVertical,
                n = e.monitoring;
              return (0, R.BX)(p.View, {
                className:
                  "monitor-reminder top-banner flex-align-items-center ".concat(
                    t ? "flex-column" : ""
                  ),
                id: "AcCJ",
                onClick: function () {
                  return _e(n);
                },
                children: [
                  (0, R.tZ)(p.Text, {
                    className: "remind-icon ".concat(
                      n ? "ifont2-reminded" : "ifont2-reminder",
                      " iconfont2"
                    ),
                  }),
                  (0, R.tZ)(p.Text, {
                    className: "tip",
                    style: t ? "margin-top: 4rpx;" : "margin-left: 6rpx;",
                    children: n ? "取消提醒" : "降价提醒",
                  }),
                ],
              });
            }),
            Ye = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.pageModel;
                return {
                  xPageNotice: t.xPageNotice,
                  monitoring: t.monitoring,
                  tripType: t.tripType,
                };
              })(function (e) {
                var t = e.xPageNotice,
                  n = e.monitoring,
                  i = e.tripType;
                if (t && t.tipLists)
                  return (0, R.BX)(p.View, {
                    className: "bookx-top-area flex",
                    children: [
                      (0, R.tZ)(Fe, { xPageNotice: t }),
                      0 == i &&
                        (0, R.tZ)(Ee, {
                          monitoring: n,
                          isVertical: t.tipLists.length > 1,
                        }),
                    ],
                  });
              })
            ),
            Le = n(1734),
            qe = ["去程", "返程"],
            He = ["第1程", "第2程"],
            ze = function (e) {
              var t = e.tag,
                n = e.dpt,
                i = e.arr,
                a = e.monthDay,
                r = e.weekDay,
                c = e.time;
              return (0, R.BX)(p.View, {
                className: "mult-seg-title flex flex-align-items-center",
                children: [
                  (0, R.tZ)(p.View, {
                    className: "seg-tag flex-center",
                    children: t,
                  }),
                  (0, R.BX)(p.View, {
                    className: "dpt-arr",
                    children: [n, "-", i],
                  }),
                  (0, R.BX)(p.View, {
                    className: "date",
                    children: [a, " ", r],
                  }),
                  (0, R.BX)(p.View, { className: "time", children: ["共", c] }),
                ],
              });
            },
            Oe = function (e) {
              var t = e.segment,
                n = t.dtls,
                i = t.nfyt,
                a = t.nfyc;
              return (0, R.tZ)(p.View, {
                className:
                  "flight-segment-comp transfer-banner flex-align-items-center",
                children: (0, R.BX)(p.View, {
                  className: "banner-content flex-align-items-center",
                  id: "AcBX",
                  onClick: function () {
                    return (function (e) {
                      var t = e.title,
                        n = e.content;
                      K.navigateTo({
                        url: "/pages/flightSecondary/productdetail/productdetail?type=richText",
                        data: { title: t, richTextContent: n },
                      });
                    })({ title: i, content: a });
                  },
                  children: [
                    (null == n ? void 0 : n.length) > 0 &&
                      (0, R.tZ)(p.View, {
                        className: "basic-item",
                        style: "color: #3C5A86;",
                        children: n[0],
                      }),
                    (0, R.tZ)(p.View, {
                      className: "basic-item",
                      style: "color: #999;",
                      children: i,
                    }),
                  ],
                }),
              });
            },
            je = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.pageModel;
                return {
                  tripType: t.tripType,
                  segments: t.segments,
                  dptTime: t.dptTime,
                };
              })(function (e) {
                var t = e.segments,
                  n = e.tripType,
                  i = n == X.zM.round || n == X.zM.multi,
                  a = [];
                i && (a = n === X.zM.round ? qe : He);
                var r = function (e) {
                  var t,
                    n,
                    r,
                    c,
                    o = e.segment,
                    l = o.flights,
                    d = void 0 === l ? [] : l,
                    u = o.segNo,
                    m = o.ct,
                    f = a[u - 1],
                    h = (null == d ? void 0 : d.length) > 1,
                    g = d[0] || {},
                    x = g.dptMonthDay,
                    N = g.dptWeekDay,
                    Z =
                      (null === (t = d[0]) || void 0 === t
                        ? void 0
                        : t.dptTime) || "",
                    w =
                      (null === (n = d[0]) || void 0 === n
                        ? void 0
                        : n.dptName) || "",
                    v =
                      h && (null == d ? void 0 : d.length) > 1
                        ? null === (r = d[1]) || void 0 === r
                          ? void 0
                          : r.arrName
                        : null === (c = d[0]) || void 0 === c
                        ? void 0
                        : c.arrName;
                  return (0, R.BX)(p.View, {
                    className: "mult-flt-seg-one",
                    children: [
                      i
                        ? (0, R.tZ)(ze, {
                            tag: f,
                            dpt: w,
                            arr: v,
                            monthDay: x,
                            weekDay: N,
                            time: m,
                          })
                        : (0, R.tZ)(R.HY, {}),
                      null == d
                        ? void 0
                        : d.map(function (e, t) {
                            return (0,
                            R.BX)(s.default.Fragment, { children: [(0, R.tZ)(Le.Z, { flight: e, departTime: Z }), h && 0 == t && (0, R.tZ)(Oe, { segment: o })] }, t);
                          }),
                    ],
                  });
                };
                return (0, R.tZ)(p.View, {
                  className: "node-isolate-flight-detail",
                  children:
                    null == t
                      ? void 0
                      : t.map(function (e, t) {
                          return (0,
                          R.BX)(s.default.Fragment, { children: [(0, R.tZ)(r, { segment: e }), 0 == t && i && (0, R.tZ)(p.View, { className: "segment-divider" })] }, t);
                        }),
                });
              })
            ),
            Ue = function (e) {
              var t = e.virtualInfo,
                n = t.productPhone,
                i = t.productNotes;
              return (0, R.BX)(p.View, {
                className: "flt-notes-pop-content",
                children: [
                  (0, R.tZ)(p.View, {
                    className: "cont-item",
                    children: (0, R.tZ)(A.ZtRichText, {
                      nodes: n,
                      space: "nbsp",
                    }),
                  }),
                  i.map(function (e, t) {
                    return (0,
                    R.BX)(p.View, { className: "prd-note cont-item", children: [(0, R.tZ)(p.View, { className: "prd-note-tit flex-align-items-center", children: e.title }), (0, R.tZ)(p.View, { className: "prd-note-txt", children: e.text })] }, t);
                  }),
                ],
              });
            },
            Ke = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.pageModel;
                return { flightNotes: t.flightNotes, segments: t.segments };
              })(function (e) {
                var t = e.flightNotes,
                  n = e.segments,
                  i = (null == t ? void 0 : t[0]) || {},
                  a = i.action,
                  r = i.titlePlus,
                  c = i.flightNoteModels,
                  o = i.virtualInfo;
                return (0, R.tZ)(p.View, {
                  className: "node-isolate-flight-notes",
                  children:
                    (null == c ? void 0 : c.length) > 0 &&
                    (null == n ? void 0 : n.length) > 0 &&
                    (0, R.BX)(p.View, {
                      className: "flt-note-banner flex-align-items-center",
                      id: "AcBZ",
                      onClick: function () {
                        return (function (e) {
                          var t = e.action,
                            n = e.virtualInfo;
                          "virtual" == t &&
                            K.showCommonDrawer({
                              title: "通程航班专享",
                              content: function (e) {
                                var t = e.onClose;
                                return (0, R.tZ)(Ue, {
                                  onClose: t,
                                  virtualInfo: n,
                                });
                              },
                              className: "flt-notes-pop",
                            });
                        })({ action: a, virtualInfo: o });
                      },
                      children: [
                        (0, R.tZ)(p.View, {
                          className: "f-title",
                          children: (0, R.tZ)(A.ZtRichText, {
                            nodes: r + ":",
                            space: "nbsp",
                          }),
                        }),
                        (0, R.tZ)(p.View, {
                          className: "notes flex-align-items-center flex-1",
                          children: c.map(function (e, t) {
                            return (0,
                            R.BX)(p.View, { className: "note-item flex-align-items-center", children: [(0, R.tZ)(p.Image, { className: "note-icon", src: e.icon }), (0, R.tZ)(p.View, { className: "note-txt", children: e.text })] }, t);
                          }),
                        }),
                        "virtual" == a &&
                          (0, R.tZ)(p.Text, {
                            className:
                              "ifont-arr iconfont flex-align-items-center",
                          }),
                      ],
                    }),
                });
              })
            ),
            We = function (e) {
              e && m().navigateTo({ url: e });
            },
            $e = { borderRadius: "32rpx 32rpx 0 0" },
            Ge = function (e) {
              var t = e.vipDetail;
              return {
                terminaltype: "Applets",
                line: "FLT",
                cardCode: t.cardCode,
                type: t.cardCodeType,
                grade: t.grade,
                cardPrice: t.openVipDescEntity.salePrice,
                scene: "flightXPage",
              };
            },
            Je = function () {
              K.setState({ showVip: !1 });
            },
            Qe = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.pageModel;
                return { visible: t.showVip, vipDetail: t.vipDetail };
              })(function (e) {
                var t,
                  n,
                  i = e.visible,
                  a = e.vipDetail;
                (0, s.useEffect)(
                  function () {
                    if (i && a) {
                      var e = Ge({ vipDetail: a });
                      K.ubtTrace(
                        "O_TRN_ZxFlight_Show",
                        (0, b.Z)({ bizKey: "vipActionBarShow" }, e)
                      );
                    }
                  },
                  [i, a]
                );
                var r = a || {},
                  c = r.title,
                  o = r.desc,
                  l = r.vipPackageEntity,
                  d = r.openVipDescEntity,
                  u = r.moreOtherRightEntity,
                  m = r.additionalOptions,
                  f = l || {},
                  h = f.productLineRight,
                  g = f.otherRight,
                  x = d || {},
                  N = x.salePrice,
                  Z = x.originPriceDesc,
                  w = x.buttonName,
                  v = x.unit,
                  T = function (e) {
                    var t = Ge({ vipDetail: a });
                    K.ubtTrace(
                      "O_TRN_ZxFlight_Click",
                      (0, b.Z)({ bizKey: "vipActionBarBuyClick" }, t)
                    ),
                      (function (e) {
                        Je();
                        var t = e.additionalOptions,
                          n = t.product,
                          i = t.productIndex,
                          a = t.xtoken;
                        Se({ product: n, index: i, xtoken: a });
                      })(e);
                  };
                return (0, R.tZ)(A.ZtDrawer, {
                  show: i,
                  onClose: Je,
                  onWrapClose: Je,
                  drawerStyle: $e,
                  children:
                    a &&
                    (0, R.BX)(p.View, {
                      className: "common-membership-pop",
                      children: [
                        (0, R.BX)(p.View, {
                          className: "pop-vipbuy-hd",
                          children: [
                            (0, R.tZ)(p.View, {
                              className: "tit flex-center",
                              children: c,
                            }),
                            (0, R.tZ)(A.ZtRichText, {
                              className: "txt",
                              nodes: B.Z.convertAppTextToHtmlStr(o),
                            }),
                          ],
                        }),
                        (0, R.BX)(p.View, {
                          className: "pop-vipbuy-bd",
                          children: [
                            (0, R.BX)(p.View, {
                              className: "tit flex-align-items-center",
                              children: [
                                (0, R.tZ)(p.View, {
                                  className: "txt flex-1",
                                  children: h.title,
                                }),
                                (0, R.tZ)(p.Text, { children: h.desc }),
                              ],
                            }),
                            (0, R.tZ)(p.View, {
                              className: "pop-equity-train flex",
                              children:
                                null == h ||
                                null === (t = h.rightList) ||
                                void 0 === t
                                  ? void 0
                                  : t.map(function (e, t) {
                                      return (0,
                                      R.BX)(p.View, { className: "item", style: { background: "url(".concat(e.bgUrl, ") no-repeat"), backgroundSize: "cover" }, children: [(0, R.tZ)(p.View, { className: "hd", children: e.name }), (0, R.tZ)(p.View, { className: "strong", children: e.valueDesc }), (0, R.tZ)(p.View, { className: "txt", children: e.desc })] }, t);
                                    }),
                            }),
                            (0, R.BX)(p.View, {
                              className: "tit flex-align-items-center",
                              children: [
                                (0, R.tZ)(p.View, {
                                  className: "txt flex-1",
                                  children: g.title,
                                }),
                                (0, R.tZ)(p.Text, { children: g.desc }),
                              ],
                            }),
                            (0, R.tZ)(p.View, {
                              className: "pop-equity-more flex",
                              children: (0, R.tZ)(p.View, {
                                className: "helper-container flex",
                                children:
                                  null == g ||
                                  null === (n = g.rightList) ||
                                  void 0 === n
                                    ? void 0
                                    : n.map(function (e, t) {
                                        return (0, R.BX)(
                                          p.View,
                                          {
                                            className:
                                              "item flex-1 flex-center",
                                            id: "AcBa",
                                            onClick: function () {
                                              return (function (e) {
                                                var t = e.rightDesc;
                                                if (t) {
                                                  var n = t.title,
                                                    i = t.rightDescList;
                                                  K.showCommonDrawer({
                                                    title: n,
                                                    content: i,
                                                  });
                                                }
                                              })(e);
                                            },
                                            children: [
                                              (0, R.tZ)(p.Image, {
                                                className: "icon",
                                                src: e.iconUrl,
                                              }),
                                              (0, R.BX)(p.View, {
                                                className: "cont",
                                                children: [
                                                  (0, R.tZ)(p.View, {
                                                    className: "strong",
                                                    children: e.name,
                                                  }),
                                                  (0, R.tZ)(p.View, {
                                                    className: "txt",
                                                    children: e.desc,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          t
                                        );
                                      }),
                              }),
                            }),
                            u &&
                              (0, R.BX)(p.View, {
                                className: "pop-vipbuy-copywriting",
                                id: "AcBb",
                                onClick: function () {
                                  We(u.jumpUrl);
                                },
                                children: [
                                  u.moreOtherRightDesc,
                                  (0, R.tZ)(p.Text, {
                                    className: "ifont-arr iconfont",
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, R.tZ)(p.View, {
                          className: "pop-vipbuy-botm",
                          children: (0, R.BX)(p.View, {
                            className:
                              "pop-vipbuy-botm-bd flex-align-items-center",
                            children: [
                              (0, R.tZ)(p.View, {
                                className: "cont flex-1",
                                children: (0, R.BX)(p.View, {
                                  className: "tit",
                                  children: [
                                    (0, R.tZ)(p.Text, {
                                      className: "strong",
                                      children: N,
                                    }),
                                    (0, R.BX)(p.Text, {
                                      className: "b",
                                      children: ["/", v],
                                    }),
                                    (0, R.tZ)(p.Text, {
                                      className: "s",
                                      children: Z,
                                    }),
                                  ],
                                }),
                              }),
                              (0, R.tZ)(p.Button, {
                                className: "btn-submit",
                                id: "AcBc",
                                onClick: function () {
                                  return T({ additionalOptions: m });
                                },
                                children: w,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                });
              })
            ),
            et = n(70352),
            tt = function (e) {
              var t = e.isShowNewCoupon;
              K.setState({ isShowNewCoupon: t });
            },
            nt = function () {
              K.setState({ isShowNewCoupon: !1 });
            },
            it = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.pageModel;
                return {
                  surpriseParams: t.surpriseParams,
                  isShowNewCoupon: t.isShowNewCoupon,
                };
              })(function (e) {
                var t = e.surpriseParams,
                  n = e.isShowNewCoupon;
                return (0,
                R.tZ)(p.View, { className: "node-isolate-allowance-dialog", children: t.source && (0, R.tZ)(et.Z, { params: t, outerShow: n, getCouponInfomation: tt, handleCouponClose: nt, handleReceive: be }) });
              })
            ),
            at = n(24383),
            rt = function () {
              K.setState({ announcementShow: !1 });
            },
            ct = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.pageModel;
                return {
                  announcementShow: t.announcementShow,
                  announcementPop: t.announcementPop,
                  announcementContent: t.announcementContent,
                };
              })(function (e) {
                var t = e.announcementShow,
                  n = e.announcementPop,
                  i = e.announcementContent;
                return (0,
                R.tZ)(at.Z, { isShow: t, entrancePopup: n, entranceDrawerTips: i, onClose: rt });
              })
            ),
            ot = n(2809),
            lt = n(26862),
            st = function (e) {
              var t = e.product,
                n = e.index,
                i = e.productIds,
                a = e.xToken;
              B.Z.sendUbtTrace("P0309_SP0000_M0002_ID0001_click"),
                Ce({
                  product: t,
                  index: n,
                  xToken: a,
                  productType: "PACKAGE",
                  action: "change",
                  productIds: i,
                });
            },
            dt = s.default.memo(function (e) {
              var t = e.product,
                n = e.index,
                i = e.eProduct,
                a = i.oToken,
                r = i.xToken,
                c = i.productType,
                o = i.icon,
                l = i.priceText,
                s = i.features,
                d = i.extensionProduct,
                u = i.changeable,
                m = i.productIds,
                f = "PACKAGE" == c;
              return (0, R.BX)(p.View, {
                className: "tabwidget-eproduct",
                children: [
                  (0, R.BX)(p.View, {
                    className: "product-head flex-align-items-center",
                    children: [
                      (0, R.BX)(p.View, {
                        className:
                          "product-title flex-1 flex-align-items-center",
                        children: [
                          (0, R.tZ)(p.Image, {
                            className: "product-icon",
                            src: o,
                            lazyLoad: !0,
                            mode: "heightFix",
                          }),
                          (0, R.tZ)(p.View, {
                            className: "price-text bd-1rpx",
                            children: (0, R.tZ)(A.ZtRichText, {
                              nodes: l || "",
                            }),
                          }),
                          f &&
                            u &&
                            (0, R.tZ)(p.View, {
                              className: "change-txt",
                              id: "AcBn",
                              onClick: function () {
                                return st({
                                  product: t,
                                  index: n,
                                  productIds: m,
                                  xToken: r,
                                });
                              },
                              children: "更换",
                            }),
                        ],
                      }),
                      (0, R.BX)(p.View, {
                        className: "detail-btn flex-align-items-center",
                        id: "AcBo",
                        onClick: function () {
                          return Ce({
                            product: t,
                            index: n,
                            oToken: a,
                            xToken: r,
                            productType: c,
                            action: "detail",
                          });
                        },
                        children: [
                          "查看详情",
                          (0, R.tZ)(p.Text, {
                            className: "ifont-arr iconfont",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, R.BX)(p.View, {
                    className: "product-cont",
                    children: [
                      (0, R.tZ)(p.ScrollView, {
                        className: "feature-list",
                        scrollX: !0,
                        scrollWithAnimation: !0,
                        children:
                          null == s
                            ? void 0
                            : s.map(function (e, t) {
                                return (0,
                                R.BX)(p.View, { className: "feature-item", children: [(0, R.tZ)(p.Image, { className: "feature-icon", src: e.icon }), (0, R.tZ)(p.View, { className: "feature-title", children: (0, R.tZ)(A.ZtRichText, { nodes: e.title || "" }) })] }, t);
                              }),
                      }),
                      d &&
                        (0, R.BX)(p.View, {
                          className: "ext-product flex-align-items-center",
                          children: [
                            (0, R.tZ)(p.Image, {
                              className: "ep-icon",
                              mode: "heightFix",
                              src: d.logoIcon,
                            }),
                            d.icon &&
                              (0, R.tZ)(p.Image, {
                                className: "ep-icon",
                                mode: "heightFix",
                                src: d.icon,
                              }),
                            (0, R.tZ)(p.View, {
                              className: "ep-txt",
                              children: (0, R.tZ)(A.ZtRichText, {
                                nodes: d.text,
                                space: "nbsp",
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, R.tZ)(p.Image, {
                    className: "bottom-img",
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/card/dashou/tag_bottom_vip@3x.png",
                  }),
                ],
              });
            }),
            ut = s.default.memo(function (e) {
              var t = e.options,
                n = e.currentIndex,
                i = e.product,
                a = e.index;
              return (0, R.tZ)(p.View, {
                className: "tabwidget-open ".concat(
                  a === n ? "open-chooose" : ""
                ),
                children: t.map(function (e, n) {
                  return (0, R.BX)(R.HY, {
                    children: [
                      (0, R.BX)(p.View, {
                        className:
                          "flex-align-items-center item-recomd ".concat(
                            f.default.zxTyStr
                          ),
                        children: [
                          (0, R.BX)(p.View, {
                            className: "lbox flex-align-items-center flex-1",
                            children: [
                              (0, R.BX)(p.View, {
                                className: "tag-area flex-center flex-column",
                                children: [
                                  (0, R.tZ)(p.Image, {
                                    src: e.img,
                                    className: "tag-img",
                                  }),
                                  e.price > 0 &&
                                    (0, R.BX)(p.Text, {
                                      className: "price-tag",
                                      children: [
                                        "+",
                                        (0, R.tZ)(lt.Z, {}),
                                        e.price,
                                      ],
                                    }),
                                  "PACKAGE" == e.type &&
                                    e.changeable &&
                                    (0, R.tZ)(p.Text, {
                                      className: "change-txt",
                                      id: "AcBp",
                                      onClick: function () {
                                        return st({
                                          product: i,
                                          index: a,
                                          productIds: e.productIds,
                                          xToken: e.xtoken,
                                        });
                                      },
                                      children: "更换",
                                    }),
                                ],
                              }),
                              (0, R.BX)(p.View, {
                                className: "cont",
                                id: "AcBq",
                                onClick: function () {
                                  return (function (e) {
                                    var t = e.product,
                                      n = e.index,
                                      i = e.type,
                                      a = e.xtoken,
                                      r = e.detailToken;
                                    if (["MEMBERSHIP", "PACKAGE"].includes(i)) {
                                      var c = a,
                                        o = "";
                                      "MEMBERSHIP" == i && ((c = r), (o = a)),
                                        Ce({
                                          product: t,
                                          index: n,
                                          xToken: c,
                                          oToken: o,
                                          productType: i,
                                          action: "detail",
                                        });
                                    }
                                  })({
                                    product: i,
                                    index: a,
                                    type: e.type,
                                    xtoken: e.xtoken,
                                    detailToken: e.detailToken,
                                  });
                                },
                                children: [
                                  (0, R.BX)(p.View, {
                                    className: "name flex-align-items-center",
                                    children: [
                                      e.name,
                                      e.tag &&
                                        (0, R.tZ)(p.Text, {
                                          className:
                                            "MEMBERSHIP" == e.type
                                              ? "line-tag bd-1rpx"
                                              : "fill-tag trigon left",
                                          children: e.tag,
                                        }),
                                    ],
                                  }),
                                  e.features &&
                                    e.features.map(function (e, t) {
                                      return (0,
                                      R.BX)(p.View, { className: "feat-txt flex-align-items-center", children: [e.icon && (0, R.tZ)(p.Image, { src: e.icon, className: "feat-icon", mode: "heightFix" }), (0, R.tZ)(A.ZtRichText, { nodes: e.title, space: "nbsp" })] }, t);
                                    }),
                                  e.descriptionUrl &&
                                    (0, R.tZ)(p.Text, {
                                      className: "feat-txt color-primary",
                                      id: "AcBr",
                                      onClick: function () {
                                        return (function (e, t) {
                                          var n = (t || {}).name;
                                          ce.Z.twebview({
                                            data: { url: e, title: n },
                                          });
                                        })(e.descriptionUrl, e);
                                      },
                                      children: "投保须知",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, R.tZ)(p.Button, {
                            className: "btn-primary btn-book",
                            id: "AcBs",
                            onClick: function () {
                              return Ie({
                                product: i,
                                index: a,
                                xtoken: e.xtoken,
                              });
                            },
                            children: "订",
                          }),
                        ],
                      }),
                      n !== t.length - 1 &&
                        (0, R.tZ)(p.View, { className: "divider-line" }),
                    ],
                  });
                }),
              });
            }),
            mt = s.default.memo(function (e) {
              var t = e.productList,
                n = e.productIndex,
                i = e.setProductIndex;
              return (0, R.tZ)(p.View, {
                className: "price-cell-list flex",
                children: t.map(function (e, t) {
                  var a, r, c;
                  return (0, R.BX)(
                    p.View,
                    {
                      className: "price-cell-item flex-1 ".concat(
                        t === n ? "cur" : "",
                        " flex-center flex-column"
                      ),
                      id: "AcBt",
                      onClick: function () {
                        return i(t);
                      },
                      children: [
                        (0, R.BX)(p.View, {
                          className: "tip-content",
                          children: [
                            (0, R.BX)(p.View, {
                              className: "title flex-center",
                              children: [
                                e.productTipsInfo.icon &&
                                  (0, R.tZ)(p.Image, {
                                    src: e.productTipsInfo.icon,
                                    className: "tip-icon",
                                    mode: "heightFix",
                                  }),
                                (0, R.tZ)(A.ZtRichText, {
                                  nodes:
                                    null ===
                                      (a = e.productTipsInfo.tipContent) ||
                                    void 0 === a
                                      ? void 0
                                      : a.replace("<span", '<span class="txt"'),
                                }),
                              ],
                            }),
                            (null === (r = e.productTipsInfo) || void 0 === r
                              ? void 0
                              : r.subTipContent) &&
                              (0, R.tZ)(p.View, {
                                className: "".concat(
                                  e.productTipsInfo.tipContent
                                    ? "sub-title"
                                    : ""
                                ),
                                children: (0, R.tZ)(A.ZtRichText, {
                                  nodes:
                                    null ===
                                      (c = e.productTipsInfo.subTipContent) ||
                                    void 0 === c
                                      ? void 0
                                      : c.replace("<span", '<span class="txt"'),
                                }),
                              }),
                          ],
                        }),
                        t == n &&
                          (0, R.tZ)(p.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/10/".concat(
                              f.default.isTieyou ? "ty_" : "",
                              "img_xuan@3x.png"
                            ),
                            className: "gou-icon",
                          }),
                        e.productTipsInfo.tag &&
                          (0, R.tZ)(p.View, {
                            className: "tag",
                            children: e.productTipsInfo.tag,
                          }),
                      ],
                    },
                    t
                  );
                }),
              });
            }),
            pt = s.default.memo(function (e) {
              var t,
                n,
                i = e.index,
                a = e.currentIndex,
                r = e.baseProduct,
                c = e.query,
                o = e.tripType,
                l = e.toggleChooseBuy,
                d = (0, s.useState)(0),
                u = (0, I.Z)(d, 2),
                m = u[0],
                f = u[1],
                h = r.recommendInfo,
                g = [r];
              null == h ||
                null === (t = h.recommendProductList) ||
                void 0 === t ||
                t.forEach(function (e) {
                  g.push(e);
                });
              var x = function (e) {
                  De(e);
                },
                N = g[m],
                Z = N.tagImg,
                w = N.apr,
                v = N.cpr,
                b = N.bpr,
                T = N.inlineLpt,
                V = N.tagList,
                y = N.notes,
                B = N.features,
                k = N.remarkInfo,
                C = N.options,
                X = N.grab,
                P = N.eProduct,
                S = N.btnTag,
                D = N.pib,
                M = (N.rcrxp || []).filter(function (e) {
                  return e.selected;
                }),
                _ = {
                  ubtKeyName: "FltWMid_Card_BusiCashBackBanner_exposure",
                  data: {
                    PageId:
                      null === (n = K.getPage()) || void 0 === n
                        ? void 0
                        : n.pageId,
                    ExtraInfo: ""
                      .concat(null == D ? void 0 : D.title)
                      .concat(null == D ? void 0 : D.content),
                  },
                };
              return (0, R.BX)(
                p.View,
                {
                  className: "white-box tabwidget-box",
                  children: [
                    Z &&
                      (0, R.tZ)(p.View, {
                        className: "top-tag",
                        children: (0, R.tZ)(p.Image, {
                          mode: "heightFix",
                          src: Z,
                          className: "tag",
                        }),
                      }),
                    (0, R.BX)(p.View, {
                      className: "tabwidget-item flex flex-column "
                        .concat(i === a ? "open" : "", " ")
                        .concat(Z ? "with-top-tag" : ""),
                      children: [
                        (0, R.BX)(p.View, {
                          className: "price-card flex",
                          children: [
                            (0, R.BX)(p.View, {
                              className: "cont flex-1",
                              children: [
                                (0, R.BX)(p.View, {
                                  className:
                                    "tabwidget-hd flex-align-items-center",
                                  children: [
                                    (0, R.tZ)(p.View, {
                                      className: "price color-red",
                                      children: w,
                                    }),
                                    T &&
                                      (0, R.tZ)(p.View, {
                                        className: "txt color-orange",
                                        children: T,
                                      }),
                                    null == V
                                      ? void 0
                                      : V.map(function (e, t) {
                                          if (e.text)
                                            return e.icon
                                              ? (0, R.BX)(p.View, {
                                                  className:
                                                    "tag-with-icon flex-center tag-cell",
                                                  children: [
                                                    (0, R.tZ)(p.Image, {
                                                      className: "tag-icon",
                                                      src: e.icon,
                                                      mode: "heightFix",
                                                    }),
                                                    (0, R.tZ)(p.View, {
                                                      className: "tag-txt",
                                                      children: (0, R.tZ)(
                                                        A.ZtRichText,
                                                        { nodes: e.text }
                                                      ),
                                                    }),
                                                  ],
                                                })
                                              : e.mark
                                              ? (0, R.BX)(p.View, {
                                                  className:
                                                    "marked-tag tag-cell flex-center",
                                                  children: [
                                                    (0, R.tZ)(p.View, {
                                                      className: "mark",
                                                      children: e.mark,
                                                    }),
                                                    (0, R.tZ)(A.ZtRichText, {
                                                      className: "tag-txt",
                                                      nodes: e.text,
                                                      space: "nbsp",
                                                    }),
                                                  ],
                                                })
                                              : (0, R.tZ)(p.View, {
                                                  className: "flex tag-cell",
                                                  children: (0, R.BX)(
                                                    p.View,
                                                    {
                                                      className:
                                                        "tag-wrapper ".concat(
                                                          ot.ZP.model.includes(
                                                            "iPhone"
                                                          )
                                                            ? "iphone"
                                                            : ""
                                                        ),
                                                      children: [
                                                        (0, R.tZ)(
                                                          A.ZtRichText,
                                                          {
                                                            nodes:
                                                              '<span style="color: #fff;">'.concat(
                                                                e.text.replace(
                                                                  /style=['"'].*['"]/g,
                                                                  ""
                                                                ),
                                                                "</span>"
                                                              ),
                                                            space: "nbsp",
                                                          }
                                                        ),
                                                        (0, R.tZ)(
                                                          p.View,
                                                          {
                                                            className: "tag",
                                                            id: "AcBu",
                                                            onClick:
                                                              function () {
                                                                return (function (
                                                                  e
                                                                ) {
                                                                  var t = e.url,
                                                                    n = e.index,
                                                                    i =
                                                                      e.product;
                                                                  t
                                                                    ? ce.Z.twebview(
                                                                        {
                                                                          data: {
                                                                            url: t,
                                                                          },
                                                                        }
                                                                      )
                                                                    : De({
                                                                        index:
                                                                          n,
                                                                        product:
                                                                          i,
                                                                      });
                                                                })({
                                                                  url: e.url,
                                                                  product: N,
                                                                  index: i,
                                                                });
                                                              },
                                                            style: {
                                                              borderColor:
                                                                e.borderColor,
                                                            },
                                                            children: (0, R.tZ)(
                                                              A.ZtRichText,
                                                              {
                                                                nodes: e.text,
                                                                space: "nbsp",
                                                              }
                                                            ),
                                                          },
                                                          t
                                                        ),
                                                      ],
                                                    },
                                                    t
                                                  ),
                                                });
                                        }),
                                  ],
                                }),
                                (c.hasChild || c.hasBaby) &&
                                  (0, R.BX)(p.View, {
                                    className: "tabwidget-list child",
                                    children: [
                                      c.hasChild &&
                                        (0, R.BX)(p.View, {
                                          className: "item",
                                          children: [
                                            "儿童",
                                            (0, R.BX)(p.Text, {
                                              className: "color-red",
                                              children: ["￥", v],
                                            }),
                                          ],
                                        }),
                                      c.hasBaby &&
                                        (0, R.BX)(p.View, {
                                          className: "item",
                                          children: [
                                            "婴儿",
                                            (0, R.BX)(p.Text, {
                                              className: "color-red",
                                              children: ["￥", b],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                (0, R.BX)(p.View, {
                                  className: "tabwidget-wangfan",
                                  children: [
                                    null == y
                                      ? void 0
                                      : y.map(function (e, t) {
                                          return (0, R.BX)(
                                            p.View,
                                            {
                                              className: "tabwidget-list",
                                              id: "AcBv",
                                              onClick: function () {
                                                return x({
                                                  product: N,
                                                  index: i,
                                                });
                                              },
                                              children: [
                                                2 === o &&
                                                  (0, R.tZ)(p.View, {
                                                    className: "tag",
                                                    children:
                                                      0 === t ? "去" : "返",
                                                  }),
                                                3 === o &&
                                                  (0, R.tZ)(p.View, {
                                                    className: "tag",
                                                    children:
                                                      0 === t ? "1" : "2",
                                                  }),
                                                (0, R.BX)(p.View, {
                                                  className:
                                                    "note-list flex-align-items-center",
                                                  children: [
                                                    e
                                                      .split("|")
                                                      .map(function (e, t) {
                                                        return (0,
                                                        R.tZ)(p.View, { className: "note-item flex-align-items-center", children: (0, R.tZ)(A.ZtRichText, { nodes: e, space: "nbsp" }) }, t);
                                                      }),
                                                    (0, R.tZ)(p.Text, {
                                                      className:
                                                        "ifont-arr iconfont",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            t
                                          );
                                        }),
                                    M.length > 0 &&
                                      (0, R.BX)(p.View, {
                                        className:
                                          "tabwidget-list product-feature",
                                        id: "AcBw",
                                        onClick: function () {
                                          return x({ product: N, index: i });
                                        },
                                        children: [
                                          (0, R.tZ)(p.Image, {
                                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/10/icon_gou@3x.png",
                                            style: { marginRight: "8rpx" },
                                            className: "icon",
                                          }),
                                          (0, R.tZ)(p.View, {
                                            style: {
                                              color: "#00C777",
                                              marginRight: "10rpx",
                                            },
                                            children: "已升级保障",
                                          }),
                                          (0, R.tZ)(A.ZtRichText, {
                                            nodes: M.map(function (e) {
                                              return e.selectedFeature.title;
                                            }).join("|"),
                                          }),
                                          (0, R.tZ)(p.Text, {
                                            className: "ifont-arr iconfont",
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, R.tZ)(p.View, {
                                  className: "tabwidget-list product-feature",
                                  children:
                                    null == B
                                      ? void 0
                                      : B.map(function (e, t) {
                                          return (0,
                                          R.BX)(p.View, { className: "product-feature-item flex-align-items-center", children: [(0, R.tZ)(p.Image, { className: "icon", mode: "heightFix", src: e.url }), (0, R.tZ)(A.ZtRichText, { nodes: e.text })] }, t);
                                        }),
                                }),
                                (null == k ? void 0 : k.remark) &&
                                  (0, R.BX)(p.View, {
                                    className: "tabwidget-list limit flex ",
                                    id: "AcBx",
                                    onClick: function () {
                                      return x({ product: N, index: i });
                                    },
                                    children: [
                                      (0, R.tZ)(p.View, {
                                        className: "".concat(
                                          k.hasBackColor ? "img-container" : "",
                                          " flex-center"
                                        ),
                                        children: (0, R.tZ)(p.Image, {
                                          className: "remark-icon",
                                          src: k.icon,
                                        }),
                                      }),
                                      (0, R.tZ)(p.View, {
                                        className:
                                          "flex-1 flex-align-items-center",
                                        children: k.remark
                                          .split("|")
                                          .map(function (e, t) {
                                            return (0,
                                            R.BX)(s.default.Fragment, { children: [(0, R.tZ)(p.View, { className: "".concat(k.hasBackColor && 0 === t ? "txt-container" : ""), children: (0, R.tZ)(A.ZtRichText, { nodes: e, style: { fontSize: k.hasBackColor && 0 === i ? 11 : 12, color: "#666" } }) }), t != k.remark.split("|").length - 1 && (0, R.tZ)(p.View, { className: "divider" })] }, t);
                                          }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, R.BX)(p.View, {
                              className:
                                "rbox flex-align-items-center flex-column",
                              children: [
                                (null == C ? void 0 : C.length) > 0
                                  ? (0, R.tZ)(p.View, {
                                      id: "AcBy",
                                      onClick: function () {
                                        return l(i, N);
                                      },
                                      children:
                                        i === a
                                          ? (0, R.BX)(p.View, {
                                              className:
                                                "closed flex-align-items-center color-primary",
                                              children: [
                                                "收起",
                                                (0, R.tZ)(p.Text, {
                                                  className:
                                                    "ifont-arrup iconfont",
                                                }),
                                              ],
                                            })
                                          : (0, R.tZ)(p.Button, {
                                              className: "btn-primary btn-book",
                                              children: "选购",
                                            }),
                                    })
                                  : 0 == X
                                  ? (0, R.tZ)(p.Button, {
                                      className: "btn-primary btn-book",
                                      id: "AcBz",
                                      onClick: function () {
                                        return Ie({
                                          product: N,
                                          index: i,
                                          xtoken: null == P ? void 0 : P.oToken,
                                          productId:
                                            null == P ? void 0 : P.productId,
                                        });
                                      },
                                      children: "订",
                                    })
                                  : (0, R.tZ)(p.Button, {
                                      className: "btn-primary btn-book",
                                      id: "AcCA",
                                      onClick: function () {
                                        return Se({ product: N, index: i });
                                      },
                                      children: "抢票",
                                    }),
                                S &&
                                  (0, R.tZ)(p.Text, {
                                    className: "remain-num color-red",
                                    children: S,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, R.tZ)(p.View, {
                          children:
                            D &&
                            (0, R.BX)(p.View, {
                              className:
                                "product-inner-banner flex-align-items-center autoExpose",
                              "data-expose": _,
                              id: "AcCB",
                              onClick: function () {
                                !(function (e) {
                                  var t;
                                  K.ubtTrace(
                                    "FltWMid_Card_BusiCashBackBanner_click",
                                    {
                                      PageId:
                                        null === (t = K.getPage()) ||
                                        void 0 === t
                                          ? void 0
                                          : t.pageId,
                                      ExtraInfo: ""
                                        .concat(e.title)
                                        .concat(e.content),
                                    }
                                  ),
                                    (0, re.g)("xPage");
                                })(D);
                              },
                              ref: function (e) {
                                K.refreshObserve(e);
                              },
                              children: [
                                (0, R.BX)(p.View, {
                                  className: "banner-txt flex-1",
                                  children: [
                                    (0, R.tZ)(p.Text, {
                                      className: "txt-title",
                                      children: D.title,
                                    }),
                                    (0, R.tZ)(p.Text, {
                                      className: "txt-cont",
                                      children: D.content,
                                    }),
                                  ],
                                }),
                                (0, R.tZ)(p.Text, {
                                  className: "iconfont2 ifont2-arr",
                                }),
                              ],
                            }),
                        }),
                        g.length > 1 &&
                          (0, R.tZ)(mt, {
                            productList: g,
                            productIndex: m,
                            setProductIndex: f,
                          }),
                      ],
                    }),
                    (null == C ? void 0 : C.length) > 0 &&
                      (0, R.tZ)(ut, {
                        product: N,
                        options: C,
                        index: i,
                        currentIndex: a,
                      }),
                    ["PACKAGE", "MEMBERSHIP", "TRAIN_COUPON"].includes(
                      null == P ? void 0 : P.productType
                    ) && (0, R.tZ)(dt, { product: N, index: i, eProduct: P }),
                  ],
                },
                i
              );
            }),
            ft = function () {
              K.setState({ cabinsHidden: !1 });
            },
            ht = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.pageModel;
                return {
                  products: t.products,
                  cabinsHidden: t.cabinsHidden,
                  query: t.query,
                  tripType: t.tripType,
                };
              })(function (e) {
                var t = (0, s.useState)(-1),
                  n = (0, I.Z)(t, 2),
                  i = n[0],
                  a = n[1],
                  r = e.products,
                  c = e.cabinsHidden,
                  o = e.query,
                  l = e.tripType,
                  d = function (e) {
                    a(i === e ? -1 : e);
                  },
                  u =
                    null == r
                      ? void 0
                      : r.filter(function (e) {
                          return !e.hidden;
                        }),
                  m =
                    null == r
                      ? void 0
                      : r.filter(function (e) {
                          return e.hidden;
                        });
                return (0, R.tZ)(p.View, {
                  className: "node-isolate-price-card",
                  children:
                    (null == r ? void 0 : r.length) > 0 &&
                    (0, R.BX)(R.HY, {
                      children: [
                        (0, R.BX)(p.View, {
                          className: "flight-price-card",
                          children: [
                            u.map(function (e, t) {
                              return (0,
                              R.tZ)(pt, { index: t, currentIndex: i, baseProduct: e, query: o, tripType: l, toggleChooseBuy: d }, t);
                            }),
                            (0, R.tZ)(p.View, {
                              className: "node-isolate-hidden-products",
                              children:
                                !c &&
                                m.map(function (e, t) {
                                  return (0,
                                  R.tZ)(pt, { index: t, currentIndex: i, baseProduct: e, query: o, tripType: l, toggleChooseBuy: d }, t);
                                }),
                            }),
                          ],
                        }),
                        c &&
                          (0, R.BX)(p.View, {
                            className: "flight-more color-primary",
                            id: "AcCC",
                            onClick: ft,
                            children: [
                              "更多舱位/公务舱",
                              (0, R.tZ)(p.Text, {
                                className: "ifont-arr iconfont",
                              }),
                            ],
                          }),
                      ],
                    }),
                });
              })
            ),
            gt = s.default.memo(
              (0, d.$j)(function (e) {
                return { products: e.pageModel.products };
              })(function (e) {
                var t = e.products;
                return (0, R.tZ)(p.View, {
                  className: "node-isolate-price-card-skeleton",
                  children:
                    !t.length &&
                    (0, R.tZ)(R.HY, {
                      children: Array(4)
                        .fill(1)
                        .map(function (e, t) {
                          return (0, R.BX)(
                            p.View,
                            {
                              className: "skeleton-item",
                              id: "AcCD",
                              onClick: function (e) {
                                e.stopPropagation();
                              },
                              catchMove: !0,
                              children: [
                                (0, R.BX)(p.View, {
                                  className: "bd",
                                  children: [
                                    (0, R.BX)(p.View, {
                                      className: "left",
                                      children: [
                                        (0, R.tZ)(p.View, { className: "tit" }),
                                        (0, R.tZ)(p.View, { className: "sub" }),
                                      ],
                                    }),
                                    (0, R.tZ)(p.View, { className: "desc" }),
                                    (0, R.tZ)(p.View, { className: "btn" }),
                                  ],
                                }),
                                (0, R.BX)(p.View, {
                                  className: "hd",
                                  children: [
                                    (0, R.tZ)(p.View, { className: "txt" }),
                                    (0, R.tZ)(p.View, { className: "btn" }),
                                  ],
                                }),
                              ],
                            },
                            t
                          );
                        }),
                    }),
                });
              })
            ),
            xt = s.default.memo(
              (0, d.$j)(function (e) {
                return { segments: e.pageModel.segments };
              })(function (e) {
                var t = e.segments;
                return (0,
                R.tZ)(p.View, { className: "flight-bookx-skeleton", children: (!t || !t.length) && (0, R.BX)(p.View, { className: "bookx-modify-skeleton", children: [(0, R.tZ)(p.View, { className: "skeleton-hd" }), (0, R.tZ)(p.View, { className: "skeleton-bd", children: (0, R.BX)(p.View, { className: "fromto", children: [(0, R.BX)(p.View, { className: "from", children: [(0, R.tZ)(p.Text, { className: "time", children: (0, R.tZ)(p.Text, { className: "skeleton-time" }) }), (0, R.tZ)(p.Text, { className: "station", children: (0, R.tZ)(p.Text, { className: "skeleton-station" }) })] }), (0, R.BX)(p.View, { className: "to", children: [(0, R.tZ)(p.Text, { className: "time", children: (0, R.tZ)(p.Text, { className: "skeleton-time" }) }), (0, R.tZ)(p.Text, { className: "station", children: (0, R.tZ)(p.Text, { className: "skeleton-station" }) })] })] }) })] }) });
              })
            ),
            Nt = s.default.memo(
              (0, d.$j)(function (e) {
                return { sequences: e.pageModel.sequences };
              })(function (e) {
                var t = e.sequences;
                return (0,
                R.tZ)(p.View, { className: "flight-bookx-skeleton", children: !t && (0, R.tZ)(p.View, { className: "bookx-modify-skeleton", children: (0, R.tZ)(p.View, { className: "skeleton-bd", children: (0, R.BX)(p.View, { className: "fromto", children: [(0, R.BX)(p.View, { className: "from", children: [(0, R.tZ)(p.Text, { className: "time", children: (0, R.tZ)(p.Text, { className: "skeleton-time" }) }), (0, R.tZ)(p.Text, { className: "station", children: (0, R.tZ)(p.Text, { className: "skeleton-station" }) })] }), (0, R.BX)(p.View, { className: "to", children: [(0, R.tZ)(p.Text, { className: "time", children: (0, R.tZ)(p.Text, { className: "skeleton-time" }) }), (0, R.tZ)(p.Text, { className: "station", children: (0, R.tZ)(p.Text, { className: "skeleton-station" }) })] })] }) }) }) });
              })
            ),
            Zt = s.default.memo(
              (0, d.$j)(function (e) {
                return { products: e.pageModel.products };
              })(function (e) {
                var t = e.products;
                return (0, R.tZ)(p.View, {
                  className: "node-isolate-air-train-skeleton",
                  children:
                    (!t.combination || !t.combination.length) &&
                    (0, R.BX)(p.View, {
                      className: "white-box flt-train-box",
                      children: [
                        (0, R.BX)(p.View, {
                          className: "flt-train-hd-skeleton",
                          children: [
                            (0, R.tZ)(p.View, { className: "tit" }),
                            (0, R.tZ)(p.View, { className: "txt" }),
                          ],
                        }),
                        (0, R.tZ)(p.View, {
                          className: "flt-train-bd",
                          children: Array(2)
                            .fill(1)
                            .map(function (e, t) {
                              return (0, R.BX)(
                                p.View,
                                {
                                  className: "skeleton-item",
                                  id: "AcBP",
                                  onClick: function (e) {
                                    e.stopPropagation();
                                  },
                                  catchMove: !0,
                                  children: [
                                    (0, R.BX)(p.View, {
                                      className: "bd",
                                      children: [
                                        (0, R.BX)(p.View, {
                                          className: "left",
                                          children: [
                                            (0, R.tZ)(p.View, {
                                              className: "tit",
                                            }),
                                            (0, R.tZ)(p.View, {
                                              className: "sub",
                                            }),
                                          ],
                                        }),
                                        (0, R.tZ)(p.View, {
                                          className: "desc",
                                        }),
                                        (0, R.tZ)(p.View, { className: "btn" }),
                                      ],
                                    }),
                                    (0, R.BX)(p.View, {
                                      className: "hd",
                                      children: [
                                        (0, R.tZ)(p.View, { className: "txt" }),
                                        (0, R.tZ)(p.View, { className: "btn" }),
                                      ],
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                        }),
                      ],
                    }),
                });
              })
            ),
            wt = function () {
              var e = K.getState(),
                t = e.products,
                n = e.query,
                i = t.flight.token,
                a = n.extension;
              Pe({ token: i, extension: void 0 === a ? [] : a });
            },
            vt = function () {
              var e = K.getState().products.train.token;
              K.navigateTo({ url: e });
            },
            bt = s.default.memo(
              (0, d.$j)(function (e) {
                return { products: e.pageModel.products };
              })(function (e) {
                var t,
                  n = e.products;
                return (0, R.tZ)(p.View, {
                  className: "node-isolate-air-train-price-card",
                  children:
                    (null === (t = n.combination) || void 0 === t
                      ? void 0
                      : t.length) > 0 &&
                    (0, R.BX)(p.View, {
                      className: "white-box flt-train-box",
                      children: [
                        (0, R.BX)(p.View, {
                          className: "flt-train-hd",
                          children: [
                            (0, R.BX)(p.View, {
                              className: "tit",
                              children: [
                                "行程总价：",
                                (0, R.tZ)(p.Text, {
                                  className: "price",
                                  children: n.totalAmount,
                                }),
                              ],
                            }),
                            (0, R.tZ)(p.View, {
                              className: "txt",
                              children: "*" + n.subtitle,
                            }),
                          ],
                        }),
                        (0, R.tZ)(p.View, {
                          className: "flt-train-bd",
                          children: (0, R.tZ)(R.HY, {
                            children: n.combination.map(function (e) {
                              var t, n;
                              return (0, R.BX)(R.HY, {
                                children: [
                                  "FLT" === e.type &&
                                    (0, R.BX)(p.View, {
                                      className: "item",
                                      children: [
                                        (0, R.BX)(p.View, {
                                          className: "cont",
                                          children: [
                                            (0, R.BX)(p.View, {
                                              className: "tit",
                                              children: [
                                                (0, R.tZ)(p.Text, {
                                                  className:
                                                    "ifont-splane iconfont bgcolor-primary",
                                                }),
                                                e.dptName + " - " + e.arrName,
                                              ],
                                            }),
                                            (0, R.BX)(p.View, {
                                              className: "txt",
                                              id: "AcBQ",
                                              onClick: De,
                                              children: [
                                                null === (t = e.notes) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.map(function (e, t) {
                                                      return (0,
                                                      R.tZ)(A.ZtRichText, { nodes: e }, t);
                                                    }),
                                                (0, R.tZ)(p.Text, {
                                                  className:
                                                    "iconfont ifont-arr",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, R.BX)(p.View, {
                                          className: "rbox",
                                          children: [
                                            (0, R.tZ)(p.View, {
                                              className: "price color-red",
                                              children: e.apr,
                                            }),
                                            e.ccd &&
                                              (0, R.tZ)(p.Text, {
                                                className:
                                                  "discount-info bdcolor-red color-red",
                                                children: e.ccd,
                                              }),
                                          ],
                                        }),
                                        (0, R.tZ)(p.Button, {
                                          className: "btn-book btn-primary",
                                          id: "AcBR",
                                          onClick: wt,
                                          children: "订机票",
                                        }),
                                      ],
                                    }),
                                  "TRN" === e.type &&
                                    (0, R.BX)(p.View, {
                                      className: "item",
                                      children: [
                                        (0, R.BX)(p.View, {
                                          className: "cont",
                                          children: [
                                            (0, R.BX)(p.View, {
                                              className: "tit",
                                              children: [
                                                (0, R.tZ)(p.Text, {
                                                  className:
                                                    "ifont-train iconfont",
                                                }),
                                                e.dptName + " - " + e.arrName,
                                              ],
                                            }),
                                            (0, R.tZ)(p.View, {
                                              className: "txt",
                                              children:
                                                null === (n = e.notes) ||
                                                void 0 === n
                                                  ? void 0
                                                  : n.map(function (e, t) {
                                                      return (0,
                                                      R.tZ)(p.Text, { children: e }, t);
                                                    }),
                                            }),
                                          ],
                                        }),
                                        (0, R.tZ)(p.View, {
                                          className: "rbox",
                                          children: (0, R.tZ)(p.View, {
                                            className: "price color-red",
                                            children: e.tpr,
                                          }),
                                        }),
                                        (0, R.tZ)(p.Button, {
                                          className: "btn-book btn-line-light",
                                          id: "AcBS",
                                          onClick: vt,
                                          children: "订火车",
                                        }),
                                      ],
                                    }),
                                ],
                              });
                            }),
                          }),
                        }),
                      ],
                    }),
                });
              })
            ),
            Tt = {
              zx: "GITBZ-AHLWG-HAUQA-I2LT7-PRHY6-DKF24",
              ty: "6PIBZ-GDKCI-D7VGD-5HWZM-KBHC2-B2FII",
              dt: "YA5BZ-OCBRW-7H3RJ-RZ2Z6-OWIP3-63BFB",
            },
            Vt = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.pageModel;
                return { sequences: t.sequences, tripTips: t.tripTips };
              })(function (e) {
                var t = e.sequences,
                  n = e.tripTips;
                return (0, R.tZ)(p.View, {
                  className: "node-isolate-air-train-segments",
                  children:
                    t &&
                    (0, R.tZ)(p.View, {
                      className: "flight-air-train-segments",
                      children: (0, R.BX)(p.View, {
                        className: "bookx-modify " + f.default.zxTyStr,
                        children: [
                          (0, R.BX)(p.View, {
                            className: "bookx-modify-hd",
                            children: [
                              (0, R.tZ)(p.Text, {
                                className: "round-mark bgcolor-primary",
                                children: "空铁特惠",
                              }),
                              t.title,
                            ],
                          }),
                          t.combination.map(function (e, n) {
                            return (0, R.BX)(R.HY, {
                              children: [
                                1 === n &&
                                  (0, R.BX)(p.View, {
                                    className: "bookx-modify-zhongzhuan",
                                    id: "AcBT",
                                    onClick: function () {
                                      return (function (e) {
                                        var t = e.transfer,
                                          n = t.from,
                                          i = t.to,
                                          a =
                                            (m().requirePlugin("routePlan"),
                                            "铁友小程序"),
                                          r = {
                                            name: n.name,
                                            latitude: n.lat,
                                            longitude: n.lng,
                                          },
                                          c = {
                                            name: i.name,
                                            latitude: i.lat,
                                            longitude: i.lng,
                                          };
                                        m().navigateTo({
                                          url: "plugin://routePlan/index?key="
                                            .concat(
                                              Tt[f.default.jetpack],
                                              "&referer="
                                            )
                                            .concat(a, "&startPoint=")
                                            .concat(
                                              JSON.stringify(r),
                                              "&endPoint="
                                            )
                                            .concat(JSON.stringify(c)),
                                        });
                                      })(t);
                                    },
                                    children: [
                                      (0, R.tZ)(p.View, {
                                        className: "cont",
                                        children: t.transfer.text,
                                      }),
                                      (0, R.tZ)(p.View, {
                                        className: "color-primary",
                                        children: "换乘方案",
                                      }),
                                      (0, R.tZ)(p.Text, {
                                        className:
                                          "color-primary ifont-arr iconfont",
                                      }),
                                    ],
                                  }),
                                "FLT" === e.type &&
                                  (0, R.BX)(p.View, {
                                    className: "bookx-modify-bd",
                                    children: [
                                      (0, R.BX)(p.View, {
                                        className: "fromto",
                                        children: [
                                          (0, R.tZ)(p.Text, {
                                            className: "ifont-splane iconfont",
                                          }),
                                          (0, R.BX)(p.View, {
                                            className: "from",
                                            children: [
                                              (0, R.tZ)(p.Text, {
                                                className: "time",
                                                children: e.dptTimeStr,
                                              }),
                                              !!e.dptDayDiff &&
                                                (0, R.tZ)(p.Text, {
                                                  className: "em color-primary",
                                                  children: e.dptDayDiff,
                                                }),
                                              (0, R.tZ)(p.Text, {
                                                className: "station",
                                                children: e.dptAName + e.dptTrm,
                                              }),
                                            ],
                                          }),
                                          e.dtlsStr &&
                                            (0, R.tZ)(p.View, {
                                              className: "mid",
                                              children: (0, R.tZ)(p.Text, {
                                                className: "jinting",
                                                children: e.dtlsStr,
                                              }),
                                            }),
                                          (0, R.BX)(p.View, {
                                            className: "to",
                                            children: [
                                              (0, R.tZ)(p.Text, {
                                                className: "time",
                                                children: e.arrTimeStr,
                                              }),
                                              !!e.arrDayDiff &&
                                                (0, R.tZ)(p.Text, {
                                                  className: "em color-primary",
                                                  children: e.arrDayDiff,
                                                }),
                                              (0, R.tZ)(p.Text, {
                                                className: "station",
                                                children: e.arrAName + e.arrTrm,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, R.BX)(p.View, {
                                        className: "rbox",
                                        "data-type": "airTrain",
                                        id: "AcBU",
                                        onClick: function () {
                                          return J.Z.toAircraftInfo(t.flight);
                                        },
                                        children: [
                                          (0, R.tZ)(p.View, {
                                            className: "time",
                                            children: e.ct,
                                          }),
                                          (0, R.BX)(p.View, {
                                            className: "txt",
                                            children: [
                                              (0, R.tZ)(p.Image, {
                                                className: "airline_logo",
                                                src: e.airIcon,
                                              }),
                                              e.airName + e.flightNo,
                                            ],
                                          }),
                                          e.shared &&
                                            (0, R.tZ)(p.View, {
                                              className: "txt",
                                              children:
                                                "实际承运:" +
                                                e.actAirName +
                                                e.actFlightNo,
                                            }),
                                          e.planeType &&
                                            (0, R.tZ)(p.View, {
                                              className: "txt",
                                              children: e.planeType,
                                            }),
                                          (0, R.tZ)(p.View, {
                                            className: "txt",
                                            children:
                                              (e.punctuality || "") +
                                              " " +
                                              (e.punctuality && e.mealType
                                                ? "|"
                                                : "") +
                                              " " +
                                              e.mealType,
                                          }),
                                          (0, R.tZ)(p.Text, {
                                            className: "ifont-arr iconfont",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                "TRN" === e.type &&
                                  (0, R.BX)(p.View, {
                                    className: "bookx-modify-bd",
                                    children: [
                                      (0, R.BX)(p.View, {
                                        className: "fromto",
                                        children: [
                                          (0, R.tZ)(p.Text, {
                                            className: "ifont-train iconfont",
                                          }),
                                          (0, R.BX)(p.View, {
                                            className: "from",
                                            children: [
                                              (0, R.tZ)(p.Text, {
                                                className: "time",
                                                children: e.dptTimeStr,
                                              }),
                                              !!e.dptDayDiff &&
                                                (0, R.tZ)(p.Text, {
                                                  className: "em color-primary",
                                                  children: e.dptDayDiff,
                                                }),
                                              (0, R.tZ)(p.Text, {
                                                className: "station",
                                                children: e.dptName,
                                              }),
                                            ],
                                          }),
                                          (0, R.BX)(p.View, {
                                            className: "to",
                                            children: [
                                              (0, R.tZ)(p.Text, {
                                                className: "time",
                                                children: e.arrTimeStr,
                                              }),
                                              !!e.arrDayDiff &&
                                                (0, R.tZ)(p.Text, {
                                                  className: "em color-primary",
                                                  children: e.arrDayDiff,
                                                }),
                                              (0, R.tZ)(p.Text, {
                                                className: "station",
                                                children: e.arrName,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, R.BX)(p.View, {
                                        className: "rbox",
                                        children: [
                                          (0, R.tZ)(p.View, {
                                            className: "time",
                                            children: e.ct,
                                          }),
                                          e.trainNo &&
                                            (0, R.tZ)(p.View, {
                                              className: "txt",
                                              children: e.trainNo,
                                            }),
                                          e.trnType &&
                                            (0, R.tZ)(p.View, {
                                              className: "txt",
                                              children: e.trnType,
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            });
                          }),
                          n &&
                            (0, R.tZ)(p.View, {
                              className: "bookx-modify-tips",
                              children: (0, R.tZ)(A.ZtRichText, {
                                nodes: n.textOverflow
                                  ? n.showAll
                                    ? n.originTxt
                                    : n.combinedTxt
                                  : n.originTxt,
                                id: "AcBV",
                                onClick: ye,
                              }),
                            }),
                        ],
                      }),
                    }),
                });
              })
            ),
            yt = n(31952),
            Bt = n(25949),
            kt = n.n(Bt),
            Ct = { borderRadius: "32rpx 32rpx 0 0" },
            Xt = function () {
              K.setState({ packageProductDetailVisible: !1 });
            },
            Pt = function () {
              K.setState({ changePackagePopVisible: !1 });
            },
            St = function (e) {
              Xt(), Pt(), Ie(e);
            },
            It = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.pageModel;
                return {
                  visible: t.packageProductDetailVisible,
                  token: t.packageProductInfo.xToken,
                  product: t.packageProductInfo.product,
                  productIndex: t.packageProductInfo.productIndex,
                };
              })(function (e) {
                var t,
                  n = e.visible,
                  i = e.token,
                  a = e.product,
                  r = e.productIndex,
                  c = (0, s.useState)(!1),
                  o = (0, I.Z)(c, 2),
                  l = o[0],
                  d = o[1],
                  u = (0, s.useState)({}),
                  m = (0, I.Z)(u, 2),
                  f = m[0],
                  h = m[1],
                  g = (0, s.useState)(0),
                  x = (0, I.Z)(g, 2),
                  N = x[0],
                  Z = x[1],
                  w = (0, s.useState)(!1),
                  v = (0, I.Z)(w, 2),
                  T = v[0],
                  V = v[1];
                (0, s.useLayoutEffect)(
                  function () {
                    if (i) {
                      if (n)
                        return f[i]
                          ? (d(!0),
                            void B.Z.sendUbtTrace(
                              "P0309_SP0000_M0001_exposure"
                            ))
                          : void (function (e, t) {
                              var n =
                                  arguments.length > 2 &&
                                  void 0 !== arguments[2]
                                    ? arguments[2]
                                    : function () {},
                                i = {
                                  data: {
                                    source: 3,
                                    token: e,
                                    productType: "PACKAGE",
                                  },
                                };
                              J.Z.doFetch(ie.hv, i, t, n);
                            })(
                              i,
                              function (e) {
                                h(
                                  (0, b.Z)(
                                    (0, b.Z)({}, f),
                                    {},
                                    (0, H.Z)({}, i, e)
                                  )
                                ),
                                  d(!0),
                                  B.Z.sendUbtTrace(
                                    "P0309_SP0000_M0001_exposure"
                                  );
                              },
                              function () {
                                Xt();
                              }
                            );
                      d(!1);
                    }
                  },
                  [n, i]
                );
                var y,
                  k = f[i],
                  C = k || {},
                  X = C.titleIcon,
                  P = C.subtitle,
                  S = C.rights,
                  D = C.salePrice,
                  M = C.productNotes,
                  _ = C.productName,
                  F = C.productId,
                  E =
                    null == S || null === (t = S[N]) || void 0 === t
                      ? void 0
                      : t.rightNote;
                M &&
                  (M.items4show = T
                    ? M.items
                    : null === (y = M.items) || void 0 === y
                    ? void 0
                    : y.slice(0, 1));
                var Y = null == a ? void 0 : a.apr,
                  L = null == a ? void 0 : a.cabin;
                return (0, R.tZ)(A.ZtDrawer, {
                  show: l,
                  isShowClose: !1,
                  onWrapClose: Xt,
                  drawerStyle: Ct,
                  height: "75vh",
                  maxHeight: "75vh",
                  className: "package-product-pop",
                  children:
                    k &&
                    (0, R.BX)(R.HY, {
                      children: [
                        (0, R.BX)(p.View, {
                          className:
                            "pop-hd flex-align-items-center flex-column",
                          children: [
                            (0, R.tZ)(p.Image, {
                              className: "title-icon",
                              src: X,
                            }),
                            (0, R.tZ)(p.View, {
                              className: "sub-title",
                              children: (0, R.tZ)(A.ZtRichText, {
                                nodes: P,
                                space: "nbsp",
                              }),
                            }),
                            (0, R.tZ)(p.Image, {
                              className: "close-icon",
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/xchengxu/icon_close2.png",
                              id: "AcBi",
                              onClick: Xt,
                            }),
                          ],
                        }),
                        (0, R.BX)(p.View, {
                          className: "pop-bd flex-1",
                          children: [
                            (0, R.tZ)(p.Swiper, {
                              className: "right-swiper",
                              previousMargin: "174rpx",
                              nextMargin: "174rpx",
                              circular: !0,
                              onChange: function (e) {
                                var t = e.detail.current;
                                Z(t);
                              },
                              children:
                                null == S
                                  ? void 0
                                  : S.map(function (e, t) {
                                      var n;
                                      return (0, R.tZ)(
                                        p.SwiperItem,
                                        {
                                          className: "swiper-item",
                                          children: (0, R.BX)(p.View, {
                                            className: kt()(
                                              "right-item flex-align-items-center flex-column",
                                              { cur: N == t }
                                            ),
                                            children: [
                                              (0, R.BX)(p.View, {
                                                className: "right-wrap",
                                                children: [
                                                  (0, R.tZ)(p.Image, {
                                                    className: "right-img",
                                                    src: e.img,
                                                  }),
                                                  (0, R.tZ)(p.View, {
                                                    className: "right-name",
                                                    children: (0, R.tZ)(
                                                      A.ZtRichText,
                                                      {
                                                        nodes: e.name,
                                                        space: "nbsp",
                                                      }
                                                    ),
                                                  }),
                                                  (0, R.tZ)(p.View, {
                                                    className: "right-content",
                                                    children:
                                                      null ===
                                                        (n = e.features) ||
                                                      void 0 === n
                                                        ? void 0
                                                        : n.map(function (e) {
                                                            return (0,
                                                            R.BX)(p.View, { className: "flex-align-items-center feat-item", children: [(0, R.tZ)(p.Image, { className: "feat-icon", src: e.icon }), (0, R.tZ)(A.ZtRichText, { nodes: e.title, space: "nbsp" })] }, e.title);
                                                          }),
                                                  }),
                                                ],
                                              }),
                                              (0, R.tZ)(p.Image, {
                                                className: "right-tag",
                                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/10/fuceng/img_tag@3x.png",
                                              }),
                                            ],
                                          }),
                                        },
                                        t
                                      );
                                    }),
                            }),
                            (0, R.BX)(p.View, {
                              className: "detail-wrap",
                              children: [
                                (0, R.BX)(p.View, {
                                  className: "tip-item flex",
                                  children: [
                                    (0, R.tZ)(p.Text, {
                                      className: "dot flex-align-items-center",
                                    }),
                                    (0, R.BX)(p.Text, {
                                      className: "resident-tip",
                                      children: [
                                        "起飞前未过期、未使用可",
                                        (0, R.tZ)(p.Text, {
                                          className: "color-green",
                                          children: "免费退",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                E &&
                                  (0, R.tZ)(p.View, {
                                    className: "right-note",
                                    children: (0, R.tZ)(yt.Z, {
                                      tipList: E.notes,
                                      className: "package-product-tip-list",
                                    }),
                                  }),
                                M &&
                                  T &&
                                  (0, R.BX)(p.View, {
                                    className: "product-notes",
                                    children: [
                                      (0, R.tZ)(p.View, {
                                        className: "title",
                                        children: M.title,
                                      }),
                                      (0, R.tZ)(p.View, {
                                        className: "note-list",
                                        children: M.items.map(function (e, t) {
                                          return (0,
                                          R.BX)(p.View, { className: "note-item flex", children: [(0, R.tZ)(p.Text, { className: "dot flex-align-items-center" }), (0, R.BX)(p.View, { className: "flex-1", children: [(0, R.tZ)(p.View, { className: "note-name", children: e.name }), (0, R.tZ)(p.View, { className: "note-content", children: (0, R.tZ)(A.ZtRichText, { nodes: e.content, space: "nbsp" }) })] })] }, t);
                                        }),
                                      }),
                                    ],
                                  }),
                                (0, R.BX)(p.View, {
                                  className: "show-detail",
                                  id: "AcBj",
                                  onClick: function () {
                                    return V(!T);
                                  },
                                  children: [
                                    (0, R.tZ)(p.Text, {
                                      children: T ? "收起" : "查看详细须知",
                                    }),
                                    (0, R.tZ)(p.Text, {
                                      className: "iconfont2 ifont2-".concat(
                                        T ? "shouqi" : "zhankai",
                                        "_linea_12"
                                      ),
                                    }),
                                  ],
                                }),
                                (0, R.tZ)(p.Image, {
                                  className: "indicator",
                                  src: "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/card/dashou/img_jiao@3x.png",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, R.tZ)(p.View, {
                          children: (0, R.tZ)(q, {
                            flightPrice: Y,
                            salePrice: D,
                            productName: _,
                            cabin: L,
                            onConfirm: function () {
                              return (
                                B.Z.sendUbtTrace(
                                  "P0309_SP0000_M0001_ID0001_click",
                                  {
                                    ProductType: "PACKAGE",
                                    ProductId: F,
                                    Price: Y,
                                    totalprice: Y + D,
                                  }
                                ),
                                void St({
                                  product: a,
                                  index: r,
                                  xtoken: i,
                                  productId: F,
                                })
                              );
                            },
                          }),
                        }),
                      ],
                    }),
                });
              })
            ),
            Dt = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.pageModel;
                return {
                  visible: t.changePackagePopVisible,
                  product: t.packageProductInfo.product,
                  productIndex: t.packageProductInfo.productIndex,
                };
              })(function (e) {
                var t = e.visible,
                  n = e.product,
                  i = e.productIndex,
                  a = (0, s.useState)(!1),
                  r = (0, I.Z)(a, 2),
                  c = r[0],
                  o = r[1],
                  l = (0, s.useState)(null),
                  d = (0, I.Z)(l, 2),
                  u = d[0],
                  m = d[1];
                (0, s.useLayoutEffect)(
                  function () {
                    t
                      ? u
                        ? o(!0)
                        : (function (e) {
                            var t,
                              n,
                              i =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : function () {},
                              a = K.getState(),
                              r = a.segments,
                              c = a.packageProductInfo,
                              o = c.productIds,
                              l = c.xToken,
                              s =
                                (null == r ||
                                null === (t = r[0]) ||
                                void 0 === t ||
                                null === (n = t.flights) ||
                                void 0 === n
                                  ? void 0
                                  : n[0]) || {},
                              d = s.dptACode,
                              u = s.dptTime,
                              m = s.dptTrm,
                              p = {
                                data: {
                                  source: 3,
                                  departureAirportCode: d,
                                  departureDateTime:
                                    C()(u).format("YYYY-MM-DD"),
                                  departureTerminal: m,
                                  productTypes: ["PACKAGE"],
                                  productIds: o,
                                  productToken: l,
                                },
                              };
                            J.Z.doFetch(ie.ry, p, e, i);
                          })(
                            function (e) {
                              m(e), o(!0);
                            },
                            function () {
                              Pt();
                            }
                          )
                      : o(!1);
                  },
                  [t]
                );
                var f = null == n ? void 0 : n.apr,
                  h = u || {},
                  g = h.title,
                  x = h.subTitle,
                  N = h.products;
                return (0, R.tZ)(A.ZtDrawer, {
                  show: c,
                  isShowClose: !1,
                  onWrapClose: Pt,
                  drawerStyle: Ct,
                  maxHeight: "80vh",
                  className: "package-product-pop change",
                  children:
                    u &&
                    (0, R.BX)(R.HY, {
                      children: [
                        (0, R.BX)(p.View, {
                          className:
                            "pop-hd flex-align-items-center flex-column",
                          children: [
                            (0, R.tZ)(p.Image, {
                              className: "title-icon",
                              src: g,
                            }),
                            (0, R.tZ)(p.View, {
                              className: "sub-title",
                              children: (0, R.tZ)(A.ZtRichText, {
                                nodes: x,
                                space: "nbsp",
                              }),
                            }),
                            (0, R.tZ)(p.Image, {
                              id: "AcBk",
                              onClick: Pt,
                              className: "close-icon",
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/xchengxu/icon_close.png",
                            }),
                          ],
                        }),
                        (0, R.tZ)(p.View, {
                          className: "pop-bd flex-1",
                          children:
                            null == N
                              ? void 0
                              : N.map(function (e, t) {
                                  var a = e.token,
                                    r = e.productName,
                                    c = e.productType,
                                    o = e.salePrice,
                                    l = e.recommendable,
                                    s = e.features,
                                    d = e.productId;
                                  return (0, R.BX)(
                                    p.View,
                                    {
                                      className: "package-card",
                                      children: [
                                        (0, R.BX)(p.View, {
                                          className:
                                            "card-hd flex-align-items-center",
                                          children: [
                                            (0, R.BX)(p.View, {
                                              className:
                                                "left flex-1 flex-align-items-center",
                                              children: [
                                                (0, R.tZ)(p.View, {
                                                  className: "flight-price",
                                                  children: f,
                                                }),
                                                (0, R.BX)(p.View, {
                                                  className: "sale-price",
                                                  children: ["+¥", o, " ", r],
                                                }),
                                                l &&
                                                  (0, R.tZ)(p.Image, {
                                                    className: "rec-tag",
                                                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/card/dashou/tag_pop_tuijian@3x.png",
                                                  }),
                                              ],
                                            }),
                                            (0, R.tZ)(p.View, {
                                              className: "right flex",
                                              children: (0, R.tZ)(p.View, {
                                                className:
                                                  "book-btn flex-center",
                                                id: "AcBl",
                                                onClick: function () {
                                                  return St({
                                                    product: n,
                                                    index: i,
                                                    xtoken: a,
                                                    productId: d,
                                                  });
                                                },
                                                children: "订",
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, R.BX)(p.View, {
                                          className: "feature-banner flex",
                                          children: [
                                            s.map(function (e, t) {
                                              return (0,
                                              R.BX)(p.View, { className: "feature-item flex-align-items-center", children: [(0, R.tZ)(p.Image, { className: "ft-icon", src: e.icon }), (0, R.tZ)(p.View, { className: "ft-title", children: (0, R.tZ)(A.ZtRichText, { nodes: e.title, space: "nbsp" }) })] }, t);
                                            }),
                                            (0, R.BX)(p.View, {
                                              className:
                                                "detail flex-align-items-center",
                                              id: "AcBm",
                                              onClick: function () {
                                                return Ce({
                                                  product: n,
                                                  index: i,
                                                  xToken: a,
                                                  productType: c,
                                                  action: "detail",
                                                });
                                              },
                                              children: [
                                                "详情",
                                                (0, R.tZ)(p.Text, {
                                                  className:
                                                    "ifont-arr iconfont",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                        }),
                      ],
                    }),
                });
              })
            ),
            At = n(57169),
            Mt = "BusinessTravelCashBackBanner",
            Rt = "newUserBanner",
            _t = "FlightTrainDelayReturn",
            Ft = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.pageModel;
                return { bookxBanner: t.bookxBanner, segments: t.segments };
              })(function (e) {
                var t,
                  n = e.bookxBanner,
                  i = e.segments,
                  a = {
                    ubtKeyName: "FltWMid_TopBanner_exposure",
                    data: {
                      PageId:
                        null === (t = K.getPage()) || void 0 === t
                          ? void 0
                          : t.pageId,
                      ExtraInfo: null == n ? void 0 : n.text,
                    },
                  },
                  r = function (e) {
                    var t,
                      n = e.data,
                      i = "background-image: url(".concat(n.bgUrl, ")");
                    return (0, R.tZ)(p.View, {
                      className: "common-container",
                      children: (0, R.BX)(p.View, {
                        className: "new-user-banner flex-align-items-center",
                        style: i,
                        children: [
                          (0, R.tZ)(p.Image, {
                            className: "new-user-icon",
                            src: n.icon,
                            mode: "heightFix",
                          }),
                          (0, R.tZ)(p.View, {
                            className: "subsidies flex flex-1",
                            children:
                              null == n ||
                              null === (t = n.content) ||
                              void 0 === t
                                ? void 0
                                : t.map(function (e) {
                                    return (0,
                                    R.tZ)(p.View, { className: "subsidy-item flex-align-items-center", children: e }, e);
                                  }),
                          }),
                          (0, R.tZ)(p.Text, {
                            className: "ifont2-arr iconfont2",
                          }),
                        ],
                      }),
                    });
                  },
                  c = function (e) {
                    var t = e.data,
                      n = (t || {}).bgUrl,
                      i = {
                        backgroundImage: "url(".concat(n, ")"),
                        backgroundSize: "100% auto",
                        backgroundRepeat: "no-repeat",
                      };
                    return (0, R.BX)(p.View, {
                      className: "banner-cont flex-align-items-center",
                      style: i,
                      children: [
                        (0, R.BX)(p.View, {
                          className:
                            "banner-lbox flex-1 flex-align-items-center",
                          children: [
                            (0, R.tZ)(p.Image, {
                              className: "banner-icon",
                              src: t.icon,
                            }),
                            (0, R.tZ)(p.View, {
                              className: "banner-txt",
                              children: (0, R.tZ)(A.ZtRichText, {
                                className: "txt",
                                nodes: t.text,
                              }),
                            }),
                          ],
                        }),
                        (0, R.tZ)(p.View, {
                          className: "banner-rbox flex-align-items-center",
                          children:
                            null != t && t.buttonText
                              ? (0, R.tZ)(p.Button, {
                                  className: "right-btn",
                                  children: t.buttonText,
                                })
                              : (0, R.tZ)(p.Text, {
                                  className: "ifont2-arr iconfont2",
                                }),
                        }),
                      ],
                    });
                  },
                  o = function (e) {
                    return "newUserBanner" == e.bannerType
                      ? (0, R.tZ)(r, { data: e })
                      : (0, R.tZ)(c, { data: e });
                  };
                return (0, R.tZ)(p.View, {
                  className: "node-isolate-flight-bookx-banner",
                  children:
                    (null == n ? void 0 : n.length) > 0 &&
                    (null == i ? void 0 : i.length) > 0 &&
                    (0, R.tZ)(p.Swiper, {
                      autoplay: !0,
                      circular: !0,
                      vertical: !0,
                      className: "flt-bookx-banner",
                      children:
                        null == n
                          ? void 0
                          : n.map(function (e, t) {
                              return (0, R.tZ)(
                                p.SwiperItem,
                                {
                                  className: "autoExpose",
                                  "data-expose": a,
                                  id: "AcBW",
                                  onClick: function () {
                                    return (function (e) {
                                      var t, i;
                                      B.Z.sendUbtTrace(
                                        "FltWMid_TopBanner_click",
                                        {
                                          PageId:
                                            null === (t = K.getPage()) ||
                                            void 0 === t
                                              ? void 0
                                              : t.pageId,
                                          ExtraInfo: n.text,
                                        }
                                      ),
                                        e.bannerType !== Mt
                                          ? e.bannerType !== Rt
                                            ? e.bannerType !== _t
                                              ? null != e &&
                                                e.url &&
                                                null !== (i = e.url) &&
                                                void 0 !== i &&
                                                i.startsWith("http") &&
                                                ce.Z.twebview({
                                                  data: { url: e.url },
                                                })
                                              : (0, At.Y)()
                                            : (0, S.v)({
                                                source: X.cK.XPAGE_BANNER,
                                              })
                                          : (0, re.g)("xPage");
                                    })(e);
                                  },
                                  ref: function (e) {
                                    return K.refreshObserve(e);
                                  },
                                  children: o(e),
                                },
                                t
                              );
                            }),
                    }),
                });
              })
            ),
            Et =
              (0, g.h)(!1, { usePageWrapper: !0 })(
                (me =
                  (0, N.Z)({
                    title: "".concat(
                      f.default.partnerCN,
                      "火车机票酒店汽车票门票"
                    ),
                  })(
                    (me = (function (e) {
                      (0, o.Z)(n, e);
                      var t = (0, l.Z)(n);
                      function n(e) {
                        var i;
                        return (
                          (0, a.Z)(this, n),
                          ((i = t.call(this, e)).pageId = f.default.isTieyou
                            ? "10650027595"
                            : "10650025968"),
                          (i.pageService = K.create((0, c.Z)(i))),
                          (i.pageRootClassName =
                            "flight-bookx flex flex-column"),
                          (i.pageContentIsFullScreen = !0),
                          (i.autoExpose = !0),
                          i
                        );
                      }
                      return (
                        (0, r.Z)(n, [
                          {
                            key: "componentDidMount",
                            value: function () {
                              Ve();
                            },
                          },
                          {
                            key: "componentDidShow",
                            value: function () {
                              h.IK.forceXCabinListRefresh &&
                                (K.setState({ xCabinCacheUsage: 1 }),
                                be(),
                                (h.IK.forceXCabinListRefresh = !1));
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e,
                                t,
                                n = this,
                                i = (
                                  (null === (e = this.$instance) ||
                                  void 0 === e ||
                                  null === (t = e.router) ||
                                  void 0 === t
                                    ? void 0
                                    : t.params) || {}
                                ).xType,
                                a = void 0 === i ? "flight" : i;
                              return (0, R.BX)(d.zt, {
                                store: this.pageService.store,
                                children: [
                                  (0, R.BX)(p.View, {
                                    className: "flight-bookx-container",
                                    children: [
                                      "flight" == a &&
                                        (0, R.BX)(R.HY, {
                                          children: [
                                            (0, R.tZ)(xt, {}),
                                            (0, R.tZ)(gt, {}),
                                            (0, R.tZ)(Ye, {}),
                                            (0, R.tZ)(je, {}),
                                            (0, R.tZ)(Ke, {}),
                                            (0, R.tZ)(Ft, {}),
                                            (0, R.tZ)(ht, {}),
                                          ],
                                        }),
                                      "airTrain" == a &&
                                        (0, R.BX)(R.HY, {
                                          children: [
                                            (0, R.tZ)(Nt, {}),
                                            (0, R.tZ)(Zt, {}),
                                            (0, R.tZ)(Vt, {}),
                                            (0, R.tZ)(bt, {}),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, R.tZ)(it, {}),
                                  (0, R.tZ)(ct, {}),
                                  (0, R.tZ)(Qe, {}),
                                  (0, R.tZ)(Dt, {}),
                                  (0, R.tZ)(It, {}),
                                  (0, R.tZ)(x.Z, {
                                    ref: function (e) {
                                      n.onDrawerAttach(e, !0);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        n
                      );
                    })(s.default.Component))
                  ) || me)
              ) || me;
          Page(
            (0, i.createPageConfig)(
              Et,
              "pages/flight/bookx/bookx",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                navigationBarFrontColor: "#ffffff",
                backgroundColorBottom: "#EFEFEF",
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
          [
            56620, 8014, 81198, 14906, 49608, 30120, 8905, 16048, 22175, 72032,
            99010, 87479, 16386, 90719, 27849, 54726, 65982, 94885, 61857,
            46263, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(6242);
          }
        ),
          e.O();
      },
    ]);
})();
