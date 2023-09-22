!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/fecc9c60875b710a8101d0d50626beef.js"),
    require("../sub-common/a55a85f92755291b80f1ffba0a0f2078.js"),
    require("../sub-common/ebaf792912af305d93ba8f963b48e810.js"),
    require("../sub-common/459d6d2489aa070d5ebadb25e6fd6fde.js"),
    require("../sub-common/01c2d1ac82646bd1b3ca4fb3bd1e1490.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [40960],
      {
        67455: function (e, i, t) {
          var n,
            o = t(32180),
            a = t(79301),
            c = t(95308),
            r = t(298),
            s = t(57042),
            l = t(24460),
            _ = t(21867),
            d = t(86066),
            m = t(52500),
            u = t(71515),
            h = t(79792),
            p = t(81957),
            f = t(92954),
            g = t.n(f),
            w = t(79910),
            N = t(49120),
            y = t(18783),
            b = t(58676),
            v = t(21999),
            T = t(93761),
            Z = t(10741),
            V = t(26676),
            k = t(94190),
            x = t(69817),
            I = t(8724),
            B = t(25391),
            C = t(59076),
            P = t(34229),
            S = t(48813),
            F = function (e) {
              var i = e.visible,
                t = e.loadingPopInfo,
                n = e.onClose,
                o = void 0 === n ? function () {} : n,
                a = e.onConfirm,
                c = void 0 === a ? function () {} : a;
              if (!t) return (0, S.tZ)(u.View, {});
              var r = t.leftName && t.rightName;
              return (0, S.tZ)(P.ZtActivityPop, {
                show: i,
                onClose: o,
                children: (0, S.BX)(u.View, {
                  className: " _Vb _be _vE _Pi",
                  style: r ? "padding-bottom: 20px" : "",
                  children: [
                    (0, S.tZ)(u.View, {
                      className: " _vr _fe _Pi _jK _p",
                      children: (0, S.tZ)(u.Image, {
                        src: t.headImg,
                        className: " _Rb _Hg _u _kK _yi _xi",
                      }),
                    }),
                    (0, S.tZ)(u.View, {
                      className: " _o _Vv _Xb _Dv _Te _Qj",
                      children: t.title,
                    }),
                    t.subTitle &&
                      (0, S.tZ)(u.View, {
                        className: " _lK _Ma _YE _U _o",
                        children: t.subTitle,
                      }),
                    r &&
                      (0, S.BX)(u.View, {
                        className: " _i _m _mK",
                        children: [
                          (0, S.tZ)(u.View, {
                            className: " _vi _Gc _uD _oc _nK _Xc _o -oe -pe",
                            id: "AJEz",
                            onClick: o,
                            children: t.leftName,
                          }),
                          (0, S.tZ)(u.View, {
                            className: " _vi _Gc _uD _oc _nK _Xc _o -oe -qe",
                            id: "AJFA",
                            onClick: c,
                            children: t.rightName,
                          }),
                        ],
                      }),
                  ],
                }),
              });
            },
            X = function (e) {
              var i = e.propStyle,
                t = e.refuseBtnName,
                n = e.buttonInfo,
                o = e.productPrice,
                a = e.couponPrice,
                c = void 0 === a ? 0 : a,
                r = e.endPayTime,
                s = e.handleCancelClick,
                l = void 0 === s ? function () {} : s,
                _ = e.handleConfirmClick,
                d = void 0 === _ ? function () {} : _,
                m = e.onTimeEnd,
                h = void 0 === m ? function () {} : m;
              return o
                ? (0, S.tZ)(u.View, {
                    className: "-ue",
                    style: i,
                    children: (0, S.BX)(u.View, {
                      className: "-ve  _Ie _v _r _s _Z _i _m _Vb _BK _o _xD",
                      children: [
                        (0, S.tZ)(u.View, {
                          className: "-we  _cF _dc _yb _CK _x _UJ _fd",
                          id: "AJEx",
                          onClick: l,
                          children: t || "",
                        }),
                        (0, S.BX)(u.View, {
                          className:
                            "-ye  _yb _CK _Mb _En _DK _EK _dc _i _k _n _p",
                          id: "AJEy",
                          onClick: d,
                          children: [
                            (0, S.tZ)(u.View, {
                              className:
                                "-xe  _GK _HK _nc _u _t _di _qb _Cl _S _o _ve _i _l -xe",
                              children: (null == n ? void 0 : n.tag) || "",
                            }),
                            (0, S.tZ)(u.View, {
                              className: " _qb _bd _W",
                              children: (null == n ? void 0 : n.name) || "",
                            }),
                            (0, S.BX)(u.View, {
                              className: " _i _qb _Na _tj _l _R",
                              children: [
                                r &&
                                  (0, S.tZ)(P.ZtCountdown, {
                                    endTime: r,
                                    onTimeup: h,
                                    isShowHour: !1,
                                    className: "expire-time",
                                  }),
                                (0, S.tZ)(u.View, { children: "后自动失效" }),
                                (0, S.tZ)(u.View, {
                                  className: " _Vb _dg _cj _FK",
                                }),
                                (0, S.BX)(u.View, {
                                  className: " _i _l _qb _mr",
                                  children: ["¥", o ? o - c : ""],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, S.tZ)(u.View, {});
            },
            z = t(90129),
            D = t(8271),
            L = t.n(D),
            j = function (e) {
              var i,
                t,
                n = e.propStyle,
                o = e.visible,
                a = void 0 !== o && o,
                c = e.endPayTime,
                r = e.content,
                s = void 0 === r ? {} : r,
                l = e.jlTaskInfo,
                _ = e.oid,
                d = e.couponPrice,
                h = e.ubtTrace,
                p = void 0 === h ? function () {} : h,
                f = e.onClose,
                g = void 0 === f ? function () {} : f,
                N = e.onConfirm,
                y = void 0 === N ? function () {} : N,
                b = e.openScanADVideoPop,
                v = void 0 === b ? function () {} : b,
                T = e.handleFreeBtnClick,
                Z = void 0 === T ? function () {} : T,
                V = e.isTieyou,
                k = void 0 !== V && V,
                x = s.title,
                I = void 0 === x ? "" : x,
                B = s.options,
                C = void 0 === B ? [] : B,
                F = s.refuseBtn,
                X = (0, m.useState)(-1),
                D = (0, z.Z)(X, 2),
                j = D[0],
                K = D[1],
                M = (0, m.useState)(!1),
                E = (0, z.Z)(M, 2),
                q = E[0],
                A = E[1];
              (0, m.useEffect)(
                function () {
                  var e = setInterval(function () {
                    L()(c, "YYYY-MM-DD HH:mm:ss").diff(L()(), "s") > 60
                      ? A(!1)
                      : A(!0);
                  }, 1e3);
                  return function () {
                    clearInterval(e);
                  };
                },
                [c]
              );
              var O = !(!l || 0 !== j || q);
              if (
                ((0, m.useEffect)(
                  function () {
                    O &&
                      a &&
                      p(205916, {
                        exposureType: "normal",
                        bizKey: "z_jianlou_giveup_lanjie_freeagent_show",
                        orderId: _,
                      });
                  },
                  [O, a]
                ),
                !s)
              )
                return (0, S.tZ)(u.View, {});
              var H = 0;
              return (
                C.forEach(function (e) {
                  var i,
                    t =
                      (null === (i = e.descs) || void 0 === i
                        ? void 0
                        : i.length) || 0;
                  H <= t && (H = t);
                }),
                (0, S.tZ)(P.ZtDrawer, {
                  show: a,
                  title: I || "",
                  onClose: g,
                  onWrapClose: g,
                  closeIconParams: {
                    type: "cancel",
                    size: "22px",
                    color: "#c3c3c3",
                  },
                  children: (0, S.BX)(u.View, {
                    style: n,
                    children: [
                      (0, S.tZ)(u.View, {
                        className: ""
                          .concat(" _wM _i _m _Vb _Oa _xM -qf", " ")
                          .concat(k ? "ty" : "zx"),
                        children: C.map(function (e, i) {
                          return (0, S.BX)(
                            u.View,
                            {
                              className: ""
                                .concat("-rf  _i _k _l _Ak _Oa _yM _pF", " ")
                                .concat(j === i && "-sf"),
                              id: "AJFK",
                              onClick: function () {
                                K(i);
                              },
                              children: [
                                (0, S.tZ)(u.Image, {
                                  className: " _bc _ms",
                                  src: e.icon,
                                }),
                                (0, S.tZ)(u.View, {
                                  className: " _Xb _hu _V _cg",
                                  children: e.title,
                                }),
                                (0, S.BX)(u.View, {
                                  className: ""
                                    .concat(" _Ac _Ma _mF _R -uf", " ")
                                    .concat(i > 0 ? "-vf" : ""),
                                  children: [
                                    "¥ ",
                                    e.price > 0 ? e.price - (d || 0) : 0,
                                    "/人",
                                  ],
                                }),
                                d > 0 &&
                                  (i > 0
                                    ? (0, S.BX)(u.View, {
                                        className:
                                          " _yl _nc _S _hb _ve _sA _zM _AM",
                                        children: ["券已抵扣¥", d],
                                      })
                                    : (0, S.tZ)(u.View, {
                                        className: " _nc _AM",
                                      })),
                                (0, S.tZ)(u.View, {
                                  className: " _cg _Ug _Yq _BM",
                                }),
                                (0, S.tZ)(u.View, {
                                  className: " _i _k _l _Xk",
                                  children: new Array(H)
                                    .fill(0)
                                    .map(function (i, t) {
                                      return (0,
                                      S.tZ)(u.View, { className: " _De _i _l _Ac -wf", children: 1 !== e.optionType ? (0, S.tZ)(P.ZtRichText, { className: " _fL _Q _Ma", nodes: e.descs[t] }) : (0, S.BX)(u.View, { className: " _fL _Q _i _l", children: [(0, S.tZ)(u.View, { className: " _CM _Bb _dg" }), (0, S.tZ)(P.ZtRichText, { className: " _cf", nodes: e.descs[t] || "" })] }) }, t);
                                    }),
                                }),
                                (0, S.tZ)(u.View, {
                                  className: ""
                                    .concat("-tf  _kg _Ua _Ta _DM", " ")
                                    .concat(j === i ? "-sf" : "", " ")
                                    .concat(k ? "ty" : "zx"),
                                }),
                              ],
                            },
                            e.title
                          );
                        }),
                      }),
                      (0, S.BX)(u.View, {
                        className: ""
                          .concat(" _Vb _xD _i _m _l -xf", " ")
                          .concat(j > -1 ? "" : "-yf", " ")
                          .concat(k ? "ty" : "zx"),
                        children: [
                          O &&
                            (0, S.BX)(u.View, {
                              className: " _cF _dc _yb _Kh _Mb _o -Bf",
                              id: "AJFL",
                              onClick: function () {
                                return (function (e) {
                                  p(205918, {
                                    exposureType: "normal",
                                    bizKey:
                                      "z_jianlou_giveup_lanjie_freeagent_click",
                                    orderId: _,
                                  }),
                                    Z();
                                  var i = null == e ? void 0 : e.taskType,
                                    t = null == e ? void 0 : e.taskJumpUrl;
                                  1 == i
                                    ? w.Z.commonNavigator(t)
                                    : 2 === i &&
                                      (p(205916, {
                                        exposureType: "normal",
                                        bizKey:
                                          "z_jianlou_giveup_lanjie_video_show",
                                        orderId: _,
                                      }),
                                      v(t));
                                })(l);
                              },
                              children: [
                                (0, S.tZ)(u.View, {
                                  className: " _cg _x _UJ _Ld _W",
                                  children: l.freeTicketBtn,
                                }),
                                (0, S.tZ)(u.View, {
                                  className: " _EM _mF _eg _R",
                                  children: l.taskDesc,
                                }),
                              ],
                            }),
                          (0, S.BX)(u.View, {
                            className: ""
                              .concat("-zf  _o _EK _dc _CK _yb _Mb", " ")
                              .concat(j < 0 ? "-yf" : "", " ")
                              .concat(O ? "" : "-Af"),
                            id: "AJFM",
                            onClick: function () {
                              j > -1 && y(C[j]);
                            },
                            children: [
                              (0, S.tZ)(u.View, {
                                className: " _cg _qb _UJ _W",
                                children: "".concat(0 === j ? F : "确认出票"),
                              }),
                              0 === j
                                ? (0, S.BX)(u.View, {
                                    className: " _qb _tj _mF _R",
                                    children: [
                                      "抢票成功时间未知",
                                      null !== (i = C[j]) &&
                                      void 0 !== i &&
                                      i.price
                                        ? " ¥" + C[j].price
                                        : "",
                                    ],
                                  })
                                : (0, S.BX)(u.View, {
                                    className: " _i _qb _Na _tj _l _R _n _Bi",
                                    children: [
                                      "剩余",
                                      c &&
                                        (0, S.tZ)(P.ZtCountdown, {
                                          endTime: c,
                                          isShowHour: !1,
                                          className: "expire-time",
                                        }),
                                      (0, S.tZ)(u.View, {
                                        children: "后自动失效",
                                      }),
                                      (0, S.tZ)(u.View, {
                                        children:
                                          null !== (t = C[j]) &&
                                          void 0 !== t &&
                                          t.price
                                            ? " ¥" + (C[j].price - (d || 0))
                                            : "",
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              );
            },
            K = t(61957),
            M = t(4102),
            E = function (e) {
              var i,
                t,
                n = e.ticketInfo,
                o = e.propStyle,
                a = e.customStyle,
                c = void 0 === a ? {} : a,
                r = n || {},
                s = r.trainNumber,
                l = r.departStation,
                _ = r.arriveStation,
                d = r.departTime,
                m = r.arriveTime,
                p = r.departDate,
                f = r.arriveDate,
                g = r.costTime;
              if (!n) return (0, S.tZ)(u.View, {});
              var w = M.Z.formatDate(p, "M月D日"),
                N = M.Z.getWeekDayDesc(p),
                y = M.Z.formatDate(f, "M月D日"),
                b = M.Z.getWeekDayDesc(f);
              return (0, S.tZ)(u.View, {
                className: "ticket-info-box",
                style: o,
                children: (0, S.BX)(u.View, {
                  className: ""
                    .concat(" _p _i", " ")
                    .concat(h.default.isTieyou ? "ty" : "zx"),
                  children: [
                    (0, S.BX)(u.View, {
                      className: " _j _Fe",
                      children: [
                        (0, S.tZ)(u.View, {
                          className: " _oc _F _eg _R",
                          style: c.date,
                          children: w + " " + N,
                        }),
                        (0, S.tZ)(u.View, {
                          className: " _p _ub _Xb _oM _db _Mj",
                          style: c.strong,
                          children:
                            (null === (i = d.slice) || void 0 === i
                              ? void 0
                              : i.call(d, 0, 5)) || "",
                        }),
                        (0, S.tZ)(u.View, {
                          className: " _Km _Xb _Oj _Ua _U",
                          style: c.station,
                          children: l,
                        }),
                      ],
                    }),
                    (0, S.BX)(u.View, {
                      className: " _nM _at _o",
                      children: [
                        (0, S.tZ)(u.View, {
                          className: " _Ym _oc _mF _eg _R",
                          style: c.costTime,
                          children: g,
                        }),
                        (0, S.tZ)(u.View, {
                          className: " _Z _Ia _Km",
                          style: c.arrow,
                          children: (0, S.tZ)(u.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon_ht_lb@3x.png",
                            className: " _h _dm _at _Ia",
                          }),
                        }),
                        (0, S.tZ)(u.View, {
                          className: " _Ac _Xb _E _eg _R",
                          style: c.trainNumber,
                          children: s,
                        }),
                      ],
                    }),
                    (0, S.BX)(u.View, {
                      className: " _j _Di",
                      children: [
                        (0, S.tZ)(u.View, {
                          className: " _oc _F _eg _R",
                          style: c.date,
                          children: y + " " + b,
                        }),
                        (0, S.tZ)(u.View, {
                          className: " _p _ub _Xb _oM _db _Mj",
                          style: c.strong,
                          children:
                            (null === (t = m.slice) || void 0 === t
                              ? void 0
                              : t.call(m, 0, 5)) || "",
                        }),
                        (0, S.tZ)(u.View, {
                          className: " _Km _Xb _Oj _Ua _U",
                          style: c.station,
                          children: _,
                        }),
                      ],
                    }),
                  ],
                }),
              });
            },
            q = m.default.memo(function (e) {
              var i,
                t = e.passengerInfo,
                n = void 0 === t ? {} : t,
                o = e.scrollLeft,
                a = void 0 === o ? 0 : o,
                c = e.isShowSeatNo,
                r = void 0 !== c && c,
                s = e.propStyle,
                l = e.customStyle,
                _ = void 0 === l ? {} : l;
              return (0, S.tZ)(u.ScrollView, {
                scrollX: !0,
                className: " _YL _pb _ZL _Yi _aM _Mb _i _bM",
                enableFlex: !0,
                scrollWithAnimation: !0,
                scrollLeft: a,
                style: s,
                children:
                  null == n || null === (i = n.passengers) || void 0 === i
                    ? void 0
                    : i.map(function (e, i) {
                        return (0,
                        S.BX)(u.View, { className: "".concat(" _i _zB _l _Ld -gf -hf", " ").concat(1 === n.passengers.length ? "-if" : ""), children: [(0, S.tZ)(u.View, { className: " _qb _mu _W", style: _.name, children: e.passengerName }), !r && (0, S.BX)(S.HY, { children: [-1 !== ["儿童", "学生"].indexOf(e.passengerType) ? (0, S.tZ)(u.View, { className: " _Zg _cM _gb _P _ga _o _aJ _uG", style: _.type, children: e.passengerType + "票" }) : (0, S.tZ)(u.View, { className: "type-blank" }), (0, S.tZ)(u.View, { className: "-jf  _Xf _aJ _iu _W", style: _.detail, children: e.seatName + " ¥" + e.seatPrice })] }), r && (0, S.BX)(S.HY, { children: [(0, S.tZ)(u.View, { className: "type-blank" }), -1 !== ["儿童", "学生"].indexOf(e.passengerType) ? (0, S.tZ)(u.View, { className: " _Zg _cM _gb _P _ga _o _aJ _uG", style: _.type, children: e.passengerType + "票" }) : (0, S.tZ)(u.View, { className: "type-blank" }), (0, S.tZ)(u.View, { className: "-jf  _Xf _aJ _iu _W", style: _.detail, children: e.seatName + " " + e.seatNo })] })] }, i);
                      }),
              });
            }),
            A = m.default.memo(function (e) {
              var i,
                t,
                n,
                o,
                a = e.isShow,
                c = void 0 !== a && a,
                r = e.retainDrawerInfo,
                s = void 0 === r ? {} : r,
                l = e.ticketInfo,
                _ = void 0 === l ? {} : l,
                d = e.passengerInfo,
                m = void 0 === d ? {} : d,
                h = e.scrollLeft,
                p = void 0 === h ? 0 : h,
                f = e.price,
                g = void 0 === f ? 0 : f,
                w = e.onCancel,
                N = void 0 === w ? function () {} : w,
                y = e.onConfirm,
                b = void 0 === y ? function () {} : y,
                v = e.onClose,
                T = void 0 === v ? function () {} : v,
                Z = s.btns || [];
              return (0,
              S.tZ)(u.View, { className: "-Ef", children: (0, S.BX)(P.ZtDrawer, { show: c, onWrapClose: T, onClose: T, children: [(0, S.tZ)(P.ZtRichText, { className: " _sb _xx _bc _Uc", nodes: s.title, space: "nbsp" }), (0, S.tZ)(P.ZtRichText, { className: " _Ma _pu _De _Uc _ub", nodes: s.subTitle, space: "nbsp" }), _ && (0, S.BX)(u.View, { className: " _FM _Oa _Qd _p _GM _Fe _Ls", children: [(0, S.BX)(u.View, { className: " _Mm _HM _Kv _T _ob _yE", children: [(0, S.tZ)(u.Image, { className: " _og _Bb _jb", src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/07/icon_daichupiao.png" }), (0, S.tZ)(u.Text, { className: " _qb _IM _JM", children: s.tag })] }), (0, S.tZ)(E, { ticketInfo: _, propStyle: "margin: 10px 16px", customStyle: { date: { color: "#222222", opacity: ".6" }, strong: { color: "#222222" }, station: { color: "#222222" }, costTime: { color: "#222222", opacity: ".6" }, arrow: { color: "#222222", opacity: ".6" }, trainNumber: { color: "#222222", opacity: ".6" } } }), (0, S.tZ)(q, { passengerInfo: m, scrollLeft: p, propStyle: "background: #f5f5f5;margin: 20rpx 16rpx 0;width: 686rpx;", customStyle: { name: { color: "#222222" }, type: { color: "rgba(102, 102, 102, 0.8)", border: "4rpx solid rgba(102, 102, 102, 0.5)" }, detail: { color: "#666666" } } })] }), Z.length > 0 && (0, S.BX)(u.View, { className: " _i _Vb _Wb _fr _KM _m _Fa", children: [Z[0] && (0, S.BX)(u.Button, { className: " _yd _Oa _Gc _Xc _i _nj _o _n -Gf cancel", id: "AJFN", onClick: N, children: [(0, S.tZ)(u.View, { className: " _oc _fu _rm _Uc _V -If", children: null === (i = Z[0]) || void 0 === i ? void 0 : i.btn }), (0, S.tZ)(u.View, { className: " _Ma _LM _Ol _Uc _N _gj -Jf", children: null === (t = Z[0]) || void 0 === t ? void 0 : t.subBtn })] }), Z[1] && (0, S.BX)(u.Button, { className: " _yd _Oa _Gc _Xc _i _nj _o _n -Gf -Hf", id: "AJFO", onClick: b, children: [(0, S.tZ)(u.View, { className: " _oc _fu _rm _Uc _V -If", children: null === (n = Z[1]) || void 0 === n ? void 0 : n.btn }), (0, S.BX)(u.View, { className: " _Ma _LM _Ol _Uc _N _gj -Jf", children: [(0, S.tZ)(u.Text, { children: null === (o = Z[1]) || void 0 === o ? void 0 : o.subBtn }), (0, S.BX)(u.Text, { className: "-Ff", children: ["¥", g] })] })] })] })] }) });
            }),
            O = function (e) {
              var i = L()(e).valueOf() - L()().valueOf();
              return {
                value: i,
                hours: Math.floor(i / 36e5),
                minutes: Math.floor((i % 36e5) / 6e4),
                seconds: Math.floor((i % 6e4) / 1e3),
                milliseconds: Math.floor(i % 1e3),
              };
            },
            H = m.default.memo(function (e) {
              var i = e.propStyle,
                t = e.customStyle,
                n = void 0 === t ? {} : t,
                o = e.endTime,
                a = e.onTimeEnd,
                c = void 0 === a ? function () {} : a,
                r = (0, m.useState)(function () {
                  return O(o);
                }),
                s = (0, z.Z)(r, 2),
                l = s[0],
                _ = s[1];
              (0, m.useEffect)(
                function () {
                  var e = setInterval(function () {
                    var i = O(o);
                    i.value < 0 && (e && clearInterval(e), c()), _(i);
                  }, 100);
                  return function () {
                    e && clearInterval(e);
                  };
                },
                [o]
              );
              var d = Math.floor(l.milliseconds / 10);
              return (0,
              S.BX)(u.View, { className: " _i _l _og", style: i, children: [(0, S.tZ)(u.View, { className: " _o _gK _ji _ff _Ye _c", style: n.value, children: l.minutes }), (0, S.tZ)(u.View, { className: " _qo", children: "分" }), (0, S.tZ)(u.View, { className: " _o _gK _ji _ff _Ye _c", style: n.value, children: l.seconds }), (0, S.tZ)(u.View, { className: " _qo", children: "秒" }), (0, S.tZ)(u.View, { className: " _o _gK _ji _ff _Ye _c", style: n.value, children: (d > 0 && d < 10 ? "0" : "") + d })] });
            }),
            R = m.default.memo(function (e) {
              var i = e.propStyle,
                t = e.content,
                n = e.salePrice,
                o = e.onRefuse,
                a = void 0 === o ? function () {} : o,
                c = e.onConfirm,
                r = void 0 === c ? function () {} : c,
                s = e.ubtTrace,
                l = void 0 === s ? function () {} : s,
                _ = (null == t ? void 0 : t[0]) || {},
                d = _.name,
                h = _.remark,
                p = (null == t ? void 0 : t[1]) || {},
                f = p.name,
                g = p.remark,
                w = p.tag;
              return (
                (0, m.useEffect)(function () {
                  d &&
                    l("s_trn_z_10650073118", {
                      exposureType: "normal",
                      bizKey: "z_grab_jianlou_wuyou_zjchup_button_show",
                    }),
                    f &&
                      l("s_trn_z_10650073118", {
                        exposureType: "normal",
                        bizKey: "z_grab_jianlou_wuyou_pay_button_show",
                      });
                }, []),
                t
                  ? (0, S.BX)(u.View, {
                      className: " _i _m -re",
                      style: i,
                      children: [
                        (0, S.BX)(u.Button, {
                          className: " _yd",
                          id: "AJFG",
                          onClick: function () {
                            l("c_trn_z_10650073118", {
                              bizKey:
                                "z_grab_jianlou_wuyou_zjchup_button_click",
                            }),
                              a();
                          },
                          children: [
                            (0, S.tZ)(u.View, {
                              className: " _ub _Ma _fu _rm _V",
                              children: d,
                            }),
                            (0, S.tZ)(u.View, {
                              className: " _id _Ma _uG _Ol _N",
                              children: h,
                            }),
                          ],
                        }),
                        (0, S.BX)(u.Button, {
                          className: " _Mm _p _oi",
                          id: "AJFH",
                          onClick: function () {
                            l("c_trn_z_10650073118", {
                              bizKey: "z_grab_jianlou_wuyou_pay_button_click",
                            }),
                              r();
                          },
                          children: [
                            (0, S.BX)(u.View, {
                              className: " _u _t _on _Ef _ug",
                              children: [
                                (0, S.tZ)(u.Image, {
                                  className: " _u _q _s _Ef _ug",
                                  src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/wycx/tag_tuijian.webp",
                                  webp: !0,
                                }),
                                (0, S.tZ)(u.View, {
                                  className: " _gj _p _qb _rF _Ol _N",
                                  children: w,
                                }),
                              ],
                            }),
                            (0, S.tZ)(u.View, {
                              className: " _ub _qb _fu _rm _V",
                              children: f,
                            }),
                            (0, S.BX)(u.View, {
                              className: " _tj _qb _uG _Ol _N _i _l",
                              children: [
                                (0, S.tZ)(u.View, {
                                  className: "btn-confirm-sub-tit-txt",
                                  children: g,
                                }),
                                (0, S.tZ)(u.View, {
                                  className: " _Lj _Vb _sf _cj _oK",
                                }),
                                (0, S.BX)(u.View, {
                                  className: "product-price",
                                  children: ["¥", n || "", "/人"],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, S.tZ)(S.HY, {})
              );
            }),
            U = function (e) {
              var i = e.propStyle,
                t = e.content,
                n = e.salePrice;
              if (!t) return (0, S.tZ)(u.View, {});
              var o = t[0] || {},
                a = o.title,
                c = o.ticketPrice,
                r = o.productRights,
                s = void 0 === r ? [] : r,
                l = t[1] || {},
                _ = l.title,
                d = l.ticketPrice,
                m = l.productRights,
                h = void 0 === m ? [] : m,
                p = s.find(function (e) {
                  return 1 === e.type;
                }),
                f = h.find(function (e) {
                  return 1 === e.type;
                });
              return (0, S.BX)(u.View, {
                className: " _i _l",
                style: i,
                children: [
                  (0, S.BX)(u.View, {
                    className: " _WK _XK _i _k _l _p _ZH -De",
                    children: [
                      (0, S.BX)(u.View, {
                        className: " _Wg _p _bL _cL _nc _i _dL",
                        children: [
                          (0, S.tZ)(u.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/wycx/wbz_icon_quanyi.webp",
                            className: " _Rj _Tj",
                            webp: !0,
                          }),
                          (0, S.tZ)(u.View, {
                            className: " _eL _qb _fL _gb _P",
                            children: a,
                          }),
                        ],
                      }),
                      (0, S.BX)(u.View, {
                        className: " _i _Aq _PK",
                        children: [
                          (0, S.tZ)(u.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/wycx/wbz_icon_cha.webp",
                            className: " _QK _dg _Bb",
                            webp: !0,
                          }),
                          (0, S.tZ)(u.View, {
                            className: " _RK _oc _SK _nc _S -He",
                            children: "票价",
                          }),
                          (0, S.tZ)(u.View, {
                            className: " _Xk _oc _TK _nc _S -Ie",
                            children: "¥",
                          }),
                          (0, S.tZ)(u.View, {
                            className: " _oc _UK _Uk _Fm -Je",
                            children: c,
                          }),
                        ],
                      }),
                      (0, S.tZ)(u.View, { className: " _YK _ZK _Yq _aL" }),
                      (0, S.tZ)(u.View, {
                        className: " _Aq _VK -Ee",
                        children: s
                          .filter(function (e) {
                            return 1 !== e.type;
                          })
                          .map(function (e) {
                            return (0,
                            S.BX)(u.View, { className: " _i _l -Fe", children: [(0, S.tZ)(u.Image, { src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/wycx/wbz_icon_cha.webp", className: " _Ci _dg _Bb", webp: !0 }), (0, S.tZ)(u.View, { className: " _zB _Zg _oc _SK _nc _S -Ke", children: e.name }), (0, S.tZ)(u.View, { className: " _j _Di _oc _nF _nc _S _Bi", children: e.desc })] }, e);
                          }),
                      }),
                      p
                        ? (0, S.BX)(S.HY, {
                            children: [
                              (0, S.tZ)(u.View, {
                                className: " _YK _ZK _Yq _aL",
                              }),
                              (0, S.BX)(u.View, {
                                className: " _gL _i _k _l",
                                children: [
                                  (0, S.tZ)(u.Image, {
                                    className: " _bc _cc",
                                    src: p.icon,
                                    webp: !0,
                                  }),
                                  (0, S.tZ)(u.View, {
                                    className: " _cg _oc _GG _nc _S",
                                    children: p.name,
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, S.tZ)(u.View, {
                            style: "height: 2rpx;width: 334rpx;",
                          }),
                    ],
                  }),
                  (0, S.BX)(u.View, {
                    className: " _CD _Oa _hL _i _k _l _p _dz -Ge",
                    children: [
                      (0, S.BX)(u.View, {
                        className: " _Wg _uC _cL _nc _S _i _jL _p",
                        children: [
                          (0, S.tZ)(u.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/wycx/wycx_bg_tag.webp",
                            className: " _u _kL _nc _s _q",
                            webp: !0,
                          }),
                          (0, S.tZ)(u.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/wycx/wycx_icon_quanyi.webp",
                            className: " _p _Rj _Tj",
                            webp: !0,
                          }),
                          (0, S.tZ)(u.View, {
                            className: " _eL _p _qb _lL _fL _gb _P",
                            children: _,
                          }),
                          (0, S.BX)(u.View, {
                            className: " _xq _p _sh _wF _Ol _N",
                            children: [
                              (0, S.BX)(u.Text, {
                                className: " _mL",
                                children: ["+￥", n],
                              }),
                              "/人",
                            ],
                          }),
                        ],
                      }),
                      (0, S.BX)(u.View, {
                        className: " _i _Aq _PK",
                        children: [
                          (0, S.tZ)(u.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/wycx/wycx_icon_gou.webp",
                            className: " _QK _dg _Bb",
                            webp: !0,
                          }),
                          (0, S.tZ)(u.View, {
                            className: " _RK _oc _SK _nc _S -He",
                            children: "票价",
                          }),
                          (0, S.tZ)(u.View, {
                            className: " _Xk _oc _TK _nc _S -Ie",
                            children: "¥",
                          }),
                          (0, S.tZ)(u.View, {
                            className: " _oc _UK _Uk _Fm -Je",
                            children: d,
                          }),
                        ],
                      }),
                      (0, S.tZ)(u.View, { className: " _YK _Kh _Yq _iL" }),
                      (0, S.tZ)(u.View, {
                        className: " _Aq _VK -Ee",
                        children: h
                          .filter(function (e) {
                            return 1 !== e.type;
                          })
                          .map(function (e) {
                            return (0,
                            S.BX)(u.View, { className: " _i _l -Fe", children: [(0, S.tZ)(u.Image, { src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/wycx/wycx_icon_gou.webp", className: " _Ci _dg _Bb", webp: !0 }), (0, S.tZ)(u.View, { className: " _zB _Zg _oc _SK _nc _S -Ke", children: e.name }), e.tag && (0, S.tZ)(u.View, { className: " _zB _Zg _hb _kc _p _De _Q _Al _Ze _nF -Ce", children: e.tag }), (0, S.tZ)(u.View, { className: " _j _Di _oc _nF _nc _S _Bi", children: e.desc })] }, e);
                          }),
                      }),
                      f
                        ? (0, S.BX)(S.HY, {
                            children: [
                              (0, S.tZ)(u.View, {
                                className: " _YK _Kh _Yq _iL",
                              }),
                              (0, S.BX)(u.View, {
                                className: " _nL _i _k _l",
                                children: [
                                  (0, S.tZ)(u.Image, {
                                    className: " _mb _Tk",
                                    src: null == f ? void 0 : f.icon,
                                    webp: !0,
                                  }),
                                  (0, S.tZ)(u.View, {
                                    className: " _ub _Xb _GG _nc _S",
                                    children: null == f ? void 0 : f.name,
                                  }),
                                  (0, S.tZ)(u.View, {
                                    className: " _Ac _oc _GG _nc _S",
                                    children: null == f ? void 0 : f.desc,
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, S.tZ)(u.View, {
                            style: "height: 38rpx;width: 384rpx;",
                          }),
                    ],
                  }),
                ],
              });
            },
            J = m.default.memo(function (e) {
              var i = e.content,
                t = e.ticketInfo,
                n = e.passengerInfo,
                o = e.scrollLeft,
                a = e.statusBarHeight,
                c = e.endPayTime,
                r = (e.pageLength, e.onBack),
                s = void 0 === r ? function () {} : r,
                l = e.onRefuseClick,
                _ = void 0 === l ? function () {} : l,
                d = e.onConfirmClick,
                m = void 0 === d ? function () {} : d,
                h = e.onTimeEnd,
                p = void 0 === h ? function () {} : h,
                f = e.ubtTrace,
                g = void 0 === f ? function () {} : f,
                w = i || {},
                N = w.headTitle,
                y = w.descs,
                b = void 0 === y ? [] : y,
                v = w.productInfos,
                T = void 0 === v ? [] : v,
                Z = w.buttonInfos,
                V = w.salePrice;
              if (!i) return (0, S.tZ)(S.HY, {});
              return (0, S.BX)(u.View, {
                style: "overflow: scroll",
                children: [
                  (0, S.BX)(u.View, {
                    className: " _v _s _q _t _Gc _Ie _ok _o _Xc _IK -ze",
                    style: "padding-top: " + a + "px",
                    children: [
                      (0, S.tZ)(u.Text, {
                        className: "ifont-back iconfont",
                        id: "AJFI",
                        onClick: function () {
                          s();
                        },
                      }),
                      (0, S.tZ)(u.View, {
                        className: " _hK _qK _sb",
                        children: "无忧出行",
                      }),
                    ],
                  }),
                  (0, S.BX)(u.View, {
                    className: " _rK",
                    style: "padding-top: " + (a + 44) + "px",
                    children: [
                      (0, S.tZ)(u.View, {
                        className: " _sK _sb _XE _Mj",
                        children: (0, S.tZ)(P.ZtRichText, { nodes: N || "" }),
                      }),
                      (0, S.BX)(u.View, {
                        className: " _JK _i _oc _ih _l _eg _S",
                        children: [
                          c &&
                            (0, S.tZ)(H, {
                              endTime: c,
                              onTimeEnd: p,
                              propStyle: { height: "34rpx" },
                              customStyle: {
                                value: {
                                  width: "32rpx",
                                  height: "32rpx",
                                  lineHeight: "32rpx",
                                  background: "rgb(34, 34, 34, .05)",
                                },
                              },
                            }),
                          (0, S.tZ)(u.View, {
                            style: "margin-left:2rpx",
                            children: "后自动出票",
                          }),
                        ],
                      }),
                      (0, S.BX)(u.View, {
                        className: " _KK _tK _uK _vK _wK _Mb",
                        children: [
                          (0, S.tZ)(E, {
                            ticketInfo: t,
                            propStyle: "margin: 16px 15px 0 15px",
                            customStyle: {
                              date: { color: "#FFFFFF", opacity: ".6" },
                              strong: { color: "#FFFFFF" },
                              station: { color: "#FFFFFF" },
                              costTime: { color: "#FFFFFF", opacity: ".6" },
                              arrow: { color: "#FFFFFF", opacity: ".6" },
                              trainNumber: { color: "#FFFFFF", opacity: ".6" },
                            },
                          }),
                          (0, S.tZ)(q, {
                            passengerInfo: n,
                            isShowSeatNo: !0,
                            scrollLeft: o,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, S.BX)(u.View, {
                    className: " _p _yd _LK _Wb",
                    children: [
                      (0, S.tZ)(u.View, {
                        className: " _u _q _Vb _Wb _MK _nd",
                      }),
                      (0, S.tZ)(u.View, { className: " _u _NK _vA _Id _nd" }),
                      (0, S.tZ)(U, {
                        propStyle: { margin: "0 16rpx" },
                        salePrice: V,
                        content: T,
                      }),
                      (0, S.tZ)(u.View, {
                        className: " _qd _p _Cc _Ma _nF _De _Q",
                        children: b.map(function (e) {
                          return (0,
                          S.tZ)(u.View, { className: " _i -Ae -Be", children: e }, e);
                        }),
                      }),
                    ],
                  }),
                  (0, S.tZ)(u.View, {
                    className: " _u _r _nd _Vb _Wb _Hd _OK",
                    children: (0, S.tZ)(R, {
                      propStyle: { margin: "0 16rpx" },
                      onConfirm: function () {
                        var e,
                          i =
                            (null === (e = T[1]) || void 0 === e
                              ? void 0
                              : e.productId) || "";
                        m(i);
                      },
                      onRefuse: _,
                      content: Z,
                      salePrice: V,
                      ubtTrace: g,
                    }),
                  }),
                ],
              });
            }),
            W = function (e) {
              var i,
                t,
                n,
                o,
                a = e.newStyleTabsIndex,
                c = e.newStyleTabs,
                r = e.onTabChange,
                s = void 0 === r ? function () {} : r;
              return (0, S.BX)(u.View, {
                className: " _i _m _tN _Vb _Wb",
                children: [
                  (0, S.BX)(u.View, {
                    className: ""
                      .concat(" _ol _Oa _NA _hs _Mb _i _k _n _l _p -ug", " ")
                      .concat(0 === a ? "-xg" : ""),
                    id: "AJFD",
                    onClick: function () {
                      s(0);
                    },
                    children: [
                      (0, S.tZ)(u.View, {
                        className: "-vg",
                        children:
                          null === (i = c[0]) || void 0 === i ? void 0 : i.btn,
                      }),
                      (0, S.tZ)(u.View, {
                        className: "-wg",
                        children:
                          null === (t = c[0]) || void 0 === t
                            ? void 0
                            : t.subTitle,
                      }),
                    ],
                  }),
                  (0, S.BX)(u.View, {
                    className: ""
                      .concat(" _ol _Oa _NA _hs _Mb _i _k _n _l _p -ug", " ")
                      .concat(1 === a ? "-xg" : ""),
                    id: "AJFE",
                    onClick: function () {
                      s(1);
                    },
                    children: [
                      (0, S.tZ)(u.View, {
                        className: "-vg",
                        children:
                          null === (n = c[1]) || void 0 === n ? void 0 : n.btn,
                      }),
                      (0, S.tZ)(u.View, {
                        className: "-wg",
                        children:
                          null === (o = c[1]) || void 0 === o
                            ? void 0
                            : o.subTitle,
                      }),
                    ],
                  }),
                ],
              });
            },
            G = function (e) {
              var i,
                t = e.newStyleTabsIndex,
                n = e.newStyleTabs,
                o = e.buttonInfo,
                a = e.refuseBtnName,
                c = e.productPrice,
                r = e.couponPrice,
                s = void 0 === r ? 0 : r,
                l = e.endPayTime,
                _ = e.handleCancelClick,
                d = void 0 === _ ? function () {} : _,
                m = e.handleConfirmClick,
                h = void 0 === m ? function () {} : m,
                p = e.onTimeEnd,
                f = void 0 === p ? function () {} : p;
              return c
                ? (0, S.BX)(S.HY, {
                    children: [
                      1 === t &&
                        (null === (i = n[t]) || void 0 === i
                          ? void 0
                          : i.btnTips) &&
                        (0, S.tZ)(u.View, {
                          className: " _xj _hl _cO _Tr _v _s _t _r _dO _Rs",
                          children: (0, S.tZ)(u.View, {
                            className:
                              "-Ig  _yj _pu _De _Uc _Q flex-align-items-center",
                            children: n[t].btnTips,
                          }),
                        }),
                      (0, S.BX)(u.View, {
                        className: " _v _r _s _t _eO _Wb _fO _gO _Ie",
                        children: [
                          0 === t &&
                            (0, S.BX)(u.Button, {
                              className: " _w _Oa _i _k _l _Gc _Mb -Jg -Kg",
                              id: "AJFB",
                              onClick: h,
                              children: [
                                (0, S.tZ)(u.View, {
                                  className: "-Lg  _qb _oB _rm _V",
                                  children: o.name || "",
                                }),
                                (0, S.BX)(u.View, {
                                  className: " _i _qb _hO _l _og _ff",
                                  children: [
                                    l &&
                                      (0, S.tZ)(H, {
                                        endTime: l,
                                        onTimeEnd: f,
                                      }),
                                    (0, S.tZ)(u.View, {
                                      children: "后自动失效",
                                    }),
                                    (0, S.tZ)(u.View, {
                                      className: " _iO _dj _wl _oK",
                                    }),
                                    (0, S.BX)(u.View, {
                                      className: " _LM _i _l _qb",
                                      children: ["¥", c - (s || 0) || ""],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          1 === t &&
                            (0, S.tZ)(u.Button, {
                              className: " _w _Oa _i _k _l _Gc _Mb -Jg -Mg",
                              id: "AJFC",
                              onClick: d,
                              children: (0, S.tZ)(u.View, {
                                className: "-Lg  _qb _oB _rm _V",
                                children: a || "",
                              }),
                            }),
                        ],
                      }),
                    ],
                  })
                : (0, S.tZ)(u.View, {});
            },
            Y = function (e) {
              var i = e.newStyleTabsIndex,
                t = e.rightBoxInfo,
                n = e.productPrice,
                o = e.couponPrice;
              return (0, S.BX)(u.View, {
                className: " _i _pf",
                children: [
                  (0, S.tZ)(u.View, {
                    className: " _sb _kH _Ua _U",
                    children: t.title,
                  }),
                  (0, S.tZ)(u.View, {
                    className: " _Ze _IM _j _Pl",
                    children: (0, S.tZ)(u.Text, {
                      className: " _yE _De _Q _Al -zg bd-1rpx",
                      children: t.subTitle,
                    }),
                  }),
                  0 === i &&
                    (0, S.BX)(u.View, {
                      className: " _Ma _pu _Uc _Di _p",
                      children: [
                        o > 0 &&
                          (0, S.tZ)(u.Image, {
                            className: " _ma _nc _u _t",
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/07/img_youhuitishi.webp",
                            webp: !0,
                          }),
                        o > 0 &&
                          (0, S.tZ)(u.View, {
                            className: " _Ze _LM _bb _Dn _yE _p _Rs _BN _JM",
                            children: "券已抵扣¥".concat(o),
                          }),
                        (0, S.BX)(u.View, {
                          className: " _nc _S",
                          children: [
                            "礼包价",
                            o > 0 &&
                              (0, S.BX)(u.Text, {
                                className: " _zl",
                                children: ["¥", n],
                              }),
                            (0, S.tZ)(u.Text, {
                              className: " _Sf",
                              children: "¥".concat(n - (o || 0)),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              });
            },
            Q = t(17368),
            $ = function (e) {
              var i = e.newStyleTabsIndex,
                t = e.rightTitleInfo,
                n = e.endPayTime,
                o = e.rights,
                a = e.onShowCouponInfoDrawer,
                c = void 0 === a ? function () {} : a;
              return (0, S.tZ)(u.View, {
                className: ""
                  .concat(" _bg -og", " ")
                  .concat(0 === i ? "-pg" : "-qg"),
                children: t.map(function (e, a) {
                  var r = e;
                  return (0, S.BX)(
                    u.View,
                    {
                      className: ""
                        .concat("-rg", " ")
                        .concat(a > 0 ? (1 === i ? "-sg" : "-tg") : ""),
                      children: [
                        (0, S.BX)(u.View, {
                          className: " _i _l",
                          children: [
                            (0, S.tZ)(u.View, {
                              className: " _rN _pa _nc _S _sN _JH _HH",
                              children:
                                "权益" + (t.length > 1 ? ["一", "二"][a] : ""),
                            }),
                            1 === r.type &&
                              (0, S.tZ)(u.View, {
                                className: "flex-1 ".concat(
                                  " _Zg _Ma _pu _nc _S"
                                ),
                                children: e.title,
                              }),
                            0 === r.type &&
                              (0, S.BX)(u.View, {
                                className: "flex-align-items-center flex-1",
                                children: [
                                  (0, S.tZ)(u.View, {
                                    className: " _Zg _Ma _pu _nc _S",
                                    children: e.title,
                                  }),
                                  (0, S.tZ)(Q.Z, {
                                    mode: "img",
                                    customizeStyle: {
                                      icon: "width: "
                                        .concat(
                                          g().pxTransform(24),
                                          ";height: "
                                        )
                                        .concat(g().pxTransform(24)),
                                    },
                                    iconUrl:
                                      "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_12.png",
                                    onClickHandle: c,
                                  }),
                                ],
                              }),
                            1 === i &&
                              (0, S.tZ)(u.View, {
                                className: " _Ma _pu _eg _R",
                                children: "您已放弃该权益",
                              }),
                          ],
                        }),
                        0 === i &&
                          (0, S.BX)(u.View, {
                            className: " _bg",
                            children: [
                              1 === r.type &&
                                (0, S.tZ)(S.HY, {
                                  children: (0, S.BX)(u.View, {
                                    className: " _pN _p _i _l -ng",
                                    children: [
                                      (0, S.tZ)(u.Image, {
                                        className: " _u _q _s _t _Oa _Gy _gh",
                                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/08/img_tequan_bg.webp",
                                        webp: !0,
                                      }),
                                      (0, S.tZ)(u.Image, {
                                        className: " _p _mb _Tk _Qf",
                                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/08/icon_tequan.webp",
                                        webp: !0,
                                      }),
                                      (0, S.BX)(u.View, {
                                        className: " _p",
                                        children: [
                                          (0, S.tZ)(u.View, {
                                            className: " _JH _pq _Ua _U",
                                            children: r.title,
                                          }),
                                          (0, S.BX)(u.View, {
                                            className:
                                              " _LH _ub _JH _mF _De _Q _i _l",
                                            children: [
                                              (0, S.tZ)(u.View, {
                                                children: "限时赠送",
                                              }),
                                              (0, S.tZ)(u.View, {
                                                className:
                                                  " _gz _fl _cj _sf _qN",
                                              }),
                                              (0, S.BX)(u.View, {
                                                style: {
                                                  display: "flex",
                                                  alignItems: "center",
                                                },
                                                children: [
                                                  n &&
                                                    (0, S.tZ)(P.ZtCountdown, {
                                                      endTime: n,
                                                      isShowHour: !1,
                                                      format: {
                                                        minute: "分",
                                                        second: "秒",
                                                      },
                                                    }),
                                                  "后权益将失效",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              0 === r.type &&
                                (0, S.tZ)(u.View, {
                                  className: " _i _m _zc",
                                  children:
                                    o &&
                                    o.map(function (e, i) {
                                      return e.showPrice
                                        ? (0, S.BX)(
                                            u.View,
                                            {
                                              className: " _i _k _l _p _uN _rg",
                                              style:
                                                i > 2 ? "margin-top:16rpx" : "",
                                              children: [
                                                (0, S.tZ)(u.Image, {
                                                  src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/05/coupon_bg.webp",
                                                  className:
                                                    " _u _q _s _t _r _uN _rg",
                                                  webp: !0,
                                                }),
                                                (0, S.tZ)(u.View, {
                                                  className:
                                                    " _p _Ac _db _i _n",
                                                  children: e.showPrice
                                                    ? (0, S.BX)(S.HY, {
                                                        children: [
                                                          (0, S.tZ)(u.View, {
                                                            className:
                                                              " _JH _vN _db _Mj -yg",
                                                            children: e.title,
                                                          }),
                                                          (0, S.BX)(u.View, {
                                                            className:
                                                              " _i _xN _JH _GG _nc _S",
                                                            children: [
                                                              e.number > 1 &&
                                                                (0, S.BX)(
                                                                  u.View,
                                                                  {
                                                                    style:
                                                                      "margin-left: -2rpx",
                                                                    children: [
                                                                      "x",
                                                                      e.number,
                                                                      "张",
                                                                    ],
                                                                  }
                                                                ),
                                                              (0, S.tZ)(
                                                                u.View,
                                                                {
                                                                  children:
                                                                    e.subTitle,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      })
                                                    : (0, S.tZ)(u.View, {
                                                        className:
                                                          " _JH _wN _S _Xk",
                                                        children: e.title,
                                                      }),
                                                }),
                                                (0, S.tZ)(u.View, {
                                                  className:
                                                    " _p _Km _yN _zN _AN",
                                                }),
                                                (0, S.tZ)(u.View, {
                                                  className:
                                                    " _p _cg _JH _pu _eg _R _LH",
                                                  children:
                                                    e.latestSubTitle ||
                                                    "火车抢票",
                                                }),
                                              ],
                                            },
                                            i
                                          )
                                        : (0, S.tZ)(S.HY, {});
                                    }),
                                }),
                            ],
                          }),
                      ],
                    },
                    e.title
                  );
                }),
              });
            },
            ee = m.default.memo(function (e) {
              var i,
                t = e.content,
                n = e.onBack,
                o = void 0 === n ? function () {} : n,
                a = e.onTabChange,
                c = void 0 === a ? function () {} : a,
                r = e.onShowCouponInfoDrawer,
                s = void 0 === r ? function () {} : r,
                l = e.handleConfirmClick,
                _ = void 0 === l ? function () {} : l,
                d = e.onTimeEnd,
                p = void 0 === d ? function () {} : d,
                f = e.handleCancelClick,
                g = void 0 === f ? function () {} : f,
                w = t || {},
                N = (w.pageLength, w.statusBarHeight),
                y = w.ticketInfo,
                b = w.passengerInfo,
                v = w.endPayTime,
                T = w.rightBoxInfo,
                Z = w.rights,
                V = w.buttonInfo,
                k = w.refuseBtnName,
                x = w.productPrice,
                I = w.couponPrice,
                B = w.rightTitleInfo,
                C = w.newStyleTabs,
                F = void 0 === C ? [] : C,
                X = w.newStyleTabsIndex,
                z = void 0 === X ? 0 : X,
                D = w.scrollLeft,
                L = void 0 === D ? 0 : D;
              if (!t) return (0, S.tZ)(u.View, {});
              var j = h.default.isTieyou;
              return (0, S.BX)(m.Fragment, {
                children: [
                  (0, S.BX)(u.View, {
                    className: " _v _s _q _t _Gc _Ie _ok _o _Xc _pK -se",
                    style: "padding-top: " + N + "px",
                    children: [
                      (0, S.tZ)(u.Text, {
                        className: "ifont-back iconfont",
                        id: "AJFF",
                        onClick: function () {
                          o();
                        },
                      }),
                      (0, S.tZ)(u.View, {
                        className: " _hK _qK _sb",
                        children: "快速出票特权",
                      }),
                    ],
                  }),
                  (0, S.BX)(u.View, {
                    className: " _rK -te",
                    style: "padding-top: " + (N + 44) + "px",
                    children: [
                      (0, S.tZ)(u.View, {
                        className: " _sK _sb _XE _Mj",
                        children: (0, S.tZ)(P.ZtRichText, {
                          nodes:
                            (null === (i = F[z]) || void 0 === i
                              ? void 0
                              : i.title) || "",
                        }),
                      }),
                      (0, S.BX)(u.View, {
                        className: " _tK _uK _vK _wK _Mb",
                        style: {
                          background: j
                            ? 0 === z
                              ? "linear-gradient(90deg, rgb(90, 98, 134) 0%, rgb(60, 67, 101) 100%);"
                              : "linear-gradient(-90deg, rgb(149, 153, 174) 0%, rgb(164, 168, 191) 100%);"
                            : 0 === z
                            ? "linear-gradient(90deg, rgb(38, 147, 255) 0%, rgb(0, 102, 255) 100%)"
                            : "linear-gradient(-64.06deg, rgb(123, 146, 180) 0%, rgb(134, 158, 193) 100%);",
                        },
                        children: [
                          (0, S.tZ)(E, {
                            ticketInfo: y,
                            propStyle: "margin: 16px 15px 0 15px",
                            customStyle: {
                              date: { color: "#FFFFFF", opacity: ".6" },
                              strong: { color: "#FFFFFF" },
                              station: { color: "#FFFFFF" },
                              costTime: { color: "#FFFFFF", opacity: ".6" },
                              arrow: { color: "#FFFFFF", opacity: ".6" },
                              trainNumber: { color: "#FFFFFF", opacity: ".6" },
                            },
                          }),
                          (0, S.tZ)(q, { passengerInfo: b, scrollLeft: L }),
                        ],
                      }),
                    ],
                  }),
                  (0, S.BX)(u.View, {
                    className: " _p _xK",
                    children: [
                      (0, S.tZ)(W, {
                        newStyleTabsIndex: z,
                        newStyleTabs: F,
                        productPrice: x,
                        onTabChange: c,
                      }),
                      (0, S.tZ)(u.View, { className: " _u _yK _s _t _vA _db" }),
                      T &&
                        (0, S.BX)(u.View, {
                          className: " _p _zK _Xa _Rd _AK",
                          children: [
                            (0, S.tZ)(Y, {
                              newStyleTabsIndex: z,
                              rightBoxInfo: T,
                              productPrice: x,
                              couponPrice: I,
                            }),
                            (0, S.tZ)($, {
                              newStyleTabsIndex: z,
                              rightTitleInfo: B,
                              endPayTime: v,
                              rights: Z,
                              onShowCouponInfoDrawer: s,
                            }),
                          ],
                        }),
                      (0, S.tZ)(G, {
                        newStyleTabsIndex: z,
                        newStyleTabs: F,
                        buttonInfo: V,
                        refuseBtnName: k,
                        productPrice: x,
                        couponPrice: I,
                        endPayTime: v,
                        handleCancelClick: g,
                        handleConfirmClick: _,
                        onTimeEnd: p,
                      }),
                    ],
                  }),
                ],
              });
            }),
            ie = h.default.isTieyou,
            te = function (e) {
              var i = e.statusBarHeight,
                t = e.vipRights,
                n = e.noVipRights;
              return (0, S.BX)(u.View, {
                className: " _CN _DN _p _i _k _l -Ag",
                style: "padding-top: " + (i + 44) + "px",
                children: [
                  (0, S.tZ)(u.Image, {
                    className: " _od _ru _u _t _EN",
                    src: "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/img_vipwl@3x.png",
                  }),
                  (0, S.tZ)(u.Image, {
                    className: " _Qr _Rl _Si",
                    src: ie
                      ? "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/img_bt_ty@3x.png"
                      : "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/img_bt@3x.png",
                  }),
                  (0, S.BX)(u.View, {
                    className: " _FN _fe _Qd _GN _i _p",
                    children: [
                      (0, S.tZ)(u.View, {
                        className: " _JH _hk _S _dn _u _Vt _HN _i _k _m",
                        children:
                          t &&
                          t.map(function (e) {
                            return (0,
                            S.tZ)(u.View, { className: " _i -Bg", children: (0, S.tZ)(u.Text, { className: "vip-item-txt", children: e }) }, e);
                          }),
                      }),
                      (0, S.tZ)(u.View, {
                        className: " _jD _hk _S _dn _u _Vt _IN _JN _i _k _m",
                        children:
                          n &&
                          n.map(function (e) {
                            return (0,
                            S.tZ)(u.View, { className: " _i -Cg", children: (0, S.tZ)(u.Text, { className: " _OC _Ym _yc _Xm", children: e }) }, e);
                          }),
                      }),
                    ],
                  }),
                ],
              });
            },
            ne = function (e) {
              var i = e.passengerInfo,
                t = e.propStyle,
                n = (i || {}).passengers;
              return i
                ? (0, S.tZ)(u.View, {
                    className: " _Ar _pb _dM",
                    style: t,
                    children: n.map(function (e, i) {
                      return (0,
                      S.BX)(u.View, { className: "item", children: [0 !== i && (0, S.tZ)(u.View, { className: " _fM _Yq _gM" }), (0, S.BX)(u.View, { className: " _i _l", children: [(0, S.tZ)(u.View, { className: " _Xb _Oj _Ld _W _On", children: e.passengerName }), (0, S.tZ)(u.View, { className: " _eM _gf _Ma _B", children: e.passengerType }), (0, S.tZ)(u.View, { className: " _j _oc _G _nc _S _Di", children: e.seatName + " ¥" + e.seatPrice })] })] }, i);
                    }),
                  })
                : (0, S.tZ)(u.View, {});
            },
            oe = function (e) {
              var i = e.ticketInfo,
                t = e.passengerInfo,
                n = e.rightBoxInfo,
                o = e.couponPrice,
                a = e.rights;
              return (0, S.BX)(u.View, {
                className: " _p _vr _RN _SN _TN",
                children: [
                  (0, S.tZ)(u.View, {
                    className: " _vr _od _Z _vA _u _q _s _kc",
                  }),
                  (0, S.BX)(u.View, {
                    className: " _UN _p _in",
                    children: [
                      (0, S.BX)(u.View, {
                        className: " _VN _Vb _WN _p",
                        children: [
                          (0, S.tZ)(u.View, {
                            className: " _rn _XN _Ll _Z _u _q",
                          }),
                          (0, S.tZ)(E, {
                            ticketInfo: i,
                            propStyle: "margin: 0 15px 0 15px",
                          }),
                          (0, S.tZ)(ne, {
                            passengerInfo: t,
                            propStyle: "margin: 26px 8px 0 8px",
                          }),
                        ],
                      }),
                      (0, S.BX)(u.View, {
                        className: " _Xk _dc _Vb _YN _p",
                        children: [
                          n &&
                            (0, S.BX)(u.View, {
                              className: " _i _l _ZN",
                              children: [
                                (0, S.tZ)(u.View, {
                                  className: " _Xb _Wl _Oc",
                                  children: n.title,
                                }),
                                (0, S.tZ)(u.View, {
                                  className: " _Zg _wF _bf _aO _Q _bh",
                                  children: n.subTitle,
                                }),
                                (0, S.BX)(u.View, {
                                  className: " _j _Di _bO _E",
                                  children: [
                                    o > 0
                                      ? (0, S.BX)(u.Text, {
                                          className: " _Ma _nF _zl",
                                          children: ["套餐价¥", n.price],
                                        })
                                      : (0, S.tZ)(u.Text, {
                                          children: "套餐价：",
                                        }),
                                    (0, S.tZ)(u.Text, {
                                      className: " _cf _Ze _ON _Mj -Hg",
                                      children: n.price - (o || 0),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          o > 0 &&
                            (0, S.BX)(u.View, {
                              className:
                                " _u _ki _ac _yl _KN _De _Q _ve _Ze _IM",
                              children: ["券已抵扣¥", o],
                            }),
                          (0, S.tZ)(u.View, {
                            className: " _Rd _i _zc _m",
                            children:
                              a &&
                              a.map(function (e, i) {
                                return (0,
                                S.BX)(u.View, { className: " _LN _MN _rp _Gy _Xk _NN _p _i _l _o _Mb -Dg -Eg", children: [(0, S.BX)(u.View, { className: " _JH _SK _Mj _i", children: [(0, S.tZ)(u.View, { className: "".concat(" _JH _tb _db _Mj -Fg", " ").concat(e.showPrice ? " _cf _Ze _ON _Mj -Hg" : ""), children: e.title }), e.number > 1 && (0, S.BX)(S.HY, { children: [(0, S.tZ)(u.View, { className: " _cf _je", children: "x" }), (0, S.tZ)(u.View, { className: " _Wh _JH _ON", children: e.number }), (0, S.tZ)(u.View, { className: " _Ch", children: "张" })] })] }), (0, S.tZ)(u.View, { className: " _JH _mF _R _id _vF", children: e.subTitle }), !!e.tag && (0, S.tZ)(u.View, { className: " _u _t _q _Ze _HH _PN _QN _eg _R _bh", children: e.tag })] }, i);
                              }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            },
            ae = m.default.memo(function (e) {
              var i = e.content,
                t = e.experimentCode,
                n = e.onBack,
                o = void 0 === n ? function () {} : n,
                a = e.handleConfirmClick,
                c = void 0 === a ? function () {} : a,
                r = e.onTimeEnd,
                s = void 0 === r ? function () {} : r,
                l = e.handleCancelClick,
                _ = void 0 === l ? function () {} : l,
                d = i || {},
                h = (d.pageLength, d.statusBarHeight),
                p = d.vipRights,
                f = d.noVipRights,
                g = d.ticketInfo,
                w = d.passengerInfo,
                N = d.endPayTime,
                y = d.rightBoxInfo,
                b = d.rights,
                v = d.refuseBtnName,
                T = d.buttonInfo,
                Z = d.productPrice,
                V = d.couponPrice,
                k = void 0 === V ? 0 : V;
              return i
                ? (0, S.BX)(m.Fragment, {
                    children: [
                      (0, S.BX)(u.View, {
                        className: " _v _s _q _t _Gc _Ie _ok _o _Xc -ne",
                        style: "padding-top: " + h + "px",
                        children: [
                          (0, S.tZ)(u.Text, {
                            className: "ifont-back iconfont",
                            id: "AJFJ",
                            onClick: function () {
                              o();
                            },
                          }),
                          (0, S.tZ)(u.View, {
                            className: " _hK _iK _qb",
                            children: "请确认出票",
                          }),
                        ],
                      }),
                      (0, S.tZ)(te, {
                        statusBarHeight: h,
                        vipRights: p,
                        noVipRights: f,
                      }),
                      (0, S.tZ)(oe, {
                        ticketInfo: g,
                        passengerInfo: w,
                        rightBoxInfo: y,
                        couponPrice: k,
                        rights: b,
                      }),
                      (0, S.tZ)(X, {
                        refuseBtnName: v,
                        buttonInfo: T,
                        endPayTime: N,
                        experimentCode: t,
                        productPrice: Z,
                        couponPrice: k,
                        handleCancelClick: _,
                        handleConfirmClick: c,
                        onTimeEnd: s,
                      }),
                    ],
                  })
                : (0, S.tZ)(u.View, {});
            }),
            ce = m.default.memo(function (e) {
              var i = e.pasInfo;
              return i
                ? (0, S.BX)(u.View, {
                    className: "tsmart-passenger-info flex-align-items-center",
                    children: [
                      (0, S.tZ)(u.View, {
                        className: "name",
                        children: i.passengerName,
                      }),
                      (0, S.tZ)(u.View, {
                        className: "type",
                        children: i.passengerType,
                      }),
                      (0, S.BX)(u.View, {
                        className: "flex-align-items-center flex-1 pasg-right",
                        children: [
                          i.seatTag &&
                            (0, S.tZ)(u.View, {
                              className: "seat-tag",
                              children: i.seatTag,
                            }),
                          (0, S.BX)(u.View, {
                            className: "seat",
                            children: [i.seatName, " ¥", i.seatPrice],
                          }),
                          (0, S.tZ)(u.View, {
                            className: "seat-no",
                            children: i.seatNo,
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, S.tZ)(S.HY, {});
            }),
            re = m.default.memo(function (e) {
              var i = e.trainDesc,
                t = e.statusDesc;
              return (0,
              S.BX)(u.View, { className: "tsmart-ticket-headinfo flex-align-items-center", children: [(0, S.tZ)(u.View, { className: "date", children: i }), (0, S.tZ)(u.Text, { className: "ifont-selected iconfont" }), (0, S.tZ)(u.View, { className: "status", children: t })] });
            }),
            se = m.default.memo(function (e) {
              var i = e.fromTime,
                t = e.toTime,
                n = e.fromStation,
                o = e.toStation,
                a = e.ticketTotalUseTime,
                c = e.durationDays,
                r = e.isShowTotalTimeDown,
                s = void 0 !== r && r,
                l = e.goTT;
              return (0,
              S.BX)(u.View, { className: "tsmart-train-info flex", children: [(0, S.BX)(u.View, { className: "l-box", children: [(0, S.tZ)(u.View, { className: "time", children: i }), (0, S.tZ)(u.View, { className: "station", children: n })] }), (0, S.BX)(u.View, { className: "m-box ".concat(a ? (s ? "time-down" : "time-up") : "v-mid"), children: [a && !s && (0, S.tZ)(u.View, { className: "duration", children: a }), (0, S.tZ)(u.View, { className: "schedule", id: "AFAJ", onClick: l, children: "时刻表" }), a && s && (0, S.tZ)(u.View, { className: "duration", children: a })] }), (0, S.BX)(u.View, { className: "r-box", children: [(0, S.BX)(u.View, { className: "right", children: [c > 0 && (0, S.BX)(u.View, { className: "multi-day", children: ["+", c, "天"] }), (0, S.tZ)(u.View, { className: "time", children: t })] }), (0, S.tZ)(u.View, { className: "station", children: o })] })] });
            }),
            le = m.default.memo(function (e) {
              var i = e.descList,
                t = void 0 === i ? [] : i;
              return null == t || !t.length || t.length <= 0
                ? (0, S.tZ)(S.HY, {})
                : (0, S.BX)(u.View, {
                    className: "tsmart-important-tips",
                    children: [
                      (0, S.tZ)(u.View, {
                        className: "tit",
                        children: "重要提示",
                      }),
                      (0, S.tZ)(u.View, {
                        className: "tip-box flex",
                        children: (0, S.tZ)(u.View, {
                          className: "flex-1",
                          children: t.map(function (e, i) {
                            return (0,
                            S.tZ)(P.ZtRichText, { className: "item flex", nodes: e }, i);
                          }),
                        }),
                      }),
                    ],
                  });
            }),
            _e = m.default.memo(function (e) {
              var i = e.content,
                t = e.ticketInfo,
                n = e.passengerInfo,
                o = e.statusBarHeight,
                a = e.endPayTime,
                c = e.onBack,
                r = void 0 === c ? function () {} : c,
                s = e.onRefuseClick,
                l = void 0 === s ? function () {} : s,
                _ = e.onConfirmClick,
                d = void 0 === _ ? function () {} : _,
                p = e.onTimeEnd,
                f = void 0 === p ? function () {} : p,
                g = i || {},
                w = g.headTitle,
                N = g.subTitle,
                y = void 0 === N ? [] : N,
                b = g.tips,
                v = void 0 === b ? [] : b;
              if (!i) return (0, S.tZ)(S.HY, {});
              var T = function () {
                var e, i;
                return null != n &&
                  null !== (e = n.passengers) &&
                  void 0 !== e &&
                  null !== (i = e[0]) &&
                  void 0 !== i &&
                  i.seatName.includes("铺")
                  ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/img_ypjk_puxi.png"
                  : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/img_ypjk_zuoxi.png";
              };
              return (0, S.BX)(u.View, {
                className: "monitorOrderContainer",
                style: "overflow: scroll",
                children: [
                  (0, S.tZ)(u.View, {
                    className: "top-bar-v2",
                    style: "padding-top: ".concat(o, "px"),
                    children: (0, S.tZ)(u.View, {
                      className: "ifont-back iconfont",
                      id: "AFAg",
                      onClick: r,
                    }),
                  }),
                  (0, S.tZ)(u.View, {
                    className: "top-box-v2",
                    style: "padding-top: ".concat(o, "px"),
                    children: (0, S.BX)(S.HY, {
                      children: [
                        (0, S.tZ)(u.Image, {
                          className: "img-top-hd",
                          src: T(),
                        }),
                        (0, S.tZ)(P.ZtRichText, { className: "tit", nodes: w }),
                        (0, S.BX)(u.View, {
                          className: "txt-bd",
                          children: [
                            (0, S.tZ)(u.Image, {
                              className: "icon",
                              src: "https://images3.c-ctrip.com/ztrip/train_zhu/Tag_logo_znx.png",
                            }),
                            y.map(function (e, i) {
                              return (0,
                              S.tZ)(P.ZtRichText, { className: "tag ".concat(0 === i ? "first" : ""), nodes: e }, e);
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, S.BX)(u.View, {
                    className: "wrap-v2",
                    children: [
                      (function () {
                        var e;
                        return (0, S.BX)(u.View, {
                          className: "RS-ticket-info-box",
                          children: [
                            (0, S.BX)(u.View, {
                              className: "time-info",
                              children: [
                                (0, S.tZ)(re, {
                                  trainDesc: L()(t.departDate).format(
                                    "MM月DD日"
                                  ),
                                  statusDesc: "确认即可出票",
                                }),
                                (0, S.tZ)(se, {
                                  fromTime: t.departTime,
                                  toTime: t.arriveTime,
                                  fromStation: t.departStation,
                                  toStation: t.arriveStation,
                                  ticketTotalUseTime: t.costTime,
                                  durationDays: L()(t.arriveDate).diff(
                                    L()(t.departDate),
                                    "day"
                                  ),
                                  isShowTotalTimeDown: !0,
                                  goTT: function () {
                                    B.ZP.goTimeTable(
                                      t.departStation,
                                      t.arriveStation,
                                      t.trainNumber,
                                      t.departDate
                                    );
                                  },
                                }),
                              ],
                            }),
                            (null == n ||
                            null === (e = n.passengers) ||
                            void 0 === e
                              ? void 0
                              : e.length) > 0 &&
                              (0, S.tZ)(u.View, {
                                className: "tsmart-rs-passenger",
                                children:
                                  null == n
                                    ? void 0
                                    : n.passengers.map(function (e, i) {
                                        return (0,
                                        S.tZ)(m.Fragment, { children: (0, S.tZ)(ce, { pasInfo: e }) }, i);
                                      }),
                              }),
                          ],
                        });
                      })(),
                      (0, S.tZ)(le, { descList: v }),
                      (0, S.tZ)(u.Image, {
                        className: "img-logo",
                        src: "https://images3.c-ctrip.com/zt/robTicket/common/slogon_".concat(
                          h.default.isTieyou ? "ty" : "zx",
                          "_new.png"
                        ),
                      }),
                    ],
                  }),
                  (0, S.tZ)(u.View, {
                    className: "footer",
                    children: (0, S.BX)(u.View, {
                      className: "fixed-botm-v2",
                      children: [
                        (0, S.tZ)(u.Button, {
                          className: "btn-cancel",
                          onClick: l,
                          children: "不要这张牌",
                        }),
                        (0, S.BX)(u.Button, {
                          className: "btn-confirm",
                          onClick: d,
                          children: [
                            (0, S.tZ)(u.View, { children: "确认出票" }),
                            (0, S.BX)(u.View, {
                              className: "timeout flex",
                              children: [
                                (0, S.tZ)(P.ZtCountdown, {
                                  onTimeup: f,
                                  endTime: a,
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
                  }),
                ],
              });
            }),
            de = h.default.isTieyou,
            me =
              (0, p.h)()(
                (n = (function (e) {
                  (0, _.Z)(t, e);
                  var i = (0, d.Z)(t);
                  function t(e) {
                    var n;
                    (0, s.Z)(this, t),
                      ((n = i.call(this, e)).pageId = de
                        ? "10650074398"
                        : "10650073118"),
                      (n.state = {
                        pageLength: 1,
                        statusBarHeight: w.A.statusBarHeight,
                        isShowRetainDrawer: !1,
                        isShowCouponDescDrawer: !1,
                        monitorOrderInfo: null,
                      });
                    var o =
                      (0, f.getCurrentInstance)().router &&
                      (0, f.getCurrentInstance)().router.params;
                    return (
                      (n.oid =
                        (o.orderNumber && decodeURIComponent(o.orderNumber)) ||
                        ""),
                      (n.source = o.source || 0),
                      (n.clickBackCount = 0),
                      g().hideShareMenu && g().hideShareMenu(),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = g().getCurrentPages(),
                            i = e ? e.length : 1;
                          this.setState({ pageLength: i }),
                            this.ubtTrace(205916, {
                              exposureType: "normal",
                              bizKey: "z_jlpiao_profit_confirm_show",
                              source: +this.source,
                              orderId: this.oid,
                            }),
                            y.ZP.isLogin ? this.initData() : this.doLogin();
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.ubtDevTrace("o_train_jianlou_enter");
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          this.getFreeTicketTask();
                        },
                      },
                      {
                        key: "doLogin",
                        value: function () {
                          var e = this;
                          y.ZP.doLogin()
                            .then(function () {
                              e.initData(), e.getFreeTicketTask();
                            })
                            .catch(function () {
                              e.doHomeBack();
                            });
                        },
                      },
                      {
                        key: "initData",
                        value: function () {
                          var e = this;
                          (0, C.J3)({ orderNumber: this.oid })
                            .then(function (i) {
                              if (1 === i.resultCode) {
                                var t = i.serverCompare,
                                  n = i.orderInfo,
                                  o = i.productInfo,
                                  a = i.refuseInfo,
                                  c = i.buttonInfo,
                                  s = i.experimentCode,
                                  l = i.couponInfo,
                                  _ = i.latestType,
                                  d = i.backInterceptInfo,
                                  m = i.travelComboInfo,
                                  u = i.couponDesc,
                                  h = i.monitorOrderInfo,
                                  p = i.scenes;
                                (e.experimentCode = s || "A"),
                                  (e.isMonitorOrder = 2 === p);
                                var f,
                                  g,
                                  w = [],
                                  y = [];
                                t &&
                                  ((w =
                                    (null === (f = t[0]) || void 0 === f
                                      ? void 0
                                      : f.descs) || []),
                                  (y =
                                    (null === (g = t[1]) || void 0 === g
                                      ? void 0
                                      : g.descs) || []));
                                var b = {};
                                n &&
                                  ((b.trainNumber = n.trainNumber || ""),
                                  (b.departStation = n.departStation || ""),
                                  (b.arriveStation = n.arriveStation || ""),
                                  (b.departTime = n.departTime || ""),
                                  (b.arriveTime = n.arriveTime || ""),
                                  (b.departDate = n.departDate || ""),
                                  (b.arriveDate = n.arriveDate || ""),
                                  (b.costTime = n.time || ""));
                                var v = {};
                                n &&
                                  ((v.passengers = n.passengers || []),
                                  v.passengers.length > 2 &&
                                    (e.setState({ scrollLeft: 80 }),
                                    setTimeout(function () {
                                      e.setState({ scrollLeft: 0 });
                                    }, 2e3))),
                                  (e.senceType =
                                    n.scene || "holdSeatQuickTicket"),
                                  e.ubtTrace("s_trn_z_10650073118", {
                                    exposureType: "normal",
                                    bizKey: "z_jlpiao_profit_confirm_show",
                                    source: +e.source,
                                    orderId: e.oid,
                                    productType:
                                      "holdSeatTravel" === e.senceType ? 0 : 1,
                                  });
                                var T = "";
                                n && (T = n.latestPayTime || "");
                                var Z,
                                  V,
                                  x = {},
                                  I = [];
                                if (o)
                                  (e.productId = o.productId),
                                    (e.goodsInfo = o.goodsInfo),
                                    o.goodsInfo &&
                                      (e.goodsInfo.goodsNum =
                                        (null === (V = v.passengers) ||
                                        void 0 === V
                                          ? void 0
                                          : V.length) || 1),
                                    (x.title = o.title || ""),
                                    (x.subTitle = o.subTitle || ""),
                                    (x.price = o.price || ""),
                                    (I = o.rights || []),
                                    (Z = o.rightInfo);
                                var B = "",
                                  C = null;
                                (e.refuseToast = {}),
                                  a &&
                                    ((B = a.title || ""),
                                    (e.refuseToast = a.refuseToast || {}),
                                    (C = a.refuseOptionToast)),
                                  (e.tracePrice =
                                    (null == o ? void 0 : o.price) || "");
                                var P = (null == o ? void 0 : o.price) || "";
                                if (l) {
                                  e.couponPrice = l.couponPrice;
                                  var S = !0,
                                    F = k.a4.getAttr(e.oid) || {};
                                  F.hasShowedLuckPop
                                    ? (S = !1)
                                    : k.a4.setAttr(
                                        e.oid,
                                        (0, r.Z)(
                                          (0, r.Z)({}, F),
                                          {},
                                          { hasShowedLuckPop: !0 }
                                        )
                                      ),
                                    e.setState({
                                      rotaryTables: l.rotaryTables,
                                      couponPrice: l.couponPrice,
                                      isShowLuckDrawPopup: S,
                                    });
                                }
                                var X,
                                  z = !1;
                                -1 != ["B", "D"].indexOf(e.experimentCode) &&
                                  _ &&
                                  ((z = !0),
                                  (X = _.tabs || []),
                                  e.ubtTrace(205916, {
                                    exposureType: "normal",
                                    bizKey: "z_jian_under_ljchup_buttton_show",
                                  })),
                                  e.setState({
                                    isLoding: !1,
                                    vipRights: w,
                                    noVipRights: y,
                                    ticketInfo: b,
                                    passengerInfo: v,
                                    endPayTime: T,
                                    rightBoxInfo: x,
                                    rights: I,
                                    refuseBtnName: B,
                                    buttonInfo: c,
                                    productPrice: P,
                                    refuseOptionToast: C,
                                    isNewStyle: z,
                                    rightTitleInfo: Z,
                                    newStyleTabs: X,
                                    newStyleTabsIndex: 0,
                                    retainDrawerInfo: d,
                                    travelComboInfo: m,
                                    couponDescInfo: u,
                                    monitorOrderInfo: h,
                                  });
                              } else
                                (0, N.showToast)(
                                  "抱歉，请前往列表页刷新获得最新状态"
                                ),
                                  setTimeout(function () {
                                    e.jumpGrabList();
                                  }, 2e3);
                            })
                            .catch(function (i) {
                              console.error("init data error ", i),
                                (0, N.showToast)(
                                  "抱歉，请前往列表页刷新获得最新状态"
                                ),
                                setTimeout(function () {
                                  e.jumpGrabList();
                                }, 2e3);
                            });
                        },
                      },
                      {
                        key: "handleCancelClick",
                        value: function () {
                          var e = this;
                          this.ubtTrace(205918, {
                            bizKey: "z_jlpiao_profit_confirm_reject_click",
                            orderId: this.oid,
                            price: this.tracePrice,
                            experimentNumber: this.experimentNumber,
                          });
                          var i = this.refuseToast;
                          this.state.refuseOptionToast
                            ? (this.ubtTrace(205916, {
                                exposureType: "actionbar",
                                bizKey: "z_jianlou_giveup_lanjie_show",
                              }),
                              this.setState({ refusePackageDrawerVisible: !0 }))
                            : (this.ubtTrace(205916, {
                                exposureType: "popup",
                                bizKey: "z_jlpiao_profit_giveup_popup_show",
                                orderId: this.oid,
                              }),
                              this.showMultiButtonDialog({
                                title: (null == i ? void 0 : i.title) || "",
                                content:
                                  (null == i ? void 0 : i.subTitle) || "",
                                leftButtonName:
                                  (null == i ? void 0 : i.leftName) || "",
                                rightButtonName:
                                  (null == i ? void 0 : i.rightName) || "",
                                onRightButtonClick: function () {
                                  e.ubtTrace(205918, {
                                    bizKey:
                                      "z_jlpiao_profit_giveup_popup_zxx_click",
                                    orderId: e.oid,
                                  });
                                },
                                onLeftButtonClick: function () {
                                  e.ubtTrace(205918, {
                                    bizKey:
                                      "z_jlpiao_profit_giveup_popup_fqbcp_click",
                                    orderId: e.oid,
                                  }),
                                    (e.confirmExtInfo = {
                                      holdSeatUserActionType: 1,
                                      holdSeatProductIds: [],
                                      treasuresGoods: [],
                                    }),
                                    e.handleConfirm({
                                      confirmExtInfo: e.confirmExtInfo,
                                    });
                                },
                              }));
                        },
                      },
                      {
                        key: "handleConfirmClick",
                        value: function () {
                          (this.confirmExtInfo = {
                            holdSeatUserActionType: 2,
                            holdSeatProductIds: [this.productId] || 0,
                          }),
                            this.goodsInfo &&
                              (this.confirmExtInfo.treasuresGoods = [
                                this.goodsInfo,
                              ]),
                            this.couponPrice > 0 &&
                              (this.confirmExtInfo.couponPrice =
                                this.couponPrice),
                            this.handleConfirm({
                              confirmExtInfo: this.confirmExtInfo,
                            });
                        },
                      },
                      {
                        key: "handleConfirm",
                        value: function (e) {
                          var i,
                            t = this,
                            n = e.curPollingTime,
                            o = void 0 === n ? 0 : n,
                            a = e.curPollingKey,
                            c = e.curTotalPollingTime,
                            r = void 0 === c ? 10 : c,
                            s = e.confirmExtInfo,
                            l = void 0 === s ? {} : s,
                            _ = !1;
                          (null === (i = l.holdSeatProductIds) || void 0 === i
                            ? void 0
                            : i.length) > 0 && (_ = !0),
                            o > r
                              ? this.showLoadingPopByType(0)
                              : ((0, N.showLoading)(),
                                (0, Z.xIW)({
                                  orderNumber: this.oid,
                                  confirmType: 100,
                                  pollingKey: a,
                                  confirmExtInfo: l,
                                })
                                  .then(function (e) {
                                    if (
                                      (console.error(
                                        "holdSeatConfirmPromise",
                                        {
                                          orderNumber: t.oid,
                                          confirmType: 100,
                                          pollingKey: a,
                                          confirmExtInfo: l,
                                        },
                                        e
                                      ),
                                      [-1, 2].includes(e.resultCode))
                                    )
                                      return (
                                        (0, N.showToast)(
                                          "网络错误，请稍后重试~"
                                        ),
                                        void setTimeout(function () {
                                          t.jumpGrabList();
                                        }, 1e3)
                                      );
                                    if (0 === e.payFlag) {
                                      _
                                        ? t.showLoadingPopByType(1)
                                        : t.showLoadingPopByType(2),
                                        a ||
                                          2 !== l.holdSeatUserActionType ||
                                          t.isMonitorOrder ||
                                          t.ubtTrace(205918, {
                                            bizKey:
                                              "z_jlpiao_profit_confirm_accept_click",
                                            orderId: t.oid,
                                            payType: 0,
                                            price: t.tracePrice,
                                            experimentNumber:
                                              t.experimentNumber,
                                          });
                                      var i =
                                          (null == e
                                            ? void 0
                                            : e.pollingInfo) || {},
                                        n = i.pollingInterval,
                                        c = void 0 === n ? 1 : n,
                                        r = i.totalPollingTime,
                                        s = void 0 === r ? 10 : r,
                                        d = i.pollingKey;
                                      if (1 === e.resultCode) {
                                        var m,
                                          u =
                                            null === (m = e.confirmFailToast) ||
                                            void 0 === m
                                              ? void 0
                                              : m.actionType;
                                        1 === u
                                          ? t.showLoadingPopByType(0)
                                          : 2 === u
                                          ? (0, N.showToast)("支付失败，请重试")
                                          : setTimeout(function () {
                                              t.closeLoadingPop(),
                                                t.jumpOrderDetail();
                                            }, 2e3);
                                      } else if (3 === e.resultCode) {
                                        o += c;
                                        var h = setTimeout(function () {
                                          t.handleConfirm({
                                            curPollingTime: o,
                                            curPollingKey: d,
                                            curTotalPollingTime: s,
                                            confirmExtInfo: t.confirmExtInfo,
                                          }),
                                            clearTimeout(h);
                                        }, 1e3 * c);
                                      }
                                    } else
                                      1 === e.payFlag
                                        ? (2 === l.holdSeatUserActionType &&
                                            (t.isMonitorOrder ||
                                              t.ubtTrace(205918, {
                                                bizKey:
                                                  "z_jlpiao_profit_confirm_accept_click",
                                                orderId: t.oid,
                                                payType: 1,
                                                price: t.tracePrice,
                                                experimentNumber:
                                                  t.experimentNumber,
                                              })),
                                          T.ZP.doPayment({
                                            business: "train",
                                            orderNumber: e.payOrderNumber,
                                            title: "火车票订单",
                                          }).then(
                                            function (e) {
                                              console.log(
                                                "payUtil.doPayment:",
                                                e
                                              ),
                                                t.showLoadingPopByType(1),
                                                setTimeout(function () {
                                                  t.closeLoadingPop(),
                                                    t.jumpOrderDetail();
                                                }, 2e3);
                                            },
                                            function (e) {
                                              (0, N.showToast)(
                                                "支付失败，请重试"
                                              ),
                                                console.error(
                                                  "payUtil.doPayment:",
                                                  e
                                                );
                                            }
                                          ))
                                        : 2 === e.payFlag &&
                                          (2 === l.holdSeatUserActionType &&
                                            (t.isMonitorOrder ||
                                              t.ubtTrace(205918, {
                                                bizKey:
                                                  "z_jlpiao_profit_confirm_accept_click",
                                                orderId: t.oid,
                                                payType: 1,
                                                price: t.tracePrice,
                                                experimentNumber:
                                                  t.experimentNumber,
                                              })),
                                          T.ZP.doPayment({
                                            business: "train",
                                            orderNumber: e.payOrderNumber,
                                            goodsId: e.paymentId,
                                            title: "火车票订单",
                                          }).then(
                                            function (e) {
                                              console.log(
                                                "payUtil.doPayment:",
                                                e
                                              ),
                                                t.showLoadingPopByType(1),
                                                setTimeout(function () {
                                                  t.closeLoadingPop(),
                                                    t.jumpOrderDetail();
                                                }, 2e3);
                                            },
                                            function (e) {
                                              (0, N.showToast)(
                                                "支付失败，请重试"
                                              ),
                                                console.error(
                                                  "payUtil.doPayment:",
                                                  e
                                                );
                                            }
                                          ));
                                  })
                                  .catch(function (e) {
                                    (0, N.showToast)("网络错误，请稍后重试~"),
                                      console.warn("holdSeatConfirm", e);
                                  })
                                  .finally(function () {
                                    (0, N.hideLoading)();
                                  }));
                        },
                      },
                      {
                        key: "handleRefusePackageDrawerConfirm",
                        value: function (e) {
                          var i = this.state.passengerInfo;
                          if (
                            (this.setState({ refusePackageDrawerVisible: !1 }),
                            1 == e.optionType)
                          )
                            (this.confirmExtInfo = {
                              holdSeatUserActionType: 1,
                              holdSeatProductIds: [],
                            }),
                              this.handleConfirm({
                                confirmExtInfo: this.confirmExtInfo,
                              });
                          else {
                            if (
                              ((this.confirmExtInfo = {
                                holdSeatUserActionType: 2,
                                holdSeatProductIds: [e.productId] || 0,
                              }),
                              this.couponPrice > 0 &&
                                (this.confirmExtInfo.couponPrice =
                                  this.couponPrice),
                              e.goodsInfo)
                            ) {
                              var t,
                                n = e.goodsInfo;
                              (n.goodsNum =
                                (null === (t = i.passengers) || void 0 === t
                                  ? void 0
                                  : t.length) || 1),
                                (this.confirmExtInfo.treasuresGoods = [n]);
                            }
                            this.handleConfirm({
                              confirmExtInfo: this.confirmExtInfo,
                            });
                          }
                        },
                      },
                      {
                        key: "showLoadingPopByType",
                        value: function (e) {
                          this.showLoadingPop(),
                            0 === e
                              ? this.setState({
                                  loadingPopInfo: {
                                    headImg:
                                      "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/icon_cpsb@3x.png",
                                    title: "扣款失败，请重试",
                                    subTitle:
                                      "当前扣款失败，无法成功出票，请重新尝试",
                                    leftName: "我知道了",
                                    rightName: "去付款",
                                  },
                                })
                              : 1 === e
                              ? this.setState({
                                  loadingPopInfo: {
                                    headImg:
                                      "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/icon_cpz@3x.png",
                                    title: "购买成功 正在出票中…",
                                    subTitle: "请耐心等待，智行正在为您出票中",
                                  },
                                })
                              : 2 === e &&
                                this.setState({
                                  loadingPopInfo: {
                                    headImg:
                                      "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/icon_cpz@3x.png",
                                    title: "正在为您出票中…",
                                  },
                                });
                        },
                      },
                      {
                        key: "showLoadingPop",
                        value: function () {
                          this.setState({ loadingPopVisible: !0 });
                        },
                      },
                      {
                        key: "closeLoadingPop",
                        value: function () {
                          this.setState({ loadingPopVisible: !1 });
                        },
                      },
                      {
                        key: "confirmLoadingPop",
                        value: function () {
                          this.closeLoadingPop(),
                            this.handleConfirm({
                              confirmExtInfo: this.confirmExtInfo,
                            });
                        },
                      },
                      {
                        key: "getFreeTicketTask",
                        value: function () {
                          var e = this;
                          (0, C.GE)({ orderNumber: this.oid, scene: 2 })
                            .then(function (i) {
                              if (1 === i.resultCode) {
                                var t = i.jlTaskInfo;
                                e.setState({ jlTaskInfo: t });
                                var n = k.a4.getAttr(e.oid) || {};
                                1 === t.taskType &&
                                  2 === t.taskStatus &&
                                  n.isClickFreeBtn &&
                                  (e.setState({
                                    refusePackageDrawerVisible: !1,
                                  }),
                                  e.onFreeTaskFinished());
                              } else console.warn(i.resultMessage);
                            })
                            .catch(function (e) {
                              console.warn(e);
                            });
                        },
                      },
                      {
                        key: "openScanADVideoPop",
                        value: function (e) {
                          this.setState({ adVideoPopVisible: !0, videoSrc: e });
                        },
                      },
                      {
                        key: "notifyServerTaskFinished",
                        value: function () {
                          return (0, C.Sh)({ orderNumber: this.oid, scene: 2 });
                        },
                      },
                      {
                        key: "handleFreeTaskConfirm",
                        value: function () {
                          var e = (this.state.jlTaskInfo || {}).taskType,
                            i = void 0 === e ? -1 : e;
                          (this.confirmExtInfo = {
                            holdSeatUserActionType: 1,
                            holdTaskType: i,
                            holdSeatProductIds: [],
                          }),
                            this.handleConfirm({
                              confirmExtInfo: this.confirmExtInfo,
                            });
                        },
                      },
                      {
                        key: "onFreeTaskFinished",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          this.notifyServerTaskFinished()
                                        );
                                      case 3:
                                        1 === e.sent.resultCode
                                          ? this.handleFreeTaskConfirm()
                                          : ((0, N.showToast)(
                                              "网络异常，请稍后再试~"
                                            ),
                                            console.warn("clickGrabSpeedTask")),
                                          (e.next = 11);
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(0)),
                                          (0, N.showToast)(
                                            "网络异常，请稍后再试~"
                                          ),
                                          console.warn(e.t0);
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 7]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "handleFreeBtnClick",
                        value: function () {
                          var e = k.a4.getAttr(this.oid) || {};
                          k.a4.setAttr(
                            this.oid,
                            (0, r.Z)(
                              (0, r.Z)({}, e),
                              {},
                              { isClickFreeBtn: !0 }
                            )
                          );
                        },
                      },
                      {
                        key: "onTimeEnd",
                        value: function () {
                          var e = this;
                          this.ubtDevTrace("o_train_mini_jianlou_timeout", {
                            oid: this.oid,
                            confirmExtInfo: this.confirmExtInfo,
                          }),
                            this.showLoadingPopByType(2),
                            setTimeout(function () {
                              e.closeLoadingPop(), e.jumpOrderDetail();
                            }, 2e3);
                        },
                      },
                      {
                        key: "showNoWorryLoadingPopByType",
                        value: function (e) {
                          this.showLoadingPop(),
                            0 === e
                              ? this.setState({
                                  loadingPopInfo: {
                                    headImg:
                                      "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/icon_cpsb@3x.png",
                                    title: "扣款失败，请重试",
                                    subTitle:
                                      "当前扣款失败，无法成功出票，请重新尝试",
                                    leftName: "我知道了",
                                    rightName: "去付款",
                                  },
                                })
                              : 1 === e
                              ? this.setState({
                                  loadingPopInfo: {
                                    headImg:
                                      "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/icon_cpz@3x.png",
                                    title: "购买成功 正在出票中…",
                                  },
                                })
                              : 2 === e
                              ? this.setState({
                                  loadingPopInfo: {
                                    headImg:
                                      "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/icon_cpz@3x.png",
                                    title: "正在出票中 请耐心等待…",
                                  },
                                })
                              : 3 === e &&
                                this.setState({
                                  loadingPopInfo: {
                                    headImg:
                                      "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/icon_cpz@3x.png",
                                    title: "信用付扣款中 请耐心等待…",
                                  },
                                });
                        },
                      },
                      {
                        key: "handleNoWorryConfirm",
                        value: function (e) {
                          var i,
                            t = this,
                            n = e.curPollingTime,
                            o = void 0 === n ? 0 : n,
                            a = e.curPollingKey,
                            c = e.curTotalPollingTime,
                            r = void 0 === c ? 10 : c,
                            s = e.confirmExtInfo,
                            l = void 0 === s ? {} : s,
                            _ = !1;
                          (null === (i = l.holdSeatProductIds) || void 0 === i
                            ? void 0
                            : i.length) > 0 && (_ = !0),
                            o > r
                              ? this.showNoWorryLoadingPopByType(0)
                              : ((0, N.showLoading)(),
                                (0, Z.xIW)({
                                  orderNumber: this.oid,
                                  confirmType: 100,
                                  pollingKey: a,
                                  confirmExtInfo: l,
                                })
                                  .then(function (e) {
                                    if ([-1, 2].includes(e.resultCode))
                                      return (
                                        (0, N.showToast)(
                                          "网络错误，请稍后重试~"
                                        ),
                                        void setTimeout(function () {
                                          t.jumpGrabList();
                                        }, 1e3)
                                      );
                                    if (0 === e.payFlag) {
                                      _
                                        ? t.showNoWorryLoadingPopByType(3)
                                        : t.showNoWorryLoadingPopByType(2);
                                      var i =
                                          (null == e
                                            ? void 0
                                            : e.pollingInfo) || {},
                                        n = i.pollingInterval,
                                        a = void 0 === n ? 1 : n,
                                        c = i.totalPollingTime,
                                        r = void 0 === c ? 10 : c,
                                        s = i.pollingKey;
                                      if (1 === e.resultCode) {
                                        var d,
                                          m =
                                            null === (d = e.confirmFailToast) ||
                                            void 0 === d
                                              ? void 0
                                              : d.actionType;
                                        1 === m
                                          ? t.showNoWorryLoadingPopByType(0)
                                          : 2 === m
                                          ? (0, N.showToast)("支付失败，请重试")
                                          : (_ &&
                                              t.showNoWorryLoadingPopByType(1),
                                            setTimeout(function () {
                                              t.closeLoadingPop(),
                                                t.jumpOrderDetail();
                                            }, 2e3));
                                      } else if (3 === e.resultCode) {
                                        o += a;
                                        var u = setTimeout(function () {
                                          t.handleNoWorryConfirm({
                                            curPollingTime: o,
                                            curPollingKey: s,
                                            curTotalPollingTime: r,
                                            confirmExtInfo: t.confirmExtInfo,
                                          }),
                                            clearTimeout(u);
                                        }, 1e3 * a);
                                      }
                                    } else
                                      1 === e.payFlag
                                        ? T.ZP.doPayment({
                                            business: "train",
                                            orderNumber: e.payOrderNumber,
                                            title: "火车票订单",
                                          }).then(
                                            function (e) {
                                              console.log(
                                                "payUtil.doPayment:",
                                                e
                                              ),
                                                _
                                                  ? t.showNoWorryLoadingPopByType(
                                                      1
                                                    )
                                                  : t.showNoWorryLoadingPopByType(
                                                      2
                                                    ),
                                                setTimeout(function () {
                                                  t.closeLoadingPop(),
                                                    t.jumpOrderDetail();
                                                }, 2e3);
                                            },
                                            function (e) {
                                              (0, N.showToast)(
                                                "支付失败，请重试"
                                              ),
                                                console.error(
                                                  "payUtil.doPayment:",
                                                  e
                                                );
                                            }
                                          )
                                        : 2 === e.payFlag &&
                                          (2 === l.holdSeatUserActionType &&
                                            t.ubtTrace(205918, {
                                              bizKey:
                                                "z_jlpiao_profit_confirm_accept_click",
                                              orderId: t.oid,
                                              payType: 1,
                                              price: t.tracePrice,
                                              experimentNumber:
                                                t.experimentNumber,
                                            }),
                                          T.ZP.doPayment({
                                            business: "train",
                                            orderNumber: e.payOrderNumber,
                                            goodsId: e.paymentId,
                                            title: "火车票订单",
                                          }).then(
                                            function (e) {
                                              console.log(
                                                "payUtil.doPayment:",
                                                e
                                              ),
                                                _
                                                  ? t.showNoWorryLoadingPopByType(
                                                      1
                                                    )
                                                  : t.showNoWorryLoadingPopByType(
                                                      2
                                                    ),
                                                setTimeout(function () {
                                                  t.closeLoadingPop(),
                                                    t.jumpOrderDetail();
                                                }, 2e3);
                                            },
                                            function (e) {
                                              (0, N.showToast)(
                                                "支付失败，请重试"
                                              ),
                                                console.error(
                                                  "payUtil.doPayment:",
                                                  e
                                                );
                                            }
                                          ));
                                  })
                                  .catch(function (e) {
                                    (0, N.showToast)("网络错误，请稍后重试~"),
                                      console.warn("holdSeatConfirm", e);
                                  })
                                  .finally(function () {
                                    (0, N.hideLoading)();
                                  }));
                        },
                      },
                      {
                        key: "handleNoWorryRefuseClick",
                        value: function () {
                          (this.confirmExtInfo = {
                            holdSeatUserActionType: 1,
                            holdSeatProductIds: [],
                          }),
                            this.handleNoWorryConfirm({
                              confirmExtInfo: this.confirmExtInfo,
                            });
                        },
                      },
                      {
                        key: "handleNoWorryConfirmClick",
                        value: function (e) {
                          (this.confirmExtInfo = {
                            holdSeatUserActionType: 2,
                            holdSeatProductIds: [e] || 0,
                          }),
                            this.handleNoWorryConfirm({
                              confirmExtInfo: this.confirmExtInfo,
                            });
                        },
                      },
                      {
                        key: "resetToPay",
                        value: function () {
                          this.closeLoadingPop(),
                            this.handleNoWorryConfirm({
                              confirmExtInfo: this.confirmExtInfo,
                            });
                        },
                      },
                      {
                        key: "onNoWorryTimeEnd",
                        value: function () {
                          var e = this;
                          this.showNoWorryLoadingPopByType(2),
                            setTimeout(function () {
                              e.closeLoadingPop(), e.jumpOrderDetail();
                            }, 2e3);
                        },
                      },
                      {
                        key: "onNoWorryBack",
                        value: function () {
                          this.state.pageLength > 1
                            ? g().navigateBack()
                            : this.jumpGrabList();
                        },
                      },
                      {
                        key: "payFailDrawer",
                        value: function (e) {
                          var i = this;
                          return (0, S.BX)(u.View, {
                            className: " _nd _p _i _k _l _qt",
                            children: [
                              (0, S.tZ)(u.View, {
                                className: " _u _q _EI _dG _nd",
                              }),
                              (0, S.tZ)(u.Image, {
                                className: " _p _FI _Lp _Pp",
                                src: "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/icon_wqy@3x.png",
                              }),
                              (0, S.tZ)(u.Image, {
                                className: " _u _Zb _qk _cc _bc",
                                src: "https://images3.c-ctrip.com/train/tieyou-mini-img/popup_close.png",
                                id: "AJFP",
                                onClick: e,
                              }),
                              (0, S.tZ)(u.View, {
                                className: " _p _Xk _sb _ED _bc _Oc",
                                children: "支付失败",
                              }),
                              (0, S.tZ)(u.View, {
                                className: " _p _qd _oc _YE _Ua _U",
                                children: "支付失败，请手动支付",
                              }),
                              (0, S.tZ)(u.Button, {
                                className:
                                  " _p _td _w _Oa _Gc _Xc _ud _o _qb _oB",
                                id: "AJFQ",
                                onClick: function () {
                                  e(), i.resetToPay();
                                },
                                children: "去支付",
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "cancelOrder",
                        value: function () {
                          var e = this;
                          (0, N.showLoading)();
                          var i = {
                            orderNumber: this.oid,
                            partnerName: h.default.partner,
                            cancelVip: 0,
                          };
                          return (0, Z.FHX)(i)
                            .then(function (i) {
                              if (1 === i.resultCode)
                                return e.jumpGrabList(), !0;
                              g().showModal({
                                title: "温馨提示",
                                content: i.resultMessage,
                                showCancel: !1,
                                confirmText: "确定",
                              });
                            })
                            .finally(function () {
                              (0, N.hideLoading)();
                            });
                        },
                      },
                      {
                        key: "handleMonitorRefuseClick",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              var i, t, n, o;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          this.$CommonSceneDrawer.confirmAsync({
                                            title:
                                              (null ===
                                                (i = this.refuseToast) ||
                                              void 0 === i
                                                ? void 0
                                                : i.title) ||
                                              "确认不要这张票吗？",
                                            content:
                                              (null ===
                                                (t = this.refuseToast) ||
                                              void 0 === t
                                                ? void 0
                                                : t.subTitle) ||
                                              "如果连续取消多次，会失去监控机会哦",
                                            icon: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/img_fuceng_chupiao.webp",
                                            cancelText:
                                              (null ===
                                                (n = this.refuseToast) ||
                                              void 0 === n
                                                ? void 0
                                                : n.leftName) || "我再想想",
                                            confirmText:
                                              (null ===
                                                (o = this.refuseToast) ||
                                              void 0 === o
                                                ? void 0
                                                : o.rightName) || "不要这张票",
                                          })
                                        );
                                      case 2:
                                        e.sent && this.cancelOrder();
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
                        key: "handleMonitorConfirmClick",
                        value: function () {
                          (this.confirmExtInfo = {
                            holdSeatUserActionType: 2,
                            holdSeatProductIds: [],
                          }),
                            this.handleConfirm({
                              confirmExtInfo: this.confirmExtInfo,
                            });
                        },
                      },
                      {
                        key: "onMonitorTimeEnd",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          this.$CommonSceneDrawer.alertAsync({
                                            title:
                                              '<span style="color:#fc635f">确认超时</span>，已自动取消扣位',
                                            content:
                                              "确认超时，我们将继续为您监控余票",
                                            icon: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/img_fuceng_chaoshi.webp",
                                            buttonName: "我知道了",
                                            maskClose: !1,
                                          })
                                        );
                                      case 2:
                                        this.jumpGrabList();
                                      case 3:
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
                        key: "jumpGrabOrder",
                        value: function () {
                          this.redirectTo({
                            url: B.ZP.getTrainGrabOrderDetailUrl(this.oid),
                          });
                        },
                      },
                      {
                        key: "jumpOrderDetail",
                        value: function () {
                          this.redirectTo({
                            url: B.ZP.getTrainDetailUrl(this.oid),
                          });
                        },
                      },
                      {
                        key: "jumpGrabList",
                        value: function () {
                          g().reLaunch({
                            url: "/pages/trnshare/grablist/grablist",
                          });
                        },
                      },
                      {
                        key: "doHomeBack",
                        value: function () {
                          w.Z.relaunchHome();
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          this.clickBackCount++;
                          var e = this.state,
                            i = e.pageLength,
                            t = e.retainDrawerInfo;
                          -1 !=
                            ["A", "B", "C", "D"].indexOf(this.experimentCode) &&
                          t &&
                          1 == this.clickBackCount
                            ? this.setState({ isShowRetainDrawer: !0 })
                            : (this.ubtDevTrace("o_train_jianlou_back"),
                              i > 1 ? g().navigateBack() : this.jumpGrabList());
                        },
                      },
                      {
                        key: "onTabChange",
                        value: function (e) {
                          1 === e
                            ? (this.ubtTrace(205918, {
                                bizKey: "z_jian_fqchup_tab_click",
                              }),
                              this.ubtTrace(205916, {
                                exposureType: "normal",
                                bizKey: "z_jian_under_fqchup_buttton_show",
                              }))
                            : this.ubtTrace(205916, {
                                exposureType: "normal",
                                bizKey: "z_jian_under_ljchup_buttton_show",
                              }),
                            this.setState({ newStyleTabsIndex: e });
                        },
                      },
                      {
                        key: "onCloseRetainDrawer",
                        value: function () {
                          this.setState({ isShowRetainDrawer: !1 });
                        },
                      },
                      {
                        key: "onShowCouponInfoDrawer",
                        value: function () {
                          this.setState({ isShowCouponDescDrawer: !0 });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            i = this.state,
                            t = i.endPayTime,
                            n = (i.buttonInfo, i.loadingPopVisible),
                            o = void 0 === n || n,
                            a = i.loadingPopInfo,
                            c = i.refusePackageDrawerVisible,
                            r = i.refuseOptionToast,
                            s = i.jlTaskInfo,
                            l = i.adVideoPopVisible,
                            _ = i.videoSrc,
                            d = i.isShowLuckDrawPopup,
                            m = i.rotaryTables,
                            h = i.couponPrice,
                            p = i.isNewStyle,
                            f = i.isLoding,
                            g = void 0 === f || f,
                            w = i.isShowRetainDrawer,
                            N = i.ticketInfo,
                            y = i.passengerInfo,
                            T = i.scrollLeft,
                            Z = i.retainDrawerInfo,
                            k = i.productPrice,
                            B = i.travelComboInfo,
                            C = i.statusBarHeight,
                            P = i.pageLength,
                            X = i.isShowCouponDescDrawer,
                            z = i.couponDescInfo,
                            D = i.monitorOrderInfo;
                          return (0, S.BX)(u.View, {
                            className: "".concat(de ? "ty" : "zx"),
                            children: [
                              g
                                ? (0, S.tZ)(u.View, {})
                                : this.isMonitorOrder
                                ? (0, S.tZ)(_e, {
                                    endPayTime: t,
                                    scrollLeft: T,
                                    content: D,
                                    ticketInfo: N,
                                    passengerInfo: y,
                                    statusBarHeight: C,
                                    pageLength: P,
                                    onBack: this.onNoWorryBack,
                                    onRefuseClick:
                                      this.handleMonitorRefuseClick,
                                    onConfirmClick:
                                      this.handleMonitorConfirmClick,
                                    onTimeEnd: this.onMonitorTimeEnd,
                                    ubtTrace: this.ubtTrace,
                                  })
                                : "holdSeatTravel" !== this.senceType
                                ? p
                                  ? (0, S.tZ)(ee, {
                                      content: this.state,
                                      onBack: this.onBack,
                                      onTabChange: this.onTabChange,
                                      onShowCouponInfoDrawer:
                                        this.onShowCouponInfoDrawer,
                                      handleConfirmClick:
                                        this.handleConfirmClick,
                                      onTimeEnd: this.onTimeEnd,
                                      handleCancelClick: this.handleCancelClick,
                                    })
                                  : (0, S.tZ)(ae, {
                                      content: this.state,
                                      experimentCode: this.experimentCode,
                                      onBack: this.onBack,
                                      onTabChange: this.onTabChange,
                                      onShowCouponInfoDrawer:
                                        this.onShowCouponInfoDrawer,
                                      handleConfirmClick:
                                        this.handleConfirmClick,
                                      onTimeEnd: this.onTimeEnd,
                                      handleCancelClick: this.handleCancelClick,
                                    })
                                : (0, S.tZ)(J, {
                                    endPayTime: t,
                                    scrollLeft: T,
                                    content: B,
                                    ticketInfo: N,
                                    passengerInfo: y,
                                    statusBarHeight: C,
                                    pageLength: P,
                                    onBack: this.onNoWorryBack,
                                    onRefuseClick:
                                      this.handleNoWorryRefuseClick,
                                    onConfirmClick:
                                      this.handleNoWorryConfirmClick,
                                    onTimeEnd: this.onNoWorryTimeEnd,
                                    ubtTrace: this.ubtTrace,
                                  }),
                              (0, S.tZ)(b.Z, {
                                ref: function (i) {
                                  e.onDialogAttach(i);
                                },
                              }),
                              (0, S.tZ)(v.Z, {
                                ref: function (i) {
                                  e.onDrawerAttach(i);
                                },
                              }),
                              (0, S.tZ)(V.Z, {
                                ref: function (i) {
                                  e.$CommonSceneDrawer = i;
                                },
                              }),
                              "holdSeatTravel" !== this.senceType &&
                                (0, S.BX)(S.HY, {
                                  children: [
                                    (0, S.tZ)(j, {
                                      visible: c,
                                      content: r,
                                      endPayTime: t,
                                      isTieyou: de,
                                      jlTaskInfo: s,
                                      couponPrice: h || 0,
                                      openScanADVideoPop: function (i) {
                                        e.setState({
                                          refusePackageDrawerVisible: !1,
                                        }),
                                          e.openScanADVideoPop(i);
                                      },
                                      handleFreeBtnClick:
                                        this.handleFreeBtnClick,
                                      ubtTrace: this.ubtTrace,
                                      oid: this.oid,
                                      onClose: function () {
                                        e.ubtTrace(205918, {
                                          bizKey:
                                            "z_jianlou_giveup_lanjie_close_click",
                                        }),
                                          e.setState({
                                            refusePackageDrawerVisible: !1,
                                          });
                                      },
                                      onConfirm: function (i) {
                                        e.ubtTrace(205918, {
                                          bizKey:
                                            "z_jianlou_giveup_lanjie_confirm_click",
                                          type: i.optionType,
                                        }),
                                          e.handleRefusePackageDrawerConfirm(i);
                                      },
                                    }),
                                    (0, S.tZ)(x.Z, {
                                      visible: l,
                                      src: _,
                                      onFinish: function () {
                                        e.setState({ adVideoPopVisible: !1 }),
                                          e.onFreeTaskFinished();
                                      },
                                    }),
                                    d &&
                                      h > 0 &&
                                      (0, S.tZ)(K.Z, {
                                        orderNumber: this.oid,
                                        payRemindInfo: {
                                          rotaryTables: m,
                                          couponPrice: h,
                                        },
                                        noFromSmartRSPage: !0,
                                        closeModal: function () {
                                          e.setState({
                                            isShowLuckDrawPopup: !1,
                                          });
                                        },
                                      }),
                                    w &&
                                      (0, S.tZ)(A, {
                                        isShow: w,
                                        retainDrawerInfo: Z,
                                        ticketInfo: N,
                                        passengerInfo: y,
                                        scrollLeft: T,
                                        price: k - (h || 0),
                                        onCancel: function () {
                                          return e.onBack();
                                        },
                                        onConfirm: function () {
                                          e.onCloseRetainDrawer(),
                                            e.handleConfirmClick();
                                        },
                                        onClose: this.onCloseRetainDrawer,
                                      }),
                                    (0, S.tZ)(F, {
                                      visible: o,
                                      loadingPopInfo: a,
                                      onClose: this.closeLoadingPop,
                                      onConfirm: this.confirmLoadingPop,
                                    }),
                                  ],
                                }),
                              "holdSeatTravel" === this.senceType &&
                                (0, S.tZ)(S.HY, {
                                  children: (0, S.tZ)(F, {
                                    visible: o,
                                    loadingPopInfo: a,
                                    onClose: this.closeLoadingPop,
                                    onConfirm: this.confirmLoadingPop,
                                  }),
                                }),
                              X &&
                                (0, S.tZ)(I.Z, {
                                  detailInfo: { title: "产品说明", content: z },
                                  onClose: function () {
                                    e.setState({ isShowCouponDescDrawer: !1 });
                                  },
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    t
                  );
                })(m.Component))
              ) || n;
          Page(
            (0, o.createPageConfig)(
              me,
              "pages/trainDetail/jianlouConfirm/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "抢票详情",
                navigationBarBackgroundColor: "#0062FF",
                backgroundColorTop: "#0062FF",
                backgroundColorBottom: "#034BEE",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            93611, 3322, 36332, 95854, 35203, 4978, 92167, 15924, 3429, 20324,
            69271, 87577, 2548, 19559, 11216, 68592,
          ],
          function () {
            return (function (i) {
              return e((e.s = i));
            })(67455);
          }
        ),
          e.O();
      },
    ]);
})();
