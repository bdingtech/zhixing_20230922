!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/e4417bd6df8881f75099b5a95342fe64.js"),
    require("../sub-common/8d557802042b658d7e8b89aab78635db.js"),
    require("../sub-common/66cb5e20cb14a14f92d10c9100ba2701.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [97770],
      {
        72988: function (e, t, i) {
          var o,
            n = i(32180),
            s = i(22276),
            a = i(79301),
            r = i(95308),
            c = i(298),
            l = i(57042),
            u = i(24460),
            d = i(81876),
            m = i(21867),
            h = i(86066),
            f = i(45023),
            p = i(52500),
            b = i(92954),
            v = i.n(b),
            g = i(71515),
            S = i(18783),
            T = i(79792),
            k = i(79910),
            w = i(49120),
            y = i(13025),
            C = i(4601),
            B = i(43796),
            N = i(58801),
            Z = i(90129),
            x = i(48813),
            V = function (e) {
              var t = 0,
                i = 0,
                o =
                  null == e
                    ? void 0
                    : e.map(function (e) {
                        var o = e.timeRange.split("-"),
                          n = (0, Z.Z)(o, 2),
                          s = n[0],
                          a = n[1];
                        return (
                          (t = Math.max(t, e.num)),
                          (i = i ? Math.min(i, e.num || i) : e.num),
                          (0, c.Z)(
                            (0, c.Z)({}, e),
                            {},
                            {
                              startVal: s,
                              endVal: a,
                              desc:
                                e.num <= 0 ? "无班次" : "".concat(e.num, "班"),
                            }
                          )
                        );
                      });
              return { maxCount: t, minCount: i, times: o };
            },
            I = p.default.memo(function (e) {
              var t = this,
                i = e.timeData,
                o = e.onFilter,
                n = void 0 === o ? console.log : o,
                s = V(i),
                a = s.maxCount,
                r = s.times,
                c = s.minCount,
                l = function (e) {
                  n({
                    type: "fromTimeList",
                    item: e,
                    isClearItem: e.isSelectStation,
                  });
                };
              return (0, x.tZ)(g.View, {
                className: "bus-list-qk-filter-times-bar-chat ".concat(
                  T.default.isTieyou ? "ty" : "zx"
                ),
                children:
                  null == r
                    ? void 0
                    : r.map(function (e, i) {
                        return (0,
                        x.BX)(g.View, { className: "time-bar ".concat(e.isSelectStation ? "selected" : "", " ").concat(e.num ? "" : "disable"), style: { height: "".concat(e.num ? 15 + ((e.num - c) / (a - c).toFixed(2)) * 25 : 20, "px") }, id: "AAAk", onClick: e.num ? l.bind(t, e) : function () {}, children: [i < 1 && (0, x.tZ)(g.Text, { className: "time-start", children: e.startVal }), (0, x.tZ)(g.Text, { className: "time-desc", children: e.desc }), (0, x.tZ)(g.Text, { className: "time-end", children: e.endVal })] }, i);
                      }),
              });
            }),
            L = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return [].concat(
                (0, s.Z)(e.slice(0, 5)),
                (0, s.Z)(
                  6 === e.length
                    ? [e[5]]
                    : e.length > 6
                    ? [{ stationName: "更多站点", isShowMoreBtn: !0 }]
                    : []
                )
              );
            },
            P = p.default.memo(function (e) {
              var t,
                i,
                o,
                n,
                s = this,
                a = e.data,
                r = e.onTabChange,
                c = void 0 === r ? console.log : r,
                l = e.tab,
                u = e.onFilter,
                d = void 0 === u ? console.log : u,
                m = e.onShowMoreStationFilter,
                h = void 0 === m ? console.log : m,
                f = e.onClearFilter,
                b = void 0 === f ? console.log : f,
                v = e.isShowClear,
                S = void 0 !== v && v,
                k = e.showQuickTabInTop,
                w = void 0 !== k && k,
                y = (0, p.useState)(l),
                C = (0, Z.Z)(y, 2),
                B = C[0],
                N = C[1];
              (0, p.useEffect)(
                function () {
                  l && N(l);
                },
                [l]
              ),
                (0, p.useEffect)(
                  function () {
                    B && c(B);
                  },
                  [B]
                );
              var V = function (e) {
                  N(e);
                },
                P = function (e) {
                  e.isShowMoreBtn
                    ? h()
                    : d({
                        type: "fromStationList",
                        item: e.stationName,
                        isClearItem: e.isSelectStation,
                      });
                },
                D =
                  null == a ||
                  null === (t = a.filterData) ||
                  void 0 === t ||
                  null ===
                    (i = t.find(function (e) {
                      return e.filterType === B;
                    })) ||
                  void 0 === i
                    ? void 0
                    : i.listData;
              return null != D && D.length
                ? (0, x.BX)(g.View, {
                    className: "bus-list-quick-filter "
                      .concat(T.default.isTieyou ? "ty" : "zx", " ")
                      .concat(w ? "top-filter" : ""),
                    children: [
                      (0, x.BX)(g.View, {
                        className: "top-content",
                        children: [
                          (0, x.BX)(g.View, {
                            className: "title",
                            children: [
                              (0, x.tZ)(g.Image, {
                                src: T.default.isTieyou
                                  ? "https://pages.c-ctrip.com/bus-images/zhixing/icon/fssxtb@3x.png"
                                  : "https://pages.c-ctrip.com/bus-images/zhixing/icon/lssxtb@3x.png",
                                mode: "aspectFit",
                                className: "filter-icon",
                              }),
                              "快速筛选",
                            ],
                          }),
                          (0, x.tZ)(g.View, {
                            className: "tab-content",
                            children:
                              null == a || null === (o = a.tabs) || void 0 === o
                                ? void 0
                                : o.map(function (e, t) {
                                    var i = e.filterType,
                                      o = e.filterName;
                                    return (0,
                                    x.tZ)(g.View, { className: "tab ".concat(i === B ? "active" : ""), id: "AAAh", onClick: V.bind(s, i), children: o }, t);
                                  }),
                          }),
                          S &&
                            (0, x.tZ)(g.Text, {
                              className: "clear-btn",
                              id: "AAAi",
                              onClick: b,
                              children: "清空筛选",
                            }),
                        ],
                      }),
                      (0, x.tZ)(g.View, {
                        className: "bottom-content",
                        children:
                          "time" === B
                            ? (0, x.tZ)(I, { timeData: D, onFilter: d })
                            : null === (n = L(D)) || void 0 === n
                            ? void 0
                            : n.map(function (e, t) {
                                return (0,
                                x.tZ)(g.View, { className: "station-item ".concat(e.isSelectStation ? "selected" : ""), id: "AAAj", onClick: P.bind(s, e), children: e.stationName }, t);
                              }),
                      }),
                    ],
                  })
                : null;
            }),
            D = function (e) {
              var t = e - 10;
              return 0 === t || (t > 0 && t / 20 === parseInt(t / 20));
            },
            X = (function (e) {
              (0, m.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var o;
                return (
                  (0, l.Z)(this, i),
                  ((o = t.call(this, e)).state = {
                    isTieyou: T.default.isTieyou,
                    filter: null,
                    show: !1,
                    count: 0,
                    selectedKey: "",
                    selectedFilter: [],
                    activeScrollerKey: "",
                    isShowMoreCtrl: null,
                  }),
                  o
                );
              }
              return (
                (0, u.Z)(i, [
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      !this.props.visible &&
                        e.visible &&
                        (console.log(e.filterInfo),
                        this.computedData(e.filterInfo, e.selecteds, !0)),
                        this.setState({ show: e.visible, count: e.busCount });
                    },
                  },
                  {
                    key: "computedData",
                    value: function () {
                      var e,
                        t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        i =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        o = this.props.tabType;
                      console.log("tabtype", o);
                      var n = [],
                        s = [];
                      t.fromStationFilters &&
                        t.fromStationFilters.length &&
                        n.push({
                          title: "出发车站",
                          key: "fromStation",
                          subItems: t.fromStationFilters.map(function (e) {
                            var t,
                              o = (i.fromStationList || []).some(function (t) {
                                return e.stationName === t;
                              }),
                              n = {
                                key: "fromStation",
                                value: e.stationName,
                                show: e.stationName,
                                isSelected: o,
                                tags:
                                  null === (t = e.stationTags) || void 0 === t
                                    ? void 0
                                    : t.map(function (e) {
                                        return e.desc;
                                      }),
                                disabled:
                                  void 0 !== e.highLight && !e.highLight,
                              };
                            return o && s.push(n), n;
                          }),
                        }),
                        t.toStationFilters &&
                          t.toStationFilters.length &&
                          n.push({
                            title: "到达车站",
                            key: "toStation",
                            subItems: t.toStationFilters.map(function (e) {
                              var t = (i.toStationList || []).some(function (
                                  t
                                ) {
                                  return e.stationName === t;
                                }),
                                o = {
                                  key: "toStation",
                                  value: e.stationName,
                                  show: e.stationName,
                                  isSelected: t,
                                  disabled:
                                    void 0 !== e.highLight && !e.highLight,
                                };
                              return t && s.push(o), o;
                            }),
                          }),
                        t.fromTimeV1List &&
                          t.fromTimeV1List.length &&
                          n.push({
                            title: "出发时间",
                            key: "fromTime",
                            subItems: t.fromTimeV1List.map(function (e) {
                              var t = (i.fromTimeList || []).some(function (t) {
                                  return e.code === t;
                                }),
                                o = {
                                  key: "fromTime",
                                  value: e.code,
                                  show: e.timeRange,
                                  isSelected: t,
                                  disabled: !e.highLight,
                                };
                              return t && s.push(o), o;
                            }),
                          }),
                        t.upgradeServiceList &&
                          t.upgradeServiceList.length &&
                          !o &&
                          n.push({
                            title: "升级服务",
                            key: "upgradeService",
                            subItems: t.upgradeServiceList.map(function (e) {
                              var t = (i.upgradeServiceList || []).some(
                                  function (t) {
                                    return e.code === t;
                                  }
                                ),
                                o = {
                                  key: "upgradeService",
                                  value: e.code,
                                  show: e.desc,
                                  isSelected: t,
                                };
                              return t && s.push(o), o;
                            }),
                          }),
                        this.setState({
                          filter: n,
                          selectedKey:
                            this.state.selectedKey ||
                            (null === (e = n[0]) || void 0 === e
                              ? void 0
                              : e.key),
                          selectedFilter: s,
                        });
                    },
                  },
                  {
                    key: "doBusTraceInfo",
                    value: function (e, t) {
                      this.props.doBusTraceInfo &&
                        this.props.doBusTraceInfo(e, t);
                    },
                  },
                  {
                    key: "onClickTab",
                    value: function (e) {
                      switch (e.key) {
                        case "fromStation":
                          this.doBusTraceInfo(
                            "filterFromStation",
                            "筛选条件-出发车站"
                          );
                          break;
                        case "toStation":
                          this.doBusTraceInfo(
                            "filterToStation",
                            "筛选条件-到达车站"
                          );
                          break;
                        case "fromTime":
                          this.doBusTraceInfo(
                            "filterFromTime",
                            "筛选条件-出发时间"
                          );
                          break;
                        default:
                          this.doBusTraceInfo(
                            "filterUpService",
                            "筛选条件-升级服务"
                          );
                      }
                      this.setState({
                        selectedKey: e.key,
                        activeScrollerKey: e.key,
                      });
                    },
                  },
                  {
                    key: "onClickItem",
                    value: function (e) {
                      var t = this,
                        i = this.state,
                        o = i.filter,
                        n = i.selectedFilter,
                        s = -1;
                      o.forEach(function (t) {
                        t.subItems.forEach(function (t) {
                          t.key === e.key &&
                            t.value === e.value &&
                            ((t.isSelected = !t.isSelected),
                            t.isSelected ||
                              (s = n.findIndex(function (t) {
                                return t.key === e.key && t.value === e.value;
                              })));
                        });
                      }),
                        -1 === s ? n.push(e) : n.splice(s, 1),
                        this.setState(
                          { filter: o, selectedFilter: n },
                          function () {
                            t.doComputedCount();
                          }
                        );
                    },
                  },
                  {
                    key: "onClickClear",
                    value: function () {
                      var e = this;
                      if (this.state.selectedFilter.length) {
                        var t = this.state.filter;
                        t.forEach(function (e) {
                          e.subItems.forEach(function (e) {
                            e.isSelected = !1;
                          });
                        }),
                          this.setState(
                            {
                              filter: t,
                              selectedFilter: [],
                              selectedKey: t[0].key,
                              activeScrollerKey: t[0].key,
                            },
                            function () {
                              e.doComputedCount();
                            }
                          );
                      }
                    },
                  },
                  {
                    key: "doComputedCount",
                    value: function () {
                      var e = this,
                        t = this.getFilterResult();
                      try {
                        this.props.onRefreshCount(t).then(function (t) {
                          e.computedData(t.filter, t.newParams);
                        });
                      } catch (e) {
                        console.log(e);
                      }
                    },
                  },
                  {
                    key: "onClickConfirm",
                    value: function () {
                      if (this.state.count) {
                        var e = this.getFilterResult();
                        this.props.onConfirm(e);
                      } else (0, w.showToast)("该筛选条件下无班次");
                    },
                  },
                  {
                    key: "getFilterResult",
                    value: function () {
                      var e = this.state.selectedFilter,
                        t = {
                          fromStationList: [],
                          toStationList: [],
                          fromTimeList: [],
                          upgradeServiceList: [],
                        };
                      return (
                        e.forEach(function (e) {
                          "fromStation" === e.key &&
                            t.fromStationList.push(e.value),
                            "toStation" === e.key &&
                              t.toStationList.push(e.value),
                            "fromTime" === e.key &&
                              t.fromTimeList.push(e.value),
                            "upgradeService" === e.key &&
                              t.upgradeServiceList.push(e.value);
                        }),
                        t
                      );
                    },
                  },
                  {
                    key: "onClickClose",
                    value: function () {
                      this.props.onClose();
                    },
                  },
                  {
                    key: "goToItem",
                    value: function (e) {
                      this.setState({ activeScrollerKey: e });
                    },
                  },
                  {
                    key: "onShowMoreClick",
                    value: function (e) {
                      this.setState({
                        isShowMoreCtrl: (0, c.Z)(
                          (0, c.Z)({}, this.state.isShowMoreCtrl || {}),
                          {},
                          (0, f.Z)({}, e, !0)
                        ),
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state,
                        i = t.show,
                        o = t.isTieyou,
                        n = t.filter,
                        s = t.count,
                        a = t.selectedKey,
                        r = t.activeScrollerKey,
                        c = t.isShowMoreCtrl;
                      return (0, x.tZ)(g.View, {
                        className: "bus-filter-modalv2",
                        children:
                          i &&
                          (0, x.BX)(g.View, {
                            className: (o ? "ty" : "zx") + " filter-modal",
                            children: [
                              (0, x.tZ)(g.View, {
                                className:
                                  "modal-mask " + (i ? "visible" : "hidden"),
                                id: "AAAY",
                                onClick: this.onClickClose.bind(this),
                              }),
                              (0, x.BX)(g.View, {
                                className:
                                  "modal-view " + (i ? "visible" : "hidden"),
                                children: [
                                  (0, x.BX)(g.View, {
                                    className: "filter-head",
                                    children: [
                                      null == n
                                        ? void 0
                                        : n.map(function (t, i) {
                                            return (0,
                                            x.tZ)(g.View, { className: "tab-item " + (t.key === a ? "cur" : ""), id: "AAAZ", onClick: e.onClickTab.bind(e, t), children: t.title }, i);
                                          }),
                                      n.length > 0 &&
                                        (0, x.tZ)(g.View, {
                                          className: "filter-head-btm",
                                          children: (0, x.tZ)(g.View, {
                                            className: "active-line",
                                            style: {
                                              width: "".concat(
                                                100 / n.length,
                                                "%"
                                              ),
                                              transform: "translateX(".concat(
                                                100 *
                                                  n.findIndex(function (e) {
                                                    return e.key === a;
                                                  }),
                                                "%)"
                                              ),
                                              transition: "transform .5s ease",
                                            },
                                          }),
                                        }),
                                    ],
                                  }),
                                  (0, x.tZ)(g.ScrollView, {
                                    className: "filter-content",
                                    scrollY: !0,
                                    scrollIntoView: r,
                                    scrollWithAnimation: !0,
                                    children: n.map(function (t, i) {
                                      var o, n, s;
                                      return (0, x.BX)(
                                        g.View,
                                        {
                                          className: "filter-line",
                                          children: [
                                            (0, x.tZ)(g.View, {
                                              className: "filter-line-title",
                                              id: t.key,
                                              onClick: e.goToItem.bind(
                                                e,
                                                t.key
                                              ),
                                              children: t.title,
                                            }),
                                            (0, x.BX)(g.View, {
                                              className: "filter-line-content",
                                              children: [
                                                null === (o = t.subItems) ||
                                                void 0 === o
                                                  ? void 0
                                                  : o
                                                      .slice(
                                                        0,
                                                        (null ===
                                                          (n = t.subItems) ||
                                                        void 0 === n
                                                          ? void 0
                                                          : n.length) >= 6 &&
                                                          (null == c ||
                                                            !c[t.key])
                                                          ? 5
                                                          : t.subItems.length
                                                      )
                                                      .map(function (t, i) {
                                                        var o, n;
                                                        return (0,
                                                        x.BX)(g.View, { className: "filter-item " + (t.isSelected ? "cur " : "") + (t.disabled ? "disabled" : ""), id: "AAAa", onClick: t.disabled ? function () {} : e.onClickItem.bind(e, t), children: [!(null === (o = t.tags) || void 0 === o || !o.length) && (0, x.tZ)(g.View, { className: "tags", children: null === (n = t.tags) || void 0 === n ? void 0 : n[0] }), t.show] }, i);
                                                      }),
                                                (null === (s = t.subItems) ||
                                                void 0 === s
                                                  ? void 0
                                                  : s.length) >= 6 &&
                                                  !(null != c && c[t.key]) &&
                                                  (0, x.tZ)(g.View, {
                                                    className: "filter-item ",
                                                    id: "AAAb",
                                                    onClick:
                                                      e.onShowMoreClick.bind(
                                                        e,
                                                        t.key
                                                      ),
                                                    children: "查看更多",
                                                  }),
                                              ],
                                            }),
                                          ],
                                        },
                                        i
                                      );
                                    }),
                                  }),
                                  (0, x.BX)(g.View, {
                                    className: "bottom-content",
                                    children: [
                                      (0, x.tZ)(g.View, {
                                        className: "btn-reset btn",
                                        id: "AAAc",
                                        onClick: this.onClickClear.bind(this),
                                        children: "重置",
                                      }),
                                      (0, x.tZ)(g.View, {
                                        className: "btn-sure btn",
                                        id: "AAAd",
                                        onClick: this.onClickConfirm.bind(this),
                                        children:
                                          s > 0
                                            ? "筛选·".concat(s, "班次")
                                            : "确定",
                                      }),
                                    ],
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
            })(p.default.Component),
            M = i(50185),
            F = i(8271),
            _ = i.n(F),
            A = i(76977),
            R = i(46931),
            z = i(79295),
            U = i(3106),
            j = i(90481),
            E = i(81957),
            O = i(5830),
            Q = 1,
            H = 2,
            q = 3,
            Y = p.default.memo(function (e) {
              var t = e.xProductData,
                i = void 0 === t ? null : t,
                o = e.onClickNormalBuy,
                n = void 0 === o ? function () {} : o,
                s = e.onClickQuicklyBuy,
                a = void 0 === s ? function () {} : s,
                r = e.ubtTrace,
                c = void 0 === r ? function () {} : r;
              (0, p.useEffect)(function () {
                c(
                  {
                    exposureType: "normal",
                    bizKey: "list_tinyX_show",
                    comment: "列表页-小X页曝光",
                  },
                  1
                );
              }, []);
              var l = [];
              if (i) {
                var u,
                  d = i.normalTitle,
                  m = i.normalBooking,
                  h = i.xPackageTitle,
                  f = i.xPackageBooking,
                  b = i.isVip,
                  v = i.memberShipTitle,
                  S = i.memberShipBooking;
                !b &&
                  v &&
                  (null == S ? void 0 : S.length) > 0 &&
                  l.push({
                    title: i.memberShipTitle || "",
                    totalPrice: i.totalPrice || 0,
                    descList: i.memberShipBooking || [],
                    isQuicklyBuy: !0,
                    icon: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/icon_hy@3x.png",
                    tag:
                      (null === (u = S[0]) || void 0 === u ? void 0 : u.tag) ||
                      "",
                    type: q,
                  }),
                  h &&
                    (null == f ? void 0 : f.length) > 0 &&
                    l.push({
                      title: i.xPackageTitle || "",
                      totalPrice: i.totalPrice || 0,
                      percent: i.percent || 50,
                      descList: i.xPackageBooking || [],
                      isQuicklyBuy: !0,
                      icon: "https://pages.c-ctrip.com/bus-images/zhixing/icon/aqbztb@3x.png",
                      type: H,
                    }),
                  d &&
                    (null == m ? void 0 : m.length) > 0 &&
                    l.push({
                      title: i.normalTitle || "",
                      totalPrice: 0,
                      descList: i.normalBooking || [],
                      isQuicklyBuy: !1,
                      icon: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/icon_pt@3x.png",
                      type: Q,
                    });
              }
              return l.length
                ? (0, x.tZ)(g.View, {
                    className: "bus-item-button-group-v2",
                    id: "AdBI",
                    onClick: function (e) {
                      e.stopPropagation();
                    },
                    children: l.map(function (e, t) {
                      return (0, x.BX)(
                        g.View,
                        {
                          className: "item flex",
                          id: "AdBJ",
                          onClick: e.isQuicklyBuy ? a : n,
                          children: [
                            (0, x.BX)(g.View, {
                              className: "lt flex-center flex-column",
                              children: [
                                (0, x.tZ)(g.Image, {
                                  className: "img",
                                  src: e.icon,
                                }),
                                (0, x.tZ)(g.Text, {
                                  className: "price ".concat(
                                    e.type === H
                                      ? "q-txt"
                                      : e.type === q
                                      ? "m-txt"
                                      : ""
                                  ),
                                  children: "+¥".concat(e.totalPrice),
                                }),
                              ],
                            }),
                            (0, x.BX)(g.View, {
                              className: "rt flex-align-items-center flex-1",
                              children: [
                                (0, x.BX)(g.View, {
                                  className: "desc-list flex flex-column",
                                  children: [
                                    (0, x.BX)(g.View, {
                                      className:
                                        "flex-align-items-center header",
                                      children: [
                                        (0, x.tZ)(g.View, {
                                          className: "tit",
                                          children: e.title,
                                        }),
                                        e.type === H &&
                                          (0, x.BX)(g.View, {
                                            className: "percent flex-center",
                                            children: [
                                              (0, x.tZ)(g.Text, {
                                                className: "num",
                                                children: "".concat(
                                                  e.percent,
                                                  "%"
                                                ),
                                              }),
                                              (0, x.tZ)(g.Text, {
                                                className: "suffix",
                                                children: "人优选",
                                              }),
                                            ],
                                          }),
                                        e.type === q &&
                                          e.tag &&
                                          (0, x.tZ)(g.View, {
                                            className: "member-tag",
                                            children: e.tag,
                                          }),
                                      ],
                                    }),
                                    e.descList.map(function (t, i) {
                                      return (0,
                                      x.BX)(g.View, { className: "d-item flex-align-items-center", children: [t.icon && e.type !== H && (0, x.tZ)(g.Image, { className: "icon", src: t.icon }), t.productDiscountDesc && (0, x.tZ)(g.Text, { children: t.productDiscountDesc }), t.productInfoDesc && (0, x.tZ)(g.Text, { className: "".concat(e.type === H ? "quickly-mark" : e.type === q ? "member-mark" : ""), children: t.productInfoDesc })] }, i);
                                    }),
                                  ],
                                }),
                                (0, x.tZ)(g.View, {
                                  className: "btn ".concat(
                                    e.type === q ? "member" : ""
                                  ),
                                  children: "预订",
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  })
                : null;
            }),
            K = i(43005),
            G = p.default.memo(function (e) {
              var t = e.routeInfo,
                i = void 0 === t ? null : t,
                o = e.isDiTuiSource,
                n = void 0 !== o && o,
                s = e.utmSource,
                l = void 0 === s ? "" : s,
                u = e.currentXProductBusIndex,
                d = void 0 === u ? -1 : u,
                m = e.xProductInfoStore,
                h = void 0 === m ? null : m,
                f = e.onSelectItem,
                b = void 0 === f ? function () {} : f,
                S = e.ubtTrace,
                T = void 0 === S ? function () {} : S,
                k = e.onChangeXProductIndex,
                y = void 0 === k ? function () {} : k,
                C = (0, p.useState)(null),
                B = (0, Z.Z)(C, 2),
                N = B[0],
                V = B[1];
              if (!i) return (0, x.tZ)(g.View, {});
              var I = i.product || {},
                L = I.fromStation,
                P = !1;
              I.fromStations &&
                I.fromStations.length &&
                (I.fromStations.length > 2
                  ? ((L =
                      I.fromStations
                        .map(function (e) {
                          return e.stationName;
                        })
                        .slice(0, 2)
                        .join("、") + "等".concat(I.fromStations.length, "站")),
                    (P = !0))
                  : (L = I.fromStations
                      .map(function (e) {
                        return e.stationName;
                      })
                      .join("、")));
              var D = !1,
                X = I.toStationShow || I.toStation;
              I.toStations &&
                I.toStations.length &&
                (I.toStations.length > 2
                  ? ((X =
                      I.toStations
                        .map(function (e) {
                          return e.stationName;
                        })
                        .slice(0, 2)
                        .join("、") + "等".concat(I.toStations.length, "站")),
                    (D = !0))
                  : (X = I.toStations
                      .map(function (e) {
                        return e.stationName;
                      })
                      .join("、")));
              var M = "";
              if (2 === I.fromTimeType) M = "流⽔班，⼈满即⾛";
              else {
                var F = _()().format("YYYY-MM-DD");
                if (
                  (null == I ? void 0 : I.fromDate) == F &&
                  null != I &&
                  I.fromTime
                ) {
                  var A = _()(
                      (null == I ? void 0 : I.fromDate) +
                        " " +
                        (null == I ? void 0 : I.fromTime)
                    ).diff(_()(), "seconds"),
                    R = Math.floor(A / 3600),
                    z = Math.ceil(A / 60) - 60 * R;
                  (R > 0 || z > 0) &&
                    (M = ""
                      .concat(R > 0 ? R + "小时" : "")
                      .concat(z > 0 ? z + "分钟" : "", "后出发"));
                }
              }
              var j = (0, c.Z)(
                  (0, c.Z)({}, I),
                  {},
                  {
                    fromStationText: L,
                    toStationText: X,
                    departureTips: M,
                    showFromStationMore: P,
                    showToStationMore: D,
                  }
                ),
                E = i.index,
                Q = (function () {
                  var e = (0, r.Z)(
                    (0, a.Z)().mark(function e() {
                      var t, i, o;
                      return (0, a.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (T(
                                  {
                                    bizKey: "busShift",
                                    comment: "列表班次",
                                    clickType: U.uh.confirmClick,
                                  },
                                  2
                                ),
                                !n)
                              ) {
                                e.next = 23;
                                break;
                              }
                              if (((t = "wrapper".concat(E)), !h || !h[E])) {
                                e.next = 12;
                                break;
                              }
                              if (!N || E !== d) {
                                e.next = 7;
                                break;
                              }
                              return V(null), e.abrupt("return");
                            case 7:
                              return (
                                E !== d && (0, w.showLoading)(),
                                y(E, t),
                                V(h[E]),
                                setTimeout(function () {
                                  (0, w.hideLoading)();
                                }, 500),
                                e.abrupt("return")
                              );
                            case 12:
                              return (
                                (i = O.c.getXProductParams(j, {
                                  fromTime: j.fromTime || j.lastFromTime || "",
                                  utmSource: l,
                                  productLine: 1 === j.businessType ? 1 : 3,
                                })),
                                (e.next = 15),
                                (0, K.gX)(i)
                              );
                            case 15:
                              if (
                                1 !==
                                  (null == (o = e.sent) ? void 0 : o.code) ||
                                null == o ||
                                !o.data
                              ) {
                                e.next = 23;
                                break;
                              }
                              return (
                                E !== d && (0, w.showLoading)(),
                                y(E, t),
                                V(o.data),
                                (h[E] = o.data),
                                setTimeout(function () {
                                  (0, w.hideLoading)();
                                }, 500),
                                e.abrupt("return")
                              );
                            case 23:
                              b();
                            case 24:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
                H = function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  T(
                    e
                      ? {
                          bizKey: "list_tinyX_fastButton_click",
                          comment: "列表页-小X页极速预定按钮点击",
                          clickType: U.uh.confirmClick,
                        }
                      : {
                          bizKey: "list_tinyX_normalButton_click",
                          comment: "列表页-小X页普通预定按钮点击",
                          clickType: U.uh.confirmClick,
                        },
                    2
                  ),
                    b(e);
                };
              return (0, x.BX)(g.View, {
                className: "bus-list-recommend-route-item",
                id: "AdBv",
                onClick: Q,
                children: [
                  (0, x.BX)(g.View, {
                    className: "route-item",
                    id: "wrapper".concat(E),
                    children: [
                      (0, x.tZ)(g.View, {
                        className: "tag",
                        children: "时间最近班次",
                      }),
                      (0, x.BX)(g.View, {
                        className: "content",
                        children: [
                          (0, x.BX)(g.View, {
                            className: "time-info",
                            children: [
                              1 === j.fromTimeType &&
                                (0, x.tZ)(g.View, {
                                  className: "time-start",
                                  children: j.fromTime,
                                }),
                              2 === j.fromTimeType &&
                                (0, x.BX)(g.View, {
                                  className: "time-start",
                                  children: [
                                    !!j.fromTime &&
                                      (0, x.BX)(g.View, {
                                        className: "time-range",
                                        children: [
                                          (0, x.tZ)(g.View, {
                                            className: "text start",
                                            children: "首",
                                          }),
                                          (0, x.tZ)(g.View, {
                                            className: "time",
                                            children: j.fromTime,
                                          }),
                                        ],
                                      }),
                                    !!j.lastFromTime &&
                                      (0, x.BX)(g.View, {
                                        className: "time-range",
                                        children: [
                                          (0, x.tZ)(g.View, {
                                            className: "text end",
                                            children: "末",
                                          }),
                                          (0, x.tZ)(g.View, {
                                            className: "time",
                                            children: j.lastFromTime,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              3 === j.fromTimeType &&
                                (0, x.BX)(g.View, {
                                  className: "time-start",
                                  children: [
                                    (0, x.tZ)(g.View, {
                                      className: "time-text",
                                      children: "任选时间",
                                    }),
                                    (0, x.BX)(g.View, {
                                      className: "time-min",
                                      children: [
                                        j.fromTime,
                                        " - ",
                                        j.lastFromTime,
                                      ],
                                    }),
                                  ],
                                }),
                              (0, x.tZ)(g.View, {
                                className: "time-desc",
                                id: "AdBw",
                                onClick: function () {
                                  v().showToast({
                                    title: "耗时仅供参考，受实时天气和路况影响",
                                    icon: "none",
                                    duration: 1500,
                                  });
                                },
                                children: j.costTimeDesc,
                              }),
                            ],
                          }),
                          (0, x.tZ)(g.View, { className: "line" }),
                          (0, x.BX)(g.View, {
                            className: "station-price-info",
                            children: [
                              (0, x.BX)(g.View, {
                                className: "station-price",
                                children: [
                                  (0, x.BX)(g.View, {
                                    className: "station",
                                    children: [
                                      (0, x.BX)(g.View, {
                                        className: "from-station",
                                        children: [
                                          (0, x.tZ)(g.Text, {
                                            className: "name more-length",
                                            children: j.fromStationText,
                                          }),
                                          j.showFromStationMore &&
                                            (0, x.tZ)(g.Text, {
                                              className: "ifont-arr iconfont",
                                            }),
                                          !j.showFromStationMore &&
                                            j.isNearest &&
                                            (0, x.tZ)(g.View, {
                                              className: "near-icon",
                                            }),
                                        ],
                                      }),
                                      (0, x.BX)(g.View, {
                                        className: "to-station",
                                        children: [
                                          (0, x.tZ)(g.View, {
                                            className:
                                              "name more-length to-sta",
                                            children: j.toStationText,
                                          }),
                                          j.showToStationMore &&
                                            (0, x.tZ)(g.Text, {
                                              className: "ifont-arr iconfont",
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, x.BX)(g.View, {
                                    className: "price",
                                    children: [
                                      (0, x.tZ)(g.View, {
                                        className: "real-price",
                                        children: j.showPrice,
                                      }),
                                      !!j.ticketPrice &&
                                        (0, x.BX)(g.View, {
                                          className: "origin-price",
                                          children: [
                                            (0, x.tZ)(g.Text, {
                                              className: "tit",
                                              children: "车站价",
                                            }),
                                            (0, x.tZ)(g.Text, {
                                              className: "con",
                                              children: j.ticketPrice,
                                            }),
                                          ],
                                        }),
                                      !!j.remainTicketDesc &&
                                        (0, x.tZ)(g.View, {
                                          className: "count",
                                          children: j.remainTicketDesc,
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, x.BX)(g.View, {
                                className: "bus-type-btn ".concat(
                                  !j.busType && "flex-end-layout"
                                ),
                                children: [
                                  j.busType &&
                                    (0, x.tZ)(g.View, {
                                      className: "bus-type",
                                      children: j.busType,
                                    }),
                                  (0, x.BX)(g.View, {
                                    className: "tips-btn",
                                    children: [
                                      j.departureTips &&
                                        (0, x.tZ)(g.View, {
                                          className: "departure-tips",
                                          children: j.departureTips,
                                        }),
                                      (0, x.tZ)(g.View, {
                                        className: "pre-btn ".concat(
                                          N && d === E ? "close-btn" : ""
                                        ),
                                        children:
                                          N && d === E ? "收起" : "预订",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  N &&
                    d === E &&
                    (0, x.tZ)(Y, {
                      xProductData: N,
                      onClickNormalBuy: function () {
                        return H();
                      },
                      onClickQuicklyBuy: function () {
                        return H(!0);
                      },
                      ubtTrace: T,
                    }),
                ],
              });
            }),
            W = i(43213),
            J = (function (e) {
              (0, m.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var o;
                return (
                  (0, l.Z)(this, i),
                  (o = t.call(this, e)),
                  (0, f.Z)((0, d.Z)(o), "onClickBusTag", function (e) {
                    v().showModal({
                      title: e.title,
                      content: e.desc,
                      showCancel: !1,
                    });
                  }),
                  (o.state = {
                    isTieyou: T.default.isTieyou,
                    bus: null,
                    listItemIndex: null,
                    xProductInfo: null,
                    isFirst: !1,
                    filteredShiftType: [],
                  }),
                  o
                );
              }
              return (
                (0, u.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.setState({
                        bus: this.doFilterBus(this.props.busInfo),
                        listItemIndex: this.props.busInfo.busIndex,
                        isFirst: this.props.busInfo.isFirst,
                        filteredShiftType: this.doFilterShiftType(
                          this.props.busInfo
                        ),
                      });
                    },
                  },
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      this.setState({
                        bus: this.doFilterBus(e.busInfo),
                        listItemIndex: e.busInfo.busIndex,
                        isFirst: e.busInfo.isFirst,
                        filteredShiftType: this.doFilterShiftType(
                          this.props.busInfo
                        ),
                      });
                    },
                  },
                  {
                    key: "doFilterBus",
                    value: function (e) {
                      var t = e.product || {},
                        i = t.fromStation,
                        o = !1;
                      t.fromStations &&
                        t.fromStations.length &&
                        (t.fromStations.length > 2
                          ? ((i =
                              t.fromStations
                                .map(function (e) {
                                  return e.stationName;
                                })
                                .slice(0, 2)
                                .join("、") +
                              "等".concat(t.fromStations.length, "站")),
                            (o = !0))
                          : (i = t.fromStations
                              .map(function (e) {
                                return e.stationName;
                              })
                              .join("、")));
                      var n = !1,
                        s = t.toStationShow || t.toStation;
                      return (
                        t.toStations &&
                          t.toStations.length &&
                          (t.toStations.length > 2
                            ? ((s =
                                t.toStations
                                  .map(function (e) {
                                    return e.stationName;
                                  })
                                  .slice(0, 2)
                                  .join("、") +
                                "等".concat(t.toStations.length, "站")),
                              (n = !0))
                            : (s = t.toStations
                                .map(function (e) {
                                  return e.stationName;
                                })
                                .join("、"))),
                        (0, c.Z)(
                          (0, c.Z)({}, t),
                          {},
                          {
                            fromStationText: i,
                            showFromStationMore: o,
                            toStationText: s,
                            showToStationMore: n,
                          }
                        )
                      );
                    },
                  },
                  {
                    key: "doFilterShiftType",
                    value: function (e) {
                      var t = (e.product || {}).shiftType;
                      return null != t && t.length && 14 === t[0].type
                        ? t.slice(0, 2)
                        : t.slice(0, 1);
                    },
                  },
                  {
                    key: "onClickBusTimeDesc",
                    value: function () {
                      v().showToast({
                        title: "耗时仅供参考，受实时天气和路况影响",
                        icon: "none",
                        duration: 1500,
                      });
                    },
                  },
                  {
                    key: "onClickBus",
                    value: (function () {
                      var e = (0, r.Z)(
                        (0, a.Z)().mark(function e() {
                          var t,
                            i,
                            o,
                            n,
                            s,
                            r,
                            c,
                            l,
                            u,
                            d,
                            m,
                            h,
                            f,
                            p,
                            b,
                            v,
                            g,
                            S,
                            T,
                            k,
                            y,
                            C;
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((i = this.state),
                                      (o = i.listItemIndex),
                                      (n = i.bus),
                                      (s = i.xProductInfo),
                                      (r = this.props),
                                      (c = r.isDiTuiSource),
                                      (l = void 0 !== c && c),
                                      (u = r.utmSource),
                                      (d = void 0 === u ? "" : u),
                                      (m = r.currentXProductBusIndex),
                                      (h = r.xProductInfoStore),
                                      (f = void 0 === h ? null : h),
                                      (p = r.onSelectItem),
                                      (b = void 0 === p ? function () {} : p),
                                      (v = r.ubtTrace),
                                      (g = void 0 === v ? function () {} : v),
                                      (S = r.onChangeXProductIndex),
                                      (T = void 0 === S ? function () {} : S),
                                      g(
                                        {
                                          bizKey: "busShift",
                                          comment: "列表班次",
                                          clickType: U.uh.confirmClick,
                                        },
                                        2
                                      ),
                                      null == n ||
                                        !n.bookInfo ||
                                        0 !==
                                          (null == n ||
                                          null === (t = n.bookInfo) ||
                                          void 0 === t
                                            ? void 0
                                            : t.bookable))
                                    ) {
                                      e.next = 5;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 5:
                                    if (!l) {
                                      e.next = 27;
                                      break;
                                    }
                                    if (
                                      ((k = "wrapper".concat(o)), !f || !f[o])
                                    ) {
                                      e.next = 16;
                                      break;
                                    }
                                    if (!s || o !== m) {
                                      e.next = 11;
                                      break;
                                    }
                                    return (
                                      this.setState({ xProductInfo: null }),
                                      e.abrupt("return")
                                    );
                                  case 11:
                                    return (
                                      o !== m && (0, w.showLoading)(),
                                      T(o, k),
                                      this.setState({ xProductInfo: f[o] }),
                                      setTimeout(function () {
                                        (0, w.hideLoading)();
                                      }, 500),
                                      e.abrupt("return")
                                    );
                                  case 16:
                                    return (
                                      (y = O.c.getXProductParams(n, {
                                        fromTime: n.fromTime || n.lastFromTime,
                                        utmSource: d,
                                        productLine:
                                          1 === n.businessType ? 1 : 3,
                                      })),
                                      (e.next = 19),
                                      (0, K.gX)(y)
                                    );
                                  case 19:
                                    if (
                                      1 !==
                                        (null == (C = e.sent)
                                          ? void 0
                                          : C.code) ||
                                      null == C ||
                                      !C.data
                                    ) {
                                      e.next = 27;
                                      break;
                                    }
                                    return (
                                      o !== m && (0, w.showLoading)(),
                                      T(o, k),
                                      this.setState({ xProductInfo: C.data }),
                                      (f[o] = C.data),
                                      setTimeout(function () {
                                        (0, w.hideLoading)();
                                      }, 500),
                                      e.abrupt("return")
                                    );
                                  case 27:
                                    b();
                                  case 28:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "onSelectBus",
                    value: function () {
                      var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      e
                        ? this.props.ubtTrace(
                            {
                              bizKey: "list_tinyX_fastButton_click",
                              comment: "列表页-小X页极速预定按钮点击",
                              clickType: U.uh.confirmClick,
                            },
                            2
                          )
                        : this.props.ubtTrace(
                            {
                              bizKey: "list_tinyX_normalButton_click",
                              comment: "列表页-小X页普通预定按钮点击",
                              clickType: U.uh.confirmClick,
                            },
                            2
                          ),
                        this.props.onSelectItem(e);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state,
                        i = t.isTieyou,
                        o = t.bus,
                        n = t.listItemIndex,
                        s = t.xProductInfo,
                        a = t.isFirst,
                        r = s && this.props.currentXProductBusIndex === n;
                      return (
                        console.log(
                          "shiftType==",
                          null == o ? void 0 : o.shiftType
                        ),
                        o &&
                          (0, x.tZ)(g.View, {
                            className: "bus-list-item",
                            children: (0, x.BX)(g.View, {
                              className:
                                "list-item " +
                                (i ? "ty " : "zx ") +
                                (o.bookInfo && 0 === o.bookInfo.bookable
                                  ? "none "
                                  : " ") +
                                (o.productDesc &&
                                "optimization" == o.productDesc
                                  ? "priority "
                                  : "nopriority ") +
                                (o.productDesc &&
                                "optimization" == o.productDesc &&
                                a
                                  ? "first"
                                  : ""),
                              id: "AdBF",
                              onClick: this.onClickBus.bind(this),
                              children: [
                                o.productDesc &&
                                  "optimization" == o.productDesc &&
                                  a &&
                                  (0, x.BX)(g.View, {
                                    className: "title",
                                    children: [
                                      (0, x.tZ)(g.Image, {
                                        className: "tag",
                                        src: "https://images3.c-ctrip.com/train/wechat/bus/pointfirst.png",
                                      }),
                                      (0, x.tZ)(g.Text, {
                                        className: "name",
                                        children: "优选推荐·更便捷",
                                      }),
                                      (0, x.tZ)(g.Image, {
                                        className: "img",
                                        src: "https://images3.c-ctrip.com/train/wechat/bus/pointbus.png",
                                      }),
                                    ],
                                  }),
                                (0, x.BX)(g.View, {
                                  className: "wrapper",
                                  id: "wrapper".concat(n),
                                  children: [
                                    o.shiftType &&
                                      o.shiftType[0] &&
                                      (0, x.tZ)(g.View, {
                                        class: "tag-container",
                                        children:
                                          this.state.filteredShiftType.map(
                                            function (t, i) {
                                              return (
                                                (!t.desc &&
                                                  (0, x.tZ)(g.View, {
                                                    className: "tag"
                                                      .concat(
                                                        0 === i
                                                          ? " first"
                                                          : " normal"
                                                      )
                                                      .concat(
                                                        14 === t.type
                                                          ? " special"
                                                          : ""
                                                      ),
                                                    style: {
                                                      color: t.fontColor,
                                                    },
                                                    children: (0, x.tZ)(
                                                      g.Text,
                                                      {
                                                        className: "text",
                                                        children: t.title,
                                                      }
                                                    ),
                                                  })) ||
                                                (0, x.BX)(g.View, {
                                                  className: "tag "
                                                    .concat(
                                                      0 === i
                                                        ? " first"
                                                        : " normal"
                                                    )
                                                    .concat(
                                                      14 === t.type
                                                        ? " special"
                                                        : ""
                                                    ),
                                                  style: { color: t.fontColor },
                                                  id: "AdBG",
                                                  onClick: function (i) {
                                                    i.stopPropagation(),
                                                      e.onClickBusTag(t);
                                                  },
                                                  children: [
                                                    (0, x.tZ)(g.Text, {
                                                      className: "text more",
                                                      children: t.title,
                                                    }),
                                                    (0, x.tZ)(g.Text, {
                                                      className:
                                                        "ifont-detail iconfont",
                                                    }),
                                                  ],
                                                })
                                              );
                                            }
                                          ),
                                      }),
                                    (0, x.BX)(g.View, {
                                      className: "content",
                                      children: [
                                        (0, x.BX)(g.View, {
                                          className: "left",
                                          children: [
                                            (0, x.BX)(g.View, {
                                              className: "time-info",
                                              children: [
                                                3 === o.fromTimeType
                                                  ? (0, x.BX)(g.View, {
                                                      className: "time-start",
                                                      children: [
                                                        (0, x.tZ)(g.View, {
                                                          className:
                                                            "time-text",
                                                          children: "任选时间",
                                                        }),
                                                        (0, x.BX)(g.View, {
                                                          className: "time-min",
                                                          children: [
                                                            o.fromTime,
                                                            " - ",
                                                            o.lastFromTime,
                                                          ],
                                                        }),
                                                      ],
                                                    })
                                                  : 2 === o.fromTimeType
                                                  ? (0, x.BX)(g.View, {
                                                      className: "time-start",
                                                      children: [
                                                        !!o.fromTime &&
                                                          (0, x.BX)(g.View, {
                                                            className:
                                                              "time-range",
                                                            children: [
                                                              (0, x.tZ)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "text start",
                                                                  children:
                                                                    "首",
                                                                }
                                                              ),
                                                              (0, x.tZ)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "time",
                                                                  children:
                                                                    o.fromTime,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        !!o.lastFromTime &&
                                                          (0, x.BX)(g.View, {
                                                            className:
                                                              "time-range",
                                                            children: [
                                                              (0, x.tZ)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "text end",
                                                                  children:
                                                                    "末",
                                                                }
                                                              ),
                                                              (0, x.tZ)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "time",
                                                                  children:
                                                                    o.lastFromTime,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                      ],
                                                    })
                                                  : (0, x.tZ)(g.View, {
                                                      className: "time-start",
                                                      children: o.fromTime,
                                                    }),
                                                (0, x.tZ)(g.View, {
                                                  className: "time-desc",
                                                  id: "AdBH",
                                                  onClick:
                                                    this.onClickBusTimeDesc.bind(
                                                      this,
                                                      o
                                                    ),
                                                  children: o.costTimeDesc,
                                                }),
                                              ],
                                            }),
                                            (0, x.tZ)(g.View, {
                                              className: "line",
                                            }),
                                            (0, x.BX)(g.View, {
                                              className: "station-info",
                                              children: [
                                                (0, x.BX)(g.View, {
                                                  className: "station",
                                                  children: [
                                                    (0, x.tZ)(g.View, {
                                                      className:
                                                        "station-start",
                                                      children:
                                                        o.fromStationText,
                                                    }),
                                                    !o.showFromStationMore &&
                                                      o.isNearest &&
                                                      !(
                                                        o.bookInfo &&
                                                        0 ===
                                                          o.bookInfo.bookable
                                                      ) &&
                                                      (0, x.tZ)(g.View, {
                                                        className: "near",
                                                        children: (0, x.tZ)(
                                                          g.View,
                                                          {
                                                            className:
                                                              "near-icon",
                                                          }
                                                        ),
                                                      }),
                                                    o.showFromStationMore &&
                                                      (0, x.tZ)(g.View, {
                                                        className:
                                                          "station-arraw",
                                                        children: (0, x.tZ)(
                                                          g.Text,
                                                          {
                                                            className:
                                                              "ifont-arr iconfont",
                                                          }
                                                        ),
                                                      }),
                                                  ],
                                                }),
                                                (0, x.BX)(g.View, {
                                                  className: "station",
                                                  children: [
                                                    (0, x.tZ)(g.View, {
                                                      className: "station-end",
                                                      children: o.toStationText,
                                                    }),
                                                    o.showToStationMore &&
                                                      (0, x.tZ)(g.View, {
                                                        className:
                                                          "station-arraw",
                                                        children: (0, x.tZ)(
                                                          g.Text,
                                                          {
                                                            className:
                                                              "ifont-arr iconfont",
                                                          }
                                                        ),
                                                      }),
                                                  ],
                                                }),
                                                o.busType &&
                                                  (0, x.tZ)(g.View, {
                                                    className: "bus-desc",
                                                    children: o.busType,
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, x.BX)(g.View, {
                                          className: "right",
                                          children: [
                                            (0, x.BX)(g.View, {
                                              children: [
                                                (0, x.BX)(g.View, {
                                                  className: "price-wrapper",
                                                  children: [
                                                    !!o.ticketPrice &&
                                                      (0, x.tZ)(g.View, {
                                                        className:
                                                          "origin-price",
                                                        children: o.ticketPrice,
                                                      }),
                                                    !!o.showPrice &&
                                                      (0, x.tZ)(g.View, {
                                                        className: "price",
                                                        children: o.showPrice,
                                                      }),
                                                  ],
                                                }),
                                                o.bookInfo &&
                                                  0 !== o.bookInfo.bookable &&
                                                  !!o.priceSuffix &&
                                                  (0, x.tZ)(g.View, {
                                                    className: "coupon-tag",
                                                    children: o.priceSuffix,
                                                  }),
                                                o.bookInfo &&
                                                  0 !== o.bookInfo.bookable &&
                                                  !!o.remainTicketDesc &&
                                                  (0, x.tZ)(g.View, {
                                                    className: "count",
                                                    children:
                                                      o.remainTicketDesc,
                                                  }),
                                                o.bookInfo &&
                                                  0 !== o.bookInfo.bookable &&
                                                  o.isPresell &&
                                                  (0, x.tZ)(g.View, {
                                                    className: "book-pre",
                                                    children: "预约购票",
                                                  }),
                                                o.bookInfo &&
                                                  0 === o.bookInfo.bookable &&
                                                  !!o.bookInfo.message &&
                                                  (0, x.tZ)(g.View, {
                                                    className: "reason",
                                                    children:
                                                      o.bookInfo.message,
                                                  }),
                                              ],
                                            }),
                                            r &&
                                              (0, x.BX)(g.View, {
                                                className: "close-xproduct-btn",
                                                children: [
                                                  (0, x.tZ)(g.Text, {
                                                    className: "cxb-txt",
                                                    children: "收起",
                                                  }),
                                                  (0, x.tZ)(g.Text, {
                                                    className:
                                                      "iconfont ifont-triangle2",
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                r &&
                                  (0, x.tZ)(Y, {
                                    xProductData: s,
                                    onClickNormalBuy: function () {
                                      return e.onSelectBus();
                                    },
                                    onClickQuicklyBuy: function () {
                                      return e.onSelectBus(!0);
                                    },
                                    ubtTrace: this.props.ubtTrace,
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
            })(p.default.Component),
            $ = i(29172),
            ee = i(65004),
            te = (function (e) {
              (0, m.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var o;
                return (
                  (0, l.Z)(this, i),
                  ((o = t.call(this, e)).state = {
                    show: !1,
                    fromStations: [],
                    toStations: [],
                    price: "",
                    matrixPrices: [],
                  }),
                  o
                );
              }
              return (
                (0, u.Z)(i, [
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      !this.props.visible &&
                        e.visible &&
                        this.computedData(e.info),
                        this.setState({ show: e.visible });
                    },
                  },
                  {
                    key: "computedData",
                    value: function (e) {
                      this.setState({
                        fromStations: e.fromStations
                          ? e.fromStations.map(function (e) {
                              return (0,
                              c.Z)((0, c.Z)({}, e), {}, { isSelected: !1 });
                            })
                          : [],
                        toStations: e.toStations
                          ? e.toStations.map(function (e) {
                              return (0,
                              c.Z)((0, c.Z)({}, e), {}, { isSelected: !1 });
                            })
                          : [],
                        price: e.price,
                        matrixPrices: e.matrixPrices || [],
                      });
                    },
                  },
                  {
                    key: "onClickFromStation",
                    value: function (e) {
                      if (!e.isSelected) {
                        var t = this.state.fromStations;
                        this.setState({
                          fromStations: t.map(function (t) {
                            return (0,
                            c.Z)((0, c.Z)({}, t), {}, { isSelected: e.stationName === t.stationName });
                          }),
                        });
                      }
                    },
                  },
                  {
                    key: "onClickToStation",
                    value: function (e) {
                      if (!e.isSelected) {
                        var t = this.state.toStations;
                        this.setState({
                          toStations: t.map(function (t) {
                            return (0,
                            c.Z)((0, c.Z)({}, t), {}, { isSelected: e.stationName === t.stationName });
                          }),
                        });
                      }
                    },
                  },
                  {
                    key: "onClickClose",
                    value: function () {
                      this.props.onClose();
                    },
                  },
                  {
                    key: "onClickConFirm",
                    value: function () {
                      var e = this.state,
                        t = e.fromStations,
                        i = e.toStations,
                        o = t.find(function (e) {
                          return e.isSelected;
                        }),
                        n = i.find(function (e) {
                          return e.isSelected;
                        });
                      (t.length && !o) ||
                        (i.length && !n) ||
                        this.props.onConfirm(
                          o ? o.stationName : "",
                          n ? n.stationName : ""
                        );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e,
                        t = this,
                        i = this.state,
                        o = i.show,
                        n = i.fromStations,
                        s = i.toStations,
                        a = i.price,
                        r = i.matrixPrices,
                        c = void 0 === r ? [] : r,
                        l = n.length
                          ? n.find(function (e) {
                              return e.isSelected;
                            })
                          : void 0,
                        u = s.length
                          ? s.find(function (e) {
                              return e.isSelected;
                            })
                          : void 0,
                        d =
                          (!l && n.length) ||
                          (!u && s.length) ||
                          (!s.length && !n.length) ||
                          !c.length
                            ? a
                            : null ===
                                (e = c.find(function (e) {
                                  var t = e.fromStationCode,
                                    i = void 0 === t ? "" : t,
                                    o = e.toCode,
                                    n = void 0 === o ? "" : o;
                                  return (
                                    i.toString() ===
                                      (l
                                        ? l.stationCode
                                        : c[0].fromStationCode
                                      ).toString() &&
                                    n.toString() ===
                                      (u
                                        ? u.stationCode
                                        : c[0].toCode
                                      ).toString()
                                  );
                                })) || void 0 === e
                            ? void 0
                            : e.price;
                      return (0, x.tZ)(g.View, {
                        className: "bus-station-modal",
                        children:
                          o &&
                          (0, x.BX)(g.View, {
                            className: "station-modal",
                            children: [
                              (0, x.tZ)(g.View, {
                                className:
                                  "modal-mask " + (o ? "visible" : "hidden"),
                                id: "AdAU",
                                onClick: this.onClickClose.bind(this),
                              }),
                              (0, x.BX)(g.View, {
                                className:
                                  "modal-view " + (o ? "visible" : "hidden"),
                                children: [
                                  (0, x.BX)(g.View, {
                                    className: "modal-bar",
                                    children: [
                                      (0, x.tZ)(g.View, {
                                        className: "left-btn",
                                        id: "AdAV",
                                        onClick: this.onClickClose.bind(this),
                                        children: "取消",
                                      }),
                                      (0, x.tZ)(g.View, {
                                        className: "title",
                                        children: "请选择站点",
                                      }),
                                      (0, x.tZ)(g.View, {
                                        className: "right-btn",
                                      }),
                                    ],
                                  }),
                                  (0, x.BX)(g.View, {
                                    className: "modal-content",
                                    children: [
                                      (0, x.BX)(g.View, {
                                        className: "content",
                                        children: [
                                          n &&
                                            n[0] &&
                                            (0, x.BX)(g.View, {
                                              className: "stations",
                                              children: [
                                                (0, x.tZ)(g.View, {
                                                  className: "title",
                                                  children: "出发站",
                                                }),
                                                (0, x.tZ)(g.View, {
                                                  className: "place-content",
                                                  children: n.map(function (
                                                    e,
                                                    i
                                                  ) {
                                                    return (0, x.BX)(
                                                      g.View,
                                                      {
                                                        className:
                                                          "station-item " +
                                                          (e.isSelected
                                                            ? "cur"
                                                            : ""),
                                                        id: "AdAX",
                                                        onClick:
                                                          t.onClickFromStation.bind(
                                                            t,
                                                            e
                                                          ),
                                                        children: [
                                                          (0, x.tZ)(g.View, {
                                                            className:
                                                              "station-time",
                                                            children:
                                                              e.fromTime,
                                                          }),
                                                          (0, x.tZ)(g.View, {
                                                            className:
                                                              "station-name",
                                                            children:
                                                              e.stationName,
                                                          }),
                                                          (0, x.tZ)($.Z, {
                                                            checked:
                                                              e.isSelected,
                                                            size: 20,
                                                            id: "AdAY",
                                                            onClick:
                                                              t.onClickFromStation.bind(
                                                                t,
                                                                e
                                                              ),
                                                          }),
                                                        ],
                                                      },
                                                      i
                                                    );
                                                  }),
                                                }),
                                              ],
                                            }),
                                          s &&
                                            s[0] &&
                                            (0, x.BX)(g.View, {
                                              className: "stations",
                                              children: [
                                                (0, x.tZ)(g.View, {
                                                  className: "title",
                                                  children: "到达站",
                                                }),
                                                (0, x.tZ)(g.View, {
                                                  className: "place-content",
                                                  children: s.map(function (
                                                    e,
                                                    i
                                                  ) {
                                                    return (0, x.BX)(
                                                      g.View,
                                                      {
                                                        className:
                                                          "station-item " +
                                                          (e.isSelected
                                                            ? "cur"
                                                            : ""),
                                                        id: "AdAZ",
                                                        onClick:
                                                          t.onClickToStation.bind(
                                                            t,
                                                            e
                                                          ),
                                                        children: [
                                                          (0, x.tZ)(g.View, {
                                                            className:
                                                              "station-time",
                                                            children:
                                                              e.fromTime,
                                                          }),
                                                          (0, x.tZ)(g.View, {
                                                            className:
                                                              "station-name",
                                                            children:
                                                              e.stationName,
                                                          }),
                                                          (0, x.tZ)($.Z, {
                                                            checked:
                                                              e.isSelected,
                                                            size: 20,
                                                            id: "AdAa",
                                                            onClick:
                                                              t.onClickToStation.bind(
                                                                t,
                                                                e
                                                              ),
                                                          }),
                                                        ],
                                                      },
                                                      i
                                                    );
                                                  }),
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, x.BX)(g.View, {
                                        className: "bottom",
                                        children: [
                                          (0, x.tZ)(g.View, {
                                            className: "price",
                                            children: d || a,
                                          }),
                                          (0, x.tZ)(ee.Z, {
                                            btnText: "确定",
                                            shape: "cycle",
                                            type: "fill",
                                            style: {
                                              width: "160px",
                                              height: "38px",
                                              lineHeight: "38px",
                                              fontSize: "18px",
                                            },
                                            id: "AdAb",
                                            onClick:
                                              this.onClickConFirm.bind(this),
                                          }),
                                        ],
                                      }),
                                    ],
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
            })(p.default.Component),
            ie = i(63583),
            oe = i(1153),
            ne = (function (e) {
              (0, m.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                return (0, l.Z)(this, i), t.call(this, e);
              }
              return (
                (0, u.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props.visible,
                        t = null,
                        i = [],
                        o =
                          "https://pages.c-ctrip.com/bus-images/zhixing/zx_bus_coupon_header.png";
                      return (
                        this.props &&
                          this.props.info &&
                          ((i = this.props.info.indexCouponList),
                          (t = this.props.info.isReceive),
                          (o = this.props.info.picUrl)),
                        (0, x.tZ)(g.View, {
                          className: "bus-list-coupon-modal",
                          children:
                            e &&
                            (0, x.tZ)(g.View, {
                              className: "mod-coupon-modal",
                              children: (0, x.tZ)(g.View, {
                                className: "modal-mask ".concat(
                                  e ? "visible" : "hidden"
                                ),
                                children: (0, x.BX)(g.View, {
                                  className: "modal-zone",
                                  children: [
                                    (0, x.BX)(g.View, {
                                      id: "modal-wrapper",
                                      className: "modal-wrapper ".concat(
                                        e ? "visible" : "hidden"
                                      ),
                                      children: [
                                        (0, x.tZ)(g.Image, {
                                          className: "tzone",
                                          src: o,
                                        }),
                                        (0, x.BX)(g.View, {
                                          className: "bzone",
                                          children: [
                                            (0, x.tZ)(g.ScrollView, {
                                              className: "tbox",
                                              scrollY: !0,
                                              bounces: !0,
                                              enhanced: !0,
                                              fastDeceleration: !0,
                                              children: i.map(function (e) {
                                                return (0,
                                                x.BX)(g.View, { className: "item", children: [e.tag && (0, x.tZ)(g.View, { className: "tag", children: e.tag }), (0, x.BX)(g.View, { className: "lbox", children: [(0, x.tZ)(g.Text, { className: "mark", children: "¥" }), (0, x.tZ)(g.Text, { className: "price", children: e.price })] }), (0, x.tZ)(g.View, { className: "rbox", children: (0, x.BX)(g.View, { children: [(0, x.tZ)(g.View, { className: "title", children: e.promotionTitle }), (0, x.tZ)(g.View, { className: "subtitle", children: e.promotionDes })] }) })] }, "index");
                                              }),
                                            }),
                                            (0, x.tZ)(g.View, {
                                              className: "bbox",
                                              id: "AdBp",
                                              onClick: this.props.onConfirm,
                                              children: t
                                                ? "立即使用"
                                                : "一键领取",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, x.tZ)(g.Text, {
                                      className: "ifont-closed iconfont close",
                                      id: "AdBq",
                                      onClick: this.props.onClose,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                        })
                      );
                    },
                  },
                ]),
                i
              );
            })(p.default.Component),
            se = i(69878),
            ae = {
              0: {
                member: "",
                priceLeftText: "当前线路特价优惠",
                priceLeftRight: "元/张",
                bgUrl: "",
              },
              10: {
                nameUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/byhy@3x.png",
                priceLeftText: "当前线路特价优惠",
                priceLeftRight: "元/张",
                bgUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/bybg@3x.png",
                iconUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/by@3x.png",
                textColor: "#666666",
              },
              20: {
                nameUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/hjhy@3x.png",
                priceLeftText: "当前线路特价优惠",
                priceLeftRight: "元/张",
                bgUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/hjbg@3x.png",
                iconUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/hj@3x.png",
                textColor: "#D98C21",
              },
              30: {
                nameUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/bjhy@3x.png",
                iconUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/bj@3x.png",
                priceLeftText: "当前线路特价优惠",
                priceLeftRight: "元/张",
                bgUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/bjbg@3x.png",
                textColor: "#43307D",
              },
              40: {
                nameUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/hzhy@3x.png",
                iconUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/hz@3x.png",
                priceLeftText: "当前线路特价优惠",
                priceLeftRight: "元/张",
                bgUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/hzbg@3x.png",
                textColor: "#222222",
              },
              80: {
                nameUrl: "",
                iconUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/hb@3x.png",
                priceLeftText: "当前线路特价优惠",
                priceLeftRight: "元/张",
                bgUrl:
                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/pkbg@3x.png",
                textColor: "#922B00",
              },
            },
            re = (function (e) {
              (0, m.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                return (0, l.Z)(this, i), t.call(this, e);
              }
              return (
                (0, u.Z)(i, [
                  {
                    key: "getMemberDiscountInfo",
                    value: function () {
                      var e = this.props.memberDiscountInfo;
                      return (0, c.Z)((0, c.Z)({}, e), ae[e.code] || {});
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.getMemberDiscountInfo(),
                        t = 80 == e.code;
                      return 0 == e.code
                        ? null
                        : (0, x.BX)(g.View, {
                            className: "bus-list--member-banner",
                            style: {
                              backgroundImage: "url(".concat(e.bgUrl, ")"),
                            },
                            children: [
                              (0, x.BX)(g.View, {
                                className: "bl",
                                children: [
                                  (0, x.tZ)(g.Image, {
                                    className: "icon-img",
                                    src: e.iconUrl,
                                    mode: "aspectFit",
                                  }),
                                  e.nameUrl &&
                                    (0, x.tZ)(g.Image, {
                                      className: "name-img",
                                      src: e.nameUrl,
                                      mode: "aspectFit",
                                    }),
                                  (0, x.BX)(g.View, {
                                    className: "text",
                                    style: {
                                      color: e.textColor || "#666666",
                                      fontWeight:
                                        80 === e.code ? "500" : "normal",
                                    },
                                    children: [
                                      e.nameUrl &&
                                        (0, x.tZ)(g.Text, {
                                          style: { margin: "0 2px" },
                                          children: "·",
                                        }),
                                      e.priceLeftText,
                                      (0, x.tZ)(g.Text, {
                                        className: "price",
                                        children: e.price,
                                      }),
                                      e.priceLeftRight,
                                    ],
                                  }),
                                ],
                              }),
                              t &&
                                (0, x.BX)(g.View, {
                                  className: "br",
                                  children: [
                                    (0, x.tZ)(g.Image, {
                                      className: "pk-img",
                                      src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/pk@3x.png",
                                      mode: "aspectFit",
                                    }),
                                    (0, x.BX)(g.Text, {
                                      className: "text",
                                      children: [
                                        "比车站低",
                                        (0, x.BX)(g.Text, {
                                          className: "price",
                                          children: ["￥", e.price],
                                        }),
                                      ],
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
            })(p.default.PureComponent),
            ce = i(34229),
            le = (function (e) {
              (0, m.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                return (0, l.Z)(this, i), t.call(this, e);
              }
              return (
                (0, u.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.onClose,
                        i = e.isShow,
                        o = e.info,
                        n = e.onReceive;
                      return (0, x.tZ)(ce.ZtActivityPop, {
                        show: i,
                        onClose: t,
                        onWrapClose: t,
                        className: "bus-dt-retrieve-modal",
                        animation: "comeup",
                        isShowClose: !1,
                        children: (0, x.tZ)(g.View, {
                          className: "modal-body",
                          children: (0, x.BX)(g.View, {
                            className: "modal-content",
                            children: [
                              (0, x.tZ)(g.View, {
                                className: "price-content",
                                children: (o && o.couponPrice) || 0,
                              }),
                              (0, x.tZ)(g.Image, {
                                mode: "aspectFit",
                                className: "title",
                                src: "https://pages.c-ctrip.com/bus-images/zhixing/Popup/btqcp@3x.png",
                              }),
                              (0, x.tZ)(g.View, {
                                className: "desc",
                                children:
                                  (o && o.subTitle) ||
                                  "送你汽车票立减券, 仅今日可用哦～",
                              }),
                              (0, x.tZ)(g.View, {
                                className: "receive-btn",
                                id: "AdBr",
                                onClick: n,
                                children: "领取并购票",
                              }),
                              (0, x.tZ)(g.View, {
                                className: "btn-close",
                                id: "AdBs",
                                onClick: t,
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
            })(p.default.PureComponent),
            ue = i(94262),
            de = (function (e) {
              (0, m.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                return (0, l.Z)(this, i), t.call(this, e);
              }
              return (
                (0, u.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      return (
                        (0, ue.Z)(this.props),
                        (0, x.BX)(g.View, {
                          className: "bus-dt-retrieve-banner",
                          children: [
                            (0, x.BX)(g.View, {
                              className: "bl",
                              children: [
                                (0, x.tZ)(g.Image, {
                                  className: "title",
                                  mode: "aspectFit",
                                  src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/bczpytb@3x.png",
                                }),
                                (0, x.BX)(g.View, {
                                  className: "desc",
                                  children: [
                                    (0, x.tZ)(g.Text, { children: "智" }),
                                    (0, x.tZ)(g.Text, { children: "行" }),
                                    (0, x.tZ)(g.Text, { children: "汽" }),
                                    (0, x.tZ)(g.Text, { children: "车" }),
                                    (0, x.tZ)(g.Text, { children: "票" }),
                                  ],
                                }),
                              ],
                            }),
                            (0, x.BX)(g.View, {
                              className: "br",
                              children: [
                                (0, x.BX)(g.View, {
                                  className: "br-item",
                                  children: [
                                    (0, x.tZ)(g.Image, {
                                      className: "icon",
                                      mode: "aspectFit",
                                      src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/djbz@3x.png",
                                    }),
                                    "官方合作购票平台",
                                  ],
                                }),
                                (0, x.BX)(g.View, {
                                  className: "br-item",
                                  children: [
                                    (0, x.tZ)(g.Image, {
                                      className: "icon",
                                      mode: "aspectFit",
                                      src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/ax@3x.png",
                                    }),
                                    "100%包上车",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      );
                    },
                  },
                ]),
                i
              );
            })(p.default.PureComponent),
            me = i(5994),
            he = i(27570),
            fe = p.default.memo(function (e) {
              var t = e.title,
                i = void 0 === t ? "" : t,
                o = e.statusBarHeight,
                n = void 0 === o ? 0 : o,
                s = e.brandInfo,
                a = void 0 === s ? {} : s,
                r = e.onBackClick,
                c = void 0 === r ? function () {} : r;
              return (0, x.BX)(g.View, {
                className: "bus-list-head flex-center",
                style: "padding-top: ".concat(n, "px;"),
                children: [
                  !T.default.isBaidu &&
                    (0, x.tZ)(g.Text, {
                      className: "ifont-arr iconfont back",
                      id: "AdBu",
                      onClick: function () {
                        return c();
                      },
                    }),
                  a
                    ? (0, x.BX)(g.View, {
                        className: "brand-con flex",
                        children: [
                          a.partyAaLogo &&
                            (0, x.tZ)(g.View, {
                              className: "brand-icon",
                              children: (0, x.tZ)(g.Image, {
                                src: a.partyAaLogo,
                                mode: "aspectFit",
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  display: "block",
                                },
                              }),
                            }),
                          (0, x.BX)(g.View, {
                            className: "brand-info flex flex-column",
                            children: [
                              (0, x.tZ)(he.Z, {
                                className: "tit",
                                useAnimation: !0,
                                useEllipsisX: !0,
                                ellipsisBeyondWidth: 130,
                                children: i,
                              }),
                              a.note &&
                                (0, x.tZ)(g.View, {
                                  className: "note",
                                  children: a.note,
                                }),
                            ],
                          }),
                        ],
                      })
                    : (0, x.tZ)(he.Z, {
                        className: "tit",
                        useAnimation: !0,
                        useEllipsisX: !0,
                        ellipsisBeyondWidth: 165,
                        transformOrigin: { x: "center", y: "center" },
                        children: i,
                      }),
                ],
              });
            }),
            pe = p.default.memo(function (e) {
              var t = e.tabIndex,
                i = void 0 === t ? 0 : t,
                o = e.pointBusTab,
                n = void 0 === o ? {} : o,
                s = e.onClickTab,
                a = void 0 === s ? function () {} : s;
              return (0, x.BX)(g.View, {
                className: "bus-list-tab",
                children: [
                  (0, x.BX)(g.View, {
                    className: "content",
                    children: [
                      (0, x.tZ)(g.View, {
                        className: "tab " + (0 === i ? "cur" : ""),
                        id: "AdBx",
                        onClick: function () {
                          return a(0);
                        },
                        children: "汽车票",
                      }),
                      (0, x.BX)(g.View, {
                        className: "tab " + (1 === i ? "cur" : ""),
                        id: "AdBy",
                        onClick: function () {
                          return a(1);
                        },
                        children: [
                          n.tagList && n.tagList[0]
                            ? (0, x.BX)(g.View, {
                                className: "title",
                                children: [" ", n.title, " "],
                              })
                            : n.title,
                          n.tagList &&
                            n.tagList[0] &&
                            (0, x.tZ)(g.View, {
                              className: "desc",
                              children: n.tagList.map(function (e, t) {
                                return (0,
                                x.tZ)(g.Block, { children: e + (t !== n.tagList.length - 1 ? "，" : "") }, "index");
                              }),
                            }),
                          n.serviceDesc &&
                            (0, x.BX)(g.View, {
                              className: "tag",
                              children: [" ", n.serviceDesc, " "],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, x.tZ)(g.View, {
                    className: "bottom",
                    children: (0, x.tZ)(g.View, {
                      className: "border " + (1 === i ? "tansfer" : ""),
                      children: (0, x.tZ)(g.View, { className: "line" }),
                    }),
                  }),
                ],
              });
            }),
            be = p.default.memo(function (e) {
              var t,
                i = e.isShowCouponBar,
                o = void 0 !== i && i,
                n = e.couponInfo,
                s = void 0 === n ? {} : n,
                a = e.onClick,
                r = void 0 === a ? function () {} : a;
              return (0,
              x.BX)(g.View, { className: "bus-list-coupon-tips", children: [s.isReceive && (0, x.tZ)(g.Text, { className: "bar ".concat(o ? "active" : "unactive"), children: s.couponTips }), (0, x.BX)(g.View, { className: "box", id: "AdBt", onClick: r, children: [(0, x.tZ)(g.Text, { className: "price ".concat(o ? "active" : "unactive", " ").concat((null === (t = s.maxCouponPrice) || void 0 === t ? void 0 : t.length) > 1 ? "scale" : ""), children: s.maxCouponPrice }), (0, x.tZ)(g.Image, { className: "img ".concat(o ? "active" : "unactive"), src: "https://images3.c-ctrip.com/train/wechat/bus/discountlist.png" })] })] });
            }),
            ve = p.default.memo(function (e) {
              var t,
                i,
                o = e.bannerInfo;
              return (0, x.BX)(g.View, {
                className: " _Fk _Gk _dc _Hk _i _l _Ik",
                children: [
                  (0, x.tZ)(g.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_08/stu@3x.png",
                    className: " _Tk _Uk",
                  }),
                  (0, x.BX)(g.View, {
                    className: " _j _Rd",
                    children: [
                      (0, x.tZ)(g.View, {
                        className: " _Jk _hk",
                        children: o.title,
                      }),
                      (null === (t = o.tags) || void 0 === t
                        ? void 0
                        : t.length) > 0 &&
                        (0, x.tZ)(g.View, {
                          className: " _Mk _i",
                          children:
                            null === (i = o.tags) || void 0 === i
                              ? void 0
                              : i.map(function (e, t) {
                                  return (0,
                                  x.BX)(g.View, { className: " _Rj _Nk _Va _i", children: [(0, x.tZ)(g.View, { className: " _Ok _Pk _Rj _O _qb _Qk _Rk", children: "学生" }), (0, x.tZ)(g.View, { className: " _Sk _Qk _O _Rk", children: e })] }, t);
                                }),
                        }),
                    ],
                  }),
                  (0, x.tZ)(g.Button, {
                    onClick: function () {
                      return k.Z.commonNavigator(o.jumpUrl);
                    },
                    className:
                      "2" === o.type
                        ? " _bc _qa _ob _Oc _b _rb _Lk"
                        : " _bc _Kk _ob _Oc _Jk _rb _jc",
                    children: o.button,
                  }),
                ],
              });
            }),
            ge = "YYYY-MM-DD",
            Se = _()().format(ge),
            Te = [
              "inUTpYOxjBSGY2yfBRt1Uu1cTS5212s0nj_oM7ohkQA",
              "_I2ln5Gq8BocIbLenNLQyHpThHa4WHyEbBSmiOcz44Q",
            ],
            ke = {
              wrapperOption: {
                width: "80%",
                boxSizing: "border-box",
                padding: "0 0 20px 0",
                borderRadius: "16px",
              },
            },
            we = {
              wrapperOption: {
                width: "80%",
                boxSizing: "border-box",
                padding: "20px",
                borderRadius: "16px",
              },
            },
            ye = "zxxcx_ditui_yilabao",
            Ce =
              (0, E.h)()(
                (o = (function (e) {
                  (0, m.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var o;
                    (0, l.Z)(this, i),
                      (o = t.call(this, e)),
                      (0, f.Z)((0, d.Z)(o), "isFirstMount", !0),
                      (o.pageId = "10650059984"),
                      (o.selectorQuery = v().createSelectorQuery()),
                      (o.state = {
                        isTieyou: T.default.isTieyou,
                        statusBarHeight: k.A.statusBarHeight,
                        isLoading: !0,
                        departureType: "normal",
                        isLogin: S.ZP.isLogin,
                        fromCity: "",
                        fromStation: "",
                        utmSource: "",
                        toCity: "",
                        toStation: "",
                        chooseDate: "",
                        beginDate: "",
                        endDate: "",
                        tabIndex: 0,
                        pointBusTab: null,
                        busCount: 0,
                        busParams: {},
                        busList: [],
                        unableBusList: [],
                        showUnableBusList: !1,
                        selectedBus: {},
                        filter: null,
                        filterParams: {},
                        busFilterParams: {},
                        pointFilterParams: {},
                        filterModalVisible: !1,
                        filterByTime: !1,
                        selectStationModalVisible: !1,
                        selectStationModalInfo: {},
                        isDiTuiSource: !1,
                        diTuiActivityInfo: null,
                        diTuiCouponModalVisible: !1,
                        isSwicthInterCity: !1,
                        travelEnvelopeModalInfo: {},
                        travelEnvelopeModalVisible: !1,
                        tabType: "",
                        endPositionShow: !1,
                        listBanner: {
                          icon: "",
                          jumpUrl: "",
                          subTitle: "",
                          title: "",
                          type: "",
                        },
                        envelopeModalTimeLeft: null,
                        isCouponBarShow: !1,
                        couponInfo: {},
                        isBusCouponModalShow: !1,
                        busCouponModalInfo: {},
                        showTimePicker: !1,
                        timePickerOptions: null,
                        showNum: 20,
                        scrollTop: 0,
                        showGuide: !1,
                        brandInfo: null,
                        headTitle: "",
                        memberDiscountInfo: null,
                        isShowDTRetrieveBanner: !1,
                        isShowDTRetrieveModal: !1,
                        dTRetrieveModalInfo: null,
                        quickFilterFormatData: [],
                        quickFilterTab: "",
                        showQuickTabInTop: !1,
                        commonNoticeModal: null,
                        markRouteNum: 0,
                        currentXProductBusIndex: -1,
                        currentViewId: "",
                        xProductInfoStore: {},
                        scrollViewDomHeight: 0,
                        isShowCalendar: !1,
                        dateInfo: {},
                        studentVerifyBanner: null,
                      });
                    var n =
                      (0, b.getCurrentInstance)().router &&
                      (0, b.getCurrentInstance)().router.params;
                    return (
                      n &&
                        n.tabType &&
                        ("scenicArea" == n.tabType
                          ? (o.pageId = "10650059992")
                          : "airport" == n.tabType &&
                            (o.pageId = "10650060000")),
                      (o.isNeedLoadUserLabelInfo = !0),
                      o
                    );
                  }
                  return (
                    (0, u.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t =
                              (0, b.getCurrentInstance)().router &&
                              (0, b.getCurrentInstance)().router.params;
                          this.setState({
                            headTitle: ""
                              .concat(t.fromCity, " - ")
                              .concat(t.toCity),
                          }),
                            (0, w.setNavigationBarColor)({
                              frontColor: "#000000",
                              backgroundColor: "#fff",
                            });
                          var i =
                            t.utmsource ||
                            t.utmSource ||
                            O.c.getUtmSource({
                              station: [t.fromStation, t.fromCity],
                            });
                          i &&
                            !t.sourceFromPrevPage &&
                            (0, B.HQ)(i, {
                              station: [t.fromStation],
                              city: t.fromCity,
                            });
                          var o = Se;
                          t.date &&
                            new Date(t.date.replace(/\-/g, "/")).getTime() >=
                              new Date(Se.replace(/\-/g, "/")).getTime() &&
                            (o = t.date);
                          var n = {};
                          t.website && (n.website = t.website),
                            this.setState(
                              {
                                fromCity: t.fromCity,
                                toCity: t.toCity,
                                fromStation: t.fromStation,
                                toStation: t.toStation,
                                tabType: t.tabType || "",
                                chooseDate: o,
                                beginDate: Se,
                                isSwicthInterCity: "1" === t.tabIndex,
                                endDate: _()().add(U.J8, "day").format(ge),
                                busParams: (0, c.Z)(
                                  {
                                    fromCity: t.fromCity,
                                    toCity: t.toCity,
                                    fromDate: o,
                                    fromStationList: t.fromStation
                                      ? [t.fromStation]
                                      : [],
                                    toStationList: t.toStation
                                      ? [t.toStation]
                                      : [],
                                    utmSource: i,
                                  },
                                  n
                                ),
                                utmSource: i,
                              },
                              function () {
                                e.getConfigInfo(),
                                  e.preCheckSubscribeInfo(),
                                  e.judgeIsShowDTRetireModal(),
                                  (e.sourceId = (0, B.a3)(i)),
                                  e.doBusNewTraceInfoV2({
                                    triggerType: "load",
                                  });
                              }
                            ),
                            1 == t.isship && this.doBusTabAction(),
                            (0, B.MX)({ utmSource: i }).then(function (t) {
                              t &&
                                e.setState({
                                  showGuide: !(0, B.Bq)(
                                    B.t0.LINE_SELECT_IN_LIST
                                  ),
                                });
                            });
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.doBusNewTraceInfoV2({ triggerType: "exit" });
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          var e,
                            t = this.state,
                            i = t.fromCity,
                            o = t.toCity,
                            n = t.fromStation,
                            s = t.toStation,
                            a = t.tabType,
                            r = t.chooseDate,
                            c = t.tabIndex;
                          return (
                            (e = a
                              ? "/pages/bus/list/list?fromCity="
                                  .concat(i, "&toCity=")
                                  .concat(o, "&tabType=")
                                  .concat(a, "&date=")
                                  .concat(r, "&sourceId=")
                                  .concat(this.sourceId)
                              : "/pages/bus/list/list?fromCity="
                                  .concat(i, "&toCity=")
                                  .concat(o, "&fromStation=")
                                  .concat(n, "&toStation=")
                                  .concat(s, "&date=")
                                  .concat(r, "&tabIndex=")
                                  .concat(c, "&sourceId=")
                                  .concat(this.sourceId)),
                            {
                              title: "".concat(i, "到").concat(o, "汽车票"),
                              path: e,
                            }
                          );
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e = this,
                            t = this.state.utmSource,
                            i = !(!t || -1 === t.indexOf(ye)),
                            o = this.state.busParams;
                          this.setState(
                            {
                              utmSource: t,
                              isDiTuiSource: i,
                              busParams: (0, c.Z)(
                                (0, c.Z)({}, o),
                                {},
                                { utmSource: t }
                              ),
                            },
                            function () {
                              e.initPageData(),
                                e.checkDiTuiCouponModal(),
                                e.requestBusCross();
                            }
                          ),
                            i && this.getDiTuiActivityInfo();
                          try {
                            this.ubtDevTrace(175500, {
                              cid: S.ZP.cid || "",
                              utmSource: t,
                            });
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "doBusTabAction",
                        value: function () {
                          this.getCouponList();
                        },
                      },
                      {
                        key: "checkDiTuiCouponModal",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, i, o, n, s;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state.utmSource),
                                          !(!t || -1 === t.indexOf(ye)))
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 4:
                                        return (
                                          (e.prev = 4),
                                          (e.next = 7),
                                          (0, K.T8)({
                                            openId: S.ZP.openid,
                                            utmSource: t,
                                          })
                                        );
                                      case 7:
                                        (s = e.sent),
                                          console.log(
                                            "getXcxIndexCouponPromise",
                                            s
                                          ),
                                          this.setState({
                                            diTuiCouponModalVisible:
                                              1 == s.code &&
                                              0 ===
                                                (null === (i = s.data) ||
                                                void 0 === i
                                                  ? void 0
                                                  : i.type),
                                            travelEnvelopeModalInfo:
                                              (1 == s.code &&
                                                1 ===
                                                  (null === (o = s.data) ||
                                                  void 0 === o
                                                    ? void 0
                                                    : o.type) &&
                                                (null == s
                                                  ? void 0
                                                  : s.data)) ||
                                              {},
                                            travelEnvelopeModalVisible:
                                              1 == s.code &&
                                              1 ===
                                                (null === (n = s.data) ||
                                                void 0 === n
                                                  ? void 0
                                                  : n.type),
                                          }),
                                          (e.next = 16);
                                        break;
                                      case 12:
                                        (e.prev = 12),
                                          (e.t0 = e.catch(4)),
                                          console.log(e.t0),
                                          this.setState({
                                            diTuiCouponModalVisible: !1,
                                            travelEnvelopeModalInfo: {},
                                            travelEnvelopeModalVisible: !1,
                                          });
                                      case 16:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[4, 12]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "requestBusCross",
                        value: function () {
                          var e = this;
                          (0, R.LT)({ fromSource: 2 })
                            .then(function (t) {
                              if (1 === (null == t ? void 0 : t.resultCode)) {
                                var i,
                                  o =
                                    null == t ||
                                    null === (i = t.areas) ||
                                    void 0 === i
                                      ? void 0
                                      : i.find(function (e) {
                                          return (
                                            "busListStudentBanner" ===
                                            e.areaCode
                                          );
                                        });
                                if (o) {
                                  var n = JSON.parse(o.areaJson);
                                  e.setState({ studentVerifyBanner: n });
                                }
                              } else e.setState({ studentVerifyBanner: null });
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                        },
                      },
                      {
                        key: "getConfigInfo",
                        value: function () {
                          var e = this,
                            t = { ConfigKey: "xcx_bus_book" };
                          (0, y.fu)(
                            t,
                            function (t) {
                              try {
                                var i = t.ConfigInfo && t.ConfigInfo.Content;
                                e.setState({ configRule: JSON.parse(i) });
                              } catch (t) {
                                e.setState({ configRule: {} });
                              }
                            },
                            function () {}
                          ),
                            console.log(this.state.configRule);
                        },
                      },
                      {
                        key: "initPageData",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.fromStation,
                            o = t.toStation,
                            n =
                              (t.isDiTuiSource,
                              function () {
                                e.loadBusData(!0);
                              });
                          if (this.isFirstMount) {
                            var s = {};
                            return (
                              i && (s.fromStationList = [i]),
                              o && (s.toStationList = [o]),
                              this.setState(
                                { filterParams: s, busFilterParams: s },
                                n
                              ),
                              void (this.isFirstMount = !1)
                            );
                          }
                          n();
                        },
                      },
                      {
                        key: "loadBusData",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                            i = this.state,
                            o = i.tabIndex,
                            n = i.busParams,
                            s = i.isSwicthInterCity,
                            a = i.tabType,
                            r = i.isLoading;
                          r || (0, w.showLoading)({ title: "加载中" }),
                            this.setState({
                              endPositionShow: !1,
                              scrollTop: -1,
                            }),
                            this.judgeIsDTLostUserToRetireBanner(),
                            this.getListBanner().then(function (t) {
                              1 === t.code && "success" === t.message
                                ? e.setState({
                                    listBanner: t.listBanner || null,
                                  })
                                : e.setState({ listBanner: null });
                            }),
                            a
                              ? this.getPointList()
                                  .then(function (t) {
                                    var i,
                                      o =
                                        (null === (i = t.data) || void 0 === i
                                          ? void 0
                                          : i.pointProducts) || [];
                                    e.setState(
                                      {
                                        isLoading: !1,
                                        busList: e.filterBusData(o),
                                        unableBusList: e.filterUnableBusData(o),
                                        filter: t.data.filter,
                                        scrollTop: 0,
                                      },
                                      function () {
                                        var i;
                                        e.setQuickFilterData(
                                          null === (i = t.data) || void 0 === i
                                            ? void 0
                                            : i.fastFilterProduct
                                        ),
                                          e.retriveMarkRouteNum(),
                                          e.getXProductInfoWithShifts(),
                                          e.getScrollViewDomHeight();
                                      }
                                    );
                                  })
                                  .catch(function (t) {
                                    console.log(t),
                                      e.setState(
                                        {
                                          isLoading: !1,
                                          busList: [],
                                          unableBusList: [],
                                          filter: null,
                                        },
                                        function () {
                                          e.setQuickFilterData();
                                        }
                                      );
                                  })
                                  .finally(function () {
                                    (0, w.hideLoading)();
                                  })
                              : 0 === o
                              ? this.getBusList()
                                  .then(function (i) {
                                    var o, a, r, l;
                                    if (
                                      !t ||
                                      (null !== (o = i.data) &&
                                        void 0 !== o &&
                                        o.busProducts &&
                                        0 !==
                                          (null === (a = i.data) ||
                                          void 0 === a ||
                                          null === (r = a.busProducts) ||
                                          void 0 === r
                                            ? void 0
                                            : r.length)) ||
                                      null === (l = i.data) ||
                                      void 0 === l ||
                                      !l.pointBusTab
                                    )
                                      if (s) {
                                        var u;
                                        e.setState(
                                          {
                                            busParams: (0, c.Z)(
                                              (0, c.Z)({}, n),
                                              {},
                                              {
                                                fromStationList: [],
                                                toStationList: [],
                                              }
                                            ),
                                            pointBusTab:
                                              null === (u = i.data) ||
                                              void 0 === u
                                                ? void 0
                                                : u.pointBusTab,
                                            filterParams: {},
                                            tabIndex: 1,
                                            isSwicthInterCity: !1,
                                          },
                                          function () {
                                            e.loadBusData();
                                          }
                                        );
                                      } else {
                                        var d,
                                          m,
                                          h =
                                            (null === (d = i.data) ||
                                            void 0 === d
                                              ? void 0
                                              : d.busProducts) || [];
                                        e.setState(
                                          {
                                            isLoading: !1,
                                            pointBusTab:
                                              null === (m = i.data) ||
                                              void 0 === m
                                                ? void 0
                                                : m.pointBusTab,
                                            busList: e.filterBusData(h),
                                            unableBusList:
                                              e.filterUnableBusData(h),
                                            filter: i.data.filter,
                                            scrollTop: 0,
                                          },
                                          function () {
                                            var t;
                                            e.setQuickFilterData(
                                              null === (t = i.data) ||
                                                void 0 === t
                                                ? void 0
                                                : t.fastFilterProduct
                                            ),
                                              e.endPosition(
                                                e.state.busList.length,
                                                e.state.unableBusList.length
                                              ),
                                              e.retriveMarkRouteNum(),
                                              e.getXProductInfoWithShifts(),
                                              e.getScrollViewDomHeight();
                                          }
                                        );
                                      }
                                    else
                                      e.setState(
                                        {
                                          busParams: (0, c.Z)(
                                            (0, c.Z)({}, n),
                                            {},
                                            {
                                              fromStationList: [],
                                              toStationList: [],
                                            }
                                          ),
                                          pointBusTab: i.data.pointBusTab,
                                          filterParams: {},
                                          tabIndex: 1,
                                          scrollTop: 0,
                                        },
                                        function () {
                                          e.loadBusData();
                                        }
                                      );
                                  })
                                  .catch(function (t) {
                                    console.log(t),
                                      e.setState(
                                        {
                                          isLoading: !1,
                                          pointBusTab: null,
                                          busList: [],
                                          unableBusList: [],
                                          filter: null,
                                        },
                                        function () {
                                          e.setQuickFilterData(),
                                            e.endPosition(
                                              e.state.busList.length,
                                              e.state.unableBusList.length
                                            );
                                        }
                                      );
                                  })
                                  .finally(function () {
                                    (0, w.hideLoading)();
                                  })
                              : this.getPointList()
                                  .then(function (t) {
                                    var i,
                                      o =
                                        (null === (i = t.data) || void 0 === i
                                          ? void 0
                                          : i.pointProducts) || [];
                                    e.setState(
                                      {
                                        isLoading: !1,
                                        busList: e.filterBusData(o),
                                        unableBusList: e.filterUnableBusData(o),
                                        filter: t.data.filter,
                                      },
                                      function () {
                                        var i;
                                        e.setQuickFilterData(
                                          null === (i = t.data) || void 0 === i
                                            ? void 0
                                            : i.fastFilterProduct
                                        ),
                                          e.endPosition(
                                            e.state.busList.length,
                                            e.state.unableBusList.length
                                          ),
                                          e.retriveMarkRouteNum(),
                                          e.getXProductInfoWithShifts(),
                                          e.getScrollViewDomHeight();
                                      }
                                    );
                                  })
                                  .catch(function (t) {
                                    console.log(t),
                                      e.setState(
                                        {
                                          isLoading: !1,
                                          busList: [],
                                          unableBusList: [],
                                          filter: null,
                                        },
                                        function () {
                                          e.setQuickFilterData(),
                                            e.endPosition(
                                              e.state.busList.length,
                                              e.state.unableBusList.length
                                            );
                                        }
                                      );
                                  })
                                  .finally(function () {
                                    (0, w.hideLoading)();
                                  });
                        },
                      },
                      {
                        key: "filterBusData",
                        value: function (e) {
                          var t = T.default.isH5Hzbm
                              ? e.filter(function (e) {
                                  var t;
                                  return (
                                    1 ===
                                    (null == e ||
                                    null === (t = e.product) ||
                                    void 0 === t
                                      ? void 0
                                      : t.businessType)
                                  );
                                })
                              : e,
                            i =
                              t[0] &&
                              t.filter(function (e) {
                                return "optimization" == e.product.productDesc;
                              }),
                            o = t
                              .filter(function (e) {
                                return !(
                                  e.product.bookInfo &&
                                  0 === e.product.bookInfo.bookable
                                );
                              })
                              .sort(this.busSortByTime.bind(this)),
                            n = o;
                          i &&
                            (n = [].concat(
                              (0, s.Z)(
                                o.filter(function (e) {
                                  return (
                                    e.product.productDesc &&
                                    "optimization" == e.product.productDesc
                                  );
                                })
                              ),
                              (0, s.Z)(
                                o.filter(function (e) {
                                  return (
                                    !e.product.productDesc ||
                                    "optimization" !== e.product.productDesc
                                  );
                                })
                              )
                            ));
                          var a = t
                            .filter(function (e) {
                              return (
                                e.product.bookInfo &&
                                0 === e.product.bookInfo.bookable
                              );
                            })
                            .sort(this.busSortByTime.bind(this));
                          return a[0] ? n.concat([a[0]]) : n;
                        },
                      },
                      {
                        key: "filterUnableBusData",
                        value: function (e) {
                          var t = e
                            .filter(function (e) {
                              return (
                                e.product.bookInfo &&
                                0 === e.product.bookInfo.bookable
                              );
                            })
                            .sort(this.busSortByTime.bind(this));
                          return t.length > 1 ? t.slice(1, t.length) : [];
                        },
                      },
                      {
                        key: "busSortByTime",
                        value: function (e, t) {
                          var i = this.state,
                            o = i.filterByTime,
                            n = i.chooseDate,
                            s = new Date(
                              n.replace(/\-/g, "/") +
                                " " +
                                e.product.fromTime +
                                ":00"
                            ).getTime(),
                            a = new Date(
                              n.replace(/\-/g, "/") +
                                " " +
                                t.product.fromTime +
                                ":00"
                            ).getTime();
                          return o ? a - s : s - a;
                        },
                      },
                      {
                        key: "getBusCount",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : [];
                          return e.length;
                        },
                      },
                      {
                        key: "setQuickFilterData",
                        value: function () {
                          var e,
                            t,
                            i,
                            o =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            n = o.fromTimeFastFilter,
                            s = o.stationFastFilter,
                            a = [],
                            r = [];
                          if (
                            null != s &&
                            s.filterName &&
                            null != s &&
                            null !== (e = s.fastStations) &&
                            void 0 !== e &&
                            e.length
                          ) {
                            var c = "station";
                            a.push({
                              filterName: null == s ? void 0 : s.filterName,
                              filterType: c,
                              listData: null == s ? void 0 : s.fastStations,
                            }),
                              r.push({
                                filterType: c,
                                filterName: null == s ? void 0 : s.filterName,
                              });
                          }
                          if (
                            null != n &&
                            n.filterName &&
                            null != n &&
                            null !== (t = n.fastFromTimes) &&
                            void 0 !== t &&
                            t.length
                          ) {
                            var l = "time";
                            a.push({
                              filterName: null == n ? void 0 : n.filterName,
                              filterType: l,
                              listData: null == n ? void 0 : n.fastFromTimes,
                            }),
                              r.push({
                                filterType: l,
                                filterName: null == n ? void 0 : n.filterName,
                              });
                          }
                          return (
                            this.setState({
                              quickFilterFormatData: { tabs: r, filterData: a },
                              quickFilterTab:
                                this.state.quickFilterTab ||
                                (null === (i = r[0]) || void 0 === i
                                  ? void 0
                                  : i.filterType),
                            }),
                            a
                          );
                        },
                      },
                      {
                        key: "onClickShowMoreUnableBus",
                        value: function () {
                          this.setState({ showUnableBusList: !0 });
                        },
                      },
                      {
                        key: "onClickQuickFilter",
                        value: function (e) {
                          var t,
                            i,
                            o,
                            n,
                            a,
                            r,
                            c = this,
                            l = e.type,
                            u = e.item,
                            d = e.isClearItem,
                            m = this.state,
                            h = m.busParams,
                            f = m.tabIndex,
                            p = m.busFilterParams,
                            b = m.pointFilterParams,
                            v = m.filterParams;
                          if ("fromStationList" === l)
                            (h.fromStationList = d
                              ? [].concat(
                                  (0, s.Z)(
                                    h.fromStationList.slice(
                                      0,
                                      h.fromStationList.indexOf(u)
                                    )
                                  ),
                                  (0, s.Z)(
                                    h.fromStationList.slice(
                                      h.fromStationList.indexOf(u) + 1
                                    )
                                  )
                                )
                              : [].concat((0, s.Z)(h.fromStationList), [u])),
                              (v.fromStationList = d
                                ? [].concat(
                                    (0, s.Z)(
                                      null === (o = v.fromStationList) ||
                                        void 0 === o
                                        ? void 0
                                        : o.slice(
                                            0,
                                            null === (n = v.fromStationList) ||
                                              void 0 === n
                                              ? void 0
                                              : n.indexOf(u)
                                          )
                                    ),
                                    (0, s.Z)(
                                      null === (a = v.fromStationList) ||
                                        void 0 === a
                                        ? void 0
                                        : a.slice(
                                            (null === (r = v.fromStationList) ||
                                            void 0 === r
                                              ? void 0
                                              : r.indexOf(u)) + 1
                                          )
                                    )
                                  )
                                : [].concat((0, s.Z)(v.fromStationList || []), [
                                    u,
                                  ]));
                          else if ("fromTimeList" === l) {
                            var g,
                              S,
                              T,
                              k,
                              w,
                              y,
                              C = u.code,
                              B =
                                null === (g = h.fromTimeList) || void 0 === g
                                  ? void 0
                                  : g.indexOf(C),
                              N =
                                null === (S = v.fromTimeList) || void 0 === S
                                  ? void 0
                                  : S.indexOf(C);
                            (h.fromTimeList = d
                              ? [].concat(
                                  (0, s.Z)(
                                    (null === (T = h.fromTimeList) ||
                                    void 0 === T
                                      ? void 0
                                      : T.slice(0, B)) || []
                                  ),
                                  (0, s.Z)(
                                    (null === (k = h.fromTimeList) ||
                                    void 0 === k
                                      ? void 0
                                      : k.slice(B + 1)) || []
                                  )
                                )
                              : [C]),
                              (v.fromTimeList = d
                                ? [].concat(
                                    (0, s.Z)(
                                      (null === (w = v.fromTimeList) ||
                                      void 0 === w
                                        ? void 0
                                        : w.slice(0, N)) || []
                                    ),
                                    (0, s.Z)(
                                      (null === (y = v.fromTimeList) ||
                                      void 0 === y
                                        ? void 0
                                        : y.slice(N + 1)) || []
                                    )
                                  )
                                : [C]),
                              console.log("desc=", h, v);
                          }
                          console.log("filterParams", h, v),
                            this.setState(
                              {
                                busParams: h,
                                filterParams: v,
                                busFilterParams: 0 === f ? v : p,
                                pointFilterParams: 0 === f ? b : v,
                                showQuickTabInTop:
                                  !(
                                    null == h ||
                                    null === (t = h.fromStationList) ||
                                    void 0 === t ||
                                    !t.length
                                  ) +
                                    !(
                                      null == h ||
                                      null === (i = h.fromTimeList) ||
                                      void 0 === i ||
                                      !i.length
                                    ) >
                                  0,
                              },
                              function () {
                                c.loadBusData();
                              }
                            );
                        },
                      },
                      {
                        key: "onClearFilter",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.busParams,
                            o = t.tabIndex,
                            n = t.busFilterParams,
                            s = t.pointFilterParams,
                            a = {
                              fromStationList: [],
                              toStationList: [],
                              fromTimeList: [],
                              upgradeServiceList: [],
                            };
                          this.setState(
                            {
                              busParams: (0, c.Z)((0, c.Z)({}, i), a),
                              filterParams: a,
                              busFilterParams: 0 === o ? a : n,
                              pointFilterParams: 0 === o ? s : a,
                              showQuickTabInTop: !1,
                            },
                            function () {
                              e.loadBusData();
                            }
                          );
                        },
                      },
                      {
                        key: "getListBanner",
                        value: function () {
                          var e = this.state.busParams;
                          return new Promise(function (t, i) {
                            (0, K.ys)(e)
                              .then(function (e) {
                                t(e);
                              })
                              .catch(function (e) {
                                i(e);
                              });
                          });
                        },
                      },
                      {
                        key: "getBusList",
                        value: function () {
                          var e = this,
                            t = this.state.busParams;
                          return new Promise(function (i, o) {
                            (0, K.jw)(t)
                              .then(function (t) {
                                var o, n;
                                e.setState({
                                  brandInfo:
                                    (null === (o = t.data) || void 0 === o
                                      ? void 0
                                      : o.officialInfo) || null,
                                  memberDiscountInfo:
                                    null === (n = t.data) || void 0 === n
                                      ? void 0
                                      : n.memberDiscountInfo,
                                }),
                                  i(t);
                              })
                              .catch(function (e) {
                                o(e);
                              });
                          });
                        },
                      },
                      {
                        key: "getPointList",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.busParams,
                            o = t.tabType,
                            n = i;
                          return (
                            o &&
                              (n = (0, c.Z)(
                                (0, c.Z)({}, i),
                                {},
                                { busMixType: 4 }
                              )),
                            new Promise(function (t, i) {
                              (0, K.N2)(n)
                                .then(function (i) {
                                  var o;
                                  e.setState({
                                    memberDiscountInfo:
                                      null === (o = i.data) || void 0 === o
                                        ? void 0
                                        : o.memberDiscountInfo,
                                  }),
                                    t(i);
                                })
                                .catch(function (e) {
                                  i(e);
                                });
                            })
                          );
                        },
                      },
                      {
                        key: "onClickChangeDate",
                        value: function (e) {
                          var t = this,
                            i = this.state.busParams;
                          this.setState(
                            {
                              chooseDate: e,
                              showUnableBusList: !1,
                              busParams: (0, c.Z)(
                                (0, c.Z)({}, i),
                                {},
                                { fromDate: e }
                              ),
                              showNum: 20,
                              scrollTop: -1,
                              currentXProductBusIndex: -1,
                            },
                            function () {
                              t.setState({ scrollTop: 0 }), t.loadBusData();
                            }
                          );
                        },
                      },
                      {
                        key: "doBusTraceInfo",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "";
                          this.ubtTrace("BUS_Bus_C_click", {
                            pageId: this.pageId,
                            type: T.default.jetpack || "zx",
                            typeSnd: e,
                            utmSource: this.state.utmSource,
                            comment: t,
                          });
                        },
                      },
                      {
                        key: "doBusNewTraceInfoV2",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, a.Z)().mark(function e() {
                              var t,
                                i,
                                o,
                                n,
                                s,
                                r,
                                l,
                                u = arguments;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            u.length > 0 && void 0 !== u[0]
                                              ? u[0]
                                              : {}),
                                          (i =
                                            u.length > 1 && void 0 !== u[1]
                                              ? u[1]
                                              : 0),
                                          (e.prev = 2),
                                          (e.next = 5),
                                          (0, B.c$)(
                                            this.isNeedLoadUserLabelInfo
                                          )
                                        );
                                      case 5:
                                        (o = e.sent),
                                          (this.isNeedLoadUserLabelInfo = !1),
                                          (n = z.Z.getUnionData()),
                                          (s = this.state.utmSource),
                                          (r = ""),
                                          (e.t0 = i),
                                          (e.next =
                                            0 === e.t0
                                              ? 13
                                              : 1 === e.t0
                                              ? 15
                                              : 2 === e.t0
                                              ? 17
                                              : 19);
                                        break;
                                      case 13:
                                        return (
                                          (r = "p_bus_z_10650059984"),
                                          e.abrupt("break", 20)
                                        );
                                      case 15:
                                        return (
                                          (r = "s_bus_z_10650059984"),
                                          e.abrupt("break", 20)
                                        );
                                      case 17:
                                        return (
                                          (r = "c_bus_z_10650059984"),
                                          e.abrupt("break", 20)
                                        );
                                      case 19:
                                        return e.abrupt("break", 20);
                                      case 20:
                                        (l = (0, c.Z)(
                                          (0, c.Z)(
                                            {
                                              utmSource: s || "null",
                                              sourceId:
                                                this.sourceId ||
                                                "Bus_Null_Null",
                                              pageId: "10650059984",
                                              client: (0, B.y3)(),
                                              allianceId: n.aid || "null",
                                              allianceSid: n.sid || "null",
                                            },
                                            o
                                          ),
                                          t
                                        )),
                                          "c_bus_z_10650059984" == r &&
                                            (l.typeSndAttr = "null"),
                                          this.ubtTrace(r, l),
                                          (e.next = 28);
                                        break;
                                      case 25:
                                        (e.prev = 25),
                                          (e.t1 = e.catch(2)),
                                          console.log(e.t1);
                                      case 28:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 25]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onClickBusItem",
                        value: function (e) {
                          var t = this,
                            i =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1];
                          console.log("onClickBusItem", e);
                          var o = e.product;
                          this.setState(
                            {
                              selectedBus: (0, c.Z)(
                                (0, c.Z)({}, e),
                                {},
                                {
                                  fromStation: e.product.fromStation,
                                  toStation: e.product.toStation,
                                  fromTime: e.product.fromTime,
                                }
                              ),
                              departureType: "normal",
                            },
                            (0, r.Z)(
                              (0, a.Z)().mark(function e() {
                                return (0, a.Z)().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          !(
                                            o.fromStations.length > 1 ||
                                            o.toStations.length > 1
                                          )
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return (
                                          (e.next = 3),
                                          t.checkBusStationOptions()
                                        );
                                      case 3:
                                        if (3 !== o.fromTimeType) {
                                          e.next = 6;
                                          break;
                                        }
                                        return (
                                          (e.next = 6), t.selectBusStationTime()
                                        );
                                      case 6:
                                        t.goToBook(i);
                                      case 7:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )
                          );
                        },
                      },
                      {
                        key: "selectBusStationTime",
                        value: function () {
                          var e = this;
                          return new Promise(function (t, i) {
                            var o = e.state.selectedBus;
                            e.setState(
                              {
                                showTimePicker: !0,
                                timePickerOptions: {
                                  min: o.product.selectableFromTime,
                                  max: o.product.lastFromTime,
                                  minStep: o.product.customerIntervalTime || 5,
                                },
                              },
                              function () {
                                (e.selecBusTimeReslove = t),
                                  (e.selecBusTimeReject = i);
                              }
                            );
                          });
                        },
                      },
                      {
                        key: "onConfirmFromTime",
                        value: function (e) {
                          var t = this;
                          this.setState(
                            {
                              showTimePicker: !1,
                              selectedBus: (0, c.Z)(
                                (0, c.Z)({}, this.state.selectedBus),
                                {},
                                { fromTime: e }
                              ),
                              departureType: "anyTimePoint",
                            },
                            function () {
                              t.selecBusTimeReslove && t.selecBusTimeReslove();
                            }
                          );
                        },
                      },
                      {
                        key: "hideTimePickerLayer",
                        value: function () {
                          var e = this;
                          this.setState(
                            { showTimePicker: !1, timePickerOptions: null },
                            function () {
                              e.selecBusStationsReject &&
                                e.selecBusStationsReject();
                            }
                          );
                        },
                      },
                      {
                        key: "checkBusStationOptions",
                        value: function () {
                          var e = this;
                          return new Promise(function (t, i) {
                            var o = e.state.selectedBus;
                            e.setState(
                              {
                                selectStationModalVisible: !0,
                                selectStationModalInfo: {
                                  fromStations: o.product.fromStations,
                                  toStations: o.product.toStations,
                                  price: o.product.showPrice,
                                  matrixPrices: o.product.matrixPrices,
                                },
                              },
                              function () {
                                (e.selecBusStationsReslove = t),
                                  (e.selecBusStationsReject = i);
                              }
                            );
                          });
                        },
                      },
                      {
                        key: "onClickStationModalConfirm",
                        value: function (e, t) {
                          var i = this,
                            o = this.state.selectedBus;
                          this.setState(
                            {
                              selectedBus: (0, c.Z)(
                                (0, c.Z)({}, o),
                                {},
                                {
                                  fromStation: e || o.product.fromStation,
                                  toStation: t || o.product.toStation,
                                }
                              ),
                              selectStationModalVisible: !1,
                            },
                            function () {
                              i.selecBusStationsReslove &&
                                i.selecBusStationsReslove();
                            }
                          );
                        },
                      },
                      {
                        key: "onClickStationModalClose",
                        value: function () {
                          var e = this;
                          this.setState(
                            { selectStationModalVisible: !1 },
                            function () {
                              e.selecBusStationsReject &&
                                e.selecBusStationsReject();
                            }
                          );
                        },
                      },
                      {
                        key: "getDiTuiActivityInfo",
                        value: function () {
                          var e = this;
                          (0, R.j)({
                            scene: "reductionList",
                            fromCity: this.state.fromCity,
                            fromStation: this.state.fromStation,
                          })
                            .then(function (t) {
                              t.data &&
                                e.setState({ diTuiActivityInfo: t.data });
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                        },
                      },
                      {
                        key: "goToBook",
                        value: function (e) {
                          var t = this;
                          if (!S.ZP.isLogin)
                            return S.ZP.doLogin().then(function () {
                              t.handleLoginAfter(e);
                            });
                          var i = this.state,
                            o = i.selectedBus;
                          i.isDiTuiSource && 1 === o.product.businessType
                            ? this.routeToBook(e)
                            : 1 === o.product.businessType
                            ? this.routeToBookX()
                            : this.routeToTourBookX(e);
                        },
                      },
                      {
                        key: "handleLoginAfter",
                        value: function (e) {
                          var t = this,
                            i = this.state,
                            o = i.currentXProductBusIndex,
                            n = i.xProductInfoStore,
                            s = i.busList,
                            a = i.utmSource;
                          if (e && o >= 0 && n) {
                            var r,
                              c = n[o] || {};
                            if (
                              c.memberShipTitle &&
                              (null === (r = c.memberShipBooking) ||
                              void 0 === r
                                ? void 0
                                : r.length) > 0
                            ) {
                              var l,
                                u =
                                  (null ===
                                    (l = s.filter(function (e) {
                                      return !(
                                        e.product.bookInfo &&
                                        0 === e.product.bookInfo.bookable
                                      );
                                    })[o]) || void 0 === l
                                    ? void 0
                                    : l.product) || {};
                              console.log("ccc1", s), console.log("ccc1", u);
                              var d = O.c.getXProductParams(u, {
                                fromTime: u.fromTime || u.lastFromTime || "",
                                utmSource: a,
                                productLine: 1 === u.businessType ? 1 : 3,
                              });
                              console.log("ccc1", d),
                                (0, K.gX)(d)
                                  .then(function (e) {
                                    var i;
                                    1 === e.code &&
                                      (null !== (i = e.data) &&
                                      void 0 !== i &&
                                      i.isVip
                                        ? ((0, w.showToast)(
                                            "您已经是智行会员了！"
                                          ),
                                          setTimeout(function () {
                                            t.goToBook(!1);
                                          }, 2e3))
                                        : t.goToBook(!0));
                                  })
                                  .catch(function (e) {
                                    console.log(e);
                                  });
                            } else this.goToBook(!0);
                          } else this.goToBook(!1);
                        },
                      },
                      {
                        key: "routeToBook",
                        value: function (e) {
                          var t,
                            i = this.state,
                            o = i.selectedBus,
                            n = i.chooseDate,
                            s = i.utmSource,
                            a = i.fromCity,
                            r = i.toCity,
                            l = i.departureType,
                            u = i.currentXProductBusIndex,
                            d = i.xProductInfoStore,
                            m = o.product,
                            h = [];
                          e &&
                            u >= 0 &&
                            d &&
                            (h =
                              (null === (t = d[u]) || void 0 === t
                                ? void 0
                                : t.xProductInfoList) || []);
                          var f = {
                            fromCity: m.fromCity,
                            toCity: m.toCity,
                            busNumber: m.busNumber,
                            fromStation: o.fromStation,
                            toStation: o.toStation,
                            fromTime: o.fromTime || m.lastFromTime,
                            date: n,
                            fromDate: n,
                            fullPrice: m.showPrice,
                            isNeedBusInfo: !0,
                            utmSource: s,
                            symbol: m.symbol,
                            abTest: [
                              { name: "160818_crm_nwpkg", version: "B" },
                            ],
                            productLine: 1,
                            tabType: this.state.tabType,
                            defaultSelectedXProductList: JSON.stringify(h),
                            sourceId: this.sourceId,
                            dataToken: m.dataToken,
                          };
                          v().navigateTo({
                            url:
                              "/pages/bus/newbook/book?" +
                              O.c.convertObjToUrl(
                                (0, c.Z)(
                                  (0, c.Z)({}, f),
                                  {},
                                  {
                                    departureType: l,
                                    titleFromCity: a,
                                    titleToCity: r,
                                  }
                                )
                              ),
                          });
                        },
                      },
                      {
                        key: "routeToTourBookX",
                        value: function (e) {
                          var t = this.state,
                            i = t.selectedBus,
                            o = t.chooseDate,
                            n = t.utmSource,
                            s = t.fromCity,
                            a = t.toCity,
                            r = t.departureType,
                            l = t.currentXProductBusIndex,
                            u = t.xProductInfoStore,
                            d = i.product || {};
                          console.log("product----------", d);
                          var m,
                            h = [];
                          e &&
                            l >= 0 &&
                            u &&
                            (h =
                              (null === (m = u[l]) || void 0 === m
                                ? void 0
                                : m.xProductInfoList) || []);
                          var f = {
                            fromCity: d.fromCity,
                            toCity: d.toCity,
                            fromStation: i.fromStation,
                            toStation: i.toStation,
                            fromTime: i.fromTime || d.lastFromTime,
                            busNumber: d.busNumber,
                            date: o,
                            fromDate: o,
                            isNeedBusInfo: !0,
                            fullPrice: d.showPrice,
                            activityType: 0,
                            utmSource: n,
                            symbol: d.busNumber,
                            abTest: [
                              { name: "160818_crm_nwpkg", version: "B" },
                            ],
                            productLine: 3,
                            tabType: this.state.tabType,
                            defaultSelectedXProductList: JSON.stringify(h),
                            sourceId: this.sourceId,
                            dataToken: d.dataToken,
                          };
                          if (d && d.isJumpX)
                            v().navigateTo({
                              url:
                                "/pages/bus/newbook/book?" +
                                O.c.convertObjToUrl(
                                  (0, c.Z)(
                                    (0, c.Z)({}, f),
                                    {},
                                    {
                                      departureType: r,
                                      titleFromCity: s,
                                      titleToCity: a,
                                    }
                                  )
                                ),
                            });
                          else {
                            var p = Object.assign({}, f, {
                              customFromTime: i.fromTime,
                            });
                            v().navigateTo({
                              url:
                                "/pages/bus/newbook/book?" +
                                O.c.convertObjToUrl(
                                  (0, c.Z)(
                                    (0, c.Z)({}, p),
                                    {},
                                    {
                                      departureType: r,
                                      titleFromCity: s,
                                      titleToCity: a,
                                    }
                                  )
                                ),
                            });
                          }
                        },
                      },
                      {
                        key: "routeToBookX",
                        value: function () {
                          var e = this.state,
                            t = e.selectedBus,
                            i = e.chooseDate,
                            o = e.utmSource,
                            n = e.fromCity,
                            s = e.toCity,
                            a = e.departureType,
                            r = t.product,
                            l = {
                              fromCity: r.fromCity,
                              toCity: r.toCity,
                              fromStation: t.fromStation,
                              toStation: t.toStation,
                              fromTime: t.fromTime || r.lastFromTime,
                              busNumber: r.busNumber,
                              date: i,
                              fromDate: i,
                              isNeedBusInfo: !0,
                              fullPrice: r.showPrice,
                              activityType: 0,
                              utmSource: o,
                              symbol: r.symbol,
                              abTest: [
                                { name: "160818_crm_nwpkg", version: "B" },
                              ],
                              productLine: 1,
                              tabType: this.state.tabType,
                              sourceId: this.sourceId,
                              dataToken: r.dataToken,
                            };
                          v().navigateTo({
                            url:
                              "/pages/bus/newbook/book?" +
                              O.c.convertObjToUrl(
                                (0, c.Z)(
                                  (0, c.Z)({}, l),
                                  {},
                                  {
                                    departureType: a,
                                    titleFromCity: n,
                                    titleToCity: s,
                                  }
                                )
                              ),
                          });
                        },
                      },
                      {
                        key: "onClickTab",
                        value: function (e) {
                          var t = this,
                            i = this.state,
                            o = i.tabIndex,
                            n = i.busFilterParams,
                            s = i.pointFilterParams,
                            a = i.busParams;
                          if (o !== e) {
                            0 == e
                              ? this.doBusTraceInfo("busTab", "汽车票tab")
                              : this.doBusTraceInfo(
                                  "pointBusTab",
                                  "跨城出行tab"
                                );
                            var r = 0 === e ? n : s;
                            this.setState(
                              {
                                tabIndex: e,
                                filterParams: r,
                                filterByTime: !1,
                                memberDiscountInfo: null,
                                busParams: (0, c.Z)(
                                  (0, c.Z)({}, a),
                                  {},
                                  {
                                    fromStationList: r.fromStationList,
                                    toStationList: r.toStationList,
                                    fromTimeList: r.fromTimeList,
                                    upgradeServiceList: r.upgradeServiceList,
                                  }
                                ),
                              },
                              function () {
                                t.loadBusData();
                              }
                            );
                          }
                        },
                      },
                      {
                        key: "onClickShowFilter",
                        value: function () {
                          this.doBusTraceInfo("filter", "筛选条件");
                          var e = this.state,
                            t = e.busList,
                            i = void 0 === t ? [] : t,
                            o = e.unableBusList,
                            n = void 0 === o ? [] : o;
                          this.setState({
                            filterModalVisible: !0,
                            busCount: this.getBusCount(i.concat(n)),
                          });
                        },
                      },
                      {
                        key: "onClickFilterClose",
                        value: function () {
                          this.setState({ filterModalVisible: !1 });
                        },
                      },
                      {
                        key: "onClickFilterConfirm",
                        value: function (e) {
                          var t = this,
                            i =
                              e.fromStationList.length +
                              e.toStationList.length +
                              e.fromTimeList.length +
                              e.upgradeServiceList.length,
                            o = this.state,
                            n = o.busParams,
                            s = o.tabIndex,
                            a = o.busFilterParams,
                            r = o.pointFilterParams;
                          this.setState(
                            {
                              filterModalVisible: !1,
                              filterParams: e,
                              busFilterParams: 0 === s ? e : a,
                              pointFilterParams: 0 === s ? r : e,
                              busParams: (0, c.Z)(
                                (0, c.Z)({}, n),
                                {},
                                {
                                  fromStationList: e.fromStationList,
                                  toStationList: e.toStationList,
                                  fromTimeList: e.fromTimeList,
                                  upgradeServiceList: e.upgradeServiceList,
                                }
                              ),
                              showQuickTabInTop:
                                0 !== i && this.state.showQuickTabInTop,
                            },
                            function () {
                              t.loadBusData();
                            }
                          );
                        },
                      },
                      {
                        key: "onRefreshCount",
                        value: function (e) {
                          var t = this,
                            i = this.state,
                            o = i.busParams,
                            n = i.tabIndex,
                            s = i.tabType,
                            a = (0, c.Z)(
                              (0, c.Z)({}, o),
                              {},
                              {
                                fromStationList: e.fromStationList,
                                toStationList: e.toStationList,
                                fromTimeList: e.fromTimeList,
                                upgradeServiceList: e.upgradeServiceList,
                              }
                            );
                          return s
                            ? (0, K.N2)(
                                (0, c.Z)((0, c.Z)({}, a), {}, { busMixType: 4 })
                              )
                                .then(function (e) {
                                  return (
                                    t.setState({
                                      busCount: t.getBusCount(
                                        e.data.pointProducts || []
                                      ),
                                    }),
                                    { newParams: a, filter: e.data.filter }
                                  );
                                })
                                .catch(function (e) {
                                  console.log(e);
                                })
                            : 0 === n
                            ? (0, K.jw)(a)
                                .then(function (e) {
                                  return (
                                    t.setState({
                                      busCount: t.getBusCount(
                                        e.data.busProducts || []
                                      ),
                                    }),
                                    { newParams: a, filter: e.data.filter }
                                  );
                                })
                                .catch(function (e) {
                                  console.log(e);
                                })
                            : (0, K.N2)(a)
                                .then(function (e) {
                                  return (
                                    t.setState({
                                      busCount: t.getBusCount(
                                        e.data.pointProducts || []
                                      ),
                                    }),
                                    { newParams: a, filter: e.data.filter }
                                  );
                                })
                                .catch(function (e) {
                                  console.log(e);
                                });
                        },
                      },
                      {
                        key: "onClickFilterTime",
                        value: function () {
                          var e = this;
                          this.doBusTraceInfo("sortByTime", "出发早-晚");
                          var t = this.state,
                            i = t.filterByTime,
                            o = t.busList;
                          this.setState({ filterByTime: !i }, function () {
                            e.setState({ busList: e.filterBusData(o) });
                          });
                        },
                      },
                      {
                        key: "endPosition",
                        value: function (e, t) {
                          e && e <= 3 && 0 === t
                            ? this.setState({ endPositionShow: !0 })
                            : this.setState({ endPositionShow: !1 });
                        },
                      },
                      {
                        key: "bannerClick",
                        value: function (e) {
                          v().reLaunch({ url: e });
                        },
                      },
                      {
                        key: "handleTitle",
                        value: function (e) {
                          if (e && e.title && -1 !== e.title.indexOf("|"))
                            return (0, x.BX)(g.View, {
                              className: "title-box",
                              children: [
                                (0, x.tZ)(g.Text, {
                                  className: "title",
                                  children: e.title.split("|")[0],
                                }),
                                (0, x.tZ)(g.Text, {
                                  className: "title-color",
                                  children: e.title.split("|")[1],
                                }),
                              ],
                            });
                        },
                      },
                      {
                        key: "onClickDiTuiModalConfirm",
                        value: function () {
                          this.setState({ diTuiCouponModalVisible: !1 });
                        },
                      },
                      {
                        key: "preCheckSubscribeInfo",
                        value: function () {
                          var e = this;
                          T.default.isWechat &&
                            "dt" === T.default.jetpack &&
                            N.Z.getSubscribeMsgInfo(Te).then(
                              function (t) {
                                console.log("subscribeMsg templateId info", t);
                                var i = t || {},
                                  o = i.mainSwitch,
                                  n = void 0 !== o && o,
                                  s = i.unKnownList,
                                  a = void 0 === s ? [] : s;
                                n
                                  ? e.setState({
                                      shouldSubscribe: a && a.length > 0,
                                      templateIds: a,
                                    })
                                  : e.setState({
                                      shouldSubscribe: !0,
                                      templateIds: Te,
                                    });
                              },
                              function (e) {
                                console.log("subscribe error ".concat(e));
                              }
                            );
                        },
                      },
                      {
                        key: "checkSubscribeMsgShow",
                        value: function () {
                          var e = this.state,
                            t = e.shouldSubscribe,
                            i = e.templateIds;
                          t &&
                            N.Z.executeSubscribeMsg(i).then(
                              function () {
                                (0, w.showToast)("订阅成功~");
                              },
                              function (e) {
                                console.log("subscribeMsg error", e);
                              }
                            );
                        },
                      },
                      {
                        key: "getCouponList",
                        value: function () {
                          var e = this;
                          (0, K.Ed)({
                            fromPage: "list",
                            openId: S.ZP.openid || "",
                          }).then(function (t) {
                            1 == t.code &&
                            t.data &&
                            ((t.data.indexCouponList &&
                              t.data.indexCouponList[0]) ||
                              t.data.couponTips)
                              ? e.setState({ couponInfo: t.data })
                              : e.setState({ couponInfo: {} });
                          });
                        },
                      },
                      {
                        key: "handleCouponIconClick",
                        value: function () {
                          var e = this.state.couponInfo;
                          e.isReceive
                            ? this.setState({
                                isCouponBarShow: !this.state.isCouponBarShow,
                              })
                            : e.indexCouponList &&
                              Array.isArray(e.indexCouponList) &&
                              e.indexCouponList[0] &&
                              this.setState({
                                busCouponModalInfo: e,
                                isBusCouponModalShow: !0,
                              });
                        },
                      },
                      {
                        key: "handleBusCouponModalClose",
                        value: function () {
                          this.setState({ isBusCouponModalShow: !1 });
                        },
                      },
                      {
                        key: "handleBusCouponModalConfirm",
                        value: function () {
                          var e = this;
                          if (this.state.busCouponModalInfo.isReceive)
                            return this.setState({ isBusCouponModalShow: !1 });
                          this.state.isLogin
                            ? (0, K.Ro)({
                                fromPage: "list",
                                openId: S.ZP.openid,
                              }).then(function (t) {
                                e.setState(
                                  { isBusCouponModalShow: !1 },
                                  function () {
                                    e.getCouponList(),
                                      1 == t.code
                                        ? v().showToast({
                                            title: "领取成功",
                                            icon: "success",
                                            duration: 1500,
                                          })
                                        : v().showToast({
                                            title: "领取失败，请重试~",
                                            icon: "none",
                                            duration: 1500,
                                          });
                                  }
                                );
                              })
                            : this.doLogin(function () {
                                e.getCouponList();
                              });
                        },
                      },
                      {
                        key: "doLogin",
                        value: function (e) {
                          var t = this;
                          S.ZP.doLogin()
                            .then(function () {
                              t.setState({ isLogin: !0 }), e && e();
                            })
                            .catch(function () {
                              v().showToast({
                                title: "取消登录",
                                icon: "none",
                                duration: 1500,
                              });
                            });
                        },
                      },
                      {
                        key: "onToggleTravelEnvelopeModal",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, a.Z)().mark(function e() {
                              var t,
                                i = this;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          this.getReceiveModalInfo("refuse")
                                        );
                                      case 3:
                                        (t = e.sent),
                                          Object.keys(t).length > 0
                                            ? this.setState(
                                                {
                                                  receiveModalInfo: {
                                                    data: t,
                                                    confirmBtnText: "立即领取",
                                                    funcConfirm:
                                                      this.onConfirmTravelEnvelopeModal.bind(
                                                        this,
                                                        "secReceive"
                                                      ),
                                                    funcCancel:
                                                      this.onCloseReceiveModal.bind(
                                                        this
                                                      ),
                                                  },
                                                  travelEnvelopeModalVisible:
                                                    !1,
                                                },
                                                function () {
                                                  i.setState({
                                                    receiveModalVisible: !0,
                                                  });
                                                }
                                              )
                                            : this.setState(
                                                {
                                                  travelEnvelopeModalVisible:
                                                    !1,
                                                },
                                                function () {
                                                  v().showToast({
                                                    title:
                                                      "领取失败，请稍后再试",
                                                    icon: "none",
                                                    duration: 1500,
                                                  });
                                                }
                                              ),
                                          (e.next = 11);
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(0)),
                                          this.setState(
                                            { travelEnvelopeModalVisible: !1 },
                                            function () {
                                              v().showToast({
                                                title: "领取失败，请稍后再试",
                                                icon: "none",
                                                duration: 1500,
                                              });
                                            }
                                          ),
                                          console.log(e.t0);
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 7]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onConfirmTravelEnvelopeModal",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, a.Z)().mark(function e() {
                              var t,
                                i,
                                o = this,
                                n = arguments;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            n.length > 0 && void 0 !== n[0]
                                              ? n[0]
                                              : "imeReceive"),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          this.getReceiveModalInfo("receive")
                                        );
                                      case 4:
                                        (i = e.sent),
                                          Object.keys(i).length > 0
                                            ? this.setState(
                                                (0, f.Z)(
                                                  {
                                                    receiveModalInfo: {
                                                      data: i,
                                                      confirmBtnText:
                                                        "立刻下载",
                                                      funcConfirm:
                                                        this.onConfirmReceiveModal.bind(
                                                          this
                                                        ),
                                                      funcCancel:
                                                        this.onCloseReceiveModal.bind(
                                                          this
                                                        ),
                                                    },
                                                  },
                                                  "imeReceive" == t
                                                    ? "travelEnvelopeModalVisible"
                                                    : "receiveModalVisible",
                                                  !1
                                                ),
                                                function () {
                                                  o.setState({
                                                    receiveModalVisible: !0,
                                                  });
                                                }
                                              )
                                            : this.setState(
                                                {
                                                  travelEnvelopeModalVisible:
                                                    !1,
                                                },
                                                function () {
                                                  v().showToast({
                                                    title:
                                                      "领取失败，请稍后再试",
                                                    icon: "none",
                                                    duration: 1500,
                                                  });
                                                }
                                              ),
                                          (e.next = 12);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(1)),
                                          this.setState(
                                            { travelEnvelopeModalVisible: !1 },
                                            function () {
                                              v().showToast({
                                                title: "领取失败，请稍后再试",
                                                icon: "none",
                                                duration: 1500,
                                              });
                                            }
                                          ),
                                          console.log(e.t0);
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 8]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getReceiveModalInfo",
                        value: function (e) {
                          var t = this;
                          return (0, K.EQ)({
                            openid: S.ZP.openid || "",
                            type: e,
                          })
                            .then(function (e) {
                              return 1 == e.code &&
                                e.data &&
                                Object.keys(e.data).length > 0
                                ? e.data
                                : {};
                            })
                            .catch(function (e) {
                              t.setState(
                                { travelEnvelopeModalVisible: !1 },
                                function () {
                                  v().showToast({
                                    title: "领取失败，请稍后再试",
                                    icon: "none",
                                    duration: 1500,
                                  });
                                }
                              ),
                                console.log(e);
                            });
                        },
                      },
                      {
                        key: "judgeIsDTLostUserToRetireBanner",
                        value: function () {
                          var e = this;
                          if (
                            !this.state.tabType ||
                            "bus" === this.state.tabType
                          )
                            return (0, K.jY)({
                              utmSource: this.state.utmSource,
                            })
                              .then(function (t) {
                                var i;
                                1 === t.code &&
                                  e.setState({
                                    isShowDTRetrieveBanner: !(
                                      null === (i = t.info) ||
                                      void 0 === i ||
                                      !i.rePurchaseFlag
                                    ),
                                  });
                              })
                              .catch(function () {
                                e.setState({ isShowDTRetrieveBanner: !1 });
                              });
                        },
                      },
                      {
                        key: "judgeIsShowDTRetireModal",
                        value: function () {
                          var e = this;
                          if (
                            !this.state.tabType ||
                            "bus" === this.state.tabType
                          )
                            return (0, K._7)({
                              utmSource: this.state.utmSource,
                            })
                              .then(function (t) {
                                1 === t.code &&
                                  e.setState({
                                    isShowDTRetrieveModal: !!t.data,
                                    dTRetrieveModalInfo: t.data,
                                  });
                              })
                              .catch(function () {
                                e.setState({ isShowDTRetrieveModal: !1 });
                              });
                        },
                      },
                      {
                        key: "onReceiveDTRetrieveCoupon",
                        value: function () {
                          var e = this;
                          return (0, K.Ro)({
                            fromPage: "xcx_dialog",
                            openId: S.ZP.openid,
                            receiveFlag: !1,
                          })
                            .then(function (e) {
                              1 == e.code
                                ? v().showToast({
                                    title: "领取成功",
                                    icon: "none",
                                    duration: 1500,
                                  })
                                : v().showToast({
                                    title: "领取失败",
                                    icon: "none",
                                    duration: 1500,
                                  });
                            })
                            .catch(function () {
                              v().showToast({
                                title: "领取失败",
                                icon: "none",
                                duration: 1500,
                              });
                            })
                            .finally(function () {
                              e.onCloseDTRetrieveModal();
                            });
                        },
                      },
                      {
                        key: "onCloseDTRetrieveModal",
                        value: function () {
                          this.setState({ isShowDTRetrieveModal: !1 });
                        },
                      },
                      {
                        key: "handleTimeChange",
                        value: function (e) {
                          this.state.travelEnvelopeModalVisible &&
                            this.setState({ envelopeModalTimeLeft: e });
                        },
                      },
                      {
                        key: "onCloseReceiveModal",
                        value: function () {
                          this.setState({ receiveModalVisible: !1 });
                        },
                      },
                      {
                        key: "onConfirmReceiveModal",
                        value: function () {
                          this.setState(
                            { receiveModalVisible: !1 },
                            function () {
                              v().showToast({
                                title: "领取成功",
                                icon: "none",
                                duration: 1500,
                              });
                            }
                          );
                        },
                      },
                      {
                        key: "onScrollerLower",
                        value: function () {
                          console.error("scroll lower"),
                            this.state.showNum <= this.state.busList.length &&
                              this.setState({
                                showNum:
                                  this.state.showNum + 20 <
                                  this.state.busList.length
                                    ? this.state.showNum + 20
                                    : this.state.busList.length,
                              });
                        },
                      },
                      {
                        key: "getDOMHeight",
                        value: function (e) {
                          var t = this;
                          return new Promise(function (i) {
                            if (t["".concat(e, "_h")])
                              return i(t["".concat(e, "_h")]);
                            v()
                              .createSelectorQuery()
                              .select("#".concat(e))
                              .boundingClientRect(function (o) {
                                if (o)
                                  return (
                                    (t["".concat(e, "_h")] = o.height),
                                    void i(o.height)
                                  );
                                i(0);
                              })
                              .exec();
                          });
                        },
                      },
                      {
                        key: "onScroller",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, a.Z)().mark(function e(t) {
                              var i, o, n, s;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i = 400),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          this.getDOMHeight("scroller")
                                        );
                                      case 4:
                                        (o = e.sent),
                                          (n = t.detail),
                                          (s = n.scrollTop),
                                          n.scrollHeight - s <= o + i &&
                                            this.onScrollerLower(),
                                          (e.next = 12);
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0);
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 9]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onGuideMaskClick",
                        value: function () {
                          (0, B.EC)(B.t0.LINE_SELECT_IN_LIST),
                            this.setState({ showGuide: !1 });
                        },
                      },
                      {
                        key: "handleCloseGuide",
                        value: function () {
                          var e = this;
                          (0, B.G8)("skip").finally(function () {
                            e.setState({ showGuide: !1 });
                          });
                        },
                      },
                      {
                        key: "onBackClick",
                        value: function () {
                          v().getCurrentPages().length > 1
                            ? v().navigateBack()
                            : v().reLaunch({
                                url: "/pages/home/index?tab=bus&sourceId=".concat(
                                  this.sourceId
                                ),
                              });
                        },
                      },
                      {
                        key: "getFilterParamsCount",
                        value: function () {
                          var e,
                            t,
                            i,
                            o,
                            n = this.state.busParams;
                          return (
                            ((null == n ||
                            null === (e = n.fromStationList) ||
                            void 0 === e
                              ? void 0
                              : e.length) || 0) +
                            ((null == n ||
                            null === (t = n.toStationList) ||
                            void 0 === t
                              ? void 0
                              : t.length) || 0) +
                            ((null == n ||
                            null === (i = n.fromTimeList) ||
                            void 0 === i
                              ? void 0
                              : i.length) || 0) +
                            ((null == n ||
                            null === (o = n.upgradeServiceList) ||
                            void 0 === o
                              ? void 0
                              : o.length) || 0)
                          );
                        },
                      },
                      {
                        key: "onQuickFilterTabChange",
                        value: function (e) {
                          this.setState({ quickFilterTab: e });
                        },
                      },
                      {
                        key: "onNoticeModalVisibleChange",
                        value: function (e) {
                          this.setState({ commonNoticeModal: e });
                        },
                      },
                      {
                        key: "onListScroll",
                        value: function () {
                          var e,
                            t = this;
                          this.observeScrollEnd &&
                            clearTimeout(this.observeScrollEnd) &&
                            (this.observeScrollEnd = null),
                            null === (e = this.$CouponTip) ||
                              void 0 === e ||
                              e.handleKeepModalToSide(),
                            (this.observeScrollEnd = setTimeout(function () {
                              var e;
                              console.log("on scroll end"),
                                null === (e = t.$CouponTip) ||
                                  void 0 === e ||
                                  e.handleResumeModalFromSide(),
                                (t.observeScrollEnd = null);
                            }, 500));
                        },
                      },
                      {
                        key: "retriveMarkRouteNum",
                        value: function () {
                          var e = this.state,
                            t = e.isDiTuiSource,
                            i = e.busList.filter(function (e) {
                              return !(
                                e.product.bookInfo &&
                                0 === e.product.bookInfo.bookable
                              );
                            });
                          if (t && i.length > 0) {
                            var o,
                              n,
                              s = i[0].product,
                              a = null == s ? void 0 : s.fromTimeType,
                              r =
                                1 != s.businessType &&
                                ((null === (o = s.fromStations) || void 0 === o
                                  ? void 0
                                  : o.length) > 0 ||
                                  (null === (n = s.toStations) || void 0 === n
                                    ? void 0
                                    : n.length) > 0);
                            if (
                              _()().format("YYYY-MM-DD") ==
                              (null == s ? void 0 : s.fromDate)
                            ) {
                              var c = 0;
                              if (1 != a || r) c = 1;
                              else {
                                var l = _()().add(10, "minutes");
                                c =
                                  i.filter(function (e) {
                                    var t = null == e ? void 0 : e.product;
                                    if (
                                      _()(
                                        (null == t ? void 0 : t.fromDate) +
                                          " " +
                                          (null == t ? void 0 : t.fromTime)
                                      ).isBefore(l)
                                    )
                                      return e;
                                  }).length >= 2
                                    ? 2
                                    : 1;
                              }
                              this.setState({ markRouteNum: c });
                            } else this.setState({ markRouteNum: 0 });
                          } else this.setState({ markRouteNum: 0 });
                        },
                      },
                      {
                        key: "getXProductInfoWithShifts",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.busList,
                            o = t.isDiTuiSource,
                            n = t.utmSource,
                            s = t.currentXProductBusIndex,
                            a = i.filter(function (e) {
                              return !(
                                e.product.bookInfo &&
                                0 === e.product.bookInfo.bookable
                              );
                            });
                          if (o && (null == a ? void 0 : a.length) > 0) {
                            var r = a.length > 3 ? 3 : a.length,
                              c = a.slice(0, r);
                            s > 2 && c.push(a[s]);
                            var l =
                              null == c
                                ? void 0
                                : c.map(function (e) {
                                    var t =
                                        (null == e ? void 0 : e.product) || {},
                                      i = O.c.getXProductParams(t, {
                                        fromTime:
                                          t.fromTime || t.lastFromTime || "",
                                        utmSource: n,
                                        productLine:
                                          1 === t.businessType ? 1 : 3,
                                      });
                                    return (0, K.gX)(i);
                                  });
                            Promise.all(l).then(function (t) {
                              if ((null == t ? void 0 : t.length) > 0) {
                                var i = {};
                                t.forEach(function (e, o) {
                                  if (
                                    1 === (null == e ? void 0 : e.code) &&
                                    null != e &&
                                    e.data
                                  ) {
                                    var n = o;
                                    s > 2 &&
                                      null != t &&
                                      t.length &&
                                      o ==
                                        (null == t ? void 0 : t.length) - 1 &&
                                      (n = s),
                                      (i[n] = e.data);
                                  }
                                }),
                                  e.setState({ xProductInfoStore: i });
                              }
                            });
                          }
                        },
                      },
                      {
                        key: "changeXProductBusIndex",
                        value: function (e, t) {
                          this.setState({
                            currentXProductBusIndex: e,
                            currentViewId: t,
                          });
                        },
                      },
                      {
                        key: "getScrollViewDomHeight",
                        value: function () {
                          var e = this;
                          setTimeout(function () {
                            var t;
                            null === (t = e.selectorQuery) ||
                              void 0 === t ||
                              t
                                .selectAll(
                                  ".bus-list-head, .bus-date-picker, .bus-list-tab, .fixed-bottom"
                                )
                                .boundingClientRect(function (t) {
                                  console.log(t);
                                  var i = k.A.screenHeight;
                                  null == t ||
                                    t.map(function (e) {
                                      i -= e.height;
                                    }),
                                    e.setState({ scrollViewDomHeight: i });
                                })
                                .exec();
                          }, 500);
                        },
                      },
                      {
                        key: "handleShowCalendarDrawer",
                        value: function () {
                          var e = this.state,
                            t = e.chooseDate,
                            i = e.beginDate,
                            o = e.endDate;
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
                          var t,
                            i = this;
                          e &&
                            (this.closeCalendarDrawer(),
                            T.default.isH5
                              ? setTimeout(function () {
                                  var t;
                                  null === (t = i.$datePicker) ||
                                    void 0 === t ||
                                    t.refreshSelectDate(e);
                                }, 1500)
                              : null === (t = this.$datePicker) ||
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
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isTieyou,
                            o = t.fromCity,
                            n = t.toCity,
                            s = t.pointBusTab,
                            a = t.chooseDate,
                            r = t.beginDate,
                            l = t.endDate,
                            u = t.tabIndex,
                            d = t.busCount,
                            m = t.busList,
                            h = t.unableBusList,
                            f = t.showUnableBusList,
                            p = t.filterByTime,
                            b = t.isLoading,
                            v = t.filter,
                            S = t.filterParams,
                            w = t.filterModalVisible,
                            y = t.selectStationModalVisible,
                            B = t.selectStationModalInfo,
                            N = t.isDiTuiSource,
                            Z = t.diTuiActivityInfo,
                            V = t.tabType,
                            I = t.endPositionShow,
                            L = t.listBanner,
                            F = t.diTuiCouponModalVisible,
                            R = t.travelEnvelopeModalInfo,
                            z = t.travelEnvelopeModalVisible,
                            U = t.receiveModalInfo,
                            E = t.receiveModalVisible,
                            O = t.envelopeModalTimeLeft,
                            Q = t.isCouponBarShow,
                            H = t.couponInfo,
                            q = t.isBusCouponModalShow,
                            Y = t.busCouponModalInfo,
                            K = t.showTimePicker,
                            $ = t.timePickerOptions,
                            ee = t.showNum,
                            ae = t.scrollTop,
                            ce = t.showGuide,
                            ue = t.brandInfo,
                            he = t.statusBarHeight,
                            ge = t.headTitle,
                            Se = t.memberDiscountInfo,
                            Te = t.isShowDTRetrieveBanner,
                            ye = t.isShowDTRetrieveModal,
                            Ce = t.dTRetrieveModalInfo,
                            Be = t.quickFilterFormatData,
                            Ne = t.quickFilterTab,
                            Ze = t.showQuickTabInTop,
                            xe = t.commonNoticeModal,
                            Ve = t.markRouteNum,
                            Ie = t.currentXProductBusIndex,
                            Le = t.currentViewId,
                            Pe = t.utmSource,
                            De = t.xProductInfoStore,
                            Xe = t.scrollViewDomHeight,
                            Me = t.isShowCalendar,
                            Fe = t.dateInfo,
                            _e = t.studentVerifyBanner,
                            Ae = k.Z.canUseCustomNav,
                            Re = !N && Se && !!Se.price && !Te,
                            ze = this.getFilterParamsCount(),
                            Ue = (0, x.BX)(g.View, {
                              className: "guide-bus-list",
                              children: [
                                (0, x.BX)(g.View, {
                                  className: "guide-row",
                                  children: [
                                    (0, x.tZ)(g.Image, {
                                      src: "https://images3.c-ctrip.com/train/yzh/bus-mini/guide/hands@3x.png",
                                      mode: "aspectFit",
                                      className: "guide-point",
                                    }),
                                    (0, x.tZ)(g.Image, {
                                      src: "https://images3.c-ctrip.com/train/yzh/bus-mini/guide/yd@3x.png",
                                      mode: "heightFix",
                                      className: "guide-line",
                                    }),
                                    (0, x.BX)(g.View, {
                                      className: "guide-text",
                                      children: [
                                        "点击",
                                        (0, x.tZ)(g.Text, {
                                          className: "hl",
                                          children: "查询",
                                        }),
                                        "对应的班次",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, x.tZ)(g.View, {
                                  className: "guide-jump-btn",
                                  id: "AdBz",
                                  onClick: this.handleCloseGuide,
                                  children: "跳过",
                                }),
                              ],
                            });
                          return (0, x.BX)(g.View, {
                            className: "".concat(
                              i ? "ty" : "zx",
                              " bus-list-page"
                            ),
                            children: [
                              Ae &&
                                (0, x.tZ)(fe, {
                                  title: ge,
                                  statusBarHeight: he,
                                  brandInfo: ue,
                                  onBackClick: this.onBackClick.bind(this),
                                }),
                              !b &&
                                ce &&
                                m[0] &&
                                (0, x.tZ)(C.h, {
                                  onMaskClick: this.onGuideMaskClick,
                                }),
                              (0, x.tZ)(g.Block, {
                                children:
                                  a &&
                                  (0, x.tZ)(W.Z, {
                                    pageId: this.pageId,
                                    ref: function (t) {
                                      return (e.$datePicker = t);
                                    },
                                    doBusTraceInfo:
                                      this.doBusNewTraceInfoV2.bind(this),
                                    chooseDate: a,
                                    beginDate: r,
                                    endDate: l,
                                    onChangeDate:
                                      this.onClickChangeDate.bind(this),
                                    onShowCalendar:
                                      this.handleShowCalendarDrawer.bind(this),
                                  }),
                              }),
                              (0, x.BX)(g.Block, {
                                children: [
                                  !T.default.isH5Hzbm &&
                                    s &&
                                    (0, x.tZ)(pe, {
                                      tabIndex: u,
                                      pointBusTab: s,
                                      onClickTab: this.onClickTab.bind(this),
                                    }),
                                  (0, x.BX)(g.ScrollView, {
                                    id: "scroller",
                                    scrollY: !0,
                                    className: "wrap " + (s ? "" : "newtop"),
                                    ref: this.refScrollView,
                                    scrollTop: ae,
                                    onScrollToLower: this.onScrollerLower,
                                    onScroll: this.onListScroll.bind(this),
                                    style: (0, c.Z)(
                                      {
                                        zIndex: ce ? 100 : "unset",
                                        height: "".concat(Xe, "px;"),
                                      },
                                      N || b ? { marginBottom: 0 } : {}
                                    ),
                                    scrollIntoView: Le,
                                    children: [
                                      !b &&
                                        ce &&
                                        m[0] &&
                                        (0, x.tZ)(C.h, {
                                          className: "scroll-view-mask",
                                          onMaskClick: this.onGuideMaskClick,
                                        }),
                                      (0, x.tZ)(g.Block, {
                                        children:
                                          !b &&
                                          (0, x.tZ)(M.Z, {
                                            isFromList: !0,
                                            refreshNoticeParams: {
                                              productType:
                                                V || u > 0 ? "point" : "bus",
                                              toCity: n,
                                              fromCity: o,
                                              fromTime: _()(a).format(
                                                "YYYY-MM-DD HH:mm:ss"
                                              ),
                                            },
                                            onNoticeModalVisibleChange:
                                              this.onNoticeModalVisibleChange,
                                            useOuterModal: !0,
                                          }),
                                      }),
                                      N &&
                                        0 === u &&
                                        Z &&
                                        !F &&
                                        (0, x.BX)(g.View, {
                                          className: "ditui-tips",
                                          children: [
                                            (0, x.tZ)(g.View, {
                                              className: "icon",
                                              children: (0, x.tZ)(g.Image, {
                                                className: "img",
                                                src: Z.icon,
                                              }),
                                            }),
                                            (0, x.tZ)(g.View, {
                                              className: "content",
                                              children:
                                                Z.content &&
                                                Z.content.map(function (e, t) {
                                                  return (0,
                                                  x.tZ)(g.View, { className: "text", children: e }, t);
                                                }),
                                            }),
                                          ],
                                        }),
                                      _e &&
                                        0 === u &&
                                        (0, x.tZ)(ve, { bannerInfo: _e }),
                                      !T.default.isH5Hzbm &&
                                        Re &&
                                        (0, x.tZ)(re, {
                                          memberDiscountInfo: Se,
                                        }),
                                      !T.default.isH5Hzbm &&
                                        Te &&
                                        (0, x.tZ)(de, {}),
                                      F && (0, x.tZ)(me.Z, {}),
                                      (0, x.BX)(g.Block, {
                                        children: [
                                          !b &&
                                            (m[0] || h[0]) &&
                                            (0, x.BX)(g.View, {
                                              className: "list-wrap",
                                              children: [
                                                m[0] &&
                                                  (0, x.BX)(g.Block, {
                                                    children: [
                                                      Ve > 0 &&
                                                        m
                                                          .slice(0, Ve)
                                                          .map(function (t, i) {
                                                            return (0, x.tZ)(
                                                              g.Block,
                                                              {
                                                                children: (0,
                                                                x.tZ)(G, {
                                                                  routeInfo: (0,
                                                                  c.Z)(
                                                                    (0, c.Z)(
                                                                      {},
                                                                      t
                                                                    ),
                                                                    {},
                                                                    { index: i }
                                                                  ),
                                                                  isDiTuiSource:
                                                                    N,
                                                                  utmSource: Pe,
                                                                  currentXProductBusIndex:
                                                                    Ie,
                                                                  xProductInfoStore:
                                                                    De,
                                                                  onSelectItem:
                                                                    function (
                                                                      i
                                                                    ) {
                                                                      return e.onClickBusItem(
                                                                        t,
                                                                        i
                                                                      );
                                                                    },
                                                                  ubtTrace:
                                                                    e.doBusNewTraceInfoV2.bind(
                                                                      e
                                                                    ),
                                                                  onChangeXProductIndex:
                                                                    function (
                                                                      t,
                                                                      i
                                                                    ) {
                                                                      return e.changeXProductBusIndex(
                                                                        t,
                                                                        i
                                                                      );
                                                                    },
                                                                }),
                                                              },
                                                              i
                                                            );
                                                          }),
                                                      m
                                                        .slice(Ve, ee)
                                                        .map(function (t, i) {
                                                          return (0, x.tZ)(
                                                            C.Z,
                                                            {
                                                              showGuide:
                                                                0 === i && ce,
                                                              TipComp: Ue,
                                                              rootContentClassName:
                                                                "bus-list-guide-display-conent",
                                                              noMask: !0,
                                                              onRead:
                                                                e.onGuideMaskClick.bind(
                                                                  e
                                                                ),
                                                              children: (0,
                                                              x.BX)(g.Block, {
                                                                children: [
                                                                  !N &&
                                                                    (Ze
                                                                      ? 0 === i
                                                                      : D(i)) &&
                                                                    (0, x.tZ)(
                                                                      P,
                                                                      {
                                                                        data: Be,
                                                                        tab: Ne,
                                                                        onFilter:
                                                                          e.onClickQuickFilter,
                                                                        onShowMoreStationFilter:
                                                                          e.onClickShowFilter,
                                                                        onTabChange:
                                                                          e.onQuickFilterTabChange.bind(
                                                                            e
                                                                          ),
                                                                        onClearFilter:
                                                                          e.onClearFilter,
                                                                        isShowClear:
                                                                          ze >
                                                                          0,
                                                                        showQuickTabInTop:
                                                                          Ze,
                                                                      }
                                                                    ),
                                                                  L &&
                                                                    !I &&
                                                                    (0, x.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "listBanner",
                                                                        id: "AdCA",
                                                                        onClick:
                                                                          function () {
                                                                            e.bannerClick(
                                                                              L &&
                                                                                L.jumpUrl
                                                                            );
                                                                          },
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            x.BX)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "list-right",
                                                                                children:
                                                                                  [
                                                                                    (0,
                                                                                    x.tZ)(
                                                                                      g.Image,
                                                                                      {
                                                                                        className:
                                                                                          "list-img",
                                                                                        src:
                                                                                          L &&
                                                                                          L.icon,
                                                                                      }
                                                                                    ),
                                                                                    (0,
                                                                                    x.BX)(
                                                                                      g.View,
                                                                                      {
                                                                                        className:
                                                                                          "list-content",
                                                                                        children:
                                                                                          [
                                                                                            e.handleTitle(
                                                                                              L
                                                                                            ),
                                                                                            (0,
                                                                                            x.tZ)(
                                                                                              g.View,
                                                                                              {
                                                                                                className:
                                                                                                  "subtitle",
                                                                                                children:
                                                                                                  L &&
                                                                                                  L.subTitle,
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            x.BX)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "list-btn",
                                                                                children:
                                                                                  [
                                                                                    "去预订",
                                                                                    (0,
                                                                                    x.tZ)(
                                                                                      g.Image,
                                                                                      {
                                                                                        className:
                                                                                          "icon-arrow",
                                                                                        src: "https://pages.c-ctrip.com/bus-images/zhixing/fissonActivity/arrow.png",
                                                                                      }
                                                                                    ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                  (0, x.tZ)(J, {
                                                                    busInfo: (0,
                                                                    c.Z)(
                                                                      (0, c.Z)(
                                                                        {},
                                                                        t
                                                                      ),
                                                                      {},
                                                                      {
                                                                        busIndex:
                                                                          i +
                                                                          Ve,
                                                                        isFirst:
                                                                          0 ==
                                                                          i,
                                                                      }
                                                                    ),
                                                                    isDiTuiSource:
                                                                      N,
                                                                    utmSource:
                                                                      Pe,
                                                                    currentXProductBusIndex:
                                                                      Ie,
                                                                    xProductInfoStore:
                                                                      De,
                                                                    onSelectItem:
                                                                      function (
                                                                        i
                                                                      ) {
                                                                        return e.onClickBusItem(
                                                                          t,
                                                                          i
                                                                        );
                                                                      },
                                                                    ubtTrace:
                                                                      e.doBusNewTraceInfoV2.bind(
                                                                        e
                                                                      ),
                                                                    onChangeXProductIndex:
                                                                      function (
                                                                        t,
                                                                        i
                                                                      ) {
                                                                        return e.changeXProductBusIndex(
                                                                          t,
                                                                          i
                                                                        );
                                                                      },
                                                                  }),
                                                                ],
                                                              }),
                                                            },
                                                            i
                                                          );
                                                        }),
                                                      Ie === m.length - 1 &&
                                                        (0, x.tZ)(g.View, {
                                                          style:
                                                            "height: 50px; width: 375px;",
                                                        }),
                                                      I && L
                                                        ? (0, x.BX)(g.View, {
                                                            className:
                                                              "listBanner",
                                                            id: "AdCB",
                                                            onClick:
                                                              function () {
                                                                e.bannerClick(
                                                                  L && L.jumpUrl
                                                                );
                                                              },
                                                            children: [
                                                              (0, x.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "list-right",
                                                                  children: [
                                                                    (0, x.tZ)(
                                                                      g.Image,
                                                                      {
                                                                        className:
                                                                          "list-img",
                                                                        src:
                                                                          L &&
                                                                          L.icon,
                                                                      }
                                                                    ),
                                                                    (0, x.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "list-content",
                                                                        children:
                                                                          [
                                                                            this.handleTitle(
                                                                              L
                                                                            ),
                                                                            (0,
                                                                            x.tZ)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "subtitle",
                                                                                children:
                                                                                  L &&
                                                                                  L.subTitle,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, x.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "list-btn",
                                                                  children: [
                                                                    "去预订",
                                                                    (0, x.tZ)(
                                                                      g.Image,
                                                                      {
                                                                        className:
                                                                          "icon-arrow",
                                                                        src: "https://pages.c-ctrip.com/bus-images/zhixing/fissonActivity/arrow.png",
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                            ],
                                                          })
                                                        : null,
                                                    ],
                                                  }),
                                                ee >= m.length &&
                                                  !f &&
                                                  h[0] &&
                                                  (0, x.BX)(g.Block, {
                                                    children: [
                                                      (0, x.tZ)(g.View, {
                                                        className:
                                                          "unable-wrap",
                                                        id: "AdCC",
                                                        onClick:
                                                          this
                                                            .onClickShowMoreUnableBus,
                                                        children: "查看更多",
                                                      }),
                                                      h.length > 0 &&
                                                        m.length < 3 &&
                                                        L &&
                                                        (0, x.BX)(g.View, {
                                                          className:
                                                            "listBanner",
                                                          id: "AdCD",
                                                          onClick: function () {
                                                            e.bannerClick(
                                                              L && L.jumpUrl
                                                            );
                                                          },
                                                          children: [
                                                            (0, x.BX)(g.View, {
                                                              className:
                                                                "list-right",
                                                              children: [
                                                                (0, x.tZ)(
                                                                  g.Image,
                                                                  {
                                                                    className:
                                                                      "list-img",
                                                                    src:
                                                                      L &&
                                                                      L.icon,
                                                                  }
                                                                ),
                                                                (0, x.BX)(
                                                                  g.View,
                                                                  {
                                                                    className:
                                                                      "list-content",
                                                                    children: [
                                                                      this.handleTitle(
                                                                        L
                                                                      ),
                                                                      (0, x.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "subtitle",
                                                                          children:
                                                                            L &&
                                                                            L.subTitle,
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, x.BX)(g.View, {
                                                              className:
                                                                "list-btn",
                                                              children: [
                                                                "去预订",
                                                                (0, x.tZ)(
                                                                  g.Image,
                                                                  {
                                                                    className:
                                                                      "icon-arrow",
                                                                    src: "https://pages.c-ctrip.com/bus-images/zhixing/fissonActivity/arrow.png",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                    ],
                                                  }),
                                                ee < m.length &&
                                                  (0, x.tZ)(g.View, {
                                                    className:
                                                      "unable-wrap loading",
                                                    children: "加载中...",
                                                  }),
                                                f &&
                                                  h[0] &&
                                                  (0, x.BX)(g.Block, {
                                                    children: [
                                                      L &&
                                                        (0, x.BX)(g.View, {
                                                          className:
                                                            "listBanner",
                                                          id: "AdCE",
                                                          onClick: function () {
                                                            e.bannerClick(
                                                              L && L.jumpUrl
                                                            );
                                                          },
                                                          children: [
                                                            (0, x.BX)(g.View, {
                                                              className:
                                                                "list-right",
                                                              children: [
                                                                (0, x.tZ)(
                                                                  g.Image,
                                                                  {
                                                                    className:
                                                                      "list-img",
                                                                    src:
                                                                      L &&
                                                                      L.icon,
                                                                  }
                                                                ),
                                                                (0, x.BX)(
                                                                  g.View,
                                                                  {
                                                                    className:
                                                                      "list-content",
                                                                    children: [
                                                                      this.handleTitle(
                                                                        L
                                                                      ),
                                                                      (0, x.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "subtitle",
                                                                          children:
                                                                            L &&
                                                                            L.subTitle,
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, x.BX)(g.View, {
                                                              className:
                                                                "list-btn",
                                                              children: [
                                                                "去预订",
                                                                (0, x.tZ)(
                                                                  g.Image,
                                                                  {
                                                                    className:
                                                                      "icon-arrow",
                                                                    src: "https://pages.c-ctrip.com/bus-images/zhixing/fissonActivity/arrow.png",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      h.map(function (t, i) {
                                                        return (0,
                                                        x.BX)(g.Block, { children: [(Ze ? m.length + i === 0 : D(m.length + i)) && (0, x.tZ)(P, { data: Be, tab: Ne, onFilter: e.onClickQuickFilter, onShowMoreStationFilter: e.onClickShowFilter, onTabChange: e.onQuickFilterTabChange.bind(e), onClearFilter: e.onClearFilter, isShowClear: ze > 0 }), (0, x.tZ)(J, { busInfo: t, isDiTuiSource: N, onSelectItem: e.onClickBusItem.bind(e, t), ubtTrace: e.doBusNewTraceInfoV2.bind(e) })] }, i);
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          !b &&
                                            !m[0] &&
                                            !h[0] &&
                                            (0, x.BX)(g.View, {
                                              className: "noreslut",
                                              children: [
                                                (0, x.tZ)(g.View, {
                                                  className: "img",
                                                }),
                                                (0, x.BX)(g.View, {
                                                  className: "text",
                                                  children: [
                                                    "对不起， 您搜索的",
                                                    (0, x.BX)(g.Text, {
                                                      className: "strong",
                                                      children: [o, " - ", n],
                                                    }),
                                                  ],
                                                }),
                                                (0, x.tZ)(g.View, {
                                                  className: "text",
                                                  children: "未找到班次~",
                                                }),
                                              ],
                                            }),
                                          b &&
                                            (0, x.tZ)(g.View, {
                                              className: "loading-content",
                                              children: [
                                                0, 1, 2, 3, 4, 5, 6,
                                              ].map(function (e, t) {
                                                return (0,
                                                x.tZ)(g.View, { className: "item", children: (0, x.BX)(g.View, { className: "content", children: [(0, x.BX)(g.View, { className: "left", children: [(0, x.BX)(g.View, { className: "time-info", children: [(0, x.tZ)(g.View, { className: "time-start", children: (0, x.tZ)(g.View, { className: "text" }) }), (0, x.tZ)(g.View, { className: "time-desc" })] }), (0, x.tZ)(g.View, { className: "line" }), (0, x.BX)(g.View, { className: "station-info", children: [(0, x.tZ)(g.View, { className: "station", children: (0, x.tZ)(g.View, { className: "station-start", children: (0, x.tZ)(g.View, { className: "text" }) }) }), (0, x.tZ)(g.View, { className: "station", children: (0, x.tZ)(g.View, { className: "station-end", children: (0, x.tZ)(g.View, { className: "text" }) }) }), (0, x.tZ)(g.View, { className: "bus-desc" })] })] }), (0, x.tZ)(g.View, { className: "right", children: (0, x.tZ)(g.View, { className: "price" }) })] }) }, t);
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, x.BX)(g.Block, {
                                children: [
                                  Object.keys(H).length > 0 &&
                                    (0, x.tZ)(be, {
                                      isShowCouponBar: Q,
                                      couponInfo: H,
                                      id: "AdCF",
                                      onClick:
                                        this.handleCouponIconClick.bind(this),
                                    }),
                                  !!v &&
                                    !N &&
                                    (0, x.BX)(g.View, {
                                      className: "fixed-bottom",
                                      children: [
                                        (0, x.BX)(g.View, {
                                          className: "tab",
                                          id: "AdCG",
                                          onClick: this.onClickShowFilter,
                                          children: [
                                            "筛选条件",
                                            !!ze &&
                                              (0, x.tZ)(g.View, {
                                                className: "count-tag",
                                                children: ze,
                                              }),
                                          ],
                                        }),
                                        (0, x.tZ)(g.View, {
                                          className: "line",
                                        }),
                                        (0, x.BX)(g.View, {
                                          className: "tab " + (p ? "cur" : ""),
                                          id: "AdCH",
                                          onClick: this.onClickFilterTime,
                                          children: [
                                            "出发",
                                            p ? "晚 - 早" : "早 - 晚",
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, x.tZ)(X, {
                                    pageId: this.pageId,
                                    doBusTraceInfo: function (t, i) {
                                      e.doBusTraceInfo(t, i);
                                    },
                                    tabType: V,
                                    visible: w,
                                    busCount: d,
                                    filterInfo: v,
                                    selecteds: S,
                                    onRefreshCount:
                                      this.onRefreshCount.bind(this),
                                    onConfirm:
                                      this.onClickFilterConfirm.bind(this),
                                    onClose: this.onClickFilterClose.bind(this),
                                  }),
                                  (0, x.tZ)(te, {
                                    visible: y,
                                    info: B,
                                    onConfirm:
                                      this.onClickStationModalConfirm.bind(
                                        this
                                      ),
                                    onClose:
                                      this.onClickStationModalClose.bind(this),
                                  }),
                                  (0, x.tZ)(oe.Z, {
                                    visible: z,
                                    option: ke,
                                    onClose:
                                      this.onToggleTravelEnvelopeModal.bind(
                                        this
                                      ),
                                    children: (0, x.BX)(g.View, {
                                      className: "travel-envelope-modal",
                                      children: [
                                        (0, x.BX)(g.View, {
                                          className: "tbox",
                                          children: [
                                            (0, x.tZ)(g.View, {
                                              className: "tit",
                                              children: R.title,
                                            }),
                                            R &&
                                              R.minute &&
                                              (0, x.BX)(g.View, {
                                                className: "subtit",
                                                children: [
                                                  (0, x.tZ)(ie.Z, {
                                                    info: 60 * R.minute,
                                                    mode: "modeB",
                                                    onChange: function (t) {
                                                      e.setState({
                                                        travelEnvelopeModalVisible:
                                                          t,
                                                      });
                                                    },
                                                    onReturnTime:
                                                      this.handleTimeChange.bind(
                                                        this
                                                      ),
                                                  }),
                                                  " ",
                                                  "后失效",
                                                ],
                                              }),
                                            (0, x.tZ)(g.Image, {
                                              className: "img",
                                              src: R.picUrl,
                                            }),
                                          ],
                                        }),
                                        R.contentList &&
                                          R.contentList[0] &&
                                          (0, x.tZ)(g.View, {
                                            className: "mbox",
                                            children: R.contentList.map(
                                              function (e, t) {
                                                return (0, x.BX)(
                                                  g.View,
                                                  {
                                                    className: "item",
                                                    children: [
                                                      "· Step",
                                                      t + 1,
                                                      " ",
                                                      i
                                                        ? e.replace(
                                                            /\u667a\u884c/g,
                                                            "铁友"
                                                          )
                                                        : e,
                                                    ],
                                                  },
                                                  "index"
                                                );
                                              }
                                            ),
                                          }),
                                        (0, x.BX)(g.View, {
                                          className: "bbox",
                                          children: [
                                            (0, x.tZ)(g.View, {
                                              className: "cancel",
                                              id: "AdCI",
                                              onClick:
                                                this
                                                  .onToggleTravelEnvelopeModal,
                                              children: "我不想要",
                                            }),
                                            (0, x.tZ)(g.View, {
                                              className: "confirm",
                                              id: "AdCJ",
                                              onClick:
                                                this.onConfirmTravelEnvelopeModal.bind(
                                                  this,
                                                  "imeReceive"
                                                ),
                                              children: "立即领取",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, x.tZ)(oe.Z, {
                                    visible: E,
                                    option: we,
                                    children:
                                      U &&
                                      (0, x.BX)(g.View, {
                                        className: "receive-modal",
                                        children: [
                                          (0, x.tZ)(g.View, {
                                            className: "title",
                                            children: U.data.title,
                                          }),
                                          (0, x.tZ)(g.View, {
                                            className: "subtitle",
                                            children: U.data.subTitle,
                                          }),
                                          (0, x.BX)(g.View, {
                                            className: "btn",
                                            id: "AdCK",
                                            onClick:
                                              U && U.funcConfirm
                                                ? U.funcConfirm
                                                : function () {},
                                            children: [
                                              (0, x.tZ)(g.View, {
                                                className: "tit",
                                                children: U.confirmBtnText,
                                              }),
                                              (0, x.BX)(g.View, {
                                                className: "subtit",
                                                children: [
                                                  E &&
                                                    (0, x.tZ)(ie.Z, {
                                                      info: O,
                                                      onChange: function (t) {
                                                        e.setState({
                                                          receiveModalVisible:
                                                            t,
                                                        });
                                                      },
                                                      mode: "modeB",
                                                    }),
                                                  " ",
                                                  "后失效",
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, x.tZ)(g.Text, {
                                            className: "ifont-closed iconfont",
                                            id: "AdCL",
                                            onClick:
                                              U && U.funcCancel
                                                ? U.funcCancel
                                                : function () {},
                                          }),
                                        ],
                                      }),
                                  }),
                                  (0, x.tZ)(ne, {
                                    visible: q,
                                    info: Y,
                                    onClose:
                                      this.handleBusCouponModalClose.bind(this),
                                    onConfirm:
                                      this.handleBusCouponModalConfirm.bind(
                                        this
                                      ),
                                  }),
                                  K &&
                                    $ &&
                                    (0, x.tZ)(se.Z, {
                                      style: { width: "70%", margin: "0 auto" },
                                      visible: K,
                                      onCancel:
                                        this.hideTimePickerLayer.bind(this),
                                      minStep: $.minStep,
                                      min: $.min,
                                      max: $.max,
                                      onConfirm:
                                        this.onConfirmFromTime.bind(this),
                                      title: "请选择出发时间",
                                    }),
                                  (0, x.tZ)(le, {
                                    isShow: ye,
                                    info: Ce,
                                    onReceive:
                                      this.onReceiveDTRetrieveCoupon.bind(this),
                                    onClose:
                                      this.onCloseDTRetrieveModal.bind(this),
                                  }),
                                  (0, x.tZ)(M.M, (0, c.Z)({}, xe || {})),
                                  !T.default.isH5Hzbm &&
                                    "dt" !== T.default.jetpack &&
                                    !N &&
                                    (0, x.tZ)(A.Z, {
                                      fixCouponTab:
                                        V || 0 !== u ? "point" : "bus",
                                      ref: function (t) {
                                        return (e.$CouponTip = t);
                                      },
                                      doNewBusTraceInfo:
                                        this.doBusNewTraceInfoV2.bind(this),
                                    }),
                                  (0, x.tZ)(j.Z, {
                                    visible: Me,
                                    title: "选择出发日期",
                                    maxHeight: "80%",
                                    beginDate: Fe.beginDate,
                                    endDate: Fe.endDate,
                                    selectedDate: Fe.chooseDate,
                                    onConfirm: this.changeDate,
                                    onClose: this.closeCalendarDrawer,
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
                })(p.default.Component))
              ) || o;
          (Ce.enableShareAppMessage = !0),
            Page(
              (0, n.createPageConfig)(
                Ce,
                "pages/bus/list/list",
                { root: { cn: [] } },
                {
                  navigationStyle: "custom",
                  enablePullDownRefresh: !1,
                  backgroundColorBottom: "#efefef",
                  disableScroll: !0,
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [86230, 36941, 97144, 83851, 29907, 8831, 55979, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(72988);
          }
        ),
          e.O();
      },
    ]);
})();
