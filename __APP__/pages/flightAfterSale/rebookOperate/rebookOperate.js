!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/875c9573fb7fcc8b910e806c934114d8.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [1407],
      {
        72025: function (e, t, n) {
          var r = n(32180),
            i = n(57042),
            o = n(24460),
            a = n(81876),
            s = n(21867),
            c = n(86066),
            l = n(52500),
            u = n(65573),
            d = n(92954),
            p = n.n(d),
            f = n(71515),
            m = n(79792),
            g = n(81957),
            h = n(8271),
            b = n.n(h),
            v = n(45023),
            N = n(44778),
            k = n(76988),
            Z = n(298),
            y = {
              state: {
                isSplitOrder: !1,
                tripType: 1,
                orderNumber: "",
                conditionList: [],
                explanation: null,
                rescheduleRefundRemark: null,
              },
              reducers: {
                setState: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), t);
                },
              },
            },
            x = (function (e) {
              (0, s.Z)(n, e);
              var t = (0, c.Z)(n);
              function n() {
                return (0, i.Z)(this, n), t.apply(this, arguments);
              }
              return (
                (0, o.Z)(n, [
                  {
                    key: "initStore",
                    value: function () {
                      this.store = (0, N.S1)({ models: { pageModel: y } });
                    },
                  },
                ]),
                n
              );
            })(k.Z);
          (0, v.Z)(x, "defaultModel", "pageModel");
          var L,
            T = n(48813),
            w = { 1: "成人票", 2: "儿童票", 3: "婴儿票", 4: "老人票" },
            S = function (e) {
              var t = e.condition,
                n = e.tripType,
                r = t.segmentList[0],
                i = r.segmentIndex,
                o = r.passengerList,
                a = r.flightBasicInfo,
                s = a.departCityName,
                c = a.arriveCityName,
                l = a.takeoffTime,
                u = a.newRebookInfo,
                d = o.some(function (e) {
                  return e.canRebook;
                }),
                p = i.segmentType,
                m = i.sequenceNum,
                g = "";
              return (
                1 == n
                  ? (g = "直飞")
                  : 2 == n
                  ? (g = 1 == p ? "去程" : "返程")
                  : 3 == n
                  ? (g = 1 == p ? "第1程" : "第2程")
                  : 4 == n
                  ? (g = 1 == m ? "第一程" : "第二程")
                  : 5 == n &&
                    ((g = 1 == p ? "去程" : "返程"),
                    (g += 1 == m ? " 第一程" : " 第二程")),
                (0, T.BX)(f.View, {
                  className: "rebook-segment",
                  children: [
                    (0, T.BX)(f.View, {
                      className: "hd flex",
                      children: [
                        (0, T.BX)(f.View, {
                          className: "lbox flex-1 flex-align-items-center",
                          children: [
                            (0, T.tZ)(f.View, {
                              className: "segment-tag",
                              children: g,
                            }),
                            (0, T.BX)(f.View, {
                              className: "font-16 color-2",
                              children: [s, "-", c],
                            }),
                            u &&
                              (0, T.tZ)(f.View, {
                                className: "tip-tag",
                                children: "新航班",
                              }),
                          ],
                        }),
                        (0, T.BX)(f.View, {
                          className: "rbox font-14 color-9",
                          children: [b()(l).format("MM月DD日 HH:mm"), "起飞"],
                        }),
                      ],
                    }),
                    (0, T.tZ)(f.View, {
                      className: "bd font-14 color-2",
                      children: o.map(function (e, t) {
                        return (0,
                        T.BX)(f.View, { className: "pas-item flex-align-items-center", children: [(0, T.BX)(f.View, { className: "flex-align-items-center flex-1", children: [e.passengerName, (0, T.tZ)(f.View, { className: "ticket-tag bd-1rpx", children: w[e.passengerType] })] }), !e.canRebook && (0, T.tZ)(f.View, { className: "font-12 color-6 reason", children: e.unRebookableReason })] }, t);
                      }),
                    }),
                    d &&
                      (0, T.tZ)(f.View, {
                        className: "botm flex",
                        children: (0, T.tZ)(f.Button, {
                          className: "rebook-btn",
                          id: "AbAN",
                          onClick: function () {
                            return (function (e) {
                              var t = e.segmentList,
                                n = e.conditionList,
                                r = x.getState(),
                                i = r.orderNumber,
                                o = r.explanation,
                                a = r.rescheduleRefundRemark,
                                s = r.tripType;
                              if ((null == n ? void 0 : n.length) > 1)
                                x.navigateTo({
                                  url: "/pages/flightAfterSale/rebookOperate/rebookOperate",
                                  data: {
                                    orderNumber: i,
                                    conditionList: n,
                                    tripType: s,
                                    explanation: o,
                                    rescheduleRefundRemark: a,
                                    isSplitOrder: !0,
                                  },
                                });
                              else {
                                var c = t[0];
                                (c.passengerList = c.passengerList.filter(
                                  function (e) {
                                    return e.canRebook;
                                  }
                                )),
                                  x.navigateTo({
                                    url: "/pages/flightAfterSale/rebookApply/rebookApply",
                                    data: {
                                      orderNumber: i,
                                      segment: t[0],
                                      explanation: o,
                                      rescheduleRefundRemark: a,
                                    },
                                  });
                              }
                            })(t);
                          },
                          children: "去改签",
                        }),
                      }),
                  ],
                })
              );
            },
            R = l.default.memo(
              (0, u.$j)(function (e) {
                var t = e.pageModel;
                return { conditionList: t.conditionList, tripType: t.tripType };
              })(function (e) {
                var t = e.conditionList,
                  n = e.tripType;
                return (0, T.tZ)(f.View, {
                  className: "rebook-condition-list",
                  children: t.map(function (e, t) {
                    return (0, T.tZ)(S, { condition: e, tripType: n }, t);
                  }),
                });
              })
            ),
            V = l.default.memo(
              (0, u.$j)(function (e) {
                var t = e.pageModel;
                return {
                  isSplitOrder: t.isSplitOrder,
                  conditionList: t.conditionList,
                };
              })(function (e) {
                var t = e.isSplitOrder,
                  n = e.conditionList;
                return t &&
                  (function (e) {
                    return e.some(function (e) {
                      var t, n, r;
                      return !(
                        null == e ||
                        null === (t = e.segmentList) ||
                        void 0 === t ||
                        null === (n = t[0]) ||
                        void 0 === n ||
                        null === (r = n.passengerList) ||
                        void 0 === r ||
                        !r.some(function (e) {
                          return [2, 3].includes(e.passengerType);
                        })
                      );
                    });
                  })(n)
                  ? (0, T.tZ)(f.View, {
                      className: "font-12 tip botm-tip",
                      children:
                        "儿童婴儿乘客无法单独出行，须有年满18周岁成人陪同乘，以为成人乘客最多可以携带两名儿童/婴儿乘客，且需要与儿童婴儿乘客舱等一致",
                    })
                  : (0, T.tZ)(f.View, {});
              })
            ),
            B = function (e) {
              var t = [];
              e.sort(function (e, t) {
                var n = e.segmentList[0].segmentIndex,
                  r = t.segmentList[0].segmentIndex;
                return (
                  10 * n.segmentType +
                  n.sequenceNum -
                  (10 * r.segmentType + r.sequenceNum)
                );
              });
              var n = 0,
                r = 0,
                i = [];
              return (
                e.forEach(function (e) {
                  var o = e.segmentList[0].segmentIndex;
                  (n == o.segmentType && r == o.sequenceNum) ||
                    ((n = o.segmentType),
                    (r = o.sequenceNum),
                    i.length > 0 && (t.push(i), (i = []))),
                    i.push(e);
                }),
                t.push(i),
                t.map(function (e) {
                  if (1 == e.length) return e[0];
                  var t = [];
                  return (
                    e.forEach(function (e) {
                      e.segmentList[0].passengerList.forEach(function (e) {
                        t.push(e);
                      });
                    }),
                    {
                      segmentList: [
                        (0, Z.Z)(
                          (0, Z.Z)({}, e[0].segmentList[0]),
                          {},
                          { passengerList: t }
                        ),
                      ],
                      conditionList: e,
                    }
                  );
                })
              );
            },
            O =
              (0, g.h)()(
                (L = (function (e) {
                  (0, s.Z)(n, e);
                  var t = (0, c.Z)(n);
                  function n(e) {
                    var r;
                    (0, i.Z)(this, n),
                      ((r = t.call(this, e)).pageService = x.create(
                        (0, a.Z)(r)
                      ));
                    try {
                      var o = (0, d.getCurrentInstance)().router.params
                        .isSplitOrder;
                      r.pageId = o ? "10650082461" : "10650082459";
                    } catch (e) {
                      console.error(e);
                    }
                    return r;
                  }
                  return (
                    (0, o.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = x.getRouterParams(),
                            t = e.orderNumber,
                            n = e.conditionList,
                            r = e.tripType,
                            i = e.isSplitOrder,
                            o = e.explanation,
                            a = e.rescheduleRefundRemark;
                          i &&
                            p().setNavigationBarTitle({
                              title: "选择改签乘机人",
                            }),
                            x
                              .dispatch()
                              .setState({
                                isSplitOrder: i,
                                orderNumber: t,
                                conditionList: i ? n : B(n),
                                tripType: r,
                                explanation: o,
                                rescheduleRefundRemark: a,
                              });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, T.tZ)(u.zt, {
                            store: this.pageService.store,
                            children: (0, T.BX)(f.View, {
                              className: "flight-rebook-operate ".concat(
                                m.default.zxTyStr
                              ),
                              children: [
                                (0, T.BX)(f.View, {
                                  className: "fixed-top-tip tip font-12",
                                  children: [
                                    (0, T.tZ)(f.Text, {
                                      className: "font-m",
                                      children: "温馨提示：",
                                    }),
                                    "按产品提供方规定，需分开提交改签申请",
                                  ],
                                }),
                                (0, T.tZ)(R, {}),
                                (0, T.tZ)(V, {}),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(l.default.Component))
              ) || L;
          Page(
            (0, r.createPageConfig)(
              O,
              "pages/flightAfterSale/rebookOperate/rebookOperate",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "选择改签行程",
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
        e.O(0, [11256, 54726, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(72025);
        }),
          e.O();
      },
    ]);
})();
