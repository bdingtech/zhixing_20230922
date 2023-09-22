!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [65589],
      {
        32587: function (e, t, i) {
          var a,
            n = i(32180),
            o = i(57042),
            c = i(24460),
            r = i(21867),
            l = i(86066),
            s = i(45023),
            d = i(22276),
            u = i(298),
            h = i(52500),
            m = i(71515),
            p = i(92954),
            f = i.n(p),
            g = i(48792),
            I = i.n(g),
            y = i(79792),
            k = i(79404),
            N = i(92667),
            Z = i(81957),
            w = i(48813),
            B = {
              pageId: "10650060675",
              data: {
                isTieyou: y.default.isTieyou,
                taskInfo: {},
                hotelList: [],
                count: 0,
                showLoading: !1,
              },
              onLoad: function (e) {
                if (e.data) {
                  var t = e.data,
                    i = t.levels,
                    a = t.priceRange,
                    n = t.queryModel,
                    o = t.taskInfo,
                    c = t.keywordInfo;
                  this.setData({
                    taskInfo: o,
                    queryModel: n,
                    levels: i,
                    priceRange: a,
                    keywordInfo: c,
                  });
                }
                this.requestHotelList();
              },
              getCurrentParams: function () {
                var e,
                  t = this.data,
                  i = t.levels,
                  a = t.priceRange,
                  n = t.queryModel,
                  o = t.keywordInfo,
                  c = (0, u.Z)(
                    {
                      index: 1,
                      pageSize: 20,
                      searchAllHotelFlag: !1,
                      payType: 0,
                      sameCityFlag: !1,
                      fromPage: "",
                      queryFilterList: [
                        {
                          subType: "2",
                          scenarioType: "CommonModule",
                          filterType: 0,
                          sceneBitMap: 0,
                          title: "智能排序",
                          value: "1",
                          filterID: "17|1",
                          type: "17",
                        },
                      ],
                    },
                    n
                  );
                return (
                  o.data && o.data.filterID && c.queryFilterList.push(o.data),
                  i.length > 0 &&
                    (e = c.queryFilterList).push.apply(e, (0, d.Z)(i)),
                  ((600 !== a.priceEnd && "max" !== a.priceEnd) ||
                    0 !== a.priceStart) &&
                    c.queryFilterList.push({
                      subType: "2",
                      scenarioType: "CommonModule",
                      filterType: 0,
                      sceneBitMap: 0,
                      title: "¥".concat(a.priceStart, "-").concat(a.priceEnd),
                      value: "".concat(a.priceStart, "|").concat(a.priceEnd),
                      filterID: "15|Range",
                      type: "15",
                    }),
                  c
                );
              },
              requestHotelList: function () {
                var e = this,
                  t = { data: this.getCurrentParams() };
                this.setData({ showLoading: !0 }),
                  (0, N.it)(t).then(function (t) {
                    if (1 === t.resultCode) {
                      var i = t.data.hotelList.map(function (e) {
                        return (0,
                        u.Z)((0, u.Z)({}, e), {}, { isSelected: !0 });
                      });
                      e.setData({ hotelList: i }), e.getCurNum();
                    }
                    e.setData({ showLoading: !1 });
                  });
              },
              getCurNum: function () {
                var e = this.data.hotelList;
                this.setData({
                  count: e.filter(function (e) {
                    return e.isSelected;
                  }).length,
                });
              },
              selectItem: function (e) {
                var t = e.target.dataset.idx,
                  i = "hotelList[".concat(t, "].isSelected");
                this.setData(
                  (0, s.Z)({}, i, !this.data.hotelList[t].isSelected)
                ),
                  this.getCurNum();
              },
              selectAll: function () {
                var e,
                  t = this.data.hotelList;
                (e = t.map(function (e) {
                  return (0, u.Z)(
                    (0, u.Z)({}, e),
                    {},
                    {
                      isSelected: !t.every(function (e) {
                        return e.isSelected;
                      }),
                    }
                  );
                })),
                  this.setData({ hotelList: e }),
                  this.getCurNum();
              },
              gotoHotelDetail: function (e) {
                var t = e.currentTarget.dataset.item,
                  i = this.data.queryModel,
                  a = {
                    hotel: t,
                    query: {
                      checkInDate: i.checkInDate,
                      checkOutDate: i.checkOutDate,
                    },
                  };
                this.navigateTo({ url: "/pages/hotel/detail/detail", data: a });
              },
              addHotelMonitor: function () {
                var e = this.data,
                  t = e.taskInfo,
                  i = e.hotelList,
                  a = t.checkInDateStr,
                  n = t.priceInfo,
                  o = t.cityId,
                  c = t.levelList
                    .reduce(function (e, t) {
                      return e.concat([t.title.replace("/", "/")]);
                    }, [])
                    .join(" "),
                  r = i.filter(function (e) {
                    return e.isSelected;
                  }),
                  l = r
                    .reduce(function (e, t) {
                      return e.concat([t.name]);
                    }, [])
                    .join(","),
                  s = r
                    .reduce(function (e, t) {
                      return e.concat([t.hotelId]);
                    }, [])
                    .join(","),
                  d = r.map(function (e) {
                    return {
                      hotelId: e.hotelId,
                      hotelName: e.name,
                      priceInfo: e.priceInfo,
                    };
                  }),
                  u = {
                    checkInDate: a,
                    starRange: c,
                    taskId: t.taskId ? t.taskId : 0,
                    clientVersion: k.Z.clientVersion,
                    source: "addTask",
                    priceRange:
                      "不限" === n ? "价格".concat(n) : "".concat(n, "元/晚"),
                    cityId: o,
                    type: 1,
                    hotelId: s,
                    hotelName: l,
                    hotelList: d,
                  };
                console.log(u),
                  (0, N.LF)({ data: u })
                    .then(function (e) {
                      1 === e.resultCode
                        ? f().reLaunch({
                            url: "/pages/trnshare/grablist/grablist?orderType=hotelOrder",
                          })
                        : f().showToast({
                            title: e.resultMessage || "网络错误，请稍后重试~",
                            icon: "none",
                          });
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
              },
              goEdit: function () {
                f().navigateBack({ delta: 1 });
              },
            },
            v =
              (0, Z.h)()(
                (a =
                  I()(B)(
                    (a = (function (e) {
                      (0, r.Z)(i, e);
                      var t = (0, l.Z)(i);
                      function i() {
                        return (0, o.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.taskInfo,
                                a = t.count,
                                n = t.showLoading,
                                o = t.hotelList;
                              return (0, w.BX)(m.Block, {
                                children: [
                                  i &&
                                    (0, w.BX)(m.View, {
                                      className: "monitor-top",
                                      children: [
                                        (0, w.BX)(m.View, {
                                          className: "cont",
                                          children: [
                                            (0, w.tZ)(m.View, {
                                              className: "tit",
                                              children: i.city + "的酒店",
                                            }),
                                            (0, w.BX)(m.View, {
                                              className: "txt",
                                              children: [
                                                (0, w.BX)(m.Text, {
                                                  className: "tgrey",
                                                  children: [
                                                    "不限" === i.priceInfo &&
                                                      (0, w.tZ)(m.Block, {
                                                        children: "价格",
                                                      }),
                                                    i.priceInfo,
                                                    "不限" !== i.priceInfo &&
                                                      (0, w.tZ)(m.Block, {
                                                        children: "元/晚",
                                                      }),
                                                  ],
                                                }),
                                                i.levelList &&
                                                  i.levelList.map(function (
                                                    e,
                                                    t
                                                  ) {
                                                    return (0, w.tZ)(
                                                      m.Text,
                                                      {
                                                        className: "tgrey",
                                                        children: e.name,
                                                      },
                                                      t
                                                    );
                                                  }),
                                                (0, w.tZ)(m.Text, {
                                                  className: "tgrey",
                                                  children:
                                                    i.checkInDateStr + "入住",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, w.tZ)(m.Button, {
                                          className: "btn-edit",
                                          id: "AXGz",
                                          onClick: this.goEdit,
                                          children: "编辑",
                                        }),
                                      ],
                                    }),
                                  (0, w.BX)(m.View, {
                                    className: "wrap",
                                    children: [
                                      (0, w.BX)(m.View, {
                                        className: "monitor-tit",
                                        children: [
                                          "帮您找到以下热门酒店，已选择" +
                                            a +
                                            "家",
                                          (0, w.tZ)(m.Text, {
                                            className: "all color-primary",
                                            id: "AXHA",
                                            onClick: this.selectAll,
                                            children: "全选",
                                          }),
                                        ],
                                      }),
                                      (0, w.BX)(m.View, {
                                        className: "monitor-list",
                                        children: [
                                          n &&
                                            (0, w.tZ)(m.Block, {
                                              children: [1, 2, 3, 4, 5].map(
                                                function (e, t) {
                                                  return (0, w.BX)(
                                                    m.View,
                                                    {
                                                      className:
                                                        "skeleton-item",
                                                      children: [
                                                        (0, w.tZ)(m.View, {
                                                          className: "img",
                                                        }),
                                                        (0, w.BX)(m.View, {
                                                          className: "cont",
                                                          children: [
                                                            (0, w.tZ)(m.View, {
                                                              className:
                                                                "s-tit",
                                                            }),
                                                            (0, w.tZ)(m.View, {
                                                              className:
                                                                "s-txt",
                                                            }),
                                                            (0, w.tZ)(m.View, {
                                                              className:
                                                                "s-btm",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    },
                                                    t
                                                  );
                                                }
                                              ),
                                            }),
                                          !n &&
                                            (0, w.tZ)(m.Block, {
                                              children:
                                                o &&
                                                o.map(function (t, i) {
                                                  return (0, w.BX)(
                                                    m.View,
                                                    {
                                                      className: "item",
                                                      id: "AXHB",
                                                      onClick:
                                                        e.gotoHotelDetail,
                                                      "data-item": t,
                                                      children: [
                                                        (0, w.tZ)(m.Image, {
                                                          src: t.logo,
                                                          className: "img",
                                                        }),
                                                        (0, w.BX)(m.View, {
                                                          className: "cont",
                                                          children: [
                                                            (0, w.tZ)(m.View, {
                                                              className: "tit",
                                                              children: t.name,
                                                            }),
                                                            (0, w.BX)(m.View, {
                                                              className: "txt",
                                                              children: [
                                                                t.hotelAddInfo
                                                                  .commonScore &&
                                                                  t.hotelAddInfo
                                                                    .commonScore >
                                                                    0 &&
                                                                  (0, w.tZ)(
                                                                    m.Text,
                                                                    {
                                                                      className:
                                                                        "color-primary",
                                                                      children:
                                                                        t
                                                                          .hotelAddInfo
                                                                          .commonScore +
                                                                        "分",
                                                                    }
                                                                  ),
                                                                t.zone,
                                                              ],
                                                            }),
                                                            (0, w.tZ)(m.View, {
                                                              className: "btm",
                                                              children: (0,
                                                              w.tZ)(m.Text, {
                                                                className:
                                                                  "price color-red",
                                                                children:
                                                                  t.priceInfo
                                                                    ? t
                                                                        .priceInfo
                                                                        .couponTag
                                                                      ? t
                                                                          .priceInfo
                                                                          .couponSalePrice
                                                                      : t
                                                                          .priceInfo
                                                                          .salePrice
                                                                    : "--",
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        (0, w.tZ)(m.Text, {
                                                          className:
                                                            (t.isSelected
                                                              ? "ifont-radioed"
                                                              : "ifont-radio") +
                                                            " iconfont " +
                                                            (t.isSelected
                                                              ? "color-red"
                                                              : ""),
                                                          "data-idx": i,
                                                          id: "AXHC",
                                                          onClick: function (
                                                            t
                                                          ) {
                                                            t.stopPropagation(),
                                                              e.selectItem(t);
                                                          },
                                                        }),
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
                                  (0, w.tZ)(m.View, {
                                    className: "botm-fixed",
                                    children: (0, w.tZ)(m.Button, {
                                      className: "btn-submit btn-primary",
                                      id: "AXHD",
                                      onClick: this.addHotelMonitor,
                                      children: "开始降价提醒",
                                    }),
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(h.default.Component))
                  ) || a)
              ) || a;
          Page(
            (0, n.createPageConfig)(
              v,
              "pages/hotel/packages/monitorlist/monitorlist",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "酒店低价提醒设置",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#FFFFFF",
                backgroundColorTop: "#FFFFFF",
                backgroundColorBottom: "#F5F5F5",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(32587);
        }),
          e.O();
      },
    ]);
})();
