!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [45246],
      {
        19731: function (e, t, i) {
          var n,
            r = i(32180),
            a = i(79301),
            o = i(22276),
            s = i(95308),
            c = i(57042),
            l = i(24460),
            d = i(81876),
            u = i(21867),
            p = i(86066),
            g = i(45023),
            f = i(52500),
            m = i(8271),
            h = i.n(m),
            y = i(71515),
            w = i(92954),
            b = i.n(w),
            T = i(90098),
            x = i(17152),
            Z = i(32970),
            _ = i(42039),
            S = i(35707),
            v = i(49528),
            C = i(87298),
            N = i(78995),
            I = i(23577),
            k = i(53550),
            V = i(90129),
            P = i(43884),
            L = i(48813),
            z = function (e) {
              var t = e.style,
                i = e.ButtonComponent,
                n = e.ticketInfo,
                r = e.proPassengerList,
                a = e.dispatch,
                s = n || {},
                c = s.trainNumber,
                l = s.departStation,
                d = s.arriveStation,
                u = s.consumeTimeDesc,
                p = s.departDateTime,
                g = s.passengerList,
                m = null != r ? r : g;
              return (0, L.BX)(y.View, {
                style: (0, v.Jn)([D.infoContainer, t]),
                children: [
                  (0, L.tZ)(y.View, {
                    style: { flexDirection: "row" },
                    children: (0, L.BX)(y.View, {
                      style: D.titleGroup,
                      children: [
                        (0, L.BX)(y.View, {
                          style: { flexDirection: "column" },
                          children: [
                            (0, L.tZ)(y.Text, {
                              style: D.infoTitle,
                              children: ""
                                .concat(c, " ")
                                .concat(l, "-")
                                .concat(d),
                            }),
                            (0, L.BX)(y.View, {
                              style: D.infoDescView,
                              children: [
                                (0, L.tZ)(y.Text, {
                                  style: D.infoDesc,
                                  children: "".concat(p, "出发"),
                                }),
                                (0, L.tZ)(y.View, { style: D.interval }),
                                (0, L.tZ)(y.Text, {
                                  style: D.infoDesc,
                                  children: "耗时".concat(u),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, L.tZ)(y.View, { children: !!i && i }),
                      ],
                    }),
                  }),
                  (0, L.tZ)(y.View, {
                    style: {
                      margin: 12,
                      backgroundColor: "#f7f7f7",
                      borderRadius: 8,
                      paddingLeft: 10,
                      paddingRight: 10,
                    },
                    children: m.map(function (e, t, i) {
                      return (0, L.BX)(
                        f.Fragment,
                        {
                          children: [
                            0 !== t &&
                              (0, L.tZ)(y.View, {
                                style: {
                                  height: 0.5,
                                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                                  flex: 1,
                                },
                              }),
                            (0, L.BX)(y.View, {
                              style: D.passengerInfo,
                              children: [
                                (0, L.BX)(y.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  },
                                  children: [
                                    (0, L.tZ)(y.Text, {
                                      style: D.passengerText,
                                      children: e.passengerName,
                                    }),
                                    !(null == e || !e.passengerType) &&
                                      (0, L.tZ)(y.View, {
                                        style: D.tagView,
                                        children: (0, L.tZ)(y.Text, {
                                          style: D.tag,
                                          children: e.passengerType,
                                        }),
                                      }),
                                  ],
                                }),
                                (0, L.BX)(y.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  },
                                  children: [
                                    !(null == e || !e.seatTag) &&
                                      (0, L.tZ)(y.Text, {
                                        className: "seat-tag".concat(
                                          "中间" ===
                                            (null == e ? void 0 : e.tag)
                                            ? " red-border"
                                            : ""
                                        ),
                                        children:
                                          null == e ? void 0 : e.seatTag,
                                      }),
                                    (0, L.tZ)(y.Text, {
                                      style: D.seatType,
                                      children: ""
                                        .concat(e.seatName, " ")
                                        .concat(e.ticketPrice),
                                    }),
                                    (0, L.tZ)(y.Text, {
                                      style: D.passengerText,
                                      children: e.seatNo,
                                    }),
                                    !!a &&
                                      m.length > 1 &&
                                      (0, L.tZ)(y.View, {
                                        className: "checked-icon-view",
                                        onClick: function () {
                                          var n = (0, o.Z)(i);
                                          null != e && e.isSelected
                                            ? (e.isSelected = !1)
                                            : (e.isSelected = !0),
                                            (n[t] = e),
                                            a &&
                                              a({
                                                type: "updateChosenPassenger",
                                                payload: n,
                                              });
                                        },
                                        children: (0, L.tZ)(y.Image, {
                                          src:
                                            null != e && e.isSelected
                                              ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_ed_zx.png"
                                              : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_normal.png",
                                          className: "checked-icon",
                                        }),
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
              });
            },
            D = (0, v.lW)({
              infoContainer: {
                marginLeft: 8,
                marginRight: 8,
                borderRadius: 12,
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
              },
              titleGroup: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 16,
                paddingRight: 12,
                paddingTop: 16,
                flex: 1,
              },
              infoTitle: {
                color: "#222222",
                fontSize: 16,
                fontFamily: "PingFangSC-Medium",
                fontWeight: "500",
              },
              infoDescView: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 4,
              },
              infoDesc: {
                color: "#999999",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
              },
              interval: {
                display: "flex",
                width: 1,
                height: 12,
                backgroundColor: "rgba(0, 0, 0, 0.16)",
                borderRadius: 0.5,
                marginLeft: 8,
                marginRight: 8,
              },
              passengerInfoRow: { flexDirection: "row" },
              passengerInfo: {
                paddingTop: 12,
                paddingBottom: 12,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexGrow: 1,
              },
              passengerText: {
                color: "#333333",
                fontSize: 14,
                fontFamily: "PingFangSC-Medium",
                fontWeight: "500",
              },
              tagView: {
                width: 24,
                height: 15,
                borderWidth: 0.5,
                borderColor: "#b4b4b4",
                borderRadius: 4,
                borderStyle: "solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 4,
              },
              tag: {
                color: "#999999",
                fontSize: 9,
                fontFamily: "PingFangSC-Regular",
              },
              seatType: {
                color: "#666666",
                fontSize: 14,
                fontFamily: "PingFangSC-Regular",
                marginRight: 4,
              },
            }),
            B = function (e) {
              var t = I.Z.isTieyou
                ? "https://market.suanya.com/document/static/%E9%93%81%E5%8F%8B%E8%BD%A6%E7%A5%A8%E5%8D%87%E7%BA%A7%E6%8E%88%E6%9D%83%E5%8D%8F%E8%AE%AE%E9%93%BE%E6%8E%A5.html"
                : "https://market.suanya.com/document/static/%E6%99%BA%E8%A1%8C%E8%BD%A6%E7%A5%A8%E5%8D%87%E7%BA%A7%E6%8E%88%E6%9D%83%E5%8D%8F%E8%AE%AE%E9%93%BE%E6%8E%A5.html";
              return (0, L.BX)(y.View, {
                className: "tips-view",
                style: (null == e ? void 0 : e.style) || {},
                children: [
                  (0, L.tZ)(y.View, { className: "tip-dot" }),
                  (0, L.BX)(y.Text, {
                    className: "tip-text",
                    children: [
                      "请您在查看订单前仔细阅读",
                      (0, L.tZ)(y.Text, {
                        className: "tip-rich-text",
                        id: "AMEA",
                        onClick: function () {
                          return (0, Z.jn)(t);
                        },
                        children: "《在线换座协议》",
                      }),
                    ],
                  }),
                ],
              });
            },
            A = function (e) {
              var t = e.setState,
                i = e.tupOrderList,
                n = e.page,
                r = (0, f.useState)(0),
                a = (0, V.Z)(r, 2),
                o = a[0],
                s = a[1],
                c = (function (e) {
                  var t;
                  switch (e) {
                    case 0:
                      t = [1, 2, 3, 4];
                      break;
                    case 1:
                      t = [1];
                      break;
                    case 2:
                      t = [2];
                      break;
                    case 3:
                      t = [3, 4];
                      break;
                    default:
                      t = [];
                  }
                  return 0 === e
                    ? i
                    : (null == i ? void 0 : i.length) > 0
                    ? i.filter(function (e) {
                        var i, n;
                        return t.includes(
                          null == e ||
                            null === (i = e.passengerList) ||
                            void 0 === i ||
                            null === (n = i[0]) ||
                            void 0 === n
                            ? void 0
                            : n.ticketStatus
                        );
                      })
                    : [];
                })(o),
                l = function (e) {
                  var i = e.item,
                    r = i.passengerList,
                    a = i.orderNumber,
                    o = i.reOrderNumber,
                    s = i.btnName,
                    c = i.unReason;
                  if (c)
                    return (0, L.tZ)(y.View, {
                      onClick: function () {
                        b().showToast({ title: c, icon: "none" });
                      },
                      style: (0, v.Jn)([
                        F.itemBtnView,
                        { backgroundColor: "#f5f5f5" },
                      ]),
                      children: (0, L.tZ)(y.Text, {
                        style: (0, v.Jn)([
                          F.noDataBtnText,
                          { color: "#CCCCCC" },
                        ]),
                        children: "去换座",
                      }),
                    });
                  switch (
                    r.reduce(function (e, t) {
                      return Math.max(e, null == t ? void 0 : t.ticketStatus);
                    }, 0)
                  ) {
                    case 0:
                    case 1:
                      return (0, L.tZ)(y.View, {
                        id: "AMDw",
                        onClick: function () {
                          n.ubtTrace("TZATtkUpdate_ToChangeSeat_click", {
                            PageId: n.pageId,
                            fromSource: n.fromPage,
                          }),
                            t({ clickOrderNumber: a, isShowLayer: !0 });
                        },
                        style: F.itemBtnView,
                        children: (0, L.tZ)(y.Text, {
                          style: (0, v.Jn)([
                            F.noDataBtnText,
                            { color: "#ffffff" },
                          ]),
                          children: s || "去换座",
                        }),
                      });
                    case 2:
                      return (0, L.BX)(y.View, {
                        id: "AMDx",
                        onClick: function () {
                          n.ubtTrace("TZATtkUpdate_ChangeSeating_click", {
                            PageId: n.pageId,
                            fromSource: n.fromPage,
                          }),
                            (0, Z.NU)(o);
                        },
                        style: F.jumpView,
                        children: [
                          (0, L.tZ)(y.Text, {
                            style: F.noDataBtnText,
                            children: "换座中",
                          }),
                          (0, L.tZ)(k.Z, { style: F.rightIcon, children: "󰲧" }),
                        ],
                      });
                    case 3:
                      return (0, L.BX)(y.View, {
                        id: "AMDy",
                        onClick: function () {
                          n.ubtTrace("TZATtkUpdate_ChangeSeatSuc_click", {
                            PageId: n.pageId,
                            fromSource: n.fromPage,
                          }),
                            (0, Z.tK)(a);
                        },
                        style: F.jumpView,
                        children: [
                          (0, L.tZ)(y.Text, {
                            style: F.successText,
                            children: "换座成功",
                          }),
                          (0, L.tZ)(k.Z, { style: F.greyIcon, children: "󰲧" }),
                        ],
                      });
                    case 4:
                      return (0, L.tZ)(y.Text, {
                        style: F.successText,
                        children: "换座失败",
                      });
                    default:
                      return null;
                  }
                };
              return (0, L.BX)(y.View, {
                style: F.container,
                children: [
                  (0, L.tZ)(P.Z, {
                    start: { x: 0, y: 0 },
                    end: { x: 0, y: 1 },
                    colors: ["#FFFFFF", "#F5F5F5"],
                    locations: [0, 1],
                    style: F.linear,
                  }),
                  (0, L.tZ)(y.View, {
                    style: { display: "flex", flexDirection: "row" },
                    children: (0, L.tZ)(y.View, {
                      style: F.tabContainer,
                      children: ["全部", "未换座", "进行中", "已结束"].map(
                        function (e, t) {
                          return (0, L.BX)(
                            y.View,
                            {
                              id: "AMDz",
                              onClick: function () {
                                s(t);
                              },
                              style: F.tabItem,
                              children: [
                                (0, L.tZ)(y.Text, {
                                  style: (0, v.Jn)([
                                    F.tabText,
                                    { color: o === t ? "#198cff" : "#222222" },
                                  ]),
                                  children: e,
                                }),
                                o === t &&
                                  (0, L.tZ)(P.Z, {
                                    start: { x: 0, y: 0 },
                                    end: { x: 1, y: 0 },
                                    colors: ["#0DAEFF", "#0077FF"],
                                    locations: [0, 1],
                                    style: F.selectLine,
                                  }),
                              ],
                            },
                            t
                          );
                        }
                      ),
                    }),
                  }),
                  c.length > 0
                    ? (0, L.BX)(L.HY, {
                        children: [
                          c.map(function (e, t) {
                            return (0,
                            L.tZ)(z, { ticketInfo: e, ButtonComponent: (0, L.tZ)(l, { item: e }), style: { marginTop: 8 } }, t);
                          }),
                          (0, L.tZ)(B, {}),
                          (0, L.BX)(y.View, {
                            className: "notice-view",
                            children: [
                              (0, L.tZ)(y.View, { className: "tip-dot" }),
                              (0, L.tZ)(y.Text, {
                                className: "tip-text",
                                children: "仅保留近90天内换座成功的订单",
                              }),
                            ],
                          }),
                          (0, L.tZ)(y.Image, {
                            src: I.Z.isTieyou
                              ? "https://images3.c-ctrip.com/ztrip/train_xie/2023/05/img_QP_new_Slogan_ty%202.png"
                              : "https://images3.c-ctrip.com/ztrip/train_zhu/img_QP_new_Slogan.png",
                            className: "logo",
                          }),
                        ],
                      })
                    : (0, L.tZ)(function () {
                        return (0, L.BX)(y.View, {
                          style: F.noDataView,
                          children: [
                            (0, L.tZ)(B, {
                              style: { alignSelf: "flex-start", marginTop: -4 },
                            }),
                            (0, L.tZ)(y.Image, {
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/cpp@3x.png",
                              style: { width: 233, height: 160 },
                            }),
                            (0, L.tZ)(y.Text, {
                              style: F.noDataDesc,
                              children: "您还没有车票订单",
                            }),
                            (0, L.tZ)(y.View, {
                              id: "AMDv",
                              onClick: function () {
                                n.ubtTrace("TZATtkUpdate_ToBuyTkt_click", {
                                  PageId: n.pageId,
                                  fromSource: n.fromPage,
                                }),
                                  (0, Z.Yp)();
                              },
                              style: F.noDataBtnView,
                              children: (0, L.tZ)(y.Text, {
                                style: F.noDataBtnText,
                                children: "去下单",
                              }),
                            }),
                          ],
                        });
                      }, {}),
                ],
              });
            },
            F = (0, v.lW)({
              container: {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                position: "relative",
              },
              linear: {
                position: "absolute",
                height: 120,
                top: 0,
                width: "100%",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                zIndex: -1,
              },
              tabContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginLeft: 8,
                marginRight: 8,
                flexGrow: 1,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
              tabItem: {
                display: "flex",
                flexDirection: "column",
                height: 56,
                justifyContent: "space-between",
                alignItems: "center",
                width: 60,
              },
              selectLine: {
                width: 26,
                height: 5,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              },
              tabText: {
                fontSize: 17,
                fontFamily: "PingFangSC-Medium",
                fontWeight: "500",
                marginTop: 21,
              },
              noDataView: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 20,
              },
              noDataDesc: {
                color: "#666666",
                fontSize: 16,
                fontFamily: "PingFangSC-Regular",
              },
              noDataBtnView: {
                display: "flex",
                width: 76,
                height: 34,
                borderWidth: 1,
                borderColor: "#198cff",
                borderRadius: 9,
                marginTop: 15,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 51,
                textAlign: "center",
                borderStyle: "solid",
              },
              noDataBtnText: {
                color: "#198cff",
                fontSize: 14,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
              },
              itemBtnView: {
                display: "flex",
                marginTop: 4,
                width: 64,
                height: 34,
                backgroundColor: "#198cff",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              },
              rightIcon: { color: "#198CFF", fontSize: 12 },
              greyIcon: { color: "#f5f5f5", fontSize: 12 },
              successText: {
                color: "#999999",
                fontSize: 14,
                fontFamily: "PingFangSC-Regular",
              },
              jumpView: {
                flexDirection: "row",
                marginTop: 2,
                alignItems: "center",
                display: "flex",
              },
              bottomNotice: {
                color: "#999999",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
                marginTop: 30,
                alignSelf: "center",
              },
            }),
            R = i(83033),
            X = i(298),
            j = i(82977),
            E = i(33003),
            G = i(58374),
            U = i(92049),
            M = function (e) {
              var t = e.title,
                i = e.desc,
                n = e.originalPrice,
                r = e.realPrice,
                a = e.hidePrice;
              return (0, L.BX)(y.View, {
                style: fe.descView,
                children: [
                  (0, L.BX)(y.View, {
                    children: [
                      (0, L.tZ)(y.Text, { style: fe.infoTitle, children: t }),
                      i &&
                        (0, L.tZ)(y.Text, {
                          className: "pro-title-desc",
                          children: i,
                        }),
                    ],
                  }),
                  !a &&
                    (0, L.BX)(y.View, {
                      style: fe.priceDesc,
                      children: [
                        (0, L.tZ)(y.Text, {
                          style: (0, v.Jn)([
                            fe.infoDesc,
                            { textDecorationLine: "line-through" },
                          ]),
                          children: "¥".concat(n, "/人"),
                        }),
                        (0, L.tZ)(y.Text, {
                          style: (0, v.Jn)([
                            fe.infoDesc,
                            { color: "#198cff", marginLeft: 4 },
                          ]),
                          children: 0 === r ? "免费" : "¥".concat(r, "/人"),
                        }),
                      ],
                    }),
                ],
              });
            },
            J = function (e) {
              var t,
                i,
                n,
                r = e.data,
                a = e.page,
                o = e.dispatch,
                s = e.passengerList,
                c = e.selectedGood,
                l =
                  (null == c ||
                  null === (t = c[0]) ||
                  void 0 === t ||
                  null === (i = t.seatInfoList) ||
                  void 0 === i
                    ? void 0
                    : i.filter(function (e) {
                        return 1 === (null == e ? void 0 : e.isSelected);
                      })) || [];
              return (
                (0, f.useEffect)(function () {
                  a.ubtTrace(
                    "TZATtkUpdate_ChangeSeatAction_SelectCar_exposure",
                    { PageId: a.getPageId() }
                  );
                }, []),
                (0, L.BX)(y.View, {
                  style: fe.specifySeat,
                  children: [
                    (0, L.tZ)(M, {
                      title: (function (e) {
                        var t = e;
                        return (
                          0 === l.length
                            ? (t += "(可选3个)")
                            : (t = "已指定"
                                .concat(
                                  l
                                    .map(function (e) {
                                      return null == e ? void 0 : e.seatName;
                                    })
                                    .join("/"),
                                  "车厢(还可选"
                                )
                                .concat(3 - l.length, "个)")),
                          t
                        );
                      })(r.goodsName),
                      originalPrice: r.productList[0].productPrice,
                      realPrice: r.productList[0].payPrice,
                    }),
                    (0, L.tZ)(y.View, {
                      children: (0, L.tZ)(y.ScrollView, {
                        scrollX: !0,
                        children: (0, L.tZ)(y.View, {
                          className: "scrollView",
                          children: (
                            (null == c || null === (n = c[0]) || void 0 === n
                              ? void 0
                              : n.seatInfoList) || r.productList[0].seatInfoList
                          ).map(function (e, t) {
                            var i;
                            return 8 === e.seatType
                              ? (0, L.tZ)(
                                  y.View,
                                  {
                                    id: "AMDp",
                                    onClick: function () {
                                      return b().showToast({
                                        title: "餐车不可选取",
                                        icon: "none",
                                      });
                                    },
                                    className: "food-car",
                                    children: (0, L.tZ)(y.Text, {
                                      className: "food-car-text",
                                      children: "餐车",
                                    }),
                                  },
                                  t
                                )
                              : (0, L.BX)(
                                  y.View,
                                  {
                                    id: "AMDq",
                                    onClick: function () {
                                      if (
                                        s.filter(function (e) {
                                          return e.isSelected;
                                        }) < 1
                                      )
                                        b().showToast({
                                          title: "请先选择乘客",
                                          icon: "none",
                                        });
                                      else if (
                                        e.isCurrentPosition ||
                                        !e.isAvailable
                                      )
                                        b().showToast({
                                          title: "当前座位不可选取",
                                          icon: "none",
                                        });
                                      else if (
                                        1 ===
                                        (null == e ? void 0 : e.isSelected)
                                      ) {
                                        var i = JSON.parse(
                                          JSON.stringify(c[0].seatInfoList)
                                        );
                                        i[t].isSelected = 0;
                                        var n = [
                                          (0, X.Z)(
                                            (0, X.Z)({}, r.productList[0]),
                                            {},
                                            { seatInfoList: i }
                                          ),
                                        ];
                                        o({
                                          type: "updateSelectedGood",
                                          payload:
                                            0 ===
                                            i.filter(function (e) {
                                              return (
                                                1 ===
                                                (null == e
                                                  ? void 0
                                                  : e.isSelected)
                                              );
                                            }).length
                                              ? []
                                              : n,
                                        });
                                      } else if (3 === l.length)
                                        b().showToast({
                                          title: "只能选择三个车厢",
                                          icon: "none",
                                        });
                                      else {
                                        var d,
                                          u = JSON.parse(
                                            JSON.stringify(
                                              (null == c ||
                                              null === (d = c[0]) ||
                                              void 0 === d
                                                ? void 0
                                                : d.seatInfoList) ||
                                                r.productList[0].seatInfoList
                                            )
                                          );
                                        (u[t].isSelected = 1),
                                          o({
                                            type: "updateSelectedGood",
                                            payload: [
                                              (0, X.Z)(
                                                (0, X.Z)({}, r.productList[0]),
                                                {},
                                                { seatInfoList: u }
                                              ),
                                            ],
                                          }),
                                          a.ubtTrace(
                                            "TZATtkUpdate_ChangeSeatActionbar_SelectCar_click",
                                            {
                                              PageId: a.getPageId(),
                                              SelectList: l.map(function (e) {
                                                return +(null == e
                                                  ? void 0
                                                  : e.seatName);
                                              }),
                                            }
                                          );
                                      }
                                    },
                                    className: "itemView".concat(ce(e, t)),
                                    children: [
                                      !(null == e || !e.tag) &&
                                        (0, L.BX)(L.HY, {
                                          children: [
                                            (0, L.tZ)(y.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/sj@3x.png",
                                              className: "arrow-icon",
                                            }),
                                            (0, L.tZ)(y.View, {
                                              className: "tag-view",
                                              style: {
                                                width:
                                                  3 ===
                                                  (null == e ||
                                                  null === (i = e.tag) ||
                                                  void 0 === i
                                                    ? void 0
                                                    : i.length)
                                                    ? 34
                                                    : 16,
                                              },
                                              children: (0, L.tZ)(y.Text, {
                                                className: "tag-text",
                                                children:
                                                  null == e ? void 0 : e.tag,
                                              }),
                                            }),
                                          ],
                                        }),
                                      (0, L.tZ)(y.Text, {
                                        className: "itemText ".concat(
                                          e.isCurrentPosition || !e.isAvailable
                                            ? " invalid-text-color"
                                            : 1 ===
                                              (null == e
                                                ? void 0
                                                : e.isSelected)
                                            ? " select-text"
                                            : ""
                                        ),
                                        children: e.seatName,
                                      }),
                                      e.isCurrentPosition &&
                                        (0, L.tZ)(y.Text, {
                                          className: "item-current-text",
                                          children: "当前",
                                        }),
                                    ],
                                  },
                                  t
                                );
                          }),
                        }),
                      }),
                    }),
                  ],
                })
              );
            },
            O = i(93212),
            W = function (e) {
              var t = e.title;
              return (0, L.BX)(y.View, {
                className: "not-available-view",
                children: [
                  (0, L.tZ)(y.Text, {
                    className: "not-avalilable-title",
                    children: t,
                  }),
                  (0, L.tZ)(y.Text, {
                    className: "not-avalilable-desc",
                    children: "不支持与其他服务同时选择",
                  }),
                ],
              });
            },
            q = function (e) {
              var t,
                i = e.data,
                n = e.dispatch,
                r = e.selectedGood,
                a = e.page,
                s = i.productList[0],
                c = s.seatInfoList,
                l = s.productType;
              return (
                (0, f.useEffect)(function () {
                  console.log(l, (0, O.Z)(l)),
                    a.ubtTrace(
                      58 === l
                        ? "TZATtkUpdate_ChangeSeatActionbar_ComSeat_exposure"
                        : "TZATtkUpdate_ChangeSeatActionbar_EncSeat_exposure",
                      { PageId: a.getPageId() }
                    );
                }, []),
                [58, 59].includes(
                  null == r || null === (t = r[0]) || void 0 === t
                    ? void 0
                    : t.productType
                ) || 0 === r.length
                  ? (0, L.BX)(y.View, {
                      style: fe.specifySeat,
                      children: [
                        (0, L.tZ)(M, { title: i.goodsName, hidePrice: !0 }),
                        (0, L.tZ)(y.View, {
                          className: "gdc-container",
                          children: c.map(function (e, t) {
                            var a,
                              s,
                              c,
                              l,
                              d = (0, o.Z)(r),
                              u =
                                (null === (a = d) ||
                                void 0 === a ||
                                null === (s = a[0]) ||
                                void 0 === s ||
                                null === (c = s.seatInfoList) ||
                                void 0 === c ||
                                null === (l = c[0]) ||
                                void 0 === l
                                  ? void 0
                                  : l.seatName) === e.seatName;
                            return (
                              console.log("findIndex"),
                              (0, L.BX)(
                                y.View,
                                {
                                  onClick: function () {
                                    e.isAvailable && !e.isCurrentPosition
                                      ? ((d = u
                                          ? []
                                          : [
                                              (0, X.Z)(
                                                (0, X.Z)({}, i.productList[0]),
                                                {},
                                                { seatInfoList: [e] }
                                              ),
                                            ]),
                                        n({
                                          type: "updateSelectedGood",
                                          payload: d,
                                        }))
                                      : b().showToast({
                                          title: "当前座位不可选取",
                                          icon: "none",
                                        });
                                  },
                                  className: "gdc-btn-view"
                                    .concat(0 === t ? "" : " margin-left-9")
                                    .concat(u ? " select-bg" : ""),
                                  children: [
                                    (0, L.tZ)(y.Image, {
                                      src: u
                                        ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_tag-jb_selected.png"
                                        : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_tag-jb_unselected.png",
                                      className: "select-btn-icon",
                                    }),
                                    (0, L.tZ)(y.Text, {
                                      className: "connect-btn-text".concat(
                                        u ? " select-text" : ""
                                      ),
                                      children: e.seatName,
                                    }),
                                    (0, L.tZ)(y.Text, {
                                      className: "gdc-btn-subtitle".concat(
                                        u ? " select-text" : ""
                                      ),
                                      children: e.subTitle,
                                    }),
                                  ],
                                },
                                e.seatName
                              )
                            );
                          }),
                        }),
                      ],
                    })
                  : (0, L.tZ)(W, { title: null == i ? void 0 : i.goodsName })
              );
            };
          !(function (e) {
            (e[(e.num1 = 0)] = "num1"),
              (e[(e.num2 = 51)] = "num2"),
              (e[(e.num4 = 52)] = "num4"),
              (e[(e.num8 = 0)] = "num8"),
              (e[(e.num16 = 53)] = "num16"),
              (e[(e.num32 = 54)] = "num32"),
              (e[(e.num64 = 55)] = "num64");
          })(n || (n = {}));
          var H = new Set(["AB", "BA", "BC", "CB", "DF", "FD"]),
            Y = new Set(["AC", "CA", "DF", "FD"]),
            K = new Set([
              "01",
              "10",
              "12",
              "21",
              "34",
              "43",
              "56",
              "65",
              "67",
              "76",
              "89",
              "98",
            ]);
          function Q(e) {
            var t = (function (e) {
              return "二等座" === e
                ? H
                : "一等座" === e
                ? Y
                : "硬座" === e
                ? K
                : new Set();
            })(e[0].seatName);
            if (0 === t.size) return !1;
            var i = e[0],
              n = e[1];
            return (
              i.seatName === n.seatName &&
              i.carriageNo === n.carriageNo &&
              i.seatNumber.length > 2 &&
              n.seatNumber.length > 2 &&
              i.seatNumber.substring(0, 2) === n.seatNumber.substring(0, 2) &&
              (0, o.Z)(t).some(function (e) {
                return (
                  e ===
                  i.seatNumber.substring(2, 3) + n.seatNumber.substring(2, 3)
                );
              })
            );
          }
          var $,
            ee = function (e) {
              var t,
                i,
                r,
                a = e.data,
                s = e.dispatch,
                c = e.selectedGood,
                l = e.passengerList,
                d = function (e) {
                  var t = [],
                    i = !1,
                    r = 0,
                    a = [],
                    o = { isSingleDisabled: !1, isConnectDisabled: !1 },
                    s =
                      !e.seatInfoList[0].isAvailable ||
                      e.seatInfoList[0].isCurrentPosition;
                  return (
                    l.forEach(function (e) {
                      e.isSelected &&
                        (t.push(n["num".concat(e.seatBizType)]),
                        r++,
                        a.push({
                          carriageNo: e.carriageNo,
                          seatNumber: e.seatNumber,
                        }),
                        "硬座" === e.seatName &&
                          ["08", "09", "10"].includes(e.carriageNo) &&
                          (i = i || !0));
                    }),
                    57 === e.productType
                      ? s ||
                        i ||
                        ![0, 2].includes(r) ||
                        (2 === r &&
                          Q(
                            l.filter(function (e) {
                              return e.isSelected;
                            })
                          ))
                        ? (o.isConnectDisabled = !0)
                        : (o.isConnectDisabled = !1)
                      : [51, 52].includes(e.productType)
                      ? (s || t.includes(null == e ? void 0 : e.productType)) &&
                        (o.isSingleDisabled = !0)
                      : 60 === e.productType
                      ? (s ||
                          (function (e) {
                            if (1 === e.length) return !0;
                            if (
                              !(
                                e.length > 1 &&
                                e.every(function (e, t, i) {
                                  return (
                                    e.seatName === i[0].seatName &&
                                    e.carriageNo === i[0].carriageNo
                                  );
                                })
                              )
                            )
                              return !1;
                            var t = e[0].seatName,
                              i = 2;
                            if (["硬卧", "二等卧", "高级软卧"].includes(t)) {
                              if (e.length > 6) return !0;
                              i = 2;
                            }
                            if (["软卧", "一等卧"].includes(t)) {
                              if (e.length > 4) return !0;
                              i = 4;
                            }
                            return (
                              1 ===
                              e
                                .map(function (e) {
                                  var t = e.seatNumber.substring(
                                    0,
                                    e.seatNumber.length - 3
                                  );
                                  return Math.floor((parseInt(t) - 1) / i);
                                })
                                .filter(function (e, t, i) {
                                  return i.indexOf(e) === t;
                                }).length
                            );
                          })(
                            l.filter(function (e) {
                              return e.isSelected;
                            })
                          )) &&
                        (o.isConnectDisabled = !0)
                      : [53, 54, 55].includes(e.productType) &&
                        (s || t.includes(null == e ? void 0 : e.productType)) &&
                        (o.isSingleDisabled = !0),
                    o
                  );
                };
              if (
                ![51, 52, 53, 54, 55, 57, 60].includes(
                  null == c || null === (t = c[0]) || void 0 === t
                    ? void 0
                    : t.productType
                ) &&
                0 !== c.length
              )
                return (0, L.tZ)(W, {
                  title: null == a ? void 0 : a.goodsName,
                });
              var u = c.filter(function (e) {
                return [51, 52, 53, 54, 55, 57, 60].includes(e.productType);
              });
              return (0, L.BX)(y.View, {
                style: fe.specifySeat,
                children: [
                  (0, L.tZ)(M, {
                    title: a.goodsName,
                    originalPrice:
                      (null == c || null === (i = c[0]) || void 0 === i
                        ? void 0
                        : i.productPrice) || a.productList[0].productPrice,
                    realPrice:
                      (null == c || null === (r = c[0]) || void 0 === r
                        ? void 0
                        : r.payPrice) || a.productList[0].payPrice,
                  }),
                  (0, L.tZ)(y.View, {
                    style: fe.seatGroup,
                    children: a.productList.map(function (e, t) {
                      if (![57, 60].includes(e.productType)) {
                        var i = (0, o.Z)(c),
                          n = i.findIndex(function (t) {
                            return t.productType === e.productType;
                          }),
                          r = -1 !== n;
                        return (0, L.BX)(
                          y.View,
                          {
                            id: "AMDn",
                            onClick: function () {
                              !e.seatInfoList[0].isAvailable ||
                              e.seatInfoList[0].isCurrentPosition ||
                              d(e).isSingleDisabled
                                ? b().showToast({
                                    title: "当前座位不可选取",
                                    icon: "none",
                                  })
                                : (-1 !== n
                                    ? i.splice(n, 1)
                                    : u.length > 0
                                    ? i.splice(0, 1, e)
                                    : i.push(e),
                                  s({
                                    type: "updateSelectedGood",
                                    payload: i,
                                  }));
                            },
                            style: (0, v.Jn)([
                              fe.seatBtnView,
                              {
                                marginLeft: 0 !== t ? 8 : 0,
                                borderColor: r ? "#198CFF" : "#F7F7F7",
                                backgroundColor: r ? "#F9FBFF" : "#F7F7F7",
                                opacity: d(e).isSingleDisabled ? 0.3 : 1,
                              },
                            ]),
                            children: [
                              (0, L.tZ)(y.Image, {
                                src: r
                                  ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_tag-jb_selected.png"
                                  : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_tag-jb_unselected.png",
                                style: fe.imgTag,
                              }),
                              (0, L.BX)(y.View, {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                },
                                children: [
                                  (0, L.tZ)(y.Text, {
                                    style: (0, v.Jn)([
                                      fe.passengerText,
                                      { color: r ? "#198CFF" : "#333333" },
                                    ]),
                                    children: e.productName,
                                  }),
                                  (e.seatInfoList[0].isCurrentPosition ||
                                    d(e).isSingleDisabled) &&
                                    (0, L.tZ)(y.Text, {
                                      style: (0, v.Jn)([
                                        fe.currentSeat,
                                        { color: r ? "#198CFF" : "#333333" },
                                      ]),
                                      children: "当前坐席",
                                    }),
                                ],
                              }),
                            ],
                          },
                          e.productType
                        );
                      }
                    }),
                  }),
                  (0, L.tZ)(y.View, {
                    style: fe.seatGroup,
                    children: a.productList.map(function (e, t) {
                      if ([57, 60].includes(e.productType)) {
                        var i = (0, o.Z)(c),
                          n = i.findIndex(function (t) {
                            return t.productType === e.productType;
                          }),
                          r = -1 !== n;
                        return (0, L.BX)(
                          y.View,
                          {
                            className: "connect-btn".concat(
                              d(e).isConnectDisabled
                                ? " disabled"
                                : r
                                ? " select-bg"
                                : ""
                            ),
                            id: "AMDo",
                            onClick: function () {
                              d(e).isConnectDisabled
                                ? b().showToast({
                                    title: "当前座位不可选取",
                                    icon: "none",
                                  })
                                : (-1 !== n
                                    ? i.splice(n, 1)
                                    : u.length > 0
                                    ? i.splice(0, 1, e)
                                    : i.push(e),
                                  s({
                                    type: "updateSelectedGood",
                                    payload: i,
                                  }));
                            },
                            children: [
                              (0, L.tZ)(y.Image, {
                                src: r
                                  ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_tag-jb_selected.png"
                                  : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_tag-jb_unselected.png",
                                className: "select-btn-icon",
                              }),
                              (0, L.tZ)(y.Text, {
                                className: "connect-btn-text".concat(
                                  r ? " select-text" : ""
                                ),
                                children:
                                  (null == e ? void 0 : e.productName) ||
                                  "两人相邻连座",
                              }),
                              (0, L.tZ)(y.Text, {
                                className: "connect-btn-desc",
                                children:
                                  57 === e.productType
                                    ? "相邻连座仅支持两人选择"
                                    : "选同房间仅支持两人以上选择",
                              }),
                            ],
                          },
                          e.productType
                        );
                      }
                    }),
                  }),
                ],
              });
            },
            te = function (e) {
              var t,
                i,
                n,
                r = e.data,
                a = e.dispatch,
                s = e.selectedGood;
              return 50 !==
                (null == s || null === (t = s[0]) || void 0 === t
                  ? void 0
                  : t.productType) && 0 !== s.length
                ? (0, L.tZ)(W, { title: null == r ? void 0 : r.goodsName })
                : (0, L.BX)(y.View, {
                    style: fe.specifySeat,
                    children: [
                      (0, L.tZ)(M, {
                        title: (function () {
                          if (0 === s.length) return r.goodsName + "(可选2个)";
                          var e = s[0].seatInfoList
                            .filter(function (e) {
                              return null == e ? void 0 : e.isSelected;
                            })
                            .map(function (e) {
                              return e.seatName;
                            });
                          return "已指定"
                            .concat(e.join("/"), "座位(还可选")
                            .concat(2 - e.length, "个)");
                        })(),
                        originalPrice:
                          (null == s || null === (i = s[0]) || void 0 === i
                            ? void 0
                            : i.productPrice) || r.productList[0].productPrice,
                        realPrice:
                          (null == s || null === (n = s[0]) || void 0 === n
                            ? void 0
                            : n.payPrice) || r.productList[0].payPrice,
                      }),
                      (0, L.tZ)(y.View, {
                        className: "abc-container",
                        children: r.productList[0].seatInfoList.map(function (
                          e,
                          t,
                          i
                        ) {
                          return ["靠窗", "过道"].includes(e.seatName)
                            ? (0, L.tZ)(P.Z, {
                                start: { x: 0, y: 0 },
                                end: { x: 0, y: 1 },
                                colors: [
                                  "rgba(240, 241, 242, 0)",
                                  "rgba(240, 241, 242, 0.5074)",
                                  "rgba(240, 241, 242, 0)",
                                ],
                                locations: [0, 0.51, 1],
                                style: fe.linear,
                                children: (0, L.tZ)(y.Text, {
                                  style: fe.tagText,
                                  children: e.seatName,
                                }),
                              })
                            : (0, L.BX)(
                                y.View,
                                {
                                  style: (0, v.Jn)([
                                    fe.seatIconView,
                                    { opacity: e.isCurrentPosition ? 0.6 : 1 },
                                  ]),
                                  id: "AMDs",
                                  onClick: function () {
                                    if (e.isAvailable && !e.isCurrentPosition) {
                                      var n,
                                        s = (0, o.Z)(i);
                                      null != e && e.isSelected
                                        ? (s[t].isSelected = !1)
                                        : i.filter(function (e) {
                                            return null == e
                                              ? void 0
                                              : e.isSelected;
                                          }).length > 1
                                        ? b().showToast({
                                            title: "最多只能选择两个座位",
                                            icon: "none",
                                          })
                                        : (s[t].isSelected = !0),
                                        (n =
                                          s.filter(function (e) {
                                            return null == e
                                              ? void 0
                                              : e.isSelected;
                                          }).length > 0
                                            ? [
                                                (0, X.Z)(
                                                  (0, X.Z)(
                                                    {},
                                                    r.productList[0]
                                                  ),
                                                  {},
                                                  { seatInfoList: s }
                                                ),
                                              ]
                                            : []),
                                        a({
                                          type: "updateSelectedGood",
                                          payload: n,
                                        });
                                    } else
                                      b().showToast({
                                        title: "当前座位不可选取",
                                        icon: "none",
                                      });
                                  },
                                  children: [
                                    (0, L.tZ)(y.Image, {
                                      style: fe.seatIcon,
                                      src: e.isCurrentPosition
                                        ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_zw_unavilable.png"
                                        : null != e && e.isSelected
                                        ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_zw_selected.png"
                                        : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_zw_unselected.png",
                                    }),
                                    (0, L.tZ)(y.Text, {
                                      style: (0, v.Jn)([
                                        fe.seatName,
                                        (null == e ? void 0 : e.isSelected) && {
                                          color: "#3A6DD5",
                                        },
                                      ]),
                                      children: e.seatName,
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
            ie = b().getSystemInfoSync(),
            ne = ie.screenWidth,
            re = ie.screenHeight,
            ae = ie.windowWidth,
            oe = ie.windowHeight,
            se = ie.pixelRatio,
            ce = function (e, t) {
              var i = "";
              return (
                0 === t && (i = " firstitemView"),
                e.isCurrentPosition
                  ? (i += " invalid-bg-color")
                  : 1 === (null == e ? void 0 : e.isSelected) &&
                    (i += " select-bg"),
                i
              );
            },
            le = {
              screenWidth: ne,
              screenHeight: re,
              windowWidth: ae,
              windowHeight: oe,
              pixelRatio: se,
            }.windowHeight,
            de = function () {
              var e = I.Z.isTieyou
                ? "https://m.tieyou.com/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=rebook"
                : "https://m.suanya.com/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=rebook";
              (0, Z.jn)(e);
            },
            ue = function (e, t) {
              var i, n, r;
              switch (t.type) {
                case "customUpdate":
                  return (0, X.Z)((0, X.Z)({}, e), t.payload);
                case "updateChosenPassenger":
                  var a = e.goodsList.filter(function (e) {
                      return 3 === (null == e ? void 0 : e.goodsType);
                    }),
                    o = t.payload
                      .filter(function (e) {
                        return e.isSelected;
                      })
                      .filter(function (e, t, i) {
                        return (
                          i.findIndex(function (t) {
                            return t.carriageNo === e.carriageNo;
                          }) === t
                        );
                      }),
                    s = [];
                  if (1 === a.length) {
                    var c = (s = JSON.parse(
                      JSON.stringify(e.goodsList)
                    )).findIndex(function (e) {
                      return 3 === e.goodsType;
                    });
                    if (1 === o.length) {
                      var l, d, u, p;
                      s = JSON.parse(JSON.stringify(e.goodsList));
                      var g =
                        null === (l = a[0]) ||
                        void 0 === l ||
                        null === (d = l.productList) ||
                        void 0 === d ||
                        null === (u = d[0]) ||
                        void 0 === u ||
                        null === (p = u.seatInfoList) ||
                        void 0 === p
                          ? void 0
                          : p.findIndex(function (e) {
                              return e.seatName === o[0].carriageNo;
                            });
                      "number" == typeof g &&
                        (s[c].productList[0].seatInfoList[g].isCurrentPosition =
                          !0);
                    } else
                      s[c].productList[0].seatInfoList.forEach(function (e) {
                        return (e.isCurrentPosition = !1);
                      });
                  }
                  return s.length > 0
                    ? (0, X.Z)(
                        (0, X.Z)({}, e),
                        {},
                        {
                          selectedGood: [],
                          tipText: "",
                          passengerList: t.payload,
                          goodsList: s,
                        }
                      )
                    : (0, X.Z)(
                        (0, X.Z)({}, e),
                        {},
                        {
                          selectedGood: [],
                          tipText: "",
                          passengerList: t.payload,
                        }
                      );
                case "updateSelectedGood":
                  if (
                    0 ===
                    e.passengerList.filter(function (e) {
                      return null == e ? void 0 : e.isSelected;
                    }).length
                  )
                    return (
                      b().showToast({
                        title: "请先选择乘客后再操作",
                        icon: "none",
                      }),
                      e
                    );
                  var f,
                    m,
                    h,
                    y,
                    w = "";
                  if (
                    t.payload.length > 0 &&
                    [58, 59].includes(
                      null !==
                        (i =
                          null === (n = t.payload[0]) || void 0 === n
                            ? void 0
                            : n.productType) && void 0 !== i
                        ? i
                        : 0
                    )
                  )
                    w =
                      null !==
                        (f =
                          null === (m = t.payload[0]) ||
                          void 0 === m ||
                          null === (h = m.seatInfoList) ||
                          void 0 === h ||
                          null === (y = h[0]) ||
                          void 0 === y
                            ? void 0
                            : y.tips) && void 0 !== f
                        ? f
                        : "";
                  else if (
                    t.payload.length > 0 &&
                    [53, 54, 55].includes(
                      null === (r = t.payload[0]) || void 0 === r
                        ? void 0
                        : r.productType
                    )
                  ) {
                    var T = "";
                    !w &&
                      e.passengerList.forEach(function (e) {
                        if (e.isSelected && t.payload.length > 0) {
                          if (
                            (16 === e.seatBizType &&
                              [54, 55].includes(t.payload[0].productType)) ||
                            (32 === e.seatBizType &&
                              [55].includes(t.payload[0].productType))
                          ) {
                            var i =
                              "改签高价车票需先支付新票票价，成功将退回原车票票价，若失败将退还支付金额；智行不收取换座费用。";
                            T = T === i ? i : T + i;
                          }
                          if (
                            (64 === e.seatBizType &&
                              [53, 54].includes(t.payload[0].productType)) ||
                            (32 === e.seatBizType &&
                              [53].includes(t.payload[0].productType))
                          ) {
                            var n =
                              "高价改低价车票，退还差额，车票差额将按退票规则收取手续费；智行不收取换座费用。";
                            T = T === n ? T : T + n;
                          }
                        }
                      }),
                      (w = "铁路局规定: ".concat(T));
                  } else 0 === t.payload.length && (w = "");
                  return (0, X.Z)(
                    (0, X.Z)({}, e),
                    {},
                    { selectedGood: t.payload, tipText: w }
                  );
              }
            },
            pe = {
              selectedGood: [],
              passengerList: [],
              goodsList: [],
              notes: [],
              tipText: "",
            },
            ge = function (e) {
              var t = e.onClose,
                i = e.orderNumber,
                n = e.tupOrderList,
                r = e.page,
                o = (0, E.c)(t),
                c = o.modalRef,
                l = o.modalClose,
                d = (0, f.useReducer)(ue, pe),
                u = (0, V.Z)(d, 2),
                p = u[0],
                g = u[1];
              (0, f.useEffect)(
                function () {
                  (function () {
                    var e = (0, s.Z)(
                      (0, a.Z)().mark(function e() {
                        var t, n, o, s;
                        return (0, a.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  (0, G.Wu)({ orderNumber: i, version: 3 })
                                );
                              case 2:
                                1 === (t = e.sent).resultCode &&
                                  ((s =
                                    1 === t.passengerList.length
                                      ? [
                                          (0, X.Z)(
                                            (0, X.Z)({}, t.passengerList[0]),
                                            {},
                                            { isSelected: !0 }
                                          ),
                                        ]
                                      : null == t ||
                                        null === (n = t.passengerList) ||
                                        void 0 === n ||
                                        null === (o = n.map) ||
                                        void 0 === o
                                      ? void 0
                                      : o.call(n, function (e) {
                                          return (0,
                                          X.Z)((0, X.Z)({}, e), {}, { isSelected: !1 });
                                        })),
                                  r.ubtTrace(
                                    "TZATtkUpdate_ChangeSeatActionbar_exposure",
                                    {
                                      PageId: r.pageId,
                                      fromSource: r.fromPage,
                                      PassengerNumber: s.length,
                                    }
                                  ),
                                  g({
                                    type: "customUpdate",
                                    payload: {
                                      passengerList: s || [],
                                      notes: t.notes,
                                      goodsList: t.goodsList,
                                    },
                                  }));
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()();
                },
                [i]
              );
              var m = n.filter(function (e) {
                  return e.orderNumber === i;
                }),
                h = (function () {
                  var e = (0, s.Z)(
                    (0, a.Z)().mark(function e() {
                      var t, n, o, s, c, d, u, g, f;
                      return (0, a.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (0 !== p.selectedGood.length) {
                                e.next = 4;
                                break;
                              }
                              b().showToast({
                                title: "请先选择一个产品",
                                icon: "none",
                              }),
                                (e.next = 27);
                              break;
                            case 4:
                              return (
                                (n = p.selectedGood[0].productType),
                                (o = p.selectedGood[0].productPrice),
                                (s = p.selectedGood[0].payPrice),
                                (c = (
                                  [50, 56].includes(n)
                                    ? p.selectedGood[0].seatInfoList.filter(
                                        function (e) {
                                          return !(null == e || !e.isSelected);
                                        }
                                      )
                                    : p.selectedGood[0].seatInfoList
                                ).map(function (e) {
                                  return null == e ? void 0 : e.seatName;
                                })),
                                (d = p.passengerList
                                  .filter(function (e) {
                                    return e.isSelected;
                                  })
                                  .map(function (e) {
                                    return null == e ? void 0 : e.passengerId;
                                  })),
                                (u = {
                                  type: 9,
                                  appointType: n,
                                  appointSeat: c.toString(),
                                  orderNumber: i,
                                  seatList: [58, 59].includes(n)
                                    ? c
                                    : [p.passengerList[0].seatName],
                                  trainNumList: [
                                    null == m ||
                                    null === (t = m[0]) ||
                                    void 0 === t
                                      ? void 0
                                      : t.trainNumber,
                                  ],
                                  speedNum: s,
                                  virtualSpeedNum: o,
                                  arrivalStation: m[0].arriveStation,
                                  departStation: m[0].departStation,
                                  fromPage: r.fromPage,
                                  selectedPsgIds: d,
                                  tupVersion: 3,
                                }),
                                r.ubtTrace(
                                  "TZATtkUpdate_ChangeSeat_ConfirmFreeChange_click",
                                  {
                                    PageId: r.pageId,
                                    fromSource: r.fromPage,
                                    Num: d.length,
                                    PassengerNumber: p.passengerList.length,
                                    Type: n,
                                  }
                                ),
                                (e.next = 13),
                                (0, G.qH)(u)
                              );
                            case 13:
                              if (
                                1 !==
                                (null == (g = e.sent) ? void 0 : g.resultCode)
                              ) {
                                e.next = 26;
                                break;
                              }
                              if ((l(), !g.isNeedPay)) {
                                e.next = 23;
                                break;
                              }
                              return (
                                (e.next = 19),
                                (0, G.YN)({ orderNumber: g.payOrderNumber })
                              );
                            case 19:
                              1 === (f = e.sent).resultCode &&
                                (0, Z.ce)(
                                  {
                                    goodsId: f.paymentID,
                                    orderNumber: g.payOrderNumber,
                                    business: "train",
                                  },
                                  function () {
                                    (0, Z.NU)(
                                      g.orderNumber,
                                      null == r ? void 0 : r.fromPage
                                    );
                                  }
                                ),
                                (e.next = 24);
                              break;
                            case 23:
                              (0, Z.NU)(
                                g.orderNumber,
                                null == r ? void 0 : r.fromPage
                              );
                            case 24:
                              e.next = 27;
                              break;
                            case 26:
                              b().showToast({
                                title:
                                  (null == g ? void 0 : g.resultMessage) ||
                                  "确认改签下单失败，请稍后重试",
                                icon: "none",
                              });
                            case 27:
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
                w = (0, L.BX)(L.HY, {
                  children: [
                    (0, L.tZ)(y.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_sjcp_tc_BG.png",
                      style: fe.bgImage,
                    }),
                    (0, L.tZ)(y.Image, {
                      mode: "heightFix",
                      src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_zbt_x.png",
                      style: fe.titleImage,
                    }),
                    (0, L.tZ)(y.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_close_circle_black.png",
                      id: "AMDt",
                      onClick: function () {
                        return l();
                      },
                      style: fe.close,
                    }),
                    (0, L.tZ)(y.ScrollView, {
                      catchMove: !0,
                      scrollY: !0,
                      style: { flex: 1, overflow: "scroll" },
                      children: (0, L.BX)(y.View, {
                        style: { flex: 1 },
                        children: [
                          (0, L.tZ)(z, {
                            ticketInfo: m[0],
                            proPassengerList: p.passengerList,
                            dispatch: g,
                          }),
                          p.goodsList.map(function (e) {
                            var t, i, n, a;
                            return 50 ===
                              (null == e ||
                              null === (t = e.productList) ||
                              void 0 === t ||
                              null === (i = t[0]) ||
                              void 0 === i
                                ? void 0
                                : i.productType)
                              ? (0, L.tZ)(y.View, {
                                  children: (0, L.tZ)(te, {
                                    data: e,
                                    dispatch: g,
                                    selectedGood: p.selectedGood,
                                  }),
                                })
                              : [1, 2].includes(e.goodsType)
                              ? (0, L.tZ)(y.View, {
                                  children: (0, L.tZ)(ee, {
                                    data: e,
                                    dispatch: g,
                                    selectedGood: p.selectedGood,
                                    passengerList: p.passengerList,
                                  }),
                                })
                              : 3 === e.goodsType
                              ? 56 ===
                                  (null === (n = p.selectedGood) ||
                                  void 0 === n ||
                                  null === (a = n[0]) ||
                                  void 0 === a
                                    ? void 0
                                    : a.productType) ||
                                0 === p.selectedGood.length
                                ? (0, L.tZ)(J, {
                                    data: e,
                                    selectedGood: p.selectedGood,
                                    passengerList: p.passengerList,
                                    page: r,
                                    dispatch: g,
                                  })
                                : (0, L.tZ)(W, {
                                    title: null == e ? void 0 : e.goodsName,
                                  })
                              : [5, 6].includes(e.goodsType)
                              ? (0, L.tZ)(y.View, {
                                  children: (0, L.tZ)(q, {
                                    data: e,
                                    dispatch: g,
                                    selectedGood: p.selectedGood,
                                    page: r,
                                  }),
                                })
                              : null;
                          }),
                          (0, L.tZ)(y.View, {
                            style: fe.tips,
                            children: p.notes.map(function (e, t, i) {
                              return (0,
                              L.BX)(y.View, { style: fe.tip, children: [(0, L.tZ)(y.View, { style: fe.dot }), (0, L.BX)(y.Text, { style: fe.infoDesc, children: [e, t === i.length - 1 && (0, L.tZ)(y.Text, { style: { color: "#198cff" }, id: "AMDr", onClick: de, children: "查看规则" })] })] }, e);
                            }),
                          }),
                          (0, L.tZ)(y.View, {
                            style: { height: p.tipText ? 170 : 110 },
                          }),
                        ],
                      }),
                    }),
                    (0, L.BX)(y.View, {
                      className: "bottom-view",
                      children: [
                        !!p.tipText &&
                          (0, L.tZ)(y.View, {
                            className: "bottom-tip-view",
                            children: (0, L.tZ)(y.Text, {
                              className: "bottom-tip-text",
                              children: p.tipText,
                            }),
                          }),
                        (0, L.tZ)(y.View, {
                          className: "btn-group",
                          children: (0, L.tZ)(y.View, {
                            style: fe.btnView,
                            id: "AMDu",
                            onClick: function () {
                              h();
                            },
                            children: (0, L.tZ)(y.Text, {
                              style: fe.btnText,
                              children: "确认免费换座",
                            }),
                          }),
                        }),
                        (0, L.tZ)(U.Z, { backgroundColor: "#ffffff" }),
                      ],
                    }),
                  ],
                });
              return p.goodsList.length < 1
                ? null
                : (0, L.tZ)(j.Z, {
                    ref: c,
                    onCancel: function () {
                      return l();
                    },
                    isShowIphoneXAdapter: !1,
                    bottomH: 0,
                    innerContainerStyle: {
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      backgroundColor: "#f5f5f5",
                      maxHeight: 0.8 * le - 42,
                    },
                    children: w,
                  });
            },
            fe = (0, v.lW)({
              container: {
                display: "flex",
                flexDirection: "column",
                height: "100%",
              },
              bgImage: {
                height: 160,
                position: "absolute",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                width: "100%",
                zIndex: -1,
              },
              titleImage: {
                width: 166,
                height: 23,
                marginTop: 19,
                alignSelf: "center",
                marginBottom: 22,
              },
              close: {
                position: "absolute",
                right: 16,
                top: 16,
                width: 24,
                height: 24,
              },
              infoContainer: {
                marginTop: 22,
                marginLeft: 8,
                marginRight: 8,
                borderRadius: 12,
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              },
              infoTitle: {
                color: "#222222",
                fontSize: 16,
                fontFamily: "PingFangSC-Medium",
                fontWeight: "500",
              },
              infoDescView: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 4,
              },
              infoDesc: {
                color: "#999999",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
              },
              interval: {
                display: "flex",
                width: 1,
                height: 12,
                backgroundColor: "rgba(0, 0, 0, 0.16)",
                borderRadius: 0.5,
                marginLeft: 8,
                marginRight: 8,
              },
              passengerInfoRow: { display: "flex", flexDirection: "row" },
              passengerInfo: {
                backgroundColor: "#f7f7f7",
                borderRadius: 8,
                margin: 12,
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 10,
                paddingRight: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexGrow: 1,
              },
              passengerText: {
                color: "#333333",
                fontSize: 14,
                fontFamily: "PingFangSC-Medium",
                fontWeight: "500",
              },
              tagView: {
                width: 24,
                height: 15,
                borderWidth: 0.5,
                borderColor: "#b4b4b4",
                borderRadius: 4,
                borderStyle: "solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 4,
              },
              tag: {
                color: "#999999",
                fontSize: 9,
                fontFamily: "PingFangSC-Regular",
              },
              seatType: {
                color: "#666666",
                fontSize: 14,
                fontFamily: "PingFangSC-Regular",
                marginRight: 4,
              },
              specifySeat: {
                backgroundColor: "#fff",
                borderRadius: 12,
                marginTop: 8,
                marginLeft: 8,
                marginRight: 8,
                padding: 16,
                paddingBottom: 12,
              },
              descView: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
              },
              priceDesc: { display: "flex", flexDirection: "row" },
              btnGroup: {
                left: 0,
                right: 0,
                display: "flex",
                flexDirection: "row",
                padding: 8,
                backgroundColor: "#fff",
                position: "absolute",
                bottom: 0,
              },
              btnView: {
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
                height: 44,
                backgroundColor: "#198cff",
                borderRadius: 12,
              },
              btnText: {
                color: "#ffffff",
                fontSize: 17,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
              },
              seatGroup: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 12,
              },
              seatBtnView: {
                position: "relative",
                backgroundColor: "#f7f7f7",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                height: 44,
                borderWidth: 1,
                display: "flex",
                flexDirection: "column",
                borderStyle: "solid",
                flex: 1,
              },
              tips: {
                display: "flex",
                flexDirection: "column",
                marginTop: 8,
                alignSelf: "flex-start",
                marginLeft: 16,
                marginRight: 16,
              },
              tip: { display: "flex", flexDirection: "row", marginTop: 4 },
              dot: {
                width: 4,
                height: 4,
                backgroundColor: "#d8d8d8",
                borderRadius: 2,
                marginTop: 7,
                marginRight: 6,
              },
              imgTag: {
                width: 14,
                height: 14,
                position: "absolute",
                right: -1,
                bottom: -1,
              },
              currentSeat: {
                color: "#333333",
                fontSize: 10,
                fontFamily: "PingFangSC-Regular",
                marginTop: -2,
              },
              linear: {
                display: "flex",
                width: 16,
                height: 32,
                marginBottom: 2,
                justifyContent: "center",
                alignItems: "center",
              },
              seatIconView: {
                display: "flex",
                width: 36,
                height: 44,
                alignItems: "center",
                justifyContent: "center",
              },
              seatIcon: { width: 36, height: 44, position: "absolute" },
              seatName: {
                color: "#82868F",
                fontSize: 11,
                marginTop: 4,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                zIndex: 99,
              },
              tagText: {
                textAlign: "center",
                color: "#999999",
                fontSize: 10,
                fontFamily: "PingFangSC-Regular",
              },
            }),
            me = i(82750),
            he = i(10655),
            ye = i(19972),
            we = i(1841),
            be = function (e) {
              var t = e.onClose,
                i = e.data,
                n = e.page,
                r = i.title,
                a = i.note,
                o = i.btnTxt,
                s = i.btnTag,
                c = i.jumpUrl,
                l = (0, E.c)(t),
                d = l.modalRef,
                u = l.modalClose;
              (0, f.useEffect)(function () {
                n.ubtTrace("TZATtkUpdate_ShareXhs_exposure", {
                  PageId: n.pageId,
                });
              }, []);
              var p = function () {
                n.ubtTrace("TZATtkUpdate_ShareXhs_Close_click", {
                  PageId: n.pageId,
                }),
                  u();
              };
              return (0, L.BX)(j.Z, {
                ref: d,
                onCancel: function () {
                  return p();
                },
                isShowIphoneXAdapter: !1,
                innerContainerStyle: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: "#ffffff",
                },
                children: [
                  (0, L.tZ)(function () {
                    return (0, L.BX)(y.View, {
                      className: "retain-container",
                      children: [
                        (0, L.tZ)(y.View, {
                          className: "success-lottie-view",
                          children: (0, L.tZ)(x.Z, {
                            loop: !1,
                            defaultImg:
                              "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_sjcg_tc_cc.gif",
                            style: { width: "100%", height: 160 },
                            source:
                              "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/cpdx.json",
                          }),
                        }),
                        (0, L.tZ)(y.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/list/baby/icon_qinzi_bg@3x.png",
                          className: "bg-img",
                        }),
                        (0, L.tZ)(y.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_sjcg_tc.png",
                          className: "success-icon",
                        }),
                        (0, L.tZ)(y.View, {
                          onClick: function () {
                            return p();
                          },
                          className: "close-icon-view",
                          children: (0, L.tZ)(y.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_close_circle_black.png",
                            className: "close-icon",
                          }),
                        }),
                        (0, L.tZ)(y.Text, {
                          className: "success-title",
                          children: r,
                        }),
                        (0, L.tZ)(we.Z, {
                          style: {
                            color: "#666666",
                            fontSize: 14,
                            fontFamily: "PingFangSC-Regular",
                            marginTop: 12,
                            textAlign: "center",
                            marginLeft: 20,
                            marginRight: 20,
                          },
                          children: "<p style='text-align:center'>".concat(
                            a,
                            "</p>"
                          ),
                        }),
                        (0, L.tZ)(y.View, {
                          className: "btn-view-wrap",
                          children: (0, L.BX)(y.View, {
                            className: "btn-view",
                            onClick: function () {
                              n.ubtTrace(
                                "TZATtkUpdate_ShareXhs_ShareButton_click",
                                { PageId: n.pageId }
                              ),
                                (0, Z.jn)(c),
                                u();
                            },
                            children: [
                              (0, L.tZ)(y.Text, {
                                className: "btn-text",
                                children: o,
                              }),
                              (0, L.BX)(y.View, {
                                className: "btn-tag-view",
                                children: [
                                  (0, L.tZ)(y.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_bq_ysjb.png",
                                    className: "btn-tag-img",
                                  }),
                                  (0, L.tZ)(y.Text, {
                                    className: "tag-text",
                                    children: s,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    });
                  }, {}),
                  (0, L.tZ)(U.Z, { backgroundColor: "#ffffff" }),
                ],
              });
            },
            Te = function (e) {
              var t = e.onClose,
                i = (0, E.c)(t),
                n = i.modalRef,
                r = i.modalClose;
              return (0, L.BX)(j.Z, {
                ref: n,
                onCancel: function () {
                  return r();
                },
                isShowIphoneXAdapter: !1,
                innerContainerStyle: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: "#ffffff",
                },
                children: [
                  (0, L.tZ)(function () {
                    return (0, L.BX)(y.View, {
                      className: "retain-container",
                      children: [
                        (0, L.tZ)(y.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/list/baby/icon_qinzi_bg@3x.png",
                          className: "bg-img",
                        }),
                        (0, L.tZ)(y.Image, {
                          src: I.Z.isCRN
                            ? "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_wltc1.webp"
                            : "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_wltc1_xcx.webp",
                          className: "big-img",
                        }),
                        (0, L.tZ)(y.Text, {
                          className: "success-title",
                          children: "点击首页入口",
                        }),
                        (0, L.tZ)(we.Z, {
                          style: {
                            color: "#666666",
                            fontSize: 14,
                            fontFamily: "PingFangSC-Regular",
                            marginTop: 12,
                          },
                          children:
                            "全平台火车订单都可为你<font color='#198cff'>免费换座</font>",
                        }),
                        (0, L.BX)(y.View, {
                          className: "btn-group-view",
                          children: [
                            (0, L.tZ)(y.View, {
                              className: "left-btn-view flex-center",
                              onClick: function () {
                                r();
                              },
                              children: (0, L.tZ)(y.Text, {
                                className: "left-btn-text",
                                children: "暂不离开",
                              }),
                            }),
                            (0, L.tZ)(y.View, {
                              className: "right-btn-view flex-center",
                              onClick: function () {
                                r(), (0, w.navigateBack)({ delta: 1 });
                              },
                              children: (0, L.tZ)(y.Text, {
                                className: "right-btn-text",
                                children: "确定离开",
                              }),
                            }),
                          ],
                        }),
                      ],
                    });
                  }, {}),
                  (0, L.tZ)(U.Z, { backgroundColor: "#ffffff" }),
                ],
              });
            },
            xe = i(21294),
            Ze = function (e) {
              var t,
                i = e.page,
                n = e.data,
                r = e.onCloseDrawer,
                a = e.onShare,
                o = e.doAssist,
                s = (0, E.c)(r),
                c = s.modalRef,
                l = s.modalClose,
                d = function (e) {
                  try {
                    var t,
                      r = "";
                    switch (null == n ? void 0 : n.functionType) {
                      case 0:
                      case 1:
                        r = "发起者";
                        break;
                      case 2:
                      case 3:
                        r = "助力者";
                    }
                    null == i ||
                      null === (t = i.ubtTrace) ||
                      void 0 === t ||
                      t.call(i, e, {
                        PageId: null == i ? void 0 : i.pageId,
                        Type: r,
                      });
                  } catch (e) {
                    console.log("ubtTrace error", e);
                  }
                };
              if (
                ((0, f.useEffect)(
                  function () {
                    n &&
                      (d("TZATktUpdateDetail_ZhuliPopup_exposure"),
                      n.remark &&
                        setTimeout(function () {
                          b().showToast({
                            title: n.help ? "已助力" : n.remark,
                            icon: "none",
                            duration: 2e3,
                          });
                        }, 500));
                  },
                  [n]
                ),
                !n)
              )
                return (0, L.tZ)(L.HY, {});
              var u = n.toastName,
                p = n.productIcon,
                g = n.productTitle,
                m = n.productSubTitle,
                h = n.items,
                w = n.rules,
                T = n.functionType,
                x = n.buttonName,
                Z = n.acclerateRecord,
                _ = n.jumpUrl,
                S = n.grabAppId,
                v = Z || [],
                C = 3 - v.length;
              C > 0 && (v = v.concat(new Array(C).fill({})));
              var N = function (e) {
                var t = "";
                switch (e) {
                  case 0:
                    t = " _p _dz";
                    break;
                  case 1:
                    t = " _p _in _ez";
                    break;
                  case 2:
                    t = " _p _kc _ez";
                }
                return t;
              };
              return (0, L.tZ)(j.Z, {
                ref: c,
                innerContainerStyle: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: "#f5f5f5",
                },
                children: (0, L.BX)(y.View, {
                  className: " _p _bz",
                  children: [
                    (0, L.tZ)(P.Z, {
                      start: { x: 0, y: 0 },
                      end: { x: 0, y: 1 },
                      colors: ["#B3D2FF", "#F5F5F5"],
                      locations: [0, 1],
                      style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 160,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                    }),
                    (0, L.tZ)(y.View, {
                      className: " _u _xr _qk _in",
                      id: "utFAClose",
                      onClick: l,
                      children: (0, L.tZ)(k.Z, {
                        style: { fontSize: 24, color: "#999" },
                        children: "󰳭",
                      }),
                    }),
                    (0, L.BX)(y.View, {
                      className: " _p _kc",
                      children: [
                        (0, L.tZ)(y.View, {
                          className: " _i _l _n",
                          children: (0, L.tZ)(y.Image, {
                            className: " _cz _bc",
                            src: u,
                          }),
                        }),
                        (0, L.BX)(y.View, {
                          className: " _cd _a _Oa _Uf",
                          children: [
                            (0, L.BX)(y.View, {
                              className: " _i _Ga _m _l",
                              children: [
                                (0, L.tZ)(y.Image, {
                                  className: " _Tu _Ae",
                                  src: p,
                                }),
                                (0, L.BX)(y.View, {
                                  className: " _j _vp",
                                  children: [
                                    (0, L.tZ)(we.Z, {
                                      className: " _Qj _Xb _Nc",
                                      children: g,
                                    }),
                                    (0, L.tZ)(y.View, {
                                      className: " _Ma _no _Q _Ac",
                                      children: m,
                                    }),
                                  ],
                                }),
                                (0, L.tZ)(y.View, {
                                  className: " _i _Ga",
                                  children:
                                    null === (t = v) || void 0 === t
                                      ? void 0
                                      : t.map(function (e, t) {
                                          return (0,
                                          L.tZ)(y.Image, { className: "".concat(" _Tk _mb _Xa", " ").concat(N(t)), src: (null == e ? void 0 : e.wechatPhoto) || "https://images3.c-ctrip.com/ztrip/train_xie/2023/08/icon_ZXHZ_yq.png" }, t);
                                        }),
                                }),
                              ],
                            }),
                            (0, L.tZ)(y.View, {
                              className: " _Yq _Kq _fz _gz",
                            }),
                            (0, L.tZ)(y.View, {
                              className: " _i _Ga _m _l _ls",
                              children:
                                null == h
                                  ? void 0
                                  : h.map(function (e, t) {
                                      return (0,
                                      L.BX)(y.View, { className: " _i _k _l", children: [(0, L.tZ)(y.Image, { className: " _bi _lc", src: e.icon }), (0, L.tZ)(y.View, { className: " _U _Xb _bp _Xk", children: e.title }), (0, L.tZ)(y.View, { className: " _R _Ma _no _Ac", children: e.desc })] }, t);
                                    }),
                            }),
                          ],
                        }),
                        (0, L.tZ)(y.View, {
                          className: " _hz",
                          children:
                            null == w
                              ? void 0
                              : w.map(function (e, t) {
                                  return (0,
                                  L.BX)(y.View, { className: " _i _Ga _l", children: [(0, L.tZ)(y.View, { className: " _Ja _Ia _Kq _lj _iz" }), (0, L.tZ)(y.View, { className: " _R _Ma _no", children: e })] }, t);
                                }),
                        }),
                        (0, L.BX)(y.View, {
                          className: " _Vb _Wb _jl",
                          children: [
                            0 === T &&
                              (0, L.tZ)(y.Button, {
                                className: " _Gc _i _l _n _w _Oa",
                                id: "utShareBtnClick",
                                openType: "share",
                                "data-name": "inviteAssist",
                                onClick: function () {
                                  d("TZATktUpdateDetail_ZhuliPopup_click"),
                                    l(),
                                    a({
                                      title: "",
                                      desc: "",
                                      link: I.Z.isTieyou
                                        ? "http://m.tieyou.com/ark.html"
                                        : "http://m.suanya.com/",
                                      iconUrl: I.Z.isTieyou
                                        ? "https://images3.c-ctrip.com/ztrip/train_xie/2023/08/img_ZXHZ_fx_ty.png"
                                        : "https://images3.c-ctrip.com/ztrip/train_xie/2023/08/img_ZXHZ_yq_fxkp.png",
                                      wxMinPath: _,
                                      wxAppId: I.Z.isTieyou
                                        ? "gh_c4a2a98a7366"
                                        : S,
                                      showThirdPartyDialog: !0,
                                    });
                                },
                                children: (0, L.tZ)(y.Text, {
                                  className: " _Wc _Uc _qb _V",
                                  children: x,
                                }),
                              }),
                            2 === T &&
                              (0, L.tZ)(y.Button, {
                                className: " _Gc _i _l _n _w _Oa",
                                id: "utAssistBtnClick",
                                onClick: function () {
                                  d("TZATktUpdateDetail_ZhuliPopup_click"),
                                    l(),
                                    o();
                                },
                                children: (0, L.tZ)(y.Text, {
                                  className: " _Wc _Uc _qb _V",
                                  children: x,
                                }),
                              }),
                            [1, 3].includes(T) &&
                              (0, L.tZ)(y.Button, {
                                className: " _Gc _i _l _n _w _Oa",
                                id: "utOtherBtnClick",
                                onClick: function () {
                                  d("TZATktUpdateDetail_ZhuliPopup_click"), l();
                                },
                                children: (0, L.tZ)(y.Text, {
                                  className: " _Wc _Uc _qb _V",
                                  children: x,
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            },
            _e =
              (0, C.h)()(
                ($ = (function (e) {
                  (0, u.Z)(i, e);
                  var t = (0, p.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, c.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, g.Z)((0, d.Z)(n), "picArr", [
                        {
                          imgUrl:
                            "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_tt1.webp",
                          title: "换座位",
                          desc: "有座/靠窗/过道",
                        },
                        {
                          imgUrl:
                            "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_tt2.webp",
                          title: "换铺位",
                          desc: "上/中/下铺",
                        },
                        {
                          imgUrl:
                            "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_tt3.webp",
                          title: "换车厢",
                          desc: "餐车/静音",
                        },
                        {
                          imgUrl:
                            "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_tt4.webp",
                          title: "换连座",
                          desc: "多人同行坐一起",
                        },
                      ]),
                      (0, g.Z)((0, d.Z)(n), "fromPage", ""),
                      (0, g.Z)(
                        (0, d.Z)(n),
                        "pageId",
                        I.Z.isCRN ? "10650096356" : "10650096364"
                      ),
                      (n.state = {
                        isShowLayer: !1,
                        isAuthorize: !1,
                        userId12306: "",
                        clickOrderNumber: "",
                        tupOrderList: [],
                        tupSuToast: null,
                        showTupToast: 2,
                        retainStatus: 0,
                        freeModel: 0,
                        mobile: void 0,
                        isNeedShowAssistDrawer: !1,
                        assistDrawerData: null,
                      }),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, i, n, r, s, c, l, d, u, p, g, f, m, y, T;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i = (0, w.getCurrentInstance)()),
                                          (n =
                                            (null == i ||
                                            null === (t = i.router) ||
                                            void 0 === t
                                              ? void 0
                                              : t.params) || {}),
                                          (r = n.oid),
                                          (s = n.fromPage),
                                          (this.fromPage = s || ""),
                                          (c = "未登录状态"),
                                          (e.next = 6),
                                          (0, me.q0)()
                                        );
                                      case 6:
                                        return (
                                          (l = e.sent),
                                          (d = l.userName),
                                          (u = l.t6Mobile),
                                          this.setState({
                                            mobile: u || d,
                                            isAuthorize: !!d,
                                            isNeedShowAssistDrawer:
                                              "friendShareWX" === s,
                                          }),
                                          (e.next = 12),
                                          (0, G.uE)({ version: 3 })
                                        );
                                      case 12:
                                        1 === (p = e.sent).resultCode &&
                                          (d &&
                                            ((c =
                                              (null == p
                                                ? void 0
                                                : p.orderList.length) > 0
                                                ? "登录有订单"
                                                : "登录无订单"),
                                            this.setState({
                                              userId12306: p.userId12306,
                                              freeModel:
                                                null !==
                                                  (g =
                                                    null == p
                                                      ? void 0
                                                      : p.freeModel) &&
                                                void 0 !== g
                                                  ? g
                                                  : 0,
                                            })),
                                          this.setState({
                                            tupOrderList: [].concat(
                                              (0, o.Z)(p.orderList),
                                              (0, o.Z)(p.unOrderList || [])
                                            ),
                                            tupSuToast:
                                              null == p ? void 0 : p.tupSuToast,
                                          }),
                                          (f = p.orderList.filter(function (e) {
                                            return (
                                              (null == e
                                                ? void 0
                                                : e.orderNumber) === r
                                            );
                                          })),
                                          r &&
                                            d &&
                                            1 === f.length &&
                                            this.setState({
                                              isShowLayer:
                                                "friendShareWX" !== s,
                                              clickOrderNumber: r,
                                            })),
                                          this.ubtTrace(
                                            "TZATtkUpdate_exposure",
                                            {
                                              PageId: this.pageId,
                                              Type: c,
                                              fromSource: this.fromPage,
                                            }
                                          ),
                                          (m =
                                            b().getStorageSync("closeDate_7")),
                                          (y =
                                            b().getStorageSync("tupSuToast_7")),
                                          "string" == typeof m && m
                                            ? ((T = h()().diff(h()(m), "day")),
                                              console.log(T),
                                              0 == T
                                                ? this.setState({
                                                    showTupToast: 2,
                                                  })
                                                : this.setState({
                                                    showTupToast: 1,
                                                  }))
                                            : "Shown" !== y
                                            ? this.setState({ showTupToast: 0 })
                                            : this.setState({
                                                showTupToast: 1,
                                              });
                                      case 18:
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
                        key: "componentDidShow",
                        value: function () {
                          this.getProductList(), this.getTrainCross();
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "pageDidAppear",
                        value: function () {
                          this.getProductList();
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function (e) {
                          var t;
                          if (
                            "inviteAssist" ===
                            (
                              (null == e ||
                              null === (t = e.target) ||
                              void 0 === t
                                ? void 0
                                : t.dataset) || {}
                            ).name
                          ) {
                            var i = this.state.assistDrawerData;
                            return {
                              title: "",
                              path: null == i ? void 0 : i.jumpUrl,
                              imageUrl: I.Z.isTieyou
                                ? "https://images3.c-ctrip.com/ztrip/train_xie/2023/08/img_ZXHZ_fx_ty.png"
                                : "https://images3.c-ctrip.com/ztrip/train_xie/2023/08/img_ZXHZ_yq_fxkp.png",
                            };
                          }
                          return {
                            title: "",
                            path: "/pages/taroCRN/train/pages/UpgradeTicket/index",
                            imageUrl:
                              "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_fxwx.png",
                          };
                        },
                      },
                      {
                        key: "getProductList",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, i;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          (0, G.uE)({ version: 3 })
                                        );
                                      case 2:
                                        1 === (t = e.sent).resultCode &&
                                          (t.isAuthorize
                                            ? this.setState({
                                                userId12306: t.userId12306,
                                                freeModel:
                                                  null !==
                                                    (i =
                                                      null == t
                                                        ? void 0
                                                        : t.freeModel) &&
                                                  void 0 !== i
                                                    ? i
                                                    : 0,
                                              })
                                            : this.setState({
                                                userId12306: "",
                                              }),
                                          console.log(
                                            [].concat(
                                              (0, o.Z)(t.orderList),
                                              (0, o.Z)(t.unOrderList || [])
                                            )
                                          ),
                                          this.setState({
                                            tupOrderList: [].concat(
                                              (0, o.Z)(t.orderList),
                                              (0, o.Z)(t.unOrderList || [])
                                            ),
                                            tupSuToast:
                                              null == t ? void 0 : t.tupSuToast,
                                          }));
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
                        key: "getTrainCross",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, i, n, r, o, s, c, l, d, u, p, g, f;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (n = new _.Z({
                                            fromPage: _.E.tupOrderList,
                                          })),
                                          (r =
                                            (null ===
                                              (t = (0,
                                              w.getCurrentInstance)()) ||
                                            void 0 === t ||
                                            null === (i = t.router) ||
                                            void 0 === i
                                              ? void 0
                                              : i.params) || {}),
                                          (o = r.oid),
                                          (s = r.rescheduleOid),
                                          (c = {
                                            orderNumber: s,
                                            originOrderNumber: o,
                                            fromSource: 12,
                                          }),
                                          (e.next = 6),
                                          (0, G.$q)(c)
                                        );
                                      case 6:
                                        1 === (l = e.sent).resultCode &&
                                          ((u = l.notices),
                                          (p = l.areas),
                                          (g = l.toasts),
                                          n.initData({
                                            notices: u,
                                            areas: p,
                                            toasts: g,
                                          }),
                                          (f =
                                            null ===
                                              (d = n.getToastByCode(
                                                "TicketUpgradeListToast"
                                              )) || void 0 === d
                                              ? void 0
                                              : d._jsonInfo),
                                          this.setState({
                                            assistDrawerData: f,
                                          })),
                                          (e.next = 13);
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(0)),
                                          console.log(
                                            "get train cross failed: ",
                                            e.t0
                                          );
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 10]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "doAssistAction",
                        value: function () {
                          var e = this,
                            t = this.state.assistDrawerData,
                            i = {
                              shareKey: null == t ? void 0 : t.shareKey,
                              reqTime: "" + new Date().getTime(),
                              openId: S.Z.openid,
                              accelerateUserInfo: {
                                openId: S.Z.openid,
                                wechatNickName: S.Z.nickName
                                  ? encodeURIComponent(S.Z.nickName)
                                  : "神秘用户",
                                wechatPhoto:
                                  S.Z.avatarUrl ||
                                  "https://youimg1.c-ctrip.com/target/10090v000000k3bfv65E1_R_640_10000_Q90.jpg",
                              },
                              accelerateScene: 605,
                              accelerateSource: 0,
                              accelerateGroupId: "",
                            };
                          (i.sign =
                            (function (e) {
                              var t = e.shareKey,
                                i = void 0 === t ? "" : t,
                                n = e.reqTime,
                                r = void 0 === n ? "" : n,
                                a = e.openId,
                                o = void 0 === a ? "" : a,
                                s = e.accPackageId,
                                c = void 0 === s ? "" : s,
                                l = ""
                                  .concat(i)
                                  .concat(r)
                                  .concat(o)
                                  .concat(c, "7Ki9Xtdz2wyZKfoW");
                              return xe.Z.MD5(l).toString();
                            })(i) || ""),
                            (0, G.rr)(i)
                              .then(function (t) {
                                1 === t.resultCode &&
                                  (b().showToast({
                                    title: "助力成功",
                                    icon: "none",
                                    duration: 2e3,
                                  }),
                                  e.getProductList());
                              })
                              .catch(function () {
                                b().showToast({
                                  title: "助力失败",
                                  icon: "none",
                                  duration: 2e3,
                                });
                              });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = (function () {
                              var t = (0, s.Z)(
                                (0, a.Z)().mark(function t() {
                                  var i, n, r, o, s;
                                  return (0, a.Z)().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            (t.next = 2),
                                            (0, Z.o$)({
                                              title: "登录12306账号导入订单",
                                              subTitle:
                                                "铁路局规定购票需实名制",
                                              extraTip: "",
                                            })
                                          );
                                        case 2:
                                          return (t.next = 4), (0, me.q0)();
                                        case 4:
                                          return (
                                            (i = t.sent),
                                            (n = i.userName),
                                            (r = i.password),
                                            (o = i.t6Mobile),
                                            (t.next = 10),
                                            (0, he.K)(r)
                                          );
                                        case 10:
                                          (s = t.sent),
                                            e.setState({
                                              mobile: o || n,
                                              isAuthorize: !!n,
                                            }),
                                            n &&
                                              s &&
                                              (0, G.Sf)({
                                                userName12306: n,
                                                userPassword12306: s,
                                                scenes: "ticketUpgrade",
                                              }),
                                            e.getProductList();
                                        case 14:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function () {
                                return t.apply(this, arguments);
                              };
                            })(),
                            i =
                              ((null === T.Z || void 0 === T.Z
                                ? void 0
                                : T.Z.statusBarHeight) || 44) +
                              ("ios" !== I.Z.os && I.Z.isCRN ? 50 : 44) +
                              4,
                            n = this.state,
                            r = n.isNeedShowAssistDrawer,
                            o = n.assistDrawerData;
                          return (0, L.BX)(y.View, {
                            style: Se.container,
                            children: [
                              (0, L.tZ)(y.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_bj.webp",
                                className: "main-bg-image",
                              }),
                              (0, L.BX)(y.View, {
                                className: "head-view",
                                style: {
                                  position: I.Z.isCRN ? "absolute" : "fixed",
                                },
                                children: [
                                  (0, L.tZ)(y.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_bj1.webp",
                                    className: "head-bg",
                                  }),
                                  (0, L.tZ)(N.Z, {
                                    page: this,
                                    title: "",
                                    backgroundColor: "transparent",
                                    renderCenterView: function () {
                                      return I.Z.isTieyou
                                        ? (0, L.tZ)(L.HY, {})
                                        : (0, L.tZ)(y.Image, {
                                            src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/07/img_bt_znx.png",
                                            className: "head-center-img",
                                          });
                                    },
                                    renderLeftView: function () {
                                      return (0, L.tZ)(y.View, {
                                        id: "AMED",
                                        onClick: function () {
                                          "tupIndexAw" === e.fromPage &&
                                          0 === e.state.retainStatus
                                            ? e.setState({ retainStatus: 1 })
                                            : 1 ===
                                              (0, w.getCurrentPages)().length
                                            ? (0, Z.Yp)()
                                            : (0, w.navigateBack)({ delta: 1 });
                                        },
                                        children: (0, L.tZ)(y.View, {
                                          style: {
                                            display: "flex",
                                            height: 44,
                                            width: 44,
                                            marginLeft: 5,
                                            justifyContent: "center",
                                            alignItems: "center",
                                          },
                                          children: (0, L.tZ)(k.Z, {
                                            style: {
                                              fontSize: 24,
                                              alignSelf: "center",
                                              color: "#222222",
                                              marginLeft: 5,
                                            },
                                            children: "󰲚",
                                          }),
                                        }),
                                      });
                                    },
                                    rightViewWidth: 72,
                                    renderRightView: function () {
                                      return (0, L.BX)(y.View, {
                                        className: "head-icon-group",
                                        children: [
                                          (0, L.BX)(y.View, {
                                            id: "AMEE",
                                            className:
                                              "head-icon-item margin-right-16",
                                            onClick: (0, s.Z)(
                                              (0, a.Z)().mark(function t() {
                                                var i, n, r, o;
                                                return (0, a.Z)().wrap(
                                                  function (t) {
                                                    for (;;)
                                                      switch (
                                                        (t.prev = t.next)
                                                      ) {
                                                        case 0:
                                                          return (
                                                            (0, ye.Q)(
                                                              "刷新中..."
                                                            ),
                                                            (t.next = 3),
                                                            (0, me.q0)()
                                                          );
                                                        case 3:
                                                          return (
                                                            (i = t.sent),
                                                            (n = i.userName),
                                                            (r = i.password),
                                                            (t.next = 8),
                                                            (0, he.K)(r)
                                                          );
                                                        case 8:
                                                          (o = t.sent),
                                                            n &&
                                                              o &&
                                                              (0, G.Sf)({
                                                                userName12306:
                                                                  n,
                                                                userPassword12306:
                                                                  o,
                                                                scenes:
                                                                  "ticketUpgrade",
                                                              }),
                                                            setTimeout(
                                                              function () {
                                                                (0, ye.Z)();
                                                              },
                                                              2e3
                                                            ),
                                                            e.getProductList();
                                                        case 12:
                                                        case "end":
                                                          return t.stop();
                                                      }
                                                  },
                                                  t
                                                );
                                              })
                                            ),
                                            children: [
                                              (0, L.tZ)(y.Image, {
                                                src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/icon_CPSJ_sx.webp",
                                                style: Se.rightIcon,
                                              }),
                                              (0, L.tZ)(y.Text, {
                                                className: "head-icon-text",
                                                children: "刷新",
                                              }),
                                            ],
                                          }),
                                          (0, L.BX)(y.View, {
                                            className:
                                              "head-icon-item margin-right-16",
                                            onClick: function () {
                                              e.ubtTrace(
                                                "TZATtkUpdate_ShareButton_click",
                                                {
                                                  fromSource: e.fromPage,
                                                  PageId: e.pageId,
                                                }
                                              ),
                                                I.Z.isTieyou,
                                                I.Z.isTieyou;
                                            },
                                            children: [
                                              (0, L.tZ)(y.Image, {
                                                src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/icon_CPSJ_fx.webp",
                                                style: Se.rightIcon,
                                              }),
                                              (0, L.tZ)(y.Text, {
                                                className: "head-icon-text",
                                                children: "分享",
                                              }),
                                            ],
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                                ],
                              }),
                              (0, L.tZ)(y.ScrollView, {
                                scrollY: !this.state.isShowLayer,
                                style: { flex: 1, overflow: "scroll" },
                                children: (0, L.BX)(y.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: 1,
                                    position: "relative",
                                    zIndex: 1,
                                  },
                                  children: [
                                    (0, L.tZ)(y.Image, {
                                      src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_zbt.webp",
                                      style: (0, v.Jn)([
                                        Se.textTag,
                                        { marginTop: i },
                                      ]),
                                      webp: !0,
                                    }),
                                    (0, L.BX)(y.View, {
                                      className: "main-sub-view",
                                      children: [
                                        (0, L.tZ)(y.Image, {
                                          src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/07/img_bq_xsmf.png",
                                          className: "sub-tag",
                                        }),
                                        (0, L.tZ)(y.Text, {
                                          className: "sub-text",
                                          children:
                                            "全网火车票一键换至心仪座位&车厢",
                                        }),
                                      ],
                                    }),
                                    (0, L.tZ)(y.View, {
                                      className: "pic-group",
                                      children: this.picArr.map(function (
                                        e,
                                        t
                                      ) {
                                        return (0, L.BX)(
                                          y.View,
                                          {
                                            className: "pic-view".concat(
                                              0 === t ? " first-pic-view" : ""
                                            ),
                                            children: [
                                              (0, L.tZ)(y.Image, {
                                                src: e.imgUrl,
                                                className: "pic-bg",
                                              }),
                                              (0, L.tZ)(y.Text, {
                                                className: "pic-title",
                                                children: e.title,
                                              }),
                                              (0, L.tZ)(y.Text, {
                                                className: "pic-desc",
                                                children: e.desc,
                                              }),
                                            ],
                                          },
                                          e.title
                                        );
                                      }),
                                    }),
                                    this.state.isAuthorize
                                      ? (0, L.tZ)(function () {
                                          var i;
                                          return (0, L.tZ)(y.View, {
                                            style: {
                                              display: "flex",
                                              flexDirection: "row",
                                            },
                                            children: (0, L.BX)(y.View, {
                                              id: "AMEC",
                                              onClick: function () {
                                                t(),
                                                  e.ubtTrace(
                                                    "TZATtkUpdate_ChangeAcc_click",
                                                    {
                                                      PageId: e.pageId,
                                                      fromSource: e.fromPage,
                                                    }
                                                  );
                                              },
                                              style: Se.switchAccount,
                                              children: [
                                                (0, L.BX)(y.View, {
                                                  style: {
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                  },
                                                  children: [
                                                    (0, L.tZ)(y.Image, {
                                                      src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_sjcp_12306.png",
                                                      style: {
                                                        width: 24,
                                                        height: 24,
                                                      },
                                                    }),
                                                    (0, L.tZ)(y.Text, {
                                                      style: (0, v.Jn)([
                                                        Se.linearTitle,
                                                        { marginLeft: 8 },
                                                      ]),
                                                      children:
                                                        null !==
                                                          (i =
                                                            e.state.mobile) &&
                                                        void 0 !== i
                                                          ? i
                                                          : e.state.userId12306,
                                                    }),
                                                  ],
                                                }),
                                                (0, L.BX)(y.View, {
                                                  style: {
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                  },
                                                  children: [
                                                    (0, L.tZ)(y.Text, {
                                                      style: Se.linearDesc,
                                                      children: "切换账号",
                                                    }),
                                                    (0, L.tZ)(k.Z, {
                                                      style: Se.arr,
                                                      children: "󰲧",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          });
                                        }, {})
                                      : (0, L.tZ)(function () {
                                          return (0, L.BX)(L.HY, {
                                            children: [
                                              (0, L.tZ)(y.View, {
                                                style: {
                                                  display: "flex",
                                                  flexDirection: "row",
                                                },
                                                children: (0, L.BX)(y.View, {
                                                  style: Se.importModule,
                                                  children: [
                                                    (0, L.BX)(y.View, {
                                                      style: {
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        marginTop: 24,
                                                        marginBottom: 4,
                                                      },
                                                      children: [
                                                        (0, L.tZ)(y.Image, {
                                                          src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_sjcp_12306.png",
                                                          style: {
                                                            width: 28,
                                                            height: 28,
                                                          },
                                                        }),
                                                        (0, L.BX)(y.View, {
                                                          style: {
                                                            display: "flex",
                                                            flexDirection:
                                                              "column",
                                                            marginLeft: 8,
                                                          },
                                                          children: [
                                                            (0, L.tZ)(y.Text, {
                                                              style:
                                                                Se.importTitle,
                                                              children:
                                                                "导入订单开始换座",
                                                            }),
                                                            (0, L.BX)(y.View, {
                                                              style: {
                                                                flexDirection:
                                                                  "row",
                                                                alignItems:
                                                                  "center",
                                                                marginTop: 2,
                                                              },
                                                              children: [
                                                                (0, L.tZ)(
                                                                  y.Text,
                                                                  {
                                                                    style:
                                                                      Se.tip,
                                                                    children:
                                                                      "导入订单",
                                                                  }
                                                                ),
                                                                (0, L.tZ)(
                                                                  y.Image,
                                                                  {
                                                                    src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_sjcp_jt.png",
                                                                    style:
                                                                      Se.arrow,
                                                                  }
                                                                ),
                                                                (0, L.tZ)(
                                                                  y.Text,
                                                                  {
                                                                    style:
                                                                      Se.tip,
                                                                    children:
                                                                      "选择座席",
                                                                  }
                                                                ),
                                                                (0, L.tZ)(
                                                                  y.Image,
                                                                  {
                                                                    src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_sjcp_jt.png",
                                                                    style:
                                                                      Se.arrow,
                                                                  }
                                                                ),
                                                                (0, L.tZ)(
                                                                  y.Text,
                                                                  {
                                                                    style:
                                                                      Se.tip,
                                                                    children:
                                                                      "换座成功",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, L.tZ)(y.View, {
                                                      style: {
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        width: "100%",
                                                      },
                                                      children: (0, L.BX)(
                                                        y.View,
                                                        {
                                                          id: "AMEB",
                                                          onClick: function () {
                                                            t(),
                                                              e.ubtTrace(
                                                                "TZATtkUpdate_OneLoad_click",
                                                                {
                                                                  PageId:
                                                                    e.pageId,
                                                                  fromSource:
                                                                    e.fromPage,
                                                                }
                                                              );
                                                          },
                                                          style:
                                                            Se.importBtnView,
                                                          children: [
                                                            1 ===
                                                              e.state
                                                                .freeModel &&
                                                              (0, L.tZ)(R.Z, {
                                                                className:
                                                                  "image",
                                                                source: {
                                                                  uri: "https://images3.c-ctrip.com/ztrip/train_zhu/img_sjcp_btn_tag.png",
                                                                },
                                                                style:
                                                                  Se.btnTag,
                                                                children: (0,
                                                                L.tZ)(y.Text, {
                                                                  style:
                                                                    Se.tagText,
                                                                  children:
                                                                    "限时免费",
                                                                }),
                                                              }),
                                                            (0, L.tZ)(y.Text, {
                                                              style:
                                                                Se.importBtnText,
                                                              children:
                                                                "一键导入",
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, L.tZ)(B, {}),
                                              (0, L.tZ)(y.Image, {
                                                src: I.Z.isTieyou
                                                  ? "https://images3.c-ctrip.com/ztrip/train_xie/2023/05/img_QP_new_Slogan_ty%202.png"
                                                  : "https://images3.c-ctrip.com/ztrip/train_zhu/img_QP_new_Slogan.png",
                                                style: Se.logo,
                                              }),
                                            ],
                                          });
                                        }, {}),
                                    this.state.isAuthorize &&
                                      (0, L.tZ)(y.View, {
                                        style: {
                                          flexDirection: "row",
                                          marginTop: 8,
                                        },
                                        children: (0, L.tZ)(A, {
                                          setState: function (t) {
                                            return e.setState(t);
                                          },
                                          page: this,
                                          tupOrderList:
                                            this.state.tupOrderList || [],
                                        }),
                                      }),
                                  ],
                                }),
                              }),
                              !!this.state.tupSuToast &&
                                1 === this.state.showTupToast &&
                                (0, L.BX)(y.View, {
                                  className: "lottie-view".concat(
                                    I.Z.isCRN ? "" : " fixed-position"
                                  ),
                                  children: [
                                    (0, L.tZ)(y.View, {
                                      onClick: function () {
                                        var t;
                                        (0, Z.jn)(
                                          null === (t = e.state.tupSuToast) ||
                                            void 0 === t
                                            ? void 0
                                            : t.jumpUrl
                                        );
                                      },
                                      children: (0, L.tZ)(x.Z, {
                                        loop: !0,
                                        defaultImg:
                                          "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_red.gif",
                                        style: Se.contentIcon,
                                        source:
                                          "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/red.json",
                                      }),
                                    }),
                                    (0, L.tZ)(y.View, {
                                      onClick: function () {
                                        b().setStorageSync(
                                          "closeDate_7",
                                          h()().format("YYYY-MM-DD")
                                        ),
                                          e.setState({ showTupToast: 2 });
                                      },
                                      className: "lottie-close-icon-view",
                                      children: (0, L.tZ)(y.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/icon_fc_gb.png",
                                        className: "lottie-close-icon",
                                      }),
                                    }),
                                  ],
                                }),
                              !!this.state.isShowLayer &&
                                (0, L.tZ)(ge, {
                                  onClose: function () {
                                    return e.setState({ isShowLayer: !1 });
                                  },
                                  tupOrderList: this.state.tupOrderList,
                                  orderNumber: this.state.clickOrderNumber,
                                  page: this,
                                }),
                              !this.state.isShowLayer &&
                                !!this.state.tupSuToast &&
                                0 === this.state.showTupToast &&
                                (0, L.tZ)(be, {
                                  data: this.state.tupSuToast,
                                  page: this,
                                  onClose: function () {
                                    b().setStorageSync("tupSuToast_7", "Shown"),
                                      e.setState({ showTupToast: 1 });
                                  },
                                }),
                              1 === this.state.retainStatus &&
                                (0, L.tZ)(Te, {
                                  onClose: function () {
                                    return e.setState({ retainStatus: 2 });
                                  },
                                }),
                              r &&
                                (0, L.tZ)(Ze, {
                                  page: this,
                                  data: o,
                                  onCloseDrawer: function () {
                                    return e.setState({
                                      isNeedShowAssistDrawer: !1,
                                    });
                                  },
                                  onShare: function (e) {},
                                  doAssist: this.doAssistAction.bind(this),
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(f.default.Component))
              ) || $,
            Se = (0, v.lW)({
              container: {
                display: "flex",
                backgroundColor: "#f5f5f5",
                position: "relative",
                flexDirection: "column",
                height: "100%",
              },
              rightIcon: { width: 20, height: 20 },
              bgImage: {
                width: "100%",
                height: 348,
                position: "absolute",
                top: 0,
              },
              iconTag: { width: 180, height: 18, alignSelf: "center" },
              textTag: { width: 281, height: 34, alignSelf: "center" },
              lineTag: {
                width: 240,
                height: 10,
                marginTop: 3,
                alignSelf: "center",
              },
              titleText: {
                color: "#ffffff",
                fontSize: 11,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                marginTop: 1,
                alignSelf: "center",
              },
              iconGroup: {
                display: "flex",
                flexDirection: "row",
                marginTop: 16,
                marginLeft: 8,
                marginRight: 8,
              },
              iconGroupRow: { display: "flex", flex: 1, flexDirection: "row" },
              linear: {
                borderRadius: 24,
                borderWidth: 1.5,
                borderColor: "#ffffff",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderStyle: "solid",
                flex: 1,
              },
              linearPic: { width: 159, height: 116, marginTop: 6.5 },
              linearTitle: {
                color: "#222222",
                fontSize: 16,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
              },
              linearDesc: {
                color: "#999999",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
              },
              importModule: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: 12,
                flex: 1,
                marginLeft: 8,
                marginRight: 8,
                marginTop: 8,
                zIndex: 999,
              },
              importBtnView: {
                display: "flex",
                position: "relative",
                backgroundColor: "#198cff",
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
                height: 44,
                margin: 16,
                flex: 1,
              },
              importBtnText: {
                color: "#ffffff",
                fontSize: 17,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
              },
              importTitle: {
                color: "#222222",
                fontSize: 18,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
              },
              tip: {
                color: "#999999",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
              },
              arrow: { width: 19, height: 6, marginLeft: 2, marginRight: 2 },
              logo: { width: 310, height: 116, alignSelf: "center" },
              switchAccount: {
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 12,
                marginLeft: 8,
                marginRight: 8,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 13,
                paddingBottom: 13,
                marginTop: 8,
                flex: 1,
              },
              btnTag: {
                width: 49,
                display: "flex",
                flexDirection: "row",
                height: 23,
                position: "absolute",
                right: 0,
                top: -6,
                alignItems: "baseline",
                justifyContent: "center",
              },
              tagText: {
                color: "#ffffff",
                fontSize: 9,
                fontFamily: "PingFangSC-Medium",
                fontWeight: "500",
                marginTop: 1,
              },
              arr: { fontSize: 9, color: "#999999" },
              contentIcon: { width: 60, height: 60 },
            });
          (_e.enableShareAppMessage = !0),
            Page(
              (0, r.createPageConfig)(
                _e,
                "pages/taroCRN/train/pages/UpgradeTicket/index",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "",
                  navigationStyle: "custom",
                  navigationBarTextStyle: "black",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98946, 3322, 36332, 95854, 59188, 35048, 70486, 97709, 6189, 22843,
            6878, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(19731);
          }
        ),
          e.O();
      },
    ]);
})();
