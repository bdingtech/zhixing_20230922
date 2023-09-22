!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [79658],
      {
        14454: function (e, t, i) {
          var c = i(32180),
            a = i(57042),
            n = i(24460),
            o = i(81876),
            s = i(21867),
            r = i(86066),
            l = i(45023),
            u = i(52500),
            d = i(71515),
            _ = i(92954),
            h = i.n(_),
            m = i(23577),
            f = i(87298),
            p = i(35537),
            g = i(27113),
            y = i(53550),
            Z = i(88184);
          function S(e) {
            var t = "";
            return (
              e.extendInfo.forEach(function (e) {
                "scenicspotID" == e.key && (t = e.value);
              }),
              t
            );
          }
          var v,
            I = i(980),
            C = i(48813),
            N =
              (0, f.h)()(
                (v = (function (e) {
                  (0, s.Z)(i, e);
                  var t = (0, r.Z)(i);
                  function i(e) {
                    var c;
                    return (
                      (0, a.Z)(this, i),
                      (c = t.call(this, e)),
                      (0, l.Z)(
                        (0, o.Z)(c),
                        "pageId",
                        m.Z.isCRN
                          ? m.Z.isTieyou
                            ? "10650025544"
                            : "10650027033"
                          : m.Z.isTieyou
                          ? "10650093451"
                          : "10650093449"
                      ),
                      (0, l.Z)((0, o.Z)(c), "getHotList", function (e) {
                        (0, p.mq)({ cityId: e }).then(function (t) {
                          console.log("热门搜索" + e, JSON.stringify(t)),
                            1 === (null == t ? void 0 : t.resultCode) &&
                              c.setState({
                                hotList:
                                  (null == t ? void 0 : t.recommends) || [],
                              });
                        });
                      }),
                      (0, l.Z)((0, o.Z)(c), "loadHistory", function () {
                        var e =
                          h().getStorageSync("TICKET_SEARCH_HISTORY_STORE") ||
                          [];
                        console.log("historyList===", e),
                          (e = e.slice(0, 8)),
                          c.setState({ historyList: e });
                      }),
                      (0, l.Z)((0, o.Z)(c), "jumpToSpot", function (e) {
                        m.Z.isCRN &&
                          c.ubtTrace("SZASearch_Popular_click", {
                            PageId: c.pageId,
                            TypeSndAttr: null == e ? void 0 : e.scenicspotName,
                          });
                        var t = e.scenicspotId,
                          i = e.scenicspotName,
                          a = {
                            scenicSpotId: t,
                            scenicInfo: encodeURIComponent(
                              JSON.stringify({ iD: t, name: i })
                            ),
                            source: c.source,
                          };
                        c.jumpToDetail(a);
                      }),
                      (0, l.Z)(
                        (0, o.Z)(c),
                        "searchAndHistoryItemClick",
                        function (e, t) {
                          console.log(e), c.setHistory(e);
                          var i = S(e);
                          if (
                            (t
                              ? c.ubtTrace("SZASearch_Popular_click", {
                                  TypeSndAttr:
                                    (null == e ? void 0 : e.name) || "",
                                  ProductId: i || "",
                                })
                              : c.ubtTrace("SZASearch_Guess_click", {
                                  TypeSndAttr:
                                    (null == e ? void 0 : e.name) || "",
                                  Item: i
                                    ? "sight_"
                                        .concat(
                                          null == e ? void 0 : e.name,
                                          "_"
                                        )
                                        .concat(i)
                                    : "",
                                  Name: c.state.searchVal || "",
                                }),
                            1 === e.type)
                          ) {
                            var a = (0, o.Z)(c).source,
                              n = {
                                keyword: "",
                                cityName: e.name,
                                cityID: e.iD,
                                source: a,
                              };
                            h().setStorageSync("CITY_CURRENT_STORE", {
                              cityName: e.name,
                              cityID: e.iD,
                            }),
                              c.jumpToHome(n);
                          } else {
                            (0, p.cr)({
                              scenicSpotId: i,
                              scenicSpotName: e.name,
                            }).then(function (e) {
                              console.log(e);
                            });
                            var s = { scenicSpotId: i, source: c.source };
                            c.jumpToDetail(s);
                          }
                        }
                      ),
                      (0, l.Z)((0, o.Z)(c), "jumpToDetail", function (e) {
                        (0, I.l4)({ data: e });
                      }),
                      (0, l.Z)((0, o.Z)(c), "jumpToHome", function (e) {
                        c.navigateBack(e);
                      }),
                      (0, l.Z)((0, o.Z)(c), "setHistory", function (e) {
                        [].push(e);
                        var t = c.state.historyList,
                          i = c.checkEqual(e, t);
                        console.log(i),
                          h().setStorageSync("TICKET_SEARCH_HISTORY_STORE", i);
                      }),
                      (0, l.Z)((0, o.Z)(c), "clearHistory", function () {
                        c.setState({ historyList: [] }),
                          h().setStorageSync("TICKET_SEARCH_HISTORY_STORE", []);
                      }),
                      (0, l.Z)((0, o.Z)(c), "clearInput", function () {
                        c.state.searchVal &&
                          c.setState({
                            searchVal: "",
                            isShowDeletIcon: !1,
                            searchResult: [],
                          });
                      }),
                      (0, l.Z)((0, o.Z)(c), "searchKeyBoard", function (e) {
                        var t = e.detail.value.replace(/\s+/g, "");
                        if (t) {
                          m.Z.isCRN &&
                            c.ubtTrace("SZASearch_SearchButton_click", {
                              PageId: c.pageId,
                              TypeSndAttr: t,
                            });
                          var i = c.state,
                            a = {
                              keyword: t,
                              cityName: i.cityName,
                              cityID: i.cityID,
                              source: (0, o.Z)(c).source,
                            };
                          "searchList" === c.fromPage
                            ? c.jumpToHome(a)
                            : c.navigateTo({
                                url: "/pages/taroCRN/ticket/pages/searchList/searchList",
                                data: a,
                              });
                        }
                      }),
                      (0, l.Z)((0, o.Z)(c), "inputFocus", function () {
                        c.state.isShowDeletIcon ||
                          c.setState({ isShowDeletIcon: !0 });
                      }),
                      (0, l.Z)((0, o.Z)(c), "inputBlur", function (e) {
                        e.detail.value || c.setState({ isShowDeletIcon: !1 });
                      }),
                      (0, l.Z)(
                        (0, o.Z)(c),
                        "getNameSplitArray",
                        function (e, t) {
                          if (e === t) return [t];
                          var i = e.split(t),
                            c = [];
                          return (
                            i.map(function (e, a) {
                              c.push(e), i.length !== a + 1 && c.push(t);
                            }),
                            c.forEach(function (e, t) {
                              e || c.splice(t, 1);
                            }),
                            c
                          );
                        }
                      ),
                      (0, l.Z)((0, o.Z)(c), "autoSearch", function (e) {
                        c.setState({ searchVal: e.detail.value });
                        var t = e.detail.value.replace(/\s+/g, "");
                        if (t) {
                          var i = c.state,
                            a = i.longitude,
                            n = i.latitude,
                            o = i.locationCityId,
                            s = i.cityID;
                          (0, p.dc)({
                            longitude: a,
                            latitude: n,
                            cityID: s,
                            locationCityId: o,
                            keyword: t,
                          })
                            .then(function (e) {
                              var i;
                              if (
                                (console.log("搜索结果", e),
                                1 === e.resultCode &&
                                  (null == e ||
                                  null === (i = e.autoCompleteItemList) ||
                                  void 0 === i
                                    ? void 0
                                    : i.length) > 0)
                              ) {
                                var a = e.autoCompleteItemList.filter(function (
                                  e
                                ) {
                                  return !e.isOverSea;
                                });
                                console.log(a),
                                  a.forEach(function (e) {
                                    e.name &&
                                      (e.nameList = c.getNameSplitArray(
                                        e.name,
                                        t
                                      ));
                                  });
                                var n = [],
                                  o = [];
                                a.forEach(function (e) {
                                  var t = S(e);
                                  n.push(
                                    "sight_"
                                      .concat(null == e ? void 0 : e.name, "_")
                                      .concat(t)
                                  ),
                                    o.push(null == e ? void 0 : e.iD);
                                }),
                                  o.length &&
                                    c.ubtTrace("SZASearch_Guess_exposure", {
                                      Name: c.state.searchVal || "",
                                      ItemList: JSON.stringify(n),
                                      ProductIds: JSON.stringify(o),
                                    }),
                                  c.setState({ searchResult: a });
                              } else c.setState({ searchResult: [] });
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                        } else c.setState({ searchResult: [] });
                      }),
                      (c.state = {
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
                      }),
                      (c.debounceFn = (function (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 300,
                          i = null;
                        return function () {
                          var c = this,
                            a = arguments;
                          i && (clearTimeout(i), (i = null)),
                            (i = setTimeout(function () {
                              e.apply(c, a);
                            }, t));
                        };
                      })(c.autoSearch, 100)),
                      c
                    );
                  }
                  return (
                    (0, n.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            t = (0, _.getCurrentInstance)();
                          if (
                            (console.log("instance==", t),
                            null != t &&
                              null !== (e = t.router) &&
                              void 0 !== e &&
                              e.params)
                          ) {
                            var i,
                              c =
                                (null == t ||
                                null === (i = t.router) ||
                                void 0 === i
                                  ? void 0
                                  : i.params) || {},
                              a = c.cityID,
                              n = c.cityName,
                              o = c.source,
                              s =
                                void 0 === o
                                  ? m.Z.isCRN
                                    ? "app"
                                    : "wechat"
                                  : o,
                              r = c.fromPage;
                            this.setState({ cityID: a, cityName: n }),
                              (this.source = s),
                              (this.fromPage = r),
                              this.getHotList(a);
                          }
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          this.loadHistory();
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "beginLocate",
                        value: function () {
                          var e = this;
                          (0, g.y9)().then(
                            function (t) {
                              var i = {
                                coordType: "wgs84",
                                latitude: null == t ? void 0 : t.latitude,
                                longitude: null == t ? void 0 : t.longitude,
                                type: 1,
                              };
                              (0, p.Jr)({ data: i }).then(function (t) {
                                var i;
                                1 === (null == t ? void 0 : t.resultCode) &&
                                  null != t &&
                                  null !== (i = t.data) &&
                                  void 0 !== i &&
                                  i.cityId &&
                                  e.setState({ locationCityId: t.data.cityId });
                              }),
                                e.setState({
                                  latitude: null == t ? void 0 : t.latitude,
                                  longitude: null == t ? void 0 : t.longitude,
                                });
                            },
                            function (e) {
                              console.log(e);
                            }
                          );
                        },
                      },
                      {
                        key: "checkEqual",
                        value: function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [],
                            i =
                              (t &&
                                t.filter(function (t) {
                                  return e.name !== t.name;
                                })) ||
                              [];
                          return [e].concat(i);
                        },
                      },
                      {
                        key: "renderAutoCompleteIcon",
                        value: function (e) {
                          switch (parseInt(e)) {
                            case 1:
                              return (0, C.tZ)(d.Image, {
                                className: " _Ce _De _Va",
                                src: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/searchLocIcon.png",
                              });
                            case 2:
                              return (0, C.tZ)(y.Z, {
                                className:
                                  " _J _lj " + (m.Z.isTieyou ? " _ur" : " _Fc"),
                                children: "",
                              });
                            case 3:
                            default:
                              return (0, C.tZ)(d.Image, {
                                className: " _Ce _De _Va",
                                src: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/searchSpotIcon.png",
                              });
                          }
                        },
                      },
                      {
                        key: "renderSearchBar",
                        value: function () {
                          var e = this.state.searchVal;
                          return (0, C.BX)(d.View, {
                            className: m.Z.isCRN
                              ? " _Qf _Gc _Oa _go _i _nl _l _Zn"
                              : " _ps _Gc _yd _Oa _i _Ga _l _Zn",
                            children: [
                              (0, C.tZ)(d.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_ss@3x.png",
                                className: " _Ce _De _Va",
                              }),
                              (0, C.tZ)(d.Input, {
                                type: "text",
                                placeholder: "景点名称 / 游玩主题",
                                placeholderClass: " _cs _Kc",
                                className: " _j _Gc _ck _dd",
                                value: e,
                                focus: "true",
                                confirmType: "search",
                                onFocus: this.inputFocus,
                                onBlur: this.inputBlur,
                                onInput: this.autoSearch,
                                onConfirm: this.searchKeyBoard,
                              }),
                              !!e &&
                                (0, C.BX)(d.View, {
                                  className: " _gg _i _Ga _l _bi _Sj",
                                  id: "AMCi",
                                  onClick: this.clearInput,
                                  children: [
                                    (0, C.tZ)(y.Z, {
                                      className: " _Bd",
                                      children: "󰳭",
                                    }),
                                    " ",
                                  ],
                                }),
                            ],
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.searchVal,
                            c = t.searchResult,
                            a = t.historyList,
                            n = t.hotList;
                          return (0, C.BX)(d.Block, {
                            children: [
                              (0, C.tZ)(Z.Z, {
                                title: "",
                                needHolder: !0,
                                defaultBackButtonColor: m.Z.isCRN
                                  ? "#fff"
                                  : "#222",
                                backgroundColor: "#fff",
                                propStyle: {
                                  box: "background-color: #fff;color:#222",
                                },
                                titleColor: "#222",
                                pop: function () {
                                  e.navigateBack();
                                },
                                renderCenterView: function () {
                                  return (0, C.BX)(d.View, {
                                    style: {
                                      display: "flex",
                                      flexDirection: "row",
                                      height: 44,
                                    },
                                    children: [
                                      (0, C.tZ)(d.View, {
                                        style: {
                                          width: 50,
                                          height: 44,
                                          alignItems: "center",
                                          justifyContent: "center",
                                        },
                                        id: "AMCj",
                                        onClick: function () {
                                          e.navigateBack();
                                        },
                                        children: (0, C.tZ)(d.Text, {
                                          style: {
                                            fontFamily: "crn_font_rn_mini",
                                            color: "black",
                                            fontSize: 24,
                                            marginLeft: 10,
                                          },
                                          children: "󰲚",
                                        }),
                                      }),
                                      e.renderSearchBar(),
                                    ],
                                  });
                                },
                                renderRightView: function () {
                                  return (0, C.tZ)(d.View, {});
                                },
                                rightViewWidth: 0,
                                leftViewWidth: 0,
                              }),
                              !m.Z.isCRN && this.renderSearchBar(),
                              (0, C.tZ)(d.View, {
                                className: " _j _Zr",
                                children: (0, C.tZ)(d.ScrollView, {
                                  scrollY: !0,
                                  className: " _Y",
                                  scrollWithAnimation: !0,
                                  enableBackToTop: !0,
                                  enableFlex: !0,
                                  children:
                                    c && c.length > 0
                                      ? (0, C.tZ)(d.View, {
                                          className: " _Zr _j _a",
                                          children: (0, C.tZ)(d.View, {
                                            className: "search-list",
                                            children:
                                              c &&
                                              c.map(function (t, c) {
                                                return (0, C.BX)(C.HY, {
                                                  children: [
                                                    (0, C.BX)(
                                                      d.View,
                                                      {
                                                        className:
                                                          " _hs _i _Ga _l _is _js",
                                                        id: "AMCk",
                                                        onClick: function () {
                                                          m.Z.isCRN &&
                                                            e.ubtTrace(
                                                              "SZASearch_Guess_click",
                                                              {
                                                                PageId:
                                                                  e.pageId,
                                                                TypeSndAttr:
                                                                  e.state
                                                                    .searchVal,
                                                              }
                                                            ),
                                                            e.searchAndHistoryItemClick(
                                                              t
                                                            );
                                                        },
                                                        children: [
                                                          e.renderAutoCompleteIcon(
                                                            t.type
                                                          ),
                                                          (0, C.tZ)(d.View, {
                                                            className:
                                                              " _os _yc _Ym _Xm _i _Ga _l",
                                                            children:
                                                              t.nameList.map(
                                                                function (
                                                                  e,
                                                                  t
                                                                ) {
                                                                  return (0,
                                                                  C.tZ)(
                                                                    d.Text,
                                                                    {
                                                                      className:
                                                                        e == i
                                                                          ? m.Z
                                                                              .isTieyou
                                                                            ? " _ur"
                                                                            : " _Fc"
                                                                          : "",
                                                                      children:
                                                                        e,
                                                                    },
                                                                    t
                                                                  );
                                                                }
                                                              ),
                                                          }),
                                                        ],
                                                      },
                                                      c
                                                    ),
                                                    (0, C.tZ)(d.View, {
                                                      className: " _Zf _ks _ls",
                                                    }),
                                                  ],
                                                });
                                              }),
                                          }),
                                        })
                                      : (0, C.tZ)(d.View, {
                                          className: " _Zr _j _a",
                                          children: (0, C.BX)(d.View, {
                                            className: " _ag",
                                            children: [
                                              a &&
                                                a.length > 0 &&
                                                (0, C.BX)(d.View, {
                                                  className:
                                                    " _i _Ga _m _l _kg",
                                                  children: [
                                                    (0, C.tZ)(d.View, {
                                                      className: " _tb _dd",
                                                      children: "历史搜索",
                                                    }),
                                                    (0, C.tZ)(d.Image, {
                                                      id: "AMCl",
                                                      onClick:
                                                        this.clearHistory,
                                                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ssy_icon_sc@3x.png",
                                                      className: " _Ce _De",
                                                    }),
                                                  ],
                                                }),
                                              (0, C.tZ)(d.View, {
                                                className: " _i _Mn",
                                                children: a.map(function (
                                                  t,
                                                  i
                                                ) {
                                                  return (0, C.tZ)(
                                                    d.View,
                                                    {
                                                      className:
                                                        " _Ym _Rn _db _F _vj _i _Ga _ds _pb _es _Mb _yc _Xm _l",
                                                      id: "AMCm",
                                                      onClick: function () {
                                                        m.Z.isCRN &&
                                                          e.ubtTrace(
                                                            "SZASearch_His_click",
                                                            {
                                                              PageId: e.pageId,
                                                              TypeSndAttr:
                                                                t.name,
                                                            }
                                                          ),
                                                          e.searchAndHistoryItemClick(
                                                            t,
                                                            !0
                                                          );
                                                      },
                                                      children: t.name,
                                                    },
                                                    i
                                                  );
                                                }),
                                              }),
                                              n &&
                                                n.length > 0 &&
                                                (0, C.BX)(d.Block, {
                                                  children: [
                                                    (0, C.tZ)(d.View, {
                                                      className:
                                                        " _i _Ga _m _l _kg",
                                                      children: (0, C.tZ)(
                                                        d.View,
                                                        {
                                                          className: " _tb _dd",
                                                          children: "热门搜索",
                                                        }
                                                      ),
                                                    }),
                                                    (0, C.tZ)(d.View, {
                                                      className: " _i _Mn",
                                                      children: n.map(function (
                                                        t,
                                                        i
                                                      ) {
                                                        return (0, C.BX)(
                                                          d.View,
                                                          {
                                                            id: "AMCn",
                                                            onClick:
                                                              function () {
                                                                return e.jumpToSpot(
                                                                  t
                                                                );
                                                              },
                                                            className:
                                                              " _Ym _Rn _db _F _vj _i _Ga _ds _pb _es _Mb _yc _Xm _l",
                                                            children: [
                                                              i < 3 &&
                                                                (0, C.tZ)(
                                                                  d.Image,
                                                                  {
                                                                    src: "https://images3.c-ctrip.com/ztrip/ticket-image/2023-02/hotSearch.png",
                                                                    className:
                                                                      " _Ye _og _Va",
                                                                  }
                                                                ),
                                                              (0, C.tZ)(
                                                                d.Text,
                                                                {
                                                                  className:
                                                                    " _yc _Xm _Ym _fs",
                                                                  numberOfLines: 1,
                                                                  children:
                                                                    t.scenicspotName,
                                                                }
                                                              ),
                                                            ],
                                                          },
                                                          "index"
                                                        );
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
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
                })(u.default.Component))
              ) || v;
          Page(
            (0, c.createPageConfig)(
              N,
              "pages/taroCRN/ticket/pages/search/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "搜索关键字",
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#fff",
                navigationBarTextStyle: "black",
                disableScroll: !0,
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
            98946, 3322, 36332, 95854, 7160, 83004, 59188, 35048, 70486, 97709,
            6189, 22843, 6878, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(14454);
          }
        ),
          e.O();
      },
    ]);
})();
