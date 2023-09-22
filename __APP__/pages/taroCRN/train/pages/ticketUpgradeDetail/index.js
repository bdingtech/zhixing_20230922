!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [3906],
      {
        21733: function (e, t, a) {
          var i,
            n = a(32180),
            r = a(79301),
            s = a(95308),
            c = a(57042),
            o = a(24460),
            l = a(81876),
            _ = a(21867),
            d = a(86066),
            u = a(45023),
            h = a(52500),
            m = a(92954),
            f = a.n(m),
            p = a(71515),
            g = a(87298),
            Z = a(49528),
            w = a(43884),
            v = a(23577),
            b = a(90098),
            N = a(58374),
            C = a(19972),
            V = a(32970),
            T = a(90582),
            I = a(42039),
            y = a(53550),
            k = a(78995),
            B = a(48813),
            S = function (e) {
              var t = e.page;
              return (0, B.tZ)(k.Z, {
                page: t,
                defaultBackButtonColor: "#222222",
                renderLeftView: function () {
                  return (0, B.tZ)(p.View, {
                    id: "AMED",
                    onClick: function () {
                      "tupSCPE" !== (null == t ? void 0 : t.fromPage)
                        ? (0, m.navigateBack)({ delta: 1 })
                        : (0, V._f)();
                    },
                    children: (0, B.tZ)(p.View, {
                      className: " _i _Gc _Vf _uh _n _l",
                      children: (0, B.tZ)(y.Z, {
                        className: " _rk _Hn _cC _uh",
                        children: "󰲚",
                      }),
                    }),
                  });
                },
                backgroundColor: "transparent",
                renderCenterView: function () {
                  return (0, B.tZ)(p.View, {
                    className: " _i _Ga _n",
                    children: (0, B.tZ)(p.Image, {
                      className: " _dC _nc",
                      src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_CPSJ_zbt_x.png",
                    }),
                  });
                },
                pop: function () {
                  (0, m.navigateBack)({ delta: 1 });
                },
              });
            },
            D = a(94198),
            x = function (e) {
              var t = e.page,
                a = e.data,
                i = void 0 === a ? null : a;
              if (!i) return (0, B.tZ)(p.View, {});
              return (0, B.BX)(p.View, {
                className: " _er _iC _i _Ga _l",
                children: [
                  (0, B.tZ)(p.Image, { className: " _mf _nf", src: i.icon }),
                  (0, B.BX)(p.View, {
                    className: " _j _Rd",
                    children: [
                      (0, B.tZ)(p.View, {
                        className: " _sb _jv _Uc _nb",
                        children: i.statusDesc,
                      }),
                      (0, B.tZ)(p.View, {
                        className: " _Hh _no _R _Ac",
                        children: i.note,
                      }),
                    ],
                  }),
                  -1 !== [1, 2, 3].indexOf(i.orderStatus) &&
                    (0, B.tZ)(p.View, {
                      className: " _If _Bf _jC _x _qe _Uc _o",
                      id: "AMFO",
                      onClick: function () {
                        var e;
                        null == t ||
                          null === (e = t.ubtTrace) ||
                          void 0 === e ||
                          e.call(t, "237091", {
                            PageId: null == t ? void 0 : t.pageId,
                          }),
                          (0, V.tK)(null == t ? void 0 : t.originalOrderId);
                      },
                      children: "原票详情",
                    }),
                ],
              });
            },
            U = function (e) {
              var t = e.oldPasList,
                a = void 0 === t ? [] : t,
                i = e.newPasList,
                n = void 0 === i ? [] : i;
              return (null == a ? void 0 : a.lenght) > 0 &&
                (null == n ? void 0 : n.lenght) > 0
                ? (0, B.tZ)(p.View, {})
                : (0, B.BX)(p.View, {
                    className: " _yd _pb _TC",
                    children: [
                      a.map(function (e, t) {
                        return (0,
                        B.BX)(p.View, { className: "".concat(" _i _Ga _m", " ").concat(t !== a.length - 1 ? " _Rh" : ""), children: [(0, B.BX)(p.View, { className: " _i _Ga _l", children: [(0, B.tZ)(p.View, { className: " _Ce _De _UC _hb _Q _o _qb _ch _Uc _lj", children: "原" }), (0, B.tZ)(p.View, { className: " _U _Ma _sd _Uc", children: e.passengerName }), e.passengerType && (0, B.tZ)(p.View, { className: " _VC _Ma _WC _Uc _dl _Zg _O", children: e.passengerType })] }), (0, B.BX)(p.View, { className: " _i _Ga _l", children: [e.seatTag && (0, B.tZ)(p.View, { className: " _XC _bh _Va _Ma _yn _Uc _O", children: e.seatTag }), (0, B.tZ)(p.View, { className: " _U _Ma _sd _Uc", children: "".concat(e.seatType, " ¥").concat(e.ticketPrice, " ").concat(e.seatNo) })] })] }, t);
                      }),
                      (0, B.BX)(p.View, {
                        className: " _aD _i _Ga _l",
                        children: [
                          (0, B.tZ)(p.Image, {
                            className: " _Ce _De _Qf",
                            src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ZNGQ_ck_jt.png",
                          }),
                          (0, B.tZ)(p.View, { className: " _j _Zf _Zv _bD" }),
                        ],
                      }),
                      n.map(function (e, t) {
                        return (0,
                        B.BX)(p.View, { className: "".concat(" _i _Ga _m", " ").concat(t !== n.length - 1 ? " _Rh" : ""), children: [(0, B.BX)(p.View, { className: " _i _Ga _l", children: [(0, B.tZ)(p.View, { className: " _Ce _De _YC _hb _Q _o _qb _ch _Uc _lj", children: "新" }), (0, B.tZ)(p.View, { className: " _U _Xb _sd _Uc", children: e.passengerName }), e.passengerType && (0, B.tZ)(p.View, { className: " _VC _Ma _WC _Uc _dl _Zg _O", children: e.passengerType })] }), (0, B.BX)(p.View, { className: " _i _Ga _l", children: [e.seatTag && (0, B.tZ)(p.View, { className: " _ZC _bh _Va _Jo _yn _Uc _O", children: e.seatTag }), (0, B.tZ)(p.View, { className: " _U _Xb _sd _Uc", children: "".concat(e.seatType, " ¥").concat(e.ticketPrice, " ").concat(e.seatNo) })] })] }, t);
                      }),
                    ],
                  });
            },
            P = a(82955),
            X = function (e) {
              var t = e.order,
                a = void 0 === t ? null : t,
                i = e.newPasInfo,
                n = void 0 === i ? null : i;
              if (!a) return (0, B.tZ)(p.View, {});
              var r = "".concat(P.Z.formatDate(a.fromDate, "M月D日"), " 出发"),
                s = "".concat(a.trainNo, "·").concat(a.spendTime),
                c = a.ticketInfoList || [],
                o = [];
              n && o.push(n);
              return (0, B.BX)(p.View, {
                className: " _Vb _Oa _er _Ty",
                children: [
                  (0, B.tZ)(w.Z, {
                    start: { x: 0, y: 0 },
                    end: { x: 0, y: 1 },
                    colors: ["rgb(242, 248, 255)", "rgb(255, 255, 255)"],
                    locations: [0, 1],
                    className: " _dc",
                    children: (0, B.BX)(p.View, {
                      className: " _dc _GC",
                      children: [
                        (0, B.tZ)(p.View, {
                          className: " _oc _no _Uc _R _fy",
                          children: r,
                        }),
                        (0, B.BX)(p.View, {
                          className: " _i _Ga _m",
                          children: [
                            (0, B.BX)(p.View, {
                              className: "departBox",
                              children: [
                                (0, B.tZ)(p.View, {
                                  className: " _sb _HC _Uc _Mj",
                                  children: a.fromTime,
                                }),
                                (0, B.tZ)(p.View, {
                                  className: " _sb _jh _Uc _R _ub",
                                  children: a.fromStation,
                                }),
                              ],
                            }),
                            (0, B.BX)(p.View, {
                              className: " _Db _i _l",
                              children: [
                                (0, B.BX)(p.View, {
                                  className: " _Qb _IC _p",
                                  id: "AMFP",
                                  onClick: function () {
                                    (0, V.M$)({
                                      fromStation: a.fromStation,
                                      toStation: a.toStation,
                                      trainNumber: a.trainNo,
                                      date: a.fromDate,
                                    });
                                  },
                                  children: [
                                    (0, B.tZ)(w.Z, {
                                      start: { x: 0, y: 0 },
                                      end: { x: 1, y: 0 },
                                      colors: [
                                        "rgba(135,159,194,0)",
                                        "rgb(135,159,194)",
                                      ],
                                      locations: [0, 1],
                                      className: " _fb _Yq _u _JC _In",
                                    }),
                                    (0, B.tZ)(p.View, {
                                      className: " _Tu _zt _o _S _xh _yn _Uc",
                                      children: "经停信息",
                                    }),
                                    (0, B.tZ)(w.Z, {
                                      start: { x: 0, y: 0 },
                                      end: { x: 1, y: 0 },
                                      colors: [
                                        "rgb(135,159,194)",
                                        "rgba(135,159,194,0)",
                                      ],
                                      locations: [0, 1],
                                      className: " _fb _Yq _u _JC _pn",
                                    }),
                                  ],
                                }),
                                (0, B.tZ)(p.View, {
                                  className: " _sb _no _Uc _R",
                                  children: s,
                                }),
                              ],
                            }),
                            (0, B.BX)(p.View, {
                              className: " _Di",
                              children: [
                                (0, B.tZ)(p.View, {
                                  className: " _sb _HC _Uc _Mj",
                                  children: a.toTime,
                                }),
                                (0, B.tZ)(p.View, {
                                  className: ""
                                    .concat(" _sb _jh _Uc _R _ub", " ")
                                    .concat(" _Di"),
                                  children: a.toStation,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, B.tZ)(p.View, {
                    className: " _KC",
                    children: (0, B.tZ)(U, { oldPasList: c, newPasList: o }),
                  }),
                ],
              });
            },
            R = function (e) {
              var t = e.rules,
                a = void 0 === t ? [] : t;
              if (!a || a.length <= 0) return (0, B.tZ)(p.View, {});
              var i = function () {
                var e = "https://".concat(
                  v.Z.isTieyou ? "m.tieyou.com" : "m.suanya.com",
                  "/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=rebook"
                );
                (0, V.jn)(e);
              };
              return (0, B.BX)(p.View, {
                className: " _Vb _Oa _er _Uf",
                children: [
                  (0, B.tZ)(p.View, {
                    className: " _Ah _Pa _Uc _U _Rh",
                    children: "换座规则说明",
                  }),
                  a.map(function (e, t) {
                    return (0,
                    B.BX)(p.View, { className: " _ub _i _Ga", children: [(0, B.tZ)(p.View, { className: " _Ja _Ia _Kq _OB _Ka _uj" }), (0, B.BX)(p.View, { className: " _Ma _no _R", children: [e, t === a.length - 1 && (0, B.tZ)(p.Text, { className: " _x", id: "AMFN", onClick: i, children: "查看规则" })] })] }, t);
                  }),
                ],
              });
            },
            O = function (e) {
              var t = e.orderStatus,
                a = e.onClick;
              return 1 !== t
                ? (0, B.tZ)(p.View, {})
                : (0, B.tZ)(p.View, {
                    className: " _yb _Vb _Oa _er _o",
                    id: "AMFM",
                    onClick: a,
                    children: (0, B.tZ)(p.Text, {
                      className: " _oc _fd _vs _Uc _o",
                      children: "取消换座",
                    }),
                  });
            },
            j = a(90129),
            M = a(82977),
            A = a(1841),
            G = a(82225),
            q = a(2657),
            z =
              (v.Z.isCRN && v.Z.isTieyou,
              v.Z.isCRN,
              v.Z.isCRN ? "230727_TRN_qxwl" : ""),
            F = function (e) {
              var t = e.visible,
                a = e.orderStatus,
                i = e.onClose,
                n = e.gotoDetail,
                r = e.cancelToast,
                s = e.onCancel,
                c = (0, h.useState)("A"),
                o = (0, j.Z)(c, 2),
                l = o[0],
                _ = o[1];
              (0, h.useEffect)(
                function () {
                  if (
                    t &&
                    1 === a &&
                    null !== v.Z &&
                    void 0 !== v.Z &&
                    v.Z.isCRN
                  ) {
                    var e =
                      (null === q.b4 || void 0 === q.b4
                        ? void 0
                        : (0, q.b4)(z)) || "A";
                    console.log("GetTuDetailRetainNewABTest: ", e), _(e);
                  } else _("A");
                },
                [t, a]
              );
              var d = "",
                u = "",
                m = G.C.SINGLE,
                f = "";
              switch (a) {
                case 1:
                  (d = "要取消换座吗？"),
                    (u =
                      "当前车票正在换座中，换座过程不影响车票正常使用，确认要取消吗？"),
                    (m = G.C.MULTI);
                  break;
                case 2:
                  (d = "抱歉，升级失败"),
                    (u =
                      "当前购票乘客过多，您的车票升级失败，原车票可正常乘车。"),
                    (f = "知道了");
                  break;
                case 6:
                  (d = "升级成功，可查看车票"),
                    (u =
                      "恭喜！您的车票已升级成功，可使用新车票乘车，原车票已自动作废。"),
                    (f = "去查看");
              }
              var g = "B" === l && r;
              return (0, B.BX)(h.Fragment, {
                children: [
                  "single" === m &&
                    (0, B.tZ)(G.Z, {
                      id: "AMFW",
                      isShow: t,
                      isShowClose: !1,
                      title: d,
                      content: u,
                      buttonName: f,
                      onClose: i,
                      onButtonClick: function () {
                        6 !== a ? i() : n();
                      },
                    }),
                  "multi" === m &&
                    !g &&
                    (0, B.tZ)(G.Z, {
                      id: "AMFX",
                      isShow: t,
                      isShowClose: !1,
                      title: d,
                      content: u,
                      showType: m,
                      leftButtonName: "再想想",
                      rightButtonName: "确认取消",
                      onClose: i,
                      onLeftButtonClick: function () {
                        return i(!0);
                      },
                      onRightButtonClick: s,
                    }),
                  "multi" === m &&
                    g &&
                    (0, B.tZ)(M.Z, {
                      onCancel: i,
                      innerContainerStyle: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        zIndex: 1001,
                        backgroundColor: "#fff",
                      },
                      children: (0, B.BX)(p.View, {
                        className: " _CC _p _i _k _l",
                        children: [
                          (0, B.tZ)(p.Image, {
                            className: " _Wb _od _u _q _s _t",
                            style: { width: (0, Z.fM)() },
                            src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_Ticket_tui_BG_zx.png",
                          }),
                          (0, B.tZ)(p.Image, {
                            className: " _Pp _Lp _Mi _p _kc",
                            src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/08/img_wltc_tt.png",
                          }),
                          (0, B.tZ)(A.Z, {
                            style: {
                              fontSize: 20,
                              color: "#222222",
                              fontWeight: "500",
                              fontFamily: "PingFangSC-Medium",
                              textAlign: "center",
                            },
                            children: r.title,
                          }),
                          (0, B.tZ)(p.View, {
                            className: " _oc _sd _U _qd _o",
                            children: r.subTitle,
                          }),
                          (0, B.BX)(p.View, {
                            className: " _td _i _Ga _m _Z",
                            children: [
                              (0, B.BX)(p.View, {
                                className: " _i _nj _l _n _vd _Oa",
                                id: "tuDetailDrawerCancel",
                                onClick: function () {
                                  return i(!0);
                                },
                                children: [
                                  (0, B.tZ)(p.Text, {
                                    className: " _Ge _Yb _Qf _V",
                                    children: "再想想",
                                  }),
                                  r.autoCancelNote &&
                                    (0, B.tZ)(p.Text, {
                                      className: " _Ge _DC _gj _O",
                                      children: r.autoCancelNote,
                                    }),
                                ],
                              }),
                              (0, B.tZ)(p.View, {
                                className: " _j _Xc _w _dc _b _Yb _o _Sf",
                                id: "tuDetailDrawerConfirm",
                                onClick: s,
                                children: "确认取消",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                ],
              });
            },
            L = function (e) {
              var t,
                a = e.page,
                i = e.data,
                n = e.onShare,
                r = void 0 === n ? function () {} : n;
              if (
                ((0, h.useEffect)(
                  function () {
                    var e;
                    i &&
                      0 === i.state &&
                      (null == a ||
                        null === (e = a.ubtTrace) ||
                        void 0 === e ||
                        e.call(a, "TZATktUpdateDetail_FriendZhuli_exposure", {
                          PageId: null == a ? void 0 : a.pageId,
                        }));
                  },
                  [i]
                ),
                !i)
              )
                return (0, B.tZ)(B.HY, {});
              var s = i.title,
                c = void 0 === s ? "" : s,
                o = i.subTitle,
                l = void 0 === o ? "" : o,
                _ = i.desc,
                d = void 0 === _ ? "" : _,
                u = i.state,
                m = i.acclerateRecord || [],
                f = 3 - m.length;
              f > 0 && (m = m.concat(new Array(f).fill({})));
              var g = function (e) {
                var t = "";
                switch (e) {
                  case 0:
                    t = " _p _dz";
                    break;
                  case 1:
                    t = " _p _in _ez";
                    break;
                  case 2:
                    t = " _p _kc _ez";
                }
                return t;
              };
              return (0, B.BX)(p.View, {
                className: " _a _Oa _er _EC _i _Ga _l",
                children: [
                  (0, B.BX)(p.View, {
                    className: " _j",
                    children: [
                      (0, B.BX)(p.View, {
                        className: " _i _Ga _l",
                        children: [
                          (0, B.tZ)(p.View, {
                            className: " _ok _Wc _Uc _W _Va",
                            children: c,
                          }),
                          (0, B.tZ)(p.View, {
                            className: " _Rj _O _Hi _FC _Al _b _zy",
                            children: l,
                          }),
                        ],
                      }),
                      (0, B.tZ)(p.View, {
                        className: " _Kc _Of _Uc _R _Km",
                        children: d,
                      }),
                    ],
                  }),
                  (0, B.tZ)(p.View, {
                    className: " _i _Ga",
                    children:
                      null === (t = m) || void 0 === t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0,
                            B.tZ)(p.Image, { className: "".concat(" _Tk _mb _Xa", " ").concat(g(t)), src: (null == e ? void 0 : e.wechatPhoto) || "https://images3.c-ctrip.com/ztrip/train_xie/2023/08/icon_ZXHZ_yq.png" }, t);
                          }),
                  }),
                  0 === u &&
                    (0, B.tZ)(p.Button, {
                      id: "tuDetailShareBtn",
                      className: " _Gq _mb _nb _Dz _ye _o _Ee",
                      openType: "share",
                      onClick: r,
                      children: (0, B.tZ)(p.Text, {
                        className: " _x _Vz _Uc",
                        children: "邀请",
                      }),
                    }),
                  1 === u &&
                    (0, B.tZ)(p.View, {
                      className: " _S _Ma _Of _Uc _Ee",
                      children: "权益生效",
                    }),
                ],
              });
            },
            H = f().getSystemInfoSync(),
            E =
              (0, g.h)()(
                (i = (function (e) {
                  (0, _.Z)(a, e);
                  var t = (0, d.Z)(a);
                  function a(e) {
                    var i;
                    return (
                      (0, c.Z)(this, a),
                      (i = t.call(this, e)),
                      (0, u.Z)((0, l.Z)(i), "oid", void 0),
                      (0, u.Z)((0, l.Z)(i), "originalOrderId", void 0),
                      (0, u.Z)((0, l.Z)(i), "fromPage", void 0),
                      (0, u.Z)(
                        (0, l.Z)(i),
                        "pageId",
                        v.Z.isCRN ? "10650096360" : "10650096368"
                      ),
                      (i.state = {
                        statusInfo: null,
                        orderInfo: null,
                        upgradeRules: [],
                        upgradePasInfo: null,
                        isShowTipsDrawer: !1,
                        cancelToast: null,
                        inviteBannerInfo: null,
                      }),
                      i
                    );
                  }
                  return (
                    (0, o.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            t =
                              null ===
                                (e = (0, m.getCurrentInstance)().router) ||
                              void 0 === e
                                ? void 0
                                : e.params;
                          (this.oid = null == t ? void 0 : t.oid),
                            (this.fromPage = null == t ? void 0 : t.fromPage),
                            this.loadData(),
                            this.ubtTrace("237090", { PageId: this.pageId });
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "loadData",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e() {
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (0, C.Q)("加载中..."),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          this.getDetailInfo()
                                        );
                                      case 4:
                                        this.getTrainCross(), (e.next = 10);
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(1)),
                                          console.log("load data failed", e.t0);
                                      case 10:
                                        return (
                                          (e.prev = 10),
                                          (0, C.Z)(),
                                          e.finish(10)
                                        );
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 7, 10, 13]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getDetailInfo",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, a;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          (0, N.SK)({ orderNumber: this.oid })
                                        );
                                      case 2:
                                        1 === (t = e.sent).resultCode &&
                                          ((this.originalOrderId =
                                            t.originOrderNumber),
                                          this.setState({
                                            statusInfo: t.headInfo,
                                            orderInfo: t.originOrderInfo,
                                            upgradeRules: t.upgradeRules,
                                            upgradePasInfo: t.upgradePostPti,
                                            cancelToast: t.cancelToast,
                                          }),
                                          -1 !==
                                            [2, 6].indexOf(
                                              null === (a = t.headInfo) ||
                                                void 0 === a
                                                ? void 0
                                                : a.orderStatus
                                            ) && this.showTipsDrawer());
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
                        key: "showTipsDrawer",
                        value: function () {
                          this.ubtTrace("237092", { PageId: this.pageId });
                          var e = this.state.statusInfo;
                          1 === (null == e ? void 0 : e.orderStatus) &&
                            this.ubtTrace("237097", { PageId: this.pageId }),
                            this.setState({ isShowTipsDrawer: !0 });
                        },
                      },
                      {
                        key: "closeTipsDrawer",
                        value: function () {
                          var e =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0];
                          e && this.ubtTrace("237099", { PageId: this.pageId }),
                            this.setState({ isShowTipsDrawer: !1 });
                        },
                      },
                      {
                        key: "goTrainDetailPage",
                        value: function () {
                          this.closeTipsDrawer(),
                            (0, V.tK)(this.originalOrderId);
                        },
                      },
                      {
                        key: "onCancelOrder",
                        value: function () {
                          var e = this;
                          this.ubtTrace("237098", { PageId: this.pageId }),
                            this.closeTipsDrawer(),
                            (0, C.Q)("正在取消订单");
                          var t = { orderNumber: this.oid };
                          (0, N.Li)(t)
                            .then(function (t) {
                              if (1 === t.resultCode) e.loadData();
                              else {
                                var a =
                                  null != t && t.resultMessage
                                    ? t.resultMessage
                                    : "网络请求失败，请重试";
                                (0, T.v)("", a);
                              }
                            })
                            .catch(function (e) {
                              console.log("cancel failed", e);
                            })
                            .finally(function () {
                              (0, C.Z)();
                            });
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          var e = this.state.inviteBannerInfo;
                          return {
                            title: "",
                            path: (null == e ? void 0 : e.jumpUrl) || "",
                            imageUrl: v.Z.isTieyou
                              ? "https://images3.c-ctrip.com/ztrip/train_xie/2023/08/img_ZXHZ_fx_ty.png"
                              : "https://images3.c-ctrip.com/ztrip/train_xie/2023/08/img_ZXHZ_yq_fxkp.png",
                          };
                        },
                      },
                      {
                        key: "onInviteClick",
                        value: function () {
                          var e = this.state.inviteBannerInfo;
                          0 === (null == e ? void 0 : e.state) &&
                            this.ubtTrace(
                              "TZATktUpdateDetail_FriendZhuli_click",
                              { PageId: this.pageId }
                            ),
                            v.Z.isTieyou,
                            v.Z.isTieyou,
                            null == e || e.jumpUrl,
                            v.Z.isTieyou || null == e || e.grabAppId;
                        },
                      },
                      {
                        key: "getTrainCross",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, a, i, n, s, c, o, l;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (t = new I.Z({
                                            fromPage: I.E.tupOrderDetail,
                                          })),
                                          (a = {
                                            orderNumber: "".concat(this.oid),
                                            originOrderNumber: "".concat(
                                              this.originalOrderId
                                            ),
                                            fromSource: 11,
                                          }),
                                          (e.next = 5),
                                          (0, N.$q)(a)
                                        );
                                      case 5:
                                        1 === (i = e.sent).resultCode &&
                                          ((s = i.notices),
                                          (c = i.areas),
                                          (o = i.toasts),
                                          t.initData({
                                            notices: s,
                                            areas: c,
                                            toasts: o,
                                          }),
                                          (l =
                                            (null ===
                                              (n = t.getAreaByCode(
                                                "TicketUpgradeDetailArea"
                                              )) || void 0 === n
                                              ? void 0
                                              : n._jsonInfo) || null),
                                          this.setState({
                                            inviteBannerInfo: l,
                                          })),
                                          (e.next = 12);
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(0)),
                                          console.log(
                                            "get trainCross failed",
                                            e.t0
                                          );
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 9]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.statusInfo,
                            a = e.orderInfo,
                            i = e.upgradeRules,
                            n = e.upgradePasInfo,
                            r = e.isShowTipsDrawer,
                            s = e.cancelToast,
                            c = e.inviteBannerInfo;
                          return (0, B.BX)(p.View, {
                            className: "page",
                            children: [
                              (0, B.tZ)(S, { page: this }),
                              (0, B.tZ)(w.Z, {
                                start: { x: 0, y: 0 },
                                end: { x: 0, y: 1 },
                                colors: [
                                  "rgb(179, 210, 255)",
                                  "rgb(245, 245, 245)",
                                ],
                                style: W.bg,
                              }),
                              (0, B.BX)(p.ScrollView, {
                                className: "scroll-container",
                                showsVerticalScrollIndicator: !1,
                                scrollY: !0,
                                children: [
                                  (0, B.tZ)(x, { page: this, data: t }),
                                  (0, B.tZ)(X, { order: a, newPasInfo: n }),
                                  (0, B.tZ)(L, {
                                    page: this,
                                    data: c,
                                    onShare: this.onInviteClick.bind(this),
                                  }),
                                  (0, B.tZ)(R, { rules: i }),
                                  (0, B.tZ)(O, {
                                    orderStatus:
                                      null == t ? void 0 : t.orderStatus,
                                    id: "AMFS",
                                    onClick: this.showTipsDrawer.bind(this),
                                  }),
                                  (0, B.tZ)(D.Z, {}),
                                ],
                              }),
                              (0, B.tZ)(F, {
                                visible: r,
                                orderStatus: null == t ? void 0 : t.orderStatus,
                                cancelToast: s,
                                onClose: this.closeTipsDrawer.bind(this),
                                gotoDetail: this.goTrainDetailPage.bind(this),
                                onCancel: this.onCancelOrder.bind(this),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(h.Component))
              ) || i,
            W = (0, Z.lW)({
              bg: {
                position: "absolute",
                top: 0,
                left: 0,
                width: v.Z.isCRN ? H.windowWidth : "750rpx",
                height: 240,
                paddingTop: v.Z.isCRN
                  ? 0
                  : "".concat(44 + (b.Z.statusBarHeight || 0), "px"),
              },
            }),
            K = E;
          (K.enableShareAppMessage = !0),
            Page(
              (0, n.createPageConfig)(
                K,
                "pages/taroCRN/train/pages/ticketUpgradeDetail/index",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "",
                  navigationStyle: "custom",
                  navigationBarTextStyle: "black",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98946, 3322, 36332, 95854, 59188, 35048, 70486, 97709, 6189, 22843,
            6878, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(21733);
          }
        ),
          e.O();
      },
    ]);
})();
