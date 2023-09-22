!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/fecc9c60875b710a8101d0d50626beef.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [54059],
      {
        97433: function (e, t, i) {
          var n,
            a = i(32180),
            o = i(79301),
            c = i(298),
            s = i(95308),
            r = i(57042),
            l = i(24460),
            d = i(21867),
            m = i(86066),
            f = i(52500),
            h = i(92954),
            u = i.n(h),
            p = i(71515),
            w = i(34229),
            T = i(79792),
            g = i(79910),
            k = i(25391),
            N = i(93761),
            y = i(8271),
            Z = i.n(y),
            v = (i(89976), i(81957)),
            V = i(18783),
            I = i(2809),
            b = i(49120),
            P = i(58676),
            B = i(33477),
            S = i(48813),
            C = f.default.memo(function (e) {
              var t = e.show,
                i = void 0 === t || t,
                n = e.title,
                a = void 0 === n ? "" : n,
                o = e.isTieyou,
                c = void 0 !== o && o,
                s = e.needConfirmTicketInfo,
                r = void 0 === s ? {} : s,
                l = e.payRemindInfo,
                d = void 0 === l ? [] : l,
                m = e.handleClose,
                f = void 0 === m ? function () {} : m,
                h = e.confirmPay,
                u = void 0 === h ? function () {} : h,
                w = e.goTT,
                T = void 0 === w ? function () {} : w;
              return r && r.ticketInfo
                ? (0, S.tZ)(B.Z, {
                    show: i,
                    title: a,
                    handleClose: f,
                    children: (0, S.tZ)(p.View, {
                      className:
                        "train-smart-split-ticket-confirm-second-pay-layer",
                      children: (0, S.tZ)(p.View, {
                        className: c ? "ty" : "zx",
                        children: (0, S.BX)(p.View, {
                          className: "pop-payment-detail",
                          children: [
                            (0, S.BX)(p.View, {
                              className: "white-box pop-payment-tick",
                              children: [
                                (0, S.BX)(p.View, {
                                  className: "pop-payment-hd",
                                  children: [
                                    (0, S.BX)(p.View, {
                                      className: "from",
                                      children: [
                                        (0, S.tZ)(p.View, {
                                          className: "date",
                                          children: ""
                                            .concat(r.fromDateDesc)
                                            .concat(
                                              r.ticketInfo.departureTimeRemind
                                                ? " " +
                                                    r.ticketInfo
                                                      .departureTimeRemind
                                                : ""
                                            ),
                                        }),
                                        (0, S.tZ)(p.View, {
                                          className: "time",
                                          children: r.ticketInfo.fromTime,
                                        }),
                                        (0, S.tZ)(p.View, {
                                          className: "station",
                                          children: r.ticketInfo.fromStation,
                                        }),
                                      ],
                                    }),
                                    (0, S.BX)(p.View, {
                                      className: "mid",
                                      children: [
                                        (0, S.tZ)(p.View, {
                                          className: "schedule",
                                          id: "AFBM",
                                          onClick: T,
                                          children: "时刻表",
                                        }),
                                        (0, S.BX)(p.View, {
                                          className: "txt",
                                          children: [
                                            r.ticketInfo.trainNo,
                                            (0, S.tZ)(p.Text, {
                                              className: "ifont-sfz iconfont",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, S.BX)(p.View, {
                                      className: "to",
                                      children: [
                                        (0, S.tZ)(p.View, {
                                          className: "date",
                                          children: r.toDateDesc,
                                        }),
                                        (0, S.tZ)(p.View, {
                                          className: "time",
                                          children: r.ticketInfo.toTime,
                                        }),
                                        (0, S.tZ)(p.View, {
                                          className: "station",
                                          children: r.ticketInfo.toStation,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, S.tZ)(p.View, {
                                  className: "pop-payment-list",
                                  children: r.ticketInfo.ticketInfoList.map(
                                    function (e, t) {
                                      return (0, S.BX)(
                                        p.View,
                                        {
                                          className: "item",
                                          children: [
                                            (0, S.tZ)(p.View, {
                                              className: "name",
                                              children: e.passengerName,
                                            }),
                                            (0, S.tZ)(p.View, {
                                              className: "tag-grey",
                                              children: e.passengerType,
                                            }),
                                            e.seatTag &&
                                              (0, S.tZ)(p.View, {
                                                className: "tag-window",
                                                children: e.seatTag,
                                              }),
                                            (0, S.BX)(p.View, {
                                              className: "seat",
                                              children: [
                                                e.seatType,
                                                " ￥",
                                                e.ticketPrice,
                                                " ",
                                                e.seatNo,
                                              ],
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                    }
                                  ),
                                }),
                              ],
                            }),
                            (0, S.tZ)(p.View, {
                              className: "white-box pop-payment-tips",
                              children:
                                d &&
                                d.map(function (e) {
                                  return (0,
                                  S.tZ)(p.View, { className: "txt", children: e }, e);
                                }),
                            }),
                            (0, S.BX)(p.Button, {
                              className: "btn-primary btn-pay",
                              id: "AFBN",
                              onClick: u,
                              children: ["确认支付 ￥", r.totalPrice],
                            }),
                          ],
                        }),
                      }),
                    }),
                  })
                : (0, S.tZ)(p.View, {});
            }),
            D = i(52824),
            x = i(23263),
            X = f.default.memo(function (e) {
              var t = e.show,
                i = void 0 === t || t,
                n = e.isTieyou,
                a = void 0 !== n && n,
                o = e.fromType,
                c = void 0 === o ? "" : o,
                s = e.needConfirmTicketInfo,
                r = void 0 === s ? {} : s,
                l = e.interceptAgainToast,
                d = void 0 === l ? {} : l,
                m = e.orderTimeout,
                f = void 0 === m ? null : m,
                h = e.goTT,
                u = void 0 === h ? function () {} : h,
                T = e.handleClose,
                g = void 0 === T ? function () {} : T,
                k = e.confirm,
                N = void 0 === k ? function () {} : k,
                y = e.cancel,
                Z = void 0 === y ? function () {} : y;
              return d && f
                ? (0, S.BX)(p.View, {
                    className: "train-smart-split-ticket-cancel-stay-layer",
                    children: [
                      (0, S.tZ)(p.View, {
                        className: "action-sheet-bg",
                        id: "AFBJ",
                        onClick: g,
                        style: {
                          display: "".concat(i ? "Block" : "none"),
                          opacity: "".concat(i ? 0.7 : 0),
                        },
                      }),
                      (0, S.BX)(p.View, {
                        className: "confirm-second-pop "
                          .concat(a ? "ty" : "zx", " ")
                          .concat(i ? "active" : ""),
                        children: [
                          "smartRS" === c
                            ? (0, S.BX)(p.View, {
                                className: "head " + (a ? "ty" : "zx"),
                                children: [
                                  (0, S.BX)(p.View, {
                                    className: "lbox",
                                    children: [
                                      (0, S.tZ)(p.Image, {
                                        src: "https://pic.c-ctrip.com/train/zt/wechat/smart-tick-avatar.png",
                                        className: "avatar",
                                      }),
                                      (0, S.tZ)(p.View, {
                                        className: "tag color-primary",
                                        children: "人工客服",
                                      }),
                                    ],
                                  }),
                                  (0, S.tZ)(p.View, {
                                    className: "cont",
                                    children: (0, S.tZ)(p.View, {
                                      className: "txt",
                                      children: d.title,
                                    }),
                                  }),
                                ],
                              })
                            : (0, S.tZ)(p.View, {
                                className: "htit",
                                children: d.title,
                              }),
                          (0, S.tZ)(x.Z, {
                            data: { orderTicketList: [r.ticketInfo] },
                            goTT: u,
                          }),
                          d.suggestInfo &&
                            (0, S.BX)(p.View, {
                              className: "white-box suggest-box",
                              children: [
                                (0, S.BX)(p.View, {
                                  className: "suggest-hd",
                                  children: [
                                    (0, S.tZ)(p.Text, {
                                      className: "tag",
                                      children: d.suggestInfo.tag,
                                    }),
                                    d.suggestInfo.title,
                                  ],
                                }),
                                (0, S.tZ)(p.View, {
                                  className: "suggest-bd-con",
                                  children: d.suggestInfo.descList.map(
                                    function (e) {
                                      return (0, S.tZ)(
                                        p.View,
                                        {
                                          className: "suggest-bd",
                                          children: (0, S.tZ)(p.View, {
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
                          (0, S.tZ)(p.View, {
                            className: "white-box tips-box",
                            children: d.tips,
                          }),
                          (0, S.BX)(p.View, {
                            className: "split-botm-box",
                            children: [
                              (0, S.tZ)(p.Button, {
                                className: "btn-primary",
                                id: "AFBK",
                                onClick: Z,
                                children: d.cancelBtnName,
                              }),
                              (0, S.BX)(p.Button, {
                                className: "btn-submit-".concat(
                                  a ? "ty" : "zx",
                                  " btn-2line"
                                ),
                                id: "AFBL",
                                onClick: N,
                                children: [
                                  (0, S.tZ)(p.View, {
                                    children: d.confirmBtnName,
                                  }),
                                  (0, S.BX)(p.View, {
                                    className: "flex time-text",
                                    children: [
                                      (0, S.tZ)(w.ZtCountdown, {
                                        endTime: f,
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
                  })
                : (0, S.tZ)(p.View, {});
            }),
            L = i(93510),
            F = i(79982),
            H = i(49656),
            A = f.default.memo(function (e) {
              var t = e.show,
                i = void 0 === t || t,
                n = e.maskType,
                a = void 0 === n ? "" : n,
                o = e.isTieyou,
                c = void 0 !== o && o,
                s = e.showChain,
                r = void 0 !== s && s,
                l = e.enableDetail,
                d = void 0 !== l && l,
                m = e.originTicketInfo,
                f = void 0 === m ? {} : m,
                h = e.showFirstPasDetail,
                u = void 0 === h ? function () {} : h;
              return f && f.ticketInfo
                ? (0, S.tZ)(p.View, {
                    className: "train-smart-ticket-banner-n",
                    children: (0, S.tZ)(p.View, {
                      className: c ? "ty" : "zx",
                      children:
                        i &&
                        (0, S.BX)(p.View, {
                          className: "white-box first-trip ".concat(
                            "showFirstLineDetail" === a ? "detail" : ""
                          ),
                          children: [
                            r &&
                              (0, S.BX)(p.Block, {
                                children: [
                                  (0, S.tZ)(p.View, {
                                    className: "left-chain",
                                  }),
                                  (0, S.tZ)(p.View, {
                                    className: "right-chain",
                                  }),
                                ],
                              }),
                            (0, S.tZ)(p.View, {
                              className: "tit",
                              children: f.tag,
                            }),
                            (0, S.BX)(p.View, {
                              className: "first-trip-hd",
                              children: [
                                (0, S.BX)(p.View, {
                                  className: "cont",
                                  children: [
                                    f.fromDateDesc,
                                    " ",
                                    f.ticketInfo.departureTimeRemind ||
                                      f.dayOfWeek_zh,
                                    "出发",
                                  ],
                                }),
                                (0, S.tZ)(p.View, {
                                  className: "status",
                                  children: f.status,
                                }),
                                d &&
                                  (0, S.BX)(p.View, {
                                    className: "btn-detail",
                                    id: "AFBO",
                                    onClick: u,
                                    children: [
                                      "showFirstLineDetail" === a
                                        ? "收起"
                                        : "详细",
                                      (0, S.tZ)(p.Text, {
                                        className: "ifont-triangle iconfont",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, S.BX)(p.View, {
                              className: "first-trip-bd",
                              children: [
                                (0, S.BX)(p.View, {
                                  className: "from",
                                  children: [
                                    (0, S.tZ)(p.View, {
                                      className: "time",
                                      children: f.ticketInfo.fromTime,
                                    }),
                                    (0, S.tZ)(p.View, {
                                      className: "station",
                                      children: f.ticketInfo.fromStation,
                                    }),
                                  ],
                                }),
                                (0, S.BX)(p.View, {
                                  className: "mid",
                                  children: [
                                    (0, S.tZ)(p.View, {
                                      className: "seat",
                                      children: f.ticketInfo.seatName,
                                    }),
                                    (0, S.tZ)(p.View, {
                                      className: "color-green",
                                      children: f.ticketInfo.trainNo,
                                    }),
                                  ],
                                }),
                                (0, S.BX)(p.View, {
                                  className: "to",
                                  children: [
                                    (0, S.tZ)(p.View, {
                                      className: "time",
                                      children: f.ticketInfo.toTime,
                                    }),
                                    (0, S.tZ)(p.View, {
                                      className: "station",
                                      children: f.ticketInfo.toStation,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, S.tZ)(p.View, {
                              className: "first-trip-detail",
                              children: (0, S.tZ)(p.View, {
                                className: "first-trip-list",
                                children: f.ticketInfo.ticketInfoList.map(
                                  function (e, t) {
                                    return (0, S.BX)(
                                      p.View,
                                      {
                                        className: "item",
                                        children: [
                                          (0, S.tZ)(p.View, {
                                            className: "name",
                                            children: e.passengerName,
                                          }),
                                          (0, S.tZ)(p.View, {
                                            className: "tag-grey",
                                            children: e.passengerType,
                                          }),
                                          e.seatTag &&
                                            (0, S.tZ)(p.View, {
                                              className: "tag-window",
                                              children: e.seatTag,
                                            }),
                                          (0, S.BX)(p.View, {
                                            className: "seat",
                                            children: [
                                              e.seatType,
                                              " ￥",
                                              e.ticketPrice,
                                              " ",
                                              e.seatNo,
                                            ],
                                          }),
                                        ],
                                      },
                                      t
                                    );
                                  }
                                ),
                              }),
                            }),
                          ],
                        }),
                    }),
                  })
                : (0, S.tZ)(p.View, {});
            }),
            M = f.default.memo(function (e) {
              var t = e.show,
                i = void 0 === t || t,
                n = e.isTieyou,
                a = void 0 !== n && n,
                o = e.showChain,
                c = void 0 !== o && o,
                s = e.orderInfo,
                r = void 0 === s ? {} : s,
                l = e.goTT,
                d = void 0 === l ? function () {} : l,
                m = e.showSecondLineDetail,
                f = void 0 === m ? function () {} : m;
              return r && r.ticketInfo
                ? (0, S.tZ)(p.View, {
                    className: "train-smart-ticket-banner-s",
                    children: (0, S.tZ)(p.View, {
                      className: a ? "ty" : "zx",
                      children:
                        i &&
                        (0, S.BX)(p.View, {
                          className: "white-box second-trip",
                          children: [
                            c &&
                              (0, S.BX)(p.Block, {
                                children: [
                                  (0, S.tZ)(p.View, {
                                    className: "left-chain",
                                  }),
                                  (0, S.tZ)(p.View, {
                                    className: "right-chain",
                                  }),
                                ],
                              }),
                            (0, S.tZ)(p.View, {
                              className: "tit",
                              children: r.tag,
                            }),
                            (0, S.BX)(p.View, {
                              className: "second-trip-hd",
                              children: [
                                (0, S.BX)(p.View, {
                                  className: "cont",
                                  children: [
                                    r.fromDateDesc,
                                    " ",
                                    r.ticketInfo.departureTimeRemind ||
                                      r.fromRemind,
                                    "出发",
                                  ],
                                }),
                                (0, S.tZ)(p.View, {
                                  className: "color-red",
                                  children: r.status,
                                }),
                              ],
                            }),
                            (0, S.BX)(p.View, {
                              className: "second-trip-bd",
                              children: [
                                (0, S.BX)(p.View, {
                                  className: "from",
                                  children: [
                                    (0, S.tZ)(p.View, {
                                      className: "time",
                                      children: r.ticketInfo.fromTime,
                                    }),
                                    (0, S.tZ)(p.View, {
                                      className: "station",
                                      children: r.ticketInfo.fromStation,
                                    }),
                                  ],
                                }),
                                (0, S.tZ)(p.View, {
                                  className: "schedule",
                                  id: "AFBP",
                                  onClick: d,
                                  children: "时刻表",
                                }),
                                (0, S.BX)(p.View, {
                                  className: "to",
                                  children: [
                                    (0, S.tZ)(p.View, {
                                      className: "time",
                                      children: r.ticketInfo.toTime,
                                    }),
                                    (0, S.tZ)(p.View, {
                                      className: "station",
                                      children: r.ticketInfo.toStation,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, S.BX)(p.View, {
                              className: "second-trip-tick",
                              children: [
                                (0, S.BX)(p.View, {
                                  className: "lbox",
                                  children: [
                                    (0, S.tZ)(p.View, {
                                      className: "label",
                                      children: "座席",
                                    }),
                                    (0, S.tZ)(p.View, {
                                      className: "txt",
                                      children: r.ticketInfo.seatName,
                                    }),
                                  ],
                                }),
                                (0, S.BX)(p.View, {
                                  className: "mid",
                                  children: [
                                    (0, S.tZ)(p.View, {
                                      className: "label",
                                      children: "车次",
                                    }),
                                    (0, S.tZ)(p.View, {
                                      className: "color-green",
                                      children: r.ticketInfo.trainNo,
                                    }),
                                  ],
                                }),
                                (0, S.BX)(p.View, {
                                  className: "rbox",
                                  children: [
                                    (0, S.tZ)(p.View, {
                                      className: "label",
                                      children: "价格",
                                    }),
                                    (0, S.tZ)(p.View, {
                                      className: "price",
                                      children:
                                        r.ticketInfo.ticketInfoList[0]
                                          .ticketPrice,
                                    }),
                                  ],
                                }),
                                r.remindInfo &&
                                  (0, S.tZ)(w.ZtRichText, {
                                    className: "tips",
                                    nodes: r.remindInfo,
                                  }),
                              ],
                            }),
                            (0, S.BX)(p.View, {
                              className: "second-trip-pasg",
                              id: "AFBQ",
                              onClick: f,
                              children: [
                                (0, S.tZ)(p.View, {
                                  className: "name",
                                  children: r.pasStr,
                                }),
                                r.seatTagStr &&
                                  (0, S.tZ)(p.View, {
                                    className: "tag-grey",
                                    children: r.seatTagStr,
                                  }),
                                (0, S.tZ)(p.View, {
                                  className: "seat",
                                  children: r.seatNoStr,
                                }),
                                (0, S.tZ)(p.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                          ],
                        }),
                    }),
                  })
                : (0, S.tZ)(p.View, {});
            }),
            R = i(92161),
            O = { extension: [{ name: "correctVersion", value: "39" }] },
            z =
              (0, v.h)()(
                (n = (function (e) {
                  (0, d.Z)(i, e);
                  var t = (0, m.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, r.Z)(this, i),
                      ((n = t.call(this, e)).pageId = T.default.isTieyou
                        ? "10650060492"
                        : "10650060486"),
                      (n.state = {
                        isTieyou: T.default.isTieyou,
                        statusBarHeight: I.ZP.statusBarHeight,
                        oid: "",
                        maskType: "",
                        headInfo: {},
                        originTicketInfo: {},
                        needConfirmTicketInfo: {},
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
                        voiceDescriptionInfos: null,
                        servicePrice: 0,
                        hotelCouponPrice: 0,
                        planeCouponPrice: 0,
                        smartServicePayToast: null,
                      }),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, h.getCurrentInstance)().router.params,
                            t = g.Z.extractParams(e);
                          (this.oid = e.oid),
                            this.setState(t),
                            (this.tempTime = 0),
                            this.setPathDevTrace(),
                            this.getSmartOrderConfirmDetail();
                        },
                      },
                      {
                        key: "setPathDevTrace",
                        value: function () {
                          try {
                            var e = u().getCurrentPages();
                            e &&
                              1 === e.length &&
                              this.ubtDevTrace(193127, {
                                cid: V.ZP.cid || "",
                                userName: V.ZP.userName || "",
                                page: "smartSplitTicket",
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
                                d,
                                m,
                                f,
                                h,
                                p,
                                w,
                                T,
                                k,
                                N,
                                y,
                                v,
                                V,
                                I,
                                b,
                                P,
                                B,
                                S,
                                C,
                                D,
                                x,
                                X,
                                L,
                                F,
                                H,
                                A,
                                M = this;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (t = { orderNumber: this.oid }),
                                          (e.next = 4),
                                          (0, R.VH)(
                                            t,
                                            (0, c.Z)(
                                              (0, c.Z)({}, O),
                                              {},
                                              {
                                                checkFrameworkLogin: !0,
                                                checkLogin: !0,
                                                loginCB: function () {
                                                  M.getSmartOrderConfirmDetail();
                                                },
                                              }
                                            )
                                          )
                                        );
                                      case 4:
                                        1 === (i = e.sent).resultCode
                                          ? ((n = i.headInfo),
                                            (a = i.orderTimeout),
                                            (s = i.originTicketInfo),
                                            (r = i.needConfirmTicketInfo),
                                            (l = i.questionInfo),
                                            (d = i.confirmBtnName),
                                            (m = i.cancelBtnName),
                                            (f = i.interceptAgainToast),
                                            (h = i.cancelConfirmToast),
                                            (p = i.payRemindInfo),
                                            (w = i.voiceDescriptionInfos),
                                            (T = i.smartServicePayToast),
                                            (k = w),
                                            s &&
                                              ((N = Z()(
                                                s.ticketInfo.fromDate
                                              ).day()),
                                              (y = g.Z.dayOfWeekZh(N)),
                                              (v = Z()(
                                                s.ticketInfo.fromDate
                                              ).format("M月D日")),
                                              Object.assign(s, {
                                                fromDateDesc: v,
                                                dayOfWeek_zh: y,
                                              })),
                                            r &&
                                              ((V = Z()(
                                                r.ticketInfo.fromDate
                                              ).day()),
                                              (I = g.Z.dayOfWeekZh(V)),
                                              (b = Z()(
                                                r.ticketInfo.fromDate
                                              ).format("M月D日")),
                                              (P = Z()(
                                                r.ticketInfo.toDate
                                              ).day()),
                                              (B = g.Z.dayOfWeekZh(P)),
                                              (S = Z()(
                                                r.ticketInfo.toDate
                                              ).format("M月D日")),
                                              (C =
                                                r.ticketInfo.ticketInfoList.reduce(
                                                  function (e, t) {
                                                    return t.ticketPrice + e;
                                                  },
                                                  0
                                                )),
                                              (D = r.ticketInfo.ticketInfoList
                                                .map(function (e) {
                                                  return e.passengerName;
                                                })
                                                .join("、")),
                                              (x = r.ticketInfo.ticketInfoList
                                                .map(function (e) {
                                                  return e.seatNo;
                                                })
                                                .join("、")),
                                              (X =
                                                r.ticketInfo.ticketInfoList.find(
                                                  function (e) {
                                                    return e.seatTag;
                                                  }
                                                )),
                                              (L = X ? X.seatTag : ""),
                                              Object.assign(r, {
                                                fromDateDesc: b,
                                                toDateDesc: S,
                                                totalPrice: C,
                                                pasStr: D,
                                                seatNoStr: x,
                                                fromRemind: I,
                                                toRemind: B,
                                                seatTagStr: L,
                                              }),
                                              Object.assign(r.ticketInfo, {
                                                fromDateDesc: b,
                                                toDateDesc: S,
                                              })),
                                            w &&
                                              (k = w.filter(function (e) {
                                                return !!e.voiceUrl;
                                              })),
                                            T &&
                                              ((F = T.servicePrice),
                                              (H = T.hotelCouponPrice),
                                              (A = T.planeCouponPrice),
                                              this.setState({
                                                servicePrice: F,
                                                hotelCouponPrice: H,
                                                planeCouponPrice: A,
                                                smartServicePayToast: T,
                                              })),
                                            this.setState({
                                              headInfo: n,
                                              originTicketInfo: s,
                                              needConfirmTicketInfo: r,
                                              questionInfo: l,
                                              confirmBtnName: d,
                                              cancelBtnName: m,
                                              interceptAgainToast: f,
                                              cancelConfirmToast: h,
                                              payRemindInfo: p,
                                              voiceDescriptionInfos: k,
                                              isShowVoiceTag:
                                                g.Z.notEmptyArray(k),
                                              orderTimeout: a,
                                            }))
                                          : (u().showToast({
                                              title:
                                                i.resultMessage ||
                                                "加载失败,请重试",
                                              icon: "none",
                                              duration: 2e3,
                                            }),
                                            g.Z.relaunchHome()),
                                          (e.next = 11);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(0)),
                                          console.log(e.t0);
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 8]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
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
                          k.ZP.goTimeTable(i, a, r, c);
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
                        value: function () {
                          try {
                            u().stopBackgroundAudio();
                          } catch (e) {
                            console.log(e);
                          }
                          var e = u().getCurrentPages();
                          1 === (e ? e.length : 1)
                            ? g.Z.relaunchHome()
                            : u().navigateBack();
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
                                d,
                                m,
                                f,
                                h,
                                p,
                                w,
                                g,
                                N,
                                y,
                                Z,
                                v,
                                V,
                                I = this,
                                P = arguments;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            P.length > 0 && void 0 !== P[0]
                                              ? P[0]
                                              : {}),
                                          (i = t.action),
                                          (n = void 0 === i ? "" : i),
                                          (a = t.pollingKey),
                                          (c = void 0 === a ? "" : a),
                                          (s = t.buyProduct),
                                          (r = void 0 !== s && s),
                                          (l = this.state),
                                          (d = l.oid),
                                          (m = l.smartServicePayToast),
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
                                          (0, b.hideLoading)(),
                                          this.setState({
                                            loadingPopVisible: !1,
                                            preholdDisplayStep: 0,
                                            preHoldPercent: 0,
                                          }),
                                          u().showToast({
                                            title: "超时",
                                            icon: "none",
                                            duration: 2e3,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 8:
                                        return (
                                          (f = {
                                            orderNumber: d,
                                            action: n,
                                            pollingKey: c || "",
                                          }),
                                          m && (f.type = r ? 3 : 4),
                                          (e.next = 12),
                                          (0, R.Mj)(f)
                                        );
                                      case 12:
                                        if (
                                          ((h = e.sent),
                                          (0, b.hideLoading)(),
                                          (p = h.resultCode),
                                          h.pollingKey &&
                                            (this.pollingKey = h.pollingKey),
                                          !h.isNeedPay)
                                        ) {
                                          e.next = 19;
                                          break;
                                        }
                                        return (
                                          (w = setInterval(function () {
                                            I.state.preHoldPercent < 95
                                              ? I.setState({
                                                  preHoldPercent:
                                                    I.state.preHoldPercent +
                                                    Math.round(
                                                      1 * Math.random()
                                                    ),
                                                })
                                              : (clearInterval(w),
                                                I.setState(
                                                  {
                                                    loadingPopVisible: !1,
                                                    preholdDisplayStep: 0,
                                                    preHoldPercent: 0,
                                                  },
                                                  function () {
                                                    I.pay(h.payOrderNumber);
                                                  }
                                                ));
                                          }, 10)),
                                          e.abrupt("return")
                                        );
                                      case 19:
                                        1 === p
                                          ? (g = setInterval(function () {
                                              I.state.preHoldPercent < 100
                                                ? I.setState({
                                                    preHoldPercent:
                                                      I.state.preHoldPercent +
                                                      Math.round(
                                                        1 * Math.random()
                                                      ),
                                                  })
                                                : (clearInterval(g),
                                                  I.setState(
                                                    {
                                                      loadingPopVisible: !1,
                                                      preholdDisplayStep: 0,
                                                      preHoldPercent: 0,
                                                    },
                                                    function () {
                                                      u().redirectTo({
                                                        url: "".concat(
                                                          k.ZP.getTrainDetailUrl(
                                                            d
                                                          ),
                                                          "&fromPage=smartSplitTicket"
                                                        ),
                                                      });
                                                    }
                                                  ));
                                            }, 10))
                                          : 2 === p
                                          ? (this.setState({
                                              loadingPopVisible: !1,
                                              preholdDisplayStep: 0,
                                              preHoldPercent: 0,
                                            }),
                                            (N = h.confirmFailToast || {}),
                                            (y = setInterval(function () {
                                              I.state.preHoldPercent < 90
                                                ? I.setState({
                                                    preHoldPercent:
                                                      I.state.preHoldPercent +
                                                      Math.round(
                                                        1 * Math.random()
                                                      ),
                                                  })
                                                : (clearInterval(y),
                                                  I.setState(
                                                    {
                                                      loadingPopVisible: !1,
                                                      preholdDisplayStep: 0,
                                                      preHoldPercent: 0,
                                                    },
                                                    function () {
                                                      u().showModal({
                                                        title:
                                                          N.title || "提示",
                                                        content:
                                                          N.content &&
                                                          Array.isArray(
                                                            N.content
                                                          )
                                                            ? N.content[0]
                                                            : "出票失败",
                                                        showCancel: !1,
                                                        confirmText: "我知道了",
                                                        confirmColor: T.default
                                                          .isTieyou
                                                          ? "#fc6e51"
                                                          : "#0080FF",
                                                        success: function (e) {
                                                          e.confirm &&
                                                            u().redirectTo({
                                                              url: k.ZP.getTrainGrabOrderDetailUrl(
                                                                I.state.oid,
                                                                "&fromPage=smartSplitTicket"
                                                              ),
                                                            });
                                                        },
                                                      });
                                                    }
                                                  ));
                                            }, 10)))
                                          : 3 === p
                                          ? ((Z = h.pollingInterval),
                                            (v = h.totalPollingTime),
                                            (!Z || Z <= 0) && (Z = 1),
                                            (!v || v <= 0) && (v = 20),
                                            (this.tempTotalPollingTime = v),
                                            (this.tempInterval += Z),
                                            this.addpreHoldPercent(
                                              this.tempTime + 1e3 * Z,
                                              2,
                                              100
                                            ),
                                            (V = setTimeout(function () {
                                              clearTimeout(V),
                                                I.confirmGrabOrder({
                                                  action: "query",
                                                  pollingKey: I.pollingKey,
                                                  buyProduct: r,
                                                });
                                            }, 1e3 * Z)))
                                          : (this.setState({
                                              loadingPopVisible: !1,
                                              preholdDisplayStep: 0,
                                              preHoldPercent: 0,
                                            }),
                                            u().showModal({
                                              title: "提示",
                                              content:
                                                h.resultMsg || "出票失败",
                                              showCancel: !1,
                                              confirmText: "我知道了",
                                              confirmColor: T.default.isTieyou
                                                ? "#fc6e51"
                                                : "#0080FF",
                                              success: function (e) {
                                                e.confirm &&
                                                  u().redirectTo({
                                                    url: k.ZP.getTrainGrabOrderDetailUrl(
                                                      d,
                                                      "&fromPage=smartSplitTicket"
                                                    ),
                                                  });
                                              },
                                            })),
                                          (e.next = 25);
                                        break;
                                      case 22:
                                        (e.prev = 22),
                                          (e.t0 = e.catch(2)),
                                          console.log(e.t0);
                                      case 25:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 22]]
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
                              var t, i, n, a;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = this.state),
                                          (i = t.oid),
                                          (n = t.cancelConfirmToast),
                                          (e.prev = 1),
                                          (0, b.showLoading)("取消中"),
                                          (e.next = 5),
                                          (0, R.Ap)({ orderNumber: i })
                                        );
                                      case 5:
                                        (a = e.sent) && 1 === a.resultCode
                                          ? u().showModal({
                                              title: n.title,
                                              content: n.subTitle,
                                              showCancel: !1,
                                              confirmText: n.btnName,
                                              confirmColor: T.default.isTieyou
                                                ? "#fc6e51"
                                                : "#0080FF",
                                              success: function (e) {
                                                e.confirm && g.Z.relaunchHome();
                                              },
                                            })
                                          : u().showToast({
                                              title: "抱歉，取消失败！",
                                              icon: "none",
                                            }),
                                          (e.next = 12);
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0);
                                      case 12:
                                        return (
                                          (e.prev = 12),
                                          (0, b.hideLoading)(),
                                          e.finish(12)
                                        );
                                      case 15:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 9, 12, 15]]
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
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var i = this;
                              return (0, o.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (0, b.showLoading)("加载中"),
                                        N.ZP.doPayment({
                                          business: "train",
                                          orderNumber: t,
                                          title: "火车票订单",
                                        })
                                          .then(function () {
                                            setTimeout(function () {
                                              u().redirectTo({
                                                url: "".concat(
                                                  k.ZP.getTrainDetailUrl(
                                                    i.state.oid
                                                  ),
                                                  "&fromPage=smartSplitTicket"
                                                ),
                                              });
                                            }, 200);
                                          })
                                          .catch(function (e) {
                                            console.log(e);
                                          })
                                          .finally(function () {
                                            (0, b.hideLoading)();
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
                        key: "cancelService",
                        value: function () {
                          var e = this;
                          this.showMultiButtonDialog({
                            title: "确认放弃吗",
                            content: "本次升级套餐机会难得，确认要放弃吗？",
                            leftButtonName: "放弃套餐并出票",
                            rightButtonName: "再想想",
                            onLeftButtonClick: function () {
                              e.confirm(!1);
                            },
                            onRightButtonClick: function () {},
                          });
                        },
                      },
                      {
                        key: "showCancelStayPop",
                        value: function () {
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
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isTieyou,
                            n = t.headInfo,
                            a = t.statusBarHeight,
                            o = t.originTicketInfo,
                            c = t.needConfirmTicketInfo,
                            s = t.questionInfo,
                            r = t.cancelBtnName,
                            l = t.confirmBtnName,
                            d = t.maskType,
                            m = t.payRemindInfo,
                            f = t.interceptAgainToast,
                            h = t.preHoldPercent,
                            u = t.loadingPopVisible,
                            T = t.voiceDescriptionInfos,
                            g = t.isShowVoiceTag,
                            k = t.servicePrice,
                            N = t.hotelCouponPrice,
                            y = t.planeCouponPrice,
                            Z = t.smartServicePayToast,
                            v = t.orderTimeout;
                          return (0, S.BX)(p.View, {
                            className: i ? "ty" : "zx",
                            children: [
                              (0, S.BX)(p.View, {
                                className: "top-bar",
                                style: "padding-top: ".concat(a, "rpx"),
                                children: [
                                  (0, S.tZ)(p.Text, {
                                    className: "ifont-back iconfont",
                                    id: "AFBl",
                                    onClick: this.onBack,
                                  }),
                                  (0, S.tZ)(p.View, {
                                    className: "tit",
                                    children: "智能拆票",
                                  }),
                                ],
                              }),
                              (0, S.BX)(p.View, {
                                className: "top-box",
                                style: "padding-top: ".concat(a + 13, "rpx"),
                                children: [
                                  (0, S.BX)(p.View, {
                                    className: "top-hd",
                                    children: [
                                      (0, S.tZ)(p.Image, {
                                        src: "https://pic.c-ctrip.com/train/zt/wechat/smart-tick-avatar.png",
                                        className: "avatar",
                                      }),
                                      g &&
                                        (0, S.BX)(p.View, {
                                          className:
                                            "tag bgcolor-dark color-primary",
                                          id: "AFBm",
                                          onClick: this.showAudioLayer,
                                          children: [
                                            (0, S.tZ)(p.Image, {
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
                                  (0, S.tZ)(p.View, {
                                    className: "tit",
                                    children: n.title,
                                  }),
                                  (0, S.tZ)(p.View, {
                                    className: "txt-bd",
                                    children: (0, S.tZ)(w.ZtRichText, {
                                      nodes: n.desc,
                                      className: "txt",
                                    }),
                                  }),
                                ],
                              }),
                              (0, S.BX)(p.View, {
                                className: "wrap",
                                children: [
                                  (0, S.tZ)(A, {
                                    show: !!o,
                                    enableDetail: !0,
                                    isTieyou: i,
                                    maskType: d,
                                    originTicketInfo: o,
                                    showFirstPasDetail: function () {
                                      e.showFirstPasDetail();
                                    },
                                  }),
                                  (0, S.tZ)(M, {
                                    show: !!c,
                                    isTieyou: i,
                                    showChain: !0,
                                    orderInfo: c,
                                    goTT: function () {
                                      e.goTT();
                                    },
                                    showSecondLineDetail: function () {
                                      e.showSecondLineDetail();
                                    },
                                  }),
                                  s &&
                                    s.descList &&
                                    (0, S.BX)(p.View, {
                                      className: "white-box qa-box",
                                      children: [
                                        (0, S.tZ)(p.View, {
                                          className: "tit",
                                          children: s.title,
                                        }),
                                        s.descList.map(function (e, t) {
                                          return (0,
                                          S.tZ)(p.View, { className: "txt", children: e }, t);
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, S.BX)(p.View, {
                                className: "fixed-botm",
                                children: [
                                  (0, S.tZ)(p.Button, {
                                    className: "btn-cancel color-red",
                                    id: "AFBn",
                                    onClick: this.showCancelStayPop,
                                    children: r,
                                  }),
                                  (0, S.BX)(p.Button, {
                                    className: "btn-red",
                                    id: "AFBo",
                                    onClick: this.confirmSecondRob,
                                    children: [
                                      (0, S.tZ)(p.View, { children: l || "" }),
                                      (0, S.BX)(p.View, {
                                        className: "timeout flex",
                                        children: [
                                          (0, S.tZ)(w.ZtCountdown, {
                                            endTime: v,
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
                              "showFirstLineDetail" === d &&
                                (0, S.tZ)(p.View, {
                                  className: "shade-box",
                                  id: "AFBp",
                                  onClick: this.closeMask,
                                }),
                              (0, S.tZ)(H.Z, {
                                show: "secondLinePasDetail" === d,
                                title: "乘客详情",
                                ticketInfoList:
                                  c && c.ticketInfo
                                    ? c.ticketInfo.ticketInfoList
                                    : [],
                                handleClose: function () {
                                  e.closeMask();
                                },
                              }),
                              "confirmSecondRob" === d &&
                                (Z
                                  ? (0, S.tZ)(D.Z, {
                                      show: "true",
                                      isTieyou: i,
                                      isFromSplitTicket: !0,
                                      title: "您全程有座,出行更舒适",
                                      needShare: !0,
                                      needConfirmTicketInfo: c,
                                      payRemindInfo: m,
                                      confirmBtnName: l,
                                      servicePrice: k,
                                      hotelCouponPrice: N,
                                      planeCouponPrice: y,
                                      smartServicePayToast: Z,
                                      orderTimeout: v,
                                      handleClose: function () {
                                        e.closeMask();
                                      },
                                      confirmPay: function () {
                                        e.confirm(!0);
                                      },
                                      goTT: function () {
                                        e.goTT();
                                      },
                                      ubtTrace: this.ubtTrace,
                                      cancelService: this.cancelService,
                                    })
                                  : (0, S.tZ)(C, {
                                      show: "true",
                                      isTieyou: i,
                                      title: "支付第二程票款",
                                      needConfirmTicketInfo: c,
                                      payRemindInfo: m,
                                      handleClose: function () {
                                        e.closeMask();
                                      },
                                      confirmPay: function () {
                                        e.confirm(!1);
                                      },
                                      goTT: function () {
                                        e.goTT();
                                      },
                                    })),
                              (0, S.tZ)(X, {
                                show: "cancelStayPop" === d,
                                handleClose: function () {
                                  e.closeMask();
                                },
                                confirm: function () {
                                  e.confirmSecondRob();
                                },
                                cancel: function () {
                                  e.cancelConfirmGrabOrder();
                                },
                                goTT: function () {
                                  e.goTT();
                                },
                                needConfirmTicketInfo: c,
                                interceptAgainToast: f,
                                orderTimeout: v,
                                isTieyou: i,
                              }),
                              (0, S.tZ)(F.Z, {
                                show: u,
                                width: h,
                                isTieyou: i,
                              }),
                              "SmartSplitAudioPlayerLayer" === d &&
                                (0, S.tZ)(L.Z, {
                                  show: "true",
                                  isTieyou: i,
                                  title: "语音说明",
                                  voiceDescriptionInfos: T,
                                  handleClose: this.closeMask.bind(this),
                                }),
                              (0, S.tZ)(P.Z, {
                                ref: function (t) {
                                  return e.onDialogAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(f.default.Component))
              ) || n;
          Page(
            (0, a.createPageConfig)(
              z,
              "pages/trainsmart/smartSplitTicket/index",
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
          [42865, 3322, 36332, 95854, 35203, 4978, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(97433);
          }
        ),
          e.O();
      },
    ]);
})();
