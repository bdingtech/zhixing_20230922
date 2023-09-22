!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [92333],
      {
        67010: function (e, t, i) {
          var n = i(32180),
            o = i(22276),
            l = i(90983),
            r = i(79301),
            a = i(95308),
            c = i(298),
            s = i(57042),
            d = i(24460),
            u = i(81876),
            g = i(21867),
            f = i(86066),
            h = i(45023),
            p = i(52500),
            m = i(71515),
            y = i(92954),
            Z = i.n(y),
            w = i(19364),
            v = i(83606),
            S = i(6296),
            x = i(49528),
            C = i(85372),
            b = i(23577),
            I = i(48813),
            T =
              ((0, x.lW)({
                ticketItemText: {
                  color: "#3c5a86",
                  fontSize: 12,
                  fontFamily: "PingFangSC-Regular",
                },
                bookDesc: {
                  fontFamily: "PingFangSC-Regular",
                  fontSize: 12,
                  color: C.Z.mainColor,
                  lineHeight: 17,
                },
              }),
              function (e) {
                var t = e.curHeight,
                  i = e.curWidth,
                  n = e.curColor;
                return (0, I.tZ)(m.View, {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  },
                  children: (0, I.tZ)(m.View, {
                    style: {
                      backgroundColor: n || "#F5F5F5",
                      height: t || 0.5,
                      width: i || "100%",
                    },
                  }),
                });
              }),
            R = function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            },
            L = function (e) {
              if (!e || !R(e) || !e.length) return [];
              var t = [];
              return (
                e.forEach(function (e) {
                  var i = {
                    saleUnitName: e.saleUnitName,
                    newLevelSecondSaleUnitList: [],
                  };
                  e.levelFirstSaleUnitList &&
                    R(e.levelFirstSaleUnitList) &&
                    e.levelFirstSaleUnitList.length &&
                    e.levelFirstSaleUnitList.forEach(function (e) {
                      var t = {
                        name: e.name || "",
                        resourceList: [],
                        minMarketPrice: e.minMarketPrice || 0,
                        minPrice: e.minPrice || 0,
                      };
                      e.levelSecondSaleUnitList &&
                        R(e.levelSecondSaleUnitList) &&
                        e.levelSecondSaleUnitList.length &&
                        e.levelSecondSaleUnitList.forEach(function (e) {
                          t.resourceList = t.resourceList.concat(
                            e.resourceList || []
                          );
                        }),
                        i.newLevelSecondSaleUnitList.push(t);
                    }),
                    i.newLevelSecondSaleUnitList.length && t.push(i);
                }),
                t
              );
            },
            F = function (e) {
              if (!e || !R(e) || !e.length) return [];
              var t = [],
                i = { 1: "随时退", 2: "条件退", 3: "不可退" };
              return (
                e.forEach(function (e) {
                  var n = {
                    saleUnitName: e.saleUnitName,
                    saleUnitNameC: e.saleUnitNameC,
                    saleCount: e.saleCount,
                    levelFirstSaleUnitList: [],
                  };
                  e.levelFirstSaleUnitList &&
                    R(e.levelFirstSaleUnitList) &&
                    e.levelFirstSaleUnitList.length &&
                    e.levelFirstSaleUnitList.forEach(function (e) {
                      var t = {
                        name: e.name || "",
                        tag: e.tag || "",
                        resourceList: [],
                        productList: [],
                        minMarketPrice: e.minMarketPrice || 0,
                        minPrice: e.minPrice || 0,
                      };
                      e.levelSecondSaleUnitList &&
                        R(e.levelSecondSaleUnitList) &&
                        e.levelSecondSaleUnitList.length &&
                        e.levelSecondSaleUnitList.forEach(function (e) {
                          var n,
                            o = [];
                          null == e ||
                            null === (n = e.productList) ||
                            void 0 === n ||
                            n.forEach(function (t) {
                              var n,
                                l,
                                r,
                                a,
                                c,
                                s,
                                d,
                                u,
                                g,
                                f,
                                h,
                                p,
                                m,
                                y,
                                Z,
                                w,
                                v,
                                S,
                                x,
                                C,
                                b;
                              if (
                                (null != t &&
                                  null !== (n = t.resource) &&
                                  void 0 !== n &&
                                  n.getTicketTag &&
                                  !o.includes(
                                    null == t ||
                                      null === (l = t.resource) ||
                                      void 0 === l
                                      ? void 0
                                      : l.getTicketTag
                                  ) &&
                                  o.push(
                                    null == t ||
                                      null === (y = t.resource) ||
                                      void 0 === y
                                      ? void 0
                                      : y.getTicketTag
                                  ),
                                (null != t &&
                                  null !== (r = t.resource) &&
                                  void 0 !== r &&
                                  r.quickTicketChannelDesc &&
                                  null != t &&
                                  null !== (a = t.resource) &&
                                  void 0 !== a &&
                                  null !== (c = a.quickTicketChannelDesc) &&
                                  void 0 !== c &&
                                  c.length &&
                                  1 !==
                                    (null == t ||
                                    null === (s = t.resource) ||
                                    void 0 === s
                                      ? void 0
                                      : s.resourceType)) ||
                                  (i[
                                    null == t ||
                                    null === (Z = t.resource) ||
                                    void 0 === Z
                                      ? void 0
                                      : Z.refundNewType
                                  ] &&
                                    !o.includes(
                                      i[
                                        null == t ||
                                        null === (w = t.resource) ||
                                        void 0 === w
                                          ? void 0
                                          : w.refundNewType
                                      ]
                                    ) &&
                                    o.push(
                                      i[
                                        null == t ||
                                        null === (v = t.resource) ||
                                        void 0 === v
                                          ? void 0
                                          : v.refundNewType
                                      ]
                                    )),
                                null != t &&
                                  null !== (d = t.resource) &&
                                  void 0 !== d &&
                                  d.resourceAddCategoryList)
                              ) {
                                for (
                                  var I, T = 0;
                                  T <
                                  (null == t ||
                                  null === (R = t.resource) ||
                                  void 0 === R
                                    ? void 0
                                    : R.resourceAddCategoryList.length);
                                  T++
                                ) {
                                  var R, L, F;
                                  if (
                                    null != t &&
                                    null !== (L = t.resource) &&
                                    void 0 !== L &&
                                    null !==
                                      (F = L.resourceAddCategoryList[T]) &&
                                    void 0 !== F &&
                                    F.resourceAddInfoList
                                  )
                                    for (
                                      var V = 0;
                                      V <
                                      (null == t ||
                                      null === (B = t.resource) ||
                                      void 0 === B ||
                                      null ===
                                        (k = B.resourceAddCategoryList[T]) ||
                                      void 0 === k
                                        ? void 0
                                        : k.resourceAddInfoList.length);
                                      V++
                                    ) {
                                      var B, k, _, D, P;
                                      if (
                                        "83" ===
                                        (null == t ||
                                        null === (_ = t.resource) ||
                                        void 0 === _ ||
                                        null ===
                                          (D = _.resourceAddCategoryList[T]) ||
                                        void 0 === D ||
                                        null ===
                                          (P = D.resourceAddInfoList[V]) ||
                                        void 0 === P
                                          ? void 0
                                          : P.code)
                                      ) {
                                        var z, N, M, X;
                                        t.descDetail83 =
                                          null == t ||
                                          null === (z = t.resource) ||
                                          void 0 === z ||
                                          null ===
                                            (N =
                                              z.resourceAddCategoryList[T]) ||
                                          void 0 === N ||
                                          null ===
                                            (M = N.resourceAddInfoList[V]) ||
                                          void 0 === M ||
                                          null ===
                                            (X = M.resourceAddInfoDetailList) ||
                                          void 0 === X
                                            ? void 0
                                            : X.map(function (e) {
                                                return null == e
                                                  ? void 0
                                                  : e.descDetail;
                                              }).join(";");
                                        break;
                                      }
                                    }
                                }
                                t.resourceAddCategoryList =
                                  null == t ||
                                  null === (I = t.resource) ||
                                  void 0 === I
                                    ? void 0
                                    : I.resourceAddCategoryList;
                              }
                              null != e &&
                                null !== (u = e.productList[0]) &&
                                void 0 !== u &&
                                null !== (g = u.resource) &&
                                void 0 !== g &&
                                g.marketPrice &&
                                (t.marketPrice =
                                  null == e ||
                                  null === (S = e.productList[0]) ||
                                  void 0 === S ||
                                  null === (x = S.resource) ||
                                  void 0 === x
                                    ? void 0
                                    : x.marketPrice),
                                null != e &&
                                  null !== (f = e.productList[0]) &&
                                  void 0 !== f &&
                                  null !== (h = f.resource) &&
                                  void 0 !== h &&
                                  h.couponInfo &&
                                  (t.couponInfo =
                                    null == e ||
                                    null === (C = e.productList[0]) ||
                                    void 0 === C ||
                                    null === (b = C.resource) ||
                                    void 0 === b
                                      ? void 0
                                      : b.couponInfo),
                                (t.salePrice =
                                  null == e ||
                                  null === (p = e.productList[0]) ||
                                  void 0 === p ||
                                  null === (m = p.resource) ||
                                  void 0 === m
                                    ? void 0
                                    : m.salePrice),
                                (t.ticketTags = o);
                            }),
                            (t.productList = t.productList.concat(
                              (null == e ? void 0 : e.productList) || []
                            ));
                        }),
                        n.levelFirstSaleUnitList.push(t);
                    }),
                    n.levelFirstSaleUnitList.length && t.push(n);
                }),
                t
              );
            },
            V = i(14089),
            B = (0, x.lW)({
              ticketItemText: {
                fontFamily: "PingFangSC-Regular",
                fontSize: 11,
                color: "#666",
                lineHeight: 16,
              },
              flexRowBetween: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
            }),
            k = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, s.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, h.Z)((0, u.Z)(n), "getRefundText", function (e, t, i) {
                    if (t && t.length && 1 !== i) return null;
                    var n = { 1: "随时退", 2: "条件退", 3: "不可退" };
                    return n[e]
                      ? (0, I.tZ)(m.Text, {
                          style: {
                            color: "#3c5a86",
                            fontSize: 12,
                            fontFamily: "PingFangSC-Regular",
                          },
                          children: n[e],
                        })
                      : null;
                  }),
                  (0, h.Z)((0, u.Z)(n), "handleShowMore", function () {
                    if (n.state.showMore)
                      try {
                        n.moreBtnLocate &&
                          n.props.scrollViewRef &&
                          n.props.scrollViewRef.scrollTo({
                            y: n.moreBtnLocate,
                            animated: !0,
                            duration: 100,
                          }),
                          setTimeout(function () {
                            n.setState({ showMore: !1 });
                          }, 200);
                      } catch (e) {
                        console.log("=======滚动报错了=======", e);
                      }
                    else
                      (n.moreBtnLocate = n.props.scrollY._value),
                        n.setState({ showMore: !0 });
                  }),
                  (0, h.Z)((0, u.Z)(n), "renderLine", function () {
                    return (0,
                    I.tZ)(m.View, { style: { width: 0.5, height: 10, backgroundColor: "#ededed", marginLeft: 7, marginRight: 7 } });
                  }),
                  (0, h.Z)((0, u.Z)(n), "resourceItem", function (e, t) {
                    var i,
                      o,
                      l,
                      r,
                      a,
                      s,
                      d,
                      u,
                      g,
                      f,
                      h,
                      p,
                      y,
                      Z,
                      w,
                      v,
                      S,
                      x,
                      C,
                      R = n.props,
                      L = R.toggleShowBuyReading,
                      F = R.bookNow;
                    return !n.state.showMore && t >= 3
                      ? null
                      : (0, I.BX)(
                          m.View,
                          {
                            style: {
                              paddingLeft: 16,
                              paddingRight: 16,
                              marginTop: 0 === t ? 0 : 12,
                            },
                            children: [
                              (0, I.tZ)(m.Text, {
                                style: {
                                  color: "#222222",
                                  fontSize: 16,
                                  fontFamily: "PingFangSC-Medium",
                                  fontWeight: "500",
                                  marginBottom: 4,
                                },
                                children:
                                  null == e ||
                                  null === (o = e.resource) ||
                                  void 0 === o
                                    ? void 0
                                    : o.name,
                              }),
                              (0, I.BX)(m.View, {
                                style: (0, c.Z)({}, B.flexRowBetween),
                                children: [
                                  (0, I.BX)(m.View, {
                                    style: { flex: 1 },
                                    children: [
                                      !(null == e || !e.descDetail83) &&
                                        (0, I.BX)(m.View, {
                                          style: (0, c.Z)(
                                            (0, c.Z)({}, B.flexRowBetween),
                                            {},
                                            {
                                              justifyContent: "flex-start",
                                              alignItems: "center",
                                            }
                                          ),
                                          onClick: function () {
                                            return L(e);
                                          },
                                          children: [
                                            (0, I.tZ)(m.View, {
                                              style: {
                                                maxWidth: b.Z.isCRN ? 212 : 130,
                                              },
                                              children: (0, I.tZ)(V.Z, {
                                                numberOfLines: 1,
                                                style: {
                                                  color: "#666666",
                                                  fontSize: 12,
                                                  fontFamily:
                                                    "PingFangSC-Regular",
                                                },
                                                children:
                                                  (null == e
                                                    ? void 0
                                                    : e.descDetail83) || "",
                                              }),
                                            }),
                                            (0, I.tZ)(m.View, {
                                              style: {},
                                              children: (0, I.tZ)(m.Image, {
                                                style: {
                                                  width: 12,
                                                  height: 12,
                                                },
                                                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                                              }),
                                            }),
                                          ],
                                        }),
                                      (0, I.BX)(m.View, {
                                        style: (0, c.Z)(
                                          (0, c.Z)({}, B.flexRowBetween),
                                          {},
                                          { marginTop: 3, marginBottom: 3 }
                                        ),
                                        children: [
                                          (0, I.tZ)(m.View, {
                                            style: { flex: 1 },
                                            children: (0, I.tZ)(m.View, {
                                              style: (0, c.Z)(
                                                (0, c.Z)({}, B.flexRowBetween),
                                                {},
                                                { flex: 1 }
                                              ),
                                              children: (0, I.tZ)(m.View, {
                                                id: "AMBh",
                                                onClick: function () {
                                                  return L(e);
                                                },
                                                style: (0, c.Z)(
                                                  (0, c.Z)(
                                                    {},
                                                    B.flexRowBetween
                                                  ),
                                                  {},
                                                  {
                                                    justifyContent:
                                                      "flex-start",
                                                  }
                                                ),
                                                children:
                                                  null == e ||
                                                  null === (l = e.ticketTags) ||
                                                  void 0 === l
                                                    ? void 0
                                                    : l.map(function (t, i) {
                                                        var o;
                                                        return (0,
                                                        I.BX)(I.HY, { children: [(0, I.tZ)(m.Text, { style: { color: "#3c5a86", fontSize: 12, fontFamily: "PingFangSC-Regular" }, children: t || "" }), i < (null == e || null === (o = e.ticketTags) || void 0 === o ? void 0 : o.length) - 1 && n.renderLine()] });
                                                      }),
                                              }),
                                            }),
                                          }),
                                          (0, I.tZ)(m.View, {
                                            style: (0, c.Z)(
                                              {},
                                              B.flexRowBetween
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(m.View, {
                                        style: (0, c.Z)(
                                          (0, c.Z)({}, B.flexRowBetween),
                                          {},
                                          {
                                            justifyContent: "flex-start",
                                            alignItems: "center",
                                          }
                                        ),
                                        children: [
                                          !(
                                            null == e ||
                                            null === (r = e.resource) ||
                                            void 0 === r ||
                                            !r.saleCount
                                          ) &&
                                            (0, I.BX)(m.Text, {
                                              style: {
                                                color: "#999999",
                                                fontSize: 11,
                                                fontFamily:
                                                  "PingFangSC-Regular",
                                                marginRight: 12,
                                              },
                                              children: [
                                                "已售",
                                                (null == e ||
                                                null === (a = e.resource) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.saleCount) >= 9e3
                                                  ? "".concat(
                                                      null == e ||
                                                        null ===
                                                          (s = e.resource) ||
                                                        void 0 === s
                                                        ? void 0
                                                        : s.saleCount,
                                                      "+"
                                                    )
                                                  : null == e ||
                                                    null === (d = e.resource) ||
                                                    void 0 === d
                                                  ? void 0
                                                  : d.saleCount,
                                              ],
                                            }),
                                          (0, I.BX)(m.View, {
                                            id: "AMBi",
                                            onClick: function () {
                                              return L(e);
                                            },
                                            style: (0, c.Z)(
                                              (0, c.Z)({}, B.flexRowBetween),
                                              {},
                                              { justifyContent: "flex-start" }
                                            ),
                                            children: [
                                              (0, I.tZ)(m.Text, {
                                                style: {
                                                  color: "#999999",
                                                  fontSize: 12,
                                                  fontFamily:
                                                    "PingFangSC-Regular",
                                                },
                                                children: "购票须知",
                                              }),
                                              (0, I.tZ)(m.View, {
                                                style: {},
                                                children: (0, I.tZ)(m.Image, {
                                                  style: {
                                                    width: 12,
                                                    height: 12,
                                                  },
                                                  src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(m.View, {
                                    style: (0, c.Z)(
                                      (0, c.Z)({}, B.flexRowBetween),
                                      {},
                                      {
                                        alignItems: "flex-end",
                                        marginLeft: 6,
                                        position: "relative",
                                      }
                                    ),
                                    children: [
                                      (0, I.BX)(m.View, {
                                        style: { marginRight: 6 },
                                        children: [
                                          (0, I.tZ)(m.View, {
                                            style: (0, c.Z)(
                                              (0, c.Z)({}, B.flexRowBetween),
                                              {},
                                              { justifyContent: "flex-end" }
                                            ),
                                            children: (0, I.BX)(m.View, {
                                              style: (0, c.Z)(
                                                (0, c.Z)({}, B.flexRowBetween),
                                                {},
                                                {
                                                  justifyContent: "flex-end",
                                                  height: 28,
                                                }
                                              ),
                                              children: [
                                                (0, I.tZ)(m.View, {
                                                  style: {
                                                    paddingTop: 3,
                                                    marginRight: 2,
                                                  },
                                                  onClick: function () {
                                                    n.props.setShowPriceDesc({
                                                      resourceDesc: e,
                                                      showPriceDesc: !0,
                                                    });
                                                  },
                                                  children: (0, I.tZ)(m.Image, {
                                                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/jdxq_icon_zs@3x.png",
                                                    style: {
                                                      width: 10,
                                                      height: 10,
                                                    },
                                                  }),
                                                }),
                                                null != e &&
                                                null !== (u = e.resource) &&
                                                void 0 !== u &&
                                                u.marketPrice &&
                                                (null == e ||
                                                null === (g = e.resource) ||
                                                void 0 === g
                                                  ? void 0
                                                  : g.marketPrice) >
                                                  (null == e ||
                                                  null === (f = e.resource) ||
                                                  void 0 === f
                                                    ? void 0
                                                    : f.salePrice)
                                                  ? (0, I.tZ)(m.Text, {
                                                      style: {
                                                        fontFamily:
                                                          "PingFangSC-Regular",
                                                        color: "#999999",
                                                        fontSize: 11,
                                                        marginRight: 2,
                                                        marginTop: 4,
                                                      },
                                                      children: (0, I.BX)(
                                                        m.Text,
                                                        {
                                                          style: {
                                                            textDecorationLine:
                                                              "line-through",
                                                            textDecorationStyle:
                                                              "solid",
                                                            textDecorationColor:
                                                              "#999999",
                                                          },
                                                          children: [
                                                            "¥",
                                                            null == e ||
                                                            null ===
                                                              (h =
                                                                e.resource) ||
                                                            void 0 === h
                                                              ? void 0
                                                              : h.marketPrice,
                                                          ],
                                                        }
                                                      ),
                                                    })
                                                  : null,
                                                (0, I.tZ)(m.Text, {
                                                  style: {
                                                    color: "#FF5959",
                                                    fontSize: 11,
                                                    marginTop: 6,
                                                  },
                                                  children: "¥",
                                                }),
                                                (0, I.tZ)(m.Text, {
                                                  style: {
                                                    fontFamily:
                                                      "PingFangSC-Medium",
                                                    color: "#FF5959",
                                                    fontSize: 20,
                                                    lineHeight: 28,
                                                  },
                                                  children:
                                                    null == e ||
                                                    null === (p = e.resource) ||
                                                    void 0 === p
                                                      ? void 0
                                                      : p.salePrice,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, I.tZ)(m.View, {
                                            style: (0, c.Z)(
                                              (0, c.Z)({}, B.flexRowBetween),
                                              {},
                                              { justifyContent: "flex-end" }
                                            ),
                                            children:
                                              (null == e ||
                                              null === (y = e.resource) ||
                                              void 0 === y
                                                ? void 0
                                                : y.couponInfo) &&
                                              (null == e ||
                                              null === (Z = e.resource) ||
                                              void 0 === Z ||
                                              null === (w = Z.couponInfo) ||
                                              void 0 === w
                                                ? void 0
                                                : w.couponDesc) &&
                                              (0, I.tZ)(m.View, {
                                                style: {
                                                  backgroundColor: "#fff2f2",
                                                  borderRadius: 3,
                                                  borderStyle: "solid",
                                                  borderColor: "#ff5959",
                                                  borderWidth: 0.5,
                                                  paddingTop: 1,
                                                  paddingBottom: 1,
                                                  paddingLeft: 3,
                                                  paddingRight: 3,
                                                  display: "flex",
                                                  flexDirection: "row",
                                                  alignItems: "center",
                                                },
                                                children: (0, I.tZ)(m.Text, {
                                                  style: {
                                                    fontFamily:
                                                      "PingFangSC-Regular",
                                                    fontSize: 10,
                                                    color: "#FF5959",
                                                  },
                                                  children:
                                                    null == e ||
                                                    null === (v = e.resource) ||
                                                    void 0 === v ||
                                                    null ===
                                                      (S = v.couponInfo) ||
                                                    void 0 === S
                                                      ? void 0
                                                      : S.couponDesc,
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                      !(
                                        null == e ||
                                        null === (x = e.resource) ||
                                        void 0 === x ||
                                        !x.discountDesc
                                      ) &&
                                        (0, I.BX)(m.View, {
                                          style: {
                                            position: "absolute",
                                            right: 0,
                                            top: b.Z.isCRN ? 0 : 3,
                                            zIndex: 1,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-end",
                                          },
                                          children: [
                                            (0, I.tZ)(m.View, {
                                              style: {
                                                backgroundColor: "#ffe6e6",
                                                borderRadius: 8,
                                                borderBottomRightRadius: 0,
                                                paddingLeft: 6,
                                                paddingRight: 6,
                                                paddingTop: 1,
                                                paddingBottom: 1,
                                                height: 13,
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              },
                                              children: (0, I.tZ)(m.Text, {
                                                style: {
                                                  color: "#ff5959",
                                                  fontSize: 9,
                                                  fontFamily:
                                                    "PingFangSC-Medium",
                                                  fontWeight: "500",
                                                },
                                                children:
                                                  null == e ||
                                                  null === (C = e.resource) ||
                                                  void 0 === C
                                                    ? void 0
                                                    : C.discountDesc,
                                              }),
                                            }),
                                            (0, I.tZ)(m.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/jdxq_bq_jgmk@3x.png",
                                              style: {
                                                width: 15,
                                                height: 8,
                                                marginTop: -1,
                                              },
                                            }),
                                          ],
                                        }),
                                      (0, I.tZ)(m.View, {
                                        style: (0, c.Z)(
                                          (0, c.Z)({}, B.flexRowBetween),
                                          {},
                                          {
                                            height: 51,
                                            alignItems: "flex-end",
                                            paddingTop: 4,
                                          }
                                        ),
                                        children: (0, I.tZ)(m.View, {
                                          style: (0, c.Z)(
                                            (0, c.Z)({}, B.flexRowBetween),
                                            {},
                                            {
                                              width: 44,
                                              height: 44,
                                              backgroundColor: "#ff5959",
                                              borderRadius: 10,
                                              justifyContent: "center",
                                            }
                                          ),
                                          id: "AMBj",
                                          onClick: function () {
                                            return F(e);
                                          },
                                          children: (0, I.tZ)(m.Text, {
                                            style: {
                                              color: "#ffffff",
                                              fontSize: 14,
                                              fontFamily: "PingFangSC-Medium",
                                              fontWeight: "500",
                                            },
                                            children: "预订",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, I.tZ)(m.View, { style: { height: 16 } }),
                              (0, I.tZ)(T, { curColor: "#F0F0F0" }),
                            ],
                          },
                          t +
                            "" +
                            (null == e ||
                            null === (i = e.resource) ||
                            void 0 === i
                              ? void 0
                              : i.id)
                        );
                  }),
                  (n.state = { showMore: !1 }),
                  (n.moreBtnLocate = 0),
                  n
                );
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props.productList;
                      return (0, I.BX)(m.View, {
                        children: [
                          null == t
                            ? void 0
                            : t.map(function (t, i) {
                                return e.resourceItem(t, i);
                              }),
                          !b.Z.isCRN &&
                            !this.state.showMore &&
                            t.length > 3 &&
                            (0, I.tZ)(m.View, {
                              style: (0, c.Z)(
                                (0, c.Z)({}, B.flexRowBetween),
                                {},
                                {
                                  justifyContent: "center",
                                  paddingBottom: 14,
                                  paddingTop: 10,
                                }
                              ),
                              children: (0, I.BX)(m.View, {
                                style: (0, c.Z)(
                                  (0, c.Z)({}, B.flexRowBetween),
                                  {},
                                  { justifyContent: "center", maxWidht: 108 }
                                ),
                                id: "AMBk",
                                onClick: this.handleShowMore,
                                children: [
                                  (0, I.tZ)(m.Text, {
                                    style: {
                                      color: "#999999",
                                      fontSize: 12,
                                      fontFamily: "PingFangSC-Regular",
                                    },
                                    children: "展开更多",
                                  }),
                                  (0, I.tZ)(m.View, {
                                    style: { paddingTop: 2, marginLeft: 2 },
                                    children: (0, I.tZ)(m.Image, {
                                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_xxzk@3x.png",
                                      style: { width: 12, height: 12 },
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          b.Z.isCRN &&
                            (null == t ? void 0 : t.length) > 3 &&
                            (0, I.tZ)(m.View, {
                              style: (0, c.Z)(
                                (0, c.Z)({}, B.flexRowBetween),
                                {},
                                {
                                  justifyContent: "center",
                                  paddingBottom: 14,
                                  paddingTop: 10,
                                }
                              ),
                              children: (0, I.BX)(m.View, {
                                style: (0, c.Z)(
                                  (0, c.Z)({}, B.flexRowBetween),
                                  {},
                                  { justifyContent: "center", maxWidht: 108 }
                                ),
                                onClick: this.handleShowMore,
                                children: [
                                  (0, I.tZ)(m.Text, {
                                    style: {
                                      color: "#999999",
                                      fontSize: 12,
                                      fontFamily: "PingFangSC-Regular",
                                    },
                                    children: this.state.showMore
                                      ? "收起更多"
                                      : "展开更多",
                                  }),
                                  (0, I.tZ)(m.View, {
                                    style: { paddingTop: 2, marginLeft: 2 },
                                    children: (0, I.tZ)(m.Image, {
                                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_xxzk@3x.png",
                                      style: b.Z.isCRN
                                        ? {
                                            width: 12,
                                            height: 12,
                                            transform: [
                                              {
                                                rotate: this.state.showMore
                                                  ? "180deg"
                                                  : "0deg",
                                              },
                                            ],
                                          }
                                        : { width: 12, height: 12 },
                                    }),
                                  }),
                                ],
                              }),
                            }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(p.Component),
            _ = i(96995),
            D = (0, x.lW)({
              labelName: {
                fontFamily: "PingFangSC-Regular",
                fontSize: 13,
                color: "#222",
              },
              unitTitle: (0, h.Z)(
                {
                  borderRadius: 8,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderColor: C.Z.mainColor,
                  height: 40,
                  boxSizing: "border-box",
                  borderStyle: "solid",
                  borderWidth: 0.5,
                  marginRight: 8,
                  backgroundColor: "#f7f7f7",
                },
                "borderColor",
                "transparent"
              ),
              saleUnitName: {
                fontFamily: "PingFangSC-Medium",
                fontSize: 18,
                color: "#222222",
              },
              tag: {
                marginRight: 15,
                marginLeft: 15,
                backgroundColor: "#F5F5F5",
                borderRadius: 4,
                marginTop: 12,
                marginBottom: 15,
                height: 29,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingHorizontal: 8,
              },
              tagText: {
                fontFamily: "PingFangSC-Regular",
                fontSize: 11,
                color: "#666666",
              },
              unitName: {
                fontFamily: "PingFangSC-Medium",
                fontSize: 15,
                color: "#222222",
                paddingTop: 10,
                paddingLeft: 10,
                paddingRight: 10,
              },
            }),
            P = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, s.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, h.Z)((0, u.Z)(n), "transformName", function (e) {
                    return e
                      ? e.length <= 10
                        ? [e]
                        : e.length > 40
                        ? [e.substring(0, 20), e.substring(20, 39) + "..."]
                        : [
                            e.substring(0, Math.ceil(e.length / 2) + 1),
                            e.substring(Math.ceil(e.length / 2) + 1, e.length),
                          ]
                      : [];
                  }),
                  (0, h.Z)((0, u.Z)(n), "scrollToIndex", function (e) {
                    try {
                      n.unitScrollViewRef.scrollToIndex({ index: e });
                    } catch (e) {}
                  }),
                  (0, h.Z)((0, u.Z)(n), "getOffsetX", function (e) {
                    for (var t = 15, i = 0; i < e; i++)
                      t += n.unitNameItems[i] + 8;
                    return t;
                  }),
                  (0, h.Z)((0, u.Z)(n), "renderUnitTitleItem", function (e) {
                    var t = e.item,
                      i = e.index,
                      o = e.activeShelfIndex;
                    if (!t.name) return null;
                    var l = n.transformName(t.name);
                    return o === i
                      ? (0, I.tZ)(m.View, {
                          style: {
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                            alignItems: "center",
                          },
                          children: (0, I.BX)(m.View, {
                            style: (0, c.Z)(
                              (0, c.Z)({}, D.unitTitle),
                              {},
                              {
                                borderColor: "#198cff",
                                backgroundColor: "#f9fbff",
                              }
                            ),
                            children: [
                              (0, I.tZ)(m.View, {
                                style: { paddingTop: l[1] ? 0 : 10 },
                                children: (0, I.tZ)(m.Text, {
                                  style: (0, c.Z)(
                                    (0, c.Z)({}, D.labelName),
                                    {},
                                    {
                                      color: "#198cff",
                                      fontSize: 14,
                                      fontFamily: "PingFangSC-Medium",
                                      fontWeight: "500",
                                    }
                                  ),
                                  children: l[0],
                                }),
                              }),
                              !!l[1] &&
                                (0, I.tZ)(m.View, {
                                  children: (0, I.tZ)(m.Text, {
                                    style: (0, c.Z)(
                                      (0, c.Z)({}, D.labelName),
                                      {},
                                      { color: "#198cff", fontWeight: "500" }
                                    ),
                                    numberOfLines: 1,
                                    children: l[1],
                                  }),
                                }),
                            ],
                          }),
                        })
                      : (0, I.tZ)(m.View, {
                          style: {
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                            alignItems: "center",
                          },
                          children: (0, I.BX)(
                            m.View,
                            {
                              id: "AMBc",
                              onClick: function () {
                                n.setState(
                                  { activeShelfIndex: i },
                                  function () {
                                    n.scrollToIndex(i);
                                  }
                                );
                              },
                              activeOpacity: 1,
                              style: D.unitTitle,
                              onLayout: function (e) {
                                n.unitNameItems[i] = Math.round(
                                  e.nativeEvent.layout.width
                                );
                              },
                              children: [
                                (0, I.tZ)(m.View, {
                                  style: { paddingTop: l[1] ? 0 : 10 },
                                  children: (0, I.tZ)(m.Text, {
                                    style: D.labelName,
                                    children: l[0],
                                  }),
                                }),
                                !!l[1] &&
                                  (0, I.tZ)(m.View, {
                                    children: (0, I.tZ)(m.Text, {
                                      style: D.labelName,
                                      numberOfLines: 1,
                                      children: l[1],
                                    }),
                                  }),
                              ],
                            },
                            i
                          ),
                        });
                  }),
                  (0, h.Z)(
                    (0, u.Z)(n),
                    "renderFirstSaleUnitTitleList",
                    function (e, t) {
                      return t && t.length
                        ? (0, I.tZ)(m.View, {
                            children:
                              !!t.length &&
                              (0, I.tZ)(m.View, {
                                style: { paddingLeft: 15 },
                                children: (0, I.tZ)(_.Z, {
                                  isFlatList: !0,
                                  horizontal: !0,
                                  scrollX: !0,
                                  showsHorizontalScrollIndicator: !1,
                                  bounces: !1,
                                  style: {
                                    paddingRight: 7,
                                    marginTop: b.Z.isCRN ? 0 : 10,
                                    height: 60,
                                    whiteSpace: "nowrap",
                                  },
                                  data: t,
                                  ref: function (e) {
                                    return (n.unitScrollViewRef = e);
                                  },
                                  ListFooterComponent: (0, I.tZ)(m.View, {
                                    style: { width: 15, height: 36 },
                                  }),
                                  renderItem: function (t) {
                                    var i = t.item,
                                      o = t.index;
                                    return n.renderUnitTitleItem({
                                      item: i,
                                      index: o,
                                      activeShelfIndex: e,
                                    });
                                  },
                                  children:
                                    null == t
                                      ? void 0
                                      : t.map(function (t, i) {
                                          return (0,
                                          I.tZ)(m.View, { style: { display: b.Z.isCRN ? "flex" : "inline-block", verticalAlign: "middle" }, children: n.renderUnitTitleItem({ item: t, index: i, activeShelfIndex: e }) }, i);
                                        }),
                                }),
                              }),
                          })
                        : (0, I.tZ)(T, { curHeight: 10, curColor: "#fff" });
                    }
                  ),
                  (n.state = { activeShelfIndex: 0 }),
                  (n.unitNameItems = {}),
                  (n.unitScrollViewRef = null),
                  n
                );
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.levelFirstSaleUnitList,
                        i = e.bookNow,
                        n = e.toggleShowBuyReading,
                        o = e.scrollViewRef,
                        l = e.scrollY,
                        r = e.setShowPriceDesc,
                        a = this.state.activeShelfIndex;
                      if (!t || !t.length) return null;
                      var s = (t[a] || {}).productList,
                        d = void 0 === s ? [] : s;
                      return (0, I.BX)(m.View, {
                        children: [
                          this.renderFirstSaleUnitTitleList(a, t),
                          (0, I.tZ)(k, {
                            UIType: 1,
                            productList: d,
                            setShowPriceDesc: r,
                            bookNow: function (e) {
                              var n;
                              return i(
                                (0, c.Z)(
                                  (0, c.Z)({}, e),
                                  {},
                                  {
                                    titleName:
                                      null === (n = t[a]) || void 0 === n
                                        ? void 0
                                        : n.name,
                                  }
                                )
                              );
                            },
                            toggleShowBuyReading: n,
                            scrollViewRef: o,
                            scrollY: l,
                          }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(p.Component),
            z = i(88184),
            N = i(90098),
            M = i(87298),
            X = i(35537),
            j = (i(72559), i(43884)),
            U = i(82977),
            W = i(45090),
            A = "../../../support/apis/Device/device",
            H = (0, x.lW)({
              playView: {
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                height: 22,
                lineHeight: 22,
              },
              btnView: {
                display: "flex",
                flexDirection: "row",
                borderRadius: 12,
                justifyContent: "flex-start",
                alignItems: "center",
                width: 49,
                position: "relative",
              },
              play: {
                fontFamily: "PingFangSC-Regular",
                fontSize: 11,
                color: "#333333",
                height: 22,
                lineHeight: 22,
              },
              active: {
                backgroundColor: C.Z.mainColor,
                color: "#ffffff",
                borderRadius: 12,
              },
              indicatorWrap: {
                position: "absolute",
                right: 0,
                zIndex: 2,
                bottom: 38,
                height: 22,
                minWidth: 48,
                borderRadius: 12,
                backgroundColor: "rgba(0,0,0,.5)",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                paddingHorizontal: 10,
                marginRight: 15,
              },
              operate: {
                display: "flex",
                flexDirection: "row",
                height: 22,
                width: 89,
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,.9)",
                borderRadius: 12,
                position: "absolute",
              },
            }),
            O = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, s.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, h.Z)((0, u.Z)(n), "photoNumView", function () {
                    var e = n.state.indicator,
                      t = n.props.imageList,
                      i = (void 0 === t ? [] : t).length;
                    return i
                      ? (0, I.tZ)(m.View, {
                          style: H.indicatorWrap,
                          children: (0, I.BX)(m.Text, {
                            style: {
                              color: "#fff",
                              fontFamily: "PingFangSC-Regular",
                              fontSize: 11,
                            },
                            children: [e, "/", i],
                          }),
                        })
                      : null;
                  }),
                  (0, h.Z)((0, u.Z)(n), "changeCurrentImage", function (e) {
                    var t = e.detail.current;
                    n.setState({ indicator: t + 1 });
                  }),
                  (n.state = { _contentWidth: W.Ro.windowWidth, indicator: 1 }),
                  n
                );
              }
              return (
                (0, d.Z)(i, [
                  { key: "componentDidMount", value: function () {} },
                  { key: "componentWillUnmount", value: function () {} },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props.imageList;
                      return (0, I.BX)(m.View, {
                        style: { position: "relative", zIndex: 2 },
                        children: [
                          (0, I.BX)(m.View, {
                            style: [{ position: "relative" }, null],
                            children: [
                              (0, I.tZ)(m.Swiper, {
                                className: "swiper",
                                autoplay: !0,
                                interval: 5e3,
                                duration: 1e3,
                                circular: "true",
                                onChange: this.changeCurrentImage,
                                style: {
                                  width: "100%",
                                  height: 160,
                                  position: "relative",
                                },
                                children: e.map(function (e, t) {
                                  return (0,
                                  I.tZ)(m.View, { children: (0, I.tZ)(m.SwiperItem, { itemId: t, children: (0, I.tZ)(m.Image, { src: e, mode: "aspectFill", lazyLoad: "true", style: { height: "100%", width: "100%", position: "relative" } }) }) }, "index");
                                }),
                              }),
                              "ios" !== A.platform &&
                                (0, I.tZ)(m.View, {
                                  style: {
                                    width: this.state._contentWidth,
                                    height: 12,
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12,
                                    backgroundColor: "#fff",
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0,
                                  },
                                }),
                            ],
                          }),
                          this.photoNumView(),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(p.PureComponent);
          function q(e) {
            var t = "暂无评论";
            return (
              e > 0 && e < 1e4
                ? (t = e + "条评论")
                : e >= 1e4 && (t = (e / 1e4).toFixed(1) + "w+条评论"),
              t
            );
          }
          var E = function (e) {
              var t,
                i,
                n = e.data,
                o = e.onItem;
              if (!n) return (0, I.tZ)(m.View, {});
              return (0, I.tZ)(m.View, {
                className: " _Rd _Vb _Mb _yc",
                style: { marginLeft: 0, marginRight: 0 },
                children: (0, I.tZ)(m.View, {
                  className: " _Gv _i _k",
                  id: "AMBl",
                  onClick: function () {
                    return o(n);
                  },
                  style: b.Z.isCRN ? { marginTop: 0, paddingBottom: 20 } : {},
                  children: (0, I.BX)(m.View, {
                    style: { display: "flex", flexDirection: "row" },
                    children: [
                      (0, I.tZ)(m.View, {
                        className: " _rp _i _k _pf _Qf",
                        children: (0, I.tZ)(m.Image, {
                          src: n.imageURL,
                          className: " _rp _Iv _dc",
                        }),
                      }),
                      (0, I.BX)(m.View, {
                        className: " _Db _i _kk",
                        children: [
                          (0, I.BX)(m.Text, {
                            className: " _Xb _Jv",
                            children: [
                              n.name,
                              n.star && n.star >= 4
                                ? "(".concat(n.star, "A)")
                                : "",
                            ],
                          }),
                          !!n.pmRecommand &&
                            (0, I.BX)(m.View, {
                              className:
                                " _Bj _vd _Kv _ji _Lv _i _Ga _l _xh _E",
                              children: ["“", n.pmRecommand, "”"],
                            }),
                          (0, I.BX)(m.View, {
                            className: " _Mv _i _Ga _l",
                            children: [
                              (0, I.tZ)(m.Text, {
                                className: " _x _Nv",
                                children: n.commentGrade
                                  ? "".concat(n.commentGrade.toFixed(1), "分")
                                  : "暂无评分",
                              }),
                              (0, I.tZ)(m.View, {
                                className: " _uh _sf _Ov _Yk",
                              }),
                              (0, I.tZ)(m.Text, {
                                className: " _uh _Ma _E",
                                children: q(n.commentCount),
                              }),
                            ],
                          }),
                          !!n.address &&
                            (0, I.tZ)(m.View, {
                              className: " _Bj _Kc _E _Q _yc _Xm _Ym _Pv",
                              numberOfLines: 1,
                              children: n.address,
                            }),
                          (0, I.BX)(m.View, {
                            className: " _i _Z _Ga _pf",
                            children: [
                              (0, I.BX)(m.View, {
                                className:
                                  null != n && n.salePrice
                                    ? " _oo _i _l _Gi"
                                    : " _oo _i _l _Bj",
                                children: [
                                  !(
                                    null == n ||
                                    null === (t = n.couponInfo) ||
                                    void 0 === t ||
                                    !t.couponDesc
                                  ) &&
                                    (0, I.tZ)(m.View, {
                                      className:
                                        " _i _Ga _l _Qv _gb _Al _Va _C _Mb _Ze",
                                      style: b.Z.isCRN
                                        ? {}
                                        : { borderStyle: "solid" },
                                      children:
                                        null == n ||
                                        null === (i = n.couponInfo) ||
                                        void 0 === i
                                          ? void 0
                                          : i.couponDesc,
                                    }),
                                  !(null == n || !n.advanceBookingDesc) &&
                                    (0, I.tZ)(m.View, {
                                      className:
                                        " _i _Ga _l _Rv _gb _Al _Va _C _Mb _x",
                                      style: b.Z.isCRN
                                        ? {}
                                        : { borderStyle: "solid" },
                                      children:
                                        null == n
                                          ? void 0
                                          : n.advanceBookingDesc,
                                    }),
                                  (function () {
                                    var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : [];
                                    if (null == e || !e.length)
                                      return (0, I.tZ)(m.View, {});
                                    var t = e.filter(function (e) {
                                        return (
                                          e.key &&
                                          -1 === e.key.indexOf("可用") &&
                                          -1 === e.key.indexOf("可订")
                                        );
                                      }),
                                      i = [].concat(t[0] || {});
                                    return i.map(function (e, t) {
                                      return (0,
                                      I.tZ)(m.View, { className: " _i _Ga _l _Rv _gb _Al _Va _C _Mb _x", children: null == e ? void 0 : e.value }, t);
                                    });
                                  })(
                                    null == n ? void 0 : n.displayTagGroupList
                                  ),
                                ],
                              }),
                              !(null == n || !n.salePrice) &&
                                (0, I.BX)(m.View, {
                                  className: " _i _Ga _pf",
                                  children: [
                                    (0, I.tZ)(m.Text, {
                                      className: " _bf _Sv",
                                      style: b.Z.isCRN
                                        ? {
                                            marginBottom:
                                              "ios" === b.Z.os ? 2 : 4,
                                          }
                                        : { marginBottom: 2 },
                                      children: "¥",
                                    }),
                                    (0, I.tZ)(m.Text, {
                                      className: " _bf _Tv",
                                      children: n.salePrice,
                                    }),
                                    (0, I.tZ)(m.Text, {
                                      className: " _Ma _D",
                                      style: b.Z.isCRN
                                        ? {
                                            marginBottom:
                                              "ios" === b.Z.os ? 2 : 4,
                                          }
                                        : { marginBottom: 2 },
                                      children: "起",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              });
            },
            Y = i(980),
            Q = (0, x.lW)({
              headView: {
                paddingTop: 15,
                paddingLeft: 16,
                paddingBottom: 10,
                backgroundColor: "#fff",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              header: {
                fontFamily: "PingFangSC-Semibold",
                fontSize: 18,
                color: "#222222",
              },
            }),
            G = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, s.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, h.Z)((0, u.Z)(n), "fetchRelateScenicSpot", function () {
                    var e = n.props.scenicSpotId;
                    if (!e) return null;
                    (0, X.K1)({ scenicSpotId: e })
                      .then(function (e) {
                        console.log("大家都在看---\x3e", e),
                          e &&
                            e.scenicSpotList &&
                            e.scenicSpotList.length &&
                            n.setState({ listData: e.scenicSpotList });
                      })
                      .catch(function () {});
                  }),
                  (0, h.Z)((0, u.Z)(n), "onItem", function (e) {
                    n.props.ubtTrace("SZADetail_Rec_click", {
                      PageId: n.props.PageId,
                      TypeSndAttr: (null == e ? void 0 : e.name) || "",
                    }),
                      (0, Y.l4)({
                        data: {
                          scenicSpotId: null == e ? void 0 : e.iD,
                          source: n.props.source,
                        },
                      });
                  }),
                  (n.state = { listData: [] }),
                  n
                );
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "UNSAFE_componentWillMount",
                    value: function () {
                      this.fetchRelateScenicSpot();
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.props.ubtTrace("SZADetail_Rec_exposure", {
                        PageId: this.props.PageId,
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state.listData;
                      return t && t.length
                        ? (0, I.BX)(m.View, {
                            onLayout: function (t) {
                              var i,
                                n = t.nativeEvent;
                              e.props.handleOnLayout({
                                y:
                                  null == n ||
                                  null === (i = n.layout) ||
                                  void 0 === i
                                    ? void 0
                                    : i.height,
                                type: "layout_".concat(
                                  e.props.saleUnitTypeList.length + 6
                                ),
                              });
                            },
                            id: "layout_".concat(
                              this.props.saleUnitTypeList.length + 6
                            ),
                            style: {
                              backgroundColor: "#f5f5f5",
                              paddingLeft: 8,
                              paddingRight: 8,
                            },
                            children: [
                              (0, I.tZ)(T, { curHeight: 6 }),
                              (0, I.tZ)(m.View, {
                                style: Q.headView,
                                children: (0, I.tZ)(m.Text, {
                                  style: Q.header,
                                  numberOfLines: 1,
                                  children: "大家都在看",
                                }),
                              }),
                              null == t
                                ? void 0
                                : t.map(function (t, i) {
                                    return (0,
                                    I.tZ)(E, { data: t, onItem: e.onItem }, i);
                                  }),
                              (0, I.tZ)(m.View, {
                                style: {
                                  height: 16,
                                  borderBottomRightRadius: 12,
                                  borderBottomLeftRadius: 12,
                                  backgroundColor: "#fff",
                                },
                              }),
                            ],
                          })
                        : null;
                    },
                  },
                ]),
                i
              );
            })(p.PureComponent),
            J = i(90129),
            K = i(92049),
            $ = i(33624),
            ee = (0, x.lW)({
              noticeIcon: { width: 15, height: 12, marginRight: 5 },
              modalView: {
                width: "100%",
                backgroundColor: "transparent",
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              },
              noticeWrap: {
                backgroundColor: "#fff",
                width: "100%",
                maxHeight: 500,
                minHeight: 200,
                overflow: "hidden",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
              noticeLine: {
                height: 40,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: "#fef4f3",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 8,
              },
              text: {
                lineHeight: 20,
                fontSize: 14,
                color: "#666",
                fontFamily: "PingFangSC-Regular",
              },
            }),
            te = function (e) {
              return (0, I.tZ)($.Z, {
                style: { fontSize: 14, color: "#666" },
                children: (0, W.Jf)((0, W.yh)(e)),
              });
            };
          function ie(e) {
            var t = e.notice,
              i = (0, p.useState)(!1),
              n = (0, J.Z)(i, 2),
              o = n[0],
              l = n[1];
            return t
              ? (0, I.BX)(m.View, {
                  style: { position: "relative", paddingBottom: 12 },
                  children: [
                    (0, I.tZ)(m.View, {
                      id: "AMBd",
                      onClick: function () {
                        l(!0);
                      },
                      children: (0, I.BX)(m.View, {
                        style: ee.noticeLine,
                        children: [
                          (0, I.tZ)(m.Image, {
                            style: ee.noticeIcon,
                            src: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/advanceNotice.png",
                          }),
                          (0, I.tZ)($.Z, {
                            numberOfLines: 1,
                            style: {
                              color: "#FF5959",
                              fontSize: 14,
                              lineHeight: 40,
                              flex: 1,
                            },
                            children: (0, W.Jf)(
                              (0, W.yh)(t.replace(/\n/gi, ""))
                            ),
                          }),
                          (0, I.tZ)(m.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                            style: { width: 12, height: 12 },
                          }),
                        ],
                      }),
                    }),
                    !!o &&
                      (0, I.tZ)(U.Z, {
                        style: ee.modalView,
                        isUseModel: !0,
                        isShowIphoneXAdapter: !1,
                        onCancel: function () {
                          l(!1);
                        },
                        children: (0, I.BX)(m.View, {
                          style: ee.noticeWrap,
                          onStartShouldSetResponderCapture: function () {
                            return !0;
                          },
                          children: [
                            (0, I.BX)(m.View, {
                              style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 54,
                                marginLeft: 15,
                              },
                              children: [
                                (0, I.tZ)(m.Text, {
                                  style: {
                                    fontSize: 20,
                                    color: "#000",
                                    fontFamily: "PingFangSC-Medium",
                                    lineHeight: 28,
                                  },
                                  children: "公告",
                                }),
                                (0, I.tZ)(m.View, {
                                  style: {
                                    display: "flex",
                                    width: 30,
                                    height: 30,
                                    position: "absolute",
                                    top: 12,
                                    right: 8,
                                    justifyContent: "center",
                                    alignItems: "center",
                                  },
                                  id: "AMBe",
                                  onClick: function () {
                                    l(!1);
                                  },
                                  children: (0, I.tZ)(m.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/book_closeIcon.png",
                                    style: { width: 24, height: 24 },
                                  }),
                                }),
                              ],
                            }),
                            (0, I.tZ)(m.ScrollView, {
                              scrollY: !0,
                              style: { maxHeight: 446, minHeight: 146 },
                              children: (0, I.tZ)(m.View, {
                                style: {
                                  paddingLeft: 15,
                                  paddingRight: 15,
                                  marginTop: 10,
                                  paddingBottom: 44,
                                },
                                children: te(t),
                              }),
                            }),
                            (0, I.tZ)(K.Z, {}),
                          ],
                        }),
                      }),
                  ],
                })
              : null;
          }
          var ne = (0, x.lW)({
              itemWrap: {
                paddingBottom: 8,
                borderBottomWidth: 0.5,
                borderBottomColor: "#F5F5F5",
              },
              last: { borderBottomWidth: 0, paddingBottom: 18 },
              title: {
                fontFamily: "PingFangSC-Medium",
                fontSize: 16,
                color: "#333333",
                height: 22,
                marginTop: 20,
                marginBottom: 10,
              },
              subItemWrap: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flex: 1,
                marginBottom: 10,
              },
              subTitle: {
                fontFamily: "PingFangSC-Regular",
                fontSize: 13,
                color: "#999999",
                height: 18,
                minWidth: 52,
                marginRight: 15,
              },
              special: {
                borderWidth: 0.5,
                borderColor: C.Z.mainColor,
                padding: 1,
              },
              tag: {
                fontFamily: "PingFangSC-Regular",
                fontSize: 11,
                color: C.Z.mainColor,
                backgroundColor: "rgba(84,149,230,0.1)",
              },
              subDesc: {
                fontFamily: "PingFangSC-Regular",
                fontSize: 13,
                color: "#333333",
                maxWidth: 268,
              },
            }),
            oe = function (e) {
              var t = e.resourceAddInfoList,
                i = void 0 === t ? [] : t;
              return i.length
                ? i.map(function (e, t) {
                    return (0, I.BX)(
                      m.View,
                      {
                        style: ne.subItemWrap,
                        children: [
                          (0, I.tZ)(m.Text, {
                            style: ne.subTitle,
                            children: e.title,
                          }),
                          (0, I.tZ)(m.View, {
                            style: {
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              alignItems: "flex-start",
                              flex: 1,
                              marginRight: 20,
                            },
                            children:
                              e.resourceAddInfoDetailList &&
                              e.resourceAddInfoDetailList.map(function (e, t) {
                                return (0,
                                I.tZ)(m.View, { style: 0 === e.type ? ne.special : null, children: (0, I.tZ)($.Z, { style: { fontSize: 0 === e.type ? 11 : 13, color: 0 === e.type ? C.Z.mainColor : "#333333", fontFamily: "PingFangSC-Regular", backgroundColor: 0 === e.type ? "rgba(84,149,230,0.1)" : "transparent" }, children: e.descDetail }) }, t);
                              }),
                          }),
                        ],
                      },
                      t
                    );
                  })
                : null;
            },
            le = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                return (0, s.Z)(this, i), t.call(this, e);
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props.resourceAddCategoryList;
                      return e.map(function (t, i) {
                        return t.resourceAddInfoList
                          ? (0, I.BX)(
                              m.View,
                              {
                                style: [
                                  ne.itemWrap,
                                  i === e.length - 1 ? ne.last : null,
                                ],
                                children: [
                                  (0, I.tZ)(m.Text, {
                                    style: ne.title,
                                    children: t.title,
                                  }),
                                  (0, I.tZ)(oe, {
                                    resourceAddInfoList:
                                      t.resourceAddInfoList || [],
                                  }),
                                ],
                              },
                              i
                            )
                          : null;
                      });
                    },
                  },
                ]),
                i
              );
            })(p.Component),
            re = (0, x.lW)({
              title: {
                fontFamily: "PingFangSC-Medium",
                fontSize: 18,
                color: "#333333",
                width: 288,
                height: 25,
                overflow: "hidden",
                marginBottom: 4,
              },
              buyBtn: {
                height: 64,
                paddingRight: 15,
                borderTopColor: "#E5E5E5",
                borderTopWidth: 0.5,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              price: {
                fontFamily: "PingFangSC-Medium",
                fontSize: 24,
                color: "#FF5959",
              },
              book: {
                width: 160,
                height: 44,
                borderRadius: 100,
                backgroundColor: "#FF5959",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              },
            }),
            ae = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                return (0, s.Z)(this, i), t.call(this, e);
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "descList",
                    value: function (e) {
                      var t = e.join(" | ");
                      return t
                        ? (0, I.tZ)(m.Text, {
                            style: {
                              fontFamily: "PingFangSC-Regular",
                              fontSize: 12,
                              color: "#666666",
                            },
                            children: t,
                          })
                        : null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        i = t.noBottomBtn,
                        n = t.content,
                        o = t.btnFn,
                        l = t.popHeight;
                      if (!n) return W.FN.show("加载数据异常"), null;
                      var r = i ? 0 : 64,
                        a = b.Z.isCRN ? l - r - 86 : l - r - 86 - 64;
                      return (0, I.BX)(m.View, {
                        style: {
                          backgroundColor: "#fff",
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                        children: [
                          (0, I.BX)(m.View, {
                            style: {
                              paddingLeft: 15,
                              paddingRight: 15,
                              borderBottomWidth: 0.5,
                              borderBottomColor: "#E5E5E5",
                              paddingTop: 20,
                              paddingBottom: 20,
                            },
                            children: [
                              (0, I.tZ)(m.Text, {
                                style: re.title,
                                numberOfLines: 1,
                                children:
                                  (null == n ? void 0 : n.name) || "购票须知",
                              }),
                              (0, I.tZ)(m.View, {
                                id: "AMBT",
                                onClick: function () {
                                  return e.props.close();
                                },
                                style: {
                                  position: "absolute",
                                  right: 10,
                                  top: 10,
                                  width: 34,
                                  height: 45,
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                },
                                children: (0, I.tZ)(m.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/book_closeIcon.png",
                                  style: { width: 24, height: 24 },
                                }),
                              }),
                            ],
                          }),
                          (0, I.BX)(m.ScrollView, {
                            scrollY: !0,
                            showsVerticalScrollIndicator: !1,
                            style: { marginLeft: 20, height: a },
                            children: [
                              (0, I.tZ)(le, {
                                resourceAddCategoryList:
                                  n.resourceAddCategoryList || [],
                              }),
                              (0, I.BX)(m.View, {
                                style: { paddingTop: 13 },
                                children: [
                                  (0, I.tZ)(m.View, {
                                    style: {
                                      height: 1,
                                      backgroundColor: "#ededed",
                                      marginBottom: 13,
                                    },
                                  }),
                                  (0, I.tZ)(m.View, {
                                    children: (0, I.tZ)(m.Text, {
                                      style: {
                                        color: "#222222",
                                        fontSize: 16,
                                        fontFamily: "PingFangSC-Semibold",
                                        fontWeight: "600",
                                      },
                                      children: "供应商资质",
                                    }),
                                  }),
                                  (0, I.tZ)(m.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/0401/0zm1z12000bii4tt9CAF45.jpg",
                                    style: {
                                      width: 285,
                                      height: 201,
                                      marginLeft: 58,
                                    },
                                  }),
                                ],
                              }),
                              (0, I.tZ)(m.View, { style: { height: 100 } }),
                            ],
                          }),
                          i
                            ? null
                            : (0, I.BX)(m.View, {
                                children: [
                                  (0, I.BX)(m.View, {
                                    style: re.buyBtn,
                                    children: [
                                      (0, I.BX)(m.View, {
                                        style: {
                                          display: "flex",
                                          alignItems: "flex-end",
                                          flexDirection: "row",
                                          paddingLeft: 20,
                                        },
                                        children: [
                                          (0, I.BX)(m.Text, {
                                            style: re.price,
                                            children: [
                                              (0, I.tZ)(m.Text, {
                                                style: { fontSize: 14 },
                                                children: "¥",
                                              }),
                                              n.salePrice,
                                            ],
                                          }),
                                          !(null == n || !n.marketPrice) &&
                                            !!(
                                              (null == n
                                                ? void 0
                                                : n.marketPrice) >
                                              (null == n ? void 0 : n.salePrice)
                                            ) &&
                                            (0, I.tZ)(m.View, {
                                              style: { paddingBottom: 5 },
                                              children: (0, I.BX)(m.Text, {
                                                style: {
                                                  fontFamily:
                                                    "PingFangSC-Regular",
                                                  color: "#999999",
                                                  fontSize: 11,
                                                  textDecorationLine:
                                                    "line-through",
                                                  textDecorationStyle: "solid",
                                                  textDecorationColor:
                                                    "#999999",
                                                },
                                                children: ["¥", n.marketPrice],
                                              }),
                                            }),
                                        ],
                                      }),
                                      (0, I.tZ)(m.View, {
                                        style: re.book,
                                        id: "AMBU",
                                        onClick: function () {
                                          o && o(n);
                                        },
                                        children: (0, I.tZ)(m.Text, {
                                          style: {
                                            color: "#FFFFFF",
                                            fontFamily: "PingFangSC-Medium",
                                            fontSize: 18,
                                          },
                                          children: "立即预订",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, I.tZ)(K.Z, {}),
                                ],
                              }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(p.Component),
            ce = (0, x.lW)({
              poiHeader: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 13,
                paddingBottom: 8,
              },
              headerText: {
                color: "#222222",
                fontSize: 16,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
              },
              images: {
                width: 105,
                height: 70,
                backgroundColor: "#F5F5F5",
                borderRadius: 8,
                marginBottom: 7,
              },
              poiName: {
                fontFamily: "PingFangSC-Medium",
                fontSize: 12,
                lineHeight: 17,
                color: "#333333",
                paddingBottom: 15,
                display: b.Z.isWechat ? "block" : "flex",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
              projectTag: {
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0.7,
                borderTopLeftRadius: 8,
                borderBottomRightRadius: 8,
                paddingLeft: 4,
                paddingRight: 4,
                backgroundColor: "#000000",
              },
              projectName: {
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 4,
                paddingRight: 4,
                fontFamily: "PingFangSC-Regular",
                fontSize: 10,
                color: "#FFFFFF",
              },
            }),
            se = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, s.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, h.Z)((0, u.Z)(n), "fetchPoiList", function () {
                    var e = n.props.scenicSpotId;
                    e &&
                      (0, X.MF)({ scenicSpotId: e })
                        .then(function (e) {
                          console.log("fetchPoiList====>", e),
                            e &&
                              e.poiDetailList &&
                              n.setState({ poiList: e.poiDetailList || [] });
                        })
                        .catch(function () {});
                  }),
                  (0, h.Z)((0, u.Z)(n), "goDetail", function (e) {
                    n.props.scenicSpotId &&
                      (1 === e.type
                        ? (0, Y.l4)({
                            data: {
                              scenicSpotId: null == e ? void 0 : e.scenicSpotId,
                              source: n.props.source,
                            },
                          })
                        : (0, Y.QL)({
                            data: {
                              poiId: null == e ? void 0 : e.poiId,
                              scenicSpotId: null == e ? void 0 : e.scenicSpotId,
                              poiName: null == e ? void 0 : e.name,
                            },
                          }));
                  }),
                  (0, h.Z)((0, u.Z)(n), "goPoiList", function (e) {
                    var t = n.props.scenicSpotId;
                    t &&
                      (0, Y.J)({
                        params: {
                          scenicSpotId: t,
                          poiDetailList: e,
                          source: n.props.source || "app",
                        },
                      });
                  }),
                  (0, h.Z)((0, u.Z)(n), "renderPoiItem", function (e) {
                    var t = e.item,
                      i = e.index;
                    return t.name && t.imageUrl
                      ? (0, I.BX)(
                          m.View,
                          {
                            style: {
                              position: "relative",
                              marginLeft: 0 === i ? 15 : 0,
                              width: 105,
                              height: 60,
                              marginRight:
                                i <= n.state.poiList.length - 1 ? 8 : 0,
                            },
                            id: "AMBf",
                            onClick: function () {
                              n.props.ubtTrace("SZADetail_Info_Fun_click", {
                                PageId: n.props.PageId,
                              }),
                                n.goDetail(t);
                            },
                            children: [
                              (0, I.tZ)(m.Image, {
                                style: ce.images,
                                resizeMode: "cover",
                                src: t.imageUrl,
                              }),
                              (0, I.tZ)(m.Text, {
                                style: ce.poiName,
                                numberOfLines: 1,
                                children: (null == t ? void 0 : t.name) || "",
                              }),
                              t.typeName
                                ? (0, I.tZ)(m.View, {
                                    style: ce.projectTag,
                                    children: (0, I.tZ)(m.Text, {
                                      style: ce.projectName,
                                      children:
                                        (null == t ? void 0 : t.typeName) || "",
                                    }),
                                  })
                                : null,
                            ],
                          },
                          i + (null == t ? void 0 : t.name)
                        )
                      : null;
                  }),
                  (n.state = { poiList: [] }),
                  n
                );
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.fetchPoiList();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state.poiList;
                      if (!t || !t.length) return null;
                      var i = this.props.fetchStatus;
                      return (0, I.BX)(m.View, {
                        onLayout: function (t) {
                          var i,
                            n = t.nativeEvent;
                          e.props.handleOnLayout({
                            y:
                              null == n ||
                              null === (i = n.layout) ||
                              void 0 === i
                                ? void 0
                                : i.height,
                            type: "layout_".concat(
                              e.props.saleUnitTypeList.length + 3
                            ),
                          });
                        },
                        id: "layout_".concat(
                          this.props.saleUnitTypeList.length + 3
                        ),
                        style: {
                          backgroundColor: "#f5f5f5",
                          paddingLeft: 8,
                          paddingRight: 8,
                        },
                        children: [
                          "fail" !== i && (0, I.tZ)(T, { curHeight: 6 }),
                          (0, I.BX)(m.View, {
                            style: {
                              backgroundColor: "#fff",
                              borderRadius: 12,
                            },
                            children: [
                              (0, I.BX)(m.View, {
                                style: ce.poiHeader,
                                children: [
                                  (0, I.tZ)(m.Text, {
                                    style: ce.headerText,
                                    children: "景区玩乐",
                                  }),
                                  (0, I.BX)(m.View, {
                                    style: {
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "center",
                                    },
                                    id: "AMBg",
                                    onClick: function () {
                                      e.goPoiList(t);
                                    },
                                    children: [
                                      (0, I.tZ)(m.Text, {
                                        style: {
                                          fontFamily: "PingFangSC-Regular",
                                          fontSize: 12,
                                          color: "#999",
                                        },
                                        children: "查看全部项目",
                                      }),
                                      (0, I.tZ)(m.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                                        style: { width: 12, height: 12 },
                                        resizeModel: "contain",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, I.tZ)(_.Z, {
                                horizontal: !0,
                                scrollX: !0,
                                showsHorizontalScrollIndicator: !1,
                                data: t,
                                isFlatList: !0,
                                extraData: this.state,
                                style: {
                                  height: 110,
                                  display: "flex",
                                  flexDirection: "row",
                                },
                                enableFlex: !0,
                                keyExtractor: function (e, t) {
                                  return e.name + t;
                                },
                                renderItem: this.renderPoiItem,
                                children:
                                  null == t
                                    ? void 0
                                    : t.map(function (t, i) {
                                        return e.renderPoiItem({
                                          item: t,
                                          index: i,
                                        });
                                      }),
                              }),
                            ],
                          }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(p.PureComponent),
            de = (0, x.lW)({
              title: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 25,
                lineHeight: 25,
                alignItems: "center",
              },
              listItem: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              imageBk: {
                width: 17,
                height: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 6,
              },
              bottomBtn: {
                marginTop: 15,
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              },
              goImg: { width: 11, height: 11, marginLeft: 6 },
            }),
            ue = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, s.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, h.Z)((0, u.Z)(n), "loadData", function () {
                    var e = n.props.scenicSpotId;
                    (0, X.HQ)({ scenicSpotId: e }).then(function (e) {
                      var t;
                      console.log("问答列表数据---\x3e", e),
                        1 === e.resultCode &&
                          null != e &&
                          null !== (t = e.askList) &&
                          void 0 !== t &&
                          t.length &&
                          n.setState({
                            totalCount: e.totalCount,
                            askList: e.askList,
                            url: e.url,
                          });
                    });
                  }),
                  (0, h.Z)((0, u.Z)(n), "formatNumber", function (e) {
                    return e > 1e4 ? (e / 1e4).toFixed(0) + "w" : e;
                  }),
                  (0, h.Z)((0, u.Z)(n), "askList", function (e) {
                    if (e && e.length) {
                      var t = e.slice(0, 2);
                      try {
                        return t.map(function (e, i) {
                          if (e.title)
                            return (0, I.BX)(
                              m.View,
                              {
                                style: (0, c.Z)(
                                  (0, c.Z)({}, de.listItem),
                                  {},
                                  {
                                    marginTop: t.length === i + 1 ? 0 : 14,
                                    marginBottom: t.length === i + 1 ? 16 : 10,
                                  }
                                ),
                                id: "AMBR",
                                onClick: function () {
                                  e.url;
                                },
                                children: [
                                  (0, I.tZ)(m.View, {
                                    style: {
                                      backgroundColor: "#198cff",
                                      borderRadius: 3,
                                      paddingLeft: 3,
                                      paddingRight: 3,
                                      paddingTop: 1,
                                      paddingBottoom: 1,
                                      height: 16,
                                      marginRight: 6,
                                    },
                                    children: (0, I.tZ)(m.Text, {
                                      style: {
                                        color: "#ffffff",
                                        fontSize: 10,
                                        fontFamily: "PingFangSC-Regular",
                                      },
                                      children: "问",
                                    }),
                                  }),
                                  (0, I.tZ)(V.Z, {
                                    numberOfLines: 1,
                                    style: {
                                      flex: 1,
                                      color: "#222222",
                                      fontSize: 14,
                                      fontFamily: "PingFangSC-Regular",
                                    },
                                    children: e.title,
                                  }),
                                  (0, I.BX)(m.Text, {
                                    style: {
                                      fontFamily: "PingFangSC-Regular",
                                      fontSize: 12,
                                      color: "#999999",
                                    },
                                    children: [e.replyCount, "个回答"],
                                  }),
                                ],
                              },
                              i
                            );
                        });
                      } catch (e) {
                        return null;
                      }
                    }
                  }),
                  (n.state = { totalCount: 1, url: "", askList: [] }),
                  n
                );
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.loadData();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state,
                        i = t.totalCount,
                        n = (t.url, t.askList);
                      return (
                        console.log("askList", n),
                        n && n.length
                          ? (0, I.tZ)(m.View, {
                              onLayout: function (t) {
                                var i,
                                  n = t.nativeEvent;
                                e.props.handleOnLayout({
                                  y:
                                    null == n ||
                                    null === (i = n.layout) ||
                                    void 0 === i
                                      ? void 0
                                      : i.height,
                                  type: "layout_".concat(
                                    e.props.saleUnitTypeList.length + 4
                                  ),
                                });
                              },
                              id: "layout_".concat(
                                this.props.saleUnitTypeList.length + 4
                              ),
                              style: {
                                width: "100%",
                                backgroundColor: "#f5f5f5",
                                paddingLeft: 8,
                                paddingRight: 8,
                                paddingTop: 6,
                              },
                              children: (0, I.BX)(m.View, {
                                style: {
                                  backgroundColor: "#fff",
                                  borderRadius: 12,
                                  paddingLeft: 16,
                                  paddingRight: 16,
                                  paddingTop: 12,
                                },
                                children: [
                                  (0, I.BX)(m.View, {
                                    style: de.title,
                                    id: "AMBS",
                                    onClick: function () {},
                                    children: [
                                      (0, I.tZ)(m.View, {
                                        style: {
                                          display: "flex",
                                          flexDirection: "row",
                                          justifyContent: "flex-start",
                                          alignItems: "center",
                                        },
                                        children: (0, I.tZ)(m.Text, {
                                          style: {
                                            fontFamily: "PingFangSC-Medium",
                                            fontSize: 18,
                                            color: "#222222",
                                            marginRight: 8,
                                          },
                                          children: "问大家",
                                        }),
                                      }),
                                      (0, I.BX)(m.View, {
                                        style: {
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        },
                                        children: [
                                          i
                                            ? (0, I.BX)(m.Text, {
                                                style: {
                                                  fontFamily:
                                                    "PingFangSC-Regular",
                                                  fontSize: 13,
                                                  color: "#666666",
                                                },
                                                children: [
                                                  this.formatNumber(i),
                                                  "条回答",
                                                ],
                                              })
                                            : null,
                                          (0, I.tZ)(m.Image, {
                                            src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                                            style: { width: 12, height: 12 },
                                            resizeModel: "contain",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  this.askList(n),
                                ],
                              }),
                            })
                          : null
                      );
                    },
                  },
                ]),
                i
              );
            })(p.PureComponent),
            ge = (0, x.lW)({
              tagNormal: {
                color: "#666666",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
              },
              tagWrap: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                marginBottom: 7,
              },
              tagItem: {
                height: 28,
                lineHeight: 17,
                borderRadius: 6,
                backgroundColor: "#f3f3f3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 8,
                paddingRight: 8,
                marginRight: 6,
                marginBottom: 8,
              },
            }),
            fe = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                return (0, s.Z)(this, i), t.call(this, e);
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.tagItem,
                        i = e.tagPress;
                      return t.tagName
                        ? (0, I.tZ)(m.View, {
                            style: ge.tagItem,
                            id: "AMBV",
                            onClick: function () {
                              i && i(t);
                            },
                            children: (0, I.tZ)(m.Text, {
                              style: ge.tagNormal,
                              numberOfLines: 1,
                              children: ""
                                .concat(t.tagName, " ")
                                .concat(t.commentCount || ""),
                            }),
                          })
                        : null;
                    },
                  },
                ]),
                i
              );
            })(p.Component),
            he = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                return (0, s.Z)(this, i), t.call(this, e);
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        i = t.tagList,
                        n = void 0 === i ? [] : i,
                        o = t.showNum,
                        l = void 0 === o ? 6 : o;
                      return n && n.length
                        ? ((n = n.slice(0, l)),
                          (0, I.tZ)(m.View, {
                            style: {
                              paddingLeft: 15,
                              paddingRight: 15,
                              marginTop: 12,
                            },
                            children: (0, I.tZ)(m.View, {
                              style: ge.tagWrap,
                              children: n.map(function (t, i) {
                                return (0,
                                p.createElement)(fe, (0, c.Z)((0, c.Z)({ tagItem: t }, e.props), {}, { key: i }));
                              }),
                            }),
                          }))
                        : null;
                    },
                  },
                ]),
                i
              );
            })(p.Component),
            pe = (0, x.lW)({
              name: {
                fontFamily: "PingFangSC-Regular",
                fontSize: 12,
                color: "#666666",
              },
              rightText: {
                fontFamily: "PingFangSC-Regular",
                fontSize: 12,
                color: "#999999",
              },
              score: {
                fontFamily: "PingFangSC-Medium",
                fontSize: 12,
                color: "#FF7D00",
              },
              commentHead: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 13,
                paddingRight: 16,
              },
            }),
            me = {
              1: {
                score: "1分",
                desc: "不佳",
                img: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/comment_1.png",
              },
              2: {
                score: "2分",
                desc: "一般",
                img: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/comment_2.png",
              },
              3: {
                score: "3分",
                desc: "不错",
                img: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/comment_3.png",
              },
              4: {
                score: "4分",
                desc: "满意",
                img: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/comment_4.png",
              },
              5: {
                score: "5分",
                desc: "超棒",
                img: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/comment_5.png",
              },
            },
            ye = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                return (0, s.Z)(this, i), t.call(this, e);
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "getScoreStr",
                    value: function (e) {
                      if (!e || !e.commentScore || isNaN(e.commentScore))
                        return "暂无评分";
                      var t = Math.ceil(e.commentScore);
                      return ""
                        .concat((me[t] && me[t].score) || "", " ")
                        .concat((me[t] && me[t].desc) || "");
                    },
                  },
                  {
                    key: "getScoreImage",
                    value: function (e) {
                      if (!e || !e.commentScore || isNaN(e.commentScore))
                        return me[3].img;
                      var t = Math.ceil(e.commentScore);
                      return (t > 5 || t < 1) && (t = 5), me[t] && me[t].img;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props.commentItem,
                        t = void 0 === e ? {} : e,
                        i = t || {},
                        n = i.isPicked,
                        o = i.commentDate,
                        l = i.ipLocatedName,
                        r = i.userInfo || {},
                        a = r.userImage,
                        c = r.name;
                      return (0, I.BX)(m.View, {
                        style: pe.commentHead,
                        children: [
                          (0, I.BX)(m.View, {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "flex-start",
                            },
                            children: [
                              (0, I.tZ)(m.Image, {
                                style: {
                                  width: 40,
                                  height: 40,
                                  borderRadius: 20,
                                  backgroundColor: "#F5F5F5",
                                },
                                src: a,
                                resizeModel: "contain",
                              }),
                              (0, I.BX)(m.View, {
                                style: { marginLeft: 10 },
                                children: [
                                  (0, I.tZ)(m.Text, {
                                    style: pe.name,
                                    children: c || "匿名用户",
                                  }),
                                  (0, I.BX)(m.View, {
                                    style: {
                                      display: "flex",
                                      flexDirection: "row",
                                      justifyContent: "flex-start",
                                      alignItems: "center",
                                      marginTop: 4,
                                      height: 18,
                                    },
                                    children: [
                                      (0, I.tZ)(m.Image, {
                                        src: this.getScoreImage(t),
                                        style: {
                                          width: 19,
                                          height: 19,
                                          position: "absolute",
                                        },
                                        resizeModel: "cover",
                                      }),
                                      (0, I.tZ)(m.View, {
                                        style: {
                                          display: "flex",
                                          flexDirection: "row",
                                          justifyContent: "flex-start",
                                          alignItems: "center",
                                          backgroundColor: "rgba(255,125,0,.1)",
                                          borderRadius: 4,
                                          paddingRight: 5,
                                          height: 18,
                                          lineHeight: 18,
                                        },
                                        children: (0, I.tZ)(m.Text, {
                                          style: [pe.score, { marginLeft: 22 }],
                                          children: this.getScoreStr(t),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, I.BX)(m.View, {
                            children: [
                              (0, I.tZ)(m.Text, {
                                style: pe.rightText,
                                children: o || "",
                              }),
                              (0, I.tZ)(m.Text, {
                                style: pe.rightText,
                                children: l ? "发布于：".concat(l) : "",
                              }),
                              !!n &&
                                (0, I.tZ)(m.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/essence.png",
                                  style: {
                                    position: "absolute",
                                    bottom: 0,
                                    left: -33,
                                    width: 51,
                                    height: 39,
                                    zIndex: -1,
                                    alignSelf: "flex-start",
                                  },
                                  resizeModel: "contain",
                                }),
                            ],
                          }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(p.Component),
            Ze = (0, x.lW)({
              indicator: {
                minWidth: 24,
                height: 18,
                borderRadius: 7,
                backgroundColor: "rgba(0,0,0,.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 6,
                position: "absolute",
                right: 16,
                bottom: 35,
              },
              indicatorText: {
                fontFamily: "PingFangSC-Medium",
                fontSize: 11,
                color: "#FFFFFF",
              },
            }),
            we = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                return (0, s.Z)(this, i), t.call(this, e);
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props.imageList,
                        t = void 0 === e ? [] : e;
                      return t && t.length
                        ? (0, I.BX)(m.View, {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              position: "relative",
                            },
                            children: [
                              (0, I.tZ)(m.View, {}),
                              (0, I.tZ)(_.Z, {
                                horizontal: !0,
                                scrollX: !0,
                                showsHorizontalScrollIndicator: !1,
                                extraData: this.state,
                                bounces: !1,
                                style: { height: 82, whiteSpace: "nowrap" },
                                enableFlex: !0,
                                children: t.map(function (e, i) {
                                  return (0,
                                  I.tZ)(m.View, { style: { display: b.Z.isCRN ? "flex" : "inline-block" }, children: (0, I.tZ)(m.Image, { src: (null == e ? void 0 : e.thumbnailUrl) || "", style: { width: 82, height: 82, borderRadius: 8, marginRight: i !== t.length - 1 ? 8 : 0 } }) }, i);
                                }),
                              }),
                              t.length > 4 &&
                                (0, I.tZ)(m.View, {
                                  style: Ze.indicator,
                                  children: (0, I.tZ)(m.Text, {
                                    style: Ze.indicatorText,
                                    children: t.length,
                                  }),
                                }),
                            ],
                          })
                        : null;
                    },
                  },
                ]),
                i
              );
            })(p.Component),
            ve = i(91006),
            Se = i.n(ve),
            xe = "ios" === N.Z.platform ? 48 : 52,
            Ce = (0, x.lW)({
              textStyle: { fontSize: 14, fontFamily: "PingFangSC-Regular" },
              showMore: {
                fontSize: 14,
                color: C.Z.mainColor,
                lineHeight: 20,
                fontFamily: "PingFangSC-Regular",
              },
              moreBtn: { width: 60, paddingTop: 3 },
            }),
            be = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, s.Z)(this, i),
                  ((n = t.call(this, e)).state = { commentFold: !0 }),
                  n
                );
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state.commentFold,
                        i = this.props,
                        n = i.text,
                        o = i.lineNum,
                        l = i.color,
                        r = i.paddingBottom;
                      return (0, I.BX)(m.View, {
                        style: { paddingRight: 16 },
                        children: [
                          !t &&
                            (0, I.tZ)(m.View, {
                              style: {
                                paddingBottom: (0, W.F7)(xe, n, o) ? 0 : 13,
                              },
                              children: (0, I.tZ)(m.Text, {
                                style: (0, c.Z)(
                                  (0, c.Z)({}, Ce.textStyle),
                                  {},
                                  {
                                    color: l,
                                    paddingBottom: (0, W.F7)(xe, n, o) ? 0 : 13,
                                  }
                                ),
                                numberOfLines: t ? o : 0,
                                children: (0, W.iJ)(n),
                              }),
                            }),
                          t &&
                            (0, I.tZ)(m.View, {
                              style: {
                                paddingBottom: (0, W.F7)(xe, n, o) ? 0 : 13,
                              },
                              children: (0, I.tZ)(V.Z, {
                                style: (0, c.Z)(
                                  (0, c.Z)({}, Ce.textStyle),
                                  {},
                                  { color: l }
                                ),
                                numberOfLines: t ? o : 0,
                                children: (0, W.iJ)(n),
                              }),
                            }),
                          (0, W.F7)(xe, n, o)
                            ? (0, I.tZ)(m.View, {
                                style: (0, c.Z)(
                                  (0, c.Z)({}, Ce.moreBtn),
                                  {},
                                  { paddingBottom: r }
                                ),
                                onCLick: function () {
                                  e.setState({ commentFold: !t });
                                },
                                children: (0, I.tZ)(m.Text, {
                                  style: Ce.showMore,
                                  children: t ? "展开" : "收起",
                                }),
                              })
                            : null,
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(p.Component);
          (0, h.Z)(be, "propTypes", {
            source: Se().string.isRequired,
            text: Se().string.isRequired,
            lineNum: Se().number.isRequired,
            color: Se().string,
            lineHeight: Se().number,
            paddingBottom: Se().number,
          }),
            (0, h.Z)(be, "defaultProps", {
              source: "commentPage",
              text: "",
              lineNum: 3,
              color: "#333",
              lineHeight: 20,
              paddingBottom: 13,
            });
          var Ie = (0, x.lW)({
              title: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 16,
                paddingRight: 16,
                alignItems: "center",
                paddingTop: 13,
              },
              bottomBtn: {
                marginTop: 15,
                paddingBottom: 15,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              },
              goImg: { width: 12, height: 12, alignSelf: "center" },
            }),
            Te = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, s.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, h.Z)((0, u.Z)(n), "tagPress", function (e) {
                    var t = n.props,
                      i = t.scenicSpotId,
                      o = t.name;
                    (0,
                    Y.ky)({ params: { scenicSpotId: i, scenicSpotName: o, commentTagId: e.tagId } });
                  }),
                  (0, h.Z)((0, u.Z)(n), "queryComment", function (e) {
                    var t = n.props.updateAllComment;
                    if (e) {
                      var i = {
                        scenicSpotId: e,
                        imageFilter: !1,
                        pageIndex: 1,
                        pageSize: 25,
                        sortType: 3,
                        imageHeight: 200,
                        imageWidth: 200,
                        commentTagId: 0,
                      };
                      (0, X.mn)(i).then(function (e) {
                        var i;
                        console.log("点评数据-----\x3e", e),
                          1 === e.resultCode &&
                            (e.commentResult &&
                              e.commentResult.allCommentTags &&
                              t &&
                              t(e.commentResult.allCommentTags),
                            n.setState({
                              commentInfo:
                                (e.commentResult &&
                                  e.commentResult.commentInfo) ||
                                [],
                              commentHotTags: [].concat(
                                (e.commentResult &&
                                  e.commentResult.imageCommentTags) ||
                                  [],
                                (e.commentResult &&
                                  e.commentResult.commentHotTags) ||
                                  []
                              ),
                              allCommentTags:
                                e.commentResult &&
                                e.commentResult.allCommentTags,
                              averageScore:
                                null == e ||
                                null === (i = e.commentResult) ||
                                void 0 === i
                                  ? void 0
                                  : i.averageScore,
                            }));
                      });
                    }
                  }),
                  (0, h.Z)((0, u.Z)(n), "formatNumber", function (e) {
                    return e > 1e4 ? (e / 1e4).toFixed(0) + "w" : e;
                  }),
                  (n.state = {
                    commentInfo: [],
                    commentHotTags: [],
                    averageScore: 0,
                  }),
                  n
                );
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e = this.props.scenicSpotId;
                      this.queryComment(e);
                    },
                  },
                  {
                    key: "shouldComponentUpdate",
                    value: function (e) {
                      return (
                        e.scenicSpotId !== this.props.scenicSpotId &&
                          this.queryComment(e.scenicSpotId),
                        !0
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state,
                        i = t.commentInfo,
                        n = void 0 === i ? [] : i,
                        o = t.commentHotTags,
                        l = void 0 === o ? [] : o,
                        r = t.allCommentTags,
                        a = void 0 === r ? {} : r,
                        c = t.averageScore;
                      if (!n || !n.length) return null;
                      var s = n.slice(0, 2);
                      return (0, I.BX)(m.View, {
                        onLayout: function (t) {
                          var i,
                            n = t.nativeEvent;
                          e.props.handleOnLayout({
                            y:
                              null == n ||
                              null === (i = n.layout) ||
                              void 0 === i
                                ? void 0
                                : i.height,
                            type: "layout_".concat(
                              e.props.saleUnitTypeList.length + 5
                            ),
                          });
                        },
                        id: "layout_".concat(
                          this.props.saleUnitTypeList.length + 5
                        ),
                        style: {
                          backgroundColor: "#f5f5f5",
                          paddingLeft: 8,
                          paddingRight: 8,
                        },
                        children: [
                          (0, I.tZ)(m.View, {
                            style: {
                              width: "100%",
                              height: 6,
                              backgroundColor: "#F5F5F5",
                            },
                          }),
                          (0, I.BX)(m.View, {
                            style: {
                              backgroundColor: "#fff",
                              borderRadius: 12,
                            },
                            children: [
                              (0, I.BX)(m.View, {
                                style: Ie.title,
                                id: "AMBW",
                                onClick: function () {
                                  e.props.goCommentDetail();
                                },
                                children: [
                                  (0, I.tZ)(m.View, {
                                    style: {
                                      display: "flex",
                                      flexDirection: "row",
                                      justifyContent: "flex-start",
                                      alignItems: "center",
                                    },
                                    children: (0, I.tZ)(m.Text, {
                                      style: {
                                        fontSize: 16,
                                        fontFamily: "PingFangSC-Semibold",
                                        fontWeight: "600",
                                      },
                                      children: "用户评价",
                                    }),
                                  }),
                                  (0, I.BX)(m.View, {
                                    style: {
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "center",
                                    },
                                    children: [
                                      a.commentCount
                                        ? (0, I.BX)(m.Text, {
                                            style: {
                                              fontFamily: "PingFangSC-Regular",
                                              fontSize: 13,
                                              color: "#666666",
                                            },
                                            children: [
                                              this.formatNumber(a.commentCount),
                                              "条评价",
                                            ],
                                          })
                                        : null,
                                      (0, I.tZ)(m.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                                        style: { width: 12, height: 12 },
                                        resizeModel: "contain",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, I.tZ)(m.View, {
                                style: {
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  paddingLeft: 16,
                                },
                                children: (0, I.BX)(m.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  },
                                  children: [
                                    (0, I.tZ)(m.Text, {
                                      style: {
                                        color: "#198cff",
                                        fontSize: 24,
                                        fontFamily: "ZX-Regular",
                                        marginRight: 3,
                                      },
                                      children: c,
                                    }),
                                    (0, I.tZ)(m.Text, {
                                      style: {
                                        color: "#666666",
                                        fontSize: 12,
                                        fontFamily: "PingFangSC-Regular",
                                      },
                                      children: "/5分",
                                    }),
                                  ],
                                }),
                              }),
                              (0, I.tZ)(he, {
                                tagList: l,
                                tagPress: this.tagPress,
                              }),
                              s.map(function (t, i) {
                                return (0, I.BX)(
                                  m.View,
                                  {
                                    style: { paddingLeft: 16 },
                                    id: "AMBX",
                                    onClick: function () {
                                      e.props.goCommentDetail();
                                    },
                                    children: [
                                      (0, I.tZ)(ye, { commentItem: t }),
                                      (0, I.tZ)(be, {
                                        text: t.content,
                                        lineNum: 3,
                                        paddingBottom: 8,
                                      }),
                                      (0, I.tZ)(we, { imageList: t.imageList }),
                                      0 === i &&
                                        (0, I.tZ)(m.View, {
                                          style: { paddingRight: 16 },
                                          children: (0, I.tZ)(m.View, {
                                            style: {
                                              height: 0.5,
                                              widht: "100%",
                                              marginTop: 13,
                                              marginBottom: 4,
                                              backgroundColor:
                                                "rgba(0,0,0,0.05)",
                                            },
                                          }),
                                        }),
                                    ],
                                  },
                                  i
                                );
                              }),
                              (0, I.BX)(m.View, {
                                style: Ie.bottomBtn,
                                id: "AMBY",
                                onClick: function () {
                                  e.props.goCommentDetail();
                                },
                                children: [
                                  (0, I.tZ)(m.Text, {
                                    style: {
                                      color: "#999999",
                                      fontSize: 12,
                                      fontFamily: "PingFangSC-Regular",
                                    },
                                    children:
                                      (null == a ? void 0 : a.commentCount) > 0
                                        ? "全部".concat(
                                            this.formatNumber(a.commentCount),
                                            "评价"
                                          )
                                        : "查看全部评价",
                                  }),
                                  (0, I.tZ)(m.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                                    resizeMode: "cover",
                                    style: Ie.goImg,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(p.PureComponent),
            Re = (0, p.memo)(function (e) {
              var t = e.marginTop,
                i = void 0 === t ? 10 : t,
                n = e.marginBottom,
                o = void 0 === n ? 30 : n;
              return (0,
              I.tZ)(m.View, { style: { marginTop: i, marginBottom: o, display: "flex", justifyContent: "center", alignItems: "center" }, children: (0, I.tZ)(m.Image, { style: { width: 309, height: 42 }, src: b.Z.isTieyou ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/jdxq_dbpx_ty@3x.png" : "https://images3.c-ctrip.com/ztrip/train_bin/ll/jdxq_dbpx_zx@3x.png" }) });
            }),
            Le = i(50339),
            Fe =
              ("ios" === b.Z.os ? N.Z.safeAreaTop : N.Z.safeAreaTop || 0) +
              ("ios" === b.Z.os ? 44 : 50),
            Ve = N.Z.safeAreaTop + 126 - Fe - ("ios" === b.Z.os ? 12 : 0),
            Be = (0, p.forwardRef)(function (e, t) {
              var i = e.handleScrollTo,
                n = e.scrollValue,
                l = e.saleUnitTypeList,
                r = void 0 === l ? [] : l,
                a = (0, p.useState)(0),
                s = (0, J.Z)(a, 2),
                d = s[0],
                u = s[1],
                g = (0, p.useRef)(
                  (0, c.Z)(
                    {},
                    (function () {
                      for (var e = {}, t = 0; t < 50; t++)
                        e["layout_".concat(t)] = 0;
                      return e;
                    })()
                  )
                ),
                f = (0, p.useRef)(null),
                h = (0, p.useCallback)(function (e) {
                  var t, i;
                  null !== (t = f.current) &&
                    void 0 !== t &&
                    t.scrollToIndex &&
                    (u(e),
                    null === (i = f.current) ||
                      void 0 === i ||
                      i.scrollToIndex({ index: e, viewPosition: 0.5 }));
                }, []),
                y = (0, p.useCallback)(function (e) {
                  i(e);
                }, []);
              (0, p.useImperativeHandle)(t, function () {
                return { selected: d, scrollToIndex: h, setSelected: u };
              });
              var Z = (0, p.useRef)(
                  b.Z.isCRN
                    ? n.interpolate({
                        inputRange: [0, Ve - 10, Ve],
                        outputRange: [0, 0, 48],
                        extrapolate: "clamp",
                      })
                    : 48
                ),
                w = function (e) {
                  var t = e.item,
                    i = e.index;
                  return (0, I.BX)(
                    m.View,
                    {
                      style: {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 13,
                        paddingBottom: 14,
                        paddingLeft: 13,
                        height: 48,
                        paddingRight: 14,
                        maxWidth: 120,
                      },
                      onLayout: function (e) {
                        return (function (e, t) {
                          var i = (0, c.Z)({}, g.current);
                          (i["layout_".concat(t)] = e.nativeEvent.layout.width),
                            (g.current = i);
                        })(e, i);
                      },
                      onClick: function () {
                        return y(i, t);
                      },
                      children: [
                        (0, I.tZ)(V.Z, {
                          style: {
                            color: d === i ? "#198cff" : "#222",
                            fontSize: 17,
                            fontFamily: "PingFangSC-Medium",
                            fontWeight: "500",
                          },
                          numberOfLines: 1,
                          children: null == t ? void 0 : t.saleUnitName,
                        }),
                        (0, I.tZ)(m.View, {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: 9,
                            height: 14,
                          },
                          children:
                            d === i &&
                            (0, I.tZ)(j.Z, {
                              start: { x: 0, y: 0 },
                              end: { x: 1, y: 0 },
                              colors: ["rgb(13, 174, 255)", "rgb(0, 119, 255)"],
                              style: {
                                width: 26,
                                height: 5,
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                              },
                            }),
                        }),
                      ],
                    },
                    i
                  );
                };
              return (null == r ? void 0 : r.length) < 3
                ? null
                : (0, I.tZ)(I.HY, {
                    children: (0, I.BX)(Le.Z.View, {
                      style: {
                        backgroundColor: "#f5f5f5",
                        height: Z.current,
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        overflow: "hidden",
                      },
                      children: [
                        (0, I.tZ)(_.Z, {
                          isFlatList: !0,
                          horizontal: !0,
                          scrollX: !0,
                          scrollEnabled: !1,
                          showsHorizontalScrollIndicator: !1,
                          bounces: !1,
                          disableIntervalMomentum: !0,
                          snapToInterval: 2,
                          style: {
                            backgroundColor: "#fff",
                            flex: 1,
                            height: 48,
                            position: "relative",
                          },
                          data: (0, o.Z)(r),
                          ref: function (e) {
                            return (f.current = e);
                          },
                          ListHeaderComponent: (0, I.tZ)(m.View, {
                            style: { width: 15, height: 36 },
                          }),
                          ListFooterComponent: (0, I.tZ)(m.View, {
                            style: { width: 7, height: 80 },
                          }),
                          renderItem: function (e) {
                            var t = e.item,
                              i = e.index;
                            return w({ item: t, index: i });
                          },
                        }),
                        (0, I.tZ)(j.Z, {
                          start: { x: 0, y: 0 },
                          end: { x: 1, y: 0 },
                          colors: [
                            "rgba(255, 255, 255, 0)",
                            "rgb(255, 255, 255)",
                          ],
                          locations: [0, 0.39],
                          style: {
                            width: 40,
                            height: 48,
                            position: "absolute",
                            right: 0,
                            top: 0,
                            zIndex: 1,
                          },
                        }),
                      ],
                    }),
                  });
            }),
            ke = (0, p.memo)(Be),
            _e = i(96271),
            De = i(22537),
            Pe = i(10279),
            ze = (function () {
              function e() {
                (0, s.Z)(this, e);
              }
              return (
                (0, d.Z)(e, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.showIndicator,
                        i = void 0 !== t && t,
                        n = e.rereshResult,
                        o = void 0 === n ? 1 : n;
                      return (0, I.BX)(I.HY, {
                        children: [
                          i && (0, I.tZ)(De.Z, { rereshResult: o }),
                          (0, I.tZ)(
                            m.ScrollView,
                            (0, c.Z)(
                              (0, c.Z)({}, this.props),
                              {},
                              { forwardedRef: this.props.forwardedRef }
                            )
                          ),
                        ],
                      });
                    },
                  },
                ]),
                e
              );
            })(),
            Ne = (0, Pe.Z)(ze),
            Me = (0, x.lW)({
              descText: {
                fontFamily: "PingFangSC-Regular",
                fontSize: 13,
                color: "#666666",
                lineHeight: 21,
                marginBottom: 6,
              },
              title: {
                fontFamily: "PingFangSC-Medium",
                fontSize: 18,
                color: "#222222",
              },
            }),
            Xe = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, s.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, h.Z)((0, u.Z)(n), "dealOpenTimeStr", function (e) {
                    return e
                      ? e.split(";").map(function (e, t) {
                          return (0,
                          I.tZ)(m.View, { style: { paddingBottom: 20 }, children: (0, I.tZ)(m.Text, { style: Me.descText, children: e }) }, t);
                        })
                      : null;
                  }),
                  n
                );
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.html,
                        i = e.htmlStyle,
                        n = e.label,
                        o = e.openTimeDesc;
                      return (0, I.BX)(m.View, {
                        style: (0, c.Z)(
                          { paddingLeft: 10, paddingRight: 10 },
                          i
                        ),
                        children: [
                          o
                            ? (0, I.BX)(m.View, {
                                style: { paddingHorizontal: 15 },
                                children: [
                                  (0, I.tZ)(m.Text, {
                                    style: Me.title,
                                    children: "开放时间",
                                  }),
                                  this.dealOpenTimeStr((0, W.yh)(o)),
                                  (0, I.tZ)(m.View, {
                                    style: { paddingBottom: 20 },
                                    children: (0, I.tZ)(m.Text, {
                                      style: Me.title,
                                      children: "简介",
                                    }),
                                  }),
                                ],
                              })
                            : null,
                          t
                            ? (0, I.tZ)($.Z, {
                                nodes: t,
                                htmlStyle: i,
                                label: n,
                                title: "简介",
                              })
                            : null,
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(p.Component),
            je = (0, x.lW)({
              noticeIcon: { width: 15, height: 12, marginRight: 5 },
              modalView: {
                width: "100%",
                backgroundColor: "transparent",
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              },
              noticeWrap: {
                backgroundColor: "#fff",
                width: "100%",
                maxHeight: 500,
                minHeight: 200,
                overflow: "hidden",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
              noticeLine: {
                height: 40,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: "#fef4f3",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              text: {
                lineHeight: 20,
                fontSize: 14,
                color: "#666",
                fontFamily: "PingFangSC-Regular",
              },
            });
          function Ue(e) {
            var t = e.openDescription,
              i = e.showOpenDescription,
              n = e.scenicSpotInfo;
            return (0, I.tZ)(m.View, {
              children:
                t &&
                (0, I.tZ)(U.Z, {
                  style: je.modalView,
                  isUseModel: !0,
                  isShowIphoneXAdapter: !1,
                  onCancel: function () {
                    i(!1);
                  },
                  children: (0, I.BX)(m.View, {
                    style: je.noticeWrap,
                    onStartShouldSetResponderCapture: function () {
                      return !0;
                    },
                    children: [
                      (0, I.BX)(m.View, {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          height: 54,
                          marginLeft: 15,
                          marginRight: 15,
                        },
                        children: [
                          (0, I.tZ)(m.Text, {
                            style: {
                              fontSize: 20,
                              color: "#000",
                              fontFamily: "PingFangSC-Medium",
                              lineHeight: 28,
                            },
                            children: "详情",
                          }),
                          (0, I.tZ)(m.View, {
                            style: {
                              display: "flex",
                              width: 30,
                              height: 30,
                              position: "absolute",
                              top: 12,
                              right: 8,
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            id: "AMBb",
                            onClick: function () {
                              i(!1);
                            },
                            children: (0, I.tZ)(m.Image, {
                              src: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/book_closeIcon.png",
                              style: { width: 24, height: 24 },
                            }),
                          }),
                        ],
                      }),
                      (0, I.tZ)(m.ScrollView, {
                        scrollY: !0,
                        style: { maxHeight: 446, minHeight: 146 },
                        children: (0, I.tZ)(Xe, {
                          html:
                            n.productInfo && n.productInfo.productDescription,
                          openTimeDesc: n.openTimeDesc,
                          htmlStyle: { marginTop: 15 },
                        }),
                      }),
                      (0, I.tZ)(K.Z, {}),
                    ],
                  }),
                }),
            });
          }
          var We,
            Ae = i(63854),
            He = i(77510),
            Oe = W.Ro.windowHeight,
            qe = W.Ro.windowWidth,
            Ee = (0, p.memo)(function (e) {
              var t,
                i,
                n,
                o,
                l,
                r,
                a,
                c = e.onClose,
                s = e.resourceDesc;
              return (
                console.log("resourceDesc", s),
                (0, I.BX)(m.View, {
                  style: {
                    minHeight: 308,
                    maxHeight: 0.8 * Oe,
                    backgroundColor: "#f5f5f5",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    position: "relative",
                    paddingLeft: 8,
                    paddingRight: 8,
                  },
                  children: [
                    (0, I.tZ)(j.Z, {
                      start: { x: 0, y: 0 },
                      end: { x: 0, y: 1 },
                      colors: ["#fff", "#f5f5f5"],
                      locations: [0, 1],
                      style: {
                        height: 140,
                        width: qe,
                        position: "absolute",
                        left: 0,
                        top: 0,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                    }),
                    (0, I.tZ)(m.View, {
                      style: {
                        height: 53,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                      },
                      children: (0, I.tZ)(m.Text, {
                        style: {
                          color: "#222222",
                          fontSize: 17,
                          fontFamily: "PingFangSC-Medium",
                          fontWeight: "500",
                        },
                        children: "优惠说明",
                      }),
                    }),
                    (0, I.tZ)(m.View, {
                      style: { position: "absolute", right: 16, top: 16 },
                      onClick: c,
                      children: (0, I.tZ)(m.Image, {
                        style: { width: 24, height: 24 },
                        src: "https://images3.c-ctrip.com/ztrip/train_bin/23-06/icon_close@3x.png",
                      }),
                    }),
                    (0, I.tZ)(m.View, {
                      style: {
                        position: "relative",
                        backgroundColor: "#fff",
                        borderRadius: 12,
                        paddingLeft: 16,
                        paddingRight: 16,
                      },
                      children: (0, I.BX)(m.ScrollView, {
                        scrollY: !0,
                        showsVerticalScrollIndicator: !1,
                        children: [
                          (0, I.tZ)(m.View, { style: { height: 13 } }),
                          !(null == s || !s.marketPrice) &&
                            (0, I.BX)(m.View, {
                              style: {
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                              },
                              children: [
                                (0, I.tZ)(m.Text, {
                                  style: {
                                    color: "#222222",
                                    fontSize: 13,
                                    fontFamily: "PingFangSC-Medium",
                                    fontWeight: "500",
                                  },
                                  children: "门市价",
                                }),
                                (0, I.tZ)(m.Text, {
                                  style: {
                                    color: "#333333",
                                    fontSize: 16,
                                    fontFamily: "PingFangSC-Regular",
                                  },
                                  children: "¥".concat(
                                    null == s ? void 0 : s.marketPrice
                                  ),
                                }),
                              ],
                            }),
                          (0, I.BX)(m.View, {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginTop: 10,
                            },
                            children: [
                              (0, I.tZ)(m.Text, {
                                style: {
                                  color: "#222222",
                                  fontSize: 13,
                                  fontFamily: "PingFangSC-Medium",
                                  fontWeight: "500",
                                },
                                children: "智行预订",
                              }),
                              (0, I.tZ)(m.Text, {
                                style: {
                                  color: "#ff5959",
                                  fontSize: 16,
                                  fontFamily: "PingFangSC-Regular",
                                },
                                children: "¥".concat(
                                  null != s &&
                                    null !== (t = s.couponInfo) &&
                                    void 0 !== t &&
                                    t.discountPrice
                                    ? Number(null == s ? void 0 : s.salePrice) +
                                        Number(
                                          null == s ||
                                            null === (i = s.couponInfo) ||
                                            void 0 === i
                                            ? void 0
                                            : i.discountPrice
                                        )
                                    : null == s
                                    ? void 0
                                    : s.salePrice
                                ),
                              }),
                            ],
                          }),
                          !(
                            null == s ||
                            null === (n = s.couponInfo) ||
                            void 0 === n ||
                            null === (o = n.discountInfoList[0]) ||
                            void 0 === o ||
                            !o.value
                          ) &&
                            (0, I.BX)(m.View, {
                              style: {
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: 10,
                              },
                              children: [
                                (0, I.tZ)(m.Text, {
                                  style: {
                                    color: "#222222",
                                    fontSize: 13,
                                    fontFamily: "PingFangSC-Medium",
                                    fontWeight: "500",
                                  },
                                  children:
                                    null == s ||
                                    null === (l = s.couponInfo) ||
                                    void 0 === l ||
                                    null === (r = l.discountInfoList[0]) ||
                                    void 0 === r
                                      ? void 0
                                      : r.value,
                                }),
                                (0, I.tZ)(m.Text, {
                                  style: {
                                    color: "#ff5959",
                                    fontSize: 16,
                                    fontFamily: "PingFangSC-Regular",
                                  },
                                  children: "-¥".concat(
                                    null == s ||
                                      null === (a = s.couponInfo) ||
                                      void 0 === a
                                      ? void 0
                                      : a.discountPrice
                                  ),
                                }),
                              ],
                            }),
                          (0, I.tZ)(m.View, {
                            style: {
                              height: 1,
                              backgroundColor: "#ededed",
                              marginTop: 13,
                              marginBottom: 13,
                            },
                          }),
                          (0, I.tZ)(m.View, {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-end",
                            },
                            children: (0, I.tZ)(m.Text, {
                              style: {
                                color: "#ff5959",
                                fontSize: 16,
                                fontFamily: "PingFangSC-Regular",
                              },
                              children: "¥".concat(
                                null == s ? void 0 : s.salePrice
                              ),
                            }),
                          }),
                          (0, I.tZ)(m.Text, {
                            style: {
                              color: "#222222",
                              fontSize: 13,
                              fontFamily: "PingFangSC-Medium",
                              fontWeight: "500",
                              marginBottom: 8,
                            },
                            children: "价格说明",
                          }),
                          (0, I.tZ)(m.View, {
                            children: [
                              "划线价：该价格指商品或服务的门市价、服务提供商的指导价、零售价或该商品或服务曾经展示过的销售价等，并非原价;由于产品信息实时更新、市场价格波动等可能会与您预订时展示的不一致，该价格仅供您参考。",
                              "门市价：指景区/商家对应票种/商品的门市官方售卖价(景区或商家门市买赠、促销、短期内自行降价等活动及法定优惠的价格除外)。门市价的信息采集可能出现信息滞后情况，以景区官方为准。",
                              "未划线价：指商品或服务的实时标价，由于产品信息实时更新、市场价格波动等可能会与您预订时展示的不一致，具体成交价格根据商品或服务参加活动，或会员使用优惠券等发生变化，最终以订单结算页价格为准。",
                              "如有疑问，您可在预订前联系客服进行咨询",
                              "补充说明：此说明仅当出现价格比较时有效。若服务提供商单独对划线价格进行说明的，以服务提供商的表述为准。",
                            ].map(function (e, t) {
                              return (0,
                              I.tZ)(m.Text, { style: { color: "#666666", fontSize: 13, fontFamily: "PingFangSC-Regular", marginTop: 0 === t ? 0 : 8 }, children: e }, t);
                            }),
                          }),
                          (0, I.tZ)(m.View, { style: { height: 16 } }),
                        ],
                      }),
                    }),
                    (0, I.tZ)(m.View, { children: (0, I.tZ)(K.Z, {}) }),
                  ],
                })
              );
            }),
            Ye = i(19972),
            Qe = (0, x.lW)({
              fixHuawei: {
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                marginTop: -12,
                position: "relative",
              },
              wrapStyle: {
                width: "100%",
                height: "100%",
                position: "relative",
              },
              attractHeadStyle: {
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 12,
              },
              hotPotStyle: {
                fontFamily: "PingFangSC-Medium",
                color: "#333",
                fontSize: 20,
                lineHeight: 28,
              },
              content: {
                flex: 1,
                margin: 0,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              center: {
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
              container: { flex: 1, position: "relative" },
              active: {
                height: 80,
                borderBottomWidth: 2,
                borderBottomColor: "#ddd",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingLeft: 15,
                backgroundColor: "rgba(255,255,255,1)",
              },
              inactive: { backgroundColor: "rgba(245,252,255,1)" },
              spotDetailText: {
                fontFamily: "PingFangSC-Regular",
                fontSize: 12,
                color: "#198cff",
              },
              emptyTitle: {
                marginTop: 10,
                color: C.Z.grey_33,
                fontSize: 18,
                fontFamily: "PingFangSC-Semibold",
              },
              emptySubTitle: { marginTop: 3, color: C.Z.grey_99, fontSize: 13 },
              saleUnitName: {
                fontFamily: "PingFangSC-Medium",
                fontSize: 18,
                color: "#222222",
              },
            }),
            Ge = "k2CjO3z2cvj",
            Je =
              ("ios" === b.Z.os ? N.Z.safeAreaTop : N.Z.safeAreaTop || 0) +
              ("ios" === b.Z.os ? 64 : 50),
            Ke = N.Z.safeAreaTop + 126,
            $e = "ios" === b.Z.os ? 12 : 0,
            et = Ke - Je - $e,
            tt = function () {
              for (var e = {}, t = 0; t < 50; t++) e["layout_".concat(t)] = 0;
              return e;
            },
            it =
              (0, M.h)()(
                (We = (function (e) {
                  (0, g.Z)(i, e);
                  var t = (0, f.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, s.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, h.Z)((0, u.Z)(n), "scrollViewRef", null),
                      (0, h.Z)((0, u.Z)(n), "state", {
                        fetchStatus: "initial",
                        openBuyReading: !1,
                        openDescription: !1,
                        scenicSpotInfo: {},
                        activeMainRes: {},
                        imageList: [],
                        videoURL: "",
                        commentCount: 0,
                        isShowCouponAnyway: !1,
                        popCouponList: [],
                        couponBgColor: [],
                        couponBtnImage: "",
                        couponBgImage: "",
                        sceneID: "",
                        saleUnitTypeList: [],
                        otherSaleUnitTypeList: [],
                        activityResourceList: [],
                        activityTitle: "",
                        recommendResource: {},
                        orderTicketY: 0,
                        commentY: 0,
                        findSimilarY: 0,
                        scrollValues: 0,
                        scrollValue: b.Z.isCRN ? new _e.Z.Value(0) : 0,
                        goodsShelfTop: 240,
                        detailCommentTop: 240,
                        findSimilarScenicSpotTop: 240,
                        showTab: !1,
                        zxModalVisible: !1,
                        showMoreItem: !1,
                        showPriceDesc: !1,
                        resourceDesc: null,
                        scrollYState: (0, c.Z)({}, tt()),
                        zengxinConfigs: {
                          headTopText: [],
                          contentInfo: [],
                          headTopBgImg: "",
                          modalHeaderImg: "",
                        },
                        showUserModal: !1,
                        spMktInfo: null,
                      }),
                      (0, h.Z)((0, u.Z)(n), "layoutYofChidren", 0),
                      (0, h.Z)((0, u.Z)(n), "lastLayoutValue", 0),
                      (0, h.Z)((0, u.Z)(n), "lastIndex", 0),
                      (0, h.Z)((0, u.Z)(n), "realLayoutData", []),
                      (0, h.Z)(
                        (0, u.Z)(n),
                        "pageId",
                        b.Z.isTieyou ? "10650027085" : "10650027035"
                      ),
                      (0, h.Z)((0, u.Z)(n), "autoRefreshNum", 0),
                      (0, h.Z)((0, u.Z)(n), "isFirstQuery", !0),
                      (0, h.Z)((0, u.Z)(n), "formatcommentCount", function (e) {
                        return e > 1e4 ? (e / 1e4).toFixed(0) + "w" : e;
                      }),
                      (0, h.Z)(
                        (0, u.Z)(n),
                        "getTicketIndexBannerInfo",
                        (0, a.Z)(
                          (0, r.Z)().mark(function e() {
                            var t;
                            return (0, r.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        (0, X.kR)({ bannerType: 2 })
                                      );
                                    case 3:
                                      (t = e.sent),
                                        console.log("res----", t),
                                        1 === t.resultCode &&
                                          null != t &&
                                          t.zengxinConfigs &&
                                          n.setState({
                                            zengxinConfigs: t.zengxinConfigs,
                                          }),
                                        (e.next = 10);
                                      break;
                                    case 8:
                                      (e.prev = 8), (e.t0 = e.catch(0));
                                    case 10:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 8]]
                            );
                          })
                        )
                      ),
                      (0, h.Z)((0, u.Z)(n), "updateAllComment", function (e) {
                        n.setState({ commentCount: e.commentCount || 0 });
                      }),
                      (0, h.Z)((0, u.Z)(n), "queryPopCouponList", function () {
                        (0, X.Ur)({ sceneID: Ge, backType: 0, needCoupon: 0 })
                          .then(function (e) {
                            if (
                              (console.log("详情页获取优惠券弹窗---\x3e", e),
                              1 === e.resultCode)
                            ) {
                              var t =
                                  e.promotionReceiveScenicSpotCouponList || [],
                                i = e.couponBgColor || [],
                                o = "",
                                l = "";
                              e.couponBgImage &&
                                ((l =
                                  e.couponBgImage + "?_=".concat(Date.now())),
                                m.Image.prefetch(l)),
                                e.couponBtnImage &&
                                  ((o =
                                    e.couponBtnImage +
                                    "?_=".concat(Date.now())),
                                  m.Image.prefetch(o)),
                                n.setState({
                                  sceneID: e.sceneID,
                                  popCouponList: t,
                                  couponBgColor: i,
                                  couponBtnImage: o,
                                  couponBgImage: l,
                                });
                            }
                          })
                          .catch(function (e) {
                            console.log("queryPopCouponList---\x3e", e);
                          });
                      }),
                      (0, h.Z)((0, u.Z)(n), "goCommentDetail", function (e) {
                        var t = n.state.scenicSpotInfo;
                        t &&
                          t.iD &&
                          ("score" === e
                            ? n.ubtTrace("SZADetail_Info_Score_click", {
                                PageId: n.pageId,
                              })
                            : n.ubtTrace("SZADetail_UserEvaluation_click", {
                                PageId: n.pageId,
                              }),
                          (0, Y.ky)({
                            self: (0, u.Z)(n),
                            params: {
                              scenicSpotId: null == t ? void 0 : t.iD,
                              scenicSpotName: null == t ? void 0 : t.name,
                            },
                          }));
                      }),
                      (0, h.Z)((0, u.Z)(n), "navigateMap", function () {
                        var e = n.state.scenicSpotInfo;
                        n.ubtTrace("SZADetail_Info_Position_click", {
                          PageId: n.pageId,
                        }),
                          (0, Y.WD)(e);
                      }),
                      (0, h.Z)(
                        (0, u.Z)(n),
                        "renderSpotDetailView",
                        function (e, t) {
                          var i = n.state.fetchStatus;
                          if ("initial" === i || "fail" === i) return null;
                          var o = e.name,
                            l = e.commentGrade,
                            r = e.pmRecommand,
                            a = e.star,
                            s = e.notice,
                            d = e.openTimeTag,
                            u = e.openTimeDesc,
                            g = n.state.commentCount;
                          return o
                            ? (0, I.BX)(m.View, {
                                style: {
                                  marginTop: -12,
                                  position: "relative",
                                  backgroundColor: "#f5f5f5",
                                  borderTopLeftRadius: 16,
                                  borderTopRightRadius: 16,
                                  zIndex: 3,
                                },
                                onLayout: function (e) {
                                  var i,
                                    o = e.nativeEvent;
                                  n.handleOnLayout({
                                    y:
                                      null == o ||
                                      null === (i = o.layout) ||
                                      void 0 === i
                                        ? void 0
                                        : i.height,
                                    type: "layout_".concat(t),
                                  });
                                },
                                children: [
                                  (0, I.tZ)(v.Z, {
                                    zengxinConfigs: n.state.zengxinConfigs,
                                    onZxClick: function () {
                                      return n.showZxModal(!0);
                                    },
                                  }),
                                  (0, I.BX)(m.View, {
                                    style: {
                                      paddingTop: s ? 8 : 15,
                                      marginTop: b.Z.isCRN ? -25 : -30,
                                      position: "relative",
                                      zIndex: 2,
                                    },
                                    children: [
                                      (0, I.tZ)(j.Z, {
                                        start: { x: 0, y: 0 },
                                        end: { x: 0, y: 1 },
                                        colors: [
                                          "rgb(255, 255, 255)",
                                          "rgb(245, 245, 245)",
                                        ],
                                        style: {
                                          width: "100%",
                                          height: 150,
                                          position: "absolute",
                                          left: 0,
                                          top: 0,
                                          borderTopLeftRadius: 16,
                                          borderTopRightRadius: 16,
                                        },
                                      }),
                                      b.Z.isCRN && (0, I.tZ)(ie, { notice: s }),
                                      (0, I.tZ)(m.View, {
                                        style: {
                                          position: "relative",
                                          zIndex: 1,
                                          display: "flex",
                                          flexDirection: "row",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        },
                                        children: (0, I.BX)(m.View, {
                                          style: {
                                            marginBottom: 15,
                                            flex: 1,
                                            borderRightColor: "#F5F5F5",
                                            borderRightWidth: 0.5,
                                            marginLeft: 16,
                                            marginRight: 16,
                                          },
                                          children: [
                                            (0, I.BX)(m.View, {
                                              style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                maxWidth: W.Ro.windowWidth - 32,
                                                justifyContent: "space-between",
                                              },
                                              children: [
                                                (0, I.BX)(m.View, {
                                                  style: {
                                                    maxWidth:
                                                      W.Ro.windowWidth -
                                                      32 -
                                                      62,
                                                  },
                                                  children: [
                                                    (0, I.tZ)(m.View, {
                                                      style: {
                                                        maxHeight: 56,
                                                        marginBottom: 2,
                                                      },
                                                      children: (0, I.BX)(
                                                        m.Text,
                                                        {
                                                          style: {
                                                            fontFamily:
                                                              "PingFangSC-Medium",
                                                            fontSize: 20,
                                                            color: "#333",
                                                          },
                                                          numberOfLines: 2,
                                                          children: [
                                                            o || "",
                                                            a && a >= 4
                                                              ? " (".concat(
                                                                  a,
                                                                  "A)"
                                                                )
                                                              : "",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    r
                                                      ? (0, I.tZ)(m.View, {
                                                          style: {
                                                            marginTop: 8,
                                                            backgroundColor:
                                                              "#edf6ff",
                                                            borderRadius: 3,
                                                            paddingLeft: 4,
                                                            paddingRight: 4,
                                                            paddingTop: 2,
                                                            padddingBottom: 2,
                                                          },
                                                          children: (0, I.tZ)(
                                                            m.Text,
                                                            {
                                                              style: {
                                                                fontFamily:
                                                                  "PingFangSC-Regular",
                                                                fontSize: 12,
                                                                color:
                                                                  "#3c5a86",
                                                              },
                                                              numberOfLines: 1,
                                                              children:
                                                                "“".concat(
                                                                  r,
                                                                  "”"
                                                                ) || 0,
                                                            }
                                                          ),
                                                        })
                                                      : (0, I.tZ)(m.View, {
                                                          style: { height: 8 },
                                                        }),
                                                  ],
                                                }),
                                                (0, I.BX)(m.View, {
                                                  style: {
                                                    width: 62,
                                                    height: 53,
                                                    position: "relative",
                                                    backgroundColor: "#edf6ff",
                                                    borderBottomLeftRadius: 8,
                                                    borderBottomRightRadius: 8,
                                                  },
                                                  onClick: function () {
                                                    l &&
                                                      n.goCommentDetail(
                                                        "score"
                                                      );
                                                  },
                                                  children: [
                                                    (0, I.tZ)(m.Image, {
                                                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/jdxq_pfbj@3x.png",
                                                      style: {
                                                        position: "absolute",
                                                        width: 63,
                                                        height: 33,
                                                      },
                                                    }),
                                                    (0, I.tZ)(m.View, {
                                                      style: {
                                                        height: 33,
                                                        display: "flex",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                        position: "relative",
                                                      },
                                                      children: (0, I.tZ)(
                                                        m.Text,
                                                        {
                                                          style: {
                                                            color: "#ffffff",
                                                            fontSize: l
                                                              ? 22
                                                              : 14,
                                                            fontFamily:
                                                              "ZX-Regular",
                                                          },
                                                          children: l
                                                            ? l.toFixed(1)
                                                            : "暂无",
                                                        }
                                                      ),
                                                    }),
                                                    (0, I.BX)(m.View, {
                                                      style: {
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                        marginTop: 2,
                                                      },
                                                      children: [
                                                        (0, I.tZ)(m.Text, {
                                                          style: {
                                                            color: "#198cff",
                                                            fontSize: 10,
                                                            fontFamily:
                                                              "PingFangSC-Medium",
                                                            fontWeight: "500",
                                                          },
                                                          children: "".concat(
                                                            g
                                                              ? n.formatcommentCount(
                                                                  g
                                                                )
                                                              : "暂无",
                                                            "点评"
                                                          ),
                                                        }),
                                                        (0, I.tZ)(m.Image, {
                                                          style: {
                                                            width: 12,
                                                            height: 12,
                                                          },
                                                          src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/jdxq_icon_lsgd@3x.png",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, I.BX)(m.View, {
                                              style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                height: 17,
                                                alignItems: "center",
                                                marginTop: 15,
                                              },
                                              children: [
                                                (0, I.BX)(m.View, {
                                                  style: {
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                  },
                                                  children: [
                                                    (0, I.tZ)(m.View, {
                                                      onClick: function () {
                                                        return n.showOpenDescription(
                                                          !0
                                                        );
                                                      },
                                                      children: (0, I.tZ)(
                                                        m.Text,
                                                        {
                                                          style: (0, c.Z)(
                                                            (0, c.Z)(
                                                              {},
                                                              Qe.spotDetailText
                                                            ),
                                                            {},
                                                            { marginRight: 16 }
                                                          ),
                                                          children:
                                                            d || "开放时间",
                                                        }
                                                      ),
                                                    }),
                                                    (0, I.tZ)(m.View, {
                                                      style: {
                                                        height: 17,
                                                        overflow: "hidden",
                                                      },
                                                      children: (0, I.tZ)(V.Z, {
                                                        style: {
                                                          color: "#222222",
                                                          fontSize: 12,
                                                          fontFamily:
                                                            "PingFangSC-Medium",
                                                          fontWeight: "500",
                                                          width:
                                                            W.Ro.windowWidth -
                                                            180,
                                                        },
                                                        numberOfLines: 1,
                                                        children: u,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                (0, I.BX)(m.View, {
                                                  onClick: function () {
                                                    return n.showOpenDescription(
                                                      !0
                                                    );
                                                  },
                                                  style: {
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                  },
                                                  children: [
                                                    (0, I.tZ)(m.Text, {
                                                      style: (0, c.Z)(
                                                        (0, c.Z)(
                                                          {},
                                                          Qe.spotDetailText
                                                        ),
                                                        {},
                                                        { marginLeft: 16 }
                                                      ),
                                                      children: "简介",
                                                    }),
                                                    (0, I.tZ)(m.Image, {
                                                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/jdxq_icon_lsgd@3x.png",
                                                      style: {
                                                        width: 12,
                                                        height: 12,
                                                      },
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : null;
                        }
                      ),
                      (0, h.Z)((0, u.Z)(n), "renderLocation", function (e) {
                        return (0, I.tZ)(m.View, {
                          id: "AMBp",
                          onClick: function () {
                            n.showNavigate(e);
                          },
                          style: {
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 15,
                            padddingBottom: 15,
                          },
                          children: (0, I.BX)(m.View, {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                            },
                            children: [
                              (0, I.tZ)(m.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/address.png",
                                style: {
                                  width: 16,
                                  height: 16,
                                  marginRight: 6,
                                },
                              }),
                              (0, I.tZ)(m.Text, {
                                style: {
                                  fontFamily: "PingFangSC-Regular",
                                  color: "#333",
                                  fontSize: 13,
                                  flex: 1,
                                },
                                numberOfLines: 1,
                                children: e.address || "",
                              }),
                              (0, I.BX)(m.View, {
                                style: {
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                },
                                children: [
                                  (0, I.tZ)(m.Text, {
                                    style: {
                                      fontFamily: "PingFangSC-Regular",
                                      fontSize: 11,
                                      color: "#999999",
                                    },
                                    children: "导航",
                                  }),
                                  (0, I.tZ)(m.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/commentArrow.png",
                                    style: { width: 10, height: 10 },
                                  }),
                                ],
                              }),
                            ],
                          }),
                        });
                      }),
                      (0, h.Z)((0, u.Z)(n), "renderEmptyView", function () {
                        return (0,
                        I.BX)(m.View, { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: b.Z.isCRN ? 300 : 200 }, children: [(0, I.tZ)(m.Image, { src: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/ticket_list_empty.png", style: { height: 120, width: 200 } }), (0, I.tZ)(m.Text, { style: Qe.emptyTitle, children: "该景点门票暂不可订" }), (0, I.tZ)(m.Text, { style: Qe.emptySubTitle, children: "平台在为您努力争取资源中" })] });
                      }),
                      (0, h.Z)((0, u.Z)(n), "renderAdrres", function (e, t) {
                        var i = n.state.fetchStatus;
                        if ("initial" === i || "fail" === i) return null;
                        var o = e.address;
                        return (0, I.tZ)(m.View, {
                          onLayout: function (e) {
                            var i,
                              o = e.nativeEvent;
                            n.handleOnLayout({
                              y:
                                null == o ||
                                null === (i = o.layout) ||
                                void 0 === i
                                  ? void 0
                                  : i.height,
                              type: "layout_".concat(t),
                            });
                          },
                          id: "layout_2",
                          style: {
                            position: "relative",
                            zIndex: 3,
                            paddingLeft: 8,
                            paddingRight: 8,
                            backgroundColor: "#f5f5f5",
                          },
                          children: (0, I.BX)(m.View, {
                            style: {
                              display: "flex",
                              maxWidth: W.Ro.windowWidth - 16,
                              flexDirection: "row",
                              height: 39,
                              justifyContent: "space-between",
                              backgroundColor: "#fff",
                              borderRadius: 12,
                              alignItems: "center",
                              paddingLeft: 12,
                              paddingRight: 12,
                              position: "relative",
                              overflow: "hidden",
                            },
                            children: [
                              (0, I.tZ)(m.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/jdxq_dtbj@3x.png",
                                style: {
                                  position: "absolute",
                                  right: 0,
                                  top: 0,
                                  width: 170,
                                  height: 39,
                                },
                              }),
                              (0, I.tZ)(m.View, {
                                style: {
                                  maxWidth: W.Ro.windowWidth - 102,
                                  position: "relative",
                                },
                                children: (0, I.BX)(m.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    maxWidth: W.Ro.windowWidth - 102,
                                  },
                                  children: [
                                    (0, I.tZ)(m.Image, {
                                      style: { width: 12, height: 12 },
                                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/jdxq_icon_dz@3x.png",
                                    }),
                                    (0, I.tZ)(V.Z, {
                                      style: {
                                        color: "#666666",
                                        fontSize: 12,
                                        fontFamily: "PingFangSC-Regular",
                                        marginLeft: 5,
                                      },
                                      numberOfLines: 1,
                                      children: o || "",
                                    }),
                                  ],
                                }),
                              }),
                              (0, I.tZ)(m.View, {
                                style: {
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  zIndex: 2,
                                },
                                children: (0, I.BX)(m.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  },
                                  id: "AMBq",
                                  onClick: n.navigateMap,
                                  children: [
                                    (0, I.tZ)(m.Image, {
                                      style: { width: 22, height: 22 },
                                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/jdxq_icon_dt@3x.png",
                                    }),
                                    (0, I.tZ)(m.Text, {
                                      style: {
                                        color: "#198cff",
                                        fontSize: 11,
                                        fontFamily: "PingFangSC-Regular",
                                        marginTop: 2,
                                      },
                                      children: "地图",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        });
                      }),
                      (0, h.Z)((0, u.Z)(n), "handleOnLayout", function (e) {
                        var t = e.type,
                          i = void 0 === t ? "layout_0" : t,
                          o = e.y,
                          l = void 0 === o ? 0 : o,
                          r = (0, c.Z)({}, n.state.scrollYState);
                        (r[i] = l), n.setState({ scrollYState: r });
                      }),
                      (0, h.Z)((0, u.Z)(n), "handleScrollTo", function (e) {
                        if (b.Z.isCRN) {
                          var t,
                            i,
                            o = n.getLayoutY(e + 4);
                          null !== (t = n.scrollViewRef) &&
                            void 0 !== t &&
                            t.scrollToOffset &&
                            (null === (i = n.scrollViewRef) ||
                              void 0 === i ||
                              i.scrollToOffset({ offset: o, animated: !1 }));
                        }
                      }),
                      (0, h.Z)((0, u.Z)(n), "renderCenterView", function () {
                        var e,
                          t,
                          i =
                            "fail" === n.state.fetchStatus
                              ? "rgba(34,34,34,1)"
                              : "rgba(255,255,255,0)",
                          o = b.Z.isCRN
                            ? n.state.scrollValue.interpolate({
                                inputRange: [0, et - 10, et],
                                outputRange: [
                                  i,
                                  "rgba(34,34,34,1)",
                                  "rgba(34,34,34,1)",
                                ],
                                extrapolate: "clamp",
                              })
                            : "#222";
                        return (0,
                        I.tZ)(m.View, { style: { display: "flex", flexDirection: "row", justifyContent: "center" }, children: (0, I.tZ)(V.Z, { style: { color: o, fontSize: 17, fontFamily: "PingFangSC-Medium", fontWeight: "500" }, numberOfLines: 1, animated: !0, children: (null === (e = n.state) || void 0 === e || null === (t = e.scenicSpotInfo) || void 0 === t ? void 0 : t.name) || "景点详情" }) });
                      }),
                      (0, h.Z)((0, u.Z)(n), "renderLeftView", function () {
                        var e =
                            "fail" === n.state.fetchStatus ? "#333" : "#fff",
                          t = b.Z.isCRN
                            ? n.state.scrollValue.interpolate({
                                inputRange: [0, et - 10, et],
                                outputRange: [e, "#333", "#333"],
                                extrapolate: "clamp",
                              })
                            : "#333";
                        return (0, I.tZ)(m.View, {
                          children: (0, I.tZ)(m.View, {
                            style: {
                              width: 50,
                              height: 50,
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            id: "AMBr",
                            onClick: function () {
                              n.navigateBack();
                            },
                            children: (0, I.tZ)(Le.Z.Text, {
                              style: {
                                fontFamily: "crn_font_rn_mini",
                                color: t,
                                fontSize: 24,
                              },
                              children: "󰲚",
                            }),
                          }),
                        });
                      }),
                      (0, h.Z)(
                        (0, u.Z)(n),
                        "showOpenDescription",
                        function (e) {
                          n.ubtTrace("SZADetail_Info_Introduce_click", {
                            PageId: n.pageId,
                          }),
                            n.setState({ openDescription: e });
                        }
                      ),
                      (0, h.Z)((0, u.Z)(n), "scrollDetailTab", function (e) {
                        var t,
                          i,
                          o,
                          l,
                          r,
                          a = n.getActiveIndex(
                            Math.abs(e.nativeEvent.contentOffset.y)
                          ),
                          c = a >= 1 ? a - 1 : 0,
                          s =
                            c >=
                            (null === (t = n.state.saleUnitTypeList) ||
                            void 0 === t
                              ? void 0
                              : t.length) -
                              1
                              ? (null === (i = n.state.saleUnitTypeList) ||
                                void 0 === i
                                  ? void 0
                                  : i.length) - 1
                              : c;
                        null !== (o = (0, u.Z)(n)) &&
                          void 0 !== o &&
                          null !== (l = o.detailTabRef) &&
                          void 0 !== l &&
                          l.scrollToIndex &&
                          (null === (r = (0, u.Z)(n)) ||
                            void 0 === r ||
                            r.detailTabRef.scrollToIndex(s));
                      }),
                      (0, h.Z)((0, u.Z)(n), "onScroll", function (e) {
                        if (b.Z.isCRN) {
                          var t;
                          null !== (t = (0, u.Z)(n)) &&
                            void 0 !== t &&
                            t.detailTabRef &&
                            n.scrollDetailTab(e);
                        } else {
                          var i,
                            o =
                              null == e ||
                              null === (i = e.detail) ||
                              void 0 === i
                                ? void 0
                                : i.scrollTop,
                            l = n.state.showTab;
                          o > n.state.goodsShelfTop
                            ? !l && n.setState({ showTab: !0 })
                            : l && n.setState({ showTab: !1 });
                        }
                      }),
                      (0, h.Z)((0, u.Z)(n), "bookNow", function (e) {
                        var t;
                        if (
                          null == e ||
                          !e.productId ||
                          (null != e && e.productId)
                        ) {
                          n.ubtTrace("SZADetail_BookList_Card_click", {
                            PageId: n.pageId,
                            TypeSndAttr: null == e ? void 0 : e.name,
                            type:
                              (null === (t = n.state.scenicSpotInfo) ||
                              void 0 === t
                                ? void 0
                                : t.name) || "",
                          });
                          var i = (0, y.getCurrentInstance)();
                          if (i && i.router && i.router.params) {
                            var o,
                              l = n.state.scenicSpotInfo.poiInfo,
                              r = void 0 === l ? {} : l,
                              a = i.router.params,
                              c = a.scenicSpotId,
                              s = void 0 === c ? "" : c,
                              d = a.source,
                              g =
                                void 0 === d
                                  ? b.Z.isCRN
                                    ? "app"
                                    : "wechat"
                                  : d,
                              f = {
                                spotId: s,
                                resourceId:
                                  null == e ||
                                  null === (o = e.resource) ||
                                  void 0 === o
                                    ? void 0
                                    : o.id,
                                productId: null == e ? void 0 : e.productId,
                                resourceIdList: JSON.stringify(
                                  (null == e ? void 0 : e.resourceIdList) || []
                                ),
                                source: g,
                                poiInfo: r,
                                productName: null == e ? void 0 : e.titleName,
                                resourceType:
                                  null == e ? void 0 : e.resourceType,
                                startValidDate:
                                  null == e ? void 0 : e.startValidDate,
                                endValidDate:
                                  null == e ? void 0 : e.endValidDate,
                                validDateDesc:
                                  null == e ? void 0 : e.validDateDesc,
                              };
                            (0, Y.EH)({ self: (0, u.Z)(n), params: f });
                          }
                        } else W.FN.show("加载失败");
                      }),
                      (0, h.Z)(
                        (0, u.Z)(n),
                        "toggleShowBuyReading",
                        function (e) {
                          n.setState({
                            openBuyReading: !0,
                            activeMainRes: { item: e },
                          });
                        }
                      ),
                      (0, h.Z)((0, u.Z)(n), "onItem", function (e) {
                        (0,
                        Y.l4)({ data: { scenicSpotId: e.scenicSpotId, source: n.state.source } });
                      }),
                      (0, h.Z)((0, u.Z)(n), "getContentTop", function () {
                        setTimeout(function () {
                          var e = (0, u.Z)(n),
                            t = Z().createSelectorQuery(),
                            i = Z().createSelectorQuery(),
                            o = Z().createSelectorQuery(),
                            l = (N.Z.statusBarHeight || 44) + 44;
                          t.select("#goodsShelf").boundingClientRect(),
                            i.select("#detailComment").boundingClientRect(),
                            o
                              .select("#findSimilarScenicSpot")
                              .boundingClientRect(),
                            t.exec(function (t) {
                              var i;
                              e.setState({
                                goodsShelfTop:
                                  ((null == t ||
                                  null === (i = t[0]) ||
                                  void 0 === i
                                    ? void 0
                                    : i.top) || 240) - l,
                              });
                            }),
                            i.exec(function (t) {
                              var i;
                              e.setState({
                                detailCommentTop:
                                  ((null == t ||
                                  null === (i = t[0]) ||
                                  void 0 === i
                                    ? void 0
                                    : i.top) || 300) - l,
                              });
                            }),
                            i.exec(function (t) {
                              var i;
                              e.setState({
                                findSimilarScenicSpotTop:
                                  ((null == t ||
                                  null === (i = t[0]) ||
                                  void 0 === i
                                    ? void 0
                                    : i.top) || 300) - l,
                              });
                            });
                        }, 500);
                      }),
                      (0, h.Z)((0, u.Z)(n), "showZxModal", function (e) {
                        n.setState({ zxModalVisible: e });
                      }),
                      (0, h.Z)((0, u.Z)(n), "getOtherItem", function (e) {
                        var t = n.state,
                          i = t.scenicSpotInfo,
                          o = t.imageList,
                          l = t.fetchStatus,
                          r = t.saleUnitTypeList;
                        return {
                          image: (0, I.tZ)(
                            O,
                            {
                              scrollY: n.state.scrollValue,
                              ref: function (e) {
                                return (n.imageCarouselViewRef = e);
                              },
                              imageList: o,
                              videoURL: n.state.videoURL,
                              imageURL: i.imageURL || "",
                              scenicSpotId: i.iD,
                              scenicSpotName: i.name,
                              Page: (0, u.Z)(n),
                              ubtTrace: n.ubtTrace,
                              handleOnLayout: n.handleOnLayout,
                              PageId: n.pageId,
                              position: "relative",
                              index: e,
                            },
                            "imageCarouselView"
                          ),
                          spotDetail: n.renderSpotDetailView(i, e),
                          addres: n.renderAdrres(i, e),
                          UserSourceBanner: (0, I.tZ)(
                            Ae.Z,
                            {
                              cityInfo: null == i ? void 0 : i.cityInfo,
                              setParentSpMktInfo: function (e) {
                                return n.setState({ spMktInfo: e });
                              },
                              backgroundColor: "#f5f5f5",
                              setShowUserModal: function () {
                                return n.setState({ showUserModal: !0 });
                              },
                              handleOnLayout: n.handleOnLayout,
                              index: e,
                            },
                            "UserSourceBanner"
                          ),
                          playProject:
                            "initial" !== l && b.Z.isCRN
                              ? (0, I.tZ)(
                                  se,
                                  {
                                    PageId: n.pageId,
                                    ubtTrace: n.ubtTrace,
                                    Page: (0, u.Z)(n),
                                    fetchStatus: l,
                                    source: n.state.source,
                                    scenicSpotId: i.iD,
                                    saleUnitTypeList: r,
                                    handleOnLayout: n.handleOnLayout,
                                  },
                                  "playProject"
                                )
                              : null,
                          askView:
                            "initial" !== l && b.Z.isCRN
                              ? (0, I.tZ)(
                                  ue,
                                  {
                                    scenicSpotId: i.iD,
                                    handleOnLayout: n.handleOnLayout,
                                    ubtTrace: n.ubtTrace,
                                    saleUnitTypeList: r,
                                    PageId: n.pageId,
                                  },
                                  "askView"
                                )
                              : null,
                          detailComment:
                            "initial" !== l
                              ? (0, I.tZ)(
                                  Te,
                                  {
                                    scenicSpotId: i.iD,
                                    updateAllComment: n.updateAllComment,
                                    handleOnLayout: n.handleOnLayout,
                                    goCommentDetail: n.goCommentDetail,
                                    saleUnitTypeList: r,
                                    name: i.name || "用户评价",
                                  },
                                  "detailComment"
                                )
                              : null,
                          findSimilarScenicSpot:
                            "initial" !== l
                              ? (0, I.tZ)(
                                  G,
                                  {
                                    scenicSpotId: i.iD,
                                    handleOnLayout: n.handleOnLayout,
                                    saleUnitTypeList: r,
                                    source: n.state.source,
                                    onItem: n.onItem,
                                    ubtTrace: n.ubtTrace,
                                    PageId: n.pageId,
                                  },
                                  "findSimilarScenicSpot"
                                )
                              : null,
                          footer:
                            "initial" !== l && "fail" !== l
                              ? (0, I.tZ)(Re, {})
                              : null,
                        };
                      }),
                      (0, h.Z)((0, u.Z)(n), "renderListItem", function (e) {
                        var t = e.item,
                          i = e.index;
                        return "string" == typeof t
                          ? n.getOtherItem(i)[t]
                          : n.saleResourceList(t, i);
                      }),
                      (0, h.Z)((0, u.Z)(n), "getLayoutY", function (e) {
                        var t,
                          i = Object.entries(n.state.scrollYState).slice(0, e),
                          o = 0,
                          r = (0, l.Z)(i);
                        try {
                          for (r.s(); !(t = r.n()).done; ) {
                            o += t.value[1];
                          }
                        } catch (e) {
                          r.e(e);
                        } finally {
                          r.f();
                        }
                        return o;
                      }),
                      (0, h.Z)((0, u.Z)(n), "getActiveIndex", function (e) {
                        var t;
                        if (
                          null === (t = n.realLayoutData) ||
                          void 0 === t ||
                          !t.length
                        ) {
                          var i = Object.entries(n.state.scrollYState).filter(
                            function (e) {
                              return e[1];
                            }
                          );
                          n.realLayoutData = i;
                        }
                        console.log("ddddd", n.realLayoutData);
                        for (
                          var o = -1, l = 0, r = 0;
                          r < n.realLayoutData.length - 1;
                          r++
                        )
                          n.realLayoutData[r][1]
                            ? e >= (l += n.realLayoutData[r][1]) + Je + 48 &&
                              (o = +n.realLayoutData[r][0].split("_")[1] - 1)
                            : e >= (l += n.realLayoutData[r][1]) &&
                              (o = +n.realLayoutData[r][0].split("_")[1] - 1);
                        return o;
                      }),
                      (0, h.Z)(
                        (0, u.Z)(n),
                        "saleResourceList",
                        function (e, t) {
                          return (0, I.BX)(
                            m.View,
                            {
                              onLayout: function (e) {
                                var i,
                                  o = e.nativeEvent;
                                n.handleOnLayout({
                                  y:
                                    null == o ||
                                    null === (i = o.layout) ||
                                    void 0 === i
                                      ? void 0
                                      : i.height,
                                  type: "layout_".concat(t),
                                });
                              },
                              id: "layout_".concat(t),
                              children: [
                                (0, I.tZ)(T, { curHeight: 6 }),
                                (0, I.tZ)(
                                  m.View,
                                  {
                                    style: {
                                      paddingLeft: 8,
                                      paddingRight: 8,
                                      backgroundColor: "#f5f5f5",
                                    },
                                    children: (0, I.BX)(m.View, {
                                      style: {
                                        borderRadius: 12,
                                        backgroundColor: "#fff",
                                        overflow: "hidden",
                                      },
                                      children: [
                                        (0, I.tZ)(m.View, {
                                          style: {
                                            paddingLeft: 15,
                                            paddingTop: 15,
                                          },
                                          children: (0, I.tZ)(m.Text, {
                                            style: [
                                              Qe.saleUnitName,
                                              { lineHeight: 25 },
                                            ],
                                            children: e.saleUnitName,
                                          }),
                                        }),
                                        (0, I.tZ)(P, {
                                          levelFirstSaleUnitList:
                                            e.levelFirstSaleUnitList,
                                          polymerizationSaleUnitList:
                                            e.polymerizationSaleUnitList,
                                          bookNow: n.bookNow,
                                          toggleShowBuyReading:
                                            n.toggleShowBuyReading,
                                          scrollY: n.state.scrollValue,
                                          setShowPriceDesc: function (e) {
                                            n.setState(e);
                                          },
                                        }),
                                      ],
                                    }),
                                  },
                                  t
                                ),
                              ],
                            },
                            "saleResourceList".concat(t)
                          );
                        }
                      ),
                      (0, h.Z)((0, u.Z)(n), "onEndReached", function () {
                        n.setState({ showMoreItem: !0 });
                      }),
                      n
                    );
                  }
                  return (
                    (0, d.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this;
                          this.getTicketIndexBannerInfo();
                          var t = (0, y.getCurrentInstance)();
                          if (t && t.router && t.router.params) {
                            var i = t.router.params,
                              n = i.source,
                              o =
                                void 0 === n
                                  ? b.Z.isCRN
                                    ? "app"
                                    : "wechat"
                                  : n,
                              l = i.CityName,
                              r = void 0 === l ? "" : l,
                              a = i.ProductId,
                              c = void 0 === a ? "" : a,
                              s = i.TypeSndAttr,
                              d = void 0 === s ? "" : s;
                            this.setState({ source: o });
                            var u = setTimeout(function () {
                              e.ubtTrace("c_refund", {
                                passProps: JSON.stringify(t.router.params),
                                crnPage: "detail",
                                source: o || "app",
                              }),
                                clearTimeout(u),
                                (u = null);
                            }, 1e3);
                            this.ubtTrace("SZADetail_exposure", {
                              PageId: this.pageId,
                              Source: o,
                              CityName: r || "",
                              ProductId: c || "",
                              TypeSndAttr: d || "",
                            });
                          }
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      { key: "onPullDownRefresh", value: function () {} },
                      {
                        key: "pageDidAppear",
                        value: function () {
                          var e = (0, y.getCurrentInstance)();
                          if (e && e.router && e.router.params) {
                            var t = e.router.params,
                              i = t.activityCode,
                              n = void 0 === i ? "" : i,
                              o = t.scenicSpotId,
                              l = void 0 === o ? "" : o;
                            this.queryScenicSpotDetailNew(l, n),
                              this.queryScenicSpotImage(l),
                              this.queryPopCouponList();
                          }
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e = (0, y.getCurrentInstance)();
                          if (e && e.router && e.router.params) {
                            var t = e.router.params,
                              i = t.activityCode,
                              n = void 0 === i ? "" : i,
                              o = t.scenicSpotId,
                              l = void 0 === o ? "" : o;
                            this.queryScenicSpotDetailNew(l, n),
                              this.queryScenicSpotImage(l),
                              this.queryPopCouponList();
                          }
                        },
                      },
                      {
                        key: "queryScenicSpotImage",
                        value: function (e) {
                          var t = this;
                          (0, X.bC)({
                            imageSizeKeyList: ["C_640_360"],
                            imageLimit: 0,
                            scenicSpotIDList: [e],
                          }).then(function (e) {
                            if (1 === e.resultCode)
                              try {
                                t.setState({
                                  imageList:
                                    e.scenicSpotImageList[0].imageSizeMapList[0]
                                      .imageURLList || [],
                                  videoURL: e.videoURL,
                                });
                              } catch (e) {}
                          });
                        },
                      },
                      {
                        key: "queryScenicSpotDetailNew",
                        value: function (e, t) {
                          var i = this,
                            n = {
                              activityId: +t || null,
                              scenicSpotIDList: [e],
                              imageSizeKey: "C_640_360",
                              sceneID: Ge,
                              responseDataType: 0,
                            };
                          (0, Ye.Q)("加载中..."),
                            console.log("------\x3e请求参数<------"),
                            console.log(n),
                            console.log("------\x3e请求参数<------"),
                            (0, X.HE)(n)
                              .then(function (n) {
                                if (
                                  (console.log(
                                    "------\x3e新版本接口数据<------",
                                    n
                                  ),
                                  1 === n.resultCode &&
                                    n.scenicSpotInfoList &&
                                    n.scenicSpotInfoList.length)
                                )
                                  try {
                                    var o = n.scenicSpotInfoList[0].productInfo,
                                      l = o.saleUnitTypeList || [],
                                      r = o.otherSaleUnitTypeList || [];
                                    i.setState(
                                      {
                                        scenicSpotInfo: n.scenicSpotInfoList[0],
                                        saleUnitTypeList: F(l),
                                        otherSaleUnitTypeList: L(r),
                                        activityResourceList:
                                          o.activityResourceList || [],
                                        activityTitle: o.activityTitle,
                                        recommendResource:
                                          o.recommendResource || {},
                                        fetchStatus: "success",
                                      },
                                      function () {
                                        console.log(
                                          "saleUnitTypeList----",
                                          i.state.saleUnitTypeList
                                        );
                                      }
                                    );
                                    var a = n.scenicSpotInfoList[0] || {},
                                      c = a.poiInfo,
                                      s = void 0 === c ? {} : c,
                                      d = a.name,
                                      u = a.iD;
                                    i.ubtTrace("c_sightDetail", {
                                      crnPage: "detail",
                                      cityId: s.gsCityId || "",
                                      cityName: s.gsCityName || "",
                                      scenicName: d || "",
                                      scenicSpotId: u || "",
                                    });
                                  } catch (e) {}
                                else
                                  i.isFirstQuery
                                    ? (i.queryScenicSpotDetailNew(e, t),
                                      (i.isFirstQuery = !1))
                                    : i.setState({ fetchStatus: "fail" });
                                (0, Ye.Z)(), !b.Z.isCRN && i.getContentTop();
                              })
                              .catch(function (n) {
                                (0, Ye.Z)(),
                                  i.isFirstQuery
                                    ? (i.queryScenicSpotDetailNew(e, t),
                                      (i.isFirstQuery = !1))
                                    : (i.setState({ fetchStatus: "fail" }),
                                      console.log(n));
                              });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.openBuyReading,
                            n = t.scenicSpotInfo,
                            l = t.activeMainRes,
                            r = t.openDescription,
                            a = t.fetchStatus,
                            c = t.scrollValue,
                            s = t.saleUnitTypeList,
                            d = t.showPriceDesc,
                            u = t.resourceDesc,
                            g = t.showUserModal,
                            f = t.spMktInfo;
                          console.log("saleUnitTypeList", s);
                          var h = b.Z.isCRN
                            ? c.interpolate({
                                inputRange: [0, et - 10, et],
                                outputRange: [
                                  "rgba(255,255,255,0)",
                                  "rgba(255,255,255,.6)",
                                  "rgba(255,255,255,1)",
                                ],
                                extrapolate: "clamp",
                              })
                            : "rgba(255,255,255,0)";
                          return (0, I.BX)(m.View, {
                            style: Qe.container,
                            children: [
                              (0, I.BX)(Le.Z.View, {
                                style: {
                                  backgroundColor: h,
                                  width: W.Ro.windowWidth,
                                  position: "absolute",
                                  zIndex: 999,
                                },
                                children: [
                                  b.Z.isCRN &&
                                    (0, I.tZ)(z.Z, {
                                      zIndex: 0,
                                      v2: !0,
                                      needHolder: !0,
                                      defaultBackButtonColor: "black",
                                      renderLeftView: this.renderLeftView,
                                      renderCenterView: this.renderCenterView,
                                      backgroundColor: "rgba(255,255,255,0)",
                                      rightViewWidth: 0,
                                    }),
                                  b.Z.isCRN &&
                                    (0, I.tZ)(ke, {
                                      handleScrollTo: this.handleScrollTo,
                                      scrollValues: this.state.scrollValues,
                                      scrollValue: this.state.scrollValue,
                                      saleUnitTypeList: s,
                                      scrollYState: this.state.scrollYState,
                                      _value: c._value,
                                      ref: function (t) {
                                        return (e.detailTabRef = t);
                                      },
                                    }),
                                ],
                              }),
                              "fail" !== a &&
                                (0, I.tZ)(Ne, {
                                  isFlatList: !0,
                                  disableIntervalMomentum: !0,
                                  scrollY: !0,
                                  scrollEventThrottle: 16,
                                  onScroll: b.Z.isCRN
                                    ? _e.Z.event(
                                        [
                                          {
                                            nativeEvent: {
                                              contentOffset: {
                                                y: this.state.scrollValue,
                                              },
                                            },
                                          },
                                        ],
                                        { listener: this.onScroll }
                                      )
                                    : this.onScroll,
                                  style: { flex: 1 },
                                  data: [
                                    "image",
                                    "spotDetail",
                                    "addres",
                                    "UserSourceBanner",
                                  ].concat((0, o.Z)(s), [
                                    "playProject",
                                    "askView",
                                    "detailComment",
                                    "findSimilarScenicSpot",
                                    "footer",
                                  ]),
                                  ref: function (t) {
                                    return (e.scrollViewRef = t);
                                  },
                                  renderItem: this.renderListItem,
                                  onEndReached: this.onEndReached,
                                  onEndReachedThreshold: 0.5,
                                  children: [
                                    "image",
                                    "spotDetail",
                                    "addres",
                                    "UserSourceBanner",
                                  ]
                                    .concat((0, o.Z)(s), [
                                      "playProject",
                                      "askView",
                                      "detailComment",
                                      "findSimilarScenicSpot",
                                      "footer",
                                    ])
                                    .map(function (t, i) {
                                      return e.renderListItem({
                                        item: t,
                                        index: i,
                                      });
                                    }),
                                }),
                              "fail" === a && this.renderEmptyView(),
                              (0, I.tZ)(Ue, {
                                openDescription: r,
                                scenicSpotInfo: n,
                                showOpenDescription: this.showOpenDescription,
                              }),
                              i &&
                                (0, I.tZ)(U.Z, {
                                  style: {
                                    height: 0.9 * W.Ro.windowHeight,
                                    zIndex: 1001,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                  },
                                  isShowIphoneXAdapter: !1,
                                  onCancel: function () {
                                    return e.setState({ openBuyReading: !1 });
                                  },
                                  children: (0, I.tZ)(ae, {
                                    buyReadRef: this.buyReadRef,
                                    content: l.item,
                                    btnFn: function () {
                                      e.bookNow(l.item);
                                    },
                                    close: function () {
                                      return e.setState({ openBuyReading: !1 });
                                    },
                                    popHeight: 0.8 * W.Ro.windowHeight,
                                  }),
                                }),
                              (0, I.tZ)(S.Z, {
                                zengxinConfigs: this.state.zengxinConfigs,
                                zxModalVisible: this.state.zxModalVisible,
                                onZxClick: this.showZxModal,
                              }),
                              d &&
                                !!u &&
                                (0, I.tZ)(U.Z, {
                                  style: { height: W.Ro.windowHeight },
                                  isShowIphoneXAdapter: !1,
                                  onCancel: function () {
                                    return e.setState({ showPriceDesc: !1 });
                                  },
                                  children: (0, I.tZ)(Ee, {
                                    resourceDesc: u,
                                    onClose: function () {
                                      return e.setState({ showPriceDesc: !1 });
                                    },
                                    bookNow: this.bookNow,
                                  }),
                                }),
                              (0, I.tZ)(He.Z, {
                                showUserModal: g,
                                spMktInfo: f,
                                closeModal: function () {
                                  return e.setState({ showUserModal: !1 });
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(w.Z))
              ) || We;
          Page(
            (0, n.createPageConfig)(
              it,
              "pages/taroCRN/ticket/pages/detail/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "景点详情",
                navigationBarTextStyle: "black",
                enablePullDownRefresh: !0,
                navigationBarBackgroundColor: "#fff",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98946, 3322, 36332, 95854, 7160, 83004, 59188, 35048, 70486, 97709,
            6189, 22843, 6878, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(67010);
          }
        ),
          e.O();
      },
    ]);
})();
