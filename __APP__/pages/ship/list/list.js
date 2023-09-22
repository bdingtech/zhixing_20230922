!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/66cb5e20cb14a14f92d10c9100ba2701.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [84979],
      {
        59703: function (e, t, i) {
          var o,
            a = i(32180),
            n = i(57042),
            l = i(24460),
            s = i(21867),
            r = i(86066),
            c = i(52500),
            d = i(71515),
            m = i(92954),
            u = i.n(m),
            h = i(20592),
            f = i(50185),
            v = i(43213),
            g = i(8271),
            p = i.n(g),
            D = i(90481),
            y = i(58676),
            w = i(49120),
            C = i(79792),
            x = i(81957),
            b = i(22276),
            T = i(48813),
            Z = c.default.memo(function (e) {
              var t,
                i,
                o,
                a,
                n,
                l,
                s = e.shipInfo,
                r = void 0 === s ? null : s,
                c = e.onShowDescDialog,
                m = void 0 === c ? function () {} : c;
              if (!r) return null;
              var u =
                  0 !==
                  (null === (t = r.bookInfo) || void 0 === t
                    ? void 0
                    : t.bookable),
                h = (null == r ? void 0 : r.taglist) || [],
                f =
                  (null === (i = r.shiftType) || void 0 === i
                    ? void 0
                    : i.filter(function (e) {
                        return [2, 4].includes(e.type);
                      })) || [],
                v =
                  (null === (o = h = [].concat((0, b.Z)(h), (0, b.Z)(f))) ||
                  void 0 === o
                    ? void 0
                    : o.length) > 0;
              return (0, T.BX)(d.View, {
                className: "ship-list-item "
                  .concat(v ? "pt44" : "", " ")
                  .concat(u ? "" : "disabled"),
                id: "AOAa",
                onClick: function () {
                  var t;
                  return null == e || null === (t = e.onClick) || void 0 === t
                    ? void 0
                    : t.call(e, r);
                },
                children: [
                  v &&
                    (0, T.tZ)(d.View, {
                      className: "tagList",
                      children: h.map(function (e, t) {
                        return (0, T.BX)(
                          d.View,
                          {
                            className: "tag",
                            onClick: function (t) {
                              t.stopPropagation(), m(e.desc);
                            },
                            children: [
                              (0, T.tZ)(d.Text, { children: e.title }),
                              e.desc &&
                                (0, T.tZ)(d.Text, {
                                  className: "ifont-detail iconfont",
                                }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                  2 === r.fromTimeType &&
                    (0, T.BX)(d.View, {
                      className: "flow-shift flex-align-items-center",
                      children: [
                        (0, T.tZ)(d.View, {
                          className: "time-tag",
                          children: "首",
                        }),
                        (0, T.tZ)(d.View, {
                          className: "f-time mr20",
                          children: r.startTime,
                        }),
                        (0, T.tZ)(d.View, {
                          className: "time-tag",
                          children: "末",
                        }),
                        (0, T.tZ)(d.View, {
                          className: "f-time",
                          children: r.lastFromTime,
                        }),
                      ],
                    }),
                  (0, T.BX)(d.View, {
                    className: "flex ".concat(
                      [2, 4].includes(r.fromTimeType) ? "flow-ship" : ""
                    ),
                    children: [
                      (0, T.BX)(d.View, {
                        className: "from flex flex-column",
                        children: [
                          ![2, 4].includes(r.fromTimeType) &&
                            (0, T.tZ)(d.Text, {
                              className: "txt time-txt",
                              children: r.fromTime,
                            }),
                          (0, T.tZ)(d.Text, {
                            className: "txt station-txt",
                            children: r.fromStation,
                          }),
                        ],
                      }),
                      (0, T.BX)(d.View, {
                        className:
                          "middle flex-1 flex-align-items-center flex-column",
                        children: [
                          (0, T.tZ)(d.Text, {
                            className: "txt other-txt",
                            children: r.costTimeDesc,
                          }),
                          (0, T.tZ)(d.Image, {
                            className: "icon",
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon_ht_lb@3x.png",
                          }),
                          (0, T.tZ)(d.Text, {
                            className: "txt other-txt",
                            children: r.busType,
                          }),
                        ],
                      }),
                      (0, T.BX)(d.View, {
                        className: "to flex flex-column",
                        children: [
                          ![2, 4].includes(r.fromTimeType) &&
                            (0, T.tZ)(d.Text, {
                              className: "txt time-txt",
                              children: r.toTime,
                            }),
                          (0, T.tZ)(d.Text, {
                            className: "txt station-txt",
                            children: r.toStation,
                          }),
                          r.toDay > 0 &&
                            (0, T.BX)(d.View, {
                              className: "cost-days",
                              children: ["+", r.toDay, "天"],
                            }),
                        ],
                      }),
                      (0, T.BX)(d.View, {
                        children: [
                          (0, T.BX)(d.View, {
                            className: "price",
                            children: [
                              (0, T.tZ)(d.Text, {
                                className: "unit",
                                children: "¥",
                              }),
                              (0, T.tZ)(d.Text, {
                                className: "num",
                                children: r.showPrice,
                              }),
                            ],
                          }),
                          !u &&
                            (null === (a = r.bookInfo) || void 0 === a
                              ? void 0
                              : a.message) &&
                            (0, T.tZ)(d.View, {
                              className: "unbookable-tips",
                              children: r.bookInfo.message,
                            }),
                        ],
                      }),
                    ],
                  }),
                  4 === r.fromTimeType &&
                    (null == r || null === (n = r.fromPeriod) || void 0 === n
                      ? void 0
                      : n.length) > 0 &&
                    (0, T.BX)(d.View, {
                      className: "time-type-desc",
                      children: [
                        "固定出发时间段: ",
                        (0, T.tZ)(d.Text, {
                          style: "color: #198cff;",
                          children:
                            null == r ||
                            null === (l = r.fromPeriod) ||
                            void 0 === l
                              ? void 0
                              : l.join(","),
                        }),
                        "，具体发船时间见出票通知",
                      ],
                    }),
                ],
              });
            }),
            k = i(39886),
            N = i(93621),
            S = "YYYY-MM-DD",
            V = p()().format(S),
            B =
              (0, x.h)(!1, { usePageWrapper: !0 })(
                (o = (function (e) {
                  (0, s.Z)(i, e);
                  var t = (0, r.Z)(i);
                  function i(e) {
                    var o;
                    return (
                      (0, n.Z)(this, i),
                      ((o = t.call(this, e)).pageId = "10650060008"),
                      (o.state = {
                        shipList: [],
                        fromCity: "",
                        toCity: "",
                        chooseDate: "",
                        isShowCalendar: !1,
                        dateInfo: {},
                      }),
                      (o.beginDate = V),
                      (o.endDate = p()()
                        .add((h.ET.preRobDays || 60) - 1, "day")
                        .format(S)),
                      o
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            t,
                            i = this,
                            o =
                              (null === (e = u().getCurrentInstance()) ||
                              void 0 === e ||
                              null === (t = e.router) ||
                              void 0 === t
                                ? void 0
                                : t.params) || {},
                            a = o.mDate,
                            n = o.mFrom,
                            l = o.mTo,
                            s = decodeURIComponent(n),
                            r = decodeURIComponent(l),
                            c = V;
                          p()(a).isAfter(p()(V)) && (c = a);
                          var d = o.utmsource || o.utmSource || "";
                          this.setState(
                            {
                              fromCity: s,
                              toCity: r,
                              chooseDate: c,
                              utmSource: d,
                            },
                            function () {
                              i.loadData(),
                                d &&
                                  d.length > 0 &&
                                  N.Z.saveShipUtmSource(i.state.utmSource);
                            }
                          );
                        },
                      },
                      {
                        key: "loadData",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = {
                              fromCity: t.fromCity,
                              toCity: t.toCity,
                              fromDate: t.chooseDate,
                              utmSource: t.utmSource,
                              latitude: "",
                              longitude: "",
                              upgradeServiceList: [],
                              fromStationList: [],
                              toStationList: [],
                              fromTimeList: [],
                              shipListVersion: 1,
                            };
                          (0, w.showLoading)(),
                            (0, k.M0)(i)
                              .then(function (t) {
                                var i,
                                  o = [];
                                1 === t.code &&
                                  (o = e.handleShipData(
                                    (null === (i = t.data) || void 0 === i
                                      ? void 0
                                      : i.shipProducts) || []
                                  )),
                                  e.setState({ shipList: o });
                              })
                              .catch(function (t) {
                                console.log(t), e.setState({ shipList: [] });
                              })
                              .finally(function () {
                                (0, w.hideLoading)();
                              });
                        },
                      },
                      {
                        key: "handleShipData",
                        value: function (e) {
                          if (e.length > 0) {
                            var t = [],
                              i = [];
                            return (
                              e.forEach(function (e) {
                                var o,
                                  a = e.shipProduct,
                                  n = void 0 === a ? {} : a;
                                0 ===
                                (null == n ||
                                null === (o = n.bookInfo) ||
                                void 0 === o
                                  ? void 0
                                  : o.bookable)
                                  ? i.push(n)
                                  : t.push(n);
                              }),
                              [].concat(t, i)
                            );
                          }
                          return [];
                        },
                      },
                      {
                        key: "onClickChangeDate",
                        value: function (e) {
                          var t = this;
                          this.setState({ chooseDate: e }, function () {
                            t.loadData();
                          });
                        },
                      },
                      {
                        key: "showCalendar",
                        value: function () {
                          var e = this.state.chooseDate,
                            t = p()(e).format("YYYY-MM-DD"),
                            i = p()().format("YYYY-MM-DD"),
                            o = p()()
                              .add((h.ET.preRobDays || 60) - 1, "day")
                              .format("YYYY-MM-DD");
                          this.setState({
                            isShowCalendar: !0,
                            dateInfo: {
                              chooseDate: t,
                              beginDate: i,
                              endDate: o,
                            },
                          });
                        },
                      },
                      {
                        key: "changeDate",
                        value: function (e) {
                          var t;
                          e &&
                            (this.closeCalendarDrawer(),
                            null === (t = this.$datePicker) ||
                              void 0 === t ||
                              t.refreshSelectDate(e),
                            this.onClickChangeDate(e));
                        },
                      },
                      {
                        key: "closeCalendarDrawer",
                        value: function () {
                          this.setState({ isShowCalendar: !1 });
                        },
                      },
                      {
                        key: "gotoXPage",
                        value: function (e) {
                          var t;
                          if (
                            0 !==
                            (null == e ||
                            null === (t = e.bookInfo) ||
                            void 0 === t
                              ? void 0
                              : t.bookable)
                          ) {
                            var i = this.state,
                              o = i.fromCity,
                              a = i.toCity,
                              n = {
                                from_city_name:
                                  o || (null == e ? void 0 : e.fromCity),
                                to_city_name:
                                  a || (null == e ? void 0 : e.toCity),
                                from_date: null == e ? void 0 : e.fromDate,
                                from_time: null == e ? void 0 : e.fromTime,
                                ship_name:
                                  (null == e ? void 0 : e.busNumber) || "",
                                vendor: (null == e ? void 0 : e.symbol) || "",
                                from_station_name:
                                  null == e ? void 0 : e.fromStation,
                                to_station_name:
                                  null == e ? void 0 : e.toStation,
                                websites: null == e ? void 0 : e.websites,
                              };
                            this.navigateTo({
                              url: "/pages/taroCRN/ship/pages/x/index",
                              data: n,
                            });
                          }
                        },
                      },
                      {
                        key: "onShowDescDialog",
                        value: function (e) {
                          e && this.showCommonDialog(e);
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          var e = this.$instance.router.params || {},
                            t = e.mFrom,
                            i = e.mTo,
                            o = decodeURIComponent(t),
                            a = decodeURIComponent(i);
                          return (0, T.BX)(d.View, { children: [o, "-", a] });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.fromCity,
                            o = t.toCity,
                            a = t.chooseDate,
                            n = t.shipList,
                            l = t.isShowCalendar,
                            s = t.dateInfo;
                          return (0, T.BX)(d.View, {
                            className: "ship-list ".concat(
                              C.default.isTieyou ? "ty" : "zx"
                            ),
                            children: [
                              (0, T.tZ)(d.Block, {
                                children:
                                  a &&
                                  (0, T.tZ)(v.Z, {
                                    pageId: this.pageId,
                                    ref: function (t) {
                                      return (e.$datePicker = t);
                                    },
                                    chooseDate: a,
                                    beginDate: this.beginDate,
                                    endDate: this.endDate,
                                    onChangeDate:
                                      this.onClickChangeDate.bind(this),
                                    onShowCalendar:
                                      this.showCalendar.bind(this),
                                  }),
                              }),
                              (0, T.BX)(d.Block, {
                                children: [
                                  (0, T.tZ)(f.Z, {
                                    isFromList: !0,
                                    refreshNoticeParams: {
                                      fromTime: p()(a).format(
                                        "YYYY-MM-DD HH:mm:ss"
                                      ),
                                      fromCity: i,
                                      toCity: o,
                                      productType: "ship",
                                    },
                                  }),
                                  n.length > 0 &&
                                    (0, T.tZ)(d.ScrollView, {
                                      scrollY: "true",
                                      className: "content-box",
                                      children: n.map(function (t, i) {
                                        return (0, T.tZ)(
                                          d.Block,
                                          {
                                            children: (0, T.tZ)(Z, {
                                              shipInfo: t,
                                              id: "AOAc",
                                              onClick: function (t) {
                                                return e.gotoXPage(t);
                                              },
                                              onShowDescDialog:
                                                e.onShowDescDialog.bind(e),
                                            }),
                                          },
                                          i
                                        );
                                      }),
                                    }),
                                  n.length <= 0 &&
                                    (0, T.BX)(d.View, {
                                      className: "no-result",
                                      children: [
                                        (0, T.tZ)(d.View, { className: "img" }),
                                        (0, T.BX)(d.View, {
                                          className: "text",
                                          children: [
                                            "对不起， 您搜索的",
                                            (0, T.BX)(d.Text, {
                                              className: "strong",
                                              children: [i, " - ", o],
                                            }),
                                          ],
                                        }),
                                        (0, T.tZ)(d.View, {
                                          className: "text",
                                          children: "未找到班次~",
                                        }),
                                      ],
                                    }),
                                  (0, T.tZ)(D.Z, {
                                    visible: l,
                                    title: "选择出发日期",
                                    maxHeight: "80%",
                                    beginDate: s.beginDate,
                                    endDate: s.endDate,
                                    selectedDate: s.chooseDate,
                                    onConfirm: this.changeDate,
                                    onClose: this.closeCalendarDrawer,
                                  }),
                                  (0, T.tZ)(y.Z, {
                                    ref: function (t) {
                                      e.onDialogAttach(t);
                                    },
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
                })(c.default.Component))
              ) || o;
          Page(
            (0, a.createPageConfig)(
              B,
              "pages/ship/list/list",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                enablePullDownRefresh: !1,
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [606, 8831, 55979, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(59703);
        }),
          e.O();
      },
    ]);
})();
