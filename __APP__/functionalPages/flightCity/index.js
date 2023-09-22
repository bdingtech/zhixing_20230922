!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/6c29063ea7407d5aad2c6709ea72811d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [57279],
      {
        44067: function (t, e, i) {
          var n,
            a = i(32180),
            c = i(57042),
            r = i(24460),
            o = i(21867),
            l = i(86066),
            s = i(298),
            y = i(90983),
            d = i(22276),
            u = i(93212),
            h = i(52500),
            C = i(71515),
            m = i(92954),
            f = i.n(m),
            p = i(48792),
            N = i.n(p),
            I = i(79792),
            g = i(79910),
            v = i(49120),
            Z = i(55916),
            k = i(13025),
            b = i(27113),
            D = i(59086),
            T = i(81957),
            w = i(17377),
            S = i(8271),
            L = i.n(S),
            V = i(12525),
            x = i(90129),
            B = i(48813),
            H = h.default.memo(function (t) {
              var e = t.isIntl,
                i = t.tag,
                n = t.cityList,
                a = t.handleCityItemClick,
                c = (0, h.useState)(!1),
                r = (0, x.Z)(c, 2),
                o = r[0],
                l = r[1];
              return (0, B.BX)(C.Block, {
                children: [
                  (0, B.tZ)(C.View, {
                    className: "city-tag",
                    id: "".concat(i).concat(e ? "-intl" : ""),
                    children: i,
                  }),
                  (0, B.BX)(C.View, {
                    className: "city-module_items " + I.default.zxTyStr,
                    children: [
                      n.map(function (t, e) {
                        return (0, B.BX)(
                          C.Block,
                          {
                            children: [
                              e < 11 &&
                                (0, B.tZ)(C.View, {
                                  className:
                                    "item-s " + (t.selected ? "cur" : ""),
                                  onClick: function () {
                                    return a({
                                      name: t.cityName,
                                      id: t.countryID,
                                      type: "all",
                                      tag: i,
                                      index: e,
                                    });
                                  },
                                  children: (0, B.tZ)(C.View, {
                                    className: "name",
                                    children: t.cityName,
                                  }),
                                }),
                              e >= 11 &&
                                o &&
                                (0, B.tZ)(C.View, {
                                  className:
                                    "item-s " + (t.selected ? "cur" : ""),
                                  onClick: function () {
                                    return a({
                                      name: t.cityName,
                                      id: t.countryID,
                                      type: "all",
                                      tag: i,
                                      index: e,
                                    });
                                  },
                                  children: (0, B.tZ)(C.View, {
                                    className: "name",
                                    children: t.cityName,
                                  }),
                                }),
                            ],
                          },
                          e
                        );
                      }),
                      n.length > 11 &&
                        (0, B.tZ)(C.View, {
                          className: "item-s",
                          onClick: function () {
                            l(!o);
                          },
                          children: (0, B.BX)(C.View, {
                            className: "name flex-align-items-center",
                            children: [
                              o ? "收起" : "更多",
                              (0, B.tZ)(C.Text, {
                                className: "ifont-arr iconfont ".concat(
                                  o ? "open" : ""
                                ),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              });
            }),
            X = h.default.memo(function (t) {
              var e = t.isIntl,
                i = t.currentCity,
                n = t.handleCityItemClick,
                a = t.nearbyCityInfos;
              return (0, B.BX)(C.Block, {
                children: [
                  (0, B.tZ)(C.View, {
                    className: "city-tag",
                    id: "position ".concat(e ? "-intl" : ""),
                    children: "当前城市",
                  }),
                  (0, B.BX)(C.View, {
                    className: "city-module_items " + I.default.zxTyStr,
                    children: [
                      (0, B.tZ)(C.View, {
                        className: "item-s cur",
                        id: "current-city".concat(e ? "-intl" : ""),
                        onClick: function () {
                          return n({
                            name: i.cityName,
                            id: i.countryID,
                            type: "current",
                          });
                        },
                        children: (0, B.BX)(C.View, {
                          className: "name",
                          children: [
                            (0, B.tZ)(C.Text, {
                              className:
                                "ifont-location iconfont color-primary",
                            }),
                            i.cityName,
                          ],
                        }),
                      }),
                      null == a
                        ? void 0
                        : a.map(function (t, e) {
                            return (0, B.tZ)(
                              C.View,
                              {
                                className:
                                  "item-s " + (t.selected ? "cur" : ""),
                                onClick: function () {
                                  return n({
                                    name: t.cityName,
                                    id: t.international ? 2 : 1,
                                    type: "nearby",
                                    index: e,
                                  });
                                },
                                children: (0, B.BX)(C.View, {
                                  className: "name",
                                  children: [
                                    t.cityName,
                                    (0, B.tZ)(C.View, {
                                      className: "tgrey",
                                      children: t.distance,
                                    }),
                                  ],
                                }),
                              },
                              e
                            );
                          }),
                    ],
                  }),
                ],
              });
            }),
            _ = h.default.memo(function (t) {
              var e = t.isIntl,
                i = t.type,
                n = t.tag,
                a = t.cityList,
                c = t.handleCityItemClick;
              return (0, B.BX)(C.Block, {
                children: [
                  (0, B.tZ)(C.View, {
                    className: "city-tag",
                    id: "".concat(i).concat(e ? "-intl" : ""),
                    children: n,
                  }),
                  (0, B.tZ)(C.View, {
                    className: "city-module_items " + I.default.zxTyStr,
                    children: a.map(function (t, e) {
                      return (0, B.tZ)(
                        C.View,
                        {
                          className: "item-s " + (t.selected ? "cur" : ""),
                          onClick: function () {
                            return c({
                              name: t.cityName,
                              id: t.countryID,
                              type: i,
                              index: e,
                            });
                          },
                          children: (0, B.tZ)(C.View, {
                            className: "name",
                            children: t.cityName,
                          }),
                        },
                        e
                      );
                    }),
                  }),
                ],
              });
            }),
            A = h.default.memo(function (t) {
              var e = t.isIntl,
                i = t.tagView,
                n = t.currentCity,
                a = t.nearbyCityInfos,
                c = t.historyCities,
                r = t.hotCities,
                o = t.cityTags,
                l = t.cityList,
                s = t.handleCityItemClick;
              return (0, B.tZ)(C.CustomWrapper, {
                children: (0, B.tZ)(C.View, {
                  className: "city-module-wrapper",
                  children: (0, B.BX)(C.ScrollView, {
                    scrollY: !0,
                    scrollWithAnimation: !0,
                    className: "city-module_list",
                    scrollIntoView: "".concat(i).concat(e ? "-intl" : ""),
                    children: [
                      (0, B.tZ)(X, {
                        isIntl: e,
                        currentCity: n,
                        handleCityItemClick: s,
                        nearbyCityInfos: a,
                      }),
                      (null == c ? void 0 : c.length) > 0 &&
                        (0, B.tZ)(_, {
                          type: "history",
                          tag: "历史选择",
                          isIntl: e,
                          cityList: c,
                          handleCityItemClick: s,
                        }),
                      (0, B.tZ)(_, {
                        type: "hot",
                        tag: "热门城市",
                        isIntl: e,
                        cityList: r,
                        handleCityItemClick: s,
                      }),
                      o.map(function (t, i) {
                        return (0,
                        B.tZ)(H, { tag: t, isIntl: e, cityList: l[t], handleCityItemClick: s }, i);
                      }),
                    ],
                  }),
                }),
              });
            }),
            O = h.default.memo(function (t) {
              var e = t.isFlightIntl,
                i = t.intlHidden,
                n = t.tagView,
                a = t.currentCity,
                c = t.nearbyCityInfos,
                r = t.historyCities,
                o = t.hotCities,
                l = t.cityTags,
                s = t.cityList,
                y = t.intlHistoryCities,
                d = t.intlHotCities,
                u = t.intlCityTags,
                h = t.intlCityList,
                m = t.renderIntl,
                f = t.handleCityItemClick,
                p = t.onTagChange;
              return (0,
              B.BX)(C.View, { className: "flight-city-module flex-1", children: [(0, B.tZ)(C.View, { style: { height: "100%", display: e ? "none" : "block" }, children: (0, B.tZ)(A, { isIntl: !1, tagView: n, currentCity: a, nearbyCityInfos: c, historyCities: r, hotCities: o, cityTags: l, cityList: s, handleCityItemClick: f, onTagChange: p }) }), !i && (0, B.tZ)(C.View, { style: { height: "100%", display: e ? "block" : "none" }, children: m && (0, B.tZ)(A, { isIntl: !0, tagView: n, currentCity: a, historyCities: y, hotCities: d, cityTags: u, cityList: h, handleCityItemClick: f, onTagChange: p }) })] });
            }),
            P = h.default.memo(function (t) {
              var e = t.multiple,
                i = t.multipleSelectedCities,
                n = t.multiNum,
                a = t.handleConfirmClick,
                c = t.handleSelectedCityClick;
              return (0, B.tZ)(C.View, {
                className: "node-isolate-city-botm",
                children:
                  e &&
                  (null == i ? void 0 : i.length) > 0 &&
                  (0, B.BX)(C.View, {
                    className: "flt-city-btom",
                    children: [
                      (0, B.BX)(C.View, {
                        className: "city-select flex-align-items-center",
                        children: [
                          (0, B.tZ)(C.Text, {
                            className: "label",
                            children: "已选",
                          }),
                          (0, B.BX)(C.View, {
                            className:
                              "item-box flex-align-items-center flex-1",
                            children: [
                              i.map(function (t, e) {
                                return (0, B.BX)(
                                  C.View,
                                  {
                                    className: "item flex-align-items-center",
                                    onClick: function () {
                                      return c({ index: e });
                                    },
                                    children: [
                                      t.cityName,
                                      (0, B.tZ)(C.Text, {
                                        className: "ifont-clear iconfont",
                                      }),
                                    ],
                                  },
                                  e
                                );
                              }),
                              i.length < n &&
                                (0, B.BX)(C.Text, {
                                  className: "notice",
                                  children: ["最多可选", n, "个"],
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, B.tZ)(C.Button, {
                        className: "btn-primary btn-submit",
                        onClick: a,
                        children: "确认",
                      }),
                    ],
                  }),
              });
            }),
            F = i(34229),
            Y = function (t) {
              var e = t.text,
                i = t.keyword;
              return t.disabled
                ? (0, B.tZ)(B.HY, { children: e })
                : (0, B.tZ)(F.ZtRichText, {
                    nodes: g.Z.highlightTextToHtmlStr(e, i, {
                      color: "#198cff",
                    }),
                  });
            },
            q = h.default.memo(function (t) {
              var e = t.keyword,
                i = t.poiList,
                n = t.handlePOISearchClick,
                a = function (t) {
                  if (2 != t.type && 4 != t.type) {
                    var e = 1 == t.type;
                    n({
                      section: "poi",
                      name: t.cityName || t.name,
                      code: t.cityCode || t.countryCode,
                      id: t.countryID,
                      airportname: t.airportName,
                      airportcode: t.airportCode,
                      international: t.international,
                      isCountry: e,
                    });
                  }
                },
                c = function (t) {
                  return ["景点", "国家", "省份", "机场", "城市", "城市"][t];
                };
              return (0, B.BX)(C.View, {
                className: "flt-poi-box flex-1",
                style: e ? "" : "display: none",
                children: [
                  (0, B.tZ)(C.View, {
                    className: "no-result",
                    style: i.length > 0 ? "display: none" : "",
                    children: "无搜索结果，请尝试修改后重试",
                  }),
                  (0, B.tZ)(C.ScrollView, {
                    scrollY: !0,
                    className: "poi-list",
                    children: i.map(function (t, i) {
                      var n, r;
                      return (0, B.BX)(B.HY, {
                        children: [
                          (0, B.BX)(C.View, {
                            className: "poi-item flex-align-items-center",
                            onClick: function () {
                              return a(t);
                            },
                            children: [
                              (0, B.tZ)(C.View, {
                                className: "poi-tag",
                                children: c(t.type),
                              }),
                              (0, B.tZ)(C.View, {
                                className: "poi-txt ".concat(
                                  [2, 4].includes(t.type) ? "disabled" : ""
                                ),
                                children: (0, B.tZ)(Y, {
                                  text: ""
                                    .concat(t.cityName || t.name)
                                    .concat(
                                      2 != t.type &&
                                        (null === (n = t.subItems) ||
                                        void 0 === n
                                          ? void 0
                                          : n.length) > 0
                                        ? "(不限机场)"
                                        : ""
                                    ),
                                  keyword: e,
                                  disabled: 4 == t.type,
                                }),
                              }),
                              2 != t.type &&
                                (0, B.BX)(C.View, {
                                  className: "sub-txt",
                                  children: [
                                    t.country || "",
                                    " ",
                                    t.cityCode || "",
                                  ],
                                }),
                            ],
                          }),
                          null === (r = t.subItems) || void 0 === r
                            ? void 0
                            : r.map(function (i, n) {
                                return (0, B.BX)(
                                  C.View,
                                  {
                                    className:
                                      "poi-item flex-align-items-center",
                                    onClick: function () {
                                      return a(i);
                                    },
                                    style: "margin-left: 80rpx",
                                    children: [
                                      (0, B.tZ)(C.View, {
                                        className: "poi-tag sub",
                                        children: i.nearby
                                          ? "邻近"
                                          : 3 == i.type
                                          ? "机场"
                                          : "城市",
                                      }),
                                      (0, B.tZ)(C.View, {
                                        className: "poi-txt",
                                        children: (0, B.tZ)(Y, {
                                          text: i.airportName || i.name,
                                          keyword: e,
                                        }),
                                      }),
                                      (0, B.BX)(C.View, {
                                        className: "sub-txt",
                                        children: [
                                          "".concat(
                                            i.nearby ? i.cityName + " " : ""
                                          ),
                                          t.airportCode,
                                        ],
                                      }),
                                      i.nearby &&
                                        (0, B.tZ)(C.View, {
                                          className: "poi-distance sub-txt",
                                          children: i.distance + "km",
                                        }),
                                    ],
                                  },
                                  n
                                );
                              }),
                        ],
                      });
                    }),
                  }),
                ],
              });
            }),
            M = (0, w.ZP)({
              serviceCode: "17420",
              channel: I.default.flight_channel,
              path: "FuzzySearch",
            }),
            R = [
              { cityName: "北京", cityCode: "BJS", countryID: 1 },
              { cityName: "成都", cityCode: "CTU", countryID: 1 },
              { cityName: "长沙", cityCode: "CSX", countryID: 1 },
              { cityName: "大连", cityCode: "DLC", countryID: 1 },
              { cityName: "福州", cityCode: "FOC", countryID: 1 },
              { cityName: "广州", cityCode: "CAN", countryID: 1 },
              { cityName: "杭州", cityCode: "HGH", countryID: 1 },
              { cityName: "济南", cityCode: "TNA", countryID: 1 },
              { cityName: "昆明", cityCode: "KMG", countryID: 1 },
              { cityName: "南京", cityCode: "NKG", countryID: 1 },
              { cityName: "青岛", cityCode: "TAO", countryID: 1 },
              { cityName: "上海", cityCode: "SHA", countryID: 1 },
              { cityName: "深圳", cityCode: "SZX", countryID: 1 },
              { cityName: "三亚", cityCode: "SYX", countryID: 1 },
              { cityName: "天津", cityCode: "TSN", countryID: 1 },
              { cityName: "武汉", cityCode: "WUH", countryID: 1 },
              { cityName: "西安", cityCode: "SIA", countryID: 1 },
              { cityName: "厦门", cityCode: "XMN", countryID: 1 },
              { cityName: "重庆", cityCode: "CKG", countryID: 1 },
              { cityName: "郑州", cityCode: "CGO", countryID: 1 },
            ],
            G = [
              { cityName: "中国香港", cityCode: "HKG", countryID: 2 },
              { cityName: "首尔", cityCode: "SEL", countryID: 2 },
              { cityName: "中国澳门", cityCode: "MFM", countryID: 2 },
              { cityName: "东京", cityCode: "TYO", countryID: 2 },
              { cityName: "新加坡", cityCode: "SIN", countryID: 2 },
              { cityName: "中国台北", cityCode: "TPE", countryID: 2 },
              { cityName: "曼谷", cityCode: "BKK", countryID: 2 },
              { cityName: "大阪", cityCode: "OSA", countryID: 2 },
              { cityName: "胡志明市", cityCode: "SGN", countryID: 2 },
              { cityName: "马尼拉", cityCode: "MNL", countryID: 2 },
              { cityName: "名古屋", cityCode: "NGO", countryID: 2 },
              { cityName: "伦敦", cityCode: "LON", countryID: 2 },
              { cityName: "吉隆坡", cityCode: "KUL", countryID: 2 },
              { cityName: "釜山", cityCode: "PUS", countryID: 2 },
              { cityName: "悉尼", cityCode: "SYD", countryID: 2 },
              { cityName: "法兰克福", cityCode: "FRA", countryID: 2 },
              { cityName: "温哥华", cityCode: "YVR", countryID: 2 },
              { cityName: "巴黎", cityCode: "PAR", countryID: 2 },
              { cityName: "纽约", cityCode: "NYC", countryID: 2 },
              { cityName: "洛杉矶", cityCode: "LAX", countryID: 2 },
              { cityName: "新加坡", cityCode: "SIN", countryID: 2 },
            ],
            J = {
              data: {
                isTieyou: I.default.isTieyou,
                intlHidden: !0,
                isFlightIntl: !1,
                keyword: "",
                poiList: [],
                currentCity: {},
                historyCities: [],
                hotCities: [],
                cityList: [],
                cityTags: [],
                intlHistoryCities: [],
                intlHotCities: [],
                intlCityList: [],
                intlCityTags: [],
                tagView: "",
                nearbyCityInfos: [],
                clearHistoryState: !0,
                focus: !1,
                intlTabTag: "",
                renderIntl: !1,
                isSpecialTrip: !1,
                isDpt: !1,
                anotherLocationCode: "",
                anotherLocationName: "",
                anotherLocationCountryId: "",
              },
              pageId: "10650089478",
              searchInput: h.default.createRef(),
              onLoad: function (t) {
                var e = this,
                  i = t.data,
                  n = void 0 === i ? {} : i,
                  a = n.title,
                  c = void 0 === a ? "请选择城市" : a,
                  r = n.anotherLocationCode,
                  o = n.anotherLocationName,
                  l = n.anotherLocationCountryId,
                  h = n.isIntl,
                  C = void 0 !== h && h,
                  m = n.type,
                  p = n.queryCity,
                  N = n.intlHidden,
                  I = void 0 !== N && N,
                  v = n.multiple,
                  Z = void 0 !== v && v,
                  k = n.multiSelectedCities,
                  b = void 0 === k ? [] : k,
                  T = n.multiNum,
                  w = void 0 === T ? 6 : T,
                  S = n.segmentType,
                  L = void 0 === S ? 0 : S,
                  V = n.clearHistoryState,
                  x = void 0 === V || V,
                  B = n.isDpt,
                  H = void 0 !== B && B,
                  X = n.isSpecialTrip,
                  _ = void 0 !== X && X,
                  A = D.Q2.get(),
                  O = A.cityMainList,
                  P = void 0 === O ? [] : O,
                  F = A.cityIntlList,
                  Y = void 0 === F ? [] : F;
                this.setData({
                  cityList: P,
                  cityTags: Object.keys(P),
                  intlCityList: Y,
                  intlCityTags: Object.keys(Y),
                  anotherLocationCode: r,
                  isSpecialTrip: _,
                  anotherLocationName: o,
                  anotherLocationCountryId: l,
                  segmentType: L,
                  isDpt: H,
                }),
                  (this.trulyReturnType = m),
                  (this.queryCity = p),
                  (this._multipleSelectedCities = new Map()),
                  (this.multiNum = w);
                var q = D.Q2.getAttr("historyCities") || [],
                  M = D.Q2.getAttr("historyIntlCities") || [];
                if ((this.getTabTag(), Z && b.length > 0)) {
                  var J,
                    K = b.filter(function (t) {
                      return "string" == typeof t && 3 === t.length;
                    }),
                    j = b.filter(function (t) {
                      var e;
                      return (
                        t &&
                        "object" === (0, u.Z)(t) &&
                        2 ===
                          (null === (e = t.code) || void 0 === e
                            ? void 0
                            : e.length)
                      );
                    }),
                    z = this.checkCitySelected(P, K),
                    E = z.list,
                    U = z.selectedCities,
                    W = this.checkCitySelected(Y, K),
                    Q = W.list,
                    $ = W.selectedCities,
                    tt = [].concat((0, d.Z)(U), (0, d.Z)($)),
                    et = (0, y.Z)(tt);
                  try {
                    for (et.s(); !(J = et.n()).done; ) {
                      var it = J.value;
                      this._multipleSelectedCities.set(it.cityCode, it);
                    }
                  } catch (t) {
                    et.e(t);
                  } finally {
                    et.f();
                  }
                  var nt,
                    at = (0, y.Z)(j);
                  try {
                    for (at.s(); !(nt = at.n()).done; ) {
                      var ct = nt.value;
                      this._multipleSelectedCities.set(ct.code, {
                        cityName: ct.name,
                        cityCode: ct.code,
                        countryID: ct.countryId,
                        selected: !0,
                      });
                    }
                  } catch (t) {
                    at.e(t);
                  } finally {
                    at.f();
                  }
                  this.setData({
                    intlHidden: I,
                    isFlightIntl: C,
                    multiple: Z,
                    historyCities: q.map(function (t) {
                      return (0, s.Z)(
                        (0, s.Z)({}, t),
                        {},
                        {
                          selected: b.some(function (e) {
                            return (
                              e === t.cityCode ||
                              (null == e ? void 0 : e.code) === t.cityCode
                            );
                          }),
                        }
                      );
                    }),
                    intlHistoryCities: M.map(function (t) {
                      return (0, s.Z)(
                        (0, s.Z)({}, t),
                        {},
                        {
                          selected: b.some(function (e) {
                            return (
                              e === t.cityCode ||
                              (null == e ? void 0 : e.code) === t.cityCode
                            );
                          }),
                        }
                      );
                    }),
                    hotCities: R.map(function (t) {
                      return (0, s.Z)(
                        (0, s.Z)({}, t),
                        {},
                        {
                          selected: b.some(function (e) {
                            return (
                              e === t.cityCode ||
                              (null == e ? void 0 : e.code) === t.cityCode
                            );
                          }),
                        }
                      );
                    }),
                    intlHotCities: G.map(function (t) {
                      return (0, s.Z)(
                        (0, s.Z)({}, t),
                        {},
                        {
                          selected: b.some(function (e) {
                            return (
                              e === t.cityCode ||
                              (null == e ? void 0 : e.code) === t.cityCode
                            );
                          }),
                        }
                      );
                    }),
                    cityList: E,
                    intlCityList: Q,
                    multipleSelectedCities: (0, d.Z)(
                      this._multipleSelectedCities.values()
                    ),
                  });
                } else {
                  var rt = q,
                    ot = M;
                  x &&
                    ((rt = rt.map(function (t) {
                      return (0, s.Z)((0, s.Z)({}, t), {}, { selected: !1 });
                    })),
                    (ot = ot.map(function (t) {
                      return (0, s.Z)((0, s.Z)({}, t), {}, { selected: !1 });
                    }))),
                    this.setData({
                      intlHidden: I,
                      isFlightIntl: C,
                      multiple: Z,
                      historyCities: rt,
                      intlHistoryCities: ot,
                      hotCities: JSON.parse(JSON.stringify(R)),
                      intlHotCities: JSON.parse(JSON.stringify(G)),
                    });
                }
                C &&
                  f().nextTick(function () {
                    var t;
                    null === (t = e.tabRef) || void 0 === t || t.setCurIndex(1),
                      e.switchTab(1);
                  }),
                  (this.debouncePoiSearch = g.Z.debounce(
                    this.doPoiSearch,
                    500
                  )),
                  g.Z.setTitle(c);
              },
              onShow: function () {
                this.beginLocate();
              },
              refTab: function (t) {
                this.tabRef = t;
              },
              getTabTag: function () {
                var t = this;
                (0, Z.lt)().then(function (e) {
                  var i = e.resultCode,
                    n = e.tagDesc,
                    a = D.UB.get() || "";
                  (!a || L()().diff(a, "day") >= 1) &&
                    1 == i &&
                    n &&
                    (D.UB.set(L()().format("YYYY-MM-DD")),
                    t.setData({ intlTabTag: n }));
                });
              },
              checkCitySelected: function (t, e) {
                if (0 === e.length) return { list: t, selectedCities: [] };
                for (var i = [], n = 0, a = Object.keys(t); n < a.length; n++) {
                  t[a[n]].forEach(function (t) {
                    e.some(function (e) {
                      return e === t.cityCode;
                    }) && ((t.selected = !0), i.push(t));
                  });
                }
                return { list: t, selectedCities: i };
              },
              beginLocate: function () {
                var t = this;
                (0, b.y9)()
                  .then(function (e) {
                    t.getLocateCityName(e)
                      .then(function (e) {
                        console.log("TCL: beginLocate -> res", e),
                          (0, Z.qd)({ data: e }).then(function (e) {
                            console.log(e);
                            var i = e.resultCode,
                              n = e.data;
                            1 === i
                              ? t.setData({
                                  currentCity: {
                                    cityName: n.locationCityName,
                                    cityCode: n.locationCityCode,
                                    countryID: 1,
                                  },
                                  nearbyCityInfos: n.nearbyCityInfos || [],
                                })
                              : t.setData({
                                  currentCity: { cityName: "定位失败" },
                                });
                          });
                      })
                      .catch(function () {
                        t.setData({ currentCity: { cityName: "定位失败" } });
                      });
                  })
                  .catch(function () {
                    t.setData({ currentCity: { cityName: "定位失败" } });
                  });
              },
              getLocateCityName: function (t) {
                return new Promise(function (e, i) {
                  var n = {
                    Latitude: t.latitude,
                    Longitude: t.longitude,
                    Language: "CN",
                  };
                  (0, k.T_)(n)
                    .then(function (t) {
                      if (t.ProvinceName) {
                        var n = t.CityLongitude,
                          a = t.CityLatitude,
                          c = t.ProvinceName;
                        e({ location: c, longitude: n, latitude: a });
                      } else i("定位失败");
                    })
                    .catch(function () {
                      i("定位失败");
                    });
                });
              },
              gotoSearch: function () {
                this.data.isSearchView || this.setData({ isSearchView: !0 });
              },
              doPoiSearch: function (t) {
                var e = this,
                  i = this.data.isSpecialTrip,
                  n = t.detail.value.trim();
                this.setData({ keyword: n });
                var a = this.data.intlHidden;
                n || this.setData({ poiList: [] }),
                  M({ data: { mode: a ? 2 : 1, keyword: n } })
                    .then(function (t) {
                      if (1 === t.resultCode) {
                        var n,
                          a = t.data.items,
                          c = void 0 === a ? [] : a,
                          r = [],
                          o = i ? 2 : 1,
                          l = (0, y.Z)(c);
                        try {
                          for (l.s(); !(n = l.n()).done; ) {
                            var d = n.value;
                            d.type >= o &&
                              d.type <= 5 &&
                              ((d.countryID = d.international ? 2 : 1),
                              (d.subItems = d.subItems.map(function (t) {
                                return (0,
                                s.Z)((0, s.Z)({}, t), {}, { countryID: t.international ? 2 : 1 });
                              })),
                              r.push(d));
                          }
                        } catch (t) {
                          l.e(t);
                        } finally {
                          l.f();
                        }
                        e.setData({ poiList: r });
                      } else e.setData({ poiList: [] });
                    })
                    .catch(function (t) {
                      e.setData({ poiList: [] }), console.log(t);
                    });
              },
              handleFocus: function () {
                this.setData({ focus: !0 });
              },
              handleBlur: function () {
                this.setData({ focus: !1 });
              },
              searchClear: function () {
                this.data.keyword &&
                  ((this.searchInput.current.value = ""),
                  this.setData({ keyword: "", poiList: [] }));
              },
              switchTab: function (t) {
                1 != t ||
                  this.data.renderIntl ||
                  this.setData({ renderIntl: !0 }),
                  this.setData({ isFlightIntl: 1 == t });
              },
              tagClick: function (t) {
                var e = t.tag;
                this.ubtDevTrace("o_flight_citylist_c", { tag: e }),
                  this.setData({ tagView: e });
              },
              handleCountrySearch: function (t) {
                if (t) {
                  var e = t.name,
                    i = t.code,
                    n = t.countryId,
                    a = this.data,
                    c = a.isDpt,
                    r = a.segmentType,
                    o = a.anotherLocationCode,
                    l = a.anotherLocationName,
                    s = {
                      name: l,
                      code: o,
                      countryId: a.anotherLocationCountryId,
                    };
                  this.navigateTo({
                    url: "/pages/flightSecondary/priceparity/priceparity",
                    data: {
                      source: 3,
                      departCity: c ? e : l,
                      departCityCode: c ? i : o,
                      departCountryId: c ? n : o,
                      arriveCities: [c ? s : t],
                      segmentType: r,
                    },
                  });
                }
              },
              handlePOISearchClick: function (t) {
                var e = t.name,
                  i = t.code,
                  n = t.id,
                  a = t.airportname,
                  c = void 0 === a ? "" : a,
                  r = t.airportcode,
                  o = void 0 === r ? "" : r,
                  l = t.isCountry,
                  y = void 0 !== l && l,
                  d = this.data,
                  u = d.multiple,
                  h = (d.isDpt, d.isSpecialTrip),
                  C = d.segmentType,
                  m = d.anotherLocationCode,
                  f = d.anotherLocationName;
                if ("定位失败" !== e) {
                  if (e === f && i === m)
                    return (0, v.showToast)("出发地到达地不能相同，请重新选择");
                  var p = { name: e, code: i, countryId: n };
                  if (!y || h || 0 == C || u) {
                    if (u)
                      return (
                        this.handleCityItemClick(
                          { type: "poi" },
                          { cityName: e, cityCode: i, countryID: n }
                        ),
                        void this.setData({ poiList: [] })
                      );
                    var N = this.trulyReturnType,
                      I = this.queryCity,
                      g = {
                        cityName: e,
                        cityCode: i,
                        countryID: n,
                        airportName: c,
                        airportCode: o,
                      };
                    if ((console.log(g), !N))
                      return this.invokeCallback(g), void this.navigateBack();
                    var Z = {};
                    "d" === N
                      ? (Z = {
                          queryCity: (0, s.Z)(
                            (0, s.Z)({}, I),
                            {},
                            {
                              departCity: e,
                              departCityCode: i,
                              departCountryId: n,
                              departAirportName: c,
                              departAirportCode: o,
                              isIntl: 2 === n || 2 === I.arriveCountryId,
                            }
                          ),
                          city: g,
                        })
                      : "a" === N &&
                        (Z = {
                          queryCity: (0, s.Z)(
                            (0, s.Z)({}, I),
                            {},
                            {
                              arriveCity: e,
                              arriveCityCode: i,
                              arriveCountryId: n,
                              arriveAirportName: c,
                              arriveAirportCode: o,
                              isIntl: 2 === n || 2 === I.departCountryId,
                            }
                          ),
                          city: g,
                        }),
                      this.invokeCallback(Z),
                      this.navigateBack();
                  } else this.handleCountrySearch(p);
                }
              },
              handleCityItemClick: function (t, e) {
                var i = t.id,
                  n = t.name,
                  a = t.type,
                  c = t.tag,
                  r = t.index,
                  o = this.data,
                  l = o.cityList,
                  u = o.intlCityList,
                  h = o.intlHistoryCities,
                  C = o.historyCities,
                  m = o.intlHotCities,
                  f = o.hotCities,
                  p = o.nearbyCityInfos,
                  N = o.currentCity,
                  I = o.isSpecialTrip,
                  g = o.multiple,
                  Z = o.segmentType,
                  k = null;
                if ("定位失败" !== n) {
                  "current" === a ||
                    "poi" === a ||
                    ("nearby" === a
                      ? (k = p)
                      : "history" === a
                      ? (k = 2 === i ? h : C)
                      : "hot" === a
                      ? (k = 2 === i ? m : f)
                      : (this.ubtDevTrace("o_flight_nativecity_c", { city: 1 }),
                        (k = 2 === i ? u[c] : l[c])));
                  var b = "current" === a ? N : "poi" === a ? e : k[r],
                    D = b.cityName,
                    T = b.cityCode,
                    w = b.countryID,
                    S = void 0 === w ? 1 : w,
                    L = !!b.selected,
                    V = 2 == (null == T ? void 0 : T.length);
                  if (L) this._multipleSelectedCities.delete(T);
                  else {
                    if (this._multipleSelectedCities.size >= this.multiNum)
                      return (0, v.showToast)(
                        "最多可选择".concat(this.multiNum, "个城市/地区")
                      );
                    this._multipleSelectedCities.set(T, b);
                  }
                  if (g)
                    if (1 === S) {
                      if (
                        ("current" !== a &&
                          N.cityCode === T &&
                          (N.selected = !L),
                        "nearby" !== a)
                      ) {
                        var x,
                          B = (0, y.Z)(p);
                        try {
                          for (B.s(); !(x = B.n()).done; ) {
                            var H = x.value;
                            if (H.cityCode === T) {
                              H.selected = !L;
                              break;
                            }
                          }
                        } catch (t) {
                          B.e(t);
                        } finally {
                          B.f();
                        }
                      }
                      if ("history" !== a) {
                        var X,
                          _ = (0, y.Z)(C);
                        try {
                          for (_.s(); !(X = _.n()).done; ) {
                            var A = X.value;
                            if (A.cityCode === T) {
                              A.selected = !L;
                              break;
                            }
                          }
                        } catch (t) {
                          _.e(t);
                        } finally {
                          _.f();
                        }
                      }
                      if ("hot" !== a) {
                        var O,
                          P = (0, y.Z)(f);
                        try {
                          for (P.s(); !(O = P.n()).done; ) {
                            var F = O.value;
                            if (F.cityCode === T) {
                              F.selected = !L;
                              break;
                            }
                          }
                        } catch (t) {
                          P.e(t);
                        } finally {
                          P.f();
                        }
                      }
                      if ("all" !== a)
                        for (var Y in l) {
                          var q,
                            M = !1,
                            R = (0, y.Z)(l[Y]);
                          try {
                            for (R.s(); !(q = R.n()).done; ) {
                              var G = q.value;
                              if (G.cityCode === T) {
                                (G.selected = !L), (M = !0);
                                break;
                              }
                            }
                          } catch (t) {
                            R.e(t);
                          } finally {
                            R.f();
                          }
                          if (M) break;
                        }
                      (b.selected = !L),
                        this.setData({
                          currentCity: N,
                          nearbyCityInfos: p,
                          historyCities: C,
                          hotCities: f,
                          cityList: l,
                          multipleSelectedCities: (0, d.Z)(
                            this._multipleSelectedCities.values()
                          ),
                        });
                    } else {
                      if (
                        ("current" !== a &&
                          N.cityCode === T &&
                          (N.selected = !L),
                        "nearby" !== a)
                      ) {
                        var J,
                          K = (0, y.Z)(p);
                        try {
                          for (K.s(); !(J = K.n()).done; ) {
                            var j = J.value;
                            if (j.cityCode === T) {
                              j.selected = !L;
                              break;
                            }
                          }
                        } catch (t) {
                          K.e(t);
                        } finally {
                          K.f();
                        }
                      }
                      if ("history" !== a) {
                        var z,
                          E = (0, y.Z)(h);
                        try {
                          for (E.s(); !(z = E.n()).done; ) {
                            var U = z.value;
                            if (U.cityCode === T) {
                              U.selected = !L;
                              break;
                            }
                          }
                        } catch (t) {
                          E.e(t);
                        } finally {
                          E.f();
                        }
                      }
                      if ("hot" !== a) {
                        var W,
                          Q = (0, y.Z)(m);
                        try {
                          for (Q.s(); !(W = Q.n()).done; ) {
                            var $ = W.value;
                            if ($.cityCode === T) {
                              $.selected = !L;
                              break;
                            }
                          }
                        } catch (t) {
                          Q.e(t);
                        } finally {
                          Q.f();
                        }
                      }
                      if ("all" !== a)
                        for (var tt in u) {
                          var et,
                            it = !1,
                            nt = (0, y.Z)(u[tt]);
                          try {
                            for (nt.s(); !(et = nt.n()).done; ) {
                              var at = et.value;
                              if (at.cityCode === T) {
                                (at.selected = !L), (it = !0);
                                break;
                              }
                            }
                          } catch (t) {
                            nt.e(t);
                          } finally {
                            nt.f();
                          }
                          if (it) break;
                        }
                      (b.selected = !L),
                        this.setData({
                          currentCity: N,
                          nearbyCityInfos: p,
                          intlHistoryCities: h,
                          intlHotCities: m,
                          intlCityList: u,
                          multipleSelectedCities: (0, d.Z)(
                            this._multipleSelectedCities.values()
                          ),
                        });
                    }
                  else {
                    if (V && !I && 0 != Z) {
                      var ct = { name: D, code: T, countryId: S };
                      return this.handleCountrySearch(ct);
                    }
                    var rt = this.trulyReturnType,
                      ot = this.queryCity,
                      lt = {
                        cityName: D,
                        cityCode: T,
                        countryID: S,
                        airportName: "",
                        airportCode: "",
                      };
                    if ((console.log(lt), !rt))
                      return this.invokeCallback(lt), void this.navigateBack();
                    var st = {};
                    "d" === rt
                      ? (st = {
                          queryCity: (0, s.Z)(
                            (0, s.Z)({}, ot),
                            {},
                            {
                              departCity: D,
                              departCityCode: T,
                              departCountryId: S,
                              departAirportName: "",
                              departAirportCode: "",
                              isIntl: 2 === S || 2 === ot.arriveCountryId,
                            }
                          ),
                          city: lt,
                        })
                      : "a" === rt &&
                        (st = {
                          queryCity: (0, s.Z)(
                            (0, s.Z)({}, ot),
                            {},
                            {
                              arriveCity: D,
                              arriveCityCode: T,
                              arriveCountryId: S,
                              arriveAirportName: "",
                              arriveAirportCode: "",
                              isIntl: 2 === S || 2 === ot.departCountryId,
                            }
                          ),
                          city: lt,
                        }),
                      this.invokeCallback(st),
                      this.navigateBack();
                  }
                }
              },
              handleConfirmClick: function () {
                var t = this.data.multipleSelectedCities;
                this.invokeCallback(t), this.navigateBack();
              },
              handleSelectedCityClick: function (t) {
                var e = t.index,
                  i = this.data.multipleSelectedCities[e],
                  n = i.cityName,
                  a = i.cityCode,
                  c = i.countryID;
                this.handleCityItemClick(
                  { type: "poi" },
                  { cityName: n, cityCode: a, countryID: c, selected: !0 }
                );
              },
              onTagChange: function (t) {
                this.setData({ currentTag: t });
              },
              handleSearchInputConfirm: function () {
                var t,
                  e =
                    null === (t = this.searchInput.current.value) ||
                    void 0 === t
                      ? void 0
                      : t.trim(),
                  i = this.data.poiList,
                  n = null;
                if (
                  e &&
                  !g.Z.isEmptyArray(i) &&
                  (i.forEach(function (t) {
                    if (t.name === e) return (n = t);
                    if (!g.Z.isEmptyArray(t.subItems)) {
                      var i = t.subItems.find(function (t) {
                        return t.name === e;
                      });
                      if (i) return (n = i);
                    }
                  }),
                  n)
                ) {
                  if (2 == n.type || 4 == n.type) return;
                  this.handlePOISearchClick({
                    name: e,
                    code: n.cityCode || n.countryCode,
                    id: n.countryID,
                    airportName: n.airportName,
                    airportcode: n.airportcode,
                    isCountry: 1 == n.type,
                  });
                }
              },
              noop: function () {},
            },
            K =
              (0, T.h)()(
                (n =
                  N()(J)(
                    (n = (function (t) {
                      (0, o.Z)(i, t);
                      var e = (0, l.Z)(i);
                      function i() {
                        return (0, c.Z)(this, i), e.apply(this, arguments);
                      }
                      return (
                        (0, r.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var t = this,
                                e = this.data,
                                i = e.poiList,
                                n = e.intlHidden,
                                a = e.isFlightIntl,
                                c = e.intlCityTags,
                                r = e.cityTags,
                                o = e.tagView,
                                l = e.currentCity,
                                s = e.nearbyCityInfos,
                                y = e.historyCities,
                                d = e.hotCities,
                                u = e.cityList,
                                h = e.intlHistoryCities,
                                m = e.intlHotCities,
                                f = e.intlCityList,
                                p = e.multipleSelectedCities,
                                N = e.multiple,
                                I = e.focus,
                                g = e.renderIntl,
                                v = e.keyword,
                                Z = e.intlTabTag,
                                k = [
                                  "国内",
                                  function () {
                                    return (0, B.BX)(C.View, {
                                      className: "intl-tab",
                                      children: [
                                        "国际/中国港澳台",
                                        !!Z &&
                                          (0, B.tZ)(C.View, {
                                            className: "tab-tag",
                                            children: Z,
                                          }),
                                      ],
                                    });
                                  },
                                ];
                              return (0, B.BX)(C.View, {
                                className: "page flight-city",
                                children: [
                                  (0, B.tZ)(C.View, {
                                    className:
                                      "search-module search-module_focus",
                                    onTouchMove: this.noop,
                                    children: (0, B.BX)(C.View, {
                                      className:
                                        "search-input-box bd-1rpx flex-align-items-center ".concat(
                                          I ? "focus" : ""
                                        ),
                                      children: [
                                        (0, B.tZ)(C.View, {
                                          className:
                                            "search-input-wrapper flex-1",
                                          children: (0, B.tZ)(C.CustomWrapper, {
                                            children: (0, B.tZ)(C.Input, {
                                              className:
                                                "search-module_input search-module_input-f",
                                              placeholderClass:
                                                "search-module_input_focus",
                                              placeholder: "中文/拼音/首字母",
                                              type: "text",
                                              confirmType: "search",
                                              ref: this.searchInput,
                                              onInput: this.debouncePoiSearch,
                                              onFocus: this.handleFocus,
                                              onBlur: this.handleBlur,
                                              onConfirm:
                                                this.handleSearchInputConfirm,
                                            }),
                                          }),
                                        }),
                                        (0, B.tZ)(C.Text, {
                                          className: "ifont2-close iconfont2",
                                          onClick: this.searchClear,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, B.tZ)(q, {
                                    keyword: v,
                                    poiList: i,
                                    handlePOISearchClick:
                                      this.handlePOISearchClick.bind(this),
                                  }),
                                  (0, B.BX)(C.View, {
                                    className:
                                      "city-content-box flex-1 flex flex-column",
                                    style: v ? "display: none" : "",
                                    children: [
                                      (0, B.tZ)(C.View, {
                                        className: "node-isolate-tab",
                                        children:
                                          !((i && i[0]) || n) &&
                                          (0, B.tZ)(V.Z, {
                                            tabList: k,
                                            onChange: this.switchTab.bind(this),
                                            className: "flight-city-tab",
                                            ref: function (e) {
                                              return t.refTab(e);
                                            },
                                          }),
                                      }),
                                      (0, B.tZ)(O, {
                                        tagView: o,
                                        isFlightIntl: a,
                                        intlHidden: n,
                                        currentCity: l,
                                        nearbyCityInfos: s,
                                        historyCities: y,
                                        hotCities: d,
                                        cityTags: r,
                                        cityList: u,
                                        intlHistoryCities: h,
                                        intlHotCities: m,
                                        intlCityTags: c,
                                        intlCityList: f,
                                        renderIntl: g,
                                        handleCityItemClick:
                                          this.handleCityItemClick.bind(this),
                                        onTagChange:
                                          this.onTagChange.bind(this),
                                      }),
                                    ],
                                  }),
                                  (0, B.BX)(C.View, {
                                    className: "city-letter",
                                    style: v ? "display: none" : "",
                                    children: [
                                      (0, B.tZ)(C.Text, {
                                        className:
                                          "city-letter-item txt ".concat(
                                            "position" == o ? "cur" : ""
                                          ),
                                        onClick: function () {
                                          return t.tagClick({
                                            tag: "position",
                                          });
                                        },
                                        children: "当前",
                                      }),
                                      (0, B.tZ)(C.Text, {
                                        className:
                                          "city-letter-item txt ".concat(
                                            "history" == o ? "cur" : "",
                                            " "
                                          ),
                                        onClick: function () {
                                          return t.tagClick({ tag: "history" });
                                        },
                                        children: "历史",
                                      }),
                                      (0, B.tZ)(C.Text, {
                                        className:
                                          "city-letter-item txt ".concat(
                                            "hot" == o ? "cur" : "",
                                            " "
                                          ),
                                        onClick: function () {
                                          return t.tagClick({ tag: "hot" });
                                        },
                                        children: "热门",
                                      }),
                                      (a ? c : r).map(function (e, i) {
                                        return (0, B.tZ)(
                                          C.Text,
                                          {
                                            className:
                                              "city-letter-item ".concat(
                                                o == e ? "cur" : "",
                                                " "
                                              ),
                                            onClick: function () {
                                              return t.tagClick({ tag: e });
                                            },
                                            children: e,
                                          },
                                          i
                                        );
                                      }),
                                    ],
                                  }),
                                  (0, B.tZ)(P, {
                                    multiple: N,
                                    multipleSelectedCities: p,
                                    multiNum: this.multiNum,
                                    handleConfirmClick:
                                      this.handleConfirmClick.bind(this),
                                    handleSelectedCityClick:
                                      this.handleSelectedCityClick.bind(this),
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(h.default.Component))
                  ) || n)
              ) || n;
          Page(
            (0, a.createPageConfig)(
              K,
              "functionalPages/flightCity/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#f5f5f5",
                backgroundColor: "#f5f5f5",
                backgroundColorTop: "#f5f5f5",
                backgroundColorBottom: "#f5f5f5",
                navigationBarTitleText: "",
                navigationBarTextStyle: "black",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [22175, 87479, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(44067);
        }),
          t.O();
      },
    ]);
})();
