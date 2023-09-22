!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [30533],
      {
        84254: function (t, e, i) {
          var a,
            n = i(32180),
            c = i(79301),
            s = i(95308),
            r = i(90129),
            o = i(298),
            l = i(57042),
            u = i(24460),
            h = i(21867),
            d = i(86066),
            y = i(52500),
            m = i(8271),
            g = i.n(m),
            f = i(92954),
            p = i.n(f),
            v = i(71515),
            C = i(81957),
            k = i(49120),
            w = i(79404),
            I = i(79910),
            T = i(39173),
            N = i(27113),
            Z = i(62607),
            B = i(80626),
            S = i(90668),
            x =
              "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/Citychoose/markeryixuanzhong@3x.webp",
            V =
              "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/Citychoose/markerweixuanzhong@3x.webp",
            b =
              "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/Citychoose/duigou@3x.webp",
            L =
              "https://images3.c-ctrip.com/ztrip/hotel/dahua/zong/img_tag_zhe@3x.png",
            M =
              "https://images3.c-ctrip.com/ztrip/hotel/dahua/zong/img_tag_hot@3x.png",
            A = i(48813),
            X =
              (0, C.h)(!1, { usePageWrapper: !0 })(
                (a = (function (t) {
                  (0, h.Z)(i, t);
                  var e = (0, d.Z)(i);
                  function i(t) {
                    var a;
                    (0, l.Z)(this, i),
                      ((a = e.call(this, t)).disableBgStyle = !0),
                      (a.pageRootClassName = "ht-city"),
                      (a.pageContentIsFullScreen = !0),
                      (a.pageTitle = "选择城市"),
                      (a.inputTimer = null),
                      (a.indexBarInfo = {
                        inland: null,
                        oversea: null,
                        touchStartY: 0,
                        touchStartTag: "",
                        touchMoveTag: "",
                        spacing: 17,
                        timer: null,
                        first: 200,
                      });
                    var n = Z.DB.get(),
                      c = ["current", "history", "hot"];
                    return (
                      null != n &&
                        n.cityMainList &&
                        Object.keys(n.cityMainList) &&
                        (c = c.concat(Object.keys(n.cityMainList))),
                      (a.state = (0, o.Z)(
                        {
                          cityMainList: null,
                          cityTag: "",
                          cityTagView: "",
                          cityTagList: c,
                          cityTagMapping: {
                            current: "当前",
                            history: "历史",
                            hot: "热门",
                          },
                          currentCity: {
                            cityName: "定位中...",
                            cityAddress: "定位中...",
                          },
                          currentCityFilters: [],
                          historyCities: [],
                          hotCities: w.Z.hotelHotCities,
                          inputKeyword: "",
                          isCurrentCity: !1,
                          isCurrentAddress: !1,
                          isLocated: !1,
                          isShowMoreCity: {},
                          loading: !0,
                          query: {},
                          searchResult: [],
                          selectCityId: null,
                        },
                        n
                      )),
                      a.getMyLocation(),
                      a.getHotelAllCity(),
                      a
                    );
                  }
                  return (
                    (0, u.Z)(i, [
                      { key: "componentDidMount", value: function () {} },
                      {
                        key: "fetchCommonFilters",
                        value: function (t) {
                          var e = this,
                            i = (0, f.getCurrentInstance)().router.params.data,
                            a = void 0 === i ? {} : i,
                            n = (0, B.X5)(a).query,
                            c = void 0 === n ? {} : n,
                            s = c.checkInDate,
                            o = void 0 === s ? B.tf : s,
                            l = c.checkOutDate,
                            u = void 0 === l ? B.cL : l,
                            h = t.cityId,
                            d = t.districtId,
                            y = {
                              data: {
                                clientVersion: w.Z.clientVersion,
                                scenarios: ["9"],
                                checkInDate: o,
                                checkOutDate: u,
                                cityId: h,
                                districtId: d,
                              },
                            };
                          (0, T.r3)(y)
                            .then(function (t) {
                              var i, a;
                              if (
                                null != t &&
                                null !== (i = t.data) &&
                                void 0 !== i &&
                                null !== (a = i.filters) &&
                                void 0 !== a &&
                                a.length
                              ) {
                                var n,
                                  c = (0, r.Z)(t.data.filters, 1)[0],
                                  s = (null == c ? void 0 : c.subItems) || [],
                                  o = (0, r.Z)(s, 1)[0];
                                null != o &&
                                  null !== (n = o.subItems) &&
                                  void 0 !== n &&
                                  n.length &&
                                  e.setState({
                                    currentCityFilters:
                                      null == o ? void 0 : o.subItems,
                                  });
                              }
                              (0, k.hideLoading)();
                            })
                            .catch(function () {
                              (0, k.hideLoading)();
                            });
                        },
                      },
                      {
                        key: "getHotelAllCity",
                        value: (function () {
                          var t = (0, s.Z)(
                            (0, c.Z)().mark(function t() {
                              var e,
                                i,
                                a,
                                n,
                                s,
                                r = this;
                              return (0, c.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          ((t.prev = 0),
                                          !this.state.cityMainList)
                                        ) {
                                          t.next = 5;
                                          break;
                                        }
                                        return (
                                          this.loadingTimeout &&
                                            (clearTimeout(this.loadingTimeout),
                                            (this.loadingTimeout = null)),
                                          (this.setTimeout = setTimeout(
                                            function () {
                                              r.setState({ loading: !1 });
                                            },
                                            1e3
                                          )),
                                          t.abrupt("return")
                                        );
                                      case 5:
                                        return (
                                          (e = Z.Yj.get() || ""),
                                          (i = {
                                            data: {
                                              type: 1,
                                              lastUpdateTime: e,
                                              clientVersion: w.Z.clientVersion,
                                            },
                                          }),
                                          (t.next = 9),
                                          (0, T.IM)(i)
                                        );
                                      case 9:
                                        null != (a = t.sent) &&
                                          a.data &&
                                          (this.handleHotelStation(a.data),
                                          Z.Yj.set(
                                            g()().format("YYYY-MM-DD HH:mm:ss")
                                          )),
                                          (n = Z.DB.get()),
                                          (s = ["current", "history", "hot"]),
                                          null != n &&
                                            n.cityMainList &&
                                            Object.keys(n.cityMainList) &&
                                            (s = s.concat(
                                              Object.keys(n.cityMainList)
                                            )),
                                          this.setState(
                                            (0, o.Z)(
                                              (0, o.Z)({}, n),
                                              {},
                                              { cityTagList: s, loading: !1 }
                                            )
                                          ),
                                          (t.next = 21);
                                        break;
                                      case 17:
                                        (t.prev = 17),
                                          (t.t0 = t.catch(0)),
                                          console.log(t.t0),
                                          this.setState({ loading: !1 });
                                      case 21:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this,
                                [[0, 17]]
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "handleHotelStation",
                        value: (function () {
                          var t = (0, s.Z)(
                            (0, c.Z)().mark(function t(e) {
                              var i, a, n;
                              return (0, c.Z)().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      (i = {}),
                                        e.forEach(function (t) {
                                          i[t.cityFirstLetter] ||
                                            (i[t.cityFirstLetter] = []),
                                            i[t.cityFirstLetter].push({
                                              cityName: t.cityName,
                                              cityId: t.cityId,
                                              cityPinYin: t.cityPinYin,
                                              cityBreviary: t.cityBreviary,
                                            });
                                        }),
                                        (a = Object.keys(i).sort()),
                                        (n = {}),
                                        a.forEach(function (t) {
                                          n[t] = i[t];
                                        }),
                                        Z.DB.setAttr("cityMainList", n),
                                        Z.DB.setAttr("hotelAllCities", e);
                                    case 7:
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
                        key: "handleMyLocation",
                        value: function (t) {
                          var e = (0, f.getCurrentInstance)().router.params
                              .data,
                            i = void 0 === e ? {} : e,
                            a = (0, B.X5)(i).query,
                            n = void 0 === a ? {} : a,
                            c = (null == n ? void 0 : n.cityId) == t.cityId;
                          console.error("query", n);
                          var s =
                              (null == n ? void 0 : n.cityAddress) == t.address,
                            r = (0, o.Z)(
                              (0, o.Z)({}, t),
                              {},
                              {
                                cityName: t.cityName,
                                cityAddress: t.address,
                                cityId: t.cityId,
                              }
                            );
                          (0, k.hideLoading)(),
                            this.fetchCommonFilters(r),
                            this.setState({
                              currentCity: r,
                              isCurrentCity: c,
                              isCurrentAddress: s,
                              selectCityId: null == n ? void 0 : n.cityId,
                              isLocated: !0,
                            });
                        },
                      },
                      {
                        key: "locatedFailed",
                        value: function (t) {
                          console.log("locatedFailed", t),
                            (0, k.hideLoading)(),
                            (0, k.showToast)("未开启定位权限"),
                            this.setState({
                              currentCity: {
                                cityName: "定位失败",
                                cityAddress: "定位失败",
                              },
                            });
                        },
                      },
                      {
                        key: "getLocationAction",
                        value: function () {
                          var t = this;
                          (0, N.y9)("wgs84")
                            .then(function (e) {
                              I.Z.isEmptyObject(e)
                                ? t.locatedFailed(e)
                                : (0, N.PA)(function (e) {
                                    null != e && e.cityId
                                      ? t.handleMyLocation(e)
                                      : t.locatedFailed(e);
                                  });
                            })
                            .catch(function (e) {
                              return t.locatedFailed(e);
                            });
                        },
                      },
                      {
                        key: "getMyLocation",
                        value: function () {
                          var t = this;
                          (0, k.showLoading)(),
                            p().getSetting({
                              success: function (e) {
                                if (
                                  e.authSetting["scope.userLocation"] ||
                                  e.authSetting.location
                                )
                                  return (0, N.PA)(function (e) {
                                    if (null == e || !e.cityId)
                                      return t.locatedFailed(e);
                                    t.handleMyLocation(e);
                                  });
                                t.getLocationAction();
                              },
                            });
                        },
                      },
                      {
                        key: "searchInput",
                        value: function (t) {
                          var e = this,
                            i = t.detail.value,
                            a = { inputKeyword: i };
                          i || (a.searchResult = []),
                            this.setState(a),
                            clearTimeout(this.inputTimer),
                            (this.inputTimer = setTimeout(function () {
                              e.getHotelDestinationList(i);
                            }, 500));
                        },
                      },
                      {
                        key: "searchClear",
                        value: function () {
                          this.setState({ inputKeyword: "", searchResult: [] });
                        },
                      },
                      {
                        key: "onHandleSearchResult",
                        value: function (t) {
                          this.setState({ searchResult: t });
                        },
                      },
                      {
                        key: "getHotelDestinationList",
                        value: function (t) {
                          var e = this,
                            i = {
                              data: {
                                type: 1,
                                keyword: t,
                                clientVersion: w.Z.clientVersion,
                                dataFor: 0,
                              },
                            },
                            a = [];
                          this.dataFor && (i.data.dataFor = this.dataFor),
                            this.type && (i.data.type = this.type),
                            (0, T.tP)(i)
                              .then(function (t) {
                                null != t &&
                                  t.data &&
                                  t.data.forEach(function (t) {
                                    (t.parts = e.getSuggestingItemParts(
                                      t.region.displayText
                                    )),
                                      (t.desc = e.getSearchItemDesc(t)),
                                      a.push(t);
                                  }),
                                  e.onHandleSearchResult(a);
                              })
                              .catch(function () {
                                e.onHandleSearchResult([]);
                              });
                        },
                      },
                      {
                        key: "handleHotelSearch",
                        value: function (t) {
                          if (!(0, S.Q6)(t)) {
                            var e = this.state.currentCity,
                              i = t.keywordType,
                              a = t.region,
                              n = t.hotelInfo,
                              c = t.keyWordAttribute,
                              s = t.filterData,
                              r = {
                                cityId:
                                  (null == a ? void 0 : a.cityId) || e.cityId,
                                cityName:
                                  (null == a ? void 0 : a.cityName) ||
                                  e.cityName,
                                districtId:
                                  (null == a ? void 0 : a.districtId) ||
                                  e.districtId ||
                                  "0",
                              };
                            if (64 === i) {
                              var o = {
                                hotelId: n.hotelId,
                                hotelName: c.keyword,
                                hotelZone: n.zoneName,
                                commonScore: n.customerPoint,
                                cityId: a.cityId || "",
                                priceInfo: { salePrice: n.startPrice },
                                source: "searchResult",
                              };
                              this.toHotelDetail(o);
                            } else
                              8 === i ||
                                (32 === i ||
                                  I.Z.isEmptyObject(s) ||
                                  (r.keywordInfo = s),
                                128 === i &&
                                  (null != a && a.districtName
                                    ? (r.cityName = a.cityName
                                        ? ""
                                            .concat(a.districtName, "(")
                                            .concat(a.cityName, ")")
                                        : a.districtName)
                                    : null != a &&
                                      a.cityName &&
                                      (r.cityName = a.cityName)),
                                this.invokeCallback(r),
                                this.navigateBack());
                          }
                        },
                      },
                      {
                        key: "getSuggestingItemParts",
                        value: function (t) {
                          var e = this.state.inputKeyword,
                            i = [];
                          if (t) {
                            var a = e || "",
                              n = new RegExp(this.escapeRegExp(a), "g"),
                              c = "|~|";
                            (t.replace(n, c + a + c).split(c) || []).forEach(
                              function (t) {
                                t && i.push(t);
                              }
                            );
                          }
                          return i;
                        },
                      },
                      {
                        key: "escapeRegExp",
                        value: function (t) {
                          return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                        },
                      },
                      {
                        key: "getSearchItemDesc",
                        value: function (t) {
                          var e,
                            i,
                            a,
                            n,
                            c = [];
                          return (
                            null !== (e = t.hotelInfo) &&
                              void 0 !== e &&
                              e.customerPoint &&
                              c.push(
                                "".concat(
                                  null === (n = t.hotelInfo) || void 0 === n
                                    ? void 0
                                    : n.customerPoint,
                                  "分"
                                )
                              ),
                            null !== (i = t.region) &&
                              void 0 !== i &&
                              i.hierarchicalCityInfo &&
                              c.push(t.region.hierarchicalCityInfo),
                            null !== (a = t.region) &&
                              void 0 !== a &&
                              a.address &&
                              c.push(t.region.address),
                            c.join("/")
                          );
                        },
                      },
                      {
                        key: "showMoreTagCity",
                        value: function (t) {
                          var e = this.state.isShowMoreCity;
                          (e[t] = 1), this.setState({ isShowMoreCity: e });
                        },
                      },
                      {
                        key: "handleCityClick",
                        value: function (t, e) {
                          var i = this.state,
                            a = i.currentCity,
                            n = i.historyCities,
                            c = i.hotCities,
                            s = i.cityMainList,
                            r = i.searchResult,
                            l = null;
                          switch (t) {
                            case "currentCity":
                              l = a;
                              break;
                            case "currentAddress":
                              l = (0, o.Z)((0, o.Z)({}, a), {}, { isGeo: !0 });
                              break;
                            case "historyCities":
                              l = n[e];
                              break;
                            case "hotCities":
                              l = c[e];
                              break;
                            case "search":
                              l = r[e];
                              break;
                            default:
                              (l = s[t][e]),
                                this.ubtDevTrace("o_city_native_c", {
                                  city: l,
                                });
                          }
                          l &&
                            "定位失败" !== l.cityName &&
                            (this.invokeCallback(l), this.navigateBack());
                        },
                      },
                      {
                        key: "toHotelDetail",
                        value: function (t) {
                          var e = this.state.query,
                            i = {
                              query: (0, o.Z)(
                                (0, o.Z)({}, e),
                                {},
                                { source: "wechat_Dsearchhotel" }
                              ),
                              hotel: t,
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
                      {
                        key: "toHotelListWithFilter",
                        value: function (t, e) {
                          var i = t.cityAddress,
                            a = void 0 === i ? "" : i,
                            n = {
                              cityId: t.cityId,
                              cityName: t.cityName,
                              cityAddress: a,
                              districtId: t.districtId,
                              keywordInfo: e,
                            };
                          this.invokeCallback(n), this.navigateBack();
                        },
                      },
                      {
                        key: "tagTouchStart",
                        value: function (t, e) {
                          var i = t.touches[0].pageY;
                          (this.indexBarInfo.touchStartY = i),
                            (this.indexBarInfo.touchStartTag = e),
                            this.tipCurrentTag(e, i);
                        },
                      },
                      {
                        key: "tagTouchMove",
                        value: function (t) {
                          var e = t.touches[0].pageY,
                            i = this.calcCurrentMoveTag(e);
                          i !== this.state.cityTag &&
                            ((this.indexBarInfo.isMoving = !0),
                            (this.indexBarInfo.touchMoveTag = i),
                            this.tipCurrentTag(i, e));
                        },
                      },
                      {
                        key: "tagTouchCancel",
                        value: function () {
                          this.setToView(this.state.cityTag);
                        },
                      },
                      {
                        key: "tagTouchEnd",
                        value: function () {
                          var t = this.indexBarInfo.touchStartTag;
                          this.indexBarInfo.isMoving &&
                            ((this.indexBarInfo.isMoving = !1),
                            (t = this.indexBarInfo.touchMoveTag)),
                            this.setToView(t);
                        },
                      },
                      {
                        key: "setToView",
                        value: function (t) {
                          var e = this.state.isShowMoreCity;
                          e[t] = 1;
                          var i = "city_list_".concat(t);
                          this.setState({ cityTagView: i, isShowMoreCity: e });
                        },
                      },
                      {
                        key: "tipCurrentTag",
                        value: function (t, e) {
                          var i = this;
                          p().vibrateShort(),
                            this.setState({ cityTag: t, tagPageY: e }),
                            clearTimeout(this.indexBarInfo.timer),
                            (this.indexBarInfo.timer = setTimeout(function () {
                              i.setState({ cityTag: "" });
                            }, 500));
                        },
                      },
                      {
                        key: "calcCurrentMoveTag",
                        value: function (t) {
                          var e = this.state.cityTagList,
                            i = "",
                            a = this.indexBarInfo.spacing,
                            n = this.indexBarInfo.touchStartTag,
                            c = this.indexBarInfo.touchStartY,
                            s = Math.floor(Math.abs((c - t) / a));
                          if (s > 0) {
                            for (
                              var r = t < c, o = e.length, l = 0, u = 0;
                              u < o;
                              u++
                            )
                              if (n === e[u]) {
                                l = u;
                                break;
                              }
                            i = r
                              ? e[Math.max(l - s, 0)]
                              : e[Math.min(l + s, o - 1)];
                          } else i = n;
                          return i;
                        },
                      },
                      {
                        key: "initSpacingCalc",
                        value: function () {
                          var t = this;
                          return new Promise(function () {
                            p()
                              .createSelectorQuery()
                              .select("#city-tag-faker")
                              .boundingClientRect(function (e) {
                                console.error("res", e),
                                  e && (t.indexBarInfo.first = e.top);
                              })
                              .exec();
                          });
                        },
                      },
                      {
                        key: "isCurrent",
                        value: function (t) {
                          var e = this.state,
                            i = e.selectCityId,
                            a = e.isCurrentAddress,
                            n = e.query,
                            c = i == t && !a && !n.cityAddress;
                          return (0, B.gP)(c, " primary");
                        },
                      },
                      {
                        key: "clearHistory",
                        value: function () {
                          Z.DB.setAttr("historyCities", []),
                            this.setState({ historyCities: [] });
                        },
                      },
                      { key: "noop", value: function () {} },
                      {
                        key: "render",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.inputKeyword,
                            a = e.searchResult,
                            n = e.currentCity,
                            c = e.isCurrentCity,
                            s = e.isCurrentAddress,
                            r = e.historyCities,
                            l = e.hotCities,
                            u = e.cityMainList,
                            h = e.cityTag,
                            d = e.cityTagList,
                            y = e.cityTagView,
                            m = e.cityTagMapping,
                            g = e.isShowMoreCity,
                            f = e.selectCityId,
                            p = e.loading,
                            C = e.currentCityFilters,
                            k = e.tagPageY,
                            w = e.isLocated,
                            I = c && s,
                            T = I ? x : V,
                            N = "detail".concat((0, B.gP)(I, " primary")),
                            Z = !m[h] && !!h,
                            S = (0, o.Z)(
                              (0, o.Z)({}, (0, B.LP)(Z, "flex")),
                              {},
                              { top: k - 100 + "px" }
                            ),
                            X = p ? 2 : Object.keys(u || {}).length;
                          return (0, A.BX)(A.HY, {
                            children: [
                              (0, A.BX)(v.View, {
                                className: "search-wrap",
                                children: [
                                  (0, A.tZ)(v.Text, {
                                    className: "ifont-search iconfont",
                                  }),
                                  (0, A.tZ)(v.Input, {
                                    className: "input",
                                    placeholderClass: "input-holder",
                                    placeholder: "城市/区域/位置/酒店名",
                                    value: i,
                                    type: "text",
                                    onInput: this.searchInput,
                                  }),
                                  !!i &&
                                    (0, A.tZ)(v.Text, {
                                      className: "ifont-del iconfont",
                                      id: "AXBN",
                                      onClick: this.searchClear,
                                    }),
                                  (0, A.tZ)(v.Text, {
                                    className: "cancel",
                                    id: "AXBO",
                                    onClick: function () {
                                      return t.navigateBack();
                                    },
                                    children: "取消",
                                  }),
                                ],
                              }),
                              (0, A.BX)(v.ScrollView, {
                                className: "result",
                                scrollIntoView: y,
                                scrollY: !0,
                                scrollWithAnimation: !0,
                                children: [
                                  null == a
                                    ? void 0
                                    : a.map(function (e, a) {
                                        var n,
                                          c,
                                          s =
                                            64 ===
                                            (null == e ? void 0 : e.keywordType)
                                              ? "hotel"
                                              : "search";
                                        return (0, A.BX)(
                                          v.View,
                                          {
                                            className: "search-item",
                                            id: "AXBP",
                                            onClick: t.handleHotelSearch.bind(
                                              t,
                                              e
                                            ),
                                            children: [
                                              (0, A.BX)(v.View, {
                                                className: "left",
                                                children: [
                                                  (0, A.tZ)(v.View, {
                                                    className: "ifont-".concat(
                                                      s,
                                                      " iconfont"
                                                    ),
                                                  }),
                                                  (0, A.BX)(v.View, {
                                                    className: "tit-wrap",
                                                    children: [
                                                      (0, A.tZ)(v.View, {
                                                        className: "tit",
                                                        children: e.parts.map(
                                                          function (t, e) {
                                                            return (0, A.tZ)(
                                                              v.Text,
                                                              {
                                                                className: (0,
                                                                B.gP)(
                                                                  i === t,
                                                                  " primary"
                                                                ),
                                                                children: t,
                                                              },
                                                              e
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                      e.desc &&
                                                        (0, A.tZ)(v.View, {
                                                          className: "desc",
                                                          children: e.desc,
                                                        }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, A.tZ)(v.View, {
                                                className: "catg",
                                                children: e.keyName,
                                              }),
                                              (null === (n = e.cityPoiInfos) ||
                                              void 0 === n
                                                ? void 0
                                                : n.length) > 0 &&
                                                (0, A.tZ)(v.View, {
                                                  className: "pois",
                                                  id: "AXBQ",
                                                  onClick: function (t) {
                                                    return t.stopPropagation();
                                                  },
                                                  children:
                                                    null ===
                                                      (c = e.cityPoiInfos) ||
                                                    void 0 === c
                                                      ? void 0
                                                      : c
                                                          .filter(function (t) {
                                                            return (
                                                              10 === t.keyType
                                                            );
                                                          })
                                                          .map(function (i, a) {
                                                            return (0,
                                                            A.tZ)(v.View, { className: "poi", id: "AXBR", onClick: t.toHotelListWithFilter.bind(t, e.region, i.filterData), children: i.displayName }, a);
                                                          }),
                                                }),
                                            ],
                                          },
                                          a
                                        );
                                      }),
                                  !(null != a && a.length) &&
                                    (0, A.BX)(v.View, {
                                      className: "city-wrap",
                                      children: [
                                        (0, A.BX)(v.View, {
                                          className: "type",
                                          id: "city_list_current",
                                          children: [
                                            (0, A.tZ)(v.View, {
                                              className: "label",
                                              children: "当前",
                                            }),
                                            (0, A.BX)(v.View, {
                                              className: "location",
                                              id: "AXBS",
                                              onClick:
                                                this.handleCityClick.bind(
                                                  this,
                                                  "currentAddress"
                                                ),
                                              children: [
                                                (0, A.BX)(v.View, {
                                                  className: "address-wrap",
                                                  children: [
                                                    (0, A.BX)(v.View, {
                                                      className: N,
                                                      children: [
                                                        (0, A.tZ)(v.Image, {
                                                          src: T,
                                                          className: "licon",
                                                          mode: "widthFix",
                                                        }),
                                                        (0, A.tZ)(v.Text, {
                                                          children:
                                                            n.cityAddress,
                                                        }),
                                                      ],
                                                    }),
                                                    w &&
                                                      (0, A.tZ)(v.View, {
                                                        className: "city",
                                                        children: n.cityName,
                                                      }),
                                                  ],
                                                }),
                                                (0, A.tZ)(v.Image, {
                                                  src: b,
                                                  className: "tick",
                                                  style: (0, B.LP)(I),
                                                }),
                                              ],
                                            }),
                                            (0, A.BX)(v.View, {
                                              className: "items",
                                              children: [
                                                w &&
                                                  (0, A.tZ)(v.View, {
                                                    className: "item".concat(
                                                      this.isCurrent(n.cityId)
                                                    ),
                                                    id: "AXBT",
                                                    onClick:
                                                      this.handleCityClick.bind(
                                                        this,
                                                        "currentCity"
                                                      ),
                                                    children: n.cityName,
                                                  }),
                                                null == C
                                                  ? void 0
                                                  : C.slice(0, 7).map(function (
                                                      e,
                                                      i
                                                    ) {
                                                      return (0, A.tZ)(
                                                        v.View,
                                                        {
                                                          className: "item",
                                                          id: "AXBU",
                                                          onClick:
                                                            t.toHotelListWithFilter.bind(
                                                              t,
                                                              n,
                                                              e
                                                            ),
                                                          children:
                                                            e.data.title,
                                                        },
                                                        i
                                                      );
                                                    }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, A.BX)(v.View, {
                                          className: "type",
                                          style: (0, B.LP)(
                                            null == r ? void 0 : r.length
                                          ),
                                          id: "city_list_history",
                                          children: [
                                            (0, A.BX)(v.View, {
                                              className: "label history",
                                              children: [
                                                (0, A.tZ)(v.Text, {
                                                  children: "历史",
                                                }),
                                                (0, A.tZ)(v.Text, {
                                                  id: "AXBV",
                                                  onClick: this.clearHistory,
                                                  children: "清空",
                                                }),
                                              ],
                                            }),
                                            (0, A.tZ)(v.View, {
                                              className: "items",
                                              children:
                                                null == r
                                                  ? void 0
                                                  : r.map(function (e, i) {
                                                      return (0,
                                                      A.tZ)(v.View, { className: "item".concat(t.isCurrent(e.cityId)), id: "AXBW", onClick: t.handleCityClick.bind(t, "historyCities", i), children: e.cityName }, i);
                                                    }),
                                            }),
                                          ],
                                        }),
                                        (0, A.BX)(v.View, {
                                          className: "type",
                                          style: (0, B.LP)(
                                            null == l ? void 0 : l.length
                                          ),
                                          id: "city_list_hot",
                                          children: [
                                            (0, A.tZ)(v.View, {
                                              className: "label",
                                              children: "热门",
                                            }),
                                            (0, A.tZ)(v.View, {
                                              className: "items",
                                              children:
                                                null == l
                                                  ? void 0
                                                  : l.map(function (e, i) {
                                                      return (0,
                                                      A.BX)(v.View, { className: "item".concat(t.isCurrent(e.cityId)), id: "AXBX", onClick: t.handleCityClick.bind(t, "hotCities", i), children: [e.cityName, [58,
                                                              59].includes(e.cityId) && (0, A.tZ)(v.Image, { className: "hot-tag", src: 59 === e.cityId ? M : L, mode: "heightFix" })] }, i);
                                                    }),
                                            }),
                                          ],
                                        }),
                                        (0, A.tZ)(v.View, {
                                          className: "city-list",
                                          children:
                                            u &&
                                            Object.keys(u)
                                              .slice(0, X)
                                              .map(function (e, i) {
                                                var a = u[e],
                                                  n = g[e] ? a.length - 1 : 10;
                                                return (0, A.BX)(
                                                  v.View,
                                                  {
                                                    className: "tag-wrap",
                                                    id: "city_list_".concat(e),
                                                    children: [
                                                      (0, A.tZ)(v.View, {
                                                        className: "item tag",
                                                        children: e,
                                                      }),
                                                      a
                                                        .slice(0, n)
                                                        .map(function (i, a) {
                                                          var n = f == i.cityId,
                                                            c =
                                                              "item city".concat(
                                                                (0, B.gP)(
                                                                  n,
                                                                  " primary"
                                                                )
                                                              );
                                                          return (0,
                                                          A.BX)(v.View, { className: c, id: "AXBY", onClick: t.handleCityClick.bind(t, e, a), children: [(0, A.tZ)(v.Text, { className: "name", children: i.cityName }), (0, A.tZ)(v.Image, { src: b, className: "tick", style: (0, B.LP)(n) })] }, a);
                                                        }),
                                                      a.length > 10 &&
                                                        !g[e] &&
                                                        (0, A.tZ)(v.View, {
                                                          className:
                                                            "item city primary",
                                                          id: "AXBZ",
                                                          onClick: function () {
                                                            return t.showMoreTagCity(
                                                              e
                                                            );
                                                          },
                                                          children: "更多",
                                                        }),
                                                    ],
                                                  },
                                                  i
                                                );
                                              }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, A.BX)(v.CustomWrapper, {
                                children: [
                                  (0, A.tZ)(v.View, {
                                    className: "city-notice-tag",
                                    style: S,
                                    children: (0, A.tZ)(v.Text, {
                                      className: "txt",
                                      children: h,
                                    }),
                                  }),
                                  (0, A.tZ)(v.View, {
                                    className: "city-tag-list",
                                    style: (0, B.LP)(!(null != a && a.length)),
                                    onTouchStart: function () {},
                                    onTouchMove: this.tagTouchMove,
                                    onTouchCancel: this.tagTouchCancel,
                                    onTouchEnd: this.tagTouchEnd,
                                    children: d.map(function (e, i) {
                                      return (0, A.tZ)(
                                        v.View,
                                        {
                                          className: "tag-wrap",
                                          id: "city_tag_".concat(e),
                                          onTouchStart: function (i) {
                                            return t.tagTouchStart(i, e);
                                          },
                                          children: (0, A.tZ)(v.View, {
                                            className: "tag",
                                            children: m[e] || e,
                                          }),
                                        },
                                        i
                                      );
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
                })(y.default.Component))
              ) || a;
          Page(
            (0, n.createPageConfig)(
              X,
              "pages/hotel/city/city",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "选择城市",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#fff",
                backgroundColorBottom: "#efefef",
                navigationStyle: "custom",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(84254);
        }),
          t.O();
      },
    ]);
})();
