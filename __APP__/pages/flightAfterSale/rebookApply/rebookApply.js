!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/023c833735f89bfd8e4bfa6050ae7715.js"),
    require("../sub-common/6c29063ea7407d5aad2c6709ea72811d.js"),
    require("../sub-common/77d3751beb3e2bc1242396ba7c218030.js"),
    require("../sub-common/c464917dce609cc1e640bf0180e17346.js"),
    require("../sub-common/875c9573fb7fcc8b910e806c934114d8.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [70086],
      {
        9040: function (e, t, n) {
          var a = n(32180),
            o = n(57042),
            r = n(24460),
            i = n(81876),
            s = n(21867),
            c = n(86066),
            l = n(52500),
            f = n(65573),
            u = n(71515),
            d = n(79792),
            g = n(81957),
            m = n(21999),
            p = n(58676),
            h = (n(92954), n(8271)),
            b = n.n(h),
            x = n(48813),
            Z = l.default.memo(
              (0, f.$j)(
                function (e) {
                  return { flightBasicInfo: e.pageModel.flightBasicInfo };
                },
                function (e) {
                  return { toggleRefundPop: e.pageModel.toggleRefundPop };
                }
              )(function (e) {
                var t = e.flightBasicInfo,
                  n = e.toggleRefundPop,
                  a = t || {},
                  o = a.departCityName,
                  r = void 0 === o ? "" : o,
                  i = a.arriveCityName,
                  s = void 0 === i ? "" : i,
                  c = a.takeoffTime;
                return (0,
                x.BX)(u.View, { className: "flt-info-banner flt-white-box", children: [(0, x.BX)(u.View, { className: "b-header flex-align-items-center", children: [(0, x.tZ)(u.Text, { className: "tit-txt flex-1", children: "改签行程" }), (0, x.BX)(u.View, { className: "rule flex-align-items-center", id: "AbAD", onClick: n, children: ["退改规则", (0, x.tZ)(u.Text, { className: "ifont-arr iconfont flex-align-items-center" })] })] }), (0, x.tZ)(u.View, { className: "bd-txt", children: "".concat(r, "-").concat(s, " ").concat(b()(c).format("MM月DD日 HH:mm")) })] });
              })
            ),
            v = l.default.memo(
              (0, f.$j)(
                function (e) {
                  return { passengerList: e.pageModel.passengerList };
                },
                function (e) {
                  return {
                    togglePassengerSelect: e.pageModel.togglePassengerSelect,
                  };
                }
              )(function (e) {
                var t = e.passengerList,
                  n = void 0 === t ? [] : t,
                  a = e.togglePassengerSelect;
                return (0, x.BX)(u.View, {
                  className: "flt-pas-select flt-white-box",
                  children: [
                    (0, x.tZ)(u.View, {
                      className: "tit-txt",
                      children: "选择改签乘客",
                    }),
                    (0, x.tZ)(u.View, {
                      className: "pas-list",
                      children: n.map(function (e, t) {
                        return (0, x.BX)(
                          u.View,
                          {
                            className: "pas-item flex-align-items-center",
                            id: "AbAE",
                            onClick: function () {
                              return a({ pasIndex: t });
                            },
                            children: [
                              (0, x.tZ)(u.Text, {
                                className: "bd-txt flex-1",
                                children: e.passengerName,
                              }),
                              (0, x.tZ)(u.Text, {
                                className: "checkbox ".concat(
                                  e.canRebook
                                    ? e.selected
                                      ? "ifont2-checkboxed iconfont2"
                                      : "ifont2-checkbox iconfont2"
                                    : "ifont-checkbox-disabled iconfont"
                                ),
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                  ],
                });
              })
            ),
            k = n(32270),
            N = l.default.memo(
              (0, f.$j)(
                function (e) {
                  var t = e.pageModel;
                  return {
                    flightBasicInfo: t.flightBasicInfo,
                    showRefundPop: t.showRefundPop,
                    rescheduleRefundRemark: t.rescheduleRefundRemark,
                  };
                },
                function (e) {
                  return { toggleRefundPop: e.pageModel.toggleRefundPop };
                }
              )(function (e) {
                var t = e.showRefundPop,
                  n = e.rescheduleRefundRemark,
                  a = e.flightBasicInfo,
                  o = e.toggleRefundPop,
                  r = a.departCityName,
                  i = a.arriveCityName;
                return (0,
                x.tZ)(k.ZP, { rescheduleRefundRemark: n, isShow: t, handleClose: o, dptName: r, arrName: i, height: "90vh" });
              })
            ),
            D = n(94350),
            C = n(9062),
            R = n(45023),
            w = n(44778),
            P = n(76988),
            I = n(22276),
            y = n(298),
            B = {
              state: {
                routeIndex: null,
                segmentIndex: null,
                orderNumber: null,
                flightBasicInfo: {},
                passengerList: [],
                rescheduleRefundRemark: null,
                explanation: [],
                showRefundPop: !1,
                selectDate: "",
              },
              reducers: {
                set: function (e, t) {
                  return (0, y.Z)((0, y.Z)({}, e), t);
                },
                toggleRefundPop: function (e) {
                  return (0, y.Z)(
                    (0, y.Z)({}, e),
                    {},
                    { showRefundPop: !e.showRefundPop }
                  );
                },
                togglePassengerSelect: function (e, t) {
                  var n = (0, I.Z)(e.passengerList),
                    a = n[t.pasIndex];
                  return a.canRebook
                    ? ((a.selected = !a.selected),
                      (0, y.Z)((0, y.Z)({}, e), {}, { passengerList: n }))
                    : e;
                },
                setDate: function (e, t) {
                  return (0, y.Z)((0, y.Z)({}, e), {}, { selectDate: t });
                },
              },
            },
            T = (function (e) {
              (0, s.Z)(n, e);
              var t = (0, c.Z)(n);
              function n() {
                return (0, o.Z)(this, n), t.apply(this, arguments);
              }
              return (
                (0, r.Z)(n, [
                  {
                    key: "initStore",
                    value: function () {
                      this.store = (0, w.S1)({ models: { pageModel: B } });
                    },
                  },
                ]),
                n
              );
            })(P.Z);
          (0, R.Z)(T, "defaultModel", "pageModel");
          var M,
            S = b()().format("YYYY-MM-DD"),
            A = b()()
              .add(C.g2 - 1, "day")
              .format("YYYY-MM-DD"),
            j = function () {
              var e = T.getState().selectDate,
                t = {
                  beginDate: S,
                  endDate: A,
                  chooseDate: e,
                  title: "请选择改签日期",
                };
              (0, D.U)({
                calendarParams: t,
                onConfirm: function (e) {
                  T.dispatch().setDate(e);
                },
                exclusive: !0,
              });
            },
            L = l.default.memo(
              (0, f.$j)(function (e) {
                return { selectDate: e.pageModel.selectDate };
              })(function (e) {
                var t = e.selectDate;
                return (
                  (0, l.useEffect)(function () {
                    !(function () {
                      var e = {
                        beginDate: S,
                        endDate: A,
                        title: "请选择改签日期",
                      };
                      (0, D.X)({ calendarParams: e, exclusive: !0 });
                    })();
                  }, []),
                  (0, x.BX)(u.View, {
                    className:
                      "flt-rebook-date-picker flt-white-box flex-align-items-center",
                    id: "AbAC",
                    onClick: j,
                    children: [
                      (0, x.tZ)(u.Text, {
                        className: "tit-txt flex-1",
                        children: "选择航班改签日期",
                      }),
                      t &&
                        (0, x.tZ)(u.Text, {
                          className: "bd-txt",
                          children: b()(t).format("MM-DD"),
                        }),
                      (0, x.tZ)(u.Text, {
                        className: "ifont-arr iconfont flex-align-items-center",
                      }),
                    ],
                  })
                );
              })
            ),
            V = n(4845),
            X = function () {
              var e = T.getState(),
                t = e.passengerList,
                n = e.explanation;
              if (
                t.some(function (e) {
                  return e.selected;
                })
              ) {
                var a = e.orderNumber,
                  o = e.segmentIndex,
                  r = e.routeIndex,
                  i = e.flightBasicInfo,
                  s = e.selectDate,
                  c = e.rebookTips,
                  l = i.flightNo,
                  f = i.airlineCode,
                  u = i.departCityCode,
                  d = i.arriveCityCode,
                  g = i.departCityName,
                  m = i.arriveCityName,
                  p = {
                    segmentIndex: o,
                    routeIndex: r,
                    oldFlightNumber: l,
                    oldAirlineCode: f,
                    oldDepartCityCode: u,
                    oldArriveCityCode: d,
                    oldDepartDateTime: i.takeoffTime,
                  },
                  h = t.filter(function (e) {
                    return e.selected;
                  });
                T.navigateTo({
                  url: "/pages/flightAfterSale/rebookList/rebookList",
                  data: {
                    orderNumber: a,
                    changeFlightSegment: p,
                    changePassengerList: h,
                    explanation: n,
                    selectDate: s,
                    departCityName: g,
                    arriveCityName: m,
                    rebookTips: c,
                  },
                });
              } else T.showCommonDialog("请至少选择一个改签人");
            },
            Y = l.default.memo(
              (0, f.$j)(function (e) {
                return { selectDate: e.pageModel.selectDate };
              })(function (e) {
                var t = !e.selectDate;
                return (0,
                x.tZ)(V.Z, { className: "rebook-next-step", buttonText: "下一步", disabled: t, onConfirm: X });
              })
            ),
            q =
              (0, g.h)()(
                (M = (function (e) {
                  (0, s.Z)(n, e);
                  var t = (0, c.Z)(n);
                  function n(e) {
                    var a;
                    return (
                      (0, o.Z)(this, n),
                      ((a = t.call(this, e)).pageId = "10650082463"),
                      (a.pageService = T.create((0, i.Z)(a))),
                      a
                    );
                  }
                  return (
                    (0, r.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = T.getRouterParams().data,
                            t = e.orderNumber,
                            n = e.segment,
                            a = e.explanation,
                            o = e.rescheduleRefundRemark,
                            r = n.flightBasicInfo,
                            i = n.passengerList,
                            s = n.routeIndex,
                            c = n.segmentIndex,
                            l = n.rebookTips;
                          T.dispatch().set({
                            flightBasicInfo: r,
                            passengerList: i,
                            routeIndex: s,
                            segmentIndex: c,
                            orderNumber: t,
                            rescheduleRefundRemark: o,
                            explanation: a,
                            rebookTips: l,
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return (0, x.tZ)(f.zt, {
                            store: this.pageService.store,
                            children: (0, x.BX)(u.View, {
                              className: "flight-rebook-apply ".concat(
                                d.default.zxTyStr
                              ),
                              children: [
                                (0, x.tZ)(Z, {}),
                                (0, x.tZ)(v, {}),
                                (0, x.tZ)(L, {}),
                                (0, x.tZ)(N, {}),
                                (0, x.tZ)(Y, {}),
                                (0, x.tZ)(m.Z, {
                                  ref: function (t) {
                                    e.onDrawerAttach(t);
                                  },
                                }),
                                (0, x.tZ)(m.Z, {
                                  ref: function (t) {
                                    e.onDrawerAttach(t, !0);
                                  },
                                }),
                                (0, x.tZ)(p.Z, {
                                  ref: function (t) {
                                    e.onDialogAttach(t);
                                  },
                                }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(l.default.Component))
              ) || M;
          Page(
            (0, a.createPageConfig)(
              q,
              "pages/flightAfterSale/rebookApply/rebookApply",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "改签申请",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#ffffff",
                backgroundColorTop: "#f5f5f5",
                backgroundColorBottom: "#f5f5f5",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            11256, 8014, 81198, 30120, 8905, 22175, 72032, 87479, 16386, 90719,
            27849, 54726, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(9040);
          }
        ),
          e.O();
      },
    ]);
})();
