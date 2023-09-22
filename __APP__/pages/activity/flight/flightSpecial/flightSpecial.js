!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/d95d6e4c08de6037c2a3a34879bb09fe.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [463],
      {
        80888: function (e, t, i) {
          var a,
            c = i(32180),
            n = i(298),
            r = i(57042),
            l = i(24460),
            s = i(81876),
            o = i(21867),
            d = i(86066),
            u = i(45023),
            p = i(52500),
            h = i(92954),
            m = i.n(h),
            f = i(81957),
            C = i(71515),
            y = i(79792),
            Z = i(79910),
            w = i(59086),
            g = i(9062),
            N = i(3205),
            P = i(94383),
            v = i(90129),
            V = i(22276),
            x = i(34229),
            D = i(8271),
            k = i.n(D),
            F = i(48813),
            b = y.default.isTieyou,
            T = (function () {
              for (var e = [], t = 0; t < 6; t++) {
                var i = k()().add(t, "month"),
                  a = t > 0 ? i.startOf("month") : i,
                  c = i.endOf("month"),
                  n = {
                    m: i.format("YYYY年MM月"),
                    startDate: a.format("YYYY-MM-DD"),
                    endDate: c.format("YYYY-MM-DD"),
                    selected: !1,
                  };
                e.push(n);
              }
              return e;
            })(),
            B = {
              specialPriceMonthAll: !0,
              specialPriceMonths: T,
              specialPriceWeekDays: [
                { w: "一", d: 1, selected: !1 },
                { w: "二", d: 2, selected: !1 },
                { w: "三", d: 3, selected: !1 },
                { w: "四", d: 4, selected: !1 },
                { w: "五", d: 5, selected: !1 },
                { w: "六", d: 6, selected: !1 },
                { w: "日", d: 0, selected: !1 },
              ],
            },
            S = function (e, t) {
              switch (t.type) {
                case "setMonth":
                  return (function (e, t) {
                    var i = t.index,
                      a = e.specialPriceMonthAll,
                      c = (0, V.Z)(e.specialPriceMonths);
                    if ((console.log(i), i > -1)) {
                      var r = c[i].selected;
                      return (
                        (c[i] = (0, n.Z)(
                          (0, n.Z)({}, c[i]),
                          {},
                          { selected: !r }
                        )),
                        (0, n.Z)(
                          (0, n.Z)({}, e),
                          {},
                          { specialPriceMonths: c, specialPriceMonthAll: !1 }
                        )
                      );
                    }
                    return a
                      ? (0, n.Z)(
                          (0, n.Z)({}, e),
                          {},
                          { specialPriceMonthAll: !1 }
                        )
                      : (0, n.Z)(
                          (0, n.Z)({}, e),
                          {},
                          {
                            specialPriceMonths: c.map(function (e) {
                              return (0,
                              n.Z)((0, n.Z)({}, e), {}, { selected: !1 });
                            }),
                            specialPriceMonthAll: !0,
                          }
                        );
                  })(e, t);
                case "setWeekDay":
                  return (function (e, t) {
                    var i = t.index,
                      a = (0, V.Z)(e.specialPriceWeekDays),
                      c = a[i].selected;
                    return (
                      (a[i] = (0, n.Z)(
                        (0, n.Z)({}, a[i]),
                        {},
                        { selected: !c }
                      )),
                      (0, n.Z)((0, n.Z)({}, e), {}, { specialPriceWeekDays: a })
                    );
                  })(e, t);
                case "reset":
                  return (0, n.Z)({}, B);
              }
            },
            A = p.default.memo(function (e) {
              var t = e.showSpecialPriceFilter,
                i = (0, p.useReducer)(S, B),
                a = (0, v.Z)(i, 2),
                c = a[0],
                n = a[1];
              (0, p.useEffect)(function () {
                e.onInitialized && e.onInitialized(B);
              }, []);
              var r = c.specialPriceMonthAll,
                l = c.specialPriceMonths,
                s = c.specialPriceWeekDays;
              return (0, F.BX)(x.ZtDrawer, {
                className: "flt-spcl-prc-fltr",
                isShowClose: !1,
                show: t,
                onWrapClose: e.toggleSpecialPriceFilter,
                children: [
                  (0, F.BX)(C.View, {
                    className: "pop-botm-hd",
                    children: [
                      (0, F.tZ)(C.View, {
                        className: "btn-cancel",
                        id: "AACz",
                        onClick: e.toggleSpecialPriceFilter,
                        children: "关闭",
                      }),
                      (0, F.tZ)(C.View, {
                        className: "tit",
                        children: "选择时间",
                      }),
                      (0, F.tZ)(C.View, { className: "btn-submit" }),
                    ],
                  }),
                  (0, F.BX)(C.View, {
                    className: "pop-botm-bd pop-fuzzy-search",
                    children: [
                      (0, F.BX)(C.View, {
                        className: "pop-fuzzy-bd",
                        children: [
                          (0, F.tZ)(C.View, {
                            className: "tit",
                            children: "旅行月份 (多选）",
                          }),
                          (0, F.BX)(C.View, {
                            className: "pop-fuzzy-month " + (b ? "ty" : "zx"),
                            children: [
                              (0, F.BX)(C.View, {
                                className: "item " + (r ? "cur" : ""),
                                id: "AADA",
                                onClick: function () {
                                  return n({ type: "setMonth", index: -1 });
                                },
                                children: [
                                  "未来半年",
                                  r &&
                                    (0, F.tZ)(C.Text, {
                                      className: "ifont-selected iconfont",
                                    }),
                                ],
                              }),
                              null == l
                                ? void 0
                                : l.map(function (e, t) {
                                    return (0, F.BX)(
                                      C.View,
                                      {
                                        className:
                                          "item " + (e.selected ? "cur" : ""),
                                        id: "AADB",
                                        onClick: function () {
                                          return n({
                                            type: "setMonth",
                                            index: t,
                                          });
                                        },
                                        children: [
                                          e.m,
                                          e.selected &&
                                            (0, F.tZ)(C.Text, {
                                              className:
                                                "ifont-selected iconfont",
                                            }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                            ],
                          }),
                          (0, F.tZ)(C.View, {
                            className: "tit",
                            children: "周几出发 (多选）",
                          }),
                          (0, F.tZ)(C.View, {
                            className: "pop-fuzzy-week " + (b ? "ty" : "zx"),
                            children:
                              null == s
                                ? void 0
                                : s.map(function (e, t) {
                                    return (0, F.BX)(
                                      C.View,
                                      {
                                        className:
                                          "item " + (e.selected ? "cur" : ""),
                                        id: "AADC",
                                        onClick: function () {
                                          return n({
                                            type: "setWeekDay",
                                            index: t,
                                          });
                                        },
                                        children: [
                                          e.w,
                                          e.selected &&
                                            (0, F.tZ)(C.Text, {
                                              className:
                                                "ifont-selected iconfont",
                                            }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                          }),
                        ],
                      }),
                      (0, F.BX)(C.View, {
                        className: "flex pop-btn " + (b ? "ty" : "zx"),
                        children: [
                          (0, F.tZ)(C.Button, {
                            className: "btn-cancel",
                            id: "AADD",
                            onClick: function () {
                              return n({ type: "reset" });
                            },
                            children: "重置",
                          }),
                          (0, F.tZ)(C.Button, {
                            className: "btn-submit bgcolor-primary",
                            id: "AADE",
                            onClick: function () {
                              return e.onSubmit(c);
                            },
                            children: "查询低价",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            I = i(49120),
            X = i(55916),
            M = y.default.isTieyou,
            W = "setNoFlight",
            Y = "setRecommends",
            z = "setPriceTags",
            L = function (e) {
              var t,
                i = e.state,
                a = e.action,
                c = e.props,
                r = e.dispatch,
                l = e.dateFormat,
                s = void 0 === l ? "MM-DD" : l,
                o = c.specialPriceWeekDays,
                d = c.specialPriceMonths,
                u = c.specialPriceCityCode,
                p = void 0 === u ? "" : u,
                h = i.specialPriceTags,
                m =
                  (null == h ||
                  null ===
                    (t = h.find(function (e) {
                      return e.selected;
                    })) ||
                  void 0 === t
                    ? void 0
                    : t.id) || 0,
                f = {
                  data: {
                    searchPoiType: m,
                    depCode: p,
                    segmentType: 1,
                    sort: 0,
                    departureDates: d
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return { startDate: e.startDate, endDate: e.endDate };
                      }),
                    weekDays: o
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return e.d;
                      }),
                    version: 1,
                  },
                },
                C = [
                  { name: "全部", id: 0 },
                  { name: "国际热门", id: 1 },
                  { name: "东南亚", id: 2 },
                  { name: "港澳台(中国)", id: 3 },
                  { name: "海岛游", id: 4 },
                  { name: "免签/落地签", id: 7 },
                ];
              return (0, X.g)(f)
                .then(function (e) {
                  var t = e.resultCode,
                    i = e.data,
                    c = void 0 === i ? {} : i,
                    l = c.tagInfos || C;
                  if (
                    ((null == a ? void 0 : a.type) !== z &&
                      r({
                        type: z,
                        specialPriceTags: l.map(function (e) {
                          return (0,
                          n.Z)((0, n.Z)({}, e), {}, { selected: e.id === m });
                        }),
                      }),
                    1 === t && c.searchResult)
                  ) {
                    var o = c.searchResult.map(function (e) {
                      var t = e.backDateTime
                          ? k()(e.backDateTime).format(s)
                          : "",
                        i = k()(e.goDateTime).format(s),
                        a = Z.Z.getWeekInfo(k()(e.goDateTime));
                      return (0,
                      n.Z)((0, n.Z)({}, e), {}, { cityTags: e.arrCityDes ? e.arrCityDes.split("，") : [], date: i, week: a, backDate: t, feedsType: "recommend", arrCityImgUrl: e.arrCityImgUrl || "https://images3.c-ctrip.com/zt/wechat/flight/index_flight_rec_".concat(M ? "ty" : "zx", ".png") });
                    });
                    r({ type: Y, recommends: o });
                  } else r({ type: W });
                })
                .catch(function (e) {
                  console.log("request err", e), r({ type: W });
                });
            },
            R = function (e) {
              var t = e.index,
                i = e.state,
                a = e.dispatch,
                c = e.props,
                r = e.dateFormat,
                l = (0, V.Z)(i.specialPriceTags),
                s = l.findIndex(function (e) {
                  return e.selected;
                });
              if (s !== t)
                return (
                  (l[s] = (0, n.Z)((0, n.Z)({}, l[s]), {}, { selected: !1 })),
                  (l[t] = (0, n.Z)((0, n.Z)({}, l[t]), {}, { selected: !0 })),
                  a({ type: z, specialPriceTags: l }),
                  L({
                    state: { specialPriceTags: l },
                    props: c,
                    action: { type: z },
                    dispatch: a,
                    dateFormat: r,
                  })
                );
            },
            E = function (e, t) {
              switch (t.type) {
                case W:
                  return (0, n.Z)((0, n.Z)({}, e), {}, { noFlightFeeds: !0 });
                case Y:
                  return (0, n.Z)(
                    (0, n.Z)({}, e),
                    {},
                    { noFlightFeeds: !1, recommends: (0, V.Z)(t.recommends) }
                  );
                case z:
                  return (0, n.Z)(
                    (0, n.Z)({}, e),
                    {},
                    { specialPriceTags: (0, V.Z)(t.specialPriceTags) }
                  );
              }
            },
            U = "MM月DD日",
            O = { noFlightFeeds: !0, recommends: [], specialPriceTags: null },
            q = p.default.memo(function (e) {
              var t = e.specialPriceCity,
                i = e.specialPriceCityCode,
                a = e.specialPriceWeekDays,
                c = e.specialPriceMonths,
                n = e.discountPrice,
                r = (0, p.useReducer)(E, O),
                l = (0, v.Z)(r, 2),
                s = l[0],
                o = l[1],
                d = (0, p.useState)(!1),
                u = (0, v.Z)(d, 2),
                h = u[0],
                m = u[1],
                f = s.specialPriceTags,
                y = h ? (0, V.Z)(s.recommends) : s.recommends.slice(0, 8);
              (0, p.useEffect)(
                function () {
                  i &&
                    a &&
                    c &&
                    ((0, I.showLoading)(),
                    L({
                      state: { specialPriceTags: f },
                      props: {
                        specialPriceCityCode: i,
                        specialPriceMonths: c,
                        specialPriceWeekDays: a,
                      },
                      dispatch: o,
                      dateFormat: U,
                    }).finally(function () {
                      return (0, I.hideLoading)();
                    }));
                },
                [i, a, c]
              );
              return (0, F.BX)(C.View, {
                className: "white-box where-box",
                children: [
                  (0, F.BX)(C.View, {
                    className: "where-hd",
                    children: [
                      (0, F.tZ)(C.View, {
                        className: "htit",
                        children: "去哪便宜",
                      }),
                      (0, F.BX)(C.View, {
                        className: "rbox",
                        children: [
                          (0, F.BX)(C.View, {
                            className: "item",
                            id: "AeAD",
                            onClick: e.chooseFlightCity,
                            children: [
                              (0, F.tZ)(C.Text, {
                                className:
                                  "iconfont ifont-location color-primary",
                              }),
                              (0, F.BX)(C.View, {
                                className: "txt",
                                children: [t, "出发"],
                              }),
                            ],
                          }),
                          (0, F.BX)(C.View, {
                            className: "item",
                            id: "AeAE",
                            onClick: e.toggleSpecialPriceFilter,
                            children: [
                              (0, F.tZ)(C.View, {
                                className: "txt",
                                children: "时间筛选",
                              }),
                              (0, F.tZ)(C.Text, {
                                className: "iconfont ifont-arr",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, F.tZ)(C.View, {
                    className: "where-tag",
                    children:
                      null == f
                        ? void 0
                        : f.map(function (t, i) {
                            return (0, F.tZ)(
                              C.View,
                              {
                                className:
                                  "item " +
                                  (t.selected ? "cur color-primary" : ""),
                                id: "AeAF",
                                onClick: function () {
                                  return (function (e) {
                                    f.findIndex(function (e) {
                                      return e.isSelected;
                                    }) != e.index &&
                                      ((0, I.showLoading)(),
                                      R(e).finally(function () {
                                        return (0, I.hideLoading)();
                                      }));
                                  })({
                                    state: s,
                                    props: e,
                                    dispatch: o,
                                    index: i,
                                    dateFormat: U,
                                  });
                                },
                                children: t.name,
                              },
                              t.id
                            );
                          }),
                  }),
                  (0, F.tZ)(C.View, {
                    className: "where-bd",
                    children:
                      null == y
                        ? void 0
                        : y.map(function (t, i) {
                            return (0, F.BX)(
                              C.View,
                              {
                                className: "item",
                                id: "AeAG",
                                onClick: function () {
                                  return e.handleFlightFeedsClick(t);
                                },
                                children: [
                                  (0, F.BX)(C.View, {
                                    className: "tit",
                                    children: [
                                      (0, F.tZ)(C.View, {
                                        className: "city",
                                        children: t.depCityName,
                                      }),
                                      (0, F.tZ)(C.Icon, {
                                        className: "icon-flight",
                                      }),
                                      (0, F.tZ)(C.View, {
                                        className: "city",
                                        children: t.arrCityName,
                                      }),
                                      (0, F.tZ)(C.View, {
                                        className: "price color-red",
                                        children: t.price,
                                      }),
                                    ],
                                  }),
                                  (0, F.BX)(C.View, {
                                    className: "txt",
                                    children: [
                                      (0, F.tZ)(C.View, {
                                        className: "lst",
                                        children: t.date,
                                      }),
                                      (0, F.tZ)(C.View, {
                                        className: "lst",
                                        children: t.week,
                                      }),
                                      n > 0 &&
                                        (0, F.BX)(C.View, {
                                          className: "tag",
                                          children: [
                                            (0, F.tZ)(C.Text, {
                                              className: "label color-red",
                                              children: "券后价",
                                            }),
                                            (0, F.tZ)(C.View, {
                                              className: "sprice",
                                              children: t.price - n,
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              i
                            );
                          }),
                  }),
                  !h &&
                    (0, F.BX)(C.View, {
                      className: "btn-more",
                      id: "AeAH",
                      onClick: function () {
                        return m(!0);
                      },
                      children: [
                        (0, F.tZ)(C.Text, {
                          className: "txt",
                          children: "展开更多",
                        }),
                        (0, F.tZ)(C.Text, { className: "iconfont ifont-arr" }),
                      ],
                    }),
                ],
              });
            }),
            H = i(28352),
            J = function (e) {
              var t = e.props,
                i = e.setRecommends,
                a = t.departureCityCode,
                c = {
                  data: {
                    source: 0,
                    searchType: "OneWay",
                    arrivalCityCode: t.arrivalCityCode,
                    departureCityCode: a,
                    departureDates: [
                      {
                        startDate: k()().format("YYYY-MM-DD"),
                        endDate: k()().add(90, "day").format("YYYY-MM-DD"),
                      },
                    ],
                  },
                };
              return (0, H.cb)(c).then(function (e) {
                if (1 == e.resultCode && e.data) {
                  var t = e.data.results
                    .sort(function (e, t) {
                      return e.price - t.price;
                    })
                    .slice(0, 4)
                    .map(function (e) {
                      return (0,
                      n.Z)((0, n.Z)({}, e), {}, { date: k()(e.departureDate).format("MM月DD日"), week: Z.Z.getWeekInfo(k()(e.departureDate)) });
                    });
                  i(t);
                }
              });
            },
            Q = p.default.memo(function (e) {
              var t = e.departureCity,
                i = e.departureCityCode,
                a = e.arrivalCity,
                c = e.arrivalCityCode,
                n = e.discountPrice,
                r = (0, p.useState)([]),
                l = (0, v.Z)(r, 2),
                s = l[0],
                o = l[1];
              return (
                (0, p.useEffect)(
                  function () {
                    i &&
                      c &&
                      ((0, I.showLoading)(),
                      J({ props: e, setRecommends: o }).finally(function () {
                        return (0, I.hideLoading)();
                      }));
                  },
                  [i, c]
                ),
                (0, F.BX)(C.View, {
                  className: "white-box when-box",
                  children: [
                    (0, F.tZ)(C.View, {
                      className: "when-hd",
                      children: (0, F.tZ)(C.View, {
                        className: "htit",
                        children: "何时出发最便宜",
                      }),
                    }),
                    (0, F.BX)(C.View, {
                      className: "when-select",
                      children: [
                        (0, F.BX)(C.View, {
                          className: "item",
                          id: "AeAA",
                          onClick: e.chooseFlightCity,
                          children: [
                            (0, F.tZ)(C.Text, {
                              className: "label",
                              children: "出发地",
                            }),
                            (0, F.tZ)(C.View, {
                              className: "city",
                              children: t,
                            }),
                            (0, F.tZ)(C.Text, {
                              className: "iconfont ifont-arr",
                            }),
                          ],
                        }),
                        (0, F.BX)(C.View, {
                          className: "item",
                          id: "AeAB",
                          onClick: function () {
                            return e.chooseFlightCity({ type: "to" });
                          },
                          children: [
                            (0, F.tZ)(C.Text, {
                              className: "label",
                              children: "到达地",
                            }),
                            (0, F.tZ)(C.View, {
                              className: "city",
                              children: a,
                            }),
                            (0, F.tZ)(C.Text, {
                              className: "iconfont ifont-arr",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, F.tZ)(C.View, {
                      className: "when-bd",
                      children:
                        null == s
                          ? void 0
                          : s.map(function (t, i) {
                              return (0, F.BX)(
                                C.View,
                                {
                                  className: "item",
                                  id: "AeAC",
                                  onClick: function () {
                                    return e.handleWhenItemClick(t);
                                  },
                                  children: [
                                    (0, F.BX)(C.View, {
                                      className: "tit",
                                      children: [t.date, " ", t.week],
                                    }),
                                    (0, F.BX)(C.View, {
                                      className: "txt",
                                      children: [
                                        (0, F.tZ)(C.View, {
                                          className: "price color-red",
                                          children: t.price,
                                        }),
                                        n > 0 &&
                                          (0, F.BX)(C.View, {
                                            className: "tag",
                                            children: [
                                              (0, F.tZ)(C.Text, {
                                                className: "label color-red",
                                                children: "券后价",
                                              }),
                                              (0, F.tZ)(C.View, {
                                                className: "sprice",
                                                children: t.price - n,
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                },
                                i
                              );
                            }),
                    }),
                  ],
                })
              );
            }),
            _ = p.default.memo(function (e) {
              var t = e.couponName,
                i = e.couponPrice,
                a = e.expireTime,
                c = e.speedPackNum,
                n = (0, p.useState)(!0),
                r = (0, v.Z)(n, 2),
                l = r[0],
                s = r[1],
                o = (0, p.useCallback)(function () {
                  s(!1);
                }, []),
                d =
                  c > 0
                    ? '成功为好友助力<font color="#FFE288">'.concat(
                        c,
                        "个</font>加速包"
                      )
                    : "好友离抢票成功又近了一步",
                u = '超低价机票，再送您<font color="#FFE288">'.concat(
                  t,
                  "</font>！"
                );
              return (0, F.tZ)(x.ZtActivityPop, {
                show: l,
                onClose: o,
                onWrapClose: o,
                animation: "normal",
                isShowClose: !0,
                className: "new-user-bnft-dlg",
                children: (0, F.BX)(C.View, {
                  className:
                    "flt-bnft-dlg-bd flex-align-items-center flex-column",
                  children: [
                    (0, F.tZ)(C.View, {
                      className: "head-title",
                      children: (0, F.tZ)(x.ZtRichText, { nodes: d }),
                    }),
                    (0, F.tZ)(C.View, {
                      className: "title",
                      children: (0, F.tZ)(x.ZtRichText, { nodes: u }),
                    }),
                    (0, F.tZ)(C.View, { className: "price", children: i }),
                    (0, F.tZ)(C.Button, {
                      className: "confirm-btn",
                      id: "AeAI",
                      onClick: o,
                      children: "立即使用",
                    }),
                    (0, F.BX)(C.View, {
                      className: "coupon-count-down flex-align-items-center",
                      children: [
                        (0, F.tZ)(x.ZtCountdown, {
                          onTimeup: function () {
                            return o();
                          },
                          endTime: a,
                          isShowDay: !0,
                        }),
                        "后失效",
                      ],
                    }),
                  ],
                }),
              });
            }),
            j = p.default.memo(function (e) {
              var t = e.headTitle,
                i = e.couponInfos,
                a = i.length;
              return (0, F.BX)(C.View, {
                className: "coupon-box",
                children: [
                  (0, F.BX)(C.View, {
                    className: "coupon-hd flex-align-items-center",
                    children: [
                      (0, F.tZ)(C.Icon, { className: "icon-coupon" }),
                      (0, F.tZ)(C.View, { className: "tit", children: t }),
                    ],
                  }),
                  a > 1 &&
                    (0, F.tZ)(C.View, {
                      className: "flex coupon-bd ".concat(
                        a > 2 ? "three" : "two"
                      ),
                      children:
                        null == i
                          ? void 0
                          : i.map(function (e, t) {
                              return (0,
                              F.BX)(C.View, { className: "item flex-1 flex-align-items-center flex-column", children: [(0, F.tZ)(C.View, { className: "price", children: e.price }), (0, F.tZ)(C.View, { className: "txt", children: e.subTitle }), (0, F.tZ)(C.View, { className: "tit", children: e.describe }), (0, F.tZ)(C.Icon, { className: "icon-stemp" })] }, t);
                            }),
                    }),
                  1 == a &&
                    (0, F.tZ)(C.View, {
                      className: "flex coupon-bd banner",
                      children: (0, F.BX)(C.View, {
                        className: "item flex-1 flex-align-items-center",
                        children: [
                          (0, F.tZ)(C.View, {
                            className: "price",
                            children: i[0].price,
                          }),
                          (0, F.BX)(C.View, {
                            className: "cont flex-1",
                            children: [
                              (0, F.tZ)(C.View, {
                                className: "tit",
                                children: i[0].describe,
                              }),
                              (0, F.tZ)(C.View, {
                                className: "txt",
                                children: i[0].subTitle,
                              }),
                            ],
                          }),
                          (0, F.tZ)(C.Icon, { className: "icon-stemp" }),
                        ],
                      }),
                    }),
                ],
              });
            }),
            G = y.default.isTieyou,
            K = Z.A.statusBarHeight,
            $ = g.Ip.specialNewUser,
            ee =
              (0, f.h)()(
                (a = (function (e) {
                  (0, o.Z)(i, e);
                  var t = (0, d.Z)(i);
                  function i(e) {
                    var a;
                    return (
                      (0, r.Z)(this, i),
                      (a = t.call(this, e)),
                      (0, u.Z)((0, s.Z)(a), "pageId", "10650089484"),
                      (0, u.Z)(
                        (0, s.Z)(a),
                        "loadFlightQueryFromStore",
                        function () {
                          var e = w.rn.get() || {},
                            t = e.departCity,
                            i = void 0 === t ? "上海" : t,
                            c = e.arriveCity,
                            n = void 0 === c ? "北京" : c,
                            r = e.departCityCode,
                            l = void 0 === r ? "SHA" : r,
                            s = e.arriveCityCode,
                            o = void 0 === s ? "BJS" : s;
                          a.setState({
                            specialPriceCity: i,
                            specialPriceCityCode: l,
                            arrivalCity: n,
                            arrivalCityCode: o,
                          });
                        }
                      ),
                      (0, u.Z)(
                        (0, s.Z)(a),
                        "toggleSpecialPriceFilter",
                        function () {
                          var e = a.state.showSpecialPriceFilter;
                          a.setState({ showSpecialPriceFilter: !e });
                        }
                      ),
                      (0, u.Z)(
                        (0, s.Z)(a),
                        "handleSpecialPriceSearch",
                        function (e) {
                          a.toggleSpecialPriceFilter(),
                            a.setSpecialPriceFilterData(e);
                        }
                      ),
                      (0, u.Z)(
                        (0, s.Z)(a),
                        "onSpecialPriceFilterInitialized",
                        function (e) {
                          a.setSpecialPriceFilterData(e);
                        }
                      ),
                      (0, u.Z)(
                        (0, s.Z)(a),
                        "setSpecialPriceFilterData",
                        function (e) {
                          var t = e.specialPriceMonths,
                            i = e.specialPriceWeekDays;
                          a.setState({
                            specialPriceMonths: t,
                            specialPriceWeekDays: i,
                          });
                        }
                      ),
                      (0, u.Z)((0, s.Z)(a), "chooseFlightCity", function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t = e.type,
                          i = void 0 === t ? "from" : t;
                        N.Z.flightCity({
                          data: { title: "选择城市", intlHidden: !0 },
                          callback: function (e) {
                            var t = e.cityName,
                              c = e.cityCode;
                            "to" == i
                              ? a.setState({
                                  arrivalCity: t,
                                  arrivalCityCode: c,
                                })
                              : a.setState({
                                  specialPriceCity: t,
                                  specialPriceCityCode: c,
                                });
                          },
                        });
                      }),
                      (0, u.Z)(
                        (0, s.Z)(a),
                        "handleFlightFeedsClick",
                        function (e) {
                          var t = e.depCityName,
                            i = e.depCityCode,
                            c = e.arrCityName,
                            n = e.arrCityCode,
                            r = e.goDateTime,
                            l = e.isDomestic,
                            s = e.backDateTime;
                          a.toFlightList({
                            departureCityName: t,
                            departureCityCode: i,
                            arrivalCityName: c,
                            arrivalCityCode: n,
                            departDate: r,
                            returnDate: s || "",
                            isIntl: !l,
                          });
                        }
                      ),
                      (0, u.Z)(
                        (0, s.Z)(a),
                        "handleWhenItemClick",
                        function (e) {
                          var t = a.state,
                            i = t.specialPriceCity,
                            c = t.specialPriceCityCode,
                            n = t.arrivalCity,
                            r = t.arrivalCityCode,
                            l = e.departureDate;
                          a.toFlightList({
                            departureCityName: i,
                            departureCityCode: c,
                            arrivalCityName: n,
                            arrivalCityCode: r,
                            departDate: l,
                          });
                        }
                      ),
                      (0, u.Z)((0, s.Z)(a), "toFlightList", function (e) {
                        var t = e.departureCityName,
                          i = e.departureCityCode,
                          c = e.arrivalCityName,
                          n = e.arrivalCityCode,
                          r = e.departDate,
                          l = e.returnDate,
                          s = void 0 === l ? "" : l,
                          o = e.isIntl
                            ? "/pages/flightIntl/list/list"
                            : "/pages/flight/list/list";
                        a.navigateTo({
                          url: ""
                            .concat(o, "?departCity=")
                            .concat(t, "&departCityCode=")
                            .concat(i, "&arriveCity=")
                            .concat(c, "&arriveCityCode=")
                            .concat(n, "&departDate=")
                            .concat(r, "&returnDate=")
                            .concat(s, "&nearby=1&fromPage=")
                            .concat($),
                        });
                      }),
                      (0, u.Z)((0, s.Z)(a), "toFlightIndex", function () {
                        Z.Z.relaunchHome("flight");
                      }),
                      (0, u.Z)((0, s.Z)(a), "onScroll", function (e) {
                        var t = e.detail.scrollTop > 50;
                        t !== a.state.topFixed && a.setState({ topFixed: t });
                      }),
                      (0, u.Z)((0, s.Z)(a), "onBack", function () {
                        m().navigateBack({
                          fail: function () {
                            a.toFlightIndex();
                          },
                        });
                      }),
                      (a.state = {
                        topFixed: !1,
                        headTitle: "",
                        couponInfos: null,
                        discountPrice: 0,
                        showSpecialPriceFilter: !1,
                        specialPriceMonths: null,
                        specialPriceWeekDays: null,
                        specialPriceCity: "",
                        specialPriceCityCode: "",
                        arrivalCity: "",
                        arrivalCityCode: "",
                        couponDialogInfo: null,
                      }),
                      a
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.loadQueryParams(),
                            this.loadFlightQueryFromStore(),
                            this.initPage();
                        },
                      },
                      {
                        key: "loadQueryParams",
                        value: function () {
                          var e = (0, h.getCurrentInstance)().router.params,
                            t = e.speedPackNum,
                            i = e.couponName,
                            a = e.couponPrice,
                            c = e.expireTime;
                          i &&
                            this.setState({
                              couponDialogInfo: {
                                speedPackNum: t,
                                couponName: decodeURIComponent(i),
                                couponPrice: a,
                                expireTime: decodeURIComponent(c),
                              },
                            });
                        },
                      },
                      {
                        key: "initPage",
                        value: function () {
                          this.getNewUserCouponInfo();
                        },
                      },
                      {
                        key: "getNewUserCouponInfo",
                        value: function () {
                          var e = this;
                          return (
                            (0, h.showLoading)(),
                            (0, H.qe)()
                              .then(function (t) {
                                if (1 == t.resultCode && t.data) {
                                  var i = t.data,
                                    a = i.headTitle,
                                    c = i.couponInfos,
                                    n = i.discountPrice;
                                  e.setState({
                                    headTitle: a,
                                    couponInfos: c,
                                    discountPrice: n,
                                  });
                                }
                              })
                              .catch(function (e) {
                                console.log("request err", e);
                              })
                              .finally(function () {
                                return (0, h.hideLoading)();
                              })
                          );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.topFixed,
                            i = e.headTitle,
                            a = e.couponInfos,
                            c = e.discountPrice,
                            r = e.showSpecialPriceFilter,
                            l = e.specialPriceMonths,
                            s = e.specialPriceWeekDays,
                            o = e.specialPriceCity,
                            d = e.specialPriceCityCode,
                            u = e.arrivalCity,
                            p = e.arrivalCityCode,
                            h = e.couponDialogInfo;
                          return (0, F.BX)(C.Block, {
                            children: [
                              (0, F.BX)(C.ScrollView, {
                                className: "flt-spcl-page " + (G ? "ty" : "zx"),
                                scrollY: !0,
                                onScroll: this.onScroll,
                                children: [
                                  (0, F.BX)(C.View, {
                                    className: "top-bar ".concat(
                                      t ? "fixed" : ""
                                    ),
                                    style: "padding-top: " + K + "px",
                                    children: [
                                      (0, F.tZ)(C.Text, {
                                        className: "ifont-back iconfont",
                                        id: "AeAJ",
                                        onClick: this.onBack,
                                      }),
                                      (0, F.tZ)(C.View, {
                                        className: "tit",
                                        children: "特价机票",
                                      }),
                                    ],
                                  }),
                                  (0, F.BX)(C.View, {
                                    className: "top-box",
                                    style: "padding-top: " + K + "px",
                                    children: [
                                      (0, F.tZ)(C.View, { className: "logo" }),
                                      a &&
                                        (0, F.tZ)(j, {
                                          headTitle: i,
                                          couponInfos: a,
                                        }),
                                      (0, F.tZ)(P.Z, { isOnlyLowPrice: !0 }),
                                    ],
                                  }),
                                  (0, F.BX)(C.View, {
                                    className: "wrap",
                                    children: [
                                      (0, F.tZ)(q, {
                                        specialPriceCity: o,
                                        specialPriceCityCode: d,
                                        specialPriceMonths: l,
                                        specialPriceWeekDays: s,
                                        discountPrice: c,
                                        chooseFlightCity: this.chooseFlightCity,
                                        toggleSpecialPriceFilter:
                                          this.toggleSpecialPriceFilter,
                                        handleFlightFeedsClick:
                                          this.handleFlightFeedsClick,
                                      }),
                                      (0, F.tZ)(Q, {
                                        departureCity: o,
                                        departureCityCode: d,
                                        arrivalCity: u,
                                        arrivalCityCode: p,
                                        discountPrice: c,
                                        chooseFlightCity: this.chooseFlightCity,
                                        handleWhenItemClick:
                                          this.handleWhenItemClick,
                                      }),
                                      (0, F.BX)(C.View, {
                                        className: "botm-info",
                                        id: "AeAK",
                                        onClick: this.toFlightIndex,
                                        children: [
                                          (0, F.tZ)(C.View, {
                                            className: "logo",
                                          }),
                                          (0, F.tZ)(C.View, {
                                            className: "tit",
                                            children: "低价不怕比 机票1折起",
                                          }),
                                          (0, F.tZ)(C.Text, {
                                            className:
                                              "iconfont ifont-search bgcolor-primary",
                                          }),
                                        ],
                                      }),
                                      (0, F.tZ)(C.View, {
                                        className: "botm-advg",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, F.tZ)(A, {
                                showSpecialPriceFilter: r,
                                toggleSpecialPriceFilter:
                                  this.toggleSpecialPriceFilter,
                                onInitialized:
                                  this.onSpecialPriceFilterInitialized,
                                onSubmit: this.handleSpecialPriceSearch,
                              }),
                              h && (0, F.tZ)(_, (0, n.Z)({}, h)),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(p.Component))
              ) || a;
          Page(
            (0, c.createPageConfig)(
              ee,
              "pages/activity/flight/flightSpecial/flightSpecial",
              { root: { cn: [] } },
              {
                navigationStyle: "custom",
                navigationBarTitleText: "特价机票",
                backgroundColor: "#5495e6",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [3127, 79470, 86642, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(80888);
        }),
          e.O();
      },
    ]);
})();
