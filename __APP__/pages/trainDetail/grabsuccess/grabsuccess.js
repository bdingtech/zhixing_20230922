!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/7a64e02088e78e12a60f5110f7cf05f1.js"),
    require("../sub-common/82eba6c76a1180b32ebf23e60fff4c61.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [59965],
      {
        3990: function (e, t, i) {
          var a,
            n = i(32180),
            r = i(94262),
            o = i(90129),
            s = i(298),
            c = i(79301),
            l = i(95308),
            d = i(57042),
            m = i(24460),
            u = i(21867),
            h = i(86066),
            p = i(52500),
            f = i(71515),
            g = i(92954),
            w = i.n(g),
            b = i(81957),
            N = i(79792),
            v = i(18783),
            y = i(3205),
            Z = i(34229),
            S = i(1269),
            T = i(49120),
            I = i(93761),
            k = i(20592),
            V = i(94190),
            C = i(76290),
            x = i(10741),
            _ = i(86977),
            B = i(96158),
            A = i(8271),
            D = i.n(A),
            z = i(25391),
            P = i(48813),
            X = function (e) {
              if ("string" == typeof e) return e;
              var t = "",
                i = [],
                a = [];
              return (
                e.forEach(function (e) {
                  (e.disabled || e.confirmed) &&
                    (-1 === i.indexOf(e.recommendDepartStation) &&
                      i.push(e.recommendDepartStation),
                    -1 === a.indexOf(e.recommendArriveStation) &&
                      a.push(e.recommendArriveStation));
                }),
                i.length && (t = i[0] + "-" + a[0]),
                i.length > 1 && (t += "等"),
                t
              );
            },
            F = function (e) {
              w().setClipboardData({
                data: e,
                success: function () {
                  w().showToast({ title: "复制成功", icon: "none" });
                },
              });
            },
            E = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i() {
                return (0, d.Z)(this, i), t.apply(this, arguments);
              }
              return (
                (0, m.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e,
                        t,
                        i = this,
                        a = this.props.data || {},
                        n = a.grabOrder,
                        r = a.otherDateStr,
                        o = a.otherDateStrVisible,
                        s = a.selectTrainNumberStr,
                        c = a.selectTrainNumberStrVisible,
                        l = a.otherSeatStr,
                        d = a.otherSeatStrVisible,
                        m = a.CrossStationGrabTicketInfoList,
                        u = a.CrossStationGrabTicketInfoListVisible,
                        h = a.promiseCarRecommendInfo,
                        g = a.promiseToast,
                        w = a.showPromiseCarTip,
                        b = a.isDisplayPromiseCar,
                        N = a.isShowCrossStationRevise,
                        v = a.canChangeDates,
                        y = a.canChangeTrainNumber,
                        Z = a.orderNumber,
                        S = a.mobile,
                        T = a.isFoldSomeTask;
                      return (0, P.tZ)(f.Block, {
                        children: (0, P.BX)(f.View, {
                          className: "qp-task",
                          children: [
                            n.f_route &&
                              (0, P.BX)(f.View, {
                                className: "item",
                                children: [
                                  (0, P.tZ)(f.View, {
                                    className: "label",
                                    children: "行程",
                                  }),
                                  (0, P.tZ)(f.View, {
                                    className: "txt",
                                    children: n.f_route,
                                  }),
                                ],
                              }),
                            (0, P.BX)(f.View, {
                              className: "item",
                              children: [
                                (0, P.tZ)(f.View, {
                                  className: "label",
                                  children: "乘客",
                                }),
                                (0, P.tZ)(f.View, {
                                  className: "txt",
                                  children: n.f_passengerNames,
                                }),
                              ],
                            }),
                            r &&
                              (0, P.BX)(f.View, {
                                className: "item",
                                children: [
                                  (0, P.tZ)(f.View, {
                                    className: "label",
                                    children: "日期",
                                  }),
                                  (0, P.tZ)(f.View, {
                                    className: "txt",
                                    children: r,
                                  }),
                                  o &&
                                    n.orderInfo.updateFlag &&
                                    v &&
                                    (0, P.BX)(p.default.Fragment, {
                                      children: [
                                        (0, P.tZ)(f.View, {
                                          className:
                                            "color-primary qp-recommend",
                                          id: "AADz",
                                          onClick: this.props.chooseOtherDate,
                                          children: "推荐多选",
                                        }),
                                        (0, P.tZ)(f.Text, {
                                          className: "ifont-arr iconfont",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            s &&
                              (0, P.BX)(f.View, {
                                className: "item",
                                children: [
                                  (0, P.tZ)(f.View, {
                                    className: "label",
                                    children: "车次",
                                  }),
                                  (0, P.tZ)(f.View, {
                                    className: "txt",
                                    children: s,
                                  }),
                                  c &&
                                    n.orderInfo.updateFlag &&
                                    y &&
                                    (0, P.BX)(p.default.Fragment, {
                                      children: [
                                        (0, P.tZ)(f.View, {
                                          className:
                                            "color-primary qp-recommend",
                                          id: "AAEA",
                                          onClick: this.props.chooseOtherTrain,
                                          children: "推荐多选",
                                        }),
                                        (0, P.tZ)(f.Text, {
                                          className: "ifont-arr iconfont",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            l &&
                              (0, P.BX)(f.View, {
                                className: "item",
                                children: [
                                  (0, P.tZ)(f.View, {
                                    className: "label",
                                    children: "座席",
                                  }),
                                  (0, P.tZ)(f.View, {
                                    className: "txt",
                                    children: l,
                                  }),
                                  d &&
                                    n.orderInfo.updateFlag &&
                                    (0, P.BX)(p.default.Fragment, {
                                      children: [
                                        (0, P.tZ)(f.View, {
                                          className:
                                            "color-primary qp-recommend",
                                          id: "AAEB",
                                          onClick: this.props.chooseOtherSeat,
                                          children: "推荐多选",
                                        }),
                                        (0, P.tZ)(f.Text, {
                                          className: "ifont-arr iconfont",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            !T &&
                              (0, P.BX)(P.HY, {
                                children: [
                                  m &&
                                    !!m.length &&
                                    (0, P.BX)(f.View, {
                                      className: "item",
                                      children: [
                                        (0, P.tZ)(f.View, {
                                          className: "label",
                                          children: "跨站",
                                        }),
                                        (0, P.tZ)(f.View, {
                                          className: "txt",
                                          children:
                                            X(m) || "上车补票或者多买几站",
                                        }),
                                        u &&
                                          !!n.orderInfo.updateFlag &&
                                          N &&
                                          !!m.length &&
                                          (0, P.BX)(p.default.Fragment, {
                                            children: [
                                              (0, P.tZ)(f.View, {
                                                className:
                                                  "color-primary qp-recommend",
                                                id: "AAEC",
                                                onClick:
                                                  this.props.chooseCrossStation,
                                                children: "推荐多选",
                                              }),
                                              (0, P.tZ)(f.Text, {
                                                className: "ifont-arr iconfont",
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  1 === b &&
                                    !(
                                      (null == g ||
                                        null === (e = g.plans) ||
                                        void 0 === e ||
                                        !e.length) &&
                                      0 === (null == h ? void 0 : h.selected)
                                    ) &&
                                    (0, P.BX)(f.View, {
                                      className: "item promise-car",
                                      children: [
                                        (0, P.tZ)(f.View, {
                                          className: "label",
                                          children: "保障",
                                        }),
                                        (0, P.BX)(f.View, {
                                          className: "middle-box",
                                          children: [
                                            (0, P.tZ)(f.View, {
                                              className: "txt",
                                              children:
                                                (null == h
                                                  ? void 0
                                                  : h.showMsg) || "",
                                            }),
                                            w &&
                                              (0, P.BX)(f.View, {
                                                className: "tip-box",
                                                id: "AAED",
                                                onClick:
                                                  this.props.closePromiseCarTip,
                                                children: [
                                                  (0, P.tZ)(f.View, {
                                                    className: "triangle",
                                                  }),
                                                  (0, P.tZ)(f.View, {
                                                    className: "tip",
                                                    children:
                                                      "在这设置保障上车哦~",
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                        !(
                                          (null == g ||
                                            null === (t = g.plans) ||
                                            void 0 === t ||
                                            !t.length) &&
                                          1 ===
                                            (null == h ? void 0 : h.selected)
                                        ) &&
                                          (0, P.BX)(f.Block, {
                                            children: [
                                              (0, P.tZ)(f.View, {
                                                className:
                                                  "color-primary qp-recommend",
                                                id: "AAEE",
                                                onClick: function () {
                                                  i.props.ubtTrace(205914, {
                                                    bizKey:
                                                      "z_guarantee_display_click",
                                                    state:
                                                      null != h && h.selected
                                                        ? 0
                                                        : 1,
                                                  }),
                                                    i.props.choosePromiseIntoCar();
                                                },
                                                children:
                                                  1 ===
                                                  (null == h
                                                    ? void 0
                                                    : h.selected)
                                                    ? "修改设置"
                                                    : "推荐设置",
                                              }),
                                              (0, P.tZ)(f.Text, {
                                                className: "ifont-arr iconfont",
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  S &&
                                    (0, P.BX)(f.View, {
                                      className: "item",
                                      children: [
                                        (0, P.tZ)(f.View, {
                                          className: "label",
                                          children: "手机",
                                        }),
                                        (0, P.tZ)(f.View, {
                                          className: "txt",
                                          children: S,
                                        }),
                                      ],
                                    }),
                                  (0, P.BX)(f.View, {
                                    className: "item",
                                    children: [
                                      (0, P.tZ)(f.View, {
                                        className: "label",
                                        children: "订单号",
                                      }),
                                      (0, P.tZ)(f.View, {
                                        className: "txt",
                                        style: "flex: unset",
                                        children: Z,
                                      }),
                                      (0, P.tZ)(f.View, {
                                        className: "copy",
                                        id: "AAEF",
                                        onClick: function () {
                                          return F(Z);
                                        },
                                        children: "复制",
                                      }),
                                    ],
                                  }),
                                  n.f_AppendProductDesc &&
                                    (0, P.BX)(f.View, {
                                      className: "item",
                                      children: [
                                        (0, P.tZ)(f.View, {
                                          className: "label",
                                          children: "其他",
                                        }),
                                        (0, P.tZ)(f.View, {
                                          className: "txt",
                                          children: n.f_AppendProductDesc,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(p.default.Component),
            U = i(2809),
            O = i(79910),
            J = i(58676),
            j = i(41716),
            q = i(17917),
            L = p.default.memo(function (e) {
              var t = e.orderNumber,
                i = e.page,
                a = void 0 === i ? 0 : i,
                n = e.ubtTrace,
                r = void 0 === n ? function () {} : n,
                s = (0, p.useState)([]),
                d = (0, o.Z)(s, 2),
                m = d[0],
                u = d[1],
                h = (0, p.useState)(""),
                g = (0, o.Z)(h, 2),
                w = g[0],
                b = g[1];
              (0, p.useEffect)(function () {
                (0, x.LJ5)({ orderNumber: t, fromPage: a })
                  .then(function (e) {
                    1 == e.resultCode
                      ? (u(e.ScenceInfos), b(e.ChatScenceUrl))
                      : (u([]), b(""));
                  })
                  .catch(function () {});
              }, []);
              var N = (function () {
                var e = (0, l.Z)(
                  (0, c.Z)().mark(function e(t, i) {
                    return (0, c.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            i &&
                              r("c_trn_z_10650060639", {
                                bizKey: "z_mini_ordDetail_IM_click",
                                IMType: i,
                              }),
                              (0, q.e)(t);
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, i) {
                  return e.apply(this, arguments);
                };
              })();
              return (0, P.tZ)(f.View, {
                className: "train-faq ".concat(1 === a ? "new" : ""),
                children:
                  m &&
                  m.length > 0 &&
                  (0, P.BX)(f.View, {
                    className: "jcwt-list",
                    children: [
                      (0, P.BX)(f.View, {
                        className: "tit",
                        children: [
                          "常见问题",
                          w &&
                            (0 === a
                              ? (0, P.tZ)(f.View, {
                                  className: "more",
                                  id: "AJAQ",
                                  onClick: function () {
                                    N(w);
                                  },
                                  children: "其它问题",
                                })
                              : (0, P.BX)(f.View, {
                                  className: "more-v2",
                                  id: "AJAR",
                                  onClick: function () {
                                    N(w);
                                  },
                                  children: [
                                    (0, P.tZ)(f.Image, {
                                      className: "icon-more",
                                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/qpcg/icon_20_kefu.png",
                                    }),
                                    (0, P.tZ)(f.View, { children: "联系客服" }),
                                  ],
                                })),
                        ],
                      }),
                      (0, P.tZ)(f.View, {
                        children: m.map(function (e, t) {
                          return (0, P.BX)(
                            f.View,
                            {
                              className: "item",
                              "data-item": e,
                              id: "AJAS",
                              onClick: function () {
                                N(e.ScenceUrl, e.ScenceContent);
                              },
                              children: [
                                (0, P.tZ)(f.View, {
                                  className: "cont",
                                  children: e.ScenceContent,
                                }),
                                (0, P.tZ)(f.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
              });
            }),
            R = i(92735),
            G = p.default.memo(function (e) {
              var t,
                i,
                a,
                n = e.serviceInfo,
                r = void 0 === n ? null : n,
                o = e.ubtTrace,
                s = void 0 === o ? function () {} : o,
                c =
                  null == r || null === (t = r.detailInfos) || void 0 === t
                    ? void 0
                    : t.filter(function (e) {
                        return !!e.jumpUrl && 1 === e.state;
                      }),
                l =
                  null == r || null === (i = r.detailInfos) || void 0 === i
                    ? void 0
                    : i.filter(function (e) {
                        return !(e.jumpUrl && 1 === e.state);
                      });
              return (
                (0, p.useEffect)(function () {
                  c &&
                    c.length > 0 &&
                    s("s_trn_z_10650063362", {
                      exposureType: "normal",
                      bizKey: "z_grab_success_wuyou_module_show",
                    });
                }, []),
                r &&
                0 !==
                  (null == r || null === (a = r.detailInfos) || void 0 === a
                    ? void 0
                    : a.length)
                  ? (0, P.BX)(f.View, {
                      className: "qp-enjoy-service",
                      children: [
                        (0, P.tZ)(f.View, {
                          className: "tit",
                          children: r.title,
                        }),
                        c.map(function (e, t) {
                          return (0, P.tZ)(
                            f.Block,
                            {
                              children: (0, P.BX)(f.View, {
                                className: "item flex-align-items-center",
                                id: "AJEe",
                                onClick: function () {
                                  s("c_trn_z_10650063362", {
                                    bizKey: "z_grab_success_wuyou_module_click",
                                  }),
                                    (function (e) {
                                      1 === e.state &&
                                        O.Z.commonNavigator(e.jumpUrl);
                                    })(e);
                                },
                                children: [
                                  (0, P.tZ)(f.Image, {
                                    className: "icon",
                                    src: e.icon,
                                    webp: !0,
                                  }),
                                  (0, P.tZ)(f.View, {
                                    className: "desc",
                                    children: e.serviceName,
                                  }),
                                  e.jumpName &&
                                    (0, P.BX)(P.HY, {
                                      children: [
                                        (0, P.tZ)(f.View, {
                                          className: "jump-name",
                                          children: e.jumpName,
                                        }),
                                        (0, P.tZ)(f.View, {
                                          className: "iconfont ifont-arr",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            },
                            "ite_".concat(t)
                          );
                        }),
                        (null == l ? void 0 : l.length) > 0 &&
                          (0, P.tZ)(f.View, {
                            className: "item-box",
                            children: l.map(function (e, t) {
                              return (0,
                              P.tZ)(f.Block, { children: (0, P.BX)(f.View, { style: 1 === l.length ? "flex: 1" : "", className: "item-line", children: [(0, P.tZ)(f.Image, { className: "icon", src: e.icon, webp: !0 }), (0, P.tZ)(f.View, { className: "desc", children: e.serviceName })] }) }, "ite_".concat(t));
                            }),
                          }),
                      ],
                    })
                  : null
              );
            }),
            M = p.default.memo(function (e) {
              var t = e.activityInfo,
                i = void 0 === t ? null : t,
                a = e.onClickShare,
                n = void 0 === a ? function () {} : a;
              return (
                (0, p.useEffect)(function () {
                  if (i) {
                    var e = (0, T.getCurrentPage)();
                    null == e ||
                      e.ubtTrace("s_trn_z_10650063362", {
                        exposureType: "normal",
                        bizKey: "z_grabsuccess_share_money_show",
                      });
                  }
                }, []),
                i
                  ? (0, P.BX)(f.View, {
                      className: "qp-sa-entry flex-align-items-center",
                      children: [
                        (0, P.tZ)(f.Image, {
                          className: "icon",
                          src: i.icon,
                          webp: !0,
                        }),
                        (0, P.tZ)(Z.ZtRichText, {
                          className: "txt flex-1",
                          nodes: i.title,
                        }),
                        (0, P.tZ)(f.View, {
                          className: "r-box flex-align-items-center",
                          id: "AJEh",
                          onClick: n,
                          children: (0, P.tZ)(f.View, {
                            className: "r-box-txt",
                            children: i.jumpName,
                          }),
                        }),
                      ],
                    })
                  : null
              );
            }),
            H = p.default.memo(function (e) {
              var t,
                i,
                a,
                n,
                r = e.detail,
                o = void 0 === r ? null : r,
                s = e.orderTips,
                c = void 0 === s ? "" : s,
                l = e.isShowFloatTip,
                d = void 0 !== l && l,
                m = e.marketingInfo,
                u = void 0 === m ? null : m,
                h = e.onCloseFloatTip,
                p = void 0 === h ? function () {} : h,
                g = e.onClickOrder,
                w = void 0 === g ? function () {} : g;
              if (!o) return null;
              var b = ""
                .concat(o.fromTime || "", " ")
                .concat(o.fromStation, " - ")
                .concat(o.toTime || "", " ")
                .concat(o.toStation);
              return (
                null !== (t = o.originalEntranceInfo) &&
                  void 0 !== t &&
                  t.ticketTime &&
                  (b = ""
                    .concat(o.originalEntranceInfo.ticketTime || "", " ")
                    .concat(o.originalEntranceInfo.stationName || "", " - ")
                    .concat(o.toTime || "", " ")
                    .concat(o.toStation)),
                (0, P.BX)(f.View, {
                  className: "qp-order-detail ".concat(u ? "" : "mt16"),
                  children: [
                    (0, P.BX)(f.View, {
                      className: "ticket-box flex-align-items-center",
                      children: [
                        (0, P.BX)(f.View, {
                          className: "l-box",
                          children: [
                            (0, P.tZ)(f.View, {
                              className: "station",
                              children: b,
                            }),
                            (0, P.BX)(f.View, {
                              className: "train",
                              children: [
                                (0, P.tZ)(f.Text, {
                                  children: ""
                                    .concat(o._departureDateStr, "出发 ")
                                    .concat(o.trainNo),
                                }),
                                !o._allResOrRefund &&
                                  ((null === (i = o.originalEntranceInfo) ||
                                  void 0 === i
                                    ? void 0
                                    : i.originalEntrance) ||
                                    o.entrance) &&
                                  (0, P.tZ)(f.Text, {
                                    className: "entrance",
                                    children:
                                      (null === (a = o.originalEntranceInfo) ||
                                      void 0 === a
                                        ? void 0
                                        : a.originalEntrance) || o.entrance,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.BX)(f.View, {
                          className: "btn",
                          children: [
                            d &&
                              (0, P.tZ)(f.Image, {
                                className: "tip-float",
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/qpcg/notice_tuigai.webp",
                                id: "AJEf",
                                onClick: p,
                              }),
                            (0, P.tZ)(f.View, {
                              id: "AJEg",
                              onClick: w,
                              children: "订单详情",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (null === (n = o.ticketInfoList) || void 0 === n
                      ? void 0
                      : n.length) > 0 &&
                      (0, P.tZ)(f.View, {
                        className: "passenger-box",
                        children: o.ticketInfoList.map(function (e, t) {
                          return (0,
                          P.BX)(f.Block, { children: [(0, P.BX)(f.View, { className: "item flex-align-items-center", children: [(0, P.BX)(f.View, { className: "l-box flex-align-items-center", children: [(0, P.tZ)(f.View, { className: "txt_1 mr8 ".concat(1 === e.ticketStatus || 2 === e.ticketStatus ? "disabled" : ""), children: e.passengerName }), (0, P.tZ)(f.View, { className: "p-type txt_2 bd-1rpx", children: e.passengerType }), (1 === e.ticketStatus || 2 === e.ticketStatus) && (0, P.tZ)(f.View, { className: "desc", children: 1 === e.ticketStatus ? "(已改签)" : "(已退票)" })] }), (0, P.BX)(f.View, { className: "r-box flex-align-items-center", children: [e.seatFlag && (0, P.tZ)(f.View, { className: "txt_2 tag bd-1rpx mr8", children: e.seatFlag }), (0, P.tZ)(f.View, { className: "txt_1 mr8 ".concat(1 === e.ticketStatus || 2 === e.ticketStatus ? "disabled" : ""), children: e.seatNo }), o.seatName && (0, P.tZ)(f.View, { className: "txt_3 mr8", children: o.seatName }), e.ticketPrice && (0, P.BX)(f.View, { className: "txt_3", children: ["¥", e.ticketPrice] })] })] }), t !== o.ticketInfoList.length - 1 && (0, P.tZ)(f.View, { className: "h-line" })] }, t);
                        }),
                      }),
                    c &&
                      (0, P.tZ)(f.View, {
                        className: "order-tips",
                        children: c,
                      }),
                  ],
                })
              );
            }),
            K = p.default.memo(function (e) {
              var t = e.content;
              return t && 0 !== t.length
                ? (0, P.BX)(f.View, {
                    className: "activity-center-box",
                    children: [
                      (0, P.tZ)(f.View, {
                        className: "tit",
                        children: "活动中心",
                      }),
                      (0, P.tZ)(f.Swiper, {
                        className: "activity-center-swiper",
                        interval: "2000",
                        autoplay: !0,
                        circular: !0,
                        children: t.map(function (e, t) {
                          return (0, P.tZ)(
                            f.SwiperItem,
                            {
                              children: (0, P.tZ)(f.Image, {
                                className: "img-activity",
                                src: e.image,
                                id: "AJEd",
                                onClick: function () {
                                  !(function (e) {
                                    O.Z.commonNavigator(e.jumpUrl);
                                  })(e);
                                },
                              }),
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  })
                : null;
            }),
            W = i(59076),
            Y = N.default.isTieyou,
            Q =
              (0, b.h)(!1, { usePageWrapper: !0 })(
                (a = (function (e) {
                  (0, u.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var a;
                    return (
                      (0, d.Z)(this, i),
                      ((a = t.call(this, e)).pageId = N.default.isTieyou
                        ? "10650063362"
                        : "10650063364"),
                      (a.pageRootClassName = "grab-success-page"),
                      (a.state = {
                        pageLoading: !0,
                        oid: "",
                        grabSuccessTrainInfo: null,
                        grabOrderTaskInfo: null,
                        rewardInfo: null,
                        rewardPrizeIndex: 0,
                        mayDayActivityBannerInfo: null,
                        mayDayActivityPopInfo: null,
                        orderTips: "",
                        showType: "",
                        marketCouponGiftsToastInfo: null,
                        enjoyServiceInfo: null,
                        orderStateInfo: null,
                        marketingInfo: null,
                        isShowDetail: !1,
                        isShowFloatTip: !1,
                      }),
                      a
                    );
                  }
                  return (
                    (0, m.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t = (0, g.getCurrentInstance)().router.params;
                          console.log("grabsuccess onload options == ", t),
                            (this.oid = t.oid || ""),
                            (this.originOrderNumber =
                              t.originOrderNumber || ""),
                            w().hideShareMenu && w().hideShareMenu(),
                            B.CZ.call(this, !0),
                            this.getGrabSuccessInfo().then(function () {
                              e.getShowFloatTip();
                            }),
                            this.getTrainRecommendForGrabOrderDetail(),
                            this.setState({ oid: this.oid }),
                            O.Z.canUseCustomNav ||
                              (w().setBackgroundColor({
                                backgroundColorTop: "#D0E2FB",
                              }),
                              w().setNavigationBarColor({
                                backgroundColor: "#D0E2FB",
                              }));
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          this.pageShow();
                        },
                      },
                      {
                        key: "pageShow",
                        value: function () {
                          k.ET.isReschedule = !1;
                        },
                      },
                      {
                        key: "onPageScroll",
                        value: function () {
                          var e = this;
                          this.isScrolling
                            ? (clearTimeout(this.scrollTimer),
                              (this.scrollTimer = setTimeout(function () {
                                (e.isScrolling = !1),
                                  e.setState({ isScrolling: !1 });
                              }, 300)))
                            : ((this.isScrolling = !0),
                              this.setState({ isScrolling: !0 }),
                              (this.scrollTimer = setTimeout(function () {
                                (e.isScrolling = !1),
                                  e.setState({ isScrolling: !1 });
                              }, 300)));
                        },
                      },
                      {
                        key: "getGrabSuccessInfo",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, i, a, n, r, o, s, l, d, m, u;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (0, T.showLoading)(),
                                          (t = { originOrderNumber: this.oid }),
                                          this.originOrderNumber &&
                                            this.originOrderNumber !==
                                              this.oid &&
                                            (t = {
                                              originOrderNumber:
                                                this.originOrderNumber,
                                              orderNumber: this.oid,
                                            }),
                                          (e.next = 6),
                                          (0, x.K4P)(t)
                                        );
                                      case 6:
                                        if (1 !== (i = e.sent).resultCode) {
                                          e.next = 19;
                                          break;
                                        }
                                        if (
                                          ((a = i.orderTicketList),
                                          (n = void 0 === a ? [] : a),
                                          (r = i.grabOrderTaskInfo),
                                          (o = i.tips),
                                          (s = i.rewardInfo),
                                          (l = i.enjoyServiceInfo),
                                          (d = i.orderStateInfo),
                                          (m = i.marketingInfo),
                                          Array.isArray(n) && 0 != n.length)
                                        ) {
                                          e.next = 12;
                                          break;
                                        }
                                        return (
                                          this.showCommonDialog({
                                            content:
                                              "未找到该订单，请确认您的账号是否登录正确~",
                                            onButtonClick: function () {
                                              w().switchTab({
                                                url: "/pages/myctrip/list/list",
                                              });
                                            },
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 12:
                                        ((u = n[0])._departureDateStr = D()(
                                          u.fromDate
                                        ).format("M月DD号")),
                                          (u._allResOrRefund =
                                            u.ticketInfoList.every(function (
                                              e
                                            ) {
                                              return (
                                                1 === e.ticketStatus ||
                                                2 === e.ticketStatus
                                              );
                                            })),
                                          1 === d.vipFlag
                                            ? this.setPageBackgroundImage(
                                                "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/qpcg/head_bg_VIP_xcx.png"
                                              )
                                            : 1 === d.bgScene
                                            ? this.setPageBackgroundImage(
                                                "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/qpcg/head_bg_miaosha_xcx.png"
                                              )
                                            : this.setPageBackgroundImage(
                                                "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/qpcg/head_bg_zx_xcx.png"
                                              ),
                                          this.setState({
                                            rewardInfo: s,
                                            grabSuccessTrainInfo: u,
                                            grabOrderTaskInfo: r,
                                            orderTips: o || "",
                                            enjoyServiceInfo: l,
                                            orderStateInfo: d,
                                            marketingInfo: m,
                                          }),
                                          (e.next = 20);
                                        break;
                                      case 19:
                                        throw new Error(i.resultMessage);
                                      case 20:
                                        e.next = 25;
                                        break;
                                      case 22:
                                        (e.prev = 22),
                                          (e.t0 = e.catch(0)),
                                          console.log(e.t0);
                                      case 25:
                                        return (
                                          (e.prev = 25),
                                          (0, T.hideLoading)(),
                                          this.setState({ pageLoading: !1 }),
                                          e.finish(25)
                                        );
                                      case 29:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 22, 25, 29]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "setOrderTrace",
                        value: function (e) {
                          if (
                            e.grabProcessInfo &&
                            1 === e.grabProcessInfo.processFlag &&
                            (this.newUbtTrace(151870),
                            e.grabProcessInfo.invitedNum > 0 &&
                              this.newUbtTrace(151881),
                            e.grabProcessInfo.studentCardInfo)
                          ) {
                            var t = e.grabProcessInfo.studentCardInfo.status;
                            0 === t
                              ? this.newUbtTrace(151889)
                              : 1 === t
                              ? this.newUbtTrace(151891)
                              : 2 === t && this.newUbtTrace(151893);
                          }
                          !e.grabProcessInfo ||
                            (2 !== e.grabProcessInfo.processFlag &&
                              3 !== e.grabProcessInfo.processFlag) ||
                            (0 === e.grabProcessInfo.unlockFlag
                              ? this.newUbtTrace(151786)
                              : this.newUbtTrace(151808));
                        },
                      },
                      {
                        key: "getShowFloatTip",
                        value: function () {
                          var e = this.state.grabSuccessTrainInfo,
                            t = V.ye.getAttr(this.oid) || {},
                            i = t.showCount || 0;
                          0 === i &&
                            null != e &&
                            e.ticketInfoList.every(function (e) {
                              return ![1, 2].includes(e.ticketStatus);
                            }) &&
                            this.setState({ isShowFloatTip: !0 }),
                            V.ye.setAttr(
                              this.oid,
                              (0, s.Z)(
                                (0, s.Z)({}, t),
                                {},
                                { showCount: i + 1 }
                              )
                            );
                        },
                      },
                      {
                        key: "getTrainCross",
                        value: function () {
                          var e = this,
                            t = this.oid,
                            i = new C.ZP({
                              fromPage: C.y3.grabSuccess,
                              uniqueCountToasts: { travellerToast: t },
                            });
                          Promise.all([
                            (0, x.SON)({
                              orderNumber: this.oid,
                              originOrderNumber: this.originOrderNumber,
                              fromSource: 3,
                              ruleShowInfoList:
                                i.getTrainCrossToastCountInStore4Service(),
                            }),
                            (0, x.uLe)({
                              orderNumber: this.oid,
                              fromSource: 3,
                            }),
                          ])
                            .then(
                              (function () {
                                var t = (0, l.Z)(
                                  (0, c.Z)().mark(function t(a) {
                                    var n,
                                      l,
                                      d,
                                      m,
                                      u,
                                      h,
                                      p,
                                      f,
                                      g,
                                      w,
                                      b,
                                      N,
                                      v,
                                      y,
                                      Z,
                                      S,
                                      T,
                                      I,
                                      k,
                                      C;
                                    return (0, c.Z)().wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            if (
                                              ((n = (0, o.Z)(a, 2)),
                                              (l = n[0]),
                                              (d = n[1]),
                                              (0, r.Z)(d),
                                              (m = l.toasts),
                                              (u = void 0 === m ? [] : m),
                                              (h = l.areas),
                                              (p = void 0 === h ? [] : h),
                                              1 === l.resultCode)
                                            ) {
                                              i.initData({
                                                areas: p,
                                                toasts: u,
                                              }),
                                                (v = []);
                                              try {
                                                (Z = JSON.parse(
                                                  (null ===
                                                    (y = p.find(function (e) {
                                                      return (
                                                        "rotateArea" ===
                                                        e.areaCode
                                                      );
                                                    })) || void 0 === y
                                                    ? void 0
                                                    : y.areaJson) || "{}"
                                                )) &&
                                                  Array.isArray(Z) &&
                                                  Z.forEach(function (e) {
                                                    v.push({
                                                      image: e.imgUrl,
                                                      jumpUrl: e.jumpUrl,
                                                      name: e.name,
                                                    });
                                                  });
                                              } catch (e) {
                                                console.error(e);
                                              }
                                              (null ==
                                                (S =
                                                  null ===
                                                    (f =
                                                      i.getToastCrossScene(
                                                        "giftCounponToast"
                                                      )) || void 0 === f
                                                    ? void 0
                                                    : f._jsonInfo) ||
                                              null === (g = S.data) ||
                                              void 0 === g
                                                ? void 0
                                                : g.length) > 0 &&
                                                e.setState({
                                                  marketCouponGiftsToastInfo: S,
                                                  showType:
                                                    "market-couponGifts-popup",
                                                }),
                                                (T =
                                                  null ===
                                                    (w =
                                                      i.getAreaCrossScene(
                                                        "travellerArea"
                                                      )) || void 0 === w
                                                    ? void 0
                                                    : w._jsonInfo),
                                                e.setState({
                                                  mayDayActivityBannerInfo: T,
                                                }),
                                                (I =
                                                  null ===
                                                    (b =
                                                      i.getToastCrossScene(
                                                        "travellerToast"
                                                      )) || void 0 === b
                                                    ? void 0
                                                    : b._jsonInfo),
                                                e.setState({
                                                  mayDayActivityPopInfo: I,
                                                }),
                                                I &&
                                                  e.setState({
                                                    showType:
                                                      "mayDayActivityPop",
                                                  }),
                                                (k =
                                                  null ===
                                                    (N =
                                                      i.getToastCrossScene(
                                                        "myDayTravelFree"
                                                      )) || void 0 === N
                                                    ? void 0
                                                    : N._jsonInfo) &&
                                                  ((C =
                                                    V.ye.getAttr(e.oid) || {}),
                                                  e.setState({
                                                    myDayTravelFreeInfo: k,
                                                  }),
                                                  !k.toast ||
                                                    (null != C &&
                                                      C.hasShowMayDayTravelFreePop) ||
                                                    (e.setState({
                                                      showType:
                                                        "my-day-travel-free-pop",
                                                    }),
                                                    V.ye.setAttr(
                                                      e.oid,
                                                      (0, s.Z)(
                                                        (0, s.Z)({}, C),
                                                        {},
                                                        {
                                                          hasShowMayDayTravelFreePop:
                                                            !0,
                                                        }
                                                      )
                                                    ))),
                                                e.setState({
                                                  activityCenterBoxInfo: v,
                                                });
                                            }
                                          case 4:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                );
                                return function (e) {
                                  return t.apply(this, arguments);
                                };
                              })()
                            )
                            .catch(function (t) {
                              console.log(t),
                                e.ubtDevTrace(
                                  "o_train_grabsuccess_cross_error",
                                  { fromPage: "grabsuccess", err: t.toString() }
                                );
                            });
                        },
                      },
                      {
                        key: "getTrainRecommendForGrabOrderDetail",
                        value: function () {
                          var e = this;
                          if (
                            (console.log(
                              "八爪鱼开关配置",
                              (0, _.Uy)("isUseCrossSysInTrainGrabSuccess")
                            ),
                            (0, _.Uy)("isUseCrossSysInTrainGrabSuccess"))
                          )
                            return this.getTrainCross();
                          (0, W.hA)({
                            orderNumber: this.oid,
                            fromPage: "grabSuccess",
                          })
                            .then(
                              (function () {
                                var t = (0, l.Z)(
                                  (0, c.Z)().mark(function t(i) {
                                    var a, n, r, o, l, d, m, u;
                                    return (0, c.Z)().wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            1 === i.resultCode &&
                                              ((a = i.commonToastList),
                                              (n = void 0 === a ? [] : a),
                                              (r = i.commonBannerList),
                                              (o = void 0 === r ? [] : r),
                                              (l = (l =
                                                Array.isArray(o) && o.length > 0
                                                  ? o.find(function (e) {
                                                      return (
                                                        "weixinDiversion" ===
                                                        e.bannerName
                                                      );
                                                    })
                                                  : null)
                                                ? JSON.parse(l.bannerJson)
                                                : null) &&
                                                (l._height =
                                                  ((U.ZP.windowWidth - 40) /
                                                    375) *
                                                  64),
                                              console.log(
                                                "friendActivityInfo",
                                                l
                                              ),
                                              (d = (d =
                                                Array.isArray(o) && o.length > 0
                                                  ? o.find(function (e) {
                                                      return (
                                                        "Traveller" ===
                                                        e.bannerName
                                                      );
                                                    })
                                                  : null)
                                                ? JSON.parse(d.bannerJson)
                                                : null),
                                              e.setState({
                                                mayDayActivityBannerInfo: d,
                                              }),
                                              (m = (m =
                                                Array.isArray(n) && n.length > 0
                                                  ? n.find(function (e) {
                                                      return (
                                                        "Traveller" ===
                                                        e.toastType
                                                      );
                                                    })
                                                  : null)
                                                ? JSON.parse(m.toastJson)
                                                : null),
                                              e.setState({
                                                mayDayActivityPopInfo: m,
                                              }),
                                              (u = V.ye.getAttr(e.oid) || {}),
                                              !m ||
                                                (null != u &&
                                                  u.hasShowMayDayActivityPop) ||
                                                (e.setState({
                                                  showType: "mayDayActivityPop",
                                                }),
                                                V.ye.setAttr(
                                                  e.oid,
                                                  (0, s.Z)(
                                                    (0, s.Z)({}, u),
                                                    {},
                                                    {
                                                      hasShowMayDayActivityPop:
                                                        !0,
                                                    }
                                                  )
                                                )));
                                          case 1:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                );
                                return function (e) {
                                  return t.apply(this, arguments);
                                };
                              })()
                            )
                            .catch(function (e) {
                              return console.log(e);
                            });
                        },
                      },
                      {
                        key: "jumpH5Url",
                        value: function (e) {
                          y.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "onCloseFloatTip",
                        value: function () {
                          this.setState({ isShowFloatTip: !1 });
                        },
                      },
                      {
                        key: "onClickToOrder",
                        value: function () {
                          this.newUbtTrace(195698),
                            w().navigateTo({
                              url: z.ZP.getTrainDetailUrl(
                                this.originOrderNumber || this.oid
                              ),
                            });
                        },
                      },
                      {
                        key: "handleSelectReward",
                        value: function (e) {
                          this.setState({ rewardPrizeIndex: e });
                        },
                      },
                      {
                        key: "handleConfirmReward",
                        value: function () {
                          var e = this;
                          this.newUbtTrace(201290);
                          var t = this.state,
                            i = t.rewardPrizeIndex,
                            a = (t.rewardInfo || {}).rewardPayInfo;
                          (0, W.cw)({
                            code: a.prizeInfoList[i].code,
                            orderNumber: this.oid,
                          })
                            .then(function (t) {
                              I.ZP.doPayment({
                                orderNumber: t.payOrderNumber,
                                business: "train",
                                title: "打赏",
                              })
                                .then(function () {
                                  e.openRewardSucDialog(),
                                    e.getGrabSuccessInfo();
                                })
                                .catch(function () {
                                  e.closeDialog(),
                                    (0, T.showToast)("没收到小主的赞赏呢~");
                                });
                            })
                            .catch(function () {
                              (0, T.showToast)("网络请求失败，请重试");
                            });
                        },
                      },
                      {
                        key: "openRewardDialog",
                        value: function () {
                          var e = this.state.rewardInfo;
                          this.newUbtTrace(201288),
                            e.rewardFlag
                              ? this.setState({ showType: "hasRewardedDialog" })
                              : (this.setState({ showType: "rewardDialog" }),
                                this.newUbtTrace(201289));
                        },
                      },
                      {
                        key: "closeDialog",
                        value: function () {
                          this.setState({ showType: "" });
                        },
                      },
                      {
                        key: "openRewardSucDialog",
                        value: function () {
                          this.setState({ showType: "rewardSucDialog" });
                        },
                      },
                      {
                        key: "setStateSync",
                        value: function (e) {
                          var t = this;
                          return new Promise(function (i) {
                            t.setState(e, i);
                          });
                        },
                      },
                      {
                        key: "newUbtTrace",
                        value: function (e) {
                          try {
                            this.ubtTrace(e, {
                              openId: v.ZP.openid || "",
                              userName: v.ZP.userName || "",
                              cid: v.ZP.cid || "",
                              oid: this.oid || "",
                            });
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "gotoH5Page",
                        value: function () {
                          this.ubtTrace("c_trn_z_10650063362", {
                            bizKey: "z_grabsuccess_share_money_click",
                          });
                          var e = this.state.marketingInfo;
                          null != e &&
                            e.jumpUrl &&
                            O.Z.commonNavigator(e.jumpUrl);
                        },
                      },
                      {
                        key: "getImageTitle",
                        value: function () {
                          var e = this.state.orderStateInfo,
                            t = void 0 === e ? {} : e,
                            i = "";
                          1 === (null == t ? void 0 : t.vipFlag)
                            ? (i = "vip")
                            : 1 === (null == t ? void 0 : t.bgScene) &&
                              (i = "seckill");
                          return Y
                            ? "vip" === i
                              ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/qpcg/logo_ty_gold.webp"
                              : "seckill" === i
                              ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/qpcg/logo_ty_red.webp"
                              : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/qpcg/logo_ty_blue.webp"
                            : "vip" === i
                            ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/qpcg/logo_zx_gold.webp"
                            : "seckill" === i
                            ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/qpcg/logo_zx_red.webp"
                            : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/qpcg/logo_zx_blue.webp";
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          return (0, P.tZ)(f.Image, {
                            src: this.getImageTitle(),
                            style: { width: "240rpx", height: "36rpx" },
                            webp: !0,
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.pageLoading,
                            a = t.oid,
                            n = t.rewardPrizeIndex,
                            r = t.rewardInfo,
                            o = t.grabSuccessTrainInfo,
                            s = t.orderTips,
                            c = t.grabOrderTaskInfo,
                            l = t.activityCenterBoxInfo,
                            d = t.mayDayActivityBannerInfo,
                            m = t.mayDayActivityPopInfo,
                            u = t.showType,
                            h = t.marketCouponGiftsToastInfo,
                            p = t.enjoyServiceInfo,
                            g = t.orderStateInfo,
                            w = t.marketingInfo,
                            b = t.isShowDetail,
                            N = t.isShowFloatTip,
                            v = t.myDayTravelFreeInfo,
                            y = t.isScrolling,
                            T = r || {},
                            I = T.rewardedInfo,
                            k = T.rewardPayInfo,
                            V = "",
                            C = "",
                            x = "";
                          return (
                            I &&
                              k &&
                              (I.desc.length > 0 &&
                                k.prizeInfoList.length > 0 &&
                                (V = I.desc[0].replace(
                                  "{count}",
                                  k.prizeInfoList[n].spCount
                                )),
                              I.desc.length > 1 &&
                                k.prizeInfoList.length > 0 &&
                                (C = I.desc[1].replace(
                                  "{price}",
                                  1 * k.prizeInfoList[n].spCount
                                )),
                              k.prizeInfoList.length > 0 &&
                                (x = I.subTitle.replace(
                                  "{count}",
                                  k.prizeInfoList[n].spCount
                                ))),
                            (0, P.BX)(f.Block, {
                              children: [
                                i
                                  ? (0, P.tZ)(f.Block, {
                                      children: (0, P.BX)(f.View, {
                                        className: "orderdetail-loading",
                                        children: [
                                          (0, P.tZ)(f.View, {
                                            className: "text",
                                            children:
                                              "正在为你生成订单详情，请耐心等待",
                                          }),
                                          (0, P.tZ)(f.View, {
                                            className: "loading-bar",
                                            children: (0, P.tZ)(f.Icon, {
                                              className: "icon-loading",
                                            }),
                                          }),
                                        ],
                                      }),
                                    })
                                  : (0, P.BX)(f.Block, {
                                      children: [
                                        (0, P.BX)(f.View, {
                                          className: Y ? "ty" : "zx",
                                          children: [
                                            (0, P.BX)(f.View, {
                                              className: "order-box ".concat(
                                                1 ===
                                                  (null == g
                                                    ? void 0
                                                    : g.vipFlag)
                                                  ? "vip"
                                                  : 1 ===
                                                    (null == g
                                                      ? void 0
                                                      : g.bgScene)
                                                  ? "seckill"
                                                  : ""
                                              ),
                                              children: [
                                                g &&
                                                  (0, P.BX)(f.View, {
                                                    className: "order-status",
                                                    children: [
                                                      (0, P.tZ)(f.Image, {
                                                        className: "tit-img",
                                                        src: g.namePrefixImg,
                                                        mode: "heightFix",
                                                      }),
                                                      r &&
                                                        (0, P.BX)(f.View, {
                                                          className: "sub-box",
                                                          children: [
                                                            (0, P.tZ)(f.View, {
                                                              className:
                                                                "sub-tit",
                                                              children: g.desc,
                                                            }),
                                                            (0, P.tZ)(f.View, {
                                                              className:
                                                                "v-line",
                                                            }),
                                                            (0, P.tZ)(f.View, {
                                                              className:
                                                                "reward-btn ".concat(
                                                                  r.rewardFlag
                                                                    ? ""
                                                                    : "unreward"
                                                                ),
                                                              id: "AJEi",
                                                              onClick:
                                                                this
                                                                  .openRewardDialog,
                                                              children: r.tag,
                                                            }),
                                                          ],
                                                        }),
                                                      g.animationImg &&
                                                        (0, P.tZ)(f.Image, {
                                                          className: "bg-img",
                                                          src: g.animationImg,
                                                          webp: !0,
                                                        }),
                                                    ],
                                                  }),
                                                (0, P.BX)(f.View, {
                                                  className: "qp-order",
                                                  children: [
                                                    (0, P.tZ)(M, {
                                                      activityInfo: w,
                                                      onClickShare:
                                                        this.gotoH5Page,
                                                    }),
                                                    (0, P.tZ)(H, {
                                                      detail: o,
                                                      orderTips: s,
                                                      marketingInfo: w,
                                                      isShowFloatTip: N,
                                                      onCloseFloatTip:
                                                        this.onCloseFloatTip,
                                                      onClickOrder:
                                                        this.onClickToOrder,
                                                    }),
                                                    !o &&
                                                      (0, P.BX)(f.View, {
                                                        className:
                                                          "order-white order-success-other",
                                                        children: [
                                                          (0, P.tZ)(f.View, {
                                                            className:
                                                              "top-left",
                                                            children:
                                                              "抢票成功，查看详情",
                                                          }),
                                                          (0, P.tZ)(f.View, {
                                                            className:
                                                              "top-right",
                                                            id: "AJEj",
                                                            onClick:
                                                              this
                                                                .onClickToOrder,
                                                            children:
                                                              "查看订单",
                                                          }),
                                                        ],
                                                      }),
                                                    (0, P.tZ)(G, {
                                                      serviceInfo: p,
                                                      ubtTrace: this.ubtTrace,
                                                    }),
                                                    (0, P.tZ)(K, {
                                                      content: l,
                                                    }),
                                                    (0, P.BX)(f.View, {
                                                      className:
                                                        "qp-detail-white",
                                                      style: b
                                                        ? ""
                                                        : "padding:26rpx 32rpx",
                                                      children: [
                                                        (0, P.BX)(f.View, {
                                                          className: "tit-box",
                                                          children: [
                                                            (0, P.tZ)(f.View, {
                                                              className: "tit",
                                                              children:
                                                                "抢票详情",
                                                            }),
                                                            (0, P.tZ)(f.View, {
                                                              className: "txt",
                                                              id: "AJEk",
                                                              onClick:
                                                                function () {
                                                                  e.setState({
                                                                    isShowDetail:
                                                                      !b,
                                                                  });
                                                                },
                                                              children:
                                                                "详细任务",
                                                            }),
                                                            (0, P.tZ)(f.View, {
                                                              className:
                                                                "iconfont ifont-arr",
                                                              style: b
                                                                ? "transform:rotate(-90deg)"
                                                                : "transform:rotate(90deg)",
                                                              id: "AJEl",
                                                              onClick:
                                                                function () {
                                                                  e.setState({
                                                                    isShowDetail:
                                                                      !b,
                                                                  });
                                                                },
                                                            }),
                                                          ],
                                                        }),
                                                        b &&
                                                          c &&
                                                          (0, P.tZ)(E, {
                                                            data: {
                                                              grabOrder: {
                                                                f_route: ""
                                                                  .concat(
                                                                    c
                                                                      .fromStation
                                                                      .name,
                                                                    " - "
                                                                  )
                                                                  .concat(
                                                                    c.toStation
                                                                      .name
                                                                  ),
                                                                f_passengerNames:
                                                                  c.passenger,
                                                              },
                                                              otherDateStr:
                                                                c.leaveDate,
                                                              otherDateStrVisible:
                                                                !1,
                                                              selectTrainNumberStr:
                                                                c.trainNo,
                                                              selectTrainNumberStrVisible:
                                                                !1,
                                                              otherSeatStr:
                                                                c.seatType,
                                                              otherSeatStrVisible:
                                                                !1,
                                                              CrossStationGrabTicketInfoList:
                                                                c.crossStationFlag
                                                                  ? "已开启"
                                                                  : "未开启",
                                                              CrossStationGrabTicketInfoListVisible:
                                                                !1,
                                                              isShowCrossStationRevise:
                                                                !1,
                                                              canChangeDates:
                                                                !1,
                                                              canChangeTrainNumber:
                                                                !1,
                                                              orderNumber: a,
                                                              mobile: c.mobile,
                                                            },
                                                          }),
                                                      ],
                                                    }),
                                                    (0, P.tZ)(L, {
                                                      orderNumber: a,
                                                      page: 1,
                                                    }),
                                                    (0, P.tZ)(S.Z, {}),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            d &&
                                              (0, P.tZ)(f.Image, {
                                                src: d.imgUrl || d.bannerImgUrl,
                                                className:
                                                  "may-day-activity-banner",
                                                id: "AJEm",
                                                onClick: function () {
                                                  e.jumpH5Url(
                                                    d.jumpUrl || d.bannerJumpUrl
                                                  );
                                                },
                                                webp: !0,
                                              }),
                                          ],
                                        }),
                                        k &&
                                          (0, P.tZ)(Z.ZtActivityPop, {
                                            show: "rewardDialog" === u,
                                            isShowClose: !1,
                                            animation: "scale",
                                            children: (0, P.BX)(f.View, {
                                              className: "reward-dialog",
                                              children: [
                                                (0, P.BX)(f.View, {
                                                  className:
                                                    "reward-dialog-hd ".concat(
                                                      Y ? "ty" : "zx"
                                                    ),
                                                  children: [
                                                    (0, P.tZ)(f.Image, {
                                                      className: "img",
                                                      mode: "aspectFill",
                                                      src: r.icon,
                                                    }),
                                                    (0, P.BX)(f.View, {
                                                      className: "txt",
                                                      children: [
                                                        (0, P.tZ)(f.View, {
                                                          className: "title",
                                                          children: k.title,
                                                        }),
                                                        (0, P.tZ)(f.View, {
                                                          className: "tip",
                                                          children: k.subTitle,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, P.BX)(f.View, {
                                                  className: "reward-dialog-bd",
                                                  children: [
                                                    (0, P.tZ)(f.View, {
                                                      className: "sub-title",
                                                      children: k.tip,
                                                    }),
                                                    (0, P.tZ)(f.View, {
                                                      className:
                                                        "prize-info ".concat(
                                                          Y ? "ty" : "zx"
                                                        ),
                                                      children:
                                                        k.prizeInfoList.map(
                                                          function (t, i) {
                                                            return (0, P.BX)(
                                                              f.View,
                                                              {
                                                                className:
                                                                  n === i
                                                                    ? "item current"
                                                                    : "item",
                                                                id: "AJEn",
                                                                onClick:
                                                                  e.handleSelectReward.bind(
                                                                    e,
                                                                    i
                                                                  ),
                                                                children: [
                                                                  (0, P.tZ)(
                                                                    f.View,
                                                                    {
                                                                      className:
                                                                        "title",
                                                                      children:
                                                                        "打赏",
                                                                    }
                                                                  ),
                                                                  (0, P.BX)(
                                                                    f.View,
                                                                    {
                                                                      className:
                                                                        "money",
                                                                      children:
                                                                        [
                                                                          "¥",
                                                                          t.money,
                                                                        ],
                                                                    }
                                                                  ),
                                                                ],
                                                              },
                                                              t.code
                                                            );
                                                          }
                                                        ),
                                                    }),
                                                    (0, P.tZ)(f.View, {
                                                      className: "btn",
                                                      id: "AJEo",
                                                      onClick:
                                                        this
                                                          .handleConfirmReward,
                                                      children: k.buttonName,
                                                    }),
                                                  ],
                                                }),
                                                (0, P.tZ)(f.View, {
                                                  className: "close-icon",
                                                  id: "AJEp",
                                                  onClick: this.closeDialog,
                                                  children: (0, P.tZ)(f.Icon, {
                                                    type: "cancel",
                                                    color: "#999",
                                                    size: "30",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        I &&
                                          (0, P.tZ)(Z.ZtActivityPop, {
                                            show: "rewardSucDialog" === u,
                                            isShowClose: !1,
                                            animation: "scale",
                                            children: (0, P.BX)(f.View, {
                                              className: "reward-suc-dialog",
                                              children: [
                                                (0, P.BX)(f.View, {
                                                  className: "wrap ".concat(
                                                    Y ? "ty" : "zx"
                                                  ),
                                                  children: [
                                                    (0, P.BX)(f.View, {
                                                      className: "reward-top",
                                                      children: [
                                                        (0, P.tZ)(f.View, {
                                                          className: "title",
                                                          children: I.title,
                                                        }),
                                                        (0, P.tZ)(f.View, {
                                                          className:
                                                            "sub-title",
                                                          children: x,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, P.BX)(f.View, {
                                                      className: "reward-main",
                                                      children: [
                                                        (0, P.tZ)(f.View, {
                                                          className:
                                                            "first-desc",
                                                          children: V,
                                                        }),
                                                        (0, P.tZ)(f.View, {
                                                          className:
                                                            "second-desc",
                                                          children: C,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, P.tZ)(f.View, {
                                                  className: "reward-btn",
                                                  id: "AJEq",
                                                  onClick: this.closeDialog,
                                                  children: I.buttonName,
                                                }),
                                                (0, P.tZ)(f.View, {
                                                  className: "close-icon",
                                                  id: "AJEr",
                                                  onClick: this.closeDialog,
                                                  children: (0, P.tZ)(f.Icon, {
                                                    type: "cancel",
                                                    color: "#999",
                                                    size: "30",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        I &&
                                          (0, P.tZ)(Z.ZtActivityPop, {
                                            show: "hasRewardedDialog" === u,
                                            isShowClose: !1,
                                            animation: "scale",
                                            children: (0, P.BX)(f.View, {
                                              className: "rewarded-dialog",
                                              children: [
                                                (0, P.tZ)(f.View, {
                                                  className: "title",
                                                  children: "您已经打赏啦～",
                                                }),
                                                (0, P.tZ)(f.View, {
                                                  className: "content",
                                                  children:
                                                    "我们会继续努力，为您提供更好的服务",
                                                }),
                                                (0, P.tZ)(f.View, {
                                                  className: "btn ".concat(
                                                    Y ? "ty" : "zx"
                                                  ),
                                                  id: "AJEs",
                                                  onClick: this.closeDialog,
                                                  children: "好的",
                                                }),
                                                (0, P.tZ)(f.View, {
                                                  className: "close-icon",
                                                  id: "AJEt",
                                                  onClick: this.closeDialog,
                                                  children: (0, P.tZ)(f.Icon, {
                                                    type: "cancel",
                                                    color: "#999",
                                                    size: "30",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        m &&
                                          (0, P.tZ)(Z.ZtActivityPop, {
                                            show: "mayDayActivityPop" === u,
                                            onClose: this.closeDialog,
                                            isShowClose: !0,
                                            animation: "scale",
                                            children: (0, P.tZ)(f.Image, {
                                              src: m.imgUrl || m.toastImgUrl,
                                              mode: "aspectFit",
                                              className: "may-day-activity-pop",
                                              id: "AJEu",
                                              onClick: function () {
                                                e.jumpH5Url(
                                                  m.jumpUrl || m.toastJumpUrl
                                                );
                                              },
                                              webp: !0,
                                            }),
                                          }),
                                        (0, P.tZ)(R.Z, {
                                          isShow:
                                            "market-couponGifts-popup" === u,
                                          info: h,
                                          ubtTrace: this.ubtTrace,
                                          onClose: this.closeDialog,
                                          isBuyTicket: !1,
                                        }),
                                        (null == v ? void 0 : v.img) &&
                                          (0, P.tZ)(f.Image, {
                                            src: null == v ? void 0 : v.img,
                                            className: "myDayTrainFree",
                                            style: y
                                              ? "right: -60rpx;opacity:0.6"
                                              : "",
                                            id: "AJEv",
                                            onClick: function () {
                                              e.setState({
                                                showType:
                                                  "my-day-travel-free-pop",
                                              });
                                            },
                                          }),
                                        (null == v ? void 0 : v.img) &&
                                          "my-day-travel-free-pop" === u &&
                                          (0, P.tZ)(j.Z, {
                                            type: "WUYI_FREE_DIALOG",
                                            close: this.closeDialog,
                                            orderNumber: this.oid,
                                          }),
                                      ],
                                    }),
                                (0, P.tZ)(J.Z, {
                                  ref: function (t) {
                                    e.onDialogAttach(t);
                                  },
                                }),
                              ],
                            })
                          );
                        },
                      },
                    ]),
                    i
                  );
                })(p.default.Component))
              ) || a;
          Page(
            (0, n.createPageConfig)(
              Q,
              "pages/trainDetail/grabsuccess/grabsuccess",
              { root: { cn: [] } },
              {
                navigationStyle: "custom",
                navigationBarTitleText: "抢票详情",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [93611, 3322, 36332, 95854, 32690, 77923, 35835, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(3990);
          }
        ),
          e.O();
      },
    ]);
})();
