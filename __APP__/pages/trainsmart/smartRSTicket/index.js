!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/fecc9c60875b710a8101d0d50626beef.js"),
    require("../sub-common/580faf134c1c3cc47a839c0faf698ee0.js"),
    require("../sub-common/ebaf792912af305d93ba8f963b48e810.js"),
    require("../sub-common/9a331a48172fb12634a44451f9d453dd.js"),
    require("../sub-common/459d6d2489aa070d5ebadb25e6fd6fde.js"),
    require("../sub-common/0fe6dbf848482e14c8c75a1306d43d89.js"),
    require("../sub-common/86f59da4a97c930d38003a6df12530ed.js"),
    require("../sub-common/01c2d1ac82646bd1b3ca4fb3bd1e1490.js"),
    require("../sub-common/f74766735f415f1ee0b2a563a6e641e0.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [82219],
      {
        66237: function (e, t, i) {
          var n,
            a = i(32180),
            o = i(298),
            r = i(79301),
            c = i(95308),
            s = i(57042),
            l = i(24460),
            d = i(21867),
            m = i(86066),
            u = i(52500),
            f = i(92954),
            h = i.n(f),
            p = i(71515),
            w = i(34229),
            g = i(79792),
            N = i(79910),
            T = i(25391),
            v = i(93761),
            k = i(8271),
            Z = i.n(k),
            V = (i(89976), i(81957)),
            b = i(10741),
            S = i(13025),
            y = i(18783),
            I = i(2809),
            x = i(49120),
            B = i(58676),
            D = i(94190),
            P = i(69817),
            C = i(69192),
            X = i(93983),
            _ = i(29983),
            O = i(93510),
            R = i(79982),
            z = i(48813),
            F = u.default.memo(function (e) {
              var t = e.show,
                i = void 0 === t || t,
                n = e.maskType,
                a = void 0 === n ? "" : n,
                o = e.isTieyou,
                r = void 0 !== o && o,
                c = e.showChain,
                s = void 0 !== c && c,
                l = e.enableDetail,
                d = void 0 !== l && l,
                m = e.originTicketInfo,
                u = void 0 === m ? {} : m,
                f = e.rsType,
                h = void 0 === f ? "" : f,
                g = e.showFirstPasDetail,
                N = void 0 === g ? function () {} : g;
              return u && u.ticketInfo
                ? (0, z.tZ)(p.View, {
                    className: "train-smart-rs-ticket-banner-n",
                    children: (0, z.tZ)(p.View, {
                      className: r ? "ty" : "zx",
                      children:
                        i &&
                        (0, z.BX)(p.View, {
                          className: "white-box first-trip ".concat(
                            "showFirstLineDetail" === a ? "detail" : ""
                          ),
                          children: [
                            s &&
                              (0, z.BX)(p.Block, {
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "left-chain",
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "right-chain",
                                  }),
                                ],
                              }),
                            u.tag &&
                              (0, z.tZ)(p.View, {
                                className: "tit",
                                children: u.tag,
                              }),
                            (0, z.BX)(p.View, {
                              className: "first-trip-hd",
                              children: [
                                (0, z.BX)(p.View, {
                                  className: "cont",
                                  children: [u.fromDateDesc, "出发"],
                                }),
                                (0, z.tZ)(p.View, {
                                  className: "status",
                                  children: u.status,
                                }),
                                d &&
                                  (0, z.BX)(p.View, {
                                    className: "btn-detail",
                                    id: "AFAt",
                                    onClick: N,
                                    children: [
                                      "showFirstLineDetail" === a
                                        ? "收起"
                                        : "详细",
                                      (0, z.tZ)(p.Text, {
                                        className: "ifont-triangle iconfont",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, z.BX)(p.View, {
                              className: "first-trip-bd",
                              children: [
                                (0, z.BX)(p.View, {
                                  className: "from",
                                  children: [
                                    (0, z.tZ)(p.View, {
                                      className: "time ".concat(
                                        3 === h ? "color-green" : ""
                                      ),
                                      children: u.ticketInfo.fromTime,
                                    }),
                                    (0, z.tZ)(p.View, {
                                      className: "station",
                                      children: u.ticketInfo.fromStation,
                                    }),
                                  ],
                                }),
                                (0, z.tZ)(p.View, { className: "mid" }),
                                (0, z.BX)(p.View, {
                                  className: "to",
                                  children: [
                                    (0, z.tZ)(p.View, {
                                      className: "time",
                                      children: u.ticketInfo.toTime,
                                    }),
                                    (0, z.tZ)(p.View, {
                                      className: "station ".concat(
                                        2 === h ? "color-green" : ""
                                      ),
                                      children: u.ticketInfo.toStation,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, z.BX)(p.View, {
                              className: "first-trip-bd-botm",
                              children: [
                                (0, z.BX)(p.View, {
                                  className: "item",
                                  children: [
                                    (0, z.tZ)(p.View, {
                                      className: "name",
                                      children: "座席",
                                    }),
                                    (0, z.tZ)(p.View, {
                                      className: "value ".concat(
                                        1 === h ? "color-green" : ""
                                      ),
                                      children: u.ticketInfo.seatName,
                                    }),
                                  ],
                                }),
                                (0, z.BX)(p.View, {
                                  className: "item",
                                  children: [
                                    (0, z.tZ)(p.View, {
                                      className: "name",
                                      children: "车次",
                                    }),
                                    (0, z.tZ)(p.View, {
                                      className: "value ".concat(
                                        3 === h ? "color-green" : ""
                                      ),
                                      children: u.ticketInfo.trainNo,
                                    }),
                                  ],
                                }),
                                (0, z.BX)(p.View, {
                                  className: "item",
                                  children: [
                                    (0, z.tZ)(p.View, {
                                      className: "name",
                                      children: "价格",
                                    }),
                                    (0, z.tZ)(p.View, {
                                      className: "value price",
                                      children: u.totalPrice,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            !!u.remindInfo &&
                              (0, z.tZ)(p.View, {
                                className: "first-trip-tips",
                                children: (0, z.tZ)(w.ZtRichText, {
                                  className: "tips",
                                  nodes: u.remindInfo,
                                }),
                              }),
                          ],
                        }),
                    }),
                  })
                : (0, z.tZ)(p.View, {});
            }),
            L = function (e) {
              var t = e.isOrigin,
                i = void 0 !== t && t,
                n = e.mergeOrderTicketInfo,
                a = e.rescheduleOriginTicketInfo,
                o = e.rescheduleConfirmTicketInfo,
                r = e.orderInfo,
                c = e.showSecondLineDetail,
                s = i ? a : o,
                l = 1 === n.routeSequence ? 2 : 1,
                d =
                  1 === n.routeSequence
                    ? n.orderTicketInfos[0]
                    : s.orderTicketInfo[0],
                m =
                  2 === n.routeSequence
                    ? n.orderTicketInfos[0]
                    : s.orderTicketInfo[0];
              return (0, z.BX)(p.View, {
                className: "combine-seat-smart-rs-ticket-banner "
                  .concat(i ? "origin" : "reschedule", " ")
                  .concat(g.default.isTieyou ? "ty" : "zx"),
                children: [
                  (0, z.BX)(p.View, {
                    className: "ticket-desc-tag",
                    children: [
                      (0, z.tZ)(p.View, {
                        className: "tag-1",
                        children: i ? "原车票" : "已占座",
                      }),
                      (0, z.tZ)(p.View, { className: "skew" }),
                      (0, z.tZ)(p.View, {
                        className: "tag-2",
                        children: i ? "已出票" : "待出票",
                      }),
                    ],
                  }),
                  (0, z.BX)(p.View, {
                    className: "route-banner",
                    children: [
                      (0, z.BX)(p.View, {
                        className: "first-route",
                        children: [
                          (0, z.tZ)(p.View, {
                            className: "time",
                            children: d.fromTime,
                          }),
                          (0, z.BX)(p.View, {
                            className: "route-sequence",
                            children: [
                              (0, z.tZ)(p.View, {
                                className: "operation bd-1px",
                                children: "上车",
                              }),
                              (0, z.tZ)(p.View, { className: "line" }),
                              (0, z.tZ)(p.View, {
                                className: "seat-name ".concat(
                                  1 == l ? "rescheduled" : "bd-1px"
                                ),
                                children: d.seatName,
                              }),
                            ],
                          }),
                          (0, z.tZ)(p.View, {
                            className: "station",
                            children: d.fromStation,
                          }),
                        ],
                      }),
                      (0, z.BX)(p.View, {
                        className: "transfer-point",
                        children: [
                          (0, z.tZ)(p.View, {
                            className: "time",
                            children: d.toTime,
                          }),
                          (0, z.BX)(p.View, {
                            className: "route-sequence",
                            children: [
                              (0, z.tZ)(p.View, { className: "line" }),
                              (0, z.tZ)(p.View, { className: "mid-point" }),
                              (0, z.tZ)(p.View, { className: "line" }),
                            ],
                          }),
                          (0, z.tZ)(p.View, {
                            className: "station",
                            children: d.toStation,
                          }),
                        ],
                      }),
                      (0, z.BX)(p.View, {
                        className: "second-route",
                        children: [
                          (0, z.tZ)(p.View, {
                            className: "time",
                            children: m.toTime,
                          }),
                          (0, z.BX)(p.View, {
                            className: "route-sequence",
                            children: [
                              (0, z.tZ)(p.View, {
                                className: "seat-name ".concat(
                                  2 == l ? "rescheduled" : "bd-1px"
                                ),
                                children: m.seatName,
                              }),
                              (0, z.tZ)(p.View, { className: "line" }),
                              (0, z.tZ)(p.View, {
                                className: "operation bd-1px",
                                children: "下车",
                              }),
                            ],
                          }),
                          (0, z.tZ)(p.View, {
                            className: "station",
                            children: m.toStation,
                          }),
                        ],
                      }),
                      (0, z.BX)(p.View, {
                        className: "route-desc",
                        children: [
                          (0, z.tZ)(p.View, {
                            className: "total-price",
                            children: s.ticketTotalPrice,
                          }),
                          (0, z.tZ)(p.View, {
                            className: "total-time",
                            children: s.ticketTotalUseTime,
                          }),
                        ],
                      }),
                    ],
                  }),
                  !i &&
                    r &&
                    (0, z.BX)(p.View, {
                      className: "trip-pasg",
                      id: "AFAE",
                      onClick: c,
                      children: [
                        (0, z.tZ)(p.View, {
                          className: "pasg-name",
                          children: r.pasStr,
                        }),
                        (0, z.BX)(p.View, {
                          className: "seat-box",
                          children: [
                            r.seatTagStr &&
                              (0, z.tZ)(p.View, {
                                className: "seat-tag",
                                children: r.seatTagStr,
                              }),
                            (0, z.tZ)(p.View, {
                              className: "seat",
                              children: r.seatNoStr,
                            }),
                            (0, z.tZ)(p.Text, {
                              className: "ifont-arr iconfont",
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              });
            },
            A = u.default.memo(function (e) {
              var t = e.show,
                i = void 0 === t || t,
                n = e.isTieyou,
                a = void 0 !== n && n,
                o = e.showChain,
                r = void 0 !== o && o,
                c = e.upBgImg,
                s = void 0 === c ? "" : c,
                l = e.orderInfo,
                d = void 0 === l ? {} : l,
                m = e.rsType,
                u = void 0 === m ? "" : m,
                f = e.smartSeries,
                h = void 0 === f ? 0 : f,
                g = e.goTT,
                N = void 0 === g ? function () {} : g,
                T = e.showSecondLineDetail,
                v = void 0 === T ? function () {} : T,
                k = e.mergeOrderTicketInfo,
                Z = void 0 === k ? {} : k,
                V = e.rescheduleOriginTicketInfo,
                b = void 0 === V ? {} : V,
                S = e.rescheduleConfirmTicketInfo,
                y = void 0 === S ? {} : S,
                I = e.isShowPeaceRefund,
                x = void 0 !== I && I;
              return d && d.ticketInfo
                ? (0, z.tZ)(p.View, {
                    className: "train-smart-rs-ticket-banner-s ".concat(
                      x ? "peace-refund-show" : ""
                    ),
                    children: (0, z.tZ)(p.View, {
                      className: a ? "ty" : "zx",
                      children:
                        i &&
                        (0, z.BX)(p.View, {
                          className: "white-box second-trip",
                          children: [
                            s &&
                              (0, z.tZ)(p.Image, {
                                src: s,
                                mode: "widthFix",
                                className: "up-bg",
                              }),
                            r &&
                              (0, z.BX)(p.Block, {
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "left-chain",
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "right-chain",
                                  }),
                                ],
                              }),
                            d.tag &&
                              (0, z.tZ)(p.View, {
                                className: "tit",
                                children: d.tag,
                              }),
                            (0, z.BX)(p.View, {
                              className: "second-trip-hd",
                              children: [
                                (0, z.BX)(p.View, {
                                  className: "cont",
                                  children: [d.fromDateDesc, "出发"],
                                }),
                                (0, z.tZ)(p.View, {
                                  className: "color-red",
                                  children:
                                    21 == h || 25 == h
                                      ? "同车次：".concat(d.ticketInfo.trainNo)
                                      : d.status,
                                }),
                              ],
                            }),
                            (0, z.BX)(p.View, {
                              className: "second-trip-bd",
                              children: [
                                (0, z.BX)(p.View, {
                                  className: "from",
                                  children: [
                                    (0, z.tZ)(p.View, {
                                      className: "time ".concat(
                                        3 === u ? "color-green" : ""
                                      ),
                                      children: d.ticketInfo.fromTime,
                                    }),
                                    (0, z.tZ)(p.View, {
                                      className: "station",
                                      children: d.ticketInfo.fromStation,
                                    }),
                                  ],
                                }),
                                (0, z.tZ)(p.View, {
                                  className: "schedule",
                                  id: "AFAu",
                                  onClick: N,
                                  children: "时刻表",
                                }),
                                (0, z.BX)(p.View, {
                                  className: "to",
                                  children: [
                                    (0, z.tZ)(p.View, {
                                      className: "time",
                                      children: d.ticketInfo.toTime,
                                    }),
                                    (0, z.tZ)(p.View, {
                                      className: "station ".concat(
                                        2 === u ? "color-green" : ""
                                      ),
                                      children: d.ticketInfo.toStation,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (21 === h || 25 === h) &&
                              (0, z.BX)(p.Block, {
                                children: [
                                  (0, z.tZ)(L, {
                                    isOrigin: !1,
                                    mergeOrderTicketInfo: Z,
                                    rescheduleOriginTicketInfo: b,
                                    rescheduleConfirmTicketInfo: y,
                                    orderInfo: d,
                                    showSecondLineDetail: v,
                                  }),
                                  (0, z.tZ)(L, {
                                    isOrigin: !0,
                                    mergeOrderTicketInfo: Z,
                                    rescheduleOriginTicketInfo: b,
                                    rescheduleConfirmTicketInfo: y,
                                    orderInfo: d,
                                    showSecondLineDetail: v,
                                  }),
                                ],
                              }),
                            21 !== h &&
                              25 !== h &&
                              (0, z.BX)(p.Block, {
                                children: [
                                  (0, z.BX)(p.View, {
                                    className: "second-trip-tick",
                                    children: [
                                      (0, z.BX)(p.View, {
                                        className: "lbox",
                                        children: [
                                          (0, z.tZ)(p.View, {
                                            className: "label",
                                            children: "座席",
                                          }),
                                          (0, z.tZ)(p.View, {
                                            className: "txt ".concat(
                                              1 === u ? "color-green" : ""
                                            ),
                                            children: d.ticketInfo.seatName,
                                          }),
                                        ],
                                      }),
                                      (0, z.BX)(p.View, {
                                        className: "mid",
                                        children: [
                                          (0, z.tZ)(p.View, {
                                            className: "label",
                                            children: "车次",
                                          }),
                                          (0, z.tZ)(p.View, {
                                            className: "".concat(
                                              3 === u ? "color-green" : ""
                                            ),
                                            children: d.ticketInfo.trainNo,
                                          }),
                                        ],
                                      }),
                                      (0, z.BX)(p.View, {
                                        className: "rbox",
                                        children: [
                                          (0, z.tZ)(p.View, {
                                            className: "label",
                                            children: "价格",
                                          }),
                                          (0, z.tZ)(p.View, {
                                            className: "price",
                                            children:
                                              d.ticketInfo.ticketInfoList[0]
                                                .ticketPrice,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  d.remindInfo &&
                                    (0, z.tZ)(p.View, {
                                      className: "second-trip-tips",
                                      children: (0, z.tZ)(w.ZtRichText, {
                                        className: "tips",
                                        nodes: d.remindInfo,
                                      }),
                                    }),
                                  (0, z.BX)(p.View, {
                                    className: "second-trip-pasg",
                                    id: "AFAv",
                                    onClick: v,
                                    children: [
                                      (0, z.tZ)(p.View, {
                                        className: "name",
                                        children: d.pasStr,
                                      }),
                                      d.seatTagStr &&
                                        (0, z.tZ)(p.View, {
                                          className: "tag-grey",
                                          children: d.seatTagStr,
                                        }),
                                      (0, z.tZ)(p.View, {
                                        className: "seat",
                                        children: d.seatNoStr,
                                      }),
                                      (0, z.tZ)(p.Text, {
                                        className: "ifont-arr iconfont",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                    }),
                  })
                : (0, z.tZ)(p.View, {});
            }),
            H = i(52824),
            G = i(38434),
            j = i(59510),
            M = u.default.memo(function (e) {
              var t,
                i = e.show,
                n = void 0 === i || i,
                a = e.isTieyou,
                o = void 0 !== a && a,
                r = e.ticketInfo,
                c = void 0 === r ? null : r,
                s = e.interceptAgainToast,
                l = void 0 === s ? {} : s,
                d = e.orderTimeout,
                m = void 0 === d ? null : d,
                u = e.peaceRefundTips,
                f = void 0 === u ? "" : u,
                g = e.hasFreeTask,
                N = void 0 !== g && g,
                T = e.goTT,
                v = void 0 === T ? function () {} : T,
                k = e.handleClose,
                Z = void 0 === k ? function () {} : k,
                V = e.confirm,
                b = void 0 === V ? function () {} : V,
                S = e.cancel,
                y = void 0 === S ? function () {} : S,
                I = e.tag,
                x = void 0 === I ? "" : I;
              if (!c) return (0, z.tZ)(p.View, {});
              var B = (0, j.C)(c.fromDate),
                D = (0, j.C)(c.toDate);
              return (0, z.BX)(p.View, {
                className: "train-smart-rs-ticket-cancel-stay-layer",
                children: [
                  (0, z.tZ)(p.View, {
                    className: "action-sheet-bg",
                    id: "AFAw",
                    onClick: Z,
                    style: {
                      display: "".concat(n ? "Block" : "none"),
                      opacity: "".concat(n ? 0.7 : 0),
                    },
                  }),
                  (0, z.BX)(p.View, {
                    className: "confirm-second-pop "
                      .concat(o ? "ty" : "zx", " ")
                      .concat(n ? "active" : ""),
                    children: [
                      (0, z.tZ)(p.View, {
                        className: "htit",
                        children: l.title,
                      }),
                      (0, z.BX)(p.View, {
                        className: "white-box pop-payment-tick",
                        children: [
                          (0, z.BX)(p.View, {
                            className: "pop-payment-hd",
                            style: { background: "#fff" },
                            children: [
                              (0, z.BX)(p.View, {
                                className: "from",
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "date",
                                    children: B,
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "time",
                                    children: c.fromTime,
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "station",
                                    children: c.fromStation,
                                  }),
                                ],
                              }),
                              (0, z.BX)(p.View, {
                                className: "mid",
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "schedule",
                                    id: "AFAx",
                                    onClick: v,
                                    children: "时刻表",
                                  }),
                                  (0, z.BX)(p.View, {
                                    className: "txt",
                                    children: [
                                      c.trainNo,
                                      (0, z.tZ)(p.Text, {
                                        className: "ifont-sfz iconfont",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, z.BX)(p.View, {
                                className: "to",
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "date",
                                    children: D,
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "time",
                                    children: c.toTime,
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "station",
                                    children: c.toStation,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, z.tZ)(p.View, {
                            className: "pop-payment-list",
                            children:
                              null === (t = c.ticketInfoList) || void 0 === t
                                ? void 0
                                : t.map(function (e, t) {
                                    return (0,
                                    z.BX)(p.View, { className: "item", children: [(0, z.tZ)(p.View, { className: "name", children: e.passengerName }), (0, z.tZ)(p.View, { className: "tag-grey", children: e.passengerType }), e.seatTag && (0, z.tZ)(p.View, { className: "tag-window", children: e.seatTag }), (0, z.BX)(p.View, { className: "seat", children: [e.seatType, " ￥", e.ticketPrice, " ", e.seatNo] })] }, t);
                                  }),
                          }),
                          f &&
                            (0, z.tZ)(G.Z, {
                              bannerInfo: {
                                img: "https://images3.c-ctrip.com/ztrip/train_zhu/Tag_text_Anxintui.png",
                                content: f,
                              },
                              customizeStyle: "margin: "
                                .concat(h().pxTransform(16), " ")
                                .concat(h().pxTransform(20), " 0;"),
                            }),
                        ],
                      }),
                      l.suggestInfo &&
                        (0, z.BX)(p.View, {
                          className: "white-box suggest-box",
                          children: [
                            (0, z.BX)(p.View, {
                              className: "suggest-hd",
                              children: [
                                (0, z.tZ)(p.Text, {
                                  className: "tag",
                                  children: l.suggestInfo.tag,
                                }),
                                l.suggestInfo.title,
                              ],
                            }),
                            (0, z.tZ)(p.View, {
                              className: "suggest-bd-con",
                              style: { marginTop: "24rpx" },
                              children: l.suggestInfo.descList.map(function (
                                e
                              ) {
                                return (0, z.tZ)(
                                  p.View,
                                  {
                                    className: "suggest-bd",
                                    children: (0, z.tZ)(p.View, {
                                      className: "txt",
                                      children: e,
                                    }),
                                  },
                                  "index"
                                );
                              }),
                            }),
                          ],
                        }),
                      l.tips &&
                        (0, z.tZ)(p.View, {
                          className: "white-box tips-box",
                          children: l.tips,
                        }),
                      (0, z.BX)(p.View, {
                        className: "rs-botm-box flex",
                        children: [
                          (0, z.tZ)(p.Button, {
                            className:
                              "btn btn-primary flex-1 flex-center flex-column",
                            id: "AFAy",
                            onClick: y,
                            children: l.cancelBtnName,
                          }),
                          (0, z.BX)(p.Button, {
                            className: "btn flex-1 btn-submit-".concat(
                              o ? "ty" : "zx",
                              " btn-2line flex-center flex-column"
                            ),
                            id: "AFAz",
                            onClick: b,
                            children: [
                              N &&
                                !x &&
                                (0, z.tZ)(p.Image, {
                                  className: "task-icon",
                                  src: "https://images3.c-ctrip.com/ztrip/train_zhu/Tag_ZNGQ_jujue_zrw.png",
                                }),
                              N &&
                                x &&
                                (0, z.tZ)(p.View, {
                                  className: "tag-desc",
                                  children: (0, z.tZ)(p.Text, {
                                    className: "td-txt",
                                    children: x,
                                  }),
                                }),
                              (0, z.tZ)(p.View, {
                                className: "btn-txt",
                                children: N ? "免服务费出票" : l.confirmBtnName,
                              }),
                              m &&
                                (0, z.BX)(p.View, {
                                  className: "flex time-text",
                                  children: [
                                    (0, z.tZ)(w.ZtCountdown, {
                                      endTime: m,
                                      format: { minute: "分", second: "秒" },
                                      isShowHour: !1,
                                    }),
                                    "后自动取消",
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            q = i(49656),
            E = u.default.memo(function (e) {
              var t,
                i = e.maskType,
                n = void 0 === i ? "" : i,
                a = e.smartSeries,
                o = void 0 === a ? 22 : a,
                r = e.rescheduleOriginTicketInfo,
                c = void 0 === r ? {} : r,
                s = e.rescheduleConfirmTicketInfo,
                l = void 0 === s ? {} : s,
                d = e.tag,
                m = void 0 === d ? "" : d,
                u = e.togglePlanCompare,
                f = void 0 === u ? function () {} : u,
                h = c.orderTicketInfo,
                w = void 0 === h ? [] : h,
                g = l.orderTicketInfo,
                T = void 0 === g ? [] : g;
              if (0 == w.length) return (0, z.tZ)(p.View, {});
              var v = T[0],
                k = v.trainNo,
                V = v.seatName,
                b = v.fromStation,
                S = v.toStation,
                y = v.fromDate,
                I = v.fromTime,
                x = v.toTime,
                B = v.ticketInfoList,
                D = void 0 === B ? [] : B,
                P = Z()(y).format("M月D日"),
                C = Z()(y).day(),
                X = N.Z.dayOfWeekZh(C),
                _ = w[0],
                O = _.trainNo,
                R = _.seatName,
                F = _.fromStation,
                L = _.toStation,
                A = _.fromTime,
                H = _.toTime,
                G = _.ticketInfoList,
                j = void 0 === G ? [] : G;
              return (0,
              z.BX)(p.View, { className: "compare-box ".concat("showPlanCompare" === n ? "detail" : ""), children: [(0, z.BX)(p.View, { className: "second-trip ".concat("showPlanCompare" === n ? "detail" : ""), children: [(0, z.tZ)(p.View, { className: "tit", children: m }), (0, z.BX)(p.View, { className: "second-trip-hd", children: [(0, z.BX)(p.View, { className: "cont", children: [P, " ", X, "出发"] }), (0, z.BX)(p.View, { className: "btn-detail", id: "AFBB", onClick: f, children: ["showPlanCompare" === n ? "收起原方案" : "原方案对比", (0, z.tZ)(p.Text, { className: "ifont-triangle iconfont" })] })] }), (0, z.BX)(p.View, { className: "second-trip-bd", children: [(0, z.BX)(p.View, { className: "from", children: [(0, z.tZ)(p.View, { className: "time", children: I }), (0, z.tZ)(p.View, { className: "station", children: b })] }), (0, z.BX)(p.View, { className: "mid", children: [(0, z.BX)(p.View, { className: "seat ".concat(-1 !== [23,
                                      24, 33, 34].indexOf(o) ? "highlight" : ""), children: [(0, z.BX)(p.View, { children: [V, "￥", null == D ? void 0 : D[0].ticketPrice] }), 34 == o && (0, z.tZ)(p.View, { className: "tag", children: (null == D || null === (t = D[0]) || void 0 === t ? void 0 : t.seatTag) || "" }), 33 == o && (0, z.tZ)(p.View, { className: "tag", children: "下铺" })] }), (0, z.tZ)(p.View, { className: "line" }), (0, z.tZ)(p.View, { className: "train-no ".concat(22 == o ? "highlight" : ""), children: k })] }), (0, z.BX)(p.View, { className: "to", children: [(0, z.tZ)(p.View, { className: "time", children: x }), (0, z.tZ)(p.View, { className: "station", children: S })] })] })] }), (0, z.tZ)(p.View, { className: "origin-ticket-info", children: (0, z.BX)(p.View, { className: "white-box second-trip", children: [(0, z.tZ)(p.View, { className: "tit", children: "原车票" }), (0, z.BX)(p.View, { className: "second-trip-bd", children: [(0, z.BX)(p.View, { className: "from", children: [(0, z.tZ)(p.View, { className: "time", children: A }), (0, z.tZ)(p.View, { className: "station", children: F })] }), (0, z.BX)(p.View, { className: "mid", children: [(0, z.tZ)(p.View, { className: "seat ".concat(-1 !== [23,
                                        24, 33, 34].indexOf(o) ? "highlight" : ""), children: (0, z.BX)(p.View, { children: [R, "￥", null == j ? void 0 : j[0].ticketPrice] }) }), (0, z.tZ)(p.View, { className: "line" }), (0, z.tZ)(p.View, { className: "train-no ".concat(22 == o ? "highlight" : ""), children: O })] }), (0, z.BX)(p.View, { className: "to", children: [(0, z.tZ)(p.View, { className: "time", children: H }), (0, z.tZ)(p.View, { className: "station", children: L })] })] })] }) })] });
            }),
            Q = u.default.memo(function (e) {
              var t = e.maskType,
                i = void 0 === t ? "" : t,
                n = e.smartSeries,
                a = void 0 === n ? 22 : n,
                o = e.rescheduleOriginTicketInfo,
                r = void 0 === o ? {} : o,
                c = e.rescheduleConfirmTicketInfo,
                s = void 0 === c ? {} : c,
                l = e.tag,
                d = void 0 === l ? "" : l,
                m = e.isShowPeaceRefund,
                u = void 0 !== m && m,
                f = e.goTT,
                h = void 0 === f ? function () {} : f,
                w = e.showSecondLineDetail,
                T = void 0 === w ? function () {} : w,
                v = e.togglePlanCompare,
                k = void 0 === v ? function () {} : v,
                V = s.orderTicketInfo,
                b = void 0 === V ? [] : V;
              if (0 == b.length) return (0, z.tZ)(p.View, {});
              var S = b[0],
                y = S.trainNo,
                I = S.seatName,
                x = S.fromStation,
                B = S.toStation,
                D = S.fromDate,
                P = S.fromTime,
                C = S.toTime,
                X = S.ticketInfoList,
                _ = void 0 === X ? [] : X,
                O = Z()(D).format("M月D日"),
                R = Z()(D).day(),
                F = N.Z.dayOfWeekZh(R),
                L = _.map(function (e) {
                  return e.passengerName;
                }).join("、"),
                A = _.map(function (e) {
                  return e.seatNo;
                }).join("、"),
                H = _.find(function (e) {
                  return e.seatTag;
                }),
                G = H ? H.seatTag : "";
              return (0,
              z.tZ)(p.View, { className: "train-smart-rs-trans-reschedule-route-banner", children: (0, z.BX)(p.View, { className: g.default.isTieyou ? "ty" : "zx", children: [(0, z.tZ)(E, { maskType: i, smartSeries: a, rescheduleOriginTicketInfo: r, rescheduleConfirmTicketInfo: s, togglePlanCompare: k, tag: d }), (0, z.BX)(p.View, { className: "second-trip ".concat(u ? "peace-refund-show" : "", " ").concat("showPlanCompare" === i ? "detail" : ""), children: [(0, z.tZ)(p.View, { className: "tit", children: d }), (0, z.BX)(p.View, { className: "second-trip-hd", children: [(0, z.BX)(p.View, { className: "cont", children: [O, " ", F, "出发"] }), (0, z.BX)(p.View, { className: "btn-detail", id: "AFBC", onClick: k, children: ["showPlanCompare" === i ? "收起原方案" : "原方案对比", (0, z.tZ)(p.Text, { className: "ifont-triangle iconfont" })] })] }), (0, z.BX)(p.View, { className: "second-trip-bd", children: [(0, z.BX)(p.View, { className: "from", children: [(0, z.tZ)(p.View, { className: "time", children: P }), (0, z.tZ)(p.View, { className: "station", children: x })] }), (0, z.tZ)(p.View, { className: "schedule", id: "AFBD", onClick: h, children: "时刻表" }), (0, z.BX)(p.View, { className: "to", children: [(0, z.tZ)(p.View, { className: "time", children: C }), (0, z.tZ)(p.View, { className: "station", children: B })] })] }), (0, z.BX)(p.View, { className: "second-trip-tick", children: [(0, z.BX)(p.View, { className: "lbox", children: [(0, z.tZ)(p.View, { className: "label", children: "座席" }), (0, z.BX)(p.View, { className: "txt seat ".concat(-1 !== [23,
                                        24, 33, 34].indexOf(a) ? "highlight" : ""), children: [(0, z.tZ)(p.View, { children: I }), -1 !== [34].indexOf(a) && G && (0, z.tZ)(p.View, { className: "seat-tag", children: G }), -1 !== [33].indexOf(a) && (0, z.tZ)(p.View, { className: "seat-tag", children: "下铺" })] })] }), (0, z.BX)(p.View, { className: "mid", children: [(0, z.tZ)(p.View, { className: "label", children: "车次" }), (0, z.tZ)(p.View, { className: "txt ".concat(-1 !== [22].indexOf(a) ? "highlight" : ""), children: y })] }), (0, z.BX)(p.View, { className: "rbox", children: [(0, z.tZ)(p.View, { className: "label", children: "价格" }), (0, z.tZ)(p.View, { className: "txt price", children: null == _ ? void 0 : _[0].ticketPrice })] })] }), (0, z.BX)(p.View, { className: "second-trip-pasg", id: "AFBE", onClick: T, children: [(0, z.tZ)(p.View, { className: "name", children: L }), G && (0, z.tZ)(p.View, { className: "tag-grey", children: G }), -1 !== [33].indexOf(a) && !G && (0, z.tZ)(p.View, { className: "tag-grey", children: "下铺" }), (0, z.tZ)(p.View, { className: "seat", children: A }), (0, z.tZ)(p.Text, { className: "ifont-arr iconfont" })] })] })] }) });
            }),
            U = u.default.memo(function (e) {
              var t,
                i,
                n,
                a = e.maskType,
                o = void 0 === a ? "" : a,
                r = e.enableDetail,
                c = void 0 === r || r,
                s = e.rescheduleOriginTicketInfo,
                l = void 0 === s ? {} : s,
                d = e.mergeOrderTicketInfo,
                m = void 0 === d ? {} : d,
                u = e.tag,
                f = void 0 === u ? "" : u,
                h = e.isShowPeaceRefund,
                w = void 0 !== h && h,
                T = e.showFirstPasDetail,
                v = void 0 === T ? function () {} : T,
                k = m.orderTicketInfos,
                V = void 0 === k ? [] : k;
              if (0 == V.length) return (0, z.tZ)(p.View, {});
              var b = V[0],
                S = b.trainNo,
                y = b.seatName,
                I = b.fromStation,
                x = b.toStation,
                B = b.fromDate,
                D = b.fromTime,
                P = b.toTime,
                C = Z()(B).format("M月D日"),
                X = Z()(B).day(),
                _ = N.Z.dayOfWeekZh(X);
              return (0, z.tZ)(p.View, {
                className: "train-smart-rs-trans-origin-route-banner",
                children: (0, z.tZ)(p.View, {
                  className: g.default.isTieyou ? "ty" : "zx",
                  children: (0, z.BX)(p.View, {
                    className: "first-trip "
                      .concat(w ? "peace-refund-show" : "", " ")
                      .concat("showFirstLineDetail" === o ? "detail" : ""),
                    children: [
                      (0, z.tZ)(p.View, { className: "tit", children: f }),
                      (0, z.BX)(p.View, {
                        className: "first-trip-hd",
                        children: [
                          (0, z.BX)(p.View, {
                            className: "cont",
                            children: [C, " ", _, "出发"],
                          }),
                          (0, z.tZ)(p.View, {
                            className: "status",
                            children: l.status,
                          }),
                          c &&
                            (0, z.BX)(p.View, {
                              className: "btn-detail",
                              id: "AFBA",
                              onClick: v,
                              children: [
                                "showFirstLineDetail" === o ? "收起" : "详细",
                                (0, z.tZ)(p.Text, {
                                  className: "ifont-triangle iconfont",
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, z.BX)(p.View, {
                        className: "first-trip-bd",
                        children: [
                          (0, z.BX)(p.View, {
                            className: "from",
                            children: [
                              (0, z.tZ)(p.View, {
                                className: "time",
                                children: D,
                              }),
                              (0, z.tZ)(p.View, {
                                className: "station",
                                children: I,
                              }),
                            ],
                          }),
                          (0, z.BX)(p.View, {
                            className: "mid",
                            children: [
                              (0, z.tZ)(p.View, {
                                className: "seat",
                                children: y,
                              }),
                              (0, z.tZ)(p.View, {
                                className: "train-no",
                                children: S,
                              }),
                            ],
                          }),
                          (0, z.BX)(p.View, {
                            className: "to",
                            children: [
                              (0, z.tZ)(p.View, {
                                className: "time",
                                children: P,
                              }),
                              (0, z.tZ)(p.View, {
                                className: "station",
                                children: x,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, z.tZ)(p.View, {
                        className: "first-trip-detail",
                        children: (0, z.tZ)(p.View, {
                          className: "first-trip-list",
                          children:
                            null == l ||
                            null === (t = l.orderTicketInfo) ||
                            void 0 === t ||
                            null === (i = t[0]) ||
                            void 0 === i ||
                            null === (n = i.ticketInfoList) ||
                            void 0 === n
                              ? void 0
                              : n.map(function (e, t) {
                                  return (0,
                                  z.BX)(p.View, { className: "item", children: [(0, z.tZ)(p.View, { className: "name", children: e.passengerName }), (0, z.tZ)(p.View, { className: "tag-grey", children: e.passengerType }), e.seatTag && (0, z.tZ)(p.View, { className: "tag-window", children: e.seatTag }), (0, z.BX)(p.View, { className: "seat", children: [e.seatType, " ￥", e.ticketPrice, " ", e.seatNo] })] }, t);
                                }),
                        }),
                      }),
                    ],
                  }),
                }),
              });
            }),
            K = u.default.memo(function (e) {
              var t = e.mergeOrderTicketInfo,
                i = void 0 === t ? {} : t,
                n = e.smartSeries,
                a = void 0 === n ? 22 : n,
                o = i.transferRemindInfo,
                r = void 0 === o ? {} : o,
                c = r.icon,
                s = r.title,
                l = r.compareInfo,
                d = r.remindInfo;
              return c && s
                ? (0, z.tZ)(p.View, {
                    className: "".concat(22 == a ? "near" : ""),
                    children: (0, z.BX)(p.View, {
                      className: "transfer-banner",
                      children: [
                        (0, z.tZ)(p.Image, {
                          src: c,
                          className: "transfer-icon",
                        }),
                        (0, z.tZ)(p.View, {
                          className: "tranfer-title",
                          children: s,
                        }),
                        (0, z.BX)(p.View, {
                          className: "tranfer-desc",
                          children: [
                            (0, z.BX)(p.View, {
                              className: "compare-info",
                              children: [
                                l,
                                23 == a || 24 == a || 33 == a || 34 == a
                                  ? "，"
                                  : "",
                              ],
                            }),
                            (0, z.tZ)(p.View, {
                              className: "remind-info",
                              children: d,
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, z.tZ)(p.View, {});
            }),
            Y = u.default.memo(function (e) {
              var t = e.maskType,
                i = void 0 === t ? "" : t,
                n = e.smartSeries,
                a = void 0 === n ? 22 : n,
                o = e.mergeOrderTicketInfo,
                r = void 0 === o ? {} : o,
                c = e.rescheduleOriginTicketInfo,
                s = void 0 === c ? {} : c,
                l = e.rescheduleConfirmTicketInfo,
                d = void 0 === l ? {} : l,
                m = e.isShowPeaceRefund,
                u = void 0 !== m && m,
                f = e.showFirstPasDetail,
                h = void 0 === f ? function () {} : f,
                w = e.showSecondLineDetail,
                g = void 0 === w ? function () {} : w,
                N = e.togglePlanCompare,
                T = void 0 === N ? function () {} : N,
                v = e.goTT,
                k = void 0 === v ? function () {} : v,
                Z = 1 == r.routeSequence ? 2 : 1;
              return (0,
              z.BX)(p.View, { className: "grab-smart-transfer flex flex-column", children: [1 == Z ? (0, z.tZ)(Q, { maskType: i, smartSeries: a, rescheduleOriginTicketInfo: s, rescheduleConfirmTicketInfo: d, togglePlanCompare: T, showSecondLineDetail: g, goTT: k, tag: "第一段", isShowPeaceRefund: u }) : (0, z.tZ)(U, { maskType: i, mergeOrderTicketInfo: r, rescheduleOriginTicketInfo: s, showFirstPasDetail: h, tag: "第一段", isShowPeaceRefund: u }), (0, z.tZ)(K, { mergeOrderTicketInfo: r, smartSeries: a }), 2 == Z ? (0, z.tZ)(Q, { maskType: i, smartSeries: a, rescheduleOriginTicketInfo: s, rescheduleConfirmTicketInfo: d, togglePlanCompare: T, showSecondLineDetail: g, goTT: k, tag: "第二段" }) : (0, z.tZ)(U, { maskType: i, mergeOrderTicketInfo: r, rescheduleOriginTicketInfo: s, showFirstPasDetail: h, goTT: k, tag: "第二段" })] });
            }),
            W = i(61957),
            J = i(70404),
            $ = i(90129),
            ee = i(4102),
            te = i(75940),
            ie = i(12604),
            ne = u.default.memo(function (e) {
              var t = e.smartSeries,
                i = void 0 === t ? 0 : t,
                n = e.ticketInfo,
                a = void 0 === n ? null : n,
                o = e.crossInfo,
                r = void 0 === o ? null : o,
                c = e.tripList,
                s = void 0 === c ? [] : c,
                l = e.gotoTT,
                d = void 0 === l ? function () {} : l,
                m = (0, u.useState)(!1),
                f = (0, $.Z)(m, 2),
                h = f[0],
                w = f[1];
              if (!a) return (0, z.tZ)(p.View, {});
              var g = a.trainNo,
                N = a.seatName,
                T = a.fromDate,
                v = a.tag,
                k = a.status,
                Z = a.displayDuration,
                V = a.fromTime,
                b = a.toTime,
                S = a.fromStation,
                y = a.toStation,
                I = a.passengerList,
                x = void 0 === I ? [] : I;
              return (0, z.BX)(p.View, {
                className: "collapsible-ticket-info-box ".concat(
                  h ? "opened" : ""
                ),
                children: [
                  (0, z.BX)(p.View, {
                    className: "hd flex-align-items-center",
                    children: [
                      (0, z.tZ)(p.View, { className: "tag", children: v }),
                      (0, z.tZ)(p.View, {
                        className: "title flex-1",
                        children: (function () {
                          var e = "";
                          if (h) {
                            var t = ee.Z.formatDate(T, "M月D日");
                            return (e = "".concat(t, " ").concat(g));
                          }
                          if (
                            ((e = "".concat(g, " ").concat(S, "-").concat(y)),
                            -1 !== [35, 66, 71, 79, 80].indexOf(i))
                          ) {
                            var n,
                              a,
                              o,
                              r =
                                null === (n = x[0]) ||
                                void 0 === n ||
                                null === (a = n.seatNo) ||
                                void 0 === a ||
                                null === (o = a.split("车厢")) ||
                                void 0 === o
                                  ? void 0
                                  : o[0],
                              c = r ? "".concat(r, "车厢") : "";
                            return (e = "".concat(e, " ").concat(c));
                          }
                          return (e = "".concat(e, " ").concat(N));
                        })(),
                      }),
                      (0, z.BX)(p.View, {
                        className: "flex-align-items-center",
                        id: "AFAB",
                        onClick: function () {
                          w(function (e) {
                            return !e;
                          });
                        },
                        children: [
                          k &&
                            (0, z.tZ)(p.View, {
                              className: "status-box",
                              children: (0, z.tZ)(p.View, {
                                className: "status",
                                children: k,
                              }),
                            }),
                          (0, z.tZ)(p.View, {
                            className: "iconfont  ".concat(
                              h ? "ifont-arrup" : "ifont-arrdown"
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  h &&
                    (0, z.BX)(z.HY, {
                      children: [
                        -1 === [7, 65, 66, 71, 79, 80].indexOf(i) &&
                          (0, z.BX)(p.View, {
                            className: "new-bd",
                            children: [
                              (0, z.tZ)(p.View, { className: "line" }),
                              Z &&
                                (0, z.tZ)(p.View, {
                                  className: "duration",
                                  children: Z,
                                }),
                              (0, z.BX)(p.View, {
                                className: "time",
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "depart",
                                    children: V,
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "arrive",
                                    children: b,
                                  }),
                                ],
                              }),
                              (0, z.BX)(p.View, {
                                className: "station",
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "depart",
                                    children: S,
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "arrive",
                                    children: y,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        -1 !== [66, 71, 79, 80].indexOf(i) &&
                          (0, z.BX)(p.View, {
                            className: "old-bd flex-align-items-center",
                            children: [
                              (0, z.BX)(p.View, {
                                className: "l-box",
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "time",
                                    children: V,
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "station",
                                    children: S,
                                  }),
                                ],
                              }),
                              (0, z.BX)(p.View, {
                                className: "m-box",
                                children: [
                                  Z &&
                                    (0, z.tZ)(p.View, {
                                      className: "duration",
                                      children: Z,
                                    }),
                                  (0, z.tZ)(p.View, {
                                    className: "schedule",
                                    id: "AFAC",
                                    onClick: function () {
                                      return d({
                                        fromStation: S,
                                        toStation: y,
                                        trainNo: g,
                                        fromDate: T,
                                      });
                                    },
                                    children: "时刻表",
                                  }),
                                ],
                              }),
                              (0, z.BX)(p.View, {
                                className: "r-box",
                                children: [
                                  (0, z.BX)(p.View, {
                                    className: "flex",
                                    children: [
                                      a.durationDays > 0 &&
                                        (0, z.BX)(p.View, {
                                          className: "multi-day",
                                          children: ["+", a.durationDays, "天"],
                                        }),
                                      (0, z.tZ)(p.View, {
                                        className: "time",
                                        children: b,
                                      }),
                                    ],
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "station",
                                    children: y,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        -1 !== [65].indexOf(i) &&
                          (0, z.tZ)(te.Z, { tripList: s, onTripClick: d }),
                        -1 !== [7].indexOf(i) &&
                          (0, z.tZ)(ie.Z, { tripInfo: r }),
                        (0, z.tZ)(p.View, {
                          className: "passenger-info",
                          children:
                            null == x
                              ? void 0
                              : x.map(function (e) {
                                  return (0,
                                  z.BX)(p.View, { className: "passenger", children: [(0, z.tZ)(p.View, { className: "name", children: e.passengerName }), (0, z.tZ)(p.View, { className: "type", children: e.passengerType }), (0, z.BX)(p.View, { className: "flex-align-items-center flex-1 pasg-right", children: [e.seatTag && (0, z.tZ)(p.View, { className: "seat-tag", children: e.seatTag }), (0, z.BX)(p.View, { className: "seat", children: [e.seatType, " ¥", e.ticketPrice] }), (0, z.tZ)(p.View, { className: "seat-no", children: e.seatNo })] })] }, e.idMark);
                                }),
                        }),
                      ],
                    }),
                ],
              });
            }),
            ae = u.default.memo(function (e) {
              var t,
                i,
                n = e.originalTicketInfo,
                a = void 0 === n ? {} : n,
                o = e.rescheduleTicketInfo,
                r = void 0 === o ? {} : o,
                c = e.transitTicketInfo,
                s = void 0 === c ? {} : c,
                l = e.smartSeries,
                d = void 0 === l ? 0 : l,
                m =
                  ((-1 !== [71, 79].indexOf(d)
                    ? a.orderTicketInfos
                    : a.orderTicketInfo) || [])[0] || {},
                u = m.trainNo,
                f = m.seatName,
                h = m.fromStation,
                p = m.toStation,
                w = m.fromTime,
                g = m.toTime,
                v = m.ticketInfoList,
                k = m.fromDate,
                Z = m.routeSequence,
                V =
                  (null == r ||
                  null === (t = r.orderTicketInfo) ||
                  void 0 === t ||
                  null === (i = t[0]) ||
                  void 0 === i
                    ? void 0
                    : i.ticketInfoList) || [],
                b =
                  -1 != [35].indexOf(d)
                    ? null == v
                      ? void 0
                      : v.filter(function (e) {
                          return (
                            -1 !=
                            (null == V
                              ? void 0
                              : V.findIndex(function (t) {
                                  return (
                                    t.passportCode === e.passportCode &&
                                    t.passengerType === e.passengerType
                                  );
                                }))
                          );
                        })
                    : v,
                S = {
                  trainNo: u,
                  seatName: f,
                  fromDate: k,
                  tag:
                    -1 !== [71, 79].indexOf(d)
                      ? (0, j.u)(Z)
                      : a.title || "原车票",
                  status: a.status,
                  displayDuration: a.ticketTotalUseTime,
                  fromTime: w,
                  toTime: g,
                  fromStation: h,
                  toStation: p,
                  passengerList: b,
                },
                y = [];
              if (65 === d && N.Z.isNotEmptyObj(s)) {
                var I,
                  x = [
                    {
                      routeSequence: Z,
                      trainNo: u,
                      fromDate: k,
                      fromTime: w,
                      fromStation: h,
                      toTime: g,
                      toStation: p,
                      isReschedule: !0,
                    },
                  ],
                  B =
                    null === (I = s.orderTicketInfos) || void 0 === I
                      ? void 0
                      : I[0];
                x.push({
                  routeSequence: s.routeSequence,
                  trainNo: B.trainNo,
                  fromDate: B.fromDate,
                  fromTime: B.fromTime,
                  fromStation: B.fromStation,
                  toTime: B.toTime,
                  toStation: B.toStation,
                  isReschedule: !1,
                }),
                  (y = x.sort(function (e, t) {
                    return e.routeSequence - t.routeSequence;
                  }));
              }
              var D =
                7 === d
                  ? (function () {
                      var e,
                        t =
                          (null == r ||
                          null === (e = r.orderTicketInfo) ||
                          void 0 === e
                            ? void 0
                            : e[0]) || {},
                        i = t.toStationOffset || 0;
                      return {
                        departStation: h,
                        middleStation: t.toStation,
                        arriveStation: p,
                        departTime: w,
                        middleTime: t.toTime,
                        arriveTime: g,
                        crossStationDesc:
                          0 !== i ? "多买".concat(Math.abs(i), "站") : "",
                      };
                    })()
                  : null;
              return (0, z.tZ)(ne, {
                ticketInfo: S,
                smartSeries: d,
                crossInfo: D,
                tripList: y,
                gotoTT: function (e) {
                  e &&
                    T.ZP.goTimeTable(
                      e.fromStation,
                      e.toStation,
                      e.trainNo,
                      e.fromDate
                    );
                },
              });
            }),
            oe = i(88637),
            re = i(80904),
            ce = u.default.memo(function (e) {
              var t = e.passengerList,
                i = void 0 === t ? [] : t;
              if (!i || i.length <= 0) return (0, z.tZ)(z.HY, {});
              var n = [];
              return (
                i.forEach(function (e) {
                  var t,
                    i,
                    a,
                    o =
                      null == e ||
                      null === (t = e.seatNo) ||
                      void 0 === t ||
                      null === (i = t.split("车厢")) ||
                      void 0 === i
                        ? void 0
                        : i[0],
                    r = o ? "".concat(o, "车厢") : "",
                    c =
                      null == e || null === (a = e.seatNo) || void 0 === a
                        ? void 0
                        : a.slice(4),
                    s = n.findIndex(function (e) {
                      return e.carriage === r;
                    });
                  s >= 0
                    ? n[s].passengerList.push({
                        pName: e.passengerName,
                        pType: e.passengerType,
                        seat: c,
                        seatType: e.seatType,
                        price: e.ticketPrice,
                      })
                    : n.push({
                        carriage: r,
                        passengerList: [
                          {
                            pName: e.passengerName,
                            pType: e.passengerType,
                            seat: c,
                            seatType: e.seatType,
                            price: e.ticketPrice,
                          },
                        ],
                      });
                }),
                (0, z.tZ)(p.View, {
                  className: "same-trip-pas-box",
                  children: n.map(function (e, t) {
                    return (0, z.BX)(
                      u.Fragment,
                      {
                        children: [
                          (0, z.BX)(p.View, {
                            className: "p-item flex-align-items-center",
                            children: [
                              (0, z.tZ)(p.View, {
                                className: "p-list",
                                children: e.passengerList.map(function (e, t) {
                                  return (0,
                                  z.BX)(p.View, { className: "item flex-align-items-center", children: [(0, z.tZ)(p.Text, { className: "txt", children: e.pName }), (0, z.tZ)(p.Text, { className: "p-type", children: e.pType }), (0, z.BX)(p.Text, { className: "seat-price", children: [e.seatType, " ¥", e.price] }), (0, z.tZ)(p.Text, { className: "txt", children: e.seat })] }, "p_".concat(t));
                                }),
                              }),
                              (0, z.tZ)(p.View, { className: "v-line" }),
                              (0, z.tZ)(p.View, {
                                className: "txt carriage",
                                children: e.carriage,
                              }),
                            ],
                          }),
                          t !== n.length - 1 &&
                            (0, z.tZ)(p.View, { className: "h-line" }),
                        ],
                      },
                      "ite_".concat(t)
                    );
                  }),
                })
              );
            }),
            se = u.default.memo(function (e) {
              var t,
                i,
                n,
                a,
                o = e.originalTicketInfo,
                r = void 0 === o ? {} : o,
                c = e.rescheduleTicketInfo,
                s = void 0 === c ? {} : c,
                l = (0, u.useState)(!0),
                d = (0, $.Z)(l, 2),
                m = d[0],
                f = d[1],
                h =
                  (null == r ||
                  null === (t = r.orderTicketInfo) ||
                  void 0 === t ||
                  null === (i = t[0]) ||
                  void 0 === i
                    ? void 0
                    : i.ticketInfoList) || [],
                w =
                  (null == s ||
                  null === (n = s.orderTicketInfo) ||
                  void 0 === n ||
                  null === (a = n[0]) ||
                  void 0 === a
                    ? void 0
                    : a.ticketInfoList) || [],
                g = h.filter(function (e) {
                  return (
                    -1 ==
                    w.findIndex(function (t) {
                      return t.passengerInfoId === e.passengerInfoId;
                    })
                  );
                });
              return (0, z.BX)(p.View, {
                className: "smart-rs-passenger",
                children: [
                  (0, z.BX)(p.View, {
                    className: "t-box flex",
                    children: [
                      (0, z.tZ)(p.View, {
                        className: "txt",
                        children: "同行乘客",
                      }),
                      (0, z.BX)(p.View, {
                        className: "flex",
                        id: "AFAs",
                        onClick: function () {
                          g.length > 1 && f(!m);
                        },
                        children: [
                          m &&
                            (0, z.tZ)(p.View, {
                              className: "txt tit",
                              children: (function () {
                                var e,
                                  t,
                                  i,
                                  n,
                                  a,
                                  o,
                                  r,
                                  c,
                                  s = g.length;
                                return 1 === s
                                  ? ""
                                      .concat(
                                        null === (e = g[0]) || void 0 === e
                                          ? void 0
                                          : e.passengerName,
                                        " "
                                      )
                                      .concat(
                                        null === (t = g[0]) || void 0 === t
                                          ? void 0
                                          : t.seatNo
                                      )
                                  : 2 === s
                                  ? ""
                                      .concat(
                                        null === (i = g[0]) || void 0 === i
                                          ? void 0
                                          : i.passengerName,
                                        " "
                                      )
                                      .concat(
                                        null === (n = g[0]) || void 0 === n
                                          ? void 0
                                          : n.seatNo,
                                        "、"
                                      )
                                      .concat(
                                        null === (a = g[1]) || void 0 === a
                                          ? void 0
                                          : a.passengerName
                                      )
                                  : s > 2
                                  ? ""
                                      .concat(
                                        null === (o = g[0]) || void 0 === o
                                          ? void 0
                                          : o.passengerName,
                                        " "
                                      )
                                      .concat(
                                        null === (r = g[0]) || void 0 === r
                                          ? void 0
                                          : r.seatNo,
                                        "、"
                                      )
                                      .concat(
                                        null === (c = g[1]) || void 0 === c
                                          ? void 0
                                          : c.passengerName,
                                        "…等"
                                      )
                                      .concat(s, "位")
                                  : "";
                              })(),
                            }),
                          !m &&
                            (0, z.tZ)(p.View, {
                              className: "close-tips",
                              children: "收起",
                            }),
                          (null == g ? void 0 : g.length) > 1 &&
                            (0, z.tZ)(p.View, {
                              className: "icon ".concat(m ? "" : "open"),
                            }),
                        ],
                      }),
                    ],
                  }),
                  !m && (0, z.tZ)(ce, { passengerList: g }),
                ],
              });
            }),
            le = u.default.memo(function (e) {
              var t,
                i,
                n = e.rescheduleOriginTicketInfo,
                a = void 0 === n ? {} : n,
                o = e.mergeOrderTicketInfo,
                r = void 0 === o ? {} : o,
                c = (0, u.useState)(!1),
                s = (0, $.Z)(c, 2),
                l = s[0],
                d = s[1],
                m =
                  (null == r ||
                  null === (t = r.orderTicketInfos) ||
                  void 0 === t
                    ? void 0
                    : t.concat(
                        (null == a ? void 0 : a.orderTicketInfo) || []
                      )) || (null == a ? void 0 : a.orderTicketInfo),
                f =
                  null == m ||
                  null ===
                    (i = m.sort(function (e, t) {
                      return e.routeSequence - t.routeSequence;
                    })) ||
                  void 0 === i
                    ? void 0
                    : i.map(function (e) {
                        var t,
                          i = (function (e, t, i, n) {
                            var a = Z()(i + " " + n).diff(
                                Z()(e + " " + t),
                                "minute"
                              ),
                              o = Math.floor(a / 60),
                              r = a - 60 * o;
                            return o > 0
                              ? "".concat(o, "小时").concat(r, "分钟")
                              : "".concat(r, "分钟");
                          })(e.fromDate, e.fromTime, e.toDate, e.toTime),
                          n = Z()(e.toDate).diff(Z()(e.fromDate), "day"),
                          a = 0;
                        null === (t = e.ticketInfoList) ||
                          void 0 === t ||
                          t.forEach(function (e) {
                            a += e.ticketPrice;
                          });
                        var o =
                          (Z()(
                            "".concat(e.toDate, " ").concat(e.toTime)
                          ).valueOf() -
                            Z()(
                              "".concat(e.fromDate, " ").concat(e.fromTime)
                            ).valueOf()) /
                          6e4;
                        return {
                          trainNo: e.trainNo,
                          fromStation: e.fromStation,
                          toStation: e.toStation,
                          fromTime: e.fromTime,
                          toTime: e.toTime,
                          timeCost: i,
                          durationDays: n,
                          fromDate: e.fromDate,
                          toDate: e.toDate,
                          totalPrice: a,
                          totalMinutes: o,
                        };
                      }),
                h = r.transferRemindInfo,
                w = void 0 === h ? {} : h,
                g = w.title,
                N = w.compareInfo;
              if (null == f || !f.length) return (0, z.tZ)(p.View, {});
              var T = f[0] || {},
                v = (null == f ? void 0 : f[1]) || {},
                k = ee.Z.formatDate(T.fromDate, "M月D日"),
                V = ""
                  .concat(T.fromTime || "")
                  .concat(T.fromStation || "", "-")
                  .concat(v.toStation || ""),
                b = "共".concat(
                  ee.Z.getHourMinuteByMinute(T.totalMinutes + v.totalMinutes)
                ),
                S = T.totalPrice + v.totalPrice;
              return (0, z.BX)(p.View, {
                className: "smart-rs-multi-trip",
                children: [
                  (0, z.BX)(p.View, {
                    className: "head-box flex-align-items-center",
                    children: [
                      (0, z.tZ)(p.View, {
                        className: "tit",
                        children: "原方案",
                      }),
                      (0, z.tZ)(p.View, { className: "tag", children: "中转" }),
                      (0, z.tZ)(p.View, { className: "sub-tit", children: k }),
                      (0, z.BX)(p.View, {
                        className: "flex-align-items-center",
                        id: "AFAn",
                        onClick: function () {
                          d(function (e) {
                            return !e;
                          });
                        },
                        children: [
                          (0, z.tZ)(p.View, {
                            className: "status",
                            children: a.status,
                          }),
                          (0, z.tZ)(p.View, {
                            className: "iconfont ifont-arrdown2 ".concat(
                              l ? "opened" : ""
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, z.BX)(p.View, {
                    className: "total-box flex-align-items-center ".concat(
                      l ? "mt14" : ""
                    ),
                    children: [
                      !l &&
                        (0, z.tZ)(p.View, {
                          className: "l-info flex-1",
                          children: V,
                        }),
                      (0, z.tZ)(p.View, {
                        className: "r-info flex-align-items-center",
                        children: "".concat(b, " | ¥").concat(S),
                      }),
                    ],
                  }),
                  l &&
                    (0, z.BX)(u.Fragment, {
                      children: [
                        (0, z.BX)(p.View, {
                          className: "trip-box flex-align-items-center",
                          children: [
                            (0, z.BX)(p.View, {
                              className: "left",
                              children: [
                                (0, z.tZ)(p.View, {
                                  className: "time",
                                  children: T.fromTime,
                                }),
                                (0, z.tZ)(p.View, {
                                  className: "station",
                                  children: T.fromStation,
                                }),
                              ],
                            }),
                            (0, z.BX)(p.View, {
                              className: "middle",
                              children: [
                                (0, z.tZ)(p.View, {
                                  className: "total-time",
                                  children: T.timeCost,
                                }),
                                (0, z.tZ)(p.View, { className: "line" }),
                                (0, z.tZ)(p.View, {
                                  className: "train-no",
                                  children: T.trainNo,
                                }),
                              ],
                            }),
                            (0, z.BX)(p.View, {
                              className: "right flex",
                              children: [
                                T.durationDays > 0 &&
                                  (0, z.BX)(p.View, {
                                    className: "multi-day",
                                    children: ["+", T.durationDays, "天"],
                                  }),
                                (0, z.BX)(p.View, {
                                  children: [
                                    (0, z.tZ)(p.View, {
                                      className: "time",
                                      children: T.toTime,
                                    }),
                                    (0, z.tZ)(p.View, {
                                      className: "station",
                                      children: T.toStation,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (null == f ? void 0 : f.length) > 0 &&
                          (0, z.BX)(p.View, {
                            className: "transfer-box flex-align-items-center",
                            children: [
                              (0, z.tZ)(p.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ZNCQ_zhongzhuan.png",
                                className: "icon",
                              }),
                              (0, z.BX)(p.View, {
                                className: "desc",
                                children: [g, "，", N],
                              }),
                            ],
                          }),
                        (null == f ? void 0 : f.length) > 0 &&
                          (0, z.BX)(p.View, {
                            className: "trip-box flex-align-items-center",
                            children: [
                              (0, z.BX)(p.View, {
                                className: "left",
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "time",
                                    children: v.fromTime,
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "station",
                                    children: v.fromStation,
                                  }),
                                ],
                              }),
                              (0, z.BX)(p.View, {
                                className: "middle",
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "total-time",
                                    children: v.timeCost,
                                  }),
                                  (0, z.tZ)(p.View, { className: "line" }),
                                  (0, z.tZ)(p.View, {
                                    className: "train-no",
                                    children: v.trainNo,
                                  }),
                                ],
                              }),
                              (0, z.BX)(p.View, {
                                className: "right",
                                children: [
                                  v.durationDays > 0 &&
                                    (0, z.BX)(p.View, {
                                      className: "multi-day",
                                      children: ["+", v.durationDays, "天"],
                                    }),
                                  (0, z.BX)(p.View, {
                                    children: [
                                      (0, z.tZ)(p.View, {
                                        className: "time",
                                        children: v.toTime,
                                      }),
                                      (0, z.tZ)(p.View, {
                                        className: "station",
                                        children: v.toStation,
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
              });
            }),
            de = u.default.memo(function (e) {
              var t = e.isShow,
                i = void 0 !== t && t,
                n = e.oid,
                a = void 0 === n ? "" : n,
                o = e.retainNote,
                r = void 0 === o ? "" : o,
                c = e.onBack,
                s = void 0 === c ? function () {} : c,
                l = e.onKeep,
                d = void 0 === l ? function () {} : l;
              (0, u.useEffect)(
                function () {
                  if (i) {
                    var e = D.RB.get() || {};
                    (e["SmartRSRetain_".concat(a)] = 1), D.RB.set(e);
                  }
                },
                [i, a]
              );
              var m =
                "https://images3.c-ctrip.com/ztrip/train_zhu/img_mini_ZNXL_wlAlert_".concat(
                  g.default.isTieyou ? "ty" : "zx",
                  ".png"
                );
              return (0,
              z.BX)(w.ZtDrawer, { show: i, onWrapClose: d, onClose: s, className: "train-srs-retain", children: [(0, z.tZ)(w.ZtRichText, { className: "tit-box", nodes: r, space: "nbsp" }), (0, z.tZ)(p.View, { className: "sub-tit", children: "自动取消前可从小程序底部「抢票」中找到此订单" }), (0, z.tZ)(p.Image, { className: "guide-img", src: m }), (0, z.BX)(p.View, { className: "btn-box flex", children: [(0, z.tZ)(p.Button, { className: "btn confirm", id: "AFAq", onClick: d, children: "我再看看" }), (0, z.tZ)(p.Button, { className: "btn cancel", id: "AFAr", onClick: s, children: "确认关闭" })] })] });
            }),
            me = u.default.memo(function (e) {
              var t = e.isShow,
                i = void 0 !== t && t,
                n = e.oid,
                a = void 0 === n ? "" : n,
                o = e.rejectReasons,
                r = void 0 === o ? [] : o,
                c = e.onClose,
                s = void 0 === c ? function () {} : c,
                l = (0, u.useState)(-1),
                d = (0, $.Z)(l, 2),
                m = d[0],
                f = d[1];
              (0, u.useEffect)(
                function () {
                  if (i) {
                    var e = (0, x.getCurrentPage)();
                    null == e ||
                      e.ubtTrace("s_trn_z_10650060488", {
                        exposureType: "actionbar",
                        bizKey:
                          "z_grab_detail_zngq_reject_reason_actionbar_show",
                      });
                  }
                },
                [i]
              );
              return (0, z.BX)(w.ZtDrawer, {
                show: i,
                isDefineHead: !0,
                className: "smart-rs-reject",
                children: [
                  (0, z.BX)(p.View, {
                    className: "tit-box flex-align-items-center",
                    children: [
                      (0, z.tZ)(p.View, {
                        className: "tit",
                        children: "您拒绝本次推荐的原因是？",
                      }),
                      (0, z.tZ)(p.Image, {
                        className: "icon",
                        src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_close_circle_black.png",
                        id: "AFAo",
                        onClick: function () {
                          return s(!1);
                        },
                      }),
                    ],
                  }),
                  (0, z.tZ)(p.View, {
                    className: "reason-box flex",
                    children: r.map(function (e, t) {
                      return (0, z.tZ)(
                        p.View,
                        {
                          className: "item ".concat(m === t ? "active" : ""),
                          id: "AFAp",
                          onClick: function () {
                            return (function (e) {
                              f(e);
                              var t = (0, x.getCurrentPage)();
                              null == t ||
                                t.ubtTrace("c_trn_z_10650060488", {
                                  bizKey:
                                    "z_grab_detail_zngq_reject_reason_actionbar_click",
                                  rejectReason: r[e],
                                  orderId: a,
                                }),
                                setTimeout(function () {
                                  s(!0);
                                }, 300);
                            })(t);
                          },
                          children: e,
                        },
                        t
                      );
                    }),
                  }),
                ],
              });
            }),
            ue = i(88869),
            fe = i(98704),
            he = u.default.memo(function (e) {
              var t = e.visible,
                i = void 0 !== t && t,
                n = e.noticeInfo,
                a = void 0 === n ? "" : n,
                o = e.onClose,
                r = void 0 === o ? function () {} : o;
              return a
                ? (0, z.tZ)(w.ZtDrawer, {
                    show: i,
                    isDefineHead: !0,
                    onWrapClose: r,
                    className: "train-smart-notice-drawer",
                    children: (0, z.BX)(p.View, {
                      className: "content",
                      children: [
                        (0, z.tZ)(p.Image, {
                          className: "close-icon",
                          src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_close_circle_black.png",
                          id: "AFAM",
                          onClick: r,
                        }),
                        (0, z.tZ)(p.View, {
                          className: "drawer-tit",
                          children: "免费退票政策",
                        }),
                        (0, z.BX)(p.View, {
                          className: "cont-box",
                          children: [
                            (0, z.tZ)(p.View, {
                              className: "tit",
                              children: "铁路局规定",
                            }),
                            (0, z.tZ)(p.View, {
                              className: "sub-tit",
                              children: a,
                            }),
                          ],
                        }),
                        (0, z.tZ)(p.View, {
                          className: "btn-box",
                          children: (0, z.tZ)(p.Button, {
                            className: "btn",
                            id: "AFAN",
                            onClick: r,
                            children: "知道了",
                          }),
                        }),
                      ],
                    }),
                  })
                : (0, z.tZ)(z.HY, {});
            }),
            pe = u.default.memo(function (e) {
              var t = e.visible,
                i = void 0 !== t && t,
                n = e.drawerInfo,
                a = void 0 === n ? null : n,
                o = e.rescheduleType,
                r = e.tips,
                c = e.onClose,
                s = void 0 === c ? function () {} : c,
                l = e.onConfirm,
                d = void 0 === l ? function () {} : l;
              if (!a) return (0, z.tZ)(z.HY, {});
              var m = 2 === o,
                u = !!a.tupPs;
              return (0, z.tZ)(w.ZtDrawer, {
                show: i,
                isDefineHead: !0,
                className: "train-smart-expired-drawer",
                children: (0, z.BX)(p.View, {
                  className: "content",
                  children: [
                    (0, z.tZ)(p.Image, {
                      className: "bg-img",
                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_05/bg_fuceng.webp",
                      webp: !0,
                    }),
                    (0, z.tZ)(p.Image, {
                      className: "close-icon",
                      src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_close_circle_black.png",
                      id: "AFAc",
                      onClick: s,
                    }),
                    (0, z.tZ)(p.View, {
                      className: "drawer-tit",
                      children: a.title,
                    }),
                    (0, z.BX)(p.View, {
                      className: "mid-box ".concat(m ? "pb32" : ""),
                      children: [
                        (0, z.BX)(p.View, {
                          className: "product-box flex-align-items-center",
                          children: [
                            (0, z.tZ)(p.Image, {
                              className: "p-icon",
                              src: a.icon,
                            }),
                            (0, z.BX)(p.View, {
                              className: "flex-1",
                              children: [
                                (0, z.BX)(p.View, {
                                  className: "name-tag flex-align-items-center",
                                  children: [
                                    (0, z.tZ)(p.View, {
                                      className: "name",
                                      children: a.subTitle,
                                    }),
                                    (0, z.tZ)(p.View, {
                                      className: "vip-tag",
                                      children: a.tag,
                                    }),
                                  ],
                                }),
                                (0, z.tZ)(p.View, {
                                  className: "train-info",
                                  children: a.trainDesc,
                                }),
                              ],
                            }),
                            !m &&
                              (0, z.BX)(p.View, {
                                className: "price",
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "real-price",
                                    children:
                                      a.couponPrice > 0
                                        ? "".concat(a.couponPrice, "元")
                                        : "免费",
                                  }),
                                  (0, z.BX)(p.View, {
                                    className: "old-price",
                                    children: [a.originalPrice, "元/人"],
                                  }),
                                ],
                              }),
                          ],
                        }),
                        m &&
                          (0, z.BX)(p.View, {
                            className: "extra-box",
                            children: [
                              (0, z.tZ)(p.View, {
                                className: "tips",
                                children:
                                  "铁路局规定: 改签需先支付新车票，改签成功后退回原票款",
                              }),
                              (0, z.tZ)(p.View, { className: "h-line" }),
                              (0, z.BX)(p.View, {
                                className: "pay-info flex-align-items-center",
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "flex-1",
                                    children: "需支付",
                                  }),
                                  (0, z.BX)(p.View, {
                                    className: "total-fee",
                                    children: [
                                      "¥",
                                      Number(a.newTicketPrice) *
                                        a.newTicketCount +
                                        a.couponPrice,
                                    ],
                                  }),
                                ],
                              }),
                              (0, z.BX)(p.View, {
                                className:
                                  "comm-txt new-ticket flex-align-items-center",
                                children: [
                                  (0, z.BX)(p.View, {
                                    className: "flex-1",
                                    children: ["新车票 x", a.newTicketCount],
                                  }),
                                  (0, z.BX)(p.View, {
                                    children: ["¥", a.newTicketPrice],
                                  }),
                                ],
                              }),
                              (0, z.BX)(p.View, {
                                className:
                                  "comm-txt service-fee flex-align-items-center",
                                children: [
                                  (0, z.tZ)(p.View, {
                                    className: "flex-1",
                                    children: "升级服务费",
                                  }),
                                  (0, z.BX)(p.View, {
                                    className: "original-price",
                                    children: [a.originalPrice, "元"],
                                  }),
                                  (0, z.BX)(p.View, {
                                    children: ["¥", a.couponPrice],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (null == r ? void 0 : r.length) > 0 &&
                          (0, z.BX)(p.View, {
                            className: "desc-box flex ".concat(
                              m ? "no-bg" : ""
                            ),
                            children: [
                              (0, z.tZ)(p.View, {
                                className: "flex-1",
                                children: r.map(function (e, t) {
                                  return (0,
                                  z.tZ)(w.ZtRichText, { className: "item flex", nodes: e }, t);
                                }),
                              }),
                              (0, z.tZ)(p.View, {
                                className: "rule-btn flex-align-items-center",
                                id: "AFAd",
                                onClick: function () {
                                  var e = "https://".concat(
                                    g.default.isTieyou
                                      ? "m.tieyou.com"
                                      : "m.suanya.com",
                                    "/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=rebook"
                                  );
                                  N.Z.commonNavigator(e);
                                },
                                children: "规则",
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, z.BX)(p.View, {
                      className: "btn-box flex",
                      children: [
                        (0, z.tZ)(p.Button, {
                          className: "btn flex-1 btn-cancel",
                          id: "AFAe",
                          onClick: s,
                          children: u ? "换其他座席" : "暂不需要",
                        }),
                        (0, z.tZ)(p.Button, {
                          className: "btn flex-1 btn-confirm",
                          id: "AFAf",
                          onClick: d,
                          children: a.btnName,
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            we = u.default.memo(function (e) {
              var t = e.data,
                i = void 0 === t ? null : t;
              return i
                ? (0, z.BX)(p.View, {
                    className: "combined-seat-info flex-align-items-center",
                    children: [
                      (0, z.BX)(p.View, {
                        className: "from",
                        children: [
                          (0, z.tZ)(p.View, {
                            className: "time",
                            children: i.departTime,
                          }),
                          (0, z.tZ)(p.View, {
                            className: "comm-box depart-box",
                            children: "上车",
                          }),
                          (0, z.tZ)(p.View, {
                            className: "station",
                            children: i.departStation,
                          }),
                        ],
                      }),
                      (0, z.BX)(p.View, {
                        className: "mid",
                        children: [
                          (0, z.tZ)(p.View, {
                            className: "time",
                            children: i.middleTime,
                          }),
                          (0, z.tZ)(p.View, {
                            className: "comm-box middle-box",
                            children: i.middleDesc,
                          }),
                          (0, z.tZ)(p.View, {
                            className: "station",
                            children: i.middleStation,
                          }),
                        ],
                      }),
                      (0, z.BX)(p.View, {
                        className: "to",
                        children: [
                          (0, z.tZ)(p.View, {
                            className: "time",
                            children: i.arriveTime,
                          }),
                          (0, z.tZ)(p.View, {
                            className: "comm-box arrive-box",
                            children: "下车",
                          }),
                          (0, z.tZ)(p.View, {
                            className: "station",
                            children: i.arriveStation,
                          }),
                        ],
                      }),
                      (0, z.BX)(p.View, {
                        className: "trip-tips flex",
                        children: [
                          (0, z.tZ)(p.View, { className: "line" }),
                          (0, z.tZ)(p.View, {
                            className: "flex-1 flex-center first-trip",
                            children: (0, z.tZ)(p.View, {
                              className: "co-trip-desc first-trip-box",
                              children: i.firstTripDesc,
                            }),
                          }),
                          (0, z.tZ)(p.View, {
                            className: "flex-1 flex-center second-trip",
                            children: (0, z.tZ)(p.View, {
                              className: "co-trip-desc second-trip-box",
                              children: i.secondTripDesc,
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, z.tZ)(p.View, {});
            }),
            ge = u.default.memo(function (e) {
              var t,
                i,
                n,
                a,
                o,
                r,
                c,
                s,
                l = e.rescheduleTripInfo,
                d = void 0 === l ? {} : l,
                m = e.mergeTripInfo,
                u = void 0 === m ? {} : m,
                f =
                  (null == d || null === (t = d.orderTicketInfo) || void 0 === t
                    ? void 0
                    : t[0]) || {},
                h =
                  null ===
                    (a = (
                      (null === (i = f.ticketInfoList) ||
                      void 0 === i ||
                      null === (n = i[0]) ||
                      void 0 === n
                        ? void 0
                        : n.seatNo) || ""
                    ).split("车厢")) || void 0 === a
                    ? void 0
                    : a[0],
                w =
                  (null == u ||
                  null === (o = u.orderTicketInfos) ||
                  void 0 === o
                    ? void 0
                    : o[0]) || {},
                g =
                  null ===
                    (s = (
                      (null === (r = w.ticketInfoList) ||
                      void 0 === r ||
                      null === (c = r[0]) ||
                      void 0 === c
                        ? void 0
                        : c.seatNo) || ""
                    ).split("车厢")) || void 0 === s
                    ? void 0
                    : s[0],
                N = null,
                T = w.routeSequence;
              return (
                1 === T
                  ? (N = {
                      departTime: w.fromTime,
                      departStation: w.fromStation,
                      middleTime: w.toTime,
                      middleDesc: "车内换座",
                      middleStation: w.toStation,
                      arriveTime: f.toTime,
                      arriveStation: f.toStation,
                      firstTripDesc: "".concat(g, "车厢"),
                      secondTripDesc: "改至".concat(h, "车厢"),
                    })
                  : 2 === T &&
                    (N = {
                      departTime: f.fromTime,
                      departStation: f.fromStation,
                      middleTime: w.fromTime,
                      middleDesc: "车内换座",
                      middleStation: w.fromStation,
                      arriveTime: w.toTime,
                      arriveStation: w.toStation,
                      firstTripDesc: "改至".concat(h, "车厢"),
                      secondTripDesc: "".concat(g, "车厢"),
                    }),
                N
                  ? (0, z.tZ)(p.View, {
                      className: "tsmart-csi-banner",
                      children: (0, z.tZ)(we, { data: N }),
                    })
                  : (0, z.tZ)(p.View, {})
              );
            }),
            Ne = u.default.memo(function (e) {
              var t = e.smartSeries,
                i = void 0 === t ? 0 : t,
                n = e.mergeTicketInfo,
                a = void 0 === n ? {} : n,
                o = ((null == a ? void 0 : a.orderTicketInfos) || [])[0] || {},
                r = o.trainNo,
                c = o.seatName,
                s = o.fromStation,
                l = o.toStation,
                d = o.fromTime,
                m = o.toTime,
                u = o.ticketInfoList,
                f = o.fromDate,
                h = o.toDate,
                p = f && h && Z()(h).diff(Z()(f), "day"),
                w = {
                  trainNo: r,
                  seatName: c,
                  fromDate: f,
                  tag: (function (e) {
                    var t = "";
                    switch (e) {
                      case 1:
                        t = "第一段";
                        break;
                      case 2:
                        t = "第二段";
                    }
                    return t;
                  })(null == a ? void 0 : a.routeSequence),
                  status: "已出票",
                  durationDays: p,
                  fromTime: d,
                  toTime: m,
                  fromStation: s,
                  toStation: l,
                  passengerList: u || [],
                };
              return (0, z.tZ)(ne, {
                ticketInfo: w,
                smartSeries: i,
                gotoTT: function () {
                  T.ZP.goTimeTable(s, l, r, f);
                },
              });
            }),
            Te = u.default.memo(function (e) {
              var t = e.visible,
                i = void 0 !== t && t,
                n = e.originalPasList,
                a = void 0 === n ? [] : n,
                o = e.rsPasList,
                r = void 0 === o ? [] : o,
                c = e.onClose,
                s = void 0 === c ? function () {} : c;
              if (!a || a.length <= 0) return (0, z.tZ)(z.HY, {});
              var l = a.filter(function (e) {
                return (
                  -1 ==
                  r.findIndex(function (t) {
                    return t.passengerInfoId === e.passengerInfoId;
                  })
                );
              });
              return (0,
              z.tZ)(w.ZtDrawer, { show: i, isDefineHead: !0, className: "same-trip-pas-drawer", onWrapClose: s, children: (0, z.BX)(p.View, { className: "content", children: [(0, z.tZ)(p.View, { className: "iconfont2 ifont2-close", id: "AFAO", onClick: s }), (0, z.tZ)(p.View, { className: "drawer-tit", children: "同行其他乘客座位" }), (null == l ? void 0 : l.length) > 0 && (0, z.tZ)(ce, { passengerList: l })] }) });
            }),
            ve = u.default.memo(function (e) {
              var t = e.content,
                i =
                  void 0 === t
                    ? '专享福利，本次<font color="#198cff">改签免服务费</font> (价值¥10)'
                    : t;
              return i
                ? (0, z.BX)(p.View, {
                    className: "tsmart-service-fee-free flex-center",
                    children: [
                      (0, z.tZ)(p.Image, {
                        className: "tag",
                        src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_tag_ZNGQ_jxcp.png",
                      }),
                      (0, z.tZ)(w.ZtRichText, { className: "desc", nodes: i }),
                    ],
                  })
                : (0, z.tZ)(z.HY, {});
            }),
            ke = i(16274),
            Ze = u.default.memo(function (e) {
              var t = e.content,
                i = void 0 === t ? "" : t;
              return i
                ? (0, z.tZ)(p.View, {
                    className: "tsmart-rs-bottom-tips flex-center",
                    children: (0, z.tZ)(p.View, {
                      className: "desc",
                      children: i,
                    }),
                  })
                : (0, z.tZ)(z.HY, {});
            }),
            Ve = u.default.memo(function (e) {
              var t = e.isOldStyle,
                i = void 0 !== t && t,
                n = e.cancelBtnName,
                a = e.confirmBtnName,
                o = e.orderTimeout,
                r = e.onClickCancel,
                c = void 0 === r ? function () {} : r,
                s = e.onClickConfirm,
                l = void 0 === s ? function () {} : s,
                d = e.renderTopView,
                m = void 0 === d ? function () {} : d,
                u = null == m ? void 0 : m();
              return (0,
              z.BX)(p.View, { className: "bottom-fixed-area", children: [!!u && (0, z.tZ)(p.View, { className: "bfa-top-folder", children: u }), !i && (0, z.BX)(p.View, { className: "bfa-btn-group", children: [(0, z.tZ)(p.Button, { className: "btn-cancel", id: "AFBi", onClick: c, children: n || "" }), (0, z.BX)(p.Button, { className: "btn-confirm", id: "AFBj", onClick: l, children: [(0, z.tZ)(p.View, { children: a || "" }), (0, z.BX)(p.View, { className: "timeout flex", children: [(0, z.tZ)(w.ZtCountdown, { endTime: o, format: { minute: "分", second: "秒" }, isShowHour: !1 }), "后自动取消"] })] })] }), i && (0, z.BX)(p.View, { className: "bfa-old-btn-group", children: [(0, z.tZ)(p.Button, { className: "btn-cancel color-red", id: "AFBe", onClick: c, children: n }), (0, z.BX)(p.Button, { className: "btn-red", id: "AFBf", onClick: l, children: [(0, z.tZ)(p.View, { children: a || "" }), (0, z.BX)(p.View, { className: "timeout flex", children: [(0, z.tZ)(w.ZtCountdown, { endTime: o, format: { minute: "分", second: "秒" }, isShowHour: !1 }), "后自动取消"] })] })] })] });
            }),
            be = function (e) {
              var t = e.data;
              if (!t) return (0, z.tZ)(z.HY, {});
              var i = t.jumpUrl,
                n = t.titleExt;
              return (0, z.BX)(p.View, {
                className: " _jO _Wb _kO _i _l _n",
                id: "rsTupEntry",
                onClick: function () {
                  N.Z.commonNavigator(i);
                },
                children: [
                  (0, z.tZ)(p.Image, {
                    className: " _lO _Ua _lj",
                    src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/09/img_ZXHZ_sq1.png",
                  }),
                  (0, z.tZ)(p.View, { className: " _U _dd _bp", children: n }),
                  (0, z.tZ)(p.View, { className: "ifont2-arr iconfont2" }),
                ],
              });
            },
            Se = i(92161),
            ye =
              (0, V.h)()(
                (n = (function (e) {
                  (0, d.Z)(i, e);
                  var t = (0, m.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, s.Z)(this, i),
                      ((n = t.call(this, e)).pageId = g.default.isTieyou
                        ? "10650060494"
                        : "10650060488"),
                      (n.state = {
                        isTieyou: g.default.isTieyou,
                        statusBarHeight: I.ZP.statusBarHeight,
                        loading: !0,
                        maskType: "",
                        headInfo: {},
                        originTicketInfo: {},
                        needConfirmTicketInfo: {},
                        mergeOrderTicketInfo: {},
                        rescheduleOriginTicketInfo: {},
                        rescheduleConfirmTicketInfo: {},
                        questionInfo: {},
                        confirmBtnName: "",
                        cancelBtnName: "",
                        interceptAgainToast: {},
                        cancelConfirmToast: {},
                        payRemindInfo: [],
                        isShowVoiceTag: !1,
                        preholdDisplayStep: 0,
                        preHoldPercent: 0,
                        loadingPopVisible: !1,
                        series: 0,
                        smartSeries: 0,
                        jumpUrl: "",
                        voiceDescriptionInfos: null,
                        needShare: 0,
                        servicePrice: 0,
                        hotelCouponPrice: 0,
                        planeCouponPrice: 0,
                        rescheduleType: 0,
                        isShowLuckDrawPopup: !1,
                        detainTaskInfo: null,
                        adVideoPopVisible: !1,
                        videoSrc: "",
                        isGotoH5Page: !1,
                        originOrderNumber: "",
                        isShowRetainDarawer: !1,
                        rejectReasons: [],
                        retainNote: "",
                        peaceRefundInfo: null,
                        freeNoticeList: [],
                        expiredDrawerInfo: null,
                        hotelSfxProduct: null,
                        freeRescheduleInfo: null,
                        travelSubsidyInfo: null,
                        secondTripBookingTips: "",
                        tupEntryInfo: null,
                      }),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, f.getCurrentInstance)().router.params;
                          this.oid = e.oid;
                          var t = N.Z.extractParams(e);
                          this.setState(t),
                            (this.tempTime = 0),
                            this.setPathDevTrace(),
                            this.getSmartOrderConfirmDetail();
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          this.state.isGotoH5Page &&
                            (this.handleForH5(),
                            this.setState({ isGotoH5Page: !1 }));
                        },
                      },
                      {
                        key: "handleForH5",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2), this.getDetainTaskInfo()
                                        );
                                      case 2:
                                        2 ===
                                          (null == (t = e.sent)
                                            ? void 0
                                            : t.taskStatus) &&
                                          this.onTaskFinished();
                                      case 4:
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
                        key: "setPathDevTrace",
                        value: function () {
                          try {
                            var e = h().getCurrentPages();
                            e &&
                              1 === e.length &&
                              this.ubtDevTrace(193127, {
                                cid: y.ZP.cid || "",
                                userName: y.ZP.userName || "",
                                page: "smartRSTicket",
                              });
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "addpreHoldPercent",
                        value: function (e, t, i) {
                          var n = this,
                            a = setInterval(function () {
                              (n.tempTime = n.tempTime + i),
                                n.tempTime <= e && n.state.preHoldPercent < 80
                                  ? (n.state.preholdDisplayStep < 3 &&
                                      ((500 !== n.tempTime &&
                                        1500 !== n.tempTime &&
                                        2500 !== n.tempTime) ||
                                        n.setState({
                                          preholdDisplayStep:
                                            n.state.preholdDisplayStep + 1,
                                        })),
                                    n.setState({
                                      preHoldPercent:
                                        n.state.preHoldPercent +
                                        Math.round(Math.random() * t),
                                    }))
                                  : clearInterval(a);
                            }, i);
                        },
                      },
                      {
                        key: "getSmartOrderConfirmDetail",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                a,
                                c,
                                s,
                                l,
                                d,
                                m,
                                u,
                                f,
                                h,
                                p,
                                w,
                                g,
                                v,
                                k,
                                V,
                                b,
                                S,
                                y,
                                I,
                                B,
                                D,
                                P,
                                C,
                                X,
                                _,
                                O,
                                R,
                                z,
                                F,
                                L,
                                A,
                                H,
                                G,
                                j,
                                M,
                                q,
                                E,
                                Q,
                                U,
                                K,
                                Y,
                                W,
                                J,
                                $,
                                ee,
                                te,
                                ie,
                                ne,
                                ae,
                                oe,
                                re,
                                ce,
                                se,
                                le,
                                de,
                                me,
                                ue,
                                fe,
                                he,
                                pe,
                                we,
                                ge,
                                Ne,
                                Te = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (t = { orderNumber: this.oid }),
                                          (e.next = 4),
                                          (0, Se.sN)(t, {
                                            checkFrameworkLogin: !0,
                                            checkLogin: !0,
                                            loginCB: function () {
                                              Te.getSmartOrderConfirmDetail();
                                            },
                                          })
                                        );
                                      case 4:
                                        if (1 !== (i = e.sent).resultCode) {
                                          e.next = 29;
                                          break;
                                        }
                                        if (
                                          ((n = i.headInfo),
                                          (a = i.orderTimeout),
                                          (c = i.originTicketInfo),
                                          (s = i.needConfirmTicketInfo),
                                          (l = i.questionInfo),
                                          (d = i.confirmBtnName),
                                          (m = i.cancelBtnName),
                                          (u = i.interceptAgainToast),
                                          (f = i.cancelConfirmToast),
                                          (h = i.payRemindInfo),
                                          (p = i.series),
                                          (w = i.jumpUrl),
                                          (g = i.voiceDescriptionInfos),
                                          (v = i.needShare),
                                          (k = i.smartSeries),
                                          (V = i.mergeOrderTicketInfo),
                                          (b = i.rescheduleOriginTicketInfo),
                                          (S = i.rescheduleConfirmTicketInfo),
                                          (y = i.servicePrice),
                                          (I = i.hotelCouponPrice),
                                          (B = i.planeCouponPrice),
                                          (D = i.rescheduleGrabType),
                                          (P = i.originOrderNumber),
                                          (C = i.rejectReasons),
                                          (X = i.retainNote),
                                          (_ = i.sfxProduct),
                                          (O = i.returnFreeNotices),
                                          (R = i.timeOutRecommendToast),
                                          (z = i.hotelSfxProduct),
                                          (F = i.sffsxProduct),
                                          (L = i.smartRescheduleEquityList),
                                          (A = i.tripType),
                                          (H = i.checkTup),
                                          this.setState({ loading: !1 }),
                                          H && this.getTupEntryInfo(P),
                                          R &&
                                            ((j =
                                              (null == b ||
                                              null ===
                                                (G = b.orderTicketInfo) ||
                                              void 0 === G
                                                ? void 0
                                                : G[0]) || {}),
                                            (M = j.fromStation),
                                            (q = j.fromDate),
                                            (E = void 0 === q ? "" : q),
                                            (Q = j.fromTime),
                                            (U = j.toStation),
                                            (K = j.toTime),
                                            (Y = ""
                                              .concat(
                                                Z()(E).format("MM月DD日"),
                                                " "
                                              )
                                              .concat(Q)
                                              .concat(M, "-")
                                              .concat(K)
                                              .concat(U)),
                                            this.setState({
                                              originOrderNumber: P,
                                              expiredDrawerInfo: (0, o.Z)(
                                                (0, o.Z)({}, R),
                                                {},
                                                { trainDesc: Y }
                                              ),
                                              maskType: "expiredDrawer",
                                            })),
                                          -1 !=
                                            [
                                              1, 2, 3, 8, 32, 34, 35, 37, 38,
                                            ].indexOf(k) &&
                                            (0, x.setNavigationBarColor)({
                                              frontColor: "#ffffff",
                                              backgroundColor: "#ffffff",
                                            }),
                                          -1 !=
                                            [
                                              21, 22, 23, 24, 25, 33, 39,
                                            ].indexOf(k) &&
                                            this.setState({
                                              mergeOrderTicketInfo: V,
                                              rescheduleOriginTicketInfo: b,
                                              rescheduleConfirmTicketInfo: S,
                                            }),
                                          -1 !=
                                            [
                                              1, 2, 3, 7, 8, 9, 10, 12, 30, 31,
                                              32, 34, 35, 36, 37, 38, 56, 57,
                                              59, 60, 61, 62, 63, 64, 65, 66,
                                              71, 77, 78, 79, 80, 81, 83,
                                            ].indexOf(k) &&
                                            (($ =
                                              (null == f
                                                ? void 0
                                                : f.cancelConfirmDesc) || []),
                                            (ee = $.map(function (e) {
                                              return {
                                                title: N.Z.highLightText(
                                                  e.title,
                                                  e.colorTitle,
                                                  "#1A8CFF",
                                                  "#FC6E51"
                                                ),
                                                icon: e.url,
                                              };
                                            })),
                                            (te =
                                              (null == V ||
                                              null ===
                                                (W = V.orderTicketInfos) ||
                                              void 0 === W ||
                                              null === (J = W[0]) ||
                                              void 0 === J
                                                ? void 0
                                                : J.trainSeatTip) || ""),
                                            this.setState({
                                              mergeOrderTicketInfo: V,
                                              rescheduleOriginTicketInfo: b,
                                              rescheduleConfirmTicketInfo: S,
                                              refuseToastDesc: ee,
                                              refuseToastTitle:
                                                (null == f
                                                  ? void 0
                                                  : f.cancelTitle) ||
                                                "抢票不易，建议先出票保证出行",
                                              tripType: A,
                                              secondTripBookingTips: te,
                                            })),
                                          !_)
                                        ) {
                                          e.next = 21;
                                          break;
                                        }
                                        (ie = _.type),
                                          (e.t0 = ie),
                                          (e.next = 35 === e.t0 ? 18 : 20);
                                        break;
                                      case 18:
                                        return (
                                          this.setState({ peaceRefundInfo: _ }),
                                          e.abrupt("break", 21)
                                        );
                                      case 20:
                                        return e.abrupt("break", 21);
                                      case 21:
                                        38 === (null == z ? void 0 : z.type) &&
                                          this.setState({ hotelSfxProduct: z }),
                                          this.handleProducts(L),
                                          c &&
                                            ((ne = N.Z.weekDay(
                                              c.ticketInfo.fromDate
                                            )),
                                            (ae = ""
                                              .concat(
                                                Z()(
                                                  s.ticketInfo.fromDate
                                                ).format("M月D日"),
                                                " "
                                              )
                                              .concat(ne)),
                                            (oe = c.ticketInfo.ticketInfoList
                                              .filter(function (e) {
                                                return (
                                                  "儿童票" !== e.passengerType
                                                );
                                              })
                                              .reduce(function (e, t) {
                                                return (t.ticketPrice || 0) + e;
                                              }, 0)),
                                            (re = T.ZP.convertAppRichText(
                                              c.remindInfo
                                            )),
                                            (ce = c.title),
                                            Object.assign(c, {
                                              fromDateDesc: ae,
                                              dayOfWeek_zh: ne,
                                              totalPrice: oe,
                                              remindInfo: re,
                                              tag: ce,
                                            })),
                                          s &&
                                            ((se = N.Z.weekDay(
                                              s.ticketInfo.fromDate
                                            )),
                                            (le = ""
                                              .concat(
                                                Z()(
                                                  s.ticketInfo.fromDate
                                                ).format("M月D日"),
                                                " "
                                              )
                                              .concat(se)),
                                            (de = N.Z.weekDay(
                                              s.ticketInfo.toDate
                                            )),
                                            (me = ""
                                              .concat(
                                                Z()(s.ticketInfo.toDate).format(
                                                  "M月D日"
                                                ),
                                                " "
                                              )
                                              .concat(de)),
                                            (ue =
                                              s.ticketInfo.ticketInfoList.reduce(
                                                function (e, t) {
                                                  return t.ticketPrice + e;
                                                },
                                                0
                                              )),
                                            (fe = s.ticketInfo.ticketInfoList
                                              .map(function (e) {
                                                return e.passengerName;
                                              })
                                              .join("、")),
                                            (he = s.ticketInfo.ticketInfoList
                                              .map(function (e) {
                                                return e.seatNo;
                                              })
                                              .join("、")),
                                            (pe =
                                              s.ticketInfo.ticketInfoList.find(
                                                function (e) {
                                                  return e.seatTag;
                                                }
                                              )),
                                            (we = pe ? pe.seatTag : ""),
                                            (ge = s.title),
                                            Object.assign(s, {
                                              fromDateDesc: le,
                                              toDateDesc: me,
                                              totalPrice: ue,
                                              pasStr: fe,
                                              seatNoStr: he,
                                              fromRemind: se,
                                              toRemind: de,
                                              seatTagStr: we,
                                              tag: ge,
                                            }),
                                            Object.assign(s.ticketInfo, {
                                              fromDateDesc: le,
                                              toDateDesc: me,
                                            })),
                                          (Ne =
                                            null == g
                                              ? void 0
                                              : g.filter(function (e) {
                                                  return !!e.voiceUrl;
                                                })),
                                          this.setState(
                                            {
                                              headInfo: n,
                                              originTicketInfo: c,
                                              needConfirmTicketInfo: s,
                                              questionInfo: l,
                                              confirmBtnName: d,
                                              cancelBtnName: m,
                                              interceptAgainToast: u,
                                              cancelConfirmToast: f,
                                              payRemindInfo: h,
                                              series: p,
                                              smartSeries: k,
                                              jumpUrl: w,
                                              voiceDescriptionInfos: Ne,
                                              isShowVoiceTag:
                                                N.Z.notEmptyArray(Ne),
                                              needShare: v,
                                              servicePrice: y,
                                              hotelCouponPrice: I,
                                              planeCouponPrice: B,
                                              rescheduleType: D,
                                              originOrderNumber: P,
                                              rejectReasons: C,
                                              retainNote: X,
                                              orderTimeout: a,
                                              freeNoticeList: O || [],
                                              freeRescheduleInfo:
                                                40 ===
                                                (null == F ? void 0 : F.type)
                                                  ? F
                                                  : null,
                                            },
                                            function () {
                                              Te.getDetainTaskInfo(),
                                                Te.handleShowFreeDrawer();
                                            }
                                          ),
                                          (e.next = 30);
                                        break;
                                      case 29:
                                        this.handleFailureScene(
                                          i.resultCode,
                                          i.resultMsg
                                        );
                                      case 30:
                                        e.next = 35;
                                        break;
                                      case 32:
                                        (e.prev = 32),
                                          (e.t1 = e.catch(0)),
                                          console.log(e.t1);
                                      case 35:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 32]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "handleFailureScene",
                        value: function (e, t) {
                          switch (e) {
                            case 302:
                              this.showCommonDialog({
                                title: "温馨提示",
                                content: t || "加载失败,请重试",
                                buttonName: "好的",
                                onButtonClick: function () {
                                  N.Z.relaunchHome();
                                },
                              });
                              break;
                            case 25122001:
                              this.showCommonDialog({
                                title: "温馨提示",
                                content:
                                  "未找到该订单，请确认您的账号是否登录正确～",
                                buttonName: "我知道了",
                                onButtonClick: function () {
                                  N.Z.relaunchHome();
                                },
                              });
                              break;
                            default:
                              h().showToast({
                                title: t || "加载失败,请重试",
                                icon: "none",
                                duration: 2e3,
                              }),
                                N.Z.relaunchHome();
                          }
                        },
                      },
                      {
                        key: "handleProducts",
                        value: function (e) {
                          var t = this;
                          (null == e ? void 0 : e.length) > 0 &&
                            e.forEach(function (e) {
                              switch (e.type) {
                                case 41:
                                  t.setState({ travelSubsidyInfo: e });
                              }
                            });
                        },
                      },
                      {
                        key: "showFirstPasDetail",
                        value: function () {
                          var e = this.state.maskType;
                          this.setState({
                            maskType: e ? "" : "showFirstLineDetail",
                          });
                        },
                      },
                      {
                        key: "togglePlanCompare",
                        value: function () {
                          var e = this.state.maskType;
                          this.setState({
                            maskType: e ? "" : "showPlanCompare",
                          });
                        },
                      },
                      {
                        key: "closeMask",
                        value: function () {
                          this.setState({ maskType: "" });
                        },
                      },
                      {
                        key: "confirmSecondRob",
                        value: function () {
                          (0, Se.Mj)({
                            orderNumber: this.oid,
                            action: "confirmTicketOut",
                          }).catch(function (e) {
                            console.log(e);
                          });
                          var e = this.state,
                            t = e.freeRescheduleInfo,
                            i = e.smartSeries;
                          if (
                            40 === (null == t ? void 0 : t.type) ||
                            [81, 83].includes(i)
                          )
                            this.confirm();
                          else {
                            this.setState({ maskType: "confirmSecondRob" });
                            var n = this.state.travelSubsidyInfo;
                            if (N.Z.isEmptyObject(n)) {
                              var a = this.state.payRemindInfo,
                                o =
                                  parseFloat(
                                    null == a ? void 0 : a.couponPrice
                                  ) || 0,
                                r = D._w.get().hasOwnProperty(this.oid);
                              o > 0 &&
                                !r &&
                                this.setState({ isShowLuckDrawPopup: !0 });
                            }
                          }
                        },
                      },
                      {
                        key: "showSecondLineDetail",
                        value: function () {
                          this.setState({ maskType: "secondLinePasDetail" });
                        },
                      },
                      {
                        key: "goTT",
                        value: function () {
                          var e = this.state.needConfirmTicketInfo.ticketInfo,
                            t = e.fromStation,
                            i = void 0 === t ? "" : t,
                            n = e.toStation,
                            a = void 0 === n ? "" : n,
                            o = e.fromDate,
                            r = void 0 === o ? "" : o,
                            c = e.trainNo,
                            s = void 0 === c ? "" : c;
                          T.ZP.goTimeTable(i, a, s, r);
                        },
                      },
                      {
                        key: "confirm",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0];
                          (this.tempTime = 0),
                            this.setState(
                              { loadingPopVisible: !0 },
                              function () {
                                e.confirmGrabOrder({ buyProduct: t }),
                                  e.addpreHoldPercent(1e3, 2, 100);
                              }
                            );
                        },
                      },
                      {
                        key: "onBack",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          this.checkIsShowRetainDrawer()
                                        );
                                      case 2:
                                        if (!e.sent) {
                                          e.next = 5;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 5:
                                        try {
                                          h().stopBackgroundAudio();
                                        } catch (e) {
                                          console.log(e);
                                        }
                                        (t = h().getCurrentPages()),
                                          1 === (t ? t.length : 1)
                                            ? N.Z.relaunchHome()
                                            : h().navigateBack();
                                      case 9:
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
                        key: "confirmGrabOrder",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                a,
                                o,
                                s,
                                l,
                                d,
                                m,
                                u,
                                f,
                                p,
                                w,
                                N,
                                T,
                                v,
                                k,
                                Z,
                                V,
                                b,
                                S,
                                y,
                                I,
                                B,
                                D,
                                P,
                                C,
                                X = this,
                                _ = arguments;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            _.length > 0 && void 0 !== _[0]
                                              ? _[0]
                                              : {}),
                                          (i = t.action),
                                          (n = void 0 === i ? "" : i),
                                          (a = t.pollingKey),
                                          (o = void 0 === a ? "" : a),
                                          (s = t.buyProduct),
                                          (l = void 0 !== s && s),
                                          (e.prev = 1),
                                          !(
                                            this.refundInterval >
                                            this.refundTotalPollingTime
                                          ))
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          (0, x.hideLoading)(),
                                          this.setState({
                                            loadingPopVisible: !1,
                                            preholdDisplayStep: 0,
                                            preHoldPercent: 0,
                                          }),
                                          h().showToast({
                                            title: "超时",
                                            icon: "none",
                                            duration: 2e3,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 7:
                                        return (
                                          (d = this.state),
                                          (m = d.needShare),
                                          (u = d.rescheduleType),
                                          (f = d.peaceRefundInfo),
                                          (p = d.hotelSfxProduct),
                                          (w = d.freeRescheduleInfo),
                                          (N = d.travelSubsidyInfo),
                                          (v =
                                            (T = m && l) && 2 !== u
                                              ? Se.l$
                                              : Se.Mj),
                                          (k = {
                                            orderNumber: this.oid,
                                            action: n,
                                            pollingKey: o || "",
                                          }),
                                          f &&
                                            !n &&
                                            (k.sfxProductType = f.type),
                                          T &&
                                            p &&
                                            !n &&
                                            (k.hsfxProductType = p.type),
                                          w &&
                                            !n &&
                                            (k.sffsxProductType = w.type),
                                          (Z = []),
                                          N && T && !n && Z.push(N.type),
                                          Z.length > 0 &&
                                            (k.smartRescheduleEquityTypeList =
                                              Z),
                                          T &&
                                            (k.productList = [
                                              { type: 24, num: 1 },
                                            ]),
                                          T && 2 === u && (k.type = 2),
                                          (e.next = 21),
                                          v(k)
                                        );
                                      case 21:
                                        if (
                                          ((V = e.sent),
                                          (0, x.hideLoading)(),
                                          (b = V.resultCode),
                                          V.pollingKey &&
                                            (this.pollingKey = V.pollingKey),
                                          !V.isNeedPay && !V.needPay)
                                        ) {
                                          e.next = 28;
                                          break;
                                        }
                                        return (
                                          (S = setInterval(function () {
                                            X.state.preHoldPercent < 95
                                              ? X.setState({
                                                  preHoldPercent:
                                                    X.state.preHoldPercent +
                                                    Math.round(
                                                      1 * Math.random()
                                                    ),
                                                })
                                              : (clearInterval(S),
                                                X.setState(
                                                  {
                                                    loadingPopVisible: !1,
                                                    preholdDisplayStep: 0,
                                                    preHoldPercent: 0,
                                                  },
                                                  function () {
                                                    X.pay(V.payOrderNumber);
                                                  }
                                                ));
                                          }, 10)),
                                          e.abrupt("return")
                                        );
                                      case 28:
                                        1 === b
                                          ? (y = setInterval(function () {
                                              X.state.preHoldPercent < 100
                                                ? X.setState({
                                                    preHoldPercent:
                                                      X.state.preHoldPercent +
                                                      Math.round(
                                                        1 * Math.random()
                                                      ),
                                                  })
                                                : (clearInterval(y),
                                                  X.setState(
                                                    {
                                                      loadingPopVisible: !1,
                                                      preholdDisplayStep: 0,
                                                      preHoldPercent: 0,
                                                    },
                                                    function () {
                                                      X.goOrderDetail();
                                                    }
                                                  ));
                                            }, 10))
                                          : 2 === b
                                          ? (this.setState({
                                              loadingPopVisible: !1,
                                              preholdDisplayStep: 0,
                                              preHoldPercent: 0,
                                            }),
                                            (I = V.confirmFailToast || {}),
                                            (B = setInterval(function () {
                                              X.state.preHoldPercent < 90
                                                ? X.setState({
                                                    preHoldPercent:
                                                      X.state.preHoldPercent +
                                                      Math.round(
                                                        1 * Math.random()
                                                      ),
                                                  })
                                                : (clearInterval(B),
                                                  X.setState(
                                                    {
                                                      loadingPopVisible: !1,
                                                      preholdDisplayStep: 0,
                                                      preHoldPercent: 0,
                                                    },
                                                    function () {
                                                      h().showModal({
                                                        title:
                                                          I.title || "提示",
                                                        content:
                                                          I.content &&
                                                          Array.isArray(
                                                            I.content
                                                          )
                                                            ? I.content[0]
                                                            : "出票失败",
                                                        showCancel: !1,
                                                        confirmText: "我知道了",
                                                        confirmColor: g.default
                                                          .isTieyou
                                                          ? "#fc6e51"
                                                          : "#0080FF",
                                                        success: function (e) {
                                                          e.confirm &&
                                                            X.goOrderDetail();
                                                        },
                                                      });
                                                    }
                                                  ));
                                            }, 10)))
                                          : 3 === b
                                          ? ((D = V.pollingInterval),
                                            (P = V.totalPollingTime),
                                            (!D || D <= 0) && (D = 1),
                                            (!P || P <= 0) && (P = 20),
                                            (this.tempTotalPollingTime = P),
                                            (this.tempInterval += D),
                                            this.addpreHoldPercent(
                                              this.tempTime + 1e3 * D,
                                              2,
                                              100
                                            ),
                                            (C = setTimeout(
                                              (0, c.Z)(
                                                (0, r.Z)().mark(function e() {
                                                  return (0, r.Z)().wrap(
                                                    function (e) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              clearTimeout(C),
                                                              (e.next = 3),
                                                              X.confirmGrabOrder(
                                                                {
                                                                  action:
                                                                    "query",
                                                                  pollingKey:
                                                                    X.pollingKey,
                                                                  buyProduct: l,
                                                                }
                                                              )
                                                            );
                                                          case 3:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    e
                                                  );
                                                })
                                              ),
                                              1e3 * D
                                            )))
                                          : (this.setState({
                                              loadingPopVisible: !1,
                                              preholdDisplayStep: 0,
                                              preHoldPercent: 0,
                                            }),
                                            h().showModal({
                                              title: "提示",
                                              content:
                                                V.resultMsg || "出票失败",
                                              showCancel: !1,
                                              confirmText: "我知道了",
                                              confirmColor: g.default.isTieyou
                                                ? "#fc6e51"
                                                : "#0080FF",
                                              success: function (e) {
                                                e.confirm && X.goOrderDetail();
                                              },
                                            })),
                                          (e.next = 34);
                                        break;
                                      case 31:
                                        (e.prev = 31),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0);
                                      case 34:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 31]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "goOrderDetail",
                        value: function () {
                          var e = this.state,
                            t = e.jumpUrl,
                            i = e.isTieyou;
                          t
                            ? h().redirectTo({ url: t })
                            : h().showModal({
                                title: "温馨提示",
                                content: "请前往".concat(
                                  i ? "铁友" : "智行",
                                  "进行查看"
                                ),
                                success: function (e) {
                                  e.confirm && N.Z.relaunchHome();
                                },
                              });
                        },
                      },
                      {
                        key: "cancelConfirmGrabOrder",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, i, n, a;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = this.state),
                                          (i = t.cancelConfirmToast),
                                          (n = t.rejectReasons),
                                          (e.prev = 1),
                                          (0, x.showLoading)("取消中"),
                                          (e.next = 5),
                                          (0, Se.Ap)({ orderNumber: this.oid })
                                        );
                                      case 5:
                                        if (
                                          !(a = e.sent) ||
                                          1 !== a.resultCode
                                        ) {
                                          e.next = 14;
                                          break;
                                        }
                                        if (
                                          (this.setState({ maskType: "" }),
                                          !(
                                            (null == n ? void 0 : n.length) > 0
                                          ))
                                        ) {
                                          e.next = 11;
                                          break;
                                        }
                                        return (
                                          this.setState({
                                            isShowRejectReasonCollectionDrawer:
                                              !0,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 11:
                                        h().showModal({
                                          title: i.title || "",
                                          content: i.subTitle || "",
                                          showCancel: !1,
                                          confirmText: i.btnName || "",
                                          confirmColor: g.default.isTieyou
                                            ? "#fc6e51"
                                            : "#0080FF",
                                          success: function (e) {
                                            e.confirm && N.Z.relaunchHome();
                                          },
                                        }),
                                          (e.next = 15);
                                        break;
                                      case 14:
                                        h().showToast({
                                          title: "抱歉，取消失败！",
                                          icon: "none",
                                        });
                                      case 15:
                                        e.next = 20;
                                        break;
                                      case 17:
                                        (e.prev = 17),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0);
                                      case 20:
                                        return (
                                          (e.prev = 20),
                                          (0, x.hideLoading)(),
                                          e.finish(20)
                                        );
                                      case 23:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 17, 20, 23]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "pay",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var i = this;
                              return (0, r.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (0, x.showLoading)(),
                                        v.ZP.doPayment({
                                          business: "train",
                                          orderNumber: t,
                                          title: "火车票订单",
                                        })
                                          .then(function () {
                                            setTimeout(function () {
                                              i.goOrderDetail();
                                            }, 200);
                                          })
                                          .catch(function (e) {
                                            console.log(e);
                                          })
                                          .finally(function () {
                                            (0, x.hideLoading)();
                                          });
                                    case 2:
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
                      },
                      {
                        key: "showCancelStayPop",
                        value: function (e) {
                          this.setState({ maskType: e });
                        },
                      },
                      {
                        key: "showAudioLayer",
                        value: function () {
                          this.setState({
                            maskType: "SmartSplitAudioPlayerLayer",
                          });
                        },
                      },
                      {
                        key: "cancelService",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.smartSeries,
                            n = t.detainTaskInfo;
                          try {
                            this.ubtTrace(199893, {
                              exposureType: "normal",
                              bizKey: "reschedule_profit_giveup_show",
                              series: i,
                            });
                          } catch (e) {
                            console.log("Add ubt trace failed: " + e);
                          }
                          n && 1 == n.taskStatus
                            ? this.popupDetainModal()
                            : this.showMultiButtonDialog({
                                title: "确认放弃吗",
                                content: "本次升级套餐机会难得，确认要放弃吗？",
                                leftButtonName: "放弃套餐并出票",
                                rightButtonName: "再想想",
                                onLeftButtonClick: function () {
                                  e.confirm(!1);
                                  try {
                                    e.ubtTrace(199894, {
                                      bizKey: "reschedule_profit_giveup_click",
                                      series: i,
                                    });
                                  } catch (e) {
                                    console.log("Add ubt trace failed: " + e);
                                  }
                                },
                                onRightButtonClick: function () {},
                              });
                        },
                      },
                      {
                        key: "closeLuckDrawPopup",
                        value: function () {
                          this.setState({ isShowLuckDrawPopup: !1 });
                        },
                      },
                      {
                        key: "getDetainTaskInfo",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, i, n;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = null),
                                          (e.prev = 1),
                                          (i = this.state.originOrderNumber),
                                          (e.next = 5),
                                          (0, b.GER)({
                                            orderNumber: i,
                                            scene: 3,
                                          })
                                        );
                                      case 5:
                                        1 == (n = e.sent).resultCode &&
                                          (t =
                                            null == n ? void 0 : n.jlTaskInfo),
                                          (e.next = 12);
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0);
                                      case 12:
                                        return (
                                          this.setState({ detainTaskInfo: t }),
                                          e.abrupt("return", t)
                                        );
                                      case 14:
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
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "popupDetainModal",
                        value: function () {
                          var e = this;
                          this.setState({ maskType: "" }),
                            this.showMultiButtonDialog({
                              title: "确认放弃吗",
                              content:
                                '本张车票来之不易，确认放弃吗？送您一次<font color="#ff5959">做任务免费出票</font>的机会。',
                              leftButtonName: "免服务费出票",
                              rightButtonName: "再想想",
                              onLeftButtonClick: function () {
                                e.handleTask();
                              },
                              onRightButtonClick: function () {
                                e.setState({ maskType: "confirmSecondRob" });
                              },
                            });
                        },
                      },
                      {
                        key: "handleTask",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, i;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          1 !=
                                            (t = this.state.rescheduleType) &&
                                            3 != t)
                                        ) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (
                                          (e.next = 5),
                                          (0, Se.Mj)({
                                            orderNumber: this.oid,
                                            action: "retrieve",
                                            pollingKey: "",
                                          })
                                        );
                                      case 5:
                                        if (
                                          1 ==
                                          (null == (i = e.sent)
                                            ? void 0
                                            : i.resultCode)
                                        ) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (
                                          h().showToast({
                                            title:
                                              (null == i
                                                ? void 0
                                                : i.resultMsg) || "",
                                            icon: "none",
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 9:
                                        this.doTask(), (e.next = 15);
                                        break;
                                      case 12:
                                        (e.prev = 12),
                                          (e.t0 = e.catch(0)),
                                          console.log(e.t0);
                                      case 15:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 12]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "doTask",
                        value: function () {
                          var e = this.state.detainTaskInfo,
                            t = null == e ? void 0 : e.taskType,
                            i = null == e ? void 0 : e.taskJumpUrl;
                          if (i)
                            switch (t) {
                              case 1:
                                N.Z.commonNavigator(i),
                                  this.setState({ isGotoH5Page: !0 });
                                break;
                              case 2:
                                this.openADVideoPop(i);
                            }
                        },
                      },
                      {
                        key: "openADVideoPop",
                        value: function (e) {
                          var t = this;
                          this.setState({ maskType: "" }, function () {
                            t.setState({ adVideoPopVisible: !0, videoSrc: e });
                          });
                        },
                      },
                      {
                        key: "onTaskFinished",
                        value: function () {
                          try {
                            var e = this.state.originOrderNumber;
                            (0, b.Shs)({ orderNumber: e, scene: 3 }),
                              this.confirm(!1);
                          } catch (e) {
                            console.warn(e);
                          }
                        },
                      },
                      {
                        key: "checkIsShowRetainDrawer",
                        value: function () {
                          var e = this;
                          return new Promise(function (t) {
                            var i = e.state.retainNote;
                            (D.RB.get() || {}).hasOwnProperty(
                              "SmartRSRetain_".concat(e.oid)
                            ) || N.Z.isEmptyObject(i)
                              ? t(!1)
                              : (e.setState({ isShowRetainDarawer: !0 }),
                                (e.checkRetainResultResolve = t));
                          });
                        },
                      },
                      {
                        key: "closeRetainDrawer",
                        value: function () {
                          this.setState({ isShowRetainDarawer: !1 });
                        },
                      },
                      {
                        key: "continueBack",
                        value: function () {
                          var e;
                          this.closeRetainDrawer(),
                            null === (e = this.checkRetainResultResolve) ||
                              void 0 === e ||
                              e.call(this, !1);
                        },
                      },
                      {
                        key: "closeRejectReasonCollectionDrawer",
                        value: function () {
                          var e =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0];
                          e && (0, x.showToast)("反馈成功，感谢您的支持"),
                            setTimeout(function () {
                              N.Z.relaunchHome();
                            }, 500);
                        },
                      },
                      {
                        key: "onShowPeaceRefundDrawer",
                        value: function () {
                          this.setState({ isShowPeaceRefundDrawer: !0 });
                        },
                      },
                      {
                        key: "closePeaceRefundDrawer",
                        value: function () {
                          this.setState({ isShowPeaceRefundDrawer: !1 });
                        },
                      },
                      {
                        key: "hideDrawer",
                        value: function () {
                          this.setState({ maskType: "" });
                        },
                      },
                      {
                        key: "handleContinueBtnForRefuseDrawer",
                        value: function () {
                          var e = this.state,
                            t = e.detainTaskInfo,
                            i = e.freeRescheduleInfo;
                          return 40 === (null == i ? void 0 : i.type)
                            ? (this.hideDrawer(), void this.confirm())
                            : 1 === (null == t ? void 0 : t.taskStatus)
                            ? (this.hideDrawer(), void this.handleTask())
                            : void this.confirmSecondRob();
                        },
                      },
                      {
                        key: "onShowFreeNoticeDrawer",
                        value: function () {
                          this.setState({ maskType: "freeNoticeDrawer" });
                        },
                      },
                      {
                        key: "gotoOrderDetail",
                        value: function (e) {
                          var t = T.ZP.getTrainDetailUrl(e);
                          N.Z.commonNavigator(t);
                        },
                      },
                      {
                        key: "handleCloseExpiredDrawer",
                        value: function () {
                          var e = this.state,
                            t = e.originOrderNumber,
                            i = e.expiredDrawerInfo;
                          null != i && i.tupPs && i.tupPs.otherJumpUrl
                            ? N.Z.commonNavigator(i.tupPs.otherJumpUrl)
                            : t && this.gotoOrderDetail(t);
                        },
                      },
                      {
                        key: "gotoGrabOrder",
                        value: function (e) {
                          e &&
                            this.navigateTo({
                              url: T.ZP.getTrainGrabOrderDetailUrl(e),
                            });
                        },
                      },
                      {
                        key: "handleGrabTicket",
                        value: function () {
                          var e,
                            t = this,
                            i = this.state,
                            n = i.originOrderNumber,
                            a = i.rescheduleConfirmTicketInfo,
                            o = i.smartSeries,
                            r = i.expiredDrawerInfo,
                            c =
                              (null == a ||
                              null === (e = a.orderTicketInfo) ||
                              void 0 === e
                                ? void 0
                                : e[0]) || {},
                            s = c.fromStation,
                            l = c.toStation,
                            d = c.seatName,
                            m = c.trainNo,
                            u = !(null == r || !r.tupPs),
                            f = {
                              type: u ? 9 : 8,
                              orderNumber: n,
                              departStation: s,
                              arrivalStation: l,
                              seatList: [d],
                              trainNumList: [m],
                            };
                          u
                            ? ((f.appointType = r.tupPs.productType),
                              (f.appointSeat = r.tupPs.appointSeat),
                              (f.fromPage = r.tupPs.fromPage))
                            : ((f.series = o),
                              (f.smartTimeoutOrderNumber = this.oid)),
                            (0, b.qHU)(f)
                              .then(function (e) {
                                if (1 === e.resultCode) {
                                  if ((t.hideDrawer(), e.isNeedPay))
                                    return void v.ZP.doPayment({
                                      orderNumber: e.payOrderNumber,
                                      business: "train",
                                      title: "火车票订单",
                                    })
                                      .then(function () {
                                        t.gotoGrabOrder(e.orderNumber);
                                      })
                                      .catch(function () {
                                        t.showCommonDialog({
                                          title: "温馨提示",
                                          content: "支付失败",
                                          buttonName: "知道了",
                                          onButtonClick: function () {
                                            t.gotoOrderDetail(n);
                                          },
                                        });
                                      });
                                  u
                                    ? t.gotoTicketUpgradeDetail(e.orderNumber)
                                    : t.gotoGrabOrder(e.orderNumber);
                                } else (0, x.showToast)(e.resultMessage || "确认改签下单失败，请稍后重试");
                              })
                              .catch(function (e) {
                                console.log(e);
                              });
                        },
                      },
                      {
                        key: "handleShowFreeDrawer",
                        value: function () {
                          var e = this.state.freeRescheduleInfo;
                          null != e &&
                            e.sffToast &&
                            (D.Qq.get().hasOwnProperty(
                              "oid_".concat(this.oid)
                            ) ||
                              this.setState({
                                maskType: "freeRescheduleDrawer",
                              }));
                        },
                      },
                      {
                        key: "onCloseFreeTipsDrawer",
                        value: function () {
                          this.hideDrawer();
                          var e = D.Qq.get() || {};
                          (e["oid_".concat(this.oid)] = 1), D.Qq.set(e);
                        },
                      },
                      {
                        key: "gotoTicketUpgradeDetail",
                        value: function (e) {
                          e &&
                            this.navigateTo({
                              url: "/pages/taroCRN/train/pages/ticketUpgradeDetail/index?oid=".concat(
                                e
                              ),
                            });
                        },
                      },
                      {
                        key: "getTupEntryInfo",
                        value: function (e) {
                          var t = this,
                            i = {
                              fromPage: "tupSCPE",
                              version: 3,
                              orderNumber: e,
                            };
                          (0, S.hC)(i)
                            .then(function (e) {
                              1 === e.resultCode &&
                                t.setState({
                                  tupEntryInfo: {
                                    jumpUrl: e.jumpUrl,
                                    titleExt: e.titleExt,
                                  },
                                });
                            })
                            .catch(function () {
                              t.setState({ tupEntryInfo: null });
                            });
                        },
                      },
                      {
                        key: "renderOldStyle",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isTieyou,
                            n = t.headInfo,
                            a = t.statusBarHeight,
                            o = t.originTicketInfo,
                            r = t.needConfirmTicketInfo,
                            c = t.questionInfo,
                            s = t.cancelBtnName,
                            l = t.confirmBtnName,
                            d = t.maskType,
                            m = t.payRemindInfo,
                            u = t.interceptAgainToast,
                            f = t.preHoldPercent,
                            h = t.loadingPopVisible,
                            g = t.series,
                            T = t.voiceDescriptionInfos,
                            v = t.isShowVoiceTag,
                            k = t.needShare,
                            Z = t.smartSeries,
                            V = t.mergeOrderTicketInfo,
                            b = t.rescheduleOriginTicketInfo,
                            S = t.rescheduleConfirmTicketInfo,
                            y = t.servicePrice,
                            I = t.hotelCouponPrice,
                            x = t.planeCouponPrice,
                            B = t.rescheduleType,
                            D = t.isShowLuckDrawPopup,
                            P = t.orderTimeout,
                            C = t.peaceRefundInfo,
                            X = t.detainTaskInfo,
                            _ = t.freeNoticeList,
                            L = t.freeRescheduleInfo,
                            G = t.travelSubsidyInfo,
                            j = t.tupEntryInfo,
                            E =
                              (null == L ? void 0 : L.note) ||
                              ((null == j ? void 0 : j.jumpUrl) &&
                                (null == j ? void 0 : j.titleExt));
                          return (0, z.BX)(p.View, {
                            className: "smart-rs-old ".concat(i ? "ty" : "zx"),
                            children: [
                              (0, z.BX)(p.View, {
                                className: "top-bar",
                                style: "padding-top: ".concat(a, "px"),
                                children: [
                                  (0, z.tZ)(p.Text, {
                                    className: "ifont-back iconfont",
                                    id: "AFBb",
                                    onClick: this.onBack,
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "tit",
                                    children: "智能拆票",
                                  }),
                                ],
                              }),
                              (0, z.BX)(p.View, {
                                className: "top-box",
                                style: "padding-top: ".concat(a + 13, "px"),
                                children: [
                                  (0, z.BX)(p.View, {
                                    className: "top-hd",
                                    children: [
                                      (0, z.tZ)(p.Image, {
                                        src: "https://pic.c-ctrip.com/train/zt/wechat/smart-tick-avatar.png",
                                        className: "avatar",
                                      }),
                                      v &&
                                        (0, z.BX)(p.View, {
                                          className:
                                            "tag bgcolor-dark color-primary",
                                          id: "AFBc",
                                          onClick: this.showAudioLayer,
                                          children: [
                                            (0, z.tZ)(p.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/train.song/xcx/icon_yysm".concat(
                                                i ? "_ty" : "",
                                                "@3x.png"
                                              ),
                                              className: "yuyin-icon",
                                            }),
                                            "语音说明",
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "tit",
                                    children: n.title,
                                  }),
                                  (0, z.tZ)(p.View, {
                                    className: "txt-bd",
                                    children: (0, z.tZ)(w.ZtRichText, {
                                      nodes: n.desc,
                                      className: "txt",
                                    }),
                                  }),
                                ],
                              }),
                              (0, z.BX)(p.View, {
                                className: "wrap ".concat(
                                  E ? "add-free-info" : ""
                                ),
                                children: [
                                  (null == C ? void 0 : C.note) &&
                                    (0, z.tZ)(ue.Z, {
                                      content: C.note,
                                      onShowIntroduceDrawer:
                                        this.onShowPeaceRefundDrawer.bind(this),
                                    }),
                                  _[0] &&
                                    (0, z.tZ)(fe.Z, {
                                      noticeInfo: _[0],
                                      id: "AFBd",
                                      onClick: this.onShowFreeNoticeDrawer,
                                    }),
                                  [22, 23, 24, 33, 39].includes(Z) &&
                                    (0, z.tZ)(Y, {
                                      maskType: d,
                                      smartSeries: Z,
                                      mergeOrderTicketInfo: V,
                                      rescheduleOriginTicketInfo: b,
                                      rescheduleConfirmTicketInfo: S,
                                      isShowPeaceRefund: !(
                                        null == C || !C.note
                                      ),
                                      goTT: function () {
                                        e.goTT();
                                      },
                                      showFirstPasDetail: function () {
                                        e.showFirstPasDetail();
                                      },
                                      showSecondLineDetail: function () {
                                        e.showSecondLineDetail();
                                      },
                                      togglePlanCompare: function () {
                                        e.togglePlanCompare();
                                      },
                                    }),
                                  ![22, 23, 24, 33, 39].includes(Z) &&
                                    (0, z.tZ)(A, {
                                      show: !!r,
                                      isTieyou: i,
                                      upBgImg: i
                                        ? "https://images3.c-ctrip.com/train/tieyou-mini-img/up-ty.png"
                                        : "https://images3.c-ctrip.com/train/tieyou-mini-img/up-zx.png",
                                      orderInfo: r,
                                      rsType: g,
                                      goTT: function () {
                                        e.goTT();
                                      },
                                      showSecondLineDetail: function () {
                                        e.showSecondLineDetail();
                                      },
                                      smartSeries: Z,
                                      mergeOrderTicketInfo: V,
                                      rescheduleOriginTicketInfo: b,
                                      rescheduleConfirmTicketInfo: S,
                                      isShowPeaceRefund: !(
                                        null == C || !C.note
                                      ),
                                    }),
                                  ![21, 22, 23, 24, 25, 33, 39].includes(Z) &&
                                    (0, z.tZ)(F, {
                                      show: !!o,
                                      enableDetail: !1,
                                      showChain: !0,
                                      rsType: g,
                                      isTieyou: i,
                                      maskType: d,
                                      originTicketInfo: o,
                                      showFirstPasDetail: function () {
                                        e.showFirstPasDetail();
                                      },
                                    }),
                                  c &&
                                    c.descList &&
                                    (0, z.BX)(p.View, {
                                      className: "white-box qa-box",
                                      children: [
                                        (0, z.tZ)(p.View, {
                                          className: "tit",
                                          children: c.title,
                                        }),
                                        c.descList.map(function (e, t) {
                                          return (0,
                                          z.tZ)(p.View, { className: "txt", children: (0, z.tZ)(w.ZtRichText, { nodes: N.Z.convertAppTextToHtmlStr(e) }) }, t);
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, z.tZ)(Ve, {
                                isOldStyle: !0,
                                cancelBtnName: s,
                                confirmBtnName: l,
                                orderTimeout: P,
                                onClickCancel: function () {
                                  return e.showCancelStayPop("cancelStayPop");
                                },
                                onClickConfirm: this.confirmSecondRob,
                                renderTopView: function () {
                                  return null != j &&
                                    j.jumpUrl &&
                                    null != j &&
                                    j.titleExt
                                    ? (0, z.tZ)(be, { data: j })
                                    : (null != L && L.note && L.note, null);
                                },
                              }),
                              [
                                "showPlanCompare",
                                "showFirstLineDetail",
                              ].includes(d) &&
                                (0, z.tZ)(p.View, {
                                  className: "shade-box",
                                  id: "AFBg",
                                  onClick: this.closeMask,
                                }),
                              (0, z.tZ)(q.Z, {
                                show: "secondLinePasDetail" === d,
                                title: "乘客详情",
                                ticketInfoList:
                                  r && r.ticketInfo
                                    ? r.ticketInfo.ticketInfoList
                                    : [],
                                handleClose: function () {
                                  e.closeMask();
                                },
                              }),
                              "confirmSecondRob" === d &&
                                (0, z.tZ)(H.Z, {
                                  show: "true",
                                  isTieyou: i,
                                  title: "请确认是否升级",
                                  needShare: k,
                                  needConfirmTicketInfo: r,
                                  payRemindInfo: m,
                                  confirmBtnName: l,
                                  servicePrice: y,
                                  hotelCouponPrice: I,
                                  planeCouponPrice: x,
                                  rescheduleType: B,
                                  series: Z,
                                  orderTimeout: P,
                                  handleClose: function () {
                                    e.closeMask(),
                                      e.ubtTrace(199894, {
                                        bizKey:
                                          "reschedule_profit_pay_close_click",
                                        series: Z,
                                      });
                                  },
                                  confirmPay: function () {
                                    e.confirm(!0);
                                  },
                                  goTT: function () {
                                    e.goTT();
                                  },
                                  ubtTrace: this.ubtTrace,
                                  cancelService: this.cancelService,
                                  travelSubsidyInfo: G,
                                }),
                              (0, z.tZ)(M, {
                                show: "cancelStayPop" === d,
                                isTieyou: i,
                                handleClose: function () {
                                  e.closeMask();
                                },
                                confirm: this.handleContinueBtnForRefuseDrawer,
                                cancel: function () {
                                  e.cancelConfirmGrabOrder();
                                },
                                goTT: function () {
                                  e.goTT();
                                },
                                ticketInfo: null == r ? void 0 : r.ticketInfo,
                                interceptAgainToast: u,
                                orderTimeout: P,
                                peaceRefundTips: null == C ? void 0 : C.note,
                                hasFreeTask:
                                  1 === (null == X ? void 0 : X.taskStatus) ||
                                  40 === (null == L ? void 0 : L.type),
                                tag:
                                  40 === (null == L ? void 0 : L.type)
                                    ? "限时免费"
                                    : "",
                              }),
                              (0, z.tZ)(R.Z, {
                                show: h,
                                width: f,
                                isTieyou: i,
                              }),
                              "SmartSplitAudioPlayerLayer" === d &&
                                (0, z.tZ)(O.Z, {
                                  show: "true",
                                  isTieyou: i,
                                  title: "语音说明",
                                  voiceDescriptionInfos: T,
                                  handleClose: this.closeMask.bind(this),
                                }),
                              D &&
                                (0, z.tZ)(W.Z, {
                                  orderNumber: this.oid,
                                  payRemindInfo: m,
                                  closeModal:
                                    this.closeLuckDrawPopup.bind(this),
                                }),
                            ],
                          });
                        },
                      },
                      {
                        key: "getSeatTagImg",
                        value: function () {
                          var e,
                            t,
                            i,
                            n,
                            a = this.state.rescheduleConfirmTicketInfo;
                          return (
                            {
                              靠窗: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Kaochuang.png",
                              过道: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Guodao.png",
                            }[
                              null == a ||
                              null === (e = a.orderTicketInfo) ||
                              void 0 === e ||
                              null === (t = e[0]) ||
                              void 0 === t ||
                              null === (i = t.ticketInfoList) ||
                              void 0 === i ||
                              null === (n = i[0]) ||
                              void 0 === n
                                ? void 0
                                : n.seatTag
                            ] ||
                            "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Guodao.png"
                          );
                        },
                      },
                      {
                        key: "getSeries81HeadImg",
                        value: function () {
                          var e = "";
                          switch (this.state.tripType) {
                            case 1:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_xie/2023/07/img_ZNGQ81_zhz.webp";
                              break;
                            case 2:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_xie/2023/07/img_ZNGQ81_zz.webp";
                          }
                          return e;
                        },
                      },
                      {
                        key: "getHeadTopImgae",
                        value: function () {
                          var e =
                            "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Guodao.png";
                          switch (this.state.smartSeries) {
                            case 1:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_wzGed.png";
                              break;
                            case 2:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_yzGyw.png";
                              break;
                            case 3:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_ydGed.png";
                              break;
                            case 7:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Gddz.png";
                              break;
                            case 8:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Gcheci.png";
                              break;
                            case 9:
                            case 10:
                            case 12:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Glxcheci.png";
                              break;
                            case 30:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_xiapu.png";
                              break;
                            case 31:
                            case 32:
                            case 34:
                              e = this.getSeatTagImg();
                              break;
                            case 35:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Gtcx.png";
                              break;
                            case 36:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Gqczd.png";
                              break;
                            case 37:
                            case 38:
                              e = this.getSeatTagImg();
                              break;
                            case 56:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_xie/2023/05/img_ZNGQ_zdzx.png";
                              break;
                            case 57:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_xie/2023/04/img_ZNHZ_hlz.png";
                              break;
                            case 59:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Kaochuang.png";
                              break;
                            case 60:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Guodao.png";
                              break;
                            case 61:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_zhongpu.png";
                              break;
                            case 62:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_shangpu.png";
                              break;
                            case 63:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_3g2Lianzuo_s63.png";
                              break;
                            case 64:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_3g2_s64.png";
                              break;
                            case 65:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Gtzzz.png";
                              break;
                            case 66:
                            case 80:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_zhz_Gtcx.png";
                              break;
                            case 71:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Gtcx.png";
                              break;
                            case 77:
                            case 78:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Guodao.png";
                              break;
                            case 79:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_xie/2023/05/img_ZNGQ_zdzx.png";
                              break;
                            case 81:
                              e = this.getSeries81HeadImg();
                            case 83:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_xie/2023/07/img_ZNGQ81_zhz.webp";
                          }
                          return e;
                        },
                      },
                      {
                        key: "gotoRescheduleRulePage",
                        value: function () {
                          var e = "https://".concat(
                            g.default.isTieyou
                              ? "m.tieyou.com"
                              : "m.suanya.com",
                            "/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=rebook"
                          );
                          N.Z.commonNavigator(e);
                        },
                      },
                      {
                        key: "onShowHotelCouponDrawer",
                        value: function () {
                          this.setState({
                            maskType: "bookingHotelCouponDescDrawer",
                          });
                        },
                      },
                      {
                        key: "onCloseHotelCouponDrawer",
                        value: function () {
                          this.setState({ maskType: "confirmSecondRob" });
                        },
                      },
                      {
                        key: "onShowSameTripPasDrawer",
                        value: function () {
                          this.setState({ maskType: "sameTripPasInfoDrawer" });
                        },
                      },
                      {
                        key: "renderNewStyle",
                        value: function () {
                          var e,
                            t,
                            i,
                            n,
                            a,
                            o,
                            r,
                            c = this,
                            s = this.state,
                            l = s.isTieyou,
                            d = s.headInfo,
                            m = void 0 === d ? {} : d,
                            u = s.cancelBtnName,
                            f = s.confirmBtnName,
                            h = s.rescheduleConfirmTicketInfo,
                            w = s.rescheduleOriginTicketInfo,
                            g = s.questionInfo,
                            N = s.maskType,
                            T = s.payRemindInfo,
                            v = s.smartSeries,
                            k = s.needShare,
                            Z = s.servicePrice,
                            V = s.hotelCouponPrice,
                            b = s.planeCouponPrice,
                            S = s.isShowLuckDrawPopup,
                            y = s.refuseToastDesc,
                            I = s.loadingPopVisible,
                            x = s.preHoldPercent,
                            B = s.refuseToastTitle,
                            D = s.mergeOrderTicketInfo,
                            P = s.interceptAgainToast,
                            C = s.rescheduleType,
                            X = s.orderTimeout,
                            _ = s.peaceRefundInfo,
                            O = s.detainTaskInfo,
                            F = s.freeNoticeList,
                            L = s.hotelSfxProduct,
                            A = s.freeRescheduleInfo,
                            G = s.travelSubsidyInfo,
                            j = s.tripType,
                            E = s.secondTripBookingTips,
                            Q = s.tupEntryInfo,
                            U =
                              null == h ||
                              null === (e = h.orderTicketInfo) ||
                              void 0 === e
                                ? void 0
                                : e[0],
                            K = null == U ? void 0 : U.routeSequence,
                            $ = (null == U ? void 0 : U.ticketInfoList) || [],
                            ee =
                              null == w ||
                              null === (t = w.orderTicketInfo) ||
                              void 0 === t ||
                              null === (i = t[0]) ||
                              void 0 === i
                                ? void 0
                                : i.ticketInfoList,
                            te =
                              (null == A ? void 0 : A.note) ||
                              E ||
                              ((null == Q ? void 0 : Q.jumpUrl) &&
                                (null == Q ? void 0 : Q.titleExt));
                          return (0, z.BX)(p.View, {
                            className: "new-series "
                              .concat(l ? "ty" : "zx", " ")
                              .concat(34 == v ? "series-34" : "", " ")
                              .concat(te ? "add-free-info" : ""),
                            children: [
                              (0, z.tZ)(re.Z, {
                                headTopImage: this.getHeadTopImgae(),
                                headInfo: m,
                                smartSeries: v,
                                originToStation:
                                  null == w ||
                                  null === (n = w.orderTicketInfo) ||
                                  void 0 === n ||
                                  null === (a = n[0]) ||
                                  void 0 === a
                                    ? void 0
                                    : a.toStation,
                                rescheduleToStation:
                                  null == h ||
                                  null === (o = h.orderTicketInfo) ||
                                  void 0 === o ||
                                  null === (r = o[0]) ||
                                  void 0 === r
                                    ? void 0
                                    : r.toStation,
                                onBack: this.onBack.bind(this),
                                fromSource: "smartRSTicket",
                              }),
                              (0, z.BX)(p.View, {
                                className: "wrap-v2",
                                children: [
                                  -1 !== [66, 80].indexOf(v) &&
                                    (0, z.tZ)(ge, {
                                      rescheduleTripInfo: h,
                                      mergeTripInfo: D,
                                    }),
                                  (null == _ ? void 0 : _.note) &&
                                    34 === v &&
                                    (0, z.tZ)(ue.Z, {
                                      isNewStyle: !0,
                                      content: _.note,
                                      onShowIntroduceDrawer:
                                        this.onShowPeaceRefundDrawer.bind(this),
                                    }),
                                  F[0] &&
                                    34 === v &&
                                    (0, z.tZ)(fe.Z, {
                                      noticeInfo: F[0],
                                      id: "AFBh",
                                      onClick: this.onShowFreeNoticeDrawer,
                                    }),
                                  -1 !== [71].indexOf(v) &&
                                    2 === K &&
                                    (0, z.BX)(z.HY, {
                                      children: [
                                        (0, z.tZ)(ae, {
                                          originalTicketInfo: D,
                                          smartSeries: v,
                                          transitTicketInfo: D,
                                        }),
                                        (0, z.tZ)(J.Z, {
                                          RSTicketInfo: h,
                                          oldTicketPassengerList: ee,
                                          smartSeries: v,
                                          isFromDrawer: !1,
                                          transitTicketInfo: D,
                                          peaceRefundTips:
                                            null == _ ? void 0 : _.note,
                                          refundFeeFreeTips:
                                            null == F ? void 0 : F[0],
                                          onShowSameTripPasDrawer:
                                            this.onShowSameTripPasDrawer,
                                          onShowFreeNoticeDrawer:
                                            this.onShowFreeNoticeDrawer,
                                          onShowPeaceRefundDrawer:
                                            this.onShowPeaceRefundDrawer,
                                        }),
                                      ],
                                    }),
                                  (-1 !==
                                    [
                                      1, 2, 3, 7, 8, 9, 10, 12, 30, 31, 32, 35,
                                      36, 37, 38, 56, 57, 59, 60, 61, 62, 63,
                                      64, 65, 66, 77, 78, 79, 80, 81, 83,
                                    ].indexOf(v) ||
                                    (71 === v && 1 === K)) &&
                                    (0, z.tZ)(J.Z, {
                                      RSTicketInfo: h,
                                      oldTicketPassengerList: ee,
                                      smartSeries: v,
                                      isFromDrawer: !1,
                                      transitTicketInfo: D,
                                      peaceRefundTips:
                                        null == _ ? void 0 : _.note,
                                      refundFeeFreeTips:
                                        null == F ? void 0 : F[0],
                                      tripType: j,
                                      onShowSameTripPasDrawer:
                                        this.onShowSameTripPasDrawer,
                                      onShowFreeNoticeDrawer:
                                        this.onShowFreeNoticeDrawer,
                                      onShowPeaceRefundDrawer:
                                        this.onShowPeaceRefundDrawer,
                                    }),
                                  -1 !== [35].indexOf(v) &&
                                    (0, z.tZ)(se, {
                                      originalTicketInfo: w,
                                      rescheduleTicketInfo: h,
                                    }),
                                  -1 !==
                                    [
                                      1, 2, 3, 7, 8, 9, 10, 12, 30, 35, 37, 56,
                                      57, 59, 60, 61, 62, 63, 64, 65, 77, 78,
                                      81, 83,
                                    ].indexOf(v) &&
                                    (0, z.tZ)(ae, {
                                      originalTicketInfo: w,
                                      rescheduleTicketInfo: h,
                                      smartSeries: v,
                                      transitTicketInfo: D,
                                    }),
                                  ((71 === v && 1 === K) ||
                                    -1 !== [79].indexOf(v)) &&
                                    (0, z.tZ)(ae, {
                                      originalTicketInfo: D,
                                      smartSeries: v,
                                      transitTicketInfo: D,
                                    }),
                                  -1 !== [66, 80].indexOf(v) &&
                                    (0, z.tZ)(Ne, {
                                      smartSeries: v,
                                      mergeTicketInfo: D,
                                    }),
                                  -1 !== [36].indexOf(v) &&
                                    (0, z.tZ)(le, {
                                      rescheduleOriginTicketInfo: w,
                                      mergeOrderTicketInfo: D,
                                    }),
                                  -1 !== [34].indexOf(v) &&
                                    (0, z.tZ)(Y, {
                                      maskType: N,
                                      smartSeries: v,
                                      mergeOrderTicketInfo: D,
                                      rescheduleOriginTicketInfo: w,
                                      rescheduleConfirmTicketInfo: h,
                                      isShowPeaceRefund: !(
                                        null == _ || !_.note
                                      ),
                                      goTT: function () {
                                        c.goTT();
                                      },
                                      showFirstPasDetail: function () {
                                        c.showFirstPasDetail();
                                      },
                                      showSecondLineDetail: function () {
                                        c.showSecondLineDetail();
                                      },
                                      togglePlanCompare: function () {
                                        c.togglePlanCompare();
                                      },
                                    }),
                                  (0, z.tZ)(ke.Z, {
                                    descList: null == g ? void 0 : g.descList,
                                  }),
                                  (0, z.tZ)(p.Image, {
                                    className: "img-logo",
                                    src: "https://images3.c-ctrip.com/zt/robTicket/common/slogon_".concat(
                                      l ? "ty" : "zx",
                                      "_new.png"
                                    ),
                                  }),
                                ],
                              }),
                              (0, z.tZ)(Ve, {
                                cancelBtnName: u,
                                confirmBtnName: f,
                                orderTimeout: X,
                                onClickCancel: function () {
                                  return c.showCancelStayPop(
                                    -1 != [1, 2, 3, 8, 34].indexOf(v)
                                      ? "cancelStayPop"
                                      : "refuseDrawer"
                                  );
                                },
                                onClickConfirm: this.confirmSecondRob,
                                renderTopView: function () {
                                  return null != Q &&
                                    Q.jumpUrl &&
                                    null != Q &&
                                    Q.titleExt
                                    ? (0, z.tZ)(be, { data: Q })
                                    : null != A && A.note && !E
                                    ? (0, z.tZ)(ve, { content: A.note })
                                    : E
                                    ? (0, z.tZ)(Ze, { content: E })
                                    : null;
                                },
                              }),
                              (0, z.tZ)(R.Z, {
                                show: I,
                                width: x,
                                isTieyou: l,
                              }),
                              S &&
                                (0, z.tZ)(W.Z, {
                                  orderNumber: this.oid,
                                  payRemindInfo: T,
                                  closeModal:
                                    this.closeLuckDrawPopup.bind(this),
                                }),
                              "confirmSecondRob" === N &&
                                (0, z.tZ)(H.Z, {
                                  show: "true",
                                  isTieyou: l,
                                  title: "请确认是否升级",
                                  needShare: k,
                                  RSTicketInfo: h,
                                  payRemindInfo: T,
                                  confirmBtnName: f,
                                  servicePrice: Z,
                                  hotelCouponPrice: V,
                                  planeCouponPrice: b,
                                  series: v,
                                  rescheduleType: C,
                                  orderTimeout: X,
                                  handleClose: function () {
                                    c.closeMask();
                                  },
                                  confirmPay: function () {
                                    c.confirm(!0);
                                  },
                                  goTT: function () {
                                    c.goTT();
                                  },
                                  ubtTrace: this.ubtTrace,
                                  cancelService: this.cancelService,
                                  onShowHotelCouponDrawer:
                                    this.onShowHotelCouponDrawer,
                                  hotelSfxProduct: L,
                                  travelSubsidyInfo: G,
                                }),
                              -1 !=
                                [
                                  7, 9, 10, 12, 30, 31, 32, 35, 36, 37, 38, 56,
                                  57, 59, 60, 61, 62, 63, 64, 65, 66, 71, 77,
                                  78, 79, 80, 81, 83,
                                ].indexOf(v) &&
                                (0, z.tZ)(oe.Z, {
                                  show: "refuseDrawer" === N,
                                  title: B,
                                  subTitle: "接受新车票，您可享受",
                                  refuseToast: y,
                                  leftBtnName: "确认出票",
                                  rightBtnName: "不要这张票",
                                  peaceRefundTips: null == _ ? void 0 : _.note,
                                  hasFreeTask:
                                    1 === (null == O ? void 0 : O.taskStatus) ||
                                    40 === (null == A ? void 0 : A.type),
                                  onClose: this.closeMask,
                                  onLeftClick:
                                    this.handleContinueBtnForRefuseDrawer,
                                  onRightClick: function () {
                                    c.cancelConfirmGrabOrder();
                                  },
                                  tag:
                                    40 === (null == A ? void 0 : A.type)
                                      ? "限时免费"
                                      : "",
                                }),
                              -1 != [1, 2, 3, 8, 34].indexOf(v) &&
                                (0, z.tZ)(M, {
                                  show: "cancelStayPop" === N,
                                  isTieyou: l,
                                  handleClose: function () {
                                    c.closeMask();
                                  },
                                  confirm:
                                    this.handleContinueBtnForRefuseDrawer,
                                  cancel: function () {
                                    c.cancelConfirmGrabOrder();
                                  },
                                  goTT: function () {
                                    c.goTT();
                                  },
                                  ticketInfo: U,
                                  interceptAgainToast: P,
                                  orderTimeout: X,
                                  peaceRefundTips: null == _ ? void 0 : _.note,
                                  hasFreeTask:
                                    1 === (null == O ? void 0 : O.taskStatus) ||
                                    40 === (null == A ? void 0 : A.type),
                                  tag:
                                    40 === (null == A ? void 0 : A.type)
                                      ? "限时免费"
                                      : "",
                                }),
                              [
                                "showPlanCompare",
                                "showFirstLineDetail",
                              ].includes(N) &&
                                (0, z.tZ)(p.View, {
                                  className: "shade-box",
                                  id: "AFBk",
                                  onClick: this.closeMask,
                                }),
                              (0, z.tZ)(q.Z, {
                                show: "secondLinePasDetail" === N,
                                title: "乘客详情",
                                ticketInfoList: $,
                                handleClose: function () {
                                  c.closeMask();
                                },
                              }),
                              (0, z.tZ)(Te, {
                                visible: "sameTripPasInfoDrawer" === N,
                                originalPasList: ee,
                                rsPasList: $,
                                onClose: this.hideDrawer,
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            i,
                            n = this,
                            a = this.state,
                            o = a.smartSeries,
                            r = a.loading,
                            c = a.retainNote,
                            s = a.isShowRetainDarawer,
                            l = a.rejectReasons,
                            d = a.isShowRejectReasonCollectionDrawer,
                            m = a.adVideoPopVisible,
                            u = a.videoSrc,
                            f = a.isShowPeaceRefundDrawer,
                            h = a.peaceRefundInfo,
                            w = a.maskType,
                            g = a.freeNoticeList,
                            N = a.expiredDrawerInfo,
                            T = a.hotelSfxProduct,
                            v = a.freeRescheduleInfo,
                            k = a.rescheduleType,
                            Z = a.questionInfo,
                            V =
                              -1 !==
                              [
                                1, 2, 3, 7, 8, 9, 10, 12, 30, 31, 32, 34, 35,
                                36, 37, 38, 56, 57, 59, 60, 61, 62, 63, 64, 65,
                                66, 71, 77, 78, 79, 80, 81, 83,
                              ].indexOf(o);
                          return (0, z.BX)(p.View, {
                            className: "train-smart-rs",
                            children: [
                              !r &&
                                (0, z.tZ)(p.Block, {
                                  children: V
                                    ? this.renderNewStyle()
                                    : this.renderOldStyle(),
                                }),
                              r && (0, z.tZ)(p.View, {}),
                              (0, z.tZ)(P.Z, {
                                visible: m,
                                src: u,
                                onFinish: function () {
                                  n.setState({ adVideoPopVisible: !1 }),
                                    n.onTaskFinished();
                                },
                              }),
                              (0, z.tZ)(de, {
                                isShow: s,
                                oid: this.oid,
                                retainNote: c,
                                onKeep: this.closeRetainDrawer,
                                onBack: this.continueBack,
                              }),
                              (0, z.tZ)(me, {
                                isShow: d,
                                oid: this.oid,
                                rejectReasons: l,
                                onClose: this.closeRejectReasonCollectionDrawer,
                              }),
                              f &&
                                (0, z.tZ)(C.Z, {
                                  refundRules: h.srRules,
                                  onClose:
                                    this.closePeaceRefundDrawer.bind(this),
                                }),
                              (0, z.tZ)(he, {
                                visible: "freeNoticeDrawer" === w && g[1],
                                noticeInfo: g[1],
                                onClose: this.hideDrawer,
                              }),
                              (0, z.tZ)(pe, {
                                visible: "expiredDrawer" === w,
                                drawerInfo: N,
                                rescheduleType: k,
                                tips: null == Z ? void 0 : Z.descList,
                                onClose: this.handleCloseExpiredDrawer,
                                onConfirm: this.handleGrabTicket,
                              }),
                              (0, z.tZ)(X.Z, {
                                visible: "bookingHotelCouponDescDrawer" === w,
                                drawerInfo: null == T ? void 0 : T.hrsfRule,
                                onClose: this.onCloseHotelCouponDrawer,
                              }),
                              (0, z.tZ)(_.Z, {
                                isShow: "freeRescheduleDrawer" === w,
                                iconUrl:
                                  "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_mftq_jxcp.png",
                                title:
                                  null == v ||
                                  null === (e = v.sffToast) ||
                                  void 0 === e
                                    ? void 0
                                    : e.title,
                                subTitle:
                                  null == v ||
                                  null === (t = v.sffToast) ||
                                  void 0 === t
                                    ? void 0
                                    : t.note,
                                btnTxt:
                                  null == v ||
                                  null === (i = v.sffToast) ||
                                  void 0 === i
                                    ? void 0
                                    : i.btnName,
                                onClose: this.onCloseFreeTipsDrawer,
                                onConfirm: this.onCloseFreeTipsDrawer,
                              }),
                              (0, z.tZ)(B.Z, {
                                ref: function (e) {
                                  n.onDialogAttach(e);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(u.default.Component))
              ) || n;
          Page(
            (0, a.createPageConfig)(
              ye,
              "pages/trainsmart/smartRSTicket/index",
              { root: { cn: [] } },
              { navigationStyle: "custom", backgroundColorBottom: "#EFEFEF" } ||
                {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            42865, 3322, 36332, 95854, 8014, 81198, 35203, 4978, 56906, 35408,
            3429, 40459, 20324, 45944, 69271, 17115, 22904, 36, 47613, 87577,
            71295, 22772, 2548, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(66237);
          }
        ),
          e.O();
      },
    ]);
})();
