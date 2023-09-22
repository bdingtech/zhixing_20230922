!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [25173],
      {
        63534: function (t, e, i) {
          var a,
            n = i(32180),
            s = i(298),
            r = i(79301),
            c = i(95308),
            o = i(57042),
            u = i(24460),
            l = i(81876),
            h = i(21867),
            d = i(86066),
            m = i(45023),
            f = i(52500),
            y = i(92954),
            p = i.n(y),
            N = i(71515),
            v = i(81957),
            C = i(79910),
            k = (i(39173), i(27113)),
            w = (i(49120), i(94190)),
            Z = i(25391),
            g = i(79792),
            b = i(10741),
            x = i(48813),
            S = [
              { stationName: "北京" },
              { stationName: "上海" },
              { stationName: "广州" },
              { stationName: "深圳" },
              { stationName: "苏州" },
              { stationName: "杭州" },
              { stationName: "天津" },
              { stationName: "南京" },
              { stationName: "成都" },
              { stationName: "西安" },
              { stationName: "重庆" },
              { stationName: "郑州" },
              { stationName: "长沙" },
              { stationName: "合肥" },
              { stationName: "昆山" },
              { stationName: "宁波" },
            ],
            V =
              (0, v.h)()(
                (a = (function (t) {
                  (0, h.Z)(i, t);
                  var e = (0, d.Z)(i);
                  function i(t) {
                    var a;
                    return (
                      (0, o.Z)(this, i),
                      (a = e.call(this, t)),
                      (0, m.Z)(
                        (0, l.Z)(a),
                        "pageId",
                        g.default.isTieyou ? "10650082694" : "10650082692"
                      ),
                      (a.state = {
                        loadDataFinish: !1,
                        currentCity: { stationName: "定位中..." },
                        inputKeyword: "",
                        isSearchView: !1,
                      }),
                      a
                    );
                  }
                  return (
                    (0, u.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t = (0, y.getCurrentInstance)().router.params
                              .data,
                            e = (void 0 === t ? {} : t).title,
                            i = void 0 === e ? "选择城市" : e;
                          p().setNavigationBarTitle({ title: i }),
                            this.loadData(),
                            (this.searchInputDebounce = C.Z.debounce(
                              this.searchInput,
                              200
                            ));
                        },
                      },
                      {
                        key: "loadData",
                        value: (function () {
                          var t = (0, c.Z)(
                            (0, r.Z)().mark(function t() {
                              var e,
                                i,
                                a = this;
                              return (0, r.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.next = 2),
                                          Z.ZP.getTrainStationData()
                                        );
                                      case 2:
                                        if (0 !== (e = t.sent).length) {
                                          t.next = 7;
                                          break;
                                        }
                                        return (
                                          (t.next = 6),
                                          Z.ZP.updateTrainStationData()
                                        );
                                      case 6:
                                        i = setTimeout(
                                          (0, c.Z)(
                                            (0, r.Z)().mark(function t() {
                                              return (0, r.Z)().wrap(function (
                                                t
                                              ) {
                                                for (;;)
                                                  switch ((t.prev = t.next)) {
                                                    case 0:
                                                      if (!i) {
                                                        t.next = 6;
                                                        break;
                                                      }
                                                      return (
                                                        (t.next = 3),
                                                        Z.ZP.getTrainStationData()
                                                      );
                                                    case 3:
                                                      (e = t.sent),
                                                        a.onCityDataLoad(e),
                                                        clearTimeout(i);
                                                    case 6:
                                                    case "end":
                                                      return t.stop();
                                                  }
                                              },
                                              t);
                                            })
                                          ),
                                          500
                                        );
                                      case 7:
                                        this.onCityDataLoad(e),
                                          this.beginLocate();
                                      case 9:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "handleSearch",
                        value: function (t) {
                          var e = ["香港", "香港西九龙", "香港红磡"],
                            i = t.toLowerCase(),
                            a = this.allData.filter(function (t) {
                              return (
                                t.stationName.indexOf(i) > -1 ||
                                t.py.indexOf(i) > -1 ||
                                t.pyHead.indexOf(i) > -1
                              );
                            });
                          a.forEach(function (t) {
                            e.findIndex(function (e) {
                              return e === t.stationName;
                            }) > -1 &&
                              (t.stationName = "中国".concat(t.stationName));
                          }),
                            a.sort(function (t, e) {
                              return t.cityID - e.cityID;
                            }),
                            this.onHandleSearchResult(a);
                        },
                      },
                      {
                        key: "beginLocate",
                        value: function () {
                          var t = this,
                            e = function (e) {
                              console.log(e),
                                t.setState({
                                  currentCity: { stationName: "定位失败" },
                                });
                            },
                            i = function () {
                              (0, k.y9)("wgs84")
                                .then(function (i) {
                                  console.log(i),
                                    C.Z.isEmptyObject(i)
                                      ? e()
                                      : t.handleCurrentPosition(i);
                                })
                                .catch(function (t) {
                                  e(t);
                                });
                            };
                          p().getSetting({
                            success: function (t) {
                              var a;
                              null == t ||
                              null === (a = t.authSetting) ||
                              void 0 === a ||
                              !a.hasOwnProperty("res.authSetting") ||
                              t.authSetting["scope.userLocation"]
                                ? i()
                                : e({ errMsg: "getLocation:fail auth deny" });
                            },
                            fail: function (t) {
                              e(t);
                            },
                          });
                        },
                      },
                      {
                        key: "handleCurrentPosition",
                        value: (function () {
                          var t = (0, c.Z)(
                            (0, r.Z)().mark(function t(e) {
                              var i, a;
                              return (0, r.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (i = {
                                            Latitude: e.latitude,
                                            Longitude: e.longitude,
                                            Language: "CN",
                                          }),
                                          (t.prev = 1),
                                          (t.next = 4),
                                          (0, b.bat)(i)
                                        );
                                      case 4:
                                        (a = t.sent),
                                          this.onHandleCurrentPosition({
                                            stationName:
                                              this.handleTrainStationFromLoc(a),
                                          }),
                                          (t.next = 11);
                                        break;
                                      case 8:
                                        (t.prev = 8),
                                          (t.t0 = t.catch(1)),
                                          console.log(t.t0);
                                      case 11:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this,
                                [[1, 8]]
                              );
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "handleTrainStationFromLoc",
                        value: function (t) {
                          if (!t) return "";
                          if (this.checkStationExistByName(t.ProvinceName))
                            return t.ProvinceName;
                          var e = t.CityEntities && t.CityEntities[0].CityName;
                          if (!e) return "";
                          if (this.checkStationExistByName(e)) return e;
                          var i = e.substr(e.length - 1, e.length);
                          return (
                            ("市" != i && "县" != i && "旗" != i) ||
                              (e = e.substr(0, e.length - 1)),
                            e
                          );
                        },
                      },
                      {
                        key: "checkStationExistByName",
                        value: function (t) {
                          return (
                            !!t &&
                            this.allData.find(function (e) {
                              return e.stationName == t;
                            })
                          );
                        },
                      },
                      {
                        key: "onHandleCurrentPosition",
                        value: function (t) {
                          if (null === t)
                            return this.setState({
                              currentCity: { stationName: "定位失败" },
                            });
                          this.setState({ currentCity: t });
                        },
                      },
                      {
                        key: "onCityDataLoad",
                        value: function (t) {
                          if (t) {
                            this.allData = t;
                            var e = w.hb.get() || [];
                            this.setState({
                              loadDataFinish: !0,
                              historyCities: e,
                              hotCities: S,
                            });
                          }
                        },
                      },
                      {
                        key: "handleCityTagClick",
                        value: function (t) {
                          this.setState({ toView: t });
                        },
                      },
                      {
                        key: "handleCityClick",
                        value: function (t, e, i) {
                          var a = this.state,
                            n = a.currentCity,
                            r = a.historyCities,
                            c = a.hotCities,
                            o = a.cityList,
                            u = a.searchResult;
                          if ("定位中..." !== t) {
                            if ("定位失败" === t) return this.beginLocate();
                            var l = null;
                            switch (e) {
                              case "currentCity":
                                l = n;
                                break;
                              case "currentAddress":
                                l = (0, s.Z)(
                                  (0, s.Z)({}, n),
                                  {},
                                  { isGeo: !0 }
                                );
                                break;
                              case "historyCities":
                                l = r[i];
                                break;
                              case "hotCities":
                                l = c[i];
                                break;
                              case "search":
                                l = u[i];
                                break;
                              default:
                                l = o[e][i];
                            }
                            l &&
                              (this.pushToHistory(l),
                              this.invokeCallback(l),
                              this.navigateBack());
                          }
                        },
                      },
                      {
                        key: "pushToHistory",
                        value: (function () {
                          var t = (0, c.Z)(
                            (0, r.Z)().mark(function t(e) {
                              var i, a, n;
                              return (0, r.Z)().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.next = 2),
                                        w.hb.getAsync().catch(function () {
                                          return [];
                                        })
                                      );
                                    case 2:
                                      if (((t.t0 = t.sent), t.t0)) {
                                        t.next = 5;
                                        break;
                                      }
                                      t.t0 = [];
                                    case 5:
                                      (i = t.t0),
                                        (a = i.find(function (t) {
                                          return (
                                            t.stationName === e.stationName
                                          );
                                        })),
                                        (n = i.indexOf(a)) > -1 &&
                                          i.splice(n, 1),
                                        i.unshift(e),
                                        (i = i.slice(0, 6)),
                                        w.hb.setAsync(i);
                                    case 12:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "searchInput",
                        value: function (t) {
                          var e = t.detail.value;
                          if ((this.setState({ inputKeyword: e }), !e))
                            return this.onHandleSearchResult([]);
                          this.handleSearch(e);
                        },
                      },
                      {
                        key: "onHandleSearchResult",
                        value: function (t) {
                          this.setState({ searchResult: t });
                        },
                      },
                      {
                        key: "toSearch",
                        value: function () {
                          this.state.isSearchView ||
                            this.setState({ isSearchView: !0 });
                        },
                      },
                      {
                        key: "searchClear",
                        value: function () {
                          (this.searchNode.value = ""),
                            this.setState({ inputKeyword: "" }),
                            this.onHandleSearchResult([]);
                        },
                      },
                      { key: "noop", value: function () {} },
                      {
                        key: "searchRef",
                        value: function (t) {
                          this.searchNode = t;
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.isSearchView,
                            a = e.loadDataFinish,
                            n = (e.cityList, e.historyCities),
                            s = e.hotCities,
                            r = e.inputKeyword,
                            c = e.searchResult,
                            o = e.currentCity,
                            u = e.toView;
                          return (0, x.BX)(N.Block, {
                            children: [
                              i &&
                                (0, x.BX)(N.View, {
                                  className:
                                    "search-module search-module_focus",
                                  onTouchMove: this.noop,
                                  children: [
                                    (0, x.tZ)(N.View, {
                                      className: "search-input-box",
                                      children: (0, x.BX)(N.View, {
                                        className: "search-input-bd",
                                        children: [
                                          (0, x.tZ)(N.Text, {
                                            className: "ifont-search iconfont",
                                          }),
                                          (0, x.tZ)(N.View, {
                                            className: "search-input-wrapper",
                                            children: (0, x.tZ)(
                                              N.CustomWrapper,
                                              {
                                                children: (0, x.tZ)(N.Input, {
                                                  className:
                                                    "search-module_input search-module_input-f",
                                                  placeholderClass:
                                                    "search-module_input_focus",
                                                  placeholder:
                                                    "中文/拼音/首字母",
                                                  type: "text",
                                                  ref: function (e) {
                                                    t.searchRef(e);
                                                  },
                                                  onInput:
                                                    this.searchInputDebounce,
                                                  focus: "true",
                                                }),
                                              }
                                            ),
                                          }),
                                          (0, x.tZ)(N.Text, {
                                            className: "ifont-del iconfont",
                                            onClick: this.searchClear,
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, x.tZ)(N.View, {
                                      className: "search-list",
                                      children:
                                        c &&
                                        c.map(function (e, i) {
                                          return (0,
                                          x.tZ)(N.View, { className: "search-list_item", children: (0, x.tZ)(N.Text, { className: "city-module_name", onClick: t.handleCityClick.bind(t, e.stationName, "search", i), children: e.stationName }) }, i);
                                        }),
                                    }),
                                  ],
                                }),
                              !i &&
                                (0, x.BX)(N.View, {
                                  children: [
                                    (0, x.BX)(N.View, {
                                      className: "search-module",
                                      onTouchMove: this.noop,
                                      children: [
                                        (0, x.tZ)(N.View, {
                                          className: "search-input-box",
                                          children: (0, x.BX)(N.View, {
                                            className: "search-input-bd",
                                            children: [
                                              (0, x.tZ)(N.Text, {
                                                className:
                                                  "ifont-search iconfont",
                                              }),
                                              (0, x.tZ)(N.Input, {
                                                className:
                                                  "search-module_input",
                                                placeholderClass:
                                                  "search-module_input_focus",
                                                placeholder: "中文/拼音/首字母",
                                                value: r,
                                                type: "text",
                                                onInput: this.searchInput,
                                                onFocus: this.searchFocus,
                                                disabled: "true",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, x.tZ)(N.View, {
                                          onClick: this.toSearch,
                                          style:
                                            "position:absolute;top:0;right:0;bottom:0;left:0; background-color:clear;z-index:100;",
                                        }),
                                      ],
                                    }),
                                    a &&
                                      (0, x.tZ)(N.View, {
                                        className: "city-module",
                                        children: (0, x.BX)(N.ScrollView, {
                                          scrollY: "true",
                                          className: "city-module_list",
                                          scrollIntoView: u,
                                          scrollWithAnimation: !0,
                                          style: "top: 130rpx",
                                          children: [
                                            (0, x.BX)(N.Block, {
                                              children: [
                                                (0, x.tZ)(N.View, {
                                                  id: "current",
                                                  className: "city-module_type",
                                                  children: "当前",
                                                }),
                                                (0, x.BX)(N.View, {
                                                  className:
                                                    "city-module_items",
                                                  children: [
                                                    (0, x.BX)(N.View, {
                                                      className:
                                                        "city-module_name1",
                                                      "data-cityname":
                                                        o.stationName,
                                                      onClick:
                                                        this.handleCityClick.bind(
                                                          this,
                                                          o.stationName,
                                                          "currentCity",
                                                          0
                                                        ),
                                                      children: [
                                                        (0, x.tZ)(N.Text, {
                                                          className:
                                                            "ifont-location iconfont color-primary",
                                                        }),
                                                        o.stationName,
                                                      ],
                                                    }),
                                                    o.title &&
                                                      (0, x.tZ)(N.View, {
                                                        children: o.title,
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            n &&
                                              n.length > 0 &&
                                              (0, x.BX)(N.View, {
                                                className: "city-module_items",
                                                children: [
                                                  (0, x.tZ)(N.View, {
                                                    id: "history",
                                                    className:
                                                      "city-module_type",
                                                    children: "历史选择",
                                                  }),
                                                  n.map(function (e, i) {
                                                    return (0,
                                                    x.tZ)(N.Block, { children: (0, x.tZ)(N.Text, { className: "city-module_name1", onClick: t.handleCityClick.bind(t, e.stationName, "historyCities", i), children: e.stationName }) }, "cityName");
                                                  }),
                                                ],
                                              }),
                                            s &&
                                              s.length > 0 &&
                                              (0, x.BX)(N.View, {
                                                className: "city-module_items",
                                                children: [
                                                  (0, x.tZ)(N.View, {
                                                    id: "hot",
                                                    className:
                                                      "city-module_type",
                                                    children: "热门城市",
                                                  }),
                                                  s.map(function (e, i) {
                                                    return (0,
                                                    x.tZ)(N.Block, { children: (0, x.tZ)(N.Text, { className: "city-module_name1", onClick: t.handleCityClick.bind(t, e.stationName, "hotCities", i), children: e.stationName }) }, "cityName");
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
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
                })(f.default.Component))
              ) || a;
          Page(
            (0, n.createPageConfig)(
              V,
              "functionalPages/trainCity/index",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(63534);
        }),
          t.O();
      },
    ]);
})();
