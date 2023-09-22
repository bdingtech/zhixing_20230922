!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [8024],
      {
        60670: function (t, i, n) {
          var o = n(32180),
            e = n(298),
            a = n(45023),
            r = n(57042),
            s = n(24460),
            l = n(21867),
            c = n(86066),
            d = n(92954),
            u = n.n(d),
            f = n(2809),
            h = n(79792),
            m = n(52500),
            p = n(71515),
            y = n(49120),
            g = n(28509),
            v = n(81957),
            S = n(48813);
          var b,
            x,
            P = m.default.memo(function (t) {
              var i = this,
                n = t.tabList,
                o = void 0 === n ? [] : n,
                e = t.onTabChange,
                a = void 0 === e ? console.log : e,
                r = t.activeIndex,
                s = void 0 === r ? 0 : r,
                l = t.style,
                c = void 0 === l ? {} : l,
                d = h.default.isTieyou;
              return (0, S.tZ)(p.Block, {
                children: (0, S.tZ)(p.View, {
                  className: "bus-tab ".concat(d ? "ty" : "zx"),
                  style: c,
                  children: o.map(function (t, n) {
                    return (0,
                    S.tZ)(p.View, { id: "AdBX", onClick: a.bind(i, n), className: "".concat(s === n ? "active" : "", " tab-item"), children: t.text }, n);
                  }),
                }),
              });
            }),
            C = n(29172),
            I = n(65004),
            A =
              (0, v.h)(!0)(
                (b = (function (t) {
                  (0, l.Z)(n, t);
                  var i = (0, c.Z)(n);
                  function n(t) {
                    var o;
                    return (
                      (0, r.Z)(this, n),
                      ((o = i.call(this, t)).state = {
                        isTieyou: h.default.isTieyou,
                      }),
                      o
                    );
                  }
                  return (
                    (0, s.Z)(n, [
                      {
                        key: "render",
                        value: function () {
                          var t = this,
                            i = (this.state.isTieyou, this.props || {}),
                            n = i.placeList,
                            o = void 0 === n ? [] : n,
                            e = i.onChoosePlace,
                            a = void 0 === e ? function () {} : e,
                            r = i.activePlaceIndex,
                            s = void 0 === r ? 0 : r,
                            l = i.style,
                            c = void 0 === l ? {} : l,
                            d = i.className,
                            u = void 0 === d ? "" : d,
                            f = i.onFixAnyPointBtnClick,
                            h = void 0 === f ? function () {} : f;
                          return (0, S.tZ)(p.Block, {
                            children: (0, S.tZ)(p.View, {
                              style: c,
                              className: u + " place-list",
                              children: o.map(function (i, n) {
                                return (0,
                                S.BX)(p.View, { className: "radio-content", children: [(0, S.tZ)(C.Z, { checked: s === n, size: 20, id: "AdFQ", onClick: a, value: n }), (0, S.tZ)(p.View, { className: "fromTime", id: "AdFR", onClick: a.bind(t, n), children: i.fromTime }), (0, S.BX)(p.View, { className: "place-detail", children: [(0, S.BX)(p.View, { className: "place-info", id: "AdFS", onClick: a.bind(t, n), children: [(0, S.tZ)(p.View, { className: "place-name", children: i.name }), (0, S.tZ)(p.View, { className: "place-address", children: i.address })] }), s === n && i.availableAreaPoints && i.availableAreaPoints.length > 0 && (0, S.tZ)(I.Z, { btnText: "修改地址", style: { width: "64px", height: "24px", lineHeight: "24px" }, id: "AdFT", onClick: h.bind(t, i), type: "fill", shape: "cycle" })] })] }, n);
                              }),
                            }),
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(m.default.Component))
              ) || b,
            k = [{ text: "上车点" }, { text: "下车点" }],
            Z = 0,
            F = 1;
          function T(t, i) {
            if (!i || !i) return { latitude: void 0, longitude: void 0 };
            var n = 3.141592653589793,
              o = (0, g.lu)(parseFloat(i), 0.0065),
              e = (0, g.lu)(parseFloat(t), 0.006),
              a = (0, g.lu)(
                Math.sqrt((0, g.IH)((0, g.ui)(o, o), (0, g.ui)(e, e))),
                (0, g.ui)(2e-5, Math.sin((0, g.ui)(e, n)))
              ),
              r = (0, g.lu)(
                Math.atan2(e, o),
                (0, g.ui)(3e-6, Math.cos((0, g.ui)(o, n)))
              );
            return {
              latitude: (0, g.ui)(a, Math.sin(r)).toFixed(7),
              longitude: (0, g.ui)(a, Math.cos(r)).toFixed(7),
            };
          }
          var w =
            (0, v.h)()(
              (x = (function (t) {
                (0, l.Z)(n, t);
                var i = (0, c.Z)(n);
                function n(t) {
                  var o;
                  return (
                    (0, r.Z)(this, n),
                    ((o = i.call(this, t)).pageId = "10650086971"),
                    (o.state = {
                      isTieyou: h.default.isTieyou,
                      statusBarHeight: f.ZP.statusBarHeight,
                      bgTop: 0,
                      placeActiveIndex: 0,
                      currentDirection: 0,
                      fromCity: "",
                      toCity: "",
                      fromStationAnyPointStore: null,
                      toStationAnyPointStore: null,
                      toStationInfo: null,
                      fromStationInfo: null,
                      fromStationInfoList: [],
                      toStationInfoList: [],
                      noteVisible: !0,
                    }),
                    o
                  );
                }
                return (
                  (0, s.Z)(n, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var t =
                            (0, d.getCurrentInstance)().router.params.data ||
                            {},
                          i = t.shiftInfo,
                          n = t.placeType,
                          o = void 0 === n ? "from" : n,
                          e = t.customStationInfo;
                        this.initPageInfo(i, o, e),
                          (0, y.setNavigationBarColor)({
                            frontColor: "#000000",
                            backgroundColor: "#fff",
                          }),
                          u().setNavigationBarTitle({
                            title: 0 == o ? "请选择上车点" : "请选择下车点",
                          });
                      },
                    },
                    {
                      key: "initPageInfo",
                      value: function (t) {
                        var i =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : Z,
                          n = arguments.length > 2 ? arguments[2] : void 0;
                        if (t) {
                          var o = t.toStationInfoList,
                            e = void 0 === o ? [] : o,
                            a = t.fromStationInfoList,
                            r = void 0 === a ? [] : a,
                            s = t.toStationInfo,
                            l = t.fromStationInfo,
                            c = t.fromCity,
                            d = t.toCity,
                            u = i === Z ? i : F;
                          this.setState({
                            toStationInfo: s,
                            fromStationInfo: l,
                            fromStationInfoList: r,
                            toStationInfoList: e,
                            currentDirection: u,
                            fromCity: c,
                            toCity: d,
                            fromStationAnyPointStore:
                              n && n.departure
                                ? {
                                    name:
                                      n.departure.customDepartureStation || "",
                                    address:
                                      n.departure.customDepartureAddress || "",
                                    location: {
                                      lng: n.departure
                                        .customDepartureCoordinateX,
                                      lat: n.departure
                                        .customDepartureCoordinateY,
                                    },
                                  }
                                : null,
                            toStationAnyPointStore:
                              n && n.destination
                                ? {
                                    name:
                                      n.destination.customDestinationStation ||
                                      "",
                                    address:
                                      n.destination.customDestinationAddress ||
                                      "",
                                    location: {
                                      lng: n.destination
                                        .customDestinationCoordinateX,
                                      lat: n.destination
                                        .customDestinationCoordinateY,
                                    },
                                  }
                                : null,
                          });
                        }
                      },
                    },
                    {
                      key: "onTabChange",
                      value: function (t) {
                        this.setState({ currentDirection: t });
                      },
                    },
                    {
                      key: "onTap",
                      value: function (t) {
                        return t;
                      },
                    },
                    {
                      key: "onChoosePlace",
                      value: function (t) {
                        var i = this.getDisplayStationInfo().isFromState;
                        this.setState(
                          (0, a.Z)(
                            {},
                            i ? "fromStationInfo" : "toStationInfo",
                            this.state[
                              i ? "fromStationInfoList" : "toStationInfoList"
                            ][t]
                          )
                        );
                      },
                    },
                    {
                      key: "awakeAnyPointInputPage",
                      value: function () {
                        var t = this,
                          i = this.getDisplayStationInfo(),
                          n = i.targetStation,
                          o = i.isFromState;
                        this.navigateTo({
                          url: "/pages/bus/placeSearch/index",
                          data: {
                            headTitle: o ? "选择上车点" : "选择下车点",
                            points: n && n.availableAreaPoints,
                            city: o ? this.state.fromCity : this.state.toCity,
                          },
                          callback: function (i) {
                            console.log("refresh data:", i),
                              i &&
                                t.setState(
                                  (0, a.Z)(
                                    {},
                                    o
                                      ? "fromStationAnyPointStore"
                                      : "toStationAnyPointStore",
                                    i.data
                                  )
                                );
                          },
                        });
                      },
                    },
                    {
                      key: "onClickTabBackIcon",
                      value: function () {
                        this.navigateBack();
                      },
                    },
                    {
                      key: "getMapCenterByPolygons",
                      value: function (t) {
                        var i = {
                          coordinateX: { min: void 0, max: void 0 },
                          coordinateY: { min: void 0, max: void 0 },
                        };
                        return (
                          t.forEach(function (t) {
                            var n = t.coordinateX,
                              o = void 0 === n ? 0 : n,
                              e = t.coordinateY,
                              a = void 0 === e ? 0 : e;
                            (i.coordinateX.min = i.coordinateX.min
                              ? Math.min(i.coordinateX.min, o)
                              : o),
                              (i.coordinateX.max = i.coordinateX.max
                                ? Math.max(i.coordinateX.max, o)
                                : o),
                              (i.coordinateY.min = i.coordinateY.min
                                ? Math.min(i.coordinateY.min, a)
                                : a),
                              (i.coordinateY.max = i.coordinateY.max
                                ? Math.max(i.coordinateY.max, a)
                                : a);
                          }),
                          {
                            coordinateX: (0, g.e9)(
                              i.coordinateX.max + i.coordinateX.min,
                              2
                            ),
                            coordinateY: (0, g.e9)(
                              i.coordinateY.max + i.coordinateY.min,
                              2
                            ),
                          }
                        );
                      },
                    },
                    {
                      key: "getDisplayStationInfo",
                      value: function () {
                        var t = this.state,
                          i = t.fromStationInfoList,
                          n = t.toStationInfoList,
                          o = t.currentDirection,
                          a = t.toStationInfo,
                          r = t.fromStationInfo,
                          s = t.fromStationAnyPointStore,
                          l = t.toStationAnyPointStore,
                          c = o === Z,
                          d = !!i.length,
                          u = !!n.length,
                          f = d && u,
                          m = c ? i : n,
                          p = c ? r : a,
                          y = !!m.length,
                          g = p && p.shuttleService,
                          v = y && f ? 2 : y ? 1 : 0,
                          S = c ? s : l,
                          b =
                            !p ||
                            (g &&
                              ((p.availableAreaPoints &&
                                p.availableAreaPoints.length) ||
                                S))
                              ? p && g && S
                                ? (0, e.Z)(
                                    {},
                                    T(S.location.lat, S.location.lng)
                                  )
                                : p &&
                                  g &&
                                  p.availableAreaPoints &&
                                  p.availableAreaPoints[0]
                                ? T(
                                    this.getMapCenterByPolygons(
                                      p.availableAreaPoints[0].coordinates
                                    ).coordinateX,
                                    this.getMapCenterByPolygons(
                                      p.availableAreaPoints[0].coordinates
                                    ).coordinateY
                                  )
                                : void 0
                              : (0, e.Z)({}, T(p.baiduY, p.baiduX)),
                          x =
                            p && g
                              ? (p.availableAreaPoints || []).map(function (t) {
                                  return {
                                    points:
                                      t && t.coordinates && t.coordinates.length
                                        ? t.coordinates.map(function (t) {
                                            var i = t.coordinateY,
                                              n = t.coordinateX;
                                            return (0, e.Z)({}, T(n, i));
                                          })
                                        : [],
                                    strokeWidth: 0,
                                    strokeColor: "#0088FF00",
                                    fillColor: "#0088FF50",
                                    zIndex: 1,
                                  };
                                })
                              : [],
                          P = c ? "选择上车点" : "选择下车点",
                          C = m.findIndex(function (t) {
                            return t.id === p.id;
                          }),
                          I = g
                            ? S
                              ? [
                                  (0, e.Z)(
                                    (0, e.Z)(
                                      {},
                                      T(S.location.lat, S.location.lng)
                                    ),
                                    {},
                                    {
                                      width: 0,
                                      height: 0,
                                      alpha: 0,
                                      callout: {
                                        content: S.name,
                                        fontSize: 14,
                                        bgColor: h.default.isTieyou
                                          ? "#ff5959"
                                          : "#198CFF",
                                        color: "#FFFFFF",
                                        borderRadius: 6,
                                        padding: 10,
                                        display: "ALWAYS",
                                      },
                                    }
                                  ),
                                ]
                              : []
                            : p
                            ? [
                                (0, e.Z)(
                                  (0, e.Z)({}, T(p.baiduY, p.baiduX)),
                                  {},
                                  {
                                    width: 0,
                                    height: 0,
                                    alpha: 0,
                                    callout: {
                                      content: p.name,
                                      fontSize: 14,
                                      bgColor: h.default.isTieyou
                                        ? "#ff5959"
                                        : "#198CFF",
                                      color: "#FFFFFF",
                                      borderRadius: 6,
                                      padding: 10,
                                      display: "ALWAYS",
                                    },
                                  }
                                ),
                              ]
                            : [];
                        return {
                          mode: v,
                          targetStations: m,
                          targetStation: p,
                          targetAnyPointStore: S,
                          targetMapPoint: b,
                          polygons: x,
                          isFromState: c,
                          headTitle: P,
                          placeActiveIndex: C,
                          markers: I,
                          enableConfirm: !!(g ? S : p),
                          targetStationIsAnyPointFlag: g,
                        };
                      },
                    },
                    {
                      key: "onTouchStart",
                      value: function (t) {
                        return t;
                      },
                    },
                    {
                      key: "confirmPlace",
                      value: function () {
                        var t = this.state,
                          i = t.fromStationAnyPointStore,
                          n = t.toStationAnyPointStore,
                          o = t.fromStationInfo,
                          a = t.toStationInfo;
                        this.invokeCallback({
                          fromStationAnyPointStore: i && (0, e.Z)({}, i),
                          toStationAnyPointStore: n && (0, e.Z)({}, n),
                          fromStationInfo: o,
                          toStationInfo: a,
                        }),
                          this.navigateBack();
                      },
                    },
                    {
                      key: "hideNote",
                      value: function () {
                        this.setState({ noteVisible: !1 });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var t = this.state,
                          i = t.isTieyou,
                          n = t.bgTop,
                          o = t.currentDirection,
                          e = t.fromCity,
                          a = t.toCity,
                          r = t.noteVisible,
                          s = t.toStationInfo,
                          l = this.getDisplayStationInfo(),
                          c = l.mode,
                          d = l.targetStations,
                          u = l.targetAnyPointStore,
                          f = l.targetMapPoint,
                          h = l.polygons,
                          m = l.isFromState,
                          y = l.placeActiveIndex,
                          g = l.markers,
                          v = l.enableConfirm,
                          b = l.targetStationIsAnyPointFlag;
                        return (0, S.BX)(p.View, {
                          className: i ? "ty" : "zx",
                          data: s,
                          children: [
                            f &&
                              (0, S.tZ)(p.Map, {
                                id: "AdFV",
                                onClick: this.onTap,
                                className: "map-dom",
                                style: {
                                  height:
                                    0 === c
                                      ? "calc(90% - ".concat(n, "px)")
                                      : "calc(70% - ".concat(n, "px)"),
                                  marginTop: n + "px",
                                },
                                longitude: f.longitude,
                                latitude: f.latitude,
                                markers: g,
                                polygons: h,
                                includePoints: h
                                  .map(function (t) {
                                    return t.points;
                                  })
                                  .flat(),
                                scale: g && g.length && !b ? 16 : void 0,
                              }),
                            (0, S.BX)(p.View, {
                              className: "botm-layer",
                              style: 2 === c ? { paddingTop: 0 } : {},
                              children: [
                                h &&
                                  !!h.length &&
                                  r &&
                                  (0, S.BX)(p.View, {
                                    className: "top-note",
                                    children: [
                                      (0, S.tZ)(p.Text, {
                                        className:
                                          "ifont-notice iconfont note-icon",
                                      }),
                                      (0, S.tZ)(p.Text, {
                                        className: "text",
                                        children:
                                          "蓝色范围内可免费接送，建议您选择方便".concat(
                                            m ? "上车点" : "下车点"
                                          ),
                                      }),
                                      (0, S.tZ)(p.Text, {
                                        className:
                                          "ifont-closed iconfont close-btn",
                                        id: "AdFW",
                                        onClick: this.hideNote.bind(this),
                                      }),
                                    ],
                                  }),
                                2 === c &&
                                  (0, S.tZ)(P, {
                                    tabList: k,
                                    onTabChange: this.onTabChange.bind(this),
                                    activeIndex: o,
                                    style: { marginBottom: "20px" },
                                  }),
                                2 === c || 1 === c
                                  ? (0, S.tZ)(A, {
                                      onChoosePlace:
                                        this.onChoosePlace.bind(this),
                                      activePlaceIndex: y,
                                      placeList: d,
                                      style: { marginBottom: "10px" },
                                      onFixAnyPointBtnClick:
                                        this.awakeAnyPointInputPage.bind(this),
                                    })
                                  : u
                                  ? (0, S.BX)(p.View, {
                                      className: "anypoint-content",
                                      style: { marginBottom: "40px" },
                                      children: [
                                        (0, S.BX)(p.View, {
                                          className: "anypoint-place-info",
                                          children: [
                                            (0, S.tZ)(p.View, {
                                              className: "name",
                                              children: u.name,
                                            }),
                                            u.address &&
                                              (0, S.tZ)(p.View, {
                                                className: "address",
                                                children: u.address,
                                              }),
                                          ],
                                        }),
                                        (0, S.tZ)(I.Z, {
                                          btnText: "修改站点",
                                          type: "fill",
                                          shape: "cycle",
                                          style: {
                                            width: "64px",
                                            height: "24px",
                                            lineHeight: "24px",
                                          },
                                          id: "AdFX",
                                          onClick:
                                            this.awakeAnyPointInputPage.bind(
                                              this
                                            ),
                                        }),
                                      ],
                                    })
                                  : (0, S.tZ)(p.View, {
                                      id: "AdFY",
                                      onClick:
                                        this.awakeAnyPointInputPage.bind(this),
                                      style: { marginBottom: "40px" },
                                      children: (0, S.BX)(p.View, {
                                        className: "bus-anypoint-input",
                                        children: [
                                          (0, S.tZ)(p.View, {
                                            className: "i-name",
                                            children: m ? e : a,
                                          }),
                                          (0, S.tZ)(p.View, {
                                            className: "i-value",
                                            children: m
                                              ? "请输入范围内的上车点"
                                              : "请输入范围内的下车点",
                                          }),
                                        ],
                                      }),
                                    }),
                                (0, S.tZ)(I.Z, {
                                  btnText: "确定",
                                  disabled: !v,
                                  type: "fill",
                                  style: { fontSize: "18px", height: "40px" },
                                  shape: "cycle",
                                  id: "AdFZ",
                                  onClick: this.confirmPlace.bind(this),
                                }),
                              ],
                            }),
                          ],
                        });
                      },
                    },
                  ]),
                  n
                );
              })(m.default.Component))
            ) || x;
          Page(
            (0, o.createPageConfig)(
              w,
              "pages/bus/place/index",
              { root: { cn: [] } },
              { enablePullDownRefresh: !1 } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [86230, 19559, 11216, 68592], function () {
          return (function (i) {
            return t((t.s = i));
          })(60670);
        }),
          t.O();
      },
    ]);
})();
