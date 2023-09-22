!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/77d3751beb3e2bc1242396ba7c218030.js"),
    require("../sub-common/6703dfed9657e31b3f9022a9c5685c5a.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [13935],
      {
        86276: function (e, t, n) {
          var i = n(32180),
            a = n(57042),
            o = n(24460),
            r = n(81876),
            c = n(21867),
            s = n(86066),
            l = n(45023),
            d = n(79301),
            u = n(95308),
            p = n(22276),
            m = n(90983),
            h = n(298),
            f = n(52500),
            g = n(71515),
            v = n(34229),
            N = n(92954),
            y = n.n(N),
            T = n(81957),
            x = n(48792),
            P = n.n(x),
            Z = n(93761),
            b = n(3205),
            w = n(98920),
            C = n(79792),
            k = n(79910),
            I = n(2326),
            D = n(2809),
            V = n(58676),
            A = n(18783),
            B = n(55916),
            S = n(20592),
            L = n(86977),
            X = n(65573),
            _ = n(8271),
            E = n.n(_),
            M = n(4102),
            R = n(49120),
            O = n(83016),
            z = n(21999),
            F = n(74777),
            q = n(32132),
            H = n(61695),
            Y = n(90129),
            j = n(26862),
            W = n(48813),
            Q = f.default.memo(function (e) {
              var t = e.products,
                n = e.selectedPassengersListLen,
                i = e.toggleAdditionalProduct,
                a = e.onShowProductDetail;
              if (!((null == t ? void 0 : t.length) > 0))
                return (0, W.tZ)(W.HY, {});
              var o = t[0],
                r = t.find(function (e) {
                  return e.selected;
                }),
                c = r || o || {},
                s = c.productName,
                l = c.tag,
                d = c.subtitle,
                u = c.price,
                p = c.unit,
                m = c.features,
                h = !!r,
                f = ""
                  .concat(h ? d + " " : "", "¥")
                  .concat(u)
                  .concat(
                    (function (e, t) {
                      return e > 0 ? "x".concat(e) : "/".concat(t);
                    })(n, p)
                  );
              return (0, W.BX)(g.View, {
                className: "product-other",
                children: [
                  (0, W.BX)(g.View, {
                    className: "product-other-hd flex",
                    children: [
                      (0, W.BX)(g.View, {
                        className: "lbox flex-1 flex-align-items-center",
                        id: "AACi",
                        onClick: function () {
                          null == a || a(r || t[0]);
                        },
                        children: [
                          (0, W.tZ)(g.View, { className: "tit", children: s }),
                          (0, W.tZ)(g.Text, {
                            className: "more-icon iconfont2 ifont2-detail",
                          }),
                          (0, W.tZ)(g.View, { className: "tag", children: l }),
                        ],
                      }),
                      (0, W.BX)(g.View, {
                        className: "rbox flex",
                        children: [
                          (0, W.tZ)(g.View, { className: "desc", children: f }),
                          (0, W.tZ)(g.Text, {
                            className: "check-box ".concat(
                              h ? "ifont2-checkboxed" : "ifont2-checkbox",
                              " iconfont2"
                            ),
                            id: "AACj",
                            onClick: function () {
                              i(h ? r : t[0]);
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, W.tZ)(g.View, {
                    className: "features flex",
                    children:
                      null == m
                        ? void 0
                        : m.map(function (e) {
                            var t = e.icon,
                              n = e.title;
                            return (0,
                            W.BX)(g.View, { className: "feature flex-center", children: [(0, W.tZ)(g.Image, { className: "feature-icon", src: t }), (0, W.tZ)(v.ZtRichText, { className: "feature-txt", nodes: n })] }, n);
                          }),
                  }),
                  (0, W.tZ)(g.View, {
                    className: "insurance-days flex",
                    children: h
                      ? t.map(function (e) {
                          return (0, W.BX)(
                            g.View,
                            {
                              className: "day-box flex-center flex-1 ".concat(
                                e.selected ? "selected" : ""
                              ),
                              id: "AACk",
                              onClick: function () {
                                return (function (e) {
                                  null == i || i(e);
                                })(e);
                              },
                              children: [
                                (0, W.tZ)(g.View, {
                                  className: "day-str",
                                  children: e.subtitle,
                                }),
                                (0, W.BX)(g.View, {
                                  className: "price",
                                  children: ["¥", e.price],
                                }),
                                e.selected
                                  ? (0, W.tZ)(g.Text, {
                                      className: "iconfont2 ifont2-selected",
                                    })
                                  : (0, W.tZ)(W.HY, {}),
                              ],
                            },
                            e.code
                          );
                        })
                      : (0, W.tZ)(W.HY, {}),
                  }),
                ],
              });
            }),
            U = f.default.memo(function (e) {
              var t = e.product,
                n = e.selectedPassengersListLen,
                i = e.toAdditionalProductDetail,
                a = e.toggleAdditionalProduct,
                o = e.calculateNum,
                r = "/".concat(t.unit);
              return (
                t.selected &&
                  n > 0 &&
                  (r = "×".concat(o({ saleType: t.saleType }))),
                (0, W.BX)(g.View, {
                  className: "product-one flex",
                  children: [
                    (0, W.BX)(g.View, {
                      className: "cont flex-1",
                      children: [
                        (0, W.BX)(g.View, {
                          className: "hd ft-15-m flex-align-items-center",
                          children: [
                            t.productName,
                            (0, W.tZ)(g.Text, {
                              className: "ifont-detail color-9 iconfont",
                              id: "AACl",
                              onClick: function () {
                                return i(t);
                              },
                            }),
                            (0, W.BX)(g.View, {
                              className: "tag flex-align-items-center",
                              children: [
                                (0, W.tZ)(g.Text, {
                                  className: "ifont-hand iconfont",
                                }),
                                "出行必备",
                              ],
                            }),
                          ],
                        }),
                        (0, W.tZ)(g.View, {
                          className: "features",
                          children: t.features.map(function (e, t) {
                            return (0,
                            W.BX)(g.View, { className: "feature-item color-9 flex-align-items-center", children: [(0, W.tZ)(g.Image, { className: "icon", src: e.icon, lazyLoad: !0 }), (0, W.tZ)(v.ZtRichText, { nodes: e.title })] }, t);
                          }),
                        }),
                      ],
                    }),
                    (0, W.tZ)(g.View, {
                      className: "rbox",
                      children: (0, W.BX)(g.View, {
                        className: "flex-align-items-center",
                        id: "AACm",
                        onClick: function () {
                          return a(t);
                        },
                        children: [
                          (0, W.BX)(g.Text, {
                            className: "ft-15-m color-3",
                            children: [(0, W.tZ)(j.Z, {}), t.price],
                          }),
                          (0, W.tZ)(g.Text, {
                            className: "ft-15-r color-9",
                            children: r,
                          }),
                          (0, W.tZ)(g.Text, {
                            className: "checkbox ".concat(
                              t.selected
                                ? "ifont2-checkboxed"
                                : "ifont2-checkbox",
                              " iconfont2"
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              );
            }),
            J =
              "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/card/xuangou/icon_xuangou_no@3x.png",
            G = {
              noInsur: !0,
              productName: "无保障",
              insuranceIcon:
                "https://images3.c-ctrip.com/ztrip/zhixingios/dindanxiangqinye/10/wu@3x.png",
              features: [J, J],
              selected: !0,
            },
            $ = f.default.memo(function (e) {
              var t = e.noInsur,
                n = e.selectedPassengersListLen,
                i = e.recommendedTipsText,
                a = e.noInsurSelected,
                o = e.toAdditionalProductDetail,
                r = e.toggleAdditionalProduct,
                c = e.calculateNum,
                s = e.onShowProductDetail,
                l = t ? G : e.product,
                d = l.productName,
                u = l.insuranceIcon,
                p = l.features,
                m = "";
              if (!t) {
                var h = "/".concat(l.unit);
                l.selected &&
                  n > 0 &&
                  (h = "×".concat(c({ saleType: l.saleType }))),
                  (m = "".concat(l.price).concat(h));
              }
              var f = t ? a : l.selected,
                N = "";
              return (
                2 == (null == i ? void 0 : i.length) && (N = f ? i[1] : i[0]),
                (0, W.BX)(g.View, {
                  className: "product-item "
                    .concat(f ? "selected" : "", " ")
                    .concat(t ? "no-insur" : ""),
                  children: [
                    (0, W.BX)(g.View, {
                      className: "topbox flex-align-items-center flex-column",
                      children: [
                        (0, W.tZ)(g.Image, {
                          src: u,
                          lazyLoad: !0,
                          className: "icon",
                        }),
                        (0, W.BX)(g.View, {
                          className: "title",
                          id: "AACn",
                          onClick: function () {
                            null == s || s(l);
                          },
                          children: [
                            d,
                            !t &&
                              (0, W.tZ)(g.Text, {
                                className: "iconfont2 ifont2-detail",
                              }),
                          ],
                        }),
                        (0, W.tZ)(g.View, {
                          className: "subtitle",
                          children: t
                            ? ""
                            : (0, W.BX)(g.View, {
                                className:
                                  "font-12 color-9 flex-align-items-center",
                                id: "AACo",
                                onClick: function () {
                                  return o(l);
                                },
                                children: [(0, W.tZ)(j.Z, {}), m],
                              }),
                        }),
                      ],
                    }),
                    (0, W.BX)(g.View, {
                      className: "botmbox flex-align-items-center flex-column",
                      id: "AACp",
                      onClick: function () {
                        (t && a) || r(l);
                      },
                      children: [
                        (0, W.tZ)(g.View, {
                          className: "features flex-1",
                          children: [0, 1].map(function (e) {
                            var n;
                            return (0,
                            W.tZ)(g.View, { className: "feature-item font-12 color-6 flex-center", children: t ? (0, W.tZ)(g.Image, { className: "no-icon", src: p[e], lazyLoad: !0 }) : (0, W.tZ)(v.ZtRichText, { className: "font-12 color-6", nodes: null === (n = p[e]) || void 0 === n ? void 0 : n.title }) }, e);
                          }),
                        }),
                        (0, W.tZ)(g.Text, {
                          className: "checkbox ".concat(
                            f ? "ifont2-checkboxed" : "ifont2-checkbox",
                            " iconfont2"
                          ),
                        }),
                      ],
                    }),
                    N &&
                      (0, W.tZ)(g.View, {
                        className: "float-tip trigon top ".concat(
                          f ? "selected" : "active"
                        ),
                        children: N,
                      }),
                  ],
                })
              );
            }),
            K = f.default.memo(function (e) {
              var t = e.filteredAddtionalProducts,
                n = e.isProductSelect,
                i = e.recommendedTipsText,
                a = e.selectedPassengersListLen,
                o = e.toAdditionalProductDetail,
                r = e.toggleAdditionalProduct,
                c = e.calculateNum,
                s = e.onShowProductDetail;
              return (0, W.tZ)(g.View, {
                className: "product",
                children: (0, W.tZ)(g.ScrollView, {
                  scrollWithAnimation: !0,
                  scrollX: !0,
                  className: "product-list-wrapper",
                  children: (0, W.BX)(g.View, {
                    className: "product-list",
                    children: [
                      (0, W.tZ)($, {
                        noInsur: !0,
                        selectedPassengersListLen: a,
                        noInsurSelected: !n,
                        toAdditionalProductDetail: o,
                        toggleAdditionalProduct: r,
                        calculateNum: c,
                      }),
                      t.map(function (e, t) {
                        return (0,
                        W.tZ)($, { product: e, selectedPassengersListLen: a, toAdditionalProductDetail: o, toggleAdditionalProduct: r, recommendedTipsText: 0 == t ? i : null, calculateNum: c, onShowProductDetail: s }, t);
                      }),
                    ],
                  }),
                }),
              });
            }),
            ee = f.default.memo(function (e) {
              var t,
                n,
                i = e.appendProductNode,
                a = e.selectedPassengersListLen,
                o = e.toAdditionalProductDetail,
                r = e.toggleAdditionalProduct,
                c = e.calculateNum,
                s = e.onShowProductDetail,
                l = e.fromPage,
                d = i.banners,
                u = void 0 === d ? [] : d,
                p = i.additionalProducts,
                m = i.bottomText,
                h = i.bottomCompanyLogo,
                N = i.recommendedTipsText,
                y = p,
                T =
                  null !==
                    (t =
                      null == y
                        ? void 0
                        : y.filter(function (e) {
                            return "10060" != e.productSubType;
                          })) && void 0 !== t
                    ? t
                    : [],
                x =
                  null !==
                    (n =
                      null == y
                        ? void 0
                        : y.filter(function (e) {
                            return "10060" == e.productSubType;
                          })) && void 0 !== n
                    ? n
                    : [],
                P = T.length,
                Z = y.some(function (e) {
                  return e.selected;
                }),
                b = u.find(function (e) {
                  return e.selected == Z;
                }),
                w = b.background,
                C = b.title,
                I = b.weather,
                D = (0, f.useState)(!1),
                V = (0, Y.Z)(D, 2),
                A = V[0],
                B = V[1];
              (0, f.useEffect)(
                function () {
                  Z && B(!0);
                },
                [Z]
              ),
                (0, f.useEffect)(function () {
                  if (y.length > 0 && "inland_book" === l) {
                    var e = y.map(function (e) {
                      return {
                        ProductId: e.productCode,
                        ProductName: e.productName,
                        Price: e.price,
                      };
                    });
                    k.Z.sendUbtTrace("FltWWrite_InsuranceSales_exposure", {
                      ProductsList: e,
                    });
                  }
                }, []);
              var S = function (e) {
                e.selected || B(!0), r(e);
              };
              return (0, W.BX)(g.View, {
                className: "insurance-box ".concat(Z ? "selected" : ""),
                children: [
                  (0, W.tZ)(g.Image, {
                    src: Z
                      ? "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/baoxian/baoxian_yixuan.png"
                      : w,
                    lazyLoad: !0,
                    className: "bg-img",
                  }),
                  (0, W.BX)(g.View, {
                    className: "insurance-hd flex-align-items-center",
                    children: [
                      (0, W.tZ)(v.ZtRichText, {
                        nodes: C,
                        className: "flex-1",
                      }),
                      !Z &&
                        I &&
                        (0, W.BX)(g.View, {
                          className: "weather flex-align-items-center",
                          children: [
                            (0, W.BX)(g.View, {
                              className: "desc",
                              children: [
                                (0, W.tZ)(g.View, { children: I.title }),
                                (0, W.tZ)(g.View, { children: I.subtitle }),
                              ],
                            }),
                            (0, W.tZ)(g.Image, {
                              className: "img",
                              src: I.image,
                              lazyLoad: !0,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, W.BX)(g.View, {
                    className: "insurance-bd",
                    children: [
                      1 == P
                        ? (0, W.tZ)(U, {
                            product: T[0],
                            selectedPassengersListLen: a,
                            toAdditionalProductDetail: o,
                            toggleAdditionalProduct: S,
                            calculateNum: c,
                          })
                        : (0, W.tZ)(K, {
                            isProductSelect: Z,
                            filteredAddtionalProducts: T,
                            recommendedTipsText: N,
                            selectedPassengersListLen: a,
                            toAdditionalProductDetail: o,
                            toggleAdditionalProduct: S,
                            calculateNum: c,
                            onShowProductDetail: s,
                          }),
                      (0, W.tZ)(Q, {
                        products: x,
                        selectedPassengersListLen: a,
                        toggleAdditionalProduct: r,
                        onShowProductDetail: s,
                      }),
                      A &&
                        (0, W.BX)(g.View, {
                          className: "product-intro",
                          children: [
                            (0, W.BX)(g.View, {
                              className: "flex",
                              children: [
                                (0, W.tZ)(g.Image, {
                                  src: h,
                                  lazyLoad: !0,
                                  className: "logo",
                                  mode: "heightFix",
                                }),
                                (0, W.tZ)(g.Text, {
                                  className: "ins-tips",
                                  id: "AACq",
                                  onClick: function () {
                                    var e =
                                      null == y
                                        ? void 0
                                        : y.find(function (e) {
                                            return e.lastSelect;
                                          });
                                    o(e || y[0]);
                                  },
                                  children: "投保须知",
                                }),
                              ],
                            }),
                            (0, W.tZ)(g.View, {
                              className: "intro-txt color-9",
                              children: m,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            }),
            te = (0, X.$j)(
              function (e) {
                return {
                  appendProductNode: e.appendProductModel.appendProductNode,
                };
              },
              function (e) {
                var t = e.appendProductModel;
                return {
                  toggleAdditionalProduct: t.toggleAdditionalProduct,
                  onShowProductDetail: t.showInsuranceDetailDrawer,
                };
              },
              function (e, t, n) {
                return (0, h.Z)((0, h.Z)((0, h.Z)({}, e), t), n);
              }
            )(function (e) {
              var t = e.selectedPassengersListLen,
                n = e.appendProductNode,
                i = e.toggleAdditionalProduct,
                a = e.onShowProductDetail,
                o = e.calculateNum,
                r = e.calculatePrice;
              if (!n) return (0, W.tZ)(W.HY, {});
              return (0, W.tZ)(ee, {
                fromPage: "intl_book",
                appendProductNode: n,
                selectedPassengersListLen: t,
                toAdditionalProductDetail: function (e) {
                  var t = e.descriptionUrl,
                    n = e.productName;
                  "INS" !== e.type
                    ? t &&
                      k.Z.commonNavigator(t.replace(/http:\/\//, "https://"))
                    : b.Z.twebview({
                        data: {
                          url: t.replace(/http:\/\//, "https://"),
                          title: n,
                        },
                      });
                },
                calculateNum: o,
                toggleAdditionalProduct: function (e) {
                  null == i || i(e), r();
                },
                onShowProductDetail: a,
              });
            }),
            ne = n(41991),
            ie = n(44778),
            ae = n(39339),
            oe = {
              appendProductModel: (0, ie.NY)()({
                state: { appendProductNode: null },
                reducers: {
                  setAppendProductNode: function (e, t) {
                    return (0, h.Z)(
                      (0, h.Z)({}, e),
                      {},
                      { appendProductNode: t }
                    );
                  },
                  toggleAdditionalProduct: function (e, t) {
                    var n = e.appendProductNode,
                      i = n.additionalProducts,
                      a = (0, p.Z)(i);
                    return t.noInsur
                      ? (a.forEach(function (e) {
                          return (e.selected = !1);
                        }),
                        (0, h.Z)(
                          (0, h.Z)({}, e),
                          {},
                          {
                            appendProductNode: (0, h.Z)(
                              (0, h.Z)({}, n),
                              {},
                              { additionalProducts: a }
                            ),
                          }
                        ))
                      : (i.forEach(function (e) {
                          e.productSubType == t.productSubType &&
                            (e.selected =
                              e.productCode == t.productCode && !e.selected),
                            e.selected && (e.lastSelect = !0);
                        }),
                        (0, h.Z)(
                          (0, h.Z)({}, e),
                          {},
                          {
                            appendProductNode: (0, h.Z)(
                              (0, h.Z)({}, n),
                              {},
                              { additionalProducts: a }
                            ),
                          }
                        ));
                  },
                },
                effects: function (e) {
                  return {
                    showInsuranceDetailDrawer: (function () {
                      var t = (0, u.Z)(
                        (0, d.Z)().mark(function t(n) {
                          var i, a, o, r, c, s, l, u, p, m;
                          return (0, d.Z)().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (n && !n.noInsur) {
                                    t.next = 2;
                                    break;
                                  }
                                  return t.abrupt("return");
                                case 2:
                                  return (
                                    (i =
                                      re.State.appendProductModel
                                        .appendProductNode),
                                    (a = i.insCompanyCode),
                                    (o = i.bottomCompanyLogo),
                                    (r = n.productSystemCode),
                                    (c = { TK: "泰康保险", ZA: "众安保险" }[a]),
                                    (s = { data: { productId: r, source: 0 } }),
                                    (0, R.showLoading)(),
                                    (t.next = 10),
                                    (0, B.v6)(s)
                                  );
                                case 10:
                                  (l = t.sent),
                                    (0, R.hideLoading)(),
                                    1 == l.resultCode &&
                                      ((u = l.data),
                                      (p = u.model),
                                      (m = u.newModel),
                                      console.debug(p, m),
                                      (0, ae.u)({
                                        insuranceCompany: c,
                                        insuranceLogo: o,
                                        product: n,
                                        data: m,
                                        onAddInsurance: function (t) {
                                          t.selected ||
                                            e.appendProductModel.toggleAdditionalProduct(
                                              t
                                            );
                                        },
                                      }));
                                case 13:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  };
                },
              }),
            },
            re = (function (e) {
              (0, c.Z)(n, e);
              var t = (0, s.Z)(n);
              function n() {
                return (0, a.Z)(this, n), t.apply(this, arguments);
              }
              return (
                (0, o.Z)(n, null, [
                  {
                    key: "State",
                    get: function () {
                      return this.getInstance().store.getState();
                    },
                  },
                  {
                    key: "Dispatch",
                    get: function () {
                      return this.getInstance().store.dispatch;
                    },
                  },
                ]),
                n
              );
            })(ne.Z);
          function ce(e) {
            var t = e.tripStartDate,
              n = e.flights;
            if (!((null == n ? void 0 : n.length) > 0))
              return (0, W.tZ)(W.HY, {});
            var i = function (e) {
              var t = parseInt(e / 60),
                n = e % 60;
              return ""
                .concat(t > 0 ? t + "h" : "")
                .concat(n > 0 ? n + "m" : "");
            };
            return (0, W.tZ)(g.View, {
              className: "seg-flt-info",
              children:
                null == n
                  ? void 0
                  : n.map(function (e) {
                      var n = e.dateInfo,
                        a = e.departAirportInfo,
                        o = e.arriveAirportInfo,
                        r = e.basicInfo,
                        c = e.craftInfo,
                        s = n || {},
                        l = s.departDate,
                        d = s.arriveDate,
                        u = s.journeyTime,
                        p = s.transferTime,
                        m = E()(l).format("HH:mm"),
                        h = E()(l).isSame(t, "day"),
                        f = E()(d).format("HH:mm"),
                        v = E()(d).isSame(t, "day"),
                        N = [];
                      u &&
                        N.push({ text: "飞".concat(i(u)), class: "color-2" }),
                        r &&
                          (N.push({
                            text: r.airlineShortName,
                            icon: r.airlineLogoUrl,
                          }),
                          N.push({ text: r.flightNo })),
                        c && N.push({ text: c.craftName });
                      var y = p > 0,
                        T = a.cityName,
                        x = i(p);
                      return (0, W.BX)(W.HY, {
                        children: [
                          y &&
                            (0, W.BX)(g.View, {
                              className: "trans-node flex-align-items-center",
                              children: [
                                (0, W.tZ)(g.View, { className: "node" }),
                                (0, W.BX)(g.View, {
                                  className: "trans-info",
                                  children: ["中转", T, " ", x],
                                }),
                              ],
                            }),
                          (0, W.BX)(g.View, {
                            className: "flt-info flex-align-items-center",
                            children: [
                              (0, W.BX)(g.View, {
                                className: "time-info",
                                children: [
                                  (0, W.BX)(g.View, {
                                    className: "dpt time-item",
                                    children: [
                                      m,
                                      !h &&
                                        (0, W.tZ)(g.Text, {
                                          className: "date-notice",
                                          children: E()(l).format("MM-DD"),
                                        }),
                                    ],
                                  }),
                                  (0, W.BX)(g.View, {
                                    className: "arr time-item",
                                    children: [
                                      f,
                                      !v &&
                                        (0, W.tZ)(g.Text, {
                                          className: "date-notice",
                                          children: E()(d).format("MM-DD"),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, W.tZ)(g.View, { className: "divider" }),
                              (0, W.BX)(g.View, {
                                className: "airport-info flex-1",
                                children: [
                                  (0, W.BX)(g.View, {
                                    className: "flex",
                                    children: [
                                      (0, W.tZ)(g.Text, {
                                        className: "airport ellipsis",
                                        children: a.airportFullName,
                                      }),
                                      (0, W.tZ)(g.Text, {
                                        className: "terminal",
                                        children:
                                          null == a
                                            ? void 0
                                            : a.buildingShortName,
                                      }),
                                    ],
                                  }),
                                  (0, W.BX)(g.View, {
                                    className: "flex",
                                    children: [
                                      (0, W.tZ)(g.Text, {
                                        className: "airport ellipsis",
                                        children: o.airportFullName,
                                      }),
                                      (0, W.tZ)(g.Text, {
                                        className: "terminal",
                                        children:
                                          null == o
                                            ? void 0
                                            : o.buildingShortName,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, W.tZ)(g.View, {
                                className: "airplane-info flex",
                                children: (0, W.tZ)(g.View, {
                                  className: "flex-align-items-center",
                                  children: (0, W.tZ)(g.View, {
                                    className: "flex-1 tar",
                                    children:
                                      null == N
                                        ? void 0
                                        : N.map(function (e) {
                                            var t;
                                            return (0,
                                            W.BX)(g.View, { className: "item", children: [e.icon && (0, W.tZ)(g.Image, { className: "airplane-icon", src: e.icon }), (0, W.tZ)(g.Text, { className: "airplane-txt ".concat(null !== (t = e.class) && void 0 !== t ? t : ""), children: e.text })] }, e.texts);
                                          }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      });
                    }),
            });
          }
          function se(e) {
            var t = e.segments,
              n = e.onClose;
            if (!((null == t ? void 0 : t.length) > 0))
              return (0, W.tZ)(W.HY, {});
            var i = (
                t.find(function (e) {
                  return 1 == e.segmentNo;
                }) || {}
              ).flightList,
              a = (
                (
                  (void 0 === i ? [] : i).find(function (e) {
                    return 1 == e.flightIndex;
                  }) || {}
                ).dateInfo || {}
              ).departDate;
            return (0, W.BX)(g.View, {
              className: "flt-intl-seg-detail flex flex-column",
              children: [
                (0, W.tZ)(g.View, {
                  className: "flex-1",
                  style: "overflow-y: auto;",
                  children:
                    null == t
                      ? void 0
                      : t.map(function (e) {
                          var t = 2 == e.segmentNo,
                            n = e.dptTimeStr.split(" "),
                            i = (e.travelTime || {}).duration,
                            o =
                              n[0] +
                              " " +
                              n[1] +
                              " " +
                              (function (e) {
                                var t = parseInt(e / 60),
                                  n = e % 60;
                                return ""
                                  .concat(t > 0 ? t + "时" : "")
                                  .concat(n > 0 ? n + "分" : "");
                              })(i);
                          return (0,
                          W.BX)(g.View, { className: "segment-wrap", children: [(0, W.BX)(g.View, { className: "seg-hd flex-align-items-center", children: [(0, W.tZ)(g.Text, { className: "tag ".concat(t ? "bg-green" : ""), children: e.tag }), (0, W.tZ)(g.Text, { className: "time-info", children: o })] }, e.segmentNo), (0, W.tZ)(ce, { tripStartDate: a, flights: e.flightList })] }, e.segmentNo);
                        }),
                }),
                (0, W.tZ)(g.Text, {
                  id: "AaAk",
                  onClick: n,
                  className: "iconfont2 ifont2-collapse",
                }),
              ],
            });
          }
          (0, l.Z)(re, "store", { models: oe });
          var le = function (e) {
              var t,
                n,
                i = e.segments,
                a = e.cabin,
                o = e.onClickBaggageAndPolicies;
              if (!((null == i ? void 0 : i.length) > 0))
                return (0, W.tZ)(W.HY, {});
              var r = "",
                c = a || {},
                s = c.grades,
                l = c.reducedPrice,
                d = c.priceList;
              if (!k.Z.isEmptyObject(s)) {
                var u = s.reduce(function (e, t) {
                  return e && e.classGrade > t.classGrade ? t : e;
                }, s[0]);
                r = u ? u.displayClass : "";
              }
              var p =
                  null == d ||
                  null ===
                    (t = d.find(function (e) {
                      return 1 === e.passengerType;
                    })) ||
                  void 0 === t
                    ? void 0
                    : t.salePrice.zt_add(l),
                m =
                  null == d ||
                  null ===
                    (n = d.find(function (e) {
                      return 2 === e.passengerType;
                    })) ||
                  void 0 === n
                    ? void 0
                    : n.salePrice.zt_add(l);
              return (0, W.BX)(g.View, {
                className: "flt-intl-seg-info white-box",
                children: [
                  null == i
                    ? void 0
                    : i.map(function (e) {
                        return (0,
                        W.BX)(g.View, { className: "seg-hd flex-align-items-center", children: [(0, W.tZ)(g.Text, { className: "tag ".concat(2 == e.segmentNo ? "bg-green" : ""), children: e.tag }), (0, W.tZ)(g.Text, { className: "time-info", children: e.dptTimeStr })] }, e.segmentNo);
                      }),
                  (0, W.BX)(g.View, {
                    className: "price-info flex-align-items-center",
                    children: [
                      !!p &&
                        (0, W.BX)(g.View, {
                          className: "price-item",
                          children: [
                            (0, W.tZ)(g.Text, {
                              className: "type",
                              children: r,
                            }),
                            "¥",
                            p,
                            "（含税价）",
                          ],
                        }),
                      !!m &&
                        (0, W.BX)(g.View, {
                          className: "price-item",
                          children: [
                            (0, W.tZ)(g.Text, {
                              className: "type",
                              children: "儿童",
                            }),
                            "¥",
                            m,
                            "（含税价）",
                          ],
                        }),
                    ],
                  }),
                  (0, W.tZ)(g.View, { className: "divider" }),
                  (0, W.BX)(g.View, {
                    className: "features flex-align-items-center",
                    id: "AaAl",
                    onClick: o,
                    children: [
                      (0, W.tZ)(g.View, {
                        className: "feat-txt flex-1",
                        children: "退改详情 · 行李额 · 保障出行",
                      }),
                      (0, W.tZ)(g.Text, { className: "iconfont2 ifont2-arr" }),
                    ],
                  }),
                  (0, W.tZ)(g.Text, {
                    className: "iconfont2 ifont2-expand",
                    id: "AaAm",
                    onClick: function () {
                      !(function (e) {
                        var t = e.segments;
                        y()
                          .createSelectorQuery()
                          .select(".flt-intl-seg-info")
                          .boundingClientRect()
                          .exec(function (e) {
                            var n = (null == e ? void 0 : e[0]).top;
                            (0, R.getCurrentPage)().showCommonPanel({
                              top: n > 0 ? n : 47,
                              countCustomNav: !n,
                              content: function (e) {
                                var n = e.onClose;
                                return (0, W.tZ)(se, {
                                  segments: t,
                                  onClose: n,
                                });
                              },
                              className: "flight-detail-pop",
                            });
                          });
                      })({ segments: i });
                    },
                  }),
                ],
              });
            },
            de = f.default.memo(function (e) {
              var t = e.passengers,
                n = e.togglePassenger,
                i = e.editPassenger;
              return (null == t ? void 0 : t.length) > 0
                ? (0, W.tZ)(g.View, {
                    className: "pas-list",
                    children: t.map(function (e, t) {
                      return (0, W.BX)(
                        g.View,
                        {
                          className: "pas-item",
                          children: [
                            (0, W.BX)(g.View, {
                              className: "flex-align-items-center",
                              children: [
                                (0, W.tZ)(g.Text, {
                                  className: "iconfont2 ifont2-edit",
                                  id: "AaAc",
                                  onClick: function () {
                                    return i(e);
                                  },
                                }),
                                (0, W.BX)(g.View, {
                                  className: "flex-1 pr-48 overflow-hiden",
                                  id: "AaAd",
                                  onClick: function () {
                                    return n({ pid: e.passengerID });
                                  },
                                  children: [
                                    (0, W.BX)(g.View, {
                                      className: "flex-align-items-center",
                                      children: [
                                        (0, W.BX)(g.Text, {
                                          className: "pas-name ellipsis",
                                          children: [
                                            e.nameEN ||
                                              e.name ||
                                              e.passengerName,
                                            (e.nameEN || e.name) &&
                                            e.passengerName
                                              ? "（".concat(
                                                  e.passengerName,
                                                  "）"
                                                )
                                              : "",
                                          ],
                                        }),
                                        e.passengerType &&
                                          (0, W.tZ)(g.Text, {
                                            className: "pas-tag",
                                            children: e.passengerType.slice(
                                              0,
                                              -1
                                            ),
                                          }),
                                      ],
                                    }),
                                    (0, W.BX)(g.View, {
                                      className: "passport",
                                      children: [
                                        e.passportType,
                                        " ",
                                        e.maskPassportCode,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, W.tZ)(g.Text, {
                                  className: "iconfont2 ifont2-".concat(
                                    e.selected ? "checkboxed" : "checkbox"
                                  ),
                                  id: "AaAe",
                                  onClick: function () {
                                    return n({ pid: e.passengerID });
                                  },
                                }),
                              ],
                            }),
                            (0, W.tZ)(g.View, { className: "ext-info" }),
                          ],
                        },
                        t
                      );
                    }),
                  })
                : (0, W.tZ)(W.HY, {});
            }),
            ue = f.default.memo(function (e) {
              var t = e.isLogin,
                n = e.maxInventory,
                i = e.minQuantity,
                a = e.email,
                o = e.phoneNumber,
                r = e.passengers,
                c = e.togglePassenger,
                s = e.editPassenger,
                d = e.getPhoneNumberAction,
                u = e.openMorePassengers,
                p = e.onPhoneInput,
                m = e.onEmailInput,
                f =
                  null == r
                    ? void 0
                    : r.filter(function (e) {
                        return e.selected;
                      }),
                v = "选择乘机人";
              if ((null == r ? void 0 : r.length) > 0) {
                if ((null == f ? void 0 : f.length) > 0) {
                  var N = f.reduce(function (e, t) {
                    return e[t.psgerType]
                      ? (0, h.Z)(
                          (0, h.Z)({}, e),
                          {},
                          (0, l.Z)({}, t.psgerType, e[t.psgerType] + 1)
                        )
                      : (0, h.Z)(
                          (0, h.Z)({}, e),
                          {},
                          (0, l.Z)({}, t.psgerType, 1)
                        );
                  }, {});
                  v = Object.keys(N).reduce(function (e, t) {
                    return "".concat(e, " ").concat(N[t]).concat(t);
                  }, "已选:");
                }
              } else v = "暂无乘机人";
              var y =
                  n < 9 ? "限".concat(i == n ? n : i + "-" + n, "人预定") : "",
                T = function () {
                  return t ? u() : d();
                };
              return (0,
              W.BX)(g.View, { className: "flt-intl-pas-module white-box", children: [(0, W.BX)(g.View, { className: "pas-mod-hd flex-align-items-center", children: [(0, W.BX)(g.View, { className: "flex-1 flex-align-items-center", children: [(0, W.tZ)(g.Text, { className: "status-txt", children: v }), (0, W.tZ)(g.Text, { className: "status-tips", children: y })] }), (null == r ? void 0 : r.length) > 0 && (0, W.BX)(g.View, { className: "more-pas flex-align-items-center", id: "AaAf", onClick: T, children: [(0, W.tZ)(g.Text, { className: "iconfont2 ifont2-add" }), "更多乘机人"] })] }), !((null == r ? void 0 : r.length) > 0) && (0, W.BX)(g.Button, { className: "add-pas-btn flex-center", id: "AaAg", onClick: T, children: [(0, W.tZ)(g.Text, { className: "iconfont2 ifont2-add" }), "添加乘机人"] }), (null == r ? void 0 : r.length) > 0 && (0, W.tZ)(de, { passengers: r, togglePassenger: c, editPassenger: s }), (0, W.BX)(g.View, { className: "contacts-form", children: [(0, W.BX)(g.View, { className: "form-item flex-align-items-center", children: [(0, W.tZ)(g.Label, { for: "phoneNumber", children: (0, W.tZ)(g.Text, { className: "label-txt", children: "联系手机" }) }), (0, W.tZ)(g.View, { className: "country-code", children: "+86" }), (0, W.tZ)(g.Input, { type: "number", value: t ? o : "", name: "phoneNumber", onInput: p, className: "contacts-input flex-1", placeholderClass: "input-placeholder", placeholder: "用于接收航班信息" })] }), (0, W.BX)(g.View, { className: "form-item flex-align-items-center", children: [(0, W.tZ)(g.Label, { for: "email", children: (0, W.tZ)(g.Text, { className: "label-txt", children: "联系邮箱" }) }), (0, W.tZ)(g.Input, { type: "text", name: "email", value: a, onInput: m, className: "contacts-input flex-1", placeholderClass: "input-placeholder", placeholder: "用于接收电子行程单" })] })] })] });
            }),
            pe = n(21828);
          function me(e) {
            var t = e.price,
              n = void 0 === t ? 0 : t,
              i = e.detailShow,
              a = void 0 !== i && i,
              o = e.nextButtonContent,
              r = void 0 === o ? "下一步" : o,
              c = e.detailButtonText,
              s = void 0 === c ? "明细" : c,
              l = e.priceBottomContent,
              d = e.priceRightContent,
              u = e.onToggleDetail,
              p = e.onNextStepClick;
            return (0, W.BX)(pe.Z, {
              className: "pay-box",
              children: [
                (0, W.BX)(g.View, {
                  className: "lbox flex-1 flex",
                  children: [
                    (0, W.BX)(g.View, {
                      className: "price-info",
                      children: [
                        (0, W.BX)(g.View, {
                          children: [
                            (0, W.tZ)(g.View, {
                              className: "info flex-align-items-center",
                              children: (0, W.BX)(g.View, {
                                className: "price",
                                children: [
                                  (0, W.tZ)(g.Text, {
                                    className: "rmb-sign",
                                    children: (0, W.tZ)(j.Z, {}),
                                  }),
                                  n,
                                ],
                              }),
                            }),
                            (0, W.tZ)(g.View, {
                              className: "price-btm",
                              children: "function" == typeof l ? l() : l,
                            }),
                          ],
                        }),
                        (0, W.tZ)(g.View, {
                          className: "price-right",
                          children: "function" == typeof d ? d() : d,
                        }),
                      ],
                    }),
                    (0, W.BX)(g.View, {
                      className: "detail-btn flex-align-items-center",
                      id: "AaAh",
                      onClick: u,
                      children: [
                        s,
                        (0, W.tZ)(g.Text, {
                          className: "iconfont2 ifont2-shouqi_linea_12 ".concat(
                            a ? "up" : "down"
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, W.tZ)(g.View, {
                  className: "rbox",
                  children: (0, W.tZ)(g.View, {
                    className: "next-btn flex-center",
                    id: "AaAi",
                    onClick: p,
                    children: "function" == typeof r ? r() : r,
                  }),
                }),
              ],
            });
          }
          var he,
            fe = f.default.memo(function (e) {
              var t = e.showDetail,
                n = e.price,
                i = e.favorablePrice,
                a = e.maxInventory,
                o = e.onBook,
                r = e.onTogglePriceDetail,
                c = i ? "已减" + i + "元" : "",
                s = a < 9 ? "仅剩" + a + "张" : "";
              return (0, W.tZ)(me, {
                detailShow: t,
                price: n,
                priceBottomContent: c,
                nextButtonContent: function () {
                  return (0, W.BX)(g.View, {
                    style: "text-align: center;",
                    children: [
                      (0, W.tZ)(g.View, { children: "去付款" }),
                      (0, W.tZ)(g.View, {
                        style:
                          "font-size: 10px;font-weight: normal;line-height: 12px",
                        children: s,
                      }),
                    ],
                  });
                },
                onToggleDetail: function () {
                  r();
                },
                onNextStepClick: function (e) {
                  t && r(), null == o || o(e);
                },
              });
            }),
            ge = f.default.memo(function (e) {
              var t = e.data;
              return (0, W.tZ)(g.View, {
                className: "flt-intl-price-cont",
                children: (0, W.tZ)(g.View, {
                  className: "price-detail-wrap",
                  children:
                    null == t
                      ? void 0
                      : t.map(function (e) {
                          var t, n, i;
                          return (0, W.BX)(
                            g.View,
                            {
                              className: "price-cate",
                              children: [
                                (0, W.BX)(g.View, {
                                  className:
                                    "price-cate-hd flex-align-items-center",
                                  children: [
                                    (0, W.tZ)(g.View, {
                                      className: "price-cate-desc flex-1",
                                      children: e.name,
                                    }),
                                    (0, W.BX)(g.View, {
                                      className: "price-cate-value",
                                      children: [
                                        null !== (t = e.price) && void 0 !== t
                                          ? t
                                          : "",
                                        e.num ? "x".concat(e.num) : "",
                                        null !== (n = e.unit) && void 0 !== n
                                          ? n
                                          : "",
                                      ],
                                    }),
                                  ],
                                }),
                                null === (i = e.items) || void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      var t, n, i;
                                      return (0,
                                      W.BX)(g.View, { className: "price-item flex-align-items-center ".concat(null !== (t = e.class) && void 0 !== t ? t : ""), children: [(0, W.tZ)(g.View, { className: "price-item-desc flex-1", children: e.item }), (0, W.BX)(g.View, { className: "price-item-value", children: [null !== (n = e.price) && void 0 !== n ? n : "", e.num ? "x".concat(e.num) : "", null !== (i = e.unit) && void 0 !== i ? i : ""] })] }, e.item);
                                    }),
                              ],
                            },
                            e.name
                          );
                        }),
                }),
              });
            }),
            ve = f.default.memo(function (e) {
              var t = e.discountInfos,
                n = e.selectedCoupon,
                i = e.unAuthCoupon,
                a = e.couponPrice,
                o = e.couponList,
                r = e.toCouponList,
                c = a.zt_add(
                  null == t
                    ? void 0
                    : t.reduce(function (e, t) {
                        return e.zt_add(t.value);
                      }, 0)
                );
              return (0, W.BX)(g.View, {
                className: "flt-intl-discount-area white-box",
                children: [
                  (0, W.BX)(g.View, {
                    className: "flex-align-items-center",
                    children: [
                      (0, W.tZ)(g.View, {
                        className: "tit flex-1",
                        children: "本单优惠",
                      }),
                      c > 0 &&
                        (0, W.BX)(g.View, {
                          className: "total flex-align-items-center",
                          children: [
                            "共优惠",
                            (0, W.BX)(g.Text, {
                              className: "color-red",
                              children: ["-¥", c],
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, W.BX)(g.View, {
                    className: "discount-list",
                    children: [
                      (0, W.BX)(g.View, {
                        className: "discount-item flex-align-items-center",
                        id: "AaAX",
                        onClick: r,
                        children: [
                          (0, W.BX)(g.View, {
                            className: "flex-1 flex-align-items-center",
                            children: [
                              (0, W.tZ)(g.Image, {
                                className: "item-icon",
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/youhui/icon_tx_quan@3x.webp",
                              }),
                              (0, W.tZ)(g.Text, {
                                className: "item-name",
                                children: (function () {
                                  var e =
                                    null == o
                                      ? void 0
                                      : o.find(function (e) {
                                          return "953592166" == e.promotionId;
                                        });
                                  return null != n && n.couponName
                                    ? n.couponName
                                    : null != i && i.couponName
                                    ? i.couponName
                                    : e
                                    ? e.couponName
                                    : (null == o ? void 0 : o.length) > 0
                                    ? "".concat(o.length, "张券可用")
                                    : "暂无优惠券可用";
                                })(),
                              }),
                            ],
                          }),
                          (0, W.tZ)(g.Text, {
                            className: "item-value",
                            children: (function () {
                              var e =
                                null == o
                                  ? void 0
                                  : o.find(function (e) {
                                      return "953592166" == e.promotionId;
                                    });
                              if (k.Z.isNotEmptyObj(n))
                                return a > 0 ? "-¥".concat(a) : "";
                              if (k.Z.isNotEmptyObj(i)) return "认证后可用";
                              if (e) {
                                if (
                                  E()().isBefore(e.couponEndDate) &&
                                  E()().isAfter(e.couponStartDate)
                                )
                                  return "今日可用";
                                if (E()().isBefore(e.couponStartDate))
                                  return "".concat(
                                    E()(e.couponStartDate).format("M月D日可用")
                                  );
                              }
                            })(),
                          }),
                          (0, W.tZ)(g.Text, {
                            className: "iconfont2 ifont2-arr",
                          }),
                        ],
                      }),
                      null == t
                        ? void 0
                        : t.map(function (e) {
                            return (0,
                            W.BX)(g.View, { className: "discount-item flex-align-items-center", children: [(0, W.BX)(g.View, { className: "flex-1 flex-align-items-center", children: [(0, W.tZ)(g.Image, { className: "item-icon", src: e.icon }), (0, W.tZ)(g.Text, { className: "item-name", children: e.name })] }), (0, W.tZ)(g.Text, { className: "item-value", children: e.valueText })] }, e.name);
                          }),
                    ],
                  }),
                ],
              });
            });
          !(function (e) {
            (e[(e.NONE = 0)] = "NONE"),
              (e[(e.ITINERARY = 1)] = "ITINERARY"),
              (e[(e.INVOICE = 2)] = "INVOICE"),
              (e[(e.EINVOICE = 3)] = "EINVOICE");
          })(he || (he = {}));
          var Ne,
            ye = f.default.memo(function (e) {
              e.deliveryInfo, e.invoiceTitle, e.invoiceTax, e.invoiceTitleType;
              var t = e.invoiceRelateInfo;
              e.onInvoiceTitleInput,
                e.onInvoiceTaxInput,
                e.onToAdressSelect,
                e.onChangeInvoiceType;
              if ((null == t ? void 0 : t.invoiceType) == he.NONE)
                return (0, W.tZ)(W.HY, {});
              return (0,
              W.BX)(g.View, { className: "flt-intl-invoice-module white-box", children: [(0, W.tZ)(g.View, { className: "flex-align-items-center", children: (0, W.tZ)(g.View, { className: "tit flex-1", children: "报销凭证" }) }), (0, W.BX)(g.View, { className: "tips", children: [(0, W.tZ)(g.View, { className: "tip", children: "支付完成后可在订单详情页中申请开具，请安心购票" }), !(null == t || !t.shortRemark) && (0, W.tZ)(g.View, { className: "tip", children: t.shortRemark })] }), !1] });
            }),
            Te = n(18433);
          !(function (e) {
            (e[(e.DISABLE = 0)] = "DISABLE"),
              (e[(e.EXPAND = 1)] = "EXPAND"),
              (e[(e.CLOSE = 2)] = "CLOSE");
          })(Ne || (Ne = {}));
          var xe = function (e) {
              var t = e.idx,
                n = e.data,
                i = e.scrollIntoView,
                a = e.observeCallback,
                o = (0, f.useState)(Ne.DISABLE),
                r = (0, Y.Z)(o, 2),
                c = r[0],
                s = r[1],
                l = (0, Te.Z)({
                  selector: ".".concat(C.default.zxTyStr, " >>> #nav-wrap"),
                  targetSelector: "."
                    .concat(C.default.zxTyStr, " >>> #notice-")
                    .concat(t),
                  observeCallback: function (e) {
                    a(e, t);
                  },
                  callbackDeps: [i],
                });
              return (
                n &&
                  y().nextTick(function () {
                    y()
                      .createSelectorQuery()
                      .select(
                        "."
                          .concat(C.default.zxTyStr, " >>> #notice-")
                          .concat(t, " .notice-cont")
                      )
                      .boundingClientRect(function (e) {
                        (null == e ? void 0 : e.height) > 470 &&
                          c === Ne.DISABLE &&
                          s(Ne.CLOSE);
                      })
                      .exec();
                  }),
                (0, W.BX)(
                  g.View,
                  {
                    id: "notice-".concat(t),
                    className: "notice-item",
                    ref: l,
                    children: [
                      (0, W.tZ)(g.View, {
                        className: "notice-hd",
                        children: n.headTitle,
                      }),
                      (0, W.BX)(g.View, {
                        className: ""
                          .concat(c == Ne.CLOSE ? "cont-closed" : "", " ")
                          .concat(
                            c != Ne.DISABLE ? "show-more" : "",
                            " notice-cont"
                          ),
                        children: [
                          n.segmentContentList.map(function (e) {
                            var t;
                            return (0, W.BX)(
                              g.View,
                              {
                                className: "notice-seg",
                                children: [
                                  (0, W.tZ)(g.View, {
                                    className: "seg-tit",
                                    children: e.subTitle,
                                  }),
                                  (0, W.tZ)(g.View, {
                                    className:
                                      "seg-tags flex-align-items-center",
                                    children:
                                      null === (t = e.tipList) || void 0 === t
                                        ? void 0
                                        : t.map(function (e) {
                                            return (0,
                                            W.tZ)(g.View, { className: "tag", style: "color: ".concat(e.contentColor, "; border-color: ").concat(e.contentColor), children: e.content }, e.content);
                                          }),
                                  }),
                                  (0, W.tZ)(g.View, {
                                    className: "update-time",
                                    children: e.contentUpdateTime,
                                  }),
                                  (0, W.tZ)(g.View, {
                                    className: "seg-cont",
                                    children: (0, W.tZ)(v.ZtRichText, {
                                      nodes: e.content,
                                    }),
                                  }),
                                  (0, W.tZ)(g.View, {
                                    className: "notice-source",
                                    children: e.contentSourceInfo,
                                  }),
                                ],
                              },
                              e.subTitle
                            );
                          }),
                          c != Ne.DISABLE &&
                            (0, W.BX)(g.View, {
                              className: "expand-btn ".concat(
                                c == Ne.CLOSE ? "" : "expanded"
                              ),
                              id: "AaAU",
                              onClick: function () {
                                return s(c == Ne.CLOSE ? Ne.EXPAND : Ne.CLOSE);
                              },
                              children: [
                                c == Ne.CLOSE ? "查看全部" : "收起",
                                (0, W.tZ)(g.Text, {
                                  className: "iconfont2 ifont2-".concat(
                                    c == Ne.CLOSE
                                      ? "zhankai_linea_12"
                                      : "shouqi_linea_12"
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  },
                  n.headTitle
                )
              );
            },
            Pe = function (e) {
              var t = e.data,
                n = (0, f.useState)(0),
                i = (0, Y.Z)(n, 2),
                a = i[0],
                o = i[1],
                r = (0, f.useState)(""),
                c = (0, Y.Z)(r, 2),
                s = c[0],
                l = c[1],
                d = t.map(function (e, t) {
                  return { text: e.headTitle, id: "notice-".concat(t) };
                }),
                u = d.length > 1,
                p = 100 / d.length,
                m = function (e, t) {
                  s ? l("") : e.intersectionRatio > 0 && o(t);
                };
              return (0, W.BX)(g.View, {
                className: "book-notice-cont flex-1 flex flex-column",
                children: [
                  u &&
                    (0, W.tZ)(g.View, {
                      id: "nav-wrap",
                      className: "nav-wrap",
                      children: (0, W.tZ)(g.ScrollView, {
                        style: "width: 100%;height: 100%; white-space: nowrap;",
                        scrollX: !0,
                        children: d.map(function (e, t) {
                          return (0, W.tZ)(
                            g.View,
                            {
                              className: "nav-item ".concat(
                                a == t ? "active" : ""
                              ),
                              id: "AaAV",
                              onClick: function () {
                                o(t), l("notice-".concat(t));
                              },
                              style: "width:  ".concat(p, "%;"),
                              children: e.text,
                            },
                            e.id
                          );
                        }),
                      }),
                    }),
                  (0, W.tZ)(g.ScrollView, {
                    id: "notice-wrap",
                    scrollY: !0,
                    scrollIntoView: s,
                    scrollWithAnimation: !0,
                    className: "flex-1 notice-wrap",
                    children: t.map(function (e, t) {
                      return (0,
                      W.tZ)(xe, { idx: t, data: e, scrollIntoView: s, observeCallback: m }, t);
                    }),
                  }),
                ],
              });
            };
          var Ze,
            be,
            we = function (e) {
              var t = e.notice;
              if (t) {
                var n = t.tipsTitle,
                  i = t.notifyContent;
                return (0, W.BX)(g.View, {
                  className:
                    "flt-intl-bookx-notice white-box flex-align-items-center",
                  id: "AaAW",
                  onClick: function () {
                    !(function (e) {
                      var t = e.noticeContent;
                      if (t) {
                        var n = t.title,
                          i = t.contentList,
                          a = (0, R.getCurrentPage)();
                        null == a ||
                          a.showCommonDrawer({
                            hideClose: !1,
                            title: n,
                            content: function () {
                              return (0, W.tZ)(Pe, { data: i });
                            },
                            className: "flt-intl-notice-detail",
                          });
                      }
                    })({ noticeContent: i });
                  },
                  children: [
                    (0, W.tZ)(g.View, {
                      className: "tip-cont flex-1 ellipsis",
                      children: n,
                    }),
                    (0, W.tZ)(g.Text, { className: "iconfont2 ifont2-arr" }),
                  ],
                });
              }
            },
            Ce = f.default.memo(function (e) {
              var t = e.advantages,
                n = void 0 === t ? [] : t;
              return (null == n ? void 0 : n.length) > 0
                ? (0, W.tZ)(g.View, {
                    className: "flt-intl-pure-advantage",
                    children: (0, W.tZ)(g.Swiper, {
                      autoplay: !0,
                      vertical: !0,
                      circular: !0,
                      style: "height: 100%",
                      children:
                        null == n
                          ? void 0
                          : n.map(function (e) {
                              return (0, W.tZ)(
                                g.SwiperItem,
                                {
                                  className: "flex-align-items-center",
                                  children: (0, W.BX)(g.View, {
                                    className: "flex-align-items-center",
                                    style: "overflow:hidden",
                                    id: "AaAj",
                                    onClick: function () {
                                      !(function (e) {
                                        (0,
                                        R.getCurrentPage)().$CommonSceneDrawer.alert(
                                          {
                                            content: function () {
                                              return (0, W.tZ)(v.ZtRichText, {
                                                nodes: e,
                                              });
                                            },
                                          }
                                        );
                                      })(e.advantageText);
                                    },
                                    children: [
                                      (0, W.tZ)(g.Image, {
                                        className: "advantage-icon",
                                        src: e.iconUrl,
                                      }),
                                      (0, W.tZ)(g.View, {
                                        className: "advantage-txt flex-1",
                                        children: (0, W.tZ)(v.ZtRichText, {
                                          nodes: k.Z.getEllipsisRichText(
                                            e.advantageText
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                e.advantageText
                              );
                            }),
                    }),
                  })
                : (0, W.tZ)(W.HY, {});
            }),
            ke = function (e) {
              var t = e.data,
                n = e.onClose,
                i = (0, f.useState)(
                  [
                    {
                      type: 1,
                      name: "成人",
                      desc: "12周岁以上",
                      icon: "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/bianjichengjiren/chengren.png",
                      value: 1,
                    },
                    {
                      type: 2,
                      name: "儿童",
                      desc: "2-12周岁（不含）",
                      icon: "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/bianjichengjiren/children.png",
                      value: 0,
                    },
                  ].map(function (e) {
                    var n =
                      null == t
                        ? void 0
                        : t.find(function (t) {
                            return t.passengerType == e.type;
                          });
                    return (0,
                    h.Z)((0, h.Z)({}, e), {}, { value: n ? n.passengerCount : e.value });
                  })
                ),
                a = (0, Y.Z)(i, 2),
                o = a[0],
                r = a[1];
              (0, f.useEffect)(
                function () {
                  var e = o.findIndex(function (e) {
                      return 2 == e.type;
                    }),
                    t = o[e],
                    n = o.find(function (e) {
                      return 1 === e.type;
                    }).value,
                    i = void 0 === n ? 0 : n,
                    a = 2 * i,
                    r = 9 - i,
                    c = a < r ? a : r;
                  t.value > c &&
                    s(e, (0, h.Z)((0, h.Z)({}, t), {}, { value: c }));
                },
                [o]
              );
              var c = function (e, t) {
                  var n, i;
                  if (t < 0) return !1;
                  var a =
                      (null ===
                        (n = o.find(function (e) {
                          return 2 === e.type;
                        })) || void 0 === n
                        ? void 0
                        : n.value) || 0,
                    r =
                      (null ===
                        (i = o.find(function (e) {
                          return 1 === e.type;
                        })) || void 0 === i
                        ? void 0
                        : i.value) || 0;
                  if (1 == e) return t + a >= 0 && t + a <= 9 && t > 0;
                  if (2 == e) {
                    var c = t + r;
                    return c >= 0 && c <= 9 && t <= 2 * r;
                  }
                  return !1;
                },
                s = function (e, t) {
                  o.splice(e, 1, (0, h.Z)({}, t)), r((0, p.Z)(o));
                };
              return (0, W.BX)(g.View, {
                className: "book-pas-limit-cont",
                children: [
                  (0, W.tZ)(g.View, {
                    className: "tit flex-center",
                    children: "预定限制",
                  }),
                  (0, W.tZ)(g.View, {
                    className: "limit-tip",
                    children: (0, W.tZ)(v.ZtRichText, {
                      nodes:
                        '<font color="#198CFF">当前价格需成人与儿童同订</font>，请返回添加儿童乘机人；若仅预订成人票，请在下方设置好时机出行的乘客类型及人数，以便精准查询可订航班。',
                    }),
                  }),
                  (0, W.tZ)(g.View, {
                    className: "pas-num-wrap",
                    children: o.map(function (e) {
                      return (0, W.BX)(
                        g.View,
                        {
                          className: "settings-row flex-align-items-center",
                          children: [
                            (0, W.tZ)(g.Image, {
                              className: "icon",
                              src: e.icon,
                            }),
                            (0, W.BX)(g.View, {
                              className: "label flex flex-1",
                              children: [
                                (0, W.tZ)(g.View, {
                                  className: "name",
                                  children: e.name,
                                }),
                                (0, W.tZ)(g.View, {
                                  className: "desc",
                                  children: e.desc,
                                }),
                              ],
                            }),
                            (0, W.BX)(g.View, {
                              className: "settings flex-align-items-center",
                              children: [
                                (0, W.tZ)(g.Text, {
                                  className: "iconfont2 ifont2-minus ".concat(
                                    c(e.type, e.value - 1) ? "" : "disabled"
                                  ),
                                  onClick: function () {
                                    return (function (e) {
                                      if (c(e.type, e.value - 1)) {
                                        e.value = e.value - 1;
                                        var t = o.findIndex(function (t) {
                                          return t.type === e.type;
                                        });
                                        s(t, e);
                                      }
                                    })(e);
                                  },
                                }),
                                (0, W.tZ)(g.Text, {
                                  className: "num",
                                  children: e.value,
                                }),
                                (0, W.tZ)(g.Text, {
                                  className: "iconfont2 ifont2-add ".concat(
                                    c(e.type, e.value + 1) ? "" : "disabled"
                                  ),
                                  onClick: function () {
                                    return (function (e) {
                                      if (c(e.type, e.value + 1)) {
                                        e.value = e.value + 1;
                                        var t = o.findIndex(function (t) {
                                          return t.type === e.type;
                                        });
                                        s(t, e);
                                      }
                                    })(e);
                                  },
                                }),
                              ],
                            }),
                          ],
                        },
                        e.type
                      );
                    }),
                  }),
                  (0, W.BX)(pe.Z, {
                    children: [
                      (0, W.tZ)(g.Button, {
                        onClick: function () {
                          return n();
                        },
                        className: "flex-1 cancel btn",
                        children: "返回添加",
                      }),
                      (0, W.tZ)(g.Button, {
                        onClick: function () {
                          var e = y().getCurrentPages(),
                            t = e.findIndex(function (e) {
                              return "pages/flightIntl/list/list" == e.route;
                            });
                          if (t > -1) {
                            var n = e.length - t - 1;
                            (S.wq.intlListRefresh = !0),
                              (S.wq.listRefreshParams = {
                                passengerList: o.map(function (e) {
                                  return e.value;
                                }),
                              }),
                              y().navigateBack({ delta: n });
                          } else
                            y().reLaunch({
                              url: "/pages/home/index?tab=flight",
                            });
                        },
                        className: "flex-1 confirm btn",
                        children: "查询可订航班",
                      }),
                    ],
                  }),
                ],
              });
            },
            Ie = function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.passengerNumberList;
              null === (e = (0, R.getCurrentPage)()) ||
                void 0 === e ||
                e.showCommonDrawer({
                  hideTitle: !0,
                  content: function (e) {
                    var t = e.onClose;
                    return (0, W.tZ)(ke, { data: n, onClose: t });
                  },
                  className: "book-pas-limit",
                });
            },
            De = w.Z.getInstance("FLIGHT_CONTACT_STORE"),
            Ve = "YYYY-MM-DD",
            Ae = ["护照", "台胞证", "回乡证", "港澳通行证", "台湾通行证"],
            Be = function (e) {
              return Ae.some(function (t) {
                return t === e;
              });
            },
            Se = { 未知: 0, 成人: 1, 儿童: 2, 婴儿: 3, 老人: 4 },
            Le = C.default.isTieyou,
            Xe =
              ((Ze = {
                pageId: Le ? "10650024369" : "10650024368",
                _totalPriceBeforeDiscount: 0,
                _isAutoSelectCoupon: !0,
                _favCheckTimer: null,
                _ignoreChildWithoutAdult: !1,
                _queryCount: 0,
                data: {
                  isTieyou: Le,
                  isIPhoneX: D.ZP.isIPhoneX,
                  isLogin: !0,
                  isScroll: !0,
                  fromPage: "JSAPI_INTL",
                  roundTrip: !1,
                  passengerList: [],
                  enterTime: "",
                  phoneNumber: "",
                  email: "",
                  cabinIndex: 0,
                  mask: !1,
                  maskType: "",
                  transition: !1,
                  unAuthCoupon: null,
                  showFlightDetail: !1,
                  morePassengers: !1,
                  additionalProducts: [],
                  expenseSwitch: !1,
                  invoiceRelateInfo: null,
                  invoiceList: [
                    { type: 1, title: "个人抬头" },
                    { type: 2, title: "公司抬头" },
                    { type: 3, title: "行政抬头" },
                  ],
                  invoiceType: 0,
                  invoiceTitle: "",
                  invoiceTax: "",
                  invoiceName: "",
                  invoiceAddress: "",
                  moreInvoiceList: !1,
                  selectedCoupon: null,
                  totalPrice: 0,
                  discountInfos: [],
                  favorablePrice: 0,
                  detailMask: !1,
                  priceDetailShow: !1,
                  priceDetail: [],
                  maxInventory: 9,
                  repeatOrderCancel: !1,
                  orderState: -1,
                  intlCouponList: [],
                  notifyInfoV2: null,
                  eProductId: "",
                  couponPrice: 0,
                  isCheckPolicy: !1,
                  noticeContent: "",
                  minorsNoticeContent: "",
                  vipProductInfo: null,
                  appendProductNode: null,
                  segments: null,
                },
                queryInfo: null,
                isRoundTrip: !1,
                onLoad: function (e) {
                  var t = e.cabinIndex,
                    n = void 0 === t ? 0 : t,
                    i = e.roundTrip,
                    a = e.fromPage,
                    o = void 0 === a ? "JSAPI_INTL" : a,
                    r = e.data,
                    c = void 0 === r ? {} : r,
                    s = 0 !== parseInt(i),
                    l = c.queryInfo,
                    d = c.token,
                    u = c.appendProducts,
                    p = l.departDate,
                    m = l.departCity,
                    h = l.arriveCity,
                    f = u.productId,
                    g = u.eProductId,
                    v = S.wq.flightOverview,
                    N = void 0 === v ? {} : v,
                    y = S.wq.flightOverviewReturn,
                    T = void 0 === y ? {} : y,
                    x = S.wq.fillPageDetail,
                    P = N.flightList,
                    Z = T.flightList,
                    b =
                      ((null == P ? void 0 : P.length) || 0) +
                      ((null == Z ? void 0 : Z.length) || 0),
                    w = (De.get() || {}).email,
                    C = void 0 === w ? "" : w;
                  (this._token = d),
                    (this.queryInfo = l),
                    (this.isRoundTrip = s),
                    this.setData({
                      segments: this.handleSegments(x),
                      enterTime: new Date().getTime(),
                      phoneNumber: A.ZP.userName || "",
                      email: C,
                      roundTrip: s,
                      departDate: p,
                      flight: this.handleIntlFlight(N),
                      flight2: this.handleIntlFlight(T),
                      flightSegmentNumber: b,
                      cabinIndex: parseInt(n),
                      fromPage: o,
                      endDate: E()(p).format(Ve),
                      penetrateProductId: f,
                      eProductId: g,
                    }),
                    this.handleIntlFillPageDetail(x),
                    k.Z.setTitle(
                      s
                        ? "".concat(h, " - ").concat(m)
                        : "".concat(m, " - ").concat(h)
                    ),
                    this.checkLogin() &&
                      (this.getPassengers(), this.doFavCheck());
                },
                onShow: function () {
                  this.getDiscountInfo();
                },
                onUnload: function () {},
                doFavCheck: function () {
                  var e = this,
                    t = (this.data.cabinDetail || {}).ext;
                  if (t) {
                    var n = { token: t, queryCount: ++this._queryCount };
                    (0, q.lr)(n).then(function (t) {
                      var n = t.resultCode,
                        i = t.resultMessage,
                        a = t.timeLine,
                        o = t.data;
                      if (1 != n || 0 != a) {
                        if (3 == n)
                          return (
                            e._favCheckTimer && clearTimeout(e._favCheckTimer),
                            (e._favCheckTimer = null),
                            void e.showCommonDialog({
                              content: i,
                              buttonName: "重新查询",
                              onButtonClick: function () {
                                e.backToResearch();
                              },
                            })
                          );
                        a > 0 &&
                          (e._favCheckTimer = setTimeout(function () {
                            e.doFavCheck();
                          }, a));
                      } else {
                        e._favCheckTimer && clearTimeout(e._favCheckTimer),
                          (e._favCheckTimer = null);
                        var r = (o || {}).minSeatCount;
                        r && e.setData({ maxInventory: r });
                      }
                    });
                  }
                },
                handleSegments: function (e) {
                  var t = this;
                  if (k.Z.isEmptyObject(e)) return [];
                  var n = (e.productDetails || {}).segmentInfoList;
                  return (
                    (null == n
                      ? void 0
                      : n.map(function (e) {
                          var n,
                            i,
                            a = e.segmentNo,
                            o = e.flightList,
                            r = void 0 === o ? [] : o;
                          n = t.isRoundTrip
                            ? 1 == a
                              ? "去程"
                              : "返程"
                            : (null == r ? void 0 : r.length) > 1
                            ? "中转"
                            : "直达";
                          var c = (
                            r.find(function (e) {
                              return 1 == e.flightIndex;
                            }) || {}
                          ).dateInfo.departDate;
                          return (
                            (i = ""
                              .concat(E()(c).format("MM-DD"), " ")
                              .concat(M.Z.getWeekDayDesc(c), " ")
                              .concat(E()(c).format("HH:mm"))),
                            (0, h.Z)(
                              (0, h.Z)({}, e),
                              {},
                              { tag: n, dptTimeStr: i }
                            )
                          );
                        })) || []
                  );
                },
                handleIntlFlight: function (e) {
                  if (k.Z.isEmptyObject(e)) return {};
                  var t = e.flightList,
                    n = e.travelTime,
                    i = e.changeCityList,
                    a = void 0 === i ? [] : i,
                    o = t.length,
                    r = t[0],
                    c = t[o - 1],
                    s = E()(r.dateInfo.departDate),
                    l = {};
                  return (
                    (l.departDate = s.format(Ve)),
                    (l.departDateInfo = ""
                      .concat(s.format("M月D日"), " ")
                      .concat(M.Z.getWeekDayDesc(s), " ")
                      .concat(s.format("HH:mm"))),
                    (l.costTime = H.Z.changeTravelTime(n.duration)),
                    (l.airportInfo = ""
                      .concat(r.departAirportInfo.airportShortName)
                      .concat(r.departAirportInfo.buildingShortName, "-")
                      .concat(c.arriveAirportInfo.airportShortName)
                      .concat(c.arriveAirportInfo.buildingShortName)),
                    (l.flightList =
                      (null == t
                        ? void 0
                        : t.map(function (e) {
                            var t,
                              n,
                              i,
                              o,
                              r = e.departAirportInfo,
                              c = e.arriveAirportInfo,
                              l = e.dateInfo,
                              d = e.basicInfo,
                              u = e.intlStopCityItemList,
                              p = e.craftInfo,
                              m = E()(l.departDate),
                              h = E()(l.arriveDate);
                            return (
                              a.length > 0 &&
                                e.flightIndex > 1 &&
                                ((t = a[e.flightIndex - 2].cityName),
                                (n = H.Z.changeTravelTime(l.transferTime))),
                              (i = I.Z.getDayDiff(s.format(Ve), m.format(Ve))),
                              (o = I.Z.getDayDiff(s.format(Ve), h.format(Ve))),
                              {
                                departDate: m.format("MM-DD"),
                                departTime: m.format("HH:mm"),
                                arriveTime: h.format("HH:mm"),
                                departAirportTerminal: ""
                                  .concat(r.airportShortName)
                                  .concat(r.buildingShortName),
                                arriveAirportTerminal: ""
                                  .concat(c.airportShortName)
                                  .concat(c.buildingShortName),
                                flightInfo: ""
                                  .concat(d.airlineShortName)
                                  .concat(d.flightNo),
                                carrierInfo: d.isShared
                                  ? ""
                                      .concat(d.carrierAirlineShortName)
                                      .concat(d.carrierFlightNo)
                                  : "",
                                craftInfo: p.craftName,
                                stopCities: u.map(function (e) {
                                  var t = e.cityName,
                                    n = e.stopTime;
                                  return {
                                    cityName: t,
                                    stopTimeStr: H.Z.changeTravelTime(n),
                                  };
                                }),
                                transferCity: t,
                                transferTime: n,
                                departDayDiff: i,
                                arriveDayDiff: o,
                              }
                            );
                          })) || []),
                    l
                  );
                },
                handleIntlFillPageDetail: function (e) {
                  var t = this.data.penetrateProductId,
                    n = e.productDetails,
                    i = n.policyList,
                    a = n.segmentInfoList,
                    o = e.additionalProductsV2,
                    r = e.additionalProducts,
                    c = e.invoiceRelateInfo,
                    s = e.productType,
                    l = e.advantageData,
                    d = e.appendProductNode,
                    u = e.detailPageVipProductInfo,
                    p = e.minorsNoticeContent,
                    m = e.detailPageXProduct,
                    f = e.noticeContent,
                    g = e.notifyInfoV2,
                    v = i[0],
                    N = v.avgSalePrice,
                    y = v.avgPrice,
                    T = v.avgTax,
                    x = v.simplyRule,
                    P = v.grades,
                    Z = v.priceList,
                    b = v.quantity,
                    w = v.minQuantity,
                    C = v.bookingValidationTokenNumber,
                    I = v.vendorCode,
                    D = v.routeSearchToken,
                    V = v.saleType,
                    A = v.penaltyList,
                    B = v.ext,
                    L = v.salePolicyInfo,
                    X = v.reducedPrice,
                    _ = v.policyRemark,
                    E = v.refundAndChangeDetails,
                    M = e.couponList || [],
                    R = [],
                    O = 2,
                    z = {},
                    F = [],
                    q = {};
                  if (o && o.additionalProducts) {
                    (R = o.additionalProducts),
                      (O = t ? 1 : 0),
                      (z = o.productDescription || {}),
                      (F = o.showTexts.map(function (e) {
                        return (0,
                        h.Z)((0, h.Z)({}, e), {}, { content: k.Z.convertAppTextToHtmlStr(e.content), weatherCityName: e.weatherCityName ? k.Z.convertAppTextToHtmlStr(e.weatherCityName) : "", weatherDate: e.weatherDate ? k.Z.convertAppTextToHtmlStr(e.weatherDate) : "", weatherDesc: e.weatherDesc ? k.Z.convertAppTextToHtmlStr(e.weatherDesc) : "" });
                      }));
                    try {
                      for (
                        var Y = JSON.parse(
                            R.filter(function (e) {
                              return e.content;
                            })[0].content
                          ),
                          j = Object.keys(Y),
                          W = 0,
                          Q = j;
                        W < Q.length;
                        W++
                      ) {
                        var U = Q[W];
                        q[U] = k.Z.convertAppTextToHtmlStr(Y[U]);
                      }
                    } catch (e) {
                      console.log(e),
                        H.Z.logJsonParseError({
                          e: e,
                          source: "flightIntl/book/handleIntlFillPageDetail",
                        });
                    }
                  } else R = r;
                  re.Dispatch.appendProductModel.setAppendProductNode(
                    d || null
                  ),
                    this.setData({
                      cabinDetail: {
                        avgSalePrice: N,
                        avgPrice: y,
                        avgTax: T,
                        reducedPrice: X,
                        simplyRule: x,
                        grades: P,
                        priceList: Z,
                        priceSupportPassengerType: Z.map(function (e) {
                          return e.passengerType;
                        }),
                        salePolicyInfo: L,
                        bookingValidationTokenNumber: C,
                        vendorCode: I,
                        routeSearchToken: D,
                        saleType: V,
                        ext: B,
                      },
                      detailPageXProduct: m,
                      orderType: s,
                      maxInventory: b,
                      minQuantity: w,
                      invoiceRelateInfo: c,
                      additionalProductsType: O,
                      additionalProducts: R || [],
                      productDescription: z,
                      showTexts: F,
                      policyRemark: _,
                      safeTipContent: q,
                      segmentInfoList: this.handleBVSegmentInfo(a),
                      intlCouponList: M,
                      baggageAndPolicies: A,
                      advantageData: l,
                      invoiceType: (null == c ? void 0 : c.invoiceType) || 0,
                      vipProductInfo: u,
                      noticeContent: f,
                      minorsNoticeContent: p,
                      refundAndChangeDetails: E,
                      notifyInfoV2: g,
                    }),
                    (S.wq.bookQueryInfo.segmentInfoList = a);
                },
                handleQTEInfo: function (e) {
                  var t = {
                      salePrice: 0,
                      tax: 0,
                      autoQTEFlag: 1,
                      autoQTEStatus: 0,
                    },
                    n = 0,
                    i = 0;
                  return (
                    e.forEach(function (e) {
                      (n += e.standPrice), (i += e.tax);
                    }),
                    (t.salePrice = n),
                    (t.tax = i),
                    t
                  );
                },
                handleBVSegmentInfo: function (e) {
                  var t,
                    n = [],
                    i = (0, m.Z)(e);
                  try {
                    for (i.s(); !(t = i.n()).done; ) {
                      var a,
                        o = t.value,
                        r = (0, m.Z)(o.flightList);
                      try {
                        for (r.s(); !(a = r.n()).done; ) {
                          var c = a.value,
                            s = {
                              arrivalCity: c.arriveAirportInfo.cityCode,
                              flightNumber: c.basicInfo.flightNo,
                              departCity: c.departAirportInfo.cityCode,
                              arrivalTime: c.dateInfo.arriveDate,
                              departTime: c.dateInfo.departDate,
                            };
                          n.push(s);
                        }
                      } catch (e) {
                        r.e(e);
                      } finally {
                        r.f();
                      }
                    }
                  } catch (e) {
                    i.e(e);
                  } finally {
                    i.f();
                  }
                  return n.map(function (e, t) {
                    return (0, h.Z)((0, h.Z)({}, e), {}, { sequence: t });
                  });
                },
                closePopMask: function (e) {
                  var t = e.currentTarget.dataset.type;
                  "cabin" === t
                    ? this.toggleMoreCabin()
                    : "passenger" === t
                    ? this.cancelMorePassengers()
                    : "psgerType" === t
                    ? this.togglePsgerType()
                    : "flightDetail" === t && this.toggleFlightDetail();
                },
                getPhoneNumberAction: function () {
                  var e = this;
                  this.doLogin(function () {
                    e.getPassengers();
                  });
                },
                checkLogin: function () {
                  var e = A.ZP.isLogin;
                  return this.setData({ isLogin: e }), e;
                },
                doLogin: function (e) {
                  var t = this;
                  A.ZP.doLogin()
                    .then(function () {
                      t.setData({ isLogin: !0 }), null == e || e();
                    })
                    .catch(function () {
                      (0, R.showToast)("取消登录");
                    });
                },
                getPassengers: function (e) {
                  var t = this;
                  (0, R.showLoading)(),
                    (0, B.Hh)({ source: "flight" })
                      .then(function (n) {
                        if (1 === n.resultCode) {
                          var i = n.commonPassengers,
                            a = void 0 === i ? [] : i;
                          t.setData({
                            passengerList: t.handlePassengers(a, e),
                          });
                        } else t.showCommonDialog((null == n ? void 0 : n.resultMessage) || "请求错误");
                      })
                      .finally(R.hideLoading);
                },
                handlePassengers: function (e, t) {
                  var n = this.data,
                    i = n.departDate,
                    a = n.passengerList,
                    o =
                      null == e
                        ? void 0
                        : e.map(function (e) {
                            var n = a.find(function (t) {
                                return t.passengerID === e.passengerID;
                              }),
                              o = 1 == t && n,
                              r = (
                                Be(e.passportType) &&
                                e.passengerENFirstName &&
                                e.passengerENLastName
                                  ? ""
                                      .concat(e.passengerENLastName, "/")
                                      .concat(e.passengerENFirstName)
                                  : ""
                              ).toUpperCase(),
                              c = (0, O.PX)(e, i),
                              s = e.passengerBirth
                                ? (0, O.Ay)(e.passengerBirth, i)
                                : void 0;
                            return (0,
                            h.Z)((0, h.Z)({}, e), {}, { selected: !!o && n.selected, display: !!o && n.display, isAdultPriceBuyChild: !!o && n.isAdultPriceBuyChild, nameEN: r, name: e.passengerName, disabled: !Be(e.passportType) || !r, passengerType: c, psgerType: o ? n.psgerType : "票" === c.slice(-1) ? c.slice(0, -1) : c, ticketType: o ? n.ticketType : c, age: s });
                          }),
                    r = o.filter(function (e) {
                      return Be(e.passportType) && e.nameEN;
                    }),
                    c = o.filter(function (e) {
                      return !Be(e.passportType) || !e.nameEN;
                    }),
                    s = [].concat((0, p.Z)(r), (0, p.Z)(c));
                  return this.handleDisplayPassengers(s), s;
                },
                getMaxCoupon: function (e, t) {
                  var n,
                    i = null,
                    a = 0,
                    o = (0, m.Z)(e);
                  try {
                    for (o.s(); !(n = o.n()).done; ) {
                      var r = n.value,
                        c = I.Z.getCouponPrice(r, t),
                        s = !0;
                      r.couponStartDate &&
                        r.couponEndDate &&
                        (s =
                          E()().isBefore(r.couponEndDate) &&
                          E()().isAfter(r.couponStartDate)),
                        c > a && s && ((i = r), (a = c));
                    }
                  } catch (e) {
                    o.e(e);
                  } finally {
                    o.f();
                  }
                  return { maxCoupon: i, maxCouponPrice: a };
                },
                togglePassenger: function (e) {
                  var t = this;
                  return (0, u.Z)(
                    (0, d.Z)().mark(function n() {
                      var i,
                        a,
                        o,
                        r,
                        c,
                        s,
                        l,
                        u,
                        m,
                        h,
                        f,
                        g,
                        v,
                        N,
                        y,
                        T,
                        x,
                        P,
                        Z,
                        b,
                        w,
                        C;
                      return (0, d.Z)().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (
                                ((i = e.pid),
                                (a = t.data),
                                (o = a.passengerList),
                                (r = a.maxInventory),
                                (c = void 0 === r ? 9 : r),
                                (s = a.cabinDetail),
                                (l = s.priceList),
                                (u = s.priceSupportPassengerType),
                                (m = s.salePolicyInfo),
                                (h = t.getPassengersNumber()),
                                (f = h.adult),
                                (g = h.child),
                                (v = h.baby),
                                (N =
                                  (null == o
                                    ? void 0
                                    : o.filter(function (e) {
                                        return e.selected;
                                      })) || []),
                                (y =
                                  o.filter(function (e) {
                                    return e.display;
                                  }) || []),
                                !o.find(function (e) {
                                  return e.passengerID === i;
                                }).disabled)
                              ) {
                                n.next = 8;
                                break;
                              }
                              return n.abrupt("return");
                            case 8:
                              if (
                                ((T = o.find(function (e) {
                                  return e.passengerID === i;
                                })),
                                !(x = T.selected))
                              ) {
                                n.next = 14;
                                break;
                              }
                              (T.selected = !x), (n.next = 51);
                              break;
                            case 14:
                              if (9 !== N.length) {
                                n.next = 16;
                                break;
                              }
                              return n.abrupt(
                                "return",
                                t.showCommonDialog("一次最多选择9位乘客")
                              );
                            case 16:
                              if (N.length !== c) {
                                n.next = 18;
                                break;
                              }
                              return n.abrupt(
                                "return",
                                t.showCommonDialog(
                                  "很抱歉，该航班仅剩".concat(c, "张机票")
                                )
                              );
                            case 18:
                              if (
                                ((P = Se[T.psgerType] || -1),
                                u.some(function (e) {
                                  return e === P;
                                }))
                              ) {
                                n.next = 34;
                                break;
                              }
                              if ("儿童" !== T.psgerType) {
                                n.next = 33;
                                break;
                              }
                              if (
                                !l.some(function (e) {
                                  return 1 === e.passengerType;
                                })
                              ) {
                                n.next = 30;
                                break;
                              }
                              if (
                                ((Z = m.ageAllowed),
                                2 !==
                                  (b =
                                    (null == Z ? void 0 : Z.split("-")) || [])
                                    .length || !(T.age < b[0] || T.age > b[1]))
                              ) {
                                n.next = 26;
                                break;
                              }
                              return n.abrupt(
                                "return",
                                t.showCommonDialog(
                                  "抱歉，该航班仅支持"
                                    .concat(b[0], "至")
                                    .concat(b[1], "购票岁年龄段乘客购票")
                                )
                              );
                            case 26:
                              (T.ticketType = "成人票"),
                                (T.isAdultPriceBuyChild = !0),
                                (n.next = 31);
                              break;
                            case 30:
                              return n.abrupt(
                                "return",
                                t.showCommonDialog(
                                  "不支持".concat(T.psgerType, "购票")
                                )
                              );
                            case 31:
                              n.next = 34;
                              break;
                            case 33:
                              return n.abrupt(
                                "return",
                                t.showCommonDialog(
                                  "不支持".concat(T.psgerType, "购票")
                                )
                              );
                            case 34:
                              if (
                                N.some(function (e) {
                                  return "成人" === e.psgerType;
                                }) ||
                                "成人" === T.psgerType ||
                                t._ignoreChildWithoutAdult
                              ) {
                                n.next = 40;
                                break;
                              }
                              return (
                                (n.next = 37),
                                new Promise(function (e) {
                                  t.showMultiButtonDialog({
                                    maskClose: !1,
                                    hideTitle: !0,
                                    content:
                                      "12周岁以下儿童需有18岁以上的成人陪伴乘机，否则有无法乘机的风险",
                                    leftButtonName: "再想想",
                                    rightButtonName: "继续预定",
                                    onLeftButtonClick: function () {
                                      e(!1);
                                    },
                                    onRightButtonClick: function () {
                                      (t._ignoreChildWithoutAdult = !0), e(!0);
                                    },
                                  });
                                })
                              );
                            case 37:
                              if (n.sent) {
                                n.next = 40;
                                break;
                              }
                              return n.abrupt("return");
                            case 40:
                              if (
                                !(
                                  ("成人" !== T.psgerType &&
                                    (g + v) / f == 2) ||
                                  ("成人" == T.psgerType &&
                                    t._ignoreChildWithoutAdult &&
                                    g + v > 2)
                                )
                              ) {
                                n.next = 42;
                                break;
                              }
                              return n.abrupt(
                                "return",
                                t.showCommonDialog({
                                  content:
                                    "抱歉，儿童必须在成人陪同下登机，每名成人只能携带2名不超过12岁的旅客(其中最多携带一名婴儿旅客)",
                                  buttonName: "修改乘客",
                                })
                              );
                            case 42:
                              if ("婴儿" !== T.psgerType) {
                                n.next = 45;
                                break;
                              }
                              if (!(v > f)) {
                                n.next = 45;
                                break;
                              }
                              return n.abrupt(
                                "return",
                                t.showCommonDialog({
                                  content:
                                    "抱歉，婴儿必须在成人陪同下登机，每名成人只能携带2名不超过12岁的旅客(其中最多携带一名婴儿旅客)",
                                  buttonName: "修改乘客",
                                })
                              );
                            case 45:
                              if (
                                ((w = E()()
                                  .add(6, "month")
                                  .format("YYYY-MM-DD")),
                                !I.Z.compareDateToDate(w, T.cardTimeLimit))
                              ) {
                                n.next = 48;
                                break;
                              }
                              return n.abrupt(
                                "return",
                                t.showCommonDialog(
                                  "您证件有效期不足6个月，请更新证件后再预订机票"
                                )
                              );
                            case 48:
                              (T.selected = !x),
                                2 != y.length ||
                                  T.display ||
                                  ((C = y.find(function (e) {
                                    return !e.selected;
                                  })) &&
                                    (C.display = !1)),
                                (T.display = !0);
                            case 51:
                              t.setData({ passengerList: (0, p.Z)(o) }),
                                t.getPrice();
                            case 53:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
                },
                passengerModalPromise: function (e, t, n, i) {
                  return new Promise(function (a, o) {
                    y().showModal({
                      title: i || "",
                      content: e,
                      confirmText: t || "确定",
                      cancelText: n || "取消",
                      success: function (e) {
                        e.confirm ? a() : o();
                      },
                    });
                  });
                },
                openMorePassengers: function () {
                  var e = this;
                  this.setData({
                    morePassengers: !0,
                    maskType: "passenger",
                    mask: !0,
                  }),
                    setTimeout(function () {
                      e.setData({ transition: !0 });
                    }, 10);
                },
                cancelMorePassengers: function () {
                  this.setData({
                    mask: !1,
                    morePassengers: !1,
                    transition: !1,
                  });
                },
                confirmPassengers: function () {
                  var e = this.data.passengerList;
                  if (
                    0 ===
                    (null == e
                      ? void 0
                      : e.filter(function (e) {
                          return e.selected;
                        })
                    ).length
                  )
                    return this.showCommonDialog("请添加乘客");
                  this.setData({
                    mask: !1,
                    morePassengers: !1,
                    transition: !1,
                  }),
                    this.getPrice();
                },
                handlePassengerDeletion: function (e) {
                  var t = this;
                  e.stopPropagation();
                  var n = e.currentTarget.dataset.index,
                    i = this.data.passengerList,
                    a = k.Z.deepCopy(i),
                    o = a[n],
                    r = o.nameEN,
                    c = {
                      passengerID: o.passengerID,
                      passportType: o.passportType,
                    };
                  y().showModal({
                    title: "提示",
                    content: "确定删除乘客 “".concat(r, "”?"),
                    cancelText: "再想想",
                    success: function (e) {
                      e.confirm
                        ? (0, B.Q3)(c)
                            .then(function (e) {
                              1 === e.resultCode
                                ? (a.splice(n, 1),
                                  t.setData({ passengerList: a }),
                                  t.getPassengers(1),
                                  t.getPrice())
                                : (0, R.showModal)(
                                    (null == e ? void 0 : e.resultMessage) ||
                                      "网络错误，请稍候再试"
                                  );
                            })
                            .catch(function (e) {
                              (0,
                              R.showModal)((null == e ? void 0 : e.message) || "网络错误，请稍候再试");
                            })
                        : e.cancel && console.log("用户点击取消");
                    },
                  });
                },
                editIntlPassenger: function (e, t, n) {
                  if ("function" == typeof e) {
                    var i = { passenger: t, flightDepartDate: n };
                    this.navigateTo({
                      url: "/pages/flightIntl/passenger/passenger",
                      data: i,
                      callback: e,
                    });
                  } else
                    console.log(
                      "调用方式不正确, editPassenger 的 callback 为必填项, 且为第一个参数!"
                    );
                },
                toAddNewPassenger: function () {
                  var e = this,
                    t = this.data.flight.departDate;
                  this.editIntlPassenger(
                    function () {
                      return e.getPassengers(1);
                    },
                    {},
                    t
                  ),
                    this.setData({
                      mask: !1,
                      morePassengers: !1,
                      transition: !1,
                    });
                },
                editPassenger: function (e) {
                  var t = e.passengerID,
                    n = this.data.passengerList.find(function (e) {
                      return e.passengerID === t;
                    });
                  this.setData({
                    mask: !1,
                    morePassengers: !1,
                    transition: !1,
                  }),
                    this.goToEditPassenger(n);
                },
                goToEditPassenger: function (e) {
                  var t = this,
                    n = this.data.flight.departDate;
                  this.editIntlPassenger(
                    function () {
                      return t.getPassengers(1);
                    },
                    e,
                    n
                  );
                },
                phoneInput: function (e) {
                  var t = e.detail.value;
                  this.setData({ phoneNumber: t.trim() });
                },
                mailInput: function (e) {
                  var t = e.detail.value;
                  this.setData({ email: t.trim() });
                },
                toInsuranceInstruction: function () {
                  var e = this,
                    t = this.data,
                    n = t.additionalProducts,
                    i = t.penetrateProductId,
                    a = t.productDescription,
                    o = n.findIndex(function (e) {
                      return e.productCode === i;
                    }),
                    r = n[o],
                    c = r.isSelected,
                    s = r.descriptionUrl,
                    d = r.productName;
                  this.navigateTo({
                    url: "/pages/flightSecondary/insurance/insurance?productName=".concat(
                      d
                    ),
                    data: {
                      isSelected: c,
                      productDescription: a,
                      descriptionUrl: s,
                    },
                    callback: function (t) {
                      var i = t.selected;
                      e.setData(
                        (0, l.Z)(
                          {},
                          "additionalProducts[".concat(o, "]"),
                          (0, h.Z)((0, h.Z)({}, n[o]), {}, { selected: i })
                        )
                      ),
                        e.checkAdditionalProducts(),
                        e.getPrice();
                    },
                  });
                },
                toggleAdditionalProducts: function (e) {
                  var t = e.currentTarget.dataset.index,
                    n = this.data.additionalProducts,
                    i = n[t].selected;
                  this.setData(
                    (0, l.Z)(
                      {},
                      "additionalProducts[".concat(t, "]"),
                      (0, h.Z)((0, h.Z)({}, n[t]), {}, { selected: !i })
                    )
                  ),
                    this.checkAdditionalProducts(),
                    this.getPrice();
                },
                checkAdditionalProducts: function () {
                  var e = this.data,
                    t = e.additionalProducts,
                    n = e.penetrateProductId;
                  if (2 !== e.additionalProductsType) {
                    var i = t.some(function (e) {
                      return e.selected;
                    });
                    this.setData({ additionalProductsType: i ? 1 : 0 }),
                      n || this.checkInsurance();
                  }
                },
                checkInsurance: function () {
                  var e = this,
                    t = this.data,
                    n = t.additionalProducts,
                    i = t.additionalProductsType,
                    a = n.filter(function (e) {
                      return e.selected;
                    }).length;
                  this._insuranceChecked || 0 !== i || 0 !== a
                    ? this._continue && this.validateSubmitData()
                    : ((this._insuranceChecked = !0),
                      this.setData({
                        mask: !0,
                        maskType: "insurance",
                        showInsurance: !0,
                      }),
                      setTimeout(function () {
                        e.setData({ transition: !0 });
                      }, 10));
                },
                closeInsurance: function () {
                  this.setData({
                    mask: !1,
                    maskType: "",
                    showInsurance: !1,
                    transition: !1,
                  }),
                    this._continue && this.validateSubmitData();
                },
                addInsurance: function () {
                  var e,
                    t = this.data.additionalProducts,
                    n = t.findIndex(function (e) {
                      return e.content;
                    });
                  this.setData(
                    ((e = {}),
                    (0, l.Z)(
                      e,
                      "additionalProducts[".concat(n, "]"),
                      (0, h.Z)((0, h.Z)({}, t[n]), {}, { selected: !0 })
                    ),
                    (0, l.Z)(e, "additionalProductsType", 1),
                    e)
                  ),
                    this.closeInsurance(),
                    this.getPrice();
                },
                goToInsuranceTip: function (e) {
                  var t = e.currentTarget.dataset.index,
                    n = this.data.additionalProducts[t].descriptionUrl;
                  n && k.Z.commonNavigator(n.replace(/http:\/\//, "https://"));
                },
                toggleFlightDetail: function () {
                  var e = this,
                    t = this.data,
                    n = t.showFlightDetail,
                    i = t.transition;
                  this.setData({
                    showFlightDetail: !n,
                    isScroll: n,
                    mask: !n,
                    maskType: "flightDetail",
                  }),
                    setTimeout(function () {
                      e.setData({ transition: !i });
                    }, 10);
                },
                handleBaggageAndPoliciesClick: function () {
                  var e = this.data,
                    t = e.baggageAndPolicies,
                    n = e.refundAndChangeDetails,
                    i = t;
                  n &&
                    (i =
                      null == t
                        ? void 0
                        : t.map(function (e) {
                            return (0,
                            h.Z)((0, h.Z)({}, e), {}, { refundAndChangeDetails: n });
                          })),
                    this.navigateTo({
                      url: "/pages/flightSecondary/bap/bap",
                      data: { baggageAllowanceAndPolicies: i },
                    });
                },
                toLicense: function (e) {
                  var t = e.currentTarget.dataset.url;
                  k.Z.commonNavigator(t);
                },
                switchExpense: function (e) {
                  this.setData({ expenseSwitch: e }), this.getPrice();
                },
                toggleInvoiceType: function () {
                  var e = this,
                    t = this.data,
                    n = t.moreInvoiceList,
                    i = t.transition;
                  this.setData({
                    mask: !n,
                    moreInvoiceList: !n,
                    maskType: "invoice",
                  }),
                    setTimeout(function () {
                      e.setData({ transition: !i });
                    }, 10);
                },
                selectInvoiceType: function (e) {
                  var t = e.currentTarget.dataset.type;
                  this.setData({ invoiceType: parseInt(t) }),
                    this.toggleInvoiceType();
                },
                toInvoiceExplain: function () {
                  var e = this.data.invoiceRelateInfo.explainUrl;
                  b.Z.twebview({ data: { title: "电子凭证示例", url: e } });
                },
                invoiceTitleInput: function (e) {
                  var t = e.detail.value;
                  this.setData({ invoiceTitle: t.trim() });
                },
                invoiceTaxInput: function (e) {
                  var t = e.detail.value;
                  this.setData({ invoiceTax: t.trim() });
                },
                goToEditAddress: function () {
                  var e = this,
                    t = this.data.invoiceName;
                  this.navigateTo({
                    url: "/pages/flightSecondary/address/address",
                    data: {
                      contactName: t,
                      region: this._region || "",
                      address: this._address || "",
                    },
                    callback: function (t) {
                      var n = t.contactName,
                        i = t.region,
                        a = t.address;
                      (e._region = i),
                        (e._address = a),
                        e.setData({
                          invoiceName: n,
                          invoiceAddress: "".concat(i.join(" "), " ").concat(a),
                        });
                    },
                  });
                },
                checkCouponPriceByTotalMoney: function (e, t) {
                  var n = this.data.intlCouponList;
                  if (1 === e.deductionStrategyTypeID) return e.couponPrice;
                  if (2 === e.deductionStrategyTypeID) return e.couponPrice;
                  if (3 === e.deductionStrategyTypeID) {
                    e.deductionStrategy = k._.sortBy(
                      e.deductionStrategy,
                      function (e) {
                        return -e.startAmount;
                      }
                    );
                    var i = null,
                      a = (i =
                        n && 0 !== n.length
                          ? n.filter(function (t) {
                              return t.couponCode === e.couponCode;
                            })[0]
                          : e).deductionStrategy.findIndex(function (e) {
                        return e.startAmount < t;
                      });
                    return a > -1 ? i.deductionStrategy[a].deductionAmount : 0;
                  }
                },
                getCoupons: function () {
                  var e = this;
                  if ((0, L.TA)()) {
                    var t = this.data,
                      n = {
                        couponType: 500,
                        eventBody: [
                          { key: "Price", value: t.totalPrice },
                          {
                            key: "IsBuyPackage",
                            value:
                              0 ===
                              t.additionalProducts.filter(function (e) {
                                return e.selected;
                              }).length
                                ? "N"
                                : "Y",
                          },
                        ],
                      };
                    (0, B.fl)(n)
                      .then(function (t) {
                        var n = t.resultCode,
                          i = t.couponList;
                        if (1 === n && i && i.length > 0) {
                          var a = i.filter(function (e) {
                              return 3 !== e.couponState;
                            }),
                            o = k._.sortBy(a, "couponPrice").pop();
                          (S.wq.selectedCoupon = o),
                            e.setData({
                              selectedCoupon: o || null,
                              highestCouponPrice: o ? o.couponPrice : 0,
                            });
                        } else e.setData({ selectedCoupon: null });
                      })
                      .catch(function () {});
                  }
                },
                clearCoupon: function () {
                  this.setData({ selectedCoupon: null });
                },
                goToCoupon: function () {
                  var e,
                    t,
                    n,
                    i,
                    a = this,
                    o = this.data,
                    r = o.selectedCoupon,
                    c = o.totalPrice,
                    s = o.additionalProducts,
                    l = o.passengerList,
                    d = o.isLogin,
                    u =
                      (null == l
                        ? void 0
                        : l.filter(function (e) {
                            return e.selected;
                          })) || [];
                  if (!d)
                    return this.doLogin(function () {
                      a.getPassengers(), a.goToCoupon();
                    });
                  var p = [
                    { key: "Price", value: c },
                    {
                      key: "IsBuyPackage",
                      value:
                        0 ===
                        s.filter(function (e) {
                          return e.selected;
                        }).length
                          ? "N"
                          : "Y",
                    },
                    {
                      key: "CityCode",
                      value: ""
                        .concat(
                          null !==
                            (e =
                              null === (t = this.queryInfo) || void 0 === t
                                ? void 0
                                : t.departCityCode) && void 0 !== e
                            ? e
                            : "",
                          ","
                        )
                        .concat(
                          null !==
                            (n =
                              null === (i = this.queryInfo) || void 0 === i
                                ? void 0
                                : i.arriveCityCode) && void 0 !== n
                            ? n
                            : ""
                        ),
                    },
                  ];
                  (S.wq.eventBody = p),
                    this.navigateTo({
                      url: "/pages/flightSecondary/coupon/coupon?couponType=500&couponCode=".concat(
                        r ? r.couponCode : ""
                      ),
                      data: {
                        correctVersion: 15,
                        totalPrice: this._totalPriceBeforeDiscount,
                        selectedPassengers: u,
                      },
                      callback: function (e) {
                        if (!e)
                          return (
                            (a._isAutoSelectCoupon = !1),
                            a.setData({ selectedCoupon: null }),
                            a.clearCoupon(),
                            void a.getPrice()
                          );
                        var t = (e || {}).selectedCoupon,
                          n = void 0 === t ? {} : t;
                        (null == n ? void 0 : n.couponPrice) > 0 &&
                          (a._isAutoSelectCoupon = !1),
                          a.setData({
                            selectedCoupon: n.couponPrice ? n : null,
                          }),
                          a.getPrice();
                      },
                    });
                },
                getPassengersNumber: function () {
                  var e,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "passengerType",
                    n = this.data.passengerList,
                    i =
                      null == n
                        ? void 0
                        : n.filter(function (e) {
                            return e.selected;
                          }),
                    a = 0,
                    o = 0,
                    r = 0,
                    c = (0, m.Z)(i);
                  try {
                    for (c.s(); !(e = c.n()).done; ) {
                      var s = e.value;
                      "成人票" === s[t]
                        ? a++
                        : "儿童票" === s[t]
                        ? o++
                        : "婴儿票" === s[t] && r++;
                    }
                  } catch (e) {
                    c.e(e);
                  } finally {
                    c.f();
                  }
                  return { adult: a, child: o, baby: r };
                },
              }),
              (0, l.Z)(Ze, "getMaxCoupon", function (e, t) {
                var n,
                  i = null,
                  a = 0,
                  o = (0, m.Z)(e);
                try {
                  for (o.s(); !(n = o.n()).done; ) {
                    var r = n.value,
                      c = I.Z.getCouponPrice(r, t);
                    c > a && ((i = r), (a = c));
                  }
                } catch (e) {
                  o.e(e);
                } finally {
                  o.f();
                }
                return { maxCoupon: i, maxCouponPrice: a };
              }),
              (0, l.Z)(Ze, "getPrice", function () {
                var e = this,
                  t = this.data,
                  n = t.expenseSwitch,
                  i = t.invoiceRelateInfo,
                  a = t.additionalProducts,
                  o = t.selectedCoupon,
                  r = t.cabinDetail,
                  c = t.flightSegmentNumber,
                  s = t.intlCouponList,
                  l = t.vipProductInfo,
                  d = t.detailPageXProduct,
                  u = r.priceList,
                  p = (
                    (re.State.appendProductModel || {}).appendProductNode || {}
                  ).additionalProducts,
                  h = this.getPassengersNumber("ticketType"),
                  f = h.adult,
                  g = h.child,
                  v = h.baby,
                  N = 0,
                  y = 0,
                  T = 0,
                  x = n ? i.deliveryPrice : 0;
                if (f + g + v === 0)
                  return (
                    this.setData({
                      totalPrice: 0,
                      favorablePrice: 0,
                      couponPrice: 0,
                      selectedCoupon: null,
                    }),
                    (this._totalPriceBeforeDiscount = 0),
                    void this.getDiscountInfo()
                  );
                var P = function (e, t) {
                  var n = u.filter(function (t) {
                    return t.passengerType === e;
                  })[0];
                  return (n && n[t]) || 0;
                };
                (y +=
                  f * P(1, "standPrice") +
                  g * P(2, "standPrice") +
                  v * P(3, "standPrice")),
                  (y += f * P(1, "tax") + g * P(2, "tax") + v * P(2, "tax"));
                var Z,
                  b = (0, m.Z)(a);
                try {
                  for (b.s(); !(Z = b.n()).done; ) {
                    var w = Z.value;
                    w.selected &&
                      ("P" === w.productType
                        ? (T += (f + g + v) * w.price * c)
                        : (T += w.price));
                  }
                } catch (e) {
                  b.e(e);
                } finally {
                  b.f();
                }
                var C = 0;
                null == p ||
                  p.forEach(function (t) {
                    t.selected &&
                      (C += t.price * e.calculateNum({ saleType: t.saleType }));
                  }),
                  d &&
                    (C =
                      d.productPrice *
                      this.calculateNum({ saleType: d.saleType }));
                var k = (null == l ? void 0 : l.cardPrice) || 0;
                (N = y.zt_add(T, x, k, C)),
                  (this._totalPriceBeforeDiscount = N);
                var D = 0;
                if (this._isAutoSelectCoupon) {
                  var V = this.getMaxCoupon(s, N),
                    A = V.maxCoupon,
                    B = V.maxCouponPrice;
                  1 != (null == A ? void 0 : A.authState)
                    ? ((D = B), this.setData({ selectedCoupon: A }))
                    : this.setData({ unAuthCoupon: A });
                } else (D = I.Z.getCouponPrice(o, N) || 0), this.setData({ selectedCoupon: D > 0 ? o : null });
                var S = (null == l ? void 0 : l.reducePrice) || 0,
                  L = D.zt_add(S);
                (N = N.zt_sub(L)),
                  null != r &&
                    r.reducedPrice &&
                    (L = L.zt_add(r.reducedPrice * (f + g + v))),
                  this.setData({
                    couponPrice: D,
                    totalPrice: N,
                    favorablePrice: L,
                  }),
                  this.getDiscountInfo();
              }),
              (0, l.Z)(Ze, "checkPassengerNumber", function () {
                var e = 0,
                  t = 0,
                  n = this.getPassengersNumber(),
                  i = (n.adult, n.child),
                  a = S.wq.bookQueryInfo.searchPassengerList;
                return (
                  null == a ||
                    a.forEach(function (n) {
                      1 == n.passengerType
                        ? (e = n.passengerCount)
                        : 2 == n.passengerType && (t = n.passengerCount);
                    }),
                  (0 == e && 0 == t) ||
                    (!(t > 0 && 0 == i) && !(0 == t && i > 0))
                );
              }),
              (0, l.Z)(Ze, "handleBook", function () {
                var e = this;
                return (0, u.Z)(
                  (0, d.Z)().mark(function t() {
                    var n, i, a, o, r, c, s, l, u, p, m, h, f, v, N, T, x;
                    return (0, d.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((n = e),
                              (i = e.data),
                              (a = i.enterTime),
                              (o = i.additionalProductsType),
                              (r = i.penetrateProductId),
                              (c = i.additionalProducts),
                              (s = i.passengerList),
                              (l = i.isCheckPolicy),
                              (u =
                                null == s
                                  ? void 0
                                  : s.filter(function (e) {
                                      return e.selected;
                                    })),
                              (p = e.getPassengersNumber()),
                              (m = p.adult),
                              (h = p.child),
                              (f = p.baby),
                              (v = m + h + f || 0),
                              !k.Z.isFastDoubleClick())
                            ) {
                              t.next = 7;
                              break;
                            }
                            return t.abrupt("return");
                          case 7:
                            if (l) {
                              t.next = 13;
                              break;
                            }
                            return (
                              (t.next = 10),
                              I.Z.AsyncAction(function (t) {
                                e.showMultiButtonDialog({
                                  title: "订票服务协议",
                                  content: function () {
                                    var t;
                                    return (0, W.tZ)(g.View, {
                                      className: "ticketing-policy",
                                      children:
                                        null ===
                                          (t = k.Z.convertLinkRickTextToArray(
                                            e.getPolicyContent()
                                          )) || void 0 === t
                                          ? void 0
                                          : t.map(function (e) {
                                              return "url" == e.type
                                                ? (0, W.tZ)(g.Navigator, {
                                                    url: e.url,
                                                    className: "navigator",
                                                    children: e.val,
                                                  })
                                                : (0, W.tZ)(
                                                    g.Text,
                                                    {
                                                      className: "text",
                                                      children: e.val,
                                                    },
                                                    e.val
                                                  );
                                            }),
                                    });
                                  },
                                  rightButtonName: "同意并继续",
                                  leftButtonName: "再想想",
                                  className: "policy-check-dialog",
                                  onLeftButtonClick: function () {
                                    return t(!1);
                                  },
                                  onRightButtonClick: function () {
                                    return t(!0);
                                  },
                                });
                              })
                            );
                          case 10:
                            if (t.sent) {
                              t.next = 13;
                              break;
                            }
                            return t.abrupt("return");
                          case 13:
                            if (!(new Date().getTime() - a > 6e5)) {
                              t.next = 16;
                              break;
                            }
                            return (
                              e.showCommonDialog({
                                content:
                                  "您在此页面停留过久，将为您重新搜索航班信息",
                                buttonName: "确定",
                                onButtonClick: function () {
                                  n.backToResearch();
                                },
                              }),
                              t.abrupt("return")
                            );
                          case 16:
                            if (0 !== v) {
                              t.next = 19;
                              break;
                            }
                            return (
                              e.showCommonDialog("请先添加乘客"),
                              t.abrupt("return")
                            );
                          case 19:
                            if (
                              ((N = c.some(function (e) {
                                return e.selected;
                              })),
                              (T = u.filter(function (e) {
                                return e.age && e.age >= 18;
                              }).length),
                              e.checkPassengerNumber())
                            ) {
                              t.next = 24;
                              break;
                            }
                            return (
                              (x = [
                                {
                                  passengerType: 1,
                                  passengerCount:
                                    u.filter(function (e) {
                                      return "成人票" == e.passengerType;
                                    }).length || 1,
                                },
                                {
                                  passengerType: 2,
                                  passengerCount:
                                    u.filter(function (e) {
                                      return "儿童票" == e.passengerType;
                                    }).length || 0,
                                },
                              ]),
                              t.abrupt("return", Ie({ passengerNumberList: x }))
                            );
                          case 24:
                            m > 0 && 0 === T && N
                              ? y().showModal({
                                  title: "温馨提示",
                                  content:
                                    "未满18周岁的乘客不能单独购买保险，若需购买保险则订单中至少包含一名成人乘客",
                                  cancelText: "添加成人",
                                  confirmText: "放弃保险",
                                  success: function (t) {
                                    t.confirm &&
                                      (e.resetAdditionalProducts(),
                                      e.validateSubmitData());
                                  },
                                })
                              : (m > 0 && 0 === T && !N && (2 === o || r)) ||
                                2 === o ||
                                r
                              ? e.validateSubmitData()
                              : ((e._continue = !0), e.checkInsurance());
                          case 25:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              }),
              (0, l.Z)(Ze, "resetAdditionalProducts", function () {
                var e = this.data,
                  t = e.additionalProducts,
                  n = e.additionalProductsType,
                  i = t.map(function (e) {
                    return (0, h.Z)((0, h.Z)({}, e), {}, { selected: !1 });
                  });
                this.setData({
                  additionalProducts: i,
                  additionalProductsType: 1 === n ? 0 : n,
                }),
                  this.getPrice();
              }),
              (0, l.Z)(Ze, "validateSubmitData", function () {
                var e = this;
                return (0, u.Z)(
                  (0, d.Z)().mark(function t() {
                    var n, i, a, o, r, c, s, l, u, p, m, h, f, g, v;
                    return (0, d.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((n = e.data),
                              (i = n.phoneNumber),
                              (a = n.email),
                              (o = n.expenseSwitch),
                              (r = n.invoiceRelateInfo),
                              (c = n.invoiceTitle),
                              (s = n.invoiceName),
                              (l = n.invoiceAddress),
                              (u = n.maxInventory),
                              (p = n.cabinDetail.priceList),
                              (m = e.getPassengersNumber()),
                              (h = m.adult),
                              (f = m.child),
                              (g = m.baby),
                              (v = h + f + g || 0),
                              (e._continue = !1),
                              i)
                            ) {
                              t.next = 8;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.showCommonDialog("请输入手机号码")
                            );
                          case 8:
                            if (/^1([3456789]\d{9})$/.test(i)) {
                              t.next = 10;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.showCommonDialog("请输入正确的手机号码")
                            );
                          case 10:
                            if (a) {
                              t.next = 14;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.showCommonDialog("请输入邮箱地址")
                            );
                          case 14:
                            if (
                              /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(
                                a
                              )
                            ) {
                              t.next = 16;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.showCommonDialog("请输入正确的邮箱地址")
                            );
                          case 16:
                            if (
                              p.some(function (e) {
                                return 3 === e.passengerType;
                              }) ||
                              !(g > 0)
                            ) {
                              t.next = 19;
                              break;
                            }
                            return (
                              e.showCommonDialog(
                                "该舱位婴儿不可订，请选择其他舱位"
                              ),
                              t.abrupt("return", !1)
                            );
                          case 19:
                            if (e._ignoreChildWithoutAdult) {
                              t.next = 29;
                              break;
                            }
                            if (0 !== h || 0 === f) {
                              t.next = 26;
                              break;
                            }
                            return (
                              (t.next = 23),
                              new Promise(function (t) {
                                e.showMultiButtonDialog({
                                  maskClose: !1,
                                  hideTitle: !0,
                                  content:
                                    "12周岁以下儿童需有18岁以上的成人陪伴乘机，否则有无法乘机的风险",
                                  leftButtonName: "再想想",
                                  rightButtonName: "继续预定",
                                  onLeftButtonClick: function () {
                                    t(!1);
                                  },
                                  onRightButtonClick: function () {
                                    (e._ignoreChildWithoutAdult = !0), t(!0);
                                  },
                                });
                              })
                            );
                          case 23:
                            if (t.sent) {
                              t.next = 26;
                              break;
                            }
                            return t.abrupt("return");
                          case 26:
                            if (!(h > 0 && (f + g) / h > 2)) {
                              t.next = 29;
                              break;
                            }
                            return (
                              e.showCommonDialog({
                                content:
                                  "抱歉，儿童必须在成人陪同下登机，每名成人只能携带2名不超过12岁的旅客(其中最多携带一名婴儿旅客)",
                                buttonName: "修改乘客",
                              }),
                              t.abrupt("return")
                            );
                          case 29:
                            if (0 !== h || 0 === g) {
                              t.next = 32;
                              break;
                            }
                            return (
                              e.showCommonDialog(
                                "婴儿必须有成人陪同预订，请添加成人"
                              ),
                              t.abrupt("return", !1)
                            );
                          case 32:
                            if (!(g > h)) {
                              t.next = 35;
                              break;
                            }
                            return (
                              e.showCommonDialog(
                                "一位成人只允许带一个婴儿，请继续选择或新增乘机人"
                              ),
                              t.abrupt("return", !1)
                            );
                          case 35:
                            if (!(v > 9)) {
                              t.next = 38;
                              break;
                            }
                            return (
                              e.showCommonDialog("一次最多选择9位乘客"),
                              t.abrupt("return", !1)
                            );
                          case 38:
                            if (!(v > u)) {
                              t.next = 41;
                              break;
                            }
                            return (
                              e.showCommonDialog(
                                "很抱歉，该航班仅剩".concat(u, "张机票")
                              ),
                              t.abrupt("return", !1)
                            );
                          case 41:
                            if (!o || 3 === r.invoiceType) {
                              t.next = 49;
                              break;
                            }
                            if (s && l) {
                              t.next = 45;
                              break;
                            }
                            return (
                              e.showCommonDialog("请输入收件信息"),
                              t.abrupt("return", !1)
                            );
                          case 45:
                            if (!r.isInvoiceAlterable) {
                              t.next = 49;
                              break;
                            }
                            if (c) {
                              t.next = 49;
                              break;
                            }
                            return (
                              e.showCommonDialog("请输入发票抬头"),
                              t.abrupt("return", !1)
                            );
                          case 49:
                            A.ZP.auth && A.ZP.isLogin
                              ? e.bookVerify()
                              : e.doLogin(function () {
                                  e.bookVerify();
                                });
                          case 50:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              }),
              (0, l.Z)(Ze, "bookVerify", function () {
                var e,
                  t = this,
                  n = this.data,
                  i = n.passengerList,
                  a = n.segmentInfoList,
                  o = n.selectedCoupon,
                  r = {
                    data: {
                      bookVerifyFlight: a,
                      bookVerifyPassenger: [],
                      couponCode: "",
                    },
                  },
                  c =
                    null == i
                      ? void 0
                      : i.filter(function (e) {
                          return e.selected;
                        }),
                  s = (0, m.Z)(c);
                try {
                  for (s.s(); !(e = s.n()).done; ) {
                    var l = e.value,
                      d = l.nameEN,
                      u = l.passportType,
                      p = l.passportCode;
                    r.data.bookVerifyPassenger.push({
                      passengerName: d,
                      cardType: (0, O.w5)(u),
                      cardNo: p,
                    });
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
                o && (r.data.couponCode = o.couponCode),
                  (0, R.showLoading)("正在校验订单..."),
                  (0, q.sK)(r).then(
                    function (e) {
                      var n = e || {},
                        i = n.resultCode,
                        a = n.resultMessage,
                        o = n.data;
                      (0, R.hideLoading)(),
                        1 === i
                          ? t.doSubmit()
                          : -1 === i
                          ? t.showRepeatOrder(o, a)
                          : t.showCommonDialog(a || "网络错误");
                    },
                    function (e) {
                      console.log(e);
                    }
                  );
              }),
              (0, l.Z)(Ze, "showRepeatOrder", function (e, t) {
                var n = this;
                e.hasPaid
                  ? e.bookVerifyFlight && 0 != e.bookVerifyFlight.length
                    ? y().showModal({
                        title: "温馨提示",
                        content: t,
                        cancelText: "返回修改",
                        confirmText: "查看订单",
                        success: function (t) {
                          t.confirm && n.showOldOrder(e.bookVerifyFlight);
                        },
                      })
                    : y().showModal({
                        title: "温馨提示",
                        showCancel: !1,
                        content: t,
                        success: function () {},
                      })
                  : e.bookVerifyFlight && 0 != e.bookVerifyFlight.length
                  ? y().showModal({
                      title: "温馨提示",
                      content: t,
                      cancelText: "继续预订",
                      confirmText: "查看订单",
                      success: function (t) {
                        if (t.confirm) n.showOldOrder(e.bookVerifyFlight);
                        else {
                          var i = e.bookVerifyFlight[0].orderID;
                          n.cancelOrderPromise(i).then(
                            function () {
                              n.doSubmit();
                            },
                            function () {}
                          );
                        }
                      },
                    })
                  : this.doSubmit();
              }),
              (0, l.Z)(Ze, "showOldOrder", function (e) {
                if (1 === e.length) {
                  var t = e[0].orderID;
                  if (!t || 0 == t.length) return void this.toFlightOrderList();
                  this.toFlightOrderDetail(t);
                } else this.toFlightOrderList();
              }),
              (0, l.Z)(Ze, "cancelOrderPromise", function (e) {
                return new Promise(function (t, n) {
                  var i = { data: { orderNumber: e, reason: "" } };
                  (0, q.IY)(i).then(
                    function (e) {
                      e && 1 === e.resultCode ? t() : n();
                    },
                    function (e) {
                      console.log(e), n();
                    }
                  );
                });
              }),
              (0, l.Z)(Ze, "toFlightOrderList", function () {
                y().reLaunch({
                  url: "/pages/myctrip/list/list?orderType=flight",
                });
              }),
              (0, l.Z)(Ze, "toFlightOrderDetail", function (e) {
                this.navigateTo({
                  url: "/pages/flightIntl/detail/detail?orderNumber=".concat(e),
                });
              }),
              (0, l.Z)(Ze, "doSubmit", function () {
                var e = this,
                  t = this,
                  n = this.data,
                  i = n.phoneNumber,
                  a = n.email,
                  o = n.orderType,
                  r = n.selectedCoupon,
                  c = n.cabinDetail,
                  s = n.invoiceRelateInfo,
                  l = n.expenseSwitch,
                  d = n.invoiceTitle,
                  u = n.invoiceType,
                  p = n.invoiceTax,
                  h = n.invoiceName,
                  f = n.passengerList,
                  g = n.additionalProducts,
                  v = n.fromPage,
                  N = n.eProductId,
                  y = c.bookingValidationTokenNumber,
                  T = c.vendorCode,
                  x = c.routeSearchToken,
                  P = c.saleType,
                  Z = c.priceList,
                  b = c.ext,
                  w = this._token,
                  C = w.searchCriteriaToken,
                  k = w.searchViToken,
                  I = w.transactionID,
                  D = S.wq.bookQueryInfo,
                  V = D.tripType,
                  A = D.searchSegmentList,
                  B = D.searchPassengerList,
                  L = D.seatGrade,
                  X = D.segmentInfoList,
                  _ =
                    null == f
                      ? void 0
                      : f.filter(function (e) {
                          return e.selected;
                        }),
                  E = _[0],
                  M = s.invoiceType,
                  O = (re.State.appendProductModel.appendProductNode || {})
                    .additionalProducts;
                console.info("fillInPage3============================\n", x),
                  console.log("bookQueryInfo============", S.wq.bookQueryInfo);
                var z = {
                  data: {
                    version: 7,
                    tripType: V,
                    orderType: o,
                    couponNo: r && r.couponCode ? r.couponCode : "",
                    transactionID: I,
                    searchCriteriaToken: C,
                    searchViToken: k,
                    routeSearchToken: x,
                    vendorCode: T,
                    bookingValidationTokenNumber: y,
                    fromPage: v,
                    seatGrade: L,
                    searchSegmentList: A,
                    searchPassengerList: B,
                    qteInfo: this.handleQTEInfo(Z),
                    flightSegments: X,
                    saleType: P,
                    invoiceType: s.invoiceType,
                    isNeedInvoice: l,
                    invoiceInfo: null,
                    deliveryInfo: null,
                    passengerList: [],
                    contactInfo: {
                      contactName: E.nameEN,
                      contactPhoneType: 1,
                      contactPhone: i,
                      contactEmail: a,
                    },
                    appendProductlist: [],
                    ext: b,
                  },
                };
                !l ||
                  (2 !== M && 3 !== M) ||
                  (s.isInvoiceAlterable &&
                    (z.data.invoiceInfo = {
                      title: d,
                      taxNo: p,
                      invoiceTitleType: u,
                      categoryType: 2,
                    }),
                  2 === M &&
                    (z.data.deliveryInfo = {
                      deliveryType: s.deliveryType,
                      contactName: h,
                      contactPhone: i,
                      province: this._region[0],
                      city: this._region[1],
                      district: this._region[2],
                      addr: this._address,
                      email: "",
                    }));
                var F,
                  H = (0, m.Z)(_);
                try {
                  for (H.s(); !(F = H.n()).done; ) {
                    var Y = F.value,
                      j = {
                        passengerName: Y.nameEN,
                        passengerCardType: Y.passportType,
                        passengerCardNo: Y.passportCode,
                        passengerType: Y.ticketType,
                        passengerPhone: Y.mobile,
                        cardTimeLimit: Y.cardTimeLimit,
                        passengerBirthday: Y.passengerBirth,
                        nationality: Y.nationality,
                        gender: Y.gender,
                      };
                    z.data.passengerList.push(j);
                  }
                } catch (e) {
                  H.e(e);
                } finally {
                  H.f();
                }
                var W,
                  Q = (0, m.Z)(g);
                try {
                  for (Q.s(); !(W = Q.n()).done; ) {
                    var U = W.value;
                    U.selected &&
                      z.data.appendProductlist.push({
                        productId: U.productCode,
                      });
                  }
                } catch (e) {
                  Q.e(e);
                } finally {
                  Q.f();
                }
                null == O ||
                  O.forEach(function (e) {
                    e.selected &&
                      z.data.appendProductlist.push({
                        productId: e.productCode,
                      });
                  }),
                  N && z.data.appendProductlist.push({ productId: N }),
                  z.data.flightSegments ||
                    (z.data.flightSegments = [{ flightIndex: 1 }]),
                  console.log("下单参数: ", JSON.stringify(z)),
                  this.doPaymentSteps(),
                  (0, q.yi)(z)
                    .then(function (n) {
                      var i = n.resultCode,
                        a = n.resultMessage,
                        o = void 0 === a ? "" : a;
                      function r() {
                        var e = this;
                        1 !== i && ((0, R.hideLoading)(), t.togglePaymentBox()),
                          1 === i
                            ? ((t.orderCompletion = !0),
                              (t.payInfoData = n.data),
                              t.doPay(n.data))
                            : 2 === i
                            ? ((t._orderData = n.data),
                              t.showMultiButtonDialog({
                                content: o,
                                leftButtonName: "重新选择",
                                rightButtonName: "接受价格",
                                onRightButtonClick: function () {
                                  e.acceptChangedOrderPrice();
                                },
                                onLeftButtonClick: function () {
                                  e.cancelOrderAndBackToResearch();
                                },
                              }))
                            : -10 === i || -11 === i
                            ? t.showCommonDialog("下单失败，请重试~")
                            : t.showCommonDialog({
                                content: o,
                                buttonName: "确定",
                                onButtonClick: function () {
                                  t.backToResearch();
                                },
                              });
                      }
                      console.log("TCL: doSubmit -> response", n),
                        e.setData({ repeatOrderCancel: !0 }),
                        n.data && n.data.waitSeconds && n.data.waitSeconds > 0
                          ? setTimeout(function () {
                              r();
                            }, 1e3 * n.data.waitSeconds)
                          : r();
                    })
                    .catch(function () {
                      t.showCommonDialog("下单失败，请重试~");
                    })
                    .finally(function () {
                      De.set({ email: a });
                    });
              }),
              (0, l.Z)(Ze, "onBackAction", function () {
                (S.wq.intlListRefresh = !0), y().navigateBack({ delta: 2 });
              }),
              (0, l.Z)(Ze, "doPay", function (e) {
                var t = this;
                if (
                  ((this.orderNumber = e.orderNumber),
                  console.log("order number: ".concat(e.orderNumber)),
                  console.log("doPay", new Date().getTime()),
                  !this.stepCompletion)
                )
                  return !1;
                this.setData({
                  orderState: 2,
                  stateDesc: "订单创建成功，正在前往支付...",
                }),
                  Z.ZP.doPayment({
                    orderNumber: e.orderNumber,
                    business: "flight",
                  })
                    .then(function () {
                      var t =
                        "/pages/flightIntl/detail/detail?orderNumber=".concat(
                          e.orderNumber
                        );
                      y().reLaunch({ url: t });
                    })
                    .catch(function (e) {
                      var n = (e || {}).errMsg;
                      null != n &&
                        n.endsWith("fail cancel") &&
                        ((0, R.showToast)("取消支付"), t.togglePaymentBox());
                    });
              }),
              (0, l.Z)(Ze, "acceptChangedOrderPrice", function () {
                var e = this._orderData.orderNumber;
                this.toFlightOrderDetail(e);
              }),
              (0, l.Z)(Ze, "cancelOrderAndBackToResearch", function () {
                var e = this._orderData.orderNumber;
                this.cancelOrderPromise(e).then(
                  function () {},
                  function () {}
                ),
                  this.backToResearch();
              }),
              (0, l.Z)(Ze, "backToResearch", function () {
                var e = this.data.roundTrip;
                (S.wq.cacheUsage = 2),
                  (S.wq.intlListRefresh = !0),
                  y().navigateBack({ delta: e ? 3 : 2 });
              }),
              (0, l.Z)(Ze, "togglePaymentBox", function () {
                var e = this,
                  t = this.data,
                  n = t.showPaymentBox,
                  i = t.transition;
                this.setData({
                  mask: !n,
                  showPaymentBox: !n,
                  paymentSteps: [],
                  maskType: "payment",
                }),
                  setTimeout(function () {
                    e.setData({ transition: !i });
                  }, 10);
              }),
              (0, l.Z)(Ze, "closePaymentBox", function () {
                var e = this;
                this.setData({
                  mask: !1,
                  showPaymentBox: !1,
                  paymentSteps: [],
                  maskType: "",
                }),
                  setTimeout(function () {
                    e.setData({ transition: !1 });
                  }, 10);
              }),
              (0, l.Z)(Ze, "doPaymentSteps", function () {
                var e,
                  t = this.data,
                  n = t.flight,
                  i = t.flight2,
                  a = t.roundTrip,
                  o = t.passengerList,
                  r =
                    null == o
                      ? void 0
                      : o.filter(function (e) {
                          return e.selected;
                        }),
                  c = this,
                  s = [],
                  d = [];
                this.togglePaymentBox(),
                  (this.orderCompletion = !1),
                  (this.stepCompletion = !1);
                var u = [
                  { type: "title", description: a ? "去程信息" : "航班信息" },
                  { type: "flight", description: n.airportInfo, done: !1 },
                  { type: "flight", description: n.departDateInfo, done: !1 },
                ];
                if (((s = [].concat(u)), a)) {
                  var f = [
                    { type: "title", description: "返程信息" },
                    { type: "flight", description: i.airportInfo, done: !1 },
                    { type: "flight", description: i.departDateInfo, done: !1 },
                  ];
                  s = [].concat((0, p.Z)(s), f);
                }
                var g,
                  v = (0, m.Z)(r);
                try {
                  for (v.s(); !(g = v.n()).done; ) {
                    var N = g.value,
                      y = {
                        type: "passenger",
                        description: ""
                          .concat(N.nameEN, "  ")
                          .concat(N.passportType, ": ")
                          .concat(N.passportCode),
                        done: !1,
                      };
                    d.push(y);
                  }
                } catch (t) {
                  v.e(t);
                } finally {
                  v.f();
                }
                var T = (e = [{ type: "title", description: "乘机人" }].concat(
                    d,
                    (0, p.Z)(s)
                  )).length,
                  x = 0;
                this.setData({ orderState: 1, stateDesc: "正在生成订单..." }),
                  (function t() {
                    if (x > 2 * T - 1)
                      return (
                        (c.stepCompletion = !0),
                        console.log("doSteps", new Date().getTime()),
                        c.orderCompletion &&
                          (c.setData({
                            orderState: 2,
                            stateDesc: "订单创建成功，正在前往支付...",
                          }),
                          c.doPay(c.payInfoData)),
                        !1
                      );
                    var n = parseInt(x / 2);
                    x % 2
                      ? (c.setData(
                          (0, l.Z)(
                            {},
                            "paymentSteps[".concat(n, "]"),
                            (0, h.Z)((0, h.Z)({}, e[n]), {}, { done: !0 })
                          )
                        ),
                        x++,
                        t())
                      : (c.setData(
                          (0, l.Z)({}, "paymentSteps[".concat(n, "]"), e[n])
                        ),
                        x++,
                        "title" === e[n].type
                          ? t()
                          : setTimeout(function () {
                              t();
                            }, c.randomRange(900, 1100)));
                  })();
              }),
              (0, l.Z)(Ze, "randomRange", function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1,
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 100;
                return Math.floor(e + Math.random() * (t - e + 1));
              }),
              (0, l.Z)(Ze, "calculateNum", function (e) {
                var t = e.saleType,
                  n = this.data.flightSegmentNumber,
                  i = this.getPassengersNumber(),
                  a = i.adult,
                  o = i.child,
                  r = i.baby,
                  c = 0;
                switch (t) {
                  case 1:
                    c = (a + o) * n;
                    break;
                  case 2:
                    c = (a + o + r) * n;
                    break;
                  case 3:
                    c = a * n;
                    break;
                  case 4:
                    c = a + o;
                    break;
                  case 5:
                    c = a + o + r;
                    break;
                  case 6:
                    c = a;
                    break;
                  default:
                    c = 1;
                }
                return c;
              }),
              (0, l.Z)(Ze, "touchstart", function (e) {
                e.stopPropagation();
                var t,
                  n = e.changedTouches[0],
                  i = n.clientX,
                  a = n.clientY,
                  o = this.data.passengerList,
                  r = (0, m.Z)(o);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    t.value.isTouchMove = !1;
                  }
                } catch (e) {
                  r.e(e);
                } finally {
                  r.f();
                }
                console.log("start"),
                  this.setData({ passengerList: o, isMoving: !0 }),
                  (this.startX = i),
                  (this.startY = a);
              }),
              (0, l.Z)(Ze, "touchmove", function (e) {
                e.stopPropagation();
                var t = e.currentTarget.dataset.index,
                  n = this.data.passengerList,
                  i = Math.PI,
                  a = e.changedTouches[0],
                  o = a.clientX,
                  r = a.clientY,
                  c = o - this.startX,
                  s = r - this.startY,
                  l = Math.abs((180 * Math.atan2(s, c)) / i);
                console.log(l),
                  l > 150
                    ? (n[t].isTouchMove = !0)
                    : l < 30 && (n[t].isTouchMove = !1),
                  this.setData({ passengerList: (0, p.Z)(n) });
              }),
              (0, l.Z)(Ze, "touchend", function () {}),
              (0, l.Z)(Ze, "toGoldenServiceDetail", function () {
                var e = this.data.isTieyou,
                  t =
                    "https://market.suanya.com/activity/flight/static/flt-fqbz-".concat(
                      e ? "ty" : "zx",
                      ".html"
                    );
                b.Z.twebview({ data: { url: t } });
              }),
              (0, l.Z)(Ze, "noop", function () {}),
              (0, l.Z)(Ze, "onUnload", function () {
                this._favCheckTimer && clearTimeout(this._favCheckTimer);
              }),
              Ze),
            _e =
              (0, T.h)(!1, { usePageWrapper: !0 })(
                (be =
                  P()(Xe)(
                    (be = (function (e) {
                      (0, c.Z)(n, e);
                      var t = (0, s.Z)(n);
                      function n(e) {
                        var i;
                        return (
                          (0, a.Z)(this, n),
                          (i = t.call(this, e)),
                          (0, l.Z)((0, r.Z)(i), "pageWrapperConfig", {
                            renderHigherZIndexView: function () {
                              var e = i.data,
                                t = e.isIPhoneX,
                                n = e.totalPrice,
                                a = e.orderState,
                                o = e.favorablePrice,
                                c = e.maxInventory,
                                s = e.priceDetailShow,
                                l = e.paymentSteps,
                                d = e.showPaymentBox,
                                u = e.roundTrip,
                                p = e.stateDesc,
                                m = e.passengerList,
                                h = e.morePassengers,
                                f = e.moreInvoiceList,
                                N = e.invoiceList,
                                y = e.invoiceType,
                                T = e.showInsurance,
                                x = e.safeTipContent,
                                P = m.filter(function (e) {
                                  return e.selected;
                                });
                              return (0, W.BX)(W.HY, {
                                children: [
                                  (0, W.tZ)(fe, {
                                    showDetail: s,
                                    price: n,
                                    favorablePrice: o,
                                    maxInventory: c,
                                    onBook: i.handleBook.bind((0, r.Z)(i)),
                                    onTogglePriceDetail:
                                      i._togglePriceDetail.bind((0, r.Z)(i)),
                                  }),
                                  (0, W.tZ)(g.View, {
                                    className:
                                      "type-list " + (f ? "active" : ""),
                                    children:
                                      N &&
                                      N.map(function (e) {
                                        return (0,
                                        W.tZ)(W.HY, { children: (0, W.BX)(g.View, { className: "type-item " + (y === e.type ? "color-primary" : ""), "data-type": e.type, id: "AaAA", onClick: i.selectInvoiceType, children: [e.title, y === e.type && (0, W.tZ)(g.Icon, { color: "#fc6e51", size: "14", type: "success_no_circle", className: "icon-selected" })] }) });
                                      }),
                                  }),
                                  l &&
                                    l.length > 0 &&
                                    (0, W.BX)(g.View, {
                                      className:
                                        "payment-box " +
                                        (d ? "active" : "") +
                                        " " +
                                        (Le ? "ty" : "zx"),
                                      style:
                                        "height: " +
                                        ((u ? 348 : 255) + 25 * P.length) +
                                        "px",
                                      id: "AaAB",
                                      onClick: function (e) {
                                        e.stopPropagation();
                                      },
                                      catchMove: !0,
                                      children: [
                                        (0, W.tZ)(g.View, {
                                          className: "head",
                                          children: "请核对信息",
                                        }),
                                        l.map(function (e) {
                                          return (0,
                                          W.tZ)(W.HY, { children: "title" === (null == e ? void 0 : e.type) ? (0, W.tZ)(g.View, { className: "title", children: null == e ? void 0 : e.description }) : (0, W.BX)(g.View, { className: "col", children: [null == e ? void 0 : e.description, (0, W.tZ)(g.Icon, { className: null != e && e.done ? "done" : "checking" })] }) });
                                        }),
                                        (0, W.BX)(g.View, {
                                          className: "progress-area",
                                          children: [
                                            (0, W.tZ)(g.View, {
                                              className:
                                                "pay_status " +
                                                (Le ? "ty" : "zx") +
                                                " " +
                                                (2 === a
                                                  ? "finished"
                                                  : "loading"),
                                            }),
                                            (0, W.tZ)(g.View, {
                                              className: "desc",
                                              children: p,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, W.BX)(g.View, {
                                    className:
                                      "pop-botm " + (h ? "active" : ""),
                                    children: [
                                      (0, W.BX)(g.View, {
                                        className: "pop-botm-hd",
                                        id: "AaAC",
                                        onClick: function (e) {
                                          e.stopPropagation();
                                        },
                                        catchMove: !0,
                                        children: [
                                          (0, W.tZ)(g.View, {
                                            className: "btn-cancel",
                                            id: "AaAD",
                                            onClick: i.cancelMorePassengers,
                                            children: "取消",
                                          }),
                                          (0, W.tZ)(g.View, {
                                            className: "tit",
                                            children: "添加乘客",
                                          }),
                                          (0, W.tZ)(g.View, {
                                            className:
                                              "btn-submit color-primary",
                                            id: "AaAE",
                                            onClick: i.confirmPassengers,
                                            children: "确定",
                                          }),
                                        ],
                                      }),
                                      (0, W.BX)(g.View, {
                                        className: "pop-botm-bd",
                                        children: [
                                          (0, W.tZ)(g.View, {
                                            className:
                                              "pop-add-pasg " +
                                              (Le ? "ty" : "zx"),
                                            id: "AaAF",
                                            onClick: function (e) {
                                              e.stopPropagation();
                                            },
                                            catchMove: !0,
                                            children: (0, W.tZ)(g.Button, {
                                              className: "btn-add",
                                              id: "AaAG",
                                              onClick: i.toAddNewPassenger,
                                              children: "添加新乘客",
                                            }),
                                          }),
                                          (0, W.tZ)(g.ScrollView, {
                                            className:
                                              "white-bg tip-pass-list " +
                                              (t ? "iphone-x" : ""),
                                            scrollY: "true",
                                            children:
                                              m &&
                                              m.map(function (e, t) {
                                                return (0, W.BX)(
                                                  g.View,
                                                  {
                                                    className:
                                                      "item " +
                                                      (e.disabled
                                                        ? "disabled"
                                                        : "") +
                                                      " " +
                                                      (e.selected
                                                        ? "current"
                                                        : "") +
                                                      " " +
                                                      (e.isTouchMove
                                                        ? "moved"
                                                        : ""),
                                                    "data-index": t,
                                                    "data-pid": e.passengerID,
                                                    id: "AaAH",
                                                    onClick: function () {
                                                      i.togglePassenger({
                                                        pid: e.passengerID,
                                                      });
                                                    },
                                                    onTouchStart: i.touchstart,
                                                    onTouchMove: i.touchmove,
                                                    onTouchEnd: i.touchend,
                                                    children: [
                                                      (0, W.BX)(g.View, {
                                                        className:
                                                          "item-container",
                                                        children: [
                                                          (0, W.tZ)(g.Text, {
                                                            className:
                                                              "ifont-edit iconfont",
                                                            "data-index": t,
                                                            "data-type": "edit",
                                                            id: "AaAI",
                                                            onClick: function (
                                                              t
                                                            ) {
                                                              t.stopPropagation(),
                                                                i.editPassenger(
                                                                  {
                                                                    passengerID:
                                                                      e.passengerID,
                                                                  }
                                                                );
                                                            },
                                                          }),
                                                          (0, W.BX)(g.View, {
                                                            className: "info",
                                                            children: [
                                                              (0, W.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "name",
                                                                  children: [
                                                                    (0, W.tZ)(
                                                                      g.Text,
                                                                      {
                                                                        className:
                                                                          "txt",
                                                                        children:
                                                                          e.nameEN ||
                                                                          e.name,
                                                                      }
                                                                    ),
                                                                    (0, W.tZ)(
                                                                      g.Text,
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
                                                              (0, W.tZ)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "identity",
                                                                  children:
                                                                    e.disabled
                                                                      ? "请补全证件信息"
                                                                      : e.passportType +
                                                                        " " +
                                                                        e.showPassportCode,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, W.tZ)(g.Text, {
                                                            className:
                                                              "iconfont " +
                                                              (e.selected
                                                                ? "ifont-checkboxed color-primary"
                                                                : "ifont-checkbox"),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, W.tZ)(g.View, {
                                                        className:
                                                          "item-delete",
                                                        "data-index": t,
                                                        id: "AaAJ",
                                                        onClick:
                                                          i.handlePassengerDeletion,
                                                        children: "删除",
                                                      }),
                                                    ],
                                                  },
                                                  "passengerID"
                                                );
                                              }),
                                          }),
                                          m &&
                                            !m.length &&
                                            (0, W.tZ)(g.View, {
                                              className: "tip-pass-none",
                                              children: (0, W.tZ)(g.View, {
                                                className: "p",
                                                children:
                                                  "您还没有添加过乘客信息哦",
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  T &&
                                    (0, W.BX)(g.View, {
                                      className: "safe",
                                      id: "AaAK",
                                      onClick: function (e) {
                                        e.stopPropagation();
                                      },
                                      catchMove: !0,
                                      children: [
                                        (0, W.tZ)(g.Image, {
                                          className: "bg",
                                          src: "https://pic.c-ctrip.com/train/zt/flight/shutterstock.png",
                                        }),
                                        (0, W.tZ)(g.View, {
                                          className: "title",
                                          children: x.L1,
                                        }),
                                        (0, W.tZ)(g.View, {
                                          className: "suggest",
                                          children: x.L2,
                                        }),
                                        (0, W.tZ)(g.View, {
                                          className: "brief",
                                          children: (0, W.tZ)(v.ZtRichText, {
                                            nodes: x.L3,
                                          }),
                                        }),
                                        (0, W.tZ)(g.Button, {
                                          className: "add",
                                          id: "AaAL",
                                          onClick: i.addInsurance,
                                          children: "添加保险",
                                        }),
                                        (0, W.tZ)(g.Button, {
                                          className: "unwanted",
                                          id: "AaAM",
                                          onClick: i.closeInsurance,
                                          children: "不需要保险",
                                        }),
                                        (0, W.tZ)(g.View, {
                                          className: "closed",
                                          id: "AaAN",
                                          onClick: i.closeInsurance,
                                        }),
                                      ],
                                    }),
                                  (0, W.tZ)(z.Z, { ref: i.onDrawerAttach }),
                                  (0, W.tZ)(F.Z, {
                                    ref: function (e) {
                                      i.onPanelAttach(e);
                                    },
                                  }),
                                  (0, W.tZ)(V.Z, {
                                    ref: function (e) {
                                      i.onDialogAttach(e);
                                    },
                                  }),
                                ],
                              });
                            },
                          }),
                          (i.pageRootClassName = "flt-intl-book"),
                          (i.store = re.create((0, r.Z)(i)).store),
                          i
                        );
                      }
                      return (
                        (0, o.Z)(n, [
                          {
                            key: "renderTitleView",
                            value: function () {
                              var e = this.queryInfo || {},
                                t = e.departCity,
                                n = e.arriveCity,
                                i = this.isRoundTrip
                                  ? "ifont2-wangfan_linea_12"
                                  : "ifont2-dancheng_linea_12";
                              return (0, W.BX)(g.View, {
                                className: "title-view flex-center",
                                children: [
                                  (0, W.tZ)(g.Text, {
                                    className: "from",
                                    children: this.isRoundTrip ? n : t,
                                  }),
                                  (0, W.tZ)(g.Text, {
                                    className: "iconfont2 ".concat(i),
                                  }),
                                  (0, W.tZ)(g.Text, {
                                    className: "to",
                                    children: this.isRoundTrip ? t : n,
                                  }),
                                ],
                              });
                            },
                          },
                          {
                            key: "getPriceDetails",
                            value: function () {
                              var e,
                                t,
                                n = this,
                                i = this.data,
                                a = i.cabinDetail,
                                o = i.vipProductInfo,
                                r = i.expenseSwitch,
                                c = i.invoiceRelateInfo,
                                s = i.selectedCoupon,
                                l = i.favorablePrice,
                                d = i.detailPageXProduct,
                                u = a.priceList,
                                m = (
                                  (re.State.appendProductModel || {})
                                    .appendProductNode || {}
                                ).additionalProducts,
                                h = u.filter(function (e) {
                                  return 1 === e.passengerType;
                                })[0],
                                f = u.filter(function (e) {
                                  return 2 === e.passengerType;
                                })[0],
                                g = u.filter(function (e) {
                                  return 3 === e.passengerType;
                                })[0],
                                v = this.getPassengersNumber("ticketType"),
                                N = v.adult,
                                y = v.child,
                                T = v.baby,
                                x = [],
                                P = function (e) {
                                  var t = e.type,
                                    n = e.num,
                                    i = e.priceInfo;
                                  return {
                                    name: ["", "成人票", "儿童票", "婴儿票"][t],
                                    price: "¥".concat(
                                      i.salePrice.zt_add(a.reducedPrice)
                                    ),
                                    num: n,
                                    items: [
                                      {
                                        item: "票价",
                                        price: "¥".concat(
                                          i.standPrice.zt_add(a.reducedPrice)
                                        ),
                                      },
                                      {
                                        item: "税费",
                                        price: "¥".concat(h.tax),
                                      },
                                    ],
                                  };
                                };
                              N > 0 &&
                                x.push(P({ type: 1, num: N, priceInfo: h })),
                                y > 0 &&
                                  x.push(P({ type: 2, num: y, priceInfo: f })),
                                T > 0 &&
                                  x.push(P({ type: 3, num: T, priceInfo: g }));
                              var Z,
                                b = { name: "增值服务", items: [] },
                                w =
                                  null == m
                                    ? void 0
                                    : m
                                        .filter(function (e) {
                                          return e.selected;
                                        })
                                        .map(function (e) {
                                          return {
                                            item: e.productName,
                                            price: "¥".concat(e.price),
                                            num: n.calculateNum({
                                              saleType: e.saleType,
                                            }),
                                            unit: e.unit,
                                          };
                                        });
                              (null == w ? void 0 : w.length) > 0 &&
                                (Z = b.items).push.apply(Z, (0, p.Z)(w)),
                                console.debug(d),
                                d &&
                                  b.items.push({
                                    item: d.productName || "",
                                    price: "¥".concat(d.productPrice),
                                    num: this.calculateNum({
                                      saleType: d.saleType,
                                    }),
                                    unit: "份",
                                  }),
                                o &&
                                  b.items.push({
                                    item: o.cardName,
                                    price: "¥".concat(o.cardPrice),
                                    num: 1,
                                    unit: "份",
                                  }),
                                r &&
                                  b.items.push({
                                    item: "快递费",
                                    price: "¥".concat(c.deliveryPrice),
                                    num: 1,
                                    unit: "份",
                                  }),
                                (null === (e = b.items) || void 0 === e
                                  ? void 0
                                  : e.length) > 0 && x.push(b);
                              var C = { name: "优惠", items: [] };
                              return (
                                null != a &&
                                  a.reducedPrice &&
                                  C.items.push({
                                    item: "国际机票促销立减",
                                    price: "-¥".concat(a.reducedPrice),
                                    num: N + y + T,
                                    class: "price-red",
                                    unit: "份",
                                  }),
                                o &&
                                  C.items.push({
                                    item: null == o ? void 0 : o.reduceName,
                                    price: "-¥".concat(o.reducePrice),
                                    num: 1,
                                    unit: "份",
                                    class: "price-red",
                                  }),
                                s &&
                                  C.items.push({
                                    item: "".concat(s.couponName || l),
                                    price: "-¥".concat(
                                      I.Z.getCouponPrice(
                                        s,
                                        this._totalPriceBeforeDiscount
                                      )
                                    ),
                                    num: 1,
                                    class: "price-red",
                                    unit: "份",
                                  }),
                                (null === (t = C.items) || void 0 === t
                                  ? void 0
                                  : t.length) > 0 && x.push(C),
                                x
                              );
                            },
                          },
                          {
                            key: "_togglePriceDetail",
                            value: function () {
                              var e = this.getPassengersNumber("ticketType"),
                                t = e.adult,
                                n = e.child,
                                i = e.baby;
                              if (!this.data.priceDetailShow) {
                                if (t + n + i === 0)
                                  return this.showCommonDialog("请先选择乘客");
                                var a = this.getPriceDetails();
                                return (
                                  this.setData({ priceDetailShow: !0 }),
                                  (function (e) {
                                    var t,
                                      n = e.data,
                                      i = e.onWrapClose;
                                    (null == n ? void 0 : n.length) > 0 &&
                                      (null === (t = (0, R.getCurrentPage)()) ||
                                        void 0 === t ||
                                        t.showCommonDrawer({
                                          hideTitle: !0,
                                          hideClose: !0,
                                          content: function () {
                                            return (0, W.tZ)(ge, { data: n });
                                          },
                                          onWrapClose: i,
                                        }));
                                  })({
                                    data: a,
                                    onWrapClose:
                                      this._togglePriceDetail.bind(this),
                                  })
                                );
                              }
                              this.setData({ priceDetailShow: !1 }),
                                this.closeCommonDrawer();
                            },
                          },
                          {
                            key: "getPolicyContent",
                            value: function () {
                              var e = this.data,
                                t = e.noticeContent,
                                n = e.minorsNoticeContent,
                                i = e.passengerList.filter(function (e) {
                                  return e.selected;
                                });
                              if (!((null == i ? void 0 : i.length) > 0))
                                return t || "";
                              var a = this.getPassengersNumber();
                              return (a.child + a.baby > 0 && n) || t || "";
                            },
                          },
                          {
                            key: "togglePolicy",
                            value: function () {
                              var e = this.data.isCheckPolicy;
                              this.setData({ isCheckPolicy: !e });
                            },
                          },
                          {
                            key: "handleDisplayPassengers",
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : [],
                                t = 0;
                              if (
                                (e.forEach(function (e) {
                                  (e.display = e.selected || e.display),
                                    e.display && t++;
                                }),
                                t < 2)
                              ) {
                                var n,
                                  i = [],
                                  a = (0, m.Z)(e);
                                try {
                                  for (a.s(); !(n = a.n()).done; ) {
                                    var o = n.value;
                                    if (
                                      (!o.mobile ||
                                        o.disabled ||
                                        o.display ||
                                        ((o.display = !0), t++),
                                      2 == t)
                                    )
                                      return;
                                    o.display || o.disabled || i.push(o);
                                  }
                                } catch (e) {
                                  a.e(e);
                                } finally {
                                  a.f();
                                }
                                for (var r = 0, c = i; r < c.length; r++) {
                                  var s = c[r];
                                  if (t >= 2) return;
                                  (s.display = !0), t++;
                                }
                              }
                            },
                          },
                          {
                            key: "getDiscountInfo",
                            value: function () {
                              var e = this.data,
                                t = e.cabinDetail,
                                n = e.vipProductInfo,
                                i = this.getPassengersNumber(),
                                a = i.adult,
                                o = i.child,
                                r = i.baby,
                                c = [];
                              if (a + o + r !== 0) {
                                var s =
                                  "https://images3.c-ctrip.com/zt/flight/reduce-icon.png";
                                (null == t ? void 0 : t.reducedPrice) > 0 &&
                                  c.push({
                                    icon: s,
                                    name: "国际机票促销立减",
                                    valueText: "-¥".concat(
                                      t.reducedPrice * (a + o + r)
                                    ),
                                    value: t.reducedPrice * (a + o + r),
                                  }),
                                  n &&
                                    c.push({
                                      icon: s,
                                      name: n.reduceName,
                                      valueText: "-¥".concat(n.reducePrice),
                                      value: n.reducePrice,
                                    }),
                                  this.setData({ discountInfos: c });
                              } else this.setData({ discountInfos: [] });
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                n = t.isLogin,
                                i = t.isTieyou,
                                a = t.cabinDetail,
                                o = t.selectedCoupon,
                                r = t.phoneNumber,
                                c = t.email,
                                s = t.additionalProducts,
                                l = t.flightSegmentNumber,
                                d = t.penetrateProductId,
                                u = t.additionalProductsType,
                                p = t.showTexts,
                                m = t.invoiceRelateInfo,
                                h = t.expenseSwitch,
                                f = t.invoiceType,
                                N = t.invoiceTitle,
                                y = t.invoiceTax,
                                T = t.invoiceName,
                                x = t.invoiceAddress,
                                P = t.unAuthCoupon,
                                Z = t.intlCouponList,
                                b = t.maxInventory,
                                w = t.minQuantity,
                                C = t.advantageData,
                                I = t.discountInfos,
                                D = t.transition,
                                V = t.mask,
                                A = t.maskType,
                                B = t.policyRemark,
                                S = t.isCheckPolicy,
                                L = t.notifyInfoV2,
                                _ = t.couponPrice,
                                E = t.passengerList,
                                M = t.segments,
                                R =
                                  (null == E
                                    ? void 0
                                    : E.filter(function (e) {
                                        return e.selected;
                                      })) || [],
                                O =
                                  (null == E
                                    ? void 0
                                    : E.filter(function (e) {
                                        return e.display;
                                      })) || [],
                                z = R.length || 0;
                              return (0, W.BX)(X.zt, {
                                store: this.store,
                                children: [
                                  (0, W.BX)(g.View, {
                                    className: "flt-intl-book-page",
                                    children: [
                                      (0, W.tZ)(Ce, { advantages: C }),
                                      (0, W.tZ)(le, {
                                        cabin: a,
                                        segments: M,
                                        onClickBaggageAndPolicies:
                                          this.handleBaggageAndPoliciesClick.bind(
                                            this
                                          ),
                                      }),
                                      (0, W.tZ)(we, { notice: L }),
                                      (0, W.tZ)(ue, {
                                        isLogin: n,
                                        minQuantity: w,
                                        email: c,
                                        policyRemark: B,
                                        maxInventory: b,
                                        phoneNumber: r,
                                        onPhoneInput:
                                          this.phoneInput.bind(this),
                                        onEmailInput: this.mailInput.bind(this),
                                        passengers: O,
                                        togglePassenger:
                                          this.togglePassenger.bind(this),
                                        editPassenger:
                                          this.goToEditPassenger.bind(this),
                                        getPhoneNumberAction:
                                          this.getPhoneNumberAction.bind(this),
                                        openMorePassengers:
                                          this.openMorePassengers.bind(this),
                                      }),
                                      (0, W.tZ)(te, {
                                        selectedPassengersListLen: z,
                                        calculateNum:
                                          this.calculateNum.bind(this),
                                        calculatePrice:
                                          this.getPrice.bind(this),
                                      }),
                                      (0, W.tZ)(ye, {
                                        switchStatus: h,
                                        deliveryInfo: T
                                          ? "".concat(T, " ").concat(x)
                                          : "",
                                        invoiceTitle: N,
                                        invoiceTax: y,
                                        invoiceTitleType: f,
                                        invoiceRelateInfo: m,
                                        onInvoiceTaxInput:
                                          this.invoiceTaxInput.bind(this),
                                        onInvoiceTitleInput:
                                          this.invoiceTitleInput.bind(this),
                                        onToAdressSelect:
                                          this.goToEditAddress.bind(this),
                                        onSwitchInvocie:
                                          this.switchExpense.bind(this),
                                        onChangeInvoiceType:
                                          this.toggleInvoiceType.bind(this),
                                      }),
                                      (0, W.tZ)(ve, {
                                        discountInfos: I,
                                        couponPrice: _,
                                        couponList: Z,
                                        unAuthCoupon: P,
                                        selectedCoupon: o,
                                        toCouponList:
                                          this.goToCoupon.bind(this),
                                      }),
                                      (0, W.BX)(g.View, {
                                        className:
                                          "ticketing-policy flex policy-wrap",
                                        children: [
                                          (0, W.tZ)(g.Text, {
                                            className:
                                              "iconfont2 ifont2-".concat(
                                                S ? "checkboxed" : "checkbox"
                                              ),
                                            id: "AaAO",
                                            onClick: this.togglePolicy,
                                          }),
                                          (0, W.tZ)(g.View, {
                                            className: "policy-cont flex-1",
                                            id: "AaAP",
                                            onClick: function (t) {
                                              t.stopPropagation(),
                                                e.togglePolicy();
                                            },
                                            children:
                                              k.Z.convertLinkRickTextToArray(
                                                this.getPolicyContent()
                                              ).map(function (e) {
                                                return "url" == e.type
                                                  ? (0, W.tZ)(g.Navigator, {
                                                      url: e.url,
                                                      className: "navigator",
                                                      children: e.val,
                                                    })
                                                  : (0, W.tZ)(
                                                      g.Text,
                                                      {
                                                        className: "text",
                                                        children: e.val,
                                                      },
                                                      e.val
                                                    );
                                              }),
                                          }),
                                        ],
                                      }),
                                      (0, W.tZ)(g.View, {
                                        className: "flight-brand-publicity",
                                      }),
                                      (0, W.BX)(g.View, {
                                        className: "book-box",
                                        children: [
                                          s &&
                                            s.map(function (t) {
                                              return (0, W.tZ)(W.HY, {
                                                children:
                                                  t.productCode === d &&
                                                  (0, W.tZ)(g.View, {
                                                    className: "book-wbox",
                                                    id: "AaAQ",
                                                    onClick:
                                                      e.toInsuranceInstruction,
                                                    children: (0, W.tZ)(
                                                      g.View,
                                                      {
                                                        className:
                                                          "book-list product",
                                                        children: (0, W.BX)(
                                                          g.View,
                                                          {
                                                            className: "item",
                                                            children: [
                                                              (0, W.tZ)(
                                                                g.Text,
                                                                {
                                                                  className:
                                                                    "label",
                                                                  children:
                                                                    "套餐说明",
                                                                }
                                                              ),
                                                              t.selected
                                                                ? (0, W.tZ)(
                                                                    g.View,
                                                                    {
                                                                      className:
                                                                        "product-name",
                                                                      children:
                                                                        ""
                                                                          .concat(
                                                                            t.productName,
                                                                            " ￥"
                                                                          )
                                                                          .concat(
                                                                            t.price,
                                                                            " × "
                                                                          )
                                                                          .concat(
                                                                            l *
                                                                              (z ||
                                                                                1)
                                                                          )
                                                                          .concat(
                                                                            t.unit
                                                                          ),
                                                                    }
                                                                  )
                                                                : (0, W.tZ)(
                                                                    g.View,
                                                                    {
                                                                      className:
                                                                        "product-name",
                                                                      children:
                                                                        t.productName +
                                                                        "套餐 已取消",
                                                                    }
                                                                  ),
                                                              (0, W.tZ)(
                                                                g.Text,
                                                                {
                                                                  className:
                                                                    "iconfont ifont-arr",
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                              });
                                            }),
                                          s &&
                                            s[0] &&
                                            (0, W.tZ)(g.View, {
                                              className: "book-wbox",
                                              children:
                                                d &&
                                                1 === s.length &&
                                                (0, W.BX)(g.View, {
                                                  className: "book-list",
                                                  children: [
                                                    (0, W.tZ)(g.View, {
                                                      className: "tit",
                                                      children: "出行保障",
                                                    }),
                                                    (0 === u || 1 === u) &&
                                                      (0, W.BX)(g.View, {
                                                        className:
                                                          "weather-tip ".concat(
                                                            1 === u
                                                              ? i
                                                                ? "tgreen"
                                                                : "color-primary"
                                                              : "color-red"
                                                          ),
                                                        style:
                                                          "background-image: url(".concat(
                                                            p[u].bgIconUrl,
                                                            ")"
                                                          ),
                                                        children: [
                                                          (0, W.tZ)(g.Image, {
                                                            src: p[u].iconUrl,
                                                          }),
                                                          (0, W.tZ)(
                                                            v.ZtRichText,
                                                            {
                                                              nodes:
                                                                p[u].content,
                                                            }
                                                          ),
                                                          p[u].weatherDesc &&
                                                            (0, W.BX)(g.View, {
                                                              className:
                                                                "weather-box",
                                                              children: [
                                                                (0, W.BX)(
                                                                  g.View,
                                                                  {
                                                                    className:
                                                                      "top",
                                                                    children: [
                                                                      (0, W.tZ)(
                                                                        v.ZtRichText,
                                                                        {
                                                                          nodes:
                                                                            p[u]
                                                                              .weatherCityName,
                                                                        }
                                                                      ),
                                                                      (0, W.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "icon",
                                                                          style:
                                                                            "background-image: url(".concat(
                                                                              p[
                                                                                u
                                                                              ]
                                                                                .weatherIconUrl,
                                                                              ")"
                                                                            ),
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                                (0, W.tZ)(
                                                                  v.ZtRichText,
                                                                  {
                                                                    nodes:
                                                                      p[u]
                                                                        .weatherDate +
                                                                      p[u]
                                                                        .weatherDesc,
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                        ],
                                                      }),
                                                    s &&
                                                      s.map(function (t, n) {
                                                        return (0,
                                                        W.tZ)(W.HY, { children: t.productCode !== d && (0, W.BX)(g.View, { className: "insur ".concat(t.selected ? "cur" : ""), children: [(0, W.BX)(g.View, { className: "cont", children: [(0, W.BX)(g.View, { className: "name", children: [(0, W.tZ)(g.Text, { children: t.productName }), (0, W.tZ)(g.Text, { className: "price", children: "￥".concat(t.price, "×").concat(l * (z || 1), "份") }), (0, W.tZ)(g.Text, { className: "iconfont ifont-detail", "data-index": n, id: "AaAR", onClick: e.goToInsuranceTip }), t.tag && (0, W.tZ)(g.Text, { className: "tag color-primary bdcolor-primary", children: t.tag })] }), (0, W.tZ)(g.View, { className: "brief", children: t.brief })] }), (0, W.tZ)(g.View, { className: "right", "data-index": n, id: "AaAS", onClick: e.toggleAdditionalProducts, children: (0, W.tZ)(g.Text, { className: "iconfont ".concat(t.selected ? "ifont-checkboxed color-primary" : "ifont-checkbox") }) })] }) });
                                                      }),
                                                  ],
                                                }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  V &&
                                    (0, W.tZ)(g.View, {
                                      className:
                                        "pop-mask " + (D ? "active" : ""),
                                      "data-type": A,
                                      id: "AaAT",
                                      onClick: function (t) {
                                        t.stopPropagation(), e.closePopMask(t);
                                      },
                                      catchMove: !0,
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        n
                      );
                    })(f.default.Component))
                  ) || be)
              ) || be;
          Page(
            (0, i.createPageConfig)(
              _e,
              "pages/flightIntl/book/book",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
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
            25859, 3322, 36332, 95854, 59188, 35048, 70486, 97709, 6189, 22843,
            6878, 8014, 81198, 72032, 16386, 51124, 89436, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(86276);
          }
        ),
          e.O();
      },
    ]);
})();
