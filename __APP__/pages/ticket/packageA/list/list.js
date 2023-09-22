!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [11264],
      {
        72448: function (t, e, i) {
          var a,
            c = i(32180),
            n = i(57042),
            s = i(24460),
            o = i(21867),
            r = i(86066),
            l = i(52500),
            d = i(71515),
            h = i(92954),
            u = i.n(h),
            p = i(48792),
            m = i.n(p),
            g = i(79792),
            f = (i(49120), i(20592)),
            y = i(45066),
            x = i(55099),
            w = i(3205),
            N = i(13025),
            Z = i(36039),
            L = i(20689),
            k = Z.Z.dealCityItem,
            T = Z.Z.deepClone,
            D = {
              goCitySelPage: function () {
                var t = this,
                  e = { inlandCities: L.O5.get() || {}, interCities: {} };
                console.log(e),
                  w.Z.city(
                    {
                      title: "目的地列表",
                      bu: "ticket",
                      handleSearch: function (t, e, i) {
                        var a = [];
                        (0, x.Z$)({ keyword: t, overseasCityFlag: 0 }).then(
                          function (t) {
                            1 === t.resultCode && ((a = t.cities), k(a), i(a));
                          }
                        );
                      },
                      loadData: function (t) {
                        t(e);
                      },
                      handleCurrentPosition: function (t, e) {
                        var i = {
                          Latitude: t.latitude,
                          Longitude: t.longitude,
                          Language: "CN",
                        };
                        (0, N.T_)(i)
                          .then(function (t) {
                            e({
                              cityName: t.CityEntities[0].CityName,
                              cityID: t.DistrictId,
                              countryName: t.CountryName,
                            });
                          })
                          .catch(function () {});
                      },
                    },
                    function (e) {
                      console.log("选中的城市", e);
                      var i = { cityID: e.cityID, cityName: e.cityName };
                      L.$s.set(i),
                        t.setData(
                          { cityID: e.cityID, cityName: e.cityName },
                          function () {
                            t.getScenicList(1);
                          }
                        ),
                        t.pushToHistory(e);
                    }
                  );
              },
              pushToHistory: function (t) {
                var e = this.data.historyList;
                if (0 === e.length) e.push(t);
                else {
                  for (var i = T(t), a = 0; a < e.length; a++)
                    if (
                      Number(t.cityID) === Number(e[a].cityID) &&
                      t.cityName === e[a].cityName
                    ) {
                      e.splice(a, 1);
                      break;
                    }
                  e.unshift(i), (e = e.slice(0, 4));
                }
                this.setData({ historyList: e }),
                  L.O5.setAttr("historyCities", e);
              },
            },
            b = i(15148),
            v = i(80048),
            B = i(36318),
            C = i(52341),
            V = i(48813),
            S = (function (t) {
              (0, o.Z)(i, t);
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
                        e = this.props.data || {},
                        i = e.listData,
                        a = e.isTieyou;
                      return i
                        ? (0, V.tZ)(d.Block, {
                            children: i.map(function (e, i) {
                              return (0, V.BX)(
                                d.View,
                                {
                                  className: "item",
                                  id: "ALBb",
                                  onClick: t.props.goDetail,
                                  "data-item": e,
                                  children: [
                                    (0, V.tZ)(d.Image, { src: e.imageURL }),
                                    (0, V.tZ)(d.View, {
                                      className: "tit",
                                      children: e.name || "",
                                    }),
                                    (0, V.tZ)(d.View, {
                                      className: "info",
                                      children: (e.displayTagList || []).map(
                                        function (t, i) {
                                          return (0, V.BX)(
                                            d.Block,
                                            {
                                              children: [
                                                (0, V.tZ)(d.Text, {
                                                  children: t,
                                                }),
                                                e.displayTagList &&
                                                  e.displayTagList.length &&
                                                  i !==
                                                    e.displayTagList.length -
                                                      1 &&
                                                  (0, V.tZ)(d.Block, {
                                                    children: (0, V.tZ)(
                                                      d.Text,
                                                      { className: "splitLine" }
                                                    ),
                                                  }),
                                              ],
                                            },
                                            "tagIdx"
                                          );
                                        }
                                      ),
                                    }),
                                    (0, V.tZ)(d.View, {
                                      className: "grade",
                                      children: e.commentGrade
                                        ? (0, V.BX)(d.Block, {
                                            children: [
                                              (0, V.tZ)(C.Z, {
                                                data: {
                                                  commentGrade: e.commentGrade,
                                                },
                                              }),
                                              (0, V.tZ)(d.Text, {
                                                className: "txt",
                                                children:
                                                  (e.commentGrade || "暂无评") +
                                                  "分",
                                              }),
                                            ],
                                          })
                                        : (0, V.tZ)(d.Block, {
                                            children: (0, V.tZ)(d.Text, {
                                              style: "font-size: 22rpx;",
                                              children: "暂无点评",
                                            }),
                                          }),
                                    }),
                                    (0, V.BX)(d.View, {
                                      className: "tag-box " + (a ? "ty" : "zx"),
                                      children: [
                                        e.advanceBookingDesc &&
                                          (0, V.tZ)(d.Block, {
                                            children: (0, V.tZ)(d.Text, {
                                              className: "tag",
                                              children: e.advanceBookingDesc,
                                            }),
                                          }),
                                        e.couponInfo &&
                                          e.couponInfo.discountInfoList &&
                                          e.couponInfo.discountInfoList
                                            .length &&
                                          (0, V.tZ)(d.Block, {
                                            children: (
                                              e.couponInfo.discountInfoList ||
                                              []
                                            ).map(function (t, e) {
                                              return (0,
                                              V.tZ)(d.Block, { children: e < 3 && (0, V.tZ)(d.Text, { className: "tag", children: t.value }) }, "groupListIdx");
                                            }),
                                          }),
                                      ],
                                    }),
                                    (0, V.BX)(d.View, {
                                      className: "r-box",
                                      children: [
                                        e.salePrice > 0 &&
                                          (0, V.BX)(d.View, {
                                            className: "price",
                                            style: "line-height: normal;",
                                            children: [
                                              e.salePrice || "",
                                              (0, V.tZ)(d.Text, {
                                                className: "em",
                                                children: "起",
                                              }),
                                            ],
                                          }),
                                        e.couponInfo &&
                                          e.couponInfo.couponDesc &&
                                          (0, V.tZ)(d.View, {
                                            className: "coupon-desc",
                                            children: e.couponInfo.couponDesc,
                                          }),
                                      ],
                                    }),
                                  ],
                                },
                                "idx"
                              );
                            }),
                          })
                        : (0, V.tZ)(d.View, {});
                    },
                  },
                ]),
                i
              );
            })(l.default.Component),
            I = i(81957),
            P = i(73851),
            F = {
              pageId: g.default.isTieyou ? "10650059438" : "10650059420",
              data: {
                isTieyou: g.default.isTieyou,
                isLogin: !1,
                sortList: [
                  { sortType: "D", sortDirection: "", text: "智能排序" },
                  { sortType: "V", sortDirection: "D", text: "销量最高" },
                  { sortType: "S", sortDirection: "A", text: "距离最近" },
                ],
                hasLoadAll: !1,
                pageIndex: 1,
                scrollViewHeight: 518,
                cityID: "2",
                cityName: "上海",
                searchParameter: { canNowUse: 0, keyword: "" },
                sortParameter: {},
                listData: [],
                subLabelStatisticList: [{ text: "全部景点", value: "" }],
                activeFilterType: 0,
                sortLabel: "智能排序",
                scenicLabel: "全部景点",
                spotValue: "",
                fetchStatus: "initial",
                historyList: [],
                isShowTicketCouponPop: !1,
                popCouponList: [],
                sceneID: "",
                couponStyle: {},
                hasCoupon: !1,
                couponTag: {},
              },
              resetScrollHeightForIphoneX: function () {
                var t = this;
                u().getSystemInfo({
                  success: function (e) {
                    var i = e.model;
                    console.warn("modelmes:", i),
                      -1 != i.indexOf("iPhone X") &&
                        (8 === i.length
                          ? t.setData({ scrollViewHeight: 550 })
                          : t.setData({ scrollViewHeight: 620 }));
                  },
                });
              },
              setScrollHeight: function () {
                var t = this;
                try {
                  u().getSystemInfo({
                    success: function (e) {
                      var i = u().createSelectorQuery();
                      i.select("#filter-bar").boundingClientRect(),
                        i.exec(function (i) {
                          i &&
                            i[0] &&
                            t.setData({
                              scrollViewHeight: e.windowHeight - i[0].bottom,
                            });
                        });
                    },
                  });
                } catch (t) {}
              },
              onResize: function () {
                this.setScrollHeight();
              },
              updateFilter: function (t) {
                var e = this;
                try {
                  var i = t.currentTarget.dataset,
                    a = i.item;
                  "2" === i.type
                    ? this.setData(
                        {
                          sortLabel: a.text,
                          sortParameter: {
                            sortType: a.sortType ? a.sortType : "D",
                            sortDirection: a.sortDirection
                              ? a.sortDirection
                              : "",
                          },
                        },
                        function () {
                          e.setData({ activeFilterType: 0 }),
                            e.getScenicList(1);
                        }
                      )
                    : this.setData(
                        {
                          scenicLabel: a.text,
                          spotValue: a.value ? a.value : "",
                        },
                        function () {
                          e.setData({ activeFilterType: 0 }),
                            e.getScenicList(1);
                        }
                      );
                } catch (t) {
                  this.setData({ activeFilterType: 0 });
                }
              },
              toggleFilterBar: function (t) {
                var e = this;
                try {
                  var i = t.currentTarget.dataset.filterBar;
                  if (3 == +i) {
                    var a = this.data.searchParameter;
                    this.setData(
                      {
                        searchParameter: Object.assign(a, {
                          canNowUse: a.canNowUse ? 0 : 1,
                        }),
                        activeFilterType: 0,
                      },
                      function () {
                        e.getScenicList(1);
                      }
                    );
                  } else
                    this.setData({
                      activeFilterType:
                        1 * i === this.data.activeFilterType ? 0 : 1 * i,
                    });
                } catch (t) {}
              },
              closeThemeFilter: function () {
                this.setData({ activeFilterType: 0 });
              },
              onLoad: function (t) {
                var e = this;
                u().nextTick(function () {
                  e.setScrollHeight();
                }),
                  this.initCoupon(),
                  (this.options = t),
                  this.setData(
                    {
                      cityName: t.cityName ? t.cityName : "上海",
                      cityID: t.cityID ? t.cityID : "2",
                      spotValue: t.spotValue ? t.spotValue : "",
                      scenicLabel: t.text ? t.text : "全部景点",
                      searchParameter: {
                        canNowUse: 0,
                        keyword: t.keyword || "",
                      },
                    },
                    function () {
                      e.getScenicList();
                    }
                  );
              },
              onShow: function () {
                var t = this;
                P.Z.isLogin(!0)
                  .then(function (e) {
                    t.setData({ isLogin: e });
                  })
                  .catch(null);
              },
              nextPage: function () {
                this.getScenicList(2);
              },
              goDetail: function (t) {
                var e = t.currentTarget.dataset.item,
                  i = (this.options || {}).source,
                  a = void 0 === i ? "wechat" : i;
                y.F0.navigateTo("detail", {
                  scenicSpotId: e.iD,
                  source: a,
                  scenicInfo: encodeURIComponent(
                    JSON.stringify({
                      address: e.address,
                      commentCount: e.commentCount,
                      commentGrade: e.commentGrade,
                      iD: e.iD,
                      name: e.name,
                      pmRecommand: e.pmRecommand,
                      sortDesc: e.sortDesc,
                      star: e.star,
                    })
                  ),
                });
              },
              goSearch: function () {
                var t = this,
                  e = this.data,
                  i = e.cityID,
                  a = e.cityName;
                this.navigateTo({
                  url: "/pages/ticket/packageA/search/search?cityID="
                    .concat(i, "&cityName=")
                    .concat(a, "&fromPage=list"),
                  callback: function (e) {
                    var i = e.keyword,
                      a = e.cityID,
                      c = e.cityName,
                      n = { keyword: i, canNowUse: 0 };
                    t.setData(
                      { cityID: a, cityName: c, searchParameter: n },
                      function () {
                        t.getScenicList(1);
                      }
                    );
                  },
                });
              },
              getScenicList: function (t) {
                var e = this,
                  i = this.data,
                  a = i.pageIndex,
                  c = i.searchParameter,
                  n = i.sortParameter,
                  s = i.cityID,
                  o = i.hasLoadAll,
                  r = i.listData,
                  l = i.spotValue;
                if (!o || 2 !== t) {
                  1 === t && P.Z.showLoading();
                  var d = [{ key: "8", value: s + "" }],
                    h = [{ key: l ? "1007" : "", value: l || "" }],
                    u = {
                      searchParameter: Object.assign(
                        {},
                        c,
                        f.Bc.longitude
                          ? {
                              longitude: Number(f.Bc.longitude),
                              latitude: Number(f.Bc.latitude),
                            }
                          : {}
                      ),
                      filterList: [].concat(h, d),
                      sortParameter: n,
                      pagingParameter: {
                        pageIndex: 2 === t ? a + 1 : 1,
                        pageSize: 20,
                      },
                      responseDataType: 2,
                      imageSizeKey: "C_190_190",
                      sceneID: v.b,
                    };
                  (0, x.BZ)(u)
                    .then(function (i) {
                      1 === i.resultCode
                        ? e.setData(
                            {
                              fetchStatus: "success",
                              pageIndex: 2 === t ? a + 1 : 1,
                              listData:
                                2 === t
                                  ? [].concat(r, i.scenicSpotList || [])
                                  : i.scenicSpotList || [],
                              subLabelStatisticList:
                                i.labelStatisticShowList &&
                                i.labelStatisticShowList.length
                                  ? i.labelStatisticShowList
                                  : e.data.subLabelStatisticList,
                              hasLoadAll: 2 === t && a + 1 >= i.pagingCount,
                            },
                            function () {
                              P.Z.hideLoading();
                            }
                          )
                        : (1 === t &&
                            P.Z.showToast(
                              i.resultMessage || "网络异常，请稍后再来哦～"
                            ),
                          e.setData({ fetchStatus: "fail" }),
                          P.Z.hideLoading());
                    })
                    .catch(function () {
                      P.Z.hideLoading(), e.setData({ fetchStatus: "fail" });
                    });
                }
              },
            },
            X = Object.assign({}, F, D, b.G),
            A =
              (0, I.h)()(
                (a =
                  m()(X)(
                    (a = (function (t) {
                      (0, o.Z)(i, t);
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
                                i = e.cityName,
                                a = e.searchParameter,
                                c = e.isTieyou,
                                n = e.hasCoupon,
                                s = e.activeFilterType,
                                o = e.scenicLabel,
                                r = e.sortLabel,
                                l = e.couponTag,
                                h = e.fetchStatus,
                                u = e.scrollViewHeight,
                                p = e.listData,
                                m = e.hasLoadAll,
                                g = e.subLabelStatisticList,
                                f = e.sortList,
                                y = e.popCouponList,
                                x = e.isLogin,
                                w = e.couponStyle,
                                N = e.isShowTicketCouponPop;
                              return (0, V.BX)(d.Block, {
                                children: [
                                  (0, V.BX)(d.View, {
                                    className: "page",
                                    children: [
                                      (0, V.tZ)(d.View, {
                                        className: "search-top",
                                        style:
                                          "position: relative;z-index: 1001;background-color: #fff;",
                                        children: (0, V.BX)(d.View, {
                                          className: "search-top-bd",
                                          children: [
                                            (0, V.BX)(d.View, {
                                              className: "city",
                                              id: "ALBu",
                                              onClick: this.goCitySelPage,
                                              children: [
                                                (0, V.tZ)(d.Text, {
                                                  className: "txt",
                                                  children: i,
                                                }),
                                                (0, V.tZ)(d.Text, {
                                                  className:
                                                    "ifont-arr iconfont",
                                                }),
                                              ],
                                            }),
                                            (0, V.tZ)(d.Text, {
                                              className:
                                                "ifont-search iconfont",
                                            }),
                                            (0, V.tZ)(d.View, {
                                              className: "input-txt ".concat(
                                                a.keyword ? "" : "input-pld"
                                              ),
                                              id: "ALBv",
                                              onClick: this.goSearch,
                                              children:
                                                a.keyword ||
                                                "搜索您感兴趣的景点",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, V.BX)(d.View, {
                                        id: "filter-bar",
                                        children: [
                                          (0, V.BX)(d.View, {
                                            className:
                                              "list-filter " +
                                              (c ? "ty" : "zx") +
                                              " " +
                                              (n ? "" : "list-filter-border"),
                                            style:
                                              "position: relative;z-index: 1001;background-color: #fff;",
                                            children: [
                                              (0, V.BX)(d.View, {
                                                className:
                                                  "item " +
                                                  (1 === s ? "open cur" : "") +
                                                  " " +
                                                  ("全部景点" !== o
                                                    ? "cur"
                                                    : ""),
                                                id: "ALBw",
                                                onClick: this.toggleFilterBar,
                                                "data-filter-bar": "1",
                                                children: [
                                                  (0, V.tZ)(d.Text, {
                                                    children: o,
                                                  }),
                                                  (0, V.tZ)(d.Text, {
                                                    className:
                                                      "ifont-triangle iconfont",
                                                  }),
                                                ],
                                              }),
                                              (0, V.BX)(d.View, {
                                                className:
                                                  "item " +
                                                  (2 === s ? "open cur" : "") +
                                                  " " +
                                                  ("智能排序" !== r
                                                    ? "cur"
                                                    : ""),
                                                id: "ALBx",
                                                onClick: this.toggleFilterBar,
                                                "data-filter-bar": "2",
                                                children: [
                                                  (0, V.tZ)(d.Text, {
                                                    children: r,
                                                  }),
                                                  (0, V.tZ)(d.Text, {
                                                    className:
                                                      "ifont-triangle iconfont",
                                                  }),
                                                ],
                                              }),
                                              (0, V.tZ)(d.View, {
                                                className:
                                                  "item " +
                                                  (1 === a.canNowUse
                                                    ? "cur"
                                                    : ""),
                                                id: "ALBy",
                                                onClick: this.toggleFilterBar,
                                                "data-filter-bar": "3",
                                                children: "可订今日",
                                              }),
                                            ],
                                          }),
                                          n &&
                                            (0, V.tZ)(d.Block, {
                                              children: (0, V.BX)(d.View, {
                                                className: "list-hongbao",
                                                children: [
                                                  (0, V.tZ)(d.Icon, {
                                                    className: "icon-hongbao",
                                                  }),
                                                  (0, V.BX)(d.View, {
                                                    className: "cont",
                                                    children: [
                                                      "您有" +
                                                        (l.totalCount || "-") +
                                                        "张优惠券" +
                                                        (1 === l.tagType
                                                          ? "可领取"
                                                          : "可使用"),
                                                      l.totalCouponPrice &&
                                                        (0, V.tZ)(d.Text, {
                                                          children:
                                                            "，可减" +
                                                            l.totalCouponPrice +
                                                            "元",
                                                        }),
                                                    ],
                                                  }),
                                                  1 === l.tagType &&
                                                    (0, V.tZ)(d.Button, {
                                                      className:
                                                        "btn-go btn-red",
                                                      id: "ALBz",
                                                      onClick: this.showPop,
                                                      children: "领取",
                                                    }),
                                                ],
                                              }),
                                            }),
                                        ],
                                      }),
                                      "initial" === h &&
                                        (0, V.tZ)(d.Block, {
                                          children: [0, 1, 2, 3, 4, 5, 6].map(
                                            function () {
                                              return (0, V.tZ)(
                                                d.Block,
                                                {
                                                  children: (0, V.tZ)(d.View, {
                                                    className: "list-group",
                                                    children: (0, V.BX)(
                                                      d.View,
                                                      {
                                                        className: "item",
                                                        children: [
                                                          (0, V.tZ)(d.View, {
                                                            className:
                                                              "add-skeleton-item",
                                                            style:
                                                              "width: 186rpx;height: 186rpx;position: absolute;left: -210rpx;top:24rpx;border-radius: 5px;background: #F5F5F5;",
                                                          }),
                                                          (0, V.tZ)(d.View, {
                                                            className:
                                                              "tit add-skeleton-item",
                                                            style:
                                                              "width:346rpx;height: 36rpx;margin-bottom: 18rpx;",
                                                          }),
                                                          (0, V.tZ)(d.View, {
                                                            className:
                                                              "grade add-skeleton-item",
                                                            style:
                                                              "width:302rpx; height: 24rpx;margin-bottom: 12rpx;",
                                                          }),
                                                          (0, V.tZ)(d.View, {
                                                            className:
                                                              "info add-skeleton-item",
                                                            style:
                                                              "width:112rpx; height: 20rpx;",
                                                          }),
                                                          (0, V.tZ)(d.View, {
                                                            className:
                                                              "tag-box add-skeleton-item",
                                                            style:
                                                              "width:180rpx; height: 30rpx;",
                                                          }),
                                                          (0, V.tZ)(d.View, {
                                                            className:
                                                              "skeleton-item-price add-skeleton-item",
                                                            style:
                                                              "width:118rpx; height: 30rpx;",
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                },
                                                "index"
                                              );
                                            }
                                          ),
                                        }),
                                      p && p.length
                                        ? (0, V.tZ)(d.View, {
                                            className: "list-view",
                                            children: (0, V.tZ)(d.View, {
                                              className: "list-group",
                                              children: (0, V.BX)(
                                                d.ScrollView,
                                                {
                                                  scrollY: !0,
                                                  onScrollToLower:
                                                    this.nextPage,
                                                  style: "height:" + u + "px;",
                                                  scrollWithAnimation: !0,
                                                  enableBackToTop: !0,
                                                  enableFlex: !0,
                                                  children: [
                                                    (0, V.tZ)(S, {
                                                      data: {
                                                        listData: p,
                                                        isTieyou: c,
                                                      },
                                                      goDetail: this.goDetail,
                                                    }),
                                                    m
                                                      ? (0, V.tZ)(d.View, {
                                                          style:
                                                            "text-align: center;padding-top: 40rpx;padding-bottom: 80rpx;color: #999999;",
                                                          children:
                                                            "- 没有更多数据了 -",
                                                        })
                                                      : (0, V.tZ)(d.View, {
                                                          style:
                                                            "text-align: center;color:#666;height: 80rpx;line-height: 80rpx;",
                                                          children: "加载中...",
                                                        }),
                                                  ],
                                                }
                                              ),
                                            }),
                                          })
                                        : (0, V.tZ)(d.View, {
                                            children:
                                              "initial" !== h &&
                                              (0, V.BX)(d.View, {
                                                className: "page-blank-bd",
                                                children: [
                                                  (0, V.tZ)(d.Image, {
                                                    src:
                                                      "http://images3.c-ctrip.com/zt/wechat/" +
                                                      (c
                                                        ? "img-blank-ty"
                                                        : "img-blank-zx") +
                                                      ".png",
                                                    className: "img-blank",
                                                  }),
                                                  (0, V.tZ)(d.View, {
                                                    className: "txt",
                                                    children:
                                                      "当前条件下暂无景点信息",
                                                  }),
                                                ],
                                              }),
                                          }),
                                    ],
                                  }),
                                  (1 === s || 2 === s) &&
                                    (0, V.tZ)(d.View, {
                                      className: "pop-mask shade-filter active",
                                      id: "ALCA",
                                      onClick: this.closeThemeFilter,
                                      children: (0, V.BX)(d.View, {
                                        className:
                                          "pop-filter " + (c ? "ty" : "zx"),
                                        children: [
                                          1 === s &&
                                            (0, V.tZ)(d.Block, {
                                              id: "ALCB",
                                              onClick: this.empty,
                                              children: g.map(function (e, i) {
                                                return (0,
                                                V.BX)(d.View, { "data-item": e, "data-type": "1", className: "item " + (o === e.text ? "cur" : ""), id: "ALCC", onClick: t.updateFilter, children: [(0, V.tZ)(d.Text, { children: e.text }), (0, V.tZ)(d.Text, { className: o === e.text ? "ifont-selected iconfont" : "" })] }, i + e.value);
                                              }),
                                            }),
                                          2 === s &&
                                            (0, V.tZ)(d.Block, {
                                              id: "ALCD",
                                              onClick: this.empty,
                                              children: f.map(function (e, i) {
                                                return (0,
                                                V.BX)(d.View, { "data-item": e, "data-type": "2", className: "item " + (r === e.text ? "cur" : ""), id: "ALCE", onClick: t.updateFilter, children: [(0, V.tZ)(d.Text, { children: e.text }), (0, V.tZ)(d.Text, { className: r === e.text ? "ifont-selected iconfont" : "" })] }, i + e.sortType);
                                              }),
                                            }),
                                        ],
                                      }),
                                    }),
                                  N &&
                                    y.length &&
                                    (0, V.tZ)(d.Block, {
                                      children: (0, V.tZ)(B.Z, {
                                        data: {
                                          popCouponList: y,
                                          isLogin: x,
                                          couponStyle: w,
                                        },
                                        receiveRequest: this.receiveRequest,
                                        closePop: this.closePop,
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
            (0, c.createPageConfig)(
              A,
              "pages/ticket/packageA/list/list",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "景点列表",
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
          })(72448);
        }),
          t.O();
      },
    ]);
})();
