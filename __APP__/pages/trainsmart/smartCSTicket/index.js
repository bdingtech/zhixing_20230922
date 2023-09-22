!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/fecc9c60875b710a8101d0d50626beef.js"),
    require("../sub-common/a2ac0ceb5f7d0d895cfbf0fbbe36cfa7.js"),
    require("../sub-common/fc8d2c41f03b7cf8df3076a401470a28.js"),
    require("../sub-common/82eba6c76a1180b32ebf23e60fff4c61.js"),
    require("../sub-common/580faf134c1c3cc47a839c0faf698ee0.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [26863],
      {
        6859: function (e, t, i) {
          var n,
            a = i(32180),
            o = i(79301),
            c = i(298),
            s = i(95308),
            r = i(57042),
            l = i(24460),
            m = i(21867),
            d = i(86066),
            h = i(52500),
            u = i(92954),
            f = i.n(u),
            p = i(71515),
            g = i(34229),
            w = i(79792),
            N = i(79910),
            T = i(25391),
            Z = i(93761),
            v = i(4102),
            V = i(8271),
            b = i.n(V),
            k = (i(89976), i(81957)),
            x = i(10741),
            y = i(18783),
            B = i(1269),
            I = i(49120),
            S = i(58676),
            P = i(21999),
            C = i(58789),
            D = i(2809),
            X = i(91377),
            _ = i(79982),
            L = i(48813),
            R = h.default.memo(function (e) {
              var t = e.show,
                i = void 0 === t || t,
                n = e.showChain,
                a = void 0 !== n && n,
                o = e.isTieyou,
                c = void 0 !== o && o,
                s = e.originTicketInfo,
                r = void 0 === s ? {} : s,
                l = e.showFirstPasDetail,
                m = void 0 === l ? function () {} : l;
              return r && r.fromDateDesc
                ? (0, L.tZ)(p.View, {
                    className: "train-smart-cs-ticket-banner-n",
                    children: (0, L.tZ)(p.View, {
                      className: c ? "ty" : "zx",
                      children:
                        i &&
                        (0, L.BX)(p.View, {
                          className: "white-box first-trip",
                          id: "AFAU",
                          onClick: m,
                          children: [
                            a &&
                              (0, L.BX)(p.Block, {
                                children: [
                                  (0, L.tZ)(p.View, {
                                    className: "left-chain",
                                  }),
                                  (0, L.tZ)(p.View, {
                                    className: "right-chain",
                                  }),
                                ],
                              }),
                            (0, L.tZ)(p.View, {
                              className: "left",
                              children: (0, L.tZ)(p.View, {
                                className: "left-title",
                                children: "原抢票方案",
                              }),
                            }),
                            r.statusDesc &&
                              (0, L.tZ)(p.View, {
                                className: "tag",
                                children: r.statusDesc,
                              }),
                            (0, L.tZ)(p.View, { style: "flex: 1" }),
                            (0, L.BX)(p.View, {
                              className: "right",
                              children: [
                                (0, L.tZ)(p.View, {
                                  className: "s-info",
                                  children: ""
                                    .concat(r.fromDateDesc, "、")
                                    .concat(r.fromStation, "-")
                                    .concat(r.toStation, "、")
                                    .concat(r.seats),
                                }),
                                (0, L.tZ)(p.View, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                          ],
                        }),
                    }),
                  })
                : (0, L.tZ)(p.View, {});
            }),
            A = h.default.memo(function (e) {
              var t = e.show,
                i = void 0 === t || t,
                n = e.isTieyou,
                a = void 0 !== n && n,
                o = e.showChain,
                c = void 0 !== o && o,
                s = e.upBgImg,
                r = void 0 === s ? "" : s,
                l = e.orderInfo,
                m = void 0 === l ? {} : l,
                d = e.rsType,
                h = void 0 === d ? "" : d,
                u = e.bubbleTips,
                f = void 0 === u ? "" : u,
                g = e.goTT,
                w = void 0 === g ? function () {} : g,
                N = e.showSecondLineDetail,
                T = void 0 === N ? function () {} : N;
              return m && m.ticketInfo
                ? (0, L.tZ)(p.View, {
                    className: "train-smart-cs-ticket-banner-s",
                    children: (0, L.tZ)(p.View, {
                      className: a ? "ty" : "zx",
                      children:
                        i &&
                        (0, L.BX)(p.View, {
                          className: "white-box second-trip",
                          children: [
                            r &&
                              (0, L.tZ)(p.Image, {
                                src: r,
                                mode: "widthFix",
                                className: "up-bg",
                              }),
                            c &&
                              (0, L.BX)(p.Block, {
                                children: [
                                  (0, L.tZ)(p.View, {
                                    className: "left-chain",
                                  }),
                                  (0, L.tZ)(p.View, {
                                    className: "right-chain",
                                  }),
                                ],
                              }),
                            (0, L.BX)(p.View, {
                              className: "new-ticket-tag",
                              children: [
                                (0, L.tZ)(p.Image, {
                                  className: "new-ticket-img",
                                  src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_ZNCP_tt.png",
                                }),
                                (0, L.tZ)(p.Text, {
                                  className: "txt",
                                  children: "新车票",
                                }),
                              ],
                            }),
                            (0, L.BX)(p.View, {
                              className: "second-trip-hd",
                              children: [
                                (0, L.tZ)(p.View, {
                                  className: "left",
                                  children: m.fromDateDesc + " " + m.fromRemind,
                                }),
                                (0, L.tZ)(p.View, {
                                  className: "right",
                                  children: m.toDateDesc + " " + m.toRemind,
                                }),
                              ],
                            }),
                            (0, L.BX)(p.View, {
                              className: "second-trip-bd",
                              children: [
                                (0, L.BX)(p.View, {
                                  className: "from",
                                  children: [
                                    (0, L.tZ)(p.View, {
                                      className: "time ".concat(
                                        3 === h ? "color-green" : ""
                                      ),
                                      children: m.ticketInfo.fromTime,
                                    }),
                                    (0, L.tZ)(p.View, {
                                      className: "station",
                                      children: m.ticketInfo.fromStation,
                                    }),
                                  ],
                                }),
                                (0, L.tZ)(p.View, {
                                  className: "schedule",
                                  id: "AFAV",
                                  onClick: w,
                                  children: "时刻表",
                                }),
                                (0, L.BX)(p.View, {
                                  className: "to",
                                  children: [
                                    (0, L.tZ)(p.View, {
                                      className: "time",
                                      children: m.ticketInfo.toTime,
                                    }),
                                    (0, L.tZ)(p.View, {
                                      className: "station ".concat(
                                        2 === h ? "color-green" : ""
                                      ),
                                      children: m.ticketInfo.toStation,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            f &&
                              (0, L.BX)(p.View, {
                                className: "bubble-tips",
                                children: [
                                  (0, L.tZ)(p.View, { className: "top-arrow" }),
                                  (0, L.tZ)(p.View, {
                                    className: "bubble-tips-txt",
                                    children: f,
                                  }),
                                ],
                              }),
                            (0, L.BX)(p.View, {
                              className: "second-trip-tick",
                              children: [
                                (0, L.BX)(p.View, {
                                  className: "lbox",
                                  children: [
                                    (0, L.tZ)(p.View, {
                                      className: "label",
                                      children: "座席",
                                    }),
                                    (0, L.tZ)(p.View, {
                                      className: "txt ".concat(
                                        1 === h ? "color-green" : ""
                                      ),
                                      children: m.ticketInfo.seatName,
                                    }),
                                  ],
                                }),
                                (0, L.BX)(p.View, {
                                  className: "mid",
                                  children: [
                                    (0, L.tZ)(p.View, {
                                      className: "label",
                                      children: "车次",
                                    }),
                                    (0, L.tZ)(p.View, {
                                      className: "".concat(
                                        3 === h ? "color-green" : ""
                                      ),
                                      children: m.ticketInfo.trainNo,
                                    }),
                                  ],
                                }),
                                (0, L.BX)(p.View, {
                                  className: "rbox",
                                  children: [
                                    (0, L.tZ)(p.View, {
                                      className: "label",
                                      children: "价格",
                                    }),
                                    (0, L.tZ)(p.View, {
                                      className: "price",
                                      children:
                                        m.ticketInfo.ticketInfoList[0]
                                          .ticketPrice,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, L.BX)(p.View, {
                              className: "second-trip-pasg",
                              id: "AFAW",
                              onClick: T,
                              children: [
                                (0, L.tZ)(p.View, {
                                  className: "name",
                                  children: m.pasStr,
                                }),
                                m.seatTagStr &&
                                  (0, L.tZ)(p.View, {
                                    className: "tag-grey",
                                    children: m.seatTagStr,
                                  }),
                                (0, L.tZ)(p.View, {
                                  className: "seat",
                                  children: m.seatNoStr,
                                }),
                                (0, L.tZ)(p.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                          ],
                        }),
                    }),
                  })
                : (0, L.tZ)(p.View, {});
            }),
            z = i(33477),
            F = h.default.memo(function (e) {
              var t = e.show,
                i = void 0 === t || t,
                n = e.title,
                a = void 0 === n ? "" : n,
                o = e.isTieyou,
                c = void 0 !== o && o,
                s = e.ticketInfo,
                r = void 0 === s ? null : s,
                l = e.bubbleTips,
                m = void 0 === l ? "" : l,
                d = e.handleClose,
                h = void 0 === d ? function () {} : d,
                u = e.confirmPay,
                f = void 0 === u ? function () {} : u,
                g = e.goTT,
                w = void 0 === g ? function () {} : g;
              if (!r) return (0, L.tZ)(p.View, {});
              var N = b()(r.fromDate).format("M月D日"),
                T = b()(r.toDate).format("M月D日");
              return (0, L.tZ)(z.Z, {
                show: i,
                title: a,
                handleClose: h,
                children: (0, L.tZ)(p.View, {
                  className: "train-smart-cs-ticket-confirm-second-pay-layer",
                  children: (0, L.tZ)(p.View, {
                    className: c ? "ty" : "zx",
                    children: (0, L.BX)(p.View, {
                      className: "pop-payment-detail",
                      children: [
                        (0, L.BX)(p.View, {
                          className: "white-box pop-payment-tick",
                          children: [
                            (0, L.BX)(p.View, {
                              className: "pop-payment-hd",
                              children: [
                                (0, L.BX)(p.View, {
                                  className: "from",
                                  children: [
                                    (0, L.tZ)(p.View, {
                                      className: "date",
                                      children: ""
                                        .concat(N)
                                        .concat(
                                          r.departureTimeRemind
                                            ? " " + r.departureTimeRemind
                                            : ""
                                        ),
                                    }),
                                    (0, L.tZ)(p.View, {
                                      className: "time",
                                      children: r.fromTime,
                                    }),
                                    (0, L.tZ)(p.View, {
                                      className: "station",
                                      children: r.fromStation,
                                    }),
                                  ],
                                }),
                                (0, L.BX)(p.View, {
                                  className: "mid",
                                  children: [
                                    (0, L.tZ)(p.View, {
                                      className: "schedule",
                                      id: "AFAa",
                                      onClick: w,
                                      children: "时刻表",
                                    }),
                                    (0, L.BX)(p.View, {
                                      className: "txt",
                                      children: [
                                        r.trainNo,
                                        (0, L.tZ)(p.Text, {
                                          className: "ifont-sfz iconfont",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, L.BX)(p.View, {
                                  className: "to",
                                  children: [
                                    (0, L.tZ)(p.View, {
                                      className: "date",
                                      children: T,
                                    }),
                                    (0, L.tZ)(p.View, {
                                      className: "time",
                                      children: r.toTime,
                                    }),
                                    (0, L.tZ)(p.View, {
                                      className: "station",
                                      children: r.toStation,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            m &&
                              (0, L.tZ)(p.View, {
                                className: "bubble-tips color-primary",
                                children: m,
                              }),
                            (0, L.tZ)(p.View, {
                              className: "pop-payment-list",
                              children: r.ticketInfoList.map(function (e, t) {
                                return (0,
                                L.BX)(p.View, { className: "item", children: [(0, L.tZ)(p.View, { className: "name", children: e.passengerName }), (0, L.tZ)(p.View, { className: "tag-grey", children: e.passengerType }), e.seatTag && (0, L.tZ)(p.View, { className: "tag-window", children: e.seatTag }), (0, L.BX)(p.View, { className: "seat", children: [e.seatType, " ￥", e.ticketPrice, " ", e.seatNo] })] }, t);
                              }),
                            }),
                          ],
                        }),
                        (0, L.tZ)(p.Button, {
                          className: "btn-primary btn-pay",
                          id: "AFAb",
                          onClick: f,
                          children: "确认出票",
                        }),
                      ],
                    }),
                  }),
                }),
              });
            }),
            M = i(23263),
            O = h.default.memo(function (e) {
              var t = e.show,
                i = void 0 === t || t,
                n = e.isTieyou,
                a = void 0 !== n && n,
                o = e.fromType,
                c = void 0 === o ? "" : o,
                s = e.bubbleTips,
                r = void 0 === s ? "" : s,
                l = e.ticketInfo,
                m = void 0 === l ? null : l,
                d = e.interceptAgainToast,
                h = void 0 === d ? {} : d,
                u = e.orderTimeout,
                f = void 0 === u ? null : u,
                w = e.goTT,
                N = void 0 === w ? function () {} : w,
                T = e.handleClose,
                Z = void 0 === T ? function () {} : T,
                v = e.confirm,
                V = void 0 === v ? function () {} : v,
                b = e.cancel,
                k = void 0 === b ? function () {} : b;
              return h && f
                ? (0, L.BX)(p.View, {
                    className: "train-smart-cs-ticket-cancel-stay-layer",
                    children: [
                      (0, L.tZ)(p.View, {
                        className: "action-sheet-bg",
                        id: "AFAX",
                        onClick: Z,
                        style: {
                          display: "".concat(i ? "Block" : "none"),
                          opacity: "".concat(i ? 0.7 : 0),
                        },
                      }),
                      (0, L.BX)(p.View, {
                        className: "confirm-second-pop "
                          .concat(a ? "ty" : "zx", " ")
                          .concat(i ? "active" : ""),
                        children: [
                          "smartRS" === c
                            ? (0, L.BX)(p.View, {
                                className: "head " + (a ? "ty" : "zx"),
                                children: [
                                  (0, L.BX)(p.View, {
                                    className: "lbox",
                                    children: [
                                      (0, L.tZ)(p.Image, {
                                        src: "https://pic.c-ctrip.com/train/zt/wechat/smart-tick-avatar.png",
                                        className: "avatar",
                                      }),
                                      (0, L.tZ)(p.View, {
                                        className: "tag color-primary",
                                        children: "人工客服",
                                      }),
                                    ],
                                  }),
                                  (0, L.tZ)(p.View, {
                                    className: "cont",
                                    children: (0, L.tZ)(p.View, {
                                      className: "txt",
                                      children: h.title,
                                    }),
                                  }),
                                ],
                              })
                            : (0, L.tZ)(p.View, {
                                className: "htit",
                                children: h.title,
                              }),
                          (0, L.tZ)(M.Z, {
                            data: { orderTicketList: [m], bubbleTips: r },
                            goTT: N,
                          }),
                          h.suggestInfo &&
                            (0, L.BX)(p.View, {
                              className: "white-box suggest-box",
                              children: [
                                (0, L.BX)(p.View, {
                                  className: "suggest-hd",
                                  children: [
                                    (0, L.tZ)(p.Text, {
                                      className: "tag",
                                      children: h.suggestInfo.tag,
                                    }),
                                    h.suggestInfo.title,
                                  ],
                                }),
                                (0, L.tZ)(p.View, {
                                  className: "suggest-bd-con",
                                  children: h.suggestInfo.descList.map(
                                    function (e) {
                                      return (0, L.tZ)(
                                        p.View,
                                        {
                                          className: "suggest-bd",
                                          children: (0, L.tZ)(p.View, {
                                            className: "txt",
                                            children: e,
                                          }),
                                        },
                                        "index"
                                      );
                                    }
                                  ),
                                }),
                              ],
                            }),
                          (0, L.tZ)(p.View, {
                            className: "white-box tips-box",
                            children: h.tips,
                          }),
                          (0, L.BX)(p.View, {
                            className: "cs-botm-box",
                            children: [
                              (0, L.tZ)(p.Button, {
                                className: "btn-primary",
                                id: "AFAY",
                                onClick: k,
                                children: h.cancelBtnName,
                              }),
                              (0, L.BX)(p.Button, {
                                className: "btn-submit-".concat(
                                  a ? "ty" : "zx",
                                  " btn-2line"
                                ),
                                id: "AFAZ",
                                onClick: V,
                                children: [
                                  (0, L.tZ)(p.View, {
                                    children: h.confirmBtnName,
                                  }),
                                  f &&
                                    (0, L.BX)(p.View, {
                                      className: "flex time-text",
                                      children: [
                                        (0, L.tZ)(g.ZtCountdown, {
                                          endTime: f,
                                          format: {
                                            minute: "分",
                                            second: "秒",
                                          },
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
                  })
                : (0, L.tZ)(p.View, {});
            }),
            H = i(93510),
            U = i(49656),
            j = h.default.memo(function (e) {
              var t,
                i,
                n,
                a,
                o = e.isPollingQuery,
                c = e.ticketInfoList,
                s = e.segmentedSecondTicketInfo,
                r = e.originGrabInfo,
                l = e.isTieyou,
                m = c[0] || {},
                d = (null == m ? void 0 : m.ticketInfoList) || [],
                h = 1 === m.tripIndex ? m.fromStation : s.departStation,
                u = 1 === m.tripIndex ? s.departStation : s.arriveStation,
                f = 1 === m.tripIndex ? s.arriveStation : m.toStation,
                g =
                  1 === m.tripIndex
                    ? null === (t = d[0]) || void 0 === t
                      ? void 0
                      : t.seatType
                    : s.seatName,
                w =
                  2 === m.tripIndex
                    ? null === (i = d[0]) || void 0 === i
                      ? void 0
                      : i.seatType
                    : s.seatName,
                N =
                  1 === m.tripIndex
                    ? "¥".concat(
                        null === (n = d[0]) || void 0 === n
                          ? void 0
                          : n.ticketPrice,
                        "/张"
                      )
                    : "¥".concat(s.ticketPrice, "/张"),
                Z =
                  2 === m.tripIndex
                    ? "¥".concat(
                        null === (a = d[0]) || void 0 === a
                          ? void 0
                          : a.ticketPrice,
                        "/张"
                      )
                    : "¥".concat(s.ticketPrice, "/张"),
                V = function (e) {
                  var t;
                  return e.length <= 1
                    ? (0, L.tZ)(p.View, {
                        children:
                          null === (t = e[0]) || void 0 === t
                            ? void 0
                            : t.passengerName,
                      })
                    : 2 === e.length
                    ? (0, L.tZ)(p.View, {
                        children: ""
                          .concat(e[0].passengerName, "、")
                          .concat(e[1].passengerName),
                      })
                    : (0, L.tZ)(p.View, {
                        children: ""
                          .concat(e[0].passengerName, "、")
                          .concat(e[1].passengerName, "等")
                          .concat(e.length, "人"),
                      });
                };
              return (0, L.BX)(p.View, {
                className: "combination-ticket-info ".concat(l ? "ty" : "zx"),
                children: [
                  (0, L.BX)(p.View, {
                    className: "time-info",
                    children: [
                      (0, L.BX)(p.View, {
                        className: "hd",
                        children: [
                          (0, L.tZ)(p.View, {
                            className: "tag",
                            children: "新方案",
                          }),
                          (0, L.BX)(p.View, {
                            className: "date",
                            children: [
                              v.Z.formatDate(r.fromDate, "M月D日"),
                              " ",
                              v.Z.getWeekDayDesc(r.fromDate),
                              " ",
                              r.trainNo,
                            ],
                          }),
                          (0, L.tZ)(p.View, {
                            className: "".concat(
                              o ? "doing" : "todo",
                              " status"
                            ),
                            children: o ? "出票中..." : "已占座, 待出票",
                          }),
                        ],
                      }),
                      (0, L.BX)(p.View, {
                        className: "bd",
                        children: [
                          (0, L.tZ)(p.View, {
                            className: "schedule",
                            id: "AFAD",
                            onClick: function () {
                              T.ZP.goTimeTable(
                                r.fromStation,
                                r.toStation,
                                r.trainNo,
                                r.fromDate
                              );
                            },
                            children: "时刻表",
                          }),
                          (0, L.BX)(p.View, {
                            className: "time",
                            children: [
                              (0, L.tZ)(p.View, {
                                className: "depart",
                                children: r.departTime,
                              }),
                              (0, L.tZ)(p.View, {
                                className: "arrive",
                                children: r.arriveTime,
                              }),
                            ],
                          }),
                          (0, L.BX)(p.View, {
                            className: "station",
                            children: [
                              (0, L.tZ)(p.View, {
                                className: "depart",
                                children: r.fromStation,
                              }),
                              (0, L.tZ)(p.View, {
                                className: "arrive",
                                children: r.toStation,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, L.BX)(p.View, {
                    className: "seat-change-info",
                    children: [
                      (0, L.BX)(p.View, {
                        className: "action-line",
                        children: [
                          (0, L.tZ)(p.View, { className: "line" }),
                          (0, L.tZ)(p.View, {
                            className: "action",
                            children: "上车",
                          }),
                          (0, L.BX)(p.View, {
                            className: "seat",
                            children: ["第1程 ", g],
                          }),
                          (0, L.tZ)(p.View, {
                            className: "action",
                            children: "换座",
                          }),
                          (0, L.BX)(p.View, {
                            className: "seat",
                            children: ["第2程 ", w],
                          }),
                          (0, L.tZ)(p.View, {
                            className: "action",
                            children: "下车",
                          }),
                        ],
                      }),
                      (0, L.BX)(p.View, {
                        className: "station-line",
                        children: [
                          (0, L.tZ)(p.View, { className: "name", children: h }),
                          (0, L.tZ)(p.View, { className: "name", children: u }),
                          (0, L.tZ)(p.View, { className: "name", children: f }),
                        ],
                      }),
                    ],
                  }),
                  (0, L.BX)(p.View, {
                    className: "passenger-info",
                    children: [
                      (0, L.BX)(p.View, {
                        className: "passenger",
                        children: [
                          (0, L.tZ)(p.View, {
                            className: "tit",
                            children: "第1程",
                          }),
                          (0, L.tZ)(p.View, { className: "line" }),
                          (0, L.tZ)(p.View, {
                            className: "name",
                            children: V(d),
                          }),
                          (0, L.BX)(p.View, {
                            className: "seat",
                            children: [g, " ", N],
                          }),
                        ],
                      }),
                      (0, L.tZ)(p.View, { className: "horizontal-line" }),
                      (0, L.BX)(p.View, {
                        className: "passenger",
                        children: [
                          (0, L.tZ)(p.View, {
                            className: "tit",
                            children: "第2程",
                          }),
                          (0, L.tZ)(p.View, { className: "line" }),
                          (0, L.tZ)(p.View, {
                            className: "name",
                            children: V(d),
                          }),
                          (0, L.BX)(p.View, {
                            className: "seat",
                            children: [w, " ", Z],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            G = i(38434),
            q = h.default.memo(function (e) {
              var t = e.show,
                i = void 0 !== t && t,
                n = e.isTieyou,
                a = void 0 !== n && n,
                o = e.title,
                c = void 0 === o ? "" : o,
                s = e.subTitle,
                r = void 0 === s ? "" : s,
                l = e.leftBtnName,
                m = e.rightBtnName,
                d = e.peaceRefundTips,
                h = void 0 === d ? "" : d,
                u = e.refuseToast,
                w = void 0 === u ? [] : u,
                N = e.onLeftClick,
                T = void 0 === N ? function () {} : N,
                Z = e.onRightClick,
                v = void 0 === Z ? function () {} : Z,
                V = e.onClose,
                b = void 0 === V ? function () {} : V;
              return (0, L.BX)(g.ZtDrawer, {
                show: i,
                isDefineHead: !0,
                isShowClose: !1,
                onWrapClose: b,
                className: "combination-refuse-drawer",
                children: [
                  (0, L.tZ)(p.Image, {
                    className: "bg",
                    src: a
                      ? "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNCP_alert_bg_ty.png"
                      : "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNCP_alert_bg_zx.png",
                  }),
                  (0, L.BX)(p.View, {
                    className: "header",
                    children: [
                      (0, L.tZ)(p.Image, {
                        className: "img-head",
                        src: a
                          ? "https://images3.c-ctrip.com/ztrip/train_xie/2021-12/img_ip_jj_ty.png"
                          : "https://images3.c-ctrip.com/ztrip/train_xie/2021-12/img_ip_jj_zx.png",
                      }),
                      (0, L.tZ)(p.View, { className: "tit", children: c }),
                      (0, L.tZ)(p.Icon, {
                        type: "cancel",
                        size: "24",
                        color: "#ffffff",
                        className: "icon-closed",
                        id: "AFAQ",
                        onClick: b,
                      }),
                    ],
                  }),
                  (0, L.BX)(p.View, {
                    className: "content",
                    children: [
                      (0, L.tZ)(p.View, { className: "tit", children: r }),
                      (0, L.tZ)(p.View, {
                        className: "info",
                        children:
                          null == w
                            ? void 0
                            : w.map(function (e, t) {
                                return (0,
                                L.BX)(p.View, { className: "item", children: [(0, L.tZ)(p.Image, { className: "icon", src: e.icon }), (0, L.tZ)(g.ZtRichText, { className: "txt", nodes: e.title })] }, t);
                              }),
                      }),
                      h &&
                        (0, L.tZ)(G.Z, {
                          bannerInfo: {
                            img: "https://images3.c-ctrip.com/ztrip/train_zhu/Tag_text_Anxintui.png",
                            content: h,
                          },
                          customizeStyle: "margin-right: "
                            .concat(f().pxTransform(32), ";margin-top: ")
                            .concat(f().pxTransform(24), ";"),
                        }),
                    ],
                  }),
                  (0, L.BX)(p.View, {
                    className: "button-box",
                    children: [
                      (0, L.tZ)(p.Button, {
                        className: "btn-cancel",
                        id: "AFAR",
                        onClick: T,
                        children: l || "我再想想",
                      }),
                      (0, L.tZ)(p.Button, {
                        className: "btn-confirm",
                        id: "AFAS",
                        onClick: v,
                        children: m || "确认放弃",
                      }),
                    ],
                  }),
                ],
              });
            }),
            W = h.default.memo(function (e) {
              var t,
                i,
                n = e.show,
                a = e.segmentedSecondTicketInfo,
                o = e.ticketInfoList,
                c = e.onClose,
                s = void 0 === c ? function () {} : c,
                r = e.onConfirm,
                l = void 0 === r ? function () {} : r,
                m = o[0] || {},
                d = (null == m ? void 0 : m.ticketInfoList) || [],
                h = 1 === m.tripIndex ? m.fromStation : a.departStation,
                u = 1 === m.tripIndex ? a.departStation : a.arriveStation,
                f = 1 === m.tripIndex ? a.arriveStation : m.toStation,
                w =
                  1 === m.tripIndex
                    ? null === (t = d[0]) || void 0 === t
                      ? void 0
                      : t.seatType
                    : a.seatName,
                N =
                  2 === m.tripIndex
                    ? null === (i = d[0]) || void 0 === i
                      ? void 0
                      : i.seatType
                    : a.seatName,
                T = 0;
              d.forEach(function (e) {
                var t = (null == e ? void 0 : e.ticketPrice) || 0;
                T += t;
              });
              var Z = (a.ticketPrice || 0) * d.length,
                v = 1 === m.tripIndex ? T : Z,
                V = 2 === m.tripIndex ? T : Z,
                b = (null == a ? void 0 : a.ticketTotalPrice) || 0,
                k = (null == a ? void 0 : a.originTicketTotalPrice) || 0,
                x = (null == a ? void 0 : a.payOrRefundAmount) || 0,
                y = Math.abs(x),
                B = 1005 == (null == a ? void 0 : a.grabPayType),
                I = B ? "原车票" : "原车票已付";
              return (0,
              L.BX)(g.ZtDrawer, { show: n, title: "价格确认", onWrapClose: s, onClose: s, className: "combination-confirm-drawer", closeIconParams: { type: "cancel", size: "24", color: "#333333" }, children: [(0, L.BX)(p.View, { className: "content", children: [(0, L.BX)(p.View, { className: "old-ticket flex-align-items-center", children: [(0, L.tZ)(p.Text, { className: "tit", children: I }), (0, L.BX)(p.Text, { className: "price", children: ["¥", k] })] }), (0, L.BX)(p.View, { className: "new-ticket flex-align-items-center", children: [(0, L.tZ)(p.Text, { className: "tit", children: "新方案" }), (0, L.BX)(p.Text, { className: "price", children: ["¥", b] })] }), (0, L.BX)(p.View, { className: "route-box", children: [(0, L.BX)(p.View, { className: "item first flex-align-items-center", children: [(0, L.BX)(p.View, { className: "txt flex-1", children: [h, " - ", u, " （", w, "x", d.length, "）"] }), (0, L.BX)(p.View, { className: "txt", children: ["¥", v] })] }), (0, L.BX)(p.View, { className: "item flex-align-items-center", children: [(0, L.BX)(p.View, { className: "txt flex-1", children: [u, " - ", f, " （", N, "x", d.length, "）"] }), (0, L.BX)(p.View, { className: "txt", children: ["¥", V] })] })] }), (0, L.BX)(p.View, { className: "diff-price flex-align-items-center", children: [B && (0, L.tZ)(p.Text, { className: "tit", children: "预计扣款" }), !B && x < 0 && (0, L.tZ)(p.Text, { className: "tit", children: "预计退款" }), !B && x >= 0 && (0, L.tZ)(p.Text, { className: "tit", children: "还需支付" }), (0, L.tZ)(p.Text, { className: "high-mark unit", children: "¥" }), (0, L.tZ)(p.Text, { className: "high-mark", children: y })] }), (null == a ? void 0 : a.payRemindInfo) && (0, L.tZ)(g.ZtRichText, { className: "refund-fee-tips", nodes: a.payRemindInfo, space: "nbsp" })] }), (0, L.tZ)(p.View, { className: "tips", children: "当前余票紧张，建议尽快完成支付" }), (0, L.tZ)(p.View, { className: "footer", children: (0, L.tZ)(p.Button, { className: "btn-confirm", id: "AFAP", onClick: l, children: "确认出票" }) })] });
            }),
            K = h.default.memo(function (e) {
              var t,
                i,
                n,
                a,
                o,
                c = e.visible,
                s = void 0 !== c && c,
                r = e.drawerInfo,
                l = void 0 === r ? null : r,
                m = e.onClose,
                d = void 0 === m ? function () {} : m;
              if (!l) return (0, L.tZ)(p.View, {});
              var h =
                  (null === (t = l.trainNo) ||
                  void 0 === t ||
                  null === (i = t.split(",")) ||
                  void 0 === i
                    ? void 0
                    : i[0]) || "",
                u =
                  (null === (n = l.fromDate) ||
                  void 0 === n ||
                  null === (a = n.split(",")) ||
                  void 0 === a
                    ? void 0
                    : a[0]) || "",
                f = v.Z.getDiffDays(u, l.arriveDate),
                w =
                  (null === (o = l.trainNo) || void 0 === o
                    ? void 0
                    : o.replace(/,/g, "、")) || "";
              return (0,
              L.tZ)(g.ZtDrawer, { show: s, isShowClose: !1, onWrapClose: d, className: "tsmart-cs-ori-drawer", children: (0, L.BX)(p.View, { className: "content", children: [(0, L.tZ)(p.View, { className: "tit", children: "原抢票方案" }), (0, L.tZ)(p.Image, { className: "close-icon", src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_close_circle_black.png", id: "AFAA", onClick: d }), (0, L.BX)(p.View, { className: "detail-box", children: [(0, L.BX)(p.View, { className: "head-line flex-align-items-center", children: [(0, L.tZ)(p.View, { className: "tag", children: "原方案" }), (0, L.tZ)(p.View, { className: "train-no flex-1", children: h }), (0, L.tZ)(p.View, { className: "status", children: l.statusDesc || "抢票中" })] }), (0, L.BX)(p.View, { className: "station-info flex-align-items-center", children: [(0, L.BX)(p.View, { className: "f-box", children: [(0, L.tZ)(p.View, { className: "time", children: l.departTime }), (0, L.tZ)(p.View, { className: "station", children: l.fromStation })] }), (0, L.BX)(p.View, { className: "m-box", children: [(0, L.tZ)(p.View, { className: "duration", children: l.spendTime }), (0, L.tZ)(p.View, { className: "split-line" })] }), (0, L.BX)(p.View, { className: "t-box", children: [f > 0 && (0, L.BX)(p.View, { className: "days", children: ["+", f, "天"] }), (0, L.tZ)(p.View, { className: "time", children: l.arriveTime }), (0, L.tZ)(p.View, { className: "station", children: l.toStation })] })] }), (0, L.tZ)(p.View, { className: "h-line" }), (0, L.BX)(p.View, { className: "other-box", children: [(0, L.BX)(p.View, { className: "item flex-align-items-center", children: [(0, L.tZ)(p.Text, { className: "i-name", children: "日期" }), (0, L.tZ)(p.Text, { className: "i-desc", children: l.fromDateDesc })] }), (0, L.BX)(p.View, { className: "item flex-align-items-center", children: [(0, L.tZ)(p.Text, { className: "i-name", children: "车次" }), (0, L.tZ)(p.Text, { className: "i-desc", children: w })] }), (0, L.BX)(p.View, { className: "item flex-align-items-center", children: [(0, L.tZ)(p.Text, { className: "i-name", children: "坐席" }), (0, L.tZ)(p.Text, { className: "i-desc", children: l.seats })] })] })] })] }) });
            }),
            E = i(80904),
            Q = h.default.memo(function (e) {
              var t = e.isPollingQuery,
                i = e.headInfo,
                n = e.onBack,
                a = void 0 === n ? function () {} : n;
              if (!i) return (0, L.tZ)(L.HY, {});
              var o =
                "https://images3.c-ctrip.com/ztrip/train_xie/2021-12/img_ip_".concat(
                  w.default.isTieyou ? "ty" : "zx",
                  ".png"
                );
              return (0,
              L.BX)(p.View, { className: "smart-cs-head", children: [(0, L.tZ)(p.View, { className: "top-bar-v2", style: "padding-top: ".concat(null === D.ZP || void 0 === D.ZP ? void 0 : D.ZP.statusBarHeight, "px"), children: (0, L.tZ)(p.View, { className: "ifont-back iconfont", id: "AFAT", onClick: a }) }), (0, L.BX)(p.View, { className: "top-box-v2", style: "margin-top: ".concat(null === D.ZP || void 0 === D.ZP ? void 0 : D.ZP.statusBarHeight, "px"), children: [(0, L.tZ)(p.Image, { className: "img-top-hd", src: o }), (0, L.tZ)(p.View, { className: "tit-bd", children: (0, L.tZ)(g.ZtRichText, { className: "tit", nodes: t ? '正在全力为您<font color="#FFB657">出票中…</font>' : i.title }) }), (0, L.BX)(p.View, { className: "txt-bd", children: [(0, L.tZ)(p.Image, { className: "icon", src: t ? "https://images3.c-ctrip.com/ztrip/train_xie/2021-12/icon_time.png" : i.icon }), (0, L.tZ)(g.ZtRichText, { nodes: t ? '预计<font color="#FFB657">1分钟内</font>出结果' : i.subTitle, className: "txt" })] })] })] });
            }),
            Y = i(90129),
            J = i(75940),
            $ = i(32e3),
            ee = h.default.memo(function (e) {
              var t,
                i,
                n,
                a,
                o,
                c,
                s,
                r,
                l,
                m,
                d = e.tripInfo,
                u = e.anotherTripInfo,
                g = (0, h.useState)(!1),
                w = (0, Y.Z)(g, 2),
                N = w[0],
                Z = w[1],
                V = (0, h.useState)(!1),
                b = (0, Y.Z)(V, 2),
                k = b[0],
                x = b[1];
              if (
                ((0, h.useEffect)(
                  function () {
                    var e;
                    (null == d ||
                    null === (e = d.ticketInfoList) ||
                    void 0 === e
                      ? void 0
                      : e.length) > 0 &&
                      f()
                        .createSelectorQuery()
                        .select("#pas-name")
                        .boundingClientRect(function (e) {
                          (null == e ? void 0 : e.width) > 226 && x(!0);
                        })
                        .exec();
                  },
                  [d]
                ),
                !d || !u)
              )
                return (0, L.tZ)(L.HY, {});
              var y = [
                  {
                    tripIndex: d.tripIndex,
                    trainNo: d.trainNo,
                    fromDate: d.fromDate,
                    fromTime: d.fromTime,
                    fromStation: d.fromStation,
                    toDate: d.toDate,
                    toTime: d.toTime,
                    toStation: d.toStation,
                    seatName: d.seatName,
                    ticketPrice:
                      null === (t = d.ticketInfoList) ||
                      void 0 === t ||
                      null === (i = t[0]) ||
                      void 0 === i
                        ? void 0
                        : i.ticketPrice,
                  },
                  {
                    tripIndex: 1 === d.tripIndex ? 2 : 1,
                    trainNo: u.trainNo,
                    fromDate: u.ticketDate,
                    fromTime: u.departTime,
                    fromStation: u.departStation,
                    toTime: u.arriveTime,
                    toStation: u.arriveStation,
                    seatName: u.seatName,
                    ticketPrice: u.ticketPrice,
                    arriveDateTime: u.ticketArriveDateTime,
                  },
                ].sort(function (e, t) {
                  return e.tripIndex - t.tripIndex;
                }),
                B =
                  null == y
                    ? void 0
                    : y.map(function (e) {
                        return "第"
                          .concat(e.tripIndex, "程 ")
                          .concat(e.seatName, " ¥")
                          .concat(e.ticketPrice, "/人");
                      }),
                I = (
                  (null === (n = d.ticketInfoList) || void 0 === n
                    ? void 0
                    : n.map(function (e) {
                        return e.passengerName;
                      })) || []
                ).join("、"),
                S = ""
                  .concat(
                    null == y || null === (a = y[0]) || void 0 === a
                      ? void 0
                      : a.fromDate,
                    " "
                  )
                  .concat(
                    null == y || null === (o = y[0]) || void 0 === o
                      ? void 0
                      : o.fromTime
                  ),
                P =
                  null != y &&
                  null !== (c = y[1]) &&
                  void 0 !== c &&
                  c.arriveDateTime
                    ? y[1].arriveDateTime
                    : ""
                        .concat(
                          null == y || null === (s = y[1]) || void 0 === s
                            ? void 0
                            : s.toDate,
                          " "
                        )
                        .concat(
                          null == y || null === (r = y[1]) || void 0 === r
                            ? void 0
                            : r.toTime
                        ),
                C = v.Z.getDiff(S, P, "minutes"),
                D = v.Z.formatDate(
                  null == y ? void 0 : y[0].fromDate,
                  "M月D日"
                ),
                X = "".concat(D, " 共").concat(v.Z.getHourMinuteByMinute(C)),
                _ =
                  null == y || null === (l = y[0]) || void 0 === l
                    ? void 0
                    : l.ticketPrice,
                R =
                  null == y || null === (m = y[1]) || void 0 === m
                    ? void 0
                    : m.ticketPrice;
              return (0, L.BX)(p.View, {
                className: "tsmart-cs-trti",
                children: [
                  (0, L.tZ)($.Z, {
                    tag: "新车票",
                    trainDesc: X,
                    statusDesc: "当前有票",
                  }),
                  (0, L.tZ)(J.Z, {
                    tripList: y,
                    isReschedule: !0,
                    isFromCS: !0,
                    onTripClick: function (e) {
                      e &&
                        T.ZP.goTimeTable(
                          e.fromStation,
                          e.toStation,
                          e.trainNo,
                          e.fromDate
                        );
                    },
                  }),
                  (0, L.BX)(p.View, {
                    className: "pas-box",
                    children: [
                      (0, L.BX)(p.View, {
                        className: "head flex-align-items-center",
                        children: [
                          (0, L.tZ)(p.ScrollView, {
                            className: "scroll-pas-name",
                            scrollX: !0,
                            enableFlex: !0,
                            children: (0, L.tZ)(p.View, {
                              id: "pas-name",
                              className: "pas-name",
                              children: I,
                            }),
                          }),
                          (0, L.BX)(p.View, {
                            className: "flex-align-items-center price-desc",
                            id: "AFBS",
                            onClick: function () {
                              Z(!N);
                            },
                            children: [
                              (0, L.BX)(p.View, {
                                className: "pas-price",
                                children: ["¥", _ + R, "/人"],
                              }),
                              (0, L.tZ)(p.Image, {
                                className: "open-tag ".concat(
                                  N ? "opened" : ""
                                ),
                                src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ZNCP_zhankai.png",
                              }),
                            ],
                          }),
                          k &&
                            (0, L.tZ)(p.Image, {
                              className: "scroll-split-img",
                              src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNCP_ck_YY.png",
                            }),
                        ],
                      }),
                      N &&
                        (0, L.BX)(p.View, {
                          className: "detail flex-align-items-center",
                          children: [
                            (0, L.tZ)(p.Image, {
                              className: "l-line",
                              src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNCP_ckmk_jdt.png",
                            }),
                            (0, L.tZ)(p.View, {
                              className: "trip-info",
                              children:
                                null == B
                                  ? void 0
                                  : B.map(function (e, t) {
                                      return (0,
                                      L.tZ)(p.View, { className: "item", children: e }, t);
                                    }),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            }),
            te = h.default.memo(function (e) {
              var t,
                i,
                n,
                a,
                o = e.solutionInfo,
                c = e.smartType,
                s = (0, h.useState)(!1),
                r = (0, Y.Z)(s, 2),
                l = r[0],
                m = r[1];
              if (!o) return (0, L.tZ)(p.View, {});
              var d =
                  (null === (t = o.fromDate) ||
                  void 0 === t ||
                  null === (i = t.split(",")) ||
                  void 0 === i
                    ? void 0
                    : i[0]) || "",
                u = v.Z.getDiffDays(d, o.arriveDate),
                f =
                  (null === (n = o.trainNo) || void 0 === n
                    ? void 0
                    : n.replace(/,/g, "、")) || "",
                g =
                  null === (a = o.fromDate) || void 0 === a
                    ? void 0
                    : a
                        .split(",")
                        .map(function (e) {
                          return b()(e).format("M月D日");
                        })
                        .join("、"),
                w = "".concat(o.fromStation, "-").concat(o.toStation),
                N = "",
                T = -1 !== [2, 3].indexOf(c);
              if (T) {
                var Z,
                  V,
                  k =
                    null === (Z = o.trainNo) ||
                    void 0 === Z ||
                    null === (V = Z.split(",")) ||
                    void 0 === V
                      ? void 0
                      : V[0];
                N = ""
                  .concat(k, " ")
                  .concat(o.fromStation, "-")
                  .concat(o.toStation);
              }
              return (0, L.BX)(p.View, {
                className: "tsmart-osi",
                children: [
                  (0, L.BX)(p.View, {
                    className: "head-line flex-align-items-center ".concat(
                      l ? "mb20" : ""
                    ),
                    children: [
                      (0, L.tZ)(p.View, {
                        className: "tag ".concat(T ? "mr12" : ""),
                        children: "原方案",
                      }),
                      !T &&
                        (0, L.tZ)(p.View, {
                          className: "status",
                          children: "抢票中",
                        }),
                      !T &&
                        (0, L.tZ)(p.View, {
                          className: "desc-txt flex-1",
                          children: l ? "" : w,
                        }),
                      T &&
                        (0, L.tZ)(p.View, {
                          className: "desc-txt flex-1",
                          children: N,
                        }),
                      (0, L.BX)(p.View, {
                        className: "flex-align-items-center",
                        id: "AFAH",
                        onClick: function () {
                          m(!l);
                        },
                        children: [
                          !T &&
                            (0, L.tZ)(p.View, {
                              className: "desc-txt",
                              children: "¥".concat(o.ticketPrice, "/人"),
                            }),
                          T &&
                            (0, L.tZ)(p.View, {
                              className: "direct-status",
                              children: o.statusDesc,
                            }),
                          (0, L.tZ)(p.Image, {
                            className: "open-tag ".concat(l ? "opened" : ""),
                            src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ZNCP_zhankai.png",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l &&
                    (0, L.BX)(L.HY, {
                      children: [
                        (0, L.BX)(p.View, {
                          className: "station-info flex-align-items-center",
                          children: [
                            (0, L.BX)(p.View, {
                              className: "f-box",
                              children: [
                                (0, L.tZ)(p.View, {
                                  className: "time",
                                  children: o.departTime,
                                }),
                                (0, L.tZ)(p.View, {
                                  className: "station",
                                  children: o.fromStation,
                                }),
                              ],
                            }),
                            (0, L.BX)(p.View, {
                              className: "m-box",
                              children: [
                                (0, L.tZ)(p.View, {
                                  className: "duration",
                                  children: o.spendTime,
                                }),
                                (0, L.tZ)(p.View, { className: "split-line" }),
                              ],
                            }),
                            (0, L.BX)(p.View, {
                              className: "t-box",
                              children: [
                                u > 0 &&
                                  (0, L.BX)(p.View, {
                                    className: "days",
                                    children: ["+", u, "天"],
                                  }),
                                (0, L.tZ)(p.View, {
                                  className: "time",
                                  children: o.arriveTime,
                                }),
                                (0, L.tZ)(p.View, {
                                  className: "station",
                                  children: o.toStation,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, L.tZ)(p.View, { className: "h-line" }),
                        (0, L.BX)(p.View, {
                          className: "other-box",
                          children: [
                            (0, L.BX)(p.View, {
                              className: "item flex-align-items-center",
                              children: [
                                (0, L.tZ)(p.Text, {
                                  className: "i-name",
                                  children: "日期",
                                }),
                                (0, L.tZ)(p.Text, {
                                  className: "i-desc",
                                  children: g,
                                }),
                              ],
                            }),
                            (0, L.BX)(p.View, {
                              className: "item flex-align-items-center",
                              children: [
                                (0, L.tZ)(p.Text, {
                                  className: "i-name",
                                  children: "车次",
                                }),
                                (0, L.tZ)(p.Text, {
                                  className: "i-desc",
                                  children: f,
                                }),
                              ],
                            }),
                            (0, L.BX)(p.View, {
                              className: "item flex-align-items-center",
                              children: [
                                (0, L.tZ)(p.Text, {
                                  className: "i-name",
                                  children: "坐席",
                                }),
                                (0, L.tZ)(p.Text, {
                                  className: "i-desc",
                                  children: o.seats,
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
            ie = i(88637),
            ne = i(16274),
            ae = i(61737),
            oe = i(54681),
            ce = h.default.memo(function (e) {
              var t = e.ticketInfo;
              if (!t) return (0, L.tZ)(L.HY, {});
              var i = t.fromDate,
                n = t.toDate,
                a = t.trainNo,
                o = t.ticketInfoList,
                c = t.fromTime,
                s = t.toTime,
                r = t.fromStation,
                l = t.toStation,
                m = t.ticketTotalUseTime,
                d = i && n && b()(n).diff(b()(i), "day");
              return (0, L.BX)(p.View, {
                className: "tsmart-cs-ticketinfo",
                children: [
                  (0, L.tZ)($.Z, {
                    tag: "新车票",
                    trainDesc: ""
                      .concat(v.Z.formatDate(i, "M月D日"), " ")
                      .concat(a),
                    statusDesc: "当前有票",
                  }),
                  (0, L.tZ)(ae.Z, {
                    fromTime: c,
                    toTime: s,
                    fromStation: r,
                    toStation: l,
                    durationDays: d,
                    ticketTotalUseTime: m,
                    isShowTotalTimeDown: !0,
                    goTT: function () {
                      T.ZP.goTimeTable(r, l, a, i);
                    },
                  }),
                  (null == o ? void 0 : o.length) > 0 &&
                    (0, L.tZ)(p.View, {
                      className: "pas-box",
                      children: o.map(function (e, t) {
                        return (0,
                        L.BX)(h.Fragment, { children: [(0, L.tZ)(oe.Z, { pasInfo: e }, t), t != o.length - 1 && (0, L.tZ)(p.View, { className: "split-line h-line" })] }, t);
                      }),
                    }),
                ],
              });
            }),
            se = function (e) {
              var t = e.visible,
                i = e.loadingPopInfo,
                n = e.onClose,
                a = void 0 === n ? function () {} : n;
              return i
                ? (0, L.tZ)(g.ZtActivityPop, {
                    show: t,
                    isShowClose: !1,
                    onClose: a,
                    children: (0, L.BX)(p.View, {
                      className: " _Vb _be _vE _Pi",
                      children: [
                        (0, L.tZ)(p.View, {
                          className: " _vr _fe _Pi _jK _p",
                          children: (0, L.tZ)(p.Image, {
                            src: i.headImg,
                            className: " _Rb _Hg _u _kK _yi _xi",
                          }),
                        }),
                        (0, L.tZ)(p.View, {
                          className: " _o _Vv _Xb _Dv _Te _Qj",
                          children: i.title,
                        }),
                        i.subTitle &&
                          (0, L.tZ)(p.View, {
                            className: " _lK _Ma _YE _U _o",
                            children: i.subTitle,
                          }),
                      ],
                    }),
                  })
                : (0, L.tZ)(p.View, {});
            },
            re = { extension: [{ name: "correctVersion", value: "39" }] },
            le =
              (0, k.h)()(
                (n = (function (e) {
                  (0, m.Z)(i, e);
                  var t = (0, d.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, r.Z)(this, i),
                      ((n = t.call(this, e)).pageId = w.default.isTieyou
                        ? "10650060490"
                        : "10650060484"),
                      (n.state = {
                        loading: !0,
                        isTieyou: w.default.isTieyou,
                        statusBarHeight: D.ZP.statusBarHeight,
                        oid: "",
                        maskType: "",
                        headRemindInfo: {},
                        originTicketInfo: {},
                        needConfirmTicketInfo: {},
                        questionInfo: {},
                        confirmBtnName: "",
                        cancelBtnName: "",
                        interceptAgainToast: {},
                        payRemindInfo: [],
                        isShowVoiceTag: !1,
                        preholdDisplayStep: 0,
                        preHoldPercent: 0,
                        loadingPopVisible: !1,
                        voiceDescriptionInfos: null,
                        grabReschedulePlan: null,
                        candidateLoadingToast: null,
                        loadingPopInfo: null,
                        confirmButtonTag: "",
                      }),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, u.getCurrentInstance)().router.params;
                          console.log("params", e),
                            (this.oid = e.orderNumber),
                            this.setState({ oid: this.oid }),
                            (this.tempTime = 0),
                            this.setPathDevTrace(),
                            (this.isUseNewStyle = (0, X.qj)(
                              "isUseNewStyleForSmartCSPage"
                            )),
                            (0, I.showLoading)("加载中"),
                            this.getSmartOrderConfirmDetail();
                        },
                      },
                      {
                        key: "setPathDevTrace",
                        value: function () {
                          try {
                            var e = f().getCurrentPages();
                            e &&
                              1 === e.length &&
                              this.ubtDevTrace(193127, {
                                cid: y.ZP.cid || "",
                                userName: y.ZP.userName || "",
                                page: "smartCSTicket",
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
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                a,
                                s,
                                r,
                                l,
                                m,
                                d,
                                h,
                                u,
                                p,
                                g,
                                w,
                                T,
                                Z,
                                v,
                                V,
                                k,
                                y,
                                B,
                                S,
                                P,
                                C,
                                D,
                                X,
                                _,
                                L,
                                R,
                                A,
                                z,
                                F,
                                M,
                                O,
                                H,
                                U,
                                j = this;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (t = { orderNumber: this.oid }),
                                          (e.next = 4),
                                          (0, x.Wei)(
                                            t,
                                            (0, c.Z)(
                                              (0, c.Z)({}, re),
                                              {},
                                              {
                                                checkFrameworkLogin: !0,
                                                checkLogin: !0,
                                                loginCB: function () {
                                                  j.getSmartOrderConfirmDetail();
                                                },
                                              }
                                            )
                                          )
                                        );
                                      case 4:
                                        (i = e.sent),
                                          this.setState({ loading: !1 }),
                                          (0, I.hideLoading)(),
                                          1 === i.resultCode
                                            ? -1 !==
                                                [4, 6].indexOf(i.smartType) ||
                                              (-1 !==
                                                [2, 3].indexOf(i.smartType) &&
                                                this.isUseNewStyle)
                                              ? this.handleDataWithNewStyle(i)
                                              : ((n = i.headRemindInfo),
                                                (a = void 0 === n ? {} : n),
                                                (s = i.orderTimeout),
                                                (r = i.originGrabInfo),
                                                (l = i.orderTicketList),
                                                (m = i.questionInfo),
                                                (d = i.confirmBtnName),
                                                (h = i.cancelBtnName),
                                                (u = i.interceptAgainToast),
                                                (p = i.payRemindInfo),
                                                (g = i.voiceDescriptionInfos),
                                                (w = i.grabReschedulePlan),
                                                (T =
                                                  i.segmentedSecondTicketInfo),
                                                (Z = i.smartType),
                                                (v = i.candidateLoadingToast),
                                                (V = i.confirmButtonTag),
                                                (k = void 0 === V ? "" : V),
                                                (y = g),
                                                r &&
                                                  ((B = b()(r.fromDate).day()),
                                                  (S = N.Z.dayOfWeekZh(B)),
                                                  (P =
                                                    r.fromDate &&
                                                    r.fromDate
                                                      .split(",")
                                                      .map(function (e) {
                                                        return b()(e).format(
                                                          "M月D日"
                                                        );
                                                      })
                                                      .join("、")),
                                                  Object.assign(r, {
                                                    fromDateDesc: P,
                                                    dayOfWeek_zh: S,
                                                  })),
                                                console.log(
                                                  "originGrabInfooriginGrabInfooriginGrabInfo",
                                                  r
                                                ),
                                                (C = l ? l[0] : null),
                                                (D = { ticketInfo: C }),
                                                C &&
                                                  D &&
                                                  ((X = b()(
                                                    D.ticketInfo.fromDate
                                                  ).day()),
                                                  (_ = N.Z.dayOfWeekZh(X)),
                                                  (L = b()(
                                                    D.ticketInfo.fromDate
                                                  ).format("M月D日")),
                                                  (R = b()(
                                                    D.ticketInfo.toDate
                                                  ).day()),
                                                  (A = N.Z.dayOfWeekZh(R)),
                                                  (z = b()(
                                                    D.ticketInfo.toDate
                                                  ).format("M月D日")),
                                                  (F =
                                                    D.ticketInfo.ticketInfoList.reduce(
                                                      function (e, t) {
                                                        return (
                                                          t.ticketPrice + e
                                                        );
                                                      },
                                                      0
                                                    )),
                                                  (M =
                                                    D.ticketInfo.ticketInfoList
                                                      .map(function (e) {
                                                        return e.passengerName;
                                                      })
                                                      .join("、")),
                                                  (O =
                                                    D.ticketInfo.ticketInfoList
                                                      .map(function (e) {
                                                        return e.seatNo;
                                                      })
                                                      .join("、")),
                                                  (H =
                                                    D.ticketInfo.ticketInfoList.find(
                                                      function (e) {
                                                        return e.seatTag;
                                                      }
                                                    )),
                                                  (U = H ? H.seatTag : ""),
                                                  Object.assign(D, {
                                                    fromDateDesc: L,
                                                    toDateDesc: z,
                                                    totalPrice: F,
                                                    pasStr: M,
                                                    seatNoStr: O,
                                                    fromRemind: _,
                                                    toRemind: A,
                                                    seatTagStr: U,
                                                  })),
                                                g &&
                                                  (y = g.filter(function (e) {
                                                    return !!e.voiceUrl;
                                                  })),
                                                this.setState({
                                                  confirmButtonTag: k,
                                                  headRemindInfo: a,
                                                  originTicketInfo: r,
                                                  needConfirmTicketInfo: D,
                                                  questionInfo: m,
                                                  confirmBtnName: d,
                                                  cancelBtnName: h,
                                                  interceptAgainToast: u,
                                                  payRemindInfo: p,
                                                  grabReschedulePlan: w,
                                                  voiceDescriptionInfos: y,
                                                  isShowVoiceTag:
                                                    N.Z.notEmptyArray(y),
                                                  orderTimeout: s,
                                                  segmentedSecondTicketInfo: T,
                                                  smartType: Z,
                                                  candidateLoadingToast: v,
                                                }))
                                            : this.handleFailureScene(
                                                i.resultCode,
                                                i.resultMsg
                                              ),
                                          (e.next = 16);
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(0)),
                                          console.warn(e.t0),
                                          (0, I.hideLoading)(),
                                          f().showToast({
                                            title: "加载失败,请重试",
                                            icon: "none",
                                            duration: 2e3,
                                          }),
                                          N.Z.relaunchHome();
                                      case 16:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 10]]
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
                                content:
                                  t ||
                                  "当前车票已过确认时间，已自动取消订单.....",
                                buttonName: "好的",
                                onButtonClick: function () {
                                  f().reLaunch({ url: "/pages/home/index" });
                                },
                              });
                              break;
                            case 303:
                              this.showCommonDialog({
                                title: "温馨提示",
                                content:
                                  t ||
                                  "由于您信用付账户余额不足导致扣款失败，最终出票失败，如需继续抢票请重新下单，并保证余额充足",
                                buttonName: "好的",
                                onButtonClick: function () {
                                  f().reLaunch({ url: "/pages/home/index" });
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
                            case 2:
                              this.showCommonDialog({
                                title: "温馨提示",
                                content: t || "",
                                buttonName: "好的",
                                onButtonClick: function () {
                                  f().reLaunch({
                                    url: "/pages/trnshare/grablist/grablist",
                                  });
                                },
                              });
                              break;
                            default:
                              f().showToast({
                                title: t || "加载失败,请重试",
                                icon: "none",
                                duration: 2e3,
                              }),
                                N.Z.relaunchHome();
                          }
                        },
                      },
                      {
                        key: "handleDataWithNewStyle",
                        value: function (e) {
                          var t = e.headRemindInfo,
                            i = void 0 === t ? {} : t,
                            n = e.orderTimeout,
                            a = e.originGrabInfo,
                            o = e.orderTicketList,
                            s = e.confirmBtnName,
                            r = e.cancelBtnName,
                            l = e.segmentedSecondTicketInfo,
                            m = e.smartType,
                            d = e.interceptAgainToast,
                            h = e.payRemindInfo,
                            u = e.remindInfo,
                            f = e.candidateLoadingToast,
                            p = e.confirmButtonTag,
                            g = void 0 === p ? "" : p,
                            w = i;
                          6 === m &&
                            (w = (0, c.Z)(
                              (0, c.Z)({}, i),
                              {},
                              {
                                descriptions: [null == i ? void 0 : i.subTitle],
                              }
                            ));
                          var N = o;
                          -1 !== [2, 3].indexOf(m) &&
                            ((0, I.setNavigationBarColor)({
                              frontColor: "#000000",
                              backgroundColor: "#000000",
                            }),
                            (w.descriptions = i.descTags),
                            (w.title = i.titleV3),
                            (N = o.map(function (e) {
                              var t = ""
                                  .concat(e.fromDate, " ")
                                  .concat(e.fromTime),
                                i = "".concat(e.toDate, " ").concat(e.toTime),
                                n = v.Z.getDiff(t, i, "minutes"),
                                a = v.Z.getHourMinuteByMinute(n);
                              return (0,
                              c.Z)((0, c.Z)({}, e), {}, { ticketTotalUseTime: a });
                            }))),
                            this.setState({
                              confirmButtonTag: g,
                              headRemindInfo: w,
                              originGrabInfo: a,
                              orderTicketList: N,
                              segmentedSecondTicketInfo: l,
                              confirmBtnName: s,
                              cancelBtnName: r,
                              orderTimeout: n,
                              smartType: m,
                              interceptAgainToast: d,
                              payRemindInfo: h,
                              remindInfo: u,
                              candidateLoadingToast: f,
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
                        key: "closeMask",
                        value: function () {
                          this.setState({ maskType: "" });
                        },
                      },
                      {
                        key: "confirmSecondRob",
                        value: function () {
                          this.newUbtTrace(195727),
                            this.newUbtTrace(195728),
                            this.setState({ maskType: "confirmSecondRob" });
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
                            c = void 0 === o ? "" : o,
                            s = e.trainNo,
                            r = void 0 === s ? "" : s;
                          T.ZP.goTimeTable(i, a, r, c);
                        },
                      },
                      {
                        key: "confirm",
                        value: function (e) {
                          var t = this;
                          "got" === e
                            ? this.newUbtTrace(195729)
                            : this.newUbtTrace(195732),
                            (this.tempTime = 0),
                            this.setState(
                              { loadingPopVisible: !0 },
                              function () {
                                t.confirmGrabOrder(),
                                  t.addpreHoldPercent(1e3, 2, 100);
                              }
                            );
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          try {
                            f().stopBackgroundAudio();
                          } catch (e) {
                            console.log(e);
                          }
                          var e = f().getCurrentPages();
                          1 === (e ? e.length : 1)
                            ? N.Z.relaunchHome()
                            : f().navigateBack();
                        },
                      },
                      {
                        key: "confirmGrabOrder",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                a,
                                c,
                                s,
                                r,
                                l,
                                m,
                                d,
                                h,
                                u = this,
                                p = arguments;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            p.length > 0 && void 0 !== p[0]
                                              ? p[0]
                                              : ""),
                                          (i =
                                            p.length > 1 && void 0 !== p[1]
                                              ? p[1]
                                              : ""),
                                          (e.prev = 2),
                                          !(
                                            this.refundInterval >
                                            this.refundTotalPollingTime
                                          ))
                                        ) {
                                          e.next = 8;
                                          break;
                                        }
                                        return (
                                          (0, I.hideLoading)(),
                                          this.setState({
                                            loadingPopVisible: !1,
                                            preholdDisplayStep: 0,
                                            preHoldPercent: 0,
                                          }),
                                          f().showToast({
                                            title: "超时",
                                            icon: "none",
                                            duration: 2e3,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 8:
                                        return (
                                          (e.next = 10),
                                          (0, x.EEn)({
                                            orderNumber: this.oid,
                                            action: t,
                                            pollingKey: i || "",
                                          })
                                        );
                                      case 10:
                                        if (
                                          ((n = e.sent),
                                          (0, I.hideLoading)(),
                                          (a = n.resultCode),
                                          n.pollingKey &&
                                            (this.pollingKey = n.pollingKey),
                                          !n.isNeedPay)
                                        ) {
                                          e.next = 17;
                                          break;
                                        }
                                        return (
                                          (c = setInterval(function () {
                                            u.state.preHoldPercent < 95
                                              ? u.setState({
                                                  preHoldPercent:
                                                    u.state.preHoldPercent +
                                                    Math.round(
                                                      1 * Math.random()
                                                    ),
                                                })
                                              : (clearInterval(c),
                                                u.setState(
                                                  {
                                                    loadingPopVisible: !1,
                                                    preholdDisplayStep: 0,
                                                    preHoldPercent: 0,
                                                  },
                                                  function () {
                                                    u.pay(n.payOrderNumber);
                                                  }
                                                ));
                                          }, 10)),
                                          e.abrupt("return")
                                        );
                                      case 17:
                                        1 === a
                                          ? (s = setInterval(function () {
                                              u.state.preHoldPercent < 100
                                                ? u.setState({
                                                    preHoldPercent:
                                                      u.state.preHoldPercent +
                                                      Math.round(
                                                        1 * Math.random()
                                                      ),
                                                  })
                                                : (clearInterval(s),
                                                  u.setState(
                                                    {
                                                      loadingPopVisible: !1,
                                                      preholdDisplayStep: 0,
                                                      preHoldPercent: 0,
                                                    },
                                                    function () {
                                                      u.showCandidateLoadingToast(
                                                        function () {
                                                          f().redirectTo({
                                                            url: "".concat(
                                                              T.ZP.getTrainDetailUrl(
                                                                u.oid
                                                              ),
                                                              "&fromPage=smartCSTicket"
                                                            ),
                                                          });
                                                        }
                                                      );
                                                    }
                                                  ));
                                            }, 10))
                                          : 2 === a
                                          ? (this.setState({
                                              loadingPopVisible: !1,
                                              preholdDisplayStep: 0,
                                              preHoldPercent: 0,
                                            }),
                                            (r = n.confirmFailToast || {}),
                                            (l = setInterval(function () {
                                              u.state.preHoldPercent < 90
                                                ? u.setState({
                                                    preHoldPercent:
                                                      u.state.preHoldPercent +
                                                      Math.round(
                                                        1 * Math.random()
                                                      ),
                                                  })
                                                : (clearInterval(l),
                                                  u.setState(
                                                    {
                                                      loadingPopVisible: !1,
                                                      preholdDisplayStep: 0,
                                                      preHoldPercent: 0,
                                                    },
                                                    function () {
                                                      f().showModal({
                                                        title:
                                                          r.title || "提示",
                                                        content:
                                                          r.content &&
                                                          Array.isArray(
                                                            r.content
                                                          )
                                                            ? r.content[0]
                                                            : "出票失败",
                                                        showCancel: !1,
                                                        confirmText: "我知道了",
                                                        confirmColor: w.default
                                                          .isTieyou
                                                          ? "#fc6e51"
                                                          : "#0080FF",
                                                        success: function (e) {
                                                          e.confirm &&
                                                            f().redirectTo({
                                                              url: T.ZP.getTrainGrabOrderDetailUrl(
                                                                u.oid,
                                                                "&fromPage=smartCSTicket"
                                                              ),
                                                            });
                                                        },
                                                      });
                                                    }
                                                  ));
                                            }, 10)))
                                          : 3 === a
                                          ? ((m = n.pollingInterval),
                                            (d = n.totalPollingTime),
                                            (!m || m <= 0) && (m = 1),
                                            (!d || d <= 0) && (d = 20),
                                            (this.tempTotalPollingTime = d),
                                            (this.tempInterval += m),
                                            this.addpreHoldPercent(
                                              this.tempTime + 1e3 * m,
                                              2,
                                              100
                                            ),
                                            (h = setTimeout(function () {
                                              clearTimeout(h),
                                                u.confirmGrabOrder(
                                                  "query",
                                                  u.pollingKey
                                                );
                                            }, 1e3 * m)))
                                          : 8 === a
                                          ? (this.setState({
                                              loadingPopVisible: !1,
                                              preholdDisplayStep: 0,
                                              preHoldPercent: 0,
                                            }),
                                            this.showCommonDialog({
                                              title: "温馨提示",
                                              content:
                                                n.resultMsg || "出票失败",
                                              buttonName: "好的",
                                              onButtonClick: function () {
                                                f().reLaunch({
                                                  url: "/pages/trnshare/grablist/grablist",
                                                });
                                              },
                                            }))
                                          : (this.setState({
                                              loadingPopVisible: !1,
                                              preholdDisplayStep: 0,
                                              preHoldPercent: 0,
                                            }),
                                            f().showModal({
                                              title: "提示",
                                              content:
                                                n.resultMsg || "出票失败",
                                              showCancel: !1,
                                              confirmText: "我知道了",
                                              confirmColor: w.default.isTieyou
                                                ? "#fc6e51"
                                                : "#0080FF",
                                              success: function (e) {
                                                e.confirm &&
                                                  f().redirectTo({
                                                    url: T.ZP.getTrainGrabOrderDetailUrl(
                                                      u.oid,
                                                      "&fromPage=smartCSTicket"
                                                    ),
                                                  });
                                              },
                                            })),
                                          (e.next = 23);
                                        break;
                                      case 20:
                                        (e.prev = 20),
                                          (e.t0 = e.catch(2)),
                                          console.log(e.t0);
                                      case 23:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 20]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "cancelConfirmGrabOrder",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e() {
                              var t, i;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          this.newUbtTrace(195731),
                                          (t = this.state.oid),
                                          (e.prev = 2),
                                          (0, I.showLoading)(),
                                          (e.next = 6),
                                          (0, x.Z9g)({ orderNumber: t })
                                        );
                                      case 6:
                                        (i = e.sent) && 1 === i.resultCode
                                          ? f().redirectTo({
                                              url: this.isCandidateOrder()
                                                ? "/pages/taroCRN/train/pages/CandidateOrderDetail/index?orderNumber=".concat(
                                                    t,
                                                    "&fromPage=smartCSTicket"
                                                  )
                                                : T.ZP.getTrainGrabOrderDetailUrl(
                                                    this.oid,
                                                    "&fromPage=smartTicket&cancelSmartTicket=true"
                                                  ),
                                            })
                                          : f().showToast({
                                              title: "抱歉，取消失败！",
                                              icon: "none",
                                            }),
                                          (e.next = 13);
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(2)),
                                          console.log(e.t0);
                                      case 13:
                                        return (
                                          (e.prev = 13),
                                          (0, I.hideLoading)(),
                                          e.finish(13)
                                        );
                                      case 16:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 10, 13, 16]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "showCandidateLoadingToast",
                        value: function (e) {
                          var t = this.state.candidateLoadingToast;
                          t
                            ? (this.setState({
                                loadingPopInfo: {
                                  headImg:
                                    "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/icon_cpz@3x.png",
                                  title: t.title || "正在为您出票中…",
                                  subTitle: t.desc || "",
                                },
                                maskType: "generateTicketLoadingPop",
                              }),
                              setTimeout(function () {
                                e();
                              }, 2500))
                            : e();
                        },
                      },
                      {
                        key: "isCandidateOrder",
                        value: function () {
                          return !!this.state.candidateLoadingToast;
                        },
                      },
                      {
                        key: "pay",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var i = this;
                              return (0, o.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (0, I.showLoading)("加载中"),
                                        Z.ZP.doPayment({
                                          business: "train",
                                          orderNumber: t,
                                          title: "火车票订单",
                                        })
                                          .then(function () {
                                            setTimeout(function () {
                                              i.showCandidateLoadingToast(
                                                function () {
                                                  f().redirectTo({
                                                    url: "".concat(
                                                      T.ZP.getTrainDetailUrl(
                                                        i.state.oid
                                                      ),
                                                      "&fromPage=smartCSTicket"
                                                    ),
                                                  });
                                                }
                                              );
                                            }, 200);
                                          })
                                          .catch(function (e) {
                                            console.log(e);
                                          })
                                          .finally(function () {
                                            (0, I.hideLoading)();
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
                        key: "payWithCallBack",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var i,
                                n = arguments;
                              return (0, o.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (i =
                                        n.length > 1 && void 0 !== n[1]
                                          ? n[1]
                                          : function () {}),
                                        (0, I.showLoading)("加载中"),
                                        Z.ZP.doPayment({
                                          business: "train",
                                          orderNumber: t,
                                          title: "火车票订单",
                                        })
                                          .then(function () {
                                            setTimeout(function () {
                                              i();
                                            }, 200);
                                          })
                                          .catch(function (e) {
                                            console.log(e);
                                          })
                                          .finally(function () {
                                            (0, I.hideLoading)();
                                          });
                                    case 3:
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
                        value: function () {
                          this.newUbtTrace(195725),
                            this.newUbtTrace(195730),
                            this.setState({ maskType: "cancelStayPop" });
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
                        key: "confirmRefuseCombinationPlan",
                        value: function () {
                          var e = this;
                          (0, I.showLoading)(),
                            (0, x.Z9g)({ orderNumber: this.oid })
                              .then(function (t) {
                                1 === t.resultCode
                                  ? e.redirectTo({
                                      url: T.ZP.getTrainGrabOrderDetailUrl(
                                        e.oid
                                      ),
                                    })
                                  : (0, I.showToast)("抱歉，操作失败!");
                              })
                              .catch(function (e) {
                                console.warn(e),
                                  (0, I.showToast)("抱歉，操作失败!");
                              })
                              .finally(function () {
                                e.closeMask(), (0, I.hideLoading)();
                              });
                        },
                      },
                      {
                        key: "confirmAcceptCombinationPlan",
                        value: function () {
                          (0, I.showLoading)(),
                            this.confirmCombinationPlanOrder(this.oid);
                        },
                      },
                      {
                        key: "confirmCombinationPlanOrder",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var i,
                                n,
                                a,
                                c,
                                s,
                                r,
                                l,
                                m,
                                d,
                                h,
                                u,
                                p,
                                g,
                                N = this,
                                Z = arguments;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((i =
                                            Z.length > 1 && void 0 !== Z[1]
                                              ? Z[1]
                                              : ""),
                                          (n =
                                            Z.length > 2 && void 0 !== Z[2]
                                              ? Z[2]
                                              : {
                                                  totalPollingTime: 20,
                                                  pollingTime: 0,
                                                  pollingKey: "",
                                                }),
                                          (e.prev = 2),
                                          !(
                                            n.pollingTime >= n.totalPollingTime
                                          ))
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          (0, I.hideLoading)(),
                                          this.state.isPollingQuery
                                            ? (this.closeMask(),
                                              this.redirectTo({
                                                url: T.ZP.getTrainDetailUrl(t),
                                              }))
                                            : f().showToast({
                                                title: "超时",
                                                icon: "none",
                                                duration: 2e3,
                                              }),
                                          e.abrupt("return")
                                        );
                                      case 7:
                                        return (
                                          (e.next = 9),
                                          (0, x.EEn)({
                                            orderNumber: t,
                                            action: i,
                                            pollingKey: n.pollingKey || "",
                                          })
                                        );
                                      case 9:
                                        if (
                                          ((a = e.sent),
                                          (c = function (e, t, i, n) {
                                            var a = e.pollingInterval,
                                              o = e.totalPollingTime,
                                              c = e.pollingKey;
                                            (!a || a <= 0) && (a = 1),
                                              (!o || o <= 0) && (o = 20),
                                              (t.totalPollingTime = o),
                                              (t.pollingTime += a),
                                              (t.pollingKey = c);
                                            var s = setTimeout(function () {
                                              clearTimeout(s),
                                                i(n, "queryTicketStatus", t);
                                            }, 1e3 * a);
                                          }),
                                          (s = a.resultCode),
                                          !a.isNeedPay)
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          (0, I.hideLoading)(),
                                          this.payWithCallBack(
                                            a.payOrderNumber,
                                            c.bind(
                                              this,
                                              a,
                                              n,
                                              this.confirmCombinationPlanOrder,
                                              t
                                            )
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 16:
                                        [-1].indexOf(a.resultCode) > -1
                                          ? (this.closeMask(),
                                            (0, I.hideLoading)(),
                                            f().showModal({
                                              title:
                                                (null == a ||
                                                null ===
                                                  (r = a.confirmFailToast) ||
                                                void 0 === r
                                                  ? void 0
                                                  : r.title) || "出票失败",
                                              content:
                                                (null == a ||
                                                null ===
                                                  (l = a.confirmFailToast) ||
                                                void 0 === l
                                                  ? void 0
                                                  : l.content) || "",
                                              showCancel: !1,
                                              confirmText: "我知道了",
                                              confirmColor: w.default.isTieyou
                                                ? "#fc6e51"
                                                : "#0080FF",
                                            }))
                                          : [2].indexOf(a.resultCode) > -1
                                          ? (this.closeMask(),
                                            (0, I.hideLoading)(),
                                            f().showModal({
                                              title:
                                                (null == a ||
                                                null ===
                                                  (m = a.confirmFailToast) ||
                                                void 0 === m
                                                  ? void 0
                                                  : m.title) || "出票失败",
                                              content:
                                                (null == a ||
                                                null ===
                                                  (d = a.confirmFailToast) ||
                                                void 0 === d
                                                  ? void 0
                                                  : d.content) || "",
                                              showCancel: !1,
                                              confirmText: "我知道了",
                                              confirmColor: w.default.isTieyou
                                                ? "#fc6e51"
                                                : "#0080FF",
                                              success: function (e) {
                                                e.confirm &&
                                                  f().redirectTo({
                                                    url: T.ZP.getTrainGrabOrderDetailUrl(
                                                      t
                                                    ),
                                                  });
                                              },
                                            }))
                                          : 1 === s || 3 === s
                                          ? c(
                                              a,
                                              n,
                                              this.confirmCombinationPlanOrder,
                                              t
                                            )
                                          : 4 === s
                                          ? ((0, I.hideLoading)(),
                                            this.closeMask(),
                                            this.showMultiButtonDialog({
                                              title:
                                                (null == a ||
                                                null ===
                                                  (h = a.confirmFailToast) ||
                                                void 0 === h
                                                  ? void 0
                                                  : h.title) || "出票失败",
                                              content:
                                                (null == a ||
                                                null ===
                                                  (u = a.confirmFailToast) ||
                                                void 0 === u
                                                  ? void 0
                                                  : u.content) ||
                                                "抱歉！确认时间过长，本次出票失败。将继续为您抢原车票。",
                                              leftButtonName: "关闭",
                                              rightButtonName: "查看原订单",
                                              onRightButtonClick: function () {
                                                N.redirectTo({
                                                  url: T.ZP.getTrainGrabOrderDetailUrl(
                                                    t
                                                  ),
                                                });
                                              },
                                            }))
                                          : 5 === s || 7 === s
                                          ? (this.closeMask(),
                                            this.redirectTo({
                                              url: T.ZP.getTrainDetailUrl(t),
                                            }))
                                          : 6 === s
                                          ? (this.setState({
                                              isPollingQuery: !0,
                                            }),
                                            this.closeMask(),
                                            (0, I.hideLoading)(),
                                            c(
                                              a,
                                              n,
                                              this.confirmCombinationPlanOrder,
                                              t
                                            ))
                                          : ((0, I.hideLoading)(),
                                            f().showModal({
                                              title:
                                                (null == a ||
                                                null ===
                                                  (p = a.confirmFailToast) ||
                                                void 0 === p
                                                  ? void 0
                                                  : p.title) || "出票失败",
                                              content:
                                                (null == a ||
                                                null ===
                                                  (g = a.confirmFailToast) ||
                                                void 0 === g
                                                  ? void 0
                                                  : g.content) || "",
                                              showCancel: !1,
                                              confirmText: "我知道了",
                                              confirmColor: w.default.isTieyou
                                                ? "#fc6e51"
                                                : "#0080FF",
                                              success: function (e) {
                                                e.confirm &&
                                                  f().redirectTo({
                                                    url: T.ZP.getTrainGrabOrderDetailUrl(
                                                      t
                                                    ),
                                                  });
                                              },
                                            })),
                                          (e.next = 23);
                                        break;
                                      case 19:
                                        (e.prev = 19),
                                          (e.t0 = e.catch(2)),
                                          (0, I.hideLoading)(),
                                          console.warn(e.t0);
                                      case 23:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 19]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "newUbtTrace",
                        value: function (e) {
                          try {
                            this.ubtTrace(e, {
                              openId: y.ZP.openid || "",
                              userName: y.ZP.userName || "",
                              cid: y.ZP.cid || "",
                              oid: this.oid || "",
                            });
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "onShowConfirmDrawer",
                        value: function () {
                          this.setState({ maskType: "newConfirmDrawer" });
                        },
                      },
                      {
                        key: "oldSeriesRender",
                        value: function () {
                          var e,
                            t = this,
                            i = this.state,
                            n = i.isTieyou,
                            a = i.headRemindInfo,
                            o = i.statusBarHeight,
                            c = i.originTicketInfo,
                            s = i.needConfirmTicketInfo,
                            r = i.questionInfo,
                            l = i.cancelBtnName,
                            m = i.confirmBtnName,
                            d = i.maskType,
                            h = i.payRemindInfo,
                            u = i.interceptAgainToast,
                            w = i.preHoldPercent,
                            N = i.loadingPopVisible,
                            T = i.voiceDescriptionInfos,
                            Z = i.isShowVoiceTag,
                            v = i.grabReschedulePlan,
                            V = i.orderTimeout,
                            b = i.segmentedSecondTicketInfo,
                            k = i.smartType,
                            x = i.confirmButtonTag;
                          return (0, L.BX)(p.View, {
                            className: n ? "ty" : "zx",
                            children: [
                              (0, L.BX)(p.View, {
                                className: "top-bar",
                                style: "padding-top: ".concat(o, "px"),
                                children: [
                                  (0, L.tZ)(p.Text, {
                                    className: "ifont-back iconfont",
                                    id: "AFBV",
                                    onClick: this.onBack,
                                  }),
                                  (0, L.tZ)(p.View, {
                                    className: "tit",
                                    children: "智能出票",
                                  }),
                                ],
                              }),
                              (0, L.BX)(p.View, {
                                className: "top-box",
                                style: "padding-top: ".concat(o + 13, "px"),
                                children: [
                                  (0, L.BX)(p.View, {
                                    className: "top-hd",
                                    children: [
                                      (0, L.tZ)(p.Image, {
                                        src: "https://pic.c-ctrip.com/train/zt/wechat/smart-tick-avatar.png",
                                        className: "avatar",
                                      }),
                                      Z &&
                                        (0, L.BX)(p.View, {
                                          className:
                                            "tag bgcolor-dark color-primary",
                                          id: "AFBW",
                                          onClick: this.showAudioLayer,
                                          children: [
                                            (0, L.tZ)(p.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/train.song/xcx/icon_yysm".concat(
                                                n ? "_ty" : "",
                                                "@3x.png"
                                              ),
                                              className: "yuyin-icon",
                                            }),
                                            "语音说明",
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, L.tZ)(p.View, {
                                    className: "tit-bd",
                                    children: (0, L.tZ)(g.ZtRichText, {
                                      className: "tit",
                                      nodes: a.title,
                                    }),
                                  }),
                                  (0, L.tZ)(p.View, {
                                    className: "txt-bd",
                                    children: (0, L.tZ)(g.ZtRichText, {
                                      nodes: a.subTitle,
                                      className: "txt",
                                    }),
                                  }),
                                ],
                              }),
                              (0, L.BX)(p.View, {
                                className: "wrap",
                                children: [
                                  a.remindInfo &&
                                    (0, L.BX)(p.View, {
                                      className: "wrap-tips",
                                      children: [
                                        a.icon &&
                                          (0, L.tZ)(p.Image, {
                                            className: "wrap-tips-img",
                                            src: "https://pic.c-ctrip.com/train/zt/wechat/smart-tick-avatar.png",
                                          }),
                                        (0, L.tZ)(p.View, {
                                          className: "wrap-tips-txt",
                                          children: a.remindInfo,
                                        }),
                                      ],
                                    }),
                                  (0, L.tZ)(A, {
                                    show: !!s,
                                    isTieyou: n,
                                    orderInfo: s,
                                    bubbleTips: a ? a.bubbleRemind : "",
                                    goTT: function () {
                                      t.goTT();
                                    },
                                    showSecondLineDetail: function () {
                                      t.showSecondLineDetail();
                                    },
                                  }),
                                  (0, L.tZ)(R, {
                                    show: !!c,
                                    showChain: !0,
                                    isTieyou: n,
                                    maskType: d,
                                    originTicketInfo: c,
                                    showFirstPasDetail: function () {
                                      t.showFirstPasDetail();
                                    },
                                  }),
                                  v &&
                                    c.fromStation === v.fromStation &&
                                    (0, L.BX)(p.View, {
                                      className:
                                        "white-box reschedule-card " +
                                        (n ? "ty" : "zx"),
                                      children: [
                                        (0, L.BX)(p.View, {
                                          className: "top-title",
                                          children: [
                                            (0, L.tZ)(p.View, {
                                              className: "img",
                                            }),
                                            (0, L.tZ)(p.View, {
                                              className: "txt",
                                              children: "先保底出行，后改签",
                                            }),
                                          ],
                                        }),
                                        (0, L.BX)(p.View, {
                                          className: "box-card",
                                          children: [
                                            (0, L.BX)(p.View, {
                                              className: "left",
                                              children: [
                                                (0, L.BX)(p.View, {
                                                  className:
                                                    "bar-txt origin-color",
                                                  children: [
                                                    (0, L.tZ)(p.View, {
                                                      className: "title",
                                                      children: "待确认方案",
                                                    }),
                                                    (0, L.tZ)(p.View, {
                                                      className: "tag",
                                                      children: "保底",
                                                    }),
                                                  ],
                                                }),
                                                (0, L.BX)(p.View, {
                                                  className: "list",
                                                  children: [
                                                    (0, L.tZ)(p.Text, {
                                                      className: "txt",
                                                      children: "行程：",
                                                    }),
                                                    (0, L.BX)(p.Text, {
                                                      className:
                                                        "txt " +
                                                        (c.fromStation !==
                                                          v.fromStation ||
                                                        c.toStation !==
                                                          v.toStation
                                                          ? "new-color"
                                                          : ""),
                                                      children: [
                                                        v.fromStation,
                                                        "-",
                                                        v.toStation,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, L.BX)(p.View, {
                                                  className: "list",
                                                  children: [
                                                    (0, L.tZ)(p.Text, {
                                                      className: "txt",
                                                      children: "座席：",
                                                    }),
                                                    (0, L.tZ)(p.Text, {
                                                      className:
                                                        "txt " +
                                                        (c.seats !== v.seatName
                                                          ? "origin-color"
                                                          : ""),
                                                      children: v.seatName,
                                                    }),
                                                  ],
                                                }),
                                                (0, L.BX)(p.View, {
                                                  className: "list",
                                                  children: [
                                                    (0, L.tZ)(p.Text, {
                                                      className: "txt",
                                                      children: "车次：",
                                                    }),
                                                    (0, L.tZ)(p.Text, {
                                                      className:
                                                        "txt " +
                                                        (c.trainNo !==
                                                        v.trainNumber
                                                          ? "origin-color"
                                                          : ""),
                                                      children: v.trainNumber,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, L.BX)(p.View, {
                                              className: "middal",
                                              children: [
                                                (0, L.BX)(p.View, {
                                                  className: "midal-arrow",
                                                  children: [
                                                    (0, L.tZ)(p.View, {
                                                      className:
                                                        "midal-arrow-item-left",
                                                    }),
                                                    (0, L.tZ)(p.View, {
                                                      className:
                                                        "midal-arrow-item-right",
                                                    }),
                                                  ],
                                                }),
                                                (0, L.tZ)(p.View, {
                                                  className: "midal-text",
                                                  children: "改签",
                                                }),
                                              ],
                                            }),
                                            (0, L.BX)(p.View, {
                                              className: "right",
                                              children: [
                                                (0, L.tZ)(p.View, {
                                                  className:
                                                    "bar-txt new-color",
                                                  children: (0, L.tZ)(p.View, {
                                                    className: "title",
                                                    children: "原抢票方案",
                                                  }),
                                                }),
                                                (0, L.BX)(p.View, {
                                                  className: "list",
                                                  children: [
                                                    (0, L.tZ)(p.Text, {
                                                      className: "txt",
                                                      children: "行程：",
                                                    }),
                                                    (0, L.BX)(p.Text, {
                                                      className:
                                                        "txt " +
                                                        (c.fromStation !==
                                                          v.fromStation ||
                                                        c.toStation !==
                                                          v.toStation
                                                          ? "new-color"
                                                          : ""),
                                                      children: [
                                                        c.fromStation,
                                                        "-",
                                                        c.toStation,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, L.BX)(p.View, {
                                                  className: "list",
                                                  children: [
                                                    (0, L.tZ)(p.Text, {
                                                      className: "txt",
                                                      children: "座席：",
                                                    }),
                                                    (0, L.tZ)(p.Text, {
                                                      className:
                                                        "txt " +
                                                        (c.seats !== v.seatName
                                                          ? "new-color"
                                                          : ""),
                                                      children: c.seats,
                                                    }),
                                                  ],
                                                }),
                                                (0, L.BX)(p.View, {
                                                  className: "list",
                                                  children: [
                                                    (0, L.tZ)(p.Text, {
                                                      className: "txt",
                                                      children: "车次：",
                                                    }),
                                                    (0, L.tZ)(p.Text, {
                                                      className:
                                                        "txt " +
                                                        (c.trainNo !==
                                                        v.trainNumber
                                                          ? "new-color"
                                                          : ""),
                                                      children: c.trainNo,
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
                                    r.descList &&
                                    5 !== k &&
                                    (0, L.BX)(p.View, {
                                      className: "white-box qa-box",
                                      children: [
                                        1 !== k &&
                                          (0, L.tZ)(p.View, {
                                            className: "tit mb16",
                                            children: r.title,
                                          }),
                                        1 === k &&
                                          (0, L.BX)(p.View, {
                                            className:
                                              "flex-align-items-center mb16",
                                            children: [
                                              (0, L.tZ)(p.View, {
                                                className: "tit",
                                                children: r.title,
                                              }),
                                              (0, L.tZ)(C.Z, {
                                                customizeStyle: {
                                                  content: "font-size: ".concat(
                                                    f().pxTransform(24),
                                                    ";"
                                                  ),
                                                  icon: "width: "
                                                    .concat(
                                                      f().pxTransform(24),
                                                      ";height: "
                                                    )
                                                    .concat(
                                                      f().pxTransform(24),
                                                      ";margin-left:"
                                                    )
                                                    .concat(f().pxTransform(4)),
                                                },
                                              }),
                                            ],
                                          }),
                                        r.descList.map(function (e, t) {
                                          return (0,
                                          L.tZ)(p.View, { className: "txt", children: e }, t);
                                        }),
                                      ],
                                    }),
                                  5 === k &&
                                    (0, L.BX)(p.View, {
                                      className: "important-tips",
                                      children: [
                                        (0, L.BX)(p.View, {
                                          className: "flex-align-items-center",
                                          children: [
                                            (0, L.tZ)(p.View, {
                                              className: "tit",
                                              children: "重要提示",
                                            }),
                                            (0, L.tZ)(C.Z, {
                                              customizeStyle: {
                                                content: "font-size: "
                                                  .concat(
                                                    f().pxTransform(24),
                                                    ";height: "
                                                  )
                                                  .concat(
                                                    f().pxTransform(32),
                                                    ";line-height: "
                                                  )
                                                  .concat(
                                                    f().pxTransform(32),
                                                    ";"
                                                  ),
                                                icon: "width: "
                                                  .concat(
                                                    f().pxTransform(24),
                                                    ";height: "
                                                  )
                                                  .concat(
                                                    f().pxTransform(24),
                                                    ";margin-left:"
                                                  )
                                                  .concat(f().pxTransform(4)),
                                              },
                                            }),
                                          ],
                                        }),
                                        (0, L.tZ)(p.View, {
                                          className: "tip-bpx",
                                          children:
                                            null == b ||
                                            null === (e = b.remindInfo) ||
                                            void 0 === e
                                              ? void 0
                                              : e.map(function (e, t) {
                                                  return (0,
                                                  L.tZ)(g.ZtRichText, { className: "tip", nodes: e }, t);
                                                }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, L.BX)(p.View, {
                                className: "fixed-botm",
                                children: [
                                  (0, L.tZ)(p.Button, {
                                    className: "btn-cancel color-red",
                                    id: "AFBX",
                                    onClick: this.showCancelStayPop,
                                    children: l,
                                  }),
                                  (0, L.BX)(p.Button, {
                                    className: "btn-red",
                                    id: "AFBY",
                                    onClick: this.confirmSecondRob,
                                    children: [
                                      (0, L.tZ)(p.View, { children: m }),
                                      (0, L.BX)(p.View, {
                                        className: "timeout flex",
                                        children: [
                                          (0, L.tZ)(g.ZtCountdown, {
                                            endTime: V,
                                            format: {
                                              minute: "分",
                                              second: "秒",
                                            },
                                            isShowHour: !1,
                                          }),
                                          "后自动取消",
                                        ],
                                      }),
                                      x &&
                                        (0, L.BX)(p.View, {
                                          className: "tagBox",
                                          children: [
                                            (0, L.tZ)(p.View, {
                                              className: "tagTxt",
                                              children: x,
                                            }),
                                            (0, L.tZ)(p.Image, {
                                              className: "tagAngle",
                                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/quan/tag_triangle.webp",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, L.tZ)(K, {
                                visible: "showFirstLineDetail" === d,
                                drawerInfo: c,
                                onClose: this.closeMask,
                              }),
                              "secondLinePasDetail" === d &&
                                (0, L.tZ)(U.Z, {
                                  show: !0,
                                  title: "乘客详情",
                                  ticketInfoList:
                                    s && s.ticketInfo
                                      ? s.ticketInfo.ticketInfoList
                                      : [],
                                  handleClose: function () {
                                    t.closeMask();
                                  },
                                }),
                              "confirmSecondRob" === d &&
                                (0, L.tZ)(F, {
                                  show: "true",
                                  isTieyou: n,
                                  title: "请核对车票信息",
                                  ticketInfo: null == s ? void 0 : s.ticketInfo,
                                  payRemindInfo: h,
                                  bubbleTips: a ? a.bubbleRemind : "",
                                  handleClose: function () {
                                    t.closeMask();
                                  },
                                  confirmPay: function () {
                                    t.confirm("got");
                                  },
                                  goTT: function () {
                                    t.goTT();
                                  },
                                }),
                              (0, L.tZ)(O, {
                                show: "cancelStayPop" === d,
                                handleClose: function () {
                                  t.closeMask();
                                },
                                confirm: function () {
                                  t.confirm("cancel");
                                },
                                cancel: function () {
                                  t.cancelConfirmGrabOrder();
                                },
                                goTT: function () {
                                  t.goTT();
                                },
                                ticketInfo: null == s ? void 0 : s.ticketInfo,
                                interceptAgainToast: u,
                                orderTimeout: V,
                                bubbleTips: a ? a.bubbleRemind : "",
                                isTieyou: n,
                              }),
                              (0, L.tZ)(_.Z, {
                                show: N,
                                width: w,
                                isTieyou: n,
                              }),
                              "SmartSplitAudioPlayerLayer" === d &&
                                (0, L.tZ)(H.Z, {
                                  show: "true",
                                  isTieyou: n,
                                  title: "语音说明",
                                  voiceDescriptionInfos: T,
                                  handleClose: this.closeMask.bind(this),
                                }),
                            ],
                          });
                        },
                      },
                      {
                        key: "getHeadTopImg",
                        value: function () {
                          var e = "";
                          switch (this.state.smartType) {
                            case 2:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_ZNCP_tcydz.webp";
                              break;
                            case 3:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_ZNCP_ljcc.webp";
                              break;
                            case 6:
                              e =
                                "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Gtzzz.png";
                          }
                          return e;
                        },
                      },
                      {
                        key: "newSeriesRender",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isTieyou,
                            n = t.headRemindInfo,
                            a = t.cancelBtnName,
                            o = t.confirmBtnName,
                            c = t.originGrabInfo,
                            s = t.orderTicketList,
                            r = t.maskType,
                            l = t.segmentedSecondTicketInfo,
                            m = t.isPollingQuery,
                            d = t.orderTimeout,
                            h = t.smartType,
                            u = t.payRemindInfo,
                            f = t.interceptAgainToast,
                            w = t.remindInfo,
                            N = t.confirmButtonTag,
                            T =
                              -1 !== [4, 6].indexOf(h)
                                ? null == l
                                  ? void 0
                                  : l.remindInfo
                                : w;
                          return (0, L.BX)(p.View, {
                            className: "new-series " + (i ? "ty" : "zx"),
                            children: [
                              4 === h &&
                                (0, L.tZ)(Q, {
                                  isPollingQuery: m,
                                  headInfo: n,
                                  onBack: this.onBack.bind(this),
                                }),
                              -1 !== [2, 3, 6].indexOf(h) &&
                                (0, L.tZ)(E.Z, {
                                  headTopImage: this.getHeadTopImg(),
                                  headInfo: n,
                                  isPollingQuery: m,
                                  fromSource: "smartCSTicket",
                                  onBack: this.onBack.bind(this),
                                }),
                              (0, L.BX)(p.View, {
                                className: "wrap-v2 ".concat(
                                  4 === h ? "mt-v1" : ""
                                ),
                                children: [
                                  4 === h &&
                                    (0, L.tZ)(j, {
                                      segmentedSecondTicketInfo: l,
                                      originGrabInfo: c,
                                      ticketInfoList: s,
                                      isPollingQuery: m,
                                      isTieyou: i,
                                    }),
                                  6 === h &&
                                    (0, L.tZ)(ee, {
                                      tripInfo: null == s ? void 0 : s[0],
                                      anotherTripInfo: l,
                                    }),
                                  -1 !== [2, 3].indexOf(h) &&
                                    (0, L.tZ)(ce, {
                                      ticketInfo: null == s ? void 0 : s[0],
                                    }),
                                  -1 !== [2, 3, 6].indexOf(h) &&
                                    (0, L.tZ)(te, {
                                      solutionInfo: c,
                                      smartType: h,
                                    }),
                                  (0, L.tZ)(ne.Z, {
                                    descList: T,
                                    isShowRule: !1,
                                  }),
                                  (0, L.tZ)(B.Z, {}),
                                ],
                              }),
                              (0, L.BX)(p.View, {
                                className: "fixed-botm-v2",
                                style: m ? "display:none" : "",
                                children: [
                                  (0, L.tZ)(p.Button, {
                                    className: "btn-cancel",
                                    id: "AFBZ",
                                    onClick: function () {
                                      e.setState({
                                        maskType: "newRefuseDrawer",
                                      });
                                    },
                                    children: a || "拒绝新方案",
                                  }),
                                  (0, L.BX)(p.Button, {
                                    className: "btn-confirm",
                                    id: "AFBa",
                                    onClick: function () {
                                      e.setState({
                                        maskType: "newConfirmDrawer",
                                      });
                                    },
                                    children: [
                                      (0, L.tZ)(p.View, {
                                        className: "txt",
                                        children: o || "确认出票",
                                      }),
                                      (0, L.BX)(p.View, {
                                        className: "timeout flex",
                                        children: [
                                          (0, L.tZ)(g.ZtCountdown, {
                                            endTime: d,
                                            format: {
                                              minute: "分",
                                              second: "秒",
                                            },
                                            isShowHour: !1,
                                          }),
                                          "后自动取消",
                                        ],
                                      }),
                                      N &&
                                        (0, L.BX)(p.View, {
                                          className: "tagBox",
                                          children: [
                                            (0, L.tZ)(p.View, {
                                              className: "tagTxt",
                                              children: N,
                                            }),
                                            (0, L.tZ)(p.Image, {
                                              className: "tagAngle",
                                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/quan/tag_triangle.webp",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              4 === h &&
                                (0, L.tZ)(q, {
                                  show: "newRefuseDrawer" === r,
                                  isTieyou: i,
                                  title: "抢票不易，建议先出票保证出行",
                                  subTitle: "接受新车票，您可享受",
                                  refuseToast:
                                    null == l
                                      ? void 0
                                      : l.multiRouteRefuseToast,
                                  leftBtnName: a,
                                  rightBtnName: o,
                                  ticketInfoList: s,
                                  onClose: this.closeMask,
                                  onLeftClick:
                                    this.confirmRefuseCombinationPlan,
                                  onRightClick: this.onShowConfirmDrawer,
                                }),
                              6 === h &&
                                (0, L.tZ)(ie.Z, {
                                  show: "newRefuseDrawer" === r,
                                  title: "确认不要这张票吗？",
                                  subTitle: "接受新车票，您可享受",
                                  refuseToast:
                                    null == l
                                      ? void 0
                                      : l.multiRouteRefuseToast,
                                  leftBtnName: "确认出票",
                                  rightBtnName: "不要这张票",
                                  onClose: this.closeMask,
                                  onLeftClick: this.onShowConfirmDrawer,
                                  onRightClick:
                                    this.confirmRefuseCombinationPlan,
                                }),
                              -1 !== [4, 6].indexOf(h) &&
                                (0, L.tZ)(W, {
                                  show: "newConfirmDrawer" === r,
                                  isTieyou: i,
                                  segmentedSecondTicketInfo: l,
                                  cancelBtnName: a,
                                  confirmBtnName: o,
                                  ticketInfoList: s,
                                  onClose: this.closeMask,
                                  onConfirm: this.confirmAcceptCombinationPlan,
                                }),
                              -1 !== [2, 3].indexOf(h) &&
                                (0, L.tZ)(F, {
                                  show: "newConfirmDrawer" === r,
                                  isTieyou: i,
                                  title: "请核对车票信息",
                                  ticketInfo: null == s ? void 0 : s[0],
                                  payRemindInfo: u,
                                  bubbleTips: n ? n.bubbleRemind : "",
                                  handleClose: function () {
                                    e.closeMask();
                                  },
                                  confirmPay: function () {
                                    e.confirm("got");
                                  },
                                  goTT: function () {
                                    e.goTT();
                                  },
                                }),
                              -1 !== [2, 3].indexOf(h) &&
                                (0, L.tZ)(O, {
                                  show: "newRefuseDrawer" === r,
                                  handleClose: function () {
                                    e.closeMask();
                                  },
                                  confirm: function () {
                                    e.confirm("cancel");
                                  },
                                  cancel: function () {
                                    e.cancelConfirmGrabOrder();
                                  },
                                  goTT: function () {
                                    e.goTT();
                                  },
                                  ticketInfo: null == s ? void 0 : s[0],
                                  interceptAgainToast: f,
                                  orderTimeout: d,
                                  bubbleTips: n ? n.bubbleRemind : "",
                                  isTieyou: i,
                                }),
                            ],
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.loading,
                            n = t.smartType,
                            a = t.loadingPopInfo,
                            o = t.maskType,
                            c =
                              -1 !== [4, 6].indexOf(n) ||
                              (-1 !== [2, 3].indexOf(n) && this.isUseNewStyle);
                          return (0, L.BX)(p.View, {
                            className: "train-smart-cs",
                            children: [
                              !i &&
                                (0, L.tZ)(p.Block, {
                                  children: c
                                    ? this.newSeriesRender()
                                    : this.oldSeriesRender(),
                                }),
                              i && (0, L.tZ)(p.View, {}),
                              (0, L.tZ)(se, {
                                visible: "generateTicketLoadingPop" === o,
                                loadingPopInfo: a,
                              }),
                              (0, L.tZ)(S.Z, {
                                ref: function (t) {
                                  e.onDialogAttach(t);
                                },
                              }),
                              (0, L.tZ)(P.Z, {
                                ref: function (t) {
                                  e.onDrawerAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(h.default.Component))
              ) || n;
          Page(
            (0, a.createPageConfig)(
              le,
              "pages/trainsmart/smartCSTicket/index",
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
            42865, 3322, 36332, 95854, 35203, 4978, 50460, 7934, 74492, 77923,
            35835, 1768, 56906, 35408, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(6859);
          }
        ),
          e.O();
      },
    ]);
})();
