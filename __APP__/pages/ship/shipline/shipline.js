!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [5718],
      {
        29008: function (e, n, t) {
          var i = t(32180),
            r = t(57042),
            o = t(24460),
            l = t(81876),
            a = t(21867),
            s = t(86066),
            c = t(52500),
            u = t(71515),
            h = t(65573),
            d = (t(92954), t(81957)),
            f = t(45023),
            p = t(41991),
            g = t(298),
            v = {
              state: {
                isSearch: !1,
                keywords: "",
                searchShiplineList: [],
                isNoResult: !1,
              },
              reducers: {
                setIsSearch: function (e, n) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { isSearch: n });
                },
                setKeywords: function (e, n) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { keywords: n });
                },
                setSearchShiplineList: function (e, n) {
                  return (0, g.Z)(
                    (0, g.Z)({}, e),
                    {},
                    { searchShiplineList: n }
                  );
                },
                setIsNoResult: function (e, n) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { isNoResult: n });
                },
              },
            },
            m = {
              state: {
                regionTagList: [],
                shiplineList: [],
                regionShiplineList: [],
                cityTagList: [],
                allShiplineGroup: {},
                regionShiplineGroup: {},
                currentRegion: "全部",
                currentCityTag: "",
              },
              reducers: {
                setRegionTagList: function (e, n) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { regionTagList: n });
                },
                setShipLineList: function (e, n) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { shiplineList: n });
                },
                setRegionShiplineList: function (e, n) {
                  return (0, g.Z)(
                    (0, g.Z)({}, e),
                    {},
                    { regionShiplineList: n }
                  );
                },
                setCurrentRegion: function (e, n) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { currentRegion: n });
                },
                setCityTagList: function (e, n) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { cityTagList: n });
                },
                setAllShiplineGroup: function (e, n) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { allShiplineGroup: n });
                },
                setRegionShiplineGroup: function (e, n) {
                  return (0, g.Z)(
                    (0, g.Z)({}, e),
                    {},
                    { regionShiplineGroup: n }
                  );
                },
                setCurrentCityTag: function (e, n) {
                  return (0, g.Z)((0, g.Z)({}, e), {}, { currentCityTag: n });
                },
              },
            },
            y = (function (e) {
              (0, a.Z)(t, e);
              var n = (0, s.Z)(t);
              function t() {
                return (0, r.Z)(this, t), n.apply(this, arguments);
              }
              return (0, o.Z)(t);
            })(p.Z);
          (0, f.Z)(y, "store", {
            models: { searchModel: v, shiplineInfoModel: m },
          });
          var Z,
            S = t(79301),
            I = t(95308),
            N = t(39886),
            w = function (e) {
              var n, t;
              if (
                (null === (n = e.region) || void 0 === n ? void 0 : n.length) >
                0
              ) {
                var i,
                  r,
                  o = ["全部"];
                (o = o.concat(e.region)),
                  null === (i = y.getDispatch()) ||
                    void 0 === i ||
                    null === (r = i.shiplineInfoModel) ||
                    void 0 === r ||
                    r.setRegionTagList(o);
              }
              if (
                (null === (t = e.shipLine) || void 0 === t
                  ? void 0
                  : t.length) > 0
              ) {
                var l,
                  a,
                  s,
                  c,
                  u,
                  h,
                  d = L(e.shipLine),
                  f = Object.keys(d);
                null === (l = y.getDispatch()) ||
                  void 0 === l ||
                  null === (a = l.shiplineInfoModel) ||
                  void 0 === a ||
                  a.setAllShiplineGroup(d),
                  null === (s = y.getDispatch()) ||
                    void 0 === s ||
                    null === (c = s.shiplineInfoModel) ||
                    void 0 === c ||
                    c.setRegionShiplineGroup(d),
                  null === (u = y.getDispatch()) ||
                    void 0 === u ||
                    null === (h = u.shiplineInfoModel) ||
                    void 0 === h ||
                    h.setCityTagList(f);
              }
            },
            C = function (e) {
              if (e) {
                var n = {
                  from: e.fromCityInfo.stationName,
                  to: e.toCityInfo.stationName,
                };
                y.getPage().invokeCallback(n), y.getPage().navigateBack();
              }
            },
            L = function (e) {
              var n = e.filter(function (e) {
                return 0 === e.foreign || 2 === e.foreign;
              });
              return (
                M(n, function (e) {
                  return e.fromCityInfo.stationShortPinyin;
                }),
                T(n)
              );
            },
            M = function (e, n) {
              return (
                e.sort(function (e, t) {
                  var i = n(e) || "",
                    r = n(t) || "";
                  return i < r ? -1 : i > r ? 1 : 0;
                }),
                e
              );
            },
            T = function (e) {
              var n = {};
              return (
                e.forEach(function (e) {
                  var t,
                    i,
                    r,
                    o =
                      null == e ||
                      null === (t = e.fromCityInfo) ||
                      void 0 === t ||
                      null === (i = t.stationShortPinyin) ||
                      void 0 === i ||
                      null === (r = i[0]) ||
                      void 0 === r
                        ? void 0
                        : r.toUpperCase();
                  n[o] ? n[o].push(e) : (n[o] = [e]);
                }),
                n
              );
            },
            k = function (e) {
              var n,
                t,
                i,
                r,
                o,
                l =
                  null === (n = y.getState().shiplineInfoModel) || void 0 === n
                    ? void 0
                    : n.allShiplineGroup,
                a = Object.keys(l),
                s = {};
              null == a ||
                a.forEach(function (n) {
                  var t,
                    i =
                      null === (t = l[n]) || void 0 === t
                        ? void 0
                        : t.filter(function (n) {
                            return n.region === e;
                          });
                  (null == i ? void 0 : i.length) > 0 && (s[n] = i);
                });
              var c = Object.keys(s);
              null === (t = y.getDispatch()) ||
                void 0 === t ||
                null === (i = t.shiplineInfoModel) ||
                void 0 === i ||
                i.setRegionShiplineGroup(s),
                null === (r = y.getDispatch()) ||
                  void 0 === r ||
                  null === (o = r.shiplineInfoModel) ||
                  void 0 === o ||
                  o.setCityTagList(c);
            },
            x = (function () {
              var e = (0, I.Z)(
                (0, S.Z)().mark(function e() {
                  var n;
                  return (0, S.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), (0, N.k9)();
                        case 2:
                          1 === (null == (n = e.sent) ? void 0 : n.code) &&
                            null != n &&
                            n.data &&
                            w(n.data);
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
            })(),
            R = t(79792),
            D = (function () {
              var e = (0, I.Z)(
                (0, S.Z)().mark(function e(n) {
                  var t, i, r, o, l, a, s, c;
                  return (0, S.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((r =
                              null == n ||
                              null === (t = n.detail) ||
                              void 0 === t ||
                              null === (i = t.value) ||
                              void 0 === i
                                ? void 0
                                : i.trim()),
                            y.getDispatch().searchModel.setKeywords(r),
                            y.getDispatch().searchModel.setIsSearch(!0),
                            r)
                          ) {
                            e.next = 7;
                            break;
                          }
                          return (
                            y
                              .getDispatch()
                              .searchModel.setSearchShiplineList([]),
                            null === (o = y.getDispatch().searchModel) ||
                              void 0 === o ||
                              o.setIsNoResult(!1),
                            e.abrupt("return")
                          );
                        case 7:
                          if (!((null == (l = G(r)) ? void 0 : l.length) > 0)) {
                            e.next = 11;
                            break;
                          }
                          return (
                            y
                              .getDispatch()
                              .searchModel.setSearchShiplineList(l),
                            e.abrupt("return")
                          );
                        case 11:
                          if (y.getPage().searchLineFromServer) {
                            e.next = 18;
                            break;
                          }
                          return (
                            (y.getPage().searchLineFromServer = !0),
                            (e.next = 15),
                            (0, N.xz)({ key: r })
                          );
                        case 15:
                          1 === (null == (s = e.sent) ? void 0 : s.code) &&
                          (null == s || null === (a = s.lines) || void 0 === a
                            ? void 0
                            : a.length) > 0
                            ? b(s.lines)
                            : (null === (c = y.getDispatch().searchModel) ||
                                void 0 === c ||
                                c.setIsNoResult(!0),
                              y
                                .getDispatch()
                                .searchModel.setSearchShiplineList([])),
                            (y.getPage().searchLineFromServer = !1);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            V = function () {
              var e;
              y.getDispatch().searchModel.setIsSearch(!1),
                y.getDispatch().searchModel.setKeywords(""),
                y.getDispatch().searchModel.setSearchShiplineList([]),
                null === (e = y.getDispatch().searchModel) ||
                  void 0 === e ||
                  e.setIsNoResult(!1);
            },
            b = function (e) {
              var n,
                t,
                i = [],
                r =
                  (null === (n = y.getState().shiplineInfoModel) || void 0 === n
                    ? void 0
                    : n.allShiplineGroup) || {},
                o = Object.keys(r);
              null == o ||
                o.forEach(function (n) {
                  r[n].forEach(function (n) {
                    var t =
                        (null == n ? void 0 : n.fromCityInfo.stationName) +
                        "-" +
                        (null == n ? void 0 : n.toCityInfo.stationName),
                      r = null == n ? void 0 : n.displayName;
                    e.find(function (e) {
                      return e === t || e === r;
                    }) && i.push(n);
                  });
                }),
                i.length <= 0 &&
                  (null === (t = y.getDispatch().searchModel) ||
                    void 0 === t ||
                    t.setIsNoResult(!0)),
                y.getDispatch().searchModel.setSearchShiplineList(i);
            },
            G = function (e) {
              var n,
                t = null == e ? void 0 : e.toLowerCase(),
                i = [],
                r = [],
                o = [],
                l =
                  (null === (n = y.getState().shiplineInfoModel) || void 0 === n
                    ? void 0
                    : n.allShiplineGroup) || {},
                a = Object.keys(l);
              return (
                null == a ||
                  a.forEach(function (e) {
                    l[e].forEach(function (e) {
                      var n = O(t, e);
                      n &&
                        ("fromCityInfo" == n.mapNode
                          ? i.push(n)
                          : "toCityInfo" == n.mapNode
                          ? r.push(n)
                          : o.push(n));
                    });
                  }),
                [].concat(i, r, o)
              );
            },
            O = function (e, n) {
              for (
                var t = ["fromCityInfo", "toCityInfo"], i = 0;
                i < t.length;
                i++
              ) {
                var r = t[i],
                  o = P(e, n[r].stationName);
                if (o.s > -1) return (n.mapNode = r), (n.mapIndex = o), n;
                if ((o = P(e, n[r].stationShortPinyin)).s > -1)
                  return (n.mapNode = r), (n.mapIndex = o), n;
                if (e == n[r].stationPinyin)
                  return (
                    (n.mapNode = r),
                    (n.mapIndex = { s: 0, e: n[r].stationName.length - 1 }),
                    n
                  );
                (n.mapNode = ""), (n.mapIndex = o);
              }
              (n.hasFromStationInfo = null), (n.hasToStationInfo = null);
              var l = A(e, n.fromCityInfo.stationInfo);
              if (l) return (n.hasFromStationInfo = l), n;
              if ((l = A(e, n.toCityInfo.stationInfo)))
                return (n.hasToStationInfo = l), n;
              try {
                var a,
                  s = new RegExp("(" + e + "|\\|" + e + ")", "i");
                if (
                  null === (a = n.cityMapInfo) || void 0 === a
                    ? void 0
                    : a.find(function (e) {
                        return s.test(e);
                      })
                )
                  return n;
              } catch (e) {}
              return null;
            },
            P = function (e, n) {
              var t = { s: -1, e: -1 };
              try {
                (t.s = n.indexOf(e)), t.s > -1 && (t.e = t.s + e.length - 1);
              } catch (e) {}
              return t;
            },
            A = function (e, n) {
              if (e && e.length && n && n.length)
                for (var t = 0; t < n.length; t++) {
                  var i = n[t],
                    r = { key: e, stationName: i.stationName },
                    o = P(e, i.stationName);
                  if (o.s > -1) return (0, g.Z)((0, g.Z)({}, r), o);
                  if ((o = P(e, i.stationShortPinyin)).s > -1)
                    return (0, g.Z)((0, g.Z)({}, r), o);
                  if (i.stationPinyin === e)
                    return (0, g.Z)(
                      (0, g.Z)({}, r),
                      {},
                      { s: 0, e: i.stationName.length - 1 }
                    );
                }
              return null;
            },
            j = t(48813),
            _ = (0, h.$j)(function (e) {
              var n = e.searchModel;
              return { isSearch: n.isSearch, keywords: n.keywords };
            })(function (e) {
              var n = e.isSearch,
                t = e.keywords;
              return (0,
              j.BX)(u.View, { className: "search-module", children: [(0, j.tZ)(u.Input, { onInput: D, placeholder: "输入出发或到达城市名", placeholderClass: "search-module_input_focus", className: "search-module_input ".concat(n ? "margin_r100" : ""), value: t }), n && (0, j.tZ)(u.Text, { className: "search-module_cancel ".concat(R.default.isTieyou ? "ty" : "zx"), id: "AOAy", onClick: V, children: "取消" })] });
            }),
            B = (0, h.$j)(function (e) {
              var n = e.searchModel;
              return {
                isSearch: n.isSearch,
                isNoResult: n.isNoResult,
                searchShiplineList: n.searchShiplineList,
              };
            })(function (e) {
              var n = e.isSearch,
                t = e.isNoResult,
                i = e.searchShiplineList;
              if (!n) return (0, j.tZ)(u.View, {});
              var r = "".concat(
                R.default.isTieyou
                  ? "https://images3.c-ctrip.com/train/wechat/bus/unresultty.png"
                  : "https://images3.c-ctrip.com/train/wechat/bus/noresult.png"
              );
              return (0, j.BX)(u.View, {
                className: "ship-search-result",
                children: [
                  (null == i ? void 0 : i.length) > 0 &&
                    i.map(function (e, n) {
                      var t, i;
                      return (0, j.tZ)(
                        u.View,
                        {
                          id: "AOAz",
                          onClick: function () {
                            return C(e);
                          },
                          className: "stationline",
                          children: ""
                            .concat(
                              null == e ||
                                null === (t = e.fromCityInfo) ||
                                void 0 === t
                                ? void 0
                                : t.stationName,
                              " - "
                            )
                            .concat(
                              null == e ||
                                null === (i = e.toCityInfo) ||
                                void 0 === i
                                ? void 0
                                : i.stationName
                            ),
                        },
                        n
                      );
                    }),
                  t &&
                    (0, j.BX)(u.View, {
                      className:
                        "search-no-result flex-align-items-center flex-column",
                      children: [
                        (0, j.tZ)(u.Image, { className: "img", src: r }),
                        (0, j.tZ)(u.Text, {
                          className: "no-data-desc",
                          children: "抱歉，未找到相关航线，",
                        }),
                        (0, j.tZ)(u.Text, {
                          className: "no-data-desc",
                          children: "换个词试试～",
                        }),
                      ],
                    }),
                ],
              });
            }),
            E = (0, h.$j)(function (e) {
              var n = e.searchModel,
                t = e.shiplineInfoModel;
              return {
                isSearch: null == n ? void 0 : n.isSearch,
                regionTagList: null == t ? void 0 : t.regionTagList,
                currentRegion: null == t ? void 0 : t.currentRegion,
              };
            })(function (e) {
              var n = e.isSearch,
                t = e.regionTagList,
                i = e.currentRegion;
              return n || (null == t ? void 0 : t.length) <= 0
                ? (0, j.tZ)(u.View, {})
                : (0, j.tZ)(u.View, {
                    children: (0, j.tZ)(u.ScrollView, {
                      scrollX: !0,
                      scrollY: !1,
                      className: "h-scroll",
                      style:
                        "white-space: nowrap; background-color: #fff; height: 80rpx;",
                      children: (0, j.tZ)(u.View, {
                        className: "tags",
                        style: "margin-top: 10rpx;",
                        children: t.map(function (e, n) {
                          return (0, j.tZ)(
                            u.View,
                            {
                              className: "tags",
                              children: (0, j.tZ)(u.Text, {
                                className: "tagsitem ".concat(
                                  i == e ? "current" : ""
                                ),
                                id: "AOAx",
                                onClick: function () {
                                  return (function (e) {
                                    var n, t;
                                    e &&
                                      (null === (n = y.getDispatch()) ||
                                        void 0 === n ||
                                        null === (t = n.shiplineInfoModel) ||
                                        void 0 === t ||
                                        t.setCurrentRegion(e),
                                      k(e));
                                  })(e);
                                },
                                "data-from": e,
                                children: e,
                              }),
                            },
                            n
                          );
                        }),
                      }),
                    }),
                  });
            }),
            F = (0, h.$j)(function (e) {
              var n = e.searchModel,
                t = e.shiplineInfoModel;
              return {
                isSearch: n.isSearch,
                cityTagList: t.cityTagList,
                currentCityTag: t.currentCityTag,
                regionShiplineGroup: t.regionShiplineGroup,
              };
            })(function (e) {
              var n = e.isSearch,
                t = e.cityTagList,
                i = e.currentCityTag,
                r = e.regionShiplineGroup;
              return n || !r || (null == t ? void 0 : t.length) <= 0
                ? (0, j.tZ)(u.View, {})
                : (0, j.tZ)(u.ScrollView, {
                    scrollY: !0,
                    className: "city-module_list",
                    scrollIntoView: i,
                    style: "top:190rpx",
                    children: t.map(function (e, n) {
                      return (0, j.BX)(
                        c.Fragment,
                        {
                          children: [
                            (0, j.tZ)(u.View, {
                              className: "city-module_type",
                              id: e,
                              children: e,
                            }),
                            r[e].map(function (e, n) {
                              var t, i;
                              return (0, j.tZ)(
                                u.View,
                                {
                                  className: "city-module_items",
                                  children: (0, j.tZ)(u.Text, {
                                    className: "city-module_name",
                                    id: "AOBA",
                                    onClick: function () {
                                      return C(e);
                                    },
                                    children: ""
                                      .concat(
                                        null == e ||
                                          null === (t = e.fromCityInfo) ||
                                          void 0 === t
                                          ? void 0
                                          : t.stationName,
                                        " - "
                                      )
                                      .concat(
                                        null == e ||
                                          null === (i = e.toCityInfo) ||
                                          void 0 === i
                                          ? void 0
                                          : i.stationName
                                      ),
                                  }),
                                },
                                n
                              );
                            }),
                          ],
                        },
                        n
                      );
                    }),
                  });
            }),
            X = (0, h.$j)(function (e) {
              var n = e.searchModel,
                t = e.shiplineInfoModel;
              return { isSearch: n.isSearch, cityTagList: t.cityTagList };
            })(function (e) {
              var n = e.isSearch,
                t = e.cityTagList;
              return n || (null == t ? void 0 : t.length) <= 0
                ? (0, j.tZ)(u.View, {})
                : (0, j.tZ)(u.View, {
                    className: "city-module",
                    children: (0, j.tZ)(u.View, {
                      className: "city-module_letter",
                      children: t.map(function (e, n) {
                        return (0, j.tZ)(
                          u.View,
                          {
                            className: "city-module_letter-item1",
                            id: "AOAw",
                            onClick: function () {
                              return (function (e) {
                                var n;
                                null ===
                                  (n = y.getDispatch().shiplineInfoModel) ||
                                  void 0 === n ||
                                  n.setCurrentCityTag(e);
                              })(e);
                            },
                            children: e,
                          },
                          n
                        );
                      }),
                    }),
                  });
            }),
            $ =
              (0, d.h)()(
                (Z = (function (e) {
                  (0, a.Z)(t, e);
                  var n = (0, s.Z)(t);
                  function t(e) {
                    var i;
                    return (
                      (0, r.Z)(this, t),
                      ((i = n.call(this, e)).store = y.create(
                        (0, l.Z)(i)
                      ).store),
                      i
                    );
                  }
                  return (
                    (0, o.Z)(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          x();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, j.tZ)(h.zt, {
                            store: this.store,
                            children: (0, j.BX)(u.View, {
                              children: [
                                (0, j.tZ)(_, {}),
                                (0, j.tZ)(B, {}),
                                (0, j.tZ)(E, {}),
                                (0, j.tZ)(F, {}),
                                (0, j.tZ)(X, {}),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    t
                  );
                })(c.default.Component))
              ) || Z;
          Page(
            (0, i.createPageConfig)(
              $,
              "pages/ship/shipline/shipline",
              { root: { cn: [] } },
              {
                backgroundColor: "#099fde",
                navigationBarTitleText: "航线选择",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [606, 19559, 11216, 68592], function () {
          return (function (n) {
            return e((e.s = n));
          })(29008);
        }),
          e.O();
      },
    ]);
})();
