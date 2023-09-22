!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [6909],
      {
        1728: function (t, e, a) {
          var i,
            n = a(32180),
            o = a(57042),
            c = a(24460),
            s = a(21867),
            r = a(86066),
            l = a(45023),
            d = a(52500),
            h = a(71515),
            u = a(92954),
            m = a.n(u),
            g = a(48792),
            f = a.n(g),
            N = a(79792),
            k = a(79404),
            p = a(39173),
            w = a(92667),
            Z = a(81957),
            V = a(48813),
            v = {
              pageId: "10650060669",
              data: {
                isTieyou: N.default.isTieyou,
                taskName: "",
                dateStr: "",
                priceRange: "",
                starRange: "",
                hotelPriceMonitors: [],
                showLoading: !1,
                delBtnWidth: 50,
              },
              onLoad: function (t) {
                console.log(t.data);
                var e = t.data,
                  a = e.taskId,
                  i = e.taskName,
                  n = e.dateStr,
                  o = e.priceRange,
                  c = e.starRange,
                  s = e.cityId,
                  r = e.cityName;
                this.setData({
                  taskId: a,
                  taskName: i,
                  dateStr: n,
                  priceRange: o,
                  starRange: c,
                  cityId: s,
                  cityName: r,
                }),
                  this.getMonitorTaskDetail(a);
              },
              getMonitorTaskDetail: function (t, e) {
                var a = this;
                this.setData({ showLoading: !0 });
                var i = {
                  data: {
                    clientVersion: k.Z.clientVersion,
                    checkInDate: e,
                    taskId: t,
                  },
                };
                (0, w.qs)(i)
                  .then(function (t) {
                    if (1 === t.resultCode) {
                      var i = t.data,
                        n = i.hotelPriceMonitors,
                        o = i.checkInDateList.map(function (t, a) {
                          return {
                            value: t,
                            isSelected: e ? e === t : 0 === a,
                          };
                        });
                      a.setData({
                        showLoading: !1,
                        hotelPriceMonitors: n,
                        dateList: o,
                      });
                    }
                  })
                  .catch(function (t) {
                    console.log(t), a.setData({ showLoading: !1 });
                  });
              },
              delHotelPriceMonitorTask: function () {
                var t = {
                  data: {
                    clientVersion: k.Z.clientVersion,
                    taskId: this.data.taskId,
                  },
                };
                (0, w.y8)(t)
                  .then(function (t) {
                    1 === t.resultCode &&
                      (m().showToast({
                        title: "删除成功",
                        icon: "none",
                        duration: 1500,
                      }),
                      m().reLaunch({
                        url: "/pages/trnshare/grablist/grablist?orderType=hotelOrder",
                      }));
                  })
                  .catch(function (t) {
                    return console.log(t);
                  });
              },
              gotoHotelDetail: function (t) {
                var e = t.currentTarget.dataset.item,
                  a = {
                    hotel: e,
                    query: {
                      checkInDate: e.checkInDate,
                      checkOutDate: e.checkOutDate,
                    },
                  };
                this.navigateTo({ url: "/pages/hotel/detail/detail", data: a });
              },
              gotoHotelMonitoredit: function () {
                var t = this.data,
                  e = t.cityName,
                  a = t.cityId,
                  i = t.dateList,
                  n = t.taskId,
                  o = {
                    cityId: a,
                    cityName: e,
                    checkInDateList: i.map(function (t) {
                      return t.value;
                    }),
                    taskId: n,
                  };
                this.navigateTo({ url: "../monitoredit/monitoredit", data: o });
              },
              touchS: function (t) {
                1 == t.touches.length &&
                  this.setData({ startX: t.touches[0].clientX });
              },
              touchM: function (t) {
                var e = t.currentTarget.dataset.index;
                if (1 == t.touches.length) {
                  var a = t.touches[0].clientX,
                    i = this.data.startX - a,
                    n = this.data.delBtnWidth,
                    o = "";
                  0 == i || i < 0
                    ? (o = "left:0px")
                    : i > 0 &&
                      ((o = "left:-" + i + "px"),
                      i >= n && (o = "left:-" + n + "px"));
                  var c = "hotelPriceMonitors[".concat(e, "].txtStyle");
                  this.setData((0, l.Z)({}, c, o));
                }
              },
              touchE: function (t) {
                var e = t.currentTarget.dataset.index;
                if (1 == t.changedTouches.length) {
                  var a = t.changedTouches[0].clientX,
                    i = this.data.startX - a,
                    n = this.data.delBtnWidth,
                    o = i > n / 2 ? "left:-" + n + "px" : "left:0px",
                    c = "hotelPriceMonitors[".concat(e, "].txtStyle");
                  this.setData((0, l.Z)({}, c, o));
                }
              },
              delHotelPriceMonitor: function (t) {
                var e = this,
                  a = t.currentTarget.dataset.monitorid,
                  i = {
                    data: { clientVersion: k.Z.clientVersion, monitorId: a },
                  },
                  n = this.data.dateList.find(function (t) {
                    return t.isSelected;
                  });
                (0, p.G$)(i)
                  .then(function (t) {
                    if (1 === t.resultCode)
                      if (
                        1 === e.data.dateList.length &&
                        1 === e.data.hotelPriceMonitors.length
                      )
                        e.delHotelPriceMonitorTask();
                      else {
                        var a =
                          1 === e.data.hotelPriceMonitors.length
                            ? e.data.dateList[0].value
                            : n.value;
                        e.getMonitorTaskDetail(e.data.taskId, a);
                      }
                  })
                  .catch(function (t) {
                    return console.log(t);
                  });
              },
              selectDate: function (t) {
                var e = t.currentTarget.dataset.date,
                  a = this.data,
                  i = a.dateList,
                  n = a.taskId;
                i.forEach(function (t) {
                  t.isSelected = t.value === e;
                }),
                  this.setData({ dateList: i }),
                  this.getMonitorTaskDetail(n, e);
              },
            },
            x =
              (0, Z.h)()(
                (i =
                  f()(v)(
                    (i = (function (t) {
                      (0, s.Z)(a, t);
                      var e = (0, r.Z)(a);
                      function a() {
                        return (0, o.Z)(this, a), e.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              var t = this,
                                e = this.data,
                                a = e.isTieyou,
                                i = e.taskName,
                                n = e.priceRange,
                                o = e.starRange,
                                c = e.dateStr,
                                s = e.dateList,
                                r = e.showLoading,
                                l = e.hotelPriceMonitors;
                              return (0, V.BX)(h.Block, {
                                children: [
                                  (0, V.tZ)(h.View, {
                                    className:
                                      "monitor-top " + (a ? "ty" : "zx"),
                                    children: (0, V.BX)(h.View, {
                                      className: "monitor-top-bd",
                                      children: [
                                        (0, V.BX)(h.View, {
                                          className: "lbox",
                                          children: [
                                            (0, V.tZ)(h.View, {
                                              className:
                                                "icon-loading " +
                                                (a ? "ty" : "zx"),
                                            }),
                                            (0, V.tZ)(h.Text, {
                                              className:
                                                "ifont-light iconfont color-primary",
                                            }),
                                          ],
                                        }),
                                        (0, V.BX)(h.View, {
                                          className: "cont",
                                          children: [
                                            (0, V.tZ)(h.View, {
                                              className: "tit",
                                              children: i,
                                            }),
                                            (0, V.tZ)(h.View, {
                                              className: "txt",
                                              children: n,
                                            }),
                                            (0, V.BX)(h.View, {
                                              className: "txt",
                                              children: [
                                                o &&
                                                  (0, V.tZ)(h.Text, {
                                                    className: "tgrey",
                                                    children: o,
                                                  }),
                                                c &&
                                                  (0, V.tZ)(h.Text, {
                                                    className: "tgrey",
                                                    children: c + "入住",
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, V.tZ)(h.Button, {
                                          className: "btn-edit",
                                          id: "AXGn",
                                          onClick: this.gotoHotelMonitoredit,
                                          children: "编辑",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, V.BX)(h.View, {
                                    className: "wrap",
                                    children: [
                                      (0, V.tZ)(h.View, {
                                        className: "monitor-tit",
                                        children: "当前低价",
                                      }),
                                      (0, V.tZ)(h.View, {
                                        className: "monitor-tag",
                                        children: (0, V.tZ)(h.View, {
                                          className: "tag-list",
                                          children:
                                            s &&
                                            s.map(function (e, i) {
                                              return (0,
                                              V.tZ)(h.View, { className: "item " + (e.isSelected ? (a ? "ty" : "zx") : ""), id: "AXGo", onClick: t.selectDate, "data-date": e.value, "data-idx": i, children: e.value }, "index");
                                            }),
                                        }),
                                      }),
                                      (0, V.BX)(h.View, {
                                        className: "monitor-list",
                                        children: [
                                          r &&
                                            (0, V.tZ)(h.Block, {
                                              children: [1, 2, 3, 4, 5].map(
                                                function (t, e) {
                                                  return (0, V.BX)(
                                                    h.View,
                                                    {
                                                      className:
                                                        "skeleton-item",
                                                      children: [
                                                        (0, V.tZ)(h.View, {
                                                          className: "img",
                                                        }),
                                                        (0, V.BX)(h.View, {
                                                          className: "cont",
                                                          children: [
                                                            (0, V.tZ)(h.View, {
                                                              className:
                                                                "s-tit",
                                                              children: t.name,
                                                            }),
                                                            (0, V.tZ)(h.View, {
                                                              className:
                                                                "s-txt",
                                                              children: t.zone,
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    },
                                                    e
                                                  );
                                                }
                                              ),
                                            }),
                                          !r &&
                                            (0, V.tZ)(h.Block, {
                                              children:
                                                l &&
                                                l.map(function (e, a) {
                                                  return (0, V.BX)(
                                                    h.View,
                                                    {
                                                      className: "item",
                                                      id: "AXGp",
                                                      onClick:
                                                        t.gotoHotelDetail,
                                                      "data-item": e,
                                                      style: e.txtStyle,
                                                      onTouchStart: t.touchS,
                                                      onTouchMove: t.touchM,
                                                      onTouchEnd: t.touchE,
                                                      "data-index": a,
                                                      children: [
                                                        (0, V.tZ)(h.Image, {
                                                          src: e.logo,
                                                          className: "img",
                                                        }),
                                                        (0, V.BX)(h.View, {
                                                          className: "cont",
                                                          children: [
                                                            (0, V.tZ)(h.View, {
                                                              className: "tit",
                                                              children: e.name,
                                                            }),
                                                            (0, V.BX)(h.View, {
                                                              className: "txt",
                                                              children: [
                                                                e.commonScore &&
                                                                  e.commonScore >
                                                                    0 &&
                                                                  (0, V.tZ)(
                                                                    h.Text,
                                                                    {
                                                                      className:
                                                                        "color-primary",
                                                                      children:
                                                                        e.commonScore +
                                                                        "分",
                                                                    }
                                                                  ),
                                                                e.zone,
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        (0, V.BX)(h.View, {
                                                          className: "rbox",
                                                          children: [
                                                            (0, V.tZ)(h.View, {
                                                              className: "txt",
                                                              children:
                                                                "参考价",
                                                            }),
                                                            (0, V.tZ)(h.View, {
                                                              className:
                                                                "price color-red",
                                                              children:
                                                                e.priceInfo
                                                                  .couponSalePrice,
                                                            }),
                                                            2 === e.status &&
                                                              (0, V.BX)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "tag-red color-red",
                                                                  children: [
                                                                    (0, V.tZ)(
                                                                      h.Text,
                                                                      {
                                                                        className:
                                                                          "ifont-down iconfont",
                                                                      }
                                                                    ),
                                                                    e.tips,
                                                                  ],
                                                                }
                                                              ),
                                                            2 !== e.status &&
                                                              (0, V.tZ)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "tag-grey",
                                                                  children:
                                                                    e.tips,
                                                                }
                                                              ),
                                                          ],
                                                        }),
                                                        (0, V.tZ)(h.View, {
                                                          className:
                                                            "item-delete",
                                                          id: "AXGq",
                                                          onClick: function (
                                                            e
                                                          ) {
                                                            e.stopPropagation(),
                                                              t.delHotelPriceMonitor(
                                                                e
                                                              );
                                                          },
                                                          "data-monitorid":
                                                            e.id,
                                                          children: (0, V.tZ)(
                                                            h.Text,
                                                            {
                                                              className:
                                                                "iconfont ifont-trash",
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    },
                                                    "index"
                                                  );
                                                }),
                                            }),
                                        ],
                                      }),
                                      (0, V.tZ)(h.Button, {
                                        className: "btn-cancel",
                                        id: "AXGr",
                                        onClick: this.delHotelPriceMonitorTask,
                                        children: "取消降价提醒",
                                      }),
                                    ],
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        a
                      );
                    })(d.default.Component))
                  ) || i)
              ) || i;
          Page(
            (0, n.createPageConfig)(
              x,
              "pages/hotel/packages/monitordetail/monitordetail",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "任务详情",
                navigationBarFrontColor: "#ffffff",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#F5F5F5",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(1728);
        }),
          t.O();
      },
    ]);
})();
