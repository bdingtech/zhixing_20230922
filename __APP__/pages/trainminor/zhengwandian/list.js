!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [36915],
    {
      65292: function (t, e, i) {
        var a,
          n = i(32180),
          s = i(57042),
          r = i(24460),
          o = i(21867),
          l = i(86066),
          c = i(298),
          h = i(74921),
          d = i(52500),
          u = i(71515),
          m = i(92954),
          f = i.n(m),
          Z = i(48792),
          g = i.n(Z),
          p = i(79792),
          v = i(8271),
          w = i.n(v),
          N = i(10741),
          y = i(48813),
          D = (function (t) {
            (0, o.Z)(i, t);
            var e = (0, l.Z)(i);
            function i() {
              return (0, s.Z)(this, i), e.apply(this, arguments);
            }
            return (
              (0, r.Z)(i, [
                {
                  key: "render",
                  value: function () {
                    var t = this.props.data || {},
                      e = t.stationName,
                      i = t.startTime,
                      a = t.arrivalTime,
                      n = t.stopMinutes,
                      s = t.isDepartureStation,
                      r = t.delayInfo,
                      o = t.arriveDelayInfo,
                      l = t.isDestination,
                      c = t.absArriveDelayInfo;
                    return (0, y.tZ)(u.View, {
                      children: (0, y.BX)(u.View, {
                        style: "flex:1;display:flex",
                        children: [
                          (0, y.tZ)(u.View, {
                            className: "station",
                            children: e,
                          }),
                          s
                            ? (0, y.tZ)(u.Block, {
                                children: (0, y.tZ)(u.View, {
                                  className: "time",
                                  children: i,
                                }),
                              })
                            : l
                            ? (0, y.tZ)(u.Block, {
                                children: (0, y.tZ)(u.View, {
                                  className: "time",
                                  children: a,
                                }),
                              })
                            : (0, y.tZ)(u.Block, {
                                children: (0, y.BX)(u.View, {
                                  className: "time",
                                  children: [
                                    a,
                                    (0, y.tZ)(u.Text, { children: "-" }),
                                    (0, y.tZ)(u.Icon, {
                                      className: "icon-time",
                                    }),
                                    (0, y.tZ)(u.Text, { children: n + "分" }),
                                    (0, y.tZ)(u.Text, { children: "-" }),
                                    i,
                                  ],
                                }),
                              }),
                          (0, y.BX)(u.View, {
                            className: "status",
                            children: [
                              s &&
                                (0, y.tZ)(u.Block, {
                                  children: r
                                    ? (0, y.tZ)(u.Block, {
                                        children:
                                          r > 0
                                            ? (0, y.tZ)(u.Block, {
                                                children: (0, y.tZ)(u.Text, {
                                                  className: "tred",
                                                  children: "晚" + r + "分",
                                                }),
                                              })
                                            : (0, y.tZ)(u.Block, {
                                                children: "正点",
                                              }),
                                      })
                                    : (0, y.tZ)(u.Block, { children: "--" }),
                                }),
                              !s &&
                                (0, y.tZ)(u.Block, {
                                  children: o
                                    ? (0, y.tZ)(u.Block, {
                                        children:
                                          o > 0
                                            ? (0, y.tZ)(u.Block, {
                                                children: (0, y.tZ)(u.Text, {
                                                  className: "tred",
                                                  children: "晚" + c + "分",
                                                }),
                                              })
                                            : o < 0
                                            ? (0, y.tZ)(u.Block, {
                                                children: (0, y.tZ)(u.Text, {
                                                  className: "tblue",
                                                  children: "早" + c + "分",
                                                }),
                                              })
                                            : (0, y.tZ)(u.Block, {
                                                children: "正点",
                                              }),
                                      })
                                    : (0, y.tZ)(u.Block, { children: "--" }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    });
                  },
                },
              ]),
              i
            );
          })(d.default.Component),
          B = i(81957),
          x = ["isFrom"],
          T = p.default.isTieyou,
          k = {
            pageId: T ? "10650008771" : "10650008770",
            data: {
              isTieyou: T,
              trainNo: "",
              monthDay: "",
              fromStation: "",
              toStation: "",
              trainDelayInfos: [],
              trainList: [],
              prevList: [],
              nextList: [],
              isShowPrevList: !1,
              isShowNextList: !1,
              errMsg: "",
              isTrainListEmpty: !1,
            },
            onLoad: function (t) {
              console.log("zwd list onload options = ", t),
                (this.shareData = t);
              var e = t.isFrom,
                i = void 0 === e ? 1 : e,
                a = (0, h.Z)(t, x);
              this.setData((0, c.Z)({}, a)),
                f().setNavigationBarTitle({
                  title: 1 == i ? "车次查询" : "订单查询",
                });
            },
            onShow: function () {
              this.searchTrainDelay();
            },
            searchTrainDelay: function () {
              var t = this;
              return (0, N.Beu)(
                { trainNo: this.data.trainNo || "" },
                { cacheControl: { useCache: !0 } }
              )
                .then(function (e) {
                  var i = e.resultCode,
                    a = e.trainDelayInfos,
                    n = void 0 === a ? [] : a;
                  if (1 === i && n && n.length > 0)
                    return (
                      t.setData({ trainDelayInfos: n }),
                      t.handleTrainDelayInfos()
                    );
                  var s = "服务器开小差了，请稍后重试";
                  (1 !== i && -2 !== i) || (s = "该车次信息为空"),
                    -3 === i && (s = "车次、车站信息为空"),
                    t.setData({ isTrainListEmpty: !0, errMsg: s });
                })
                .catch(function (t) {
                  return console.log(t);
                });
            },
            togglePrevList: function () {
              this.setData({ isShowPrevList: !this.data.isShowPrevList });
            },
            toggleNextList: function () {
              this.setData({ isShowNextList: !this.data.isShowNextList });
            },
            handleTrainDelayInfos: function () {
              var t,
                e = this.data,
                i = e.trainDelayInfos,
                a = void 0 === i ? [] : i,
                n = e.fromStation,
                s = void 0 === n ? "" : n,
                r = e.toStation,
                o = void 0 === r ? "" : r;
              (a[0].isDepartureStation = !0),
                (a[a.length - 1].isDestination = !0),
                a.forEach(function (t) {
                  (t.stopMinutes =
                    0 == t.stopMinutes ? "--" : t.stopMinutes + ""),
                    (t.arrivalTime = t.arrivalTime.replace(/-+/g, "--")),
                    (t.startTime = t.startTime.replace(/-+/g, "--")),
                    (t.absArriveDelayInfo = Math.abs(t.arriveDelayInfo));
                });
              var l = [],
                c = [];
              if (
                (this.judgeDay() ||
                  a.forEach(function (t) {
                    (t.delayInfo = ""), (t.arriveDelayInfo = "");
                  }),
                s || o)
              ) {
                if (s && o) {
                  var h = a.findIndex(function (t) {
                      return t.stationName === s;
                    }),
                    d = a.findIndex(function (t) {
                      return t.stationName === o;
                    });
                  if (h < 0 || d < 0)
                    return void this.setData({
                      isTrainListEmpty: !0,
                      errMsg: "该车次信息为空",
                    });
                  (t = a.slice(h, d + 1)),
                    (l = a.slice(0, h)),
                    (c = a.slice(d + 1));
                }
              } else t = a;
              (t[0].showBoldDot = !0),
                (t[t.length - 1].showBoldDot = !0),
                this.setData({ trainList: t, prevList: l, nextList: c });
            },
            judgeDay: function () {
              return w()().format("M月D日") === this.data.monthDay;
            },
            onShareAppMessage: function () {
              var t = this.shareData,
                e = t.trainNo,
                i = void 0 === e ? "" : e,
                a = t.fromStation,
                n = void 0 === a ? "" : a,
                s = t.toStation,
                r = void 0 === s ? "" : s,
                o = t.monthDay,
                l = void 0 === o ? "" : o,
                c = t.isFrom,
                h = void 0 === c ? 1 : c;
              return {
                bu: "train",
                title: "我正在查询"
                  .concat(l)
                  .concat(i, "车次的正晚点，点击查看"),
                imageUrl: "https://images3.c-ctrip.com/zt/wechat/share-zwd.png",
                path: "/pages/trainminor/zhengwandian/list?trainNo="
                  .concat(i, "&fromStation=")
                  .concat(n, "&toStation=")
                  .concat(r, "&monthDay=")
                  .concat(l, "&isFrom=")
                  .concat(h),
              };
            },
            noop: function () {},
          },
          L =
            (0, B.h)()(
              (a =
                g()(k)(
                  (a = (function (t) {
                    (0, o.Z)(i, t);
                    var e = (0, l.Z)(i);
                    function i() {
                      return (0, s.Z)(this, i), e.apply(this, arguments);
                    }
                    return (
                      (0, r.Z)(i, [
                        {
                          key: "render",
                          value: function () {
                            var t = this.data,
                              e = t.isTieyou,
                              i = t.monthDay,
                              a = t.trainNo,
                              n = t.prevList,
                              s = t.isShowPrevList,
                              r = t.trainList,
                              o = t.nextList,
                              l = t.isShowNextList,
                              h = t.errMsg,
                              d = t.isTrainListEmpty;
                            return (0, y.BX)(u.Block, {
                              children: [
                                r.length > 0 &&
                                  (0, y.BX)(u.View, {
                                    className: "zwd-list",
                                    children: [
                                      (0, y.tZ)(u.View, {
                                        className: "tit " + (e ? "ty" : "zx"),
                                        children: i + " " + a,
                                      }),
                                      (0, y.BX)(u.View, {
                                        className:
                                          "zwd-list-bd " + (e ? "ty" : "zx"),
                                        children: [
                                          n.length > 0 &&
                                            (0, y.BX)(u.View, {
                                              className: "item disabled",
                                              children: [
                                                (0, y.tZ)(u.View, {
                                                  className: "count",
                                                  children:
                                                    n.length + "个前序站点",
                                                }),
                                                (0, y.tZ)(u.View, {
                                                  className: "status",
                                                  children: (0, y.tZ)(u.Text, {
                                                    className: "tblue",
                                                    id: "AGAM",
                                                    onClick:
                                                      this.togglePrevList,
                                                    children: s
                                                      ? "收起"
                                                      : "展开",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          s &&
                                            n.length > 0 &&
                                            (0, y.tZ)(u.Block, {
                                              children: n.map(function (t) {
                                                return (0,
                                                y.tZ)(u.View, { className: "item disabled", children: (0, y.tZ)(D, { data: (0, c.Z)({}, t) }) }, "index");
                                              }),
                                            }),
                                          r.map(function (t) {
                                            return (0,
                                            y.tZ)(u.View, { className: "item " + (t.showBoldDot ? "strong" : ""), children: (0, y.tZ)(D, { data: (0, c.Z)({}, t) }) }, "index");
                                          }),
                                          o.length > 0 &&
                                            (0, y.BX)(u.View, {
                                              className: "item disabled",
                                              children: [
                                                (0, y.tZ)(u.View, {
                                                  className: "count",
                                                  children:
                                                    o.length + "个后序站点",
                                                }),
                                                (0, y.tZ)(u.View, {
                                                  className: "status",
                                                  children: (0, y.tZ)(u.Text, {
                                                    className: "tblue",
                                                    id: "AGAN",
                                                    onClick:
                                                      this.toggleNextList,
                                                    children: l
                                                      ? "收起"
                                                      : "展开",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          l &&
                                            o.length > 0 &&
                                            (0, y.tZ)(u.Block, {
                                              children: o.map(function (t) {
                                                return (0,
                                                y.tZ)(u.View, { className: "item disabled", children: (0, y.tZ)(D, { data: (0, c.Z)({}, t) }) }, "index");
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                d &&
                                  (0, y.BX)(u.View, {
                                    className: "order-none",
                                    children: [
                                      (0, y.tZ)(u.Image, {
                                        src:
                                          "http://images3.c-ctrip.com/zt/wechat/" +
                                          (e
                                            ? "list-none-ty"
                                            : "list-none-zx") +
                                          ".png",
                                        className: "img-none",
                                      }),
                                      (0, y.tZ)(u.View, {
                                        className: "txt",
                                        children: h,
                                      }),
                                    ],
                                  }),
                                (0, y.tZ)(u.Button, {
                                  className: "btn-primary",
                                  hoverClass: "btn-primary_hover",
                                  openType: "share",
                                  "data-flag": "shareToFriends",
                                  id: "AGAO",
                                  onClick: this.noop,
                                  "data-ubt-key":
                                    "wx_zhengwandian_landpage_shareToFriends",
                                  children: (0, y.tZ)(u.View, {
                                    className:
                                      "fixed-share " + (e ? "ty" : "zx"),
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
        (L.enableShareAppMessage = !0),
          Page(
            (0, n.createPageConfig)(
              L,
              "pages/trainminor/zhengwandian/list",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "车次查询",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0075F4",
                backgroundColorBottom: "#ffffff",
              } || {}
            )
          );
      },
    },
    function (t) {
      t.O(0, [19559, 11216, 68592], function () {
        return (function (e) {
          return t((t.s = e));
        })(65292);
      }),
        t.O();
    },
  ]);
})();
