!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [10898],
      {
        50550: function (t, e, i) {
          var n,
            o = i(32180),
            r = i(22276),
            a = i(298),
            l = i(57042),
            c = i(24460),
            s = i(81876),
            u = i(21867),
            d = i(86066),
            h = i(45023),
            f = i(52500),
            p = i(92954),
            y = i.n(p),
            S = i(8271),
            Z = i.n(S),
            g = i(71515),
            v = i(87298),
            m = i(90582),
            C = i(19972),
            I = i(23577),
            w = i(90098),
            L = i(90017),
            N = i(57189),
            T = i(96271),
            b = i(41105),
            R = i(91629),
            F = i(96616),
            k = i(43884),
            x = i(35537),
            _ = i(50668),
            P = i(51634),
            B = i(8992),
            A = i(12190),
            V = i(2081),
            D = i(6407),
            H = i(980),
            E = i(50208),
            M = i(45090),
            U = i(69716),
            O = i(48813),
            Y = I.Z.isTieyou ? "kaPERwyFHgd" : "uBVystwQ1V6",
            q =
              "ios" === I.Z.os ? w.Z.statusBarHeight : w.Z.statusBarHeight || 0,
            j = q + ("ios" === I.Z.os ? 64 : 50),
            Q = q + 126 - j,
            K = {
              pageIndex: 1,
              isLoadingNext: !1,
              labelStatisticShowList: [],
              filterList: [{ key: "", value: "" }],
              sortParameter: { sortType: "D", sortDirection: "" },
              canNowUse: !1,
              showStaticSearchFilter: !1,
              rankList: [],
              entryList: [],
              isShowFilterPop: !1,
              optionListType: "",
              source: "",
              couponInfo: null,
              filterBarTop: 170,
              isStaticSearchBar: !1,
            },
            X =
              (0, v.h)()(
                (n = (function (t) {
                  (0, u.Z)(i, t);
                  var e = (0, d.Z)(i);
                  function i(t) {
                    var n;
                    (0, l.Z)(this, i),
                      (n = e.call(this, t)),
                      (0, h.Z)(
                        (0, s.Z)(n),
                        "componentWillUnmount",
                        function () {
                          (0, D.xg)("select_ticket_city");
                        }
                      ),
                      (0, h.Z)(
                        (0, s.Z)(n),
                        "renderBackgroundView",
                        function () {
                          return (0, O.tZ)(g.View, {
                            style: {
                              position: "absolute",
                              left: 0,
                              right: 0,
                              top: 0,
                              width: "100%",
                              zIndex: 2,
                              height: 100,
                              backgroundColor: "#fff",
                            },
                          });
                        }
                      ),
                      (0, h.Z)((0, s.Z)(n), "pageContentIsFullScreen", !0),
                      (0, h.Z)((0, s.Z)(n), "pageRootClassName", "ticket-home"),
                      (0, h.Z)(
                        (0, s.Z)(n),
                        "pageId",
                        I.Z.isCRN
                          ? I.Z.isTieyou
                            ? "10650027081"
                            : "10650027029"
                          : I.Z.isTieyou
                          ? "10650059436"
                          : "10650059418"
                      ),
                      (0, h.Z)((0, s.Z)(n), "getCityList", function () {
                        var t = U.O5.get() || {},
                          e = U.g_.get() || {},
                          i = t.cityMainList,
                          o = e.cityMainList;
                        (i && o) ||
                          (0, x.Iq)({ overseasCityFlag: 1, responseType: 1 })
                            .then(function (t) {
                              if (1 === (null == t ? void 0 : t.resultCode)) {
                                var e = null == t ? void 0 : t.domesticCity,
                                  i = null == t ? void 0 : t.overseasCity,
                                  o = e.cities,
                                  r = null == i ? void 0 : i.cities;
                                o.forEach(function (t) {
                                  n.dealCityItem(t.cities);
                                }),
                                  r.forEach(function (t) {
                                    n.dealCityItem(t.cities);
                                  });
                                var a = e.recommendcities,
                                  l = null == i ? void 0 : i.recommendcities;
                                n.dealCityItem(a),
                                  n.dealCityItem(l),
                                  U.O5.setAttr("hotCities", a),
                                  U.g_.setAttr("hotCities", l);
                                var c = o.map(function () {
                                    return "firstchar";
                                  }),
                                  s = r.map(function () {
                                    return "firstchar";
                                  });
                                U.O5.setAttr("cityTags", c),
                                  U.g_.setAttr("cityTags", s);
                                var u = {},
                                  d = {};
                                o.forEach(function (t) {
                                  u[t.firstchar] = t.cities;
                                }),
                                  r.forEach(function (t) {
                                    d[t.firstchar] = t.cities;
                                  }),
                                  U.O5.setAttr("cityMainList", u),
                                  U.g_.setAttr("cityMainList", d);
                              }
                            })
                            .catch(function (t) {
                              return console.log(t);
                            });
                      }),
                      (0, h.Z)((0, s.Z)(n), "dealCityItem", function (t) {
                        t.forEach(function (t) {
                          (t.cityName = t.name),
                            (t.cityID = t.id),
                            delete t.name,
                            delete t.id;
                        });
                      }),
                      (0, h.Z)((0, s.Z)(n), "selectCity", function () {
                        var t = n.state.currentCityInfo;
                        I.Z.isCRN &&
                          n.ubtTrace("SZAHome_City_click", {
                            PageId: n.pageId,
                          }),
                          (0, D.fm)(
                            {
                              DestinationID: t.cityID,
                              DestinationName: t.cityName,
                            },
                            function (t) {
                              n.upDateCity(t);
                            }
                          );
                      }),
                      (0, h.Z)((0, s.Z)(n), "upDateCity", function (t) {
                        y().setStorageSync("TICKET_SELECT_CITY", t);
                        var e = n.state,
                          i = e.locateCityInfo,
                          o = e.initLoading,
                          r = function () {
                            (n.sceneLabel = ""),
                              (n.sortLabel = ""),
                              (n.filterLabel = ""),
                              n.setState(
                                (0, a.Z)(
                                  (0, a.Z)({}, K),
                                  {},
                                  {
                                    currentCityInfo: t,
                                    initLoading: !I.Z.isCRN || o,
                                  }
                                ),
                                function () {
                                  n.initLoad(1);
                                }
                              );
                          },
                          l =
                            y().getStorageSync("TICKET_ASK_CHANGE_CITY") || !1;
                        (null == i ? void 0 : i.cityName) === t.cityName || l
                          ? r()
                          : (y().setStorageSync("TICKET_ASK_CHANGE_CITY", !0),
                            (0, m.v)(
                              "温馨提示",
                              "是否切换城市",
                              { text: "取消", callback: function () {} },
                              {
                                text: "确定",
                                callback: function () {
                                  r();
                                },
                              }
                            ));
                      }),
                      (0, h.Z)((0, s.Z)(n), "onSearch", function () {
                        var t = n.state,
                          e = t.currentCityInfo,
                          i = t.source,
                          o = t.initLoading;
                        I.Z.isCRN &&
                          n.ubtTrace("SZAHome_SearchBox_click", {
                            PageId: n.pageId,
                          }),
                          n.navigateTo({
                            url: "/pages/taroCRN/ticket/pages/search/index",
                            data: {
                              cityID: (null == e ? void 0 : e.cityID) || 2,
                              cityName:
                                (null == e ? void 0 : e.cityName) || "上海",
                              source: i,
                            },
                            callback: function (t) {
                              var e = t.cityID,
                                i = t.cityName,
                                r = t.keyword;
                              (n.sceneLabel = ""),
                                (n.sortLabel = ""),
                                (n.filterLabel = ""),
                                n.setState(
                                  (0, a.Z)(
                                    (0, a.Z)({}, K),
                                    {},
                                    {
                                      keyword: r,
                                      initLoading: !I.Z.isCRN || o,
                                      currentCityInfo: {
                                        cityID: e,
                                        cityName: i,
                                      },
                                    }
                                  ),
                                  function () {
                                    n.initLoad(1),
                                      I.Z.isCRN
                                        ? n.setState({})
                                        : (n.setState({ scrollIntoView: "" }),
                                          setTimeout(function () {
                                            return n.setState({
                                              scrollIntoView: "spot_item_0",
                                            });
                                          }, 1e3));
                                  }
                                );
                            },
                          });
                      }),
                      (0, h.Z)((0, s.Z)(n), "hasPopDay", function (t) {
                        try {
                          var e = y().getStorageSync(t),
                            i = (null == e ? void 0 : e.hasPop) || !1,
                            n = new Date().getTime() / 1e3,
                            o = (null == e ? void 0 : e.timeStamp) || n;
                          return !!(i && n - o <= 86400);
                        } catch (t) {
                          return !1;
                        }
                      }),
                      (0, h.Z)(
                        (0, s.Z)(n),
                        "hasExpireTimeModal",
                        function (t, e) {
                          console.log("maxShowNum", e);
                          try {
                            var i = y().getStorageSync(t),
                              n = (null == i ? void 0 : i.cachedKey) || "",
                              o = (null == i ? void 0 : i.expireTime) || "",
                              r = (null == i ? void 0 : i.showNum) || 0,
                              a = (Z()(), null == i ? void 0 : i.timeStamp);
                            return !!n && !!o && (Z()(a).add(o, "day"), r >= e);
                          } catch (t) {
                            return !1;
                          }
                        }
                      ),
                      (0, h.Z)((0, s.Z)(n), "onQuickFilterBar", function (t) {
                        n.setState({ scrollIntoView: "" }),
                          n.onFilterBar(t),
                          !I.Z.isCRN &&
                            y().nextTick(function () {
                              n.setState({ scrollIntoView: "spot_item_0" });
                            });
                      }),
                      (0, h.Z)((0, s.Z)(n), "onFilterItem", function (t, e) {
                        switch ((n.onCloseFilterPop(), e)) {
                          case "all":
                            n.filterAll(t);
                            break;
                          case "sort":
                            n.filterSort(t);
                            break;
                          case "filter":
                            n.otherFilter(t);
                        }
                      }),
                      (0, h.Z)((0, s.Z)(n), "filterAll", function (t) {
                        (n.sceneLabel = t.text),
                          n.setState(
                            {
                              filterList: [
                                { key: t.value ? "1007" : "", value: t.value },
                              ],
                              scrollIntoView: "spot_item_0",
                            },
                            function () {
                              n.filterGetSearchScenicSpotList();
                            }
                          );
                      }),
                      (0, h.Z)((0, s.Z)(n), "filterSort", function (t) {
                        var e = t.sortType,
                          i = t.sortDirection,
                          o = t.text;
                        (n.sortLabel = o),
                          n.setState(
                            {
                              sortParameter: {
                                sortType: e || "D",
                                sortDirection: i || "",
                              },
                              scrollIntoView: "spot_item_0",
                            },
                            function () {
                              n.filterGetSearchScenicSpotList();
                            }
                          );
                      }),
                      (0, h.Z)((0, s.Z)(n), "otherFilter", function (t) {
                        var e = n.state.canNowUse;
                        (n.filterLabel = e ? "" : t.text),
                          "canNowUse" === t.filterType &&
                            n.setState(
                              { canNowUse: !e, scrollIntoView: "spot_item_0" },
                              function () {
                                n.filterGetSearchScenicSpotList();
                              }
                            );
                      }),
                      (0, h.Z)(
                        (0, s.Z)(n),
                        "filterGetSearchScenicSpotList",
                        function () {
                          (0, C.Q)("加载中..."),
                            n
                              .getSearchScenicSpotList(1)
                              .then(function (t) {
                                (0, C.Z)(), n.handleScenicSpotRes(t, 1);
                              })
                              .catch(function (t) {
                                return console.log(t);
                              });
                        }
                      ),
                      (0, h.Z)((0, s.Z)(n), "handleScrollMoment", function (t) {
                        (0, D.xC)(n.translateAnimate, 1 == t ? 40 : 0);
                      }),
                      (0, h.Z)((0, s.Z)(n), "onScroll", function (t) {
                        var e,
                          i = n.state,
                          o = i.showStaticSearchFilter,
                          r = i.isStaticSearchBar,
                          a = i.filterBarTop,
                          l = i.searchBarTop,
                          c = I.Z.isCRN
                            ? t.nativeEvent.contentOffset.y
                            : null == t ||
                              null === (e = t.detail) ||
                              void 0 === e
                            ? void 0
                            : e.scrollTop;
                        I.Z.isCRN ||
                          (c > l
                            ? !r && n.setState({ isStaticSearchBar: !0 })
                            : r && n.setState({ isStaticSearchBar: !1 }),
                          c > a + 100
                            ? !o && n.setState({ showStaticSearchFilter: !0 })
                            : o && n.setState({ showStaticSearchFilter: !1 }));
                      }),
                      (0, h.Z)(
                        (0, s.Z)(n),
                        "onLayout",
                        I.Z.isCRN
                          ? function (t) {
                              var e = t.nativeEvent.layout.y;
                              n.filterAchorHeight = e + 22;
                            }
                          : function () {}
                      ),
                      (0, h.Z)((0, s.Z)(n), "renderBannerItem", function (t) {
                        var e = t.item,
                          i = t.index;
                        return (0, O.tZ)(
                          g.View,
                          {
                            style: { width: M.Ro.screenWidth - 16 },
                            id: "AMCI",
                            onClick: function () {
                              (0, H.Ud)({
                                url: null == e ? void 0 : e.jumpUrl,
                              }),
                                n.ubtTrace(null == e ? void 0 : e.ubtClick, {
                                  PageId: n.pageId,
                                  Type: null == e ? void 0 : e.ubtType,
                                });
                            },
                            children: (0, O.tZ)(g.Image, {
                              src: e.imageUrl,
                              style: {
                                width: M.Ro.screenWidth - 16,
                                height: 87,
                                borderRadius: 12,
                              },
                            }),
                          },
                          i
                        );
                      }),
                      (0, h.Z)((0, s.Z)(n), "onRenderHeader", function () {
                        return (0,
                        O.tZ)(O.HY, { children: I.Z.isCRN && (0, O.tZ)(b.Z, { bannerListConfig: n.state.bannerListConfig, ubtTrace: n.ubtTrace, pageId: n.pageId }) });
                      }),
                      (0, h.Z)((0, s.Z)(n), "onFilterBar", function (t) {
                        var e = n.state,
                          i = e.isShowFilterPop;
                        t === e.optionListType
                          ? n.setState({ isShowFilterPop: !i })
                          : n.setState({
                              isShowFilterPop: !0,
                              optionListType: t,
                            });
                      }),
                      (0, h.Z)((0, s.Z)(n), "onCloseFilterPop", function () {
                        n.setState({ isShowFilterPop: !1, optionListType: "" });
                      }),
                      (0, h.Z)(
                        (0, s.Z)(n),
                        "handleFilterBarProps",
                        function () {
                          var t = n.state,
                            e = t.filterList,
                            i = t.optionListType,
                            o = t.isShowFilterPop;
                          return {
                            onFilterBar: function (t) {
                              return n.onFilterBar(t);
                            },
                            sortParameter: t.sortParameter,
                            filterList: e,
                            optionListType: i,
                            sortLabel: n.sortLabel,
                            sceneLabel: n.sceneLabel,
                            filterLabel: n.filterLabel,
                            isShowFilterPop: o,
                          };
                        }
                      ),
                      (0, h.Z)(
                        (0, s.Z)(n),
                        "renderCrnHeaderRight",
                        function () {
                          var t,
                            e = n.state.couponInfo;
                          return null != e &&
                            null !== (t = e.couponList) &&
                            void 0 !== t &&
                            t.length
                            ? (0, O.tZ)(g.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_hbdx@3x.gif",
                                className: " _he _yf",
                                id: "AMCL",
                                onClick: function () {
                                  n.ubtTrace("SZAHome_Coupon_Get_click", {
                                    PageId: n.pageId,
                                  }),
                                    n.setState({
                                      couponInfo: (0, a.Z)(
                                        (0, a.Z)({}, e),
                                        {},
                                        { isShowPop: !0 }
                                      ),
                                    });
                                },
                              })
                            : (0, O.tZ)(g.View, {});
                        }
                      ),
                      (0, h.Z)((0, s.Z)(n), "jumpToDetail", function (t) {
                        var e, i, o;
                        I.Z.isCRN
                          ? ((0, H.l4)({
                              data: {
                                scenicSpotId: null == t ? void 0 : t.iD,
                                source: n.state.source,
                                CityName:
                                  (null == t ||
                                  null === (e = t.cityInfo) ||
                                  void 0 === e
                                    ? void 0
                                    : e.cityName) || "",
                                ProductId: (null == t ? void 0 : t.iD) || "",
                                TypeSndAttr:
                                  (null == t ? void 0 : t.name) || "",
                              },
                            }),
                            n.ubtTrace("TZASearchResult_click", {
                              PageId: n.pageId,
                              OutFlowLine: "SPOT",
                              QueryCode: n.state.queryCode,
                              TabName: "景点",
                              Name:
                                n.state.keyword ||
                                (null === (i = n.state.currentCityInfo) ||
                                void 0 === i
                                  ? void 0
                                  : i.cityName),
                            }))
                          : (0, H.l4)({
                              data: {
                                scenicSpotId: null == t ? void 0 : t.iD,
                                source: n.state.source,
                                CityName:
                                  (null === (o = n.state.currentCityInfo) ||
                                  void 0 === o
                                    ? void 0
                                    : o.cityName) || "",
                                ProductId: (null == t ? void 0 : t.iD) || "",
                                TypeSndAttr:
                                  (null == t ? void 0 : t.name) || "",
                              },
                            });
                      }),
                      (0, h.Z)((0, s.Z)(n), "receiveCouponCb", function () {
                        n.initLoad(1);
                      }),
                      (0, h.Z)(
                        (0, s.Z)(n),
                        "renderStaticSearchFilter",
                        function (t) {
                          var e = n.state,
                            i = e.labelStatisticShowList,
                            o = e.canNowUse,
                            r = e.showStaticSearchFilter,
                            a = e.currentCityInfo,
                            l = e.keyword,
                            c = n.handleFilterBarProps();
                          return (0, O.tZ)(A.Z, {
                            labelStatisticShowList: i,
                            onFilterItem: n.onFilterItem,
                            canNowUse: o,
                            filterBarProps: c,
                            onCloseFilterPop: n.onCloseFilterPop,
                            onBack: function () {
                              n.navigateBack();
                            },
                            searchBarProps: {
                              cityName: null == a ? void 0 : a.cityName,
                              keyword: l,
                              selectCity: function () {
                                return n.selectCity();
                              },
                              onSearch: function () {
                                return n.onSearch();
                              },
                            },
                            relList: t,
                            pageId: n.pageId,
                            scroollY: n.state.scrollValue,
                            filterAchorHeight: n.filterAchorHeight,
                            ubtTrace: n.ubtTrace,
                            showStaticSearchFilter: r,
                          });
                        }
                      ),
                      (0, h.Z)((0, s.Z)(n), "getOptionList", function (t) {
                        var e = t.optionListType,
                          i = [];
                        return (
                          "all" === e
                            ? (i = n.state.labelStatisticShowList)
                            : "sort" === e
                            ? (i = E.a)
                            : "filter" === e && (i = E.d),
                          i
                        );
                      }),
                      (0, h.Z)((0, s.Z)(n), "renderItem", function (t) {
                        var e = t.item,
                          i = t.index,
                          o = t.filterBarProps,
                          r = t.scenicSpotList;
                        return null != e && e.isSpecialPriceRecommend && 0 !== i
                          ? (0, O.tZ)(P.Z, {
                              entryList: n.state.entryList,
                              ubtTrace: n.ubtTrace,
                              pageId: n.pageId,
                            })
                          : (0, O.BX)(O.HY, {
                              children: [
                                I.Z.isCRN &&
                                  (null == e ? void 0 : e.titleAndFilterArr) &&
                                  (0, O.tZ)(O.HY, {
                                    children:
                                      (null == e ? void 0 : e.isFilter) &&
                                      (0, O.tZ)(g.View, {
                                        style: {
                                          paddingLeft: 8,
                                          paddingRight: 8,
                                          marginTop: 14,
                                        },
                                        children: (0, O.tZ)(g.View, {
                                          style: {
                                            paddingLeft: 12,
                                            paddingRight: 12,
                                            paddingBottom: 15,
                                            backgroundColor: "#ffffff",
                                            borderTopLeftRadius: 12,
                                            borderTopRightRadius: 12,
                                          },
                                        }),
                                      }),
                                  }),
                                !(null != e && e.titleAndFilterArr) &&
                                  (0, O.tZ)(B.Z, {
                                    isFirst: I.Z.isCRN ? 1 === i : 0 === i,
                                    isLast: i === r.length - 1,
                                    data: e,
                                    onFilterBar: n.onQuickFilterBar,
                                    filterBarProps: o,
                                    onItem: n.jumpToDetail,
                                    index: i,
                                  }),
                                i === r.length - 1 &&
                                  (0, O.tZ)(g.View, { className: " _yb _Z" }),
                              ],
                            });
                      }),
                      (0, h.Z)((0, s.Z)(n), "renderContentView", function () {
                        var t,
                          e = I.Z.isCRN
                            ? n.state.scrollValue.interpolate({
                                inputRange: [0, Q],
                                outputRange: ["#fff", "#000"],
                                extrapolate: "clamp",
                              })
                            : "#fff";
                        return I.Z.isCRN
                          ? (0, O.BX)(g.View, {
                              style: {
                                flex: 1,
                                margin: 0,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop:
                                  "ios" === I.Z.os
                                    ? w.Z.isPhoneX
                                      ? 44
                                      : 40
                                    : 0,
                                width: M.Ro.windowWidth,
                              },
                              children: [
                                (0, O.tZ)(g.View, {
                                  style: {
                                    flexDirection: "row",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    width: 40,
                                    height: 40,
                                  },
                                  children: (0, O.tZ)(g.View, {
                                    onClick: function () {
                                      return n.navigateBack();
                                    },
                                    children: (0, O.tZ)(T.Z.View, {
                                      style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                      },
                                      children: (0, O.tZ)(T.Z.Text, {
                                        style: {
                                          fontFamily: "crn_font_rn_mini",
                                          color: e,
                                          fontSize: 24,
                                        },
                                        children: "󰲚",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, O.BX)(g.View, {
                                  style: {
                                    flex: 1,
                                    height: 44,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingRight: 14,
                                  },
                                  children: [
                                    (0, O.tZ)(g.View, {
                                      style: { width: 90 },
                                      children: (0, O.tZ)(N.Z, {
                                        scrollValue: n.state.scrollValue,
                                      }),
                                    }),
                                    (0, O.tZ)(F.Z, {
                                      selectCity: n.selectCity,
                                      onSearch: n.onSearch,
                                      keyword: n.state.keyword,
                                      cityName:
                                        null ===
                                          (t = n.state.currentCityInfo) ||
                                        void 0 === t
                                          ? void 0
                                          : t.cityName,
                                      scrollValue: n.state.scrollValue,
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : null;
                      });
                    var o =
                      (I.Z.isCRN,
                      [{ isFilter: !0, isTitle: !1, titleAndFilterArr: !0 }]);
                    return (
                      (n.state = (0, a.Z)(
                        (0, a.Z)({}, K),
                        {},
                        {
                          currentCityInfo: { cityName: "上海", cityID: 2 },
                          locateCityInfo: { cityName: "上海", cityID: 2 },
                          keyword: "",
                          scrollValue: I.Z.isCRN ? new T.Z.Value(0) : 0,
                          initLoading: !0,
                          scenicSpotList: [].concat(o),
                          searchBarTop: 77,
                          isSearchResultSource: !1,
                          queryCode: "",
                          bannerListConfig: [],
                        }
                      )),
                      (n.sceneLabel = ""),
                      (n.sortLabel = ""),
                      (n.filterLabel = ""),
                      (n.filterAchorHeight = 361),
                      (n.translateAnimate = I.Z.isCRN ? new T.Z.Value(0) : 0),
                      n
                    );
                  }
                  return (
                    (0, c.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t,
                            e = this;
                          I.Z.isCRN ||
                            this.setPageTitle(
                              I.Z.isTieyou ? "铁友门票" : "智行门票"
                            );
                          var i = (0, p.getCurrentInstance)(),
                            n =
                              (null == i ||
                              null === (t = i.router) ||
                              void 0 === t
                                ? void 0
                                : t.params) || {},
                            o = n.cityId,
                            r = n.cityID,
                            l = n.cityName,
                            c = n.source,
                            s =
                              void 0 === c ? (I.Z.isCRN ? "app" : "wechat") : c,
                            u = n.keyword,
                            d = void 0 === u ? "" : u,
                            h = n.queryCode,
                            f = void 0 === h ? "" : h;
                          this.setState(
                            {
                              isSearchResultSource:
                                "string" == typeof s && s.includes("search"),
                              queryCode: f,
                            },
                            function () {
                              var t;
                              e.ubtTrace(
                                I.Z.isCRN
                                  ? I.Z.isTieyou
                                    ? "STAHome1_exposure"
                                    : "SZAHome_exposure"
                                  : I.Z.isTieyou
                                  ? "STWHome1_exposure"
                                  : "SZWHome1_exposure",
                                {
                                  PageId: e.pageId,
                                  Source: s,
                                  CityName:
                                    (null === (t = e.state.currentCityInfo) ||
                                    void 0 === t
                                      ? void 0
                                      : t.cityName) || "",
                                }
                              );
                              var i = y().getStorageSync("TICKET_SELECT_CITY"),
                                n = { source: s, keyword: d };
                              (o || r) && l
                                ? (0, D.Y8)(e, !1, function () {
                                    e.setState(
                                      (0, a.Z)(
                                        (0, a.Z)({}, n),
                                        {},
                                        {
                                          currentCityInfo: {
                                            cityID: r || o,
                                            cityName: l,
                                          },
                                        }
                                      ),
                                      function () {
                                        return e.initLoad(1);
                                      }
                                    );
                                  })
                                : i
                                ? (0, D.Y8)(e, !1, function () {
                                    e.setState(
                                      (0, a.Z)(
                                        (0, a.Z)({}, n),
                                        {},
                                        { currentCityInfo: i }
                                      ),
                                      function () {
                                        return e.initLoad(1);
                                      }
                                    );
                                  })
                                : (e.setState((0, a.Z)({}, n)),
                                  (0, D.Y8)(e, !0, function () {
                                    e.initLoad(1);
                                  })),
                                e.getCityList(),
                                (0, D.Xl)(e);
                            }
                          );
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "initLoad",
                        value: function (t) {
                          var e = this;
                          (0, C.Q)("加载中..."),
                            this.getSearchScenicSpotList(t)
                              .then(function (t) {
                                e.handleScenicSpotRes(t, 1);
                              })
                              .catch(function () {
                                (0, C.Z)();
                              });
                          var i = this.state.currentCityInfo,
                            n =
                              null != i && i.cityID
                                ? Number(null == i ? void 0 : i.cityID)
                                : 2,
                            o = (null == i ? void 0 : i.cityName) || "上海",
                            r = (null == i ? void 0 : i.overseaFlag) || 0;
                          Promise.all([
                            (0, x.MM)({ cityId: n, cityName: o }),
                            (0, x.p6)({
                              cityId: n,
                              cityName: o,
                              overseaCity: r,
                            }),
                          ])
                            .then(function (t) {
                              var i,
                                n,
                                o = null == t ? void 0 : t[1],
                                r = null == t ? void 0 : t[2],
                                a =
                                  (null == t ||
                                  null === (i = t[3]) ||
                                  void 0 === i
                                    ? void 0
                                    : i.bannerListConfig) || [];
                              I.Z.isCRN ||
                                (a = a.filter(function (t) {
                                  return null == t ? void 0 : t.miniShow;
                                }));
                              var l =
                                  (I.Z.isCRN &&
                                    (null == o
                                      ? void 0
                                      : o.ctripRecommendItemList)) ||
                                  [],
                                c =
                                  null == r ||
                                  null ===
                                    (n =
                                      r.promotionReceiveScenicSpotCouponList) ||
                                  void 0 === n
                                    ? void 0
                                    : n.filter(function (t) {
                                        return 1 === t.receiveCode;
                                      }),
                                s = {
                                  sceneID:
                                    (null == r ? void 0 : r.sceneID) || "",
                                  couponList: c || [],
                                  isShowPop: !1,
                                };
                              e.setState({
                                entryList: l,
                                couponInfo: s,
                                bannerListConfig: a,
                              }),
                                !I.Z.isCRN && e.getFilterBarTop(),
                                a.length &&
                                  a.forEach(function (t) {
                                    e.ubtTrace(null == t ? void 0 : t.ubtShow, {
                                      PageId: e.pageId,
                                      Type: null == t ? void 0 : t.ubtType,
                                    });
                                  });
                            })
                            .catch(function (t) {
                              console.log("e", t),
                                (0, C.Z)(),
                                e.setState({ entryList: [], couponInfo: null });
                            });
                        },
                      },
                      {
                        key: "getFilterBarTop",
                        value: function () {
                          var t = this;
                          setTimeout(function () {
                            var e = t,
                              i = y().createSelectorQuery(),
                              n = y().createSelectorQuery(),
                              o = (w.Z.statusBarHeight || 44) + 44;
                            i
                              .select("#filter-bar-location")
                              .boundingClientRect(),
                              n
                                .select("#ticket-index-search-bar")
                                .boundingClientRect(),
                              i.exec(function (t) {
                                var i;
                                e.setState({
                                  filterBarTop:
                                    ((null == t ||
                                    null === (i = t[0]) ||
                                    void 0 === i
                                      ? void 0
                                      : i.top) || 170) - o,
                                });
                              }),
                              n.exec(function (t) {
                                var i;
                                e.setState({
                                  searchBarTop:
                                    ((null == t ||
                                    null === (i = t[0]) ||
                                    void 0 === i
                                      ? void 0
                                      : i.top) || 170) - o,
                                });
                              });
                          }, 500);
                        },
                      },
                      {
                        key: "requestNextPage",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.pageIndex,
                            n = e.canRequestNextPage,
                            o = e.isLoadingNext;
                          n &&
                            !o &&
                            (this.setState({ isLoadingNext: !0 }),
                            (0, C.Q)("加载中..."),
                            this.getSearchScenicSpotList(i + 1)
                              .then(function (e) {
                                (0, C.Z)(), t.handleScenicSpotRes(e, i + 1);
                              })
                              .catch(function (t) {
                                return console.log(t);
                              }));
                        },
                      },
                      {
                        key: "handleScenicSpotRes",
                        value: function (t, e) {
                          var i = this.state.scenicSpotList;
                          if (1 === (null == t ? void 0 : t.resultCode)) {
                            var n,
                              o = (null == t ? void 0 : t.scenicSpotList) || [],
                              a = JSON.parse(
                                JSON.stringify(
                                  (null == t ? void 0 : t.scenicSpotList) || []
                                )
                              );
                            this.ubtTrace(
                              "TZASearchResult_productline_exposure",
                              {
                                TabName: "景点",
                                Name:
                                  this.state.keyword ||
                                  (null === (n = this.state.currentCityInfo) ||
                                  void 0 === n
                                    ? void 0
                                    : n.cityName),
                                SearchType: null != a && a.length ? "T" : "F",
                              }
                            ),
                              o.length < 20 &&
                                !I.Z.isCRN &&
                                (o = o.concat(
                                  new Array(20 - o.length).fill(null)
                                ));
                            var l = [];
                            I.Z.isCRN;
                            var c = (l = (l =
                              1 === e
                                ? [].concat(
                                    (0, r.Z)(i.slice(0, 1)),
                                    (0, r.Z)(o)
                                  )
                                : i.concat(o)).filter(function (t) {
                              return !(null != t && t.isSpecialPriceRecommend);
                            })).slice(0, 4);
                            c.push({ isSpecialPriceRecommend: !0 });
                            var s = l.slice(4);
                            (l = [].concat((0, r.Z)(c), (0, r.Z)(s))),
                              this.setState({
                                scenicSpotList: l,
                                pageIndex: e,
                                canRequestNextPage: e < (t.pagingCount || 1),
                                isLoadingNext: !1,
                                labelStatisticShowList:
                                  (null == t
                                    ? void 0
                                    : t.labelStatisticShowList) || [],
                                initLoading: !1,
                              });
                          } else
                            this.setState({
                              scenicSpotList: (0, r.Z)(i),
                              pageIndex: e,
                              canRequestNextPage: !1,
                              isLoadingNext: !1,
                              initLoading: !1,
                            });
                          (0, C.Z)();
                        },
                      },
                      {
                        key: "getSearchScenicSpotList",
                        value: function (t) {
                          var e = this.state,
                            i = e.locateCityInfo,
                            n = e.currentCityInfo,
                            o = e.filterList,
                            r = e.sortParameter,
                            a = e.canNowUse,
                            l = e.keyword,
                            c = e.source,
                            s = l
                              ? []
                              : [
                                  {
                                    key: "8",
                                    value: (null == n ? void 0 : n.cityID) + "",
                                  },
                                ],
                            u = {
                              searchParameter: {
                                canNowUse: a ? 1 : 0,
                                keyword: l,
                                longitude: null == i ? void 0 : i.longitude,
                                latitude: null == i ? void 0 : i.latitude,
                              },
                              filterList: [].concat(o, s),
                              sortParameter: r,
                              pagingParameter: { pageIndex: t, pageSize: 20 },
                              responseDataType: 2,
                              imageSizeKey: "C_192_192",
                              sceneID: Y,
                              source: c,
                            };
                          return (0, x.Ki)(u);
                        },
                      },
                      {
                        key: "renderFilterView",
                        value: function () {
                          var t = this.handleFilterBarProps();
                          return I.Z.isCRN
                            ? (0, O.tZ)(g.View, {})
                            : (0, O.BX)(g.View, {
                                id: "filter-bar-location",
                                className: " _Rd _Sr",
                                children: [
                                  (0, O.tZ)(g.Image, {
                                    className: " _Am _eg _Rr",
                                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_tjjd@3x.png",
                                  }),
                                  (0, O.tZ)(
                                    L.Z,
                                    (0, a.Z)(
                                      (0, a.Z)({}, t),
                                      {},
                                      { onFilterBar: this.onQuickFilterBar }
                                    )
                                  ),
                                ],
                              });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.scenicSpotList,
                            n = e.pageIndex,
                            o = e.scrollIntoView,
                            r = e.initLoading,
                            l = e.isSearchResultSource,
                            c = e.isShowFilterPop,
                            s = this.handleFilterBarProps(),
                            u =
                              null == i
                                ? void 0
                                : i.filter(function (t) {
                                    return !(
                                      !t ||
                                      (null != t && t.titleAndFilterArr)
                                    );
                                  }),
                            d = this.getOptionList(s);
                          return (0, O.BX)(g.View, {
                            className: I.Z.isCRN ? " _j _Mr" : " _Y _Z _jj",
                            children: [
                              (0, O.tZ)(k.Z, {
                                start: { x: 0, y: 0 },
                                end: { x: 0, y: 1 },
                                colors: [
                                  "rgb(255, 255, 255)",
                                  "rgb(245, 245, 245)",
                                ],
                                style: {
                                  width: "100%",
                                  height: 44,
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                },
                              }),
                              (0, O.BX)(g.View, {
                                style: {
                                  width: "100%",
                                  position: "relative",
                                  zIndex: 999,
                                  backgroundColor: "transparent",
                                },
                                children: [
                                  (0, O.tZ)(g.View, {
                                    style: {
                                      paddingTop: 12,
                                      height: 44,
                                      backgroundColor: "transparent",
                                    },
                                    children: (0, O.tZ)(
                                      L.Z,
                                      (0, a.Z)(
                                        (0, a.Z)(
                                          {
                                            needAnimation: !1,
                                            scroollY: this.state.scrollValue,
                                          },
                                          s
                                        ),
                                        {},
                                        {
                                          onFilterBar: this.onFilterBar,
                                          onFilterItem: this.onFilterItem,
                                          canNowUse: this.state.canNowUse,
                                          onCloseFilterPop:
                                            this.onCloseFilterPop,
                                          pageId: this.pageId,
                                          ubtTrace: this.ubtTrace,
                                          backgroundColor: "transparent",
                                          filterAchorHeight:
                                            this.filterAchorHeight,
                                          showStaticSearchFilter:
                                            this.state.showStaticSearchFilter,
                                          labelStatisticShowList:
                                            this.state.labelStatisticShowList,
                                        }
                                      )
                                    ),
                                  }),
                                  c &&
                                    (0, O.BX)(g.View, {
                                      style: {
                                        backgroundColor: "rgba(0,0,0,0.6)",
                                      },
                                      id: "AMCM",
                                      onClick: function () {
                                        t.setState({ isShowFilterPop: !1 });
                                      },
                                      children: [
                                        (0, O.tZ)(
                                          R.Z,
                                          (0, a.Z)(
                                            (0, a.Z)({ optionList: d }, s),
                                            {},
                                            {
                                              onFilterItem: function (e) {
                                                t.onFilterItem(
                                                  e,
                                                  s.optionListType
                                                );
                                              },
                                              canNowUse: this.canNowUse,
                                              ubtTrace: this.ubtTrace,
                                              pageId: this.pageId,
                                            }
                                          )
                                        ),
                                        (0, O.tZ)(g.View, {
                                          id: "AMCN",
                                          onClick: function () {
                                            return t.onCloseFilterPop(!1);
                                          },
                                          style: {
                                            width: "100%",
                                            height: M.Ro.windowHeight - j - 325,
                                          },
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (null == u ? void 0 : u.length) > 0 &&
                                (0, O.tZ)(_.Z, {
                                  handleScrollMoment: this.handleScrollMoment,
                                  isSearchResultSource: l,
                                  filterAchorHeight: this.filterAchorHeight,
                                  onRenderHeader: function () {
                                    return (0, O.tZ)(O.HY, {});
                                  },
                                  pageNum: n,
                                  pageSize: 20,
                                  list: i,
                                  scrollIntoView: o,
                                  filterBarTop: this.state.filterBarTop,
                                  onRenderItem: function (e, n) {
                                    return t.renderItem({
                                      item: e,
                                      index: n,
                                      filterBarProps: s,
                                      scenicSpotList: i,
                                      relList: u,
                                    });
                                  },
                                  onRequestNextPage: function () {
                                    t.requestNextPage();
                                  },
                                  onScroll: I.Z.isCRN
                                    ? T.Z.event(
                                        [
                                          {
                                            nativeEvent: {
                                              contentOffset: {
                                                y: this.state.scrollValue,
                                              },
                                            },
                                          },
                                        ],
                                        {
                                          listener: function (e) {
                                            t.onScroll(e);
                                          },
                                        }
                                      )
                                    : this.onScroll,
                                }),
                              !r &&
                                !(null != u && u.length) &&
                                (0, O.tZ)(V.Z, { style: { height: 240 } }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(f.Component))
              ) || n;
          Page(
            (0, o.createPageConfig)(
              X,
              "pages/taroCRN/ticket/pages/index/searchResult",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "门票首页",
                navigationStyle: "custom",
                navigationBarTextStyle: "black",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [98946, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(50550);
        }),
          t.O();
      },
    ]);
})();
