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
    require("../sub-common/87dd7ca508f26cc44a96a97518946752.js"),
    require("../sub-common/1775d7c9f65b9a6f532fd61b25d0faaf.js"),
    require("../sub-common/023c833735f89bfd8e4bfa6050ae7715.js"),
    require("../sub-common/6c29063ea7407d5aad2c6709ea72811d.js"),
    require("../sub-common/c464917dce609cc1e640bf0180e17346.js"),
    require("../sub-common/46833458e1cabcee1efa7341adea7ce5.js"),
    require("../sub-common/6703dfed9657e31b3f9022a9c5685c5a.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [24312],
      {
        96170: function (e, t, n) {
          var i = n(32180),
            a = n(57042),
            o = n(24460),
            s = n(81876),
            r = n(21867),
            c = n(86066),
            l = n(45023),
            d = n(90129),
            u = n(93212),
            h = n(22276),
            m = n(79301),
            p = n(95308),
            f = n(298),
            g = n(90983),
            v = n(52500),
            N = n(71515),
            w = n(92954),
            C = n.n(w),
            Z = n(48792),
            b = n.n(Z),
            x = n(93761),
            y = n(2326),
            P = n(4102),
            T = n(79910),
            I = n(49120),
            k = n(81957),
            D = n(79792),
            V = n(86977),
            B = n(20592),
            A = n(18783),
            L = n(55916),
            S = n(13025),
            R = n(77900),
            X = n(8271),
            _ = n.n(X),
            E = n(3205),
            M = n(74777),
            O = n(21999),
            F = n(28044),
            H = n(32270),
            z = n(38064),
            U = n(83016),
            q = n(9062),
            Y = n(59086),
            G = n(45245),
            W = (function () {
              var e = (0, p.Z)(
                (0, m.Z)().mark(function e(t) {
                  var n, i, a, o, s, r, c, l, d, h;
                  return (0, m.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = t.validateObj),
                              (i = t.strategies),
                              0 != (a = void 0 === i ? [] : i).length)
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", !0);
                          case 3:
                            (o = function (e) {
                              return "boolean" == typeof e
                                ? { validated: e }
                                : "object" === (0, u.Z)(e) &&
                                  null !== e &&
                                  "boolean" == typeof e.validated
                                ? {
                                    validated: e.validated,
                                    validateInfo: e.validateInfo,
                                  }
                                : null;
                            }),
                              (s = (0, g.Z)(a)),
                              (e.prev = 5),
                              s.s();
                          case 7:
                            if ((r = s.n()).done) {
                              e.next = 26;
                              break;
                            }
                            if (
                              ((c = r.value),
                              "function" == typeof (l = c.validate))
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (
                              console.error(
                                "校验策略{".concat(
                                  c.type,
                                  "}未提供validate方法，或validate值不是Function, 该策略无效"
                                )
                              ),
                              e.abrupt("continue", 24)
                            );
                          case 13:
                            if (!((d = l(n)) instanceof Promise)) {
                              e.next = 18;
                              break;
                            }
                            return (e.next = 17), d;
                          case 17:
                            d = e.sent;
                          case 18:
                            if ((h = o(d))) {
                              e.next = 22;
                              break;
                            }
                            return (
                              console.error(
                                "校验策略{".concat(
                                  c.type,
                                  "}的返回值似乎不符合定义，校验结果可能出错"
                                )
                              ),
                              e.abrupt("continue", 24)
                            );
                          case 22:
                            if (h.validated) {
                              e.next = 24;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              (0, f.Z)({ type: c.type }, h)
                            );
                          case 24:
                            e.next = 7;
                            break;
                          case 26:
                            e.next = 31;
                            break;
                          case 28:
                            (e.prev = 28), (e.t0 = e.catch(5)), s.e(e.t0);
                          case 31:
                            return (e.prev = 31), s.f(), e.finish(31);
                          case 34:
                            return e.abrupt("return", { validated: !0 });
                          case 35:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 28, 31, 34]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            j = function (e) {
              var t = e.saleType,
                n = e.selectedPassengers,
                i = e.segNumber,
                a = (function (e) {
                  var t,
                    n = 0,
                    i = 0,
                    a = 0,
                    o = 0,
                    s = (0, g.Z)(e);
                  try {
                    for (s.s(); !(t = s.n()).done; ) {
                      var r = t.value;
                      "成人票" === r.passengerType && "成人票" === r.ticketType
                        ? n++
                        : "儿童票" === r.passengerType
                        ? "成人票" === r.ticketType
                          ? a++
                          : i++
                        : "婴儿票" === r.passengerType && o++;
                    }
                  } catch (e) {
                    s.e(e);
                  } finally {
                    s.f();
                  }
                  return { adult: n, adultChild: a, child: i, baby: o };
                })(n),
                o = a.adult,
                s = a.adultChild,
                r = a.child,
                c = a.baby,
                l = 0;
              switch (t) {
                case 1:
                  l = (o + s + r) * i;
                  break;
                case 2:
                  l = (o + s + r + c) * i;
                  break;
                case 3:
                  l = (o + s) * i;
                  break;
                case 4:
                  l = o + s + r;
                  break;
                case 5:
                  l = o + s + r + c;
                  break;
                case 6:
                  l = o + s;
                  break;
                default:
                  l = 1;
              }
              return l;
            },
            J = n(39173),
            K = n(13975),
            Q = function (e) {
              var t;
              try {
                var n;
                t = JSON.parse(
                  null === (n = e.flightNewListData) || void 0 === n
                    ? void 0
                    : n.bookingExtJson
                );
              } catch (e) {
                console.error(e),
                  G.Z.logJsonParseError({
                    e: e,
                    source: "flight/book/hotelAction/getHotelRoomList",
                  });
              }
              return t;
            },
            $ = n(48813),
            ee = v.default.memo(function (e) {
              var t = 2 == e.state;
              return (0,
              $.BX)(N.View, { className: "title-view flex-center", children: [(0, $.tZ)(N.View, { className: "book-step ".concat(t ? "" : "cur"), children: "填订单" }), (0, $.tZ)(N.Image, { className: "arr-icon", src: "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/jiantou_icon.png" }), (0, $.tZ)(N.View, { className: "book-step ".concat(t ? "cur" : ""), children: "支付" })] });
            }),
            te = n(26862),
            ne = n(34229),
            ie = v.default.memo(function (e) {
              var t = e.priceDetail,
                n = e.saveMoneyModule || {},
                i = n.title,
                a = n.saveMoneyDetailList,
                o = n.totalSavedMoney,
                s = (null == a ? void 0 : a.length) > 0,
                r = D.default.isTieyou
                  ? "https://images3.c-ctrip.com/ztrip/zhixingios/dindanxiangqinye/sq/img_sq_title_ty@3x.webp"
                  : "https://images3.c-ctrip.com/ztrip/zhixingios/dindanxiangqinye/sq/img_sq_title@3x.webp";
              return (0, $.BX)(N.View, {
                className: "price-detail flex flex-column",
                children: [
                  (0, $.tZ)(N.View, {
                    className: "price-detail-title-wrap flex-center",
                    children: (0, $.tZ)(N.Image, {
                      className: "price-detail-title",
                      src: r,
                    }),
                  }),
                  s &&
                    (0, $.tZ)(N.View, {
                      className: "smm-wrap",
                      children: (0, $.BX)(N.View, {
                        className: "save-money-module",
                        children: [
                          (0, $.BX)(N.View, {
                            className: "smm-title flex",
                            children: [
                              (0, $.tZ)(ne.ZtRichText, { nodes: i }),
                              (0, $.BX)(N.Text, {
                                className: "price-txt",
                                children: [(0, $.tZ)(te.Z, {}), o],
                              }),
                            ],
                          }),
                          (0, $.tZ)(N.View, {
                            className: "smm-detail flex",
                            children: a.map(function (e, t) {
                              return (0,
                              $.BX)(N.View, { className: "smm-item", children: [(0, $.tZ)(N.Text, { className: "ifont2-gou iconfont2 smm-item-icon" }), (0, $.BX)(N.Text, { className: "smm-item-txt", children: [e.title, (0, $.tZ)(te.Z, {}), e.price] })] }, t);
                            }),
                          }),
                        ],
                      }),
                    }),
                  (0, $.tZ)(N.View, {
                    className: "price-detail-cont flex flex-column flex-1",
                    children: Object.keys(t).map(function (e) {
                      return t[e].map(function (e) {
                        var t,
                          n = "";
                        return (
                          (n += e.cost ? e.cost : ""),
                          (n += e.count ? "x".concat(e.count) : ""),
                          (n += e.unit ? e.unit : ""),
                          (0, $.BX)(
                            N.View,
                            {
                              className: "price-wrap flex flex-column",
                              children: [
                                (0, $.BX)(N.View, {
                                  className: "price-hd flex-center ",
                                  children: [
                                    (0, $.tZ)(N.Text, {
                                      className: "price-title flex-1",
                                      children: e.title,
                                    }),
                                    (0, $.tZ)(N.Text, {
                                      className: "rbox",
                                      children: n,
                                    }),
                                  ],
                                }),
                                (0, $.tZ)(N.View, {
                                  className: "price-cont flex flex-column",
                                  children:
                                    null === (t = e.detail) || void 0 === t
                                      ? void 0
                                      : t.map(function (e, t) {
                                          var n = "";
                                          if (
                                            (void 0 !== e.price &&
                                              (n += e.price),
                                            void 0 !== e.count)
                                          ) {
                                            void 0 !== e.price
                                              ? (n += "x" + e.count)
                                              : (n += e.count);
                                          }
                                          return (
                                            e.unit && (n += e.unit),
                                            (0, $.BX)(
                                              N.View,
                                              {
                                                className:
                                                  "price-item flex-center ".concat(
                                                    null == e
                                                      ? void 0
                                                      : e.itemTag
                                                  ),
                                                children: [
                                                  (0, $.BX)(N.View, {
                                                    className:
                                                      "item-name flex-1 flex-align-items-center",
                                                    children: [
                                                      e.item,
                                                      e.ncd &&
                                                        e.ncd.amount &&
                                                        (0, $.tZ)(N.Text, {
                                                          className: "torage",
                                                          children: e.ncd.text,
                                                        }),
                                                      e.icon &&
                                                        (0, $.tZ)(N.Image, {
                                                          src: e.icon,
                                                          className:
                                                            "item-icon",
                                                          mode: "heightFix",
                                                        }),
                                                    ],
                                                  }),
                                                  (0, $.tZ)(N.View, {
                                                    className: "item-value",
                                                    children: n,
                                                  }),
                                                ],
                                              },
                                              t
                                            )
                                          );
                                        }),
                                }),
                              ],
                            },
                            e.title
                          )
                        );
                      });
                    }),
                  }),
                ],
              });
            }),
            ae = v.default.memo(function (e) {
              var t = e.hotelInfo,
                n = e.roomList,
                i = e.selectedRoomId,
                a = e.hasPickup,
                o = e.showHotelDetailPop,
                s = void 0 === o ? function () {} : o,
                r = (function (e) {
                  var t = Q(e);
                  if ((console.log("hotelInfo", e), t)) {
                    var n = t.checkInDate,
                      i = t.checkOutDate,
                      a = e.fixedPriceHotel || {},
                      o = a.fixedPriceInfoExtend,
                      s = a.hotelList,
                      r = null == o ? void 0 : o.flightChangeMessage,
                      c = (null == s ? void 0 : s[0]) || {},
                      l = c.name,
                      d = c.logo,
                      u = c.bigLogo,
                      h = c.hotelExtraInfo,
                      m = c.hotelAddInfo,
                      p = (null == h ? void 0 : h.minRoomDataInfo) || {};
                    return {
                      flightChangeMessage: r,
                      name: l,
                      logo: d,
                      bigLogo: u,
                      cancelMessage: p.cancelMessage,
                      tagMessage: p.tagMessage,
                      commonScore: (m || {}).commonScore + "分",
                      checkInDate: _()(n).format("MM-DD") + "入住",
                      checkOutDate: _()(i).format("MM-DD") + "离店",
                      dayDiff: _()(i).diff(_()(n), "day") + "晚",
                    };
                  }
                })(t),
                c = r || {},
                l = c.checkInDate,
                d = c.checkOutDate,
                u = c.dayDiff,
                h = c.commonScore,
                m = c.logo,
                p = c.name,
                f = c.cancelMessage,
                g = c.flightChangeMessage,
                v = (
                  (null == n
                    ? void 0
                    : n.find(function (e) {
                        return e.roomId == i;
                      })) || {}
                ).baseName;
              return (0,
              $.tZ)($.HY, { children: r && (0, $.BX)(N.View, { className: "hotel-module", children: [(0, $.tZ)(N.Image, { className: "expand-icon", id: "AcAc", onClick: s, src: "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/zhangkai_icon.png" }), (0, $.BX)(N.View, { className: "flight-hd", id: "AcAd", onClick: s, children: [(0, $.tZ)(N.View, { className: "tag tgreen", children: "酒店" }), (0, $.BX)(N.View, { className: "title", children: [l, " ", d, " ", u] })] }), (0, $.BX)(N.View, { className: "hotel-bd flex", children: [(0, $.BX)(N.View, { className: "logo-wrapper", children: [(0, $.tZ)(N.View, { className: "score-tag", children: h }), (0, $.tZ)(N.Image, { className: "logo", src: m })] }), (0, $.BX)(N.View, { className: "hotel-info", children: [(0, $.tZ)(N.View, { className: "hotel-title", children: p }), (0, $.tZ)(N.View, { className: "basic-info", children: v }), (0, $.tZ)(N.View, { className: "basic-info color-green", children: f }), (0, $.BX)(N.View, { className: "basic-info color-green", children: [a && (0, $.tZ)(N.Text, { className: "basic-item", children: "酒店免费接送机" }), (0, $.tZ)(N.Text, { className: "basic-item", children: g })] }), (0, $.BX)(N.View, { className: "basic-info", id: "AcAe", onClick: s, children: ["查看/更改房型", (0, $.tZ)(N.View, { className: "ifont-arr iconfont" })] })] })] })] }) });
            }),
            oe = function (e) {
              var t;
              return (
                e.cpr || e.caa || e.bpr
                  ? !e.cpr && e.caa
                    ? (t = "儿童可订成人票")
                    : e.cpr || e.caa
                    ? e.bpr || (t = "不可购婴儿票")
                    : e.bpr && (t = "不可购儿童票")
                  : (t = "不可购儿童/婴儿票"),
                t
              );
            },
            se = v.default.memo(function (e) {
              var t = e.flight,
                n = e.tripType,
                i = e.segIndex,
                a = e.index,
                o = e.isTransfer,
                s = e.inPop,
                r = t.stop,
                c = t.dptWeekDay,
                l = t.dptTimeStr,
                d = t.dptTime,
                u = t.dptName,
                h = t.arrName,
                m = "直飞";
              (0 == n) & r && (m = "经停"),
                1 == n && ((m = "中转"), o && (m += 0 == a ? "1程" : "2程")),
                2 == n &&
                  ((m = 1 == i ? "返程" : "去程"),
                  o && (m += 0 == a ? "1程" : "2程")),
                3 == n && (m = 1 == i ? "2程" : "1程");
              var p = _()(d).format("MM-DD");
              return (0,
              $.BX)(N.View, { className: "flight-hd", children: [(0, $.tZ)(N.Text, { className: "tag ".concat(1 == i ? "tgreen" : ""), children: m }), (0, $.BX)(N.Text, { className: "title", children: [u, "-", h, " ", p, " ", c, " ", s ? "" : l] })] });
            }),
            re = v.default.memo(function (e) {
              var t = e.segments,
                n = e.hotelInfo,
                i = e.tripType,
                a = e.topBanner,
                o = e.cabin,
                s = e.advantages,
                r = e.hotelTip,
                c = e.toggleFlightDetail,
                l = e.toggleTaxesFees,
                d = e.handleBaggageAllowancePoliciesClick,
                u = e.roomList,
                m = e.selectedRoomId,
                p = e.hasPickup,
                f = e.showHotelDetailPop,
                g = !!n,
                v = o.product,
                w = o.xProducts,
                C = o.mlTag,
                Z = o.rcTag,
                b = o.bgTag,
                x = null == w ? void 0 : w[0],
                y = [];
              return (
                s && (y = (0, h.Z)(s)),
                g && r && y.push({ text: r }),
                (0, $.BX)($.HY, {
                  children: [
                    !!a &&
                      (0, $.tZ)(N.View, {
                        className: "top-banner",
                        children: (0, $.BX)(N.View, {
                          className: "banner-wrapper",
                          children: [
                            (0, $.BX)(N.View, {
                              className: "left-icon",
                              children: [
                                !!a.leftIcon &&
                                  (0, $.tZ)(N.Image, {
                                    className: "left-icon-item",
                                    src: a.leftIcon,
                                    mode: "heightFix",
                                  }),
                                !!a.icon &&
                                  (0, $.tZ)(N.Image, {
                                    className: "left-icon-item",
                                    src: a.icon,
                                    mode: "heightFix",
                                  }),
                              ],
                            }),
                            (0, $.tZ)(N.View, {
                              className: "banner-txt",
                              children: (0, $.tZ)(ne.ZtRichText, {
                                nodes: a.content || "",
                              }),
                            }),
                          ],
                        }),
                      }),
                    (0, $.BX)(N.View, {
                      className: "flight-module-container white-box",
                      children: [
                        (0, $.BX)(N.View, {
                          className: "flight-module",
                          children: [
                            (0, $.tZ)(N.Image, {
                              className: "expand-icon",
                              id: "AcAf",
                              onClick: c,
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/zhangkai_icon.png",
                            }),
                            (0, $.tZ)(N.View, {
                              id: "AcAg",
                              onClick: c,
                              children:
                                null == t
                                  ? void 0
                                  : t.map(function (e, t) {
                                      return (0,
                                      $.tZ)(se, { flight: e.flights[0], segIndex: t, index: 0, tripType: i }, t);
                                    }),
                            }),
                            (0, $.BX)(N.View, {
                              className: "flight-bd",
                              children: [
                                !g &&
                                  (0, $.BX)(N.View, {
                                    className: "basic-info",
                                    children: [
                                      (null == v ? void 0 : v.dpr) > 0 &&
                                        (0, $.BX)($.HY, {
                                          children: [
                                            "成人",
                                            (0, $.tZ)(te.Z, {}),
                                            v.dpr,
                                          ],
                                        }),
                                      (null == x ? void 0 : x.name) &&
                                        (0, $.BX)($.HY, {
                                          children: [
                                            " + ",
                                            x.name,
                                            (0, $.tZ)(te.Z, {}),
                                            x.price,
                                          ],
                                        }),
                                      (null == v ? void 0 : v.atx) > 0 &&
                                        (0, $.BX)(N.View, {
                                          id: "AcAh",
                                          onClick: l,
                                          className: "flex-align-items-center",
                                          style: "white-space: pre",
                                          children: [
                                            " + 机建燃油",
                                            (0, $.tZ)(te.Z, {}),
                                            v.atx,
                                            (0, $.tZ)(N.Text, {
                                              className:
                                                "ifont-detail iconfont",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                (0, $.BX)(N.View, {
                                  className: "basic-info",
                                  id: "AcAi",
                                  onClick: d,
                                  children: [
                                    (0, $.BX)(N.View, {
                                      className: "flex-align-items-center",
                                      children: [
                                        g
                                          ? (0, $.tZ)($.HY, {
                                              children:
                                                oe(v) &&
                                                (0, $.tZ)(N.Text, {
                                                  className: "basic-item",
                                                  children: oe(v),
                                                }),
                                            })
                                          : (0, $.BX)($.HY, {
                                              children: [
                                                (null == v ? void 0 : v.cpr) >
                                                  0 &&
                                                  (0, $.BX)(N.Text, {
                                                    className: "basic-item",
                                                    children: [
                                                      "儿童",
                                                      (0, $.tZ)(te.Z, {}),
                                                      v.cpr,
                                                    ],
                                                  }),
                                                (null == v ? void 0 : v.bpr) >
                                                  0 &&
                                                  (0, $.BX)(N.Text, {
                                                    className: "basic-item",
                                                    children: [
                                                      "婴儿",
                                                      (0, $.tZ)(te.Z, {}),
                                                      v.bpr,
                                                    ],
                                                  }),
                                              ],
                                            }),
                                        C &&
                                          (0, $.tZ)(N.Text, {
                                            className: "basic-item",
                                            children: C,
                                          }),
                                        Z &&
                                          (0, $.tZ)(N.Text, {
                                            className: "basic-item",
                                            children: Z,
                                          }),
                                        b &&
                                          (0, $.tZ)(N.Text, {
                                            className: "basic-item",
                                            children: b,
                                          }),
                                      ],
                                    }),
                                    (0, $.tZ)(N.Text, {
                                      className: "ifont-arr iconfont",
                                    }),
                                  ],
                                }),
                                !g &&
                                  0 !== (null == v ? void 0 : v.grab) &&
                                  (0, $.BX)(N.View, {
                                    className: "basic-info",
                                    children: [
                                      (0, $.tZ)(N.Image, {
                                        className: "light-icon",
                                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/qiangpiao_icon.png",
                                      }),
                                      "抢到起飞前4小时",
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        g &&
                          (0, $.tZ)(ae, {
                            hotelInfo: n,
                            roomList: u,
                            selectedRoomId: m,
                            hasPickup: p,
                            showHotelDetailPop: f,
                          }),
                        y &&
                          y.length > 0 &&
                          (0, $.BX)($.HY, {
                            children: [
                              (0, $.tZ)(N.View, { className: "divider-h" }),
                              (0, $.tZ)(N.View, {
                                className: "notice-list",
                                children: y.map(function (e, t) {
                                  var n;
                                  return (0, $.BX)(
                                    N.View,
                                    {
                                      className: "item flex-align-items-center",
                                      id: "AcAj",
                                      onClick: function () {
                                        return (function (e) {
                                          var t = e.action,
                                            n = e.text;
                                          if ("luggage" == t) return d();
                                          var i = (0, I.getCurrentPage)();
                                          if ("notice" == t)
                                            return i.showCommonDrawer({
                                              hideTitle: !0,
                                              hideClose: !0,
                                              content: function (e) {
                                                var t = e.onClose;
                                                return (0, $.tZ)(F.Z, {
                                                  title: "机票预订提醒",
                                                  content: n,
                                                  onCancel: t,
                                                  onConfirm: t,
                                                });
                                              },
                                            });
                                          i.showCommonDrawer({
                                            title: "提示",
                                            content: n,
                                          });
                                        })(e);
                                      },
                                      children: [
                                        (0, $.tZ)(N.View, {
                                          className: "cont over-txt",
                                          children: (0, $.tZ)(ne.ZtRichText, {
                                            nodes: T.Z.getEllipsisRichText(
                                              null === (n = e.text) ||
                                                void 0 === n
                                                ? void 0
                                                : n.replace(/\<br.*\/\>/g, "")
                                            ),
                                          }),
                                        }),
                                        (0, $.tZ)(N.Text, {
                                          className: "iconfont ifont-arr",
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                })
              );
            }),
            ce =
              "https://pic.c-ctrip.com/train/zt/wechat/avatar-default-".concat(
                D.default.zxTyStr,
                ".png"
              ),
            le = "icon-star ".concat(D.default.zxTyStr),
            de = "icon-star-half ".concat(D.default.zxTyStr),
            ue = "icon-star-white ".concat(D.default.zxTyStr);
          var he,
            me,
            pe,
            fe = function (e) {
              var t,
                n,
                i,
                a = e.comment,
                o = e.openImageBox;
              if (a && Object.keys(a).length > 0) {
                var s = a.imageList.filter(function (e) {
                    return 1 === e.imageType;
                  }),
                  r = a.imageList.filter(function (e) {
                    return 2 === e.imageType;
                  });
                (a.imageList = s),
                  (a.bigImageList = r),
                  (a.createDate = _()(a.createDate.split(".")[0]).format(
                    "YYYY-MM-DD"
                  ));
              }
              var c = (function (e) {
                  var t = Math.floor(parseInt(e)),
                    n = parseInt(e) % 1 != 0 ? 1 : 0,
                    i = 5 - t - n;
                  return {
                    fullStar: new Array(t).fill(1),
                    halfStar: new Array(n).fill(1),
                    emptyStar: new Array(i).fill(1),
                  };
                })(a.ratings.ratingOverall),
                l = ""
                  .concat(a.checkInDate, "入住，")
                  .concat(a.createDate, "发表");
              return (0, $.BX)(N.View, {
                className: "item",
                children: [
                  (0, $.BX)(N.View, {
                    className: "man-info",
                    children: [
                      (0, $.tZ)(N.Image, { src: ce, className: "avatar" }),
                      (0, $.BX)(N.View, {
                        className: "cont",
                        children: [
                          (0, $.BX)(N.View, {
                            className: "name",
                            children: [
                              a.nickName,
                              a.commentGrade &&
                                (0, $.tZ)(N.Text, {
                                  className: "tag color-red",
                                  children: a.commentGrade,
                                }),
                            ],
                          }),
                          (0, $.BX)(N.View, {
                            className: "evaluate",
                            children: [
                              (null === (t = a.ratings) || void 0 === t
                                ? void 0
                                : t.ratingOverall) > 0 &&
                                (0, $.tZ)(N.View, {
                                  className: "color-primary",
                                  children:
                                    a.ratings.ratingOverall +
                                    (a.ratings.ratingOverall % 1 == 0
                                      ? ".0"
                                      : ""),
                                }),
                              null === (n = c.fullStar) || void 0 === n
                                ? void 0
                                : n.map(function (e, t) {
                                    return (0,
                                    $.tZ)(N.Icon, { className: le }, t);
                                  }),
                              c.halfStar.map(function (e, t) {
                                return (0, $.tZ)(N.Icon, { className: de }, t);
                              }),
                              null === (i = c.emptyStar) || void 0 === i
                                ? void 0
                                : i.map(function (e, t) {
                                    return (0,
                                    $.tZ)(N.Icon, { className: ue }, t);
                                  }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.content &&
                    (0, $.tZ)(N.View, {
                      className: "remark-txt",
                      children: a.content,
                    }),
                  (0, $.tZ)(N.View, {
                    className: "remark-pic",
                    children: a.imageList.map(function (e, t) {
                      return (0,
                      $.tZ)(v.default.Fragment, { children: (0, $.tZ)(N.Image, { src: e.imageUrl, className: "pic", id: "AABL", onClick: o, "data-piclist": a.bigImageList, "data-index": t }) }, "myCommentImageList");
                    }),
                  }),
                  (0, $.tZ)(N.View, { className: "remark-time", children: l }),
                ],
              });
            },
            ge = v.default.memo(function (e) {
              var t,
                n,
                i,
                a,
                o,
                s = e.hotelCommentDynamicInfo,
                r = e.hotelCommentStaticInfo,
                c = e.commentDetailList,
                l = e.gotoCommentPage,
                d = void 0 === l ? function () {} : l,
                u = e.openImageBox,
                h = void 0 === u ? function () {} : u;
              return (0, $.BX)(N.View, {
                className: "hotel-other evaluation",
                id: "AABM",
                onClick: d,
                children: [
                  (0, $.tZ)(N.View, {
                    className: "hotel-other-hd",
                    children: (0, $.tZ)(N.View, {
                      className: "tit",
                      children: "住客评价",
                    }),
                  }),
                  r.hotelCommentAvgRatings &&
                    (0, $.BX)(N.View, {
                      className: "hotel-remark-score",
                      children: [
                        (0, $.BX)(N.View, {
                          className: "lbox",
                          children: [
                            (0, $.BX)(N.View, {
                              className: "tit color-primary",
                              children: [
                                r.hotelCommentAvgRatings.ratingOverall &&
                                  (0, $.tZ)(N.Text, {
                                    className: "strong",
                                    children:
                                      r.hotelCommentAvgRatings.ratingOverall %
                                        1 ==
                                      0
                                        ? r.hotelCommentAvgRatings
                                            .ratingOverall + ".0"
                                        : r.hotelCommentAvgRatings
                                            .ratingOverall,
                                  }),
                                !r.hotelCommentAvgRatings.ratingOverall &&
                                  (0, $.tZ)(N.Text, {
                                    className: "strong",
                                    style: "font-size: 24rpx;",
                                    children: "暂无评分",
                                  }),
                                r.hotelCommentAvgRatings.ratingRemark || "不错",
                              ],
                            }),
                            r.recommendRatio &&
                              (0, $.tZ)(N.View, {
                                className: "txt",
                                children:
                                  "高于同类" + r.recommendRatio + "%的酒店",
                              }),
                          ],
                        }),
                        (0, $.BX)(N.View, {
                          className: "score-type",
                          children: [
                            (0, $.BX)(N.View, {
                              className: "item",
                              children: [
                                (0, $.tZ)(N.Text, { children: "环境" }),
                                (0, $.tZ)(N.View, {
                                  className: "score-line",
                                  children: (0, $.tZ)(N.View, {
                                    className: "line bgcolor-primary",
                                    style:
                                      "width:" +
                                      20 *
                                        r.hotelCommentAvgRatings.ratingAround +
                                      "%",
                                  }),
                                }),
                                (0, $.tZ)(N.Text, {
                                  children:
                                    r.hotelCommentAvgRatings.ratingAround ||
                                    "暂无",
                                }),
                              ],
                            }),
                            (0, $.BX)(N.View, {
                              className: "item",
                              children: [
                                (0, $.tZ)(N.Text, { children: "服务" }),
                                (0, $.tZ)(N.View, {
                                  className: "score-line",
                                  children: (0, $.tZ)(N.View, {
                                    className: "line bgcolor-primary",
                                    style:
                                      "width:" +
                                      20 *
                                        r.hotelCommentAvgRatings.ratingService +
                                      "%",
                                  }),
                                }),
                                (0, $.tZ)(N.Text, {
                                  children:
                                    r.hotelCommentAvgRatings.ratingService ||
                                    "暂无",
                                }),
                              ],
                            }),
                            (0, $.BX)(N.View, {
                              className: "item",
                              children: [
                                (0, $.tZ)(N.Text, { children: "设施" }),
                                (0, $.tZ)(N.View, {
                                  className: "score-line",
                                  children: (0, $.tZ)(N.View, {
                                    className: "line bgcolor-primary",
                                    style:
                                      "width:" +
                                      20 *
                                        r.hotelCommentAvgRatings
                                          .ratingFacility +
                                      "%",
                                  }),
                                }),
                                (0, $.tZ)(N.Text, {
                                  children:
                                    r.hotelCommentAvgRatings.ratingFacility ||
                                    "暂无",
                                }),
                              ],
                            }),
                            (0, $.BX)(N.View, {
                              className: "item",
                              children: [
                                (0, $.tZ)(N.Text, { children: "卫生" }),
                                (0, $.tZ)(N.View, {
                                  className: "score-line",
                                  children: (0, $.tZ)(N.View, {
                                    className: "line bgcolor-primary",
                                    style:
                                      "width:" +
                                      20 * r.hotelCommentAvgRatings.ratingRoom +
                                      "%",
                                  }),
                                }),
                                (0, $.tZ)(N.Text, {
                                  children:
                                    r.hotelCommentAvgRatings.ratingRoom ||
                                    "暂无",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  (null == s ||
                  null === (t = s.hotelCommentQueryList) ||
                  void 0 === t
                    ? void 0
                    : t.length) > 0 &&
                    (0, $.BX)(N.View, {
                      className: "hotel-remark-tag",
                      children: [
                        (null == s ||
                        null === (n = s.hotelCommentQueryList[0]) ||
                        void 0 === n ||
                        null === (i = n.items) ||
                        void 0 === i
                          ? void 0
                          : i.length) > 0 &&
                          (0, $.tZ)(N.View, {
                            className: "item",
                            children: "全部",
                          }),
                        null == s ||
                        null === (a = s.hotelCommentQueryList[0]) ||
                        void 0 === a ||
                        null === (o = a.items) ||
                        void 0 === o
                          ? void 0
                          : o.map(function (e, t) {
                              return (0,
                              $.tZ)(v.default.Fragment, { children: (0, $.BX)(N.View, { className: "item", children: [e.name, " ", (0, $.tZ)(N.Text, { className: "no", children: "(" + e.val + ")" })] }) }, t);
                            }),
                      ],
                    }),
                  (0, $.tZ)(N.View, {
                    className: "hotel-remark-list",
                    children:
                      null == c
                        ? void 0
                        : c.map(function (e, t) {
                            return (0,
                            $.tZ)(v.default.Fragment, { children: (0, $.tZ)(fe, { comment: e, openImageBox: h }) }, t);
                          }),
                  }),
                ],
              });
            }),
            ve = n(18433),
            Ne = v.default.memo(function (e) {
              var t = e.imageList,
                n = (0, v.useState)(1),
                i = (0, d.Z)(n, 2),
                a = i[0],
                o = i[1];
              return (0, $.BX)(N.View, {
                className: "image-swiper",
                children: [
                  (0, $.tZ)(N.Swiper, {
                    className: "hotel-image-list",
                    easingFunction: "easeInOutCubic",
                    onChange: function (e) {
                      o(e.detail.current + 1);
                    },
                    children:
                      null == t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0,
                            $.tZ)(N.SwiperItem, { className: "hotel-image-wrapper", children: (0, $.tZ)(N.View, { className: "hotel-image", style: { background: "url(".concat(e, ") no-repeat"), backgroundSize: "cover" } }) }, t);
                          }),
                  }),
                  (0, $.BX)(N.View, {
                    className: "index-counter",
                    children: [a, "/", t.length],
                  }),
                ],
              });
            }),
            we = { borderRadius: "32rpx 32rpx 0 0" },
            Ce = {
              1: "zaocan",
              5: "ren",
              51: "chuang",
              4: "fangjianmianji",
              6: "louceng",
              17: "jinyan",
              18: "youchuang",
              29: "yushi",
              30: "bianlisheshi",
              31: "xishuyongpin",
              32: "shipinyinpin",
              34: "shiwaijingguan",
              35: "meitikeji",
              36: "feiyongzhengce",
              37: "wifi",
              38: "wifi",
              40: "djdiannao",
              41: "djxianka",
              42: "djxianshiqi",
              43: "djsheshi",
              50: "qita",
            },
            Ze = function (e) {
              return "https://images3.c-ctrip.com/ztrip/hotel/icons/sheshi-icon/hotel_".concat(
                Ce[e],
                "@3x.png"
              );
            },
            be = [51, 5, 38, 4, 18, 1],
            xe = function (e) {
              var t = e.hotelInfo,
                n = e.updatePickup,
                i = e.setHotelDetail;
              (function (e) {
                var t,
                  n = e.hotelInfo || {},
                  i = n.flightNewListData,
                  a = n.fixedPriceHotel,
                  o = {};
                try {
                  var s = null == i ? void 0 : i.bookingExtJson,
                    r = JSON.parse(s),
                    c = r.checkInDate,
                    l = r.checkOutDate,
                    d = r.cityId,
                    u = r.hotelId,
                    h = (null == a ? void 0 : a.currentPosition) || {},
                    m = h.geoList,
                    p = h.keywordType,
                    g = h.positionRemark,
                    v = null == m ? void 0 : m[0],
                    N = v.lat,
                    w = v.lon;
                  (t = null == m ? void 0 : m[0].type),
                    (o.data = {
                      hotelId: u,
                      cityId: d,
                      checkInDate: c,
                      checkOutDate: l,
                      isHourRoomHotel: 0,
                      posrem: g,
                      positionRemarkType: p,
                      lat: N,
                      lon: w,
                      type: t,
                      clientVersion: Number(K.AA),
                    });
                } catch (e) {
                  console.log(e),
                    G.Z.logJsonParseError({
                      e: e,
                      source: "flight/book/hoteldetailpop",
                    });
                }
                return (0, J.$o)(o).then(function (e) {
                  return (0, f.Z)({ type: t }, e);
                });
              })({ hotelInfo: t })
                .then(function (e) {
                  if (1 == e.resultCode && e.data) {
                    var t,
                      a,
                      o = e.data,
                      s = e.type,
                      r =
                        null === (t = o.geoList) || void 0 === t
                          ? void 0
                          : t.find(function (e) {
                              return e.type == s;
                            }),
                      c = {
                        name: o.name,
                        commentRemark: o.commentRemark,
                        commentView: o.commentView,
                        commonScore: o.commonScore,
                        starLicence: o.starLicence,
                        starList: o.starLevel
                          ? new Array(o.starLevel).fill(1)
                          : [],
                        address: o.address,
                        hotelTraffic:
                          null === (a = o.hotelTrafficList) || void 0 === a
                            ? void 0
                            : a[0],
                        pickUpAndDropOffText: o.pickUpAndDropOffText,
                        lat: null == r ? void 0 : r.lat,
                        lon: null == r ? void 0 : r.lon,
                        hotelBasicInfoList: o.hotelBasicInfoList,
                      };
                    o.pickUpAndDropOffText && n(!0), i(c);
                  }
                })
                .catch(function (e) {
                  console.log("hotel detail pop get hotel detail fail", e);
                });
            },
            ye = function (e) {
              var t = e.hotelInfo,
                n = e.setHotelCommentGroup;
              (function (e) {
                var t,
                  n,
                  i,
                  a = e.hotelInfo,
                  o = {
                    data: {
                      hotelId:
                        null == a ||
                        null === (t = a.fixedPriceHotel) ||
                        void 0 === t ||
                        null === (n = t.hotelList) ||
                        void 0 === n ||
                        null === (i = n[0]) ||
                        void 0 === i
                          ? void 0
                          : i.hotelId,
                      pageIndex: 1,
                      pageSize: 10,
                      sortBy: 2,
                      orderBy: 1,
                      getTypeBitMap: 54,
                      operationType: 0,
                      controlBitMap: 14,
                      clientVersion: Number(K.AA),
                    },
                  };
                return (0, J.zs)(o);
              })({ hotelInfo: t })
                .then(function (e) {
                  if (1 == e.resultCode && e.data) {
                    var t,
                      i = e.data,
                      a = i.groupList,
                      o = i.hotelCommentDynamicInfo,
                      s = i.hotelCommentStaticInfo,
                      r =
                        null == a || null === (t = a[0]) || void 0 === t
                          ? void 0
                          : t.commentDetailList;
                    n({
                      commentDetailList: r,
                      hotelCommentDynamicInfo: o,
                      hotelCommentStaticInfo: s,
                    });
                  }
                })
                .catch(function (e) {
                  console.log(
                    "hotel detail pop get hotel comment group fail",
                    e
                  );
                });
            },
            Pe = v.default.memo(function (e) {
              var t = e.hotelBasicInfoList;
              if (t) {
                var n = [];
                return (
                  t.forEach(function (e) {
                    var t;
                    null == e ||
                      null === (t = e.subSectionList) ||
                      void 0 === t ||
                      t.forEach(function (e) {
                        n.push(e);
                      });
                  }),
                  (0, $.BX)(N.View, {
                    className: "booking-must-read",
                    children: [
                      (0, $.tZ)(N.View, {
                        className: "must-read-hd",
                        children: "订房必读",
                      }),
                      (0, $.tZ)(N.View, {
                        className: "must-read-list",
                        children: n.map(function (e, t) {
                          return (0,
                          $.BX)(N.View, { className: "must-read-item", children: [(0, $.tZ)(N.View, { className: "title flex-align-items-center", children: e.title }), (0, $.tZ)(N.View, { className: "content", children: e.content })] }, t);
                        }),
                      }),
                    ],
                  })
                );
              }
            }),
            Te = v.default.memo(function (e) {
              var t,
                n,
                i,
                a = e.visible,
                o = void 0 === a || a,
                s = e.hotelInfo,
                r = e.hotelRoomList,
                c = e.selectedRoomId,
                l = e.onChange,
                u = void 0 === l ? function () {} : l,
                h = e.updatePickup,
                m = void 0 === h ? function () {} : h,
                p = e.onClose,
                g = void 0 === p ? function () {} : p,
                w = (0, v.useState)(0),
                Z = (0, d.Z)(w, 2),
                b = Z[0],
                x = Z[1],
                y = (0, v.useState)(null),
                P = (0, d.Z)(y, 2),
                T = P[0],
                I = P[1],
                k = (0, v.useState)(null),
                V = (0, d.Z)(k, 2),
                B = V[0],
                A = V[1],
                L = (0, v.useState)(null),
                S = (0, d.Z)(L, 2),
                R = S[0],
                X = S[1],
                _ = (0, v.useState)(""),
                E = (0, d.Z)(_, 2),
                M = E[0],
                O = E[1];
              (0, v.useEffect)(
                function () {
                  s &&
                    (xe({ hotelInfo: s, updatePickup: m, setHotelDetail: I }),
                    ye({ hotelInfo: s, setHotelCommentGroup: X }));
                },
                [s]
              ),
                (0, v.useEffect)(
                  function () {
                    r &&
                      0 != r.length &&
                      (function (e) {
                        var t = e.hotelRoomList,
                          n = e.setRoomList,
                          i = [];
                        t.forEach(function (e) {
                          var t,
                            n = e.baseName,
                            a = e.roomId,
                            o = e.priceInfoLite,
                            s = e.imageList,
                            r = e.roomBasicList,
                            c = [];
                          be.forEach(function (e) {
                            var t =
                              null == r
                                ? void 0
                                : r.find(function (t) {
                                    return t.type == e;
                                  });
                            t &&
                              c.push({
                                iconUrl: Ze(e),
                                value:
                                  t.itemValue + "".concat(4 == e ? "㎡" : ""),
                              });
                          });
                          var l =
                              null ===
                                (t = r.find(function (e) {
                                  return 3 == e.type;
                                })) || void 0 === t
                                ? void 0
                                : t.itemValue,
                            d = s.map(function (e) {
                              return e.imageUrl;
                            });
                          i.push({
                            baseName: n,
                            cancelType: l,
                            roomId: a,
                            priceInfo: o,
                            imageList: d,
                            roomBasicList: c,
                          });
                        }),
                          n(i);
                      })({ hotelRoomList: r, setRoomList: A });
                  },
                  [r]
                );
              var F = (0, v.useCallback)(
                  function (e) {
                    var t = e.index;
                    t != b &&
                      (x(t),
                      O(
                        1 == t
                          ? "hotel-flight-hotel-comment-group"
                          : "hotel-flight-hotel-title"
                      ));
                  },
                  [b]
                ),
                H = (0, ve.Z)({
                  selector: ".hotel-detail-hd",
                  targetSelector: "#hotel-flight-hotel-comment-group",
                  observeCallback: function (e) {
                    M && O(""),
                      e.intersectionRatio > 0 ? 1 != b && x(1) : 0 != b && x(0);
                  },
                  callbackDeps: [b, M],
                });
              return (0, $.tZ)(N.View, {
                className: "".concat(D.default.isTieyou ? "ty" : "zx"),
                children: (0, $.tZ)(ne.ZtDrawer, {
                  className: "hotel-detail-pop",
                  isShowClose: !1,
                  show: o,
                  onClose: g,
                  onWrapClose: g,
                  drawerStyle: we,
                  height: "80vh",
                  maxHeight: "80vh",
                  children: (0, $.BX)(N.View, {
                    className:
                      "hotel-detail-pop-container flex flex-column flex-1",
                    children: [
                      (0, $.BX)(N.View, {
                        className: "hotel-detail-hd flex-align-items-center",
                        children: [
                          (0, $.tZ)(N.Text, {
                            className: "flight-hotel-tab-item ".concat(
                              0 == b ? "cur" : ""
                            ),
                            id: "AcAk",
                            onClick: function () {
                              return F({ index: 0 });
                            },
                            children: "酒店详情",
                          }),
                          (0, $.tZ)(N.Text, {
                            className: "flight-hotel-tab-item ".concat(
                              1 == b ? "cur" : ""
                            ),
                            id: "AcAl",
                            onClick: function () {
                              return F({ index: 1 });
                            },
                            children: "酒店评价",
                          }),
                        ],
                      }),
                      (0, $.BX)(N.ScrollView, {
                        className: "hotel-detail-bd",
                        scrollY: !0,
                        scrollIntoView: M,
                        scrollWithAnimation: !0,
                        children: [
                          T &&
                            (0, $.BX)(N.View, {
                              className: "hotel-detail",
                              children: [
                                (0, $.tZ)(N.View, {
                                  className: "hotel-title",
                                  id: "hotel-flight-hotel-title",
                                  children: (0, $.BX)(N.View, {
                                    className: "hotel-name",
                                    children: [
                                      T.name,
                                      (0, $.tZ)(N.View, {
                                        className: "star-list",
                                        children:
                                          null === (t = T.starList) ||
                                          void 0 === t
                                            ? void 0
                                            : t.map(function (e, t) {
                                                return (0,
                                                $.tZ)(N.Image, { className: "star", src: T.starLicence ? "https://images3.c-ctrip.com/zt/wechat/hotel/xing.png" : "https://images3.c-ctrip.com/zt/wechat/hotel/zuan.png" }, t);
                                              }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, $.BX)(N.View, {
                                  className:
                                    "score-banner flex-align-items-center",
                                  children: [
                                    (0, $.tZ)(N.View, {
                                      className:
                                        "common-score flex-align-items-center",
                                      children: (0, $.tZ)(N.Text, {
                                        children: T.commonScore,
                                      }),
                                    }),
                                    (0, $.tZ)(N.View, {
                                      className: "common-remark",
                                      children: T.commentRemark,
                                    }),
                                    (0, $.tZ)(N.View, {
                                      className: "common-view",
                                      children: T.commentView,
                                    }),
                                  ],
                                }),
                                (0, $.BX)(N.View, {
                                  className: "traffic-banner",
                                  children: [
                                    (0, $.tZ)(N.View, {
                                      className:
                                        "traffic-title flex-align-items-center",
                                      children: T.address,
                                    }),
                                    (0, $.BX)(N.View, {
                                      className:
                                        "traffic-remark flex-align-items-center",
                                      children: [
                                        (0, $.tZ)(N.Image, {
                                          className: "icon-url",
                                          src:
                                            null === (n = T.hotelTraffic) ||
                                            void 0 === n
                                              ? void 0
                                              : n.iconUrl,
                                        }),
                                        (0, $.tZ)(ne.ZtRichText, {
                                          nodes:
                                            null === (i = T.hotelTraffic) ||
                                            void 0 === i
                                              ? void 0
                                              : i.trafficRemark,
                                          space: "nbsp",
                                        }),
                                      ],
                                    }),
                                    (0, $.BX)(N.View, {
                                      className:
                                        "location-icon flex-align-items-center flex-column",
                                      id: "AcAm",
                                      onClick: function () {
                                        C().openLocation({
                                          latitude: parseFloat(T.lat),
                                          longitude: parseFloat(T.lon),
                                          name: T.name,
                                          address: T.hotelAddress,
                                        });
                                      },
                                      children: [
                                        (0, $.tZ)(N.View, {
                                          className: "ifont-location iconfont",
                                        }),
                                        (0, $.tZ)(N.View, {
                                          className: "map-text",
                                          children: "地图",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                T.pickUpAndDropOffText &&
                                  (0, $.BX)(N.View, {
                                    className: "traffic-banner pick-up",
                                    children: [
                                      (0, $.BX)(N.View, {
                                        className:
                                          "traffic-title flex-align-items-center",
                                        children: [
                                          "酒店至机场免费接送机",
                                          (0, $.tZ)(N.View, {
                                            className: "traffic-tag bd-1rpx",
                                            children: "赠送",
                                          }),
                                        ],
                                      }),
                                      (0, $.tZ)(N.View, {
                                        className:
                                          "traffic-remark flex-align-items-center",
                                        children: (0, $.tZ)(ne.ZtRichText, {
                                          nodes: T.pickUpAndDropOffText,
                                          space: "nbsp",
                                        }),
                                      }),
                                    ],
                                  }),
                                (0, $.tZ)(N.View, {
                                  className: "hotel-room-list",
                                  children:
                                    null == B
                                      ? void 0
                                      : B.map(function (e, t) {
                                          return (0, $.BX)(
                                            N.View,
                                            {
                                              className:
                                                "hotel-room-box ".concat(
                                                  c == e.roomId
                                                    ? "selected"
                                                    : ""
                                                ),
                                              children: [
                                                e.imageList.length > 0 &&
                                                  (0, $.tZ)(Ne, {
                                                    imageList: e.imageList,
                                                  }),
                                                (0, $.BX)(N.View, {
                                                  className: "room-info-box",
                                                  children: [
                                                    (0, $.tZ)(N.View, {
                                                      className: "room-name",
                                                      children: e.baseName,
                                                    }),
                                                    (0, $.tZ)(N.View, {
                                                      className:
                                                        "room-basic-list flex flex-wrap",
                                                      children:
                                                        e.roomBasicList.map(
                                                          function (e, t) {
                                                            return (0, $.BX)(
                                                              N.View,
                                                              {
                                                                className:
                                                                  "room-basic",
                                                                children: [
                                                                  (0, $.tZ)(
                                                                    N.Image,
                                                                    {
                                                                      className:
                                                                        "rb-icon",
                                                                      src: e.iconUrl,
                                                                    }
                                                                  ),
                                                                  (0, $.tZ)(
                                                                    N.View,
                                                                    {
                                                                      className:
                                                                        "rb-value flex-1",
                                                                      children:
                                                                        e.value,
                                                                    }
                                                                  ),
                                                                ],
                                                              },
                                                              t
                                                            );
                                                          }
                                                        ),
                                                    }),
                                                    (0, $.tZ)(N.View, {
                                                      className: "cancel-type",
                                                      children: e.cancelType,
                                                    }),
                                                    (0, $.BX)(N.View, {
                                                      className:
                                                        "bottom-row flex-align-items-center",
                                                      children: [
                                                        (0, $.BX)(N.View, {
                                                          className:
                                                            "price flex-1 flex-align-items-center",
                                                          children: [
                                                            (0, $.tZ)(N.View, {
                                                              className:
                                                                "sale-price",
                                                              children:
                                                                e.priceInfo
                                                                  .salePrice,
                                                            }),
                                                            e.priceInfo
                                                              .discountPrice >
                                                              0 &&
                                                              (0, $.BX)(
                                                                N.View,
                                                                {
                                                                  className:
                                                                    "discount-sale-price",
                                                                  children: [
                                                                    "￥",
                                                                    e.priceInfo
                                                                      .discountPrice,
                                                                  ],
                                                                }
                                                              ),
                                                          ],
                                                        }),
                                                        (0, $.BX)(N.View, {
                                                          className:
                                                            "choose-btn flex-center bd-1rpx ".concat(
                                                              c == e.roomId
                                                                ? "selected"
                                                                : ""
                                                            ),
                                                          id: "AcAn",
                                                          onClick: function () {
                                                            return (function (
                                                              e
                                                            ) {
                                                              var t = e.roomId;
                                                              c != t &&
                                                                u &&
                                                                u({
                                                                  roomId: t,
                                                                });
                                                            })({
                                                              roomId: e.roomId,
                                                            });
                                                          },
                                                          children: [
                                                            c != e.roomId &&
                                                              (0, $.tZ)(
                                                                N.View,
                                                                {
                                                                  className:
                                                                    "plus-icon",
                                                                }
                                                              ),
                                                            (0, $.tZ)(N.Text, {
                                                              children:
                                                                c != e.roomId
                                                                  ? "选择"
                                                                  : "已选择",
                                                            }),
                                                          ],
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
                          (0, $.tZ)(Pe, {
                            hotelBasicInfoList:
                              null == T ? void 0 : T.hotelBasicInfoList,
                          }),
                          R &&
                            (0, $.tZ)(N.View, {
                              ref: H,
                              className: "hotel-comment-group",
                              id: "hotel-flight-hotel-comment-group",
                              children: (0, $.tZ)(ge, (0, f.Z)({}, R)),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              });
            }),
            Ie = v.default.memo(function (e) {
              var t = e.pasLen,
                n = e.roomNumber,
                i = e.selectedRoomId,
                a = e.roomList,
                o = e.onChange,
                s = void 0 === o ? function () {} : o,
                r = a.find(function (e) {
                  return e.roomId == i;
                }),
                c = r.min,
                l = r.max,
                d = n <= c,
                u = n >= Math.min(l, t),
                h = function (e) {
                  if ("plus" == e.operation && u) {
                    var t =
                      n == l
                        ? "抱歉，此酒店当前房型只剩".concat(l, "间")
                        : "房间数不可超过乘机人数";
                    (0, I.showToast)(t);
                  } else ("minus" == e.operation && d) || (s && s(e));
                };
              return (0, $.BX)(N.View, {
                className:
                  "adjust-room-number-banner flex-align-items-center white-box font-16 color-3",
                children: [
                  (0, $.tZ)(N.View, {
                    className: "title flex-1",
                    children: "酒店房间数量",
                  }),
                  (0, $.BX)(N.View, {
                    className: "adjust-btn flex-align-items-center",
                    children: [
                      (0, $.tZ)(N.View, {
                        className:
                          "operate-icon ifont-counterminus iconfont ".concat(
                            d ? "disabled" : ""
                          ),
                        id: "AcAA",
                        onClick: function () {
                          return h({ operation: "minus" });
                        },
                      }),
                      n,
                      "间",
                      (0, $.tZ)(N.View, {
                        className:
                          "operate-icon ifont-counteradd iconfont ".concat(
                            u ? "disabled" : ""
                          ),
                        id: "AcAB",
                        onClick: function () {
                          return h({ operation: "plus" });
                        },
                      }),
                    ],
                  }),
                ],
              });
            }),
            ke = v.default.memo(function (e) {
              var t = e.product,
                n = e.selectedPassengersListLen,
                i = e.toAdditionalProductDetail,
                a = e.toggleAdditionalProduct,
                o = e.calculateNum,
                s = "/".concat(t.unit);
              return (
                t.selected &&
                  n > 0 &&
                  (s = "×".concat(o({ saleType: t.saleType }))),
                (0, $.BX)(N.View, {
                  className: "product-one flex",
                  children: [
                    (0, $.BX)(N.View, {
                      className: "cont flex-1",
                      children: [
                        (0, $.BX)(N.View, {
                          className: "hd ft-15-m flex-align-items-center",
                          children: [
                            t.productName,
                            (0, $.tZ)(N.Text, {
                              className: "ifont-detail color-9 iconfont",
                              id: "AcAC",
                              onClick: function () {
                                return i(t);
                              },
                            }),
                            (0, $.BX)(N.View, {
                              className: "tag flex-align-items-center",
                              children: [
                                (0, $.tZ)(N.Text, {
                                  className: "ifont-hand iconfont",
                                }),
                                "出行必备",
                              ],
                            }),
                          ],
                        }),
                        (0, $.tZ)(N.View, {
                          className: "features",
                          children: t.features.map(function (e, t) {
                            return (0,
                            $.BX)(N.View, { className: "feature-item color-9 flex-align-items-center", children: [(0, $.tZ)(N.Image, { className: "icon", src: e.icon, lazyLoad: !0 }), (0, $.tZ)(ne.ZtRichText, { nodes: e.title })] }, t);
                          }),
                        }),
                      ],
                    }),
                    (0, $.tZ)(N.View, {
                      className: "rbox",
                      children: (0, $.BX)(N.View, {
                        className: "flex-align-items-center",
                        id: "AcAD",
                        onClick: function () {
                          return a(t);
                        },
                        children: [
                          (0, $.BX)(N.Text, {
                            className: "ft-15-m color-3",
                            children: [(0, $.tZ)(te.Z, {}), t.price],
                          }),
                          (0, $.tZ)(N.Text, {
                            className: "ft-15-r color-9",
                            children: s,
                          }),
                          (0, $.tZ)(N.Text, {
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
            De =
              "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/card/xuangou/icon_xuangou_no@3x.png",
            Ve = {
              noInsur: !0,
              productName: "无保障",
              insuranceIcon:
                "https://images3.c-ctrip.com/ztrip/zhixingios/dindanxiangqinye/10/wu@3x.png",
              features: [De, De],
              selected: !0,
            },
            Be = v.default.memo(function (e) {
              var t = e.noInsur,
                n = e.selectedPassengersListLen,
                i = e.recommendedTipsText,
                a = e.noInsurSelected,
                o = e.toAdditionalProductDetail,
                s = e.toggleAdditionalProduct,
                r = e.calculateNum,
                c = t ? Ve : e.product,
                l = c.productName,
                d = c.insuranceIcon,
                u = c.features,
                h = "";
              if (!t) {
                var m = "/".concat(c.unit);
                c.selected &&
                  n > 0 &&
                  (m = "×".concat(r({ saleType: c.saleType }))),
                  (h = "".concat(c.price).concat(m));
              }
              var p = t ? a : c.selected,
                f = "";
              return (
                2 == (null == i ? void 0 : i.length) && (f = p ? i[1] : i[0]),
                (0, $.BX)(N.View, {
                  className: "product-item "
                    .concat(p ? "selected" : "", " ")
                    .concat(t ? "no-insur" : ""),
                  children: [
                    (0, $.BX)(N.View, {
                      className: "topbox flex-align-items-center flex-column",
                      children: [
                        (0, $.tZ)(N.Image, {
                          src: d,
                          lazyLoad: !0,
                          className: "icon",
                        }),
                        (0, $.tZ)(N.View, { className: "title", children: l }),
                        (0, $.tZ)(N.View, {
                          className: "subtitle",
                          children: t
                            ? ""
                            : (0, $.BX)(N.View, {
                                className:
                                  "font-12 color-9 flex-align-items-center",
                                id: "AcAE",
                                onClick: function () {
                                  return o(c);
                                },
                                children: [
                                  (0, $.tZ)(te.Z, {}),
                                  h,
                                  (0, $.tZ)(N.Text, {
                                    className: "ifont-detail iconfont",
                                  }),
                                ],
                              }),
                        }),
                      ],
                    }),
                    (0, $.BX)(N.View, {
                      className: "botmbox flex-align-items-center flex-column",
                      id: "AcAF",
                      onClick: function () {
                        (t && a) || s(c);
                      },
                      children: [
                        [0, 1].map(function (e) {
                          var n;
                          return (0,
                          $.tZ)(N.View, { className: "feature-item font-12 color-6 flex-center", children: t ? (0, $.tZ)(N.Image, { className: "no-icon", src: u[e], lazyLoad: !0 }) : (0, $.tZ)(ne.ZtRichText, { nodes: null === (n = u[e]) || void 0 === n ? void 0 : n.title }) }, e);
                        }),
                        (0, $.tZ)(N.Text, {
                          className: "checkbox ".concat(
                            p ? "ifont2-checkboxed" : "ifont2-checkbox",
                            " iconfont2"
                          ),
                        }),
                      ],
                    }),
                    f &&
                      (0, $.tZ)(N.View, {
                        className: "float-tip trigon top ".concat(
                          p ? "selected" : "active"
                        ),
                        children: f,
                      }),
                  ],
                })
              );
            }),
            Ae = v.default.memo(function (e) {
              var t = e.filteredAddtionalProducts,
                n = e.recommendedTipsText,
                i = e.selectedPassengersListLen,
                a = e.toAdditionalProductDetail,
                o = e.toggleAdditionalProduct,
                s = e.calculateNum,
                r = t.some(function (e) {
                  return e.selected;
                });
              return (0, $.tZ)(N.View, {
                className: "product",
                children: (0, $.tZ)(N.ScrollView, {
                  scrollWithAnimation: !0,
                  scrollX: !0,
                  className: "product-list-wrapper",
                  children: (0, $.BX)(N.View, {
                    className: "product-list",
                    children: [
                      (0, $.tZ)(Be, {
                        noInsur: !0,
                        selectedPassengersListLen: i,
                        noInsurSelected: !r,
                        toAdditionalProductDetail: a,
                        toggleAdditionalProduct: o,
                        calculateNum: s,
                      }),
                      t.map(function (e, t) {
                        return (0,
                        $.tZ)(Be, { product: e, selectedPassengersListLen: i, toAdditionalProductDetail: a, toggleAdditionalProduct: o, recommendedTipsText: 0 == t ? n : null, calculateNum: s }, t);
                      }),
                    ],
                  }),
                }),
              });
            }),
            Le = v.default.memo(function (e) {
              var t = e.appendProductNode,
                n = e.selectedPassengersListLen,
                i = e.toAdditionalProductDetail,
                a = e.toggleAdditionalProduct,
                o = e.calculateNum,
                s = t.banners,
                r = void 0 === s ? [] : s,
                c = t.additionalProducts,
                l = t.bottomText,
                u = t.bottomCompanyLogo,
                h = t.recommendedTipsText,
                m = c.filter(function (e) {
                  return !e.bundling;
                }),
                p = m.length,
                f = m.some(function (e) {
                  return e.selected;
                }),
                g = r.find(function (e) {
                  return e.selected == f;
                }),
                w = g.background,
                C = g.title,
                Z = g.weather,
                b = (0, v.useState)(!1),
                x = (0, d.Z)(b, 2),
                y = x[0],
                P = x[1];
              (0, v.useEffect)(function () {
                if (m.length > 0) {
                  var e = m.map(function (e) {
                    return {
                      ProductId: e.productCode,
                      ProductName: e.productName,
                      Price: e.price,
                    };
                  });
                  T.Z.sendUbtTrace("FltWWrite_InsuranceSales_exposure", {
                    ProductsList: e,
                  });
                }
              }, []);
              var I = function (e) {
                e.selected || P(!0), a(e);
              };
              return (0, $.BX)(N.View, {
                className: "insurance-box ".concat(f ? "selected" : ""),
                children: [
                  (0, $.tZ)(N.Image, {
                    src: f
                      ? "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/baoxian/baoxian_yixuan.png"
                      : w,
                    lazyLoad: !0,
                    className: "bg-img",
                  }),
                  (0, $.BX)(N.View, {
                    className: "insurance-hd flex-align-items-center",
                    children: [
                      (0, $.tZ)(ne.ZtRichText, {
                        nodes: C,
                        className: "flex-1",
                      }),
                      !f &&
                        Z &&
                        (0, $.BX)(N.View, {
                          className: "weather flex-align-items-center",
                          children: [
                            (0, $.BX)(N.View, {
                              className: "desc",
                              children: [
                                (0, $.tZ)(N.View, { children: Z.title }),
                                (0, $.tZ)(N.View, { children: Z.subtitle }),
                              ],
                            }),
                            (0, $.tZ)(N.Image, {
                              className: "img",
                              src: Z.image,
                              lazyLoad: !0,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, $.BX)(N.View, {
                    className: "insurance-bd",
                    children: [
                      1 == p
                        ? (0, $.tZ)(ke, {
                            product: m[0],
                            selectedPassengersListLen: n,
                            toAdditionalProductDetail: i,
                            toggleAdditionalProduct: I,
                            calculateNum: o,
                          })
                        : (0, $.tZ)(Ae, {
                            filteredAddtionalProducts: m,
                            recommendedTipsText: h,
                            selectedPassengersListLen: n,
                            toAdditionalProductDetail: i,
                            toggleAdditionalProduct: I,
                            calculateNum: o,
                          }),
                      y &&
                        (0, $.BX)(N.View, {
                          className: "product-intro",
                          children: [
                            (0, $.BX)(N.View, {
                              className: "flex",
                              children: [
                                (0, $.tZ)(N.Image, {
                                  src: u,
                                  lazyLoad: !0,
                                  className: "logo",
                                  mode: "heightFix",
                                }),
                                (0, $.tZ)(N.Text, {
                                  className: "ins-tips",
                                  id: "AcAG",
                                  onClick: function () {
                                    var e,
                                      t =
                                        null == m ||
                                        null ===
                                          (e = m.sort(function (e, t) {
                                            return (
                                              (null == t
                                                ? void 0
                                                : t.selectOrderCount) -
                                              (null == e
                                                ? void 0
                                                : e.selectOrderCount)
                                            );
                                          })) ||
                                        void 0 === e
                                          ? void 0
                                          : e[0];
                                    i(t || m[0]);
                                  },
                                  children: "投保须知",
                                }),
                              ],
                            }),
                            (0, $.tZ)(N.View, {
                              className: "intro-txt color-9",
                              children: l,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            }),
            Se = v.default.memo(function (e) {
              var t = e.pureAdvantages,
                n = e.handleBaggageAllowancePoliciesClick;
              return (0, $.tZ)($.HY, {
                children:
                  (null == t ? void 0 : t.length) > 0 &&
                  (0, $.tZ)(N.Swiper, {
                    className: "book-advg",
                    autoplay: !0,
                    interval: 3e3,
                    vertical: !0,
                    circular: !0,
                    children: t.map(function (e, t) {
                      return (0, $.tZ)(
                        N.SwiperItem,
                        {
                          className: "".concat(
                            D.default.isBaidu ? "advg-sp-item" : ""
                          ),
                          children: (0, $.BX)(N.View, {
                            className: "item flex-align-items-center",
                            id: "AcBM",
                            onClick: function () {
                              return (function (e) {
                                var t = e.content,
                                  i = e.contentTitle;
                                if ("luggage" == e.action)
                                  return null == n ? void 0 : n();
                                t &&
                                  (0, I.getCurrentPage)().showCommonDrawer({
                                    title: i,
                                    content: t,
                                    className: "pure-ad-pop",
                                  });
                              })(e);
                            },
                            children: [
                              (0, $.tZ)(N.Image, {
                                className: "icon",
                                src: e.icon,
                              }),
                              (0, $.tZ)(N.View, {
                                className: "cont flex-1",
                                children: (0, $.tZ)(ne.ZtRichText, {
                                  nodes: T.Z.getEllipsisRichText(e.text),
                                }),
                              }),
                              ("luggage" == e.action || !!e.content) &&
                                (0, $.tZ)(N.Text, {
                                  className: "iconfont ifont-arr",
                                }),
                            ],
                          }),
                        },
                        t
                      );
                    }),
                  }),
              });
            }),
            Re = [
              "身份证",
              "护照",
              "台胞证",
              "回乡证",
              "军人证",
              "港澳通行证",
              "户口簿",
              "出生证明",
              "港澳台居民居住证",
            ],
            Xe = v.default.memo(function (e) {
              var t = e.passportType,
                n = e.onClose,
                i = e.onConfirm;
              return (0, $.tZ)(N.View, {
                className: "type-list",
                children: Re.map(function (e, a) {
                  return (0, $.BX)(
                    N.View,
                    {
                      className:
                        "type-item " + (t === e ? "type-item_selected" : ""),
                      id: "AcBN",
                      onClick: function () {
                        n(), i(e);
                      },
                      children: [
                        e,
                        t === e &&
                          (0, $.tZ)(N.Icon, {
                            color: "#fc6e51",
                            size: "14",
                            type: "success_no_circle",
                            className: "icon-selected",
                          }),
                      ],
                    },
                    a
                  );
                }),
              });
            }),
            _e = [
              { type: 1, title: "个人抬头" },
              { type: 2, title: "公司抬头" },
              { type: 3, title: "行政抬头" },
            ],
            Ee = v.default.memo(function (e) {
              var t = e.invoiceSelectType,
                n = e.onClose,
                i = e.onConfirm;
              return (0, $.tZ)(N.View, {
                className: "type-list",
                children: _e.map(function (e, a) {
                  return (0, $.BX)(
                    N.View,
                    {
                      className:
                        "type-item " +
                        (t === e.type ? "type-item_selected" : ""),
                      id: "AcBO",
                      onClick: function () {
                        n(), i(e.type);
                      },
                      children: [
                        e.title,
                        t === e.type &&
                          (0, $.tZ)(N.Icon, {
                            color: "#fc6e51",
                            size: "14",
                            type: "success_no_circle",
                            className: "icon-selected",
                          }),
                      ],
                    },
                    a
                  );
                }),
              });
            }),
            Me = n(84211),
            Oe = (0, v.forwardRef)(function (e, t) {
              var n = (0, v.useRef)(),
                i = (0, v.useState)(!0),
                a = (0, d.Z)(i, 2),
                o = a[0],
                s = a[1];
              (0, v.useImperativeHandle)(t, function () {
                return {
                  getValue: function () {
                    return n.current.value;
                  },
                  setValue: function (e) {
                    n.current.value = e;
                  },
                };
              });
              return (0, $.BX)(N.View, {
                className: "contact-box",
                children: [
                  (0, $.BX)(N.View, {
                    className:
                      "contact-bd flex-align-items-center font-16 color-2",
                    children: [
                      (0, $.tZ)(N.View, {
                        className: "label",
                        children: "联系手机",
                      }),
                      (0, $.tZ)(N.View, {
                        className: "area-num",
                        children: "+86",
                      }),
                      (0, $.tZ)(N.View, {
                        className: "cont flex-1",
                        children: (0, $.tZ)(N.Input, {
                          type: "text",
                          maxlength: 13,
                          ref: n,
                          placeholder: "请输入正确的联系人手机号",
                          class: "input-txt",
                          placeholderClass: "input-plder",
                          onInput: function (e) {
                            var t = e.detail,
                              i = t.value,
                              a = t.keyCode,
                              o = G.Z.splitFormatPhone({
                                value: i,
                                keyCode: a,
                              });
                            i !== o && (n.current.value = o),
                              T.Z.debounce(function (e) {
                                Me.UT.set(e.replace(/\s/g, ""));
                              }, 300)(i);
                          },
                        }),
                      }),
                      (0, $.tZ)(N.Image, {
                        className: "contact-icon",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/tongxunlu_icon@3x.png",
                        id: "AcAJ",
                        onClick: function () {
                          C().chooseContact({
                            success: function (e) {
                              var t = e.phoneNumber.replace(/\s/g, "");
                              n.current.value = G.Z.initSplitFormatPhone(t);
                            },
                          });
                        },
                      }),
                    ],
                  }),
                  o &&
                    (0, $.BX)(N.View, {
                      className: "contact-tips flex-align-items-center",
                      children: [
                        (0, $.tZ)(N.Text, {
                          className: "cont flex-1 font-11",
                          children: "请注意是否用此号码接收订单信息",
                        }),
                        (0, $.tZ)(N.View, { className: "divider" }),
                        (0, $.tZ)(N.Text, {
                          className: "ifont-clear iconfont",
                          id: "AcAK",
                          onClick: function () {
                            s(!1);
                          },
                        }),
                      ],
                    }),
                ],
              });
            }),
            Fe = v.default.memo(Oe),
            He = {
              passengerName: "",
              passengerType: "",
              passengerENFirstName: "",
              passengerENLastName: "",
              passportType: "身份证",
              passportCode: "",
              passengerBirth: "",
            },
            ze = v.default.memo(function (e) {
              var t = e.flightGoDate,
                n = e.savePassenger,
                i = (0, v.useState)(He),
                a = (0, d.Z)(i, 2),
                o = a[0],
                s = a[1],
                r = (0, v.useRef)({
                  newPassportIdRef: null,
                  newPassPhoneRef: null,
                }),
                c = (0, v.useCallback)(function (e) {
                  r.current.newPassportIdRef = e;
                }, []),
                l = (0, v.useCallback)(function (e) {
                  r.current.newPassPhoneRef = e;
                }, []),
                u = function (e) {
                  var t = e.detail.value;
                  s((0, f.Z)((0, f.Z)({}, o), {}, { passengerName: t.trim() }));
                },
                h = function (e) {
                  var t = e.detail.value;
                  s(
                    (0, f.Z)(
                      (0, f.Z)({}, o),
                      {},
                      { passengerENLastName: t.trim().toUpperCase() }
                    )
                  );
                },
                m = function (e) {
                  var t = e.detail.value;
                  s(
                    (0, f.Z)(
                      (0, f.Z)({}, o),
                      {},
                      { passengerENFirstName: t.trim().toUpperCase() }
                    )
                  );
                };
              return (0, $.BX)($.HY, {
                children: [
                  (0, $.BX)(N.View, {
                    className: "book-list",
                    children: [
                      "护照" !== o.passportType &&
                        (0, $.BX)(N.View, {
                          className: "item",
                          children: [
                            (0, $.tZ)(N.View, {
                              className: "label",
                              children: "姓名",
                            }),
                            (0, $.tZ)(N.View, {
                              className: "cont",
                              children: (0, $.tZ)(N.Input, {
                                type: "text",
                                placeholder: "请输入乘客姓名",
                                className: "input-txt",
                                placeholderClass: "input-plder",
                                value: o.passengerName,
                                onInput: u,
                                onBlur: u,
                              }),
                            }),
                          ],
                        }),
                      "护照" === o.passportType &&
                        (0, $.BX)(N.View, {
                          className: "item",
                          children: [
                            (0, $.tZ)(N.View, {
                              className: "label",
                              children: "姓",
                            }),
                            (0, $.tZ)(N.View, {
                              className: "cont",
                              children: (0, $.tZ)(N.Input, {
                                type: "text",
                                placeholder: "如：LI,Surname",
                                className: "input-txt",
                                placeholderClass: "input-plder",
                                value: o.passengerENLastName,
                                onInput: h,
                                onBlur: h,
                              }),
                            }),
                          ],
                        }),
                      "护照" === o.passportType &&
                        (0, $.BX)(N.View, {
                          className: "item",
                          children: [
                            (0, $.tZ)(N.View, {
                              className: "label",
                              children: "名",
                            }),
                            (0, $.tZ)(N.View, {
                              className: "cont",
                              children: (0, $.tZ)(N.Input, {
                                type: "text",
                                placeholder: "如：LEI,Givenname",
                                className: "input-txt",
                                placeholderClass: "input-plder",
                                value: o.passengerENFirstName,
                                onInput: m,
                                onBlur: m,
                              }),
                            }),
                          ],
                        }),
                      (0, $.BX)(N.View, {
                        className: "item",
                        children: [
                          (0, $.tZ)(N.View, {
                            className: "label",
                            children: "证件类型",
                          }),
                          (0, $.tZ)(N.View, {
                            className: "cont",
                            id: "AcAy",
                            onClick: function () {
                              !(function (e) {
                                var t = e.passportType,
                                  n = e.onConfirm;
                                (0, I.getCurrentPage)().showCommonDrawer({
                                  hideClose: !0,
                                  title: "选择证件类型",
                                  content: function (e) {
                                    var i = e.onClose;
                                    return (0, $.tZ)(Xe, {
                                      passportType: t,
                                      onClose: i,
                                      onConfirm: n,
                                    });
                                  },
                                });
                              })({
                                passportType: o.passportType,
                                onConfirm: function (e) {
                                  s(
                                    (0, f.Z)(
                                      (0, f.Z)({}, o),
                                      {},
                                      { passportType: e }
                                    )
                                  );
                                },
                              });
                            },
                            children: (0, $.tZ)(N.View, {
                              className: "txt",
                              children: o.passportType,
                            }),
                          }),
                        ],
                      }),
                      (0, $.BX)(N.View, {
                        className: "item",
                        children: [
                          (0, $.tZ)(N.View, {
                            className: "label",
                            children: "证件号码",
                          }),
                          (0, $.tZ)(N.View, {
                            className: "cont",
                            children: (0, $.tZ)(N.Input, {
                              type: "text",
                              ref: c,
                              placeholder: "请输入乘客证件号码",
                              className: "input-txt",
                              placeholderClass: "input-plder",
                              onInput: function (e) {
                                var t = e.detail,
                                  n = t.value,
                                  i = t.keyCode;
                                if ("身份证" == o.passportType) {
                                  var a = G.Z.splitFormatIdentity({
                                    value: n,
                                    keyCode: i,
                                  });
                                  a !== n &&
                                    (r.current.newPassportIdRef.value = a);
                                }
                                T.Z.debounce(function (e) {
                                  s(
                                    (0, f.Z)(
                                      (0, f.Z)({}, o),
                                      {},
                                      {
                                        passportCode: e
                                          .replace(/\s/g, "")
                                          .toUpperCase(),
                                      }
                                    )
                                  );
                                }, 300)(n);
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, $.BX)(N.View, {
                        class: "item",
                        children: [
                          (0, $.tZ)(N.View, {
                            className: "label",
                            children: "联系手机",
                          }),
                          (0, $.tZ)(N.View, {
                            className: "area-num",
                            children: "+86",
                          }),
                          (0, $.tZ)(N.View, {
                            className: "cont",
                            children: (0, $.tZ)(N.Input, {
                              type: "text",
                              ref: l,
                              maxlength: 13,
                              placeholder: "用于接收航班信息",
                              placeholderClass: "input-plder",
                              onInput: function (e) {
                                var t = e.detail,
                                  n = t.value,
                                  i = t.keyCode,
                                  a = G.Z.splitFormatPhone({
                                    value: n,
                                    keyCode: i,
                                  });
                                a !== n &&
                                  (r.current.newPassPhoneRef.value = a),
                                  T.Z.debounce(function (e) {
                                    s(
                                      (0, f.Z)(
                                        (0, f.Z)({}, o),
                                        {},
                                        { passengerPhone: e.replace(/\s/g, "") }
                                      )
                                    );
                                  }, 300)(n);
                              },
                            }),
                          }),
                        ],
                      }),
                      !(
                        "身份证" === o.passportType ||
                        "户口簿" === o.passportType
                      ) &&
                        (0, $.BX)(N.View, {
                          className: "item",
                          children: [
                            (0, $.tZ)(N.View, {
                              className: "label",
                              children: "出生日期",
                            }),
                            (0, $.tZ)(N.View, {
                              className: "cont",
                              children: (0, $.tZ)(N.Picker, {
                                mode: "date",
                                value: o.passengerBirth,
                                start: "1900-01-01",
                                end: t,
                                onChange: function (e) {
                                  var t = e.detail.value;
                                  s(
                                    (0, f.Z)(
                                      (0, f.Z)({}, o),
                                      {},
                                      { passengerBirth: t }
                                    )
                                  );
                                },
                                children: (0, $.tZ)(N.Text, {
                                  children:
                                    o.passengerBirth || "请输入出生日期",
                                }),
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, $.tZ)(N.Button, {
                    className: "btn-save",
                    id: "AcAz",
                    onClick: function () {
                      n({ newPassenger: o, flightGoDate: t }, !0);
                    },
                    children: "保存",
                  }),
                ],
              });
            }),
            Ue = v.default.memo(function (e) {
              var t = e.cabin,
                n = e.isLogin,
                i = e.selectPassengerText,
                a = e.passengersList,
                o = e.flightGoDate,
                s = e.uniquePassengers,
                r = e.getPhoneNumberAction,
                c = e.openAllPassenger,
                l = e.savePassenger,
                d = e.handlePassengerEditClick,
                u = e.contactBoxRef,
                h = e.togglePassengerSelect,
                m = e.floatTip,
                p = e.specialPassengerTips,
                f = e.floatTipType,
                g = e.onAuth,
                v = e.onFloatTipClose,
                w = e.onFloatTipClick,
                C = function (e) {
                  var t = !(!e.passengerENFirstName && !e.passengerENLastName);
                  return e.duplicateMobile
                    ? "手机尾号".concat(
                        e.mobile.slice(-4),
                        "与其他乘机人重复，请修改"
                      )
                    : ["回乡证", "台胞证"].includes(e.passportType) && !t
                    ? "请修改证件乘机人姓名为英文"
                    : void 0;
                };
              return (0, $.BX)(N.View, {
                className:
                  "white-box book-newpasg " +
                  (t.needContactDetail ? "contact-box" : ""),
                children: [
                  (0, $.BX)(N.View, {
                    className: "book-newpasg-hd flex-align-items-center",
                    children: [
                      (0, $.BX)(N.View, {
                        className: "flex-align-items-center flex-1",
                        style: { minWidth: "2rpx" },
                        children: [
                          (0, $.BX)(N.View, {
                            className: "tit font-16 color-2",
                            children: [
                              i ? "已选：".concat(i) : "乘机人",
                              !!m &&
                                "default_check" == f &&
                                (0, $.BX)(N.View, {
                                  className:
                                    "float-tips flex-align-items-center",
                                  children: [
                                    (0, $.tZ)(N.Text, {
                                      className: "cont flex-1 font-11",
                                      children: m,
                                    }),
                                    (0, $.tZ)(N.View, { className: "divider" }),
                                    (0, $.tZ)(N.Text, {
                                      className: "ifont-clear iconfont",
                                      id: "AcAK",
                                      onClick: v,
                                    }),
                                  ],
                                }),
                              !!m &&
                                "check_recommend" == f &&
                                (0, $.BX)(N.View, {
                                  className: "pas-recommend-tips",
                                  children: [
                                    (0, $.BX)(N.View, {
                                      className: "tip-left",
                                      onClick: w,
                                      children: [
                                        (0, $.tZ)(N.View, {
                                          className: "ltip-cont",
                                          children: (0, $.tZ)(N.Text, {
                                            className:
                                              "ifont2-checkbox iconfont2",
                                          }),
                                        }),
                                        (0, $.tZ)(N.View, {
                                          className: "tip-cont",
                                          children: (0, $.tZ)(N.Text, {
                                            style: "margin-left: -10px;",
                                            children: m,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, $.tZ)(N.View, {
                                      className: "rtip-cont",
                                      onClick: function () {
                                        return v("close-btn");
                                      },
                                      children: (0, $.tZ)(N.Text, {
                                        className: "iconfont ifont-clear",
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, $.tZ)(ne.ZtRichText, {
                            className: "txt",
                            nodes: t.passengerFillingNote,
                          }),
                        ],
                      }),
                      !n ||
                        (a.length > 0 &&
                          (0, $.BX)(N.Button, {
                            className:
                              "btn-submit flex-align-items-center " +
                              D.default.zxTyStr,
                            id: "AcBA",
                            onClick: function () {
                              n ? c() : r();
                            },
                            children: [
                              (0, $.tZ)(N.Text, {
                                className: "ifont2-add iconfont2",
                              }),
                              "新增乘机人",
                            ],
                          })),
                    ],
                  }),
                  n && 0 == a.length
                    ? (0, $.tZ)(ze, { flightGoDate: o, savePassenger: l })
                    : (0, $.BX)(N.View, {
                        className: "book-newpasg-list " + D.default.zxTyStr,
                        children: [
                          !(null == p || !p.authEntrance) &&
                            (0, $.BX)(N.View, {
                              className: "auth-entrance",
                              onClick: function () {
                                null == g ||
                                  g(null == p ? void 0 : p.authEntrance);
                              },
                              children: [
                                (0, $.BX)(N.View, {
                                  className:
                                    "flex-1 flex-align-items-center lbox",
                                  children: [
                                    !!p.authEntrance.icon &&
                                      (0, $.tZ)(N.Image, {
                                        src: p.authEntrance.icon,
                                        className: "icon",
                                      }),
                                    (0, $.tZ)(ne.ZtRichText, {
                                      className: "content",
                                      nodes: T.Z.getEllipsisRichText(
                                        p.authEntrance.content
                                      ),
                                    }),
                                  ],
                                }),
                                (0, $.BX)(N.View, {
                                  className: "flex-align-items-center rbox",
                                  children: [
                                    (0, $.tZ)(ne.ZtRichText, {
                                      className: "btn-txt",
                                      nodes: p.authEntrance.btnText || "去认证",
                                    }),
                                    (0, $.tZ)(N.Text, {
                                      className: "iconfont2 ifont2-arr",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          !(null == p || !p.lt) &&
                            (0, $.tZ)(N.View, {
                              className: "top-tips",
                              children: (0, $.tZ)(ne.ZtRichText, {
                                nodes: p.lt,
                              }),
                            }),
                          s.map(function (e, t) {
                            var n;
                            return (0, $.BX)(
                              N.View,
                              {
                                className: "item " + (e.selected ? "cur" : ""),
                                children: [
                                  (0, $.tZ)(N.Text, {
                                    className: "ifont2-edit iconfont2",
                                    id: "AcBB",
                                    onClick: function () {
                                      return d({ passenger: e });
                                    },
                                  }),
                                  (0, $.BX)(N.View, {
                                    className: "select-box",
                                    id: "AcBC",
                                    onClick: function () {
                                      return h({ passenger: e, index: t });
                                    },
                                    children: [
                                      (0, $.BX)(N.View, {
                                        className: "cont",
                                        children: [
                                          (0, $.BX)(N.View, {
                                            className: "tit",
                                            children: [
                                              (0, $.tZ)(N.View, {
                                                className:
                                                  "name font-16 color-2",
                                                children: e.name,
                                              }),
                                              e.passengerTypeStr &&
                                              "成人" !== e.passengerTypeStr
                                                ? (0, $.tZ)(N.View, {
                                                    className: "tag",
                                                    children:
                                                      e.passengerTypeStr,
                                                  })
                                                : null,
                                              null === (n = e.tags) ||
                                              void 0 === n
                                                ? void 0
                                                : n.map(function (e) {
                                                    return (0,
                                                    $.tZ)(N.View, { className: "tag", children: e }, e);
                                                  }),
                                            ],
                                          }),
                                          (0, $.tZ)(N.View, {
                                            className: "txt font-12 color-9",
                                            children: ""
                                              .concat(e.passportType, " ")
                                              .concat(e.maskPassportCode),
                                          }),
                                          C(e) &&
                                            (0, $.tZ)(N.View, {
                                              className: "dup-note",
                                              children: C(e),
                                            }),
                                        ],
                                      }),
                                      (0, $.tZ)(N.Text, {
                                        className: "iconfont2 ".concat(
                                          e.selected
                                            ? "ifont2-checkboxed"
                                            : "ifont2-checkbox"
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.passengerID
                            );
                          }),
                        ],
                      }),
                  (0, $.tZ)(N.View, {
                    style: "display: ".concat(
                      n && 0 == a.length ? "none" : "block"
                    ),
                    children: (0, $.tZ)(Fe, { ref: u }),
                  }),
                ],
              });
            }),
            qe = v.default.memo(function (e) {
              var t = e.product,
                n = e.toInsuranceInstruction,
                i = e.selectedPassengersListLen,
                a = e.segNumber;
              return (0,
              $.BX)(N.View, { className: "white-box font-16 bundling-box flex-align-items-center", id: "AcAI", onClick: n, children: [(0, $.tZ)(N.Text, { className: "label color-9", children: "套餐说明" }), t.selected ? (0, $.tZ)(N.View, { className: "product-name", children: t.productName + " ￥" + t.price + " × " + ("P" === t.productType ? i * (a || 1) : 1) + t.unit }) : (0, $.tZ)(N.View, { className: "product-name", children: t.productName + "套餐 已取消" }), (0, $.tZ)(N.Text, { className: "iconfont ifont-arr" })] });
            }),
            Ye = v.default.memo(qe),
            Ge = v.default.memo(function (e) {
              var t,
                n,
                i,
                a,
                o,
                s = e.userSelectedCouponForce,
                r = e.isSelectedCouponAvailable,
                c = e.isMemberShipSelected,
                l = e.selectedCoupon,
                u = e.orderReducePrice,
                h = e.cabin,
                m = e.adult,
                p = e.adultChild,
                f = e.preferentialZoneFavors,
                g = e.selectedPassengersListLen,
                w = e.returnMoney,
                C = e.totalPrice,
                Z = e.alipayCouponUsable,
                b = e.avaliableCouponNum,
                x = e.unReceiveCouponToken,
                y = e.orderReduceData,
                P = e.toCouponList,
                T = e.calculateNum,
                I = e.unSupportCouponInfo,
                k = (0, v.useState)(!1),
                D = (0, d.Z)(k, 2),
                V = D[0],
                B = D[1],
                A = function () {
                  B(!V);
                },
                L = h.preferentialZones,
                S =
                  null == L
                    ? void 0
                    : L.find(function (e) {
                        return "商旅返现" === e.floatText;
                      }),
                R = S ? T({ saleType: S.saleType }) : 0,
                X =
                  null == L
                    ? void 0
                    : L.find(function (e) {
                        return (
                          "下单可领150元会员立减券" === e.discountDetailText
                        );
                      }),
                _ = "";
              return (
                c || I || 0 === b
                  ? (_ = "暂无可用优惠券")
                  : b
                  ? (_ = b + "张可用")
                  : x && (_ = "你有优惠券待领取"),
                (0, $.BX)(N.View, {
                  className: "white-box coupon-show",
                  children: [
                    (0, $.BX)(N.View, {
                      class: "coupon-show-hd flex-align-items-center",
                      children: [
                        (0, $.tZ)(N.View, {
                          className: "tit flex-1 font-16 color-2",
                          children: "优惠专区",
                        }),
                        !s &&
                          C > 0 &&
                          r &&
                          (0, $.tZ)(N.View, {
                            className: "txt font-12 color-9",
                            children: "已默认选择最大优惠",
                          }),
                      ],
                    }),
                    (0, $.BX)(N.View, {
                      className: "coupon-show-breviary",
                      children: [
                        (0, $.tZ)(N.View, {
                          className: "label font-14 color-9",
                          children: "已选优惠",
                        }),
                        (0, $.BX)(N.View, {
                          className: "cont flex-align-items-center",
                          id: "AcAY",
                          onClick: A,
                          children: [
                            r &&
                              g > 0 &&
                              (null == l ? void 0 : l.showCouponPrice) &&
                              (0, $.BX)(N.View, {
                                className: "tag orage",
                                children: ["优惠券￥", l.showCouponPrice],
                              }),
                            u > 0 &&
                              g &&
                              (0, $.BX)(N.View, {
                                className: "tag red color-red",
                                children: ["订立减￥", u],
                              }),
                            m + p > 0 &&
                              (null === (t = h.ncd) ||
                              void 0 === t ||
                              null === (n = t.cutDownDetails) ||
                              void 0 === n
                                ? void 0
                                : n.map(function (e, t) {
                                    return (0,
                                    $.BX)(N.View, { className: "tag red color-red", children: ["已减￥", e.ncd.amount * (m + p)] }, t);
                                  })),
                            1 === h.busCoupon &&
                              (0, $.tZ)(N.View, {
                                className: "tag red color-red",
                                children: "赠￥5券",
                              }),
                            (null == w ? void 0 : w.price) > 0 &&
                              (0, $.BX)(N.View, {
                                className: "tag red color-red",
                                children: ["订立返￥", w.price],
                              }),
                            S &&
                              R > 0 &&
                              (0, $.tZ)(N.View, {
                                className: "tag red color-red",
                                children: ""
                                  .concat(S.discountTag, "¥")
                                  .concat(Number(S.floatPrice) * R),
                              }),
                            X &&
                              g > 0 &&
                              (0, $.BX)(N.View, {
                                className: "tag brown",
                                children: [
                                  (0, $.tZ)(N.Image, {
                                    className: "tag-icon",
                                    src: X.discountIcon,
                                  }),
                                  X.discountTag,
                                ],
                              }),
                            null == f
                              ? void 0
                              : f.map(function (e, t) {
                                  return e.discountTag
                                    ? (0, $.tZ)(
                                        N.View,
                                        {
                                          className: "tag red color-red",
                                          children:
                                            e.discountTag ||
                                            e.discountDetailText,
                                        },
                                        t
                                      )
                                    : (0, $.tZ)($.HY, {});
                                }),
                          ],
                        }),
                        (0, $.tZ)(N.Text, {
                          className: "iconfont2 ".concat(
                            V ? "ifont2-collapse" : "ifont2-expand",
                            " expand-icon"
                          ),
                          id: "AcAZ",
                          onClick: A,
                        }),
                      ],
                    }),
                    (0, $.BX)(N.View, {
                      className: "coupon-show-list ".concat(V ? "open" : ""),
                      children: [
                        (0, $.BX)(N.View, {
                          className: "item",
                          id: "AcAa",
                          onClick: P,
                          children: [
                            (0, $.tZ)(N.View, {
                              className: "lbox",
                              children: (0, $.tZ)(N.Image, {
                                src: "https://pic.c-ctrip.com/train/zt/flight/icon-coupon-quan.png",
                                className: "icon",
                              }),
                            }),
                            (0, $.tZ)(N.View, {
                              className: "cont",
                              children: (0, $.BX)(N.View, {
                                className: "lst",
                                children: [
                                  (0, $.tZ)(N.View, {
                                    className: "txt",
                                    children:
                                      C > 0 && r ? l.couponName : "优惠券",
                                  }),
                                  !Z &&
                                    (0, $.tZ)(N.View, {
                                      className: "rbox tgrey",
                                      children: "小程序内暂不支持使用优惠券",
                                    }),
                                  Z &&
                                    (0, $.BX)($.HY, {
                                      children: [
                                        C > 0 && r
                                          ? (0, $.tZ)(N.View, {
                                              className: "rbox color-red",
                                              children:
                                                "-￥" + l.showCouponPrice || 0,
                                            })
                                          : (0, $.tZ)(N.View, {
                                              className: "rbox color-red",
                                              children: _,
                                            }),
                                        (0, $.tZ)(N.Text, {
                                          className: "ifont-arr iconfont",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (null == y ? void 0 : y.length) > 0 &&
                          (0, $.BX)(N.View, {
                            className: "item",
                            children: [
                              (0, $.tZ)(N.View, {
                                className: "lbox",
                                children: (0, $.tZ)(N.Image, {
                                  src: "https://images3.c-ctrip.com/zt/flight/reduce-icon.png",
                                  className: "icon",
                                }),
                              }),
                              (0, $.tZ)(N.View, {
                                className: "cont",
                                children: y.map(function (e, t) {
                                  return (0,
                                  $.BX)(N.View, { className: "lst", children: [(0, $.tZ)(N.View, { className: "txt", children: e.text }), (0, $.tZ)(N.View, { className: "rbox color-red", children: "".concat("student" === e.type ? "" : "-", "￥").concat(e.amount) })] }, t);
                                }),
                              }),
                            ],
                          }),
                        m + p > 0 &&
                          (null === (i = h.ncd) ||
                          void 0 === i ||
                          null === (a = i.cutDownDetails) ||
                          void 0 === a
                            ? void 0
                            : a.map(function (e, t) {
                                return (0,
                                $.BX)(N.View, { className: "item", children: [(0, $.tZ)(N.View, { className: "lbox", children: (0, $.tZ)(N.Image, { src: e.ncd.url, className: "icon" }) }), (0, $.tZ)(N.View, { className: "cont", children: (0, $.BX)(N.View, { className: "lst", children: [(0, $.tZ)(N.View, { className: "txt", children: e.ncd.text }), (0, $.tZ)(N.View, { className: "rbox color-red", children: "￥".concat(e.ncd.amount * (m + p)) })] }) })] }, t);
                              })),
                        null == w || null === (o = w.list) || void 0 === o
                          ? void 0
                          : o.map(function (e, t) {
                              return (0,
                              $.BX)(N.View, { className: "item", children: [(0, $.tZ)(N.View, { className: "lbox", children: (0, $.tZ)(N.Image, { src: "https://images3.c-ctrip.com/zt/flight/return-icon.png", className: "icon" }) }), (0, $.tZ)(N.View, { className: "cont", children: (0, $.BX)(N.View, { className: "lst", children: [(0, $.tZ)(N.View, { className: "txt", children: e.name }), (0, $.BX)(N.View, { className: "rbox color-red", children: ["￥", e.price] })] }) })] }, t);
                            }),
                        1 === h.busCoupon &&
                          (0, $.BX)(N.View, {
                            className: "item",
                            children: [
                              (0, $.tZ)(N.View, {
                                className: "lbox",
                                children: (0, $.tZ)(N.Image, {
                                  src: "https://images3.c-ctrip.com/zt/flight/present-icon.png",
                                  className: "icon",
                                }),
                              }),
                              (0, $.tZ)(N.View, {
                                className: "cont",
                                children: "购票即送机场大巴5元券",
                              }),
                            ],
                          }),
                        S &&
                          R > 0 &&
                          (0, $.BX)(N.View, {
                            className: "item",
                            children: [
                              (0, $.tZ)(N.View, {
                                className: "lbox",
                                children: (0, $.tZ)(N.Image, {
                                  src: "https://images3.c-ctrip.com/zt/flight/return-icon.png",
                                  className: "icon",
                                }),
                              }),
                              (0, $.tZ)(N.View, {
                                className: "cont",
                                children: (0, $.BX)(N.View, {
                                  className: "lst",
                                  children: [
                                    (0, $.tZ)(N.View, {
                                      className: "txt",
                                      children: S.discountDetailText,
                                    }),
                                    (0, $.BX)(N.View, {
                                      className: "rbox color-red",
                                      children: [
                                        "￥",
                                        Number(S.floatPrice) * R,
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        X &&
                          g > 0 &&
                          (0, $.BX)(N.View, {
                            className: "item",
                            children: [
                              (0, $.tZ)(N.View, {
                                className: "lbox",
                                children: (0, $.tZ)(N.Image, {
                                  src: X.discountDetailIcon,
                                  className: "icon",
                                }),
                              }),
                              (0, $.tZ)(N.View, {
                                className: "cont",
                                children: (0, $.tZ)(N.View, {
                                  className: "lst",
                                  children: (0, $.tZ)(N.View, {
                                    className: "txt",
                                    children: X.discountDetailText,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        null == f
                          ? void 0
                          : f.map(function (e, t) {
                              return (0,
                              $.BX)(N.View, { className: "item", children: [(0, $.tZ)(N.View, { className: "lbox", children: (0, $.tZ)(N.Image, { src: e.discountDetailIcon, className: "icon" }) }), (0, $.tZ)(N.View, { className: "cont", children: (0, $.BX)(N.View, { className: "lst", children: [(0, $.tZ)(N.View, { className: "txt", children: e.discountDetailText }), (0, $.BX)(N.View, { className: "rbox color-red", children: ["-￥", e.trulyFavorPrice] })] }) })] }, t);
                            }),
                      ],
                    }),
                  ],
                })
              );
            }),
            We = v.default.memo(function (e) {
              var t = e.integralData,
                n = e.onClose;
              return (0,
              $.BX)(N.View, { children: [(0, $.BX)(N.View, { className: "pop-botm-hd", children: [(0, $.tZ)(N.View, {}), (0, $.tZ)(N.View, { className: "tit", children: "积分兑换规则" }), (0, $.tZ)(N.Text, { className: "ifont-closed iconfont", id: "AcAL", onClick: n })] }), (0, $.tZ)(N.View, { className: "pop-integral-rule", children: (0, $.tZ)(N.View, { className: "txt", children: (0, $.tZ)(ne.ZtRichText, { nodes: t && t.creditExchangeRule }) }) })] });
            }),
            je = function (e) {
              var t = e.integralData;
              (0, I.getCurrentPage)().showCommonDrawer({
                hideTitle: !0,
                hideClose: !0,
                content: function (e) {
                  var n = e.onClose;
                  return (0, $.tZ)(We, { integralData: t, onClose: n });
                },
              });
            },
            Je = v.default.memo(function (e) {
              var t,
                n = e.integralData,
                i = e.onClose,
                a = e.handleIntegralExchangeBtnClick,
                o = (0, v.useState)([]),
                s = (0, d.Z)(o, 2),
                r = s[0],
                c = s[1];
              return (0, $.BX)(N.View, {
                children: [
                  (0, $.BX)(N.View, {
                    className: "pop-botm-hd",
                    children: [
                      (0, $.tZ)(N.View, {}),
                      (0, $.tZ)(N.View, {
                        className: "tit",
                        children: "积分兑换",
                      }),
                      (0, $.tZ)(N.Text, {
                        className: "ifont-closed iconfont",
                        id: "AcAM",
                        onClick: i,
                      }),
                    ],
                  }),
                  (0, $.BX)(N.View, {
                    className: "pop-integral-coupon",
                    children: [
                      (0, $.BX)(N.View, {
                        className:
                          "pop-integral-coupon-hd flex-align-items-center",
                        children: [
                          (0, $.tZ)(N.Icon, { className: "icon-integral" }),
                          (0, $.BX)(N.View, {
                            className: "cont",
                            children: [
                              "可用积分:",
                              (0, $.tZ)(N.Text, {
                                className: "tgold",
                                children: n && n.credit,
                              }),
                            ],
                          }),
                          (0, $.BX)(N.View, {
                            className: "rbox",
                            children: [
                              "1个订单仅可使用1张优惠券",
                              (0, $.tZ)(N.Text, {
                                className: "ifont-detail iconfont",
                                id: "AcAN",
                                onClick: function () {
                                  (0, I.getCurrentPage)().closeCommonDrawer(),
                                    setTimeout(function () {
                                      je({ integralData: n });
                                    }, 50);
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      null == n ||
                      null === (t = n.creditExchangeList) ||
                      void 0 === t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0, $.BX)(
                              N.View,
                              {
                                className:
                                  "integral-coupon flex-align-items-center",
                                children: [
                                  (0, $.BX)(N.View, {
                                    className: "coupon-left flight",
                                    children: [
                                      (0, $.BX)(N.View, {
                                        className: "tit",
                                        children: [
                                          (0, $.tZ)(N.Text, {
                                            className: "strong",
                                            children: e.value,
                                          }),
                                          e.unit,
                                        ],
                                      }),
                                      (0, $.tZ)(N.View, {
                                        className: "txt",
                                        children: e.title,
                                      }),
                                    ],
                                  }),
                                  (0, $.BX)(N.View, {
                                    className: "coupon-box",
                                    children: [
                                      (0, $.tZ)(N.View, {
                                        className: "tit",
                                        children: e.title,
                                      }),
                                      (0, $.tZ)(N.View, {
                                        className: "txt",
                                        children: e.subTitle,
                                      }),
                                      (0, $.tZ)(N.View, {
                                        className: "jifen",
                                        children: e.cost + "积分",
                                      }),
                                    ],
                                  }),
                                  (0, $.tZ)(N.Button, {
                                    className: e.exchangeFlag
                                      ? r[t]
                                        ? "btn-primary"
                                        : "btn-exchange"
                                      : "btn-exchange-disabled",
                                    disabled: !e.exchangeFlag,
                                    id: "AcAO",
                                    onClick: function () {
                                      return (function (e) {
                                        var t;
                                        if (!r[e])
                                          return (
                                            null == n ||
                                              null ===
                                                (t = n.creditExchangeList) ||
                                              void 0 === t ||
                                              t.forEach(function (t, n) {
                                                r[n] = e == n;
                                              }),
                                            void c((0, h.Z)(r))
                                          );
                                        a(e);
                                      })(t);
                                    },
                                    children: r[t] ? "确认兑换" : e.buttonText,
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                    ],
                  }),
                ],
              });
            }),
            Ke = v.default.memo(function (e) {
              var t = e.integralData,
                n = e.getPhoneNumberAction,
                i = e.handleIntegralExchangeBtnClick;
              return (0, $.tZ)(N.View, {
                className: "node-isolate-credit-banner",
                children:
                  (null == t ? void 0 : t.banner) &&
                  (0, $.BX)(N.View, {
                    className: "white-box integral-box flex-align-items-center",
                    children: [
                      (0, $.tZ)(N.Image, {
                        className: "icon-integ",
                        src: t.banner.icon,
                      }),
                      (0, $.BX)(N.View, {
                        className: "cont",
                        children: [
                          (0, $.tZ)(N.View, {
                            className: "tit",
                            children: (0, $.tZ)(ne.ZtRichText, {
                              nodes: t.banner.title,
                            }),
                          }),
                          (0, $.BX)(N.View, {
                            className: "txt",
                            children: [
                              t.banner.subTitle,
                              (0, $.tZ)(N.Text, {
                                className: "ifont-detail iconfont",
                                id: "AcAP",
                                onClick: function () {
                                  return je({ integralData: t });
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      0 === t.loginFlag
                        ? (0, $.tZ)(N.Button, {
                            className: "btn-go btn-red",
                            id: "AcAQ",
                            onClick: n,
                            children: t.banner.buttonText,
                          })
                        : (0, $.tZ)(N.Button, {
                            className: "btn-go btn-red",
                            disabled: !t.banner.btnClickFlag,
                            id: "AcAR",
                            onClick: function () {
                              return (function (e) {
                                var t = e.integralData,
                                  n = e.handleIntegralExchangeBtnClick;
                                t.banner.btnClickFlag &&
                                  (0, I.getCurrentPage)().showCommonDrawer({
                                    hideTitle: !0,
                                    hideClose: !0,
                                    content: function (e) {
                                      var i = e.onClose;
                                      return (0, $.tZ)(Je, {
                                        onClose: i,
                                        integralData: t,
                                        handleIntegralExchangeBtnClick: n,
                                      });
                                    },
                                  });
                              })({
                                integralData: t,
                                handleIntegralExchangeBtnClick: i,
                              });
                            },
                            children: t.banner.buttonText,
                          }),
                    ],
                  }),
              });
            }),
            Qe = v.default.memo(function (e) {
              var t,
                n = e.cabin,
                i = (0, v.useState)(!1),
                a = (0, d.Z)(i, 2),
                o = a[0],
                s = a[1];
              return (0, $.tZ)($.HY, {
                children:
                  (null == n || null === (t = n.announcements) || void 0 === t
                    ? void 0
                    : t.length) > 0 &&
                  (0, $.BX)(N.View, {
                    className: "notice-module",
                    children: [
                      n.announcements.map(function (e, t) {
                        return (0,
                        $.BX)(N.View, { className: "notice-item", children: [(0, $.tZ)(N.Text, { className: "color-red", children: "• " }), (0, $.tZ)(ne.ZtRichText, { className: "notice-title", nodes: e.title }), (0, $.tZ)(ne.ZtRichText, { className: "notice-content ".concat(o ? "" : "ellipsis"), nodes: e.content })] }, t);
                      }),
                      !o &&
                        (0, $.BX)(N.View, {
                          className: "more-notice",
                          id: "AcAH",
                          onClick: function () {
                            return s(!0);
                          },
                          children: [
                            "查看更多",
                            (0, $.tZ)(N.Text, {
                              className: "ifont-arr iconfont",
                            }),
                          ],
                        }),
                    ],
                  }),
              });
            }),
            $e = v.default.memo(function (e) {
              var t = e.visible,
                n = e.paymentSteps,
                i = e.tripType,
                a = e.selectedPassengersListLen,
                o = e.stateDesc,
                s = e.paymentProcess;
              return (0, $.tZ)(ne.ZtDrawer, {
                isShowClose: !1,
                show: t,
                children: (0, $.BX)(N.View, {
                  className: "payment-box " + D.default.zxTyStr,
                  style:
                    "height: " +
                    ((2 === i || 3 === i ? 298 : 205) + 25 * a) +
                    "px",
                  id: "AcBL",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                  catchMove: !0,
                  children: [
                    n.map(function (e) {
                      return (0,
                      $.tZ)($.HY, { children: "title" === e.type ? (0, $.tZ)(N.View, { className: "txt", children: e.description }) : (0, $.BX)(N.View, { className: "col flex-align-items-center", children: [(0, $.tZ)(N.View, { className: "cont", children: e.description }), (0, $.tZ)(N.Icon, { className: (e.done ? "icon-suc" : "icon-loading") + " iconfont" })] }) });
                    }),
                    (0, $.BX)(N.View, {
                      className: "payment-loading",
                      children: [
                        (0, $.tZ)(N.View, { className: "t", children: o }),
                        (0, $.tZ)(N.View, {
                          className: "loading-line " + D.default.zxTyStr,
                          children: (0, $.tZ)(N.View, {
                            className: "line",
                            style: "width: " + (s || 0) + "%",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            et = [
              { key: 1, value: "电子凭证" },
              { key: 0, value: "纸质凭证" },
            ],
            tt = [
              { type: 1, title: "个人抬头" },
              { type: 2, title: "公司抬头" },
              { type: 3, title: "行政抬头" },
            ],
            nt = function () {
              (0, I.getCurrentPage)().showCommonDrawer({
                title: "报销凭证寄送说明",
                content:
                  "根据快递公司要求，寄送报销凭证业务需收集收件人的姓名／名称、地址、电话，请确保录入信息真实有效。".concat(
                    D.default.isTieyou ? "铁友" : "智行",
                    "将通过加密等方式保护您录入的地址信息，且在具体业务过程中授权提供给您服务的产品供应商用于寄送报销凭证。"
                  ),
              });
            },
            it = v.default.memo(function (e) {
              var t = e.toggleInvoiceType,
                n = e.invoiceSelectType,
                i = e.invoiceTitle,
                a = e.invoiceTitleInput,
                o = e.invoiceTax,
                s = e.invoiceTaxInput;
              return (0,
              $.BX)($.HY, { children: [(0, $.BX)(N.View, { className: "item", children: [(0, $.tZ)(N.View, { className: "label", children: "抬头类型" }), (0, $.tZ)(N.View, { className: "cont", id: "AcAo", onClick: t, children: (0, $.tZ)(N.View, { className: "txt", children: tt[n - 1].title }) }), (0, $.tZ)(N.Text, { className: "ifont-arr iconfont", id: "AcAp", onClick: t })] }), 1 === n && (0, $.BX)(N.View, { className: "item", children: [(0, $.tZ)(N.View, { className: "label", children: "个人抬头" }), (0, $.tZ)(N.View, { className: "cont", children: (0, $.tZ)(N.Input, { type: "text", placeholder: "请输入发票抬头", className: "input-txt", placeholderClass: "input-plder", value: i, onInput: a, onBlur: a }) })] }), 2 === n && (0, $.BX)(N.View, { className: "item", children: [(0, $.tZ)(N.View, { className: "label", children: "公司抬头" }), (0, $.tZ)(N.View, { className: "cont", children: (0, $.tZ)(N.Input, { type: "text", placeholder: "请输入发票抬头", className: "input-txt", placeholderClass: "input-plder", value: i, onInput: a, onBlur: a }) })] }), 2 === n && (0, $.BX)(N.View, { className: "item", children: [(0, $.tZ)(N.View, { className: "label", children: "税号" }), (0, $.tZ)(N.View, { className: "cont", children: (0, $.tZ)(N.Input, { type: "text", placeholder: "纳税人识别号，必填", className: "input-txt", placeholderClass: "input-plder", value: o, onInput: s, onBlur: s }) })] }), 3 === n && (0, $.BX)(N.View, { className: "item", children: [(0, $.tZ)(N.View, { className: "label", children: "行政机关" }), (0, $.tZ)(N.View, { className: "cont", children: (0, $.tZ)(N.Input, { type: "text", placeholder: "请输入发票抬头", className: "input-txt", placeholderClass: "input-plder", value: i, onInput: a, onBlur: a }) })] })] });
            }),
            at = (0, v.forwardRef)(function (e, t) {
              var n,
                i,
                a,
                o,
                s,
                r,
                c,
                l,
                u = e.invoiceNode,
                h = e.hasSelectedInsurance,
                m = e.switchInvoice,
                p = e.onTabChange,
                g = (0, v.useRef)({}),
                w = (0, v.useState)(
                  null != u && u.electronicInvoice ? u.defaultType : 0
                ),
                Z = (0, d.Z)(w, 2),
                b = Z[0],
                x = Z[1],
                y = (0, v.useState)({
                  invoiceSelectType: 2,
                  invoiceTitle: "",
                  invoiceTax: "",
                  email: "",
                  recipientName: "",
                  recipientAddress: "",
                }),
                P = (0, d.Z)(y, 2),
                T = P[0],
                k = P[1],
                D = T.invoiceSelectType,
                V = T.invoiceTitle,
                B = T.invoiceTax,
                A = T.email,
                L = T.recipientName,
                S = T.recipientAddress;
              (0, v.useImperativeHandle)(t, function () {
                return {
                  getInvoiceData: function () {
                    return (0, f.Z)(
                      (0, f.Z)({}, T),
                      {},
                      { curInvoiceTabKey: b }
                    );
                  },
                };
              });
              var R = function () {
                  !(function (e) {
                    var t = e.invoiceSelectType,
                      n = e.onConfirm;
                    (0, I.getCurrentPage)().showCommonDrawer({
                      hideTitle: !0,
                      hideClose: !0,
                      content: function (e) {
                        var i = e.onClose;
                        return (0, $.tZ)(Ee, {
                          invoiceSelectType: t,
                          onClose: i,
                          onConfirm: n,
                        });
                      },
                    });
                  })({
                    invoiceSelectType: D,
                    onConfirm: function (e) {
                      k(
                        (0, f.Z)(
                          (0, f.Z)({}, T),
                          {},
                          { invoiceSelectType: parseInt(e) }
                        )
                      );
                    },
                  });
                },
                X = function (e) {
                  var t = e.detail.value;
                  k((0, f.Z)((0, f.Z)({}, T), {}, { invoiceTitle: t.trim() }));
                },
                _ = function (e) {
                  var t = e.detail.value;
                  k((0, f.Z)((0, f.Z)({}, T), {}, { invoiceTax: t.trim() }));
                },
                E = function (e) {
                  var t = e.detail.value;
                  k((0, f.Z)((0, f.Z)({}, T), {}, { email: t.trim() }));
                },
                M = function () {
                  (0, I.getCurrentPage)().navigateTo({
                    url: "/pages/flightSecondary/address/address",
                    data: {
                      contactName: L,
                      region: g.current._region || [],
                      address: g.current._address || "",
                    },
                    callback: function (e) {
                      var t = e.contactName,
                        n = e.region,
                        i = e.address;
                      (g.current._region = n),
                        (g.current._address = i),
                        k(
                          (0, f.Z)(
                            (0, f.Z)({}, T),
                            {},
                            {
                              recipientName: t,
                              recipientAddress: ""
                                .concat(n.join(" "), " ")
                                .concat(i),
                              region: n,
                              address: i,
                            }
                          )
                        );
                    },
                  });
                };
              return (0, $.BX)(N.View, {
                className: "white-box cred-box payment-voucher-box ".concat(
                  u.splitExpressNotice ? "" : "no-tip"
                ),
                children: [
                  (0, $.BX)(N.View, {
                    className: "cred-hd flex",
                    children: [
                      (0, $.BX)(N.View, {
                        className: "cont flex-1",
                        children: [
                          (0, $.BX)(N.View, {
                            className: "tit font-16 flex-align-items-center",
                            id: "AcAq",
                            onClick: nt,
                            children: [
                              "报销凭证",
                              (0, $.tZ)(N.Text, {
                                className: "ifont-detail iconfont",
                              }),
                            ],
                          }),
                          u.invoiceSubTitle &&
                            (0, $.tZ)(N.View, {
                              className: "info font-12 color-9",
                              children: u.invoiceSubTitle
                                .split("|")
                                .map(function (e) {
                                  return (0,
                                  $.tZ)(N.View, { className: "item", children: e }, e);
                                }),
                            }),
                        ],
                      }),
                      !u.disabled &&
                        (0, $.tZ)(ne.ZtSwitch, {
                          checked: u.defaultOpen,
                          onChange: m,
                        }),
                    ],
                  }),
                  u.defaultOpen &&
                    !u.disabled &&
                    (0, $.BX)(N.View, {
                      className: "cred-bd",
                      children: [
                        (0, $.tZ)(N.View, { className: "divider-h" }),
                        u.electronicInvoice &&
                          (0, $.BX)(N.View, {
                            className: "cred-type",
                            children: [
                              (0, $.tZ)(N.View, {
                                className: "tit font-16 color-9",
                                children: "凭证类型",
                              }),
                              (0, $.tZ)(N.View, {
                                className: "flex-align-items-center",
                                children: et.map(function (e) {
                                  return (0, $.tZ)(
                                    N.View,
                                    {
                                      id: "AcAr",
                                      onClick: function () {
                                        return (function (e) {
                                          x(e.key),
                                            C().nextTick(function () {
                                              null == p || p();
                                            });
                                        })(e);
                                      },
                                      className:
                                        "item flex-1 flex-center ".concat(
                                          e.key === b ? "active" : ""
                                        ),
                                      children: e.value,
                                    },
                                    e.key
                                  );
                                }),
                              }),
                            ],
                          }),
                        1 === b &&
                          (0, $.BX)(N.View, {
                            className: "book-list",
                            children: [
                              (0, $.BX)(N.View, {
                                className: "item txt-2line",
                                children: [
                                  (0, $.tZ)(N.View, {
                                    className: "label",
                                    children: "凭证清单",
                                  }),
                                  (0, $.tZ)(N.View, {
                                    className: "cont",
                                    children: (0, $.tZ)(N.View, {
                                      className: "txt-more",
                                      children: h
                                        ? null ===
                                            (n = u.electronicInvoiceRemarks) ||
                                          void 0 === n ||
                                          null === (i = n[0]) ||
                                          void 0 === i
                                          ? void 0
                                          : i.remark
                                        : null ===
                                            (a = u.electronicInvoiceRemarks) ||
                                          void 0 === a ||
                                          null === (o = a[0]) ||
                                          void 0 === o
                                        ? void 0
                                        : o.noInsuRemark,
                                    }),
                                  }),
                                ],
                              }),
                              (0, $.tZ)(it, {
                                toggleInvoiceType: R,
                                invoiceSelectType: D,
                                invoiceTitle: V,
                                invoiceTitleInput: X,
                                invoiceTax: B,
                                invoiceTaxInput: _,
                              }),
                              (0, $.BX)(N.View, {
                                className: "item",
                                children: [
                                  (0, $.tZ)(N.View, {
                                    className: "label",
                                    children: "电子邮箱",
                                  }),
                                  (0, $.tZ)(N.View, {
                                    className: "cont",
                                    children: (0, $.tZ)(N.Input, {
                                      type: "text",
                                      placeholder:
                                        "用于接收电子发票，请准确填写",
                                      className: "input-txt",
                                      placeholderClass: "input-plder",
                                      value: A,
                                      onInput: E,
                                      onBlur: E,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        0 === b &&
                          (0, $.BX)(N.View, {
                            className: "book-list",
                            children: [
                              (0, $.BX)(N.View, {
                                className: "item txt-2line",
                                children: [
                                  (0, $.BX)(N.View, {
                                    className: "label",
                                    children: [
                                      "凭证类型",
                                      (0, $.tZ)(N.Text, {
                                        className: "s",
                                        children: "(纸质)",
                                      }),
                                    ],
                                  }),
                                  (0, $.tZ)(N.View, {
                                    className: "cont",
                                    children: (0, $.tZ)(N.View, {
                                      className: "txt-more",
                                      children: h
                                        ? null === (s = u.invoiceRemarks) ||
                                          void 0 === s ||
                                          null === (r = s[0]) ||
                                          void 0 === r
                                          ? void 0
                                          : r.remark
                                        : null === (c = u.invoiceRemarks) ||
                                          void 0 === c ||
                                          null === (l = c[0]) ||
                                          void 0 === l
                                        ? void 0
                                        : l.noInsuRemark,
                                    }),
                                  }),
                                ],
                              }),
                              (0, $.BX)(N.View, {
                                className: "item-special",
                                children: [
                                  (0, $.BX)(N.View, {
                                    className: "_item",
                                    children: [
                                      (0, $.tZ)(N.View, {
                                        className: "label",
                                        children: "配送方式",
                                      }),
                                      (0, $.tZ)(N.View, {
                                        className: "cont",
                                        children: (0, $.tZ)(N.View, {
                                          className: "txt",
                                          children:
                                            u.deliveryType +
                                            " " +
                                            u.deliveryPrice +
                                            "元",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (null == u
                                    ? void 0
                                    : u.deliveryTypeMessage) &&
                                    (0, $.tZ)(N.View, {
                                      className: "item-bottom",
                                      children:
                                        null == u
                                          ? void 0
                                          : u.deliveryTypeMessage,
                                    }),
                                ],
                              }),
                              (0, $.BX)(N.View, {
                                className: "item",
                                children: [
                                  (0, $.tZ)(N.View, {
                                    className: "label",
                                    children: "寄出日期",
                                  }),
                                  (0, $.tZ)(N.View, {
                                    className: "cont",
                                    children: (0, $.tZ)(N.View, {
                                      className: "txt",
                                      children: u.deliveryText,
                                    }),
                                  }),
                                ],
                              }),
                              u.invoiceAlterable &&
                                (0, $.tZ)(it, {
                                  toggleInvoiceType: R,
                                  invoiceSelectType: D,
                                  invoiceTitle: V,
                                  invoiceTitleInput: X,
                                  invoiceTax: B,
                                  invoiceTaxInput: _,
                                }),
                              (0, $.BX)(N.View, {
                                className: "item txt-2line",
                                children: [
                                  (0, $.tZ)(N.View, {
                                    className: "label",
                                    children: "配送地址",
                                  }),
                                  (0, $.tZ)(N.View, {
                                    className: "cont",
                                    id: "AcAs",
                                    onClick: M,
                                    children: (0, $.tZ)(N.View, {
                                      className: "txt",
                                      children: L
                                        ? L + " " + S
                                        : "请填写联系地址",
                                    }),
                                  }),
                                  (0, $.tZ)(N.Text, {
                                    className: "ifont-arr iconfont",
                                    id: "AcAt",
                                    onClick: M,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        u.splitExpressNotice &&
                          (0, $.tZ)(N.View, {
                            className: "cred-tips",
                            children: (0, $.tZ)(N.View, {
                              className: "cred-tips-hd",
                              children: (0, $.tZ)(N.View, {
                                className: "cont",
                                children: (0, $.tZ)(N.View, {
                                  className: "txt color-red",
                                  children: u.splitExpressNotice,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                ],
              });
            }),
            ot = v.default.memo(at),
            st = "protocol-drawer",
            rt = function (e) {
              var t,
                n = e.onClose,
                i = e.onConfirm,
                a = e.cabin;
              return (0, $.BX)(N.View, {
                className: "protocol-drawer-cont flex-1 flex flex-column",
                children: [
                  (0, $.tZ)(N.View, {
                    className: "bd flex-1 flex flex-column",
                    children: (0, $.tZ)(N.ScrollView, {
                      className: "protocol-list flex-1",
                      scrollY: !0,
                      children:
                        null === (t = a.newNoticeContentInfos) || void 0 === t
                          ? void 0
                          : t.map(function (e, t) {
                              return (0, $.tZ)(
                                N.View,
                                {
                                  className: "protocol-item",
                                  id: "AcBD",
                                  onClick: function () {
                                    return (function (e) {
                                      E.Z.twebview({ data: { url: e } });
                                    })(e.url);
                                  },
                                  children: (0, $.BX)(N.View, {
                                    className: "flex-align-items-center",
                                    children: [
                                      (0, $.tZ)(N.View, {
                                        className: "flex-1",
                                        children: e.title,
                                      }),
                                      (0, $.tZ)(N.Text, {
                                        className: "ifont-arr iconfont",
                                      }),
                                    ],
                                  }),
                                },
                                t
                              );
                            }),
                    }),
                  }),
                  (0, $.tZ)(N.View, {
                    className: "botm",
                    children: (0, $.tZ)(N.Button, {
                      className: "confirm-btn",
                      id: "AcBE",
                      onClick: function () {
                        T.Z.sendUbtTrace(
                          "FltWWrite_Agreement_AgreeContinue_click"
                        ),
                          n(),
                          i();
                      },
                      children: "同意协议并继续",
                    }),
                  }),
                ],
              });
            },
            ct = function (e) {
              var t = e.onConfirm,
                n = e.cabin;
              (0, I.getCurrentPage)().showCommonDrawer({
                title: "订票服务协议",
                height: "75vh",
                content: function (e) {
                  var i = e.onClose;
                  return (0, $.tZ)(rt, { onClose: i, onConfirm: t, cabin: n });
                },
                className: st,
              });
            },
            lt = function (e) {
              var t = e.onClose,
                n = e.onConfirm,
                i = e.cabin;
              return (0, $.BX)(N.View, {
                className: "protocol-drawer-cont",
                children: [
                  (0, $.tZ)(N.View, {
                    className: "bd",
                    children: (0, $.tZ)(N.View, {
                      className: "protocol-banner flex-align-items-center",
                      id: "AcBF",
                      onClick: function () {
                        t(),
                          setTimeout(function () {
                            ct({ onConfirm: n, cabin: i });
                          }, 50);
                      },
                      children: (0, $.tZ)(N.View, {
                        className: "flex-1",
                        children: (0, $.tZ)(ne.ZtRichText, {
                          nodes: i.newNoticeText,
                          space: "ensp",
                        }),
                      }),
                    }),
                  }),
                  (0, $.tZ)(N.View, {
                    className: "botm",
                    children: (0, $.tZ)(N.Button, {
                      className: "confirm-btn",
                      id: "AcBG",
                      onClick: function () {
                        t(), n();
                      },
                      children: "同意协议并继续",
                    }),
                  }),
                ],
              });
            },
            dt = v.default.memo(function (e) {
              var t = e.totalPrice,
                n = e.favorablePrice,
                i = e.showPriceDetails,
                a = e.cabin,
                o = e.noticeChecked,
                s = e.handleNoticeChange,
                r = e.togglePriceDetails,
                c = e.agreeAndContinue,
                l = e.handleBookClick,
                d = a.bookBtnIcon;
              return (0, $.BX)(N.View, {
                className: "flt-book-pay-box pay-box",
                children: [
                  (0, $.BX)(N.View, {
                    className: "protocol-banner flex-align-items-center",
                    children: [
                      (0, $.tZ)(N.View, {
                        className: "flex-1",
                        id: "AcBH",
                        onClick: function () {
                          return ct({ onConfirm: c, cabin: a });
                        },
                        children: (0, $.tZ)(ne.ZtRichText, {
                          nodes: a.newNoticeText,
                          space: "ensp",
                        }),
                      }),
                      (0, $.tZ)(N.Text, {
                        className: "checkbox ".concat(
                          o ? "ifont2-checkboxed" : "ifont2-checkbox",
                          " iconfont2"
                        ),
                        id: "AcBI",
                        onClick: function () {
                          T.Z.sendUbtTrace("FltWWrite_BuyNotice_click"), s();
                        },
                      }),
                    ],
                  }),
                  (0, $.BX)(N.View, {
                    className: "flex-align-items-center",
                    children: [
                      (0, $.BX)(N.View, {
                        className: "cont",
                        children: [
                          (0, $.tZ)(N.View, {
                            className: "price color-red",
                            children: t,
                          }),
                          !!d &&
                            t > 0 &&
                            (0, $.tZ)(N.Image, {
                              className: "price-icon",
                              src: d,
                              mode: "heightFix",
                            }),
                          t > 0 &&
                            n > 0 &&
                            !d &&
                            (0, $.tZ)(N.View, {
                              className: "txt color-red",
                              children: "共优惠" + n + "元",
                            }),
                        ],
                      }),
                      (0, $.BX)(N.View, {
                        className: "mid font-12 color-9 " + (i ? "open" : ""),
                        id: "AcBJ",
                        onClick: r,
                        children: [
                          "明细",
                          (0, $.tZ)(N.Text, {
                            className: "ifont-arr iconfont",
                          }),
                        ],
                      }),
                      (0, $.BX)(N.View, {
                        id: "AcBK",
                        onClick: l,
                        className: "form",
                        children: [
                          (0, $.BX)(N.Button, {
                            className: "flex-center flex-column btn-pay",
                            children: [
                              (0, $.tZ)(N.Text, {
                                style: { marginTop: "2rpx" },
                                children: "下一步",
                              }),
                              a.product &&
                                a.product.stock < 10 &&
                                (0, $.tZ)(N.Text, {
                                  className: "btn-notice",
                                  children: "仅剩" + a.product.stock + "张",
                                }),
                            ],
                          }),
                          a.stupi && a.stupi.amount && a.stupi.cashbackText
                            ? !i &&
                              D.default.isWechat &&
                              (0, $.tZ)(N.View, {
                                className: "stu-tag",
                                children: a.stupi.cashbackText,
                              })
                            : a.bargainShareText &&
                              !i &&
                              D.default.isWechat &&
                              (0, $.tZ)(N.View, {
                                className: "cash-tag",
                                children: a.bargainShareText,
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            ut = n(1734),
            ht = v.default.memo(function (e) {
              var t,
                n = e.segment.dtls,
                i =
                  null == n || null === (t = n[0]) || void 0 === t
                    ? void 0
                    : t.split(" ");
              return (0,
              $.tZ)(N.View, { className: "transfer-banner flex-center", children: (0, $.BX)(N.View, { className: "flight-segment-comp transfer-cont flex-align-items-center", children: [i[0] && (0, $.tZ)(N.View, { className: "basic-item", style: "color: #3C5A86;", children: i[0] }), i[1] && (0, $.BX)(N.View, { className: "basic-item", style: "color: #222;", children: ["停留", i[1]] })] }) });
            }),
            mt = v.default.memo(function (e) {
              var t = e.segments,
                n = e.tripType,
                i = e.departTime,
                a = e.onClose;
              return (0, $.BX)(N.View, {
                className: "flight-detail-pop-content flex flex-1",
                id: "AcAb",
                onClick: a,
                children: [
                  (0, $.tZ)(N.Image, {
                    className: "expand-icon",
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/zhangkai_icon.png",
                  }),
                  (0, $.tZ)(N.View, {
                    className: "seg-wrap flex-1",
                    children: t.map(function (e, t) {
                      return (0, $.tZ)($.HY, {
                        children: e.flights.map(function (a, o) {
                          return (0,
                          $.BX)($.HY, { children: [(0, $.BX)(N.View, { className: "flight-detail", children: [(0, $.tZ)(se, { flight: a, segIndex: t, index: o, tripType: n, isTransfer: e.flights.length > 1, inPop: !0 }), (0, $.tZ)(ut.Z, { flight: a, departTime: i, className: "book-flight-segment", fromPage: "book" })] }), e.flights.length > 1 && 0 == o && (0, $.tZ)(ht, { segment: e })] });
                        }),
                      });
                    }),
                  }),
                ],
              });
            }),
            pt = v.default.memo(function (e) {
              var t,
                n = e.newGuestGrowthData;
              return (0, $.tZ)(N.View, {
                className: "common-component-flight-ticket-step",
                children: (0, $.BX)(N.View, {
                  className: "pop-coupon-newguest",
                  children: [
                    (0, $.tZ)(N.View, {
                      className: "pop-coupon-newguest-hd",
                      children: (0, $.tZ)(N.View, { className: "tit" }),
                    }),
                    (0, $.BX)(N.View, {
                      className: "pop-coupon-newguest-bd",
                      children: [
                        (0, $.tZ)(N.View, {
                          className: "newguest-status",
                          children:
                            null == n ||
                            null === (t = n.coupons) ||
                            void 0 === t
                              ? void 0
                              : t.map(function (e, t) {
                                  return (0,
                                  $.BX)(N.View, { className: "item ".concat(0 === e.status ? "cur" : ""), children: [(0, $.BX)(N.View, { className: "coupon", children: [(0, $.tZ)(N.View, { className: "price", children: e.price }), (0, $.tZ)(N.View, { className: "txt", children: e.title })] }), (0, $.tZ)(N.Icon, { className: q.vL[e.status] }), (0, $.tZ)(N.View, { className: "tit", children: e.remark })] }, t);
                                }),
                        }),
                        (0, $.tZ)(N.View, {
                          className: "newguest-info",
                          children: (0, $.tZ)(ne.ZtRichText, {
                            className: "txt",
                            nodes: n.rules,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            ft = function (e) {
              var t = e.newGuestGrowthData;
              (0, I.getCurrentPage)().showCommonDrawer({
                hideTitle: !0,
                content: function () {
                  return (0, $.tZ)(pt, { newGuestGrowthData: t });
                },
              });
            },
            gt = v.default.memo(function (e) {
              var t,
                n = e.newGuestGrowthData;
              return (0, $.BX)(N.View, {
                className: "node-isolate-new-guest",
                children: [
                  n &&
                    !1 === n.valid &&
                    (0, $.tZ)(N.View, {
                      className: "white-box coupon-box",
                      children: (0, $.BX)(N.View, {
                        className: "coupon-hd flex-align-items-center",
                        id: "AcAu",
                        onClick: function () {
                          return ft({ newGuestGrowthData: n });
                        },
                        children: [
                          (0, $.tZ)(N.Image, {
                            src: "https://pic.c-ctrip.com/train/zt/flight/icon-coupon-quan.png",
                            className: "img-ico",
                          }),
                          (0, $.tZ)(N.View, {
                            className: "cont",
                            children: "机票新客下单返券",
                          }),
                          (0, $.tZ)(N.View, {
                            className: "rbox tgrey",
                            children: "不可使用",
                          }),
                          (0, $.tZ)(N.Text, {
                            className: "ifont-arr iconfont",
                          }),
                        ],
                      }),
                    }),
                  (null == n || null === (t = n.coupons) || void 0 === t
                    ? void 0
                    : t.length) > 0 &&
                    (0, $.BX)(N.View, {
                      id: "new-ticket-step",
                      className: "white-box newguest-box",
                      children: [
                        (0, $.BX)(N.View, {
                          className: "newguest-hd flex-align-items-center",
                          children: [
                            (0, $.tZ)(N.View, {
                              className: "tit",
                              children: "机票新客下单返券",
                            }),
                            (0, $.BX)(N.View, {
                              className: "rbox flex-align-items-center",
                              id: "AcAv",
                              onClick: function () {
                                return ft({ newGuestGrowthData: n });
                              },
                              children: [
                                "详情",
                                (0, $.tZ)(N.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, $.tZ)(N.View, {
                          className: "newguest-bd flex",
                          children: n.coupons.map(function (e, t) {
                            return (0,
                            $.BX)(N.View, { className: "item ".concat(0 === e.status ? "cur" : ""), children: [(0, $.BX)(N.View, { className: "tag", children: [e.price, "元优惠券"] }), (0, $.tZ)(N.Icon, { className: q.vL[e.status] }), (0, $.tZ)(N.View, { className: "tit", children: e.remark })] }, t);
                          }),
                        }),
                      ],
                    }),
                ],
              });
            }),
            vt = v.default.memo(function (e) {
              var t = e.newGuestTipShow,
                n = e.newGuestGrowthData,
                i = e.handleScrollTo;
              return (0,
              $.tZ)(N.View, { className: "node-isolate-newguest-tip", children: t && (null == n ? void 0 : n.btnTxt) && (0, $.BX)(N.View, { className: "newguest-fixed flex-align-items-center", id: "AcAw", onClick: i, children: [(0, $.tZ)(N.Icon, { className: "icon-down" }), (0, $.tZ)(ne.ZtRichText, { className: "txt", nodes: n.btnTxt, id: "AcAx", onClick: i })] }) });
            }),
            Nt = n(43653),
            wt = function (e) {
              var t = e.type,
                n = e.data,
                i = e.onConfirm,
                a = e.onCancel,
                o = [
                  "https://images3.c-ctrip.com/ztrip/zhixingios/baoxianshoumai/img_ct.png",
                  "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/baoxianfuceng/qinzic.png",
                  "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/baoxianfuceng/laorenc.png",
                  "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/baoxianfuceng/duorenc.png",
                ][t || q.qe.COVER],
                s = [
                  "https://images3.c-ctrip.com/ztrip/zhixingios/baoxianshoumai/baoxian_tc_02.png",
                  "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/baoxianfuceng/qzz.png",
                  "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/baoxianfuceng/lrz.png",
                  "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/baoxianfuceng/drz.png",
                ][t || q.qe.COVER],
                r = { backgroundImage: "url(".concat(o, ")") },
                c = n || {},
                l = c.features,
                d = c.bottomText;
              return (0, $.BX)(N.View, {
                className: "detainment-cont",
                style: r,
                children: [
                  (0, $.BX)(N.View, {
                    className: "ins-info-card",
                    children: [
                      (0, $.tZ)(N.View, {
                        className: "ins-tit",
                        children: (0, $.tZ)(ne.ZtRichText, {
                          nodes: "您尚未添加出行保障",
                        }),
                      }),
                      (0, $.tZ)(N.View, {
                        className: "ins-features",
                        children:
                          null == l
                            ? void 0
                            : l.map(function (e, t) {
                                return null != e && e.isUpgrade
                                  ? (0, $.BX)(
                                      N.View,
                                      {
                                        className: "upgrade-feat flex",
                                        children: [
                                          (0, $.tZ)(N.Image, {
                                            className: "feat-icon",
                                            mode: "heightFix",
                                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/baoxianshoumai/baoxian_sj.png",
                                          }),
                                          (0, $.tZ)(N.View, {
                                            className: "feat-txt-wrap",
                                            children: (0, $.tZ)(ne.ZtRichText, {
                                              className: "feat-txt",
                                              nodes: e.content,
                                            }),
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  : (0, $.BX)(
                                      N.View,
                                      {
                                        className:
                                          "ins-feat flex-align-items-center",
                                        children: [
                                          (0, $.tZ)(N.Image, {
                                            className: "feat-icon",
                                            src: "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/icon_ts.png",
                                          }),
                                          (0, $.tZ)(ne.ZtRichText, {
                                            className: "feat-txt",
                                            nodes: e.content,
                                          }),
                                        ],
                                      },
                                      t
                                    );
                              }),
                      }),
                      (0, $.tZ)(N.Image, {
                        className: "ins-feat-tag",
                        mode: "heightFix",
                        src: s,
                      }),
                    ],
                  }),
                  (0, $.tZ)(N.View, { className: "ins-tips", children: d }),
                  (0, $.BX)(N.View, {
                    className: "btn-box flex",
                    children: [
                      (0, $.tZ)(N.Button, {
                        className: "cancel-btn flex-1 btn flex-center",
                        id: "AcAV",
                        onClick: a,
                        children: "否",
                      }),
                      (0, $.tZ)(N.Button, {
                        className: "confirm-btn flex-1 btn flex-center",
                        id: "AcAW",
                        onClick: i,
                        children: "是",
                      }),
                    ],
                  }),
                  (0, $.tZ)(N.View, {
                    className: "btm-txt flex-center",
                    id: "AcAX",
                    onClick: function () {
                      null != n &&
                        n.url &&
                        E.Z.twebview({ data: { url: n.url } });
                    },
                    children: "投保须知>",
                  }),
                ],
              });
            },
            Ct = function (e) {
              var t = e.isHainanAirline,
                n = e.noticeContent,
                i = (0, v.useState)(!1),
                a = (0, d.Z)(i, 2),
                o = a[0],
                s = a[1];
              if (!n) return (0, $.tZ)($.HY, {});
              var r =
                t && !o
                  ? (function (e) {
                      return "<div style='display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp: 1; overflow: hidden;white-space: nowrap;text-overflow: ellipsis'>".concat(
                        e,
                        "</div>"
                      );
                    })(n)
                  : n;
              return (0, $.BX)(N.View, {
                className: "anti-fraud-notice",
                children: [
                  (0, $.tZ)(N.View, {
                    className: "notice-cont",
                    onClick: function () {
                      s(!1);
                    },
                    children: (0, $.tZ)(ne.ZtRichText, { nodes: r }),
                  }),
                  t &&
                    !o &&
                    (0, $.BX)(N.View, {
                      className: "expand",
                      onClick: function () {
                        return s(!0);
                      },
                      children: [
                        "查看更多",
                        (0, $.tZ)(N.Text, {
                          className: "iconfont2 ifont2-zhankai_linea_12",
                        }),
                      ],
                    }),
                ],
              });
            };
          (function (e) {
            (e[(e.INVALID_PASSPORT = 0)] = "INVALID_PASSPORT"),
              (e[(e.UNSUPPORT_PASSPORT = 1)] = "UNSUPPORT_PASSPORT"),
              (e[(e.MINIAPP_UNSUPPORT = 2)] = "MINIAPP_UNSUPPORT");
          })(he || (he = {})),
            (function (e) {
              (e[(e.INVALID_NAME = 0)] = "INVALID_NAME"),
                (e[(e.CNNAME_INVALID_LENGTH = 1)] = "CNNAME_INVALID_LENGTH");
            })(me || (me = {})),
            (function (e) {
              (e[(e.INVALID_TYPE = 0)] = "INVALID_TYPE"),
                (e[(e.UNSUPPORT_TYPE = 1)] = "UNSUPPORT_TYPE");
            })(pe || (pe = {}));
          var Zt,
            bt = {
              getIsUniquePassport: function (e) {
                var t = e.selectedPassengers;
                return {
                  type: "UNIQUE_PASSPORT",
                  validate: function (e) {
                    return !t.some(function (t) {
                      return t.passportCode === e.passportCode;
                    });
                  },
                };
              },
              getHasMobile: function () {
                return {
                  type: "MOBILE",
                  validate: function (e) {
                    return !!e.mobile;
                  },
                };
              },
              getIdentityWhiteListCheck: function (e) {
                var t = e.whiteIdentNumLimit;
                return {
                  type: "IDENT_WHITELIST",
                  validate: function (e) {
                    return (
                      !(t.length > 0) ||
                      t.some(function (t) {
                        var n;
                        return null == e ||
                          null === (n = e.passportCode) ||
                          void 0 === n
                          ? void 0
                          : n.startsWith(t);
                      })
                    );
                  },
                };
              },
              getIdentNumLimitCheck: function (e) {
                var t = e.identNumLimit;
                return {
                  type: "IDENT_BLACKLIST",
                  validate: function (e) {
                    return !t.some(function (t) {
                      var n;
                      return null === (n = e.passportCode) || void 0 === n
                        ? void 0
                        : n.startsWith(t);
                    });
                  },
                };
              },
              getPassengerMaxLimit: function (e) {
                var t = e.selectedPassengers,
                  n = void 0 === t ? [] : t,
                  i = e.max;
                return {
                  type: "MAX_PASSENGER",
                  validate: function () {
                    return !i || n.length < i;
                  },
                };
              },
              getStockCheck: function (e) {
                var t = e.selectedPassengers,
                  n = e.stock;
                return {
                  type: "STOCK_CHECK",
                  validate: function () {
                    return !(n && t.length === n);
                  },
                };
              },
              getENNameCheck: function () {
                return {
                  type: "EN_NAME_CHECK",
                  validate: function (e) {
                    var t =
                      ((null == e ? void 0 : e.passengerENFirstName) || "") +
                      ((null == e ? void 0 : e.passengerENLastName) || "");
                    return (
                      !["回乡证", "台胞证"].includes(e.passportType || "") ||
                      !!t
                    );
                  },
                };
              },
              getPassportTypeCheck: function (e) {
                var t = e.supportedIdType;
                return {
                  type: "PASSPORT_TYPE",
                  validate: function (e) {
                    if (!e.passportType || 0 == e.passportType.length)
                      return {
                        validated: !1,
                        validateInfo: { failType: he.INVALID_PASSPORT },
                      };
                    var n = (function (e) {
                        return e && 0 != e.length
                          ? e
                              .map(function (e) {
                                var t = U.p9.filter(function (t) {
                                  return t.code == e;
                                });
                                if (t.length > 0) return t[0];
                              })
                              .filter(function (e) {
                                return e;
                              })
                          : U.p9;
                      })(t),
                      i =
                        null == n
                          ? void 0
                          : n.some(function (t) {
                              return t.name == e.passportType;
                            });
                    if (!i)
                      return {
                        validated: !1,
                        validateInfo: {
                          failType: he.UNSUPPORT_PASSPORT,
                          failInfo: "该航班不支持".concat(
                            e.passportType,
                            "购票"
                          ),
                        },
                      };
                    return (i = [
                      "身份证",
                      "护照",
                      "台胞证",
                      "回乡证",
                      "军人证",
                      "港澳通行证",
                      "户口簿",
                      "出生证明",
                      "港澳台居民居住证",
                    ].some(function (t) {
                      return t === e.passportType;
                    }))
                      ? { validated: !0 }
                      : {
                          validated: !1,
                          validateInfo: {
                            failType: he.MINIAPP_UNSUPPORT,
                            failInfo: "当前不支持".concat(
                              e.passportType,
                              "购票,请重新编辑"
                            ),
                          },
                        };
                  },
                };
              },
              getIdCodeCheck: function () {
                return {
                  type: "ID_CODE",
                  validate: function (e) {
                    return R.Z.isValidIdCode(e.passportType, e.passportCode);
                  },
                };
              },
              getNameCheck: function () {
                return {
                  type: "PASSENGER_NAME",
                  validate: function (e) {
                    return (
                      !!(0, U.r1)(e) ||
                      (e.passengerName && !(0, U.Cd)(e.passengerName)
                        ? {
                            validated: !1,
                            validateInfo: {
                              failType: me.CNNAME_INVALID_LENGTH,
                              failInfo: "姓名字数需要大于等于两个字",
                            },
                          }
                        : {
                            validated: !1,
                            validateInfo: {
                              failType: me.INVALID_NAME,
                              failInfo:
                                e.passengerName + "姓名不正确,请重新编辑",
                            },
                          })
                    );
                  },
                };
              },
              getBirthdayCheck: function () {
                return {
                  type: "PASSENGER_BIRTHDAY",
                  validate: function (e) {
                    return (
                      "身份证" == e.passportType ||
                      !!e.passengerBirth ||
                      !!new Date(e.passengerBirth)
                    );
                  },
                };
              },
              getPassengerTypeCheck: function (e) {
                var t = e.supportPsgerType;
                return {
                  type: "PASSENGER_TYPE",
                  validate: function (e) {
                    return e.passengerType
                      ? !(
                          null == t ||
                          !t.some(function (t) {
                            return t == e.passengerType;
                          })
                        ) || {
                          validated: !1,
                          validateInfo: {
                            failType: pe.UNSUPPORT_TYPE,
                            failInfo:
                              "抱歉，该价格不支持购买" + e.passengerType,
                          },
                        }
                      : {
                          validated: !1,
                          validateInfo: {
                            failType: pe.INVALID_TYPE,
                            failInfo: "无效的乘客类型,请重新编辑",
                          },
                        };
                  },
                };
              },
              getAgeLimitCheck: function (e) {
                var t = e.supportedAge,
                  n = e.flightStartDate;
                return {
                  type: "AGE_LIMITED",
                  validate: function (e) {
                    if (t) {
                      var i = [];
                      Array.isArray(t) || (i = t.split(","));
                      var a = "该航班仅支持".concat(
                        i.join("周岁，"),
                        "周岁年龄段乘客购票"
                      );
                      if (
                        !i.some(function (t) {
                          var i = t.split("-");
                          return (0, U.se)(e.passengerBirth, i[0], i[1], n);
                        })
                      )
                        return { validated: !1, validateInfo: { failInfo: a } };
                    }
                    return { validated: !0 };
                  },
                };
              },
              getPassengerInfoCheck: function () {
                return {
                  type: "PASSENGER_INFO",
                  validate: function (e) {
                    return (0, U.Kq)(e);
                  },
                };
              },
              getCardTimeLimited: function (e) {
                var t = e.flightStartDate;
                return {
                  type: "CARD_TIME_LIMITED",
                  validate: function (e) {
                    return !(
                      y.Z.isNeedCardTimeLimitField(
                        null == e ? void 0 : e.passportType
                      ) &&
                      t &&
                      _()(null == e ? void 0 : e.cardTimeLimit).diff(
                        _()(t),
                        "day"
                      ) < 1
                    );
                  },
                };
              },
              getRoundTripAgeCheck: function (e) {
                var t = e.tripType,
                  n = e.segments,
                  i = e.flightGoDate,
                  a = e.flightReturnDate;
                return {
                  type: "ROUND_TRIP_AGE",
                  validate: function (e) {
                    if (2 === t) {
                      var o = n[1].flights[0].airFullName,
                        s = (0, U.jp)(e, i, a, o);
                      if (s.content) return s.type, !1;
                    }
                    return !0;
                  },
                };
              },
            },
            xt = D.default.isTieyou,
            yt = y.Z.getDateStr(),
            Pt = "网络错误，请稍候再试",
            Tt = "YYYY-MM-DD",
            It = "lastDefaultCheckInfo",
            kt = "defaultCheckNoticeInfo",
            Dt = "closeRecommendCheckCountInfo",
            Vt = (0, V.D8)("enableCheckDupMobile"),
            Bt = { 1: 0, 2: 2, 3: 3, 4: 1, 5: 2 },
            At = {
              ADULT: "成人票",
              CHILD: "儿童票",
              CHILD_AS_ADULT: "儿童转成人",
              BABY: "婴儿票",
            },
            Lt = { couponValue: 0, selectedCoupon: {} },
            St = {
              pageId: xt ? "10650015508" : "10650001976",
              isSelectedByDefaultRecommend: !1,
              defaultCheckRecommendVersion: 0,
              selectAuthedPassengerTipsShowedFlag: !1,
              canDiscountTotalPrice: 0,
              data: {
                isTieyou: xt,
                isLogin: A.ZP.isLogin,
                canUseGetUserProfile: T.Z.canUseGetUserProfile,
                segments: [],
                topBanner: null,
                cabin: {},
                passengersList: [],
                uniquePassengers: [],
                selectedPassengersList: [],
                newPassengerPassportList: [
                  "身份证",
                  "护照",
                  "台胞证",
                  "回乡证",
                  "军人证",
                  "港澳通行证",
                  "户口簿",
                  "出生证明",
                  "港澳台居民居住证",
                ],
                contactDetail: { passengerName: "", passportCode: "" },
                antiFraudContent: "",
                totalPrice: 0,
                returnMoney: {},
                advantages: null,
                pureAdvantages: null,
                preferentialZoneFavors: [],
                mbr: null,
                extras: [
                  { type: "HotelCouponFlag", token: "0" },
                  {
                    type: "HotelPayText",
                    token: "推荐使用, 可获得50元酒店优惠券",
                  },
                ],
                isShowHotelDrawer: !1,
                bargainLimitNotice: {},
                unReceiveCouponToken: null,
                unReceiveCouponParmas: {},
                newGuestGrowthData: null,
                newGuestTipTop: 0,
                newGuestTipShow: !0,
                selectPassengerText: "",
                openInsureModule: !1,
                mainPassengerList: [],
                orderReduceData: [],
                orderReducePrice: 0,
                bottomNoticeContent: [],
                noticeChecked: !1,
                noticeIsShake: !1,
                hasSelectedInsurance: !1,
                alipayCouponUsable: (0, V.TA)(),
                hotelTip: "",
                hotelInfo: null,
                hotelRoomList: [],
                selectedRoomId: "",
                roomNumber: 1,
                dayCount: 0,
                passengerModuleTipType: "",
                passengerModuleTips: "",
                hasPickup: !1,
                showType: "",
                identNumLimit: [],
                dptName: "",
                arrName: "",
                showPriceDetails: !1,
                hideInsuranceDetaiment:
                  (0, V.D8)("hideInsuranceDetaiment") || !1,
                paymentSteps: [],
                unSupportCouponInfo: null,
              },
              tripType: 0,
              segments: [],
              requestParams: null,
              recommendPassengers: [],
              cabinQuantity: 1,
              query: null,
              onLoad: function (e) {
                var t,
                  n,
                  i = this;
                this.setData({ isLogin: A.ZP.isLogin });
                var a = e.cabinQuantity,
                  o = void 0 === a ? "1" : a,
                  s = e.data || {},
                  r = s.cabinDetail,
                  c = s.segments,
                  l = s.query,
                  d = s.requestParams,
                  u = r || {},
                  h = u.type,
                  m = u.antiFraudContent,
                  p = u.topBanner,
                  f = Bt[h] || 0;
                console.log("----cabinDetail----", r);
                var v,
                  N = "",
                  w = 0;
                (v = _()(
                  G.Z.formatDateWithSlash(c[0].flights[0].dptTime)
                ).format(Tt)),
                  (2 !== parseInt(f) && 3 !== parseInt(f)) ||
                    (N = _()(
                      G.Z.formatDateWithSlash(c[1].flights[0].dptTime)
                    ).format(Tt));
                var Z,
                  b = (0, g.Z)(c);
                try {
                  for (b.s(); !(Z = b.n()).done; ) {
                    w += Z.value.flights.length;
                  }
                } catch (e) {
                  b.e(e);
                } finally {
                  b.f();
                }
                var x = r.mbr;
                if (x) {
                  var P,
                    I,
                    k =
                      null == r ||
                      null === (P = r.appendProductNode) ||
                      void 0 === P ||
                      null === (I = P.additionalProducts) ||
                      void 0 === I
                        ? void 0
                        : I.find(function (e) {
                            return "MEMBERSHIP" == e.type;
                          });
                  (x.productName = null == k ? void 0 : k.productName),
                    (x.text3 = "立即下单升至"
                      .concat(x.productName, ", 本单起即享机票")
                      .concat(x.productName, "价"));
                }
                var V = (r.xProducts || []).some(function (e) {
                  return "INSURANCE" == e.type;
                });
                if (
                  (1 == c[0].flights.length &&
                    this.setData({
                      dptName: c[0].flights[0].dptName,
                      arrName: c[0].flights[0].arrName,
                    }),
                  (this.tripType = parseInt(f)),
                  (this.cabinQuantity = parseInt(o)),
                  (this.requestParams = d),
                  (this.segments = c),
                  (this.query = l),
                  this.setData(
                    {
                      topBanner: p,
                      query: l,
                      tripType: parseInt(f),
                      cabinQuantity: parseInt(o),
                      flightGoDate: v,
                      flightReturnDate: N,
                      antiFraudContent: m,
                      segments: c,
                      segNumber: w,
                      cabin: this.handleCabinData(r),
                      mbr: x,
                      identNumLimit:
                        (null == r || null === (t = r.product) || void 0 === t
                          ? void 0
                          : t.inl) || [],
                      whiteIdentNumLimit:
                        (null == r || null === (n = r.product) || void 0 === n
                          ? void 0
                          : n.winl) || [],
                      bargainLimitNotice: r && r.bargainLimitTime,
                      bottomNoticeContent: T.Z.convertLinkRickTextToArray(
                        null == r ? void 0 : r.noticeContent
                      ),
                      hasSelectedInsurance: V,
                      hotelTip: r.hotelTip,
                      unSupportCouponInfo: y.Z.getUnSupportCouponInfo(
                        null == r ? void 0 : r.preferentialZones
                      ),
                    },
                    function () {
                      i.prerenderRefundRule();
                    }
                  ),
                  r.missingHotelInfo &&
                    setTimeout(function () {
                      i.showHotelSoldOutPop();
                    }, 300),
                  r.hotelInfoJson)
                )
                  try {
                    var L = JSON.parse(r.hotelInfoJson),
                      S = Q(L);
                    if (S) {
                      var R = S.checkInDate,
                        X = S.checkOutDate,
                        E = _()(X).diff(_()(R), "day");
                      this.setData({ hotelInfo: L, dayCount: E }),
                        this.getHotelRoomInfo(L);
                    } else this.showHotelSoldOutPop();
                  } catch (e) {
                    console.error(e),
                      G.Z.logJsonParseError({
                        e: e,
                        source: "flight/book/onLoad",
                      }),
                      this.showHotelSoldOutPop();
                  }
                if (
                  (setTimeout(
                    function () {
                      r.advantages &&
                        i.setData({
                          advantages: JSON.parse(JSON.stringify(r.advantages)),
                        }),
                        r.pureAdvantages &&
                          i.setData({
                            pureAdvantages: JSON.parse(
                              JSON.stringify(r.pureAdvantages)
                            ),
                          });
                    },
                    D.default.isWechat ? 50 : 500
                  ),
                  this.getOpenId(),
                  this.doFavCheck(),
                  this.getAvailableCoupon(),
                  this.getPassengers().then(function () {
                    i.handleCheckPassengerByDefault();
                  }),
                  this.getUserInfo(),
                  this.getReturnMoneyList(),
                  this.getIntegralCoupons(),
                  D.default.isWechat && this.getGrowthPlanProgress(),
                  !D.default.isH5 && C().hideShareMenu && C().hideShareMenu(),
                  B.IK.fromPages.includes(
                    "20220708-ztrip-flight-sharing-officer"
                  ))
                ) {
                  var M = B.IK.shareOfficerInfo;
                  this.data.extras.push({
                    type: "shareOfficial",
                    token: null == M ? void 0 : M.shareToken,
                  });
                }
              },
              onReady: function () {
                this.setNavTitle(), this.getContactPhone();
              },
              refContactPhone: function (e) {
                this.contactPhoneRef = e;
              },
              refInvoiceModule: function (e) {
                this.invoiceModuleRef = e;
              },
              refresh: function () {
                var e = this;
                this.requestParams &&
                  ((0, I.showLoading)(),
                  (0, K.rl)(this.requestParams)
                    .then(function (t) {
                      var n,
                        i = t || {},
                        a = i.resultCode,
                        o = i.resultMessage,
                        s = i.data,
                        r = s.segments;
                      try {
                        n = G.Z.handleFlightDataInBook(r);
                      } catch (e) {
                        console.log(e);
                      }
                      1 !== a && (0, I.showModal)(o || "网络异常，请稍后重试"),
                        e.onLoad({
                          data: {
                            cabinDetail: s,
                            segments: n || e.segments,
                            query: e.query,
                            requestParams: e.requestParams,
                          },
                        });
                    })
                    .finally((0, I.hideLoading)()));
              },
              getGrowthPlanProgress: function () {
                var e = this;
                (0, K.DA)().then(function (t) {
                  1 === t.resultCode &&
                    t.data &&
                    e.setData({ newGuestGrowthData: t.data }, function () {
                      C().nextTick(function () {
                        e.getSelectorQuery("#new-ticket-step");
                      });
                    });
                });
              },
              getContactPhone: function () {
                var e,
                  t,
                  n = this.data.selectedPassengersList,
                  i = Me.UT.get();
                1 === (null == n ? void 0 : n.length) && n[0].mobile
                  ? null === (e = this.contactPhoneRef) ||
                    void 0 === e ||
                    e.setValue(G.Z.initSplitFormatPhone(n[0].mobile))
                  : null === (t = this.contactPhoneRef) ||
                    void 0 === t ||
                    t.setValue(G.Z.initSplitFormatPhone(A.ZP.userName || i));
              },
              setNavTitle: function () {
                var e = this.data,
                  t = e.segments,
                  n = void 0 === t ? [] : t,
                  i = e.tripType,
                  a = (n[0] || {}).flights,
                  o = void 0 === a ? [] : a,
                  s = o[0] || {},
                  r = o[1] || {};
                3 === i
                  ? this.setPageTitle("订单填写")
                  : 1 === i
                  ? s.dptName &&
                    r.arrName &&
                    this.setPageTitle(
                      "".concat(s.dptName, " - ").concat(r.arrName)
                    )
                  : s.dptName &&
                    s.arrName &&
                    this.setPageTitle(
                      "".concat(s.dptName, " - ").concat(s.arrName)
                    );
              },
              getUnReceiveCoupon: function () {
                var e = this,
                  t = this.data.segments,
                  n = (void 0 === t ? [] : t)[0].flights,
                  i = (void 0 === n ? [] : n)[0] || {},
                  a = i.dptCode,
                  o = i.arrCode,
                  s = i.dptTime,
                  r = i.flightNo,
                  c = {
                    depCityCode: a,
                    arrCityCode: o,
                    depDate: _()(s).format("YYYY-MM-DD"),
                    flightNo: r,
                  },
                  l = (0, f.Z)({ version: 3, source: "productdetail" }, c);
                this.setData({ unReceiveCouponParmas: c }),
                  (0, L.VE)({ data: l }).then(function (t) {
                    var n = t.resultCode,
                      i = (t.data || {}).couponToken;
                    1 == n && i && e.setData({ unReceiveCouponToken: i });
                  });
              },
              formatOrderReduceData: function (e) {
                var t,
                  n = e.ocd,
                  i = e.mpcd,
                  a = e.fcd,
                  o = e.stupi,
                  s = this.data,
                  r = s.adult,
                  c = void 0 === r ? 0 : r,
                  l = s.adultChild,
                  d = void 0 === l ? 0 : l,
                  u = s.selectedPassengersList,
                  h = s.mbr,
                  m = [];
                if (
                  (n &&
                    0 !== n.amount &&
                    null != u &&
                    u.length &&
                    m.push(
                      (0, f.Z)(
                        (0, f.Z)({}, n),
                        {},
                        {
                          amount: n.amount * (c + d),
                          amountText: "-￥"
                            .concat(n.amount, " x ")
                            .concat(c + d),
                        }
                      )
                    ),
                  null != i &&
                    null !== (t = i.rules) &&
                    void 0 !== t &&
                    t.length)
                ) {
                  var p,
                    g = c + d;
                  (p = i.rules
                    .sort(function (e, t) {
                      return t.minCount - e.minCount;
                    })
                    .find(function (e) {
                      return g >= e.minCount;
                    })),
                    T.Z.isEmptyObject(p) ||
                      m.push({
                        text: p.text,
                        amount: p.cutdownPrice,
                        amountText: "-￥".concat(p.cutdownPrice),
                      });
                }
                a &&
                  0 !== a.amount &&
                  m.push(
                    (0, f.Z)(
                      (0, f.Z)({}, a),
                      {},
                      { amountText: "-￥".concat(a.amount) }
                    )
                  ),
                  o &&
                    0 !== o.amount &&
                    u.length &&
                    m.push(
                      (0, f.Z)(
                        (0, f.Z)({}, o),
                        {},
                        {
                          type: "student",
                          amount: o.amount * u.length,
                          amountText: "-￥"
                            .concat(o.amount, " x ")
                            .concat(u.length),
                        }
                      )
                    ),
                  h &&
                    this.isMemberShipSelected() &&
                    m.push({
                      text: h.text1,
                      type: "MEMBERSHIP",
                      amount: h.amount,
                    });
                var v = m
                  .map(function (e) {
                    return e.amount;
                  })
                  .reduce(function (e, t) {
                    return e + t;
                  }, 0);
                this.setData({ orderReducePrice: v }),
                  this.setData({ orderReduceData: m });
              },
              handleCabinData: function (e) {
                var t = e.passengerFillingNote,
                  n = e.appendProductNode,
                  i = T.Z.getEllipsisRichText(t),
                  a = e.product,
                  o = a.apr,
                  s = a.cpr,
                  r = a.bpr,
                  c = [];
                o >= 0 && c.push("成人票"),
                  s > 0 && c.push("儿童票"),
                  r > 0 && c.push("婴儿票");
                var l = n || {},
                  d = l.additionalProducts,
                  u = l.showTexts,
                  h =
                    null == d
                      ? void 0
                      : d.findIndex(function (e) {
                          return e.selected;
                        }),
                  m = h > -1;
                m && (d[h].bundling = !0);
                var p =
                  u &&
                  u.map(function (e) {
                    return (0,
                    f.Z)((0, f.Z)({}, e), {}, { content: G.Z.convertAppTextToHtmlStr(e.content) });
                  });
                return (0, f.Z)(
                  (0, f.Z)({}, e),
                  {},
                  {
                    passengerFillingNote: i,
                    supportPsgerType: c,
                    appendProductNode: (0, f.Z)(
                      (0, f.Z)({}, n),
                      {},
                      { isBundling: m, additionalProducts: d, showTexts: p }
                    ),
                  }
                );
              },
              isNeedDoCheckByDefault: function () {
                var e = this.tripType;
                return !![0, 1].includes(e);
              },
              isSameRouteAsLast: function (e) {
                var t = e.lastDepart,
                  n = e.lastArrive,
                  i = this.getDepartAndArrive(),
                  a = i.departCity,
                  o = i.arriveCity;
                return a == t && o == n;
              },
              isNeedDoDefaultCheckRecommend: function () {
                var e = !0,
                  t = Y.ni.getAttr(Dt);
                if (t) {
                  var n = t || {},
                    i = n.count,
                    a = n.lastClose;
                  e = i < 2 || _()().diff(_()(a), "day") > 7;
                }
                return e;
              },
              getRecommendPassengers: function () {
                var e = arguments,
                  t = this;
                return (0, p.Z)(
                  (0, m.Z)().mark(function n() {
                    var i, a, o, s, r, c, l, d, u, h, p;
                    return (0, m.Z)().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (i = e.length > 0 && void 0 !== e[0] ? e[0] : []),
                              (a = t.data.passengersList),
                              (o = t.getDepartAndArrive()),
                              (s = o.departCityCode),
                              (r = o.arriveCityCode),
                              (c = o.departDate),
                              (l = {
                                data: {
                                  departCityCode: s,
                                  arrivalCityCode: r,
                                  departDate: _()(c).format("YYYY-MM-DD"),
                                },
                              }),
                              (n.next = 6),
                              (0, K.cj)(l)
                            );
                          case 6:
                            if (
                              ((d = n.sent),
                              (h = (u = d || {}).resultCode),
                              (p = u.data),
                              !(1 == h && (null == p ? void 0 : p.length) > 0))
                            ) {
                              n.next = 11;
                              break;
                            }
                            return (
                              (t.defaultCheckRecommendVersion = 3),
                              n.abrupt(
                                "return",
                                a.filter(function (e) {
                                  return p.some(function (t) {
                                    return (
                                      t.name == e.name &&
                                      (0, U.wD)(e.passportCode, t.cardNo)
                                    );
                                  });
                                }) || []
                              )
                            );
                          case 11:
                            return (
                              (t.defaultCheckRecommendVersion = 2),
                              n.abrupt(
                                "return",
                                a.filter(function (e) {
                                  return i.includes(e.passengerID);
                                }) || []
                              )
                            );
                          case 13:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
              handleCheckPassengerByDefault: function () {
                var e = this;
                return (0, p.Z)(
                  (0, m.Z)().mark(function t() {
                    var n, i, a, o, s, r, c, l;
                    return (0, m.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (e.isNeedDoCheckByDefault()) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return");
                          case 2:
                            if ((n = Y.ni.getAttr(It))) {
                              t.next = 5;
                              break;
                            }
                            return t.abrupt("return");
                          case 5:
                            if (
                              ((i = e.data.passengersList),
                              (a = n.departCity),
                              (o = n.arriveCity),
                              (s = n.passengers),
                              (r =
                                i.filter(function (e) {
                                  return null == s
                                    ? void 0
                                    : s.includes(e.passengerID);
                                }) || []),
                              !e.isSameRouteAsLast({
                                lastDepart: a,
                                lastArrive: o,
                              }))
                            ) {
                              t.next = 16;
                              break;
                            }
                            if (((t.t0 = r.length > 0), !t.t0)) {
                              t.next = 14;
                              break;
                            }
                            return (t.next = 13), e.validateDefaultPassenger(r);
                          case 13:
                            t.t0 = t.sent;
                          case 14:
                            if (!t.t0) {
                              t.next = 16;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e
                                .doCheckPassengerByDefault({ passengers: r })
                                .then(e.handleDefaultCheckNotice)
                            );
                          case 16:
                            if (!e.isNeedDoDefaultCheckRecommend()) {
                              t.next = 33;
                              break;
                            }
                            return (t.next = 19), e.getRecommendPassengers(s);
                          case 19:
                            if (((t.t1 = t.sent), t.t1)) {
                              t.next = 22;
                              break;
                            }
                            t.t1 = [];
                          case 22:
                            if (((c = t.t1), (t.t2 = c.length > 0), !t.t2)) {
                              t.next = 28;
                              break;
                            }
                            return (t.next = 27), e.validateDefaultPassenger(c);
                          case 27:
                            t.t2 = t.sent;
                          case 28:
                            if (!t.t2) {
                              t.next = 33;
                              break;
                            }
                            (e.recommendPassengers = c),
                              (l = e.getRecommendTips(c)),
                              e.ubtTrace(
                                "FltWWrite_Passenger_RecBubble_exposure",
                                {
                                  PageId: e.pageId,
                                  Version: e.defaultCheckRecommendVersion,
                                }
                              ),
                              e.setData({
                                passengerModuleTips: l,
                                passengerModuleTipType: "check_recommend",
                              });
                          case 33:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              getRecommendTips: function () {
                var e,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                return (null == t ? void 0 : t.length) >= 4
                  ? "快速勾选："
                      .concat(
                        t
                          .slice(0, 2)
                          .map(function (e) {
                            return e.name;
                          })
                          .join("、"),
                        "...等"
                      )
                      .concat(t.length, "人")
                  : "快速勾选：".concat(
                      null !==
                        (e = t
                          .map(function (e) {
                            return e.name;
                          })
                          .join("、")) && void 0 !== e
                        ? e
                        : ""
                    );
              },
              handleDefaultCheckNotice: function () {
                var e = this,
                  t = Y.ni.getAttr(kt),
                  n = !0;
                if (t) {
                  var i = t[t.length - 1];
                  i && (n = t.length < 3 && _()().diff(i, "day") >= 1);
                }
                if (n) {
                  var a = [].concat((0, h.Z)(t || []), [
                    _()().format("YYYY-MM-DD"),
                  ]);
                  Y.ni.setAttr(kt, a),
                    this.setData(
                      {
                        passengerModuleTips: "已为您保留上次乘机人的选择",
                        passengerModuleTipType: "default_check",
                      },
                      function () {
                        setTimeout(function () {
                          e.handlePassengerModuleTipsClose();
                        }, 2500);
                      }
                    );
                }
              },
              doCheckPassengerByDefault: function (e) {
                var t = this;
                return (0, p.Z)(
                  (0, m.Z)().mark(function n() {
                    var i, a, o, s;
                    return (0, m.Z)().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            (i = e.passengers),
                              (a = void 0 === i ? [] : i),
                              (o = t.data.uniquePassengers),
                              (s = o.map(function (e) {
                                return (0, f.Z)(
                                  (0, f.Z)({}, e),
                                  {},
                                  {
                                    selected: a.some(function (t) {
                                      return t.passengerID == e.passengerID;
                                    }),
                                  }
                                );
                              })),
                              a.forEach(function (e) {
                                s.some(function (t) {
                                  return t.passengerID == e.passengerID;
                                }) ||
                                  s.push(
                                    (0, f.Z)(
                                      (0, f.Z)({}, e),
                                      {},
                                      { selected: !0 }
                                    )
                                  );
                              }),
                              t.setData(
                                {
                                  selectedPassengersList: a,
                                  uniquePassengers: s,
                                },
                                function () {
                                  t.handleSelectedPasChange(),
                                    t.formatUniquePsSort();
                                }
                              );
                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
              validateDefaultPassenger: function (e) {
                var t = this;
                return (0, p.Z)(
                  (0, m.Z)().mark(function n() {
                    var i,
                      a,
                      o,
                      s,
                      r,
                      c,
                      l,
                      d,
                      h,
                      p,
                      f,
                      v,
                      N,
                      w,
                      C,
                      Z,
                      b,
                      x,
                      y,
                      P,
                      T,
                      I,
                      k,
                      D,
                      V,
                      B,
                      A,
                      L,
                      S,
                      R;
                    return (0, m.Z)().wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              (i = t.data),
                                (a = i.whiteIdentNumLimit),
                                (o = i.identNumLimit),
                                (s = i.cabin),
                                (r = s.product),
                                (c = r.stock),
                                (l = r.max),
                                (d = r.card),
                                (h = r.ages),
                                (p = s.supportPsgerType),
                                (f = i.flightGoDate),
                                (v = bt.getIsUniquePassport),
                                (N = bt.getHasMobile),
                                (w = bt.getIdentityWhiteListCheck),
                                (C = bt.getIdentNumLimitCheck),
                                (Z = bt.getPassengerMaxLimit),
                                (b = bt.getStockCheck),
                                (x = bt.getENNameCheck),
                                (y = bt.getPassportTypeCheck),
                                (P = bt.getIdCodeCheck),
                                (T = bt.getNameCheck),
                                (I = bt.getBirthdayCheck),
                                (k = bt.getPassengerTypeCheck),
                                (D = bt.getAgeLimitCheck),
                                (V = bt.getPassengerInfoCheck),
                                (B = bt.getCardTimeLimited),
                                (A = (0, g.Z)(e)),
                                (n.prev = 3),
                                (S = (0, m.Z)().mark(function t() {
                                  var n, i;
                                  return (0, m.Z)().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            (n = L.value),
                                            (i =
                                              e.filter(function (e) {
                                                return (
                                                  e.passengerID !==
                                                  n.passengerID
                                                );
                                              }) || []),
                                            (t.next = 4),
                                            W({
                                              strategies: [
                                                v({ selectedPassengers: i }),
                                                N(),
                                                w({ whiteIdentNumLimit: a }),
                                                C({ identNumLimit: o }),
                                                Z({ max: l }),
                                                b({
                                                  selectedPassengers: i,
                                                  stock: c,
                                                }),
                                                x(),
                                                y({ supportedIdType: d }),
                                                P(),
                                                T(),
                                                I(),
                                                k({ supportPsgerType: p }),
                                                D({
                                                  supportedAge: h,
                                                  flightStartDate: f,
                                                }),
                                                V(),
                                                B({ flightStartDate: f }),
                                              ],
                                              validateObj: n,
                                            })
                                          );
                                        case 4:
                                          if (t.sent.validated) {
                                            t.next = 7;
                                            break;
                                          }
                                          return t.abrupt("return", { v: !1 });
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })),
                                A.s();
                            case 6:
                              if ((L = A.n()).done) {
                                n.next = 13;
                                break;
                              }
                              return n.delegateYield(S(), "t0", 8);
                            case 8:
                              if (((R = n.t0), "object" !== (0, u.Z)(R))) {
                                n.next = 11;
                                break;
                              }
                              return n.abrupt("return", R.v);
                            case 11:
                              n.next = 6;
                              break;
                            case 13:
                              n.next = 18;
                              break;
                            case 15:
                              (n.prev = 15), (n.t1 = n.catch(3)), A.e(n.t1);
                            case 18:
                              return (n.prev = 18), A.f(), n.finish(18);
                            case 21:
                              return n.abrupt("return", !0);
                            case 22:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[3, 15, 18, 21]]
                    );
                  })
                )();
              },
              handlePassengerModuleTipsClose: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "default",
                  t = this.data.passengerModuleTipType;
                "close-btn" === e &&
                  this.ubtTrace("FltWWrite_Passenger_CloseRecBubble_click", {
                    PageId: this.pageId,
                  }),
                  "check_recommend" == t &&
                    this.recordPassengerRecommendFatigueValue(),
                  this.setData({
                    passengerModuleTips: "",
                    passengerModuleTipType: "",
                  });
              },
              handlePassengerModuleTipsClick: function () {
                var e = this;
                if ("check_recommend" === this.data.passengerModuleTipType)
                  return (
                    this.ubtTrace("FltWWrite_Passenger_RecBubble_click", {
                      PageId: this.pageId,
                      Version: this.defaultCheckRecommendVersion,
                    }),
                    this.doCheckPassengerByDefault({
                      passengers: this.recommendPassengers,
                    }).then(function () {
                      e.setData({
                        passengerModuleTipType: "",
                        passengerModuleTips: "",
                      }),
                        (e.isSelectedByDefaultRecommend = !0),
                        e.clearPassengerRecommendFatigueValue();
                    })
                  );
              },
              recordPassengerRecommendFatigueValue: function () {
                var e = (Y.ni.getAttr(Dt) || {}).count,
                  t = void 0 === e ? 0 : e,
                  n = { count: ++t, lastClose: _()().format("YYYY-MM-DD") };
                Y.ni.setAttr(Dt, n);
              },
              clearPassengerRecommendFatigueValue: function () {
                var e = Y.ni.getAttr(Dt),
                  t = (0, f.Z)((0, f.Z)({}, e || {}), {}, { count: 0 });
                Y.ni.setAttr(Dt, t);
              },
              getUnSupportCouponInfo: function (e) {
                var t = e.preferentialZones,
                  n = e.selectedPassengers;
                if (T.Z.isEmptyArray(t)) return null;
                var i =
                  null == t
                    ? void 0
                    : t.find(function (e) {
                        var t;
                        return (
                          e.disableCoupon &&
                          !(
                            (null === (t = e.businessList) || void 0 === t
                              ? void 0
                              : t.length) > 0
                          )
                        );
                      });
                if (!T.Z.isEmptyObject(i))
                  return { type: i.floatType, warningMsg: i.disableCouponTips };
                var a =
                  null == t
                    ? void 0
                    : t.find(function (e) {
                        var t;
                        return (
                          !!(
                            e.disableCoupon &&
                            (null === (t = e.businessList) || void 0 === t
                              ? void 0
                              : t.length) > 0
                          ) &&
                          (
                            (null == n
                              ? void 0
                              : n.filter(function (t) {
                                  var n;
                                  return null === (n = e.businessList) ||
                                    void 0 === n
                                    ? void 0
                                    : n.some(function (e) {
                                        return (
                                          e.name == t.passengerName &&
                                          (0, U.wD)(t.passportCode, e.idCardNo)
                                        );
                                      });
                                })) || []
                          ).length > 0
                        );
                      });
                return T.Z.isEmptyObject(a)
                  ? null
                  : { type: a.floatType, warningMsg: a.disableCouponTips };
              },
              getPassengers: function () {
                var e = this;
                return new Promise(function (t) {
                  (0, L.Hh)({ source: "flight", getPassengerType: 3 })
                    .then(function (n) {
                      console.log(n);
                      var i = n.resultCode,
                        a = n.resultMessage,
                        o = n.commonPassengers || [];
                      if (1 !== i) return e.showCommonDialog(a || Pt);
                      var s = e.handlePassengers(o);
                      e.setData(
                        { isLogin: !0, passengersList: s },
                        function () {
                          t();
                        }
                      );
                    })
                    .catch(function () {
                      t();
                    });
                });
              },
              onPassengersUpdate: function (e, t) {
                var n = this;
                this.setData({ passengersList: e }, function () {
                  n.handleUniquePassengers(e), t && n.handlePasTypeChange(t);
                });
              },
              handlePasTypeChange: function (e) {
                var t = e.passenger.passengerID,
                  n = e.newPassengerID;
                if (t && n && n !== t) {
                  var i = this.data,
                    a = i.passengersList,
                    o = i.uniquePassengers,
                    s = o.findIndex(function (e) {
                      return e.passengerID == t;
                    }),
                    r = o.find(function (e) {
                      return e.passengerID == t;
                    });
                  if (!r) return;
                  var c = a.find(function (e) {
                    return e.passengerID == n;
                  });
                  (c.selected = r.selected),
                    -1 != s &&
                      c &&
                      (o.splice(s, 1, c),
                      this.setData({
                        uniquePassengers: o,
                        selectedPassengersList: o.filter(function (e) {
                          return e.selected;
                        }),
                      }));
                }
              },
              handlePassengers: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = this.data,
                  n = t.flightGoDate,
                  i = t.cabin,
                  a = i.product.spi,
                  o = i.preferentialZones,
                  s = (0, U.Yw)(e, {
                    flightGoDate: n,
                    spi: a,
                    preferentialZones: o,
                  }),
                  r = this.getPasValidateParams(),
                  c = (0, U.RR)(s, r);
                return this.handleUniquePassengers(c), c;
              },
              handleUniquePassengers: function (e) {
                var t = this;
                if (0 == this.data.selectedPassengersList.length) {
                  var n,
                    i = [],
                    a = (0, g.Z)(e);
                  try {
                    var o = function () {
                      var e = n.value,
                        t = i.findIndex(function (t) {
                          return t.name === e.name;
                        });
                      -1 == t && e.mobile && i.push(e),
                        t > -1 &&
                          "身份证" === e.passportType &&
                          i.splice(t, 1, e);
                    };
                    for (a.s(); !(n = a.n()).done; ) o();
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                  return (
                    0 == i.length && i.push(e[0]),
                    void this.setData({
                      uniquePassengers: i.slice(0, D.default.isWechat ? 2 : 5),
                    })
                  );
                }
                var s,
                  r = (0, h.Z)(this.data.uniquePassengers),
                  c = [],
                  l = (0, g.Z)(r);
                try {
                  var d = function () {
                    var t = s.value,
                      n = e.find(function (e) {
                        return e.passengerID == t.passengerID;
                      });
                    n &&
                      c.push(
                        (0, f.Z)((0, f.Z)({}, n), {}, { selected: t.selected })
                      );
                  };
                  for (l.s(); !(s = l.n()).done; ) d();
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
                if (c.length < 2) {
                  var u = e.find(function (e) {
                    return !c.some(function (t) {
                      return t.name == e.name;
                    });
                  });
                  c.push((0, f.Z)((0, f.Z)({}, u), {}, { selected: !1 }));
                }
                this.setData(
                  {
                    uniquePassengers: c,
                    selectedPassengersList: c.filter(function (e) {
                      return e.selected;
                    }),
                  },
                  function () {
                    Vt &&
                      r.some(function (e) {
                        return e.duplicateMobile;
                      }) &&
                      t.validateDupAdultPasMobile();
                  }
                );
              },
              togglePassengerSelect: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = t.passenger,
                  i = t.index,
                  a = this.data,
                  o = a.uniquePassengers,
                  s = a.selectedPassengersList,
                  r = (0, h.Z)(o),
                  c = !n.selected,
                  l = r.find(function (e) {
                    return e.passengerID == n.passengerID;
                  }),
                  d = function () {
                    (l.selected = c),
                      c &&
                        e.ubtTrace("FltWWrite_Passenger_Tick_click", {
                          PageId: e.pageId,
                          Rank: i + 1,
                        });
                    var t = o.filter(function (e) {
                      return e.selected;
                    });
                    e.setData(
                      { selectedPassengersList: t, uniquePassengers: r },
                      function () {
                        e.handleSelectedPasChange();
                      }
                    );
                  };
                if (c) {
                  var u = this.getPasValidateParams(),
                    m = (0, U.$4)({
                      validateParams: u,
                      passenger: l,
                      selectedPassengers: s,
                      updateMobileCallback: d,
                      toEditPassenger: function (t) {
                        var n = t.passenger;
                        e.toEditPassenger.call(e, n);
                      },
                    });
                  if (!m) return;
                }
                d();
              },
              handleSelectedPasChange: function () {
                var e = this.data,
                  t = e.selectedPassengersList,
                  n = e.passengerModuleTipType,
                  i = e.passengerModuleTips,
                  a = e.cabin,
                  o = a.minorsNoticeContent,
                  s = a.noticeContent,
                  r = e.contactDetail;
                !r.passengerName &&
                  !r.passportCode &&
                  t.length > 0 &&
                  this.setData({
                    contactDetail: {
                      passengerName: t[0].passengerName,
                      passportCode: t[0].passportCode,
                    },
                  });
                var c = t.findIndex(function (e) {
                  return (
                    "儿童票" === e.passengerType || "婴儿票" === e.passengerType
                  );
                });
                i && n && this.handlePassengerModuleTipsClose(),
                  this.setData({
                    bottomNoticeContent:
                      c > -1
                        ? T.Z.convertLinkRickTextToArray(o)
                        : T.Z.convertLinkRickTextToArray(s),
                  }),
                  this.isSelectedByDefaultRecommend &&
                    (this.isSelectedByDefaultRecommend = !1),
                  this.recordSelectedPassenger(),
                  this.adjustHotelRoomNumber(),
                  this.formatSelectedText(),
                  this.getContactPhone(),
                  this.calculatePrice();
              },
              getDepartAndArrive: function () {
                var e = this.segments || [],
                  t = ((0, d.Z)(e, 1)[0] || {}).flights,
                  n = void 0 === t ? [] : t,
                  i = n[0],
                  a = n[n.length - 1];
                return {
                  departDate: (null == i ? void 0 : i.dptTime) || "",
                  departCity: (null == i ? void 0 : i.dptName) || "",
                  departCityCode: (null == i ? void 0 : i.dptCode) || "",
                  arriveDate: (null == i ? void 0 : i.arrTime) || "",
                  arriveCity: (null == a ? void 0 : a.arrName) || "",
                  arriveCityCode: (null == a ? void 0 : a.arrCode) || "",
                };
              },
              recordSelectedPassenger: function () {
                var e = this.data.selectedPassengersList;
                if (this.isNeedDoCheckByDefault()) {
                  var t = this.getDepartAndArrive(),
                    n = {
                      departCity: t.departCity,
                      arriveCity: t.arriveCity,
                      passengers: e.map(function (e) {
                        return e.passengerID;
                      }),
                    };
                  Y.ni.setAttr(It, n);
                }
              },
              adjustHotelRoomNumber: function () {
                var e = this.data,
                  t = e.selectedPassengersList,
                  n = e.roomNumber,
                  i = e.hotelInfo,
                  a = t.length;
                i &&
                  a < n &&
                  n > 1 &&
                  ((0, I.showToast)("房间数不可超过乘机人数"),
                  this.setData({ roomNumber: a }));
              },
              formatUniquePsSort: function () {
                var e = this.data.uniquePassengers,
                  t =
                    null == e
                      ? void 0
                      : e.filter(function (e) {
                          return e.selected;
                        }),
                  n =
                    null == e
                      ? void 0
                      : e.filter(function (e) {
                          return !e.selected;
                        }),
                  i = [].concat((0, h.Z)(t), (0, h.Z)(n));
                this.setData({
                  uniquePassengers: t.length > 2 ? t : i.slice(0, 2),
                });
              },
              formatSelectedText: function () {
                var e = this.data.selectedPassengersList,
                  t = 0,
                  n = 0,
                  i = 0,
                  a = "";
                null != e &&
                  e.length &&
                  ((t = e.filter(function (e) {
                    return "成人票" === e.passengerType;
                  }).length),
                  (n = e.filter(function (e) {
                    return "儿童票" === e.passengerType;
                  }).length),
                  (i = e.filter(function (e) {
                    return "婴儿票" === e.passengerType;
                  }).length)),
                  (a += ""
                    .concat(t > 0 ? "".concat(t, "成人 ") : "")
                    .concat(n > 0 ? "".concat(n, "儿童 ") : "")
                    .concat(i > 0 ? "".concat(i, "婴儿 ") : "")),
                  this.setData({
                    selectPassengerText: a ? a.substring(0, a.length - 1) : a,
                  });
              },
              getPasValidateParams: function () {
                var e = this.data,
                  t = e.cabin,
                  n = t.product,
                  i = n.stock,
                  a = n.max,
                  o = n.ages,
                  s = n.card,
                  r = n.spi,
                  c = t.supportPsgerType,
                  l = e.flightGoDate,
                  d = e.flightReturnDate,
                  u = e.segments,
                  h = e.identNumLimit;
                return {
                  whiteIdentNumLimit: e.whiteIdentNumLimit,
                  identNumLimit: h,
                  max: a,
                  stock: i,
                  supportPsgerType: c,
                  card: s,
                  ages: o,
                  spi: r,
                  flightGoDate: l,
                  tripType: e.tripType,
                  segments: u,
                  flightReturnDate: d,
                  onBackAction: this.onBackAction.bind(this),
                };
              },
              openAllPassenger: function () {
                var e = this.data,
                  t = e.passengersList,
                  n = e.selectedPassengersList,
                  i = e.cabin.token,
                  a = e.tripType,
                  o = this.getPasValidateParams(),
                  s =
                    (0 === a || 1 === a) && A.ZP.isLogin && D.default.isWechat;
                this.ubtTrace("FltWWrite_Passenger_AddPassenger_click", {
                  PageId: this.pageId,
                }),
                  (0, z.oS)({
                    passengers: t,
                    selectedPassengers: n,
                    validateParams: o,
                    token: i,
                    showInvite: s,
                    sort: !0,
                    onPassengersUpdate: this.onPassengersUpdate.bind(this),
                    onConfirm: this.confirmAllPassengers.bind(this),
                  });
              },
              confirmAllPassengers: function (e) {
                var t = this,
                  n = e.selectedPassengers,
                  i = this.data.uniquePassengers.map(function (e) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      {
                        selected: n.some(function (t) {
                          return t.passengerID == e.passengerID;
                        }),
                      }
                    );
                  });
                n.forEach(function (e) {
                  i.some(function (t) {
                    return t.passengerID == e.passengerID;
                  }) || i.push((0, f.Z)((0, f.Z)({}, e), {}, { selected: !0 }));
                }),
                  this.setData(
                    { selectedPassengersList: n, uniquePassengers: i },
                    function () {
                      t.handleSelectedPasChange(), t.formatUniquePsSort();
                    }
                  );
              },
              handlePassengerEditClick: function (e) {
                var t = e.passenger;
                this.toEditPassenger(t);
              },
              toEditPassenger: function (e) {
                var t = this;
                console.log(e);
                var n = this.data.flightGoDate;
                this.navigateTo({
                  url: "/pages/flight/flightPassenger/flightPassenger",
                  data: { passenger: e, flightDepartDate: n },
                  callback: function (e) {
                    (0, I.showLoading)(),
                      t
                        .getPassengers()
                        .then(function () {
                          t.handlePasTypeChange(e);
                        })
                        .finally(function () {
                          return (0, I.hideLoading)();
                        });
                  },
                });
              },
              savePassenger: function (e, t) {
                var n = this,
                  i = e.newPassenger,
                  a = e.flightGoDate,
                  o = i.passengerName,
                  s = i.passengerENLastName,
                  r = i.passengerENFirstName,
                  c = i.passengerBirth,
                  l = i.passportType,
                  d = i.passportCode,
                  u = i.passengerPhone;
                if ("护照" === l) {
                  if (!s || !r)
                    return this.showCommonDialog("请输入乘客证件姓名！");
                } else if (!o)
                  return this.showCommonDialog("请输入乘客证件姓名！");
                if (!d) return this.showCommonDialog("请输入乘客证件号码！");
                if (!R.Z.isValidIdCode(l, d))
                  return this.showCommonDialog("无效的证件号");
                if ("身份证" !== l && "户口簿" !== l && !c)
                  return this.showCommonDialog("请输入出生日期！");
                var h =
                  "身份证" === l || "户口簿" === l
                    ? R.Z.getBirthFromCode(d)
                    : c;
                if (this.checkPassportByAge(l, h, a)) {
                  if (null == u || !u.trim())
                    return this.showCommonDialog("手机号码不能为空");
                  if (null != u && "" !== u && !R.Z.isMobile(u))
                    return this.showCommonDialog("手机号码有误，请重填");
                  var m = (0, U.PX)({ passengerBirth: h }, a);
                  if (h === yt) return this.showCommonDialog("无效的生日日期");
                  if ("未满14天" === m)
                    return this.showCommonDialog(
                      "航班起飞当日，未满14天的婴儿，请至航空公司柜台申请购买机票"
                    );
                  ("婴儿票" !== m && "儿童票" !== m) ||
                    this.showCommonDialog(
                      "本人是订单中未成年人的监护人或已征得其监护人同意，允许平台以提供产品或服务为目的，处理未成年人信息。"
                    );
                  var p = {
                    commonPassengerInfo: {
                      PassengerID: "",
                      passengerName: o,
                      passengerType: m,
                      passengerENFirstName: r,
                      passengerENLastName: s,
                      passportType: l,
                      passportCode: d,
                      middleName: "",
                      mobile: u,
                      passengerBirth: h,
                    },
                  };
                  "护照" === l
                    ? (p.commonPassengerInfo.passengerName = "")
                    : ((p.commonPassengerInfo.passengerENFirstName = ""),
                      (p.commonPassengerInfo.passengerENLastName = "")),
                    this.savePassengerRequest(p, function () {
                      var e;
                      t &&
                        (null === (e = n.contactPhoneRef) ||
                          void 0 === e ||
                          e.setValue(G.Z.initSplitFormatPhone(u)));
                    });
                }
              },
              savePassengerRequest: function (e, t) {
                var n = this;
                (0, I.showLoading)(),
                  console.log(e),
                  (0, L.uK)(e)
                    .then(
                      (function () {
                        var e = (0, p.Z)(
                          (0, m.Z)().mark(function e(i) {
                            var a, o;
                            return (0, m.Z)().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((a = i.resultCode),
                                      (o = i.resultMessage),
                                      1 === a)
                                    ) {
                                      e.next = 4;
                                      break;
                                    }
                                    return (
                                      console.debug(o || Pt),
                                      e.abrupt(
                                        "return",
                                        n.showCommonDialog(o || Pt)
                                      )
                                    );
                                  case 4:
                                    return (e.next = 6), n.getPassengers();
                                  case 6:
                                    t && t();
                                  case 7:
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
                    .catch(function (e) {
                      n.showCommonDialog(e || Pt);
                    })
                    .finally(function () {
                      (0, I.hideLoading)();
                    });
              },
              checkPassportByAge: function (e, t, n) {
                var i = new Date(t.replace(/\-/g, "/")).getTime(),
                  a = n ? new Date(n.replace(/\-/g, "/")) : new Date();
                a.setFullYear(a.getFullYear() - 2);
                var o = n ? new Date(n.replace(/\-/g, "/")) : new Date();
                return (
                  o.setFullYear(o.getFullYear() - 16),
                  "户口簿" === e && i <= o
                    ? (this.showCommonDialog("年龄已满16岁，不允许使用户口簿"),
                      !1)
                    : !(
                        "出生证明" === e &&
                        i <= a &&
                        (this.showCommonDialog(
                          "年龄已满2岁，不允许使用出生证明"
                        ),
                        1)
                      )
                );
              },
              getUserInfo: function () {
                var e = this;
                D.default.isH5 ||
                  (T.Z.canUseGetUserProfile
                    ? (0, I.getUserProfileInfo)({ getOnly: !0 })
                        .then(function (t) {
                          var n = t.nickName,
                            i = t.avatarUrl;
                          e.setData({ wxNickName: n, wxAvatar: i });
                        })
                        .catch(function () {})
                    : C().getSetting({
                        success: function (t) {
                          t.authSetting["scope.userInfo"] &&
                            C().getUserInfo({
                              success: function (t) {
                                var n = t.userInfo,
                                  i = n.nickName,
                                  a = n.avatarUrl;
                                e.setData({ wxNickName: i, wxAvatar: a });
                              },
                              fail: function () {},
                            });
                        },
                      }));
              },
              toInsuranceInstruction: function () {
                var e = this,
                  t = this.data.cabin,
                  n = t.appendProductNode,
                  i = n.additionalProducts,
                  a = n.productDescription,
                  o = i.findIndex(function (e) {
                    return e.bundling;
                  }),
                  s = i[o],
                  r = s.selected,
                  c = s.descriptionUrl,
                  l = s.productName,
                  d = s.type;
                this.navigateTo({
                  url: "/pages/flightSecondary/insurance/insurance?productName=".concat(
                    l
                  ),
                  data: {
                    isSelected: r,
                    productDescription: a,
                    descriptionUrl: c,
                    type: d,
                  },
                  callback: function (a) {
                    var s = a.selected;
                    (i[o].selected = s),
                      e.setData({
                        cabin: (0, f.Z)(
                          (0, f.Z)({}, t),
                          {},
                          {
                            appendProductNode: (0, f.Z)(
                              (0, f.Z)({}, n),
                              {},
                              { additionalProducts: i }
                            ),
                          }
                        ),
                      }),
                      e.calculatePrice();
                  },
                });
              },
              toAdditionalProductDetail: function (e) {
                var t = e.descriptionUrl,
                  n = e.productName;
                "INS" !== e.type
                  ? t && T.Z.commonNavigator(t.replace(/http:\/\//, "https://"))
                  : E.Z.twebview({
                      data: {
                        url: t.replace(/http:\/\//, "https://"),
                        title: n,
                      },
                    });
              },
              toggleAdditionalProduct: function (e) {
                var t = this.data.cabin,
                  n = t.appendProductNode,
                  i = n.additionalProducts;
                if (e.noInsur)
                  i.forEach(function (e) {
                    e.bundling || (e.selected = !1);
                  });
                else {
                  var a = 0,
                    o = i.find(function (t) {
                      return t.productCode == e.productCode;
                    }),
                    s = o.selected;
                  (o.selected = !s),
                    i.forEach(function (e) {
                      e.selectOrderCount > 0 && (a = e.selectOrderCount);
                    }),
                    (o.selectOrderCount = s ? 0 : a + 1),
                    this.ubtTrace(
                      "FltWWrite_InsuranceSales_ChooseInsurance_click",
                      {
                        PageId: this.pageId,
                        ProductId: o.productCode,
                        ProductName: o.productName,
                        Price: o.price,
                        IsSelect: o.selected ? "Y" : "N",
                      }
                    );
                }
                var r = i.some(function (e) {
                  return e.selected;
                });
                this.setData({
                  cabin: (0, f.Z)(
                    (0, f.Z)({}, t),
                    {},
                    {
                      appendProductNode: (0, f.Z)(
                        (0, f.Z)({}, n),
                        {},
                        { additionalProducts: i }
                      ),
                    }
                  ),
                  hasSelectedInsurance: r,
                }),
                  this.calculatePrice();
              },
              switchInvoice: function (e) {
                console.log("---switchInvoice---", e);
                var t = this.data.cabin,
                  n = t.invoiceNode;
                this.setData({
                  cabin: (0, f.Z)(
                    (0, f.Z)({}, t),
                    {},
                    {
                      invoiceNode: (0, f.Z)(
                        (0, f.Z)({}, n),
                        {},
                        { defaultOpen: e }
                      ),
                    }
                  ),
                }),
                  this.calculatePrice();
              },
              getReturnMoneyList: function () {
                var e = this,
                  t = this.data,
                  n = t.segments,
                  i = void 0 === n ? [] : n,
                  a = t.tripType,
                  o = (i[0] || {}).flights,
                  s = void 0 === o ? [] : o,
                  r = s[0] || {},
                  c = s[1] || {},
                  l = r.dptCode,
                  d = 1 === a ? c.arrCode : r.arrCode,
                  u = _()(G.Z.formatDateWithSlash(s[0].dptTime)).format(Tt);
                if (l && d) {
                  var h = {
                    data: {
                      depCityCode: l,
                      arrCityCode: d,
                      depDate: u,
                      tripType: 3 === a ? 2 : 2 === a ? 1 : 0,
                    },
                  };
                  (0, K.PU)(h)
                    .then(function (t) {
                      if (1 === (t || {}).resultCode) {
                        var n,
                          i = t.data || {};
                        if (
                          null != i &&
                          null !== (n = i.list) &&
                          void 0 !== n &&
                          n.length
                        ) {
                          var a = i.list
                            .map(function (e) {
                              return Number(e.price);
                            })
                            .reduce(function (e, t) {
                              return e + t;
                            }, 0);
                          i.price = a;
                        }
                        e.setData({ returnMoney: i });
                      }
                    })
                    .catch(function () {});
                }
              },
              getAvailableCoupon: function (e) {
                var t = this;
                if ((0, V.TA)() && this.data.isLogin) {
                  (0, L.fl)(
                    { couponType: 200 },
                    { extension: [{ name: "correctVersion", value: 15 }] }
                  )
                    .then(function (n) {
                      var i = n.resultCode,
                        a = n.couponList || [];
                      1 === i &&
                        a.length > 0 &&
                        ((a = y.Z.filterCoupon(a)),
                        t.setData(
                          {
                            couponList: a.map(function (e) {
                              return 3 !== e.deductionStrategyTypeID
                                ? e
                                : (0, f.Z)(
                                    (0, f.Z)({}, e),
                                    {},
                                    {
                                      deductionStrategy:
                                        e.deductionStrategy.sort(function (
                                          e,
                                          t
                                        ) {
                                          return e.startAmount < t.startAmount;
                                        }),
                                    }
                                  );
                            }),
                          },
                          function () {
                            null == e || e();
                          }
                        ));
                    })
                    .finally(function () {
                      t.getUnReceiveCoupon();
                    });
                }
              },
              hasPackage: function () {
                var e = this.data.cabin.xProducts,
                  t = void 0 === e ? [] : e;
                return !(
                  null == t ||
                  !t.some(function (e) {
                    return "PACKAGE" == e.type;
                  })
                );
              },
              hasInsurance: function () {
                var e = this.data.cabin.appendProductNode.additionalProducts;
                return !!(void 0 === e ? [] : e).some(function (e) {
                  return e.selected && "INS" === e.type;
                });
              },
              getPassengersBriefInfo: function () {
                var e = this.data.selectedPassengersList;
                return (
                  (null == e
                    ? void 0
                    : e.map(function (e) {
                        return {
                          passengerName: e.passengerName,
                          passportCode: e.passportCode,
                        };
                      })) || []
                );
              },
              toCouponList: function () {
                var e = this;
                if (this.data.alipayCouponUsable) {
                  var t = this.data,
                    n = t.selectedCoupon,
                    i = void 0 === n ? {} : n,
                    a = t.isLogin,
                    o = t.isSelectedCouponAvailable,
                    s = t.selectedPassengersList,
                    r = t.unReceiveCouponParmas,
                    c = (t.cabin || {}).preferentialZones,
                    l = s.length > 0;
                  if (!a)
                    return this.doLogin(function () {
                      e.getPassengers(),
                        e.getIntegralCoupons(),
                        e.getAvailableCoupon(),
                        e.toCouponList();
                    });
                  var d = this.hasPackage(),
                    u = this.hasInsurance(),
                    h = this.getPassengersBriefInfo();
                  this.navigateTo({
                    url: "/pages/flightSecondary/coupon/coupon?couponType=200&couponCode=".concat(
                      (o && l && i.couponCode) || ""
                    ),
                    data: {
                      correctVersion: 15,
                      totalPrice: this.totalPriceBeforeDiscount,
                      couponParams: r,
                      mbrSelected: this.isMemberShipSelected(),
                      isSpringNewGuest: this.isSpringNewGuest(),
                      hasPackage: d,
                      hasInsurance: u,
                      unSupportCouponInfo: this.getUnSupportCouponInfo({
                        preferentialZones: c,
                        selectedPassengers: s,
                      }),
                      selectedPassengers: h,
                    },
                    callback: function (t) {
                      if (!t)
                        return (
                          (e._userSelectedCouponForce = !0),
                          e.clearCoupon(),
                          void e.calculatePrice()
                        );
                      var n = t || {},
                        i = n.selectedCoupon,
                        a = void 0 === i ? {} : i;
                      if (n.updateCoupon)
                        e.getAvailableCoupon(function () {
                          e.calculatePrice();
                        });
                      else if (a.couponPrice)
                        if (l) {
                          var o = e.checkCouponAvailable({
                            selectedCoupon: a,
                            fee: e.totalPriceBeforeDiscount,
                          });
                          o.couponValue > 0 &&
                            ((e._userSelectedCouponForce = !0),
                            e.setData(
                              {
                                isSelectedCouponAvailable: !0,
                                selectedCoupon: (0, f.Z)(
                                  (0, f.Z)({}, o.selectedCoupon),
                                  {},
                                  { showCouponPrice: o.couponValue }
                                ),
                              },
                              function () {
                                e.calculatePrice();
                              }
                            ));
                        } else (0, I.showToast)("请先选择乘客");
                    },
                  });
                }
              },
              getIntegralCoupons: function () {
                var e = this;
                if (D.default.isWechat) {
                  (0, K.uv)({ version: 0 }).then(function (t) {
                    var n = (t || {}).resultCode,
                      i = t.data || {};
                    if (1 === n && i.banner) {
                      var a = i.credit,
                        o = i.banner,
                        s = i.loginFlag,
                        r = i.creditExchange || {},
                        c =
                          r.ruleTip ||
                          "1. 仅限购买国内机票产品时，使用积分兑换优惠券；<br/>2. 积分兑换比例为300积分=3元优惠券，500积分=5元优惠券，1000积分=10元优惠券；<br/>3. 积分兑换所得的优惠券有效期为30天，仅可抵扣机票票面价，需票面价大于优惠券抵扣金额时方可使用；<br/>4. 同一用户每天最多可使用积分兑换1次优惠券；<br/>5. 使用积分兑换优惠券后，已消耗的积分概不退还；<br/>6. 使用积分兑换优惠券的订单若产生退票，已消耗的积分概不退换。",
                        l = r.couponList || [];
                      e.setData({
                        integralData: {
                          credit: a,
                          banner: (0, f.Z)(
                            (0, f.Z)({}, o),
                            {},
                            { title: G.Z.convertAppTextToHtmlStr(o.title) }
                          ),
                          creditExchangeList: l,
                          creditExchangeRule: c,
                          loginFlag: s,
                        },
                      });
                    }
                  });
                }
              },
              handleIntegralExchangeBtnClick: function (e) {
                var t = this,
                  n = {
                    code: this.data.integralData.creditExchangeList[e].code,
                    businessType: "flight",
                  };
                (0, S.U6)(n).then(function (e) {
                  e && 1 == e.resultCode
                    ? ((0, I.showToast)("兑换优惠券成功"),
                      t.getIntegralCoupons(),
                      t.closeCommonDrawer(),
                      t.getAvailableCoupon(function () {
                        t.calculatePrice();
                      }))
                    : (0, I.showToast)(e.resultMessage || "兑换失败");
                });
              },
              calculatePassengerNum: function (e) {
                var t,
                  n = 0,
                  i = 0,
                  a = 0,
                  o = 0,
                  s = this.data.selectedPassengersList,
                  r = (0, g.Z)(s);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var c = t.value;
                    "成人票" === c.passengerType && "成人票" === c.ticketType
                      ? n++
                      : "儿童票" === c.passengerType
                      ? "成人票" === c.ticketType
                        ? a++
                        : i++
                      : "婴儿票" === c.passengerType && o++;
                  }
                } catch (e) {
                  r.e(e);
                } finally {
                  r.f();
                }
                this.setData({ adult: n, adultChild: a, child: i, baby: o }, e);
              },
              doCalculatePrice: function () {
                var e,
                  t,
                  n,
                  i = this,
                  a = this.data,
                  o = a.selectedPassengersList,
                  s = a.cabin,
                  r = s.product,
                  c = s.appendProductNode,
                  l = s.invoiceNode,
                  d = s.ncd,
                  u = s.xProducts,
                  h = void 0 === u ? [] : u,
                  m = s.mpcd,
                  p = s.ocd,
                  v = s.preferentialZones,
                  N = a.cabin,
                  w = a.mbr,
                  C = a.adult,
                  Z = a.adultChild,
                  b = a.child,
                  x = a.baby,
                  y = a.segNumber,
                  P = [],
                  T = function (e) {
                    var t;
                    return (
                      !!e &&
                      (null === (t = e.businessList) || void 0 === t
                        ? void 0
                        : t.length) > 0
                    );
                  },
                  I = (
                    (null === (e = this.invoiceModuleRef) || void 0 === e
                      ? void 0
                      : e.getInvoiceData()) || {}
                  ).curInvoiceTabKey,
                  k =
                    (null == v
                      ? void 0
                      : v.filter(function (e) {
                          return (
                            e.floatType == q.wu.USER_SUBSIDY || 9 == e.floatType
                          );
                        })) || [],
                  D =
                    (null == k
                      ? void 0
                      : k.filter(function (e) {
                          return T(e);
                        })) || [],
                  V =
                    (null == k
                      ? void 0
                      : k.filter(function (e) {
                          return !T(e);
                        })) || [],
                  B =
                    null == v
                      ? void 0
                      : v.find(function (e) {
                          return q.wu.STUDENT_FAVOR == e.floatType && T(e);
                        }),
                  A =
                    null == v
                      ? void 0
                      : v.filter(function (e) {
                          return [q.wu.CUT_DOWN].includes(e.floatType);
                        }),
                  L = 0,
                  S = 0,
                  R = 0;
                if (C + Z + b + x === 0) return this.setData({ totalPrice: 0 });
                var X = r.atx,
                  _ = r.ctx,
                  E = r.caatx,
                  M = r.btx,
                  O = r.apr,
                  F = C * O + Z * O + b * r.cpr + x * r.bpr;
                n = C * X + Z * E + b * _ + x * M + F;
                var H,
                  z = (c || {}).additionalProducts,
                  Y = void 0 === z ? [] : z,
                  G = (0, g.Z)(Y);
                try {
                  for (G.s(); !(H = G.n()).done; ) {
                    var W = H.value;
                    W.selected &&
                      (S +=
                        W.price * this.calculateNum({ saleType: W.saleType }));
                  }
                } catch (e) {
                  G.e(e);
                } finally {
                  G.f();
                }
                var J = l.defaultOpen,
                  K = l.deliveryPrice;
                J && I === et[1].key && (R = K),
                  (L = n + S + R),
                  null == h ||
                    h.forEach(function (e) {
                      e &&
                        null != e.saleType &&
                        (L +=
                          i.calculateNum({ saleType: e.saleType }) * e.price);
                    });
                var Q = this.data,
                  $ = Q.selectedRoomId,
                  ee = Q.roomNumber;
                if ($ && ee > 0) {
                  var te = this.getHotelPriceDetail();
                  L += te.roomPrice;
                }
                this.totalPriceBeforeDiscount = L;
                var ne = 0,
                  ie = !0,
                  ae = F;
                this.canDiscountTotalPrice = ae;
                var oe = function (e) {
                    var t = Math.min(e, ae);
                    return (
                      (ae = ae.zt_sub(t)),
                      (ne = ne.zt_add(t)),
                      (L = L.zt_sub(t)),
                      (ie = 0 != ae),
                      t
                    );
                  },
                  se = 0,
                  re = {};
                if (this._userSelectedCouponForce) {
                  (re = this.data.selectedCoupon),
                    this.checkCouponAvailable({ selectedCoupon: re, fee: L })
                      .couponValue > 0
                      ? (se = re.showCouponPrice)
                      : this.clearCoupon();
                } else {
                  var ce = this.selectMaxCouponValue(L);
                  (se = ce.couponValue),
                    ((re = ce.selectedCoupon).showCouponPrice = se);
                }
                if (re.couponCode && ie) {
                  var le = oe(re.showCouponPrice);
                  re.showCouponPrice = le;
                }
                if (
                  (this.isMemberShipSelected() && ie && oe(w.amount),
                  D.length > 0 &&
                    ie &&
                    D.forEach(function (e) {
                      var t =
                        (null == o
                          ? void 0
                          : o.filter(function (t) {
                              var n;
                              return null === (n = e.businessList) ||
                                void 0 === n
                                ? void 0
                                : n.some(function (e) {
                                    return (
                                      e.name == t.passengerName &&
                                      (0, U.wD)(t.passportCode, e.idCardNo)
                                    );
                                  });
                            })) || [];
                      if (ie && t.length > 0) {
                        var n = j({
                            saleType: e.saleType,
                            selectedPassengers: t,
                            segNumber: y,
                          }),
                          i = oe(e.floatPrice * n);
                        P.push(
                          (0, f.Z)(
                            (0, f.Z)({}, e),
                            {},
                            { trulyFavorPrice: i, trulyFavorCount: n }
                          )
                        );
                      }
                    }),
                  V.length > 0 &&
                    ie &&
                    V.forEach(function (e) {
                      if (ie) {
                        var t = i.calculateNum({ saleType: e.saleType }),
                          n = oe(e.floatPrice * t);
                        P.push(
                          (0, f.Z)(
                            (0, f.Z)({}, e),
                            {},
                            { trulyFavorPrice: n, trulyFavorCount: t }
                          )
                        );
                      }
                    }),
                  p && p.amount && ie)
                ) {
                  var de = p.amount * (C + Z);
                  oe(de);
                }
                if (
                  null != m &&
                  null !== (t = m.rules) &&
                  void 0 !== t &&
                  t.length &&
                  ie
                ) {
                  var ue = C + Z,
                    he = m.rules.find(function (e) {
                      return ue >= e.minCount;
                    });
                  he && oe(he.cutdownPrice);
                }
                var me = 0;
                if ((d && d.amount && (me = d.amount), B && ie)) {
                  var pe =
                    (null == o
                      ? void 0
                      : o.filter(function (e) {
                          var t;
                          return null === (t = B.businessList) || void 0 === t
                            ? void 0
                            : t.some(function (t) {
                                return (
                                  t.name == e.passengerName &&
                                  (0, U.wD)(e.passportCode, t.idCardNo)
                                );
                              });
                        })) || [];
                  if (pe.length > 0) {
                    var fe = j({
                        saleType: B.saleType,
                        selectedPassengers: pe,
                        segNumber: y,
                      }),
                      ge = oe(B.floatPrice * fe);
                    P.push(
                      (0, f.Z)(
                        (0, f.Z)({}, B),
                        {},
                        { trulyFavorPrice: ge, trulyFavorCount: fe }
                      )
                    );
                  }
                }
                (null == A ? void 0 : A.length) > 0 &&
                  ie &&
                  A.forEach(function (e) {
                    if (ie) {
                      var t = i.calculateNum({ saleType: e.saleType }),
                        n = e.floatPrice * t;
                      oe(n),
                        P.push(
                          (0, f.Z)(
                            (0, f.Z)({}, e),
                            {},
                            { trulyFavorPrice: n, trulyFavorCount: t }
                          )
                        );
                    }
                  }),
                  (ne += me * (C + Z)),
                  this.setData(
                    {
                      totalPrice: L,
                      favorablePrice: ne,
                      preferentialZoneFavors: P,
                      isSelectedCouponAvailable: !!re.couponCode && 0 !== se,
                      selectedCoupon: re,
                    },
                    function () {
                      i.formatOrderReduceData(N), i.getPriceDetails();
                    }
                  );
              },
              calculatePrice: function () {
                var e = this;
                this.calculatePassengerNum(function () {
                  e.doCalculatePrice();
                });
              },
              checkCouponAvailable: function (e) {
                var t = e.selectedCoupon,
                  n = e.fee,
                  i = void 0 === n ? 0 : n,
                  a = this.data,
                  o = a.couponList,
                  s = void 0 === o ? [] : o,
                  r = a.selectedPassengersList,
                  c = (a.cabin || {}).preferentialZones,
                  l = this.hasPackage(),
                  d = this.hasInsurance();
                if (0 === s.length) return Lt;
                var u = y.Z.checkCouponRuleLimit({
                    coupon: t,
                    totalPrice: i,
                    hasPackage: l,
                    hasInsurance: d,
                    selectedPassengers: r,
                    isMemberShip: this.isMemberShipSelected(),
                    unSupportCouponInfo: this.getUnSupportCouponInfo({
                      preferentialZones: c,
                      selectedPassengers: r,
                    }),
                  }),
                  h = y.Z.getCouponPrice(t, i);
                return u ? { couponValue: h, selectedCoupon: t } : Lt;
              },
              isSpringNewGuest: function () {
                var e,
                  t = this.data.cabin.preferentialZones;
                return (
                  (null == t ||
                  null ===
                    (e = t.filter(function (e) {
                      return 9 == e.floatType;
                    })) ||
                  void 0 === e
                    ? void 0
                    : e.length) > 0
                );
              },
              selectMaxCouponValue: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  n = this.data,
                  i = n.couponList,
                  a = void 0 === i ? [] : i,
                  o = n.selectedPassengersList,
                  s = n.cabin,
                  r = s || {},
                  c = r.preferentialZones,
                  l = 0,
                  d = {};
                if (0 === a.length) return Lt;
                var u = this.hasPackage();
                return (
                  a.forEach(function (n) {
                    var i = y.Z.getCouponPrice(n, t),
                      a = y.Z.checkCouponRuleLimit({
                        coupon: n,
                        totalPrice: t,
                        hasPackage: u,
                        hasInsurance: e.hasInsurance(),
                        isMemberShip: e.isMemberShipSelected(),
                        selectedPassengers: o,
                        unSupportCouponInfo: e.getUnSupportCouponInfo({
                          preferentialZones: c,
                          selectedPassengers: o,
                        }),
                      });
                    i > l && a && ((l = i), (d = n));
                  }),
                  { couponValue: l, selectedCoupon: d }
                );
              },
              calculateNum: function (e) {
                var t = e.saleType,
                  n = this.data,
                  i = n.segNumber,
                  a = n.adult,
                  o = void 0 === a ? 0 : a,
                  s = n.adultChild,
                  r = void 0 === s ? 0 : s,
                  c = n.child,
                  l = void 0 === c ? 0 : c,
                  d = n.baby,
                  u = void 0 === d ? 0 : d,
                  h = 0;
                switch (t) {
                  case 1:
                    h = (o + r + l) * i;
                    break;
                  case 2:
                    h = (o + r + l + u) * i;
                    break;
                  case 3:
                    h = (o + r) * i;
                    break;
                  case 4:
                    h = o + r + l;
                    break;
                  case 5:
                    h = o + r + l + u;
                    break;
                  case 6:
                    h = o + r;
                    break;
                  default:
                    h = 1;
                }
                return h;
              },
              togglePriceDetails: function () {
                var e = this,
                  t = this.data,
                  n = t.adult,
                  i = void 0 === n ? 0 : n,
                  a = t.adultChild,
                  o = void 0 === a ? 0 : a,
                  s = t.child,
                  r = void 0 === s ? 0 : s,
                  c = t.baby,
                  l = void 0 === c ? 0 : c,
                  d = t.priceDetails,
                  u = t.showPriceDetails,
                  h = this.getSaveMoneyModuleData();
                if (u) this.closeCommonDrawer();
                else {
                  if (i + o + r + l === 0)
                    return this.showCommonDialog("请先选择乘客");
                  this.showCommonDrawer({
                    hideTitle: !0,
                    content: function () {
                      return (0, $.tZ)(ie, {
                        priceDetail: d,
                        saveMoneyModule: h,
                      });
                    },
                    beforeClose: function () {
                      e.setData({ showPriceDetails: !1 });
                    },
                    className: "price-detail-pop new-protocol",
                  }),
                    this.setData({ showPriceDetails: !0 });
                }
              },
              doFavCheck: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 3;
                if (A.ZP.isLogin) {
                  var n = this.data.cabin.favToken;
                  if (n && 0 !== t) {
                    var i = { data: { favToken: n } };
                    (0, K.TF)(i)
                      .then(function (n) {
                        var i = (n || {}).data,
                          a = (void 0 === i ? {} : i).isFull;
                        if (void 0 !== a && a)
                          return e.showCommonDialog({
                            content: "该价格舱位已售罄",
                            onButtonClick: function () {
                              e.onBackAction();
                            },
                          });
                        e._fav_check_timer = setTimeout(function () {
                          e.doFavCheck(t - 1);
                        }, 3e3);
                      })
                      .catch(function (e) {
                        console.error(e);
                      });
                  } else
                    this._fav_check_timer &&
                      clearTimeout(this._fav_check_timer);
                }
              },
              logForOrderIntercept: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  n = {
                    101: "请先勾选航司协议",
                    102: "请选择乘客",
                    103: "该舱位儿童不可订，请选择其他舱位",
                    104: "该舱位婴儿不可订，请选择其他舱位",
                    105: "儿童必须有成人陪同预订，请添加成人",
                    106: "婴儿必须有成人陪同预订，请添加成人",
                    107: "一位成人只允许带一个婴儿，请继续选择或新增乘机人",
                    108: "一次最多选择${max}位乘客",
                    109: "很抱歉，该航班仅剩n张机票",
                    110: "该产品仅限${min}~${max}人预订",
                    111: "请输入手机号",
                    112: "手机号格式输入不正确",
                    113: "请输入发票抬头",
                    114: "请输入纳税人识别号",
                    115: "请输入正确的纳税人识别号",
                    116: "请输入收件信息",
                    117: "请输入正确的电子邮箱",
                    118: "成人乘机人手机号码重复",
                    119: "若携带儿童和婴儿出行，请返回添加乘机人，确认仅成人出行则继续预订",
                    120: "若携带儿童出行，请返回添加乘机人，确认仅成人出行则继续预订",
                    121: "若携带婴儿出行，请返回添加乘机人，确认仅成人出行则继续预订",
                    122: "出保险弹窗",
                    201: "重复订单拦截，重复订单未支付",
                    202: "重复订单拦截，重复订单已支付",
                    203: "下单失败",
                    301: "其他报错",
                  };
                try {
                  T.Z.insertActionLog("flight_order_intercept", e, n[e] + t);
                } catch (e) {
                  console.log(e);
                }
              },
              agreeAndContinue: function () {
                var e = this;
                this.setData({ noticeChecked: !0 }, function () {
                  e.checkOrderCreateParam() && e.checkChildOrBabyInCompany();
                });
              },
              handleBookClick: function (e) {
                var t = this;
                if (
                  (this.data.showPriceDetails && this.togglePriceDetails(),
                  0 == this.data.selectedPassengersList.length)
                )
                  return (
                    this.showCommonDialog("请选择乘客"),
                    void this.logForOrderIntercept(102)
                  );
                var n = e.detail.formId;
                if (!this.data.noticeChecked)
                  return (
                    this.ubtTrace("FltWWrite_AgreeContinue_exposure", {
                      PageId: this.pageId,
                    }),
                    (function (e) {
                      var t = e.onConfirm,
                        n = e.cabin;
                      (0, I.getCurrentPage)().showCommonDrawer({
                        title: "订票服务协议",
                        content: function (e) {
                          var i = e.onClose;
                          return (0, $.tZ)(lt, {
                            onClose: i,
                            onConfirm: t,
                            cabin: n,
                          });
                        },
                        className: st,
                      });
                    })({
                      onConfirm: function () {
                        t.ubtTrace("FltWWrite_AgreeContinue_click", {
                          PageId: t.pageId,
                        }),
                          t.agreeAndContinue();
                      },
                      cabin: this.data.cabin,
                    }),
                    void this.logForOrderIntercept(101)
                  );
                (this._formId = n),
                  this.checkOrderCreateParam() &&
                    this.checkChildOrBabyInCompany();
              },
              checkOrderCreateParam: function () {
                var e,
                  t = this.data,
                  n = t.selectedPassengersList,
                  i = t.cabin,
                  a = i.product,
                  o = i.invoiceNode,
                  s = t.adult,
                  r = t.adultChild,
                  c = t.child,
                  l = t.baby,
                  d =
                    (null === (e = this.invoiceModuleRef) || void 0 === e
                      ? void 0
                      : e.getInvoiceData()) || {},
                  u = d.invoiceSelectType,
                  h = d.curInvoiceTabKey,
                  m = d.invoiceTitle,
                  p = void 0 === m ? "" : m,
                  f = d.invoiceTax,
                  g = void 0 === f ? "" : f,
                  v = d.email,
                  N = void 0 === v ? "" : v,
                  w = d.recipientName,
                  C = void 0 === w ? "" : w,
                  Z = d.recipientAddress,
                  b = void 0 === Z ? "" : Z,
                  x = n.length,
                  y = this.contactPhoneRef.getValue().replace(/\s/g, ""),
                  P = a.cpr,
                  T = a.bpr,
                  k = a.min,
                  D = a.max,
                  V = a.stock;
                if (!P && c > 0)
                  return (
                    this.showCommonDialog("该舱位儿童不可订，请选择其他舱位"),
                    this.logForOrderIntercept(103),
                    !1
                  );
                if (!T && l > 0)
                  return (
                    this.showCommonDialog("该舱位婴儿不可订，请选择其他舱位"),
                    this.logForOrderIntercept(104),
                    !1
                  );
                if (0 === s && c + r !== 0)
                  return (
                    this.showCommonDialog("儿童必须有成人陪同预订，请添加成人"),
                    this.logForOrderIntercept(105),
                    !1
                  );
                if (0 === s && 0 !== l)
                  return (
                    this.showCommonDialog("婴儿必须有成人陪同预订，请添加成人"),
                    this.logForOrderIntercept(106),
                    !1
                  );
                if (l > s)
                  return (
                    this.showCommonDialog(
                      "一位成人只允许带一个婴儿，请继续选择或新增乘机人"
                    ),
                    this.logForOrderIntercept(107),
                    !1
                  );
                if (x > D)
                  return (
                    this.showCommonDialog("一次最多选择".concat(D, "位乘客")),
                    this.logForOrderIntercept(108),
                    !1
                  );
                if (x > V)
                  return (
                    this.showCommonDialog(
                      "很抱歉，该航班仅剩".concat(V, "张机票")
                    ),
                    this.logForOrderIntercept(109),
                    !1
                  );
                if (x < k || x > D)
                  return (
                    this.showCommonDialog(
                      "该产品仅限".concat(k, "~").concat(D, "人预订")
                    ),
                    this.logForOrderIntercept(110),
                    !1
                  );
                if (!y)
                  return (
                    (0, I.showToast)("请输入手机号"),
                    this.logForOrderIntercept(111),
                    !1
                  );
                if (!R.Z.isMobile(y))
                  return (
                    (0, I.showToast)("手机号格式输入不正确"),
                    this.logForOrderIntercept(112),
                    !1
                  );
                var B = o.defaultOpen,
                  A = o.invoiceAlterable;
                if (B) {
                  if (A) {
                    if (!p)
                      return (
                        this.showCommonDialog("请输入发票抬头"),
                        this.logForOrderIntercept(113),
                        !1
                      );
                    if (2 === u && !g)
                      return (
                        this.showCommonDialog("请输入纳税人识别号"),
                        this.logForOrderIntercept(114),
                        !1
                      );
                    if (2 === u && g && !G.Z.checkInvoiceTax(g))
                      return (
                        this.showCommonDialog("请输入正确的纳税人识别号"),
                        this.logForOrderIntercept(115),
                        !1
                      );
                  }
                  if (h === et[1].key) {
                    if (!C || !b)
                      return (
                        this.showCommonDialog("请输入收件信息"),
                        this.logForOrderIntercept(116),
                        !1
                      );
                  } else {
                    if (!p)
                      return (
                        this.showCommonDialog("请输入发票抬头"),
                        this.logForOrderIntercept(113),
                        !1
                      );
                    if (2 === u && !g)
                      return (
                        this.showCommonDialog("请输入纳税人识别号"),
                        this.logForOrderIntercept(114),
                        !1
                      );
                    if (2 === u && g && !G.Z.checkInvoiceTax(g))
                      return (
                        this.showCommonDialog("请输入正确的纳税人识别号"),
                        this.logForOrderIntercept(115),
                        !1
                      );
                    if (!N || !R.Z.isEmail(N))
                      return (
                        this.showCommonDialog("请输入正确的电子邮箱"),
                        this.logForOrderIntercept(117),
                        !1
                      );
                  }
                }
                return !(
                  Vt &&
                  !this.validateDupAdultPasMobile() &&
                  (this.showCommonDialog({
                    title: "成人乘机人手机号码重复",
                    content:
                      "应航司要求，乘机人乘坐航班需预留手机号码，且同一订单中成人乘机人不可预留相同手机号",
                  }),
                  this.logForOrderIntercept(118),
                  1)
                );
              },
              validateDupAdultPasMobile: function () {
                var e = (0, h.Z)(this.data.uniquePassengers),
                  t = {};
                e.forEach(function (e) {
                  "成人票" == e.passengerType &&
                    e.selected &&
                    (t[e.mobile] ? t[e.mobile]++ : (t[e.mobile] = 1));
                });
                var n = !1;
                return (
                  e.forEach(function (e) {
                    "成人票" == e.passengerType &&
                      e.selected &&
                      (t[e.mobile] > 1
                        ? ((e.duplicateMobile = !0), (n = !0))
                        : (e.duplicateMobile = !1));
                  }),
                  !n || (this.setData({ uniquePassengers: e }), !1)
                );
              },
              checkChildOrBabyInCompany: function () {
                var e = this,
                  t = this.data,
                  n = t.query,
                  i = t.child,
                  a = t.adultChild,
                  o = t.baby,
                  s = n.hasChild,
                  r = void 0 !== s && s,
                  c = n.hasBaby,
                  l = void 0 !== c && c;
                return r && l && i + a + o === 0
                  ? (this.logForOrderIntercept(119),
                    this.showMultiButtonDialog({
                      content:
                        "若携带儿童和婴儿出行，请返回添加乘机人，确认仅成人出行则继续预订",
                      rightButtonName: "继续预订",
                      onRightButtonClick: function () {
                        e.checkAdditionalProducts();
                      },
                      leftButtonName: "添加乘客",
                      onLeftButtonClick: function () {},
                    }))
                  : r && i + a === 0
                  ? (this.logForOrderIntercept(120),
                    this.showMultiButtonDialog({
                      content:
                        "若携带儿童出行，请返回添加乘机人，确认仅成人出行则继续预订",
                      rightButtonName: "继续预订",
                      onRightButtonClick: function () {
                        e.checkAdditionalProducts();
                      },
                      leftButtonName: "添加乘客",
                      onLeftButtonClick: function () {},
                    }))
                  : l && 0 === o
                  ? (this.logForOrderIntercept(121),
                    this.showMultiButtonDialog({
                      content:
                        "若携带婴儿出行，请返回添加乘机人，确认仅成人出行则继续预订",
                      rightButtonName: "继续预订",
                      onRightButtonClick: function () {
                        e.checkAdditionalProducts();
                      },
                      leftButtonName: "添加乘客",
                      onLeftButtonClick: function () {},
                    }))
                  : void this.checkAdditionalProducts();
              },
              getDetainmentType: function () {
                var e = this.data,
                  t = e.child,
                  n = e.adultChild,
                  i = e.baby,
                  a = e.selectedPassengersList,
                  o =
                    null == a
                      ? void 0
                      : a.some(function (e) {
                          return (
                            _()().diff(_()(e.passengerBirth), "years") >= 55
                          );
                        }),
                  s = t + n + i > 0;
                return o && s
                  ? q.qe.WITH_CHILD
                  : o
                  ? q.qe.WITH_ELDER
                  : s
                  ? q.qe.WITH_CHILD
                  : q.qe.COVER;
              },
              checkAdditionalProducts: function () {
                var e = this,
                  t = this.data,
                  n = t.cabin.appendProductNode,
                  i = void 0 === n ? {} : n,
                  a = t.hideInsuranceDetaiment,
                  o = i.additionalProducts,
                  s = void 0 === o ? [] : o,
                  r = s.some(function (e) {
                    return e.selected;
                  }),
                  c = s.findIndex(function (e) {
                    return e.content;
                  });
                if (!r && c > -1 && !this._additionalDetainmentOnce && !a)
                  try {
                    var l,
                      d = s[c].content,
                      u = JSON.parse(d);
                    (function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        t = e.type,
                        n = e.detainmentContent,
                        i = e.onConfirm,
                        a = e.onCancel;
                      if (n) {
                        var o = (0, I.getCurrentPage)();
                        null == o ||
                          o.showCommonDrawer({
                            hideClose: !0,
                            hideTitle: !0,
                            content: function (e) {
                              var o = e.onClose;
                              return (0, $.tZ)(wt, {
                                data: n,
                                type: t,
                                onConfirm: function () {
                                  o(), null == i || i();
                                },
                                onCancel: function () {
                                  o(), null == a || a();
                                },
                              });
                            },
                          });
                      }
                    })({
                      type: this.getDetainmentType(),
                      detainmentContent: {
                        L1: u.L1,
                        L2: u.L2,
                        L3: G.Z.convertAppTextToHtmlStr(u.L3),
                        bg: u.BG,
                        ex: G.Z.convertAppTextToHtmlStr(u.EX),
                        features: u.newFeatures,
                        bottomText: i.bottomText || "",
                        url:
                          (null === (l = s[c]) || void 0 === l
                            ? void 0
                            : l.descriptionUrl) || "",
                      },
                      onCancel: function () {
                        return e.handleDetainmentProductClick();
                      },
                      onConfirm: function () {
                        return e.handleDetainmentProductClick({ type: "add" });
                      },
                    }),
                      (this._additionalDetainmentOnce = !0),
                      this.logForOrderIntercept(122);
                  } catch (e) {
                    console.error(e),
                      G.Z.logJsonParseError({
                        e: e,
                        source: "flight/book/checkAdditionalProducts",
                      }),
                      this.verifyBookInfo();
                  }
                else this.verifyBookInfo();
              },
              handleDetainmentProductClick: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.type;
                if ((this.closeCommonDialog(), "add" !== t))
                  return this.verifyBookInfo();
                var n = this.data.cabin,
                  i = n.appendProductNode,
                  a = i.additionalProducts,
                  o = a.findIndex(function (e) {
                    return e.content;
                  });
                (a[o].selected = !0),
                  this.setData({
                    cabin: (0, f.Z)(
                      (0, f.Z)({}, n),
                      {},
                      {
                        appendProductNode: (0, f.Z)(
                          (0, f.Z)({}, i),
                          {},
                          { additionalProducts: a }
                        ),
                      }
                    ),
                  }),
                  this.calculatePrice(),
                  this.verifyBookInfo();
              },
              verifyBookInfo: function () {
                var e = this,
                  t = this.data,
                  n = t.selectedPassengersList,
                  i = t.tripType,
                  a = t.segments,
                  o = {
                    data: {
                      version: 1,
                      passengers: [],
                      flights: [],
                      orderNumber: null,
                    },
                  };
                (o.data.passengers = n.map(function (e) {
                  return {
                    name: e.name,
                    cardType: e.passportType,
                    cardNo: e.passportCode,
                  };
                })),
                  o.data.flights.push({
                    sequence: 0,
                    flightNo: a[0].flights[0].flightNo,
                    dptCode: a[0].flights[0].dptCode,
                    arrCode: a[0].flights[0].arrCode,
                    dptTime: a[0].flights[0].dptTime,
                    arrTime: a[0].flights[0].arrTime,
                  }),
                  1 === i
                    ? o.data.flights.push({
                        sequence: 1,
                        flightNo: a[0].flights[1].flightNo,
                        dptCode: a[0].flights[1].dptCode,
                        arrCode: a[0].flights[1].arrCode,
                        dptTime: a[0].flights[1].dptTime,
                        arrTime: a[0].flights[1].arrTime,
                      })
                    : 2 === i &&
                      o.data.flights.push({
                        sequence: 1,
                        flightNo: a[1].flights[0].flightNo,
                        dptCode: a[1].flights[0].dptCode,
                        arrCode: a[1].flights[0].arrCode,
                        dptTime: a[1].flights[0].dptTime,
                        arrTime: a[1].flights[0].arrTime,
                      }),
                  (0, I.showLoading)(),
                  (0, K.VH)(o)
                    .then(
                      function (t) {
                        var n = t || {},
                          i = n.resultCode,
                          a = n.resultMessage,
                          o = n.data,
                          s = void 0 === o ? {} : o;
                        1 === i
                          ? e.doOrderCreateAction()
                          : -1 === i
                          ? e.showOrderRepeat(s, a)
                          : (e.showCommonDialog(a || Pt),
                            e.logForOrderIntercept(203, a || Pt));
                      },
                      function (t) {
                        e.showCommonDialog(t || Pt),
                          e.logForOrderIntercept(203, JSON.stringify(t) || Pt);
                      }
                    )
                    .finally(function () {
                      return (0, I.hideLoading)();
                    });
              },
              showOrderRepeat: function (e, t) {
                var n = this,
                  i = e.havePaid,
                  a = e.repeatOrders;
                if (i)
                  if (a && 0 !== a.length) {
                    var o = a[0].orderNumber;
                    this.logForOrderIntercept(202),
                      this.showMultiButtonDialog({
                        content: t,
                        rightButtonName: "查看原订单",
                        onRightButtonClick: function () {
                          n.toOrderDetailPage(o);
                        },
                        leftButtonName: "返回修改",
                        onLeftButtonClick: function () {},
                      });
                  } else this.showCommonDialog(t || Pt);
                else if (a && 0 !== a.length) {
                  var s = a[0].orderNumber;
                  this.logForOrderIntercept(201),
                    this.showMultiButtonDialog({
                      content: t,
                      rightButtonName: "查看原订单",
                      onRightButtonClick: function () {
                        n.toOrderDetailPage(s);
                      },
                      leftButtonName: "继续预订",
                      onLeftButtonClick: function () {
                        n.cancelOrderThenCreate(s);
                      },
                    });
                } else this.doOrderCreateAction();
              },
              doOrderCreateAction: function () {
                this.createOrder();
              },
              persistSelectedPassengers: function () {
                try {
                  var e,
                    t = this.data.selectedPassengersList.map(function (e) {
                      return e.passengerID;
                    });
                  Y.Uh.getAsync().then(function (e) {
                    var n = e || [];
                    t.forEach(function (e) {
                      n.some(function (t) {
                        return e == t;
                      }) &&
                        (n = n.filter(function (t) {
                          return e != t;
                        })),
                        n.unshift(e);
                    }),
                      Y.Uh.setAsync(n);
                  });
                } catch (e) {
                  console.log(e);
                }
              },
              createOrder: function () {
                var e,
                  t = this,
                  n = this.data,
                  i = n.cabin,
                  a = i.token,
                  o = i.appendProductNode,
                  s = i.invoiceNode,
                  r = n.query,
                  c = r.source,
                  l = void 0 === c ? 0 : c,
                  d = r.smartFromPage,
                  u = n.selectedCoupon,
                  h = n.isSelectedCouponAvailable,
                  m = n.selectedPassengersList,
                  p = n.contactDetail,
                  g = n.extras,
                  v =
                    (null === (e = this.invoiceModuleRef) || void 0 === e
                      ? void 0
                      : e.getInvoiceData()) || {},
                  N = v.invoiceSelectType,
                  w = v.curInvoiceTabKey,
                  C = v.invoiceTitle,
                  Z = void 0 === C ? "" : C,
                  b = v.invoiceTax,
                  x = void 0 === b ? "" : b,
                  P = v.email,
                  I = void 0 === P ? "" : P,
                  k = v.recipientName,
                  V = void 0 === k ? "" : k,
                  A = v.region,
                  L = void 0 === A ? [] : A,
                  S = v.address,
                  R = void 0 === S ? [] : S,
                  X = u.couponCode,
                  _ = void 0 === X ? "" : X,
                  E = o.additionalProducts,
                  M = void 0 === E ? [] : E,
                  O = s.defaultOpen,
                  F = s.invoiceAlterable,
                  H = {
                    data: {
                      version: 0,
                      source: l,
                      fromPage:
                        16 == l
                          ? d
                          : B.IK.fromPages.join("_") +
                            (D.default.isAlipay ? "_ALIPAY" : "") +
                            (D.default.isBaidu ? "_BAIDU" : ""),
                      token: a,
                      couponNo: h ? _ : "",
                      extras: g,
                    },
                  };
                this.isSelectedByDefaultRecommend &&
                  this.ubtTrace(
                    "FltWWrite_Passenger_RecBubbleBookDirect_click",
                    {
                      PageId: this.pageId,
                      Version: this.defaultCheckRecommendVersion,
                    }
                  ),
                  this.persistSelectedPassengers(),
                  (H.data.passengers = m.map(function (e) {
                    return {
                      name: e.name,
                      mobilePhone: e.mobile,
                      countryCode: e.countryCode,
                      birthday: e.passengerBirth,
                      ticketType: e.ticketType,
                      childAsAdult:
                        "儿童票" === e.passengerType &&
                        "成人票" === e.ticketType,
                      cardType: e.passportType,
                      cardNo: e.passportCode,
                      nationality: e.nationality || "CN",
                      cardTimeLimit:
                        e.cardTimeLimit ||
                        y.Z.getDefaultCardTimeLimit(e.passportType),
                      gender: e.gender,
                      issueAt: e.nationality || "CN",
                    };
                  }));
                var z = m[0],
                  U = this.contactPhoneRef.getValue().replace(/\s/g, "");
                if (
                  ((H.data.contact = {
                    name: z.name,
                    mobilePhone: U,
                    countryCode: z.countryCode,
                    cardType: z.passportType,
                    cardNo: z.passportCode,
                  }),
                  p.passengerName &&
                    p.passportCode &&
                    (H.data.contact = (0, f.Z)(
                      (0, f.Z)({}, H.data.contact),
                      {},
                      { name: p.passengerName, cardNo: p.passportCode }
                    )),
                  (H.data.products = M.filter(function (e) {
                    return e.selected;
                  }).map(function (e) {
                    return "MEMBERSHIP" == e.type
                      ? { type: e.type, price: e.price, code: e.productCode }
                      : {
                          type: e.type,
                          code: e.productCode,
                          extra: e.extra,
                          couponToken: e.couponToken,
                        };
                  })),
                  O)
                ) {
                  var q,
                    Y = w === et[0].key;
                  q = Y
                    ? { type: 2, email: I }
                    : {
                        type: 1,
                        address: R,
                        province: L[0],
                        city: L[1],
                        district: L[2],
                      };
                  var G = F || Y;
                  H.data.reimbursement = {
                    enabled: !0,
                    electronic: Y,
                    delivery: (0, f.Z)(
                      { name: V, mobilePhone: U, countryCode: "" },
                      q
                    ),
                    invoice: {
                      type: G ? N : "",
                      title: G ? Z : "",
                      taxNo: G && 2 === N ? x : "",
                    },
                  };
                } else H.data.reimbursement = { enabled: !1 };
                var W = this.data,
                  j = W.selectedRoomId,
                  J = W.roomNumber;
                j &&
                  J > 0 &&
                  (H.data.hotelJson = this.generateHotelBookParams()),
                  this.generatePaymentSteps(),
                  (0, K.L4)(H)
                    .then(function (e) {
                      var n = e || {},
                        i = n.resultCode,
                        a = n.resultMessage,
                        o = n.data,
                        s = void 0 === o ? {} : o;
                      if (((t._order_data = s), 1 === i))
                        T.Z.orderLog("flight"),
                          (t.orderCompletion = !0),
                          t.getPayInfo();
                      else if (-1 === i)
                        t.togglePaymentStepBox(), t.showCommonDialog(a || Pt);
                      else if (-2 === i) {
                        var r = s.priceChange,
                          c = r.changeType || 0;
                        2 === c || 3 === c
                          ? (0, Nt.P)({
                              priceChange: r,
                              onCancel: function () {
                                t.onBackAction();
                              },
                              onConfirm: function () {
                                t.acceptPriceChange();
                              },
                            })
                          : t.getPayInfo();
                      } else if (-3 === i)
                        t.togglePaymentStepBox(),
                          t.showCommonDialog({
                            content: a || "该价格舱位已售罄",
                            onButtonClick: function () {
                              t.onBackAction();
                            },
                          });
                      else if (-4 === i) {
                        t.togglePaymentStepBox();
                        var l = s.alertDialog,
                          d = l.message,
                          u = l.buttons;
                        1 === u.length
                          ? t.showCommonDialog({
                              content: d,
                              buttonName: u[0].text,
                              onButtonClick: function () {
                                t.handleDialogLeftBtnClick(l);
                              },
                            })
                          : t.showMultiButtonDialog({
                              content: d,
                              rightButtonName: u[1].text,
                              onRightButtonClick: function () {
                                t.handleDialogRightBtnClick(l);
                              },
                              leftButtonName: u[0].text,
                              onLeftButtonClick: function () {
                                t.handleDialogLeftBtnClick(l);
                              },
                            });
                      } else
                        t.togglePaymentStepBox(), t.showCommonDialog(a || Pt);
                    })
                    .catch(function (e) {
                      t.togglePaymentStepBox(), t.showCommonDialog(e || Pt);
                    });
              },
              cancelOrderThenCreate: function (e) {
                var t = this,
                  n = { data: { orderNumber: e, reason: "" } };
                (0, K.rn)(n).then(
                  function () {
                    t.doOrderCreateAction();
                  },
                  function (e) {
                    console.log(e);
                  }
                );
              },
              getPayInfo: function () {
                var e = this;
                if (this.stepCompletion) {
                  this.setData({
                    state: 2,
                    stateDesc: "订单创建成功，正在前往支付~",
                  });
                  var t = this._order_data.orderNumber;
                  console.log("获取支付信息.."),
                    x.ZP.doPayment({
                      orderNumber: t,
                      business: "flight",
                      title: "机票订单",
                    })
                      .then(
                        (0, p.Z)(
                          (0, m.Z)().mark(function n() {
                            return (0, m.Z)().wrap(function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (
                                      (n.next = 2), G.Z.doSubscribeAfterPay()
                                    );
                                  case 2:
                                    e.toOrderDetailPage(t);
                                  case 3:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                          })
                        )
                      )
                      .catch(function () {
                        e.toOrderDetailPage(t);
                      })
                      .finally(function () {
                        B.IK.doNotRefreshIndexUnpaidOrder = !1;
                      });
                }
              },
              generatePaymentSteps: function () {
                var e,
                  t,
                  n = this.data,
                  i = n.segments,
                  a = n.selectedPassengersList,
                  o = n.tripType,
                  s = [],
                  r = [];
                if (
                  ((this.orderCompletion = !1),
                  (this.stepCompletion = !1),
                  (this._pay_step_stop = !1),
                  2 === o || 3 === o)
                ) {
                  var c,
                    l = (0, g.Z)(i);
                  try {
                    for (l.s(); !(c = l.n()).done; ) {
                      var d = c.value,
                        u = d.flights,
                        m = _()(G.Z.formatDateWithSlash(u[0].dptTime)),
                        p = u.length - 1;
                      (e = [
                        {
                          type: "title",
                          description:
                            2 === o
                              ? 1 === d.segNo
                                ? "去程信息"
                                : "返程信息"
                              : 1 === d.segNo
                              ? "第1程"
                              : "第2程",
                        },
                        {
                          type: "flight",
                          description: ""
                            .concat(u[0].dptName)
                            .concat(u[0].dptAName)
                            .concat(u[0].dptTrm || "", " - ")
                            .concat(u[p].arrName)
                            .concat(u[p].arrAName)
                            .concat(u[p].arrTrm || ""),
                          done: !1,
                        },
                        {
                          type: "flight",
                          description: ""
                            .concat(m.format("YYYY年M月D日"), " ")
                            .concat(m.format("HH:mm"), " ")
                            .concat(P.Z.getWeekDayDesc(m.format(Tt))),
                          done: !1,
                        },
                      ]),
                        (s = [].concat((0, h.Z)(s), (0, h.Z)(e)));
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                } else {
                  var f = i[0].flights,
                    v = _()(G.Z.formatDateWithSlash(f[0].dptTime)),
                    N = f.length - 1;
                  (e = [
                    { type: "title", description: "航班信息" },
                    {
                      type: "flight",
                      description: ""
                        .concat(f[0].dptName)
                        .concat(f[0].dptAName)
                        .concat(f[0].dptTrm || "", " - ")
                        .concat(f[N].arrName)
                        .concat(f[N].arrAName)
                        .concat(f[N].arrTrm || ""),
                      done: !1,
                    },
                    {
                      type: "flight",
                      description: ""
                        .concat(v.format("YYYY年M月D日"), " ")
                        .concat(v.format("HH:mm"), " ")
                        .concat(P.Z.getWeekDayDesc(v.format(Tt))),
                      done: !1,
                    },
                  ]),
                    (s = (0, h.Z)(e));
                }
                var w,
                  C = (0, g.Z)(a);
                try {
                  for (C.s(); !(w = C.n()).done; ) {
                    var Z = w.value;
                    (e = {
                      type: "passenger",
                      description: ""
                        .concat(Z.name, "  ")
                        .concat(
                          "港澳台居民居住证" === Z.passportType
                            ? "港澳台居住证"
                            : Z.passportType,
                          ": "
                        )
                        .concat(Z.maskPassportCode),
                      done: !1,
                    }),
                      r.push(e);
                  }
                } catch (e) {
                  C.e(e);
                } finally {
                  C.f();
                }
                (t = [{ type: "title", description: "乘机人" }].concat(
                  r,
                  (0, h.Z)(s)
                )),
                  console.log(t),
                  this.setData({
                    state: 1,
                    stateDesc: "正在生成订单，请耐心等待~",
                    paymentProcess: 0,
                  }),
                  (this._paySteps = t),
                  this.togglePaymentStepBox(),
                  this.stepTowards();
              },
              stepTowards: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  n = this._paySteps,
                  i = n.length;
                if (
                  (console.log(
                    "doSteps",
                    this.orderCompletion,
                    new Date().getTime()
                  ),
                  this._pay_step_stop)
                )
                  return (
                    this.setData({ paymentSteps: [] }),
                    void (this._pay_step_stop = !1)
                  );
                if (t > 2 * i - 1)
                  return (
                    (this.stepCompletion = !0),
                    (this._paySteps = []),
                    this._step_timer && clearTimeout(this._step_timer),
                    this.orderCompletion &&
                      (this.setData({
                        state: 2,
                        stateDesc: "订单创建成功，正在前往支付~",
                      }),
                      this.getPayInfo()),
                    !1
                  );
                var a,
                  o,
                  s = parseInt(t / 2);
                t % 2
                  ? (this.setData(
                      ((a = {}),
                      (0, l.Z)(
                        a,
                        "paymentSteps[".concat(s, "]"),
                        (0, f.Z)((0, f.Z)({}, n[s]), {}, { done: !0 })
                      ),
                      (0, l.Z)(a, "paymentProcess", ((94 / i) * (t + 1)) / 2),
                      a)
                    ),
                    this.stepTowards(++t))
                  : (this.setData(
                      ((o = {}),
                      (0, l.Z)(o, "paymentSteps[".concat(s, "]"), n[s]),
                      (0, l.Z)(o, "paymentProcess", ((94 / i) * (t + 1)) / 2),
                      o)
                    ),
                    "title" === n[s].type
                      ? this.stepTowards(++t)
                      : (this._step_timer = setTimeout(function () {
                          e.stepTowards(++t);
                        }, this.randomRange(1e3, 1200))));
              },
              togglePaymentStepBox: function () {
                var e = this.data.showPaymentBox;
                e &&
                  ((this._pay_step_stop = !0),
                  this.setData({ paymentSteps: [] })),
                  this.setData({ showPaymentBox: !e, paymentProcess: 0 });
              },
              randomRange: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1,
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 100;
                return Math.floor(e + Math.random() * (t - e + 1));
              },
              toOrderDetailPage: function (e) {
                C().reLaunch({
                  url: "/pages/flight/detail/detail?orderNumber=".concat(e),
                });
              },
              acceptPriceChange: function () {
                this.getPayInfo();
              },
              handleDialogLeftBtnClick: function (e) {
                var t = e.buttons[0].action;
                "RemoveCoupon" === t
                  ? (this.setData({
                      selectedCoupon: {},
                      isSelectedCouponAvailable: !1,
                    }),
                    this.doOrderCreateAction())
                  : "AddPassenger" === t ||
                    ("Cutover" === t && this.onBackAction());
              },
              handleDialogRightBtnClick: function (e) {
                var t = e.buttons[1].action;
                "RemoveCoupon" === t
                  ? (this.setData({ selectedCoupon: {} }),
                    this.doOrderCreateAction())
                  : "AddPassenger" === t ||
                    ("Cutover" === t && this.onBackAction());
              },
              toggleTaxesFees: function () {
                this.showCommonDrawer({
                  title: "机建燃油费说明",
                  content:
                    "<span style='color:#666666;font-size:13px'>机建燃油费包含两项费用:机场建设费和燃油附加费。</span><br/><br/><span style='color:#333333;font-size:15px'>一、机场建设费</span><br/><span style='color:#666666;font-size:13px'>依据财政部、中国民航总局发出的通知,从2004年8月1日起,旅客购买从中国境内机场起飞的国内、国际和港澳台地区航班机票时,需一并随机票缴纳机场管理建设费。机场管理建设费在机票价外单列项目反映,其征收范围和标准按现行有关规定执行。</span><br/><br/>\n<span style='color:#333333;font-size:15px'>二、燃油附加费</span><br/><span style='color:#666666;font-size:13px'>燃油附加费是航运公司收取的反映燃料价格变化的附加费。自2022年9月5日（出票日期）0时起</span><br/><span style='color:#666666;font-size:13px'>1、国内航线旅客运输燃油附加费收取标准，800公里（含）以下航段，每位旅客收取人民币60元；800公里以上航段，每位旅客收取人民币120元。</span><br/><span style='color:#666666;font-size:13px'>2、按规定享受国内民航成人普通票价10%的婴儿，免收燃油附加费。</span><br/><span style='color:#666666;font-size:13px'>3、按规定购买国内民航成人普通票价50%的儿童（含无人陪伴儿童）、革命伤残军人、因公致残的人民警察，旅客运输燃油附加费收取标准为，800公里（含）以下航段，每位旅客收取人民币30元；800公里以上航段，每位旅客收取人民币60元。</span><br/>",
                  className: "flight-tax-desc-pop",
                });
              },
              prerenderRefundRule: function () {
                var e = this.data.cabin.info;
                (0, H.QU)({
                  rescheduleRefundRemark: G.Z.handleContentFormat(e),
                  height: "80vh",
                });
              },
              handleBaggageAllowancePoliciesClick: function () {
                var e = this.data,
                  t = e.cabin.info,
                  n = e.dptName,
                  i = e.arrName;
                (0, H.yV)({
                  rescheduleRefundRemark: G.Z.handleContentFormat(t),
                  dptName: n,
                  arrName: i,
                  height: "80vh",
                });
              },
              toggleBaggageAllowancePolicies: function () {
                var e = this.data.showBaggageAndPolicies;
                this.setData({ showBaggageAndPolicies: !e });
              },
              toggleFlightDetail: function () {
                var e = this.data;
                !(function (e) {
                  var t = e.segments,
                    n = e.tripType,
                    i = t[0].flights[0].dptTime;
                  C()
                    .createSelectorQuery()
                    .select(".flight-module-container")
                    .boundingClientRect()
                    .exec(function (e) {
                      var a = (null == e ? void 0 : e[0]).top;
                      (0, I.getCurrentPage)().showCommonPanel({
                        top: a > 0 ? a : 47,
                        countCustomNav: !a,
                        content: function (e) {
                          var a = e.onClose;
                          return (0, $.tZ)(mt, {
                            onClose: a,
                            segments: t,
                            tripType: n,
                            departTime: i,
                          });
                        },
                        className: "flight-detail-pop",
                      });
                    });
                })({ segments: e.segments, tripType: e.tripType });
              },
              backToXList: function () {
                (B.IK.forceXCabinListRefresh = !0), this.navigateBack();
              },
              getSelectorQuery: function (e) {
                var t = this;
                C()
                  .createSelectorQuery()
                  .select(e)
                  .boundingClientRect(function (e) {
                    console.log("----res----", e),
                      e && t.setData({ newGuestTipTop: e.top });
                  })
                  .exec();
              },
              handleScrollTo: function () {
                var e = this,
                  t = this.data.newGuestTipTop;
                t &&
                  C()
                    .pageScrollTo({ scrollTop: t })
                    .then(function () {
                      e.setData({ newGuestTipShow: !1 });
                    });
              },
              onReachBottom: function () {
                this.setData({ newGuestTipShow: !1 });
              },
              onBackAction: function (e) {
                var t = this.data,
                  n = t.tripType,
                  i = t.cabinQuantity;
                return "LIST" === e
                  ? ((B.IK.forceListRefresh = !0),
                    void C().navigateBack({ delta: 2 }))
                  : "X_LIST" === e
                  ? ((B.IK.forceXCabinListRefresh = !0),
                    void this.navigateBack())
                  : void (2 === n
                      ? ((B.IK.forceListRefresh = !0),
                        C().navigateBack({ delta: 2 }))
                      : i > 1
                      ? ((B.IK.forceXCabinListRefresh = !0),
                        this.navigateBack())
                      : ((B.IK.forceListRefresh = !0),
                        C().navigateBack({ delta: 2 })));
              },
              doLogin: function (e) {
                var t = this;
                A.ZP.doLogin()
                  .then(function () {
                    t.setData({ isLogin: !0, phoneNumber: A.ZP.userName }),
                      null == e || e();
                  })
                  .catch(function () {
                    (0, I.showToast)("取消登录");
                  });
              },
              getOpenId: function () {
                (0, A.M9)({ force: !0 }).then(
                  function (e) {
                    var t = e.openid;
                    console.log(t);
                  },
                  function () {}
                );
              },
              handleOpenInsure: function () {
                this.setData({ openInsureModule: !0 });
              },
              handleNoticeChange: function () {
                var e = this.data.noticeChecked;
                this.setData({ noticeChecked: !e });
              },
              getPhoneNumberAction: function () {
                var e = this;
                this.doLogin(function () {
                  e.getPassengers(),
                    e.getAvailableCoupon(),
                    e.getIntegralCoupons();
                });
              },
              routeTo: function (e) {
                var t = e.currentTarget.dataset.url;
                t && T.Z.commonNavigator(t);
              },
              noop: function () {},
              isMemberShipSelected: function () {
                var e,
                  t,
                  n = this.data,
                  i = n.cabin,
                  a = n.mbr,
                  o =
                    null == i ||
                    null === (e = i.appendProductNode) ||
                    void 0 === e ||
                    null === (t = e.additionalProducts) ||
                    void 0 === t
                      ? void 0
                      : t.find(function (e) {
                          return "MEMBERSHIP" == e.type;
                        });
                return !(!(a && a.amount > 0) || (o && !o.selected));
              },
              generateHotelBookParams: function () {
                var e = "";
                try {
                  var t = this.data,
                    n = t.hotelInfo,
                    i = t.roomNumber,
                    a = void 0 === i ? 1 : i,
                    o = ((null == n ? void 0 : n.flightNewListData) || {})
                      .bookingExtJson,
                    s = JSON.parse(o),
                    r = s.cityId,
                    c = s.hotelId,
                    l = s.checkInDate,
                    d = s.checkOutDate,
                    u = this.data,
                    h = u.selectedRoomId,
                    m = u.hotelRoomList.find(function (e) {
                      return e.roomId == h;
                    }),
                    p = m.baseName,
                    f = m.priceInfo,
                    g = m.priceInfoLite,
                    v = m.roomId,
                    N = m.payType,
                    w = m.subPayType,
                    C = m.shadowId,
                    Z = f.couponSalePrice,
                    b = f.discountPrice,
                    x = g.salePrice,
                    y = _()(d).diff(_()(l), "day"),
                    P = _()(l).format("YYYY-MM-DD"),
                    T = _()(d).format("YYYY-MM-DD"),
                    I = (null == n ? void 0 : n.fixedPriceHotel) || {},
                    k = I.hotelList,
                    D = I.fixedPriceInfoExtend,
                    V = ((null == k ? void 0 : k[0]) || {}).name,
                    B = null == D ? void 0 : D.travelType,
                    A = {
                      roomInfo: {
                        checkIn: P,
                        checkOut: T,
                        hotelId: c,
                        minPriceRoomName: p,
                        payType: N,
                        subPayType: w,
                        perRoomPrice: x,
                        roomId: v,
                        roomNumber: a,
                        shadowRoomId: C,
                      },
                      showInfo: {
                        checkIn: P,
                        checkOut: T,
                        cityId: r,
                        couponSalePrice: Z,
                        dayCount: y,
                        discountPrice: b,
                        name: V,
                        priceDetail: "￥"
                          .concat(x, "×")
                          .concat(a, "间×")
                          .concat(y, "晚"),
                        roomName: p,
                        roomNumber: a,
                        roomPrice: x * a,
                        travelType: B,
                      },
                    };
                  e = JSON.stringify(A);
                } catch (e) {
                  console.log(e),
                    G.Z.logJsonParseError({
                      e: e,
                      source: "flight/book/generateHotelBookParams",
                    });
                }
                return e;
              },
              getHotelPriceDetail: function () {
                var e = this.data,
                  t = e.selectedRoomId,
                  n = e.hotelRoomList,
                  i = e.roomNumber,
                  a = e.dayCount,
                  o = n.find(function (e) {
                    return e.roomId == t;
                  }).priceInfoLite.salePrice;
                return {
                  priceDetail: "￥"
                    .concat(o, "×")
                    .concat(i, "间×")
                    .concat(a, "晚"),
                  roomPrice: o * i,
                };
              },
              updateRoomNumber: function (e) {
                var t = this,
                  n = e.operation,
                  i = this.data.roomNumber;
                this.setData(
                  { roomNumber: "minus" == n ? i - 1 : i + 1 },
                  function () {
                    t.getPriceDetails(), t.calculatePrice();
                  }
                );
              },
              getHotelRoomInfo: function (e) {
                var t = this;
                (function (e) {
                  var t, n, i;
                  try {
                    var a;
                    i = JSON.parse(
                      null === (a = e.flightNewListData) || void 0 === a
                        ? void 0
                        : a.bookingExtJson
                    );
                  } catch (e) {
                    console.error(e),
                      G.Z.logJsonParseError({
                        e: e,
                        source: "flight/book/hotelAction/getHotelRoomList",
                      });
                  }
                  if (!i) return Promise.reject();
                  var o = i,
                    s = o.hotelId,
                    r = o.cityId,
                    c = o.checkInDate,
                    l = o.checkOutDate,
                    d = o.payType,
                    u =
                      null === (t = e.fixedPriceHotel) ||
                      void 0 === t ||
                      null === (n = t.fixedPriceInfoExtend) ||
                      void 0 === n
                        ? void 0
                        : n.travelType,
                    h = {
                      data: {
                        hotelId: s,
                        cityId: r,
                        checkInDate: c,
                        checkOutDate: l,
                        quantity: 1,
                        controlBitMap: 0,
                        queryBitMap: 256,
                        payType: d,
                        clientVersion: Number(K.AA),
                        travelInfo: {
                          channel: "flight",
                          travelType: u,
                          extendedData: "",
                        },
                      },
                    };
                  return (0, J.JE)(h).then(function (e) {
                    var t;
                    if (1 == e.resultCode && e.data)
                      return (
                        (null === (t = e.data.roomList) || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              var t = e.baseId,
                                n = e.baseName,
                                i = e.roomId,
                                a = e.shadowId,
                                o = e.priceInfo,
                                r = e.imageList,
                                c = e.roomBasicList,
                                l = e.subPayType,
                                d = e.min,
                                u = e.max,
                                h = e.payType,
                                m = o.couponSalePrice,
                                p = o.salePrice,
                                f = o.discountPrice;
                              return {
                                hotelId: s,
                                baseId: t,
                                baseName: n,
                                roomId: i,
                                shadowId: a,
                                priceInfoLite: {
                                  salePrice: m || p,
                                  discountPrice: f,
                                },
                                priceInfo: o,
                                imageList: r,
                                roomBasicList: c,
                                payType: h,
                                subPayType: l,
                                min: d,
                                max: u,
                              };
                            })) || []
                      );
                  });
                })(e)
                  .then(function (e) {
                    var n =
                      null == e
                        ? void 0
                        : e.reduce(
                            function (e, t) {
                              return e.priceInfoLite.salePrice <
                                t.priceInfoLite.salePrice
                                ? e
                                : t;
                            },
                            { priceInfoLite: { salePrice: 1 / 0 } }
                          );
                    if (null == n || !n.roomId) return t.showHotelSoldOutPop();
                    t.setData(
                      {
                        hotelRoomList: e,
                        selectedRoomId: n.roomId,
                        roomNumber: n.min,
                      },
                      function () {
                        t.getPriceDetails(), t.calculatePrice();
                      }
                    );
                  })
                  .catch(function () {
                    t.showHotelSoldOutPop();
                  });
              },
              showHotelSoldOutPop: function () {
                this.showCommonDrawer({
                  hideTitle: !0,
                  hideClose: !0,
                  content: function (e) {
                    var t = e.onClose;
                    return (0, $.tZ)(F.Z, {
                      headImg:
                        "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieyelanjie/jiudian@3x.png",
                      title: "酒店房间已售罄",
                      content: "目前只能预订机票，是否继续预订机票",
                      onCancel: function () {
                        return C().navigateBack();
                      },
                      onConfirm: t,
                      cancelText: "放弃购买",
                      confirmText: "继续预订机票",
                    });
                  },
                });
              },
              updateSelectedRoom: function (e) {
                var t = this,
                  n = e.roomId,
                  i = this.data,
                  a = i.hotelRoomList,
                  o = i.roomNumber,
                  s = a.find(function (e) {
                    return n == e.roomId;
                  });
                if (o > s.max)
                  return (0, I.showToast)(
                    "抱歉，此酒店当前房型只剩".concat(s.max, "间")
                  );
                var r = o;
                o < s.min && (r = s.min),
                  this.setData(
                    { selectedRoomId: n, roomNumber: r },
                    function () {
                      t.getPriceDetails(), t.calculatePrice();
                    }
                  );
              },
              updatePickup: function (e) {
                this.setData({ hasPickup: e });
              },
              showHotelDetailPop: function () {
                this.setData({ showType: "hotel-detail-pop" });
              },
              clearShowType: function () {
                this.setData({ showType: "" });
              },
              getPriceDetails: function () {
                var e,
                  t,
                  n = this,
                  i = this.data,
                  a = i.tripType,
                  o = i.adult,
                  s = void 0 === o ? 0 : o,
                  r = i.adultChild,
                  c = void 0 === r ? 0 : r,
                  l = i.child,
                  d = void 0 === l ? 0 : l,
                  u = i.baby,
                  h = void 0 === u ? 0 : u,
                  m = i.selectedCoupon,
                  p = i.isSelectedCouponAvailable,
                  f = i.preferentialZoneFavors,
                  g = i.cabin,
                  v = g.product,
                  N = g.invoiceNode,
                  w = g.ncd,
                  C = g.appendProductNode,
                  Z = g.xProducts,
                  b = g.mpcd,
                  x = g.ocd,
                  y = g.preferentialZones,
                  P = g.mbr,
                  I = (
                    null === (e = this.invoiceModuleRef) || void 0 === e
                      ? void 0
                      : e.getInvoiceData()
                  ).curInvoiceTabKey,
                  k = v.apr,
                  D = v.atx,
                  V = v.cpr,
                  B = v.ctx,
                  A = v.bpr,
                  L = v.btx,
                  S = v.caatx,
                  R = v.transitPriceInfo,
                  X = !0,
                  _ = this.canDiscountTotalPrice,
                  E = function (e) {
                    var t = Math.min(e, _);
                    return (_ = _.zt_sub(t)), (X = 0 != _), t;
                  },
                  M = { tickets: [], additions: [], discounts: [] },
                  O = N.defaultOpen,
                  F = N.deliveryPrice,
                  H =
                    null == y
                      ? void 0
                      : y.find(function (e) {
                          return e.floatType == q.wu.SPRING_HAS_CUT_DOWN;
                        }),
                  z = function (e, t) {
                    var i,
                      o,
                      s,
                      r = 0;
                    switch (e) {
                      case At.ADULT:
                        (i = k),
                          (o = D),
                          (s = (null == R ? void 0 : R.departApr) || 0),
                          (r = (null == R ? void 0 : R.arriveApr) || 0);
                        break;
                      case At.CHILD:
                        (i = V),
                          (o = B),
                          (s = (null == R ? void 0 : R.departCpr) || 0),
                          (r = (null == R ? void 0 : R.arriveCpr) || 0);
                        break;
                      case At.BABY:
                        (i = A),
                          (o = L),
                          (s = (null == R ? void 0 : R.departBpr) || 0),
                          (r = (null == R ? void 0 : R.arriveBpr) || 0);
                        break;
                      case At.CHILD_AS_ADULT:
                        (i = k),
                          (o = S),
                          (s = (null == R ? void 0 : R.departApr) || 0),
                          (r = (null == R ? void 0 : R.arriveApr) || 0);
                    }
                    var c = [];
                    if (2 === a && R) {
                      var l = { item: "去程", price: "¥".concat(s) },
                        d = { item: "返程", price: "¥".concat(r) };
                      c.push(l, d);
                    } else {
                      var u = [At.ADULT, At.CHILD_AS_ADULT].includes(e),
                        h = w;
                      if ((null == H ? void 0 : H.length) > 0) {
                        var m = n.calculateNum({ saleType: H.saleType }),
                          p = H.floatPrice * m;
                        h = {
                          amount: H.floatPrice,
                          text: "春运已减".concat(p, "元"),
                        };
                      }
                      c.push({
                        item: "机票",
                        price: "￥".concat(i),
                        ncd: h && u ? h : {},
                      });
                    }
                    return (
                      c.push({
                        item: "机建燃油".concat(2 === a ? "（共两程）" : ""),
                        price: "￥".concat(o),
                      }),
                      {
                        title: e,
                        cost: "￥".concat(i + o),
                        count: t,
                        unit: "人",
                        detail: c,
                      }
                    );
                  };
                s > 0 && M.tickets.push(z(At.ADULT, s)),
                  d > 0 && M.tickets.push(z(At.CHILD, d)),
                  c > 0 && M.tickets.push(z(At.CHILD_AS_ADULT, c)),
                  h > 0 && M.tickets.push(z(At.BABY, h));
                var U = (C || {}).additionalProducts,
                  Y =
                    (void 0 === U ? [] : U)
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return {
                          item: ""
                            .concat(e.productName)
                            .concat(
                              0 != a && "INS" === e.type ? "（全航程可保）" : ""
                            ),
                          price: "￥".concat(e.price),
                          count: n.calculateNum({ saleType: e.saleType }),
                          unit: "份",
                        };
                      }) || [],
                  G = this.data,
                  W = G.selectedRoomId,
                  j = G.roomNumber;
                if (W && j > 0) {
                  var J = this.getHotelPriceDetail();
                  Y.push({ item: "酒店", price: J.priceDetail });
                }
                null == Z ||
                  Z.forEach(function (e) {
                    e &&
                      Object.keys(e).length &&
                      Y.push({
                        item: ""
                          .concat(e.name)
                          .concat(
                            "INSURANCE" === e.type && 0 != a
                              ? "（全航程可保）"
                              : ""
                          ),
                        price: "¥".concat(e.price),
                        count: n.calculateNum({ saleType: e.saleType }),
                        unit: "份",
                      });
                  }),
                  O &&
                    I === et[1].key &&
                    Y.push({
                      item: "配送费",
                      price: "￥".concat(F),
                      count: 1,
                      unit: "份",
                    }),
                  Y.length > 0 &&
                    M.additions.push({ title: "增值服务", detail: Y });
                var K = [];
                if (p && m && m.showCouponPrice > 0 && X) {
                  var Q = E(m.showCouponPrice);
                  K.push({
                    item: m.couponDisplayName || m.couponName,
                    price: "-￥".concat(Q),
                    count: 1,
                    unit: "份",
                    itemTag: "color-red",
                  });
                }
                if (P && this.isMemberShipSelected() && X) {
                  var $ = E(P.amount);
                  K.push({
                    item: P.text1,
                    price: "-¥".concat($),
                    itemTag: "mbr-item",
                  });
                }
                if (y && y.length > 0) {
                  var ee = y.find(function (e) {
                    return "商旅返现" === e.floatText;
                  });
                  ee &&
                    K.push({
                      item: "商旅返现",
                      price: "¥".concat(ee.floatPrice),
                      count: this.calculateNum({ saleType: ee.saleType }),
                      unit: "人",
                      itemTag: "color-red",
                    });
                }
                if (
                  ((null == f ? void 0 : f.length) > 0 &&
                    f.forEach(function (e) {
                      E(e.trulyFavorPrice);
                      var t =
                        1 == e.trulyFavorCount
                          ? e.trulyFavorPrice
                          : e.floatPrice;
                      K.push({
                        item: e.discountDetailText,
                        price: "-¥".concat(t),
                        count: e.trulyFavorCount,
                        unit: "份",
                        itemTag: "color-red",
                        icon: e.marketIcon,
                      });
                    }),
                  x &&
                    x.amount &&
                    X &&
                    (E(x.amount * (s + c)),
                    K.push({
                      item: x.text,
                      price: "-￥".concat(x.amount),
                      count: s + c,
                      unit: "份",
                      itemTag: "color-red",
                    })),
                  null != b &&
                    null !== (t = b.rules) &&
                    void 0 !== t &&
                    t.length)
                ) {
                  var te,
                    ne = s + c;
                  if (
                    ((te = b.rules
                      .sort(function (e, t) {
                        return t.minCount - e.minCount;
                      })
                      .find(function (e) {
                        return ne >= e.minCount;
                      })),
                    !T.Z.isEmptyObject(te) && X)
                  ) {
                    var ie = E(te.cutdownPrice);
                    K.push({
                      item: te.text,
                      price: "-￥".concat(ie),
                      count: 1,
                      unit: "份",
                      itemTag: "color-red",
                    });
                  }
                }
                K.length > 0 && M.discounts.push({ title: "优惠", detail: K }),
                  this.setData({ priceDetails: M });
              },
              handleAuthPassengers: function (e) {
                var t = this;
                if (e) {
                  var n = (e || {}).url;
                  !n || n.startsWith("http")
                    ? T.Z.commonNavigator(n)
                    : this.navigateTo({
                        url: n,
                        callback: function () {
                          t.refresh();
                        },
                      });
                }
              },
              getSaveMoneyModuleData: function () {
                var e = this.data,
                  t = e.cabin,
                  n = e.adult,
                  i = e.selectedCoupon,
                  a = e.preferentialZoneFavors,
                  o = (t || {}).smm,
                  s = [],
                  r = 0;
                if (
                  (i &&
                    (null == i ? void 0 : i.showCouponPrice) > 0 &&
                    (s.push({ title: "优惠券省", price: i.showCouponPrice }),
                    (r = r.zt_add(null == i ? void 0 : i.showCouponPrice))),
                  o)
                ) {
                  var c = (o || {}).saveMoneyDetailList;
                  (void 0 === c ? [] : c).forEach(function (e) {
                    var t = e.price;
                    t &&
                      n > 0 &&
                      ("cashback" == e.type || "ota" == e.type
                        ? ((t *= n),
                          s.push((0, f.Z)((0, f.Z)({}, e), {}, { price: t })))
                        : s.push(e),
                      (r += t));
                  });
                }
                return (
                  (null == a ? void 0 : a.length) > 0 &&
                    (null == a ||
                      a.forEach(function (e) {
                        e.showSaveAmountDesc
                          ? (s.push({
                              title: e.showSaveAmountDesc,
                              price: e.trulyFavorPrice,
                            }),
                            (r = r.zt_add(e.trulyFavorPrice)))
                          : (e.floatType = q.wu.CUT_DOWN) &&
                            (s.push({
                              title: "优惠省",
                              price: e.trulyFavorPrice,
                            }),
                            (r = r.zt_add(e.trulyFavorPrice)));
                      })),
                  s.length
                    ? (0, f.Z)(
                        (0, f.Z)(
                          {
                            title:
                              "智行为您省钱啦！本单<font color='#FF5959'>已省约</font>",
                          },
                          o
                        ),
                        {},
                        { saveMoneyDetailList: s, totalSavedMoney: r }
                      )
                    : null
                );
              },
              clearCoupon: function () {
                this.setData({
                  selectedCoupon: {},
                  isSelectedCouponAvailable: !1,
                });
              },
              isHainanAirline: function () {
                var e = this.data.segments;
                return (
                  (null == e ? void 0 : e.length) > 0 &&
                  e.some(function (e) {
                    var t;
                    return null === (t = e.flights) || void 0 === t
                      ? void 0
                      : t.some(function (e) {
                          return "HU" === e.airCode;
                        });
                  })
                );
              },
              calculateAvaliableCouponNum: function () {
                var e = this,
                  t = this.data.couponList,
                  n = this.totalPriceBeforeDiscount,
                  i =
                    null == t
                      ? void 0
                      : t.filter(function (t) {
                          var i;
                          return (
                            (null ===
                              (i = e.checkCouponAvailable({
                                selectedCoupon: t,
                                fee: n,
                              })) || void 0 === i
                              ? void 0
                              : i.couponValue) > 0
                          );
                        });
                return (null == i ? void 0 : i.length) || 0;
              },
            },
            Rt =
              (0, k.h)(!1, { usePageWrapper: !0 })(
                (Zt =
                  b()(St)(
                    (Zt = (function (e) {
                      (0, r.Z)(n, e);
                      var t = (0, c.Z)(n);
                      function n() {
                        var e;
                        (0, a.Z)(this, n);
                        for (
                          var i = arguments.length, o = new Array(i), r = 0;
                          r < i;
                          r++
                        )
                          o[r] = arguments[r];
                        return (
                          (e = t.call.apply(t, [this].concat(o))),
                          (0, l.Z)((0, s.Z)(e), "pageWrapperConfig", {
                            renderHigherZIndexView: function () {
                              var t = e.data,
                                n = t.totalPrice,
                                i = t.favorablePrice,
                                a = t.showPriceDetails,
                                o = t.cabin,
                                r = t.noticeChecked,
                                c = t.hotelInfo,
                                l = t.hotelRoomList,
                                d = t.selectedRoomId,
                                u = t.showType,
                                h = t.showPaymentBox,
                                m = t.paymentSteps,
                                p = t.tripType,
                                f = t.selectedPassengersList,
                                g = t.stateDesc,
                                v = t.paymentProcess,
                                N = (f && f.length) || 0;
                              return (0, $.BX)($.HY, {
                                children: [
                                  (0, $.tZ)(dt, {
                                    totalPrice: n,
                                    favorablePrice: i,
                                    showPriceDetails: a,
                                    cabin: o,
                                    noticeChecked: r,
                                    handleNoticeChange:
                                      e.handleNoticeChange.bind((0, s.Z)(e)),
                                    togglePriceDetails:
                                      e.togglePriceDetails.bind((0, s.Z)(e)),
                                    handleBookClick: e.handleBookClick.bind(
                                      (0, s.Z)(e)
                                    ),
                                    agreeAndContinue: e.agreeAndContinue.bind(
                                      (0, s.Z)(e)
                                    ),
                                  }),
                                  (0, $.tZ)($e, {
                                    visible: h,
                                    paymentSteps: m,
                                    tripType: p,
                                    selectedPassengersListLen: N,
                                    stateDesc: g,
                                    paymentProcess: v,
                                  }),
                                  (0, $.tZ)(Te, {
                                    hotelInfo: c,
                                    hotelRoomList: l,
                                    selectedRoomId: d,
                                    visible: "hotel-detail-pop" == u,
                                    onChange: e.updateSelectedRoom.bind(
                                      (0, s.Z)(e)
                                    ),
                                    updatePickup: e.updatePickup.bind(
                                      (0, s.Z)(e)
                                    ),
                                    onClose: e.clearShowType.bind((0, s.Z)(e)),
                                  }),
                                  (0, $.tZ)(O.Z, {
                                    ref: function (t) {
                                      e.onDrawerAttach(t, !0);
                                    },
                                  }),
                                  (0, $.tZ)(M.Z, {
                                    ref: function (t) {
                                      e.onPanelAttach(t);
                                    },
                                  }),
                                ],
                              });
                            },
                          }),
                          e
                        );
                      }
                      return (
                        (0, o.Z)(n, [
                          {
                            key: "renderTitleView",
                            value: function () {
                              var e = this.state.state;
                              return (0, $.tZ)(ee, { state: e });
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e,
                                t,
                                n,
                                i,
                                a = this.data,
                                o = a.isTieyou,
                                s = a.segments,
                                r = a.tripType,
                                c = a.cabin,
                                l = a.isLogin,
                                d = a.passengersList,
                                u = a.flightGoDate,
                                h = a.uniquePassengers,
                                m = a.selectedPassengersList,
                                p = a.segNumber,
                                f = a.totalPrice,
                                g = a.isSelectedCouponAvailable,
                                v = a.preferentialZoneFavors,
                                w = a.selectedCoupon,
                                C = a.adult,
                                Z = a.adultChild,
                                b = a.returnMoney,
                                x = a.pureAdvantages,
                                y = a.advantages,
                                P = a.unReceiveCouponToken,
                                T = a.newGuestGrowthData,
                                I = a.newGuestTipShow,
                                k = a.selectPassengerText,
                                V = a.orderReduceData,
                                B = a.orderReducePrice,
                                A =
                                  (a.bottomNoticeContent,
                                  a.hasSelectedInsurance),
                                L = a.alipayCouponUsable,
                                S = a.mbr,
                                R = a.hotelTip,
                                X = a.hotelInfo,
                                _ = a.hotelRoomList,
                                E = a.selectedRoomId,
                                M = a.roomNumber,
                                O = a.antiFraudContent,
                                F = a.passengerModuleTipType,
                                H = a.passengerModuleTips,
                                z = a.hasPickup,
                                U = a.integralData,
                                q = a.topBanner,
                                Y = (m && m.length) || 0,
                                G = (c || {}).preferentialZones,
                                W =
                                  null == c ||
                                  null === (e = c.product) ||
                                  void 0 === e
                                    ? void 0
                                    : e.spi;
                              return (0, $.BX)(N.View, {
                                className: "book-container",
                                children: [
                                  (0, $.BX)(N.View, {
                                    className: "book-page "
                                      .concat(o ? "ty" : "zx", " ")
                                      .concat(D.default.isBaidu ? "swan" : ""),
                                    style: D.default.isWechat
                                      ? ""
                                      : { height: "100vh" },
                                    children: [
                                      (0, $.tZ)(Se, {
                                        pureAdvantages: x,
                                        handleBaggageAllowancePoliciesClick:
                                          this.handleBaggageAllowancePoliciesClick.bind(
                                            this
                                          ),
                                      }),
                                      (0, $.tZ)(re, {
                                        segments: s,
                                        topBanner: q,
                                        hotelInfo: X,
                                        tripType: r,
                                        cabin: c,
                                        advantages: y,
                                        hotelTip: R,
                                        toggleFlightDetail:
                                          this.toggleFlightDetail.bind(this),
                                        toggleTaxesFees:
                                          this.toggleTaxesFees.bind(this),
                                        handleBaggageAllowancePoliciesClick:
                                          this.handleBaggageAllowancePoliciesClick.bind(
                                            this
                                          ),
                                        roomList: _,
                                        selectedRoomId: E,
                                        hasPickup: z,
                                        showHotelDetailPop:
                                          this.showHotelDetailPop.bind(this),
                                      }),
                                      (0, $.tZ)(Ue, {
                                        cabin: c,
                                        isLogin: l,
                                        specialPassengerTips: W,
                                        onAuth: this.handleAuthPassengers,
                                        onFloatTipClose:
                                          this.handlePassengerModuleTipsClose,
                                        onFloatTipClick:
                                          this.handlePassengerModuleTipsClick,
                                        floatTip: H,
                                        floatTipType: F,
                                        selectPassengerText: k,
                                        passengersList: d,
                                        flightGoDate: u,
                                        uniquePassengers: h,
                                        getPhoneNumberAction:
                                          this.getPhoneNumberAction.bind(this),
                                        openAllPassenger:
                                          this.openAllPassenger.bind(this),
                                        savePassenger:
                                          this.savePassenger.bind(this),
                                        handlePassengerEditClick:
                                          this.handlePassengerEditClick.bind(
                                            this
                                          ),
                                        togglePassengerSelect:
                                          this.togglePassengerSelect.bind(this),
                                        contactBoxRef:
                                          this.refContactPhone.bind(this),
                                      }),
                                      _.length > 0 &&
                                        E &&
                                        (0, $.tZ)(Ie, {
                                          roomNumber: M,
                                          selectedRoomId: E,
                                          roomList: _,
                                          onChange:
                                            this.updateRoomNumber.bind(this),
                                          pasLen: Y,
                                        }),
                                      (null === (t = c.appendProductNode) ||
                                      void 0 === t
                                        ? void 0
                                        : t.isBundling) &&
                                        (0, $.tZ)(Ye, {
                                          product:
                                            c.appendProductNode.additionalProducts.find(
                                              function (e) {
                                                return e.bundling;
                                              }
                                            ),
                                          toInsuranceInstruction:
                                            this.toInsuranceInstruction.bind(
                                              this
                                            ),
                                          selectedPassengersListLen: Y,
                                          segNumber: p,
                                        }),
                                      (null === (n = c.appendProductNode) ||
                                      void 0 === n ||
                                      null === (i = n.additionalProducts) ||
                                      void 0 === i
                                        ? void 0
                                        : i.length) > 0 &&
                                        !(
                                          c.appendProductNode.isBundling &&
                                          1 ===
                                            c.appendProductNode
                                              .additionalProducts.length
                                        ) &&
                                        (0, $.tZ)(Le, {
                                          appendProductNode:
                                            c.appendProductNode,
                                          selectedPassengersListLen: Y,
                                          toAdditionalProductDetail:
                                            this.toAdditionalProductDetail.bind(
                                              this
                                            ),
                                          toggleAdditionalProduct:
                                            this.toggleAdditionalProduct.bind(
                                              this
                                            ),
                                          calculateNum:
                                            this.calculateNum.bind(this),
                                        }),
                                      c &&
                                        c.invoiceNode &&
                                        !c.invoiceNode.disableDisplay &&
                                        (0, $.tZ)(ot, {
                                          ref: this.refInvoiceModule.bind(this),
                                          invoiceNode: c.invoiceNode,
                                          hasSelectedInsurance: A,
                                          onTabChange:
                                            this.calculatePrice.bind(this),
                                          switchInvoice:
                                            this.switchInvoice.bind(this),
                                        }),
                                      (0, $.tZ)(Ge, {
                                        userSelectedCouponForce:
                                          this._userSelectedCouponForce,
                                        isSelectedCouponAvailable: g,
                                        mbr: S,
                                        isMemberShipSelected:
                                          this.isMemberShipSelected(),
                                        selectedCoupon: w,
                                        orderReducePrice: B,
                                        cabin: c,
                                        preferentialZoneFavors: v,
                                        adult: C,
                                        adultChild: Z,
                                        selectedPassengersListLen: Y,
                                        selectedPassengers: m,
                                        returnMoney: b,
                                        totalPrice: f,
                                        alipayCouponUsable: L,
                                        avaliableCouponNum:
                                          this.calculateAvaliableCouponNum(),
                                        unReceiveCouponToken: P,
                                        orderReduceData: V,
                                        unSupportCouponInfo:
                                          this.getUnSupportCouponInfo({
                                            preferentialZones: G,
                                            selectedPassengers: m,
                                          }),
                                        toCouponList:
                                          this.toCouponList.bind(this),
                                        calculateNum:
                                          this.calculateNum.bind(this),
                                        isSpringNewGuest:
                                          this.isSpringNewGuest.bind(this),
                                      }),
                                      (0, $.tZ)(gt, { newGuestGrowthData: T }),
                                      (0, $.tZ)(Ke, {
                                        integralData: U,
                                        getPhoneNumberAction:
                                          this.getPhoneNumberAction.bind(this),
                                        handleIntegralExchangeBtnClick:
                                          this.handleIntegralExchangeBtnClick.bind(
                                            this
                                          ),
                                      }),
                                      (0, $.tZ)(Qe, { cabin: c }),
                                      (0, $.tZ)(Ct, {
                                        isHainanAirline: this.isHainanAirline(),
                                        noticeContent: O,
                                      }),
                                      (0, $.tZ)(N.View, {
                                        className: "flt-info",
                                        children: "金牌服务·出行保障",
                                      }),
                                    ],
                                  }),
                                  (0, $.tZ)(vt, {
                                    newGuestTipShow: I,
                                    newGuestGrowthData: T,
                                    handleScrollTo:
                                      this.handleScrollTo.bind(this),
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        n
                      );
                    })(v.default.Component))
                  ) || Zt)
              ) || Zt;
          Page(
            (0, i.createPageConfig)(
              Rt,
              "pages/flight/book/book",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                navigationBarFrontColor: "#ffffff",
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
            56620, 3322, 36332, 95854, 59188, 35048, 70486, 97709, 6189, 22843,
            6878, 8014, 81198, 14906, 49608, 30120, 8905, 22175, 87479, 90719,
            27849, 14030, 41834, 51124, 89436, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(96170);
          }
        ),
          e.O();
      },
    ]);
})();
