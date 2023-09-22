!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [75606],
      {
        87328: function (t, e, a) {
          var n,
            o = a(32180),
            i = a(57042),
            c = a(24460),
            l = a(21867),
            r = a(86066),
            s = a(45023),
            d = a(298),
            u = a(52500),
            h = a(71515),
            f = a(92954),
            g = a.n(f),
            y = a(48792),
            m = a.n(y),
            D = a(49120),
            p = a(79792),
            v = a(79404),
            I = a(80626),
            k = a(90129),
            T = a(90668),
            x = a(48813),
            b = u.default.memo(function (t) {
              var e = t.loading,
                a = t.date,
                n = t.onHandleDateClick,
                o = (0, u.useState)(a),
                i = (0, k.Z)(o, 2),
                c = i[0],
                l = i[1],
                r = c.checkInDate,
                s = c.checkOutDate,
                d = c.checkInDay_disp,
                f = c.checkOutDay_disp,
                g = c.totalDays,
                y = (0, u.useCallback)(
                  function () {
                    (0, I.oU)(
                      {
                        checkInDate: c.checkInDate,
                        checkOutDate: c.checkOutDate,
                      },
                      function (t) {
                        var e = (0, I.vc)(t.date),
                          a = (0, I.rv)(e);
                        l(e), n({ date: e, queryDate: a }), (0, I.VX)(e);
                      }
                    );
                  },
                  [c, n]
                ),
                m = (0, k.Z)(d, 2),
                D = m[0],
                p = m[1],
                v = (0, k.Z)(f, 2),
                b = v[0],
                C = v[1],
                L = "".concat(p, "入住"),
                P = "".concat(C, "离开"),
                w = "共".concat(g, "晚");
              return (
                (0, u.useEffect)(
                  function () {
                    (a.checkInDate === r && a.checkOutDate === s) || l(a);
                  },
                  [a, r, s]
                ),
                (0, x.BX)(h.View, {
                  className: "hotel-date",
                  id: "AXBq",
                  onClick: y,
                  children: [
                    (0, x.BX)(h.View, {
                      className: "hotel-date-bd",
                      style: (0, T.LP)(g && !e, "flex"),
                      children: [
                        (0, x.BX)(h.View, {
                          className: "date",
                          children: [
                            D,
                            (0, x.tZ)(h.Text, {
                              className: "txt",
                              children: L,
                            }),
                          ],
                        }),
                        (0, x.BX)(h.View, {
                          className: "date",
                          children: [
                            b,
                            (0, x.tZ)(h.Text, {
                              className: "txt",
                              children: P,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, x.BX)(h.View, {
                      className: "rbox",
                      style: (0, T.LP)(g && !e, "inline-block"),
                      children: [
                        w,
                        (0, x.tZ)(h.Text, { className: "ifont-arr iconfont" }),
                      ],
                    }),
                  ],
                })
              );
            }),
            C = a(56819),
            L = a(96427),
            P = a(92667),
            w = a(81957),
            Z = (0, I.Nj)(),
            H = {
              pageId: "10650060663",
              data: {
                isLoaded: !1,
                scrollHeight: 0,
                isTieyou: p.default.isTieyou,
                delBtnWidth: 100,
                hotelList: [],
                cityList: [],
                date: Z.date,
                smallHoursFlag: Z.smallHoursFlag,
                currentPage: 1,
                totalPage: 0,
                cityId: "",
                checkInDate: "",
                checkOutDate: "",
                currentTab: { name: "收藏", key: "favorite", type: 1 },
                tabs: [
                  { name: "住过", key: "lived", type: 0 },
                  { name: "收藏", key: "favorite", type: 1 },
                  { name: "浏览", key: "visited", type: 2 },
                ],
                noMore: !1,
                starList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                hotelPriceDetailModalVisible: !1,
                hotelPriceDetailModalInfo: {},
                currentTouchIndex: -1,
              },
              onLoad: function (t) {
                var e = (0, T.X5)(t),
                  a = this.data.tabs.find(function (t) {
                    return t.type == ((null == e ? void 0 : e.type) || 1);
                  }),
                  n =
                    (0, T.X5)(e.date) ||
                    (0, I.vc)({
                      checkInDate: (0, I.tf)(),
                      checkOutDate: (0, I.cL)(),
                    });
                this.setData({ currentTab: a, date: n }), this.getUserHistory();
              },
              resetScrollViewHeight: function () {
                var t = this,
                  e = g().createSelectorQuery();
                e.select("#collect-list-box").boundingClientRect(),
                  e.exec(function (e) {
                    if (e && e.length > 0 && e[0] && e[0].height) {
                      var a = e[0].height;
                      t.setData({ scrollHeight: a });
                    } else t.setData({ scrollHeight: 0 });
                  });
              },
              listScrollToBottom: function () {
                var t = this;
                if (!this.data.noMore) {
                  var e = this.data,
                    a = e.cityId,
                    n = e.date,
                    o = e.currentTab,
                    i = e.currentPage,
                    c = {
                      data: {
                        version: v.Z.clientVersion,
                        searchType: o.type,
                        pageIndex: i + 1,
                        pageSize: 10,
                        cityId: a,
                        checkInDate: n.checkInDate,
                        checkOutDate: n.checkOutDate,
                      },
                    };
                  (0, D.showLoading)(),
                    (0, P.dq)(c)
                      .then(function (e) {
                        var a, n;
                        if (
                          1 === e.resultCode &&
                          null !== (a = e.data) &&
                          void 0 !== a &&
                          null !== (n = a.hotelList) &&
                          void 0 !== n &&
                          n.length
                        ) {
                          var o = t.setHotelTagsInfo(e.data.hotelList || []),
                            c = t.data.hotelList.concat(o);
                          t.setData({ hotelList: c, currentPage: i + 1 });
                        } else t.setData({ noMore: !0 });
                      })
                      .catch(function () {})
                      .finally(function () {
                        (0, D.hideLoading)();
                      });
                }
              },
              gotoHotelDetail: function (t) {
                var e = this,
                  a = this.data.date,
                  n = {
                    hotel: t,
                    query: {
                      checkInDate: a.checkInDate,
                      checkOutDate: a.checkOutDate,
                      source: "wechat_collections",
                    },
                  };
                this.navigateTo({ url: "/pages/hotel/detail/detail", data: n }),
                  setTimeout(function () {
                    e.setData({ hotelPriceDetailModalVisible: !1 });
                  }, 200);
              },
              setHotelTagsInfo: function (t) {
                return null == t
                  ? void 0
                  : t.map(function (t) {
                      var e,
                        a,
                        n,
                        o,
                        i = t.recommendWord,
                        c = t.commentView,
                        l = t.hotelAddInfo,
                        r = void 0 === l ? {} : l,
                        s = t.hotelExtraInfo,
                        u = void 0 === s ? {} : s,
                        h = (0, d.Z)((0, d.Z)((0, d.Z)({}, t), r), u);
                      h.commonScore = parseFloat(h.commonScore).toFixed(1);
                      var f =
                        null === (e = h.promotionTagList) || void 0 === e
                          ? void 0
                          : e.findIndex(function (t) {
                              return 1 === t.style;
                            });
                      f > -1 && h.promotionTagList.splice(f, 1);
                      var g =
                        null === (a = r.commentTagList) || void 0 === a
                          ? void 0
                          : a
                              .map(function (t) {
                                return t.text;
                              })
                              .join("，");
                      g && (h.commentView = i || c || g),
                        h.star &&
                          (h.starList = new Array(parseInt(h.star)).fill(1)),
                        (h.nearByPoi || h.zone || h.location) &&
                          (h.zoneStr = h.nearByPoi || h.zone || h.location);
                      var y = h.priceInfo,
                        m = y.couponTag,
                        D = y.couponSalePrice,
                        p = y.salePrice,
                        v = y.noLoginPrice,
                        I = m ? D : p;
                      return (
                        (h.displayPrice = v || I),
                        (h.showDiscountInfo =
                          !!m ||
                          (null === (n = h.promotionDiscountList) ||
                          void 0 === n
                            ? void 0
                            : n.length) > 0),
                        (h.promotionDiscountList =
                          (null === (o = h.promotionDiscountList) ||
                          void 0 === o
                            ? void 0
                            : o.slice(0, 2)) || []),
                        h
                      );
                    });
              },
              getUserHistory: function (t) {
                var e = this,
                  a = this.data,
                  n = a.date,
                  o = a.tabs,
                  i = a.currentTab,
                  c = {
                    data: {
                      version: v.Z.clientVersion,
                      searchType: i.type,
                      pageIndex: this.data.currentPage,
                      pageSize: 10,
                      checkInDate: n.checkInDate,
                      checkOutDate: n.checkOutDate,
                    },
                  };
                t && (c.data.cityId = t),
                  (0, D.showLoading)(),
                  (0, P.dq)(c)
                    .then(function (a) {
                      if (1 === a.resultCode && a.data) {
                        var n = a.data,
                          i = n.hotelList,
                          c = n.browseCount,
                          l = n.favoriteCount,
                          r = n.liveCount,
                          s = n.cityList,
                          d = e.setHotelTagsInfo(i || []),
                          u = o.map(function (t) {
                            return Object.assign({}, t, {
                              count:
                                "lived" === t.key
                                  ? r
                                  : "favorite" === t.key
                                  ? l
                                  : c,
                            });
                          }),
                          h = null != s && s.length ? s[0].cityId : "",
                          f = { hotelList: d, tabs: u };
                        !t && h && (f.cityId = h),
                          null != s && s.length && (f.cityList = s),
                          e.setData(f);
                      }
                    })
                    .catch(function () {})
                    .finally(function () {
                      e.setData({ isLoaded: !0 }), (0, D.hideLoading)();
                    });
              },
              touchS: function (t) {
                1 == t.touches.length &&
                  this.setData({ startX: t.touches[0].clientX });
              },
              touchM: function (t) {
                var e = t.currentTarget.dataset.index;
                if (1 == t.touches.length) {
                  var a = t.touches[0].clientX,
                    n = this.data.startX - a,
                    o = this.data.delBtnWidth,
                    i = "";
                  0 == n || n < 0
                    ? (i = "left:0px")
                    : n > 0 &&
                      ((i = "left:-" + n + "px"),
                      n >= o && (i = "left:-" + o + "px"));
                  var c = "favoriteList[".concat(e, "].txtStyle");
                  this.setData((0, s.Z)({}, c, i));
                }
              },
              touchE: function (t) {
                var e = t.currentTarget.dataset.index;
                if (1 == t.changedTouches.length) {
                  var a = t.changedTouches[0].clientX,
                    n = this.data.startX - a,
                    o = this.data.delBtnWidth,
                    i = n > o / 2 ? "left:-" + o + "px" : "left:0px",
                    c = "favoriteList[".concat(e, "].txtStyle");
                  this.setData((0, s.Z)({}, c, i));
                }
              },
              delCollection: function (t) {
                var e = this,
                  a = {
                    data: {
                      cityId: t.cityId,
                      hotelId: t.hotelId,
                      operateType: 1,
                      searchType: this.data.currentTab.type,
                      version: v.Z.clientVersion,
                    },
                  };
                (0, P.wO)(a)
                  .then(function (t) {
                    1 === t.resultCode &&
                      (e.setData({ currentPage: 1, currentTouchIndex: -1 }),
                      e.getUserHistory());
                  })
                  .catch(function () {
                    e.setData({ currentPage: 1, currentTouchIndex: -1 }),
                      e.getUserHistory();
                  });
              },
              onTabClick: function (t) {
                this.setData({
                  currentTab: t,
                  currentPage: 1,
                  noMore: !1,
                  currentTouchIndex: -1,
                }),
                  this.getUserHistory();
              },
              onDateChosen: function (t) {
                var e = this;
                this.setData({ date: t.date }, function () {
                  e.getUserHistory();
                });
              },
              onCityClick: function (t) {
                this.setData({ cityId: t, currentPage: 1, noMore: !1 }),
                  this.getUserHistory(t);
              },
              showHotelPriceDetailModal: function (t) {
                this.setData({
                  hotelPriceDetailModalVisible: !0,
                  hotelPriceDetailModalInfo: {
                    hotel: t,
                    price: t.priceInfo.discountPrice,
                    totalPrice: t.priceInfo.couponSalePrice,
                    discountList: t.hotelAddInfo.promotionDetailList,
                    maskInfo: t.priceInfo.maskTag,
                  },
                });
              },
              onCloseHotelPriceDetailModal: function () {
                this.setData({ hotelPriceDetailModalVisible: !1 });
              },
              onChangeCurrentTouchIndex: function (t) {
                this.setData({ currentTouchIndex: t });
              },
              deleteClickHotel: function (t) {
                console.log(t);
              },
            },
            V =
              (0, w.h)()(
                (n =
                  m()(H)(
                    (n = (function (t) {
                      (0, l.Z)(a, t);
                      var e = (0, r.Z)(a);
                      function a() {
                        return (0, i.Z)(this, a), e.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              var t = this,
                                e = this.data,
                                a = e.hotelList,
                                n = e.isLoaded,
                                o = e.currentTab,
                                i = e.tabs,
                                c = e.date,
                                l = e.cityList,
                                r = e.cityId,
                                s = e.starList,
                                d = e.hotelPriceDetailModalVisible,
                                f = e.hotelPriceDetailModalInfo,
                                g = e.currentTouchIndex;
                              return (0, x.BX)(h.View, {
                                className: "collect-box",
                                children: [
                                  (0, x.tZ)(h.View, {
                                    className: "banner",
                                    children: i.map(function (e) {
                                      var a = (0, T.gP)(
                                          e.key === o.key,
                                          " color-primary"
                                        ),
                                        n = "tab"
                                          .concat(a, " ")
                                          .concat(p.default.zxTyStr);
                                      return (0, x.BX)(
                                        h.View,
                                        {
                                          className: n,
                                          id: "AXGl",
                                          onClick: function () {
                                            return t.onTabClick(e);
                                          },
                                          children: [
                                            (0, x.tZ)(h.View, {
                                              className: "name",
                                              children: e.name,
                                            }),
                                            (0, x.tZ)(h.View, {
                                              className: "active-line",
                                            }),
                                          ],
                                        },
                                        e.key
                                      );
                                    }),
                                  }),
                                  (0, x.tZ)(h.View, {
                                    className: "date-wrap",
                                    children: (0, x.tZ)(b, {
                                      date: c,
                                      onHandleDateClick: this.onDateChosen,
                                    }),
                                  }),
                                  (null == l ? void 0 : l.length) > 0 &&
                                    (0, x.tZ)(h.ScrollView, {
                                      className: "city-wrap ".concat(
                                        p.default.zxTyStr
                                      ),
                                      scrollX: !0,
                                      children: l.map(function (e) {
                                        return (0, x.tZ)(
                                          h.View,
                                          {
                                            className: "city".concat(
                                              (0, T.gP)(
                                                e.cityId === r,
                                                " active"
                                              )
                                            ),
                                            id: "AXGm",
                                            onClick: function () {
                                              return t.onCityClick(e.cityId);
                                            },
                                            children: e.cityName,
                                          },
                                          e.cityId
                                        );
                                      }),
                                    }),
                                  n &&
                                    (0, x.BX)(h.View, {
                                      className: "collect-list-box",
                                      id: "collect-list-box",
                                      children: [
                                        0 === (null == a ? void 0 : a.length) &&
                                          (0, x.BX)(u.default.Fragment, {
                                            children: [
                                              (0, x.tZ)(h.Image, {
                                                src: "https://images3.c-ctrip.com/zt/hotel/hotel-kongzhuangtai.png",
                                                className: "empty-image",
                                              }),
                                              (0, x.tZ)(h.Text, {
                                                className: "empty-tit",
                                                children:
                                                  "暂无收藏，快去添加您喜爱的酒店吧",
                                              }),
                                            ],
                                          }),
                                        0 !== (null == a ? void 0 : a.length) &&
                                          (0, x.tZ)(h.ScrollView, {
                                            scrollY: !0,
                                            className:
                                              "hotel-sel-list " +
                                              p.default.zxTyStr,
                                            onScrollToLower:
                                              this.listScrollToBottom,
                                            children: a.map(function (e, a) {
                                              return (0, x.tZ)(
                                                u.default.Fragment,
                                                {
                                                  children: (0, x.tZ)(C.Z, {
                                                    index: a,
                                                    hotel: e,
                                                    starList: s,
                                                    itemType: "normal",
                                                    isNeedTouch: !0,
                                                    currentTouchIndex: g,
                                                    onChangeCurrentTouchIndex:
                                                      function (e) {
                                                        return t.onChangeCurrentTouchIndex(
                                                          e
                                                        );
                                                      },
                                                    toHotelDetail: function () {
                                                      return t.gotoHotelDetail(
                                                        e
                                                      );
                                                    },
                                                    showHotelPriceDetailModal:
                                                      function () {
                                                        return t.showHotelPriceDetailModal(
                                                          e
                                                        );
                                                      },
                                                    onDeleteEvent: function () {
                                                      return t.delCollection(e);
                                                    },
                                                  }),
                                                },
                                                a
                                              );
                                            }),
                                          }),
                                      ],
                                    }),
                                  (0, x.tZ)(h.View, {
                                    children: (0, x.tZ)(L.Z, {
                                      visible: d,
                                      modalInfo: f,
                                      onClose:
                                        this.onCloseHotelPriceDetailModal,
                                      onComfirm: function () {
                                        return t.gotoHotelDetail(f.hotel);
                                      },
                                    }),
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        a
                      );
                    })(u.default.Component))
                  ) || n)
              ) || n;
          Page(
            (0, o.createPageConfig)(
              V,
              "pages/hotel/packages/collect/collect",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "收藏/浏览",
                navigationBarBackgroundColor: "#ffffff",
                backgroundColorTop: "#ffffff",
                backgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                backgroundColorBottom: "#ffffff",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(87328);
        }),
          t.O();
      },
    ]);
})();
