!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/1775d7c9f65b9a6f532fd61b25d0faaf.js"),
    require("../sub-common/99e1f8a4cc1290fc72ce9bc5d2852868.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [54233],
      {
        16789: function (e, t, a) {
          var i,
            r = a(32180),
            n = a(298),
            c = a(22276),
            l = a(79301),
            s = a(95308),
            o = a(57042),
            d = a(24460),
            h = a(81876),
            f = a(21867),
            u = a(86066),
            m = a(45023),
            p = a(52500),
            g = a(92954),
            Z = a.n(g),
            C = a(71515),
            y = a(20592),
            N = a(8271),
            v = a.n(N),
            T = a(49120),
            w = a(9062),
            S = a(79910),
            x = a(2326),
            B = a(34229),
            b = a(79792),
            V = a(81957),
            D = a(3205),
            _ = a(24383),
            k = a(13975),
            L = a(90129),
            X = a(55916),
            I = a(48813),
            P = "YYYY-MM-DD",
            F = v()().format(P),
            A = v()().add(1, "day").format(P),
            H = p.default.memo(function (e) {
              var t = e.onChooseDate,
                a = e.onGoCalendar,
                i = e.departDate,
                r = e.departCityCode,
                n = e.arriveCityCode,
                l = e.lowestPrice,
                s = e.className,
                o = void 0 === s ? "" : s,
                d = (0, p.useState)([]),
                h = (0, L.Z)(d, 2),
                f = h[0],
                u = h[1],
                m = (0, p.useState)("c-".concat(i)),
                g = (0, L.Z)(m, 2),
                Z = g[0],
                y = g[1],
                N = (0, p.useState)(!0),
                T = (0, L.Z)(N, 2),
                S = T[0],
                B = T[1];
              (0, p.useEffect)(
                function () {
                  S && b();
                },
                [n, i]
              ),
                (0, p.useEffect)(
                  function () {
                    D(i);
                  },
                  [i]
                ),
                (0, p.useEffect)(
                  function () {
                    V();
                  },
                  [l]
                );
              var b = function () {
                  if (
                    (u(x.Z.generateDateMap({ priceList: [], currentDate: i })),
                    r && n)
                  ) {
                    var e = { data: { departCityCode: r, arriveCityCode: n } };
                    (0, X.MX)(e).then(function (e) {
                      var t;
                      if (
                        null != e &&
                        null !== (t = e.data) &&
                        void 0 !== t &&
                        t.length
                      ) {
                        var a = e.data,
                          r = x.Z.generateDateMap({
                            priceList: a,
                            currentDate: i,
                          });
                        u(r);
                      }
                    });
                  }
                },
                V = function () {
                  if (null != f && f.length) {
                    var e = f.findIndex(function (e) {
                      return e.flightDate === i;
                    });
                    e > -1 && ((f[e].price = l), u((0, c.Z)(f)));
                  }
                },
                D = function (e) {
                  if (e) {
                    var t,
                      a = v()(F)
                        .add(w.g2 - 1, "day")
                        .diff(v()(e), "day");
                    (t =
                      e === F || e === A
                        ? F
                        : a < 3
                        ? e
                        : v()(e).subtract(2, "day").format(P)),
                      y("c-".concat(t));
                  }
                },
                _ = function (e) {
                  e !== i && (B(!1), null == t || t(e));
                };
              return (0, I.BX)(C.View, {
                id: "calendar-list",
                className: "calendar-container ".concat(o),
                children: [
                  (0, I.tZ)(C.View, {
                    className: "calendar-box",
                    children: (0, I.tZ)(C.ScrollView, {
                      className: "calendar-scroll-list",
                      scrollX: !0,
                      scrollWithAnimation: !0,
                      scrollIntoView: Z,
                      children:
                        null == f
                          ? void 0
                          : f.map(function (e) {
                              var t = e.flightDate,
                                a = e.dateDesc,
                                r = e.weekDay,
                                n = e.price;
                              return (0, I.BX)(
                                C.View,
                                {
                                  className: "item ".concat(
                                    i === t ? "cur bgcolor-primary" : ""
                                  ),
                                  id: "c-".concat(t),
                                  onClick: function () {
                                    return _(t);
                                  },
                                  children: [
                                    (0, I.tZ)(C.View, {
                                      className: "date",
                                      children: a,
                                    }),
                                    (0, I.tZ)(C.View, {
                                      className: "week",
                                      children: r,
                                    }),
                                    (0, I.tZ)(C.View, {
                                      className: "price",
                                      children: n || "--",
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                    }),
                  }),
                  (0, I.BX)(C.View, {
                    className: "calendar-all",
                    id: "AcCL",
                    onClick: function () {
                      null == a || a(), B(!0);
                    },
                    children: [
                      (0, I.tZ)(C.Text, { children: "价格日历" }),
                      (0, I.tZ)(C.Text, {
                        className: "ifont-triangle iconfont",
                      }),
                    ],
                  }),
                ],
              });
            }),
            R = a(44184),
            q = "YYYY-MM-DD",
            Y = v()().add(1, "day").format(q),
            J = v()().format(q),
            O = b.default.isTieyou,
            M = S.Z.isIPhoneX(),
            G = [
              {
                text: "直飞",
                iconFont: "ifont-flight-straight",
                type: "straight",
                active: !1,
              },
              {
                text: "时间",
                iconFont: "ifont-flttime",
                type: "time",
                active: !1,
              },
              {
                text: "低-高",
                iconFont: "ifont-fltprice",
                type: "price",
                active: !0,
              },
              {
                text: "比价",
                iconFont: "ifont-fltbijia",
                type: "compare",
                active: !1,
              },
            ],
            U = [{ cityName: "北京", cityCode: "BJS", countryID: 1 }],
            j = p.default.memo(function (e) {
              var t = e.flight.lowPriceTimes;
              return (
                t &&
                (0, I.tZ)(C.Text, { className: "lowest-time-tag", children: t })
              );
            }),
            E =
              (0, V.h)()(
                (i = (function (e) {
                  (0, f.Z)(a, e);
                  var t = (0, u.Z)(a);
                  function a(e) {
                    var i;
                    return (
                      (0, o.Z)(this, a),
                      (i = t.call(this, e)),
                      (0, m.Z)((0, h.Z)(i), "pageId", "10650087027"),
                      (0, m.Z)(
                        (0, h.Z)(i),
                        "handleRequest",
                        (0, s.Z)(
                          (0, l.Z)().mark(function e() {
                            return (0, l.Z)().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), i.getCityTab();
                                  case 2:
                                    i.getList();
                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      ),
                      (0, m.Z)((0, h.Z)(i), "_pass_query", {}),
                      (0, m.Z)((0, h.Z)(i), "getList", function () {
                        i.setState({
                          showSkeleton: !0,
                          singleList: [],
                          transferList: [],
                        });
                        var e = i.state,
                          t = e.hasChild,
                          a = e.hasBaby,
                          r = e.curDate,
                          n = e.departCityCode,
                          c = e.arriveCityCode,
                          l = {
                            data: {
                              version: 7,
                              source: 0,
                              cacheUsage: y.IK.cacheUsage || 0,
                              hasChild: t,
                              hasBaby: a,
                              segments: [
                                { dptDate: r, dptCode: n, arrCode: c },
                              ],
                              student: !1,
                            },
                          };
                        (i._pass_query = l.data),
                          (0, k.CI)(l, {
                            loginCB: function () {
                              i.getList();
                            },
                          })
                            .then(function (e) {
                              var t = e.data,
                                a = e.resultCode,
                                r = e.resultMessage;
                              if (1 !== a) return (0, T.showToast)(r || w.l6);
                              var n = t || {},
                                c = n.singles,
                                l = n.recommends,
                                s = n.studentPrivilege,
                                o = n.announcement || {},
                                d = o.entrancePopup,
                                h = o.tips,
                                f = x.Z.handleFlightData(c || []),
                                u = x.Z.handleFlightData(l || []),
                                m = x.Z.getListLowestPrice(f, u);
                              i.setState({
                                singleList: f,
                                lowestPrice: m,
                                transferList: u,
                                noData: !f.length && !u.length,
                                studentPrivilegeBtnVisible: !!s,
                                entrancePopup: d || {},
                                entranceDrawerTips: h,
                              });
                            })
                            .catch(function () {
                              (0, T.showToast)(w.l6);
                            })
                            .finally(function () {
                              i.setState({ showSkeleton: !1 });
                            });
                      }),
                      (0, m.Z)((0, h.Z)(i), "getCityTab", function () {
                        var e = i.state,
                          t = e.departDate,
                          a = e.departCityCode,
                          r = e.arriveCityInfo,
                          n = {
                            data: {
                              source: 1,
                              startDate: t,
                              endDate: e.rtnDate,
                              depCode: a,
                              arrCodeList: r.map(function (e) {
                                return e.cityCode;
                              }),
                              arrHazyList: r.length > 0 ? [] : ["NATL-QSJ"],
                              segmentType: 1,
                              weekList: [],
                              stayDayList: [],
                            },
                          };
                        return (0, k.AV)(n)
                          .then(function (e) {
                            var t = e.resultCode,
                              a = (e.data || {}).resultList;
                            1 === t &&
                              null != a &&
                              a.length &&
                              i.setState({
                                cityTabList: a,
                                curDate: a[0].depDate,
                                arriveCityInfo: a,
                                arriveCityCode: a[0].arrCityCode,
                                curArrCityInfo: a[0],
                                curTopBg: a[0].arrCityImgUrl,
                              });
                          })
                          .catch(function () {
                            (0, T.showToast)(w.l6);
                          });
                      }),
                      (0, m.Z)((0, h.Z)(i), "chooseDate", function (e) {
                        i.setState(
                          { curDate: e, departDate: e, rtnDate: e },
                          function () {
                            i.handleRequest();
                          }
                        );
                      }),
                      (0, m.Z)((0, h.Z)(i), "goToCalendar", function () {
                        var e = i.state,
                          t = e.departCityCode,
                          a = e.arriveCityCode,
                          r = e.curDate,
                          n = v()()
                            .add(w.g2 - 1, "day")
                            .format(q);
                        D.Z.calendar(
                          {
                            chooseDate: r,
                            beginDate: J,
                            endDate: n,
                            title: "请选择出发日期",
                            bu: "flight",
                            flightType: w.C4.single,
                            queryParams: {
                              data: { departCityCode: t, arriveCityCode: a },
                            },
                          },
                          function (e) {
                            i.setState(
                              { curDate: e, departDate: e, rtnDate: e },
                              function () {
                                i.handleRequest();
                              }
                            );
                          }
                        );
                      }),
                      (0, m.Z)((0, h.Z)(i), "_lastScrollTop", 0),
                      (0, m.Z)((0, h.Z)(i), "_reachTop", !1),
                      (0, m.Z)((0, h.Z)(i), "_reachBottom", !1),
                      (0, m.Z)((0, h.Z)(i), "calendarScrollFlag", !1),
                      (0, m.Z)((0, h.Z)(i), "titleScrollFlag", !1),
                      (0, m.Z)((0, h.Z)(i), "onListScroll", function (e) {
                        var t = i.state.filterHidden,
                          a = (e.detail || {}).scrollTop,
                          r = void 0 === a ? "" : a;
                        if (
                          (i.setState({ listScrollTop: r }),
                          r >= 170 && !i.calendarScrollFlag
                            ? (i.setState({ calendarIsFixed: !0 }),
                              (i.calendarScrollFlag = !0))
                            : r < 170 &&
                              i.calendarScrollFlag &&
                              (i.setState({ calendarIsFixed: !1 }),
                              (i.calendarScrollFlag = !1)),
                          r >= 10 && !i.titleScrollFlag
                            ? (i.setState({ pageTitleChange: !0 }),
                              (i.titleScrollFlag = !0))
                            : r < 10 &&
                              i.titleScrollFlag &&
                              (i.setState({ pageTitleChange: !1 }),
                              (i.titleScrollFlag = !1)),
                          i._lastScrollTop)
                        ) {
                          if (r - i._lastScrollTop > 0) {
                            if ((r > 30 && (i._reachTop = !1), i._reachBottom))
                              return;
                            if (i._reachTop) return;
                            t || i.setState({ filterHidden: !0 });
                          } else
                            (i._reachBottom = !1),
                              t && i.setState({ filterHidden: !1 });
                          i._lastScrollTop = r;
                        } else i._lastScrollTop = r;
                      }),
                      (0, m.Z)((0, h.Z)(i), "onListTop", function () {
                        (i._reachTop = !0), i.setState({ filterHidden: !1 });
                      }),
                      (0, m.Z)((0, h.Z)(i), "onListBottom", function () {
                        i.state.filterHidden &&
                          ((i._reachBottom = !0),
                          i.setState({ filterHidden: !1 }));
                      }),
                      (0, m.Z)((0, h.Z)(i), "handleFlightClick", function (e) {
                        var t = [{ key: "grab", value: e.grab }];
                        i.toBookX({ flight: e, extension: t });
                      }),
                      (0, m.Z)((0, h.Z)(i), "toBookX", function (e) {
                        var t = e.flight,
                          a = e.extension,
                          r = i.state.studentPrivilegeBtnVisible,
                          n = t.sequences,
                          c = t.token,
                          l = i._pass_query,
                          s = l.segments,
                          o = l.hasChild,
                          d = l.hasBaby,
                          h = [{}];
                        h[0].flights = n.map(function (e) {
                          return {
                            dptTime: e.dptTime,
                            arrTime: e.arrTime,
                            airFullName: e.airFullName,
                            flightNo: e.flightNo,
                            dptAName: e.dpt,
                            arrAName: e.arr,
                            stop: e.stop,
                          };
                        });
                        var f = s;
                        (f[0].flightNo = h[0].flights[0].flightNo),
                          i.navigateTo({
                            url: "../bookx/bookx?token="
                              .concat(encodeURIComponent(c), "&fromPage=")
                              .concat(w.Ip.specialList),
                            data: {
                              segments: h,
                              query: {
                                segments: f,
                                hasChild: o,
                                hasBaby: d,
                                extension: a,
                              },
                              isStu: r,
                            },
                          });
                      }),
                      (0, m.Z)((0, h.Z)(i), "sortBy", function (e, t) {
                        var a = i.state,
                          r = a.filterList,
                          n = a.timeSort,
                          l = a.priceSort,
                          s = a.onlyStraight,
                          o = a.isComparePrice,
                          d = r[t].active;
                        switch (e) {
                          case "straight":
                            (r[t].active = !d),
                              i.setState({ onlyStraight: !s });
                            break;
                          case "time":
                            var h = r.findIndex(function (e) {
                              return "price" === e.type;
                            });
                            (n = "asc" === n ? "desc" : "asc"),
                              (r[t].active = !0),
                              (r[h].active = !1),
                              (r[h].text = "价格"),
                              (r[t].text = "asc" === n ? "早-晚" : "晚-早"),
                              i.sortByTime(n);
                            break;
                          case "price":
                            var f = r.findIndex(function (e) {
                              return "time" === e.type;
                            });
                            (l = "asc" === l ? "desc" : "asc"),
                              (r[t].active = !0),
                              (r[f].active = !1),
                              (r[f].text = "时间"),
                              (r[t].text = "asc" === l ? "低-高" : "高-低"),
                              i.sortByPrice(l);
                            break;
                          case "compare":
                            (r[t].active = !d),
                              i.setState({ isComparePrice: !o });
                        }
                        i.setState({
                          filterList: (0, c.Z)(r),
                          timeSort: n,
                          priceSort: l,
                        });
                      }),
                      (0, m.Z)((0, h.Z)(i), "entranceCloseArr", []),
                      (0, m.Z)((0, h.Z)(i), "sortFunc", function (e, t) {
                        var a =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : [];
                        if (a.length) {
                          var i = JSON.parse(JSON.stringify(a));
                          return i.sort(function (a, i) {
                            var r, n;
                            return (
                              "time" === e
                                ? ((r = v()(a.dptTime).valueOf()),
                                  (n = v()(i.dptTime).valueOf()))
                                : "price" === e && ((r = a.apr), (n = i.apr)),
                              "asc" === t ? r - n : "desc" === t ? n - r : 0
                            );
                          });
                        }
                      }),
                      (0, m.Z)((0, h.Z)(i), "sortByTime", function (e) {
                        var t = i.state,
                          a = t.singleList,
                          r = t.transferList,
                          n = i.sortFunc("time", e, a),
                          c = i.sortFunc("time", e, r);
                        i.setState({ singleList: n, transferList: c });
                      }),
                      (0, m.Z)((0, h.Z)(i), "sortByPrice", function (e) {
                        var t = i.state,
                          a = t.singleList,
                          r = t.transferList,
                          n = i.sortFunc("price", e, a),
                          c = i.sortFunc("price", e, r);
                        i.setState({ singleList: n, transferList: c });
                      }),
                      (0, m.Z)(
                        (0, h.Z)(i),
                        "handleRenderSingles",
                        function (e) {
                          var t = e.dptTimeStr,
                            a = e.cityColor,
                            r = e.dptAName,
                            n = e.dptTrm,
                            c = e.abbr,
                            l = e.arrTimeStr,
                            s = e.arrAName,
                            o = e.arrTrm,
                            d = e.dayDiff,
                            h = e.stock,
                            f = e.apr,
                            u = e.sequences,
                            m = e.costTime,
                            p = e.ota,
                            g = i.state.isComparePrice;
                          return (0, I.tZ)(I.HY, {
                            children: (0, I.BX)(C.View, {
                              className: "fltlist_item",
                              id: "AcGJ",
                              onClick: function () {
                                return i.handleFlightClick(e);
                              },
                              children: [
                                (0, I.tZ)(j, { flight: e }),
                                (0, I.BX)(C.View, {
                                  className: "flt_intro",
                                  children: [
                                    (0, I.BX)(C.View, {
                                      className: "flt_col",
                                      children: [
                                        (0, I.BX)(C.View, {
                                          className: "flt_depart",
                                          children: [
                                            (0, I.tZ)(C.Text, {
                                              className: "flt_time",
                                              children: t,
                                            }),
                                            (0, I.tZ)(C.Text, {
                                              className:
                                                "flt_airport " +
                                                (1 === a || 3 === a
                                                  ? "torage"
                                                  : ""),
                                              children: r + n,
                                            }),
                                          ],
                                        }),
                                        (0, I.BX)(C.View, {
                                          className: "separator",
                                          children: [
                                            c &&
                                              (0, I.tZ)(C.View, {
                                                className: "spt_type",
                                                children: c,
                                              }),
                                            (0, I.tZ)(C.View, {
                                              className: "spt_arr",
                                            }),
                                          ],
                                        }),
                                        (0, I.BX)(C.View, {
                                          className: "flt_arrival",
                                          children: [
                                            (0, I.tZ)(C.Text, {
                                              className: "flt_time",
                                              children: l,
                                            }),
                                            (0, I.tZ)(C.Text, {
                                              className:
                                                "flt_airport " +
                                                (2 === a || 3 === a
                                                  ? "torage"
                                                  : ""),
                                              children: s + o,
                                            }),
                                          ],
                                        }),
                                        d > 0 &&
                                          (0, I.tZ)(C.Text, {
                                            className: "next",
                                            children: "+" + d + "天",
                                          }),
                                      ],
                                    }),
                                    (0, I.tZ)(C.View, {
                                      className: "price_col",
                                      children: (0, I.BX)(C.View, {
                                        className: "price",
                                        children: [
                                          h &&
                                            (0, I.tZ)(C.View, {
                                              className: "tag",
                                              children: h,
                                            }),
                                          (0, I.tZ)(C.Text, {
                                            className: "flt_price color-red",
                                            children: f,
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, I.BX)(C.View, {
                                  className: "airline_info",
                                  children: [
                                    (0, I.tZ)(C.Image, {
                                      className: "airline_logo",
                                      src: u[0].airIcon,
                                    }),
                                    (0, I.BX)(C.View, {
                                      className: "airline_txt",
                                      children: [
                                        (0, I.BX)(C.Text, {
                                          className: "span",
                                          children: [
                                            u[0].airFullName + u[0].flightNo,
                                            (0, I.tZ)(C.Text, {
                                              className: "color-red",
                                              children: u[0].shared
                                                ? "共享"
                                                : "",
                                            }),
                                          ],
                                        }),
                                        (0, I.tZ)(C.Text, {
                                          className: "span",
                                          children:
                                            (u[0].cftn || "") +
                                            (u[0].cfts
                                              ? "(" + u[0].cfts + ")"
                                              : ""),
                                        }),
                                        (0, I.tZ)(C.Text, {
                                          className: "span",
                                          children: m,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (null == p ? void 0 : p.length) > 0 &&
                                  g &&
                                  (0, I.tZ)(C.View, {
                                    className: "list-bijia",
                                    children: p.map(function (e, t) {
                                      return (0,
                                      I.tZ)(C.View, { className: "item", children: e.name + ": " + (e.pr > 0 ? "￥" + e.pr : "暂无") }, t);
                                    }),
                                  }),
                              ],
                            }),
                          });
                        }
                      ),
                      (0, m.Z)((0, h.Z)(i), "handleRenderBottom", function () {
                        var e = i.state,
                          t = e.transferList,
                          a = e.onlyStraight;
                        return (0, I.BX)(I.HY, {
                          children: [
                            !a && null != t && t.length
                              ? (0, I.BX)(I.HY, {
                                  children: [
                                    (0, I.tZ)(C.View, {
                                      className: "division-line",
                                      children: "中转航班推荐",
                                    }),
                                    t.map(function (e, t) {
                                      var a = e.sequences,
                                        r = e.dptTimeStr,
                                        n = e.cityColor,
                                        c = e.dptAName,
                                        l = e.dptTrm,
                                        s = e.abbr,
                                        o = e.arrTimeStr,
                                        d = e.arrAName,
                                        h = e.arrTrm,
                                        f = e.dayDiff,
                                        u = e.stock,
                                        m = e.apr,
                                        p = e.costTime,
                                        g = e.discount;
                                      return (0, I.BX)(
                                        C.View,
                                        {
                                          className: "fltlist_item",
                                          id: "AcGK",
                                          onClick: function () {
                                            return i.handleFlightClick(e);
                                          },
                                          children: [
                                            (0, I.tZ)(j, { flight: e }),
                                            (0, I.BX)(C.View, {
                                              className: "flt_intro",
                                              children: [
                                                (0, I.BX)(C.View, {
                                                  className: "flt_col",
                                                  children: [
                                                    (0, I.BX)(C.View, {
                                                      className: "flt_depart",
                                                      children: [
                                                        (0, I.tZ)(C.Text, {
                                                          className: "flt_time",
                                                          children: r,
                                                        }),
                                                        (0, I.tZ)(C.Text, {
                                                          className:
                                                            "flt_airport " +
                                                            (1 === n || 3 === n
                                                              ? "torage"
                                                              : ""),
                                                          children: c + l,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, I.BX)(C.View, {
                                                      className: "separator",
                                                      children: [
                                                        s &&
                                                          (0, I.tZ)(C.View, {
                                                            className:
                                                              "spt_type",
                                                            children: s,
                                                          }),
                                                        (0, I.tZ)(C.View, {
                                                          className: "spt_arr",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, I.BX)(C.View, {
                                                      className: "flt_arrival",
                                                      children: [
                                                        (0, I.tZ)(C.Text, {
                                                          className: "flt_time",
                                                          children: o,
                                                        }),
                                                        (0, I.tZ)(C.Text, {
                                                          className:
                                                            "flt_airport " +
                                                            (2 === n || 3 === n
                                                              ? "torage"
                                                              : ""),
                                                          children: d + h,
                                                        }),
                                                      ],
                                                    }),
                                                    f > 0 &&
                                                      (0, I.tZ)(C.Text, {
                                                        className: "next",
                                                        children:
                                                          "+" + f + "天",
                                                      }),
                                                  ],
                                                }),
                                                (0, I.tZ)(C.View, {
                                                  className: "price_col",
                                                  children: (0, I.BX)(C.View, {
                                                    className: "price",
                                                    children: [
                                                      u &&
                                                        (0, I.tZ)(C.View, {
                                                          className: "tag",
                                                          children: u,
                                                        }),
                                                      (0, I.tZ)(C.Text, {
                                                        className:
                                                          "flt_price color-red",
                                                        children: m,
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, I.BX)(C.View, {
                                              className: "airline_info",
                                              children: [
                                                (0, I.tZ)(C.Image, {
                                                  className: "airline_logo",
                                                  src: a[0].airIcon,
                                                }),
                                                (0, I.tZ)(C.View, {
                                                  className: "airline_txt",
                                                  children: (0, I.tZ)(C.Text, {
                                                    className: "span",
                                                    children:
                                                      a[0].airFullName +
                                                      a[0].flightNo,
                                                  }),
                                                }),
                                                (0, I.tZ)(C.Image, {
                                                  className: "airline_logo",
                                                  src: a[1].airIcon,
                                                }),
                                                (0, I.BX)(C.View, {
                                                  className: "airline_txt",
                                                  children: [
                                                    (0, I.tZ)(C.Text, {
                                                      className: "span",
                                                      children:
                                                        a[1].airFullName +
                                                        a[1].flightNo,
                                                    }),
                                                    (0, I.tZ)(C.Text, {
                                                      className: "span",
                                                      children: p,
                                                    }),
                                                  ],
                                                }),
                                                g &&
                                                  (0, I.tZ)(C.Text, {
                                                    className: "airline_tips",
                                                    children: g,
                                                  }),
                                              ],
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                    }),
                                  ],
                                })
                              : null,
                            (0, I.tZ)(C.View, { className: "fill-padding" }),
                          ],
                        });
                      }),
                      (0, m.Z)((0, h.Z)(i), "onTabClick", function (e) {
                        var t = e.arrCityCode,
                          a = e.arrCityImgUrl;
                        t !== i.state.arriveCityCode &&
                          i.setState(
                            {
                              arriveCityCode: t,
                              curArrCityInfo: e,
                              filterList: JSON.parse(JSON.stringify(G)),
                              timeSort: "desc",
                              priceSort: "asc",
                              entrancePopup: {},
                              curTopBg: a,
                            },
                            function () {
                              i.getList();
                            }
                          );
                      }),
                      (0, m.Z)((0, h.Z)(i), "handlePageBack", function () {
                        Z().navigateBack();
                      }),
                      (0, m.Z)((0, h.Z)(i), "renderSkeleton", function () {
                        var e = i.state,
                          t = e.showSkeleton,
                          a = e.noData;
                        return (0,
                        I.BX)(I.HY, { children: [t && (0, I.tZ)(R.Z, {}), !t && a && (0, I.BX)(C.View, { className: "list-none", children: [(0, I.tZ)(C.Icon, { className: "img-selnone " + (O ? "ty" : "zx") }), (0, I.tZ)(C.View, { className: "tit", children: "暂无内容" }), (0, I.tZ)(C.View, { className: "txt", children: "没有找到出行方案，换个日期试试吧" })] })] });
                      }),
                      (0, m.Z)((0, h.Z)(i), "handelRenderTop", function () {
                        var e,
                          t = i.state,
                          a = t.curDate,
                          r = t.departCityCode,
                          n = t.arriveCityCode,
                          c = t.lowestPrice,
                          l = t.departCity,
                          s = t.cityTabList,
                          o = t.barTitle,
                          d = t.curTopBg,
                          h = t.calendarIsFixed,
                          f = t.curArrCityInfo,
                          u = t.pageTitleChange,
                          m = t.showSkeleton,
                          p = f || {},
                          g = p.arrCityName,
                          Z = p.tag,
                          y = {
                            background: "url(".concat(d, ") no-repeat;"),
                            backgroundSize: "cover",
                          },
                          N = S.A.menuInfo,
                          v = {
                            height: "".concat(N.height || 32, "px"),
                            lineHeight: "".concat(N.height || 32, "px"),
                            top: "".concat(N.top || 24, "px"),
                            color: "".concat(u ? "#222" : "#fff"),
                          },
                          T = {
                            height: "".concat(S.A.titleBarHeight || 60, "px"),
                            top: 0,
                            background: "".concat(u ? "#fff" : "transparent"),
                          },
                          w = {
                            top: "".concat(
                              h ? S.A.titleBarHeight || 60 : 0,
                              "px"
                            ),
                          },
                          x = [];
                        return (
                          Z &&
                            (x =
                              null === (e = Z.split("|")) || void 0 === e
                                ? void 0
                                : e.slice(0, 3)),
                          (0, I.BX)(I.HY, {
                            children: [
                              (0, I.BX)(C.View, {
                                className: "top-bg ".concat(
                                  h ? "custom-bar-fixed" : ""
                                ),
                                style: y,
                                children: [
                                  (0, I.tZ)(C.View, {
                                    className: "img-wrapper",
                                  }),
                                  (0, I.tZ)(C.View, {
                                    className: "custom-bar",
                                    style: T,
                                    children: (0, I.BX)(C.View, {
                                      className: "page-title",
                                      style: v,
                                      children: [
                                        (0, I.tZ)(C.Text, {
                                          className: "iconfont ifont-back",
                                          id: "AcGL",
                                          onClick: i.handlePageBack,
                                        }),
                                        (0, I.BX)(C.Text, {
                                          children: [
                                            l,
                                            " ",
                                            (0, I.tZ)(C.Text, {
                                              className:
                                                "iconfont ifont-trainfromto",
                                            }),
                                            " ",
                                            o,
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, I.BX)(C.View, {
                                    className: "bg-bottom",
                                    children: [
                                      (0, I.BX)(C.View, {
                                        className: "bg-tag",
                                        children: [
                                          (0, I.tZ)(C.Text, {
                                            className: "arr-city-name",
                                            children: g,
                                          }),
                                          x.length
                                            ? (0, I.tZ)(I.HY, {
                                                children: x.map(function (e) {
                                                  return (0,
                                                  I.tZ)(C.Text, { className: "city-tag", children: e }, e);
                                                }),
                                              })
                                            : null,
                                        ],
                                      }),
                                      (null == s ? void 0 : s.length) > 1 &&
                                        (0, I.tZ)(C.View, {
                                          className: "city-tab",
                                          children: s.map(function (e) {
                                            var t = e.arrCityCode,
                                              a = e.price,
                                              r = e.arrCityName,
                                              o = n === t;
                                            return (0, I.BX)(
                                              C.View,
                                              {
                                                style: {
                                                  maxWidth: "".concat(
                                                    100 / s.length,
                                                    "%"
                                                  ),
                                                },
                                                className: "item "
                                                  .concat(
                                                    o ? "active" : "",
                                                    " "
                                                  )
                                                  .concat(O ? "ty" : "zx"),
                                                id: "AcGM",
                                                onClick: function () {
                                                  return i.onTabClick(e);
                                                },
                                                children: [
                                                  (0, I.tZ)(C.Text, {
                                                    className: "txt ".concat(
                                                      o ? "color-primary" : ""
                                                    ),
                                                    children: ""
                                                      .concat(l, "-")
                                                      .concat(r),
                                                  }),
                                                  (0, I.BX)(C.Text, {
                                                    className: "lowest-price",
                                                    children: [
                                                      o
                                                        ? (0, I.BX)(C.Text, {
                                                            className: "price",
                                                            children: [
                                                              "¥",
                                                              m ? "--" : c,
                                                            ],
                                                          })
                                                        : (0, I.BX)(C.Text, {
                                                            className: "price",
                                                            children: [
                                                              "¥",
                                                              a || "--",
                                                            ],
                                                          }),
                                                      "起",
                                                    ],
                                                  }),
                                                ],
                                              },
                                              t
                                            );
                                          }),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, I.tZ)(C.View, {
                                className: "calendar-father ".concat(
                                  h ? "calendar-fixed" : ""
                                ),
                                style: w,
                                children: (0, I.tZ)(H, {
                                  className: "calendar-box",
                                  departDate: a || Y,
                                  departCityCode: r,
                                  arriveCityCode: n,
                                  onChooseDate: i.chooseDate,
                                  onGoCalendar: i.goToCalendar,
                                  lowestPrice: c,
                                }),
                              }),
                            ],
                          })
                        );
                      }),
                      (i.state = {
                        lowestPrice: 0,
                        singleList: [],
                        transferList: [],
                        curDate: Y,
                        hasChild: !1,
                        hasBaby: !1,
                        arriveCityInfo: [],
                        arriveCityCode: "",
                        showSkeleton: !0,
                        filterHidden: !1,
                        departDate: Y,
                        departCityCode: "",
                        departCity: "上海",
                        listScrollTop: 0,
                        filterList: JSON.parse(JSON.stringify(G)),
                        onlyStraight: !1,
                        timeSort: "desc",
                        priceSort: "asc",
                        isComparePrice: !1,
                        rtnDate: "",
                        cityTabList: U,
                        studentPrivilegeBtnVisible: !1,
                        entrancePopup: {},
                        entranceDrawerTips: [],
                        noData: !1,
                        barTitle: "",
                        curTopBg: "",
                        calendarIsFixed: !1,
                        curArrCityInfo: {},
                        pageTitleChange: !1,
                      }),
                      i
                    );
                  }
                  return (
                    (0, d.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t = (0, g.getCurrentInstance)().router,
                            a = (null == t ? void 0 : t.params.data) || {},
                            i = a.departDate,
                            r = void 0 === i ? Y : i,
                            n = a.departCityCode,
                            c = void 0 === n ? "SHA" : n,
                            l = a.departCity,
                            s = void 0 === l ? "上海" : l,
                            o = a.hasChild,
                            d = void 0 !== o && o,
                            h = a.hasBaby,
                            f = void 0 !== h && h,
                            u = a.arriveCityInfo,
                            m = a.fromPage,
                            p = void 0 === m ? "" : m,
                            Z = a.rtnDate,
                            C = void 0 === Z ? "" : Z,
                            y = u || JSON.parse(JSON.stringify(U)),
                            N = y
                              .filter(function (e) {
                                return e.cityCode !== c;
                              })
                              .map(function (e) {
                                return e.cityName;
                              });
                          this.setState(
                            {
                              departDate: r,
                              departCityCode: c,
                              departCity: s,
                              arriveCityInfo: y,
                              arriveCityCode: y[0].cityCode,
                              curArrCityInfo: y[0],
                              hasChild: d,
                              hasBaby: f,
                              rtnDate: C,
                              barTitle: N.join("、"),
                            },
                            function () {
                              e.handleRequest();
                            }
                          ),
                            x.Z.recordFromPage(p);
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          console.log("--show--"),
                            y.IK.forceListRefresh &&
                              ((y.IK.cacheUsage = 1),
                              (y.IK.forceListRefresh = !1),
                              this.handleRequest());
                        },
                      },
                      {
                        key: "onEntrancePopupClose",
                        value: function () {
                          var e = this.state,
                            t = e.entrancePopup,
                            a = e.arriveCityCode;
                          this.setState({
                            entrancePopup: (0, n.Z)(
                              (0, n.Z)({}, t),
                              {},
                              { sw: 0 }
                            ),
                          }),
                            this.entranceCloseArr.push(a),
                            (this.entranceCloseArr = (0, c.Z)(
                              new Set(this.entranceCloseArr)
                            ));
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.arriveCityCode,
                            i = t.showSkeleton,
                            r = t.singleList,
                            n = t.filterHidden,
                            c = t.listScrollTop,
                            l = t.filterList,
                            s = t.entrancePopup,
                            o = t.entranceDrawerTips,
                            d = {
                              lowerThreshold: 1e3,
                              scrollTop: c,
                              onScrollToUpper: this.onListTop,
                              onScroll: this.onListScroll,
                            },
                            h =
                              1 === (null == s ? void 0 : s.sw) &&
                              !this.entranceCloseArr.some(function (e) {
                                return e === a;
                              });
                          return (0, I.BX)(C.View, {
                            className: "special-list-container",
                            children: [
                              (0, I.tZ)(C.View, {
                                className: "list-container",
                                children: (0, I.tZ)(B.ZtVirtualList, {
                                  className: "flight-scroll-list",
                                  scrollViewProps: d,
                                  list: r,
                                  screenNum: 3,
                                  onRenderTop: this.handelRenderTop,
                                  onRender: this.handleRenderSingles,
                                  onRenderBottom: this.handleRenderBottom,
                                  onComplete: this.onListBottom,
                                  onRenderLoad: this.renderSkeleton,
                                }),
                              }),
                              (0, I.tZ)(C.View, {
                                className: "fltlist_filter "
                                  .concat(M ? "iphone-x" : "", " ")
                                  .concat(i || n ? "hidden" : ""),
                                children: l.map(function (t, a) {
                                  var i = t.type,
                                    r = t.text,
                                    n = t.iconFont,
                                    c = t.active;
                                  return (0, I.BX)(
                                    C.View,
                                    {
                                      className: "item ".concat(
                                        c ? "current" : ""
                                      ),
                                      id: "AcGN",
                                      onClick: function () {
                                        return e.sortBy(i, a);
                                      },
                                      children: [
                                        (0, I.tZ)(C.Text, {
                                          className: "iconfont ".concat(n),
                                        }),
                                        (0, I.tZ)(C.View, {
                                          className: "txt",
                                          children: r,
                                        }),
                                      ],
                                    },
                                    i
                                  );
                                }),
                              }),
                              (0, I.tZ)(_.Z, {
                                isShow: h,
                                entrancePopup: s,
                                entranceDrawerTips: o,
                                onClose: this.onEntrancePopupClose,
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(p.PureComponent))
              ) || i;
          Page(
            (0, r.createPageConfig)(
              E,
              "pages/flight/specialList/specialList",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#efefef",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
                navigationBarTextStyle: "black",
                disableScroll: !0,
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [56620, 49608, 16048, 99010, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(16789);
        }),
          e.O();
      },
    ]);
})();
