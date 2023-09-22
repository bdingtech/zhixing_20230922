!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    require("../../../sub-common/7b0b71c08bce3cba294d717f8dd1e5c5.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [9096],
      {
        65351: function (e, t, i) {
          var n = i(32180),
            a = i(57042),
            r = i(24460),
            l = i(81876),
            o = i(21867),
            c = i(86066),
            s = i(45023),
            d = i(52500),
            _ = i(92954),
            h = i.n(_),
            u = i(71515),
            m = i(43884),
            g = i(87298),
            f = i(23577),
            p = i(8079),
            v = i(90729),
            N = i(19972),
            Z = i(32970),
            b = i(8271),
            C = i.n(b),
            y = i(851),
            T = i(78200),
            w = i(69006),
            k = i(79910),
            x = i(90098),
            V = i(48813),
            F = d.default.memo(function (e) {
              var t = e.depart,
                i = e.arrive;
              return (0,
              V.BX)(V.HY, { children: [(0, V.tZ)(w.Z, { title: "".concat(t, " ⇀ ").concat(i), className: "refund-detail-head-view" }), k.Z.canUseCustomNav && (0, V.tZ)(u.View, { className: "head-view-place-holder", style: "padding-top: ".concat(x.Z.statusBarHeight, "px") })] });
            }),
            B = i(12396),
            I = function (e) {
              var t = e.selectDate,
                i = e.onDateChange;
              return (
                e.onCalendarClick,
                (0, V.tZ)(B.Z, { selectDate: t, handleSelectDate: i })
              );
            },
            D = i(22276),
            q = i(90129);
          function S() {
            var e = f.Z.isTieyou ? "ty" : "zx",
              t =
                "https://pic.c-ctrip.com/train/zt/flight/img-sel-none-".concat(
                  e,
                  ".png"
                );
            return (0, V.BX)(u.View, {
              className: " _i _k _l _n _Mq",
              children: [
                (0, V.tZ)(u.Image, {
                  className: " _Nq _fe",
                  src: t,
                  onError: console.log,
                }),
                (0, V.tZ)(u.View, {
                  className: " _dd _Ej",
                  children: "暂无内容",
                }),
                (0, V.tZ)(u.View, {
                  className: " _Kc _mk",
                  children: "非常抱歉，当前日期暂无可改签航班～",
                }),
              ],
            });
          }
          var X,
            j = i(298),
            R = i(49528),
            L = (0, R.lW)({
              zxRegularFont: {
                fontFamily: "android" === f.Z.os ? "zx_regular" : "ZX-Regular",
              },
            }),
            P = d.default.memo(function (e) {
              var t = e.data,
                i = e.onClick;
              if (!t) return (0, V.tZ)(V.HY, {});
              var n = t.changeFlightBasicInfo,
                a = t.changeFlightTripInfo,
                r = t.changeFlightPriceInfoDetail,
                l = n || {},
                o = l.airlineIcon,
                c = l.airlineName,
                s = l.flightNumber,
                d = r || {},
                _ = d.rebookTotalFee,
                h = d.rebookTotalHandlingFee,
                m = d.rebookTotalUpgradeFee,
                g = a || {},
                f = g.departDateTime,
                p = g.arriveDateTime,
                v = g.departTerminal,
                N = g.departAirportShortName,
                Z = g.arriveTerminal,
                b = g.arriveAirportShortName,
                y = g.cabinName,
                T = g.costTime,
                w = g.isDiffDepartAirport,
                k = g.isDiffArriveAirport,
                x = g.subSegment,
                F = g.rebookSubSegment,
                B = (function (e, t) {
                  if (e) {
                    var i =
                      (null == e
                        ? void 0
                        : e.filter(function (e) {
                            return e.stopTime || e.arriveCityName;
                          })) || [];
                    return (null == i ? void 0 : i.length) > 0 ? i.length : 0;
                  }
                  return (
                    (t &&
                      (null == t
                        ? void 0
                        : t.reduce(function (e, t) {
                            var i = t.subSegment;
                            return (
                              (
                                (null == i
                                  ? void 0
                                  : i.filter(function (e) {
                                      return e.arriveCityName || e.stopTime;
                                    })) || []
                              ).length + e
                            );
                          }, 0))) ||
                    0
                  );
                })(x, F),
                I = (function (e) {
                  if (e) {
                    var t = e.length;
                    return 0 == t ? 0 : t - 1;
                  }
                  return 0;
                })(F),
                D = "",
                q = "";
              if (B > 0 && I > 0) (D = "停/转"), (q = "经停中转");
              else if (B > 0 && 0 == I)
                (D = "停"),
                  (q =
                    B > 1
                      ? "".concat(B, "次经停")
                      : "".concat(null == x ? void 0 : x[0].arriveCityName));
              else if (0 == B && I > 0) {
                var S;
                (D = "转"),
                  (q =
                    I > 1
                      ? "".concat(I, "次中转")
                      : "".concat(
                          null !==
                            (S = null == F ? void 0 : F[0].arriveCityName) &&
                            void 0 !== S
                            ? S
                            : ""
                        ));
              }
              var X = [];
              (c || s) &&
                X.push({
                  icon: o || "",
                  text: ""
                    .concat(null != c ? c : "")
                    .concat(null != s ? s : ""),
                }),
                T && X.push({ text: T || "" }),
                y && X.push({ text: y || "" });
              var R = function (e) {
                  return C()(e).format("HH:mm");
                },
                P = function (e) {
                  return "depart" == e
                    ? "".concat(null != N ? N : "").concat(null != v ? v : "")
                    : "arrive" == e
                    ? "".concat(null != b ? b : "").concat(null != Z ? Z : "")
                    : void 0;
                };
              return (0, V.BX)(u.View, {
                className: " _a _dc _Bq _Mb _Cq _i _Ga",
                onClick: function () {
                  null == i || i(t);
                },
                children: [
                  (0, V.BX)(u.View, {
                    style: "flex: 1;",
                    children: [
                      (0, V.BX)(u.View, {
                        className: " _Dq _i _Ga _l",
                        children: [
                          (0, V.BX)(u.View, {
                            children: [
                              (0, V.tZ)(u.View, {
                                className: " _dd _Eq _Oc _Fq",
                                style: L.zxRegularFont,
                                children: R(f),
                              }),
                              (0, V.tZ)(u.View, {
                                className: " _dd _Na _Q",
                                style: { color: w ? "#198cff" : "#222" },
                                children: P("depart"),
                              }),
                            ],
                          }),
                          (0, V.BX)(u.View, {
                            className: " _Gq _db _Hq _p",
                            children: [
                              (0, V.tZ)(u.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/xiaochengxu/zhifei.png",
                                style: "width: 100%; height: 100%",
                              }),
                              (0, V.tZ)(u.View, {
                                className: " _u _Gq _db _s _q _i _k _l _n",
                                children:
                                  D &&
                                  q &&
                                  (0, V.BX)(V.HY, {
                                    children: [
                                      (0, V.tZ)(u.View, {
                                        className: " _dd _Na _Q _jj",
                                        children: D,
                                      }),
                                      (0, V.tZ)(u.View, {
                                        className: " _Kc _Ag _P _jj",
                                        children: q,
                                      }),
                                    ],
                                  }),
                              }),
                            ],
                          }),
                          (0, V.BX)(u.View, {
                            children: [
                              (0, V.tZ)(u.View, {
                                className: " _dd _Eq _Oc _Fq",
                                style: L.zxRegularFont,
                                children: R(p),
                              }),
                              (0, V.tZ)(u.View, {
                                className: " _dd _Na _Q",
                                style: { color: k ? "#198cff" : "#222" },
                                children: P("arrive"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, V.tZ)(u.View, {
                        className: " _i _Ga _l",
                        children: X.map(function (e, t) {
                          return (0,
                          V.BX)(V.HY, { children: [e.icon && (0, V.tZ)(u.Image, { src: e.icon, className: " _fb _Ol _Iq" }), (0, V.tZ)(u.View, { className: " _Kc _Na _Q", children: e.text }), t != X.length - 1 && (0, V.tZ)(u.View, { className: " _wl _Jq _Kq _fl" })] });
                        }),
                      }),
                    ],
                  }),
                  (0, V.BX)(u.View, {
                    className: " _i _k _pf",
                    children: [
                      (0, V.BX)(u.View, {
                        className: " _Ze _rk _Qj _i _Ga _eq _xn",
                        style: (0, j.Z)(
                          (0, j.Z)({}, L.zxRegularFont),
                          null == _ || null == _ ? { fontSize: 18 } : {}
                        ),
                        children: [
                          null !== _ &&
                            (0, V.tZ)(u.Text, {
                              className: " _Ze _G _Q _Iq",
                              style: L.zxRegularFont,
                              children: "¥",
                            }),
                          null == _ || null == _ ? "待确认" : _,
                        ],
                      }),
                      null !== _ &&
                        (0, V.BX)(u.View, {
                          children: [
                            (0, V.tZ)(u.View, {
                              style: "text-align: right",
                              children: (0, V.BX)(u.Text, {
                                className: " _Kc _Na _Q _Di",
                                children: ["手续费¥", h],
                              }),
                            }),
                            (0, V.tZ)(u.View, {
                              style: "text-align: right",
                              children: (0, V.BX)(u.Text, {
                                className: " _Kc _Na _Q _Di",
                                children: ["+机票差价¥", m],
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            }),
            A = (0, d.forwardRef)(function (e, t) {
              var i = e.onFlightClick,
                n = (0, d.useState)([]),
                a = (0, q.Z)(n, 2),
                r = a[0],
                l = a[1],
                o = (0, d.useState)("loading"),
                c = (0, q.Z)(o, 2),
                s = c[0],
                _ = c[1],
                h = function (e, t) {
                  if (!e || 0 == e.length) return [];
                  var i = t.sortType,
                    n = t.orderType,
                    a = {
                      time: {
                        ASC: function (e, t) {
                          var i,
                            n,
                            a =
                              null === (i = e.changeFlightTripInfo) ||
                              void 0 === i
                                ? void 0
                                : i.departDateTime,
                            r =
                              null === (n = t.changeFlightTripInfo) ||
                              void 0 === n
                                ? void 0
                                : n.departDateTime;
                          return +new Date(a) - +new Date(r);
                        },
                        DESC: function (e, t) {
                          var i,
                            n,
                            a =
                              null === (i = e.changeFlightTripInfo) ||
                              void 0 === i
                                ? void 0
                                : i.departDateTime,
                            r =
                              null === (n = t.changeFlightTripInfo) ||
                              void 0 === n
                                ? void 0
                                : n.departDateTime;
                          return +new Date(r) - +new Date(a);
                        },
                      },
                      price: {
                        ASC: function (e, t) {
                          var i,
                            n,
                            a =
                              (null == e ||
                              null === (i = e.changeFlightPriceInfoDetail) ||
                              void 0 === i
                                ? void 0
                                : i.rebookTotalFee) || 0,
                            r =
                              (null == t ||
                              null === (n = t.changeFlightPriceInfoDetail) ||
                              void 0 === n
                                ? void 0
                                : n.rebookTotalFee) || 0;
                          return Number(a) - Number(r);
                        },
                        DESC: function (e, t) {
                          var i,
                            n,
                            a =
                              (null == e ||
                              null === (i = e.changeFlightPriceInfoDetail) ||
                              void 0 === i
                                ? void 0
                                : i.rebookTotalFee) || 0,
                            r =
                              (null == t ||
                              null === (n = t.changeFlightPriceInfoDetail) ||
                              void 0 === n
                                ? void 0
                                : n.rebookTotalFee) || 0;
                          return Number(r) - Number(a);
                        },
                      },
                    };
                  return e.sort(a[i][n]);
                };
              return (
                (0, d.useImperativeHandle)(t, function () {
                  return {
                    renderList: function (e) {
                      var t = e || {},
                        i = t.data,
                        n = t.sort;
                      l(n ? h(i, n) : i),
                        _(0 === i.length ? "empty" : "complete");
                    },
                    changeStatus: function (e) {
                      _(e);
                    },
                    sort: function (e) {
                      if (e) {
                        var t = h(r, e);
                        l((0, D.Z)(t));
                      }
                    },
                  };
                }),
                (0, V.BX)(V.HY, {
                  children: [
                    "empty" === s && (0, V.tZ)(S, {}),
                    "complete" === s &&
                      (0, V.BX)(V.HY, {
                        children: [
                          r.map(function (e) {
                            var t;
                            return (0,
                            V.tZ)(P, { data: e, onClick: i }, null === (t = e.changeFlightBasicInfo) || void 0 === t ? void 0 : t.flightNumber);
                          }),
                          (0, V.tZ)(u.View, { className: " _Lq _Z" }),
                        ],
                      }),
                  ],
                })
              );
            }),
            Y = d.default.memo(A),
            H = i(36168),
            O = i(53550),
            z = (0, R.lW)({
              textHightlight: {
                fontFamily: "PingFangSC-Medium",
                color: "#1A8CFF",
                fontWeight: "500",
              },
              iconHightlight: { color: "#1A8CFF", fontWeight: "500" },
            }),
            G = function (e) {
              var t = e.sortInfo,
                i = e.onSortTypeClick,
                n = (0, d.useRef)(),
                a = t.sortType,
                r = t.orderType,
                l = a,
                o = function (e) {
                  return "price" === e
                    ? a === e
                      ? "ASC" == r
                        ? "从低到高"
                        : "从高到低"
                      : "价格"
                    : "time" === e
                    ? a === e
                      ? "ASC" == r
                        ? "从早到晚"
                        : "从晚到早"
                      : "时间"
                    : void 0;
                },
                c = function (e) {
                  var l = "price" === a ? "time" : "price";
                  e === a
                    ? i({
                        sortType: e,
                        orderType: "DESC" === r ? "ASC" : "DESC",
                      })
                    : (n.current
                        ? i(n.current)
                        : i({ sortType: l, orderType: "ASC" }),
                      (n.current = t));
                };
              return (0, V.BX)(H.Z, {
                className: " _jj _gl _kd",
                children: [
                  (0, V.BX)(u.View, {
                    className: " _i _nj _l _n",
                    onClick: function () {
                      c("time");
                    },
                    children: [
                      (0, V.tZ)(O.Z, {
                        className: " _M _dd _Hp",
                        style: "time" == l ? z.iconHightlight : {},
                        children: "󰜇",
                      }),
                      (0, V.tZ)(u.View, {
                        className: " _dd _af _P",
                        style: "time" == l ? z.textHightlight : {},
                        children: o("time"),
                      }),
                    ],
                  }),
                  (0, V.BX)(u.View, {
                    className: " _i _nj _l _n",
                    onClick: function () {
                      c("price");
                    },
                    children: [
                      (0, V.tZ)(O.Z, {
                        className: " _M _dd _Hp",
                        style: "price" == l ? z.iconHightlight : {},
                        children: "󰜆",
                      }),
                      (0, V.tZ)(u.View, {
                        className: " _dd _af _P",
                        style: "price" == l ? z.textHightlight : {},
                        children: o("price"),
                      }),
                    ],
                  }),
                ],
              });
            },
            Q = function (e) {
              var t = e.onClick,
                i = e.showOtherFlightsTip,
                n = void 0 !== i && i,
                a = f.Z.isCRN;
              return (0, V.tZ)(m.Z, {
                start: { x: 1, y: 0 },
                end: { x: 0, y: 0 },
                colors: [
                  "rgba(111, 147, 187, 0.1)",
                  "rgba(111, 147, 187, 0.05)",
                ],
                locations: [0, 1],
                className: " _dc _Up _Tp",
                children: a
                  ? (0, V.BX)(u.Text, {
                      className: " _Vp _Wp",
                      onClick: t,
                      children: [
                        (0, V.tZ)(u.Text, {
                          style: { color: "#FD7100" },
                          children: "改签提醒：",
                        }),
                        "以下是航空公司提供的可改签航班以及价格",
                        n ? "，建议优先改签同航司客票，成功率更高哦" : "",
                        (0, V.tZ)(O.Z, {
                          className: " _C _Ac _xh",
                          children: "󰲫",
                        }),
                      ],
                    })
                  : (0, V.BX)(u.View, {
                      className: " _Vp _Wp",
                      onClick: t,
                      children: [
                        (0, V.tZ)(u.Text, {
                          style: { color: "#FD7100" },
                          children: "改签提醒：",
                        }),
                        "以下是航空公司提供的可改签航班以及价格",
                        n ? "，建议优先改签同航司客票，成功率更高哦" : "",
                        (0, V.tZ)(O.Z, {
                          className: " _C _Ac _xh",
                          children: "󰲫",
                        }),
                      ],
                    }),
              });
            },
            E = function (e) {
              var t = e.explanation,
                i = e.onClose;
              return (0, V.BX)(u.View, {
                className: " _go _kd _p _yc",
                children: [
                  (0, V.tZ)(m.Z, {
                    start: { x: 0, y: 0 },
                    end: { x: 0, y: 1 },
                    colors: ["rgb(255, 255, 255)", "rgb(245, 245, 245)"],
                    locations: [0, 1],
                    className: " _Z _lm _u",
                  }),
                  (0, V.BX)(u.View, {
                    className: " _Xp _p _in",
                    children: [
                      (0, V.tZ)(u.View, {
                        className: " _ok _Yb _V _o",
                        children: "可改签航班说明",
                      }),
                      (0, V.tZ)(u.View, {
                        onClick: i,
                        className: " _u _q _qk",
                        children: (0, V.tZ)(O.Z, {
                          className: " _rk _Bd",
                          children: "󰳭",
                        }),
                      }),
                    ],
                  }),
                  (0, V.tZ)(u.View, {
                    className: " _a _Oa _Yp _Uf _in _p",
                    style: { marginBottom: 80 },
                    children: t.map(function (e, i) {
                      return (0,
                      V.tZ)(u.View, { className: " _Nd _Zp _T", style: { marginBottom: i == t.length - 1 ? 0 : 15 }, children: e }, i);
                    }),
                  }),
                  (0, V.tZ)(H.Z, {
                    children: (0, V.tZ)(u.Button, {
                      className: " _j _Gc _w _Oa",
                      onClick: i,
                      children: (0, V.tZ)(u.Text, {
                        className: " _b _Yb _W",
                        children: "我知道了",
                      }),
                    }),
                  }),
                ],
              });
            },
            M = d.default.memo(function (e) {
              var t = e.tips,
                i = e.explanation,
                n = e.showOtherFlightsTip;
              return (0, V.BX)(V.HY, {
                children: [
                  t &&
                    (0, V.tZ)(u.View, {
                      className: " _Rp _Sp _Tp _Up _Oa _D",
                      children: t,
                    }),
                  (0, V.tZ)(Q, {
                    onClick: function () {
                      var e = (0, _.getCurrentInstance)().page;
                      i &&
                        (null == e ||
                          e.showCommonDrawer({
                            exclusive: !0,
                            hideTitle: !0,
                            hideClose: !0,
                            content: function (e) {
                              var t = e.onClose;
                              return (0, V.tZ)(E, {
                                explanation: i,
                                onClose: t,
                              });
                            },
                            className: " _go _kd _p _yc",
                          }));
                    },
                    showOtherFlightsTip: n,
                  }),
                ],
              });
            }),
            U = function (e) {
              var t = e.onCancel,
                i = e.onConfirm;
              return (0, V.BX)(u.View, {
                className: " _a _kd _yc _p",
                children: [
                  (0, V.tZ)(u.Image, {
                    className: " _Z _Lp _u",
                    src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_Ticket_tui_BG_zx.png",
                  }),
                  (0, V.BX)(u.View, {
                    style: "position: relative; z-index: 1;",
                    children: [
                      (0, V.tZ)(u.View, {
                        className: " _Z _i _l _n _Gi",
                        children: (0, V.tZ)(u.Image, {
                          className: " _Pp _Lp",
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/peitu_quxiao.png",
                        }),
                      }),
                      (0, V.tZ)(u.View, {
                        className: " _dd _pd _Oc _o _Yn",
                        children: "温馨提示",
                      }),
                      (0, V.tZ)(u.View, {
                        className: " _Nd _Ti _U _o _Qp",
                        children:
                          "航班临近起飞时间，请先到值机柜台确认仍可值机后再预订，因误机产生的损失需自行承担",
                      }),
                      (0, V.BX)(u.View, {
                        className: " _i _Ga _Cc _Rh _yc",
                        children: [
                          (0, V.tZ)(u.Button, {
                            className: " _Gc _vd _Oa _j _i _l _n _Qf",
                            onClick: function () {
                              return null == t ? void 0 : t();
                            },
                            children: (0, V.tZ)(u.Text, {
                              className: " _x _Yb _V",
                              children: "取消",
                            }),
                          }),
                          (0, V.tZ)(u.Button, {
                            className: " _Gc _w _Oa _j _i _l _n",
                            onClick: function () {
                              return null == i ? void 0 : i();
                            },
                            children: (0, V.tZ)(u.Text, {
                              className: " _b _Yb _V",
                              children: "确定",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            },
            W = function (e) {
              var t = e.onConfirm,
                i = void 0 === t ? function () {} : t,
                n = e.onCancel,
                a = void 0 === n ? function () {} : n,
                r = (0, _.getCurrentInstance)().page;
              null == r ||
                r.showCommonDrawer({
                  hideTitle: !0,
                  hideClose: !0,
                  exclusive: !0,
                  content: function (e) {
                    var t = e.onClose;
                    return (0, V.tZ)(U, {
                      onCancel: t,
                      onConfirm: function () {
                        t(), i();
                      },
                    });
                  },
                  beforeClose: function () {
                    null == a || a();
                  },
                });
            },
            K = function (e) {
              var t = e.protocolFlightTips,
                i = e.onCancel,
                n = e.onConfirm,
                a = t.title,
                r = t.hint,
                l = t.content,
                o = t.details;
              return (0, V.BX)(u.View, {
                className: " _Oq _jj _kd",
                children: [
                  (0, V.BX)(u.View, {
                    className: " _Xp _p _in",
                    children: [
                      (0, V.tZ)(u.View, {
                        className: " _ok _Yb _V _o",
                        children: "改签至协议航空公司",
                      }),
                      (0, V.tZ)(u.View, {
                        onClick: i,
                        className: " _u _qq _rq",
                        children: (0, V.tZ)(O.Z, {
                          className: " _rk _Bd  _rk _Bd",
                          children: "󰳭",
                        }),
                      }),
                    ],
                  }),
                  (0, V.BX)(u.View, {
                    className: " _Ya _Mb _i _Ga _l _Pq _vi _Qq",
                    children: [
                      (0, V.tZ)(O.Z, {
                        className: " _Rq _I _Sq",
                        children: "",
                      }),
                      (0, V.tZ)(u.Image, {
                        className: " _eg _Vq",
                        src: a || "",
                        mode: "heightFix",
                      }),
                      (0, V.tZ)(u.View, { className: " _cj _bb _Tq _Uq" }),
                      (0, V.tZ)(u.Text, {
                        className: " _F _Rq _Wq _j _yc _Ym _Xm",
                        numberOfLines: 1,
                        children: r,
                      }),
                    ],
                  }),
                  (0, V.tZ)(u.View, { className: " _G _ok _U", children: l }),
                  (0, V.tZ)(u.View, {
                    className: " _Ya _Xq _vi _Zm",
                    children:
                      null == o
                        ? void 0
                        : o.map(function (e, t) {
                            return 0 !== t
                              ? (0, V.BX)(V.HY, {
                                  children: [
                                    (0, V.tZ)(u.View, {
                                      children: (0, V.BX)(u.View, {
                                        children: [
                                          (0, V.tZ)(u.View, {
                                            className: " _Yq _cj _Zq _ar",
                                            style: "marginTop: 2px;",
                                          }),
                                          (0, V.tZ)(u.View, {
                                            className: " _Yq _cj _Zq _ar",
                                          }),
                                          (0, V.tZ)(u.View, {
                                            className: " _Yq _cj _Zq _ar",
                                          }),
                                          (0, V.tZ)(u.View, {
                                            className: " _Yq _cj _Zq _ar",
                                            style: "marginBottom: 2px;",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, V.BX)(u.View, {
                                      className: " _i _Ga _l",
                                      children: [
                                        (0, V.tZ)(u.View, {
                                          className:
                                            " _Rj _Tj _dc _br _i _l _n _On _C _Fc",
                                          children: t + 1,
                                        }),
                                        (0, V.tZ)(u.View, {
                                          className: " _Nd _F",
                                          children: e,
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, V.BX)(
                                  u.View,
                                  {
                                    className: " _i _Ga _l",
                                    children: [
                                      (0, V.tZ)(u.View, {
                                        className:
                                          " _Rj _Tj _dc _br _i _l _n _On _C _Fc",
                                        children: t + 1,
                                      }),
                                      (0, V.tZ)(u.View, {
                                        className: " _Nd _F",
                                        children: e,
                                      }),
                                    ],
                                  },
                                  t
                                );
                          }),
                  }),
                  (0, V.BX)(u.View, {
                    className: " _i _Ga _qf",
                    children: [
                      (0, V.tZ)(u.View, {
                        className: " _i _l _n _j _Lo _cr _Fc _I",
                        onClick: function () {
                          null == i || i();
                        },
                        children: "再想想",
                      }),
                      (0, V.tZ)(u.View, {
                        className: " _i _l _n _j _Lo _dr _Zq _b _I _Xf",
                        onClick: function () {
                          return null == n ? void 0 : n();
                        },
                        children: "接受风险，继续改签",
                      }),
                    ],
                  }),
                ],
              });
            },
            J = function (e) {
              var t = e.protocolFlightTips,
                i = e.onCancel,
                n = void 0 === i ? function () {} : i,
                a = e.onConfirm,
                r = void 0 === a ? function () {} : a;
              if (t) {
                var l = (0, _.getCurrentInstance)().page;
                null == l ||
                  l.showCommonDrawer({
                    exclusive: !0,
                    hideTitle: !0,
                    hideClose: !0,
                    content: function (e) {
                      var i = e.onClose;
                      return (0, V.tZ)(K, {
                        protocolFlightTips: t,
                        onCancel: i,
                        onConfirm: function () {
                          i(), null == r || r();
                        },
                      });
                    },
                    beforeClose: function () {
                      null == n || n();
                    },
                  });
              }
            },
            $ =
              (0, g.h)(!1)(
                (X = (function (e) {
                  (0, o.Z)(i, e);
                  var t = (0, c.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, a.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, s.Z)((0, l.Z)(n), "isIntl", !1),
                      (0, s.Z)((0, l.Z)(n), "params", void 0),
                      (0, s.Z)((0, l.Z)(n), "orderNumber", void 0),
                      (0, s.Z)(
                        (0, l.Z)(n),
                        "flightListRef",
                        d.default.createRef()
                      ),
                      (0, s.Z)((0, l.Z)(n), "rebookSegmentInfo", void 0),
                      (0, s.Z)((0, l.Z)(n), "changeFlightSegment", void 0),
                      (0, s.Z)((0, l.Z)(n), "changePassengerList", void 0),
                      (0, s.Z)((0, l.Z)(n), "childBabyRebookTips", void 0),
                      (0, s.Z)((0, l.Z)(n), "pageId", ""),
                      (n.state = {
                        departDate: "",
                        explanation: [],
                        departCityName: "",
                        arriveCityName: "",
                        showOtherFlightsTip: !1,
                        sortInfo: { sortType: "time", orderType: "ASC" },
                      }),
                      n
                    );
                  }
                  return (
                    (0, r.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            t = this;
                          this.params =
                            (null ===
                              (e = (0, _.getCurrentInstance)().router) ||
                            void 0 === e
                              ? void 0
                              : e.params) || {};
                          var i = this.params,
                            n = i.orderNumber,
                            a = i.departDate,
                            r = i.rebookSegment,
                            l = i.explanation,
                            o = i.isIntl,
                            c = this.handleRebookSegment(r),
                            s = c.changeFlightSegment,
                            d = c.changePassengerList,
                            h = c.departCityName,
                            u = c.arriveCityName;
                          (this.changeFlightSegment = s),
                            (this.rebookSegmentInfo = r),
                            (this.changePassengerList = d || []),
                            (this.orderNumber = n),
                            (this.isIntl = !!o),
                            f.Z.isCRN
                              ? (this.pageId = this.isIntl ? "10650103452" : "")
                              : (this.pageId = this.isIntl
                                  ? "10650103464"
                                  : ""),
                            this.setState(
                              {
                                departDate: a,
                                departCityName: h || "",
                                arriveCityName: u || "",
                                explanation: l,
                              },
                              function () {
                                t.getRebookList();
                              }
                            );
                        },
                      },
                      {
                        key: "handleSortAction",
                        value: function (e) {
                          var t;
                          this.setState({ sortInfo: e }),
                            null === (t = this.flightListRef.current) ||
                              void 0 === t ||
                              t.sort(e);
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return (
                            console.log("getPageId " + this.pageId), this.pageId
                          );
                        },
                      },
                      {
                        key: "handleDateChangeAction",
                        value: function (e) {
                          var t = this;
                          this.state.departDate !== e &&
                            this.setState({ departDate: e }, function () {
                              t.getRebookList();
                            });
                        },
                      },
                      {
                        key: "handleClickCalendar",
                        value: function () {
                          var e = this,
                            t = {
                              defaultDate: [this.state.departDate],
                              type: "single",
                              maxDays: 1,
                            };
                          (0, Z.ym)(t, function (t) {
                            var i = (t || {}).selectDates,
                              n = f.Z.isCRN
                                ? null == i
                                  ? void 0
                                  : i.dateString
                                : i;
                            e.setState({ departDate: n }, function () {
                              e.getRebookList();
                            });
                          });
                        },
                      },
                      {
                        key: "handleRebookSegment",
                        value: function (e) {
                          if (!e) return {};
                          var t = e || {},
                            i = t.segmentIndex,
                            n = t.routeIndex,
                            a = t.flightBasicInfo,
                            r = t.passengerList,
                            l = t.rebookTips,
                            o = a || {};
                          return {
                            changeFlightSegment: {
                              segmentIndex: i,
                              routeIndex: n,
                              oldFlightNumber: o.flightNo,
                              oldAirlineCode: o.airlineCode,
                              oldDepartCityCode: o.departCityCode,
                              oldArriveCityCode: o.arriveCityCode,
                              oldDepartDateTime: o.takeoffTime,
                            },
                            changePassengerList: r,
                            departCityName: o.departCityName,
                            arriveCityName: o.arriveCityName,
                            rebookTips: l,
                          };
                        },
                      },
                      {
                        key: "handleFlightClick",
                        value: function (e) {
                          var t,
                            i,
                            n = this;
                          if (e) {
                            var a = e || {},
                              r = a.changeFlightTripInfo,
                              l = a.changeFlightExtensionData,
                              o = a.protocolFlightTips,
                              c = (r || {}).departDateTime,
                              s = (this.changeFlightSegment || {}).segmentIndex,
                              d = this.state.explanation,
                              _ =
                                null === (t = this.changePassengerList) ||
                                void 0 === t
                                  ? void 0
                                  : t[0].rebookType,
                              u =
                                (null === (i = this.changePassengerList) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return {
                                        passengerId: e.passengerId,
                                        passengerName: e.passengerName,
                                        passengerType: e.passengerType,
                                        cardType: e.cardType,
                                        cardNo: e.cardNo,
                                        commitType: 0,
                                        birthday: e.birthday,
                                        rebookType: e.rebookType,
                                        proofUrlList: [],
                                      };
                                    })) || [],
                              m = function () {
                                var t = {
                                  data: {
                                    orderNumber: n.orderNumber,
                                    rebookType: _,
                                    segmentIndex: s,
                                    changeFlightExtensionData: l,
                                    rebookPassengers: u,
                                  },
                                };
                                (0, N.Q)(),
                                  (0, p.nH)(t)
                                    .then(function (t) {
                                      if (1 == t.resultCode) {
                                        var i = t.data.productId;
                                        (0, T.dZ)(
                                          {
                                            flight: e,
                                            childBabyRebookTips:
                                              n.childBabyRebookTips,
                                            changePassengerList:
                                              n.changePassengerList || [],
                                            explanation: d || [],
                                            productId: i || "",
                                            orderNumber: n.orderNumber,
                                            rebookType: _,
                                            segmentIndex: s,
                                            isIntl: n.isIntl,
                                          },
                                          n
                                        );
                                      } else h().showToast({ icon: "error", title: t.resultMessage || "获取改签条件失败，请重试" });
                                    })
                                    .catch(function () {
                                      h().showToast({
                                        icon: "error",
                                        title: "获取改签条件失败，请重试",
                                      });
                                    })
                                    .finally(N.Z);
                              };
                            C()().add(180, "minute").isAfter(c)
                              ? W({ onConfirm: m.bind(this) })
                              : o
                              ? J({
                                  protocolFlightTips: o,
                                  onConfirm: m.bind(this),
                                  onCancel: function () {},
                                })
                              : m();
                          }
                        },
                      },
                      {
                        key: "getRebookList",
                        value: function () {
                          var e,
                            t = this,
                            i = this.state.departDate,
                            n = (this.rebookSegmentInfo || {}).rebookExtraData,
                            a =
                              (null === (e = this.changePassengerList) ||
                              void 0 === e
                                ? void 0
                                : e.map(function (e) {
                                    return {
                                      birthday: e.birthday,
                                      cardNo: e.cardNo,
                                      cardType: e.cardType,
                                      passengerName: e.passengerName,
                                      passengerType: e.passengerType,
                                      rebookType: e.rebookType,
                                    };
                                  })) || [],
                            r = {
                              data: {
                                version: 0,
                                orderNumber: this.orderNumber,
                                newDepartDate: i,
                                changeFlightSegment: this.changeFlightSegment,
                                changePassengerList: a,
                                rebookExtraData: n,
                              },
                            };
                          (0, N.Q)(),
                            (0, v.m)(p.Oq, r)
                              .then(function (e) {
                                var i,
                                  n = e.searchChangeFlightList,
                                  a = e.childBabyRebookTips,
                                  r = t.state.sortInfo;
                                t.childBabyRebookTips = a;
                                var l = (a || {}).rebookChangeTips,
                                  o = n.some(function (e) {
                                    var t;
                                    return null == e ||
                                      null === (t = e.changeFlightBasicInfo) ||
                                      void 0 === t
                                      ? void 0
                                      : t.isOtherFlight;
                                  });
                                t.setState({
                                  showOtherFlightsTip: o,
                                  rebookChangeTips: l,
                                }),
                                  null === (i = t.flightListRef.current) ||
                                    void 0 === i ||
                                    i.renderList({ data: n, sort: r });
                              })
                              .catch(function () {
                                var e;
                                h().showToast({
                                  title: "网络错误",
                                  icon: "error",
                                }),
                                  null === (e = t.flightListRef.current) ||
                                    void 0 === e ||
                                    e.changeStatus("empty");
                              })
                              .finally(N.Z);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.sortInfo,
                            n = t.departDate,
                            a = t.departCityName,
                            r = t.arriveCityName,
                            l = t.explanation,
                            o = t.showOtherFlightsTip,
                            c = t.rebookChangeTips;
                          return (0, V.BX)(V.HY, {
                            children: [
                              (0, V.BX)(u.View, {
                                className: " _p _Y _vj _Db _i",
                                children: [
                                  (0, V.tZ)(m.Z, {
                                    start: { x: 0, y: 0 },
                                    end: { x: 0, y: 1 },
                                    colors: [
                                      "rgb(166, 203, 255)",
                                      "rgb(245, 245, 245)",
                                    ],
                                    locations: [0, 1],
                                    className: " _u _q _s _t _wj _i",
                                  }),
                                  (0, V.tZ)(F, { depart: a, arrive: r }),
                                  (0, V.tZ)(I, {
                                    selectDate: n,
                                    onDateChange:
                                      this.handleDateChangeAction.bind(this),
                                    onCalendarClick:
                                      this.handleClickCalendar.bind(this),
                                  }),
                                  (0, V.BX)(u.ScrollView, {
                                    scrollY: !0,
                                    className: " _Mb _Aj _sj _Bj _i _j",
                                    children: [
                                      (0, V.tZ)(M, {
                                        tips: c || "",
                                        explanation: l,
                                        showOtherFlightsTip: o,
                                      }),
                                      (0, V.tZ)(Y, {
                                        ref: this.flightListRef,
                                        onFlightClick:
                                          this.handleFlightClick.bind(this),
                                      }),
                                    ],
                                  }),
                                  (0, V.tZ)(G, {
                                    sortInfo: i,
                                    onSortTypeClick:
                                      this.handleSortAction.bind(this),
                                  }),
                                ],
                              }),
                              (0, V.tZ)(y.Z, {
                                ref: function (t) {
                                  return e.onDrawerAttach(t, !0);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(d.default.Component))
              ) || X;
          Page(
            (0, n.createPageConfig)(
              $,
              "pages/taroCRN/flight/pages/rebookList/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#efefef",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                disableScroll: !0,
                navigationBarTitleText: "改签选择",
                enablePullDownRefresh: !1,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98946, 3322, 36332, 95854, 7160, 83004, 59188, 35048, 70486, 97709,
            6189, 22843, 6878, 40980, 40981, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(65351);
          }
        ),
          e.O();
      },
    ]);
})();
