!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [70073],
      {
        24859: function (e, t, i) {
          var a,
            n = i(32180),
            s = i(298),
            c = i(57042),
            o = i(24460),
            l = i(81876),
            r = i(21867),
            h = i(86066),
            d = i(45023),
            u = i(52500),
            y = i(92954),
            m = i.n(y),
            p = i(71515),
            C = i(81957),
            f = i(79404),
            k = i(79910),
            v = i(39173),
            g = i(27113),
            w = i(49120),
            N = i(48813),
            Z = (function (e) {
              (0, r.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var a;
                return (
                  (0, c.Z)(this, i),
                  ((a = t.call(this, e)).state = { showMore: !1, load: !1 }),
                  a
                );
              }
              return (
                (0, o.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e = this;
                      this.props.tag <= "B" &&
                        setTimeout(function () {
                          e.setState({ load: !0 });
                        }, 0),
                        this.props.tag > "B" &&
                          setTimeout(function () {
                            e.setState({ load: !0 });
                          }, 500);
                    },
                  },
                  {
                    key: "showMoreHandle",
                    value: function () {
                      this.setState({ showMore: !this.state.showMore });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        i = t.cityList,
                        a = t.tag,
                        n = t.handleCityClick,
                        s = this.state,
                        c = s.showMore,
                        o = s.load;
                      return (0, N.tZ)(p.Block, {
                        children:
                          o &&
                          (0, N.BX)(p.View, {
                            className: "city-box city-box-".concat(a),
                            children: [
                              i
                                .slice(0, c ? i.length : 19)
                                .map(function (t, i) {
                                  return (0,
                                  N.tZ)(p.Block, { children: (0, N.tZ)(p.View, { className: "city-module_items", children: (0, N.tZ)(p.Text, { className: "city-module_name", onClick: n.bind(e, t.cityName, a, i), children: t.cityName }) }) }, "cityName");
                                }),
                              i.length > 19 &&
                                (0, N.tZ)(p.View, {
                                  className:
                                    "city-module_items city-box-".concat(a),
                                  children: (0, N.tZ)(p.Text, {
                                    className: "city-module_name color-primary",
                                    "data-i": a,
                                    "data-operation": "show",
                                    onClick: this.showMoreHandle.bind(this),
                                    children: c ? "收起" : "更多",
                                  }),
                                }),
                            ],
                          }),
                      });
                    },
                  },
                ]),
                i
              );
            })(u.default.Component),
            b =
              (0, C.h)()(
                (a = (function (e) {
                  (0, r.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var a;
                    return (
                      (0, c.Z)(this, i),
                      (a = t.call(this, e)),
                      (0, d.Z)((0, l.Z)(a), "pageId", "10320654345"),
                      (a.state = {
                        loadDataFinish: !1,
                        currentCity: {
                          cityName: "定位中...",
                          cityAddress: "定位中...",
                        },
                        inputKeyword: "",
                        isSearchView: !1,
                        isShowMoreCity: {},
                        tabIndex: 0,
                      }),
                      a
                    );
                  }
                  return (
                    (0, o.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, y.getCurrentInstance)().router.params
                              .data,
                            t = void 0 === e ? {} : e,
                            i = t.title,
                            a = void 0 === i ? "选择城市" : i,
                            n = t.bu,
                            s = void 0 === n ? "train" : n,
                            c = t.dataFor,
                            o = t.type,
                            l = t.hotelQueryModel;
                          if (
                            ((this.loadData = t.loadData),
                            (this.handleSearch = t.handleSearch),
                            (this.handleCurrentPosition =
                              t.handleCurrentPosition),
                            (this.dataFor = c),
                            (this.type = o),
                            this.setState({ bu: s, hotelQueryModel: l }),
                            this.beginLocate(),
                            this.onCityDataLoad(),
                            m().setNavigationBarTitle({ title: a }),
                            "function" != typeof this.loadData)
                          )
                            return (0, w.showWaringDialog)("获取城市数据失败");
                          this.loadData(this.onCityDataLoad.bind(this));
                        },
                      },
                      {
                        key: "beginLocate",
                        value: function () {
                          var e = this,
                            t = function (t) {
                              console.log(t),
                                e.setState({
                                  currentCity: {
                                    cityName: "定位失败",
                                    cityAddress: "定位失败",
                                  },
                                });
                            },
                            i = function () {
                              (0, g.y9)("wgs84")
                                .then(function (i) {
                                  console.log(i),
                                    k.Z.isEmptyObject(i)
                                      ? t()
                                      : "function" ==
                                          typeof e.handleCurrentPosition &&
                                        e.handleCurrentPosition(
                                          i,
                                          e.onHandleCurrentPosition.bind(e)
                                        );
                                })
                                .catch(function (e) {
                                  t(e);
                                });
                            };
                          m().getSetting({
                            success: function (e) {
                              var a;
                              null == e ||
                              null === (a = e.authSetting) ||
                              void 0 === a ||
                              !a.hasOwnProperty("res.authSetting") ||
                              e.authSetting["scope.userLocation"]
                                ? i()
                                : t({ errMsg: "getLocation:fail auth deny" });
                            },
                            fail: function (e) {
                              t(e);
                            },
                          });
                        },
                      },
                      {
                        key: "onHandleCurrentPosition",
                        value: function (e) {
                          if (null === e)
                            return this.setState({
                              currentCity: { cityName: "定位失败" },
                            });
                          this.setState({ currentCity: e });
                        },
                      },
                      {
                        key: "onCityDataLoad",
                        value: function (e) {
                          if (e) {
                            var t = e.inlandCities || {},
                              i = e.OverseasCities || {},
                              a = t.cityMainList || {},
                              n = t.historyCities || [],
                              s = t.hotCities || [],
                              c = Object.keys(a),
                              o = i.cityMainList || {},
                              l = i.hotCities || [],
                              r = Object.keys(o);
                            this.setState({
                              loadDataFinish: !0,
                              cityTags: c,
                              cityList: a,
                              historyCities: n,
                              hotCities: s,
                              overseasCityList: o,
                              overseasCityTags: r,
                              overseasHotCities: l,
                            });
                          }
                        },
                      },
                      {
                        key: "handleCityTagClick",
                        value: function (e) {
                          this.ubtDevTrace("o_city_tag_c", { tag: e }),
                            this.setState({ toView: e });
                        },
                      },
                      {
                        key: "handleCityClick",
                        value: function (e, t, i) {
                          var a,
                            n = this.state,
                            c = n.currentCity,
                            o = n.historyCities,
                            l = n.hotCities,
                            r = n.cityList,
                            h = n.searchResult,
                            d = n.tabIndex,
                            u = n.overseasCityList,
                            y = n.overseasHotCities;
                          if ("定位中" !== e && "定位中..." !== e) {
                            if ("定位失败" === e) return this.beginLocate();
                            var m = null;
                            switch (t) {
                              case "currentCity":
                                m = c;
                                break;
                              case "currentAddress":
                                m = (0, s.Z)(
                                  (0, s.Z)({}, c),
                                  {},
                                  { isGeo: !0 }
                                );
                                break;
                              case "historyCities":
                                m = o[i];
                                break;
                              case "hotCities":
                                m =
                                  0 === d
                                    ? null == l
                                      ? void 0
                                      : l[i]
                                    : null == y
                                    ? void 0
                                    : y[i];
                                break;
                              case "search":
                                m = h[i];
                                break;
                              default:
                                (m =
                                  0 === d
                                    ? r[t][i]
                                    : null == u ||
                                      null === (a = u[t]) ||
                                      void 0 === a
                                    ? void 0
                                    : a[i]),
                                  this.ubtDevTrace("o_city_native_c", {
                                    city: m,
                                  });
                            }
                            m && (this.invokeCallback(m), this.navigateBack());
                          }
                        },
                      },
                      {
                        key: "searchInput",
                        value: function (e) {
                          var t = this,
                            i = e.detail.value,
                            a = this.state,
                            n = a.bu,
                            s = a.notHandle;
                          if ((this.setState({ inputKeyword: i }), !s))
                            return i
                              ? void ("hotel" === n
                                  ? setTimeout(function () {
                                      t.getHotelDestinationList(i);
                                    }, 500)
                                  : (this.setState({ notHandle: !0 }),
                                    setTimeout(function () {
                                      t.setState({ notHandle: !1 }),
                                        t.handleSearch &&
                                          t.handleSearch(
                                            i,
                                            "",
                                            t.onHandleSearchResult.bind(t)
                                          );
                                    }, 400)))
                              : this.onHandleSearchResult([]);
                        },
                      },
                      {
                        key: "onHandleSearchResult",
                        value: function (e) {
                          this.setState({ searchResult: e });
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
                          this.setState({ inputKeyword: "" }),
                            this.onHandleSearchResult([]);
                        },
                      },
                      {
                        key: "switchShowMoreCity",
                        value: function (e, t) {
                          var i = this.state.isShowMoreCity,
                            a = void 0 === i ? {} : i;
                          (a[e] = "show" === t),
                            this.setState({ isShowMoreCity: a });
                        },
                      },
                      {
                        key: "getHotelDestinationList",
                        value: function (e) {
                          var t = this,
                            i = {
                              data: {
                                type: 1,
                                keyword: e,
                                clientVersion: f.Z.clientVersion,
                                dataFor: 0,
                              },
                            },
                            a = [];
                          this.dataFor && (i.data.dataFor = this.dataFor),
                            this.type && (i.data.type = this.type),
                            (0, v.tP)(i)
                              .then(function (e) {
                                e &&
                                  e.data &&
                                  e.data.forEach(function (e) {
                                    (e.parts = t.getSuggestingItemParts(
                                      e.region.displayText
                                    )),
                                      a.push(e);
                                  }),
                                  t.onHandleSearchResult(a);
                              })
                              .catch(function () {
                                t.onHandleSearchResult([]);
                              });
                        },
                      },
                      {
                        key: "getSuggestingItemParts",
                        value: function (e) {
                          var t = this.state.inputKeyword,
                            i = [];
                          if (e) {
                            var a = t || "",
                              n = new RegExp(this.escapeRegExp(a), "g"),
                              s = "|~|";
                            (e.replace(n, s + a + s).split(s) || []).forEach(
                              function (e) {
                                e && i.push(e);
                              }
                            );
                          }
                          return i;
                        },
                      },
                      {
                        key: "escapeRegExp",
                        value: function (e) {
                          return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                        },
                      },
                      {
                        key: "handleHotelSearch",
                        value: function (e) {
                          var t = this.state.searchResult[e];
                          if (t && !k.Z.isEmptyObject(t)) {
                            var i = {
                                cityId: t.region.cityId,
                                cityName: t.region.cityName,
                                districtId: t.region.districtId,
                              },
                              a = {};
                            if (64 === t.keywordType) {
                              var n = {
                                hotelId: t.hotelInfo.hotelId,
                                hotelName: t.keyWordAttribute.keyword,
                                hotelZone: t.hotelInfo.zoneName,
                                commonScore: t.hotelInfo.customerPoint,
                                cityId: t.region.cityId || "",
                                priceInfo: {
                                  salePrice: t.hotelInfo.startPrice,
                                },
                                source: "searchResult",
                              };
                              this.gotoHotelDetail(n);
                            } else if (8 === t.keywordType);
                            else {
                              var s, c;
                              32 !== t.keywordType &&
                                ((a = t.filterData),
                                k.Z.isEmptyObject(a) || (i.keywordInfo = a)),
                                128 === t.keywordType &&
                                  (null !== (s = t.region) &&
                                  void 0 !== s &&
                                  s.districtName
                                    ? (i.cityName = t.region.cityName
                                        ? ""
                                            .concat(t.region.districtName, "(")
                                            .concat(t.region.cityName, ")")
                                        : t.region.districtName)
                                    : null !== (c = t.region) &&
                                      void 0 !== c &&
                                      c.cityName &&
                                      (i.cityName = t.region.cityName)),
                                this.invokeCallback(i),
                                this.navigateBack();
                            }
                          }
                        },
                      },
                      {
                        key: "gotoHotelDetail",
                        value: function (e) {
                          var t = this.state.hotelQueryModel,
                            i = {
                              query: (0, s.Z)(
                                (0, s.Z)({}, t),
                                {},
                                { source: "wechat_Dsearchhotel" }
                              ),
                              hotel: e,
                              geoList: [],
                              posrem: "",
                              positionRemarkType: 0,
                            };
                          this.navigateTo({
                            url: "/pages/hotel/detail/detail",
                            data: i,
                          });
                        },
                      },
                      { key: "noop", value: function () {} },
                      {
                        key: "changeTab",
                        value: function (e) {
                          this.setState({ tabIndex: e });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.bu,
                            a = t.isSearchView,
                            n = t.loadDataFinish,
                            s = t.cityTags,
                            c = t.cityList,
                            o = t.historyCities,
                            l = t.hotCities,
                            r = t.overseasCityList,
                            h = t.overseasCityTags,
                            d = t.overseasHotCities,
                            u = t.isShowMoreCity,
                            y = t.inputKeyword,
                            m = t.searchResult,
                            C = t.currentCity,
                            f = t.toView,
                            k = t.tabIndex,
                            v = 0 === k ? c : r,
                            g = 0 === k ? l : d,
                            w = 0 === k ? s : h;
                          return (0, N.BX)(p.Block, {
                            children: [
                              a &&
                                (0, N.BX)(p.View, {
                                  className:
                                    "search-module search-module_focus",
                                  onTouchMove: this.noop,
                                  children: [
                                    (0, N.tZ)(p.View, {
                                      className: "search-input-box",
                                      children: (0, N.BX)(p.View, {
                                        className: "search-input-bd",
                                        children: [
                                          (0, N.tZ)(p.Text, {
                                            className: "ifont-search iconfont",
                                          }),
                                          (0, N.tZ)(p.Input, {
                                            className:
                                              "search-module_input search-module_input-f",
                                            placeholderClass:
                                              "search-module_input_focus",
                                            placeholder: "中文/拼音/首字母",
                                            value: y,
                                            type: "text",
                                            onInput: this.searchInput,
                                            focus: "true",
                                          }),
                                          (0, N.tZ)(p.Text, {
                                            className: "ifont-del iconfont",
                                            onClick: this.searchClear,
                                          }),
                                        ],
                                      }),
                                    }),
                                    "hotel" !== i &&
                                      (0, N.tZ)(p.View, {
                                        className: "search-list",
                                        children:
                                          m &&
                                          m.map(function (t, i) {
                                            return (0,
                                            N.tZ)(p.View, { className: "search-list_item", children: (0, N.tZ)(p.Text, { className: "city-module_name", onClick: e.handleCityClick.bind(e, t.cityName, "search", i), children: t.cityName }) }, i);
                                          }),
                                      }),
                                    "hotel" === i &&
                                      (0, N.tZ)(p.View, {
                                        className: "search-result",
                                        children:
                                          m &&
                                          m.length > 0 &&
                                          (0, N.tZ)(p.Block, {
                                            children:
                                              m &&
                                              m.map(function (t, i) {
                                                return (0, N.BX)(
                                                  p.View,
                                                  {
                                                    className: "item",
                                                    children: [
                                                      (0, N.tZ)(p.View, {
                                                        className: "word",
                                                        onClick:
                                                          e.handleHotelSearch.bind(
                                                            e,
                                                            i
                                                          ),
                                                        children: t.parts.map(
                                                          function (e, t) {
                                                            return (0, N.tZ)(
                                                              p.Block,
                                                              {
                                                                children:
                                                                  y === e
                                                                    ? (0, N.tZ)(
                                                                        p.Block,
                                                                        {
                                                                          children:
                                                                            (0,
                                                                            N.tZ)(
                                                                              p.Text,
                                                                              {
                                                                                className:
                                                                                  "highlight",
                                                                                children:
                                                                                  e,
                                                                              }
                                                                            ),
                                                                        }
                                                                      )
                                                                    : (0, N.tZ)(
                                                                        p.Block,
                                                                        {
                                                                          children:
                                                                            e,
                                                                        }
                                                                      ),
                                                              },
                                                              t
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                      (0, N.tZ)(p.View, {
                                                        className: "catg",
                                                        children: t.keyName,
                                                      }),
                                                    ],
                                                  },
                                                  i
                                                );
                                              }),
                                          }),
                                      }),
                                  ],
                                }),
                              !a &&
                                (0, N.BX)(p.View, {
                                  children: [
                                    (0, N.BX)(p.View, {
                                      className: "search-module",
                                      onTouchMove: this.noop,
                                      children: [
                                        (0, N.tZ)(p.View, {
                                          className: "search-input-box",
                                          children: (0, N.BX)(p.View, {
                                            className: "search-input-bd",
                                            children: [
                                              (0, N.tZ)(p.Text, {
                                                className:
                                                  "ifont-search iconfont",
                                              }),
                                              (0, N.tZ)(p.Input, {
                                                className:
                                                  "search-module_input",
                                                placeholderClass:
                                                  "search-module_input_focus",
                                                placeholder: "中文/拼音/首字母",
                                                value: y,
                                                type: "text",
                                                onInput: this.searchInput,
                                                onFocus: this.searchFocus,
                                                disabled: "true",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, N.tZ)(p.View, {
                                          onClick: this.toSearch,
                                          style:
                                            "position:absolute;top:0;right:0;bottom:0;left:0; background-color:clear;z-index:100;",
                                        }),
                                      ],
                                    }),
                                    "ticket" === i &&
                                      (0, N.tZ)(p.View, {
                                        className: "search-bar-module",
                                        children: (0, N.BX)(p.View, {
                                          className: "search-tab-bar",
                                          children: [
                                            (0, N.tZ)(p.View, {
                                              className: "item-bar ".concat(
                                                0 === k ? "current" : ""
                                              ),
                                              onClick: function () {
                                                return e.changeTab(0);
                                              },
                                              children: "国内港澳台",
                                            }),
                                            (0, N.tZ)(p.View, {
                                              className: "item-bar ".concat(
                                                1 === k ? "current" : ""
                                              ),
                                              onClick: function () {
                                                return e.changeTab(1);
                                              },
                                              children: "海外",
                                            }),
                                            (0, N.tZ)(p.View, {
                                              className: "active-scrollbar",
                                              style: {
                                                width: "50%",
                                                transform: "translateX(".concat(
                                                  100 * k,
                                                  "%)"
                                                ),
                                                transition: "all .5s ease",
                                              },
                                            }),
                                          ],
                                        }),
                                      }),
                                    n &&
                                      (0, N.BX)(p.View, {
                                        className: "city-module",
                                        children: [
                                          (0, N.BX)(p.View, {
                                            className: "city-module_letter",
                                            onTouchMove: this.noop,
                                            children: [
                                              (0, N.tZ)(p.Text, {
                                                className:
                                                  "city-module_letter-item1",
                                                onClick:
                                                  this.handleCityTagClick.bind(
                                                    this,
                                                    "current"
                                                  ),
                                                children: "当前",
                                              }),
                                              (null == o ? void 0 : o.length) >
                                                0 &&
                                                (0, N.tZ)(p.Text, {
                                                  className:
                                                    "city-module_letter-item1",
                                                  onClick:
                                                    this.handleCityTagClick.bind(
                                                      this,
                                                      "history"
                                                    ),
                                                  children: "历史",
                                                }),
                                              (null == g ? void 0 : g.length) >
                                                0 &&
                                                (0, N.tZ)(p.Text, {
                                                  className:
                                                    "city-module_letter-item1",
                                                  onClick:
                                                    this.handleCityTagClick.bind(
                                                      this,
                                                      "hot"
                                                    ),
                                                  children: "热门",
                                                }),
                                              null == w
                                                ? void 0
                                                : w.map(function (t, i) {
                                                    return (0,
                                                    N.tZ)(p.View, { children: (0, N.tZ)(p.Text, { className: "city-module_letter-item1", onClick: e.handleCityTagClick.bind(e, t), children: t }) }, i);
                                                  }),
                                            ],
                                          }),
                                          (0, N.BX)(p.ScrollView, {
                                            scrollY: "true",
                                            className: "city-module_list",
                                            scrollIntoView: f,
                                            scrollWithAnimation: !0,
                                            style: "top: ".concat(
                                              "ticket" === i
                                                ? "180rpx"
                                                : "130rpx"
                                            ),
                                            children: [
                                              (0, N.BX)(p.Block, {
                                                children: [
                                                  (0, N.tZ)(p.View, {
                                                    id: "current",
                                                    className:
                                                      "city-module_type",
                                                    children: "当前",
                                                  }),
                                                  (0, N.BX)(p.View, {
                                                    className:
                                                      "city-module_items",
                                                    children: [
                                                      (0, N.BX)(p.View, {
                                                        className:
                                                          "city-module_name1",
                                                        "data-cityname":
                                                          C.cityName,
                                                        onClick:
                                                          this.handleCityClick.bind(
                                                            this,
                                                            C.cityName,
                                                            "currentCity",
                                                            0
                                                          ),
                                                        children: [
                                                          "hotel" !== i &&
                                                            (0, N.tZ)(p.Text, {
                                                              className:
                                                                "ifont-location iconfont color-primary",
                                                            }),
                                                          C.cityName,
                                                        ],
                                                      }),
                                                      C.title &&
                                                        (0, N.tZ)(p.View, {
                                                          children: C.title,
                                                        }),
                                                      "hotel" === i &&
                                                        C.cityAddress &&
                                                        (0, N.tZ)(p.View, {
                                                          className:
                                                            "city-module_name1 ".concat(
                                                              C.cityAddress
                                                                .length > 4 &&
                                                                "定位中..." !==
                                                                  C.cityAddress
                                                                ? "current_name"
                                                                : ""
                                                            ),
                                                          "data-cityname":
                                                            C.cityAddress,
                                                          "data-section":
                                                            "currentAddress",
                                                          onClick:
                                                            this.handleCityClick.bind(
                                                              this,
                                                              C.cityName,
                                                              "currentAddress"
                                                            ),
                                                          children:
                                                            C.cityAddress,
                                                        }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (null == o ? void 0 : o.length) >
                                                0 &&
                                                (0, N.BX)(p.View, {
                                                  className:
                                                    "city-module_items",
                                                  children: [
                                                    (0, N.tZ)(p.View, {
                                                      id: "history",
                                                      className:
                                                        "city-module_type",
                                                      children: "历史选择",
                                                    }),
                                                    o.map(function (t, i) {
                                                      return (0,
                                                      N.tZ)(p.Block, { children: (0, N.tZ)(p.Text, { className: "city-module_name1", onClick: e.handleCityClick.bind(e, t.cityName, "historyCities", i), children: t.cityName }) }, "cityName");
                                                    }),
                                                  ],
                                                }),
                                              (null == g ? void 0 : g.length) >
                                                0 &&
                                                (0, N.BX)(p.View, {
                                                  className:
                                                    "city-module_items",
                                                  children: [
                                                    (0, N.tZ)(p.View, {
                                                      id: "hot",
                                                      className:
                                                        "city-module_type",
                                                      children: "热门城市",
                                                    }),
                                                    g.map(function (t, i) {
                                                      return (0,
                                                      N.tZ)(p.Block, { children: (0, N.tZ)(p.Text, { className: "city-module_name1", onClick: e.handleCityClick.bind(e, t.cityName, "hotCities", i), children: t.cityName }) }, "cityName");
                                                    }),
                                                  ],
                                                }),
                                              w &&
                                                w.map(function (t, i) {
                                                  return (0,
                                                  N.BX)(p.Block, { children: [(0, N.tZ)(p.View, { id: t, className: "city-module_type letter", children: t }), u && (0, N.tZ)(Z, { cityList: v[t], tag: t, handleCityClick: e.handleCityClick, switchShowMoreCity: e.switchShowMoreCity })] }, i);
                                                }),
                                            ],
                                          }),
                                        ],
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
                })(u.default.Component))
              ) || a;
          Page(
            (0, n.createPageConfig)(
              b,
              "functionalPages/city/index",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(24859);
        }),
          e.O();
      },
    ]);
})();
