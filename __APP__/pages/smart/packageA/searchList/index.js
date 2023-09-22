!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../sub-common/849af97262623a3a03a4c9ba6f8707d6.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [88750],
      {
        1746: function (e, t, i) {
          var a,
            n = i(32180),
            r = i(79301),
            s = i(95308),
            c = i(298),
            o = i(57042),
            l = i(24460),
            d = i(81876),
            h = i(21867),
            m = i(86066),
            u = i(45023),
            f = i(52500),
            p = i(92954),
            v = i.n(p),
            Z = i(71515),
            k = i(81957),
            w = i(79792),
            g = i(38911),
            y = i(49120),
            N = i(79910),
            C = i(12407),
            T = i(38136),
            D = i(20592),
            V = i(4102),
            S = i(8271),
            x = i.n(S),
            P = i(48813),
            b = "YYYY-MM-DD",
            I = x()().format(b),
            B = x()().add(60, "day").format(b),
            M = f.default.memo(function (e) {
              var t = e.visible,
                i = e.onClose,
                a = e.onClickDate,
                n = e.selectedDate,
                r = void 0 === n ? I : n,
                s = e.beginDate,
                c = void 0 === s ? I : s,
                o = e.endDate,
                l = void 0 === o ? B : o,
                d = (0, f.useRef)(1),
                h = (0, f.useCallback)(
                  function (e) {
                    var t = {},
                      i = x()()
                        .add(D.ET.preSaleDays - 1, "day")
                        .valueOf(),
                      a = x()(l).valueOf();
                    return (
                      r === e && (t.selected = !0),
                      i &&
                        a &&
                        V.Z.isAfter(e, i) &&
                        V.Z.isAfter(a, e) &&
                        (t.info = "可抢"),
                      t
                    );
                  },
                  [r, l]
                ),
                m = (0, T.G)(t, c, l, r, h, d.current),
                u = m.dateMap,
                p = m.scrollToMonth;
              return (
                (0, f.useEffect)(
                  function () {
                    t || d.current++;
                  },
                  [t, r]
                ),
                (0, P.tZ)(C.Z, {
                  visible: t,
                  onClose: i,
                  onClickDate: a,
                  dateMap: u,
                  scrollToMonth: p,
                })
              );
            }),
            L = i(70273),
            X = i(18596),
            A = i(65993),
            O = i(37451),
            E = (function (e) {
              (0, h.Z)(i, e);
              var t = (0, m.Z)(i);
              function i() {
                var e;
                return (
                  (0, o.Z)(this, i),
                  ((e = t.call(this)).state = {
                    timeZoneList: [
                      "00:00-06:00",
                      "06:00-09:00",
                      "09:00-12:00",
                      "12:00-15:00",
                      "15:00-18:00",
                      "18:00-24:00",
                    ],
                    isSelectedList: [!1, !1, !1, !1, !1, !1],
                  }),
                  e
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e = this.props.initTimeZoneList,
                        t = void 0 === e ? [] : e,
                        i = this.state,
                        a = i.timeZoneList,
                        n = i.isSelectedList;
                      t.forEach(function (e) {
                        var t = e.split("-"),
                          i = t[0],
                          r = t[1];
                        i &&
                          r &&
                          a.forEach(function (e, t) {
                            var a = e.split("-"),
                              s = a[0],
                              c = a[1];
                            parseInt(i) <= parseInt(s) &&
                              parseInt(r) >= parseInt(c) &&
                              (n[t] = !0);
                          });
                      }),
                        this.setState({ isSelectedList: n });
                    },
                  },
                  {
                    key: "toggleItemSelected",
                    value: function (e) {
                      var t = e.index,
                        i = this.state.isSelectedList;
                      (i[t] = !i[t]), this.setState({ isSelectedList: i });
                    },
                  },
                  {
                    key: "clickConfirm",
                    value: function () {
                      var e = this.props.onConfirm,
                        t = this.state,
                        i = t.isSelectedList,
                        a = t.timeZoneList,
                        n = [];
                      i.forEach(function (e, t) {
                        e && n.push(a[t]);
                      }),
                        e && e(n);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        i = t.onCancel,
                        a = t.visible,
                        n = this.state,
                        r = n.timeZoneList,
                        s = n.isSelectedList;
                      return (0, P.tZ)(A.Z, {
                        toggleLayer: i,
                        hideLayer: !a,
                        fixAtBottom: !0,
                        children: (0, P.tZ)(Z.View, {
                          className: "smart-time-zone-picker",
                          id: "ANAs",
                          onClick: function (e) {
                            return e.stopPropagation();
                          },
                          children: (0, P.BX)(Z.View, {
                            className: "time-zone-picker",
                            children: [
                              (0, P.BX)(Z.View, {
                                className: "time-zone-header",
                                children: [
                                  (0, P.tZ)(Z.View, {
                                    className: "cancel",
                                    id: "ANAt",
                                    onClick: i,
                                    children: "取消",
                                  }),
                                  (0, P.tZ)(Z.View, {
                                    className: "title",
                                    children: "出发时间",
                                  }),
                                  (0, P.tZ)(Z.View, {
                                    className: "confirm",
                                    id: "ANAu",
                                    onClick: this.clickConfirm.bind(this),
                                    children: "确认",
                                  }),
                                ],
                              }),
                              (0, P.tZ)(Z.View, {
                                className: "time-zone-list",
                                children: r.map(function (t, i) {
                                  return (0, P.tZ)(
                                    Z.View,
                                    {
                                      className: "time-zone-item "
                                        .concat(O.Z.tyClass, " ")
                                        .concat(s[i] ? "selected" : ""),
                                      id: "ANAv",
                                      onClick: function (t) {
                                        t.stopPropagation(),
                                          e.toggleItemSelected({ index: i });
                                      },
                                      children: t,
                                    },
                                    String(i)
                                  );
                                }),
                              }),
                            ],
                          }),
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(f.default.Component),
            z = "YYYY-MM-DD",
            R = x()().format(z),
            Y = x()().add(1, "day").format(z),
            G =
              (0, k.h)(!0)(
                (a = (function (e) {
                  (0, h.Z)(i, e);
                  var t = (0, m.Z)(i);
                  function i(e) {
                    var a;
                    return (
                      (0, o.Z)(this, i),
                      (a = t.call(this, e)),
                      (0, u.Z)((0, d.Z)(a), "initDate", function () {
                        var e = a.props.dateList || null,
                          t = a.props.chooseDate || R;
                        a.setDateMap(e, t);
                      }),
                      (a.state = {
                        isTieyou: w.default.isTieyou,
                        showThirdTab: !1,
                        dateView: "",
                        dateMap: [],
                      }),
                      a
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.initDate();
                        },
                      },
                      {
                        key: "componentDidUpdate",
                        value: function (e) {
                          this.props.chooseDate !== e.chooseDate &&
                            this.initDate();
                        },
                      },
                      {
                        key: "setDateMap",
                        value: function (e, t) {
                          var i = this,
                            a = [];
                          if (e && e.length > 0) a = e;
                          else
                            for (var n = 0; n < 60; n++)
                              a.push({
                                date:
                                  0 === n
                                    ? x()().format(z)
                                    : x()().add(n, "day").format(z),
                                desc: "",
                              });
                          a.forEach(function (e) {
                            if (e.date === R) e.weekDay = "今天";
                            else if (e.date === Y) e.weekDay = "明天";
                            else {
                              var t = new Date(e.date.replace(/\-/g, "/"));
                              e.weekDay = [
                                "周日",
                                "周一",
                                "周二",
                                "周三",
                                "周四",
                                "周五",
                                "周六",
                              ][t.getDay()];
                            }
                            (e.dateStr = e.date.slice(5, 10)),
                              e.desc && i.setState({ showThirdTab: !0 });
                          }),
                            this.setState({ dateMap: a }, function () {
                              i.refreshSelectDate(t);
                            });
                        },
                      },
                      {
                        key: "refreshSelectDate",
                        value: function (e) {
                          var t,
                            i = this.state.dateMap,
                            a = i.findIndex(function (t) {
                              return t.date === e;
                            }),
                            n = i.findIndex(function (e) {
                              return e.isActive;
                            });
                          (t =
                            e === R || e === Y
                              ? R
                              : x()(e).subtract(2, "day").format(z)),
                            i.forEach(function (e, t) {
                              t === n && (e.isActive = !1),
                                t === a && (e.isActive = !0);
                            }),
                            this.setState({
                              dateView: "c-".concat(t),
                              dateMap: i,
                            });
                        },
                      },
                      {
                        key: "onClickDate",
                        value: function (e) {
                          var t = e.currentTarget.dataset.date;
                          this.refreshSelectDate(t), this.props.onChangeDate(t);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isTieyou,
                            a = t.dateView,
                            n = t.dateMap,
                            r = t.showThirdTab,
                            s = this.props.onClickCalendar;
                          return (0, P.tZ)(Z.View, {
                            className: "smart-date-picker",
                            children: (0, P.BX)(Z.View, {
                              className:
                                "date-picker " +
                                (r ? "three " : "two ") +
                                (i ? "ty" : "zx"),
                              children: [
                                (0, P.tZ)(Z.View, {
                                  className:
                                    "calendar-list " + (i ? "ty" : "zx"),
                                  children: (0, P.tZ)(Z.ScrollView, {
                                    className: "calendar-scroll-list",
                                    scrollX: !0,
                                    scrollWithAnimation: "true",
                                    scrollIntoView: a,
                                    children: n.map(function (t, i) {
                                      return (0,
                                      P.tZ)(Z.Block, { children: (0, P.BX)(Z.View, { className: "item " + (t.isActive ? "cur bgcolor-primary" : ""), id: "c-" + t.date, "data-date": t.date, onClick: e.onClickDate.bind(e), children: [(0, P.tZ)(Z.View, { className: "week", children: t.weekDay }), (0, P.tZ)(Z.View, { className: "date", children: t.dateStr }), r && (0, P.tZ)(Z.View, { className: "desc", children: t.desc || "--" })] }) }, String(i));
                                    }),
                                  }),
                                }),
                                (0, P.tZ)(Z.View, {
                                  className: "calendar-all",
                                  id: "ANAm",
                                  onClick: s,
                                  children: (0, P.tZ)(Z.View, {
                                    className: "img",
                                  }),
                                }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(f.default.Component))
              ) || a,
            j = i(38561),
            U = (function (e) {
              (0, h.Z)(i, e);
              var t = (0, m.Z)(i);
              function i() {
                return (0, o.Z)(this, i), t.apply(this, arguments);
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "getTagName",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [];
                      if (0 !== e.length) {
                        var t = {
                          cheapest: "最省",
                          fastest: "最快",
                          best: "推荐",
                        };
                        return t[e[0]];
                      }
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.trip,
                        i = void 0 === t ? {} : t,
                        a = e.index,
                        n = e.onTap,
                        r = i.totalMinutes,
                        s = i.trafficMinutesCost,
                        c = i.totalPrice,
                        o = i.details,
                        l = void 0 === o ? [] : o,
                        d = i.fromStation,
                        h = i.toStation,
                        m = i.startTime,
                        u = i.arriveTime,
                        f = i.tagList,
                        p = i.transferInfo,
                        v = i.fromNearByFlag,
                        k = i.toNearByFlag,
                        w = i.fromStationInfo,
                        g = i.toStationInfo,
                        y = i.dayDiff,
                        N = (0, j.zE)(r),
                        C = l.length > 1 && p,
                        T = "";
                      f && (T = this.getTagName(f));
                      var D = "",
                        V = "",
                        S = "";
                      C
                        ? (p.length > 1
                            ? (D = p.length + "程中转")
                            : 1 === p.length && (D = p[0].transferAreaName),
                          (V = (0, j.zE)(r - s)))
                        : (S = (0, j.Kn)(l[0]));
                      var x = (0, j.MW)(l[0]).ticketLeft,
                        b = "";
                      return (
                        x > 0 && x < 10
                          ? (b = "仅剩" + x + "张")
                          : l.forEach(function (e) {
                              "T" === e.tripType &&
                                e.train.ticketLeft <= 0 &&
                                (b = e.train.jlTicket ? "可预约" : "去抢票");
                            }),
                        (0, P.tZ)(Z.Block, {
                          children: (0, P.BX)(Z.View, {
                            className: "smart-searchlist-tripitem",
                            "data-index": a,
                            "data-is_transfer": C,
                            id: "ANCM",
                            onClick: function (e) {
                              e.stopPropagation(), n(e);
                            },
                            children: [
                              (0, P.BX)(Z.View, {
                                className: "cont",
                                children: [
                                  (0, P.BX)(Z.View, {
                                    className: "from",
                                    children: [
                                      (0, P.tZ)(Z.View, {
                                        className: "time",
                                        children: m,
                                      }),
                                      (0, P.tZ)(Z.View, {
                                        className: "station",
                                        children: d,
                                      }),
                                    ],
                                  }),
                                  (0, P.BX)(Z.View, {
                                    className: "mid",
                                    children: [
                                      (0, P.tZ)(Z.View, {
                                        className: "cost-time",
                                        children: (C ? "全程" : "") + N,
                                      }),
                                      C
                                        ? (0, P.tZ)(Z.View, {
                                            className: "transit",
                                            children: (0, j.Y2)(D, 5),
                                          })
                                        : (0, P.tZ)(Z.View, {
                                            className: "separator",
                                          }),
                                      C
                                        ? (0, P.BX)(Z.View, {
                                            className: "transit-time",
                                            children: ["停留", V],
                                          })
                                        : (0, P.tZ)(Z.View, {
                                            className: "transport-no",
                                            children: (0, j.Y2)(S, 6),
                                          }),
                                    ],
                                  }),
                                  (0, P.BX)(Z.View, {
                                    className: "to",
                                    children: [
                                      (0, P.BX)(Z.View, {
                                        className: "time",
                                        children: [
                                          u,
                                          !!y &&
                                            (0, P.tZ)(Z.Text, {
                                              className: "diff",
                                              children: "+" + y,
                                            }),
                                        ],
                                      }),
                                      (0, P.tZ)(Z.View, {
                                        className: "station",
                                        children: h,
                                      }),
                                    ],
                                  }),
                                  (0, P.BX)(Z.View, {
                                    className: "price",
                                    children: [
                                      (0, P.BX)(Z.View, {
                                        className: "line-one",
                                        children: [
                                          T &&
                                            (0, P.tZ)(Z.Text, {
                                              className: "tag",
                                              children: T,
                                            }),
                                          (0, P.tZ)(Z.Text, {
                                            className: "num",
                                            children: c,
                                          }),
                                        ],
                                      }),
                                      (0, P.tZ)(Z.View, {
                                        className: "line-two",
                                        children:
                                          b &&
                                          (0, P.tZ)(Z.Text, {
                                            className: "ticket",
                                            children: b,
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (v || k) &&
                                (0, P.BX)(Z.View, {
                                  className: "bottom",
                                  children: [
                                    v &&
                                      (0, P.BX)(Z.Text, {
                                        className: "depart-distance",
                                        children: [
                                          "出发地距「",
                                          d,
                                          "」",
                                          w.stationDistance,
                                        ],
                                      }),
                                    k &&
                                      (0, P.BX)(Z.Text, {
                                        className: "dest-distance",
                                        children: [
                                          "目的地距「",
                                          h,
                                          "」",
                                          g.stationDistance,
                                        ],
                                      }),
                                  ],
                                }),
                            ],
                          }),
                        })
                      );
                    },
                  },
                ]),
                i
              );
            })(f.default.Component),
            q = {
              F: "ifont-air-fill",
              T: "ifont-train-fill",
              B: "ifont-bus-fill",
              S: "ifont-ship-fill",
              SC: "ifont-bus-fill",
            },
            F = { F: "flight", T: "train", B: "bus", S: "ship", SC: "bus" };
          var J,
            W = function (e) {
              var t = e.tripCard,
                i = void 0 === t ? {} : t,
                a = [];
              if (i.trips) {
                var n = i.trips[0].details;
                n &&
                  n.forEach(function (e) {
                    var t = {
                      type: e.tripType,
                      duration: (0, j.MW)(e).useMinutes,
                    };
                    a.push(t);
                  });
              }
              var r = 620;
              if (i && i.trips && i.trips[0].totalMinutes > 0) {
                var s = i.trips[0].totalMinutes,
                  c = i.maxMinutesCost,
                  o = 1 * s;
                r *= (s = o > c ? c : o) / i.maxMinutesCost;
              }
              if (!a || a.length < 1) return null;
              var l = a.length;
              return (
                (r = (r += 44) > 620 ? 620 : r),
                (0, P.tZ)(Z.View, {
                  className: "transport-icon",
                  style: { width: "".concat(r, "rpx") },
                  children: a.map(function (e, t) {
                    var i = q[e.type],
                      a = F[e.type];
                    return (0,
                    P.BX)(Z.View, { className: "duration " + a, style: { flex: e.duration }, children: [(0, P.tZ)(Z.View, { className: "icon-background " + a, children: (0, P.tZ)(Z.Text, { className: "type-icon iconfont " + i + " " + a }) }), t == l - 1 && (0, P.tZ)(Z.View, { className: "icon-background desc " + a, children: (0, P.tZ)(Z.Text, { className: "type-icon iconfont ifont-dest-fill " + a }) })] }, String(t));
                  }),
                })
              );
            },
            _ =
              (0, k.h)(!0)(
                (J = (function (e) {
                  (0, h.Z)(i, e);
                  var t = (0, m.Z)(i);
                  function i() {
                    return (0, o.Z)(this, i), t.apply(this, arguments);
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "clickCheckMore",
                        value: function (e) {
                          var t = e.currentTarget.dataset.index,
                            i = this.props.checkMore;
                          i && i({ cardIndex: t });
                        },
                      },
                      {
                        key: "clickTripItem",
                        value: function (e) {
                          var t = e.currentTarget.dataset,
                            i = t.index,
                            a = t.is_transfer,
                            n = this.props,
                            r = n.onTripItemClicked,
                            s = n.index;
                          r && r({ tripIndex: i, cardIndex: s, isTransfer: a });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.props,
                            i = t.tripCard,
                            a = void 0 === i ? {} : i,
                            n = t.index,
                            r = t.onTap,
                            s = a.minMinutesCost,
                            c = a.minPrice,
                            o = a.cardName,
                            l = a.trips,
                            d = void 0 === l ? [] : l,
                            h = (0, j.zE)(s);
                          return (0, P.tZ)(Z.View, {
                            className: "smart-searchlist-tripcard",
                            "data-index": n,
                            id: "ANCK",
                            onClick: r,
                            children: (0, P.BX)(Z.View, {
                              className: "card",
                              children: [
                                (0, P.BX)(Z.View, {
                                  className: "card-title",
                                  children: [
                                    (0, P.BX)(Z.View, {
                                      className: "card-title-line",
                                      children: [
                                        (0, P.tZ)(Z.Text, {
                                          className: "card-title-plan-txt",
                                          children: o,
                                        }),
                                        (0, P.BX)(Z.View, {
                                          className: "card-title-rt",
                                          children: [
                                            "¥",
                                            c,
                                            "起",
                                            (0, P.tZ)(Z.Text, {
                                              className: "divider",
                                            }),
                                            h,
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, P.tZ)(W, { tripCard: a }),
                                  ],
                                }),
                                (0, P.tZ)(Z.View, {
                                  className: "card-content",
                                  children: d.map(function (t, i) {
                                    return (0,
                                    P.BX)(Z.Block, { children: [(0, P.tZ)(U, { trip: t, index: i, onTap: e.clickTripItem.bind(e) }), i !== d.length - 1 && (0, P.tZ)(Z.View, { className: "separator" })] }, String(i));
                                  }),
                                }),
                                (0, P.BX)(Z.View, {
                                  className: "".concat(
                                    O.Z.tyClass,
                                    " check-more"
                                  ),
                                  id: "ANCL",
                                  onClick: function (t) {
                                    t.stopPropagation(), e.clickCheckMore(t);
                                  },
                                  "data-index": n,
                                  children: [
                                    "查看更多",
                                    (0, P.tZ)(Z.Text, {
                                      className: "ifont-arr iconfont",
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
                })(f.default.Component))
              ) || J;
          var H,
            K,
            Q = function (e) {
              var t = e.areaRemindInfo,
                i = void 0 === t ? {} : t,
                a = e.lineSnapshotDTO,
                n = void 0 === a ? {} : a,
                r = n.helperIcon,
                s = n.tripSubSuggestion,
                c = void 0 === s ? "" : s,
                o = n.tripSuggestion,
                l = void 0 === o ? "" : o;
              return c || l
                ? (0, P.BX)(Z.View, {
                    className: "assist",
                    children: [
                      (0, P.BX)(Z.View, {
                        className: "flex",
                        children: [
                          (0, P.BX)(Z.View, {
                            className: "avatar",
                            children: [
                              (0, P.tZ)(Z.Image, {
                                src: r,
                                className: "avatar-img",
                              }),
                              (0, P.tZ)(Z.View, {
                                className: "avatar-txt",
                                children: "小助手",
                              }),
                            ],
                          }),
                          (0, P.BX)(Z.View, {
                            className: "assist-mid",
                            children: [
                              (0, P.tZ)(Z.View, {
                                className: "assist-title",
                                children: c,
                              }),
                              (0, P.tZ)(Z.View, {
                                className: "assist-subTitle",
                                children: l,
                              }),
                            ],
                          }),
                          (0, P.tZ)(Z.View, {
                            className: "like",
                            children: (0, P.tZ)(Z.Image, {
                              className: "img",
                              src: "https://images3.c-ctrip.com/zt/smarttrip/".concat(
                                w.default.isTieyou ? "ty" : "zx",
                                "/icon_good.png"
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, P.BX)(Z.View, {
                        className: "flex warn",
                        id: "ANCJ",
                        onClick: function () {
                          v().showModal({
                            title: "温馨提示",
                            content: i.remindDesc,
                            showCancel: !1,
                            confirmText: "知道了",
                          });
                        },
                        children: [
                          (0, P.tZ)(Z.Text, {
                            className: "warn-text",
                            children: i.remindDesc,
                          }),
                          (0, P.tZ)(Z.Text, {
                            className: "ifont-arr iconfont",
                          }),
                        ],
                      }),
                    ],
                  })
                : null;
            },
            $ =
              (0, k.h)(!0)(
                (H = (function (e) {
                  (0, h.Z)(i, e);
                  var t = (0, m.Z)(i);
                  function i() {
                    var e;
                    return (
                      (0, o.Z)(this, i),
                      ((e = t.call(this)).state = {
                        priority: "General",
                        priorityDescMap: {
                          General: "综合排序",
                          UseMinutes: "耗时最短",
                          HighPerformance: "价格最低",
                          Business: "商务舒适",
                          LessTransfer: "最少换乘",
                        },
                      }),
                      e
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this.props.initPriority,
                            t = void 0 === e ? "General" : e;
                          this.setState({ priority: t });
                        },
                      },
                      { key: "noop", value: function () {} },
                      {
                        key: "clickItem",
                        value: function (e) {
                          var t = e.currentTarget.dataset.priority;
                          this.setState({ priority: t });
                          var i = this.props.onPriorityItemClicked;
                          (void 0 === i ? this.noop : i)(t);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.priority,
                            a = t.priorityDescMap,
                            n = this.props,
                            r = n.onDepartTimeClicked,
                            s = n.timeZoneList,
                            c = void 0 === s ? [] : s,
                            o = c.length > 0;
                          return (0, P.BX)(Z.View, {
                            className: "filter-panel",
                            children: [
                              (0, P.tZ)(Z.View, {
                                className: "filter-tag",
                                children: (0, P.tZ)(Z.View, {
                                  className: "filter-list",
                                  children: Object.keys(a).map(function (t, n) {
                                    return (0,
                                    P.tZ)(Z.View, { className: "item ".concat(O.Z.tyClass, " ").concat(t === i ? "cur" : ""), id: "ANCH", onClick: e.clickItem.bind(e), "data-priority": t, children: a[t] }, String(n));
                                  }),
                                }),
                              }),
                              (0, P.BX)(Z.View, {
                                className: "depart-time "
                                  .concat(O.Z.tyClass, " ")
                                  .concat(o ? "selected " : ""),
                                id: "ANCI",
                                onClick: r,
                                children: [
                                  (0, P.BX)(Z.View, {
                                    className: "depart-time-desc",
                                    children: [
                                      (0, P.tZ)(Z.View, {
                                        className: "txt",
                                        children: "出发时间",
                                      }),
                                      o &&
                                        (0, P.BX)(Z.View, {
                                          className: "time-zone",
                                          children: [c[0], "..."],
                                        }),
                                    ],
                                  }),
                                  (0, P.tZ)(Z.Text, {
                                    className: "ifont-triangle iconfont",
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
                })(f.default.Component))
              ) || H,
            ee =
              (0, k.h)()(
                (K = (function (e) {
                  (0, h.Z)(i, e);
                  var t = (0, m.Z)(i);
                  function i() {
                    var e;
                    return (
                      (0, o.Z)(this, i),
                      (e = t.call(this)),
                      (0, u.Z)(
                        (0, d.Z)(e),
                        "pageId",
                        w.default.isTieyou ? "10650054387" : "10650054385"
                      ),
                      (0, u.Z)(
                        (0, d.Z)(e),
                        "onClickCalendarDate",
                        function (t) {
                          e.setState({ isShowCalender: !1 }),
                            e.onClickChangeDate(null == t ? void 0 : t.date);
                        }
                      ),
                      (e.state = {
                        isTieyou: w.default.isTieyou,
                        chooseDate: "",
                        beginDate: "",
                        endDate: "",
                        tripCards: [],
                        areaRemindInfo: null,
                        lineSnapshotDTO: null,
                        showTimeZonePicker: !1,
                        isShowCalender: !1,
                      }),
                      (e.searchParams = {}),
                      (e.priority = "General"),
                      (e.timeZoneList = []),
                      (e.fromSource = "smarthome"),
                      e
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.handleRouteParams(),
                            this.loadData(),
                            (0, j.Sn)(this, "185862", {
                              fromSource: this.fromSource,
                            });
                        },
                      },
                      {
                        key: "onPullDownRefresh",
                        value: function () {
                          var e = this.generateOptionalParameter();
                          this.loadData(e);
                        },
                      },
                      {
                        key: "handleRouteParams",
                        value: function () {
                          var e = (0, p.getCurrentInstance)().router.params;
                          if (e && e.data)
                            console.log("searchparams", e.data),
                              (this.searchParams = (0, c.Z)({}, e.data));
                          else {
                            this.fromSource = "smartshare";
                            try {
                              var t = JSON.parse(
                                decodeURIComponent(e.searchParams)
                              );
                              console.log("searchParams", t),
                                (this.searchParams = t);
                              var i = t.optionalParameter,
                                a = i.priority,
                                n = i.timeZoneList;
                              (this.priority = a),
                                (this.timeZoneList = n.map(function (e) {
                                  return ""
                                    .concat(e.fromTimeZone, "-")
                                    .concat(e.toTimeZone);
                                }));
                            } catch (e) {
                              console.log(e);
                            }
                          }
                          var r = this.searchParams,
                            s = r.fromLocation,
                            o = r.toLocation,
                            l = r.departDate,
                            d = "".concat(s, " ⇀ ").concat(o);
                          v().setNavigationBarTitle({ title: d }),
                            this.setState({ chooseDate: l });
                        },
                      },
                      {
                        key: "loadData",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var i, a, n, s, o, l, d, h;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i = (0, c.Z)({}, this.searchParams)),
                                          t &&
                                            (i = (0, c.Z)(
                                              (0, c.Z)({}, i),
                                              {},
                                              { optionalParameter: t }
                                            )),
                                          (e.prev = 2),
                                          (0, y.showLoading)("努力加载中..."),
                                          (e.next = 6),
                                          N.Z.checkSecretToken()
                                        );
                                      case 6:
                                        return (e.next = 8), (0, g.Nt)(i);
                                      case 8:
                                        if (1 !== (a = e.sent).resultCode) {
                                          e.next = 20;
                                          break;
                                        }
                                        if (
                                          ((n = a.tripCards),
                                          (s = void 0 === n ? [] : n),
                                          (o = a.areaRemindInfo),
                                          (l = void 0 === o ? null : o),
                                          (d = a.lineSnapshotDTO),
                                          (h = void 0 === d ? null : d),
                                          this.setState({
                                            tripCards: s,
                                            areaRemindInfo: l,
                                            lineSnapshotDTO: h,
                                          }),
                                          0 != s.length)
                                        ) {
                                          e.next = 17;
                                          break;
                                        }
                                        throw (
                                          ((0, j.Sn)(this, "185863"),
                                          new Error(
                                            "当前线路无车次，试试别的时间或线路吧~"
                                          ))
                                        );
                                      case 17:
                                        (0, j.Sn)(this, "185864");
                                      case 18:
                                        e.next = 21;
                                        break;
                                      case 20:
                                        throw new Error(a.resultMessage);
                                      case 21:
                                        e.next = 26;
                                        break;
                                      case 23:
                                        (e.prev = 23),
                                          (e.t0 = e.catch(2)),
                                          v().showModal({
                                            title: "温馨提示",
                                            content:
                                              e.t0.message ||
                                              "网络异常，请重试",
                                          });
                                      case 26:
                                        return (
                                          (e.prev = 26),
                                          v().stopPullDownRefresh(),
                                          (0, y.hideLoading)(),
                                          e.finish(26)
                                        );
                                      case 30:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 23, 26, 30]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onClickChangeDate",
                        value: function (e) {
                          if (e !== this.searchParams.departDate) {
                            this.setState({ chooseDate: e }),
                              (this.searchParams.departDate = e);
                            var t = this.generateOptionalParameter();
                            this.loadData(t);
                          }
                        },
                      },
                      {
                        key: "onPriorityItemClicked",
                        value: function (e) {
                          if (this.priority !== e) {
                            this.priority = e;
                            var t = this.generateOptionalParameter();
                            this.loadData(t);
                          }
                        },
                      },
                      {
                        key: "generateOptionalParameter",
                        value: function () {
                          var e = [];
                          this.timeZoneList.forEach(function (t) {
                            var i = t.split("-"),
                              a = i[0],
                              n = i[1];
                            a &&
                              n &&
                              e.push({ fromTimeZone: a, toTimeZone: n });
                          });
                          var t = { timeZoneList: e };
                          return (
                            this.priority &&
                              "General" !== this.priority &&
                              (t = (0, c.Z)(
                                (0, c.Z)({}, t),
                                {},
                                { priority: this.priority }
                              )),
                            t
                          );
                        },
                      },
                      {
                        key: "onTripItemClicked",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.cardIndex,
                            i = e.tripIndex,
                            a = e.isTransfer;
                          a
                            ? (0, j.Sn)(this, "185866")
                            : (0, j.Sn)(this, "185865"),
                            this.gotoTripDetailPage(t, i);
                        },
                      },
                      {
                        key: "gotoTripDetailPage",
                        value: function (e, t) {
                          var i = this.state.tripCards[e].trips,
                            a = (0, c.Z)({}, this.searchParams),
                            n = i[t].schemeInfoV1,
                            r = (0, L.j)();
                          if (w.default.isWxGov) {
                            var s = ""
                              .concat(r, "?schemeInfoV1=")
                              .concat(encodeURIComponent(n), "&orderSource=")
                              .concat("smartwxgov", "&fromSource=")
                              .concat("smartwxgov");
                            (0, j.MG)({ path: s });
                          } else
                            this.navigateTo({
                              url: r,
                              data: {
                                schemeInfoV1: encodeURIComponent(n),
                                searchParams: a,
                                fromSource: "home",
                              },
                            });
                        },
                      },
                      {
                        key: "clickCard",
                        value: function (e) {
                          var t = e.currentTarget.dataset.index;
                          this.gotoMultiPlanPage(t);
                        },
                      },
                      {
                        key: "checkMore",
                        value: function (e) {
                          var t = e.cardIndex;
                          this.gotoMultiPlanPage(t);
                        },
                      },
                      {
                        key: "showTimeZonePicker",
                        value: function () {
                          this.setState({ showTimeZonePicker: !0 });
                        },
                      },
                      {
                        key: "clickCancelOnTimeZonePicker",
                        value: function () {
                          this.setState({ showTimeZonePicker: !1 });
                        },
                      },
                      {
                        key: "clickConfirmOnTimeZonePicker",
                        value: function (e) {
                          if (
                            (this.setState({ showTimeZonePicker: !1 }),
                            !X.Z.isEqual(this.timeZoneList, e))
                          ) {
                            this.timeZoneList = e;
                            var t = this.generateOptionalParameter();
                            this.loadData(t);
                          }
                        },
                      },
                      {
                        key: "gotoMultiPlanPage",
                        value: function (e) {
                          var t = this.state.tripCards[e],
                            i = t.cardType,
                            a = t.cardName,
                            n = {
                              searchParams: (0, c.Z)({}, this.searchParams),
                              cardType: i,
                              cardName: a,
                            };
                          console.log("gotoMultiPlanPage页面传参", n),
                            this.navigateTo({
                              url: "/pages/smart/packageA/multiPlan/index",
                              data: (0, c.Z)({}, n),
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isTieyou,
                            a = t.chooseDate,
                            n = t.beginDate,
                            r = t.endDate,
                            s = t.tripCards,
                            c = t.showTimeZonePicker,
                            o = t.areaRemindInfo,
                            l = t.lineSnapshotDTO,
                            d = t.isShowCalender;
                          return (0, P.tZ)(Z.Block, {
                            children: (0, P.BX)(Z.View, {
                              className: "smart-searchlist",
                              children: [
                                (0, P.tZ)(Z.View, {
                                  className: "header",
                                  children: (0, P.tZ)(G, {
                                    chooseDate: a,
                                    beginDate: n,
                                    endDate: r,
                                    onChangeDate:
                                      this.onClickChangeDate.bind(this),
                                    "date-picker": "my-date-picker",
                                    onClickCalendar: function () {
                                      return e.setState({ isShowCalender: !0 });
                                    },
                                  }),
                                }),
                                (0, P.BX)(Z.View, {
                                  className: "content " + (i ? "ty" : "zx"),
                                  children: [
                                    (0, P.tZ)(Z.View, {
                                      className: "".concat(O.S, " arc-header"),
                                    }),
                                    (0, P.tZ)(Z.View, {
                                      className: "".concat(O.S, " arc"),
                                    }),
                                    (0, P.BX)(Z.View, {
                                      className: "search-list",
                                      children: [
                                        o &&
                                          l &&
                                          (0, P.tZ)(Q, {
                                            areaRemindInfo: o,
                                            lineSnapshotDTO: l,
                                          }),
                                        (0, P.tZ)($, {
                                          onPriorityItemClicked:
                                            this.onPriorityItemClicked.bind(
                                              this
                                            ),
                                          onDepartTimeClicked:
                                            this.showTimeZonePicker.bind(this),
                                          initPriority: this.priority,
                                          timeZoneList: this.timeZoneList,
                                        }),
                                        s &&
                                          s.map(function (t, i) {
                                            return (0,
                                            P.tZ)(_, { tripCard: t, index: i, onTripItemClicked: e.onTripItemClicked.bind(e), onTap: e.clickCard.bind(e), checkMore: e.checkMore.bind(e) }, String(i));
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, P.tZ)(E, {
                                  visible: c,
                                  initTimeZoneList: this.timeZoneList,
                                  onCancel:
                                    this.clickCancelOnTimeZonePicker.bind(this),
                                  onConfirm:
                                    this.clickConfirmOnTimeZonePicker.bind(
                                      this
                                    ),
                                }),
                                (0, P.tZ)(M, {
                                  onClose: function () {
                                    return e.setState({ isShowCalender: !1 });
                                  },
                                  visible: d,
                                  selectedDate: a,
                                  onClickDate: this.onClickCalendarDate,
                                }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(f.default.Component))
              ) || K;
          Page(
            (0, n.createPageConfig)(
              ee,
              "pages/smart/packageA/searchList/index",
              { root: { cn: [] } },
              {
                backgroundColor: "#0066E6",
                backgroundColorBottom: "#efefef",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [5572, 71229, 31162, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(1746);
        }),
          e.O();
      },
    ]);
})();
