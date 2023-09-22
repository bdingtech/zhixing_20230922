!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [36188],
    {
      49981: function (e, t, n) {
        var r = n(22276),
          a = n(298),
          i = n(79301),
          c = n(95308),
          o = n(90129),
          s = n(74921),
          u = n(26498),
          l = n(10741),
          f = n(79792),
          m = n(49120),
          d = n(71515),
          h = n(52500),
          p = n(48813),
          v = [
            "chosenList",
            "mainTrain",
            "onSelectTrain",
            "isShowPreChosenList",
            "handleCheck12306Auth",
            "className",
          ],
          N = function (e) {
            var t = Math.floor(parseInt(e) / 60),
              n = parseInt(e) % 60;
            return t > 0
              ? "".concat(t, "时").concat(n, "分")
              : "".concat(n, "分");
          };
        t.Z = (0, h.forwardRef)(function (e, t) {
          var n = e.chosenList,
            Z = e.mainTrain,
            w = e.onSelectTrain,
            x = e.isShowPreChosenList,
            b = void 0 !== x && x,
            g = e.handleCheck12306Auth,
            S = e.className,
            T = void 0 === S ? "" : S,
            k = (0, s.Z)(e, v),
            V = (0, h.useState)([]),
            C = (0, o.Z)(V, 2),
            B = C[0],
            A = C[1],
            D = (0, h.useState)(n || []),
            I = (0, o.Z)(D, 2),
            y = I[0],
            L = I[1],
            P = Z || {},
            X = P.DepartStation,
            _ = P.ArriveStation,
            E = P.TrainNumber,
            M = P.DepartureDate,
            R = P.SeatName,
            j = (function () {
              var e = (0, c.Z)(
                (0, i.Z)().mark(function e(t) {
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!w) {
                            e.next = 6;
                            break;
                          }
                          return (e.next = 3), w(t);
                        case 3:
                          if (e.sent) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          L(t);
                        case 7:
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
            z = (function () {
              var e = (0, c.Z)(
                (0, i.Z)().mark(function e() {
                  var t, n, r, a, o;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (b
                              ? null ===
                                  (t = (n = (0, m.getCurrentPage)())
                                    .ubtTrace) ||
                                void 0 === t ||
                                t.call(n, "TZWBuyBook_Alternative_More_click", {
                                  PageId: (0, m.getCurrentPage)().pageId,
                                })
                              : null ===
                                  (r = (a = (0, m.getCurrentPage)())
                                    .ubtTrace) ||
                                void 0 === r ||
                                r.call(
                                  a,
                                  "TZWBuySeckill_Alternative_More_click",
                                  { PageId: (0, m.getCurrentPage)().pageId }
                                ),
                            !(y.length >= 2))
                          ) {
                            e.next = 4;
                            break;
                          }
                          return (
                            (0, m.showToast)("最多选择两个备选车次哦~"),
                            e.abrupt("return")
                          );
                        case 4:
                          return (e.next = 6), null == g ? void 0 : g();
                        case 6:
                          (o = [
                            "".concat(X, "-").concat(E, "-").concat(_),
                          ].join(",")),
                            (0, m.getCurrentPage)().navigateTo({
                              url: "/pages/trainRob/otherlist/otherlist?excludeTrainStrs="
                                .concat(encodeURIComponent(o), "&TrainNumber=")
                                .concat(E, "&DepartStation=")
                                .concat(X, "&ArriveStation=")
                                .concat(_, "&DepartureDates=")
                                .concat(M, "&DepartureDate=")
                                .concat(M, "&SeatName=")
                                .concat(R),
                              data: {
                                chosenTrainList: y.map(function (e) {
                                  return {
                                    DepartStation: e.departStation,
                                    ArriveStation: e.arriveStation,
                                    TrainNumber: e.trainNumber,
                                  };
                                }),
                              },
                              callback: function (e) {
                                return (0, c.Z)(
                                  (0, i.Z)().mark(function t() {
                                    var n, r;
                                    return (0, i.Z)().wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            (null === (n = e.chosenTrainList) ||
                                            void 0 === n
                                              ? void 0
                                              : n.length) > 0 &&
                                              ((r = e.chosenTrainList.map(
                                                function (e) {
                                                  return {
                                                    departStation:
                                                      e.DepartStation,
                                                    arriveStation:
                                                      e.ArriveStation,
                                                    trainNumber: e.TrainNumber,
                                                  };
                                                }
                                              )),
                                              j(r));
                                          case 1:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                )();
                              },
                            });
                        case 8:
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
            H = (function () {
              var e = (0, c.Z)(
                (0, i.Z)().mark(function e() {
                  var t, n, r, c;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (b) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (e.next = 4),
                            (0, l.dHi)({
                              departStation: X,
                              arriveStation: _,
                              departDate: M,
                              channelName: f.default.isTieyou
                                ? "tieyou"
                                : "zhixing",
                              searchType: 0,
                            })
                          );
                        case 4:
                          (n = e.sent),
                            (null == (r = n.responseBody) ||
                            null === (t = r.trainInfoList) ||
                            void 0 === t
                              ? void 0
                              : t.length) > 0 &&
                              ((c =
                                null == r
                                  ? void 0
                                  : r.trainInfoList
                                      .filter(function (e) {
                                        return e.trainNumber !== E;
                                      })
                                      .slice(0, 2)
                                      .map(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { timesCost: N(e.runTime) });
                                      })),
                              A(c));
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, h.useEffect)(function () {
              H();
            }, []),
            (0, h.useEffect)(
              function () {
                L(n || []);
              },
              [n]
            ),
            (0, h.useImperativeHandle)(t, function () {
              return {
                getValues: function () {
                  return y;
                },
              };
            }),
            Z
              ? (0, p.BX)(
                  d.View,
                  (0, a.Z)(
                    (0, a.Z)(
                      { className: "setskill-train-selector ".concat(T) },
                      k
                    ),
                    {},
                    {
                      children: [
                        (0, p.BX)(d.View, {
                          className: "flex flex-center",
                          children: [
                            (0, p.tZ)(d.View, {
                              className: "tit",
                              children: "备选车次",
                            }),
                            (0, p.BX)(d.View, {
                              className: "flex-1 flex flex-center",
                              style: { overflow: "hidden" },
                              children: [
                                (0, p.tZ)(d.View, {
                                  className: "flex-1 content ".concat(
                                    y.length > 0 ? "active" : ""
                                  ),
                                  children:
                                    y
                                      .map(function (e) {
                                        return e.trainNumber;
                                      })
                                      .join(",") || "多车次开售，同时秒杀",
                                }),
                                (0, p.BX)(d.View, {
                                  className: " flex flex-center right-btn",
                                  id: "AAEm",
                                  onClick: z,
                                  children: [
                                    (0, p.tZ)(d.Text, { children: "多选" }),
                                    (0, p.tZ)(d.Text, {
                                      className: "iconfont2 ifont2-arr icon",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        B.length > 0 &&
                          (0, p.tZ)(d.View, {
                            className: "train-list",
                            children: B.map(function (e, t) {
                              return (0, p.BX)(
                                d.View,
                                {
                                  className: " flex flex-center train-li",
                                  id: "AAEn",
                                  onClick: function () {
                                    !(function (e) {
                                      var t = y.find(function (t) {
                                        return t.trainNumber === e.trainNumber;
                                      });
                                      j(
                                        t
                                          ? y.filter(function (t) {
                                              return (
                                                t.trainNumber !== e.trainNumber
                                              );
                                            })
                                          : [].concat((0, r.Z)(y), [e])
                                      );
                                    })(e);
                                  },
                                  children: [
                                    (0, p.BX)(d.View, {
                                      className:
                                        "flex flex-center flex-1 left-content",
                                      children: [
                                        (0, p.BX)(d.View, {
                                          className: "station from",
                                          children: [
                                            (0, p.tZ)(d.View, {
                                              className: "time",
                                              children: e.departTime,
                                            }),
                                            (0, p.tZ)(d.View, {
                                              className: "name",
                                              children: e.departStation,
                                            }),
                                          ],
                                        }),
                                        (0, p.BX)(d.View, {
                                          className:
                                            "flex flex-column flex-center travel-line",
                                          children: [
                                            (0, p.tZ)(d.View, {
                                              children: e.timesCost,
                                            }),
                                            (0, p.tZ)(d.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon_ht_lb@3x.png",
                                              className: "img-line",
                                              mode: "widthFix",
                                            }),
                                            (0, p.tZ)(d.View, {
                                              children: e.trainNumber,
                                            }),
                                          ],
                                        }),
                                        (0, p.BX)(d.View, {
                                          className: "station from",
                                          children: [
                                            (0, p.tZ)(d.View, {
                                              className: "time",
                                              children: e.arriveTime,
                                            }),
                                            (0, p.tZ)(d.View, {
                                              className: "name",
                                              children: e.arriveStation,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, p.tZ)(d.View, {
                                      className: "right",
                                      children: (0, p.tZ)(u.Z, {
                                        checked: y.find(function (t) {
                                          return (
                                            e.trainNumber === t.trainNumber
                                          );
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                          }),
                      ],
                    }
                  )
                )
              : null
          );
        });
      },
    },
  ]);
})();
