!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/a6b9ed7171073b2dbf848c56c2af4e8b.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [3901],
      {
        46842: function (e, t, i) {
          var n = i(32180),
            a = i(57042),
            l = i(24460),
            o = i(81876),
            s = i(21867),
            r = i(86066),
            c = i(52500),
            m = i(71515),
            u = (i(92954), i(79792)),
            d = i(65573),
            h = i(45023),
            f = i(41991),
            p = i(298),
            v = {
              state: { shipDetail: null, isWithCar: !1, isShowRulesPop: !1 },
              reducers: {
                setShipDetail: function (e, t) {
                  return (0, p.Z)((0, p.Z)({}, e), {}, { shipDetail: t });
                },
                setWithCar: function (e, t) {
                  return (0, p.Z)((0, p.Z)({}, e), {}, { isWithCar: t });
                },
                setShowRulesPop: function (e, t) {
                  return (0, p.Z)((0, p.Z)({}, e), {}, { isShowRulesPop: t });
                },
              },
            },
            g = (function (e) {
              (0, s.Z)(i, e);
              var t = (0, r.Z)(i);
              function i() {
                return (0, a.Z)(this, i), t.apply(this, arguments);
              }
              return (0, l.Z)(i);
            })(f.Z);
          (0, h.Z)(g, "store", { models: { pageModel: v } });
          var w = i(81957),
            N = i(4102),
            _ = i(49120),
            Z = i(25297);
          var V,
            D = function (e) {
              g.getDispatch().pageModel.setShowRulesPop(e);
            },
            x = i(48813),
            B = (0, d.$j)(function (e) {
              return { shipDetail: e.pageModel.shipDetail };
            })(function (e) {
              var t = e.shipDetail || {},
                i = t.fromDate,
                n = t.useTimeFmt,
                a = t.fromTime,
                l = t.toTime,
                o = t.fromStationName,
                s = t.toStationName,
                r = t.toDay,
                c = t.tagDescList,
                u = t.isRunningClass,
                d = t.runningClassInfo,
                h = ""
                  .concat(N.Z.formatDate(i, "MM-DD"), " ")
                  .concat(N.Z.getWeekDayDesc(i)),
                f = " 耗时".concat(n);
              1 === u &&
                (f = " 耗时"
                  .concat(n, "  · ")
                  .concat(
                    null == d ? void 0 : d.runningClassInterval,
                    "分钟/班 · "
                  )
                  .concat(null == d ? void 0 : d.tag));
              var p = 1 === u ? (null == d ? void 0 : d.beginTime) : a,
                v = 1 === u ? (null == d ? void 0 : d.endTime) : l;
              return (0, x.BX)(m.View, {
                className: "ship-x-detail-card",
                children: [
                  (0, x.BX)(m.View, {
                    className: "time-wrap",
                    children: [
                      (0, x.tZ)(m.View, {
                        className: "from-tag flex-center",
                        children: 1 === u ? "流水班" : "出发",
                      }),
                      (0, x.BX)(m.View, {
                        className: "time-txt",
                        children: [
                          h,
                          !!n && (0, x.tZ)(m.Text, { children: f }),
                        ],
                      }),
                    ],
                  }),
                  (0, x.BX)(m.View, {
                    className: "detail-wrap",
                    children: [
                      (0, x.BX)(m.View, {
                        className: "time-colum ".concat(1 === u ? "flow" : ""),
                        children: [
                          (0, x.BX)(m.View, {
                            className: "time flex-align-items-center",
                            children: [
                              1 === u &&
                                (0, x.tZ)(m.View, {
                                  className: "flow-tag first",
                                  children: "首",
                                }),
                              (0, x.tZ)(m.View, { children: p }),
                            ],
                          }),
                          (0, x.BX)(m.View, {
                            className: "time flex-align-items-center to",
                            children: [
                              1 === u &&
                                (0, x.tZ)(m.View, {
                                  className: "flow-tag end",
                                  children: "末",
                                }),
                              (0, x.tZ)(m.View, { children: v }),
                            ],
                          }),
                          !!r &&
                            1 !== u &&
                            (0, x.BX)(m.View, {
                              className: "day",
                              children: ["+", r],
                            }),
                        ],
                      }),
                      (0, x.tZ)(m.Image, {
                        className: "line",
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_arrows@3x.png",
                      }),
                      (0, x.BX)(m.View, {
                        className: "station-wrap flex-1",
                        children: [
                          (0, x.tZ)(m.View, {
                            className: "station",
                            children: o,
                          }),
                          (0, x.tZ)(m.View, {
                            className: "station to",
                            children: s,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, x.BX)(m.View, {
                    className: "rule-wrap",
                    children: [
                      (0, x.tZ)(m.View, {
                        className: "flex-1",
                        children:
                          null == c
                            ? void 0
                            : c.map(function (e, t) {
                                return (0,
                                x.BX)(m.View, { className: "flex-align-items-center", children: [(0, x.tZ)(m.Image, { className: "rule-icon", src: null == e ? void 0 : e.icon }), (0, x.tZ)(m.View, { className: "flex-1 desc", style: { color: null == e ? void 0 : e.colour }, children: null == e ? void 0 : e.title })] }, t);
                              }),
                      }),
                      (0, x.BX)(m.View, {
                        id: "AOBC",
                        onClick: function () {
                          return D(!0);
                        },
                        className: "flex-align-items-center",
                        children: [
                          (0, x.tZ)(m.View, {
                            style: "color: #666",
                            children: "退改政策/取票方式",
                          }),
                          (0, x.tZ)(m.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_arrows1@3x.png",
                            className: "arr",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            y = (0, d.$j)(
              function (e) {
                var t = e.pageModel;
                return { shipDetail: t.shipDetail, isWithCar: t.isWithCar };
              },
              function (e) {
                var t = e.pageModel;
                return {
                  setWithCar: function (e) {
                    return t.setWithCar(e);
                  },
                };
              }
            )(function (e) {
              var t,
                i,
                n,
                a,
                l = e.shipDetail,
                o = e.setWithCar,
                s = e.isWithCar;
              if (
                null == l ||
                !l.carInfo ||
                null == l ||
                null === (t = l.carInfo) ||
                void 0 === t ||
                !t.isSupported
              )
                return (0, x.tZ)(m.View, {});
              var r = null == l ? void 0 : l.carInfo;
              return (0, x.BX)(m.View, {
                className: "ship-x-car-card",
                children: [
                  (0, x.BX)(m.View, {
                    className: "title-wrap",
                    children: [
                      (0, x.tZ)(m.View, {
                        className: "flex-1",
                        children: "带车上船",
                      }),
                      (0, x.BX)(m.View, {
                        className: "flex-align-items-center",
                        id: "AOBD",
                        onClick: function () {
                          return o(!s);
                        },
                        children: [
                          (0, x.BX)(m.View, {
                            className: "price",
                            children: [
                              "¥",
                              null == r ||
                              null === (i = r.carTypes[0]) ||
                              void 0 === i
                                ? void 0
                                : i.carPrice,
                              "/辆",
                            ],
                          }),
                          (0, x.tZ)(m.Image, {
                            src: s
                              ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_selected@3x.png"
                              : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_unselected@3x.png",
                            className: "select-icon",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (null == r || null === (n = r.carDescList) || void 0 === n
                    ? void 0
                    : n.length) > 0 &&
                    (0, x.tZ)(m.View, {
                      className: "desc-ls",
                      children:
                        null == r ||
                        null === (a = r.carDescList) ||
                        void 0 === a
                          ? void 0
                          : a.map(function (e, t) {
                              return (0,
                              x.BX)(m.View, { className: "desc", children: [(0, x.tZ)(m.View, { className: "round" }), (0, x.tZ)(m.Text, { children: e })] }, t);
                            }),
                    }),
                ],
              });
            }),
            C = c.default.memo(function (e) {
              var t = e.seat;
              return (0, x.BX)(m.View, {
                className: "ship-x-seat-card",
                children: [
                  (0, x.tZ)(m.Image, { src: t.seatImg, className: "ship-img" }),
                  (0, x.BX)(m.View, {
                    className: "flex-1 flex-colum info",
                    children: [
                      (0, x.tZ)(m.Text, {
                        className: "seat-name",
                        children: null == t ? void 0 : t.seatName,
                      }),
                      (0, x.tZ)(m.Text, {
                        className: "desc",
                        children: null == t ? void 0 : t.seatPs,
                      }),
                    ],
                  }),
                  (0, x.BX)(m.View, {
                    className: "btn-colum",
                    children: [
                      (0, x.BX)(m.View, {
                        className: "price-wrap ".concat(
                          null != t && t.seatNum ? "" : "disable"
                        ),
                        children: [
                          (0, x.tZ)(m.Text, {
                            className: "unit",
                            children: "¥",
                          }),
                          (0, x.tZ)(m.Text, {
                            className: "price",
                            children: null == t ? void 0 : t.seatPrice,
                          }),
                        ],
                      }),
                      (0, x.BX)(m.View, {
                        className: "btn flex-center ".concat(
                          null != t && t.seatNum ? "" : "disable"
                        ),
                        id: "AOBB",
                        onClick: function () {
                          if ((null == t ? void 0 : t.seatNum) > 0) {
                            var e,
                              i,
                              n = g.getPage(),
                              a =
                                null === (e = g.getState().pageModel) ||
                                void 0 === e
                                  ? void 0
                                  : e.shipDetail,
                              l =
                                null === (i = g.getState().pageModel) ||
                                void 0 === i
                                  ? void 0
                                  : i.isWithCar,
                              o = {
                                fromCityName:
                                  null == n ? void 0 : n.from_city_name,
                                toCityName: null == n ? void 0 : n.to_city_name,
                                fromStationName:
                                  null == n ? void 0 : n.from_station_name,
                                toStationName:
                                  null == n ? void 0 : n.to_station_name,
                                shipName: null == n ? void 0 : n.ship_name,
                                vendor: null == n ? void 0 : n.vendor,
                                fromDate: null == n ? void 0 : n.from_date,
                                fromTime: null == n ? void 0 : n.from_time,
                                toDate: a.toDate,
                                toTime: a.toTime,
                                useTime: a.useTime,
                                useTimeFmt: a.useTimeFmt,
                                website: a.website,
                                pickedSeat: t,
                                isWithCar: l,
                              };
                            null == n ||
                              n.navigateTo({
                                url: "/pages/ship/book/book",
                                data: o,
                              });
                          }
                        },
                        children: [
                          (0, x.tZ)(m.Text, {
                            children: null != t && t.seatNum ? "订" : "售空",
                          }),
                          !(null == t || !t.seatNum) &&
                            (null == t ? void 0 : t.seatNum) < 20 &&
                            (0, x.BX)(m.View, {
                              className: "ticket-tag flex-center",
                              children: [
                                "剩",
                                null == t ? void 0 : t.seatNum,
                                "张",
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            T = (0, d.$j)(function (e) {
              return { shipDetail: e.pageModel.shipDetail };
            })(function (e) {
              var t,
                i = e.shipDetail;
              return null != i &&
                null !== (t = i.seatInfo) &&
                void 0 !== t &&
                t.length
                ? (0, x.tZ)(m.View, {
                    children:
                      null == i
                        ? void 0
                        : i.seatInfo.map(function (e, t) {
                            return (0, x.tZ)(C, { seat: e }, t);
                          }),
                  })
                : (0, x.tZ)(m.View, {});
            }),
            X = i(31251),
            b = (0, d.$j)(function (e) {
              var t = e.pageModel;
              return { shipDetail: t.shipDetail, isShow: t.isShowRulesPop };
            })(function (e) {
              var t = e.shipDetail,
                i = e.isShow;
              return t
                ? (0, x.tZ)(X.Z, {
                    visible: i,
                    instructionList:
                      (null == t ? void 0 : t.instructionsDesc) || [],
                    onClose: function () {
                      return D(!1);
                    },
                  })
                : (0, x.tZ)(m.View, {});
            }),
            S = i(93621),
            k =
              (0, w.h)(!1, { usePageWrapper: !0 })(
                (V = (function (e) {
                  (0, s.Z)(i, e);
                  var t = (0, r.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, a.Z)(this, i),
                      ((n = t.call(this, e)).store = g.create(
                        (0, o.Z)(n)
                      ).store),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.setPageData(),
                            (function () {
                              (0, _.showLoading)();
                              var e = g.getPage();
                              (0, Z.ob)({
                                fromCityName:
                                  null == e ? void 0 : e.from_city_name,
                                toCityName: null == e ? void 0 : e.to_city_name,
                                fromStationName:
                                  null == e ? void 0 : e.from_station_name,
                                toStationName:
                                  null == e ? void 0 : e.to_station_name,
                                shipName: null == e ? void 0 : e.ship_name,
                                vendor: null == e ? void 0 : e.vendor,
                                fromDate: null == e ? void 0 : e.from_date,
                                fromTime: null == e ? void 0 : e.from_time,
                                fromPage: "XPage",
                              })
                                .then(function (t) {
                                  var i, n;
                                  1 === (null == t ? void 0 : t.code) &&
                                  (null == t ||
                                  null === (i = t.data) ||
                                  void 0 === i ||
                                  null === (n = i.seatInfo) ||
                                  void 0 === n
                                    ? void 0
                                    : n.length) > 0
                                    ? g
                                        .getDispatch()
                                        .pageModel.setShipDetail(
                                          null == t ? void 0 : t.data
                                        )
                                    : e.showCommonDialog({
                                        content:
                                          (null == t ? void 0 : t.message) ||
                                          "网络异常，请稍后再试",
                                        title: "温馨提示",
                                        buttonName: "我知道了",
                                        onButtonClick: function () {
                                          e.navigateBack();
                                        },
                                      });
                                })
                                .catch(function () {
                                  (0, _.showToast)("网络异常，请稍后再试");
                                })
                                .finally(function () {
                                  (0, _.hideLoading)();
                                });
                            })();
                        },
                      },
                      {
                        key: "setPageData",
                        value: function () {
                          var e = this.$instance.router.params || {};
                          console.log("params===", e);
                          var t = e.from_city_name,
                            i = e.to_city_name,
                            n = e.from_date,
                            a = e.from_time,
                            l = e.ship_name,
                            o = e.from_station_name,
                            s = e.to_station_name,
                            r = e.vendor;
                          (this.from_city_name = t),
                            (this.to_city_name = i),
                            (this.from_date = n),
                            (this.from_time = a),
                            (this.ship_name = l),
                            (this.from_station_name = o),
                            (this.to_station_name = s),
                            (this.vendor = r),
                            (this.utm_source = S.Z.getShipUtmSource()),
                            (this.channel = ""
                              .concat(u.default.miniType, "_")
                              .concat(u.default.jetpack));
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          var e = this.$instance.router.params || {},
                            t = e.from_city_name,
                            i = e.to_city_name;
                          return (0, x.BX)(m.View, { children: [t, "-", i] });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, x.BX)(d.zt, {
                            store: this.store,
                            children: [
                              (0, x.tZ)(B, {}),
                              (0, x.tZ)(y, {}),
                              (0, x.tZ)(T, {}),
                              (0, x.tZ)(b, {}),
                              (0, x.tZ)(m.View, {
                                className: "flex-center",
                                children: (0, x.tZ)(m.Image, {
                                  className: "ship-x-logo",
                                  src: u.default.isTieyou
                                    ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_ty@3x.png"
                                    : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_zx@3x.png",
                                }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(c.default.Component))
              ) || V;
          Page(
            (0, n.createPageConfig)(
              k,
              "pages/ship/x/x",
              { root: { cn: [] } },
              { backgroundColor: "#0066E6", navigationStyle: "custom" } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [606, 8014, 81198, 2632, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(46842);
        }),
          e.O();
      },
    ]);
})();
