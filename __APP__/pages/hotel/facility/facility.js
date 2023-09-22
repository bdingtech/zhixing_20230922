!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [29779],
      {
        52512: function (e, t, i) {
          var a,
            c = i(32180),
            l = i(79301),
            n = i(95308),
            s = i(90129),
            r = i(57042),
            o = i(24460),
            m = i(81876),
            d = i(21867),
            h = i(86066),
            u = i(45023),
            p = i(298),
            f = i(52500),
            w = i(71515),
            g = i(92954),
            N = i.n(g),
            v = i(3205),
            y = i(34229),
            T = i(79404),
            b = i(79792),
            Z = i(74977),
            V = i(62753),
            k = i(18433),
            I = i(92667),
            x = i(80626),
            B = i(90668),
            D = i(73130),
            C = i(39509),
            X = i(81957),
            P = i(45810),
            S = {
              STAR: "https://images3.c-ctrip.com/zt/wechat/hotel/xing.png",
              DIAMOND: "https://images3.c-ctrip.com/zt/wechat/hotel/zuan.png",
              ENVIRONMENTAL_HEALTH:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/tag_huiyuan/xin/quanyi/tag_xq_huanjingweisheng@3x.png",
              GOLD_DIAMOND:
                "https://images3.c-ctrip.com/ztrip/hotel/2022/5/icon-jz@3x.webp",
              STAR_DESCRIPTION:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/huanjingweisheng/ssxq_fc_xjsm.webp",
              TELEPHONE:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ic_phone@3x.png",
              TAB_UNDERLINE: {
                zx: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/xuanze_zx.png",
                ty: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/xuanze_ty@3x.png",
              },
              POINT_BG: {
                zx: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/pingfen_zx@3x.png",
                ty: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/pingfen_ty@3x.png",
              },
              INOUT_HOTEL:
                "https://images3.c-ctrip.com/ztrip/hotel/icons/xq/inout_hotel@3x.png",
            },
            F = "STAR_DESCRIPTION",
            L = "DIAMOND_PLATE",
            R = [
              100001, 100002, 100003, 361, 105, 263, 369, 60, 133, 175, 65, 42,
              451, 452, 453, 454, 5, 6, 164, 68, 140, 97, 364, 24, 22, 73, 26,
              71, 72, 34, 33, 373, 32, 27, 31, 30, 158, 156, 237, 43,
            ],
            _ = i(48813),
            E = function (e) {
              return "https://images3.c-ctrip.com/ztrip/hotel/hotel_".concat(
                e,
                "@3x.png"
              );
            },
            A = function (e) {
              var t = e.facilityTabs,
                i = e.currentFacTab,
                a = e.onClickFacilityTab;
              return null == t
                ? void 0
                : t.map(function (e, t) {
                    return (0, _.BX)(
                      w.View,
                      {
                        className: "tab",
                        onClick: function () {
                          return a(e);
                        },
                        id: "".concat(e.value, "_").concat(e.id),
                        children: [
                          (0, _.tZ)(w.Text, {
                            className: "txt".concat(
                              (0, x.gP)(i === e.value, " selected")
                            ),
                            children: e.label,
                          }),
                          i === e.value &&
                            (0, _.tZ)(w.Image, {
                              className: "btline",
                              src: S.TAB_UNDERLINE[b.default.zxTyStr],
                            }),
                        ],
                      },
                      t
                    );
                  });
            },
            z = function (e) {
              var t = e.hotelPicShows,
                i = e.pictureTextDescs,
                a = e.setCurrentTab,
                c = (0, f.useCallback)(
                  function (e) {
                    (null == e ? void 0 : e.intersectionRatio) > 0 && a("sell");
                  },
                  [a]
                ),
                l = (0, k.Z)({
                  selector: "#sell_0",
                  targetSelector: "#sell",
                  margins: { bottom: 40 },
                  observeCallback: c,
                  callbackDeps: [a],
                });
              return (0, _.tZ)(w.View, {
                id: "sell",
                ref: l,
                children:
                  (null == t ? void 0 : t.length) > 0
                    ? (0, _.tZ)(P.Z, { pictures: t, hideTitle: !0 })
                    : (0, _.tZ)(w.View, {
                        className: "sell-wrap",
                        children: i.map(function (e, t) {
                          var i = e.type,
                            a = e.value,
                            c = "image" === i;
                          return (0,
                          _.tZ)(w.View, { className: "sell-item", children: c ? (0, _.tZ)(w.Image, { className: "sell-img", mode: "widthFix", src: a }) : (0, _.tZ)(w.View, { className: "sell-desc", children: a }) }, t);
                        }),
                      }),
              });
            },
            O = function (e, t) {
              var i,
                a,
                c = "",
                l =
                  (null == e || null === (i = e.facilityDetail) || void 0 === i
                    ? void 0
                    : i.feeInfo) || {},
                n = l.feeCharge,
                s = l.feeDetails;
              n &&
                ("Free" === n
                  ? (c = "免费")
                  : "Paid" === n &&
                    (c = (0, B.yD)(s)
                      ? "收费"
                      : s
                          .map(function (e) {
                            return e.feeTime && e.feePrice
                              ? e.feeTime + e.feePrice + "元"
                              : "";
                          })
                          .join(" ")));
              var r =
                null === (a = e.parkingAndChargingPointList) || void 0 === a
                  ? void 0
                  : a.parkingList;
              if (!(0, B.yD)(r))
                if (t) c = "免费";
                else {
                  var o = r[0];
                  o.price &&
                    o.currency &&
                    o.chargeStandardShowContents &&
                    (c = o.chargeStandardShowContents + o.price + o.currency);
                }
              return c;
            },
            U = function (e) {
              var t,
                i,
                a,
                c,
                l = [],
                n =
                  null === (t = e.parkingAndChargingPointList) || void 0 === t
                    ? void 0
                    : t.parkingList;
              if (!(0, B.yD)(n)) {
                var s = n[0];
                s.location && l.push("所处位置：" + s.location),
                  s.isReservedShowContents &&
                    l.push("预约信息：" + s.isReservedShowContents);
              }
              var r =
                null === (i = e.parkingAndChargingPointList) || void 0 === i
                  ? void 0
                  : i.chargingPointList;
              if (!(0, B.yD)(r)) {
                var o = r[0];
                o.chargingMethod && l.push("充电类型：" + o.chargingMethod),
                  o.locationShowContents &&
                    l.push("所处位置：" + o.locationShowContents);
              }
              var m =
                null == e || null === (a = e.facilityDetail) || void 0 === a
                  ? void 0
                  : a.businessHourInfos;
              (0, B.yD)(m) ||
                m.forEach(function (e) {
                  var t,
                    i = "星期";
                  if (
                    7 ===
                    (null == e || null === (t = e.availableDate) || void 0 === t
                      ? void 0
                      : t.length)
                  )
                    i = "每日";
                  else {
                    var a,
                      c = {
                        1: "一",
                        2: "二",
                        3: "三",
                        4: "四",
                        5: "五",
                        6: "六",
                        7: "日",
                      };
                    i +=
                      null === (a = e.availableDate) || void 0 === a
                        ? void 0
                        : a
                            .map(function (e) {
                              return c[e];
                            })
                            .join("、");
                  }
                  l.push("营业日期：" + i),
                    e.startTime &&
                      e.endTime &&
                      l.push("营业时间：" + e.startTime + "-" + e.endTime);
                });
              var d =
                  null == e || null === (c = e.facilityDetail) || void 0 === c
                    ? void 0
                    : c.reservationInfo,
                h = null == d ? void 0 : d.reserve,
                u = "";
              return (
                "T" === h
                  ? (u =
                      "预约信息：需提前至少" +
                      (null == d ? void 0 : d.time) +
                      (null == d ? void 0 : d.timeUnit) +
                      "联系酒店预约")
                  : "F" === h
                  ? (u = "预约信息：无需预约")
                  : "unknown" === h && (u = "预约信息：请拨打酒店电话确认"),
                u && l.push(u),
                l
              );
            },
            H = function (e) {
              var t = e.specialFacilities,
                i = e.simpleFacilities,
                a = e.facilityTypePicInfoList,
                c = e.typedFacilities,
                l = e.setCurrentTab,
                n = e._renderItemWrapper,
                s = (0, f.useCallback)(
                  function (e) {
                    (null == e ? void 0 : e.intersectionRatio) > 0 &&
                      l("service");
                  },
                  [l]
                ),
                r = (0, k.Z)({
                  selector: "#service_1",
                  targetSelector: "#service",
                  observeCallback: s,
                  callbackDeps: [l],
                });
              return (0, _.BX)(w.View, {
                id: "service",
                ref: r,
                children: [
                  (0, _.BX)(w.View, {
                    className: "hotel-white-box hotel-facility-box",
                    children: [
                      (0, _.tZ)(w.View, {
                        className: "tit",
                        children: "特色设施",
                      }),
                      t.map(function (e, t) {
                        var i = e.imageName,
                          a = e.name,
                          c = e.isFree,
                          l = E(i),
                          n = "charge".concat((0, x.gP)(c, " primary"));
                        return (0, _.BX)(
                          w.View,
                          {
                            className: "item",
                            children: [
                              (0, _.BX)(w.View, {
                                className: "tit-wrap",
                                children: [
                                  (0, _.tZ)(w.Image, {
                                    className: "icon",
                                    src: l,
                                  }),
                                  (0, _.tZ)(w.Text, {
                                    className: "name",
                                    children: a,
                                  }),
                                  (0, _.tZ)(w.Text, {
                                    className: n,
                                    children: O(e, c),
                                  }),
                                ],
                              }),
                              (0, _.tZ)(w.View, {
                                className: "desc-wrap",
                                children: U(e).map(function (e, t) {
                                  return (0,
                                  _.tZ)(w.View, { className: "desc", children: e }, t);
                                }),
                              }),
                            ],
                          },
                          t
                        );
                      }),
                      (0, _.tZ)(w.View, {
                        className: "simple-wrap",
                        children:
                          null == i
                            ? void 0
                            : i.map(function (e, t) {
                                var i = e.imageName,
                                  a = e.name,
                                  c = e.isFree,
                                  l = E(i),
                                  n = "charge".concat((0, x.gP)(c, " primary"));
                                return (0,
                                _.tZ)(w.View, { className: "item inline", children: (0, _.BX)(w.View, { className: "tit-wrap", children: [(0, _.tZ)(w.Image, { className: "icon", src: l }), (0, _.tZ)(w.Text, { className: "name", children: a }), (0, _.tZ)(w.Text, { className: n, children: O(e, c) })] }) }, t);
                              }),
                      }),
                    ],
                  }),
                  (0, _.BX)(w.View, {
                    className: "hotel-white-box hotel-facility-box",
                    children: [
                      (0, _.tZ)(w.View, {
                        className: "tit",
                        children: "更多设施",
                      }),
                      (null == a ? void 0 : a.length) > 0 &&
                        (0, _.tZ)(Z.Z, { themeList: a }),
                      null == c
                        ? void 0
                        : c.map(function (e, t) {
                            return n(e, t, !0);
                          }),
                    ],
                  }),
                ],
              });
            },
            j = function (e) {
              var t = e.hotelPolicyList,
                i = e.childIconUrl,
                a = e.childItemTitle,
                c = e.policeInfo,
                l = e.childExtraBed,
                n = e.childBreakfast,
                s = e.setCurrentTab,
                r = e._renderItemWrapper,
                o = e._renderTable,
                m = (0, f.useCallback)(
                  function (e) {
                    (null == e ? void 0 : e.intersectionRatio) > 0 &&
                      s("policy");
                  },
                  [s]
                ),
                d = (0, k.Z)({
                  selector: "#policy_2",
                  targetSelector: "#policy",
                  observeCallback: m,
                  callbackDeps: [s],
                });
              return null != t && t.length
                ? (0, _.BX)(w.View, {
                    className: "hotel-white-box hotel-policy-box",
                    id: "policy",
                    ref: d,
                    children: [
                      (0, _.tZ)(w.View, {
                        className: "tit",
                        children: "酒店政策",
                      }),
                      t
                        .filter(function (e) {
                          return "儿童政策" !== e.itemTitle;
                        })
                        .map(function (e, t) {
                          return r(e, t);
                        }),
                      i &&
                        (0, _.BX)(w.View, {
                          className: "item child-wrapper",
                          children: [
                            (0, _.BX)(w.View, {
                              className: "tit-wrap",
                              children: [
                                (0, _.tZ)(w.Image, {
                                  src: i,
                                  className: "icon",
                                }),
                                (0, _.tZ)(w.Text, {
                                  className: "name",
                                  children: a,
                                }),
                              ],
                            }),
                            c.length > 0 &&
                              (0, _.tZ)(w.View, {
                                className: "police-info",
                                children: c.map(function (e, t) {
                                  return (0,
                                  _.tZ)(y.ZtRichText, { nodes: e, className: "des" }, t);
                                }),
                              }),
                            (0, _.BX)(w.View, {
                              className: "sub-items-wrapper",
                              children: [
                                l &&
                                  (0, _.BX)(w.View, {
                                    className: "sub-item block",
                                    children: [
                                      (0, _.tZ)(w.View, {
                                        className: "name",
                                        children: "床铺",
                                      }),
                                      l.childExtraBedDesc &&
                                        (0, _.tZ)(y.ZtRichText, {
                                          nodes: l.childExtraBedDesc,
                                          className: "des",
                                        }),
                                      o(l.extraBedDetailList),
                                    ],
                                  }),
                                n &&
                                  (0, _.BX)(w.View, {
                                    className: "sub-item block",
                                    children: [
                                      (0, _.tZ)(w.View, {
                                        className: "name",
                                        children: "早餐",
                                      }),
                                      n.childBreakfastDesc &&
                                        (0, _.tZ)(y.ZtRichText, {
                                          nodes: n.childBreakfastDesc,
                                          className: "des",
                                        }),
                                      o(n.breakfastDetailList),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  })
                : (0, _.tZ)(w.View, {});
            },
            M = function (e) {
              var t = e.recommendData,
                i = e.recommendTabs,
                a = e.selectedItem,
                c = e.selectedType,
                l = e.setCurrentTab,
                n = e.toRecommendDetail,
                s = e.onClickRecommendTab,
                r = e.onClickRecommendItem,
                o = (0, f.useCallback)(
                  function (e) {
                    (null == e ? void 0 : e.intersectionRatio) > 0 &&
                      l("traffic");
                  },
                  [l]
                ),
                m = (0, k.Z)({
                  selector: "#traffic_3",
                  targetSelector: "#traffic",
                  observeCallback: o,
                  callbackDeps: [l],
                });
              return (0, _.BX)(w.View, {
                className: "traffic-wrap",
                id: "traffic",
                ref: m,
                children: [
                  (0, _.tZ)(w.View, { className: "tit", children: "交通娱乐" }),
                  (0, _.tZ)(w.View, {
                    className: "tabs".concat((0, x.gP)(c, " select")),
                    children:
                      null == i
                        ? void 0
                        : i.map(function (e, t) {
                            return (0, _.tZ)(
                              w.View,
                              {
                                className: "tab",
                                id: "AXDj",
                                onClick: function () {
                                  return s(e);
                                },
                                children: (0, _.BX)(w.View, {
                                  className: "txt".concat(
                                    (0, x.gP)(c === e.recommendType, " primary")
                                  ),
                                  children: [
                                    (0, _.tZ)(w.Text, {
                                      children: e.recommendName,
                                    }),
                                    c === e.recommendType &&
                                      (0, _.tZ)(w.Image, {
                                        className: "btline",
                                        src: S.TAB_UNDERLINE[b.default.zxTyStr],
                                      }),
                                  ],
                                }),
                              },
                              t
                            );
                          }),
                  }),
                  (0, _.tZ)(w.View, {
                    className: "list".concat((0, x.gP)(c, " active")),
                    children:
                      null == t
                        ? void 0
                        : t.map(function (e, t) {
                            var i,
                              c,
                              l = a === "".concat(e.type, "_").concat(t),
                              s = "item".concat((0, x.gP)(l, " selected")),
                              o = (0, p.Z)(
                                {
                                  backgroundImage: "url(".concat(
                                    S.POINT_BG[b.default.zxTyStr],
                                    ")"
                                  ),
                                },
                                (0, x.LP)(e.customerPoint, "flex")
                              ),
                              m = [4, 9].includes(e.type);
                            return (0, _.BX)(
                              w.View,
                              {
                                className: s,
                                id: "AXDk",
                                onClick: function () {
                                  return r(e, t);
                                },
                                children: [
                                  (0, _.tZ)(w.View, {
                                    className: "left",
                                    style: (0, x.LP)(e.imgUrl),
                                    children: (0, _.tZ)(w.Image, {
                                      className: "img",
                                      src: e.imgUrl,
                                    }),
                                  }),
                                  (0, _.BX)(w.View, {
                                    className: "right",
                                    children: [
                                      (0, _.tZ)(w.View, {
                                        className: "name",
                                        children: e.name,
                                      }),
                                      (0, _.BX)(w.View, {
                                        className: "point-wrap",
                                        children: [
                                          (0, _.tZ)(w.View, {
                                            className: "point",
                                            style: o,
                                            children: e.customerPoint,
                                          }),
                                          (0, _.tZ)(w.Text, {
                                            className: "price",
                                            style: (0, x.LP)(e.hotelPrice),
                                            children: e.hotelPrice,
                                          }),
                                        ],
                                      }),
                                      (0, _.BX)(w.View, {
                                        className: "price",
                                        style: (0, x.LP)(e.avgPrice),
                                        children: ["¥", e.avgPrice, "/人"],
                                      }),
                                      (0, _.tZ)(w.View, {
                                        className: "tags",
                                        children:
                                          null === (i = e.descTags) ||
                                          void 0 === i ||
                                          null ===
                                            (c = i.filter(function (e) {
                                              return !!e;
                                            })) ||
                                          void 0 === c
                                            ? void 0
                                            : c.map(function (e, t) {
                                                return (0,
                                                _.tZ)(w.Text, { className: "primary", children: e }, t);
                                              }),
                                      }),
                                      (0, _.tZ)(w.View, {
                                        className: "open-time",
                                        children: e.openTime,
                                      }),
                                      (0, _.tZ)(w.View, {
                                        className: "remark",
                                        children: e.distanceRemark,
                                      }),
                                      (0, _.tZ)(w.View, {
                                        className: "nav-btn-wrap",
                                        id: "AXDl",
                                        onClick: function (e) {
                                          return e.stopPropagation();
                                        },
                                        children:
                                          m &&
                                          (0, _.tZ)(w.View, {
                                            className: "nav-detail btn-primary",
                                            id: "AXDm",
                                            onClick: function () {
                                              return n(e);
                                            },
                                            children: "详情",
                                          }),
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
              });
            },
            W =
              (0, X.h)(!1, { usePageWrapper: !0 })(
                (a = (function (e) {
                  (0, d.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var a;
                    return (
                      (0, r.Z)(this, i),
                      (a = t.call(this, e)),
                      (0, u.Z)((0, m.Z)(a), "isFreeFacility", function (e) {
                        var t, i, a, c, l;
                        return (
                          "Free" ===
                            (null === (t = e.facilityDetail) ||
                            void 0 === t ||
                            null === (i = t.feeInfo) ||
                            void 0 === i
                              ? void 0
                              : i.feeCharge) ||
                          (null === (a = e.parkingAndChargingPointList) ||
                          void 0 === a ||
                          null === (c = a.parkingList) ||
                          void 0 === c ||
                          null ===
                            (l = c.filter(function (e) {
                              return (
                                "免费" ===
                                (null == e
                                  ? void 0
                                  : e.isChargeableShowContents)
                              );
                            })) ||
                          void 0 === l
                            ? void 0
                            : l.length) > 0
                        );
                      }),
                      (a.pageContentIsFullScreen = !0),
                      (a.state = {
                        facilityDetail: {},
                        typedFacilities: [],
                        childPolicyInfo: {},
                        tableHeaderMapping: {
                          limitDesc: "限制说明",
                          chargeDesc: "费用",
                          bedChargeDesc: "床铺及费用",
                          breakfastChargeDesc: "早餐及其费用",
                        },
                        drawerType: null,
                        pictureTextDescs: [],
                        facilityTabs: [
                          { label: "卖点", value: "sell", id: 0 },
                          { label: "设施服务", value: "service", id: 1 },
                          { label: "政策", value: "policy", id: 2 },
                          { label: "交通娱乐", value: "traffic", id: 3 },
                        ],
                        currentFacTab: "sell",
                        tabsRectTop: 0,
                        showFixedTabs: !1,
                        scrollIntoView: null,
                        recommendData: [],
                        recommendTabs: [
                          {
                            recommendName: "交通",
                            recommendType: 5,
                            select: !0,
                          },
                          {
                            recommendName: "美食",
                            recommendType: 1,
                            select: !1,
                          },
                          {
                            recommendName: "景点",
                            recommendType: 4,
                            select: !1,
                          },
                          {
                            recommendName: "购物",
                            recommendType: 2,
                            select: !1,
                          },
                        ],
                        selectedItem: null,
                        selectedType: 5,
                        specialFacilities: [],
                        simpleFacilities: [],
                      }),
                      a
                    );
                  }
                  return (
                    (0, o.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e;
                          null !== (e = this.state.hotelPicShows) &&
                            void 0 !== e &&
                            e.length &&
                            this.ubtTrace(208566, {
                              bizKey: "hotel_facility_show",
                              pageId: b.default.isTieyou
                                ? "10650067109"
                                : "10650067107",
                            });
                        },
                      },
                      {
                        key: "onLoad",
                        value: function (e) {
                          var t = (0, B.X5)(e.data);
                          this.setState((0, p.Z)({}, t)),
                            this.getTyHotelFacilityDetail(t),
                            this.getHotelNearByRecommend(t);
                        },
                      },
                      {
                        key: "getElementClientRect",
                        value: function (e) {
                          return new Promise(function (t) {
                            N()
                              .createSelectorQuery()
                              .select(e)
                              .boundingClientRect(t)
                              .exec();
                          });
                        },
                      },
                      {
                        key: "getTyHotelFacilityDetail",
                        value: function (e) {
                          var t = this,
                            i = {
                              data: {
                                hotelId: e.hotelId,
                                checkInDate: e.checkInDate,
                                checkOutDate: e.checkOutDate,
                                pageSource: 1,
                                clientVersion: T.Z.clientVersion,
                                cityId: e.cityId,
                              },
                            };
                          (0, I.BK)(i).then(function (e) {
                            if (1 === e.resultCode) {
                              var i,
                                a,
                                c = e.data || {},
                                l = [],
                                n = [],
                                r = [];
                              R.forEach(function (e) {
                                var i,
                                  a =
                                    null === (i = c.hotelFacilityList) ||
                                    void 0 === i
                                      ? void 0
                                      : i.find(function (t) {
                                          return t.id === e;
                                        });
                                if (a) {
                                  if (
                                    ((a.isFree = t.isFreeFacility(a)),
                                    !a.facilityDetail &&
                                      !a.parkingAndChargingPointList)
                                  )
                                    return r.push(a);
                                  n.push(a);
                                }
                              });
                              var o =
                                null === (i = c.hotelFacilityList) ||
                                void 0 === i
                                  ? void 0
                                  : i.filter(function (e) {
                                      return !R.includes(e.id);
                                    });
                              null == o ||
                                o.forEach(function (e) {
                                  var i = e.type,
                                    a = e.imageName,
                                    c = e.typeName,
                                    n = e.id,
                                    s =
                                      "https://images3.c-ctrip.com/ztrip/hotel/hotel_".concat(
                                        a,
                                        "@3x.png"
                                      ),
                                    r = 0 === i,
                                    o = 2 === i,
                                    m = l.find(function (e) {
                                      return e.type === i;
                                    });
                                  (e.isFree = t.isFreeFacility(e)),
                                    m
                                      ? m.subItems.push(e)
                                      : l.push({
                                          imageUrl: s,
                                          id: n,
                                          type: i,
                                          typeName: c,
                                          imageName: a,
                                          subItems: [e],
                                          isParking: r,
                                          isTraffic: o,
                                        });
                                });
                              var m = {};
                              if (c.childPolicyInfo) {
                                var d = (c.hotelPolicyList || []).find(
                                    function (e) {
                                      return "儿童政策" === e.itemTitle;
                                    }
                                  ),
                                  h = c.childPolicyInfo,
                                  u = h.childBreakfast,
                                  p = h.childExtraBed,
                                  f = h.policeInfo;
                                (m.childIconUrl = d ? d.iconUrl : ""),
                                  (m.childItemTitle = "儿童及加床"),
                                  (m.policeInfo = f
                                    ? [f.context, f.specialTips].filter(
                                        function (e) {
                                          return !!e;
                                        }
                                      )
                                    : []),
                                  p && (m.childExtraBed = p),
                                  u && (m.childBreakfast = u);
                              }
                              var w = [];
                              if (
                                null !== (a = c.hotelDescription) &&
                                void 0 !== a &&
                                a.context
                              ) {
                                var g,
                                  N = c.hotelDescription.context;
                                null === (g = c.hotelDescription.imageList) ||
                                  void 0 === g ||
                                  g.forEach(function (e, t) {
                                    var i = N.split("{".concat(t, "}")),
                                      a = (0, s.Z)(i, 2),
                                      c = a[0],
                                      l = a[1];
                                    c
                                      ? (c.replace(/{\d+}/g, "") &&
                                          w.push({
                                            type: "txt",
                                            value: c.replace(/{\d+}/g, ""),
                                          }),
                                        w.push({
                                          type: "image",
                                          value: e.imageOrigion,
                                        }),
                                        (N = l))
                                      : w.push({
                                          type: "image",
                                          value: e.imageOrigion,
                                        });
                                  });
                              }
                              t.setState({
                                facilityDetail: c,
                                typedFacilities: l,
                                childPolicyInfo: m,
                                pictureTextDescs: w,
                                specialFacilities: n,
                                simpleFacilities: r,
                              });
                            }
                          });
                        },
                      },
                      {
                        key: "gotoLicense",
                        value: function () {
                          v.Z.twebview({
                            data: {
                              url: "https://market.suanya.com/activity/public/business/license/hotel.html",
                            },
                          });
                        },
                      },
                      {
                        key: "call",
                        value: function () {
                          N().makePhoneCall({
                            phoneNumber: this.state.facilityDetail.telephoneNo,
                          });
                        },
                      },
                      {
                        key: "_renderTable",
                        value: function (e) {
                          var t = this;
                          if (e && e.length) {
                            var i = (0, s.Z)(e, 1)[0],
                              a = Object.keys(i);
                            return (0, _.BX)(w.View, {
                              className: "table",
                              children: [
                                (0, _.tZ)(w.View, {
                                  className: "tr bg-w",
                                  children: a.map(function (e, i) {
                                    return (0,
                                    _.tZ)(w.View, { className: "th", children: t.state.tableHeaderMapping[e] }, i);
                                  }),
                                }),
                                e.map(function (e, t) {
                                  return (0, _.tZ)(
                                    w.View,
                                    {
                                      className: "tr".concat(
                                        t % 2 == 0 ? " bg-g" : ""
                                      ),
                                      children: a.map(function (t, i) {
                                        return (0,
                                        _.tZ)(w.View, { className: "td", children: e[t] }, i);
                                      }),
                                    },
                                    t
                                  );
                                }),
                              ],
                            });
                          }
                        },
                      },
                      {
                        key: "_renderItemWrapper",
                        value: function (e, t, i) {
                          var a = e.imageUrl,
                            c = e.typeName,
                            l = e.subItems,
                            n = e.iconUrl,
                            s = e.itemTitle,
                            r = e.itemValue,
                            o = i ? a : n,
                            m = i ? c : s,
                            d = i ? l : [];
                          return (0, _.BX)(
                            w.View,
                            {
                              className: "item",
                              children: [
                                (0, _.BX)(w.View, {
                                  className: "tit-wrap",
                                  children: [
                                    (0, _.tZ)(w.Image, {
                                      src: o,
                                      className: "icon",
                                    }),
                                    (0, _.tZ)(w.Text, {
                                      className: "name",
                                      children: m,
                                    }),
                                  ],
                                }),
                                (0, _.BX)(w.View, {
                                  className: "sub-items-wrapper",
                                  children: [
                                    r &&
                                      (0, _.tZ)(y.ZtRichText, {
                                        nodes: r,
                                        className: "name",
                                      }),
                                    d.map(function (e, t) {
                                      var i = "charge".concat(
                                        (0, x.gP)(e.isFree, " primary")
                                      );
                                      return (0,
                                      _.BX)(w.View, { className: "sub-item inline", children: [(0, _.tZ)(w.View, { className: "name", children: e.name }), (0, _.tZ)(w.Text, { className: i, children: O(e, e.isFree) })] }, t);
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t
                          );
                        },
                      },
                      {
                        key: "onDrawerClose",
                        value: function () {
                          this.setState({ drawerType: null });
                        },
                      },
                      {
                        key: "onShowDrawer",
                        value: function (e) {
                          this.setState({ drawerType: e });
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          var e = this.state,
                            t = e.facilityTabs,
                            i = e.currentFacTab,
                            a = e.showFixedTabs;
                          return (0, _.BX)(w.View, {
                            className: "ht-facility-title",
                            children: [
                              (0, _.tZ)(w.View, {
                                className: "title",
                                children: "卖点·详情",
                              }),
                              (0, _.tZ)(w.View, {
                                className: "ht-fa-tabs fixed",
                                style: (0, x.LP)(a, "flex"),
                                children: (0, _.tZ)(A, {
                                  facilityTabs: t,
                                  currentFacTab: i,
                                  onClickFacilityTab: this.onClickFacilityTab,
                                }),
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "goRankList",
                        value: function (e) {
                          v.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "onClickFacilityTab",
                        value: function (e) {
                          this.setState({
                            scrollIntoView: e.value,
                            currentFacTab: e.value,
                          });
                        },
                      },
                      {
                        key: "setCurrentTab",
                        value: function (e) {
                          var t = { currentFacTab: e };
                          this.state.scrollIntoView &&
                            (t.scrollIntoView = null),
                            this.setState(t);
                        },
                      },
                      {
                        key: "onFacilityScroll",
                        value: function (e) {
                          var t = this,
                            i = this.state,
                            a = i.tabsRectTop,
                            c = i.showFixedTabs;
                          if (!this.isGettingTabsRectTop)
                            return a
                              ? void (e.detail.scrollTop >= a && !c
                                  ? (this.setState({ showFixedTabs: !0 }),
                                    this.setHeaderClassName("white"))
                                  : e.detail.scrollTop < a &&
                                    c &&
                                    (this.setState({ showFixedTabs: !1 }),
                                    this.setHeaderClassName("")))
                              : ((this.isGettingTabsRectTop = !0),
                                void this.getElementClientRect(
                                  ".content-wrap .ht-fa-tabs"
                                ).then(function (e) {
                                  null != e &&
                                    e.top &&
                                    t.setState(
                                      { tabsRectTop: e.top },
                                      function () {
                                        t.isGettingTabsRectTop = !1;
                                      }
                                    );
                                }));
                        },
                      },
                      {
                        key: "getHotelNearByRecommend",
                        value: (function () {
                          var e = (0, n.Z)(
                            (0, l.Z)().mark(function e(t) {
                              var i,
                                a,
                                c,
                                n,
                                s,
                                r,
                                o,
                                m,
                                d = this;
                              return (0, l.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i = t || this.state),
                                          (a = i.checkInDate),
                                          (c = i.checkOutDate),
                                          (n = i.hotelId),
                                          (s = i.cityId),
                                          (r = i.fromPage),
                                          (o = i.hotelPoint),
                                          (m = this.state.selectedType),
                                          e.abrupt(
                                            "return",
                                            (0, I.kQ)(
                                              {
                                                data: {
                                                  checkIn: a,
                                                  checkOut: c,
                                                  hotelId: n,
                                                  cityId: s,
                                                  latitude: o.lat,
                                                  longitude: o.lng,
                                                  recommendType: m,
                                                  fromPage: r,
                                                },
                                              },
                                              {
                                                extension: [
                                                  {
                                                    name: "CorrectVersion",
                                                    value: 710001,
                                                  },
                                                ],
                                              }
                                            )
                                              .then(function (e) {
                                                var t = (e.data || {}).datas,
                                                  i = {};
                                                null != t &&
                                                  t.length &&
                                                  (i.recommendData = t),
                                                  d.setState(i);
                                              })
                                              .catch(function (e) {
                                                console.error(e);
                                              })
                                          )
                                        );
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
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onClickRecommendTab",
                        value: function (e) {
                          var t = this;
                          this.state.selectedType !== e.recommendType &&
                            this.setState(
                              { selectedType: e.recommendType },
                              function () {
                                t.getHotelNearByRecommend();
                              }
                            );
                        },
                      },
                      {
                        key: "onClickRecommendItem",
                        value: function (e, t) {
                          var i = "".concat(e.type, "_").concat(t);
                          i !== this.state.selectedItem &&
                            this.setState({ selectedItem: i });
                        },
                      },
                      {
                        key: "toRecommendDetail",
                        value: function (e) {
                          var t = this.state.cityId;
                          9 === e.type
                            ? this.toHotelDetail({
                                cityId: t,
                                hotelName: e.name,
                                hotelId: e.hotelId,
                              })
                            : 4 === e.type &&
                              e.url &&
                              this.toTicketDetail(e.url);
                        },
                      },
                      {
                        key: "toTicketDetail",
                        value: function (e) {
                          var t = e.split("?"),
                            i = (0, s.Z)(t, 2),
                            a = (i[0], i[1]),
                            c = new C.Z(a).get("scenicSpotId"),
                            l =
                              "/pages/ticket/packageA/detail/detail?scenicSpotId=".concat(
                                c,
                                "&source=wechat"
                              );
                          N().navigateTo({ url: l });
                        },
                      },
                      {
                        key: "navigateBackToRoomView",
                        value: function () {
                          this.navigateBack({ isRoomView: !0 });
                        },
                      },
                      {
                        key: "getSecondLineScecondItem",
                        value: function () {
                          var e = this.state.facilityDetail,
                            t = e.zhiXingUniteCardInfo,
                            i = e.fitmentYear,
                            a = e.roomQuantity;
                          return null != t && t.cardName
                            ? (0, _.BX)(w.View, {
                                className: "subitem",
                                children: [
                                  (0, _.tZ)(w.View, {
                                    className: "label",
                                    children: "智行钻牌",
                                  }),
                                  (0, _.BX)(w.View, {
                                    className: "value",
                                    id: "AXDn",
                                    onClick: this.onShowDrawer.bind(this, L),
                                    children: [
                                      (0, _.tZ)(w.Image, {
                                        src: t.cardImageUrl,
                                        className: "plate-icon",
                                      }),
                                      (0, _.tZ)(w.Text, {
                                        className: "ifont-detail iconfont",
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : i
                            ? (0, _.BX)(w.View, {
                                className: "subitem",
                                children: [
                                  (0, _.tZ)(w.View, {
                                    className: "label",
                                    children: "装修时间",
                                  }),
                                  (0, _.BX)(w.View, {
                                    className: "value",
                                    children: [i, "年"],
                                  }),
                                ],
                              })
                            : (0, _.BX)(w.View, {
                                className: "subitem",
                                children: [
                                  (0, _.tZ)(w.View, {
                                    className: "label",
                                    children: "房间数量",
                                  }),
                                  (0, _.tZ)(w.View, {
                                    className: "value",
                                    children: a,
                                  }),
                                ],
                              });
                        },
                      },
                      {
                        key: "getThirdLineItems",
                        value: function () {
                          var e = this.state.facilityDetail,
                            t = e.zhiXingUniteCardInfo,
                            i = e.fitmentYear,
                            a = e.roomQuantity,
                            c =
                              null != i && i.includes("年")
                                ? i
                                : "".concat(i, "年");
                          return null != t && t.cardName
                            ? (0, _.BX)(w.View, {
                                className: "item",
                                children: [
                                  i &&
                                    (0, _.BX)(w.View, {
                                      className: "subitem",
                                      children: [
                                        (0, _.tZ)(w.View, {
                                          className: "label",
                                          children: "装修时间",
                                        }),
                                        (0, _.tZ)(w.View, {
                                          className: "value",
                                          children: c,
                                        }),
                                      ],
                                    }),
                                  (0, _.BX)(w.View, {
                                    className: "subitem",
                                    children: [
                                      (0, _.tZ)(w.View, {
                                        className: "label",
                                        children: "房间数量",
                                      }),
                                      (0, _.BX)(w.View, {
                                        className: "value",
                                        children: [a, "间"],
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : i
                            ? (0, _.tZ)(w.View, {
                                className: "item",
                                children: (0, _.BX)(w.View, {
                                  className: "subitem",
                                  children: [
                                    (0, _.tZ)(w.View, {
                                      className: "label",
                                      children: "房间数量",
                                    }),
                                    (0, _.BX)(w.View, {
                                      className: "value",
                                      children: [a, "间"],
                                    }),
                                  ],
                                }),
                              })
                            : null;
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.facilityDetail,
                            i = t.hotelPolicyList,
                            a = t.zhiXingUniteCardInfo,
                            c = t.hotelName,
                            l = t.openYear,
                            n = t.starLevel,
                            s = t.displayNo,
                            r = t.hotelPicShows,
                            o = t.hotelBasicInfoList,
                            m = t.isStarLicence,
                            d = t.facilityTypePicInfoList,
                            h = t.specialTag,
                            u = t.hotelBigIcon,
                            p = t.rankingInfo,
                            f = e.typedFacilities,
                            g = e.childPolicyInfo,
                            N = g.policeInfo,
                            v = g.childExtraBed,
                            y = g.childBreakfast,
                            T = g.childIconUrl,
                            b = g.childItemTitle,
                            Z = e.drawerType,
                            k = e.pictureTextDescs,
                            I = e.facilityTabs,
                            B = e.currentFacTab,
                            C = e.scrollIntoView,
                            X = e.recommendTabs,
                            P = e.recommendData,
                            R = e.selectedItem,
                            E = e.selectedType,
                            O = e.lastBookTimeStr,
                            U = e.simpleFacilities,
                            W = e.specialFacilities,
                            q = n
                              ? new Array(n).fill().map(function (e, t) {
                                  return t;
                                })
                              : [],
                            G = m ? S.STAR : S.DIAMOND,
                            Q = "ht-title".concat((0, x.gP)(u, " bicon"));
                          return (0, _.BX)(w.View, {
                            className: "ht-facility-wrap",
                            children: [
                              (0, _.BX)(w.ScrollView, {
                                className: "facility-scrollview",
                                scrollY: !0,
                                onScroll: this.onFacilityScroll,
                                scrollIntoView: C,
                                scrollWithAnimation: !0,
                                children: [
                                  (0, _.tZ)(w.View, {
                                    className: Q,
                                    children: c,
                                  }),
                                  (0, _.BX)(w.View, {
                                    className: "ht-card-box",
                                    children: [
                                      (0, _.tZ)(w.Image, {
                                        className: "big-icon",
                                        src: u,
                                      }),
                                      (0, _.BX)(w.View, {
                                        className: "item level",
                                        children: [
                                          (0, _.tZ)(w.View, {
                                            className: "label",
                                            children: "酒店等级",
                                          }),
                                          (0, _.BX)(w.View, {
                                            className: "star",
                                            id: "AXDo",
                                            onClick: this.onShowDrawer.bind(
                                              this,
                                              F
                                            ),
                                            children: [
                                              null == q
                                                ? void 0
                                                : q.map(function (e, t) {
                                                    return (0,
                                                    _.tZ)(w.Image, { src: G, className: "star-icon" }, t);
                                                  }),
                                              h &&
                                                (0, _.tZ)(w.Image, {
                                                  src: h.iconUrl,
                                                  className: "special-icon",
                                                  mode: "widthFix",
                                                }),
                                              (0, _.tZ)(w.Text, {
                                                className:
                                                  "ifont-detail iconfont",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, _.BX)(w.View, {
                                        className: "item",
                                        children: [
                                          (0, _.BX)(w.View, {
                                            className: "subitem",
                                            children: [
                                              (0, _.tZ)(w.View, {
                                                className: "label",
                                                children: "开业时间",
                                              }),
                                              (0, _.BX)(w.View, {
                                                className: "value",
                                                children: [l, "年"],
                                              }),
                                            ],
                                          }),
                                          this.getSecondLineScecondItem(),
                                        ],
                                      }),
                                      this.getThirdLineItems(),
                                      s &&
                                        (0, _.BX)(w.View, {
                                          className: "item contact",
                                          children: [
                                            (0, _.tZ)(w.View, {
                                              className: "label",
                                              children: "酒店电话",
                                            }),
                                            (0, _.tZ)(w.View, {
                                              className: "value",
                                              children: s,
                                            }),
                                            (0, _.tZ)(w.Image, {
                                              className: "tele-icon",
                                              src: S.TELEPHONE,
                                              id: "AXDp",
                                              onClick: this.call,
                                            }),
                                          ],
                                        }),
                                      p &&
                                        (0, _.BX)(w.View, {
                                          className: "item rank",
                                          id: "AXDq",
                                          onClick: this.goRankList.bind(
                                            this,
                                            p.jumpUrl
                                          ),
                                          children: [
                                            (0, _.tZ)(w.Image, {
                                              className: "icon",
                                              src: p.icon,
                                            }),
                                            (0, _.tZ)(w.View, {
                                              className: "vline",
                                            }),
                                            (0, _.tZ)(w.View, {
                                              className: "value",
                                              children: p.desc,
                                            }),
                                            (0, _.tZ)(w.Text, {
                                              className: "ifont-arr iconfont",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, _.BX)(w.View, {
                                    className: "content-wrap",
                                    children: [
                                      (0, _.tZ)(w.View, {
                                        className: "ht-fa-tabs",
                                        children: (0, _.tZ)(A, {
                                          facilityTabs: I,
                                          currentFacTab: B,
                                          onClickFacilityTab:
                                            this.onClickFacilityTab,
                                        }),
                                      }),
                                      (0, _.tZ)(z, {
                                        hotelPicShows: r,
                                        pictureTextDescs: k,
                                        setCurrentTab: this.setCurrentTab,
                                      }),
                                      (0, _.tZ)(H, {
                                        simpleFacilities: U,
                                        specialFacilities: W,
                                        facilityTypePicInfoList: d,
                                        typedFacilities: f,
                                        setCurrentTab: this.setCurrentTab,
                                        _renderItemWrapper:
                                          this._renderItemWrapper,
                                      }),
                                      (null == o ? void 0 : o.length) > 0 &&
                                        (0, _.BX)(w.View, {
                                          className:
                                            "hotel-white-box book-remind-box",
                                          children: [
                                            (0, _.tZ)(w.View, {
                                              className: "tit",
                                              children: "订房必读",
                                            }),
                                            (0, _.tZ)(w.View, {
                                              className: "list-wrap",
                                              children: o.map(function (e, t) {
                                                var i;
                                                return (0, _.BX)(
                                                  w.View,
                                                  {
                                                    className: "item",
                                                    children: [
                                                      (0, _.tZ)(w.View, {
                                                        className: "dot",
                                                      }),
                                                      (0, _.BX)(w.View, {
                                                        className: "detail",
                                                        children: [
                                                          (0, _.tZ)(w.View, {
                                                            className:
                                                              "sub-tit",
                                                            children: e.title,
                                                          }),
                                                          null ===
                                                            (i =
                                                              e.subSectionList) ||
                                                          void 0 === i
                                                            ? void 0
                                                            : i.map(function (
                                                                e,
                                                                t
                                                              ) {
                                                                return (0,
                                                                _.tZ)(
                                                                  w.View,
                                                                  {
                                                                    className:
                                                                      "txt",
                                                                    children:
                                                                      e.content,
                                                                  },
                                                                  t
                                                                );
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
                                      (0, _.tZ)(j, {
                                        hotelPolicyList: i,
                                        childIconUrl: T,
                                        childItemTitle: b,
                                        policeInfo: N,
                                        childExtraBed: v,
                                        childBreakfast: y,
                                        setCurrentTab: this.setCurrentTab,
                                        _renderItemWrapper:
                                          this._renderItemWrapper,
                                        _renderTable: this._renderTable,
                                      }),
                                    ],
                                  }),
                                  (0, _.tZ)(w.View, {
                                    className:
                                      "hotel-white-box hotel-filing-box",
                                    id: "AXDr",
                                    onClick: this.gotoLicense,
                                    children: (0, _.BX)(w.View, {
                                      className: "tit-wrap",
                                      children: [
                                        (0, _.tZ)(w.Text, {
                                          className: "tit",
                                          children: "资质备案",
                                        }),
                                        (0, _.BX)(w.View, {
                                          className: "ifont-wrap",
                                          children: [
                                            (0, _.tZ)(w.Text, {
                                              className: "ifont-desc",
                                              children: "查看详情",
                                            }),
                                            (0, _.tZ)(w.Text, {
                                              className: "ifont-arr iconfont",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, _.tZ)(M, {
                                    recommendData: P,
                                    recommendTabs: X,
                                    selectedItem: R,
                                    selectedType: E,
                                    setCurrentTab: this.setCurrentTab,
                                    toRecommendDetail: this.toRecommendDetail,
                                    onClickRecommendTab:
                                      this.onClickRecommendTab,
                                    onClickRecommendItem:
                                      this.onClickRecommendItem,
                                  }),
                                  (0, _.BX)(w.View, {
                                    className: "bottom-block",
                                    children: [
                                      (0, _.tZ)(w.View, {
                                        className: "botm-desc",
                                        children: "我是有底线的哦～",
                                      }),
                                      (0, _.BX)(w.View, {
                                        className: "botm-fixed",
                                        children: [
                                          (0, _.BX)(w.View, {
                                            className: "last-book",
                                            children: [
                                              (0, _.tZ)(w.Image, {
                                                src: S.INOUT_HOTEL,
                                                className: "icon",
                                              }),
                                              (0, _.tZ)(w.Text, {
                                                className: "text",
                                                children: O,
                                              }),
                                            ],
                                          }),
                                          (0, _.tZ)(w.View, {
                                            className: "btn-wrap",
                                            children: (0, _.tZ)(w.View, {
                                              class: "btn btn-primary",
                                              id: "AXDs",
                                              onClick:
                                                this.navigateBackToRoomView,
                                              children: "查看房型",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, _.BX)(V.Z, {
                                show: Boolean(Z),
                                onClose: this.onDrawerClose,
                                children: [
                                  (0, _.BX)(w.View, {
                                    className: "star-drawer",
                                    style: (0, x.LP)(Z === F),
                                    children: [
                                      (0, _.tZ)(w.View, {
                                        className: "title",
                                        children: "国内酒店星级说明",
                                      }),
                                      (0, _.tZ)(w.View, {
                                        className: "image-content",
                                        children: (0, _.tZ)(w.Image, {
                                          className: "cover",
                                          src: S.STAR_DESCRIPTION,
                                          mode: "widthFix",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, _.BX)(w.View, {
                                    className: "plate-drawer",
                                    style: (0, x.LP)(Z === L),
                                    children: [
                                      (0, _.tZ)(w.View, {
                                        className: "title",
                                        children: "智行挂牌酒店",
                                      }),
                                      (0, _.BX)(w.View, {
                                        className: "drawer-content",
                                        children: [
                                          (0, _.BX)(w.View, {
                                            className: "icon-wrapper",
                                            children: [
                                              (0, _.tZ)(w.Image, {
                                                src:
                                                  null == a
                                                    ? void 0
                                                    : a.cardImageUrl,
                                                className: "icon",
                                              }),
                                              (0, _.tZ)(w.Text, {
                                                className: "name",
                                                children:
                                                  null == a
                                                    ? void 0
                                                    : a.cardName,
                                              }),
                                            ],
                                          }),
                                          (0, _.tZ)(w.View, {
                                            className: "des",
                                            children:
                                              null == a
                                                ? void 0
                                                : a.cardIntroduction,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, _.tZ)(D.Z, {}),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(f.default.Component))
              ) || a;
          Page(
            (0, c.createPageConfig)(
              W,
              "pages/hotel/facility/facility",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "卖点·详情",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#fff",
                backgroundColorBottom: "#efefef",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(52512);
        }),
          e.O();
      },
    ]);
})();
