!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [25859],
    {
      39339: function (e, t, i) {
        i.d(t, {
          u: function () {
            return d;
          },
        }),
          i(52500);
        var n = i(71515),
          r = i(49120),
          a = i(85423),
          c = i(34229),
          l = i(4845),
          o = i(79910),
          s = i(48813);
        function u(e) {
          var t,
            i = e.insuranceCompany,
            r = e.product,
            u = e.data,
            d = e.insuranceLogo,
            f = e.onClose,
            h = e.onAddInsurance,
            m = u.insDetailImgModel,
            p = u.insDetailInfoContents,
            g = u.insDetailBriefDesc,
            v = u.insUnderNoticContent,
            y = r || {},
            N = y.productName,
            C = y.price,
            I = y.unit,
            Z = m.insTopDetailImgModel,
            x = m.insCenterDetailImg,
            b = m.insCenterDetailImgContent,
            w = p.find(function (e) {
              return "SAFEGUARD_DUTY" == e.type;
            }),
            T = p.find(function (e) {
              return "CLAIMS_PROCESS" == e.type;
            }),
            k = {
              航空意外险: "inland-ins",
              全球旅行险: "delay-ins",
              航空组合险: "combine-ins",
            }[N],
            B = o.Z.convertLinkRickTextToArray(v, null),
            A =
              null != r && r.selected
                ? "已添加保障"
                : "添加保障 ".concat(C, "/").concat(I),
            F =
              "https://images3.c-ctrip.com/ztrip/zhixingios/baoxianshoumai/xianqin/hdbz_biaoti.png",
            D =
              "https://images3.c-ctrip.com/ztrip/zhixingios/baoxianshoumai/xianqin/bzxq_biaoti.png",
            V =
              "https://images3.c-ctrip.com/ztrip/zhixingios/baoxianshoumai/xianqin/bxsm_biaoti.png",
            L =
              "https://images3.c-ctrip.com/ztrip/zhixingios/baoxianshoumai/xianqin/lipei_biaoti.png",
            S = function (e) {
              var t = e.title;
              return (0, s.BX)(n.View, {
                className: "content-tit flex-center",
                children: [
                  (0, s.tZ)(n.View, { className: "title-mark left" }),
                  (0, s.tZ)(n.Image, {
                    className: "title-img",
                    src: t,
                    mode: "heightFix",
                  }),
                  (0, s.tZ)(n.View, { className: "title-mark right" }),
                ],
              });
            };
          return (0, s.BX)(n.View, {
            className: "ins-detail-cont flex ".concat(k || "inland-ins"),
            children: [
              (0, s.tZ)(n.Image, {
                className: "ins-icon",
                src: null == Z ? void 0 : Z.icon,
              }),
              (0, s.BX)(n.View, {
                className: "ins-hd",
                children: [
                  (0, s.tZ)(n.Image, {
                    src: null == Z ? void 0 : Z.textImg,
                    className: "tit-img",
                    mode: "heightFix",
                  }),
                  !!i &&
                    !!d &&
                    (0, s.BX)(n.View, {
                      className: "ins-desc",
                      children: [
                        (0, s.tZ)(n.Image, {
                          className: "desc-logo",
                          mode: "heightFix",
                          src: d,
                        }),
                        (0, s.BX)(n.Text, {
                          className: "desc-txt",
                          children: ["由", i, "承保"],
                        }),
                      ],
                    }),
                ],
              }),
              (0, s.BX)(n.ScrollView, {
                className: "flex-1 cont-list",
                children: [
                  (0, s.BX)(n.View, {
                    className: "white-card",
                    children: [
                      (0, s.tZ)(S, { title: F }),
                      (0, s.tZ)(n.Image, {
                        className: "ins-feature",
                        mode: "widthFix",
                        lazyLoad: !0,
                        src: null == Z ? void 0 : Z.featureImg,
                      }),
                    ],
                  }),
                  (0, s.BX)(n.View, {
                    className: "white-card",
                    children: [
                      (0, s.tZ)(n.Image, {
                        className: "ins-center",
                        mode: "widthFix",
                        lazyLoad: !0,
                        src: x,
                      }),
                      (0, s.tZ)(n.Text, { className: "tip-cont", children: b }),
                    ],
                  }),
                  (0, s.BX)(n.View, {
                    className: "white-card",
                    children: [
                      (0, s.tZ)(S, { title: D }),
                      (0, s.tZ)(
                        function (e) {
                          var t = e.list;
                          return (0, s.tZ)(n.View, {
                            className: "ins-detail-table",
                            children: (0, s.BX)(a.iA, {
                              children: [
                                (0, s.BX)(a.Tr, {
                                  children: [
                                    (0, s.tZ)(a.Th, { children: "保障内容" }),
                                    (0, s.tZ)(a.Th, { children: "最高保额" }),
                                  ],
                                }),
                                t.map(function (e) {
                                  return (0,
                                  s.tZ)(s.HY, { children: (0, s.BX)(a.Tr, { children: [(0, s.tZ)(a.Td, { children: e.insContent }), (0, s.tZ)(a.Td, { children: e.insAmount })] }) });
                                }),
                              ],
                            }),
                          });
                        },
                        { list: (null == w ? void 0 : w.insContentList) || [] }
                      ),
                    ],
                  }),
                  (0, s.BX)(n.View, {
                    className: "white-card",
                    children: [
                      (0, s.tZ)(S, { title: L }),
                      (0, s.tZ)(
                        function (e) {
                          var t = e.procs;
                          return (0, s.tZ)(n.View, {
                            className: "claims-process",
                            children: t.map(function (e, t) {
                              return (0,
                              s.BX)(n.View, { className: "process", children: [(0, s.BX)(n.View, { className: "proc-hd flex-align-items-center", children: [(0, s.tZ)(n.View, { className: "proc-num flex-center", children: t + 1 }), (0, s.tZ)(n.View, { className: "proc-tit", children: e.insContent })] }), (0, s.tZ)(n.View, { className: "proc-bd", children: e.insAmount })] }, e.insContent);
                            }),
                          });
                        },
                        { procs: (null == T ? void 0 : T.insContentList) || [] }
                      ),
                      (0, s.tZ)(c.ZtRichText, {
                        className: "tip-cont",
                        nodes:
                          (null == T || null === (t = T.bottom) || void 0 === t
                            ? void 0
                            : t.title) || "",
                      }),
                    ],
                  }),
                  (0, s.BX)(n.View, {
                    className: "white-card",
                    children: [
                      (0, s.tZ)(S, { title: V }),
                      (0, s.tZ)(c.ZtRichText, {
                        className: "ins-detail-desc",
                        nodes: g,
                      }),
                      (0, s.tZ)(n.View, { className: "divider" }),
                      (0, s.tZ)(n.View, {
                        className: "ins-detail-tip",
                        children:
                          null == B
                            ? void 0
                            : B.map(function (e) {
                                return "txt" == e.type
                                  ? (0, s.tZ)(n.Text, { children: e.val })
                                  : "url" == e.type
                                  ? (0, s.tZ)(n.Navigator, {
                                      className: "navigator color-primary",
                                      url: e.url,
                                      children: e.val,
                                    })
                                  : (0, s.tZ)(s.HY, {});
                              }),
                      }),
                    ],
                  }),
                ],
              }),
              r &&
                (0, s.tZ)(l.Z, {
                  onConfirm: function () {
                    null == h || h(r), null == f || f();
                  },
                  buttonText: A,
                }),
            ],
          });
        }
        var d = function (e) {
          var t = e.insuranceCompany,
            i = e.insuranceLogo,
            n = e.product,
            a = e.data,
            c = e.onAddInsurance;
          if (a) {
            var l = (0, r.getCurrentPage)();
            null == l ||
              l.showCommonDrawer({
                hideTitle: !0,
                hideClose: !1,
                className: "ins-detail-drawer",
                content: function (e) {
                  var r = e.onClose;
                  return (0, s.tZ)(u, {
                    insuranceCompany: t,
                    insuranceLogo: i,
                    product: n,
                    data: a,
                    onAddInsurance: c,
                    onClose: r,
                  });
                },
              });
          }
        };
      },
      32132: function (e, t, i) {
        i.d(t, {
          Al: function () {
            return m;
          },
          IY: function () {
            return o;
          },
          NZ: function () {
            return f;
          },
          Od: function () {
            return s;
          },
          cr: function () {
            return d;
          },
          e0: function () {
            return u;
          },
          hF: function () {
            return h;
          },
          lr: function () {
            return p;
          },
          pq: function () {
            return v;
          },
          sK: function () {
            return l;
          },
          vT: function () {
            return g;
          },
          yi: function () {
            return c;
          },
        });
        var n = i(17377),
          r = i(79792),
          a = "710024",
          c = (0, n.ZP)({
            serviceCode: "17421",
            channel: r.default.flight_channel,
            path: "IntlFlightOrderCreate",
            correctVersion: a,
          }),
          l = (0, n.ZP)({
            serviceCode: "17421",
            channel: r.default.flight_channel,
            path: "BookingVerify",
          }),
          o = (0, n.ZP)({
            serviceCode: "17421",
            channel: r.default.flight_channel,
            path: "cancelOrder",
          }),
          s = (0, n.ZP)({
            serviceCode: "24608",
            channel: r.default.flight_channel,
            path: "IntlFlightDetailSearch",
            correctVersion: a,
          }),
          u = (0, n.ZP)({
            serviceCode: "24608",
            channel: r.default.flight_channel,
            path: "IntlFlightFillInPage",
            correctVersion: a,
          }),
          d = (0, n.ZP)({
            serviceCode: "17421",
            channel: r.default.flight_channel,
            path: "IntlOrderDetail",
          }),
          f = (0, n.ZP)({
            serviceCode: "16484",
            channel: r.default.flight_channel,
            path: "submitCancelReason",
          }),
          h = (0, n.ZP)({
            serviceCode: "24608",
            channel: r.default.flight_channel,
            path: "IntlFlightListSearch",
            correctVersion: a,
          }),
          m = (0, n.ZP)({
            serviceCode: "17420",
            channel: r.default.flight_channel,
            path: "pageRemindInfo",
          }),
          p = (0, n.ZP)({
            serviceCode: "24608",
            channel: r.default.flight_channel,
            path: "intFlightBookingValidation",
          }),
          g = (0, n.ZP)({
            serviceCode: "17420",
            channel: r.default.flight_channel,
            path: "receiveArrCityCoupon",
          }),
          v = (0, n.ZP)({
            serviceCode: "17420",
            channel: r.default.flight_channel,
            path: "closeRemind",
          });
      },
      61695: function (e, t, i) {
        var n = i(79301),
          r = i(95308),
          a = i(90983),
          c = i(22276),
          l = i(2326),
          o = i(8271),
          s = i.n(o),
          u = i(79910),
          d = "YYYY-MM-DD",
          f = {
            handleIntlFlightData: function (e) {
              var t = this;
              return e.map(function (e) {
                var i,
                  n,
                  r = e.flightList,
                  a = e.travelTime,
                  c = e.policyInfo,
                  o = e.changeCityList,
                  f = e.specialTag,
                  h = e.tagUrl,
                  m = r[0],
                  p = r[r.length - 1],
                  g = m.dateInfo.departDate,
                  v = p.dateInfo.arriveDate,
                  y = s()(g),
                  N = s()(v),
                  C = o.length > 0;
                return {
                  departDateTime: g,
                  departDate: y.format(d),
                  arriveDate: N.format(d),
                  departTime: y.format("HH:mm"),
                  arriveTime: N.format("HH:mm"),
                  departCity: m.departAirportInfo.cityName,
                  arriveCity: p.arriveAirportInfo.cityName,
                  departAirportName: m.departAirportInfo.airportShortName,
                  arriveAirportName: p.arriveAirportInfo.airportShortName,
                  departAirportTerminal: ""
                    .concat(m.departAirportInfo.airportShortName)
                    .concat(m.departAirportInfo.buildingShortName),
                  arriveAirportTerminal: ""
                    .concat(p.arriveAirportInfo.airportShortName)
                    .concat(p.arriveAirportInfo.buildingShortName),
                  costTime: t.changeTravelTime(a.duration),
                  showSalePrice: c.showSalePrice,
                  couponTag: c.couponTag,
                  hasEconomyClass:
                    null === (i = c.grades) || void 0 === i
                      ? void 0
                      : i.some(function (e) {
                          return 0 === e.classGrade || 1 === e.classGrade;
                        }),
                  hasHigherClass:
                    null === (n = c.grades) || void 0 === n
                      ? void 0
                      : n.some(function (e) {
                          return 2 === e.classGrade || 3 === e.classGrade;
                        }),
                  airlineIcon: m.basicInfo.airlineLogoUrl,
                  airlineCode: (function () {
                    var e = m.basicInfo.airlineCode;
                    return r.some(function (t) {
                      return t.basicInfo.airlineCode !== e;
                    })
                      ? ""
                      : e;
                  })(),
                  airlineName: m.basicInfo.airlineShortName,
                  isShared: m.basicInfo.isShared,
                  quantity: c.quantity,
                  ext: c.ext,
                  dayDiff: l.Z.getDayDiff(y.format(d), N.format(d)),
                  isTransfer: C,
                  transferStr: C
                    ? o.length > 1
                      ? "中转".concat(o.length, "次")
                      : "".concat(o[0].cityName, "中转")
                    : "",
                  transferCity: C ? o[0].cityName : "",
                  flightInfo: C
                    ? ""
                        .concat(m.basicInfo.airlineShortName)
                        .concat(m.basicInfo.flightNo, "|")
                        .concat(p.basicInfo.airlineShortName)
                        .concat(p.basicInfo.flightNo)
                        .concat(o.length > 1 ? "等" : "")
                    : ""
                        .concat(m.basicInfo.airlineShortName)
                        .concat(m.basicInfo.flightNo)
                        .concat(
                          m.craftInfo.craftName
                            ? "|" + m.craftInfo.craftName
                            : ""
                        ),
                  specialTag: f,
                  tagUrl: h,
                  preferentialInfo: u.Z.isEmptyObject(c.preferentialInfo)
                    ? null
                    : c.preferentialInfo,
                };
              });
            },
            changeTravelTime: function (e) {
              var t = 1440,
                i = parseInt(e / t),
                n = parseInt((e - i * t) / 60),
                r = e - i * t - 60 * n;
              return ""
                .concat(i > 0 ? i + "天" : "")
                .concat(n > 0 ? n + "时" : "")
                .concat(r + "分");
            },
            initIntlFilter: function () {
              return [
                {
                  name: "起飞时间",
                  eName: "departTime",
                  active: !1,
                  list: [
                    { title: "00:00 - 06:00", isChecked: !1, key: "起飞时间" },
                    { title: "06:00 - 12:00", isChecked: !1, key: "起飞时间" },
                    { title: "12:00 - 18:00", isChecked: !1, key: "起飞时间" },
                    { title: "18:00 - 24:00", isChecked: !1, key: "起飞时间" },
                  ],
                },
                {
                  name: "起飞机场",
                  eName: "departAirport",
                  active: !1,
                  list: [],
                },
                {
                  name: "到达机场",
                  eName: "arriveAirport",
                  active: !1,
                  list: [],
                },
                {
                  name: "航空公司",
                  eName: "airlineName",
                  active: !1,
                  list: [],
                },
                {
                  name: "中转城市",
                  eName: "transferCity",
                  active: !1,
                  list: [],
                },
                {
                  name: "舱位",
                  eName: "class",
                  active: !1,
                  list: [
                    { title: "经济舱", isChecked: !1, key: "舱位" },
                    { title: "公务/头等舱", isChecked: !1, key: "舱位" },
                  ],
                },
              ];
            },
            getFilterNameIndex: function (e, t) {
              return e.findIndex(function (e) {
                return e.name === t;
              });
            },
            updateIntlFilter: function (e, t, i, n) {
              var r = this,
                l = [].concat((0, c.Z)(e), (0, c.Z)(t)),
                o = u.Z.deepCopy(i),
                s = [],
                d = this.getFilterNameIndex(o, "中转城市"),
                f = o[d].list
                  .filter(function (e) {
                    return e.isChecked && !e.disabled;
                  })
                  .map(function (e) {
                    return e.title;
                  });
              console.log("TCL: updateIntlFilter -> filterTransferCities", f),
                (o[d].list = []);
              var h,
                m = (0, a.Z)(o);
              try {
                for (m.s(); !(h = m.n()).done; ) {
                  var p,
                    g = h.value,
                    v = (0, a.Z)(g.list);
                  try {
                    for (v.s(); !(p = v.n()).done; ) {
                      p.value.disabled = !1;
                    }
                  } catch (e) {
                    v.e(e);
                  } finally {
                    v.f();
                  }
                }
              } catch (e) {
                m.e(e);
              } finally {
                m.f();
              }
              0 !== n &&
                (o[this.getFilterNameIndex(o, "舱位")].list[1].disabled = !0);
              var y = [0, 0, 0, 0];
              l.forEach(function (e) {
                r.isFilterHasItem(o, "起飞机场", e, "departAirportName"),
                  r.isFilterHasItem(o, "到达机场", e, "arriveAirportName"),
                  r.isFilterHasItem(o, "中转城市", e, "transferCity", f),
                  r.isFilterHasItem(
                    o,
                    "航空公司",
                    e,
                    "airlineName",
                    "airlineIcon",
                    "airlineCode"
                  );
                var t = new Date(
                  e.departDateTime.replace(/\-/g, "/")
                ).getHours();
                t >= 0 && t < 6
                  ? y[0]++
                  : t >= 6 && t < 12
                  ? y[1]++
                  : t >= 12 && t < 18
                  ? y[2]++
                  : t >= 18 && t < 24 && y[3]++;
              }),
                y.forEach(function (e, t) {
                  0 === e &&
                    (o[r.getFilterNameIndex(o, "起飞时间")].list[t].disabled =
                      !0);
                });
              var N,
                C = (0, a.Z)(o);
              try {
                for (C.s(); !(N = C.n()).done; ) {
                  var I = N.value;
                  if (I.active) {
                    var Z,
                      x = (0, a.Z)(I.list);
                    try {
                      for (x.s(); !(Z = x.n()).done; ) {
                        var b = Z.value;
                        b.isChecked &&
                          !b.disabled &&
                          s.push({ key: b.key, title: b.title });
                      }
                    } catch (e) {
                      x.e(e);
                    } finally {
                      x.f();
                    }
                  }
                }
              } catch (e) {
                C.e(e);
              } finally {
                C.f();
              }
              var w,
                T = 0,
                k = (0, a.Z)(o);
              try {
                for (k.s(); !(w = k.n()).done; ) {
                  var B,
                    A = w.value,
                    F = 0,
                    D = (0, a.Z)(A.list);
                  try {
                    for (D.s(); !(B = D.n()).done; ) {
                      var V = B.value;
                      V.disabled && V.isChecked && (V.isChecked = !1),
                        V.isChecked && F++;
                    }
                  } catch (e) {
                    D.e(e);
                  } finally {
                    D.f();
                  }
                  0 === F ? (A.active = !1) : ((A.active = !0), T++);
                }
              } catch (e) {
                k.e(e);
              } finally {
                k.f();
              }
              return { filterList: o, isFilter: 0 !== T, selectedFilters: s };
            },
            isFilterHasItem: function (e, t, i, n) {
              if (i[n]) {
                var r = e.findIndex(function (e) {
                    return e.name === t;
                  }),
                  a = e[r].list.some(function (e) {
                    return e.title === i[n];
                  });
                if (!a) {
                  for (
                    var c = { title: i[n], isChecked: !1, key: t },
                      l = arguments.length,
                      o = new Array(l > 4 ? l - 4 : 0),
                      s = 4;
                    s < l;
                    s++
                  )
                    o[s - 4] = arguments[s];
                  if ("航空公司" === t && 0 !== o.length)
                    for (var u = 0; u < o.length; u++) c[o[u]] = i[o[u]];
                  "中转城市" === t &&
                    o[0].some(function (e) {
                      return e === c.title;
                    }) &&
                    (c.isChecked = !0),
                    e[r].list.push(c);
                }
              }
            },
            filterList: function (e, t, i) {
              var n = u.Z.deepCopy(e),
                r = u.Z.deepCopy(t),
                a = u.Z.deepCopy(i),
                c = this.getFilterNameIndex(a, "起飞时间"),
                l = this.getFilterNameIndex(a, "起飞机场"),
                o = this.getFilterNameIndex(a, "到达机场"),
                s = this.getFilterNameIndex(a, "航空公司"),
                d = this.getFilterNameIndex(a, "中转城市"),
                f = this.getFilterNameIndex(a, "舱位");
              return (
                a[f].list[0].isChecked &&
                  a[f].list[1].isChecked &&
                  ((a[f].list[0].isChecked = !1),
                  (a[f].list[1].isChecked = !1)),
                (n = this.filterListByTime(n, a[c].list)),
                (n = this.filterListByKey(n, a[l].list, function (e, t) {
                  return e.departAirportName === t;
                })),
                (n = this.filterListByKey(n, a[o].list, function (e, t) {
                  return e.arriveAirportName === t;
                })),
                (n = this.filterListByKey(n, a[s].list, function (e, t) {
                  return e.airlineName === t;
                })),
                (n = this.filterListByKey(n, a[d].list, function (e, t) {
                  return e.transferCity === t;
                })),
                (n = this.filterListByKey(n, a[f].list, function (e, t) {
                  return "公务/头等舱" === t
                    ? e.hasHigherClass
                    : "经济舱" !== t || e.hasEconomyClass;
                })),
                (r = this.filterListByTime(r, a[c].list)),
                (r = this.filterListByKey(r, a[l].list, function (e, t) {
                  return e.departAirportName === t;
                })),
                (r = this.filterListByKey(r, a[o].list, function (e, t) {
                  return e.arriveAirportName === t;
                })),
                (r = this.filterListByKey(r, a[s].list, function (e, t) {
                  return e.airlineName === t;
                })),
                (r = this.filterListByKey(r, a[d].list, function (e, t) {
                  return e.transferCity === t;
                })),
                {
                  straight: n,
                  transfer: (r = this.filterListByKey(
                    r,
                    a[f].list,
                    function (e, t) {
                      return "公务/头等舱" === t
                        ? e.hasHigherClass
                        : "经济舱" !== t || e.hasEconomyClass;
                    }
                  )),
                }
              );
            },
            pollingFetch: function (e, t) {
              var i = this;
              return e(t).then(
                (function () {
                  var a = (0, r.Z)(
                    (0, n.Z)().mark(function r(a) {
                      var c, l, o;
                      return (0, n.Z)().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (1 != a.resultCode) {
                                n.next = 11;
                                break;
                              }
                              if (a.asyncData) {
                                n.next = 3;
                                break;
                              }
                              return n.abrupt("return", a.data);
                            case 3:
                              if (
                                ((c = a.asyncData),
                                (l = c.resultState),
                                (o = c.interval),
                                0 != l)
                              ) {
                                n.next = 6;
                                break;
                              }
                              return n.abrupt("return", a.data);
                            case 6:
                              return (n.next = 8), u.Z.awaitTime(o);
                            case 8:
                              return n.abrupt("return", i.pollingFetch(e, t));
                            case 11:
                              throw new Error(
                                a.resultMessage || "网络异常，请稍后重试~"
                              );
                            case 12:
                            case "end":
                              return n.stop();
                          }
                      }, r);
                    })
                  );
                  return function (e) {
                    return a.apply(this, arguments);
                  };
                })()
              );
            },
            filterListByTime: function (e, t) {
              if (e && t) {
                var i = [],
                  n = !1;
                return (
                  t.forEach(function (t, r) {
                    if (t.isChecked) {
                      n = !0;
                      var a = 6 * r,
                        c = a + 6;
                      e.forEach(function (e) {
                        var t = new Date(
                          e.departDateTime.replace(/\-/g, "/")
                        ).getHours();
                        t >= a && t < c && i.push(e);
                      });
                    }
                  }),
                  n ? i : e
                );
              }
            },
            filterListByKey: function (e, t, i) {
              if (e && t) {
                var n = [],
                  r = !1;
                return (
                  t.forEach(function (t) {
                    t.isChecked &&
                      ((r = !0),
                      e.forEach(function (e) {
                        i(e, t.title) && n.push(e);
                      }));
                  }),
                  r ? n : e
                );
              }
            },
            sortByTimeKey: function (e) {
              return "ascend" === e
                ? function (e) {
                    return new Date(
                      e.departDateTime.replace(/\-/g, "/")
                    ).getTime();
                  }
                : function (e) {
                    return -new Date(
                      e.departDateTime.replace(/\-/g, "/")
                    ).getTime();
                  };
            },
            sortByPriceKey: function (e, t) {
              return "ascend" === e
                ? function (e) {
                    return e.showSalePrice;
                  }
                : function (e) {
                    return -e.showSalePrice;
                  };
            },
            logJsonParseError: function (e) {
              u.Z.insertActionLog(
                "flight_json_parse_error",
                null,
                JSON.stringify(e)
              );
            },
          };
        t.Z = f;
      },
      71251: function (e, t, i) {
        i.d(t, {
          s: function () {
            return l;
          },
        });
        var n = i(34229),
          r = i(71515),
          a = i(52500),
          c = i(48813),
          l = a.default.memo(function (e) {
            var t = e.banners,
              i = void 0 === t ? [] : t,
              a = e.className,
              l = e.onBannerClick,
              o = e.onBannerClose;
            if (i.length <= 0) return (0, c.tZ)(c.HY, {});
            var s = function (e) {
                return "function" == typeof e.rightContent
                  ? e.rightContent()
                  : "hidden" === e.rightContent
                  ? (0, c.tZ)(c.HY, {})
                  : e.buttonText
                  ? (0, c.tZ)(r.View, {
                      className: "right-btn",
                      children: e.buttonText,
                    })
                  : (e.jumpUrl,
                    (0, c.tZ)(r.Text, { className: "iconfont2 ifont2-arr" }));
              },
              u = i.some(function (e) {
                return 1 == e.showClose;
              });
            return (0, c.BX)(r.View, {
              className: "flt-intl-banners ".concat(null != a ? a : ""),
              children: [
                (0, c.tZ)(r.Swiper, {
                  autoplay: !0,
                  vertical: !0,
                  circular: !0,
                  className: "banner-wrap",
                  children:
                    null == i
                      ? void 0
                      : i.map(function (e, t) {
                          var i =
                            (null != e && e.backgroundImage
                              ? "background-image: url(".concat(
                                  e.backgroundImage,
                                  ")"
                                )
                              : "background-color: ".concat(
                                  e.backgroundColor
                                )) || "";
                          return (0, c.tZ)(
                            r.SwiperItem,
                            {
                              id: "AaAy",
                              onClick: function () {
                                return l(e);
                              },
                              children: (0, c.BX)(r.View, {
                                style: i,
                                className:
                                  "flex-align-items-center banner-item ".concat(
                                    u ? "pr-48" : ""
                                  ),
                                children: [
                                  e.icon &&
                                    (0, c.tZ)(r.Image, {
                                      src: e.icon,
                                      className: "banner-icon",
                                    }),
                                  (0, c.tZ)(r.View, {
                                    className: "banner-cont flex-1",
                                    children:
                                      "function" == typeof e.content
                                        ? e.content()
                                        : (0, c.tZ)(n.ZtRichText, {
                                            nodes: e.content,
                                          }),
                                  }),
                                  (0, c.tZ)(r.View, {
                                    className: "banner-right",
                                    children: s(e),
                                  }),
                                ],
                              }),
                            },
                            t
                          );
                        }),
                }),
                u &&
                  (0, c.tZ)(r.Image, {
                    className: "close-btn",
                    onClick: o,
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/kongtietongding/guanbi.png",
                  }),
              ],
            });
          });
      },
    },
  ]);
})();
