!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [11256],
    {
      65484: function (e, t, r) {
        r.d(t, {
          M_: function () {
            return h;
          },
          Nd: function () {
            return p;
          },
          Of: function () {
            return u;
          },
          d2: function () {
            return N;
          },
          my: function () {
            return o;
          },
          nH: function () {
            return f;
          },
          ul: function () {
            return d;
          },
          vy: function () {
            return m;
          },
        });
        var n = r(79301),
          i = r(95308),
          a = r(79792),
          c = r(17377),
          l = r(79910),
          o = function e(t, r) {
            return t(r).then(
              (function () {
                var a = (0, i.Z)(
                  (0, n.Z)().mark(function i(a) {
                    var c, o, s;
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
                              (o = c.resultState),
                              (s = c.interval),
                              0 != o)
                            ) {
                              n.next = 6;
                              break;
                            }
                            return n.abrupt("return", a.data);
                          case 6:
                            return (n.next = 8), l.Z.awaitTime(s);
                          case 8:
                            return n.abrupt("return", e(t, r));
                          case 11:
                            throw new Error(
                              a.resultMessage || "网络异常，请稍后重试~"
                            );
                          case 12:
                          case "end":
                            return n.stop();
                        }
                    }, i);
                  })
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })()
            );
          },
          s = "709988",
          d = (0, c.ZP)({
            serviceCode: "18366",
            channel: a.default.flight_channel,
            path: "searchChangeList",
            correctVersion: s,
          }),
          f = (0, c.ZP)({
            serviceCode: "18366",
            channel: a.default.flight_channel,
            path: "getRebookProduct",
            correctVersion: s,
          }),
          m = (0, c.ZP)({
            serviceCode: "18366",
            channel: a.default.flight_channel,
            path: "rebookCheck",
            correctVersion: s,
          }),
          h = (0, c.ZP)({
            serviceCode: "18366",
            channel: a.default.flight_channel,
            path: "rebook",
            correctVersion: s,
          }),
          u = (0, c.ZP)({
            serviceCode: "18366",
            channel: a.default.flight_channel,
            path: "rebookCancel",
            correctVersion: s,
          }),
          p = (0, c.ZP)({
            serviceCode: "17094",
            channel: a.default.flight_channel,
            path: "OrderDetail",
            correctVersion: s,
          }),
          N = (0, c.ZP)({
            serviceCode: "18366",
            channel: a.default.flight_channel,
            path: "urgeRebook",
            correctVersion: s,
          });
      },
      12508: function (e, t, r) {
        var n = r(52500),
          i = r(71515),
          a = r(3205),
          c = r(8271),
          l = r.n(c),
          o = r(49120),
          s = r(85423),
          d = r(34229),
          f = r(48813),
          m = { 1: "成人", 2: "儿童", 3: "婴儿", 4: "老人" },
          h = function (e) {
            var t = e.dptACode,
              r = e.dptCode,
              n = e.arrACode,
              i = e.arrCode,
              c = e.dptTime,
              l = e.flightNo,
              o = "?flightDate="
                .concat(
                  encodeURIComponent(encodeURIComponent(c)),
                  "&departCityCode="
                )
                .concat(r, "&arriveCityCode=")
                .concat(i, "&departAirportCode=")
                .concat(t, "&arriveAirportCode=")
                .concat(n, "&flightNo=")
                .concat(l);
            a.Z.twebview({
              data: {
                url: ""
                  .concat(
                    "https://market.suanya.com/activity/flight/flight-aircraft-info/"
                  )
                  .concat(o),
              },
            });
          },
          u = function (e) {
            var t,
              r,
              n,
              a,
              c = e.luggageInfos,
              l = [];
            return (
              (null === (t = c.adult) ||
              void 0 === t ||
              null === (r = t.items) ||
              void 0 === r
                ? void 0
                : r.length) > 0 && l.push(c.adult),
              (null === (n = c.child) ||
              void 0 === n ||
              null === (a = n.items) ||
              void 0 === a
                ? void 0
                : a.length) > 0 && l.push(c.child),
              l.forEach(function (e) {
                (e.rowItems = e.items.filter(function (e) {
                  return !e.description;
                })),
                  (e.tableItems = e.items.filter(function (e) {
                    return e.description;
                  }));
              }),
              (0, f.tZ)(i.View, {
                className: "rebook-policy-cont",
                children: (0, f.tZ)(s.iA, {
                  className: "rebook-table font-13 color-3",
                  children: l.map(function (e, t) {
                    return (0, f.BX)(
                      s.Tr,
                      {
                        children: [
                          (0, f.tZ)(s.Td, {
                            className: "detail-title cell",
                            children: (0, f.tZ)(d.ZtRichText, {
                              nodes: e.detailTitle,
                            }),
                          }),
                          (0, f.BX)(s.Td, {
                            children: [
                              (0, f.tZ)(s.p3, {
                                children: e.tableItems.map(function (e, t) {
                                  return (0,
                                  f.BX)(s.Tr, { children: [(0, f.tZ)(s.Td, { className: "item-title cell", children: (0, f.tZ)(d.ZtRichText, { nodes: e.title }) }), (0, f.tZ)(s.Td, { className: "cell", children: (0, f.tZ)(d.ZtRichText, { nodes: e.description }) })] }, t);
                                }),
                              }),
                              e.rowItems.map(function (e, t) {
                                return (0,
                                f.tZ)(s.Fv, { className: "cell", children: (0, f.tZ)(d.ZtRichText, { nodes: e.title }) }, t);
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    );
                  }),
                }),
              })
            );
          },
          p = function (e) {
            var t = e.rebookInfo,
              r = t.passengerList,
              n = t.otherInfos;
            return (0, f.BX)(i.View, {
              className: "rebook-info",
              children: [
                (0, f.BX)(i.View, {
                  className: "info-item",
                  children: [
                    (0, f.tZ)(i.View, {
                      className: "label",
                      children: "改签乘机人",
                    }),
                    (0, f.tZ)(i.View, {
                      className: "info-cont",
                      children: r.map(function (e, t) {
                        return (0,
                        f.BX)(i.View, { className: "pas-item", children: [(0, f.BX)(i.View, { className: "font-13 color-2 flex-align-items-center", children: [e.passengerName, m[e.passengerType] && (0, f.tZ)(i.View, { className: "pas-tag bd-1rpx", children: m[e.passengerType] })] }), (0, f.tZ)(i.View, { className: "card-no font-13 color-9", children: e.cardNo })] }, t);
                      }),
                    }),
                  ],
                }),
                n.map(function (e, t) {
                  return (0,
                  f.BX)(i.View, { className: "info-item", children: [(0, f.tZ)(i.View, { className: "label", children: e.title }), (0, f.tZ)(i.View, { className: "info-cont", children: (0, f.tZ)(i.View, { className: "font-13 color-2", children: e.content }) })] }, t);
                }),
              ],
            });
          },
          N = function (e) {
            var t = e.flightDetail,
              r = t.departAirportCode,
              n = t.departCityCode,
              i = t.arriveAirportCode,
              a = t.arriveCityCode,
              c = t.departDateTime,
              l = t.basicInfo.flightNumber;
            h({
              dptACode: r,
              dptCode: n,
              arrACode: i,
              arrCode: a,
              dptTime: c,
              flightNo: l,
            });
          },
          g = function (e) {
            var t,
              r = e.flightDetail,
              n = r.departCityName,
              a = r.arriveCityName,
              c = r.departAirportShortName,
              o = r.departAirportName,
              s = r.departTerminal,
              d = r.arriveAirportShortName,
              m = r.arriveAirportName,
              h = r.arriveTerminal,
              u = r.departDateTime,
              p = r.arriveDateTime,
              g = r.costTime,
              Z = r.isDiffArriveAirport,
              w = r.isDiffDepartAirport,
              v = r.subSegment,
              C = r.basicInfo,
              b = C.airlineIcon,
              V = C.airlineName,
              x = C.flightNumber,
              T = C.aircraftTypeName,
              B = C.aircraftTypeSize,
              k = C.mealDesc,
              X = C.tag,
              y = !(
                null == v ||
                null === (t = v[0]) ||
                void 0 === t ||
                !t.arriveCityName
              );
            return (0, f.tZ)(i.View, {
              className: "flight-info",
              children: (0, f.BX)(i.View, {
                className: "flight-banner",
                children: [
                  (0, f.BX)(i.View, {
                    className: "hd flex-align-items-center",
                    children: [
                      (0, f.tZ)(i.View, {
                        className: "segment-tag",
                        children: X,
                      }),
                      n,
                      "-",
                      a,
                      " ",
                      l()(u).format("MM月DD日"),
                    ],
                  }),
                  (0, f.BX)(i.View, {
                    className: "bd flex",
                    children: [
                      (0, f.BX)(i.View, {
                        className: "from flex-1",
                        children: [
                          (0, f.tZ)(i.View, {
                            className: "time",
                            children: l()(u).format("HH:mm"),
                          }),
                          (0, f.BX)(i.View, {
                            className: "station ".concat(w ? "color-diff" : ""),
                            children: [c || o, s],
                          }),
                        ],
                      }),
                      (0, f.tZ)(i.View, {
                        className: "mid flex-align-items-center flex-column",
                        children:
                          y &&
                          (0, f.BX)(i.View, {
                            className: "stop-by font-12 color-9",
                            children: [
                              "停",
                              v[0].arriveCityName,
                              v[0].stopTime,
                            ],
                          }),
                      }),
                      (0, f.BX)(i.View, {
                        className: "to flex-1",
                        children: [
                          (0, f.tZ)(i.View, {
                            className: "time",
                            children: l()(p).format("HH:mm"),
                          }),
                          (0, f.BX)(i.View, {
                            className: "station ".concat(Z ? "color-diff" : ""),
                            children: [d || m, h],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, f.BX)(i.View, {
                    className: "botm flex-center",
                    id: "AbAA",
                    onClick: function () {
                      return N({ flightDetail: r });
                    },
                    children: [
                      (0, f.tZ)(i.Image, { src: b, className: "flt_icon" }),
                      (0, f.BX)(i.View, {
                        className: "flex-align-items-center",
                        children: [
                          (0, f.BX)(i.Text, {
                            className: "flt_txt",
                            children: [V, x],
                          }),
                          T &&
                            (0, f.BX)(i.Text, {
                              className: "flt_txt",
                              children: [T, "(", B, ")"],
                            }),
                          (0, f.BX)(i.Text, {
                            className: "flt_txt",
                            children: ["共", g],
                          }),
                          k &&
                            (0, f.tZ)(i.Text, {
                              className: "flt_txt",
                              children: k,
                            }),
                        ],
                      }),
                      (0, f.tZ)(i.Text, { className: "ifont2-arr iconfont2" }),
                    ],
                  }),
                ],
              }),
            });
          };
        t.Z = n.default.memo(function (e) {
          var t = e.flightDetail,
            r = e.rebookInfo,
            n = e.luggageInfos;
          return (0, f.BX)(i.View, {
            className: "rebook-detail",
            children: [
              n &&
                (0, f.BX)(i.View, {
                  className: "rt-tip font-12 flex-align-items-center",
                  id: "AbAB",
                  onClick: function () {
                    return (function (e) {
                      (0, o.getCurrentPage)().showCommonDrawer({
                        title: "行李额说明",
                        content: function () {
                          return (0, f.tZ)(u, { luggageInfos: e });
                        },
                        className: "rebook-policy-pop",
                      });
                    })(n);
                  },
                  children: [
                    "退改签、行李政策",
                    (0, f.tZ)(i.Text, { className: "ifont2-arr iconfont2" }),
                  ],
                }),
              (0, f.tZ)(g, { flightDetail: t }),
              (0, f.tZ)(i.View, {
                className: "divider",
                children: (0, f.tZ)(i.View, { className: "line" }),
              }),
              (0, f.tZ)(p, { rebookInfo: r }),
            ],
          });
        });
      },
    },
  ]);
})();
