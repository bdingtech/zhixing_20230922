!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [4602],
      {
        28616: function (t, e, i) {
          var n,
            a = i(32180),
            o = i(90129),
            c = i(79301),
            l = i(95308),
            r = i(298),
            s = i(45023),
            u = i(57042),
            d = i(24460),
            h = i(21867),
            p = i(86066),
            m = i(52500),
            g = i(79792),
            f = i(92954),
            y = i.n(f),
            v = i(81957),
            k = i(2809),
            P = i(71515),
            w = i(92667),
            x = i(17377),
            b = i(49120),
            _ = i(27113),
            N = i(80626),
            I = i(90668),
            C = i(83358),
            Z = i(39509),
            z = {
              back_icon:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/ic_fanhui@3x.png",
              hotel_icon:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/ic_jiudianweizhi@3x.png",
              mypoi_icon:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/ic_location_map@3x.png",
              hotel_marker:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/jiudian_ditu/icon_ditu_jiudianweizhi@3x.png",
              poi_marker:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/jiudian_ditu/icon_ditu_poi@3x.png",
              tab_underline: {
                zx: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/xuanze_zx.png",
                ty: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/xuanze_ty@3x.png",
              },
              navigator_arrow:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/ic_jiantou@3x.png",
              top_arrow:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/jiantou@3x.png",
              traffic_markers: {
                1: {
                  unselected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_ditie@3x.png",
                  selected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_xuanzhong_ditie@3x.png",
                },
                2: {
                  unselected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_feiji@3x.png",
                  selected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_xuanzhong_feiji@3x.png",
                },
                3: {
                  unselected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_huoche@3x.png",
                  selected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_xuanzhong_huoche@3x.png",
                },
                4: {
                  unselected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_qiche@3x.png",
                  selected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_xuanzhong_qiche@3x.png",
                },
              },
              recommend_markers: {
                1: {
                  unselected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_meishi@3x.png",
                  selected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_xuanzhong_meishi@3x.png",
                },
                2: {
                  unselected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_gouwu@3x.png",
                  selected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_xuanzhong_gouwu@3x.png",
                },
                4: {
                  unselected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_jingqu@3x.png",
                  selected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_xuanzhong_jingqu@3x.png",
                },
                8: {
                  unselected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_hesuanjiance@3x.png",
                  selected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_xuanzhong_hesuanjiance@3x.png",
                },
                9: {
                  unselected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_zhoubianjiudian@3x.png",
                  selected:
                    "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/zuobiao/icon_xuanzhong_zhoubianjiudian@3x.png",
                },
              },
              point_bg: {
                zx: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/pingfen_zx@3x.png",
                ty: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/pingfen_ty@3x.png",
              },
              to_other: {
                zx: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/chuxing@3x.png",
                ty: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/jiemian/chuxing_ty@3x.png",
              },
            },
            T = i(48813),
            M = "6PIBZ-GDKCI-D7VGD-5HWZM-KBHC2-B2FII",
            B =
              (0, v.h)()(
                (n = (function (t) {
                  (0, h.Z)(i, t);
                  var e = (0, p.Z)(i);
                  function i(t) {
                    var n, a;
                    return (
                      (0, u.Z)(this, i),
                      ((a = e.call(this, t)).pageId = 10650086609),
                      (a.state = {
                        hotelList: [],
                        hotelTecnetPoints: [],
                        includePointsPadding: [150, 70, 0, 70],
                        mapHeight: "100vh",
                        mapMarkers: [],
                        mapWidth: "100vw",
                        mapSettings: {},
                        myPoint: null,
                        paddingBottom: 50,
                        polyline:
                          ((n = {
                            points: [],
                            arrowLine: !0,
                            width: 7,
                            color: "#58ABFF",
                            dottedLine: !1,
                          }),
                          (0, s.Z)(n, "arrowLine", !0),
                          (0, s.Z)(n, "borderColor", "#fff"),
                          (0, s.Z)(n, "borderWidth", 1),
                          n),
                        polylines: [],
                        polylineVisible: !1,
                        recommendData: [],
                        recommendTabs: [],
                        selectedItem: null,
                        selectedType: null,
                        showLocation: !0,
                        transportation: "walk",
                      }),
                      a.getCurrentCity(),
                      a.findMyPosition(!0),
                      a
                    );
                  }
                  return (
                    (0, d.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t = this;
                          this.PageInstance = (0, f.getCurrentInstance)();
                          var e = this.PageInstance.router.params || {},
                            i = e.data ? (0, N.X5)(e.data) : {},
                            n = i.from,
                            a = i.to;
                          delete i.from, delete i.to;
                          var o = n
                              ? {
                                  id: 100,
                                  iconPath: z.poi_marker,
                                  height: 70,
                                  width: 60,
                                  zIndex: 1,
                                  latitude: parseFloat(n.lat),
                                  longitude: parseFloat(n.lng),
                                }
                              : null,
                            c = {
                              id: 99,
                              iconPath: z.hotel_marker,
                              height: 70,
                              width: 60,
                              zIndex: 9,
                              latitude: parseFloat(a.lat),
                              longitude: parseFloat(a.lng),
                            },
                            l = {
                              latitude: parseFloat(a.lat),
                              longitude: parseFloat(a.lng),
                            },
                            s = n
                              ? {
                                  latitude: parseFloat(n.lat),
                                  longitude: parseFloat(n.lng),
                                }
                              : null,
                            u = {
                              latitude: parseFloat(a.lat),
                              longitude: parseFloat(a.lng),
                            },
                            d = [o, c].filter(function (t) {
                              return null == t ? void 0 : t.latitude;
                            }),
                            h = (0, r.Z)(
                              {
                                centerPoint: l,
                                hotelMarker: c,
                                fromPoint: s,
                                hotelPoint: u,
                                mapMarkers: d,
                                defaultFromPoint: s,
                                toPoint: u,
                              },
                              i
                            );
                          this.setState(h, function () {
                            var e = (0, N.mD)(i.checkOutDate);
                            (t.HotelQueryInstance = new C.Z({
                              checkInDate: i.checkInDate,
                              checkOutDate: i.checkOutDate,
                              cityName: i.cityName,
                              cityId: i.cityId,
                              fromPage: i.fromPage,
                              sameCityFlag: i.isSameCity,
                              smallHoursFlag: e,
                              queryFilterList: [t.getHotelSearchFilter()],
                            })),
                              t.getHotelList(),
                              t.getHotelNearByRecommend();
                          }),
                            (this.MapCtx = y().createMapContext("customMap")),
                            Boolean(s) && this.getNavgationPolyline(s, u);
                        },
                      },
                      {
                        key: "componentDidUpdate",
                        value: (function () {
                          var t = (0, l.Z)(
                            (0, c.Z)().mark(function t(e, i) {
                              var n,
                                a,
                                o,
                                l,
                                r,
                                s,
                                u,
                                d,
                                h,
                                p,
                                m = this;
                              return (0, c.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          ((n = i.includePoints),
                                          (a = this.state),
                                          (o = a.includePoints),
                                          (l = a.selectedType),
                                          (r = a.paddingBottom),
                                          (s = a.includePointsPadding),
                                          (u = !1),
                                          (null == n ? void 0 : n.length) !==
                                          (null == o ? void 0 : o.length)
                                            ? (u = !0)
                                            : null == o ||
                                              o.forEach(function (t) {
                                                (null == n
                                                  ? void 0
                                                  : n.find(function (e) {
                                                      return (
                                                        t.latitude ===
                                                          e.latitude &&
                                                        t.longitude ===
                                                          e.longitude
                                                      );
                                                    })) || (u = !0);
                                              }),
                                          u)
                                        ) {
                                          t.next = 6;
                                          break;
                                        }
                                        return t.abrupt("return");
                                      case 6:
                                        if (this.InfoCardDrawerHeight) {
                                          t.next = 11;
                                          break;
                                        }
                                        return (
                                          (t.next = 9),
                                          this.getElementClientRect(
                                            ".info-card"
                                          )
                                        );
                                      case 9:
                                        (d = t.sent),
                                          l
                                            ? (this.InfoCardDrawerHeight =
                                                (null == d
                                                  ? void 0
                                                  : d.height) || 0)
                                            : (this.InfoCardHeight =
                                                (null == d
                                                  ? void 0
                                                  : d.height) || 0);
                                      case 11:
                                        1 !== (null == o ? void 0 : o.length)
                                          ? ((h = l
                                              ? this.InfoCardDrawerHeight
                                              : this.InfoCardHeight),
                                            (p = h ? h + r : r),
                                            (s[2] = p),
                                            console.error(
                                              "InfoCardDrawerHeight",
                                              this.InfoCardDrawerHeight
                                            ),
                                            console.error(
                                              "InfoCardHeight",
                                              this.InfoCardHeight
                                            ),
                                            this.MapCtx.includePoints({
                                              padding: s,
                                              points: o,
                                              complete: function () {
                                                return m.includePointsComplete();
                                              },
                                            }))
                                          : ((this.MapCenterOffsetted = !0),
                                            this.MapCtx.setCenterOffset({
                                              offset: [0.5, l ? 0.35 : 0.5],
                                            }),
                                            this.MapCtx.moveToLocation(o[0]));
                                      case 12:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                          return function (e, i) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getHotelList",
                        value: function () {
                          var t = this;
                          return (0, w.it)({
                            data: this.HotelQueryInstance.get(),
                          })
                            .then(function (e) {
                              var i, n, a;
                              if (
                                null !== (i = e.data) &&
                                void 0 !== i &&
                                null !== (n = i.hotelList) &&
                                void 0 !== n &&
                                n.length
                              ) {
                                var c = e.data.hotelList.map(function (t) {
                                    var e,
                                      i,
                                      n,
                                      a =
                                        null === (e = t.geoList) || void 0 === e
                                          ? void 0
                                          : e.find(function (t) {
                                              return 3 == t.type;
                                            }),
                                      c = t.priceInfo.couponTag
                                        ? t.priceInfo.couponSalePrice
                                        : t.priceInfo.salePrice,
                                      l = "",
                                      r = "";
                                    if (a) {
                                      var s = (0, I.Pr)(a.lon, a.lat),
                                        u = (0, o.Z)(s, 2),
                                        d = u[0];
                                      (l = u[1]), (r = d);
                                    }
                                    return {
                                      distanceRemark:
                                        null === (i = t.hotelAddInfo) ||
                                        void 0 === i
                                          ? void 0
                                          : i.distanceRemark,
                                      imgUrl: t.logo || t.bigLogo,
                                      latitude: Number(l),
                                      longitude: Number(r),
                                      name: t.name,
                                      type: 9,
                                      typeName: "酒店",
                                      customerPoint:
                                        null === (n = t.hotelAddInfo) ||
                                        void 0 === n
                                          ? void 0
                                          : n.commonScore,
                                      hotelPrice: "¥".concat(c, "起"),
                                      hotelId: t.hotelId,
                                    };
                                  }),
                                  l = c.map(function (t) {
                                    return {
                                      lat: t.latitude,
                                      lng: t.longitude,
                                    };
                                  }),
                                  r = (0, I.SO)(l).map(function (t) {
                                    return {
                                      latitude: t.lat,
                                      longitude: t.lng,
                                    };
                                  });
                                t.setState({
                                  hotelList: c,
                                  hotelTecnetPoints: r,
                                });
                              }
                              null !== (a = e.data) &&
                                void 0 !== a &&
                                a.currentPosition &&
                                t.setState({
                                  currentPosition: e.data.currentPosition,
                                });
                            })
                            .catch(function () {
                              t.setState({ hotelList: [] });
                            });
                        },
                      },
                      {
                        key: "getHotelSearchFilter",
                        value: function () {
                          var t = this.state,
                            e = t.hotelName,
                            i = t.hotelPoint,
                            n = [i.latitude, i.longitude, e],
                            a = {
                              scenarioType: "",
                              filterType: 0,
                              sceneBitMap: 0,
                              filterID: "36",
                              type: "36",
                            };
                          return (
                            (a.title = e),
                            (a.subType = "1"),
                            (a.value = n
                              .filter(function (t) {
                                return !!t;
                              })
                              .join("|")),
                            a
                          );
                        },
                      },
                      {
                        key: "getHotelNearByRecommend",
                        value: (function () {
                          var t = (0, l.Z)(
                            (0, c.Z)().mark(function t(e) {
                              var i,
                                n,
                                a,
                                o,
                                l,
                                r,
                                s,
                                u,
                                d,
                                h = this;
                              return (0, c.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (i = this.state),
                                          (n = i.checkInDate),
                                          (a = i.checkOutDate),
                                          (o = i.hotelId),
                                          (l = i.cityId),
                                          (r = i.selectedType),
                                          (s = i.fromPage),
                                          (u = i.hotelMarker),
                                          (d = i.hotelPoint),
                                          t.abrupt(
                                            "return",
                                            (0, w.kQ)(
                                              {
                                                data: {
                                                  checkIn: n,
                                                  checkOut: a,
                                                  hotelId: o,
                                                  cityId: l,
                                                  latitude: d.latitude,
                                                  longitude: d.longitude,
                                                  recommendType: r,
                                                  fromPage: s,
                                                },
                                              },
                                              {
                                                extension: [
                                                  {
                                                    name: "CorrectVersion",
                                                    value: 710001,
                                                  },
                                                ],
                                              }
                                            )
                                              .then(function (t) {
                                                var i = t.data || {},
                                                  n = i.tabs,
                                                  a = i.datas,
                                                  o = {};
                                                if (null != a && a.length) {
                                                  var c = a.map(function (t) {
                                                      return {
                                                        lat: t.latitude,
                                                        lng: t.longitude,
                                                      };
                                                    }),
                                                    l = (0, I.SO)(c);
                                                  (o.recommendData = a),
                                                    (o.includePoints = l.map(
                                                      function (t) {
                                                        return {
                                                          latitude: t.lat,
                                                          longitude: t.lng,
                                                        };
                                                      }
                                                    )),
                                                    (o.mapMarkers =
                                                      o.includePoints.map(
                                                        function (t, e) {
                                                          var i,
                                                            n,
                                                            o =
                                                              null ===
                                                                (i =
                                                                  z
                                                                    .recommend_markers[
                                                                    a[e].type
                                                                  ]) ||
                                                              void 0 === i
                                                                ? void 0
                                                                : i.unselected;
                                                          return {
                                                            id: e,
                                                            iconPath:
                                                              (null ===
                                                                (n =
                                                                  z
                                                                    .traffic_markers[
                                                                    a[e].subType
                                                                  ]) ||
                                                              void 0 === n
                                                                ? void 0
                                                                : n.unselected) ||
                                                              o,
                                                            height: 40,
                                                            width: 40,
                                                            zIndex: 1,
                                                            latitude:
                                                              t.latitude,
                                                            longitude:
                                                              t.longitude,
                                                          };
                                                        }
                                                      )),
                                                    o.includePoints.push(d),
                                                    o.mapMarkers.push(u);
                                                } else e && ((o.recommendData = []), (o.includePoints = [d]), (o.mapMarkers = [u]));
                                                null != n &&
                                                  n.length &&
                                                  (o.recommendTabs = n),
                                                  h.setState(o);
                                              })
                                              .catch(function (t) {
                                                console.error(t);
                                              })
                                          )
                                        );
                                      case 2:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getDistanceOfPoisitions",
                        value: function (t, e) {
                          return new Promise(function (i, n) {
                            var a = ""
                              .concat(
                                "https://apis.map.qq.com/ws/distance/v1/matrix/",
                                "?from="
                              )
                              .concat(t, "&to=")
                              .concat(e, "&mode=walking&key=")
                              .concat(M);
                            (0, x.WY)({
                              method: "GET",
                              url: a,
                              success: function (t) {
                                var e, n, a;
                                if (
                                  null != t &&
                                  null !== (e = t.data) &&
                                  void 0 !== e &&
                                  null !== (n = e.result) &&
                                  void 0 !== n &&
                                  null !== (a = n.rows) &&
                                  void 0 !== a &&
                                  a.length
                                ) {
                                  var c = (0, o.Z)(t.data.result.rows, 1)[0],
                                    l = (0, o.Z)(c.elements, 1)[0];
                                  i(null == l ? void 0 : l.distance);
                                } else i(null);
                              },
                              fail: function (t) {
                                n(t);
                              },
                            });
                          });
                        },
                      },
                      {
                        key: "getNavgationPolyline",
                        value: (function () {
                          var t = (0, l.Z)(
                            (0, c.Z)().mark(function t(e, i, n) {
                              var a,
                                l,
                                r,
                                s,
                                u,
                                d,
                                h = this;
                              return (0, c.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          ((a = this.state.polyline),
                                          (l = ""
                                            .concat(e.latitude, ",")
                                            .concat(e.longitude)),
                                          (r = ""
                                            .concat(i.latitude, ",")
                                            .concat(i.longitude)),
                                          (s = n),
                                          n)
                                        ) {
                                          t.next = 9;
                                          break;
                                        }
                                        return (
                                          (t.next = 7),
                                          this.getDistanceOfPoisitions(l, r)
                                        );
                                      case 7:
                                        (u = t.sent),
                                          (s = u > 3e3 ? "car" : "walk");
                                      case 9:
                                        (d = ""
                                          .concat(
                                            "car" === s
                                              ? "https://apis.map.qq.com/ws/direction/v1/driving/"
                                              : "https://apis.map.qq.com/ws/direction/v1/walking/",
                                            "?from="
                                          )
                                          .concat(l, "&to=")
                                          .concat(
                                            r,
                                            "&output=json&callback=cb&key="
                                          )
                                          .concat(M)),
                                          (0, x.WY)({
                                            method: "GET",
                                            url: d,
                                            success: function (t) {
                                              var n, c, l;
                                              if (
                                                null != t &&
                                                null !== (n = t.data) &&
                                                void 0 !== n &&
                                                null !== (c = n.result) &&
                                                void 0 !== c &&
                                                null !== (l = c.routes) &&
                                                void 0 !== l &&
                                                l.length
                                              ) {
                                                for (
                                                  var r = (0, o.Z)(
                                                      t.data.result.routes,
                                                      1
                                                    )[0],
                                                    u = r.polyline,
                                                    d = (0, o.Z)(u, 2),
                                                    p = [
                                                      {
                                                        latitude: d[0],
                                                        longitude: d[1],
                                                      },
                                                    ],
                                                    m = {},
                                                    g = 2;
                                                  g < u.length;
                                                  g++
                                                )
                                                  (u[g] =
                                                    u[g - 2] + u[g] / 1e6),
                                                    m.latitude && m.longitude
                                                      ? (m = { latitude: u[g] })
                                                      : m.latitude
                                                      ? ((m.longitude = u[g]),
                                                        p.push(m))
                                                      : (m = {
                                                          latitude: u[g],
                                                        });
                                                if (r.distance < 5e4) {
                                                  var f = p[0],
                                                    y = p[p.length - 1],
                                                    v = p,
                                                    k = [
                                                      Object.assign({}, a, {
                                                        points: [e].concat(p, [
                                                          i,
                                                        ]),
                                                      }),
                                                    ];
                                                  return (
                                                    e &&
                                                      e.latitude !==
                                                        f.latitude &&
                                                      e.longitude !==
                                                        f.longitude &&
                                                      v.unshift(e),
                                                    i &&
                                                      i.latitude !==
                                                        y.latitude &&
                                                      i.longitude !==
                                                        y.longitude &&
                                                      v.push(i),
                                                    void h.setState({
                                                      polyline: Object.assign(
                                                        {},
                                                        a,
                                                        { points: p }
                                                      ),
                                                      distanceString:
                                                        r.distance > 999
                                                          ? "".concat(
                                                              (
                                                                r.distance / 1e3
                                                              ).toFixed(2),
                                                              "km"
                                                            )
                                                          : "".concat(
                                                              r.distance,
                                                              "米"
                                                            ),
                                                      duration: r.duration,
                                                      polylineVisible: !0,
                                                      transportation: s,
                                                      polylines: k,
                                                      includePoints: v,
                                                    })
                                                  );
                                                }
                                                h.setState(
                                                  {
                                                    transportation: s,
                                                    polylines: [],
                                                    polylineVisible: !1,
                                                  },
                                                  function () {
                                                    (h.MapCenterOffsetted = !0),
                                                      h.MapCtx.setCenterOffset({
                                                        offset: [0.5, 0.35],
                                                      }),
                                                      h.MapCtx.moveToLocation(
                                                        i
                                                      );
                                                  }
                                                );
                                              }
                                            },
                                            fail: function (t) {
                                              console.log(t);
                                            },
                                          });
                                      case 12:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                          return function (e, i, n) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onNavigateBy",
                        value: function (t) {
                          var e = this,
                            i = this.state,
                            n = i.transportation,
                            a = i.fromPoint,
                            o = i.toPoint;
                          t !== n &&
                            a &&
                            this.setState({ transportation: t }, function () {
                              e.getNavgationPolyline(a, o, t);
                            });
                        },
                      },
                      {
                        key: "openMapApp",
                        value: function (t, e) {
                          if (!y().canIUse("MapContext.openMapApp"))
                            return (
                              console.log(
                                "Taro.canIUse('MapContext.openMapApp')"
                              ),
                              void y().showModal({
                                title: "提示",
                                content:
                                  "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。",
                              })
                            );
                          try {
                            this.MapCtx.openMapApp &&
                              this.MapCtx.openMapApp({
                                latitude: Number(t.latitude),
                                longitude: Number(t.longitude),
                                destination: e,
                                fail: function () {},
                              });
                          } catch (t) {
                            console.log("openMapApp fail", t),
                              (0, b.showToast)(
                                "获取位置信息失败，请检查您是否打开了GPS定位"
                              );
                          }
                        },
                      },
                      {
                        key: "goBack",
                        value: function () {
                          y().navigateBack();
                        },
                      },
                      {
                        key: "getCurrentCity",
                        value: function () {
                          var t = this;
                          (0, _.PA)(
                            function (e) {
                              null != e &&
                                e.cityId &&
                                t.setState({ currentCity: e });
                            },
                            function () {}
                          );
                        },
                      },
                      {
                        key: "findMyPosition",
                        value: function (t) {
                          var e = this,
                            i = function (i) {
                              var n = {
                                latitude: Number(
                                  null == i ? void 0 : i.latitude
                                ),
                                longitude: Number(
                                  null == i ? void 0 : i.longitude
                                ),
                              };
                              if (t) return e.setState({ myPoint: n });
                              (e.MapCenterOffsetted = !0),
                                e.MapCtx.setCenterOffset({
                                  offset: [0.5, 0.35],
                                }),
                                e.MapCtx.moveToLocation(n);
                            };
                          if (this.state.myPoint) return i(this.state.myPoint);
                          (0, _.y9)("gcj02", !0)
                            .then(function (t) {
                              i(t);
                            })
                            .catch(function () {
                              e.authUserLocation(function () {
                                (0, _.y9)("gcj02", !0)
                                  .then(function (t) {
                                    i(t);
                                  })
                                  .catch();
                              });
                            });
                        },
                      },
                      {
                        key: "findHotelPostion",
                        value: (function () {
                          var t = (0, l.Z)(
                            (0, c.Z)().mark(function t() {
                              return (0, c.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        (this.MapCenterOffsetted = !0),
                                          this.MapCtx.setCenterOffset({
                                            offset: [0.5, 0.35],
                                          }),
                                          this.MapCtx.moveToLocation(
                                            this.state.hotelPoint
                                          );
                                      case 3:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "authUserLocation",
                        value: function (t) {
                          y().showModal({
                            title: "请求授权当前位置",
                            content: "需要获取您的地理位置，请确认授权",
                            success: function (e) {
                              e.confirm
                                ? y().openSetting({
                                    success: (function () {
                                      var e = (0, l.Z)(
                                        (0, c.Z)().mark(function e(i) {
                                          return (0, c.Z)().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  i.authSetting[
                                                    "scope.userLocation"
                                                  ]
                                                    ? t()
                                                    : y().showToast({
                                                        title: "授权失败",
                                                        icon: "none",
                                                        duration: 1e3,
                                                      });
                                                case 1:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })(),
                                  })
                                : e.cancel;
                            },
                          });
                        },
                      },
                      {
                        key: "onClickRecommendTab",
                        value: (function () {
                          var t = (0, l.Z)(
                            (0, c.Z)().mark(function t(e) {
                              var i,
                                n,
                                a,
                                o,
                                l,
                                r,
                                s,
                                u = this;
                              return (0, c.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          (this.ubtTrace(227976, {
                                            PageId: this.pageId,
                                          }),
                                          (i = this.state),
                                          (n = i.selectedType),
                                          (a = i.hotelList),
                                          (o = i.hotelTecnetPoints),
                                          (l = i.hotelPoint),
                                          (r = i.hotelMarker),
                                          n !== e.recommendType)
                                        ) {
                                          t.next = 4;
                                          break;
                                        }
                                        return t.abrupt("return");
                                      case 4:
                                        (s = {
                                          selectedType: e.recommendType,
                                          polylines: [],
                                          hotelPositionVisible: !0,
                                          polylineVisible: !1,
                                        }),
                                          9 === e.recommendType &&
                                            ((s.recommendData = a),
                                            (s.includePoints = o),
                                            (s.mapMarkers = o.map(function (
                                              t,
                                              e
                                            ) {
                                              return {
                                                id: e,
                                                iconPath:
                                                  z.recommend_markers[9]
                                                    .unselected,
                                                height: 40,
                                                width: 40,
                                                zIndex: 1,
                                                latitude: t.latitude,
                                                longitude: t.longitude,
                                              };
                                            })),
                                            s.includePoints.push(l),
                                            s.mapMarkers.push(r)),
                                          this.setState(s, function () {
                                            9 !== e.recommendType &&
                                              u.getHotelNearByRecommend(!0);
                                          });
                                      case 7:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onClickRecommendItem",
                        value: function (t, e) {
                          var i = this;
                          this.ubtTrace(227983, { PageId: this.pageId });
                          var n = "".concat(t.type, "_").concat(e),
                            a = this.state,
                            c = a.mapMarkers,
                            l = a.selectedItem,
                            r = a.recommendData,
                            s = a.hotelPoint;
                          if (n !== l) {
                            var u = [];
                            null == c ||
                              c.forEach(function (t) {
                                var i, n;
                                if ([99, 100].includes(t.id)) u.push(t);
                                else {
                                  var a = t.id === e,
                                    o = a ? "selected" : "unselected",
                                    c = r.find(function (e, i) {
                                      return i === t.id;
                                    }),
                                    l =
                                      null ===
                                        (i = z.recommend_markers[c.type]) ||
                                      void 0 === i
                                        ? void 0
                                        : i[o],
                                    s =
                                      null ===
                                        (n = z.traffic_markers[c.subType]) ||
                                      void 0 === n
                                        ? void 0
                                        : n[o];
                                  (t.iconPath = s || l),
                                    (t.width = a ? 60 : 40),
                                    (t.height = a
                                      ? Math.floor(10080 / 123)
                                      : 40),
                                    (t.zIndex = a ? 9 : 1),
                                    u.push(t);
                                }
                              }),
                              this.setState(
                                { selectedItem: n, mapMarkers: u },
                                function () {
                                  var e = (0, I.SO)([
                                      { lat: t.latitude, lng: t.longitude },
                                    ]),
                                    n = (0, o.Z)(e, 1)[0],
                                    a = {
                                      latitude: Number(n.lat),
                                      longitude: Number(n.lng),
                                    };
                                  (a.latitude === s.latitude &&
                                    a.longitude === s.longitude) ||
                                    (i.setState({ fromPoint: s, toPoint: a }),
                                    i.getNavgationPolyline(s, a));
                                }
                              );
                          }
                        },
                      },
                      {
                        key: "onNavToPosition",
                        value: function (t) {
                          var e = (0, I.Pr)(t.longitude, t.latitude),
                            i = (0, o.Z)(e, 2),
                            n = i[0],
                            a = i[1];
                          this.openMapApp(
                            { latitude: a, longitude: n },
                            t.name
                          );
                        },
                      },
                      {
                        key: "onToggleRecommendTab",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.defaultFromPoint,
                            n = e.defaultMapMarkers,
                            a = e.hotelPoint,
                            c = e.selectedType,
                            l = (0, o.Z)(e.recommendData, 1)[0],
                            r = (0, o.Z)(e.recommendTabs, 1)[0],
                            s = e.includePoints,
                            u = e.paddingBottom,
                            d = e.includePointsPadding;
                          if (!(c || (null != l && l.type)))
                            return this.onClickRecommendTab(r);
                          var h =
                              (c
                                ? this.InfoCardHeight
                                : this.InfoCardDrawerHeight) + u,
                            p = c ? null : null == l ? void 0 : l.type,
                            m = { selectedType: p };
                          if (!p)
                            return (
                              (m.includePoints = i ? [i, a] : [a]),
                              (m.mapMarkers = n),
                              (m.centerPoint = a),
                              (m.fromPoint = i),
                              (m.toPoint = a),
                              (m.selectedItem = null),
                              (m.polylines = []),
                              (m.hotelPositionVisible = !0),
                              (m.polylineVisible = !1),
                              this.setState(m, function () {
                                i && t.getNavgationPolyline(i, a);
                              })
                            );
                          this.setState(m, function () {
                            1 !== (null == s ? void 0 : s.length) &&
                              ((d[2] = h),
                              t.MapCtx.includePoints({
                                padding: d,
                                points: s,
                                complete: function () {
                                  return t.includePointsComplete();
                                },
                              }));
                          });
                        },
                      },
                      {
                        key: "includePointsComplete",
                        value: function () {
                          this.MapCenterOffsetted &&
                            ((this.MapCenterOffsetted = !1),
                            this.MapCtx.setCenterOffset({
                              offset: [0.5, 0.5],
                            }));
                        },
                      },
                      {
                        key: "isBarActive",
                        value: function (t) {
                          return (
                            "action" +
                            (0, N.gP)(
                              this.state.transportation === t,
                              " active"
                            )
                          );
                        },
                      },
                      {
                        key: "getElementClientRect",
                        value: function (t) {
                          return new Promise(function (e) {
                            y()
                              .createSelectorQuery()
                              .select(t)
                              .boundingClientRect(e)
                              .exec();
                          });
                        },
                      },
                      {
                        key: "toRecommendDetail",
                        value: function (t) {
                          var e = this.state.cityId;
                          9 === t.type
                            ? this.toHotelDetail({
                                cityId: e,
                                hotelName: t.name,
                                hotelId: t.hotelId,
                              })
                            : 4 === t.type &&
                              t.url &&
                              this.toTicketDetail(t.url);
                        },
                      },
                      {
                        key: "toHotelDetail",
                        value: function (t) {
                          var e = this.state,
                            i = e.currentPosition,
                            n = {
                              query: {
                                checkInDate: e.checkInDate,
                                checkOutDate: e.checkOutDate,
                                cityId: e.cityId,
                                cityName: e.cityName,
                                fromPage: "applets_hotel_map",
                              },
                              hotel: t,
                              geoList: null != i && i.geoList ? i.geoList : [],
                              posrem:
                                (null == i ? void 0 : i.positionRemark) || "",
                              positionRemarkType:
                                (null == i ? void 0 : i.keywordType) || "",
                            };
                          y().navigateTo({
                            url: "/pages/hotel/detail/detail?data=".concat(
                              encodeURIComponent(JSON.stringify(n))
                            ),
                          });
                        },
                      },
                      {
                        key: "toTicketDetail",
                        value: function (t) {
                          var e = t.split("?"),
                            i = (0, o.Z)(e, 2),
                            n = (i[0], i[1]),
                            a = new Z.Z(n).get("scenicSpotId"),
                            c =
                              "/pages/ticket/packageA/detail/detail?scenicSpotId=".concat(
                                a,
                                "&source=wechat"
                              );
                          y().navigateTo({ url: c });
                        },
                      },
                      {
                        key: "toIntelligentDetail",
                        value: function () {
                          var t = this.state,
                            e = t.currentCity,
                            i = t.cityName,
                            n = t.hotelName,
                            a = t.checkInDate,
                            o = t.myPoint,
                            c = t.hotelPoint,
                            l = {
                              fromLocation: e.cityName,
                              toLocation: n,
                              departDate: a,
                              fromBaiduGeoPointFlag: !0,
                              fromGeoPoint: {
                                city: e.cityName,
                                lat: Number(o.latitude),
                                lng: Number(o.longitude),
                                name: e.address,
                              },
                              toBaiduGeoPointFlag: !0,
                              toGeoPoint: {
                                city: i,
                                lat: Number(c.latitude),
                                lng: Number(c.longitude),
                                name: n,
                              },
                            };
                          this.navigateTo({
                            data: l,
                            url: "/pages/smart/packageA/searchList/index",
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.showLocation,
                            n = e.mapHeight,
                            a = e.mapWidth,
                            o = e.mapSettings,
                            c = e.transportation,
                            l = e.hotelAddress,
                            s = e.hotelName,
                            u = e.hotelPoint,
                            d = e.posrem,
                            h = e.distanceString,
                            p = e.duration,
                            m = e.centerPoint,
                            f = e.polylineVisible,
                            y = e.polylines,
                            v = e.recommendTabs,
                            w = e.recommendData,
                            x = e.mapMarkers,
                            b = e.selectedType,
                            _ = e.selectedItem,
                            I = e.cityId,
                            C = e.currentCity,
                            Z = "walk" === c,
                            M = "padding-top:".concat(
                              k.ZP.statusBarHeight,
                              "px"
                            ),
                            B = "custom-map ".concat(g.default.zxTyStr),
                            V = { height: n, width: a },
                            D =
                              (null == C ? void 0 : C.cityId) && C.cityId != I;
                          return (0, T.BX)(P.Map, {
                            id: "customMap",
                            className: B,
                            setting: o,
                            markers: x,
                            latitude: null == m ? void 0 : m.latitude,
                            longitude: null == m ? void 0 : m.longitude,
                            polyline: y,
                            showLocation: i,
                            style: V,
                            children: [
                              (0, T.BX)(P.View, {
                                className: "top-bar",
                                style: M,
                                children: [
                                  (0, T.tZ)(P.View, {
                                    className: "lbox",
                                    children: (0, T.tZ)(P.Image, {
                                      className: "back-icon",
                                      src: z.back_icon,
                                      id: "AXFW",
                                      onClick: this.goBack.bind(this),
                                    }),
                                  }),
                                  (0, T.tZ)(P.View, {
                                    slot: "callout",
                                    className: "nav",
                                    style: (0, N.LP)(f, "flex"),
                                    children: (0, T.BX)(P.View, {
                                      className: "actions-wrapper",
                                      children: [
                                        (0, T.tZ)(P.View, {
                                          className: this.isBarActive("car"),
                                          id: "AXFX",
                                          onClick: this.onNavigateBy.bind(
                                            this,
                                            "car"
                                          ),
                                          children: "驾车",
                                        }),
                                        (0, T.tZ)(P.View, {
                                          className: this.isBarActive("walk"),
                                          id: "AXFY",
                                          onClick: this.onNavigateBy.bind(
                                            this,
                                            "walk"
                                          ),
                                          children: "步行",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, T.BX)(P.View, {
                                className: "cover-view-card",
                                children: [
                                  (0, T.BX)(P.View, {
                                    className: "location",
                                    children: [
                                      (0, T.tZ)(P.Image, {
                                        className: "hotel",
                                        id: "AXFZ",
                                        onClick:
                                          this.findHotelPostion.bind(this),
                                        src: z.hotel_icon,
                                      }),
                                      (0, T.tZ)(P.Image, {
                                        className: "current",
                                        id: "AXFa",
                                        onClick: this.findMyPosition.bind(
                                          this,
                                          null
                                        ),
                                        src: z.mypoi_icon,
                                      }),
                                    ],
                                  }),
                                  (0, T.BX)(P.View, {
                                    className: "info-card",
                                    children: [
                                      (0, T.BX)(P.View, {
                                        className: "to-other",
                                        style: (0, N.LP)(D, "flex"),
                                        children: [
                                          (0, T.tZ)(P.Image, {
                                            className: "bg",
                                            src: z.to_other[g.default.zxTyStr],
                                            mode: "widthFix",
                                          }),
                                          (0, T.BX)(P.View, {
                                            className: "tit-wrap",
                                            children: [
                                              (0, T.BX)(P.Text, {
                                                className: "tit primary",
                                                children: [
                                                  "从",
                                                  null == C
                                                    ? void 0
                                                    : C.cityName,
                                                  "如何去酒店？",
                                                ],
                                              }),
                                              (0, T.tZ)(P.Text, {
                                                className: "desc",
                                                children:
                                                  "已为您筛选省时省钱路线",
                                              }),
                                            ],
                                          }),
                                          (0, T.BX)(P.View, {
                                            className: "action",
                                            id: "AXFb",
                                            onClick: this.toIntelligentDetail,
                                            children: [
                                              (0, T.tZ)(P.Text, {
                                                className: "primary",
                                                children: "去查看",
                                              }),
                                              (0, T.tZ)(P.Text, {
                                                className:
                                                  "iconfont ifont-arr primary",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, T.BX)(P.View, {
                                        className: "info-wrapper",
                                        style: (0, N.LP)(!b),
                                        children: [
                                          (0, T.tZ)(P.View, {
                                            className: "title",
                                            children: s,
                                          }),
                                          (0, T.BX)(P.View, {
                                            className: "address",
                                            children: [
                                              (0, T.tZ)(P.Text, {
                                                className:
                                                  "iconfont ifont-location",
                                              }),
                                              (0, T.tZ)(P.View, {
                                                children: l,
                                              }),
                                            ],
                                          }),
                                          (0, T.BX)(P.View, {
                                            className: "distance",
                                            style: (0, N.LP)(f, "flex"),
                                            children: [
                                              (0, T.tZ)(P.Text, {
                                                className:
                                                  "iconfont ifont-".concat(c),
                                              }),
                                              (0, T.BX)(P.View, {
                                                children: [
                                                  "距",
                                                  d,
                                                  Z ? "步行" : "驾车",
                                                  h,
                                                  "，约",
                                                  p,
                                                  "分钟",
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, T.BX)(P.View, {
                                            className: "actions-wrapper",
                                            children: [
                                              (0, T.tZ)(P.View, {
                                                className:
                                                  "action booking ".concat(
                                                    g.default.zxTyStr
                                                  ),
                                                id: "AXFc",
                                                onClick: this.goBack.bind(this),
                                                children: (0, T.tZ)(P.Text, {
                                                  children: "看房型",
                                                }),
                                              }),
                                              (0, T.BX)(P.View, {
                                                className: "action btn-primary",
                                                id: "AXFd",
                                                onClick: this.openMapApp.bind(
                                                  this,
                                                  u,
                                                  d
                                                ),
                                                children: [
                                                  (0, T.tZ)(P.Text, {
                                                    className:
                                                      "iconfont ifont-gps",
                                                  }),
                                                  (0, T.tZ)(P.Text, {
                                                    children: "去这里",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, T.BX)(P.View, {
                                        className: "nearby-wrap",
                                        children: [
                                          (0, T.tZ)(P.View, {
                                            className: "top-arrow-wrap",
                                            id: "AXFe",
                                            onClick: this.onToggleRecommendTab,
                                            children: (0, T.tZ)(P.Image, {
                                              className: "arrow".concat(
                                                (0, N.gP)(b, " down")
                                              ),
                                              src: z.top_arrow,
                                            }),
                                          }),
                                          (0, T.tZ)(P.View, {
                                            className: "title",
                                            style: (0, N.LP)(!b),
                                            children: "周边推荐",
                                          }),
                                          (0, T.tZ)(P.View, {
                                            className: "tabs".concat(
                                              (0, N.gP)(b, " select")
                                            ),
                                            children:
                                              null == v
                                                ? void 0
                                                : v.map(function (e, i) {
                                                    return (0,
                                                    T.BX)(P.View, { className: "tab", id: "AXFf", onClick: t.onClickRecommendTab.bind(t, e), children: [(0, T.tZ)(P.Image, { className: "icon", src: e.icon }), (0, T.tZ)(P.Text, { className: "txt".concat((0, N.gP)(b === e.recommendType, " primary")), children: e.recommendName }), b === e.recommendType && (0, T.tZ)(P.Image, { className: "btline", src: z.tab_underline[g.default.zxTyStr] })] }, i);
                                                  }),
                                          }),
                                          (0, T.tZ)(P.View, {
                                            className: "list".concat(
                                              (0, N.gP)(b, " active")
                                            ),
                                            children:
                                              null == w
                                                ? void 0
                                                : w.map(function (e, i) {
                                                    var n,
                                                      a,
                                                      o =
                                                        _ ===
                                                        ""
                                                          .concat(e.type, "_")
                                                          .concat(i),
                                                      c = "item".concat(
                                                        (0, N.gP)(
                                                          o,
                                                          " selected"
                                                        )
                                                      ),
                                                      l = (0, r.Z)(
                                                        {
                                                          backgroundImage:
                                                            "url(".concat(
                                                              z.point_bg[
                                                                g.default
                                                                  .zxTyStr
                                                              ],
                                                              ")"
                                                            ),
                                                        },
                                                        (0, N.LP)(
                                                          e.customerPoint,
                                                          "flex"
                                                        )
                                                      ),
                                                      s = [4, 9].includes(
                                                        e.type
                                                      ),
                                                      u = ![9].includes(e.type);
                                                    return (0, T.BX)(
                                                      P.View,
                                                      {
                                                        className: c,
                                                        id: "AXFg",
                                                        onClick:
                                                          t.onClickRecommendItem.bind(
                                                            t,
                                                            e,
                                                            i
                                                          ),
                                                        children: [
                                                          (0, T.tZ)(P.View, {
                                                            className: "left",
                                                            style: (0, N.LP)(
                                                              e.imgUrl
                                                            ),
                                                            children: (0, T.tZ)(
                                                              P.Image,
                                                              {
                                                                className:
                                                                  "img",
                                                                src: e.imgUrl,
                                                              }
                                                            ),
                                                          }),
                                                          (0, T.BX)(P.View, {
                                                            className: "right",
                                                            children: [
                                                              (0, T.tZ)(
                                                                P.View,
                                                                {
                                                                  className:
                                                                    "name",
                                                                  children:
                                                                    e.name,
                                                                }
                                                              ),
                                                              (0, T.BX)(
                                                                P.View,
                                                                {
                                                                  className:
                                                                    "point-wrap",
                                                                  children: [
                                                                    (0, T.tZ)(
                                                                      P.View,
                                                                      {
                                                                        className:
                                                                          "point",
                                                                        style:
                                                                          l,
                                                                        children:
                                                                          e.customerPoint,
                                                                      }
                                                                    ),
                                                                    (0, T.tZ)(
                                                                      P.Text,
                                                                      {
                                                                        className:
                                                                          "price",
                                                                        style:
                                                                          (0,
                                                                          N.LP)(
                                                                            e.hotelPrice
                                                                          ),
                                                                        children:
                                                                          e.hotelPrice,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, T.BX)(
                                                                P.View,
                                                                {
                                                                  className:
                                                                    "price",
                                                                  style: (0,
                                                                  N.LP)(
                                                                    e.avgPrice
                                                                  ),
                                                                  children: [
                                                                    "¥",
                                                                    e.avgPrice,
                                                                    "/人",
                                                                  ],
                                                                }
                                                              ),
                                                              (0, T.tZ)(
                                                                P.View,
                                                                {
                                                                  className:
                                                                    "tags",
                                                                  children:
                                                                    null ===
                                                                      (n =
                                                                        e.descTags) ||
                                                                    void 0 ===
                                                                      n ||
                                                                    null ===
                                                                      (a =
                                                                        n.filter(
                                                                          function (
                                                                            t
                                                                          ) {
                                                                            return !!t;
                                                                          }
                                                                        )) ||
                                                                    void 0 === a
                                                                      ? void 0
                                                                      : a.map(
                                                                          function (
                                                                            t,
                                                                            e
                                                                          ) {
                                                                            return (0,
                                                                            T.tZ)(
                                                                              P.Text,
                                                                              {
                                                                                children:
                                                                                  t,
                                                                              },
                                                                              e
                                                                            );
                                                                          }
                                                                        ),
                                                                }
                                                              ),
                                                              (0, T.tZ)(
                                                                P.View,
                                                                {
                                                                  className:
                                                                    "open-time",
                                                                  children:
                                                                    e.openTime,
                                                                }
                                                              ),
                                                              (0, T.tZ)(
                                                                P.View,
                                                                {
                                                                  className:
                                                                    "remark",
                                                                  children:
                                                                    e.distanceRemark,
                                                                }
                                                              ),
                                                              (0, T.BX)(
                                                                P.View,
                                                                {
                                                                  className:
                                                                    "nav-btn-wrap",
                                                                  id: "AXFh",
                                                                  onClick:
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      return t.stopPropagation();
                                                                    },
                                                                  children: [
                                                                    u &&
                                                                      (0, T.BX)(
                                                                        P.View,
                                                                        {
                                                                          className:
                                                                            "navto",
                                                                          id: "AXFi",
                                                                          onClick:
                                                                            t.onNavToPosition.bind(
                                                                              t,
                                                                              e
                                                                            ),
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              T.tZ)(
                                                                                P.Image,
                                                                                {
                                                                                  className:
                                                                                    "nav-arrow",
                                                                                  src: z.navigator_arrow,
                                                                                }
                                                                              ),
                                                                              " 导航",
                                                                            ],
                                                                        }
                                                                      ),
                                                                    s &&
                                                                      (0, T.tZ)(
                                                                        P.View,
                                                                        {
                                                                          className:
                                                                            "nav-detail btn-primary",
                                                                          id: "AXFj",
                                                                          onClick:
                                                                            t.toRecommendDetail.bind(
                                                                              t,
                                                                              e
                                                                            ),
                                                                          children:
                                                                            "详情",
                                                                        }
                                                                      ),
                                                                  ],
                                                                }
                                                              ),
                                                            ],
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
                                ],
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(m.default.Component))
              ) || n;
          Page(
            (0, a.createPageConfig)(
              B,
              "pages/hotel/map/map",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "地图",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#fff",
                navigationStyle: "custom",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(28616);
        }),
          t.O();
      },
    ]);
})();
