!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/77d3751beb3e2bc1242396ba7c218030.js"),
    require("../sub-common/875c9573fb7fcc8b910e806c934114d8.js"),
    require("../sub-common/46833458e1cabcee1efa7341adea7ce5.js"),
    require("../sub-common/7b0b71c08bce3cba294d717f8dd1e5c5.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [78511],
      {
        2303: function (e, t, n) {
          var a = n(32180),
            i = n(57042),
            r = n(24460),
            o = n(81876),
            c = n(21867),
            l = n(86066),
            s = n(52500),
            d = n(65573),
            f = n(81957),
            u = n(21999),
            h = n(45023),
            m = n(44778),
            g = n(76988),
            p = n(298),
            b = {
              state: {
                orderNumber: "",
                changeFlightSegment: {},
                changePassengerList: [],
                selectDate: "",
                departCityName: "",
                arriveCityName: "",
                changeList: [],
                childBabyRebookTips: null,
                filterList: [
                  {
                    type: "time",
                    typeName: "从早到晚",
                    selected: !0,
                    desc: !1,
                    icon: "ifont-time2 iconfont",
                  },
                  {
                    type: "price",
                    typeName: "价格",
                    selected: !1,
                    desc: !1,
                    icon: "ifont-price iconfont",
                  },
                ],
                explanation: [],
                noData: !1,
              },
              reducers: {
                setState: function (e, t) {
                  return (0, p.Z)((0, p.Z)({}, e), t);
                },
                setDate: function (e, t) {
                  return (0, p.Z)((0, p.Z)({}, e), {}, { selectDate: t });
                },
                setFilterList: function (e, t) {
                  return (
                    t.forEach(function (e) {
                      "time" == e.type &&
                        (e.typeName = e.selected
                          ? e.desc
                            ? "从晚到早"
                            : "从早到晚"
                          : "时间"),
                        "price" == e.type &&
                          (e.typeName = e.selected
                            ? e.desc
                              ? "由高到低"
                              : "由低到高"
                            : "价格");
                    }),
                    (0, p.Z)((0, p.Z)({}, e), {}, { filterList: t })
                  );
                },
              },
            },
            N = (function (e) {
              (0, c.Z)(n, e);
              var t = (0, l.Z)(n);
              function n() {
                return (0, i.Z)(this, n), t.apply(this, arguments);
              }
              return (
                (0, r.Z)(n, [
                  {
                    key: "initStore",
                    value: function () {
                      this.store = (0, m.S1)({ models: { pageModel: b } });
                    },
                  },
                ]),
                n
              );
            })(g.Z);
          (0, h.Z)(N, "defaultModel", "pageModel");
          var v,
            Z = n(22276),
            x = n(8271),
            y = n.n(x),
            w = n(49120),
            T = n(65484),
            D = function (e, t) {
              var n,
                a,
                i =
                  null === (n = e.changeFlightTripInfo) || void 0 === n
                    ? void 0
                    : n.departDateTime,
                r =
                  null === (a = t.changeFlightTripInfo) || void 0 === a
                    ? void 0
                    : a.departDateTime;
              return y()(i).isBefore(y()(r)) ? -1 : 1;
            },
            k = function (e, t) {
              var n,
                a,
                i =
                  (null === (n = e.changeFlightPriceInfoDetail) || void 0 === n
                    ? void 0
                    : n.rebookTotalFee) || 0,
                r =
                  (null === (a = t.changeFlightPriceInfoDetail) || void 0 === a
                    ? void 0
                    : a.rebookTotalFee) || 0;
              return parseFloat(i) - parseFloat(r);
            },
            L = function (e) {
              var t = e.type,
                n = void 0 === t ? "time" : t,
                a = e.desc,
                i = void 0 !== a && a,
                r = N.getPage(),
                o = (0, Z.Z)(r._searchChangeFlightList);
              switch (n) {
                case "time":
                  o.sort(D);
                  break;
                case "price":
                  o.sort(k);
              }
              i && o.reverse(), N.dispatch().setState({ changeList: o });
            },
            C = function (e) {
              var t = N.getState(),
                n = {
                  data: {
                    version: 0,
                    orderNumber: t.orderNumber,
                    newDepartDate: e,
                    changeFlightSegment: t.changeFlightSegment,
                    changePassengerList: t.changePassengerList,
                  },
                };
              (0, w.showLoading)(),
                N.dispatch().setState({ noData: !1 }),
                (0, T.my)(T.ul, n)
                  .then(function (e) {
                    var t = e.searchChangeFlightList,
                      n = e.childBabyRebookTips;
                    N.dispatch().setState({
                      childBabyRebookTips: n,
                      noData: !t || 0 == t.length,
                    }),
                      (N.getPage()._searchChangeFlightList = t);
                    var a = (function () {
                      var e = N.getState().filterList.find(function (e) {
                        return e.selected;
                      });
                      return (0, p.Z)({}, e);
                    })();
                    L({ type: a.type, desc: a.desc });
                  })
                  .catch(function (e) {
                    console.log(e);
                  })
                  .finally(function () {
                    (0, w.hideLoading)();
                  });
            },
            B = (n(92954), n(12396)),
            F = n(48813),
            S = function (e) {
              N.dispatch().setDate(e), C(e);
            },
            V = s.default.memo(
              (0, d.$j)(function (e) {
                return { selectDate: e.pageModel.selectDate };
              })(function (e) {
                var t = e.selectDate;
                return (0, F.tZ)(B.Z, { selectDate: t, handleSelectDate: S });
              })
            ),
            I = n(71515),
            X = n(4845),
            P = n(28044),
            A = function (e) {
              var t = e.flight,
                n = N.getState(),
                a = n.orderNumber,
                i = n.changeFlightSegment,
                r = n.changePassengerList,
                o = n.explanation,
                c = n.childBabyRebookTips,
                l = i.segmentIndex,
                s = t.changeFlightExtensionData,
                d = {
                  data: {
                    orderNumber: a,
                    rebookType: 1,
                    segmentIndex: l,
                    changeFlightExtensionData: s,
                    rebookPassengers: r,
                  },
                },
                f = function () {
                  (0, w.showLoading)(),
                    (0, T.nH)(d)
                      .then(function (e) {
                        if (1 == e.resultCode) {
                          var n = e.data.productId;
                          N.navigateTo({
                            url: "/pages/flightAfterSale/rebookConfirm/rebookConfirm",
                            data: {
                              flight: t,
                              childBabyRebookTips: c,
                              changePassengerList: r,
                              explanation: o,
                              productId: n,
                              orderNumber: a,
                              rebookType: 1,
                              segmentIndex: l,
                            },
                          });
                        } else (0, w.showModal)(e.resultMessage || "获取改签条件失败，请重试");
                      })
                      .catch(function () {
                        (0, w.showModal)("获取改签条件失败，请重试");
                      })
                      .finally(function () {
                        return (0, w.hideLoading)();
                      });
                },
                u = t.changeFlightTripInfo.departDateTime;
              y()().add(90, "minute").isAfter(u)
                ? N.showCommonDrawer({
                    hideTitle: !0,
                    hideClose: !0,
                    content: function (e) {
                      var t = e.onClose;
                      return (0, F.tZ)(P.Z, {
                        showHeadImg: !0,
                        title: "温馨提示",
                        content:
                          "航班临近起飞时间，请先到值机柜台确认仍可值机后再预订，因误机产生的损失需自行承担",
                        cancelText: "取消",
                        confirmText: "确定",
                        onCancel: t,
                        onConfirm: function () {
                          t(), f();
                        },
                      });
                    },
                  })
                : f();
            },
            M = function (e) {
              var t,
                n = e.flight,
                a = n.changeFlightBasicInfo,
                i = n.changeFlightTripInfo,
                r = n.changeFlightPriceInfoDetail,
                o = i.departAirportName,
                c = i.departTerminal,
                l = i.arriveAirportName,
                s = i.arriveTerminal,
                d = i.departDateTime,
                f = i.arriveDateTime,
                u = i.isDiffArriveAirport,
                h = i.isDiffDepartAirport,
                m = i.cabinName,
                g = i.costTime,
                p = i.stopType,
                b = i.subSegment,
                N = a.airlineIcon,
                v = a.airlineName,
                Z = a.flightNumber,
                x = r.rebookTotalFee,
                w = r.rebookTotalHandlingFee,
                T = r.rebookTotalUpgradeFee;
              return (0, F.BX)(I.View, {
                className: "flt-card flex",
                id: "AbAL",
                onClick: function () {
                  return A({ flight: n });
                },
                children: [
                  (0, F.BX)(I.View, {
                    className: "lbox flex-1",
                    children: [
                      (0, F.BX)(I.View, {
                        className: "flt-banner flex",
                        children: [
                          (0, F.BX)(I.View, {
                            className: "from",
                            children: [
                              (0, F.tZ)(I.View, {
                                className: "time",
                                children: y()(d).format("HH:mm"),
                              }),
                              (0, F.BX)(I.View, {
                                className: "station ".concat(
                                  h ? "color-blue" : ""
                                ),
                                children: [o, c],
                              }),
                            ],
                          }),
                          (0, F.tZ)(I.View, {
                            className: "mid ".concat(p ? "stop-by" : ""),
                            children:
                              !!p &&
                              (0, F.BX)(I.View, {
                                className: "wrap",
                                children: [
                                  (0, F.tZ)(I.View, {
                                    className: "stop color-2",
                                    children: "停",
                                  }),
                                  (0, F.tZ)(I.View, {
                                    className: "by color-9",
                                    children:
                                      null == b ||
                                      null === (t = b[0]) ||
                                      void 0 === t
                                        ? void 0
                                        : t.arriveCityName,
                                  }),
                                ],
                              }),
                          }),
                          (0, F.BX)(I.View, {
                            className: "to",
                            children: [
                              (0, F.tZ)(I.View, {
                                className: "time",
                                children: y()(f).format("HH:mm"),
                              }),
                              (0, F.BX)(I.View, {
                                className: "station ".concat(
                                  u ? "color-blue" : ""
                                ),
                                children: [l, s],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, F.BX)(I.View, {
                        className: "flt-info flex-align-items-center",
                        children: [
                          (0, F.tZ)(I.Image, { src: N, className: "flt_icon" }),
                          (0, F.BX)(I.Text, {
                            className: "flt_txt",
                            children: [v, Z],
                          }),
                          (0, F.tZ)(I.Text, {
                            className: "flt_txt",
                            children: g,
                          }),
                          (0, F.tZ)(I.Text, {
                            className: "flt_txt",
                            children: m,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, F.BX)(I.View, {
                    className: "rbox",
                    children: [
                      (0, F.tZ)(I.View, { className: "price", children: x }),
                      (0, F.BX)(I.View, {
                        className: "flt_txt",
                        children: ["手续费¥", w],
                      }),
                      (0, F.BX)(I.View, {
                        className: "flt_txt",
                        children: ["+机票差价¥", T],
                      }),
                    ],
                  }),
                ],
              });
            },
            j = function (e) {
              var t = e.explanation,
                n = e.onClose;
              return (0, F.BX)(I.View, {
                className: "exp-cont",
                children: [
                  (0, F.tZ)(I.View, {
                    className: "cont",
                    children: t.map(function (e, t) {
                      return (0,
                      F.tZ)(I.View, { className: "cont-item", children: e }, t);
                    }),
                  }),
                  (0, F.tZ)(X.Z, { onConfirm: n }),
                ],
              });
            },
            H = function () {
              var e = N.getState().explanation;
              N.showCommonDrawer({
                title: "规则说明",
                content: function (t) {
                  var n = t.onClose;
                  return (0, F.tZ)(j, { explanation: e, onClose: n });
                },
                className: "flt-exp-pop",
              });
            },
            _ = s.default.memo(
              (0, d.$j)(function (e) {
                var t = e.pageModel;
                return {
                  changeList: t.changeList,
                  rebookTips: t.rebookTips,
                  noData: t.noData,
                };
              })(function (e) {
                var t = e.changeList,
                  n = e.noData,
                  a = e.rebookTips;
                return (0, F.tZ)(I.ScrollView, {
                  className: "flt-change-list ".concat(n ? "" : "flex-1"),
                  scrollY: !0,
                  scrollWithAnimation: !0,
                  children:
                    t.length > 0 &&
                    (0, F.BX)(F.HY, {
                      children: [
                        (null == a ? void 0 : a.content) &&
                          (0, F.tZ)(I.View, {
                            className: "rebook-tips font-11",
                            children: a.content,
                          }),
                        (0, F.BX)(I.View, {
                          className: "top-tip font-11",
                          id: "AbAM",
                          onClick: H,
                          children: [
                            (0, F.tZ)(I.Text, {
                              style: { color: "#FD7100" },
                              children: "改签提醒：",
                            }),
                            "以下是航空公司提供的可改签航班以及价格，建议优先改签同航司客票，成功率更高哦",
                            (0, F.tZ)(I.Text, {
                              className: "ifont-detail iconfont",
                            }),
                          ],
                        }),
                        (0, F.tZ)(I.View, {
                          className: "list-cont",
                          children: t.map(function (e, t) {
                            return (0, F.tZ)(M, { flight: e }, t);
                          }),
                        }),
                      ],
                    }),
                });
              })
            ),
            R = n(21828),
            q = function (e) {
              var t = N.getState(),
                n = (0, Z.Z)(t.filterList);
              if (e.selected)
                return (
                  (n.find(function (t) {
                    return t.type == e.type;
                  }).desc = !e.desc),
                  N.dispatch().setFilterList(n),
                  void (function () {
                    var e = N.getState(),
                      t = (0, Z.Z)(e.changeList);
                    t.reverse(), N.dispatch().setState({ changeList: t });
                  })()
                );
              n.forEach(function (t) {
                t.selected = e.type == t.type;
              }),
                N.dispatch().setFilterList(n),
                L({ type: e.type, desc: e.desc });
            },
            E = s.default.memo(
              (0, d.$j)(function (e) {
                return { filterList: e.pageModel.filterList };
              })(function (e) {
                var t = e.filterList;
                return (0, F.tZ)(R.Z, {
                  className: "rebook-filter-botm flex",
                  children: t.map(function (e, t) {
                    return (0, F.BX)(
                      I.View,
                      {
                        className:
                          "filter-tab flex-1 flex-center flex-column ".concat(
                            e.selected ? "cur" : ""
                          ),
                        id: "AbAK",
                        onClick: function () {
                          return q(e);
                        },
                        children: [
                          (0, F.tZ)(I.Text, { className: e.icon }),
                          (0, F.tZ)(I.Text, {
                            className: "type",
                            children: e.typeName,
                          }),
                        ],
                      },
                      t
                    );
                  }),
                });
              })
            ),
            $ = n(79792),
            z = s.default.memo(
              (0, d.$j)(function (e) {
                return { noData: e.pageModel.noData };
              })(function (e) {
                var t = e.noData;
                return (0,
                F.tZ)(I.View, { className: "node-isolate-no-data flex-1 flex-center", style: t ? "" : { display: "none" }, children: t && (0, F.BX)(I.View, { className: "flt-list-nodata-view flex-center flex-column", children: [(0, F.tZ)(I.Icon, { className: "img-selnone " + $.default.zxTyStr }), (0, F.tZ)(I.View, { className: "tit", children: "暂无内容" }), (0, F.tZ)(I.View, { className: "txt", children: "非常抱歉，当前日期暂无可改签航班～" })] }) });
              })
            ),
            J =
              (0, f.h)(!1, { usePageWrapper: !0 })(
                (v = (function (e) {
                  (0, c.Z)(n, e);
                  var t = (0, l.Z)(n);
                  function n(e) {
                    var a;
                    return (
                      (0, i.Z)(this, n),
                      ((a = t.call(this, e)).pageId = "10650082465"),
                      (a.pageService = N.create((0, o.Z)(a))),
                      (a.pageRootClassName =
                        "flight-rebook-list flex flex-column"),
                      (a.pageContentIsFullScreen = !0),
                      a
                    );
                  }
                  return (
                    (0, r.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = N.getRouterParams(),
                            t = e.orderNumber,
                            n = e.changeFlightSegment,
                            a = e.changePassengerList,
                            i = e.selectDate,
                            r = e.departCityName,
                            o = e.arriveCityName,
                            c = e.explanation,
                            l = e.rebookTips;
                          N.dispatch().setState({
                            orderNumber: t,
                            changeFlightSegment: n,
                            changePassengerList: a,
                            selectDate: i,
                            departCityName: r,
                            arriveCityName: o,
                            explanation: c,
                            rebookTips: l,
                          }),
                            this.setPageTitle("".concat(r, " ⇀ ").concat(o)),
                            C(i);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return (0, F.BX)(d.zt, {
                            store: this.pageService.store,
                            children: [
                              (0, F.tZ)(V, {}),
                              (0, F.tZ)(_, {}),
                              (0, F.tZ)(z, {}),
                              (0, F.tZ)(E, {}),
                              (0, F.tZ)(u.Z, {
                                ref: function (t) {
                                  e.onDrawerAttach(t, !0);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(s.default.Component))
              ) || v;
          Page(
            (0, a.createPageConfig)(
              J,
              "pages/flightAfterSale/rebookList/rebookList",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "改签申请",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#ffffff",
                backgroundColorTop: "#f5f5f5",
                backgroundColorBottom: "#f5f5f5",
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
            11256, 72032, 16386, 54726, 14030, 41834, 40980, 40981, 19559,
            11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(2303);
          }
        ),
          e.O();
      },
    ]);
})();
