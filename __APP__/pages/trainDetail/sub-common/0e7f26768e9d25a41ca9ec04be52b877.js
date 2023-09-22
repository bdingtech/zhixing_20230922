!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [53533],
    {
      58117: function (e, t, i) {
        var a = i(52500),
          n = i(18783),
          s = i(71515),
          r = i(34229),
          o = i(79910),
          c = i(25391),
          m = i(70273),
          l = i(49120),
          d = i(48813),
          u = function (e) {
            var t = "";
            switch (e) {
              case 1:
                t = "上车补";
                break;
              case 2:
                t = "组合座";
                break;
              case 3:
                t = "跨站";
            }
            return t;
          };
        t.Z = a.default.memo(function (e) {
          var t = e.smartSchemeInfo,
            i = void 0 === t ? {} : t,
            S = e.trainInfo,
            g = void 0 === S ? {} : S,
            f = e.bgColor,
            h = void 0 === f ? "" : f,
            w = e.isNewDesc,
            N = void 0 !== w && w,
            T = i.desc,
            v = void 0 === T ? "" : T,
            V = i.tripDetailSmartDetailList,
            p = void 0 === V ? [] : V,
            Z = (0, l.getCurrentPage)(),
            b = null == Z ? void 0 : Z.pageId,
            D = null == Z ? void 0 : Z.ubtTrace;
          if (
            ((0, a.useEffect)(
              function () {
                if (p.length > 0) {
                  console.log("tripDetailSmartDetailList", p);
                  var e = [];
                  p.forEach(function (t, i) {
                    var a = t.smartSeatSchemeDetailList[0],
                      n = {};
                    (n.index = i + 1),
                      (n.scmType = u(a.type)),
                      (n.Source =
                        (null == a ? void 0 : a.orderSource) ||
                        "SmartJianlou_".concat(
                          null == g ? void 0 : g.source,
                          "Cross"
                        ) ||
                        0);
                    var s = JSON.parse(a.schemeInfo);
                    (n.tripid = s.tripId), e.push(n);
                  }),
                    D("TZWList_Smart_Smart_exposure", {
                      fromSource: "SmartSeatTrainRecommend",
                      PageId: b,
                      Status: "火车推荐智能坐席方案",
                      Trip: e,
                      Vid: n.ZP.cid + new Date().getTime(),
                    });
                }
              },
              [p]
            ),
            !p.length)
          )
            return (0, d.tZ)(s.View, {});
          var y = g.fromStation,
            I = g.toStation,
            B = g.trainNum,
            X = g.runTime,
            C = g.fromDate,
            x = g.fromTime,
            R = g.toTime,
            k = g.source,
            U = function (e, t) {
              console.log("scheme", e);
              var i = JSON.parse(e.schemeInfo);
              D("TZWList_Smart_Smart_click", {
                fromSource: "SmartSeatTrainRecommend",
                Index: "".concat(t + 1),
                PageId: b,
                scmType: u(e.type),
                Source:
                  e.orderSource ||
                  "SmartJianlou_".concat(
                    null == g ? void 0 : g.source,
                    "Cross"
                  ) ||
                  0,
                Status: "火车推荐智能坐席方案",
                TripId: i.tripId,
                Vid: n.ZP.cid + new Date().getTime(),
              });
              var a = "";
              if (3 === e.type) {
                var s,
                  r,
                  l,
                  d,
                  S,
                  f,
                  h,
                  w,
                  N,
                  T,
                  v,
                  V,
                  p,
                  Z = {
                    originDepartStation: y,
                    originArrivalStation: I,
                    originDepartTime: x,
                    originArrivalTime: R,
                    recommendDepartStation:
                      null === (s = e.subTrainSegments[0]) || void 0 === s
                        ? void 0
                        : s.fromStation,
                    recommendArrivalStation:
                      null === (r = e.subTrainSegments[0]) || void 0 === r
                        ? void 0
                        : r.toStation,
                    recommendDepartTime:
                      null === (l = e.subTrainSegments[0]) || void 0 === l
                        ? void 0
                        : l.startTime,
                    recommendArrivalTime:
                      null === (d = e.subTrainSegments[0]) || void 0 === d
                        ? void 0
                        : d.arriveTime,
                    recommendOffset:
                      null === (S = e.subTrainSegments[0]) || void 0 === S
                        ? void 0
                        : S.toStationDiff,
                    recommendDepOffset:
                      null === (f = e.subTrainSegments[0]) || void 0 === f
                        ? void 0
                        : f.fromStationDiff,
                    fromStationDiff:
                      null === (h = e.subTrainSegments[0]) || void 0 === h
                        ? void 0
                        : h.fromStationDiff,
                    toStationDiff:
                      null === (w = e.subTrainSegments[0]) || void 0 === w
                        ? void 0
                        : w.toStationDiff,
                  };
                a = ""
                  .concat(c.ZP.getTrainBookingUrl(), "?isStride=1&strideInfo=")
                  .concat(
                    encodeURIComponent(JSON.stringify(Z)),
                    "&fromPage=SmartJianlou_"
                  )
                  .concat(k, "Cross&dstation=")
                  .concat(
                    encodeURIComponent(
                      null === (N = e.subTrainSegments[0]) || void 0 === N
                        ? void 0
                        : N.fromStation
                    ),
                    "&astation="
                  )
                  .concat(
                    encodeURIComponent(
                      null === (T = e.subTrainSegments[0]) || void 0 === T
                        ? void 0
                        : T.toStation
                    ),
                    "&ddate="
                  )
                  .concat(
                    encodeURIComponent(
                      null === (v = e.subTrainSegments[0]) || void 0 === v
                        ? void 0
                        : v.startDate
                    ),
                    "&trainname="
                  )
                  .concat(
                    encodeURIComponent(
                      null === (V = e.subTrainSegments[0]) || void 0 === V
                        ? void 0
                        : V.trainNo
                    ),
                    "&seat="
                  )
                  .concat(
                    encodeURIComponent(
                      null === (p = e.subTrainSegments[0]) || void 0 === p
                        ? void 0
                        : p.seatName
                    ),
                    "&isgd=0&stu=0"
                  );
              } else
                a = ""
                  .concat((0, m.j)(), "?&orderSource=")
                  .concat(e.orderSource, "&schemeInfoV1=")
                  .concat(encodeURIComponent(e.schemeInfoV1));
              o.Z.commonNavigator(a);
            };
          return (0, d.BX)(s.View, {
            className: "train-smart-jianlou-module",
            children: [
              (0, d.tZ)(s.View, {
                className: "new-head flex",
                children: (0, d.BX)(s.View, {
                  className: "head-cont",
                  children: [
                    (0, d.BX)(s.View, {
                      className: "flex-center",
                      children: [
                        (0, d.tZ)(s.Image, {
                          className: "icon-img",
                          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/img_jlsq@3x.webp",
                        }),
                        (0, d.tZ)(s.View, { className: "split-line" }),
                        (0, d.tZ)(s.View, {
                          children: N ? "同车直达方案 无需抢票" : v,
                        }),
                      ],
                    }),
                    (0, d.BX)(s.View, {
                      className: "more flex-center",
                      id: "AAEN",
                      onClick: function () {
                        var e = p[0].smartSeatSchemeDetailList[0],
                          t = e.type,
                          i = e.subTrainSegments[0].seatName,
                          a =
                            "https://pages.suanya.com/webapp/20230324-train-remaining-tickets-monitor/result?isHideNavBar=YES&isImmersiveMode=YES&from="
                              .concat(y, "&to=")
                              .concat(I, "&no=")
                              .concat(B, "&runTime=")
                              .concat(X, "&fromDate=")
                              .concat(encodeURIComponent(C), "&fromTime=")
                              .concat(encodeURIComponent(x), "&toTime=")
                              .concat(encodeURIComponent(R), "&source=")
                              .concat(k, "&seatName=")
                              .concat(i, "&type=")
                              .concat(t);
                        o.Z.commonNavigator(a);
                      },
                      children: [
                        (0, d.tZ)(s.View, { children: "更多" }),
                        (0, d.tZ)(s.View, {
                          className: "iconfont2 ifont2-arr",
                          style: h ? "color: #879fc2;" : "",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, d.tZ)(s.View, {
                className: "content",
                children:
                  p &&
                  p.map(function (e, t) {
                    var i, a, n, c, m, l, u, S;
                    if (
                      !e.smartSeatSchemeDetailList &&
                      !e.smartSeatSchemeDetailList.length
                    )
                      return (0, d.tZ)(s.View, {});
                    var g = e.smartSeatSchemeDetailList[0];
                    return (0, d.BX)(
                      s.View,
                      {
                        className: "scheme-detail-item split-line",
                        style: h ? "background: none" : "",
                        children: [
                          (0, d.BX)(s.View, {
                            className: "hd flex flex-center",
                            children: [
                              (0, d.tZ)(s.View, {
                                className: "title",
                                children:
                                  null === (i = g.subTrainTripCard) ||
                                  void 0 === i
                                    ? void 0
                                    : i.title,
                              }),
                              (0, d.tZ)(s.View, {
                                className: "desc",
                                children: (0, d.tZ)(r.ZtRichText, {
                                  space: "nbsp",
                                  nodes: o.Z.convertAppTextToHtmlStr(
                                    null === (a = g.subTrainTripCard) ||
                                      void 0 === a
                                      ? void 0
                                      : a.seatDesc
                                  ),
                                }),
                              }),
                              (0, d.tZ)(s.View, {
                                className: "price",
                                children:
                                  null === (n = g.subTrainTripCard) ||
                                  void 0 === n
                                    ? void 0
                                    : n.totalPrice,
                              }),
                            ],
                          }),
                          1 === g.type &&
                            (0, d.BX)(s.View, {
                              className: "scheme-stride",
                              children: [
                                (0, d.tZ)(s.View, {
                                  className: "line-solid first",
                                }),
                                (0, d.tZ)(s.View, {
                                  className: "line-dashed last",
                                }),
                                (0, d.BX)(s.View, {
                                  className: "stride-info",
                                  children: [
                                    (0, d.BX)(s.View, {
                                      className: "part",
                                      children: [
                                        (0, d.tZ)(s.View, {
                                          className: "time",
                                          children:
                                            g.subTrainSegments[0].startTime,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "station",
                                          children:
                                            g.subTrainSegments[0].fromStation,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "tag-status",
                                          children: "上车",
                                        }),
                                      ],
                                    }),
                                    (0, d.BX)(s.View, {
                                      className: "part",
                                      children: [
                                        (0, d.tZ)(s.View, {
                                          className: "time tgrey",
                                          children:
                                            g.subTrainSegments[0].arriveTime,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "station tgrey",
                                          children:
                                            g.subTrainSegments[0].toStation,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "icon-dot",
                                          children: " ",
                                        }),
                                      ],
                                    }),
                                    (0, d.BX)(s.View, {
                                      className: "part",
                                      children: [
                                        (0, d.tZ)(s.View, {
                                          className: "time",
                                          children:
                                            null ===
                                              (c = g.subTrainSegments[1]) ||
                                            void 0 === c
                                              ? void 0
                                              : c.arriveTime,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "station",
                                          children:
                                            (null ===
                                              (m = g.subTrainSegments[1]) ||
                                            void 0 === m
                                              ? void 0
                                              : m.toStation) ||
                                            g.subTrainSegments[0].toStation,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "tag-status",
                                          children: "下车",
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "tag-grey",
                                          children: "补票".concat(
                                            Math.abs(
                                              g.subTrainSegments[0]
                                                .toStationDiff
                                            ),
                                            "站"
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          2 === g.type &&
                            (0, d.BX)(s.View, {
                              className: "scheme-stride",
                              children: [
                                (0, d.tZ)(s.View, {
                                  className: "line-solid first",
                                }),
                                (0, d.tZ)(s.View, {
                                  className: "line-solid last",
                                }),
                                (0, d.BX)(s.View, {
                                  className: "stride-info",
                                  children: [
                                    (0, d.BX)(s.View, {
                                      className: "part",
                                      children: [
                                        (0, d.tZ)(s.View, {
                                          className: "time",
                                          children:
                                            g.subTrainSegments[0].startTime,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "station",
                                          children:
                                            g.subTrainSegments[0].fromStation,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "tag-status",
                                          children: "上车",
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "tag-white",
                                          children:
                                            g.subTrainSegments[0].seatName,
                                        }),
                                      ],
                                    }),
                                    (0, d.BX)(s.View, {
                                      className: "part",
                                      children: [
                                        (0, d.tZ)(s.View, {
                                          className: "time tgrey",
                                          children:
                                            g.subTrainSegments[0].arriveTime,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "station tgrey",
                                          children:
                                            g.subTrainSegments[0].toStation,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "tag-grey",
                                          children: "车内换座",
                                        }),
                                      ],
                                    }),
                                    (0, d.BX)(s.View, {
                                      className: "part",
                                      children: [
                                        (0, d.tZ)(s.View, {
                                          className: "time",
                                          children:
                                            null ===
                                              (l = g.subTrainSegments[1]) ||
                                            void 0 === l
                                              ? void 0
                                              : l.arriveTime,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "station",
                                          children:
                                            (null ===
                                              (u = g.subTrainSegments[1]) ||
                                            void 0 === u
                                              ? void 0
                                              : u.toStation) ||
                                            g.subTrainSegments[0].toStation,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "tag-status",
                                          children: "下车",
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "tag-white",
                                          children:
                                            (null ===
                                              (S = g.subTrainSegments[1]) ||
                                            void 0 === S
                                              ? void 0
                                              : S.seatName) ||
                                            g.subTrainSegments[0].seatName,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          3 === g.type &&
                            (0, d.BX)(s.View, {
                              className: "scheme-stride",
                              children: [
                                (0, d.tZ)(s.View, {
                                  className: "line-solid first",
                                }),
                                (0, d.tZ)(s.View, {
                                  className: "line-solid last",
                                }),
                                (0, d.BX)(s.View, {
                                  className: "stride-info",
                                  children: [
                                    g.subTrainSegments[0].fromStationDiff > 0 &&
                                      (0, d.BX)(s.View, {
                                        className: "part",
                                        children: [
                                          (0, d.tZ)(s.View, {
                                            className: "time tgrey",
                                            children:
                                              g.subTrainSegments[0].startTime,
                                          }),
                                          (0, d.tZ)(s.View, {
                                            className: "station tgrey",
                                            children:
                                              g.subTrainSegments[0].fromStation,
                                          }),
                                          (0, d.tZ)(s.View, {
                                            className: "icon-dot",
                                            children: " ",
                                          }),
                                          (0, d.tZ)(s.View, {
                                            className: "tag-grey ".concat(
                                              g.subTrainSegments[0]
                                                .toStationDiff > 0
                                                ? "to-diff"
                                                : ""
                                            ),
                                            children: "多买".concat(
                                              g.subTrainSegments[0]
                                                .fromStationDiff,
                                              "站"
                                            ),
                                          }),
                                        ],
                                      }),
                                    (0, d.BX)(s.View, {
                                      className: "part",
                                      children: [
                                        (0, d.tZ)(s.View, {
                                          className: "time",
                                          children: g.originStartTime,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "station",
                                          children: g.originFromStation,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "tag-status",
                                          children: "上车",
                                        }),
                                      ],
                                    }),
                                    (0, d.BX)(s.View, {
                                      className: "part",
                                      children: [
                                        (0, d.tZ)(s.View, {
                                          className: "time ",
                                          children: g.originArriveTime,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "station ",
                                          children: g.originToStation,
                                        }),
                                        (0, d.tZ)(s.View, {
                                          className: "tag-status",
                                          children: "下车",
                                        }),
                                      ],
                                    }),
                                    g.subTrainSegments[0].toStationDiff > 0 &&
                                      (0, d.BX)(s.View, {
                                        className: "part",
                                        children: [
                                          (0, d.tZ)(s.View, {
                                            className: "time tgrey",
                                            children:
                                              g.subTrainSegments[0].arriveTime,
                                          }),
                                          (0, d.tZ)(s.View, {
                                            className: "station tgrey",
                                            children:
                                              g.subTrainSegments[0].toStation,
                                          }),
                                          (0, d.tZ)(s.View, {
                                            className: "icon-dot",
                                          }),
                                          (0, d.tZ)(s.View, {
                                            className:
                                              "tag-grey to-diff ".concat(
                                                g.subTrainSegments[0]
                                                  .fromStationDiff > 0
                                                  ? "from-diff"
                                                  : ""
                                              ),
                                            children: "多买".concat(
                                              g.subTrainSegments[0]
                                                .toStationDiff,
                                              "站"
                                            ),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          (0, d.tZ)(s.View, {
                            className: "btn-book",
                            id: "AAEO",
                            onClick: function () {
                              return U(g, t);
                            },
                            children: "预订",
                          }),
                        ],
                      },
                      "smart-detail-item-".concat(t)
                    );
                  }),
              }),
            ],
          });
        });
      },
    },
  ]);
})();
