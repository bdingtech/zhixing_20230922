!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [79451],
      {
        95072: function (t, e, i) {
          var a,
            o = i(32180),
            n = i(57042),
            s = i(24460),
            c = i(21867),
            r = i(86066),
            l = i(52500),
            h = i(71515),
            u = i(92954),
            d = i.n(u),
            m = i(48792),
            f = i.n(m),
            p = i(79792),
            g = (i(49120), i(79910)),
            y = i(27113),
            v = i(45066),
            w = i(55099),
            I = i(36039),
            N = i(20689),
            C = i(81957),
            D = i(48813),
            k = I.Z.debounce,
            S = I.Z.getSpotId,
            T = {
              data: {
                isTieyou: p.default.isTieyou,
                isShowDeletIcon: !1,
                cityID: 2,
                cityName: "上海",
                searchVal: "",
                latitude: 0,
                longitude: 0,
                locationCityId: 0,
                historyList: [],
                searchResult: [],
                hotList: [],
                scrollViewHeight: 600,
              },
              onLoad: function (t) {
                console.log(t), (this.options = t);
                var e = t.cityID,
                  i = t.cityName;
                this.setData({ cityID: e, cityName: i }),
                  this.getHotList(e),
                  this.beginLocate(),
                  (this.debounceFn = k(this.autoSearch, 300)),
                  this.getWindowHeight();
              },
              onShow: function () {
                this.loadHistory();
              },
              jumpToSpot: function (t) {
                var e = t.currentTarget.dataset.item;
                console.log(e);
                var i = e.scenicspotId,
                  a = e.scenicspotName,
                  o = this.options.source,
                  n = void 0 === o ? "wechat" : o,
                  s = {
                    scenicSpotId: i,
                    scenicInfo: encodeURIComponent(
                      JSON.stringify({ iD: i, name: a })
                    ),
                    source: n,
                  };
                v.F0.navigateTo("detail", s);
              },
              getHotList: function (t) {
                var e = this;
                (0, w.vC)({ cityId: t }).then(function (i) {
                  console.log("热门搜索" + t, i),
                    1 == i.resultCode &&
                      e.setData({ hotList: (i && i.recommends) || [] });
                });
              },
              searchAndHistoryItemClick: function (t) {
                var e = t.currentTarget.dataset.item;
                if ((console.log(e), this.setHistory(e), 1 === e.type)) {
                  var i = this.options,
                    a = i.fromPage,
                    o = i.source,
                    n = void 0 === o ? "wechat" : o,
                    s = {
                      keyword: "",
                      cityName: e.name,
                      cityID: e.iD,
                      source: n,
                    };
                  N.$s.set({ cityName: e.name, cityID: e.iD }),
                    "list" == a
                      ? (this.invokeCallback(s), this.navigateBack())
                      : v.F0.navigateTo("list", s);
                } else {
                  var c = S(e);
                  (0, w.cr)({ scenicSpotId: c, scenicSpotName: e.name }).then(
                    function (t) {
                      console.log(t);
                    }
                  );
                  var r = this.options.source,
                    l = {
                      scenicSpotId: c,
                      source: void 0 === r ? "wechat" : r,
                    };
                  v.F0.navigateTo("detail", l);
                }
              },
              clearHistory: function () {
                this.setData({ historyList: [] }), N.pT.set();
              },
              setHistory: function (t) {
                [].push(t);
                var e = this.data.historyList,
                  i = this.checkEqual(t, e);
                console.log(i), N.pT.set(i);
              },
              checkEqual: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  i =
                    (e &&
                      e.filter(function (e) {
                        return t.name !== e.name;
                      })) ||
                    [];
                return [t].concat(i);
              },
              getWindowHeight: function () {
                var t = this;
                d().getSystemInfo({
                  success: function (e) {
                    var i = d().createSelectorQuery();
                    i.select(".search-top").boundingClientRect(),
                      i.exec(function (i) {
                        i &&
                          i[0] &&
                          t.setData({
                            scrollViewHeight: e.windowHeight - i[0].bottom,
                          });
                      });
                  },
                });
              },
              loadHistory: function () {
                var t = N.pT.get() || [];
                (t = t.slice(0, 8)), this.setData({ historyList: t });
              },
              beginLocate: function () {
                var t = this;
                (0, y.y9)().then(
                  function (e) {
                    console.log("resp = ", e);
                    var i = {
                      coordType: "wgs84",
                      latitude: e.latitude,
                      longitude: e.longitude,
                      type: 1,
                    };
                    (0, w.Jr)({ data: i }).then(function (e) {
                      1 === e.resultCode &&
                        e.data &&
                        e.data.cityId &&
                        t.setData({ locationCityId: e.data.cityId });
                    }),
                      t.setData({
                        latitude: e.latitude,
                        longitude: e.longitude,
                      });
                  },
                  function (t) {
                    console.log(t);
                  }
                );
              },
              clearInput: function () {
                this.data.searchVal &&
                  this.setData({
                    searchVal: "",
                    isShowDeletIcon: !1,
                    searchResult: [],
                  });
              },
              searchKeyBoard: function (t) {
                var e = t.detail.value.replace(/\s+/g, "");
                if (e) {
                  var i = this.data,
                    a = i.cityName,
                    o = i.cityID,
                    n = this.options,
                    s = n.fromPage,
                    c = n.source,
                    r = {
                      keyword: e,
                      cityName: a,
                      cityID: o,
                      source: void 0 === c ? "wechat" : c,
                    };
                  "list" == s
                    ? (this.invokeCallback(r), this.navigateBack())
                    : v.F0.navigateTo("list", r);
                }
              },
              inputFocus: function () {
                this.data.isShowDeletIcon ||
                  this.setData({ isShowDeletIcon: !0 });
              },
              inputBlur: function (t) {
                t.detail.value || this.setData({ isShowDeletIcon: !1 });
              },
              getNameSplitArray: function (t, e) {
                if (t === e) return [e];
                var i = t.split(e),
                  a = [];
                return (
                  i.map(function (t, o) {
                    a.push(t), i.length !== o + 1 && a.push(e);
                  }),
                  a.forEach(function (t, e) {
                    t || a.splice(e, 1);
                  }),
                  a
                );
              },
              autoSearch: function (t) {
                var e = this;
                this.setData({ searchVal: t.detail.value });
                var i = t.detail.value.replace(/\s+/g, "");
                if (i) {
                  var a = this.data,
                    o = a.longitude,
                    n = a.latitude,
                    s = a.locationCityId,
                    c = a.cityID;
                  (0, w.dc)({
                    longitude: o,
                    latitude: n,
                    cityID: c,
                    locationCityId: s,
                    keyword: i,
                  })
                    .then(function (t) {
                      if (
                        (console.log("搜索结果", t),
                        1 === t.resultCode &&
                          t.autoCompleteItemList &&
                          g._.isArray(t.autoCompleteItemList))
                      ) {
                        var a = t.autoCompleteItemList.filter(function (t) {
                          return !t.isOverSea;
                        });
                        console.log(a),
                          a.forEach(function (t) {
                            t.name &&
                              (t.nameList = e.getNameSplitArray(t.name, i));
                          }),
                          e.setData({ searchResult: a });
                      } else e.setState({ searchResult: [] });
                    })
                    .catch(function (t) {
                      console.log(t);
                    });
                } else this.setData({ searchResult: [] });
              },
            },
            V =
              (0, C.h)()(
                (a =
                  f()(T)(
                    (a = (function (t) {
                      (0, c.Z)(i, t);
                      var e = (0, r.Z)(i);
                      function i() {
                        return (0, n.Z)(this, i), e.apply(this, arguments);
                      }
                      return (
                        (0, s.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var t = this,
                                e = this.data,
                                i = e.searchVal,
                                a = e.isShowDeletIcon,
                                o = e.scrollViewHeight,
                                n = e.searchResult,
                                s = e.historyList,
                                c = e.hotList;
                              return (0, D.BX)(h.View, {
                                className: "page",
                                children: [
                                  (0, D.tZ)(h.View, {
                                    className: "search-top",
                                    children: (0, D.BX)(h.View, {
                                      className: "search-top-bd",
                                      children: [
                                        (0, D.tZ)(h.Text, {
                                          className: "ifont-search iconfont",
                                        }),
                                        (0, D.tZ)(h.Input, {
                                          type: "text",
                                          placeholder: "景点名称 / 游玩主题",
                                          placeholderClass: "input-pld",
                                          className: "input-txt",
                                          value: i,
                                          focus: "true",
                                          confirmType: "search",
                                          onFocus: this.inputFocus,
                                          onBlur: this.inputBlur,
                                          onInput: this.debounceFn,
                                          onConfirm: this.searchKeyBoard,
                                        }),
                                        a &&
                                          (0, D.tZ)(h.View, {
                                            style:
                                              "height:68rpx;display:flex;align-items:center;",
                                            id: "ALCR",
                                            onClick: this.clearInput,
                                            children: (0, D.tZ)(h.Text, {
                                              className: "ifont-del iconfont",
                                            }),
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, D.tZ)(h.ScrollView, {
                                    scrollY: !0,
                                    style: "height:" + o + "px;",
                                    scrollWithAnimation: !0,
                                    enableBackToTop: !0,
                                    enableFlex: !0,
                                    children:
                                      n && n.length > 0
                                        ? (0, D.tZ)(h.View, {
                                            className: "search-view",
                                            children: (0, D.tZ)(h.View, {
                                              className: "search-list",
                                              children:
                                                n &&
                                                n.map(function (e, a) {
                                                  return (0, D.BX)(
                                                    h.View,
                                                    {
                                                      className: "item",
                                                      "data-item": e,
                                                      id: "ALCS",
                                                      onClick:
                                                        t.searchAndHistoryItemClick,
                                                      children: [
                                                        (0, D.tZ)(h.Text, {
                                                          className:
                                                            (1 == e.type
                                                              ? "ifont-location"
                                                              : "ifont-tick") +
                                                            " iconfont",
                                                        }),
                                                        (0, D.tZ)(h.View, {
                                                          className: "cont",
                                                          children:
                                                            e.nameList.map(
                                                              function (t, e) {
                                                                return (0,
                                                                D.tZ)(
                                                                  h.Text,
                                                                  {
                                                                    className:
                                                                      t == i
                                                                        ? "color-primary"
                                                                        : "",
                                                                    children: t,
                                                                  },
                                                                  e
                                                                );
                                                              }
                                                            ),
                                                        }),
                                                      ],
                                                    },
                                                    a
                                                  );
                                                }),
                                            }),
                                          })
                                        : (0, D.tZ)(h.View, {
                                            className: "search-view",
                                            children: (0, D.BX)(h.View, {
                                              className: "search-recomd",
                                              children: [
                                                s &&
                                                  s.length > 0 &&
                                                  (0, D.BX)(h.View, {
                                                    className: "tit",
                                                    children: [
                                                      "历史搜索",
                                                      (0, D.tZ)(h.Text, {
                                                        id: "ALCT",
                                                        onClick:
                                                          this.clearHistory,
                                                        className:
                                                          "ifont-trash iconfont",
                                                      }),
                                                    ],
                                                  }),
                                                (0, D.tZ)(h.View, {
                                                  className: "search-recomd-bd",
                                                  children: s.map(function (
                                                    e,
                                                    i
                                                  ) {
                                                    return (0, D.tZ)(
                                                      h.View,
                                                      {
                                                        className: "item",
                                                        "data-item": e,
                                                        id: "ALCU",
                                                        onClick:
                                                          t.searchAndHistoryItemClick,
                                                        children: e.name,
                                                      },
                                                      i
                                                    );
                                                  }),
                                                }),
                                                c &&
                                                  c.length > 0 &&
                                                  (0, D.BX)(h.Block, {
                                                    children: [
                                                      (0, D.tZ)(h.View, {
                                                        className: "tit",
                                                        children: "热门搜索",
                                                      }),
                                                      (0, D.tZ)(h.View, {
                                                        className:
                                                          "search-recomd-bd",
                                                        children: c.map(
                                                          function (e, i) {
                                                            return (0, D.BX)(
                                                              h.View,
                                                              {
                                                                id: "ALCV",
                                                                onClick:
                                                                  t.jumpToSpot,
                                                                "data-item": e,
                                                                className:
                                                                  "item",
                                                                children: [
                                                                  i < 3 &&
                                                                    (0, D.tZ)(
                                                                      h.Text,
                                                                      {
                                                                        className:
                                                                          "ifont-shot iconfont color-red",
                                                                      }
                                                                    ),
                                                                  e.scenicspotName,
                                                                ],
                                                              },
                                                              "index"
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          }),
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(l.default.Component))
                  ) || a)
              ) || a;
          Page(
            (0, o.createPageConfig)(
              V,
              "pages/ticket/packageA/search/search",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "搜索关键字",
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#fff",
                navigationBarTextStyle: "black",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [14856, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(95072);
        }),
          t.O();
      },
    ]);
})();
