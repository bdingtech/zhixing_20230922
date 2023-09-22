!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/e5d3d1be4be16b526d43188e1b24d26e.js"),
    require("../sub-common/4170bd0bcba1375f71e0231ba3309624.js"),
    require("../sub-common/830933a669f2df38f638a51273333128.js"),
    require("../sub-common/385c2d6294d83fae9baca300c0698c74.js"),
    require("../sub-common/329c774b53fa8717b042c2679ca9dc49.js"),
    require("../sub-common/d713e6c3587d81e961c85ebd4545654c.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [48905],
      {
        61253: function (e, t, i) {
          var a,
            r = i(32180),
            n = i(90129),
            s = i(79301),
            o = i(95308),
            c = i(57042),
            l = i(24460),
            d = i(21867),
            u = i(86066),
            h = i(92954),
            p = i.n(h),
            m = i(52500),
            g = i(81957),
            f = i(71515),
            b = i(34229),
            _ = i(5050),
            w = i(79792),
            v = i(79295),
            Z = i(79910),
            N = i(58676),
            x = i(25391),
            k = i(18783),
            y = i(61896),
            S = i(25958),
            T = i(86977),
            B = i(96158),
            z = i(3205),
            I = i(10741),
            V = i(49120),
            D = i(477),
            C = i(94190),
            P = i(24565),
            A = i(59076),
            O = i(48813),
            F = m.default.memo(function (e) {
              var t = Object(e),
                i = t.show,
                a = void 0 !== i && i,
                r = t.type,
                n = void 0 === r ? 0 : r,
                s = t.title,
                o = void 0 === s ? "" : s,
                c = t.taskProducts,
                l = void 0 === c ? [] : c;
              return (0, O.tZ)(f.Block, {
                children:
                  a &&
                  (0, O.BX)(f.View, {
                    className: "frd-equity",
                    children: [
                      (0, O.tZ)(f.View, {
                        className: "frd-equity-hd",
                        children: (0, O.tZ)(f.View, {
                          className: "tit",
                          children: o,
                        }),
                      }),
                      (0, O.BX)(f.View, {
                        className: "frd-equity-bd",
                        children: [
                          (3 === n || 2 === n) &&
                            (0, O.tZ)(f.View, {
                              className: "frd-equity-list ".concat(
                                3 === n ? "" : "line-2"
                              ),
                              children: l.map(function (e) {
                                return 1 === e.type
                                  ? (0, O.BX)(f.View, {
                                      className: "item",
                                      children: [
                                        (0, O.BX)(f.View, {
                                          className: "detail-box priority",
                                          children: [
                                            (0, O.tZ)(f.View, {
                                              className: "tit",
                                              children: e.title,
                                            }),
                                            (0, O.tZ)(f.View, {
                                              className: "txt",
                                              children: e.subTitle,
                                            }),
                                          ],
                                        }),
                                        (0, O.tZ)(f.View, {
                                          className:
                                            0 === e.status
                                              ? "icon-blank"
                                              : "icon-suc",
                                        }),
                                      ],
                                    })
                                  : 2 === e.type
                                  ? (0, O.BX)(f.View, {
                                      className: "item",
                                      children: [
                                        (0, O.BX)(f.View, {
                                          className: "detail-box robwindow",
                                          children: [
                                            (0, O.tZ)(f.View, {
                                              className: "tit",
                                              children: e.title,
                                            }),
                                            (0, O.tZ)(f.View, {
                                              className: "txt",
                                              children: e.subTitle,
                                            }),
                                          ],
                                        }),
                                        (0, O.tZ)(f.View, {
                                          className:
                                            0 === e.status
                                              ? "icon-blank"
                                              : "icon-suc",
                                        }),
                                      ],
                                    })
                                  : 3 === e.type || 4 === e.type
                                  ? (0, O.BX)(f.View, {
                                      className: "item",
                                      children: [
                                        (0, O.BX)(f.View, {
                                          className: "detail-box robfail",
                                          children: [
                                            (0, O.tZ)(f.View, {
                                              className: "tit",
                                              children: e.title,
                                            }),
                                            (0, O.tZ)(f.View, {
                                              className: "txt",
                                              children: e.subTitle,
                                            }),
                                          ],
                                        }),
                                        (0, O.tZ)(f.View, {
                                          className:
                                            0 === e.status
                                              ? "icon-blank"
                                              : "icon-suc",
                                        }),
                                      ],
                                    })
                                  : void 0;
                              }),
                            }),
                          1 === n &&
                            (0, O.tZ)(f.Block, {
                              children: l.map(function (e) {
                                return 1 === e.type
                                  ? (0, O.BX)(f.View, {
                                      className: "frd-equity-single priority",
                                      children: [
                                        (0, O.tZ)(f.View, {
                                          className: "tit",
                                          children: e.title,
                                        }),
                                        (0, O.tZ)(f.View, {
                                          className: "txt",
                                          children: e.subTitle,
                                        }),
                                      ],
                                    })
                                  : 2 === e.type
                                  ? (0, O.BX)(f.View, {
                                      className: "frd-equity-single robwindow",
                                      children: [
                                        (0, O.tZ)(f.View, {
                                          className: "tit",
                                          children: e.title,
                                        }),
                                        (0, O.tZ)(f.View, {
                                          className: "txt",
                                          children: e.subTitle,
                                        }),
                                      ],
                                    })
                                  : 3 === e.type || 4 === e.type
                                  ? (0, O.BX)(f.View, {
                                      className: "frd-equity-single robfail",
                                      children: [
                                        (0, O.tZ)(f.View, {
                                          className: "tit",
                                          children: e.title,
                                        }),
                                        (0, O.tZ)(f.View, {
                                          className: "txt",
                                          children: e.subTitle,
                                        }),
                                      ],
                                    })
                                  : void 0;
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
              });
            }),
            L = m.default.memo(function (e) {
              var t,
                i,
                a = e.oid,
                r = void 0 === a ? "" : a,
                n = e.data,
                s = void 0 === n ? null : n,
                o = e.onClose,
                c = void 0 === o ? function () {} : o;
              if (!s || !r) return (0, O.tZ)(O.HY, {});
              var l = C.gT.get() || {},
                d = l.specialGrabDrawerNum || {},
                u = d["".concat(r)] || 0;
              return (
                (d[r] = u + 1),
                (l.specialGrabDrawerNum = d),
                C.gT.set(l),
                (0, O.tZ)(b.ZtDrawer, {
                  show: !0,
                  className: "friend-sg-drawer",
                  onWrapClose: c,
                  onClose: c,
                  children: (0, O.BX)(f.View, {
                    className: "cont flex-align-items-center flex-column",
                    children: [
                      (0, O.tZ)(f.Image, {
                        className: "bg",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/11/mianfeijiasu/bg_zhuanren.webp",
                        webp: !0,
                      }),
                      (0, O.tZ)(f.Image, {
                        className: "top-img",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/11/mianfeijiasu/img_zhuanren.webp",
                        webp: !0,
                      }),
                      (0, O.tZ)(f.View, {
                        className: "sg-tit",
                        children: s.title,
                      }),
                      (null === (t = s.tips) || void 0 === t
                        ? void 0
                        : t.length) > 0 &&
                        (0, O.BX)(f.View, {
                          className:
                            "m-box flex-align-items-center flex-column",
                          children: [
                            (0, O.tZ)(f.Image, {
                              className: "tit-bg",
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/11/mianfeijiasu/img_bg_xiaobiaoti.webp",
                              webp: !0,
                            }),
                            (0, O.tZ)(f.View, {
                              className: "tit",
                              children: s.subTitle,
                            }),
                            (0, O.tZ)(f.View, {
                              className: "items-box flex-align-items-center",
                              children: s.tips.map(function (e, t) {
                                return (0,
                                O.BX)(f.View, { className: "item flex-align-items-center flex-column flex-1", children: [(0, O.tZ)(f.Image, { className: "icon", src: e.icon, webp: !0 }), (0, O.tZ)(f.Text, { className: "i-tit", children: e.tipTitle }), (0, O.tZ)(f.Text, { className: "i-desc", children: e.tipDesc })] }, t);
                              }),
                            }),
                          ],
                        }),
                      (null === (i = s.notations) || void 0 === i
                        ? void 0
                        : i.length) > 0 &&
                        (0, O.tZ)(f.View, {
                          className: "tips-box",
                          children: s.notations.map(function (e, t) {
                            return (0,
                            O.tZ)(f.View, { className: "tips-item flex-align-items-center", children: e }, t);
                          }),
                        }),
                      (0, O.tZ)(f.View, {
                        className: "botm-box",
                        children: (0, O.tZ)(f.Button, {
                          className: "btn",
                          id: "AJAx",
                          onClick: c,
                          children: "我知道了",
                        }),
                      }),
                    ],
                  }),
                })
              );
            }),
            X = m.default.memo(function (e) {
              var t,
                i = e.oid,
                a = void 0 === i ? "" : i,
                r = e.data,
                n = void 0 === r ? null : r,
                s = e.onClose,
                o = void 0 === s ? function () {} : s;
              if (!n || !a) return (0, O.tZ)(O.HY, {});
              var c = C.gT.get() || {},
                l = c.grabFailBenifitDrawerNum || {},
                d = l["".concat(a)] || 0;
              return (
                (l[a] = d + 1),
                (c.grabFailBenifitDrawerNum = l),
                C.gT.set(c),
                (0, O.tZ)(b.ZtDrawer, {
                  show: !0,
                  className: "friend-gfb-drawer",
                  onWrapClose: o,
                  onClose: o,
                  children: (0, O.BX)(f.View, {
                    className: "cont flex-align-items-center flex-column",
                    children: [
                      (0, O.tZ)(f.Image, {
                        className: "bg",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/11/mianfeijiasu/bg_qbdp.webp",
                        webp: !0,
                      }),
                      (0, O.tZ)(f.Image, {
                        className: "top-img",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/11/mianfeijiasu/img_qbdp.webp",
                        webp: !0,
                      }),
                      (0, O.tZ)(f.View, {
                        className: "gfb-tit",
                        children: n.title,
                      }),
                      (null === (t = n.tips) || void 0 === t
                        ? void 0
                        : t.length) > 0 &&
                        (0, O.tZ)(f.View, {
                          className: "m-box flex-align-items-center",
                          children: n.tips.map(function (e, t) {
                            return (0,
                            O.BX)(f.View, { className: "item flex-align-items-center flex-column flex-1", children: [(0, O.tZ)(f.Image, { className: "icon", src: e.icon, webp: !0 }), (0, O.tZ)(f.Text, { className: "i-tit", children: e.tipTitle }), (0, O.tZ)(f.Text, { className: "i-desc", children: e.tipDesc })] }, t);
                          }),
                        }),
                      (0, O.tZ)(f.View, {
                        className: "botm-box",
                        children: (0, O.tZ)(f.Button, {
                          className: "btn",
                          id: "AJAw",
                          onClick: o,
                          children: "我知道了",
                        }),
                      }),
                    ],
                  }),
                })
              );
            }),
            M = [
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/GIF/card1.gif",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/GIF/card2.gif",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/GIF/card3.gif",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/GIF/card4.gif",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/GIF/card5.gif",
            ],
            q = [
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/GIF/flip/card1-1-min.gif",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/GIF/flip/card2-1-min.gif",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/GIF/flip/card3-1-min.gif",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/GIF/flip/card4-1-min.gif",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/GIF/flip/card5-1-min.gif",
            ],
            U = [
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/xcx/xcx_card_tie_bei.png",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/xcx/xcx_card_you_bei.png",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/xcx/xcx_card_qiang_bei.png",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/xcx/xcx_card_piao_bei.png",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/xcx/xcx_card_kuai_bei.png",
            ],
            G = [
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/xcx/xcx_card_V_zheng.png",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/xcx/xcx_card_I_zheng.png",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/xcx/xcx_card_P_zheng.png",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/xcx/xcx_card_qiang_zheng.png",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/xcx/xcx_card_piao_zheng.png",
            ],
            H = m.default.memo(function (e) {
              var t = e.propStyle,
                i = e.isNeedTurnOver,
                a = void 0 !== i && i,
                r = e.hasTurnedOverBoard,
                s = void 0 === r ? -1 : r,
                o = e.content,
                c = e.setHasTurnedOverBoard,
                l = o || {},
                d = l.notation,
                u = l.accelerateNumber,
                h = (0, m.useState)(!a),
                p = (0, n.Z)(h, 2),
                g = p[0],
                _ = p[1],
                w = (0, m.useRef)(0),
                v = (0, m.useState)(function () {
                  if (a) {
                    if (
                      (console.log("hasTurnedOverBoard1", s), u > 0 && s !== u)
                    )
                      return u;
                    if (-1 === s) return 5;
                  }
                  return 0;
                }),
                Z = (0, n.Z)(v, 2),
                N = Z[0],
                x = Z[1];
              if (!o) return (0, O.tZ)(O.HY, {});
              var k = function (e) {
                  return u > e ? G[e] : U[e];
                },
                y = u > 0 && s !== u;
              return (0, O.BX)(f.View, {
                className: " _qB _i _k _l",
                style: t,
                children: [
                  (0, O.BX)(f.View, {
                    style: { display: "none" },
                    children: [
                      M.map(function (e, t) {
                        return (0, O.tZ)(
                          f.Image,
                          {
                            src: e,
                            onLoad: function () {
                              (w.current = w.current + 1),
                                10 === w.current && _(!0);
                            },
                          },
                          t
                        );
                      }),
                      q.map(function (e, t) {
                        return (0, O.tZ)(
                          f.Image,
                          {
                            src: e,
                            onLoad: function () {
                              (w.current = w.current + 1),
                                10 === w.current && _(!0);
                            },
                          },
                          t
                        );
                      }),
                    ],
                  }),
                  (0, O.BX)(f.View, {
                    className: " _i _l",
                    children: [
                      (0, O.tZ)(f.Image, {
                        className: " _Qb _Po",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/line_zhuangshi.png",
                      }),
                      (0, O.tZ)(b.ZtRichText, {
                        className: " _Dm _pg _Na",
                        nodes: d,
                      }),
                      (0, O.tZ)(f.Image, {
                        className: " _Qb _Po  _rB",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/line_zhuangshi.png",
                      }),
                    ],
                  }),
                  (0, O.tZ)(f.View, {
                    className: " _i _n _cg",
                    children: new Array(5).fill(0).map(function (e, t) {
                      return (0, O.BX)(
                        f.View,
                        {
                          className: "board",
                          children: [
                            (0, O.tZ)(f.View, {
                              children:
                                N > t &&
                                g &&
                                (0, O.tZ)(f.Image, {
                                  className: " _h _tg _sB",
                                  src: y ? M[t] : q[t],
                                  onLoad: function () {
                                    0 === t &&
                                      setTimeout(
                                        function () {
                                          x(-1), c(y ? N : 0);
                                        },
                                        y ? 1e3 : 3e3
                                      );
                                  },
                                }),
                            }),
                            g &&
                              (0, O.tZ)(f.Image, {
                                className:
                                  " _h _tg _sB " +
                                  (N > t ? " _u _q _s _pe" : " _tg _sB"),
                                src: k(t),
                              }),
                            !g && (0, O.tZ)(f.View, { className: " _tg _sB" }),
                          ],
                        },
                        "".concat(u).concat(t)
                      );
                    }),
                  }),
                ],
              });
            }),
            J = m.default.memo(function (e) {
              var t = e.content,
                i = e.hasTurnedOverBoard,
                a = e.setHasTurnedOverBoard,
                r = e.openShareDrawer;
              if (!t) return (0, O.tZ)(O.HY, {});
              var n = t.buttonName;
              return (0,
              O.BX)(f.View, { className: " _Lc _i _k _l", children: [(0, O.tZ)(H, { content: t, isNeedTurnOver: !0, hasTurnedOverBoard: i, setHasTurnedOverBoard: a, propStyle: { boxSizing: "border-box", width: "678rpx", borderRadius: "24rpx 24rpx 0 0", background: "linear-gradient(180deg, #FFFBF6, #FFFFFF)", paddingLeft: "24rpx", paddingRight: "24rpx" } }), (0, O.tZ)(f.Button, { className: " _Xk _gh _Gc _Xc _o _pB _Oa _qb _Yb", openType: (0, T.JO)() ? "share" : "", onClick: r, children: n })] });
            }),
            j = m.default.memo(function (e) {
              var t = e.visible,
                i = e.content,
                a = e.hasTurnedOverBoard,
                r = e.setHasTurnedOverBoard,
                n = e.onClose,
                s = e.openShareDrawer;
              return i
                ? (0, O.tZ)(b.ZtDrawer, {
                    show: t,
                    isShowClose: !1,
                    isDefineHead: !0,
                    onWrapClose: n,
                    drawerStyle: { borderRadius: "40rpx 40rpx 0 0" },
                    children: (0, O.BX)(f.View, {
                      className: " _p _kd _tB",
                      children: [
                        (0, O.tZ)(f.Image, {
                          className: " _u _q _nd _uB",
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/img_fuceng_jiasu.png",
                          webp: !0,
                        }),
                        (0, O.tZ)(f.View, {
                          className: " _p _Lm",
                          children: (0, O.tZ)(f.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                            className: " _u _xr _qk _bc _cc",
                            id: "AJAy",
                            onClick: n,
                            webp: !0,
                          }),
                        }),
                        (0, O.tZ)(f.View, {
                          className: " _Vb _p _qt _fc _be",
                          children:
                            t &&
                            (0, O.tZ)(H, {
                              propStyle: { borderRadius: "32rpx" },
                              isNeedTurnOver: !0,
                              hasTurnedOverBoard: a,
                              setHasTurnedOverBoard: r,
                              content: i,
                            }),
                        }),
                        (0, O.tZ)(f.View, {
                          className: " _p _Fa _Vb _ld _kd",
                          children: (0, O.tZ)(f.Button, {
                            className: " _vB _Oa _Gc _Xc _Qd _o _qb _oB",
                            openType: (0, T.JO)() ? "share" : "",
                            id: "AJAz",
                            onClick: function () {
                              (0, T.JO)() ? n() : s();
                            },
                            children: "请好友帮翻牌",
                          }),
                        }),
                      ],
                    }),
                  })
                : (0, O.tZ)(O.HY, {});
            }),
            R = m.default.memo(function (e) {
              var t = e.oid,
                i = e.visible,
                a = e.content,
                r = e.onClose;
              if (
                ((0, m.useEffect)(
                  function () {
                    if (i && a) {
                      var e = C.gT.get() || {},
                        r = e.unlockVipDrawerList || [];
                      t &&
                        !r.includes(t) &&
                        (r.push(t), (e.unlockVipDrawerList = r), C.gT.set(e));
                    }
                  },
                  [i, a]
                ),
                !a)
              )
                return (0, O.tZ)(O.HY, {});
              var n = a.rightNodes,
                s = a.buttonName;
              return (0, O.tZ)(b.ZtDrawer, {
                show: i,
                isShowClose: !1,
                isDefineHead: !0,
                onWrapClose: r,
                drawerStyle: { borderRadius: "32rpx 32rpx 0 0" },
                children: (0, O.BX)(f.View, {
                  className: " _p _kd _tB",
                  children: [
                    (0, O.tZ)(f.Image, {
                      className: " _u _q _vr _nd _uB",
                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/fanpaizi/xcx/xcx_img_fuceng_unlock.png",
                      webp: !0,
                    }),
                    (0, O.tZ)(f.View, {
                      className: " _p _Gy",
                      children: (0, O.tZ)(f.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                        className: " _u _xr _qk _bc _cc",
                        id: "AJBA",
                        onClick: r,
                        webp: !0,
                      }),
                    }),
                    (0, O.tZ)(f.View, {
                      className: " _Vb _p _i _fc _be",
                      children: n.map(function (e, t) {
                        return (0,
                        O.BX)(O.HY, { children: [(0, O.BX)(f.View, { className: " _Db _wB _i _l", children: [(0, O.tZ)(f.Image, { src: e.icon, className: " _xB _yB", id: "AJBB", onClick: r, webp: !0 }), (0, O.tZ)(f.View, { className: " _Ac _Xb _bp", children: e.title }), (0, O.tZ)(f.View, { className: " _Km _Ma _Na", children: e.subTitle })] }, t), t !== n.length - 1 && (0, O.tZ)(f.View, { className: " _zB _kg _AB _cj _Kq" })] });
                      }),
                    }),
                    (0, O.tZ)(f.View, {
                      className: " _p _Fa _Vb _ld _kd",
                      children: (0, O.tZ)(f.Button, {
                        className: " _vB _Oa _Gc _Xc _Qd _o _qb _oB",
                        id: "AJBC",
                        onClick: r,
                        children: s,
                      }),
                    }),
                  ],
                }),
              });
            }),
            E = m.default.memo(function (e) {
              var t = e.content,
                i = e.isUnlockFiveSpeed,
                a = e.onUnlockClick,
                r = void 0 === a ? function () {} : a,
                n = e.openShareDrawer,
                s = void 0 === n ? function () {} : n;
              if (!t) return (0, O.tZ)(O.HY, {});
              var o = t.title,
                c = t.descs,
                l = t.buttonName;
              return (0, O.BX)(f.View, {
                className: " _p _in _Xk _SA _Vb _Oa",
                children: [
                  (0, O.tZ)(b.ZtRichText, { className: " _sb _yg", nodes: o }),
                  (0, O.tZ)(f.View, {
                    className: " _mj _i _m",
                    children: c.map(function (e) {
                      return (0,
                      O.BX)(f.View, { className: " _Do _TA _UA _dc _i _k _l", children: [(0, O.tZ)(f.Image, { className: " _bi _lc", src: e.icon }), (0, O.tZ)(b.ZtRichText, { className: " _bg _sb _ig", nodes: e.title }), (0, O.tZ)(f.View, { className: " _Ac _Ma _Ag", children: e.desc })] }, e.icon);
                    }),
                  }),
                  (0, O.tZ)(f.Button, {
                    className: " _kg _Gc _Xc _o _w _Oa _qb _Yb",
                    openType: i || !(0, T.JO)() ? "" : "share",
                    id: "AJAt",
                    onClick: function () {
                      i ? r() : (0, T.JO)() || s();
                    },
                    children: l,
                  }),
                ],
              });
            }),
            K = m.default.memo(function (e) {
              var t = e.oid,
                i = e.visible,
                a = e.content,
                r = e.onClose;
              if (
                ((0, m.useEffect)(
                  function () {
                    if (i && a) {
                      var e = C.gT.get() || {},
                        r = e.fiveSpeedDrawerList || [];
                      t &&
                        !r.includes(t) &&
                        (r.push(t), (e.fiveSpeedDrawerList = r), C.gT.set(e));
                    }
                  },
                  [i, a]
                ),
                !a)
              )
                return (0, O.tZ)(O.HY, {});
              var n = a.products,
                s = a.buttonName;
              return (0, O.tZ)(b.ZtDrawer, {
                show: i,
                isShowClose: !1,
                isDefineHead: !0,
                onWrapClose: r,
                drawerStyle: { borderRadius: "40rpx 40rpx 0 0" },
                children: (0, O.BX)(f.View, {
                  className: " _kd _jB",
                  children: [
                    (0, O.tZ)(f.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                      className: " _u _xr _qk _bc _cc",
                      id: "AJAu",
                      onClick: r,
                      webp: !0,
                    }),
                    (0, O.tZ)(f.Image, {
                      className: " _nd _Gy _h",
                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_03/share/img_fuceng_gift.webp",
                      webp: !0,
                    }),
                    (0, O.BX)(f.View, {
                      className: " _p _ag _Vb _kB _lB",
                      children: [
                        (0, O.tZ)(f.Image, {
                          className: " _u _q _mB _nB _ug",
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/text_tag.png",
                        }),
                        (0, O.tZ)(f.View, {
                          className: " _i _m",
                          children: n.map(function (e) {
                            return (0,
                            O.BX)(f.View, { className: " _i _k _l", children: [(0, O.tZ)(f.Image, { className: " _bi _lc", src: e.icon }), (0, O.tZ)(b.ZtRichText, { className: " _Xk _Xb _bp", nodes: e.title }), (0, O.tZ)(f.View, { className: " _Ac _Ma _Na", children: e.desc })] }, e.icon);
                          }),
                        }),
                      ],
                    }),
                    (0, O.tZ)(f.View, {
                      className: " _p _kg _Vb _ld _kd",
                      children: (0, O.tZ)(f.Button, {
                        className: " _w _Oa _Gc _Xc _Qd _o _qb _oB",
                        id: "AJAv",
                        onClick: r,
                        children: s || "开心收下",
                      }),
                    }),
                  ],
                }),
              });
            }),
            W = w.default.isTieyou,
            Y = w.default.isWechat,
            Q = ["", "回家", "去远方", "去学校", "去你心里"];
          function $() {
            var e = new Date();
            return e.getUTCHours() >= 15 && e.getUTCHours() < 22;
          }
          var ee =
            (0, g.h)()(
              (a = (function (e) {
                (0, d.Z)(i, e);
                var t = (0, u.Z)(i);
                function i(e) {
                  var a;
                  return (
                    (0, c.Z)(this, i),
                    ((a = t.call(this, e)).pageId = W
                      ? "10650069528"
                      : "10650068892"),
                    (a.state = {
                      speedLevels: [],
                      grabOrder: null,
                      grabSpeedUpInfo: null,
                      shareAim: "",
                      pagePath: "",
                      isShareGZH: !1,
                      showSubscribeMask: !1,
                      shareInfoList: [],
                      customizeTagList: [],
                      shareImageDesc: "",
                      shareImageTitle: "",
                      specialGrabDrawerInfo: null,
                      grabFailBenifitDrawerInfo: null,
                      turnOverBoardActivity: null,
                    }),
                    a
                  );
                }
                return (
                  (0, l.Z)(i, [
                    {
                      key: "onLoad",
                      value: function (e) {
                        var t = this;
                        console.log("friendSpeedUp onload options == ", e),
                          this.newUbtTrace(201272),
                          (this.oid = e.oid || ""),
                          (this.isCanFriendSpeed = "1" === e.isCanFriendSpeed),
                          (this.speedLvlPromise = x.ZP.GetSpeedLvlName()
                            .then(function (e) {
                              t.setState({ speedLevels: e });
                            })
                            .catch(function (e) {
                              return console.log(e);
                            })),
                          B.CZ.call(this, !0);
                      },
                    },
                    {
                      key: "componentDidShow",
                      value: function () {
                        this.loadData();
                      },
                    },
                    {
                      key: "loadData",
                      value: function () {
                        var e = this;
                        return new Promise(
                          (function () {
                            var t = (0, o.Z)(
                              (0, s.Z)().mark(function t(i) {
                                return (0, s.Z)().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        (0, V.showLoading)(),
                                          e
                                            .loadGrabData()
                                            .then(
                                              (function () {
                                                var t = (0, o.Z)(
                                                  (0, s.Z)().mark(function t(
                                                    a
                                                  ) {
                                                    return (0, s.Z)().wrap(
                                                      function (t) {
                                                        for (;;)
                                                          switch (
                                                            (t.prev = t.next)
                                                          ) {
                                                            case 0:
                                                              if (a) {
                                                                t.next = 2;
                                                                break;
                                                              }
                                                              return t.abrupt(
                                                                "return",
                                                                i()
                                                              );
                                                            case 2:
                                                              return (
                                                                (t.next = 4),
                                                                e.loadDataCallBack()
                                                              );
                                                            case 4:
                                                              i();
                                                            case 5:
                                                            case "end":
                                                              return t.stop();
                                                          }
                                                      },
                                                      t
                                                    );
                                                  })
                                                );
                                                return function (e) {
                                                  return t.apply(
                                                    this,
                                                    arguments
                                                  );
                                                };
                                              })()
                                            )
                                            .catch(function () {
                                              i();
                                            })
                                            .finally(function () {
                                              (0, V.hideLoading)();
                                            });
                                      case 2:
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
                        );
                      },
                    },
                    {
                      key: "loadDataCallBack",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, s.Z)().mark(function e() {
                            var t,
                              i = this;
                            return (0, s.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (t = this.state.grabOrder),
                                        this.getCustomizeShareInfo(t).then(
                                          function () {
                                            i.getSharePyqPath();
                                          }
                                        ),
                                        this.getGrabSpeedUpActivityInfo({
                                          fromPage: 2,
                                          orderNumber: this.oid,
                                        }),
                                        this.getMoreSpeedPackage(),
                                        w.default.isTieyou &&
                                          this.getGrabSpeedUpActivitiesModel();
                                    case 5:
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
                      key: "newUbtTrace",
                      value: function (e) {
                        try {
                          this.ubtTrace(e, {
                            openId: k.ZP.openid || "",
                            userName: k.ZP.userName || "",
                            cid: k.ZP.cid || "",
                            oid: this.oid || "",
                          });
                        } catch (e) {
                          console.log(e);
                        }
                      },
                    },
                    {
                      key: "getCustomizeShareInfo",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, s.Z)().mark(function e(t) {
                            var i;
                            return (0, s.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        t &&
                                        !(
                                          t &&
                                          t.grabProcessInfo &&
                                          t.grabProcessInfo.processFlag &&
                                          t.grabProcessInfo.processFlag > 0
                                        )
                                      ) {
                                        e.next = 2;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 2:
                                      return (
                                        (e.prev = 2),
                                        (e.next = 5),
                                        (0, I.ZEE)({
                                          shareChannel: 1,
                                          toStation:
                                            t.orderInfo.toStation.name || "",
                                          ticketType:
                                            9 === t.orderInfo.monitorStatus
                                              ? "pre"
                                              : "",
                                          shareKey:
                                            t.helpMonitorInfo.shareKey || "",
                                        })
                                      );
                                    case 5:
                                      if (!(i = e.sent) || 1 !== i.resultCode) {
                                        e.next = 9;
                                        break;
                                      }
                                      return (
                                        (e.next = 9),
                                        this.setStateSync({
                                          isShareGZH:
                                            -1 !==
                                            [1, 2, 3, 4].indexOf(
                                              i.userShareType
                                            ),
                                          shareInfoList: i.shareInfoList,
                                          customizeTagList: i.customizeTagList,
                                        })
                                      );
                                    case 9:
                                      console.log(
                                        "getCustomizeShareInfoPromise",
                                        i
                                      ),
                                        (e.next = 15);
                                      break;
                                    case 12:
                                      (e.prev = 12),
                                        (e.t0 = e.catch(2)),
                                        console.log(e.t0);
                                    case 15:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[2, 12]]
                            );
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "recordShareMode",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "";
                        (0, V.showLoading)();
                        var t = { shareType: "weixin", shareKey: e };
                        return (0, I._0V)(t).finally(function () {
                          return (0, V.hideLoading)();
                        });
                      },
                    },
                    {
                      key: "onShareAppMessage",
                      value: function () {
                        var e,
                          t = v.Z.getUnionData(),
                          i = this.state,
                          a = i.shareIndex,
                          r = i.shareAim,
                          n = i.isShareGZH,
                          s = void 0 !== n && n,
                          o = i.grabOrder,
                          c = void 0 === o ? {} : o,
                          l = i.shareInfoList,
                          d = void 0 === l ? [] : l;
                        if (
                          c &&
                          c.helpMonitorInfo &&
                          (w.default.isTT ||
                            (!w.default.isTT &&
                              3 !==
                                (null === (e = c.grabSpeedInfo) || void 0 === e
                                  ? void 0
                                  : e.buttonType)))
                        ) {
                          var u;
                          this.recordShareMode(c.helpMonitorInfo.shareKey),
                            this.hideBackDrop();
                          var h = this.generateTagInfo(),
                            p =
                              (null == h ? void 0 : h.tag) ||
                              c.orderInfo.toStation.name,
                            m = d.find(function (e) {
                              return "weixin" == e.channel;
                            }),
                            g =
                              (null == m ||
                              null === (u = m.title) ||
                              void 0 === u
                                ? void 0
                                : u.replace("{tagName}", p)) || "",
                            f =
                              (null == h ? void 0 : h.iconUrl) ||
                              "https://images3.c-ctrip.com/zt/robTicket/common/nnn_prebook_festiva_share_wx.png";
                          return x.ZP.getRobShareObj({
                            showArriveStation: 0 == a ? "" : r,
                            shareKey: c.helpMonitorInfo.shareKey,
                            arriveStation: c.orderInfo.toStation.name,
                            allianceid: t.aid,
                            sid: t.sid,
                            shareImgs: [f],
                            type: "weixin",
                            abChannelType: "wxFriend",
                            from: "orderdetail",
                            isShareGZH: s,
                            shareTitle: g,
                          });
                        }
                        return { bu: "train", path: "/pages/home/index" };
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
                      key: "loadGrabData",
                      value: function () {
                        var e = this,
                          t = this.state,
                          i = t.login12306Name,
                          a = void 0 === i ? "" : i,
                          r = t.login12306Pas,
                          n = void 0 === r ? "" : r,
                          c = t.auth12306Status,
                          l = x.ZP.encode12306Account({
                            login12306Name: a,
                            login12306Pas: n,
                          }),
                          d = {
                            orderNumber: this.oid,
                            userAuth12306Status: c || -1,
                            userName: l.login12306Name,
                            currentLoginMobile: k.ZP.userName || "",
                          };
                        return (0, A.dl)(d)
                          .then(
                            (function () {
                              var t = (0, o.Z)(
                                (0, s.Z)().mark(function t(i) {
                                  var a;
                                  return (0, s.Z)().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          if (
                                            !(a = i.resultMessage) ||
                                            !(
                                              a.indexOf("未找到该监控订单") >
                                                -1 ||
                                              a.indexOf("未找到该订单") > -1
                                            )
                                          ) {
                                            t.next = 5;
                                            break;
                                          }
                                          e.showCommonDialog({
                                            content:
                                              "未找到该订单，请确认您的账号是否登录正确~",
                                            onButtonClick: function () {
                                              p().switchTab({
                                                url: "/pages/myctrip/list/list",
                                              });
                                            },
                                          }),
                                            (t.next = 7);
                                          break;
                                        case 5:
                                          if (
                                            1 !== i.resultCode ||
                                            !i.orderInfo
                                          ) {
                                            t.next = 7;
                                            break;
                                          }
                                          return t.abrupt(
                                            "return",
                                            e.loadGrabOrderCallBack(i)
                                          );
                                        case 7:
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
                      key: "goLogin12306H5",
                      value: function () {
                        var e = this,
                          t = (function () {
                            var t = (0, o.Z)(
                              (0, s.Z)().mark(function t(i) {
                                var a;
                                return (0, s.Z)().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          (console.log(
                                            "friendSpeedUp webviewCB e = ",
                                            i
                                          ),
                                          console.log(
                                            "Array.isArray(e.detail.data): ",
                                            Array.isArray(i.detail.data)
                                          ),
                                          Array.isArray(i.detail.data))
                                        ) {
                                          t.next = 4;
                                          break;
                                        }
                                        return t.abrupt("return");
                                      case 4:
                                        (a = i.detail.data), B.Tq.call(e, a);
                                      case 6:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })(),
                          i = this.state,
                          a = i.login12306Name,
                          r = void 0 === a ? "" : a,
                          n = i.login12306Pas,
                          c = void 0 === n ? "" : n,
                          l = r && c,
                          d = "https://"
                            .concat(
                              w.default.h5domain,
                              "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                            )
                            .concat(w.default.partner, "#/login?userName=")
                            .concat(r, "&loginPW=")
                            .concat(c, "&mobile=")
                            .concat(
                              k.ZP.userName || "",
                              "&isMiniAppLogin12306="
                            )
                            .concat(l, "&fromPage=friendSpeedUp");
                        z.Z.twebview({ data: { url: d, bridgeIns: t } });
                      },
                    },
                    {
                      key: "gotoLogin12306AndAuth",
                      value: function () {
                        var e = this,
                          t = this.state,
                          i = t.login12306Name,
                          a = t.login12306Pas,
                          r = t.memberStatus12306,
                          s = !1,
                          o = "https://"
                            .concat(
                              w.default.h5domain,
                              "/webapp/train/activity/ztrip-train-12306/?partner="
                            )
                            .concat(w.default.partner),
                          c = "",
                          l = i && a;
                        i && a
                          ? "-1" === r
                            ? ((c = ""
                                .concat(o, "#member?from=houBuDetail&partner=")
                                .concat(w.default.partner, "&userName=")
                                .concat(i, "&loginPW=")
                                .concat(a, "&memberStatus12306=", "-1")),
                              (s = !0))
                            : "2" === r
                            ? ((c = ""
                                .concat(o, "#member?from=houBuDetail&partner=")
                                .concat(w.default.partner, "&userName=")
                                .concat(i, "&loginPW=")
                                .concat(a, "&memberStatus12306=", "2")),
                              (s = !0))
                            : (c = "https://"
                                .concat(
                                  w.default.h5domain,
                                  "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                                )
                                .concat(w.default.partner, "#/login?userName=")
                                .concat(i, "&loginPW=")
                                .concat(a, "&mobile=")
                                .concat(
                                  k.ZP.userName || "",
                                  "&isMiniAppLogin12306="
                                )
                                .concat(l, "&fromPage=houBuDetail"))
                          : (c = "https://"
                              .concat(
                                w.default.h5domain,
                                "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                              )
                              .concat(w.default.partner, "#/login?userName=")
                              .concat(i, "&loginPW=")
                              .concat(a, "&mobile=")
                              .concat(
                                k.ZP.userName || "",
                                "&isMiniAppLogin12306="
                              )
                              .concat(l, "&fromPage=friendSpeedUp")),
                          console.log("gotoLogin12306AndAuth", c),
                          z.Z.twebview({
                            data: {
                              url: c,
                              bridgeIns: function (t) {
                                if (
                                  (console.log("orderdetail webviewCB e = ", t),
                                  Array.isArray(t.detail.data))
                                )
                                  if (s) {
                                    var r = (0, n.Z)(t.detail.data, 1)[0]
                                      .success;
                                    if (!(void 0 !== r && r)) return;
                                    (0, B.Mm)(i, a).then(function () {
                                      B.CZ.call(e, !0);
                                    });
                                  } else B.Tq.call(e, t.detail.data);
                              },
                            },
                          });
                      },
                    },
                    {
                      key: "bookHotelTask",
                      value: function () {
                        var e = this,
                          t = this.state.grabOrder,
                          i = JSON.parse(t.grabDetailExt),
                          a = t.orderInfo.fromStation.name,
                          r = t.orderInfo.toStation.name,
                          n = t.orderInfo.leaveDate,
                          s = i && i.ticketTime,
                          o = t.orderInfo.arrivalDateTime,
                          c = {};
                        (c.data = {
                          channel: "train",
                          orderNumber: this.oid,
                          departDateTime: n + " " + s,
                          arriveDateTime: o,
                          departStation: a,
                          arriveStation: r,
                          pageSource: "trainGrabDoFreeTask",
                        }),
                          (0, I.tI_)(c).then(function (t) {
                            if (1 === t.resultCode) {
                              var i = t.data.jumpUrl,
                                a = Z.Z.parseQuery(i),
                                r = JSON.parse(a.filterDatas),
                                n = JSON.parse(a.script_data),
                                s = "/pages/hotel/list/list";
                              console.warn(
                                "friendSpeedUp tester酒店路径=====",
                                ""
                                  .concat(s, "?data=")
                                  .concat(
                                    encodeURIComponent(
                                      JSON.stringify({
                                        queryModel: n,
                                        fromPage: "applets_qplljs",
                                        filterInfos: r,
                                      })
                                    )
                                  )
                              ),
                                e.navigateTo({
                                  url: ""
                                    .concat(s, "?data=")
                                    .concat(
                                      encodeURIComponent(
                                        JSON.stringify({
                                          queryModel: n,
                                          fromPage: "applets_qplljs",
                                          filterInfos: r,
                                        })
                                      )
                                    ),
                                });
                            }
                          });
                      },
                    },
                    {
                      key: "doScanHotelTask",
                      value: function () {
                        var e = this,
                          t = this.state,
                          i = t.login12306Name,
                          a = {
                            user12306Name: void 0 === i ? "" : i,
                            userAuth12306Status: t.auth12306Status || -1,
                            clickType: 8,
                            orderNumber: this.oid,
                          };
                        try {
                          (0, I.MyN)(a).then(function (t) {
                            1 === t.resultCode
                              ? e.navigateTo({
                                  url: "/pages/hotel/list/list",
                                  data: {
                                    queryModel: {
                                      cityId: "2",
                                      cityName: "上海",
                                    },
                                    fromPage: "applets_qplljs",
                                  },
                                })
                              : (0, V.showToast)("网络错误，请稍后重试");
                          });
                        } catch (e) {
                          (0, V.showToast)("网络错误，请稍后重试");
                        }
                      },
                    },
                    {
                      key: "doScanFlightActivityTask",
                      value: function (e) {
                        var t = this,
                          i = this.state,
                          a = i.login12306Name,
                          r = {
                            user12306Name: void 0 === a ? "" : a,
                            userAuth12306Status: i.auth12306Status || -1,
                            clickType: 10,
                            orderNumber: this.oid,
                          };
                        try {
                          (0, I.MyN)(r).then(function (i) {
                            1 === i.resultCode
                              ? t.jumpPage(e)
                              : (0, V.showToast)("网络错误，请稍后重试");
                          });
                        } catch (e) {
                          (0, V.showToast)("网络错误，请稍后重试");
                        }
                      },
                    },
                    {
                      key: "doScanVideoActivityTask",
                      value: function (e) {
                        var t = this,
                          i = this.state,
                          a = i.login12306Name,
                          r = {
                            user12306Name: void 0 === a ? "" : a,
                            userAuth12306Status: i.auth12306Status || -1,
                            clickType: 14,
                            orderNumber: this.oid,
                          };
                        try {
                          (0, I.MyN)(r).then(function (i) {
                            1 === i.resultCode
                              ? t.jumpPage(e)
                              : (0, V.showToast)("网络错误，请稍后重试");
                          });
                        } catch (e) {
                          (0, V.showToast)("网络错误，请稍后重试");
                        }
                      },
                    },
                    {
                      key: "handleDoTask",
                      value: function (e) {
                        switch (null == e ? void 0 : e.type) {
                          case 1:
                            if ((this.newUbtTrace(201277), $()))
                              return (0, V.showModal)(
                                "23:30至次日6:00为12306系统休息时间,无法登陆账号！"
                              );
                            this.goLogin12306H5();
                            break;
                          case 2:
                            if ((this.newUbtTrace(201279), $()))
                              return (0, V.showModal)(
                                "23:30至次日6:00为12306系统休息时间,无法登陆账号！"
                              );
                            this.gotoLogin12306AndAuth();
                            break;
                          case 3:
                            this.newUbtTrace(201281), this.jumpPage(e);
                            break;
                          case 8:
                            this.doScanHotelTask();
                            break;
                          case 10:
                            this.ubtTrace(205914, {
                              bizKey: "z_qpdetail_flt_speedtask_click",
                            }),
                              this.doScanFlightActivityTask(e);
                            break;
                          case 14:
                            this.doScanVideoActivityTask(e);
                            break;
                          case 16:
                            this.bookHotelTask(e);
                            break;
                          case 17:
                          default:
                            this.jumpPage(e);
                        }
                      },
                    },
                    {
                      key: "jumpPage",
                      value: function (e) {
                        var t = e.jumpUrl;
                        t && Z.Z.commonNavigator(t);
                      },
                    },
                    {
                      key: "hideBackDrop",
                      value: function () {
                        this.setState({ showType: "" });
                      },
                    },
                    {
                      key: "openShareDrawer",
                      value: function () {
                        if (w.default.isWechat)
                          return this.openShareDrawerForWechat();
                        this.newUbtTrace(201275),
                          (0, T.JO)() && this.newUbtTrace(206550),
                          this.newUbtTrace(206552);
                      },
                    },
                    {
                      key: "openShareDrawerForWechat",
                      value: function () {
                        this.newUbtTrace(201275),
                          (0, T.JO)()
                            ? this.newUbtTrace(206550)
                            : this.shareToPengYouQuan(),
                          this.newUbtTrace(206552);
                      },
                    },
                    {
                      key: "speedByVideo",
                      value: function () {
                        z.Z.twebview({
                          data: {
                            url: "https://pages.suanya.com/spa/increase/douyin-friend-share.html",
                          },
                        });
                      },
                    },
                    {
                      key: "chooseAim",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, s.Z)().mark(function e(t) {
                            var i;
                            return (0, s.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((i = this.state.grabOrder), 0 !== t)
                                      ) {
                                        e.next = 6;
                                        break;
                                      }
                                      return (
                                        (e.next = 4),
                                        this.setStateSync({
                                          shareIndex: 0,
                                          shareAim:
                                            "去" + i.orderInfo.toStation.name,
                                        })
                                      );
                                    case 4:
                                      e.next = 8;
                                      break;
                                    case 6:
                                      return (
                                        (e.next = 8),
                                        this.setStateSync({
                                          shareIndex: t,
                                          shareAim: Q[t],
                                        })
                                      );
                                    case 8:
                                      this.getSharePyqPath();
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
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getSharePyqPath",
                      value: function () {
                        var e = v.Z.getUnionData(),
                          t = this.state,
                          i = t.grabOrder,
                          a = t.isShareGZH,
                          r = void 0 !== a && a,
                          n = t.shareAim,
                          s = t.shareIndex,
                          o = t.shareInfoList;
                        if (
                          i &&
                          i.helpMonitorInfo &&
                          i.grabSpeedInfo &&
                          3 !== i.grabSpeedInfo.buttonType
                        ) {
                          var c,
                            l,
                            d,
                            u = x.ZP.getRobShareObj({
                              showArriveStation: 0 == s ? "" : n,
                              shareKey: i.helpMonitorInfo.shareKey,
                              arriveStation: i.orderInfo.toStation.name,
                              allianceid: e.aid,
                              sid: e.sid,
                              type: "pyq",
                              abChannelType: "pyq",
                              isShareGZH: r,
                            }),
                            h = this.generateTagInfo(),
                            p =
                              (null == h ? void 0 : h.tag) ||
                              i.orderInfo.toStation.name,
                            m = o.find(function (e) {
                              return "pyq" == e.channel;
                            }),
                            g =
                              (null == m ||
                              null === (c = m.picContent) ||
                              void 0 === c
                                ? void 0
                                : c.underDesc) || "",
                            f =
                              (null == m ||
                              null === (l = m.picContent) ||
                              void 0 === l ||
                              null === (d = l.title) ||
                              void 0 === d
                                ? void 0
                                : d.replace("{tagName}", p)) || "";
                          this.setState({
                            pagePath: u.path.slice(1),
                            shareImageDesc: g,
                            shareImageTitle: f,
                          });
                        }
                      },
                    },
                    {
                      key: "generateTagInfo",
                      value: function () {
                        var e = this.state,
                          t = e.shareIndex,
                          i = e.customizeTagList,
                          a = null;
                        i && i.length > 0 && (a = i[parseInt(t || 0)]);
                        return a;
                      },
                    },
                    {
                      key: "loadGrabOrderCallBack",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, s.Z)().mark(function e() {
                            var t,
                              i = this,
                              a = arguments;
                            return (0, s.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t =
                                          a.length > 0 && void 0 !== a[0]
                                            ? a[0]
                                            : {}),
                                        console.log("loadGrabOrderCallBack"),
                                        p().showShareMenu &&
                                          p().showShareMenu({
                                            withShareTicket: !0,
                                          }),
                                        this.setState({
                                          shareIndex: 0,
                                          shareAim:
                                            "去" + t.orderInfo.toStation.name,
                                        }),
                                        e.abrupt(
                                          "return",
                                          this.speedLvlPromise.then(
                                            function () {
                                              return (
                                                console.log("speedLvlPromise"),
                                                i.setJLDetailInfo(t),
                                                t
                                              );
                                            }
                                          )
                                        )
                                      );
                                    case 5:
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
                      key: "setJLDetailInfo",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, s.Z)().mark(function e(t) {
                            var i, a, r, n, o, c, l;
                            return (0, s.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (i = this.state.speedLevels),
                                        (a = ""),
                                        (r = []),
                                        (n = ""),
                                        t.grabSpeedInfo &&
                                          (t.grabSpeedInfo.desc &&
                                            ((a = t.grabSpeedInfo.desc.replace(
                                              /<a([^>]*)>([^<]*)<\/a>/gi,
                                              ""
                                            )),
                                            (a = Z.Z.convertStr(a))),
                                          (r = i.map(function (e, i) {
                                            return (
                                              i === t.grabSpeedInfo.speed - 1 &&
                                                (n = e.name),
                                              {
                                                name: e.name,
                                                isCurrent:
                                                  i ===
                                                  t.grabSpeedInfo.speed - 1,
                                                speed: i,
                                              }
                                            );
                                          }))),
                                        (o = a),
                                        (c = n),
                                        (l = r),
                                        Object.assign(t, {
                                          f_acceDesc: o,
                                          f_speedLevel: c,
                                          f_speedLevels: l,
                                        }),
                                        (t.grabProcessInfo &&
                                          4 !== t.grabProcessInfo.processFlag &&
                                          5 !== t.grabProcessInfo.processFlag &&
                                          6 !==
                                            t.grabProcessInfo.processFlag) ||
                                          (t.grabProcessInfo = {
                                            processFlag: 0,
                                          }),
                                        (e.next = 12),
                                        this.setStateSync({
                                          grabOrder: t,
                                          monitorStatus:
                                            t.orderInfo.monitorStatus,
                                          grabProcessInfo: t.grabProcessInfo,
                                          processFlag: t.grabProcessInfo
                                            ? t.grabProcessInfo.processFlag
                                            : 0,
                                        })
                                      );
                                    case 12:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "shareToPengYouQuan",
                      value: function () {
                        this.newUbtTrace(206551),
                          this.setState({ showType: "grabShareImagePop" });
                      },
                    },
                    {
                      key: "getGrabSpeedUpActivityInfo",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, s.Z)().mark(function e() {
                            var t,
                              i,
                              a,
                              r,
                              n,
                              o,
                              c,
                              l,
                              d,
                              u,
                              h,
                              p,
                              m,
                              g,
                              f,
                              b,
                              _,
                              w,
                              v,
                              Z,
                              N,
                              x,
                              k,
                              y = arguments;
                            return (0, s.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t =
                                          y.length > 0 && void 0 !== y[0]
                                            ? y[0]
                                            : {}),
                                        (i = t.fromPage),
                                        (a = void 0 === i ? 2 : i),
                                        (r = t.orderNumber),
                                        (n = {
                                          fromPage: a,
                                          orderNumber: void 0 === r ? "" : r,
                                        }),
                                        (e.prev = 2),
                                        (e.next = 5),
                                        (0, I.hx)(n)
                                      );
                                    case 5:
                                      (o = e.sent) &&
                                        1 === o.resultCode &&
                                        ((u = o.newAccelerateCode),
                                        (h = o.title),
                                        (p = o.subTitle),
                                        (m = o.shareStatus),
                                        (g = o.taskProducts),
                                        (f = o.freeSpeedUpInfo),
                                        (b = o.newUnlockRightToast),
                                        (_ = o.inviteFivePersonUnlockModule),
                                        (w = o.newInviteFriendsActivity),
                                        (v = Array.isArray(g) ? g.length : 0),
                                        w &&
                                          (w.buttonName =
                                            null == _ ? void 0 : _.buttonName),
                                        (Z = !1),
                                        null != _ &&
                                          null !== (c = _.friends) &&
                                          void 0 !== c &&
                                          c.find(function (e) {
                                            return 1 === e.unlockRight;
                                          }) &&
                                          (Z = !0),
                                        this.setState({
                                          isShowFiveSpeed: 1 === u,
                                          isUnlockFiveSpeed: Z,
                                          newInviteFriendsActivity: w,
                                          newUnlockRightToast: b,
                                          grabSpeedUpInfo: {
                                            title: h,
                                            subTitle: p,
                                            shareStatus: m,
                                            taskProducts: g,
                                            type: v,
                                          },
                                        }),
                                        (N = C.gT.get() || {}),
                                        (x =
                                          (null ===
                                            (l = N.grabFailBenifitDrawerNum) ||
                                          void 0 === l
                                            ? void 0
                                            : l[this.oid]) || 0),
                                        !b ||
                                        !Z ||
                                        (null !== (d = N.fiveSpeedDrawerList) &&
                                          void 0 !== d &&
                                          d.includes(this.oid))
                                          ? null != f &&
                                            f.grabClaimToast &&
                                            x < 1 &&
                                            "unlockVipDrawer" !==
                                              this.state.showType
                                            ? this.setState({
                                                grabFailBenifitDrawerInfo:
                                                  null == f
                                                    ? void 0
                                                    : f.grabClaimToast,
                                                showType:
                                                  "grabFailBenifitDrawer",
                                              })
                                            : null != f &&
                                              f.expertGrabToast &&
                                              ((null ===
                                                (k = N.specialGrabDrawerNum) ||
                                              void 0 === k
                                                ? void 0
                                                : k[this.oid]) || 0) < 1 &&
                                              "unlockVipDrawer" !==
                                                this.state.showType &&
                                              this.setState({
                                                specialGrabDrawerInfo:
                                                  null == f
                                                    ? void 0
                                                    : f.expertGrabToast,
                                                showType: "specialGrabDrawer",
                                              })
                                          : this.setState({
                                              showType: "fiveSpeedDrawer",
                                            })),
                                        (e.next = 12);
                                      break;
                                    case 9:
                                      (e.prev = 9),
                                        (e.t0 = e.catch(2)),
                                        console.log(e.t0);
                                    case 12:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[2, 9]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getMoreSpeedPackage",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, s.Z)().mark(function e() {
                            var t,
                              i,
                              a,
                              r,
                              n,
                              o,
                              c,
                              l,
                              d,
                              u,
                              h = this;
                            return (0, s.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = this.state),
                                        (i = t.login12306Name),
                                        (a = void 0 === i ? "" : i),
                                        (r = t.auth12306Status),
                                        (n = {
                                          user12306Name: a,
                                          userAuth12306Status: r || -1,
                                          clickType: 0,
                                          orderNumber: this.oid,
                                        }),
                                        (e.prev = 2),
                                        (e.next = 5),
                                        (0, I.MyN)(n)
                                      );
                                    case 5:
                                      (o = e.sent) &&
                                        1 === o.resultCode &&
                                        ((c = o.btnTitle),
                                        (l = o.grabLimitTaskInfoList),
                                        (d = void 0 === l ? [] : l),
                                        (u = o.grabSpeedDesc),
                                        c && this.newUbtTrace(201274),
                                        d.forEach(function (e) {
                                          1 === e.type
                                            ? h.newUbtTrace(201276)
                                            : 2 === e.type
                                            ? h.newUbtTrace(201278)
                                            : 3 === e.type
                                            ? h.newUbtTrace(201280)
                                            : 10 === e.type &&
                                              h.ubtTrace(205910, {
                                                exposureType: "normal",
                                                bizKey:
                                                  "z_qpdetail_flt_speedtask_show",
                                              });
                                        }),
                                        this.setState({
                                          btnTitle: c,
                                          grabLimitTaskInfoList: d,
                                          grabSpeedDesc: u,
                                        })),
                                        (e.next = 12);
                                      break;
                                    case 9:
                                      (e.prev = 9),
                                        (e.t0 = e.catch(2)),
                                        console.log(e.t0);
                                    case 12:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[2, 9]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getGrabSpeedUpActivitiesModel",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, s.Z)().mark(function e() {
                            var t, i, a, r, n, o, c;
                            return (0, s.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = { orderNumber: this.oid }),
                                        (e.prev = 1),
                                        (r = C.gT.get() || {}),
                                        (n =
                                          (null ===
                                            (i = r.hasTurnedOverBoard) ||
                                          void 0 === i
                                            ? void 0
                                            : i[this.oid]) >= 0
                                            ? null ===
                                                (a = r.hasTurnedOverBoard) ||
                                              void 0 === a
                                              ? void 0
                                              : a[this.oid]
                                            : -1),
                                        (e.next = 6),
                                        (0, I.brM)(t)
                                      );
                                    case 6:
                                      (o = e.sent) &&
                                        1 === o.resultCode &&
                                        (this.setState({
                                          turnOverBoardActivity:
                                            o.turnOverBoardActivity,
                                          hasTurnedOverBoard: n,
                                        }),
                                        !o.turnOverBoardActivity
                                          .unlockTurnOverBoardRightToast ||
                                          (null !==
                                            (c = r.unlockVipDrawerList) &&
                                            void 0 !== c &&
                                            c.includes(this.oid)) ||
                                          this.setState({
                                            showType: "unlockVipDrawer",
                                          })),
                                        (e.next = 13);
                                      break;
                                    case 10:
                                      (e.prev = 10),
                                        (e.t0 = e.catch(1)),
                                        console.log(e.t0);
                                    case 13:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[1, 10]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "openInstructionsModal",
                      value: function () {
                        this.setState({ showType: "instructionsModal" });
                      },
                    },
                    {
                      key: "setSubscribe",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, s.Z)().mark(function e() {
                            var t,
                              i,
                              a,
                              r,
                              n = this;
                            return (0, s.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (((e.prev = 0), Y)) {
                                        e.next = 3;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 3:
                                      return (
                                        (e.next = 5),
                                        Z.Z.getSubscribe(D.Z.TMPIDS_LONG)
                                      );
                                    case 5:
                                      if (
                                        ((t = e.sent),
                                        (i = t.mainSwitch),
                                        (a = t.unKnownList),
                                        i && Z.Z.notEmptyArray(a) && a.length)
                                      ) {
                                        e.next = 15;
                                        break;
                                      }
                                      return (
                                        (e.next = 11),
                                        Z.Z.getSubscribe(D.Z.TMPIDS)
                                      );
                                    case 11:
                                      ((r = e.sent).mainSwitch &&
                                        Z.Z.notEmptyArray(r.unKnownList) &&
                                        r.unKnownList.length) ||
                                        (this.setState({
                                          showSubscribeMask: !0,
                                        }),
                                        Z.Z.doSubscribe(
                                          r.unKnownList,
                                          "robTicket_share"
                                        )
                                          .then(function () {
                                            console.log("授权订阅 成功"),
                                              n.setState({
                                                showSubscribeMask: !1,
                                              });
                                          })
                                          .catch(function (e) {
                                            console.log(
                                              "授权订阅 取消或者失败",
                                              e
                                            ),
                                              n.setState({
                                                showSubscribeMask: !1,
                                              });
                                          })),
                                        (e.next = 17);
                                      break;
                                    case 15:
                                      this.setState({ showSubscribeMask: !0 }),
                                        Z.Z.doSubscribe(a, "robTicket_share")
                                          .then(function () {
                                            console.log("授权订阅 成功"),
                                              n.setState({
                                                showSubscribeMask: !1,
                                              });
                                          })
                                          .catch(function (e) {
                                            console.log(
                                              "授权订阅 取消或者失败",
                                              e
                                            ),
                                              n.setState({
                                                showSubscribeMask: !1,
                                              });
                                          });
                                    case 17:
                                      e.next = 22;
                                      break;
                                    case 19:
                                      (e.prev = 19),
                                        (e.t0 = e.catch(0)),
                                        console.log(e.t0);
                                    case 22:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[0, 19]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    { key: "noop", value: function () {} },
                    {
                      key: "render",
                      value: function () {
                        var e,
                          t,
                          i = this,
                          a = this.state,
                          r = a.grabOrder,
                          n = a.grabProcessInfo,
                          s = a.grabSpeedUpInfo,
                          o = a.getOrderSuccess,
                          c = a.showType,
                          l = a.pagePath,
                          d = a.btnTitle,
                          u = a.grabLimitTaskInfoList,
                          h = void 0 === u ? null : u,
                          p = a.grabSpeedDesc,
                          m = a.showSubscribeMask,
                          g = a.shareImageDesc,
                          v = a.shareImageTitle,
                          x = a.specialGrabDrawerInfo,
                          k = a.grabFailBenifitDrawerInfo,
                          B = a.turnOverBoardActivity,
                          z = a.hasTurnedOverBoard,
                          I = a.isShowFiveSpeed,
                          V = a.isUnlockFiveSpeed,
                          D = a.newInviteFriendsActivity,
                          A = a.newUnlockRightToast;
                        return (0, O.BX)(f.View, {
                          className: "friend-speed-up",
                          children: [
                            (0, O.BX)(f.View, {
                              className: "header ".concat(W ? "ty" : "zx"),
                              children: [
                                (0, O.tZ)(f.Image, {
                                  className: "img",
                                  src: W
                                    ? "https://images3.c-ctrip.com/ztrip/train_xie/2021-10/WeChat/img_zi_t.png"
                                    : "https://images3.c-ctrip.com/ztrip/train_xie/2021-10/WeChat/img_zi.png?1",
                                }),
                                (0, O.BX)(f.View, {
                                  className: "desc",
                                  children: [
                                    (0, O.tZ)(f.Text, {
                                      children: "抢票速度越快，成功率越高哦",
                                    }),
                                    (0, O.tZ)(f.Text, {
                                      className: "ifont-line-tips iconfont",
                                      id: "AJBD",
                                      onClick: this.openInstructionsModal,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, O.BX)(f.View, {
                              className: "wrap",
                              children: [
                                (0, O.tZ)(f.View, { className: "linear-bg" }),
                                r &&
                                  (0, O.BX)(f.View, {
                                    className: "qp-speed",
                                    children: [
                                      (0, O.BX)(f.View, {
                                        className: "qp-speed-hd",
                                        children: [
                                          (0, O.tZ)(f.View, {
                                            className: "tit",
                                            children: r.f_speedLevel + "抢票中",
                                          }),
                                          (0, O.tZ)(f.View, {
                                            className: "desc",
                                            children: p,
                                          }),
                                        ],
                                      }),
                                      (0, O.tZ)(f.View, {
                                        className: "qp-speed-stage",
                                        children: r.f_speedLevels.map(function (
                                          e
                                        ) {
                                          return (0, O.BX)(
                                            f.View,
                                            {
                                              className:
                                                "item " +
                                                (e.isCurrent ? "current" : ""),
                                              children: [
                                                e.isVIP &&
                                                  (0, O.tZ)(f.Icon, {
                                                    className: "icon-vip",
                                                  }),
                                                e.name,
                                              ],
                                            },
                                            "index"
                                          );
                                        }),
                                      }),
                                      (0, O.BX)(f.View, {
                                        className: "qp-speed-line",
                                        children: [
                                          (0, O.tZ)(f.View, {
                                            className: "item",
                                          }),
                                          [1, 2, 3, 4, 5, 6, 7].map(function (
                                            e
                                          ) {
                                            var t;
                                            return (0, O.tZ)(
                                              f.Block,
                                              {
                                                children:
                                                  e <
                                                    (null ===
                                                      (t = r.grabSpeedInfo) ||
                                                    void 0 === t
                                                      ? void 0
                                                      : t.speed) &&
                                                  (0, O.tZ)(f.View, {
                                                    className: "item",
                                                  }),
                                              },
                                              "index"
                                            );
                                          }),
                                        ],
                                      }),
                                      (0, O.tZ)(f.View, {
                                        className: "qp-speed-txt",
                                        children: (0, O.tZ)(f.View, {
                                          className: "add-speed",
                                          children: (0, O.tZ)(b.ZtRichText, {
                                            className: "add-speed-desc",
                                            nodes: Z.Z.convertAppTextToHtmlStr(
                                              r.f_acceDesc
                                            ),
                                          }),
                                        }),
                                      }),
                                      !(!w.default.isTieyou && I) &&
                                        (!(
                                          null != B && B.acceleratePageModel
                                        ) ||
                                          (null == B ||
                                          null ===
                                            (e = B.acceleratePageModel) ||
                                          void 0 === e
                                            ? void 0
                                            : e.accelerateNumber) >= 5) &&
                                        (this.isCanFriendSpeed ||
                                          w.default.isTT) &&
                                        !(n && !o && n.processFlag > 0) &&
                                        !!(0, T.rh)() &&
                                        (0, O.BX)(f.Block, {
                                          children: [
                                            s &&
                                              (0, O.tZ)(F, {
                                                show: s && s.type > 0,
                                                type: s.type,
                                                title: s.title,
                                                subTitle: s.subTitle,
                                                taskProducts: s.taskProducts,
                                              }),
                                            !w.default.isTT &&
                                              d &&
                                              (0, O.tZ)(f.Button, {
                                                className: "btn",
                                                openType: (0, T.JO)()
                                                  ? "share"
                                                  : "",
                                                id: "AJBE",
                                                onClick: this.openShareDrawer,
                                                children: (0, O.tZ)(f.View, {
                                                  className: "tit",
                                                  children: d,
                                                }),
                                              }),
                                            w.default.isTT &&
                                              (0, O.BX)(f.View, {
                                                className: "tt-btn-box",
                                                children: [
                                                  (0, O.tZ)(f.Button, {
                                                    className: "tt-btn video",
                                                    id: "AJBF",
                                                    onClick: this.speedByVideo,
                                                    children: (0, O.tZ)(
                                                      f.View,
                                                      {
                                                        className: "tit",
                                                        children:
                                                          "发抖音视频助力",
                                                      }
                                                    ),
                                                  }),
                                                  d &&
                                                    (0, O.tZ)(f.Button, {
                                                      className: "tt-btn share",
                                                      openType: "share",
                                                      id: "AJBG",
                                                      onClick:
                                                        this.openShareDrawer,
                                                      children: (0, O.tZ)(
                                                        f.View,
                                                        {
                                                          className: "tit",
                                                          children: d,
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      !(!w.default.isTieyou && I) &&
                                        (null == B
                                          ? void 0
                                          : B.acceleratePageModel) &&
                                        (null === (t = B.acceleratePageModel) ||
                                        void 0 === t
                                          ? void 0
                                          : t.accelerateNumber) < 5 &&
                                        (0, O.tZ)(J, {
                                          hasTurnedOverBoard: z,
                                          setHasTurnedOverBoard: function (e) {
                                            i.setState({
                                              hasTurnedOverBoard: e,
                                            });
                                            var t = C.gT.get() || {},
                                              a = t.hasTurnedOverBoard || {};
                                            (a[i.oid] = e),
                                              (t.hasTurnedOverBoard = a),
                                              C.gT.set(t);
                                          },
                                          openShareDrawer:
                                            this.openShareDrawer.bind(this),
                                          content:
                                            null == B
                                              ? void 0
                                              : B.acceleratePageModel,
                                        }),
                                    ],
                                  }),
                                !w.default.isTieyou &&
                                  I &&
                                  (0, T.rh)() &&
                                  (0, O.tZ)(E, {
                                    content: D,
                                    isUnlockFiveSpeed: V,
                                    openShareDrawer:
                                      this.openShareDrawer.bind(this),
                                    onUnlockClick: function () {
                                      i.setState({
                                        showType: "fiveSpeedDrawer",
                                      });
                                    },
                                  }),
                                h &&
                                  (0, O.BX)(f.View, {
                                    className: "more-speed-up-box",
                                    children: [
                                      (0, O.tZ)(f.View, {
                                        className: "more-speed-up-hd",
                                        children: (0, O.BX)(f.View, {
                                          className: "tit",
                                          children: [
                                            "获得更多",
                                            _.Z.SPEED_PACK,
                                          ],
                                        }),
                                      }),
                                      (0, O.tZ)(f.View, {
                                        className: "more-speed-up-bd",
                                        children:
                                          h.length > 0
                                            ? h.map(function (e) {
                                                return (0,
                                                O.BX)(f.View, { className: "item", children: [(0, O.tZ)(f.Image, { src: e.icon, className: "icon" }), (0, O.BX)(f.View, { className: "tit-box", children: [(0, O.BX)(f.View, { className: "title-box", children: [(0, O.tZ)(f.View, { className: "tit", children: e.title }), e.tag && (0, O.tZ)(f.View, { className: "tag", children: e.tag })] }), (0, O.tZ)(f.View, { className: "sub-tit", children: e.subTitle })] }), 1 === e.taskStatus ? (0, O.tZ)(f.View, { className: "btn", id: "AJBH", onClick: i.handleDoTask.bind(i, e), children: e.btnName }) : (0, O.tZ)(f.View, { className: "btn disabled", children: "已领取" })] }, e.icon);
                                              })
                                            : (0, O.BX)(f.View, {
                                                className: "no-activity",
                                                children: [
                                                  (0, O.tZ)(f.Image, {
                                                    className: "img",
                                                    src: "https://images3.c-ctrip.com/ztrip/train_xie/2021-10/WeChat/img_jsb_kt.png",
                                                  }),
                                                  (0, O.tZ)(f.Text, {
                                                    className: "txt",
                                                    children:
                                                      "当前暂无活动，敬请期待",
                                                  }),
                                                ],
                                              }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, O.tZ)(S.Z, {
                              show: "instructionsModal" === c,
                              onClose: this.hideBackDrop,
                              propStyle: "background: transparent;",
                              hiddenCloseIcon: "true",
                              children: (0, O.BX)(f.View, {
                                className: W
                                  ? "instructions-modal ty"
                                  : "instructions-modal zx",
                                children: [
                                  (0, O.tZ)(f.View, {
                                    className: "title",
                                    children: "邀好友帮加速说明",
                                  }),
                                  (0, O.BX)(f.View, {
                                    className: "content",
                                    children: [
                                      (0, O.tZ)(f.View, {
                                        children:
                                          "1.邀请好友助力，最多可以有50名好友参与本次助力；",
                                      }),
                                      (0, O.BX)(f.View, {
                                        children: [
                                          "2.好友助力所获得的",
                                          _.Z.SPEED_PACK,
                                          "将直接用于本次抢票任务中；",
                                        ],
                                      }),
                                      (0, O.BX)(f.View, {
                                        children: [
                                          "3.若抢票失败，好友助力所获得的",
                                          _.Z.SPEED_PACK,
                                          "将失效。",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, O.tZ)(f.View, {
                                    className: "confirm-btn",
                                    id: "AJBI",
                                    onClick: this.hideBackDrop,
                                    children: "好的",
                                  }),
                                ],
                              }),
                            }),
                            !(
                              "instructionsModal" === c ||
                              "showShareDrawer" === c ||
                              "specialGrabDrawer" === c ||
                              "grabFailBenefitDrawer" === c ||
                              "turnOverBoardDrawer" === c ||
                              "unlockVipDrawer" === c ||
                              "fiveSpeedDrawer" === c ||
                              "grabShareImagePop" === c
                            ) &&
                              (0, O.tZ)(f.View, {
                                className: "backmask " + (c ? "active" : ""),
                                id: "AJBJ",
                                onClick: this.hideBackDrop,
                                onTouchMove: this.noop,
                              }),
                            (0, O.tZ)(P.Z, {
                              type: "normal",
                              shareUrl: l,
                              visible: "grabShareImagePop" === c,
                              onClose: this.hideBackDrop.bind(this),
                              title: v,
                              desc: g,
                            }),
                            m && (0, O.tZ)(y.Z, { style: { top: "5%" } }),
                            "specialGrabDrawer" == c &&
                              (0, O.tZ)(L, {
                                oid: this.oid,
                                data: x,
                                onClose: this.hideBackDrop,
                              }),
                            "grabFailBenifitDrawer" == c &&
                              (0, O.tZ)(X, {
                                oid: this.oid,
                                data: k,
                                onClose: this.hideBackDrop,
                              }),
                            (0, O.tZ)(j, {
                              visible: "turnOverBoardDrawer" === c,
                              hasTurnedOverBoard: z,
                              setHasTurnedOverBoard: function (e) {
                                i.setState({ hasTurnedOverBoard: e });
                                var t = C.gT.get() || {},
                                  a = t.hasTurnedOverBoard || {};
                                (a[i.oid] = e),
                                  (t.hasTurnedOverBoard = a),
                                  C.gT.set(t);
                              },
                              content:
                                null == B ? void 0 : B.acceleratePageModel,
                              openShareDrawer: this.openShareDrawer.bind(this),
                              onClose: this.hideBackDrop.bind(this),
                            }),
                            (0, O.tZ)(R, {
                              oid: this.oid,
                              visible: "unlockVipDrawer" === c,
                              content:
                                null == B
                                  ? void 0
                                  : B.unlockTurnOverBoardRightToast,
                              onClose: this.hideBackDrop.bind(this),
                            }),
                            (0, O.tZ)(K, {
                              oid: this.oid,
                              visible: "fiveSpeedDrawer" === c,
                              content: A,
                              onClose: this.hideBackDrop.bind(this),
                            }),
                            (0, O.tZ)(N.Z, {
                              ref: function (e) {
                                i.onDialogAttach(e);
                              },
                            }),
                          ],
                        });
                      },
                    },
                  ]),
                  i
                );
              })(m.default.Component))
            ) || a;
          (ee.enableShareAppMessage = !0),
            Page(
              (0, r.createPageConfig)(
                ee,
                "pages/trainDetail/friendSpeedUp/index",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "提升成功率",
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
          [
            93611, 74171, 58792, 86167, 79204, 41950, 78419, 94181, 96468, 5182,
            19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(61253);
          }
        ),
          e.O();
      },
    ]);
})();
