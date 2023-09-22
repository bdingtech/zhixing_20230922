!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/77d3751beb3e2bc1242396ba7c218030.js"),
    require("../sub-common/72f6836a38da788b04d6df340945e671.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [1528],
      {
        59507: function (e, t, i) {
          var a = i(32180),
            n = i(57042),
            r = i(24460),
            o = i(21867),
            s = i(86066),
            c = i(22276),
            l = i(90983),
            d = i(298),
            u = i(52500),
            h = i(71515),
            m = i(92954),
            f = i.n(m),
            p = i(81957),
            g = i(48792),
            v = i.n(g),
            w = i(3205),
            N = i(20592),
            x = i(79792),
            C = i(2326),
            Z = i(8271),
            y = i.n(Z),
            T = i(79910),
            b = i(4102),
            k = i(43809),
            V = i(21999),
            I = i(49120),
            D = i(32132),
            B = i(61695),
            L = i(48813),
            P = u.default.memo(function (e) {
              var t = e.departCity,
                i = e.arriveCity,
                a = e.isRoundTrip
                  ? "ifont2-wangfan_linea_12"
                  : "ifont2-dancheng_linea_12";
              return (0,
              L.tZ)(h.View, { className: "title-view flex-center", children: t && i && (0, L.BX)(L.HY, { children: [(0, L.tZ)(h.Text, { className: "from city", children: t || "" }), (0, L.tZ)(h.Text, { className: "iconfont2 ".concat(a) }), (0, L.tZ)(h.Text, { className: "to city", children: i || "" })] }) });
            });
          var X = u.default.memo(function (e) {
              var t = e.data;
              if (!t) return (0, L.tZ)(L.HY, {});
              return (0, L.BX)(h.View, {
                className: "flt-notice flex",
                id: "AaAz",
                onClick: function () {
                  !(function (e) {
                    var t = (0, I.getCurrentPage)();
                    null == t ||
                      t.showCommonDrawer({
                        hideClose: !1,
                        hideTitle: !1,
                        title: "出行提醒",
                        className: "flt-notice-detail",
                        content: function () {
                          return (0, L.tZ)(h.View, {
                            className: "notice-cont",
                            children:
                              null == e
                                ? void 0
                                : e.map(function (e, t) {
                                    return (0,
                                    L.BX)(h.View, { className: "note-item", children: [(0, L.BX)(h.Text, { className: "tit", children: ["【", e.noteTitle, "】"] }), e.noteContent] }, t);
                                  }),
                          });
                        },
                      });
                  })(t);
                },
                children: [
                  (0, L.tZ)(h.View, {
                    className: "notice-list flex-1",
                    children:
                      null == t
                        ? void 0
                        : t.map(function (e) {
                            return "【".concat(e.noteTitle, "】");
                          }),
                  }),
                  (0, L.tZ)(h.View, {
                    className: "expand-icon flex-center iconfont2 ifont2-arr",
                  }),
                ],
              });
            }),
            A = i(79301),
            S = i(95308),
            M = i(34229),
            R = i(13025),
            E = i(55916),
            q = i(39339);
          function H(e) {
            var t = e.data,
              i = e.onShowDetail;
            if (!t) return (0, L.tZ)(L.HY, {});
            var a = t.price,
              n = t.icon,
              r = t.features,
              o = t.extensionProduct,
              s = t.productType,
              c = t.productName,
              l = "+¥".concat(a);
            return (0, L.BX)(h.View, {
              className: "e-product",
              children: [
                (0, L.BX)(h.View, {
                  className: "product-head flex-align-items-center",
                  children: [
                    (0, L.BX)(h.View, {
                      className: "product-title flex-1 flex-align-items-center",
                      children: [
                        "INSURANCE" == s &&
                          (0, L.BX)(h.View, {
                            className: "ins-product",
                            children: [
                              (0, L.tZ)(h.Image, {
                                className: "ins-icon",
                                src: n,
                              }),
                              (0, L.tZ)(h.Text, {
                                className: "ins-name",
                                children: c,
                              }),
                            ],
                          }),
                        "MEMBERSHIP" == s &&
                          (0, L.tZ)(h.Image, {
                            className: "product-icon",
                            src: n,
                            lazyLoad: !0,
                            mode: "heightFix",
                          }),
                        (0, L.tZ)(h.View, {
                          className: "price-text bd-1rpx",
                          children: (0, L.tZ)(M.ZtRichText, { nodes: l || "" }),
                        }),
                      ],
                    }),
                    (0, L.BX)(h.View, {
                      className: "detail-btn flex-align-items-center",
                      id: "AaAn",
                      onClick: i,
                      children: [
                        "详情",
                        (0, L.tZ)(h.Text, { className: "ifont-arr iconfont" }),
                      ],
                    }),
                  ],
                }),
                (0, L.BX)(h.View, {
                  className: "product-cont",
                  children: [
                    (0, L.tZ)(h.ScrollView, {
                      className: "feature-list",
                      scrollX: !0,
                      scrollWithAnimation: !0,
                      children:
                        null == r
                          ? void 0
                          : r.map(function (e, t) {
                              return (0,
                              L.BX)(h.View, { className: "feature-item", children: [(0, L.tZ)(h.Image, { className: "feature-icon", src: e.icon }), (0, L.tZ)(h.View, { className: "feature-title", children: (0, L.tZ)(M.ZtRichText, { nodes: e.title || "" }) })] }, t);
                            }),
                    }),
                    o &&
                      (0, L.BX)(h.View, {
                        className: "ext-product flex-align-items-center",
                        children: [
                          (0, L.tZ)(h.Image, {
                            className: "ep-icon",
                            mode: "heightFix",
                            src: null == o ? void 0 : o.logoIcon,
                          }),
                          (null == o ? void 0 : o.icon) &&
                            (0, L.tZ)(h.Image, {
                              className: "ep-icon",
                              mode: "heightFix",
                              src: o.icon,
                            }),
                          (0, L.tZ)(h.View, {
                            className: "ep-txt",
                            children: (0, L.tZ)(M.ZtRichText, {
                              nodes: null == o ? void 0 : o.text,
                              space: "nbsp",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          }
          var F,
            _ = u.default.memo(function (e) {
              var t = e.data,
                i = e.onBook,
                a = e.onShowEProductDetail;
              if (!t) return (0, L.tZ)(L.HY, {});
              var n = t || {},
                r = n.displayName,
                o = n.displayLogo,
                s = n.showSalePrice,
                c = n.couponTag,
                l = n.simplyRule,
                u = n.advantageNotes,
                m = n.penaltyList,
                f = n.classDisplayRemark,
                p = n.productTopRemarks,
                g = n.productBottomRemarks,
                v = n.eProduct,
                w = n.refundAndChangeDetails,
                N = (v || {}).xToken,
                x = function () {
                  var e,
                    t =
                      null == m
                        ? void 0
                        : m.map(function (e) {
                            return (0,
                            d.Z)((0, d.Z)({}, e), {}, { refundAndChangeDetails: w });
                          });
                  null === (e = (0, I.getCurrentPage)()) ||
                    void 0 === e ||
                    e.navigateTo({
                      url: "/pages/flightSecondary/bap/bap",
                      data: { baggageAllowanceAndPolicies: t },
                    });
                },
                C = (function () {
                  var e = (0, S.Z)(
                    (0, A.Z)().mark(function e() {
                      var i, n, r, o, s, c;
                      return (0, A.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = { scene: 700, cardCode: N }),
                                (0, I.showLoading)(),
                                (e.next = 4),
                                (0, R.Pk)(i)
                              );
                            case 4:
                              (n = e.sent),
                                (0, I.hideLoading)(),
                                (o = (r = n || {}).resultCode),
                                (s = r.vipDetailInfoV1List),
                                (c = void 0 === s ? [] : s),
                                1 == o && (null == a || a(c[0], t));
                            case 8:
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
                Z = (function () {
                  var e = (0, S.Z)(
                    (0, A.Z)().mark(function e() {
                      var t, i, a;
                      return (0, A.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = { data: { productId: N, source: 0 } }),
                                (0, I.showLoading)(),
                                (e.next = 4),
                                (0, E.v6)(t)
                              );
                            case 4:
                              (i = e.sent),
                                (0, I.hideLoading)(),
                                console.debug(i),
                                1 == i.resultCode &&
                                  ((a = i.data.newModel),
                                  (0, q.u)({ data: a }));
                            case 8:
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
                y = (function () {
                  var e = (0, S.Z)(
                    (0, A.Z)().mark(function e() {
                      var t;
                      return (0, A.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ("MEMBERSHIP" != (t = v.productType)) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return", C());
                            case 3:
                              if ("INSURANCE" != t) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return", Z());
                            case 5:
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
                T = !!r,
                b = !T && o,
                k = p || [];
              return (
                0 == k.length && l && k.push(l),
                (0, L.BX)(h.View, {
                  className: "flt-price-card flex flex-column",
                  children: [
                    (0, L.BX)(h.View, {
                      className: "product-wrap",
                      children: [
                        (0, L.BX)(h.View, {
                          className: "top-tag",
                          children: [
                            T &&
                              (0, L.tZ)(h.Text, {
                                className: "tag text",
                                children: r,
                              }),
                            b &&
                              (0, L.tZ)(h.Image, {
                                className: "tag img",
                                src: o,
                              }),
                          ],
                        }),
                        (0, L.BX)(h.View, {
                          className: "cont flex",
                          children: [
                            (0, L.BX)(h.View, {
                              className: "lbox flex-1 pt-46",
                              children: [
                                (0, L.BX)(h.View, {
                                  className: "price-info flex row",
                                  children: [
                                    (0, L.tZ)(h.View, {
                                      className: "price",
                                      children: s,
                                    }),
                                    !!c &&
                                      (0, L.tZ)(h.View, {
                                        className:
                                          "price-tags flex flex-align-items-center",
                                        children: (0, L.tZ)(h.View, {
                                          className: "tag",
                                          children: c,
                                        }),
                                      }),
                                  ],
                                }),
                                k.length > 0 &&
                                  (0, L.tZ)(h.View, {
                                    className: "top-remarks",
                                    children:
                                      null == k
                                        ? void 0
                                        : k.map(function (e) {
                                            return (0,
                                            L.BX)(h.View, { className: "flex row remark-item", id: "productTopRemarkClick", onClick: x, children: [(0, L.tZ)(M.ZtRichText, { nodes: e }), (0, L.tZ)(h.Text, { className: "ifont2-arr iconfont2 flex-center" })] }, e);
                                          }),
                                  }),
                              ],
                            }),
                            (0, L.BX)(h.View, {
                              className: "rbox flex-center flex-column",
                              children: [
                                (0, L.tZ)(h.Button, {
                                  className: "book-btn flex-center",
                                  id: "xbookClick",
                                  onClick: function () {
                                    null == i || i(t);
                                  },
                                  children: "订",
                                }),
                                !!f &&
                                  (0, L.tZ)(h.Text, {
                                    className: "remain-count color-red",
                                    children: f,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (null == u ? void 0 : u.length) > 0 &&
                          (0, L.BX)(h.View, {
                            className:
                              "advantage-list flex flex-align-items-center",
                            children: [
                              (0, L.tZ)(h.Image, {
                                className: "advantage-icon",
                                src: u[0].url,
                              }),
                              u.map(function (e, t) {
                                return (0,
                                L.tZ)(h.View, { className: "advantage flex-center", children: e.note }, t);
                              }),
                            ],
                          }),
                        null == g
                          ? void 0
                          : g.map(function (e) {
                              return (0,
                              L.BX)(h.View, { className: "btm-remark flex-align-items-center", children: [e.icon && (0, L.tZ)(h.Image, { className: "remark-icon", src: e.icon }), e.text && (0, L.tZ)(M.ZtRichText, { className: "remark-txt", nodes: e.text }), e.desc && (0, L.tZ)(M.ZtRichText, { className: "remark-desc", nodes: e.desc })] }, e.text);
                            }),
                      ],
                    }),
                    v && (0, L.tZ)(H, { data: v, onShowDetail: y }),
                  ],
                })
              );
            }),
            O = i(90129);
          !(function (e) {
            (e[(e.DEPART = 0)] = "DEPART"), (e[(e.ARRIVE = 1)] = "ARRIVE");
          })(F || (F = {}));
          var Y,
            j = function (e) {
              var t,
                i,
                a,
                n = e.expanded,
                r = e.data;
              return (0, L.BX)(L.HY, {
                children: [
                  (0, L.BX)(h.View, {
                    className: "info-row flex-align-items-center "
                      .concat(n ? "expanded" : "", " ")
                      .concat(r.type === F.DEPART ? "depart" : "arrive"),
                    children: [
                      (0, L.BX)(h.View, {
                        className: "flight-time",
                        children: [
                          !!r.diffDate &&
                            (0, L.tZ)(h.Text, {
                              className: "diff-day",
                              children: r.diffDate,
                            }),
                          y()(r.date).format("HH:mm"),
                        ],
                      }),
                      (0, L.tZ)(h.View, { className: "line" }),
                      (0, L.BX)(h.View, {
                        className:
                          "flex-1 airport-info flex-align-items-center",
                        children: [
                          null !== (t = r.cityCode) && void 0 !== t ? t : "",
                          (0, L.tZ)(h.View, {
                            className: "ellipsis",
                            children: r.airportFullName,
                          }),
                          null !== (i = r.buildingShortName) && void 0 !== i
                            ? i
                            : "",
                        ],
                      }),
                    ],
                  }),
                  (0, L.BX)(h.View, {
                    className: "flight-detail ml-148",
                    children: [
                      (null === (a = r.airlineInfo) || void 0 === a
                        ? void 0
                        : a.length) > 0 &&
                        (0, L.tZ)(h.View, {
                          className: "flex-align-items-center",
                          children: r.airlineInfo.map(function (e) {
                            return (0,
                            L.BX)(h.View, { className: "detail-item flex-align-items-center", children: [!!e.icon && (0, L.tZ)(h.Image, { className: "info-icon", src: e.icon }), (0, L.tZ)(h.Text, { className: "info-text", children: e.text })] }, e.text);
                          }),
                        }),
                      r.carrierAirlineInfo &&
                        (0, L.BX)(h.View, {
                          className: "carrier-airline flex-align-items-center",
                          children: [
                            (0, L.tZ)(h.Image, {
                              className: "carrier-icon",
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/10/icon_gongxiang@3x.png",
                            }),
                            (0, L.tZ)(h.Text, {
                              children: r.carrierAirlineInfo,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            },
            U = u.default.memo(function (e) {
              var t = e.data,
                i = (0, u.useState)(!1),
                a = (0, O.Z)(i, 2),
                n = a[0],
                r = a[1];
              if (
                ((0, u.useEffect)(
                  function () {
                    if (t) {
                      var e = !t.some(function (e) {
                        var t;
                        return (
                          (null === (t = e.flightList) || void 0 === t
                            ? void 0
                            : t.length) > 1
                        );
                      });
                      r(e);
                    }
                  },
                  [t]
                ),
                !t || 0 == t.length)
              )
                return (0, L.tZ)(L.HY, {});
              var o = ["去程", "返程"],
                s = t.length > 1,
                c = !t.some(function (e) {
                  var t;
                  return (
                    (null === (t = e.flightList) || void 0 === t
                      ? void 0
                      : t.length) > 1
                  );
                }),
                l = function (e) {
                  var t = Math.floor(e / 60),
                    i = e % 60;
                  return ""
                    .concat(t > 0 ? t + "h" : "")
                    .concat(i > 0 ? i + "m" : "");
                },
                m = function (e) {
                  var t,
                    i,
                    a = [];
                  return (
                    e.basicInfo &&
                      a.push({
                        icon: e.basicInfo.airlineLogoUrl,
                        text:
                          e.basicInfo.airlineShortName + e.basicInfo.flightNo,
                      }),
                    null !== (t = e.craftInfo) &&
                      void 0 !== t &&
                      t.craftName &&
                      a.push({ text: e.craftInfo.craftName }),
                    null !== (i = e.dateInfo) &&
                      void 0 !== i &&
                      i.journeyTime &&
                      a.push({ text: "飞".concat(l(e.dateInfo.journeyTime)) }),
                    a
                  );
                };
              return (0, L.tZ)(h.View, {
                className: "flt-intl-seg-info",
                children: t
                  .sort(function (e, t) {
                    return e.segmentNo - t.segmentNo;
                  })
                  .map(function (e) {
                    var t = e.flightList,
                      i = e.segmentNo,
                      a = e.travelTime,
                      f = s ? o[i - 1] : "单程",
                      p = t.length > 1,
                      g = !c && 1 == i,
                      v = p
                        ? t.find(function (e) {
                            return 1 == e.flightIndex;
                          })
                        : t[0],
                      w = t.length - 1,
                      N = v.dateInfo.departDate,
                      x = a.duration,
                      C = ""
                        .concat(y()(N).format("MM月DD日"), " ")
                        .concat(b.Z.getWeekDayDesc(N), " 总时长")
                        .concat(l(x));
                    return (0, L.BX)(
                      h.View,
                      {
                        className: "seg-item",
                        children: [
                          (0, L.BX)(h.View, {
                            className: "seg-hd flex-align-items-center",
                            children: [
                              (0, L.tZ)(h.Text, {
                                className: "seg-tag",
                                children: f,
                              }),
                              (0, L.tZ)(h.Text, {
                                className: "flex-1 seg-time",
                                children: C,
                              }),
                              g &&
                                (0, L.BX)(h.View, {
                                  className: "expand",
                                  onClick: function () {
                                    return r(!n);
                                  },
                                  children: [
                                    n ? "收起详情" : "航班详情",
                                    (0, L.tZ)(h.Text, {
                                      className: "iconfont2 ifont2-".concat(
                                        n
                                          ? "shouqi_linea_12"
                                          : "zhankai_linea_12"
                                      ),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, L.tZ)(h.View, {
                            className: "flt-info",
                            children: t.map(function (e, i) {
                              var a = e.flightIndex,
                                r = e.dateInfo,
                                o = r.departDate,
                                s = r.arriveDate,
                                c = r.transferTime,
                                f = e.arriveAirportInfo,
                                g = e.departAirportInfo,
                                N = e.intlStopCityItemList,
                                x = e.basicInfo,
                                C = y()(o).isSame(
                                  y()(
                                    null == v ? void 0 : v.dateInfo.departDate
                                  ),
                                  "day"
                                ),
                                Z = y()(s).isSame(
                                  y()(
                                    null == v ? void 0 : v.dateInfo.departDate
                                  ),
                                  "day"
                                ),
                                T = p && 0 != i,
                                b = (0, d.Z)(
                                  (0, d.Z)({}, g),
                                  {},
                                  {
                                    date: o,
                                    type: F.DEPART,
                                    diffDate: C ? "" : y()(o).format("MM-DD"),
                                  }
                                ),
                                k = (0, d.Z)(
                                  (0, d.Z)({}, f),
                                  {},
                                  {
                                    date: s,
                                    type: F.ARRIVE,
                                    diffDate: Z ? "" : y()(s).format("MM-DD"),
                                  }
                                ),
                                V = [];
                              if (
                                (i != w ||
                                  (!n && p) ||
                                  ((k.airlineInfo = m(e)),
                                  (k.carrierAirlineInfo = x.carrierFlightNo
                                    ? "实际承运: "
                                        .concat(x.carrierAirlineShortName)
                                        .concat(x.carrierFlightNo)
                                    : "")),
                                n || !p
                                  ? (V = [b, k])
                                  : 0 == i
                                  ? (V = [b])
                                  : i == w && (V = [k]),
                                T)
                              ) {
                                var I,
                                  D = t[i - 1],
                                  B = D.extNoteList,
                                  P = D.basicInfo,
                                  X = m(D),
                                  A = "中转"
                                    .concat(g.cityName, " ")
                                    .concat(l(c)),
                                  S = P.carrierFlightNo
                                    ? "实际承运: "
                                        .concat(P.carrierAirlineShortName)
                                        .concat(P.carrierFlightNo)
                                    : "";
                                return (0, L.BX)(L.HY, {
                                  children: [
                                    (0, L.BX)(h.View, {
                                      className: "transfer-node ".concat(
                                        n ? "expanded" : ""
                                      ),
                                      children: [
                                        !n &&
                                          (0, L.BX)(h.View, {
                                            className: "transfer-time",
                                            children: [
                                              (0, L.tZ)(h.View, {
                                                className: "time",
                                                children: y()(
                                                  D.dateInfo.arriveDate
                                                ).format("HH:mm"),
                                              }),
                                              (0, L.BX)(h.View, {
                                                className: "time",
                                                children: [
                                                  !C &&
                                                    (0, L.tZ)(h.Text, {
                                                      className: "diff-day",
                                                      children:
                                                        y()(o).format("MM-DD"),
                                                    }),
                                                  y()(o).format("HH:mm"),
                                                ],
                                              }),
                                            ],
                                          }),
                                        (0, L.tZ)(h.View, {
                                          className: "node-line",
                                        }),
                                        (0, L.BX)(h.View, {
                                          className: "flex-1",
                                          children: [
                                            n &&
                                              (0, L.BX)(h.View, {
                                                className: "flight-detail",
                                                children: [
                                                  (0, L.tZ)(h.View, {
                                                    className:
                                                      "flex-align-items-center",
                                                    children: X.map(function (
                                                      e
                                                    ) {
                                                      return (0, L.BX)(
                                                        h.View,
                                                        {
                                                          className:
                                                            "detail-item flex-align-items-center",
                                                          children: [
                                                            !!e.icon &&
                                                              (0, L.tZ)(
                                                                h.Image,
                                                                {
                                                                  className:
                                                                    "info-icon",
                                                                  src: e.icon,
                                                                }
                                                              ),
                                                            (0, L.tZ)(h.Text, {
                                                              className:
                                                                "info-text",
                                                              children: e.text,
                                                            }),
                                                          ],
                                                        },
                                                        e.text
                                                      );
                                                    }),
                                                  }),
                                                  S &&
                                                    (0, L.BX)(h.View, {
                                                      className:
                                                        "carrier-airline",
                                                      children: [
                                                        (0, L.tZ)(h.Image, {
                                                          className:
                                                            "carrier-icon",
                                                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/10/icon_gongxiang@3x.png",
                                                        }),
                                                        (0, L.tZ)(h.Text, {
                                                          children: S,
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                            (0, L.BX)(h.View, {
                                              className:
                                                "node-brief flex-align-items-center",
                                              children: [
                                                A,
                                                null == B
                                                  ? void 0
                                                  : B.map(function (e) {
                                                      return (0,
                                                      L.tZ)(h.Text, { className: "node-note", children: e.content }, e.index);
                                                    }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    !n &&
                                      N.map(function (e) {
                                        return (0,
                                        L.BX)(h.View, { className: "stop-node flex-align-items-center pl-100 mb-24", children: [(0, L.tZ)(h.View, { className: "line" }), (0, L.BX)(h.View, { className: "content", children: ["经停", e.cityName, " 停留", l(e.stopTime)] })] }, e.airport);
                                      }),
                                    (null === (I = V) || void 0 === I
                                      ? void 0
                                      : I.length) > 0 &&
                                      (0, L.tZ)(h.View, {
                                        className: "flight-item",
                                        children: V.map(function (e, t) {
                                          return (0, L.BX)(
                                            u.default.Fragment,
                                            {
                                              children: [
                                                1 == t &&
                                                  (null == N
                                                    ? void 0
                                                    : N.map(function (e) {
                                                        return (0,
                                                        L.BX)(h.View, { className: "stop-node flex-align-items-center pl-100 mv-24", children: [(0, L.tZ)(h.View, { className: "line" }), (0, L.BX)(h.View, { className: "content", children: ["经停", e.cityName, " 停留", l(e.stopTime)] })] }, e.airport);
                                                      })),
                                                (0, L.tZ)(j, {
                                                  expanded: n,
                                                  data: e,
                                                }),
                                              ],
                                            },
                                            t
                                          );
                                        }),
                                      }),
                                  ],
                                });
                              }
                              return (0, L.tZ)(
                                h.View,
                                {
                                  className: "flight-item",
                                  children: V.map(function (e, t) {
                                    return (0, L.BX)(
                                      u.default.Fragment,
                                      {
                                        children: [
                                          (0, L.tZ)(j, {
                                            expanded: n || !p,
                                            data: e,
                                          }),
                                          1 == t &&
                                            (null == N
                                              ? void 0
                                              : N.map(function (e) {
                                                  return (0,
                                                  L.BX)(h.View, { className: "stop-node flex-align-items-center pl-100 mv-24", children: [(0, L.tZ)(h.View, { className: "line" }), (0, L.BX)(h.View, { className: "content", children: ["经停", e.cityName, " 停留", l(e.stopTime)] })] }, e.airport);
                                                })),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                                },
                                a
                              );
                            }),
                          }),
                        ],
                      },
                      i
                    );
                  }),
              });
            }),
            z = i(71251),
            G = x.default.isTieyou,
            Q = "YYYY-MM-DD",
            W = {
              pageId: G ? "10650024367" : "10650024366",
              data: {
                isTieyou: G,
                roundTrip: 0,
                showSkeleton: !0,
                mask: !1,
                maskType: "",
                bannerList: [],
                segmentInfoList: [],
                transition: !1,
                showPriceChange: !1,
                showSoldOut: !1,
                showCabinQuantityChange: !1,
                refundIndex: 0,
                mbrDrawerVisible: !1,
                mbrDrawerContent: null,
                selectedProduct: null,
              },
              _productId: "",
              _eProductId: "",
              onLoad: function (e) {
                console.log("bookx: ", e);
                var t,
                  i = e.data,
                  a = void 0 === i ? {} : i,
                  n = a.roundTrip,
                  r = void 0 === n ? 0 : n,
                  o = a.ext,
                  s = a.token,
                  c = void 0 === s ? {} : s,
                  l = a.passengerList,
                  u = a.seatGradeIndex,
                  h = a.queryInfo,
                  m = h.departDate,
                  f = h.departCityCode,
                  p = h.arriveCityCode,
                  g = h.departCity,
                  v = h.arriveCity,
                  w = h.returnDate,
                  x = void 0 === w ? "" : w,
                  C = N.wq.flightOverview,
                  Z = N.wq.flightOverviewReturn,
                  y = void 0 === Z ? {} : Z;
                t =
                  0 === r
                    ? [
                        {
                          segmentNo: 1,
                          arriveCityCode: p,
                          departCityCode: f,
                          departDate: m,
                        },
                      ]
                    : [
                        {
                          segmentNo: 1,
                          departCityCode: p,
                          arriveCityCode: f,
                          departDate: m,
                        },
                        {
                          segmentNo: 2,
                          departCityCode: f,
                          arriveCityCode: p,
                          departDate: x,
                        },
                      ];
                var b = [{ passengerType: 1, passengerCount: l[0] }];
                0 !== l[1] &&
                  b.push({ passengerType: 2, passengerCount: l[1] }),
                  (this.query = (0, d.Z)(
                    {
                      segmentList: t,
                      seatGradeIndex: u,
                      passengerList: b,
                      ext: o,
                    },
                    c
                  )),
                  console.log(this.query),
                  this.setData({
                    roundTrip: r,
                    departDate: m,
                    departCity: g,
                    departCityCode: f,
                    arriveCity: v,
                    segmentInfoList: this.getSegmentInfoList(),
                    arriveCityCode: p,
                    flight: this.handleIntlFlight(C),
                    flight2: T.Z.isEmptyObject(y)
                      ? {}
                      : this.handleIntlFlight(y),
                  }),
                  this.getFlightDetail(),
                  this.getBannerList();
              },
              onShow: function () {
                var e = this.data,
                  t = e.roundTrip,
                  i = e.departCity,
                  a = e.arriveCity;
                T.Z.setTitle(
                  0 === t
                    ? "".concat(i, " - ").concat(a)
                    : "".concat(a, " - ").concat(i, " (往返)")
                );
              },
              renderTitleView: function () {
                var e = this.data,
                  t = e.departCity,
                  i = e.arriveCity,
                  a = 0 !== e.roundTrip;
                return (0, L.tZ)(P, {
                  isRoundTrip: a,
                  departCity: t,
                  arriveCity: i,
                });
              },
              getBannerList: function () {
                var e = this;
                (0, D.Al)({ source: "flight", page: "detail" }).then(function (
                  t
                ) {
                  if (1 == t.resultCode) {
                    var i,
                      a,
                      n =
                        (null == t ||
                        null === (i = t.data) ||
                        void 0 === i ||
                        null === (a = i.bannerList) ||
                        void 0 === a
                          ? void 0
                          : a.map(function (e) {
                              var t;
                              return (0,
                              d.Z)((0, d.Z)({}, e), {}, { backgroundImage: e.backgroundUrl, content: e.text, showClose: "arrCoupon" === e.type, rightContent: "arrCoupon" !== e.type || (null !== (t = e.arrCityCouponInfo) && void 0 !== t && t.couponToken) ? "" : "hidden" });
                            })) || [];
                    e.setData({ bannerList: n });
                  }
                });
              },
              getSegmentInfoList: function () {
                var e = N.wq.flightOverview,
                  t = N.wq.flightOverviewReturn,
                  i = void 0 === t ? {} : t,
                  a = [];
                return (
                  T.Z.isNotEmptyObj(e) &&
                    a.push({
                      segmentNo: 1,
                      flightList: e.flightList,
                      travelTime: e.travelTime,
                    }),
                  T.Z.isNotEmptyObj(i) &&
                    a.push({
                      segmentNo: 2,
                      flightList: i.flightList,
                      travelTime: i.travelTime,
                    }),
                  a
                );
              },
              handleIntlFlight: function (e) {
                var t = e.flightList,
                  i = e.travelTime,
                  a = e.changeCityList,
                  n = void 0 === a ? [] : a,
                  r = y()(t[0].dateInfo.departDate),
                  o = {};
                (o.departDateInfo = ""
                  .concat(r.format("M月D日"), " ")
                  .concat(b.Z.getWeekDayDesc(r))),
                  (o.costTime = B.Z.changeTravelTime(i.duration)),
                  (o.flightList = []);
                var s,
                  c = (0, l.Z)(t);
                try {
                  for (c.s(); !(s = c.n()).done; ) {
                    var d = s.value,
                      u = d.departAirportInfo,
                      h = d.arriveAirportInfo,
                      m = d.dateInfo,
                      f = d.basicInfo,
                      p = d.craftInfo,
                      g = d.intlStopCityItemList,
                      v = y()(m.departDate),
                      w = y()(m.arriveDate),
                      N = {};
                    (N.departDate = v.format("MM-DD")),
                      (N.departTime = v.format("HH:mm")),
                      (N.arriveTime = w.format("HH:mm")),
                      (N.departAirportTerminal = ""
                        .concat(u.airportShortName)
                        .concat(u.buildingShortName)),
                      (N.arriveAirportTerminal = ""
                        .concat(h.airportShortName)
                        .concat(h.buildingShortName)),
                      (N.flightInfo = ""
                        .concat(f.airlineShortName)
                        .concat(f.flightNo)),
                      (N.carrierInfo = f.isShared
                        ? ""
                            .concat(f.carrierAirlineShortName)
                            .concat(f.carrierFlightNo)
                        : ""),
                      (N.craftInfo = p.craftName),
                      (N.stopCities = g.map(function (e) {
                        return {
                          cityName: e.cityName,
                          stopTimeStr: B.Z.changeTravelTime(e.stopTime),
                        };
                      })),
                      n.length > 0 &&
                        d.flightIndex > 1 &&
                        ((N.transferCity = n[d.flightIndex - 2].cityName),
                        (N.transferTime = B.Z.changeTravelTime(
                          m.transferTime
                        ))),
                      (N.departDayDiff = C.Z.getDayDiff(
                        r.format(Q),
                        v.format(Q)
                      )),
                      (N.arriveDayDiff = C.Z.getDayDiff(
                        r.format(Q),
                        w.format(Q)
                      )),
                      o.flightList.push(N);
                  }
                } catch (e) {
                  c.e(e);
                } finally {
                  c.f();
                }
                return o;
              },
              getFlightDetail: function () {
                var e = this,
                  t = this.data.roundTrip,
                  i = this.query,
                  a = i.segmentList,
                  n = i.searchViToken,
                  r = i.pt,
                  o = i.ext,
                  s = {
                    data: {
                      version: 7,
                      tripType: 0 === t ? 0 : 1,
                      seatGrade: i.seatGradeIndex,
                      segmentList: a,
                      searchViToken: n,
                      pt: r,
                      ext: o,
                      cacheUsage: 0,
                      passengerList: i.passengerList,
                    },
                  };
                (this.isLoading = !0),
                  this.IntlFlightDetailModelPromise(s).then(
                    function (t) {
                      console.log(t);
                      var i = t.resultCode,
                        a = t.data;
                      if (1 === i) {
                        var n = (void 0 === a ? {} : a).productDetail,
                          r = n.flightNoteList,
                          o = void 0 === r ? [] : r,
                          s = n.policyList,
                          l = void 0 === s ? [] : s,
                          d = n.segmentInfoList,
                          u = n.detailExtList,
                          h = (0, c.Z)(o);
                        u.forEach(function (e) {
                          var t,
                            i = e.segmentNo,
                            a = e.flightIndex,
                            n = e.extNoteList,
                            r = d.find(function (e) {
                              return e.segmentNo == i;
                            }),
                            o =
                              null == r ||
                              null === (t = r.flightList) ||
                              void 0 === t
                                ? void 0
                                : t.find(function (e) {
                                    return e.flightIndex == a;
                                  });
                          o && (o.extNoteList = n);
                        }),
                          e.setData({
                            flightNoteList: h,
                            segmentInfoList: d,
                            cabinList: e.handleIntlCabinList(l),
                          });
                      }
                    },
                    function (t) {
                      (0, I.showModal)({
                        content: t,
                        success: function () {
                          e.backAndRefreshList();
                        },
                      });
                    }
                  );
              },
              IntlFlightDetailModelPromise: function (e) {
                var t = this;
                return new Promise(function (i, a) {
                  (0, D.Od)(e)
                    .then(function (e) {
                      console.log("舱位列表\n", e);
                      var t = e.resultCode,
                        n = e.resultMessage;
                      1 === t ? i(e) : a(n);
                    })
                    .finally(function () {
                      t.isLoading = !1;
                    });
                });
              },
              handleIntlCabinList: function (e) {
                return (
                  this.setData({ cabinsHidden: !1 }),
                  e.map(function (e) {
                    return (0,
                    d.Z)((0, d.Z)({}, e), {}, { additionalProductInfo: e.additionalProductInfo && e.additionalProductInfo.productCode ? (0, d.Z)((0, d.Z)({}, e.additionalProductInfo), {}, { productDesc: e.additionalProductInfo.productDesc.replace(/font/g, "span") }) : {}, ordinaryBookingButton: e.ordinaryBookingButton && e.ordinaryBookingButton.text ? (0, d.Z)((0, d.Z)({}, e.ordinaryBookingButton), {}, { text: e.ordinaryBookingButton.text.replace(/font/g, "span") }) : {} });
                  })
                );
              },
              showAllCabins: function () {
                this.setData({ cabinsHidden: !1 });
              },
              handleClick: function (e) {
                var t = this,
                  i = this.data.roundTrip,
                  a = e.vendorCode,
                  n = e.additionalProductInfo,
                  r = e.ext,
                  o = e.routeSearchToken,
                  s = e.eProduct,
                  c = this.query,
                  l = c.segmentList,
                  d = c.searchCriteriaToken,
                  u = c.searchViToken,
                  h = {
                    data: {
                      version: 11,
                      transactionID: c.transactionID,
                      tripType: 0 === i ? 0 : 1,
                      seatGrade: c.seatGradeIndex,
                      segmentList: l,
                      passengerList: c.passengerList,
                      searchCriteriaToken: d,
                      searchViToken: u,
                      routeSearchToken: o,
                      ext: r,
                      vendorCode: a,
                    },
                  };
                (this._productId = ""), (this._eProductId = "");
                var m = [];
                null != n &&
                  n.productCode &&
                  (m.push({ productId: n.productCode }),
                  (this._productId = n.productCode)),
                  null != s &&
                    s.oToken &&
                    (m.push({ productId: s.oToken }),
                    (this._eProductId = s.oToken)),
                  (h.data.appendProducts = m.length > 0 ? m : void 0),
                  (0, I.showLoading)("获取舱位详情"),
                  (0, D.e0)(h)
                    .then(
                      function (e) {
                        var i = e.resultCode,
                          a = e.resultMessage,
                          n = e.data;
                        if ((console.log(n), 1 === i))
                          (N.wq.fillPageDetail = n), t.toBookPage();
                        else if (22 === i) {
                          N.wq.fillPageDetail = n;
                          var r = n.priceChangeTipInfo;
                          r && r.changeType > 0
                            ? (t.setData({ priceChangeTipInfo: r }),
                              t.showPriceChangeAction())
                            : t.toBookPage();
                        } else {
                          if (99 !== i) return void t.showSoldOutPopupAction();
                          (N.wq.fillPageDetail = n),
                            t.showQuantityChangePopupAction(a);
                        }
                      },
                      function (e) {
                        (0, I.showModal)({
                          content: e || "网络错误，请稍候再试",
                          success: function () {
                            (N.wq.intlListRefresh = !0),
                              f().navigateBack({ delta: 1 });
                          },
                        });
                      }
                    )
                    .finally(function () {
                      (0, I.hideLoading)();
                    });
              },
              toBookPage: function (e) {
                var t = this,
                  i = this.data,
                  a = i.roundTrip,
                  n = i.departCity,
                  r = i.arriveCity,
                  o = i.departDate,
                  s = i.departCityCode,
                  c = i.arriveCityCode,
                  l = this.query,
                  d = l.routeSearchToken,
                  u = l.searchCriteriaToken,
                  h = l.searchViToken,
                  m = l.transactionID;
                this.navigateTo({
                  url: "/pages/flightIntl/book/book?roundTrip=".concat(a),
                  data: {
                    queryInfo: {
                      departDate: o,
                      departCity: n,
                      departCityCode: s,
                      arriveCityCode: c,
                      arriveCity: r,
                    },
                    token: {
                      transactionID: m,
                      searchCriteriaToken: u,
                      searchViToken: h,
                      routeSearchToken: d,
                    },
                    appendProducts: {
                      productId: this._productId,
                      eProductId: this._eProductId,
                    },
                  },
                }),
                  e &&
                    setTimeout(function () {
                      t.closePopMask(e);
                    }, 1e3);
              },
              handleShowEProductDetail: function (e, t) {
                this.setData({
                  selectedProduct: t,
                  mbrDrawerContent: e,
                  mbrDrawerVisible: !0,
                });
              },
              handleCloseEProductDetail: function () {
                this.setData({
                  selectedProduct: null,
                  mbrDrawerContent: null,
                  mbrDrawerVisible: !1,
                });
              },
              closePopMask: function (e) {
                var t = e.currentTarget.dataset.type;
                "priceChange" === t
                  ? this.setData({
                      mask: !1,
                      maskType: "",
                      showPriceChange: !1,
                      transition: !1,
                    })
                  : "soldOut" === t
                  ? this.setData({
                      mask: !1,
                      maskType: "",
                      showSoldOut: !1,
                      transition: !1,
                    })
                  : "quantityChange" === t
                  ? this.setData({
                      mask: !1,
                      maskType: "",
                      showCabinQuantityChange: !1,
                      transition: !1,
                    })
                  : this.toggleFanxianRule();
              },
              showPriceChangeAction: function () {
                var e = this;
                this.setData({
                  mask: !0,
                  maskType: "priceChange",
                  showPriceChange: !0,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !0 });
                  });
              },
              showSoldOutPopupAction: function () {
                var e = this;
                this.setData({
                  mask: !0,
                  maskType: "soldOut",
                  showSoldOut: !0,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !0 });
                  });
              },
              showQuantityChangePopupAction: function (e) {
                var t = this;
                this.setData({
                  mask: !0,
                  maskType: "quantityChange",
                  showCabinQuantityChange: !0,
                  popMsg: e,
                }),
                  setTimeout(function () {
                    t.setData({ transition: !0 });
                  });
              },
              backAndRefreshList: function () {
                var e = this.data.roundTrip;
                (N.wq.cacheUsage = 2),
                  (N.wq.intlListRefresh = !0),
                  f().navigateBack({ delta: 0 === e ? 1 : 2 });
              },
              handleMemberShipConfirm: function () {
                var e = (this.data || {}).selectedProduct;
                e &&
                  (this.handleClick(e),
                  this.setData({
                    mbrDrawerContent: null,
                    mbrDrawerVisible: !1,
                  }));
              },
              toGoldenServiceDetail: function () {
                var e = this.data.isTieyou,
                  t =
                    "https://market.suanya.com/activity/flight/static/flt-fqbz-".concat(
                      e ? "ty" : "zx",
                      ".html"
                    );
                w.Z.twebview({ data: { url: t } });
              },
            },
            J =
              (0, p.h)(!1, { usePageWrapper: !0 })(
                (Y =
                  v()(W)(
                    (Y = (function (e) {
                      (0, o.Z)(i, e);
                      var t = (0, s.Z)(i);
                      function i() {
                        return (0, n.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, r.Z)(i, [
                          {
                            key: "receiveBannerCoupon",
                            value: function (e) {
                              var t = this;
                              if (e) {
                                var i = { couponToken: e };
                                (0, D.vT)(i)
                                  .then(function (e) {
                                    1 == e.resultCode
                                      ? ((0, I.showToast)("领取成功"),
                                        t.getBannerList())
                                      : (0, I.showToast)(e.resultMessage);
                                  })
                                  .catch(function (e) {
                                    return console.error(e);
                                  });
                              }
                            },
                          },
                          {
                            key: "handleBannerClick",
                            value: function (e) {
                              var t;
                              if (
                                0 ===
                                (null == e ||
                                null === (t = e.bigCouponInfo) ||
                                void 0 === t
                                  ? void 0
                                  : t.status)
                              )
                                return (0, I.showToast)("该功能小程序暂不支持");
                              if ("arrCoupon" != e.type)
                                null != e &&
                                  e.jumpUrl &&
                                  (e.jumpUrl.startsWith("http")
                                    ? w.Z.twebview({ data: { url: e.jumpUrl } })
                                    : this.navigateTo({ url: e.jumpUrl }));
                              else {
                                var i = (e || {}).arrCityCouponInfo;
                                i && this.receiveBannerCoupon(i.couponToken);
                              }
                            },
                          },
                          {
                            key: "handleBannerClose",
                            value: function () {
                              (0, D.pq)(), this.setData({ bannerList: [] });
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.cabinList,
                                a = t.flightNoteList,
                                n = t.cabinsHidden,
                                r = t.transition,
                                o = t.mask,
                                s = t.maskType,
                                c = t.showSoldOut,
                                l = t.showPriceChange,
                                d = t.priceChangeTipInfo,
                                u = t.bannerList,
                                m = t.showCabinQuantityChange,
                                f = t.segmentInfoList,
                                p = t.popMsg,
                                g = t.mbrDrawerVisible,
                                v = t.mbrDrawerContent;
                              return (0, L.BX)(L.HY, {
                                children: [
                                  (0, L.tZ)(U, { data: f }),
                                  (0, L.tZ)(z.s, {
                                    banners: u,
                                    onBannerClick:
                                      this.handleBannerClick.bind(this),
                                    className: "flt-intl-boox-banner",
                                  }),
                                  (null == a ? void 0 : a.length) > 0 &&
                                    (0, L.tZ)(X, { data: a }),
                                  (0, L.BX)(h.View, {
                                    className: "cabin-list",
                                    children: [
                                      (!i || 0 === i.length) &&
                                        (0, L.tZ)(L.HY, {
                                          children: [1, 2, 3, 4].map(
                                            function () {
                                              return (0, L.tZ)(L.HY, {
                                                children: (0, L.BX)(h.View, {
                                                  className: "skeleton-item",
                                                  id: "AaAq",
                                                  onClick: function (e) {
                                                    e.stopPropagation();
                                                  },
                                                  catchMove: !0,
                                                  children: [
                                                    (0, L.BX)(h.View, {
                                                      className: "bd",
                                                      children: [
                                                        (0, L.BX)(h.View, {
                                                          className: "left",
                                                          children: [
                                                            (0, L.tZ)(h.View, {
                                                              className: "tit",
                                                            }),
                                                            (0, L.tZ)(h.View, {
                                                              className: "sub",
                                                            }),
                                                          ],
                                                        }),
                                                        (0, L.tZ)(h.View, {
                                                          className: "desc",
                                                        }),
                                                        (0, L.tZ)(h.View, {
                                                          className: "btn",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, L.BX)(h.View, {
                                                      className: "hd",
                                                      children: [
                                                        (0, L.tZ)(h.View, {
                                                          className: "txt",
                                                        }),
                                                        (0, L.tZ)(h.View, {
                                                          className: "btn",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              });
                                            }
                                          ),
                                        }),
                                      i &&
                                        i.map(function (t, i) {
                                          return (0,
                                          L.tZ)(_, { data: t, onBook: e.handleClick, onConfirm: e.handleMemberShipConfirm, onShowEProductDetail: e.handleShowEProductDetail }, i);
                                        }),
                                      n &&
                                        (0, L.BX)(h.View, {
                                          className:
                                            "flight-more color-primary",
                                          id: "AaAr",
                                          onClick: this.showAllCabins,
                                          children: [
                                            "更多舱位/公务舱",
                                            (0, L.tZ)(h.Text, {
                                              className: "ifont-arr iconfont",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, L.tZ)(h.View, {
                                    className: "flight-brand-publicity",
                                    id: "AaAs",
                                    onClick: this.toGoldenServiceDetail,
                                  }),
                                  o &&
                                    (0, L.tZ)(h.View, {
                                      className:
                                        "pop-mask " + (r ? "active" : ""),
                                      "data-type": s,
                                      id: "AaAt",
                                      onClick: function (t) {
                                        t.stopPropagation(), e.closePopMask(t);
                                      },
                                      catchMove: !0,
                                    }),
                                  (0, L.tZ)(h.View, {
                                    className: "pop-mid " + (c ? "active" : ""),
                                    children: (0, L.tZ)(h.View, {
                                      className: "pop-mid-bd",
                                      children: (0, L.BX)(h.View, {
                                        className: "pop-white",
                                        children: [
                                          (0, L.tZ)(h.View, {
                                            className: "pop-content",
                                            children: (0, L.tZ)(h.View, {
                                              className: "pop-content-txt",
                                              children:
                                                "很抱歉，您预订的价格舱位已经售完，请返回重新搜索",
                                            }),
                                          }),
                                          (0, L.tZ)(h.View, {
                                            className: "pop-btn",
                                            children: (0, L.tZ)(h.View, {
                                              className:
                                                "btn-txt color-primary",
                                              id: "AaAu",
                                              onClick: this.backAndRefreshList,
                                              children: "我知道了",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  d &&
                                    (0, L.BX)(h.View, {
                                      className:
                                        "pop-mid " + (l ? "active" : ""),
                                      children: [
                                        (0, L.tZ)(h.View, {
                                          className: "pop-mid-bd",
                                          children: (0, L.BX)(h.View, {
                                            className: "pop-white",
                                            children: [
                                              (0, L.BX)(h.View, {
                                                className: "pop-content",
                                                children: [
                                                  (0, L.tZ)(h.View, {
                                                    className: "tit",
                                                    children: d.title,
                                                  }),
                                                  (0, L.BX)(h.View, {
                                                    className:
                                                      "pop-content-txt",
                                                    children: [
                                                      "现价",
                                                      (0, L.tZ)(h.Text, {
                                                        className:
                                                          "price color-primary",
                                                        children: d.price,
                                                      }),
                                                      (0, L.tZ)(h.Text, {
                                                        className: "s",
                                                        children:
                                                          "原价￥" +
                                                          d.originPrice,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, L.BX)(h.View, {
                                                className: "pop-btn",
                                                children: [
                                                  (0, L.tZ)(h.Button, {
                                                    className: "btn-grey",
                                                    hoverClass: "btn_hover",
                                                    id: "AaAv",
                                                    onClick:
                                                      this.backAndRefreshList,
                                                    children: "看看其他航班",
                                                  }),
                                                  (0, L.tZ)(h.Button, {
                                                    className: "btn-primary",
                                                    hoverClass: "btn_hover",
                                                    "data-type": "priceChange",
                                                    id: "AaAw",
                                                    onClick: this.toBookPage,
                                                    children: "赶紧预订",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, L.tZ)(h.Icon, {
                                          className: "icon-closed",
                                        }),
                                      ],
                                    }),
                                  (0, L.tZ)(h.View, {
                                    className: "pop-mid " + (m ? "active" : ""),
                                    children: (0, L.tZ)(h.View, {
                                      className: "pop-mid-bd",
                                      children: (0, L.BX)(h.View, {
                                        className: "pop-white",
                                        children: [
                                          (0, L.tZ)(h.View, {
                                            className: "pop-content",
                                            children: (0, L.tZ)(h.View, {
                                              className: "pop-content-txt",
                                              children: p,
                                            }),
                                          }),
                                          (0, L.tZ)(h.View, {
                                            className: "pop-btn",
                                            children: (0, L.tZ)(h.View, {
                                              className:
                                                "btn-txt color-primary",
                                              id: "AaAx",
                                              onClick: this.toBookPage,
                                              children: "我知道了",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, L.tZ)(k.Z, {
                                    visible: g,
                                    content: v,
                                    onConfirm: this.handleMemberShipConfirm,
                                    onClose: this.handleCloseEProductDetail,
                                  }),
                                  (0, L.tZ)(V.Z, {
                                    ref: function (t) {
                                      e.onDrawerAttach(t);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(u.default.Component))
                  ) || Y)
              ) || Y;
          Page(
            (0, a.createPageConfig)(
              J,
              "pages/flightIntl/bookx/bookx",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
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
          [25859, 8014, 81198, 72032, 16386, 55525, 25323, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(59507);
          }
        ),
          e.O();
      },
    ]);
})();
