!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [87628],
      {
        15381: function (t, e, i) {
          var a,
            c = i(32180),
            n = i(57042),
            s = i(24460),
            o = i(21867),
            r = i(86066),
            l = i(298),
            d = i(52500),
            h = i(71515),
            u = (i(92954), i(48792)),
            m = i.n(u),
            y = i(79792),
            p = i(79910),
            f = i(79404),
            w = i(34229),
            I = i(39173),
            N = i(92667),
            g = i(80626),
            v = i(27113),
            k = i(30071),
            b = i(81957),
            x = i(90668),
            Z = i(48813),
            D = {
              23: {
                title: "热搜关键字",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/icon_sousuo/ic_resou@3x.webp",
              },
              10: {
                title: "机场车站",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/icon_sousuo/ic_jichang@3x.webp",
              },
              8: {
                title: "商业区",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/icon_sousuo/ic_shangquan@3x.webp",
              },
              2: {
                title: "品牌",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/icon_sousuo/ic_pinpai@3x.webp",
              },
              1: {
                title: "特色",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/icon_sousuo/ic_tesetuijian@3x.webp",
              },
              11: {
                title: "地铁站",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/icon_sousuo/ic_ditiezhan@3x.webp",
              },
              9: {
                title: "行政区",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/icon_sousuo/ic_xingzhengqu@3x.webp",
              },
              18: {
                title: "景点",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/icon_sousuo/ic_haiwai@3x.webp",
              },
              26: {
                title: "医院",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/icon_sousuo/ic_yiyuan@3x.webp",
              },
              25: {
                title: "大学",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/icon_sousuo/ic_school@3x.webp",
              },
            },
            C = {
              pageId: "10650060661",
              data: {
                inputKeyword: "",
                noResultDesc: "为您推荐其他城市查询结果(酒店起价均为参考价)",
                recommend: {},
                recommendList: [],
                searchList: [],
                inputFocus: !0,
                resultVisiable: !1,
                cityInfo: {},
              },
              onLoad: function (t) {
                var e = t.cityId,
                  i = void 0 === e ? "2" : e,
                  a = t.cityName,
                  c = void 0 === a ? "上海" : a,
                  n = t.cityAddress,
                  s = t.checkInDate,
                  o = void 0 === s ? (0, g.tf)() : s,
                  r = t.checkOutDate,
                  l = void 0 === r ? (0, g.cL)() : r,
                  d = t._query,
                  h = t.recommendSearch;
                if (
                  ((this.homeQuery = d),
                  (this.query = {
                    cityId: i,
                    cityName: c,
                    cityAddress: n,
                    checkInDate: o,
                    checkOutDate: l,
                  }),
                  h)
                ) {
                  var u = (0, g.X5)(h);
                  this.setData({ recommendSearch: u });
                }
                this.getCurrentCityInfo(),
                  this.getKeywordHistory(),
                  this.getHotRecommendFilters(),
                  (this.throttleKeywordInput = p.Z.debounce(
                    this.onKeywordInput,
                    300
                  ));
              },
              getCurrentCityInfo: function () {
                var t = this;
                (0, v.PA)(
                  function (e) {
                    (null == e ? void 0 : e.cityId) &&
                      t.setData({ cityInfo: e });
                  },
                  function () {}
                );
              },
              searchRef: function (t) {
                this.searchNode = t;
              },
              onKeywordInput: function (t) {
                var e = t.detail.value;
                this.setData({ inputKeyword: e.trim() }),
                  this.getPoiList(e.trim());
              },
              onKeywordClear: function () {
                (this.searchNode.value = ""),
                  this.setData({
                    inputKeyword: "",
                    searchList: [],
                    resultVisiable: !1,
                  });
              },
              getPoiList: function (t) {
                var e = this;
                if (!t) return this.onKeywordClear();
                var i = new Date().getTime();
                if (
                  (this._lastTime || (this._lastTime = 0),
                  !(i - this._lastTime < 500))
                ) {
                  (this._lastTime = i), (this._newMediaSource = -1);
                  var a = this.query,
                    c = a.cityId,
                    n = a.checkInDate,
                    s = a.checkOutDate,
                    o = this.data.cityInfo,
                    r = {
                      data: {
                        cityId: c,
                        checkInDate: n,
                        checkOutDate: s,
                        clientVersion: f.Z.clientVersion,
                        keyWord: t,
                        type: 0,
                      },
                    };
                  null != o &&
                    o.lat &&
                    (r.data.locationInfo = {
                      latitude: Number(o.lat),
                      locationCityId: o.cityId,
                      longitude: Number(o.lng),
                    }),
                    (0, N.TM)(r)
                      .then(function (i) {
                        var a;
                        if (1 === (null == i ? void 0 : i.resultCode))
                          if (
                            (null === (a = i.data) || void 0 === a
                              ? void 0
                              : a.length) > 0
                          ) {
                            var c = e.handleSearchList(i.data),
                              n = c.filter(function (t) {
                                return t.isSameCity;
                              }),
                              s = c.filter(function (t) {
                                return !t.isSameCity;
                              });
                            e.setData({
                              recommendList: s,
                              recommend: i.recommend,
                              searchList: n,
                              resultVisiable: !0,
                            }),
                              e.matchNewMediaHotelId(t) &&
                                (e._newMediaSource = t.substring(0, 1));
                          } else
                            e.setData({
                              recommendList: [],
                              recommend: {},
                              searchList: [],
                              resultVisiable: !0,
                            });
                      })
                      .catch(function (t) {
                        console.log(t);
                      });
                }
              },
              matchNewMediaHotelId: function (t) {
                return !!t && /^\d{6,10}$/.test(t);
              },
              handleSearchList: function (t) {
                var e = this;
                return t.map(function (t) {
                  var i = t.keyWordType,
                    a = t.itemName,
                    c = t.matchCityInfo,
                    n = t.hotelInfo,
                    s = t.distanceDesc,
                    o = t.address,
                    r =
                      null == c ||
                      !c.cityName ||
                      c.cityName === e.query.cityName,
                    d = a,
                    h = "";
                  if (
                    (null != c && c.cityName && !r
                      ? (d += "，".concat(c.cityName))
                      : (null != c && c.cityName) ||
                        ((c.cityId = e.query.cityId),
                        (c.cityName = e.query.cityName),
                        (c.cityAddress = e.query.cityAddress)),
                    1 === i && n)
                  ) {
                    null != n &&
                      n.matchedAttribute &&
                      (h = "".concat(n.matchedAttribute, "/")),
                      null != n &&
                        n.featureName &&
                        (h = "".concat(n.featureName, "/")),
                      null != n &&
                        n.customerPoint &&
                        (h += "".concat(n.customerPoint, "分/")),
                      null != c &&
                        c.cityName &&
                        (h += "".concat(c.cityName, "/"));
                    var u = null == s ? void 0 : s.replace("<", "小于"),
                      m = null == u ? void 0 : u.replace(">", "大于");
                    m ? (h += m) : null != n && n.zoneName && (h += n.zoneName);
                  } else {
                    var y,
                      p =
                        null === (y = s || o) || void 0 === y
                          ? void 0
                          : y.replace("<", "小于"),
                      f = null == p ? void 0 : p.replace(">", "大于");
                    null != c && c.cityName
                      ? (h = f
                          ? "".concat(c.cityName, "/").concat(f)
                          : c.cityName)
                      : f && (h = f);
                  }
                  return (0,
                  l.Z)((0, l.Z)({}, t), {}, { hotelInfo: (0, l.Z)((0, l.Z)({}, n), {}, { zoneNameStr: h }), displayName: d, isSameCity: r, isHotel: !!n });
                });
              },
              onClickSearchBtn: function () {
                var t = this.state,
                  e = t.recommendSearch,
                  i = t.inputKeyword,
                  a = this.query,
                  c = a.cityAddress,
                  n = {
                    cityId: a.cityId,
                    cityName: a.cityName,
                    cityAddress: c,
                  },
                  s = { data: {} };
                i
                  ? ((s.data.title = i),
                    (s.data.value = i),
                    (s.data.type = "23"),
                    (s.data.subType = "1"),
                    (s.data.sceneBitMap = 4),
                    (s.data.scenarioType = "HotKeyword"),
                    (s.data.filterID = "".concat("23", "|").concat(i)),
                    (s.scenarioNames = ["关键字"]))
                  : e && (s = e);
                var o = { matchCityInfo: n, item: s, isFilter: !0 };
                this.onSearchClick(null, o, -1);
              },
              onSearchClick: function (t, e, i) {
                null == t || t.stopPropagation();
                var a = e.matchCityInfo,
                  c = a.cityId,
                  n = a.cityName,
                  s = a.cityAddress,
                  o = e.isFilter,
                  r = o ? e.item : e,
                  l = o ? "filter" : "search",
                  d = { cityId: c, cityName: n, cityAddress: s };
                i > -1 &&
                  this.ubtTrace(210540, {
                    bizKey: "hotel_search_click",
                    index: i,
                  }),
                  this.setKeywordHistory({ city: d, item: r }, l),
                  o
                    ? this.goBackWithData({ city: d, item: r })
                    : this.handleSearchAction(r);
              },
              handleSearchAction: function (t) {
                var e = t.isHotel,
                  i = t.item,
                  a = t.matchCityInfo,
                  c = a.cityId,
                  n = a.cityName,
                  s = a.cityAddress;
                if (((i.data.isHotel = e), e && this.homeQuery)) {
                  var o = JSON.parse(decodeURIComponent(this.homeQuery));
                  return (
                    (o.queryModel.cityId = c),
                    (o.queryModel.cityName = n),
                    (o.queryModel.cityAddress = s),
                    (o.keywordInfo = i),
                    (o.isHotelSearch = !0),
                    this.navigateTo({ url: "/pages/hotel/list/list", data: o }),
                    void (this.homeQuery = null)
                  );
                }
                this.goBackWithData({
                  city: { cityId: c, cityName: n, cityAddress: s || n },
                  item: i,
                });
              },
              toHotelDetail: function (t, e) {
                var i = {
                  query: (0, l.Z)(
                    (0, l.Z)({}, this.query),
                    {},
                    {
                      cityId: e.cityId,
                      cityName: e.cityName,
                      source:
                        -1 === this._newMediaSource
                          ? "wechat_QsearchHotel|"
                          : "newmedia".concat(this._newMediaSource),
                    }
                  ),
                  hotel: t,
                  geoList: [],
                  posrem: "",
                  positionRemarkType: 0,
                };
                this.navigateTo({ url: "/pages/hotel/detail/detail", data: i });
              },
              getKeywordHistory: function () {
                var t = k.Xn.getAttr("keywordHistory") || [];
                this.setData({ historyList: t });
              },
              clearKeywordHistory: function () {
                k.Xn.setAttr("keywordHistory", []),
                  this.setData({ historyList: [] });
              },
              setKeywordHistory: function (t, e) {
                var i = t.city,
                  a = t.item,
                  c = this.data.historyList,
                  n = "search" === e ? a.item : a,
                  s = c.findIndex(function (t) {
                    var e = "search" === t.type ? t.data.item : t.data;
                    return (
                      n.data.filterID === e.data.filterID &&
                      n.data.title === e.data.title
                    );
                  });
                s > -1 && c.splice(s, 1),
                  c.unshift({ type: e, city: i, data: t.item });
                var o = c.slice(0, 8);
                this.setData({ historyList: o }),
                  k.Xn.setAttr("keywordHistory", o);
              },
              handleHistoryItemClick: function (t) {
                var e = t.currentTarget.dataset.index,
                  i = this.data.historyList,
                  a = i[e],
                  c = a.type,
                  n = a.city,
                  s = a.data;
                if (
                  (i.splice(e, 1),
                  i.unshift(a),
                  this.setData({ historyList: i }),
                  k.Xn.setAttr("keywordHistory", i),
                  "search" === c)
                ) {
                  var o = s.isHotel,
                    r = s.item,
                    l = s.matchCityInfo,
                    d = l.cityId,
                    h = l.cityName,
                    u = l.cityAddress;
                  (r.data.isHotel = o),
                    this.goBackWithData({
                      city: { cityId: d, cityName: h, cityAddress: u },
                      item: r,
                    });
                } else
                  "filter" === c && this.goBackWithData({ city: n, item: s });
              },
              getHotRecommendFilters: function () {
                var t = this,
                  e = this.query,
                  i = {
                    data: {
                      cityId: e.cityId,
                      districtId: e.districtId || "0",
                      checkInDate: e.checkInDate,
                      checkOutDate: e.checkOutDate,
                      clientVersion: f.Z.clientVersion,
                      scenarios: ["7"],
                    },
                  };
                (0, I.r3)(i)
                  .then(function (e) {
                    var i = e || {},
                      a = i.resultCode,
                      c = i.data,
                      n = void 0 === c ? {} : c;
                    1 === a &&
                      (console.log(n),
                      t.setData({ filter: t.handleFilterData(n.filters[0]) }));
                  })
                  .catch(function (t) {
                    console.log(t);
                  });
              },
              handleFilterData: function (t) {
                return (
                  t.subItems.forEach(function (t) {
                    console.log(t.data.filterID, t.data.title),
                      (t.data.icon = D[t.data.type]
                        ? D[t.data.type].icon
                        : "ifont-shot"),
                      (t.showMore = !1),
                      t.subItems.forEach(function (e) {
                        (e.operation && e.operation.otherMutexIds) ||
                          (t.operation &&
                            t.operation.otherMutexIds &&
                            (e.operation.otherMutexIds =
                              t.operation.otherMutexIds)),
                          (e.operation && e.operation.selfMutexIds) ||
                            (t.operation &&
                              t.operation.selfMutexIds &&
                              (e.operation.selfMutexIds =
                                t.operation.selfMutexIds));
                      });
                  }),
                  t
                );
              },
              showMore: function (t) {
                var e = t.currentTarget.dataset.index,
                  i = this.data.filter,
                  a = i.subItems[e].showMore;
                (i.subItems[e].showMore = !a), this.setData({ filter: i });
              },
              handleFilterItemClick: function (t) {
                var e = t.currentTarget.dataset,
                  i = e.index,
                  a = e.subindex,
                  c = this.data.filter.subItems[i].subItems[a];
                this.setKeywordHistory(
                  {
                    city: {
                      cityId: this.query.cityId,
                      cityName: this.query.cityName,
                      cityAddress:
                        this.query.cityAddress || this.query.cityName,
                    },
                    item: c,
                  },
                  "filter"
                ),
                  this.goBackWithData({ item: c });
              },
              goBackWithData: function (t) {
                this.invokeCallback(t), this.navigateBack();
              },
              handleInputFocus: function () {
                this.setData({ inputFocus: !0 });
              },
              handleInputBlur: function () {
                this.setData({ inputFocus: !1 });
              },
            },
            V = d.default.memo(function (t) {
              var e,
                i = t.item,
                a = t.inputKeyword,
                c = t.onSearchClick,
                n = i.displayName,
                s = i.hotelInfo,
                o = i.icon,
                r = i.keyName,
                d = i.metrolineList,
                u = i.item,
                m = {
                  color: y.default.isTieyou ? "#FC6E51" : "#0080FF",
                  style:
                    "overflow:hidden;white-space:nowrap;text-overflow:ellipsis;",
                },
                p = (0, x.BH)(n, a, m),
                f = (0, x.BH)(s.zoneNameStr, a, m);
              return (0, Z.BX)(h.View, {
                className: "item",
                id: "AXDv",
                onClick: function (t) {
                  return c(t, i);
                },
                children: [
                  (0, Z.BX)(h.View, {
                    className: "top",
                    children: [
                      o
                        ? (0, Z.tZ)(h.Image, { className: "icon", src: o })
                        : (0, Z.tZ)(h.Text, {
                            className: "ifont-search iconfont",
                          }),
                      (0, Z.tZ)(w.ZtRichText, {
                        className: "name",
                        space: "nbsp",
                        nodes: p,
                      }),
                      s.startPrice > 0
                        ? (0, Z.tZ)(h.View, {
                            className: "price color-red",
                            children: s.startPrice,
                          })
                        : (0, Z.tZ)(h.View, { className: "rbox", children: r }),
                    ],
                  }),
                  (0, Z.BX)(h.View, {
                    className: "bottom",
                    children: [
                      !!f &&
                        (0, Z.tZ)(h.View, {
                          className: "wrap txt",
                          children: (0, Z.tZ)(w.ZtRichText, {
                            space: "nbsp",
                            nodes: f,
                          }),
                        }),
                      (null == d ? void 0 : d.length) > 0 &&
                        (0, Z.tZ)(h.View, {
                          className: "wrap",
                          children: d.map(function (t, e) {
                            return (0,
                            Z.tZ)(h.Text, { className: "line", style: "background-color:".concat(t.color), children: t.title }, e);
                          }),
                        }),
                      (null == u || null === (e = u.subItems) || void 0 === e
                        ? void 0
                        : e.length) > 0 &&
                        (0, Z.tZ)(h.View, {
                          className: "wrap subitem-wrap",
                          children: u.subItems
                            .filter(function (t) {
                              return !(!t.extra.subTitle && !t.data.title);
                            })
                            .map(function (t, e) {
                              var a = t.data.title.split("-")[1],
                                n = t.extra.subTitle || a || t.data.title;
                              return (0, Z.tZ)(
                                h.View,
                                {
                                  className: "subitem",
                                  id: "AXDw",
                                  onClick: function (e) {
                                    return c(
                                      e,
                                      (0, l.Z)(
                                        (0, l.Z)({}, i),
                                        {},
                                        { item: t, isFilter: !0 }
                                      )
                                    );
                                  },
                                  children: n,
                                },
                                e
                              );
                            }),
                        }),
                    ],
                  }),
                ],
              });
            }),
            B =
              (0, b.h)()(
                (a =
                  m()(C)(
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
                              var t,
                                e = this,
                                i = this.data,
                                a = i.inputKeyword,
                                c = i.noResultDesc,
                                n = i.searchList,
                                s = i.historyList,
                                o = i.filter,
                                r = i.recommend,
                                l = i.recommendSearch,
                                u = i.recommendList,
                                m = i.inputFocus,
                                p = i.resultVisiable,
                                f = (0, x.gP)(y.default.isBaidu, " swan"),
                                w = "container "
                                  .concat(f, " ")
                                  .concat(y.default.zxTyStr),
                                I =
                                  (null == l ||
                                  null === (t = l.data) ||
                                  void 0 === t
                                    ? void 0
                                    : t.title) || "关键字/位置/品牌/酒店名",
                                N = a || l;
                              return (0, Z.BX)(h.View, {
                                className: w,
                                children: [
                                  (0, Z.tZ)(h.View, {
                                    className: "searchbar",
                                    children: (0, Z.BX)(h.View, {
                                      className: "selectbar-input ".concat(
                                        m ? "focus" : ""
                                      ),
                                      children: [
                                        (0, Z.tZ)(h.Text, {
                                          className: "ifont-search iconfont",
                                        }),
                                        (0, Z.tZ)(h.Input, {
                                          focus: !0,
                                          maxlength: "60",
                                          placeholder: I,
                                          className: "search-text",
                                          placeholderClass:
                                            "search-placeholder",
                                          type: "text",
                                          ref: function (t) {
                                            return e.searchRef(t);
                                          },
                                          onInput: this.throttleKeywordInput,
                                          onFocus: this.handleInputFocus,
                                          onBlur: this.handleInputBlur,
                                        }),
                                        N &&
                                          (0, Z.BX)(h.View, {
                                            className: "search-cancel-wrap",
                                            children: [
                                              (0, Z.tZ)(h.Text, {
                                                className: "ifont-del iconfont",
                                                id: "AXDx",
                                                onClick: this.onKeywordClear,
                                              }),
                                              (0, Z.tZ)(h.View, {
                                                className: "btn btn-primary",
                                                id: "AXDy",
                                                onClick: this.onClickSearchBtn,
                                                children: "搜索",
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  }),
                                  p &&
                                    (0, Z.tZ)(h.View, {
                                      className: "search-result-wrap",
                                      children: (0, Z.BX)(h.View, {
                                        className: "search-result",
                                        children: [
                                          !(null == r || !r.resultDesc) &&
                                            (0, Z.BX)(h.View, {
                                              className: "recommend rec-top",
                                              children: [
                                                (0, Z.tZ)(h.View, {
                                                  className: "title",
                                                  children: r.resultDesc,
                                                }),
                                                (0, Z.tZ)(h.View, {
                                                  className: "desc",
                                                  children: c,
                                                }),
                                              ],
                                            }),
                                          null == n
                                            ? void 0
                                            : n.map(function (t, i) {
                                                return (0, Z.tZ)(
                                                  d.default.Fragment,
                                                  {
                                                    children: (0, Z.tZ)(V, {
                                                      item: t,
                                                      inputKeyword: a,
                                                      onSearchClick: function (
                                                        t,
                                                        a
                                                      ) {
                                                        return e.onSearchClick(
                                                          t,
                                                          a,
                                                          i
                                                        );
                                                      },
                                                    }),
                                                  },
                                                  i
                                                );
                                              }),
                                          !(null != n && n.length) &&
                                            !(null != u && u.length) &&
                                            (0, Z.tZ)(h.View, {
                                              className: "no-result",
                                              children:
                                                "无搜索结果，请尝试修改后重试",
                                            }),
                                          u.length > 0 &&
                                            !(null != r && r.resultDesc) &&
                                            (0, Z.tZ)(h.View, {
                                              className: "recommend ".concat(
                                                null != n && n.length
                                                  ? ""
                                                  : "rec-top"
                                              ),
                                              children: (0, Z.tZ)(h.View, {
                                                className: "desc",
                                                children: c,
                                              }),
                                            }),
                                          u.map(function (t, i) {
                                            return (0, Z.tZ)(
                                              d.default.Fragment,
                                              {
                                                children: (0, Z.tZ)(V, {
                                                  item: t,
                                                  inputKeyword: a,
                                                  onSearchClick: function (
                                                    t,
                                                    a
                                                  ) {
                                                    return e.onSearchClick(
                                                      t,
                                                      a,
                                                      i
                                                    );
                                                  },
                                                }),
                                              },
                                              i
                                            );
                                          }),
                                        ],
                                      }),
                                    }),
                                  (0, Z.tZ)(h.View, {
                                    className: "contentkeyword flex-1",
                                    children: (0, Z.BX)(h.View, {
                                      className: "keyword-wrap",
                                      children: [
                                        (null == s ? void 0 : s.length) > 0 &&
                                          (0, Z.BX)(h.View, {
                                            className: "search-history",
                                            children: [
                                              (0, Z.BX)(h.View, {
                                                className: "search-keywords-hd",
                                                children: [
                                                  (0, Z.tZ)(h.Image, {
                                                    src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/icon_sousuo/ic_lishi@3x.webp",
                                                    className: "hd-icon",
                                                    webp: !0,
                                                  }),
                                                  (0, Z.tZ)(h.View, {
                                                    className: "cont",
                                                    children: "搜索历史",
                                                  }),
                                                  (0, Z.tZ)(h.Text, {
                                                    className: "rbox",
                                                    id: "AXDz",
                                                    onClick:
                                                      this.clearKeywordHistory,
                                                    children: "清空",
                                                  }),
                                                ],
                                              }),
                                              (0, Z.tZ)(h.View, {
                                                className: "search-keywords-bd",
                                                children: s
                                                  .slice(0, 4)
                                                  .map(function (t, i) {
                                                    return (0,
                                                    Z.tZ)(h.View, { className: "item", "data-index": i, id: "AXEA", onClick: e.handleHistoryItemClick, children: (0, Z.tZ)(h.Text, { children: "search" === t.type ? t.data.itemName : t.data.data.title }) }, "index");
                                                  }),
                                              }),
                                            ],
                                          }),
                                        null == o
                                          ? void 0
                                          : o.subItems.map(function (t, i) {
                                              return (0, Z.BX)(
                                                h.View,
                                                {
                                                  className: "search-content",
                                                  children: [
                                                    (0, Z.BX)(h.View, {
                                                      className:
                                                        "search-keywords-hd",
                                                      children: [
                                                        (0, Z.tZ)(h.Image, {
                                                          src: t.data.icon,
                                                          className: "hd-icon",
                                                          webp: !0,
                                                        }),
                                                        (0, Z.tZ)(h.View, {
                                                          className: "cont",
                                                          children:
                                                            t.data.title,
                                                        }),
                                                        t.subItems.length > 8 &&
                                                          (0, Z.BX)(h.View, {
                                                            className: "rbox",
                                                            "data-index": i,
                                                            id: "AXEB",
                                                            onClick: e.showMore,
                                                            children: [
                                                              t.showMore
                                                                ? "收起"
                                                                : "展开",
                                                              (0, Z.tZ)(
                                                                h.Text,
                                                                {
                                                                  className:
                                                                    "ifont-more " +
                                                                    (t.showMore
                                                                      ? "closed"
                                                                      : "open") +
                                                                    " iconfont",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                      ],
                                                    }),
                                                    (0, Z.tZ)(h.View, {
                                                      className:
                                                        "search-keywords-bd",
                                                      children: t.subItems
                                                        .filter(function (
                                                          e,
                                                          i
                                                        ) {
                                                          return (
                                                            t.showMore || i < 8
                                                          );
                                                        })
                                                        .map(function (t, a) {
                                                          var c;
                                                          return (0,
                                                          Z.tZ)(d.default.Fragment, { children: (0, Z.BX)(h.View, { id: "AXHU", "data-index": i, "data-subindex": a, className: "item ".concat(t.data.title.length > 4 ? "scale" : ""), onClick: e.handleFilterItemClick, children: [(null === (c = t.extra) || void 0 === c ? void 0 : c.unSelectIcon) && (0, Z.tZ)(h.Image, { className: "hicon", src: t.extra.unSelectIcon }), (0, Z.tZ)(h.Text, { children: t.data.title })] }) }, a);
                                                        }),
                                                    }),
                                                  ],
                                                },
                                                "index"
                                              );
                                            }),
                                      ],
                                    }),
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(d.default.Component))
                  ) || a)
              ) || a;
          Page(
            (0, c.createPageConfig)(
              B,
              "pages/hotel/keywordsearch/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#f5f5f5",
                backgroundColorTop: "#fff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "关键词搜索",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(15381);
        }),
          t.O();
      },
    ]);
})();
