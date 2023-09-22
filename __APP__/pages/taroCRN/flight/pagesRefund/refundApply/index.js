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
    require("../../../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../../../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../../../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    require("../../../sub-common/023c833735f89bfd8e4bfa6050ae7715.js"),
    require("../../../sub-common/6c29063ea7407d5aad2c6709ea72811d.js"),
    require("../../../sub-common/c464917dce609cc1e640bf0180e17346.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [78801],
      {
        8245: function (e, t, n) {
          var i = n(32180),
            r = n(57042),
            o = n(24460),
            l = n(81876),
            d = n(21867),
            c = n(86066),
            a = n(45023),
            s = n(52500),
            u = n(90582),
            f = n(71515),
            g = n(92954),
            h = n.n(g),
            p = n(23577),
            m = n(21145),
            Z = n(87298),
            y = n(59582),
            w = n(25214),
            x = n(298),
            v = n(49528),
            b = n(96677),
            _ = h().getSystemInfoSync(),
            R = _.windowWidth,
            T = (_.windowHeight, "#FFF8ED"),
            k = (0, v.lW)({
              container: { flex: 1, backgroundColor: b.Z.main_bg, width: R },
              remark_view: {
                borderRadius: 4,
                backgroundColor: T,
                paddingTop: 7,
                paddingBottom: 7,
                paddingLeft: 12,
                paddingRight: 12,
                marginTop: 6,
              },
              remark: { color: "#F76D2F", fontSize: 12 },
              title: { fontSize: 17, fontWeight: "bold" },
              reason: { fontSize: 13, color: b.Z.grey_99 },
              reason_view: { marginTop: 4 },
              product_view: { marginBottom: 10 },
              title_product: { fontSize: 15, color: b.Z.grey_33 },
              refund_products: {
                borderRadius: 4,
                backgroundColor: b.Z.grey_f8,
                paddingLeft: 13,
                paddingRight: 13,
                paddingTop: 13,
                paddingBottom: 5,
                marginTop: 14,
              },
              refund_rule_price: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginTop: 15,
              },
              refund_remark: { fontSize: 15, color: "#333333" },
              refund_remark_child: {
                fontSize: 15,
                color: "#333333",
                marginTop: 3,
              },
              refund_remark_baby: {
                fontSize: 15,
                color: "#333333",
                marginTop: 3,
              },
              refund_title: { fontSize: 13, color: "#666666", marginTop: 2 },
              refund_rule: { fontSize: 13, color: "#999" },
              refund_rule_icon: { fontSize: 11, color: "#999", marginTop: 2 },
              price_desc: { marginLeft: 4, marginTop: 2 },
              refund_rule_view: {
                display: "flex",
                flexDirection: "row",
                marginTop: 1,
              },
              refund_flightinfo: {
                marginLeft: 8,
                marginRight: 8,
                backgroundColor: b.Z.white,
                paddingLeft: 15,
                paddingTop: 15,
                paddingBottom: 15,
                borderRadius: 8,
                marginBottom: 10,
                marginTop: 8,
              },
              announce_view: {
                backgroundColor: "#FFF8ED",
                borderRadius: 6,
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 12,
                paddingRight: 12,
                marginTop: 10,
              },
              announce_text: { fontSize: 12, color: "#F76D2F", lineHeight: 15 },
              line: {
                height: 1,
                width: R,
                backgroundColor: b.Z.grey_e5,
                marginTop: 13,
                marginBottom: 13,
              },
              flight_route: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
              },
              flight_title: { fontSize: 15, color: b.Z.grey_66 },
              flight_desc: {
                fontSize: 18,
                color: b.Z.grey_33,
                fontWeight: "bold",
              },
              card_view: {
                marginTop: 8,
                borderRadius: 10,
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 18,
                paddingBottom: 18,
                backgroundColor: "white",
              },
              card_view_refund_detail: {
                display: "flex",
                flexDirection: "column",
                marginTop: 8,
                borderRadius: 10,
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 18,
                paddingBottom: 8,
                backgroundColor: "white",
              },
              big_title: {
                fontSize: 18,
                color: b.Z.grey_33,
                fontWeight: "bold",
              },
              insurance_title: {
                fontSize: 14,
                color: b.Z.grey_33,
                fontWeight: "bold",
              },
              passenger_container: {
                backgroundColor: "#f8f8f8",
                borderRadius: 6,
                flexWrap: "wrap",
                display: "flex",
                flexDirection: "row",
                paddingTop: 11,
                paddingBottom: 11,
                paddingLeft: 12,
                paddingRight: 12,
                marginTop: 10,
              },
              insurance_container: {
                backgroundColor: "#f8f8f8",
                borderRadius: 6,
                flexWrap: "wrap",
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
                paddingBottom: 7,
              },
              passenger_text: { fontSize: 14, color: b.Z.grey_66 },
              canrefund_list: { marginTop: 19 },
              refund_protect: {
                backgroundColor: b.Z.white,
                marginBottom: 10,
                marginLeft: 8,
                marginRight: 8,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                overflow: "hidden",
              },
              price_list_title: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              scrollview_in_view: {
                marginLeft: 8,
                marginRight: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "100%",
              },
              top_content: { flex: 1 },
              flight_info_tag: {
                borderRadius: 11,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 6,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 3,
                paddingBottom: 3,
                backgroundColor: "#EAF5FF",
              },
              flight_info_text: {
                fontSize: 13,
                color: b.Z.mainColor,
                fontWeight: "500",
              },
              dash_line_style: {
                height: 1,
                width: 2,
                marginRight: 5,
                marginTop: 17,
                backgroundColor: "#e8e8e8",
              },
            }),
            S = (0, v.lW)({
              flex1: { flex: 1 },
              spacebetween_row: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              },
              spacebetween_center_row: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              row: { display: "flex", flexDirection: "row" },
              center_center: { justifyContent: "center", alignItems: "center" },
            }),
            C = n(53550),
            P = n(48813),
            B =
              (h().getSystemInfoSync().windowWidth,
              s.default.memo(function (e) {
                var t = e.name,
                  n = e.isSelected,
                  i = e.isDisabled,
                  r = e.describe,
                  o = e.selectClick,
                  l = e.item,
                  d = e.segment,
                  c = e.testID,
                  a = e.disabled,
                  s = n ? b.Z.zxMainColor : b.Z.grey_33;
                s = i ? b.Z.grey_99 : s;
                var u = (null == r ? void 0 : r.length) > 7;
                return (0, P.BX)(f.View, {
                  testID: c,
                  style: D.container,
                  onClick: function () {
                    a || o(l, d);
                  },
                  children: [
                    (0, P.BX)(f.View, {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        flex: 1,
                        alignItems: "center",
                      },
                      children: [
                        (0, P.tZ)(f.Text, {
                          numberOfLines: 1,
                          ellipsizeMode: "tail",
                          style: {
                            color: b.Z.grey_33,
                            fontSize: 14,
                            marginLeft: 12,
                            flex: 1,
                            marginTop: 2,
                          },
                          children: t,
                        }),
                        a
                          ? (0, P.tZ)(P.HY, {
                              children: (0, P.tZ)(f.View, {
                                style: D.out_circle,
                                children: (0, P.tZ)(f.View, {
                                  style: D.in_circle,
                                }),
                              }),
                            })
                          : (0, P.tZ)(P.HY, {
                              children:
                                !i || u
                                  ? (0, P.tZ)(f.View, {
                                      children: n
                                        ? (0, P.tZ)(C.Z, {
                                            style: (0, x.Z)(
                                              (0, x.Z)(
                                                {},
                                                { color: b.Z.zxMainColor }
                                              ),
                                              D.bottom_tab_icon
                                            ),
                                            children: "󰲡",
                                          })
                                        : (0, P.tZ)(C.Z, {
                                            style: (0, x.Z)(
                                              (0, x.Z)(
                                                {},
                                                { color: b.Z.grey_cc }
                                              ),
                                              D.bottom_tab_icon
                                            ),
                                            children: "󰲠",
                                          }),
                                    })
                                  : (0, P.tZ)(f.View, {
                                      style: {
                                        width: 18,
                                        height: 18,
                                        borderRadius: 2,
                                        overflow: "hidden",
                                        borderWidth: 1,
                                        borderColor: "#999999",
                                        marginTop: 1,
                                      },
                                    }),
                            }),
                      ],
                    }),
                    i &&
                      !u &&
                      (0, P.tZ)(C.Z, {
                        style: { fontSize: 16, color: s, height: 20 },
                        children: r,
                      }),
                  ],
                });
              })),
            D = (0, v.lW)({
              icon_style: { height: 18, width: 18 },
              container: {
                display: "flex",
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
                marginTop: 9,
                marginBottom: 2,
                marginLeft: 1,
                paddingRight: 12,
              },
              bottom_tab_icon: { fontSize: 20 },
              out_circle: {
                borderColor: "#cccccc",
                borderWidth: 2,
                padding: 1,
                borderRadius: 8,
                overflow: "hidden",
                marginTop: 2,
              },
              in_circle: {
                height: 13,
                width: 13,
                backgroundColor: "#cccccc",
                borderRadius: 14,
              },
            }),
            V = n(72077),
            L = n(1841),
            I = h().getSystemInfoSync(),
            M = I.windowWidth,
            z =
              (I.windowHeight,
              function (e) {
                var t = e.title,
                  n = e.content,
                  i = e.okStr,
                  r = e.hide;
                return (0, P.tZ)(f.View, {
                  style: (0, x.Z)((0, x.Z)({}, F.container), {
                    width: M,
                    alignItems: "center",
                    justifyContent: "center",
                  }),
                  children: (0, P.BX)(f.View, {
                    style: F.content,
                    children: [
                      (0, P.BX)(f.View, {
                        children: [
                          (0, P.tZ)(f.View, {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            children: (0, P.tZ)(f.Text, {
                              style: F.title,
                              children: t,
                            }),
                          }),
                          (0, P.tZ)(f.View, {
                            style: F.item_desc,
                            children: (0, P.tZ)(L.Z, {
                              style: F.textStyle,
                              children: n,
                            }),
                          }),
                        ],
                      }),
                      (0, P.tZ)(f.View, {
                        style: F.btn_content,
                        onClick: function () {
                          r();
                        },
                        children: (0, P.tZ)(f.Text, {
                          style: F.btn_text,
                          children: i,
                        }),
                      }),
                    ],
                  }),
                });
              }),
            F = (0, v.lW)({
              item_desc: {
                display: "flex",
                flexDirection: "row",
                marginBottom: 10,
                paddingLeft: 5,
                paddingRight: 5,
              },
              circle: {
                height: 4,
                width: 4,
                borderRadius: 4,
                backgroundColor: b.Z.mainColor,
                marginTop: 8,
                marginRight: 6,
              },
              btn_content: {
                height: 44,
                backgroundColor: b.Z.mainColor,
                borderRadius: 6,
                marginTop: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              btn_text: { fontSize: 16, color: "white", fontWeight: "bold" },
              title: {
                marginBottom: 17,
                textAlign: "center",
                fontSize: 20,
                color: b.Z.grey_22,
                fontWeight: "bold",
              },
              content: {
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                overflow: "hidden",
                paddingLeft: 25,
                paddingRight: 25,
                paddingTop: 20,
                paddingBottom: 20,
                backgroundColor: "white",
              },
              container: {},
              textStyle: {
                fontSize: 14,
                color: b.Z.grey_66,
                marginBottom: 10,
                lineHeight: 20,
              },
            }),
            X = function (e) {
              var t = e.segmentItem,
                n = e.checkBaggageMaxRule,
                i = e.segIndex,
                r = e.selectOtherProduct,
                o = e.isFree,
                l = e.isValidPrice;
              return (
                e.reason,
                t
                  ? (0, P.BX)(f.View, {
                      style: k.card_view,
                      children: [
                        (0, P.tZ)(f.View, {
                          style: (0, x.Z)(
                            (0, x.Z)((0, x.Z)({}, W.flex1), W.row),
                            S.spacebetween_center_row
                          ),
                          children: (0, P.BX)(f.View, {
                            style: (0, x.Z)((0, x.Z)({}, W.row), {
                              flex: 1,
                              alignItems: "center",
                            }),
                            children: [
                              !!t.tagLabel &&
                                (0, P.tZ)(f.View, {
                                  style: k.flight_info_tag,
                                  children: (0, P.tZ)(f.Text, {
                                    style: k.flight_info_text,
                                    children: null == t ? void 0 : t.tagLabel,
                                  }),
                                }),
                              (0, P.tZ)(f.Text, {
                                numberOfLines: 1,
                                ellipsizeMode: "tail",
                                style: k.flight_desc,
                                children: t.route,
                              }),
                            ],
                          }),
                        }),
                        !!t.announce &&
                          (0, P.tZ)(f.View, {
                            style: k.announce_view,
                            children: (0, P.tZ)(L.Z, {
                              style: k.announce_text,
                              children: t.announce,
                            }),
                          }),
                        (0, P.tZ)(j, { allTicketStr: t.refundTicketString }),
                        (0, P.tZ)(H, {
                          selectOtherProduct: r,
                          segIndex: i,
                          isFree: o,
                          isValidPrice: l,
                          segmentItem: t,
                        }),
                        (0, P.BX)(f.View, {
                          style: (0, x.Z)(
                            (0, x.Z)({}, W.flex1),
                            k.refund_rule_price
                          ),
                          children: [
                            (0, P.BX)(f.View, {
                              style: (0, x.Z)((0, x.Z)({}, W.row), {
                                alignItems: "center",
                              }),
                              children: [
                                (0, P.tZ)(f.Text, {
                                  style: k.refund_title,
                                  children: "退票费:",
                                }),
                                (0, P.tZ)(O, { isFree: o, segmentItem: t }),
                              ],
                            }),
                            (0, P.BX)(f.View, {
                              testID: V._M.refund_passenger_rule,
                              style: k.refund_rule_view,
                              onClick: n,
                              children: [
                                (0, P.tZ)(f.Text, {
                                  style: k.refund_rule,
                                  children: "退改规则",
                                }),
                                (0, P.tZ)(C.Z, {
                                  style: k.refund_rule_icon,
                                  children: "󰲧",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, P.tZ)(f.View, {})
              );
            };
          function j(e) {
            var t = e.allTicketStr;
            return (0, P.tZ)(f.View, {
              style: k.passenger_container,
              children: (0, P.BX)(f.Text, {
                style: k.passenger_text,
                children: ["退票人:", t],
              }),
            });
          }
          function H(e) {
            var t,
              n,
              i,
              r = e.segmentItem,
              o = e.selectOtherProduct,
              l = e.segIndex,
              d = e.isValidPrice,
              c = e.isFree,
              a =
                (null == r ||
                null === (t = r.canRefundProductLists) ||
                void 0 === t
                  ? void 0
                  : t.length) > 0,
              s =
                (null == r ||
                null === (n = r.canNotRefundProductLists) ||
                void 0 === n
                  ? void 0
                  : n.length) > 0,
              u =
                (null == r || null === (i = r.refundReduceLists) || void 0 === i
                  ? void 0
                  : i.length) > 0 &&
                !c &&
                d;
            return a || s || u
              ? (0, P.tZ)(P.HY, {
                  children: (0, P.BX)(f.View, {
                    children: [
                      !!u &&
                        (0, P.tZ)(f.Text, {
                          style: (0, x.Z)(
                            (0, x.Z)({}, k.insurance_title),
                            k.canrefund_list
                          ),
                          children: "可用退票优惠服务",
                        }),
                      !!u &&
                        (0, P.tZ)(f.View, {
                          style: k.insurance_container,
                          children: r.refundReduceLists.map(function (e, t) {
                            var n;
                            return (0, P.tZ)(B, {
                              testID: V._M.insurance_item_id,
                              name: e.showName || e.title,
                              isSelected: e.isSelected,
                              disabled:
                                null === (n = r.reduceTokenObj[e.token]) ||
                                void 0 === n
                                  ? void 0
                                  : n.refundSelected,
                              isDisabled: !1,
                              selectClick: function () {
                                o(l, e, t, "useProduct");
                              },
                            });
                          }),
                        }),
                      !!a &&
                        (0, P.tZ)(f.Text, {
                          style: (0, x.Z)(
                            (0, x.Z)({}, k.insurance_title),
                            k.canrefund_list
                          ),
                          children: "退订附加产品",
                        }),
                      !!a &&
                        (0, P.tZ)(f.View, {
                          style: k.insurance_container,
                          children: r.canRefundProductLists.map(function (
                            e,
                            t
                          ) {
                            var n;
                            return (0, P.tZ)(B, {
                              testID: V._M.insurance_item_id,
                              name: e.showName || e.title,
                              isSelected: e.isSelected,
                              disabled:
                                null === (n = r.reduceTokenObj[e.token]) ||
                                void 0 === n
                                  ? void 0
                                  : n.useSelected,
                              isDisabled: !1,
                              selectClick: function () {
                                o(l, e, t);
                              },
                            });
                          }),
                        }),
                      !!s &&
                        (0, P.BX)(f.View, {
                          children: [
                            (0, P.BX)(f.View, {
                              style: {
                                marginTop: 15,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              },
                              children: [
                                (0, P.tZ)(f.Text, {
                                  style: k.insurance_title,
                                  children: "以下产品不可退",
                                }),
                                (0, P.BX)(f.View, {
                                  style: { flexDirection: "row" },
                                  onClick: function () {
                                    var e, t;
                                    !(function (e) {
                                      var t = e.title,
                                        n = e.content,
                                        i = e.okStr;
                                      console.log("showRefundDesc");
                                      var r = (0, g.getCurrentInstance)().page;
                                      null == r ||
                                        r.showCommonDrawer({
                                          hideTitle: !0,
                                          hideClose: !0,
                                          exclusive: !0,
                                          content: function (e) {
                                            var r = e.onClose;
                                            return (0, P.tZ)(z, {
                                              title: t,
                                              content: n,
                                              okStr: i || "我知道了",
                                              hide: r,
                                            });
                                          },
                                          className: "remark-pop",
                                        });
                                    })({
                                      title: "不可退原因",
                                      content:
                                        null ===
                                          (e = r.canNotRefundProductLists) ||
                                        void 0 === e ||
                                        null === (t = e[0]) ||
                                        void 0 === t
                                          ? void 0
                                          : t.unrefundableReason,
                                      okStr: "我知道了",
                                    });
                                  },
                                  children: [
                                    (0, P.tZ)(f.Text, {
                                      style: {
                                        fontSize: 13,
                                        color: b.Z.zxMainColor,
                                      },
                                      children: "了解原因",
                                    }),
                                    (0, P.tZ)(C.Z, {
                                      style: {
                                        fontSize: 14,
                                        color: b.Z.zxMainColor,
                                      },
                                      children: "󰲧",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            r.canNotRefundProductLists.map(function (e) {
                              return (0,
                              P.tZ)(f.View, { style: { marginTop: 10 }, children: (0, P.tZ)(f.Text, { style: { fontSize: 14, color: b.Z.grey_99 }, children: e.showName || e.title }) });
                            }),
                          ],
                        }),
                    ],
                  }),
                })
              : (0, P.tZ)(f.View, {});
          }
          function O(e) {
            var t = e.isFree,
              n = e.segmentItem;
            return (
              null == n || n.refundRule,
              (0, P.tZ)(f.View, {
                style: k.price_desc,
                children: t
                  ? (0, P.tZ)(f.Text, {
                      style: k.refund_remark,
                      children: "¥0/人",
                    })
                  : (0, P.BX)(P.HY, {
                      children: [
                        !!n.adultRefundFee &&
                          !!n.isExitAdult &&
                          (0, P.BX)(f.Text, {
                            style: k.refund_remark,
                            children: [" ", n.adultRefundFee],
                          }),
                        !!n.childRefundFee &&
                          !!n.isExitChildren &&
                          (0, P.BX)(f.Text, {
                            style: k.refund_remark_child,
                            children: [" ", n.childRefundFee],
                          }),
                        !!n.babyRefundFee &&
                          !!n.isExitBaby &&
                          (0, P.BX)(f.Text, {
                            style: k.refund_remark_child,
                            children: [" ", n.babyRefundFee],
                          }),
                      ],
                    }),
              })
            );
          }
          var W = (0, v.lW)({
              flex1: { flex: 1 },
              row: { display: "flex", flexDirection: "row" },
            }),
            A = n(33357),
            E = function (e) {
              var t = e.xProducts,
                n = e.selectProduct,
                i = e.xProductHint;
              return t && 0 != (null == t ? void 0 : t.length)
                ? (0, P.BX)(f.View, {
                    style: k.card_view,
                    children: [
                      (0, P.tZ)(f.Text, {
                        style: k.title,
                        children: "退订产品",
                      }),
                      (0, P.tZ)(f.View, {
                        style: k.refund_products,
                        children:
                          null == t
                            ? void 0
                            : t.map(function (e, t) {
                                return (0, P.tZ)(f.View, {
                                  onClick: function () {
                                    e.canRefund && n(t);
                                  },
                                  children: (0, P.tZ)(q, {
                                    testID: V._M.order_xproduct_id,
                                    productDetail: e,
                                  }),
                                });
                              }),
                      }),
                      (0, P.tZ)(N, { remark: i }),
                    ],
                  })
                : (0, P.tZ)(f.View, {});
            };
          function N(e) {
            var t = e.remark;
            return t
              ? (0, P.tZ)(f.View, {
                  style: k.remark_view,
                  children: (0, P.tZ)(f.Text, { style: k.remark, children: t }),
                })
              : (0, P.tZ)(f.View, {});
          }
          function q(e) {
            var t = e.productDetail,
              n = e.testID;
            return (0, P.tZ)(f.View, {
              testID: n,
              style: k.product_view,
              children: t.canRefund
                ? (0, P.tZ)(
                    U,
                    (0, x.Z)(
                      { isSelected: null == t ? void 0 : t.isSelected },
                      t
                    )
                  )
                : (0, P.tZ)(Y, (0, x.Z)({}, t)),
            });
          }
          function U(e) {
            var t = e.title,
              n = e.isSelected;
            return (0, P.BX)(f.View, {
              style: S.spacebetween_center_row,
              children: [
                (0, P.tZ)(f.Text, { style: k.title_product, children: t }),
                (0, P.tZ)(J, { isSelected: n }),
              ],
            });
          }
          function Y(e) {
            var t = e.title,
              n = e.unrefundableReason;
            return (0, P.BX)(f.View, {
              style: (0, x.Z)(
                (0, x.Z)({}, S.spacebetween_center_row),
                k.reason_view
              ),
              children: [
                (0, P.tZ)(f.Text, { style: k.title_product, children: t }),
                (0, P.tZ)(f.Text, { style: k.reason, children: n }),
              ],
            });
          }
          function J(e) {
            return e.isSelected
              ? (0, P.tZ)(C.Z, {
                  style: { color: b.Z.mainColor, fontSize: 24 },
                  children: "󰲡",
                })
              : (0, P.tZ)(C.Z, {
                  style: { color: b.Z.grey_cc, fontSize: 24 },
                  children: "󰲠",
                });
          }
          var G = n(91006),
            K = n.n(G),
            Q = (function (e) {
              (0, d.Z)(n, e);
              var t = (0, c.Z)(n);
              function n(e) {
                var i;
                return (
                  (0, r.Z)(this, n),
                  (i = t.call(this, e)),
                  (0, a.Z)((0, l.Z)(i), "getFormatePrice", function (e) {
                    if (null == e) return e;
                    if ("string" == typeof e) {
                      var t = parseInt(e);
                      return i.getFormatePrice(t);
                    }
                    return e < 0
                      ? "-¥".concat(Math.abs(e))
                      : "¥".concat(Math.abs(e));
                  }),
                  i
                );
              }
              return (
                (0, o.Z)(n, [
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props.priceList;
                      return (0, P.tZ)(f.View, {
                        style: {
                          paddingTop: 7,
                          paddingBottom: 8,
                          backgroundColor: b.Z.white,
                          flex: 1,
                        },
                        children:
                          t.length > 0 &&
                          t.map(function (t, n) {
                            return (0,
                            P.BX)(f.View, { style: $.item_row, children: [(0, P.tZ)(f.View, { style: { flex: 1 }, children: (0, P.tZ)(f.Text, { style: $.text1299, children: t.title }) }), (0, P.BX)(f.View, { style: (0, x.Z)((0, x.Z)({}, $.flexRow), { alignItems: "center" }), children: [(0, P.tZ)(f.Text, { style: $.text1299, children: t.isCoupon ? "- ¥" + t.price + " " : e.getFormatePrice(t.price) }), (0, P.BX)(f.Text, { style: (0, x.Z)((0, x.Z)({}, $.text1299), { marginLeft: 5 }), children: ["X", t.count, "P" === t.unit || "人" === t.unit ? "人" : "份"] })] })] }, "price_" + t.type + t.price + "_" + n);
                          }),
                      });
                    },
                  },
                ]),
                n
              );
            })(s.Component);
          (0, a.Z)(Q, "propTypes", {
            priceList: K().arrayOf(
              K().shape({
                title: K().string,
                type: K().string,
                price: K().number,
                count: K().number,
                isCoupon: K().bool,
              })
            ),
          }),
            (0, a.Z)(Q, "defaultProps", { priceList: [] });
          var $ = (0, v.lW)({
              item_row: {
                backgroundColor: b.Z.white,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 1,
                paddingBottom: 1,
                alignItems: "center",
              },
              text1599: { fontSize: 15, color: b.Z.grey_99 },
              text1299: { fontSize: 12, color: b.Z.grey_99 },
              flex1: { flex: 1 },
              row: { display: "flex", flexDirection: "row" },
              flexRow: { display: "flex", flexDirection: "row" },
            }),
            ee = function (e) {
              var t = e.needPayToUsPrice,
                n = e.needPayToUsPriceList,
                i = e.paidPriceList,
                r = e.paidPrice,
                o = e.explanation,
                l = e.showRefundRemarkClick,
                d = e.priceDetailHint;
              return (0, P.BX)(f.View, {
                style: k.card_view_refund_detail,
                children: [
                  (0, P.tZ)(f.Text, {
                    style: (0, x.Z)((0, x.Z)({}, k.big_title), {
                      marginBottom: 14,
                    }),
                    children: "退票明细",
                  }),
                  !!d && (0, P.tZ)(te, { priceDetailHint: d }),
                  (0, P.BX)(P.HY, {
                    children: [
                      (0, P.tZ)(ne, {
                        title: "退订产品",
                        isHideTop: !0,
                        showRefundRemarkClick: l,
                        explanation: o,
                        price: r,
                      }),
                      (0, P.tZ)(Q, { priceList: i }),
                      (0, P.tZ)(ne, {
                        title: "需扣款项",
                        isHideTop: !1,
                        showRefundRemarkClick: l,
                        explanation: "",
                        price: t,
                      }),
                      (0, P.tZ)(Q, { priceList: n }),
                    ],
                  }),
                ],
              });
            };
          function te(e) {
            var t = e.priceDetailHint;
            return (0, P.tZ)(f.View, {
              style: {
                backgroundColor: "#fffaf5",
                padding: 10,
                borderRadius: 8,
                marginBottom: 13,
                marginTop: -2,
              },
              children: (0, P.tZ)(f.Text, {
                style: { color: "#fd9227", fontSize: 12, lineHeight: 16 },
                children: t,
              }),
            });
          }
          function ne(e) {
            var t = e.isHideTop,
              n = e.showRefundRemarkClick,
              i = e.explanation,
              r = e.title,
              o = e.price;
            return (0, P.BX)(f.View, {
              style: (0, x.Z)((0, x.Z)({}, k.price_list_title), {
                paddingTop: t ? 0 : 13,
              }),
              children: [
                (0, P.BX)(f.View, {
                  style: (0, x.Z)((0, x.Z)((0, x.Z)({}, re.row), re.flex1), {
                    alignItems: "center",
                  }),
                  onClick: n,
                  children: [
                    (0, P.tZ)(f.Text, {
                      style: { fontSize: 16, color: b.Z.grey_33 },
                      children: r,
                    }),
                    !!t &&
                      !!i &&
                      (0, P.tZ)(C.Z, {
                        style: {
                          fontSize: 16,
                          color: b.Z.grey_99,
                          marginLeft: 4,
                          marginTop: 1,
                        },
                        children: "󰲫",
                      }),
                  ],
                }),
                (0, P.tZ)(f.Text, {
                  style: { fontSize: 16, color: b.Z.grey_33 },
                  children: "待确认" == o ? "待确认" : "¥" + o,
                }),
              ],
            });
          }
          var ie,
            re = (0, v.lW)({
              flex1: { flex: 1 },
              row: { display: "flex", flexDirection: "row" },
            }),
            oe = n(39407),
            le = n(90729),
            de = n(32970),
            ce = n(85376),
            ae = n(851),
            se = h().getSystemInfoSync(),
            ue = se.windowWidth,
            fe =
              (se.windowHeight,
              function (e) {
                var t = e.title,
                  n = e.descs,
                  i = e.hide;
                return (0, P.tZ)(f.View, {
                  style: (0, x.Z)((0, x.Z)({}, ge.container), {
                    width: ue,
                    alignItems: "center",
                    justifyContent: "center",
                  }),
                  children: (0, P.BX)(f.View, {
                    style: ge.content,
                    children: [
                      (0, P.BX)(f.View, {
                        children: [
                          (0, P.tZ)(f.View, {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            children: (0, P.tZ)(f.Text, {
                              style: ge.title,
                              children: t,
                            }),
                          }),
                          !!n &&
                            n.map(function (e) {
                              return (0,
                              P.BX)(f.View, { style: ge.item_desc, children: [(0, P.tZ)(f.View, { style: ge.circle }), (0, P.tZ)(f.Text, { style: ge.textStyle, children: e })] });
                            }),
                        ],
                      }),
                      (0, P.tZ)(f.View, {
                        style: ge.btn_content,
                        onClick: function () {
                          i();
                        },
                        children: (0, P.tZ)(f.Text, {
                          style: ge.btn_text,
                          children: "我知道了",
                        }),
                      }),
                    ],
                  }),
                });
              }),
            ge = (0, v.lW)({
              item_desc: {
                display: "flex",
                flexDirection: "row",
                marginBottom: 10,
              },
              circle: {
                height: 4,
                width: 4,
                borderRadius: 4,
                backgroundColor: b.Z.mainColor,
                marginTop: 8,
                marginRight: 6,
              },
              btn_content: {
                height: 44,
                backgroundColor: b.Z.mainColor,
                borderRadius: 6,
                marginTop: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              btn_text: { fontSize: 16, color: "white", fontWeight: "bold" },
              title: {
                marginBottom: 17,
                textAlign: "center",
                fontSize: 20,
                color: b.Z.grey_22,
                fontWeight: "bold",
              },
              content: {
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                overflow: "hidden",
                paddingLeft: 25,
                paddingRight: 25,
                paddingTop: 20,
                paddingBottom: 20,
                backgroundColor: "white",
              },
              container: {},
              textStyle: {
                fontSize: 14,
                color: b.Z.grey_66,
                marginBottom: 10,
                lineHeight: 20,
              },
            }),
            he = h().getSystemInfoSync().windowWidth,
            pe =
              (0, Z.h)()(
                (ie = (function (e) {
                  (0, d.Z)(n, e);
                  var t = (0, c.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, r.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, a.Z)((0, l.Z)(i), "refundModel", void 0),
                      (0, a.Z)((0, l.Z)(i), "hasInstallAlipay", !0),
                      (0, a.Z)((0, l.Z)(i), "canClickNext", !0),
                      (0, a.Z)((0, l.Z)(i), "showRefundDesc", function () {
                        var e, t, n;
                        !(function (e) {
                          var t = e.descs;
                          console.log("showRefundDesc");
                          var n = (0, g.getCurrentInstance)().page;
                          null == n ||
                            n.showCommonDrawer({
                              hideTitle: !0,
                              hideClose: !0,
                              exclusive: !0,
                              content: function (e) {
                                var n = e.onClose;
                                return (0, P.tZ)(fe, {
                                  title: "退订产品说明",
                                  descs: t,
                                  hide: n,
                                });
                              },
                              className: "remark-pop",
                            });
                        })({
                          descs:
                            null === (e = i.refundModel) ||
                            void 0 === e ||
                            null === (t = e.getRefundData()) ||
                            void 0 === t ||
                            null === (n = t.hintText) ||
                            void 0 === n
                              ? void 0
                              : n.explanation,
                        });
                      }),
                      (0, a.Z)((0, l.Z)(i), "checkBaggageMaxRule", function () {
                        le.Z.isEmptyArray(i.state.intlRefundRule)
                          ? le.Z.isEmptyObject(i.state.inlandRefundRule)
                            ? h().showToast({
                                title: "请在订单详情页查看最新退改",
                              })
                            : (0, ce.b)({
                                rescheduleRefundRemark:
                                  i.state.inlandRefundRule,
                                dptName: "",
                                arrName: "",
                              })
                          : (0, de.ys)({
                              navigationType:
                                i.state.intlRefundRule.length >= 2
                                  ? "roundTrip"
                                  : "normal",
                              noteArray: i.state.intlRefundRule,
                              refundAndChangeDetails:
                                i.state.intlRefundAndChangeDetails,
                            });
                      }),
                      (0, a.Z)(
                        (0, l.Z)(i),
                        "closeBaggageMaxRuleModal",
                        function () {
                          i.setState({ isShowFlightRefundRulePageModal: !1 });
                        }
                      ),
                      (0, a.Z)(
                        (0, l.Z)(i),
                        "selectPassengerXProduct",
                        function (e, t, n, r) {
                          var o = i.state.segmentList;
                          if ("useProduct" == r) {
                            var l = o[e].refundReduceLists[n];
                            (l.isSelected = !l.isSelected),
                              (o[e].reduceTokenObj[l.token].useSelected =
                                l.isSelected);
                          } else {
                            var d = o[e].canRefundProductLists[n];
                            (d.isSelected = !d.isSelected),
                              o[e].reduceTokenObj[d.token] &&
                                (o[e].reduceTokenObj[d.token].refundSelected =
                                  d.isSelected);
                          }
                          i.refundModel.setSelectSegmentList(o),
                            i.refundModel.update(),
                            i.setState({ segmentList: o });
                        }
                      ),
                      (0, a.Z)(
                        (0, l.Z)(i),
                        "selectOrderXProduct",
                        function (e) {
                          var t = i.state.xProducts;
                          (t[e].isSelected = !(null != t && t[e].isSelected)),
                            i.refundModel.update(null, t),
                            i.setState({ xProducts: t });
                        }
                      ),
                      (0, a.Z)((0, l.Z)(i), "goNextPage", function () {
                        var e = (0, A.O)(i.state.segmentList);
                        e
                          ? (0, u.v)(
                              "",
                              e,
                              {
                                text: "否",
                                callback: function () {
                                  i.openConfirm();
                                },
                              },
                              {
                                text: "是",
                                callback: function () {
                                  i.selectAllPassengerProduct(function () {
                                    i.openConfirm();
                                  });
                                },
                              }
                            )
                          : i.openConfirm();
                      }),
                      (0, a.Z)((0, l.Z)(i), "openConfirm", function () {
                        i.navigateTo({
                          url: "/pages/taroCRN/flight/pagesRefund/refundConfirm/index",
                          data: { refundModel: i.refundModel },
                        });
                      }),
                      (0, a.Z)(
                        (0, l.Z)(i),
                        "selectAllPassengerProduct",
                        function (e) {
                          var t = i.state.segmentList;
                          null == t ||
                            t.forEach(function (e) {
                              var t;
                              null == e ||
                                null === (t = e.canRefundProductLists) ||
                                void 0 === t ||
                                t.forEach(function (t) {
                                  var n;
                                  t.isSelected ||
                                    (null != e &&
                                      null !==
                                        (n = e.reduceTokenObj[t.token]) &&
                                      void 0 !== n &&
                                      n.useSelected) ||
                                    (t.isSelected = !0);
                                });
                            }),
                            i.refundModel.setSelectSegmentList(t),
                            i.refundModel.update(),
                            i.setState({ segmentList: t }, function () {
                              e && e();
                            });
                        }
                      ),
                      (i.refundModel = null == e ? void 0 : e.passProps),
                      (i.state = {
                        segmentList: [],
                        isShowFlightRefundRulePageModal: !1,
                        intlRefundRule: [],
                        intlRefundAndChangeDetails: [],
                        inlandRefundRule: {},
                        hintText: { xProductHint: "" },
                        xProducts: [],
                      }),
                      i
                    );
                  }
                  return (
                    (0, o.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, g.getCurrentInstance)();
                          e &&
                            e.router &&
                            e.router.params &&
                            (this.refundModel = (0, y.O)(e.router.params)),
                            this.initData();
                        },
                      },
                      {
                        key: "initData",
                        value: function () {
                          var e,
                            t,
                            n,
                            i,
                            r,
                            o,
                            l,
                            d,
                            c,
                            a,
                            s,
                            u = this,
                            f = this.refundModel.getSelectSegmentList(),
                            g = [],
                            h =
                              null === (e = this.refundModel) || void 0 === e
                                ? void 0
                                : e.getSelectReason();
                          null == f ||
                            f.forEach(function (e, t) {
                              var n;
                              (e.refundTicketString = (0, A.PC)(
                                e.selectTickets
                              )),
                                (e.announce =
                                  (null == h ? void 0 : h.applyTips) || "");
                              var i = (0, A.eu)(
                                  null == e ? void 0 : e.selectTickets,
                                  !(null != h && h.isVoluntary),
                                  u.refundModel
                                ),
                                r = i.canRefundProductLists,
                                o = i.canNotRefundProductLists,
                                l = i.refundReduceLists,
                                d = i.reduceTokenObj;
                              (e.canRefundProductLists = r),
                                (e.canNotRefundProductLists = o),
                                (e.refundReduceLists = l),
                                (e.reduceTokenObj = d),
                                null === (n = e.selectTickets) ||
                                  void 0 === n ||
                                  n.forEach(function (e) {
                                    (e.selectSegmentIndex = t), g.push(e);
                                  });
                            }),
                            this.refundModel.update(g),
                            this.initRefundRule(f),
                            this.setState({
                              segmentList: f,
                              hintText:
                                null === (t = this.refundModel) ||
                                void 0 === t ||
                                null === (n = t.getRefundData()) ||
                                void 0 === n
                                  ? void 0
                                  : n.hintText,
                              xProducts:
                                null === (i = this.refundModel) ||
                                void 0 === i ||
                                null === (r = i.getRefundData()) ||
                                void 0 === r
                                  ? void 0
                                  : r.xProducts,
                              inlandRefundRule:
                                null === (o = this.refundModel) ||
                                void 0 === o ||
                                null === (l = o.getOrderData()) ||
                                void 0 === l
                                  ? void 0
                                  : l.inlandRefundRule,
                              intlRefundRule:
                                null === (d = this.refundModel) ||
                                void 0 === d ||
                                null === (c = d.getOrderData()) ||
                                void 0 === c
                                  ? void 0
                                  : c.intlRefundRule,
                              intlRefundAndChangeDetails:
                                null === (a = this.refundModel) ||
                                void 0 === a ||
                                null === (s = a.getOrderData()) ||
                                void 0 === s
                                  ? void 0
                                  : s.intlRefundAndChangeDetails,
                            });
                        },
                      },
                      {
                        key: "initRefundRule",
                        value: function (e) {
                          var t = this;
                          null == e ||
                            e.forEach(function (e) {
                              var n,
                                i,
                                r,
                                o =
                                  null == e ||
                                  null === (n = e.selectTickets) ||
                                  void 0 === n
                                    ? void 0
                                    : n.filter(function (e) {
                                        return (
                                          "成人票" ==
                                          (null == e ? void 0 : e.passengerType)
                                        );
                                      }),
                                l =
                                  null == e ||
                                  null === (i = e.selectTickets) ||
                                  void 0 === i
                                    ? void 0
                                    : i.filter(function (e) {
                                        return (
                                          "儿童票" ==
                                          (null == e ? void 0 : e.passengerType)
                                        );
                                      }),
                                d =
                                  null == e ||
                                  null === (r = e.selectTickets) ||
                                  void 0 === r
                                    ? void 0
                                    : r.filter(function (e) {
                                        return (
                                          "婴儿票" ==
                                          (null == e ? void 0 : e.passengerType)
                                        );
                                      });
                              (e.isExitAdult =
                                (null == o ? void 0 : o.length) > 0),
                                (e.isExitChildren =
                                  (null == l ? void 0 : l.length) > 0),
                                (e.isExitBaby =
                                  (null == d ? void 0 : d.length) > 0),
                                (e.adultRefundFee = t.getRefundFee(
                                  null == o ? void 0 : o[0],
                                  "成人"
                                )),
                                (e.childRefundFee = t.getRefundFee(
                                  null == l ? void 0 : l[0],
                                  "儿童"
                                )),
                                (e.babyRefundFee = t.getRefundFee(
                                  null == d ? void 0 : d[0],
                                  "婴儿"
                                ));
                            });
                        },
                      },
                      {
                        key: "getRefundFee",
                        value: function (e, t) {
                          var n, i, r;
                          if (!e) return "";
                          var o =
                            null === (n = this.refundModel) || void 0 === n
                              ? void 0
                              : n.getRefundPriceDetail(e);
                          return null !== (i = this.refundModel) &&
                            void 0 !== i &&
                            i.getIsValidPrice()
                            ? ((null == o ||
                              null ===
                                (r = o.find(function (e) {
                                  return (
                                    "REFUND_FEE" ===
                                    (null == e ? void 0 : e.code)
                                  );
                                })) ||
                              void 0 === r
                                ? void 0
                                : r.price) || "0") + "/人（".concat(t, "）")
                            : "待确认（".concat(t, "）");
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
                            o,
                            l,
                            d = this;
                          return this.refundModel
                            ? (0, P.BX)(f.View, {
                                style: { flex: 1 },
                                children: [
                                  (0, P.BX)(f.View, {
                                    style: {
                                      display: "flex",
                                      height: "100%",
                                      backgroundColor: "#f5f5f5",
                                      flexDirection: "column",
                                    },
                                    children: [
                                      (0, P.tZ)(m.Z, { title: "退票申请" }),
                                      (0, P.tZ)(f.View, {
                                        style: { height: 0.5, width: he },
                                      }),
                                      (0, P.tZ)(f.ScrollView, {
                                        style: {
                                          zIndex: 2,
                                          paddingBottom: 100,
                                        },
                                        contentContainerStyle: {
                                          paddingBottom: 100,
                                        },
                                        children: (0, P.BX)(f.View, {
                                          style: k.scrollview_in_view,
                                          children: [
                                            (0, P.BX)(f.View, {
                                              style: k.top_content,
                                              children: [
                                                null ===
                                                  (e =
                                                    this.state.segmentList) ||
                                                void 0 === e
                                                  ? void 0
                                                  : e.map(function (e, t) {
                                                      var n, i, r;
                                                      return (0,
                                                      P.tZ)(X, { isFree: null === (n = d.refundModel) || void 0 === n ? void 0 : n.getIsFreePrice(), isValidPrice: null === (i = d.refundModel) || void 0 === i ? void 0 : i.getIsValidPrice(), reason: null === (r = d.refundModel) || void 0 === r ? void 0 : r.getSelectReason(), segIndex: t, checkBaggageMaxRule: d.checkBaggageMaxRule, selectOtherProduct: d.selectPassengerXProduct, segmentItem: e });
                                                    }),
                                                (0, P.tZ)(E, {
                                                  selectProduct:
                                                    this.selectOrderXProduct,
                                                  xProductHint:
                                                    null === (t = this.state) ||
                                                    void 0 === t ||
                                                    null === (n = t.hintText) ||
                                                    void 0 === n
                                                      ? void 0
                                                      : n.xProductHint,
                                                  xProducts:
                                                    this.state.xProducts,
                                                }),
                                                (0, P.tZ)(ee, {
                                                  priceDetailHint:
                                                    null ===
                                                      (i =
                                                        this.state.hintText) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : i.refundDetailHint,
                                                  paidPriceList:
                                                    this.refundModel.getPaidPriceArr(),
                                                  needPayToUsPrice:
                                                    this.refundModel.getRefundPrice(),
                                                  needPayToUsPriceList:
                                                    this.refundModel.getRefundPriceArr(),
                                                  paidPrice:
                                                    this.refundModel.getPaidPrice(),
                                                  explanation:
                                                    null ===
                                                      (r = this.refundModel) ||
                                                    void 0 === r ||
                                                    null ===
                                                      (o = r.getRefundData()) ||
                                                    void 0 === o ||
                                                    null === (l = o.hintText) ||
                                                    void 0 === l
                                                      ? void 0
                                                      : l.explanation,
                                                  showRefundRemarkClick:
                                                    this.showRefundDesc,
                                                }),
                                              ],
                                            }),
                                            (0, P.tZ)(w.Z, {
                                              style: {
                                                paddingTop: 15,
                                                marginBottom: 80,
                                              },
                                              backgroundColor: "#f5f5f5",
                                              url: "http://images3.c-ctrip.com/ztrip/img/chuxingbaozheng_shy_zx@3x.png",
                                              imageHeight: 58,
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, P.tZ)(oe.Z, {
                                        needBorder: !0,
                                        totalPriceTitle: "退款：",
                                        isHideIcon: !1,
                                        totalPriceRemark:
                                          this.refundModel.getSumOfPriceForDisplay(),
                                        needShowPriceDetail: !1,
                                        clickNext: this.goNextPage,
                                      }),
                                    ],
                                  }),
                                  (0, P.tZ)(ae.Z, {
                                    ref: function (e) {
                                      d.onDrawerAttach(e, !0);
                                    },
                                  }),
                                ],
                              })
                            : (0, P.tZ)(f.View, {});
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return p.Z.isTieyou ? "10650051903" : "10650051901";
                        },
                      },
                    ]),
                    n
                  );
                })(s.Component))
              ) || ie;
          Page(
            (0, i.createPageConfig)(
              pe,
              "pages/taroCRN/flight/pagesRefund/refundApply/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#f5f5f5",
                backgroundColorTop: "#f5f5f5",
                backgroundColorBottom: "#f5f5f5",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                enablePullDownRefresh: !1,
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
            6189, 22843, 6878, 71229, 8014, 81198, 10313, 30120, 8905, 22175,
            87479, 90719, 27849, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(8245);
          }
        ),
          e.O();
      },
    ]);
})();
