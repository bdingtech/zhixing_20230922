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
    require("../../../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../../../sub-common/023c833735f89bfd8e4bfa6050ae7715.js"),
    require("../../../sub-common/6c29063ea7407d5aad2c6709ea72811d.js"),
    require("../../../sub-common/c464917dce609cc1e640bf0180e17346.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [32856],
      {
        7508: function (e, n, a) {
          var t,
            r = a(32180),
            i = a(57042),
            s = a(24460),
            o = a(81876),
            c = a(21867),
            l = a(86066),
            d = a(45023),
            u = a(52500),
            f = a(71515),
            h = a(87298),
            m = a(92954),
            g = a(36168),
            b = a(851),
            _ = a(90582),
            p = a(78200),
            Z = a(90384),
            v = a(9776),
            N = a(23577),
            k = a(21145),
            R = a(8271),
            D = a.n(R),
            C = a(53550),
            I = a(32970),
            j = a(85376),
            w = a(48813),
            y = function (e) {
              var n = e.isIntl,
                a = e.flightBasicInfo,
                t = e.rescheduleRefundRemark,
                r = e.refundAndChangeDetails;
              if (!a) return (0, w.tZ)(w.HY, {});
              var i = a.departCityName,
                s = a.arriveCityName,
                o = a.takeoffTime,
                c = ""
                  .concat(i, "-")
                  .concat(s, " ")
                  .concat(D()(o).format("MM月DD日 hh:mm"));
              return (0, w.BX)(f.View, {
                className: " _a _Oa _Cj _Dj",
                children: [
                  (0, w.BX)(f.View, {
                    className: " _i _Ga _l",
                    children: [
                      (0, w.tZ)(f.View, {
                        className: " _j _Kc _Ej _U",
                        children: "改签行程",
                      }),
                      (0, w.BX)(f.View, {
                        className: " _Kc _Na _Q _i _Ga _l",
                        onClick: function () {
                          n
                            ? (0, I.ys)({
                                navigationType:
                                  (null == t ? void 0 : t.length) >= 2
                                    ? "roundTrip"
                                    : "normal",
                                noteArray: t,
                                refundAndChangeDetails: r,
                              })
                            : (0, j.b)({
                                rescheduleRefundRemark: t,
                                dptName: i,
                                arrName: s,
                              });
                        },
                        children: [
                          "退改规则",
                          (0, w.tZ)(C.Z, {
                            className: " _Kc _C",
                            children: "󰲧",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, w.tZ)(f.View, {
                    className: " _dd _Pa _U _Xk",
                    children: c,
                  }),
                ],
              });
            },
            x = a(22276),
            B = a(90129),
            V = (0, u.forwardRef)(function (e, n) {
              var a = e.passengers,
                t = (0, u.useState)([]),
                r = (0, B.Z)(t, 2),
                i = r[0],
                s = r[1];
              if (
                ((0, u.useImperativeHandle)(n, function () {
                  return { selectedPassengers: i };
                }),
                !((null == a ? void 0 : a.length) > 0))
              )
                return (0, w.tZ)(w.HY, {});
              var o = function (e, n) {
                  return (
                    !(!e || !n) &&
                    e.cardNo === n.cardNo &&
                    e.passengerName == n.passengerName
                  );
                },
                c = function (e) {
                  return (
                    i.findIndex(function (n) {
                      return o(n, e);
                    }) > -1
                  );
                };
              return (0, w.BX)(f.View, {
                className: " _a _Oa _Cj _Dj",
                children: [
                  (0, w.tZ)(f.View, {
                    className: " _j _Kc _Ej _U",
                    children: "选择改签乘客",
                  }),
                  (0, w.tZ)(f.View, {
                    children:
                      null == a
                        ? void 0
                        : a.map(function (e) {
                            var n;
                            return (0, w.BX)(
                              f.View,
                              {
                                className: " _i _Ga _l _Lc",
                                onClick: function () {
                                  return (function (e) {
                                    if (e && e.canRebook) {
                                      var n = i.findIndex(function (n) {
                                        return o(n, e);
                                      });
                                      n > -1 ? i.splice(n, 1) : i.push(e),
                                        s((0, x.Z)(i));
                                    }
                                  })(e);
                                },
                                children: [
                                  (0, w.tZ)(f.View, {
                                    className: " _dd _Pa _U _j",
                                    children: e.passengerName,
                                  }),
                                  !e.canRebook &&
                                    (0, w.tZ)(f.View, {
                                      className: " _G _Kc _jb",
                                      children:
                                        null !== (n = e.unRebookableReason) &&
                                        void 0 !== n
                                          ? n
                                          : "",
                                    }),
                                  (0, w.tZ)(f.View, {
                                    style: "display: flex; align-items: center",
                                    children: e.canRebook
                                      ? c(e)
                                        ? (0, w.tZ)(C.Z, {
                                            className: " _M _wp",
                                            children: "󰲡",
                                          })
                                        : (0, w.tZ)(C.Z, {
                                            className: " _M _Bd",
                                            children: "󰲠",
                                          })
                                      : (0, w.tZ)(C.Z, {
                                          className: " _M _Bd",
                                          children: "󱁤",
                                        }),
                                  }),
                                ],
                              },
                              e.cardNo
                            );
                          }),
                  }),
                ],
              });
            }),
            S = function (e) {
              var n = e.onDateChange,
                a = (0, u.useState)(""),
                t = (0, B.Z)(a, 2),
                r = t[0],
                i = t[1];
              return (0, w.tZ)(f.View, {
                className: " _a _Oa _Cj _Dj",
                children: (0, w.BX)(f.View, {
                  style:
                    "display: flex; flex-direction: row; align-items: center;",
                  onClick: function () {
                    var e = {
                      defaultDate: [r || D()().format("YYYY-MM-DD")],
                      type: "single",
                      maxDays: 1,
                    };
                    (0, I.ym)(e, function (e) {
                      var a = (e || {}).selectDates,
                        t = N.Z.isCRN ? (null == a ? void 0 : a.dateString) : a;
                      Array.isArray(t) && (t = t[0]),
                        t && (i(t), null == n || n(t));
                    });
                  },
                  children: [
                    (0, w.tZ)(f.View, {
                      className: " _j _Kc _Ej _U",
                      children: "选择改签航班日期",
                    }),
                    (0, w.tZ)(f.View, {
                      className: " _dd _Pa _U",
                      children: r ? D()(r).format("MM-DD") : "",
                    }),
                    (0, w.tZ)(C.Z, {
                      style: { fontSize: 12, marginLeft: 2, color: "#ccc" },
                      children: "󰲧",
                    }),
                  ],
                }),
              });
            },
            A =
              (0, h.h)()(
                (t = (function (e) {
                  (0, c.Z)(a, e);
                  var n = (0, l.Z)(a);
                  function a(e) {
                    var t;
                    return (
                      (0, i.Z)(this, a),
                      (t = n.call(this, e)),
                      (0, d.Z)((0, o.Z)(t), "pageId", ""),
                      (0, d.Z)((0, o.Z)(t), "isIntl", !1),
                      (0, d.Z)((0, o.Z)(t), "params", void 0),
                      (0, d.Z)((0, o.Z)(t), "rebookSegment", void 0),
                      (0, d.Z)((0, o.Z)(t), "orderNumber", void 0),
                      (0, d.Z)(
                        (0, o.Z)(t),
                        "rebookPassengersRef",
                        u.default.createRef()
                      ),
                      (t.state = {
                        date: "",
                        canDoNext: !1,
                        passengerList: [],
                        explanation: [],
                        flightBasicInfo: void 0,
                        rescheduleRefundRemark: null,
                        refundAndChangeDetails: null,
                      }),
                      t
                    );
                  }
                  return (
                    (0, s.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e, n;
                          (this.params =
                            (null ===
                              (e = (0, m.getCurrentInstance)().router) ||
                            void 0 === e
                              ? void 0
                              : e.params) || {}),
                            (null !== (n = this.params) &&
                              void 0 !== n &&
                              n.orderNumber) ||
                              (this.params =
                                (0, v.DH)("flightRebookData") || {});
                          var a = this.handleParams(this.params),
                            t = a.orderNumber,
                            r = a.passengerList,
                            i = a.flightBasicInfo,
                            s = a.rescheduleRefundRemark,
                            o = a.refundAndChangeDetails,
                            c = a.explanation,
                            l = a.isIntl;
                          (this.isIntl = !!l),
                            N.Z.isCRN
                              ? (this.pageId = this.isIntl ? "10650103450" : "")
                              : (this.pageId = this.isIntl
                                  ? "10650103462"
                                  : ""),
                            (this.orderNumber = t),
                            this.setState({
                              passengerList: r,
                              flightBasicInfo: i,
                              explanation: c,
                              rescheduleRefundRemark: s,
                              refundAndChangeDetails: o,
                            });
                        },
                      },
                      {
                        key: "handleParams",
                        value: function (e) {
                          if (!e) return {};
                          var n = e.orderNumber,
                            a = e.segment,
                            t = e.rescheduleRefundRemark,
                            r = e.refundAndChangeDetails,
                            i = e.explanation,
                            s = void 0 === i ? [] : i,
                            o = e.isIntl,
                            c = a || {},
                            l = c.passengerList,
                            d = c.flightBasicInfo;
                          return (
                            (this.rebookSegment = a),
                            {
                              isIntl: o,
                              explanation: s,
                              orderNumber: n,
                              passengerList: l,
                              flightBasicInfo: d,
                              refundAndChangeDetails: r,
                              rescheduleRefundRemark: t,
                            }
                          );
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return (
                            console.log("getPageId " + this.pageId), this.pageId
                          );
                        },
                      },
                      {
                        key: "handleRebookDateChange",
                        value: function (e) {
                          this.setState({ date: e, canDoNext: !0 });
                        },
                      },
                      {
                        key: "handleNextStep",
                        value: function () {
                          var e,
                            n = this.state,
                            a = n.date,
                            t = n.explanation,
                            r =
                              null === (e = this.rebookPassengersRef.current) ||
                              void 0 === e
                                ? void 0
                                : e.selectedPassengers;
                          if (0 == (null == r ? void 0 : r.length))
                            return (0, _.v)(
                              "温馨提示",
                              "请至少选择一个改签人",
                              { text: "我知道了" }
                            );
                          if (!a)
                            return (0, _.v)("温馨提示", "请选择改签航班日期", {
                              text: "我知道了",
                            });
                          var i = (0, Z.I)(this.rebookSegment);
                          (i.passengerList = r || []),
                            (0, p.$A)(
                              {
                                orderNumber: this.orderNumber || "",
                                rebookSegment: i,
                                departDate: a,
                                explanation: t,
                                isIntl: this.isIntl,
                              },
                              this
                            );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            n = this.state,
                            a = n.canDoNext,
                            t = n.passengerList,
                            r = n.flightBasicInfo,
                            i = n.rescheduleRefundRemark,
                            s = n.refundAndChangeDetails;
                          return (0, w.BX)(f.View, {
                            className: " _Y _p _yd",
                            children: [
                              (0, w.tZ)(k.Z, { title: "改签申请" }),
                              (0, w.BX)(f.ScrollView, {
                                showsVerticalScrollIndicator: !1,
                                showScrollbar: !1,
                                className: " _i _nj _sj",
                                children: [
                                  (0, w.tZ)(y, {
                                    isIntl: this.isIntl,
                                    flightBasicInfo: r,
                                    rescheduleRefundRemark: i,
                                    refundAndChangeDetails: s,
                                  }),
                                  (0, w.tZ)(V, {
                                    ref: this.rebookPassengersRef,
                                    passengers: t || [],
                                  }),
                                  (0, w.tZ)(S, {
                                    onDateChange:
                                      this.handleRebookDateChange.bind(this),
                                  }),
                                ],
                              }),
                              (0, w.tZ)(g.Z, {
                                children: (0, w.tZ)(f.Button, {
                                  disabled: !a,
                                  className: " _j _Oa _w",
                                  style: { opacity: a ? 1 : 0.8 },
                                  onClick: this.handleNextStep.bind(this),
                                  children: (0, w.tZ)(f.Text, {
                                    className: " _b _Yb _W",
                                    children: "下一步",
                                  }),
                                }),
                              }),
                              (0, w.tZ)(b.Z, {
                                ref: function (n) {
                                  e.onDrawerAttach(n, !0);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(u.default.Component))
              ) || t;
          Page(
            (0, r.createPageConfig)(
              A,
              "pages/taroCRN/flight/pages/rebookApply/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#efefef",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                disableScroll: !0,
                navigationBarTitleText: "退票详情",
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
            6189, 22843, 6878, 8014, 81198, 30120, 8905, 22175, 87479, 90719,
            27849, 19559, 11216, 68592,
          ],
          function () {
            return (function (n) {
              return e((e.s = n));
            })(7508);
          }
        ),
          e.O();
      },
    ]);
})();
