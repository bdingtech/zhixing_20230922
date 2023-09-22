!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/77d3751beb3e2bc1242396ba7c218030.js"),
    require("../sub-common/875c9573fb7fcc8b910e806c934114d8.js"),
    require("../sub-common/b83cfd8d07f3dd9c10aca815df21c2a8.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [39205],
      {
        63883: function (e, r, t) {
          var n = t(32180),
            o = t(57042),
            a = t(24460),
            i = t(81876),
            c = t(21867),
            s = t(86066),
            u = t(52500),
            l = t(65573),
            d = t(81957),
            f = t(45023),
            m = t(44778),
            b = t(76988),
            h = t(298),
            k = {
              state: { orderNumber: "", rebookInfos: [], currentIndex: 0 },
              reducers: {
                setState: function (e, r) {
                  return (0, h.Z)((0, h.Z)({}, e), r);
                },
              },
            },
            g = (function (e) {
              (0, c.Z)(t, e);
              var r = (0, s.Z)(t);
              function t() {
                return (0, o.Z)(this, t), r.apply(this, arguments);
              }
              return (
                (0, a.Z)(t, [
                  {
                    key: "initStore",
                    value: function () {
                      this.store = (0, m.S1)({ models: { pageModel: k } });
                    },
                  },
                ]),
                t
              );
            })(b.Z);
          (0, f.Z)(g, "defaultModel", "pageModel");
          var p,
            I = t(71515),
            N = t(70120),
            v = t(49120),
            Z = t(65484),
            x = function () {
              var e = {
                data: { orderNumber: g.getState().orderNumber, version: 4 },
              };
              (0, v.showLoading)(),
                (0, Z.Nd)(e)
                  .then(function (e) {
                    if (1 == e.resultCode && e.data) {
                      var r = e.data.flightSegmentInfos.reduce(function (e, r) {
                        return e.concat(r.rebookInfos);
                      }, []);
                      g.dispatch().setState({ rebookInfos: r });
                    }
                  })
                  .finally(function () {
                    return (0, v.hideLoading)();
                  });
            },
            w = t(48813),
            C = function (e) {
              var r = e.detail.current;
              g.dispatch().setState({ currentIndex: r });
            },
            V = function () {
              var e = g.getState(),
                r = e.orderNumber,
                t = e.rebookInfos,
                n = e.currentIndex,
                o = {
                  data: {
                    orderNumber: r,
                    rebookOrderNumber: (Array.isArray(t) ? t[n] : {})
                      .rebookOrderNumber,
                  },
                };
              (0, v.showLoading)(),
                (0, Z.d2)(o)
                  .then(function (e) {
                    var r = e.resultCode,
                      t = e.resultMessage;
                    1 == r &&
                      (0, v.getCurrentPage)().showCommonDialog({
                        title: "改签催处理",
                        content: t,
                        buttonName: "我知道了",
                        onButtonClick: function () {
                          x();
                        },
                        className: "urge-rebook-dialog",
                      });
                  })
                  .finally(function () {
                    return (0, v.hideLoading)();
                  });
            },
            B = u.default.memo(
              (0, l.$j)(function (e) {
                var r = e.pageModel;
                return {
                  rebookInfos: r.rebookInfos,
                  currentIndex: r.currentIndex,
                };
              })(function (e) {
                var r = e.rebookInfos,
                  t = e.currentIndex;
                if (null == r || !r.length) return (0, w.tZ)(I.View, {});
                var n = { width: "".concat(12 * r.length + 4, "rpx") },
                  o = {
                    transform: "translate3d(".concat(12 * t, "rpx, 0, 0)"),
                  };
                return (0, w.BX)(I.View, {
                  children: [
                    (0, w.tZ)(I.Swiper, {
                      className: "rebook-swiper",
                      onChange: C,
                      current: t,
                      children: r.map(function (e, r) {
                        var t = e.rebookStatus,
                          n = e.rebookDetails,
                          o = e.urgeRebook,
                          a = n[0],
                          i = a.title,
                          c = a.totalPrice;
                        return (0, w.tZ)(
                          I.SwiperItem,
                          {
                            children: (0, w.BX)(I.View, {
                              className:
                                "rebook-detail-hd flex-align-items-center",
                              children: [
                                (0, w.BX)(I.View, {
                                  className: "status color-2 flex-1",
                                  children: [
                                    (0, w.tZ)(I.Text, { children: t }),
                                    o &&
                                      (0, w.tZ)(I.Text, {
                                        className: "urge-btn",
                                        id: "AbAI",
                                        onClick: V,
                                        children: "催处理",
                                      }),
                                  ],
                                }),
                                (0, w.BX)(I.View, {
                                  className: "rbox flex",
                                  id: "AbAJ",
                                  onClick: function () {
                                    return (function (e) {
                                      var r = (0, N.v)(e);
                                      (0, N.F)({ priceDetail: r });
                                    })(n[0]);
                                  },
                                  children: [
                                    (0, w.BX)(I.View, {
                                      className: "tit font-11",
                                      children: [i, "："],
                                    }),
                                    (0, w.BX)(I.View, {
                                      className: "price color-blue",
                                      children: [
                                        c,
                                        (0, w.tZ)(I.Text, {
                                          className: "ifont2-arr iconfont2",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          r
                        );
                      }),
                    }),
                    (0, w.tZ)(I.View, {
                      className: "node-isolate-rebook-remark",
                      children:
                        r[t].rebookRemark &&
                        (0, w.BX)(I.View, {
                          className: "rebook-remark font-11",
                          children: [
                            (0, w.tZ)(I.Text, {
                              className: "font-m",
                              children: "改签提醒：",
                            }),
                            r[t].rebookRemark,
                          ],
                        }),
                    }),
                    (0, w.tZ)(I.View, {
                      className: "node-isolate-indicator flex-center",
                      children:
                        r.length > 1 &&
                        (0, w.tZ)(I.View, {
                          className: "swiper-indicator",
                          style: n,
                          children: (0, w.tZ)(I.View, {
                            className: "indicator",
                            style: o,
                          }),
                        }),
                    }),
                  ],
                });
              })
            ),
            S = t(8271),
            y = t.n(S),
            T = t(12508),
            D = u.default.memo(
              (0, l.$j)(function (e) {
                var r = e.pageModel;
                return {
                  currentIndex: r.currentIndex,
                  rebookInfos: r.rebookInfos,
                };
              })(function (e) {
                var r = e.rebookInfos,
                  t = e.currentIndex,
                  n = null == r ? void 0 : r[t];
                if (!n) return (0, w.tZ)(I.View, {});
                var o = n.flightSegmentInfo,
                  a = n.passengerInfos,
                  i = o.airCompanyIcon,
                  c = o.airCompanyName,
                  s = o.flightNumber,
                  u = o.mealDesc,
                  l = o.departCityName,
                  d = o.arriveCityName,
                  f = o.departDateTime,
                  m = (0, h.Z)({}, o);
                m.basicInfo = {
                  airlineIcon: i,
                  airlineName: c,
                  flightNumber: s,
                  mealDesc: u,
                  tag: "新航班",
                };
                var b = {
                  passengerList: a,
                  otherInfos: [
                    {
                      title: "改签行程",
                      content: ""
                        .concat(s, " ")
                        .concat(l, "-")
                        .concat(d, " ")
                        .concat(y()(f).format("MM月DD日 HH:mm")),
                    },
                  ],
                };
                return (0, w.tZ)(T.Z, { flightDetail: m, rebookInfo: b });
              })
            ),
            M = t(25949),
            X = t.n(M),
            j = t(34229),
            P = u.default.memo(
              (0, l.$j)(function (e) {
                var r = e.pageModel;
                return {
                  rebookInfos: r.rebookInfos,
                  currentIndex: r.currentIndex,
                };
              })(function (e) {
                var r = e.rebookInfos[e.currentIndex];
                if (!r) return (0, w.tZ)(I.View, {});
                var t = r.rebookProgress;
                return (0, w.tZ)(I.View, {
                  className: "rebook-progress flt-white-box",
                  children: t.map(function (e, r) {
                    var n, o;
                    return (0,
                    w.BX)(I.View, { className: X()("flex-align-items-center progress", { checked: e.isCheck, t11: null === (n = t[r + 1]) || void 0 === n ? void 0 : n.isCheck, t12: e.isCheck && !(null !== (o = t[r + 1]) && void 0 !== o && o.isCheck), t22: !e.isCheck }), children: [(0, w.tZ)(I.View, { className: "progress-icon", children: (0, w.tZ)(I.Text, { className: "".concat(e.isCheck ? "color-blue ifont2-checkboxed iconfont2" : "circle") }) }), (0, w.BX)(I.View, { className: "cont", children: [(0, w.tZ)(I.View, { className: "status font-13 color-2", children: (0, w.tZ)(j.ZtRichText, { nodes: e.status, space: "nbsp" }) }), e.remark && (0, w.tZ)(I.View, { className: "remark font-13 color-9", children: e.remark })] })] }, r);
                  }),
                });
              })
            ),
            R = t(4845),
            A = function () {
              var e = g.getState(),
                r = e.orderNumber,
                t = e.rebookInfos[e.currentIndex],
                n = t.rebookOrderNumber,
                o = t.tips,
                a = { data: { orderNumber: r, rebookOrderNumber: n } };
              g.showMultiButtonDialog({
                title: "取消改签",
                content: o || "是否确定取消?",
                leftButtonName: "取消",
                rightButtonName: "确定",
                onRightButtonClick: function () {
                  !(function (e) {
                    (0, Z.Of)(e).then(function (e) {
                      1 == e.resultCode &&
                        ((0, v.showToast)(e.resultMessage || "提交成功"), x());
                    });
                  })(a);
                },
              });
            },
            O = u.default.memo(
              (0, l.$j)(function (e) {
                var r = e.pageModel;
                return {
                  currentIndex: r.currentIndex,
                  rebookInfos: r.rebookInfos,
                };
              })(function (e) {
                var r = e.rebookInfos,
                  t = e.currentIndex,
                  n = null == r ? void 0 : r[t];
                return n && n.cancelRebook
                  ? (0, w.tZ)(R.Z, {
                      className: "rebook-detail-bottom-btn",
                      buttonText: "取消改签",
                      onConfirm: A,
                    })
                  : (0, w.tZ)(I.View, {});
              })
            ),
            q =
              (0, d.h)(!1, { usePageWrapper: !0 })(
                (p = (function (e) {
                  (0, c.Z)(t, e);
                  var r = (0, s.Z)(t);
                  function t(e) {
                    var n;
                    return (
                      (0, o.Z)(this, t),
                      ((n = r.call(this, e)).pageId = "10650088104"),
                      (n.pageService = g.create((0, i.Z)(n))),
                      (n.pageRootClassName = "flight-rebook-detail"),
                      (n.pageContentIsFullScreen = !0),
                      n
                    );
                  }
                  return (
                    (0, a.Z)(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = g.getRouterParams(),
                            r = e.currentIndex,
                            t = e.rebookInfos,
                            n = e.orderNumber;
                          g
                            .dispatch()
                            .setState({
                              orderNumber: n,
                              currentIndex: r,
                              rebookInfos: t,
                            }),
                            this.setPageTitle("改签详情");
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, w.BX)(l.zt, {
                            store: this.pageService.store,
                            children: [
                              (0, w.tZ)(B, {}),
                              (0, w.tZ)(D, {}),
                              (0, w.tZ)(P, {}),
                              (0, w.tZ)(O, {}),
                            ],
                          });
                        },
                      },
                    ]),
                    t
                  );
                })(u.default.Component))
              ) || p;
          Page(
            (0, n.createPageConfig)(
              q,
              "pages/flightAfterSale/rebookDetail/rebookDetail",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "改签详情",
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
            11256, 8014, 81198, 72032, 16386, 54726, 74278, 75239, 19559, 11216,
            68592,
          ],
          function () {
            return (function (r) {
              return e((e.s = r));
            })(63883);
          }
        ),
          e.O();
      },
    ]);
})();
