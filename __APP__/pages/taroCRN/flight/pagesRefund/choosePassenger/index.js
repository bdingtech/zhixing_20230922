!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../../../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [32129],
      {
        99268: function (e, t, n) {
          var i = n(32180),
            o = n(298),
            r = n(57042),
            l = n(24460),
            a = n(81876),
            d = n(21867),
            s = n(86066),
            c = n(45023),
            g = n(52500),
            u = n(92954),
            f = n.n(u),
            h = n(71515),
            m = n(96677),
            b = n(33357),
            p = n(49528),
            y = f().getSystemInfoSync().windowWidth,
            _ = "#F76E21",
            v = (0, p.lW)({
              reason_style: {
                flex: 1,
                marginLeft: 15,
                lineHeight: 16,
                textAlign: "right",
              },
              remark_together_view: {
                borderRadius: 6,
                backgroundColor: "#FFF8ED",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 6,
                paddingBottom: 6,
                marginLeft: 12,
                marginRight: 12,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 6,
              },
              remark_together_text: {
                color: _,
                fontSize: 12,
                flex: 1,
                marginLeft: 6,
                lineHeight: 15,
              },
              remark_together_icon: { color: _, fontSize: 13, marginTop: 2 },
              title_view: {
                paddingTop: 16,
                paddingLeft: 15,
                paddingBottom: 4,
                width: y,
              },
              title_remark: { fontSize: 12, color: m.Z.grey_99 },
              container: { backgroundColor: m.Z.grey_f8, flex: 1 },
              flight_info_container: {
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: m.Z.white,
                marginTop: 15,
              },
              btn_container: {
                backgroundColor: m.Z.zxMainColor,
                paddingTop: 9,
                paddingBottom: 9,
                width: 72,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 18,
              },
              btn_container_passenger: {
                backgroundColor: m.Z.zxMainColor,
                paddingTop: 6,
                paddingBottom: 6,
                width: 56,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 18,
              },
              passenger_view: {
                backgroundColor: m.Z.grey_f8,
                borderRadius: 6,
                paddingLeft: 15,
                paddingRight: 15,
                marginTop: 14,
                marginBottom: 10,
                marginLeft: 15,
                marginRight: 15,
                paddingTop: 10,
                paddingBottom: 5,
              },
              route_label: {
                fontSize: 13,
                color: m.Z.mainColor,
                fontWeight: "500",
              },
              route_title: {
                fontSize: 18,
                color: m.Z.grey_33,
                fontWeight: "bold",
              },
              route_text: { fontSize: 13, color: m.Z.grey_99 },
              flight_info_tag: {
                height: 22,
                borderRadius: 11,
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 8,
                paddingRight: 8,
                marginRight: 6,
                backgroundColor: "#EAF5FF",
              },
              passenger_container: {
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 7,
                height: 24,
                alignItems: "center",
              },
              table: {
                backgroundColor: m.Z.white,
                marginLeft: 8,
                marginRight: 8,
                marginTop: 8,
                borderRadius: 10,
                overflow: "hidden",
                paddingBottom: 6,
              },
              bottomt_tab_view: {
                backgroundColor: m.Z.white,
                height: 54,
                width: y,
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              bottom_tab_icon: { fontSize: 18 },
              all_select_view: { fontSize: 16, color: m.Z.grey_33 },
              line: {
                height: 0.5,
                flex: 1,
                marginTop: 15,
                marginBottom: 15,
                backgroundColor: m.Z.grey_e5,
                marginRight: 10,
              },
              bottom_btn: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: 15,
                marginRight: 15,
              },
              bottom_btn_next: {
                height: 44,
                flex: 1,
                backgroundColor: m.Z.zxMainColor,
                borderRadius: 21,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              bottom_btn_text: { fontSize: 18, color: "white" },
            }),
            Z = n(53550),
            k = n(72077),
            w = n(48813),
            x = function (e) {
              var t = e.segmentItem,
                n = e.selectTicketFn,
                i = e.selectTicketObj,
                o = e.mustRefundTogether;
              return t
                ? (0, w.BX)(h.View, {
                    style: v.table,
                    children: [
                      (0, w.tZ)(h.View, {
                        style: v.flight_info_container,
                        children: (0, w.BX)(h.View, {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          },
                          children: [
                            (0, w.BX)(h.View, {
                              style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              },
                              children: [
                                !!t.tagLabel &&
                                  (0, w.tZ)(h.View, {
                                    style: v.flight_info_tag,
                                    children: (0, w.tZ)(h.Text, {
                                      style: v.route_label,
                                      children: t.tagLabel,
                                    }),
                                  }),
                                (0, w.tZ)(h.Text, {
                                  numberOfLines: 1,
                                  style: v.route_title,
                                  children: null == t ? void 0 : t.route,
                                }),
                              ],
                            }),
                            (0, w.BX)(h.Text, {
                              style: v.route_text,
                              children: [
                                null == t ? void 0 : t.formateDepartDate,
                                "起飞",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, w.tZ)(h.View, {
                        style: v.passenger_view,
                        children:
                          !!t.tickets &&
                          t.tickets.map(function (e) {
                            return (0,
                            w.tZ)(T, { ticket: e, mustRefundTogether: o, selectTicketObj: i, selectTicketFn: n });
                          }),
                      }),
                    ],
                  })
                : (0, w.tZ)(h.View, {});
            };
          function T(e) {
            var t,
              n,
              i = e.ticket,
              r = e.selectTicketFn,
              l = e.selectTicketObj,
              a = e.mustRefundTogether,
              d = i.refundable,
              s = i.passengerName,
              c = i.unRefundableReason,
              g =
                !!i.token && !!a[i.token]
                  ? { fontSize: 14, color: "#F76E21" }
                  : { fontSize: 14, color: m.Z.grey_33 },
              u = d
                ? (0, o.Z)({ lineHeight: 16 }, g)
                : { lineHeight: 16, fontSize: 14, color: m.Z.grey_99 },
              f =
                null == l || null === (t = l[i.uniKey]) || void 0 === t
                  ? void 0
                  : t.isSelected,
              b =
                null == l || null === (n = l[i.uniKey]) || void 0 === n
                  ? void 0
                  : n.otherTogetherMessage;
            return (0, w.BX)(h.View, {
              children: [
                (0, w.BX)(h.View, {
                  style: v.passenger_container,
                  children: [
                    (0, w.tZ)(h.Text, { style: u, children: s }),
                    d
                      ? (0, w.tZ)(h.View, {
                          onClick: function () {
                            r(i);
                          },
                          testID: k._M.passenger_item_id,
                          children: (0, w.tZ)(R, { isSelected: f }),
                        })
                      : (0, w.tZ)(h.Text, {
                          style: (0, o.Z)(
                            (0, o.Z)({}, { fontSize: 14, color: m.Z.grey_99 }),
                            v.reason_style
                          ),
                          children: !!c && c,
                        }),
                  ],
                }),
                !!b &&
                  (0, w.BX)(h.View, {
                    style: v.remark_together_view,
                    children: [
                      (0, w.tZ)(Z.Z, {
                        style: v.remark_together_icon,
                        children: "󰲫",
                      }),
                      (0, w.tZ)(h.Text, {
                        style: v.remark_together_text,
                        children: b,
                      }),
                    ],
                  }),
              ],
            });
          }
          function R(e) {
            return e.isSelected
              ? (0, w.tZ)(Z.Z, {
                  style: (0, o.Z)((0, o.Z)({}, v.bottom_tab_icon), {
                    color: "#198CFF",
                  }),
                  children: "󰲡",
                })
              : (0, w.tZ)(Z.Z, {
                  style: (0, o.Z)((0, o.Z)({}, v.bottom_tab_icon), {
                    color: "#ccc",
                  }),
                  children: "󰲠",
                });
          }
          var C,
            S = n(23577),
            j = n(87298),
            B = n(59582),
            L = n(90582),
            z = n(21145),
            I = n(36168),
            V = f().getSystemInfoSync().windowWidth,
            M =
              (0, j.h)()(
                (C = (function (e) {
                  (0, d.Z)(n, e);
                  var t = (0, s.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, r.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, c.Z)((0, a.Z)(i), "refundModel", void 0),
                      (0, c.Z)((0, a.Z)(i), "selectPassenger", function (e) {
                        var t,
                          n = i.state,
                          r = n.selectTicketObj,
                          l = n.segmentList;
                        if (
                          null !== (t = r[e.uniKey]) &&
                          void 0 !== t &&
                          t.isSelected
                        )
                          r[e.uniKey] = (0, o.Z)(
                            (0, o.Z)({}, e),
                            {},
                            { isSelected: !1 }
                          );
                        else {
                          var a = (0, b.Hv)(r, e);
                          if (a) return void (0, L.v)("", a);
                          r[e.uniKey] = (0, o.Z)(
                            (0, o.Z)({}, e),
                            {},
                            { isSelected: !0 }
                          );
                        }
                        var d = (0, b.iN)(r, l);
                        Object.keys(r).forEach(function (e) {
                          var t = r[e];
                          if (null != t && t.isSelected) {
                            var n =
                              ((null == t
                                ? void 0
                                : t.mustTogetherRefundToken) &&
                                (0, b.JN)(t, d)) ||
                              "";
                            r[t.uniKey].otherTogetherMessage = n;
                          }
                        }),
                          i.setState({
                            selectTicketObj: r,
                            mustRefundTogether: d,
                          });
                      }),
                      (0, c.Z)((0, a.Z)(i), "goNextPage", function () {
                        var e, t, n, o, r;
                        i.ubtTrace("flt_tpxzcjr_xyb_click");
                        var l = i.state,
                          a = l.mustRefundTogether,
                          d = l.selectTicketObj;
                        if (
                          (null === (e = Object.keys(a)) || void 0 === e
                            ? void 0
                            : e.length) > 0
                        )
                          (0, L.v)("", "请按照提示勾选乘机人进行退票");
                        else if (
                          0 !=
                          (null === (t = Object.keys(d)) ||
                          void 0 === t ||
                          null ===
                            (n = t.filter(function (e) {
                              var t;
                              return null === (t = d[e]) || void 0 === t
                                ? void 0
                                : t.isSelected;
                            })) ||
                          void 0 === n
                            ? void 0
                            : n.length)
                        ) {
                          var s = [];
                          null === (o = i.state.segmentList) ||
                            void 0 === o ||
                            o.forEach(function (e) {
                              var t,
                                n = [],
                                i = !1;
                              null == e ||
                                null === (t = e.tickets) ||
                                void 0 === t ||
                                t.forEach(function (t) {
                                  var o;
                                  null !== (o = d[t.uniKey]) &&
                                    void 0 !== o &&
                                    o.isSelected &&
                                    ((t.selected = !0),
                                    n.push(t),
                                    i || s.push(e),
                                    (i = !0));
                                }),
                                (e.selectTickets = n);
                            }),
                            i.refundModel.setSelectSegmentList(s);
                          var c = (0, b.b3)(
                            null == s || null === (r = s[0]) || void 0 === r
                              ? void 0
                              : r.selectTickets
                          );
                          if ((i.refundModel.setSelectReason(null, !1), c)) {
                            var g, u, f;
                            console.log("去申请2");
                            var h =
                              null == s ||
                              null === (g = s[0]) ||
                              void 0 === g ||
                              null === (u = g.selectTickets) ||
                              void 0 === u ||
                              null === (f = u[0]) ||
                              void 0 === f
                                ? void 0
                                : f.refundReasonList[0];
                            return (
                              i.refundModel.setSelectReason(h),
                              void i.navigateTo({
                                url: "/pages/taroCRN/flight/pagesRefund/refundApply/index",
                                data: { refundModel: i.refundModel },
                              })
                            );
                          }
                          console.log("去原因2"),
                            i.navigateTo({
                              url: "/pages/taroCRN/flight/pagesRefund/chooseReason/index",
                              data: { refundModel: i.refundModel },
                            });
                        } else (0, L.v)("", "请选择退票人~");
                      }),
                      (i.state = {
                        segmentList: [],
                        selectTicketObj: {},
                        mustRefundTogether: {},
                      }),
                      i
                    );
                  }
                  return (
                    (0, l.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, u.getCurrentInstance)();
                          e &&
                            e.router &&
                            e.router.params &&
                            (this.refundModel = (0, B.O)(e.router.params)),
                            this.setState({
                              segmentList: this.refundModel.getSegmentList(),
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state.segmentList;
                          return (0, w.BX)(h.View, {
                            style: {
                              display: "flex",
                              height: "100%",
                              backgroundColor: "#f5f5f5",
                              flexDirection: "column",
                            },
                            children: [
                              (0, w.tZ)(z.Z, { title: "选择退票乘客" }),
                              (0, w.tZ)(h.View, {
                                style: {
                                  height: 0.5,
                                  width: V,
                                  backgroundColor: m.Z.main_bg,
                                },
                              }),
                              (0, w.tZ)(h.ScrollView, {
                                style: { zIndex: 2, paddingBottom: 120 },
                                contentContainerStyle: { paddingBottom: 120 },
                                children: (0, w.tZ)(h.View, {
                                  children:
                                    null == t
                                      ? void 0
                                      : t.map(function (t) {
                                          return (0,
                                          w.tZ)(x, { segmentItem: t, mustRefundTogether: e.state.mustRefundTogether, selectTicketObj: e.state.selectTicketObj, selectTicketFn: e.selectPassenger });
                                        }),
                                }),
                              }),
                              (0, w.tZ)(I.Z, {
                                children: (0, w.tZ)(h.View, {
                                  style: v.bottomt_tab_view,
                                  children: (0, w.tZ)(h.View, {
                                    style: { flex: 1 },
                                    onClick: this.goNextPage,
                                    children: (0, w.tZ)(h.View, {
                                      style: v.bottom_btn_next,
                                      children: (0, w.tZ)(h.Text, {
                                        style: v.bottom_btn_text,
                                        children: "下一步",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return S.Z.isTieyou ? "10650051899" : "10650051897";
                        },
                      },
                    ]),
                    n
                  );
                })(g.Component))
              ) || C;
          Page(
            (0, i.createPageConfig)(
              M,
              "pages/taroCRN/flight/pagesRefund/choosePassenger/index",
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
          [98946, 7160, 83004, 71229, 10313, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(99268);
          }
        ),
          e.O();
      },
    ]);
})();
