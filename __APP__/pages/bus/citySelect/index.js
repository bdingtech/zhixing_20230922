!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [40486],
      {
        55762: function (t, e, i) {
          var a = i(32180),
            c = i(22276),
            n = i(298),
            s = i(57042),
            o = i(24460),
            r = i(81876),
            l = i(21867),
            h = i(86066),
            m = i(45023),
            d = i(52500),
            y = i(92954),
            u = i.n(y),
            C = i(71515),
            f = i(27113),
            S = i(49120),
            T = i(79792),
            g = i(43796),
            N = i(81957),
            p = i(43005),
            A = i(48813);
          var k = d.default.memo(function (t) {
            var e = t.titleText,
              i = t.areaList,
              a = void 0 === i ? [] : i,
              c = t.handleAreaClick,
              n = t.className,
              s = void 0 === n ? "" : n;
            return (0, A.tZ)(C.Block, {
              children: (0, A.BX)(C.View, {
                className: s,
                children: [
                  (0, A.tZ)(C.View, {
                    className: "city-module-type",
                    children: e,
                  }),
                  (0, A.tZ)(C.View, {
                    className: "city-module-item",
                    children: a.map(function (t, e) {
                      var i = t.stationName || t.cityName;
                      return (0, A.tZ)(
                        C.Text,
                        {
                          id: "AdFs",
                          className: "scenic-city-name ".concat(
                            i.length > 5 ? "small-font" : ""
                          ),
                          onClick: function () {
                            return c(t);
                          },
                          children: i,
                        },
                        e
                      );
                    }),
                  }),
                ],
              }),
            });
          });
          var v,
            Z = d.default.memo(function (t) {
              var e = t.areaList,
                i = void 0 === e ? [] : e,
                a = t.handleClear,
                c = t.handleAreaClick,
                n = t.className,
                s = void 0 === n ? "" : n;
              return (0, A.tZ)(C.Block, {
                children: (0, A.BX)(C.View, {
                  className: s,
                  children: [
                    (0, A.BX)(C.View, {
                      className: "city-module-type",
                      children: [
                        (0, A.tZ)(C.Text, { children: "历史选择" }),
                        (0, A.tZ)(C.Text, {
                          className: "clear-text color-primary",
                          id: "AdAC",
                          onClick: a,
                          children: "清空",
                        }),
                      ],
                    }),
                    (0, A.tZ)(C.View, {
                      className: "city-module-item",
                      children: i.map(function (t, e) {
                        var i = t.stationName || t.cityName;
                        return (0, A.tZ)(
                          C.Text,
                          {
                            id: "AdFr",
                            className: "scenic-city-name ".concat(
                              i.length > 5 ? "small-font" : ""
                            ),
                            onClick: function () {
                              return c(t);
                            },
                            children: i,
                          },
                          e
                        );
                      }),
                    }),
                  ],
                }),
              });
            }),
            w = { scenicArea: "所有景点/站点", airPort: "所有机场/站点" },
            _ = (function (t) {
              (0, l.Z)(i, t);
              var e = (0, h.Z)(i);
              function i(t) {
                var a;
                return (
                  (0, s.Z)(this, i),
                  (a = e.call(this, t)),
                  (0, m.Z)((0, r.Z)(a), "handleMore", function () {
                    a.setState({ initList: a.props.list, isShowMoreText: !1 });
                  }),
                  (a.state = { initList: t.list, isShowMoreText: !0 }),
                  a
                );
              }
              return (
                (0, o.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var t = this.props,
                        e = t.isMore,
                        i = t.list,
                        a = void 0 === i ? [] : i;
                      e && this.setState({ initList: a.slice(0, 8) });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = this.props,
                        e = t.handleAreaClick,
                        i = t.tabType,
                        a = t.isMore,
                        c = this.state,
                        n = c.initList,
                        s = void 0 === n ? [] : n,
                        o = c.isShowMoreText;
                      return (0, A.BX)(C.View, {
                        className: "station-box",
                        children: [
                          s.map(function (t, a) {
                            return (0, A.tZ)(
                              C.View,
                              {
                                id: "AdFt",
                                className: "station-child-item ".concat(
                                  t.nm.length > 7
                                    ? "station-child-item-single"
                                    : ""
                                ),
                                onClick: function () {
                                  return e(t);
                                },
                                children:
                                  0 == a
                                    ? (0, A.BX)(C.Block, {
                                        children: [
                                          (0, A.tZ)(C.Text, {
                                            className: "city-name",
                                            children: t.nm,
                                          }),
                                          (0, A.tZ)(C.Text, {
                                            className: "des",
                                            children: w[i],
                                          }),
                                        ],
                                      })
                                    : (0, A.tZ)(C.Text, {
                                        className: "station-item ".concat(
                                          t.nm.length > 7
                                            ? "station-item-ellipsis"
                                            : ""
                                        ),
                                        children: t.nm,
                                      }),
                              },
                              t.py
                            );
                          }),
                          a &&
                            o &&
                            (0, A.BX)(C.View, {
                              className: "station-child-item more-item",
                              id: "AdAD",
                              onClick: this.handleMore,
                              children: [
                                "更多",
                                (0, A.tZ)(C.Text, {
                                  className: "ifont-arrdown iconfont",
                                }),
                              ],
                            }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(d.default.PureComponent),
            b = (function (t) {
              (0, l.Z)(i, t);
              var e = (0, h.Z)(i);
              function i() {
                return (0, s.Z)(this, i), e.apply(this, arguments);
              }
              return (
                (0, o.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var t = this.props,
                        e = t.className,
                        i = void 0 === e ? "" : e,
                        a = t.areaStationList,
                        c = void 0 === a ? [] : a,
                        n = t.handleAreaClick,
                        s = t.tabType;
                      return (0, A.tZ)(C.View, {
                        className: "station-block-container ".concat(i),
                        children: c.map(function (t, e) {
                          return (0,
                          A.BX)(C.View, { className: "station-item", children: [(0, A.tZ)(C.Text, { className: "title-label", children: t[0] && t[0].nm }), (0, A.tZ)(_, { tabType: s, isMore: t.length > 9, list: t, handleAreaClick: n })] }, e);
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(d.default.PureComponent),
            R = { scenicArea: 1, airPort: 2 },
            V = {
              scenicArea: { from: "SCEINC_AREA_FROM", to: "SCEINC_AREA_TO" },
              airPort: { from: "AIRPORT_FROM", to: "AIRPORT_TO" },
            },
            E =
              (0, N.h)()(
                (v = (function (t) {
                  (0, l.Z)(i, t);
                  var e = (0, h.Z)(i);
                  function i(t) {
                    var a;
                    (0, s.Z)(this, i),
                      (a = e.call(this, t)),
                      (0, m.Z)((0, r.Z)(a), "onClickCity", function (t) {
                        console.log("---item---", t);
                        var e = a.state,
                          i = e.fromPage,
                          c = e.selectType,
                          s = e.tabType;
                        if (s) {
                          if ("home" === i)
                            if (
                              (u().setStorageSync(V[s][c], {
                                cityName: t.cnm || t.cityName,
                                stationName: t.stationName,
                              }),
                              "from" === c)
                            ) {
                              if ("scenicArea" === s) {
                                var o =
                                  u().getStorageSync(
                                    "AREA_SELECT_HISTORY_FROM"
                                  ) || [];
                                (o = a.formatHistoryAreas(o, t)),
                                  u().setStorageSync(
                                    "AREA_SELECT_HISTORY_FROM",
                                    o
                                  ),
                                  a.setState({ historyFromScenicAreas: o });
                              } else if ("airPort" === s) {
                                var r =
                                  u().getStorageSync(
                                    "AIRPORT_SELECT_HISTORY_FROM"
                                  ) || [];
                                (r = a.formatHistoryAreas(r, t)),
                                  u().setStorageSync(
                                    "AIRPORT_SELECT_HISTORY_FROM",
                                    r
                                  ),
                                  a.setState({ historyFromAirport: r });
                              }
                            } else if ("to" === c)
                              if ("scenicArea" === s) {
                                var l =
                                  u().getStorageSync(
                                    "AREA_SELECT_HISTORY_TO"
                                  ) || [];
                                (l = a.formatHistoryAreas(l, t)),
                                  u().setStorageSync(
                                    "AREA_SELECT_HISTORY_TO",
                                    l
                                  ),
                                  a.setState({ historyToScenicAreas: l });
                              } else if ("airPort" === s) {
                                var h =
                                  u().getStorageSync(
                                    "AIRPORT_SELECT_HISTORY_TO"
                                  ) || [];
                                (h = a.formatHistoryAreas(h, t)),
                                  u().setStorageSync(
                                    "AIRPORT_SELECT_HISTORY_TO",
                                    h
                                  ),
                                  a.setState({ historyToAirport: h });
                              }
                        } else {
                          var m =
                              u().getStorageSync("BUS_SELECTCITY_HISTORY") ||
                              [],
                            d = m.findIndex(function (e) {
                              return t.stationName
                                ? e.stationName === t.stationName
                                : e.cityName === t.cityName;
                            });
                          -1 !== d && m.splice(d, 1),
                            m.splice(0, 0, {
                              cityName: t.cityName,
                              stationName: t.stationName,
                            }),
                            (m = m.slice(0, 8));
                          var y = a.state.currentTabCities;
                          a.setState({
                            currentTabCities: (0, n.Z)(
                              (0, n.Z)({}, y),
                              {},
                              { historyCities: m }
                            ),
                          }),
                            u().setStorageSync("BUS_SELECTCITY_HISTORY", m),
                            u().setStorageSync("BUS_SELECTCITY_VALUE", t),
                            "home" === i && "from" === c
                              ? (u().setStorageSync(
                                  "BUS_QUERY_FROM",
                                  t.cityName
                                ),
                                u().setStorageSync(
                                  "BUS_QUERY_FROM_STATION",
                                  t.stationName
                                ))
                              : "home" === i &&
                                "to" === c &&
                                (u().setStorageSync("BUS_QUERY_TO", t.cityName),
                                u().setStorageSync(
                                  "BUS_QUERY_TO_STATION",
                                  t.stationName
                                ));
                        }
                        a.invokeCallback({
                          cityName: t.cityName,
                          stationName: t.stationName,
                        }),
                          a.navigateBack();
                      }),
                      (0, m.Z)(
                        (0, r.Z)(a),
                        "formatHistoryAreas",
                        function (t, e) {
                          var i = t.findIndex(function (t) {
                            return t.stationName
                              ? t.stationName === e.stationName
                              : t.cityName
                              ? t.cityName === e.cityName
                              : void 0;
                          });
                          return (
                            -1 !== i && t.splice(i, 1),
                            t.unshift({
                              cityName: e.cityName,
                              stationName: e.stationName,
                            }),
                            t.slice(0, 8)
                          );
                        }
                      ),
                      (0, m.Z)(
                        (0, r.Z)(a),
                        "handleClearAreaHistory",
                        function () {
                          var t = a.state,
                            e = t.selectType,
                            i = t.tabType;
                          "from" === e
                            ? "scenicArea" === i
                              ? (a.setState({ historyFromScenicAreas: [] }),
                                u().setStorageSync(
                                  "AREA_SELECT_HISTORY_FROM",
                                  []
                                ))
                              : "airPort" === i &&
                                (a.setState({ historyFromAirport: [] }),
                                u().setStorageSync(
                                  "AIRPORT_SELECT_HISTORY_FROM",
                                  []
                                ))
                            : "scenicArea" === i
                            ? (a.setState({ historyToScenicAreas: [] }),
                              u().setStorageSync("AREA_SELECT_HISTORY_TO", []))
                            : "airPort" === i &&
                              (a.setState({ historyToAirport: [] }),
                              u().setStorageSync(
                                "AIRPORT_SELECT_HISTORY_TO",
                                []
                              ));
                        }
                      ),
                      (a.state = {
                        isTieyou: T.default.isTieyou,
                        toView: "position",
                        isShowCurrentPosition: !1,
                        currentCity: { cityName: "定位中...", loadSuccess: !1 },
                        loadDataFinish: !1,
                        isShowMoreCity: {},
                        currentTabCities: {},
                        isSearchView: !1,
                        inputKeyword: "",
                        searchResult: [],
                        hotFromArea: [],
                        hotToArea: [],
                        historyFromScenicAreas: [],
                        historyToScenicAreas: [],
                        historyFromAirport: [],
                        historyToAirport: [],
                        areaStationList: [],
                        selectType: "",
                        selectedCity: "",
                        fromCity: "",
                        fromPage: "",
                        tabType: "",
                        isFocus: !0,
                        loadTag: 1,
                        activeCityTag: "",
                        utmSource: (0, g.bL)(),
                      });
                    var c =
                      (0, y.getCurrentInstance)().router &&
                      (0, y.getCurrentInstance)().router.params;
                    return (
                      (a.pageId =
                        "from" == (null == c ? void 0 : c.selectType)
                          ? "10650060898"
                          : "10650060900"),
                      a
                    );
                  }
                  return (
                    (0, o.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t = this,
                            e =
                              (0, y.getCurrentInstance)().router &&
                              (0, y.getCurrentInstance)().router.params,
                            i = e.data || {};
                          "string" == typeof i && (i = JSON.parse(i)),
                            console.log("data", e, i),
                            u().setNavigationBarTitle({
                              title: i.title || "选择城市",
                            }),
                            (0, S.setNavigationBarColor)({
                              frontColor: "#000000",
                              backgroundColor: "#fff",
                            });
                          var a =
                              u().getStorageSync("BUS_SELECTCITY_HISTORY") ||
                              [],
                            c =
                              u().getStorageSync("AREA_SELECT_HISTORY_FROM") ||
                              [],
                            n =
                              u().getStorageSync("AREA_SELECT_HISTORY_TO") ||
                              [],
                            s =
                              u().getStorageSync(
                                "AIRPORT_SELECT_HISTORY_FROM"
                              ) || [],
                            o =
                              u().getStorageSync("AIRPORT_SELECT_HISTORY_TO") ||
                              [];
                          this.setState(
                            {
                              selectType: i.selectType,
                              selectedCity: i.selectedCity,
                              fromCity: "to" === i.selectType ? i.fromCity : "",
                              fromPage: i.fromPage,
                              tabType: i.tabType || "",
                              historyFromScenicAreas: c,
                              historyToScenicAreas: n,
                              historyFromAirport: s,
                              historyToAirport: o,
                              currentTabCities: {
                                historyCities: "from" === i.selectType ? a : [],
                                hotCities: [],
                                cityTags: [],
                                cityMainList: {},
                              },
                            },
                            function () {
                              t.initPageData();
                            }
                          );
                        },
                      },
                      {
                        key: "initPageData",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.selectType,
                            a = e.tabType;
                          "to" == i
                            ? a
                              ? this.getToListReq()
                              : this.getToCityData()
                            : (this.setState({ isShowCurrentPosition: !0 }),
                              (0, f.CC)()
                                .then(function (e) {
                                  if (
                                    (console.error("getLocation  res", e),
                                    !e || !e.longitude)
                                  )
                                    return (
                                      t.setState({
                                        currentCity: {
                                          cityName: "定位失败",
                                          loadSuccess: !1,
                                        },
                                      }),
                                      t.getFromCityData(),
                                      void t.getFromListReq()
                                    );
                                  var i = e.cityName || "";
                                  t.getFromListReq(i),
                                    (0, p.HX)({
                                      cityName: i,
                                      latitude: e.latitude + "",
                                      longitude: e.longitude + "",
                                    })
                                      .then(function (e) {
                                        var a = t.state.currentTabCities;
                                        t.setState(
                                          {
                                            currentCity: {
                                              cityName: i,
                                              loadSuccess: !0,
                                            },
                                            currentTabCities: (0, n.Z)(
                                              (0, n.Z)({}, a),
                                              {},
                                              {
                                                hotCities: (
                                                  e.data.hot || []
                                                ).map(function (t) {
                                                  return { cityName: t.nm };
                                                }),
                                              }
                                            ),
                                          },
                                          function () {
                                            t.getFromCityData();
                                          }
                                        );
                                      })
                                      .catch(function () {});
                                })
                                .catch(function () {
                                  t.setState({
                                    currentCity: {
                                      cityName: "定位失败",
                                      loadSuccess: !1,
                                    },
                                  }),
                                    t.getFromCityData(),
                                    t.getFromListReq();
                                }));
                        },
                      },
                      {
                        key: "formatStation",
                        value: function (t) {
                          var e = [];
                          return (
                            t.forEach(function (t) {
                              Array.isArray(t.sts) &&
                                e.push(
                                  [
                                    {
                                      nm: t.cnm,
                                      py: t.cpy,
                                      stationName: t.cnm,
                                      cityName: t.cnm,
                                    },
                                  ].concat(
                                    (0, c.Z)(
                                      t.sts.map(function (e) {
                                        return (0,
                                        n.Z)((0, n.Z)({}, e), {}, { stationName: e.nm, cityName: t.cnm });
                                      })
                                    )
                                  )
                                );
                            }),
                            e
                          );
                        },
                      },
                      {
                        key: "getFromListReq",
                        value: function (t) {
                          var e = this,
                            i = this.state,
                            a = i.tabType,
                            c = i.utmSource;
                          (0, p.CC)({ type: R[a], city: t || "", utmSource: c })
                            .then(function (t) {
                              if (t.data && Array.isArray(t.data.hcts)) {
                                var i = t.data.hcts.map(function (t) {
                                  return (0,
                                  n.Z)((0, n.Z)({}, t), {}, { cityName: t.cnm, stationName: t.snm });
                                });
                                e.setState({ hotFromArea: i });
                              }
                            })
                            .catch(function (t) {
                              (0,
                              S.showToast)(t.message || "信息获取失败，请稍后再试~");
                            })
                            .finally(function () {
                              e.setState({ loadDataFinish: !0 });
                            });
                        },
                      },
                      {
                        key: "getToListReq",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.tabType,
                            a = e.fromCity,
                            c = e.utmSource;
                          (0, p.pN)({ type: R[i], city: a, utmSource: c })
                            .then(function (e) {
                              if (!e.data || e.data.hcts || e.data.cts) {
                                if (e.data && Array.isArray(e.data.hcts)) {
                                  var a = e.data.hcts.map(function (t) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, t), {}, { cityName: t.cnm, stationName: t.snm });
                                  });
                                  t.setState({ hotToArea: a });
                                }
                                if (e.data && Array.isArray(e.data.cts)) {
                                  var c = t.formatStation(e.data.cts);
                                  console.log("areaStationList", c),
                                    t.setState({ areaStationList: c });
                                }
                              } else (0, S.showToast)(1 == R[i] ? "暂无直达景点信息哦～" : "暂无直达机场信息哦～");
                            })
                            .catch(function (t) {
                              (0,
                              S.showToast)(t.message || "信息获取失败，请稍后再试~");
                            })
                            .finally(function () {
                              t.setState({ loadDataFinish: !0 });
                            });
                        },
                      },
                      {
                        key: "setLoadTag",
                        value: function () {
                          var t = this;
                          this.state.loadTag <
                            this.state.currentTabCities.cityTags.length &&
                            !this.state.isFocus &&
                            this.setState(
                              { loadTag: 4 + this.state.loadTag },
                              function () {
                                setTimeout(t.setLoadTag, 500);
                              }
                            );
                        },
                      },
                      {
                        key: "getFromCityData",
                        value: function () {
                          var t = this,
                            e = this.state.utmSource;
                          (0, p.vz)({ utmSource: e })
                            .then(function (e) {
                              if (e.data && e.data.length) {
                                var i = t.getFromCityTags(e.data),
                                  a = t.getFromCityMainList(i, e.data),
                                  c = t.state.currentTabCities;
                                t.setState(
                                  {
                                    currentTabCities: (0, n.Z)(
                                      (0, n.Z)({}, c),
                                      {},
                                      { cityTags: i, cityMainList: a }
                                    ),
                                    loadDataFinish: !0,
                                  },
                                  function () {
                                    setTimeout(t.setLoadTag, 500);
                                  }
                                );
                              } else u().showToast({ title: "暂无车站信息哦~", icon: "none", duration: 1500 }), t.setState({ loadDataFinish: !0 });
                            })
                            .catch(function (e) {
                              console.log(e),
                                t.setState({ loadDataFinish: !0 });
                            });
                        },
                      },
                      {
                        key: "getToCityData",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.fromCity,
                            a = e.utmSource;
                          (0, p.Vs)({ fromCity: i, utmSource: a })
                            .then(function (e) {
                              if (e.data && e.data.length) {
                                var i = t.getToCityTags(e.data),
                                  a = t.getToCityMainList(i, e.data),
                                  c = t.state.currentTabCities;
                                t.setState(
                                  {
                                    currentTabCities: (0, n.Z)(
                                      (0, n.Z)({}, c),
                                      {},
                                      {
                                        hotCities: (e.data || [])
                                          .filter(function (t) {
                                            return 1 === t.grade;
                                          })
                                          .map(function (t) {
                                            return { cityName: t.name };
                                          }),
                                        cityTags: i,
                                        cityMainList: a,
                                      }
                                    ),
                                    loadDataFinish: !0,
                                  },
                                  function () {
                                    setTimeout(t.setLoadTag, 500);
                                  }
                                );
                              } else u().showToast({ title: "暂无车站信息哦~", icon: "none", duration: 1500 }), t.setState({ loadDataFinish: !0 });
                            })
                            .catch(function (e) {
                              console.log(e),
                                t.setState({ loadDataFinish: !0 });
                            });
                        },
                      },
                      {
                        key: "getFromCityTags",
                        value: function (t) {
                          var e = [];
                          return (
                            t.forEach(function (t) {
                              var i = t.py.slice(0, 1).toUpperCase();
                              -1 === e.indexOf(i) && e.push(i);
                            }),
                            e.sort(function (t, e) {
                              return t > e ? 1 : -1;
                            })
                          );
                        },
                      },
                      {
                        key: "getFromCityMainList",
                        value: function (t, e) {
                          var i = {};
                          return (
                            t.forEach(function (t) {
                              (i[t] = []),
                                e.forEach(function (e) {
                                  e.py.slice(0, 1).toUpperCase() === t &&
                                    i[t].push({
                                      cityName: e.nm,
                                      citypinyin: e.py,
                                    });
                                });
                            }),
                            i
                          );
                        },
                      },
                      {
                        key: "getToCityTags",
                        value: function (t) {
                          var e = [];
                          return (
                            t.forEach(function (t) {
                              var i = t.pinyin.slice(0, 1).toUpperCase();
                              -1 === e.indexOf(i) && e.push(i);
                            }),
                            e.sort(function (t, e) {
                              return t > e ? 1 : -1;
                            })
                          );
                        },
                      },
                      {
                        key: "getToCityMainList",
                        value: function (t, e) {
                          var i = {};
                          return (
                            t.forEach(function (t) {
                              (i[t] = []),
                                e.forEach(function (e) {
                                  e.pinyin.slice(0, 1).toUpperCase() === t &&
                                    i[t].push({
                                      cityName: e.name,
                                      citypinyin: e.pinyin,
                                    });
                                });
                            }),
                            i
                          );
                        },
                      },
                      {
                        key: "onClickNoResult",
                        value: function () {
                          var t = this.state,
                            e = t.inputKeyword,
                            i = t.tabType,
                            a = t.fromPage,
                            c = t.selectType;
                          if (i)
                            "home" === a &&
                              u().setStorageSync(V[i][c], {
                                cityName: e,
                                stationName: e,
                              }),
                              this.invokeCallback({
                                cityName: e,
                                stationName: e,
                              });
                          else {
                            var n = { cityName: e, stationName: "" };
                            u().setStorageSync("BUS_SELECTCITY_VALUE", n),
                              "home" === a && "from" === c
                                ? (u().setStorageSync(
                                    "BUS_QUERY_FROM",
                                    n.cityName
                                  ),
                                  u().setStorageSync(
                                    "BUS_QUERY_FROM_STATION",
                                    n.stationName
                                  ))
                                : "home" === a &&
                                  "to" === c &&
                                  (u().setStorageSync(
                                    "BUS_QUERY_TO",
                                    n.cityName
                                  ),
                                  u().setStorageSync(
                                    "BUS_QUERY_TO_STATION",
                                    n.stationName
                                  )),
                              this.invokeCallback({
                                cityName: e,
                                stationName: "",
                              });
                          }
                          this.navigateBack();
                        },
                      },
                      {
                        key: "onClickClearHistory",
                        value: function () {
                          var t = this.state.currentTabCities;
                          this.setState({
                            currentTabCities: (0, n.Z)(
                              (0, n.Z)({}, t),
                              {},
                              { historyCities: [] }
                            ),
                          }),
                            u().setStorageSync("BUS_SELECTCITY_HISTORY", []);
                        },
                      },
                      {
                        key: "onClickTag",
                        value: function (t) {
                          this.setState({ toView: t });
                        },
                      },
                      {
                        key: "onClickSwitchMoreCity",
                        value: function (t) {
                          var e = this.state.isShowMoreCity;
                          e[t] ? (e[t] = !1) : (e[t] = !0),
                            this.setState({ isShowMoreCity: e });
                        },
                      },
                      {
                        key: "onChangeSearch",
                        value: function (t) {
                          var e = this,
                            i = this.state,
                            a = i.selectType,
                            c = i.fromCity,
                            n = i.utmSource,
                            s = i.tabType,
                            o = (t.detail.value || "").trim();
                          this.setState({ inputKeyword: o }, function () {
                            if (o) {
                              e.setState({ isSearchView: !0 });
                              var t = -1 !== n.indexOf("zxxcx_ditui"),
                                i = -1 !== n.indexOf("offzxcz_"),
                                r = {
                                  key: o.trim(),
                                  poiType: "from" === a ? 1 : 2,
                                  from: c,
                                };
                              (t || i) &&
                                ((r.utmSource = n),
                                (r.basicParams = {
                                  bigChannel: s ? "point" : "bus",
                                })),
                                (0, p.YK)(r)
                                  .then(function (t) {
                                    t.data && t.data.length
                                      ? e.setState(
                                          {
                                            searchResult: e.setSearchData(
                                              t.data
                                            ),
                                            loadDataFinish: !0,
                                          },
                                          function () {
                                            console.log(e.state);
                                          }
                                        )
                                      : e.setState({
                                          searchResult: [],
                                          loadDataFinish: !0,
                                        });
                                  })
                                  .catch(function (t) {
                                    console.log(t),
                                      u().showToast({
                                        title: "信息获取失败，请稍后再试~",
                                        icon: "none",
                                        duration: 1500,
                                      }),
                                      e.setState({ loadDataFinish: !0 });
                                  });
                            } else e.onClickClearSearch();
                          });
                        },
                      },
                      {
                        key: "setSearchData",
                        value: function (t) {
                          var e = this;
                          return t.map(function (t) {
                            var i,
                              a = t.sl || [];
                            return {
                              cityName: t.cityName,
                              provinceName: t.provinceName,
                              showName: e.getHighLightName(
                                t.cityName,
                                t.highlights
                              ),
                              cityDesc: a.length ? "（所有站点）" : "",
                              stationList:
                                null ===
                                  (i = a.filter(function (t) {
                                    return !!t.stationName;
                                  })) || void 0 === i
                                  ? void 0
                                  : i.map(function (i) {
                                      return {
                                        cityName: t.cityName,
                                        stationName: i.stationName,
                                        showName: e.getHighLightName(
                                          i.stationName,
                                          t.highlights
                                        ),
                                        tag: i.tag,
                                      };
                                    }),
                              officialTag: t.officialTag || "",
                              officialIcon: t.officialIcon || "",
                            };
                          });
                        },
                      },
                      {
                        key: "getHighLightName",
                        value: function (t, e) {
                          var i = e[0],
                            a = [{ desc: t, isHigh: !1 }];
                          if (i) {
                            var c = t.split(i);
                            (a = []),
                              c.forEach(function (e, n) {
                                a.push({ desc: e, isHigh: !1 }),
                                  (n !== c.length - 1 ||
                                    (t !== i && t.endsWith(i))) &&
                                    a.push({ desc: i, isHigh: !0 });
                              });
                          }
                          return a;
                        },
                      },
                      {
                        key: "onClickClearSearch",
                        value: function () {
                          this.setState({
                            inputKeyword: "",
                            searchResult: [],
                            isSearchView: !1,
                          });
                        },
                      },
                      {
                        key: "onClickSearchConfirm",
                        value: function () {
                          var t = this.state,
                            e = t.inputKeyword,
                            i = t.selectType;
                          e
                            ? this.onClickNoResult()
                            : u().showToast({
                                title:
                                  "from" === i
                                    ? "出发城市不能为空~"
                                    : "到达城市不能为空~",
                                icon: "none",
                                duration: 1500,
                              });
                        },
                      },
                      {
                        key: "onClickSearchCancel",
                        value: function () {
                          u().navigateBack();
                        },
                      },
                      {
                        key: "onScroll",
                        value: function () {
                          this.getAcitiveCityTag();
                        },
                      },
                      {
                        key: "getAcitiveCityTag",
                        value: function () {
                          var t = this,
                            e = u().getSystemInfoSync().windowHeight,
                            i = [];
                          u()
                            .createSelectorQuery()
                            .selectAll(".city-block")
                            .boundingClientRect(function (a) {
                              u()
                                .createSelectorQuery()
                                .select(".search-bar")
                                .boundingClientRect(function (c) {
                                  var n =
                                    u().getSystemInfoSync().statusBarHeight +
                                    ((null == c ? void 0 : c.height) || 0);
                                  null == a ||
                                    a.forEach(function (t) {
                                      t &&
                                        t.top - n < e &&
                                        t.top + t.height - n > 0 &&
                                        i.push(t.id);
                                    }),
                                    t.setState({ activeCityTag: i[0] });
                                })
                                .exec();
                            })
                            .exec();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t,
                            e = this,
                            i = this.state,
                            a = i.toView,
                            c = i.isSearchView,
                            n = i.isShowCurrentPosition,
                            s = i.selectType,
                            o = i.currentCity,
                            r = i.currentTabCities,
                            l = i.inputKeyword,
                            h = i.loadDataFinish,
                            m = i.isShowMoreCity,
                            d = i.searchResult,
                            y = i.tabType,
                            u = i.hotFromArea,
                            f = i.hotToArea,
                            S = i.historyFromScenicAreas,
                            T = i.historyToScenicAreas,
                            g = i.historyFromAirport,
                            N = i.historyToAirport,
                            p = i.areaStationList,
                            v = i.isFocus,
                            w = i.loadTag,
                            _ = i.isTieyou,
                            R = i.activeCityTag;
                          return (
                            (t =
                              "from" === s
                                ? "scenicArea" === y
                                  ? "请输入出发城市/景点"
                                  : "airPort" === y
                                  ? "请输入出发城市/机场"
                                  : "出发城市/车站/机场/景点"
                                : "scenicArea" === y
                                ? "请输入到达城市/景点"
                                : "airPort" === y
                                ? "请输入到达城市/机场"
                                : "到达城市/车站/机场/景点"),
                            (0, A.BX)(C.View, {
                              className:
                                "city-select bus-city-select-page ".concat(
                                  _ ? "ty" : ""
                                ),
                              children: [
                                (0, A.tZ)(C.View, {
                                  className: "search-bar",
                                  children: (0, A.BX)(C.View, {
                                    className: "search-input-box",
                                    children: [
                                      (0, A.BX)(C.View, {
                                        className: "search-input-bd",
                                        children: [
                                          (0, A.tZ)(C.Input, {
                                            className: "search-module-input",
                                            placeholderClass:
                                              "search-module-input-focus",
                                            placeholder: t,
                                            value: l,
                                            type: "text",
                                            onInput: this.onChangeSearch,
                                            focus: v,
                                            onFocus: function () {
                                              e.setState(
                                                { isFocus: !0 },
                                                function () {
                                                  setTimeout(
                                                    e.getAcitiveCityTag,
                                                    1e3
                                                  );
                                                }
                                              );
                                            },
                                            onBlur: function () {
                                              e.setState({
                                                isFocus: !1,
                                                loadTag: r.cityTags.length,
                                              });
                                            },
                                          }),
                                          !!l &&
                                            (0, A.tZ)(C.View, {
                                              className: "del",
                                              id: "AdAE",
                                              onClick: this.onClickClearSearch,
                                              children: (0, A.tZ)(C.Text, {
                                                className: "icon-del",
                                                children: "×",
                                              }),
                                            }),
                                        ],
                                      }),
                                      (0, A.BX)(C.View, {
                                        className: "search-btn",
                                        children: [
                                          (0, A.tZ)(C.View, {
                                            className: "text-btn submit",
                                            id: "AdAF",
                                            onClick: this.onClickSearchConfirm,
                                            children: "确定",
                                          }),
                                          (0, A.tZ)(C.View, {
                                            className: "text-btn",
                                            id: "AdAG",
                                            onClick: this.onClickSearchCancel,
                                            children: "取消",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                c &&
                                  (0, A.BX)(C.Block, {
                                    children: [
                                      h &&
                                        (0, A.BX)(C.View, {
                                          className: "search-module",
                                          children: [
                                            d &&
                                              d[0] &&
                                              (0, A.tZ)(C.Block, {
                                                children: (0, A.tZ)(C.View, {
                                                  className: "search-list",
                                                  children:
                                                    d &&
                                                    d.map(function (t, i) {
                                                      return (0, A.BX)(
                                                        C.View,
                                                        {
                                                          className:
                                                            "list-item",
                                                          children: [
                                                            (0, A.BX)(C.View, {
                                                              className:
                                                                "search-title",
                                                              id: "AdAH",
                                                              onClick:
                                                                e.onClickCity.bind(
                                                                  e,
                                                                  t
                                                                ),
                                                              children: [
                                                                (0, A.BX)(
                                                                  C.View,
                                                                  {
                                                                    className:
                                                                      "left",
                                                                    children: [
                                                                      (0, A.tZ)(
                                                                        C.View,
                                                                        {
                                                                          className:
                                                                            "search-tag",
                                                                          children:
                                                                            "城市",
                                                                        }
                                                                      ),
                                                                      (0, A.BX)(
                                                                        C.View,
                                                                        {
                                                                          className:
                                                                            "search-name",
                                                                          children:
                                                                            [
                                                                              t.showName.map(
                                                                                function (
                                                                                  t
                                                                                ) {
                                                                                  return (0,
                                                                                  A.tZ)(
                                                                                    C.Block,
                                                                                    {
                                                                                      children:
                                                                                        (0,
                                                                                        A.tZ)(
                                                                                          C.Text,
                                                                                          {
                                                                                            className:
                                                                                              t.isHigh
                                                                                                ? "high"
                                                                                                : "",
                                                                                            children:
                                                                                              t.desc,
                                                                                          }
                                                                                        ),
                                                                                    },
                                                                                    "index"
                                                                                  );
                                                                                }
                                                                              ),
                                                                              !!t.cityDesc &&
                                                                                (0,
                                                                                A.tZ)(
                                                                                  C.Text,
                                                                                  {
                                                                                    className:
                                                                                      "desc",
                                                                                    children:
                                                                                      t.cityDesc,
                                                                                  }
                                                                                ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                      (0, A.tZ)(
                                                                        C.View,
                                                                        {
                                                                          className:
                                                                            "search-province",
                                                                          children:
                                                                            t.provinceName ||
                                                                            "",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                                (t.officialTag ||
                                                                  t.officialIcon) &&
                                                                  (0, A.BX)(
                                                                    C.View,
                                                                    {
                                                                      className:
                                                                        "right-brand",
                                                                      children:
                                                                        [
                                                                          t.officialIcon &&
                                                                            (0,
                                                                            A.tZ)(
                                                                              C.View,
                                                                              {
                                                                                className:
                                                                                  "brand-icon",
                                                                                children:
                                                                                  (0,
                                                                                  A.tZ)(
                                                                                    C.Image,
                                                                                    {
                                                                                      src:
                                                                                        t.officialIcon ||
                                                                                        "",
                                                                                      style:
                                                                                        {
                                                                                          width:
                                                                                            "100%",
                                                                                          height:
                                                                                            "100%",
                                                                                          display:
                                                                                            "block",
                                                                                        },
                                                                                      mode: "aspectFit",
                                                                                    }
                                                                                  ),
                                                                              }
                                                                            ),
                                                                          t.officialTag &&
                                                                            (0,
                                                                            A.tZ)(
                                                                              C.View,
                                                                              {
                                                                                className:
                                                                                  "brand-tag",
                                                                                children:
                                                                                  t.officialTag ||
                                                                                  "",
                                                                              }
                                                                            ),
                                                                        ],
                                                                    }
                                                                  ),
                                                              ],
                                                            }),
                                                            t.stationList &&
                                                              t
                                                                .stationList[0] &&
                                                              t.stationList.map(
                                                                function (
                                                                  t,
                                                                  i
                                                                ) {
                                                                  return (0,
                                                                  A.tZ)(
                                                                    C.Block,
                                                                    {
                                                                      children:
                                                                        (0,
                                                                        A.BX)(
                                                                          C.View,
                                                                          {
                                                                            className:
                                                                              "search-child",
                                                                            id: "AdAI",
                                                                            onClick:
                                                                              e.onClickCity.bind(
                                                                                e,
                                                                                t
                                                                              ),
                                                                            children:
                                                                              [
                                                                                (0,
                                                                                A.tZ)(
                                                                                  C.View,
                                                                                  {
                                                                                    className:
                                                                                      "child-tag",
                                                                                    children:
                                                                                      (0,
                                                                                      A.tZ)(
                                                                                        C.View,
                                                                                        {
                                                                                          className:
                                                                                            "tag",
                                                                                          children:
                                                                                            t.tag ||
                                                                                            "站点",
                                                                                        }
                                                                                      ),
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                A.tZ)(
                                                                                  C.View,
                                                                                  {
                                                                                    className:
                                                                                      "child-name",
                                                                                    children:
                                                                                      t.showName.map(
                                                                                        function (
                                                                                          t,
                                                                                          e
                                                                                        ) {
                                                                                          return (0,
                                                                                          A.tZ)(
                                                                                            C.Block,
                                                                                            {
                                                                                              children:
                                                                                                (0,
                                                                                                A.tZ)(
                                                                                                  C.Text,
                                                                                                  {
                                                                                                    className:
                                                                                                      t.isHigh
                                                                                                        ? "high"
                                                                                                        : "",
                                                                                                    children:
                                                                                                      t.desc,
                                                                                                  }
                                                                                                ),
                                                                                            },
                                                                                            e
                                                                                          );
                                                                                        }
                                                                                      ),
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        ),
                                                                    },
                                                                    i
                                                                  );
                                                                }
                                                              ),
                                                          ],
                                                        },
                                                        i
                                                      );
                                                    }),
                                                }),
                                              }),
                                            !d[0] &&
                                              (0, A.tZ)(C.View, {
                                                className: "tuijian",
                                                children: (0, A.BX)(C.View, {
                                                  className: "content",
                                                  children: [
                                                    (0, A.tZ)(C.View, {
                                                      className: "tag",
                                                      children: "仍然搜索",
                                                    }),
                                                    (0, A.tZ)(C.View, {
                                                      className: "desc",
                                                      id: "AdAJ",
                                                      onClick:
                                                        this.onClickNoResult,
                                                      children: l,
                                                    }),
                                                  ],
                                                }),
                                              }),
                                          ],
                                        }),
                                      !h &&
                                        (0, A.tZ)(C.Block, {
                                          children: (0, A.tZ)(C.View, {
                                            className: "load-search",
                                            children: (0, A.tZ)(C.View, {
                                              className: "search-list",
                                              children: [0, 1, 2, 3, 4].map(
                                                function (t, e) {
                                                  return (0, A.BX)(
                                                    C.View,
                                                    {
                                                      className: "list-item",
                                                      children: [
                                                        (0, A.BX)(C.View, {
                                                          className:
                                                            "search-title",
                                                          children: [
                                                            (0, A.tZ)(C.View, {
                                                              className:
                                                                "search-tag",
                                                            }),
                                                            (0, A.tZ)(C.View, {
                                                              className:
                                                                "search-name",
                                                              children: (0,
                                                              A.tZ)(C.View, {
                                                                className:
                                                                  "desc",
                                                              }),
                                                            }),
                                                            (0, A.tZ)(C.View, {
                                                              className:
                                                                "search-province",
                                                              children: (0,
                                                              A.tZ)(C.View, {
                                                                className:
                                                                  "desc",
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        [0, 1, 2, 3, 4].map(
                                                          function (t, e) {
                                                            return (0, A.tZ)(
                                                              C.Block,
                                                              {
                                                                children: (0,
                                                                A.BX)(C.View, {
                                                                  className:
                                                                    "search-child",
                                                                  children: [
                                                                    (0, A.tZ)(
                                                                      C.View,
                                                                      {
                                                                        className:
                                                                          "child-tag",
                                                                        children:
                                                                          (0,
                                                                          A.tZ)(
                                                                            C.View,
                                                                            {
                                                                              className:
                                                                                "tag",
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                    (0, A.tZ)(
                                                                      C.View,
                                                                      {
                                                                        className:
                                                                          "child-name",
                                                                        children:
                                                                          (0,
                                                                          A.tZ)(
                                                                            C.View,
                                                                            {
                                                                              className:
                                                                                "desc",
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                              },
                                                              e
                                                            );
                                                          }
                                                        ),
                                                      ],
                                                    },
                                                    e
                                                  );
                                                }
                                              ),
                                            }),
                                          }),
                                        }),
                                    ],
                                  }),
                                !c &&
                                  (0, A.BX)(C.Block, {
                                    children: [
                                      h &&
                                        (0, A.BX)(C.View, {
                                          className: "city-module",
                                          children: [
                                            !("to" === s && y) &&
                                              (0, A.BX)(C.View, {
                                                className: "city-module-letter",
                                                children: [
                                                  n &&
                                                    !!o.cityName &&
                                                    (0, A.tZ)(C.Text, {
                                                      className:
                                                        "city-module-letter-item city_tag_current  ".concat(
                                                          "current" === R
                                                            ? "active-tag"
                                                            : ""
                                                        ),
                                                      id: "AdAK",
                                                      onClick:
                                                        this.onClickTag.bind(
                                                          this,
                                                          "position"
                                                        ),
                                                      children: "当前",
                                                    }),
                                                  r.historyCities[0] &&
                                                    (0, A.tZ)(C.Text, {
                                                      className:
                                                        "city-module-letter-item city_tag_history  ".concat(
                                                          "history" === R
                                                            ? "active-tag"
                                                            : ""
                                                        ),
                                                      id: "AdAL",
                                                      onClick:
                                                        this.onClickTag.bind(
                                                          this,
                                                          "history"
                                                        ),
                                                      children: "历史",
                                                    }),
                                                  r.hotCities &&
                                                    r.hotCities[0] &&
                                                    (0, A.tZ)(C.Text, {
                                                      className:
                                                        "city-module-letter-item ".concat(
                                                          "hot" === R
                                                            ? "active-tag"
                                                            : ""
                                                        ),
                                                      id: "AdAM",
                                                      onClick:
                                                        this.onClickTag.bind(
                                                          this,
                                                          "hot"
                                                        ),
                                                      children: "热门",
                                                    }),
                                                  !v &&
                                                    r.cityTags.map(function (
                                                      t,
                                                      i
                                                    ) {
                                                      return (0, A.tZ)(
                                                        C.View,
                                                        {
                                                          children: (0, A.tZ)(
                                                            C.Text,
                                                            {
                                                              id: "AdFu",
                                                              className:
                                                                "city-module-letter-item  " +
                                                                (i > w
                                                                  ? "ghost"
                                                                  : "") +
                                                                "city_tag_"
                                                                  .concat(
                                                                    t,
                                                                    " "
                                                                  )
                                                                  .concat(
                                                                    R ===
                                                                      "city_".concat(
                                                                        t
                                                                      )
                                                                      ? "active-tag"
                                                                      : ""
                                                                  ),
                                                              onClick:
                                                                e.onClickTag.bind(
                                                                  e,
                                                                  "city_to_".concat(
                                                                    t
                                                                  )
                                                                ),
                                                              children: t,
                                                            }
                                                          ),
                                                        },
                                                        "index"
                                                      );
                                                    }),
                                                ],
                                              }),
                                            (0, A.BX)(C.ScrollView, {
                                              scrollY: "true",
                                              className: "city-module-list",
                                              scrollIntoView: a,
                                              style: "top: 52px",
                                              onScroll:
                                                this.onScroll.bind(this),
                                              children: [
                                                n &&
                                                  (0, A.BX)(C.Block, {
                                                    children: [
                                                      !!o.cityName &&
                                                        (0, A.tZ)(C.View, {
                                                          id: "position",
                                                          className:
                                                            "city-module-type",
                                                          children: "当前",
                                                        }),
                                                      !!o.cityName &&
                                                        (0, A.tZ)(C.View, {
                                                          className:
                                                            "city-module-item city_current city-block",
                                                          id: "current",
                                                          children:
                                                            o.loadSuccess
                                                              ? (0, A.BX)(
                                                                  C.View,
                                                                  {
                                                                    className:
                                                                      "city-module-name",
                                                                    id: "AdAN",
                                                                    onClick:
                                                                      this.onClickCity.bind(
                                                                        this,
                                                                        o
                                                                      ),
                                                                    children: [
                                                                      (0, A.tZ)(
                                                                        C.Text,
                                                                        {
                                                                          className:
                                                                            "ifont-location iconfont color-primary",
                                                                        }
                                                                      ),
                                                                      o.cityName,
                                                                    ],
                                                                  }
                                                                )
                                                              : (0, A.BX)(
                                                                  C.View,
                                                                  {
                                                                    className:
                                                                      "city-module-name",
                                                                    children: [
                                                                      (0, A.tZ)(
                                                                        C.Text,
                                                                        {
                                                                          className:
                                                                            "ifont-location iconfont color-primary",
                                                                        }
                                                                      ),
                                                                      o.cityName,
                                                                    ],
                                                                  }
                                                                ),
                                                        }),
                                                    ],
                                                  }),
                                                r.historyCities &&
                                                  r.historyCities[0] &&
                                                  !y &&
                                                  (0, A.BX)(C.View, {
                                                    id: "history",
                                                    className:
                                                      "city-module-type",
                                                    children: [
                                                      (0, A.tZ)(C.Text, {
                                                        children: "历史选择",
                                                      }),
                                                      (0, A.tZ)(C.Text, {
                                                        className:
                                                          "clear-text color-primary",
                                                        id: "AdAO",
                                                        onClick:
                                                          this
                                                            .onClickClearHistory,
                                                        children: "清空",
                                                      }),
                                                    ],
                                                  }),
                                                r.historyCities &&
                                                  r.historyCities[0] &&
                                                  !y &&
                                                  (0, A.tZ)(C.View, {
                                                    className:
                                                      "city-module-item city_history city-block",
                                                    id: "history",
                                                    children:
                                                      r.historyCities.map(
                                                        function (t, i) {
                                                          return (0, A.tZ)(
                                                            C.Block,
                                                            {
                                                              children: (0,
                                                              A.tZ)(C.Text, {
                                                                className:
                                                                  "city-module-name",
                                                                id: "AdAP",
                                                                onClick:
                                                                  e.onClickCity.bind(
                                                                    e,
                                                                    t
                                                                  ),
                                                                children:
                                                                  t.stationName
                                                                    ? t.stationName
                                                                    : t.cityName,
                                                              }),
                                                            },
                                                            i
                                                          );
                                                        }
                                                      ),
                                                  }),
                                                "scenicArea" === y &&
                                                  S.length > 0 &&
                                                  "from" === s &&
                                                  (0, A.tZ)(Z, {
                                                    id: "history",
                                                    areaList: S,
                                                    handleClear:
                                                      this
                                                        .handleClearAreaHistory,
                                                    handleAreaClick:
                                                      this.onClickCity,
                                                  }),
                                                "airPort" === y &&
                                                  g.length > 0 &&
                                                  "from" === s &&
                                                  (0, A.tZ)(Z, {
                                                    id: "history",
                                                    areaList: g,
                                                    handleClear:
                                                      this
                                                        .handleClearAreaHistory,
                                                    handleAreaClick:
                                                      this.onClickCity,
                                                  }),
                                                "scenicArea" === y &&
                                                  T.length > 0 &&
                                                  "to" === s &&
                                                  (0, A.tZ)(Z, {
                                                    id: "history",
                                                    className:
                                                      "city-module-type-to",
                                                    areaList: T,
                                                    handleClear:
                                                      this
                                                        .handleClearAreaHistory,
                                                    handleAreaClick:
                                                      this.onClickCity,
                                                  }),
                                                "airPort" === y &&
                                                  N.length > 0 &&
                                                  "to" === s &&
                                                  (0, A.tZ)(Z, {
                                                    id: "history",
                                                    className:
                                                      "city-module-type-to",
                                                    areaList: N,
                                                    handleClear:
                                                      this
                                                        .handleClearAreaHistory,
                                                    handleAreaClick:
                                                      this.onClickCity,
                                                  }),
                                                y &&
                                                  u.length > 0 &&
                                                  (0, A.tZ)(k, {
                                                    id: "hot",
                                                    titleText:
                                                      "scenicArea" === y
                                                        ? "热门出发城市/景点"
                                                        : "热门出发城市/机场",
                                                    areaList: u,
                                                    handleAreaClick:
                                                      this.onClickCity,
                                                  }),
                                                y &&
                                                  f.length > 0 &&
                                                  f.length > 3 &&
                                                  (0, A.tZ)(k, {
                                                    id: "hot",
                                                    className:
                                                      "to-city-hot-list",
                                                    titleText:
                                                      "scenicArea" === y
                                                        ? "热门到达城市/景点"
                                                        : "热门到达城市/机场",
                                                    areaList: f,
                                                    handleAreaClick:
                                                      this.onClickCity,
                                                  }),
                                                r.hotCities &&
                                                  r.hotCities[0] &&
                                                  !y &&
                                                  (0, A.tZ)(C.View, {
                                                    id: "hot",
                                                    className:
                                                      "city-module-type ",
                                                    children: "热门城市",
                                                  }),
                                                r.hotCities &&
                                                  r.hotCities[0] &&
                                                  !y &&
                                                  (0, A.tZ)(C.View, {
                                                    className:
                                                      "city-module-item city_hot city-block",
                                                    id: "hot",
                                                    children: r.hotCities.map(
                                                      function (t, i) {
                                                        return (0, A.tZ)(
                                                          C.Block,
                                                          {
                                                            children: (0, A.tZ)(
                                                              C.Text,
                                                              {
                                                                className:
                                                                  "city-module-name",
                                                                id: "AdAQ",
                                                                onClick:
                                                                  e.onClickCity.bind(
                                                                    e,
                                                                    t
                                                                  ),
                                                                children:
                                                                  t.cityName,
                                                              }
                                                            ),
                                                          },
                                                          i
                                                        );
                                                      }
                                                    ),
                                                  }),
                                                y &&
                                                  "to" === s &&
                                                  p.length > 0 &&
                                                  (0, A.tZ)(b, {
                                                    tabType: y,
                                                    areaStationList: p,
                                                    handleAreaClick:
                                                      this.onClickCity,
                                                  }),
                                                !v &&
                                                  r.cityTags.map(function (
                                                    t,
                                                    i
                                                  ) {
                                                    return (0, A.BX)(
                                                      C.Block,
                                                      {
                                                        children: [
                                                          (0, A.tZ)(C.View, {
                                                            id: "city_to_".concat(
                                                              t
                                                            ),
                                                            className:
                                                              "city-module-type letter",
                                                            onClick:
                                                              e.onClickTag.bind(
                                                                e,
                                                                "city_to_".concat(
                                                                  t
                                                                )
                                                              ),
                                                            children: t,
                                                          }),
                                                          i <= w &&
                                                            (0, A.tZ)(C.Block, {
                                                              children: (0,
                                                              A.BX)(C.View, {
                                                                className:
                                                                  "city-box city_".concat(
                                                                    t,
                                                                    " city-block"
                                                                  ),
                                                                id: "city_".concat(
                                                                  t
                                                                ),
                                                                children: [
                                                                  r.cityMainList[
                                                                    t
                                                                  ]
                                                                    .slice(
                                                                      0,
                                                                      m[t]
                                                                        ? r
                                                                            .cityMainList[
                                                                            t
                                                                          ]
                                                                            .length
                                                                        : 19
                                                                    )
                                                                    .map(
                                                                      function (
                                                                        t,
                                                                        i
                                                                      ) {
                                                                        return (0,
                                                                        A.tZ)(
                                                                          C.Block,
                                                                          {
                                                                            children:
                                                                              (0,
                                                                              A.tZ)(
                                                                                C.View,
                                                                                {
                                                                                  className:
                                                                                    "city-box-item",
                                                                                  id: "AdAR",
                                                                                  onClick:
                                                                                    e.onClickCity.bind(
                                                                                      e,
                                                                                      t
                                                                                    ),
                                                                                  children:
                                                                                    (0,
                                                                                    A.tZ)(
                                                                                      C.Text,
                                                                                      {
                                                                                        className:
                                                                                          "city-box-name",
                                                                                        children:
                                                                                          t.cityName,
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                          },
                                                                          i
                                                                        );
                                                                      }
                                                                    ),
                                                                  r
                                                                    .cityMainList[
                                                                    t
                                                                  ].length >
                                                                    19 &&
                                                                    (0, A.BX)(
                                                                      C.Block,
                                                                      {
                                                                        children:
                                                                          [
                                                                            !m[
                                                                              t
                                                                            ] &&
                                                                              (0,
                                                                              A.tZ)(
                                                                                C.View,
                                                                                {
                                                                                  className:
                                                                                    "city-box-item",
                                                                                  id: "AdAS",
                                                                                  onClick:
                                                                                    e.onClickSwitchMoreCity.bind(
                                                                                      e,
                                                                                      t,
                                                                                      "show"
                                                                                    ),
                                                                                  children:
                                                                                    (0,
                                                                                    A.tZ)(
                                                                                      C.Text,
                                                                                      {
                                                                                        className:
                                                                                          "city-box-name color-primary",
                                                                                        children:
                                                                                          "更多",
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                            m[
                                                                              t
                                                                            ] &&
                                                                              (0,
                                                                              A.tZ)(
                                                                                C.View,
                                                                                {
                                                                                  className:
                                                                                    "city-box-item",
                                                                                  id: "AdAT",
                                                                                  onClick:
                                                                                    e.onClickSwitchMoreCity.bind(
                                                                                      e,
                                                                                      t,
                                                                                      "hide"
                                                                                    ),
                                                                                  children:
                                                                                    (0,
                                                                                    A.tZ)(
                                                                                      C.Text,
                                                                                      {
                                                                                        className:
                                                                                          "city-box-name color-primary",
                                                                                        children:
                                                                                          "收起",
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                ],
                                                              }),
                                                            }),
                                                        ],
                                                      },
                                                      "index"
                                                    );
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      !h &&
                                        (0, A.BX)(C.View, {
                                          className: "load-city",
                                          children: [
                                            (0, A.tZ)(C.View, {
                                              className: "loading-wrap",
                                              children: (0, A.tZ)(C.View, {
                                                className: "loading-icon",
                                                children: (0, A.tZ)(C.View, {
                                                  className: "content",
                                                }),
                                              }),
                                            }),
                                            (0, A.tZ)(C.View, {
                                              className: "load-desc",
                                              children: "正在查询",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                              ],
                            })
                          );
                        },
                      },
                    ]),
                    i
                  );
                })(d.default.Component))
              ) || v;
          Page(
            (0, a.createPageConfig)(
              E,
              "pages/bus/citySelect/index",
              { root: { cn: [] } },
              {
                enablePullDownRefresh: !1,
                backgroundColor: "#f5f5f5",
                backgroundColorTop: "#f5f5f5",
                backgroundColorBottom: "#f5f5f5",
                disableScroll: !1,
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [86230, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(55762);
        }),
          t.O();
      },
    ]);
})();
